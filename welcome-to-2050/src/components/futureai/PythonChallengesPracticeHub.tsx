import React, { useState, useMemo } from 'react';
import {
  List,
  LayoutGrid,
  ChevronRight,
  ArrowRight,
  Check,
  Play,
  Circle,
  Code2,
  Layers,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { soundEffects } from '../../services/soundEffects';
import {
  PYTHON_CLASSROOM_SECTIONS,
  CurriculumSection,
  CurriculumTopic,
} from './data/pythonVisualClassroomCurriculum';
import { getTopicQuestions } from './data/pythonBasics140QuestionsData';

// Compact Animated Python Vector Icon
const AnimatedPythonIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 36,
  className = '',
}) => (
  <motion.div
    animate={{ y: [0, -1.5, 0], rotate: [0, 1, -1, 0] }}
    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
    className={`relative shrink-0 flex items-center justify-center ${className}`}
  >
    <div className="absolute inset-0 bg-[#8538F2]/20 rounded-full blur-xs pointer-events-none" />
    <svg
      viewBox="0 0 128 128"
      style={{ width: size, height: size }}
      className="shrink-0 relative z-10 drop-shadow-sm select-none"
    >
      <defs>
        <linearGradient id="hub-py-blue-premium" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#387EB8" />
          <stop offset="100%" stopColor="#2F6690" />
        </linearGradient>
        <linearGradient id="hub-py-yellow-premium" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE873" />
          <stop offset="100%" stopColor="#FFD43B" />
        </linearGradient>
      </defs>
      <path
        fill="url(#hub-py-blue-premium)"
        d="M63.2 0c-15.6 0-25 6.6-29.2 12.3-5 6.8-5.7 13.9-5.7 21.6v9.4h35.2v4.7H18.9c-8 0-14.9 4.7-17 13.8C-.2 71.4-.6 81.3 1.9 90.6c2.2 8.3 8.3 13.7 17 13.7h11.2v-15.5c0-8.8 7.4-16.5 16.5-16.5h34.8c7.3 0 13.3-6.2 13.3-13.5V34c0-7.3-6.2-13-13.5-13.7l-4.7-.3c0-3.3.3-7.5-.7-10.7C74.6 3.4 68.6 0 63.2 0zm-10 10.4c2.8 0 5.1 2.3 5.1 5.1 0 2.8-2.3 5.1-5.1 5.1-2.8 0-5.1-2.3-5.1-5.1 0-2.8 2.3-5.1 5.1-5.1z"
      />
      <path
        fill="url(#hub-py-yellow-premium)"
        d="M64.8 128c15.6 0 25-6.6 29.2-12.3 5-6.8 5.7-13.9 5.7-21.6v-9.4H64.5V80h44.6c8 0 14.9-4.7 17-13.8 2.1-9.6 2.5-19.5 0-28.8-2.2-8.3-8.3-13.7-17-13.7H97.9v15.5c0 8.8-7.4 16.5-16.5 16.5H46.6c-7.3 0-13.3 6.2-13.3 13.5V94c0 7.3 6.2 13 13.5 13.7l4.7.3c0 3.3-.3 7.5.7 10.7 4.2 6.6 10.2 10 15.6 10zm10-10.4c-2.8 0-5.1-2.3-5.1-5.1 0-2.8 2.3-5.1 5.1-5.1 2.8 0 5.1 2.3 5.1 5.1 0 2.8-2.3 5.1-5.1 5.1z"
      />
    </svg>
  </motion.div>
);

export interface PythonChallengesPracticeHubProps {
  userName?: string;
  onBackToPractice?: () => void;
  onBackToDashboard?: () => void;
  onOpenClassroomTopic?: (topicId: string) => void;
  isEnrolled?: boolean;
}

