import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Users,
  Video,
  Sparkles,
  ShieldCheck,
  Lock,
  ExternalLink,
  Bell,
  FileText,
  Settings,
  HelpCircle,
  Layers,
  Loader2,
  Radio,
} from 'lucide-react';
import {
  isCourseUnlocked,
  unlockCourse,
  verifyAndUnlockWithProof,
} from '../../services/courseUnlockService';
import {
  startRazorpayCheckout,
  getCurrentUserForPayment,
} from '../../services/razorpayService';
import { recordReferralPayment } from '../../services/realAuthService';
import { recordCourseEnrollmentInCloud } from '../../services/cloudSyncService';
import {
  LiveCourseCanonicalId,
  getLiveClassConfig,
  updateLiveClassConfig,
  LiveSessionStatus,
} from '../../services/liveClassService';
import { WebsiteEcommerceDemo } from './live-demos/WebsiteEcommerceDemo';
import { AiCourseDemoReelsHub } from './AiCourseDemoReelsHub';
import { AndroidAppSimulatorDemo } from './live-demos/AndroidAppSimulatorDemo';
import { AiVideoPlayerDemo } from './live-demos/AiVideoPlayerDemo';

export interface AiLiveCourseDemoHubProps {
  courseId: LiveCourseCanonicalId;
  userName?: string;
  onBack: () => void;
  onOpenEnrollModal?: (courseId: string, courseTitle: string) => void;
  onOpenLogin?: () => void;
}

interface CourseSpecData {
  id: LiveCourseCanonicalId;
  title: string;
  priceNum: number;
  priceText: string;
  typeLabel: string;
  demoButtonText: string;
  buildHeading: string;
  learningOutcome: string;
  demoNote: string;
  posterImage: string;
  accentGradient: string;
  features: string[];
  buildSteps: Array<{ step: string; title: string; desc: string }>;
}

