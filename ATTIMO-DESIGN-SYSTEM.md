# Attimo Design System

Reference file for Claude Code and any AI-assisted development on attimo-oil.com.

## Colors

| Token | Hex | Usage |
|---|---|---|
| Background | `#FFFAEA` | Warm cream — page background. NEVER white or dark. |
| Primary | `#1B4229` | Dark forest green — text, dark sections, navbar, footer |
| Accent | `#CDDB2D` | Chartreuse — CTAs, highlights, active states |
| Text on cream | `#1B4229` | Dark green on cream background |
| Text on dark | `#FFFAEA` | Cream on dark green background |

## Typography

| Font | Usage | Notes |
|---|---|---|
| Space Grotesk | Body text, paragraphs, UI | Google Font, primary typeface |
| Beverly Drive | Script headings, emotional/hero text | Self-hosted, decorative script |
| UDC Working Man Sans | Block caps labels, section tags, small caps | Self-hosted, industrial feel |

**Fallbacks for standalone HTML (outside Astro repo):**
- Beverly Drive → Caveat (Google Fonts)
- UDC Working Man Sans → Oswald (Google Fonts)

## CTAs

- Background: `#CDDB2D` (chartreuse)
- Text: `#1B4229` (dark green)
- Always chartreuse on dark green, never reversed
- Rounded corners, generous padding

## Layout Patterns

- **Section rhythm:** Alternate between cream (`#FFFAEA`) and dark green (`#1B4229`) background sections
- **Spacing:** Generous padding — don't crowd elements. Every section should comfortably fit within one viewport.
- **Navbar:** Dark green background, cream text, fixed
- **Footer:** Dark green background, matches navbar tone
- **Breakpoints:** Mobile-first — mobile default, `md:` tablet, `lg:` desktop
- **No transform/scale** — use native sizing or zoom only at section level

## When Building a New Page

1. Use warm cream (`#FFFAEA`) as page background — NEVER white or dark
2. Use the three-font system: Beverly Drive for emotional headings, UDC Working Man Sans for labels/caps, Space Grotesk for everything else
3. CTAs are always chartreuse with dark green text
4. Alternate between cream and dark green sections for visual rhythm
5. Keep it spacious — generous padding, don't crowd elements
6. Match the navbar and footer exactly (dark green, same structure)
7. Before proposing any visual changes, reference the live site at attimo-oil.com first
