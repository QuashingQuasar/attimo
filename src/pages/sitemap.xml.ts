import type { APIRoute } from "astro";
import { getAllPostMeta } from "@/lib/sanity";
import { LOCALES, pathHasLocaleVariants } from "@/lib/i18n/config";

const SITE = "https://attimo-oil.com";

// Slugs published in the standalone blog sitemap (public/sitemap-blog.xml).
// Excluded here so each URL appears in exactly one sitemap.
const BLOG_SITEMAP_SLUGS = new Set([
  "olive-oil-shot",
  "bryan-johnson-olive-oil",
  "should-you-cook-with-olive-oil",
  "polyphenols-olive-oil",
  "olive-color-ripeness-polyphenols",
  "unfiltered-olive-oil",
  "squeeze-bottles-olive-oil",
]);

const STATIC_URLS: { loc: string; changefreq: string; priority: string }[] = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/product/coratina", changefreq: "weekly", priority: "0.9" },
  { loc: "/product/nocellara", changefreq: "weekly", priority: "0.9" },
  { loc: "/product/picual", changefreq: "weekly", priority: "0.9" },
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

  const postEntries = posts
    .filter((p) => !BLOG_SITEMAP_SLUGS.has(p.slug))
    .map((p) => {
      const lastmod = (p.updatedAt || p.publishedAt).split("T")[0];
      return `  <url>\n    <loc>${SITE}/blog/${p.slug}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${staticEntries}\n${postEntries}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
