import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  Bookmark,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Bot,
  ChevronLeft,
  ChevronRight,
  Award,
  BarChart3,
  Check,
  X,
  FileCheck2,
  Timer,
  Play,
  Pause,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { assessmentsData, AssessmentConfig, AssessmentItem } from '../../data/assessmentData';

interface PythonAssessmentViewProps {
  assessmentId: number;
  onBackToCourse: () => void;
  onNavigateHome: () => void;
  userName?: string;
}

export const PythonAssessmentView: React.FC<PythonAssessmentViewProps> = ({
  assessmentId,
  onBackToCourse,
  onNavigateHome,
  userName = 'Subodh'
}) => {
  // Load Assessment Configuration
  const assessment: AssessmentConfig = useMemo(() => {
    return assessmentsData[assessmentId] || assessmentsData[8];
  }, [assessmentId]);

  // Quiz taking state
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  
  // Timer State (45 minutes = 2700 seconds)
  const initialSeconds = assessment.durationMinutes * 60;
  const [secondsRemaining, setSecondsRemaining] = useState<number>(initialSeconds);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);

  // Submission State
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'correct' | 'incorrect'>('all');

  // Timer Effect
  useEffect(() => {
    if (isSubmitted || isTimerPaused) return;

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitAssessment();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted, isTimerPaused]);

  // Format time mm:ss
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  // Questions status counts
  const totalQuestions = assessment.questions.length;
  const answeredCount = Object.keys(answers).length;
  const reviewCount = Object.values(markedForReview).filter(Boolean).length;
  const unansweredCount = totalQuestions - answeredCount;

  // Current Question
  const currentQuestion: AssessmentItem = assessment.questions[currentIdx] || assessment.questions[0];

  // Option selection
  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIndex
    }));
  };

  // Clear choice
  const handleClearChoice = () => {
    if (isSubmitted) return;
    setAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQuestion.id];
      return copy;
    });
  };

  // Toggle mark for review
  const handleToggleReview = () => {
    if (isSubmitted) return;
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id]
    }));
  };

  // Navigation
  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsSubmitModalOpen(true);
    }
  };

  // Submit assessment logic
  const handleSubmitAssessment = () => {
    setIsSubmitModalOpen(false);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Confetti celebration
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  // Results calculation
  const scoreStats = useMemo(() => {
    if (!isSubmitted) return { correct: 0, wrong: 0, skipped: 0, percentage: 0, xp: 0, passed: false, topicBreakdown: {} };

    let correct = 0;
    let wrong = 0;
    let skipped = 0;
    const topicBreakdown: Record<string, { total: number; correct: number }> = {};

    assessment.questions.forEach((q) => {
      const userAns = answers[q.id];
      const topic = q.topic || 'General';
      if (!topicBreakdown[topic]) {
        topicBreakdown[topic] = { total: 0, correct: 0 };
      }
      topicBreakdown[topic].total += 1;

      if (userAns === undefined) {
        skipped += 1;
      } else if (userAns === q.correct) {
        correct += 1;
        topicBreakdown[topic].correct += 1;
      } else {
        wrong += 1;
      }
    });

    const percentage = Math.round((correct / totalQuestions) * 100);
    const passed = correct >= assessment.passingScore;
    const xp = correct * 10 + (passed ? 100 : 25);

    return {
      correct,
      wrong,
      skipped,
      percentage,
      xp,
      passed,
      topicBreakdown
    };
  }, [isSubmitted, answers, assessment, totalQuestions]);

  // Filtered review questions
  const filteredQuestions = useMemo(() => {
    if (!isSubmitted) return [];
    return assessment.questions.filter((q) => {
      const userAns = answers[q.id];
      if (reviewFilter === 'correct') {
        return userAns === q.correct;
      }
      if (reviewFilter === 'incorrect') {
        return userAns !== q.correct;
      }
      return true;
    });
  }, [isSubmitted, assessment.questions, answers, reviewFilter]);

  // Retake quiz
  const handleRetake = () => {
    setAnswers({});
    setMarkedForReview({});
    setCurrentIdx(0);
    setSecondsRemaining(initialSeconds);
    setIsSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50 text-slate-800 font-sans pb-16">
      {/* 1. TOP NAVBAR */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Left: Back & Assessment Title */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onBackToCourse}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer shrink-0"
              title="Return to Python Course"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Course</span>
            </button>
            <div className="h-5 w-px bg-slate-200 hidden sm:block" />
            <div className="min-w-0">
              <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase block truncate">
                Module {assessment.moduleNumber} • Assessment #{assessment.id}
              </span>
              <h1 className="text-sm sm:text-base font-black text-slate-900 truncate">
                {assessment.title}
              </h1>
            </div>
          </div>

          {/* Right: Timer & Submit Button */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Live Timer */}
            {!isSubmitted && (
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all ${
                  secondsRemaining < 300
                    ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse'
                    : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <Timer className="w-4 h-4 text-blue-600" />
                <span>{formatTime(secondsRemaining)}</span>
                <button
                  onClick={() => setIsTimerPaused(!isTimerPaused)}
                  className="text-slate-400 hover:text-slate-700 cursor-pointer ml-1"
                  title={isTimerPaused ? 'Resume Timer' : 'Pause Timer'}
                >
                  {isTimerPaused ? <Play className="w-3 h-3 text-emerald-600" /> : <Pause className="w-3 h-3" />}
                </button>
              </div>
            )}

            {/* Submit Action */}
            {!isSubmitted ? (
              <button
                onClick={() => setIsSubmitModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 cursor-pointer transition-all active:scale-95 flex items-center gap-1.5"
              >
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>Submit Assessment</span>
              </button>
            ) : (
              <button
                onClick={onBackToCourse}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs cursor-pointer shadow-sm"
              >
                Done / Back to Course
              </button>
            )}
          </div>
        </div>

        {/* Question Progress Bar across screen */}
        {!isSubmitted && (
          <div className="w-full bg-slate-100 h-1">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-1 transition-all duration-300"
              style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
            />
          </div>
        )}
      </header>

      {/* 2. MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        {!isSubmitted ? (
          /* ACTIVE ASSESSMENT VIEW */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT / CENTER: QUESTION SOLVER (8 cols on lg) */}
            <div className="lg:col-span-8 space-y-4">
              {/* Question Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden">
                {/* Card Header info */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
                      Question {currentIdx + 1} of {totalQuestions}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold">
                      {currentQuestion.topic}
                    </span>
                  </div>

                  {/* Mark for review toggle */}
                  <button
                    onClick={handleToggleReview}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      markedForReview[currentQuestion.id]
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <Bookmark
                      className={`w-3.5 h-3.5 ${
                        markedForReview[currentQuestion.id] ? 'fill-amber-500 text-amber-600' : ''
                      }`}
                    />
                    <span>
                      {markedForReview[currentQuestion.id] ? 'Marked for Review' : 'Mark for Review'}
                    </span>
                  </button>
                </div>

                {/* Question Prompt */}
                <div className="mb-8">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed whitespace-pre-line font-mono text-sm sm:text-base bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
                    {currentQuestion.question}
                  </h2>
                </div>

                {/* 4 Selectable Options */}
                <div className="space-y-3 mb-8">
                  {currentQuestion.options.map((opt, optIdx) => {
                    const isSelected = answers[currentQuestion.id] === optIdx;
                    const optionLetter = ['A', 'B', 'C', 'D'][optIdx];

                    return (
                      <button
                        key={optIdx}
                        data-testid={`assessment-opt-${optIdx}`}
                        onClick={() => handleSelectOption(optIdx)}
                        className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-4 cursor-pointer group ${
                          isSelected
                            ? 'border-blue-600 bg-blue-50/60 shadow-sm text-blue-950 font-bold'
                            : 'border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/60 text-slate-700'
                        }`}
                      >
                        <span
                          className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                            isSelected
                              ? 'bg-blue-600 text-white shadow-xs'
                              : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                          }`}
                        >
                          {optionLetter}
                        </span>
                        <span className="text-sm font-medium leading-snug pt-0.5 font-mono text-[13px] sm:text-sm">
                          {opt}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Footer Controls: Prev, Clear, Next */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-slate-100">
                  <button
                    onClick={handlePrev}
                    disabled={currentIdx === 0}
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      currentIdx === 0
                        ? 'opacity-40 cursor-not-allowed text-slate-400 bg-slate-50'
                        : 'text-slate-700 bg-slate-100 hover:bg-slate-200 cursor-pointer'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  {answers[currentQuestion.id] !== undefined && (
                    <button
                      onClick={handleClearChoice}
                      className="text-xs font-semibold text-slate-500 hover:text-rose-600 transition-colors cursor-pointer px-3 py-1 rounded-lg hover:bg-rose-50"
                    >
                      Clear Choice
                    </button>
                  )}

                  <div className="flex items-center gap-2">
                    {currentIdx < totalQuestions - 1 ? (
                      <button
                        onClick={handleNext}
                        className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 cursor-pointer transition-all active:scale-95"
                      >
                        <span>Next</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={() => setIsSubmitModalOpen(true)}
                        className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-500/20 cursor-pointer transition-all active:scale-95"
                      >
                        <Check className="w-4 h-4" />
                        <span>Review & Submit</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Tips & Instructions reminder */}
              <div className="bg-blue-50/40 rounded-2xl p-4 border border-blue-100 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>
                    Each question awards <strong>10 XP</strong>. Passing threshold is{' '}
                    <strong>{assessment.passingScore}/40 (70%)</strong>.
                  </span>
                </span>
                <span className="text-[11px] font-bold text-blue-700 hidden sm:inline">
                  Question {currentIdx + 1} of 40
                </span>
              </div>
            </div>

            {/* RIGHT SIDEBAR: QUESTION PALETTE & AI PROCTOR (4 cols on lg) */}
            <div className="lg:col-span-4 space-y-5">
              {/* Question Palette Card */}
              <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-black text-slate-900">Question Palette</h3>
                  <span className="text-xs font-bold text-slate-500">
                    {answeredCount} / {totalQuestions} Answered
                  </span>
                </div>

                {/* Legend badges */}
                <div className="grid grid-cols-3 gap-2 mb-4 text-[11px] font-bold">
                  <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-100">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span>Answered ({answeredCount})</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-100">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span>Review ({reviewCount})</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 text-slate-600 border border-slate-200">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span>Remaining ({unansweredCount})</span>
                  </div>
                </div>

                {/* 40 Grid Buttons */}
                <div className="grid grid-cols-8 gap-2 mb-6">
                  {assessment.questions.map((q, idx) => {
                    const isCurrent = idx === currentIdx;
                    const isAnswered = answers[q.id] !== undefined;
                    const isMarked = markedForReview[q.id];

                    let btnClass = 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200';

                    if (isAnswered && isMarked) {
                      btnClass = 'bg-amber-100 text-amber-900 border-amber-400 font-black';
                    } else if (isAnswered) {
                      btnClass = 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold';
                    } else if (isMarked) {
                      btnClass = 'bg-amber-50 text-amber-800 border-amber-300 font-bold';
                    }

                    if (isCurrent) {
                      btnClass += ' ring-2 ring-blue-600 ring-offset-2 scale-105 z-10';
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => setCurrentIdx(idx)}
                        className={`h-8 rounded-lg border text-xs font-mono transition-all flex items-center justify-center cursor-pointer relative ${btnClass}`}
                        title={`Question ${idx + 1}: ${isAnswered ? 'Answered' : 'Unanswered'}${isMarked ? ' (Marked for review)' : ''}`}
                      >
                        <span>{idx + 1}</span>
                        {isMarked && (
                          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500 ring-1 ring-white" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Action button inside card */}
                <button
                  onClick={() => setIsSubmitModalOpen(true)}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-xs shadow-md shadow-blue-500/20 cursor-pointer transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <FileCheck2 className="w-4 h-4" />
                  <span>Finalize & Submit Exam</span>
                </button>
              </div>

              {/* AI Mentor Proctor Card */}
              <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-3xl p-5 sm:p-6 shadow-lg relative overflow-hidden">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-blue-200 uppercase tracking-wider">
                      AI Exam Coach
                    </h4>
                    <span className="text-[11px] text-slate-300 font-medium">Real-Time Proctor</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  "Stay calm and read each question carefully, Subodh. For tricky slicing and loop
                  indices, trace the values step-by-step. Remember you can mark questions and return
                  later."
                </p>
                <div className="flex items-center justify-between text-[11px] text-blue-300 font-semibold pt-3 border-t border-white/10">
                  <span>Target: ≥ 70% Mastery</span>
                  <span>45m Total Time</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* ASSESSMENT RESULTS & COMPREHENSIVE PERFORMANCE ANALYTICS VIEW            */
          /* ========================================================================= */
          <div className="max-w-4xl mx-auto space-y-6">
            {/* 1. Results Summary Hero Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-center relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black border border-emerald-200 mb-4">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Assessment Completed Successfully</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
                {scoreStats.passed ? 'Skill Mastery Achieved! 🎉' : 'Assessment Completed'}
              </h2>
              <p className="text-sm text-slate-500 max-w-lg mx-auto mb-6">
                You scored{' '}
                <strong className="text-slate-900">
                  {scoreStats.correct} out of {totalQuestions}
                </strong>{' '}
                ({scoreStats.percentage}% accuracy) on{' '}
                <span className="text-blue-600 font-bold">{assessment.title}</span>.
              </p>

              {/* 4 Score Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-8">
                <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4">
                  <div className="text-2xl font-black text-emerald-700">{scoreStats.correct}</div>
                  <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider mt-0.5">
                    Correct Answers
                  </div>
                </div>

                <div className="bg-rose-50/70 border border-rose-100 rounded-2xl p-4">
                  <div className="text-2xl font-black text-rose-700">{scoreStats.wrong}</div>
                  <div className="text-[11px] font-bold text-rose-600 uppercase tracking-wider mt-0.5">
                    Incorrect
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                  <div className="text-2xl font-black text-slate-700">{scoreStats.skipped}</div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                    Unanswered
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-100 rounded-2xl p-4">
                  <div className="text-2xl font-black text-amber-700">+{scoreStats.xp} XP</div>
                  <div className="text-[11px] font-bold text-amber-600 uppercase tracking-wider mt-0.5">
                    XP Awarded
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={onBackToCourse}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-xs sm:text-sm shadow-md shadow-blue-500/20 cursor-pointer transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>Continue Course Journey →</span>
                </button>
                <button
                  onClick={handleRetake}
                  className="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm cursor-pointer transition-all flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4 text-slate-600" />
                  <span>Retake Assessment</span>
                </button>
              </div>
            </div>

            {/* 2. Topic-wise Performance Analytics */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-base font-black text-slate-900">Topic-Wise Analytics</h3>
                  <p className="text-xs text-slate-500">Breakdown of mastery across each evaluated concept</p>
                </div>
                <BarChart3 className="w-5 h-5 text-blue-600" />
              </div>

              <div className="space-y-4">
                {Object.entries(scoreStats.topicBreakdown).map(([topicName, stats]) => {
                  const pct = Math.round((stats.correct / stats.total) * 100);
                  let color = 'bg-emerald-500';
                  if (pct < 50) color = 'bg-rose-500';
                  else if (pct < 75) color = 'bg-amber-500';

                  return (
                    <div key={topicName} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-slate-800">{topicName}</span>
                        <span className="text-slate-500">
                          {stats.correct} / {stats.total} ({pct}%)
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${color}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. AI Mentor Diagnostic Recommendations */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-7 shadow-lg relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-blue-200">AI Mentor Diagnostic Feedback</h3>
                  <span className="text-xs text-slate-300">Personalized for {userName}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                {scoreStats.passed
                  ? `Outstanding command of Python! You demonstrated consistent understanding across syntax, logic, and data manipulations. You're ready to proceed to next-stage modules and hands-on projects.`
                  : `Good effort! You showed promising grasp in key areas, but reviewing edge cases and re-running coding challenges will solidify your foundational muscle memory. Retake when you feel ready!`}
              </p>
              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs text-blue-100 flex items-center justify-between">
                <span>Recommended next step: Continue to next module lessons</span>
                <button
                  onClick={onBackToCourse}
                  className="font-bold text-white underline hover:text-blue-200 cursor-pointer"
                >
                  Open Python Syllabus →
                </button>
              </div>
            </div>

            {/* 4. Detailed Question-by-Question Review */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-base font-black text-slate-900">Question-by-Question Review</h3>
                  <p className="text-xs text-slate-500">
                    Verify each answer with full step-by-step explanations
                  </p>
                </div>

                {/* Filter buttons */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 text-xs font-bold">
                  <button
                    onClick={() => setReviewFilter('all')}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      reviewFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    All ({totalQuestions})
                  </button>
                  <button
                    onClick={() => setReviewFilter('correct')}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      reviewFilter === 'correct'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-600'
                    }`}
                  >
                    Correct ({scoreStats.correct})
                  </button>
                  <button
                    onClick={() => setReviewFilter('incorrect')}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      reviewFilter === 'incorrect' ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Incorrect ({scoreStats.wrong + scoreStats.skipped})
                  </button>
                </div>
              </div>

              {/* Questions List */}
              <div className="space-y-4">
                {filteredQuestions.map((q) => {
                  const userAns = answers[q.id];
                  const isCorrect = userAns === q.correct;
                  const isSkipped = userAns === undefined;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        isCorrect
                          ? 'border-emerald-200 bg-emerald-50/20'
                          : isSkipped
                          ? 'border-slate-200 bg-slate-50/50'
                          : 'border-rose-200 bg-rose-50/20'
                      }`}
                    >
                      {/* Question meta header */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-slate-500">
                          Question {q.id} • {q.topic}
                        </span>
                        {isCorrect ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black">
                            <Check className="w-3.5 h-3.5" /> Correct
                          </span>
                        ) : isSkipped ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[11px] font-bold">
                            Unanswered
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[11px] font-black">
                            <X className="w-3.5 h-3.5" /> Incorrect
                          </span>
                        )}
                      </div>

                      {/* Question text */}
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-mono mb-4 whitespace-pre-line bg-white/80 p-3 rounded-xl border border-slate-100">
                        {q.question}
                      </h4>

                      {/* Options listing */}
                      <div className="space-y-2 mb-3">
                        {q.options.map((opt, optIdx) => {
                          const isOptionCorrect = optIdx === q.correct;
                          const isUserSelected = optIdx === userAns;

                          let style = 'bg-white border-slate-200 text-slate-700';
                          if (isOptionCorrect) {
                            style = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold';
                          } else if (isUserSelected && !isOptionCorrect) {
                            style = 'bg-rose-50 border-rose-300 text-rose-900 font-semibold line-through';
                          }

                          return (
                            <div
                              key={optIdx}
                              className={`p-2.5 rounded-xl border text-xs font-mono flex items-center justify-between ${style}`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="font-black text-slate-500">
                                  {['A', 'B', 'C', 'D'][optIdx]}.
                                </span>
                                <span>{opt}</span>
                              </div>
                              {isOptionCorrect && (
                                <span className="text-[10px] uppercase font-black text-emerald-700">
                                  Correct Answer
                                </span>
                              )}
                              {isUserSelected && !isOptionCorrect && (
                                <span className="text-[10px] uppercase font-black text-rose-600">
                                  Your Choice
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation box */}
                      <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-100 text-xs text-slate-700">
                        <strong className="text-blue-900 font-bold block mb-1">
                          💡 Explanation:
                        </strong>
                        <p>{q.explanation}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 3. SUBMISSION CONFIRMATION MODAL */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
              <FileCheck2 className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-black text-slate-900 text-center mb-1">
              Submit Assessment?
            </h3>
            <p className="text-xs text-slate-500 text-center mb-6">
              Review your progress before submitting. Once finalized, your responses will be evaluated.
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 space-y-2.5 mb-6 text-xs font-semibold">
              <div className="flex items-center justify-between text-emerald-700">
                <span>Questions Answered:</span>
                <span className="font-mono font-bold text-sm">
                  {answeredCount} / {totalQuestions}
                </span>
              </div>
              <div className="flex items-center justify-between text-amber-700">
                <span>Marked for Review:</span>
                <span className="font-mono font-bold text-sm">{reviewCount}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Unanswered Questions:</span>
                <span className="font-mono font-bold text-sm">{unansweredCount}</span>
              </div>
              <div className="flex items-center justify-between text-blue-700 pt-2 border-t border-slate-200">
                <span>Time Remaining:</span>
                <span className="font-mono font-bold text-sm">{formatTime(secondsRemaining)}</span>
              </div>
            </div>

            {unansweredCount > 0 && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-[11px] mb-6">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>You still have {unansweredCount} unanswered questions.</span>
              </div>
            )}

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer transition-colors"
              >
                Back to Test
              </button>
              <button
                onClick={handleSubmitAssessment}
                className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs cursor-pointer shadow-md shadow-blue-500/20 transition-all active:scale-95"
              >
                Confirm & Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
