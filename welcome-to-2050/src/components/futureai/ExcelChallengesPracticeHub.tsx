import React, { useState, useMemo, useEffect } from 'react';
import { ExcelChallengeArena } from './ExcelChallengeArena';
import {
  ALL_EXCEL_TOPICS,
  ExcelTopicDefinition,
  ExcelChallengeTask
} from './data/excelCodingChallengesBank';
import { soundEffects } from '../../services/soundEffects';
import {
  Home,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Star,
  ArrowRight,
  Info,
  Check,
  Target,
  Settings,
  BarChart2,
  Search,
  BookOpen,
  Award,
  Layers,
  Sparkles,
  Play,
  Table,
  CheckCircle2,
  FileSpreadsheet,
  Lock,
  Unlock,
  X
} from 'lucide-react';

export interface ExcelChallengesPracticeHubProps {
  userName?: string;
  isEnrolled?: boolean;
  onNavigateToCourses?: () => void;
  onUnlockAll?: () => void;
  onBackToPractice?: () => void;
  onBackToDashboard?: () => void;
  onSolveChallenge?: (challengeId: number, title: string) => void;
}

// Microsoft Excel 3D Icon SVG
const Excel3DIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 shrink-0" fill="none">
    <rect x="6" y="8" width="36" height="32" rx="8" fill="#107c41" />
    <path d="M6 24H42V34C42 37.3 39.3 40 36 40H12C8.7 40 6 37.3 6 34V24Z" fill="#0b5e28" />
    <line x1="20" y1="8" x2="20" y2="40" stroke="#a7f3d0" strokeWidth="1.5" strokeOpacity="0.5" />
    <line x1="6" y1="24" x2="42" y2="24" stroke="#a7f3d0" strokeWidth="1.5" strokeOpacity="0.5" />
    <rect x="8" y="11" width="16" height="16" rx="4" fill="#047857" />
    <path d="M12 15L20 23M20 15L12 23" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const ExcelChallengesPracticeHub: React.FC<ExcelChallengesPracticeHubProps> = ({
  userName = 'Rahul',
  isEnrolled,
  onNavigateToCourses,
  onUnlockAll,
  onBackToPractice,
  onBackToDashboard,
  onSolveChallenge
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'basic' | 'intermediate' | 'advanced' | 'popular'>('all');
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<number>>(new Set());
  const [activeChallengeArenaTopic, setActiveChallengeArenaTopic] = useState<{ topicId: number; initialTaskId?: number } | null>(null);
  const [lockedModalTopic, setLockedModalTopic] = useState<{ title: string; count: number } | null>(null);

  const [internalEnrolled, setInternalEnrolled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('futureai_course_enrolled');
      if (saved === 'true') return true;
    }
    return isEnrolled || false;
  });

  useEffect(() => {
    if (isEnrolled !== undefined) {
      setInternalEnrolled(isEnrolled);
    }
  }, [isEnrolled]);

  // Selected question per card
  const [selectedTaskPerTopic, setSelectedTaskPerTopic] = useState<Record<number, number>>({});

  // Collapsible accordion states
  const [statusOpen, setStatusOpen] = useState<boolean>(true);
  const [skillsOpen, setSkillsOpen] = useState<boolean>(true);
  const [difficultyOpen, setDifficultyOpen] = useState<boolean>(true);
  const [engineOpen, setEngineOpen] = useState<boolean>(true);

  // Filter checkbox states
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedEngine, setSelectedEngine] = useState<string>('Excel 365 (Modern Formulas)');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleBookmark = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    soundEffects.playWaterDrop();
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleStatusToggle = (val: string) => {
    soundEffects.playClick();
    setSelectedStatus((prev) =>
      prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]
    );
  };

  const handleSkillToggle = (val: string) => {
    soundEffects.playClick();
    setSelectedSkills((prev) =>
      prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]
    );
  };

  const handleDifficultyToggle = (val: string) => {
    soundEffects.playClick();
    setSelectedDifficulties((prev) =>
      prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]
    );
  };

  // Filter topics based on tab, search, & sidebar
  const filteredTopics = useMemo(() => {
    return ALL_EXCEL_TOPICS.filter((item) => {
      // Tab filter
      if (activeTab === 'all' && !item.tabs.includes('all')) return false;
      if (activeTab === 'basic' && !item.tabs.includes('basic')) return false;
      if (activeTab === 'intermediate' && !item.tabs.includes('intermediate')) return false;
      if (activeTab === 'advanced' && !item.tabs.includes('advanced')) return false;
      if (activeTab === 'popular' && !item.tabs.includes('popular')) return false;

      // Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesSkill = item.skillTag.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesSkill) return false;
      }

      // Difficulty filter
      if (selectedDifficulties.length > 0 && !selectedDifficulties.includes(item.difficulty)) {
        return false;
      }

      // Skill filter
      if (selectedSkills.length > 0 && !selectedSkills.includes(item.skillTag)) {
        return false;
      }

      return true;
    });
  }, [activeTab, searchQuery, selectedDifficulties, selectedSkills]);

  // Counts for sidebar filters
  const currentTabPool = useMemo(() => {
    return ALL_EXCEL_TOPICS.filter((item) => {
      if (activeTab === 'all') return item.tabs.includes('all');
      return item.tabs.includes(activeTab);
    });
  }, [activeTab]);

  const easyCount = currentTabPool.filter((c) => c.difficulty === 'Easy').length;
  const mediumCount = currentTabPool.filter((c) => c.difficulty === 'Medium').length;
  const hardCount = currentTabPool.filter((c) => c.difficulty === 'Hard').length;

  const distinctSkills = useMemo(() => {
    const map = new Map<string, number>();
    currentTabPool.forEach((t) => {
      map.set(t.skillTag, (map.get(t.skillTag) || 0) + 1);
    });
    return Array.from(map.entries()).map(([name, count]) => ({ name, count }));
  }, [currentTabPool]);

  // Student Outcome messages per tab
  const tabOutcomeMessage = useMemo(() => {
    if (activeTab === 'basic') {
      return 'Student outcome: Student basic data enter, formulas use aur simple reports create kar sake.';
    }
    if (activeTab === 'intermediate') {
      return 'Student outcome: Student data clean kare, multiple conditions apply kare, lookups kare aur summary reports banaye.';
    }
    if (activeTab === 'advanced') {
      return 'Student outcome: Student complex formulas, automated reporting aur interactive dashboards bana sake.';
    }
    return null;
  }, [activeTab]);

  // If Arena is active, show the ExcelChallengeArena
  if (activeChallengeArenaTopic !== null) {
    const selectedTopic = ALL_EXCEL_TOPICS.find((t) => t.id === activeChallengeArenaTopic.topicId);
    return (
      <ExcelChallengeArena
        userName={userName}
        topicId={activeChallengeArenaTopic.topicId}
        topicTitle={selectedTopic?.title}
        categoryName={selectedTopic?.category || 'Excel'}
        tasks={selectedTopic?.tasks}
        initialTaskId={activeChallengeArenaTopic.initialTaskId || 1}
        onBack={() => {
          soundEffects.playClick();
          setActiveChallengeArenaTopic(null);
        }}
        onCompleteAll={() => {
          soundEffects.playSuccess();
          setActiveChallengeArenaTopic(null);
        }}
      />
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      {/* 1. TOP BREADCRUMB NAVIGATION */}
      <div className="w-full bg-white border-b border-slate-200 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button
              onClick={() => {
                soundEffects.playClick();
                if (onBackToDashboard) onBackToDashboard();
                else window.location.hash = '#dashboard';
              }}
              className="flex items-center gap-1 text-slate-600 hover:text-slate-900 transition cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Dashboard</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button
              onClick={() => {
                soundEffects.playClick();
                if (onBackToPractice) onBackToPractice();
                else window.location.hash = '#practice';
              }}
              className="hover:text-slate-900 transition cursor-pointer"
            >
              Practice
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#107c41] font-bold">Excel Challenges</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              65 Topics • 650 Questions
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-12">
        {/* 2. HERO BANNER */}
        <div className="bg-gradient-to-r from-[#107c41] via-[#0b5e28] to-[#04421b] rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden mb-6">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 flex items-center justify-center pointer-events-none">
            <Excel3DIcon />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-emerald-100 text-xs font-bold mb-3 border border-white/20">
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-300" />
              <span>Microsoft Excel & Modern Formulas Coding Practice</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
              Excel Practice Hub — From Fundamentals to Dashboards
            </h1>
            <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed mb-4">
              Master formulas, lookups, dynamic arrays, tables, and reporting. Solve 10 progressive coding questions per topic with authentic formula execution.
            </p>

            {/* Quick search input */}
            <div className="relative max-w-md">
              <Search className="w-4 h-4 text-emerald-200 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics (e.g. VLOOKUP, SUMIFS, XLOOKUP)..."
                className="w-full bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/20 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-emerald-200/70 outline-none backdrop-blur-sm transition"
              />
            </div>
          </div>
        </div>

        {/* 3. FIVE TOP TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none border-b border-slate-200">
          {[
            { id: 'all', label: 'All Challenges', count: 25 },
            { id: 'basic', label: 'Basic', count: 10 },
            { id: 'intermediate', label: 'Intermediate', count: 10 },
            { id: 'advanced', label: 'Advanced', count: 10 },
            { id: 'popular', label: 'Popular Challenges', count: 10 }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                soundEffects.playClick();
                setActiveTab(tab.id as any);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#107c41] text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${
                activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Student Outcome Banner (if applicable) */}
        {tabOutcomeMessage && (
          <div className="mb-6 p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-2.5 text-xs text-emerald-900 font-semibold shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-[#107c41] shrink-0" />
            <span>{tabOutcomeMessage}</span>
          </div>
        )}

        {/* 4. MAIN TWO-COLUMN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT: Topics Grid (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {filteredTopics.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                <FileSpreadsheet className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="font-bold text-slate-800 text-base">No challenges match your criteria</h3>
                <p className="text-xs text-slate-500 mt-1">Try clearing search or difficulty filters.</p>
              </div>
            ) : (
              filteredTopics.map((topic, index) => {
                const selectedTaskId = selectedTaskPerTopic[topic.id] || 1;
                const isBookmarked = bookmarkedIds.has(topic.id);
                const isLocked = !internalEnrolled && topic.id !== 1 && topic.id !== 201;

                return (
                  <div
                    key={topic.id}
                    className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 transition-all shadow-xs hover:shadow-md p-5 text-left relative overflow-hidden group"
                  >
                    {/* Top Row: Category Pill, Difficulty & Bookmark */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {topic.id === 1 || topic.id === 201 ? (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            Free Topic
                          </span>
                        ) : isLocked ? (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1">
                            <Lock className="w-3 h-3 text-amber-600" />
                            Locked
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                            <Unlock className="w-3 h-3 text-emerald-600" />
                            Unlocked
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700">
                          {topic.category}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                          topic.difficulty === 'Easy' ? 'bg-[#dcfce7] text-[#15803d]' :
                          topic.difficulty === 'Medium' ? 'bg-[#fef9c3] text-[#854d0e]' :
                          'bg-[#fee2e2] text-[#b91c1c]'
                        }`}>
                          {topic.difficulty}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400">
                          10 Challenges • Max Score: 5
                        </span>
                      </div>

                      <button
                        onClick={(e) => toggleBookmark(topic.id, e)}
                        className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-amber-500 transition"
                        title={isBookmarked ? 'Remove Bookmark' : 'Bookmark'}
                      >
                        <Star className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400 text-amber-500' : ''}`} />
                      </button>
                    </div>

                    {/* Title */}
                    <h2 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#107c41] transition">
                      {topic.title}
                    </h2>

                    {/* DROPDOWN OUTSIDE UNDER THE TITLE */}
                    <div className="mt-2.5 mb-3">
                      <div className="relative inline-block w-full sm:w-auto">
                        <select
                          value={selectedTaskId}
                          onChange={(e) => {
                            if (isLocked) {
                              soundEffects.playLock();
                              setLockedModalTopic({ title: topic.title, count: topic.tasks?.length || 10 });
                              return;
                            }
                            const val = parseInt(e.target.value, 10);
                            setSelectedTaskPerTopic((prev) => ({
                              ...prev,
                              [topic.id]: val
                            }));
                          }}
                          className="w-full sm:w-80 appearance-none bg-emerald-50/70 hover:bg-emerald-100/60 border border-emerald-300/80 text-emerald-950 font-bold text-xs rounded-xl px-3.5 py-2 pr-8 outline-none focus:ring-2 focus:ring-[#107c41]/30 cursor-pointer transition shadow-2xs"
                        >
                          {topic.tasks.map((tsk) => (
                            <option key={tsk.taskNumber} value={tsk.taskNumber} className="bg-white text-slate-800 font-medium">
                              Q{tsk.taskNumber}: {tsk.title} ({tsk.concept})
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-emerald-700 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {topic.description}
                    </p>

                    {/* Footer Row: Skill Tag & Solve Challenge Button */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-mono">
                          {topic.skillTag}
                        </span>
                        <span>•</span>
                        <span className="text-emerald-700 font-bold">10 Progressive Tasks</span>
                      </div>

                      {isLocked ? (
                        <button
                          type="button"
                          onClick={() => {
                            soundEffects.playLock();
                            setLockedModalTopic({ title: topic.title, count: topic.tasks?.length || 10 });
                          }}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 active:scale-95 font-bold text-xs shadow-2xs transition-all cursor-pointer whitespace-nowrap"
                        >
                          <Lock className="w-3.5 h-3.5 text-amber-600" />
                          <span>Unlock Topic</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            soundEffects.playClick();
                            setActiveChallengeArenaTopic({
                              topicId: topic.id,
                              initialTaskId: selectedTaskId
                            });
                          }}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#107c41] hover:bg-[#0b5e28] text-white font-bold text-xs shadow-xs hover:shadow transition cursor-pointer"
                        >
                          <span>Solve Challenge</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* RIGHT: Filter Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-4 sticky top-16">
            {/* Filter 1: Status */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
              <button
                type="button"
                onClick={() => setStatusOpen(!statusOpen)}
                className="w-full flex items-center justify-between text-xs font-bold text-slate-900 cursor-pointer"
              >
                <span>STATUS</span>
                {statusOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>

              {statusOpen && (
                <div className="mt-3 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  <label className="flex items-center justify-between cursor-pointer hover:text-slate-900">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedStatus.includes('Solved')}
                        onChange={() => handleStatusToggle('Solved')}
                        className="rounded border-slate-300 text-[#107c41] focus:ring-[#107c41] cursor-pointer"
                      />
                      <span>Solved</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">0</span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer hover:text-slate-900">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedStatus.includes('Unsolved')}
                        onChange={() => handleStatusToggle('Unsolved')}
                        className="rounded border-slate-300 text-[#107c41] focus:ring-[#107c41] cursor-pointer"
                      />
                      <span>Unsolved</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">{currentTabPool.length}</span>
                  </label>
                </div>
              )}
            </div>

            {/* Filter 2: Difficulty */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
              <button
                type="button"
                onClick={() => setDifficultyOpen(!difficultyOpen)}
                className="w-full flex items-center justify-between text-xs font-bold text-slate-900 cursor-pointer"
              >
                <span>DIFFICULTY</span>
                {difficultyOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>

              {difficultyOpen && (
                <div className="mt-3 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  {[
                    { name: 'Easy', count: easyCount },
                    { name: 'Medium', count: mediumCount },
                    { name: 'Hard', count: hardCount }
                  ].map((d) => (
                    <label key={d.name} className="flex items-center justify-between cursor-pointer hover:text-slate-900">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedDifficulties.includes(d.name)}
                          onChange={() => handleDifficultyToggle(d.name)}
                          className="rounded border-slate-300 text-[#107c41] focus:ring-[#107c41] cursor-pointer"
                        />
                        <span>{d.name}</span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">{d.count}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Filter 3: Skills */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
              <button
                type="button"
                onClick={() => setSkillsOpen(!skillsOpen)}
                className="w-full flex items-center justify-between text-xs font-bold text-slate-900 cursor-pointer"
              >
                <span>SKILLS</span>
                {skillsOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>

              {skillsOpen && (
                <div className="mt-3 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3 max-h-52 overflow-y-auto">
                  {distinctSkills.map((s) => (
                    <label key={s.name} className="flex items-center justify-between cursor-pointer hover:text-slate-900">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedSkills.includes(s.name)}
                          onChange={() => handleSkillToggle(s.name)}
                          className="rounded border-slate-300 text-[#107c41] focus:ring-[#107c41] cursor-pointer"
                        />
                        <span className="truncate max-w-[170px]">{s.name}</span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">{s.count}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Filter 4: Engine / Version */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
              <button
                type="button"
                onClick={() => setEngineOpen(!engineOpen)}
                className="w-full flex items-center justify-between text-xs font-bold text-slate-900 cursor-pointer"
              >
                <span>EXCEL VERSION / ENGINE</span>
                {engineOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>

              {engineOpen && (
                <div className="mt-3 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  {[
                    'Excel 365 (Modern Formulas)',
                    'Excel 2021',
                    'Google Sheets Compatible'
                  ].map((engine) => (
                    <label key={engine} className="flex items-center gap-2 cursor-pointer hover:text-slate-900">
                      <input
                        type="radio"
                        name="excelEngine"
                        checked={selectedEngine === engine}
                        onChange={() => {
                          soundEffects.playClick();
                          setSelectedEngine(engine);
                        }}
                        className="text-[#107c41] focus:ring-[#107c41] cursor-pointer"
                      />
                      <span>{engine}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Course Enrollment Locked Modal */}
      {lockedModalTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-md w-full p-6 sm:p-7 shadow-2xl relative text-left">
            {/* Close button */}
            <button
              onClick={() => {
                soundEffects.playClick();
                setLockedModalTopic(null);
              }}
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lock Badge & Icon */}
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-4 shadow-xs">
              <Lock className="w-7 h-7" />
            </div>

            {/* Topic pill */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mb-2">
              <span>Excel • {lockedModalTopic.title}</span>
            </div>

            <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">
              Enroll in Any 1 Course to Unlock
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              <strong>{lockedModalTopic.title}</strong> aur aage ke sabhi topics unlock karne ke liye kisi bhi <strong>1 Course</strong> me enroll karein. Kisi ek me enroll hone ke baad tabhi ye open hoga!
            </p>

            {/* Benefits List */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3.5 space-y-2 mb-5 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>All 25 Excel practical challenge topics unlock</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Python, SQL &amp; Full Stack live coding access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Live grid simulator, formula validation &amp; instant results</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setLockedModalTopic(null);
                  if (onNavigateToCourses) {
                    onNavigateToCourses();
                  } else {
                    window.location.hash = '#courses';
                  }
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-xs sm:text-sm shadow-md shadow-blue-500/20 active:scale-98 transition cursor-pointer"
              >
                <span>Explore &amp; Enroll in Courses →</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundEffects.playCelebration();
                  setInternalEnrolled(true);
                  if (typeof window !== 'undefined') {
                    localStorage.setItem('futureai_course_enrolled', 'true');
                  }
                  if (onUnlockAll) onUnlockAll();
                  setLockedModalTopic(null);
                }}
                className="w-full py-2 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-xs transition cursor-pointer text-center"
              >
                Simulate Course Enrollment (Unlock Demo)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
