import { ReactNode } from "react";
import { AutoplayVideo } from "@/components/AutoplayVideo";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";
interface IndustryProblemProps {
  locale?: Locale;
  /** Override the heading (default: dictionary "The «extra virgin» lie"). */
  heading?: string;
  /** Override the intro paragraph (default: dictionary copy). */
  intro?: string;
  /** Override the two headline stats (value + supporting text). */
  stat1?: { value: string; text: string };
  stat2?: { value: string; text: string };
  /**
   * Replace the three argument columns with page-specific copy. Used on the
   * high-polyphenol hub so its prose isn't byte-identical to the homepage
   * (duplicate content). Defaults to the dictionary arguments.
   */
  args?: { title: string; text: string }[];
  /**
   * Optional sourced footnote rendered under the stats. Used on the
   * high-polyphenol hub to attach real citations to the figures (a ranking
   * page must not present unsourced hard stats). Omitted on the homepage.
   */
  footnote?: ReactNode;
}
export const IndustryProblem = ({ locale = DEFAULT_LOCALE, heading, intro, stat1, stat2, args, footnote }: IndustryProblemProps = {}) => {
  const t = getDict(locale).industryProblem;
  const stat1Value = stat1?.value ?? t.stat1Value;
  const stat1Text = stat1?.text ?? t.stat1Text;
  const stat2Value = stat2?.value ?? t.stat2Value;
  const stat2Text = stat2?.text ?? t.stat2Text;
  const argList = args ?? [
    { title: t.arg1Title, text: t.arg1Text },
    { title: t.arg2Title, text: t.arg2Text },
    { title: t.arg3Title, text: t.arg3Text },
  ];
  const CREAM = "#FFFAEA";
  const SG = "Space Grotesk, sans-serif";
  const UDC = "UDC Working Man Sans, sans-serif";
  const body = "clamp(1rem, 1.15vw, 1.2rem)";
  const stats = [
    { value: stat1Value, text: stat1Text },
    { value: stat2Value, text: stat2Text },
  ];
  return <section className="py-14 md:py-24 lg:py-28 px-4 md:px-8 lg:px-12 bg-[#1B4229] snap-start">
      <div className="mx-auto" style={{ maxWidth: 1360 }}>
        <div className="relative overflow-hidden rounded-3xl">
          <AutoplayVideo src="/videos/harvest-2024-1.mp4" className="absolute inset-0 w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden" />
          <div className="absolute inset-0 backdrop-blur-sm" style={{ backgroundColor: "rgba(16,34,27,.8)" }}></div>
          <div className="relative z-10 px-6 py-10 md:px-12 md:py-16 lg:px-16 lg:py-20">
            <h2 className="font-light mb-6 lg:mb-10 tracking-tight" style={{
                fontFamily: UDC,
                color: '#CDDB2D',
                fontSize: 'clamp(2.1rem, 3.5vw, 3.6rem)',
                lineHeight: 1.05,
              }}>
              {heading ? heading : <>{t.headingPre} <span className="font-medium italic">{t.headingLie}</span></>}
            </h2>

            {/* Intro on the left, the two figures on the right. */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <p className="lg:col-span-5 leading-relaxed" style={{ fontFamily: SG, color: "rgba(255,250,234,.88)", fontSize: 'clamp(1.05rem, 1.25vw, 1.3rem)' }}>{intro ?? t.intro}</p>
              <div className="lg:col-span-7 grid grid-cols-2">
                {stats.map((st, i) => (
                  <div key={i} className={i === 0 ? "pr-5 md:pr-10" : "pl-5 md:pl-10"} style={i === 1 ? { borderLeft: "1px dashed rgba(255,250,234,.4)" } : undefined}>
                    <div className="font-light tracking-tight" style={{ fontFamily: UDC, color: CREAM, fontSize: 'clamp(2.9rem, 6.2vw, 6rem)', lineHeight: 0.95 }}>{st.value}</div>
                    <p className="mt-3 md:mt-4 leading-snug" style={{ fontFamily: SG, color: "rgba(255,250,234,.85)", fontSize: body }}>{st.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {footnote && (
              <div className="mt-8 lg:mt-10 leading-relaxed" style={{ fontFamily: SG, color: "rgba(255,250,234,.7)", fontSize: 'clamp(0.85rem, 0.9vw, 1rem)' }}>
                {footnote}
              </div>
            )}

            <div className="mt-10 lg:mt-14 pt-8 lg:pt-12 grid lg:grid-cols-3 gap-8 lg:gap-12" style={{ borderTop: "1px dashed rgba(255,250,234,.4)" }}>
              {argList.map((arg, i) => (
                <div key={i}>
                  <h3 className="font-bold tracking-tight leading-tight mb-2 md:mb-3" style={{ fontFamily: UDC, color: CREAM, fontSize: 'clamp(1.15rem, 1.45vw, 1.5rem)' }}>
                    {arg.title}
                  </h3>
                  <p className="leading-relaxed" style={{ fontFamily: SG, color: "rgba(255,250,234,.82)", fontSize: body }}>{arg.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
