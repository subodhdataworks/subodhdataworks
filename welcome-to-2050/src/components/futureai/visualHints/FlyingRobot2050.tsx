import React from 'react';
import { motion } from 'framer-motion';

export type RobotTargetElement =
  | 'code_editor'
  | 'card_function'
  | 'card_argument'
  | 'card_console_op'
  | 'console_output'
  | 'recap_center';

export interface FlyingRobot2050Props {
  targetElement: RobotTargetElement;
  isSpeaking: boolean;
  prefersReducedMotion?: boolean | null;
}

interface RobotFlightConfig {
  x: number; // horizontal translation in pixels
  y: number; // vertical translation in pixels
  tilt: number; // flight bank angle in degrees
  scale: number;
  facing: 'left' | 'center' | 'right';
  armGesture: 'point_left' | 'point_up_left' | 'point_up' | 'point_right' | 'present_both';
}

const FLIGHT_TARGETS: Record<RobotTargetElement, RobotFlightConfig> = {
  code_editor: {
    x: -12,
    y: 2,
    tilt: -4,
    scale: 1,
    facing: 'left',
    armGesture: 'point_left',
  },
  card_function: {
    x: 48,
    y: -6,
    tilt: -2,
    scale: 1.02,
    facing: 'center',
    armGesture: 'point_up_left',
  },
  card_argument: {
    x: 120,
    y: -4,
    tilt: 1,
    scale: 1.02,
    facing: 'center',
    armGesture: 'point_up',
  },
  card_console_op: {
    x: 180,
    y: 0,
    tilt: 3,
    scale: 1,
    facing: 'right',
    armGesture: 'point_right',
  },
  console_output: {
    x: 236,
    y: 6,
    tilt: 4,
    scale: 1.03,
    facing: 'right',
    armGesture: 'point_right',
  },
  recap_center: {
    x: 95,
    y: 4,
    tilt: 0,
    scale: 1.05,
    facing: 'center',
    armGesture: 'present_both',
  },
};

