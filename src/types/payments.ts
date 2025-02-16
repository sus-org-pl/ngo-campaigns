export interface StartPaymentRequestPayload {
  terms: unknown[];
  statute: boolean;
  marketingAgreement: boolean;
  buyer: {
    firstName: string;
    lastName: string;
    email: string;
  };
  price: number;
  campaignPriceId?: number;
  campaignId: number;
  /** By default, this is set to empty string */
  payMethod: string;
}

export interface StartPaymentResponse {
  /** Signed URL for payment gateway, user should be redirected here to finish payment */
  url: string;
}
