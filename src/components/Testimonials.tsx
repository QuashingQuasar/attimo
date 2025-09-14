import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria S.",
    location: "Lisbon, Portugal",
    text: "I finally understand what real olive oil should taste like. The intensity and freshness is incredible - nothing like the bland supermarket bottles I used to buy.",
    rating: 5
  },
  {
    name: "James R.",
    location: "London, UK", 
    text: "As a chef, I appreciate knowing exactly where my ingredients come from. The lab reports and harvest details give me complete confidence in what I'm serving.",
    rating: 5
  },
  {
    name: "Sofia M.",
    location: "Barcelona, Spain",
    text: "My grandmother always said you could taste the difference in good olive oil. This brings back memories of the oils from her village - authentic and full of character.",
    rating: 5
  },
  {
    name: "David K.",
    location: "Amsterdam, Netherlands",
    text: "I was skeptical about paying more for olive oil until I tried this. The polyphenol content is amazing and you can actually taste the difference in quality.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-[hsl(var(--section-dark))] text-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-cream mb-6 tracking-tight">
            WHAT PEOPLE SAY
          </h2>
           <p className="text-xl text-cream/90 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Space Mono, monospace' }}>
             From home cooks to professional chefs, here's what happens when people taste authentic olive oil.
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-cream/95 border-cream/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4 text-gold-accent">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-accent text-gold-accent" />
                  ))}
                </div>
                 <blockquote className="text-olive-dark text-lg leading-relaxed mb-6 italic" style={{ fontFamily: 'Space Mono, monospace' }}>
                   "{testimonial.text}"
                 </blockquote>
                <div className="border-t border-olive-light/30 pt-4">
                  <p className="font-medium text-olive-dark">{testimonial.name}</p>
                  <p className="text-olive-medium text-sm">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};