const LIVE_COURSES_SPEC: Record<LiveCourseCanonicalId, CourseSpecData> = {
  ai_website_dev: {
    id: 'ai_website_dev',
    title: 'AI Website Builder Pro',
    priceNum: 2999,
    priceText: '₹2,999',
    typeLabel: 'LIVE Instructor-Led Class',
    demoButtonText: 'View Website Demo',
    buildHeading: 'What You Will Build',
    learningOutcome:
      'Students learn how to build and launch professional corporate, e-commerce, SaaS, and booking websites with AI assistance, including real backend and payment integrations.',
    demoNote:
      'The live training covers multi-industry website creation. Complete production integrations, testing and live deployment are covered in the training.',
    posterImage: '/images/courses/final_ai_website_dev.webp',
    accentGradient: 'from-blue-600 via-indigo-600 to-purple-600',
    features: [
      'AI Website Builder',
      'Prompt Engineering',
      'Responsive Website Design',
      'Frontend Development',
      'Backend Development',
      'Full Database Integration',
      'User Authentication',
      'Product Management',
      'Shopping Cart',
      'Checkout System',
      'Payment Gateway Integration',
      'Payment Verification and Webhooks',
      'Admin Dashboard',
      'Order Management',
      'Email Notifications',
      'REST API Integration',
      'Domain Connection',
      'Hosting and Live Deployment',
      'Security and Testing',
      'Website Maintenance',
    ],
    buildSteps: [
      {
        step: '01',
        title: 'Responsive Storefront & Product Catalog',
        desc: 'Generate modern responsive UI, product listings, category filters, and product detail views using AI workflows.',
      },
      {
        step: '02',
        title: 'Backend, Database & User Authentication',
        desc: 'Connect full database persistence, user registration, login sessions, and REST API endpoints.',
      },
      {
        step: '03',
        title: 'Cart, Checkout & Payment Webhooks',
        desc: 'Implement shopping cart state, checkout workflow, payment gateway integration, signature verification, and webhooks.',
      },
      {
        step: '04',
        title: 'Admin Dashboard & Live Domain Deployment',
        desc: 'Manage inventory and customer orders from an admin dashboard, connect a custom domain, and deploy live.',
      },
    ],
  },
  ai_android_dev: {
    id: 'ai_android_dev',
    title: 'AI App Builder Pro',
    priceNum: 2499,
    priceText: '₹2,499',
    typeLabel: 'LIVE Instructor-Led Class',
    demoButtonText: 'Explore Android Demo',
    buildHeading: 'What You Will Build',
    learningOutcome:
      'Students learn how to create functional Android applications across food delivery, shopping, fintech, and booking using AI, integrate backend services and prepare applications for release.',
    demoNote:
      'The live training covers multi-industry Android mobile app creation. Complete integrations and production deployment are covered in live training.',
    posterImage: '/images/courses/final_ai_android_dev.webp',
    accentGradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    features: [
      'AI App Builder',
      'Prompt Engineering',
      'Professional Android UI/UX',
      'App Screens and Navigation',
      'User Registration and Login',
      'Firebase Authentication',
      'Database Integration',
      'Backend API Integration',
      'User Profile Management',
      'File and Image Upload',
      'Push Notifications',
      'Payment Gateway Integration',
      'App Security',
      'App Testing and Debugging',
      'APK/AAB Generation',
      'App Signing',
      'Google Play Store Publishing Workflow',
      'App Updates and Maintenance',
    ],
    buildSteps: [
      {
        step: '01',
        title: 'Multi-Screen Android UI & Navigation',
        desc: 'Design clean mobile screens, smooth screen transitions, and intuitive bottom navigation using AI prompts.',
      },
      {
        step: '02',
        title: 'Firebase Auth, Database & Cloud Storage',
        desc: 'Add user registration, login, real-time database collections, profile management, and file/image uploads.',
      },
      {
        step: '03',
        title: 'Push Notifications & Payment Integration',
        desc: 'Configure push alerts, backend API integration, in-app payment gateway checkout, and app security rules.',
      },
      {
        step: '04',
        title: 'Signed APK/AAB & Play Store Release Workflow',
        desc: 'Test, debug, sign your APK/AAB release bundle, and follow the step-by-step Google Play Store publishing workflow.',
      },
    ],
  },
  ai_video_creation: {
    id: 'ai_video_creation',
    title: 'AI Video Creator Pro',
    priceNum: 999,
    priceText: '₹999',
    typeLabel: 'LIVE Instructor-Led Class',
    demoButtonText: 'Watch AI Video Demo',
    buildHeading: 'What You Will Learn',
    learningOutcome:
      'Students learn to create realistic, cinematic AI-generated videos across brand advertising, product showcases, social media reels, and YouTube.',
    demoNote:
      'Master complete AI video production from scriptwriting and character consistency to realistic voice, lip sync, and high-resolution commercial export.',
    posterImage: '/images/courses/final_ai_video_creation.webp',
    accentGradient: 'from-orange-600 via-rose-600 to-pink-600',
    features: [
      'Text-to-Video Generation',
      'Image-to-Video Generation',
      'Realistic AI Characters',
      'Character Consistency',
      'Cinematic Camera Movements',
      'AI Script Writing',
      'AI Voice Generation',
      'Realistic Lip Sync',
      'Background Music',
      'Sound Effects',
      'AI Video Editing',
      'Product Advertisement Videos',
      'Social Media Reels',
      'Educational Videos',
      'YouTube Video Creation',
      'High-Quality Video Export',
      'Commercial Usage and Licensing Basics',
    ],
    buildSteps: [
      {
        step: '01',
        title: 'AI Scriptwriting & Visual Storyboarding',
        desc: 'Write high-converting scripts and generate consistent realistic AI characters across multiple scenes.',
      },
      {
        step: '02',
        title: 'Text-to-Video, Image-to-Video & Camera Control',
        desc: 'Direct cinematic camera movements, lighting, and lifelike motion from text prompts and reference images.',
      },
      {
        step: '03',
        title: 'AI Voice Generation, Lip Sync & Sound Design',
        desc: 'Synchronize realistic voiceovers, accurate lip-sync, background music, and studio sound effects.',
      },
      {
        step: '04',
        title: 'Brand Ads, Reels, YouTube & Commercial Export',
        desc: 'Edit and export high-quality videos for product ads, social media reels, education, and commercial client projects.',
      },
    ],
  },
};

