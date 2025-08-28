import { AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const IndustryProblem = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light text-olive-dark mb-8 leading-tight tracking-tight">
              The olive oil<br />
              <span className="font-medium italic">problem.</span>
            </h2>
            <p className="text-xl text-olive-medium max-w-4xl mx-auto leading-relaxed font-light">
              What you find on supermarket shelves often bears little resemblance to authentic extra virgin olive oil. 
              Here's what's really happening to your "premium" bottles.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="text-center border-2 border-orange-200 bg-orange-50/30 shadow-lg">
              <CardContent className="p-12">
                <div className="text-7xl font-bold text-olive-dark mb-4">~80%</div>
                <p className="text-xl text-olive-medium font-medium leading-relaxed">
                  olive oils sold as "extra virgin" don't meet those standards
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-orange-200 bg-orange-50/30 shadow-lg">
              <CardContent className="p-12">
                <div className="text-7xl font-bold text-olive-dark mb-4">~90%</div>
                <p className="text-xl text-olive-medium font-medium leading-relaxed">
                  "extra virgin" olive oils are low in health-boosting polyphenols
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Problem Breakdown */}
          <div className="max-w-4xl mx-auto space-y-16">
            {/* The Extra Virgin Lie */}
            <div>
              <h3 className="text-3xl font-bold text-olive-dark mb-6 tracking-tight">
                THE "EXTRA VIRGIN" LIE
              </h3>
              <p className="text-lg text-olive-medium leading-relaxed">
                80% of olive oil sold as "extra virgin" doesn't meet those standards. It's blended, stripped of origin, taste and character. 
                Industry focus on volume and cost creates a system that sells cheap blends under EVOO labels the product doesn't live up to.
              </p>
            </div>

            {/* Flavor and Health */}
            <div>
              <h3 className="text-3xl font-bold text-olive-dark mb-6 tracking-tight">
                FLAVOUR AND HEALTH GET BLENDED AWAY
              </h3>
              <p className="text-lg text-olive-medium leading-relaxed">
                To scale production, oils from multiple sources are mixed into a standardized taste, losing what makes real olive oil special: 
                fresh flavour, distinct character, and polyphenols that make it healthy.
              </p>
            </div>

            {/* Real Thing */}
            <div>
              <h3 className="text-3xl font-bold text-olive-dark mb-6 tracking-tight">
                YOU'VE NEVER TASTED THE REAL THING
              </h3>
              <p className="text-lg text-olive-medium leading-relaxed">
                True extra virgin is intense: bitter, peppery, fragrant. Each oil has a fingerprint: olive variety, grove, harvest, craft. 
                These are also the healthiest oils, but most people never get to taste them.
              </p>
            </div>

            {/* Big Oil Impact */}
            <div>
              <h3 className="text-3xl font-bold text-olive-dark mb-6 tracking-tight">
                BIG OIL KILLS FAMILY GROVES
              </h3>
              <p className="text-lg text-olive-medium leading-relaxed">
                Under financial stress, small farmers have no choice but to sell to big players. Their sublime oil gets blended into cheap stuff and 
                sold for pennies. Making great EVOO is an art and when that art isn't paid for, it and great oil will disappear.
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-8 opacity-20">
            <div className="w-8 h-8 bg-olive-medium rounded-full"></div>
            <div className="w-6 h-12 bg-olive-light rounded-full"></div>
            <div className="w-4 h-6 bg-olive-medium rounded-full"></div>
            <div className="w-12 h-8 bg-olive-dark rounded-full"></div>
            <div className="w-6 h-10 bg-olive-light rounded-full"></div>
            <div className="w-8 h-6 bg-olive-medium rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};