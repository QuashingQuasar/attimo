// Build a Sanity draft `post` document from the high-polyphenol guide markdown.
// Same pattern as create-lab-draft.mjs: this writes the document JSON to
// /tmp/highpoly-draft.ndjson and the caller pipes that to
// `npx sanity documents create`, which uses the local Sanity CLI session.
// (Robot/API editor tokens 403 with "permission create required".)
//
// Run:
//   node create-highpoly-draft.mjs
//   cd <sanity studio dir> && npx sanity documents create < /tmp/highpoly-draft.ndjson
// Then open the draft in the Studio, add a cover image, review, and publish.

import { readFileSync, writeFileSync } from "node:fs";
import { randomBytes, randomUUID } from "node:crypto";

const SRC = "/Users/gillesdc/attimo/content/high-polyphenol-olive-oil-guide.md";
const OUT = "/tmp/highpoly-draft.ndjson";

const rk = () => randomBytes(6).toString("hex");

// Parse inline markdown into portable-text spans + markDefs.
// Handles: **bold**, *italic*, [text](url), bare https?:// URLs.
function parseInline(text) {
  const spans = [];
  const markDefs = [];
  const span = (t, marks = []) => ({ _type: "span", _key: rk(), text: t, marks });

  const re = /(\*\*[^*\n]+\*\*)|(\[[^\]\n]+\]\([^)\n]+\))|(\*[^*\n]+\*)|(https?:\/\/[^\s)]+)/g;
  let last = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) spans.push(span(text.slice(last, m.index)));
    if (m[1]) {
      spans.push(span(m[1].slice(2, -2), ["strong"]));
    } else if (m[2]) {
      const lm = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(m[2]);
      const key = rk();
      markDefs.push({ _type: "link", _key: key, href: lm[2] });
      spans.push(span(lm[1], [key]));
    } else if (m[3]) {
      spans.push(span(m[3].slice(1, -1), ["em"]));
    } else if (m[4]) {
      const key = rk();
      markDefs.push({ _type: "link", _key: key, href: m[4] });
      spans.push(span(m[4], [key]));
    }
    last = re.lastIndex;
  }
  if (last < text.length) spans.push(span(text.slice(last)));
  if (spans.length === 0) spans.push(span(""));
  return { spans, markDefs };
}

function block(style, line, extra = {}) {
  const { spans, markDefs } = parseInline(line);
  return { _type: "block", _key: rk(), style, markDefs, children: spans, ...extra };
}

const IMG_RE = /^!\[([^\]]*)\]\(([^)]+)\)$/;

function mdToBlocks(md) {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let i = 0;
  let skippedH1 = false;

  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.trim();
    if (!line) { i++; continue; }

    if (!skippedH1 && line.startsWith("# ")) { skippedH1 = true; i++; continue; }

    const img = IMG_RE.exec(line);
    if (img) {
      blocks.push(block("normal", `[IMAGE: ${img[2] || ""} — ${img[1] || ""}]`));
      i++;
      continue;
    }

    if (line.startsWith("## ")) { blocks.push(block("h2", line.slice(3).trim())); i++; continue; }
    if (line.startsWith("### ")) { blocks.push(block("h3", line.slice(4).trim())); i++; continue; }
    if (line.startsWith("# ")) { blocks.push(block("h2", line.slice(2).trim())); i++; continue; }

    if (line.startsWith("- ")) {
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        blocks.push(block("normal", lines[i].trim().replace(/^-\s+/, ""), { listItem: "bullet", level: 1 }));
        i++;
      }
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        blocks.push(block("normal", lines[i].trim().replace(/^\d+\.\s+/, ""), { listItem: "number", level: 1 }));
        i++;
      }
      continue;
    }

    blocks.push(block("normal", line));
    i++;
  }
  return blocks;
}

const md = readFileSync(SRC, "utf8");
const body = mdToBlocks(md);

const doc = {
  _id: "drafts." + randomUUID(),
  _type: "post",
  title: "High-Polyphenol Olive Oil: The Complete Guide",
  slug: { _type: "slug", current: "high-polyphenol-olive-oil-guide" },
  publishedAt: "2026-06-27T09:00:00.000Z",
  excerpt:
    "Same fruit, different product. What high-polyphenol olive oil is, how many polyphenols it should have, what the research supports, and how to buy one that's actually been measured.",
  seoTitle: "High-Polyphenol Olive Oil: The Complete Guide",
  seoDescription:
    "What high-polyphenol olive oil is, how many polyphenols it should have (mg/kg), the compounds that matter, what the research shows, and how to choose one.",
  body,
};

const styles = body.reduce((a, b) => {
  const k = b.listItem ? `li:${b.listItem}` : b.style;
  a[k] = (a[k] || 0) + 1;
  return a;
}, {});
const links = body.flatMap((b) =>
  (b.markDefs || [])
    .filter((d) => d._type === "link")
    .map((d) => {
      const child = b.children.find((s) => (s.marks || []).includes(d._key));
      return { href: d.href, text: child?.text || "" };
    })
);

console.log(`Blocks: ${body.length}`);
console.log("Style counts:", JSON.stringify(styles));
console.log(`Links: ${links.length}`);
for (const l of links) console.log(`  - ${l.text.slice(0, 60)}${l.text.length > 60 ? "…" : ""}  ->  ${l.href}`);

writeFileSync(OUT, JSON.stringify(doc) + "\n");
console.log(`\nWrote ${OUT}`);
console.log(`Draft _id: ${doc._id}`);
