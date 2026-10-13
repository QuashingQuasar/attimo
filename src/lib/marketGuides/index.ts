import { nl, NL_SHIPPING } from "./nl";
import { beNl, BE_NL_SHIPPING } from "./beNl";
import { beFr, BE_FR_SHIPPING } from "./beFr";
import { de, DE_SHIPPING } from "./de";
import { da, DA_SHIPPING } from "./da";
import { en, EN_NL_SHIPPING } from "./en";
import { sv, SV_SHIPPING } from "./sv";
import { fr, FR_SHIPPING } from "./fr";
import type { MarketGuideContent, ShipEvidence, CriterionKey } from "./types";

export type { MarketGuideContent, ShipEvidence, CriterionKey };

export type GuideId = "nl" | "beNl" | "beFr" | "fr" | "de" | "da" | "sv" | "en";

export const MARKET_GUIDES: Record<GuideId, { content: MarketGuideContent; shipping: Record<string, ShipEvidence> }> = {
  nl: { content: nl, shipping: NL_SHIPPING },
  beNl: { content: beNl, shipping: BE_NL_SHIPPING },
  beFr: { content: beFr, shipping: BE_FR_SHIPPING },
  de: { content: de, shipping: DE_SHIPPING },
  da: { content: da, shipping: DA_SHIPPING },
  sv: { content: sv, shipping: SV_SHIPPING },
  fr: { content: fr, shipping: FR_SHIPPING },
  // English mother copy, rendered as a noindex prototype on the Netherlands data.
  en: { content: en, shipping: EN_NL_SHIPPING },
};

export type GuideLink = { href: string; hub: string; indexLabel: string; indexBody: string; indexCta: string };

/** Where each language's guides are linked from (hub Index section, Index page).
 * A language lists the guides of the countries it serves. */
export const MARKET_GUIDE_LINKS: Record<string, GuideLink[]> = {
  nl: [
    { href: nl.slug, hub: "Koopgids: polyfenolrijke olijfolie in Nederland, met prijzen en verzendkosten →", indexLabel: "Polyfenolrijke olijfolie kopen in Nederland", indexBody: "Welke van deze oliën je in Nederland kunt kopen, met prijs, verzendkosten en levertijd per merk.", indexCta: "Naar de koopgids →" },
    { href: beNl.slug, hub: "Koopgids: polyfenolrijke olijfolie in België, met prijzen en verzendkosten →", indexLabel: "Polyfenolrijke olijfolie kopen in België", indexBody: "Welke van deze oliën je in België kunt kopen, met prijs, verzendkosten en levertijd per merk.", indexCta: "Naar de koopgids →" },
  ],
  fr: [
    { href: fr.slug, hub: "Guide d'achat : huile d'olive riche en polyphénols en France, avec prix et frais de port →", indexLabel: "Acheter de l'huile d'olive riche en polyphénols en France", indexBody: "Lesquelles de ces huiles vous pouvez acheter en France, avec prix, frais de port et délai par marque.", indexCta: "Vers le guide d'achat →" },
    { href: beFr.slug, hub: "Guide d'achat : huile d'olive riche en polyphénols en Belgique, avec prix et frais de port →", indexLabel: "Acheter de l'huile d'olive riche en polyphénols en Belgique", indexBody: "Lesquelles de ces huiles vous pouvez acheter en Belgique, avec prix, frais de port et délai par marque.", indexCta: "Vers le guide d'achat →" },
  ],
  de: [
    { href: de.slug, hub: "Kaufratgeber: polyphenolreiches Olivenöl in Deutschland, mit Preisen und Versandkosten →", indexLabel: "Polyphenolreiches Olivenöl kaufen in Deutschland", indexBody: "Welche dieser Öle du in Deutschland kaufen kannst, mit Preis, Versandkosten und Lieferzeit je Marke.", indexCta: "Zum Kaufratgeber →" },
  ],
  sv: [
    { href: sv.slug, hub: "Köpguide: polyfenolrik olivolja i Sverige, med priser och frakt →", indexLabel: "Köp polyfenolrik olivolja i Sverige", indexBody: "Vilka av dessa oljor du kan köpa i Sverige, med pris, frakt och leveranstid per märke.", indexCta: "Till köpguiden →" },
  ],
  da: [
    { href: da.slug, hub: "Købsguide: polyfenolrig olivenolie i Danmark, med priser og fragt →", indexLabel: "Køb polyfenolrig olivenolie i Danmark", indexBody: "Hvilke af disse olier du kan købe i Danmark, med pris, fragt og leveringstid pr. mærke.", indexCta: "Til købsguiden →" },
  ],
};
export const marketGuidesFor = (lang: string): GuideLink[] => MARKET_GUIDE_LINKS[lang] ?? [];
/** Back-compat: the first guide of a language, or null. */
export const marketGuideFor = (lang: string): GuideLink | null => marketGuidesFor(lang)[0] ?? null;
