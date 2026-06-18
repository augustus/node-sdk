// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Orders extends APIResource {
  /**
   * Create a new order. By creating a new order, you will create a new settlement
   * destination which you can use to settle expected incoming payments efficiently.
   * After creating the order, Ivy provides you with a destination for the expected
   * incoming payment. As soon as a payment with the same details arrives, Ivy will
   * update the status of the order.
   */
  create(body: OrderCreateParams, options?: RequestOptions): APIPromise<OrderCreateResponse> {
    return this._client.post('/api/service/order/create', { body, ...options });
  }

  /**
   * Retrieve details of an order. You can retrieve the order by passing either the
   * internal Ivy order id or the `referenceId` you specified when creating a
   * Checkout Session to the `id` field.
   */
  retrieve(body: OrderRetrieveParams, options?: RequestOptions): APIPromise<OrderRetrieveResponse> {
    return this._client.post('/api/service/order/details', { body, ...options });
  }

  /**
   * Manually expire an order before its natural expiration time.
   */
  expire(body: OrderExpireParams, options?: RequestOptions): APIPromise<OrderExpireResponse> {
    return this._client.post('/api/service/order/expire', { body, ...options });
  }
}

export interface OrderCreateResponse {
  /**
   * The unique id for the order.
   */
  id: string;

  /**
   * The unique id for the merchantApp which initiated the order.
   */
  appId: string;

  /**
   * The amount of application fee collected with the order.
   */
  applicationFeeAmount: number;

  createdAt: unknown;

  instantPaymentScheme: boolean;

  /**
   * Same as appId
   */
  merchantAppId: string;

  merchantId: string;

  /**
   * The price object. All values in decimals, e.g. 0.13 for 13 cents.
   */
  price: OrderCreateResponse.Price;

  /**
   * A unique id for the order which can be set when creating the checkoutSession.
   */
  referenceId: string;

  /**
   * The legal name of the merchant which initiated the order.
   */
  shopName: string;

  /**
   * The status of the order. As soon as this value is 'paid', you can ship the
   * order.
   */
  status:
    | 'failed'
    | 'canceled'
    | 'processing'
    | 'waiting_for_payment'
    | 'waiting_for_bank_confirmation'
    | 'paid'
    | 'in_refund'
    | 'refunded'
    | 'refund_failed'
    | 'partially_refunded'
    | 'in_dispute'
    | 'disputed'
    | 'refused'
    | 'finalizing';

  updatedAt: unknown;

  /**
   * The unique identifier of the customer's bank.
   */
  bankId?: string;

  /**
   * The reference that will be shown on the bank statement of the customer. Only
   * available after a successful DirectDebit initiation.
   */
  bankStatementReference?: string;

  billingAddress?: OrderCreateResponse.BillingAddress;

  /**
   * The merchant category code for the account. MCCs are used to classify businesses
   * based on the goods or services they provide.
   */
  category?: string;

  climateActionMode?: OrderCreateResponse.ClimateActionMode;

  co2Grams?: number;

  /**
   * The unique identifier of the customer who placed the order.
   */
  customerId?: string;

  /**
   * The destination bank account and statement reference for the order.
   */
  destination?: OrderCreateResponse.Destination;

  /**
   * The customer-facing id of the order.
   */
  displayId?: string;

  guest?: boolean;

  impactOffsetProjects?: Array<unknown>;

  /**
   * The list of line items sold with the order.
   */
  lineItems?: Array<OrderCreateResponse.LineItem>;

  /**
   * The financial address of the merchant associated with the order. Only available
   * when requested via order/details and therefore requires authentication.
   */
  merchantFinancialAddress?: OrderCreateResponse.MerchantFinancialAddress;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for
   * storing additional information about the object in a structured format.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The project related to the order.
   */
  offsetProject?: string;

  /**
   * The financial address of the payer associated with the order. Only available
   * after successful PIS flow.
   */
  payerFinancialAddress?: OrderCreateResponse.PayerFinancialAddress;

  paymentMethodType?: 'customer_balance' | 'manual_bank_transfer';

  /**
   * The payment mode of the order. Can be either settlement or direct.
   */
  paymentMode?: 'direct' | 'settlement';

  /**
   * Deprecated. The status of the payment.
   */
  paymentStatus?:
    | 'not_settled'
    | 'failed'
    | 'canceled'
    | 'processing'
    | 'requires_action'
    | 'succeeded'
    | 'in_refund'
    | 'refunded'
    | 'refund_failed'
    | 'partially_refunded'
    | 'disputed';

  /**
   * The total amount in the currency of all successful refunds for this order
   */
  refundAmount?: number;

  /**
   * All partial and total refunds of this order.
   */
  refunds?: Array<OrderCreateResponse.Refund>;

  shippingAddress?: OrderCreateResponse.ShippingAddress;

  shopLogo?: string;

  /**
   * Information about the customer who finished the order.
   */
  shopper?: OrderCreateResponse.Shopper;

  /**
   * Deprecated. The email of the customer who completed the order.
   */
  shopperEmail?: string;

  statusClassification?: OrderCreateResponse.StatusClassification;

  statusHistoryList?: Array<OrderCreateResponse.StatusHistoryList>;

  /**
   * The subaccount id of the merchant.
   */
  subaccountId?: string;

  subaccountLegalName?: string;

  /**
   * The unique id of the transaction.
   */
  transactionId?: string;

  trees?: number;
}

export namespace OrderCreateResponse {
  /**
   * The price object. All values in decimals, e.g. 0.13 for 13 cents.
   */
  export interface Price {
    currency: 'EUR' | 'USD' | 'GBP' | 'PLN' | 'SEK' | 'DKK';

    total: number;

    shipping?: number;

    subTotal?: number;

    totalNet?: number;

    vat?: number;
  }

  export interface BillingAddress {
    city: string;

    country:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'MK'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX'
      | 'BQ'
      | 'CW'
      | 'GG'
      | 'IM'
      | 'JE'
      | 'ME'
      | 'BL'
      | 'MF'
      | 'RS'
      | 'SX'
      | 'SS'
      | 'XK';

