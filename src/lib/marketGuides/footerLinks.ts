// Footer links to the buying guides: per language, the guides of the countries
// that language serves. Kept apart from the guide content so the footer, which
// loads on every page, does not carry the guides themselves. index.ts checks
// at build time that every href here is the slug of a real guide. Labels name
// the subject (the guide's indexLabel), never "Koopgids": that reads as buying ATTIMO.
export const GUIDE_FOOTER_LINKS: Record<string, { label: string; href: string }[]> = {
  en: [{ label: "Buying high-polyphenol olive oil in Europe", href: "/buy-high-polyphenol-olive-oil-europe" }],
  nl: [
    { label: "Polyfenolrijke olijfolie kopen in Nederland", href: "/nl/polyfenolrijke-olijfolie-kopen-nederland" },
    { label: "Polyfenolrijke olijfolie kopen in België", href: "/nl/polyfenolrijke-olijfolie-kopen-belgie" },
  ],
  fr: [
    { label: "Acheter de l'huile d'olive riche en polyphénols en France", href: "/fr/huile-olive-riche-polyphenols-acheter-france" },
    { label: "Acheter de l'huile d'olive riche en polyphénols en Belgique", href: "/fr/huile-olive-riche-polyphenols-acheter-belgique" },
  ],
  de: [{ label: "Polyphenolreiches Olivenöl kaufen in Deutschland", href: "/de/polyphenolreiches-olivenoel-kaufen-deutschland" }],
  sv: [{ label: "Köp polyfenolrik olivolja i Sverige", href: "/se/kop-polyfenolrik-olivolja-i-sverige" }],
  da: [{ label: "Køb polyfenolrig olivenolie i Danmark", href: "/dk/polyfenolrig-olivenolie-koeb-i-danmark" }],
};

export const guideFooterLinksFor = (lang: string) => GUIDE_FOOTER_LINKS[lang] ?? [];