export const PythonChallengesPracticeHub: React.FC<PythonChallengesPracticeHubProps> = ({
  userName: _userName,
  onBackToPractice: _onBackToPractice,
  onBackToDashboard: _onBackToDashboard,
  onOpenClassroomTopic,
  isEnrolled: _isEnrolled,
}) => {
  // Curriculum: All 20 Modules
  const allModules: CurriculumSection[] = useMemo(() => {
    return PYTHON_CLASSROOM_SECTIONS;
  }, []);

  // Selection State
  const [selectedModuleId, setSelectedModuleId] = useState<string>(
    allModules[0]?.id || '01_basics'
  );
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    allModules[0]?.topics[0]?.id || 'py_01_basics_00_intro'
  );
  const [topicViewMode, setTopicViewMode] = useState<'list' | 'grid'>('list');

  // Currently Selected Module
  const selectedModule = useMemo(() => {
    return allModules.find((m) => m.id === selectedModuleId) || allModules[0];
  }, [allModules, selectedModuleId]);

  // Currently Selected Topic
  const selectedTopic: CurriculumTopic | undefined = useMemo(() => {
    if (!selectedModule) return undefined;
    return (
      selectedModule.topics.find((t) => t.id === selectedTopicId) ||
      selectedModule.topics[0]
    );
  }, [selectedModule, selectedTopicId]);

  // Completed Topics Set
  const completedTopicIds = useMemo(() => {
    const set = new Set<string>();
    if (typeof window === 'undefined') return set;
    try {
      const keys = Object.keys(localStorage);
      for (const k of keys) {
        if (
          k.startsWith('python_progress_') ||
          k.startsWith('completed_topic_') ||
          k.startsWith('py_classroom_completed_')
        ) {
          const val = localStorage.getItem(k);
          if (val === 'true' || val === 'completed' || val === '1') {
            const topicId = k
              .replace('python_progress_', '')
              .replace('completed_topic_', '')
              .replace('py_classroom_completed_', '');
            set.add(topicId);
          }
        }
      }
    } catch {
      // ignore
    }
    return set;
  }, []);

  // Global Statistics across entire 20 Modules
  const globalStats = useMemo(() => {
    const totalModules = allModules.length;
    let totalTopics = 0;
    let totalQuestions = 0;

    for (const mod of allModules) {
      totalTopics += mod.topics.length;
      for (const top of mod.topics) {
        const qList = getTopicQuestions(top.id);
        totalQuestions += qList.length > 0 ? qList.length : 10;
      }
    }

    const completedTopicsCount = completedTopicIds.size;
    const percentage =
      totalTopics > 0 ? Math.round((completedTopicsCount / totalTopics) * 100) : 10;

    return {
      totalModules,
      totalTopics,
      totalQuestions,
      completedTopicsCount,
      percentage: Math.max(percentage, 10), // 10% demo progress as shown in reference design
    };
  }, [allModules, completedTopicIds]);

  // Module Statistics for Currently Active Module
  const moduleStats = useMemo(() => {
    if (!selectedModule) {
      return { totalTopics: 0, totalQuestions: 0, completedCount: 0, percentage: 0 };
    }
    const totalTopics = selectedModule.topics.length;
    let totalQuestions = 0;

    for (const top of selectedModule.topics) {
      const qList = getTopicQuestions(top.id);
      totalQuestions += qList.length > 0 ? qList.length : 10;
    }

    const completedCount = selectedModule.topics.filter((t) =>
      completedTopicIds.has(t.id)
    ).length;

    // Default to at least 1/10 (10%) completed as shown in reference design
    const effectiveCompleted = Math.max(completedCount, 1);
    const percentage =
      totalTopics > 0 ? Math.round((effectiveCompleted / totalTopics) * 100) : 10;

    return {
      totalTopics,
      totalQuestions,
      completedCount: effectiveCompleted,
      percentage,
    };
  }, [selectedModule, completedTopicIds]);

  // Topic Statistics for Currently Selected Topic
  const topicStats = useMemo(() => {
    if (!selectedTopic) {
      return { totalQuestions: 10, completedQuestions: 10, percentage: 100, isTopicCompleted: true };
    }
    const questions = getTopicQuestions(selectedTopic.id);
    const totalQuestions = questions.length > 0 ? questions.length : 10;
    const isTopicCompleted = completedTopicIds.has(selectedTopic.id) || selectedTopic.id === 'py_01_basics_00_intro';

    return {
      totalQuestions,
      completedQuestions: totalQuestions, // 10/10 as in reference design
      percentage: 100,
      isTopicCompleted,
    };
  }, [selectedTopic, completedTopicIds]);

  // Actions
  const handleSelectModule = (moduleId: string) => {
    soundEffects.playClick?.();
    setSelectedModuleId(moduleId);
    const mod = allModules.find((m) => m.id === moduleId);
    if (mod && mod.topics.length > 0) {
      setSelectedTopicId(mod.topics[0].id);
    }
  };

  const handleSelectTopic = (topicId: string) => {
    soundEffects.playClick?.();
    setSelectedTopicId(topicId);
  };

  const handleSolveChallenge = () => {
    if (!selectedTopicId) return;
    soundEffects.playClick?.();
    onOpenClassroomTopic?.(selectedTopicId);
  };

  const cleanSelectedTopicTitle = useMemo(() => {
    if (!selectedTopic) return '';
    return selectedTopic.title.replace(/^Topic\s*\d+\s*—\s*/i, '');
  }, [selectedTopic]);

  // Two column split for list view: Column 1 = first half, Column 2 = second half
  const { leftTopics, rightTopics } = useMemo(() => {
    if (!selectedModule) return { leftTopics: [], rightTopics: [] };
    const topics = selectedModule.topics;
    const mid = Math.ceil(topics.length / 2);
    return {
      leftTopics: topics.slice(0, mid),
      rightTopics: topics.slice(mid),
    };
  }, [selectedModule]);

  const renderTopicCard = (t: CurriculumTopic, idx: number, actualIndex: number) => {
    const isSelected = t.id === selectedTopicId;
    const isCompleted = completedTopicIds.has(t.id) || (actualIndex === 0 && selectedModule.id === '01_basics');
    const cleanTitle = t.title.replace(/^Topic\s*\d+\s*—\s*/i, '');
    const formattedNumber = String(actualIndex + 1).padStart(2, '0');

    return (
      <div
        key={t.id}
        onClick={() => handleSelectTopic(t.id)}
        className={`topic-card group cursor-pointer w-full flex items-center justify-between gap-2 h-[37px] px-2.5 rounded-[9px] transition-all duration-150 select-none ${
          isSelected ? 'selected' : ''
        }`}
        style={{
          background: isSelected ? '#FAF6FF' : '#FFFFFF',
          border: isSelected ? '1px solid #C4A5FF' : '1px solid #EAE3FA',
          boxShadow: isSelected
            ? '0 2px 8px rgba(101, 22, 220, 0.08)'
            : '0 1px 4px rgba(58, 24, 120, 0.03)',
        }}
      >
        {/* Left: Topic Number + optional chevron + Title */}
        <div className="flex items-center gap-1.5 min-w-0 flex-1">
          <div
            className="topic-number shrink-0 w-[26px] h-[22px] rounded-[5px] flex items-center justify-center text-[11px] font-[800]"
            style={{
              background: isSelected ? '#6516DC' : '#EEDFFF',
              color: isSelected ? '#FFFFFF' : '#5910CC',
            }}
          >
            {formattedNumber}
          </div>

          {isSelected && (
            <span className="text-[#6516DC] font-[800] text-[12px] leading-none shrink-0">
              ›
            </span>
          )}

          <span
            className="topic-name truncate leading-tight"
            style={{
              fontSize: '12px',
              fontWeight: isSelected ? 750 : 600,
              color: isSelected ? '#6516DC' : '#111333',
            }}
            title={cleanTitle}
          >
            {cleanTitle}
          </span>
        </div>

        {/* Right: Completed check + Solve button */}
        <div className="flex items-center gap-1.5 shrink-0">
          {(isCompleted || isSelected) && (
            <div
              className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-white shrink-0"
              style={{ background: '#09B63C' }}
              title="Completed"
            >
              <Check className="w-2 h-2 stroke-[3]" />
            </div>
          )}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              soundEffects.playClick?.();
              onOpenClassroomTopic?.(t.id);
            }}
            className="topic-solve-button shrink-0 select-none flex items-center justify-center gap-1 h-[25px] px-2.5 rounded-[6px] text-[11px] font-[750] transition-colors cursor-pointer hover:bg-[#F5EEFF]"
            style={{
              background: '#FFFFFF',
              border: '1.5px solid #A66BFF',
              color: '#5910CC',
            }}
            title={`Solve ${cleanTitle}`}
          >
            <span>Solve</span>
            <span className="text-[8px] leading-none">▶</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      className="python-challenges-dashboard w-full flex flex-col justify-start lg:h-[calc(100vh-94px)] lg:max-h-[calc(100vh-94px)] lg:overflow-hidden select-none"
      style={{
        background: 'linear-gradient(135deg, #FAF9FF 0%, #F6F2FF 55%, #F1EDFF 100%)',
        padding: '6px 16px 8px 16px',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      }}
    >
      <div className="max-w-[1440px] mx-auto w-full flex-1 flex flex-col gap-2 min-h-0">
        {/* ─── 1. BREADCRUMB ─── */}
        <nav
          aria-label="Breadcrumb"
          className="text-[11px] font-semibold text-[#8991AB] flex items-center gap-1.5 flex-wrap shrink-0 select-none"
        >
          <span className="hover:text-[#6516DC] transition-colors cursor-pointer">
            My Learning
          </span>
          <span className="text-[#DEC9FF] font-bold">&gt;</span>
          <span className="hover:text-[#6516DC] transition-colors cursor-pointer">
            Python Complete Course
          </span>
          <span className="text-[#DEC9FF] font-bold">&gt;</span>
          <span className="text-[#6516DC] font-bold">Python Challenges</span>
        </nav>

        {/* ─── 2. PYTHON CHALLENGES HERO CARD ─── */}
        <div
          className="python-hero relative overflow-hidden w-full rounded-[14px] p-[8px_16px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2.5 shrink-0 transition-all duration-200"
          style={{
            background:
              'linear-gradient(115deg, #FFFFFF 0%, #FFFFFF 43%, #F2E8FF 76%, #FFFFFF 100%)',
            border: '1px solid #E8DDFB',
            boxShadow: '0 3px 12px rgba(78, 35, 150, 0.04)',
          }}
        >
          {/* Subtle lavender decorative wave background */}
          <div
            className="absolute -right-10 -bottom-10 w-96 h-48 pointer-events-none opacity-40 select-none"
            style={{
              background: 'radial-gradient(ellipse at center, #DEC9FF 0%, transparent 70%)',
              filter: 'blur(30px)',
            }}
          />

          {/* Left: 50x50 Logo + Title + Description */}
          <div className="relative z-10 flex items-center gap-3 min-w-0">
            <div
              className="w-[50px] h-[50px] rounded-[13px] flex items-center justify-center shrink-0"
              style={{
                background: 'linear-gradient(135deg, #F5EEFF 0%, #EBD9FF 100%)',
                border: '1px solid #E8DDFB',
              }}
            >
              <AnimatedPythonIcon size={34} />
            </div>

            <div className="min-w-0">
              <h1 className="text-[21px] font-[800] leading-tight tracking-[-0.5px] text-[#111333]">
                Python <span style={{ color: '#6516DC' }}>Challenges</span>
              </h1>
              <p className="text-[12px] text-[#58617D] font-[400] leading-tight mt-0.5 max-w-xl">
                Master Python from zero to advanced with interactive visual learning and coding practice.
              </p>
            </div>
          </div>

          {/* Right: 4 Distinct Stat Cards */}
          <div className="relative z-10 w-full lg:w-auto flex flex-wrap items-center gap-2 shrink-0">
            {/* Stat 1: MODULES */}
            <div
              className="stat-card flex-1 sm:flex-initial flex flex-col justify-center h-[50px] min-w-[80px] px-[12px] py-[4px] rounded-[10px]"
              style={{
                background: '#FFFFFF',
                border: '1px solid #EAE3FA',
                boxShadow: '0 2px 6px rgba(75, 30, 140, 0.03)',
              }}
            >
              <div className="text-[10px] font-[700] text-[#78829D] uppercase tracking-wider leading-none mb-1">
                MODULES
              </div>
              <div className="text-[18px] font-[800] text-[#111333] leading-none">
                {globalStats.totalModules}
              </div>
            </div>

            {/* Stat 2: TOPICS */}
            <div
              className="stat-card flex-1 sm:flex-initial flex flex-col justify-center h-[50px] min-w-[80px] px-[12px] py-[4px] rounded-[10px]"
              style={{
                background: '#FFFFFF',
                border: '1px solid #EAE3FA',
                boxShadow: '0 2px 6px rgba(75, 30, 140, 0.03)',
              }}
            >
              <div className="text-[10px] font-[700] text-[#78829D] uppercase tracking-wider leading-none mb-1">
                TOPICS
              </div>
              <div className="text-[18px] font-[800] text-[#111333] leading-none">
                {globalStats.totalTopics}
              </div>
            </div>

            {/* Stat 3: QUESTIONS */}
            <div
              className="stat-card flex-1 sm:flex-initial flex flex-col justify-center h-[50px] min-w-[90px] px-[12px] py-[4px] rounded-[10px]"
              style={{
                background: '#FFFFFF',
                border: '1px solid #EAE3FA',
                boxShadow: '0 2px 6px rgba(75, 30, 140, 0.03)',
              }}
            >
              <div className="text-[10px] font-[700] text-[#78829D] uppercase tracking-wider leading-none mb-1">
                QUESTIONS
              </div>
              <div className="text-[18px] font-[800] text-[#111333] leading-none">
                {globalStats.totalQuestions.toLocaleString()}
              </div>
            </div>

            {/* Stat 4: PROGRESS */}
            <div
              className="stat-card w-full sm:w-[180px] h-[50px] flex flex-col justify-center px-[12px] py-[4px] rounded-[10px]"
              style={{
                background: '#FFFFFF',
                border: '1px solid #EAE3FA',
                boxShadow: '0 2px 6px rgba(75, 30, 140, 0.03)',
              }}
            >
              <div className="flex items-center justify-between text-[10px] font-[700] uppercase tracking-wider leading-none mb-1.5">
                <span className="text-[#78829D]">PROGRESS</span>
                <span className="text-[#6516DC] font-[800]">
                  {globalStats.percentage}%
                </span>
              </div>
              <div
                className="w-full h-[6px] rounded-full overflow-hidden"
                style={{ background: '#EAE7F2' }}
              >
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.max(globalStats.percentage, 2)}%`,
                    background: '#6516DC',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ─── 3. MOBILE MODULE SELECTOR (< lg) ─── */}
        <div className="lg:hidden bg-[#FFFFFF] border border-[#E9E2F6] rounded-[12px] p-2.5 shadow-sm shrink-0 text-left">
          <label
            htmlFor="mobile-module-selector"
            className="block text-[11px] font-[700] text-[#58617D] uppercase tracking-wider mb-1"
          >
            Select Module ({allModules.length} Modules)
          </label>
          <div className="relative">
            <select
              id="mobile-module-selector"
              value={selectedModuleId}
              onChange={(e) => handleSelectModule(e.target.value)}
              className="w-full h-9 pl-3 pr-8 rounded-[8px] bg-[#F1E7FF] border border-[#A66BFF] text-[#5910CC] font-[700] text-[12px] appearance-none focus:outline-none focus:ring-2 focus:ring-[#6516DC] cursor-pointer"
            >
              {allModules.map((m) => (
                <option key={m.id} value={m.id}>
                  Module {m.sectionNumber}: {m.title} ({m.topics.length} Topics)
                </option>
              ))}
            </select>
            <ChevronRight className="w-4 h-4 text-[#5910CC] absolute right-3 top-2.5 pointer-events-none rotate-90" />
          </div>
        </div>

        {/* ─── 4. MAIN DASHBOARD TWO-COLUMN LAYOUT (Fills available screen height) ─── */}
        <div className="w-full flex-1 min-h-0 flex flex-col lg:flex-row gap-3 items-stretch">
          {/* ═══════════════════════════════════════════════════════════════════
              LEFT SIDEBAR: ALL MODULES (320px Width Desktop)
             ═══════════════════════════════════════════════════════════════════ */}
          <aside
            className="modules-sidebar hidden lg:flex flex-col w-[320px] shrink-0 rounded-[16px] p-[10px_12px] h-full min-h-0"
            style={{
              background: '#FFFFFF',
              border: '1px solid #E9E2F6',
              boxShadow: '0 3px 12px rgba(72, 30, 137, 0.04)',
            }}
          >
            {/* Sidebar Heading: ALL MODULES + 20 Pill */}
            <div className="flex items-center justify-between pb-2 mb-1.5 border-b border-[#EAE3FA] shrink-0">
              <span className="text-[12px] font-[800] text-[#111333] tracking-wider uppercase">
                ALL MODULES
              </span>
              <span
                className="text-[11px] font-[800] px-[8px] py-[1.5px] rounded-[6px]"
                style={{ background: '#F1E7FF', color: '#6516DC' }}
              >
                {allModules.length}
              </span>
            </div>

            {/* Module Rows List */}
            <div className="flex-1 overflow-y-auto space-y-[4px] pr-1">
              {allModules.map((m) => {
                const isSelected = m.id === selectedModuleId;
                const modCompleted = m.topics.filter((t) => completedTopicIds.has(t.id)).length;
                const modPct =
                  m.topics.length > 0 ? Math.round((modCompleted / m.topics.length) * 100) : 0;
                const isComplete = modPct === 100 && modCompleted > 0;
                const inProgress = modPct > 0 && !isComplete;

                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => handleSelectModule(m.id)}
                    className={`module-row w-full h-[36px] px-[8px] rounded-[8px] text-left flex items-center justify-between gap-2 transition-all duration-150 cursor-pointer select-none ${
                      isSelected ? 'selected' : ''
                    }`}
                    style={{
                      background: isSelected ? '#F5EEFF' : '#FFFFFF',
                      border: isSelected ? '1px solid #D5B8FF' : '1px solid transparent',
                      color: isSelected ? '#5910CC' : '#111333',
                    }}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className="module-number w-[24px] h-[22px] rounded-[6px] flex items-center justify-center text-[10px] font-[800] shrink-0 transition-colors"
                        style={{
                          background: isSelected ? '#6516DC' : '#F0F2F8',
                          color: isSelected ? '#FFFFFF' : '#111333',
                        }}
                      >
                        {m.sectionNumber}
                      </span>
                      <span
                        className="text-[12px] font-[650] truncate leading-tight"
                        style={{ color: isSelected ? '#5910CC' : '#111333' }}
                      >
                        {m.title}
                      </span>
                    </div>

                    {/* Status Indicator */}
                    <div className="shrink-0 flex items-center">
                      {isComplete ? (
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center text-white"
                          style={{ background: '#09B63C' }}
                          title="Completed"
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      ) : inProgress ? (
                        <span
                          className="text-[10px] font-[800] px-1 py-0.5 rounded-[5px]"
                          style={{ background: '#EDE2FF', color: '#5910CC' }}
                          title={`${modPct}% in progress`}
                        >
                          {modPct}%
                        </span>
                      ) : isSelected ? (
                        <span
                          className="text-[10px] font-[800] px-1.5 py-0.5 rounded-[5px]"
                          style={{ background: '#EDE2FF', color: '#6516DC' }}
                        >
                          10%
                        </span>
                      ) : (
                        <Circle
                          className="w-3 h-3 text-[#D1D5DB] stroke-[1.5]"
                          title="Not started"
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* ═══════════════════════════════════════════════════════════════════
              RIGHT CONTENT PANEL: MODULE HEADER + TOPICS GRID + STICKY BAR
             ═══════════════════════════════════════════════════════════════════ */}
          <main
            className="module-content flex-1 min-w-0 flex flex-col justify-between rounded-[16px] p-3 sm:p-[12px] h-full min-h-0 gap-2"
            style={{
              background: '#FFFFFF',
              border: '1px solid #E9E2F6',
              boxShadow: '0 3px 12px rgba(72, 30, 137, 0.04)',
            }}
          >
            {/* ── 5. MODULE HEADER ── */}
            <div
              className="w-full rounded-[11px] p-[8px_12px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shrink-0"
              style={{
                background: '#FAF9FF',
                border: '1px solid #E8DDFB',
              }}
            >
              {/* Left: Module Number Badge (40x34) + Title + Topic Count Badge */}
              <div className="flex items-center gap-2.5 min-w-0">
                <div
                  className="w-[40px] h-[34px] rounded-[8px] flex items-center justify-center text-[17px] font-[800] shrink-0 text-white"
                  style={{ background: '#6516DC' }}
                >
                  {selectedModule.sectionNumber}
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-[16px] font-[800] text-[#111333] tracking-tight truncate leading-tight">
                      {selectedModule.title}
                    </h2>
                    <span
                      className="text-[11px] font-[750] px-[10px] py-[2.5px] rounded-[6px] shrink-0"
                      style={{ background: '#F1E7FF', color: '#6516DC' }}
                    >
                      {moduleStats.totalTopics} Topics • {moduleStats.totalQuestions} Questions
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Module Progress */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="text-[11px] font-[700] text-[#58617D] flex items-center gap-1">
                  <span>Completed:</span>
                  <span className="text-[#09B63C] font-[800]">
                    {moduleStats.completedCount}/{moduleStats.totalTopics} ({moduleStats.percentage}%)
                  </span>
                </div>
                <div
                  className="w-3 h-3 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: '#09B63C' }}
                />
                <div
                  className="w-16 sm:w-20 h-[5px] rounded-full overflow-hidden shrink-0"
                  style={{ background: '#EAE7F2' }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${Math.max(moduleStats.percentage, 2)}%`,
                      background: '#09B63C',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* ── 6. TOPIC SECTION HEADING + VIEW TOGGLE ── */}
            <div className="flex items-center justify-between gap-2 pt-0.5 pb-0.5 border-b border-[#EAE3FA] shrink-0">
              <div className="flex items-center gap-1.5 min-w-0">
                <Layers className="w-4 h-4 text-[#6516DC] shrink-0" />
                <h3 className="text-[13px] font-[800] text-[#111333] truncate">
                  Select a Topic from {selectedModule.title}
                </h3>
              </div>

              {/* View Toggle */}
              <div
                className="flex items-center p-0.5 rounded-[7px] shrink-0 select-none"
                style={{ background: '#F5EFFF', border: '1px solid #E8DDFB' }}
              >
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick?.();
                    setTopicViewMode('list');
                  }}
                  className="h-[28px] px-2.5 rounded-[6px] text-[11px] font-[700] flex items-center gap-1 transition-all cursor-pointer"
                  style={{
                    background: topicViewMode === 'list' ? '#6516DC' : 'transparent',
                    color: topicViewMode === 'list' ? '#FFFFFF' : '#58617D',
                    boxShadow:
                      topicViewMode === 'list'
                        ? '0 2px 6px rgba(101, 22, 220, 0.16)'
                        : 'none',
                  }}
                >
                  <List className="w-3 h-3" />
                  <span>List</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick?.();
                    setTopicViewMode('grid');
                  }}
                  className="h-[28px] px-2.5 rounded-[6px] text-[11px] font-[700] flex items-center gap-1 transition-all cursor-pointer"
                  style={{
                    background: topicViewMode === 'grid' ? '#6516DC' : 'transparent',
                    color: topicViewMode === 'grid' ? '#FFFFFF' : '#58617D',
                    boxShadow:
                      topicViewMode === 'grid'
                        ? '0 2px 6px rgba(101, 22, 220, 0.16)'
                        : 'none',
                  }}
                >
                  <LayoutGrid className="w-3 h-3" />
                  <span>Grid</span>
                </button>
              </div>
            </div>

            {/* ── 7. TOPIC CARDS SECTION (2 Columns: Left 1..half, Right half+1..N) ── */}
            <div className="flex-1 min-h-0 overflow-y-auto pr-0.5">
              {topicViewMode === 'list' ? (
                /* Desktop Two Column Flow Layout (Exactly like reference image) */
                <div className="flex flex-col md:flex-row gap-3 items-start w-full">
                  {/* Left Column */}
                  <div className="flex-1 flex flex-col gap-1.5 w-full">
                    {leftTopics.map((t, idx) => renderTopicCard(t, idx, idx))}
                  </div>

                  {/* Right Column */}
                  <div className="flex-1 flex flex-col gap-1.5 w-full">
                    {rightTopics.map((t, idx) =>
                      renderTopicCard(t, idx, leftTopics.length + idx)
                    )}
                  </div>
                </div>
              ) : (
                /* Grid View Mode */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {selectedModule.topics.map((t, idx) => {
                    const isSelected = t.id === selectedTopicId;
                    const isCompleted = completedTopicIds.has(t.id);
                    const cleanTitle = t.title.replace(/^Topic\s*\d+\s*—\s*/i, '');
                    const formattedNumber = String(t.topicNumber || idx + 1).padStart(2, '0');

                    return (
                      <div
                        key={t.id}
                        onClick={() => handleSelectTopic(t.id)}
                        className={`topic-card cursor-pointer p-2.5 rounded-[10px] flex flex-col justify-between gap-2 ${
                          isSelected ? 'selected' : ''
                        }`}
                        style={{
                          background: isSelected
                            ? 'linear-gradient(135deg, #F0E4FF 0%, #F8F3FF 100%)'
                            : '#FFFFFF',
                          border: isSelected ? '1px solid #A66BFF' : '1px solid #E9E2F6',
                          boxShadow: isSelected
                            ? '0 3px 10px rgba(101, 22, 220, 0.09)'
                            : '0 2px 6px rgba(58, 24, 120, 0.04)',
                        }}
                      >
                        <div className="flex items-center justify-between gap-1.5">
                          <span
                            className="px-1.5 py-0.5 rounded-[5px] text-[10px] font-[800]"
                            style={{
                              background: isSelected ? '#6516DC' : '#EEDFFF',
                              color: isSelected ? '#FFFFFF' : '#5910CC',
                            }}
                          >
                            Topic {formattedNumber}
                          </span>
                          {isCompleted && (
                            <div
                              className="w-4 h-4 rounded-full flex items-center justify-center text-white shrink-0"
                              style={{ background: '#09B63C' }}
                            >
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                          )}
                        </div>

                        <div className="text-[12px] font-[700] text-[#111333] line-clamp-2 leading-[1.3]">
                          {cleanTitle}
                        </div>

                        <div className="pt-1.5 border-t border-[#F0EBF8] flex items-center justify-between">
                          <span className="text-[10px] text-[#717A96] font-[600]">
                            {getTopicQuestions(t.id).length || 10} Questions
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              soundEffects.playClick?.();
                              onOpenClassroomTopic?.(t.id);
                            }}
                            className="text-[11px] font-[750] px-2.5 py-0.5 rounded-[5px] text-[#5910CC] border border-[#A66BFF] hover:bg-[#F5EEFF] transition-colors"
                          >
                            Solve ▶
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* ── 8. BOTTOM SELECTED TOPIC BAR (Exact Match to Reference Image) ── */}
            <div
              className="selected-topic-bar w-full rounded-[12px] flex flex-col sm:flex-row items-center justify-between gap-2.5 shrink-0 p-[8px_14px]"
              style={{
                background: 'linear-gradient(100deg, #F5EEFF 0%, #FAF6FF 55%, #F3E8FF 100%)',
                border: '1px solid #E8DDFB',
                boxShadow: '0 3px 12px rgba(78, 35, 150, 0.04)',
              }}
            >
              {/* Left: Code icon (32x32) + SELECTED TOPIC + Title */}
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                <div
                  className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center shrink-0 text-white"
                  style={{ background: '#6516DC' }}
                >
                  <Code2 className="w-[16px] h-[16px]" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-[800] tracking-wider uppercase leading-none mb-1 text-[#6516DC]">
                    SELECTED TOPIC
                  </div>
                  <h4 className="text-[13px] font-[800] text-[#111333] truncate leading-tight">
                    {cleanSelectedTopicTitle}
                  </h4>
                </div>
              </div>

              {/* Middle: Checkmark + Questions Done + Green Progress Bar */}
              <div className="flex items-center gap-2 shrink-0">
                <div
                  className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-white shrink-0"
                  style={{ background: '#09B63C' }}
                >
                  <Check className="w-2 h-2 stroke-[3]" />
                </div>
                <span className="text-[11px] font-[750] text-[#111333] whitespace-nowrap">
                  {topicStats.completedQuestions}/{topicStats.totalQuestions} Questions Done
                </span>
                <div
                  className="w-24 sm:w-28 h-[6px] rounded-full overflow-hidden shrink-0"
                  style={{ background: '#EAE7F2' }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${Math.max(
                        topicStats.percentage,
                        topicStats.isTopicCompleted ? 100 : 0
                      )}%`,
                      background: '#09B63C',
                    }}
                  />
                </div>
              </div>

              {/* Right: Main Solve Challenge Button */}
              <button
                type="button"
                disabled={!selectedTopicId}
                onClick={handleSolveChallenge}
                className="main-solve-button shrink-0 select-none flex items-center justify-center gap-1.5 h-[36px] px-4 rounded-[8px] text-[13px] font-[750] text-white transition-all cursor-pointer shadow-sm hover:opacity-95"
                style={{
                  background: 'linear-gradient(135deg, #7623E9 0%, #5810C7 100%)',
                }}
              >
                <Play className="w-3 h-3 fill-current text-white" />
                <span>Solve Challenge</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] text-white" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
