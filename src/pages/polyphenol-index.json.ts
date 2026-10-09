import type { APIRoute } from "astro";
import { getIndexEntries, toExport, INDEX_PATH, INDEX_EDITION, INDEX_VERIFIED } from "@/lib/polyphenolIndex";
import { SITE } from "@/lib/certificates";

export const GET: APIRoute = async () => {
  const { ranked, unranked } = await getIndexEntries();
  const body = {
    name: "The Olive Oil Polyphenol Index",
    edition: INDEX_EDITION,
    verified: INDEX_VERIFIED,
    url: `${SITE}${INDEX_PATH}`,
    ranking: "oleocanthal + oleacein (mg/kg), as published by the producer",
    license: "https://creativecommons.org/licenses/by/4.0/",
    ranked: ranked.map(toExport),
    stated_total_only: unranked.map(toExport),
  };
  return new Response(JSON.stringify(body, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
};
