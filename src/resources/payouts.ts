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
      blockchain: 'ETH' | 'ETH-SEPOLIA' | 'SOL' | 'SOL-DEVNET' | 'MATIC' | 'MATIC-AMOY';
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
      blockchain: 'ETH' | 'ETH-SEPOLIA' | 'SOL' | 'SOL-DEVNET' | 'MATIC' | 'MATIC-AMOY';
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
        blockchain: 'ETH' | 'ETH-SEPOLIA' | 'SOL' | 'SOL-DEVNET' | 'MATIC' | 'MATIC-AMOY';
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
    | 'ETH'
    | 'ETH-SEPOLIA'
    | 'SOL'
    | 'SOL-DEVNET'
    | 'MATIC'
    | 'MATIC-AMOY';
}

export namespace PayoutCreateParams {
  export interface Destination {
    financialAddress?: Destination.FinancialAddress | null;

    orderId?: string;

    /**
     * Beneficiary is a payout to an account owned by the merchant. Customer is a
     * payout to an external customer account.
     */
    type?: 'beneficiary' | 'customer';
  }

  export namespace Destination {
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
        blockchain: 'ETH' | 'ETH-SEPOLIA' | 'SOL' | 'SOL-DEVNET' | 'MATIC' | 'MATIC-AMOY';
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