    line1: string;

    zipCode: string;

    firstName?: string;

    lastName?: string;

    line2?: string;

    region?: string;
  }

  export interface ClimateActionMode {
    amount: number;

    type: 'transaction' | 'amount';
  }

  /**
   * The destination bank account and statement reference for the order.
   */
  export interface Destination {
    bankAccount: Destination.BankAccount;

    /**
     * The bank statement reference of the payment for the order. This is the reference
     * that will be visible on the bank statement.
     */
    bankStatementReference: string;
  }

  export namespace Destination {
    export interface BankAccount {
      type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet' | 'aba';

      aba?: BankAccount.Aba;

      bankCode?: BankAccount.BankCode;

      bban?: BankAccount.Bban;

      iban?: BankAccount.Iban;

      paymentReference?: string;

      sortCode?: BankAccount.SortCode;

      wallet?: BankAccount.Wallet;
    }

    export namespace BankAccount {
      export interface Aba {
        accountHolderName: string;

        accountNumber: string;

        routingNumber: string;
      }

      export interface BankCode {
        accountHolderName: string;

        accountNumber: string;

        code: string;
      }

      export interface Bban {
        accountHolderName: string;

        bban: string;

        bic?: string;
      }

      export interface Iban {
        accountHolderName: string;

        iban: string;

        bic?: string;
      }

      export interface SortCode {
        accountHolderName: string;

        accountNumber: string;

        sortCode: string;
      }

      export interface Wallet {
        /**
         * The blockchain wallet address
         */
        address: string;

        /**
         * The blockchain network
         */
        blockchain:
          | 'BTC'
          | 'BTC-TESTNET4'
          | 'ETH'
          | 'ETH-SEPOLIA'
          | 'SOL'
          | 'SOL-DEVNET'
          | 'MATIC'
          | 'MATIC-AMOY';
      }
    }
  }

  export interface LineItem {
    /**
     * Accumulated cost in decimals. For example, for a lineItem with total price 3.00
     * and quantity 4, amount would be equal to 12.00.
     */
    amount: number;

    /**
     * Customer-facing name of the line item.
     */
    name: string;

    singleNet: number;

    singleVat: number;

    category?:
      | '5045'
      | '5065'
      | '5094'
      | '5192'
      | '5193'
      | '5499'
      | '5655'
      | '5691'
      | '5712'
      | '5722'
      | '5812'
      | '5814'
      | '5912'
      | '5977'
      | '5999'
      | '7629';

    co2Grams?: number;

    EAN?: string;

    /**
     * An image of the line item. Valid URLs are accepted only.
     */
    image?: string;

    /**
     * Quantity of this lineItem.
     */
    quantity?: number;

    /**
     * An internal unique id stored to this line item.
     */
    referenceId?: string;
  }

  /**
   * The financial address of the merchant associated with the order. Only available
   * when requested via order/details and therefore requires authentication.
   */
  export interface MerchantFinancialAddress {
    type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet' | 'aba';

    aba?: MerchantFinancialAddress.Aba;

    bankCode?: MerchantFinancialAddress.BankCode;

    bban?: MerchantFinancialAddress.Bban;

    iban?: MerchantFinancialAddress.Iban;

    paymentReference?: string;

    sortCode?: MerchantFinancialAddress.SortCode;

    wallet?: MerchantFinancialAddress.Wallet;
  }

  export namespace MerchantFinancialAddress {
    export interface Aba {
      accountHolderName: string;

      accountNumber: string;

      routingNumber: string;
    }

    export interface BankCode {
      accountHolderName: string;

      accountNumber: string;

      code: string;
    }

    export interface Bban {
      accountHolderName: string;

      bban: string;

      bic?: string;
    }

    export interface Iban {
      accountHolderName: string;

      iban: string;

      bic?: string;
    }

    export interface SortCode {
      accountHolderName: string;

      accountNumber: string;

      sortCode: string;
    }

    export interface Wallet {
      /**
       * The blockchain wallet address
       */
      address: string;

      /**
       * The blockchain network
       */
      blockchain:
        | 'BTC'
        | 'BTC-TESTNET4'
        | 'ETH'
        | 'ETH-SEPOLIA'
        | 'SOL'
        | 'SOL-DEVNET'
        | 'MATIC'
        | 'MATIC-AMOY';
    }
  }

  /**
   * The financial address of the payer associated with the order. Only available
   * after successful PIS flow.
   */
  export interface PayerFinancialAddress {
    type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet' | 'aba';

    aba?: PayerFinancialAddress.Aba;

    bankCode?: PayerFinancialAddress.BankCode;

    bban?: PayerFinancialAddress.Bban;

    iban?: PayerFinancialAddress.Iban;

    sortCode?: PayerFinancialAddress.SortCode;

    wallet?: PayerFinancialAddress.Wallet;
  }

  export namespace PayerFinancialAddress {
    export interface Aba {
      accountNumber: string;

      routingNumber: string;

      accountHolderName?: string;
    }

    export interface BankCode {
      accountNumber: string;

      code: string;

      accountHolderName?: string;
    }

    export interface Bban {
      bban: string;

      accountHolderName?: string;

      bic?: string;
    }

    export interface Iban {
      iban: string;

      accountHolderName?: string;

      bic?: string;
    }

    export interface SortCode {
      accountNumber: string;

      sortCode: string;

      accountHolderName?: string;
    }

    export interface Wallet {
      /**
       * The blockchain wallet address
       */
      address: string;

      /**
       * The blockchain network
       */
      blockchain:
        | 'BTC'
        | 'BTC-TESTNET4'
        | 'ETH'
        | 'ETH-SEPOLIA'
        | 'SOL'
        | 'SOL-DEVNET'
        | 'MATIC'
        | 'MATIC-AMOY';
    }
  }

  export interface Refund {
    /**
     * The unique id of this refund request.
     */
    id: string;

    /**
     * The amount of the refund in decimals.
     */
    amount: number;

    createdAt: unknown;

    /**
     * The unique id of this refund request. This can be set when requesting the
     * refund.
     */
    referenceId: string;

