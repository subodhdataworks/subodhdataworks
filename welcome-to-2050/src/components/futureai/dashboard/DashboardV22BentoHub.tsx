import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  Code2,
  FileCheck,
  GraduationCap,
  Briefcase,
  Wallet,
  Clock,
  Sparkles,
  ChevronRight,
  BookOpen,
  CheckCircle2,
  Coins,
  Gem,
  ArrowUpRight,
  Copy,
  Check,
  Layers,
} from 'lucide-react';
import DashboardStats from './DashboardStats';
import {
  getUserEnrollmentRecords,
  CourseEnrollmentRecord,
} from '../../../services/courseUnlockService';
import {
  getLearnerTelemetry,
  getUserReferralCode,
  fetchAffiliateRealData,
} from '../../../services/realAuthService';
import { getSyncedPythonChallengesProgress } from '../data/pythonCodingChallengesBank';
import { CAREER_COURSES_12, CareerCourseItem } from '../../../data/careerCourses12';

export interface DashboardV22BentoHubProps {
  userName: string;
  onContinueCourse: (courseId?: string) => void;
  onOpenDsaPractice: () => void;
  onOpenAtsResume: () => void;
  onOpenInternship: () => void;
  onOpenPlacement: () => void;
  onOpenCertificates: () => void;
  onOpenWallet: () => void;
  onOpenWithdraw?: () => void;
  onBrowseCourses: () => void;
}

const COURSE_ID_MAP: Record<string, string> = {
  data_analyst: 'data-analyst-genai',
  'data-analyst-genai': 'data-analyst-genai',
  data_science: 'data-science-agentic-ai',
  'data-science-agentic-ai': 'data-science-agentic-ai',
  ml_engineering: 'ml-engineering',
  'ml-engineering': 'ml-engineering',
  ai_engineering: 'ai-engineering',
  'ai-engineering': 'ai-engineering',
  ai_tools_prompt: 'ai-tools-prompt',
  'ai-tools-prompt': 'ai-tools-prompt',
  ms_office_copilot: 'ms-office-copilot',
  'ms-office-copilot': 'ms-office-copilot',
  full_stack_mern: 'full-stack-web-dev',
  'full-stack-web-dev': 'full-stack-web-dev',
  ai_website_dev: 'ai-website-dev',
  'ai-website-dev': 'ai-website-dev',
  ai_android_dev: 'ai-android-dev',
  'ai-android-dev': 'ai-android-dev',
  ai_video_creation: 'ai-video-creation',
  'ai-video-creation': 'ai-video-creation',
};

