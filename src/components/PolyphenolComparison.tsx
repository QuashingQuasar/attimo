import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const tweets = [{
  id: 1,
  name: "Olive",
  handle: "@olvlimits",
  avatar: "🫒",
  content: "Our Green Machine is crafted with the purpose to create olive oil ultra high in polyphenols",
  content2: "It's so powerful, some people don't just cook with it — they take a tablespoon like a supplement 🥄"
}, {
  id: 2,
  name: "Olive",
  handle: "@olvlimits",
  avatar: "🫒",
  content: "904 mg/kg of polyphenols vs the industry average of 180 mg/kg",
  content2: "That's over 5x more antioxidant power in every drop. Fresh-pressed perfection 🌿"
}, {
  id: 3,
  name: "Olive",
  handle: "@olvlimits",
  avatar: "🫒",
  content: "Why settle for ordinary olive oil when you can have extraordinary health benefits?",
  content2: "Our single-grove harvest delivers the polyphenol density your body deserves ✨"
}, {
  id: 4,
  name: "Olive",
  handle: "@olvlimits",
  avatar: "🫒",
  content: "The EU health claim requires just 250 mg/kg of polyphenols. We deliver 904 mg/kg",
  content2: "That's not just meeting standards — that's obliterating them 🚀"
}, {
  id: 5,
  name: "Olive",
  handle: "@olvlimits",
  avatar: "🫒",
  content: "Every bottle is lab-tested and traceable to a single grove in Greece",
  content2: "No blends, no compromises, no mystery oils. Just pure polyphenol power 🇬🇷"
}, {
  id: 6,
  name: "Olive",
  handle: "@olvlimits",
  avatar: "🫒",
  content: "Fresh-pressed within hours of harvest to lock in maximum polyphenols",
  content2: "Time is the enemy of antioxidants. We don't give it a chance ⏰"
}, {
  id: 7,
  name: "Olive",
  handle: "@olvlimits",
  avatar: "🫒",
  content: "This isn't just olive oil — it's a daily dose of Mediterranean longevity",
  content2: "The same polyphenol-rich oil that's been protecting hearts for thousands of years 💚"
}];
export const PolyphenolComparison = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const tweetsPerPage = 3;
  const maxIndex = Math.max(0, tweets.length - tweetsPerPage);
  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };
  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };
  const visibleTweets = tweets.slice(currentIndex, currentIndex + tweetsPerPage);
  const comparisonData = [{
    name: "Average Olive Oil",
    value: 180,
    color: "bg-olive-light/60"
  }, {
    name: "EU Health Claim",
    value: 250,
    color: "bg-olive-light/80"
  }, {
    name: "Blueprint Olive Oil",
    value: 400,
    color: "bg-olive-medium"
  }, {
    name: "Our Oil",
    value: 904,
    color: "bg-olive-dark"
  }];
  const maxValue = Math.max(...comparisonData.map(item => item.value));
  return <section className="py-24 snap-start min-h-screen flex items-center bg-[--section-light]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div>
              <h2 className="text-5xl md:text-6xl font-light text-olive-dark mb-4 tracking-tight">
                THE POLYPHENOL DIFFERENCE
              </h2>
               <p className="text-lg text-olive-medium leading-relaxed mb-16">
                  See the polyphenol difference—what's in ours, what's in others, and why it matters.
                </p>

              <div className="space-y-6 mb-16">
                {comparisonData.map((item, index) => {
              const proportion = item.value / 904;
              const widthPercent = proportion * 100;
              const isDarkest = index === comparisonData.length - 1;
              
              return <div key={index} className="transition-all duration-700 ease-out">
                       {/* Label row */}
                       <div className="flex items-center justify-between mb-2" style={{ width: `${widthPercent}%`, minWidth: '300px' }}>
                         <span className="text-lg font-medium text-olive-dark">
                           {item.name}
                         </span>
                         <span className="text-xl font-bold text-olive-dark whitespace-nowrap">
                           {item.value} mg/kg
                         </span>
                       </div>
                       {/* Line */}
                       <div 
                         className={`h-16 transition-all duration-700 ease-out ${
                           isDarkest 
                             ? 'bg-olive-dark' 
                             : 'bg-cream border-2 border-dashed border-olive-dark'
                         }`} 
                         style={{
                           width: `${widthPercent}%`,
                           minWidth: '300px'
                         }}
                       />
                    </div>;
            })}
              </div>

              {/* Scale indicators */}
              <div className="flex justify-between text-sm text-olive-medium mb-16 pl-1" style={{ maxWidth: '75%' }}>
                <span>150</span>
                <span>300</span>
                <span>450</span>
                <span>600</span>
                <span>750</span>
                <span>900</span>
              </div>

              {/* Tweet Carousel */}
              <div className="mt-20">
                <div className="relative">
                  {/* Navigation Arrows */}
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={prevSlide} 
                    disabled={currentIndex === 0} 
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-cream border-2 border-dashed border-olive-dark h-12 w-12 -translate-x-16 disabled:opacity-30"
                  >
                    <ChevronLeft className="h-5 w-5 text-olive-dark" />
                  </Button>

                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={nextSlide} 
                    disabled={currentIndex >= maxIndex} 
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-cream border-2 border-dashed border-olive-dark h-12 w-12 translate-x-16 disabled:opacity-30"
                  >
                    <ChevronRight className="h-5 w-5 text-olive-dark" />
                  </Button>

                   {/* Tweet Cards */}
                   <div className="bg-[#D9A93D] border-2 border-dashed border-olive-dark overflow-hidden min-h-96">
                     <div className="grid grid-cols-3 h-full divide-x-2 divide-dashed divide-olive-dark">
                       {visibleTweets.map((tweet) => (
                         <div key={tweet.id} className="p-8 flex flex-col justify-start h-full min-h-96 bg-[#D9A93D]">
                           {/* Profile Header */}
                           <div className="flex items-center mb-6">
                             <div className="w-14 h-14 bg-olive-dark/15 flex items-center justify-center text-2xl mr-4 border-2 border-dashed border-olive-dark">
                               {tweet.avatar}
                             </div>
                             <div>
                               <div className="font-bold text-lg text-olive-dark">{tweet.name}</div>
                               <div className="text-olive-dark/70 text-sm">{tweet.handle}</div>
                             </div>
                           </div>

                           {/* Tweet Content */}
                           <div className="space-y-4">
                             <p className="text-olive-dark leading-relaxed font-medium text-base">
                               {tweet.content}
                             </p>
                             <p className="text-olive-dark/80 leading-relaxed text-sm">
                               {tweet.content2}
                             </p>
                           </div>
                         </div>
                       ))}
                     </div>
                   </div>

                  {/* Pagination Dots */}
                  <div className="flex justify-center mt-8 space-x-3">
                    {Array.from({ length: maxIndex + 1 }, (_, index) => (
                      <button 
                        key={index} 
                        onClick={() => setCurrentIndex(index)} 
                        className={`transition-all duration-300 border-2 border-olive-dark ${
                          currentIndex === index 
                            ? 'bg-olive-dark w-10 h-4' 
                            : 'bg-transparent w-4 h-4 hover:bg-olive-dark/20'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              </div>
            </div>
        </div>
    </section>;
};