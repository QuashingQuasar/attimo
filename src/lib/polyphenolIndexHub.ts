// Serialisable slice of the Polyphenol Index for the high-polyphenol hub
// island: the ranked entries and ATTIMO's position, built server-side.
import { getIndexEntries, verifiedFor, num } from "./polyphenolIndex";
import { indexHrefFor } from "./polyphenolIndexContent";

export interface HubIndexRow {
  rank: number;
  brand: string;
  oil: string;
  origin: string;
  compounds: string;
  total: string;
  method: string;
  mine: boolean;
}
export interface HubIndexData {
  rows: HubIndexRow[];
  attimoRank: number | null;
  rankedCount: number;
  totalCount: number;
  verified: string;
  href: string;
}

export async function getHubIndexData(lang = "en"): Promise<HubIndexData> {
  const { ranked, all } = await getIndexEntries();
  const mine = ranked.find((e) => e.attimo_certificate !== null);
  return {
    rows: ranked.map((e) => ({
      rank: e.rank!,
      brand: e.brand,
      oil: e.oil,
      origin: e.origin,
      compounds: num(e.compounds!),
      total: e.total === null ? "—" : num(e.total),
      method: e.method,
      mine: e.attimo_certificate !== null,
    })),
    attimoRank: mine?.rank ?? null,
    rankedCount: ranked.length,
    totalCount: all.length,
    verified: verifiedFor(lang),
    href: indexHrefFor(lang),
  };
}
