import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ProductInfoTabs = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue="details" className="w-full">
        <div className="border border-olive-dark rounded-2xl overflow-hidden bg-transparent">
          <TabsList className="grid w-full grid-cols-4 bg-transparent p-0 h-auto rounded-none border-0 border-b border-olive-dark">
            <TabsTrigger 
              value="details" 
              className="data-[state=active]:bg-[#1B4229] data-[state=active]:text-white text-olive-dark font-semibold rounded-none border-0 px-3 py-1.5 h-auto uppercase tracking-wide"
              style={{ fontSize: 'clamp(0.65rem, 0.8vw, 0.875rem)' }}
            >
              DETAILS
            </TabsTrigger>
            <TabsTrigger 
              value="flavor" 
              className="data-[state=active]:bg-[#1B4229] data-[state=active]:text-white text-olive-dark font-semibold rounded-none border-0 px-3 py-1.5 h-auto uppercase tracking-wide"
              style={{ fontSize: 'clamp(0.65rem, 0.8vw, 0.875rem)' }}
            >
              FLAVOR
            </TabsTrigger>
            <TabsTrigger 
              value="harvest" 
              className="data-[state=active]:bg-[#1B4229] data-[state=active]:text-white text-olive-dark font-semibold rounded-none border-0 px-3 py-1.5 h-auto uppercase tracking-wide"
              style={{ fontSize: 'clamp(0.65rem, 0.8vw, 0.875rem)' }}
            >
              HARVEST
            </TabsTrigger>
            <TabsTrigger 
              value="uses" 
              className="data-[state=active]:bg-[#1B4229] data-[state=active]:text-white text-olive-dark font-semibold rounded-none border-0 px-3 py-1.5 h-auto uppercase tracking-wide"
              style={{ fontSize: 'clamp(0.65rem, 0.8vw, 0.875rem)' }}
            >
              USES
            </TabsTrigger>
          </TabsList>
        
          <TabsContent value="details" className="p-6 m-0 min-h-[200px] rounded-none bg-transparent">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm font-semibold text-olive-dark uppercase tracking-wide mb-1" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                ORIGIN
              </div>
              <div className="text-olive-medium" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)' }}>Alentejo, Portugal</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-olive-dark uppercase tracking-wide mb-1" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                OLIVE
              </div>
              <div className="text-olive-medium" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)' }}>Galega</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-olive-dark uppercase tracking-wide mb-1" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                FLAVOR
              </div>
              <div className="text-olive-medium" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)' }}>green & grassy</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-olive-dark uppercase tracking-wide mb-1" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                STORE
              </div>
              <div className="text-olive-medium" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)' }}>keep away from light and heat</div>
            </div>
          </div>
        </TabsContent>
        
          <TabsContent value="flavor" className="p-6 m-0 min-h-[200px] rounded-none bg-transparent">
            <div className="space-y-4">
              {[
                { label: "PEPPERY", rating: 4 },
                { label: "FRUITY", rating: 5 },
                { label: "BITTER", rating: 4 },
                { label: "HERBAL", rating: 3 }
              ].map((flavor) => (
                <div key={flavor.label} className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-olive-dark uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                    {flavor.label}
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`w-4 h-6 rounded-full ${
                          i <= flavor.rating 
                            ? 'bg-olive-dark' 
                            : 'bg-olive-light/30'
                        }`}
                        style={{
                          clipPath: 'ellipse(50% 70% at 50% 30%)'
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="harvest" className="p-6 m-0 min-h-[200px] rounded-none bg-transparent">
             <div className="text-olive-medium leading-relaxed" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)' }}>
              <p>
                Hand-picked in October 2024 during the optimal harvest window. The olives were processed within 4 hours of harvest using traditional stone mills, preserving maximum antioxidants and flavor compounds. This early harvest ensures the highest polyphenol content.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="uses" className="p-6 m-0 min-h-[200px] rounded-none bg-transparent">
            <div className="text-olive-medium leading-relaxed" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)' }}>
              <p>
                Like a sprinkle of flaky salt or the squeeze of a good condiment, Drizzle adds a big pop of flavor right before you dig in. (That's why it's called a finishing oil!) Drizzle's flavors are sensitive, though, so keep it off the heat.
              </p>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};