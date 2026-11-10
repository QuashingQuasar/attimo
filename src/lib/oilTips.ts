// Explanations shown on hover (or tap) next to the figures on oil cards and in
// the buying-guide table. English first; other languages are added once the
// English is approved. A language without an entry shows no info buttons.

export type OilTips = {
  label: string; // accessible name of the info button, "{x}" = what it explains
  total: string;
  compounds: string;
  value: string;
  score: string; // "{breakdown}" = the oil's points per check
  scoreLine: string; // one check in the breakdown: "{name}: {got} of {max}"
  checks: { report: string; delivery: string; method: string; origin: string };
  method: Record<string, string>;
};

export const OIL_TIPS: Record<string, OilTips> = {
  en: {
    label: "What is {x}?",
    total:
      "All the polyphenols the lab counted, in milligrams per kilo of oil. Each test method counts a different set of compounds, so a total only compares with totals from the same method.",
    compounds:
      "Oleocanthal and oleacein added together: the two best-studied polyphenols in olive oil. Oleocanthal causes the peppery catch in your throat. Labs measure both the same way, so this figure compares across test methods.",
    value:
      "The price of the bottle divided by the milligrams of oleocanthal and oleacein in it. The lower the figure, the more of the two compounds you get for your money.",
    score:
      "Out of 10, from four checks on what the producer publishes: {breakdown}. The section 'What to check' explains each one.",
    scoreLine: "{name} {got} of {max}",
    checks: { report: "lab report", delivery: "delivery", method: "test method", origin: "harvest date and variety" },
    method: {
      HPLC: "HPLC separates the oil and measures each compound one by one. It reads lower totals than NMR on the same oil.",
      COI: "The International Olive Council's method, a form of HPLC used by accredited food labs. It reads low totals by design.",
      NMR: "NMR counts a long list of phenolic compounds at once, heavy ones included. It reads higher totals than HPLC on the same oil.",
      "LC-MS/MS": "Mass spectrometry: it identifies and measures each compound separately, like HPLC.",
      "Folin-Ciocalteu": "A colour test that estimates all phenolic compounds together. It names no single compound, so it gives no oleocanthal or oleacein figure.",
      "not stated": "The producer doesn't say how the figure was measured.",
    },
  },
};

export const tipsFor = (lang: string): OilTips | null => OIL_TIPS[lang] ?? null;
