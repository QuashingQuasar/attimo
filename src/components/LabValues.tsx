import { Card, CardContent } from "@/components/ui/card";

export const LabValues = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-olive-dark mb-6 tracking-tight">
              STARTING WITH PORTUGAL 2024
            </h2>
             <p className="text-xl text-olive-medium leading-relaxed" style={{ fontFamily: 'Space Grotesk, monospace' }}>
               Our first selection: 30L of exceptional Galega olives from Alentejo. 
               Here's why this oil represents everything we stand for.
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Product Details */}
            <Card className="bg-white shadow-lg border-olive-light/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-olive-dark mb-6">ORIGIN & PROFILE</h3>
                <div className="space-y-4 text-left">
                  <div>
                    <span className="font-bold text-olive-dark">ORIGIN:</span>
                    <span className="text-olive-medium ml-2">Alentejo, Portugal</span>
                  </div>
                  <div>
                    <span className="font-bold text-olive-dark">OLIVE:</span>
                    <span className="text-olive-medium ml-2">Galega variety</span>
                  </div>
                  <div>
                    <span className="font-bold text-olive-dark">HARVEST:</span>
                    <span className="text-olive-medium ml-2">October 2024</span>
                  </div>
                  <div>
                    <span className="font-bold text-olive-dark">FLAVOR:</span>
                    <span className="text-olive-medium ml-2">Green & grassy, peppery finish</span>
                  </div>
                  <div>
                    <span className="font-bold text-olive-dark">FARM:</span>
                    <span className="text-olive-medium ml-2">3rd generation family grove</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lab Values */}
            <Card className="bg-white shadow-lg border-olive-light/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-olive-dark mb-6">LAB VALUES</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-olive-dark">904 MG/KG</div>
                     <div className="text-sm text-olive-medium" style={{ fontFamily: 'Space Grotesk, monospace' }}>POLYPHENOLS</div>
                     <div className="text-xs text-olive-light mt-1" style={{ fontFamily: 'Space Grotesk, monospace' }}>avg. ~180mg/kg</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-olive-dark">0.16%</div>
                     <div className="text-sm text-olive-medium" style={{ fontFamily: 'Space Grotesk, monospace' }}>ACIDITY</div>
                     <div className="text-xs text-olive-light mt-1" style={{ fontFamily: 'Space Grotesk, monospace' }}>avg. ~0.8%</div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="px-4 py-2" style={{ backgroundColor: '#CDDB2D' }}>
                      <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#494F35' }}>PEROXIDES</div>
                    </div>
                    <div className="p-4 text-center bg-white">
                      <div className="text-3xl font-bold text-olive-dark">6.3</div>
                      <div className="text-sm text-olive-medium" style={{ fontFamily: 'Space Grotesk, monospace' }}>MEQ/KG</div>
                      <div className="text-xs text-olive-light mt-1" style={{ fontFamily: 'Space Grotesk, monospace' }}>avg. ~20meq/kg</div>
                      <p className="mt-2 text-xs text-olive-medium" style={{ fontFamily: 'Space Grotesk, monospace' }}>lower = fresher oil, less oxidation and longer shelf life</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-olive-dark text-cream p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">BUILDING TOWARDS 2026</h3>
             <p className="text-lg leading-relaxed" style={{ fontFamily: 'Space Grotesk, monospace' }}>
               This Portuguese oil is just the beginning. Over the next two years, we'll be curating exceptional oils 
               from small groves across Greece, Italy, and Spain. Each harvest, each region, each story -
              all selected for their authenticity and quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};