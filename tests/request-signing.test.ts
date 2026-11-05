import { createHash, generateKeyPairSync, verify, type KeyObject } from 'node:crypto';
import Client from '../src';
import { inspect } from 'node:util';

jest.mock('../src/internal/utils/sleep', () => ({ sleep: async () => {} }));

const authorizationHeader: string = 'x-ivy-api-key';
const apiKey = 'synthetic-test-key';
const authorization = authorizationHeader === 'authorization' ? `Bearer ${apiKey}` : apiKey;

function keyPair(algorithm: string) {
  if (algorithm === 'Ed25519') return generateKeyPairSync('ed25519');
  return generateKeyPairSync('ec', { namedCurve: 'prime256v1' });
}

function privatePem(key: KeyObject): string {
  return key.export({ type: 'pkcs8', format: 'pem' }).toString();
}

async function verifyRequest(request: Request, publicKey: KeyObject, algorithm: string): Promise<boolean> {
  const input = request.headers.get('signature-input');
  const signature = request.headers.get('signature');
  const parameters = input?.slice('sig1='.length);
  const covered = parameters?.match(/^\(([^)]+)\)/)?.[1]?.match(/"[^"]+"/g);
  if (!parameters || !covered || !signature) throw new Error('Request signature headers are missing.');
  const lines = covered.map((component) => {
    const name = component.slice(1, -1);
    if (name === '@method') return `${component}: ${request.method}`;
    if (name === '@target-uri') return `${component}: ${request.url}`;
    return `${component}: ${request.headers.get(name)}`;
  });
  lines.push(`"@signature-params": ${parameters}`);
  const body = Buffer.from(await request.clone().arrayBuffer());
  expect(request.headers.get('content-digest')).toBe(
    `sha-256=:${createHash('sha256').update(body).digest('base64')}:`,
  );
  expect(request.headers.get(authorizationHeader)).toBe(authorization);
  expect(parameters).toContain(';created=1800000000;');
  expect(parameters).toMatch(/;nonce="[A-Za-z0-9_-]{32}";/);
  expect(parameters).toContain(';tag="api-request"');
  const jwk = publicKey.export({ format: 'jwk' });
  const members =
    algorithm === 'Ed25519' ?
      { crv: jwk.crv, kty: jwk.kty, x: jwk.x }
    : { crv: jwk.crv, kty: jwk.kty, x: jwk.x, y: jwk.y };
  const keyId = createHash('sha256').update(JSON.stringify(members)).digest('base64url');
  expect(parameters).toContain(`;keyid="${keyId}";`);
  return verify(
    algorithm === 'Ed25519' ? null : 'sha256',
    Buffer.from(lines.join('\n')),
    { key: publicKey, dsaEncoding: 'ieee-p1363' },
    Buffer.from(signature.slice('sig1=:'.length, -1), 'base64'),
  );
}

afterEach(() => jest.restoreAllMocks());

describe.each(['Ed25519', 'P-256'])('automatic request signing: %s', (algorithm) => {
  it.each(['GET', 'POST'])(
    'signs final %s requests with the registered public-key thumbprint',
    async (method) => {
      jest.spyOn(Date, 'now').mockReturnValue(1_800_000_000_000);
      const pair = keyPair(algorithm);
      const requests: Request[] = [];
      const client = new Client({
        apiKey,
        baseURL: 'http://localhost:3333',
        signingPrivateKey: privatePem(pair.privateKey),
        fetch: async (url, init) => {
          requests.push(new Request(url, init));
          expect(init?.redirect).toBe('error');
          return Response.json({ ok: true });
        },
      });
      const options = {
        headers: { 'Api-Version': '2026-05-01' },
        idempotencyKey: 'synthetic-idempotency-key',
      };
      const result =
        method === 'GET' ?
          await client.get('/signing-test?q=%C3%A4&limit=1', options)
        : await client.post('/signing-test?q=%C3%A4&limit=1', {
            ...options,
            body: { message: 'synthetic café' },
          });
      expect(result).toEqual({ ok: true });
      const request = requests[0];
      if (!request) throw new Error('Request was not sent.');
      expect(request.url).toBe('http://localhost:3333/signing-test?q=%C3%A4&limit=1');
      expect(await verifyRequest(request, pair.publicKey, algorithm)).toBe(true);
      expect(request.headers.get('signature-input')).toContain('"api-version"');
      if (method === 'POST') {
        expect(request.headers.get('idempotency-key')).toBe('synthetic-idempotency-key');
        expect(request.headers.get('signature-input')).toContain('"idempotency-key"');
        expect(await request.text()).toBe(JSON.stringify({ message: 'synthetic café' }));
      }
      if (method === 'GET') {
        expect(request.headers.get('signature-input')).not.toContain('"content-type"');
        expect(request.headers.get('signature-input')).not.toContain('"idempotency-key"');
      }
    },
  );

  it('re-signs retries with unique nonces and preserves the idempotency key', async () => {
    jest.spyOn(Date, 'now').mockReturnValue(1_800_000_000_000);
    const pair = keyPair(algorithm);
    const requests: Request[] = [];
    const client = new Client({
      apiKey,
      baseURL: 'http://localhost:3333',
      signingPrivateKey: privatePem(pair.privateKey),
      fetch: async (url, init) => {
        requests.push(new Request(url, init));
        return requests.length === 1 ?
            Response.json({ error: 'synthetic retry' }, { status: 500, headers: { 'retry-after-ms': '1' } })
          : Response.json({ ok: true });
      },
    });
    await client.post('/signing-test', { body: { message: 'synthetic retry' } });
    expect(requests).toHaveLength(2);
    const [first, second] = requests;
    if (!first || !second) throw new Error('Retry was not sent.');
    expect(await verifyRequest(first, pair.publicKey, algorithm)).toBe(true);
    expect(await verifyRequest(second, pair.publicKey, algorithm)).toBe(true);
    expect(second.headers.get('idempotency-key')).toBe(first.headers.get('idempotency-key'));
    expect(second.headers.get('signature-input')).not.toBe(first.headers.get('signature-input'));
  });
});

