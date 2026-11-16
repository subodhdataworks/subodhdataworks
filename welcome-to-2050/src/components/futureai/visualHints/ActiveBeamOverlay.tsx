import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ActiveBeamOverlayProps {
  stageRef: React.RefObject<HTMLDivElement | null>;
  activeTarget: string;
  sceneIdx: number;
}

interface TargetBox {
  x: number;
  y: number;
  width: number;
  height: number;
  rx: number;
  isResult: boolean;
}

/**
 * ActiveBeamOverlay
 * 
 * Draws a moving cyan-into-purple laser light traveling around the perimeter of
 * the currently active visual element in the Python classroom.
 * Automatically tracks DOM element position, smoothly transitions between targets,
 * and flashes when output/results appear.
 */
export const ActiveBeamOverlay: React.FC<ActiveBeamOverlayProps> = ({
  stageRef,
  activeTarget,
  sceneIdx,
}) => {
  const [box, setBox] = useState<TargetBox | null>(null);

  useEffect(() => {
    let animFrameId: number;

    const updateBox = () => {
      if (!stageRef.current) {
        setBox(null);
        return;
      }

      const stageEl = stageRef.current;
      const stageRect = stageEl.getBoundingClientRect();
      if (stageRect.width <= 0 || stageRect.height <= 0) {
        setBox(null);
        return;
      }

      // Query active visual element on the visual stage: prioritize element tagged with data-active-glow="primary"
      let activeEl = stageEl.querySelector<HTMLElement>('[data-active-glow="primary"]');

      // EXCLUSION: Never glow the black code editor or pedestal in the left column
      if (
        activeEl &&
        (activeEl.getAttribute('data-testid') === 'robot-pedestal-base' ||
         activeEl.getAttribute('data-testid') === 'code-editor-block' ||
         activeEl.closest('[data-testid="robot-pedestal-base"]') ||
         activeEl.closest('[data-testid="code-editor-block"]'))
      ) {
        activeEl = null;
      }

      const rightStage = (stageEl.children[1] || stageEl) as HTMLElement;

      if (!activeEl && rightStage) {
        // Fallbacks based strictly on right-stage visual cards
        if (activeTarget === 'console_output') {
          activeEl = rightStage.querySelector<HTMLElement>('[data-testid="console-output-screen"]') ||
                     rightStage.querySelector<HTMLElement>('[data-visual-target="console"]') ||
                     rightStage.querySelector<HTMLElement>('[data-testid="console-output-box"]');
        } else if (activeTarget === 'card_function') {
          activeEl = rightStage.querySelector<HTMLElement>('[data-testid="flow-card-function"]');
        } else if (activeTarget === 'card_argument') {
          activeEl = rightStage.querySelector<HTMLElement>('[data-testid="flow-card-argument"]');
        } else if (activeTarget === 'card_console_op') {
          activeEl = rightStage.querySelector<HTMLElement>('[data-testid="flow-card-console-op"]');
        } else {
          // Central dynamic visual cards in the stage
          activeEl = rightStage.querySelector<HTMLElement>('[data-active-card="true"]') ||
                     rightStage.querySelector<HTMLElement>('.min-h-\\[220px\\] > div > div') ||
                     rightStage.querySelector<HTMLElement>('.min-h-\\[220px\\]');
        }
      }

      if (!activeEl) {
        setBox(null);
        return;
      }

      const elRect = activeEl.getBoundingClientRect();
      if (elRect.width <= 0 || elRect.height <= 0) {
        setBox(null);
        return;
      }

      const isResult = activeEl.getAttribute('data-glow-result') === 'true' ||
                       activeTarget === 'console_output' ||
                       activeEl.getAttribute('data-testid')?.includes('console') === true;

      // Extract border radius from computed style
      const computed = window.getComputedStyle(activeEl);
      const parsedRx = parseFloat(computed.borderRadius) || 16;
      const rx = Math.min(24, Math.max(8, parsedRx));

      setBox({
        x: Math.round(elRect.left - stageRect.left - 2),
        y: Math.round(elRect.top - stageRect.top - 2),
        width: Math.round(elRect.width + 4),
        height: Math.round(elRect.height + 4),
        rx,
        isResult,
      });
    };

    updateBox();
    // Re-check after 150ms to allow layout/DOM renders to settle
    const timer = setTimeout(updateBox, 150);

    const handleResize = () => {
      animFrameId = requestAnimationFrame(updateBox);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [stageRef, activeTarget, sceneIdx]);

  if (!box || box.width <= 0 || box.height <= 0) {
    return null;
  }

  const perimeter = 2 * (box.width + box.height);
  const dashLength = Math.max(70, Math.round(perimeter * 0.22));
  const dashGap = Math.max(140, Math.round(perimeter * 0.78));

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-visible">
      <svg className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Cyber Neon Beam Gradient: Cyan -> Sky Blue -> Electric Purple */}
          <linearGradient id="active-beam-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f2fe" stopOpacity="1" />
            <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="1" />
          </linearGradient>

          {/* Soft Glow Filter */}
          <filter id="active-beam-glow-filter" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation={box.isResult ? 4.5 : 3} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Radiant Glow Halo */}
        <motion.rect
          initial={false}
          animate={{
            x: box.x,
            y: box.y,
            width: box.width,
            height: box.height,
            rx: box.rx,
            ry: box.rx,
            opacity: box.isResult ? [0.65, 0.95, 0.65] : [0.35, 0.65, 0.35],
          }}
          transition={{
            x: { type: 'spring', stiffness: 140, damping: 22, mass: 0.6 },
            y: { type: 'spring', stiffness: 140, damping: 22, mass: 0.6 },
            width: { type: 'spring', stiffness: 140, damping: 22, mass: 0.6 },
            height: { type: 'spring', stiffness: 140, damping: 22, mass: 0.6 },
            opacity: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
          }}
          fill="none"
          stroke="url(#active-beam-grad)"
          strokeWidth={box.isResult ? 5 : 3.5}
          strokeOpacity={0.4}
          filter="url(#active-beam-glow-filter)"
        />

        {/* Traveling Perimeter Laser Beam */}
        <motion.rect
          initial={false}
          animate={{
            x: box.x,
            y: box.y,
            width: box.width,
            height: box.height,
            rx: box.rx,
            ry: box.rx,
            strokeDashoffset: [0, -perimeter],
          }}
          transition={{
            x: { type: 'spring', stiffness: 140, damping: 22, mass: 0.6 },
            y: { type: 'spring', stiffness: 140, damping: 22, mass: 0.6 },
            width: { type: 'spring', stiffness: 140, damping: 22, mass: 0.6 },
            height: { type: 'spring', stiffness: 140, damping: 22, mass: 0.6 },
            strokeDashoffset: {
              duration: 2.2,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          fill="none"
          stroke="url(#active-beam-grad)"
          strokeWidth={box.isResult ? 3.5 : 2.5}
          strokeDasharray={`${dashLength} ${dashGap}`}
          strokeLinecap="round"
          filter="url(#active-beam-glow-filter)"
        />
      </svg>
    </div>
  );
};
