import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  ArrowRight,
  Mail,
  Lock,
  Check,
  AlertCircle,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { getRedirectResult } from 'firebase/auth';
import { auth } from '../../services/firebase';
import {
  loginWithGooglePopup,
  loginWithEmailFirebase,
  recordUserInDatabase,
} from '../../services/realAuthService';
import { BRAND } from '../../config/brand';

export interface FutureAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (name: string, email?: string, avatar?: string, role?: 'student' | 'influencer') => void;
  message?: string;
  redirectUrl?: string;
}

export type AuthLoadingStage = 'idle' | 'connecting' | 'verifying' | 'preparing' | 'success';

/**
 * ─── PREMIUM ANIMATED CIRCULAR LOGIN LOADER ───
 * Blue-to-cyan gradient rotating ring with glowing halo,
 * subtle pulsing Future IT Industry logo in the center,
 * and dynamic stage message progression.
 */
const LoginProcessingLoader: React.FC<{
  stage: AuthLoadingStage;
  customMessage?: string;
}> = ({ stage, customMessage }) => {
  const isSuccess = stage === 'success';

  const getStageTitle = () => {
    if (customMessage) return customMessage;
    switch (stage) {
      case 'connecting':
        return 'Connecting securely...';
      case 'verifying':
        return 'Verifying your account...';
      case 'preparing':
        return 'Preparing your dashboard...';
      case 'success':
        return 'Login successful!';
      default:
        return 'Signing You In...';
    }
  };

  return (
    <div
      className="absolute inset-0 z-50 bg-white/95 backdrop-blur-md rounded-[24px] flex flex-col items-center justify-center p-6 sm:p-8 text-center animate-fadeIn select-none"
      role="status"
      aria-live="polite"
      aria-busy={!isSuccess}
    >
      {/* ── Circular Spinning Ring with Future IT Logo in Center ── */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center mb-5">
        {/* Soft glowing ambient halo */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/25 via-cyan-400/25 to-indigo-500/25 blur-xl animate-pulse motion-reduce:animate-none" />

        {/* Outer Circular Ring */}
        {!isSuccess ? (
          <svg
            className="w-full h-full -rotate-90 animate-spin motion-reduce:animate-none duration-1000"
            viewBox="0 0 100 100"
          >
            <defs>
              <linearGradient id="loginRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1a73e8" />
                <stop offset="50%" stopColor="#00d2ff" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
            {/* Background track circle */}
            <circle
              cx="50"
              cy="50"
              r="44"
              stroke="#E8F1FC"
              strokeWidth="5"
              fill="none"
            />
            {/* Animated Gradient Progress Arc */}
            <circle
              cx="50"
              cy="50"
              r="44"
              stroke="url(#loginRingGrad)"
              strokeWidth="5.5"
              strokeDasharray="276"
              strokeDashoffset="75"
              strokeLinecap="round"
              fill="none"
              className="drop-shadow-[0_0_8px_rgba(0,210,255,0.6)]"
            />
          </svg>
        ) : (
          /* Success Ring Checkmark */
          <div className="w-full h-full rounded-full border-4 border-emerald-500 bg-emerald-50 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.4)] animate-scaleUp">
            <Check className="w-12 h-12 text-emerald-600 stroke-[3.5]" />
          </div>
        )}

        {/* Center Logo with Subtle Pulsing Animation */}
        {!isSuccess && (
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center p-2.5 animate-pulse motion-reduce:animate-none">
              <img
                src={BRAND.emblem || '/images/brand/future_it_emblem.png'}
                alt="Future IT Industry"
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
          </div>
        )}
      </div>

      {/* Main Title */}
      <h3 className="text-xl sm:text-2xl font-black text-[#10234A] tracking-tight">
        {isSuccess ? 'Login Successful! 🎉' : 'Signing You In...'}
      </h3>

      {/* Dynamic Stage Message */}
      <div className="mt-2.5 flex items-center justify-center gap-2">
        {!isSuccess && (
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping motion-reduce:animate-none" />
        )}
        <span className="text-sm font-bold text-[#1a73e8]">
          {getStageTitle()}
        </span>
      </div>

      {/* Subtitle */}
      <p className="mt-1.5 text-xs text-slate-500 max-w-[280px] leading-relaxed">
        {isSuccess
          ? 'Preparing your learning environment...'
          : 'Please wait while we securely connect your account.'}
      </p>
    </div>
  );
};

export const FutureAuthModal: React.FC<FutureAuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  message,
  redirectUrl,
}) => {
  // Submission & Loading State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingStage, setLoadingStage] = useState<AuthLoadingStage>('idle');
  const [customStageText, setCustomStageText] = useState<string | undefined>();
  const [validationError, setValidationError] = useState<string | null>(null);

  // Email Login State
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Safety timeout reference to avoid infinite loading
  const timeoutRef = useRef<any>(null);

  const clearAuthTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Reset state on open
  useEffect(() => {
    if (isOpen) {
      setValidationError(null);
      setIsSubmitting(false);
      setLoadingStage('idle');
      setCustomStageText(undefined);
      setEmailInput('');
      setPasswordInput('');
      setShowPassword(false);
      clearAuthTimeout();
    }
    return () => clearAuthTimeout();
  }, [isOpen]);

  // Handle Google OAuth Redirect Result (for Mobile / Webview fallback)
  useEffect(() => {
    let isMounted = true;
    getRedirectResult(auth)
      .then(async (result) => {
        if (!result?.user || !isMounted) return;
        setLoadingStage('verifying');
        setIsSubmitting(true);
        const user = result.user;
        const name = user.displayName || user.email?.split('@')[0] || '';
        const email = user.email || '';
        const avatar = user.photoURL || '';
        const uid = user.uid;

        setLoadingStage('preparing');
        recordUserInDatabase({
          uid,
          name,
          email,
          avatar,
          source: 'Google',
        }).catch(() => {});

        setLoadingStage('success');
        setTimeout(() => {
          if (isMounted) completeLogin(name, email, avatar, 'student');
        }, 400);
      })
      .catch((err) => {
        if (isMounted) {
          setLoadingStage('idle');
          setIsSubmitting(false);
          setValidationError(err.message || 'Unable to complete sign-in. Please try again.');
        }
      });

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isOpen) return null;

  // Complete Login and Redirect to original requested destination
  const completeLogin = (
    name: string,
    userEmail: string,
    avatar: string,
    userRole: 'student' | 'influencer' = 'student'
  ) => {
    clearAuthTimeout();
    if (typeof window !== 'undefined') {
      const cleanName = (name || userEmail.split('@')[0] || '').trim();
      if (cleanName) localStorage.setItem('futureai_user_name', cleanName);
      if (userEmail) localStorage.setItem('futureai_user_email', userEmail);
      if (avatar) localStorage.setItem('futureai_user_avatar', avatar);
      localStorage.setItem('futureai_user_role', userRole);
      localStorage.setItem('futureai_logged_in', 'true');
      if (!localStorage.getItem('futureai_user_wallet')) {
        localStorage.setItem('futureai_user_wallet', '0');
      }

      // Automatically redirect to the requested target route
      const targetHash = redirectUrl || sessionStorage.getItem('futureai_auth_redirect') || localStorage.getItem('futureai_auth_redirect');
      if (targetHash && targetHash !== '#home' && targetHash !== '#welcome') {
        sessionStorage.removeItem('futureai_auth_redirect');
        localStorage.removeItem('futureai_auth_redirect');
        window.location.hash = targetHash;
      } else if (userRole === 'influencer') {
        window.location.hash = '#income';
      } else {
        window.location.hash = '#dashboard';
      }
    }
    setIsSubmitting(false);
    setLoadingStage('idle');
    onSuccess(name, userEmail, avatar, userRole);
    onClose();
  };

  // ─── 1. GOOGLE 1-CLICK AUTHENTICATION ───
  const handleGoogleSignInClick = async () => {
    if (isSubmitting) return;
    setValidationError(null);
    setIsSubmitting(true);
    setLoadingStage('connecting');
    setCustomStageText('Connecting securely...');

    // Safety timeout: abort if popup is hung or abandoned
    clearAuthTimeout();
    timeoutRef.current = setTimeout(() => {
      setLoadingStage('idle');
      setIsSubmitting(false);
      setValidationError('Connection is taking longer than expected. Please try again or use Email Login.');
    }, 45000);

    try {
      // Direct Firebase native Google popup (fastest and reliable)
      const fbUser = await loginWithGooglePopup();

      clearAuthTimeout();
      setLoadingStage('verifying');
      setCustomStageText('Verifying your account...');

      // Transition to preparing dashboard
      setTimeout(() => {
        setLoadingStage('preparing');
        setCustomStageText('Preparing your dashboard...');
      }, 250);

      // Transition to success state
      setTimeout(() => {
        setLoadingStage('success');
        setCustomStageText('Login successful!');
      }, 550);

      // Final complete & redirect
      setTimeout(() => {
        completeLogin(fbUser.name, fbUser.email, fbUser.avatar, 'student');
      }, 950);
    } catch (err: any) {
      clearAuthTimeout();
      setLoadingStage('idle');
      setIsSubmitting(false);

      if (err?.message === 'REDIRECT_INITIATED') {
        setValidationError('Redirecting to Google... Please wait ⏳');
        return;
      }

      const code = err?.code || '';
      if (
        code === 'auth/popup-closed-by-user' ||
        code === 'auth/cancelled-popup-request' ||
        err?.message?.includes('closed')
      ) {
        setValidationError('Sign-in cancelled. Please select your Google account to proceed.');
      } else if (code === 'auth/network-request-failed') {
        setValidationError('Network error. Please check your internet connection and try again.');
      } else if (code === 'auth/too-many-requests') {
        setValidationError('Too many requests. Please wait a moment and try again.');
      } else {
        setValidationError(err.message || 'Unable to sign in with Google. Please try Email Login below.');
      }
    }
  };

  // ─── 2. EMAIL AUTHENTICATION ───
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setValidationError(null);

    const cleanEmail = emailInput.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    if (!passwordInput || passwordInput.trim().length < 6) {
      setValidationError('Password must be at least 6 characters.');
      return;
    }

    setIsSubmitting(true);
    setLoadingStage('connecting');
    setCustomStageText('Connecting securely...');

    clearAuthTimeout();
    timeoutRef.current = setTimeout(() => {
      setLoadingStage('idle');
      setIsSubmitting(false);
      setValidationError('Connection is taking longer than expected. Please try again.');
    }, 25000);

    try {
      const res = await loginWithEmailFirebase(cleanEmail, passwordInput.trim());

      clearAuthTimeout();
      setLoadingStage('verifying');
      setCustomStageText('Verifying your account...');

      setTimeout(() => {
        setLoadingStage('preparing');
        setCustomStageText('Preparing your dashboard...');
      }, 250);

      setTimeout(() => {
        setLoadingStage('success');
        setCustomStageText('Login successful!');
      }, 550);

      setTimeout(() => {
        completeLogin(res.name, res.email, res.avatar, 'student');
      }, 950);
    } catch (err: any) {
      clearAuthTimeout();
      setLoadingStage('idle');
      setIsSubmitting(false);
      setValidationError(err.message || 'Unable to sign in. Please verify your credentials and try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn overflow-y-auto">
      {/* ── CARD: Premium Modern Single-Column Modal (440–480px) ── */}
      <div className="relative w-full max-w-[440px] sm:max-w-[460px] bg-gradient-to-b from-[#FAFBFD] via-white to-white rounded-[24px] shadow-[0_25px_60px_-15px_rgba(16,35,74,0.2),0_0_0_1px_rgba(220,232,252,0.85)] p-6 sm:p-7 text-center border border-[#DCE8FC] my-auto animate-scaleUp overflow-hidden">

        {/* ── Dynamic Animated Circular Login Loader Overlay ── */}
        {loadingStage !== 'idle' && (
          <LoginProcessingLoader
            stage={loadingStage}
            customMessage={customStageText}
          />
        )}

        {/* Subtle Pastel-Blue Ambient Glow Gradients */}
        <div className="absolute -top-16 -left-16 w-44 h-44 bg-sky-100/60 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -top-12 -right-12 w-44 h-44 bg-blue-100/50 rounded-full blur-2xl pointer-events-none" />

        {/* Close (X) Button at Top-Right */}
        <button
          type="button"
          onClick={onClose}
          disabled={isSubmitting}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100/90 hover:bg-slate-200 active:scale-95 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all cursor-pointer z-30 shadow-xs border border-slate-200/50 disabled:opacity-40"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* ── POPUP HEADER ── */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Official Future IT Logo from project assets */}
          <div className="h-10 sm:h-11 flex items-center justify-center">
            <img
              src={BRAND.logo || '/images/brand/future_it_logo.png'}
              alt="FUTURE IT INDUSTRY"
              className="h-9 sm:h-10 w-auto object-contain select-none"
            />
          </div>

          {/* Welcome Back! 👋 */}
          <h2 className="text-2xl sm:text-[25px] font-black text-[#10234A] tracking-tight mt-3 flex items-center justify-center gap-1.5">
            <span>Welcome</span>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Back!</span>
            <span className="inline-block origin-[70%_70%]">👋</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-[13px] text-slate-500 font-normal max-w-[350px] mx-auto mt-1.5 leading-relaxed">
            Login to continue your learning journey and unlock your internship, certificate and career opportunities.
          </p>
        </div>

        {/* Notice Message Banner (if visitor was redirected from a protected route) */}
        {message && (
          <div className="relative z-10 mt-3.5 p-3 rounded-2xl bg-blue-50/90 border border-blue-200/80 text-blue-950 text-xs font-semibold flex items-center gap-2.5 text-left shadow-2xs animate-fadeIn">
            <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Lock className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0 flex-1 leading-snug">
              <span className="text-blue-950 block font-bold text-xs sm:text-[13px]">{message}</span>
              <span className="text-[10px] text-blue-700/80 font-medium">Please sign in to access this feature</span>
            </div>
          </div>
        )}

        {/* Error Banner */}
        {validationError && (
          <div className="relative z-10 mt-3 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2 text-left shadow-2xs animate-fadeIn">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span className="font-semibold leading-snug">{validationError}</span>
          </div>
        )}

        {/* ── 1. CONTINUE WITH GOOGLE (Prominent 54px White Button) ── */}
        <div className="relative z-10 mt-5">
          <button
            type="button"
            onClick={handleGoogleSignInClick}
            disabled={isSubmitting}
            className="w-full h-[54px] px-5 rounded-[14px] bg-white hover:bg-slate-50/90 active:scale-[0.99] border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-between cursor-pointer disabled:opacity-60 group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
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
              <span className="font-bold text-[14px] sm:text-[15px] text-[#10234A]">
                Continue with Google
              </span>
            </div>

            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#10234A] group-hover:translate-x-0.5 transition-all stroke-[2.5]" />
          </button>
        </div>

        {/* ── OR DIVIDER ── */}
        <div className="relative my-4 z-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-[11px] font-bold text-slate-400 tracking-wider">
              OR
            </span>
          </div>
        </div>

        {/* ── 2. LOGIN WITH EMAIL (SaaS EdTech Card) ── */}
        <div className="relative z-10 bg-[#F4F8FC]/90 border border-[#E3EDFA] rounded-[18px] p-4 text-left shadow-2xs">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <Mail className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-bold text-[#10234A]">Login with Email</span>
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-2.5">
            {/* Email Input with Mail Icon */}
            <div className="flex items-center border border-slate-200 focus-within:border-blue-500 rounded-xl bg-white px-3.5 h-[48px] transition-all shadow-2xs">
              <Mail className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
              <input
                type="email"
                placeholder="Enter your email address"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                disabled={isSubmitting}
                className="w-full text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none bg-transparent disabled:opacity-60"
                required
                autoFocus
              />
            </div>

            {/* Password Input with Lock Icon & Show/Hide */}
            <div className="flex items-center border border-slate-200 focus-within:border-blue-500 rounded-xl bg-white px-3.5 h-[48px] transition-all shadow-2xs">
              <Lock className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                disabled={isSubmitting}
                className="w-full text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none bg-transparent disabled:opacity-60"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                tabIndex={-1}
                className="text-xs text-slate-400 hover:text-slate-600 font-medium ml-1.5 shrink-0 cursor-pointer select-none"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            {/* Primary Blue Button: Continue with Email → */}
            <button
              type="submit"
              disabled={isSubmitting || !emailInput || passwordInput.length < 6}
              className="w-full h-[50px] px-4 rounded-xl text-white font-bold text-sm shadow-md shadow-blue-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              style={{
                background: 'linear-gradient(135deg, #0080FF 0%, #0055FF 100%)',
              }}
            >
              <span>Continue with Email</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </form>
        </div>

        {/* ── 3 TRUST BADGES ── */}
        <div className="relative z-10 grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-slate-100">
          <div className="flex flex-col items-center text-center">
            <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-1 text-blue-600 shadow-2xs">
              <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="text-[11px] font-bold text-[#10234A] leading-tight">Secure &amp; Safe</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-7 h-7 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center mb-1 text-purple-600 shadow-2xs">
              <Zap className="w-4 h-4 fill-purple-600 stroke-[1.5]" />
            </div>
            <span className="text-[11px] font-bold text-[#10234A] leading-tight">Quick Access</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-1 text-emerald-600 shadow-2xs">
              <Lock className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="text-[11px] font-bold text-[#10234A] leading-tight">Your Data is Safe</span>
          </div>
        </div>

        {/* ── FOOTER TERMS & PRIVACY NOTICE ── */}
        <p className="relative z-10 mt-4 text-[11px] text-slate-400 font-medium text-center leading-relaxed">
          By continuing, you agree to our{' '}
          <a
            href="#terms"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '#terms';
              onClose();
            }}
            className="text-blue-600 font-semibold hover:underline cursor-pointer"
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            href="#privacy"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '#privacy';
              onClose();
            }}
            className="text-blue-600 font-semibold hover:underline cursor-pointer"
          >
            Privacy Policy
          </a>.
        </p>

      </div>
    </div>
  );
};
