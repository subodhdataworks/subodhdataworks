import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowRight,
  User,
  Mail,
  GraduationCap,
  Gamepad2,
  BarChart3,
  CheckCircle2,
  Lock,
  Sparkles,
  AlertCircle,
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
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'student' | 'influencer'>('student');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setValidationError(null);
      setIsSubmitting(false);
      loadGoogleScript().catch(() => {});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Complete login helper
  const completeLogin = (name: string, userEmail: string, avatar: string, userRole: 'student' | 'influencer') => {
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

  // Google 1-Tap / Popup Sign-In (Direct, instant entry without phone prompt)
  const handleGoogleSignInClick = async () => {
    setIsSubmitting(true);
    setValidationError(null);

    try {
      const user = await requestGoogleAccountLogin();
      const existing = await findExistingUser(user.email, user.sub);

      const finalName = existing?.name || user.name || user.email?.split('@')[0] || 'Learner';
      const finalRole = existing?.role || role || 'student';
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
        const finalRole = existing?.role || role || 'student';
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

        // If user already typed an email or had one in storage, complete immediately
        const existingEmail = email.trim() || (typeof window !== 'undefined' ? localStorage.getItem('futureai_user_email') : '') || '';
        if (existingEmail && existingEmail.includes('@')) {
          const finalName = fullName.trim() || existingEmail.split('@')[0] || 'Learner';
          completeLogin(finalName, existingEmail, '', role);
          return;
        }

        setValidationError('Google popup was closed or unavailable in this browser. Tap "1-Click Instant Login" below to continue instantly!');
      }
    }
  };

  // Instant 1-Click Login (Zero friction bypass for mobile / webview)
  const handleInstantLogin = async () => {
    setIsSubmitting(true);
    setValidationError(null);
    try {
      const generatedEmail = email.trim() || `learner_${Math.floor(1000 + Math.random() * 9000)}@futureit.in`;
      const finalName = fullName.trim() || (email.trim() ? email.split('@')[0] : 'Learner');
      const finalRole = role || 'student';

      await recordUserInDatabase({
        uid: `usr_${generatedEmail.replace(/[^a-zA-Z0-9]/g, '_')}`,
        name: finalName,
        email: generatedEmail,
        role: finalRole,
        source: 'Direct',
      });

      completeLogin(finalName, generatedEmail, '', finalRole);
    } catch {
      const fallbackEmail = email.trim() || 'learner@futureit.in';
      const finalName = fullName.trim() || 'Learner';
      completeLogin(finalName, fallbackEmail, '', role);
    }
  };

  // Direct Email Login (Email Only, ultra-forgiving normalization)
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    let cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail) {
      return handleInstantLogin();
    }
    // Auto-normalize if user typed just name or number
    if (!cleanEmail.includes('@')) {
      cleanEmail = `${cleanEmail.replace(/[^a-zA-Z0-9._-]/g, '')}@futureit.in`;
    }

    setIsSubmitting(true);
    try {
      const existing = await findExistingUser(cleanEmail);
      const finalName = fullName.trim() || existing?.name || cleanEmail.split('@')[0] || 'Learner';
      const finalRole = existing?.role || role || 'student';
      const finalAvatar = existing?.avatar || '';

      await recordUserInDatabase({
        uid: existing?.uid || `usr_${cleanEmail.replace(/[^a-zA-Z0-9]/g, '_')}`,
        name: finalName,
        email: cleanEmail,
        avatar: finalAvatar || undefined,
        role: finalRole,
        source: 'Email',
      });

      completeLogin(finalName, cleanEmail, finalAvatar, finalRole);
    } catch (err: any) {
      console.warn('Email login fallback notice:', err);
      const finalName = fullName.trim() || cleanEmail.split('@')[0] || 'Learner';
      completeLogin(finalName, cleanEmail, '', role);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      {/* Modal Container with Glassmorphism & Mobile Scroll Support */}
      <div className="relative max-w-[460px] w-full max-h-[92vh] overflow-y-auto bg-white/95 backdrop-blur-2xl rounded-[28px] sm:rounded-[36px] p-5 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.22)] border border-white/80 text-center transition-all duration-300">
        
        {/* Soft Ambient Glow Orbs */}
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-52 h-52 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100/80 hover:bg-slate-200/80 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all shadow-sm cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Brand Logo Header */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
            <svg className="w-9 h-9" viewBox="0 0 44 44" fill="none">
              <defs>
                <linearGradient id="futureLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E3A8A" />
                  <stop offset="45%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
                <linearGradient id="futureCyanBar" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
              <path
                d="M10 6C10 4.89543 10.8954 4 12 4H30C34.4183 4 38 7.58172 38 12C38 14.7732 36.5912 17.2173 34.4534 18.636C33.4542 19.2991 32.2743 19.7212 31 19.8972V20H28C26.3431 20 25 21.3431 25 23C25 24.6569 26.3431 26 28 26H31C32.6569 26 34 27.3431 34 29C34 30.6569 32.6569 32 31 32H18V38C18 39.1046 17.1046 40 16 40H12C10.8954 40 10 39.1046 10 38V6Z"
                fill="url(#futureLogoGrad)"
              />
              <path
                d="M16 20H29C30.6569 20 32 21.3431 32 23C32 24.6569 30.6569 26 29 26H16V20Z"
                fill="url(#futureCyanBar)"
              />
            </svg>
          </div>

          <div className="text-left">
            <div className="flex items-center text-lg sm:text-xl font-black tracking-tight leading-none">
              <span className="text-slate-900">FUTURE&nbsp;</span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                IT INDUSTRY
              </span>
            </div>
            <div className="text-[11px] font-semibold text-slate-400 tracking-wider mt-1">
              Learn &bull; Build &bull; Grow
            </div>
          </div>
        </div>

        {/* ================= LOGIN FORM (EMAIL ONLY) ================= */}
        <div className="mt-6 animate-fadeIn">
          {/* Main Welcome Headings */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Welcome to
          </h2>
          <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight mt-0.5">
            FUTURE IT INDUSTRY
          </h1>

          {/* Curved Underline Brush Stroke */}
          <div className="flex justify-center -mt-0.5 mb-2.5">
            <svg className="w-40 h-3" viewBox="0 0 180 12" fill="none">
              <path
                d="M4 9.5C50 2.5 130 2.5 176 9.5"
                stroke="#3B82F6"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Subtitle */}
          <p className="text-slate-600 font-medium text-xs sm:text-sm leading-relaxed max-w-sm mx-auto mb-6">
            Sign in with your email to start learning, practice coding, and earn certificates.
          </p>

          {/* 1-Click Google Pill Button */}
          <button
            type="button"
            onClick={handleGoogleSignInClick}
            disabled={isSubmitting}
            className="w-full py-3.5 px-5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-between cursor-pointer group mb-5 active:scale-[0.99]"
          >
            {/* Colorful Google Multi-Color SVG Icon */}
            <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center">
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
            <span className="text-slate-900 font-bold text-base sm:text-lg tracking-tight flex-1 text-center">
              {isSubmitting ? 'Signing in with Google...' : 'Continue with Google'}
            </span>

            {/* Arrow Right Icon */}
            <ArrowRight className="w-5 h-5 text-slate-700 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>

          {/* Validation / Notice Error Banner with 1-Tap Fallback */}
          {validationError && (
            <div className="mb-4 p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs text-left shadow-xs">
              <div className="font-bold flex items-center gap-1.5 mb-2">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>{validationError}</span>
              </div>
              <button
                type="button"
                onClick={handleInstantLogin}
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-xs shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
              >
                <Sparkles className="w-4 h-4" />
                <span>⚡ 1-Click Instant Login (बिना किसी रुकावट तुरंत लॉगिन करें)</span>
              </button>
            </div>
          )}

          {/* Quick 1-Click Instant Entry Button */}
          <button
            type="button"
            onClick={handleInstantLogin}
            disabled={isSubmitting}
            className="w-full py-2.5 px-4 mb-3 rounded-xl bg-gradient-to-r from-sky-50 to-indigo-50 hover:from-sky-100 hover:to-indigo-100 border border-sky-200/90 text-sky-900 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98 shadow-2xs"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>⚡ Instant 1-Click Login (डायरेक्ट 1-क्लिक लॉगिन)</span>
          </button>

          {/* OR Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              OR SIGN IN WITH EMAIL
            </span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Direct Email Login Form */}
          <form onSubmit={handleEmailLogin} className="space-y-3 mb-5 text-left">
            <div>
              <label className="text-[11px] font-bold text-slate-700 mb-1 block">
                Full Name (नाम - Optional)
              </label>
              <div className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 flex items-center gap-2 focus-within:border-blue-500 focus-within:bg-white transition-all shadow-xs">
                <User className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full text-xs font-semibold text-slate-900 bg-transparent outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-700 mb-1 block">
                Email Address (ईमेल पता) *
              </label>
              <div className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 flex items-center gap-2 focus-within:border-blue-500 focus-within:bg-white transition-all shadow-xs">
                <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@gmail.com"
                  className="w-full text-xs font-bold text-slate-900 bg-transparent outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Role selector pill */}
            <div>
              <label className="text-[11px] font-bold text-slate-700 mb-1.5 block">
                Account Type (अकाउंट प्रकार)
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setRole('student')}
                  className={`py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold transition-all border ${
                    role === 'student'
                      ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  <span>Student Learner</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole('influencer')}
                  className={`py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold transition-all border ${
                    role === 'influencer'
                      ? 'bg-purple-50 border-purple-500 text-purple-700 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span>Refer & Earn</span>
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-black text-xs sm:text-sm shadow-md shadow-blue-500/25 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <span>{isSubmitting ? 'Logging in...' : 'Sign in with Email (ईमेल से लॉगिन करें)'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-medium pt-1">
              <Lock className="w-3 h-3 text-emerald-500" />
              <span>Direct 1-Click Entry • Only Email Required • No Phone Needed</span>
            </div>
          </form>

          {/* Bottom 3 Feature Pillars */}
          <div className="grid grid-cols-3 divide-x divide-slate-200/80 pt-3.5 border-t border-slate-100">
            <div className="px-1 text-center">
              <div className="w-7 h-7 mx-auto mb-1 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-sky-500" />
              </div>
              <div className="text-[11px] font-bold text-slate-800 leading-snug">
                Full Access
                <br />
                to Courses
              </div>
            </div>

            <div className="px-1 text-center">
              <div className="w-7 h-7 mx-auto mb-1 flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-[11px] font-bold text-slate-800 leading-snug">
                Play Coding
                <br />
                Games
              </div>
            </div>

            <div className="px-1 text-center">
              <div className="w-7 h-7 mx-auto mb-1 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-emerald-500" />
              </div>
              <div className="text-[11px] font-bold text-slate-800 leading-snug">
                Track Your
                <br />
                Progress
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
