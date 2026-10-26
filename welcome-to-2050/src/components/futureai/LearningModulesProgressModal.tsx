import React, { useEffect, useState, useMemo } from 'react';
import { X, ArrowRight, Briefcase, FileText, Award, TrendingUp, Check, ChevronDown, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../../services/soundEffects';
import { getUnlockedCourses, CanonicalCourseId } from '../../services/courseUnlockService';
import { getLearnerTelemetry } from '../../services/realAuthService';

interface CourseMeta {
  id: CanonicalCourseId;
  title: string;
  subtitle: string;
  icon: string;
  targetHash: string;
  totalTopics: number;
}

const COURSES_CATALOG: Record<CanonicalCourseId, CourseMeta> = {
  data_analyst: {
    id: 'data_analyst',
    title: 'Data Analyst with Gen AI',
    subtitle: 'Learn Python, SQL, Power BI & Gen AI for Real Projects',
    icon: '/images/icons3d/icon_01_python.png',
    targetHash: '#data-analyst',
    totalTopics: 26,
  },
  data_science: {
    id: 'data_science',
    title: 'Data Science & Agentic AI',
    subtitle: 'Build Predictive Models, Neural Networks & Autonomous AI Agents',
    icon: '/images/icons3d/icon_02_sql.png',
    targetHash: '#data-science',
    totalTopics: 28,
  },
  ml_engineering: {
    id: 'ml_engineering',
    title: 'Machine Learning Engineering',
    subtitle: 'Scale Machine Learning Systems, MLOps & Production Pipelines',
    icon: '/images/icons3d/icon_05_stats.png',
    targetHash: '#ml-engineering',
    totalTopics: 25,
  },
  ai_engineering: {
    id: 'ai_engineering',
    title: 'AI Engineering & LLMOps',
    subtitle: 'Deploy LLMs, RAG Pipelines & Enterprise AI Architectures',
    icon: '/images/icons3d/icon_06_genai.png',
    targetHash: '#ai-engineering',
    totalTopics: 30,
  },
  ai_tools_prompt: {
    id: 'ai_tools_prompt',
    title: 'AI Tools & Prompt Engineering',
    subtitle: 'Master Generative AI, Prompt Engineering & Workflow Automation',
    icon: '/images/icons3d/icon_04_powerbi.png',
    targetHash: '#ai-tools',
    totalTopics: 20,
  },
  ms_office_copilot: {
    id: 'ms_office_copilot',
    title: 'Advanced MS Office & Copilot',
    subtitle: 'Excel Advanced Formulas, Power Query & Microsoft 365 Copilot',
    icon: '/images/icons3d/icon_03_excel.png',
    targetHash: '#ms-office',
    totalTopics: 22,
  },
  deep_learning: {
    id: 'deep_learning',
    title: 'Deep Learning & Neural Networks',
    subtitle: 'Master Computer Vision, NLP & Transformer Architectures',
    icon: '/images/icons3d/icon_06_genai.png',
    targetHash: '#deep-learning',
    totalTopics: 24,
  },
  full_stack_mern: {
    id: 'full_stack_mern',
    title: 'Full Stack MERN & AI',
    subtitle: 'Build Modern Web Apps with React, Node, MongoDB & AI APIs',
    icon: '/images/icons3d/icon_modules_layer.png',
    targetHash: '#full-stack',
    totalTopics: 32,
  },
};

interface LearningModulesProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetFeature?: 'Internship' | 'Certificate' | 'Placement' | string;
  onGoToModules?: () => void;
  onNavigateToModule?: (moduleId: string) => void;
  onOpenLogin?: () => void;
  initialPythonCompleted?: boolean;
}

