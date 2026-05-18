# Attimo Internationalization Spec v2

## Goal

Serve localized pricing (and later, language) to visitors on attimo-oil.com using locale-prefixed URLs. This ensures Google Merchant Center sees the correct local currency per market, improves conversion for non-EUR shoppers, and creates a scalable foundation for adding more markets and languages over time.

## Architecture Overview

```
Danish visitor hits attimo-oil.com
  → Middleware detects DK via x-vercel-ip-country
  → Redirects to /dk/ (pricing pages only)
  → All pages under /dk/ show DKK prices
  → JSON-LD structured data outputs DKK
  → GMC Denmark feed links to /dk/product/coratina
  → Google crawls from Danish IP, sees DKK, matches feed ✓

Belgian visitor hits attimo-oil.com
  → No redirect (default locale)
  → All pages show EUR prices
  → GMC default feed links to /product/coratina
```

## Current Site Structure

Actual pages on attimo-oil.com as of May 2026:

### Pages WITH prices → GET locale variants

| Page | Prices shown | Locale variant |
|---|---|---|
| `/` | €24 on product cards | `/dk/` |
| `/product/coratina` | €24 product price | `/dk/product/coratina` |
| `/product/nocellara` | €24 product price | `/dk/product/nocellara` |
| `/product/picual` | €24 product price | `/dk/product/picual` |
| `/shipping` | Shipping rates in EUR | `/dk/shipping` |

### Pages WITHOUT prices → NO locale variants

| Page | Reason |
|---|---|
| `/blog` | Content only, no prices |
| `/blog/*` (individual posts) | Content only, no prices |
| `/quiz` | Product finder — check if prices shown; if yes, add variant |
| `/privacy` | Legal, no prices |
| `/terms` | Legal, no prices |
| `/contact` | No prices |

There is NO `/about` page on the current site.

## URL Structure

```
Default (EUR):
  attimo-oil.com/
  attimo-oil.com/product/coratina
  attimo-oil.com/product/nocellara
  attimo-oil.com/product/picual
  attimo-oil.com/shipping
  attimo-oil.com/blog
  attimo-oil.com/blog/...
  attimo-oil.com/quiz
  attimo-oil.com/privacy
  attimo-oil.com/terms
  attimo-oil.com/contact

Denmark (DKK):
  attimo-oil.com/dk/
  attimo-oil.com/dk/product/coratina
  attimo-oil.com/dk/product/nocellara
  attimo-oil.com/dk/product/picual
  attimo-oil.com/dk/shipping

Sweden (SEK) — when ready:
  attimo-oil.com/se/
  attimo-oil.com/se/product/coratina
  attimo-oil.com/se/product/nocellara
  attimo-oil.com/se/product/picual
  attimo-oil.com/se/shipping
```

## Locale Config

Single source of truth for all market data. Adding a new market = adding one entry to this file.

```typescript
// src/lib/i18n/config.ts

export type Locale = {
  slug: string;           // URL prefix: "dk", "se", "no"
  country: string;        // ISO country code: "DK", "SE", "NO"
  countryName: string;    // Display name: "Danmark", "Sverige"
  currency: {
    code: string;         // "DKK", "SEK", "NOK"
    symbol: string;       // "kr"
    symbolPosition: "before" | "after";
    decimals: number;     // 0 for Nordic currencies, 2 for EUR
  };
  prices: {               // Fixed prices matching Shopify Markets exactly
    coratina: number;
    nocellara: number;
    picual: number;
  };
  shipping: {
    standard: number;     // Standard shipping cost in local currency
    freeThreshold: number; // Free shipping above this amount
  };
  flag: string;           // Emoji flag for selector: "🇩🇰"
  // Future: language code, translations file path, etc.
};

export const DEFAULT_LOCALE: Locale = {
  slug: "",
  country: "BE",
  countryName: "Europe",
  currency: {
    code: "EUR",
    symbol: "€",
    symbolPosition: "before",
    decimals: 2,
  },
  prices: {
    coratina: 24,
    nocellara: 24,
    picual: 24,
  },
  shipping: {
    standard: 5.95,
    freeThreshold: 50,
  },
  flag: "🇪🇺",
};

export const LOCALES: Locale[] = [
  DEFAULT_LOCALE,
  {
    slug: "dk",
    country: "DK",
    countryName: "Danmark",
    currency: {
      code: "DKK",
      symbol: "kr",
      symbolPosition: "after",
      decimals: 0,
    },
    prices: {
      coratina: 183,
      nocellara: 183,
      picual: 183,
    },
    shipping: {
      standard: 45,
      freeThreshold: 380,
    },
    flag: "🇩🇰",
  },
  // To add Sweden later:
  // {
  //   slug: "se",
  //   country: "SE",
  //   countryName: "Sverige",
  //   currency: { code: "SEK", symbol: "kr", symbolPosition: "after", decimals: 0 },
  //   prices: { coratina: 260, nocellara: 260, picual: 260 },
  //   shipping: { standard: 65, freeThreshold: 520 },
  //   flag: "🇸🇪",
  // },
];

// Lookup helpers
export const COUNTRY_TO_LOCALE = Object.fromEntries(
  LOCALES.map(l => [l.country, l])
);

export const SLUG_TO_LOCALE = Object.fromEntries(
  LOCALES.map(l => [l.slug, l])
);
```

