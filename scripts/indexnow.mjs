// IndexNow: tells Bing (and Yandex, Seznam, Naver, Yep) which pages changed,
// so they recrawl within minutes instead of whenever they next visit.
//
// Run by .github/workflows/indexnow.yml after each production deploy. Reads
// the sitemap, fetches every page, hashes its visible text and submits only
// the URLs whose text changed since the previous run (hashes kept in the file
// passed as --state, carried between runs by the Actions cache). The first
// run, with no state, submits everything once.
//
// Manual use: node scripts/indexnow.mjs --urls /polyphenol-index,/de/olivenoel-polyphenol-index
//
// The key is public by design: Bing checks it at https://attimo-oil.com/<key>.txt.

import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";

const HOST = "attimo-oil.com";
const ORIGIN = `https://${HOST}`;
const KEY = "3517473479105c086c385424898aa901";
const SITEMAPS = [`${ORIGIN}/sitemap.xml`];

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, all) => (a.startsWith("--") ? [...acc, [a.slice(2), all[i + 1]]] : acc), []),
);

// Returns false when IndexNow refused a batch, so the caller keeps the old
// state and the same URLs are retried on the next deploy.
async function submit(urls) {
  if (urls.length === 0) {
    console.log("IndexNow: nothing changed");
    return true;
  }
  let ok = true;
  for (let i = 0; i < urls.length; i += 10000) {
    const urlList = urls.slice(i, i + 10000);
    const r = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${ORIGIN}/${KEY}.txt`, urlList }),
    });
    console.log(`IndexNow: ${urlList.length} URLs -> HTTP ${r.status}`);
    if (r.status >= 300) {
      ok = false;
      process.exitCode = 1;
    }
  }
  urls.forEach((u) => console.log("  " + u));
  return ok;
}

// Visible text only: asset hashes and scripts change on every build and would
// make every page look new.
function textHash(html) {
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return createHash("sha1").update(text).digest("hex");
}

async function sitemapUrls() {
  const urls = new Set();
  for (const sm of SITEMAPS) {
    const xml = await (await fetch(sm)).text();
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.add(m[1].trim());
  }
  return [...urls];
}

async function main() {
  if (args.urls) {
    return submit(args.urls.split(",").map((p) => (p.startsWith("http") ? p : ORIGIN + p.trim())));
  }
  const statePath = args.state ?? ".indexnow-state.json";
  const prev = existsSync(statePath) ? JSON.parse(readFileSync(statePath, "utf8")) : {};
  const urls = await sitemapUrls();
  const next = {};
  const changed = [];
  let i = 0;
  const worker = async () => {
    while (i < urls.length) {
      const url = urls[i++];
      try {
        const r = await fetch(url, { redirect: "manual", headers: { "User-Agent": "attimo-indexnow" } });
        if (r.status !== 200) continue;
        next[url] = textHash(await r.text());
        if (prev[url] !== next[url]) changed.push(url);
      } catch (e) {
        console.warn("fetch failed", url, e.message);
        if (prev[url]) next[url] = prev[url];
      }
    }
  };
  await Promise.all(Array.from({ length: 8 }, worker));
  console.log(`IndexNow: ${urls.length} sitemap URLs, ${changed.length} changed`);
  if (await submit(changed.sort())) writeFileSync(statePath, JSON.stringify(next));
}

main();
