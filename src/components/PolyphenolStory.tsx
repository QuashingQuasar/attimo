import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

const storySlides = [
  {
    title: "What are Polyphenols?",
    content: "Polyphenols are an umbrella group—kind of like 'vitamins.' Just like vitamins, different types have different structures and different effects on the body.",
    visual: "🍃",
    bgColor: "from-emerald-600 to-emerald-700"
  },
  {
    title: "Found in Nature",
    content: "Polyphenols are micronutrients found in plants 🌱. There are over 8,000 types—each with a unique chemical structure 🧬.",
    visual: "🌿",
    bgColor: "from-green-600 to-green-700"
  },
  {
    title: "The Health Connection",
    content: "Some can support heart health, others may reduce inflammation—and some don't do much at all. The key is getting the right types in meaningful amounts.",
    visual: "❤️",
    bgColor: "from-teal-600 to-teal-700"
  },
  {
    title: "Most Oils Fall Short",
    content: "Average olive oil contains just 180 mg/kg of polyphenols. Even premium brands rarely exceed 400 mg/kg. The EU health claim requires at least 250 mg/kg.",
    visual: "📉",
    bgColor: "from-amber-600 to-amber-700"
  },
  {
    title: "Our Difference",
    content: "Our olive oil delivers 904 mg/kg of polyphenols—over 3x higher than premium oils. Fresh-pressed, single-grove, and lab-tested for potency.",
    visual: "🏆",
    bgColor: "from-emerald-500 to-green-600"
  }
];

export const PolyphenolStory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const goToSlide = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <>
      {/* Trigger Section */}
      <section className="py-16 bg-gradient-to-br from-olive-light to-cream">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-light text-olive-dark mb-6">
              The Science Behind <span className="font-medium">Polyphenols</span>
            </h3>
            <p className="text-lg text-olive-medium mb-8 leading-relaxed">
              Discover why polyphenol content matters and how our oil delivers exceptional levels for your health.
            </p>
            <Button 
              onClick={() => setIsOpen(true)}
              size="lg"
              className="bg-olive-dark hover:bg-olive-dark/90 text-white px-8 py-4 text-lg font-medium"
            >
              Explore the Story
            </Button>
          </div>
        </div>
      </section>

      {/* Modal Story Overlay */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent 
          className="max-w-none h-screen w-screen p-0 bg-black/95 border-none fixed inset-0 translate-x-0 translate-y-0 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out [&>button]:hidden"
          style={{ maxWidth: 'none', width: '100vw', height: '100vh' }}
        >
          <div className="relative h-full flex items-center justify-center overflow-hidden">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-6 right-6 z-50 text-white hover:bg-white/10 h-12 w-12"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Carousel */}
            <div className="w-full max-w-4xl mx-auto px-8">
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {storySlides.map((slide, index) => (
                    <CarouselItem key={index}>
                      <div className="flex items-center justify-center min-h-[600px]">
                        <div className={`w-full max-w-3xl bg-gradient-to-br ${slide.bgColor} rounded-3xl p-12 text-white shadow-2xl`}>
                          <div className="text-center">
                            <div className="text-6xl mb-8">{slide.visual}</div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                              {slide.title}
                            </h2>
                            <p className="text-xl md:text-2xl leading-relaxed opacity-95">
                              {slide.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Custom Navigation */}
                <CarouselPrevious className="left-8 bg-white/10 border-white/20 text-white hover:bg-white/20" />
                <CarouselNext className="right-8 bg-white/10 border-white/20 text-white hover:bg-white/20" />
              </Carousel>

              {/* Progress Dots */}
              <div className="flex justify-center mt-8 space-x-3">
                {storySlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      current === index 
                        ? 'bg-white scale-125' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              {/* Slide Counter */}
              <div className="text-center mt-6">
                <span className="text-white/70 text-sm">
                  {current + 1} of {storySlides.length}
                </span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};