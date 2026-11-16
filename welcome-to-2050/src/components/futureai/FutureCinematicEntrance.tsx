import React, { useState, useEffect, useRef } from 'react';

export const FutureCinematicEntrance: React.FC = () => {
  const [isRendered, setIsRendered] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      // Show only once per browsing session
      if (sessionStorage.getItem('futureai_entrance_revealed') === 'true') {
        return false;
      }
      // Respect prefers-reduced-motion
      if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
        sessionStorage.setItem('futureai_entrance_revealed', 'true');
        return false;
      }
    } catch {
      return false;
    }
    return true;
  });

  const [dimensions, setDimensions] = useState<{ w: number; h: number }>(() => ({
    w: typeof window !== 'undefined' ? window.innerWidth : 1440,
    h: typeof window !== 'undefined' ? window.innerHeight : 900,
  }));

  const [radius, setRadius] = useState<number>(0);
  const [logoScale, setLogoScale] = useState<number>(0.85);
  const [logoOpacity, setLogoOpacity] = useState<number>(0);
  const [ringOpacity, setRingOpacity] = useState<number>(0);

  const reqIdRef = useRef<number | null>(null);

  // Expose replay & test hooks for verification
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const win = window as unknown as {
        replayEntranceAnimation?: () => void;
        setEntranceTestPhase?: (phase: number | null) => void;
      };
      win.replayEntranceAnimation = () => {
        sessionStorage.removeItem('futureai_entrance_revealed');
        window.location.reload();
      };
    }
  }, []);

  useEffect(() => {
    if (!isRendered || typeof window === 'undefined') return;

    // Check if a frozen test phase was requested
    const testPhaseStr = typeof window !== 'undefined' ? sessionStorage.getItem('futureai_test_phase') : null;
    const testPhase = testPhaseStr !== null && !isNaN(parseFloat(testPhaseStr)) ? parseFloat(testPhaseStr) : (window as unknown as { __FUTUREAI_TEST_PHASE?: number }).__FUTUREAI_TEST_PHASE;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const maxR = Math.hypot(w, h) * 0.75 + 100;

    if (typeof testPhase === 'number') {
      if (testPhase === 0) {
        setLogoScale(1);
        setLogoOpacity(1);
        setRadius(0);
        setRingOpacity(0);
      } else {
        setRadius(testPhase * maxR);
        setLogoOpacity(Math.max(0, 1 - testPhase * 2.2));
        setLogoScale(1 + 0.14 * testPhase);
        setRingOpacity(testPhase < 0.85 ? Math.min(1, testPhase * 4.5) : Math.max(0, (1 - testPhase) * 6.5));
      }
      return;
    }

    const updateDims = () => {
      setDimensions({
        w: window.innerWidth,
        h: window.innerHeight,
      });
    };
    window.addEventListener('resize', updateDims);

    const INTRO_DURATION = 400; // ms for logo scale-in & subtle glow
    const REVEAL_DURATION = 920; // ms for circular mask expansion
    const TOTAL_DURATION = INTRO_DURATION + REVEAL_DURATION; // ~1320ms

    let startTimestamp: number | null = null;

    const finish = () => {
      try {
        sessionStorage.setItem('futureai_entrance_revealed', 'true');
      } catch {}
      setIsRendered(false);
    };

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;

      if (elapsed < INTRO_DURATION) {
        // Phase 1: Logo Intro (0 to 400ms) — Smooth scale in & gentle glow
        const p = Math.min(1, elapsed / INTRO_DURATION);
        // Smooth ease out cubic
        const easeLogo = 1 - Math.pow(1 - p, 3);
        setLogoScale(0.86 + 0.14 * easeLogo);
        setLogoOpacity(easeLogo);
        setRadius(0);
        setRingOpacity(0);
      } else {
        // Phase 2: Circular Reveal (400ms to 1320ms) — Expanding mask reveals real homepage
        const revealElapsed = elapsed - INTRO_DURATION;
        const p = Math.min(1, revealElapsed / REVEAL_DURATION);

        // Cinematic smooth Apple-style exponential ease out (cubic-bezier(0.22, 1, 0.36, 1))
        const easeReveal = 1 - Math.pow(1 - p, 3.2);
        const currentR = easeReveal * maxR;
        setRadius(currentR);

        // Logo dissolves smoothly as the circular portal expands past it
        const logoFade = Math.max(0, 1 - p * 2.2);
        setLogoOpacity(logoFade);
        setLogoScale(1 + 0.14 * easeReveal);

        // Luminous perimeter ring stays vibrant and fades out near viewport boundaries
        const ringFade = p < 0.85 ? Math.min(1, p * 4.5) : Math.max(0, (1 - p) * 6.5);
        setRingOpacity(ringFade);
      }

      if (elapsed < TOTAL_DURATION) {
        reqIdRef.current = requestAnimationFrame(step);
      } else {
        finish();
      }
    };

    reqIdRef.current = requestAnimationFrame(step);

    // Failsafe timer to guarantee complete unmount under any condition
    const safetyTimer = setTimeout(() => {
      finish();
    }, 1800);

    return () => {
      window.removeEventListener('resize', updateDims);
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      clearTimeout(safetyTimer);
    };
  }, [isRendered]);

  if (!isRendered) return null;

  const cx = dimensions.w / 2;
  const cy = dimensions.h / 2;

  // Even-odd compound SVG path: outer full screen rect minus expanding inner circle
  const overlayPath =
    radius <= 0
      ? `M 0 0 L ${dimensions.w} 0 L ${dimensions.w} ${dimensions.h} L 0 ${dimensions.h} Z`
      : `M 0 0 L ${dimensions.w} 0 L ${dimensions.w} ${dimensions.h} L 0 ${dimensions.h} Z M ${cx} ${cy - radius} A ${radius} ${radius} 0 1 0 ${cx} ${cy + radius} A ${radius} ${radius} 0 1 0 ${cx} ${cy - radius} Z`;

  return (
    <div
      data-testid="futureai-cinematic-entrance"
      className="fixed inset-0 z-[9999999] pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        width={dimensions.w}
        height={dimensions.h}
        viewBox={`0 0 ${dimensions.w} ${dimensions.h}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Deep Future IT Industry Purple Branding Gradient */}
          <linearGradient id="futureaiEntranceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2e0854" />
            <stop offset="45%" stopColor="#1a0433" />
            <stop offset="100%" stopColor="#0c0118" />
          </linearGradient>

          {/* Luminous Glow Gradient for Expanding Portal Rim */}
          <radialGradient id="ringGlowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7e22ce" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* The Purple Overlay with expanding circular cutout using hardware-accelerated even-odd fill */}
        <path
          d={overlayPath}
          fill="url(#futureaiEntranceGrad)"
          fillRule="evenodd"
        />

        {/* Luminous Portal Rim (Cinematic Ripple Ring on Expanding Edge) */}
        {radius > 0 && ringOpacity > 0 && (
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="url(#ringGlowGrad)"
            strokeWidth="3.5"
            style={{
              opacity: ringOpacity,
              filter: 'drop-shadow(0 0 12px rgba(192, 132, 252, 0.85))',
            }}
          />
        )}
      </svg>

      {/* Center Logo with Glow & Smooth Scale */}
      {logoOpacity > 0 && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
            transformOrigin: 'center center',
            willChange: 'transform, opacity',
          }}
        >
          {/* Ambient Violet Aurora Glow */}
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-[#8b5cf6]/35 blur-[70px] pointer-events-none -z-10" />

          {/* Official Future IT Industry Logo */}
          <img
            src="/images/brand/future_it_logo_white.png"
            alt="FUTURE IT INDUSTRY"
            className="h-14 sm:h-20 md:h-24 w-auto object-contain drop-shadow-[0_12px_40px_rgba(147,51,234,0.65)]"
          />
        </div>
      )}
    </div>
  );
};

export default FutureCinematicEntrance;
