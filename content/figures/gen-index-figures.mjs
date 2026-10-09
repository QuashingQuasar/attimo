// Three house figures for the Polyphenol Index post. Data mirrors the draft's
// "index at a glance" table; change it there first.
// Render to PNG with headless Chrome afterwards (same flow as gen-specialty-figures.mjs).
import { writeFileSync } from "node:fs";
const GREEN = "#1B4229", CREAM = "#FFFAEA", CHART = "#CDDB2D", SAGE = "#9DAE84", LIME = "#B3E58C";
const FONT = `font-family="'Space Grotesk', system-ui, sans-serif"`;
const out = (n, s) => { writeFileSync(new URL(`./${n}`, import.meta.url).pathname, s); console.log("written:", n); };
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const fmt = (n) => n.toLocaleString("en-GB");

// ── 1. Cover: the ranking ───────────────────────────────────────────────
{
  const rows = [
    { b: "Laconiko", o: "ZOI", v: 1000, label: "1,000+", note: "oleocanthal only", total: 1397, m: "NMR" },
    { b: "The Governor", o: "Limited Edition", v: 875, total: 1316, m: "NMR" },
    { b: "ATTIMO", o: "Coratina", v: 807, total: 847, m: "HPLC", hero: true },
    { b: "Kyoord", o: "High Phenolic", v: 657, total: 1007, m: "NMR" },
    { b: "Pamako", o: "Monovarietal", v: 634, total: 2000, m: "NMR" },
    { b: "OlvLimits", o: "Green Machine", v: 439, total: 1295, m: "NMR" },
    { b: "Olivea", o: "Ultra High Phenolic", v: 419, total: 1046, m: "NMR" },
    { b: "Sakellaropoulos", o: "Fyllikon", v: 390, total: 1825, m: "NMR" },
  ];
  const W = 720, H = 480, nameX = 196, barX = 206, barMax = 300, totX = 692, top = 124, rowH = 38;
  const bx = (v) => barX + (v / 1000) * barMax;
  const body = rows.map((r, i) => {
    const y = top + i * rowH;
    return `<text x="${nameX}" y="${y + 13}" font-size="13" ${r.hero ? 'font-weight="700"' : ''} fill="${GREEN}" text-anchor="end">${esc(r.b)}</text>
<text x="${nameX}" y="${y + 27}" font-size="10" fill="${GREEN}" opacity="0.55" text-anchor="end">${esc(r.o)}</text>
<rect x="${barX}" y="${y + 3}" width="${(bx(r.v) - barX).toFixed(1)}" height="20" rx="3" fill="${r.hero ? CHART : SAGE}" ${r.hero ? `stroke="${GREEN}" stroke-width="1.4"` : 'fill-opacity="0.8"'}/>
<text x="${(bx(r.v) + 8).toFixed(1)}" y="${y + 17}" font-size="13" font-weight="700" fill="${GREEN}">${r.label ?? fmt(r.v)}</text>
${r.note ? `<text x="${(bx(r.v) + 8).toFixed(1)}" y="${y + 30}" font-size="10" fill="${GREEN}" opacity="0.5">${r.note}</text>` : ""}
<text x="${totX}" y="${y + 17}" font-size="12" fill="${GREEN}" opacity="0.45" text-anchor="end">${fmt(r.total)} · ${r.m}</text>`;
  }).join("\n");
  out("chart-index-ranking.svg", `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="t1 d1">
<title id="t1">Eight olive oils that publish oleocanthal and oleacein, ranked</title>
<desc id="d1">Horizontal bar chart. Bars show oleocanthal plus oleacein in mg/kg: Laconiko ZOI 1,000 or more (oleocanthal only), The Governor 875, ATTIMO Coratina 807, Kyoord 657, Pamako 634, OlvLimits Green Machine 439, Olivea 419, Sakellaropoulos Fyllikon 390. Each brand's headline total and its method appear in grey at the right; the totals come from different methods and do not follow the bar order.</desc>
<rect width="${W}" height="${H}" fill="${CREAM}"/>
<g ${FONT}>
<text x="28" y="44" font-size="25" font-weight="700" fill="${GREEN}">Eight oils that publish oleocanthal and oleacein, ranked</text>
<text x="28" y="68" font-size="13" fill="${GREEN}" opacity="0.6">Bars: oleocanthal + oleacein, mg/kg, the two compounds that travel between laboratories.</text>
<text x="28" y="86" font-size="13" fill="${GREEN}" opacity="0.6">Grey: each brand's headline total with its method. Totals from different methods are different currencies.</text>
<text x="${barX}" y="${top - 12}" font-size="10.5" font-weight="700" letter-spacing="2" fill="${GREEN}" opacity="0.85">OLEOCANTHAL + OLEACEIN</text>
<text x="${totX}" y="${top - 12}" font-size="10.5" font-weight="700" letter-spacing="2" fill="${GREEN}" opacity="0.45" text-anchor="end">HEADLINE TOTAL</text>
${body}
<text x="28" y="${H - 18}" font-size="11" fill="${GREEN}" opacity="0.45">All figures from each brand's published laboratory report, 2025/26 harvest · attimo-oil.com</text>
</g>
</svg>`);
}

