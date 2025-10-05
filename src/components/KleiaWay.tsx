
export const KleiaWay = () => {
  return (
    <section className="min-h-screen snap-start flex items-start lg:items-center mt-0 lg:-mt-64 pt-8 pb-8" style={{ backgroundColor: 'hsl(var(--section-light))' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight" style={{ color: '#1B4229' }}>
            How We Make Sure<br />
            <span className="font-medium italic">You Get The Good Stuff</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-6 max-w-[90vw] mx-auto lg:h-[750px]">
          {/* Top row, col 1 - Not Blended (text) */}
          <div className="rounded-2xl p-6 h-[250px] lg:h-auto" style={{ backgroundColor: '#1B4229', color: '#CDDB2D' }}>
            <div className="h-full flex flex-col justify-center">
              <h4 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#CDDB2D' }}>FROM GROVE TO TABLE</h4>
              <p className="text-lg lg:text-xl leading-relaxed" style={{ fontFamily: 'Space Grotesk, monospace', color: '#CDDB2D' }}>
                We source directly from the people who make the oil. No middlemen, no blending, no shortcuts.
              </p>
            </div>
          </div>

          {/* Top row, col 3 - Video */}
          <div className="rounded-2xl relative overflow-hidden h-[250px] lg:h-auto">
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
          <div className="rounded-2xl p-6 h-[250px] lg:h-auto" style={{ backgroundColor: '#1B4229', color: '#CDDB2D' }}>
            <div className="h-full flex flex-col justify-center">
              <h4 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#CDDB2D' }}>LAB-TESTED QUALITY</h4>
              <p className="text-lg lg:text-xl leading-relaxed" style={{ fontFamily: 'Space Grotesk, monospace', color: '#CDDB2D' }}>
                Every bottle is lab-tested by third parties on key quality markers you can verify for yourself.
              </p>
            </div>
          </div>

          {/* Bottom row, col 2 - Video */}
          <div className="rounded-2xl relative overflow-hidden h-[250px] lg:h-auto">
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
          <div className="rounded-2xl p-6 h-[250px] lg:h-auto" style={{ backgroundColor: '#1B4229', color: '#CDDB2D' }}>
            <div className="h-full flex flex-col justify-center">
              <h4 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#CDDB2D' }}>FRESH AND SINGLE-GROVE</h4>
              <p className="text-lg lg:text-xl leading-relaxed" style={{ fontFamily: 'Space Grotesk, monospace', color: '#CDDB2D' }}>
                Every bottle is from the latest harvest and is sourced from just one grove.
              </p>
            </div>
          </div>

          {/* Bottom row, col 4 - Video */}
          <div className="rounded-2xl relative overflow-hidden h-[250px] lg:h-auto">
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
        </div>
      </div>
    </section>
  );
};