import React from 'react';
import { currentUser } from '../../data/user';
import { CrownIcon } from '../common/TechIcons';
import { Flame, Trophy, Award, BookCheck, Shield, Settings, FileText, ChevronRight, LogOut } from 'lucide-react';

interface ProfileViewProps {
  onUpgradeClick?: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ onUpgradeClick }) => {
  return (
    <div className="flex flex-col gap-4 pb-28 pt-2">
      {/* Profile Header Card */}
      <div className="p-5 rounded-3xl bg-white border border-slate-100 shadow-xs flex flex-col items-center text-center">
        <div className="relative mb-2">
          <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-white shadow-md ring-2 ring-indigo-100">
            <img src={currentUser.avatar} alt={currentUser.name} className="w-full h-full object-cover" />
          </div>
          <span className="absolute bottom-0 right-0 p-1 rounded-full bg-amber-400 text-slate-900 border-2 border-white shadow-xs">
            <CrownIcon className="w-3.5 h-3.5 fill-current" />
          </span>
        </div>

        <div className="flex items-center gap-1.5 justify-center">
          <h2 className="text-xl font-bold text-slate-900">{currentUser.name}</h2>
        </div>
        <p className="text-xs font-semibold text-indigo-600 mt-0.5">
          Targeting: {currentUser.roleTarget}
        </p>
        <p className="text-xs text-slate-400 mt-1 max-w-xs italic">
          "{currentUser.quote}"
        </p>

        {/* 4 Key Stat Metrics */}
        <div className="grid grid-cols-4 gap-2 w-full mt-4 pt-4 border-t border-slate-100">
          <div className="flex flex-col items-center">
            <span className="text-base font-extrabold text-slate-900">{currentUser.streakDays}d</span>
            <span className="text-[10px] text-slate-400 font-medium">Streak 🔥</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base font-extrabold text-slate-900">{currentUser.currentXp}</span>
            <span className="text-[10px] text-slate-400 font-medium">XP Earned</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base font-extrabold text-slate-900">49</span>
            <span className="text-[10px] text-slate-400 font-medium">Lessons</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base font-extrabold text-slate-900">3</span>
            <span className="text-[10px] text-slate-400 font-medium">Projects</span>
          </div>
        </div>
      </div>

      {/* Pro Plan Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 flex items-center justify-between shadow-md">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider block">Pro Member</span>
          <p className="text-xs font-bold mt-0.5">Lifetime Access Active</p>
        </div>
        <button
          onClick={onUpgradeClick}
          className="px-3 py-1.5 rounded-full bg-slate-950 text-white text-xs font-bold hover:bg-slate-900 cursor-pointer transition-all"
        >
          View Perks
        </button>
      </div>

      {/* Menu Options */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs divide-y divide-slate-100 text-xs font-medium text-slate-700">
        <div className="p-3.5 flex items-center justify-between hover:bg-slate-50 cursor-pointer">
          <div className="flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-indigo-600" />
            <span>AI Resume & Portfolio Review</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </div>
        <div className="p-3.5 flex items-center justify-between hover:bg-slate-50 cursor-pointer">
          <div className="flex items-center gap-2.5">
            <Award className="w-4 h-4 text-indigo-600" />
            <span>Certificates & Credentials</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </div>
        <div className="p-3.5 flex items-center justify-between hover:bg-slate-50 cursor-pointer">
          <div className="flex items-center gap-2.5">
            <Settings className="w-4 h-4 text-indigo-600" />
            <span>Learning Preferences & Notifications</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </div>
        <div className="p-3.5 flex items-center justify-between hover:bg-slate-50 cursor-pointer text-rose-600">
          <div className="flex items-center gap-2.5">
            <LogOut className="w-4 h-4 text-rose-600" />
            <span>Sign Out</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </div>
      </div>
    </div>
  );
};
