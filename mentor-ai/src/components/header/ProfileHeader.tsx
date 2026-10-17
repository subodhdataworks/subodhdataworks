import React from 'react';
import { Search, Bell } from 'lucide-react';
import { currentUser } from '../../data/user';
import { CrownIcon } from '../common/TechIcons';

interface ProfileHeaderProps {
  onOpenSearch: () => void;
  onOpenNotifications: () => void;
  onOpenAiChat: () => void;
  unreadCount?: number;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  onOpenSearch,
  onOpenNotifications,
  onOpenAiChat,
  unreadCount = 1
}) => {
  return (
    <header className="flex items-center justify-between pt-1 pb-1 px-0.5 w-full">
      {/* Left: User Avatar & Greeting */}
      <div className="flex items-center gap-2.5">
        {/* Avatar with subtle ring */}
        <div className="relative group cursor-pointer shrink-0">
          <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1.5 ring-slate-200/80">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-full h-full object-cover object-top scale-105"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
        </div>

        {/* User Info & Motto */}
        <div className="flex flex-col">
          <span className="text-[12px] font-medium text-slate-500 leading-tight">
            Good Evening,
          </span>
          <div className="flex items-center gap-1 mt-0.5">
            <h1 className="text-[18px] font-bold text-slate-900 tracking-tight leading-none">
              {currentUser.name}
            </h1>
            <span className="text-amber-400 drop-shadow-2xs inline-flex items-center">
              <CrownIcon className="w-4 h-4 fill-amber-400 text-amber-500" />
            </span>
          </div>
          <p className="text-[10.5px] text-slate-400 font-normal leading-tight mt-0.5">
            {currentUser.quote}
          </p>
        </div>
      </div>

      {/* Right: Quick Action Buttons */}
      <div className="flex items-center gap-2">
        {/* Search Button */}
        <button
          onClick={onOpenSearch}
          type="button"
          aria-label="Search"
          className="w-9 h-9 rounded-full bg-white shadow-xs border border-slate-150/80 flex items-center justify-center text-slate-700 hover:text-indigo-600 hover:bg-slate-50 active:scale-95 transition-all cursor-pointer"
        >
          <Search className="w-4 h-4 stroke-[2.2]" />
        </button>

        {/* Notifications Button */}
        <button
          onClick={onOpenNotifications}
          type="button"
          aria-label="Notifications"
          className="relative w-9 h-9 rounded-full bg-white shadow-xs border border-slate-150/80 flex items-center justify-center text-slate-700 hover:text-indigo-600 hover:bg-slate-50 active:scale-95 transition-all cursor-pointer"
        >
          <Bell className="w-4 h-4 stroke-[2.2]" />
          {unreadCount > 0 && (
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white" />
          )}
        </button>

        {/* AI Robot Avatar Button */}
        <button
          onClick={onOpenAiChat}
          type="button"
          aria-label="AI Tutor"
          className="relative p-0.5 rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-[0_0_10px_rgba(99,102,241,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-900 border border-white/60 flex items-center justify-center">
            <img
              src="/assets/ask-ai-orb.jpg"
              alt="AI Tutor"
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </button>
      </div>
    </header>
  );
};
