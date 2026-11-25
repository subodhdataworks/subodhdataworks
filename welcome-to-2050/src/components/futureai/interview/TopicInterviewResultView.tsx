import React, { useState, useEffect, useMemo } from 'react';
import {
  Trophy,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Download,
  ArrowRight,
  ArrowLeft,
  Target,
  BarChart3,
  Clock,
  Eye,
  Info,
  Zap,
  HelpCircle,
  SkipForward,
  History,
  Check,
  ThumbsUp,
  MessageSquare,
} from 'lucide-react';
import {
  TopicAttemptResult,
  CourseInterviewSummary,
  ModuleInterviewSummary,
  downloadTopicReportPdf,
  formatDurationCompact,
} from '../../../services/interviewPrepEngine';

interface TopicInterviewResultViewProps {
  result: TopicAttemptResult;
  attemptHistory: TopicAttemptResult[];
  hasNextTopic: boolean;
  nextTopicTitle?: string;
  onSelectAttempt: (attempt: TopicAttemptResult) => void;
  onRetryTopic: () => void;
  onBackToTopics: () => void;
  onStartNextTopic: () => void;
  onOpenSummary: () => void;
}

/**
 * Helper to keep feedback concise (max 1-2 short sentences) without altering underlying data.
 */
function toConciseSentences(text: string, maxSentences = 2): string {
  const clean = (text || '').trim();
  if (!clean) return '';
  const parts = clean
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  return parts.slice(0, maxSentences).join(' ');
}

