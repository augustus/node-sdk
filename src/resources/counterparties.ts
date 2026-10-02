// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Counterparties extends APIResource {
  /**
   * Create a counterparty owned by the merchant.
   */
  create(body: CounterpartyCreateParams, options?: RequestOptions): APIPromise<Counterparty> {
    return this._client.post('/api/service/counterparty/create', { body, ...options });
  }

  /**
   * Retrieve a counterparty by id.
   */
  retrieve(
    body: CounterpartyRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CounterpartyRetrieveResponse> {
    return this._client.post('/api/service/counterparty/retrieve', { body, ...options });
  }

  /**
   * Update the mutable details of a counterparty owned by the merchant.
   */
  update(body: CounterpartyUpdateParams, options?: RequestOptions): APIPromise<CounterpartyUpdateResponse> {
    return this._client.post('/api/service/counterparty/update', { body, ...options });
  }

  /**
   * List counterparties owned by the merchant.
   */
  list(body: CounterpartyListParams, options?: RequestOptions): APIPromise<CounterpartyListResponse> {
    return this._client.post('/api/service/counterparty/list', { body, ...options });
  }
}

export interface Counterparty {
  /**
   * The counterparty id
   */
  id: string;

  /**
   * Whether payments to and from the counterparty are blocked
   */
  blocked: boolean;

  /**
   * When the counterparty was created
   */
  createdAt: unknown;

  /**
   * The counterparty date of birth as YYYY-MM-DD
   */
  dateOfBirth: string | null;

  /**
   * Whether the counterparty is a business or an individual
   */
  entityType: 'business' | 'individual';

  /**
   * The counterparty financial address
   */
  financialAddress: Counterparty.FinancialAddress;

  /**
   * Whether the counterparty is owned by the merchant
   */
  isSelfOwned: boolean;

  /**
   * The counterparty metadata
   */
  metadata: { [key: string]: string };

  /**
   * The counterparty name
   */
  name: string | null;

  /**
   * A structured physical postal address.
   */
  physicalAddress: Counterparty.PhysicalAddress | null;

  /**
   * When the counterparty was last updated
   */
  updatedAt: unknown;
}

export namespace Counterparty {
  /**
   * The counterparty financial address
   */
  export interface FinancialAddress {
    type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet' | 'aba' | 'bic';

    aba?: FinancialAddress.Aba;

    bankCode?: FinancialAddress.BankCode;

    bban?: FinancialAddress.Bban;

    bic?: FinancialAddress.Bic;

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

    export interface Bic {
      accountHolderName: string;

      accountNumber: string;

      bic: string;

      localBankCode?: string;
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
   * A structured physical postal address.
   */
  export interface PhysicalAddress {
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
    line1?: string;

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
}

export interface CounterpartyRetrieveResponse {
  /**
   * The counterparty id
   */
  id: string;

  /**
   * Whether payments to and from the counterparty are blocked
   */
  blocked: boolean;

  /**
   * When the counterparty was created
   */
  createdAt: unknown;

  /**
   * The counterparty date of birth as YYYY-MM-DD
   */
  dateOfBirth: string | null;

  /**
   * Whether the counterparty is a business or an individual
   */
  entityType: 'business' | 'individual';

  /**
   * The counterparty financial address
   */
  financialAddress: CounterpartyRetrieveResponse.FinancialAddress;

  /**
   * Whether the counterparty is owned by the merchant
   */
  isSelfOwned: boolean;

  /**
   * The counterparty metadata
   */
  metadata: { [key: string]: string };

  /**
   * The counterparty name
   */
  name: string | null;

  /**
   * A structured physical postal address.
   */
  physicalAddress: CounterpartyRetrieveResponse.PhysicalAddress | null;

  /**
   * When the counterparty was last updated
   */
  updatedAt: unknown;
}

export namespace CounterpartyRetrieveResponse {
  /**
   * The counterparty financial address
   */
  export interface FinancialAddress {
    type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet' | 'aba' | 'bic';

    aba?: FinancialAddress.Aba;

    bankCode?: FinancialAddress.BankCode;

    bban?: FinancialAddress.Bban;

    bic?: FinancialAddress.Bic;

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

    export interface Bic {
      accountHolderName: string;

      accountNumber: string;

      bic: string;

      localBankCode?: string;
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
   * A structured physical postal address.
   */
  export interface PhysicalAddress {
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
    line1?: string;

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
}

export interface CounterpartyUpdateResponse {
  /**
   * The counterparty id
   */
  id: string;

  /**
   * Whether payments to and from the counterparty are blocked
   */
  blocked: boolean;

  /**
   * When the counterparty was created
   */
  createdAt: unknown;

  /**
   * The counterparty date of birth as YYYY-MM-DD
   */
  dateOfBirth: string | null;

  /**
   * Whether the counterparty is a business or an individual
   */
  entityType: 'business' | 'individual';

  /**
   * The counterparty financial address
   */
  financialAddress: CounterpartyUpdateResponse.FinancialAddress;

  /**
   * Whether the counterparty is owned by the merchant
   */
  isSelfOwned: boolean;

  /**
   * The counterparty metadata
   */
  metadata: { [key: string]: string };

  /**
   * The counterparty name
   */
  name: string | null;

  /**
   * A structured physical postal address.
   */
  physicalAddress: CounterpartyUpdateResponse.PhysicalAddress | null;

  /**
   * When the counterparty was last updated
   */
  updatedAt: unknown;
}

export namespace CounterpartyUpdateResponse {
  /**
   * The counterparty financial address
   */
  export interface FinancialAddress {
    type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet' | 'aba' | 'bic';

