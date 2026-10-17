import React, { useState, useMemo, useEffect } from 'react';
import {
  Home,
  Database,
  Table2,
  BarChart2,
  FolderGit2,
  Users2,
  BookOpen,
  ArrowLeft,
  Play,
  CheckCircle2,
  Sparkles,
  Award,
  Clock,
  Bot,
  HelpCircle,
  Code2,
  Check,
  ChevronRight,
  TrendingUp,
  FileText,
  Download,
  AlertCircle,
  Gamepad2,
  RotateCcw,
  Zap,
  Flame,
  FileCheck2
} from 'lucide-react';
import { PythonIcon } from '../common/TechIcons';
import { PythonGameQuest } from '../lesson/PythonGameQuest';
import { CodingChallengeSandbox } from '../lesson/CodingChallengeSandbox';
import { AiInterviewSection } from '../lesson/AiInterviewSection';
import { TopicScoreDashboard } from '../lesson/TopicScoreDashboard';
import { pythonModulesData, PythonTopic } from '../../data/pythonCourseData';
import confetti from 'canvas-confetti';

interface PythonLessonDetailViewProps {
  topicId?: number;
  onBackToCourse: () => void;
  onNavigateHome: () => void;
  onNavigateTab: (tab: string) => void;
  onOpenAiChat: (prompt?: string) => void;
  onSelectTopic?: (topicId: number) => void;
  onOpenAssessment?: (assessmentId: number) => void;
  userName?: string;
}

export type LessonStep = 'video' | 'mcq' | 'game' | 'code' | 'interview' | 'results';

