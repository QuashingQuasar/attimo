# Attimo Design System

Reference for Claude Code and any AI-assisted development on attimo-oil.com.

**Rewritten 2026-09-21 by auditing the live site and the component source.** The
previous version was incomplete and caused real mistakes (Space Grotesk in
headings, two fonts inside one heading, invented FAQ markup). Where this file
and your instinct disagree, this file wins. Where this file and the live site
disagree, **the live site wins — go read it and update this file.**

---

## 1. The three fonts, and where each one goes

This is the rule that gets broken most. Read it twice.

| Font | Used for | Never used for |
|---|---|---|
| **UDC Working Man Sans** | **Every H1 and H2 on the site, without exception.** Also: eyebrow labels, buttons, H3s in content cards, numeric/stat labels. | Body copy, paragraphs. |
| **Space Grotesk** | Body text, paragraphs, lead-ins, table cells, FAQ answers, UI text. | **Headings. Ever.** |
| **Beverly Drive** (script) | Whole decorative elements only: product/variety names ("Coratina d'Italia"), the Testimonials heading, the default FAQ heading, the "vs" connector in "ATTIMO *vs* Others", header flourishes. | Emphasising a phrase inside a content heading. |

**Absolute rules:**

1. **Never mix two fonts inside one heading.** A heading is set in one typeface.
   The single exception that exists on the site is the one-word connector "vs" —
   do not generalise from it.
2. **Never set a heading in Space Grotesk.**
3. **Do not reach for Beverly Drive unless you are copying an existing usage.**
   If you are unsure whether it belongs, it does not. Default to UDC.
4. **Headings never end in a full stop.** Live examples: "Why our polyphenols
   stay high", "Don't take our word for it", "The compounds that matter".

### Measured values from the live site

```
H1   UDC Working Man Sans · weight 300 · clamp(2rem, 3.5vw, 3.7rem)
     letter-spacing ≈ -0.025em (tracking-tight) · line-height 1.0–1.05
H2   UDC Working Man Sans · weight 300 (or 700 for punchier sections)
     clamp(1.9rem, 3vw, 3.2rem) · letter-spacing ≈ -0.025em · line-height 1.05
H3   UDC Working Man Sans weight 700 ≈ 14–18px for content cards
     Beverly Drive ≈ 28px, letter-spacing 0.04em for product names
Eyebrow / label
     UDC Working Man Sans · ~11.5px · UPPERCASE · letter-spacing ≈ 0.22em
     colour: #CDDB2D on dark, #1B4229 at 55% on cream
Body UDC → no. Space Grotesk · 16–19px · normal letter-spacing
     colour rgba(27,66,41,0.78) on cream, rgba(255,250,234,0.78) on green
Lead Space Grotesk · clamp(1.05rem, 1.25vw, 1.3rem)
```

Fallbacks for standalone HTML outside the repo: Beverly Drive → Caveat,
UDC Working Man Sans → Oswald (both Google Fonts).

---

## 2. Colours

| Token | Hex | Usage |
|---|---|---|
| Cream | `#FFFAEA` | Default page background. Never white, never dark. |
| Cream (alt) | `#FFFCEB` | Occasional second cream for adjacent sections. |
| Green | `#1B4229` | Primary. Text on cream, dark section backgrounds, navbar, footer. |
| Deep green | `#10221B` | Near-black green for the darkest sections (hero bands). |
| Chartreuse | `#CDDB2D` | CTAs, accents, eyebrow text on dark, occasional full section background. |
| Lime | `#B3E58C` | Soft accent sections and highlight chips. |
| Amber | `#ECA948` | Nocellara's warm accent. Variety-specific only. |

**Contrast rules — these were violated and produced unreadable output:**

- Never put green text on a green background, at any opacity.
- Never put a chartreuse heading on a cream background (it vanishes).
- On `#1B4229` sections: headings `#FFFAEA` or `#CDDB2D`, body
  `rgba(255,250,234,0.78–0.85)`.
- On cream sections: headings `#1B4229`, body `rgba(27,66,41,0.78)`.
- Card on cream = white `#FFFFFF` with a `#1B4229` border, or
  `rgba(27,66,41,0.05)` fill. Card on green = `rgba(255,250,234,0.07)`.
- Before shipping, check every text/background pair for actual contrast.

---

## 3. Buttons and CTAs

```
Font       UDC Working Man Sans (not Space Grotesk)
Radius     8px for rectangular CTAs · 9999px for pill selectors
Primary    background #CDDB2D · text #1B4229
Secondary  background #1B4229 · text #FFFAEA
Ghost      transparent · text rgba(27,66,41,0.55) · used for inactive pills
Size       15–19px · letter-spacing ≈ 0.05em · generous padding
```

Chartreuse-on-green or green-on-cream. Never reverse chartreuse text onto cream.

---

## 4. Reuse components, do not invent markup

Before building any block, check whether it already exists. Inventing a parallel
implementation is itself a design-system violation.

| Need | Use | Notes |
|---|---|---|
| FAQ | `src/components/FAQ.tsx` | Accepts `items`, `heading`, `headingFontFamily`. Radix accordion, white cards with `#1B4229` border on a cream section, `max-w-4xl`. **Do not hand-roll `<details>`.** |
| Header | `src/components/Header.tsx` (React, `forceScrolled`) or `src/astro/components/Header.astro` (static) | |
| Footer | `src/astro/components/Footer.astro` | Locale-aware. |
| Layout + SEO | `src/astro/layouts/BaseLayout.astro` | Handles canonical, hreflang, JSON-LD, announce bar. |
| Product widgets | `OilProductWidgets.tsx`, `BundleWidgets.tsx` | |
| Comparison blocks | `PolyphenolComparison.tsx`, `OilComparison.tsx` | |

Closest full-page pattern for a content/authority page:
`src/astro/react-pages/HighPolyphenolPage.tsx` with
`src/lib/highPolyphenolHubContent.tsx`.

---

## 5. Layout

- Section rhythm alternates cream and green; deep green and lime appear for
  emphasis bands. Each section should read as its own screen.
- Containers: `container mx-auto px-6`, `max-w-4xl` for text, `max-w-5xl`/`6xl`
  for grids and tables.
- Generous vertical padding. Do not crowd.
- Mobile-first: default, then `md:`, then `lg:`.
- No transform/scale for sizing; use native sizing.
- **Tables must fit without horizontal scrolling on desktop.** If a table needs
  more than ~7 columns, split it, stack it into cards on mobile, or drop columns
  that do not serve the reader.

---

## 6. Checklist before shipping a new page

1. Cream `#FFFAEA` background — never white, never dark.
2. Every H1/H2 in UDC Working Man Sans, one font per heading, no trailing period.
3. Body in Space Grotesk, 16px+.
4. Beverly Drive only where an existing component already uses it.
5. Every text/background pair contrast-checked; no green-on-green.
6. Existing components reused rather than re-implemented.
7. CTAs chartreuse with green text, UDC, 8px radius.
8. No new colour tokens.
9. Compare against the live site before calling it done.
