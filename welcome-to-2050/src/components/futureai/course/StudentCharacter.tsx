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
  width = 34,
  height = 48,
}) => {
  const isWalking = state === 'walking';
  const isCelebrating = state === 'celebrate' || isJobCelebration;
  const isArrival = state === 'arrival';

  return (
    <div
      className={`student-character-wrapper select-none pointer-events-none ${className}`}
      style={{
        transform: `scaleX(${direction})`,
        transformOrigin: '50% 92%',
        transition: 'transform 0.18s cubic-bezier(0.2, 0, 0, 1)',
      }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes advStudentIdle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2.5px); }
        }
        @keyframes advStudentArrival {
          0% { transform: translateY(0) scale(1, 1); }
          35% { transform: translateY(-9px) scale(0.95, 1.05); }
          70% { transform: translateY(1.5px) scale(1.05, 0.95); }
          100% { transform: translateY(0) scale(1, 1); }
        }
        @keyframes advStudentWalkBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes advStudentLegFront {
          0%, 100% { transform: rotate(-22deg); }
          50% { transform: rotate(22deg); }
        }
        @keyframes advStudentLegBack {
          0%, 100% { transform: rotate(22deg); }
          50% { transform: rotate(-22deg); }
        }
        @keyframes advStudentArmFront {
          0%, 100% { transform: rotate(26deg); }
          50% { transform: rotate(-26deg); }
        }
        @keyframes advStudentArmBack {
          0%, 100% { transform: rotate(-24deg); }
          50% { transform: rotate(24deg); }
        }
        @keyframes advStudentCelebrate {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-7px) scale(1.04); }
        }
        @keyframes advStudentSparkle {
          0%, 100% { transform: scale(0.5) rotate(0deg); opacity: 0.2; }
          50% { transform: scale(1.2) rotate(45deg); opacity: 1; }
        }

        .adv-anim-idle {
          animation: advStudentIdle 2.2s ease-in-out infinite;
        }
        .adv-anim-walking {
          animation: advStudentWalkBob 0.36s ease-in-out infinite;
        }
        .adv-anim-arrival {
          animation: advStudentArrival 0.55s ease-out 1;
        }
        .adv-anim-celebrate {
          animation: advStudentCelebrate 0.7s ease-in-out infinite;
        }
        .adv-leg-front-walk {
          transform-origin: 27px 46px;
          animation: advStudentLegFront 0.36s ease-in-out infinite;
        }
        .adv-leg-back-walk {
          transform-origin: 22px 46px;
          animation: advStudentLegBack 0.36s ease-in-out infinite;
        }
        .adv-arm-front-walk {
          transform-origin: 29px 30px;
          animation: advStudentArmFront 0.36s ease-in-out infinite;
        }
        .adv-arm-back-walk {
          transform-origin: 21px 30px;
          animation: advStudentArmBack 0.36s ease-in-out infinite;
        }
        .adv-sparkle-1 {
          animation: advStudentSparkle 1s ease-in-out infinite;
          transform-origin: center;
        }
        .adv-sparkle-2 {
          animation: advStudentSparkle 1s ease-in-out infinite 0.35s;
          transform-origin: center;
        }
      `}</style>

      <div
        className={`relative ${
          isCelebrating
            ? 'adv-anim-celebrate'
            : isArrival
            ? 'adv-anim-arrival'
            : isWalking
            ? 'adv-anim-walking'
            : 'adv-anim-idle'
        }`}
      >
        <svg
          width={width}
          height={height}
          viewBox="0 0 54 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.22)]"
        >
          <defs>
            {/* Skin Tone Gradient */}
            <linearGradient id="advSkin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5CBA7" />
              <stop offset="100%" stopColor="#D99B6A" />
            </linearGradient>

            {/* Premium Purple Hoodie Gradient */}
            <linearGradient id="advHoodie" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#5B21B6" />
            </linearGradient>

            {/* Tech Backpack Gradient */}
            <linearGradient id="advBackpack" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>

            {/* Hair Gradient */}
            <linearGradient id="advHair" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2D3748" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            {/* Ground Shadow Radial */}
            <radialGradient id="advGroundShadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0F172A" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#0F172A" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 0. GROUND CONTACT SHADOW */}
          <ellipse cx="27" cy="74" rx="15" ry="2.6" fill="url(#advGroundShadow)" />

          {/* CELEBRATORY SPARKLES (Job Arrival / Completion) */}
          {isCelebrating && (
            <g>
              <path
                d="M 8 6 L 10 0 L 12 6 L 18 8 L 12 10 L 10 16 L 8 10 L 2 8 Z"
                fill="#F59E0B"
                className="adv-sparkle-1"
              />
              <path
                d="M 42 8 L 44 2 L 46 8 L 52 10 L 46 12 L 44 18 L 42 12 L 36 10 Z"
                fill="#FBBF24"
                className="adv-sparkle-2"
              />
            </g>
          )}

          {/* ── 1. BACK LEG (Walk cycle animated) ── */}
          <g className={isWalking ? 'adv-leg-back-walk' : ''}>
            {/* Dark Jogger Thigh & Calf */}
            <path
              d="M 22 46 L 19 58 L 18 68"
              stroke="#1E293B"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Sneaker Heel & Body */}
            <path
              d="M 15 68 L 22 68 L 22 71.5 L 14 71.5 Z"
              fill="#7C3AED"
            />
            {/* Sneaker White Midsole & Tread */}
            <path
              d="M 13 71.5 L 24 71.5 L 24 73.5 L 13 73.5 Z"
              fill="#FFFFFF"
            />
            {/* Neon Orange Pull Tab Accent */}
            <circle cx="15" cy="67.5" r="1.2" fill="#F97316" />
          </g>

          {/* ── 2. TECH BACKPACK (Padded Modern Grey with Purple Trim) ── */}
          <g>
            {/* Backpack main body */}
            <rect
              x="9"
              y="26"
              width="10"
              height="20"
              rx="3.5"
              fill="url(#advBackpack)"
              stroke="#0F172A"
              strokeWidth="1"
            />
            {/* Backpack upper pouch */}
            <rect
              x="8"
              y="32"
              width="5"
              height="11"
              rx="2"
              fill="#7C3AED"
            />
            {/* Cyber / Tech reflective stripe */}
            <path
              d="M 10 35 L 12 35"
              stroke="#38BDF8"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Shoulder strap hugging back */}
            <path
              d="M 16 26 C 18 26, 21 30, 21 35"
              stroke="#6D28D9"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* ── 3. TORSO: VIBRANT GRADIENT PURPLE HOODIE ── */}
          <g>
            {/* Main hoodie body */}
            <path
              d="M 17 26 C 17 23, 33 23, 34 26 L 35 46 C 35 48, 16 48, 17 46 Z"
              fill="url(#advHoodie)"
            />
            {/* Inner White Tee Peeking at hem */}
            <path
              d="M 19 46 L 33 46 L 33 48 L 19 48 Z"
              fill="#FFFFFF"
            />
            {/* Hoodie Shadow Depth / Side Seam */}
            <path
              d="M 17 26 L 20 46 L 17 46 Z"
              fill="#4C1D95"
              opacity="0.45"
            />
            {/* Kangaroo Pouch with Top Hem */}
            <path
              d="M 22 37 C 24 35, 29 35, 31 37 L 32 44 C 32 45, 21 45, 21 44 Z"
              fill="#5B21B6"
              opacity="0.8"
            />
            {/* Braided White Drawstrings with Silver Metal Aglets */}
            <path
              d="M 25 25 L 25 33"
              stroke="#FFFFFF"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <circle cx="25" cy="33.5" r="0.9" fill="#E2E8F0" />

            <path
              d="M 28 25 L 28 32"
              stroke="#FFFFFF"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <circle cx="28" cy="32.5" r="0.9" fill="#E2E8F0" />
          </g>

          {/* ── 4. FRONT LEG (Walk cycle animated) ── */}
          <g className={isWalking ? 'adv-leg-front-walk' : ''}>
            {/* Dark Slim Cargo Pants */}
            <path
              d="M 27 46 L 30 58 L 31 68"
              stroke="#0F172A"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Cargo Knee Seam Accent */}
            <path
              d="M 28 57 L 31 57"
              stroke="#334155"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            {/* Sneaker Upper */}
            <path
              d="M 27 68 L 36 68 L 36 71.5 L 26 71.5 Z"
              fill="#0F172A"
            />
            {/* Sneaker Purple Swoosh Accent */}
            <path
              d="M 28 70 L 33 69.5"
              stroke="#8B5CF6"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Sneaker Chunky White Sole */}
            <path
              d="M 25 71.5 L 37 71.5 L 37 73.5 L 25 73.5 Z"
              fill="#FFFFFF"
            />
            {/* Orange Heel Accent Tab */}
            <circle cx="27" cy="67.5" r="1.3" fill="#F97316" />
          </g>

          {/* ── 5. BACK ARM ── */}
          {!isCelebrating && (
            <g className={isWalking ? 'adv-arm-back-walk' : ''}>
              <path
                d="M 19 28 L 15 36 L 17 44"
                stroke="#5B21B6"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="17" cy="44.5" r="2.5" fill="url(#advSkin)" />
            </g>
          )}

          {/* ── 6. FRONT ARM WITH GLOWING SMARTWATCH ── */}
          {!isCelebrating ? (
            <g className={isWalking ? 'adv-arm-front-walk' : ''}>
              <path
                d="M 29 28 L 33 37 L 31 44"
                stroke="#7C3AED"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Glowing Smartwatch */}
              <rect x="31" y="40" width="3.5" height="2.5" rx="1" fill="#0284C7" />
              <rect x="31.8" y="40.6" width="1.8" height="1.3" rx="0.5" fill="#38BDF8" />
              {/* Hand */}
              <circle cx="31" cy="45" r="2.6" fill="url(#advSkin)" />
            </g>
          ) : (
            /* CELEBRATING: BOTH HANDS RAISED IN VICTORY */
            <g>
              {/* Left Victory Arm */}
              <path
                d="M 18 27 L 11 16 L 9 10"
                stroke="#6D28D9"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="8" cy="9" r="2.8" fill="url(#advSkin)" />

              {/* Right Victory Arm */}
              <path
                d="M 32 27 L 39 16 L 41 10"
                stroke="#7C3AED"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="42" cy="9" r="2.8" fill="url(#advSkin)" />
            </g>
          )}

          {/* ── 7. HEAD, HAIR & EXPRESSION (Young Indian College Tech Student) ── */}
          <g>
            {/* Neck with subtle shadow */}
            <rect x="23" y="21" width="5.5" height="5" fill="#D99B6A" rx="1.5" />
            <rect x="24" y="23" width="4" height="2" fill="#C68252" opacity="0.4" />

            {/* Head Contour */}
            <circle cx="26" cy="14" r="9" fill="url(#advSkin)" />

            {/* Ear with inner detail */}
            <circle cx="19" cy="14.5" r="2.4" fill="#D99B6A" />
            <circle cx="19" cy="14.5" r="1.1" fill="#C68252" />

            {/* Modern High-Fade Pompadour Textured Hair */}
            <path
              d="M 17 13 C 17 7, 21 4, 28 4 C 33 4, 36 7, 36 12 C 34 8.5, 31 7.5, 27 7.5 C 22 7.5, 19.5 9, 17 13 Z"
              fill="url(#advHair)"
            />
            {/* Voluminous Hair Crown */}
            <path
              d="M 21 6 C 24 3, 30 3, 33 5.5 C 32 5, 29 4.5, 26 4.5 C 23 4.5, 21.5 5.2, 21 6 Z"
              fill="#475569"
            />
            {/* Sideburns / Temple Hair */}
            <path
              d="M 17.5 12 L 18.5 16 L 19.8 14 Z"
              fill="#0F172A"
            />

            {/* Expressive Dark Eyebrow */}
            <path
              d="M 28 10.8 C 29.5 10.2, 32 10.2, 33 10.8"
              stroke="#0F172A"
              strokeWidth="1.1"
              strokeLinecap="round"
            />

            {/* Eye (Facing forward/right) with dual specular sparkles */}
            <ellipse cx="30.5" cy="13.2" rx="1.5" ry="1.6" fill="#0F172A" />
            <circle cx="31" cy="12.7" r="0.6" fill="#FFFFFF" />
            <circle cx="30.2" cy="13.7" r="0.3" fill="#FFFFFF" />

            {/* Warm Friendly Smile */}
            <path
              d="M 28.5 17.2 C 29.8 18.8, 32 18.8, 33 17.2"
              stroke="#B91C1C"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default StudentCharacter;
