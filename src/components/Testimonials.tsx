import { Star } from "lucide-react";
import { AutoplayVideo } from "@/components/AutoplayVideo";
import { Card, CardContent } from "@/components/ui/card";
import patternBg from "@/assets/testimonial-pattern.svg?url";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n/dictionaries";

// Names, cities and dates are real and stay verbatim across locales; the
// review title + body are translated (matched by index to the dictionary).
const testimonialMeta = [
  { name: "Sandra V.", location: "Ghent, Belgium", date: "02 Sep 2025", rating: 5 },
  { name: "Mario R.", location: "Freiburg, Germany", date: "28 Sep 2025", rating: 5 },
  { name: "Sofia M.", location: "Antwerp, Belgium", date: "07 May 2025", rating: 5 },
  { name: "Elias N.", location: "Amsterdam, Netherlands", date: "06 June 2025", rating: 5 },
  { name: "David K.", location: "Antwerp, Belgium", date: "04 May 2025", rating: 5 },
  { name: "Madis K.", location: "Tallinn, Estonia", date: "15 Aug 2025", rating: 5 },
  { name: "Nicoleta A. P.", location: "Bucharest, Romania", date: "28 Nov 2025", rating: 5 },
];

export const Testimonials = ({ headingColor = "rgb(205, 219, 45)", locale = DEFAULT_LOCALE }: { headingColor?: string; locale?: Locale }) => {
  const t = getDict(locale).testimonials;
  const testimonials = testimonialMeta.map((m, i) => ({ ...m, title: t.reviews[i].title, text: t.reviews[i].text }));
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-14 md:py-20 lg:py-24 snap-start min-h-[50vh] flex items-center relative overflow-hidden" style={{ backgroundColor: "#1A431D" }}>
      <AutoplayVideo src="/videos/hero-video-3.mp4" className="absolute inset-0 w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="mx-auto relative z-10 w-full">
        <h2 className="text-center mb-8 font-beverly px-6" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", letterSpacing: "0.02em", maxWidth: "90vw", marginLeft: "auto", marginRight: "auto", color: headingColor }}>
          {t.heading}
        </h2>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 z-20 pointer-events-none" style={{ background: "linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-20 pointer-events-none" style={{ background: "linear-gradient(to left, rgba(0, 0, 0, 0.6), transparent)" }} />
          <div className="flex">
            <div className="flex gap-7 animate-testimonial-scroll">
              {duplicatedTestimonials.map((testimonial, index) => (
                <Card key={`${testimonial.name}-${index}`} className="flex-shrink-0 bg-white border-olive-light/20 shadow-sm w-[85vw] sm:w-[340px] lg:w-[442px]">
                  <CardContent className="p-7">
                    <h4 className="font-semibold text-olive-dark mb-3" style={{ fontFamily: "'UDC Working Man Sans', sans-serif", fontSize: "clamp(1.006rem, 1.15vw, 1.294rem)" }}>{testimonial.title}</h4>
                    <p className="text-sm md:text-base text-olive-dark/80 leading-relaxed mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{testimonial.text}</p>
                    <div className="flex justify-between items-start text-olive-medium" style={{ fontSize: "clamp(0.863rem, 0.978vw, 1.15rem)" }}>
                      <div className="flex flex-col">
                        <span>{testimonial.name}</span>
                        <span>({testimonial.location})</span>
                      </div>
                      <span>{testimonial.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex gap-7 animate-testimonial-scroll" aria-hidden="true">
              {duplicatedTestimonials.map((testimonial, index) => (
                <Card key={`duplicate-${testimonial.name}-${index}`} className="flex-shrink-0 bg-white border-olive-light/20 shadow-sm w-[85vw] sm:w-[340px] lg:w-[442px]">
                  <CardContent className="p-7">
                    <h4 className="font-semibold text-olive-dark mb-3" style={{ fontFamily: "'UDC Working Man Sans', sans-serif", fontSize: "clamp(1.006rem, 1.15vw, 1.294rem)" }}>{testimonial.title}</h4>
                    <p className="text-sm md:text-base text-olive-dark/80 leading-relaxed mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{testimonial.text}</p>
                    <div className="flex justify-between items-start text-olive-medium" style={{ fontSize: "clamp(0.863rem, 0.978vw, 1.15rem)" }}>
                      <div className="flex flex-col">
                        <span>{testimonial.name}</span>
                        <span>({testimonial.location})</span>
                      </div>
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
