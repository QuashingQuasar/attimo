export const PolyphenolComparison = () => {
  const comparisonData = [
    {
      name: "Average Olive Oil",
      value: 180,
      color: "bg-gray-400",
      textColor: "text-gray-700"
    },
    {
      name: "EU Health Claim",
      value: 250,
      color: "bg-blue-300",
      textColor: "text-blue-700"
    },
    {
      name: "Premium Olive Oil",
      value: 400,
      color: "bg-blue-500",
      textColor: "text-blue-700"
    },
    {
      name: "Our Oil",
      value: 904,
      color: "bg-olive-medium",
      textColor: "text-olive-dark"
    }
  ];

  const maxValue = Math.max(...comparisonData.map(item => item.value));

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Chart Section */}
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-olive-dark mb-6 tracking-tight">
                The Polyphenol Difference In<br />
                <span className="font-medium">Olive Oil</span>
              </h2>
              <p className="text-lg text-olive-medium mb-12 leading-relaxed">
                See the polyphenol difference—what's in ours, what's in others, and why it matters.
              </p>

              <div className="space-y-6">
                {comparisonData.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-32 flex-shrink-0">
                      <div className={`px-4 py-3 rounded-lg text-white text-sm font-medium ${item.color}`}>
                        {item.name}
                      </div>
                    </div>
                    <div className="flex-1 relative">
                      <div 
                        className={`h-12 rounded-lg ${item.color} flex items-center justify-end pr-4 transition-all duration-700 ease-out`}
                        style={{ width: `${(item.value / maxValue) * 100}%`, minWidth: '120px' }}
                      >
                        <span className="text-white font-bold text-lg">
                          {item.value} mg/kg
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scale indicators */}
              <div className="flex justify-between text-xs text-olive-light mt-4 px-32">
                <span>150</span>
                <span>300</span>
                <span>450</span>
                <span>600</span>
                <span>750</span>
                <span>900</span>
              </div>
            </div>

            {/* Info Section */}
            <div className="bg-olive-dark rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🫒</span>
                </div>
                <div>
                  <p className="font-bold">Olive</p>
                  <p className="text-sm text-white/80">@olivelimits</p>
                </div>
              </div>

              <p className="text-xl mb-6 leading-relaxed">
                <span className="text-green-400 font-bold">Polyphenols</span> are micronutrients 
                found in plants🌿. There are over 
                <span className="font-bold"> 8,000 types</span>—each with a unique 
                chemical structure🧬.
              </p>

              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/e6b33638-55fd-43c5-a825-1bba7c866fb2.png" 
                  alt="Olive branches with fresh olives" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};