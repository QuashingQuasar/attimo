import { next } from "@vercel/edge";
import { COUNTRY_TO_LOCALE, LOCALES } from "./src/lib/i18n/config.js";

export const config = {
  // Run on every page request. Skip Vercel internals, the static asset
  // folders we know about, and anything with a file extension (catches
  // .js / .css / .svg / .mp4 / etc. without listing each).
  matcher:
    "/((?!_astro|_vercel|api|fonts|images|videos|icons|lab|patterns|assets|lovable-uploads|favicon|robots\\.txt|sitemap\\.xml|placeholder\\.svg|navbar-logo\\.svg|klaro-config\\.js|values\\.pdf|.*\\.[^/]+$).*)",
};

const TIER_2 = new Set([
  "BE", "DE", "NL", "LU", "AT", "CZ", "DK", "FR",
  "BG", "HU", "PL", "SK", "SI", "HR", "SE",
]);

const TIER_3 = new Set([
  "EE", "IE", "IT", "LV", "LT", "ES", "FI", "GR", "PT", "RO", "MT",
]);

export default function middleware(request: Request) {
  const country = request.headers.get("x-vercel-ip-country") ?? "";
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Geo-redirect to a locale-prefixed URL on first visit. Only triggers for
  // pages that have locale variants (homepage, product pages, shipping) and
  // only when the visitor is not already on a /<locale>/ path. 302 (not 301)
  // so Google still indexes the default EUR pages.
  const firstSegment = pathname.split("/")[1];
  const isOnLocalePath = LOCALES.some((l) => l.slug && l.slug === firstSegment);
  if (!isOnLocalePath) {
    const shouldLocalize =
      pathname === "/" ||
      pathname.startsWith("/product/") ||
      pathname === "/shipping" ||
      pathname === "/quiz";
    if (shouldLocalize) {
      const matchedLocale = COUNTRY_TO_LOCALE[country];
      if (matchedLocale && matchedLocale.slug) {
        const newPath = `/${matchedLocale.slug}${pathname}`;
        return Response.redirect(new URL(newPath, url.origin), 302);
      }
    }
  }

  let tier = "";
  if (TIER_2.has(country)) tier = "2";
  else if (TIER_3.has(country)) tier = "3";

  // Cookie is readable by client JS (no HttpOnly) so the inline script
  // in BaseLayout can pick the right message. 1-day TTL is plenty —
  // Vercel re-runs middleware on every navigation, so it stays fresh.
  const cookie = tier
    ? `attimo_shipping_tier=${tier}; Path=/; Max-Age=86400; SameSite=Lax`
    : `attimo_shipping_tier=; Path=/; Max-Age=0; SameSite=Lax`;

  return next({
    headers: {
      "set-cookie": cookie,
      // Expose the country to debugging without revealing it server-side.
      "x-attimo-country": country || "unknown",
      // Vercel's static CDN auto-adds `content-disposition: inline; filename="<slug>"`
      // to HTML served at clean URLs (no .html extension). The filename hint is
      // non-standard for web pages and confuses Googlebot. Override with plain
      // `inline` to drop the filename — middleware-set headers win over origin.
      "content-disposition": "inline",
    },
  });
}
