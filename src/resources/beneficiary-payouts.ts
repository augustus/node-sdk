// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class BeneficiaryPayouts extends APIResource {
  /**
   * Payout all available balances of your account to the preconfigured beneficiary
   * bank account or wallet. If you want to handle payouts in a more dynamic and
   * granular way, please use the POST /payout/create endpoint.
   */
  create(options?: RequestOptions): APIPromise<BeneficiaryPayoutCreateResponse> {
    return this._client.post('/api/service/beneficiary-payout/create', options);
  }
}

/**
 * Array of Beneficiary Payouts
 */
export type BeneficiaryPayoutCreateResponse =
  Array<BeneficiaryPayoutCreateResponse.BeneficiaryPayoutCreateResponseItem>;

export namespace BeneficiaryPayoutCreateResponse {
  export interface BeneficiaryPayoutCreateResponseItem {
    /**
     * The unique identifier of the beneficiary payout
     */
    id: string;

    /**
     * The beneficiary payout amount
     */
    amount: number;

    /**
     * The creation timestamp of the payout
     */
    createdAt: unknown;

    /**
     * The currency of the balance which was settled to the beneficiary bank account or
     * wallet.
     */
    currency: 'EUR' | 'USD' | 'GBP' | 'PLN' | 'SEK' | 'DKK';

    /**
     * Description of the payout
     */
    description: string;

    /**
     * The merchant identifier
     */
    merchant: string;

    /**
     * The reference identifier for the payout
     */
    referenceId: string;

    /**
     * The descriptor that appears on bank statements
     */
    statementDescriptor: string;

    /**
     * The current status of the payout
     */
    status: 'paid' | 'pending' | 'in_transit' | 'failed' | 'returned' | 'canceled';

    /**
     * The type of payout
     */
    type: 'merchant' | 'customer';
  }
}

export declare namespace BeneficiaryPayouts {
  export { type BeneficiaryPayoutCreateResponse as BeneficiaryPayoutCreateResponse };
}
