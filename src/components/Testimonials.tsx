import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-20" style={{ backgroundColor: '#EFC11B' }}>
      <div className="container mx-auto px-4">
        {/* Scrolling Testimonials */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-6 animate-[marquee_60s_linear_infinite]"
            style={{
              width: `${duplicatedTestimonials.length * 400}px`
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <Card key={`${testimonial.name}-${index}`} className="flex-shrink-0 w-96 bg-white/90 border-olive-light/20 shadow-sm">
                <CardContent className="p-6">
                  {/* Star Rating */}
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                    ))}
                  </div>
                  
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
      </div>
    </section>
  );
};