import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Beaker, Flower2, Sprout, UtensilsCrossed } from "lucide-react";
import { ProductContent } from "@/lib/productContent";

interface ProductInfoTabsProps {
  content: ProductContent;
}

export const ProductInfoTabs = ({ content }: ProductInfoTabsProps) => {
  const { tabs, labReportUrl } = content;

  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full">
        {/* Details / Lab Results */}
        <AccordionItem value="details" className="border-olive-light/30">
          <AccordionTrigger className="py-5 hover:no-underline">
            <span className="flex items-center gap-3 text-olive-dark font-semibold uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.95rem, 1.1vw, 1.2rem)' }}>
              <Beaker size={20} className="text-olive-dark" />
              3rd Party Laboratory Results
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-4 pt-1 pb-2">
              <div>
                <div className="text-sm font-semibold text-olive-dark uppercase tracking-wide mb-1" style={{ fontFamily: 'Space Grotesk, monospace' }}>ORIGIN</div>
                <div className="text-olive-medium" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)' }}>{tabs.details.origin}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-olive-dark uppercase tracking-wide mb-1" style={{ fontFamily: 'Space Grotesk, monospace' }}>OLIVE</div>
                <div className="text-olive-medium" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)' }}>{tabs.details.olive}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-olive-dark uppercase tracking-wide mb-1" style={{ fontFamily: 'Space Grotesk, monospace' }}>FLAVOR</div>
                <div className="text-olive-medium" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)' }}>{tabs.details.flavor}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-olive-dark uppercase tracking-wide mb-1" style={{ fontFamily: 'Space Grotesk, monospace' }}>STORE</div>
                <div className="text-olive-medium" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)' }}>{tabs.details.store}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-olive-dark uppercase tracking-wide mb-1" style={{ fontFamily: 'Space Grotesk, monospace' }}>LAB VALUES</div>
                <a href={labReportUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-olive-medium hover:text-olive-dark transition-colors" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)' }}>
                  <Beaker size={16} className="flex-shrink-0" />
                  <span className="underline">view lab results</span>
                </a>
              </div>
              <div>
                <div className="text-sm font-semibold text-olive-dark uppercase tracking-wide mb-1" style={{ fontFamily: 'Space Grotesk, monospace' }}>VOLUME</div>
                <div className="text-olive-medium" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)' }}>{tabs.details.volume}</div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Taste Profile */}
        <AccordionItem value="flavor" className="border-olive-light/30">
          <AccordionTrigger className="py-5 hover:no-underline">
            <span className="flex items-center gap-3 text-olive-dark font-semibold uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.95rem, 1.1vw, 1.2rem)' }}>
              <Flower2 size={20} className="text-olive-dark" />
              Taste Profile
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-1 pb-2">
              {tabs.flavorProfile.map(flavor => (
                <div key={flavor.label} className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-olive-dark uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                    {flavor.label}
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <img key={i} src="/icons/olive.svg" alt="" className={`w-4 h-6 ${i <= flavor.rating ? 'opacity-100' : 'opacity-30'}`} style={{ filter: i <= flavor.rating ? 'none' : 'grayscale(100%)' }} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Harvest Details */}
        <AccordionItem value="harvest" className="border-olive-light/30">
          <AccordionTrigger className="py-5 hover:no-underline">
            <span className="flex items-center gap-3 text-olive-dark font-semibold uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.95rem, 1.1vw, 1.2rem)' }}>
              <Sprout size={20} className="text-olive-dark" />
              Harvest Details
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-olive-medium leading-relaxed pt-1 pb-2" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)' }}>
              <p>{tabs.harvest}</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Uses */}
        <AccordionItem value="uses" className="border-olive-light/30">
          <AccordionTrigger className="py-5 hover:no-underline">
            <span className="flex items-center gap-3 text-olive-dark font-semibold uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.95rem, 1.1vw, 1.2rem)' }}>
              <UtensilsCrossed size={20} className="text-olive-dark" />
              Best Uses
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-olive-medium leading-relaxed pt-1 pb-2" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)' }}>
              <p>{tabs.uses}</p>
              {tabs.usesExtra && <p className="mt-3">{tabs.usesExtra}</p>}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
