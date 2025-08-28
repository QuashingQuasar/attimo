import { MapPin, FlaskConical, Award, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const solutionFeatures = [
  {
    icon: MapPin,
    title: "TRACEABLE ORIGIN",
    description: "Every bottle tells you exactly which grove, which farmer, which harvest date. No mystery blends."
  },
  {
    icon: Award,
    title: "TASTE PROFILE",
    description: "Detailed tasting notes so you know what to expect: intensity, bitterness, pepper, fruitiness."
  },
  {
    icon: FlaskConical,
    title: "LAB VERIFIED",
    description: "Independent lab testing for acidity, polyphenol content, and purity. Numbers you can trust."
  },
  {
    icon: Leaf,
    title: "FRESH HARVEST",
    description: "From tree to bottle in months, not years. Taste the difference that freshness makes."
  }
];

export const Solution = () => {
  return (
    <section className="py-20 bg-[hsl(var(--section-dark))] text-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-cream mb-8 leading-tight">
            Olive Oil You Can<br />
            <span className="text-gold-light">Trust & Trace</span>
          </h2>
          <p className="text-xl text-cream/90 max-w-4xl mx-auto leading-relaxed">
            Every bottle comes with complete transparency: origin story, taste profile, and lab verification.
            This is what authentic extra virgin should be.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {solutionFeatures.map((feature, index) => (
            <Card key={index} className="bg-olive-medium/10 border-cream/20 shadow-lg hover:shadow-xl transition-all duration-300">
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

        {/* Sample Product Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[hsl(var(--section-light))] border-2 border-olive-light shadow-xl">
            <CardHeader className="bg-gradient-to-r from-olive-dark to-olive-medium text-cream">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">2024 PORTUGUESE HARVEST</h3>
                <p className="text-cream/90">Quinta da Serra • Trás-os-Montes</p>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-olive-dark mb-3">ORIGIN</h4>
                  <p className="text-olive-medium text-sm leading-relaxed">
                    Family grove since 1890<br />
                    Harvest: October 2024<br />
                    Variety: Cobrançosa & Verdeal
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-olive-dark mb-3">TASTE PROFILE</h4>
                  <p className="text-olive-medium text-sm leading-relaxed">
                    Intensity: Medium<br />
                    Bitter: ★★★☆☆<br />
                    Pepper: ★★★★☆<br />
                    Fruitiness: Green apple, herb
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-olive-dark mb-3">LAB VALUES</h4>
                  <p className="text-olive-medium text-sm leading-relaxed">
                    Acidity: 0.2%<br />
                    Polyphenols: 486 mg/kg<br />
                    Peroxide: 4.8 meq O2/kg<br />
                    Certified: Nov 2024
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};