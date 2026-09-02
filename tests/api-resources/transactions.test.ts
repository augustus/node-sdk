// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ivy from '@getivy/node-sdk';

const client = new Ivy({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transactions', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.transactions.list({ from: 0, to: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.transactions.list({
      from: 0,
      to: 0,
      accountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      afterCursor: 'x',
    });
  });
});
