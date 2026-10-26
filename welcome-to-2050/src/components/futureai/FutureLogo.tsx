import React from 'react';
import { BRAND } from '../../config/brand';

interface FutureLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'emblem';
}

export const FutureLogo: React.FC<FutureLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
}) => {
  const sizeMap = {
    sm: 'h-6 min-[375px]:h-7',
    md: 'h-7 min-[375px]:h-8 sm:h-9',
    lg: 'h-9 sm:h-11',
    xl: 'h-11 sm:h-14',
  };

  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center gap-2 select-none group cursor-pointer ${className}`}>
        <img
          src={BRAND.emblem}
          alt={BRAND.name}
          className={`${sizeMap[size]} w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
          loading="eager"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center min-w-0 select-none group cursor-pointer ${className}`}>
      <img
        src={BRAND.logo}
        alt={`${BRAND.name} — ${BRAND.tagline}`}
        className={`${sizeMap[size]} w-auto max-w-[132px] min-[375px]:max-w-[162px] min-[410px]:max-w-[190px] sm:max-w-[280px] object-contain transition-transform duration-200 group-hover:scale-[1.02]`}
        loading="eager"
      />
    </div>
  );
};

export default FutureLogo;
