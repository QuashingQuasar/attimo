import { AlertTriangle, Blend, Eye, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import patternBg from "@/assets/testimonial-pattern.svg";

export const IndustryProblem = () => {
  return (
    <section className="py-12 bg-[#1B4229] snap-start min-h-screen flex items-center relative">
      {/* Pattern Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${patternBg})`,
          backgroundSize: '600px 600px',
          backgroundRepeat: 'repeat',
          opacity: 0.2,
          filter: 'brightness(0)'
        }}
      ></div>
      
      <div className="mx-auto px-4 w-[90vw] relative z-10">
        {/* Contained section with video background */}
        <div className="relative overflow-hidden rounded-3xl">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/harvest-2024-1.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Blur Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          
          {/* Content */}
          <div className="relative z-10 py-20 px-12 md:px-20">
        <div className="mx-auto">
          {/* Main Heading */}
          <div className="text-left mb-20 max-w-5xl">
            <h2 className="text-5xl md:text-7xl font-light mb-8 leading-tight tracking-tight" style={{ color: '#CDDB2D' }}>
              The <span className="font-medium italic">"extra virgin" lie</span>
            </h2>
             <p className="text-2xl md:text-3xl text-white/90 max-w-[60rem] leading-relaxed font-light" style={{ fontFamily: 'Space Grotesk, monospace' }}>
               80% of olive oil sold as "extra virgin" doesn't meet those standards. It's blended, stripped of origin, taste and character.
             </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="text-center p-12 border border-white/20 rounded-lg">
              <div className="text-7xl font-working-man font-light text-white mb-4">~80%</div>
               <p className="text-xl text-white/90 font-light leading-relaxed" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                 olive oils sold as "extra virgin" don't meet those standards
               </p>
            </div>

            <div className="text-center p-12 border border-white/20 rounded-lg">
              <div className="text-7xl font-working-man font-light text-white mb-4">~90%</div>
               <p className="text-xl text-white/90 font-light leading-relaxed" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                 "extra virgin" olive oils are low in health-boosting polyphenols
               </p>
            </div>
          </div>

          {/* Problem Breakdown */}
          <div className="grid md:grid-cols-3 gap-16 mx-auto">
            {/* Flavor and Health */}
            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <Blend className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                Flavour and health get blended away
              </h3>
               <p className="text-lg md:text-xl text-white/80 leading-relaxed" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                 To scale production, oils from multiple sources are mixed into a standardized taste, losing what makes real olive oil special: 
                 fresh flavour, distinct character, and polyphenols that make it healthy.
               </p>
            </div>

            {/* Real Thing */}
            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                You've never tasted the real thing
              </h3>
               <p className="text-lg md:text-xl text-white/80 leading-relaxed" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                 True extra virgin is intense: bitter, peppery, fragrant. Each oil has a fingerprint: olive variety, grove, harvest, craft. 
                 These are also the healthiest oils, but most people never get to taste them.
               </p>
            </div>

            {/* Big Oil Impact */}
            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                Big oil kills family groves
              </h3>
               <p className="text-lg md:text-xl text-white/80 leading-relaxed" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                 Under financial stress, small farmers have no choice but to sell to big players. Their sublime oil gets blended into cheap stuff and 
                 sold for pennies. Making great EVOO is an art and when that art isn't paid for, it and great oil will disappear.
               </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};