export type PaymentMethod = '' | 'blik' | string;

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
  /** 
   * @default ''
   * @description Empty string allows to use all payment methods
   */
  payMethod: PaymentMethod;
}

export interface StartPaymentResponse {
  /** Signed URL for payment gateway, user should be redirected here to finish payment */
  url: string;
}
