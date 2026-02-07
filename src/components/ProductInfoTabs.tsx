import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Beaker } from "lucide-react";
import { ProductContent } from "@/lib/productContent";

interface ProductInfoTabsProps {
  content: ProductContent;
}

export const ProductInfoTabs = ({ content }: ProductInfoTabsProps) => {
  const { tabs, labReportUrl } = content;

  return <div className="w-full">
      <Tabs defaultValue="details" className="w-full">
        <div className="border border-olive-dark rounded-xl overflow-hidden bg-transparent">
          <TabsList className="grid w-full grid-cols-4 bg-transparent p-0 h-auto rounded-none border-0 border-b border-olive-dark">
            <TabsTrigger value="details" className="data-[state=active]:bg-[#1B4229] data-[state=active]:text-white text-olive-dark font-semibold rounded-none border-0 px-3 py-1.5 h-auto uppercase tracking-wide" style={{ fontSize: 'clamp(0.8rem, 1vw, 1.1rem)' }}>
              DETAILS
            </TabsTrigger>
            <TabsTrigger value="flavor" className="data-[state=active]:bg-[#1B4229] data-[state=active]:text-white text-olive-dark font-semibold rounded-none border-0 px-3 py-1.5 h-auto uppercase tracking-wide" style={{ fontSize: 'clamp(0.8rem, 1vw, 1.1rem)' }}>
              FLAVOR
            </TabsTrigger>
            <TabsTrigger value="harvest" className="data-[state=active]:bg-[#1B4229] data-[state=active]:text-white text-olive-dark font-semibold rounded-none border-0 px-3 py-1.5 h-auto uppercase tracking-wide" style={{ fontSize: 'clamp(0.8rem, 1vw, 1.1rem)' }}>
              HARVEST
            </TabsTrigger>
            <TabsTrigger value="uses" className="data-[state=active]:bg-[#1B4229] data-[state=active]:text-white text-olive-dark font-semibold rounded-none border-0 px-3 py-1.5 h-auto uppercase tracking-wide" style={{ fontSize: 'clamp(0.8rem, 1vw, 1.1rem)' }}>
              USES
            </TabsTrigger>
          </TabsList>
        
          <TabsContent value="details" className="p-5 m-0 min-h-[220px] rounded-none bg-transparent">
          <div className="grid grid-cols-2 gap-4">
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
        </TabsContent>
        
          <TabsContent value="flavor" className="p-5 m-0 min-h-[220px] rounded-none bg-transparent">
            <div className="space-y-4">
              {tabs.flavorProfile.map(flavor => <div key={flavor.label} className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-olive-dark uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                      {flavor.label}
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => <img key={i} src="/icons/olive.svg" alt="" className={`w-4 h-6 ${i <= flavor.rating ? 'opacity-100' : 'opacity-30'}`} style={{ filter: i <= flavor.rating ? 'none' : 'grayscale(100%)' }} />)}
                    </div>
                  </div>)}
            </div>
          </TabsContent>
          
          <TabsContent value="harvest" className="p-5 m-0 min-h-[220px] rounded-none bg-transparent">
             <div className="text-olive-medium leading-relaxed" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)' }}>
              <p>{tabs.harvest}</p>
            </div>
          </TabsContent>
          
          <TabsContent value="uses" className="p-5 m-0 min-h-[220px] rounded-none bg-transparent">
            <div className="text-olive-medium leading-relaxed" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)' }}>
              <p>{tabs.uses}</p>
              {tabs.usesExtra && <p className="mt-3">{tabs.usesExtra}</p>}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>;
};
