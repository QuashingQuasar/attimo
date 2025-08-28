export const Solution = () => {
  return (
    <section className="py-24 bg-[hsl(var(--section-dark))] text-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light text-cream mb-8 leading-tight tracking-tight">
            Olive oil you can<br />
            <span className="font-medium italic">trust & trace.</span>
          </h2>
          <p className="text-xl text-cream/90 max-w-4xl mx-auto leading-relaxed font-light">
            Every bottle comes with complete transparency: origin story, taste profile, and lab verification.
            This is what authentic extra virgin should be.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-cream/95 rounded-lg border border-cream/20 shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Product Image */}
              <div className="bg-gradient-to-br from-olive-light/10 to-olive-medium/10 p-12 flex items-center justify-center">
                <div className="w-48 h-80 bg-olive-medium/20 rounded-lg flex items-center justify-center border-2 border-olive-light/30">
                  <span className="text-olive-medium font-light text-sm">Product Image</span>
                </div>
              </div>
              
              {/* Product Details */}
              <div className="p-12">
                <div className="mb-8">
                  <h3 className="text-2xl font-light text-olive-dark mb-2">Quinta da Serra</h3>
                  <p className="text-olive-medium font-light">2024 Portuguese Harvest</p>
                </div>
                
                <div className="space-y-6 text-sm">
                  <div>
                    <h4 className="font-medium text-olive-dark mb-2">ORIGIN</h4>
                    <p className="text-olive-medium leading-relaxed">
                      Family grove since 1890<br />
                      Trás-os-Montes, Portugal<br />
                      Harvest: October 2024<br />
                      Variety: Cobrançosa & Verdeal
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-olive-dark mb-2">TASTE PROFILE</h4>
                    <p className="text-olive-medium leading-relaxed">
                      Intensity: Medium<br />
                      Bitter: ★★★☆☆ | Pepper: ★★★★☆<br />
                      Notes: Green apple, fresh herbs
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-olive-dark mb-2">LAB VERIFIED</h4>
                    <p className="text-olive-medium leading-relaxed">
                      Acidity: 0.2% | Polyphenols: 486 mg/kg<br />
                      Peroxide: 4.8 meq O₂/kg<br />
                      Certified: November 2024
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-olive-light/30">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-light text-olive-dark">€28</span>
                    <span className="text-olive-medium text-sm">500ml</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};