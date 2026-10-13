import { nl, NL_SHIPPING } from "./nl";
import type { MarketGuideContent, ShipEvidence, CriterionKey } from "./types";

export type { MarketGuideContent, ShipEvidence, CriterionKey };

export const MARKET_GUIDES: Record<string, { content: MarketGuideContent; shipping: Record<string, ShipEvidence> }> = {
  nl: { content: nl, shipping: NL_SHIPPING },
};

/** Where each language's buying guide is linked from (footer, hub, Index page).
 * Only languages with a live guide appear here. */
export const MARKET_GUIDE_LINKS: Record<string, { href: string; footer: string; hub: string; indexLabel: string; indexBody: string; indexCta: string }> = {
  nl: {
    href: nl.slug,
    footer: "Polyfenolrijke olijfolie in Nederland",
    hub: "Koopgids: polyfenolrijke olijfolie in Nederland, met prijzen en verzendkosten →",
    indexLabel: "Polyfenolrijke olijfolie kopen in Nederland",
    indexBody: "Welke van deze oliën je in Nederland kunt kopen, met prijs, verzendkosten en levertijd per merk.",
    indexCta: "Naar de koopgids →",
  },
};
export const marketGuideFor = (lang: string) => MARKET_GUIDE_LINKS[lang] ?? null;
