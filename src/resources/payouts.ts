// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Payouts extends APIResource {
  /**
   * Create a payout for a merchant.
   */
  create(body: PayoutCreateParams, options?: RequestOptions): APIPromise<Payout> {
    return this._client.post('/api/service/payout/create', { body, ...options });
  }

  /**
   * Retrieve a payout object by id.
   */
  retrieve(body: PayoutRetrieveParams, options?: RequestOptions): APIPromise<PayoutRetrieveResponse> {
    return this._client.post('/api/service/payout/retrieve', { body, ...options });
  }

  /**
   * List payouts for a merchant.
   */
  list(body: PayoutListParams, options?: RequestOptions): APIPromise<PayoutListResponse> {
    return this._client.post('/api/service/payout/list', { body, ...options });
  }
}

export interface Payout {
  /**
   * The payout ID
   */
  id: string;

  /**
   * The payout amount
   */
  amount: number;

  /**
   * The payout created at
   */
  createdAt: unknown;

  /**
   * The payout currency
   */
  currency: 'EUR' | 'GBP' | 'USDC' | 'USD';

  /**
   * The payout destination
   */
  destination: Payout.Destination;

  /**
   * The payout status
   */
  status: 'paid' | 'pending' | 'in_transit' | 'failed' | 'canceled';

  /**
   * The payout type
   */
  type: 'beneficiary' | 'customer';

  /**
   * The payout updated at
   */
  updatedAt: unknown;

  /**
   * Failure details. Only available if the payout failed.
   */
  failure?: Payout.Failure;

  /**
   * The payout metadata
   */
  metadata?: { [key: string]: unknown };

  /**
   * The payout payment reference
   */
  paymentReference?: string;

  /**
   * The payout transaction ID
   */
  transactionId?: string;
}

export namespace Payout {
  /**
   * The payout destination
   */
  export interface Destination {
    type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet' | 'aba';

    aba?: Destination.Aba;

    bankCode?: Destination.BankCode;

    bban?: Destination.Bban;

    iban?: Destination.Iban;

    sortCode?: Destination.SortCode;

    wallet?: Destination.Wallet;
  }

  export namespace Destination {
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
   * Failure details. Only available if the payout failed.
   */
  export interface Failure {
    /**
     * Failure code. Please refer to the documentation for the list of possible values.
     */
    code:
      | 'account_closed'
      | 'account_blocked'
      | 'insufficient_funds'
      | 'invalid_account_format'
      | 'invalid_instruction'
      | 'invalid_amount'
      | 'invalid_time'
      | 'duplicate_transaction'
      | 'payee_verification_failed'
      | 'system_error'
      | 'provider_system_error'
      | 'rejected_by_correspondent_bank'
      | 'blocked_by_review'
      | 'unknown';

    /**
     * Human readable description of the failure.
     */
    message: string;

    /**
     * If true, you can safely retry.
     */
    retry: boolean;
  }
}

export interface PayoutRetrieveResponse {
  /**
   * The payout ID
   */
  id: string;

  /**
   * The payout amount
   */
  amount: number;

  /**
   * The payout created at
   */
  createdAt: unknown;

  /**
   * The payout currency
   */
  currency: 'EUR' | 'GBP' | 'USDC' | 'USD';

  /**
   * The payout destination
   */
  destination: PayoutRetrieveResponse.Destination;

  /**
   * The payout status
   */
  status: 'paid' | 'pending' | 'in_transit' | 'failed' | 'canceled';

  /**
   * The payout type
   */
  type: 'beneficiary' | 'customer';

  /**
   * The payout updated at
   */
  updatedAt: unknown;

  /**
   * Failure details. Only available if the payout failed.
   */
  failure?: PayoutRetrieveResponse.Failure;

  /**
   * The payout metadata
   */
  metadata?: { [key: string]: unknown };

  /**
   * The payout payment reference
   */
  paymentReference?: string;

  /**
   * The payout transaction ID
   */
  transactionId?: string;
}

export namespace PayoutRetrieveResponse {
  /**
   * The payout destination
   */
  export interface Destination {
    type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet' | 'aba';

    aba?: Destination.Aba;

    bankCode?: Destination.BankCode;

    bban?: Destination.Bban;

    iban?: Destination.Iban;

    sortCode?: Destination.SortCode;

    wallet?: Destination.Wallet;
  }

  export namespace Destination {
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
   * Failure details. Only available if the payout failed.
   */
  export interface Failure {
    /**
     * Failure code. Please refer to the documentation for the list of possible values.
     */
    code:
      | 'account_closed'
      | 'account_blocked'
      | 'insufficient_funds'
      | 'invalid_account_format'
      | 'invalid_instruction'
      | 'invalid_amount'
      | 'invalid_time'
      | 'duplicate_transaction'
      | 'payee_verification_failed'
      | 'system_error'
      | 'provider_system_error'
      | 'rejected_by_correspondent_bank'
      | 'blocked_by_review'
      | 'unknown';

    /**
     * Human readable description of the failure.
     */
    message: string;

    /**
     * If true, you can safely retry.
     */
    retry: boolean;
  }
}

export interface PayoutListResponse {
  count: number;

  hasNext: boolean;

  items: Array<PayoutListResponse.Item>;