export const PythonLessonDetailView: React.FC<PythonLessonDetailViewProps> = ({
  topicId = 1,
  onBackToCourse,
  onNavigateHome,
  onNavigateTab,
  onOpenAiChat,
  onSelectTopic,
  onOpenAssessment,
  userName = 'Subodh'
}) => {
  // Stepper State: Initial is 'video' (Overview is completely removed)
  const [activeStep, setActiveStep] = useState<LessonStep>('video');

  // Progression Unlock State (sequential gating)
  const [isVideoCompleted, setIsVideoCompleted] = useState(false);
  const [isMcqCompleted, setIsMcqCompleted] = useState(false);
  const [isGameCompleted, setIsGameCompleted] = useState(false);
  const [isCodingCompleted, setIsCodingCompleted] = useState(false);
  const [isInterviewCompleted, setIsInterviewCompleted] = useState(false);

  // Video State
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // MCQ State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<Record<number, boolean>>({});
  const [mcqScore, setMcqScore] = useState<number | null>(null);

  // Current topic from pythonModulesData
  const currentTopic: PythonTopic = useMemo(() => {
    for (const mod of pythonModulesData) {
      const found = mod.topics.find((t) => t.id === topicId);
      if (found) return found;
    }
    return pythonModulesData[0].topics[0];
  }, [topicId]);

  // All topics list
  const allTopicsList = useMemo(() => {
    return pythonModulesData.flatMap((m) => m.topics);
  }, []);

  // Next topic
  const nextTopic = useMemo(() => {
    const curIdx = allTopicsList.findIndex((t) => t.id === currentTopic.id);
    if (curIdx >= 0 && curIdx < allTopicsList.length - 1) {
      return allTopicsList[curIdx + 1];
    }
    return null;
  }, [allTopicsList, currentTopic]);

  // Default fallback MCQs
  const defaultMcqs = [
    {
      id: 1,
      question: 'What is Python?',
      options: ['Database', 'Programming Language', 'Operating System', 'Web Browser'],
      correct: 1,
      explanation: 'Python is a high-level, interpreted programming language widely used in data analytics, web dev, and AI.'
    },
    {
      id: 2,
      question: 'Which function is commonly used to display output in Python?',
      options: ['show()', 'display()', 'print()', 'output()'],
      correct: 2,
      explanation: 'The print() function is Python’s standard built-in function to display text or values to the console.'
    },
    {
      id: 3,
      question: 'Which of these is a valid Python variable?',
      options: ['1name', 'user-name', 'user_name', 'user name'],
      correct: 2,
      explanation: 'Variable names cannot start with numbers, cannot have hyphens or spaces. They can use underscores (e.g. user_name).'
    },
    {
      id: 4,
      question: 'Which tool is commonly used to write and run Python code?',
      options: ['VS Code', 'Excel', 'PowerPoint', 'Photoshop'],
      correct: 0,
      explanation: 'VS Code (Visual Studio Code) is one of the most popular code editors for writing, debugging, and running Python code.'
    },
    {
      id: 5,
      question: 'Which symbol is used to start a comment in Python?',
      options: ['//', '#', '<!--', '**'],
      correct: 1,
      explanation: 'In Python, comments start with the hash symbol (#) and are ignored by the Python interpreter.'
    }
  ];

  // Active topic MCQs
  const mcqs = currentTopic.mcqs && currentTopic.mcqs.length > 0 ? currentTopic.mcqs : defaultMcqs;

  // Reset step progression when topicId changes
  useEffect(() => {
    setActiveStep('video');
    setIsVideoCompleted(false);
    setIsMcqCompleted(false);
    setIsGameCompleted(false);
    setIsCodingCompleted(false);
    setIsInterviewCompleted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setIsAnswerSubmitted({});
    setMcqScore(null);
  }, [currentTopic.id]);

  // Video completion handler
  const handleCompleteVideo = () => {
    setIsPlayingVideo(false);
    setIsVideoCompleted(true);
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    } catch {
      // ignore
    }
    setActiveStep('mcq');
  };

  // MCQ Selection & Submission
  const handleSelectOption = (optionIndex: number) => {
    if (isAnswerSubmitted[currentQuestionIndex]) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionIndex
    }));
    setIsAnswerSubmitted((prev) => ({
      ...prev,
      [currentQuestionIndex]: true
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < mcqs.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Calculate score
      let correctCount = 0;
      mcqs.forEach((q, idx) => {
        if (selectedAnswers[idx] === q.correct) correctCount++;
      });
      setMcqScore(correctCount);
      setIsMcqCompleted(true);
      try {
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
      } catch {
        // ignore
      }
    }
  };

  // Check if step is available
  const isStepAvailable = (step: LessonStep) => {
    switch (step) {
      case 'video':
        return true;
      case 'mcq':
        return isVideoCompleted;
      case 'game':
        return isMcqCompleted;
      case 'code':
        return isGameCompleted;
      case 'interview':
        return isCodingCompleted;
      case 'results':
        return isInterviewCompleted;
    }
  };

  const handleStepClick = (step: LessonStep) => {
    if (isStepAvailable(step)) {
      setActiveStep(step);
    }
  };

  // Practice again resets the flow
  const handlePracticeAgain = () => {
    setActiveStep('video');
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setIsAnswerSubmitted({});
    setMcqScore(null);
  };

  // Continue to Next Topic handler
  const handleContinueToNextTopic = () => {
    if (!nextTopic) {
      onBackToCourse();
      return;
    }
    if (nextTopic.isAssessment && onOpenAssessment) {
      onOpenAssessment(nextTopic.id);
    } else if (onSelectTopic) {
      onSelectTopic(nextTopic.id);
    } else {
      onBackToCourse();
    }
  };

  // Stepper definition
  const stepperItems: { id: LessonStep; number: string; label: string; completed: boolean }[] = [
    { id: 'video', number: '①', label: 'Watch Video', completed: isVideoCompleted },
    { id: 'mcq', number: '②', label: 'MCQ', completed: isMcqCompleted },
    { id: 'game', number: '③', label: 'Python Game', completed: isGameCompleted },
    { id: 'code', number: '④', label: 'Coding Challenge', completed: isCodingCompleted },
    { id: 'interview', number: '⑤', label: 'AI Interview', completed: isInterviewCompleted },
    { id: 'results', number: '⑥', label: 'Topic Score', completed: isInterviewCompleted }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans pb-20">
      {/* 2. THREE-COLUMN DESKTOP LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 flex flex-col lg:flex-row gap-6 items-start">
        {/* =========================================================================
            LEFT SIDEBAR: Course Navigation
           ========================================================================= */}
        <aside className="w-full lg:w-60 shrink-0 space-y-4">
          <div className="bg-white rounded-3xl p-3 sm:p-4 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-3 py-1 block">
              Quick Navigation
            </span>

            {[
              { id: 'home', label: 'Home', icon: Home, action: onNavigateHome },
              { id: 'python', label: 'Python (Active)', icon: PythonIcon, active: true, action: onBackToCourse },
              { id: 'sql', label: 'SQL', icon: Database, action: () => onNavigateTab('sql') },
              { id: 'excel', label: 'Excel', icon: Table2, action: () => onNavigateTab('excel') },
              { id: 'powerbi', label: 'Power BI', icon: BarChart2, action: () => onNavigateTab('powerbi') },
              { id: 'projects', label: 'Projects', icon: FolderGit2, action: () => onNavigateTab('projects') },
              { id: 'interview', label: 'Interview', icon: Users2, action: () => onNavigateTab('interview') }
            ].map((item) => {
              const IconComp = item.icon;
              const isActive = item.active;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer relative ${
                    isActive
                      ? 'bg-blue-50/80 text-blue-700 shadow-2xs font-extrabold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 bg-blue-600 rounded-r" />
                  )}
                  <IconComp className={`w-4 h-4 shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* AI Robot Quick Tip Card */}
          <div className="bg-white rounded-3xl p-4 border border-blue-100 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex flex-col items-center text-center">
            <div className="w-full h-28 rounded-2xl overflow-hidden bg-gradient-to-b from-blue-50 to-indigo-50/40 flex items-center justify-center p-2 mb-3">
              <Bot className="w-12 h-12 text-blue-600" />
            </div>
            <button
              onClick={() => onOpenAiChat(`Help me learn ${currentTopic.title} step-by-step!`)}
              className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-[11px] shadow-sm flex items-center justify-center gap-1 cursor-pointer transition-all"
            >
              <span>Ask AI About This Topic →</span>
            </button>
          </div>
        </aside>

        {/* =========================================================================
            CENTER MAIN CANVAS: Hero + 6-Step Stepper + Dynamic Step Content
           ========================================================================= */}
        <div className="flex-1 min-w-0 w-full space-y-5">
          {/* 1. LESSON HERO BANNER */}
          <div className="relative rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
            <div className="relative z-10 text-left space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <button
                  onClick={onBackToCourse}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Curriculum</span>
                </button>

                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/80 text-[10px] font-bold">
                  <Sparkles className="w-3 h-3 text-blue-600" />
                  <span>Module {currentTopic.module}: {currentTopic.moduleTitle}</span>
                </span>
              </div>

              {/* Title & Badge */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center p-2 shrink-0 shadow-2xs">
                  <PythonIcon className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                      UNLOCKED
                    </span>
                    <span className="text-xs text-slate-400 font-bold">
                      Topic {currentTopic.id} of 20
                    </span>
                  </div>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight mt-0.5">
                    {currentTopic.title}
                  </h1>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3">
                {currentTopic.subtitle}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>{currentTopic.duration}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[11px] font-bold">
                  <span>Beginner to Pro</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200/80 text-[11px] font-bold">
                  <span>Hands-on Interactive</span>
                </span>
              </div>
            </div>
          </div>

          {/* 2. HORIZONTAL 6-STEP PROGRESS STEPPER */}
          {/* ① Watch Video → ② MCQ → ③ Python Game → ④ Coding Challenge → ⑤ AI Interview → ⑥ Topic Score */}
          <div className="bg-white rounded-2xl p-2 border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-1.5 min-w-max">
              {stepperItems.map((item, idx) => {
                const isCurrent = activeStep === item.id;
                const isAvailable = isStepAvailable(item.id);
                const isCompleted = item.completed;

                return (
                  <button
                    key={item.id}
                    data-testid={`stepper-tab-${item.id}`}
                    onClick={() => handleStepClick(item.id)}
                    disabled={!isAvailable}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all relative cursor-pointer ${
                      isCurrent
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 font-extrabold'
                        : isCompleted
                        ? 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-bold border border-emerald-200/70'
                        : isAvailable
                        ? 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/70'
                        : 'bg-slate-50/60 text-slate-400 opacity-60 cursor-not-allowed border border-transparent'
                    }`}
                  >
                    <span className="text-[11px] font-mono">{item.number}</span>
                    <span className="truncate">{item.label}</span>
                    {isCompleted && !isCurrent && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    )}
                    {idx < stepperItems.length - 1 && (
                      <span className="text-slate-300 ml-1">→</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. STEP CONTENT CANVAS */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            {/* STEP 1: WATCH VIDEO */}
            {activeStep === 'video' && (
              <div className="space-y-6 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div>
                    <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                      Step 1: Watch Video Lesson
                    </h2>
                    <p className="text-xs text-slate-500">
                      Watch the complete walkthrough video to unlock the 5 MCQs assessment.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full self-start sm:self-auto border border-blue-100">
                    Step 1 of 6
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                  {/* Left: Video Player */}
                  <div className="md:col-span-7 relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-md group flex flex-col justify-between min-h-[260px]">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/60" />

                    <div className="relative z-10 p-3 flex justify-between items-center text-white">
                      <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-md">
                        {currentTopic.title}
                      </span>
                      <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-md">
                        {currentTopic.duration}
                      </span>
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center p-4">
                      <button
                        data-testid="video-play-btn"
                        onClick={() => {
                          setIsPlayingVideo(!isPlayingVideo);
                          if (!isVideoCompleted) handleCompleteVideo();
                        }}
                        className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-xl shadow-blue-600/40 hover:scale-105 transition-all cursor-pointer"
                      >
                        <Play className="w-7 h-7 fill-white ml-1" />
                      </button>
                      <span className="text-xs font-bold text-white mt-2.5 drop-shadow-md">
                        {isVideoCompleted ? 'Rewatch Video' : 'Play & Complete Video'}
                      </span>
                    </div>

                    <div className="relative z-10 p-3 bg-slate-950/85 backdrop-blur-md border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-300">
                      <span>Status: {isVideoCompleted ? 'Watched 100%' : 'Required to unlock MCQ'}</span>
                      <button
                        data-testid="mark-watched-btn"
                        onClick={handleCompleteVideo}
                        className="text-xs font-bold text-blue-400 hover:text-white underline cursor-pointer"
                      >
                        Mark Watched
                      </button>
                    </div>
                  </div>

                  {/* Right: Topics Covered (DYNAMIC OBJECTIVES) */}
                  <div className="md:col-span-5 bg-slate-50/70 rounded-2xl p-5 border border-slate-200/80 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">
                        Topics Covered In This Lesson
                      </h3>
                      <div className="space-y-1.5 text-xs text-slate-600 max-h-56 overflow-y-auto pr-1">
                        {currentTopic.objectives.map((topicItem, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                            <span>{topicItem}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-200/80">
                      <button
                        data-testid="next-step-mcq-btn"
                        onClick={handleCompleteVideo}
                        className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md shadow-blue-500/20 flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-95"
                      >
                        <span>Continue to MCQ Assessment →</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: MCQ (5 QUESTIONS) */}
            {activeStep === 'mcq' && (
              <div className="space-y-6 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div>
                    <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                      Step 2: Multiple Choice Questions
                    </h2>
                    <p className="text-xs text-slate-500">
                      Answer 5 quick conceptual questions to test your understanding before the game.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full self-start sm:self-auto border border-blue-100">
                    Question {currentQuestionIndex + 1} of {mcqs.length}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / mcqs.length) * 100}%` }}
                  />
                </div>

                {/* Current Question */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-mono bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    {currentQuestionIndex + 1}. {mcqs[currentQuestionIndex].question}
                  </h3>

                  <div className="space-y-2.5">
                    {mcqs[currentQuestionIndex].options.map((option, optIdx) => {
                      const isSelected = selectedAnswers[currentQuestionIndex] === optIdx;
                      const isSubmitted = isAnswerSubmitted[currentQuestionIndex];
                      const isCorrect = optIdx === mcqs[currentQuestionIndex].correct;

                      let btnStyle = 'border-slate-200 hover:border-blue-400 hover:bg-slate-50 text-slate-700';

                      if (isSubmitted) {
                        if (isCorrect) {
                          btnStyle = 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-bold';
                        } else if (isSelected && !isCorrect) {
                          btnStyle = 'border-rose-400 bg-rose-50 text-rose-950 font-bold';
                        }
                      } else if (isSelected) {
                        btnStyle = 'border-blue-600 bg-blue-50/60 text-blue-950 font-bold';
                      }

                      return (
                        <button
                          key={optIdx}
                          data-testid={`mcq-opt-${optIdx}`}
                          disabled={isSubmitted}
                          onClick={() => handleSelectOption(optIdx)}
                          className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all flex items-center justify-between text-xs sm:text-sm cursor-pointer ${btnStyle}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-mono font-bold text-xs">
                              {['A', 'B', 'C', 'D'][optIdx]}
                            </span>
                            <span className="font-mono">{option}</span>
                          </div>
                          {isSubmitted && isCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation banner if submitted */}
                  {isAnswerSubmitted[currentQuestionIndex] && (
                    <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/70 text-xs text-blue-950 animate-in fade-in duration-200">
                      <span className="font-extrabold block mb-1">💡 Explanation:</span>
                      <p>{mcqs[currentQuestionIndex].explanation}</p>
                    </div>
                  )}

                  {/* Next question / Game unlock button */}
                  <div className="pt-4 flex justify-end">
                    {isAnswerSubmitted[currentQuestionIndex] && (
                      <button
                        data-testid="mcq-next-btn"
                        onClick={() => {
                          if (currentQuestionIndex < mcqs.length - 1) {
                            handleNextQuestion();
                          } else {
                            handleNextQuestion();
                            setActiveStep('game');
                          }
                        }}
                        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md shadow-blue-500/20 flex items-center gap-1.5 cursor-pointer transition-all active:scale-95"
                      >
                        <span>
                          {currentQuestionIndex < mcqs.length - 1
                            ? 'Next Question →'
                            : 'Finish & Unlock Python Game →'}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: PYTHON GAME */}
            {activeStep === 'game' && (
              <PythonGameQuest
                onComplete={() => {
                  setIsGameCompleted(true);
                  setActiveStep('code');
                }}
                userName={userName}
                gameTitle={currentTopic.gameTitle}
                gameType={currentTopic.gameType}
                topicTitle={currentTopic.title}
              />
            )}

            {/* STEP 4: CODING CHALLENGE */}
            {activeStep === 'code' && (
              <CodingChallengeSandbox
                onComplete={() => {
                  setIsCodingCompleted(true);
                  setActiveStep('interview');
                }}
                userName={userName}
                onOpenAiChat={onOpenAiChat}
                customChallenges={currentTopic.codingChallenges}
              />
            )}

            {/* STEP 5: AI INTERVIEW */}
            {activeStep === 'interview' && (
              <AiInterviewSection
                onComplete={() => {
                  setIsInterviewCompleted(true);
                  setActiveStep('results');
                }}
                userName={userName}
                customQuestions={currentTopic.interviewQuestions}
              />
            )}

            {/* STEP 6: TOPIC SCORE */}
            {activeStep === 'results' && (
              <TopicScoreDashboard
                onContinueNextTopic={handleContinueToNextTopic}
                onPracticeAgain={handlePracticeAgain}
                userName={userName}
                mcqScore={mcqScore || 4}
                topicTitle={currentTopic.title}
                nextTopicTitle={nextTopic?.title || 'Next Topic'}
              />
            )}
          </div>
        </div>

        {/* =========================================================================
            RIGHT SIDEBAR: Course Topics (ALL UNLOCKED - NO LOCK ICONS)
           ========================================================================= */}
        <aside className="w-full lg:w-80 shrink-0 space-y-4">
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <h3 className="text-sm font-black text-slate-900 tracking-tight mb-2">
              Python Course Topics
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              All 20 topics unlocked in development mode.
            </p>

            {/* Topic List */}
            <div className="space-y-1.5 max-h-96 overflow-y-auto pr-1 text-xs">
              {allTopicsList.map((topicItem) => {
                const isSelected = topicItem.id === currentTopic.id;
                const isAssessment = topicItem.isAssessment;

                return (
                  <button
                    key={topicItem.id}
                    onClick={() => {
                      if (isAssessment && onOpenAssessment) {
                        onOpenAssessment(topicItem.id);
                      } else if (onSelectTopic) {
                        onSelectTopic(topicItem.id);
                      }
                    }}
                    className={`w-full text-left p-2.5 rounded-xl transition-colors flex items-center justify-between gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white font-black shadow-xs'
                        : isAssessment
                        ? 'bg-indigo-50/70 hover:bg-indigo-100 text-indigo-950 font-bold border border-indigo-100'
                        : 'text-slate-700 hover:bg-slate-100 font-semibold'
                    }`}
                  >
                    <span className="flex items-center gap-2 truncate">
                      <span
                        className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-mono shrink-0 ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {topicItem.id}
                      </span>
                      <span className="truncate">{topicItem.title}</span>
                    </span>

                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md shrink-0 ${
                        isSelected
                          ? 'bg-white text-blue-700 font-black'
                          : isAssessment
                          ? 'bg-indigo-200 text-indigo-800'
                          : 'text-emerald-700 bg-emerald-50'
                      }`}
                    >
                      {isAssessment ? 'Exam' : 'Topic'}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={onBackToCourse}
              className="w-full text-center text-xs font-bold text-blue-600 hover:text-blue-700 pt-3 block cursor-pointer border-t border-slate-100 mt-3"
            >
              ← Back to Full Course Syllabus
            </button>
          </div>

          {/* AI Mentor Assistant Card */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex items-center gap-4">
            <div className="flex-1">
              <h4 className="text-xs font-black text-slate-900">Have questions?</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Ask your AI Mentor about any concept in {currentTopic.title}.
              </p>
              <button
                onClick={() =>
                  onOpenAiChat(`I have a question about ${currentTopic.title}. Can you explain it simply?`)
                }
                className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold cursor-pointer transition-colors"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Chat with AI &gt;</span>
              </button>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
              <Bot className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
