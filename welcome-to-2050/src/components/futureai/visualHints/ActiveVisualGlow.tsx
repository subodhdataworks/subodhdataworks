import React from 'react';
import { motion } from 'framer-motion';

export interface ActiveVisualGlowProps {
  active?: boolean;
  isResult?: boolean;
  className?: string;
  roundedClassName?: string;
  borderRadius?: number;
  children: React.ReactNode;
  targetId?: string;
}

/**
 * Premium Animated Glowing Border for the Future AI 2050 Python Classroom.
 * 
 * Features:
 * 1. Traveling perimeter beam of cyan-into-purple neon light.
 * 2. Gentle breathing pulse while visual is actively explained.
 * 3. Brief brightness burst flash when a key result/output appears.
 * 4. Zero DOM or text distortion; text remains 100% crisp and readable.
 * 5. Tagged with data-active-glow="primary" for autonomous robot teacher positioning.
 */
export const ActiveVisualGlow: React.FC<ActiveVisualGlowProps> = ({
  active = false,
  isResult = false,
  className = '',
  roundedClassName = 'rounded-2xl',
  borderRadius = 16,
  children,
  targetId,
}) => {
  const gradId = `beam-grad-${targetId || Math.random().toString(36).slice(2, 7)}`;
  const filterId = `beam-blur-${targetId || Math.random().toString(36).slice(2, 7)}`;

  return (
    <div
      data-active-glow={active ? 'primary' : 'none'}
      data-visual-target={targetId}
      className={`relative ${roundedClassName} transition-all duration-300 ${className} ${
        active
          ? isResult
            ? 'ring-2 ring-cyan-400 shadow-[0_0_24px_rgba(6,182,212,0.55),0_0_12px_rgba(168,85,247,0.45)]'
            : 'ring-2 ring-cyan-400/80 shadow-[0_0_16px_rgba(6,182,212,0.38),0_0_8px_rgba(168,85,247,0.28)]'
          : ''
      }`}
    >
      {/* Moving Cyan/Purple Beam Light traveling along perimeter */}
      {active && (
        <div className={`absolute -inset-[2px] pointer-events-none ${roundedClassName} overflow-hidden z-20`}>
          <svg className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f2fe" stopOpacity="1" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#c084fc" stopOpacity="1" />
              </linearGradient>
              <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <motion.rect
              x="2"
              y="2"
              width="calc(100% - 4px)"
              height="calc(100% - 4px)"
              rx={borderRadius}
              ry={borderRadius}
              fill="none"
              stroke={`url(#${gradId})`}
              strokeWidth="2.5"
              strokeDasharray="90 220"
              filter={`url(#${filterId})`}
              animate={{
                strokeDashoffset: [0, -620],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </svg>
        </div>
      )}

      {/* Subtle Breathing Glow Aura */}
      {active && (
        <motion.div
          animate={
            isResult
              ? { opacity: [0.6, 1, 0.6], scale: [0.99, 1.01, 0.99] }
              : { opacity: [0.35, 0.65, 0.35] }
          }
          transition={{
            duration: isResult ? 1.2 : 2.0,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`absolute -inset-1 ${roundedClassName} bg-gradient-to-r from-cyan-400/20 via-sky-400/15 to-purple-500/20 blur-md pointer-events-none -z-10`}
        />
      )}

      {children}
    </div>
  );
};
