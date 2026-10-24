import React, { useState, useMemo } from 'react';
import { PythonTopic1ChallengeArena, TOPIC_1_TASKS } from './PythonTopic1ChallengeArena';
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
  Play
} from 'lucide-react';

export interface PythonChallengeItem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  maxScore: number;
  skill: string;
  description: string;
  tabs: ('all' | 'basic' | 'intermediate' | 'advanced' | 'popular')[];
  solved?: boolean;
  bookmarked?: boolean;
}

const ALL_CHALLENGES: PythonChallengeItem[] = [
  {
    id: 1,
    title: 'Say Hello, World! With Python',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Python Basics',
    description: 'Get started with Python by printing to output.',
    tabs: ['all', 'basic']
  },
  {
    id: 2,
    title: 'Python If-Else',
    difficulty: 'Easy',
    maxScore: 10,
    skill: 'Python Basics',
    description: 'Learn how to use if-else statements to make decisions in Python.',
    tabs: ['all', 'basic']
  },
  {
    id: 3,
    title: 'Arithmetic Operators',
    difficulty: 'Easy',
    maxScore: 10,
    skill: 'Python Basics',
    description: 'Practice using arithmetic operators like +, -, *, / and %.',
    tabs: ['all', 'basic']
  },
  {
    id: 4,
    title: 'Python: Division',
    difficulty: 'Easy',
    maxScore: 10,
    skill: 'Python Basics',
    description: 'Perform division operations and understand integer and float division.',
    tabs: ['all', 'basic']
  },
  {
    id: 5,
    title: 'Loops',
    difficulty: 'Easy',
    maxScore: 10,
    skill: 'Python Basics',
    description: 'Use for and while loops to repeat a set of instructions.',
    tabs: ['all', 'basic']
  },
  {
    id: 6,
    title: 'Variables and Data Types',
    difficulty: 'Easy',
    maxScore: 10,
    skill: 'Python Basics',
    description: 'Declare variables and work with numbers, strings, and booleans.',
    tabs: ['all', 'basic']
  },
  {
    id: 7,
    title: 'Input and Output',
    difficulty: 'Easy',
    maxScore: 10,
    skill: 'Python Basics',
    description: 'Read user input with input() and format outputs cleanly.',
    tabs: ['all']
  },
  {
    id: 8,
    title: 'Comparison Operators',
    difficulty: 'Easy',
    maxScore: 10,
    skill: 'Python Basics',
    description: 'Compare values using ==, !=, <, >, <=, and >=.',
    tabs: ['all']
  },
  {
    id: 9,
    title: 'For and While Loops',
    difficulty: 'Easy',
    maxScore: 10,
    skill: 'Python Basics',
    description: 'Iterate over ranges and execute blocks while conditions hold.',
    tabs: ['all', 'basic']
  },
  {
    id: 10,
    title: 'Functions',
    difficulty: 'Easy',
    maxScore: 10,
    skill: 'Python Basics',
    description: 'Define reusable functions, pass parameters, and return calculated values.',
    tabs: ['all', 'basic']
  },
  {
    id: 11,
    title: 'Strings',
    difficulty: 'Easy',
    maxScore: 10,
    skill: 'Python Basics',
    description: 'Master string indexing, slicing, formatting, and built-in methods.',
    tabs: ['all', 'basic']
  },
  {
    id: 12,
    title: 'Lists',
    difficulty: 'Easy',
    maxScore: 10,
    skill: 'Python Basics',
    description: 'Create, modify, append, and slice ordered Python list collections.',
    tabs: ['all']
  },
  {
    id: 13,
    title: 'Tuples and Sets',
    difficulty: 'Easy',
    maxScore: 10,
    skill: 'Python Basics',
    description: 'Understand immutable tuples and fast mathematical set operations.',
    tabs: ['all']
  },
  {
    id: 14,
    title: 'Dictionaries',
    difficulty: 'Easy',
    maxScore: 10,
    skill: 'Python Basics',
    description: 'Store and retrieve structured data using key-value dictionary mappings.',
    tabs: ['all']
  },
  {
    id: 15,
    title: 'List Operations',
    difficulty: 'Medium',
    maxScore: 15,
    skill: 'Problem Solving',
    description: 'Apply advanced list methods: sort, filter, reverse, and insert.',
    tabs: ['all', 'intermediate']
  },
  {
    id: 16,
    title: 'Dictionary Operations',
    difficulty: 'Medium',
    maxScore: 15,
    skill: 'Problem Solving',
    description: 'Iterate dictionary keys, values, items, and handle missing keys safely.',
    tabs: ['all', 'intermediate']
  },
  {
    id: 17,
    title: 'String Manipulation',
    difficulty: 'Medium',
    maxScore: 15,
    skill: 'Problem Solving',
    description: 'Transform, split, join, validate, and parse strings efficiently.',
    tabs: ['all', 'intermediate']
  },
  {
    id: 18,
    title: 'List Comprehension',
    difficulty: 'Medium',
    maxScore: 15,
    skill: 'Python Intermediate',
    description: 'Write concise, elegant list comprehensions with conditional filters.',
    tabs: ['all', 'intermediate']
  },
  {
    id: 19,
    title: 'File Handling',
    difficulty: 'Medium',
    maxScore: 15,
    skill: 'Python Intermediate',
    description: 'Read, write, and append to files safely using with open() blocks.',
    tabs: ['all', 'intermediate']
  },
  {
    id: 20,
    title: 'Exception Handling',
    difficulty: 'Medium',
    maxScore: 15,
    skill: 'Python Intermediate',
    description: 'Handle errors gracefully using try, except, else, and finally.',
    tabs: ['all', 'intermediate']
  },
  {
    id: 21,
    title: 'Recursion Basics',
    difficulty: 'Hard',
    maxScore: 20,
    skill: 'Problem Solving',
    description: 'Master base cases and recursive calls to solve complex tasks.',
    tabs: ['all', 'advanced']
  },
  {
    id: 22,
    title: 'Sorting Algorithms',
    difficulty: 'Hard',
    maxScore: 20,
    skill: 'Problem Solving',
    description: 'Implement Bubble Sort, Selection Sort, and Insertion Sort algorithms.',
    tabs: ['all', 'advanced']
  },
  {
    id: 23,
    title: 'Search Algorithms',
    difficulty: 'Hard',
    maxScore: 20,
    skill: 'Problem Solving',
    description: 'Implement Linear Search and logarithmic O(log n) Binary Search.',
    tabs: ['all', 'advanced']
  },
  {
    id: 24,
    title: 'Problem Solving with Functions',
    difficulty: 'Hard',
    maxScore: 20,
    skill: 'Problem Solving',
    description: 'Design modular algorithmic solutions to solve multi-stage problems.',
    tabs: ['all', 'advanced']
  },
  {
    id: 25,
    title: 'Advanced Data Structures',
    difficulty: 'Hard',
    maxScore: 20,
    skill: 'Problem Solving',
    description: 'Build Stacks, Queues, and Linked Lists using custom Python classes.',
    tabs: ['all']
  },
  // Additional Popular Challenges specified by user
  {
    id: 26,
    title: 'Two Sum Problem',
    difficulty: 'Medium',
    maxScore: 15,
    skill: 'Problem Solving',
    description: 'Find two indices in an array such that their values add up to a target.',
    tabs: ['popular']
  },
  {
    id: 27,
    title: 'Reverse a String',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Python Basics',
    description: 'Reverse characters in a string using slicing and two-pointer logic.',
    tabs: ['popular']
  },
  {
    id: 28,
    title: 'Prime Number Check',
    difficulty: 'Easy',
    maxScore: 10,
    skill: 'Python Basics',
    description: 'Determine whether a given integer is prime in optimal O(sqrt(n)) time.',
    tabs: ['popular']
  },
  {
    id: 29,
    title: 'Fibonacci Sequence',
    difficulty: 'Easy',
    maxScore: 10,
    skill: 'Python Basics',
    description: 'Generate the first n Fibonacci numbers using iteration and recursion.',
    tabs: ['popular']
  },
  {
    id: 30,
    title: 'Find Largest Number',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Python Basics',
    description: 'Find the maximum value in a list of numbers without using built-in max().',
    tabs: ['popular']
  },
  {
    id: 31,
    title: 'Lambda and Map Functions',
    difficulty: 'Medium',
    maxScore: 15,
    skill: 'Python Intermediate',
    description: 'Write anonymous lambda functions and apply them with map() and filter().',
    tabs: ['intermediate']
  },
  {
    id: 32,
    title: 'Sorting and Searching Basics',
    difficulty: 'Medium',
    maxScore: 15,
    skill: 'Problem Solving',
    description: 'Combine searching and sorting algorithms on custom numerical datasets.',
    tabs: ['intermediate']
  }
];