    /**
     * The current status of this refund.
     */
    status: 'pending' | 'succeeded' | 'failed' | 'requires_action' | 'partially_refunded';

    updatedAt: unknown;

    /**
     * The description of the refund.
     */
    description?: string;

    /**
     * The unique id of the transaction.
     */
    transactionId?: string;
  }

  export interface ShippingAddress {
    city: string;

    country:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'MK'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX'
      | 'BQ'
      | 'CW'
      | 'GG'
      | 'IM'
      | 'JE'
      | 'ME'
      | 'BL'
      | 'MF'
      | 'RS'
      | 'SX'
      | 'SS'
      | 'XK';

    line1: string;

    zipCode: string;

    firstName?: string;

    lastName?: string;

    line2?: string;

    region?: string;
  }

  /**
   * Information about the customer who finished the order.
   */
  export interface Shopper {
    email?: string;

    phoneNumber?: string;
  }

  export interface StatusClassification {
    primary: 'payment_authorisation_failed' | 'payment_execution_failed' | 'payment_abandoned';

    secondary?:
      | 'timeout'
      | 'wrong_credentials'
      | 'incorrect_2fa_response'
      | 'payment_rejected'
      | 'insufficient_funds'
      | 'cancelled'
      | 'connection_to_bank_failed'
      | 'international_transfer_blocked'
      | 'international_transfer_limit_exceeded'
      | 'user_blocked'
      | 'bank_error'
      | 'instant_transfers_not_enabled'
      | 'no_active_tan_methods_available'
      | 'account_limit_exceeded'
      | 'bank_under_maintenance'
      | 'pin_blocked'
      | 'payment_not_settled'
      | 'unsupported_bank_account'
      | 'online_banking_login_required'
      | 'deutsche_bank_psu_migration'
      | 'out_of_operational_hours';
  }

  export interface StatusHistoryList {
    createdAt: unknown;

    currentStatus:
      | 'failed'
      | 'canceled'
      | 'processing'
      | 'waiting_for_payment'
      | 'waiting_for_bank_confirmation'
      | 'paid'
      | 'in_refund'
      | 'refunded'
      | 'refund_failed'
      | 'partially_refunded'
      | 'in_dispute'
      | 'disputed'
      | 'refused'
      | 'finalizing';

    reason:
      | 'ORDER_CREATED'
      | 'CHECKOUT_SESSION_ABORTED'
      | 'PAYMENT_SUCCEEDED'
      | 'PAYMENT_INITIATED'
      | 'ORDER_CANCELED'
      | 'ORDER_EXPIRED_BY_MERCHANT'
      | 'ORDER_REFUND_INITIATED'
      | 'ORDER_REFUNDED'
      | 'REFUND_CHARGE_SUCCEEDED'
      | 'REFUND_UPDATED'
      | 'CHECKOUT_COMPLETED'
      | 'USER_CONFIRMED'
      | 'PIS_PAYMENT_INITIATED'
      | 'PIS_PAYMENT_UPDATED'
      | 'PIS_PAYMENT_SUCCEEDED'
      | 'PAYMENT_NOT_SETTLED'
      | 'PAYMENT_INITIATION_FAILED'
      | 'PAYMENT_CANCELED'
      | 'PAYMENT_FAILED'
      | 'CHECKOUT_SESSION_CREATED'
      | 'EXPIRED_CHECKOUT_SESSION_ABORTED'
      | 'DISPUTE'
      | 'PENDING_PAYMENT_ATTEMPTS_FOUND'
      | 'AML_FREEZE'
      | 'AML_APPROVE'
      | 'AML_REJECT'
      | 'MANUAL_FREEZE'
      | 'MANUAL_UNFREEZE'
      | 'ORDER_MANUALLY_REOPENED'
      | 'ORDER_FINALIZATION_STARTED';

    updatedAt: unknown;

    previousStatus?:
      | 'failed'
      | 'canceled'
      | 'processing'
      | 'waiting_for_payment'
      | 'waiting_for_bank_confirmation'
      | 'paid'
      | 'in_refund'
      | 'refunded'
      | 'refund_failed'
      | 'partially_refunded'
      | 'in_dispute'
      | 'disputed'
      | 'refused'
      | 'finalizing'
      | null;
  }
}

export interface OrderRetrieveResponse {
  /**
   * The unique id for the order.
   */
  id: string;

  /**
   * The unique id for the merchantApp which initiated the order.
   */
  appId: string;

  /**
   * The amount of application fee collected with the order.
   */
  applicationFeeAmount: number;

  createdAt: unknown;

  instantPaymentScheme: boolean;

  /**
   * Same as appId
   */
  merchantAppId: string;

  merchantId: string;

  /**
   * The price object. All values in decimals, e.g. 0.13 for 13 cents.
   */
  price: OrderRetrieveResponse.Price;

  /**
   * A unique id for the order which can be set when creating the checkoutSession.
   */
  referenceId: string;

  /**
   * The legal name of the merchant which initiated the order.
   */
  shopName: string;

  /**
   * The status of the order. As soon as this value is 'paid', you can ship the
   * order.
   */
  status:
    | 'failed'
    | 'canceled'
    | 'processing'
    | 'waiting_for_payment'
    | 'waiting_for_bank_confirmation'
    | 'paid'
    | 'in_refund'
    | 'refunded'
    | 'refund_failed'
    | 'partially_refunded'
    | 'in_dispute'
    | 'disputed'
    | 'refused'
    | 'finalizing';

  updatedAt: unknown;

  /**
   * The unique identifier of the customer's bank.
   */
  bankId?: string;

  /**
   * The reference that will be shown on the bank statement of the customer. Only
   * available after a successful DirectDebit initiation.
   */
  bankStatementReference?: string;

  billingAddress?: OrderRetrieveResponse.BillingAddress;

  /**
   * The merchant category code for the account. MCCs are used to classify businesses
   * based on the goods or services they provide.
   */
  category?: string;

  climateActionMode?: OrderRetrieveResponse.ClimateActionMode;

