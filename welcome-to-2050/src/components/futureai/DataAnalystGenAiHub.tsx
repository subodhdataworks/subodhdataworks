import React, { useState } from 'react';
import {
  CheckCircle2,
  Play,
  Lock,
  ChevronDown,
  ChevronUp,
  Search,
  Bell,
  Crown,
  Sparkles,
  BarChart3,
  Clock,
  ArrowRight,
  ArrowLeft,
  Send,
  Briefcase,
  Flame,
  FileText,
  Target,
  FileSpreadsheet,
  Database,
  GraduationCap,
  X,
  TrendingUp,
  RotateCcw,
  Check,
  Bot
} from 'lucide-react';
import { DATA_ANALYST_CURRICULUM, TabItem } from '../../data/dataAnalystCurriculum';
import { ToolIcon } from './CourseToolIcons';

interface DataAnalystGenAiHubProps {
  userName?: string;
  onBack?: () => void;
  onStartTopic?: (topicId: string, title: string) => void;
}

export const DataAnalystGenAiHub: React.FC<DataAnalystGenAiHubProps> = ({
  userName = 'SUBODH KUMAR',
  onBack,
  onStartTopic,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>('tab-1');
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({
    'ch-1': true,
    'ch-2': false,
    'ch-3': false,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [novaQuestion, setNovaQuestion] = useState('');
  const [novaResponse, setNovaResponse] = useState<string | null>(null);

  const activeTab: TabItem =
    DATA_ANALYST_CURRICULUM.find((t) => t.id === activeTabId) ||
    DATA_ANALYST_CURRICULUM[0];

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  const handleAskNova = (e: React.FormEvent) => {
    e.preventDefault();
    if (!novaQuestion.trim()) return;
    setNovaResponse(
      `NOVA AI: For "${novaQuestion.trim()}", start by reviewing Tab ${activeTab.tabNum} Chapter 1 fundamentals, and try running a test query in the Code Practice Arena!`
    );
    setNovaQuestion('');
  };

  // Helper to render icon for tab
  const renderTabIcon = (iconName: string) => {
    switch (iconName) {
      case 'chart':
        return <BarChart3 className="w-5 h-5 text-blue-600" />;
      case 'excel':
        return <ToolIcon name="excel" className="w-5 h-5 object-contain" />;
      case 'sql':
        return <ToolIcon name="sql" className="w-5 h-5 object-contain" />;
      case 'python':
        return <ToolIcon name="python" className="w-5 h-5 object-contain" />;
      case 'powerbi':
        return <ToolIcon name="power bi" className="w-5 h-5 object-contain" />;
      case 'genai':
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      case 'target':
        return <Target className="w-5 h-5 text-rose-600" />;
      case 'project':
        return <Briefcase className="w-5 h-5 text-teal-600" />;
      default:
        return <BarChart3 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f7fd] text-slate-900 font-sans pb-16">
      
      

      {/* =========================================================================
          MAIN BODY: 2-COLUMN LAYOUT (LEFT CONTENT 73% • RIGHT SIDEBAR 27%)
          ========================================================================= */}
      <main className="max-w-[1520px] mx-auto px-4 sm:px-6 pt-5 space-y-4">
        {onBack && (
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs font-black border border-slate-200/90 shadow-2xs transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Courses</span>
            </button>
          </div>
        )}
        
        {/* =========================================================================
            1. TOP HERO BANNER: 100% FULL WIDTH (No sidebar beside it!)
            ========================================================================= */}
        {/* 1. TOP HERO BANNER: COMPACT & ULTRA-PREMIUM LIGHT THEME */}
        <section className="w-full relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-gradient-to-r from-white via-white/95 to-slate-50 text-slate-900">
          {/* Custom Generated High-Key Light Campus Photo */}
          <img
            src="/images/data_analyst_light_banner.jpg"
            alt=""
            className="absolute right-0 top-0 bottom-0 w-full md:w-[58%] h-full object-cover object-center opacity-45 mix-blend-multiply md:opacity-75 transition-opacity"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/future_it_industries_campus_banner.png';
            }}
          />
          {/* Soft Pearlescent Gradient Fade across the left text zone */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />

          <div className="relative z-10 p-4 sm:p-5 flex flex-col justify-between min-h-[215px]">
            
            {/* Top Row: Eyebrow + Headline + Right Inset Box */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              
              {/* Left Content */}
              <div className="max-w-2xl space-y-2">
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-[10.5px] font-black text-orange-700 tracking-wide uppercase">
                  <Flame className="w-3 h-3 fill-orange-500 text-orange-500" />
                  <span>Most Popular</span>
                </div>

                {/* Headline */}
                <h1 className="text-xl sm:text-2xl lg:text-[27px] font-black tracking-tight text-slate-950 leading-tight">
                  Data Analyst with{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-2xs">
                    GenAI
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed max-w-xl">
                  Learn Excel, SQL, Python, Power BI and Generative AI to become a job-ready Data Analyst with real-world projects.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5 text-[10.5px] font-bold text-slate-700">
                  <span className="flex items-center gap-1 bg-white/90 border border-slate-200/90 px-2.5 py-0.5 rounded-full shadow-2xs">
                    🔰 Beginner to Advanced
                  </span>
                  <span className="flex items-center gap-1 bg-white/90 border border-slate-200/90 px-2.5 py-0.5 rounded-full shadow-2xs">
                    🛠️ Hands-on Projects
                  </span>
                  <span className="flex items-center gap-1 bg-white/90 border border-slate-200/90 px-2.5 py-0.5 rounded-full shadow-2xs">
                    💬 Interview Preparation
                  </span>
                  <span className="flex items-center gap-1 bg-white/90 border border-slate-200/90 px-2.5 py-0.5 rounded-full shadow-2xs">
                    📜 Industry Certificate
                  </span>
                  <span className="flex items-center gap-1 bg-white/90 border border-slate-200/90 px-2.5 py-0.5 rounded-full shadow-2xs">
                    🤖 AI-Powered Learning
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={() => onStartTopic && onStartTopic('t-1-4', 'Analytics Lifecycle')}
                    className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-black text-xs sm:text-[13px] flex items-center gap-1.5 shadow-sm shadow-blue-500/25 active:scale-95 transition-all cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Resume Learning</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('curriculum-tabs-map');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-800 font-bold text-xs sm:text-[13px] flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                  >
                    <Search className="w-3.5 h-3.5 text-slate-500" />
                    <span>View Course Overview</span>
                  </button>
                </div>
              </div>

              {/* Right Inset: From Learning to a Data Analyst Career */}
              <div className="shrink-0 w-full md:w-52 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/90 p-3 space-y-1.5 shadow-sm">
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-1.5">
                  <div className="flex flex-col">
                    <span className="text-[9.5px] text-slate-400 font-bold uppercase tracking-wider">From Learning</span>
                    <span className="text-[11.5px] font-black text-blue-700 leading-tight">to a Data Analyst Career</span>
                  </div>
                  <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <ul className="space-y-1 text-[10px] font-bold text-slate-700">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Learn Skills</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Build Projects</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Get Certified</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Crack Interviews</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Land Your Dream Job</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom Stats Bar inside Hero */}
            <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs font-black text-slate-700">
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center font-black text-[11px]">24</span>
                <span>Chapters</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center font-black text-[11px]">120</span>
                <span>Topics</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-lg bg-purple-50 text-purple-700 border border-purple-200 flex items-center justify-center font-black text-[11px]">8</span>
                <span>Projects</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-lg bg-teal-50 text-teal-700 border border-teal-200 flex items-center justify-center font-black text-[11px]">📜</span>
                <span>Certificate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-black text-[11px]">🎯</span>
                <span>Job Ready Skills</span>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            2. LOWER SECTION: 2-COLUMN LAYOUT (LEFT: 8 TABS + CURRICULUM • RIGHT: SIDEBAR)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* ─────────────────────────────────────────────────────────────────────
              LEFT COLUMN: 8 TABS + ACTIVE TAB ACCORDION (Cols 1-8 / 1-9)
              ───────────────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-4">

            {/* 2. THE 8 HORIZONTAL TABS (Exact 1:1 Match with Screenshot) */}
            <div id="curriculum-tabs-map" className="overflow-x-auto scrollbar-none pb-1">
              <div className="flex items-stretch gap-2.5 min-w-max">
                {DATA_ANALYST_CURRICULUM.map((tab) => {
                  const isActive = tab.id === activeTabId;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTabId(tab.id)}
                      className={`p-3 rounded-2xl flex items-center gap-3 text-left transition-all border cursor-pointer ${
                        isActive
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25 scale-[1.02]'
                          : 'bg-white text-slate-800 border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 shadow-2xs'
                      }`}
                    >
                      {/* Tool/Subject Icon Tile */}
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          isActive
                            ? 'bg-white text-blue-600 shadow-xs'
                            : 'bg-slate-100/90'
                        }`}
                      >
                        {renderTabIcon(tab.iconName)}
                      </div>

                      {/* Title & Chapter Subtitle */}
                      <div className="flex flex-col min-w-0 pr-1">
                        <span className={`text-[12px] font-black truncate leading-tight ${isActive ? 'text-white' : 'text-slate-950'}`}>
                          {tab.tabNum} {tab.shortTitle}
                        </span>
                        <span className={`text-[10px] font-medium leading-none mt-1 ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                          3 Chapters • 15 Topics
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>


            {/* 3. ACTIVE TAB MAIN ACCORDION CONTAINER */}
            <section className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4">
              
              {/* Tab Header Banner */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black text-base flex items-center justify-center shrink-0 shadow-sm">
                    {activeTab.tabNum}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                    {renderTabIcon(activeTab.iconName)}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h2 className="text-base sm:text-lg font-black text-slate-950">
                        Tab {activeTab.tabNum}: {activeTab.title}
                      </h2>
                      {activeTab.isFree && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-black tracking-wide uppercase bg-emerald-100 text-emerald-800 border border-emerald-300">
                          FREE
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {activeTab.subtitle}
                    </p>
                  </div>
                </div>

                {/* Tab Progress */}
                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <div className="flex flex-col items-end text-right">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Tab Progress</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="w-28 h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: activeTab.tabNum === 1 ? '47%' : '0%' }} />
                      </div>
                      <span className="text-xs font-black text-slate-800">
                        {activeTab.tabNum === 1 ? '7 / 15 completed' : '0 / 15 completed'}
                      </span>
                      <span className="text-xs font-black text-emerald-600">
                        {activeTab.tabNum === 1 ? '47%' : '0%'}
                      </span>
                    </div>
                  </div>
                  <ChevronUp className="w-5 h-5 text-slate-400" />
                </div>
              </div>

              {/* Chapters List (3 Chapters) */}
              <div className="space-y-3 pt-1">
                {activeTab.chapters.map((chapter) => {
                  const isExpanded = expandedChapters[chapter.id] ?? false;
                  const isCh1 = chapter.id === 'ch-1';

                  return (
                    <div
                      key={chapter.id}
                      className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50 transition-all shadow-2xs"
                    >
                      {/* Chapter Accordion Header */}
                      <button
                        type="button"
                        onClick={() => toggleChapter(chapter.id)}
                        className="w-full p-4 sm:p-4.5 flex items-center justify-between gap-4 text-left hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {/* Circle Number */}
                          <div className={`w-8 h-8 rounded-full font-black text-xs flex items-center justify-center shrink-0 ${
                            isCh1 ? 'bg-blue-600 text-white' : 'bg-purple-600 text-white'
                          }`}>
                            {chapter.chapterNum}
                          </div>

                          {/* Doc/Code Icon */}
                          <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                            <FileText className="w-4 h-4" />
                          </div>

                          {/* Title & Description */}
                          <div className="flex flex-col min-w-0">
                            <h3 className="text-xs sm:text-sm font-black text-slate-900 truncate">
                              {chapter.title}
                            </h3>
                            <p className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
                              {chapter.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Chapter Stats & Chevron */}
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-[11px] font-bold text-slate-500 hidden sm:inline">
                            5 Topics
                          </span>
                          <div className="w-20 h-1.5 rounded-full bg-slate-200 overflow-hidden hidden sm:block">
                            <div
                              className="h-full bg-emerald-500 rounded-full"
                              style={{ width: isCh1 ? '60%' : '0%' }}
                            />
                          </div>
                          <span className="text-[11px] font-black text-slate-700 hidden sm:inline">
                            {isCh1 ? '3 / 5 completed' : '0 / 5 completed'}
                          </span>
                          <span className="text-xs font-black text-emerald-600">
                            {isCh1 ? '60%' : '0%'}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-slate-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                          )}
                        </div>
                      </button>

                      {/* Topic List (Shown if expanded) */}
                      {isExpanded && (
                        <div className="divide-y divide-slate-100 border-t border-slate-200 bg-white">
                          {chapter.topics.map((topic) => {
                            const isDone = topic.status === 'completed';
                            const isCurrent = topic.status === 'in-progress';
                            const isLocked = topic.status === 'locked';

                            return (
                              <div
                                key={topic.id}
                                className={`p-3 sm:px-4 flex items-center justify-between gap-3 text-xs transition-colors ${
                                  isCurrent ? 'bg-blue-50/50' : 'hover:bg-slate-50'
                                }`}
                              >
                                {/* Left: Number + Check/Play/Lock + Title */}
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <span className="text-[11px] font-bold text-slate-400 w-6">
                                    {topic.topicNum}
                                  </span>

                                  {isDone && (
                                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                                      <Check className="w-3 h-3 stroke-[3]" />
                                    </div>
                                  )}
                                  {isCurrent && (
                                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                                      <Play className="w-2.5 h-2.5 fill-white" />
                                    </div>
                                  )}
                                  {isLocked && (
                                    <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center shrink-0">
                                      <Lock className="w-2.5 h-2.5" />
                                    </div>
                                  )}

                                  <span className={`font-bold truncate ${
                                    isCurrent ? 'text-blue-900 font-extrabold' : 'text-slate-800'
                                  }`}>
                                    {topic.title}
                                  </span>
                                </div>

                                {/* Right: Duration + Status Pill + Action Button */}
                                <div className="flex items-center gap-2.5 shrink-0">
                                  <span className="text-[11px] font-medium text-slate-400 hidden sm:inline">
                                    {topic.duration}
                                  </span>

                                  {/* Status Pill */}
                                  {isDone && (
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                      Completed
                                    </span>
                                  )}
                                  {isCurrent && (
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                                      In Progress
                                    </span>
                                  )}
                                  {isLocked && (
                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-400 border border-slate-200">
                                      Locked
                                    </span>
                                  )}

                                  {/* Action Button */}
                                  {isDone && (
                                    <button
                                      type="button"
                                      onClick={() => onStartTopic && onStartTopic(topic.id, topic.title)}
                                      className="px-3 py-1 rounded-lg text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors cursor-pointer"
                                    >
                                      Watch Again
                                    </button>
                                  )}
                                  {isCurrent && (
                                    <button
                                      type="button"
                                      onClick={() => onStartTopic && onStartTopic(topic.id, topic.title)}
                                      className="px-4 py-1 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xs transition-colors cursor-pointer"
                                    >
                                      Continue
                                    </button>
                                  )}
                                  {isLocked && (
                                    <button
                                      type="button"
                                      disabled
                                      className="px-3 py-1 rounded-lg text-xs font-bold text-slate-400 bg-slate-100 border border-slate-200 cursor-not-allowed"
                                    >
                                      Locked
                                    </button>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </section>

          </div>


          {/* ─────────────────────────────────────────────────────────────────────
              RIGHT COLUMN: SIDEBAR WIDGETS (Cols 9-12 / 10-12)
              ───────────────────────────────────────────────────────────────────── */}
          <aside className="lg:col-span-4 xl:col-span-3 space-y-4">
            
            {/* 1. YOUR PROGRESS CARD */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-sm text-slate-900">Your Progress</h3>
                <span className="text-[11px] font-bold text-blue-600 hover:underline cursor-pointer">
                  View Details →
                </span>
              </div>

              {/* Circular Gauge Meter */}
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                  <svg className="w-16 h-16 -rotate-90">
                    <circle cx="32" cy="32" r="26" stroke="#f1f5f9" strokeWidth="6" fill="none" />
                    <circle
                      cx="32"
                      cy="32"
                      r="26"
                      stroke="#10b981"
                      strokeWidth="6"
                      strokeDasharray={163.36}
                      strokeDashoffset={163.36 * (1 - 0.25)}
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  <span className="absolute font-black text-sm text-slate-900">25%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black text-slate-900">
                    30 / 120 Lessons Completed
                  </span>
                  <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden mt-1.5">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '25%' }} />
                  </div>
                </div>
              </div>

              {/* 4-Grid Stat Boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2 pt-1">
                <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center font-black text-xs shrink-0">
                    8
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-extrabold text-slate-900 leading-tight">Projects</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-100 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center font-black text-xs shrink-0">
                    26
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-extrabold text-slate-900 leading-tight">Quizzes</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-rose-50/70 border border-rose-100 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-rose-500 text-white flex items-center justify-center font-black text-xs shrink-0">
                    1
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-extrabold text-slate-900 leading-tight">Certificate</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-teal-50/70 border border-teal-100 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center font-black text-xs shrink-0">
                    8
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-extrabold text-slate-900 leading-tight">hrs Spent</span>
                  </div>
                </div>
              </div>
            </div>


            {/* 2. CONTINUE LEARNING CARD */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
              <h3 className="font-black text-sm text-slate-900">Continue Learning</h3>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 p-1 flex items-center justify-center shrink-0">
                  <ToolIcon name="python" className="w-6 h-6 object-contain" />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-xs font-black text-slate-950 truncate">
                    Python as a Calculator
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 truncate">
                    Tab 4 • Chapter 10 • Topic 4
                  </span>
                  <div className="flex items-center gap-2 mt-1.5">
                    <div className="flex-1 h-1.5 rounded-full bg-slate-200 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '50%' }} />
                    </div>
                    <span className="text-[10px] font-bold text-slate-600">50%</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onStartTopic && onStartTopic('t-10-4', 'Python as a Calculator')}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Continue Learning</span>
              </button>
            </div>


            {/* 3. AI TUTOR (NOVA) CARD */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-xs text-slate-900">AI Tutor (NOVA)</span>
                    <span className="px-1.5 py-0.2 rounded text-[9px] font-black uppercase tracking-wider bg-blue-100 text-blue-700">
                      Beta
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400">
                    Get instant answers, explanations, code help and real examples.
                  </span>
                </div>
              </div>

              {novaResponse && (
                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 font-medium">
                  {novaResponse}
                </div>
              )}

              <form onSubmit={handleAskNova} className="relative">
                <input
                  type="text"
                  value={novaQuestion}
                  onChange={(e) => setNovaQuestion(e.target.value)}
                  placeholder="Ask NOVA anything..."
                  className="w-full pl-3 pr-9 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 text-xs text-slate-800 placeholder-slate-400 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                >
                  <Send className="w-3 h-3" />
                </button>
              </form>
            </div>


            {/* 4. LEARNING PATH STEPPER */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-sm text-slate-900">Learning Path</h3>
                <span className="text-[11px] font-bold text-blue-600 hover:underline cursor-pointer">
                  View All →
                </span>
              </div>

              <div className="space-y-3 pt-1">
                {/* Step 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-black text-slate-900 truncate">
                      Python - Complete Basics
                    </span>
                    <span className="text-[10px] text-slate-400">7 / 15 lessons</span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-black text-xs flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-black text-slate-900 truncate">
                      Excel - Start Learning
                    </span>
                    <span className="text-[10px] text-slate-400">0 / 15 lessons</span>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-400 font-black text-xs flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                    <Lock className="w-2.5 h-2.5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-bold text-slate-400 truncate">
                      SQL - Locked
                    </span>
                    <span className="text-[10px] text-slate-400">Complete previous tabs to unlock</span>
                  </div>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </main>

    </div>
  );
};

export default DataAnalystGenAiHub;
