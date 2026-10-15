import { useMemo, useState } from "react";

// Interactive full index: search, filters (origin, availability, price band),
// sortable columns. Server-rendered with every row visible by default, so the
// table is in the HTML for crawlers; the controls only hydrate on the client.
export type ExplorerRow = {
  id: string; rank: number | null; brand: string; oil: string; country: string; variety: string | null;
  compounds: number | null; total: number | null; method: string; harvest: string;
  reportHref: string; reportViewable: boolean; sourceUrl: string; price: string | null;
  priceEur500: number | null; value: number | null; regions: string[]; mine: boolean;
};
export type ExplorerLabels = {
  cols: string[]; valueCol: string; notPublished: string; viewable: string; none: string; notListed: string;
  search: string; origin: string; availability: string; price: string; eu: string; uk: string; us: string; noneRegion: string; all: string;
  bands: string[]; showing: string; reset: string; sortHint: string; available: string;
};

const GREEN = "#1B4229", CREAM = "#FFFAEA", ACCENT = "#CDDB2D";
const UDC = "'UDC Working Man Sans', sans-serif", SG = "'Space Grotesk', sans-serif";
type SortKey = "rank" | "compounds" | "total" | "priceEur500" | "value";

const fmt = (n: number | null, lang: string) => (n === null ? "" : n >= 1000 ? `${String(n).slice(0, -3)}${["de", "nl", "da"].includes(lang) ? "." : lang === "en" ? "," : " "}${String(n).slice(-3)}` : String(n));
const eur = (v: number, lang: string) => `€${v.toFixed(2).replace(".", lang === "en" ? "." : ",")}`;

