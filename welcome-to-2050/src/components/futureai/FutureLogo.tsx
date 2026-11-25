import React, { useState, useRef, useEffect } from 'react';
import { BRAND } from '../../config/brand';
import './FutureLogoAnimated.css';

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
  const [animMode, setAnimMode] = useState<'intro' | 'replay' | 'idle'>('intro');
  const [replayKey, setReplayKey] = useState(0);
  const timerRef = useRef<number | null>(null);
  const hoverLockedRef = useRef<boolean>(false);

  useEffect(() => {
    timerRef.current = window.setTimeout(() => setAnimMode('idle'), 1750);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const triggerReplay = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setAnimMode('replay');
    setReplayKey((k) => k + 1);
    timerRef.current = window.setTimeout(() => setAnimMode('idle'), 700);
  };

  const handleMouseEnter = () => {
    if (hoverLockedRef.current || animMode === 'intro') return;
    hoverLockedRef.current = true;
    triggerReplay();
  };

  const handleMouseLeave = () => {
    hoverLockedRef.current = false;
  };

  const sizeMap = {
    sm: 'h-6 min-[375px]:h-7',
    md: 'h-7 min-[375px]:h-8 sm:h-9',
    lg: 'h-9 sm:h-11',
    xl: 'h-11 sm:h-14',
  };

  const modeClass =
    animMode === 'intro'
      ? 'fii-mobile-mode-intro'
      : animMode === 'replay'
      ? 'fii-mobile-mode-replay'
      : 'fii-mode-idle';

  if (variant === 'emblem') {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={triggerReplay}
        className={`${modeClass} inline-flex items-center gap-2 select-none group cursor-pointer ${className}`}
      >
        <span key={replayKey} className="fii-mobile-logo-wrap">
          <img
            src={BRAND.emblem}
            alt={BRAND.name}
            className={`fii-mobile-logo-img ${sizeMap[size]} w-auto object-contain`}
            loading="eager"
          />
          <span className="fii-v2-sweep-mask" aria-hidden="true">
            <span className="fii-v2-sweep-bar" />
          </span>
        </span>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={triggerReplay}
      className={`${modeClass} inline-flex items-center min-w-0 select-none group cursor-pointer ${className}`}
    >
      <span key={replayKey} className="fii-mobile-logo-wrap">
        <img
          src={BRAND.logo}
          alt={`${BRAND.name} — ${BRAND.tagline}`}
          className={`fii-mobile-logo-img ${sizeMap[size]} w-auto max-w-[132px] min-[375px]:max-w-[162px] min-[410px]:max-w-[190px] sm:max-w-[280px] object-contain mix-blend-multiply`}
          loading="eager"
        />
        <span className="fii-v2-sweep-mask" aria-hidden="true">
          <span className="fii-v2-sweep-bar" />
        </span>
      </span>
    </div>
  );
};

export default FutureLogo;
