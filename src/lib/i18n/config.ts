export type Locale = {
  slug: string;
  country: string;
  countryName: string;
  // Content language for this market. Drives which translation dictionary is
  // served (see src/lib/i18n/translations) and the <html lang> attribute.
  // Existing currency-only markets (default, dk, se) stay "en"; France is "fr".
  lang: "en" | "fr";
  // BCP-47 value emitted in the hreflang alternate link. Single source of
  // truth so getHreflangs stays a pure lookup. English-currency variants use
  // "en" / "en-DK" / "en-SE"; the French-language market uses "fr".
  hreflang: string;
  // Shopify Storefront @inContext language code (LanguageCode enum). Most
  // markets present English; France presents French. Country comes from
  // `country` above.
  shopifyLanguage: "EN" | "FR";
  // Label shown in the footer locale switcher next to the flag. Defaults to
  // the currency code (EUR/DKK/SEK). France shares EUR with the default market,
  // so it overrides this to a country code ("FRA") to stay distinguishable.
  selectorLabel?: string;
  currency: {
    code: string;
    symbol: string;
    symbolPosition: "before" | "after";
    decimals: number;
  };
  prices: {
    coratina: number;
    nocellara: number;
    picual: number;
  };
  shipping: {
    standard: number;
    freeThreshold: number;
  };
  flag: string;
  // ISO-style code for the flat SVG flag shown in the locale selector
  // (country-flag-icons). The default market shows the EU flag, not Belgium's,
  // so this is tracked separately from `country`.
  flagCode: "EU" | "DK" | "SE" | "FR";
};

export const DEFAULT_LOCALE: Locale = {
  slug: "",
  country: "BE",
  countryName: "Europe",
  lang: "en",
  hreflang: "en",
  shopifyLanguage: "EN",
  currency: {
    code: "EUR",
    symbol: "€",
    symbolPosition: "before",
    decimals: 0,
  },
  prices: {
    coratina: 24,
    nocellara: 23,
    picual: 22,
  },
  shipping: {
    standard: 5.95,
    freeThreshold: 50,
  },
  flag: "🇪🇺",
  flagCode: "EU",
};

export const LOCALES: Locale[] = [
  DEFAULT_LOCALE,
  {
    slug: "dk",
    country: "DK",
    countryName: "Danmark",
    lang: "en",
    hreflang: "en-DK",
    shopifyLanguage: "EN",
    currency: {
      code: "DKK",
      symbol: "kr",
      symbolPosition: "after",
      decimals: 0,
    },
    prices: {
      coratina: 190,
      nocellara: 180,
      picual: 170,
    },
    shipping: {
      standard: 90,
      freeThreshold: 366,
    },
    flag: "🇩🇰",
    flagCode: "DK",
  },
  {
    slug: "se",
    country: "SE",
    countryName: "Sverige",
    lang: "en",
    hreflang: "en-SE",
    shopifyLanguage: "EN",
    currency: {
      code: "SEK",
      symbol: "kr",
      symbolPosition: "after",
      decimals: 0,
    },
    prices: {
      coratina: 270,
      nocellara: 260,
      picual: 250,
    },
    // Shipping numbers approximate the DK pattern (Postnord-tier rates,
    // free-from at ≈€50 equivalent). Adjust once you have firm SEK quotes
    // from your carrier.
    shipping: {
      standard: 99,
      freeThreshold: 550,
    },
    flag: "🇸🇪",
    flagCode: "SE",
  },
  {
    // France — the first LANGUAGE market (not a currency market). France uses
    // EUR, so currency/prices/shipping are IDENTICAL to DEFAULT_LOCALE; the
    // only thing that differs is the content language (French). hreflang is
    // "fr" (language-targeted, serves all French speakers) while Shopify
    // @inContext + checkout buyer country is FR/EUR.
    slug: "fr",
    country: "FR",
    countryName: "France",
    lang: "fr",
    hreflang: "fr",
    shopifyLanguage: "FR",
    // Same currency (EUR) as the default market — show the country code so the
    // two EUR entries are distinguishable in the switcher.
    selectorLabel: "FRA",
    currency: {
      code: "EUR",
      symbol: "€",
      symbolPosition: "before",
      decimals: 0,
    },
    prices: {
      coratina: 24,
      nocellara: 23,
      picual: 22,
    },
    shipping: {
      standard: 5.95,
      freeThreshold: 50,
    },
    flag: "🇫🇷",
    flagCode: "FR",
  },
];

