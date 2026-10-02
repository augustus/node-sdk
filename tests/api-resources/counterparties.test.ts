// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ivy from '@getivy/node-sdk';

const client = new Ivy({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource counterparties', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.counterparties.create({ financialAddress: { type: 'iban' } });
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
    const response = await client.counterparties.create({
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
        bic: {
          accountHolderName: 'x',
          accountNumber: 'accountNumber',
          bic: 'bic',
          localBankCode: 'localBankCode',
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
      dateOfBirth: '7321-69-10',
      entityType: 'business',
      isSelfOwned: true,
      metadata: { foo: 'string' },
      name: 'name',
      physicalAddress: {
        city: 'x',
        countryCode: 'AF',
        line1: 'x',
        line2: 'x',
        postalCode: 'x',
        state: 'x',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.counterparties.retrieve({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
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
    const response = await client.counterparties.retrieve({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.counterparties.update({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.counterparties.update({
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      dateOfBirth: '7321-69-10',
      entityType: 'business',
      isSelfOwned: true,
      name: 'name',
      physicalAddress: {
        city: 'x',
        countryCode: 'AF',
        line1: 'x',
        line2: 'x',
        postalCode: 'x',
        state: 'x',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.counterparties.list({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
