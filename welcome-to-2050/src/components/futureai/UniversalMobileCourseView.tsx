import React, { useState } from 'react';
import {
  Flame,
  Clock,
  Play,
  CheckCircle2,
  ShieldCheck,
  Shield,
  Star,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  FileText,
  Code2,
  Lightbulb,
  Briefcase,
  Building2,
  Award,
  Users,
  Lock,
  ArrowRight,
  BookOpen,
  Loader2
} from 'lucide-react';
import {
  CanonicalCourseId,
  normalizeCourseId,
  unlockCourse,
  verifyAndUnlockWithProof
} from '../../services/courseUnlockService';
import {
  startRazorpayCheckout,
  getCurrentUserForPayment
} from '../../services/razorpayService';
import './UniversalMobileCourseView.css';

export interface UniversalTopicItem {
  id: string;
  topicNum?: number;
  title: string;
  duration?: string;
  type?: string;
  status?: string;
}

export interface UniversalChapterItem {
  id: string;
  chapterNum: number;
  title: string;
  subtitle?: string;
  topics: UniversalTopicItem[];
}

export interface UniversalTabItem {
  id: string;
  tabNum: number;
  title: string;
  shortTitle?: string;
  subtitle?: string;
  iconName?: string;
  isFree?: boolean;
  chapters: UniversalChapterItem[];
}

export interface UniversalMobileCourseViewProps {
  courseId: string;
  courseTitle?: string;
  courseTitlePrefix?: string;
  courseTitleHighlight?: string;
  courseDescription?: string;
  courseBannerImage?: string;
  courseBannerFallback?: string;
  badgeText?: string;
  featurePills?: string[];
  enrollPriceText?: string;
  isCoursePaid: boolean;
  onBack?: () => void;
  onEnroll?: () => void;
  onResumeLearning?: () => void;
  onViewOverview?: () => void;

  // Curriculum data (for enrolled student curriculum browser)
  tabs?: UniversalTabItem[];
  activeTabId?: string;
  onSelectTab?: (tabId: string) => void;
  expandedChapters?: Record<string, boolean>;
  onToggleChapter?: (chapterId: string) => void;
  onSelectTopic?: (topic: UniversalTopicItem, chapterNum: number) => void;
  onStartTopicAction?: (topicId: string, title: string, step?: 'learn' | 'play' | 'interview') => void;

  customStats?: {
    modulesCount?: number;
    topicsCount?: number;
    projectsCount?: number;
    certificatesCount?: number | string;
    jobReadySkillsCount?: string;
  };

  techStackTags?: string[];
  courseHighlightTag?: string;
  getTabRealIcon?: (tabNum: number, iconName?: string) => string;
}

export interface CourseDetailConfig {
  id: CanonicalCourseId;
  title: string;
  shortDesc: string;
  poster: string;
  topBadgeLeft: string;
  topBadgeRight: string;
  toolBadges: string[];
  skills: string[];
  salary: string;
  price: number;
}

