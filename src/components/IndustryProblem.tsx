import { AlertTriangle, Blend, Eye, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
export const IndustryProblem = () => {
  return <section className="py-24 bg-[#1B4229] snap-start flex items-center">
      <div className="mx-auto px-4 w-[90vw]">
        {/* Contained section with video background */}
        <div className="relative overflow-hidden rounded-3xl">
          {/* Video Background */}
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/harvest-2024-1.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Blur Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          
          {/* Content */}
          <div className="relative z-10 py-8 px-6 md:py-20 md:px-20">
        <div className="mx-auto">
          {/* Main Heading */}
          <div className="text-left mb-12 md:mb-20 max-w-5xl">
            <h2 className="font-light mb-4 md:mb-8 leading-tight tracking-tight" style={{
                fontFamily: 'UDC Working Man Sans, sans-serif',
                color: '#CDDB2D',
                fontSize: 'clamp(2.4375rem, 5.2vw, 6.5rem)'
              }}>
              The <span className="font-medium italic">"extra virgin" lie</span>
            </h2>
             <p className="text-white/90 max-w-[60rem] leading-relaxed font-light" style={{
                fontFamily: 'Space Grotesk, monospace',
                fontSize: 'clamp(1rem, 1.8vw, 2rem)'
              }}>
               80% of olive oil sold as "extra virgin" doesn't meet those standards. It's blended, stripped of origin, taste and character.
             </p>
          </div>

          {/* Statistics */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-20">
            <div className="text-center p-6 md:p-12 border border-white rounded-lg">
              <div className="font-working-man font-light text-white mb-2 md:mb-4" style={{
                fontSize: 'clamp(2.5rem, 4.5vw, 5rem)'
              }}>~80%</div>
               <p className="text-white/90 font-light leading-relaxed" style={{
                  fontFamily: 'Space Grotesk, monospace',
                  fontSize: 'clamp(0.875rem, 1.3vw, 1.5rem)'
                }}>
                 olive oils sold as "extra virgin" don't meet those standards
               </p>
            </div>

            <div className="text-center p-6 md:p-12 border border-white rounded-lg">
              <div className="font-working-man font-light text-white mb-2 md:mb-4" style={{
                fontSize: 'clamp(2.5rem, 4.5vw, 5rem)'
              }}>~90%</div>
               <p className="text-white/90 font-light leading-relaxed" style={{
                  fontFamily: 'Space Grotesk, monospace',
                  fontSize: 'clamp(0.875rem, 1.3vw, 1.5rem)'
                }}>
                 "extra virgin" olive oils are low in health-boosting polyphenols
               </p>
            </div>
          </div>

          {/* Problem Breakdown */}
          <div className="grid lg:grid-cols-3 gap-8 md:gap-16 mx-auto">
            {/* Flavor and Health */}
            <div className="space-y-3 md:space-y-6">
              
              <h3 className="font-bold text-white tracking-tight leading-tight" style={{
                fontFamily: 'UDC Working Man Sans, sans-serif',
                fontSize: 'clamp(1.125rem, 1.8vw, 2rem)'
              }}>
                Flavour and health get blended away
              </h3>
               <p className="text-white/80 leading-relaxed" style={{
                  fontFamily: 'Space Grotesk, monospace',
                  fontSize: 'clamp(0.875rem, 1.2vw, 1.375rem)'
                }}>
                 To scale production, oils from multiple sources are mixed into a standardized taste, losing what makes real olive oil special: 
                 fresh flavour, distinct character, and polyphenols that make it healthy.
               </p>
            </div>

            {/* Real Thing */}
            <div className="space-y-3 md:space-y-6">
              
              <h3 className="font-bold text-white tracking-tight leading-tight" style={{
                fontFamily: 'UDC Working Man Sans, sans-serif',
                fontSize: 'clamp(1.125rem, 1.8vw, 2rem)'
              }}>
                You've never tasted the real thing
              </h3>
               <p className="text-white/80 leading-relaxed" style={{
                  fontFamily: 'Space Grotesk, monospace',
                  fontSize: 'clamp(0.875rem, 1.2vw, 1.375rem)'
                }}>
                 True extra virgin is intense: bitter, peppery, fragrant. Each oil has a fingerprint: olive variety, grove, harvest, craft. 
                 These are also the healthiest oils, but most people never get to taste them.
               </p>
            </div>

            {/* Big Oil Impact */}
            <div className="space-y-3 md:space-y-6">
              
              <h3 className="font-bold text-white tracking-tight leading-tight" style={{
                fontFamily: 'UDC Working Man Sans, sans-serif',
                fontSize: 'clamp(1.125rem, 1.8vw, 2rem)'
              }}>
                Big oil kills family groves
              </h3>
               <p className="text-white/80 leading-relaxed" style={{
                  fontFamily: 'Space Grotesk, monospace',
                  fontSize: 'clamp(0.875rem, 1.2vw, 1.375rem)'
                }}>
                 Under financial stress, small farmers have no choice but to sell to big players. Their sublime oil gets blended into cheap stuff and 
                 sold for pennies. Making great EVOO is an art and when that art isn't paid for, it and great oil will disappear.
               </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>;
};