export const TopicInterviewResultView: React.FC<TopicInterviewResultViewProps> = ({
  result,
  attemptHistory,
  hasNextTopic,
  nextTopicTitle,
  onSelectAttempt,
  onRetryTopic,
  onStartNextTopic,
}) => {
  // Detailed feedback collapsed by default
  const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);
  const [expandedIds, setExpandedIds] = useState<number[]>([]);
  const [openModelAnswerIds, setOpenModelAnswerIds] = useState<number[]>([]);

  useEffect(() => {
    setExpandedIds([]);
    setOpenModelAnswerIds([]);
  }, [result?.attemptId]);

  if (!result || !Array.isArray(result.questionRecords) || result.totalQuestions <= 0) {
    return (
      <div className="bg-white rounded-2xl border border-[#E9E5F5] shadow-[0_2px_10px_rgba(109,40,217,0.03)] p-4 text-center flex flex-col items-center gap-2">
        <div className="w-8 h-8 rounded-xl bg-[#F5F3FF] text-[#6D28D9] flex items-center justify-center">
          <AlertCircle className="w-4 h-4" />
        </div>
        <h3 className="text-sm font-extrabold text-[#111827] m-0">
          Evaluation Result Unavailable
        </h3>
        <p className="text-[12px] text-[#64748B] max-w-md m-0">
          We could not load a valid evaluation record for this attempt.
        </p>
      </div>
    );
  }

  const toggleExpandQuestion = (qId: number) => {
    setExpandedIds((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId]
    );
  };

  const toggleModelAnswer = (qId: number) => {
    setOpenModelAnswerIds((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId]
    );
  };

  const handleReviewAnswersClick = () => {
    setIsDetailsOpen(true);
    setExpandedIds(result.questionRecords.map((r) => r.questionId));
    setTimeout(() => {
      const el = document.getElementById('topic-detailed-feedback-panel');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 60);
  };

  const displayScorePct =
    typeof result.overallScorePct === 'number'
      ? result.overallScorePct
      : result.answeredCount === 0 && result.skippedCount > 0
      ? 0
      : null;

  const isNeedsPractice =
    result.performanceLabel === 'Needs Practice' ||
    (displayScorePct !== null && displayScorePct < 50);

  const effectiveStatusLabel = isNeedsPractice
    ? 'Needs Practice'
    : result.performanceLabel || (displayScorePct === null ? 'Not Evaluated' : 'Evaluated');

  // Fixed 104px circular score geometry (never expands beyond 104x104)
  const circleSizePx = 104;
  const ringRadius = 42;
  const ringCircumference = 2 * Math.PI * ringRadius;
  const clampedScore = displayScorePct !== null ? Math.min(100, Math.max(2, displayScorePct)) : 0;
  const ringOffset =
    displayScorePct === null
      ? ringCircumference
      : ringCircumference * (1 - clampedScore / 100);

  // Derive concise, truthful Strengths (max 2 short sentences; never invent positive feedback)
  const conciseStrengths = useMemo(() => {
    const evaluatedRecords = result.questionRecords.filter(
      (r) => !r.skipped && r.evaluation !== null
    );
    if (evaluatedRecords.length === 0) return [];

    const strongRecords = evaluatedRecords.filter(
      (r) => (r.evaluation?.scoreOutOf10 || 0) >= 6.5
    );
    const matchedConcepts = Array.from(
      new Set(strongRecords.flatMap((r) => r.evaluation?.matchedConcepts || []))
    );

    const points: string[] = [];

    if (matchedConcepts.length > 0) {
      points.push(
        `Clearly explained key concepts including ${matchedConcepts.slice(0, 2).join(' and ')}.`
      );
    }

    if (strongRecords.length > 0) {
      points.push(
        `Delivered accurate, well-structured answers on ${strongRecords.length} of ${result.totalQuestions} questions.`
      );
    } else if (
      (result.communicationFeedback?.clarity || 0) >= 7.0 &&
      (result.communicationFeedback?.relevance || 0) >= 6.5
    ) {
      points.push('Communicated responses with clear and relevant language.');
    }

    if (points.length === 0 && Array.isArray(result.strengths)) {
      const validSaved = result.strengths.filter(
        (s) =>
          !/insufficient|no evaluated answers|keep practicing|focus on covering/i.test(s) &&
          (displayScorePct ?? 0) >= 50
      );
      validSaved.slice(0, 2).forEach((s) => points.push(toConciseSentences(s, 1)));
    }

    return points.slice(0, 2);
  }, [result, displayScorePct]);

  // Derive max 2 prioritized, short, non-repeating Areas for Improvement (never truncated)
  const conciseImprovements = useMemo(() => {
    const evaluatedRecords = result.questionRecords.filter(
      (r) => !r.skipped && r.evaluation !== null
    );
    const points: string[] = [];

    if (result.skippedCount > 0) {
      points.push(
        result.skippedCount === 1
          ? 'Complete your 1 skipped question to improve overall topic coverage.'
          : `Complete your ${result.skippedCount} skipped questions to improve overall topic coverage.`
      );
    }

    if (evaluatedRecords.length > 0) {
      const avgTech = result.communicationFeedback?.technicalAccuracy ?? 0;
      const avgStruct = result.communicationFeedback?.structure ?? 0;
      const avgClarity = result.communicationFeedback?.clarity ?? 0;

      if (avgTech < 7.0) {
        points.push('Explain the core technical concepts and terminology more clearly.');
      }
      if (points.length < 2 && avgStruct < 7.0) {
        points.push('Add one relevant real-world example to structure your answers.');
      }
      if (points.length < 2 && avgClarity < 7.0) {
        points.push('Keep your explanations concise and directly focused on the question.');
      }
    }

    if (points.length < 2 && Array.isArray(result.improvements)) {
      for (const imp of result.improvements) {
        if (points.length >= 2) break;
        const shortImp = toConciseSentences(imp.split(':')[0], 1);
        const formatted = shortImp.endsWith('.') ? shortImp : `${shortImp}.`;
        if (
          formatted.length > 8 &&
          !points.some((existing) => existing.toLowerCase() === formatted.toLowerCase())
        ) {
          points.push(formatted);
        }
      }
    }

    if (points.length === 0) {
      points.push('Add a brief real-world business example to make your answers stronger.');
    }

    return points.slice(0, 2);
  }, [result]);

  const normalizedHistory = useMemo(() => {
    if (!Array.isArray(attemptHistory) || attemptHistory.length === 0) {
      return [result];
    }
    const exists = attemptHistory.some((a) => a.attemptId === result.attemptId);
    return exists ? attemptHistory : [result, ...attemptHistory];
  }, [attemptHistory, result]);

  const formattedDate = useMemo(() => {
    try {
      return new Date(result.completedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return '';
    }
  }, [result.completedAt]);

  return (
    <div className="bg-white rounded-2xl border border-[#E9E5F5] shadow-[0_4px_16px_rgba(109,40,217,0.05)] p-4 flex flex-col gap-3 text-[#111827] select-text">
      {/* ── HEADER: Topic Interview Result | Evaluated | Attempt Details | Review Answers | Download Report ── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 pb-2.5 border-b border-[#F1ECFA]">
        <div className="flex items-center gap-2.5 min-w-0 flex-wrap">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] text-white flex items-center justify-center shadow-2xs shrink-0">
            <Trophy className="w-4 h-4 text-white" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-[14.5px] font-extrabold text-[#111827] tracking-tight m-0 leading-tight">
                Topic Interview Result
              </h2>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#15803D] border border-[#BBF7D0] text-[10.5px] font-bold leading-none">
                <CheckCircle2 className="w-3 h-3 shrink-0" />
                <span>Evaluated</span>
              </span>
              <span className="text-[11.5px] font-medium text-[#64748B]">
                Attempt #{result.attemptNumber}
                {formattedDate ? ` • ${formattedDate}` : ''}
              </span>
            </div>

            <p className="text-[11.5px] font-medium text-[#64748B] m-0 mt-0.5 break-words">
              <span className="font-bold text-[#111827]">{result.topicTitle}</span>
              {' • '}
              <span className="text-[#6D28D9] font-semibold">{result.courseName}</span>
              {result.sectionTitle && result.sectionTitle !== result.topicTitle && (
                <>
                  {' • '}
                  <span>{result.sectionTitle}</span>
                </>
              )}
            </p>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-2 shrink-0 flex-wrap">
          <button
            type="button"
            onClick={handleReviewAnswersClick}
            className="px-3 py-1.5 rounded-xl border border-[#C4B5FD] bg-white hover:bg-[#F5F3FF] text-[#6D28D9] text-[11.5px] font-bold flex items-center gap-1.5 cursor-pointer transition"
          >
            <Eye className="w-3.5 h-3.5 shrink-0" />
            <span>Review Answers</span>
          </button>
          <button
            type="button"
            onClick={() => downloadTopicReportPdf(result)}
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] text-white text-[11.5px] font-bold flex items-center gap-1.5 cursor-pointer shadow-2xs transition"
          >
            <Download className="w-3.5 h-3.5 shrink-0" />
            <span>Download Report</span>
          </button>
        </div>
      </div>

      {/* ── ROW 1 — COMPACT SUMMARY (Overall Score + Performance Status + 4 Horizontal Statistics) ── */}
      <div className="rounded-xl border border-[#E9E5F5] bg-[#FAF9FE] px-4 py-3 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Left: Compact 104px Overall Score Circle + Performance Status Placed Together */}
        <div className="flex items-center gap-4 shrink-0">
          <div
            style={{ width: `${circleSizePx}px`, height: `${circleSizePx}px` }}
            className="relative flex items-center justify-center shrink-0"
          >
            <svg
              width={circleSizePx}
              height={circleSizePx}
              viewBox="0 0 104 104"
              className="-rotate-90 block"
            >
              <circle
                cx="52"
                cy="52"
                r={ringRadius}
                fill="none"
                stroke="#EDE9FE"
                strokeWidth="8"
              />
              <circle
                cx="52"
                cy="52"
                r={ringRadius}
                fill="none"
                stroke="#7C3AED"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={ringCircumference}
                strokeDashoffset={ringOffset}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-[21px] font-black text-[#111827] tabular-nums leading-none">
                {displayScorePct !== null ? `${displayScorePct}%` : '—'}
              </span>
              <span className="text-[9.5px] font-bold text-[#64748B] mt-1">
                Overall Score
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-1.5">
            {isNeedsPractice ? (
              <>
                <span
                  style={{
                    color: '#DC2626',
                    backgroundColor: '#FEE2E2',
                    borderColor: '#FECACA',
                    fontWeight: 700,
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[12px] whitespace-nowrap"
                >
                  <Target className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
                  <span>Needs Practice</span>
                </span>
                <p className="text-[11.5px] font-medium text-[#64748B] m-0 leading-snug">
                  Build your concepts and try again.
                </p>
              </>
            ) : (
              <>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[12px] font-bold whitespace-nowrap ${
                    effectiveStatusLabel === 'Excellent'
                      ? 'bg-[#DCFCE7] text-[#15803D] border-[#BBF7D0]'
                      : effectiveStatusLabel === 'Strong'
                      ? 'bg-[#F5F3FF] text-[#6D28D9] border-[#DDD6FE]'
                      : 'bg-[#FEF3C7] text-[#B45309] border-[#FDE68A]'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{effectiveStatusLabel}</span>
                </span>
                <p className="text-[11.5px] font-medium text-[#64748B] m-0 leading-snug">
                  {effectiveStatusLabel === 'Excellent'
                    ? 'Outstanding command of this topic.'
                    : effectiveStatusLabel === 'Strong'
                    ? 'Solid performance across key concepts.'
                    : 'Good progress — keep refining key details.'}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Right: 4 Statistics in a Single Compact Horizontal Row */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {/* Total Questions */}
          <div className="rounded-xl bg-white border border-[#E9E5F5] px-3 py-2.5 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#F3E8FF] text-[#6D28D9] flex items-center justify-center shrink-0">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[16px] font-black text-[#111827] tabular-nums leading-tight">
                {result.totalQuestions}
              </div>
              <div className="text-[11px] font-semibold text-[#64748B] whitespace-nowrap">
                Total Questions
              </div>
            </div>
          </div>

          {/* Answered */}
          <div className="rounded-xl bg-white border border-[#E9E5F5] px-3 py-2.5 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <div className="min-w-0">
              <div className="text-[16px] font-black text-[#111827] tabular-nums leading-tight">
                {result.answeredCount}
              </div>
              <div className="text-[11px] font-semibold text-[#64748B] whitespace-nowrap">
                Answered
              </div>
            </div>
          </div>

          {/* Skipped */}
          <div className="rounded-xl bg-white border border-[#E9E5F5] px-3 py-2.5 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center shrink-0">
              <SkipForward className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[16px] font-black text-[#111827] tabular-nums leading-tight">
                {result.skippedCount}
              </div>
              <div className="text-[11px] font-semibold text-[#64748B] whitespace-nowrap">
                Skipped
              </div>
            </div>
          </div>

          {/* Time Taken */}
          <div className="rounded-xl bg-white border border-[#E9E5F5] px-3 py-2.5 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#F3E8FF] text-[#6D28D9] flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[16px] font-black text-[#111827] tabular-nums leading-tight">
                {formatDurationCompact(result.durationSeconds)}
              </div>
              <div className="text-[11px] font-semibold text-[#64748B] whitespace-nowrap">
                Time Taken
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── ROW 2 — FEEDBACK (Your Strengths | Areas for Improvement — Content-Based Height) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
        {/* Left: Your Strengths (Subtle Light-Green Design) */}
        <div className="rounded-xl bg-[#F0FDF4] border border-[#DCFCE7] px-3.5 py-2.5 flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <ThumbsUp className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
            <h3 className="text-[12.5px] font-extrabold text-[#14532D] m-0">
              Your Strengths
            </h3>
          </div>

          {conciseStrengths.length > 0 ? (
            <div className="flex flex-col gap-1">
              {conciseStrengths.map((s, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-[12px] text-[#166534] leading-snug"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-2 text-[12px] font-medium text-[#166534] leading-snug">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
              <span>No answers evaluated yet.</span>
            </div>
          )}
        </div>

        {/* Right: Areas for Improvement (Subtle Light-Orange Design, Never Truncated) */}
        <div className="rounded-xl bg-[#FFF7ED] border border-[#FFEDD5] px-3.5 py-2.5 flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <Target className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
            <h3 className="text-[12.5px] font-extrabold text-[#9A3412] m-0">
              Areas for Improvement
            </h3>
          </div>

          <div className="flex flex-col gap-1">
            {conciseImprovements.map((imp, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-[12px] text-[#7C2D12] leading-snug"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C] shrink-0 mt-0.5" />
                <span>{imp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ROW 3 — ACTIONS (View Detailed Feedback | Retry Topic | Start Next Topic) ── */}
      <div className="flex items-center justify-between gap-2 flex-wrap pt-1 border-t border-[#F1ECFA]">
        <button
          type="button"
          onClick={() => setIsDetailsOpen((prev) => !prev)}
          className="px-3 py-1.5 rounded-xl bg-[#F5F3FF] hover:bg-[#EDE9FE] border border-[#DDD6FE] text-[#6D28D9] text-[12px] font-bold inline-flex items-center gap-1.5 cursor-pointer transition"
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
          <span>
            {isDetailsOpen
              ? 'Hide Detailed Feedback'
              : `View Detailed Feedback (${result.questionRecords.length})`}
          </span>
          {isDetailsOpen ? (
            <ChevronUp className="w-3.5 h-3.5 shrink-0" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 shrink-0" />
          )}
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onRetryTopic}
            className="px-3.5 py-1.5 rounded-xl border border-[#E9E5F5] bg-white hover:bg-[#FAF8FF] text-[#111827] text-[12px] font-bold inline-flex items-center gap-1.5 cursor-pointer transition"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#6D28D9]" />
            <span>Retry Topic</span>
          </button>

          {hasNextTopic && (
            <button
              type="button"
              onClick={onStartNextTopic}
              title={nextTopicTitle}
              className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] text-white text-[12px] font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-2xs transition"
            >
              <span>Start Next Topic</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* ── EXPANDABLE DETAILED FEEDBACK (Collapsed by Default) ── */}
      {isDetailsOpen && (
        <div
          id="topic-detailed-feedback-panel"
          className="pt-2.5 border-t border-[#E9E5F5] flex flex-col gap-2.5"
        >
          {/* Communication & Answer Quality + Attempt History */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 items-stretch">
            <div className="lg:col-span-8 rounded-xl border border-[#E9E5F5] bg-[#FAF9FE] px-3.5 py-2.5 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex items-center gap-1.5 shrink-0 sm:border-r sm:border-[#E9E5F5] sm:pr-3">
                <BarChart3 className="w-3.5 h-3.5 text-[#6D28D9]" />
                <span className="text-[12px] font-extrabold text-[#111827]">
                  Communication &amp; Answer Quality
                </span>
              </div>

              <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { label: 'Clarity', value: result.communicationFeedback?.clarity ?? null },
                  { label: 'Relevance', value: result.communicationFeedback?.relevance ?? null },
                  { label: 'Structure', value: result.communicationFeedback?.structure ?? null },
                  {
                    label: 'Technical Accuracy',
                    value: result.communicationFeedback?.technicalAccuracy ?? null,
                  },
                ].map((metric) => {
                  const isEvaluated = typeof metric.value === 'number';
                  return (
                    <div key={metric.label} className="flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-1 text-[11px]">
                        <span className="font-bold text-[#111827] truncate">{metric.label}</span>
                        {isEvaluated ? (
                          <span className="font-extrabold text-[#6D28D9] tabular-nums shrink-0">
                            {metric.value}/10
                          </span>
                        ) : (
                          <span className="text-[10px] font-semibold text-[#64748B] shrink-0">
                            Not Evaluated
                          </span>
                        )}
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-[#EDE9FE] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#7C3AED]"
                          style={{
                            width: isEvaluated
                              ? `${Math.min(100, Math.max(0, metric.value! * 10))}%`
                              : '0%',
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-4 rounded-xl border border-[#E9E5F5] bg-[#FAF9FE] px-3 py-2 flex items-center gap-2 overflow-x-auto">
              <div className="flex items-center gap-1 shrink-0">
                <History className="w-3.5 h-3.5 text-[#6D28D9]" />
                <span className="text-[11.5px] font-extrabold text-[#111827]">Attempts:</span>
              </div>
              <div className="flex items-center gap-1.5">
                {normalizedHistory.slice(0, 6).map((att, idx) => {
                  const isSelected = att.attemptId === result.attemptId;
                  const attScore =
                    typeof att.overallScorePct === 'number'
                      ? att.overallScorePct
                      : att.answeredCount === 0 && att.skippedCount > 0
                      ? 0
                      : null;
                  return (
                    <button
                      key={att.attemptId}
                      type="button"
                      onClick={() => onSelectAttempt(att)}
                      className={`px-2 py-1 rounded-lg text-[11px] font-bold border transition cursor-pointer shrink-0 ${
                        isSelected
                          ? 'bg-[#6D28D9] text-white border-[#6D28D9]'
                          : 'bg-white text-[#475569] border-[#E9E5F5] hover:bg-[#F5F3FF]'
                      }`}
                    >
                      #{att.attemptNumber}
                      {idx === 0 ? ' (Latest)' : ''}
                      {attScore !== null ? ` • ${attScore}%` : ''}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Question-wise Feedback Rows */}
          <div className="flex flex-col gap-1.5">
            {result.questionRecords.map((qr, idx) => {
              const isOpen = expandedIds.includes(qr.questionId);
              const isModelAnswerOpen = openModelAnswerIds.includes(qr.questionId);
              const isSkipped = Boolean(qr.skipped || !qr.submittedAnswer?.trim());
              const qScore = qr.evaluation?.scoreOutOf10 ?? null;

              const scoreBadgeClass = isSkipped
                ? 'bg-[#F1F5F9] text-[#475569]'
                : qScore !== null && qScore < 5
                ? 'bg-[#FEE2E2] text-[#DC2626]'
                : qScore !== null && qScore < 7
                ? 'bg-[#FEF3C7] text-[#B45309]'
                : 'bg-[#DCFCE7] text-[#15803D]';

              return (
                <div
                  key={qr.questionId}
                  className="rounded-xl border border-[#E9E5F5] bg-[#FAF9FE] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleExpandQuestion(qr.questionId)}
                    className="w-full px-3 py-2 flex items-center justify-between gap-3 text-left hover:bg-[#F5F3FF]/70 transition cursor-pointer"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="px-2 py-0.5 rounded-md bg-[#EDE9FE] text-[#6D28D9] text-[11px] font-extrabold shrink-0">
                        Q{idx + 1}
                      </span>
                      <span className="text-[12.5px] font-bold text-[#111827] truncate">
                        {qr.questionText}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold tabular-nums ${scoreBadgeClass}`}
                      >
                        {isSkipped
                          ? 'Skipped'
                          : qScore !== null
                          ? `${qScore} / 10`
                          : 'Not Evaluated'}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-3.5 h-3.5 text-[#64748B]" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-[#64748B]" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-3 pb-3 pt-2 border-t border-[#E9E5F5] bg-white space-y-2 text-[12px]">
                      <div>
                        <span className="text-[10.5px] font-bold text-[#64748B] block mb-0.5">
                          Your Answer
                        </span>
                        <div className="p-2 rounded-lg bg-[#FAF9FE] border border-[#E9E5F5] text-[#111827] leading-snug">
                          {isSkipped ? (
                            <span className="font-semibold text-[#64748B]">Skipped</span>
                          ) : (
                            qr.submittedAnswer
                          )}
                        </div>
                      </div>

                      {!isSkipped && qr.evaluation && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <div className="p-2 rounded-lg bg-[#FAF9FE] border border-[#E9E5F5]">
                            <span className="text-[10.5px] font-bold text-[#6D28D9] block mb-0.5">
                              Feedback
                            </span>
                            <p className="text-[#111827] m-0 leading-snug">
                              {toConciseSentences(qr.evaluation.feedback, 2)}
                            </p>
                          </div>

                          <div className="p-2 rounded-lg bg-[#FAF9FE] border border-[#E9E5F5]">
                            <span className="text-[10.5px] font-bold text-[#EA580C] block mb-0.5">
                              Suggested Improvement
                            </span>
                            <p className="text-[#111827] m-0 leading-snug">
                              {toConciseSentences(qr.evaluation.suggestedImprovement, 1)}
                            </p>
                          </div>
                        </div>
                      )}

                      {qr.evaluation?.modelAnswer && (
                        <div>
                          <button
                            type="button"
                            onClick={() => toggleModelAnswer(qr.questionId)}
                            className="inline-flex items-center gap-1 text-[11.5px] font-bold text-[#6D28D9] hover:text-[#5B21B6] cursor-pointer transition"
                          >
                            <span>Model Answer</span>
                            {isModelAnswerOpen ? (
                              <ChevronUp className="w-3.5 h-3.5" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5" />
                            )}
                          </button>

                          {isModelAnswerOpen && (
                            <div className="mt-1 p-2 rounded-lg bg-[#F5F3FF] border border-[#DDD6FE] text-[#111827] leading-snug">
                              {qr.evaluation.modelAnswer}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

// ════════════════════════════════════════════════════════════════════════════
// RIGHT COLUMN (col-span-3): COMPACT RESULT SIDEBAR FOR INTERVIEW PREP ROOM
// ════════════════════════════════════════════════════════════════════════════
interface TopicResultRightSidebarProps {
  result: TopicAttemptResult;
  hasNextTopic: boolean;
  nextTopicTitle?: string;
  onRetryTopic: () => void;
  onReviewAnswers: () => void;
  onBackToTopics: () => void;
  onStartNextTopic: () => void;
  onOpenSummary: () => void;
}

export const TopicResultRightSidebar: React.FC<TopicResultRightSidebarProps> = ({
  result,
  hasNextTopic,
  nextTopicTitle,
  onRetryTopic,
  onReviewAnswers,
  onBackToTopics,
  onStartNextTopic,
  onOpenSummary,
}) => {
  const answeredPct =
    result.totalQuestions > 0
      ? Math.round((result.answeredCount / result.totalQuestions) * 100)
      : 0;

  return (
    <div className="flex flex-col gap-3">
      <div className="bg-white border border-[#E9E5F5] rounded-2xl p-3.5 shadow-[0_2px_8px_rgba(109,40,217,0.03)] flex flex-col gap-2">
        <div className="flex items-center gap-2 pb-1.5 border-b border-[#E9E5F5]">
          <Info className="w-3.5 h-3.5 text-[#6D28D9]" />
          <h4 className="text-[13px] font-extrabold text-[#111827] m-0">Topic Details</h4>
        </div>

        <div className="flex flex-col gap-1.5 text-[11.5px]">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[#64748B] font-medium shrink-0">Course</span>
            <span className="font-bold text-[#6D28D9] text-right truncate">
              {result.courseName}
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[#64748B] font-medium shrink-0">Module</span>
            <span className="font-bold text-[#111827] text-right truncate">
              {result.sectionTitle}
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[#64748B] font-medium shrink-0">Topic</span>
            <span className="font-bold text-[#6D28D9] text-right truncate max-w-[165px]">
              {result.topicTitle}
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[#64748B] font-medium shrink-0">Progress</span>
            <span className="font-extrabold text-[#111827] tabular-nums">{answeredPct}%</span>
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#E9E5F5] rounded-2xl p-3.5 shadow-[0_2px_8px_rgba(109,40,217,0.03)] flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5 mb-0.5">
          <Zap className="w-3.5 h-3.5 text-[#6D28D9]" />
          <h4 className="text-[13px] font-extrabold text-[#111827] m-0">Next Actions</h4>
        </div>

        {hasNextTopic && (
          <button
            type="button"
            onClick={onStartNextTopic}
            title={nextTopicTitle ? `Start ${nextTopicTitle}` : 'Start Next Topic'}
            className="w-full py-2 px-3 rounded-xl bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-[12px] font-bold flex items-center justify-center gap-1.5 shadow-xs transition cursor-pointer"
          >
            <span>Start Next Topic</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}

        <button
          type="button"
          onClick={onRetryTopic}
          className="w-full py-2 px-3 rounded-xl bg-[#F5F3FF] hover:bg-[#EDE9FE] border border-[#DDD6FE] text-[#6D28D9] text-[12px] font-bold flex items-center justify-center gap-1.5 transition cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Retry Topic</span>
        </button>

        <button
          type="button"
          onClick={onReviewAnswers}
          className="w-full py-1.5 px-3 rounded-xl border border-[#E9E5F5] hover:bg-[#F5F3FF] text-[#111827] text-[11.5px] font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5 text-[#64748B]" />
          <span>Review Answers</span>
        </button>

        <button
          type="button"
          onClick={onBackToTopics}
          className="w-full py-1.5 px-3 rounded-xl border border-[#E9E5F5] hover:bg-[#F5F3FF] text-[#64748B] text-[11.5px] font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Topics</span>
        </button>

        <button
          type="button"
          onClick={onOpenSummary}
          className="w-full py-1 px-3 rounded-xl text-[#6D28D9] hover:underline text-[11px] font-bold transition cursor-pointer"
        >
          View Course Summary →
        </button>
      </div>
    </div>
  );
};

// ════════════════════════════════════════════════════════════════════════════
// MODULE-WISE & COURSE-WISE INTERVIEW SUMMARY VIEW
// ════════════════════════════════════════════════════════════════════════════
interface InterviewSummaryViewProps {
  courseSummary: CourseInterviewSummary;
  activeModuleCode: string;
  onOpenTopicResult: (sectionCode: string, topicKey: string, result: TopicAttemptResult) => void;
  onStartTopic: (sectionCode: string, topicKey: string) => void;
  onClose: () => void;
}

export const InterviewSummaryView: React.FC<InterviewSummaryViewProps> = ({
  courseSummary,
  activeModuleCode,
  onOpenTopicResult,
  onStartTopic,
  onClose,
}) => {
  const [tab, setTab] = useState<'module' | 'course'>('module');
  const activeModule: ModuleInterviewSummary | undefined =
    courseSummary.moduleSummaries.find((m) => m.sectionCode === activeModuleCode) ||
    courseSummary.moduleSummaries[0];

  return (
    <div className="bg-white rounded-2xl border border-[#E9E5F5] shadow-[0_4px_20px_rgba(109,40,217,0.05)] p-5 sm:p-6 flex flex-col gap-5">
      <div className="flex items-center justify-between gap-3 flex-wrap pb-3 border-b border-[#F1ECFA]">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#6D28D9]">
            Interview Progress Overview
          </span>
          <h2 className="text-xl font-extrabold text-[#111827] m-0 mt-0.5">
            {courseSummary.courseName}
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTab('module')}
            className={`px-3.5 py-1.5 rounded-xl text-[12.5px] font-bold transition cursor-pointer ${
              tab === 'module'
                ? 'bg-[#6D28D9] text-white'
                : 'bg-[#FAF8FF] text-slate-700 border border-[#E5DCFE]'
            }`}
          >
            Module Summary
          </button>
          <button
            type="button"
            onClick={() => setTab('course')}
            className={`px-3.5 py-1.5 rounded-xl text-[12.5px] font-bold transition cursor-pointer ${
              tab === 'course'
                ? 'bg-[#6D28D9] text-white'
                : 'bg-[#FAF8FF] text-slate-700 border border-[#E5DCFE]'
            }`}
          >
            Course Summary
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 rounded-xl text-[12.5px] font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer"
          >
            Back
          </button>
        </div>
      </div>

      {tab === 'module' && activeModule ? (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-[#FAF8FF] border border-[#E9E2FF] p-3.5">
              <span className="text-[11px] font-bold uppercase text-[#6D28D9] block">Module</span>
              <div className="text-[14px] font-extrabold text-[#111827] mt-1 truncate">
                {activeModule.sectionTitle}
              </div>
            </div>
            <div className="rounded-xl bg-emerald-50/60 border border-emerald-100 p-3.5">
              <span className="text-[11px] font-bold uppercase text-emerald-700 block">
                Topics Completed
              </span>
              <div className="text-xl font-black text-emerald-800 mt-0.5 tabular-nums">
                {activeModule.completedTopicsCount} / {activeModule.totalTopicsWithQuestions}
              </div>
            </div>
            <div className="rounded-xl bg-white border border-[#E9E5F5] p-3.5">
              <span className="text-[11px] font-bold uppercase text-slate-500 block">
                Evaluated Avg
              </span>
              <div className="text-xl font-black text-[#6D28D9] mt-0.5 tabular-nums">
                {activeModule.averageScorePct !== null ? `${activeModule.averageScorePct}%` : '—'}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {activeModule.topicStatuses.map((ts) => (
              <div
                key={ts.topicKey}
                className="flex items-center justify-between gap-3 p-3.5 rounded-xl border border-[#E9E5F5] hover:bg-[#FAF8FF] transition flex-wrap"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[13.5px] font-bold text-[#111827]">{ts.topicTitle}</span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {ts.questionCount} Qs
                    </span>
                  </div>
                  <span className="text-[11.5px] text-slate-500">
                    {ts.completed && ts.latestResult
                      ? `Completed • ${ts.attemptCount} attempt(s) • Latest score: ${
                          ts.latestResult.overallScorePct !== null
                            ? `${ts.latestResult.overallScorePct}%`
                            : 'Pending'
                        }`
                      : 'Not started yet'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {ts.latestResult && (
                    <button
                      type="button"
                      onClick={() =>
                        onOpenTopicResult(activeModule.sectionCode, ts.topicKey, ts.latestResult!)
                      }
                      className="px-3 py-1.5 rounded-lg bg-[#F3EEFF] hover:bg-[#E9DFFF] text-[#6D28D9] text-xs font-bold cursor-pointer transition"
                    >
                      Review Result
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => onStartTopic(activeModule.sectionCode, ts.topicKey)}
                    className="px-3 py-1.5 rounded-lg bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-bold cursor-pointer transition"
                  >
                    {ts.completed ? 'Retry' : 'Start'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl bg-[#FAF8FF] border border-[#E9E2FF] p-3.5">
              <span className="text-[11px] font-bold uppercase text-[#6D28D9] block">
                Modules Covered
              </span>
              <div className="text-xl font-black text-[#111827] mt-0.5 tabular-nums">
                {courseSummary.modulesCovered} / {courseSummary.totalModules}
              </div>
            </div>
            <div className="rounded-xl bg-emerald-50/60 border border-emerald-100 p-3.5">
              <span className="text-[11px] font-bold uppercase text-emerald-700 block">
                Topics Completed
              </span>
              <div className="text-xl font-black text-emerald-800 mt-0.5 tabular-nums">
                {courseSummary.topicsCompleted}
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-3.5">
              <span className="text-[11px] font-bold uppercase text-slate-500 block">
                Remaining Topics
              </span>
              <div className="text-xl font-black text-slate-800 mt-0.5 tabular-nums">
                {courseSummary.remainingTopics}
              </div>
            </div>
            <div className="rounded-xl bg-white border border-[#E9E5F5] p-3.5">
              <span className="text-[11px] font-bold uppercase text-slate-500 block">
                Evaluated Avg
              </span>
              <div className="text-xl font-black text-[#6D28D9] mt-0.5 tabular-nums">
                {courseSummary.overallEvaluatedAvgPct !== null
                  ? `${courseSummary.overallEvaluatedAvgPct}%`
                  : '—'}
              </div>
            </div>
          </div>

          <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1">
            {courseSummary.moduleSummaries.map((mod) => (
              <div
                key={mod.sectionCode}
                className="rounded-xl border border-[#E9E5F5] p-3.5 flex items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <div className="text-[13.5px] font-bold text-[#111827] truncate">
                    {mod.sectionTitle}
                  </div>
                  <div className="text-[11.5px] text-slate-500 mt-0.5">
                    {mod.completedTopicsCount} of {mod.totalTopicsWithQuestions} topics completed
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#F3EEFF] text-[#6D28D9] text-xs font-extrabold tabular-nums shrink-0">
                  {mod.averageScorePct !== null ? `${mod.averageScorePct}% avg` : 'Not started'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
