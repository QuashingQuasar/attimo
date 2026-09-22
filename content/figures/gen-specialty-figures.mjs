// Three house figures for the "What Is Specialty Olive Oil?" post.
// Render to PNG with headless Chrome afterwards (same flow as gen-myths-figure.mjs).
import { writeFileSync } from "node:fs";

const GREEN = "#1B4229", CREAM = "#FFFAEA", CHART = "#CDDB2D", SAGE = "#9DAE84", LIME = "#B3E58C";
const FONT = `font-family="'Space Grotesk', system-ui, sans-serif"`;
const out = (name, svg) => {
  writeFileSync(new URL(`./${name}`, import.meta.url).pathname, svg);
  console.log("written:", name);
};
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// ─────────────────────────────────────────────────────────────────────────
// 1. The five dimensions — commodity practice against specialty practice
// ─────────────────────────────────────────────────────────────────────────
{
  const W = 720, H = 470;
  const rows = [
    ["Variety", ["a dozen anonymous varieties,", "blended to taste the same"], ["one named cultivar, or a blend", "that names its parts"]],
    ["Harvest window", ["late — a ripe olive gives", "up to twice the oil"], ["early, October — less oil,", "dense with polyphenols"]],
    ["Freshness", ["days in crates; a two-year", "best-before window"], ["milled within hours; one", "harvest on sale, then none"]],
    ["Origin", ["“Product of Italy” — where", "the oil was bottled"], ["grove, region and mill", "named"]],
    ["Transparency", ["no analysis published;", "numbers serve no purpose"], ["lab analysis published,", "harvest date on the label"]],
  ];
  const top = 132, rowH = 60, c1 = 28, c2 = 190, c3 = 470;
  const body = rows.map(([dim, com, spe], i) => {
    const y = top + i * rowH;
    return `<line x1="${c1}" y1="${y - 12}" x2="${W - 28}" y2="${y - 12}" stroke="${GREEN}" stroke-width="1" stroke-dasharray="3 4" opacity="${i === 0 ? 0 : 0.35}"/>
<text x="${c1}" y="${y + 8}" font-size="12" font-weight="700" fill="${GREEN}" opacity="0.5">${i + 1}</text>
<text x="${c1 + 18}" y="${y + 8}" font-size="15" font-weight="700" fill="${GREEN}">${esc(dim)}</text>
<text x="${c2}" y="${y + 4}" font-size="13" fill="${GREEN}" opacity="0.7">${esc(com[0])}</text>
<text x="${c2}" y="${y + 22}" font-size="13" fill="${GREEN}" opacity="0.7">${esc(com[1])}</text>
<rect x="${c3 - 14}" y="${y - 12}" width="${W - 28 - c3 + 14}" height="${rowH}" fill="${LIME}" opacity="0.28"/>
<text x="${c3}" y="${y + 4}" font-size="13" font-weight="600" fill="${GREEN}">${esc(spe[0])}</text>
<text x="${c3}" y="${y + 22}" font-size="13" font-weight="600" fill="${GREEN}">${esc(spe[1])}</text>`;
  }).join("\n");

  out("chart-specialty-five-dimensions.svg", `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="t1 d1">
<title id="t1">The five dimensions of specialty olive oil, against commodity practice</title>
<desc id="d1">Table with five rows — variety, harvest window, freshness, origin, transparency — and two columns. The commodity column reads: a dozen anonymous varieties blended; late harvest for yield; days in crates and a two-year best-before; Product of Italy meaning bottled in Italy; no analysis published. The specialty column reads: one named cultivar or a blend that names its parts; early October harvest; milled within hours and one harvest on sale; grove, region and mill named; lab analysis published with the harvest date on the label.</desc>
<rect width="${W}" height="${H}" fill="${CREAM}"/>
<g ${FONT}>
<text x="28" y="44" font-size="26" font-weight="700" fill="${GREEN}">Five decisions separate specialty from commodity</text>
<text x="28" y="68" font-size="14" fill="${GREEN}" opacity="0.55">Each practice reverses a commodity one, and each can be checked from the label or the website</text>
<text x="${c2}" y="${top - 28}" font-size="11" font-weight="700" letter-spacing="2" fill="${GREEN}" opacity="0.55">COMMODITY OIL</text>
<text x="${c3}" y="${top - 28}" font-size="11" font-weight="700" letter-spacing="2" fill="${GREEN}">SPECIALTY OIL</text>
${body}
<text x="28" y="${H - 18}" font-size="11" fill="${GREEN}" opacity="0.45">attimo-oil.com</text>
</g>
</svg>`);
}

