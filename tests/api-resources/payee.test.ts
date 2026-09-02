// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ivy from '@getivy/node-sdk';

const client = new Ivy({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payee', () => {
  // Mock server tests are disabled
  test.skip('verify: only required params', async () => {
    const responsePromise = client.payee.verify({
      payee: {
        iban: { accountHolderName: 'x', iban: 'iban' },
        type: 'iban',
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('verify: required and optional params', async () => {
    const response = await client.payee.verify({
      payee: {
        iban: {
          accountHolderName: 'x',
          iban: 'iban',
          bic: 'bic',
        },
        type: 'iban',
      },
    });
  });
});
