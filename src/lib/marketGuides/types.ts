// Market buying guides: one page per country, in that country's language.
// Rows come from the Polyphenol Index. The only data added per market is
// how a buyer there can get each oil, read from the producer's own pages
// (or a named retailer's), with the sentence and URL it came from.
export type ShipEvidence = {
  ships: "yes" | "no" | "not stated";
  basis: "lists country" | "EU-wide statement" | "worldwide statement" | "none";
  /** How a buyer in this market gets it. "none" rows are left off the page. */
  route?: "webshop" | "retailer" | "distributor" | "request" | "none";
  seller?: string;
  days: string; // printed delivery window, or "not stated"
  cost?: string; // shipping cost to this market as printed, or "not stated"
  free_from?: string; // free-shipping threshold as printed
  quote: string;
  source_url: string;
  checked: string; // YYYY-MM-DD
  notes?: string; // one-liner in the page language, shown under the buy cell
};

export type CriterionKey = "report" | "method" | "origin" | "delivery";

export type MarketGuideContent = {
  lang: string;
  slug: string;
  market: string;
  /** Country key as used in shippingZones TIERS, e.g. "Netherlands". */
  country: string;
  /** Plural unit after a day range, e.g. "werkdagen". */
  daysUnit: string;
  /** Other guides a reader of this page may want (neighbouring market or the same market in another language). */
  siblings?: { href: string; label: string }[];
  /** hreflang cluster when the same market exists in two languages. */
  hreflangs?: { hreflang: string; href: string }[];
  updated: string; // human-readable date in the page language
  meta: { title: string; description: string };
  nav: { glance: string; criteria: string; table: string; oils: string; number: string; faq: string };
  hero: { eyebrow: string; h1: string; lead: string; cta: string; ctaSecondary: string; updatedLabel: string; checkedLine: string };
  glance: {
    eyebrow: string; h2: string; introPre: string; introLink: string; introPost: string;
    labels: { attimoName: string; attimoSub: string; price: string; priceNote: string; method: string; methodLink: string; compounds: string; total: string; buy: string; cost: string; days: string; source: string; notStated: string; attimoAlso: string };
  };
  criteria: {
    eyebrow: string; h2: string; intro: string;
    items: { key: CriterionKey; title: string; text: string; weight: number; icon: string }[];
  };
  table: {
    eyebrow: string; h2: string; intro: string;
    cols: { oil: string; compounds: string; total: string; method: string; price: string; buy: string; days: string; score: string };
    buy: { webshop: string; webshopEu: string; webshopWorld: string; retailer: string; distributor: string; request: string };
    footnote: string;
    links: { index: { title: string; text: string }; methods: { title: string; text: string } };
  };
  oils: {
    eyebrow: string; h2: string; intro: string;
    labels: { score: string; pros: string; cons: string; forWho: string; standsOut: string; buy: string; price: string; source: string; priceOnSite: string };
    pros: { report: string; hplc: string; method: string; origin: string; shipsNl: string; shipsEu: string };
    cons: { nmr: string; shipping: string; shippingFree: string; noReport: string; noMethod: string; totalOnly: string; noDays: string; nlNotNamed: string; noOrigin: string };
    perOil: Record<string, { forWho?: string; standsOut?: string; cons?: string[] }>;
  };
  number: { eyebrow: string; h2: string; intro: string; steps: { title: string; text: string }[]; cta: string };
  avoid: { eyebrow: string; h2: string; items: { title: string; text: string }[] };
  attimo: { eyebrow: string; h2: string; intro: string };
  faq: { heading: string; items: { question: string; answer: string }[] };
  verdict: { eyebrow: string; h2: string; body: string; cta: string };
};