// ─────────────────────────────────────────────────────────────────────────
// 2. The harvest window — polyphenols fall as the olive ripens, oil yield rises
// ─────────────────────────────────────────────────────────────────────────
{
  const W = 720, H = 440;
  const x0 = 70, x1 = 660, yTop = 120, yBase = 330;
  const px = (t) => x0 + t * (x1 - x0);           // t = 0 (early Oct) … 1 (late Dec)
  const py = (v) => yBase - v * (yBase - yTop);    // v = 0 … 1
  // Schematic curves: polyphenols high and falling; yield low and rising.
  const poly = [[0, 0.95], [0.15, 0.9], [0.3, 0.78], [0.45, 0.6], [0.6, 0.42], [0.75, 0.3], [0.9, 0.22], [1, 0.19]];
  const yld = [[0, 0.32], [0.15, 0.38], [0.3, 0.47], [0.45, 0.58], [0.6, 0.7], [0.75, 0.8], [0.9, 0.87], [1, 0.9]];
  const path = (pts) => pts.map(([t, v], i) => `${i ? "L" : "M"}${px(t).toFixed(1)},${py(v).toFixed(1)}`).join(" ");
  const smooth = (pts) => {
    // Catmull-Rom → cubic Bézier for a soft line.
    const p = pts.map(([t, v]) => [px(t), py(v)]);
    let d = `M${p[0][0].toFixed(1)},${p[0][1].toFixed(1)}`;
    for (let i = 0; i < p.length - 1; i++) {
      const p0 = p[i - 1] ?? p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] ?? p2;
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
    }
    return d;
  };
  const winX0 = px(0.02), winX1 = px(0.3);
  const months = [["October", 0.08], ["November", 0.5], ["December", 0.92]];
  const ripeness = [["green", "#8FBF5A", 0], ["turning", "#7A5C8C", 0.34], ["black", "#2B2431", 0.67]];

  out("chart-specialty-harvest-window.svg", `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="t2 d2">
<title id="t2">Polyphenols fall as the olive ripens; oil yield rises</title>
<desc id="d2">Schematic chart across October to December. One line, polyphenols, starts high while the olive is green and falls steadily as it turns and blackens. A second line, oil yield per tree, starts low and rises to almost double. A shaded band over early October marks the early-harvest window, where polyphenols are near their peak and yield is lowest. A producer paid by the litre picks late; a specialty producer picks in the band.</desc>
<rect width="${W}" height="${H}" fill="${CREAM}"/>
<g ${FONT}>
<text x="28" y="44" font-size="26" font-weight="700" fill="${GREEN}">Polyphenols fall as the olive ripens; oil yield rises</text>
<text x="28" y="68" font-size="14" fill="${GREEN}" opacity="0.55">Same tree, three weeks apart, two different products. Schematic shapes, not measured values</text>

<!-- early-harvest window -->
<rect x="${winX0.toFixed(1)}" y="${yTop - 26}" width="${(winX1 - winX0).toFixed(1)}" height="${yBase - yTop + 26}" fill="${CHART}" opacity="0.28"/>
<text x="${((winX0 + winX1) / 2).toFixed(1)}" y="${yTop - 8}" font-size="11" font-weight="700" letter-spacing="2" fill="${GREEN}" text-anchor="middle">EARLY HARVEST</text>

<!-- axes -->
<line x1="${x0}" y1="${yBase}" x2="${x1}" y2="${yBase}" stroke="${GREEN}" stroke-width="1.2" opacity="0.5"/>
${months.map(([m, t]) => `<text x="${px(t).toFixed(1)}" y="${yBase + 20}" font-size="12" fill="${GREEN}" opacity="0.7" text-anchor="middle">${m}</text>`).join("\n")}

<!-- ripeness strip -->
${ripeness.map(([lbl, col, t], i) => {
  const xa = px(t), xb = px(i < 2 ? ripeness[i + 1][2] : 1);
  return `<rect x="${xa.toFixed(1)}" y="${yBase + 32}" width="${(xb - xa).toFixed(1)}" height="8" fill="${col}"/>
<text x="${((xa + xb) / 2).toFixed(1)}" y="${yBase + 56}" font-size="11" fill="${GREEN}" opacity="0.6" text-anchor="middle">${lbl} olive</text>`;
}).join("\n")}

<!-- curves -->
<path d="${smooth(yld)}" fill="none" stroke="${SAGE}" stroke-width="3"/>
<path d="${smooth(poly)}" fill="none" stroke="${GREEN}" stroke-width="3.5"/>
<circle cx="${px(0.15).toFixed(1)}" cy="${py(0.9).toFixed(1)}" r="6" fill="${CHART}" stroke="${GREEN}" stroke-width="2"/>
<circle cx="${px(0.9).toFixed(1)}" cy="${py(0.87).toFixed(1)}" r="5" fill="${SAGE}" stroke="${GREEN}" stroke-width="1.5"/>

<!-- line labels -->
<text x="${px(0.34).toFixed(1)}" y="${(py(0.78) - 14).toFixed(1)}" font-size="13" font-weight="700" fill="${GREEN}">Polyphenols</text>
<text x="${px(0.34).toFixed(1)}" y="${(py(0.78) + 2).toFixed(1)}" font-size="11" fill="${GREEN}" opacity="0.65">bitterness, pungency, the health case</text>
<text x="${px(0.62).toFixed(1)}" y="${(py(0.7) + 30).toFixed(1)}" font-size="13" font-weight="700" fill="${GREEN}" opacity="0.8">Oil yield per tree</text>
<text x="${px(0.62).toFixed(1)}" y="${(py(0.7) + 46).toFixed(1)}" font-size="11" fill="${GREEN}" opacity="0.65">what a producer paid by the litre is paid for</text>

<text x="28" y="${H - 34}" font-size="11" fill="${GREEN}" opacity="0.45">Early: less oil, dense with polyphenols, bitter and structured. Late: more oil, mild, chemically quiet. Neither is a defect.</text>
<text x="28" y="${H - 18}" font-size="11" fill="${GREEN}" opacity="0.45">attimo-oil.com</text>
</g>
</svg>`);
}

