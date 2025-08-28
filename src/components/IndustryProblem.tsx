import { AlertTriangle, X, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const IndustryProblem = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-olive-dark mb-6 tracking-tight">
            NOT ALL OLIVE OILS ARE EQUAL
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white border-orange-200 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="text-6xl font-bold text-olive-medium mb-2">~80%</div>
              <p className="text-olive-dark font-medium">
                olive oils sold as "extra virgin" don't meet those standards
              </p>
            </CardHeader>
          </Card>

          <Card className="bg-white border-orange-200 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="text-6xl font-bold text-olive-medium mb-2">~90%</div>
              <p className="text-olive-dark font-medium">
                "extra virgin" olive oils are low in health-boosting polyphenols
              </p>
            </CardHeader>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h3 className="text-3xl font-bold text-olive-dark mb-4">
              THE "EXTRA VIRGIN" LIE
            </h3>
            <p className="text-lg text-olive-medium leading-relaxed mb-6">
              80% of olive oil sold as "extra virgin" doesn't meet those standards. It's blended, stripped of origin, taste and character. Industry focus on volume and cost creates a system that sells cheap blends under EVOO labels the product doesn't live up to.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-olive-dark mb-4">
              FLAVOUR AND HEALTH GET BLENDED AWAY
            </h3>
            <p className="text-lg text-olive-medium leading-relaxed mb-6">
              To scale production, oils from multiple sources are mixed into a standardized taste, losing what makes real olive oil special: fresh flavour, distinct character, and polyphenols that make it healthy.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-olive-dark mb-4">
              YOU'VE NEVER TASTED THE REAL THING
            </h3>
            <p className="text-lg text-olive-medium leading-relaxed mb-6">
              True extra virgin is intense: bitter, peppery, fragrant. Each oil has a fingerprint: olive variety, grove, harvest, craft. These are also the healthiest oils, but most people never get to taste them.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-olive-dark mb-4">
              BIG OIL KILLS FAMILY GROVES
            </h3>
            <p className="text-lg text-olive-medium leading-relaxed">
              Under financial stress, small farmers have no choice but to sell to big players. Their sublime oil gets blended into cheap stuff and sold for pennies. Making great EVOO is an art and when that art isn't paid for, it and great oil will disappear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};