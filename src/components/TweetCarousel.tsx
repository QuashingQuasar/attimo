import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tweets = [
  {
    id: 1,
    name: "Olive",
    handle: "@olvlimits", 
    avatar: "🫒",
    content: "Our Green Machine is crafted with the purpose to create olive oil ultra high in polyphenols",
    content2: "It's so powerful, some people don't just cook with it — they take a tablespoon like a supplement 🥄"
  },
  {
    id: 2,
    name: "Olive",
    handle: "@olvlimits",
    avatar: "🫒", 
    content: "904 mg/kg of polyphenols vs the industry average of 180 mg/kg",
    content2: "That's over 5x more antioxidant power in every drop. Fresh-pressed perfection 🌿"
  },
  {
    id: 3,
    name: "Olive",
    handle: "@olvlimits",
    avatar: "🫒",
    content: "Why settle for ordinary olive oil when you can have extraordinary health benefits?", 
    content2: "Our single-grove harvest delivers the polyphenol density your body deserves ✨"
  },
  {
    id: 4,
    name: "Olive",
    handle: "@olvlimits",
    avatar: "🫒",
    content: "The EU health claim requires just 250 mg/kg of polyphenols. We deliver 904 mg/kg",
    content2: "That's not just meeting standards — that's obliterating them 🚀"
  },
  {
    id: 5,
    name: "Olive", 
    handle: "@olvlimits",
    avatar: "🫒",
    content: "Every bottle is lab-tested and traceable to a single grove in Greece",
    content2: "No blends, no compromises, no mystery oils. Just pure polyphenol power 🇬🇷"
  },
  {
    id: 6,
    name: "Olive",
    handle: "@olvlimits", 
    avatar: "🫒",
    content: "Fresh-pressed within hours of harvest to lock in maximum polyphenols",
    content2: "Time is the enemy of antioxidants. We don't give it a chance ⏰"
  },
  {
    id: 7,
    name: "Olive",
    handle: "@olvlimits",
    avatar: "🫒",
    content: "This isn't just olive oil — it's a daily dose of Mediterranean longevity",
    content2: "The same polyphenol-rich oil that's been protecting hearts for thousands of years 💚"
  }
];

export const TweetCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const tweetsPerPage = 4;
  const maxIndex = Math.max(0, tweets.length - tweetsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleTweets = tweets.slice(currentIndex, currentIndex + tweetsPerPage);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Story in Tweets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow our journey to create the world's highest polyphenol olive oil
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg h-12 w-12 -translate-x-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg h-12 w-12 translate-x-6"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Tweet Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
            {visibleTweets.map((tweet) => (
              <div
                key={tweet.id}
                className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Profile Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl mr-3">
                    {tweet.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{tweet.name}</div>
                    <div className="text-white/80 text-sm">{tweet.handle}</div>
                  </div>
                </div>

                {/* Tweet Content */}
                <div className="space-y-4">
                  <p className="text-white leading-relaxed font-medium">
                    {tweet.content}
                  </p>
                  <p className="text-white/90 leading-relaxed">
                    {tweet.content2}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-emerald-600 w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};