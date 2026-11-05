import { readFile } from 'node:fs/promises';
import Ivy from '../src';

async function main(): Promise<void> {
  const keyPath = process.env['SIGNING_PRIVATE_KEY_PATH'];
  const apiKey = process.env['IVY_API_KEY'];

  if (!keyPath || !apiKey) {
    throw new Error('Set SIGNING_PRIVATE_KEY_PATH and IVY_API_KEY for a dedicated local API key.');
  }

  const client = new Ivy({
    apiKey,
    signingPrivateKey: await readFile(keyPath, 'utf8'),
    baseURL: 'http://localhost:3333',
    maxRetries: 0,
    logLevel: 'off',
  });

  const response = await client.balance.retrieve({ currency: 'EUR' }).asResponse();

  console.log(`Signed local request returned HTTP ${response.status}.`);
}

void main();
