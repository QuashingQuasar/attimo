import { next } from "@vercel/edge";
import { COUNTRY_TO_LOCALE, LOCALES } from "./src/lib/i18n/config.js";
import {
  CLICK_COOKIE,
  CLICK_WINDOW_SECONDS,
  adConsent,
  clickFromParams,
  parseClick,
  readCookie,
  serializeClick,
} from "./src/lib/adClick.js";

export const config = {
  // Run on every page request. Skip Vercel internals, the static asset
  // folders we know about, and anything with a file extension (catches
  // .js / .css / .svg / .mp4 / etc. without listing each).
  matcher:
    "/((?!_astro|_vercel|api|fonts|images|videos|icons|lab|patterns|assets|lovable-uploads|favicon|robots\\.txt|sitemap\\.xml|placeholder\\.svg|navbar-logo\\.svg|klaro-config\\.js|values\\.pdf|.*\\.[^/]+$).*)",
};

// Cookie digit doubles as the free-shipping bottle threshold (parsed by
// ProductPage/CartDrawer). Countries in the FedEx band (MT/NO/LI/CH) have no
// free shipping — they get no cookie, which also keeps the announce bar hidden.
const TIER_2 = new Set([
  "BE", "DE", "NL", "LU", "FR", "AT", "CZ", "DK",
  "HR", "ES", "FI", "BG", "EE", "SE", "PL", "HU", "SK", "SI",
]);

const TIER_3 = new Set([
  "IT", "GR", "LT", "LV", "PT", "RO", "IE", "CY",
]);

// FedEx band (MT/NO/LI/CH): €40 flat, no free shipping at any quantity. Given an
// explicit "99" cookie so the front-end reliably suppresses the free-shipping
// nudge/badge without depending on client-side geo detection. 99 = the
// NO_FREE_SHIPPING sentinel in src/lib/shipping.ts.
const TIER_NONE = new Set(["MT", "NO", "LI", "CH"]);

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
        // Keep the query string: it carries the ad click ID (gclid) and UTMs.
        const newPath = `/${matchedLocale.slug}${pathname}${url.search}`;
        return Response.redirect(new URL(newPath, url.origin), 302);
      }
    }
  }

  let tier = "";
  if (TIER_2.has(country)) tier = "2";
  else if (TIER_3.has(country)) tier = "3";
  else if (TIER_NONE.has(country)) tier = "99";

  // Cookie is readable by client JS (no HttpOnly) so the inline script
  // in BaseLayout can pick the right message. 1-day TTL is plenty —
  // Vercel re-runs middleware on every navigation, so it stays fresh.
  const cookie = tier
    ? `attimo_shipping_tier=${tier}; Path=/; Max-Age=86400; SameSite=Lax`
    : `attimo_shipping_tier=; Path=/; Max-Age=0; SameSite=Lax`;

  const headers = new Headers();
  headers.append("set-cookie", cookie);
  const clickCookie = adClickCookie(request, url);
  if (clickCookie) headers.append("set-cookie", clickCookie);

  // Expose the country to debugging without revealing it server-side.
  headers.set("x-attimo-country", country || "unknown");
  // Vercel's static CDN auto-adds `content-disposition: inline; filename="<slug>"`
  // to HTML served at clean URLs (no .html extension). The filename hint is
  // non-standard for web pages and confuses Googlebot. Override with plain
  // `inline` to drop the filename — middleware-set headers win over origin.
  headers.set("content-disposition", "inline");

  return next({ headers });
}

// Ad click cookie (see src/lib/adClick.ts), only with marketing consent.
// Set from the server so Safari keeps it for the full 90 days: a cookie
// written by page JavaScript after an ad click lasts about a day there.
// The Klaro accept handler writes it from JS first; this re-issues it.
function adClickCookie(request: Request, url: URL): string | null {
  const cookies = request.headers.get("cookie");
  const consent = adConsent(cookies);
  const existing = readCookie(cookies, CLICK_COOKIE);
  const clear = `${CLICK_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax; Secure`;
  if (consent === false) return existing ? clear : null;
  if (consent !== true) return null;

  const now = Math.floor(Date.now() / 1000);
  const click = clickFromParams(url.searchParams, now) ?? parseClick(existing);
  if (!click) return existing ? clear : null;
  const maxAge = click.ts + CLICK_WINDOW_SECONDS - now;
  if (maxAge <= 0) return clear;
  return `${CLICK_COOKIE}=${serializeClick(click)}; Path=/; Max-Age=${maxAge}; SameSite=Lax; Secure`;
}