export const DashboardV22BentoHub: React.FC<DashboardV22BentoHubProps> = ({
  userName,
  onContinueCourse,
  onOpenDsaPractice,
  onOpenAtsResume,
  onOpenInternship,
  onOpenPlacement,
  onOpenCertificates,
  onOpenWallet,
  onOpenWithdraw,
  onBrowseCourses,
}) => {
  const [enrollmentRecords, setEnrollmentRecords] = useState<CourseEnrollmentRecord[]>([]);
  const [telemetry, setTelemetry] = useState(() => getLearnerTelemetry());
  const [dsaProgress, setDsaProgress] = useState(() => getSyncedPythonChallengesProgress());
  const [walletData, setWalletData] = useState<{
    availableBalance: number;
    totalEarned: number;
    successfulPurchases: number;
  }>({
    availableBalance: 0,
    totalEarned: 0,
    successfulPurchases: 0,
  });
  const [copiedRef, setCopiedRef] = useState(false);

  // Resolve real authenticated student name & email
  const resolvedName = useMemo(() => {
    if (typeof window !== 'undefined') {
      const storedName = localStorage.getItem('futureai_user_name');
      if (
        storedName &&
        storedName.trim().length > 0 &&
        storedName !== 'Learner' &&
        storedName !== 'Student'
      ) {
        return storedName.trim();
      }
    }
    return userName && userName.trim().length > 0 ? userName.trim() : 'Student';
  }, [userName]);

  const userEmail = useMemo(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('futureai_user_email') || '';
    }
    return '';
  }, []);

  const referralCode = useMemo(() => {
    return getUserReferralCode(userEmail || resolvedName);
  }, [userEmail, resolvedName]);

  // Load real student enrollments, DSA progress, telemetry, and wallet balance
  useEffect(() => {
    const syncLocalData = () => {
      setEnrollmentRecords(
        getUserEnrollmentRecords().filter((r) => r.enrollmentStatus === 'ACTIVE')
      );
      setTelemetry(getLearnerTelemetry());
      setDsaProgress(getSyncedPythonChallengesProgress());
    };

    syncLocalData();

    let isMounted = true;
    if (referralCode) {
      fetchAffiliateRealData(referralCode)
        .then((res) => {
          if (isMounted && res) {
            setWalletData({
              availableBalance: Number(res.availableBalance) || 0,
              totalEarned: Number(res.totalEarned) || 0,
              successfulPurchases: Number(res.paidEnrollments) || 0,
            });
          }
        })
        .catch(() => {});
    }

    window.addEventListener('futureai_course_unlocked', syncLocalData);
    window.addEventListener('futureai_telemetry_updated', syncLocalData);
    window.addEventListener('storage', syncLocalData);
    return () => {
      isMounted = false;
      window.removeEventListener('futureai_course_unlocked', syncLocalData);
      window.removeEventListener('futureai_telemetry_updated', syncLocalData);
      window.removeEventListener('storage', syncLocalData);
    };
  }, [referralCode]);

  // Deduplicate verified enrolled course IDs mapped to CAREER_COURSES_12
  const enrolledCoursesList = useMemo(() => {
    const combinedRaw = new Set<string>();
    enrollmentRecords.forEach((r) => {
      if (r.courseId) combinedRaw.add(COURSE_ID_MAP[r.courseId] || r.courseId);
    });

    const matched: CareerCourseItem[] = [];
    combinedRaw.forEach((mappedId) => {
      const found = CAREER_COURSES_12.find((c) => c.id === mappedId);
      if (found && !matched.some((m) => m.id === found.id)) {
        matched.push(found);
      }
    });
    return matched;
  }, [enrollmentRecords]);

  // Real progress calculations
  const completedTopicsCount = telemetry.completedTopics?.length || 0;
  const completedLessonsCount = telemetry.completedLessons?.length || 0;
  const dsaSolvedCount = dsaProgress.solvedTaskIds?.length || 0;
  const dsaTopicsSolvedCount = dsaProgress.solvedTopicIds?.length || 0;

  // Total curriculum topics in primary track (24 core topics)
  const totalTrackTopics = 24;
  const primaryCourseProgressPct = Math.min(
    100,
    Math.round((completedTopicsCount / totalTrackTopics) * 100)
  );

  // Completed courses & certificates are strictly derived from real completion
  const completedCoursesCount =
    enrolledCoursesList.length > 0 && primaryCourseProgressPct >= 100 ? 1 : 0;
  const certificatesEarnedCount = completedCoursesCount;

  // Primary course for "Continue Learning"
  const activeCourse: CareerCourseItem = useMemo(() => {
    if (enrolledCoursesList.length > 0) {
      return enrolledCoursesList[0];
    }
    return CAREER_COURSES_12[0];
  }, [enrolledCoursesList]);

  const isEnrolledInActiveCourse = enrolledCoursesList.length > 0;

  // Real Recent Activity Feed (strictly from real enrollment timestamps, solved DSA challenges, and completed topics)
  const recentActivities = useMemo(() => {
    const items: Array<{
      id: string;
      title: string;
      subtitle: string;
      badge: string;
      color: string;
      onClick: () => void;
    }> = [];

    // 1. Real course enrollment records
    enrollmentRecords.slice(0, 2).forEach((rec) => {
      const mappedId = COURSE_ID_MAP[rec.courseId] || rec.courseId;
      const courseObj = CAREER_COURSES_12.find((c) => c.id === mappedId);
      const dateLabel = rec.unlockedAt
        ? new Date(rec.unlockedAt).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
          })
        : 'Enrolled';
      items.push({
        id: `enroll-${rec.courseId}`,
        title: `Enrolled in ${courseObj ? courseObj.title : rec.courseId}`,
        subtitle: 'Full curriculum & labs unlocked',
        badge: dateLabel,
        color: 'bg-violet-50 text-violet-700 border-violet-200/70',
        onClick: () => onContinueCourse(mappedId),
      });
    });

    // 2. Real completed topics
    if (completedTopicsCount > 0) {
      const latestTopic = telemetry.completedTopics[completedTopicsCount - 1];
      items.push({
        id: `topic-${latestTopic}`,
        title: `Completed Topic #${latestTopic} in Interactive Classroom`,
        subtitle: `${completedTopicsCount} total topics completed`,
        badge: `${primaryCourseProgressPct}% Track`,
        color: 'bg-emerald-50 text-emerald-700 border-emerald-200/70',
        onClick: () => onContinueCourse(activeCourse.id),
      });
    }

    // 3. Real DSA solved tasks
    if (dsaSolvedCount > 0) {
      items.push({
        id: `dsa-${dsaSolvedCount}`,
        title: `Solved ${dsaSolvedCount} DSA Coding Challenge${dsaSolvedCount > 1 ? 's' : ''}`,
        subtitle: `Across ${dsaTopicsSolvedCount} practice topic${dsaTopicsSolvedCount === 1 ? '' : 's'}`,
        badge: 'DSA Arena',
        color: 'bg-blue-50 text-blue-700 border-blue-200/70',
        onClick: onOpenDsaPractice,
      });
    }

    return items.slice(0, 4);
  }, [
    enrollmentRecords,
    completedTopicsCount,
    telemetry.completedTopics,
    primaryCourseProgressPct,
    activeCourse.id,
    dsaSolvedCount,
    dsaTopicsSolvedCount,
    onContinueCourse,
    onOpenDsaPractice,
  ]);

  const greetingText = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  }, []);

  const handleCopyReferral = () => {
    if (!referralCode || typeof navigator === 'undefined') return;
    navigator.clipboard?.writeText(referralCode).catch(() => {});
    setCopiedRef(true);
    window.setTimeout(() => setCopiedRef(false), 1800);
  };

  return (
    <section
      className="w-full space-y-4"
      aria-label="Student Dashboard V22 Overview"
    >
      {/* ─── 1. WELCOME HEADER BAR ─── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="relative overflow-hidden rounded-2xl border border-violet-200/75 bg-gradient-to-r from-white via-[#FAF8FF] to-[#F5F3FF] p-4 sm:p-5 shadow-[0_4px_20px_rgba(109,40,217,0.05)]"
      >
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-violet-500/10 to-indigo-500/10 blur-2xl" />

        <div className="relative z-10 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-200/80 bg-violet-50/90 px-2.5 py-0.5 text-[11px] font-bold text-[#6D28D9]">
              <Sparkles className="h-3 w-3 text-[#6D28D9]" />
              <span>STUDENT LEARNING WORKSPACE</span>
            </div>

            <h2 className="mt-1.5 truncate text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
              {greetingText}, <span className="bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] bg-clip-text text-transparent">{resolvedName}</span>
            </h2>

            <p className="mt-0.5 text-xs font-medium text-slate-500 sm:text-[13px]">
              {isEnrolledInActiveCourse
                ? `You have ${enrolledCoursesList.length} active course${enrolledCoursesList.length > 1 ? 's' : ''}. Pick up right where you left off.`
                : 'Track your courses, daily DSA coding practice, career readiness, and wallet in one place.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={onOpenDsaPractice}
              className="inline-flex items-center gap-1.5 rounded-xl border border-violet-200 bg-white px-3.5 py-2 text-xs font-bold text-[#4C1D95] shadow-2xs transition-all hover:border-violet-300 hover:bg-[#F5F3FF]"
            >
              <Code2 className="h-3.5 w-3.5 text-[#6D28D9]" />
              <span>Practice DSA</span>
            </button>

            <button
              type="button"
              onClick={() => onContinueCourse(activeCourse.id)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] px-4 py-2 text-xs font-bold text-white shadow-[0_6px_18px_rgba(109,40,217,0.25)] transition-all hover:brightness-105 active:scale-[0.99]"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>{isEnrolledInActiveCourse || completedTopicsCount > 0 ? 'Continue Learning' : 'Start Learning'}</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* ─── 2. SIX PREMIUM STATS CARDS (6x1 Row: Enrolled, Completed, DSA, Certificates, Internship, Job) ─── */}
      <DashboardStats
        studentStats={{
          enrolled: enrolledCoursesList.length,
          completed: completedCoursesCount,
          dsaCompleted: dsaSolvedCount,
          dsaTopicsSolved: dsaTopicsSolvedCount,
          certificates: certificatesEarnedCount,
          internship: completedCoursesCount,
          job: completedCoursesCount,
        }}
        onCardClick={(cardId: string) => {
          if (cardId === 'enrolled') onBrowseCourses();
          else if (cardId === 'completed') onContinueCourse(activeCourse.id);
          else if (cardId === 'dsa') onOpenDsaPractice();
          else if (cardId === 'certificates') onOpenCertificates();
          else if (cardId === 'internship') onOpenInternship();
          else if (cardId === 'job') onOpenPlacement();
        }}
      />

      {/* ─── 3. BENTO GRID ROW 1: CONTINUE LEARNING (7 COLS) + LEARNING PROGRESS (5 COLS) ─── */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* Card A: Continue Learning */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-slate-200/85 bg-white/90 p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] backdrop-blur-xl"
        >
          <div>
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-[#6D28D9] border border-violet-200/70">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    Continue Learning
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500">
                    {isEnrolledInActiveCourse
                      ? 'Enrolled Career Track'
                      : 'Recommended Flagship Track (Free Module 1 Trial)'}
                  </p>
                </div>
              </div>

              <span
                className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                  isEnrolledInActiveCourse
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/70'
                    : 'bg-violet-50 text-[#6D28D9] border border-violet-200/70'
                }`}
              >
                {isEnrolledInActiveCourse ? 'Unlocked' : 'Module 1 Open'}
              </span>
            </div>

            <div className="mt-4 flex flex-col gap-4 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 sm:flex-row sm:items-center">
              <img
                src={activeCourse.image}
                alt={activeCourse.title}
                className="h-20 w-full rounded-lg object-cover sm:w-32 shrink-0 border border-slate-200/70"
                loading="lazy"
              />

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#6D28D9]">
                  <span>{activeCourse.topBadge?.text || 'Career Program'}</span>
                  <span>•</span>
                  <span>{activeCourse.courseTypeLabel || 'Interactive Lab'}</span>
                </div>

                <h4 className="mt-0.5 truncate text-base font-extrabold text-slate-900">
                  {activeCourse.title}
                </h4>

                <p className="mt-0.5 line-clamp-1 text-xs text-slate-500">
                  {activeCourse.subtitle || activeCourse.shortDesc}
                </p>

                {/* Real Progress Bar */}
                <div className="mt-3">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
                    <span>
                      {completedTopicsCount} of {totalTrackTopics} Core Topics Completed
                    </span>
                    <span className="font-bold text-[#6D28D9]">
                      {primaryCourseProgressPct}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-200/80">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] transition-all duration-500"
                      style={{ width: `${Math.max(primaryCourseProgressPct, completedTopicsCount > 0 ? 6 : 0)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pt-1">
            <button
              type="button"
              onClick={onBrowseCourses}
              className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-[#6D28D9] transition-colors"
            >
              <Layers className="h-3.5 w-3.5" />
              <span>View All 10 Career Tracks</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>

            <button
              type="button"
              onClick={() => onContinueCourse(activeCourse.id)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] px-4 py-2 text-xs font-bold text-white shadow-xs transition-all hover:brightness-105"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>
                {completedTopicsCount > 0 || isEnrolledInActiveCourse
                  ? 'Resume Classroom'
                  : 'Open First Lesson'}
              </span>
            </button>
          </div>
        </motion.div>

        {/* Card B: Learning Progress */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-slate-200/85 bg-white/90 p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] backdrop-blur-xl"
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200/70">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    Learning Progress
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500">
                    Real-time classroom & coding telemetry
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200/70 px-2 py-0.5 text-[11px] font-bold text-amber-700">
                  <Coins className="h-3 w-3 text-amber-500" />
                  {telemetry.coins || 0}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 border border-violet-200/70 px-2 py-0.5 text-[11px] font-bold text-violet-700">
                  <Gem className="h-3 w-3 text-violet-500" />
                  {telemetry.gems || 0}
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {/* Metric 1: Classroom Topics */}
              <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span>Interactive Classroom Topics</span>
                  <span className="text-[#6D28D9]">
                    {completedTopicsCount} Completed
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  {completedLessonsCount > 0
                    ? `${completedLessonsCount} lesson steps verified`
                    : 'Complete interactive lessons to build your streak'}
                </p>
              </div>

              {/* Metric 2: DSA Challenges */}
              <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span>DSA Coding Challenges</span>
                  <span className="text-blue-600">
                    {dsaSolvedCount} Solved
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  {dsaTopicsSolvedCount > 0
                    ? `${dsaTopicsSolvedCount} DSA topic module${dsaTopicsSolvedCount > 1 ? 's' : ''} practiced`
                    : 'Solve hands-on Python, SQL & DSA problems'}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
            <span className="text-[11px] font-semibold text-slate-500">
              Synced with your student profile
            </span>
            <button
              type="button"
              onClick={onOpenDsaPractice}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#6D28D9] hover:text-[#4C1D95]"
            >
              <span>Open Practice Hub</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* ─── 4. BENTO GRID ROW 2: CAREER PREPARATION (4 COLS) + WALLET OVERVIEW (4 COLS) + RECENT ACTIVITY (4 COLS) ─── */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* Card C: Career Preparation */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="lg:col-span-4 flex flex-col justify-between rounded-2xl border border-slate-200/85 bg-white/90 p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] backdrop-blur-xl"
        >
          <div>
            <div className="inline-flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-200/70">
                <Briefcase className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-slate-900">
                  Career Preparation
                </h3>
                <p className="text-[11px] font-medium text-slate-500">
                  Resume, internship & placement tools
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <button
                type="button"
                onClick={onOpenAtsResume}
                className="group flex w-full items-center justify-between rounded-xl border border-slate-200/70 bg-slate-50/70 p-2.5 text-left transition-all hover:border-violet-200 hover:bg-[#F5F3FF]"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200/70">
                    <FileCheck className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold text-slate-900 group-hover:text-[#4C1D95]">
                      ATS Resume Score
                    </p>
                    <p className="truncate text-[10.5px] text-slate-500">
                      Instant AI resume scan & feedback
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 group-hover:translate-x-0.5 group-hover:text-[#6D28D9] transition-all" />
              </button>

              <button
                type="button"
                onClick={onOpenInternship}
                className="group flex w-full items-center justify-between rounded-xl border border-slate-200/70 bg-slate-50/70 p-2.5 text-left transition-all hover:border-violet-200 hover:bg-[#F5F3FF]"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600 border border-purple-200/70">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold text-slate-900 group-hover:text-[#4C1D95]">
                      Internship Portal
                    </p>
                    <p className="truncate text-[10.5px] text-slate-500">
                      Industry projects & experience letter
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 group-hover:translate-x-0.5 group-hover:text-[#6D28D9] transition-all" />
              </button>

              <button
                type="button"
                onClick={onOpenPlacement}
                className="group flex w-full items-center justify-between rounded-xl border border-slate-200/70 bg-slate-50/70 p-2.5 text-left transition-all hover:border-violet-200 hover:bg-[#F5F3FF]"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 border border-cyan-200/70">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold text-slate-900 group-hover:text-[#4C1D95]">
                      Placement Cell
                    </p>
                    <p className="truncate text-[10.5px] text-slate-500">
                      Job referrals & interview prep
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 group-hover:translate-x-0.5 group-hover:text-[#6D28D9] transition-all" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Card D: Wallet Overview */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="lg:col-span-4 flex flex-col justify-between rounded-2xl border border-slate-200/85 bg-white/90 p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] backdrop-blur-xl"
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-teal-600 border border-teal-200/70">
                  <Wallet className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    Wallet Overview
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500">
                    Scholarships & referral earnings
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-teal-50 border border-teal-200/70 px-2 py-0.5 text-[10.5px] font-bold text-teal-700">
                Verified
              </span>
            </div>

            <div className="mt-4 rounded-xl border border-violet-200/70 bg-gradient-to-br from-[#F5F3FF] via-white to-indigo-50/50 p-3.5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Available Wallet Balance
              </p>
              <div className="mt-1 flex items-baseline justify-between">
                <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                  ₹{walletData.availableBalance.toLocaleString('en-IN')}
                </span>
                <span className="text-[11px] font-semibold text-slate-500">
                  Total Earned: ₹{walletData.totalEarned.toLocaleString('en-IN')}
                </span>
              </div>

              {referralCode && (
                <div className="mt-3 flex items-center justify-between rounded-lg border border-slate-200/80 bg-white px-2.5 py-1.5">
                  <div className="min-w-0">
                    <span className="text-[10px] font-semibold uppercase text-slate-400 block">
                      Your Referral Code
                    </span>
                    <span className="font-mono text-xs font-bold text-[#4C1D95]">
                      {referralCode}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyReferral}
                    className="inline-flex items-center gap-1 rounded-md bg-violet-50 px-2 py-1 text-[11px] font-bold text-[#6D28D9] hover:bg-violet-100 transition-colors"
                  >
                    {copiedRef ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenWallet}
              className="flex-1 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] px-3 py-2 text-center text-xs font-bold text-white shadow-2xs transition-all hover:brightness-105"
            >
              Open Earning Hub
            </button>
            {onOpenWithdraw && (
              <button
                type="button"
                onClick={onOpenWithdraw}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 hover:border-violet-200 hover:text-[#6D28D9] transition-colors"
              >
                Withdraw
              </button>
            )}
          </div>
        </motion.div>

        {/* Card E: Recent Activity */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="lg:col-span-4 flex flex-col justify-between rounded-2xl border border-slate-200/85 bg-white/90 p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] backdrop-blur-xl"
        >
          <div>
            <div className="inline-flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600 border border-amber-200/70">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-slate-900">
                  Recent Activity
                </h3>
                <p className="text-[11px] font-medium text-slate-500">
                  Your real learning & practice log
                </p>
              </div>
            </div>

            {recentActivities.length > 0 ? (
              <div className="mt-4 space-y-2">
                {recentActivities.map((act) => (
                  <button
                    key={act.id}
                    type="button"
                    onClick={act.onClick}
                    className="flex w-full items-center justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50/80 p-2.5 text-left transition-all hover:border-violet-200 hover:bg-[#F5F3FF]/60"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-xs font-bold text-slate-800">
                        {act.title}
                      </p>
                      <p className="truncate text-[10.5px] text-slate-500">
                        {act.subtitle}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-bold ${act.color}`}
                    >
                      {act.badge}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="mt-4 flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/50 px-4 py-6 text-center">
                <p className="text-xs font-bold text-slate-700">
                  No learning activity recorded yet
                </p>
                <p className="mt-1 text-[11px] text-slate-500">
                  Open a course module or solve a DSA problem to see your progress log here.
                </p>
                <button
                  type="button"
                  onClick={() => onContinueCourse(activeCourse.id)}
                  className="mt-3 inline-flex items-center gap-1 rounded-lg bg-violet-50 border border-violet-200/80 px-3 py-1.5 text-[11px] font-bold text-[#6D28D9] hover:bg-violet-100 transition-colors"
                >
                  <span>Start First Lesson</span>
                  <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardV22BentoHub;
