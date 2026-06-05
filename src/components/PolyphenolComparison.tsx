import { useState } from "react";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";

interface PolyphenolComparisonProps {
  productValue?: number;
  productLabel?: string;
  locale?: Locale;
}

export const PolyphenolComparison = ({ productValue = 904, productLabel = "ATTIMO OLIVE OIL", locale = DEFAULT_LOCALE }: PolyphenolComparisonProps) => {
  const t = getDict(locale).polyphenol;
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  // Name/handle/avatar are locale-independent; copy comes from the dictionary.
  const tweets = [
    { id: 1, name: "Olive", handle: "@olvlimits", avatar: "🫒", content: t.cards[0].content, content2: t.cards[0].content2 },
    { id: 2, name: "Olive", handle: "@olvlimits", avatar: "🫒", content: t.cards[1].content, content2: t.cards[1].content2 },
    { id: 3, name: "Olive", handle: "@olvlimits", avatar: "🫒", content: t.cards[2].content, content2: t.cards[2].content2 },
  ];

  const barTooltips: Record<number, {title: string;subtitle: string;description: string;}> = {
    0: { title: t.tooltips.avgTitle, subtitle: t.tooltips.avgSub, description: t.tooltips.avgDesc },
    1: { title: t.tooltips.euTitle, subtitle: t.tooltips.euSub, description: t.tooltips.euDesc },
    2: { title: t.tooltips.blueprintTitle, subtitle: t.tooltips.blueprintSub, description: t.tooltips.blueprintDesc },
    3: { title: t.tooltips.attimoTitle, subtitle: t.tooltips.attimoSub, description: t.tooltips.attimoDesc },
  };

  const comparisonData = [
  { name: t.barAvg, value: 180, color: "bg-[#A8B88F]" },
  { name: t.barEu, value: 250, color: "bg-[#8A9B6F]" },
  { name: t.barBlueprint, value: 400, color: "bg-[#5C6E45]" },
  { name: productLabel, value: productValue, color: "bg-[#1B4229]" }];


  const maxValue = Math.max(...comparisonData.map((item) => item.value));

  return (
    <section className="pt-14 md:pt-20 lg:pt-24 pb-[35px] md:pb-[51px] lg:pb-[62px] snap-start" style={{ backgroundColor: '#FFFAEA' }}>
      <div>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto" style={{ zoom: 0.88 }}>
            <h2 className="font-bold leading-[0.92] text-olive-dark mb-6 tracking-tight" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(2.5rem, 4vw, 4.5rem)' }}>
              {t.heading}
            </h2>
            <p className="text-olive-medium leading-relaxed mb-12" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1rem, 1.2vw, 1.375rem)', maxWidth: '53.2rem' }}>{t.intro}

            </p>

            <div className="space-y-4">
              {comparisonData.map((item, index) => {
                let width: string;
                if (index === 0) width = '35%';else
                if (index === 1) width = '40%';else
                if (index === 2) width = '50%';else
                width = '95%';

                const tooltip = barTooltips[index];

                return (
                  <div
                    key={index}
                    className="relative flex items-center gap-4"
                    onMouseEnter={() => setHoveredBar(index)}
                    onMouseLeave={() => setHoveredBar(null)}>
                    
                    <div
                      className={`h-16 rounded-lg ${item.color} flex items-center px-4 md:px-6 text-cream font-medium transition-all duration-700 ease-out ${index === 3 ? 'justify-between' : ''} cursor-default`}
                      style={{ width }}>
                      
                      <span
                        className={`font-medium whitespace-nowrap text-sm md:text-base ${index === 3 ? 'font-working-man' : ''}`}
                        style={index !== 3 ? { fontFamily: 'Space Grotesk, sans-serif' } : {}}>
                        
                        {item.name}
                      </span>
                      {index === 3 &&
                      <span className="font-bold text-cream whitespace-nowrap text-sm md:text-base" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.375rem)' }}>
                          400-900 mg/kg
                        </span>
                      }
                    </div>
                    {index !== 3 &&
                    <span className="font-bold text-olive-dark whitespace-nowrap text-sm md:text-base" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.375rem)' }}>
                        {index === 2 ? '400 mg/kg' : `${item.value} mg/kg`}
                      </span>
                    }

                    {/* Hover tooltip */}
                    {tooltip && hoveredBar === index &&
                    <div
                      className="absolute z-50 rounded-xl shadow-xl border border-olive-dark/10 p-5 w-72 md:w-80 pointer-events-none"
                      style={{
                        backgroundColor: '#FFFAEA',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        left: width,
                        marginLeft: '4.5rem',
                        animation: 'fadeInTooltip 0.2s ease-out',
                        boxShadow: '0 8px 32px -4px rgba(27, 66, 41, 0.12), 0 2px 8px -2px rgba(27, 66, 41, 0.08)'
                      }}>
                      
                        <h4 className="font-bold text-olive-dark text-base mb-1" style={{ fontFamily: 'UDC Working Man Sans, sans-serif' }}>
                          {tooltip.title}
                        </h4>
                        <p className="text-olive-medium text-sm mb-2.5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          {tooltip.subtitle}
                        </p>
                        <p className="text-olive-dark/60 text-sm leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          {tooltip.description}
                        </p>
                      </div>
                    }
                  </div>);

              })}
            </div>

            <div className="mt-4 md:mt-8 lg:mt-16">
              <div className="bg-accent rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 min-h-0 md:min-h-64 lg:min-h-96">
                <div className="grid grid-cols-1 md:grid-cols-3 h-full divide-y md:divide-y-0 md:divide-x divide-olive-dark/10">
                  {tweets.map((tweet, index) => {
                    const bgColors = ['#B3E58C', '#CDDB2D', '#EBDD21'];
                    const textColors = ['text-olive-dark', 'text-olive-dark', 'text-olive-dark'];
                    const icons = ['/icons/lady-2.svg', '/icons/basket-2.svg', '/icons/branch-2.svg'];

                    return (
                      <div key={tweet.id} className="p-6 flex flex-col h-full min-h-0 md:min-h-64 lg:min-h-96" style={{ backgroundColor: bgColors[index] }}>
                        <div className="space-y-4 flex-grow">
                          <p className={`${textColors[index]} leading-relaxed`} style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.125rem, 1.1vw, 1.25rem)' }}>
                            {tweet.content}
                          </p>
                          <p className="text-olive-dark/80 leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(1.125rem, 1.1vw, 1.25rem)' }}>
                            {tweet.content2}
                          </p>
                        </div>
                        <div className="flex items-center justify-center mt-4">
                          <div className="w-[92px] h-[92px] md:w-[92px] md:h-[92px] lg:w-[115px] lg:h-[115px] flex items-center justify-center">
                            <img src={icons[index]} alt="icon" className="w-full h-full object-contain" style={{ filter: 'invert(14%) sepia(23%) saturate(1471%) hue-rotate(98deg) brightness(95%) contrast(92%)' }} />
                          </div>
                        </div>
                      </div>);

                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInTooltip {
          from { opacity: 0; transform: translateY(-50%) translateX(-6px); }
          to { opacity: 1; transform: translateY(-50%) translateX(0); }
        }
      `}</style>
    </section>);

};