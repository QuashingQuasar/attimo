# Handoff — Attimo

Last touched: 2026-06-02. `main` is at `bfe5399`. Working tree clean.

---

## 1. Objective

No single in-flight task. The session shipped a series of polish/ops
changes (hero, announce bar, locales, volume discounts, Coratina
preorder) and leaves two branches open:

- **`feature/hero-text-content`** — preview-only iteration on a new
  hero (text-based H1 + subheader instead of the logo lockup).
  Gilles is brewing on copy + layout; nothing about it is final.
- **`feature/announce-bar-volume`** — explicitly parked. Adds a
  "SAVE UP TO 15% ON 3+ BOTTLES" half to the announce bar. Gilles
  decided premium positioning matters more than the conversion push
  on a top-of-page banner, but may revisit.

"Done" for either branch means Gilles approves the visual and says
"ship" — both are pure-frontend, no backend dependency.

---

## 2. State right now

### Shipped to production (verified by Vercel deploy)

- **Announce bar — mobile font size**: 20px → 15px, padding tightened.
  Last commit `bfe5399`. Desktop sizing (22px) untouched.
- **Coratina preorder messaging**: `shippingNotice: "Ships in 5–7 days"`
  field on Coratina in `productContent.ts`. Renders as a line under
  the PDP Add-to-Cart button AND as a chartreuse/dark-green badge on
  the homepage card. Picual / Nocellara have `shippingNotice`
  undefined → default "Order today, ships tomorrow" + no badge.
  **Will need to be removed** when Coratina restock arrives (Gilles
  will bump Shopify stock manually first).
- **Free-shipping nudge copy nuance**: PDP Add-to-Cart subtext drops
  "MORE" when cart is empty ("ADD 2 BOTTLES FOR FREE SHIPPING"),
  keeps "MORE" once cart has ≥1 bottle. Cart drawer at
  `CartDrawer.tsx:314` still uses the old "Add N more bottles"
  phrasing — **not changed**, scope was PDP-only.
- **Hero**: ticker now fits in viewport (announce-bar height measured
  via JS, fed into `--announce-bar-h` CSS var, hero & inner content
  subtract it from their `calc(100vh - ...)`). Mobile bottle image on
  PDPs shrunk to `h-[50vh]` from `h-[75vh]`.
- **Sweden locale (`/se/`)**: added as third entry in `LOCALES[]` with
  SEK pricing (Coratina 270 / Nocellara 260 / Picual 250). All
  derivative behaviour — middleware geo-redirect, hreflang, sitemap
  cluster, currency selector, locale-prefixed page paths — wired in
  automatically because they all iterate `LOCALES`.
- **DKK price update**: Coratina 183→190, Nocellara 175→180, Picual
  168→170.
- **Volume discounts**: 3/4/6/8 bottle tiers at 5/8/12/15%.
  Chartreuse "−X%" badge straddling the top edge of each preset.
  Applied to PDP Add-to-Cart total and CartDrawer subtotal with 2-decimal
  display when discount is active. **Shopify side requires matching
  automatic-discount config** for the checkout total to agree (see
  Gotchas).
- **Polyphenols tooltip**: "BIOACTIVE POLYPHENOLS" label + info-icon
  HoverCard on Coratina + Nocellara only. Picual stays "POLYPHENOLS"
  with no tooltip (lab data pending for that variety).
- **Header non-sticky**: was `position: fixed`, now `position: absolute`
  with all React page roots given `position: relative` as positioning
  context. Header scrolls away with the page. Announce bar also
  scrolls away (no more display:none-on-scroll jank).
- **Blog pages now use React Header**: previously rendered the static
  `Header.astro` which had a generic shopping-bag SVG, no
  drawer-toggle, no Shop dropdown. Now use the React `Header` with
  `client:load forceScrolled`.

### In-progress / parked

- **`feature/hero-text-content`** (11 commits ahead of main): H1
  "OLIVE OIL THE WAY IT SHOULD BE" set in UDC Working Man Sans 400,
  subheader in Space Grotesk. Left-aligned, vertically positioned
  ~75% from the top of the available hero area via `mt-32 md:mt-40
  lg:mt-48`. CTA preserved. Copy is "working draft" — Gilles is
  iterating. **Do not merge without explicit approval.**
- **`feature/announce-bar-volume`** (2 commits ahead): adds volume
  discount to the announce bar, includes a font-weight fix
  (UDC Working Man Sans only has 400 weight loaded — 700 is
  synthetic). Parked. Don't touch unless asked.

### Untested / uncertain

