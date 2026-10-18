import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowRight,
  User,
  Phone,
  ChevronDown,
  GraduationCap,
  Gamepad2,
  BarChart3,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { loadGoogleScript, requestGoogleAccountLogin } from '../../services/googleAuthService';
import { recordUserInDatabase, loginWithGooglePopup } from '../../services/realAuthService';

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
  // Step 1 = Google Sign-in card; Step 2 = Profile completion & Mobile number save
  const [step, setStep] = useState<1 | 2>(1);
  const [googleData, setGoogleData] = useState<{
    uid: string;
    name: string;
    email: string;
    avatar?: string;
  } | null>(null);

  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [role, setRole] = useState<'student' | 'influencer'>('student');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setValidationError(null);
      setIsSubmitting(false);
      loadGoogleScript().catch(() => {});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Step 1: Handle Google Sign-in Click
  const handleGoogleSignInClick = async () => {
    setIsSubmitting(true);
    setValidationError(null);

    try {
      const user = await requestGoogleAccountLogin();
      setGoogleData({
        uid: user.sub,
        name: user.name,
        email: user.email,
        avatar: user.picture,
      });
      setFullName(user.name || user.email?.split('@')[0] || 'Learner');
      setIsSubmitting(false);
      setStep(2);
    } catch (err: any) {
      console.warn('Google 1-Click prompt issue, attempting Firebase popup fallback:', err);
      try {
        const fbUser = await loginWithGooglePopup();
        setGoogleData({
          uid: fbUser.uid,
          name: fbUser.name,
          email: fbUser.email,
          avatar: fbUser.avatar,
        });
        setFullName(fbUser.name || 'Learner');
        setIsSubmitting(false);
        setStep(2);
      } catch (fbErr: any) {
        console.warn('Transitioning to Step 2 for resilient completion:', fbErr);
        // Student is never blocked: seamlessly proceed to Step 2
        setIsSubmitting(false);
        setStep(2);
      }
    }
  };

  // Step 2: Handle Profile Completion & Mobile Number Save
  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const cleanPhone = mobileNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setValidationError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    const finalName = fullName.trim() || googleData?.name || 'Learner';
    const finalEmail = googleData?.email || '';
    const finalAvatar = googleData?.avatar || '';

    try {
      // 1. Record user in local master registry & Firestore Cloud Database
      await recordUserInDatabase({
        uid: googleData?.uid || `usr_${cleanPhone}`,
        name: finalName,
        email: finalEmail || undefined,
        phone: cleanPhone,
        avatar: finalAvatar || undefined,
        role: role,
        source: finalEmail ? 'Google' : 'Phone',
      });

      // 2. Save session telemetry
      if (typeof window !== 'undefined') {
        localStorage.setItem('futureai_user_name', finalName);
        if (finalEmail) localStorage.setItem('futureai_user_email', finalEmail);
        if (finalAvatar) localStorage.setItem('futureai_user_avatar', finalAvatar);
        localStorage.setItem('futureai_user_phone', cleanPhone);
        localStorage.setItem('futureai_user_role', role);
        localStorage.setItem('futureai_logged_in', 'true');

        if (role === 'influencer') {
          window.location.hash = '#income';
        } else {
          window.location.hash = '#dashboard';
        }
      }

      setIsSubmitting(false);
      onSuccess(finalName, finalEmail, finalAvatar, role);
      onClose();
    } catch (err: any) {
      console.error('Error saving user profile:', err);
      setIsSubmitting(false);
      // Still allow learner to proceed
      onSuccess(finalName, finalEmail, finalAvatar, role);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      {/* Modal Container with Glassmorphism */}
      <div className="relative max-w-[480px] w-full bg-white/95 backdrop-blur-2xl rounded-[32px] sm:rounded-[36px] p-7 sm:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.22)] border border-white/80 overflow-hidden text-center transition-all duration-300">
        
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
          {/* Stylized Modern 'F' Logo */}
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

        {/* ================= STEP 1: SIGN IN WITH GOOGLE ================= */}
        {step === 1 && (
          <div className="mt-7 animate-fadeIn">
            {/* Main Welcome Headings */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Welcome to
            </h2>
            <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight mt-0.5">
              FUTURE IT INDUSTRY
            </h1>

            {/* Curved Underline Brush Stroke */}
            <div className="flex justify-center -mt-0.5 mb-3">
              <svg className="w-44 h-3.5" viewBox="0 0 180 12" fill="none">
                <path
                  d="M4 9.5C50 2.5 130 2.5 176 9.5"
                  stroke="#3B82F6"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Subtitle */}
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed max-w-sm mx-auto mb-7">
              Sign in to start learning, play coding games,
              <br />
              and track your progress.
            </p>

            {/* 1-Click Google Pill Button */}
            <button
              type="button"
              onClick={handleGoogleSignInClick}
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-between cursor-pointer group mb-8 active:scale-[0.99]"
            >
              {/* Colorful Google Multi-Color SVG Icon */}
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 24 24">
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
              <span className="text-slate-900 font-bold text-lg sm:text-xl tracking-tight flex-1 text-center">
                {isSubmitting ? 'Opening Google...' : 'Sign in with Google'}
              </span>

              {/* Arrow Right Icon */}
              <ArrowRight className="w-6 h-6 text-slate-700 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </button>

            {/* Bottom 3 Feature Pillars */}
            <div className="grid grid-cols-3 divide-x divide-slate-200/80 pt-4 border-t border-slate-100">
              {/* Feature 1 */}
              <div className="px-2 text-center">
                <div className="w-8 h-8 mx-auto mb-1.5 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-sky-500" />
                </div>
                <div className="text-xs font-bold text-slate-800 leading-snug">
                  Full Access
                  <br />
                  to Courses
                </div>
              </div>

              {/* Feature 2 */}
              <div className="px-2 text-center">
                <div className="w-8 h-8 mx-auto mb-1.5 flex items-center justify-center">
                  <Gamepad2 className="w-7 h-7 text-purple-600" />
                </div>
                <div className="text-xs font-bold text-slate-800 leading-snug">
                  Play Coding
                  <br />
                  Games
                </div>
              </div>

              {/* Feature 3 */}
              <div className="px-2 text-center">
                <div className="w-8 h-8 mx-auto mb-1.5 flex items-center justify-center">
                  <BarChart3 className="w-7 h-7 text-emerald-500" />
                </div>
                <div className="text-xs font-bold text-slate-800 leading-snug">
                  Track Your
                  <br />
                  Progress
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 2: PROFILE & MOBILE NUMBER SAVE ================= */}
        {step === 2 && (
          <form onSubmit={handleProfileSubmit} className="mt-5 text-left animate-fadeIn">
            {/* Headings */}
            <div className="text-center mb-5">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Welcome!
              </h2>
              <p className="text-base sm:text-lg font-bold text-slate-700 mt-1">
                Let's complete your profile to continue
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Just a few details to personalize your learning experience.
              </p>
            </div>

            {/* Full Name Input */}
            <div className="mb-3.5">
              <label className="text-xs font-bold text-slate-800 mb-1.5 block">
                Full Name
              </label>
              <div className="w-full bg-white border border-slate-200/90 rounded-2xl py-3 px-4 flex items-center gap-3 shadow-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                <User className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-slate-900 font-semibold text-sm placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Mobile Number Input with +91 Country Code */}
            <div className="mb-3.5">
              <label className="text-xs font-bold text-slate-800 mb-1.5 block">
                Mobile Number
              </label>
              <div className="w-full bg-white border border-slate-200/90 rounded-2xl py-2 px-3.5 flex items-center gap-2.5 shadow-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />
                
                {/* 🇮🇳 India Flag + Country Code */}
                <div className="flex items-center gap-1.5 px-1 py-1 rounded-lg text-slate-800 font-bold text-sm select-none">
                  <svg className="w-5 h-3.5 rounded-sm overflow-hidden flex-shrink-0 shadow-xs" viewBox="0 0 640 480">
                    <path fill="#f93" d="M0 0h640v160H0z" />
                    <path fill="#fff" d="M0 160h640v160H0z" />
                    <path fill="#128807" d="M0 320h640v160H0z" />
                    <circle cx="320" cy="240" r="40" fill="none" stroke="#000088" strokeWidth="6" />
                  </svg>
                  <span>+91</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </div>

                {/* Subtle Divider */}
                <div className="h-6 w-px bg-slate-200 flex-shrink-0" />

                {/* Input Field */}
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="Enter your mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                  className="w-full bg-transparent border-none outline-none text-slate-900 font-semibold text-sm placeholder:text-slate-400 tracking-wide"
                />
              </div>
            </div>

            {/* Role Selector: "I am a" */}
            <div className="mb-4">
              <label className="text-xs font-bold text-slate-800 mb-2 block">
                I am a
              </label>

              <div className="grid grid-cols-2 gap-3">
                {/* Student Card */}
                <div
                  onClick={() => setRole('student')}
                  className={`rounded-2xl p-3 sm:p-3.5 flex items-center gap-2.5 cursor-pointer transition-all ${
                    role === 'student'
                      ? 'border-2 border-blue-500 bg-blue-50/60 shadow-sm'
                      : 'border border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-extrabold text-slate-900 leading-tight">
                      Student
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight truncate">
                      I want to learn and build skills
                    </div>
                  </div>
                  {role === 'student' ? (
                    <CheckCircle2 className="w-5 h-5 text-blue-600 fill-blue-600 text-white flex-shrink-0 ml-1" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex-shrink-0 ml-1" />
                  )}
                </div>

                {/* Influencer Card */}
                <div
                  onClick={() => setRole('influencer')}
                  className={`rounded-2xl p-3 sm:p-3.5 flex items-center gap-2.5 cursor-pointer transition-all ${
                    role === 'influencer'
                      ? 'border-2 border-purple-500 bg-purple-50/60 shadow-sm'
                      : 'border border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm relative">
                    <User className="w-5 h-5 text-white" />
                    <span className="absolute -bottom-1 -right-1 text-[10px] leading-none">⭐</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-extrabold text-slate-900 leading-tight">
                      Influencer
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight truncate">
                      I want to refer and earn
                    </div>
                  </div>
                  {role === 'influencer' ? (
                    <CheckCircle2 className="w-5 h-5 text-purple-600 fill-purple-600 text-white flex-shrink-0 ml-1" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex-shrink-0 ml-1" />
                  )}
                </div>
              </div>
            </div>

            {/* Validation Error Message */}
            {validationError && (
              <p className="text-xs text-rose-600 font-bold mb-3 text-center bg-rose-50 border border-rose-200 py-1.5 px-3 rounded-xl">
                {validationError}
              </p>
            )}

            {/* Continue Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:shadow-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isSubmitting ? 'Saving Profile...' : 'Continue'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Footer Trust Indicator */}
            <div className="flex items-center justify-center gap-1.5 mt-3.5 text-slate-400">
              <Lock className="w-3.5 h-3.5" />
              <span className="text-xs font-medium text-slate-500">
                Your information is safe with us.
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
