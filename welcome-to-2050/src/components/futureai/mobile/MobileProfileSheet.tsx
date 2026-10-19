import React, { useState, useEffect } from 'react';
import {
  X,
  LogOut,
  User,
  BarChart2,
  Award,
  Briefcase,
  Wallet,
  Users,
  HelpCircle,
  ChevronRight,
  Edit2,
  Crown,
  Link2,
  Check,
  Sparkles
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

  // Animation lifecycle state: isRendered keeps in DOM, isVisible triggers CSS transitions
  const [isRendered, setIsRendered] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  // Avatar Link Modal state ("gmail avtar nhi link dalna hai")
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [imageLinkInput, setImageLinkInput] = useState('');

  // Stored profile data
  const storedEmail = typeof window !== 'undefined' ? localStorage.getItem('futureai_user_email') : null;
  const storedName = typeof window !== 'undefined' ? localStorage.getItem('futureai_user_name') : null;
  const storedAvatar = typeof window !== 'undefined' ? localStorage.getItem('futureai_user_avatar') : null;
  const storedRole = typeof window !== 'undefined' ? localStorage.getItem('futureai_user_role') || 'Student' : 'Student';

  const [displayName, setDisplayName] = useState(storedName || (userName !== 'Learner' ? userName : 'Subodh Kumar'));
  const [displayEmail, setDisplayEmail] = useState(storedEmail || 'subodh.mscit@gmail.com');
  const [avatarUrl, setAvatarUrl] = useState(storedAvatar || '/images/profile_student_avatar.png');

  // Handle smooth open and close transition
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

  // Sync avatar when changed in another tab or component
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

  // Save Avatar from pasted link URL
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

  const handleItemClick = (actionId: string) => {
    playTactile();
    handleSmoothClose();

    if (actionId === 'profile') {
      setShowLinkModal(true);
    } else if (actionId === 'learning_progress') {
      if (typeof window !== 'undefined') window.location.hash = '#dashboard';
    } else if (actionId === 'certificates') {
      if (typeof window !== 'undefined') window.location.hash = '#dashboard';
    } else if (actionId === 'internship') {
      if (onOpenPlacement) onOpenPlacement();
      else if (typeof window !== 'undefined') window.location.hash = '#placement';
    } else if (actionId === 'get_job') {
      if (onOpenPlacement) onOpenPlacement();
      else if (typeof window !== 'undefined') window.location.hash = '#placement';
    } else if (actionId === 'wallet') {
      if (onOpenEarn) onOpenEarn();
      else if (typeof window !== 'undefined') window.location.hash = '#earnings';
    } else if (actionId === 'refer_earn') {
      if (onOpenEarn) onOpenEarn();
      else if (typeof window !== 'undefined') window.location.hash = '#earnings';
    } else if (actionId === 'help_support') {
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
      
      {/* ─── Backdrop: Dark blur, ~18-20% gap on left so home is visible ("thora sa khulega") ─── */}
      <div
        onClick={handleSmoothClose}
        className={`fixed inset-0 bg-slate-950/40 backdrop-blur-[2px] transition-opacity duration-300 ease-out cursor-pointer ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* ─── Slide-in Drawer (Matching media_1792393277537_4ba1a900.png 1:1) ─── */}
      <div
        className={`relative z-10 w-[82vw] max-w-[365px] h-full min-h-screen bg-white rounded-l-[36px] shadow-[-16px_0_40px_rgba(15,23,42,0.25)] flex flex-col justify-between overflow-y-auto no-scrollbar text-left transition-transform duration-300 ease-out ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        
        {/* Soft Ethereal Aura Waves (Top Right & Bottom Right) */}
        <div className="absolute top-0 right-0 w-64 h-56 bg-gradient-to-bl from-blue-100/70 via-purple-100/40 to-transparent rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-56 h-48 bg-gradient-to-tl from-indigo-100/60 via-purple-50/40 to-transparent rounded-tl-full pointer-events-none" />

        <div className="relative z-10 px-4 pt-4 pb-2 space-y-3.5">
          
          {/* ─── Top Close "X" Button (Top Right Floating Circle) ─── */}
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={handleSmoothClose}
              className="w-9 h-9 rounded-full bg-white shadow-md text-slate-700 flex items-center justify-center hover:bg-slate-50 active:scale-90 transition-transform cursor-pointer border border-slate-100/80"
              aria-label="Close Profile"
            >
              <X className="w-5 h-5 stroke-[2.4]" />
            </button>
          </div>

          {/* ─── User Profile Card: 3D Boy Avatar + Pencil Badge + Subodh Kumar + Gmail Link + Student Badge ─── */}
          <div className="flex items-center gap-3.5 px-1 pt-0 pb-1">
            
            {/* 3D Boy Avatar with Luminous Ring & Edit Pencil Badge */}
            <div className="relative shrink-0">
              <div className="w-[68px] h-[68px] rounded-full p-[2.5px] bg-gradient-to-tr from-sky-300 via-indigo-300 to-purple-300 shadow-md">
                <img
                  src={avatarUrl}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/profile_student_avatar.png';
                  }}
                  alt={displayName}
                  className="w-full h-full rounded-full object-cover bg-white"
                />
              </div>

              {/* Edit Pencil Icon Button ("gmail avtar nhi link dalna hai") */}
              <button
                type="button"
                onClick={() => {
                  playTactile();
                  setShowLinkModal(true);
                }}
                className="absolute -bottom-0.5 -right-0.5 w-6 h-6 rounded-full bg-[#1E6FE8] hover:bg-blue-700 text-white flex items-center justify-center shadow-md ring-2 ring-white cursor-pointer active:scale-90 transition-transform"
                title="Paste Image Link to Change Avatar"
              >
                <Edit2 className="w-3 h-3 stroke-[2.5]" />
              </button>
            </div>

            {/* Subodh Kumar, Gmail Row, Student Badge */}
            <div className="min-w-0 flex-1">
              <h2 className="text-[17px] font-black text-slate-900 leading-snug truncate">
                {displayName}
              </h2>
              
              {/* Clickable Gmail Link */}
              <a
                href={`mailto:${displayEmail}`}
                className="flex items-center gap-1.5 text-xs text-slate-600 font-medium hover:text-blue-600 truncate mt-0.5 transition-colors"
                title="Send email"
              >
                {/* Official Gmail M Logo */}
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span className="truncate">{displayEmail}</span>
              </a>

              {/* Student Badge (1:1 with Reference) */}
              <div className="mt-1">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-[#EBF3FE] text-[#1E6FE8] text-[11px] font-bold">
                  <Crown className="w-3 h-3 text-[#1E6FE8] fill-[#1E6FE8]" />
                  <span>{storedRole === 'influencer' ? 'Partner' : 'Student'}</span>
                </span>
              </div>
            </div>

          </div>

          {/* ─── 8 Menu Cards (Matching Screenshot 1:1, NO Settings) ─── */}
          <div className="space-y-2 pt-0.5">
            
            {/* 1. Profile */}
            <button
              type="button"
              onClick={() => handleItemClick('profile')}
              className="w-full py-2.5 px-3 rounded-2xl bg-white hover:bg-slate-50/90 flex items-center justify-between transition-all active:scale-98 cursor-pointer group text-left border border-slate-100/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-b from-[#00C6FF] to-[#0072FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <User className="w-5 h-5 stroke-[2.3]" />
                </div>
                <span className="text-[13.5px] font-black text-slate-900 leading-tight">
                  Profile
                </span>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#DCEEFE] text-[#0072FF] flex items-center justify-center shrink-0">
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </button>

            {/* 2. Learning Progress */}
            <button
              type="button"
              onClick={() => handleItemClick('learning_progress')}
              className="w-full py-2.5 px-3 rounded-2xl bg-white hover:bg-slate-50/90 flex items-center justify-between transition-all active:scale-98 cursor-pointer group text-left border border-slate-100/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-b from-[#A855F7] to-[#7C3AED] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <BarChart2 className="w-5 h-5 stroke-[2.3]" />
                </div>
                <span className="text-[13.5px] font-black text-slate-900 leading-tight">
                  Learning Progress
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </button>

            {/* 3. Certificates */}
            <button
              type="button"
              onClick={() => handleItemClick('certificates')}
              className="w-full py-2.5 px-3 rounded-2xl bg-white hover:bg-slate-50/90 flex items-center justify-between transition-all active:scale-98 cursor-pointer group text-left border border-slate-100/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-b from-[#FBBF24] to-[#F59E0B] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Award className="w-5 h-5 stroke-[2.3]" />
                </div>
                <span className="text-[13.5px] font-black text-slate-900 leading-tight">
                  Certificates
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </button>

            {/* 4. Internship */}
            <button
              type="button"
              onClick={() => handleItemClick('internship')}
              className="w-full py-2.5 px-3 rounded-2xl bg-white hover:bg-slate-50/90 flex items-center justify-between transition-all active:scale-98 cursor-pointer group text-left border border-slate-100/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-b from-[#10B981] to-[#059669] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Briefcase className="w-5 h-5 stroke-[2.3]" />
                </div>
                <span className="text-[13.5px] font-black text-slate-900 leading-tight">
                  Internship
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </button>

            {/* 5. Get Job (Prominent Pink Highlighted Card 1:1 with Screenshot) */}
            <button
              type="button"
              onClick={() => handleItemClick('get_job')}
              className="w-full py-2.5 px-3 rounded-2xl bg-gradient-to-r from-pink-50/80 via-white to-pink-50/40 hover:from-pink-100/70 flex items-center justify-between transition-all active:scale-98 cursor-pointer group text-left border border-pink-200/90 shadow-sm"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-b from-[#FF2E7E] to-[#E11D48] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Briefcase className="w-5 h-5 stroke-[2.3]" />
                </div>
                <span className="text-[13.5px] font-black text-slate-900 leading-tight">
                  Get Job
                </span>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#FF2E7E] text-white flex items-center justify-center shrink-0 shadow-xs">
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </button>

            {/* 6. Wallet */}
            <button
              type="button"
              onClick={() => handleItemClick('wallet')}
              className="w-full py-2.5 px-3 rounded-2xl bg-white hover:bg-slate-50/90 flex items-center justify-between transition-all active:scale-98 cursor-pointer group text-left border border-slate-100/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-b from-[#3B82F6] to-[#1D4ED8] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Wallet className="w-5 h-5 stroke-[2.3]" />
                </div>
                <span className="text-[13.5px] font-black text-slate-900 leading-tight">
                  Wallet
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </button>

            {/* 7. Refer & Earn */}
            <button
              type="button"
              onClick={() => handleItemClick('refer_earn')}
              className="w-full py-2.5 px-3 rounded-2xl bg-white hover:bg-slate-50/90 flex items-center justify-between transition-all active:scale-98 cursor-pointer group text-left border border-slate-100/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-b from-[#F97316] to-[#EA580C] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Users className="w-5 h-5 stroke-[2.3]" />
                </div>
                <span className="text-[13.5px] font-black text-slate-900 leading-tight">
                  Refer & Earn
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </button>

            {/* 8. Help & Support */}
            <button
              type="button"
              onClick={() => handleItemClick('help_support')}
              className="w-full py-2.5 px-3 rounded-2xl bg-white hover:bg-slate-50/90 flex items-center justify-between transition-all active:scale-98 cursor-pointer group text-left border border-slate-100/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-b from-[#FF2E5B] to-[#DC2626] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <HelpCircle className="w-5 h-5 stroke-[2.3]" />
                </div>
                <span className="text-[13.5px] font-black text-slate-900 leading-tight">
                  Help & Support
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </button>

          </div>

        </div>

        {/* ─── Bottom Section: Compliance Links + Full Width "Sign Out" Button ─── */}
        <div className="p-4 pt-1 border-t border-slate-100/80 bg-white sticky bottom-0 z-20 space-y-2">
          
          {/* Subtle Compliance Links */}
          <div className="flex items-center justify-center gap-2.5 text-[10.5px] font-semibold text-slate-400">
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

          {/* Sign Out Button (Gradient Red-to-Pink with icons on both sides) */}
          <button
            type="button"
            onClick={handleSignOutClick}
            className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#FF512F] via-[#DD2476] to-[#FF512F] text-white font-black text-sm flex items-center justify-between shadow-lg shadow-rose-500/25 active:scale-98 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <LogOut className="w-4 h-4 stroke-[2.4]" />
              <span>Sign Out</span>
            </div>
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>

      {/* ─── Avatar Image Link Modal ("gmail avtar nhi link dalna hai") ─── */}
      {showLinkModal && (
        <div className="fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="w-full max-w-sm bg-white rounded-3xl p-5 shadow-2xl border border-slate-100 space-y-4 animate-scaleUp">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Link2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-black text-slate-900">
                  Update Avatar via Link
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowLinkModal(false)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Apna koi bhi photo ya profile image ka URL link yahan paste karein:
            </p>

            {/* Input URL field */}
            <form onSubmit={handleSaveAvatarLink} className="space-y-3">
              <div>
                <input
                  type="url"
                  placeholder="https://example.com/my-photo.jpg"
                  value={imageLinkInput}
                  onChange={(e) => setImageLinkInput(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white"
                  autoFocus
                />
              </div>

              {/* Quick Preset Avatars */}
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  Ya select karein:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleSetPresetAvatar('/images/profile_student_avatar.png')}
                    className="p-2 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 flex items-center gap-2 text-left cursor-pointer active:scale-95 transition-all"
                  >
                    <img
                      src="/images/profile_student_avatar.png"
                      alt="3D Boy"
                      className="w-7 h-7 rounded-full object-cover shrink-0"
                    />
                    <span className="text-[11px] font-bold text-slate-800 leading-tight">
                      3D Boy Student
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSetPresetAvatar('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=faces')}
                    className="p-2 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 flex items-center gap-2 text-left cursor-pointer active:scale-95 transition-all"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=faces"
                      alt="Student"
                      className="w-7 h-7 rounded-full object-cover shrink-0"
                    />
                    <span className="text-[11px] font-bold text-slate-800 leading-tight">
                      Tech Student
                    </span>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="submit"
                  disabled={!imageLinkInput.trim()}
                  className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 text-white rounded-xl text-xs font-black flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer shadow-xs"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Save Link</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowLinkModal(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold active:scale-95 transition-all cursor-pointer"
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