  skip: number;
}

export namespace PayoutListResponse {
  export interface Item {
    /**
     * The payout ID
     */
    id: string;

    /**
     * The payout amount
     */
    amount: number;

    /**
     * The payout created at
     */
    createdAt: unknown;

    /**
     * The payout currency
     */
    currency: 'EUR' | 'GBP' | 'USDC' | 'USD';

    /**
     * The payout destination
     */
    destination: Item.Destination;

    /**
     * The payout status
     */
    status: 'paid' | 'pending' | 'in_transit' | 'failed' | 'canceled';

    /**
     * The payout type
     */
    type: 'beneficiary' | 'customer';

    /**
     * The payout updated at
     */
    updatedAt: unknown;

    /**
     * Failure details. Only available if the payout failed.
     */
    failure?: Item.Failure;

    /**
     * The payout metadata
     */
    metadata?: { [key: string]: unknown };

    /**
     * The payout payment reference
     */
    paymentReference?: string;

    /**
     * The payout transaction ID
     */
    transactionId?: string;
  }

  export namespace Item {
    /**
     * The payout destination
     */
    export interface Destination {
      type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet' | 'aba';

      aba?: Destination.Aba;

      bankCode?: Destination.BankCode;

      bban?: Destination.Bban;

      iban?: Destination.Iban;

      sortCode?: Destination.SortCode;

      wallet?: Destination.Wallet;
    }

    export namespace Destination {
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
     * Failure details. Only available if the payout failed.
     */
    export interface Failure {
      /**
       * Failure code. Please refer to the documentation for the list of possible values.
       */
      code:
        | 'account_closed'
        | 'account_blocked'
        | 'insufficient_funds'
        | 'invalid_account_format'
        | 'invalid_instruction'
        | 'invalid_amount'
        | 'invalid_time'
        | 'duplicate_transaction'
        | 'payee_verification_failed'
        | 'system_error'
        | 'provider_system_error'
        | 'rejected_by_correspondent_bank'
        | 'blocked_by_review'
        | 'unknown';

      /**
       * Human readable description of the failure.
       */
      message: string;

      /**
       * If true, you can safely retry.
       */
      retry: boolean;
    }
  }
}

export interface PayoutCreateParams {
  /**
   * The payout amount in decimal format. The minimum amount is 0.01.
   */
  amount: number;

  currency: 'EUR' | 'GBP' | 'USDC' | 'USD';

  destination: PayoutCreateParams.Destination;

  /**
   * This can be used to store any additional information you need to associate with
   * this payout.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The payout payment reference. This is visible to the receiving party, if
   * possible.
   */
  paymentReference?: string;

  /**
   * The payment rail or blockchain used for the payout
   */
  rail?:
    | 'SEPA_INSTANT'
    | 'FASTER_PAYMENTS'
    | 'SEPA'
    | 'ELIXIR'
    | 'EXPRESS_ELIXIR'
    | 'SEK_ACCOUNT_TO_ACCOUNT'
    | 'SUMCLEARING'
    | 'STRAKSCLEARING'
    | 'SWIFT'
    | 'INTERNAL'
    | 'TARGET'
    | 'ACH'
    | 'FEDWIRE'
    | 'BTC'
    | 'BTC-TESTNET4'
    | 'ETH'
    | 'ETH-SEPOLIA'
    | 'SOL'
    | 'SOL-DEVNET'
    | 'MATIC'
    | 'MATIC-AMOY';
}

export namespace PayoutCreateParams {
  export interface Destination {
    /**
     * Physical postal address of the payout counterparty.
     */
    address?: Destination.Address;

    financialAddress?: Destination.FinancialAddress | null;

    orderId?: string;

    /**
     * Beneficiary is a payout to an account owned by the merchant. Customer is a
     * payout to an external customer account.
     */
    type?: 'beneficiary' | 'customer';
  }

  export namespace Destination {
    /**
     * Physical postal address of the payout counterparty.
     */
    export interface Address {
      /**
       * City or locality.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      countryCode:
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

      /**
       * Primary street address line.
       */
      line1: string;

      /**
       * Secondary street address line.
       */
      line2?: string;

      /**
       * Postal or ZIP code.
       */
      postalCode?: string;

      /**
       * State, province, or region.
       */
      state?: string;
    }

    export interface FinancialAddress {
      type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet' | 'aba';

      aba?: FinancialAddress.Aba;

      bankCode?: FinancialAddress.BankCode;

      bban?: FinancialAddress.Bban;

      iban?: FinancialAddress.Iban;

      sortCode?: FinancialAddress.SortCode;

      wallet?: FinancialAddress.Wallet;
    }

    export namespace FinancialAddress {
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
}

export interface PayoutRetrieveParams {
  /**
   * The payout ID
   */
  id: string;
}

export interface PayoutListParams {
  limit?: number;

  skip?: number;

  type?: 'customer-payout' | 'beneficiary-payout';
}

export declare namespace Payouts {
  export {
    type Payout as Payout,
    type PayoutRetrieveResponse as PayoutRetrieveResponse,
    type PayoutListResponse as PayoutListResponse,
    type PayoutCreateParams as PayoutCreateParams,
    type PayoutRetrieveParams as PayoutRetrieveParams,
    type PayoutListParams as PayoutListParams,
  };
}
