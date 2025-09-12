import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useState } from "react";
import oliveOilPlaceholder from "@/assets/olive-oil-bottle-placeholder.png";
import { ProductInfoTabs } from "./ProductInfoTabs";

export const HarvestProduct = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(2);
  
  const quantityOptions = [
    { quantity: 1, label: "1 Bottle", price: 23, savings: null },
    { quantity: 2, label: "2 Bottles", subtitle: "Free Shipping", price: 46, savings: null },
    { quantity: 4, label: "4 Bottles", subtitle: "Save €6 + Free Shipping", price: 86, savings: 6 },
    { quantity: 6, label: "6 Bottles", subtitle: "Save €15 + Free Shipping", price: 123, savings: 15 }
  ];

  const selectedOption = quantityOptions.find(option => option.quantity === selectedQuantity);
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
                  LAST BOTTLES
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

            {/* Quantity Selection & Purchase */}
            <div className="space-y-4">
              {/* Quantity Options */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {quantityOptions.map((option) => (
                  <button
                    key={option.quantity}
                    onClick={() => setSelectedQuantity(option.quantity)}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      selectedQuantity === option.quantity
                        ? 'border-olive-dark bg-olive-dark text-cream'
                        : 'border-olive-light/20 bg-white/60 text-olive-dark hover:bg-olive-light/10'
                    }`}
                  >
                    <div className="font-semibold text-sm mb-1">{option.label}</div>
                    {option.subtitle && (
                      <div className={`text-xs ${
                        selectedQuantity === option.quantity ? 'text-cream/80' : 'text-olive-medium'
                      }`}>
                        {option.subtitle}
                      </div>
                    )}
                  </button>
                ))}
              </div>
              
              {/* Add to Cart Button */}
              <Button className="w-full bg-olive-dark hover:bg-olive-dark/90 text-cream font-semibold px-6 py-4 text-lg h-auto rounded-xl">
                Add to cart - €{selectedOption?.price}
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};