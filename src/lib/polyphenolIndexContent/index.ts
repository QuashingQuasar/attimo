// Copy for /polyphenol-index and its five localised variants. Same shape as
// the hub and methods content: one record per locale, a translated slug per
// market, an hreflang cluster emitted from every variant. Numbers, brand
// names, oil names, lab names, method names and citations are never
// translated; they are the same facts in every market. Strings with {n},
// {c}, {rank}, {method}, {verified}, {edition}, {next}, {v}, {m} are filled at
// render time.
import { de } from "./de";
import { fr } from "./fr";
import { sv } from "./sv";
import { da } from "./da";
import { nl } from "./nl";

import { en, type IndexContent } from "./en";
export { en, type IndexContent } from "./en";

/** Back-compat: the EN FAQ, used by the page's JSON-LD. */
export const faqItems = en.faq.items;

export const INDEX_CONTENT: Record<string, IndexContent> = { en, de, fr, sv, da, nl };

export const INDEX_SLUGS = {
  en: "/polyphenol-index",
  de: "/de/olivenoel-polyphenol-index",
  fr: "/fr/index-polyphenols-huile-olive",
  sv: "/se/olivolja-polyfenolindex",
  da: "/dk/olivenolie-polyfenolindeks",
  nl: "/nl/olijfolie-polyfenolindex",
} as const;

const ORIGIN = "https://attimo-oil.com";
export const INDEX_HREFLANGS = [
  { hreflang: "en", href: ORIGIN + INDEX_SLUGS.en },
  { hreflang: "de", href: ORIGIN + INDEX_SLUGS.de },
  { hreflang: "fr", href: ORIGIN + INDEX_SLUGS.fr },
  { hreflang: "sv", href: ORIGIN + INDEX_SLUGS.sv },
  { hreflang: "da", href: ORIGIN + INDEX_SLUGS.da },
  { hreflang: "nl", href: ORIGIN + INDEX_SLUGS.nl },
  { hreflang: "x-default", href: ORIGIN + INDEX_SLUGS.en },
];

export const indexHrefFor = (lang: string) => INDEX_SLUGS[lang as keyof typeof INDEX_SLUGS] ?? INDEX_SLUGS.en;