// ── 2. One oil, two certificates ────────────────────────────────────────
{
  const W = 720, H = 400;
  const groups = [
    { k: "Total polyphenols", nmr: 1046, hplc: 850 },
    { k: "Oleocanthal", nmr: 244, hplc: 143 },
    { k: "Oleacein", nmr: 175, hplc: 185 },
  ];
  const x0 = 170, span = 420, top = 120, gH = 76, max = 1100;
  const w = (v) => (v / max) * span;
  const body = groups.map((g, i) => {
    const y = top + i * gH;
    return `<text x="${x0 - 14}" y="${y + 24}" font-size="13" font-weight="700" fill="${GREEN}" text-anchor="end">${g.k}</text>
<rect x="${x0}" y="${y}" width="${w(g.nmr).toFixed(1)}" height="20" rx="3" fill="${SAGE}" fill-opacity="0.8"/>
<text x="${(x0 + w(g.nmr) + 8).toFixed(1)}" y="${y + 14}" font-size="12" font-weight="700" fill="${GREEN}">${fmt(g.nmr)}</text>
<text x="${(x0 + w(g.nmr) + 8 + (g.nmr >= 1000 ? 42 : 32)).toFixed(1)}" y="${y + 14}" font-size="10" fill="${GREEN}" opacity="0.5">NMR</text>
<rect x="${x0}" y="${y + 26}" width="${w(g.hplc).toFixed(1)}" height="20" rx="3" fill="${GREEN}"/>
<text x="${(x0 + w(g.hplc) + 8).toFixed(1)}" y="${y + 40}" font-size="12" font-weight="700" fill="${GREEN}">${fmt(g.hplc)}</text>
<text x="${(x0 + w(g.hplc) + 8 + (g.hplc >= 1000 ? 42 : 32)).toFixed(1)}" y="${y + 40}" font-size="10" fill="${GREEN}" opacity="0.5">HPLC</text>`;
  }).join("\n");
  out("chart-index-one-oil-two-methods.svg", `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="t2 d2">
<title id="t2">One oil, two certificates: the totals land 23% apart</title>
<desc id="d2">Paired bars for Olivea's 2025 Olympia oil, analysed by NMR and by HPLC. Total polyphenols 1,046 by NMR against 850 by HPLC; oleocanthal 244 against 143; oleacein 175 against 185. Same bottle, two laboratories, two sets of numbers.</desc>
<rect width="${W}" height="${H}" fill="${CREAM}"/>
<g ${FONT}>
<text x="28" y="44" font-size="25" font-weight="700" fill="${GREEN}">One oil, two certificates: the totals land 23% apart</text>
<text x="28" y="68" font-size="13" fill="${GREEN}" opacity="0.6">Olivea's 2025 Olympia oil, analysed by the University of Athens (NMR) and by an IOC-method laboratory (HPLC).</text>
<text x="28" y="86" font-size="13" fill="${GREEN}" opacity="0.6">Olivea publishes both. Most brands publish one, and the reader never learns which currency it is in.</text>
${body}
<text x="28" y="${H - 34}" font-size="11" fill="${GREEN}" opacity="0.45">mg/kg. Source: Olivea's published lab results page, both certificates, 2025 harvest.</text>
<text x="28" y="${H - 18}" font-size="11" fill="${GREEN}" opacity="0.45">attimo-oil.com</text>
</g>
</svg>`);
}