export const COUNTRY_TO_LOCALE: Record<string, Locale> = Object.fromEntries(
  LOCALES.map((l) => [l.country, l])
);

export const SLUG_TO_LOCALE: Record<string, Locale> = Object.fromEntries(
  LOCALES.map((l) => [l.slug, l])
);

// Shopify Storefront localization context for a locale. Returns a context
// ONLY for language markets (France); the English-currency markets (default,
// dk, se) return undefined so their Shopify calls and checkout stay exactly
// as before (no @inContext, no buyerIdentity). Future language markets get
// their context automatically via `lang !== "en"`.
export function shopifyContextForLocale(
  locale: Locale,
): { country: string; language: string } | undefined {
  if (locale.lang === "en") return undefined;
  return { country: locale.country, language: locale.shopifyLanguage };
}

export function formatPrice(
  amount: number,
  locale: Locale,
  decimalsOverride?: number,
): string {
  const { symbol, symbolPosition, decimals: defaultDecimals } = locale.currency;
  const decimals = decimalsOverride ?? defaultDecimals;
  const formatted = amount.toFixed(decimals);
  return symbolPosition === "before"
    ? `${symbol}${formatted}`
    : `${formatted} ${symbol}`;
}

const SITE_ORIGIN = "https://attimo-oil.com";

// Pages that have locale variants. Compared against the path *without* a
// locale prefix (e.g. "/", "/product/coratina", "/shipping"). Tolerates the
// trailing slash Astro emits in canonical URLs.
export function pathHasLocaleVariants(unprefixedPath: string): boolean {
  const normalized =
    unprefixedPath.length > 1 && unprefixedPath.endsWith("/")
      ? unprefixedPath.slice(0, -1)
      : unprefixedPath;
  return (
    normalized === "/" ||
    normalized.startsWith("/product/") ||
    normalized === "/shipping"
  );
}

// Prefix a path with the locale slug if the locale has one AND the path is
// one that has locale variants. Otherwise return the path unchanged. Use for
// internal navigation: keep visitors inside their locale on pricing pages,
// but link to the canonical default URL for blog/contact/legal pages.
export function localizeHref(path: string, locale: Locale): string {
  if (!locale.slug) return path;
  if (!pathHasLocaleVariants(path)) return path;
  if (path === "/") return `/${locale.slug}/`;
  return `/${locale.slug}${path}`;
}

// Given the current full URL path and a target locale, return the path the
// selector should navigate to. On localizable pages (homepage, products,
// shipping) it swaps the locale prefix; on blog/legal/contact it returns the
// current path unchanged so the visitor stays on the page they're reading.
export function getLocaleSwitchHref(currentPath: string, targetLocale: Locale): string {
  const segments = currentPath.split("/");
  const firstSeg = segments[1] || "";
  const onLocalePath = LOCALES.some((l) => l.slug && l.slug === firstSeg);
  let unprefixed = onLocalePath ? "/" + segments.slice(2).join("/") : currentPath;
  if (unprefixed === "") unprefixed = "/";
  if (!pathHasLocaleVariants(unprefixed)) return currentPath;
  if (!targetLocale.slug) return unprefixed;
  return unprefixed === "/" ? `/${targetLocale.slug}/` : `/${targetLocale.slug}${unprefixed}`;
}

export type HreflangEntry = { hreflang: string; href: string };

// Generate hreflang entries for a given unprefixed path (e.g. "/product/coratina").
// Output covers every locale plus an x-default that points at the default
// locale's URL. Only call this for pages that have locale variants.
export function getHreflangs(unprefixedPath: string): HreflangEntry[] {
  const entries: HreflangEntry[] = LOCALES.map((locale) => {
    const href = locale.slug === ""
      ? `${SITE_ORIGIN}${unprefixedPath}`
      : `${SITE_ORIGIN}/${locale.slug}${unprefixedPath === "/" ? "/" : unprefixedPath}`;
    return { hreflang: locale.hreflang, href };
  });
  entries.push({ hreflang: "x-default", href: `${SITE_ORIGIN}${unprefixedPath}` });
  return entries;
}
