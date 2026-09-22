// Legal limits for the "extra virgin" category. Each value was read from the
// cited document on the date given — never typed from memory. If either source
// is revised, re-read it and update `verified` here.
//
// Both sources currently set identical limits for these five parameters, and
// both Chemiservice reports print the same figures against Reg. (EU)
// 2022/2104 Annex I.

export const LIMIT_SOURCES = {
  eu: {
    short: "Reg. (EU) 2022/2104",
    title:
      "Commission Delegated Regulation (EU) 2022/2104 of 29 July 2022, Annex I, Table A — extra virgin olive oil",
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022R2104",
    verified: "2026-09-21",
  },
  ioc: {
    short: "IOC COI/T.15/NC No. 3/Rev. 22",
    title:
      "International Olive Council, Trade Standard Applying to Olive Oils and Olive Pomace Oils, COI/T.15/NC No. 3/Rev. 22, June 2026, section 4 (Quality criteria)",
    url: "https://www.internationaloliveoil.org/wp-content/uploads/2026/09/TRADE-STANDARD-REV-22_EN.pdf",
    verified: "2026-09-21",
  },
} as const;

export type QualityKey =
  | "free_acidity"
  | "peroxide_value"
  | "k232"
  | "k268_or_k270"
  | "delta_k";

export interface EvooLimit {
  key: QualityKey;
  label: string;
  unit: string | null;
  /** Upper limit, inclusive ("≤"). */
  max: number;
  eu: { value: number; note: string };
  ioc: { value: number; note: string };
  /** Decimal places the regulation prints the limit with. */
  decimals: number;
}

export const EVOO_LIMITS: EvooLimit[] = [
  {
    key: "free_acidity",
    label: "Free acidity",
    unit: "% oleic acid",
    max: 0.8,
    eu: { value: 0.8, note: "≤ 0,80 — Annex I, Table A" },
    ioc: { value: 0.8, note: "≤ 0.80 — section 4.2, % m/m expressed in oleic acid" },
    decimals: 2,
  },
  {
    key: "peroxide_value",
    label: "Peroxide value",
    unit: "meq O₂/kg",
    max: 20,
    eu: { value: 20, note: "≤ 20,0 — Annex I, Table A" },
    ioc: { value: 20, note: "≤ 20.0 — section 4.3, milliequivalents of active oxygen per kilogram" },
    decimals: 1,
  },
  {
    key: "k232",
    label: "K232",
    unit: null,
    max: 2.5,
    eu: { value: 2.5, note: "≤ 2,50 — Annex I, Table A" },
    ioc: { value: 2.5, note: "≤ 2.50 — section 4.4, absorbency at 232 nm" },
    decimals: 2,
  },
  {
    key: "k268_or_k270",
    label: "K268 (iso-octane)",
    unit: null,
    max: 0.22,
    eu: { value: 0.22, note: "≤ 0,22 — Annex I, Table A (K268)" },
    ioc: { value: 0.22, note: "≤ 0.22 — section 4.4, 270 nm (cyclohexane) / 268 nm (iso-octane)" },
    decimals: 2,
  },
  {
    key: "delta_k",
    label: "ΔK",
    unit: null,
    max: 0.01,
    eu: { value: 0.01, note: "≤ 0,01 — Annex I, Table A" },
    ioc: { value: 0.01, note: "≤ 0.01 — section 4.4" },
    decimals: 2,
  },
];
