import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const SANITY_PROJECT_ID = "25tuybj3";
const SANITY_DATASET = "production";

const STATIC_URLS = [
  { loc: "https://attimo-oil.com/", priority: "1.0" },
  { loc: "https://attimo-oil.com/product/coratina", priority: "0.9" },
  { loc: "https://attimo-oil.com/product/nocellara", priority: "0.9" },
  { loc: "https://attimo-oil.com/product/picual", priority: "0.9" },
  { loc: "https://attimo-oil.com/blog", priority: "0.8" },
  { loc: "https://attimo-oil.com/quiz", priority: "0.6" },
  { loc: "https://attimo-oil.com/contact", priority: "0.5" },
];

serve(async () => {
  try {
    const query = encodeURIComponent(`*[_type == "post" && defined(slug.current)]{ "slug": slug.current, publishedAt }`);
    const token = Deno.env.get("SANITY_API_TOKEN");
    const res = await fetch(`https://${SANITY_PROJECT_ID}.apicdn.sanity.io/v2021-10-21/data/query/${SANITY_DATASET}?query=${query}`, {
      headers: {
        Accept: "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    if (!res.ok) throw new Error(`Sanity ${res.status}: ${await res.text()}`);
    const { result: posts = [] } = await res.json();

    const staticEntries = STATIC_URLS.map(({ loc, priority }) => `
  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`).join("");

    const postEntries = posts.map((post: { slug: string; publishedAt: string }) => `
  <url>
    <loc>https://attimo-oil.com/blog/${post.slug}</loc>
    <lastmod>${post.publishedAt ? post.publishedAt.split("T")[0] : new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries}
${postEntries}
</urlset>`;

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (e) {
    return new Response(`Error: ${e.message}`, { status: 500 });
  }
});
