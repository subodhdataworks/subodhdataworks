import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  ArrowRight,
  Mail,
  Lock,
  Check,
  AlertCircle,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { getRedirectResult } from 'firebase/auth';
import { auth } from '../../services/firebase';
import {
  loginWithGooglePopup,
  loginWithEmailFirebase,
  recordUserInDatabase,
} from '../../services/realAuthService';
import { BRAND } from '../../config/brand';
import { SessionService } from '../../services/sessionService';

export interface FutureAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (name: string, email?: string, avatar?: string, role?: 'student' | 'influencer') => void;
  message?: string;
  redirectUrl?: string;
}

export type AuthLoadingStage = 'idle' | 'connecting' | 'verifying' | 'preparing' | 'success';

/**
 * ─── COMPACT ANIMATED CIRCULAR LOGIN LOADER ───
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
      className="absolute inset-0 z-50 bg-white/95 backdrop-blur-md rounded-[28px] flex flex-col items-center justify-center p-5 text-center animate-fadeIn select-none"
      role="status"
      aria-live="polite"
      aria-busy={!isSuccess}
    >
      {/* Circular Spinning Ring with Future IT Logo in Center */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-3">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/25 via-cyan-400/25 to-indigo-500/25 blur-lg animate-pulse motion-reduce:animate-none" />

        {!isSuccess ? (
          <svg
            className="w-full h-full -rotate-90 animate-spin motion-reduce:animate-none duration-1000"
            viewBox="0 0 100 100"
          >
            <defs>
              <linearGradient id="loginRingGradCompact" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1a73e8" />
                <stop offset="50%" stopColor="#00d2ff" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="44"
              stroke="#E8F1FC"
              strokeWidth="5"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="44"
              stroke="url(#loginRingGradCompact)"
              strokeWidth="5.5"
              strokeDasharray="276"
              strokeDashoffset="75"
              strokeLinecap="round"
              fill="none"
              className="drop-shadow-[0_0_8px_rgba(0,210,255,0.6)]"
            />
          </svg>
        ) : (
          <div className="w-full h-full rounded-full border-3 border-emerald-500 bg-emerald-50 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.35)] animate-scaleUp">
            <Check className="w-8 h-8 text-emerald-600 stroke-[3.5]" />
          </div>
        )}

        {!isSuccess && (
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-slate-100 flex items-center justify-center p-2 animate-pulse motion-reduce:animate-none">
              <img
                src={BRAND.emblem || '/images/brand/future_it_emblem.png'}
                alt="Future IT Industry"
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
          </div>
        )}
      </div>

      <h3 className="text-lg font-black text-[#10234A] tracking-tight">
        {isSuccess ? 'Login Successful! 🎉' : 'Signing You In...'}
      </h3>

      <div className="mt-1 flex items-center justify-center gap-1.5">
        {!isSuccess && (
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping motion-reduce:animate-none" />
        )}
        <span className="text-xs font-bold text-[#1a73e8]">
          {getStageTitle()}
        </span>
      </div>

      <p className="mt-1 text-[11px] text-slate-500 max-w-[240px] leading-tight">
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

  // Optional Email Login Toggle
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  // Safety timeout reference
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
      setShowEmailForm(false);
      setEmailInput('');
      setPasswordInput('');
      clearAuthTimeout();
    }
    return () => clearAuthTimeout();
  }, [isOpen]);

  // Handle Google OAuth Redirect Result (Fallback)
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

  // Complete Login and Redirect
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

    clearAuthTimeout();
    timeoutRef.current = setTimeout(() => {
      setLoadingStage('idle');
      setIsSubmitting(false);
      setValidationError('Connection is taking longer than expected. Please try again or use Email Login.');
    }, 45000);

    try {
      const fbUser = await loginWithGooglePopup();

      // Multi-device login enabled: session initialized non-blocking
      SessionService.createOrValidateSession(fbUser.uid).catch(() => {});

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
        setValidationError(err.message || 'Unable to sign in with Google. Please try again.');
      }
    }
  };

  // ─── 2. OPTIONAL EMAIL AUTHENTICATION ───
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

      // Multi-device login enabled: session initialized non-blocking
      SessionService.createOrValidateSession(res.uid).catch(() => {});

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-slate-950/65 backdrop-blur-md animate-fadeIn overflow-y-auto">
      {/* ── CARD: Exact 1:1 Match to Attached Reference Image ── */}
      <div className="relative w-full max-w-[390px] sm:max-w-[410px] bg-gradient-to-b from-[#F2F7FF] via-white to-white rounded-[28px] shadow-[0_25px_60px_-15px_rgba(16,35,74,0.3),0_0_0_1px_rgba(215,230,255,0.9)] p-5 sm:p-6 text-center border border-blue-100/80 my-auto animate-scaleUp overflow-hidden">

        {/* ── Dynamic Animated Circular Login Loader Overlay ── */}
        {loadingStage !== 'idle' && (
          <LoginProcessingLoader
            stage={loadingStage}
            customMessage={customStageText}
          />
        )}

        {/* Ambient Top Glows */}
        <div className="absolute -top-12 -left-12 w-36 h-36 bg-blue-300/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -top-10 -right-10 w-36 h-36 bg-purple-300/20 rounded-full blur-2xl pointer-events-none" />

        {/* Close (X) Button at Top-Right */}
        <button
          type="button"
          onClick={onClose}
          disabled={isSubmitting}
          aria-label="Close"
          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 hover:text-slate-900 flex items-center justify-center transition-all cursor-pointer z-30 shadow-2xs border border-slate-200/60 disabled:opacity-40"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* ── POPUP HEADER: Brand Logo ── */}
        <div className="relative z-10 flex flex-col items-center pt-1">
          <div className="h-8 sm:h-9 flex items-center justify-center mb-1">
            <img
              src="/images/brand/future_it_logo.png"
              alt="FUTURE IT INDUSTRY"
              className="h-7 sm:h-8 w-auto object-contain select-none"
            />
          </div>
        </div>

        {/* ── 3D FLOATING ELEMENTS & WELCOME HEADINGS ── */}
        <div className="relative z-10 mt-3 pt-2 pb-1">
          {/* 3D Graduation Cap on Left */}
          <div className="absolute -left-3 sm:-left-4 -top-2 w-16 sm:w-18 pointer-events-none select-none drop-shadow-md">
            <img
              src="/images/auth_3d_grad_cap.png"
              alt=""
              className="w-full h-auto object-contain transform -rotate-6"
            />
          </div>

          {/* 3D Open Book on Right */}
          <div className="absolute -right-3 sm:-right-4 -top-1 w-16 sm:w-18 pointer-events-none select-none drop-shadow-md">
            <img
              src="/images/auth_3d_book.png"
              alt=""
              className="w-full h-auto object-contain transform rotate-6"
            />
          </div>

          {/* Welcome Headings */}
          <h2 className="text-[22px] sm:text-[25px] font-black text-slate-900 tracking-tight leading-tight">
            Welcome to
            <span className="block mt-0.5 bg-gradient-to-r from-[#0066FF] via-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent font-black text-[25px] sm:text-[28px]">
              Future IT Industry
            </span>
          </h2>

          <p className="text-[12px] sm:text-[13px] text-slate-500 font-medium mt-1 leading-snug">
            Sign in to unlock your learning journey.
          </p>
        </div>

        {/* Notice Message Banner (if visitor was redirected from a protected route) */}
        {message && (
          <div className="relative z-10 mt-3 p-2 rounded-xl bg-blue-50/90 border border-blue-200/80 text-blue-950 text-xs font-semibold flex items-center gap-2 text-left shadow-2xs animate-fadeIn">
            <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Lock className="w-3 h-3" />
            </div>
            <div className="min-w-0 flex-1 leading-tight">
              <span className="text-blue-950 block font-bold text-xs">{message}</span>
              <span className="text-[10px] text-blue-700/80 font-medium">Please sign in to access this feature</span>
            </div>
          </div>
        )}

        {/* Error Banner */}
        {validationError && (
          <div className="relative z-10 mt-3 p-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-1.5 text-left shadow-2xs animate-fadeIn">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
            <span className="font-semibold leading-tight text-[11px]">{validationError}</span>
          </div>
        )}

        {/* ── MAIN CTA: CONTINUE WITH GOOGLE (Prominent Card Button) ── */}
        <div className="relative z-10 mt-4">
          <button
            type="button"
            onClick={handleGoogleSignInClick}
            disabled={isSubmitting}
            className="w-full h-[52px] sm:h-[56px] px-4 sm:px-5 rounded-2xl bg-white hover:bg-slate-50/90 active:scale-[0.99] border border-slate-200/90 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between cursor-pointer disabled:opacity-60 group"
          >
            <div className="flex items-center">
              {/* Google G Logo */}
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" viewBox="0 0 24 24">
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

              {/* Vertical Grey Line Divider */}
              <div className="h-6 w-[1px] bg-slate-200 mx-3 sm:mx-3.5" />

              {/* Button Text */}
              <span className="font-bold text-sm sm:text-base text-slate-900 tracking-tight">
                Continue with Google
              </span>
            </div>

            {/* Right Arrow */}
            <ArrowRight className="w-5 h-5 text-slate-800 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all stroke-[2.2]" />
          </button>
        </div>

        {/* ── 3 TRUST PILLARS (Exact Match to Reference Screenshot) ── */}
        <div className="relative z-10 grid grid-cols-3 gap-2 mt-5 pt-1 text-center">
          {/* Pillar 1: Fast & Secure */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xs mb-1.5">
              <ShieldCheck className="w-4.5 h-4.5 stroke-[2.5]" />
            </div>
            <h4 className="text-[11.5px] sm:text-xs font-black text-slate-900 leading-tight">Fast &amp; Secure</h4>
            <p className="text-[9px] sm:text-[9.5px] text-slate-500 font-medium leading-tight mt-0.5">One click login</p>
          </div>

          {/* Pillar 2: No Extra Steps */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-2xs mb-1.5">
              <Users className="w-4.5 h-4.5 stroke-[2.5]" />
            </div>
            <h4 className="text-[11.5px] sm:text-xs font-black text-slate-900 leading-tight">No Extra Steps</h4>
            <p className="text-[9px] sm:text-[9.5px] text-slate-500 font-medium leading-tight mt-0.5">Quick access</p>
          </div>

          {/* Pillar 3: Your Data is Safe */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-2xs mb-1.5">
              <Lock className="w-4 h-4 stroke-[2.5]" />
            </div>
            <h4 className="text-[11.5px] sm:text-xs font-black text-slate-900 leading-tight">Your Data is Safe</h4>
            <p className="text-[9px] sm:text-[9.5px] text-slate-500 font-medium leading-tight mt-0.5">We never share your information</p>
          </div>
        </div>

        {/* ── OPTIONAL EXPANDABLE EMAIL SIGN-IN ── */}
        <div className="relative z-10 mt-3.5 text-center">
          {!showEmailForm ? (
            <button
              type="button"
              onClick={() => setShowEmailForm(true)}
              className="text-[11px] text-slate-400 hover:text-slate-600 font-medium underline transition-colors cursor-pointer"
            >
              Or sign in with Email
            </button>
          ) : (
            <form onSubmit={handleEmailSubmit} className="mt-2 text-left space-y-2 p-3 bg-slate-50/80 rounded-xl border border-slate-200/70 animate-fadeIn">
              <div className="flex items-center gap-1.5 mb-1">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-xs font-bold text-slate-800">Email Sign In</span>
              </div>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full h-9 px-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                placeholder="Password (min 6 chars)"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full h-9 px-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={() => setShowEmailForm(false)}
                  className="text-[10px] text-slate-500 hover:text-slate-700 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 active:scale-95 disabled:opacity-50"
                >
                  Sign In
                </button>
              </div>
            </form>
          )}
        </div>

        {/* ── TERMS & PRIVACY POLICY FOOTER ── */}
        <div className="relative z-10 mt-4 pt-3 border-t border-slate-100 text-center">
          <p className="text-[10px] sm:text-[10.5px] text-slate-500 font-medium leading-relaxed">
            By continuing, you agree to our{' '}
            <a
              href="#terms"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                window.location.hash = '#terms';
              }}
              className="text-blue-600 font-semibold underline hover:text-blue-700"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                window.location.hash = '#privacy';
              }}
              className="text-blue-600 font-semibold underline hover:text-blue-700"
            >
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};
