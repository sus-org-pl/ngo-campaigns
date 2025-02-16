# NGO.pl Fundraising Integration Library

This library provides an abstraction for interacting with NGO.pl campaign data and payment processing. It is designed to simplify integration with the NGO.pl API, allowing easy retrieval of campaign details and handling payments securely.

## Installation

yarn add @sus-org-pl/ngo-campaigns

## Usage

### Importing the Library

```ts
import { NgoCampaign } from "@sus-org-pl/ngo-campaigns";
```

### Creating an Instance

To instantiate the NgoCampaign class, you need to provide a numeric campaign ID and an external campaign identifier (visible in the campaign URL).

```ts
const campaign = new NgoCampaign(2771, "GdqmZr");
```

### Fetching Campaign Details

Retrieves details of the campaign.

```ts
await campaign.getDetailsUrl();
```

Starting a Payment

To initiate a payment for a given campaign, you need to provide a payload containing the necessary transaction details.

```ts
const paymentPayload = {
  terms: [],
  statute: true,
  marketingAgreement: false,
  buyer: {
    firstName: "Mateusz",
    lastName: "Rojek",
    email: "m.rojek@umarlestatuty.pl",
  },
  price: 75,
  payMethod: "",
};

await campaign.getPaymentUrl(paymentPayload, {
  onSuccess: (response) => {
    window.location.href = response.url;
  },
  onError: (error) => {
    console.error("Payment failed:", error);
  },
});
```

### Error Handling

If an API request fails, an error will be thrown in getDetailsUrl(), while getPaymentUrl() allows handling errors via the provided hooks.onError callback.

## License

This library is licensed under the MIT License.

## Maintainer

Developed by Mateusz Rojek (@thismrojek) as part of Stowarzyszenie Umarłych Statutów.
