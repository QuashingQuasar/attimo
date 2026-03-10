import { Button } from "@/components/ui/button";
import { OliveLeaf } from './OliveLeaf';
import kleiaLogo from '@/assets/attimo-main-logo.svg';
interface HeroProps {
  onWaitlistClick: () => void;
}
export const Hero = ({
  onWaitlistClick
}: HeroProps) => {
  return <section className="relative flex items-center justify-center overflow-hidden h-screen snap-start">
      <video
      autoPlay
      muted
      loop
      playsInline
      webkit-playsinline="true"
      disablePictureInPicture
      disableRemotePlayback
      poster="/images/hero-poster.png"
      className="absolute inset-0 w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden"
      style={{ pointerEvents: 'none' }}>
      
        <source src="/videos/hero-video-new.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
      
      <div className="relative z-10 container mx-auto px-6 flex items-center justify-center" style={{ height: 'calc(100vh - 100px)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 md:mb-8 flex justify-center animate-fade-in">
            <img
            src={kleiaLogo}
            alt="ATTIMO olive oil logo"
            className="object-contain drop-shadow-2xl"
            style={{ width: 'min(479px, 45vw, 55vh)', height: 'auto' }} />
          
          </div>

          <div className="flex justify-center mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
            onClick={() => document.getElementById('harvest-product')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 md:px-10 py-3 md:py-6 hover:scale-105 transition-all duration-300 font-semibold backdrop-blur-sm shadow-2xl"
            style={{
              fontFamily: 'UDC Working Man Sans, sans-serif',
              border: '2px solid #CDDB2D',
              color: '#1B4229',
              backgroundColor: '#CDDB2D',
              fontSize: 'clamp(0.875rem, 1.3vw, 1.5rem)',
              borderRadius: '8px'
            }}>
            
              Shop new Harvest
            </Button>
          </div>

          



        
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-40 bg-accent py-3 md:py-5 overflow-hidden border-t border-olive-dark/10">
        <div className="flex animate-marquee">
          {Array(2).fill(null).map((_, i) => <div key={i} className="flex items-center whitespace-nowrap">
              <span className="font-working-man-light font-bold tracking-[0.15em]" style={{ color: '#1B4229', fontSize: 'clamp(1rem, 2vw, 2.25rem)' }}>PREMIUM QUALITY</span>
              <OliveLeaf className="w-2 md:w-3 h-4 md:h-5 mx-4 md:mx-6" fill="#1B4229" />
              <span className="font-working-man-light font-bold tracking-[0.15em]" style={{ color: '#1B4229', fontSize: 'clamp(1rem, 2vw, 2.25rem)' }}>DIRECT FROM GROVES</span>
              <OliveLeaf className="w-2 md:w-3 h-4 md:h-5 mx-4 md:mx-6" fill="#1B4229" />
              <span className="font-working-man-light font-bold tracking-[0.15em]" style={{ color: '#1B4229', fontSize: 'clamp(1rem, 2vw, 2.25rem)' }}>LAB TESTED</span>
              <OliveLeaf className="w-2 md:w-3 h-4 md:h-5 mx-4 md:mx-6" fill="#1B4229" />
              <span className="font-working-man-light font-bold tracking-[0.15em]" style={{ color: '#1B4229', fontSize: 'clamp(1rem, 2vw, 2.25rem)' }}>FRESH HARVEST</span>
              <OliveLeaf className="w-2 md:w-3 h-4 md:h-5 mx-4 md:mx-6" fill="#1B4229" />
              <span className="font-working-man-light font-bold tracking-[0.15em]" style={{ color: '#1B4229', fontSize: 'clamp(1rem, 2vw, 2.25rem)' }}>TRACEABLE</span>
              <OliveLeaf className="w-2 md:w-3 h-4 md:h-5 mx-4 md:mx-6" fill="#1B4229" />
              <span className="font-working-man-light font-bold tracking-[0.15em]" style={{ color: '#1B4229', fontSize: 'clamp(1rem, 2vw, 2.25rem)' }}>ARTISANAL</span>
              <OliveLeaf className="w-2 md:w-3 h-4 md:h-5 mx-4 md:mx-6" fill="#1B4229" />
              <span className="font-working-man-light font-bold tracking-[0.15em]" style={{ color: '#1B4229', fontSize: 'clamp(1rem, 2vw, 2.25rem)' }}>SMALL BATCH</span>
              <OliveLeaf className="w-2 md:w-3 h-4 md:h-5 mx-4 md:mx-6" fill="#1B4229" />
            </div>)}
        </div>
      </div>
    </section>;
};