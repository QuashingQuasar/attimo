// Re-insert [[TWEETk]] placeholders into translated .md files.
// Translations preserve block structure 1:1, so we map by logical-block index:
// find each tweet's index among EN logical blocks, insert at the same index in
// the translated file, and copy the EN tweets.json across verbatim (URLs are
// language-neutral).
import { readFileSync, writeFileSync, existsSync, copyFileSync } from "node:fs";

const EN = "/Users/gillesdc/attimo/content/en-extract";
const SLUGS = ["bryan-johnson-olive-oil", "olive-oil-shot"];
// German files were created by the earlier de-only pipeline, keyed by German slug.
const DE_NAME = { "bryan-johnson-olive-oil": "bryan-johnson-olivenoel", "olive-oil-shot": "olivenoel-shot" };
const LANGS = ["de", "fr", "sv", "da"];

const blocks = (s) => s.replace(/\r\n/g, "\n").split("\n").map((l) => l.trim()).filter(Boolean);

for (const slug of SLUGS) {
  const enBlocks = blocks(readFileSync(`${EN}/${slug}.imgmd`, "utf8"));
  // indices of tweet placeholders among EN logical blocks
  const tweetIdx = [];
  enBlocks.forEach((b, i) => { const m = /^\[\[TWEET(\d+)\]\]$/.exec(b); if (m) tweetIdx.push({ i, token: b }); });
  console.log(`\n${slug}: EN has ${enBlocks.length} blocks, tweets at [${tweetIdx.map(t => t.i).join(", ")}]`);

  for (const lang of LANGS) {
    const fname = lang === "de" ? DE_NAME[slug] : slug;
    const p = `/Users/gillesdc/attimo/content/${lang}/${fname}.md`;
    if (!existsSync(p)) { console.log(`  [${lang}] MISSING ${p}`); continue; }
    const raw = readFileSync(p, "utf8");
    if (raw.includes("[[TWEET")) { console.log(`  [${lang}] already has tweets — skipped`); continue; }
    const lines = raw.replace(/\r\n/g, "\n").split("\n");

    // Walk the file, counting non-empty (logical) blocks; insert tokens at target indices.
    const targets = new Map(tweetIdx.map((t) => [t.i, t.token]));
    const out = [];
    let logical = 0;
    for (const line of lines) {
      // before consuming this logical block, emit any token whose index == current count
      if (line.trim()) {
        if (targets.has(logical)) { out.push(targets.get(logical), ""); targets.delete(logical); logical++; }
        logical++;
      }
      out.push(line);
    }
    // any remaining tokens (would sit at end)
    for (const [, tok] of targets) out.push("", tok, "");

    const res = out.join("\n").replace(/\n{3,}/g, "\n\n");
    const got = (res.match(/\[\[TWEET\d+\]\]/g) || []).length;
    writeFileSync(p, res);
    copyFileSync(`${EN}/${slug}.tweets.json`, `/Users/gillesdc/attimo/content/${lang}/${fname}.tweets.json`);
    console.log(`  [${lang}] inserted ${got}/${tweetIdx.length} tweet tokens`);
  }
}