export const FlyingRobot2050: React.FC<FlyingRobot2050Props> = ({
  targetElement,
  isSpeaking,
  prefersReducedMotion = false,
}) => {
  const flight = FLIGHT_TARGETS[targetElement] || FLIGHT_TARGETS.card_function;

  return (
    <motion.div
      data-testid="flying-robot-2050"
      className="relative z-20 w-28 h-28 pointer-events-none select-none"
      initial={{ x: 0, y: 0, scale: 1 }}
      animate={{
        x: prefersReducedMotion ? 0 : flight.x,
        y: prefersReducedMotion ? 0 : flight.y,
        rotate: prefersReducedMotion ? 0 : flight.tilt,
        scale: flight.scale,
      }}
      transition={{
        type: 'spring',
        stiffness: 70,
        damping: 18,
        mass: 0.9,
      }}
    >
      {/* Anti-Gravity Hovering Float Physics Wrapper */}
      <motion.div
        animate={
          prefersReducedMotion
            ? { y: 0 }
            : {
                y: [-3.5, 3.5, -3.5],
                rotate: [-0.8, 0.8, -0.8],
              }
        }
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-full h-full relative"
      >
        {/* Anti-Gravity Levitation Energy Ring under base (No flames, pure quantum levitation) */}
        <motion.div
          animate={
            prefersReducedMotion
              ? { opacity: 0.6 }
              : {
                  scale: [0.92, 1.08, 0.92],
                  opacity: [0.45, 0.75, 0.45],
                }
          }
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-3.5 rounded-full bg-gradient-to-r from-transparent via-[#00f2fe]/40 to-transparent blur-[3px]"
        />

        {/* 2050 Advanced Humanoid Robot Body SVG */}
        <svg
          viewBox="0 0 140 140"
          className="w-full h-full overflow-visible drop-shadow-[0_8px_20px_rgba(14,165,233,0.28)]"
        >
          <defs>
            {/* Ceramic White Armor Gradient */}
            <linearGradient id="armorWhite" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>

            {/* Brushed Chrome / Metallic Silver Gradient */}
            <linearGradient id="metalSilver" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="45%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>

            {/* Cyan Energy Arc Gradient */}
            <linearGradient id="cyanArc" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="50%" stopColor="#00f2fe" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            {/* Holographic Obsidian Glass Visor Gradient */}
            <linearGradient id="obsidianGlass" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="70%" stopColor="#090d16" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            {/* Glow Filter */}
            <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ─── 1. FLOATING NEURAL HALO / SENSOR CROWN ─── */}
          <motion.ellipse
            cx="70"
            cy="18"
            rx="24"
            ry="4.5"
            fill="none"
            stroke="url(#cyanArc)"
            strokeWidth="2.2"
            filter="url(#cyanGlow)"
            animate={{
              opacity: isSpeaking ? [0.6, 1, 0.6] : [0.4, 0.8, 0.4],
              scale: isSpeaking ? [0.98, 1.04, 0.98] : 1,
            }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* ─── 2. AERODYNAMIC CERAMIC CRANIUM (HEAD) ─── */}
          <g transform="translate(0, 0)">
            {/* Outer Head Shell */}
            <path
              d="M 44 42 C 44 26, 96 26, 96 42 C 96 55, 88 64, 70 64 C 52 64, 44 55, 44 42 Z"
              fill="url(#armorWhite)"
              stroke="#94a3b8"
              strokeWidth="1.5"
            />

            {/* Chrome Ear Discs with Audio-Reactive Cyan Light Rings */}
            <circle cx="43" cy="42" r="5" fill="url(#metalSilver)" stroke="#cbd5e1" strokeWidth="1" />
            <circle
              cx="43"
              cy="42"
              r="2.5"
              fill="#00f2fe"
              opacity={isSpeaking ? 0.95 : 0.6}
              filter="url(#cyanGlow)"
            />

            <circle cx="97" cy="42" r="5" fill="url(#metalSilver)" stroke="#cbd5e1" strokeWidth="1" />
            <circle
              cx="97"
              cy="42"
              r="2.5"
              fill="#00f2fe"
              opacity={isSpeaking ? 0.95 : 0.6}
              filter="url(#cyanGlow)"
            />

            {/* Obsidian Glass Visor Screen */}
            <rect
              x="50"
              y="33"
              width="40"
              height="22"
              rx="9"
              fill="url(#obsidianGlass)"
              stroke="#0284c7"
              strokeWidth="1.2"
            />

            {/* Visor Glare Accent */}
            <path
              d="M 53 36 Q 66 33 80 34"
              stroke="#ffffff"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.35"
              fill="none"
            />

            {/* Expressive Holographic Cyan Digital Eyes */}
            <g filter="url(#cyanGlow)">
              {flight.facing === 'left' ? (
                <>
                  {/* Eyes glancing left toward Code Editor */}
                  <motion.path
                    d="M 56 42 Q 60 37 64 42"
                    stroke="#00f2fe"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    fill="none"
                    animate={{ scaleY: [1, 0.1, 1] }}
                    transition={{ duration: 3.4, repeat: Infinity, times: [0, 0.05, 1] }}
                  />
                  <motion.path
                    d="M 68 42 Q 72 37 76 42"
                    stroke="#00f2fe"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    fill="none"
                    animate={{ scaleY: [1, 0.1, 1] }}
                    transition={{ duration: 3.4, repeat: Infinity, times: [0, 0.05, 1] }}
                  />
                </>
              ) : flight.facing === 'right' ? (
                <>
                  {/* Eyes glancing right toward Output Console */}
                  <motion.path
                    d="M 64 42 Q 68 37 72 42"
                    stroke="#00f2fe"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    fill="none"
                    animate={{ scaleY: [1, 0.1, 1] }}
                    transition={{ duration: 3.4, repeat: Infinity, times: [0, 0.05, 1] }}
                  />
                  <motion.path
                    d="M 76 42 Q 80 37 84 42"
                    stroke="#00f2fe"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    fill="none"
                    animate={{ scaleY: [1, 0.1, 1] }}
                    transition={{ duration: 3.4, repeat: Infinity, times: [0, 0.05, 1] }}
                  />
                </>
              ) : (
                <>
                  {/* Friendly Centered Tutor Eyes */}
                  <motion.path
                    d="M 58 42 Q 63 36 67 42"
                    stroke="#00f2fe"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    fill="none"
                    animate={{ scaleY: [1, 0.1, 1] }}
                    transition={{ duration: 3.4, repeat: Infinity, times: [0, 0.05, 1] }}
                  />
                  <motion.path
                    d="M 73 42 Q 77 36 82 42"
                    stroke="#00f2fe"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    fill="none"
                    animate={{ scaleY: [1, 0.1, 1] }}
                    transition={{ duration: 3.4, repeat: Infinity, times: [0, 0.05, 1] }}
                  />
                </>
              )}

              {/* Expressive Friendly Digital Smile / Voice Wave */}
              {isSpeaking ? (
                <motion.path
                  d="M 64 49 Q 70 52 76 49"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  animate={{
                    d: [
                      'M 64 49 Q 70 52 76 49',
                      'M 63 50 Q 70 47 77 50',
                      'M 64 49 Q 70 52 76 49',
                    ],
                  }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
              ) : (
                <path
                  d="M 65 49 Q 70 53 75 49"
                  stroke="#38bdf8"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  fill="none"
                />
              )}
            </g>
          </g>

          {/* ─── 3. ARTICULATED CYBERNETIC CHASSIS (TORSO) ─── */}
          <g>
            {/* Neck Ball Joint */}
            <path d="M 64 63 L 76 63 L 74 68 L 66 68 Z" fill="url(#metalSilver)" />

            {/* Chest Armor Plate */}
            <path
              d="M 52 68 L 88 68 C 88 68, 93 84, 86 96 C 80 102, 60 102, 54 96 C 47 84, 52 68, 52 68 Z"
              fill="url(#armorWhite)"
              stroke="#94a3b8"
              strokeWidth="1.5"
            />

            {/* Precision Inset Seam Lines */}
            <path
              d="M 58 74 L 82 74 M 62 80 L 78 80"
              stroke="#cbd5e1"
              strokeWidth="1"
              strokeLinecap="round"
            />

            {/* Crystalline Arc Core Reactor (Glowing Cyan Emblem) */}
            <circle
              cx="70"
              cy="84"
              r="7"
              fill="#091428"
              stroke="url(#cyanArc)"
              strokeWidth="1.6"
            />
            <motion.polygon
              points="70,79 75,87 65,87"
              fill="#00f2fe"
              filter="url(#cyanGlow)"
              animate={{
                opacity: isSpeaking ? [0.75, 1, 0.75] : [0.55, 0.85, 0.55],
                scale: isSpeaking ? [0.95, 1.08, 0.95] : 1,
              }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Waist / Anti-Gravity Emitter Rings (Sleek levitation disc) */}
            <ellipse cx="70" cy="101" rx="14" ry="4" fill="url(#metalSilver)" />
            <ellipse
              cx="70"
              cy="104"
              rx="18"
              ry="4"
              fill="none"
              stroke="url(#cyanArc)"
              strokeWidth="1.8"
              filter="url(#cyanGlow)"
            />
            <ellipse
              cx="70"
              cy="106"
              rx="11"
              ry="2.5"
              fill="#00f2fe"
              opacity="0.75"
              filter="url(#cyanGlow)"
            />
          </g>

          {/* ─── 4. ARTICULATED CYBER-ARMS & NATURAL TEACHING HAND GESTURES ─── */}
          {/* Left Arm & Hand */}
          {flight.armGesture === 'point_left' ? (
            /* Extended Pointing Arm toward Left Code Editor */
            <g filter="url(#cyanGlow)">
              {/* Shoulder Socket */}
              <circle cx="50" cy="74" r="5" fill="url(#metalSilver)" />
              {/* Segmented Arm pointing left */}
              <path
                d="M 50 74 Q 30 70 16 64"
                stroke="url(#armorWhite)"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 50 74 Q 30 70 16 64"
                stroke="url(#cyanArc)"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Articulated Hand & Extended Index Finger */}
              <circle cx="16" cy="64" r="3" fill="url(#metalSilver)" />
              <path
                d="M 16 64 L 6 62"
                stroke="#00f2fe"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Futuristic Pointer Energy Dot */}
              <circle cx="5" cy="61.5" r="2.2" fill="#ffffff" filter="url(#cyanGlow)" />
            </g>
          ) : (
            /* Rest / Stabilizing Left Arm */
            <g>
              <circle cx="50" cy="74" r="4.5" fill="url(#metalSilver)" />
              <path
                d="M 50 74 Q 40 85 42 96"
                stroke="url(#armorWhite)"
                strokeWidth="4.5"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="42" cy="96" r="3" fill="url(#metalSilver)" />
            </g>
          )}

          {/* Right Arm & Hand */}
          {flight.armGesture === 'point_right' ? (
            /* Extended Right Arm Pointing Toward Live Console */
            <g filter="url(#cyanGlow)">
              <circle cx="90" cy="74" r="5" fill="url(#metalSilver)" />
              <path
                d="M 90 74 Q 108 70 124 64"
                stroke="url(#armorWhite)"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 90 74 Q 108 70 124 64"
                stroke="url(#cyanArc)"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="124" cy="64" r="3" fill="url(#metalSilver)" />
              <path
                d="M 124 64 L 134 62"
                stroke="#00f2fe"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="135" cy="61.5" r="2.2" fill="#ffffff" filter="url(#cyanGlow)" />
            </g>
          ) : flight.armGesture === 'point_up' || flight.armGesture === 'point_up_left' ? (
            /* Extended Right Arm Pointing Up Toward Flow Card */
            <g filter="url(#cyanGlow)">
              <circle cx="90" cy="74" r="5" fill="url(#metalSilver)" />
              <path
                d={
                  flight.armGesture === 'point_up_left'
                    ? 'M 90 74 Q 85 58 78 44'
                    : 'M 90 74 Q 102 56 112 40'
                }
                stroke="url(#armorWhite)"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d={
                  flight.armGesture === 'point_up_left'
                    ? 'M 90 74 Q 85 58 78 44'
                    : 'M 90 74 Q 102 56 112 40'
                }
                stroke="url(#cyanArc)"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
              <circle
                cx={flight.armGesture === 'point_up_left' ? 78 : 112}
                cy={flight.armGesture === 'point_up_left' ? 44 : 40}
                r="3"
                fill="url(#metalSilver)"
              />
              <path
                d={
                  flight.armGesture === 'point_up_left'
                    ? 'M 78 44 L 74 32'
                    : 'M 112 40 L 118 28'
                }
                stroke="#00f2fe"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle
                cx={flight.armGesture === 'point_up_left' ? 73.5 : 119}
                cy={flight.armGesture === 'point_up_left' ? 31 : 27}
                r="2.2"
                fill="#ffffff"
                filter="url(#cyanGlow)"
              />
            </g>
          ) : flight.armGesture === 'present_both' ? (
            /* Welcoming Open Presentation Arms (Step F / Completion) */
            <g>
              {/* Left welcoming arm */}
              <circle cx="50" cy="74" r="4.5" fill="url(#metalSilver)" />
              <path
                d="M 50 74 Q 32 80 26 72"
                stroke="url(#armorWhite)"
                strokeWidth="4.5"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="26" cy="72" r="2.8" fill="url(#metalSilver)" />

              {/* Right welcoming arm */}
              <circle cx="90" cy="74" r="4.5" fill="url(#metalSilver)" />
              <path
                d="M 90 74 Q 108 80 114 72"
                stroke="url(#armorWhite)"
                strokeWidth="4.5"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="114" cy="72" r="2.8" fill="url(#metalSilver)" />
            </g>
          ) : (
            /* Gentle Hover Pose */
            <g>
              <circle cx="90" cy="74" r="4.5" fill="url(#metalSilver)" />
              <path
                d="M 90 74 Q 100 85 98 96"
                stroke="url(#armorWhite)"
                strokeWidth="4.5"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="98" cy="96" r="3" fill="url(#metalSilver)" />
            </g>
          )}
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default FlyingRobot2050;
