import React, { useState, useMemo, useEffect } from 'react';
import { soundEffects } from '../../services/soundEffects';
import { PythonTopic1ChallengeArena } from './PythonTopic1ChallengeArena';
import {
  ALL_PYTHON_TOPICS,
  PythonTopicDefinition,
  ChallengeTask
} from './data/pythonCodingChallengesBank';
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
  Code2,
  Search,
  BookOpen,
  Award,
  Layers,
  Sparkles,
  Play,
  Lock,
  Unlock,
  CheckCircle2,
  X
} from 'lucide-react';

export interface PythonChallengesPracticeHubProps {
  userName?: string;
  isEnrolled?: boolean;
  onNavigateToCourses?: () => void;
  onUnlockAll?: () => void;
  onBackToPractice?: () => void;
  onBackToDashboard?: () => void;
  onSolveChallenge?: (challengeId: number, title: string) => void;
}

export const PythonChallengesPracticeHub: React.FC<PythonChallengesPracticeHubProps> = ({
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

  // Sync arena state with URL hash so Google Chrome's native back button exits arena
  useEffect(() => {
    const handleHash = () => {
      const h = window.location.hash;
      if (h.includes('#python-challenges') && h.includes('arena=')) {
        const params = new URLSearchParams(h.split('?')[1] || '');
        const arenaId = parseInt(params.get('arena') || '1', 10);
        setActiveChallengeArenaTopic((prev) => (prev?.topicId === arenaId ? prev : { topicId: arenaId, initialTaskId: 1 }));
      } else {
        setActiveChallengeArenaTopic(null);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    window.addEventListener('popstate', handleHash);
    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('popstate', handleHash);
    };
  }, []);

  const openArena = (topicId: number, taskId: number = 1) => {
    setActiveChallengeArenaTopic({ topicId, initialTaskId: taskId });
    if (typeof window !== 'undefined') {
      window.location.hash = `#python-challenges?arena=${topicId}`;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [activeTab, activeChallengeArenaTopic]);

  // Collapsible accordion states
  const [statusOpen, setStatusOpen] = useState<boolean>(true);
  const [skillsOpen, setSkillsOpen] = useState<boolean>(true);
  const [difficultyOpen, setDifficultyOpen] = useState<boolean>(true);
  const [languageOpen, setLanguageOpen] = useState<boolean>(true);

  // Filter checkbox states
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [languageChecked, setLanguageChecked] = useState<boolean>(true);

  const toggleBookmark = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleStatusToggle = (val: string) => {
    setSelectedStatus((prev) =>
      prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]
    );
  };

  const handleSkillToggle = (val: string) => {
    setSelectedSkills((prev) =>
      prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]
    );
  };

  const handleDifficultyToggle = (val: string) => {
    setSelectedDifficulties((prev) =>
      prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]
    );
  };

  // Filter challenges based on tab & sidebar checkboxes
  const filteredChallenges = useMemo(() => {
    return ALL_PYTHON_TOPICS.filter((item) => {
      // Tab filter
      if (activeTab === 'all' && !item.tabs.includes('all')) return false;
      if (activeTab === 'basic' && !item.tabs.includes('basic')) return false;
      if (activeTab === 'intermediate' && !item.tabs.includes('intermediate')) return false;
      if (activeTab === 'advanced' && !item.tabs.includes('advanced')) return false;
      if (activeTab === 'popular' && !item.tabs.includes('popular')) return false;

      // Difficulty filter
      if (selectedDifficulties.length > 0 && !selectedDifficulties.includes(item.difficulty)) {
        return false;
      }

      // Skill filter
      if (selectedSkills.length > 0 && !selectedSkills.includes(item.skill)) {
        return false;
      }

      // Status filter
      if (selectedStatus.includes('Solved') && !item.solved) return false;
      if (selectedStatus.includes('Unsolved') && item.solved) return false;

      return true;
    });
  }, [activeTab, selectedDifficulties, selectedSkills, selectedStatus]);

  // Dynamic counts for sidebar filters
  const currentTabPool = useMemo(() => {
    return ALL_PYTHON_TOPICS.filter((item) => {
      if (activeTab === 'all') return item.tabs.includes('all');
      return item.tabs.includes(activeTab);
    });
  }, [activeTab]);

  const easyCount = currentTabPool.filter((c) => c.difficulty === 'Easy').length;
  const mediumCount = currentTabPool.filter((c) => c.difficulty === 'Medium').length;
  const hardCount = currentTabPool.filter((c) => c.difficulty === 'Hard').length;

  const pythonBasicsCount = currentTabPool.filter((c) => c.skill === 'Python Basics').length;
  const problemSolvingCount = currentTabPool.filter((c) => c.skill === 'Problem Solving').length;
  const pythonInterCount = currentTabPool.filter((c) => c.skill === 'Python Intermediate').length;
  const algorithmsCount = currentTabPool.filter((c) => c.skill === 'Algorithms').length;

  const solvedCount = currentTabPool.filter((c) => c.solved).length;
  const unsolvedCount = currentTabPool.filter((c) => !c.solved).length;

  // If a topic challenge arena is active, render the 3-Column Arena
  if (activeChallengeArenaTopic !== null) {
    const selectedTopic = ALL_PYTHON_TOPICS.find((t) => t.id === activeChallengeArenaTopic.topicId);
    return (
      <PythonTopic1ChallengeArena
        userName={userName}
        topicId={activeChallengeArenaTopic.topicId}
        topicTitle={selectedTopic?.title}
        tasks={selectedTopic?.questions}
        initialTaskId={activeChallengeArenaTopic.initialTaskId || 1}
        onBack={() => {
          if (typeof window !== 'undefined' && window.location.hash.includes('arena=')) {
            window.history.back();
          } else {
            setActiveChallengeArenaTopic(null);
          }
        }}
        onCompleteAll={() => {
          if (typeof window !== 'undefined' && window.location.hash.includes('arena=')) {
            window.history.back();
          } else {
            setActiveChallengeArenaTopic(null);
          }
        }}
      />
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 text-slate-800">
      
      {/* ─── 1. BREADCRUMB & HEADER SECTION ─── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <div>
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-2 select-none">
            <button
              type="button"
              onClick={onBackToDashboard}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
            </button>
            <span className="text-slate-300">|</span>
            <button
              type="button"
              onClick={onBackToPractice}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Coding Practice
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-800 font-semibold">Python</span>
          </nav>

          {/* Title & Subtitle */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] tracking-tight">
            Python <span className="text-[#1a73e8]">Challenges</span>
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-500 font-normal">
            Solve hands-on coding problems, improve your skills and track your progress.
          </p>
        </div>

        {/* Right Stats Card Widget */}
        <div className="shrink-0 flex items-center gap-4 bg-white border border-slate-100/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)] rounded-2xl px-5 py-3.5">
          {/* Python Logo */}
          <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-1">
            <img
              src="/images/arena/icons/python.png"
              alt="Python Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Rank & Points */}
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500 font-medium">Rank:</span>
              <strong className="text-slate-900 font-black text-sm">1248</strong>
            </div>
            <div className="h-4 w-[1px] bg-slate-200" />
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500 font-medium">Points:</span>
              <strong className="text-slate-900 font-bold">0 / 35</strong>
              <Info className="w-3.5 h-3.5 text-slate-400 cursor-pointer hover:text-slate-600" />
            </div>
          </div>

          {/* Action circle arrow button */}
          <button
            type="button"
            className="w-7 h-7 rounded-full bg-[#f0f6ff] text-[#1a73e8] flex items-center justify-center hover:bg-[#1a73e8] hover:text-white transition-colors cursor-pointer ml-1"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ─── 2. TABS BAR (All Challenges, Basic, Intermediate, Advanced, Popular) ─── */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 no-scrollbar border-b border-slate-200/80">
        {[
          { id: 'all', label: 'All Challenges (25 Topics)' },
          { id: 'basic', label: 'Basic (8 Topics)' },
          { id: 'intermediate', label: 'Intermediate (8 Topics)' },
          { id: 'advanced', label: 'Advanced (5 Topics)' },
          { id: 'popular', label: 'Popular (5 Challenges)' }
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer whitespace-nowrap active:scale-95 ${
                isActive
                  ? 'bg-[#1a73e8] text-white shadow-sm shadow-blue-500/20'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200/70'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ─── 3. TWO-COLUMN LAYOUT: CHALLENGES LIST (70%) + FILTER SIDEBAR (30%) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: Challenges List (8 of 12 cols = ~67%) */}
        <div className="lg:col-span-8 space-y-3.5">
          {filteredChallenges.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 shadow-sm">
              <p className="text-slate-500 text-sm font-medium">No challenges found matching the active filters.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedDifficulties([]);
                  setSelectedSkills([]);
                  setSelectedStatus([]);
                }}
                className="mt-3 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold hover:bg-blue-100 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            filteredChallenges.map((item) => {
              const isBookmarked = bookmarkedIds.has(item.id);
              const qCount = item.questions ? item.questions.length : 10;
              const isLocked = !internalEnrolled && item.id !== 1;
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 p-4 sm:p-5 group ${
                    isLocked
                      ? 'border-slate-200/90 shadow-2xs hover:border-amber-300'
                      : 'border-slate-100/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    {/* Left: Icon + Content */}
                    <div className="flex items-start gap-3.5 min-w-0 flex-1">

                      {/* Python Logo in Circle */}
                      <div className="w-11 h-11 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 p-1.5 group-hover:scale-105 transition-transform">
                        <img
                          src="/images/arena/icons/python.png"
                          alt="Python"
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Challenge Title, Badges & Description */}
                      <div className="min-w-0 flex-1 text-left">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-tight group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h3>
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                            {qCount} Challenges
                          </span>
                        </div>

                        {/* Badges Row */}
                        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                          {/* Free / Locked Status Badge */}
                          {isLocked ? (
                            <span className="text-[10.5px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1">
                              <Lock className="w-2.5 h-2.5 text-amber-600" />
                              <span>Locked</span>
                            </span>
                          ) : (
                            <span className="text-[10.5px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                              {item.id === 1 ? 'Free Topic' : 'Unlocked'}
                            </span>
                          )}

                          {/* Difficulty */}
                          <span
                            className={`text-[10.5px] font-bold px-2.5 py-0.5 rounded-full ${
                              item.difficulty === 'Easy'
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/50'
                                : item.difficulty === 'Medium'
                                ? 'bg-amber-50 text-amber-700 border border-amber-200/50'
                                : 'bg-rose-50 text-rose-700 border border-rose-200/50'
                            }`}
                          >
                            {item.difficulty}
                          </span>

                          {/* Max Score */}
                          <span className="text-[10.5px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/50">
                            Max Score: {item.maxScore}
                          </span>

                          {/* Skill category */}
                          <span className="text-[10.5px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                            {item.skill}
                          </span>
                        </div>

                        {/* Description text */}
                        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Dropdown under Title & Description for this topic */}
                        {item.questions && item.questions.length > 0 && (
                          <div className="mt-2.5 relative max-w-xs sm:max-w-sm">
                            <label htmlFor={`topic-select-${item.id}`} className="sr-only">Choose Question</label>
                            <select
                              id={`topic-select-${item.id}`}
                              defaultValue=""
                              onChange={(e) => {
                                if (isLocked) {
                                  soundEffects.playLock();
                                  setLockedModalTopic({ title: item.title, count: item.questions?.length || 10 });
                                  e.target.value = '';
                                  return;
                                }
                                const val = Number(e.target.value);
                                if (val) {
                                  openArena(item.id, val);
                                }
                              }}
                              className="w-full appearance-none bg-blue-50/80 hover:bg-blue-100/70 border border-blue-200 text-blue-900 font-bold text-xs pl-3 pr-8 py-2 rounded-xl shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all truncate"
                              title="Choose Question"
                            >
                              <option value="" disabled className="bg-white text-slate-700 font-bold">
                                ▼ Select Question (1 to {item.questions.length}) ▾
                              </option>
                              {item.questions.map((task) => (
                                <option key={task.id} value={task.taskNumber} className="bg-white text-slate-900 font-medium py-1">
                                  {task.taskNumber}. {task.title}
                                </option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-blue-600">
                              <ChevronDown className="w-3.5 h-3.5" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right: Bookmark Star + Action Button */}
                    <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                      <button
                        type="button"
                        onClick={(e) => toggleBookmark(item.id, e)}
                        aria-label="Bookmark Challenge"
                        className="p-2 rounded-xl hover:bg-slate-50 text-slate-400 hover:text-amber-500 transition-colors cursor-pointer"
                      >
                        <Star
                          className={`w-5 h-5 transition-colors ${
                            isBookmarked ? 'fill-amber-400 text-amber-400' : ''
                          }`}
                        />
                      </button>

                      {isLocked ? (
                        <button
                          type="button"
                          onClick={() => {
                            soundEffects.playLock();
                            setLockedModalTopic({ title: item.title, count: item.questions?.length || 10 });
                          }}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 active:scale-95 font-bold text-xs shadow-2xs transition-all cursor-pointer whitespace-nowrap"
                        >
                          <Lock className="w-3.5 h-3.5 text-amber-600" />
                          <span>Unlock Topic</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            openArena(item.id, 1);
                          }}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1a73e8] hover:bg-blue-700 active:scale-95 text-white font-semibold text-xs shadow-sm transition-all cursor-pointer whitespace-nowrap"
                        >
                          <span>Solve Challenge</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* RIGHT COLUMN: Filter Sidebar (4 of 12 cols = ~33%) */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Accordion 1: Status */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-4 text-left">
            <button
              type="button"
              onClick={() => setStatusOpen((prev) => !prev)}
              className="w-full flex items-center justify-between text-xs font-bold text-slate-800 cursor-pointer"
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
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span>Solved</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{solvedCount}</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer hover:text-slate-900">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedStatus.includes('Unsolved')}
                      onChange={() => handleStatusToggle('Unsolved')}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span>Unsolved</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{unsolvedCount}</span>
                </label>
              </div>
            )}
          </div>

          {/* Accordion 2: Skills */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-4 text-left">
            <button
              type="button"
              onClick={() => setSkillsOpen((prev) => !prev)}
              className="w-full flex items-center justify-between text-xs font-bold text-slate-800 cursor-pointer"
            >
              <span>SKILLS</span>
              {skillsOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {skillsOpen && (
              <div className="mt-3 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
                <label className="flex items-center justify-between cursor-pointer hover:text-slate-900">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedSkills.includes('Python Basics')}
                      onChange={() => handleSkillToggle('Python Basics')}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span>Python Basics</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{pythonBasicsCount}</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer hover:text-slate-900">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedSkills.includes('Problem Solving')}
                      onChange={() => handleSkillToggle('Problem Solving')}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span>Problem Solving</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{problemSolvingCount}</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer hover:text-slate-900">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedSkills.includes('Python Intermediate')}
                      onChange={() => handleSkillToggle('Python Intermediate')}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span>Python Intermediate</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{pythonInterCount}</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer hover:text-slate-900">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedSkills.includes('Algorithms')}
                      onChange={() => handleSkillToggle('Algorithms')}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span>Algorithms</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{algorithmsCount}</span>
                </label>
              </div>
            )}
          </div>

          {/* Accordion 3: Difficulty */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-4 text-left">
            <button
              type="button"
              onClick={() => setDifficultyOpen((prev) => !prev)}
              className="w-full flex items-center justify-between text-xs font-bold text-slate-800 cursor-pointer"
            >
              <span>DIFFICULTY</span>
              {difficultyOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {difficultyOpen && (
              <div className="mt-3 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
                <label className="flex items-center justify-between cursor-pointer hover:text-slate-900">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedDifficulties.includes('Easy')}
                      onChange={() => handleDifficultyToggle('Easy')}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span>Easy</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{easyCount}</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer hover:text-slate-900">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedDifficulties.includes('Medium')}
                      onChange={() => handleDifficultyToggle('Medium')}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span>Medium</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{mediumCount}</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer hover:text-slate-900">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedDifficulties.includes('Hard')}
                      onChange={() => handleDifficultyToggle('Hard')}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span>Hard</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{hardCount}</span>
                </label>
              </div>
            )}
          </div>

          {/* Accordion 4: Language */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-4 text-left">
            <button
              type="button"
              onClick={() => setLanguageOpen((prev) => !prev)}
              className="w-full flex items-center justify-between text-xs font-bold text-slate-800 cursor-pointer"
            >
              <span>LANGUAGE</span>
              {languageOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {languageOpen && (
              <div className="mt-3 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
                <label className="flex items-center justify-between cursor-pointer hover:text-slate-900">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={languageChecked}
                      onChange={(e) => setLanguageChecked(e.target.checked)}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span>Python (Python 3)</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{currentTabPool.length}</span>
                </label>
              </div>
            )}
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
              <span>Python • {lockedModalTopic.title}</span>
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
                <span>All 25 Python practical challenge topics unlock</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>SQL, Excel &amp; Full Stack live coding access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Interview tasks, test-cases &amp; instant code evaluation</span>
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

            </div>
          </div>
        </div>
      )}
    </div>
  );
};
