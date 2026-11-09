// Single-variety post: (1) flavour map of olive varieties, (2) measured polyphenols of single-variety oils from the Index.
// Render to PNG with headless Chrome afterwards (same flow as gen-myths-figure.mjs).
import { writeFileSync } from "node:fs";
const GREEN = "#1B4229", CREAM = "#FFFAEA", CHART = "#CDDB2D", SAGE = "#9DAE84";
const FONT = `font-family="'Space Grotesk', system-ui, sans-serif"`;
const out = (name, svg) => writeFileSync(new URL(`./${name}`, import.meta.url).pathname, svg);

// 1. Flavour map. x: mild -> robust (bitterness and pepper). y: ripe fruit (bottom) -> green (top).
// Positions are approximate, for early-harvest oils of each variety.
{
  const W = 720, H = 620;
  const L = 80, R = 680, T = 125, B = 560;
  const px = (x) => L + x * (R - L), py = (y) => B - y * (B - T);
  const v = [
    { n: "Coratina", c: "Italy", x: 0.93, y: 0.82, hero: true },
    { n: "Koroneiki", c: "Greece", x: 0.82, y: 0.70 },
    { n: "Chetoui", c: "Tunisia", x: 0.88, y: 0.92 },
    { n: "Moraiolo", c: "Italy", x: 0.76, y: 0.88 },
    { n: "Picual", c: "Spain", x: 0.70, y: 0.58, hero: true },
    { n: "Frantoio", c: "Italy", x: 0.56, y: 0.77 },
    { n: "Picholine", c: "France", x: 0.47, y: 0.64 },
    { n: "Nocellara", c: "Italy", x: 0.40, y: 0.50, hero: true },
    { n: "Kalamon", c: "Greece", x: 0.62, y: 0.30 },
    { n: "Hojiblanca", c: "Spain", x: 0.36, y: 0.33 },
    { n: "Leccino", c: "Italy", x: 0.24, y: 0.40 },
    { n: "Manaki", c: "Greece", x: 0.15, y: 0.56 },
    { n: "Galega", c: "Portugal", x: 0.13, y: 0.16 },
    { n: "Arbequina", c: "Spain", x: 0.07, y: 0.30 },
  ];
  const dots = v.map((o) => {
    const x = px(o.x), y = py(o.y);
    const anchor = o.x > 0.85 ? "end" : "start", dx = o.x > 0.85 ? -12 : 12;
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${o.hero ? 8 : 6}" fill="${o.hero ? CHART : SAGE}" ${o.hero ? `stroke="${GREEN}" stroke-width="1.4"` : 'fill-opacity="0.85"'}/>
<text x="${(x + dx).toFixed(1)}" y="${(y + 4).toFixed(1)}" font-size="13" ${o.hero ? 'font-weight="700"' : ""} fill="${GREEN}" text-anchor="${anchor}">${o.n}<tspan font-size="11" opacity="0.5" font-weight="400"> ${o.c}</tspan></text>`;
  }).join("\n");
  const svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="t d">
<title id="t">How olive varieties taste</title>
<desc id="d">Map of fourteen olive varieties. Left to right runs from mild to bitter and peppery; bottom to top runs from ripe fruit flavours to green ones. Coratina, Chetoui and Koroneiki sit top right; Arbequina, Galega and Leccino sit bottom left; Nocellara sits near the centre.</desc>
<rect width="${W}" height="${H}" fill="${CREAM}"/>
<g ${FONT}>
<text x="28" y="44" font-size="26" font-weight="700" fill="${GREEN}">How olive varieties taste</text>
<text x="28" y="72" font-size="14" fill="${GREEN}" opacity="0.6">Bitterness and pepper come from polyphenols, so the further right a variety sits,</text>
<text x="28" y="90" font-size="14" fill="${GREEN}" opacity="0.6">the more polyphenols its oil tends to carry. Positions are approximate, for early-harvest oil.</text>
<line x1="${L}" y1="${B}" x2="${R}" y2="${B}" stroke="${GREEN}" stroke-width="1" opacity="0.25"/>
<line x1="${L}" y1="${T}" x2="${L}" y2="${B}" stroke="${GREEN}" stroke-width="1" opacity="0.25"/>
<line x1="${px(0.5)}" y1="${T}" x2="${px(0.5)}" y2="${B}" stroke="${GREEN}" stroke-width="1" opacity="0.07"/>
<line x1="${L}" y1="${py(0.5)}" x2="${R}" y2="${py(0.5)}" stroke="${GREEN}" stroke-width="1" opacity="0.07"/>
<text x="${L}" y="${B + 24}" font-size="11" font-weight="700" letter-spacing="2" fill="${GREEN}" opacity="0.55">MILD</text>
<text x="${R}" y="${B + 24}" font-size="11" font-weight="700" letter-spacing="2" fill="${GREEN}" opacity="0.55" text-anchor="end">BITTER AND PEPPERY</text>
<text x="${L - 14}" y="${B}" font-size="11" font-weight="700" letter-spacing="2" fill="${GREEN}" opacity="0.55" transform="rotate(-90 ${L - 14} ${B})">RIPE FRUIT, ALMOND</text>
<text x="${L - 14}" y="${T}" font-size="11" font-weight="700" letter-spacing="2" fill="${GREEN}" opacity="0.55" text-anchor="end" transform="rotate(-90 ${L - 14} ${T})">GRASS, LEAF, ARTICHOKE</text>
${dots}
<text x="28" y="${H - 18}" font-size="11" fill="${GREEN}" opacity="0.45">attimo-oil.com</text>
</g>
</svg>`;
  out("chart-variety-flavour-map.svg", svg);
}

// 2. Measured polyphenols of single-variety oils, 2025/26 harvest, from the Olive Oil Polyphenol Index.
// One bar per oil, grouped by variety. Method shown per bar: methods read differently on the same oil.
{
  const rows = [
    { v: "Koroneiki", o: "Sakellaropoulos Fyllikon", n: 1825, m: "NMR" },
    { v: "Koroneiki", o: "PJ Kabos Phenolic Shot", n: 1473, m: "NMR" },
    { v: "Kalamon", o: "Laconiko ZOI", n: 1397, m: "NMR" },
    { v: "Lianolia", o: "The Governor", n: 1316, m: "NMR" },
    { v: "Coratina", o: "OlvLimits Green Machine", n: 1295, m: "NMR" },
    { v: "Coratina", o: "Olio Intini", n: 1100, m: "not stated" },
    { v: "Lianolia", o: "Kyoord", n: 1007, m: "NMR" },
    { v: "Coratina", o: "ATTIMO", n: 847, m: "HPLC", hero: true },
    { v: "Picual", o: "Oro del Desierto", n: 844, m: "Folin" },
    { v: "Picual", o: "ATTIMO", n: 675, m: "Folin", hero: true },
    { v: "Ottobratica", o: "Deliba", n: 629, m: "HPLC" },
    { v: "Nocellara", o: "ATTIMO", n: 400, m: "HPLC", hero: true },
  ];
  const W = 720, rowH = 30, top = 150, H = top + rows.length * rowH + 70;
  const nameX = 250, barX = 262, barMax = 340, max = 2000;
  const bx = (n) => barX + (n / max) * barMax;
  const bars = rows.map((r, i) => {
    const y = top + i * rowH;
    return `<text x="${nameX}" y="${y + 15}" font-size="13" ${r.hero ? 'font-weight="700"' : ""} fill="${GREEN}" text-anchor="end">${r.v}<tspan font-size="11" opacity="0.55" font-weight="400"> · ${r.o}</tspan></text>
<rect x="${barX}" y="${y + 4}" width="${(bx(r.n) - barX).toFixed(1)}" height="14" rx="3" fill="${r.hero ? CHART : SAGE}" ${r.hero ? `stroke="${GREEN}" stroke-width="1.4"` : 'fill-opacity="0.75"'}/>
<text x="${(bx(r.n) + 8).toFixed(1)}" y="${y + 15}" font-size="12" font-weight="700" fill="${GREEN}">${r.n.toLocaleString("en-GB")}<tspan font-weight="400" opacity="0.5"> ${r.m}</tspan></text>`;
  }).join("\n");
  const ref = bx(250);
  const svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="t d">
<title id="t">Polyphenols in single-variety olive oils, 2025/26 harvest</title>
<desc id="d">Bar chart of twelve single-variety oils with published lab results, in mg/kg, from 1,825 for a Koroneiki down to 400 for ATTIMO Nocellara. Each bar is labelled with the test method used. A line marks 250 mg/kg, the level the EU health claim for olive oil polyphenols is built on.</desc>
<rect width="${W}" height="${H}" fill="${CREAM}"/>
<g ${FONT}>
<text x="28" y="44" font-size="26" font-weight="700" fill="${GREEN}">Polyphenols in single-variety oils</text>
<text x="28" y="72" font-size="14" fill="${GREEN}" opacity="0.6">Published lab results, 2025/26 harvest, mg/kg. NMR tends to read higher than HPLC</text>
<text x="28" y="90" font-size="14" fill="${GREEN}" opacity="0.6">on the same oil, so compare numbers within one method.</text>
<line x1="${ref.toFixed(1)}" y1="${top - 8}" x2="${ref.toFixed(1)}" y2="${top + rows.length * rowH}" stroke="${GREEN}" stroke-width="1" stroke-dasharray="3 3" opacity="0.35"/>
<text x="${ref.toFixed(1)}" y="${top - 14}" font-size="11" fill="${GREEN}" opacity="0.55" text-anchor="middle">250, EU health-claim level</text>
${bars}
<text x="28" y="${H - 18}" font-size="11" fill="${GREEN}" opacity="0.45">Source: Olive Oil Polyphenol Index, attimo-oil.com/polyphenol-index</text>
</g>
</svg>`;
  out("chart-variety-polyphenols.svg", svg);
}
console.log("written");
