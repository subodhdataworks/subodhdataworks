import React, { useState } from 'react';
import {
  X,
  LogOut,
  User,
  BarChart2,
  Award,
  Briefcase,
  Wallet,
  Users,
  Settings,
  HelpCircle,
  ChevronRight,
  Camera,
  Edit3,
  Mail,
  Crown,
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
  const [isEditing, setIsEditing] = useState(false);

  // Read stored user credentials from Gmail / Google auth
  const storedEmail = typeof window !== 'undefined' ? localStorage.getItem('futureai_user_email') : null;
  const storedName = typeof window !== 'undefined' ? localStorage.getItem('futureai_user_name') : null;
  const storedAvatar = typeof window !== 'undefined' ? localStorage.getItem('futureai_user_avatar') : null;
  const storedRole = typeof window !== 'undefined' ? localStorage.getItem('futureai_user_role') || 'Student' : 'Student';

  // State for editable profile fields
  const [displayName, setDisplayName] = useState(storedName || (userName !== 'Learner' ? userName : 'Subodh Kumar'));
  const [displayEmail, setDisplayEmail] = useState(storedEmail || 'subodh.mscit@gmail.com');
  const [avatarUrl, setAvatarUrl] = useState(
    storedAvatar ||
    // If student logged in with Gmail, use their Google photo or high quality avatar
    '/images/profile_student_avatar.png'
  );
  const [editAvatarInput, setEditAvatarInput] = useState('');

  if (!isOpen) return null;

  const playTactile = () => {
    try {
      playClick?.();
    } catch {}
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    playTactile();
    if (typeof window !== 'undefined') {
      localStorage.setItem('futureai_user_name', displayName);
      localStorage.setItem('futureai_user_email', displayEmail);
      if (editAvatarInput.trim()) {
        localStorage.setItem('futureai_user_avatar', editAvatarInput.trim());
        setAvatarUrl(editAvatarInput.trim());
      }
    }
    setIsEditing(false);
  };

  const handleAvatarFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setAvatarUrl(result);
          if (typeof window !== 'undefined') {
            localStorage.setItem('futureai_user_avatar', result);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleItemClick = (actionId: string) => {
    playTactile();
    onClose();

    if (actionId === 'profile') {
      setIsEditing(true);
    } else if (actionId === 'learning_progress') {
      if (typeof window !== 'undefined') window.location.hash = '#dashboard';
    } else if (actionId === 'certificates') {
      if (typeof window !== 'undefined') window.location.hash = '#certificates';
    } else if (actionId === 'internship') {
      if (typeof window !== 'undefined') window.location.hash = '#internship';
    } else if (actionId === 'get_job') {
      if (onOpenPlacement) onOpenPlacement();
      else if (typeof window !== 'undefined') window.location.hash = '#placement';
    } else if (actionId === 'wallet_earnings') {
      if (onOpenEarn) onOpenEarn();
      else if (typeof window !== 'undefined') window.location.hash = '#earnings';
    } else if (actionId === 'refer_earn') {
      if (onOpenEarn) onOpenEarn();
      else if (typeof window !== 'undefined') window.location.hash = '#earnings';
    } else if (actionId === 'settings') {
      alert('⚙️ Settings\n• App Version: 2.4.0 (PWA)\n• Push Notifications: Enabled\n• Audio SFX: Enabled\n• Dark Mode: Auto System');
    } else if (actionId === 'help_support') {
      if (onOpenAdvisor) onOpenAdvisor();
      else alert('💬 Need Help?\nContact 24/7 AI Career Mentor or WhatsApp support at +91 98765 43210');
    }
  };

  const handleSignOutClick = () => {
    playTactile();
    if (window.confirm('Are you sure you want to sign out from this device?')) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('futureai_logged_in');
        localStorage.removeItem('futureai_user_avatar');
      }
      onClose();
      if (onLogout) onLogout();
      else window.location.reload();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-xs select-none font-sans animate-fadeIn">
      {/* Tap backdrop to close */}
      <div className="flex-1" onClick={onClose} />

      {/* Main Profile Drawer Container (Matching media_1792388968518_e9f7cb71.png) */}
      <div className="relative w-full max-w-[340px] sm:max-w-[360px] h-full bg-white shadow-2xl flex flex-col justify-between overflow-y-auto no-scrollbar animate-slideLeft text-left">
        
        {/* Soft Pastel Iridescent Gradient Glow on Top Header */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-sky-100/60 via-purple-50/40 to-transparent pointer-events-none" />

        <div className="relative z-10 px-4 pt-4 pb-3 space-y-4">
          
          {/* Top Bar: Title "Profile" + Close "X" Button */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Profile
            </h1>
            <button
              type="button"
              onClick={() => {
                playTactile();
                onClose();
              }}
              className="w-9 h-9 rounded-full bg-white shadow-xs border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-slate-950 active:scale-90 transition-transform cursor-pointer"
              aria-label="Close Profile"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User Header Section: Avatar with Camera badge + Edit Profile Button + Name + Gmail + Student */}
          <div className="flex items-start justify-between gap-3 pt-1">
            <div className="flex items-center gap-3">
              {/* Circular Avatar with Camera Badge */}
              <div className="relative shrink-0">
                <img
                  src={avatarUrl}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/profile_student_avatar.png';
                  }}
                  alt={displayName}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md bg-blue-100"
                />
                <label
                  htmlFor="avatar-upload-input"
                  className="absolute -bottom-0.5 -right-0.5 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs border-2 border-white cursor-pointer active:scale-90 transition-transform"
                  title="Upload Gmail Profile Picture"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <input
                    id="avatar-upload-input"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarFileSelect}
                  />
                </label>
              </div>

              {/* Name, Gmail, Role */}
              <div className="min-w-0">
                <h2 className="text-base font-black text-slate-900 leading-snug truncate">
                  {displayName}
                </h2>
                
                {/* Gmail row */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium truncate mt-0.5">
                  {/* Gmail Logo SVG */}
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span className="truncate">{displayEmail}</span>
                </div>

                {/* Student Badge */}
                <div className="mt-1">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 text-[10px] font-extrabold">
                    <Crown className="w-3 h-3 text-blue-600" />
                    <span>{storedRole === 'influencer' ? 'Creator Partner' : 'Student'}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Edit Profile Button */}
            <button
              type="button"
              onClick={() => {
                playTactile();
                setIsEditing(!isEditing);
              }}
              className="px-2.5 py-1 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 text-[10.5px] font-bold flex items-center gap-1 active:scale-95 transition-all cursor-pointer shrink-0"
            >
              <Edit3 className="w-3 h-3" />
              <span>Edit Profile</span>
            </button>
          </div>

          {/* Inline Edit Profile Form (Toggled when user clicks Edit Profile) */}
          {isEditing && (
            <form onSubmit={handleSaveProfile} className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 animate-fadeIn">
              <div className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Update Personal Details</span>
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 block mb-0.5">Full Name</label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 block mb-0.5">Gmail / Email</label>
                <input
                  type="email"
                  value={displayEmail}
                  onChange={(e) => setDisplayEmail(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 block mb-0.5">Gmail Avatar URL (Optional)</label>
                <input
                  type="url"
                  placeholder="Paste Google photo URL"
                  value={editAvatarInput}
                  onChange={(e) => setEditAvatarInput(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="submit"
                  className="flex-1 py-1.5 bg-blue-600 text-white rounded-xl text-xs font-black flex items-center justify-center gap-1 active:scale-95 transition-all cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Save Changes</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-3 py-1.5 bg-slate-200 text-slate-700 rounded-xl text-xs font-bold active:scale-95 transition-all cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {/* ─── 9 Menu Item Rows (Exact Match to media_1792388968518_e9f7cb71.png) ─── */}
          <div className="space-y-1.5 pt-1">
            
            {/* 1. Profile */}
            <button
              type="button"
              onClick={() => handleItemClick('profile')}
              className="w-full p-2.5 rounded-2xl hover:bg-slate-50 flex items-center justify-between transition-colors active:scale-98 cursor-pointer group text-left border border-slate-100"
            >
              <div className="flex items-center gap-3 min-w-0 pr-1">
                <div className="w-10 h-10 rounded-2xl bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <User className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-black text-slate-900 leading-tight">Profile</h3>
                  <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5 truncate">
                    View and edit your personal information
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </button>

            {/* 2. Learning Progress */}
            <button
              type="button"
              onClick={() => handleItemClick('learning_progress')}
              className="w-full p-2.5 rounded-2xl hover:bg-slate-50 flex items-center justify-between transition-colors active:scale-98 cursor-pointer group text-left border border-slate-100"
            >
              <div className="flex items-center gap-3 min-w-0 pr-1">
                <div className="w-10 h-10 rounded-2xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-black text-slate-900 leading-tight">Learning Progress</h3>
                  <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5 truncate">
                    Check your courses and progress
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </button>

            {/* 3. Certificates */}
            <button
              type="button"
              onClick={() => handleItemClick('certificates')}
              className="w-full p-2.5 rounded-2xl hover:bg-slate-50 flex items-center justify-between transition-colors active:scale-98 cursor-pointer group text-left border border-slate-100"
            >
              <div className="flex items-center gap-3 min-w-0 pr-1">
                <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Award className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-black text-slate-900 leading-tight">Certificates</h3>
                  <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5 truncate">
                    View and download your certificates
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </button>

            {/* 4. Internship */}
            <button
              type="button"
              onClick={() => handleItemClick('internship')}
              className="w-full p-2.5 rounded-2xl hover:bg-slate-50 flex items-center justify-between transition-colors active:scale-98 cursor-pointer group text-left border border-slate-100"
            >
              <div className="flex items-center gap-3 min-w-0 pr-1">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-black text-slate-900 leading-tight">Internship</h3>
                  <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5 truncate">
                    Internship details and performance
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </button>

            {/* 5. Get Job */}
            <button
              type="button"
              onClick={() => handleItemClick('get_job')}
              className="w-full p-2.5 rounded-2xl hover:bg-slate-50 flex items-center justify-between transition-colors active:scale-98 cursor-pointer group text-left border border-slate-100"
            >
              <div className="flex items-center gap-3 min-w-0 pr-1">
                <div className="w-10 h-10 rounded-2xl bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-black text-slate-900 leading-tight">Get Job</h3>
                  <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5 truncate">
                    Job opportunities and placement support
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </button>

            {/* 6. Wallet & Earnings */}
            <button
              type="button"
              onClick={() => handleItemClick('wallet_earnings')}
              className="w-full p-2.5 rounded-2xl hover:bg-slate-50 flex items-center justify-between transition-colors active:scale-98 cursor-pointer group text-left border border-slate-100"
            >
              <div className="flex items-center gap-3 min-w-0 pr-1">
                <div className="w-10 h-10 rounded-2xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Wallet className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-black text-slate-900 leading-tight">Wallet & Earnings</h3>
                  <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5 truncate">
                    View your earnings and transactions
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </button>

            {/* 7. Refer & Earn */}
            <button
              type="button"
              onClick={() => handleItemClick('refer_earn')}
              className="w-full p-2.5 rounded-2xl hover:bg-slate-50 flex items-center justify-between transition-colors active:scale-98 cursor-pointer group text-left border border-slate-100"
            >
              <div className="flex items-center gap-3 min-w-0 pr-1">
                <div className="w-10 h-10 rounded-2xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Users className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-black text-slate-900 leading-tight">Refer & Earn</h3>
                  <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5 truncate">
                    Get your referral link and track earnings
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </button>

            {/* 8. Settings */}
            <button
              type="button"
              onClick={() => handleItemClick('settings')}
              className="w-full p-2.5 rounded-2xl hover:bg-slate-50 flex items-center justify-between transition-colors active:scale-98 cursor-pointer group text-left border border-slate-100"
            >
              <div className="flex items-center gap-3 min-w-0 pr-1">
                <div className="w-10 h-10 rounded-2xl bg-slate-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Settings className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-black text-slate-900 leading-tight">Settings</h3>
                  <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5 truncate">
                    App preferences and account settings
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </button>

            {/* 9. Help & Support */}
            <button
              type="button"
              onClick={() => handleItemClick('help_support')}
              className="w-full p-2.5 rounded-2xl hover:bg-slate-50 flex items-center justify-between transition-colors active:scale-98 cursor-pointer group text-left border border-slate-100"
            >
              <div className="flex items-center gap-3 min-w-0 pr-1">
                <div className="w-10 h-10 rounded-2xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-black text-slate-900 leading-tight">Help & Support</h3>
                  <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5 truncate">
                    Get help or contact our support team
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </button>
          </div>
        </div>

        {/* ─── Legal / RBI Mandated Policy Links ─── */}
        <div className="px-4 py-2 flex items-center justify-center gap-3 text-[11px] font-medium text-slate-400 border-t border-slate-100 bg-slate-50/70">
          <a
            href="#contact-us"
            onClick={(e) => {
              e.preventDefault();
              onClose();
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
              onClose();
              window.location.hash = '#terms';
            }}
            className="hover:text-blue-600 underline underline-offset-2 transition-colors"
          >
            Terms & Conditions
          </a>
        </div>

        {/* ─── Bottom Full-Width "Sign Out" Button (Matching media_1792388968518_e9f7cb71.png) ─── */}
        <div className="p-4 pt-2 border-t border-slate-100 bg-white sticky bottom-0 z-20">
          <button
            type="button"
            onClick={handleSignOutClick}
            className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-500/25 active:scale-98 transition-all cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>

      </div>
    </div>
  );
};
