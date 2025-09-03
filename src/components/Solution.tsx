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
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-cream rounded-2xl shadow-2xl overflow-hidden border border-cream/30">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Product Image */}
              <div className="bg-gradient-to-br from-olive-light/5 to-olive-medium/10 p-16 flex items-center justify-center">
                <div className="w-56 h-96 bg-olive-medium/15 rounded-2xl flex items-center justify-center border border-olive-light/20 shadow-lg">
                  <span className="text-olive-medium/60 font-light">Product Image</span>
                </div>
              </div>
              
              {/* Product Details */}
              <div className="p-12 bg-cream">
                <div className="mb-10">
                  <h3 className="text-3xl font-light text-olive-dark mb-3 tracking-tight">Quinta da Serra</h3>
                  <p className="text-olive-medium/80 text-lg font-light tracking-wide">2024 Portuguese Harvest</p>
                </div>
                
                <div className="space-y-8">
                  {/* Origin Section */}
                  <div className="bg-olive-light/5 rounded-xl p-6 border-l-4 border-olive-medium">
                    <h4 className="font-semibold text-olive-dark mb-4 text-sm uppercase tracking-wider">Origin</h4>
                    <div className="space-y-2 text-olive-dark/90">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Family grove since</span>
                        <span className="font-semibold">1890</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Location</span>
                        <span className="font-semibold">Trás-os-Montes, Portugal</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Harvest</span>
                        <span className="font-semibold">October 2024</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Variety</span>
                        <span className="font-semibold">Cobrançosa & Verdeal</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Taste Profile Section */}
                  <div className="bg-gold/5 rounded-xl p-6 border-l-4 border-gold">
                    <h4 className="font-semibold text-olive-dark mb-4 text-sm uppercase tracking-wider">Taste Profile</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-olive-dark/90">Intensity</span>
                        <span className="font-semibold text-gold">Medium</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-olive-dark/90">Bitter</span>
                          <div className="flex space-x-1">
                            {[1,2,3,4,5].map(i => (
                              <div key={i} className={`w-3 h-3 rounded-full ${i <= 3 ? 'bg-gold' : 'bg-olive-light/30'}`} />
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-olive-dark/90">Pepper</span>
                          <div className="flex space-x-1">
                            {[1,2,3,4,5].map(i => (
                              <div key={i} className={`w-3 h-3 rounded-full ${i <= 4 ? 'bg-gold' : 'bg-olive-light/30'}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-olive-light/20">
                        <span className="text-sm font-medium text-olive-dark/90">Notes: </span>
                        <span className="italic text-olive-medium">Green apple, fresh herbs</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Lab Verified Section */}
                  <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                    <h4 className="font-semibold text-olive-dark mb-4 text-sm uppercase tracking-wider">Lab Verified</h4>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-white/60 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">0.2%</div>
                        <div className="text-xs text-olive-dark/70 font-medium">Acidity</div>
                      </div>
                      <div className="text-center p-3 bg-white/60 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">486</div>
                        <div className="text-xs text-olive-dark/70 font-medium">mg/kg Polyphenols</div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-olive-dark/90">Peroxide</span>
                        <span className="font-semibold">4.8 meq O₂/kg</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-olive-dark/90">Certified</span>
                        <span className="font-semibold">November 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-olive-light/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-4xl font-light text-olive-dark">€28</span>
                    </div>
                    <div className="text-right">
                      <div className="text-olive-medium text-lg font-medium">500ml</div>
                      <div className="text-olive-medium/60 text-sm">Premium bottle</div>
                    </div>
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