// Create an ENGLISH `post` doc from content/en-drafts/<slug>.{md,tweets.json,images.json,tables.json,meta.json}
//   node create-en-post.mjs <slug>            (dry-run)
//   node create-en-post.mjs <slug> --commit   (create)
import { createClient } from "@sanity/client";
import { readFileSync, existsSync } from "node:fs";
import { randomBytes } from "node:crypto";

const SLUG = process.argv[2];
const COMMIT = process.argv.includes("--commit");
if (!SLUG) { console.error("usage: node create-en-post.mjs <slug> [--commit]"); process.exit(1); }

const cfg = JSON.parse(readFileSync(process.env.HOME + "/.config/sanity/config.json", "utf8"));
const c = createClient({ projectId: "25tuybj3", dataset: "production", apiVersion: "2024-01-01", useCdn: false, token: cfg.authToken });

const BASE = "/Users/gillesdc/attimo/content/en-drafts";
const md = readFileSync(`${BASE}/${SLUG}.md`, "utf8");
const rd = (ext) => existsSync(`${BASE}/${SLUG}.${ext}`) ? JSON.parse(readFileSync(`${BASE}/${SLUG}.${ext}`, "utf8")) : [];
const tablesData = rd("tables.json"), imagesData = rd("images.json"), tweetsData = rd("tweets.json");
const meta = JSON.parse(readFileSync(`${BASE}/${SLUG}.meta.json`, "utf8"));

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
  if (!spans.length) spans.push(span(""));
  return { spans, markDefs };
}
const block = (style, line, extra = {}) => { const { spans, markDefs } = parseInline(line); return { _type: "block", _key: rk(), style, markDefs, children: spans, ...extra }; };
const table = (rows) => ({ _type: "table", _key: rk(), rows: rows.map((cells) => ({ _type: "tableRow", _key: rk(), cells })) });
const tweet = (url) => ({ _type: "tweet", _key: rk(), url });
const image = (i) => ({ _type: "image", _key: rk(), asset: { _type: "reference", _ref: i.ref }, ...(i.alt ? { alt: i.alt } : {}) });

// Markdown tables -> table blocks (pipe syntax), everything else as in the other creators.
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
let tw = 0, im = 0;
body = body.map((b) => {
  const txt = b._type === "block" ? (b.children?.[0]?.text || "") : "";
  const mw = /^\[\[TWEET(\d+)\]\]$/.exec(txt);
  if (mw) { const u = tweetsData[Number(mw[1]) - 1]; if (u) { tw++; return tweet(u); } }
  const mi = /^\[\[IMAGE(\d+)\]\]$/.exec(txt);
  if (mi) { const g = imagesData[Number(mi[1]) - 1]; if (g?.ref) { im++; return image(g); } }
  return b;
});

const doc = {
  _id: `post-en-${SLUG}`,
  _type: "post",
  language: "en",
  translationKey: SLUG,
  title: meta.title,
  slug: { _type: "slug", current: SLUG },
  publishedAt: meta.publishedAt,
  excerpt: meta.excerpt,
  seoTitle: meta.seoTitle,
  seoDescription: meta.seoDescription,
  noIndex: false,
  ...(meta.coverRef ? { coverImage: { _type: "image", asset: { _type: "reference", _ref: meta.coverRef } } } : {}),
  body,
};

const styles = body.reduce((a, b) => { const k = b._type === "table" ? "table" : b._type === "image" ? "image" : b._type === "tweet" ? "tweet" : (b.listItem ? `li:${b.listItem}` : b.style); a[k] = (a[k] || 0) + 1; return a; }, {});
const leftover = body.filter((b) => b._type === "block" && /\[\[(TABLE|IMAGE|TWEET)\d+\]\]/.test(b.children?.[0]?.text || "")).length;
console.log(`[en/${SLUG}] blocks:${body.length} styles:${JSON.stringify(styles)} tweets:${tw}/${tweetsData.length} images:${im}/${imagesData.length} leftover:${leftover}`);
console.log(`  title:${meta.title.length} seoTitle:${meta.seoTitle.length} seoDesc:${meta.seoDescription.length} cover:${!!meta.coverRef}`);
if (leftover) { console.error("  ✗ leftover placeholders"); process.exit(1); }
if (!COMMIT) { console.log("  [dry-run]"); process.exit(0); }
const res = await c.createOrReplace(doc);
console.log(`  ✓ ${res._id}`);