  co2Grams?: number;

  /**
   * The unique identifier of the customer who placed the order.
   */
  customerId?: string;

  /**
   * The destination bank account and statement reference for the order.
   */
  destination?: OrderRetrieveResponse.Destination;

  /**
   * The customer-facing id of the order.
   */
  displayId?: string;

  guest?: boolean;

  impactOffsetProjects?: Array<unknown>;

  /**
   * The list of line items sold with the order.
   */
  lineItems?: Array<OrderRetrieveResponse.LineItem>;

  /**
   * The financial address of the merchant associated with the order. Only available
   * when requested via order/details and therefore requires authentication.
   */
  merchantFinancialAddress?: OrderRetrieveResponse.MerchantFinancialAddress;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for
   * storing additional information about the object in a structured format.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The project related to the order.
   */
  offsetProject?: string;

  /**
   * The financial address of the payer associated with the order. Only available
   * after successful PIS flow.
   */
  payerFinancialAddress?: OrderRetrieveResponse.PayerFinancialAddress;

  paymentMethodType?: 'customer_balance' | 'manual_bank_transfer';

  /**
   * The payment mode of the order. Can be either settlement or direct.
   */
  paymentMode?: 'direct' | 'settlement';

  /**
   * Deprecated. The status of the payment.
   */
  paymentStatus?:
    | 'not_settled'
    | 'failed'
    | 'canceled'
    | 'processing'
    | 'requires_action'
    | 'succeeded'
    | 'in_refund'
    | 'refunded'
    | 'refund_failed'
    | 'partially_refunded'
    | 'disputed';

  /**
   * The total amount in the currency of all successful refunds for this order
   */
  refundAmount?: number;

  /**
   * All partial and total refunds of this order.
   */
  refunds?: Array<OrderRetrieveResponse.Refund>;

  shippingAddress?: OrderRetrieveResponse.ShippingAddress;

  shopLogo?: string;

  /**
   * Information about the customer who finished the order.
   */
  shopper?: OrderRetrieveResponse.Shopper;

  /**
   * Deprecated. The email of the customer who completed the order.
   */
  shopperEmail?: string;

  statusClassification?: OrderRetrieveResponse.StatusClassification;

  statusHistoryList?: Array<OrderRetrieveResponse.StatusHistoryList>;

  /**
   * The subaccount id of the merchant.
   */
  subaccountId?: string;

  subaccountLegalName?: string;

  /**
   * The unique id of the transaction.
   */
  transactionId?: string;

  trees?: number;
}

export namespace OrderRetrieveResponse {
  /**
   * The price object. All values in decimals, e.g. 0.13 for 13 cents.
   */
  export interface Price {
    currency: 'EUR' | 'USD' | 'GBP' | 'PLN' | 'SEK' | 'DKK';

    total: number;

    shipping?: number;

    subTotal?: number;

    totalNet?: number;

    vat?: number;
  }

  export interface BillingAddress {
    city: string;

    country:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'MK'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX'
      | 'BQ'
      | 'CW'
      | 'GG'
      | 'IM'
      | 'JE'
      | 'ME'
      | 'BL'
      | 'MF'
      | 'RS'
      | 'SX'
      | 'SS'
      | 'XK';

    line1: string;

    zipCode: string;

    firstName?: string;

    lastName?: string;

    line2?: string;

    region?: string;
  }

  export interface ClimateActionMode {
    amount: number;

    type: 'transaction' | 'amount';
  }

  /**
   * The destination bank account and statement reference for the order.
   */
  export interface Destination {
    bankAccount: Destination.BankAccount;

    /**
     * The bank statement reference of the payment for the order. This is the reference
     * that will be visible on the bank statement.
     */
    bankStatementReference: string;
  }

  export namespace Destination {
    export interface BankAccount {
      type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet' | 'aba';

      aba?: BankAccount.Aba;

      bankCode?: BankAccount.BankCode;

      bban?: BankAccount.Bban;

      iban?: BankAccount.Iban;

      paymentReference?: string;

      sortCode?: BankAccount.SortCode;

      wallet?: BankAccount.Wallet;
    }

    export namespace BankAccount {
      export interface Aba {
        accountHolderName: string;

        accountNumber: string;

        routingNumber: string;
      }

      export interface BankCode {
        accountHolderName: string;

        accountNumber: string;

        code: string;
      }

      export interface Bban {
        accountHolderName: string;

        bban: string;

        bic?: string;
      }

      export interface Iban {
        accountHolderName: string;

        iban: string;

        bic?: string;
      }

      export interface SortCode {
        accountHolderName: string;

        accountNumber: string;

        sortCode: string;
      }

      export interface Wallet {
        /**
         * The blockchain wallet address
         */
        address: string;

        /**
         * The blockchain network
         */
        blockchain:
          | 'BTC'
          | 'BTC-TESTNET4'
          | 'ETH'
          | 'ETH-SEPOLIA'
          | 'SOL'
          | 'SOL-DEVNET'
          | 'MATIC'
          | 'MATIC-AMOY';
      }
    }
  }

  export interface LineItem {
    /**
     * Accumulated cost in decimals. For example, for a lineItem with total price 3.00
     * and quantity 4, amount would be equal to 12.00.
     */
    amount: number;

    /**
     * Customer-facing name of the line item.
     */
    name: string;

    singleNet: number;

    singleVat: number;

    category?:
      | '5045'
      | '5065'
      | '5094'
      | '5192'
      | '5193'
      | '5499'
      | '5655'
      | '5691'
      | '5712'
      | '5722'
      | '5812'
      | '5814'
      | '5912'
      | '5977'
      | '5999'
      | '7629';

    co2Grams?: number;

    EAN?: string;

    /**
     * An image of the line item. Valid URLs are accepted only.
     */
    image?: string;

    /**
     * Quantity of this lineItem.
     */
    quantity?: number;

    /**
     * An internal unique id stored to this line item.
     */
    referenceId?: string;
  }

  /**
   * The financial address of the merchant associated with the order. Only available
   * when requested via order/details and therefore requires authentication.
   */
  export interface MerchantFinancialAddress {
    type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet' | 'aba';

