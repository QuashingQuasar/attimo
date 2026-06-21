# Handoff — Attimo

Last touched: 2026-06-13. Production `main` is at `9584756` (clean). This
session shipped a full French locale + several fixes to production, left a
German locale parked on a branch, and is mid-flight on a **merch (apparel)
feature** whose PDP layout is being iterated on a preview branch.

---

## 1. Objective (in-flight)

**Merch collection + product pages** (Printful print-on-demand apparel)
alongside the olive oils, on branch **`feature/merch`** (`71ae928`, NOT merged,
preview live). Functionally complete and verified; the only open thread is the
**PDP layout**, which the user is art-directing against a Visualize Value
reference (visualizevalue.com/products/keepgoing).

**The layout the user wants (their exact words, after 3 iterations):**
Split the PDP into **two 50/50 halves, and center each half's content
vertically AND horizontally in the viewport.**
- **Left half:** the product image, dead-center (with whitespace around it) +
  the selectable thumbnail strip.
- **Right half:** the "buy box" — title, price, then size / colour variant
  selectors, qty, add-to-cart — centered as a block in the right half.
- **Description:** its own section **underneath** the centered hero (NOT inside
  the right column — a long Printful description there unbalances the centering,
  which was the repeated complaint).

Latest push `71ae928` implements this (hero = `md:grid-cols-2 md:min-h-screen
md:items-center`; left image capped at 480px + centered; right buy box
`justify-center`; description moved to a section below). **Not yet visually
confirmed** — the user interrupted before the verification screenshot. NEXT
STEP: screenshot `…/merch/unisex-hoodie` on the preview and confirm both halves
read as centered; iterate if not.

"Done" = user approves the layout, then `ship` (merge `feature/merch` → `main`).

---

## 2. Branch state

