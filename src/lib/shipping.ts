// Country-based free shipping threshold tiers
const TIER_2: string[] = ["BE", "DE", "LU", "NL"];
const TIER_3: string[] = [
  "AT", "BG", "HR", "CZ", "DK", "EE", "FR", "HU", "IE", "IT",
  "LV", "LI", "LT", "MT", "PL", "SK", "SI", "ES", "SE",
];
const TIER_4: string[] = ["FI", "GR", "PT", "RO"];

const DEFAULT_THRESHOLD = 3;

export function getFreeShippingThreshold(countryCode: string | null): number {
  if (!countryCode) return DEFAULT_THRESHOLD;
  const code = countryCode.toUpperCase();
  if (TIER_2.includes(code)) return 2;
  if (TIER_3.includes(code)) return 3;
  if (TIER_4.includes(code)) return 4;
  return DEFAULT_THRESHOLD;
}

export async function detectCountryCode(): Promise<string | null> {
  try {
    const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(3000) });
    if (!res.ok) return null;
    const data = await res.json();
    return data.country_code ?? null;
  } catch {
    return null;
  }
}
