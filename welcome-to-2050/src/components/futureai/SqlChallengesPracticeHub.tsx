import React, { useState, useMemo } from 'react';
import { SqlChallengeArena } from './SqlChallengeArena';
import {
  ALL_SQL_TOPICS,
  SqlTopicDefinition,
  SqlChallengeTask
} from './data/sqlCodingChallengesBank';
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
  Database,
  Search,
  BookOpen,
  Award,
  Layers,
  Sparkles,
  Play,
  Table
} from 'lucide-react';

export interface SqlChallengesPracticeHubProps {
  userName?: string;
  onBackToPractice?: () => void;
  onBackToDashboard?: () => void;
  onSolveChallenge?: (challengeId: number, title: string) => void;
}

export const SqlChallengesPracticeHub: React.FC<SqlChallengesPracticeHubProps> = ({
  userName = 'Rahul',
  onBackToPractice,
  onBackToDashboard,
  onSolveChallenge
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'basic' | 'intermediate' | 'advanced' | 'popular'>('all');
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<number>>(new Set());
  const [activeChallengeArenaTopic, setActiveChallengeArenaTopic] = useState<{ topicId: number; initialTaskId?: number } | null>(null);

  // Collapsible accordion states
  const [statusOpen, setStatusOpen] = useState<boolean>(true);
  const [skillsOpen, setSkillsOpen] = useState<boolean>(true);
  const [difficultyOpen, setDifficultyOpen] = useState<boolean>(true);
  const [dialectOpen, setDialectOpen] = useState<boolean>(true);

  // Filter checkbox states
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedDialect, setSelectedDialect] = useState<string>('PostgreSQL');

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

  // Filter challenges based on tab & sidebar checkboxes
  const filteredChallenges = useMemo(() => {
    return ALL_SQL_TOPICS.filter((item) => {
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
    return ALL_SQL_TOPICS.filter((item) => {
      if (activeTab === 'all') return item.tabs.includes('all');
      return item.tabs.includes(activeTab);
    });
  }, [activeTab]);

  const easyCount = currentTabPool.filter((c) => c.difficulty === 'Easy').length;
  const mediumCount = currentTabPool.filter((c) => c.difficulty === 'Medium').length;
  const hardCount = currentTabPool.filter((c) => c.difficulty === 'Hard').length;

  const sqlBasicsCount = currentTabPool.filter((c) => c.skill === 'SQL Basics').length;
  const dataQueryingCount = currentTabPool.filter((c) => c.skill === 'Data Querying').length;
  const aggregationCount = currentTabPool.filter((c) => c.skill === 'Aggregation').length;
  const joinsCount = currentTabPool.filter((c) => c.skill === 'Joins').length;
  const windowCount = currentTabPool.filter((c) => c.skill === 'Window Functions').length;
  const advancedSqlCount = currentTabPool.filter((c) => c.skill === 'Advanced SQL').length;

  const solvedCount = currentTabPool.filter((c) => c.solved).length;
  const unsolvedCount = currentTabPool.filter((c) => !c.solved).length;

  // If a topic challenge arena is active, render the 3-Column Arena
  if (activeChallengeArenaTopic !== null) {
    const selectedTopic = ALL_SQL_TOPICS.find((t) => t.id === activeChallengeArenaTopic.topicId);
    return (
      <SqlChallengeArena
        userName={userName}
        topicId={activeChallengeArenaTopic.topicId}
        topicTitle={selectedTopic?.title}
        tasks={selectedTopic?.questions}
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
            <span className="text-slate-800 font-semibold">SQL</span>
          </nav>

          {/* Title & Subtitle */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] tracking-tight">
            SQL <span className="text-[#0284c7]">Challenges</span>
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-500 font-normal">
            Master relational databases, execute live queries, JOIN tables, and solve data analytics problems.
          </p>
        </div>

        {/* Right Stats Card Widget */}
        <div className="shrink-0 flex items-center gap-4 bg-white border border-slate-100/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)] rounded-2xl px-5 py-3.5">
          {/* SQL Logo */}
          <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center p-1">
            <Database className="w-5 h-5 text-sky-600" />
          </div>

          {/* Rank & Points */}
          <div className="flex items-center gap-4 text-xs">
            <div>
              <div className="text-slate-400 font-medium text-[11px]">Rank</div>
              <div className="font-bold text-slate-800 text-sm mt-0.5">#142</div>
            </div>
            <div className="h-7 w-[1px] bg-slate-100" />
            <div>
              <div className="text-slate-400 font-medium text-[11px]">Points</div>
              <div className="font-bold text-[#0284c7] text-sm mt-0.5">2,840 pts</div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 2. 5 TABS HEADER ─── */}
      <div className="border-b border-slate-200/90 mb-6 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-8 min-w-max">
          {[
            { id: 'all', label: 'All Challenges', count: 25 },
            { id: 'basic', label: 'Basic', count: 8 },
            { id: 'intermediate', label: 'Intermediate', count: 8 },
            { id: 'advanced', label: 'Advanced', count: 5 },
            { id: 'popular', label: 'Popular', count: 4 }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setActiveTab(tab.id as any);
                }}
                className={`flex items-center gap-2 pb-3.5 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer select-none ${
                  isActive
                    ? 'border-[#0284c7] text-[#0284c7]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                    isActive
                      ? 'bg-sky-100 text-[#0284c7]'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── 3. MAIN CONTENT: 2 COLUMNS (8 COLS FOR CARDS + 4 COLS FOR SIDEBAR) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: Challenge Cards List (8 of 12 cols = ~66%) */}
        <div className="lg:col-span-8 space-y-4">
          {filteredChallenges.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
              <Table className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="font-bold text-slate-700 text-base">No challenges match your filter</h3>
              <p className="text-slate-400 text-xs mt-1">Try resetting some of your sidebar checkboxes or selecting a different tab.</p>
            </div>
          ) : (
            filteredChallenges.map((item) => {
              const isBookmarked = bookmarkedIds.has(item.id);

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-sky-200 transition-all duration-200 p-4 sm:p-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    {/* Left: Checkmark + Content */}
                    <div className="flex items-start gap-3.5 flex-1 min-w-0">
                      {/* Checkmark Status Circle */}
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          item.solved
                            ? 'bg-emerald-500 text-white shadow-xs'
                            : 'border-2 border-slate-200 text-transparent hover:border-slate-300'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>

                      {/* Content block */}
                      <div className="min-w-0 flex-1 text-left">
                        {/* Title */}
                        <h2 className="text-sm sm:text-base font-bold text-slate-900 hover:text-sky-600 transition-colors">
                          {item.title}
                        </h2>

                        {/* Badges Bar: Difficulty + Max Score + Skill */}
                        <div className="flex flex-wrap items-center gap-2 mt-2">
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
                          <span className="text-[10.5px] font-bold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200/50">
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
                            <label htmlFor={`sql-topic-select-${item.id}`} className="sr-only">Choose Question</label>
                            <select
                              id={`sql-topic-select-${item.id}`}
                              defaultValue=""
                              onChange={(e) => {
                                const val = Number(e.target.value);
                                if (val) {
                                  soundEffects.playClick();
                                  setActiveChallengeArenaTopic({ topicId: item.id, initialTaskId: val });
                                }
                              }}
                              className="w-full appearance-none bg-sky-50/80 hover:bg-sky-100/70 border border-sky-200 text-sky-900 font-bold text-xs pl-3 pr-8 py-2 rounded-xl shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all truncate"
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
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-sky-600">
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

                      <button
                        type="button"
                        onClick={() => {
                          soundEffects.playClick();
                          setActiveChallengeArenaTopic({ topicId: item.id, initialTaskId: 1 });
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0284c7] hover:bg-sky-700 active:scale-95 text-white font-semibold text-xs shadow-sm transition-all cursor-pointer whitespace-nowrap"
                      >
                        <span>Solve Challenge</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
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
                      className="rounded border-slate-300 text-sky-600 focus:ring-sky-500 cursor-pointer"
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
                      className="rounded border-slate-300 text-sky-600 focus:ring-sky-500 cursor-pointer"
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
                {[
                  { name: 'SQL Basics', count: sqlBasicsCount },
                  { name: 'Data Querying', count: dataQueryingCount },
                  { name: 'Aggregation', count: aggregationCount },
                  { name: 'Joins', count: joinsCount },
                  { name: 'Window Functions', count: windowCount },
                  { name: 'Advanced SQL', count: advancedSqlCount }
                ].map((s) => (
                  <label key={s.name} className="flex items-center justify-between cursor-pointer hover:text-slate-900">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedSkills.includes(s.name)}
                        onChange={() => handleSkillToggle(s.name)}
                        className="rounded border-slate-300 text-sky-600 focus:ring-sky-500 cursor-pointer"
                      />
                      <span>{s.name}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">{s.count}</span>
                  </label>
                ))}
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
                      className="rounded border-slate-300 text-sky-600 focus:ring-sky-500 cursor-pointer"
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
                      className="rounded border-slate-300 text-sky-600 focus:ring-sky-500 cursor-pointer"
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
                      className="rounded border-slate-300 text-sky-600 focus:ring-sky-500 cursor-pointer"
                    />
                    <span>Hard</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{hardCount}</span>
                </label>
              </div>
            )}
          </div>

          {/* Accordion 4: SQL Dialect */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-4 text-left">
            <button
              type="button"
              onClick={() => setDialectOpen((prev) => !prev)}
              className="w-full flex items-center justify-between text-xs font-bold text-slate-800 cursor-pointer"
            >
              <span>SQL DIALECT</span>
              {dialectOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {dialectOpen && (
              <div className="mt-3 space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
                {['PostgreSQL', 'MySQL', 'SQLite'].map((d) => (
                  <label key={d} className="flex items-center justify-between cursor-pointer hover:text-slate-900">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="sql_dialect_radio"
                        checked={selectedDialect === d}
                        onChange={() => setSelectedDialect(d)}
                        className="text-sky-600 focus:ring-sky-500 cursor-pointer"
                      />
                      <span>{d}</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-50 text-sky-600 font-mono font-bold">Standard</span>
                  </label>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
