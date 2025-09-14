
export const KleiaWay = () => {
  return (
    <section className="py-24 bg-olive-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight" style={{ color: '#9EEF80' }}>
            How We Make Sure<br />
            <span className="font-medium italic">You Get The Good Stuff</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-4 grid-rows-2 gap-6 max-w-[90vw] mx-auto h-[600px]">
          {/* Large tile - Video (spans 2 rows) */}
          <div className="row-span-2 rounded-2xl relative overflow-hidden">
            <video 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/kleia-way-video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Top row, col 2 - Not Blended (text) */}
          <div className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-6 text-olive-dark">
            <div className="h-full flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-4 text-olive-dark">FROM GROVE TO TABLE</h4>
              <p className="text-olive-dark/90 text-base leading-relaxed" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                We source directly from the people who make the oil. No middlemen, no blending, no shortcuts.
              </p>
            </div>
          </div>

          {/* Top row, col 3 - Video */}
          <div className="rounded-2xl relative overflow-hidden">
            <video 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/third-column-upper-new.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Top row, col 4 - Text content (as shown in sketch) */}
          <div className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-6 text-olive-dark">
            <div className="h-full flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-4 text-olive-dark">LAB-TESTED QUALITY</h4>
              <p className="text-olive-dark/90 text-base leading-relaxed" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                Every bottle is lab-tested by third parties on key quality markers you can verify for yourself.
              </p>
            </div>
          </div>

          {/* Bottom row, col 2 - Video */}
          <div className="rounded-2xl relative overflow-hidden">
            <video 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/kleia-way-video-3.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Bottom row, col 3 - Lab Tested (text according to sketch) */}
          <div className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-6 text-olive-dark">
            <div className="h-full flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-4 text-olive-dark">FRESH AND SINGLE-GROVE</h4>
              <p className="text-olive-dark/90 text-base leading-relaxed" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                Every bottle is from the latest harvest and is sourced from just one grove.
              </p>
            </div>
          </div>

          {/* Bottom row, col 4 - Video */}
          <div className="rounded-2xl relative overflow-hidden">
            <video 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/bottom-right-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};