import React from 'react';
import { Wifi, BatteryMedium, Signal } from 'lucide-react';
import { Navbar } from './Navbar';
import { TabType } from '../../types';

interface DeviceFrameProps {
  children: React.ReactNode;
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onOpenSearch: () => void;
  onOpenNotifications: () => void;
  onOpenAiChat: () => void;
  viewMode: 'fullscreen' | 'mobile';
  onToggleViewMode: (mode: 'fullscreen' | 'mobile') => void;
  userName?: string;
  onLogout?: () => void;
}

export const DeviceFrame: React.FC<DeviceFrameProps> = ({
  children,
  activeTab,
  onTabChange,
  onOpenSearch,
  onOpenNotifications,
  onOpenAiChat,
  viewMode,
  onToggleViewMode,
  userName,
  onLogout
}) => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#F6F8FC]">
      {/* Background Soft Silky Waves & Ambient Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Pale Gold Ambient Glow */}
        <div className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-amber-100/30 via-yellow-50/15 to-transparent blur-3xl" />
        {/* Soft Lavender / Purple Ambient Glow */}
        <div className="absolute top-1/4 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-purple-200/20 via-indigo-100/15 to-transparent blur-3xl" />
        {/* Soft Pale Sky Blue Ambient Glow */}
        <div className="absolute -bottom-40 left-1/3 w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-sky-200/25 via-blue-100/10 to-transparent blur-3xl" />
      </div>

      {/* 1. FULLSCREEN DESKTOP / LAPTOP WEBSITE VIEW (Default) */}
      {viewMode === 'fullscreen' ? (
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Top Full Desktop Navigation Bar (Only visible on Laptop/Desktop) */}
          <div className="hidden lg:block">
            <Navbar
              activeTab={activeTab}
              onTabChange={onTabChange}
              onOpenSearch={onOpenSearch}
              onOpenNotifications={onOpenNotifications}
              onOpenAiChat={onOpenAiChat}
              viewMode={viewMode}
              onToggleViewMode={onToggleViewMode}
              userName={userName}
              onLogout={onLogout}
            />
          </div>

          {/* Main Container: Centered 1440px Max Width with 24px Padding on Each Side */}
          <main className="flex-1 w-full max-w-[1440px] px-4 sm:px-6 mx-auto py-3.5 sm:py-6 lg:py-7">
            {children}
          </main>
        </div>
      ) : (
        /* 2. MOBILE DEVICE MOCKUP FRAME VIEW (When explicitly toggled) */
        <div className="relative z-10 flex flex-col items-center justify-start min-h-screen py-4 px-2">
          {/* Top Switcher Bar */}
          <div className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-slate-200 shadow-xs z-30">
            <span className="text-xs text-slate-500 font-medium">Viewing in:</span>
            <button
              onClick={() => onToggleViewMode('fullscreen')}
              className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all cursor-pointer"
            >
              💻 Switch to Fullscreen Web
            </button>
            <span className="text-xs font-bold text-slate-900 bg-white px-3 py-1 rounded-full shadow-2xs border border-slate-150">
              📱 Mobile App Preview
            </span>
          </div>

          {/* Phone Frame Container */}
          <div className="relative w-full max-w-[420px] rounded-[48px] shadow-[0_25px_70px_rgba(0,0,0,0.18),0_10px_20px_rgba(0,0,0,0.08)] ring-[11px] ring-[#1E2028] border border-slate-800 bg-[#F8F9FD] min-h-[844px] overflow-hidden">
            {/* iPhone Dynamic Island & Status Bar */}
            <div className="sticky top-0 z-40 bg-[#F8F9FD]/90 backdrop-blur-md pt-2 px-6 pb-1 flex items-center justify-between select-none">
              <span className="text-xs font-bold text-slate-900 tracking-tight">9:41</span>
              <div className="w-24 h-6 bg-black rounded-full flex items-center justify-end px-2 gap-1.5 shadow-inner">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
              </div>
              <div className="flex items-center gap-1.5 text-slate-900">
                <Signal className="w-3.5 h-3.5 stroke-[2.5]" />
                <Wifi className="w-3.5 h-3.5 stroke-[2.5]" />
                <BatteryMedium className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>

            {/* Inner Content Area */}
            <div className="px-3.5 sm:px-4">
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
