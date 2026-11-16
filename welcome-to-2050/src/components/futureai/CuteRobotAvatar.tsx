import React from 'react';
import { motion } from 'framer-motion';

export interface CuteRobotAvatarProps {
  isSpeaking?: boolean;
  isThinking?: boolean;
  isCelebrating?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  showBadge?: boolean;
}

export const CuteRobotAvatar: React.FC<CuteRobotAvatarProps> = ({
  isSpeaking = false,
  isThinking = false,
  isCelebrating = false,
  size = 'md',
  onClick,
  showBadge = true,
}) => {
  const dimensions =
    size === 'sm'
      ? { w: 42, h: 42, svgW: 36, svgH: 36 }
      : size === 'lg'
      ? { w: 68, h: 68, svgW: 60, svgH: 60 }
      : { w: 52, h: 52, svgW: 46, svgH: 46 };

  return (
    <div
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center select-none ${
        onClick ? 'cursor-pointer group' : ''
      }`}
      title={isSpeaking ? 'Robo is Speaking... Click to pause' : 'Chota Robot: Click karke line samjho!'}
    >
      {/* Floating Robot Body */}
      <motion.div
        animate={
          isCelebrating
            ? { y: [0, -8, 0, -6, 0], rotate: [0, -6, 6, -3, 0] }
            : isSpeaking
            ? { y: [0, -3, 0, -2, 0], scale: [1, 1.04, 1] }
            : { y: [0, -4, 0] }
        }
        transition={{
          repeat: Infinity,
          duration: isCelebrating ? 0.8 : isSpeaking ? 1.2 : 2.4,
          ease: 'easeInOut',
        }}
        className="relative flex items-center justify-center"
        style={{ width: dimensions.w, height: dimensions.h }}
      >
        {/* Glowing Aura when speaking */}
        {isSpeaking && (
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/30 to-indigo-500/30 blur-md pointer-events-none"
          />
        )}

        {/* SVG Cute Robot */}
        <svg
          width={dimensions.svgW}
          height={dimensions.svgH}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-md transition-transform duration-300 group-hover:scale-105"
        >
          {/* Antenna stem */}
          <line x1="32" y1="14" x2="32" y2="6" stroke="#9333ea" strokeWidth="3" strokeLinecap="round" />
          
          {/* Antenna Ball (Glowing Bulb) */}
          <motion.circle
            cx="32"
            cy="5"
            r="4"
            fill={isSpeaking ? '#10b981' : '#a855f7'}
            animate={
              isSpeaking
                ? { scale: [1, 1.4, 1], fill: ['#10b981', '#34d399', '#10b981'] }
                : { scale: [1, 1.1, 1] }
            }
            transition={{ repeat: Infinity, duration: isSpeaking ? 0.6 : 2 }}
          />

          {/* Robot Ears (Cyan/Purple screws) */}
          <rect x="6" y="24" width="4" height="12" rx="2" fill="#7c3aed" />
          <rect x="54" y="24" width="4" height="12" rx="2" fill="#7c3aed" />

          {/* Robot Head Outer (Soft modern rounded box) */}
          <rect
            x="10"
            y="14"
            width="44"
            height="36"
            rx="12"
            fill="url(#headGradient)"
            stroke="#c084fc"
            strokeWidth="2"
          />

          {/* Visor Screen (Dark neon faceplate) */}
          <rect
            x="15"
            y="20"
            width="34"
            height="22"
            rx="8"
            fill="#090d16"
            stroke="#38bdf8"
            strokeWidth="1.2"
          />

          {/* Eyes State */}
          {isCelebrating ? (
            // Star Eyes for celebration
            <g fill="#facc15">
              <path d="M24 28l1 2 2.5 0.5-2 1.8 0.6 2.5-2.1-1.3-2.1 1.3 0.6-2.5-2-1.8 2.5-0.5z" />
              <path d="M40 28l1 2 2.5 0.5-2 1.8 0.6 2.5-2.1-1.3-2.1 1.3 0.6-2.5-2-1.8 2.5-0.5z" />
            </g>
          ) : isSpeaking ? (
            // Happy Curved Eyes when speaking: ^ ^
            <g stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round">
              <path d="M21 31c1.5-3 4.5-3 6 0" />
              <path d="M37 31c1.5-3 4.5-3 6 0" />
            </g>
          ) : isThinking ? (
            // Thinking scanning eyes
            <motion.g
              animate={{ x: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              fill="#38bdf8"
            >
              <ellipse cx="24" cy="30" rx="3.5" ry="3.5" />
              <ellipse cx="40" cy="30" rx="3.5" ry="3.5" />
            </motion.g>
          ) : (
            // Friendly default round glowing eyes
            <g fill="#38bdf8">
              <circle cx="24" cy="30" r="3.5" />
              <circle cx="25.5" cy="28.5" r="1.2" fill="#ffffff" />
              <circle cx="40" cy="30" r="3.5" />
              <circle cx="41.5" cy="28.5" r="1.2" fill="#ffffff" />
            </g>
          )}

          {/* Mouth State */}
          {isSpeaking ? (
            // Moving talking soundwave mouth
            <motion.path
              d="M26 37q3 3 6 0t6 0"
              stroke="#10b981"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              animate={{ d: ['M26 37q3 3 6 0t6 0', 'M26 37q3 -3 6 0t6 0', 'M26 37q3 3 6 0t6 0'] }}
              transition={{ repeat: Infinity, duration: 0.4 }}
            />
          ) : (
            // Cute small smile
            <path
              d="M27 36.5c2 2 8 2 10 0"
              stroke="#38bdf8"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          )}

          {/* Gradients */}
          <defs>
            <linearGradient id="headGradient" x1="10" y1="14" x2="54" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f5f3ff" />
              <stop offset="0.6" stopColor="#ede9fe" />
              <stop offset="1" stopColor="#ddd6fe" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Tiny Badge */}
      {showBadge && (
        <span className="text-[9px] font-black uppercase tracking-wider bg-purple-700 text-white px-1.5 py-0.2 rounded-full mt-0.5 shadow-2xs font-mono">
          Robo
        </span>
      )}
    </div>
  );
};
