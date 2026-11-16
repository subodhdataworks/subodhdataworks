import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ContactEnergyPulseProps {
  x: number;
  y: number;
  pulseKey: number;
  wandTipX?: number;
  wandTipY?: number;
}

/**
 * Photonic Contact Energy Pulse & Ripple
 * Emitted at the exact contact point when the robot's magic wand taps a code token,
 * execution card, or console.
 */
export const ContactEnergyPulse: React.FC<ContactEnergyPulseProps> = ({
  x,
  y,
  pulseKey,
  wandTipX,
  wandTipY,
}) => {
  if (x <= 0 && y <= 0) return null;

  const showMicroBeam =
    typeof wandTipX === 'number' &&
    typeof wandTipY === 'number' &&
    Math.hypot(x - wandTipX, y - wandTipY) < 140;

  return (
    <div className="absolute inset-0 pointer-events-none z-25 overflow-visible">
      {/* Short Micro Photonic Beam during tap contact */}
      {showMicroBeam && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          <motion.line
            key={`beam-${pulseKey}`}
            x1={wandTipX}
            y1={wandTipY}
            x2={x}
            y2={y}
            stroke="#00f2fe"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ opacity: 0.9, pathLength: 0 }}
            animate={{ opacity: [0.9, 1, 0], pathLength: [0, 1, 1] }}
            transition={{ duration: 0.38, ease: 'easeOut' }}
            style={{ filter: 'drop-shadow(0 0 6px #00f2fe)' }}
          />
        </svg>
      )}

      {/* Primary Expanding Ripple Ring */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`pulse-outer-${pulseKey}`}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#00f2fe] pointer-events-none"
          style={{
            left: x,
            top: y,
            width: 38,
            height: 38,
            boxShadow: '0 0 16px rgba(0, 242, 254, 0.8), inset 0 0 10px rgba(56, 189, 248, 0.6)',
          }}
          initial={{ scale: 0.2, opacity: 0.95 }}
          animate={{ scale: 2.1, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        />
      </AnimatePresence>

      {/* Secondary Quick Spark Flash */}
      <motion.div
        key={`pulse-core-${pulseKey}`}
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white pointer-events-none"
        style={{
          left: x,
          top: y,
          width: 8,
          height: 8,
          boxShadow: '0 0 12px #00f2fe, 0 0 24px #38bdf8',
        }}
        initial={{ scale: 0.4, opacity: 1 }}
        animate={{ scale: [0.4, 1.4, 0], opacity: [1, 0.8, 0] }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />
    </div>
  );
};