// ── 3. Who publishes what ───────────────────────────────────────────────
{
  const cols = ["Total", "Oleocanthal", "Oleacein", "Report viewable"];
  const rows = [
    ["Laconiko — ZOI", 1, 1, 0, 1], ["The Governor — Limited", 1, 1, 1, 1], ["ATTIMO — Coratina", 1, 1, 1, 1, true],
    ["Kyoord — High Phenolic", 1, 1, 1, 1], ["Pamako — Monovarietal", 1, 1, 1, 1], ["OlvLimits — Green Machine", 1, 1, 1, 1],
    ["Olivea — Ultra High Phenolic", 1, 1, 1, 1], ["Sakellaropoulos — Fyllikon", 1, 1, 1, 1],
    ["PJ Kabos — Phenolic Shot", 1, 0, 0, 0], ["Olio Intini", 1, 0, 0, 0], ["Oro del Desierto — Picual", 1, 0, 0, 1],
    ["Oleum Crete", 1, 0, 0, 0], ["Morocco Gold", 1, 0, 0, 0], ["Rapunzel — Polyphenolia", 1, 0, 0, 0], ["Blueprint — Snake Oil", 1, 0, 0, 1],
  ];
  const W = 720, H = 680, top = 150, rowH = 31, gap = 22, labelX = 28, gridX0 = 330, gridW = 360;
  const cx = (i) => gridX0 + (i + 0.5) * (gridW / cols.length);
  const mark = (m, x, y) => (x = Number(x), m)
    ? `<circle cx="${x}" cy="${y}" r="8" fill="${GREEN}"/><path d="M${(x - 4).toFixed(1)},${y} L${(x - 1.3).toFixed(1)},${(y + 2.8).toFixed(1)} L${(x + 4.3).toFixed(1)},${(y - 3.2).toFixed(1)}" fill="none" stroke="${LIME}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`
    : `<circle cx="${x}" cy="${y}" r="2" fill="${GREEN}" opacity="0.25"/>`;
  const body = rows.map((r, i) => {
    const y = top + i * rowH + (i >= 8 ? gap : 0), hero = r[5] === true, divider = i === 8;
    return `${divider ? `<text x="${labelX}" y="${y - 16}" font-size="9.5" font-weight="700" letter-spacing="1.5" fill="${GREEN}" opacity="0.5">STATED TOTALS ONLY</text>` : ""}
${hero ? `<rect x="${labelX - 8}" y="${y - 14}" width="${W - 28 - labelX + 8}" height="${rowH - 2}" fill="${LIME}" opacity="0.3"/>` : ""}
<line x1="${labelX}" y1="${y + 16}" x2="${W - 28}" y2="${y + 16}" stroke="${GREEN}" stroke-width="1" stroke-dasharray="3 4" opacity="${i === rows.length - 1 ? 0 : 0.25}"/>
<text x="${labelX}" y="${y + 4}" font-size="12.5" ${hero ? 'font-weight="700"' : ''} fill="${GREEN}">${esc(r[0])}</text>
${cols.map((_, c) => mark(r[c + 1], cx(c).toFixed(1), y)).join("")}`;
  }).join("\n");
  // the divider row needs breathing room: shift stated-totals rows down
  const svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="t3 d3">
<title id="t3">Who publishes what</title>
<desc id="d3">Matrix of fifteen brands against four columns: total published, oleocanthal published, oleacein published, lab report viewable. The eight ranked brands publish oleocanthal and oleacein with a viewable report (Laconiko publishes oleocanthal only). Seven further brands state a total only; of those, Oro del Desierto and Blueprint make the report viewable, the rest do not.</desc>
<rect width="${W}" height="${H}" fill="${CREAM}"/>
<g ${FONT}>
<text x="28" y="44" font-size="25" font-weight="700" fill="${GREEN}">Who publishes what</text>
<text x="28" y="68" font-size="13" fill="${GREEN}" opacity="0.6">A brand enters the ranked index when it publishes oleocanthal and oleacein. A viewable report is what</text>
<text x="28" y="86" font-size="13" fill="${GREEN}" opacity="0.6">makes any figure checkable; a number in product copy is a claim.</text>
${cols.map((c, i) => `<text x="${cx(i).toFixed(1)}" y="${top - 30}" font-size="9.5" font-weight="700" letter-spacing="1" fill="${GREEN}" opacity="0.7" text-anchor="middle">${c.toUpperCase()}</text>`).join("\n")}
<text x="${labelX}" y="${top - 30}" font-size="9.5" font-weight="700" letter-spacing="1.5" fill="${GREEN}" opacity="0.5">RANKED INDEX</text>
${body}
<text x="28" y="${H - 18}" font-size="11" fill="${GREEN}" opacity="0.45">Checked against each brand's own pages, September 2026 · attimo-oil.com</text>
</g>
</svg>`;
  out("chart-index-who-publishes.svg", svg);
}