### Adding a new currency market later

1. Add an entry to `LOCALES` in config.ts
2. Set fixed prices in Shopify Markets for that country
3. Update GMC supplemental feed with local URLs and prices
4. Deploy — Astro generates all pages automatically

### Adding a new language later (e.g., Dutch, German)

1. Add a `language` field to the Locale type
2. Create a translations file (e.g., `src/lib/i18n/translations/nl.ts`)
3. Extend locale variants to ALL pages (including blog, content) since text actually differs
4. Update hreflang tags from `en-DK` to `da-DK` etc.

The route structure, components, and plumbing stay the same.

## Astro Route Structure

Only pricing pages get locale variants.

```
src/pages/
  index.astro                        ← default EUR homepage
  shipping.astro                     ← default EUR shipping page
  quiz.astro                         ← no locale variant (unless it shows prices)
  privacy.astro                      ← no locale variant
  terms.astro                        ← no locale variant
  contact.astro                      ← no locale variant
  blog/
    [...slug].astro                  ← no locale variant
  product/
    [slug].astro                     ← default EUR product pages
  [locale]/
    index.astro                      ← localized homepages (dk/, se/, etc.)
    shipping.astro                   ← localized shipping page
    product/
      [slug].astro                   ← localized product pages
```

In `getStaticPaths()` for localized pages, generate paths only for non-default locales:

```typescript
// src/pages/[locale]/product/[slug].astro
export function getStaticPaths() {
  const products = ["coratina", "nocellara", "picual"];
  const nonDefaultLocales = LOCALES.filter(l => l.slug !== "");
  const paths = [];

  for (const locale of nonDefaultLocales) {
    for (const product of products) {
      paths.push({
        params: {
          locale: locale.slug,
          slug: product,
        },
        props: { locale, product },
      });
    }
  }

  return paths;
}
```

The default EUR product pages at `/product/[slug].astro` use `DEFAULT_LOCALE` directly.

## Three Components

### 1. Middleware — Geo-Redirect for First Visits

Only redirects on pricing pages (homepage, product pages, shipping). All other pages never redirect.

```typescript
// src/middleware.ts
import { defineMiddleware } from "astro:middleware";
import { COUNTRY_TO_LOCALE, LOCALES } from "./lib/i18n/config";

export const onRequest = defineMiddleware(async ({ request, url }, next) => {
  const pathname = url.pathname;

  // Don't redirect if already on a locale path
  const firstSegment = pathname.split("/")[1];
  const isOnLocalePath = LOCALES.some(l => l.slug && l.slug === firstSegment);
  if (isOnLocalePath) return next();

  // Only redirect for pages that have locale variants
  const shouldLocalize =
    pathname === "/" ||
    pathname.startsWith("/product/") ||
    pathname === "/shipping";
  if (!shouldLocalize) return next();

  // Detect country and redirect if we have a locale for it
  const country = request.headers.get("x-vercel-ip-country") || "";
  const matchedLocale = COUNTRY_TO_LOCALE[country];

  if (matchedLocale && matchedLocale.slug) {
    const newPath = `/${matchedLocale.slug}${pathname}`;
    return Response.redirect(new URL(newPath, url.origin), 302);
  }

  return next();
});
```

**Note:** Use 302 (temporary) redirect, not 301. This ensures Google still indexes the default EUR pages.

**Local development:** `x-vercel-ip-country` won't exist locally. Defaults to no redirect (EUR). Add `?country=DK` query param override for testing if needed.

### 2. Price Display Component