    aba?: MerchantFinancialAddress.Aba;

    bankCode?: MerchantFinancialAddress.BankCode;

    bban?: MerchantFinancialAddress.Bban;

    iban?: MerchantFinancialAddress.Iban;

    paymentReference?: string;

    sortCode?: MerchantFinancialAddress.SortCode;

    wallet?: MerchantFinancialAddress.Wallet;
  }

  export namespace MerchantFinancialAddress {
    export interface Aba {
      accountHolderName: string;

      accountNumber: string;

      routingNumber: string;
    }

    export interface BankCode {
      accountHolderName: string;

      accountNumber: string;

      code: string;
    }

    export interface Bban {
      accountHolderName: string;

      bban: string;

      bic?: string;
    }

    export interface Iban {
      accountHolderName: string;

      iban: string;

      bic?: string;
    }

    export interface SortCode {
      accountHolderName: string;

      accountNumber: string;

      sortCode: string;
    }

    export interface Wallet {
      /**
       * The blockchain wallet address
       */
      address: string;

      /**
       * The blockchain network
       */
      blockchain:
        | 'BTC'
        | 'BTC-TESTNET4'
        | 'ETH'
        | 'ETH-SEPOLIA'
        | 'SOL'
        | 'SOL-DEVNET'
        | 'MATIC'
        | 'MATIC-AMOY';
    }
  }

  /**
   * The financial address of the payer associated with the order. Only available
   * after successful PIS flow.
   */
  export interface PayerFinancialAddress {
    type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet' | 'aba';

    aba?: PayerFinancialAddress.Aba;

    bankCode?: PayerFinancialAddress.BankCode;

    bban?: PayerFinancialAddress.Bban;

    iban?: PayerFinancialAddress.Iban;

    sortCode?: PayerFinancialAddress.SortCode;

    wallet?: PayerFinancialAddress.Wallet;
  }

  export namespace PayerFinancialAddress {
    export interface Aba {
      accountNumber: string;

      routingNumber: string;

      accountHolderName?: string;
    }

    export interface BankCode {
      accountNumber: string;

      code: string;

      accountHolderName?: string;
    }

    export interface Bban {
      bban: string;

      accountHolderName?: string;

      bic?: string;
    }

    export interface Iban {
      iban: string;

      accountHolderName?: string;

      bic?: string;
    }

    export interface SortCode {
      accountNumber: string;

      sortCode: string;

      accountHolderName?: string;
    }

    export interface Wallet {
      /**
       * The blockchain wallet address
       */
      address: string;

      /**
       * The blockchain network
       */
      blockchain:
        | 'BTC'
        | 'BTC-TESTNET4'
        | 'ETH'
        | 'ETH-SEPOLIA'
        | 'SOL'
        | 'SOL-DEVNET'
        | 'MATIC'
        | 'MATIC-AMOY';
    }
  }

  export interface Refund {
    /**
     * The unique id of this refund request.
     */
    id: string;

    /**
     * The amount of the refund in decimals.
     */
    amount: number;

    createdAt: unknown;

    /**
     * The unique id of this refund request. This can be set when requesting the
     * refund.
     */
    referenceId: string;

    /**
     * The current status of this refund.
     */
    status: 'pending' | 'succeeded' | 'failed' | 'requires_action' | 'partially_refunded';

    updatedAt: unknown;

    /**
     * The description of the refund.
     */
    description?: string;

    /**
     * The unique id of the transaction.
     */
    transactionId?: string;
  }

  export interface ShippingAddress {
    city: string;

    country:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'MK'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX'
      | 'BQ'
      | 'CW'
      | 'GG'
      | 'IM'
      | 'JE'
      | 'ME'
      | 'BL'
      | 'MF'
      | 'RS'
      | 'SX'
      | 'SS'
      | 'XK';

    line1: string;

    zipCode: string;

    firstName?: string;

    lastName?: string;

    line2?: string;

    region?: string;
  }

  /**
   * Information about the customer who finished the order.
   */
  export interface Shopper {
    email?: string;

    phoneNumber?: string;
  }

  export interface StatusClassification {
    primary: 'payment_authorisation_failed' | 'payment_execution_failed' | 'payment_abandoned';

    secondary?:
      | 'timeout'
      | 'wrong_credentials'
      | 'incorrect_2fa_response'
      | 'payment_rejected'
      | 'insufficient_funds'
      | 'cancelled'
      | 'connection_to_bank_failed'
      | 'international_transfer_blocked'
      | 'international_transfer_limit_exceeded'
      | 'user_blocked'
      | 'bank_error'
      | 'instant_transfers_not_enabled'
      | 'no_active_tan_methods_available'
      | 'account_limit_exceeded'
      | 'bank_under_maintenance'
      | 'pin_blocked'
      | 'payment_not_settled'
      | 'unsupported_bank_account'
      | 'online_banking_login_required'
      | 'deutsche_bank_psu_migration'
      | 'out_of_operational_hours';
  }

  export interface StatusHistoryList {
    createdAt: unknown;

    currentStatus:
      | 'failed'
      | 'canceled'
      | 'processing'
      | 'waiting_for_payment'
      | 'waiting_for_bank_confirmation'
      | 'paid'
      | 'in_refund'
      | 'refunded'
      | 'refund_failed'
      | 'partially_refunded'
      | 'in_dispute'
      | 'disputed'
      | 'refused'
      | 'finalizing';

