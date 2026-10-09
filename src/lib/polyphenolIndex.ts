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
}

export const INDEX_PATH = "/polyphenol-index";
export const INDEX_JSON_PATH = "/polyphenol-index.json";
export const INDEX_VERIFIED = "September 2026";
export const INDEX_EDITION = "2026/27";

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
    return { ...d, compounds, ranked: compounds !== null, reportHref: d.report.url };
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
    availability: e.availability,
    verified: e.verified,
  };
}
