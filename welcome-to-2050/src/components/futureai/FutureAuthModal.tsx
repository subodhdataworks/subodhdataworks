import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowRight,
  ShieldCheck,
  Users,
  Lock,
  Sparkles,
  AlertCircle,
  GraduationCap,
  BookOpen,
  Play,
  Star,
} from 'lucide-react';
import { loadGoogleScript, requestGoogleAccountLogin } from '../../services/googleAuthService';
import { recordUserInDatabase, loginWithGooglePopup, findExistingUser } from '../../services/realAuthService';

interface FutureAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (name: string, email?: string, avatar?: string, role?: 'student' | 'influencer') => void;
}

export const FutureAuthModal: React.FC<FutureAuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Preload Google Auth SDK on open
  useEffect(() => {
    if (isOpen) {
      setValidationError(null);
      setIsSubmitting(false);
      loadGoogleScript().catch(() => {});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Complete login helper
  const completeLogin = (name: string, userEmail: string, avatar: string, userRole: 'student' | 'influencer' = 'student') => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('futureai_user_name', name);
      localStorage.setItem('futureai_user_email', userEmail);
      if (avatar) localStorage.setItem('futureai_user_avatar', avatar);
      localStorage.setItem('futureai_user_role', userRole);
      localStorage.setItem('futureai_logged_in', 'true');

      if (userRole === 'influencer') {
        window.location.hash = '#income';
      } else {
        window.location.hash = '#dashboard';
      }
    }

    setIsSubmitting(false);
    onSuccess(name, userEmail, avatar, userRole);
    onClose();
  };

  // Google 1-Tap / Popup Sign-In
  const handleGoogleSignInClick = async () => {
    setIsSubmitting(true);
    setValidationError(null);

    try {
      const user = await requestGoogleAccountLogin();
      const existing = await findExistingUser(user.email, user.sub);

      const finalName = existing?.name || user.name || user.email?.split('@')[0] || 'Learner';
      const finalRole = existing?.role || 'student';
      const finalAvatar = user.picture || existing?.avatar || '';

      await recordUserInDatabase({
        uid: user.sub,
        name: finalName,
        email: user.email,
        avatar: finalAvatar,
        role: finalRole,
        source: 'Google',
      });

      completeLogin(finalName, user.email, finalAvatar, finalRole);
    } catch (err: any) {
      console.warn('Google 1-Click prompt issue, attempting Firebase popup fallback:', err);
      try {
        const fbUser = await loginWithGooglePopup();
        const existing = await findExistingUser(fbUser.email, fbUser.uid);

        const finalName = existing?.name || fbUser.name || fbUser.email?.split('@')[0] || 'Learner';
        const finalRole = existing?.role || 'student';
        const finalAvatar = fbUser.avatar || existing?.avatar || '';

        await recordUserInDatabase({
          uid: fbUser.uid,
          name: finalName,
          email: fbUser.email,
          avatar: finalAvatar,
          role: finalRole,
          source: 'Google',
        });

        completeLogin(finalName, fbUser.email, finalAvatar, finalRole);
      } catch (fbErr: any) {
        console.warn('Google login popup was blocked or unavailable:', fbErr);
        setIsSubmitting(false);
        setValidationError('Google popup was closed or unavailable in this browser. Tap below for instant entry:');
      }
    }
  };

  // Instant fallback for mobile webview
  const handleInstantBypass = async () => {
    setIsSubmitting(true);
    const guestEmail = `learner_${Math.floor(1000 + Math.random() * 9000)}@futureitindustry.com`;
    await recordUserInDatabase({
      uid: `usr_${Date.now()}`,
      name: 'Future Learner',
      email: guestEmail,
      role: 'student',
      source: 'Direct',
    });
    completeLogin('Future Learner', guestEmail, '', 'student');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      {/* Exact Card matching media_1792432072658_f62315e9.png */}
      <div className="relative max-w-[440px] w-full bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.25)] border border-slate-100 text-center transition-all duration-300">
        
        {/* Circular Close Button at Top Right */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all cursor-pointer z-10"
        >
          <X className="w-5 h-5 stroke-[2.2]" />
        </button>

        {/* ── Central Visual Composition: 3D Google Badge with Learning Elements ── */}
        <div className="relative w-28 h-28 mx-auto mt-2 mb-4 flex items-center justify-center">
          
          {/* Subtle Back Glow */}
          <div className="absolute inset-2 bg-gradient-to-tr from-blue-400/20 via-sky-300/30 to-purple-400/20 rounded-3xl blur-xl" />

          {/* Main White Elevated Badge */}
          <div className="relative w-20 h-20 bg-white rounded-3xl shadow-[0_12px_32px_rgba(37,99,235,0.18)] border border-slate-100 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
            {/* Google G Logo Multi-Color SVG */}
            <svg className="w-10 h-10" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>

            {/* Sparkle Accent inside badge */}
            <div className="absolute top-2 right-2">
              <Sparkles className="w-3 h-3 text-amber-400" />
            </div>
          </div>

          {/* Floating Accents matching screenshot */}
          {/* Top-Right: Graduation Cap */}
          <div className="absolute -top-1 right-2 w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 transform rotate-12 animate-bounce" style={{ animationDuration: '3s' }}>
            <GraduationCap className="w-4 h-4 stroke-[2.4]" />
          </div>

          {/* Bottom-Left: Open Blue Book */}
          <div className="absolute bottom-0 -left-1 w-7 h-7 rounded-lg bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-sky-500/30 transform -rotate-12">
            <BookOpen className="w-3.5 h-3.5 stroke-[2.4]" />
          </div>

          {/* Bottom-Right: Purple Play Icon */}
          <div className="absolute bottom-0 right-1 w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-500 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-purple-500/30 transform rotate-6">
            <Play className="w-3 h-3 fill-white stroke-none ml-0.5" />
          </div>

          {/* Top-Left: Golden Star */}
          <div className="absolute top-1 left-2 w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-400 to-yellow-500 text-white flex items-center justify-center shadow-md shadow-amber-400/30 transform -rotate-6">
            <Star className="w-3.5 h-3.5 fill-white stroke-none" />
          </div>
        </div>

        {/* ── Title & Subtitle matching mockup ── */}
        <h2 className="text-2xl sm:text-[26px] font-black text-slate-900 tracking-tight leading-snug">
          Sign In with Google
        </h2>
        <p className="text-slate-500 font-medium text-xs sm:text-[13px] leading-relaxed max-w-xs mx-auto mt-1 mb-6">
          Access your learning dashboard with Future IT Industry.
        </p>

        {/* ── Error Banner (if any) ── */}
        {validationError && (
          <div className="mb-4 p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs text-left">
            <div className="font-semibold flex items-center gap-1.5 mb-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{validationError}</span>
            </div>
            <button
              type="button"
              onClick={handleInstantBypass}
              className="w-full py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-98 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Continue (1-Click Guest Access)</span>
            </button>
          </div>
        )}

        {/* ── Big "Continue with Google ->" Button ── */}
        <button
          type="button"
          onClick={handleGoogleSignInClick}
          disabled={isSubmitting}
          className="w-full py-3.5 px-5 rounded-2xl bg-white hover:bg-slate-50 border-2 border-slate-200/90 hover:border-slate-300 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] transition-all duration-200 flex items-center justify-between cursor-pointer group active:scale-[0.99]"
        >
          {/* Multi-Color Google G SVG */}
          <div className="w-7 h-7 shrink-0 flex items-center justify-center">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
          </div>

          {/* Button Text */}
          <span className="text-slate-900 font-bold text-base tracking-tight flex-1 text-center">
            {isSubmitting ? 'Signing in with Google...' : 'Continue with Google'}
          </span>

          {/* Arrow Right */}
          <ArrowRight className="w-5 h-5 text-slate-700 group-hover:translate-x-1 transition-transform shrink-0" />
        </button>

        {/* ── 3 Feature Pillars Row matching mockup exactly ── */}
        <div className="grid grid-cols-3 gap-2 mt-8 mb-6 pt-6 border-t border-slate-100">
          
          {/* Pillar 1: Fast & Secure */}
          <div className="flex flex-col items-center text-center px-1">
            <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
              <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="text-xs font-black text-slate-900 leading-tight">Fast & Secure</span>
            <span className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">One click login</span>
          </div>

          {/* Pillar 2: No Extra Steps */}
          <div className="flex flex-col items-center text-center px-1">
            <div className="w-9 h-9 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-2">
              <Users className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="text-xs font-black text-slate-900 leading-tight">No Extra Steps</span>
            <span className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">Quick access</span>
          </div>

          {/* Pillar 3: Your Data is Safe */}
          <div className="flex flex-col items-center text-center px-1">
            <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
              <Lock className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="text-xs font-black text-slate-900 leading-tight">Your Data is Safe</span>
            <span className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">We never share your information</span>
          </div>

        </div>

        {/* ── Footer Terms and Privacy Links matching mockup ── */}
        <div className="text-[11px] text-slate-400 font-medium">
          <span>By signing in, you agree to our </span>
          <a
            href="#terms"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              if (typeof window !== 'undefined') window.location.hash = '#terms';
            }}
            className="text-blue-600 hover:underline font-semibold"
          >
            Terms of Service
          </a>
          <span> and </span>
          <a
            href="#privacy"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              if (typeof window !== 'undefined') window.location.hash = '#terms';
            }}
            className="text-blue-600 hover:underline font-semibold"
          >
            Privacy Policy
          </a>
          <span>.</span>
        </div>

      </div>
    </div>
  );
};
