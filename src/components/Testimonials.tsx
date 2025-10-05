import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import patternBg from "@/assets/testimonial-pattern.svg";

const testimonials = [
  {
    name: "Maria S.",
    location: "Lisbon, Portugal",
    date: "27 Feb 2025",
    text: "I finally understand what real olive oil should taste like. The intensity and freshness is incredible - nothing like the bland supermarket bottles I used to buy.",
    rating: 5,
    title: "Amazing quality olive oil"
  },
  {
    name: "James R.",
    location: "London, UK", 
    date: "21 Jul 2025",
    text: "As a chef, I appreciate knowing exactly where my ingredients come from. The lab reports and harvest details give me complete confidence in what I'm serving.",
    rating: 5,
    title: "Perfect for professional use"
  },
  {
    name: "Sofia M.",
    location: "Barcelona, Spain",
    date: "5 May 2024",
    text: "My grandmother always said you could taste the difference in good olive oil. This brings back memories of the oils from her village - authentic and full of character.",
    rating: 5,
    title: "Authentic taste"
  },
  {
    name: "David K.",
    location: "Amsterdam, Netherlands",
    date: "11 Nov 2024",
    text: "I was skeptical about paying more for olive oil until I tried this. The polyphenol content is amazing and you can actually taste the difference in quality.",
    rating: 5,
    title: "Worth every penny"
  }
];

export const Testimonials = () => {
  // Duplicate testimonials for seamless loop (2x is enough for infinite scroll effect)
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section 
      className="py-10 snap-start min-h-[50vh] flex items-center"
      style={{ 
        backgroundColor: '#9EEF80',
        backgroundImage: `url(${patternBg})`,
        backgroundSize: '600px 600px',
        backgroundRepeat: 'repeat'
      }}
    >
      <div className="mx-auto relative" style={{ width: '95vw' }}>
        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #9EEF80, transparent)' }}></div>
        
        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #9EEF80, transparent)' }}></div>
        
        {/* Scrolling Testimonials */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-6"
            style={{
              animation: 'testimonialScroll 40s linear infinite'
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <Card key={`${testimonial.name}-${index}`} className="flex-shrink-0 w-96 bg-white border-olive-light/20 shadow-sm">
                <CardContent className="p-6">
                  {/* Title */}
                  <h4 className="font-semibold text-olive-dark mb-3 text-sm">
                    {testimonial.title}
                  </h4>
                  
                  {/* Review Text */}
                  <p className="text-olive-dark/80 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                    {testimonial.text}
                  </p>
                  
                  {/* Author and Date */}
                  <div className="flex justify-between items-center text-xs text-olive-medium">
                    <span>{testimonial.name} ({testimonial.location})</span>
                    <span>{testimonial.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <style>{`
          @keyframes testimonialScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
};