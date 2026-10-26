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
  Award,
  Code2,
  Lightbulb,
  MessageSquare,
  Loader2,
  AlertCircle,
  Star
} from 'lucide-react';
import { startRazorpayCheckout, getCurrentUserForPayment } from '../../services/razorpayService';
import { unlockCourse, verifyAndUnlockWithProof, normalizeCourseId, CanonicalCourseId } from '../../services/courseUnlockService';
import { recordReferralPayment } from '../../services/realAuthService';
import { recordCourseEnrollmentInCloud } from '../../services/cloudSyncService';

export interface SuccessPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetTopicTitle?: string;
  courseTitle?: string;
  courseId?: string;
}

interface CourseMetadata {
  title: string;
  shortDesc: string;
  poster: string;
  badges: string[];
  skills: string[];
  salary: string;
  defaultPrice: number;
}

const COURSES_INFO: Record<string, CourseMetadata> = {
  data_analyst: {
    title: 'Data Analyst with GenAI',
    shortDesc: 'Master Python, SQL, Power BI, Advanced Excel & Generative AI to build automated enterprise dashboards and launch high-paying analytics careers.',
    poster: '/images/pot1_sharp_poster.jpg',
    badges: ['Data Analytics', 'Python & SQL', 'Power BI & DAX', 'GenAI Automation'],
    skills: [
      'Python Programming for Data & Automation',
      'Relational Databases & SQL Mastery',
      'Advanced Microsoft Excel & Power Query',
      'Power BI & Executive Dashboarding',
      'Statistics & Probability for Decision Making',
      'Generative AI & LLM Analytics Automation',
      'Real-World Enterprise Capstone Projects',
      'AI Mock Interviews & Placement Support'
    ],
    salary: '6 – 15 LPA*',
    defaultPrice: 9
  },
  data_science: {
    title: 'Data Science & Agentic AI',
    shortDesc: 'Build Machine Learning models, RAG pipelines, and autonomous AI Agent systems with PyTorch, LangChain, and vector databases.',
    poster: '/images/pot2_sharp_poster.jpg',
    badges: ['Data Science', 'Machine Learning', 'Agentic AI', 'RAG & Vector DB'],
    skills: [
      'Python for Data Science & ML',
      'Machine Learning (Supervised & Unsupervised)',
      'Agentic AI & Multi-Agent Frameworks',
      'RAG & Vector Databases (Chroma / Pinecone)',
      'Deep Learning & PyTorch Fundamentals',
      'NLP, LLMs & Advanced Prompting',
      'MLOps & Production Model Deployment',
      'Enterprise Capstones & Job Prep'
    ],
    salary: '8 – 24 LPA*',
    defaultPrice: 987
  },
  ml_engineering: {
    title: 'Machine Learning Engineering',
    shortDesc: 'Train, fine-tune, optimize, and deploy industrial-grade Machine Learning and Deep Learning models at scale.',
    poster: '/images/pot3_sharp_poster.jpg',
    badges: ['Machine Learning', 'PyTorch', 'MLOps', 'Cloud Serving'],
    skills: [
      'Advanced ML Algorithms & Math Foundations',
      'Deep Neural Networks & Architectures',
      'PyTorch & TensorFlow Production Workflows',
      'Model Optimization, Pruning & Quantization',
      'CI/CD Pipelines for Machine Learning (MLOps)',
      'Docker, Kubernetes & Scalable Model Serving',
      'End-to-End Enterprise ML Capstone Project',
      'Placement & System Design Mock Interviews'
    ],
    salary: '10 – 25 LPA*',
    defaultPrice: 987
  },
  ai_engineering: {
    title: 'AI Engineering & LLMOps',
    shortDesc: 'Architect production GenAI applications, LangGraph workflows, fine-tuning, and scalable LLM inference pipelines.',
    poster: '/images/pot4_sharp_poster.jpg',
    badges: ['AI Engineering', 'LangGraph', 'Fine-Tuning', 'LLMOps'],
    skills: [
      'Full LLM Architecture & Mechanics',
      'LangChain & LangGraph Workflows',
      'PEFT, LoRA & Model Fine-Tuning',
      'Vector Databases & Advanced RAG',
      'Evaluation & Guardrails (Ragas / NeMo)',
      'Production API Deployment & Streaming',
      'Enterprise Autonomous Agent Capstone',
      'AI Mock Interview & Referral Pipeline'
    ],
    salary: '12 – 30 LPA*',
    defaultPrice: 987
  },
  ai_tools_prompt: {
    title: 'AI Tools & Prompt Engineering Mastery',
    shortDesc: 'Supercharge productivity and workflow automation using 50+ cutting-edge AI tools and expert prompt engineering techniques.',
    poster: '/images/pot5_sharp_poster.jpg',
    badges: ['AI Tools', 'Prompt Engineering', 'Automation', 'Productivity'],
    skills: [
      'Advanced Prompt Engineering Frameworks',
      'ChatGPT, Claude & Perplexity Mastery',
      'AI Video, Audio & Image Generation',
      'Workflow Automation with Zapier & Make',
      'Custom GPTs & Autonomous Assistants',
      'Code Generation & Debugging with Copilot',
      'Real-World Business Automation Projects',
      'Certification & Industry Portfolios'
    ],
    salary: '5 – 12 LPA*',
    defaultPrice: 987
  },
  ms_office_copilot: {
    title: 'Microsoft 365 with Copilot AI',
    shortDesc: 'Transform Excel, Word, PowerPoint, and Outlook into AI-powered productivity engines with Copilot and business intelligence.',
    poster: '/images/pot6_sharp_poster.jpg',
    badges: ['MS Office 365', 'Copilot AI', 'Advanced Excel', 'Executive BI'],
    skills: [
      'Advanced Excel & Formula Engineering',
      'Power Query & Automated Data Transformation',
      'Microsoft Copilot in Excel & Word',
      'Dynamic PowerPoint Presentations with AI',
      'Outlook & Teams AI Workflow Automation',
      'Executive Dashboards & Strategic Reporting',
      'Business Case Studies & Capstone Project',
      'Placement & Corporate Readiness'
    ],
    salary: '4.5 – 10 LPA*',
    defaultPrice: 987
  },
  full_stack_mern: {
    title: 'Full-Stack MERN Development with AI',
    shortDesc: 'Build modern high-speed web apps with React 18, Node.js, Express, MongoDB, and integrate intelligent AI capabilities.',
    poster: '/images/pot7_sharp_poster.jpg',
    badges: ['React 18', 'Node.js', 'MongoDB', 'AI Integration'],
    skills: [
      'Modern JavaScript (ES6+) & TypeScript',
      'React 18, Hooks & State Management',
      'Node.js & Express RESTful APIs',
      'MongoDB & Mongoose Database Modeling',
      'Tailwind CSS & Responsive UI Systems',
      'OpenAI API & Vector Search Integration',
      'Full-Stack Cloud Deployment (AWS / Vercel)',
      'AI Mock Interviews & GitHub Portfolio'
    ],
    salary: '6 – 18 LPA*',
    defaultPrice: 987
  }
};

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
  const info = COURSES_INFO[canonicalCourseId] || COURSES_INFO.data_analyst;
  const isDataAnalyst = canonicalCourseId === 'data_analyst';
  const effectivePrice = isDataAnalyst ? 4 : (info.defaultPrice || 987);
  const displayTitle = courseTitle || info.title;

  const handlePayNow = async () => {
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

      // 2. Extract attribution code (do not fabricate default referral code)
      const storedRefCode =
        (typeof window !== 'undefined'
          ? localStorage.getItem('futureai_ref_attribution') ||
            sessionStorage.getItem('futureai_ref_attribution') ||
            new URLSearchParams(window.location.search).get('ref') ||
            ''
          : '') || '';

      // 3. Immediately close modal and stop loading so UI NEVER hangs
      setIsLoading(false);
      onClose();

      // 4. Dispatch events for instant UI reactivity
      window.dispatchEvent(
        new CustomEvent('futureai_course_unlocked', {
          detail: { userId: user.userId, courseId: canonicalCourseId },
        })
      );
      if (storedRefCode) {
        window.dispatchEvent(
          new CustomEvent('futureai_affiliate_updated', {
            detail: { refCode: storedRefCode, amount: 100 },
          })
        );
      }

      // 5. Navigate to Payment Success View
      const successHash = `#payment-success?txnid=${encodeURIComponent(result.paymentId)}&amount=${result.amount}&courseId=${encodeURIComponent(canonicalCourseId)}`;
      window.location.hash = successHash;

      // 6. Background synchronization (Non-blocking, with safety timeouts)
      (async () => {
        if (storedRefCode) {
          try {
            await recordReferralPayment({
              paymentId: result.paymentId,
              orderId: result.orderId,
              amount: result.amount,
              payerEmail: user.email,
              payerPhone: user.phone || undefined,
              payerName: user.name,
              courseTitle: displayTitle,
              refCode: storedRefCode,
            });
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
      
      {/* Premium Glassmorphic Modal Container */}
      <div className="relative max-w-5xl w-full bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_25px_70px_rgba(15,23,42,0.3)] border border-slate-200/90 overflow-hidden my-auto max-h-[94vh] flex flex-col text-left transition-all duration-300 transform animate-in fade-in zoom-in-95">
        
        {/* Ambient Decorative Corner Glows */}
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
            <div className="flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border border-blue-200/80 text-xs font-bold text-blue-900 shadow-xs">
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
            
            {/* LEFT COLUMN: PREVIEW VIDEO, HEADLINE, WHAT YOU'LL LEARN & WHAT'S INCLUDED */}
            <div className="lg:col-span-7 space-y-4.5">
              
              {/* 1. Video / Banner Preview Box */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-lg aspect-[16/9] flex items-center justify-center group">
                <img
                  src={info.poster}
                  alt={displayTitle}
                  className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/pot1_sharp_poster.jpg';
                  }}
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Top Left: Most Popular */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-[11px] shadow-md">
                  <Flame className="w-3.5 h-3.5 fill-amber-950 text-amber-950 animate-pulse" />
                  <span>Most Popular Program</span>
                </div>

                {/* Top Right: 50+ Hours */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/90 text-white font-bold text-[11px] shadow-md backdrop-blur-xs">
                  <Clock className="w-3.5 h-3.5" />
                  <span>50+ Hours Live & Hands-on</span>
                </div>

                {/* Hologram Floating Nodes Badges */}
                <div className="absolute bottom-3 left-3 hidden sm:flex items-center gap-1.5 flex-wrap">
                  {info.badges.map((b, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-cyan-400/30 text-[10.5px] font-bold text-cyan-200 backdrop-blur-xs shadow-xs">
                      {b}
                    </span>
                  ))}
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
                  <span>Instant Lifetime Access</span>
                </button>
              </div>

              {/* 2. Course Headline & Description */}
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  {displayTitle}
                </h2>
                <p className="text-xs sm:text-[13px] font-medium text-slate-600 leading-relaxed">
                  {info.shortDesc}
                </p>
              </div>

              {/* 3. What You'll Learn Checklist */}
              <div className="space-y-2 pt-1">
                <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider text-slate-500">
                  What You'll Learn
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs font-semibold text-slate-700">
                  {info.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-2 group/chk">
                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0 mt-0.5 group-hover/chk:scale-125 transition-transform" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. What's Included (3x3 Grid of Premium Cards with Hover Lift) */}
              <div className="space-y-2 pt-1">
                <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider text-slate-500">
                  What's Included
                </h3>
                <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                  
                  <div className="group/item p-2 sm:p-2.5 rounded-xl bg-purple-50/70 hover:bg-purple-50 border border-purple-100 hover:border-purple-300 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 flex items-center gap-2 cursor-default">
                    <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover/item:scale-105 transition-transform">
                      <GraduationCap className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-black text-slate-900 leading-tight truncate">Full Course</span>
                      <span className="text-[9.5px] text-slate-500 font-medium truncate">HD Quality</span>
                    </div>
                  </div>

                  <div className="group/item p-2 sm:p-2.5 rounded-xl bg-emerald-50/70 hover:bg-emerald-50 border border-emerald-100 hover:border-emerald-300 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 flex items-center gap-2 cursor-default">
                    <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover/item:scale-105 transition-transform">
                      <FileText className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-black text-slate-900 leading-tight truncate">Practice Questions</span>
                      <span className="text-[9.5px] text-slate-500 font-medium truncate">for Every Topic</span>
                    </div>
                  </div>

                  <div className="group/item p-2 sm:p-2.5 rounded-xl bg-orange-50/70 hover:bg-orange-50 border border-orange-100 hover:border-orange-300 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 flex items-center gap-2 cursor-default">
                    <div className="w-7 h-7 rounded-lg bg-orange-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover/item:scale-105 transition-transform">
                      <Code2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-black text-slate-900 leading-tight truncate">Coding Exercises</span>
                      <span className="text-[9.5px] text-slate-500 font-medium truncate">with Solutions</span>
                    </div>
                  </div>

                  <div className="group/item p-2 sm:p-2.5 rounded-xl bg-rose-50/70 hover:bg-rose-50 border border-rose-100 hover:border-rose-300 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 flex items-center gap-2 cursor-default">
                    <div className="w-7 h-7 rounded-lg bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover/item:scale-105 transition-transform">
                      <Lightbulb className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-black text-slate-900 leading-tight truncate">Mock Interview</span>
                      <span className="text-[9.5px] text-slate-500 font-medium truncate">(Every Topic)</span>
                    </div>
                  </div>

                  <div className="group/item p-2 sm:p-2.5 rounded-xl bg-amber-50/70 hover:bg-amber-50 border border-amber-100 hover:border-amber-300 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 flex items-center gap-2 cursor-default">
                    <div className="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover/item:scale-105 transition-transform">
                      <Briefcase className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-black text-slate-900 leading-tight truncate">Real-world</span>
                      <span className="text-[9.5px] text-slate-500 font-medium truncate">Projects (15+)</span>
                    </div>
                  </div>

                  <div className="group/item p-2 sm:p-2.5 rounded-xl bg-blue-50/70 hover:bg-blue-50 border border-blue-100 hover:border-blue-300 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 flex items-center gap-2 cursor-default">
                    <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover/item:scale-105 transition-transform">
                      <Building2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-black text-slate-900 leading-tight truncate">Industrial</span>
                      <span className="text-[9.5px] text-slate-500 font-medium truncate">Training</span>
                    </div>
                  </div>

                  <div className="group/item p-2 sm:p-2.5 rounded-xl bg-indigo-50/70 hover:bg-indigo-50 border border-indigo-100 hover:border-indigo-300 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 flex items-center gap-2 cursor-default">
                    <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover/item:scale-105 transition-transform">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-black text-slate-900 leading-tight truncate">Recommendation</span>
                      <span className="text-[9.5px] text-slate-500 font-medium truncate">Letter</span>
                    </div>
                  </div>

                  <div className="group/item p-2 sm:p-2.5 rounded-xl bg-teal-50/70 hover:bg-teal-50 border border-teal-100 hover:border-teal-300 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 flex items-center gap-2 cursor-default">
                    <div className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover/item:scale-105 transition-transform">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-black text-slate-900 leading-tight truncate">Job Assistance</span>
                      <span className="text-[9.5px] text-slate-500 font-medium truncate">({info.salary})</span>
                    </div>
                  </div>

                  <div className="group/item p-2 sm:p-2.5 rounded-xl bg-purple-50/70 hover:bg-purple-50 border border-purple-100 hover:border-purple-300 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 flex items-center gap-2 cursor-default">
                    <div className="w-7 h-7 rounded-lg bg-purple-700 text-white flex items-center justify-center shrink-0 shadow-xs group-hover/item:scale-105 transition-transform">
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

            {/* RIGHT COLUMN: SUCCESS PLAN, PRICING, PAY NOW & 3-STEP TIMELINE */}
            <div className="lg:col-span-5 space-y-3.5">
              
              {/* Header */}
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Choose Your <span className="text-emerald-600">Success Plan</span>
                  </h3>
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 shadow-xs">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs font-medium text-slate-500">
                  Fast-track your high-paying tech career with 100% money-back guarantee.
                </p>
              </div>

              {/* Pay After Placement Plan Card (Luxury Glowing Card) */}
              <div className="p-4 sm:p-5 rounded-2xl border-2 border-blue-500 bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-white shadow-lg shadow-blue-500/10 relative space-y-3 transition-all duration-300">
                
                {/* Plan Header & Radio */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center shrink-0 bg-white shadow-xs">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                    </div>
                    <span className="text-sm font-black text-slate-900">
                      Pay After Placement Plan
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-xs flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-emerald-600" />
                    <span>Recommended</span>
                  </span>
                </div>

                {/* Price Display */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500">Full Program Access:</span>
                    <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent tracking-tight">
                      ₹{effectivePrice}
                    </span>
                  </div>
                  <p className="text-[11.5px] font-semibold text-slate-700 leading-tight">
                    Pay <strong className="text-slate-900 font-extrabold">₹{effectivePrice} now</strong> and pay the remaining{' '}
                    <strong className="text-slate-900 font-extrabold">₹18,000</strong> only after getting placed ({info.salary})
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
                    <span>15+ real-world industry capstone projects</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0" />
                    <span>AI Mock interviews with detailed feedback</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0" />
                    <span>Verified industrial training experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0" />
                    <span>Official recommendation letter & certificate</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0" />
                    <span>Guaranteed Job Assistance ({info.salary})</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0" />
                    <span>Continuous curriculum updates & support</span>
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
                    <span>Pay ₹{effectivePrice} Now</span>
                    <ArrowRight className="w-5 h-5 group-hover/pay:translate-x-1.5 transition-transform duration-200" />
                  </>
                )}
              </button>

              {/* Security Reassurance Pill */}
              <div className="flex items-center justify-center gap-1.5 text-center text-[11px] font-bold text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Secure & Safe Razorpay Payment • 256-bit SSL Encrypted</span>
              </div>

              {/* 3-Step Process Flow (Placed Directly Below Pay Now) */}
              <div className="p-3 rounded-2xl bg-slate-50/90 border border-slate-200/90 flex items-center justify-between text-center gap-1 shadow-xs">
                
                {/* Step 1 */}
                <div className="flex flex-col items-center min-w-0 flex-1 group/step">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xs shadow-xs mb-1 group-hover/step:scale-110 transition-transform">
                    1
                  </div>
                  <span className="text-[11px] font-black text-slate-900 leading-tight">Pay ₹{effectivePrice}</span>
                  <span className="text-[9.5px] text-slate-500 font-medium">Now (Enrollment)</span>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mx-0.5" />

                {/* Step 2 */}
                <div className="flex flex-col items-center min-w-0 flex-1 group/step">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xs shadow-xs mb-1 group-hover/step:scale-110 transition-transform">
                    2
                  </div>
                  <span className="text-[11px] font-black text-slate-900 leading-tight">Learn & Build</span>
                  <span className="text-[9.5px] text-slate-500 font-medium">Live + Capstones</span>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mx-0.5" />

                {/* Step 3 */}
                <div className="flex flex-col items-center min-w-0 flex-1 group/step">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-xs shadow-xs mb-1 group-hover/step:scale-110 transition-transform">
                    3
                  </div>
                  <span className="text-[11px] font-black text-slate-900 leading-tight">Get Placed</span>
                  <span className="text-[9.5px] text-emerald-700 font-extrabold">Pay ₹18,000</span>
                </div>

              </div>

              {/* Focus is Your Career Box */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-amber-50/80 via-yellow-50/40 to-amber-50/60 border border-amber-200/90 shadow-xs space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 shadow-xs">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">
                      Our Focus is Your Career
                    </h4>
                    <p className="text-[11px] font-semibold text-slate-600 leading-tight">
                      Practical learning → Real experience → Job offer ({info.salary}). No hidden charges.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center pt-1.5 border-t border-amber-200/60">
                  <div className="flex flex-col items-center">
                    <GraduationCap className="w-4 h-4 text-amber-700" />
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-slate-700 leading-tight mt-1">Practical Labs</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Briefcase className="w-4 h-4 text-amber-700" />
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-slate-700 leading-tight mt-1">Real Projects</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Building2 className="w-4 h-4 text-amber-700" />
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-slate-700 leading-tight mt-1">Industry Exposure</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Award className="w-4 h-4 text-amber-700" />
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-slate-700 leading-tight mt-1">Job Placement</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="border-t border-slate-200/90 bg-gradient-to-r from-slate-50 via-white to-slate-50 px-4 sm:px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3 shrink-0 shadow-inner">
          
          {/* Overlapping Avatars & Ratings */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2 shrink-0">
              <img className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-xs" src="/images/avatar-rohit.jpg" alt="Student" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
              <img className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-xs" src="/images/avatar-sneha.jpg" alt="Student" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
              <img className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-xs" src="/images/avatar-neha.jpg" alt="Student" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
              <img className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-xs" src="/images/avatar-subodh-kumar.jpg" alt="Student" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
            </div>
            <div>
              <span className="text-xs font-black text-slate-900 block leading-tight">Trusted by 10,000+ Learners</span>
              <div className="flex items-center gap-1 text-[11px] font-bold text-amber-500">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-slate-600 font-extrabold text-[10.5px] ml-1">4.8/5 (1,200+ reviews)</span>
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="flex items-center gap-2 max-w-sm text-left bg-white p-2 rounded-xl border border-slate-200/90 shadow-xs">
            <img
              src="/images/student_female_portrait.jpg"
              alt="Priya Singh"
              className="w-8 h-8 rounded-full object-cover shrink-0 border border-emerald-300 shadow-xs"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/avatar-neha.jpg';
              }}
            />
            <div className="flex flex-col min-w-0">
              <p className="text-[10px] text-slate-600 font-medium italic line-clamp-1 leading-tight">
                "The projects and hands-on training helped me land my dream analytics role."
              </p>
              <span className="text-[9.5px] font-black text-slate-900 mt-0.5">
                Priya Singh <span className="font-normal text-emerald-700">• Placed at Product-based Co.</span>
              </span>
            </div>
          </div>

          {/* Powered by */}
          <div className="text-center text-[11px] font-bold text-slate-500 flex items-center justify-center gap-1.5 shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Powered by FutureAI Learning Hub</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SuccessPlanModal;
