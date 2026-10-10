// Copy for the certificate pages in six languages, plus the per-market
// paths. Certificate ids are shared across languages; only the index segment
// is translated.
import { en, type CertContent } from "./en";
import { de } from "./de";
import { fr } from "./fr";
import { sv } from "./sv";
import { da } from "./da";
import { nl } from "./nl";
export { en, type CertContent } from "./en";

export const CERT_CONTENT: Record<string, CertContent> = { en, de, fr, sv, da, nl };

export const CERT_SLUGS = {
  en: "/certificates",
  de: "/de/zertifikate",
  fr: "/fr/certificats",
  sv: "/se/certifikat",
  da: "/dk/certifikater",
  nl: "/nl/certificaten",
} as const;
export type CertLang = keyof typeof CERT_SLUGS;

export const certIndexHrefFor = (lang: string) => CERT_SLUGS[lang as CertLang] ?? CERT_SLUGS.en;
export const certHrefFor = (lang: string, id: string) => `${certIndexHrefFor(lang)}/${id}`;

const ORIGIN = "https://attimo-oil.com";
const LANGS: CertLang[] = ["en", "de", "fr", "sv", "da", "nl"];
export const certIndexHreflangs = () => [
  ...LANGS.map((l) => ({ hreflang: l, href: ORIGIN + CERT_SLUGS[l] })),
  { hreflang: "x-default", href: ORIGIN + CERT_SLUGS.en },
];
export const certHreflangs = (id: string) => [
  ...LANGS.map((l) => ({ hreflang: l, href: `${ORIGIN}${CERT_SLUGS[l]}/${id}` })),
  { hreflang: "x-default", href: `${ORIGIN}${CERT_SLUGS.en}/${id}` },
];

/** Fill {token} placeholders. */
export const fillT = (s: string, vars: Record<string, string | number | null | undefined>) =>
  Object.entries(vars).reduce((acc, [k, v]) => acc.split(`{${k}}`).join(v === null || v === undefined ? "" : String(v)), s);
