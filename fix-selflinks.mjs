// Remap absolute self-links (https://attimo-oil.com/blog|product/...) that agents
// left pointing at English, to the localized relative path. Edits .md in place.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";

const slugMap = JSON.parse(readFileSync("/Users/gillesdc/attimo/content/slug-map.json", "utf8"));
const DIRS = { de: "de", fr: "fr", sv: "se", da: "dk" }; // dir(lang) -> url prefix

let total = 0;
for (const [lang, prefix] of Object.entries(DIRS)) {
  const dir = `/Users/gillesdc/attimo/content/${lang}`;
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".md"))) {
    const p = `${dir}/${f}`;
    let s = readFileSync(p, "utf8");
    const before = s;
    // blog self-links -> localized blog slug
    s = s.replace(/https?:\/\/(?:www\.)?attimo-oil\.com\/blog\/([a-z0-9-]+)/g, (m, en) => {
      const loc = slugMap[en]?.[lang];
      return loc ? `/${prefix}/blog/${loc}` : m;
    });
    // product self-links -> localized product path (product slug unchanged)
    s = s.replace(/https?:\/\/(?:www\.)?attimo-oil\.com\/product\/([a-z0-9-]+)/g, `/${prefix}/product/$1`);
    if (s !== before) {
      const n = (before.match(/attimo-oil\.com\/(blog|product)\//g) || []).length;
      writeFileSync(p, s);
      total += n;
      console.log(`[${lang}] fixed ${n} in ${f}`);
    }
  }
}
console.log(`\nTotal links remapped: ${total}`);
