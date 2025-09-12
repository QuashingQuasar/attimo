import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useState } from "react";
import oliveOilPlaceholder from "@/assets/olive-oil-bottle-placeholder.png";
import { ProductInfoTabs } from "./ProductInfoTabs";

export const HarvestProduct = () => {
  const [quantity, setQuantity] = useState(1);
  
  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };
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
    <section className="py-24 bg-[hsl(var(--olive-dark)/0.07)]">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="flex justify-center">
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
            </header>

            {/* Key Benefits */}
            <div className="space-y-4">
              <ul className="space-y-3 text-olive-medium">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-olive-medium rounded-full mt-2 flex-shrink-0"></div>
                  <span>5x more antioxidant polyphenols than average EVOO</span>
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
            <div className="grid grid-cols-2 gap-4">
              {labTiles.map((tile) => (
                <div key={tile.key} className="bg-white/60 p-4 rounded-xl border border-olive-light/10">
                  <div className="text-xs font-semibold text-olive-medium uppercase tracking-wide mb-2">
                    {tile.label}
                  </div>
                  <div className="text-2xl font-bold text-olive-dark leading-none mb-1">
                    {tile.value}
                    {tile.unit && <span className="text-lg ml-1 text-olive-dark/90">{tile.unit}</span>}
                  </div>
                  <div className="text-xs text-olive-light mb-3">{tile.avg}</div>
                  <p className="text-xs text-olive-medium/80 leading-relaxed">{tile.description}</p>
                </div>
              ))}
            </div>

            {/* Flavor Profile */}
            <div className="bg-white/40 p-6 rounded-2xl border border-olive-light/10">
              <h3 className="text-lg font-semibold text-olive-dark mb-6">Flavor Profile</h3>
              <div className="space-y-4">
                {[
                  { label: "PEPPERY", rating: 4 },
                  { label: "FRUITY", rating: 5 },
                  { label: "BITTER", rating: 4 },
                  { label: "HERBAL", rating: 3 }
                ].map((flavor) => (
                  <div key={flavor.label} className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-olive-dark uppercase tracking-wide">
                      {flavor.label}
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`w-4 h-6 rounded-full ${
                            i <= flavor.rating 
                              ? 'bg-olive-dark' 
                              : 'bg-olive-light/30'
                          }`}
                          style={{
                            clipPath: 'ellipse(50% 70% at 50% 30%)'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Information Tabs */}
            <ProductInfoTabs />

            {/* Pricing & Purchase */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-olive-light/20 rounded-lg bg-white/80">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    className="p-3 hover:bg-olive-light/10 rounded-l-lg text-olive-dark"
                  >
                    <span className="text-lg font-bold">−</span>
                  </button>
                  <span className="px-4 py-3 min-w-[60px] text-center font-semibold text-olive-dark">
                    {quantity}
                  </span>
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    className="p-3 hover:bg-olive-light/10 rounded-r-lg text-olive-dark"
                  >
                    <span className="text-lg font-bold">+</span>
                  </button>
                </div>
                <Button className="flex-1 bg-olive-dark hover:bg-olive-dark/90 text-cream font-semibold px-6 py-3 text-lg h-auto">
                  Add to Cart • €{(23 * quantity).toFixed(0)}
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};