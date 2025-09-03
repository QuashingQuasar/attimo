import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HarvestStory = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative min-h-screen bg-[hsl(var(--section-dark))] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src="/videos/harvest-2024-1.mp4" type="video/mp4" />
        </video>
        
        {/* Elegant Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Play Button */}
          <div className="mb-12 flex justify-center">
            <Button
              onClick={togglePlay}
              className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 group"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              ) : (
                <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
              )}
            </Button>
          </div>

          {/* Quality Comparison */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="max-w-3xl mx-auto">
              <div className="backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20 overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-4 border-b border-white/20">
                  <div></div>
                  <div className="text-center font-semibold text-white">OLIOVERO</div>
                  <div className="text-center font-semibold text-white/80">AVG. OIL</div>
                </div>
                
                <div className="divide-y divide-white/10">
                  <div className="grid grid-cols-3 gap-4 p-4">
                    <div className="text-white font-medium">Fresh</div>
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-green-400 flex items-center justify-center mx-auto">
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    <div className="text-center text-white/70 text-sm">no, mixed with old oils</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 p-4">
                    <div className="text-white font-medium">Single source</div>
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-green-400 flex items-center justify-center mx-auto">
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    <div className="text-center text-white/70 text-sm">no, blended from +3 countries</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 p-4">
                    <div className="text-white font-medium">Traceable</div>
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-green-400 flex items-center justify-center mx-auto">
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 border-2 border-red-400 flex items-center justify-center mx-auto">
                        <div className="w-4 h-0.5 bg-red-400 rotate-45"></div>
                        <div className="w-4 h-0.5 bg-red-400 -rotate-45 absolute"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 p-4">
                    <div className="text-white font-medium">Lab-tested</div>
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-green-400 flex items-center justify-center mx-auto">
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 border-2 border-red-400 flex items-center justify-center mx-auto">
                        <div className="w-4 h-0.5 bg-red-400 rotate-45"></div>
                        <div className="w-4 h-0.5 bg-red-400 -rotate-45 absolute"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 p-4">
                    <div className="text-white font-medium">Polyphenols</div>
                    <div className="text-center text-white font-semibold">~900mg/kg</div>
                    <div className="text-center text-white/70">100-200mg/kg</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-pulse">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-xs uppercase tracking-widest">Scroll to Continue</div>
          <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};