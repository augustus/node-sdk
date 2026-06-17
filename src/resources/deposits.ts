// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Deposits extends APIResource {
  /**
   * Retrieves a deposit by its ID.
   */
  retrieve(body: DepositRetrieveParams, options?: RequestOptions): APIPromise<DepositRetrieveResponse> {
    return this._client.post('/api/service/deposit/retrieve', { body, ...options });
  }
}

export interface DepositRetrieveResponse {
  /**
   * The ID of the deposit
   */
  id: string;

  /**
   * The amount of the deposit
   */
  amount: number;

  /**
   * The currency of the deposit
   */
  currency: 'EUR' | 'GBP' | 'PLN' | 'SEK' | 'DKK' | 'USD' | 'USDC';

  /**
   * The payee account identifier
   */
  payee: DepositRetrieveResponse.Payee;

  /**
   * The payer account identifier
   */
  payer: DepositRetrieveResponse.Payer;

  /**
   * The date and time the deposit was received
   */
  receivedAt: string;

  returns: Array<DepositRetrieveResponse.Return>;

  /**
   * The status of the deposit
   */
  status: 'received';

  /**
   * The ID of the transaction that initiated the deposit
   */
  transactionId: string;

  /**
   * The reference that appears on the bank statement
   */
  bankStatementReference?: string;

  /**
   * The payment rail or blockchain used for the deposit
   */
  rail?:
    | 'sepa_instant'
    | 'faster_payments'
    | 'sepa'
    | 'elixir'
    | 'express_elixir'
    | 'sek_account_to_account'
    | 'sumclearing'
    | 'straksclearing'
    | 'swift'
    | 'internal'
    | 'target'
    | 'ach'
    | 'fedwire'
    | 'ETH'
    | 'ETH-SEPOLIA'
    | 'SOL'
    | 'SOL-DEVNET'
    | 'MATIC'
    | 'MATIC-AMOY';

  /**
   * The transaction hash for crypto deposits
   */
  txHash?: string;
}

export namespace DepositRetrieveResponse {
  /**
   * The payee account identifier
   */
  export interface Payee {
    type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet' | 'aba';

    aba?: Payee.Aba;

    bankCode?: Payee.BankCode;

    bban?: Payee.Bban;

    iban?: Payee.Iban;

    sortCode?: Payee.SortCode;

    wallet?: Payee.Wallet;
  }

  export namespace Payee {
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
   * The payer account identifier
   */
  export interface Payer {
    type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet' | 'aba';

    aba?: Payer.Aba;

    bankCode?: Payer.BankCode;

    bban?: Payer.Bban;

    iban?: Payer.Iban;

    sortCode?: Payer.SortCode;

    wallet?: Payer.Wallet;
  }

  export namespace Payer {
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

  export interface Return {
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
    currency: 'EUR' | 'GBP' | 'PLN' | 'SEK' | 'DKK' | 'USD' | 'USDC';

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
}

export interface DepositRetrieveParams {
  /**
   * The ID of the deposit
   */
  id: string;
}

export declare namespace Deposits {
  export {
    type DepositRetrieveResponse as DepositRetrieveResponse,
    type DepositRetrieveParams as DepositRetrieveParams,
  };
}
