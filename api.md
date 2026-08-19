# Banks

Types:

- <code><a href="./src/resources/banks.ts">BankRetrieveResponse</a></code>
- <code><a href="./src/resources/banks.ts">BankListResponse</a></code>
- <code><a href="./src/resources/banks.ts">BankSearchResponse</a></code>

Methods:

- <code title="post /api/service/banks/details">client.banks.<a href="./src/resources/banks.ts">retrieve</a>({ ...params }) -> BankRetrieveResponse</code>
- <code title="post /api/service/banks/list">client.banks.<a href="./src/resources/banks.ts">list</a>({ ...params }) -> BankListResponse</code>
- <code title="post /api/service/banks/search">client.banks.<a href="./src/resources/banks.ts">search</a>({ ...params }) -> BankSearchResponse</code>

# Checkoutsession

Types:

- <code><a href="./src/resources/checkoutsession.ts">CheckoutsessionCreateResponse</a></code>
- <code><a href="./src/resources/checkoutsession.ts">CheckoutsessionRetrieveResponse</a></code>
- <code><a href="./src/resources/checkoutsession.ts">CheckoutsessionExpireResponse</a></code>

Methods:

- <code title="post /api/service/checkout/session/create">client.checkoutsession.<a href="./src/resources/checkoutsession.ts">create</a>({ ...params }) -> CheckoutsessionCreateResponse</code>
- <code title="post /api/service/checkout/session/details">client.checkoutsession.<a href="./src/resources/checkoutsession.ts">retrieve</a>({ ...params }) -> CheckoutsessionRetrieveResponse</code>
- <code title="post /api/service/checkout/session/expire">client.checkoutsession.<a href="./src/resources/checkoutsession.ts">expire</a>({ ...params }) -> CheckoutsessionExpireResponse</code>

# Customers

Types:

- <code><a href="./src/resources/customers.ts">CustomerCreateResponse</a></code>
- <code><a href="./src/resources/customers.ts">CustomerRetrieveResponse</a></code>
- <code><a href="./src/resources/customers.ts">CustomerUpdateResponse</a></code>
- <code><a href="./src/resources/customers.ts">CustomerDeleteResponse</a></code>
- <code><a href="./src/resources/customers.ts">CustomerSearchResponse</a></code>

Methods:

- <code title="post /api/service/customer/create">client.customers.<a href="./src/resources/customers.ts">create</a>({ ...params }) -> CustomerCreateResponse</code>
- <code title="post /api/service/customer/retrieve">client.customers.<a href="./src/resources/customers.ts">retrieve</a>({ ...params }) -> CustomerRetrieveResponse</code>
- <code title="post /api/service/customer/update">client.customers.<a href="./src/resources/customers.ts">update</a>({ ...params }) -> CustomerUpdateResponse</code>
- <code title="post /api/service/customer/delete">client.customers.<a href="./src/resources/customers.ts">delete</a>({ ...params }) -> CustomerDeleteResponse</code>
- <code title="post /api/service/customer/search">client.customers.<a href="./src/resources/customers.ts">search</a>({ ...params }) -> CustomerSearchResponse</code>

# Orders

Types:

- <code><a href="./src/resources/orders.ts">OrderCreateResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderRetrieveResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderExpireResponse</a></code>

Methods:

- <code title="post /api/service/order/create">client.orders.<a href="./src/resources/orders.ts">create</a>({ ...params }) -> OrderCreateResponse</code>
- <code title="post /api/service/order/details">client.orders.<a href="./src/resources/orders.ts">retrieve</a>({ ...params }) -> OrderRetrieveResponse</code>
- <code title="post /api/service/order/expire">client.orders.<a href="./src/resources/orders.ts">expire</a>({ ...params }) -> OrderExpireResponse</code>

# Deposits

Types:

- <code><a href="./src/resources/deposits.ts">DepositRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/deposit/retrieve">client.deposits.<a href="./src/resources/deposits.ts">retrieve</a>({ ...params }) -> DepositRetrieveResponse</code>

# Returns

Types:

- <code><a href="./src/resources/returns.ts">ReturnCreateResponse</a></code>
- <code><a href="./src/resources/returns.ts">ReturnRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/return/create">client.returns.<a href="./src/resources/returns.ts">create</a>({ ...params }) -> ReturnCreateResponse</code>
- <code title="post /api/service/return/retrieve">client.returns.<a href="./src/resources/returns.ts">retrieve</a>({ ...params }) -> ReturnRetrieveResponse</code>

# BeneficiaryPayouts

Types:

- <code><a href="./src/resources/beneficiary-payouts.ts">BeneficiaryPayoutCreateResponse</a></code>

Methods:

