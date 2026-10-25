import { type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";
import { HARVEST_STATUS } from "@/lib/harvestStatus";
import { IT, ES } from "country-flag-icons/react/3x2";
import coratina from "@/assets/bottle-2627-coratina.png?url";
import peranzana from "@/assets/bottle-2627-peranzana.png?url";
// PLACEHOLDER: this render misspells the label ("Picual d'España" instead of
// "Picual de España"). Replace the file with the corrected render before this
// branch is merged. The file name carries the warning so it cannot slip by.
import picual from "@/assets/bottle-2627-picual-PLACEHOLDER-label-misspelt.png?url";

// Shared data for every look of the homepage next-harvest section: copy from
// the dictionary, production status and polyphenols from harvestStatus.ts.
// The looks differ in design only.
export type HarvestOil = {
  key: "coratina" | "peranzana" | "picual";
  name: string;
  image: string;
  tag: string;
  isNew: boolean;
  origin: string;
  Flag: typeof IT;
  flavour: string;
  polyphenols: number | null;
};

export function useHarvestSection(locale: Locale) {
  const dict = getDict(locale);
  const u = dict.upcoming;
  // Flavour descriptors come from the site-wide products.flavour strings,
  // already translated for every locale. Peranzana shares Nocellara's
  // descriptor ("Gentle & Fruity").
  const flavour = dict.products.flavour;
  const current = HARVEST_STATUS.currentStep;
  const updated = new Intl.DateTimeFormat(locale.lang === "en" ? "en-GB" : locale.hreflang, { day: "numeric", month: "long" }).format(new Date(HARVEST_STATUS.updated + "T12:00:00Z"));
  const note = u.note.replace("{date}", updated);
  const p = HARVEST_STATUS.polyphenols;
  const oils: HarvestOil[] = [
    { key: "coratina", name: "Coratina", image: coratina, tag: u.returning, isNew: false, origin: u.origins.coratina, Flag: IT, flavour: flavour.coratina, polyphenols: p.coratina },
    { key: "peranzana", name: "Peranzana", image: peranzana, tag: u.new, isNew: true, origin: u.origins.peranzana, Flag: IT, flavour: flavour.nocellara, polyphenols: p.peranzana },
    { key: "picual", name: "Picual", image: picual, tag: u.returning, isNew: false, origin: u.origins.picual, Flag: ES, flavour: flavour.picual, polyphenols: p.picual },
  ];
  return { u, oils, current, note, steps: u.steps };
}

export const FONTS = {
  UDC: "'UDC Working Man Sans', sans-serif",
  SG: "'Space Grotesk', sans-serif",
  BEVERLY: "'Beverly Drive', serif",
};
export const C = {
  CREAM: "#FFFAEA",
  GREEN: "#1B4229",
  DEEP: "#10221B",
  CHARTREUSE: "#CDDB2D",
  LIME: "#B3E58C",
};
