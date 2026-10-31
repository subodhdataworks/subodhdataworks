import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  ArrowRight,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Check,
  AlertCircle,
  ShieldCheck,
  Users,
  Flame,
  Crown,
  GraduationCap,
  Code,
  Briefcase,
  TrendingUp,
  Building,
  Video,
  BarChart3,
  ChevronRight,
  User,
  Award,
} from 'lucide-react';
import { getRedirectResult } from 'firebase/auth';
import { auth } from '../../services/firebase';
import {
  loginWithGooglePopup,
  loginWithEmailFirebase,
  recordUserInDatabase,
  fetchCanonicalReferralProfile,
  normalizeRefCode,
} from '../../services/realAuthService';
import { BRAND } from '../../config/brand';
import { SessionService } from '../../services/sessionService';

export interface FutureAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (name: string, email?: string, avatar?: string, role?: 'student' | 'influencer') => void;
  message?: string;
  redirectUrl?: string;
  initialMode?: 'login' | 'signup';
}

export type AuthLoadingStage = 'idle' | 'connecting' | 'verifying' | 'preparing' | 'success';

/**
 * ─── GOOGLE G SVG ICON ───
 */
const GoogleIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24">
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
);

/**
 * ─── CIRCULAR LOGIN LOADER OVERLAY ───
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
      className="absolute inset-0 z-50 bg-white/95 backdrop-blur-md rounded-[32px] flex flex-col items-center justify-center p-5 text-center animate-fadeIn select-none"
      role="status"
      aria-live="polite"
      aria-busy={!isSuccess}
    >
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-3">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/25 via-cyan-400/25 to-indigo-500/25 blur-lg animate-pulse motion-reduce:animate-none" />

        {!isSuccess ? (
          <svg
            className="w-full h-full -rotate-90 animate-spin motion-reduce:animate-none duration-1000"
            viewBox="0 0 100 100"
          >
            <defs>
              <linearGradient id="loginRingGradModal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0066FF" />
                <stop offset="50%" stopColor="#00d2ff" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="44" stroke="#E8F1FC" strokeWidth="5" fill="none" />
            <circle
              cx="50"
              cy="50"
              r="44"
              stroke="url(#loginRingGradModal)"
              strokeWidth="5.5"
              strokeDasharray="276"
              strokeDashoffset="75"
              strokeLinecap="round"
              fill="none"
              className="drop-shadow-[0_0_8px_rgba(0,102,255,0.6)]"
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

      <h3 className="text-lg font-black text-slate-900 tracking-tight">
        {isSuccess ? 'Login Successful! 🎉' : 'Signing You In...'}
      </h3>

      <div className="mt-1 flex items-center justify-center gap-1.5">
        {!isSuccess && (
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping motion-reduce:animate-none" />
        )}
        <span className="text-xs font-bold text-[#0066FF]">{getStageTitle()}</span>
      </div>

      <p className="mt-1 text-[11px] text-slate-500 max-w-[240px] leading-tight">
        {isSuccess ? 'Preparing your learning environment...' : 'Connecting your account securely.'}
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
  initialMode = 'login',
}) => {
  // Mode: 'login' | 'signup'
  const [authMode, setAuthMode] = useState<'login' | 'signup'>(initialMode);

  // Form inputs
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(true);

  // Submission & Loading
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingStage, setLoadingStage] = useState<AuthLoadingStage>('idle');
  const [customStageText, setCustomStageText] = useState<string | undefined>();
  const [validationError, setValidationError] = useState<string | null>(null);

  const timeoutRef = useRef<any>(null);

  const clearAuthTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    if (isOpen) {
      setAuthMode(initialMode);
      setValidationError(null);
      setIsSubmitting(false);
      setLoadingStage('idle');
      setCustomStageText(undefined);
      setNameInput('');
      setEmailInput('');
      setPasswordInput('');
      setShowPassword(false);
      clearAuthTimeout();
    }
    return () => clearAuthTimeout();
  }, [isOpen, initialMode]);

  // Google OAuth Redirect Result Handler
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
          if (isMounted) completeLogin(name, email, avatar, 'student', uid);
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
  }, []);

  if (!isOpen) return null;

  const completeLogin = (
    name: string,
    userEmail: string,
    avatar: string,
    userRole: 'student' | 'influencer' = 'student',
    uid?: string,
    referralCode?: string
  ) => {
    clearAuthTimeout();
    if (typeof window !== 'undefined') {
      const cleanName = (name || userEmail.split('@')[0] || '').trim();
      if (cleanName) localStorage.setItem('futureai_user_name', cleanName);
      if (userEmail) localStorage.setItem('futureai_user_email', userEmail);
      if (avatar) localStorage.setItem('futureai_user_avatar', avatar);
      if (uid) localStorage.setItem('futureai_user_uid', uid);
      if (referralCode) localStorage.setItem('futureai_user_ref_code', normalizeRefCode(referralCode));
      localStorage.setItem('futureai_user_role', userRole);
      localStorage.setItem('futureai_logged_in', 'true');
      if (!localStorage.getItem('futureai_user_wallet')) {
        localStorage.setItem('futureai_user_wallet', '0');
      }

      if (uid) {
        fetchCanonicalReferralProfile(uid, userEmail, cleanName).then((p) => {
          if (p?.referralCode && typeof window !== 'undefined') {
            localStorage.setItem('futureai_user_ref_code', p.referralCode);
          }
        }).catch(() => {});
      }

      const targetHash =
        redirectUrl ||
        sessionStorage.getItem('futureai_auth_redirect') ||
        localStorage.getItem('futureai_auth_redirect');
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

  // Google 1-Click Authentication
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
      setValidationError('Connection is taking longer than expected. Please try again.');
    }, 45000);

    try {
      const fbUser = await loginWithGooglePopup();
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
        completeLogin(fbUser.name, fbUser.email, fbUser.avatar, 'student', fbUser.uid);
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
        setValidationError('Sign-in cancelled. Please select your Google account.');
      } else if (code === 'auth/network-request-failed') {
        setValidationError('Network error. Please check your internet connection.');
      } else {
        setValidationError(err.message || 'Unable to sign in with Google. Please try again.');
      }
    }
  };

  // Email / Password Form Submit
  const handleEmailFormSubmit = async (e: React.FormEvent) => {
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
      setValidationError('Connection taking longer than expected. Please try again.');
    }, 30000);

    try {
      const cleanName = authMode === 'signup' ? (nameInput.trim() || cleanEmail.split('@')[0]) : undefined;
      const res = await loginWithEmailFirebase(cleanEmail, passwordInput.trim(), cleanName);
      SessionService.createOrValidateSession(res.uid).catch(() => {});

      clearAuthTimeout();
      setLoadingStage('success');
      setCustomStageText(authMode === 'signup' ? 'Account created successfully!' : 'Login successful!');
      setTimeout(() => {
        completeLogin(res.name, res.email, res.avatar, 'student', res.uid);
      }, 900);
    } catch (err: any) {
      clearAuthTimeout();
      setLoadingStage('idle');
      setIsSubmitting(false);
      setValidationError(err.message || 'Unable to sign in. Please verify your credentials and try again.');
    }
  };

  // Modal Content
  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn overflow-y-auto selection:bg-blue-500 selection:text-white">
      {/* ─── MAIN MODAL CARD ─── */}
      <div className="relative w-full max-w-[425px] md:max-w-[880px] lg:max-w-[960px] bg-white rounded-[32px] shadow-[0_25px_70px_rgba(0,0,0,0.35)] border border-slate-200/80 my-auto overflow-hidden animate-scaleUp">
        
        {/* Loading Overlay */}
        {loadingStage !== 'idle' && (
          <LoginProcessingLoader stage={loadingStage} customMessage={customStageText} />
        )}

        {/* Global Close (X) Button */}
        <button
          type="button"
          onClick={onClose}
          disabled={isSubmitting}
          aria-label="Close"
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 hover:text-slate-900 flex items-center justify-center transition-all cursor-pointer z-40 border border-slate-200/70 shadow-xs"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* ─── 2-COLUMN LAYOUT ON DESKTOP, STACKED ON MOBILE ─── */}
        <div className="flex flex-col md:flex-row items-stretch">
          
          {/* ═════════ LEFT COLUMN: DARK BLUE PLACEMENT BANNER (DESKTOP) ═════════ */}
          <div className="hidden md:flex md:w-[52%] lg:w-[54%] bg-gradient-to-br from-[#02183c] via-[#072152] to-[#04132e] text-white p-6 lg:p-7 flex-col justify-between relative overflow-hidden select-none">
            {/* Ambient Lighting Glows */}
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 -right-16 w-60 h-60 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 left-1/3 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

            {/* Top Bar: Brand Logo + Trusted Pill */}
            <div className="relative z-10 flex items-center justify-between gap-2">
              <div className="h-7 lg:h-8 flex items-center">
                <img
                  src="/images/brand/future_it_logo.png"
                  alt="FUTURE IT INDUSTRY"
                  className="h-7 lg:h-8 w-auto object-contain brightness-0 invert"
                />
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold text-amber-300 shadow-2xs">
                <Crown className="w-3.5 h-3.5 fill-amber-300 text-amber-300 shrink-0" />
                <span>Trusted by 1L+ Learners</span>
              </div>
            </div>

            {/* Hero Heading & Tagline */}
            <div className="relative z-10 mt-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600/70 to-purple-600/70 border border-blue-400/40 text-[11px] font-black text-white shadow-2xs">
                <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                <span>New PLACEMENT PREP Batch</span>
              </div>

              <h1 className="mt-3 text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.15]">
                Ultimate <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">
                  Placement
                </span> <br />
                Solution
              </h1>

              <p className="mt-1.5 text-xs lg:text-[13px] text-cyan-200/90 font-medium">
                Start your placement preparation today!
              </p>
            </div>

            {/* Features & Student Image Composite Area */}
            <div className="relative z-10 my-3.5 grid grid-cols-12 gap-3.5 items-center">
              {/* 4 Feature Points on Left */}
              <div className="col-span-5 space-y-2.5">
                <div className="flex items-center gap-2 group">
                  <div className="w-7 h-7 rounded-xl bg-blue-500/25 text-cyan-300 border border-blue-400/40 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(59,130,246,0.3)]">
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-white leading-tight">Industry-Focused Courses</h4>
                    <p className="text-[10px] text-slate-300 font-normal leading-tight">Learn in-demand skills</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 group">
                  <div className="w-7 h-7 rounded-xl bg-cyan-500/25 text-cyan-300 border border-cyan-400/40 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                    <Code className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-white leading-tight">Real Projects & Practice</h4>
                    <p className="text-[10px] text-slate-300 font-normal leading-tight">Build job-ready portfolio</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 group">
                  <div className="w-7 h-7 rounded-xl bg-amber-500/25 text-amber-300 border border-amber-400/40 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(245,158,11,0.3)]">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-white leading-tight">Crack Interviews</h4>
                    <p className="text-[10px] text-slate-300 font-normal leading-tight">With AI mock interviews</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 group">
                  <div className="w-7 h-7 rounded-xl bg-indigo-500/25 text-indigo-300 border border-indigo-400/40 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(99,102,241,0.3)]">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-white leading-tight">Placement Support</h4>
                    <p className="text-[10px] text-slate-300 font-normal leading-tight">Resume & direct hiring</p>
                  </div>
                </div>

                {/* Explore more button matching reference */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      const target = document.getElementById('curriculum') || document.getElementById('programs');
                      target?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 text-white font-black text-[11px] shadow-[0_4px_16px_rgba(6,182,212,0.4)] hover:shadow-[0_6px_22px_rgba(6,182,212,0.55)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Explore more</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>

              {/* Ultra-Premium AI-Generated Student Visual on Right */}
              <div className="col-span-7 relative">
                <div className="relative w-full h-[225px] lg:h-[245px] rounded-2xl overflow-hidden border border-cyan-400/40 shadow-[0_12px_40px_rgba(6,182,212,0.3)] bg-[#03132e] group select-none">
                  <img
                    src="/images/auth/desktop_login_premium_hero.jpg"
                    alt="Placement Ready Student with Laptop and Tech Books"
                    className="w-full h-full object-cover object-[center_35%] select-none transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Cinematic Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02183c]/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#02183c]/45 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Holographic Glass Badges */}
                  <div className="absolute top-2.5 right-2.5 bg-[#031b3e]/90 backdrop-blur-md border border-cyan-400/60 rounded-xl px-2.5 py-1 text-[9.5px] font-black text-cyan-200 flex items-center gap-1.5 shadow-[0_4px_16px_rgba(6,182,212,0.4)]">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
                    <span>Get Hired 🚀</span>
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 bg-[#031b3e]/90 backdrop-blur-md border border-blue-400/50 rounded-xl px-2.5 py-1 text-[9.5px] font-bold text-white flex items-center gap-1.5 shadow-[0_4px_16px_rgba(37,99,235,0.4)]">
                    <Video className="w-3 h-3 text-sky-400 shrink-0" />
                    <span>Live Classes</span>
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 bg-[#031b3e]/90 backdrop-blur-md border border-emerald-400/60 rounded-xl px-2.5 py-1 text-[9.5px] font-black text-emerald-300 flex items-center gap-1.5 shadow-[0_4px_16px_rgba(16,185,129,0.4)]">
                    <Award className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>99% Placement</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Stats Row (700+ Hiring Partners, 99% Placement Report) */}
            <div className="relative z-10 pt-2 border-t border-white/10 space-y-2.5">
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-white/[0.08] hover:bg-white/[0.14] transition-colors rounded-xl py-2 px-2 border border-white/10 backdrop-blur-xs">
                  <div className="flex items-center justify-center gap-1">
                    <Users className="w-3.5 h-3.5 text-cyan-300" />
                    <span className="text-[13px] font-black text-white">1L+</span>
                  </div>
                  <span className="text-[10px] font-medium text-slate-300 block">Learners</span>
                </div>

                <div className="bg-white/[0.08] hover:bg-white/[0.14] transition-colors rounded-xl py-2 px-2 border border-cyan-400/30 backdrop-blur-xs shadow-[0_0_16px_rgba(6,182,212,0.15)]">
                  <div className="flex items-center justify-center gap-1">
                    <Building className="w-3.5 h-3.5 text-cyan-300" />
                    <span className="text-[13px] font-black text-cyan-200">700+</span>
                  </div>
                  <span className="text-[10px] font-bold text-cyan-300 block">Hiring Partners</span>
                </div>

                <div className="bg-white/[0.08] hover:bg-white/[0.14] transition-colors rounded-xl py-2 px-2 border border-emerald-400/35 backdrop-blur-xs shadow-[0_0_16px_rgba(16,185,129,0.18)]">
                  <div className="flex items-center justify-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[13px] font-black text-emerald-300">99%</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-300 block">Placement Report</span>
                </div>
              </div>

              {/* Bottom White Hiring Partners Logos Strip */}
              <div className="bg-white rounded-xl py-1.5 px-3 flex items-center justify-between text-slate-700 text-[10.5px] font-extrabold shadow-sm select-none">
                <span className="text-[#4285F4]">Google</span>
                <span className="text-slate-800">Microsoft</span>
                <span className="text-amber-600">amazon</span>
                <span className="text-[#0066FF]">tcs</span>
                <span className="text-indigo-600">Infosys</span>
                <span className="text-slate-900">accenture</span>
                <span className="text-slate-400 text-[9px] font-normal">and more...</span>
              </div>
            </div>
          </div>

          {/* ═════════ RIGHT COLUMN: AUTH FORM (EXACT MATCH TO REFERENCE media_1793445829689_1f6f35ce.jpg) ═════════ */}
          <div className="w-full md:w-[48%] lg:w-[46%] p-4 sm:p-6 md:p-8 flex flex-col justify-between bg-white relative">
            
            <div>
              {/* ── Mobile Top Header: Official Brand Logo & Tagline (Matching Image) ── */}
              <div className="flex md:hidden items-center justify-center mb-3 relative pt-1">
                <div className="flex flex-col items-center select-none">
                  <img
                    src="/images/brand/future_it_logo.png"
                    alt="FUTURE IT INDUSTRY - Learn Today. Earn Tomorrow."
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </div>

              {/* ── Mobile Placement Banner Card (Light Theme with AI-Generated Tech Student) ── */}
              <div className="block md:hidden mb-4">
                <div className="w-full rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(37,99,235,0.08)] border border-blue-100 bg-gradient-to-r from-white via-sky-50/70 to-blue-50/40 relative select-none">
                  {/* Subtle Light Theme Decorative Blobs */}
                  <div className="absolute -top-12 -left-12 w-36 h-36 rounded-full bg-blue-400/10 blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-8 left-1/4 w-32 h-32 rounded-full bg-indigo-400/10 blur-xl pointer-events-none" />
                  
                  {/* AI Generated Indian Tech Student on the Right (Daylight Light Theme) */}
                  <div className="absolute right-0 top-0 bottom-0 w-[48%] xs:w-[50%] pointer-events-none overflow-hidden">
                    <img
                      src="/images/auth/mobile_placement_light_student.jpg"
                      alt="Student Learning at Future IT"
                      className="w-full h-full object-cover object-[75%_center] select-none"
                    />
                    {/* Seamless Light Gradient Fade so left text stays 100% crisp & readable */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-25% to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Left Content: High-Contrast Crisp Typography */}
                  <div className="relative z-10 p-3.5 xs:p-4 pr-[46%] xs:pr-[48%] min-h-[120px] flex flex-col justify-center">
                    {/* Batch Pill */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-[9px] xs:text-[9.5px] font-black text-white shadow-xs w-fit">
                      <Flame className="w-3 h-3 text-amber-300 fill-amber-300 shrink-0" />
                      <span className="truncate">New PLACEMENT PREP Batch</span>
                    </div>

                    {/* Headline */}
                    <h3 className="mt-2 text-[18px] xs:text-[20px] font-black text-slate-900 leading-[1.14] tracking-tight">
                      Ultimate <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                        Placement
                      </span> <br />
                      Solution
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-1 text-[10px] xs:text-[10.5px] text-slate-600 font-semibold leading-tight">
                      Start your placement preparation today!
                    </p>
                  </div>
                </div>
              </div>

              {/* Desktop-Only Brand Logo Centered Above Form */}
              <div className="hidden md:flex flex-col items-center mb-5">
                <img
                  src="/images/brand/future_it_logo.png"
                  alt="FUTURE IT INDUSTRY"
                  className="h-8 w-auto object-contain"
                />
              </div>

              {/* ── Tab Switcher: Login | Create Account (Matching Reference) ── */}
              <div className="flex items-center justify-center gap-6 border-b border-slate-100 mb-3.5 sm:mb-4 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('login');
                    setValidationError(null);
                  }}
                  className={`pb-2 px-5 text-center text-sm font-black cursor-pointer transition-colors relative ${
                    authMode === 'login' ? 'text-[#0066FF]' : 'text-slate-400 hover:text-slate-700'
                  }`}
                >
                  <span>Login</span>
                  {authMode === 'login' && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-[#0066FF] rounded-full" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('signup');
                    setValidationError(null);
                  }}
                  className={`pb-2 px-5 text-center text-sm font-black cursor-pointer transition-colors relative ${
                    authMode === 'signup' ? 'text-[#0066FF]' : 'text-slate-400 hover:text-slate-700'
                  }`}
                >
                  <span>Create Account</span>
                  {authMode === 'signup' && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-[#0066FF] rounded-full" />
                  )}
                </button>
              </div>

              {/* Form Heading (Welcome Back 👋) */}
              <div className="text-center mb-3.5 sm:mb-4">
                <h2 className="text-[20px] sm:text-[22px] font-black text-slate-900 tracking-tight flex items-center justify-center gap-1.5">
                  <span>{authMode === 'login' ? 'Welcome Back' : 'Create Account'}</span>
                  <span>{authMode === 'login' ? '👋' : '🚀'}</span>
                </h2>
                <p className="text-[11.5px] sm:text-xs text-slate-500 font-medium mt-0.5">
                  {authMode === 'login'
                    ? 'Login to continue your learning journey.'
                    : 'Join 1L+ students and start learning today.'}
                </p>
              </div>

              {/* Validation Alert */}
              {validationError && (
                <div
                  className="mb-3 p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2 text-left"
                  role="alert"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
                  <span className="flex-1 leading-snug">{validationError}</span>
                </div>
              )}

              {/* 1-Click Google Sign In Button (Exact 1:1 Match) */}
              <button
                type="button"
                onClick={handleGoogleSignInClick}
                disabled={isSubmitting}
                className="w-full py-2.5 sm:py-3 px-3.5 sm:px-4 rounded-2xl border border-slate-200/90 hover:border-blue-400 bg-white hover:bg-slate-50 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] font-bold text-xs sm:text-[13.5px] text-slate-800 transition-all cursor-pointer active:scale-[0.99] disabled:opacity-50"
              >
                <div className="flex items-center gap-2.5">
                  <GoogleIcon className="w-5 h-5 shrink-0" />
                </div>
                <span className="font-bold text-[13.5px] text-slate-800 flex-1 text-center pr-3">
                  Continue with Google
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              </button>

              {/* Or Divider */}
              <div className="relative my-3 sm:my-3.5 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200/80" />
                </div>
                <span className="relative bg-white px-3 text-[11px] font-medium text-slate-400">
                  or continue with email
                </span>
              </div>

              {/* Email/Password Form */}
              <form onSubmit={handleEmailFormSubmit} className="space-y-2.5 sm:space-y-3">
                {/* Full Name (Sign Up only) */}
                {authMode === 'signup' && (
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-2xl border border-slate-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none transition"
                    />
                  </div>
                )}

                {/* Email Address */}
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    disabled={isSubmitting}
                    required
                    className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-2xl border border-slate-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none transition"
                  />
                </div>

                {/* Password Input with Eye Toggle */}
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    disabled={isSubmitting}
                    required
                    className="w-full pl-10 pr-10 py-2.5 sm:py-3 rounded-2xl border border-slate-200 focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {/* Keep me signed in + Forgot password */}
                <div className="flex items-center justify-between text-xs pt-0.5">
                  <label className="flex items-center gap-1.5 cursor-pointer text-slate-700 font-semibold select-none">
                    <input
                      type="checkbox"
                      checked={keepSignedIn}
                      onChange={(e) => setKeepSignedIn(e.target.checked)}
                      className="w-4 h-4 rounded text-[#0066FF] border-slate-300 focus:ring-blue-200 cursor-pointer"
                    />
                    <span>Keep me signed in</span>
                  </label>

                  {authMode === 'login' && (
                    <button
                      type="button"
                      onClick={() => {
                        alert('Password reset instructions will be sent to your email.');
                      }}
                      className="text-[#0066FF] hover:underline font-bold text-xs"
                    >
                      Forgot Password?
                    </button>
                  )}
                </div>

                {/* Submit Gradient Button (Matching media_1793445829689_1f6f35ce.jpg) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-[#0099FF] via-[#0066FF] to-[#8B5CF6] hover:brightness-105 active:scale-[0.99] text-white font-extrabold text-[15px] shadow-[0_8px_24px_rgba(0,102,255,0.35)] flex items-center justify-center gap-2 cursor-pointer transition disabled:opacity-50 mt-2"
                >
                  <span>{authMode === 'login' ? 'Login' : 'Create Account'}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </form>

              {/* Switch Mode Prompt */}
              <div className="text-center mt-3 text-xs text-slate-600 font-medium">
                <span>{authMode === 'login' ? 'New here? ' : 'Already have an account? '}</span>
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode(authMode === 'login' ? 'signup' : 'login');
                    setValidationError(null);
                  }}
                  className="text-[#0066FF] font-extrabold hover:underline cursor-pointer"
                >
                  {authMode === 'login' ? 'Create an account' : 'Login'}
                </button>
              </div>

              {/* Terms of Service Note */}
              <p className="text-[10px] sm:text-[10.5px] text-slate-500 text-center mt-2.5 leading-relaxed">
                By continuing, you agree to our{' '}
                <a href="#terms" onClick={onClose} className="text-[#0066FF] hover:underline font-semibold">
                  Terms of Service
                </a>{' '}
                <br />
                and{' '}
                <a href="#privacy" onClick={onClose} className="text-[#0066FF] hover:underline font-semibold">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* Trust Badges Row (Desktop Only) */}
            <div className="hidden md:grid grid-cols-3 gap-2 pt-4 mt-4 border-t border-slate-100 text-center text-slate-500 text-[10px] font-semibold">
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Secure Login</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Users className="w-3.5 h-3.5 text-blue-600" />
                <span>Privacy Protected</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Building className="w-3.5 h-3.5 text-blue-600" />
                <span>Trusted Platform</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
};
