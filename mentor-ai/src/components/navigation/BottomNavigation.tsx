import React from 'react';
import { Home, BookOpen, BarChart3, User, Sparkles } from 'lucide-react';
import { TabType } from '../../types';

interface BottomNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onOpenAiChat: () => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabChange,
  onOpenAiChat
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 max-w-[420px] mx-auto pointer-events-none lg:hidden">
      <div className="relative px-3 pb-1 pt-0 pointer-events-auto">
        {/* Frosted Glass Navigation Bar matching reference image */}
        <div className="relative flex items-center justify-between px-3 py-1.5 bg-white/90 backdrop-blur-xl border-t border-slate-100 rounded-t-3xl shadow-[0_-6px_25px_rgba(200,210,230,0.45)]">
          {/* 1. Home */}
          <button
            onClick={() => onTabChange('home')}
            type="button"
            className="flex-1 flex flex-col items-center justify-center py-1 transition-all cursor-pointer group"
          >
            <div
              className={`flex items-center justify-center px-3.5 py-1.5 rounded-full transition-all ${
                activeTab === 'home'
                  ? 'bg-amber-100/80 text-slate-900 shadow-2xs'
                  : 'text-slate-400 group-hover:text-slate-600'
              }`}
            >
              <Home className={`w-4.5 h-4.5 ${activeTab === 'home' ? 'stroke-[2.6] fill-slate-900' : 'stroke-[2]'}`} />
            </div>
            <span
              className={`text-[9.5px] font-bold mt-0.5 leading-none ${
                activeTab === 'home' ? 'text-slate-900' : 'text-slate-400'
              }`}
            >
              Home
            </span>
          </button>

          {/* 2. Learn */}
          <button
            onClick={() => onTabChange('learn')}
            type="button"
            className="flex-1 flex flex-col items-center justify-center py-1 transition-all cursor-pointer group"
          >
            <div
              className={`flex items-center justify-center px-3.5 py-1.5 rounded-full transition-all ${
                activeTab === 'learn'
                  ? 'bg-indigo-100/80 text-indigo-700 shadow-2xs'
                  : 'text-slate-400 group-hover:text-slate-600'
              }`}
            >
              <BookOpen className={`w-4.5 h-4.5 ${activeTab === 'learn' ? 'stroke-[2.5]' : 'stroke-[2]'}`} />
            </div>
            <span
              className={`text-[9.5px] font-bold mt-0.5 leading-none ${
                activeTab === 'learn' ? 'text-indigo-700' : 'text-slate-400'
              }`}
            >
              Learn
            </span>
          </button>

          {/* 3. Central Floating Glowing AI Button */}
          <div className="relative flex-1 flex flex-col items-center justify-center -top-4">
            <button
              onClick={onOpenAiChat}
              type="button"
              aria-label="Ask Mentor AI"
              className="group relative w-13 h-13 rounded-full flex items-center justify-center cursor-pointer transition-transform active:scale-95"
            >
              {/* Outer Cosmic Halo Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 opacity-90 blur-[10px] ai-glow-button" />

              {/* Decorative Pulsing Radiance Rings */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-300 to-pink-400 opacity-70 blur-[4px] pointer-events-none" />

              {/* Orb Shell */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/95 shadow-xl bg-slate-900 flex items-center justify-center">
                <img
                  src="/assets/ask-ai-orb.jpg"
                  alt="AI Orb"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <Sparkles className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] absolute" />
              </div>
            </button>
            <span className="text-[9.5px] font-extrabold text-indigo-600 tracking-tight leading-none mt-1">
              AI
            </span>
          </div>

          {/* 4. Progress */}
          <button
            onClick={() => onTabChange('progress')}
            type="button"
            className="flex-1 flex flex-col items-center justify-center py-1 transition-all cursor-pointer group"
          >
            <div
              className={`flex items-center justify-center px-3.5 py-1.5 rounded-full transition-all ${
                activeTab === 'progress'
                  ? 'bg-indigo-100/80 text-indigo-700 shadow-2xs'
                  : 'text-slate-400 group-hover:text-slate-600'
              }`}
            >
              <BarChart3 className={`w-4.5 h-4.5 ${activeTab === 'progress' ? 'stroke-[2.5]' : 'stroke-[2]'}`} />
            </div>
            <span
              className={`text-[9.5px] font-bold mt-0.5 leading-none ${
                activeTab === 'progress' ? 'text-indigo-700' : 'text-slate-400'
              }`}
            >
              Progress
            </span>
          </button>

          {/* 5. Profile */}
          <button
            onClick={() => onTabChange('profile')}
            type="button"
            className="flex-1 flex flex-col items-center justify-center py-1 transition-all cursor-pointer group"
          >
            <div
              className={`flex items-center justify-center px-3.5 py-1.5 rounded-full transition-all ${
                activeTab === 'profile'
                  ? 'bg-indigo-100/80 text-indigo-700 shadow-2xs'
                  : 'text-slate-400 group-hover:text-slate-600'
              }`}
            >
              <User className={`w-4.5 h-4.5 ${activeTab === 'profile' ? 'stroke-[2.5]' : 'stroke-[2]'}`} />
            </div>
            <span
              className={`text-[9.5px] font-bold mt-0.5 leading-none ${
                activeTab === 'profile' ? 'text-indigo-700' : 'text-slate-400'
              }`}
            >
              Profile
            </span>
          </button>
        </div>

        {/* iPhone Bottom Home Indicator Bar */}
        <div className="flex justify-center pt-1.5 pb-1">
          <div className="w-28 h-1 bg-slate-900/80 rounded-full" />
        </div>
      </div>
    </nav>
  );
};