    aba?: FinancialAddress.Aba;

    bankCode?: FinancialAddress.BankCode;

    bban?: FinancialAddress.Bban;

    bic?: FinancialAddress.Bic;

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

    export interface Bic {
      accountHolderName: string;

      accountNumber: string;

      bic: string;

      localBankCode?: string;
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
   * A structured physical postal address.
   */
  export interface PhysicalAddress {
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
    line1?: string;

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
}

export interface CounterpartyListResponse {
  /**
   * The list of counterparties
   */
  data: Array<CounterpartyListResponse.Data>;

  /**
   * Pagination information
   */
  paging: CounterpartyListResponse.Paging;
}

export namespace CounterpartyListResponse {
  export interface Data {
    /**
     * The counterparty id
     */
    id: string;

    /**
     * Whether payments to and from the counterparty are blocked
     */
    blocked: boolean;

    /**
     * When the counterparty was created
     */
    createdAt: unknown;

    /**
     * The counterparty date of birth as YYYY-MM-DD
     */
    dateOfBirth: string | null;

    /**
     * Whether the counterparty is a business or an individual
     */
    entityType: 'business' | 'individual';

    /**
     * The counterparty financial address
     */
    financialAddress: Data.FinancialAddress;

    /**
     * Whether the counterparty is owned by the merchant
     */
    isSelfOwned: boolean;

    /**
     * The counterparty metadata
     */
    metadata: { [key: string]: string };

    /**
     * The counterparty name
     */
    name: string | null;

    /**
     * A structured physical postal address.
     */
    physicalAddress: Data.PhysicalAddress | null;

    /**
     * When the counterparty was last updated
     */
    updatedAt: unknown;
  }

  export namespace Data {
    /**
     * The counterparty financial address
     */
    export interface FinancialAddress {
      type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet' | 'aba' | 'bic';

      aba?: FinancialAddress.Aba;

      bankCode?: FinancialAddress.BankCode;

      bban?: FinancialAddress.Bban;

      bic?: FinancialAddress.Bic;

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

      export interface Bic {
        accountHolderName: string;

        accountNumber: string;

        bic: string;

        localBankCode?: string;
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
     * A structured physical postal address.
     */
    export interface PhysicalAddress {
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
      line1?: string;

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
  }

  /**
   * Pagination information
   */
  export interface Paging {
    /**
     * Whether more counterparties are available
     */
    hasNext: boolean;

    /**
     * Cursor for the next page of results
     */
    nextCursor?: string;
  }
}

export interface CounterpartyCreateParams {
  /**
   * The counterparty financial address
   */
  financialAddress: CounterpartyCreateParams.FinancialAddress;

  /**
   * The counterparty date of birth as YYYY-MM-DD
   */
  dateOfBirth?: string;

  /**
   * Whether the counterparty is a business or an individual
   */
  entityType?: 'business' | 'individual';

  /**
   * Whether the counterparty is owned by the merchant
   */
  isSelfOwned?: boolean;

  /**
   * The counterparty metadata
   */
  metadata?: { [key: string]: string };

  /**
   * The counterparty name
   */
  name?: string;

  /**
   * A structured physical postal address.
   */
  physicalAddress?: CounterpartyCreateParams.PhysicalAddress;
}

export namespace CounterpartyCreateParams {
  /**
   * The counterparty financial address
   */
  export interface FinancialAddress {
    type: 'iban' | 'sort_code' | 'bank_code' | 'bban' | 'wallet' | 'aba' | 'bic';

    aba?: FinancialAddress.Aba;

    bankCode?: FinancialAddress.BankCode;

    bban?: FinancialAddress.Bban;

    bic?: FinancialAddress.Bic;

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

    export interface Bic {
      accountHolderName: string;

      accountNumber: string;

      bic: string;

      localBankCode?: string;
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
   * A structured physical postal address.
   */
  export interface PhysicalAddress {
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
    line1?: string;

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
}

export interface CounterpartyRetrieveParams {
  /**
   * The counterparty id
   */
  id: string;
}

export interface CounterpartyUpdateParams {
  /**
   * The counterparty id
   */
  id: string;

  /**
   * The counterparty date of birth as YYYY-MM-DD. Pass null to clear.
   */
  dateOfBirth?: string | null;

  /**
   * Whether the counterparty is a business or an individual
   */
  entityType?: 'business' | 'individual';

  /**
   * Whether the counterparty is owned by the merchant
   */
  isSelfOwned?: boolean;

  /**
   * The counterparty name. Pass null to clear.
   */
  name?: string | null;

  /**
   * A structured physical postal address.
   */
  physicalAddress?: CounterpartyUpdateParams.PhysicalAddress | null;
}

export namespace CounterpartyUpdateParams {
  /**
   * A structured physical postal address.
   */
  export interface PhysicalAddress {
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
    line1?: string;

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
}

export interface CounterpartyListParams {
  /**
   * Cursor for pagination
   */
  afterCursor?: string;

  /**
   * Maximum number of counterparties to return
   */
  limit?: number;
}

export declare namespace Counterparties {
  export {
    type Counterparty as Counterparty,
    type CounterpartyRetrieveResponse as CounterpartyRetrieveResponse,
    type CounterpartyUpdateResponse as CounterpartyUpdateResponse,
    type CounterpartyListResponse as CounterpartyListResponse,
    type CounterpartyCreateParams as CounterpartyCreateParams,
    type CounterpartyRetrieveParams as CounterpartyRetrieveParams,
    type CounterpartyUpdateParams as CounterpartyUpdateParams,
    type CounterpartyListParams as CounterpartyListParams,
  };
}