export interface PythonChallengesPracticeHubProps {
  userName?: string;
  onBackToPractice?: () => void;
  onBackToDashboard?: () => void;
  onSolveChallenge?: (challengeId: number, title: string) => void;
}

export const PythonChallengesPracticeHub: React.FC<PythonChallengesPracticeHubProps> = ({
  userName = 'Rahul',
  onBackToPractice,
  onBackToDashboard,
  onSolveChallenge
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'basic' | 'intermediate' | 'advanced' | 'popular'>('all');
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<number>>(new Set());
  const [activeChallengeArenaTopic, setActiveChallengeArenaTopic] = useState<{ topicId: number; initialTaskId?: number } | null>(null);
  const [selectedTopic1TaskId, setSelectedTopic1TaskId] = useState<number>(1);
  const [topic1Expanded, setTopic1Expanded] = useState<boolean>(false);

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
    return ALL_CHALLENGES.filter((item) => {
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
    return ALL_CHALLENGES.filter((item) => {
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

  const solvedCount = currentTabPool.filter((c) => c.solved).length;
  const unsolvedCount = currentTabPool.filter((c) => !c.solved).length;

  if (activeChallengeArenaTopic !== null) {
    return (
      <PythonTopic1ChallengeArena
        userName={userName}
        initialTaskId={activeChallengeArenaTopic.initialTaskId || 1}
        onBack={() => setActiveChallengeArenaTopic(null)}
        onCompleteAll={() => {
          alert('🎉 Congratulations! You have completed all 10 challenges of Topic 1!');
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
              className="p-1 rounded-md hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
              title="Dashboard"
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

        {/* Right Stats Card Widget (1:1 with Reference Design) */}
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
          { id: 'all', label: 'All Challenges' },
          { id: 'basic', label: 'Basic' },
          { id: 'intermediate', label: 'Intermediate' },
          { id: 'advanced', label: 'Advanced' },
          { id: 'popular', label: 'Popular' }
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
            filteredChallenges.map((item, index) => {
              const isBookmarked = bookmarkedIds.has(item.id);
              return (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    {/* Left: Number Badge + Python Logo + Details */}
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0 flex-1">
                      {/* Number Badge */}
                      <div className="w-8 h-8 rounded-full bg-[#f0f6ff] text-[#1a73e8] font-black text-xs flex items-center justify-center shrink-0">
                        {index + 1}
                      </div>

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
                          {item.id === 1 && (
                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                              10 Challenges
                            </span>
                          )}
                        </div>

                        {/* Badges Row */}
                        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
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

                        {/* ─── Question Dropdown Selector ON THE CARD (BAHAR) ─── */}
                        {item.id === 1 && (
                          <div className="mt-3.5 bg-gradient-to-r from-blue-50/80 via-sky-50/50 to-slate-50 border border-blue-200/80 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center gap-2.5 shadow-sm">
                            <div className="flex items-center gap-2 shrink-0">
                              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                              <label htmlFor="topic1-task-select" className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider">
                                Choose Challenge:
                              </label>
                            </div>
                            <div className="relative flex-1 min-w-0">
                              <select
                                id="topic1-task-select"
                                value={selectedTopic1TaskId}
                                onChange={(e) => setSelectedTopic1TaskId(Number(e.target.value))}
                                className="w-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-bold text-xs sm:text-sm px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition-all"
                              >
                                {TOPIC_1_TASKS.map((task) => (
                                  <option key={task.id} value={task.taskNumber}>
                                    Question {task.taskNumber}: {task.title}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                setActiveChallengeArenaTopic({ topicId: 1, initialTaskId: selectedTopic1TaskId });
                              }}
                              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#1a73e8] hover:bg-blue-700 active:scale-95 text-white font-bold text-xs shadow-sm transition-all cursor-pointer whitespace-nowrap shrink-0"
                            >
                              <span>Solve Challenge #{selectedTopic1TaskId}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right: Bookmark Star + Solve Challenge Button */}
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
                          if (item.id === 1) {
                            setActiveChallengeArenaTopic({ topicId: 1, initialTaskId: selectedTopic1TaskId });
                          } else if (onSolveChallenge) {
                            onSolveChallenge(item.id, item.title);
                          } else {
                            window.location.hash = `#python?topic=${item.id}`;
                          }
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1a73e8] hover:bg-blue-700 active:scale-95 text-white font-semibold text-xs shadow-sm transition-all cursor-pointer whitespace-nowrap"
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
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-slate-600" />
                <span>Status</span>
              </div>
              {statusOpen ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {statusOpen && (
              <div className="mt-3 space-y-2 text-xs font-medium text-slate-600">
                <label className="flex items-center gap-2.5 cursor-pointer hover:text-slate-900 select-none">
                  <input
                    type="checkbox"
                    checked={selectedStatus.includes('Solved')}
                    onChange={() => handleStatusToggle('Solved')}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span>Solved ({solvedCount})</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer hover:text-slate-900 select-none">
                  <input
                    type="checkbox"
                    checked={selectedStatus.includes('Unsolved')}
                    onChange={() => handleStatusToggle('Unsolved')}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span>Unsolved ({unsolvedCount})</span>
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
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-slate-600" />
                <span>Skills</span>
              </div>
              {skillsOpen ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {skillsOpen && (
              <div className="mt-3 space-y-2 text-xs font-medium text-slate-600">
                <label className="flex items-center gap-2.5 cursor-pointer hover:text-slate-900 select-none">
                  <input
                    type="checkbox"
                    checked={selectedSkills.includes('Python Basics')}
                    onChange={() => handleSkillToggle('Python Basics')}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span>Python Basics ({pythonBasicsCount})</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer hover:text-slate-900 select-none">
                  <input
                    type="checkbox"
                    checked={selectedSkills.includes('Problem Solving')}
                    onChange={() => handleSkillToggle('Problem Solving')}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span>Problem Solving ({problemSolvingCount})</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer hover:text-slate-900 select-none">
                  <input
                    type="checkbox"
                    checked={selectedSkills.includes('Python Intermediate')}
                    onChange={() => handleSkillToggle('Python Intermediate')}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span>Python Intermediate ({pythonInterCount})</span>
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
              <div className="flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-slate-600" />
                <span>Difficulty</span>
              </div>
              {difficultyOpen ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {difficultyOpen && (
              <div className="mt-3 space-y-2 text-xs font-medium text-slate-600">
                <label className="flex items-center gap-2.5 cursor-pointer hover:text-slate-900 select-none">
                  <input
                    type="checkbox"
                    checked={selectedDifficulties.includes('Easy')}
                    onChange={() => handleDifficultyToggle('Easy')}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span>Easy ({easyCount})</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer hover:text-slate-900 select-none">
                  <input
                    type="checkbox"
                    checked={selectedDifficulties.includes('Medium')}
                    onChange={() => handleDifficultyToggle('Medium')}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span>Medium ({mediumCount})</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer hover:text-slate-900 select-none">
                  <input
                    type="checkbox"
                    checked={selectedDifficulties.includes('Hard')}
                    onChange={() => handleDifficultyToggle('Hard')}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span>Hard ({hardCount})</span>
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
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-slate-600" />
                <span>Language</span>
              </div>
              {languageOpen ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {languageOpen && (
              <div className="mt-3 space-y-2 text-xs font-medium text-slate-600">
                <label className="flex items-center gap-2.5 cursor-pointer hover:text-slate-900 select-none">
                  <input
                    type="checkbox"
                    checked={languageChecked}
                    onChange={(e) => setLanguageChecked(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span>Python ({currentTabPool.length})</span>
                </label>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
