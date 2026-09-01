// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Subscription extends APIResource {
  /**
   * Creates a webhook subscription that sends various events from Ivy to a specified
   * url. There can be multiple subscriptions per app.
   */
  create(body: SubscriptionCreateParams, options?: RequestOptions): APIPromise<SubscriptionCreateResponse> {
    return this._client.post('/api/service/webhook-subscription/create', { body, ...options });
  }

  /**
   * Updates the url or subcribed to events for a webhook subscription. This can be
   * used via the app or via the API by providing an API key.
   */
  update(body: SubscriptionUpdateParams, options?: RequestOptions): APIPromise<SubscriptionUpdateResponse> {
    return this._client.post('/api/service/webhook-subscription/update', { body, ...options });
  }

  /**
   * Lists all webhook subscriptions that are registered for the merchant. The
   * results are paginated and provided in chronological order.
   */
  list(body: SubscriptionListParams, options?: RequestOptions): APIPromise<SubscriptionListResponse> {
    return this._client.post('/api/service/webhook-subscription/list', { body, ...options });
  }

  /**
   * Deletes a webhook subscription.
   */
  delete(body: SubscriptionDeleteParams, options?: RequestOptions): APIPromise<SubscriptionDeleteResponse> {
    return this._client.post('/api/service/webhook-subscription/delete', { body, ...options });
  }

  /**
   * Sends a test ping to verify webhook subscription endpoint connectivity.
   */
  ping(body: SubscriptionPingParams, options?: RequestOptions): APIPromise<SubscriptionPingResponse> {
    return this._client.post('/api/service/webhook-subscription/ping', { body, ...options });
  }
}

export interface SubscriptionCreateResponse {
  id: unknown;

  createdAt: unknown;

  events: Array<
    | 'test'
    | 'merchant_updated'
    | 'merchant_app_updated'
    | 'order_created'
    | 'order_updated'
    | 'refund_succeeded'
    | 'refund_failed'
    | 'refund.initiated'
    | 'refund.succeeded'
    | 'refund.failed'
    | 'payout_report_requested'
    | 'checkout_session_created'
    | 'checkout_session_updated'
    | 'checkout_session_expired'
    | 'checkout_session_completed'
    | 'payout_created'
    | 'payout_updated'
    | 'user_payout.initiated'
    | 'user_payout.failed'
    | 'user_payout.paid'
    | 'payout.initiated'
    | 'payout.failed'
    | 'payout.paid'
    | 'deposit.received'
    | 'return.initiated'
    | 'return.succeeded'
    | 'return.failed'
    | 'return.returned'
    | 'fx.initiated'
    | 'fx.succeeded'
    | 'fx.failed'
  >;

  merchant: unknown;

  merchantApp: unknown;

  updatedAt: unknown;

  url: string;
}

export interface SubscriptionUpdateResponse {
  id: unknown;

  createdAt: unknown;

  events: Array<
    | 'test'
    | 'merchant_updated'
    | 'merchant_app_updated'
    | 'order_created'
    | 'order_updated'
    | 'refund_succeeded'
    | 'refund_failed'
    | 'refund.initiated'
    | 'refund.succeeded'
    | 'refund.failed'
    | 'payout_report_requested'
    | 'checkout_session_created'
    | 'checkout_session_updated'
    | 'checkout_session_expired'
    | 'checkout_session_completed'
    | 'payout_created'
    | 'payout_updated'
    | 'user_payout.initiated'
    | 'user_payout.failed'
    | 'user_payout.paid'
    | 'payout.initiated'
    | 'payout.failed'
    | 'payout.paid'
    | 'deposit.received'
    | 'return.initiated'
    | 'return.succeeded'
    | 'return.failed'
    | 'return.returned'
    | 'fx.initiated'
    | 'fx.succeeded'
    | 'fx.failed'
  >;

  merchant: unknown;

  merchantApp: unknown;

  updatedAt: unknown;

  url: string;
}

export interface SubscriptionListResponse {
  /**
   * The total number of webhook subscriptions
   */
  count: number;

  /**
   * Whether there are more webhook subscriptions to retrieve
   */
  hasNext: boolean;

  /**
   * Array of webhook subscription objects
   */
  items: Array<SubscriptionListResponse.Item>;

  /**
   * The number of webhook subscriptions skipped
   */
  skip: number;
}

export namespace SubscriptionListResponse {
  export interface Item {
    id: unknown;

    createdAt: unknown;

