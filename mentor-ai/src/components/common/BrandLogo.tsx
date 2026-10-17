import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  size = 'md',
  showTagline = true,
  className = '',
  onClick
}) => {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-13 h-13'
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-[18px]',
    lg: 'text-2xl'
  };

  const taglineSizes = {
    sm: 'text-[10px]',
    md: 'text-[11px]',
    lg: 'text-xs'
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 sm:gap-3 cursor-pointer group select-none ${className}`}
    >
      {/* 3D Glowing 'M' Orbital Emblem */}
      <div className={`relative ${iconSizes[size]} shrink-0 rounded-2xl overflow-hidden bg-[#060B1C] border border-blue-500/30 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200 flex items-center justify-center p-0.5`}>
        <img
          src="/assets/mentor-ai-emblem.png"
          alt="Mentor AI Emblem"
          className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
        />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-black tracking-tight ${titleSizes[size]} ${isDark ? 'text-white' : 'text-slate-900'}`}>
            MENTOR <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">AI</span>
          </span>
          <span className="text-[9.5px] font-extrabold px-1.5 py-0.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xs tracking-wide">
            PRO
          </span>
        </div>

        {showTagline && (
          <span className={`font-medium tracking-tight mt-1 leading-none ${taglineSizes[size]} ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Your Personal AI Mentor
          </span>
        )}
      </div>
    </div>
  );
};
