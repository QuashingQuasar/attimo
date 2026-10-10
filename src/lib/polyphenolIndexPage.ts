// Shared page-level data for /polyphenol-index and its localised variants:
// title, description and JSON-LD built from the collection and the locale's
// content.
import { getIndexEntries, INDEX_EDITION, INDEX_JSON_PATH } from "./polyphenolIndex";
import { INDEX_CONTENT, INDEX_SLUGS, type IndexContent } from "./polyphenolIndexContent";
import { SITE } from "./certificates";

export const INDEX_COVER = "https://cdn.sanity.io/images/25tuybj3/production/3c74c939657a3112cfc7f7c35cc6d7bde550603f-1448x1086.jpg";

export async function buildIndexPage(lang: keyof typeof INDEX_SLUGS) {
  const content: IndexContent = INDEX_CONTENT[lang];
  const { ranked, unranked, all } = await getIndexEntries();
  const canonical = `${SITE}${INDEX_SLUGS[lang]}`;
  const description = content.meta.description.split("{n}").join(String(all.length));
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `${content.hero.eyebrow}, ${INDEX_EDITION}`,
      description: content.hero.lead,
      url: canonical,
      inLanguage: content.lang,
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: ranked.length,
      itemListElement: ranked.map((e) => ({
        "@type": "ListItem",
        position: e.rank,
        name: `${e.brand} ${e.oil}`,
        url: e.source_url,
        description: `${e.compounds} mg/kg oleocanthal + oleacein, total ${e.total} mg/kg (${e.method}), harvest ${e.harvest}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: "The Olive Oil Polyphenol Index",
      description,
      url: canonical,
      inLanguage: content.lang,
      license: "https://creativecommons.org/licenses/by/4.0/",
      creator: { "@type": "Organization", name: "ATTIMO", url: SITE },
      distribution: [{ "@type": "DataDownload", encodingFormat: "application/json", contentUrl: `${SITE}${INDEX_JSON_PATH}` }],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faq.items.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
    },
  ];
  return { content, ranked, unranked, all, canonical, description, jsonLd };
}
