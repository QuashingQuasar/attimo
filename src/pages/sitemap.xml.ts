import type { APIRoute } from "astro";
import { getAllPostMeta, blogPath } from "@/lib/sanity";
import { fetchMerchProducts } from "@/lib/shopify";
import { LOCALES, pathHasLocaleVariants } from "@/lib/i18n/config";

const SITE = "https://attimo-oil.com";

// Slugs published in the standalone blog sitemap (public/sitemap-blog.xml),
// excluded from the main sitemap.
//
// INDEXING EXPERIMENT — Phase 1 (sitemap arm): `polyphenols-olive-oil` and
// `bryan-johnson-olive-oil` were removed from this set so they now ALSO appear
// in the main sitemap (postEntries) — testing whether main-sitemap presence
// moves them from "Discovered – not indexed" to indexed. The other 6 stay here
// (controls + other arms). Revert if the arm shows no effect after ~3 weeks.
const BLOG_SITEMAP_SLUGS = new Set([
  "olive-oil-shot",
  "should-you-cook-with-olive-oil",
  "olive-color-ripeness-polyphenols",
  "unfiltered-olive-oil",
  "squeeze-bottles-olive-oil",
  "how-to-read-olive-oil-lab-analysis",
]);

const STATIC_URLS: { loc: string; changefreq: string; priority: string }[] = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/product/coratina", changefreq: "weekly", priority: "0.9" },
  { loc: "/product/nocellara", changefreq: "weekly", priority: "0.9" },
  { loc: "/product/picual", changefreq: "weekly", priority: "0.9" },
  { loc: "/product/trio", changefreq: "weekly", priority: "0.9" },
  { loc: "/product/duo", changefreq: "weekly", priority: "0.9" },
  { loc: "/high-polyphenol-olive-oil", changefreq: "weekly", priority: "0.9" },
  { loc: "/polyphenol-methods", changefreq: "monthly", priority: "0.8" },
  // Localised methods pages (translated slugs, standalone entries like the
  // hubs; the hreflang cluster is emitted per page via METHODS_HREFLANGS).
  { loc: "/de/polyphenol-analysemethoden", changefreq: "monthly", priority: "0.8" },
  { loc: "/fr/methodes-analyse-polyphenols", changefreq: "monthly", priority: "0.8" },
  { loc: "/se/polyfenol-analysmetoder", changefreq: "monthly", priority: "0.8" },
  { loc: "/dk/polyfenol-analysemetoder", changefreq: "monthly", priority: "0.8" },
  { loc: "/nl/polyfenol-analysemethoden", changefreq: "monthly", priority: "0.8" },
  // Lab certificate pages (English only; one per certificate in
  // src/content/certificates).
  { loc: "/de/contact", changefreq: "yearly", priority: "0.4" },
  { loc: "/fr/contact", changefreq: "yearly", priority: "0.4" },
  { loc: "/se/contact", changefreq: "yearly", priority: "0.4" },
  { loc: "/dk/contact", changefreq: "yearly", priority: "0.4" },
  { loc: "/nl/contact", changefreq: "yearly", priority: "0.4" },
  { loc: "/de/privacy", changefreq: "yearly", priority: "0.3" },
  { loc: "/de/terms", changefreq: "yearly", priority: "0.3" },
  { loc: "/fr/privacy", changefreq: "yearly", priority: "0.3" },
  { loc: "/fr/terms", changefreq: "yearly", priority: "0.3" },
  { loc: "/se/privacy", changefreq: "yearly", priority: "0.3" },
  { loc: "/se/terms", changefreq: "yearly", priority: "0.3" },
  { loc: "/dk/privacy", changefreq: "yearly", priority: "0.3" },
  { loc: "/dk/terms", changefreq: "yearly", priority: "0.3" },
  { loc: "/nl/privacy", changefreq: "yearly", priority: "0.3" },
  { loc: "/nl/terms", changefreq: "yearly", priority: "0.3" },
  { loc: "/polyphenol-index", changefreq: "monthly", priority: "0.8" },
  { loc: "/de/olivenoel-polyphenol-index", changefreq: "monthly", priority: "0.8" },
  { loc: "/fr/index-polyphenols-huile-olive", changefreq: "monthly", priority: "0.8" },
  { loc: "/se/olivolja-polyfenolindex", changefreq: "monthly", priority: "0.8" },
  { loc: "/dk/olivenolie-polyfenolindeks", changefreq: "monthly", priority: "0.8" },
  { loc: "/nl/olijfolie-polyfenolindex", changefreq: "monthly", priority: "0.8" },
  // Market buying guides, one per country in its own language.
  { loc: "/nl/polyfenolrijke-olijfolie-kopen-nederland", changefreq: "monthly", priority: "0.7" },
  { loc: "/nl/polyfenolrijke-olijfolie-kopen-belgie", changefreq: "monthly", priority: "0.7" },
  { loc: "/fr/huile-olive-riche-polyphenols-acheter-belgique", changefreq: "monthly", priority: "0.7" },
  { loc: "/fr/huile-olive-riche-polyphenols-acheter-france", changefreq: "monthly", priority: "0.7" },
  { loc: "/de/polyphenolreiches-olivenoel-kaufen-deutschland", changefreq: "monthly", priority: "0.7" },
  { loc: "/dk/polyfenolrig-olivenolie-koeb-i-danmark", changefreq: "monthly", priority: "0.7" },
  { loc: "/se/kop-polyfenolrik-olivolja-i-sverige", changefreq: "monthly", priority: "0.7" },
  { loc: "/certificates", changefreq: "monthly", priority: "0.7" },
  { loc: "/certificates/coratina-2526-hplc-2025-11", changefreq: "monthly", priority: "0.7" },
  { loc: "/certificates/nocellara-2526-hplc-2025-11", changefreq: "monthly", priority: "0.7" },
  { loc: "/certificates/picual-2526-folin-2026-02", changefreq: "monthly", priority: "0.7" },
  { loc: "/de/zertifikate", changefreq: "monthly", priority: "0.7" },
  { loc: "/de/zertifikate/coratina-2526-hplc-2025-11", changefreq: "monthly", priority: "0.7" },
  { loc: "/de/zertifikate/nocellara-2526-hplc-2025-11", changefreq: "monthly", priority: "0.7" },
  { loc: "/de/zertifikate/picual-2526-folin-2026-02", changefreq: "monthly", priority: "0.7" },
  { loc: "/fr/certificats", changefreq: "monthly", priority: "0.7" },
  { loc: "/fr/certificats/coratina-2526-hplc-2025-11", changefreq: "monthly", priority: "0.7" },
  { loc: "/fr/certificats/nocellara-2526-hplc-2025-11", changefreq: "monthly", priority: "0.7" },
  { loc: "/fr/certificats/picual-2526-folin-2026-02", changefreq: "monthly", priority: "0.7" },
  { loc: "/se/certifikat", changefreq: "monthly", priority: "0.7" },
  { loc: "/se/certifikat/coratina-2526-hplc-2025-11", changefreq: "monthly", priority: "0.7" },
  { loc: "/se/certifikat/nocellara-2526-hplc-2025-11", changefreq: "monthly", priority: "0.7" },
  { loc: "/se/certifikat/picual-2526-folin-2026-02", changefreq: "monthly", priority: "0.7" },
  { loc: "/dk/certifikater", changefreq: "monthly", priority: "0.7" },
  { loc: "/dk/certifikater/coratina-2526-hplc-2025-11", changefreq: "monthly", priority: "0.7" },
  { loc: "/dk/certifikater/nocellara-2526-hplc-2025-11", changefreq: "monthly", priority: "0.7" },
  { loc: "/dk/certifikater/picual-2526-folin-2026-02", changefreq: "monthly", priority: "0.7" },
  { loc: "/nl/certificaten", changefreq: "monthly", priority: "0.7" },
  { loc: "/nl/certificaten/coratina-2526-hplc-2025-11", changefreq: "monthly", priority: "0.7" },
  { loc: "/nl/certificaten/nocellara-2526-hplc-2025-11", changefreq: "monthly", priority: "0.7" },
  { loc: "/nl/certificaten/picual-2526-folin-2026-02", changefreq: "monthly", priority: "0.7" },
  // Localised polyphenol hubs (translated slugs, not prefix variants — so they
  // sit here as standalone entries; the EN↔DE hreflang cluster is emitted in
  // each page's <head> via HUB_HREFLANGS).
  { loc: "/de/polyphenolreiches-olivenoel", changefreq: "weekly", priority: "0.9" },
  { loc: "/fr/huile-olive-riche-polyphenols", changefreq: "weekly", priority: "0.9" },
  { loc: "/se/polyfenolrik-olivolja", changefreq: "weekly", priority: "0.9" },
  { loc: "/dk/polyfenolrig-olivenolie", changefreq: "weekly", priority: "0.9" },
  { loc: "/nl/polyfenolrijke-olijfolie", changefreq: "weekly", priority: "0.9" },
  { loc: "/early-harvest-olive-oil", changefreq: "weekly", priority: "0.9" },
  { loc: "/new-harvest", changefreq: "weekly", priority: "0.9" },
  { loc: "/de/neue-ernte-olivenoel", changefreq: "weekly", priority: "0.9" },
  { loc: "/fr/nouvelle-recolte-huile-olive", changefreq: "weekly", priority: "0.9" },
  { loc: "/se/ny-skord-olivolja", changefreq: "weekly", priority: "0.9" },
  { loc: "/dk/ny-hoest-olivenolie", changefreq: "weekly", priority: "0.9" },
  { loc: "/nl/nieuwe-oogst-olijfolie", changefreq: "weekly", priority: "0.9" },
  { loc: "/de/fruehe-ernte-olivenoel", changefreq: "weekly", priority: "0.9" },
  { loc: "/fr/huile-olive-recolte-precoce", changefreq: "weekly", priority: "0.9" },
  { loc: "/se/tidig-skord-olivolja", changefreq: "weekly", priority: "0.9" },
  { loc: "/dk/tidlig-hoest-olivenolie", changefreq: "weekly", priority: "0.9" },
  { loc: "/nl/vroege-oogst-olijfolie", changefreq: "weekly", priority: "0.9" },
  { loc: "/merch", changefreq: "weekly", priority: "0.7" },
  { loc: "/blog", changefreq: "weekly", priority: "0.8" },
  { loc: "/quiz", changefreq: "weekly", priority: "0.6" },
  { loc: "/contact", changefreq: "weekly", priority: "0.5" },
  { loc: "/shipping", changefreq: "monthly", priority: "0.4" },
  { loc: "/privacy", changefreq: "yearly", priority: "0.3" },
  { loc: "/terms", changefreq: "yearly", priority: "0.3" },
];