describe('request signing configuration', () => {
  it('preserves signing in withOptions and allows explicitly disabling it', async () => {
    const pair = keyPair('Ed25519');
    const signed: boolean[] = [];
    const client = new Client({
      apiKey,
      signingPrivateKey: privatePem(pair.privateKey),
      fetch: async (_url, init) => {
        signed.push(new Headers(init?.headers).has('signature'));
        return Response.json({ ok: true });
      },
    });
    await client.withOptions({ timeout: 1000 }).get('/signing-test');
    await client.withOptions({ signingPrivateKey: null }).get('/signing-test');
    expect(signed).toEqual([true, false]);
    expect(inspect(client, { depth: 3 })).not.toContain('PRIVATE KEY');
  });

  it('keeps private keys and signature material out of debug logs', async () => {
    const pair = keyPair('Ed25519');
    const pem = privatePem(pair.privateKey);
    const entries: unknown[] = [];
    let signature: string | null = null;
    const log = (...arguments_: unknown[]) => {
      entries.push(arguments_);
    };
    const client = new Client({
      apiKey,
      signingPrivateKey: pem,
      logLevel: 'debug',
      logger: { debug: log, info: log, warn: log, error: log },
      fetch: async (_url, init) => {
        signature = new Headers(init?.headers).get('signature');
        return Response.json({ ok: true });
      },
    });
    await client.get('/signing-test');
    const serialized = JSON.stringify(entries);
    expect(entries.length).toBeGreaterThan(0);
    expect(serialized).not.toContain(pem);
    expect(serialized).not.toContain('PRIVATE KEY');
    expect(serialized).not.toContain(apiKey);
    expect(serialized).not.toContain(';nonce=');
    if (!signature) throw new Error('Request was not signed.');
    expect(serialized).not.toContain(signature);
  });

  it('leaves requests unsigned when no signing key is configured', async () => {
    const fetch = jest.fn(async (_url: string | URL | Request, init?: RequestInit) => {
      expect(new Headers(init?.headers).has('signature')).toBe(false);
      expect(new Headers(init?.headers).has('content-digest')).toBe(false);
      return Response.json({ ok: true });
    });
    await new Client({ apiKey, fetch }).get('/signing-test');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it.each([
    'invalid-private-key',
    '-----BEGIN PRIVATE KEY-----\nc3ludGhldGljLWludmFsaWQ=\n-----END PRIVATE KEY-----',
  ])('rejects invalid keys before sending a request without exposing their contents', async (pem) => {
    const fetch = jest.fn(async () => Response.json({ ok: true }));
    const client = new Client({ apiKey, signingPrivateKey: pem, fetch });
    await expect(client.get('/signing-test')).rejects.toThrow(/Request signing requires/);
    expect(fetch).not.toHaveBeenCalled();
  });

  it('rejects unsupported key algorithms before sending a request', async () => {
    const pair = generateKeyPairSync('ec', { namedCurve: 'secp384r1' });
    const fetch = jest.fn(async () => Response.json({ ok: true }));
    const client = new Client({ apiKey, signingPrivateKey: privatePem(pair.privateKey), fetch });
    await expect(client.get('/signing-test')).rejects.toThrow(
      'Request signing requires a valid Ed25519 or P-256 private key.',
    );
    expect(fetch).not.toHaveBeenCalled();
  });

  it.each(['text/plain', 'application/x-www-form-urlencoded'])(
    'rejects unsupported content type %s before sending a request',
    async (contentType) => {
      const pair = keyPair('Ed25519');
      const fetch = jest.fn(async () => Response.json({ ok: true }));
      const client = new Client({ apiKey, signingPrivateKey: privatePem(pair.privateKey), fetch });
      await expect(
        client.post('/signing-test', { body: 'synthetic', headers: { 'content-type': contentType } }),
      ).rejects.toThrow('Request signing requires application/json');
      expect(fetch).not.toHaveBeenCalled();
    },
  );
});
