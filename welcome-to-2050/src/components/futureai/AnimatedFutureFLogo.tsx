import React, { useState, useRef, useEffect } from 'react';
import './FutureLogoAnimated.css';

export interface AnimatedDesktopHeaderLogoProps {
  onClick: () => void;
}

/**
 * Advanced 5-Stage Animated Future IT Industry Header Logo (V2)
 * - Exact original purple gradient container, F emblem & typography.
 * - Stage 1 (0–0.45s): First curved stroke draws smoothly.
 * - Stage 2 (0.4–1.1s): 2-part F emblem slides & assembles into exact shape.
 * - Stage 3 (1.1–1.7s): Bright purple/lavender energy trail travels the F curve.
 * - Stage 4 (1.7–2.3s): Staggered "Future IT" / "Industry" reveal + shimmer.
 * - Stage 5 (2.3–2.85s): Controlled settle + brief glow -> exact static logo.
 * - Hover replays a crisp 1.25s sequence once per hover (no flicker/re-trigger while hovered).
 * - Click plays replay + navigates immediately with zero delay.
 */
export const AnimatedDesktopHeaderLogo: React.FC<AnimatedDesktopHeaderLogoProps> = ({
  onClick,
}) => {
  const [animMode, setAnimMode] = useState<'intro' | 'replay' | 'idle'>('intro');
  const [replayKey, setReplayKey] = useState(0);
  const timerRef = useRef<number | null>(null);
  const hoverLockedRef = useRef<boolean>(false);

  // Settle initial 2.85s intro animation cleanly into idle state
  useEffect(() => {
    timerRef.current = window.setTimeout(() => {
      setAnimMode('idle');
    }, 2950);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const triggerReplay = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setAnimMode('replay');
    setReplayKey((k) => k + 1);
    timerRef.current = window.setTimeout(() => {
      setAnimMode('idle');
    }, 1350);
  };

  const handleMouseEnter = () => {
    if (hoverLockedRef.current || animMode === 'intro') return;
    hoverLockedRef.current = true;
    triggerReplay();
  };

  const handleMouseLeave = () => {
    hoverLockedRef.current = false;
  };

  const handleClick = () => {
    triggerReplay();
    onClick();
  };

  const modeClass =
    animMode === 'intro'
      ? 'fii-mode-intro'
      : animMode === 'replay'
      ? 'fii-mode-replay'
      : 'fii-mode-idle';

  return (
    <div
      role="button"
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      onClick={handleClick}
      className={`${modeClass} relative shrink-0 h-[54px] px-3.5 sm:px-4 rounded-2xl bg-gradient-to-r from-[#5716cc] to-[#4b18a5] text-white flex items-center gap-2.5 select-none cursor-pointer border border-white/10 z-20 outline-none focus-visible:ring-2 focus-visible:ring-[#C4B5FD]`}
      style={{
        boxShadow: '0 4px 12px rgba(87, 22, 204, 0.16)',
      }}
      title="Future IT Industry — Home"
    >
      {/* Animated F Symbol Stage (Remounted via replayKey on hover/click for clean SVG replay) */}
      <div key={replayKey} className="fii-v2-stage">
        {animMode === 'idle' ? (
          /* Exact original static emblem once settled */
          <img
            src="/images/brand/future_it_white_emblem.png"
            alt="Future IT"
            className="fii-v2-emblem-layer drop-shadow-sm"
            loading="eager"
          />
        ) : (
          <>
            {/* Stage 2: Lower curved stem + middle bar assembly piece */}
            <img
              src="/images/brand/future_it_white_emblem.png"
              alt="Future IT"
              className="fii-v2-emblem-layer fii-v2-lower-part drop-shadow-sm"
              loading="eager"
            />
            {/* Stage 2: Upper curved wing assembly piece */}
            <img
              src="/images/brand/future_it_white_emblem.png"
              alt=""
              aria-hidden="true"
              className="fii-v2-emblem-layer fii-v2-upper-part drop-shadow-sm"
              loading="eager"
            />
          </>
        )}

        {/* Stage 1 & 3: Exact-curve SVG stroke draw + luminous purple energy trail */}
        <svg
          viewBox="0 0 36 34"
          fill="none"
          className="fii-v2-svg-overlay"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="fiiEnergyGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="50%" stopColor="#F5D0FE" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
            <filter id="fiiGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="1.4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Lower stem & middle bar stroke path */}
          <path
            d="M 10 29 C 11 21, 13 15, 20 14 L 32 13.5"
            stroke="#FFFFFF"
            strokeWidth="2.8"
            strokeLinecap="round"
            className="fii-v2-stroke-lower"
            filter="url(#fiiGlowFilter)"
          />

          {/* Upper curved wing stroke path */}
          <path
            d="M 13 12 C 17 5.5, 24 4, 34 4.5"
            stroke="#E9D5FF"
            strokeWidth="2.6"
            strokeLinecap="round"
            className="fii-v2-stroke-upper"
            filter="url(#fiiGlowFilter)"
          />

          {/* Stage 3: Bright purple/lavender energy comet traveling along the F curve */}
          <path
            d="M 9 29 C 11 20, 14 14, 21 13.5 L 31 13 C 23 11, 16 10, 14 11 C 18 5.5, 24 4, 34 4.5"
            stroke="url(#fiiEnergyGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            className="fii-v2-energy-path"
            filter="url(#fiiGlowFilter)"
          />
        </svg>

        {/* Subtle purple-white sweep highlight */}
        <div className="fii-v2-sweep-mask" aria-hidden="true">
          <div className="fii-v2-sweep-bar" />
        </div>
      </div>

      {/* Stage 4: Staggered Brand Typography Reveal (Exact original font & size) */}
      <div className="flex flex-col text-white font-black italic tracking-tight leading-[1.05] text-[12.5px] select-none">
        <span className="fii-v2-text-line-1 fii-v2-text-shimmer">Future IT</span>
        <span className="fii-v2-text-line-2 fii-v2-text-shimmer text-[11.5px] tracking-normal font-extrabold">
          Industry
        </span>
      </div>
    </div>
  );
};
