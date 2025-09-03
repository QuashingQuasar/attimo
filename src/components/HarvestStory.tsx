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

          {/* Story Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-display font-light tracking-tight">
                Our Harvest
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
            </div>
            
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto text-white/90">
              Every October, as the Portuguese sun bathes our ancient groves in golden light, 
              we gather the fruits of centuries-old olive trees. Each olive is hand-picked at 
              the perfect moment of ripeness, preserving the exceptional flavors that define 
              our liquid gold.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-light">500+</div>
                <div className="text-sm uppercase tracking-widest text-white/70">Year Old Trees</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-light">24h</div>
                <div className="text-sm uppercase tracking-widest text-white/70">Mill to Bottle</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-light">2024</div>
                <div className="text-sm uppercase tracking-widest text-white/70">Portugal Harvest</div>
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