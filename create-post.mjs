// Generalized: create a translated `post` doc from content/<lang>/<en-slug>.{md,tables.json,images.json,meta.json}.
//   node create-post.mjs <lang> <en-slug>            (dry-run: validate + report)
//   node create-post.mjs <lang> <en-slug> --commit   (create doc + pair EN original)
// meta.json must carry: slug (localized), title, excerpt, seoTitle, seoDescription, en_slug, publishedAt, coverRef.
import { createClient } from "@sanity/client";
import { readFileSync, existsSync } from "node:fs";
import { randomBytes } from "node:crypto";

const LANG = process.argv[2];
const EN_SLUG = process.argv[3];
const COMMIT = process.argv.includes("--commit");
if (!LANG || !EN_SLUG) { console.error("usage: node create-post.mjs <lang> <en-slug> [--commit]"); process.exit(1); }

const cfg = JSON.parse(readFileSync(process.env.HOME + "/.config/sanity/config.json", "utf8"));
const c = createClient({ projectId: "25tuybj3", dataset: "production", apiVersion: "2024-01-01", useCdn: false, token: cfg.authToken });

const BASE = `/Users/gillesdc/attimo/content/${LANG}`;
const md = readFileSync(`${BASE}/${EN_SLUG}.md`, "utf8");
const tablesData = existsSync(`${BASE}/${EN_SLUG}.tables.json`) ? JSON.parse(readFileSync(`${BASE}/${EN_SLUG}.tables.json`, "utf8")) : [];
const imagesData = existsSync(`${BASE}/${EN_SLUG}.images.json`) ? JSON.parse(readFileSync(`${BASE}/${EN_SLUG}.images.json`, "utf8")) : [];
const tweetsData = existsSync(`${BASE}/${EN_SLUG}.tweets.json`) ? JSON.parse(readFileSync(`${BASE}/${EN_SLUG}.tweets.json`, "utf8")) : [];
const meta = JSON.parse(readFileSync(`${BASE}/${EN_SLUG}.meta.json`, "utf8"));
const DE_SLUG = meta.slug;
if (!DE_SLUG) { console.error("meta.slug missing"); process.exit(1); }

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
    // pipe table
    if (line.startsWith("|") && i + 1 < lines.length && /^\|[\s:|-]+\|$/.test(lines[i + 1].trim())) {
      const rows = [];
      const cells = (l) => l.trim().replace(/^\||\|$/g, "").split("|").map((x) => x.trim().replace(/\*\*/g, ""));
      rows.push(cells(lines[i])); i += 2;
      while (i < lines.length && lines[i].trim().startsWith("|")) { rows.push(cells(lines[i])); i++; }
      blocks.push(table(rows)); continue;
    }
    if (line.startsWith("## ")) { blocks.push(block("h2", line.slice(3).trim())); i++; continue; }
    if (line.startsWith("### ")) { blocks.push(block("h3", line.slice(4).trim())); i++; continue; }
    if (line.startsWith("- ")) { while (i < lines.length && lines[i].trim().startsWith("- ")) { blocks.push(block("normal", lines[i].trim().replace(/^-\s+/, ""), { listItem: "bullet", level: 1 })); i++; } continue; }
    if (/^\d+\.\s/.test(line)) { while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) { blocks.push(block("normal", lines[i].trim().replace(/^\d+\.\s+/, ""), { listItem: "number", level: 1 })); i++; } continue; }
    blocks.push(block("normal", line)); i++;
  }
  return blocks;
}

let body = mdToBlocks(md);
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
  _id: `post-${LANG}-${DE_SLUG}`,
  _type: "post",
  language: LANG,
  translationKey: meta.en_slug,
  title: meta.title,
  slug: { _type: "slug", current: DE_SLUG },
  publishedAt: meta.publishedAt,
  excerpt: meta.excerpt,
  seoTitle: meta.seoTitle,
  seoDescription: (meta.seoDescription || "").length > 160 ? meta.seoDescription.slice(0, 160).replace(/\s+\S*$/, "") : meta.seoDescription,
  noIndex: false,
  coverImage: meta.coverRef ? { _type: "image", asset: { _type: "reference", _ref: meta.coverRef } } : undefined,
  body,
};

const styles = body.reduce((a, b) => { const k = b._type === "table" ? "table" : b._type === "image" ? "image" : b._type === "tweet" ? "tweet" : (b.listItem ? `li:${b.listItem}` : b.style); a[k] = (a[k] || 0) + 1; return a; }, {});
const leftover = body.filter((b) => b._type === "block" && /\[\[(TABLE|IMAGE|TWEET)\d+\]\]/.test(b.children?.[0]?.text || "")).length;
const links = body.filter((b) => b._type === "block").flatMap((b) => (b.markDefs || []).map((d) => d.href));
const prefix = { fr: "fr", sv: "se", da: "dk", de: "de", nl: "nl" }[LANG];
const badLinks = links.filter((h) => /^\/blog\//.test(h) || (h.startsWith("/") && !h.startsWith(`/${prefix}/`) && h !== "/"));
console.log(`[${LANG}/${DE_SLUG}] blocks:${body.length} styles:${JSON.stringify(styles)} tablesSpliced:${tIdx}/${tablesData.length} imagesSpliced:${imgIdx}/${imagesData.length} tweetsSpliced:${twIdx}/${tweetsData.length} leftover:${leftover}`);
console.log(`  title:${(meta.title||"").length} seoTitle:${(meta.seoTitle||"").length} seoDesc:${(meta.seoDescription||"").length} links:${links.length} cover:${!!meta.coverRef}`);
if (badLinks.length) console.log(`  ⚠ links not under /${prefix}/:`, badLinks);
if (leftover) { console.error("  ✗ leftover placeholders — aborting"); process.exit(1); }

if (!COMMIT) { console.log("  [dry-run]"); process.exit(0); }
const res = await c.createOrReplace(doc);
const enId = await c.fetch(`*[_type=="post" && slug.current==$s && coalesce(language,"en")=="en"][0]._id`, { s: meta.en_slug });
const enRes = await c.patch(enId).set({ language: "en", translationKey: meta.en_slug }).commit();
console.log(`  ✓ ${res._id}; paired EN ${enRes._id}`);
