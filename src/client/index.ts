import type {
	GetCampaignDetailsResponse,
	ResponseHooks,
	StartPaymentRequestPayload,
	StartPaymentResponse,
} from '../types';

import { NgoApiClient } from './api/index.ts';

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

	public async getDetails(): Promise<GetCampaignDetailsResponse | void> {
		try {
			return await this.apiClient.get<GetCampaignDetailsResponse>('');
		} catch (error) {
			throw new Error('Failed to get campaign\'s details');
		}
	}

	public async getPaymentUrl(
		payload: Omit<StartPaymentRequestPayload, 'campaignId'>,
		hooks: ResponseHooks<StartPaymentResponse> = {}
	): Promise<StartPaymentResponse | void> {
		try {
			const data = await this.apiClient.post<StartPaymentResponse>(
				'StartPayment',
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