    reason:
      | 'ORDER_CREATED'
      | 'CHECKOUT_SESSION_ABORTED'
      | 'PAYMENT_SUCCEEDED'
      | 'PAYMENT_INITIATED'
      | 'ORDER_CANCELED'
      | 'ORDER_EXPIRED_BY_MERCHANT'
      | 'ORDER_REFUND_INITIATED'
      | 'ORDER_REFUNDED'
      | 'REFUND_CHARGE_SUCCEEDED'
      | 'REFUND_UPDATED'
      | 'CHECKOUT_COMPLETED'
      | 'USER_CONFIRMED'
      | 'PIS_PAYMENT_INITIATED'
      | 'PIS_PAYMENT_UPDATED'
      | 'PIS_PAYMENT_SUCCEEDED'
      | 'PAYMENT_NOT_SETTLED'
      | 'PAYMENT_INITIATION_FAILED'
      | 'PAYMENT_CANCELED'
      | 'PAYMENT_FAILED'
      | 'CHECKOUT_SESSION_CREATED'
      | 'EXPIRED_CHECKOUT_SESSION_ABORTED'
      | 'DISPUTE'
      | 'PENDING_PAYMENT_ATTEMPTS_FOUND'
      | 'AML_FREEZE'
      | 'AML_APPROVE'
      | 'AML_REJECT'
      | 'MANUAL_FREEZE'
      | 'MANUAL_UNFREEZE'
      | 'ORDER_MANUALLY_REOPENED'
      | 'ORDER_FINALIZATION_STARTED';

    updatedAt: unknown;

    previousStatus?:
      | 'failed'
      | 'canceled'
      | 'processing'
      | 'waiting_for_payment'
      | 'waiting_for_bank_confirmation'
      | 'paid'
      | 'in_refund'
      | 'refunded'
      | 'refund_failed'
      | 'partially_refunded'
      | 'in_dispute'
      | 'disputed'
      | 'refused'
      | 'finalizing'
      | null;
  }
}

export interface OrderExpireResponse {
  /**
   * The unique id for the order.
   */
  id: string;

  /**
   * The unique id for the merchantApp which initiated the order.
   */
  appId: string;

  /**
   * The amount of application fee collected with the order.
   */
  applicationFeeAmount: number;

  createdAt: unknown;

  instantPaymentScheme: boolean;

  /**
   * Same as appId
   */
  merchantAppId: string;

  merchantId: string;

  /**
   * The price object. All values in decimals, e.g. 0.13 for 13 cents.
   */
  price: OrderExpireResponse.Price;

  /**
   * A unique id for the order which can be set when creating the checkoutSession.
   */
  referenceId: string;

  /**
   * The legal name of the merchant which initiated the order.
   */
  shopName: string;

  /**
   * The status of the order. As soon as this value is 'paid', you can ship the
   * order.
   */
  status:
    | 'failed'
    | 'canceled'
    | 'processing'
    | 'waiting_for_payment'
    | 'waiting_for_bank_confirmation'
    | 'paid'
    | 'in_refund'
    | 'refunded'
    | 'refund_failed'
    | 'partially_refunded'
    | 'in_dispute'
    | 'disputed'
    | 'refused'
    | 'finalizing';

  updatedAt: unknown;

  /**
   * The unique identifier of the customer's bank.
   */
  bankId?: string;

  /**
   * The reference that will be shown on the bank statement of the customer. Only
   * available after a successful DirectDebit initiation.
   */
  bankStatementReference?: string;

  billingAddress?: OrderExpireResponse.BillingAddress;

  /**
   * The merchant category code for the account. MCCs are used to classify businesses
   * based on the goods or services they provide.
   */
  category?: string;

  climateActionMode?: OrderExpireResponse.ClimateActionMode;

  co2Grams?: number;

  /**
   * The unique identifier of the customer who placed the order.
   */
  customerId?: string;

  /**
   * The destination bank account and statement reference for the order.
   */
  destination?: OrderExpireResponse.Destination;

  /**
   * The customer-facing id of the order.
   */
  displayId?: string;

  guest?: boolean;

  impactOffsetProjects?: Array<unknown>;

  /**
   * The list of line items sold with the order.
   */
  lineItems?: Array<OrderExpireResponse.LineItem>;

  /**
   * The financial address of the merchant associated with the order. Only available
   * when requested via order/details and therefore requires authentication.
   */
  merchantFinancialAddress?: OrderExpireResponse.MerchantFinancialAddress;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for
   * storing additional information about the object in a structured format.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The project related to the order.
   */
  offsetProject?: string;

  /**
   * The financial address of the payer associated with the order. Only available
   * after successful PIS flow.
   */
  payerFinancialAddress?: OrderExpireResponse.PayerFinancialAddress;

  paymentMethodType?: 'customer_balance' | 'manual_bank_transfer';

  /**
   * The payment mode of the order. Can be either settlement or direct.
   */
  paymentMode?: 'direct' | 'settlement';

  /**
   * Deprecated. The status of the payment.
   */
  paymentStatus?:
    | 'not_settled'
    | 'failed'
    | 'canceled'
    | 'processing'
    | 'requires_action'
    | 'succeeded'
    | 'in_refund'
    | 'refunded'
    | 'refund_failed'
    | 'partially_refunded'
    | 'disputed';

  /**
   * The total amount in the currency of all successful refunds for this order
   */
  refundAmount?: number;

  /**
   * All partial and total refunds of this order.
   */
  refunds?: Array<OrderExpireResponse.Refund>;

  shippingAddress?: OrderExpireResponse.ShippingAddress;

  shopLogo?: string;

  /**
   * Information about the customer who finished the order.
   */
  shopper?: OrderExpireResponse.Shopper;

  /**
   * Deprecated. The email of the customer who completed the order.
   */
  shopperEmail?: string;

  statusClassification?: OrderExpireResponse.StatusClassification;

  statusHistoryList?: Array<OrderExpireResponse.StatusHistoryList>;

  /**
   * The subaccount id of the merchant.
   */
  subaccountId?: string;

  subaccountLegalName?: string;

  /**
   * The unique id of the transaction.
   */
  transactionId?: string;

  trees?: number;
}

export namespace OrderExpireResponse {
  /**
   * The price object. All values in decimals, e.g. 0.13 for 13 cents.
   */
  export interface Price {
    currency: 'EUR' | 'USD' | 'GBP' | 'PLN' | 'SEK' | 'DKK';

    total: number;

    shipping?: number;

    subTotal?: number;

    totalNet?: number;

    vat?: number;
  }

  export interface BillingAddress {
    city: string;

