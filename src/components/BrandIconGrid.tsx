import sunIcon from '@/assets/brand-icons/sun.svg';
import breadIcon from '@/assets/brand-icons/bread.svg';
import mortarIcon from '@/assets/brand-icons/mortar.svg';
import femaleBustIcon from '@/assets/brand-icons/female-bust.svg';
import amphoraIcon from '@/assets/brand-icons/amphora.svg';
import oliveBranchIcon from '@/assets/brand-icons/olive-branch.svg';
import farmIcon from '@/assets/brand-icons/farm.svg';
import columnIcon from '@/assets/brand-icons/column.svg';
import jarIcon from '@/assets/brand-icons/jar.svg';
import bookIcon from '@/assets/brand-icons/book.svg';
import lyreIcon from '@/assets/brand-icons/lyre.svg';
import basketIcon from '@/assets/brand-icons/basket.svg';
import donkeyIcon from '@/assets/brand-icons/donkey.svg';
import oliveTreeIcon from '@/assets/brand-icons/olive-tree.svg';

export const BrandIconGrid = () => {
  const icons = [
    sunIcon,
    oliveBranchIcon,
    amphoraIcon,
    oliveTreeIcon,
    farmIcon,
    breadIcon,
    mortarIcon,
    jarIcon,
    columnIcon,
    femaleBustIcon,
    lyreIcon,
    basketIcon,
    donkeyIcon,
    bookIcon,
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

        <div className="grid grid-cols-7 gap-8 max-w-6xl mx-auto">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="aspect-square flex items-center justify-center p-4 rounded-lg transition-all duration-300 hover:scale-110"
              style={{ 
                backgroundColor: 'rgba(205, 219, 45, 0.1)',
                border: '1px solid rgba(205, 219, 45, 0.2)'
              }}
            >
              <img
                src={icon}
                alt={`Brand icon ${index + 1}`}
                className="w-full h-full object-contain"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(88%) sepia(13%) saturate(1844%) hue-rotate(22deg) brightness(100%) contrast(88%)',
                  opacity: 0.7
                }}
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
