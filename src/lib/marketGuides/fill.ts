import { formatPrice, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";
import { tierForCountry, daysFor } from "@/lib/shippingZones";
import type { MarketGuideContent } from "./types";

const TO: Record<string, string> = { nl: "tot", de: "bis", fr: "à", da: "til", sv: "till", en: "to" };
const FREE_FROM: Record<string, string> = { nl: "gratis vanaf", de: "kostenlos ab", fr: "gratuit à partir de", da: "gratis fra", sv: "gratis från", en: "free from" };

/** ATTIMO's own shipping facts for a guide's market, and a token filler for its strings. */
export function guideShipping(c: MarketGuideContent, locale: Locale) {
  const t = getDict(locale);
  const tier = tierForCountry(c.country);
  // EUR markets print the tier's euro rate; DKK/SEK markets print the locale's fixed local rate.
  const standard = tier && locale.currency.code === "EUR" ? tier.shippingCost : formatPrice(locale.shipping.standard, locale);
  const freeFrom = tier?.freeFromN ? t.shippingPage.freeFromBottles.replace("{n}", String(tier.freeFromN)) : "";
  const dayRange = tier ? daysFor(c.country, tier) : null;
  const days = dayRange ? `${dayRange[0]}–${dayRange[1]} ${c.daysUnit}` : "";
  const daysText = dayRange ? `${dayRange[0]} ${TO[c.lang] ?? "to"} ${dayRange[1]} ${c.daysUnit}` : "";
  const freeFromWord = FREE_FROM[c.lang] ?? "free from";
  const fill = (s: string) =>
    s.split("{standard}").join(standard).split("{freeFrom}").join(freeFrom).split("{days}").join(days)
      .split("{daysText}").join(daysText).split("{market}").join(c.market).split("{updated}").join(c.updated);
  return { tier, standard, freeFrom, days, daysText, freeFromWord, fill };
}