```astro
---
// src/components/Price.astro
interface Props {
  amount: number;
  locale: Locale;
}

const { amount, locale } = Astro.props;
const { symbol, symbolPosition, decimals } = locale.currency;
const formatted = amount.toFixed(decimals);
---

{symbolPosition === "before"
  ? `${symbol}${formatted}`
  : `${formatted} ${symbol}`}
```

Usage in product pages and homepage product cards:

```astro
<Price amount={locale.prices.coratina} locale={locale} />
<!-- Danish visitor sees: "183 kr" -->
<!-- Belgian visitor sees: "€24.00" -->
```

### 3. Currency/Country Selector

A small dropdown in the site header, shown on ALL pages. Clicking navigates to the locale-prefixed equivalent for pages that have one, or stays on the current page for non-localized pages.

```
[🇩🇰 DKK ▾]
  🇪🇺 EUR
  🇩🇰 DKK
  🇸🇪 SEK  (when added)
```

Behavior:
- On `/dk/product/coratina` → click 🇪🇺 → navigates to `/product/coratina`
- On `/product/coratina` → click 🇩🇰 → navigates to `/dk/product/coratina`
- On `/blog/some-post` → click 🇩🇰 → stays on `/blog/some-post` (no locale variant)
- On `/dk/` (homepage) → click 🇪🇺 → navigates to `/`

No cookies, no JS state. The URL IS the state for localized pages.

## Internal Links

Navigation links on locale pages must stay within the locale where one exists:
- On `/dk/`: logo links to `/dk/`, product links go to `/dk/product/...`, shipping links to `/dk/shipping`
- On `/dk/`: blog link goes to `/blog` (no locale version), same for privacy, terms, contact, quiz
- On default pages: everything links to default URLs as normal

The navigation component should accept the current locale and prefix internal links accordingly, falling back to default URLs for non-localized pages.

## hreflang Tags

Only pages with locale variants get hreflang tags.

```html
<!-- On /product/coratina AND /dk/product/coratina -->
<link rel="alternate" hreflang="en" href="https://attimo-oil.com/product/coratina" />
<link rel="alternate" hreflang="en-DK" href="https://attimo-oil.com/dk/product/coratina" />
<link rel="alternate" hreflang="x-default" href="https://attimo-oil.com/product/coratina" />

<!-- On / AND /dk/ -->
<link rel="alternate" hreflang="en" href="https://attimo-oil.com/" />
<link rel="alternate" hreflang="en-DK" href="https://attimo-oil.com/dk/" />
<link rel="alternate" hreflang="x-default" href="https://attimo-oil.com/" />
```

Blog, privacy, terms, contact, quiz pages: NO hreflang tags (single version only).

## JSON-LD Structured Data

Each localized product page outputs structured data with the correct local currency. Server-rendered in the HTML (not injected via JS).

```json
// On /dk/product/coratina
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Coratina Organic Extra Virgin Olive Oil – High Polyphenol 847mg/kg Monocultivar 500ml",
  "brand": { "@type": "Brand", "name": "Attimo" },
  "offers": {
    "@type": "Offer",
    "price": "183",
    "priceCurrency": "DKK",
    "availability": "https://schema.org/InStock",
    "url": "https://attimo-oil.com/dk/product/coratina",
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "DK"
      },
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "45",
        "currency": "DKK"
      }
    }
  }
}
```

## GMC Feed Alignment

### Supplemental Google Sheet for Denmark

| id | link | price | shipping |
|---|---|---|---|
| shopify_ZZ_155427... | https://attimo-oil.com/dk/product/nocellara | 183 DKK | DK::Standard:45 DKK |
| shopify_ZZ_155943... | https://attimo-oil.com/dk/product/picual | 183 DKK | DK::Standard:45 DKK |
| shopify_ZZ_155942... | https://attimo-oil.com/dk/product/coratina | 183 DKK | DK::Standard:45 DKK |

### Default feed (EUR markets)

Keep link as `https://attimo-oil.com/product/...` with EUR prices. No changes needed.

## Sitemap

The dynamic sitemap (Supabase edge function) should include locale variants for pricing pages only, with hreflang annotations.

