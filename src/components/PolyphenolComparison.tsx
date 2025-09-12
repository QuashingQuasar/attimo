export const PolyphenolComparison = () => {
  const comparisonData = [
    {
      name: "Average Olive Oil",
      value: 180,
      color: "bg-gray-400"
    },
    {
      name: "EU Health Claim", 
      value: 250,
      color: "bg-slate-400"
    },
    {
      name: "Blueprint Olive Oil",
      value: 400,
      color: "bg-blue-500"
    },
    {
      name: "Our Oil",
      value: 904,
      color: "bg-green-500"
    }
  ];

  const maxValue = Math.max(...comparisonData.map(item => item.value));

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div>
              <h2 className="text-4xl md:text-5xl font-light text-olive-dark mb-6 tracking-tight">
                The Polyphenol Difference In<br />
                <span className="font-medium">Olive Oil</span>
              </h2>
              <p className="text-lg text-olive-medium mb-12 leading-relaxed">
                See the polyphenol difference—what's in ours, what's in others, and why it matters.
              </p>

              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div 
                      className={`h-16 rounded-lg ${item.color} flex items-center px-6 text-white font-medium transition-all duration-700 ease-out`}
                      style={{ width: `${(item.value / maxValue) * 70}%` }}
                    >
                      <span className="text-lg font-medium whitespace-nowrap">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-lg font-bold text-olive-dark whitespace-nowrap">
                      {item.value} mg/kg
                    </span>
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
        </div>
      </div>
    </section>
  );
};