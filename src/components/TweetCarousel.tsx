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
    name: "Sarah Chen",
    handle: "@sarahc_health",
    avatar: "👩‍⚕️",
    content: "After 3 months of using Kleia's olive oil, my inflammation markers dropped significantly",
    content2: "My doctor was amazed at the lab results. This isn't just olive oil — it's medicine! 🩺"
  },
  {
    id: 3,
    name: "Marcus Romano", 
    handle: "@chef_marcus",
    avatar: "👨‍🍳",
    content: "904 mg/kg of polyphenols? That's 3x higher than any premium oil I've worked with in 20 years",
    content2: "The flavor profile is incredible — peppery, fresh, with that characteristic polyphenol bite ✨"
  },
  {
    id: 4,
    name: "Dr. Elena Vasquez",
    handle: "@dr_nutrition",
    avatar: "🔬",
    content: "The research on high-polyphenol olive oil is compelling for cardiovascular and cognitive health",
    content2: "Kleia's lab-tested approach gives consumers the confidence they're getting real benefits 🧠"
  },
  {
    id: 5,
    name: "James Thompson",
    handle: "@fitness_james",
    avatar: "💪",
    content: "Been taking a tablespoon every morning for 6 months. My recovery time and energy levels are insane",
    content2: "This oil is literally part of my supplement stack now. Worth every penny! ⚡"
  },
  {
    id: 6,
    name: "Maria Gonzalez",
    handle: "@maria_wellness",
    avatar: "🌱",
    content: "Finally found an olive oil that matches the Mediterranean diet studies we read about",
    content2: "The polyphenol content is what our ancestors were actually consuming. This is the real deal! 🇬🇷"
  },
  {
    id: 7,
    name: "Robert Kim",
    handle: "@biohacker_rob",
    avatar: "🧬",
    content: "Tracked my biomarkers for 4 months. HDL up, inflammation down, cognitive clarity improved",
    content2: "Data doesn't lie — high polyphenol olive oil is a game changer for longevity 📊"
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
            What People Are Saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from customers who've made our high-polyphenol olive oil part of their daily routine
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