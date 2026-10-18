import React from 'react';
import { X, LogOut, Coins, Gem, GraduationCap, Sparkles, ChevronRight, Share2, ShieldCheck, Flame } from 'lucide-react';
import { LearnerTelemetry } from '../../../services/realAuthService';

interface MobileProfileSheetProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  telemetry: LearnerTelemetry;
  onLogout?: () => void;
  onOpenEarn?: () => void;
}

export const MobileProfileSheet: React.FC<MobileProfileSheetProps> = ({
  isOpen,
  onClose,
  userName,
  telemetry,
  onLogout,
  onOpenEarn,
}) => {
  if (!isOpen) return null;

  const email = typeof window !== 'undefined' ? localStorage.getItem('futureai_user_email') : null;
  const phone = typeof window !== 'undefined' ? localStorage.getItem('futureai_user_phone') : null;
  const role = typeof window !== 'undefined' ? localStorage.getItem('futureai_user_role') || 'Student' : 'Student';
  const avatarUrl =
    (typeof window !== 'undefined' ? localStorage.getItem('futureai_user_avatar') : null) ||
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces';

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      {/* Backdrop tap to close */}
      <div className="flex-1" onClick={onClose} />

      {/* Android Bottom Sheet Container */}
      <div className="w-full max-w-md mx-auto bg-white rounded-t-[32px] p-5 shadow-2xl border-t border-slate-200 animate-slideUp text-left select-none max-h-[85vh] overflow-y-auto">
        {/* Android Sheet Handle */}
        <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-4" />

        {/* Header with Close */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-black">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Learner Profile</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 active:scale-95 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* User Card */}
        <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-purple-50/70 border border-blue-100/80 mb-4">
          <img
            src={avatarUrl}
            alt={userName}
            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-black text-slate-900 leading-tight truncate">
              {userName}
            </h3>
            <p className="text-xs text-slate-500 truncate mt-0.5">
              {email || phone || 'Student Account'}
            </p>
            <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-extrabold shadow-2xs">
              <GraduationCap className="w-3 h-3" />
              <span>Level 1 • {role === 'influencer' ? 'Influencer Partner' : 'Student'}</span>
            </div>
          </div>
        </div>

        {/* Telemetry Stats Grid (Android style chips) */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="p-2.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-center">
            <div className="flex items-center justify-center gap-1 text-amber-600 font-black text-sm">
              <Coins className="w-4 h-4 fill-amber-400" />
              <span>{telemetry.coins}</span>
            </div>
            <div className="text-[10px] font-bold text-slate-500 mt-0.5">Coins</div>
          </div>

          <div className="p-2.5 rounded-2xl bg-purple-50/70 border border-purple-200/80 text-center">
            <div className="flex items-center justify-center gap-1 text-purple-600 font-black text-sm">
              <Gem className="w-4 h-4 fill-purple-400" />
              <span>{telemetry.gems}</span>
            </div>
            <div className="text-[10px] font-bold text-slate-500 mt-0.5">Gems</div>
          </div>

          <div className="p-2.5 rounded-2xl bg-orange-50/70 border border-orange-200/80 text-center">
            <div className="flex items-center justify-center gap-1 text-orange-600 font-black text-sm">
              <Flame className="w-4 h-4 fill-orange-400" />
              <span>3</span>
            </div>
            <div className="text-[10px] font-bold text-slate-500 mt-0.5">Day Streak</div>
          </div>
        </div>

        {/* Quick Android List Items */}
        <div className="space-y-1.5 mb-5">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenEarn?.();
            }}
            className="w-full flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold shadow-xs">
                ₹
              </div>
              <div>
                <div className="text-xs font-black text-slate-900 leading-tight">
                  Affiliate & Refer Hub
                </div>
                <div className="text-[10px] text-slate-500">Earn ₹100 per free signup</div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          <div className="flex items-center gap-2 p-3 rounded-2xl bg-slate-50 text-slate-600 text-xs">
            <ShieldCheck className="w-4 h-4 text-sky-500 flex-shrink-0" />
            <span className="text-[11px] font-medium text-slate-500">
              Verified Student Account • 2050 Learner Portal
            </span>
          </div>
        </div>

        {/* Explicit Android Log Out Button */}
        <button
          type="button"
          onClick={() => {
            onClose();
            onLogout?.();
          }}
          className="w-full py-3.5 px-4 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-xs flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer border border-rose-200/80"
        >
          <LogOut className="w-4 h-4" />
          <span>Log Out from Device</span>
        </button>
      </div>
    </div>
  );
};
