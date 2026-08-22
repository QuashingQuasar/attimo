export type Locale = {
  slug: string;
  country: string;
  countryName: string;
  // Content language for this market. Drives which translation dictionary is
  // served (see src/lib/i18n/translations) and the <html lang> attribute.
  // The default (EUR) market stays "en"; France "fr", Germany "de", Sweden
  // "sv", Denmark "da".
  lang: "en" | "fr" | "de" | "sv" | "da" | "nl";
  // BCP-47 value emitted in the hreflang alternate link. Single source of
  // truth so getHreflangs stays a pure lookup. English-currency variants use
  // "en" / "en-DK" / "en-SE"; the French-language market uses "fr".
  hreflang: string;
  // Shopify Storefront @inContext language code (LanguageCode enum). Most
  // markets present English; France presents French. Country comes from
  // `country` above.
  shopifyLanguage: "EN" | "FR" | "DE" | "SV" | "DA";
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
    // 3L bag-in-box (separate Shopify product referenced from the Coratina
    // PDP). Optional so nothing outside the Coratina page depends on it;
    // populated for every locale below. EUR markets share €89; DK/SE mirror
    // the fixed Shopify Markets price-list overrides (700 DKK / 1000 SEK).
    coratina3L?: number;
  };
  shipping: {
    standard: number;
    freeThreshold: number;
  };
  flag: string;
  // ISO-style code for the flat SVG flag shown in the locale selector
  // (country-flag-icons). The default market shows the EU flag, not Belgium's,
  // so this is tracked separately from `country`.
  flagCode: "EU" | "DK" | "SE" | "FR" | "DE" | "NL";
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
    coratina3L: 89,
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
    // Germany — a LANGUAGE market mirroring France. Germany uses EUR, so
    // currency/prices/shipping are IDENTICAL to DEFAULT_LOCALE; only the
    // content language (German) differs. hreflang "de" (language-targeted),
    // Shopify @inContext + checkout buyer country is DE/EUR.
    slug: "de",
    country: "DE",
    countryName: "Deutschland",
    lang: "de",
    hreflang: "de",
    shopifyLanguage: "DE",
    // Shares EUR with the default + French markets — show a country code so
    // the three EUR entries stay distinguishable in the switcher.
    selectorLabel: "DEU",
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
      coratina3L: 89,
    },
    shipping: {
      standard: 5.95,
      freeThreshold: 50,
    },
    flag: "🇩🇪",
    flagCode: "DE",
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
    // EUR entries are distinguishable in the switcher.
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
      coratina3L: 89,
    },
    shipping: {
      standard: 5.95,
      freeThreshold: 50,
    },
    flag: "🇫🇷",
    flagCode: "FR",
  },
  {
    slug: "nl",
    country: "NL",
    countryName: "Nederland",
    lang: "nl",
    hreflang: "nl",
    // Shopify has no published Dutch storefront language yet — present English
    // at checkout (same pattern SE/DK used pre-Phase-2). Flip to "NL" once the
    // language is published in Shopify Markets.
    shopifyLanguage: "EN",
    // Same currency (EUR) as the default market — country code keeps the EUR
    // entries distinguishable in the switcher (same reasoning as FRA).
    selectorLabel: "NLD",
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
      coratina3L: 89,
    },
    shipping: {
      standard: 5.95,
      freeThreshold: 50,
    },
    flag: "🇳🇱",
    flagCode: "NL",
  },
  {
    // Denmark — a LANGUAGE market (Danish), like Sweden, with its own currency
    // (DKK). lang "da" serves da.ts; hreflang "da" (language-targeted); Shopify
    // @inContext presents DA. Requires "Danish" published in Shopify for DA
    // checkout.
    slug: "dk",
    country: "DK",
    countryName: "Danmark",
    lang: "da",
    hreflang: "da",
    shopifyLanguage: "DA",
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
      // Fixed Shopify Markets override on the Denmark price list (700 DKK).
      coratina3L: 700,
    },
    shipping: {
      standard: 90,
      freeThreshold: 366,
    },
    flag: "🇩🇰",
    flagCode: "DK",
  },
  {
    // Sweden — a LANGUAGE market (Swedish), like France/Germany, but with its
    // own currency (SEK). lang "sv" serves sv.ts; hreflang "sv" is
    // language-targeted (all Swedish speakers); Shopify @inContext presents SV.
    // Requires "Swedish" to be a published language in Shopify for SV checkout.
    slug: "se",
    country: "SE",
    countryName: "Sverige",
    lang: "sv",
    hreflang: "sv",
    shopifyLanguage: "SV",
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
      // Fixed Shopify Markets override on the Sweden price list (1000 SEK).
      coratina3L: 1000,
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
    normalized === "/blog" ||
    normalized.startsWith("/product/") ||
    normalized === "/shipping" ||
    normalized === "/quiz"
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
  // Blog: the index swaps prefix cleanly; post slugs differ per language and
  // can't be mapped from the path alone, so posts fall back to the target
  // locale's blog index. (The selector upgrades a post to its exact translation
  // via the page's <link rel="alternate" hreflang> tags when present.)
  if (unprefixed === "/blog" || unprefixed.startsWith("/blog/")) {
    return targetLocale.slug ? `/${targetLocale.slug}/blog` : "/blog";
  }
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
