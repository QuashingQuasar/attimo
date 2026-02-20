
export const KleiaWay = () => {
  return (
    <section className="snap-start pt-12 md:pt-16 lg:pt-24 pb-24 md:pb-28 lg:pb-36" style={{ backgroundColor: 'hsl(var(--section-light))' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="font-light mb-8 tracking-tight" style={{ 
            fontFamily: 'UDC Working Man Sans, sans-serif',
            color: '#1B4229',
            fontSize: 'clamp(2rem, 3.5vw, 3.75rem)'
          }}>
            How We Make Sure<br />
            <span className="font-medium italic">You Get The Good Stuff</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-5 max-w-[95vw] mx-auto lg:h-[700px]">
          {/* Row 1, Col 1 - Text: From Grove to Table */}
          <div className="rounded-2xl p-6 h-[250px] lg:h-auto" style={{ backgroundColor: '#1B4229', color: '#B3E58C' }}>
            <div className="h-full flex flex-col justify-center items-center text-center">
              <h4 className="font-bold mb-5" style={{ 
                fontFamily: 'UDC Working Man Sans, sans-serif',
                color: '#B3E58C',
                fontSize: 'clamp(1.3rem, 2vw, 2.25rem)'
              }}>FROM GROVE TO TABLE</h4>
              <p className="leading-relaxed" style={{ 
                fontFamily: 'Space Grotesk, monospace', 
                color: '#B3E58C',
                fontSize: 'clamp(0.9rem, 1.1vw, 1.25rem)'
              }}>
                We source directly from the people who make the oil. No middlemen, no blending, no shortcuts.
              </p>
            </div>
          </div>

          {/* Row 1, Col 2 - Video */}
          <div className="rounded-2xl relative overflow-hidden h-[250px] lg:h-auto">
            <video 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/content-video-1.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Row 1, Col 3 - Text: Lab-Tested Quality */}
          <div className="rounded-2xl p-6 h-[250px] lg:h-auto" style={{ backgroundColor: '#1B4229', color: '#B3E58C' }}>
            <div className="h-full flex flex-col justify-center items-center text-center">
              <h4 className="font-bold mb-5" style={{ 
                fontFamily: 'UDC Working Man Sans, sans-serif',
                color: '#B3E58C',
                fontSize: 'clamp(1.3rem, 2vw, 2.25rem)'
              }}>LAB-TESTED QUALITY</h4>
              <p className="leading-relaxed" style={{ 
                fontFamily: 'Space Grotesk, monospace', 
                color: '#B3E58C',
                fontSize: 'clamp(0.9rem, 1.1vw, 1.25rem)'
              }}>
                Every bottle is lab-tested by third parties on key quality markers you can verify for yourself.
              </p>
            </div>
          </div>

          {/* Row 1, Col 4 - Video */}
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

          {/* Row 2, Col 1 - Video */}
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

          {/* Row 2, Col 2 - Text: Single-Grove */}
          <div className="rounded-2xl p-6 h-[250px] lg:h-auto" style={{ backgroundColor: '#1B4229', color: '#B3E58C' }}>
            <div className="h-full flex flex-col justify-center items-center text-center">
              <h4 className="font-bold mb-5" style={{ 
                fontFamily: 'UDC Working Man Sans, sans-serif',
                color: '#B3E58C',
                fontSize: 'clamp(1.3rem, 2vw, 2.25rem)'
              }}>FRESH AND SINGLE-GROVE</h4>
              <p className="leading-relaxed" style={{ 
                fontFamily: 'Space Grotesk, monospace', 
                color: '#B3E58C',
                fontSize: 'clamp(0.9rem, 1.1vw, 1.25rem)'
              }}>
                Every bottle is from the latest harvest and is sourced from just one grove.
              </p>
            </div>
          </div>

          {/* Row 2, Col 3 - Video */}
          <div className="rounded-2xl relative overflow-hidden h-[250px] lg:h-auto">
            <video 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/kleia-way-video-4.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Row 2, Col 4 - Text: Early Harvest */}
          <div className="rounded-2xl p-6 h-[250px] lg:h-auto" style={{ backgroundColor: '#1B4229', color: '#B3E58C' }}>
            <div className="h-full flex flex-col justify-center items-center text-center">
              <h4 className="font-bold mb-5" style={{ 
                fontFamily: 'UDC Working Man Sans, sans-serif',
                color: '#B3E58C',
                fontSize: 'clamp(1.3rem, 2vw, 2.25rem)'
              }}>EARLY HARVEST</h4>
              <p className="leading-relaxed" style={{ 
                fontFamily: 'Space Grotesk, monospace', 
                color: '#B3E58C',
                fontSize: 'clamp(0.9rem, 1.1vw, 1.25rem)'
              }}>
                Picked at peak ripeness for maximum polyphenols, bold flavor and longer shelf life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};