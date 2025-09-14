import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ProductInfoTabs = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue="details" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-white/60 border border-olive-light/10">
          <TabsTrigger 
            value="details" 
            className="data-[state=active]:bg-olive-dark data-[state=active]:text-cream text-olive-dark font-semibold"
          >
            DETAILS
          </TabsTrigger>
          <TabsTrigger 
            value="flavor" 
            className="data-[state=active]:bg-olive-dark data-[state=active]:text-cream text-olive-dark font-semibold"
          >
            FLAVOR
          </TabsTrigger>
          <TabsTrigger 
            value="harvest" 
            className="data-[state=active]:bg-olive-dark data-[state=active]:text-cream text-olive-dark font-semibold"
          >
            HARVEST
          </TabsTrigger>
          <TabsTrigger 
            value="uses" 
            className="data-[state=active]:bg-olive-dark data-[state=active]:text-cream text-olive-dark font-semibold"
          >
            USES
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="details" className="bg-cream/60 p-6 rounded-b-2xl border border-t-0 border-olive-light/10 min-h-[200px]">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-semibold text-olive-dark uppercase tracking-wide mb-1" style={{ fontFamily: 'Inconsolata, monospace' }}>
                  ORIGIN
                </div>
                <div className="text-olive-medium" style={{ fontFamily: 'Inconsolata, monospace' }}>Alentejo, Portugal</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-olive-dark uppercase tracking-wide mb-1" style={{ fontFamily: 'Inconsolata, monospace' }}>
                  OLIVE
                </div>
                <div className="text-olive-medium" style={{ fontFamily: 'Inconsolata, monospace' }}>Galega</div>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-olive-dark uppercase tracking-wide mb-1" style={{ fontFamily: 'Inconsolata, monospace' }}>
                FLAVOR
              </div>
              <div className="text-olive-medium" style={{ fontFamily: 'Inconsolata, monospace' }}>green & grassy</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-olive-dark uppercase tracking-wide mb-1" style={{ fontFamily: 'Inconsolata, monospace' }}>
                STORE
              </div>
              <div className="text-olive-medium" style={{ fontFamily: 'Inconsolata, monospace' }}>keep away from light and heat</div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="flavor" className="bg-cream/60 p-6 rounded-b-2xl border border-t-0 border-olive-light/10 min-h-[200px]">
          <div className="space-y-4">
            {[
              { label: "PEPPERY", rating: 4 },
              { label: "FRUITY", rating: 5 },
              { label: "BITTER", rating: 4 },
              { label: "HERBAL", rating: 3 }
            ].map((flavor) => (
              <div key={flavor.label} className="flex items-center justify-between">
                <span className="text-sm font-semibold text-olive-dark uppercase tracking-wide" style={{ fontFamily: 'Inconsolata, monospace' }}>
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
        
        <TabsContent value="harvest" className="bg-cream/60 p-6 rounded-b-2xl border border-t-0 border-olive-light/10 min-h-[200px]">
           <div className="text-olive-medium leading-relaxed" style={{ fontFamily: 'Inconsolata, monospace' }}>
            <p>
              Hand-picked in October 2024 during the optimal harvest window. The olives were processed within 4 hours of harvest using traditional stone mills, preserving maximum antioxidants and flavor compounds. This early harvest ensures the highest polyphenol content.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="uses" className="bg-cream/60 p-6 rounded-b-2xl border border-t-0 border-olive-light/10 min-h-[200px]">
          <div className="text-olive-medium leading-relaxed" style={{ fontFamily: 'Inconsolata, monospace' }}>
            <p>
              Like a sprinkle of flaky salt or the squeeze of a good condiment, Drizzle adds a big pop of flavor right before you dig in. (That's why it's called a finishing oil!) Drizzle's flavors are sensitive, though, so keep it off the heat.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};