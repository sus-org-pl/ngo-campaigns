import {
  ResponseHooks,
  StartPaymentRequestPayload,
  StartPaymentResponse,
} from "../types/index";

import { NgoApiClient } from "./api/index";

export class NgoCampaign {
  private readonly campaignId: number;
  private readonly apiClient: NgoApiClient;

  constructor(
    /**
     * Numeric id of the campaign
     * @example 2771
     */
    campaignId: number,
    /**
     * External id, visible in campaign's URL
     * @example "GdqmZr"
     */
    externalId: string
  ) {
    this.campaignId = campaignId;
    this.apiClient = new NgoApiClient(externalId);
  }

  public async getPaymentUrl(
    payload: Omit<StartPaymentRequestPayload, "campaignId">,
    hooks: ResponseHooks<StartPaymentResponse> = {}
  ): Promise<StartPaymentResponse | void> {
    try {
      const data = await this.apiClient.post<StartPaymentResponse>(
        "StartPayment",
        {
          body: JSON.stringify({
            ...payload,
            campaignId: this.campaignId,
          }),
        }
      );
      hooks.onSuccess?.(data);

      return data;
    } catch (error) {
      hooks.onError?.(error);
      return;
    }
  }
}
