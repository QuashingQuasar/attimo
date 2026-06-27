import { ReactNode } from "react";
import { AlertTriangle, Blend, Eye, Building2 } from "lucide-react";
import { AutoplayVideo } from "@/components/AutoplayVideo";
import { Card, CardContent } from "@/components/ui/card";
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
  return <section className="py-16 md:py-28 lg:py-32 lg:min-h-screen px-8 md:px-12 lg:px-16 bg-[#1B4229] snap-start flex items-center">
      <div className="mx-auto px-4 w-[85vw]">
        <div className="relative overflow-hidden rounded-3xl lg:min-h-[85vh] lg:flex lg:flex-col lg:justify-center">
          <AutoplayVideo src="/videos/harvest-2024-1.mp4" className="absolute inset-0 w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden" />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="relative z-10 py-5 px-5 md:py-7 lg:py-24 md:px-10 max-w-[60vw] mx-auto">
        <div className="mx-auto">
          <div className="text-left mb-6 md:mb-6 lg:mb-10">
            <h2 className={`font-light mb-3 md:mb-5 leading-tight tracking-tight ${heading ? "" : "whitespace-nowrap"}`} style={{
                fontFamily: 'UDC Working Man Sans, sans-serif',
                color: '#CDDB2D',
                fontSize: 'clamp(1.5rem, 2.5vw, 3.5rem)'
              }}>
              {heading ? heading : <>{t.headingPre} <span className="font-medium italic">{t.headingLie}</span></>}
            </h2>
             <p className="text-white/90 leading-relaxed font-light" style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(0.9rem, 1vw, 1.6rem)'
              }}>{intro ?? t.intro}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-6 lg:mb-10">
            <div className="text-center p-4 md:p-5 border border-white rounded-lg">
              <div className="font-working-man font-light text-white mb-2 md:mb-3" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 3.5rem)' }}>{stat1Value}</div>
               <p className="text-white/90 font-light leading-relaxed" style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: 'clamp(0.8rem, 0.9vw, 1.5rem)'
                 }}>{stat1Text}
                </p>
            </div>
            <div className="text-center p-4 md:p-5 border border-white rounded-lg">
              <div className="font-working-man font-light text-white mb-2 md:mb-3" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 3.5rem)' }}>{stat2Value}</div>
               <p className="text-white/90 font-light leading-relaxed" style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                   fontSize: 'clamp(0.8rem, 0.9vw, 1.5rem)'
                 }}>{stat2Text}
                </p>
            </div>
          </div>

          {footnote && (
            <div className="mb-6 md:mb-6 lg:mb-10 text-white/70 leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.7rem, 0.8vw, 1rem)' }}>
              {footnote}
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-6 md:gap-10 mx-auto">
            {argList.map((arg, i) => (
              <div key={i} className="space-y-2 md:space-y-2">
                <h3 className="font-bold text-white tracking-tight leading-tight" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(0.9rem, 1.1vw, 1.8rem)' }}>
                  {arg.title}
                </h3>
                <p className="text-white/80 leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(0.8rem, 0.9vw, 1.5rem)' }}>{arg.text}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>;
};
