// Market buying guides: one page per country, in that country's language.
// The table is built from the Polyphenol Index; the only data added here is
// whether each producer's own site states shipping to the market, with the
// sentence and URL it was read from. Nothing inferred.
export type ShipEvidence = {
  ships: "yes" | "no" | "not stated";
  basis: "lists country" | "EU-wide statement" | "worldwide statement" | "none";
  days: string; // printed delivery window, or "not stated"
  quote: string;
  source_url: string;
  checked: string; // YYYY-MM-DD
  notes?: string;
};

export type MarketGuideContent = {
  lang: string;
  slug: string;
  market: string; // country name in the page language
  meta: { title: string; description: string };
  nav: { criteria: string; table: string; attimo: string; faq: string };
  hero: { eyebrow: string; h1: string; lead: string; cta: string; ctaSecondary: string };
  criteria: { eyebrow: string; h2: string; intro: string; items: { title: string; text: string }[] };
  table: {
    eyebrow: string; h2: string; intro: string;
    cols: { brand: string; figure: string; method: string; ships: string; days: string; source: string };
    shipsYes: string; shipsNo: string; notStated: string; viaEu: string; viaWorld: string; attimoShips: string;
    footnote: string; indexLink: string;
  };
  attimo: { eyebrow: string; h2: string; intro: string; shippingLine: string };
  stockists: { eyebrow: string; h2: string; intro: string; items: { name: string; city: string; href?: string }[] } | null;
  faq: { heading: string; items: { question: string; answer: string }[] };
  closing: { h2: string; cta: string };
};