- <code title="post /api/service/beneficiary-payout/create">client.beneficiaryPayouts.<a href="./src/resources/beneficiary-payouts.ts">create</a>() -> BeneficiaryPayoutCreateResponse</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="post /api/service/transaction/list">client.transactions.<a href="./src/resources/transactions.ts">list</a>({ ...params }) -> TransactionListResponse</code>

# Capabilities

Types:

- <code><a href="./src/resources/capabilities.ts">CapabilityRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/merchant/capabilities/details">client.capabilities.<a href="./src/resources/capabilities.ts">retrieve</a>({ ...params }) -> CapabilityRetrieveResponse</code>

# Refunds

Types:

- <code><a href="./src/resources/refunds.ts">Refund</a></code>
- <code><a href="./src/resources/refunds.ts">RefundCreateResponse</a></code>

Methods:

- <code title="post /api/service/refund/create">client.refunds.<a href="./src/resources/refunds.ts">create</a>({ ...params }) -> RefundCreateResponse</code>
- <code title="post /api/service/refund/retrieve">client.refunds.<a href="./src/resources/refunds.ts">retrieve</a>({ ...params }) -> Refund</code>

# Payouts

Types:

- <code><a href="./src/resources/payouts.ts">Payout</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutRetrieveResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutListResponse</a></code>

Methods:

- <code title="post /api/service/payout/create">client.payouts.<a href="./src/resources/payouts.ts">create</a>({ ...params }) -> Payout</code>
- <code title="post /api/service/payout/retrieve">client.payouts.<a href="./src/resources/payouts.ts">retrieve</a>({ ...params }) -> PayoutRetrieveResponse</code>
- <code title="post /api/service/payout/list">client.payouts.<a href="./src/resources/payouts.ts">list</a>({ ...params }) -> PayoutListResponse</code>

# Subaccounts

Types:

- <code><a href="./src/resources/subaccounts.ts">Subaccount</a></code>
- <code><a href="./src/resources/subaccounts.ts">SubaccountCreateResponse</a></code>

Methods:

- <code title="post /api/service/subaccount/create">client.subaccounts.<a href="./src/resources/subaccounts.ts">create</a>({ ...params }) -> SubaccountCreateResponse</code>
- <code title="post /api/service/subaccount/retrieve">client.subaccounts.<a href="./src/resources/subaccounts.ts">retrieve</a>({ ...params }) -> Subaccount</code>

# Balance

Types:

- <code><a href="./src/resources/balance.ts">BalanceRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/balance/retrieve">client.balance.<a href="./src/resources/balance.ts">retrieve</a>({ ...params }) -> BalanceRetrieveResponse</code>

# Webhook

Types:

- <code><a href="./src/resources/webhook/webhook.ts">WebhookTriggerResponse</a></code>

Methods:

- <code title="post /api/service/webhook/trigger">client.webhook.<a href="./src/resources/webhook/webhook.ts">trigger</a>({ ...params }) -> WebhookTriggerResponse</code>

## Subscription

Types:

- <code><a href="./src/resources/webhook/subscription.ts">SubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/webhook/subscription.ts">SubscriptionUpdateResponse</a></code>
- <code><a href="./src/resources/webhook/subscription.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/webhook/subscription.ts">SubscriptionDeleteResponse</a></code>
- <code><a href="./src/resources/webhook/subscription.ts">SubscriptionPingResponse</a></code>

Methods:

- <code title="post /api/service/webhook-subscription/create">client.webhook.subscription.<a href="./src/resources/webhook/subscription.ts">create</a>({ ...params }) -> SubscriptionCreateResponse</code>
- <code title="post /api/service/webhook-subscription/update">client.webhook.subscription.<a href="./src/resources/webhook/subscription.ts">update</a>({ ...params }) -> SubscriptionUpdateResponse</code>
- <code title="post /api/service/webhook-subscription/list">client.webhook.subscription.<a href="./src/resources/webhook/subscription.ts">list</a>({ ...params }) -> SubscriptionListResponse</code>
- <code title="post /api/service/webhook-subscription/delete">client.webhook.subscription.<a href="./src/resources/webhook/subscription.ts">delete</a>({ ...params }) -> SubscriptionDeleteResponse</code>
- <code title="post /api/service/webhook-subscription/ping">client.webhook.subscription.<a href="./src/resources/webhook/subscription.ts">ping</a>({ ...params }) -> SubscriptionPingResponse</code>

# Payee

Types:

- <code><a href="./src/resources/payee.ts">PayeeVerifyResponse</a></code>

Methods:

- <code title="post /api/service/payee/verify">client.payee.<a href="./src/resources/payee.ts">verify</a>({ ...params }) -> PayeeVerifyResponse</code>
