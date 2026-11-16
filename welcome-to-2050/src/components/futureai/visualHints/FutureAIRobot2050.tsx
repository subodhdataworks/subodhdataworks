import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRobotLipSync } from './useRobotLipSync';
import {
  calculateAutonomousFlightPose,
  AutonomousFlightPose,
} from './robotMovementPlanner';

export type RobotTargetElement =
  | 'code_editor'
  | 'card_function'
  | 'card_argument'
  | 'card_console_op'
  | 'console_output'
  | 'recap_center'
  | 'card_variable'
  | 'calculation'
  | 'pedestal';

export interface FutureAIRobot2050Props {
  targetElement: RobotTargetElement;
  stageRef?: React.RefObject<HTMLDivElement | null>;
  codeFocus?: string;
  relatedToken?: string;
  editorTokenTarget?: string;
  isSpeaking: boolean;
  isPlaying?: boolean;
  audioElement?: HTMLAudioElement | null;
  speechText?: string;
  prefersReducedMotion?: boolean | null;
  onPedestal?: boolean;
}

export const FutureAIRobot2050: React.FC<FutureAIRobot2050Props> = ({
  targetElement,
  stageRef,
  codeFocus,
  relatedToken,
  isSpeaking,
  isPlaying = true,
  audioElement = null,
  speechText = '',
  prefersReducedMotion = false,
  onPedestal = false,
}) => {
  const [isLg, setIsLg] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return true;
  });

  // Real-Time Speech-Synchronized Lip Sync Engine
  const lipSync = useRobotLipSync({
    audioElement,
    isSpeaking,
    isPlaying,
    speechText,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsLg(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Preload native robot mouth frames for instant zero-flicker switching
  useEffect(() => {
    const frames = [
      '/future_ai_robot_2050.png',
      '/future_ai_robot_2050_open.png',
      '/future_ai_robot_2050_round.png',
      '/future_ai_robot_2050_wide.png',
      '/future_ai_robot_2050_half.png',
    ];
    frames.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Calculate dynamic autonomous flight pose (safe approach, banking angle)
  const pose: AutonomousFlightPose = useMemo(() => {
    if (onPedestal && targetElement === 'pedestal') {
      return {
        x: 0,
        y: 0,
        tilt: 0,
        scale: 1,
        facing: 'right',
        wandAngle: 12,
        contactPoint: null,
      };
    }
    const stageEl = stageRef?.current || null;
    return calculateAutonomousFlightPose(stageEl, targetElement, codeFocus, relatedToken, isLg);
  }, [stageRef, targetElement, codeFocus, relatedToken, isLg, onPedestal]);

  // Dynamic 2-way turning: Robot turns left when facing === 'left', turns right when facing === 'right'
  const isFacingLeft = pose.facing === 'left';

  // Lip-sync: switch robot mouth directly on the robot asset
  // Resting smile is returned when silent, paused, or between syllables
  const isMouthActive = isSpeaking && isPlaying && lipSync.mouthOpenness > 0.15;
  const robotFrameSrc =
    !isMouthActive || lipSync.viseme === 'rest'
      ? '/future_ai_robot_2050.png'
      : lipSync.viseme === 'round'
      ? '/future_ai_robot_2050_round.png'
      : lipSync.viseme === 'wide'
      ? '/future_ai_robot_2050_wide.png'
      : lipSync.viseme === 'half_open'
      ? '/future_ai_robot_2050_half.png'
      : '/future_ai_robot_2050_open.png';

  const isDockedOnPedestal = onPedestal && targetElement === 'pedestal';

  return (
    <motion.div
      data-testid="future-ai-2050-robot"
      data-target-element={targetElement}
      data-speaking={isSpeaking}
      data-viseme={lipSync.viseme}
      data-openness={lipSync.mouthOpenness}
      className={`${isDockedOnPedestal ? 'relative mb-4' : 'absolute'} z-30 pointer-events-none select-none w-24 h-24 sm:w-26 sm:h-26 md:w-28 md:h-28`}
      style={isDockedOnPedestal ? undefined : { left: 0, top: 0 }}
      animate={{
        x: isDockedOnPedestal ? 0 : (prefersReducedMotion ? pose.x : pose.x),
        y: isDockedOnPedestal ? 0 : (prefersReducedMotion ? pose.y : pose.y),
        rotate: prefersReducedMotion ? 0 : pose.tilt,
        scale: pose.scale,
        scaleX: isFacingLeft ? -pose.scale : pose.scale,
      }}
      transition={{
        x: { type: 'spring', stiffness: 140, damping: 20, mass: 0.6 },
        y: { type: 'spring', stiffness: 140, damping: 20, mass: 0.6 },
        scaleX: { duration: 0.35, ease: 'easeInOut' },
        rotate: { duration: 0.35, ease: 'easeOut' },
      }}
    >
      {/* Anti-Gravity Floating Bob Physics - Calm, stable teacher hovering */}
      <motion.div
        animate={
          prefersReducedMotion || !isPlaying
            ? { y: 0 }
            : {
                y: [-2.5, 2.5, -2.5],
                rotate: [-0.6, 0.6, -0.6],
              }
        }
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-full h-full relative"
      >
        {/* ─── REAL REFERENCE 3D FUTURE AI 2050 ROBOT ASSET ─── */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Vocal Glow / Speaking Aura */}
          {isSpeaking && (
            <motion.div
              animate={{
                scale: [0.98, 1.08, 0.98],
                opacity: [0.35, 0.75, 0.35],
              }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-2 rounded-full bg-cyan-400/20 blur-xl pointer-events-none"
            />
          )}

          {/* Native AI Robot 2050 Asset with Direct Visor Mouth Lip-Sync */}
          <img
            key="native-robot-face"
            src={robotFrameSrc}
            alt="Future AI 2050 Robot Tutor"
            className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(2,132,199,0.32)]"
            draggable={false}
          />

          {/* Futuristic Intelligent Coordinate Anchor at Robot Hand (Stick Removed) */}
          <div
            data-testid="magic-wand-tip"
            className="absolute z-40 pointer-events-none"
            style={{
              right: '18%',
              bottom: '26%',
              width: 6,
              height: 6,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