    country:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'MK'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX'
      | 'BQ'
      | 'CW'
      | 'GG'
      | 'IM'
      | 'JE'
      | 'ME'
      | 'BL'
      | 'MF'
      | 'RS'
      | 'SX'
      | 'SS'
      | 'XK';

    line1: string;

    zipCode: string;

    firstName?: string;

    lastName?: string;

    line2?: string;

    region?: string;
  }

  export interface ClimateActionMode {
    amount: number;

    type: 'transaction' | 'amount';
  }

  /**
   * The destination bank account and statement reference for the order.
   */
  export interface Destination {
    bankAccount: Destination.BankAccount;

    /**
     * The bank statement reference of the payment for the order. This is the reference
     * that will be visible on the bank statement.
     */
    bankStatementReference: string;
  }

  export namespace Destination {
    export interface BankAccount {
      type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet' | 'aba';

      aba?: BankAccount.Aba;

      bankCode?: BankAccount.BankCode;

      bban?: BankAccount.Bban;

      iban?: BankAccount.Iban;

      paymentReference?: string;

      sortCode?: BankAccount.SortCode;

      wallet?: BankAccount.Wallet;
    }

    export namespace BankAccount {
      export interface Aba {
        accountHolderName: string;

        accountNumber: string;

        routingNumber: string;
      }

      export interface BankCode {
        accountHolderName: string;

        accountNumber: string;

        code: string;
      }

      export interface Bban {
        accountHolderName: string;

        bban: string;

        bic?: string;
      }

      export interface Iban {
        accountHolderName: string;

        iban: string;

        bic?: string;
      }

      export interface SortCode {
        accountHolderName: string;

        accountNumber: string;

        sortCode: string;
      }

      export interface Wallet {
        /**
         * The blockchain wallet address
         */
        address: string;

        /**
         * The blockchain network
         */
        blockchain:
          | 'BTC'
          | 'BTC-TESTNET4'
          | 'ETH'
          | 'ETH-SEPOLIA'
          | 'SOL'
          | 'SOL-DEVNET'
          | 'MATIC'
          | 'MATIC-AMOY';
      }
    }
  }

  export interface LineItem {
    /**
     * Accumulated cost in decimals. For example, for a lineItem with total price 3.00
     * and quantity 4, amount would be equal to 12.00.
     */
    amount: number;

    /**
     * Customer-facing name of the line item.
     */
    name: string;

    singleNet: number;

    singleVat: number;

    category?:
      | '5045'
      | '5065'
      | '5094'
      | '5192'
      | '5193'
      | '5499'
      | '5655'
      | '5691'
      | '5712'
      | '5722'
      | '5812'
      | '5814'
      | '5912'
      | '5977'
      | '5999'
      | '7629';

    co2Grams?: number;

    EAN?: string;

    /**
     * An image of the line item. Valid URLs are accepted only.
     */
    image?: string;

    /**
     * Quantity of this lineItem.
     */
    quantity?: number;

    /**
     * An internal unique id stored to this line item.
     */
    referenceId?: string;
  }

  /**
   * The financial address of the merchant associated with the order. Only available
   * when requested via order/details and therefore requires authentication.
   */
  export interface MerchantFinancialAddress {
    type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet' | 'aba';

    aba?: MerchantFinancialAddress.Aba;

    bankCode?: MerchantFinancialAddress.BankCode;

    bban?: MerchantFinancialAddress.Bban;

    iban?: MerchantFinancialAddress.Iban;

    paymentReference?: string;

    sortCode?: MerchantFinancialAddress.SortCode;

    wallet?: MerchantFinancialAddress.Wallet;
  }

  export namespace MerchantFinancialAddress {
    export interface Aba {
      accountHolderName: string;

      accountNumber: string;

      routingNumber: string;
    }

    export interface BankCode {
      accountHolderName: string;

      accountNumber: string;

      code: string;
    }

    export interface Bban {
      accountHolderName: string;

      bban: string;

      bic?: string;
    }

    export interface Iban {
      accountHolderName: string;

      iban: string;

      bic?: string;
    }

    export interface SortCode {
      accountHolderName: string;

      accountNumber: string;

      sortCode: string;
    }

    export interface Wallet {
      /**
       * The blockchain wallet address
       */
      address: string;

      /**
       * The blockchain network
       */
      blockchain:
        | 'BTC'
        | 'BTC-TESTNET4'
        | 'ETH'
        | 'ETH-SEPOLIA'
        | 'SOL'
        | 'SOL-DEVNET'
        | 'MATIC'
        | 'MATIC-AMOY';
    }
  }

  /**
   * The financial address of the payer associated with the order. Only available
   * after successful PIS flow.
   */
  export interface PayerFinancialAddress {
    type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet' | 'aba';

    aba?: PayerFinancialAddress.Aba;

    bankCode?: PayerFinancialAddress.BankCode;

    bban?: PayerFinancialAddress.Bban;

    iban?: PayerFinancialAddress.Iban;

    sortCode?: PayerFinancialAddress.SortCode;

    wallet?: PayerFinancialAddress.Wallet;
  }

  export namespace PayerFinancialAddress {
    export interface Aba {
      accountNumber: string;

      routingNumber: string;

      accountHolderName?: string;
    }

    export interface BankCode {
      accountNumber: string;

      code: string;

      accountHolderName?: string;
    }

    export interface Bban {
      bban: string;

      accountHolderName?: string;

      bic?: string;
    }

    export interface Iban {
      iban: string;

      accountHolderName?: string;

      bic?: string;
    }

    export interface SortCode {
      accountNumber: string;

      sortCode: string;

      accountHolderName?: string;
    }

    export interface Wallet {
      /**
       * The blockchain wallet address
       */
      address: string;

      /**
       * The blockchain network
       */
      blockchain:
        | 'BTC'
        | 'BTC-TESTNET4'
        | 'ETH'
        | 'ETH-SEPOLIA'
        | 'SOL'
        | 'SOL-DEVNET'
        | 'MATIC'
        | 'MATIC-AMOY';
    }
  }

  export interface Refund {
    /**
     * The unique id of this refund request.
     */
    id: string;

