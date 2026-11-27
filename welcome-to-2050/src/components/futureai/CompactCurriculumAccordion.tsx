import React, { useState, useMemo, useEffect } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Check,
  CheckCircle2,
  Play,
  RotateCcw,
  Lock,
  Search,
  X,
  Clock,
  Layers,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import {
  getTopicProgressInfo,
  recordTopicStarted,
  TOPIC_PROGRESS_UPDATED_EVENT,
} from '../../services/topicProgressTracker';

export interface TopicItem {
  id: string;
  title: string;
  topicNum?: number;
  duration?: string;
  isFree?: boolean;
  status?: string;
  [key: string]: any;
}

export interface ChapterItem {
  id: string;
  chapterNum: number;
  title: string;
  subtitle?: string;
  topics: TopicItem[];
  [key: string]: any;
}

export interface CompactCurriculumAccordionProps {
  chapters: ChapterItem[];
  activeTabId: string;
  courseKey: string;
  courseName?: string;
  isCoursePaid?: boolean;
  highlightedTopicId?: string | number | null;
  onStartTopic?: (topicId: string, topicTitle: string, initialTab?: 'learn' | 'play' | 'interview', tabId?: string) => void;
  onOpenUnlockModal?: (moduleName?: string) => void;
  isTopicUnlocked?: (courseKey: string, chapterNum: number, topicNum: number, tabId: string) => boolean;
  layout?: 'accordion' | 'split';
  className?: string;
}

export const cleanModuleTitle = (title: string): string => {
  if (!title) return '';
  return title
    .replace(/^Module\s*\d+\s*[:\-—–|]\s*/i, '')
    .replace(/^Module\s*\d+\s+/i, '')
    .replace(/^M\s*\d+\s*[:\-—–|]\s*/i, '')
    .replace(/^Chapter\s*\d+\s*[:\-—–|]\s*/i, '')
    .replace(/^Ch\s*\d+\s*[:\-—–|]\s*/i, '')
    .trim();
};

