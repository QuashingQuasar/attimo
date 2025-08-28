import { CheckCircle, Microscope, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ourApproachFeatures = [
  {
    icon: MapPin,
    title: "DIRECT FROM SOURCE",
    description: "We source directly from small family groves across Europe. No middlemen, no industrial blending. Just authentic oils from passionate producers."
  },
  {
    icon: Microscope,
    title: "LAB TESTED FOR QUALITY", 
    description: "Every oil is independently lab-tested for freshness, purity, and polyphenol content. No fake 'extra virgin' labels - just verified quality you can trust."
  },
  {
    icon: CheckCircle,
    title: "FRESH & TRACEABLE",
    description: "From harvest to your table in months, not years. Every bottle tells you exactly which grove, harvest date, and farmer it came from."
  },
  {
    icon: Users,
    title: "SUPPORTING SMALL GROVES",
    description: "We pay fair prices to help traditional family farms survive against industrial competition. When you buy from us, you're preserving centuries of craft."
  }
];

export const KleiaWay = () => {
  return (
    <section className="py-24 bg-[hsl(var(--section-light))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light text-olive-dark mb-8 tracking-tight">
            Our approach to
            <br />
            <span className="font-medium italic">exceptional oil.</span>
          </h2>
          <p className="text-xl text-olive-medium max-w-4xl mx-auto leading-relaxed font-light">
            Direct relationships with artisan producers. Complete transparency. Uncompromising quality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ourApproachFeatures.map((feature, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-olive-light/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-olive-dark text-cream p-3 rounded-full flex-shrink-0">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-olive-dark mb-3 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-olive-medium leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};