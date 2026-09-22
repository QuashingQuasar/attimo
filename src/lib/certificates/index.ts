// Single source of truth for every lab value published on the site. Reads the
// `certificates` content collection, derives the few fields the spec allows
// to be computed, and hands typed records to the certificate pages, the JSON
// exports and the methods page. No page may carry a lab number of its own.
import { getCollection, type CollectionEntry } from "astro:content";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import { EVOO_LIMITS, type QualityKey } from "./evooLimits";

export type CertificateData = CollectionEntry<"certificates">["data"];
export type Oil = CertificateData["oil"];

export interface Certificate extends CertificateData {
  // Derived at build, never typed in.
  oleocanthal_plus_oleacein: number | null;
  pdf_sha256: string;
  efsa_claim_eligible: boolean | null;
  series: string[];
}

// Whether the producer / commissioning party renders on the page. The field
// is always stored; this is the open decision from the spec (§9).
export const RENDER_PRODUCER = false;

// Reg. (EU) 432/2012: ≥ 5 mg of hydroxytyrosol and its derivatives per 20 g of
// oil, i.e. ≥ 250 mg/kg. Only ever compared with the certificate's own
// "hydroxytyrosol and derivatives" figure, never with a total.
export const EFSA_THRESHOLD_MG_KG = 250;

export const OIL_ORDER: Oil[] = ["coratina", "nocellara", "picual"];
export const OIL_NAMES: Record<Oil, string> = {
  coratina: "Coratina",
  nocellara: "Nocellara",
  picual: "Picual",
};

export const SITE = "https://attimo-oil.com";
export const certificatesIndexPath = "/certificates";
export const certificatePath = (id: string) => `/certificates/${id}`;
export const certificateJsonPath = (id: string) => `/certificates/${id}.json`;

const asNumber = (v: number | string | null | undefined): number | null =>
  typeof v === "number" ? v : null;

const sha256 = (publicPath: string) =>
  createHash("sha256")
    .update(readFileSync(path.join(process.cwd(), "public", publicPath)))
    .digest("hex");

/** The date that orders a certificate within its series. */
export const certificateDate = (c: CertificateData) =>
  c.certificate.sample_date ?? c.certificate.sample_received_date ?? c.certificate.report_date;

let cache: Certificate[] | null = null;

export async function getCertificates(): Promise<Certificate[]> {
  if (cache) return cache;
  const entries = await getCollection("certificates");
  for (const e of entries) {
    if (e.data.id !== e.id) {
      throw new Error(`Certificate id "${e.data.id}" must match its filename "${e.id}"`);
    }
    if (JSON.stringify(e.data).includes("TKTK")) {
      throw new Error(`Certificate "${e.id}" still contains TKTK placeholders — fill them or unpublish it`);
    }
  }
  const raw = entries.map((e) => e.data);
  const derived: Certificate[] = raw.map((d) => {
    const o = asNumber(d.phenolics.oleocanthal);
    const a = asNumber(d.phenolics.oleacein);
    const htd = d.phenolics.hydroxytyrosol_and_derivatives;
    return {
      ...d,
      oleocanthal_plus_oleacein: o !== null && a !== null ? o + a : null,
      pdf_sha256: sha256(d.certificate.pdf),
      efsa_claim_eligible: htd === null ? null : htd >= EFSA_THRESHOLD_MG_KG,
      series: raw
        .filter((x) => x.oil === d.oil && x.harvest === d.harvest)
        .sort((x, y) => certificateDate(x).localeCompare(certificateDate(y)))
        .map((x) => x.id),
    };
  });
  derived.sort((x, y) => {
    const oil = OIL_ORDER.indexOf(x.oil) - OIL_ORDER.indexOf(y.oil);
    if (oil !== 0) return oil;
    if (x.harvest !== y.harvest) return y.harvest.localeCompare(x.harvest);
    return certificateDate(y).localeCompare(certificateDate(x));
  });
  cache = derived;
  return derived;
}

/** The most recent certificate per oil. */
export async function getCertificateMap(): Promise<Partial<Record<Oil, Certificate>>> {
  const map: Partial<Record<Oil, Certificate>> = {};
  for (const c of await getCertificates()) if (!map[c.oil]) map[c.oil] = c;
  return map;
}

export const oilTitle = (c: CertificateData) => `ATTIMO ${OIL_NAMES[c.oil]} ${c.harvest}`;

export const formatDate = (iso: string | null | undefined) =>
  iso
    ? new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      })
    : null;

export const formatValue = (v: number | string | null | undefined) =>
  v === null || v === undefined ? "—" : typeof v === "number" ? String(v) : v;

/** Lab name for headings: legal suffix and group parenthetical dropped. */
export const labShort = (c: CertificateData) =>
  c.certificate.lab_name.replace(/\s*\(.*\)\s*$/, "").replace(/\s+S\.?\s?(r\.?\s?l|l\.?\s?u)\.?$/i, "");

/** The lab line: "Chemiservice S.r.l., Monopoli, Italy". */
export const labLine = (c: CertificateData) =>
  [c.certificate.lab_name, c.certificate.lab_city, c.certificate.lab_country]
    .filter(Boolean)
    .join(", ");

/**
 * One plain sentence, generated from the data, that a search snippet or an AI
 * assistant can quote. Every clause whose value is null is dropped.
 */
