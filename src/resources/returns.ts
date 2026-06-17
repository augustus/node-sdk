// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Returns extends APIResource {
  /**
   * Creates a return for a deposit.
   */
  create(body: ReturnCreateParams, options?: RequestOptions): APIPromise<ReturnCreateResponse> {
    return this._client.post('/api/service/return/create', { body, ...options });
  }

  /**
   * Retrieves a return by its ID.
   */
  retrieve(body: ReturnRetrieveParams, options?: RequestOptions): APIPromise<ReturnRetrieveResponse> {
    return this._client.post('/api/service/return/retrieve', { body, ...options });
  }
}

export interface ReturnCreateResponse {
  /**
   * The ID of the return
   */
  id: string;

  /**
   * The amount of the return
   */
  amount: number;

  /**
   * The date and time the return was created
   */
  createdAt: string;

  /**
   * The currency of the return
   */
  currency: 'EUR' | 'GBP' | 'PLN' | 'SEK' | 'DKK' | 'USD' | 'USDC' | 'BTC';

  /**
   * The ID of the associated deposit
   */
  depositId: string;

  /**
   * The status of the return
   */
  status: 'initiated' | 'succeeded' | 'failed' | 'returned';

  /**
   * The date and time the return failed if applicable
   */
  failedAt?: string;

  /**
   * The date and time the return succeeded if applicable
   */
  succeededAt?: string;

  /**
   * The ID of the resulting return transaction
   */
  transactionId?: string;
}

export interface ReturnRetrieveResponse {
  /**
   * The ID of the return
   */
  id: string;

  /**
   * The amount of the return
   */
  amount: number;

  /**
   * The date and time the return was created
   */
  createdAt: string;

  /**
   * The currency of the return
   */
  currency: 'EUR' | 'GBP' | 'PLN' | 'SEK' | 'DKK' | 'USD' | 'USDC' | 'BTC';

  /**
   * The ID of the associated deposit
   */
  depositId: string;

  /**
   * The status of the return
   */
  status: 'initiated' | 'succeeded' | 'failed' | 'returned';

  /**
   * The date and time the return failed if applicable
   */
  failedAt?: string;

  /**
   * The date and time the return succeeded if applicable
   */
  succeededAt?: string;

  /**
   * The ID of the resulting return transaction
   */
  transactionId?: string;
}

export interface ReturnCreateParams {
  /**
   * The ID of the associated deposit
   */
  depositId: string;
}

export interface ReturnRetrieveParams {
  /**
   * The ID of the return
   */
  id: string;
}

export declare namespace Returns {
  export {
    type ReturnCreateResponse as ReturnCreateResponse,
    type ReturnRetrieveResponse as ReturnRetrieveResponse,
    type ReturnCreateParams as ReturnCreateParams,
    type ReturnRetrieveParams as ReturnRetrieveParams,
  };
}
