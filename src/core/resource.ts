// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Ivy } from '../client';

export abstract class APIResource {
  protected _client: Ivy;

  constructor(client: Ivy) {
    this._client = client;
  }
}
