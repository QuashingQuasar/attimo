// Footer links to the buying guides: per language, the guides of the countries
// that language serves. Kept apart from the guide content so the footer, which
// loads on every page, does not carry the guides themselves. index.ts checks
// at build time that every href here is the slug of a real guide.
export const GUIDE_FOOTER_LINKS: Record<string, { label: string; href: string }[]> = {
  en: [{ label: "Buying Guide Europe", href: "/buy-high-polyphenol-olive-oil-europe" }],
  nl: [
    { label: "Koopgids Nederland", href: "/nl/polyfenolrijke-olijfolie-kopen-nederland" },
    { label: "Koopgids België", href: "/nl/polyfenolrijke-olijfolie-kopen-belgie" },
  ],
  fr: [
    { label: "Guide d'achat France", href: "/fr/huile-olive-riche-polyphenols-acheter-france" },
    { label: "Guide d'achat Belgique", href: "/fr/huile-olive-riche-polyphenols-acheter-belgique" },
  ],
  de: [{ label: "Kaufratgeber Deutschland", href: "/de/polyphenolreiches-olivenoel-kaufen-deutschland" }],
  sv: [{ label: "Köpguide Sverige", href: "/se/kop-polyfenolrik-olivolja-i-sverige" }],
  da: [{ label: "Købsguide Danmark", href: "/dk/polyfenolrig-olivenolie-koeb-i-danmark" }],
};

export const guideFooterLinksFor = (lang: string) => GUIDE_FOOTER_LINKS[lang] ?? [];
