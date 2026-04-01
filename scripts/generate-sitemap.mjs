import { writeFileSync } from "fs";

const SANITY_PROJECT_ID = "25tuybj3";
const SANITY_DATASET = "production";
const SITE = "https://attimo-oil.com";

const STATIC_URLS = [
  { loc: `${SITE}/`, priority: "1.0" },
  { loc: `${SITE}/product/coratina`, priority: "0.9" },
  { loc: `${SITE}/product/nocellara`, priority: "0.9" },
  { loc: `${SITE}/product/picual`, priority: "0.9" },
  { loc: `${SITE}/blog`, priority: "0.8" },
  { loc: `${SITE}/quiz`, priority: "0.6" },
  { loc: `${SITE}/contact`, priority: "0.5" },
];

async function main() {
  let posts = [];
  try {
    const query = encodeURIComponent(
      `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, publishedAt }`
    );
    const res = await fetch(
      `https://${SANITY_PROJECT_ID}.apicdn.sanity.io/v2021-10-21/data/query/${SANITY_DATASET}?query=${query}`
    );
    if (!res.ok) throw new Error(`Sanity ${res.status}: ${await res.text()}`);
    const data = await res.json();
    posts = data.result || [];
    console.log(`Sitemap: fetched ${posts.length} blog posts from Sanity`);
  } catch (e) {
    console.error("Sitemap: failed to fetch blog posts from Sanity:", e.message);
  }

  const staticEntries = STATIC_URLS.map(
    ({ loc, priority }) => `  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`
  ).join("\n");

  const postEntries = posts
    .map((post) => {
      const lastmod = post.publishedAt
        ? post.publishedAt.split("T")[0]
        : new Date().toISOString().split("T")[0];
      return `  <url>
    <loc>${SITE}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries}
${postEntries}
</urlset>
`;

  writeFileSync("public/sitemap.xml", xml, "utf-8");
  console.log("Sitemap: written to public/sitemap.xml");
}

main();