export const COURSES_CONFIG: Record<CanonicalCourseId, CourseDetailConfig> = {
  data_analyst: {
    id: 'data_analyst',
    title: 'Data Analyst with GenAI',
    shortDesc: 'Master Python, SQL, Power BI, Advanced Excel & Generative AI to build automated enterprise dashboards and launch high-paying analytics careers.',
    poster: '/images/pot1_sharp_poster.jpg',
    topBadgeLeft: 'Most Popular Program',
    topBadgeRight: '50+ Hours Live & Hands-on',
    toolBadges: ['Python & SQL', 'Power BI & DAX', 'Advanced Excel', 'GenAI Automation'],
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
    price: 4
  },
  data_science: {
    id: 'data_science',
    title: 'Data Science & Agentic AI',
    shortDesc: 'Build Machine Learning models, RAG pipelines, and autonomous AI Agent systems with PyTorch, LangChain, and vector databases.',
    poster: '/images/pot2_sharp_poster.jpg',
    topBadgeLeft: 'Most Popular Program',
    topBadgeRight: '50+ Hours Live & Hands-on',
    toolBadges: ['Data Science', 'Machine Learning', 'Agentic AI', 'RAG & Vector DB'],
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
    price: 987
  },
  ml_engineering: {
    id: 'ml_engineering',
    title: 'Machine Learning Engineering',
    shortDesc: 'Train, fine-tune, optimize, and deploy industrial-grade Machine Learning and Deep Learning models at scale.',
    poster: '/images/pot3_sharp_poster.jpg',
    topBadgeLeft: 'Most Popular Program',
    topBadgeRight: '60+ Hours Live & Hands-on',
    toolBadges: ['Machine Learning', 'PyTorch', 'MLOps', 'Cloud Serving'],
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
    price: 987
  },
  ai_engineering: {
    id: 'ai_engineering',
    title: 'AI Engineering',
    shortDesc: 'Architect production GenAI applications, LangGraph workflows, fine-tuning, and scalable LLM inference pipelines.',
    poster: '/images/pot4_sharp_poster.jpg',
    topBadgeLeft: 'Most Popular Program',
    topBadgeRight: '55+ Hours Live & Hands-on',
    toolBadges: ['AI Engineering', 'LangGraph', 'Fine-Tuning', 'LLMOps'],
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
    price: 987
  },
  ai_tools_prompt: {
    id: 'ai_tools_prompt',
    title: 'AI Tools & Prompt Engineering',
    shortDesc: 'Supercharge productivity and workflow automation using 50+ cutting-edge AI tools and expert prompt engineering techniques.',
    poster: '/images/pot5_sharp_poster.jpg',
    topBadgeLeft: 'Most Popular Program',
    topBadgeRight: '40+ Hours Live & Hands-on',
    toolBadges: ['AI Tools', 'Prompt Engineering', 'Automation', 'Productivity'],
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
    price: 987
  },
  ms_office_copilot: {
    id: 'ms_office_copilot',
    title: 'Microsoft Office 365 with Copilot',
    shortDesc: 'Transform Excel, Word, PowerPoint, and Outlook into AI-powered productivity engines with Copilot and business intelligence.',
    poster: '/images/pot6_sharp_poster.jpg',
    topBadgeLeft: 'Most Popular Program',
    topBadgeRight: '45+ Hours Live & Hands-on',
    toolBadges: ['MS Office 365', 'Copilot AI', 'Advanced Excel', 'Executive BI'],
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
    price: 987
  },
  full_stack_mern: {
    id: 'full_stack_mern',
    title: 'Full Stack Web Development',
    shortDesc: 'Build modern high-speed web apps with React 18, Node.js, Express, MongoDB, and integrate intelligent AI capabilities.',
    poster: '/images/pot7_sharp_poster.jpg',
    topBadgeLeft: 'Most Popular Program',
    topBadgeRight: '70+ Hours Live & Hands-on',
    toolBadges: ['React 18', 'Node.js', 'MongoDB', 'AI Integration'],
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
    price: 987
  },
  deep_learning: {
    id: 'deep_learning',
    title: 'Deep Learning & Neural Networks',
    shortDesc: 'Master Convolutional Networks, Transformers, GANs, and PyTorch deep learning architectures.',
    poster: '/images/pot3_sharp_poster.jpg',
    topBadgeLeft: 'Most Popular Program',
    topBadgeRight: '50+ Hours Live & Hands-on',
    toolBadges: ['Deep Learning', 'PyTorch', 'Transformers', 'Computer Vision'],
    skills: [
      'Neural Network Foundations & Backprop',
      'CNNs for Computer Vision & Object Detection',
      'RNNs, LSTMs & Sequence Modeling',
      'Transformer Architecture & Self-Attention',
      'Generative Adversarial Networks (GANs)',
      'Diffusion Models & Stable Diffusion',
      'Model Pruning, Quantization & TensorRT',
      'End-to-End Enterprise Deep Learning Projects'
    ],
    salary: '10 – 26 LPA*',
    price: 987
  }
};

