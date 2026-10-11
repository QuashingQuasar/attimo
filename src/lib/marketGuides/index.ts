import { nl, NL_SHIPPING } from "./nl";
import type { MarketGuideContent, ShipEvidence } from "./types";

export type { MarketGuideContent, ShipEvidence };

export const MARKET_GUIDES: Record<string, { content: MarketGuideContent; shipping: Record<string, ShipEvidence> }> = {
  nl: { content: nl, shipping: NL_SHIPPING },
};
