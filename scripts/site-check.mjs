// Site check: catches the four quiet ways a deploy can drop pages from search.
//   1. a page in the sitemap no longer answers 200
//   2. a page turns noindex (meta tag or X-Robots-Tag header)
//   3. a canonical points somewhere other than the page itself
//   4. robots.txt differs from scripts/robots.expected.txt (for example a
//      block added by Cloudflare, or a Disallow that crept in)
//
// Run by .github/workflows/site-check.yml after each production deploy; the
// job fails, and GitHub mails the failure, when anything is off.
//
// Manual use:
//   node scripts/site-check.mjs                      checks attimo-oil.com
//   node scripts/site-check.mjs --base <preview-url> checks a Vercel preview
// On a preview the sitemap and canonicals still name attimo-oil.com, so pages
// are fetched from the preview and compared by path; the X-Robots-Tag header
// is skipped there because Vercel sets noindex on every preview.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const ORIGIN = "https://attimo-oil.com";
const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, all) => (a.startsWith("--") ? [...acc, [a.slice(2), all[i + 1]]] : acc), []),
);
const BASE = (args.base || ORIGIN).replace(/\/$/, "");
const isProduction = BASE === ORIGIN;
const UA = "attimo-site-check";

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// One slow or failed answer is not a broken page: a server error or a dropped
// connection is asked again, after 2 and then 6 seconds, before it is reported.
async function get(url, tries = 3) {
  for (let i = 1; ; i++) {
    try {
      const r = await fetch(url, { redirect: "manual", headers: { "User-Agent": UA } });
      if (r.status < 500 || i >= tries) return { status: r.status, headers: r.headers, body: await r.text() };
    } catch (e) {
      if (i >= tries) return { status: 0, headers: new Headers(), body: "", error: String(e) };
    }
    await wait(i * i * 2000);
  }
}

const trimSlash = (p) => (p.length > 1 ? p.replace(/\/$/, "") : p);
const problems = [];

// robots.txt
const expectedRobots = readFileSync(fileURLToPath(new URL("./robots.expected.txt", import.meta.url)), "utf8").trim();
const robots = await get(`${BASE}/robots.txt`);
if (robots.status !== 200) problems.push(`robots.txt answers ${robots.status}`);
else if (robots.body.trim() !== expectedRobots) {
  problems.push(`robots.txt differs from scripts/robots.expected.txt. Live file:\n${robots.body.trim()}`);
}

// sitemap
const sitemap = await get(`${BASE}/sitemap.xml`);
const paths = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
if (sitemap.status !== 200 || paths.length === 0) problems.push(`sitemap.xml answers ${sitemap.status} with ${paths.length} URLs`);

async function checkPage(path) {
  const r = await get(BASE + path);
  if (r.status !== 200) return problems.push(`${path}: answers ${r.status || r.error} (expected 200)`);
  const metaRobots = r.body.match(/<meta[^>]+name=["']robots["'][^>]*>/i)?.[0] ?? "";
  if (/noindex/i.test(metaRobots)) problems.push(`${path}: noindex in the robots meta tag`);
  if (isProduction && /noindex/i.test(r.headers.get("x-robots-tag") ?? "")) problems.push(`${path}: noindex in the X-Robots-Tag header`);
  const canonicalTag = r.body.match(/<link[^>]+rel=["']canonical["'][^>]*>/i)?.[0] ?? "";
  const canonical = canonicalTag.match(/href=["']([^"']+)["']/i)?.[1];
  if (!canonical) return problems.push(`${path}: no canonical tag`);
  const c = new URL(canonical, ORIGIN);
  if (c.origin !== ORIGIN || trimSlash(c.pathname) !== trimSlash(path)) problems.push(`${path}: canonical points to ${canonical}`);
}

const queue = [...new Set(paths)];
const total = queue.length;
await Promise.all(Array.from({ length: 8 }, async () => {
  while (queue.length) await checkPage(queue.shift());
}));

if (problems.length) {
  console.error(`Site check FAILED on ${BASE}: ${problems.length} problem(s) across ${total} sitemap URLs\n`);
  problems.sort().forEach((p) => console.error("  - " + p));
  process.exit(1);
}
console.log(`Site check passed on ${BASE}: ${total} sitemap URLs answer 200, none noindex, every canonical points to itself, robots.txt as expected.`);