| Branch | SHA | Status |
|---|---|---|
| `main` | `9584756` | Production. All shipped work below is live. |
| `feature/merch` | `71ae928` | **In progress** (this session's focus). Preview live, not merged. Working tree clean. |
| `feature/de-locale` | `d490ed6` | **Parked** — full German locale, built + verified on preview, user decides when to ship. NOT merged. |
| `preview/bundle-layout-a` | `8259363` | Parked from an earlier session (homepage 3-bottle bundle explorations). Untouched. |

**Preview URLs** (Vercel, auth-gated — open logged in as `quashingquasar`;
`curl` returns 401):
- Merch: `https://attimo-git-feature-merch-quashingquasars-projects.vercel.app/merch`
  (+ `/merch/oversized-faded-t-shirt`, `/merch/unisex-hoodie`)
- German: `https://attimo-git-feature-de-locale-quashingquasars-projects.vercel.app/de/`

---

## 3. Shipped to production this session (all live on `main`)

- **French `/fr/` locale** — full translation layer (see §5), French homepage /
  products / shipping / quiz, hreflang/canonical/sitemap, navbar flag-only
  locale switcher, localized announce bar. EUR pricing identical to default.
- **Checkout language fix** — `cartCreate` now passes `@inContext(language:)`
  so the Shopify checkout renders in the storefront's language (FR → French).
- **Flat SVG flags** in the locale selector (`country-flag-icons`), replacing
  OS emoji.
- **Locale picker → navbar**, opens on **hover** (+ click/tap), flag-only
  (2.25rem), no underline.
- **Quiz `quiz_complete` dataLayer event** (GTM `GTM-T5HD4T66`) — fires once on
  the result screen with `quiz_top_match`, `quiz_match_score`, `quiz_scores`.
- **Product JSON-LD `deliveryTime`** added (GSC Merchant-listings fix).
- **Coratina shipping reverted to normal** ("Order today, ships tomorrow") now
  that it's back in stock — removed the temporary "Ships in 5–7 days" notice
  from PDP, homepage badge, and the announce bar.
- **Navbar hydration recovery** — a corrupt Vercel edge copy of the HomePage
  island chunk was failing `import()` (navbar dead); fixed by busting the chunk
  hash.

---

## 4. Merch feature — what's built (`feature/merch`)

Mirrors the oil Shopify-fetch pattern; reuses Header/Footer/CartDrawer/cartStore
+ design tokens. **English-only** (default locale) for now.

Files changed vs `main`:
- `src/lib/shopify.ts` — added `productType` to `ShopifyProduct` + `PRODUCTS_QUERY`;
  added `fetchMerchProducts()` (filters `product_type:Merch`); bumped
  `variants(first: 100)` (was 10 — truncated the hoodie's 18 variants) and
  `images(first: 30)`; added `variant.image` to query + type.
- `src/pages/merch/index.astro` — collection page, build-time `fetchMerchProducts()`.
- `src/pages/merch/[handle].astro` — PDP; `getStaticPaths` enumerates merch from
  `fetchMerchProducts()` at build; passes the product as a prop.
- `src/astro/react-pages/MerchCollectionPage.tsx` — grid listing (oil-card visual).
- `src/astro/react-pages/MerchProductPage.tsx` — PDP (the file being laid out).
- `src/components/VariantSelector.tsx` — generic multi-option picker (handles
  Size only for the t-shirt; Colour × Size for the hoodie; greys out
  unavailable combos). Selecting a colour swaps the main image (derived from
  `selected.variant.image` during render).
- `src/components/CartDrawer.tsx` — `isOilItem()` gate: volume discount AND the
  free-shipping bottle count apply to `productType === "Olive Oil"` ONLY (merch
  excluded); mixed oil+merch cart shows `cart.separateShipments` note above the
  subtotal; 2-decimal money formatting when merch is present (merch has cents,
  e.g. €36.50; oils are whole-euro).
- `src/components/Header.tsx` — "Merch" nav link (`/merch`).
- `src/lib/i18n/translations/{en,fr}.ts` — added `cart.separateShipments` +
  `nav.merch`.

**Verified on preview (browser):** t-shirt (Size-only) and hoodie (Colour×Size)
both render; picking Forest Green/XL adds exactly that variant at €45; colour
selection swaps the image; **no discount on merch even at qty 4**; mixed cart
shows the separate-shipments note; **only oils count toward free shipping**
(merch-only cart shows no nudge). Only the visual layout is still being tuned.

---

## 5. Architecture notes (so you don't reinvent)

- **i18n**: `src/lib/i18n/config.ts` (`LOCALES`, `Locale` type with
  `lang`/`hreflang`/`shopifyLanguage`/`flagCode`/`selectorLabel`). Dictionaries
  in `src/lib/i18n/translations/{en,fr}.ts` (+ `de.ts` on the de branch);
  `getDict(locale)` in `dictionaries.ts`. `Dict = typeof en` so **every locale
  dict must implement every key or the build fails.** Product copy overlays:
  `productContent.fr.ts` / `quizData.fr.ts` (+ `.de` on de branch), selected by
  `getProductContent(handle, locale)` / `getQuizQuestions(locale)`.
- **Routes** auto-generate from `LOCALES` (`src/pages/[locale]/…`); hreflang
  (`getHreflangs`), sitemap (`sitemap.xml.ts`), the footer/navbar switcher, and
  the middleware geo-redirect all iterate `LOCALES` — adding a locale needs no
  per-file wiring beyond the config entry + content files.
- **Shopify** `src/lib/shopify.ts`: `storefrontApiRequest` + typed queries with
  `@inContext`. `fetchProducts(limit, query?, context?)`. Cart =
  `src/stores/cartStore.ts` (zustand, persisted `shopify-cart`) +
  `CartDrawer.tsx`. `createStorefrontCheckout` sets `buyerIdentity.countryCode`
  + `@inContext(language:)`. Store `00xpv6-0j.myshopify.com`, token hardcoded
  in shopify.ts (public storefront token, fine).
- **Astro `output: "static"`** → every route needs `getStaticPaths`; all
  Shopify data is fetched at **build time**.

---

## 6. Gotchas & context

- **Merch is fetched by `product_type:Merch`, NOT the "Merch" collection.** The
  collection is not published to the headless Storefront sales channel
  (collections publish separately from products); the products are. Product
  type is also how the store defines merch, so this is more robust. If you ever
  want the literal collection, publish it to the headless channel and switch
  `fetchMerchProducts` back to a `collection(handle:)` query.
- **Static build → new merch needs a redeploy.** Adding a product in Shopify
  won't appear on `/merch` until a rebuild (the user already hit this with the
  hoodie). **Recommended (offered, not done):** a Shopify→Vercel **deploy
  hook** (webhook on product create/update/delete) so merch/variant/image edits
  auto-rebuild. Same pattern would help the Sanity blog.
- **`de.ts` merge landmine:** `feature/merch` adds `cart.separateShipments` +
  `nav.merch` to `en.ts`/`fr.ts`. `feature/de-locale`'s `de.ts` predates these,
  so whichever branch merges **second** will fail the `Dict` completeness check
  until those two keys are added to `de.ts`. Add them at merge time.
- **DEAD CODE:** `src/components/SizeSelector.tsx` exists on `feature/merch` but
  is unused (replaced by `VariantSelector`; nothing imports it). Safe to delete.
- **Deploy workflow:** commit on `main` + `git push origin main` → Vercel
  auto-deploys production (don't use `vercel` CLI). The auto-mode classifier
  **blocks a direct push to `main` unless the user explicitly says "ship"/"push"**
  — so work on a `feature/*` branch, push it (preview deploy), get approval,
  then merge. Poll a deploy via
  `gh api repos/QuashingQuasar/attimo/commits/<sha>/statuses --jq '.[0].state'`.
- **Vercel accounts:** `quashingquasar` is Gilles's account (preview URLs
  auth-gated; deploy notifications → declerckgilles@gmail.com). `gillesdc@hey.com`
  is a non-member identity that gets blocked.
- **Browser automation (claude-in-chrome):** on the preview, `javascript_tool`
  evals that use `await`/`setTimeout` time out (renderer busy) — use synchronous
  reads, and split click→read across separate tool calls so React re-renders
  between them. The **klaro cookie banner** intercepts clicks/overlays — dismiss
  with the "I decline" button first.
- **Pre-existing React #418** (hydration text mismatch) on the oil product pages
  on ALL locales (live on prod too) — non-fatal, NOT a regression from this
  session. Likely the add-to-cart free-shipping subtext (geo/cookie value only
  available client-side). Untouched; could be chased separately.
- **`output: "static"` + per-route `prerender`** is how single routes are
  server-rendered (e.g. `/api/notify`); not relevant to merch (all static).

---

## 7. Next steps

1. **Finish the merch PDP layout** (the in-flight task): screenshot
   `…/merch/unisex-hoodie` on the `feature/merch` preview, confirm the two
   halves are each centered in the viewport (image left, buy box right,
   description below). Iterate `MerchProductPage.tsx` if needed. Then on the
   user's "ship", merge `feature/merch` → `main` (remember the `de.ts` landmine
   if de merges too).
2. Delete the dead `src/components/SizeSelector.tsx`.
3. **German locale** (`feature/de-locale`): merge to `main` whenever the user
   decides. ~246 + a few `// REVIEW`-marked French/German strings still want a
   native review pass (offer to generate an EN→FR/DE side-by-side sheet).
4. **Shopify deploy hook** for auto-rebuild on product changes (ops, user-side;
   walk them through it).
5. Optional: native French copy review; chase the pre-existing #418.

---

## 8. Key references

- `CLAUDE.md` → read `ATTIMO-DESIGN-SYSTEM.md` (cream `#FFFAEA`, forest green
  `#1B4229`, chartreuse `#CDDB2D`; Beverly Drive script headings, UDC Working
  Man Sans block-caps labels, Space Grotesk body) and `ATTIMO-I18N-SPEC-V2.md`.
- Shopify store `00xpv6-0j.myshopify.com` (storefront `shop.attimo-oil.com`);
  GitHub `QuashingQuasar/attimo` is `origin`; Vercel project under
  `quashingquasars-projects/attimo`; production at `attimo-oil.com`.
