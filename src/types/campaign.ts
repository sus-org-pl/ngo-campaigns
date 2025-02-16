export interface GetCampaignDetailsResponse {
  externalId: string;
  allowAnyPrice: boolean;
  allowRecurring: boolean;
  showCollected: boolean;
  hasPictureInBackground: boolean;
  hasPictureInDescription: boolean;
  hasPictureInPrice: boolean;
  hasPriceDescriptions: boolean;
  darkMode: boolean;
  requireAddress: boolean;
  useEndDate: boolean;
  colorPackId: number;
  appeal: string;
  buttonText: string;
  cancelWebsite: string;
  description: string;
  fontStyle: string;
  layoutType: string;
  motto1: string;
  motto2: string;
  publishWebsite: string;
  redirectToWebsite: string;
  organizationStandardPosId: number;
  organizationId: number;
  priceCount: number;
  descriptionMediaId: string;
  color: string;
  prices: {
    id: number;
    /**
     * Amount value in PLN
     * @example 5
     */
    value: number;
  }[];
  id: number;
  name: string;
  hasObjective: boolean;
  objectiveValue: number;
  endDate: string;
  startDate: string;
  organization: {
    id: number;
    name: string;
  };
  /**
   * Amount collected so far in the campaign (since the startDate)
   * @example 255
   */
  collected: number;
  active: boolean;
  expired: boolean;
  isBeforeStart: boolean;
  imported: boolean;
}
