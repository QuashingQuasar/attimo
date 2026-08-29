// Generates the best-before vs harvest-date timeline figure for the olive oil myths post.
// Render to PNG with headless Chrome afterwards (same flow as gen-ozempic-figures.mjs).
import { writeFileSync } from "node:fs";

const GREEN = "#1B4229", CREAM = "#FFFAEA", CHART = "#CDDB2D", SAGE = "#9DAE84";
const FONT = `font-family="'Space Grotesk', system-ui, sans-serif"`;

const W = 720, H = 430;
const x0 = 56, x1 = 664, base = 316;
const months = 38, pxm = (x1 - x0) / months;
const mx = (m) => x0 + m * pxm;

const BOTTLE_M = 14; // months in tanks before bottling
const BB_M = BOTTLE_M + 22; // best-before ~22 months after bottling

// decay curve: freshness high at harvest, exponential-ish fade
const decayY = (m) => 132 + (base - 20 - 132) * (1 - Math.exp(-m / 13));
let decay = `M${x0},${decayY(0).toFixed(1)} `;
for (let m = 1; m <= months; m++) decay += `L${mx(m).toFixed(1)},${decayY(m).toFixed(1)} `;
const decayFill = decay + `L${x1},${base} L${x0},${base} Z`;

const ticks = [0, 6, 12, 18, 24, 30, 36].map((m) => `<line x1="${mx(m).toFixed(1)}" y1="${base}" x2="${mx(m).toFixed(1)}" y2="${base + 5}" stroke="${GREEN}" stroke-width="1" opacity="0.35"/>
<text x="${mx(m).toFixed(1)}" y="${base + 20}" font-size="11" fill="${GREEN}" opacity="0.5" text-anchor="middle">${m === 0 ? "harvest" : m + " mo"}</text>`).join("\n");

const svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="ttl desc">
<title id="ttl">The best-before date measures the wrong thing</title>
<desc id="desc">Timeline of 38 months. Freshness starts falling the day the olives are pressed. The oil sits in tanks for months, is bottled at month fourteen, and only then gets a best-before date stamped 18 to 24 months ahead. By the printed date the oil is three years old.</desc>
<rect x="0" y="0" width="${W}" height="${H}" fill="${CREAM}"/>
<g ${FONT}>
<text x="28" y="44" font-size="26" font-weight="700" fill="${GREEN}">The best-before date measures the wrong thing</text>
<text x="28" y="68" font-size="14" fill="${GREEN}" opacity="0.55">It counts 18–24 months from bottling — but the oil starts fading at harvest</text>

<!-- decay area: what's left of the oil -->
<path d="${decayFill}" fill="${CHART}" fill-opacity="0.5"/>
<path d="${decay}" fill="none" stroke="${GREEN}" stroke-width="2.2"/>
<text x="${mx(1).toFixed(1)}" y="260" font-size="13" font-weight="700" fill="${GREEN}">aroma &amp; polyphenols left in the oil</text>

<!-- tank storage band -->
<rect x="${x0}" y="${base - 14}" width="${(mx(BOTTLE_M) - x0).toFixed(1)}" height="14" fill="${SAGE}" fill-opacity="0.45"/>
<text x="${mx(BOTTLE_M / 2).toFixed(1)}" y="${base - 24}" font-size="11" fill="${GREEN}" opacity="0.65" text-anchor="middle">tank storage, sometimes pooled across harvests</text>

<!-- baseline + ticks -->
<line x1="${x0}" y1="${base}" x2="${x1}" y2="${base}" stroke="${GREEN}" stroke-width="1" opacity="0.3"/>
${ticks}

<!-- harvest marker -->
<line x1="${x0}" y1="${base}" x2="${x0}" y2="${decayY(0) - 8}" stroke="${GREEN}" stroke-width="1.6" opacity="0.75"/>
<circle cx="${x0}" cy="${decayY(0).toFixed(1)}" r="4.5" fill="${GREEN}"/>
<text x="${x0}" y="${decayY(0) - 16}" font-size="13" font-weight="700" fill="${GREEN}">Harvest — olives pressed, the clock starts</text>

<!-- bottling marker -->
<line x1="${mx(BOTTLE_M).toFixed(1)}" y1="${base}" x2="${mx(BOTTLE_M).toFixed(1)}" y2="176" stroke="${GREEN}" stroke-width="1.6" opacity="0.75" stroke-dasharray="4 3"/>
<circle cx="${mx(BOTTLE_M).toFixed(1)}" cy="${decayY(BOTTLE_M).toFixed(1)}" r="4.5" fill="${GREEN}"/>
<text x="${mx(BOTTLE_M).toFixed(1)}" y="168" font-size="13" font-weight="700" fill="${GREEN}">Bottling — best-before stamped here</text>

<!-- +18-24 months bracket from bottling to best-before -->
<g opacity="0.8">
<line x1="${mx(BOTTLE_M).toFixed(1)}" y1="238" x2="${mx(BB_M).toFixed(1)}" y2="238" stroke="${GREEN}" stroke-width="1.4"/>
<line x1="${mx(BOTTLE_M).toFixed(1)}" y1="232" x2="${mx(BOTTLE_M).toFixed(1)}" y2="244" stroke="${GREEN}" stroke-width="1.4"/>
<path d="M${(mx(BB_M) - 8).toFixed(1)},233 L${mx(BB_M).toFixed(1)},238 L${(mx(BB_M) - 8).toFixed(1)},243 Z" fill="${GREEN}"/>
</g>
<text x="${mx((BOTTLE_M + BB_M) / 2).toFixed(1)}" y="230" font-size="12" font-weight="600" fill="${GREEN}" opacity="0.8" text-anchor="middle">+ 18–24 months, fixed window</text>

<!-- best-before marker -->
<line x1="${mx(BB_M).toFixed(1)}" y1="${base}" x2="${mx(BB_M).toFixed(1)}" y2="252" stroke="${GREEN}" stroke-width="1.6" opacity="0.75" stroke-dasharray="4 3"/>
<text x="${(mx(BB_M) - 6).toFixed(1)}" y="262" font-size="13" font-weight="700" fill="${GREEN}" text-anchor="end">"Best before" — the oil is 3 years old</text>

<text x="28" y="${H - 34}" font-size="11" fill="${GREEN}" opacity="0.45">Illustrative timeline for a typical supermarket oil. EU rule: a printed harvest date guarantees every drop is from that harvest.</text>
<text x="28" y="${H - 18}" font-size="11" fill="${GREEN}" opacity="0.45">attimo-oil.com</text>
</g>
</svg>`;
writeFileSync(new URL("./chart-best-before-vs-harvest.svg", import.meta.url).pathname, svg);
console.log("written: chart-best-before-vs-harvest.svg");
