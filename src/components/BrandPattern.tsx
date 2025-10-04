import { useMemo } from 'react';
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

interface BrandPatternProps {
  variant?: 'light' | 'dark' | 'green' | 'cream';
  density?: 'sparse' | 'medium' | 'dense';
  className?: string;
}

const icons = [
  sunIcon,
  breadIcon,
  mortarIcon,
  femaleBustIcon,
  amphoraIcon,
  oliveBranchIcon,
  farmIcon,
  columnIcon,
  jarIcon,
  bookIcon,
  lyreIcon,
  basketIcon,
  donkeyIcon,
  oliveTreeIcon,
];

export const BrandPattern = ({ 
  variant = 'light', 
  density = 'sparse',
  className = '' 
}: BrandPatternProps) => {
  const iconCount = density === 'sparse' ? 6 : density === 'medium' ? 10 : 15;
  
  const positions = useMemo(() => {
    const seed = 12345; // Fixed seed for consistent layout
    let rand = seed;
    const random = () => {
      rand = (rand * 9301 + 49297) % 233280;
      return rand / 233280;
    };

    return Array.from({ length: iconCount }, (_, i) => ({
      icon: icons[i % icons.length],
      top: `${random() * 100}%`,
      left: `${random() * 100}%`,
      size: 100 + random() * 150, // 100-250px
      rotation: random() * 360,
      opacity: variant === 'dark' || variant === 'green' ? 0.08 : 0.12,
    }));
  }, [iconCount, variant]);

  const filterClass = variant === 'dark' || variant === 'green' 
    ? 'brightness-[2] saturate-[0.3]' 
    : variant === 'cream'
    ? 'brightness-[0.7] saturate-[0.5]'
    : 'brightness-[1.5] saturate-[0.4]';

  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {positions.map((pos, i) => (
        <img
          key={i}
          src={pos.icon}
          alt=""
          className={`absolute ${filterClass}`}
          style={{
            top: pos.top,
            left: pos.left,
            width: `${pos.size}px`,
            height: `${pos.size}px`,
            transform: `rotate(${pos.rotation}deg)`,
            opacity: pos.opacity,
          }}
        />
      ))}
    </div>
  );
};
