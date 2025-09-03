import { AlertTriangle, Blend, Eye, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const IndustryProblem = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light text-olive-dark mb-8 leading-tight tracking-tight">
              The <span className="font-medium italic">"extra virgin" lie.</span>
            </h2>
            <p className="text-xl text-olive-medium max-w-4xl mx-auto leading-relaxed font-light">
              80% of olive oil sold as "extra virgin" doesn't meet those standards. It's blended, stripped of origin, taste and character.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="text-center p-12 bg-cream/50 border border-olive-light/20 shadow-sm">
              <div className="text-7xl font-light text-olive-dark mb-4 font-serif">~80%</div>
              <p className="text-xl text-olive-medium font-light leading-relaxed">
                olive oils sold as "extra virgin" don't meet those standards
              </p>
            </div>

            <div className="text-center p-12 bg-cream/50 border border-olive-light/20 shadow-sm">
              <div className="text-7xl font-light text-olive-dark mb-4 font-serif">~90%</div>
              <p className="text-xl text-olive-medium font-light leading-relaxed">
                "extra virgin" olive oils are low in health-boosting polyphenols
              </p>
            </div>
          </div>

          {/* Problem Breakdown */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Flavor and Health */}
            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <Blend className="w-8 h-8 text-olive-dark" />
              </div>
              <h3 className="text-xl font-bold text-olive-dark tracking-tight">
                Flavour and health get blended away
              </h3>
              <p className="text-olive-medium leading-relaxed">
                To scale production, oils from multiple sources are mixed into a standardized taste, losing what makes real olive oil special: 
                fresh flavour, distinct character, and polyphenols that make it healthy.
              </p>
            </div>

            {/* Real Thing */}
            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <Eye className="w-8 h-8 text-olive-dark" />
              </div>
              <h3 className="text-xl font-bold text-olive-dark tracking-tight">
                You've never tasted the real thing
              </h3>
              <p className="text-olive-medium leading-relaxed">
                True extra virgin is intense: bitter, peppery, fragrant. Each oil has a fingerprint: olive variety, grove, harvest, craft. 
                These are also the healthiest oils, but most people never get to taste them.
              </p>
            </div>

            {/* Big Oil Impact */}
            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-olive-dark" />
              </div>
              <h3 className="text-xl font-bold text-olive-dark tracking-tight">
                Big oil kills family groves
              </h3>
              <p className="text-olive-medium leading-relaxed">
                Under financial stress, small farmers have no choice but to sell to big players. Their sublime oil gets blended into cheap stuff and 
                sold for pennies. Making great EVOO is an art and when that art isn't paid for, it and great oil will disappear.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};