import React, { useState, useMemo } from 'react';
import {
  Home,
  BookOpen,
  CheckCircle2,
  Clock,
  Sparkles,
  Play,
  Bot,
  Code2,
  Award,
  Search,
  Gamepad2,
  FileCheck2,
  ChevronRight,
  Flame,
  Zap,
  TrendingUp,
  HelpCircle,
  Terminal,
  Layers,
  ArrowRight,
  Check,
  Filter
} from 'lucide-react';
import { PythonIcon } from '../common/TechIcons';
import { pythonModulesData, PythonTopic, PythonModule } from '../../data/pythonCourseData';

interface PythonCourseViewProps {
  onNavigateHome: () => void;
  onNavigateTab: (tab: string) => void;
  onOpenAiChat: (prompt?: string) => void;
  onOpenLessonDetail: (topicId: number) => void;
  onOpenAssessment: (assessmentId: number) => void;
  userName?: string;
}

export const PythonCourseView: React.FC<PythonCourseViewProps> = ({
  onNavigateHome,
  onNavigateTab,
  onOpenAiChat,
  onOpenLessonDetail,
  onOpenAssessment,
  userName = 'Subodh'
}) => {
  // Filter Tabs: All, Module 1, Module 2, Module 3, Assessments
  const [activeFilter, setActiveFilter] = useState<'all' | 'mod1' | 'mod2' | 'mod3' | 'assessments'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Course Progress Metrics
  const totalTopicsCount = 20;
  const completedCount = 7;
  const overallPercentage = Math.round((completedCount / totalTopicsCount) * 100); // 35%
  const xpEarned = 2450;
  const currentLevel = 'Level 7 • Data Explorer';
  const learningStreakDays = 5;

  // Flattened all topics
  const allTopics: (PythonTopic & { moduleName: string })[] = useMemo(() => {
    return pythonModulesData.flatMap((mod) =>
      mod.topics.map((t) => ({ ...t, moduleName: mod.title }))
    );
  }, []);

  // Filtered topics
  const filteredModules = useMemo(() => {
    return pythonModulesData
      .map((mod) => {
        let topics = mod.topics;

        // Apply module / assessment filter
        if (activeFilter === 'mod1' && mod.id !== 1) return null;
        if (activeFilter === 'mod2' && mod.id !== 2) return null;
        if (activeFilter === 'mod3' && mod.id !== 3) return null;
        if (activeFilter === 'assessments') {
          topics = topics.filter((t) => t.isAssessment);
        }

        // Apply search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          topics = topics.filter(
            (t) =>
              t.title.toLowerCase().includes(q) ||
              t.subtitle.toLowerCase().includes(q) ||
              t.objectives.some((obj) => obj.toLowerCase().includes(q))
          );
        }

        if (topics.length === 0) return null;

        return {
          ...mod,
          topics
        };
      })
      .filter(Boolean) as PythonModule[];
  }, [activeFilter, searchQuery]);

  // Handler for topic click
  const handleTopicClick = (topic: PythonTopic) => {
    if (topic.isAssessment) {
      onOpenAssessment(topic.id);
    } else {
      onOpenLessonDetail(topic.id);
    }
  };

  // Continue Learning handler (Topic 8 or next uncompleted)
  const handleContinueLearning = () => {
    onOpenLessonDetail(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50 text-slate-800 font-sans pb-24">
      {/* 2. HERO COURSE HEADER WITH PROGRESS BANNER */}
      <section className="bg-white border-b border-slate-200/80 pt-6 pb-8 px-4 sm:px-6 relative overflow-hidden">
        {/* Subtle decorative background gradient */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-bold">
            <button
              onClick={onNavigateHome}
              className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">Curriculum</span>
            <span className="text-slate-300">/</span>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 flex items-center gap-1.5">
              <PythonIcon className="w-3.5 h-3.5" />
              Python Programming
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Left: Titles & Syllabus Info */}
            <div className="space-y-3 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-black border border-blue-200/80">
                  <PythonIcon className="w-4 h-4" />
                  Python Core Curriculum
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  <Check className="w-3 h-3" />
                  All 20 Topics Unlocked
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200">
                  <Award className="w-3 h-3" />
                  4 Skill Assessments
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Python Programming
              </h1>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Master Python from Fundamentals to Advanced Concepts for Data Analytics. Build
                algorithmic fluency, complete interactive code sandboxes, pass proctored mastery
                exams, and practice with real-time AI interviewers.
              </p>
            </div>

            {/* Right: Primary Action Button */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={handleContinueLearning}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-black text-sm sm:text-base shadow-xl shadow-blue-600/25 flex items-center justify-center gap-3 cursor-pointer transition-all active:scale-95 group"
              >
                <span>Continue Learning →</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={() => onOpenAssessment(8)}
                className="px-6 py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-2xs"
              >
                <FileCheck2 className="w-4 h-4 text-blue-600" />
                <span>Jump to Assessment 1 (40 MCQs)</span>
              </button>
            </div>
          </div>

          {/* COURSE PROGRESS STATS BAR (REQUIRED METRICS) */}
          <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* 1. Overall Progress */}
            <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-slate-500 font-bold mb-2">
                <span>Overall Progress</span>
                <span className="text-blue-600 font-black text-sm">{overallPercentage}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500"
                  style={{ width: `${overallPercentage}%` }}
                />
              </div>
            </div>

            {/* 2. Lessons Completed */}
            <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
              <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">
                Lessons Completed
              </span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-xl font-black text-slate-900">{completedCount}</span>
                <span className="text-xs text-slate-400 font-bold">/ {totalTopicsCount} Topics</span>
              </div>
            </div>

            {/* 3. XP Earned */}
            <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
              <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">
                XP Earned
              </span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <Zap className="w-4 h-4 text-amber-500 fill-amber-500 self-center" />
                <span className="text-xl font-black text-slate-900">{xpEarned.toLocaleString()}</span>
                <span className="text-xs text-amber-600 font-bold">XP</span>
              </div>
            </div>

            {/* 4. Current Level */}
            <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
              <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">
                Current Level
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <Award className="w-4 h-4 text-indigo-600 shrink-0" />
                <span className="text-sm font-black text-slate-900 truncate">{currentLevel}</span>
              </div>
            </div>

            {/* 5. Learning Streak */}
            <div className="col-span-2 sm:col-span-1 bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
              <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">
                Learning Streak
              </span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <Flame className="w-4 h-4 text-rose-500 fill-rose-500 self-center" />
                <span className="text-xl font-black text-slate-900">{learningStreakDays}</span>
                <span className="text-xs text-rose-600 font-bold">Days in a row</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MODULE FILTER TABS & SEARCH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6">
          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none text-xs font-bold">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              All Topics ({totalTopicsCount})
            </button>
            <button
              onClick={() => setActiveFilter('mod1')}
              className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'mod1'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              Module 1: Fundamentals (8)
            </button>
            <button
              onClick={() => setActiveFilter('mod2')}
              className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'mod2'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              Module 2: Control Flow (5)
            </button>
            <button
              onClick={() => setActiveFilter('mod3')}
              className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'mod3'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              Module 3: Advanced (7)
            </button>
            <button
              onClick={() => setActiveFilter('assessments')}
              className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeFilter === 'assessments'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white hover:bg-slate-100 text-indigo-700 border border-indigo-200'
              }`}
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Assessments (4)</span>
            </button>
          </div>

          {/* Search bar on mobile */}
          <div className="relative md:hidden w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Python topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* 4. MODULES CONTAINER */}
        <div className="space-y-10">
          {filteredModules.map((module) => (
            <div key={module.id} className="space-y-4">
              {/* Module Header Card */}
              <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-lg relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-black uppercase tracking-wider text-blue-300">
                      Module {module.id}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {module.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-2xl">
                      {module.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs font-bold text-blue-200">
                      {module.topics.length} Topics
                    </div>
                    <div className="px-3.5 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" />
                      <span>Unlocked</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Topics Grid for this Module */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {module.topics.map((topic) => {
                  const isAssessment = topic.isAssessment;
                  const isCompleted = topic.id <= 7;

                  return (
                    <div
                      key={topic.id}
                      data-testid={`topic-card-${topic.id}`}
                      onClick={() => handleTopicClick(topic)}
                      className={`group rounded-3xl p-5 sm:p-6 transition-all cursor-pointer relative border-2 flex flex-col justify-between ${
                        isAssessment
                          ? 'bg-gradient-to-br from-indigo-50/60 via-purple-50/40 to-white border-indigo-200/90 hover:border-indigo-400 hover:shadow-lg shadow-indigo-100/50'
                          : 'bg-white border-slate-200/90 hover:border-blue-400 hover:shadow-lg shadow-[0_4px_20px_rgba(0,0,0,0.02)]'
                      }`}
                    >
                      {/* Top Topic Details */}
                      <div>
                        {/* Meta badge row */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black ${
                                isAssessment
                                  ? 'bg-indigo-600 text-white'
                                  : 'bg-blue-50 text-blue-700 border border-blue-200'
                              }`}
                            >
                              {topic.id.toString().padStart(2, '0')}
                            </span>
                            {isAssessment ? (
                              <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-900 text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                                <Award className="w-3 h-3 text-indigo-700" />
                                Capstone Assessment
                              </span>
                            ) : (
                              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold">
                                {topic.duration}
                              </span>
                            )}
                          </div>

                          {/* Completion / Status Badge - ALL UNLOCKED! */}
                          {isCompleted ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-black">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              Completed
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[11px] font-bold">
                              Unlocked
                            </span>
                          )}
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                          {topic.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4">
                          {topic.subtitle}
                        </p>

                        {/* 6-Step Flow Tags or Assessment Highlights */}
                        {!isAssessment ? (
                          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1 mb-4 text-[10px] font-bold text-slate-600">
                            <span className="p-1 rounded-md bg-slate-50 border border-slate-100 text-center truncate">
                              🎬 Video
                            </span>
                            <span className="p-1 rounded-md bg-slate-50 border border-slate-100 text-center truncate">
                              ❓ 5 MCQs
                            </span>
                            <span className="p-1 rounded-md bg-slate-50 border border-slate-100 text-center truncate">
                              🎮 Game
                            </span>
                            <span className="p-1 rounded-md bg-slate-50 border border-slate-100 text-center truncate">
                              💻 5 Codes
                            </span>
                            <span className="p-1 rounded-md bg-slate-50 border border-slate-100 text-center truncate">
                              🎙️ AI Interview
                            </span>
                            <span className="p-1 rounded-md bg-slate-50 border border-slate-100 text-center truncate">
                              🏆 Score
                            </span>
                          </div>
                        ) : (
                          <div className="p-3 rounded-2xl bg-indigo-50/50 border border-indigo-100 mb-4 text-xs space-y-1.5 text-indigo-950 font-medium">
                            <div className="flex items-center justify-between font-bold">
                              <span className="flex items-center gap-1.5">
                                <FileCheck2 className="w-3.5 h-3.5 text-indigo-600" />
                                40 Multiple-Choice Questions
                              </span>
                              <span className="text-indigo-700">⏱️ 45 Minutes</span>
                            </div>
                            <div className="flex items-center justify-between text-[11px] text-indigo-700">
                              <span>Passing: 28/40 (70%)</span>
                              <span className="font-bold">+400 XP Award</span>
                            </div>
                          </div>
                        )}

                        {/* Objectives preview bullet tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {topic.objectives.slice(0, 3).map((obj, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-medium"
                            >
                              • {obj}
                            </span>
                          ))}
                          {topic.objectives.length > 3 && (
                            <span className="px-1.5 py-0.5 rounded-lg bg-slate-50 text-slate-400 text-[10px] font-bold">
                              +{topic.objectives.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Bottom Button Action */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-extrabold text-blue-600 group-hover:text-blue-700 flex items-center gap-1">
                          {isAssessment ? 'Launch Assessment Exam' : 'Start Interactive Lesson'}
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>

                        <span className="text-[11px] font-bold text-slate-400">
                          {isAssessment ? 'Proctored Quiz' : '6 Interactive Steps'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* 5. AI MENTOR STUDY ASSISTANT FOOTER CALLOUT */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
              <Bot className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                Need help deciding where to start, {userName}?
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Your AI Mentor can diagnose your skills, explain tricky syntax, or generate custom
                coding practice problems anytime.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenAiChat('Help me plan my Python study session for today!')}
            className="w-full md:w-auto px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all active:scale-95 shrink-0"
          >
            <Bot className="w-4 h-4 text-blue-400" />
            <span>Chat with AI Mentor</span>
          </button>
        </div>
      </section>
    </div>
  );
};
