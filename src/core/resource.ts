// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Augustus } from '../client';

export abstract class APIResource {
  protected _client: Augustus;

  constructor(client: Augustus) {
    this._client = client;
  }
}
