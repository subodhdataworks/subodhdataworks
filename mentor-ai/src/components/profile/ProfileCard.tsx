import React from 'react';
import { currentUser } from '../../data/user';
import { CrownIcon } from '../common/TechIcons';
import { ProgressBar } from '../common/ProgressBar';

interface ProfileCardProps {
  onProfileClick?: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ onProfileClick }) => {
  return (
    <div
      onClick={onProfileClick}
      className="w-full bg-white rounded-[22px] p-4.5 sm:p-5 border border-slate-200/60 shadow-[0_4px_24px_rgba(220,230,248,0.5)] flex flex-col justify-between cursor-pointer group hover:border-indigo-150 transition-all min-h-[135px]"
    >
      {/* Top User Info & Streak Badge */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar with subtle ring */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-xs ring-1.5 ring-slate-200 group-hover:scale-105 transition-transform shrink-0">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <h3 className="text-[16px] font-extrabold text-slate-900 tracking-tight leading-none">
                {currentUser.name}
              </h3>
              <CrownIcon className="w-4 h-4 fill-amber-400 text-amber-500" />
            </div>
            <span className="text-xs font-semibold text-slate-400 mt-1 leading-none">
              {currentUser.roleTarget}
            </span>
          </div>
        </div>

        {/* Streak Pill */}
        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-orange-50 border border-orange-100/80 shadow-3xs shrink-0">
          <span className="text-orange-500 text-xs">🔥</span>
          <span className="text-xs font-bold text-slate-800 tracking-tight">
            {currentUser.streakDays} Day Streak
          </span>
        </div>
      </div>

      {/* Bottom Level & XP Progress */}
      <div className="mt-3 pt-3 border-t border-slate-100/80">
        <div className="flex justify-between items-center text-xs mb-1.5">
          <span className="font-bold text-slate-700 tracking-tight">
            Level {currentUser.level} • {currentUser.levelTitle}
          </span>
          <span className="text-[11px] text-slate-400 font-medium">
            {currentUser.xpToNextLevel} XP to Level 8
          </span>
        </div>
        <ProgressBar
          progress={78}
          colorGradient="from-amber-400 via-teal-400 to-sky-500"
          heightClass="h-2"
        />
      </div>
    </div>
  );
};
