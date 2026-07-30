// Generalized: create a German `post` doc from a translated bundle in
// content/de/<de-slug>.{md,tables.json,meta.json}. Usage:
//   node create-de-post.mjs <de-slug>            (dry-run: validate + report)
//   node create-de-post.mjs <de-slug> --commit   (create doc + pair EN original)
import { createClient } from "@sanity/client";
import { readFileSync, existsSync } from "node:fs";
import { randomBytes } from "node:crypto";

const DE_SLUG = process.argv[2];
const COMMIT = process.argv.includes("--commit");
if (!DE_SLUG) { console.error("usage: node create-de-post.mjs <de-slug> [--commit]"); process.exit(1); }

const cfg = JSON.parse(readFileSync(process.env.HOME + "/.config/sanity/config.json", "utf8"));
const c = createClient({ projectId: "25tuybj3", dataset: "production", apiVersion: "2024-01-01", useCdn: false, token: cfg.authToken });

const BASE = "/Users/gillesdc/attimo/content/de";
const md = readFileSync(`${BASE}/${DE_SLUG}.md`, "utf8");
const tablesData = JSON.parse(readFileSync(`${BASE}/${DE_SLUG}.tables.json`, "utf8"));
const imagesData = existsSync(`${BASE}/${DE_SLUG}.images.json`) ? JSON.parse(readFileSync(`${BASE}/${DE_SLUG}.images.json`, "utf8")) : [];
const tweetsData = existsSync(`${BASE}/${DE_SLUG}.tweets.json`) ? JSON.parse(readFileSync(`${BASE}/${DE_SLUG}.tweets.json`, "utf8")) : [];
const meta = JSON.parse(readFileSync(`${BASE}/${DE_SLUG}.meta.json`, "utf8"));

const rk = () => randomBytes(6).toString("hex");
function parseInline(text) {
  const spans = [], markDefs = [];
  const span = (t, marks = []) => ({ _type: "span", _key: rk(), text: t, marks });
  const re = /(\*\*[^*\n]+\*\*)|(\[[^\]\n]+\]\([^)\n]+\))|(\*[^*\n]+\*)|(https?:\/\/[^\s)]+)/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) spans.push(span(text.slice(last, m.index)));
    if (m[1]) spans.push(span(m[1].slice(2, -2), ["strong"]));
    else if (m[2]) { const lm = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(m[2]); const key = rk(); markDefs.push({ _type: "link", _key: key, href: lm[2] }); spans.push(span(lm[1], [key])); }
    else if (m[3]) spans.push(span(m[3].slice(1, -1), ["em"]));
    else if (m[4]) { const key = rk(); markDefs.push({ _type: "link", _key: key, href: m[4] }); spans.push(span(m[4], [key])); }
    last = re.lastIndex;
  }
  if (last < text.length) spans.push(span(text.slice(last)));
  if (spans.length === 0) spans.push(span(""));
  return { spans, markDefs };
}
function block(style, line, extra = {}) { const { spans, markDefs } = parseInline(line); return { _type: "block", _key: rk(), style, markDefs, children: spans, ...extra }; }
function table(rows) { return { _type: "table", _key: rk(), rows: rows.map((cells) => ({ _type: "tableRow", _key: rk(), cells })) }; }
function tweet(url) { return { _type: "tweet", _key: rk(), url }; }
function image(img) { return { _type: "image", _key: rk(), asset: { _type: "reference", _ref: img.ref }, ...(img.alt ? { alt: img.alt } : {}) }; }
function mdToBlocks(src) {
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  const blocks = []; let i = 0, skippedH1 = false;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }
    if (!skippedH1 && line.startsWith("# ")) { skippedH1 = true; i++; continue; }
    if (line.startsWith("## ")) { blocks.push(block("h2", line.slice(3).trim())); i++; continue; }
    if (line.startsWith("### ")) { blocks.push(block("h3", line.slice(4).trim())); i++; continue; }
    if (line.startsWith("- ")) { while (i < lines.length && lines[i].trim().startsWith("- ")) { blocks.push(block("normal", lines[i].trim().replace(/^-\s+/, ""), { listItem: "bullet", level: 1 })); i++; } continue; }
    if (/^\d+\.\s/.test(line)) { while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) { blocks.push(block("normal", lines[i].trim().replace(/^\d+\.\s+/, ""), { listItem: "number", level: 1 })); i++; } continue; }
    blocks.push(block("normal", line)); i++;
  }
  return blocks;
}

