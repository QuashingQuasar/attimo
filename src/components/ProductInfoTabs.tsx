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
            value="glass" 
            className="data-[state=active]:bg-olive-dark data-[state=active]:text-cream text-olive-dark font-semibold"
          >
            GLASS
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
                <div className="text-sm font-semibold text-olive-dark uppercase tracking-wide mb-1">
                  ORIGIN
                </div>
                <div className="text-olive-medium">Alentejo, Portugal</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-olive-dark uppercase tracking-wide mb-1">
                  OLIVE
                </div>
                <div className="text-olive-medium">Galega</div>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-olive-dark uppercase tracking-wide mb-1">
                FLAVOR
              </div>
              <div className="text-olive-medium">green & grassy</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-olive-dark uppercase tracking-wide mb-1">
                STORE
              </div>
              <div className="text-olive-medium">keep away from light and heat</div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="glass" className="bg-cream/60 p-6 rounded-b-2xl border border-t-0 border-olive-light/10 min-h-[200px]">
          <div className="text-olive-medium leading-relaxed">
            <p>
              Our bottles are designed to protect the oil from light and oxidation. The dark glass blocks harmful UV rays that can degrade the oil's quality and nutritional benefits. Each bottle is carefully sealed to maintain freshness from harvest to your table.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="harvest" className="bg-cream/60 p-6 rounded-b-2xl border border-t-0 border-olive-light/10 min-h-[200px]">
          <div className="text-olive-medium leading-relaxed">
            <p>
              Hand-picked in October 2024 during the optimal harvest window. The olives were processed within 4 hours of harvest using traditional stone mills, preserving maximum antioxidants and flavor compounds. This early harvest ensures the highest polyphenol content.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="uses" className="bg-cream/60 p-6 rounded-b-2xl border border-t-0 border-olive-light/10 min-h-[200px]">
          <div className="text-olive-medium leading-relaxed">
            <p>
              Like a sprinkle of flaky salt or the squeeze of a good condiment, Drizzle adds a big pop of flavor right before you dig in. (That's why it's called a finishing oil!) Drizzle's flavors are sensitive, though, so keep it off the heat.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};