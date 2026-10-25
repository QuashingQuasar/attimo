// Where the 26/27 harvest stands. Edit this file when there is real news;
// the homepage "next harvest" section reads it. Step indexes refer to
// upcoming.steps in the translation dictionaries (0 = first step).
export const HARVEST_STATUS = {
  currentStep: 0,
  updated: "2026-10-23",
  // New-harvest lab values (mg/kg, oleocanthal + oleacein or total, as on the
  // certificate). null shows "awaiting lab results" on the card.
  polyphenols: { coratina: null, peranzana: null, picual: null } as Record<"coratina" | "peranzana" | "picual", number | null>,
};
