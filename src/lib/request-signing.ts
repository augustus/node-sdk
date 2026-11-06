import { appendSignature, createSignature, type Signer } from 'http-message-sig';

type SigningKey = Awaited<ReturnType<typeof globalThis.crypto.subtle.importKey>>;

type SigningCredentials = {
  keyId: string;
  signer: Signer;
};

function base64(bytes: Uint8Array): string {
  return btoa(Array.from(bytes, (byte) => String.fromCharCode(byte)).join(''));
}

function base64url(bytes: Uint8Array): string {
  return base64(bytes).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function importPrivateKey(bytes: Uint8Array<ArrayBuffer>): Promise<SigningKey> {
  try {
    return await crypto.subtle.importKey('pkcs8', bytes, 'Ed25519', true, ['sign']);
  } catch {
    return crypto.subtle.importKey('pkcs8', bytes, { name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign']);
  }
}

async function signingCredentials(pem: string): Promise<SigningCredentials> {
  if (!globalThis.crypto?.subtle) {
    throw new Error('Request signing requires Web Crypto support.');
  }

  const match = /^-----BEGIN PRIVATE KEY-----\s+([A-Za-z0-9+/=\s]+)-----END PRIVATE KEY-----$/.exec(
    pem.trim(),
  );
  const encoded = match?.[1];
  if (!encoded) {
    throw new Error('Request signing requires an unencrypted PKCS#8 Ed25519 or P-256 private PEM key.');
  }

  let key: SigningKey;
  try {
    const bytes = Uint8Array.from(atob(encoded.replace(/\s/g, '')), (character) => character.charCodeAt(0));
    key = await importPrivateKey(bytes);
  } catch {
    throw new Error(
      'Request signing requires a valid Ed25519 or P-256 private key. Check that this runtime supports the key algorithm in Web Crypto.',
    );
  }

  const jwk = await crypto.subtle.exportKey('jwk', key);
  const isEd25519 = key.algorithm.name === 'Ed25519';
  const members =
    isEd25519 ? { crv: jwk.crv, kty: jwk.kty, x: jwk.x } : { crv: jwk.crv, kty: jwk.kty, x: jwk.x, y: jwk.y };
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(JSON.stringify(members)));

  const algorithm = isEd25519 ? { name: 'Ed25519' } : { name: 'ECDSA', hash: 'SHA-256' };
  return {
    keyId: base64url(new Uint8Array(digest)),
    signer: {
      algorithm: isEd25519 ? 'ed25519' : 'ecdsa-p256-sha256',
      async sign(bytes) {
        return new Uint8Array(await crypto.subtle.sign(algorithm, key, new Uint8Array(bytes)));
      },
    },
  };
}

export class RequestSigner {
  #privateKey: string;
  #credentials: Promise<SigningCredentials> | undefined;

  constructor(privateKey: string) {
    this.#privateKey = privateKey;
  }

  async sign(
    request: RequestInit,
    url: string,
    authorizationHeader: 'authorization' | 'x-ivy-api-key',
  ): Promise<void> {
    const target = new URL(url);
    if (target.hash || target.username || target.password || !['http:', 'https:'].includes(target.protocol)) {
      throw new Error('Request signing requires an HTTP URL without credentials or a fragment.');
    }
    if (request.body != null && typeof request.body !== 'string') {
      throw new Error('Request signing supports only serialized JSON request bodies.');
    }

    const headers = new Headers(request.headers);
    const contentType = headers.get('content-type');
    if (
      (contentType !== null && !/^application\/json\s*(;|$)/i.test(contentType.trim())) ||
      (request.body && !contentType)
    ) {
      throw new Error('Request signing requires application/json for requests with a body.');
    }
    const encoding = headers.get('content-encoding');
    if (encoding !== null && encoding.trim().toLowerCase() !== 'identity') {
      throw new Error('Request signing does not support encoded request bodies.');
    }
    if (!headers.get(authorizationHeader)?.trim()) {
      throw new Error('Request signing requires the API authentication header.');
    }

    const credentials = await (this.#credentials ??= signingCredentials(this.#privateKey));
    const body = new TextEncoder().encode(request.body ?? '');
    const digest = await crypto.subtle.digest('SHA-256', body);
    headers.set('content-digest', `sha-256=:${base64(new Uint8Array(digest))}:`);

    const components = ['@method', '@target-uri', authorizationHeader];
    for (const name of ['content-type', 'content-digest', 'idempotency-key', 'api-version']) {
      if (headers.has(name)) components.push(name);
    }

    headers.delete('signature');
    headers.delete('signature-input');
    const fields = await createSignature(
      {
        kind: 'request',
        method: (request.method ?? 'GET').toUpperCase(),
        targetUri: target.href,
        fields: Array.from(headers, ([name, value]) => ({ name, value })),
      },
      {
        label: 'sig1',
        components,
        parameters: {
          created: Math.floor(Date.now() / 1000),
          nonce: base64url(crypto.getRandomValues(new Uint8Array(24))),
          keyid: credentials.keyId,
          tag: 'api-request',
        },
        signer: credentials.signer,
      },
    );

    request.headers = appendSignature(headers, fields);
    request.redirect = 'error';
  }
}
