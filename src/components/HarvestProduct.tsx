import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowUpRight, Info } from "lucide-react";
import { useState } from "react";
import oliveOilPlaceholder from "@/assets/attimo-bottle-new.png";
import { ProductInfoTabs } from "./ProductInfoTabs";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
export const HarvestProduct = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(2);
  const quantityOptions = [{
    quantity: 1,
    label: "1 Bottle",
    price: 23,
    savings: null
  }, {
    quantity: 2,
    label: "2 Bottles",
    price: 46,
    savings: null
  }, {
    quantity: 3,
    label: "3 Bottles",
    subtitle: "Save €3",
    price: 66,
    savings: 3
  }, {
    quantity: 4,
    label: "4 Bottles",
    subtitle: "Save €6 + Free Shipping",
    price: 86,
    savings: 6
  }, {
    quantity: 8,
    label: "8 Bottles",
    subtitle: "Save €15 + Free Shipping",
    price: 169,
    savings: 15
  }];
  const selectedOption = quantityOptions.find(option => option.quantity === selectedQuantity);
  const labTiles = [{
    key: "polyphenols",
    label: "POLYPHENOLS",
    value: "904",
    unit: "mg/kg",
    avg: "avg. ~180mg/kg",
    description: "antioxidants that give EVOO its special health benefits"
  }, {
    key: "oleic-acid",
    label: "OLEIC ACID",
    value: "74.9%",
    unit: "",
    avg: "avg. ~67%",
    description: "healthy fats that protect the oil and your health, higher = better"
  }, {
    key: "peroxides",
    label: "PEROXIDES",
    value: "6.3",
    unit: "meq/kg",
    avg: "avg. ~20meq/kg",
    description: "lower = fresher oil, less oxidation and longer shelf life"
  }, {
    key: "acidity",
    label: "ACIDITY",
    value: "0.16%",
    unit: "",
    avg: "avg. ~0.8%",
    description: "lower = fresher olives and higher quality"
  }] as const;
  return <section id="harvest-product" className="py-12 md:py-16 lg:py-24 snap-start" style={{
    backgroundColor: '#FFFAEA'
  }}>
      <div className="w-full flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Product Image */}
          <div className="flex justify-start items-stretch lg:pl-0">
            <div className="w-full h-full lg:rounded-r-2xl overflow-hidden bg-olive-light/10 relative">
              <img src={oliveOilPlaceholder} alt="ATTIMO 2024 Harvest Extra Virgin Olive Oil" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4">
                <HoverCard openDelay={0} closeDelay={0}>
                  <HoverCardTrigger asChild>
                    <button 
                      className="flex items-center gap-1.5 backdrop-blur-sm px-3 py-1.5 rounded-md border border-cream/20 cursor-help transition-all hover:opacity-100 active:opacity-100"
                      style={{
                        backgroundColor: 'rgba(27, 66, 41, 0.9)'
                      }}
                      onClick={(e) => e.currentTarget.focus()}
                    >
                      <span className="font-semibold uppercase tracking-wide" style={{
                        color: '#FFFAEA',
                        fontSize: 'clamp(0.7rem, 0.9vw, 0.875rem)'
                      }}>
                        LABEL PREVIEW
                      </span>
                      <Info className="w-3.5 h-3.5" style={{ color: '#FFFAEA' }} />
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent 
                    side="right" 
                    align="start" 
                    className="max-w-xs p-3" 
                    style={{
                      backgroundColor: '#1B4229',
                      color: '#FFFAEA',
                      borderColor: 'rgba(205, 219, 45, 0.3)'
                    }}
                    onPointerDownOutside={(e) => e.preventDefault()}
                  >
                    <p className="text-sm leading-relaxed">
                      This bottle shows our upcoming ATTIMO brand. Your 2024 harvest will arrive with the original producer's label, containing the same exceptional quality oil.
                    </p>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-3 md:space-y-4 px-4 md:px-6 lg:pr-6 py-4 md:py-8">
            <header>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-olive-dark px-4 py-2" style={{
                color: '#CDDB2D',
                fontSize: 'clamp(0.85rem, 1.1vw, 1.2rem)'
              }}>
                  2024 HARVEST
                </Badge>
                <Badge variant="secondary" className="bg-gold/20 text-gold-dark px-4 py-2" style={{
                fontSize: 'clamp(0.85rem, 1.1vw, 1.2rem)'
              }}>
                  LAST BOTTLES
                </Badge>
              </div>
              
              <h1 className="font-bold text-olive-dark mb-2 flex items-baseline gap-3" style={{
              fontFamily: 'UDC Working Man Sans, sans-serif',
              fontSize: 'clamp(1.875rem, 3.5vw, 3.5rem)'
            }}>
                Galega from Alentejo
                <span className="font-beverly text-olive-medium" style={{
                  fontSize: 'clamp(1rem, 1.5vw, 1.5rem)'
                }}>500ml</span>
              </h1>
              
              <p className="text-olive-medium mb-2 font-beverly" style={{
              textDecoration: 'underline',
              textDecorationStyle: 'dashed',
              textDecorationColor: 'currentColor',
              textUnderlineOffset: '4px',
              fontSize: 'clamp(1.25rem, 2vw, 2.25rem)'
            }}>High-Phenolic Extra Virgin Olive Oil</p>
            </header>

            {/* Key Benefits */}
            <div className="space-y-2">
              <ul className="space-y-2 text-olive-medium" style={{
              fontFamily: 'Space Grotesk, monospace',
              fontSize: 'clamp(0.875rem, 1.1vw, 1.25rem)'
            }}>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-olive-medium rounded-full mt-2 flex-shrink-0"></div>
                  <span className="flex items-center gap-1">
                    5x more antioxidant polyphenols than average EVOO
                    <HoverCard openDelay={0} closeDelay={0}>
                      <HoverCardTrigger asChild>
                        <button 
                          className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-olive-medium text-olive-medium hover:bg-olive-medium hover:text-cream active:bg-olive-medium active:text-cream transition-colors cursor-help"
                          style={{ fontSize: '0.65rem', fontWeight: 'bold' }}
                          onClick={(e) => e.currentTarget.focus()}
                        >
                          ?
                        </button>
                      </HoverCardTrigger>
                      <HoverCardContent 
                        className="w-80 p-4" 
                        style={{
                          backgroundColor: '#1B4229',
                          color: '#FFFAEA',
                          borderColor: 'rgba(205, 219, 45, 0.3)'
                        }}
                        onPointerDownOutside={(e) => e.preventDefault()}
                      >
                        <p className="text-sm leading-relaxed" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                          Polyphenols are natural compounds in olive oil that provide the health benefits you've heard about—anti-inflammatory properties, heart health support, and antioxidant protection. Most store-bought oils have low polyphenol levels due to processing and blending.
                        </p>
                      </HoverCardContent>
                    </HoverCard>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-olive-medium rounded-full mt-2 flex-shrink-0"></div>
                  <span className="flex items-center gap-1">
                    Third-party lab tested for quality and purity
                    <a href="/documents/lab-report-galega-2024.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center transition-transform hover:scale-110">
                      <ArrowUpRight className="w-4 h-4" style={{
                      color: '#1B4229'
                    }} strokeWidth={2.5} />
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-olive-medium rounded-full mt-2 flex-shrink-0"></div>
                  <span>Directly sourced from a small family farm in Alentejo, Portugal</span>
                </li>
              </ul>
              
              {/* Label Disclosure Notice */}
              <div className="mt-3 p-3 rounded-lg bg-cream/40 border border-olive-light/20">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-olive-medium flex-shrink-0 mt-0.5" />
                  <p className="text-olive-medium/90 leading-relaxed" style={{
                    fontFamily: 'Space Grotesk, monospace',
                    fontSize: 'clamp(0.8rem, 1vw, 1rem)'
                  }}>
                    The bottle shown features our upcoming ATTIMO brand label. Your 2024 harvest will arrive with the original producer's label, containing the same exceptional quality oil and lab-verified values.
                  </p>
                </div>
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="space-y-2">
              <div id="bundle-pills" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {quantityOptions.map(option => <button key={option.quantity} onClick={() => setSelectedQuantity(option.quantity)} data-variant={option.quantity} data-key={option.quantity} data-price={option.price} aria-selected={selectedQuantity === option.quantity} className={`pill p-2 rounded-xl border-2 transition-all text-center ${selectedQuantity === option.quantity ? 'border-olive-dark bg-olive-dark text-cream active' : 'border-olive-light/20 bg-white/60 text-olive-dark hover:bg-olive-light/10'}`}>
                    <div className="font-semibold mb-1" style={{
                  fontFamily: 'Space Grotesk, monospace',
                  fontSize: 'clamp(0.75rem, 0.9vw, 1rem)'
                }}>{option.label}</div>
                    {option.subtitle && <div className={`${selectedQuantity === option.quantity ? 'text-cream/80' : 'text-olive-medium'}`} style={{
                  fontFamily: 'Space Grotesk, monospace',
                  fontSize: 'clamp(0.65rem, 0.75vw, 0.875rem)'
                }}>
                        {option.subtitle}
                      </div>}
                  </button>)}
              </div>
            </div>

            {/* Buy Now Button */}
            <Button id="buy-now-btn" className="w-full hover:bg-accent/90 text-olive-dark font-bold px-8 py-6 h-auto transition-all duration-300 hover:scale-105" style={{
            fontFamily: 'UDC Working Man Sans, sans-serif',
            backgroundColor: '#CDDB2D',
            fontSize: 'clamp(1rem, 1.2vw, 1.25rem)',
            borderRadius: '8px'
          }}>
              Buy now — €{selectedOption?.price}
            </Button>

            {/* Lab Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {labTiles.map(tile => <div key={tile.key} className="rounded-xl border border-olive-dark overflow-hidden bg-transparent">
                  <div className="px-3 py-1.5" style={{
                backgroundColor: '#1B4229'
              }}>
                    <div className="font-semibold uppercase tracking-wide text-center" style={{
                  color: '#FFFFFF',
                  fontSize: 'clamp(0.8rem, 1vw, 1.1rem)'
                }}>
                      {tile.label}
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-baseline gap-2 mb-1">
                      <div className="font-bold text-olive-dark leading-none" style={{
                    fontFamily: 'UDC Working Man Sans, sans-serif',
                    fontSize: 'clamp(1.25rem, 1.8vw, 2rem)'
                  }}>
                        {tile.value}
                        {tile.unit && <span className="ml-1 text-olive-dark/90" style={{
                      fontSize: 'clamp(0.875rem, 1.2vw, 1.25rem)'
                    }}>{tile.unit}</span>}
                      </div>
                      <div className="text-olive-light" style={{
                    fontFamily: 'Space Grotesk, monospace',
                    fontSize: 'clamp(0.75rem, 0.9vw, 1rem)'
                  }}>{tile.avg}</div>
                    </div>
                    <p className="text-olive-medium leading-relaxed" style={{
                  fontFamily: 'Space Grotesk, monospace',
                  fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)'
                }}>{tile.description}</p>
                  </div>
                </div>)}
            </div>

            {/* Product Information Tabs */}
            <ProductInfoTabs />

          </div>
        </div>
      </div>
    </section>;
};