import React, { useState } from 'react';
import {
  X,
  Play,
  Lock,
  Flame,
  Clock,
  Briefcase,
  Users,
  GraduationCap,
  Building2,
  FileText,
  Sparkles,
  ShieldCheck,
  Shield,
  ArrowRight,
  Target,
  Award,
  Code2,
  Lightbulb,
  CheckCircle2,
  Loader2,
  Star,
  ChevronRight
} from 'lucide-react';
import { startRazorpayCheckout, getCurrentUserForPayment } from '../../services/razorpayService';
import {
  unlockCourse,
  verifyAndUnlockWithProof,
  normalizeCourseId,
  isCourseUnlocked,
  CanonicalCourseId
} from '../../services/courseUnlockService';
import { recordReferralPayment } from '../../services/realAuthService';
import { recordCourseEnrollmentInCloud } from '../../services/cloudSyncService';
import { COURSES_CONFIG } from './UniversalMobileCourseView';

export interface SuccessPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetTopicTitle?: string;
  courseTitle?: string;
  courseId?: string;
}

export const SuccessPlanModal: React.FC<SuccessPlanModalProps> = ({
  isOpen,
  onClose,
  targetTopicTitle,
  courseTitle = 'Data Analyst with GenAI',
  courseId,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const canonicalCourseId: CanonicalCourseId = normalizeCourseId(courseId || courseTitle || targetTopicTitle);
  const config = COURSES_CONFIG[canonicalCourseId] || COURSES_CONFIG.data_analyst;
  const isPaid = isCourseUnlocked(canonicalCourseId);
  const effectivePrice = config.price;
  const displayTitle = courseTitle || config.title;
  const displayDesc = config.shortDesc;
  const displayPoster = config.poster;
  const toolBadges = config.toolBadges;
  const skills = config.skills;
  const salaryText = config.salary;

  const handlePayNow = async () => {
    if (isPaid) {
      onClose();
      if (typeof window !== 'undefined') {
        const routeMap: Record<CanonicalCourseId, string> = {
          data_analyst: '#data-analyst',
          data_science: '#data-science',
          ml_engineering: '#ml-engineering',
          deep_learning: '#ml-engineering',
          ai_engineering: '#ai-engineering',
          ai_tools_prompt: '#ai-tools-prompt',
          ms_office_copilot: '#ms-office-copilot',
          full_stack_mern: '#full-stack',
        };
        window.location.hash = routeMap[canonicalCourseId] || '#dashboard';
      }
      return;
    }

    setError(null);
    const user = getCurrentUserForPayment();

    if (!user.isLoggedIn || !user.userId) {
      setError('Please login to your account first so this course is unlocked specifically for your profile.');
      window.dispatchEvent(new CustomEvent('futureai_open_login'));
      return;
    }

    setIsLoading(true);
    try {
      const result = await startRazorpayCheckout({
        amount: effectivePrice,
        courseId: canonicalCourseId,
        courseTitle: displayTitle,
        userId: user.userId,
        name: user.name || 'Student',
        email: user.email || user.userId,
        phone: user.phone || undefined,
      });

      // 1. Verify & unlock strictly for this authenticated user and this specific course
      if (result.entitlementProof && result.verifiedAt) {
        const verifiedOnServer = await verifyAndUnlockWithProof({
          userId: user.userId,
          paymentId: result.paymentId,
          orderId: result.orderId,
          courseId: canonicalCourseId,
          verifiedAt: result.verifiedAt,
          entitlementProof: result.entitlementProof,
        });
        if (!verifiedOnServer) {
          unlockCourse(canonicalCourseId, {
            userId: user.userId,
            paymentId: result.paymentId,
            orderId: result.orderId,
            paymentStatus: 'CAPTURED',
            enrollmentStatus: 'ACTIVE',
            source: 'PAYMENT',
          });
        }
      } else {
        unlockCourse(canonicalCourseId, {
          userId: user.userId,
          paymentId: result.paymentId,
          orderId: result.orderId,
          paymentStatus: 'CAPTURED',
          enrollmentStatus: 'ACTIVE',
          source: 'PAYMENT',
        });
      }

      try {
        localStorage.setItem('futureai_payment_order_id', result.orderId);
        localStorage.setItem('futureai_payment_txn_id', result.paymentId);
      } catch {}

      // 2. Extract attribution code
      const storedRefCode =
        (typeof window !== 'undefined'
          ? localStorage.getItem('futureai_ref_attribution') ||
            sessionStorage.getItem('futureai_ref_attribution') ||
            new URLSearchParams(window.location.search).get('ref') ||
            ''
          : ''
        ).trim().toUpperCase();

      window.dispatchEvent(new CustomEvent('futureai_course_unlocked', { detail: { courseId: canonicalCourseId } }));
      setIsLoading(false);
      onClose();

      // Async background tasks
      (async () => {
        if (storedRefCode) {
          try {
            await recordReferralPayment({
              paymentId: result.paymentId,
              orderId: result.orderId,
              amount: effectivePrice,
              payerEmail: user.email,
              payerPhone: user.phone || undefined,
              payerName: user.name || 'Student',
              courseTitle: displayTitle,
              refCode: storedRefCode,
            });
            window.dispatchEvent(
              new CustomEvent('futureai_referral_earned', {
                detail: { refCode: storedRefCode, amount: 100 },
              })
            );
          } catch (refErr) {
            console.warn('Referral payment record notice:', refErr);
          }
        }

        try {
          await recordCourseEnrollmentInCloud({
            userId: user.userId,
            email: user.email,
            phone: user.phone || undefined,
            name: user.name || 'Student',
            courseId: canonicalCourseId,
            courseTitle: displayTitle,
            paymentId: result.paymentId,
            orderId: result.orderId,
            amount: result.amount,
            entitlementProof: result.entitlementProof,
            verifiedAt: result.verifiedAt,
          });
        } catch (cloudErr) {
          console.warn('Cloud sync record notice:', cloudErr);
        }
      })();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Payment failed. Please try again.';
      setError(msg);
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-slate-950/75 backdrop-blur-md overflow-y-auto animate-fadeIn transition-all duration-300">
      
      {/* Modal Container */}
      <div className="relative max-w-5xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden my-auto max-h-[94vh] flex flex-col text-left transition-all duration-300">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close"
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-30 w-9 h-9 rounded-full bg-white/95 hover:bg-slate-100 hover:rotate-90 text-slate-500 hover:text-slate-900 flex items-center justify-center cursor-pointer transition-all duration-200 shadow-md border border-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ═══════════════════════════════════════════════════════════════════
            MOBILE VIEW (<768px): EXACT 1:1 REFERENCE DESIGN
            ═══════════════════════════════════════════════════════════════════ */}
        <div className="block md:hidden overflow-y-auto p-3.5 space-y-4" style={{ scrollbarWidth: 'thin' }}>
          
          {/* Target Notification Pill (If opened from topic) */}
          {targetTopicTitle && (
            <div className="flex items-center gap-2 p-2 rounded-xl bg-blue-50 border border-blue-200 text-xs font-bold text-blue-900">
              <span className="w-5 h-5 rounded-md bg-blue-600 text-white flex items-center justify-center shrink-0">
                <Lock className="w-3 h-3" />
              </span>
              <span className="truncate">Unlock Full Course for: <strong>"{targetTopicTitle}"</strong></span>
            </div>
          )}

          {/* B. Course Hero */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-md aspect-[16/10]">
            <img
              src={displayPoster}
              alt={displayTitle}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/pot1_sharp_poster.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/60 pointer-events-none" />

            {/* Top Floating Badges */}
            <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5 z-10">
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-[9.5px] shadow-sm">
                <Flame className="w-3 h-3 fill-amber-950 text-amber-950 shrink-0" />
                <span className="truncate">{config.topBadgeLeft}</span>
              </div>
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#10b981] text-white font-bold text-[9.5px] shadow-sm backdrop-blur-xs">
                <Clock className="w-3 h-3 shrink-0" />
                <span className="truncate">{config.topBadgeRight}</span>
              </div>
            </div>

            {/* Center Pill */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <button
                type="button"
                onClick={handlePayNow}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 text-white font-bold text-[11px] border border-white/20 shadow-xl backdrop-blur-md active:scale-95 transition-transform"
              >
                <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0">
                  <Play className="w-2 h-2 fill-slate-950 text-slate-950 ml-0.5" />
                </div>
                <span>Instant Lifetime Access</span>
              </button>
            </div>

            {/* Bottom Tool Badges */}
            <div className="absolute bottom-2.5 left-2 right-2 flex items-center justify-center gap-1 flex-wrap z-10">
              {toolBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md bg-slate-950/85 border border-[#1e40af] text-[8.5px] font-bold text-cyan-200 backdrop-blur-xs shadow-2xs whitespace-nowrap"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Title & Description */}
          <div>
            <h1 className="text-[20px] font-black text-[#0b1a3a] tracking-tight leading-snug">
              {displayTitle}
            </h1>
            <p className="text-[11px] text-slate-600 font-normal leading-relaxed mt-1">
              {displayDesc}
            </p>
          </div>

          {/* C. WHAT YOU'LL LEARN */}
          <div>
            <h2 className="text-[12px] font-black text-[#0b1a3a] tracking-wider uppercase mb-2">
              WHAT YOU&apos;LL LEARN
            </h2>
            <div className="grid grid-cols-2 gap-x-2.5 gap-y-2 text-[10px] font-medium text-slate-700 leading-snug">
              <div className="space-y-2">
                {skills.slice(0, 4).map((skill, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {skills.slice(4, 8).map((skill, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* D. PRIMARY PAYMENT BUTTON */}
          <div>
            <button
              type="button"
              onClick={handlePayNow}
              disabled={isLoading}
              className="w-full h-12 rounded-2xl bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#9333ea] hover:opacity-95 active:scale-[0.98] transition-all text-white font-black text-sm flex items-center justify-center gap-1.5 shadow-md shadow-indigo-500/25 cursor-pointer disabled:opacity-75"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : isPaid ? (
                <>
                  <span>Resume Course</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Pay ₹{effectivePrice} Now</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
            <div className="mt-2 flex items-center justify-center gap-1.5 text-[10px] font-medium text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
              <span>Secure &amp; Safe Razorpay Payment • 256-bit SSL Encrypted</span>
            </div>
            {error && (
              <p className="mt-2 text-xs font-bold text-rose-600 text-center">{error}</p>
            )}
          </div>

          {/* E. WHAT'S INCLUDED */}
          <div>
            <h2 className="text-[12px] font-black text-[#0b1a3a] tracking-wider uppercase mb-2">
              WHAT&apos;S INCLUDED
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded-xl bg-[#fbf7ff] border border-[#f3e8ff] flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#9333ea] text-white flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11.5px] font-black text-[#0b1a3a] leading-tight truncate">Full Course</span>
                  <span className="text-[9.5px] text-slate-500 font-medium leading-tight truncate">HD Quality</span>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-[#f0fdf4] border border-[#dcfce7] flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#16a34a] text-white flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11.5px] font-black text-[#0b1a3a] leading-tight truncate">Practice Questions</span>
                  <span className="text-[9.5px] text-slate-500 font-medium leading-tight truncate">for Every Topic</span>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-[#fff7ed] border border-[#ffedd5] flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#f97316] text-white flex items-center justify-center shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11.5px] font-black text-[#0b1a3a] leading-tight truncate">Coding Exercises</span>
                  <span className="text-[9.5px] text-slate-500 font-medium leading-tight truncate">with Solutions</span>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-[#fff1f2] border border-[#ffe4e6] flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#f43f5e] text-white flex items-center justify-center shrink-0">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11.5px] font-black text-[#0b1a3a] leading-tight truncate">Mock Interview</span>
                  <span className="text-[9.5px] text-slate-500 font-medium leading-tight truncate">(Every Topic)</span>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-[#fffbeb] border border-[#fef3c7] flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#f59e0b] text-white flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11.5px] font-black text-[#0b1a3a] leading-tight truncate">Real-world Projects</span>
                  <span className="text-[9.5px] text-slate-500 font-medium leading-tight truncate">(15+)</span>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-[#f0f9ff] border border-[#e0f2fe] flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#0284c7] text-white flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11.5px] font-black text-[#0b1a3a] leading-tight truncate">Industrial Training</span>
                  <span className="text-[9.5px] text-slate-500 font-medium leading-tight truncate">Verified Certificate</span>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-[#faf5ff] border border-[#f3e8ff] flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#7c3aed] text-white flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11.5px] font-black text-[#0b1a3a] leading-tight truncate">Recommendation Letter</span>
                  <span className="text-[9.5px] text-slate-500 font-medium leading-tight truncate">Official Credential</span>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-[#f0fdfa] border border-[#ccfbf1] flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#0d9488] text-white flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11.5px] font-black text-[#0b1a3a] leading-tight truncate">Job Assistance</span>
                  <span className="text-[9.5px] text-slate-500 font-medium leading-tight truncate">({salaryText})</span>
                </div>
              </div>
            </div>
          </div>

          {/* F. Trust Information */}
          <div className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex -space-x-2 shrink-0">
                <img className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs" src="/images/avatar-rahul-sharma.jpg" alt="Learner" />
                <img className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs" src="/images/avatar-rohit.jpg" alt="Learner" />
                <img className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs" src="/images/avatar-sneha.jpg" alt="Learner" />
                <img className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs" src="/images/avatar-neha.jpg" alt="Learner" />
              </div>
              <div className="min-w-0">
                <strong className="text-[11.5px] font-black text-[#0b1a3a] block leading-tight truncate">Trusted by 10,000+ Learners</strong>
                <div className="flex items-center gap-0.5 text-amber-400 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[9.5px] font-bold text-slate-500 ml-1">4.8/5 (1,200+ reviews)</span>
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
          </div>

          {/* Powered by */}
          <div className="pt-1 pb-2 flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-500">
            <Shield className="w-3.5 h-3.5 text-[#2563eb]" />
            <span>Powered by <strong className="font-bold text-slate-700">FutureAI Learning Hub</strong></span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            DESKTOP VIEW (>=768px): 2-COLUMN MODAL WITHOUT OLD PAP OR 18K
            ═══════════════════════════════════════════════════════════════════ */}
        <div className="hidden md:block overflow-y-auto p-6 md:p-8 space-y-6" style={{ scrollbarWidth: 'thin' }}>
          
          {targetTopicTitle && (
            <div className="flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border border-blue-200/80 text-xs font-bold text-blue-900 shadow-xs">
              <div className="flex items-center gap-2 truncate">
                <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Lock className="w-3.5 h-3.5" />
                </span>
                <span className="truncate">Unlock Full Topic: <strong className="font-black text-blue-950">"{targetTopicTitle}"</strong> &amp; complete curriculum</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black shrink-0 shadow-xs">
                Enroll to Access
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN: HERO, WHAT YOU'LL LEARN, WHAT'S INCLUDED */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-lg aspect-[16/9] flex items-center justify-center group">
                <img
                  src={displayPoster}
                  alt={displayTitle}
                  className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/pot1_sharp_poster.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-[11px] shadow-md">
                  <Flame className="w-3.5 h-3.5 fill-amber-950 text-amber-950" />
                  <span>{config.topBadgeLeft}</span>
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/90 text-white font-bold text-[11px] shadow-md backdrop-blur-xs">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{config.topBadgeRight}</span>
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 flex-wrap">
                  {toolBadges.map((b, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-cyan-400/30 text-[10.5px] font-bold text-cyan-200 backdrop-blur-xs shadow-xs">
                      {b}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={handlePayNow}
                  className="relative z-10 px-5 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white font-bold text-sm flex items-center gap-2.5 border border-white/20 shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
                    <Play className="w-2.5 h-2.5 fill-slate-900 text-slate-900 ml-0.5" />
                  </div>
                  <span>Instant Lifetime Access</span>
                </button>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                  {displayTitle}
                </h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed mt-1.5">
                  {displayDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-black text-slate-900 tracking-wider uppercase mb-2.5">
                  WHAT YOU&apos;LL LEARN
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
                  <div className="space-y-2">
                    {skills.slice(0, 4).map((s, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {skills.slice(4, 8).map((s, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: PRICING CARD & CAREER PROMISE (NO 3-STEP TIMELINE) */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="p-5 rounded-2xl border-2 border-blue-500 bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-white shadow-lg shadow-blue-500/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-base font-black text-slate-900">Program Enrollment</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Recommended
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-bold text-slate-500">Full Course Fee:</span>
                    <span className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                      ₹{effectivePrice}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-700">
                    One-time enrollment with full lifetime access and dedicated career assistance ({salaryText})
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-blue-100/80 text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Full course access (lifetime)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>15+ real-world industry capstone projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>AI Mock interviews with detailed feedback</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Verified industrial training experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Official recommendation letter &amp; certificate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Dedicated Job Assistance ({salaryText})</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handlePayNow}
                  disabled={isLoading}
                  className="w-full py-4 px-6 rounded-2xl font-black text-white text-base bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#9333ea] hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : isPaid ? (
                    <>
                      <span>Resume Course</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  ) : (
                    <>
                      <span>Pay ₹{effectivePrice} Now</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Secure &amp; Safe Razorpay Payment • 256-bit SSL Encrypted</span>
                </div>
              </div>

              {/* Career Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50/80 via-yellow-50/40 to-amber-50/60 border border-amber-200/90 space-y-2">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-red-600" />
                  <h5 className="text-xs font-black text-slate-900 uppercase">Dedicated Placement Support</h5>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Practical learning, real-world experience, and verified career guidance ({salaryText}).
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SuccessPlanModal;