```xml
<!-- Product pages get hreflang -->
<url>
  <loc>https://attimo-oil.com/product/coratina</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://attimo-oil.com/product/coratina"/>
  <xhtml:link rel="alternate" hreflang="en-DK" href="https://attimo-oil.com/dk/product/coratina"/>
  <xhtml:link rel="alternate" hreflang="x-default" href="https://attimo-oil.com/product/coratina"/>
</url>
<url>
  <loc>https://attimo-oil.com/dk/product/coratina</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://attimo-oil.com/product/coratina"/>
  <xhtml:link rel="alternate" hreflang="en-DK" href="https://attimo-oil.com/dk/product/coratina"/>
  <xhtml:link rel="alternate" hreflang="x-default" href="https://attimo-oil.com/product/coratina"/>
</url>

<!-- Homepage gets hreflang -->
<url>
  <loc>https://attimo-oil.com/</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://attimo-oil.com/"/>
  <xhtml:link rel="alternate" hreflang="en-DK" href="https://attimo-oil.com/dk/"/>
  <xhtml:link rel="alternate" hreflang="x-default" href="https://attimo-oil.com/"/>
</url>

<!-- Blog, privacy, terms, contact, quiz: single URL, no hreflang -->
<url>
  <loc>https://attimo-oil.com/blog/bryan-johnson-olive-oil</loc>
</url>
```

## Checkout Handoff

When a Danish visitor on `/dk/product/coratina` clicks "Buy" / "Add to Cart", they go to Shopify checkout at `shop.attimo-oil.com`. If Shopify Markets has Denmark set to DKK with fixed pricing, the checkout will show DKK too — maintaining currency consistency from ad → landing page → checkout.

Verify this works by testing the Shopify checkout with a Danish IP or market parameters.

## Verification Checklist

Before switching GMC feeds to local currencies:

- [ ] Deploy locale routes to production
- [ ] Verify `/dk/` homepage shows `183 kr` on product cards
- [ ] Verify `/dk/product/coratina` shows `183 kr` visually
- [ ] Verify `/dk/product/coratina` JSON-LD shows `"price": "183", "priceCurrency": "DKK"`
- [ ] Verify `/dk/shipping` shows shipping costs in DKK
- [ ] Verify `/product/coratina` still shows `€24,00` and EUR JSON-LD
- [ ] Verify hreflang tags present on homepage and product page variants
- [ ] Verify hreflang tags NOT present on blog, privacy, terms, contact pages
- [ ] Verify currency selector navigates correctly between locales
- [ ] Verify internal links on `/dk/` pages stay within `/dk/` for localized pages
- [ ] Verify internal links on `/dk/` pages link to default URLs for non-localized pages (blog, contact, etc.)
- [ ] Verify geo-redirect only triggers on homepage, product pages, and shipping — not blog or other pages
- [ ] Run Google Rich Results Test on `/dk/product/coratina` — confirm DKK structured data
- [ ] Set fixed prices in Shopify Markets for Denmark (183 DKK per product)
- [ ] Update GMC supplemental feed: link → `/dk/` URLs, price → DKK, shipping → DKK
- [ ] Update GMC shipping settings for Denmark to DKK
- [ ] Update sitemap with locale variants and hreflang for pricing pages only
- [ ] Submit updated sitemap in Search Console
- [ ] Monitor GMC diagnostics for 48-72 hours

## Files to Create/Modify

| File | Action | Purpose |
|---|---|---|
| `src/lib/i18n/config.ts` | Create | Locale config, prices, helpers |
| `src/middleware.ts` | Create/modify | Geo-redirect (homepage, products, shipping only) |
| `src/env.d.ts` | Modify | Type definitions for locals |
| `src/components/Price.astro` | Create | Formatted price display |
| `src/components/CurrencySelector.astro` | Create | Header currency/country picker |
| `src/components/HreflangTags.astro` | Create | Generates hreflang link tags (pricing pages only) |
| `src/layouts/Layout.astro` | Modify | Add selector + conditional hreflang |
| `src/pages/[locale]/index.astro` | Create | Localized homepage |
| `src/pages/[locale]/shipping.astro` | Create | Localized shipping page |
| `src/pages/[locale]/product/[slug].astro` | Create | Localized product pages |
| `src/pages/product/[slug].astro` | Modify | Use DEFAULT_LOCALE, add hreflang |
| `src/pages/index.astro` | Modify | Use DEFAULT_LOCALE, add hreflang |
| `src/pages/shipping.astro` | Modify | Use DEFAULT_LOCALE, add hreflang |
| Sitemap edge function | Modify | Add locale URLs + hreflang for pricing pages |

Pages with NO changes: blog, privacy, terms, contact, quiz (unless quiz shows prices).
