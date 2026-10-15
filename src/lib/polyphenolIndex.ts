// The Polyphenol Index: every producer that publishes polyphenol figures for
// its current oil, ranked by documented oleocanthal + oleacein. Entries live
// in src/content/polyphenol-index/*.yaml; ATTIMO's figures come from the
// certificates collection so the index can never disagree with the lab report.
import { getCollection, type CollectionEntry } from "astro:content";
import { getCertificates, certificatePath, SITE } from "./certificates";

export type IndexEntryData = CollectionEntry<"polyphenolIndex">["data"];

export interface IndexEntry extends IndexEntryData {
  /** oleocanthal + oleacein, null when either compound is unpublished. */
  compounds: number | null;
  ranked: boolean;
  /** 1-based rank within the ranked list, null for stated-total-only entries. */
  rank: number | null;
  /** Price per 500ml when the producer prints one, used for the table. */
  reportHref: string;
  /** Printed price converted to euros per 500 ml, null when no price or currency. */
  price_eur_500ml: number | null;
  /** Euros per 100 mg of oleocanthal + oleacein in the bottle, null when price or compounds are missing. */
  value_per_100mg: number | null;
}

/** ECB reference rates used for the value metric (euros per unit of currency). */
export const FX = { date: "2026-10-14", EUR: 1, USD: 1 / 1.1195, GBP: 1 / 0.84385 } as const;
/** Extra virgin olive oil weighs about 0.916 kg per litre. */
export const OIL_DENSITY = 0.916;
export function valueOf(d: { price_amount?: number | null; price_currency?: "EUR" | "USD" | "GBP" | null; price_ml?: number | null; compounds: number | null }) {
  if (d.price_amount === null || d.price_amount === undefined || !d.price_currency || !d.price_ml) return { price_eur_500ml: null, value_per_100mg: null };
  const eur = d.price_amount * FX[d.price_currency];
  const price_eur_500ml = Math.round((eur / d.price_ml) * 500 * 100) / 100;
  if (d.compounds === null) return { price_eur_500ml, value_per_100mg: null };
  const mgInBottle = d.compounds * (d.price_ml / 1000) * OIL_DENSITY;
  return { price_eur_500ml, value_per_100mg: Math.round((eur / mgInBottle) * 100 * 100) / 100 };
}

export const INDEX_PATH = "/polyphenol-index";
export const INDEX_JSON_PATH = "/polyphenol-index.json";
export const INDEX_VERIFIED = "September 2026";
/** The verification month in the page's language. */
export const verifiedFor = (lang: string) =>
  ({ en: "September 2026", de: "September 2026", fr: "septembre 2026", sv: "september 2026", da: "september 2026", nl: "september 2026" } as Record<string, string>)[lang] ?? INDEX_VERIFIED;
export const INDEX_EDITION = "2025/26 harvest";
export const INDEX_NEXT = "2026/27";
export const INDEX_UPDATE_NOTE = "Updated regularly as new results and harvests come in";

export const num = (n: number) =>
  n >= 1000 ? `${String(n).slice(0, -3)},${String(n).slice(-3)}` : String(n);

export async function getIndexEntries(): Promise<{ ranked: IndexEntry[]; unranked: IndexEntry[]; all: IndexEntry[] }> {
  const raw = await getCollection("polyphenolIndex");
  const certs = await getCertificates();

  const entries: Omit<IndexEntry, "rank">[] = raw.map(({ data }) => {
    let d: IndexEntryData = data;
    if (d.attimo_certificate) {
      const c = certs.find((x) => x.id === d.attimo_certificate);
      if (!c) throw new Error(`Index entry ${d.id} points at unknown certificate ${d.attimo_certificate}`);
      const n = (v: number | string | null) => (typeof v === "number" ? v : null);
      d = {
        ...d,
        method: c.method.name === "HPLC" ? "HPLC" : d.method,
        lab: [c.certificate.lab_name.replace(/ S\.r\.l\.$/, ""), c.certificate.iso_17025 ? "ISO/IEC 17025" : null].filter(Boolean).join(", "),
        total: c.phenolics.total,
        oleocanthal: n(c.phenolics.oleocanthal),
        oleacein: n(c.phenolics.oleacein),
        report: { ...d.report, url: certificatePath(c.id) },
      };
    }
    const compounds =
      d.oleocanthal !== null && d.oleacein !== null ? (d.compounds_printed ?? d.oleocanthal + d.oleacein) : null;
    return { ...d, compounds, ranked: compounds !== null, reportHref: d.report.url, ...valueOf({ ...d, compounds }) };
  });

  const ranked = entries
    .filter((e) => e.ranked)
    .sort((a, b) => (b.compounds ?? 0) - (a.compounds ?? 0))
    .map((e, i) => ({ ...e, rank: i + 1 }));
  const unranked = entries
    .filter((e) => !e.ranked)
    .sort((a, b) => (b.total ?? 0) - (a.total ?? 0))
    .map((e) => ({ ...e, rank: null }));
  return { ranked, unranked, all: [...ranked, ...unranked] };
}

export function toExport(e: IndexEntry) {
  return {
    rank: e.rank,
    brand: e.brand,
    oil: e.oil,
    variety: e.variety,
    origin: e.origin,
    harvest: e.harvest,
    method: e.method,
    lab: e.lab,
    total_mg_kg: e.total,
    total_secondary: e.total_secondary,
    oleocanthal_mg_kg: e.oleocanthal,
    oleacein_mg_kg: e.oleacein,
    oleocanthal_plus_oleacein_mg_kg: e.compounds,
    report: { status: e.report.status, url: e.report.url.startsWith("/") ? `${SITE}${e.report.url}` : e.report.url },
    source_url: e.source_url,
    price: e.price,
    price_eur_per_500ml: e.price_eur_500ml,
    eur_per_100mg_oleocanthal_oleacein: e.value_per_100mg,
    availability: e.availability,
    ships_to: e.regions,
    verified: e.verified,
  };
}
