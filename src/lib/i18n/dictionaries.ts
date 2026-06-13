// Translation dictionary accessor.
//
// `Dict` is the shape of the English base (en.ts). Every locale resolves to
// one dictionary via `getDict(locale)`: French markets get fr.ts, everything
// else (default EUR, dk, se — all lang: "en") gets the English base. Because
// the resolver falls back to English for any non-"fr" lang, adding future
// English-currency markets needs no change here.
import type { Locale } from "./config";
import { en } from "./translations/en";
import { fr } from "./translations/fr";
import { de } from "./translations/de";

export type Dict = typeof en;

export function getDict(locale: Pick<Locale, "lang">): Dict {
  if (locale.lang === "fr") return fr;
  if (locale.lang === "de") return de;
  return en;
}
