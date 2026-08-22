// Country-based free shipping threshold tiers (mirrors Shopify zones, 2026-08).
// Free from 2 bottles for zones charging €7–15; from 3 for €20–25 zones; the
// FedEx band (€40 flat) has no free shipping at all.
const THRESHOLD_2: string[] = [
  "BE", "DE", "LU", "NL",
  "FR", "AT", "CZ", "DK", "HR", "ES", "FI", "BG", "EE", "SE", "PL", "HU", "SK", "SI",
];
const THRESHOLD_3: string[] = ["IT", "GR", "LT", "LV", "PT", "RO", "IE"];
const NO_FREE: string[] = ["MT", "NO", "LI", "CH"];

const SUPPORTED_COUNTRIES = [...THRESHOLD_2, ...THRESHOLD_3, ...NO_FREE];

// Fallback when geo is unknown (no middleware cookie AND ipapi lookup failed).
// Default to the core-market threshold (2) — Belgium/Germany/NL are the bulk of
// traffic — rather than over-stating the requirement at 3.
const DEFAULT_THRESHOLD = 2;

// Sentinel above any orderable quantity: "free shipping" UI never triggers.
// Exported so components can distinguish "free available at N bottles" from
// "no free shipping in this market" (FedEx band) instead of rendering an
// absurd "add 97 bottles" nudge.
export const NO_FREE_SHIPPING = 99;

export function getFreeShippingThreshold(countryCode: string | null): number {
  if (!countryCode) return DEFAULT_THRESHOLD;
  const code = countryCode.toUpperCase();
  if (THRESHOLD_2.includes(code)) return 2;
  if (THRESHOLD_3.includes(code)) return 3;
  if (NO_FREE.includes(code)) return NO_FREE_SHIPPING;
  return DEFAULT_THRESHOLD;
}

// Read the free-shipping bottle threshold from the middleware-set cookie.
// Client-only (returns null on the server and when the cookie is absent). The
// cookie digit is the threshold itself (2 or 3); see middleware.ts. Reading it
// in a useEffect — not a render-time useMemo — is what makes the value
// reliable: the cookie is guaranteed present after mount.
export function readShippingTierCookie(): number | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(/(?:^|;\s*)attimo_shipping_tier=(\d+)/);
  return m ? parseInt(m[1], 10) : null;
}

// True when this market offers free shipping at some reachable bottle count.
// Guards the "add N bottles for free shipping" nudge and the free-shipping
// badge, both of which are meaningless for the FedEx band (MT/NO/LI/CH).
export function freeShippingAvailable(threshold: number): boolean {
  return threshold > 0 && threshold < NO_FREE_SHIPPING;
}

export function isCountrySupported(countryCode: string | null): boolean | null {
  if (!countryCode) return null; // undetected — no opinion
  return SUPPORTED_COUNTRIES.includes(countryCode.toUpperCase());
}

export interface GeoResult {
  countryCode: string | null;
  countryName: string | null;
}

export async function detectCountry(): Promise<GeoResult> {
  try {
    const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(3000) });
    if (!res.ok) return { countryCode: null, countryName: null };
    const data = await res.json();
    return {
      countryCode: data.country_code ?? null,
      countryName: data.country_name ?? null,
    };
  } catch {
    return { countryCode: null, countryName: null };
  }
}

// Keep backward-compat alias
export async function detectCountryCode(): Promise<string | null> {
  const { countryCode } = await detectCountry();
  return countryCode;
}
