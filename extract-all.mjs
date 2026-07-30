// Unified EN extraction for translation. For all 9 posts writes:
//   content/en-extract/<slug>.imgmd        markdown w/ [[IMAGEk]] + [[TABLEk]]
//   content/en-extract/<slug>.images.json  [{ref, alt}]
//   content/en-extract/<slug>.tables.json  [[...cells]]
//   content/en-extract/<slug>.meta.json    {en_slug,title,excerpt,seoTitle,seoDescription,publishedAt,coverRef}
import { createClient } from "@sanity/client";
import { writeFileSync, mkdirSync } from "node:fs";

const c = createClient({ projectId: "25tuybj3", dataset: "production", apiVersion: "2024-01-01", useCdn: false });
const OUT = "/Users/gillesdc/attimo/content/en-extract";
mkdirSync(OUT, { recursive: true });

const SLUGS = [
  "should-you-cook-with-olive-oil", "polyphenols-olive-oil", "high-polyphenol-olive-oil-guide",
  "olive-oil-shot", "bryan-johnson-olive-oil", "olive-color-ripeness-polyphenols",
  "unfiltered-olive-oil", "how-to-read-olive-oil-lab-analysis", "squeeze-bottles-olive-oil",
];

function inline(block) {
  return (block.children || []).map((s) => {
    let t = s.text;
    const linkMark = (s.marks || []).find((m) => (block.markDefs || []).some((d) => d._key === m));
    if (linkMark) { const d = block.markDefs.find((x) => x._key === linkMark); t = `[${t}](${d.href})`; }
    if ((s.marks || []).includes("strong")) t = `**${t}**`;
    if ((s.marks || []).includes("em")) t = `*${t}*`;
    return t;
  }).join("");
}

for (const slug of SLUGS) {
  const p = await c.fetch(`*[_type=="post" && slug.current==$s && coalesce(language,"en")=="en"][0]`, { s: slug });
  const lines = [`# ${p.title}`, ""];
  const images = [], tables = [], tweets = [];
  for (const b of p.body) {
    if (b._type === "image") { images.push({ ref: b.asset?._ref || null, alt: b.alt || "" }); lines.push(`[[IMAGE${images.length}]]`, ""); continue; }
    if (b._type === "table") { tables.push(b.rows.map((r) => r.cells)); lines.push(`[[TABLE${tables.length}]]`, ""); continue; }
    if (b._type === "tweet") { tweets.push(b.url || ""); lines.push(`[[TWEET${tweets.length}]]`, ""); continue; }
    if (b._type !== "block") continue;
    const text = inline(b);
    if (b.listItem === "bullet") lines.push(`- ${text}`);
    else if (b.listItem === "number") lines.push(`1. ${text}`);
    else if (b.style === "h2") lines.push(`## ${text}`, "");
    else if (b.style === "h3") lines.push(`### ${text}`, "");
    else lines.push(text, "");
  }
  writeFileSync(`${OUT}/${slug}.imgmd`, lines.join("\n").replace(/\n{3,}/g, "\n\n"));
  writeFileSync(`${OUT}/${slug}.images.json`, JSON.stringify(images, null, 1));
  writeFileSync(`${OUT}/${slug}.tables.json`, JSON.stringify(tables, null, 1));
  writeFileSync(`${OUT}/${slug}.tweets.json`, JSON.stringify(tweets, null, 1));
  writeFileSync(`${OUT}/${slug}.meta.json`, JSON.stringify({
    en_slug: slug, title: p.title, excerpt: p.excerpt || "", seoTitle: p.seoTitle || "",
    seoDescription: p.seoDescription || "", publishedAt: p.publishedAt, coverRef: p.coverImage?.asset?._ref || null,
  }, null, 1));
  console.log(`${slug}: ${p.body.length} blocks, ${images.length} imgs, ${tables.length} tables, ${tweets.length} tweets`);
}