export default function PolyphenolIndexExplorer({ rows, labels: L, lang }: { rows: ExplorerRow[]; labels: ExplorerLabels; lang: string }) {
  const [q, setQ] = useState("");
  const [country, setCountry] = useState<string | null>(null);
  const [region, setRegion] = useState<string | null>(null);
  const [band, setBand] = useState<number | null>(null);
  const [sort, setSort] = useState<{ key: SortKey; dir: 1 | -1 }>({ key: "compounds", dir: -1 });

  const countries = useMemo(() => [...new Set(rows.map((r) => r.country))].sort(), [rows]);
  const regionLabel: Record<string, string> = { EU: L.eu, UK: L.uk, US: L.us };
  const bandOf = (r: ExplorerRow) => (r.priceEur500 === null ? 3 : r.priceEur500 < 25 ? 0 : r.priceEur500 <= 50 ? 1 : 2);

  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const out = rows.filter((r) =>
      (!needle || `${r.brand} ${r.oil} ${r.country} ${r.variety ?? ""}`.toLowerCase().includes(needle)) &&
      (!country || r.country === country) &&
      (!region || (region === "none" ? r.regions.length === 0 : r.regions.includes(region))) &&
      (band === null || bandOf(r) === band),
    );
    const val = (r: ExplorerRow) => r[sort.key];
    return out.sort((a, b) => {
      const av = val(a), bv = val(b);
      if (av === null && bv === null) return 0;
      if (av === null) return 1;
      if (bv === null) return -1;
      return (av - bv) * sort.dir;
    });
  }, [rows, q, country, region, band, sort]);

  const chip = (active: boolean, onClick: () => void, text: string, key: string) => (
    <button key={key} type="button" onClick={onClick} className="rounded-full px-3 py-1.5 transition-colors"
      style={{ fontFamily: SG, fontSize: ".88rem", border: `1px solid ${active ? GREEN : "rgba(27,66,41,.25)"}`, backgroundColor: active ? GREEN : "transparent", color: active ? CREAM : GREEN, cursor: "pointer" }}>
      {text}
    </button>
  );
  const group = (title: string, items: { key: string; text: string; active: boolean; onClick: () => void }[]) => (
    <div className="flex flex-wrap items-center gap-2">
      <span style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".72rem", letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(27,66,41,.55)", marginRight: 4 }}>{title}</span>
      {items.map((it) => chip(it.active, it.onClick, it.text, it.key))}
    </div>
  );
  const th = (text: string, key?: SortKey, right = false) => (
    <th key={text} className={`p-4 ${right ? "text-right" : "text-left"}`} style={{ fontFamily: UDC, fontWeight: 700, fontSize: ".85rem", whiteSpace: "nowrap", cursor: key ? "pointer" : "default", userSelect: "none" }}
      onClick={key ? () => setSort((s) => ({ key, dir: s.key === key ? (s.dir === 1 ? -1 : 1) : -1 })) : undefined}>
      {text}{key && sort.key === key ? (sort.dir === -1 ? " ↓" : " ↑") : ""}
    </th>
  );
  const anyFilter = q || country || region || band !== null;

  return (
    <div>
      <div className="grid gap-4 mb-6">
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={L.search} aria-label={L.search}
          className="w-full rounded-lg px-4 py-3 outline-none" style={{ fontFamily: SG, fontSize: "1rem", color: GREEN, backgroundColor: "#fff", border: "1px solid rgba(27,66,41,.25)" }} />
        {group(L.origin, [{ key: "all", text: L.all, active: !country, onClick: () => setCountry(null) }, ...countries.map((c) => ({ key: c, text: c, active: country === c, onClick: () => setCountry(country === c ? null : c) }))])}
        {group(L.availability, [{ key: "all", text: L.all, active: !region, onClick: () => setRegion(null) }, ...["EU", "UK", "US", "none"].map((r) => ({ key: r, text: r === "none" ? L.noneRegion : regionLabel[r], active: region === r, onClick: () => setRegion(region === r ? null : r) }))])}
        {group(L.price, [{ key: "all", text: L.all, active: band === null, onClick: () => setBand(null) }, ...L.bands.map((b, i) => ({ key: b, text: b, active: band === i, onClick: () => setBand(band === i ? null : i) }))])}
        <div className="flex items-center justify-between gap-4">
          <span style={{ fontFamily: SG, fontSize: ".9rem", color: "rgba(27,66,41,.65)" }}>{L.showing.replace("{n}", String(shown.length)).replace("{total}", String(rows.length))} · {L.sortHint}</span>
          {anyFilter && <button type="button" onClick={() => { setQ(""); setCountry(null); setRegion(null); setBand(null); }} className="underline" style={{ fontFamily: SG, fontSize: ".9rem", color: GREEN, background: "none", border: "none", cursor: "pointer" }}>{L.reset}</button>}
        </div>
      </div>

      <div className="rounded-2xl overflow-x-auto" style={{ backgroundColor: "#fff", border: "1px solid rgba(27,66,41,.18)" }}>
        <table className="w-full border-collapse" style={{ fontFamily: SG, fontSize: ".95rem", minWidth: 900 }}>
          <thead>
            <tr style={{ backgroundColor: GREEN, color: CREAM }}>
              {th(L.cols[0], "rank")}{th(L.cols[1])}{th(L.cols[2], "compounds", true)}{th(L.cols[3], "total", true)}{th(L.cols[4])}{th(L.cols[5])}{th(L.cols[6])}{th(L.available)}{th(L.cols[7], "priceEur500")}{th(L.valueCol, "value", true)}
            </tr>
          </thead>
          <tbody>
            {shown.map((r) => (
              <tr key={r.id} style={{ borderTop: "1px solid rgba(27,66,41,.12)", backgroundColor: r.mine ? "rgba(205,219,45,.18)" : undefined }}>
                <td className="p-4" style={{ fontFamily: UDC, color: "rgba(27,66,41,.6)" }}>{r.rank ?? "—"}</td>
                <td className="p-4 font-semibold"><a href={r.sourceUrl} className="underline underline-offset-4" style={{ textDecorationColor: "rgba(27,66,41,.35)" }} rel={r.mine ? undefined : "nofollow noopener"} target={r.mine ? undefined : "_blank"}>{r.brand}</a> · {r.oil}<span className="block" style={{ fontSize: ".82rem", color: "rgba(27,66,41,.6)", fontWeight: 400 }}>{r.country}</span></td>
                <td className="p-4 font-semibold text-right">{r.compounds === null ? <span style={{ opacity: .5 }}>{L.notPublished}</span> : fmt(r.compounds, lang)}</td>
                <td className="p-4 text-right">{r.total === null ? "—" : fmt(r.total, lang)}</td>
                <td className="p-4" style={{ whiteSpace: "nowrap" }}>{r.method}</td>
                <td className="p-4" style={{ whiteSpace: "nowrap" }}>{r.harvest}</td>
                <td className="p-4"><a href={r.reportHref} className="underline underline-offset-4" rel={r.mine ? undefined : "nofollow noopener"} target={r.mine ? undefined : "_blank"}>{r.reportViewable ? L.viewable : L.none}</a></td>
                <td className="p-4" style={{ whiteSpace: "nowrap" }}>{r.regions.length ? r.regions.map((x) => regionLabel[x]).join(", ") : <span style={{ opacity: .5 }}>{L.noneRegion}</span>}</td>
                <td className="p-4" style={{ minWidth: "11rem" }}>{r.price ?? L.notListed}{r.priceEur500 !== null && <span className="block" style={{ fontSize: ".82rem", color: "rgba(27,66,41,.6)" }}>{eur(r.priceEur500, lang)} / 500 ml</span>}</td>
                <td className="p-4 font-semibold text-right" style={{ whiteSpace: "nowrap" }}>{r.value === null ? <span style={{ opacity: .5 }}>—</span> : eur(r.value, lang)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
