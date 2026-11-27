import React from 'react';

export type CharacterAnimationState = 'idle' | 'walking' | 'arrival' | 'celebrate';

export interface StudentCharacterProps {
  state?: CharacterAnimationState;
  direction?: 1 | -1; // 1 = facing right (forward), -1 = facing left (backward)
  className?: string;
  isJobCelebration?: boolean;
  width?: number;
  height?: number;
}

export const StudentCharacter: React.FC<StudentCharacterProps> = ({
  state = 'idle',
  direction = 1,
  className = '',
  isJobCelebration = false,
  width = 24,
  height = 34,
}) => {
  const isWalking = state === 'walking';
  const isCelebrating = state === 'celebrate' || isJobCelebration;
  const isArrival = state === 'arrival';

  return (
    <div
      className={`student-character-wrapper select-none pointer-events-none ${className}`}
      style={{
        transform: `scaleX(${direction})`,
        transformOrigin: '50% 90%',
        transition: 'transform 0.18s cubic-bezier(0.2, 0, 0, 1)',
      }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes studentIdleBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        @keyframes studentArrivalBounce {
          0% { transform: translateY(0) scale(1, 1); }
          40% { transform: translateY(-8px) scale(0.96, 1.04); }
          75% { transform: translateY(1px) scale(1.04, 0.96); }
          100% { transform: translateY(0) scale(1, 1); }
        }
        @keyframes studentWalkTorsoBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2.5px); }
        }
        @keyframes studentWalkLegFront {
          0%, 100% { transform: rotate(-18deg); }
          50% { transform: rotate(18deg); }
        }
        @keyframes studentWalkLegBack {
          0%, 100% { transform: rotate(18deg); }
          50% { transform: rotate(-18deg); }
        }
        @keyframes studentWalkArmFront {
          0%, 100% { transform: rotate(22deg); }
          50% { transform: rotate(-22deg); }
        }
        @keyframes studentWalkArmBack {
          0%, 100% { transform: rotate(-20deg); }
          50% { transform: rotate(20deg); }
        }
        @keyframes studentCelebrateBob {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-6px) scale(1.03); }
        }
        @keyframes studentSparkleTwinkle {
          0%, 100% { transform: scale(0.6) rotate(0deg); opacity: 0.3; }
          50% { transform: scale(1.15) rotate(45deg); opacity: 1; }
        }

        .student-anim-idle {
          animation: studentIdleBob 2.2s ease-in-out infinite;
        }
        .student-anim-walking {
          animation: studentWalkTorsoBob 0.38s ease-in-out infinite;
        }
        .student-anim-arrival {
          animation: studentArrivalBounce 0.55s ease-out 1;
        }
        .student-anim-celebrate {
          animation: studentCelebrateBob 0.75s ease-in-out infinite;
        }
        .student-leg-front-walk {
          transform-origin: 19px 38px;
          animation: studentWalkLegFront 0.38s ease-in-out infinite;
        }
        .student-leg-back-walk {
          transform-origin: 19px 38px;
          animation: studentWalkLegBack 0.38s ease-in-out infinite;
        }
        .student-arm-front-walk {
          transform-origin: 21px 24px;
          animation: studentWalkArmFront 0.38s ease-in-out infinite;
        }
        .student-arm-back-walk {
          transform-origin: 16px 24px;
          animation: studentWalkArmBack 0.38s ease-in-out infinite;
        }
        .student-sparkle-1 {
          animation: studentSparkleTwinkle 1.1s ease-in-out infinite;
          transform-origin: center;
        }
        .student-sparkle-2 {
          animation: studentSparkleTwinkle 1.1s ease-in-out infinite 0.4s;
          transform-origin: center;
        }
      `}</style>

      <div
        className={`relative ${
          isCelebrating
            ? 'student-anim-celebrate'
            : isArrival
            ? 'student-anim-arrival'
            : isWalking
            ? 'student-anim-walking'
            : 'student-anim-idle'
        }`}
      >
        <svg
          width={width}
          height={height}
          viewBox="0 0 44 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible filter drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.18)]"
        >
          {/* Subtle Ground Contact Shadow */}
          <ellipse cx="22" cy="60" rx="11" ry="2.2" fill="#000000" opacity="0.22" />

          {/* Celebratory Sparkles (When celebrating or reaching Job) */}
          {isCelebrating && (
            <g>
              {/* Star 1 - Top Left */}
              <path
                d="M 6 4 L 8 0 L 10 4 L 14 6 L 10 8 L 8 12 L 6 8 L 2 6 Z"
                fill="#F59E0B"
                className="student-sparkle-1"
              />
              {/* Star 2 - Top Right */}
              <path
                d="M 33 6 L 35 2 L 37 6 L 41 8 L 37 10 L 35 14 L 33 10 L 29 8 Z"
                fill="#FBBF24"
                className="student-sparkle-2"
              />
            </g>
          )}

          {/* ── 1. BACK LEG (Walk cycle animated) ── */}
          <g className={isWalking ? 'student-leg-back-walk' : ''}>
            {/* Thigh & Calf */}
            <path
              d="M 17 38 L 15 48 L 14 56"
              stroke="#1E293B"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Sneaker */}
            <path
              d="M 12 56 L 18 56 L 18 58.5 L 11 58.5 Z"
              fill="#0F172A"
            />
            <path
              d="M 10 58.5 L 19 58.5 L 19 60 L 10 60 Z"
              fill="#FFFFFF"
            />
          </g>

          {/* ── 2. BACKPACK (Modern Grey & Purple-trimmed) ── */}
          <g>
            {/* Backpack body */}
            <rect
              x="8"
              y="22"
              width="8"
              height="15"
              rx="3"
              fill="#334155"
              stroke="#1E293B"
              strokeWidth="1"
            />
            {/* Backpack front pocket & accent */}
            <rect
              x="7"
              y="27"
              width="4"
              height="8"
              rx="1.5"
              fill="#6D28D9"
            />
            {/* Purple strap across shoulder */}
            <path
              d="M 13 22 C 15 22, 17 25, 17 28"
              stroke="#8B5CF6"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* ── 3. TORSO: PURPLE HOODIE ── */}
          <g>
            {/* Main hoodie body */}
            <path
              d="M 14 22 C 14 20, 26 20, 27 22 L 28 38 C 28 39, 13 39, 14 38 Z"
              fill="#7C3AED"
            />
            {/* Shading on hoodie edge */}
            <path
              d="M 14 22 L 17 38 L 14 38 Z"
              fill="#6D28D9"
              opacity="0.4"
            />
            {/* Hoodie pocket / seam detail */}
            <path
              d="M 18 31 C 20 29, 24 29, 26 31 L 26 36 C 26 37, 18 37, 18 36 Z"
              fill="#6D28D9"
              opacity="0.75"
            />
            {/* White Hoodie Drawstrings */}
            <path
              d="M 21 21 L 21 27"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M 23 21 L 23 26"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </g>

          {/* ── 4. FRONT LEG (Walk cycle animated) ── */}
          <g className={isWalking ? 'student-leg-front-walk' : ''}>
            {/* Thigh & Calf */}
            <path
              d="M 22 38 L 24 48 L 25 56"
              stroke="#1E293B"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Sneaker */}
            <path
              d="M 22 56 L 29 56 L 29 58.5 L 21 58.5 Z"
              fill="#0F172A"
            />
            <path
              d="M 20 58.5 L 30 58.5 L 30 60 L 20 60 Z"
              fill="#FFFFFF"
            />
          </g>

          {/* ── 5. BACK ARM ── */}
          {!isCelebrating && (
            <g className={isWalking ? 'student-arm-back-walk' : ''}>
              <path
                d="M 16 23 L 13 30 L 15 36"
                stroke="#6D28D9"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <circle cx="15" cy="37" r="2.2" fill="#E0A97A" />
            </g>
          )}

          {/* ── 6. HEAD & HAIR (Young Indian College Student) ── */}
          <g>
            {/* Neck */}
            <rect x="19" y="18" width="4.5" height="4" fill="#D49568" rx="1" />
            {/* Head oval */}
            <circle cx="21" cy="12" r="7.5" fill="#E0A97A" />
            {/* Ear */}
            <circle cx="15.5" cy="12.5" r="2" fill="#D49568" />
            {/* Neat Modern Dark Hair */}
            <path
              d="M 14 11 C 14 6, 17 4, 23 4 C 27 4, 29 7, 29 11 C 28 8, 26 7, 22 7 C 18 7, 16 8, 14 11 Z"
              fill="#0F172A"
            />
            <path
              d="M 14 10 C 13.5 12, 14 14, 15 15 C 15 12, 14.5 10.5, 14 10 Z"
              fill="#0F172A"
            />
            {/* Eye (Facing forward/right) */}
            <circle cx="24.5" cy="11.5" r="1.1" fill="#0F172A" />
            {/* Eyebrow */}
            <path d="M 23 9.5 C 24 9, 25.5 9, 26 9.5" stroke="#0F172A" strokeWidth="0.8" strokeLinecap="round" />
            {/* Warm Friendly Smile */}
            <path
              d="M 23 14.5 C 24 16, 25.5 16, 26 14.5"
              stroke="#991B1B"
              strokeWidth="0.9"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* ── 7. FRONT ARM (Waving if celebrating, swinging if walking) ── */}
          {isCelebrating ? (
            <g>
              {/* Arm raised high in celebratory wave */}
              <path
                d="M 23 23 L 28 15 L 32 8"
                stroke="#7C3AED"
                strokeWidth="3.8"
                strokeLinecap="round"
              />
              <circle cx="33" cy="7" r="2.4" fill="#E0A97A" />
            </g>
          ) : (
            <g className={isWalking ? 'student-arm-front-walk' : ''}>
              <path
                d="M 23 23 L 25 31 L 27 37"
                stroke="#7C3AED"
                strokeWidth="3.8"
                strokeLinecap="round"
              />
              <circle cx="27.5" cy="38" r="2.4" fill="#E0A97A" />
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};

export default StudentCharacter;