export const AiLiveCourseDemoHub: React.FC<AiLiveCourseDemoHubProps> = ({
  courseId,
  userName,
  onBack,
  onOpenEnrollModal,
  onOpenLogin,
}) => {
  const spec = LIVE_COURSES_SPEC[courseId] || LIVE_COURSES_SPEC.ai_website_dev;

  const [isEnrolled, setIsEnrolled] = useState<boolean>(() => isCourseUnlocked(courseId));
  const [liveConfig, setLiveConfig] = useState(() => getLiveClassConfig(courseId));
  const [isPaying, setIsPaying] = useState<boolean>(false);
  const [payError, setPayError] = useState<string | null>(null);

  // Admin Live Session Configurator Drawer
  const [showAdminSessionForm, setShowAdminSessionForm] = useState<boolean>(false);
  const [adminScheduleDate, setAdminScheduleDate] = useState<string>(liveConfig.scheduleDateText);
  const [adminScheduleTime, setAdminScheduleTime] = useState<string>(liveConfig.scheduleTimeText);
  const [adminInstructor, setAdminInstructor] = useState<string>(liveConfig.instructorName);
  const [adminStatus, setAdminStatus] = useState<LiveSessionStatus>(liveConfig.sessionStatus);
  const [adminMeetingLink, setAdminMeetingLink] = useState<string>('');

  useEffect(() => {
    const syncState = () => {
      setIsEnrolled(isCourseUnlocked(courseId));
      setLiveConfig(getLiveClassConfig(courseId));
    };
    syncState();
    window.addEventListener('futureai_course_unlocked', syncState);
    window.addEventListener('futureai_live_config_updated', syncState);
    window.addEventListener('storage', syncState);
    return () => {
      window.removeEventListener('futureai_course_unlocked', syncState);
      window.removeEventListener('futureai_live_config_updated', syncState);
      window.removeEventListener('storage', syncState);
    };
  }, [courseId]);

  const scrollToSection = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleEnrollNow = async () => {
    if (isEnrolled) {
      scrollToSection('live-class-access-section');
      return;
    }

    setPayError(null);
    const user = getCurrentUserForPayment();

    if (!user.isLoggedIn || !user.userId) {
      if (onOpenLogin) {
        onOpenLogin();
      } else if (onOpenEnrollModal) {
        onOpenEnrollModal(courseId, spec.title);
      } else {
        window.dispatchEvent(new CustomEvent('futureai_open_login'));
      }
      return;
    }

    setIsPaying(true);
    try {
      const storedRefCode = (
        typeof window !== 'undefined'
          ? localStorage.getItem('futureai_ref_attribution') ||
            sessionStorage.getItem('futureai_ref_attribution') ||
            new URLSearchParams(window.location.search).get('ref') ||
            ''
          : ''
      )
        .trim()
        .toUpperCase();

      const result = await startRazorpayCheckout({
        amount: spec.priceNum,
        courseId: spec.id,
        courseTitle: spec.title,
        userId: user.userId,
        name: user.name || 'Student',
        email: user.email || user.userId,
        phone: user.phone || undefined,
        refCode: storedRefCode || undefined,
      });

      if (result.entitlementProof && result.verifiedAt) {
        const verifiedOnServer = await verifyAndUnlockWithProof({
          userId: user.userId,
          paymentId: result.paymentId,
          orderId: result.orderId,
          courseId: spec.id,
          verifiedAt: result.verifiedAt,
          entitlementProof: result.entitlementProof,
        });
        if (!verifiedOnServer) {
          unlockCourse(spec.id, {
            userId: user.userId,
            paymentId: result.paymentId,
            orderId: result.orderId,
            paymentStatus: 'CAPTURED',
            enrollmentStatus: 'ACTIVE',
            source: 'PAYMENT',
          });
        }
      } else {
        unlockCourse(spec.id, {
          userId: user.userId,
          paymentId: result.paymentId,
          orderId: result.orderId,
          paymentStatus: 'CAPTURED',
          enrollmentStatus: 'ACTIVE',
          source: 'PAYMENT',
        });
      }

      setIsEnrolled(true);
      setLiveConfig(getLiveClassConfig(courseId));
      setIsPaying(false);
      scrollToSection('live-class-access-section');

      // Record referral & cloud enrollment asynchronously
      (async () => {
        if (storedRefCode) {
          try {
            await recordReferralPayment({
              paymentId: result.paymentId,
              orderId: result.orderId,
              amount: spec.priceNum,
              payerEmail: user.email,
              payerPhone: user.phone || undefined,
              payerName: user.name || 'Student',
              courseTitle: spec.title,
              refCode: storedRefCode,
            });
          } catch {}
        }
        try {
          await recordCourseEnrollmentInCloud({
            userId: user.userId,
            email: user.email,
            phone: user.phone || undefined,
            name: user.name || 'Student',
            courseId: spec.id,
            courseTitle: spec.title,
            paymentId: result.paymentId,
            orderId: result.orderId,
            amount: result.amount,
            entitlementProof: result.entitlementProof,
            verifiedAt: result.verifiedAt,
          });
        } catch {}
      })();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Payment could not be completed.';
      setPayError(msg);
      setIsPaying(false);
    }
  };

  const handleSaveAdminLiveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    updateLiveClassConfig(courseId, {
      scheduleDateText: adminScheduleDate.trim() || liveConfig.scheduleDateText,
      scheduleTimeText: adminScheduleTime.trim() || liveConfig.scheduleTimeText,
      instructorName: adminInstructor.trim() || liveConfig.instructorName,
      sessionStatus: adminStatus,
      ...(adminMeetingLink.trim() ? { meetingLink: adminMeetingLink.trim() } : {}),
    });
    setLiveConfig(getLiveClassConfig(courseId));
    setShowAdminSessionForm(false);
  };

  const isSessionLiveNow = liveConfig.sessionStatus === 'LIVE_NOW';

  // For all 3 AI Live Courses (Website, Android, Video Creation), render the dedicated
  // Compact Hero + Instagram Demo Reels Gallery page (no extra sections).
  if (
    courseId === 'ai_website_dev' ||
    courseId === 'ai_android_dev' ||
    courseId === 'ai_video_creation'
  ) {
    return (
      <AiCourseDemoReelsHub
        courseId={courseId}
        userName={userName}
        onBack={onBack}
        onOpenEnrollModal={onOpenEnrollModal}
        onOpenLogin={onOpenLogin}
      />
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-slate-800 font-sans pb-12 selection:bg-blue-500 selection:text-white">
      <main className="w-full pt-0 space-y-5">
        {/* ═══════════════════════════════════════════════════════════════════════════
            1. SLIM THEME-MATCHED HERO BANNER (210px Desktop Height — Future IT Purple-White)
           ═══════════════════════════════════════════════════════════════════════════ */}
        <section className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#FAF8FF] via-white to-[#F5F3FF] border border-[#E9E5F5] shadow-[0_4px_18px_rgba(109,40,217,0.06)] text-[#111827] md:h-[210px] md:min-h-[210px] md:max-h-[210px] flex flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <img
              src={spec.posterImage}
              alt={spec.title}
              className="w-full h-full object-cover object-center opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-[#FAF8FF]/95 to-white/60" />
          </div>

          <div className="relative z-10 p-4 sm:px-6 lg:px-7 lg:py-3.5 flex-1 flex flex-col justify-between">
            {/* Top Row: Price Badge Right-Aligned */}
            <div className="flex flex-wrap items-center justify-end gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/95 border border-[#E9E5F5] shadow-2xs">
                <span className="text-[11px] text-[#64748B] font-medium">Course Fee:</span>
                <span className="text-sm sm:text-base font-bold text-[#6D28D9]">{spec.priceText}</span>
              </div>
            </div>

            {/* Center: Course Title & Learning Outcome (Slightly Lowered) */}
            <div className="my-auto pt-2.5 pb-1 text-left max-w-2xl">
              <h1 className="text-lg sm:text-xl lg:text-[24px] font-bold tracking-tight text-[#111827] leading-tight m-0">
                {spec.title}
              </h1>
              <p className="text-xs sm:text-[13px] text-[#64748B] font-medium mt-1 line-clamp-2 leading-snug m-0">
                {spec.learningOutcome}
              </p>
            </div>

            {/* Bottom Row: Demo CTA + Enroll Now CTA */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-[#E9E5F5]">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollToSection('interactive-course-demo')}
                  className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#F5F3FF] text-[#111827] border border-[#E9E5F5] font-semibold text-xs flex items-center gap-1.5 cursor-pointer shadow-2xs transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#6D28D9]" />
                  <span>{spec.demoButtonText}</span>
                </button>

                <button
                  type="button"
                  onClick={handleEnrollNow}
                  disabled={isPaying}
                  className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white font-semibold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs transition-all"
                >
                  {isPaying ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Opening Checkout...</span>
                    </>
                  ) : isEnrolled ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Enrolled • Open Live Class Dashboard</span>
                    </>
                  ) : (
                    <>
                      <span>Enroll Now — {spec.priceText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              <div className="hidden lg:flex items-center gap-4 text-xs text-slate-300 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5 text-rose-400" />
                  Live Instructor-Led Training
                </span>
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  Practical Project-Based Learning
                </span>
                <span className="flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                  Interactive Q&amp;A
                </span>
              </div>
            </div>
          </div>
        </section>

        {payError && (
          <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center justify-between">
            <span>{payError}</span>
            <button
              type="button"
              onClick={() => setPayError(null)}
              className="text-rose-900 underline cursor-pointer ml-4"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════════════════
            2. INTERACTIVE DEMO CENTERPIECE (Visual Focus of the Page)
           ═══════════════════════════════════════════════════════════════════════════ */}
        <section id="interactive-course-demo" className="space-y-3 scroll-mt-16">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-blue-600">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Live Preview</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                {spec.demoButtonText} — Hands-On Project Preview
              </h2>
            </div>

            <button
              type="button"
              onClick={handleEnrollNow}
              className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-black text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>{isEnrolled ? 'Access Live Class' : `Enroll Now — ${spec.priceText}`}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {courseId === 'ai_website_dev' && (
            <WebsiteEcommerceDemo onEnrollClick={handleEnrollNow} />
          )}
          {courseId === 'ai_android_dev' && (
            <AndroidAppSimulatorDemo onEnrollClick={handleEnrollNow} />
          )}
          {courseId === 'ai_video_creation' && (
            <AiVideoPlayerDemo onEnrollClick={handleEnrollNow} />
          )}
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════
            3. WHAT YOU WILL BUILD / LEARN (4 Architecture Pillars)
           ═══════════════════════════════════════════════════════════════════════════ */}
        <section className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xs space-y-4 text-left">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-blue-600 block">
                Project Outcome &amp; Architecture
              </span>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                {spec.buildHeading}
              </h2>
            </div>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
              {spec.typeLabel}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
            {spec.learningOutcome} {spec.demoNote}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {spec.buildSteps.map((item) => (
              <div
                key={item.step}
                className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-blue-300 transition-all space-y-1.5"
              >
                <span className="inline-block px-2 py-0.5 rounded-md bg-blue-600 text-white text-[10px] font-black">
                  STEP {item.step}
                </span>
                <h3 className="text-sm font-black text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════
            4. COMPLETE COURSE FEATURES & CURRICULUM TOPICS
           ═══════════════════════════════════════════════════════════════════════════ */}
        <section className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xs space-y-4 text-left">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-emerald-600 block">
                Complete Live Training Syllabus
              </span>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                Course Features &amp; Covered Topics ({spec.features.length} Modules)
              </h2>
            </div>
            <button
              type="button"
              onClick={handleEnrollNow}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <span>{isEnrolled ? 'Enrolled in Live Class' : `Enroll Now — ${spec.priceText}`}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {spec.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5 hover:bg-white hover:border-blue-300 hover:shadow-2xs transition-all"
              >
                <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 font-black text-[11px] flex items-center justify-center shrink-0">
                  {idx + 1}
                </div>
                <span className="text-xs font-bold text-slate-800 leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════════════
            5. LIVE CLASS INFORMATION & ENROLLED STUDENT LIVE-CLASS ACCESS (Sections 3 & 8)
           ═══════════════════════════════════════════════════════════════════════════ */}
        <section
          id="live-class-access-section"
          className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xs space-y-5 text-left scroll-mt-16"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center shrink-0">
                <Radio className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                    Live Class Information &amp; Student Access Hub
                  </h2>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                      isEnrolled
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-amber-100 text-amber-800 border border-amber-300'
                    }`}
                  >
                    {isEnrolled ? '✓ Enrolled & Verified' : 'Enrollment Required for Meeting Link'}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Live Instructor-Led Training • Practical Project-Based Learning • Interactive Q&amp;A
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowAdminSessionForm(!showAdminSessionForm)}
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Configure Live Schedule</span>
            </button>
          </div>

          {/* Optional Admin Schedule & Meeting Link Configuration Form */}
          {showAdminSessionForm && (
            <form
              onSubmit={handleSaveAdminLiveConfig}
              className="p-4 rounded-2xl bg-slate-900 text-white space-y-3 border border-slate-800"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-cyan-400">
                  Admin Live Session Configuration ({spec.id})
                </span>
                <span className="text-[11px] text-slate-400">
                  Updates actual configured schedule, instructor &amp; protected meeting link
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div>
                  <label className="block text-[10px] font-bold text-slate-300 mb-1">
                    Class Schedule Date
                  </label>
                  <input
                    type="text"
                    value={adminScheduleDate}
                    onChange={(e) => setAdminScheduleDate(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-300 mb-1">
                    Class Time (IST)
                  </label>
                  <input
                    type="text"
                    value={adminScheduleTime}
                    onChange={(e) => setAdminScheduleTime(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-300 mb-1">
                    Instructor Name
                  </label>
                  <input
                    type="text"
                    value={adminInstructor}
                    onChange={(e) => setAdminInstructor(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-300 mb-1">
                    Session Status
                  </label>
                  <select
                    value={adminStatus}
                    onChange={(e) => setAdminStatus(e.target.value as LiveSessionStatus)}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-xs"
                  >
                    <option value="UPCOMING">UPCOMING</option>
                    <option value="SCHEDULED">SCHEDULED</option>
                    <option value="LIVE_NOW">LIVE_NOW (Running)</option>
                    <option value="COMPLETED">COMPLETED</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap items-end gap-3">
                <div className="flex-1 min-w-[240px]">
                  <label className="block text-[10px] font-bold text-slate-300 mb-1">
                    Protected Live Meeting URL (Visible only to enrolled students)
                  </label>
                  <input
                    type="url"
                    value={adminMeetingLink}
                    onChange={(e) => setAdminMeetingLink(e.target.value)}
                    placeholder="https://meet.google.com/... or https://zoom.us/..."
                    className="w-full px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-xs"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs cursor-pointer"
                >
                  Save Live Class Config
                </button>
              </div>
            </form>
          )}

          {/* 3 Pillars of Live Class Format */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-1">
              <div className="flex items-center gap-2 text-xs font-black text-slate-900">
                <Video className="w-4 h-4 text-red-600" />
                <span>Live Instructor-Led Training</span>
              </div>
              <p className="text-xs text-slate-600">
                Learn step-by-step in real time with an experienced mentor guiding the complete build and deployment workflow.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-1">
              <div className="flex items-center gap-2 text-xs font-black text-slate-900">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Practical Project-Based Learning</span>
              </div>
              <p className="text-xs text-slate-600">
                Build a real, functional project from scratch during the session instead of watching passive pre-recorded theory.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-1">
              <div className="flex items-center gap-2 text-xs font-black text-slate-900">
                <HelpCircle className="w-4 h-4 text-emerald-600" />
                <span>Interactive Live Q&amp;A</span>
              </div>
              <p className="text-xs text-slate-600">
                Ask questions directly during the live class, debug errors together, and get clarity on production best practices.
              </p>
            </div>
          </div>

          {/* Schedule, Instructor & Protected Live Class Access Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {/* Left: Configured Schedule & Instructor Details (lg:col-span-7) */}
            <div className="lg:col-span-7 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>Upcoming Class Schedule</span>
                  </span>
                  <p className="text-xs sm:text-sm font-black text-slate-900">
                    {liveConfig.scheduleDateText}
                  </p>
                  <p className="text-xs text-slate-600 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{liveConfig.scheduleTimeText}</span>
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-purple-600" />
                    <span>Instructor Information</span>
                  </span>
                  <p className="text-xs sm:text-sm font-black text-slate-900">
                    {liveConfig.instructorName}
                  </p>
                  <p className="text-xs text-slate-600">{liveConfig.instructorDesignation}</p>
                </div>
              </div>

              {/* Announcements & Session Resources */}
              <div className="border-t border-slate-200 pt-3 space-y-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Bell className="w-3.5 h-3.5 text-amber-600" />
                  <span>Class Announcements</span>
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {liveConfig.announcements.map((ann, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span>{ann}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {isEnrolled && liveConfig.resources.length > 0 && (
                <div className="border-t border-slate-200 pt-3 space-y-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Enrolled Student Session Resources</span>
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {liveConfig.resources.map((res) => (
                      <div
                        key={res.id}
                        className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-2 text-xs"
                      >
                        <span className="font-bold text-slate-800 truncate">{res.title}</span>
                        <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-black shrink-0">
                          {res.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Enrollment Action / Protected Join Live Class Card (lg:col-span-5) */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900 text-white flex flex-col justify-between space-y-4 border border-slate-800">
              {isEnrolled ? (
                <>
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>ENROLLMENT ACTIVE</span>
                    </div>
                    <h3 className="text-lg font-black text-white">
                      You Are Enrolled in This Live Course
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Your verified enrollment is active. When a live class session link is configured by the instructor, your protected <strong>Join Live Class</strong> button activates below.
                    </p>
                  </div>

                  {/* Show Join Live Class button ONLY when enrolled AND a real meeting link exists */}
                  {liveConfig.protectedMeetingLink ? (
                    <a
                      href={liveConfig.protectedMeetingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                    >
                      <Video className="w-4 h-4" />
                      <span>Join Live Class</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 text-xs text-slate-300 space-y-1">
                      <span className="font-bold text-white block">
                        Meeting Link Status: Awaiting Session Start
                      </span>
                      <span className="text-[11px] text-slate-400 block">
                        The Join Live Class button will automatically appear here as soon as the instructor publishes the session meeting link.
                      </span>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-black">
                      <Lock className="w-3.5 h-3.5" />
                      <span>PROTECTED LIVE CLASS ACCESS</span>
                    </div>
                    <h3 className="text-lg font-black text-white">
                      Enroll to Unlock Live Class &amp; Project Mentoring
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Live class meeting links, starter repositories, and instructor Q&amp;A sessions are strictly protected for verified enrolled students.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs border-t border-slate-800 pt-3">
                      <span className="text-slate-400 font-semibold">One-Time Enrollment Fee</span>
                      <span className="text-xl font-black text-white">{spec.priceText}</span>
                    </div>

                    <button
                      type="button"
                      onClick={handleEnrollNow}
                      disabled={isPaying}
                      className={`w-full py-3 px-4 rounded-xl bg-gradient-to-r ${spec.accentGradient} hover:opacity-95 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer`}
                    >
                      {isPaying ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>Enroll Now — {spec.priceText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-[10.5px] text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Verified Razorpay Checkout • Instant Live-Class Dashboard Access</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
