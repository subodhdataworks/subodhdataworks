import React, { useState } from 'react';
import { Clock, BarChart2, ArrowRight } from 'lucide-react';
import { todayMission } from '../../data/missions';
import { currentUser } from '../../data/user';
import { SqlIcon } from '../common/TechIcons';
import { ProgressBar } from '../common/ProgressBar';
import { MissionChallengeModal } from './MissionChallengeModal';

interface MissionCardProps {
  onChallengeComplete?: () => void;
}

export const MissionCard: React.FC<MissionCardProps> = ({ onChallengeComplete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(true);
    if (onChallengeComplete) onChallengeComplete();
  };

  return (
    <div className="relative w-full bg-white rounded-[22px] p-5 sm:p-6 border border-slate-200/60 shadow-[0_4px_24px_rgba(220,230,248,0.5)] overflow-hidden lg:min-h-[160px] flex flex-col justify-between">
      {/* Decorative 3D holographic reward art on the right background */}
      <div className="absolute right-0 bottom-0 w-44 h-44 opacity-30 lg:opacity-40 pointer-events-none translate-x-4 translate-y-6">
        <img
          src="/assets/mission-gift.jpg"
          alt="Mission Reward"
          className="w-full h-full object-contain filter saturate-110"
        />
      </div>

      {/* Main Responsive Grid Layout:
          - Desktop: 3-column horizontal flow (LEFT info, CENTER Level progress, RIGHT Streak & CTA)
          - Mobile: Stacked compact flow */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 w-full">
        {/* LEFT COLUMN: Mission Header & Challenge Details */}
        <div className="flex items-start gap-4 flex-1 min-w-0">
          {/* Database Cylinder Icon */}
          <div className="w-12 h-12 rounded-2xl bg-blue-50/90 border border-blue-100/70 flex items-center justify-center p-2 shrink-0 shadow-2xs">
            <SqlIcon className="w-7 h-7" />
          </div>

          <div className="flex-1 min-w-0">
            {/* Top Tag */}
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
                <Clock className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Today's Mission
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="text-base sm:text-[17px] font-extrabold text-slate-900 tracking-tight leading-tight">
              {todayMission.title}
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-500 mt-1 leading-snug line-clamp-1">
              {todayMission.description}
            </p>

            {/* Metadata Badges */}
            <div className="flex items-center gap-3 mt-2 text-xs text-slate-400 font-medium">
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{todayMission.duration}</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <BarChart2 className="w-3.5 h-3.5 text-slate-400" />
                <span>{todayMission.difficulty}</span>
              </span>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN (On Desktop): Level & XP Progress */}
        <div className="hidden lg:flex flex-col items-center justify-center px-4 py-2 bg-slate-50/70 rounded-2xl border border-slate-150/60 w-52 shrink-0">
          <span className="text-xs font-bold text-slate-700 tracking-tight">
            Level {currentUser.level} • {currentUser.levelTitle}
          </span>
          <div className="w-full mt-1.5">
            <ProgressBar
              progress={78}
              colorGradient="from-amber-400 via-teal-400 to-sky-500"
              heightClass="h-1.5"
            />
          </div>
          <span className="text-[10.5px] text-slate-400 font-medium mt-1">
            {currentUser.xpToNextLevel} XP to next level
          </span>
        </div>

        {/* RIGHT COLUMN: Streak & Prominent CTA Button */}
        <div className="flex items-center justify-between lg:flex-col lg:items-end gap-3 shrink-0 w-full lg:w-auto">
          {/* Streak Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-100/80 shadow-3xs">
            <span className="text-orange-500 text-xs">🔥</span>
            <span className="text-xs font-extrabold text-slate-800 tracking-tight">
              {currentUser.streakDays} Day Streak
            </span>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            type="button"
            className={`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer ${
              isCompleted
                ? 'bg-emerald-600 text-white shadow-emerald-200'
                : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20'
            }`}
          >
            <span>{isCompleted ? 'Solved ✨' : 'Start Challenge'}</span>
            {!isCompleted && <ArrowRight className="w-4 h-4 stroke-[2.5]" />}
          </button>
        </div>
      </div>

      {/* Challenge Modal */}
      <MissionChallengeModal
        mission={todayMission}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onComplete={handleComplete}
      />
    </div>
  );
};