// Build the xhtml:link block listing every hreflang variant for a given
// unprefixed locale-variant path. Used per <url> entry so search engines see
// the cluster of locale alternatives together.
function buildHreflangLinks(unprefixedPath: string): string {
  const links = LOCALES.map((locale) => {
    const tag = locale.hreflang;
    const href = locale.slug === ""
      ? `${SITE}${unprefixedPath}`
      : `${SITE}/${locale.slug}${unprefixedPath === "/" ? "/" : unprefixedPath}`;
    return `    <xhtml:link rel="alternate" hreflang="${tag}" href="${href}" />`;
  });
  links.push(
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${unprefixedPath}" />`
  );
  return links.join("\n");
}

export const GET: APIRoute = async () => {
  const posts = await getAllPostMeta();
  // Merch PDPs (English-only, no locale variants). Degrades to none if Shopify
  // is unreachable.
  const merch = await fetchMerchProducts().catch(() => []);

  // Locale-variant URLs (homepage, /product/*, /shipping) are emitted once
  // per locale, each with the full hreflang cluster. Non-variant URLs (blog,
  // quiz, contact, legal) are emitted once on the default locale.
  const staticEntries = STATIC_URLS.flatMap((u) => {
    if (!pathHasLocaleVariants(u.loc)) {
      return [
        `  <url>\n    <loc>${SITE}${u.loc}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
      ];
    }
    const hreflangBlock = buildHreflangLinks(u.loc);
    return LOCALES.map((locale) => {
      const localizedLoc = locale.slug === ""
        ? u.loc
        : `/${locale.slug}${u.loc === "/" ? "/" : u.loc}`;
      return `  <url>\n    <loc>${SITE}${localizedLoc}</loc>\n${hreflangBlock}\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`;
    });
  }).join("\n");

  // Group posts by translationKey so each entry can emit its hreflang cluster.
  const clusters = new Map<string, { language: string; slug: string }[]>();
  for (const p of posts) {
    if (!p.translationKey) continue;
    const arr = clusters.get(p.translationKey) ?? [];
    arr.push({ language: p.language, slug: p.slug });
    clusters.set(p.translationKey, arr);
  }
  const blogHreflangBlock = (p: (typeof posts)[number]): string => {
    if (!p.translationKey) return "";
    const cluster = clusters.get(p.translationKey) ?? [];
    if (cluster.length < 2) return "";
    const links = cluster.map(
      (t) => `    <xhtml:link rel="alternate" hreflang="${t.language}" href="${SITE}${blogPath(t.slug, t.language)}" />`
    );
    const en = cluster.find((t) => t.language === "en");
    if (en) {
      links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${blogPath(en.slug, "en")}" />`);
    }
    return "\n" + links.join("\n");
  };

  const postEntries = posts
    // English posts listed in the standalone blog sitemap are excluded here;
    // localized posts (de/fr/…) always belong in the main sitemap.
    .filter((p) => !(p.language === "en" && BLOG_SITEMAP_SLUGS.has(p.slug)))
    .map((p) => {
      const lastmod = (p.updatedAt || p.publishedAt).split("T")[0];
      const loc = `${SITE}${blogPath(p.slug, p.language)}`;
      return `  <url>\n    <loc>${loc}</loc>${blogHreflangBlock(p)}\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
    })
    .join("\n");

  const merchEntries = merch
    .map(
      (p) =>
        `  <url>\n    <loc>${SITE}/merch/${p.node.handle}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.6</priority>\n  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${staticEntries}\n${postEntries}\n${merchEntries}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
