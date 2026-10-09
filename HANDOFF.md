# HANDOFF — in-flight state (written 2026-10-09, pre-compaction)

## Live since the last handoff
- `/certificates` + 3 certificate pages + JSON exports (merge `48e0661`, 2026-09-22). Collection: `src/content/certificates/*.yaml`; lib `src/lib/certificates/`. Methods page reads every ATTIMO number from it. Low-visibility by design (no footer/PDP/FAQ links yet).
- Homepage (merge `03af357`, 2026-09-23): "every oil, lab-tested" block between the polyphenol chart and FAQ (`src/components/HomeLabNumbers.tsx`, data via `getHomeLabNumbers()`); product cards: "847 MG/KG / POLYPHENOLS" fact line, sold-out images faded, sold-out pill removed, CTA = ADD TO CART (adds from card) / NOTIFY ME (→ PDP `#notify`), 500ml/3L toggle in Coratina image corner, larger corner annotations.
- Blog: `/blog/specialty-olive-oil` + de/fr/sv/da/nl (2026-09-22). Figures generator `content/figures/gen-specialty-figures.mjs`.
- Merchant Center feeds (5 sheets) rewritten 2026-09-22: harvest 25/26, "early October, cold-pressed within hours", lab+method, oleocanthal/oleacein, 7 `product_detail` columns. See memory `project_attimo_3l_box`.

## Polyphenol Index — CURRENT TASK
- Draft `content/en-drafts/olive-oil-polyphenol-index.md` re-verified 2026-10-09 against every brand's live page/COA (notes in `~/brain/Attimo/polyphenol-index-dataset.md`, section "Re-verification 2026-10-09"). Ranking: Laconiko 1,196 · Governor 875 · ATTIMO 807 · Kyoord 657 · Pamako 634 · OlvLimits 439 · Olivea 419 · Fyllikon 390.
- Assets in Sanity: cover `image-3c74c939657a3112cfc7f7c35cc6d7bde550603f-1448x1086-jpg` (drawer photo, ATTIMO's real figures on the sheet); figures ranking `image-bc8825e85607936576dfe555fd34a9d06285e0b5`, two-methods `image-e9208bcf435b0bf6e5ae355042c842455c9513f6`, who-publishes `image-bccfbdc547236148ff6588f47debed5817e9cd99`, methods chart `image-971142a96bfa5c0417de4a5962c953f98bec9c34`. Local: `content/figures/gen-index-figures.mjs`, `chart-index-*`, `cover-polyphenol-index.jpg`. `images.json`, `tables.json`, `[[IMAGE1-6]]`/`[[TABLE1]]` markers in place; `create-en-post.mjs` now splices `[[TABLE]]`. Dry run clean. Committed locally (`ce9e99d`), NOT pushed.
- **DECISION (12 Sept, reconfirmed 9 Oct): build it as a LANDING PAGE `/polyphenol-index`, not a blog post.** Reasons: stable URL updated every harvest, backlink/badge flywheel, one canonical home for the ranking; `/polyphenol-methods` already carries the "why totals differ" story and gets linked from the page.
- Gilles still owes a read of five spots: disclosure line, inclusion rules + ranking method, ATTIMO entry, OlvLimits entry, "brands that publish nothing". He never read the final 12-Sept rework.
- Next: page build plan → feature branch → Vercel preview → "ship it". Then badge SVG per entry (follow-up), translations later if at all.

## Rankshift-derived content list (9 Oct, re-ranked)
1 Harvest 26/27 page + notify (dates from Gilles) · 2 (Coratina retest — dropped, sold out) · 3 Index (= this) · 4 market buying guides NL→DK→BE→DE · 5 "where we ship" page · 6 freshness-chain explainer · 7 single-origin vs single-estate vs monovarietal post · 8 lot number on PDP/certificate (needs label lot format from Gilles) · 9 varieties guide · 10 "ATTIMO vs X" parked.
