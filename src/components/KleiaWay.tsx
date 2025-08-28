import { CheckCircle, Microscope, Truck, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const kleiaWayFeatures = [
  {
    icon: Truck,
    title: "FROM GROVE TO TABLE",
    description: "We source directly from the people who make the oil. No middlemen, no blending, no shortcuts."
  },
  {
    icon: Microscope,
    title: "TESTED AND TASTED FOR THE REAL DEAL", 
    description: "Every bottle is lab-tested by third parties on key quality markers you can verify for yourself."
  },
  {
    icon: CheckCircle,
    title: "FRESH AND SINGLE-GROVE",
    description: "Every bottle is from the latest harvest and is sourced from just one grove."
  },
  {
    icon: Users,
    title: "POWERED BY SMALL GROVES",
    description: "We work with honest, hardworking families who make olive oil like an art and have done it for generations."
  }
];

export const KleiaWay = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gold-rich to-gold-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-olive-dark mb-6 tracking-tight">
            THE KLEIA WAY
          </h2>
          <p className="text-xl text-olive-medium max-w-3xl mx-auto leading-relaxed">
            High-quality EVOO you can trust and trace
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {kleiaWayFeatures.map((feature, index) => (
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