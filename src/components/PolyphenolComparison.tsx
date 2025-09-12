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
        <div className="max-w-4xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};