- **Shopify automatic-discount config**: Gilles' Shopify dashboard
  showed a `"8% OFF 4+ BOTTLES (−€4.40)"` line, but €4.40 on €88 is
  actually 5%. The discount rule label and the percentage applied
  disagree on Shopify. Frontend `VOLUME_DISCOUNT_PERCENTS` reflects
  the labels (3→5%, 4→8%, 6→12%, 8→15%) — Shopify needs to be
  reconciled to match. Cart drawer total will mismatch checkout total
  until that's done.
- **SE shipping numbers** (`standard: 99`, `freeThreshold: 550` in
  SEK) are estimates scaled from DK. Replace with real carrier
  quotes when available.
- **Vercel `BREVO_API_KEY` in Production env** — required for
  `/api/notify` (restock waitlist) to actually reach Brevo at
  checkout. Was added to `.env.local` for dev but **not confirmed**
  added to Vercel production env. Test by submitting the form on a
  prod page; the endpoint returns `{error: "Notify service not
  configured"}` 500 if missing.

---

## 3. Decisions made (and why)

- **Sticky header dropped in favour of in-flow header**. After three
  failed CSS attempts, the working answer was `position: absolute`
  on the React Header with every React page root forced to
  `position: relative` so the header has a positioning context
  inside `overflow-y-scroll` scroll containers. Without
  `position: relative` on the ancestor, `position: absolute` falls
  back to the viewport's initial containing block and behaves
  identically to `position: fixed`.
- **Announce bar stays statically positioned and scrolls away** with
  content. Previously had a `display: none` on scroll which caused a
  layout shift on the user's first scroll input (the source of the
  jank Gilles flagged). Killing that script eliminated the jank;
  measuring its rendered height into `--announce-bar-h` keeps the
  hero/ticker fit calc accurate.
- **Volume discount lives client-side as DISPLAY ONLY**. Shopify is
  responsible for the actual discount at checkout. Display computes
  via `getVolumeDiscountPercent(qty)` from
  `src/components/QuantitySelector.tsx`. Single source of truth.
- **Per-line, not cart-wide** volume discount. Discount is keyed off
  each line's `item.quantity`. A cart with 4 Coratinas + 4 Picuals
  gets 8% on each line (not 15% on the combined 8 bottles).
  Standard Shopify automatic-discount pattern; cart-wide tiers
  would need Shopify Functions / paid app.
- **2-decimal display when discount active**. EUR/DKK/SEK locale
  decimals default to 0 for clean prices, but rounded display
  diverged from Shopify checkout's cent-exact total by up to €0.50
  per line. Volume-discounted totals now render with 2 decimals so
  customer-facing math matches.
- **Locale architecture: `LOCALES` is the only thing to edit**. Adding
  Sweden was a one-config-entry change — middleware, hreflang,
  sitemap, currency selector, and page-generators all iterate the
  array. Future locales follow the same pattern.
- **Sitemap emits xhtml:link hreflang clusters** per locale-variant
  URL. `pathHasLocaleVariants(loc)` decides which static URLs get the
  cluster treatment.
- **Header API back-compat preserved**: `forceTransparent`, `darkNav`,
  `onWaitlistClick`, `forceScrolled` all kept as accepted props even
  though most no longer drive styling — existing call sites stay
  unmodified.
- **Hero text iteration explicitly NOT being pushed to main**.
  Gilles wants to see it brewing on a branch while finalising copy.
- **Announce-bar volume discount explicitly ruled out** (for now).
  Gilles' reasoning: most homepage landings are content-discovery,
  not buying intent. Putting a discount headline above the fold
  contradicts premium positioning. Discount surfaces on PDPs where
  buying decision is already in play.

---

## 4. Files (current snapshot)

**Working tree**: clean.
**On `main`**: `bfe5399` (announce bar mobile size merge).

Touched this session and merged to main:

