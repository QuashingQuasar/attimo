import { Beaker } from "lucide-react";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";
import type { HomeLabOil } from "@/lib/certificates/homeNumbers";

// The PDP's lab-trust section, once per oil, on the homepage. Same header,
// same tiles, same link; the figures arrive from the certificates collection.
interface HomeLabNumbersProps {
  oils: HomeLabOil[];
  locale?: Locale;
}

const SG = "Space Grotesk, sans-serif";
const UDC = "UDC Working Man Sans, sans-serif";

const Tile = ({ label, value, unit, avg, note }: { label: string; value: string; unit?: string; avg?: string; note: string }) => (
  <div className="rounded-xl p-4" style={{ backgroundColor: "rgba(27, 66, 41, 0.05)" }}>
    <p className="text-olive-medium uppercase tracking-widest mb-1" style={{ fontFamily: SG, fontSize: "clamp(0.75rem, 0.9vw, 0.95rem)" }}>
      {label}
    </p>
    <p className="text-olive-dark font-bold flex items-baseline gap-2 flex-wrap" style={{ fontFamily: UDC, fontSize: "clamp(1.6rem, 2.1vw, 2.3rem)", lineHeight: 1.1 }}>
      <span>
        {value}
        {unit && <span className="text-olive-medium font-normal ml-1" style={{ fontSize: "clamp(0.85rem, 1vw, 1.05rem)" }}>{unit}</span>}
      </span>
      {avg && (
        <span className="text-olive-light font-normal" style={{ fontFamily: SG, fontSize: "clamp(0.72rem, 0.82vw, 0.88rem)" }}>
          {avg}
        </span>
      )}
    </p>
    <p className="text-olive-medium mt-1.5" style={{ fontFamily: SG, fontSize: "clamp(0.875rem, 1.05vw, 1.063rem)" }}>{note}</p>
  </div>
);

export const HomeLabNumbers = ({ oils, locale = DEFAULT_LOCALE }: HomeLabNumbersProps) => {
  if (!oils.length) return null;
  const t = getDict(locale).product;
  return (
    <section className="snap-start pt-14 md:pt-20 lg:pt-24 pb-[35px] md:pb-[51px] lg:pb-[62px]" style={{ backgroundColor: "#FFFAEA" }}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start justify-between gap-6 md:gap-8 mb-10 md:mb-12">
            <div className="max-w-3xl">
              <h2 className="font-working-man font-bold text-olive-dark mb-4 tracking-tight" style={{ fontSize: "clamp(1.75rem, 3vw, 3rem)" }}>
                every oil, lab-tested
              </h2>
              <p className="text-olive-medium leading-relaxed" style={{ fontFamily: SG, fontSize: "clamp(1rem, 1.2vw, 1.25rem)" }}>
                Health claims without receipts are just marketing. Each harvest of each oil is independently tested after pressing, and every report is published in full.
              </p>
            </div>
            <img src="/icons/flask.svg" alt="Lab flask" className="flex-shrink-0 w-[100px] h-[100px] md:w-[230px] md:h-[230px]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 lg:gap-5">
            {oils.map((o) => {
              const hasCompounds = o.oleocanthal !== null && o.oleacein !== null;
              return (
                <div key={o.key} className="flex flex-col gap-3.5">
                  <p className="flex items-baseline gap-2.5 flex-wrap mb-1">
                    <span className="text-olive-dark font-bold uppercase" style={{ fontFamily: UDC, fontSize: "clamp(1.5rem, 2vw, 1.9rem)", letterSpacing: "0.01em" }}>{o.name}</span>
                    <span className="text-olive-medium" style={{ fontFamily: "Beverly Drive, cursive", fontStyle: "italic", fontSize: "clamp(1.1rem, 1.5vw, 1.45rem)" }}>{o.script}</span>
                  </p>
                  <Tile
                    label="Bioactive polyphenols"
                    value={o.total === null ? "—" : String(o.total)}
                    unit={o.total === null ? undefined : o.totalUnit}
                    avg="avg. ~180 mg/kg"
                    note={o.methodLine}
                  />
                  <Tile
                    label="Oleocanthal + oleacein"
                    value={hasCompounds ? `${o.oleocanthal} + ${o.oleacein}` : "—"}
                    unit={hasCompounds ? "mg/kg" : undefined}
                    avg={hasCompounds ? "avg. <50 mg/kg" : "not measured on this method"}
                    note={
                      hasCompounds
                        ? o.key === "coratina"
                          ? "The two compounds behind the peppery kick and most of the evidence."
                          : "Gentler oil, same two compounds, on the same method."
                        : "Folin-Ciocalteu returns one total and names no compounds."
                    }
                  />
                  <Tile label="Harvest" value={o.harvest} avg={o.organic ? "organic" : undefined} note="Early October, cold-pressed within hours." />
                  <a
                    href={o.certificateHref}
                    className="inline-flex items-center gap-2 mt-1 text-olive-dark underline underline-offset-4 decoration-olive-dark/40 transition-opacity hover:opacity-70"
                    style={{ fontFamily: SG, fontSize: "clamp(0.95rem, 1.1vw, 1.15rem)" }}
                  >
                    <Beaker size={18} />
                    {t.viewLabResults}
                  </a>
                </div>
              );
            })}
          </div>

          <p className="text-olive-medium mt-9" style={{ fontFamily: SG, fontSize: "clamp(0.875rem, 1.05vw, 1.063rem)" }}>
            Totals from different test methods cannot be compared with each other; oleocanthal and oleacein can.{" "}
            <a href="/polyphenol-methods" className="text-olive-dark underline underline-offset-4 decoration-olive-dark/40">How polyphenols are measured</a>
          </p>
        </div>
      </div>
    </section>
  );
};
