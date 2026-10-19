import React, { useState, useEffect } from 'react';
import {
  X,
  LogOut,
  Award,
  Briefcase,
  Gift,
  HelpCircle,
  ChevronRight,
  Edit2,
  Crown,
  Link2,
  Check,
  Sparkles,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { LearnerTelemetry } from '../../../services/realAuthService';
import { useThemeAccent } from '../../../context/ThemeAccentContext';

interface MobileProfileSheetProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
  telemetry?: LearnerTelemetry;
  onLogout?: () => void;
  onOpenEarn?: () => void;
  onOpenLogin?: () => void;
  onOpenPlacement?: () => void;
  onOpenAdvisor?: () => void;
}

export const MobileProfileSheet: React.FC<MobileProfileSheetProps> = ({
  isOpen,
  onClose,
  userName = 'Subodh Kumar',
  telemetry,
  onLogout,
  onOpenEarn,
  onOpenLogin,
  onOpenPlacement,
  onOpenAdvisor,
}) => {
  const { playClick } = useThemeAccent();

  // Animation lifecycle
  const [isRendered, setIsRendered] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  // Avatar Link Modal state ("gmail avtar nhi link dalna hai")
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [imageLinkInput, setImageLinkInput] = useState('');

  // Stored user data
  const storedEmail = typeof window !== 'undefined' ? localStorage.getItem('futureai_user_email') : null;
  const storedName = typeof window !== 'undefined' ? localStorage.getItem('futureai_user_name') : null;
  const storedAvatar = typeof window !== 'undefined' ? localStorage.getItem('futureai_user_avatar') : null;

  const [displayName] = useState(storedName || (userName !== 'Learner' ? userName : 'Subodh Kumar'));
  const [displayEmail] = useState(storedEmail || 'subodh.mscit@gmail.com');
  const [avatarUrl, setAvatarUrl] = useState(storedAvatar || '/images/profile_student_avatar.png');

  // Smooth opening / closing transition
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      const timer = setTimeout(() => setIsVisible(true), 20);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setIsRendered(false), 280);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Sync avatar updates across headers and drawers
  useEffect(() => {
    const handleAvatarSync = () => {
      if (typeof window !== 'undefined') {
        const updated = localStorage.getItem('futureai_user_avatar');
        if (updated) setAvatarUrl(updated);
      }
    };
    window.addEventListener('storage', handleAvatarSync);
    window.addEventListener('futureai_avatar_updated', handleAvatarSync);
    return () => {
      window.removeEventListener('storage', handleAvatarSync);
      window.removeEventListener('futureai_avatar_updated', handleAvatarSync);
    };
  }, []);

  if (!isRendered) return null;

  const playTactile = () => {
    try {
      playClick?.();
    } catch {}
  };

  const handleSmoothClose = () => {
    playTactile();
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 280);
  };

  // Save Avatar from Link URL
  const handleSaveAvatarLink = (e?: React.FormEvent) => {
    e?.preventDefault();
    playTactile();
    if (!imageLinkInput.trim()) return;
    const url = imageLinkInput.trim();
    setAvatarUrl(url);
    if (typeof window !== 'undefined') {
      localStorage.setItem('futureai_user_avatar', url);
      window.dispatchEvent(new Event('futureai_avatar_updated'));
    }
    setShowLinkModal(false);
    setImageLinkInput('');
  };

  const handleSetPresetAvatar = (url: string) => {
    playTactile();
    setAvatarUrl(url);
    if (typeof window !== 'undefined') {
      localStorage.setItem('futureai_user_avatar', url);
      window.dispatchEvent(new Event('futureai_avatar_updated'));
    }
    setShowLinkModal(false);
  };

  const handleAction = (action: 'certificate' | 'internship' | 'refer_earn' | 'help') => {
    playTactile();
    handleSmoothClose();

    if (action === 'certificate') {
      if (onOpenPlacement) onOpenPlacement();
      else if (typeof window !== 'undefined') window.location.hash = '#dashboard';
    } else if (action === 'internship') {
      if (onOpenPlacement) onOpenPlacement();
      else if (typeof window !== 'undefined') window.location.hash = '#placement';
    } else if (action === 'refer_earn') {
      if (onOpenEarn) onOpenEarn();
      else if (typeof window !== 'undefined') window.location.hash = '#earnings';
    } else if (action === 'help') {
      if (onOpenAdvisor) onOpenAdvisor();
      else if (typeof window !== 'undefined') window.location.hash = '#contact-us';
    }
  };

  const handleSignOutClick = () => {
    playTactile();
    if (window.confirm('Are you sure you want to sign out from this device?')) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('futureai_logged_in');
      }
      handleSmoothClose();
      if (onLogout) onLogout();
      else window.location.reload();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end select-none font-sans overflow-hidden">
      
      {/* ─── Backdrop: Premium Glass Blur Overlay (~20% left reveals Home screen) ─── */}
      <div
        onClick={handleSmoothClose}
        className={`fixed inset-0 bg-slate-950/45 backdrop-blur-[3px] transition-opacity duration-300 ease-out cursor-pointer ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* ─── Next-Gen Floating Profile Drawer ─── */}
      <div
        className={`relative z-10 w-[78vw] max-w-[325px] sm:max-w-[340px] h-full min-h-screen bg-white/95 backdrop-blur-2xl rounded-l-[32px] border-l border-white/80 shadow-[-20px_0_50px_rgba(15,23,42,0.28)] flex flex-col justify-between overflow-y-auto no-scrollbar text-left transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'translate-x-0 scale-100' : 'translate-x-full scale-95'
        }`}
      >
        
        {/* Ambient Holographic Aurora Background Orbs */}
        <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-to-br from-blue-400/20 via-indigo-400/15 to-transparent rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-44 left-0 w-44 h-44 bg-gradient-to-tr from-pink-400/15 via-rose-300/10 to-transparent rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-16 right-0 w-48 h-48 bg-gradient-to-tl from-emerald-400/15 via-teal-300/10 to-transparent rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 px-3.5 pt-3.5 pb-2 space-y-3">
          
          {/* ─── Top Floating Glass Close "X" Button ─── */}
          <div className="flex items-center justify-between pl-1">
            <span className="text-[11px] font-black tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent flex items-center gap-1">
              <Zap className="w-3 h-3 text-blue-600 fill-blue-600" />
              <span>FUTURE PASS</span>
            </span>
            <button
              type="button"
              onClick={handleSmoothClose}
              className="w-8 h-8 rounded-full bg-slate-100/90 hover:bg-slate-200 text-slate-700 flex items-center justify-center active:scale-90 transition-transform cursor-pointer shadow-xs border border-slate-200/60"
              aria-label="Close"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* ─── Modern Student Hero Card ─── */}
          <div className="p-3 rounded-2xl bg-gradient-to-b from-slate-50/90 to-blue-50/40 border border-slate-100/90 shadow-2xs relative overflow-hidden">
            <div className="flex items-center gap-3">
              
              {/* 3D Avatar with Luminous Glowing Ring */}
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 shadow-md">
                  <img
                    src={avatarUrl}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/profile_student_avatar.png';
                    }}
                    alt={displayName}
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </div>
                {/* Pencil Button for Image Link */}
                <button
                  type="button"
                  onClick={() => {
                    playTactile();
                    setShowLinkModal(true);
                  }}
                  className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-md ring-2 ring-white cursor-pointer active:scale-90 transition-transform"
                  title="Update avatar link"
                >
                  <Edit2 className="w-2.5 h-2.5 stroke-[2.5]" />
                </button>
              </div>

              {/* Student Details */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <h2 className="text-[15px] font-black text-slate-900 leading-snug truncate">
                    {displayName}
                  </h2>
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                </div>

                {/* Clickable Gmail Link */}
                <a
                  href={`mailto:${displayEmail}`}
                  className="flex items-center gap-1 text-[11px] text-slate-500 font-medium hover:text-blue-600 truncate transition-colors mt-0.5"
                  title="Send Email"
                >
                  <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span className="truncate">{displayEmail}</span>
                </a>

                {/* Badge: Pro Student */}
                <div className="mt-1">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-100/90 text-blue-700 text-[9.5px] font-black">
                    <Crown className="w-2.5 h-2.5 fill-blue-600" />
                    <span>PRO STUDENT</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* ─── ONLY 4 HIGH-IMPACT ADVANCE CARDS ─── */}
          <div className="space-y-2 pt-0.5">
            
            {/* 1. CERTIFICATE CARD (Gold Theme with Badge) */}
            <button
              type="button"
              onClick={() => handleAction('certificate')}
              className="w-full p-2.5 rounded-2xl bg-gradient-to-r from-amber-50/80 via-white to-amber-50/30 hover:from-amber-100/60 border border-amber-200/90 shadow-[0_4px_16px_rgba(245,158,11,0.08)] flex items-center justify-between transition-all active:scale-[0.97] cursor-pointer group text-left relative overflow-hidden"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/25 group-hover:scale-105 transition-transform">
                  <Award className="w-5 h-5 stroke-[2.3]" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs font-black text-slate-900 tracking-tight leading-tight">
                      Certificates
                    </h3>
                    <span className="px-1.5 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[8.5px] font-black">
                      Verified
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-semibold leading-tight mt-0.5 truncate">
                    Claim verified skill certificates
                  </p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-amber-100/80 text-amber-700 flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
                <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>

            {/* 2. INTERNSHIP CARD (Emerald Theme with Live Pulse) */}
            <button
              type="button"
              onClick={() => handleAction('internship')}
              className="w-full p-2.5 rounded-2xl bg-gradient-to-r from-emerald-50/80 via-white to-teal-50/30 hover:from-emerald-100/60 border border-emerald-200/90 shadow-[0_4px_16px_rgba(16,185,129,0.08)] flex items-center justify-between transition-all active:scale-[0.97] cursor-pointer group text-left relative overflow-hidden"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform">
                  <Briefcase className="w-5 h-5 stroke-[2.3]" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs font-black text-slate-900 tracking-tight leading-tight">
                      Internship
                    </h3>
                    <span className="px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[8.5px] font-black flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      Live Roles
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-semibold leading-tight mt-0.5 truncate">
                    Direct tech internship guarantee
                  </p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
                <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>

            {/* 3. REFER & EARN CARD (Neon Fuchsia & Gold ₹100 Badge) */}
            <button
              type="button"
              onClick={() => handleAction('refer_earn')}
              className="w-full p-2.5 rounded-2xl bg-gradient-to-r from-fuchsia-50/90 via-pink-50/40 to-orange-50/40 hover:from-fuchsia-100/70 border border-pink-200/90 shadow-[0_4px_16px_rgba(236,72,153,0.12)] flex items-center justify-between transition-all active:scale-[0.97] cursor-pointer group text-left relative overflow-hidden"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-fuchsia-600 via-pink-500 to-rose-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-pink-500/30 group-hover:scale-105 transition-transform">
                  <Gift className="w-5 h-5 stroke-[2.3]" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs font-black text-slate-900 tracking-tight leading-tight">
                      Refer & Earn
                    </h3>
                    <span className="px-1.5 py-0.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 text-white text-[8.5px] font-black shadow-2xs">
                      ₹100 / Free
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-semibold leading-tight mt-0.5 truncate">
                    Instant UPI bank payout per friend
                  </p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
                <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>

            {/* 4. HELP & SUPPORT CARD (Cyber Blue 24/7 Desk) */}
            <button
              type="button"
              onClick={() => handleAction('help')}
              className="w-full p-2.5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/30 hover:from-blue-100/60 border border-blue-200/90 shadow-[0_4px_16px_rgba(59,130,246,0.08)] flex items-center justify-between transition-all active:scale-[0.97] cursor-pointer group text-left relative overflow-hidden"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
                  <HelpCircle className="w-5 h-5 stroke-[2.3]" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs font-black text-slate-900 tracking-tight leading-tight">
                      Help & Support
                    </h3>
                    <span className="px-1.5 py-0.5 rounded-md bg-blue-100 text-blue-800 text-[8.5px] font-black">
                      24/7 Live
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-semibold leading-tight mt-0.5 truncate">
                    AI Mentor & WhatsApp support
                  </p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-blue-100/80 text-blue-700 flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
                <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>

          </div>

        </div>

        {/* ─── Bottom Section: Compliance Links + Cyber Sign Out Capsule ─── */}
        <div className="p-3.5 pt-1 border-t border-slate-100/90 bg-white/90 backdrop-blur-md sticky bottom-0 z-20 space-y-2">
          
          {/* Subtle Compliance Links for Fast Payment Gateway Verification */}
          <div className="flex items-center justify-center gap-2 text-[10px] font-semibold text-slate-400">
            <a
              href="#contact-us"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothClose();
                window.location.hash = '#contact-us';
              }}
              className="hover:text-blue-600 underline underline-offset-2 transition-colors"
            >
              Contact Us
            </a>
            <span>•</span>
            <a
              href="#terms"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothClose();
                window.location.hash = '#terms';
              }}
              className="hover:text-blue-600 underline underline-offset-2 transition-colors"
            >
              Terms & Conditions
            </a>
          </div>

          {/* Futuristic Sign Out Capsule Button */}
          <button
            type="button"
            onClick={handleSignOutClick}
            className="w-full py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 text-white font-black text-xs flex items-center justify-between shadow-md shadow-rose-500/25 active:scale-95 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <LogOut className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="tracking-wide">Sign Out</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 stroke-[2.5] opacity-80 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>

      {/* ─── Avatar Image Link Modal ("link dalna hai") ─── */}
      {showLinkModal && (
        <div className="fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="w-full max-w-xs bg-white rounded-3xl p-4 shadow-2xl border border-slate-100 space-y-3 animate-scaleUp">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Link2 className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-black text-slate-900">
                  Update Avatar Link
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowLinkModal(false)}
                className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] text-slate-500 font-medium">
              Apna photo / image URL yahan paste karein:
            </p>

            <form onSubmit={handleSaveAvatarLink} className="space-y-2.5">
              <input
                type="url"
                placeholder="https://example.com/avatar.jpg"
                value={imageLinkInput}
                onChange={(e) => setImageLinkInput(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white"
                autoFocus
              />

              {/* Quick Preset Buttons */}
              <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                <button
                  type="button"
                  onClick={() => handleSetPresetAvatar('/images/profile_student_avatar.png')}
                  className="p-1.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 flex items-center gap-1.5 text-left cursor-pointer active:scale-95 transition-all"
                >
                  <img
                    src="/images/profile_student_avatar.png"
                    alt="3D Boy"
                    className="w-6 h-6 rounded-full object-cover shrink-0"
                  />
                  <span className="text-[10px] font-bold text-slate-700 leading-tight">
                    3D Boy (Default)
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSetPresetAvatar('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=faces')}
                  className="p-1.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 flex items-center gap-1.5 text-left cursor-pointer active:scale-95 transition-all"
                >
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=faces"
                    alt="Student"
                    className="w-6 h-6 rounded-full object-cover shrink-0"
                  />
                  <span className="text-[10px] font-bold text-slate-700 leading-tight">
                    Tech Student
                  </span>
                </button>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="submit"
                  disabled={!imageLinkInput.trim()}
                  className="flex-1 py-1.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 text-white rounded-xl text-xs font-black flex items-center justify-center gap-1 active:scale-95 transition-all cursor-pointer shadow-xs"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Save</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowLinkModal(false)}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold active:scale-95 transition-all cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