| File | What changed |
|---|---|
| `src/astro/layouts/BaseLayout.astro` | Announce bar JS measures height into `--announce-bar-h`; mobile font 15px; non-sticky-header refactor support |
| `src/components/Header.tsx` | `position: absolute`, scroll listener removed, `isScrolled` state gone, `forceScrolled` drives solid bg, blog now uses this |
| `src/components/Hero.tsx` | Inner content height calc subtracts announce bar; mobile image shrink unrelated though |
| `src/components/QuantitySelector.tsx` | Volume discount badge (top-edge chartreuse pill), 6-bottle tier, `VOLUME_DISCOUNT_PERCENTS`, `getVolumeDiscountPercent` export |
| `src/components/CartDrawer.tsx` | `localizedLineTotal` applies volume discount; strikethrough on subtotal when discount active |
| `src/components/OilProductWidgets.tsx` | Homepage cards fetch Shopify availability; `shippingNotice` badge; OOS state with greyed bottle + "Back Soon" |
| `src/astro/react-pages/ProductPage.tsx` | Per-product OOS copy via `OOS_COPY` map, JSON-LD availability from Shopify, `shippingNotice` line render, free-ship copy with empty-cart "MORE" handling |
| `src/astro/react-pages/HomePage.tsx`, `ProductPage.tsx`, `ContactPage.tsx`, `PrivacyPolicy.tsx`, `TermsOfService.tsx`, `ShippingPage.tsx`, `AmbassadorsPage.tsx` | Each React root gained `position: relative` for the non-sticky header |
| `src/pages/blog/index.astro`, `src/pages/blog/[slug].astro` | Swapped Astro Header for React Header with `client:load forceScrolled` |
| `src/lib/i18n/config.ts` | SE locale added; DKK prices updated; `formatPrice` gained `decimalsOverride` param |
| `src/lib/productContent.ts` | `shippingNotice?: string` field on `ProductContent`; Coratina set to "Ships in 5–7 days"; "BIOACTIVE POLYPHENOLS" relabel for Coratina + Nocellara |
| `src/pages/sitemap.xml.ts` | Locale-variant URLs emit per-locale with xhtml:link hreflang cluster |
| `src/pages/product/[handle].astro` | JSON-LD `availability` from Shopify `availableForSale`; meta description uses dynamic price |
| `src/pages/api/notify.ts` | New endpoint — direct Brevo POST `/v3/contacts` with `listIds: [6]`, `updateEnabled: true` |
| `src/components/NotifyMeForm.tsx` | Rewrites to use `/api/notify`; dark-green container; chartreuse button matching per-product `buttonColor` |
| `public/sitemap-blog.xml` | Static SEO sitemap for 5 hand-picked blog posts (gated out of dynamic sitemap via `BLOG_SITEMAP_SLUGS`) |
| `src/pages/robots.txt.ts` | Two `Sitemap:` directives (main + blog) |

Open branches with unmerged work:

- `feature/hero-text-content` (origin, 11 commits ahead): new hero
  with text H1 + subheader, left-aligned, positioned ~75% from top.
  Working draft.
- `feature/announce-bar-volume` (origin, 2 commits ahead): adds
  "SAVE UP TO 15% ON 3+ BOTTLES" to announce bar + drops synthetic
  bold. Parked.
- `feature/non-sticky-header` (origin, 2 commits ahead): broken
  earlier attempt at non-sticky header. Superseded by
  `feature/non-sticky-header-v2` which IS merged to main. Safe to
  delete remotely.

---

## 5. Next steps

Pick depending on what Gilles asks:

1. **If continuing hero redesign**: check out
   `feature/hero-text-content`, run `npm run dev`, open
   http://localhost:4321. Gilles will likely propose further copy
   or layout changes. He has indicated the current state is "brewing"
   — don't infer from this branch's existence that it should be
   merged.
2. **When Coratina restock arrives**: Gilles will bump Shopify stock
   manually first. Then remove `shippingNotice: "Ships in 5–7 days"`
   line from Coratina entry in `src/lib/productContent.ts` (line ~92
   area). One-line PR, ship to main.
3. **Reconcile Shopify discount rules**: 3+→5%, 4+→8%, 6+→12%,
   8+→15%. Currently the "8% OFF 4+ BOTTLES" rule on Gilles' Shopify
   dashboard is applying 5% — needs to be fixed in admin. Until then,
   PDP Add-to-Cart and CartDrawer subtotal will quote a different
   number than checkout.
4. **Add `BREVO_API_KEY` to Vercel Production env** if not already
   done. Without it `/api/notify` returns 500 and the restock
   waitlist breaks silently.
5. **Branch hygiene**: delete `feature/non-sticky-header` remotely —
   it's dead code. Other merged branches can stay or be cleaned at
   leisure.

---

## 6. Gotchas & context

- **`feature/non-sticky-header` (without -v2)** is a graveyard
  branch from a failed attempt. The v2 is what shipped. Don't try
  to merge or rebase the v1 branch.
- **Vercel preview URLs hash-truncate for long branch slugs**.
  `attimo-git-<slug>-quashingquasars-projects.vercel.app` works if
  the slug fits — when it doesn't, Vercel substitutes a hash. Always
  run `vercel inspect <deployment-url>` to get the real Aliases
  field before sharing a preview URL.
- **Vercel deployment protection (401 on curl)**: preview URLs are
  auth-gated. Logged-in Gilles can view them in browser; `curl` from
  CLI gets 401. To inspect server-rendered HTML, run `npm run build`
  locally and read `dist/client/**/index.html` instead.