    events: Array<
      | 'test'
      | 'merchant_updated'
      | 'merchant_app_updated'
      | 'order_created'
      | 'order_updated'
      | 'refund_succeeded'
      | 'refund_failed'
      | 'refund.initiated'
      | 'refund.succeeded'
      | 'refund.failed'
      | 'payout_report_requested'
      | 'checkout_session_created'
      | 'checkout_session_updated'
      | 'checkout_session_expired'
      | 'checkout_session_completed'
      | 'payout_created'
      | 'payout_updated'
      | 'user_payout.initiated'
      | 'user_payout.failed'
      | 'user_payout.paid'
      | 'payout.initiated'
      | 'payout.failed'
      | 'payout.paid'
      | 'deposit.received'
      | 'return.initiated'
      | 'return.succeeded'
      | 'return.failed'
      | 'return.returned'
      | 'fx.initiated'
      | 'fx.succeeded'
      | 'fx.failed'
    >;

    merchant: unknown;

    merchantApp: unknown;

    updatedAt: unknown;

    url: string;
  }
}

export interface SubscriptionDeleteResponse {
  /**
   * Whether the webhook subscription was successfully deleted
   */
  success: boolean;
}

export interface SubscriptionPingResponse {
  /**
   * The unique identifier of the webhook subscription
   */
  id: unknown;

  /**
   * The timestamp when the ping was executed
   */
  date: unknown;

  /**
   * The response from the webhook endpoint
   */
  response: unknown;

  /**
   * The HTTP status code returned by the webhook endpoint
   */
  statusCode: number;

  /**
   * Whether the ping was successful
   */
  success: boolean;
}

export interface SubscriptionCreateParams {
  /**
   * The endpoint where webhook events are sent.
   */
  url: string;

  /**
   * The events to subscribe the url to.
   */
  events?: Array<
    | 'test'
    | 'merchant_updated'
    | 'merchant_app_updated'
    | 'order_created'
    | 'order_updated'
    | 'refund_succeeded'
    | 'refund_failed'
    | 'refund.initiated'
    | 'refund.succeeded'
    | 'refund.failed'
    | 'payout_report_requested'
    | 'checkout_session_created'
    | 'checkout_session_updated'
    | 'checkout_session_expired'
    | 'checkout_session_completed'
    | 'payout_created'
    | 'payout_updated'
    | 'user_payout.initiated'
    | 'user_payout.failed'
    | 'user_payout.paid'
    | 'payout.initiated'
    | 'payout.failed'
    | 'payout.paid'
    | 'deposit.received'
    | 'return.initiated'
    | 'return.succeeded'
    | 'return.failed'
    | 'return.returned'
    | 'fx.initiated'
    | 'fx.succeeded'
    | 'fx.failed'
  >;
}

export interface SubscriptionUpdateParams {
  /**
   * The unique identifier of the webhook subscription to update
   */
  id: unknown;

  /**
   * The new events to subscribe the url to
   */
  events?: Array<
    | 'test'
    | 'merchant_updated'
    | 'merchant_app_updated'
    | 'order_created'
    | 'order_updated'
    | 'refund_succeeded'
    | 'refund_failed'
    | 'refund.initiated'
    | 'refund.succeeded'
    | 'refund.failed'
    | 'payout_report_requested'
    | 'checkout_session_created'
    | 'checkout_session_updated'
    | 'checkout_session_expired'
    | 'checkout_session_completed'
    | 'payout_created'
    | 'payout_updated'
    | 'user_payout.initiated'
    | 'user_payout.failed'
    | 'user_payout.paid'
    | 'payout.initiated'
    | 'payout.failed'
    | 'payout.paid'
    | 'deposit.received'
    | 'return.initiated'
    | 'return.succeeded'
    | 'return.failed'
    | 'return.returned'
    | 'fx.initiated'
    | 'fx.succeeded'
    | 'fx.failed'
  >;

  /**
   * The new endpoint where webhook events are sent
   */
  url?: string;
}

export interface SubscriptionListParams {
  /**
   * The maximum number of webhook subscriptions to return
   */
  limit?: number;

  /**
   * The number of webhook subscriptions to skip
   */
  skip?: number;
}

export interface SubscriptionDeleteParams {
  /**
   * The unique identifier of the webhook subscription to delete
   */
  id: unknown;
}

export interface SubscriptionPingParams {
  /**
   * The unique identifier of the webhook subscription to ping
   */
  id: unknown;
}

export declare namespace Subscription {
  export {
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionUpdateResponse as SubscriptionUpdateResponse,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionPingResponse as SubscriptionPingResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
    type SubscriptionPingParams as SubscriptionPingParams,
  };
}
