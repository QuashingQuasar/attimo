// Build a Sanity draft `post` document from the lab-analysis markdown.
// Auth: this script does NOT need a token. It writes the document JSON to
// /tmp/lab-draft.ndjson and the caller pipes that to `npx sanity documents
// create`, which uses the local Sanity CLI session (admin user). Robot/API
// editor tokens 403 with "permission create required" on this project.

import { readFileSync, writeFileSync } from "node:fs";
import { randomBytes, randomUUID } from "node:crypto";

const SRC = "/Users/gillesdc/attimo/content/lab-analysis-guide.md";
const OUT = "/tmp/lab-draft.ndjson";

const rk = () => randomBytes(6).toString("hex");

// Parse inline markdown into portable-text spans + markDefs.
// Handles: **bold**, *italic*, [text](url), bare https?:// URLs.
function parseInline(text) {
  const spans = [];
  const markDefs = [];
  const span = (t, marks = []) => ({ _type: "span", _key: rk(), text: t, marks });

  // Order matters: bold before italic (so ** isn't eaten by *), markdown links
  // before bare URLs (so a [t](url) match consumes its own URL).
  const re = /(\*\*[^*\n]+\*\*)|(\[[^\]\n]+\]\([^)\n]+\))|(\*[^*\n]+\*)|(https?:\/\/[^\s)]+)/g;
  let last = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) spans.push(span(text.slice(last, m.index)));
    if (m[1]) {
      // **bold**
      spans.push(span(m[1].slice(2, -2), ["strong"]));
    } else if (m[2]) {
      // [text](url)
      const lm = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(m[2]);
      const key = rk();
      markDefs.push({ _type: "link", _key: key, href: lm[2] });
      spans.push(span(lm[1], [key]));
    } else if (m[3]) {
      // *italic*
      spans.push(span(m[3].slice(1, -1), ["em"]));
    } else if (m[4]) {
      // bare URL
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

    // Skip the first H1 entirely (title is set on the document field).
    if (!skippedH1 && line.startsWith("# ")) {
      skippedH1 = true;
      i++;
      continue;
    }

    // Standalone image -> visible placeholder paragraph.
    const img = IMG_RE.exec(line);
    if (img) {
      const alt = img[1] || "";
      const file = img[2] || "";
      blocks.push(block("normal", `[IMAGE: ${file} — ${alt}]`));
      i++;
      continue;
    }

    // Headings.
    if (line.startsWith("## ")) {
      blocks.push(block("h2", line.slice(3).trim()));
      i++;
      continue;
    }
    if (line.startsWith("# ")) {
      // Any later H1 (shouldn't happen) - treat as h2 to avoid losing content.
      blocks.push(block("h2", line.slice(2).trim()));
      i++;
      continue;
    }

    // Bulleted list (consecutive `- ` lines).
    if (line.startsWith("- ")) {
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        const liText = lines[i].trim().replace(/^-\s+/, "");
        blocks.push(block("normal", liText, { listItem: "bullet", level: 1 }));
        i++;
      }
      continue;
    }

    // Numbered list (consecutive `\d+\. ` lines).
    if (/^\d+\.\s/.test(line)) {
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        const liText = lines[i].trim().replace(/^\d+\.\s+/, "");
        blocks.push(block("normal", liText, { listItem: "number", level: 1 }));
        i++;
      }
      continue;
    }

    // Default: single line = single normal paragraph (FAQ Q and A separately).
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
  title: "How To Read A Lab Report For Olive Oil: Polyphenols, Oleocanthal, Oleacein, Acidity, Hydroxytyrosol And More",
  slug: { _type: "slug", current: "how-to-read-olive-oil-lab-analysis" },
  publishedAt: "2026-06-05T09:00:00.000Z",
  seoTitle: "How To Read An Olive Oil Lab Report (COA Explained)",
  seoDescription:
    "How to read an olive oil Certificate of Analysis: polyphenols, oleocanthal, oleacein, acidity and freshness markers explained, and what good numbers actually look like.",
  body,
};

// Diagnostics for the dry-run / pre-create review.
const styles = body.reduce((a, b) => {
  const k = b.listItem ? `li:${b.listItem}` : b.style;
  a[k] = (a[k] || 0) + 1;
  return a;
}, {});
const imageCount = body.filter((b) =>
  b.style === "normal" && !b.listItem &&
  (b.children?.[0]?.text || "").startsWith("[IMAGE:")
).length;
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
console.log(`Image placeholders: ${imageCount}`);
console.log(`Links: ${links.length}`);
for (const l of links) console.log(`  - ${l.text.slice(0, 60)}${l.text.length > 60 ? "…" : ""}  ->  ${l.href}`);

writeFileSync(OUT, JSON.stringify(doc) + "\n");
console.log(`\nWrote ${OUT}`);
console.log(`Draft _id: ${doc._id}`);