export function summarySentence(c: Certificate): string {
  const p = c.phenolics;
  const when = c.certificate.sample_date
    ? `on a sample drawn on ${formatDate(c.certificate.sample_date)}`
    : c.certificate.sample_received_date
      ? `on a sample received on ${formatDate(c.certificate.sample_received_date)}`
      : `and reported on ${formatDate(c.certificate.report_date)}`;
  const head = `${oilTitle(c)} was tested by ${c.method.name} at ${labLine(c)} ${when}`;
  if (p.total === null) return `${head}.`;
  const basis = p.total_expressed_as ? `, ${p.total_expressed_as} equivalents` : "";
  const u = p.total_uncertainty !== null ? ` ±${p.total_uncertainty}` : "";
  const parts: string[] = [];
  const o = asNumber(p.oleocanthal);
  const a = asNumber(p.oleacein);
  if (o !== null) parts.push(`${o} mg/kg oleocanthal`);
  if (a !== null) parts.push(`${a} mg/kg oleacein`);
  const tail = parts.length ? `, including ${parts.join(" and ")}` : "";
  return `${head}: ${p.total}${u} ${p.unit} total phenols${basis}${tail}.`;
}

/** Quality results laid against the verified extra-virgin limits. */
export function qualityRows(c: CertificateData) {
  const q = c.quality;
  if (!q) return [];
  return EVOO_LIMITS.flatMap((lim) => {
    const m = q[lim.key as QualityKey];
    if (!m) return [];
    // ΔK is read as an absolute value (the report's own note 11C says so).
    const compared = lim.key === "delta_k" ? Math.abs(m.value) : m.value;
    const label =
      lim.key === "k268_or_k270" && q.k_wavelength ? `${q.k_wavelength} (iso-octane)` : lim.label;
    return [{ ...lim, label, value: m.value, uncertainty: m.uncertainty, within: compared <= lim.max }];
  });
}

/** The §3 record with derived fields in their places — what the register ingests. */
export function toExport(c: Certificate) {
  const { oleocanthal_plus_oleacein, pdf_sha256, efsa_claim_eligible, series, ...data } = c;
  return {
    schema_version: 1,
    url: `${SITE}${certificatePath(c.id)}`,
    ...data,
    certificate: { ...data.certificate, pdf: `${SITE}${data.certificate.pdf}`, pdf_sha256 },
    phenolics: { ...data.phenolics, oleocanthal_plus_oleacein },
    efsa_claim_eligible,
    series,
  };
}

/**
 * Replaces `{{oil.field}}` tokens in a content record with live certificate
 * values, so prose on the methods page quotes the collection instead of
 * carrying numbers of its own. Fields: total, total_u, report, oleocanthal,
 * oleacein, sum.
 */
export function fillMethodsContent<T>(content: T, map: Partial<Record<Oil, Certificate>>): T {
  const lookup = (oil: string, field: string): string => {
    const c = map[oil as Oil];
    if (!c) throw new Error(`No certificate for "${oil}" while filling methods content`);
    const v: Record<string, unknown> = {
      total: c.phenolics.total,
      total_u: c.phenolics.total_uncertainty,
      report: c.certificate.report_number,
      oleocanthal: c.phenolics.oleocanthal,
      oleacein: c.phenolics.oleacein,
      sum: c.oleocanthal_plus_oleacein,
    };
    if (!(field in v) || v[field] === null) throw new Error(`Unknown or null token {{${oil}.${field}}}`);
    return String(v[field]);
  };
  const walk = (node: unknown): unknown => {
    if (typeof node === "string") return node.replace(/\{\{(\w+)\.(\w+)\}\}/g, (_, o, f) => lookup(o, f));
    if (Array.isArray(node)) return node.map(walk);
    if (node && typeof node === "object") {
      return Object.fromEntries(Object.entries(node as Record<string, unknown>).map(([k, v]) => [k, walk(v)]));
    }
    return node;
  };
  return walk(content) as T;
}

// One plain line per compound, keyed by the name or abbreviation as it
// appears on the record.
export const COMPOUND_NOTES: Record<string, string> = {
  total: "Everything the method counts, expressed as the reference compound",
  oleocanthal: "The peppery catch at the back of the throat; inhibits COX-1 and COX-2",
  oleacein: "Oleocanthal's close relative, built on hydroxytyrosol; a strong antioxidant",
  hydroxytyrosol: "The free phenol most of the health evidence is built on",
  tyrosol: "Hydroxytyrosol's simpler sibling, and the compound the IOC total is expressed in",
  "3,4-DHPEA-EDA": "Oleacein under its chemical name, as the IOC method reports it",
  "p-HPEA-EDA": "Oleocanthal under its chemical name, as the IOC method reports it",
  Lignans: "Pinoresinol and acetoxypinoresinol; mild, stable antioxidants",
  "3,4-DHPEA-EA": "Oleuropein aglycone; bitter, and a carrier of hydroxytyrosol",
  "p-HPEA-EA": "Ligstroside aglycone; the tyrosol counterpart of oleuropein aglycone",
};

export const METHOD_NOTES: Record<CertificateData["method"]["name"], string> = {
  HPLC: "Separates the phenolic compounds and quantifies each one against tyrosol, then sums them",
  qNMR: "Reads each compound's signal directly; usually reported as hydroxytyrosol and derivatives",
  "Folin-Ciocalteu": "A colour reaction that returns one reducing-capacity figure; no compounds named",
  "LC-MS/MS": "Identifies each compound by mass; the research benchmark, rare on commercial reports",
};
