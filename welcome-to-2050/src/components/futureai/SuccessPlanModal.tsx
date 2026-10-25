import React, { useState } from 'react';
import {
  X,
  Check,
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
  ArrowRight,
  Target,
  Laptop,
  Wallet,
  Award,
  Video,
  Code2,
  Lightbulb,
  MessageSquare,
  Star,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { startRazorpayCheckout, getCurrentUserForPayment } from '../../services/razorpayService';
import { unlockCourse, normalizeCourseId } from '../../services/courseUnlockService';
import { recordReferralPayment } from '../../services/realAuthService';

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
  courseTitle = 'Data Scientist & Agentic AI',
  courseId,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handlePayNow = async () => {
    setError(null);
    const user = getCurrentUserForPayment();
    const canonicalCourseId = normalizeCourseId(courseId || courseTitle);

    setIsLoading(true);
    try {
      const result = await startRazorpayCheckout({
        amount: 987,
        courseId: canonicalCourseId,
        courseTitle: courseTitle,
        name: user.name || 'Student',
        email: user.email || 'student@example.com',
        phone: user.phone || undefined,
      });

      try {
        unlockCourse(canonicalCourseId);
        localStorage.setItem('futureai_payment_order_id', result.orderId);
        localStorage.setItem('futureai_payment_txn_id', result.paymentId);
      } catch {}

      // Anti-Fraud Referral Credit: Flat ₹100 upon verified Razorpay payment
      try {
        await recordReferralPayment({
          paymentId: result.paymentId,
          orderId: result.orderId,
          amount: result.amount,
          payerEmail: user.email,
          payerPhone: user.phone || undefined,
          payerName: user.name,
          courseTitle: courseTitle,
        });
      } catch (refErr) {
        console.warn('Referral payment record notice:', refErr);
      }

      onClose();
      window.location.hash = `payment-success?txnid=${encodeURIComponent(result.paymentId)}&amount=${result.amount}&courseId=${encodeURIComponent(canonicalCourseId)}`;
      window.location.reload();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Payment failed. Please try again.';
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-slate-950/75 backdrop-blur-md overflow-y-auto animate-fadeIn transition-all duration-300">
      
      {/* Premium Glassmorphic Modal Container */}
      <div className="relative max-w-5xl w-full bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_25px_70px_rgba(15,23,42,0.3)] border border-slate-200/90 overflow-hidden my-auto max-h-[94vh] flex flex-col text-left transition-all duration-300 transform animate-in fade-in zoom-in-95">
        
        {/* Subtle Ambient Decorative Corner Glows */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close"
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-30 w-9 h-9 rounded-full bg-white/90 hover:bg-slate-100 hover:rotate-90 text-slate-500 hover:text-slate-900 flex items-center justify-center cursor-pointer transition-all duration-200 shadow-md border border-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-5" style={{ scrollbarWidth: 'thin' }}>
          
          {/* Target Notification Pill (If triggered by clicking a specific locked topic) */}
          {targetTopicTitle && (
            <div className="flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border border-blue-200/80 text-xs font-bold text-blue-900 shadow-2xs">
              <div className="flex items-center gap-2 truncate">
                <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Lock className="w-3.5 h-3.5" />
                </span>
                <span className="truncate">Unlock Full Topic: <strong className="font-black text-blue-950">"{targetTopicTitle}"</strong> & complete curriculum</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black shrink-0 shadow-xs">
                Enroll to Access
              </span>
            </div>
          )}

          {/* 2-Column Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* =========================================================================
                LEFT COLUMN: PREVIEW VIDEO, HEADLINE, WHAT YOU'LL LEARN & WHAT'S INCLUDED
                ========================================================================= */}
            <div className="lg:col-span-7 space-y-4.5">
              
              {/* 1. Video / Banner Preview Box */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-lg aspect-[16/9] flex items-center justify-center group">
                <img
                  src="/images/hero-student-robot-poster.jpg"
                  alt="Course Preview"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/banner-robot-hologram.jpg';
                  }}
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Top Left: Most Popular */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-[11px] shadow-md">
                  <Flame className="w-3.5 h-3.5 fill-amber-950 text-amber-950 animate-pulse" />
                  <span>Most Popular</span>
                </div>

                {/* Top Right: 50+ Hours */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/90 text-white font-bold text-[11px] shadow-md backdrop-blur-xs">
                  <Clock className="w-3.5 h-3.5" />
                  <span>50+ Hours Hands-on</span>
                </div>

                {/* Hologram Floating Nodes Badges */}
                <div className="absolute top-12 left-4 hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-900/70 border border-blue-400/40 text-[10px] font-bold text-cyan-200 backdrop-blur-xs shadow-sm">
                  <span>Data Science</span>
                </div>
                <div className="absolute top-8 left-1/3 hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-900/70 border border-amber-400/40 text-[10px] font-bold text-amber-200 backdrop-blur-xs shadow-sm">
                  <span>Machine Learning</span>
                </div>
                <div className="absolute top-14 right-8 hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-900/70 border border-indigo-400/40 text-[10px] font-bold text-indigo-200 backdrop-blur-xs shadow-sm">
                  <span>Agentic AI</span>
                </div>
                <div className="absolute bottom-14 right-6 hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-teal-900/70 border border-teal-400/40 text-[10px] font-bold text-teal-200 backdrop-blur-xs shadow-sm">
                  <span>Projects</span>
                </div>

                {/* Center / Bottom Play CTA */}
                <button
                  type="button"
                  onClick={handlePayNow}
                  className="group/play relative z-10 px-5 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm flex items-center gap-2.5 border border-white/20 shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <div className="relative w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
                    <Play className="w-2.5 h-2.5 fill-slate-900 text-slate-900 ml-0.5 group-hover/play:scale-110 transition-transform" />
                  </div>
                  <span>Watch Course Preview</span>
                </button>
              </div>

              {/* 2. Course Headline & Description */}
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  {courseTitle}
                </h2>
                <p className="text-xs sm:text-[13px] font-medium text-slate-600 leading-relaxed">
                  Master Data Analytics, Python, SQL, Excel, Power BI, Statistics and Build AI Agents to solve real-world problems and get high-paying jobs.
                </p>
              </div>

              {/* 3. What You'll Learn Checklist */}
              <div className="space-y-2 pt-1">
                <h3 className="text-xs sm:text-sm font-black text-slate-900 tracking-tight uppercase tracking-wider text-slate-500">
                  What You'll Learn
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-start gap-2 group/chk">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0 mt-0.5 group-hover/chk:scale-125 transition-transform" />
                    <span>Python for Data Science</span>
                  </div>
                  <div className="flex items-start gap-2 group/chk">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0 mt-0.5 group-hover/chk:scale-125 transition-transform" />
                    <span>Agentic AI & AI Agents</span>
                  </div>
                  <div className="flex items-start gap-2 group/chk">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0 mt-0.5 group-hover/chk:scale-125 transition-transform" />
                    <span>Data Analysis & Visualization</span>
                  </div>
                  <div className="flex items-start gap-2 group/chk">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0 mt-0.5 group-hover/chk:scale-125 transition-transform" />
                    <span>RAG & Vector Databases</span>
                  </div>
                  <div className="flex items-start gap-2 group/chk">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0 mt-0.5 group-hover/chk:scale-125 transition-transform" />
                    <span>Statistics & Probability</span>
                  </div>
                  <div className="flex items-start gap-2 group/chk">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0 mt-0.5 group-hover/chk:scale-125 transition-transform" />
                    <span>GenAI with Real-world Use Cases</span>
                  </div>
                  <div className="flex items-start gap-2 group/chk">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0 mt-0.5 group-hover/chk:scale-125 transition-transform" />
                    <span>Machine Learning (Supervised & Unsupervised)</span>
                  </div>
                  <div className="flex items-start gap-2 group/chk">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0 mt-0.5 group-hover/chk:scale-125 transition-transform" />
                    <span>MLOps & Model Deployment</span>
                  </div>
                  <div className="flex items-start gap-2 group/chk">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0 mt-0.5 group-hover/chk:scale-125 transition-transform" />
                    <span>Deep Learning (NN, CNN, RNN)</span>
                  </div>
                  <div className="flex items-start gap-2 group/chk">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0 mt-0.5 group-hover/chk:scale-125 transition-transform" />
                    <span>End-to-end Projects</span>
                  </div>
                  <div className="flex items-start gap-2 group/chk">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0 mt-0.5 group-hover/chk:scale-125 transition-transform" />
                    <span>NLP & LLMs</span>
                  </div>
                  <div className="flex items-start gap-2 group/chk">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0 mt-0.5 group-hover/chk:scale-125 transition-transform" />
                    <span>Interview Preparation</span>
                  </div>
                </div>
              </div>

              {/* 4. What's Included (3x3 Grid of Premium Cards with Hover Lift) */}
              <div className="space-y-2 pt-1">
                <h3 className="text-xs sm:text-sm font-black text-slate-900 tracking-tight uppercase tracking-wider text-slate-500">
                  What's Included
                </h3>
                <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                  
                  <div className="group/item p-2 sm:p-2.5 rounded-xl bg-purple-50/70 hover:bg-purple-50 border border-purple-100 hover:border-purple-300 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 flex items-center gap-2 cursor-default">
                    <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-2xs group-hover/item:scale-105 transition-transform">
                      <Video className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-black text-slate-900 leading-tight truncate">Video Lessons</span>
                      <span className="text-[9.5px] text-slate-500 font-medium truncate">(HD Quality)</span>
                    </div>
                  </div>

                  <div className="group/item p-2 sm:p-2.5 rounded-xl bg-emerald-50/70 hover:bg-emerald-50 border border-emerald-100 hover:border-emerald-300 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 flex items-center gap-2 cursor-default">
                    <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs group-hover/item:scale-105 transition-transform">
                      <FileText className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-black text-slate-900 leading-tight truncate">Practice Questions</span>
                      <span className="text-[9.5px] text-slate-500 font-medium truncate">for Every Topic</span>
                    </div>
                  </div>

                  <div className="group/item p-2 sm:p-2.5 rounded-xl bg-orange-50/70 hover:bg-orange-50 border border-orange-100 hover:border-orange-300 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 flex items-center gap-2 cursor-default">
                    <div className="w-7 h-7 rounded-lg bg-orange-600 text-white flex items-center justify-center shrink-0 shadow-2xs group-hover/item:scale-105 transition-transform">
                      <Code2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-black text-slate-900 leading-tight truncate">Coding Exercises</span>
                      <span className="text-[9.5px] text-slate-500 font-medium truncate">with Solutions</span>
                    </div>
                  </div>

                  <div className="group/item p-2 sm:p-2.5 rounded-xl bg-rose-50/70 hover:bg-rose-50 border border-rose-100 hover:border-rose-300 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 flex items-center gap-2 cursor-default">
                    <div className="w-7 h-7 rounded-lg bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-2xs group-hover/item:scale-105 transition-transform">
                      <Lightbulb className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-black text-slate-900 leading-tight truncate">Mock Interview</span>
                      <span className="text-[9.5px] text-slate-500 font-medium truncate">(Every Topic)</span>
                    </div>
                  </div>

                  <div className="group/item p-2 sm:p-2.5 rounded-xl bg-amber-50/70 hover:bg-amber-50 border border-amber-100 hover:border-amber-300 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 flex items-center gap-2 cursor-default">
                    <div className="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-2xs group-hover/item:scale-105 transition-transform">
                      <Briefcase className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-black text-slate-900 leading-tight truncate">Real-world</span>
                      <span className="text-[9.5px] text-slate-500 font-medium truncate">Projects (15+)</span>
                    </div>
                  </div>

                  <div className="group/item p-2 sm:p-2.5 rounded-xl bg-blue-50/70 hover:bg-blue-50 border border-blue-100 hover:border-blue-300 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 flex items-center gap-2 cursor-default">
                    <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-2xs group-hover/item:scale-105 transition-transform">
                      <Building2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-black text-slate-900 leading-tight truncate">Industrial</span>
                      <span className="text-[9.5px] text-slate-500 font-medium truncate">Training</span>
                    </div>
                  </div>

                  <div className="group/item p-2 sm:p-2.5 rounded-xl bg-indigo-50/70 hover:bg-indigo-50 border border-indigo-100 hover:border-indigo-300 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 flex items-center gap-2 cursor-default">
                    <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-2xs group-hover/item:scale-105 transition-transform">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-black text-slate-900 leading-tight truncate">Recommendation</span>
                      <span className="text-[9.5px] text-slate-500 font-medium truncate">Letter</span>
                    </div>
                  </div>

                  <div className="group/item p-2 sm:p-2.5 rounded-xl bg-teal-50/70 hover:bg-teal-50 border border-teal-100 hover:border-teal-300 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 flex items-center gap-2 cursor-default">
                    <div className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-2xs group-hover/item:scale-105 transition-transform">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-black text-slate-900 leading-tight truncate">Job Assistance</span>
                      <span className="text-[9.5px] text-slate-500 font-medium truncate">(6–20 LPA*)</span>
                    </div>
                  </div>

                  <div className="group/item p-2 sm:p-2.5 rounded-xl bg-purple-50/70 hover:bg-purple-50 border border-purple-100 hover:border-purple-300 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 flex items-center gap-2 cursor-default">
                    <div className="w-7 h-7 rounded-lg bg-purple-700 text-white flex items-center justify-center shrink-0 shadow-2xs group-hover/item:scale-105 transition-transform">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-black text-slate-900 leading-tight truncate">Mentor Support</span>
                      <span className="text-[9.5px] text-slate-500 font-medium truncate">& Community</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>


            {/* =========================================================================
                RIGHT COLUMN: CHOOSE YOUR SUCCESS PLAN, PRICING, PAY NOW & 3-STEP TIMELINE
                ========================================================================= */}
            <div className="lg:col-span-5 space-y-3.5">
              
              {/* Header */}
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Choose Your <span className="text-emerald-600">Success Plan</span>
                  </h3>
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 shadow-2xs">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs font-medium text-slate-500">
                  Start your career in Data Science & Agentic AI.
                </p>
              </div>

              {/* Pay After Placement Plan Card (Luxury Glowing Card) */}
              <div className="p-4 sm:p-5 rounded-2xl border-2 border-blue-500 bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-white shadow-lg shadow-blue-500/10 relative space-y-3 transition-all duration-300">
                
                {/* Plan Header & Radio */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center shrink-0 bg-white shadow-2xs">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                    </div>
                    <span className="text-sm font-black text-slate-900">
                      Pay After Placement Plan
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-2xs flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-emerald-600" />
                    <span>Recommended</span>
                  </span>
                </div>

                {/* Price Display */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500">Full Course Fee</span>
                    <span className="text-xs font-bold text-slate-400 line-through">₹18,987</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent tracking-tight">
                      ₹987
                    </span>
                  </div>
                  <p className="text-[11.5px] font-semibold text-slate-700 leading-tight">
                    Pay <strong className="text-slate-900 font-extrabold">₹987 now</strong> and pay the remaining{' '}
                    <strong className="text-slate-900 font-extrabold">₹18,000</strong> after getting a job offer (6–20 LPA*)
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="space-y-1.5 pt-1.5 border-t border-blue-100/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0" />
                    <span>Full course access (lifetime)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0" />
                    <span>15+ real-world projects</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0" />
                    <span>Mock interview (every topic)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0" />
                    <span>Industrial training (real experience)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0" />
                    <span>Recommendation letter</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0" />
                    <span>Job assistance (6–20 LPA*)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0" />
                    <span>Continuous course updates</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0" />
                    <span>Mentor support & community</span>
                  </div>
                </div>

              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-bold text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Primary Green CTA Button (Smooth & Animated with Shimmer) */}
              <button
                type="button"
                onClick={handlePayNow}
                disabled={isLoading}
                className="group/pay w-full py-3.5 sm:py-4 px-6 rounded-2xl font-black text-white text-base sm:text-lg bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-60 shadow-lg shadow-emerald-600/25"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing Payment...</span>
                  </>
                ) : (
                  <>
                    <span>Pay ₹987 Now</span>
                    <ArrowRight className="w-5 h-5 group-hover/pay:translate-x-1.5 transition-transform duration-200" />
                  </>
                )}
              </button>

              {/* Security Reassurance Pill */}
              <div className="flex items-center justify-center gap-1.5 text-center text-[11px] font-bold text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Secure & Safe Payment • Your payment information is encrypted</span>
              </div>

              {/* 3-Step Process Flow (Placed Directly Below Pay Now) */}
              <div className="p-3 rounded-2xl bg-slate-50/90 border border-slate-200/90 flex items-center justify-between text-center gap-1 shadow-2xs">
                
                {/* Step 1 */}
                <div className="flex flex-col items-center min-w-0 flex-1 group/step">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xs shadow-xs mb-1 group-hover/step:scale-110 transition-transform">
                    1
                  </div>
                  <span className="text-[11px] font-black text-slate-900 leading-tight">Pay ₹987</span>
                  <span className="text-[9.5px] text-slate-500 font-medium">Now (Enrollment)</span>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mx-0.5" />

                {/* Step 2 */}
                <div className="flex flex-col items-center min-w-0 flex-1 group/step">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xs shadow-xs mb-1 group-hover/step:scale-110 transition-transform">
                    2
                  </div>
                  <span className="text-[11px] font-black text-slate-900 leading-tight">Learn & Build</span>
                  <span className="text-[9.5px] text-slate-500 font-medium">Live + Projects</span>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mx-0.5" />

                {/* Step 3 */}
                <div className="flex flex-col items-center min-w-0 flex-1 group/step">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-xs shadow-xs mb-1 group-hover/step:scale-110 transition-transform">
                    3
                  </div>
                  <span className="text-[11px] font-black text-slate-900 leading-tight">Get Job Offer</span>
                  <span className="text-[9.5px] text-emerald-700 font-extrabold">Pay ₹18,000</span>
                </div>

              </div>

              {/* "Our Focus is Your Career" Highlight Box */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-amber-50/80 via-yellow-50/40 to-amber-50/60 border border-amber-200/90 shadow-2xs space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 shadow-2xs">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">
                      Our Focus is Your Career
                    </h4>
                    <p className="text-[11px] font-semibold text-slate-600 leading-tight">
                      Practical learning ➔ Real experience ➔ Job offer (6–20 LPA*). No extra fees, no hidden charges.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center pt-1.5 border-t border-amber-200/60">
                  <div className="flex flex-col items-center group/sub">
                    <span className="text-xs group-hover/sub:scale-125 transition-transform">📊</span>
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-slate-700 leading-tight mt-0.5">Practical Learning</span>
                  </div>
                  <div className="flex flex-col items-center group/sub">
                    <span className="text-xs group-hover/sub:scale-125 transition-transform">💼</span>
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-slate-700 leading-tight mt-0.5">Real Projects</span>
                  </div>
                  <div className="flex flex-col items-center group/sub">
                    <span className="text-xs group-hover/sub:scale-125 transition-transform">👥</span>
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-slate-700 leading-tight mt-0.5">Industry Exposure</span>
                  </div>
                  <div className="flex flex-col items-center group/sub">
                    <span className="text-xs group-hover/sub:scale-125 transition-transform">🏛</span>
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-slate-700 leading-tight mt-0.5">Job Support</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* =========================================================================
            PURE BOTTOM FOOTER: TRUSTED BY 10,000+ LEARNERS & POWER GREEN INDUSTRIES
            ========================================================================= */}
        <div className="border-t border-slate-200/90 bg-gradient-to-r from-slate-50 via-white to-slate-50 px-4 sm:px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3 shrink-0 shadow-inner">
          
          {/* Overlapping Avatars & Ratings */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2 shrink-0">
              <img className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs" src="/images/avatar-rohit.jpg" alt="Student" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
              <img className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs" src="/images/avatar-sneha.jpg" alt="Student" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
              <img className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs" src="/images/avatar-neha.jpg" alt="Student" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
              <img className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs" src="/images/avatar-subodh-kumar.jpg" alt="Student" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
            </div>
            <div>
              <span className="text-xs font-black text-slate-900 block leading-tight">Trusted by 10,000+ Learners</span>
              <div className="flex items-center gap-1 text-[11px] font-bold text-amber-500">
                <span>★★★★★</span>
                <span className="text-slate-600 font-extrabold text-[10.5px]">4.8/5 (1,200+ reviews)</span>
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="flex items-center gap-2 max-w-sm text-left bg-white p-2 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow">
            <img
              src="/images/student_female_portrait.jpg"
              alt="Priya Singh"
              className="w-8 h-8 rounded-full object-cover shrink-0 border border-emerald-300 shadow-2xs"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/avatar-neha.jpg';
              }}
            />
            <div className="flex flex-col min-w-0">
              <p className="text-[10px] text-slate-600 font-medium italic line-clamp-1 leading-tight">
                "The projects and Agentic AI training helped me get my dream job."
              </p>
              <span className="text-[9.5px] font-black text-slate-900 mt-0.5">
                Priya Singh <span className="font-normal text-emerald-700">• Placed at Product-based Co.</span>
              </span>
            </div>
          </div>

          {/* Powered by */}
          <div className="text-center text-[11px] font-bold text-slate-500 flex items-center justify-center gap-1.5 shrink-0">
            <span>🍃 Powered by Power Green Industries</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SuccessPlanModal;