- **UDC Working Man Sans only has weight 400 loaded** in `global.css`.
  Anywhere `font-weight: 700` is set on this font, the browser
  fakes bold by smearing the 400 glyph. The Light cut is loaded as
  a SEPARATE family `'UDC Working Man Sans Light'` at weight 300,
  not a weight on the same family.
- **The font visually renders ALL-CAPS regardless of source casing**.
  H1 source can be "Olive Oil The Way It Should Be" — it'll still
  appear as "OLIVE OIL THE WAY IT SHOULD BE". This is the font's
  design.
- **Vercel ↔ GitHub webhook occasionally misses pushes**. Symptom:
  push lands on GitHub (`git ls-remote` confirms), no Vercel build
  appears, GitHub's check-runs API returns `total_count: 0` for
  the commit. Fix: push an empty commit (`git commit --allow-empty
  -m "Retrigger" && git push`). Has happened twice this session.
- **Build classifier sometimes outages mid-session** ("auto mode
  cannot determine the safety of Bash"). Wait and retry; not a
  code issue.
- **`HomePage` and most other React pages use `overflow-y-scroll
  h-screen` as their root**, which makes them their own scroll
  container — NOT body. The hero uses `el.closest('.overflow-y-scroll')`
  for scroll-snap behaviour. Removing the `overflow-y-scroll` would
  break that. The `position: relative` we added gives absolute
  children (the Header) a positioning context inside the scroll
  container.
- **Volume discount is per-line by design**. Don't change to
  cart-wide without coordinating with Shopify config — cart UI and
  checkout total will diverge.
- **Shopify checkout currency** is server-side: `cartCreate` does NOT
  pass `buyerIdentity`. Whether DKK or SEK shows at checkout for
  DK/SE customers depends on Shopify Markets being configured to
  present those currencies. Not a code concern; ops concern.
- **Astro 5 has no `hybrid` output mode**. To make a single route
  server-rendered while the rest stays static, use `output: "static"`
  + `export const prerender = false;` per-route. `/api/notify` and
  `/api/contact` do this.
- **TEMP_PREVIEW comment convention** was used during this session
  for short-lived overrides (forcing OOS/in-stock visual states).
  All TEMP_PREVIEW markers have been removed from main as of this
  handoff. If you re-introduce one, use the same prefix so it's
  grep-able for cleanup.
- **`HarvestProduct.tsx`** is dead code (not imported anywhere) but
  contains hardcoded €24 prices. Left alone — harmless, but if
  refactoring, delete the file.

---

## 7. Key references

In-repo:

- `CLAUDE.md` — tells you to read `ATTIMO-DESIGN-SYSTEM.md` and
  `ATTIMO-I18N-SPEC-V2.md` before substantial work.
- `ATTIMO-DESIGN-SYSTEM.md` — brand visual language, colors, fonts.
- `ATTIMO-I18N-SPEC-V2.md` — the localization spec the SE locale
  work was built on.
- `src/lib/i18n/config.ts` — single source for locale prices,
  shipping, currency, hreflang generation.
- `src/components/QuantitySelector.tsx` — `VOLUME_DISCOUNT_PERCENTS`
  is the volume-discount truth.
- `src/lib/productContent.ts` — per-product copy + `shippingNotice`
  field.
- `src/lib/shipping.ts` — country → free-shipping bottle threshold
  (independent of locale config; used by cart drawer + announce bar
  + middleware cookie).
- `middleware.ts` — geo-redirect to `/dk/` `/se/`, sets
  `attimo_shipping_tier` cookie.

External:

- Vercel project: `prj_fBwH5FzDA0unrWF4MBGolAaKQWMM`
  (`quashingquasars-projects/attimo`). Gilles' email
  `declerckgilles@gmail.com` receives deploy notifications;
  `gillesdc@hey.com` is blocked as a non-member identity.
- GitHub: `QuashingQuasar/attimo` is `origin`.
  `gilles-attimo/attimo` is `gilles-attimo-backup` remote.
- Sanity project: `25tuybj3` / dataset `production`. Blog content
  lives here. Sanity webhook → Vercel rebuild **not configured** —
  publishing in Studio is silent for the live site until a
  deploy is triggered. Gilles knows this.
- Shopify store: `00xpv6-0j.myshopify.com` (storefront domain
  `shop.attimo-oil.com`). Storefront API token is hardcoded in
  `src/lib/shopify.ts` (public token, fine to commit). Admin work
  (discount rules, inventory) happens in Shopify dashboard.
- Brevo: list ID 6 is the restock-notification list used by
  `/api/notify`.
- Recent production deploys are at `attimo-oil.com`.

---

Last commit on main: `bfe5399 Merge branch
'feature/announce-bar-mobile-size' into main`.