export const LearningModulesProgressModal: React.FC<LearningModulesProgressModalProps> = ({
  isOpen,
  onClose,
  onGoToModules,
  onOpenLogin,
}) => {
  const [courseSelectorOpen, setCourseSelectorOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<CanonicalCourseId>('data_analyst');
  const [telemetry, setTelemetry] = useState(() => getLearnerTelemetry());

  // Check login state and unlocked courses dynamically
  const isLoggedIn = useMemo(() => {
    if (typeof window === 'undefined') return false;
    try {
      return localStorage.getItem('futureai_logged_in') === 'true';
    } catch {
      return false;
    }
  }, [isOpen]);

  const enrolledCourseIds = useMemo<CanonicalCourseId[]>(() => {
    if (!isOpen) return [];
    try {
      return getUnlockedCourses();
    } catch {
      return [];
    }
  }, [isOpen]);

  // Set default selected course based on actual enrollment
  useEffect(() => {
    if (isOpen) {
      setTelemetry(getLearnerTelemetry());
      setCourseSelectorOpen(false);

      if (enrolledCourseIds.length > 0) {
        // If current selection is in enrolled list, keep it; otherwise pick first enrolled course
        if (!enrolledCourseIds.includes(selectedCourseId)) {
          setSelectedCourseId(enrolledCourseIds[0]);
        }
      } else {
        setSelectedCourseId('data_analyst');
      }

      // Play soft celebration sound and confetti burst
      try {
        soundEffects.playDiscovery();
      } catch {
        // audio policy fallback
      }

      try {
        confetti({
          particleCount: 25,
          spread: 55,
          origin: { y: 0.32 },
          colors: ['#145BFF', '#0866FF', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'],
          disableForReducedMotion: true,
        });
      } catch {
        // ignore
      }
    }
  }, [isOpen, enrolledCourseIds]);

  if (!isOpen) return null;

  const hasEnrolledCourses = isLoggedIn && enrolledCourseIds.length > 0;
  const activeCourse = COURSES_CATALOG[selectedCourseId] || COURSES_CATALOG.data_analyst;

  // Calculate real course progress based on completed topics
  const completedTopicsCount = Array.isArray(telemetry?.completedTopics)
    ? telemetry.completedTopics.length
    : 0;
  const totalTopics = activeCourse.totalTopics || 26;
  const progressPercent = hasEnrolledCourses
    ? Math.min(100, Math.round((completedTopicsCount / totalTopics) * 100))
    : 0;
  const isCompleted = progressPercent >= 100;

  const handleCtaClick = () => {
    soundEffects.playClick();
    onClose();

    // If visitor is unauthenticated, prompt login
    if (!isLoggedIn) {
      if (onOpenLogin) {
        onOpenLogin();
      } else if (typeof window !== 'undefined') {
        window.location.hash = '#login';
      }
      return;
    }

    // Authenticated student goes directly to active course learning modules
    if (onGoToModules) {
      onGoToModules();
    } else if (typeof window !== 'undefined') {
      window.location.hash = activeCourse.targetHash;
    }
  };

  const handleChooseCourseCatalog = () => {
    soundEffects.playClick();
    onClose();
    if (typeof window !== 'undefined') {
      window.location.hash = '#courses';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 select-none animate-fadeIn transition-opacity duration-250"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-[620px] max-h-[90vh] bg-white rounded-[24px] shadow-[0_25px_60px_-15px_rgba(8,21,47,0.35)] border border-blue-100/80 overflow-hidden flex flex-col transform transition-all duration-250 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Top Photo: Female Student with Placement Offer Letter (Stamped PLACED) ── */}
        <div className="relative w-full h-[160px] sm:h-[195px] overflow-hidden bg-slate-900 shrink-0">
          <img
            src="/images/placement/placement_offer_letter_hero.jpg"
            alt="Placed Student Holding Offer Letter"
            className="w-full h-full object-cover object-center select-none pointer-events-none"
          />

          {/* Floating Close (X) Button */}
          <button
            type="button"
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-slate-800 flex items-center justify-center shadow-md active:scale-90 transition-all cursor-pointer z-30"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-slate-800 stroke-[2.5]" />
          </button>
        </div>

        {/* ── Scrollable Body Content ── */}
        <div className="overflow-y-auto px-4 sm:px-6 pb-5 pt-0 space-y-4">
          {/* ── Main Heading in Light-Blue Rounded Panel ── */}
          <div className="-mt-7 sm:-mt-8 relative z-10 bg-white/95 border border-[#cfe4fc] rounded-[20px] py-3 px-4 text-center shadow-[0_8px_20px_-6px_rgba(8,21,47,0.12)] backdrop-blur-sm">
            <h2
              className="text-[20px] sm:text-[25px] font-black tracking-tight leading-snug"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span>🏆 </span>
              <span className="text-[#08152F]">Complete Any </span>
              <span className="text-[#145BFF]">1 Course</span>
              <span> 🚀</span>
            </h2>
            <p
              className="text-[12.5px] sm:text-[13px] font-medium text-[#4b6082] mt-0.5 leading-snug"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Unlock Your Internship, Certificate &amp; Placement
            </p>
          </div>

          {/* ── Dynamic Enrolled Course Section ── */}
          <div className="space-y-2">
            <div className="flex items-center justify-between px-1">
              <span
                className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wider text-slate-500"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                YOUR ENROLLED COURSE
              </span>

              {hasEnrolledCourses && enrolledCourseIds.length > 1 ? (
                <button
                  type="button"
                  onClick={() => setCourseSelectorOpen(!courseSelectorOpen)}
                  className="inline-flex items-center gap-1 text-[12px] sm:text-[13px] font-bold text-[#145BFF] hover:underline cursor-pointer"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span>Change Course</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${courseSelectorOpen ? 'rotate-180' : ''}`} />
                </button>
              ) : !hasEnrolledCourses ? (
                <button
                  type="button"
                  onClick={handleChooseCourseCatalog}
                  className="text-[12px] sm:text-[13px] font-bold text-[#145BFF] hover:underline cursor-pointer"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Choose Your Course →
                </button>
              ) : null}
            </div>

            {/* Course Selector Dropdown (when student has multiple enrolled courses) */}
            {courseSelectorOpen && enrolledCourseIds.length > 1 && (
              <div className="p-2 bg-white rounded-2xl border border-blue-200 shadow-lg space-y-1 animate-fadeIn">
                <p className="text-[11px] font-bold text-slate-400 px-2 py-1 uppercase tracking-wide">
                  Select Active Course:
                </p>
                {enrolledCourseIds.map((cid) => {
                  const c = COURSES_CATALOG[cid];
                  if (!c) return null;
                  const isSelected = c.id === selectedCourseId;
                  return (
                    <button
                      key={cid}
                      type="button"
                      onClick={() => {
                        setSelectedCourseId(cid);
                        setCourseSelectorOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                        isSelected ? 'bg-blue-50/80 border border-blue-200' : 'hover:bg-slate-50 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <img src={c.icon} alt="" className="w-6 h-6 object-contain" />
                        <span className="text-xs sm:text-sm font-bold text-[#08152F]">{c.title}</span>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-[#145BFF] stroke-[2.5]" />}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Active Course Card */}
            <div className="bg-[#f0f6ff] border border-blue-100/90 rounded-2xl p-3 sm:p-3.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-white border border-blue-100 flex items-center justify-center shrink-0 shadow-xs p-1">
                  <img
                    src={activeCourse.icon}
                    alt={activeCourse.title}
                    className="w-9 h-9 object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3
                      className="text-sm sm:text-[15px] font-black text-[#08152F] truncate leading-tight"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {activeCourse.title}
                    </h3>
                    {hasEnrolledCourses && (
                      <span className="shrink-0 bg-emerald-100/80 text-emerald-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        Enrolled
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 truncate mt-0.5">
                    {activeCourse.subtitle}
                  </p>
                </div>
              </div>

              {!hasEnrolledCourses && (
                <button
                  type="button"
                  onClick={handleChooseCourseCatalog}
                  className="shrink-0 text-xs font-bold bg-white hover:bg-blue-50 text-[#145BFF] border border-blue-200 px-3 py-1.5 rounded-xl shadow-2xs active:scale-95 transition-all cursor-pointer"
                >
                  Choose Course
                </button>
              )}
            </div>
          </div>

          {/* ── Dynamic Course Progress Bar ── */}
          <div className="space-y-1.5 pt-0.5">
            <div className="flex items-center justify-between text-xs sm:text-[13px]">
              <span
                className="font-bold text-slate-700"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Course Progress
              </span>
              <span
                className={`font-black ${isCompleted ? 'text-emerald-600' : 'text-[#145BFF]'}`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {isCompleted ? 'Course Completed ✓' : `${progressPercent}%`}
              </span>
            </div>

            <div className="w-full h-[7px] bg-blue-100/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#145BFF] rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* ── 4 Career Benefits (Desktop 1 Row, Mobile 2 Columns) ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
            {/* Benefit 1: Get Internship Opportunities */}
            <div className="bg-slate-50/90 border border-slate-100 rounded-xl p-2.5 flex flex-col items-center text-center justify-center transition-all hover:bg-blue-50/50 hover:border-blue-100">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#145BFF] mb-2 shadow-2xs">
                <Briefcase className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span
                className="text-[11px] sm:text-[11.5px] font-bold text-[#08152F] leading-snug"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Get Internship<br />Opportunities
              </span>
            </div>

            {/* Benefit 2: Receive Recommendation Letter */}
            <div className="bg-slate-50/90 border border-slate-100 rounded-xl p-2.5 flex flex-col items-center text-center justify-center transition-all hover:bg-purple-50/50 hover:border-purple-100">
              <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-[#8B5CF6] mb-2 shadow-2xs">
                <FileText className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span
                className="text-[11px] sm:text-[11.5px] font-bold text-[#08152F] leading-snug"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Receive Recommendation<br />Letter
              </span>
            </div>

            {/* Benefit 3: Earn Verified Certificate */}
            <div className="bg-slate-50/90 border border-slate-100 rounded-xl p-2.5 flex flex-col items-center text-center justify-center transition-all hover:bg-pink-50/50 hover:border-pink-100">
              <div className="w-9 h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#EC4899] mb-2 shadow-2xs">
                <Award className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span
                className="text-[11px] sm:text-[11.5px] font-bold text-[#08152F] leading-snug"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Earn Verified<br />Certificate
              </span>
            </div>

            {/* Benefit 4: Access Job Opportunities */}
            <div className="bg-slate-50/90 border border-slate-100 rounded-xl p-2.5 flex flex-col items-center text-center justify-center transition-all hover:bg-emerald-50/50 hover:border-emerald-100">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#10B981] mb-2 shadow-2xs">
                <TrendingUp className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span
                className="text-[11px] sm:text-[11.5px] font-bold text-[#08152F] leading-snug"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Access Job<br />Opportunities
              </span>
            </div>
          </div>

          {/* ── Primary CTA Button ── */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleCtaClick}
              className="w-full h-[52px] rounded-[14px] bg-gradient-to-r from-[#075BFF] to-[#079CFF] hover:from-[#0051e8] hover:to-[#008fe6] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_10px_24px_rgba(7,91,255,0.35)] active:scale-[0.98] transition-all cursor-pointer"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span>Continue to Your Learning Modules</span>
              <ArrowRight className="w-5 h-5 text-white stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningModulesProgressModal;