// ─────────────────────────────────────────────────────────────────────────
// 3. What each word on the bottle guarantees, dimension by dimension
// ─────────────────────────────────────────────────────────────────────────
{
  const W = 720, H = 450;
  const cols = ["Variety", "Harvest", "Freshness", "Origin", "Evidence"];
  // "y" = the word commits the producer to it; "p" = partly; "" = nothing
  const rows = [
    ["Premium", ["", "", "", "", ""], "a price and a shelf position"],
    ["Organic", ["", "", "", "", ""], "what is sprayed on the trees"],
    ["PDO / DOP", ["p", "", "", "y", ""], "a region and a method; cultivars often listed"],
    ["“Cold-pressed”", ["", "", "", "", ""], "true of every extra virgin oil by definition"],
    ["Award-winning", ["", "", "", "", "p"], "one sample, one day, one panel"],
    ["Specialty", ["y", "y", "y", "y", "y"], "all five, checkable, all season"],
  ];
  const top = 136, rowH = 48, labelX = 28, gridX0 = 352, gridW = 340;
  const cx = (i) => gridX0 + (i + 0.5) * (gridW / cols.length);
  const mark = (m, x, y) => {
    x = Number(x);
    if (m === "y") return `<circle cx="${x}" cy="${y}" r="9" fill="${GREEN}"/><path d="M${(x - 4.5).toFixed(1)},${y} L${(x - 1.5).toFixed(1)},${(y + 3.2).toFixed(1)} L${(x + 4.8).toFixed(1)},${(y - 3.6).toFixed(1)}" fill="none" stroke="${LIME}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
    if (m === "p") return `<circle cx="${x}" cy="${y}" r="9" fill="none" stroke="${GREEN}" stroke-width="1.6"/><path d="M${x},${y - 9} A9,9 0 0 1 ${x},${y + 9} Z" fill="${GREEN}" opacity="0.55"/>`;
    return `<circle cx="${x}" cy="${y}" r="2" fill="${GREEN}" opacity="0.25"/>`;
  };
  const body = rows.map(([name, marks, note], r) => {
    const y = top + r * rowH;
    const last = r === rows.length - 1;
    return `${last ? `<rect x="${labelX - 8}" y="${y - 22}" width="${W - 28 - labelX + 8}" height="${rowH}" fill="${LIME}" opacity="0.3"/>` : ""}
<line x1="${labelX}" y1="${y + 25}" x2="${W - 28}" y2="${y + 25}" stroke="${GREEN}" stroke-width="1" stroke-dasharray="3 4" opacity="${last ? 0 : 0.3}"/>
<text x="${labelX}" y="${y + 1}" font-size="14" font-weight="700" fill="${GREEN}">${esc(name)}</text>
<text x="${labelX}" y="${y + 17}" font-size="11" fill="${GREEN}" opacity="0.6">${esc(note)}</text>
${marks.map((m, i) => mark(m, cx(i).toFixed(1), y)).join("\n")}`;
  }).join("\n");

  out("chart-specialty-label-matrix.svg", `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="t3 d3">
<title id="t3">What each word on the bottle commits the producer to</title>
<desc id="d3">Matrix of six label words against five dimensions: variety, early harvest, freshness, origin, evidence. Premium, organic and cold-pressed commit to none of the five. PDO/DOP commits to origin and partly to variety. Award-winning commits partly to evidence: one sample on one day. Specialty commits to all five, in checkable form, all season.</desc>
<rect width="${W}" height="${H}" fill="${CREAM}"/>
<g ${FONT}>
<text x="28" y="44" font-size="26" font-weight="700" fill="${GREEN}">What each word on the bottle commits the producer to</text>
<text x="28" y="68" font-size="14" fill="${GREEN}" opacity="0.55">A filled mark means the word guarantees that dimension in checkable form; a half mark means partly</text>
${cols.map((c, i) => `<text x="${cx(i).toFixed(1)}" y="${top - 34}" font-size="9.5" font-weight="700" letter-spacing="1" fill="${GREEN}" opacity="0.7" text-anchor="middle">${c.toUpperCase()}</text>`).join("\n")}
<text x="${labelX}" y="${top - 34}" font-size="9.5" font-weight="700" letter-spacing="1" fill="${GREEN}" opacity="0.7">THE WORD, AND WHAT IT DOES COVER</text>
${body}
<text x="28" y="${H - 18}" font-size="11" fill="${GREEN}" opacity="0.45">attimo-oil.com</text>
</g>
</svg>`);
}
