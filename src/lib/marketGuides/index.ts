import { nl, NL_SHIPPING } from "./nl";
import type { MarketGuideContent, ShipEvidence, CriterionKey } from "./types";

export type { MarketGuideContent, ShipEvidence, CriterionKey };

export const MARKET_GUIDES: Record<string, { content: MarketGuideContent; shipping: Record<string, ShipEvidence> }> = {
  nl: { content: nl, shipping: NL_SHIPPING },
};