let body = mdToBlocks(md);
// Splice tables at their placeholders.
let tIdx = 0, imgIdx = 0, twIdx = 0;
body = body.map((b) => {
  const txt = b._type === "block" ? (b.children?.[0]?.text || "") : "";
  const mt = /^\[\[TABLE(\d+)\]\]$/.exec(txt);
  if (mt) { const rows = tablesData[Number(mt[1]) - 1]; tIdx++; return table(rows); }
  const mw = /^\[\[TWEET(\d+)\]\]$/.exec(txt);
  if (mw) { const u = tweetsData[Number(mw[1]) - 1]; if (u) { twIdx++; return tweet(u); } }
  const mi = /^\[\[IMAGE(\d+)\]\]$/.exec(txt);
  if (mi) { const img = imagesData[Number(mi[1]) - 1]; if (img?.ref) { imgIdx++; return image(img); } }
  return b;
});

const doc = {
  _id: "post-de-" + DE_SLUG,
  _type: "post",
  language: "de",
  translationKey: meta.en_slug,
  title: meta.de_title,
  slug: { _type: "slug", current: DE_SLUG },
  publishedAt: meta.publishedAt,
  excerpt: meta.de_excerpt,
  seoTitle: meta.de_seoTitle,
  // Clamp to ≤160 chars at a word boundary (schema warns above 160).
  seoDescription: (meta.de_seoDescription || "").length > 160
    ? meta.de_seoDescription.slice(0, 160).replace(/\s+\S*$/, "")
    : meta.de_seoDescription,
  noIndex: false,
  coverImage: meta.coverRef ? { _type: "image", asset: { _type: "reference", _ref: meta.coverRef } } : undefined,
  body,
};

// Diagnostics
const styles = body.reduce((a, b) => { const k = b._type === "table" ? "table" : b._type === "image" ? "image" : b._type === "tweet" ? "tweet" : (b.listItem ? `li:${b.listItem}` : b.style); a[k] = (a[k] || 0) + 1; return a; }, {});
const leftover = body.filter((b) => b._type === "block" && /\[\[(TABLE|IMAGE|TWEET)\d+\]\]/.test(b.children?.[0]?.text || "")).length;
const links = body.filter((b) => b._type === "block").flatMap((b) => (b.markDefs || []).map((d) => d.href));
const badLinks = links.filter((h) => /^\/blog\//.test(h) || (h.startsWith("/") && !h.startsWith("/de/") && h !== "/"));
console.log(`[${DE_SLUG}] blocks:${body.length} styles:${JSON.stringify(styles)} tablesSpliced:${tIdx}/${tablesData.length} imagesSpliced:${imgIdx}/${imagesData.length} tweetsSpliced:${twIdx}/${tweetsData.length} leftoverPlaceholders:${leftover}`);
console.log(`  seoTitle:${(meta.de_seoTitle||"").length}  seoDesc:${(meta.de_seoDescription||"").length}  links:${links.length}  cover:${!!meta.coverRef}`);
if (badLinks.length) console.log(`  ⚠ non-/de internal links (check):`, badLinks);
if (leftover) { console.error("  ✗ leftover table/image placeholders — aborting"); process.exit(1); }

if (!COMMIT) { console.log("  [dry-run] pass --commit to create."); process.exit(0); }
const res = await c.createOrReplace(doc);
const enId = await c.fetch(`*[_type=="post" && slug.current==$s][0]._id`, { s: meta.en_slug });
const enRes = await c.patch(enId).set({ language: "en", translationKey: meta.en_slug }).commit();
console.log(`  ✓ created ${res._id}; paired EN ${enRes._id}`);
