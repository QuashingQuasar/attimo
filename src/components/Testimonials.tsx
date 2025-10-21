import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import patternBg from "@/assets/testimonial-pattern.svg";

const testimonials = [
  {
    name: "Sandra V.",
    location: "Ghent, Belgium",
    date: "02 Sep 2025",
    text: "I used to just cook with olive oil. Now I’m putting it on everything. Didn’t know it could have so much taste.",
    rating: 5,
    title: "Good on everything!",
  },
  {
    name: "Mario R.",
    location: "Freiburg, Germany",
    date: "28 September 2025",
    text: "After living in Spain for some time, I got used to having amazing olive oil around. ATTIMO brought back some wonderful memories.",
    rating: 5,
    title: "Like living in Spain again",
  },
  {
    name: "Sofia M.",
    location: "Antwerp, Belgium",
    date: "07 May 2025",
    text: "I always bring back tons of olive oil from vacation, but it runs out fast. Very happy to have finally found real olive oil at home.",
    rating: 5,
    title: "Finally",
  },
  {
    name: "Elias N.",
    location: "Amsterdam, Netherlands",
    date: "06 June 2025",
    text: "I was skeptical about the price but now I get it. You can really taste the difference in quality.",
    rating: 5,
    title: "You can taste the quality",
  },
  {
    name: "David K.",
    location: "Antwerp, Belgium",
    date: "04 May 2025",
    text: "I bought 4 bottles and they were gone in a month. Never buying in the supermarket again.",
    rating: 5,
    title: "I got hooked fast",
  },
];

export const Testimonials = () => {
  // Duplicate testimonials for seamless loop (2x is enough for infinite scroll effect)
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      className="py-10 snap-start min-h-[50vh] flex items-center my-24"
      style={{
        backgroundColor: "#1A431D",
        backgroundImage: `url(${patternBg})`,
        backgroundSize: "600px 600px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="mx-auto relative" style={{ width: "95vw" }}>
        {/* Left fade overlay */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #1A431D, transparent)" }}
        ></div>

        {/* Right fade overlay */}
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #1A431D, transparent)" }}
        ></div>

        {/* Scrolling Testimonials */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6"
            style={{
              animation: "testimonialScroll 15s linear infinite",
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <Card
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 w-96 bg-white border-olive-light/20 shadow-sm"
              >
                <CardContent className="p-6">
                  {/* Title */}
                  <h4
                    className="font-semibold text-olive-dark mb-3"
                    style={{
                      fontSize: "clamp(0.875rem, 1vw, 1.125rem)",
                    }}
                  >
                    {testimonial.title}
                  </h4>

                  {/* Review Text */}
                  <p
                    className="text-olive-dark/80 leading-relaxed mb-4"
                    style={{
                      fontFamily: "Space Grotesk, monospace",
                      fontSize: "clamp(0.875rem, 1vw, 1.125rem)",
                    }}
                  >
                    {testimonial.text}
                  </p>

                  {/* Author and Date */}
                  <div
                    className="flex justify-between items-center text-olive-medium"
                    style={{
                      fontSize: "clamp(0.75rem, 0.85vw, 1rem)",
                    }}
                  >
                    <span>
                      {testimonial.name} ({testimonial.location})
                    </span>
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
