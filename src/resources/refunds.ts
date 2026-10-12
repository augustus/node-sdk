// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Refunds extends APIResource {
  /**
   * Creates a refund for the specified order. The order can be specified either by
   * Ivy's internal `orderId` or by the `referenceId` provided by the merchant during
   * checkout creation. If the refund should only be partial, you can specifiy this
   * with the `amount` parameter.
   */
  create(body: RefundCreateParams, options?: RequestOptions): APIPromise<RefundCreateResponse> {
    return this._client.post('/api/service/refund/create', { body, ...options });
  }

  /**
   * Returns refund details and Id of refunded order.
   */
  retrieve(body: RefundRetrieveParams, options?: RequestOptions): APIPromise<Refund> {
    return this._client.post('/api/service/refund/retrieve', { body, ...options });
  }
}

export interface Refund {
  /**
   * The unique Refund id
   */
  id: string;

  /**
   * The amount of the refund in decimals.
   */
  amount: number;

  /**
   * Refund's currency.
   */
  currency: 'EUR' | 'USD' | 'GBP' | 'PLN' | 'SEK' | 'DKK';

  /**
   * The id of the refunded order
   */
  orderId: string;

  /**
   * The current status of this refund.
   */
  status: 'initiated' | 'pending' | 'succeeded' | 'failed';

  /**
   * The id of the transaction
   */
  transactionId?: string;
}

export interface RefundCreateResponse {
  /**
   * The unique Refund id
   */
  id: string;

  /**
   * The amount of the refund in decimals.
   */
  amount: number;

  /**
   * Refund's currency.
   */
  currency: 'EUR' | 'USD' | 'GBP' | 'PLN' | 'SEK' | 'DKK';

  /**
   * The id of the refunded order
   */
  orderId: string;

  /**
   * The current status of this refund.
   */
  status: 'initiated' | 'pending' | 'succeeded' | 'failed';

  /**
   * The id of the transaction
   */
  transactionId?: string;
}

export interface RefundCreateParams {
  amount?: number;

  /**
   * An optional custom text that will be shown on the customer's payment reference.
   * Input has to be maximum 16 alpha-numeric characters. If not provided, a default
   * Ivy refund referenceId will be shown.
   */
  bankStatementReference?: string;

  /**
   * The internal Ivy id of the order. Must be present in request body if referenceId
   * is not provided
   */
  orderId?: string;

  /**
   * The external id set by the merchant during checkout creation. Required if
   * orderId is not passed.
   */
  referenceId?: string;
}

export interface RefundRetrieveParams {
  /**
   * Id of refund to retrieve details
   */
  id: string;
}

export declare namespace Refunds {
  export {
    type Refund as Refund,
    type RefundCreateResponse as RefundCreateResponse,
    type RefundCreateParams as RefundCreateParams,
    type RefundRetrieveParams as RefundRetrieveParams,
  };
}
