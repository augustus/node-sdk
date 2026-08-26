// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augustus from '@getivy/node-sdk';

const client = new Augustus({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payouts', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.payouts.create({
      amount: 1.01,
      currency: 'EUR',
      destination: {},
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
  test.skip('create: required and optional params', async () => {
    const response = await client.payouts.create({
      amount: 1.01,
      currency: 'EUR',
      destination: {
        address: {
          city: 'x',
          countryCode: 'AF',
          line1: 'x',
          line2: 'x',
          postalCode: 'x',
          state: 'x',
        },
        financialAddress: {
          type: 'iban',
          aba: {
            accountHolderName: 'x',
            accountNumber: '269125115713',
            routingNumber: '269125115713',
          },
          bankCode: {
            accountHolderName: 'x',
            accountNumber: 'accountNumber',
            code: 'code',
          },
          bban: {
            accountHolderName: 'x',
            bban: 'bban',
            bic: 'bic',
          },
          iban: {
            accountHolderName: 'x',
            iban: 'iban',
            bic: 'bic',
          },
          sortCode: {
            accountHolderName: 'x',
            accountNumber: '095',
            sortCode: '269125115713',
          },
          wallet: { address: 'address', blockchain: 'BTC' },
        },
        orderId: 'orderId',
        type: 'beneficiary',
      },
      metadata: { foo: 'bar' },
      paymentReference: 'x',
      rail: 'SEPA_INSTANT',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.payouts.retrieve({ id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.payouts.retrieve({ id: 'id' });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.payouts.list({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
