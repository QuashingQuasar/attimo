// Google Ads click attribution for the purchase upload.
//
// The ad click ID (gclid, or gbraid/wbraid on iOS) is lost when the customer
// moves from attimo-oil.com to the Shopify checkout. So we keep it ourselves:
// a first-party cookie, set only with marketing consent (Klaro), copied onto
// the Shopify cart as hidden attributes at checkout. A Shopify Flow then writes
// each order that carries one to the Google Ads upload sheet.
//
// Cookie value: encodeURIComponent("<key>|<id>|<unix seconds of the click>").

export const CLICK_KEYS = ['gclid', 'gbraid', 'wbraid'] as const;
export type ClickKey = (typeof CLICK_KEYS)[number];

export const CLICK_COOKIE = 'attimo_click';
// Before consent the click waits in sessionStorage under this key.
export const CLICK_PENDING = 'attimo_click_pending';
// Google accepts click conversions up to 90 days after the click.
export const CLICK_WINDOW_SECONDS = 90 * 86400;

// Klaro's service name in public/klaro-config.js.
const KLARO_COOKIE = 'klaro';
const KLARO_SERVICE = 'google-tag-manager';

export interface AdClick {
  key: ClickKey;
  id: string;
  ts: number;
}

export function readCookie(header: string | null | undefined, name: string): string | null {
  if (!header) return null;
  for (const part of header.split(';')) {
    const i = part.indexOf('=');
    if (i > -1 && part.slice(0, i).trim() === name) return part.slice(i + 1).trim();
  }
  return null;
}

export function parseClick(raw: string | null): AdClick | null {
  if (!raw) return null;
  try {
    const [key, id, ts] = decodeURIComponent(raw).split('|');
    if (!(CLICK_KEYS as readonly string[]).includes(key) || !id || !/^\d+$/.test(ts)) return null;
    return { key: key as ClickKey, id, ts: Number(ts) };
  } catch {
    return null;
  }
}

export function serializeClick(click: AdClick): string {
  return encodeURIComponent(`${click.key}|${click.id}|${click.ts}`);
}

export function clickFromParams(params: URLSearchParams, now: number): AdClick | null {
  for (const key of CLICK_KEYS) {
    const id = params.get(key);
    if (id && /^[\w.-]{8,512}$/.test(id)) return { key, id, ts: now };
  }
  return null;
}

// true = accepted, false = declined, null = no choice made yet.
export function adConsent(cookieHeader: string | null | undefined): boolean | null {
  const raw = readCookie(cookieHeader, KLARO_COOKIE);
  if (!raw) return null;
  try {
    const value = JSON.parse(decodeURIComponent(raw))[KLARO_SERVICE];
    return typeof value === 'boolean' ? value : null;
  } catch {
    return null;
  }
}

/**
 * Hidden cart attributes for the order (underscore keys aren't shown to the
 * customer at checkout). `_ads_consent` always goes along so the upload only
 * sends orders whose customer allowed it; the click ID only exists with consent.
 */
export function clickAttributes(): { key: string; value: string }[] {
  if (typeof document === 'undefined') return [];
  const consent = adConsent(document.cookie);
  const attrs = [{ key: '_ads_consent', value: consent ? 'granted' : 'denied' }];
  const click = consent ? parseClick(readCookie(document.cookie, CLICK_COOKIE)) : null;
  if (click && Date.now() / 1000 - click.ts < CLICK_WINDOW_SECONDS) {
    attrs.push({ key: `_${click.key}`, value: click.id });
    attrs.push({ key: '_click_time', value: new Date(click.ts * 1000).toISOString() });
  }
  return attrs;
}