    /**
     * The amount of the refund in decimals.
     */
    amount: number;

    createdAt: unknown;

    /**
     * The unique id of this refund request. This can be set when requesting the
     * refund.
     */
    referenceId: string;

    /**
     * The current status of this refund.
     */
    status: 'pending' | 'succeeded' | 'failed' | 'requires_action' | 'partially_refunded';

    updatedAt: unknown;

    /**
     * The description of the refund.
     */
    description?: string;

    /**
     * The unique id of the transaction.
     */
    transactionId?: string;
  }

  export interface ShippingAddress {
    city: string;

    country:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'MK'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX'
      | 'BQ'
      | 'CW'
      | 'GG'
      | 'IM'
      | 'JE'
      | 'ME'
      | 'BL'
      | 'MF'
      | 'RS'
      | 'SX'
      | 'SS'
      | 'XK';

    line1: string;

    zipCode: string;

    firstName?: string;

    lastName?: string;

    line2?: string;

    region?: string;
  }

  /**
   * Information about the customer who finished the order.
   */
  export interface Shopper {
    email?: string;

    phoneNumber?: string;
  }

  export interface StatusClassification {
    primary: 'payment_authorisation_failed' | 'payment_execution_failed' | 'payment_abandoned';

    secondary?:
      | 'timeout'
      | 'wrong_credentials'
      | 'incorrect_2fa_response'
      | 'payment_rejected'
      | 'insufficient_funds'
      | 'cancelled'
      | 'connection_to_bank_failed'
      | 'international_transfer_blocked'
      | 'international_transfer_limit_exceeded'
      | 'user_blocked'
      | 'bank_error'
      | 'instant_transfers_not_enabled'
      | 'no_active_tan_methods_available'
      | 'account_limit_exceeded'
      | 'bank_under_maintenance'
      | 'pin_blocked'
      | 'payment_not_settled'
      | 'unsupported_bank_account'
      | 'online_banking_login_required'
      | 'deutsche_bank_psu_migration'
      | 'out_of_operational_hours';
  }

  export interface StatusHistoryList {
    createdAt: unknown;

    currentStatus:
      | 'failed'
      | 'canceled'
      | 'processing'
      | 'waiting_for_payment'
      | 'waiting_for_bank_confirmation'
      | 'paid'
      | 'in_refund'
      | 'refunded'
      | 'refund_failed'
      | 'partially_refunded'
      | 'in_dispute'
      | 'disputed'
      | 'refused'
      | 'finalizing';

    reason:
      | 'ORDER_CREATED'
      | 'CHECKOUT_SESSION_ABORTED'
      | 'PAYMENT_SUCCEEDED'
      | 'PAYMENT_INITIATED'
      | 'ORDER_CANCELED'
      | 'ORDER_EXPIRED_BY_MERCHANT'
      | 'ORDER_REFUND_INITIATED'
      | 'ORDER_REFUNDED'
      | 'REFUND_CHARGE_SUCCEEDED'
      | 'REFUND_UPDATED'
      | 'CHECKOUT_COMPLETED'
      | 'USER_CONFIRMED'
      | 'PIS_PAYMENT_INITIATED'
      | 'PIS_PAYMENT_UPDATED'
      | 'PIS_PAYMENT_SUCCEEDED'
      | 'PAYMENT_NOT_SETTLED'
      | 'PAYMENT_INITIATION_FAILED'
      | 'PAYMENT_CANCELED'
      | 'PAYMENT_FAILED'
      | 'CHECKOUT_SESSION_CREATED'
      | 'EXPIRED_CHECKOUT_SESSION_ABORTED'
      | 'DISPUTE'
      | 'PENDING_PAYMENT_ATTEMPTS_FOUND'
      | 'AML_FREEZE'
      | 'AML_APPROVE'
      | 'AML_REJECT'
      | 'MANUAL_FREEZE'
      | 'MANUAL_UNFREEZE'
      | 'ORDER_MANUALLY_REOPENED'
      | 'ORDER_FINALIZATION_STARTED';

    updatedAt: unknown;

    previousStatus?:
      | 'failed'
      | 'canceled'
      | 'processing'
      | 'waiting_for_payment'
      | 'waiting_for_bank_confirmation'
      | 'paid'
      | 'in_refund'
      | 'refunded'
      | 'refund_failed'
      | 'partially_refunded'
      | 'in_dispute'
      | 'disputed'
      | 'refused'
      | 'finalizing'
      | null;
  }
}

export interface OrderCreateParams {
  /**
   * The total amount of the order
   */
  amount: number;

  /**
   * The currency code of the order
   */
  currency: 'EUR' | 'USD' | 'GBP' | 'PLN' | 'SEK' | 'DKK';

  /**
   * The merchant's unique reference ID for the order
   */
  referenceId: string;

  /**
   * The customer of the merchant.
   */
  customer?: OrderCreateParams.Customer;

  /**
   * Optional expiration timestamp in seconds
   */
  expiresAt?: string;

  /**
   * The subaccount id of the merchant.
   */
  subaccountId?: string;
}

export namespace OrderCreateParams {
  /**
   * The customer of the merchant.
   */
  export interface Customer {
    /**
     * The Ivy id of the customer.
     */
    id?: string;

    /**
     * The email of the customer.
     */
    email?: string;

    /**
     * The phone number of the customer in international format (e.g., +491631234567)
     */
    phone?: string;
  }
}

export interface OrderRetrieveParams {
  /**
   * You can put in either the Ivy id OR the referenceId of the order
   */
  id: string;
}

export interface OrderExpireParams {
  /**
   * You can put in either the Ivy id OR the referenceId of the order
   */
  id: string;
}

export declare namespace Orders {
  export {
    type OrderCreateResponse as OrderCreateResponse,
    type OrderRetrieveResponse as OrderRetrieveResponse,
    type OrderExpireResponse as OrderExpireResponse,
    type OrderCreateParams as OrderCreateParams,
    type OrderRetrieveParams as OrderRetrieveParams,
    type OrderExpireParams as OrderExpireParams,
  };
}
