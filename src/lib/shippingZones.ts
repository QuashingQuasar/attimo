// Shipping zones: one source for the shipping page, the per-country list and
// the structured data. Countries are keyed by the dictionary's country labels.
import { formatPrice, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";

export type TierKey = "core" | "tier1" | "tier2" | "tier3" | "tier4" | "tier5";

export interface Tier {
  key: TierKey;
  countries: string[];
  shippingCost: string;
  costEur: number;
  freeFromN: number;
  /** Business days, min and max. */
  days: [number, number];
  highlight?: boolean;
}

/** Per-country delivery days where they differ from the tier (Gilles's own
 * shipping record: parcels to the Netherlands arrive in 1 to 2 days). */
export const DAYS_BY_COUNTRY: Record<string, [number, number]> = { Netherlands: [1, 2] };
export const daysFor = (country: string, tier: Tier): [number, number] => DAYS_BY_COUNTRY[country] ?? tier.days;

export const TIERS: Tier[] = [
  { key: "core", countries: ["Belgium"], shippingCost: "€7", costEur: 7, freeFromN: 2, days: [2, 3], highlight: true },
  { key: "tier1", countries: ["Germany", "Luxembourg", "Netherlands"], shippingCost: "€10", costEur: 10, freeFromN: 2, days: [3, 5] },
  { key: "tier2", countries: ["Austria", "Bulgaria", "Croatia", "Czechia", "Denmark", "Estonia", "Finland", "France", "Hungary", "Poland", "Slovakia", "Slovenia", "Spain", "Sweden"], shippingCost: "€15", costEur: 15, freeFromN: 2, days: [4, 6] },
  { key: "tier3", countries: ["Greece", "Italy", "Latvia", "Lithuania", "UnitedKingdom"], shippingCost: "€20", costEur: 20, freeFromN: 3, days: [5, 8] },
  { key: "tier4", countries: ["Cyprus", "Ireland", "Portugal", "Romania"], shippingCost: "€25", costEur: 25, freeFromN: 3, days: [6, 8] },
  { key: "tier5", countries: ["Liechtenstein", "Malta", "Norway", "Switzerland"], shippingCost: "€40", costEur: 40, freeFromN: 0, days: [5, 8] },
];

export const ISO: Record<string, string> = {
  Belgium: "BE", Germany: "DE", Luxembourg: "LU", Netherlands: "NL", Austria: "AT", Bulgaria: "BG", Croatia: "HR", Czechia: "CZ",
  Denmark: "DK", Estonia: "EE", Finland: "FI", France: "FR", Hungary: "HU", Poland: "PL", Slovakia: "SK", Slovenia: "SI", Spain: "ES",
  Sweden: "SE", UnitedKingdom: "GB", Greece: "GR", Italy: "IT", Latvia: "LV", Lithuania: "LT", Cyprus: "CY", Ireland: "IE", Portugal: "PT",
  Romania: "RO", Liechtenstein: "LI", Malta: "MT", Norway: "NO", Switzerland: "CH",
};

/** The tier the localized shipping page describes. */
const LOCAL_TIER: Record<string, TierKey> = { de: "tier1", fr: "tier2", nl: "tier1", dk: "tier2", se: "tier2" };
export const localTier = (locale: Locale): Tier | null =>
  locale.slug ? TIERS.find((t) => t.key === LOCAL_TIER[locale.slug]) ?? null : null;

/** Swap the tier's day numbers in a localized delivery string for a country override. */
const withDays = (s: string, from: [number, number], to: [number, number]) =>
  from[0] === to[0] && from[1] === to[1] ? s : s.replace(String(from[0]), String(to[0])).replace(String(from[1]), String(to[1]));

/** Every country with its rate, threshold and delivery window, sorted by the locale's label. */
export function countryRows(locale: Locale) {
  const t = getDict(locale).shippingPage;
  const labels = t.countries as Record<string, string>;
  return TIERS.flatMap((tier) =>
    tier.countries.map((c) => ({
      key: c,
      iso: ISO[c],
      label: labels[c] ?? c,
      rate: tier.shippingCost,
      freeFrom: tier.freeFromN ? t.freeFromBottles.replace("{n}", String(tier.freeFromN)) : "—",
      delivery: withDays(t.delivery[tier.key], tier.days, daysFor(c, tier)),
    })),
  ).sort((a, b) => a.label.localeCompare(b.label, locale.lang));
}

/** FAQ with the locale's own rate, threshold and delivery filled in. */
export function shippingFaq(locale: Locale) {
  const t = getDict(locale).shippingPage;
  const tier = localTier(locale);
  const fill = (s: string) =>
    s
      .replace("{standard}", formatPrice(locale.shipping.standard, locale))
      .replace("{free}", formatPrice(locale.shipping.freeThreshold, locale))
      .replace("{delivery}", tier ? t.delivery[tier.key] : "");
  return t.faq.map((f) => ({ q: fill(f.q), a: fill(f.a) }));
}

export function shippingJsonLd(locale: Locale) {
  const faq = shippingFaq(locale);
  const tiers = locale.slug ? [localTier(locale)].filter((x): x is Tier => !!x) : TIERS;
  const offers = tiers.map((tier) => ({
    "@context": "https://schema.org",
    "@type": "OfferShippingDetails",
    shippingRate: { "@type": "MonetaryAmount", value: tier.costEur, currency: "EUR" },
    shippingDestination: tier.countries.map((c) => ({ "@type": "DefinedRegion", addressCountry: ISO[c] })),
    deliveryTime: {
      "@type": "ShippingDeliveryTime",
      handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 1, unitCode: "DAY" },
      transitTime: { "@type": "QuantitativeValue", minValue: tier.days[0], maxValue: tier.days[1], unitCode: "DAY" },
    },
  }));
  return [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    ...offers,
  ];
}
