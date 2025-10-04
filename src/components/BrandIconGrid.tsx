import meanderPattern1 from '@/assets/brand-icons/meander-pattern-1.svg';
import meanderPattern2 from '@/assets/brand-icons/meander-pattern-2.svg';
import lyreIcon from '@/assets/brand-icons/lyre.svg';
import basketIcon from '@/assets/brand-icons/basket.svg';
import donkeyIcon from '@/assets/brand-icons/donkey.svg';
import oliveTreeIcon from '@/assets/brand-icons/olive-tree.svg';

export const BrandIconGrid = () => {
  const icons = [
    oliveTreeIcon,
    lyreIcon,
    basketIcon,
    donkeyIcon,
    meanderPattern1,
    meanderPattern2,
  ];

  return (
    <section className="py-24 snap-start min-h-screen flex items-center" style={{ backgroundColor: '#1B4229' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight" style={{ color: '#CDDB2D' }}>
            Option 3: <span className="font-medium italic">Icon Grid</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto" style={{ fontFamily: 'Space Grotesk, monospace' }}>
            A structured, intentional grid layout showcasing our Greek heritage icons
          </p>
        </div>

        <div className="grid grid-cols-6 gap-8 max-w-4xl mx-auto">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="aspect-square flex items-center justify-center p-6 rounded-lg transition-all duration-300 hover:scale-110"
              style={{ 
                backgroundColor: 'rgba(205, 219, 45, 0.1)',
                border: '1px solid rgba(205, 219, 45, 0.2)'
              }}
            >
              <img
                src={icon}
                alt={`Brand icon ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-white/60" style={{ fontFamily: 'Space Grotesk, monospace' }}>
          Structured · Intentional · Organized
        </div>
      </div>
    </section>
  );
};
