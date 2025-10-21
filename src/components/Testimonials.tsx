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
    text: "Living in Spain for some time, I got used to having amazing olive oil around. It's hard in Germany to find good ones; Attimo brought back some wonderful memories.",
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
    text: "I tried a lot of olive oils and this one is my favourite. The smell is absolutely unreal, so fresh it's like the olives are being pressed right then and there.",
    rating: 5,
    title: "Super fresh",
  },
  {
    name: "David K.",
    location: "Antwerp, Belgium",
    date: "04 May 2025",
    text: "I bought 4 bottles and they were gone in a month. Never buying in the supermarket again.",
    rating: 5,
    title: "I got hooked fast",
  },
  {
    name: "Dag A.",
    location: "Tallinn, Estonia",
    date: "15 Aug 2025",
    text: "I was skeptical about the price but now I get it. You can really taste the difference in quality, there's nothing like this in the local shops here.",
    rating: 5,
    title: "You can taste the quality",
  },
];

export const Testimonials = () => {
  // Duplicate testimonials twice for seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      className="py-10 snap-start min-h-[50vh] flex items-center my-24 relative overflow-hidden"
      style={{
        backgroundColor: "#1A431D",
      }}
    >
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/hero-video-3.mp4" type="video/mp4" />
      </video>

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="mx-auto relative z-10 w-full">
        {/* Title */}
        <h2
          className="text-center mb-8 text-white font-beverly"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            letterSpacing: "0.02em",
            width: "95vw",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Word from the street
        </h2>

        {/* Scrolling Testimonials - Full Width */}
        <div className="relative overflow-hidden">
          {/* Left fade gradient */}
          <div
            className="absolute left-0 top-0 bottom-0 w-32 z-20 pointer-events-none"
            style={{
              background: "linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent)",
            }}
          />

          {/* Right fade gradient */}
          <div
            className="absolute right-0 top-0 bottom-0 w-32 z-20 pointer-events-none"
            style={{
              background: "linear-gradient(to left, rgba(0, 0, 0, 0.6), transparent)",
            }}
          />

          <div className="flex">
            <div
              className="flex gap-6 animate-testimonial-scroll"
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
            <div
              className="flex gap-6 animate-testimonial-scroll"
              aria-hidden="true"
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <Card
                  key={`duplicate-${testimonial.name}-${index}`}
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
        </div>
      </div>
    </section>
  );
};