export const UniversalMobileCourseView: React.FC<UniversalMobileCourseViewProps> = ({
  courseId,
  courseTitle,
  courseDescription,
  courseBannerImage,
  courseBannerFallback = '/images/pot1_sharp_poster.jpg',
  isCoursePaid,
  onEnroll,
  onResumeLearning,
  tabs = [],
  expandedChapters = {},
  onToggleChapter,
  onSelectTopic
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showCurriculum, setShowCurriculum] = useState(false);

  // Canonical resolution guarantees matching config for all 7 courses
  const canonicalId = normalizeCourseId(courseId);
  const config = COURSES_CONFIG[canonicalId] || COURSES_CONFIG.data_analyst;

  // Resolved dynamic values (matching reference image)
  const displayTitle = courseTitle || config.title;
  const displayDesc = courseDescription || config.shortDesc;
  const displayPoster = courseBannerImage || config.poster;
  const toolBadges = config.toolBadges;
  const skills = config.skills;
  const livePrice = config.price;
  const salaryText = config.salary;

  const handlePrimaryAction = async () => {
    if (isCoursePaid) {
      if (onResumeLearning) {
        onResumeLearning();
      } else {
        setShowCurriculum((prev) => !prev);
      }
      return;
    }

    // Direct checkout
    const user = getCurrentUserForPayment();
    if (!user.isLoggedIn || !user.userId) {
      window.dispatchEvent(new CustomEvent('futureai_open_login'));
      return;
    }

    setIsCheckingOut(true);
    try {
      const result = await startRazorpayCheckout({
        amount: livePrice,
        courseId: canonicalId,
        courseTitle: displayTitle,
        userId: user.userId,
        name: user.name || 'Student',
        email: user.email || user.userId,
        phone: user.phone || undefined
      });

      if (result.entitlementProof && result.verifiedAt) {
        const verifiedOnServer = await verifyAndUnlockWithProof({
          userId: user.userId,
          paymentId: result.paymentId,
          orderId: result.orderId,
          courseId: canonicalId,
          verifiedAt: result.verifiedAt,
          entitlementProof: result.entitlementProof
        });
        if (!verifiedOnServer) {
          unlockCourse(canonicalId, {
            userId: user.userId,
            paymentId: result.paymentId,
            orderId: result.orderId,
            paymentStatus: 'CAPTURED',
            enrollmentStatus: 'ACTIVE',
            source: 'PAYMENT'
          });
        }
      } else {
        unlockCourse(canonicalId, {
          userId: user.userId,
          paymentId: result.paymentId,
          orderId: result.orderId,
          paymentStatus: 'CAPTURED',
          enrollmentStatus: 'ACTIVE',
          source: 'PAYMENT'
        });
      }

      window.dispatchEvent(
        new CustomEvent('futureai_course_unlocked', {
          detail: { courseId: canonicalId }
        })
      );

      if (onEnroll) onEnroll();
    } catch (err: any) {
      console.error('Checkout error:', err);
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="umc-container">
      {/* ─────────────────────────────────────────────────────────────────────
          B. COURSE HERO (Matching Reference Design 1:1)
          ───────────────────────────────────────────────────────────────────── */}
      <div className="relative w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-md aspect-[16/10] sm:aspect-[16/9]">
        {/* Course Thumbnail Image */}
        <img
          src={displayPoster}
          alt={displayTitle}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = courseBannerFallback;
          }}
        />

        {/* Gradient Overlay for Top Badges & Bottom Pills readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/60 pointer-events-none" />

        {/* Top Floating Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5 z-10">
          {/* Most Popular Program */}
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-[9.5px] min-[375px]:text-[10px] shadow-sm">
            <Flame className="w-3 h-3 fill-amber-950 text-amber-950 shrink-0" />
            <span className="truncate">{config.topBadgeLeft}</span>
          </div>

          {/* 50+ Hours Live & Hands-on */}
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#10b981] text-white font-bold text-[9.5px] min-[375px]:text-[10px] shadow-sm backdrop-blur-xs">
            <Clock className="w-3 h-3 shrink-0" />
            <span className="truncate">{config.topBadgeRight}</span>
          </div>
        </div>

        {/* Center Pill: Instant Lifetime Access */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button
            type="button"
            onClick={handlePrimaryAction}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 min-[375px]:px-4 min-[375px]:py-2 rounded-full bg-slate-950/80 hover:bg-slate-950 text-white font-bold text-[11px] min-[375px]:text-xs border border-white/20 shadow-xl backdrop-blur-md active:scale-95 transition-transform cursor-pointer"
          >
            <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0">
              <Play className="w-2 h-2 fill-slate-950 text-slate-950 ml-0.5" />
            </div>
            <span>Instant Lifetime Access</span>
          </button>
        </div>

        {/* Bottom Technology Badges inside Thumbnail */}
        <div className="absolute bottom-2.5 left-2 right-2 flex items-center justify-center gap-1 sm:gap-1.5 flex-wrap z-10">
          {toolBadges.map((badge, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 min-[375px]:px-2.5 min-[375px]:py-1 rounded-md bg-slate-950/85 border border-[#1e40af] text-[8.5px] min-[375px]:text-[9.5px] font-bold text-cyan-200 backdrop-blur-xs shadow-2xs whitespace-nowrap"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Course Title */}
      <h1 className="text-[20px] min-[375px]:text-[22px] min-[400px]:text-[24px] font-black text-[#0b1a3a] tracking-tight leading-snug mt-3 text-left">
        {displayTitle}
      </h1>

      {/* Course Description */}
      <p className="text-[11px] min-[375px]:text-[11.5px] text-slate-600 font-normal leading-relaxed mt-1 text-left">
        {displayDesc}
      </p>

      {/* ─────────────────────────────────────────────────────────────────────
          C. WHAT YOU'LL LEARN (2-Column Compact Checklist with Green Checks)
          ───────────────────────────────────────────────────────────────────── */}
      <div className="mt-4 text-left">
        <h2 className="text-[12px] min-[375px]:text-[13px] font-black text-[#0b1a3a] tracking-wider uppercase mb-2">
          WHAT YOU&apos;LL LEARN
        </h2>

        <div className="grid grid-cols-2 gap-x-2.5 gap-y-2 text-[10px] min-[375px]:text-[10.5px] font-medium text-slate-700 leading-snug">
          {/* Column 1 (Left 4 items) */}
          <div className="space-y-2">
            {skills.slice(0, 4).map((skill, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                <span className="leading-snug">{skill}</span>
              </div>
            ))}
          </div>

          {/* Column 2 (Right 4 items) */}
          <div className="space-y-2">
            {skills.slice(4, 8).map((skill, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                <span className="leading-snug">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          D. PRIMARY PAYMENT BUTTON (Full Width, Blue-Purple Gradient)
          ───────────────────────────────────────────────────────────────────── */}
      <div className="mt-4">
        <button
          type="button"
          onClick={handlePrimaryAction}
          disabled={isCheckingOut}
          className="w-full h-12 rounded-2xl bg-gradient-to-r from-[#2563eb] via-[#4f46e5] to-[#9333ea] hover:opacity-95 active:scale-[0.98] transition-all text-white font-black text-sm min-[375px]:text-[15px] flex items-center justify-center gap-1.5 shadow-md shadow-indigo-500/25 cursor-pointer disabled:opacity-75"
        >
          {isCheckingOut ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Processing...</span>
            </>
          ) : isCoursePaid ? (
            <>
              <span>Resume Course</span>
              <ArrowRight className="w-4 h-4" />
            </>
          ) : (
            <>
              <span>Pay ₹{livePrice} Now</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        {/* Secure Razorpay Note */}
        <div className="mt-2 flex items-center justify-center gap-1.5 text-[10px] min-[375px]:text-[10.5px] font-medium text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
          <span>Secure &amp; Safe Razorpay Payment • 256-bit SSL Encrypted</span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          E. WHAT'S INCLUDED (Compact 2-Column Grid of 8 Feature Cards)
          ───────────────────────────────────────────────────────────────────── */}
      <div className="mt-5 text-left">
        <h2 className="text-[12px] min-[375px]:text-[13px] font-black text-[#0b1a3a] tracking-wider uppercase mb-2.5">
          WHAT&apos;S INCLUDED
        </h2>

        <div className="grid grid-cols-2 gap-2 text-left">
          {/* 1. Full Course */}
          <div className="p-2 min-[375px]:p-2.5 rounded-xl bg-[#fbf7ff] border border-[#f3e8ff] flex items-center gap-2 shadow-2xs">
            <div className="w-7 h-7 rounded-lg bg-[#9333ea] text-white flex items-center justify-center shrink-0 shadow-2xs">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[11.5px] font-black text-[#0b1a3a] leading-tight truncate">
                Full Course
              </span>
              <span className="text-[9.5px] text-slate-500 font-medium leading-tight truncate">
                HD Quality
              </span>
            </div>
          </div>

          {/* 2. Practice Questions */}
          <div className="p-2 min-[375px]:p-2.5 rounded-xl bg-[#f0fdf4] border border-[#dcfce7] flex items-center gap-2 shadow-2xs">
            <div className="w-7 h-7 rounded-lg bg-[#16a34a] text-white flex items-center justify-center shrink-0 shadow-2xs">
              <FileText className="w-4 h-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[11.5px] font-black text-[#0b1a3a] leading-tight truncate">
                Practice Questions
              </span>
              <span className="text-[9.5px] text-slate-500 font-medium leading-tight truncate">
                for Every Topic
              </span>
            </div>
          </div>

          {/* 3. Coding Exercises */}
          <div className="p-2 min-[375px]:p-2.5 rounded-xl bg-[#fff7ed] border border-[#ffedd5] flex items-center gap-2 shadow-2xs">
            <div className="w-7 h-7 rounded-lg bg-[#f97316] text-white flex items-center justify-center shrink-0 shadow-2xs">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[11.5px] font-black text-[#0b1a3a] leading-tight truncate">
                Coding Exercises
              </span>
              <span className="text-[9.5px] text-slate-500 font-medium leading-tight truncate">
                with Solutions
              </span>
            </div>
          </div>

          {/* 4. Mock Interview */}
          <div className="p-2 min-[375px]:p-2.5 rounded-xl bg-[#fff1f2] border border-[#ffe4e6] flex items-center gap-2 shadow-2xs">
            <div className="w-7 h-7 rounded-lg bg-[#f43f5e] text-white flex items-center justify-center shrink-0 shadow-2xs">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[11.5px] font-black text-[#0b1a3a] leading-tight truncate">
                Mock Interview
              </span>
              <span className="text-[9.5px] text-slate-500 font-medium leading-tight truncate">
                (Every Topic)
              </span>
            </div>
          </div>

          {/* 5. Real-world Projects */}
          <div className="p-2 min-[375px]:p-2.5 rounded-xl bg-[#fffbeb] border border-[#fef3c7] flex items-center gap-2 shadow-2xs">
            <div className="w-7 h-7 rounded-lg bg-[#f59e0b] text-white flex items-center justify-center shrink-0 shadow-2xs">
              <Briefcase className="w-4 h-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[11.5px] font-black text-[#0b1a3a] leading-tight truncate">
                Real-world Projects
              </span>
              <span className="text-[9.5px] text-slate-500 font-medium leading-tight truncate">
                (15+)
              </span>
            </div>
          </div>

          {/* 6. Industrial Training */}
          <div className="p-2 min-[375px]:p-2.5 rounded-xl bg-[#f0f9ff] border border-[#e0f2fe] flex items-center gap-2 shadow-2xs">
            <div className="w-7 h-7 rounded-lg bg-[#0284c7] text-white flex items-center justify-center shrink-0 shadow-2xs">
              <Building2 className="w-4 h-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[11.5px] font-black text-[#0b1a3a] leading-tight truncate">
                Industrial Training
              </span>
              <span className="text-[9.5px] text-slate-500 font-medium leading-tight truncate">
                Verified Certificate
              </span>
            </div>
          </div>

          {/* 7. Recommendation Letter */}
          <div className="p-2 min-[375px]:p-2.5 rounded-xl bg-[#faf5ff] border border-[#f3e8ff] flex items-center gap-2 shadow-2xs">
            <div className="w-7 h-7 rounded-lg bg-[#7c3aed] text-white flex items-center justify-center shrink-0 shadow-2xs">
              <Award className="w-4 h-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[11.5px] font-black text-[#0b1a3a] leading-tight truncate">
                Recommendation Letter
              </span>
              <span className="text-[9.5px] text-slate-500 font-medium leading-tight truncate">
                Official Credential
              </span>
            </div>
          </div>

          {/* 8. Job Assistance */}
          <div className="p-2 min-[375px]:p-2.5 rounded-xl bg-[#f0fdfa] border border-[#ccfbf1] flex items-center gap-2 shadow-2xs">
            <div className="w-7 h-7 rounded-lg bg-[#0d9488] text-white flex items-center justify-center shrink-0 shadow-2xs">
              <Users className="w-4 h-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[11.5px] font-black text-[#0b1a3a] leading-tight truncate">
                Job Assistance
              </span>
              <span className="text-[9.5px] text-slate-500 font-medium leading-tight truncate">
                ({salaryText})
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          F. TRUST INFORMATION
          ───────────────────────────────────────────────────────────────────── */}
      <div className="mt-4 p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between gap-3 text-left">
        <div className="flex items-center gap-2.5 min-w-0">
          {/* Overlapping Student Avatars */}
          <div className="flex -space-x-2 shrink-0">
            <img
              className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs"
              src="/images/avatar-rahul-sharma.jpg"
              alt="Learner"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <img
              className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs"
              src="/images/avatar-rohit.jpg"
              alt="Learner"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <img
              className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs"
              src="/images/avatar-sneha.jpg"
              alt="Learner"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <img
              className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs"
              src="/images/avatar-neha.jpg"
              alt="Learner"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          <div className="min-w-0">
            <strong className="text-[11.5px] min-[375px]:text-xs font-black text-[#0b1a3a] block leading-tight truncate">
              Trusted by 10,000+ Learners
            </strong>
            <div className="flex items-center gap-0.5 text-amber-400 mt-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-[9.5px] min-[375px]:text-[10px] font-bold text-slate-500 ml-1">
                4.8/5 (1,200+ reviews)
              </span>
            </div>
          </div>
        </div>

        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
      </div>

      {/* Powered by FutureAI Learning Hub */}
      <div className="mt-3.5 mb-2 flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-500">
        <Shield className="w-3.5 h-3.5 text-[#2563eb]" />
        <span>
          Powered by <strong className="font-bold text-slate-700">FutureAI Learning Hub</strong>
        </span>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          OPTIONAL ACCORDION: CURRICULUM TOPICS EXPLORER (For active learning)
          ───────────────────────────────────────────────────────────────────── */}
      {tabs.length > 0 && (
        <div className="mt-3 pt-3 border-t border-slate-100 text-left">
          <button
            type="button"
            onClick={() => setShowCurriculum((prev) => !prev)}
            className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-between transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span>
                {showCurriculum ? 'Hide Curriculum Modules' : 'View Full Curriculum & Topics'}
              </span>
            </div>
            {showCurriculum ? (
              <ChevronUp className="w-4 h-4 text-slate-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {showCurriculum && (
            <div className="mt-2.5 space-y-2">
              {tabs.map((tab) => (
                <div key={tab.id} className="space-y-1.5">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block px-1">
                    {tab.title}
                  </span>
                  {tab.chapters.map((chapter) => (
                    <div
                      key={chapter.id}
                      className="rounded-xl border border-slate-200/80 bg-white overflow-hidden text-xs"
                    >
                      <button
                        type="button"
                        onClick={() => onToggleChapter && onToggleChapter(chapter.id)}
                        className="w-full p-2.5 flex items-center justify-between font-bold text-slate-800 text-left hover:bg-slate-50 cursor-pointer"
                      >
                        <span className="truncate pr-2">
                          Ch {chapter.chapterNum}: {chapter.title}
                        </span>
                        {expandedChapters[chapter.id] ? (
                          <ChevronUp className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        )}
                      </button>

                      {expandedChapters[chapter.id] && (
                        <div className="border-t border-slate-100 divide-y divide-slate-100 bg-slate-50/50">
                          {chapter.topics.map((t) => (
                            <button
                              key={t.id}
                              type="button"
                              onClick={() => onSelectTopic && onSelectTopic(t, chapter.chapterNum)}
                              className="w-full px-3 py-2 text-left text-[11px] font-medium text-slate-600 hover:text-blue-600 flex items-center justify-between cursor-pointer"
                            >
                              <span className="truncate pr-2">{t.title}</span>
                              <Play className="w-2.5 h-2.5 text-blue-500 shrink-0" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UniversalMobileCourseView;
