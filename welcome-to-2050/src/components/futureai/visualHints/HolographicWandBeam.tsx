import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { RobotTargetElement } from './FutureAIRobot2050';

export interface HolographicWandBeamProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  targetElement: RobotTargetElement;
  codeFocus?: 'function' | 'argument' | 'all' | null;
  relatedToken?: string;
  isPlaying?: boolean;
  prefersReducedMotion?: boolean | null;
}

interface BeamCoordinates {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  controlX1: number;
  controlY1: number;
  controlX2: number;
  controlY2: number;
}

/**
 * FUTURE IT INDUSTRY — HOLOGRAPHIC MAGIC TEACHING WAND BEAM
 *
 * Renders a thin, elegant, futuristic energy beam connecting the robot's
 * magic wand tip directly to the currently active teaching target.
 * Dynamically tracks live wand tip screen coordinates on every animation frame.
 * Smoothly glides between targets with zero jumping or disconnection.
 */
export const HolographicWandBeam: React.FC<HolographicWandBeamProps> = ({
  containerRef,
  targetElement,
  codeFocus = null,
  relatedToken = '',
  isPlaying = true,
  prefersReducedMotion = false,
}) => {
  const [coords, setCoords] = useState<BeamCoordinates | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const animFrameRef = useRef<number | null>(null);
  const currentEndRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (targetElement === 'recap_center') {
      setIsVisible(false);
      currentEndRef.current = null;
      return;
    }

    const updateBeamCoordinates = () => {
      const container = containerRef.current;
      if (!container) {
        setIsVisible(false);
        return;
      }

      const containerRect = container.getBoundingClientRect();
      if (containerRect.width === 0 || containerRect.height === 0) {
        setIsVisible(false);
        return;
      }

      const wandTip = container.querySelector('[data-testid="magic-wand-tip"]');
      if (!wandTip) {
        setIsVisible(false);
        return;
      }

      const wandRect = wandTip.getBoundingClientRect();
      // Fail-safe validation: wand tip must be rendered and non-zero
      if (wandRect.width === 0 || wandRect.height === 0) {
        setIsVisible(false);
        return;
      }

      // Determine the exact target element in the DOM matching current speech & concept focus
      let targetEl: Element | null = null;
      if (targetElement === 'code_editor') {
        if (codeFocus === 'function' || relatedToken === 'print') {
          targetEl =
            container.querySelector('[data-testid="editor-token-print"]') ||
            container.querySelector('[data-active-line="true"]') ||
            container.querySelector('#active-code-line') ||
            container.querySelector('[data-testid="concept-token-newline"]') ||
            container.querySelector('[data-testid="editor-token-arg"]') ||
            container.querySelector('[data-testid="python-code-editor"]');
        } else {
          targetEl =
            container.querySelector('[data-active-line="true"]') ||
            container.querySelector('#active-code-line') ||
            container.querySelector('[data-testid="concept-token-newline"]') ||
            container.querySelector('[data-testid="editor-token-arg"]') ||
            container.querySelector('[data-testid="editor-token-print"]') ||
            container.querySelector('[data-testid="python-code-editor"] .border-cyan-400') ||
            container.querySelector('[data-testid="python-code-editor"]');
        }
      } else if (targetElement === 'card_function') {
        targetEl = container.querySelector('[data-testid="flow-card-function"]');
      } else if (targetElement === 'card_argument') {
        targetEl = container.querySelector('[data-testid="flow-card-argument"]');
      } else if (targetElement === 'card_console_op') {
        targetEl = container.querySelector('[data-testid="flow-card-console-op"]');
      } else if (targetElement === 'console_output') {
        targetEl = container.querySelector('[data-testid="console-output-screen"]');
      }

      if (!targetEl) {
        setIsVisible(false);
        return;
      }

      const targetRect = targetEl.getBoundingClientRect();
      if (targetRect.width === 0 || targetRect.height === 0) {
        setIsVisible(false);
        return;
      }

      // Live wand tip center in container coordinates
      const startX = wandRect.left + wandRect.width * 0.5 - containerRect.left;
      const startY = wandRect.top + wandRect.height * 0.5 - containerRect.top;

      // Calculate anchor point on target element closest and most natural to the wand
      let rawEndX = targetRect.left + targetRect.width * 0.5 - containerRect.left;
      let rawEndY = targetRect.top + targetRect.height * 0.5 - containerRect.top;

      if (targetElement === 'code_editor') {
        // Connect to the right edge of the code snippet
        rawEndX = targetRect.right - containerRect.left - 6;
        rawEndY = targetRect.top + targetRect.height * 0.5 - containerRect.top;
      } else if (
        targetElement === 'card_function' ||
        targetElement === 'card_argument' ||
        targetElement === 'card_console_op'
      ) {
        // Connect to the bottom center of the execution card
        rawEndX = targetRect.left + targetRect.width * 0.5 - containerRect.left;
        rawEndY = targetRect.bottom - containerRect.top - 6;
      } else if (targetElement === 'console_output') {
        // Connect to the left entry of the console terminal
        rawEndX = targetRect.left - containerRect.left + 16;
        rawEndY = targetRect.top + targetRect.height * 0.5 - containerRect.top;
      }

      // Smooth endpoint gliding (LERP) between target changes
      if (!currentEndRef.current) {
        currentEndRef.current = { x: rawEndX, y: rawEndY };
      } else {
        const factor = prefersReducedMotion ? 1.0 : 0.22;
        currentEndRef.current.x += (rawEndX - currentEndRef.current.x) * factor;
        currentEndRef.current.y += (rawEndY - currentEndRef.current.y) * factor;
        if (
          Math.abs(currentEndRef.current.x - rawEndX) < 0.4 &&
          Math.abs(currentEndRef.current.y - rawEndY) < 0.4
        ) {
          currentEndRef.current.x = rawEndX;
          currentEndRef.current.y = rawEndY;
        }
      }

      const endX = currentEndRef.current.x;
      const endY = currentEndRef.current.y;

      // Compute smooth natural curved control points
      const dx = endX - startX;
      const dy = endY - startY;

      // Organic upward arch for futuristic holographic pointer feel
      const controlX1 = startX + dx * 0.28;
      const controlY1 = Math.min(startY, endY) - 16 - Math.abs(dx) * 0.08;
      const controlX2 = startX + dx * 0.72;
      const controlY2 = endY - 8;

      setCoords({
        startX,
        startY,
        endX,
        endY,
        controlX1,
        controlY1,
        controlX2,
        controlY2,
      });
      setIsVisible(true);
    };

    // Continuous render loop guarantees origin and endpoint always match live DOM frames
    const loop = () => {
      updateBeamCoordinates();
      animFrameRef.current = requestAnimationFrame(loop);
    };

    loop();

    window.addEventListener('resize', updateBeamCoordinates);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      window.removeEventListener('resize', updateBeamCoordinates);
    };
  }, [containerRef, targetElement, prefersReducedMotion]);

  if (!isVisible || !coords) return null;

  const pathD = `M ${coords.startX} ${coords.startY} C ${coords.controlX1} ${coords.controlY1}, ${coords.controlX2} ${coords.controlY2}, ${coords.endX} ${coords.endY}`;

  return (
    <div
      data-testid="holographic-wand-beam-container"
      className="absolute inset-0 pointer-events-none z-25 overflow-visible"
    >
      <svg className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Futuristic Cyan Energy Gradient */}
          <linearGradient id="wandEnergyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity={0.95} />
            <stop offset="25%" stopColor="#00f2fe" stopOpacity={0.85} />
            <stop offset="75%" stopColor="#38bdf8" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#a855f7" stopOpacity={0.7} />
          </linearGradient>

          {/* Glow filter for soft photonic aura */}
          <filter id="wandBeamGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Wand Tip Photonic Emitter Glow (Seamless physical origin connection) */}
        <circle
          cx={coords.startX}
          cy={coords.startY}
          r={7}
          fill="none"
          stroke="#00f2fe"
          strokeWidth={1.2}
          opacity={0.65}
        />
        <circle
          cx={coords.startX}
          cy={coords.startY}
          r={4}
          fill="#00f2fe"
          opacity={0.8}
        />
        <circle
          cx={coords.startX}
          cy={coords.startY}
          r={2}
          fill="#ffffff"
        />

        {/* 2. Outer Ethereal Soft Glow Aura */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="#00f2fe"
          strokeWidth={prefersReducedMotion ? 3.5 : 4.5}
          strokeOpacity={0.25}
          strokeLinecap="round"
          filter="url(#wandBeamGlow)"
        />

        {/* 3. Core Holographic Energy Line */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="url(#wandEnergyGradient)"
          strokeWidth={1.8}
          strokeLinecap="round"
          filter="drop-shadow(0 0 5px rgba(0, 242, 254, 0.75))"
        />

        {/* 4. Flowing Photonic Particles along Beam */}
        {!prefersReducedMotion && (
          <motion.path
            d={pathD}
            fill="none"
            stroke="#ffffff"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeDasharray="4 16"
            animate={{ strokeDashoffset: [-40, 0] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
            opacity={0.85}
          />
        )}

        {/* 5. Target Impact Energy Ring & Core Halo */}
        <g transform={`translate(${coords.endX}, ${coords.endY})`}>
          {/* Subtle Expanding Target Ripple */}
          {!prefersReducedMotion && (
            <motion.circle
              r={11}
              fill="none"
              stroke="#00f2fe"
              strokeWidth={1.4}
              animate={{ scale: [0.85, 1.4, 0.85], opacity: [0.6, 0.15, 0.6] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}

          {/* Fixed Inner Focus Point */}
          <circle
            r={4}
            fill="#00f2fe"
            stroke="#ffffff"
            strokeWidth={1.2}
            className="filter drop-shadow-[0_0_8px_#00f2fe]"
          />
        </g>
      </svg>
    </div>
  );
};
