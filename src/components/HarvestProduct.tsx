import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import oliveOilPlaceholder from "@/assets/olive-oil-bottle-placeholder.png";

export const HarvestProduct = () => {
  const labTiles = [
    {
      key: "polyphenols",
      label: "POLYPHENOLS",
      value: "904",
      unit: "mg/kg",
      avg: "avg. ~180mg/kg",
      description: "antioxidants that give EVOO its special health benefits",
    },
    {
      key: "oleic-acid",
      label: "OLEIC ACID",
      value: "74.9%",
      unit: "",
      avg: "avg. ~67%",
      description: "healthy fats that protect the oil and your health, higher = better",
    },
    {
      key: "peroxides",
      label: "PEROXIDES",
      value: "6.3",
      unit: "meq/kg",
      avg: "avg. ~20meq/kg",
      description: "lower = fresher oil, less oxidation and longer shelf life",
    },
    {
      key: "acidity",
      label: "ACIDITY",
      value: "0.16%",
      unit: "",
      avg: "avg. ~0.8%",
      description: "lower = fresher olives and higher quality",
    },
  ] as const;

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="flex items-center justify-center h-full">
            <div className="w-full max-w-2xl aspect-[3/4] rounded-2xl overflow-hidden bg-olive-light/10">
              <img 
                src={oliveOilPlaceholder} 
                alt="KLEIA 2024 Harvest Extra Virgin Olive Oil" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <header>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-olive-light/20 text-olive-dark">
                  2024 HARVEST
                </Badge>
                <Badge variant="secondary" className="bg-gold/20 text-gold-dark">
                  LIMITED EDITION
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-olive-dark mb-4">
                Galega from Alentejo
              </h1>
              
              <p className="text-lg text-olive-medium mb-4">
                High-Antioxidant Extra Virgin Olive Oil
              </p>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-olive-medium">4.9 • 127 reviews</span>
              </div>
            </header>

            {/* Key Benefits */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-olive-dark">
                Lab-tested premium quality from small family groves
              </h2>
              
              <ul className="space-y-3 text-olive-medium">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-olive-medium rounded-full mt-2 flex-shrink-0"></div>
                  <span>Contains 5x more antioxidant polyphenols than average (904 mg/kg)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-olive-medium rounded-full mt-2 flex-shrink-0"></div>
                  <span>Third-party lab tested for quality and purity</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-olive-medium rounded-full mt-2 flex-shrink-0"></div>
                  <span>Direct from family groves, traceable and artisanal</span>
                </li>
              </ul>
            </div>

            {/* Lab Values Grid */}
            <div className="bg-white/80 p-6 rounded-2xl border border-olive-light/20">
              <h3 className="text-lg font-semibold text-olive-dark mb-4">Lab Verified Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {labTiles.map((tile) => (
                  <div key={tile.key} className="text-center">
                    <div className="text-xs font-semibold text-olive-medium uppercase tracking-wide mb-1">
                      {tile.label}
                    </div>
                    <div className="text-2xl font-bold text-olive-dark leading-none">
                      {tile.value}
                      {tile.unit && <span className="text-lg ml-1 text-olive-dark/90">{tile.unit}</span>}
                    </div>
                    <div className="text-xs text-olive-light mt-1">{tile.avg}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-center text-olive-medium/80">Certified: November 2024</p>
            </div>

            {/* Pricing & Purchase */}
            <div className="space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-bold text-olive-dark">€45</span>
                <span className="text-lg text-olive-medium line-through">€55</span>
                <Badge variant="secondary" className="bg-gold/20 text-gold-dark">18% OFF</Badge>
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-olive-dark hover:bg-olive-dark/90 text-cream font-semibold py-4 text-lg">
                  Add to Cart • €45
                </Button>
                
                <div className="flex items-center justify-center gap-6 text-sm text-olive-medium">
                  <span>✓ Free shipping over €75</span>
                  <span>✓ 30-day guarantee</span>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="pt-6 border-t border-olive-light/20 space-y-2 text-sm text-olive-medium">
              <p><strong>Harvest:</strong> October 2024</p>
              <p><strong>Origin:</strong> Kalamata, Greece</p>
              <p><strong>Varietal:</strong> Koroneiki olives</p>
              <p><strong>Processing:</strong> Cold-pressed within 4 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};