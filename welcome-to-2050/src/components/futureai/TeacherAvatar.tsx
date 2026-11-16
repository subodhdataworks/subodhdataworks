import React from 'react';
import { motion } from 'framer-motion';

interface TeacherAvatarProps {
  isSpeaking?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const TeacherAvatar: React.FC<TeacherAvatarProps> = ({
  isSpeaking = false,
  size = 'md',
  onClick,
}) => {
  const dim = size === 'sm' ? 44 : size === 'lg' ? 68 : 54;

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className={`relative shrink-0 select-none cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95`}
      style={{ width: dim, height: dim }}
      title={isSpeaking ? 'Teacher Rahul is explaining (Speaking)' : 'Teacher Rahul (Click to hear explanation)'}
    >
      {/* Speaking Glow Effect */}
      {isSpeaking && (
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 blur-sm pointer-events-none"
        />
      )}

      {/* Circular Avatar Container matching reference image */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-md bg-gradient-to-b from-[#e0e7ff] to-[#c7d2fe]">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Skin tone gradient */}
            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d9825b" />
              <stop offset="100%" stopColor="#bf6a45" />
            </linearGradient>

            {/* Hair gradient */}
            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e181e" />
              <stop offset="100%" stopColor="#120e14" />
            </linearGradient>

            {/* Blue Hoodie jacket */}
            <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>

          {/* Background circle */}
          <circle cx="50" cy="50" r="48" fill="#e8eeff" />

          {/* Shoulders / Blue Jacket with dark inner shirt */}
          <path
            d="M 12 100 Q 15 72 32 68 Q 50 74 68 68 Q 85 72 88 100 Z"
            fill="url(#jacketGrad)"
          />
          {/* Inner dark t-shirt */}
          <path
            d="M 40 70 Q 50 82 60 70 L 62 100 L 38 100 Z"
            fill="#0f172a"
          />
          {/* Jacket collar / lapels */}
          <path
            d="M 32 68 L 40 82 L 44 71 Z"
            fill="#1e40af"
          />
          <path
            d="M 68 68 L 60 82 L 56 71 Z"
            fill="#1e40af"
          />

          {/* Neck */}
          <path
            d="M 43 56 L 43 72 Q 50 76 57 72 L 57 56 Z"
            fill="#bf6a45"
          />

          {/* Head / Face */}
          <ellipse cx="50" cy="46" rx="20" ry="24" fill="url(#skinGrad)" />

          {/* Ears */}
          <ellipse cx="29" cy="47" rx="3.5" ry="5.5" fill="#bf6a45" />
          <ellipse cx="71" cy="47" rx="3.5" ry="5.5" fill="#bf6a45" />

          {/* Modern Hair (textured spikes on top) */}
          <path
            d="M 28 42 Q 27 25 44 20 Q 52 17 62 21 Q 73 26 72 42 Q 67 33 58 31 Q 42 30 33 36 Z"
            fill="url(#hairGrad)"
          />
          {/* Top hair puffs */}
          <path
            d="M 35 24 Q 45 16 58 19 Q 68 22 69 30 Q 55 24 42 26 Z"
            fill="#2c222b"
          />

          {/* Eyebrows */}
          <path
            d="M 36 38 Q 41 36 45 38"
            stroke="#1e181e"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 55 38 Q 59 36 64 38"
            stroke="#1e181e"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Eyes behind glasses */}
          <circle cx="41" cy="44" r="2.2" fill="#1e181e" />
          <circle cx="59" cy="44" r="2.2" fill="#1e181e" />
          {/* Eye sparkle */}
          <circle cx="40.2" cy="43.2" r="0.7" fill="#ffffff" />
          <circle cx="58.2" cy="43.2" r="0.7" fill="#ffffff" />

          {/* Spectacles / Glasses (Modern stylish frames) */}
          <rect
            x="33"
            y="39"
            width="15"
            height="11"
            rx="3"
            fill="none"
            stroke="#111827"
            strokeWidth="2.2"
          />
          <rect
            x="52"
            y="39"
            width="15"
            height="11"
            rx="3"
            fill="none"
            stroke="#111827"
            strokeWidth="2.2"
          />
          {/* Bridge */}
          <line
            x1="48"
            y1="44"
            x2="52"
            y2="44"
            stroke="#111827"
            strokeWidth="2"
          />
          {/* Temples */}
          <line
            x1="33"
            y1="43"
            x2="28"
            y2="44"
            stroke="#111827"
            strokeWidth="2"
          />
          <line
            x1="67"
            y1="43"
            x2="72"
            y2="44"
            stroke="#111827"
            strokeWidth="2"
          />
          {/* Lens subtle glare */}
          <line
            x1="35"
            y1="41"
            x2="40"
            y2="48"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.4"
          />
          <line
            x1="54"
            y1="41"
            x2="59"
            y2="48"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.4"
          />

          {/* Nose */}
          <path
            d="M 50 44 L 49 51 L 52 51"
            stroke="#9f5232"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Friendly Smile Mouth with talking animation */}
          {isSpeaking ? (
            <motion.ellipse
              cx="50"
              cy="58"
              rx="5"
              ry="3.5"
              fill="#581c1c"
              animate={{
                ry: [2, 4.5, 2.5, 5, 2],
              }}
              transition={{
                duration: 0.35,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ) : (
            <path
              d="M 44 57 Q 50 63 56 57"
              stroke="#581c1c"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          )}
        </svg>
      </div>

      {/* Active teacher badge / talking pulse indicator */}
      {isSpeaking && (
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
        </span>
      )}
    </div>
  );
};