export const CompactCurriculumAccordion: React.FC<CompactCurriculumAccordionProps> = ({
  chapters,
  activeTabId,
  courseKey,
  courseName = 'Course',
  isCoursePaid = false,
  highlightedTopicId = null,
  onStartTopic,
  onOpenUnlockModal,
  isTopicUnlocked,
  layout = 'accordion',
  className = '',
}) => {
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'in-progress' | 'completed' | 'unstarted'>('all');
  const [progressTick, setProgressTick] = useState(0);
  const [selectedChapterId, setSelectedChapterId] = useState<string>(() => {
    if (highlightedTopicId) {
      const target = chapters.find((ch) =>
        ch.topics.some((t) => String(t.id) === String(highlightedTopicId))
      );
      if (target) return target.id;
    }
    return chapters[0]?.id || '';
  });

  // Real-time refresh when a topic is started/completed or enrollment changes
  useEffect(() => {
    const handleProgressUpdate = () => setProgressTick((t) => t + 1);
    window.addEventListener(TOPIC_PROGRESS_UPDATED_EVENT, handleProgressUpdate);
    window.addEventListener('futureai_course_unlocked', handleProgressUpdate);
    window.addEventListener('storage', handleProgressUpdate);
    return () => {
      window.removeEventListener(TOPIC_PROGRESS_UPDATED_EVENT, handleProgressUpdate);
      window.removeEventListener('futureai_course_unlocked', handleProgressUpdate);
      window.removeEventListener('storage', handleProgressUpdate);
    };
  }, []);

  // Accordion Expand/Collapse State (Expands highlighted topic's module if returning from a lesson, else first module)
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    if (highlightedTopicId) {
      const targetChapter = chapters.find((ch) =>
        ch.topics.some((t) => String(t.id) === String(highlightedTopicId))
      );
      if (targetChapter) {
        initial[targetChapter.id] = true;
        return initial;
      }
    }
    if (chapters.length > 0) {
      initial[chapters[0].id] = true;
    }
    return initial;
  });

  // Expand exact module containing highlightedTopicId when returning from a lesson, or default to first module on track change
  useEffect(() => {
    if (highlightedTopicId) {
      const targetChapter = chapters.find((ch) =>
        ch.topics.some((t) => String(t.id) === String(highlightedTopicId))
      );
      if (targetChapter) {
        setExpandedChapters({ [targetChapter.id]: true });
        setSelectedChapterId(targetChapter.id);
        setSearchQuery('');
        setActiveFilter('all');
        return;
      }
    }
    if (chapters.length > 0) {
      setExpandedChapters({ [chapters[0].id]: true });
      setSelectedChapterId(chapters[0].id);
    } else {
      setExpandedChapters({});
      setSelectedChapterId('');
    }
    setSearchQuery('');
    setActiveFilter('all');
  }, [courseKey, activeTabId, chapters, highlightedTopicId]);

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    chapters.forEach((c) => {
      allExpanded[c.id] = true;
    });
    setExpandedChapters(allExpanded);
  };

  const collapseAll = () => {
    setExpandedChapters({});
  };

  const isAllExpanded = useMemo(() => {
    return chapters.length > 0 && chapters.every((c) => !!expandedChapters[c.id]);
  }, [chapters, expandedChapters]);

  // Overall Tab Statistics
  const { totalTopicsCount, completedTopicsCount, inProgressTopicsCount, overallPercent } = useMemo(() => {
    let total = 0;
    let completed = 0;
    let inProgress = 0;

    chapters.forEach((ch) => {
      ch.topics.forEach((t, idx) => {
        total++;
        const p = getTopicProgressInfo(activeTabId, t.id, t.topicNum || idx + 1, courseKey);
        if (p.isCompleted) completed++;
        else if (p.isInProgress) inProgress++;
      });
    });

    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    return {
      totalTopicsCount: total,
      completedTopicsCount: completed,
      inProgressTopicsCount: inProgress,
      overallPercent: pct,
    };
  }, [chapters, activeTabId, courseKey, progressTick]);

  // Filter and Search Logic
  const filteredChapters = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return chapters
      .map((ch) => {
        const matchingTopics = ch.topics.filter((t, idx) => {
          const topicNum = t.topicNum || idx + 1;
          const p = getTopicProgressInfo(activeTabId, t.id, topicNum, courseKey);

          // 1. Text Search Filter
          if (query && !t.title.toLowerCase().includes(query) && !ch.title.toLowerCase().includes(query)) {
            return false;
          }

          // 2. Status Filter
          if (activeFilter === 'completed' && !p.isCompleted) return false;
          if (activeFilter === 'in-progress' && (!p.isInProgress || p.isCompleted)) return false;
          if (activeFilter === 'unstarted' && (p.isCompleted || p.isInProgress)) return false;

          return true;
        });

        return {
          ...ch,
          topics: matchingTopics,
          originalTopicCount: ch.topics.length,
        };
      })
      .filter((ch) => ch.topics.length > 0 || !searchQuery);
  }, [chapters, searchQuery, activeFilter, activeTabId, courseKey, progressTick]);

  // Handle clicking a topic row (resumes exact unfinished activity for in-progress topics)
  const handleTopicAction = (
    topic: TopicItem,
    chapterNum: number,
    topicNum: number
  ) => {
    const isFree = isTopicUnlocked ? isTopicUnlocked(courseKey, chapterNum, topicNum, activeTabId) : true;

    if (!isFree) {
      if (onOpenUnlockModal) {
        onOpenUnlockModal(topic.title);
      }
      return;
    }

    const progressInfo = getTopicProgressInfo(activeTabId, topic.id, topicNum, courseKey);
    const targetStep = progressInfo.isInProgress ? progressInfo.nextActivityStep : 'learn';

    if (!progressInfo.isCompleted) {
      recordTopicStarted(topic.id, courseKey, activeTabId, topic.title);
    }
    if (onStartTopic) {
      onStartTopic(topic.id, topic.title, targetStep, activeTabId);
    }
  };

  // ── SPLIT LAYOUT MODE (Left Sidebar Modules + Center Selected Module Topics, like DSA Coding) ──
  if (layout === 'split') {
    const activeChapter =
      chapters.find((c) => c.id === selectedChapterId) || chapters[0] || null;
    const isSearching = searchQuery.trim().length > 0 || activeFilter !== 'all';

    // When searching or filtering, show matching topics from active module (or all modules if searchQuery is set)
    const centerChapters = searchQuery.trim()
      ? filteredChapters.filter((ch) => ch.topics.length > 0)
      : activeChapter
      ? filteredChapters.filter((ch) => ch.id === activeChapter.id)
      : [];

    return (
      <div className={`compact-curriculum-split select-text ${className}`}>
        <div className="flex flex-col md:flex-row items-start gap-4">
          {/* ── LEFT COLUMN: MODULES LIST ── */}
          <div className="w-full md:w-[264px] xl:w-[280px] shrink-0 bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden md:sticky md:top-20">
            <div className="px-3.5 py-2.5 bg-slate-50/80 border-b border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#6D28D9]" />
                <span className="text-[11.5px] font-bold uppercase tracking-wider text-slate-800">
                  Modules
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-white border border-slate-200 text-[11px] font-bold text-[#6D28D9] tabular-nums">
                {chapters.length}
              </span>
            </div>

            {/* Mobile horizontal strip + Desktop smooth-scrolling vertical list */}
            <div
              style={{ scrollbarWidth: 'thin', scrollbarColor: '#d8b4fe transparent' }}
              className="flex md:flex-col gap-1.5 md:gap-1 p-2 overflow-x-auto md:overflow-x-visible max-h-none md:max-h-[min(560px,calc(100vh-180px))] md:overflow-y-auto scroll-smooth"
            >
              {chapters.map((ch) => {
                const isSelected = activeChapter?.id === ch.id;
                let doneCount = 0;
                ch.topics.forEach((t, idx) => {
                  const p = getTopicProgressInfo(activeTabId, t.id, t.topicNum || idx + 1, courseKey);
                  if (p.isCompleted) doneCount++;
                });
                const total = ch.topics.length;
                const pct = total > 0 ? Math.round((doneCount / total) * 100) : 0;
                const isModuleComplete = total > 0 && doneCount === total;

                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => {
                      setSelectedChapterId(ch.id);
                      if (searchQuery) setSearchQuery('');
                    }}
                    className={`group text-left rounded-xl px-2.5 py-2 transition-all duration-150 cursor-pointer shrink-0 md:shrink w-[220px] md:w-full border ${
                      isSelected
                        ? 'bg-emerald-50/90 border-emerald-300/90 shadow-2xs'
                        : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200/80'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-7 h-7 rounded-lg text-[10.5px] font-bold flex items-center justify-center shrink-0 transition-colors tabular-nums ${
                          isModuleComplete
                            ? 'bg-emerald-500 text-white'
                            : isSelected
                            ? 'bg-emerald-600 text-white shadow-2xs'
                            : 'bg-slate-100 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-700'
                        }`}
                      >
                        {isModuleComplete ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : `M${ch.chapterNum}`}
                      </span>
                      <div className="min-w-0 flex-1 pr-0.5">
                        <div
                          className={`text-[12.5px] leading-[1.38] break-words line-clamp-2 ${
                            isSelected ? 'font-bold text-emerald-950' : 'font-semibold text-slate-700 group-hover:text-emerald-900'
                          }`}
                        >
                          {cleanModuleTitle(ch.title)}
                        </div>
                        <div className="mt-1.5 w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-300 bg-emerald-500"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                          isSelected ? 'text-emerald-600 translate-x-0.5' : 'text-slate-300 group-hover:text-emerald-500'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── CENTER COLUMN: SELECTED MODULE TOPICS ── */}
          <div className="w-full flex-1 min-w-0 space-y-3">
            {/* Active Module Topic Card(s) */}
            {centerChapters.length === 0 ? (
              <div className="bg-white rounded-2xl border border-[#EAE5F5] p-8 text-center space-y-2">
                <p className="text-sm font-semibold text-slate-700 m-0">No matching topics found</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveFilter('all');
                  }}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#F5F3FF] text-[#6D28D9] hover:bg-[#EDE9FE] cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              centerChapters.map((chapter) => {
                let chDone = 0;
                const origCh = chapters.find((c) => c.id === chapter.id) || chapter;
                origCh.topics.forEach((t, idx) => {
                  const p = getTopicProgressInfo(activeTabId, t.id, t.topicNum || idx + 1, courseKey);
                  if (p.isCompleted) chDone++;
                });
                const chTotal = origCh.topics.length;
                const chPct = chTotal > 0 ? Math.round((chDone / chTotal) * 100) : 0;

                return (
                  <div
                    key={chapter.id}
                    className="bg-white rounded-2xl border border-[#E6E0F4] shadow-[0_2px_12px_rgba(109,40,217,0.05)] overflow-hidden"
                  >
                    {/* Selected Module Header */}
                    <div className="px-4 sm:px-5 py-2.5 sm:py-3 bg-slate-50/70 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-2.5">
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <span className="px-2.5 py-0.5 rounded-md bg-purple-50 text-[#6D28D9] border border-purple-200/60 text-[11px] font-bold uppercase tracking-wider shrink-0">
                            Module {chapter.chapterNum}
                          </span>
                          <span className="text-[12px] font-semibold text-slate-500 tabular-nums">
                            {chDone} / {chTotal} Completed ({chPct}%)
                          </span>
                        </div>
                        <h3 className="text-[15px] sm:text-[16px] font-bold text-[#0F172A] m-0 leading-snug">
                          {cleanModuleTitle(chapter.title)}
                        </h3>
                      </div>

                      {!isSearching && chTotal > 0 && (
                        <div className="flex items-center gap-2.5 shrink-0">
                          <div className="w-24 h-1.5 rounded-full bg-slate-200/80 overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-300 ${
                                chPct === 100 ? 'bg-emerald-500' : 'bg-[#7C3AED]'
                              }`}
                              style={{ width: `${chPct}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Topics List */}
                    <div className="divide-y divide-[#F2EFF9]">
                      {chapter.topics.map((topic, tIdx) => {
                        const topicNum = topic.topicNum || tIdx + 1;
                        const isFree = isTopicUnlocked
                          ? isTopicUnlocked(courseKey, chapter.chapterNum, topicNum, activeTabId)
                          : true;
                        const isLocked = !isFree;

                        const progressInfo = getTopicProgressInfo(activeTabId, topic.id, topicNum, courseKey);
                        const isDone = progressInfo.isCompleted;
                        const isInProgress = !isDone && progressInfo.isInProgress;
                        const isRowHighlighted = String(highlightedTopicId) === String(topic.id);

                        return (
                          <div
                            key={topic.id}
                            id={`topic-row-${topic.id}`}
                            onClick={() => handleTopicAction(topic, chapter.chapterNum, topicNum)}
                            className={`group/topic min-h-[50px] px-4 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between gap-3 transition-colors duration-150 cursor-pointer ${
                              isRowHighlighted
                                ? 'bg-purple-50/60 shadow-[inset_3px_0_0_#6D28D9]'
                                : isDone
                                ? 'bg-white hover:bg-slate-50/70'
                                : isInProgress
                                ? 'bg-white hover:bg-slate-50/70 shadow-[inset_2px_0_0_#6D28D9]'
                                : 'bg-white hover:bg-slate-50/70'
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0 flex-1">
                              <div
                                className={`w-6.5 h-6.5 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 transition-colors tabular-nums ${
                                  isDone
                                    ? 'bg-emerald-500 text-white shadow-2xs'
                                    : isInProgress
                                    ? 'bg-[#6D28D9] text-white ring-2 ring-purple-200'
                                    : isRowHighlighted
                                    ? 'bg-[#6D28D9] text-white'
                                    : 'bg-slate-100 text-slate-600 border border-slate-200/90 group-hover/topic:border-purple-300 group-hover/topic:text-[#6D28D9]'
                                }`}
                              >
                                {isDone ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : topicNum}
                              </div>

                              <div className="min-w-0 flex-1 flex items-center gap-2 flex-wrap sm:flex-nowrap">
                                <span
                                  className={`text-[13.5px] sm:text-[14px] leading-snug break-words line-clamp-2 transition-colors ${
                                    isRowHighlighted
                                      ? 'text-[#6D28D9] font-bold'
                                      : isDone || isInProgress
                                      ? 'text-[#0F172A] font-semibold'
                                      : 'text-slate-800 font-medium group-hover/topic:text-[#6D28D9]'
                                  }`}
                                >
                                  {topic.title}
                                </span>

                                {topic.duration && (
                                  <span className="text-[11px] text-[#64748B] font-medium hidden sm:inline-flex items-center gap-1 shrink-0 px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/70">
                                    <Clock className="w-3 h-3 text-slate-400" />
                                    <span>{topic.duration.replace(/^Video\s*•\s*/i, '')}</span>
                                  </span>
                                )}

                                {isRowHighlighted && (
                                  <span className="text-[10px] font-extrabold text-[#6D28D9] bg-purple-100 px-2 py-0.5 rounded-full shrink-0">
                                    Current
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              {isDone && (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleTopicAction(topic, chapter.chapterNum, topicNum);
                                  }}
                                  className="px-2.5 py-1 rounded-lg text-xs font-bold text-emerald-700 bg-white hover:bg-emerald-50 border border-emerald-300 shadow-2xs transition-all flex items-center gap-1 cursor-pointer"
                                >
                                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                  <span>Review</span>
                                </button>
                              )}

                              {!isDone && isInProgress && !isLocked && (
                                <div className="flex items-center gap-2">
                                  <div
                                    className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#F5F3FF] border border-[#DDD6FE]"
                                    title={`${progressInfo.percent}% completed`}
                                  >
                                    <div className="w-7 h-1.5 rounded-full bg-[#E9E5F5] overflow-hidden">
                                      <div
                                        className="h-full rounded-full bg-[#7C3AED]"
                                        style={{ width: `${progressInfo.percent}%` }}
                                      />
                                    </div>
                                    <span className="text-[10.5px] font-bold text-[#6D28D9] tabular-nums">
                                      {progressInfo.percent}%
                                    </span>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleTopicAction(topic, chapter.chapterNum, topicNum);
                                    }}
                                    className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#6D28D9] hover:bg-[#5B21B6] shadow-2xs transition-all flex items-center gap-1 cursor-pointer"
                                  >
                                    <span>Continue</span>
                                    <Play className="w-2.5 h-2.5 fill-white" />
                                  </button>
                                </div>
                              )}

                              {!isDone && !isInProgress && !isLocked && (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleTopicAction(topic, chapter.chapterNum, topicNum);
                                  }}
                                  className="px-3 py-1 rounded-lg text-xs font-bold text-slate-700 bg-white hover:bg-[#FAF5FF] hover:text-[#6D28D9] border border-slate-300 hover:border-[#7C3AED] shadow-2xs transition-all flex items-center gap-1 cursor-pointer"
                                >
                                  <span>Start</span>
                                  <Play className="w-2.5 h-2.5 fill-current" />
                                </button>
                              )}

                              {isLocked && (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (onOpenUnlockModal) onOpenUnlockModal(topic.title);
                                  }}
                                  className="px-2.5 py-1 rounded-lg text-xs font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors flex items-center gap-1 cursor-pointer"
                                >
                                  <Lock className="w-3 h-3 text-amber-600" />
                                  <span>Unlock</span>
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`compact-curriculum-accordion space-y-3.5 select-text ${className}`}>
      {/* ── 1. Compact Utility Bar (Search, Status Filter Pills & Expand/Collapse) ── */}
      <div className="bg-white rounded-xl sm:rounded-2xl border border-[#EAE5F5] p-2.5 sm:p-3 shadow-2xs flex flex-wrap items-center justify-between gap-2.5">
        
        {/* Left: Quick Status Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all shrink-0 cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#7045E8] text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
            }`}
          >
            All ({totalTopicsCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('in-progress')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all shrink-0 cursor-pointer flex items-center gap-1 ${
              activeFilter === 'in-progress'
                ? 'bg-[#7045E8] text-white shadow-xs'
                : 'bg-purple-50 hover:bg-purple-100 text-[#7045E8]'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            <span>In Progress ({inProgressTopicsCount})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('completed')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all shrink-0 cursor-pointer flex items-center gap-1 ${
              activeFilter === 'completed'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700'
            }`}
          >
            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
            <span>Completed ({completedTopicsCount})</span>
          </button>
        </div>

        {/* Right: Instant Search & Expand/Collapse Controls */}
        <div className="flex items-center gap-2 grow sm:grow-0 justify-end">
          {/* Quick Search */}
          <div className="relative grow sm:w-48 sm:grow-0">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics..."
              className="w-full pl-8 pr-6 py-1 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#7045E8] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Expand / Collapse All Toggle */}
          <button
            type="button"
            onClick={isAllExpanded ? collapseAll : expandAll}
            className="px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-purple-50 hover:text-[#7045E8] border border-slate-200/80 transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
            title={isAllExpanded ? 'Collapse all modules' : 'Expand all modules'}
          >
            <Layers className="w-3 h-3 text-slate-500" />
            <span className="hidden sm:inline">{isAllExpanded ? 'Collapse All' : 'Expand All'}</span>
          </button>
        </div>
      </div>

      {/* ── 2. Compact Module Cards Accordion ── */}
      <div className="space-y-2.5">
        {filteredChapters.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-2">
            <BookOpen className="w-8 h-8 text-slate-300 mx-auto" />
            <h4 className="text-sm font-bold text-slate-700">No matching topics found</h4>
            <p className="text-xs text-slate-400">Try adjusting your search query or status filter.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
              className="mt-2 px-3 py-1 bg-[#7045E8] text-white text-xs font-semibold rounded-lg hover:brightness-110 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredChapters.map((chapter) => {
            const isExpanded = !!expandedChapters[chapter.id];
            
            // Stats for this module
            const totalCount = chapter.topics.length;
            const completedCount = chapter.topics.filter((t, idx) => {
              const p = getTopicProgressInfo(activeTabId, t.id, t.topicNum || idx + 1, courseKey);
              return p.isCompleted;
            }).length;
            const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
            const isModuleFullyCompleted = totalCount > 0 && completedCount === totalCount;

            return (
              <div
                key={chapter.id}
                className={`rounded-xl sm:rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'border-[#7045E8]/40 bg-white shadow-xs ring-1 ring-[#7045E8]/10'
                    : 'border-[#EAE5F5] bg-white hover:border-[#7045E8]/30 hover:shadow-2xs'
                }`}
              >
                {/* ── Compact Module Header ── */}
                <button
                  type="button"
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-3 text-left transition-colors duration-200 cursor-pointer hover:bg-slate-50/70 group"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    {/* Compact Module Pill */}
                    <div
                      className={`px-2 py-0.5 rounded-md font-extrabold text-[11px] shrink-0 border transition-colors ${
                        isModuleFullyCompleted
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : isExpanded
                          ? 'bg-[#7045E8] text-white border-[#7045E8]'
                          : 'bg-[#F6F2FF] text-[#7045E8] border-purple-100 group-hover:border-purple-300'
                      }`}
                    >
                      M{String(chapter.chapterNum).padStart(2, '0')}
                    </div>

                    {/* Title & Metadata (Improved Readability) */}
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm sm:text-[15px] font-bold text-[#111827] group-hover:text-[#6D28D9] transition-colors truncate m-0">
                          {cleanModuleTitle(chapter.title)}
                        </h3>
                        {isModuleFullyCompleted && (
                          <span className="text-[10.5px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 hidden sm:inline-flex items-center gap-0.5">
                            <Check className="w-2.5 h-2.5" />
                            <span>Done</span>
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#64748B] font-medium truncate mt-0.5 m-0">
                        {totalCount} Topics {chapter.subtitle ? `• ${chapter.subtitle.replace(/for Module \d+[:\s]*/i, 'for ')}` : ''}
                      </p>
                    </div>
                  </div>

                  {/* Right: Progress Meter & Animated Chevron */}
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    {/* Progress Bar & Ratio */}
                    <div className="hidden sm:flex items-center gap-2">
                      <div className="w-16 h-1.5 rounded-full bg-slate-100 border border-slate-200/80 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            isModuleFullyCompleted ? 'bg-emerald-500' : 'bg-[#6D28D9]'
                          }`}
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-[#64748B] tabular-nums">
                        {completedCount}/{totalCount}
                      </span>
                    </div>

                    {/* Percentage Pill */}
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-md tabular-nums ${
                        isModuleFullyCompleted
                          ? 'bg-emerald-50 text-emerald-700'
                          : percent > 0
                          ? 'bg-[#F5F3FF] text-[#6D28D9]'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {percent}%
                    </span>

                    {/* Compact Chevron */}
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200 ${
                        isExpanded
                          ? 'bg-[#F6F2FF] text-[#7045E8] rotate-180'
                          : 'text-slate-400 group-hover:text-[#7045E8] group-hover:bg-[#F6F2FF]'
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </button>

                {/* ── Compact Topics List ── */}
                <div
                  className={`grid transition-all duration-200 ease-in-out ${
                    isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden divide-y divide-[#F0EDF7] border-t border-[#F0EDF7] bg-white">
                    {chapter.topics.map((topic, tIdx) => {
                      const topicNum = topic.topicNum || tIdx + 1;
                      const isFree = isTopicUnlocked
                        ? isTopicUnlocked(courseKey, chapter.chapterNum, topicNum, activeTabId)
                        : true;
                      const isLocked = !isFree;

                      const progressInfo = getTopicProgressInfo(activeTabId, topic.id, topicNum, courseKey);
                      const isDone = progressInfo.isCompleted;
                      const isInProgress = !isDone && progressInfo.isInProgress;
                      const isRowHighlighted = String(highlightedTopicId) === String(topic.id);

                      return (
                        <div
                          key={topic.id}
                          id={`topic-row-${topic.id}`}
                          onClick={() => handleTopicAction(topic, chapter.chapterNum, topicNum)}
                          className={`group/topic px-3.5 sm:px-4 py-2.5 flex items-center justify-between gap-2.5 transition-all duration-150 cursor-pointer ${
                            isRowHighlighted
                              ? 'bg-purple-50/70 ring-1 ring-[#6D28D9] shadow-2xs'
                              : isDone
                              ? 'bg-white hover:bg-slate-50/70'
                              : isInProgress
                              ? 'bg-white hover:bg-slate-50/70 shadow-[inset_2px_0_0_#6D28D9]'
                              : 'bg-white hover:bg-slate-50/70'
                          }`}
                        >
                          {/* LEFT: Topic Index Badge + Title + Inline Meta */}
                          <div className="flex items-center gap-2.5 min-w-0">
                            {/* Numbered Status Circle */}
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10.5px] font-bold shrink-0 transition-all ${
                                isDone
                                  ? 'bg-emerald-500 text-white shadow-2xs'
                                  : isInProgress
                                  ? 'bg-[#7045E8] text-white ring-2 ring-purple-200'
                                  : isRowHighlighted
                                  ? 'bg-[#7045E8] text-white'
                                  : 'bg-slate-100 text-slate-500 border border-slate-200/90 group-hover/topic:border-purple-300 group-hover/topic:text-[#7045E8]'
                              }`}
                            >
                              {isDone ? <Check className="w-3 h-3 stroke-[3]" /> : topicNum}
                            </div>

                            {/* Title (Improved Readability) */}
                            <div className="flex items-center gap-2 min-w-0">
                              <span
                                className={`text-[13.5px] sm:text-sm truncate transition-colors ${
                                  isRowHighlighted
                                    ? 'text-[#6D28D9] font-bold'
                                    : isDone
                                    ? 'text-[#111827] font-semibold'
                                    : isInProgress
                                    ? 'text-[#111827] font-semibold'
                                    : 'text-slate-700 font-medium group-hover/topic:text-[#6D28D9]'
                                }`}
                              >
                                {topic.title}
                              </span>

                              {/* Duration Micro-Pill */}
                              {topic.duration && (
                                <span className="text-[11px] text-[#64748B] font-medium hidden sm:inline-flex items-center gap-1 shrink-0 px-1.5 py-0.5 rounded bg-slate-50 border border-slate-100">
                                  <Clock className="w-3 h-3" />
                                  <span>{topic.duration.replace(/^Video\s*•\s*/i, '')}</span>
                                </span>
                              )}

                              {isRowHighlighted && (
                                <span className="text-[9.5px] font-black text-[#7045E8] bg-purple-100 px-1.5 py-0.2 rounded-full shrink-0">
                                  Current
                                </span>
                              )}
                            </div>
                          </div>

                          {/* RIGHT: Unified Action Button / Status */}
                          <div className="flex items-center gap-2 shrink-0">
                            {/* 1. COMPLETED */}
                            {isDone && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleTopicAction(topic, chapter.chapterNum, topicNum);
                                }}
                                className="px-2.5 py-1 rounded-lg text-xs font-bold text-emerald-700 bg-white hover:bg-emerald-50 border border-emerald-300 shadow-2xs hover:shadow-xs transition-all flex items-center gap-1 cursor-pointer"
                                title="Review lesson"
                              >
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                <span>Review</span>
                              </button>
                            )}

                            {/* 2. IN-PROGRESS */}
                            {!isDone && isInProgress && !isLocked && (
                              <div className="flex items-center gap-2">
                                <div
                                  className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#F5F3FF] border border-[#DDD6FE]"
                                  title={`${progressInfo.percent}% completed`}
                                >
                                  <div className="w-7 h-1.5 rounded-full bg-[#E9E5F5] overflow-hidden">
                                    <div
                                      className="h-full rounded-full bg-[#7C3AED]"
                                      style={{ width: `${progressInfo.percent}%` }}
                                    />
                                  </div>
                                  <span className="text-[10.5px] font-bold text-[#6D28D9] tabular-nums">
                                    {progressInfo.percent}%
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleTopicAction(topic, chapter.chapterNum, topicNum);
                                  }}
                                  className="px-3 py-1 rounded-lg text-xs font-semibold text-white bg-[#6D28D9] hover:bg-[#5B21B6] shadow-2xs hover:shadow-xs transition-all flex items-center gap-1 cursor-pointer"
                                  title="Continue lesson"
                                >
                                  <span>Continue</span>
                                  <Play className="w-2 h-2 fill-white" />
                                </button>
                              </div>
                            )}

                            {/* 3. UNSTARTED & FREE (Neutral Appearance) */}
                            {!isDone && !isInProgress && !isLocked && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleTopicAction(topic, chapter.chapterNum, topicNum);
                                }}
                                className="px-3 py-1 rounded-lg text-xs font-bold text-slate-700 bg-white hover:bg-[#FAF5FF] hover:text-[#6D28D9] border border-slate-300 hover:border-[#7C3AED] shadow-2xs transition-all flex items-center gap-1 cursor-pointer"
                                title="Start topic"
                              >
                                <span>Start</span>
                                <Play className="w-2.5 h-2.5 fill-current" />
                              </button>
                            )}

                            {/* 4. LOCKED */}
                            {isLocked && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (onOpenUnlockModal) onOpenUnlockModal(topic.title);
                                }}
                                className="px-2.5 py-1 rounded-lg text-xs font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors flex items-center gap-1 cursor-pointer"
                                title="Enroll to unlock"
                              >
                                <Lock className="w-3 h-3 text-amber-600" />
                                <span>Unlock</span>
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
