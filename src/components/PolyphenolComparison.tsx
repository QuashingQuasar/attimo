const tweets = [{
  id: 1,
  name: "Olive",
  handle: "@olvlimits",
  avatar: "🫒",
  content: "Polyphenols are a type of antioxidant found in olives.",
  content2: "They strengthen the body's defenses against cell aging and contribute to long-term metabolic and heart health."
}, {
  id: 2,
  name: "Olive",
  handle: "@olvlimits",
  avatar: "🫒",
  content: "The highest polyphenol counts come from early-harvest olives, picked and pressed within hours.",
  content2: "Once bottled, levels steadily decline over time."
}, {
  id: 3,
  name: "Olive",
  handle: "@olvlimits",
  avatar: "🫒",
  content: "Commercial oils combine batches from across countries and years to maintain supply.",
  content2: "This process dilutes the polyphenol content far below fresh-pressed levels."
}];
export const PolyphenolComparison = () => {
  const comparisonData = [{
    name: "Average Olive Oil",
    value: 180,
    color: "bg-[#A8B88F]" // Light sage green
  }, {
    name: "EU Health Claim",
    value: 250,
    color: "bg-[#8A9B6F]" // Medium sage green
  }, {
    name: "Blueprint Olive Oil",
    value: 400,
    color: "bg-[#5C6E45]" // Darker olive green
  }, {
    name: "ATTIMO Olive Oil",
    value: 904,
    color: "bg-[#1B4229]" // Dark forest green (brand color)
  }];
  const maxValue = Math.max(...comparisonData.map(item => item.value));
  return <section className="py-12 md:py-16 lg:py-24 snap-start flex items-center" style={{
    backgroundColor: '#FFFAEA'
  }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div>
              <h2 className="font-beverly font-bold text-olive-dark mb-6 tracking-tight" style={{
                fontSize: 'clamp(2.5rem, 4vw, 4.5rem)'
              }}>
                The Polyphenol Effect<br />
                <span className="font-medium"></span>
              </h2>
               <p className="text-olive-medium leading-relaxed mb-12" style={{
            fontFamily: 'Space Grotesk, monospace',
            fontSize: 'clamp(1rem, 1.2vw, 1.375rem)'
          }}>
                  Polyphenols make all the difference. See what we got, how we compare, and why it matters.
                </p>

              <div className="space-y-4">
                {comparisonData.map((item, index) => {
              // Calculate proportional width with minimum for text readability
              const baseWidth = 200; // minimum width for smallest bar to fit text
              const proportion = item.value / 180; // 180 is our baseline (smallest value)
              const width = baseWidth * proportion;
              return <div key={index} className="flex items-center gap-4">
                       <div className={`h-16 rounded-lg ${item.color} flex items-center px-6 text-cream font-medium transition-all duration-700 ease-out`} style={{
                  width: `${width}px`
                }}>
                         <span className={`font-medium whitespace-nowrap ${index === 3 ? 'font-working-man' : ''}`} style={index !== 3 ? { fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(1rem, 1.2vw, 1.375rem)' } : { fontSize: 'clamp(1rem, 1.2vw, 1.375rem)' }}>
                           {index === 2 ? (
                             <a href="https://blueprint.bryanjohnson.com/products/extra-virgin-olive-oil?variant=47471239790877" target="_blank" rel="noopener noreferrer" className="hover:underline">
                               {item.name}
                             </a>
                           ) : item.name}
                         </span>
                       </div>
                      <span className="font-bold text-olive-dark whitespace-nowrap" style={{
                        fontSize: 'clamp(1rem, 1.2vw, 1.375rem)'
                      }}>
                        {item.value} mg/kg
                      </span>
                    </div>;
            })}
              </div>

              {/* Scale indicators */}
              <div className="hidden md:flex justify-between text-xs text-olive-light mt-4 px-32">
                <span>150</span>
                <span>300</span>
                <span>450</span>
                <span>600</span>
                <span>750</span>
                <span>900</span>
              </div>

              {/* Three Column Cards */}
              <div className="mt-16">
                     <div className="bg-accent rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 min-h-96">
                     <div className="grid grid-cols-1 md:grid-cols-3 h-full divide-y md:divide-y-0 md:divide-x divide-olive-dark/10">
                       {tweets.map((tweet, index) => {
                    const bgColors = ['#B3E58C', '#CDDB2D', '#EBDD21'];
                    const textColors = ['text-olive-dark', 'text-olive-dark', 'text-olive-dark'];
                    const icons = [
                      '/icons/lady-2.svg',
                      '/icons/basket-2.svg', 
                      '/icons/branch-2.svg'
                    ];
                    return <div key={tweet.id} className={`p-6 flex flex-col h-full min-h-96`} style={{ backgroundColor: bgColors[index] }}>
                              {/* Tweet Content */}
                              <div className="space-y-4 flex-grow">
                                <p className={`${textColors[index]} leading-relaxed`} style={{
                          fontFamily: 'Space Grotesk, monospace',
                          fontSize: 'clamp(1.125rem, 1.1vw, 1.25rem)'
                        }}>
                                  {tweet.content}
                                </p>
                                <p className={`text-olive-dark/80 leading-relaxed`} style={{
                          fontFamily: 'Space Grotesk, monospace',
                          fontSize: 'clamp(1.125rem, 1.1vw, 1.25rem)'
                        }}>
                                  {tweet.content2}
                                </p>
                             </div>

                             {/* Icon Footer */}
                             <div className="flex items-center justify-center mt-4">
                               <div className={`w-[115px] h-[115px] flex items-center justify-center`}>
                                 <img 
                                   src={icons[index]} 
                                   alt="icon" 
                                   className="w-full h-full object-contain"
                                   style={{ filter: 'invert(14%) sepia(23%) saturate(1471%) hue-rotate(98deg) brightness(95%) contrast(92%)' }}
                                 />
                               </div>
                             </div>
                          </div>;
                  })}
                    </div>
                  </div>
              </div>
              </div>
            </div>
        </div>
    </section>;
};