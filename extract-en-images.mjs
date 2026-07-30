// Re-extract EN posts WITH inline image placeholders, so images can be
// re-inserted into the already-translated German bodies.
// Writes content/en-extract/<slug>.imgmd (markdown w/ [[IMAGEk]] placeholders)
// and <slug>.images.json ([{ref, alt}]).
import { createClient } from "@sanity/client";
import { writeFileSync } from "node:fs";

const c = createClient({ projectId: "25tuybj3", dataset: "production", apiVersion: "2024-01-01", useCdn: false });

const SLUGS = [
  "polyphenols-olive-oil", "high-polyphenol-olive-oil-guide", "olive-oil-shot",
  "bryan-johnson-olive-oil", "olive-color-ripeness-polyphenols", "unfiltered-olive-oil",
  "how-to-read-olive-oil-lab-analysis", "squeeze-bottles-olive-oil",
];
const OUT = "/Users/gillesdc/attimo/content/en-extract";

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
  const p = await c.fetch(`*[_type=="post" && slug.current==$s][0]`, { s: slug });
  const lines = [`# ${p.title}`, ""];
  const images = [];
  let tk = 0;
  for (const b of p.body) {
    if (b._type === "image") {
      images.push({ ref: b.asset?._ref || null, alt: b.alt || "" });
      lines.push(`[[IMAGE${images.length}]]`, "");
      continue;
    }
    if (b._type === "table") { tk++; lines.push(`[[TABLE${tk}]]`, ""); continue; }
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
  console.log(`${slug}: ${images.length} images`);
}
