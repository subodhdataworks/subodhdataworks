// ============================================================================
// FUTURE IT INDUSTRY — UNIVERSAL INTERVIEW PREP ENGINE
// Course → Module → Topic → Interview Session → Answers → Topic-Wise Result
// 100% Dynamic across all existing and future courses. Zero fake scores.
// ============================================================================

import type {
  MasterInterviewQuestion,
  QuestionBankSection,
} from '../components/futureai/data/dataAnalyst150QuestionBank';

export interface InterviewTopicGroup {
  topicKey: string;
  courseKey: string;
  sectionCode: string;
  sectionTitle: string;
  topicTitle: string;
  questions: MasterInterviewQuestion[];
  questionCount: number;
}

export interface QuestionEvaluation {
  scoreOutOf10: number;
  clarity: number;
  relevance: number;
  structure: number;
  technicalAccuracy: number;
  matchedConcepts: string[];
  missingConcepts: string[];
  feedback: string;
  suggestedImprovement: string;
  modelAnswer: string;
}

export interface QuestionAnswerRecord {
  questionId: number;
  qNum: string;
  questionText: string;
  difficulty: string;
  submittedAnswer: string;
  inputMode: 'voice' | 'text';
  skipped: boolean;
  submittedAt: string;
  evaluation: QuestionEvaluation | null;
}

export interface TopicAttemptResult {
  attemptId: string;
  attemptNumber: number;
  courseKey: string;
  courseName: string;
  sectionCode: string;
  sectionTitle: string;
  topicKey: string;
  topicTitle: string;
  totalQuestions: number;
  answeredCount: number;
  skippedCount: number;
  answeredPct: number;
  technicalScorePct: number | null;
  overallScorePct: number | null;
  performanceLabel: 'Excellent' | 'Strong' | 'Developing' | 'Needs Practice' | 'Evaluation Pending';
  durationSeconds: number;
  status: 'completed' | 'incomplete';
  performanceSummary: string;
  skippedImpactNote: string | null;
  strengths: string[];
  improvements: string[];
  revisionConcepts: string[];
  communicationFeedback: {
    clarity: number;
    relevance: number;
    structure: number;
    technicalAccuracy: number;
    basedOnVoiceAnswers: boolean;
  } | null;
  questionRecords: QuestionAnswerRecord[];
  completedAt: string;
}

export interface TopicSessionDraft {
  courseKey: string;
  sectionCode: string;
  topicKey: string;
  currentQuestionIdx: number;
  recordsByQuestionId: Record<number, QuestionAnswerRecord>;
  startedAt: string;
  updatedAt: string;
}

export interface ModuleInterviewSummary {
  sectionCode: string;
  sectionTitle: string;
  totalTopicsWithQuestions: number;
  completedTopicsCount: number;
  averageScorePct: number | null;
  topicStatuses: {
    topicKey: string;
    topicTitle: string;
    questionCount: number;
    completed: boolean;
    attemptCount: number;
    latestResult: TopicAttemptResult | null;
  }[];
}

export interface CourseInterviewSummary {
  courseKey: string;
  courseName: string;
  totalModules: number;
  modulesCovered: number;
  totalTopics: number;
  topicsCompleted: number;
  remainingTopics: number;
  overallEvaluatedAvgPct: number | null;
  moduleSummaries: ModuleInterviewSummary[];
}

// ── Per-User Storage Scoping ──
const STORAGE_PREFIX = 'futureit_interview_prep_engine_v2';

function getActiveUserScope(): string {
  if (typeof window === 'undefined') return 'guest';
  try {
    const rawUser =
      localStorage.getItem('futureit_auth_user') ||
      localStorage.getItem('futureai_user') ||
      localStorage.getItem('user');
    if (rawUser) {
      const parsed = JSON.parse(rawUser);
      const id = parsed?.id || parsed?._id || parsed?.email || parsed?.phone;
      if (id) return String(id).toLowerCase().replace(/[^a-z0-9_-]/g, '_');
    }
  } catch {
    // fallback to guest
  }
  return 'default_student';
}

function getResultsStorageKey(courseKey: string): string {
  return `${STORAGE_PREFIX}_results_${getActiveUserScope()}_${courseKey}`;
}

function getDraftsStorageKey(courseKey: string): string {
  return `${STORAGE_PREFIX}_drafts_${getActiveUserScope()}_${courseKey}`;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'topic';
}

// ── 1. DYNAMIC SECTION → QUESTION SET (Each Section = 1 Direct Interview Topic) ──
export function buildModuleTopics(
  courseKey: string,
  section: QuestionBankSection,
  allCourseQuestions: MasterInterviewQuestion[]
): InterviewTopicGroup[] {
  const sectionQuestions = allCourseQuestions.filter(
    (q) => q.sectionCode === section.sectionCode
  );

  if (sectionQuestions.length === 0) {
    return [];
  }

  return [
    {
      topicKey: `${section.sectionCode}__${slugify(section.title)}`,
      courseKey,
      sectionCode: section.sectionCode,
      sectionTitle: section.title,
      topicTitle: section.title,
      questions: sectionQuestions,
      questionCount: sectionQuestions.length,
    },
  ];
}

// ── 2. REAL DETERMINISTIC EVALUATION ENGINE (Zero Fabricated Scores) ──
const STOP_WORDS = new Set([
  'this', 'that', 'with', 'from', 'they', 'them', 'their', 'there', 'where',
  'when', 'what', 'which', 'while', 'about', 'into', 'your', 'have', 'been',
  'were', 'will', 'would', 'could', 'should', 'also', 'such', 'used', 'using',
  'make', 'makes', 'help', 'helps', 'data', 'very', 'more', 'most', 'some',
]);

function extractKeyTerms(phrase: string): string[] {
  return phrase
    .toLowerCase()
    .replace(/[^a-z0-9+#.\s-]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length >= 3 && !STOP_WORDS.has(w));
}

export function evaluateTopicAnswer(
  submittedAnswer: string,
  question: MasterInterviewQuestion
): QuestionEvaluation {
  const cleanAnswer = submittedAnswer.trim();
  const words = cleanAnswer.split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const lowerAnswer = cleanAnswer.toLowerCase();

  const keyPoints = Array.isArray(question.keyPoints) ? question.keyPoints : [];
  const matchedConcepts: string[] = [];
  const missingConcepts: string[] = [];

  for (const kp of keyPoints) {
    const terms = extractKeyTerms(kp);
    const isMatched =
      lowerAnswer.includes(kp.toLowerCase()) ||
      (terms.length > 0 && terms.some((t) => lowerAnswer.includes(t)));
    if (isMatched) {
      matchedConcepts.push(kp);
    } else {
      missingConcepts.push(kp);
    }
  }

  // Also check overlap against ideal answer technical keywords if keyPoints is empty
  const idealTerms = extractKeyTerms(question.idealAnswerEn || '');
  const uniqueIdealTerms = Array.from(new Set(idealTerms)).slice(0, 12);
  const idealMatches = uniqueIdealTerms.filter((t) => lowerAnswer.includes(t)).length;
  const idealOverlapRatio =
    uniqueIdealTerms.length > 0 ? idealMatches / uniqueIdealTerms.length : 0;

  const keyPointRatio =
    keyPoints.length > 0 ? matchedConcepts.length / keyPoints.length : idealOverlapRatio;

  // Component scores (1–10 scale) based strictly on actual answer text
  const hasMultipleSentences = /[.!?]\s+\S/.test(cleanAnswer) || wordCount >= 25;
  const hasExampleCue = /\b(example|for instance|such as|like|e\.g\.|project|real-world|business|scenario)\b/i.test(
    cleanAnswer
  );

  const technicalAccuracy = Math.round(
    Math.min(10, Math.max(2, 2.5 + keyPointRatio * 5.5 + idealOverlapRatio * 2.0)) * 10
  ) / 10;

  const relevance = Math.round(
    Math.min(10, Math.max(2, 3.0 + keyPointRatio * 4.5 + (wordCount >= 10 ? 1.5 : 0) + idealOverlapRatio * 1.0)) * 10
  ) / 10;

  const clarity = Math.round(
    Math.min(10, Math.max(2, 3.0 + (wordCount >= 12 ? 2.0 : wordCount * 0.15) + (wordCount >= 25 ? 2.0 : 0) + (hasMultipleSentences ? 1.5 : 0) + (wordCount <= 180 ? 1.0 : 0))) * 10
  ) / 10;

  const structure = Math.round(
    Math.min(10, Math.max(2, 3.0 + (hasMultipleSentences ? 2.5 : 0.5) + (hasExampleCue ? 2.5 : 0) + (wordCount >= 20 ? 1.5 : 0))) * 10
  ) / 10;

  const scoreOutOf10 =
    Math.round(
      (technicalAccuracy * 0.4 + relevance * 0.25 + clarity * 0.2 + structure * 0.15) * 10
    ) / 10;

  let feedback = '';
  if (scoreOutOf10 >= 8.0) {
    feedback =
      'Strong, accurate answer that clearly covers the core concepts with good structure.';
  } else if (scoreOutOf10 >= 6.0) {
    feedback =
      'Good foundational answer. Adding a few more key technical points and a brief real-world example will make it interview-ready.';
  } else if (wordCount < 10) {
    feedback =
      'Answer is too brief. Expand your explanation to clearly define the concept and explain how it is used in practice.';
  } else {
    feedback =
      'Partially addresses the question, but misses core technical concepts expected by interviewers.';
  }

  let suggestedImprovement = '';
  if (missingConcepts.length > 0) {
    suggestedImprovement = `Include key concepts such as: ${missingConcepts.slice(0, 3).join(', ')}.`;
  } else if (!hasExampleCue) {
    suggestedImprovement =
      'Add a short 1–2 sentence real-world or project example to make your answer stand out.';
  } else {
    suggestedImprovement =
      'Keep your explanation crisp and quantify business impact where possible.';
  }

  return {
    scoreOutOf10,
    clarity,
    relevance,
    structure,
    technicalAccuracy,
    matchedConcepts,
    missingConcepts,
    feedback,
    suggestedImprovement,
    modelAnswer: question.idealAnswerEn,
  };
}

export function formatDurationCompact(totalSeconds: number): string {
  const safe = Math.max(0, Math.round(totalSeconds || 0));
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  if (mins === 0) return `${secs}s`;
  return `${mins}m ${secs.toString().padStart(2, '0')}s`;
}

// ── 3. BUILD TOPIC-WISE RESULT (Strictly Scoped to One Topic) ──
export function buildTopicAttemptResult(params: {
  courseKey: string;
  courseName: string;
  topic: InterviewTopicGroup;
  recordsByQuestionId: Record<number, QuestionAnswerRecord>;
  attemptNumber: number;
  durationSeconds?: number;
}): TopicAttemptResult {
  const {
    courseKey,
    courseName,
    topic,
    recordsByQuestionId,
    attemptNumber,
    durationSeconds = 0,
  } = params;

  const questionRecords: QuestionAnswerRecord[] = topic.questions.map((q) => {
    const existing = recordsByQuestionId[q.id];
    if (existing) return existing;
    return {
      questionId: q.id,
      qNum: q.qNum,
      questionText: q.questionEn,
      difficulty: q.difficulty,
      submittedAnswer: '',
      inputMode: 'text',
      skipped: true,
      submittedAt: new Date().toISOString(),
      evaluation: null,
    };
  });

  const answeredRecords = questionRecords.filter(
    (r) => !r.skipped && r.submittedAnswer.trim().length > 0
  );
  const skippedRecords = questionRecords.filter(
    (r) => r.skipped || r.submittedAnswer.trim().length === 0
  );
  const evaluatedRecords = answeredRecords.filter((r) => r.evaluation !== null);

  const answeredPct =
    topic.questions.length > 0
      ? Math.round((answeredRecords.length / topic.questions.length) * 100)
      : 0;

  let overallScorePct: number | null = null;
  let technicalScorePct: number | null = null;
  let communicationFeedback: TopicAttemptResult['communicationFeedback'] = null;

  if (evaluatedRecords.length > 0) {
    // Overall Topic Score = total points earned / total configured topic questions (skipped = 0)
    const totalPointsEarned = evaluatedRecords.reduce(
      (sum, r) => sum + (r.evaluation?.scoreOutOf10 || 0),
      0
    );
    const maxPossiblePoints = topic.questions.length * 10;
    overallScorePct = Math.round((totalPointsEarned / maxPossiblePoints) * 100);

    // Technical Performance Score = average across answered & evaluated questions
    technicalScorePct = Math.round(
      (totalPointsEarned / (evaluatedRecords.length * 10)) * 100
    );

    const avg = (getter: (e: QuestionEvaluation) => number) =>
      Math.round(
        (evaluatedRecords.reduce((s, r) => s + getter(r.evaluation!), 0) /
          evaluatedRecords.length) *
          10
      ) / 10;

    communicationFeedback = {
      clarity: avg((e) => e.clarity),
      relevance: avg((e) => e.relevance),
      structure: avg((e) => e.structure),
      technicalAccuracy: avg((e) => e.technicalAccuracy),
      basedOnVoiceAnswers: evaluatedRecords.some((r) => r.inputMode === 'voice'),
    };
  }

  const performanceLabel: TopicAttemptResult['performanceLabel'] =
    overallScorePct === null
      ? 'Evaluation Pending'
      : overallScorePct >= 85
      ? 'Excellent'
      : overallScorePct >= 70
      ? 'Strong'
      : overallScorePct >= 50
      ? 'Developing'
      : 'Needs Practice';

  const skippedImpactNote =
    skippedRecords.length > 0 && overallScorePct !== null && technicalScorePct !== null
      ? `${skippedRecords.length} skipped question(s) counted as 0 toward your Overall Topic Score (${overallScorePct}%), while your answered-question technical average was ${technicalScorePct}%.`
      : null;

  // Derive genuine, evidence-based Strengths, Improvements & Revision Concepts strictly from THIS Topic
  const strengths: string[] = [];
  const improvements: string[] = [];
  const matchedConceptSet = new Set<string>();
  const revisionSet = new Set<string>();

  if (evaluatedRecords.length > 0) {
    for (const r of evaluatedRecords) {
      r.evaluation?.matchedConcepts.forEach((mc) => matchedConceptSet.add(mc));
      r.evaluation?.missingConcepts.forEach((miss) => revisionSet.add(miss));
    }

    const matchedList = Array.from(matchedConceptSet);
    const strongAnswers = evaluatedRecords.filter(
      (r) => (r.evaluation?.scoreOutOf10 || 0) >= 7.5
    );

    if (matchedList.length > 0) {
      strengths.push(
        `Demonstrated accurate understanding of ${topic.topicTitle} concepts including ${matchedList
          .slice(0, 3)
          .join(', ')}.`
      );
    }
    if (strongAnswers.length > 0) {
      strengths.push(
        `Delivered strong, interview-ready explanations on ${strongAnswers.length} of ${topic.questions.length} questions.`
      );
    }
    if ((communicationFeedback?.structure || 0) >= 7.2) {
      strengths.push(
        'Responses followed a clear, logical structure that is easy for interviewers to follow.'
      );
    }
    if (strengths.length === 0) {
      strengths.push(
        `Insufficient strong technical evidence in this attempt for "${topic.topicTitle}". Focus on covering core definitions and examples in your next attempt.`
      );
    }

    const missingList = Array.from(revisionSet);
    if (missingList.length > 0) {
      improvements.push(
        `Cover missing ${topic.topicTitle} concepts in your explanations: ${missingList
          .slice(0, 3)
          .join(', ')}.`
      );
    }
    if (skippedRecords.length > 0) {
      improvements.push(
        `Attempt all ${skippedRecords.length} skipped question(s) to build full coverage across "${topic.topicTitle}".`
      );
    }
    if ((communicationFeedback?.technicalAccuracy || 0) < 7) {
      improvements.push(
        `Strengthen technical precision for "${topic.topicTitle}" by naming exact methods, syntax, or metrics.`
      );
    }
    if ((communicationFeedback?.structure || 0) < 7) {
      improvements.push(
        'Organize answers into: 1) Concise definition, 2) Key mechanism, and 3) One practical real-world example.'
      );
    }
    if (improvements.length === 0) {
      improvements.push(
        `Refine your ${topic.topicTitle} responses with quantified project outcomes for senior-level polish.`
      );
    }
  } else {
    strengths.push(
      `No evaluated answers were submitted in this attempt for "${topic.topicTitle}". Submit spoken or written answers to identify your strengths.`
    );
    improvements.push(
      `Answer the ${topic.questions.length} configured question(s) in "${topic.topicTitle}" instead of skipping so the engine can evaluate your mastery.`
    );
    topic.questions.forEach((q) => {
      (q.keyPoints || []).slice(0, 2).forEach((kp) => revisionSet.add(kp));
    });
  }

  const matchedPreview = Array.from(matchedConceptSet).slice(0, 2).join(' and ');
  const missingPreview = Array.from(revisionSet).slice(0, 2).join(' and ');

  const performanceSummary =
    overallScorePct === null
      ? `All ${topic.questions.length} questions in "${topic.topicTitle}" were skipped. Retry this topic and submit your answers to receive an evaluated score and detailed feedback.`
      : overallScorePct >= 80
      ? `Strong performance in "${topic.topicTitle}" (${overallScorePct}%). You accurately addressed ${answeredRecords.length}/${topic.questions.length} questions${
          matchedPreview ? `, demonstrating solid command of ${matchedPreview}` : ''
        }.`
      : overallScorePct >= 60
      ? `Developing command of "${topic.topicTitle}" (${overallScorePct}%). You answered ${answeredRecords.length}/${topic.questions.length} questions${
          missingPreview ? `; revising ${missingPreview} will raise your interview readiness` : ''
        }.`
      : `Foundational attempt in "${topic.topicTitle}" (${overallScorePct}%). Review the model answers${
          missingPreview ? ` focusing on ${missingPreview}` : ''
        } and retry to strengthen your explanation depth.`;

  return {
    attemptId: `${topic.topicKey}_${Date.now()}`,
    attemptNumber,
    courseKey,
    courseName,
    sectionCode: topic.sectionCode,
    sectionTitle: topic.sectionTitle,
    topicKey: topic.topicKey,
    topicTitle: topic.topicTitle,
    totalQuestions: topic.questions.length,
    answeredCount: answeredRecords.length,
    skippedCount: skippedRecords.length,
    answeredPct,
    technicalScorePct,
    overallScorePct,
    performanceLabel,
    durationSeconds: Math.max(0, Math.round(durationSeconds)),
    status: answeredRecords.length > 0 ? 'completed' : 'incomplete',
    performanceSummary,
    skippedImpactNote,
    strengths,
    improvements,
    revisionConcepts: Array.from(revisionSet).slice(0, 6),
    communicationFeedback,
    questionRecords,
    completedAt: new Date().toISOString(),
  };
}

// ── 4. PERSISTENCE (Per Course → Module → Topic → Attempt History) ──
export function getCourseAllTopicResults(
  courseKey: string
): Record<string, TopicAttemptResult[]> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(getResultsStorageKey(courseKey));
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

export function saveTopicAttemptResult(result: TopicAttemptResult): TopicAttemptResult[] {
  const all = getCourseAllTopicResults(result.courseKey);
  const existing = Array.isArray(all[result.topicKey]) ? all[result.topicKey] : [];
  const updatedList = [result, ...existing].slice(0, 15); // newest first
  all[result.topicKey] = updatedList;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(getResultsStorageKey(result.courseKey), JSON.stringify(all));
    } catch {
      // ignore quota errors
    }
  }
  return updatedList;
}

export function getTopicHistory(
  courseKey: string,
  topicKey: string
): TopicAttemptResult[] {
  const all = getCourseAllTopicResults(courseKey);
  return Array.isArray(all[topicKey]) ? all[topicKey] : [];
}

export function getLatestTopicResult(
  courseKey: string,
  topicKey: string
): TopicAttemptResult | null {
  const hist = getTopicHistory(courseKey, topicKey);
  return hist.length > 0 ? hist[0] : null;
}

export function saveTopicSessionDraft(draft: TopicSessionDraft): void {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(getDraftsStorageKey(draft.courseKey));
    const all: Record<string, TopicSessionDraft> = raw ? JSON.parse(raw) : {};
    all[draft.topicKey] = draft;
    localStorage.setItem(getDraftsStorageKey(draft.courseKey), JSON.stringify(all));
  } catch {
    // ignore storage errors
  }
}

export function loadTopicSessionDraft(
  courseKey: string,
  topicKey: string
): TopicSessionDraft | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(getDraftsStorageKey(courseKey));
    if (!raw) return null;
    const all: Record<string, TopicSessionDraft> = JSON.parse(raw);
    return all[topicKey] || null;
  } catch {
    return null;
  }
}

export function clearTopicSessionDraft(courseKey: string, topicKey: string): void {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(getDraftsStorageKey(courseKey));
    if (!raw) return;
    const all: Record<string, TopicSessionDraft> = JSON.parse(raw);
    delete all[topicKey];
    localStorage.setItem(getDraftsStorageKey(courseKey), JSON.stringify(all));
  } catch {
    // ignore
  }
}

// ── 5. MODULE-WISE & COURSE-WISE SUMMARY ──
export function computeModuleSummary(
  courseKey: string,
  section: QuestionBankSection,
  topics: InterviewTopicGroup[],
  allResultsMap?: Record<string, TopicAttemptResult[]>
): ModuleInterviewSummary {
  const resultsMap = allResultsMap || getCourseAllTopicResults(courseKey);
  const topicsWithQs = topics.filter((t) => t.questionCount > 0);

  const topicStatuses = topicsWithQs.map((t) => {
    const attempts = resultsMap[t.topicKey] || [];
    const latest = attempts[0] || null;
    return {
      topicKey: t.topicKey,
      topicTitle: t.topicTitle,
      questionCount: t.questionCount,
      completed: Boolean(latest && latest.status === 'completed'),
      attemptCount: attempts.length,
      latestResult: latest,
    };
  });

  const completedStatuses = topicStatuses.filter((ts) => ts.completed);
  const scoredStatuses = completedStatuses.filter(
    (ts) => ts.latestResult && typeof ts.latestResult.overallScorePct === 'number'
  );

  const averageScorePct =
    scoredStatuses.length > 0
      ? Math.round(
          scoredStatuses.reduce(
            (sum, ts) => sum + (ts.latestResult!.overallScorePct || 0),
            0
          ) / scoredStatuses.length
        )
      : null;

  return {
    sectionCode: section.sectionCode,
    sectionTitle: section.title,
    totalTopicsWithQuestions: topicsWithQs.length,
    completedTopicsCount: completedStatuses.length,
    averageScorePct,
    topicStatuses,
  };
}

export function computeCourseSummary(
  courseKey: string,
  courseName: string,
  sections: QuestionBankSection[],
  allQuestions: MasterInterviewQuestion[]
): CourseInterviewSummary {
  const resultsMap = getCourseAllTopicResults(courseKey);
  const moduleSummaries = sections.map((sec) => {
    const topics = buildModuleTopics(courseKey, sec, allQuestions);
    return computeModuleSummary(courseKey, sec, topics, resultsMap);
  });

  const totalTopics = moduleSummaries.reduce((s, m) => s + m.totalTopicsWithQuestions, 0);
  const topicsCompleted = moduleSummaries.reduce((s, m) => s + m.completedTopicsCount, 0);
  const modulesCovered = moduleSummaries.filter((m) => m.completedTopicsCount > 0).length;

  const allScoredTopics = moduleSummaries.flatMap((m) =>
    m.topicStatuses.filter(
      (ts) => ts.completed && ts.latestResult && typeof ts.latestResult.overallScorePct === 'number'
    )
  );

  const overallEvaluatedAvgPct =
    allScoredTopics.length > 0
      ? Math.round(
          allScoredTopics.reduce(
            (s, ts) => s + (ts.latestResult!.overallScorePct || 0),
            0
          ) / allScoredTopics.length
        )
      : null;

  return {
    courseKey,
    courseName,
    totalModules: sections.length,
    modulesCovered,
    totalTopics,
    topicsCompleted,
    remainingTopics: Math.max(0, totalTopics - topicsCompleted),
    overallEvaluatedAvgPct,
    moduleSummaries,
  };
}

// ── 6. DOWNLOAD TOPIC REPORT (Clean Printable PDF) ──
export function downloadTopicReportPdf(result: TopicAttemptResult): void {
  if (typeof window === 'undefined') return;
  const win = window.open('', '_blank');
  if (!win) return;

  const safe = (str: string) =>
    (str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

  win.document.write(`<!DOCTYPE html>
<html>
<head>
  <title>Topic Interview Report — ${safe(result.topicTitle)}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #111827; padding: 36px; line-height: 1.55; }
    h1 { color: #5B21B6; font-size: 24px; margin: 0 0 6px; }
    .meta { color: #64748B; font-size: 13px; margin-bottom: 20px; }
    .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 22px; }
    .kpi { background: #F5F2FF; border: 1px solid #DDD6FE; border-radius: 10px; padding: 12px; }
    .kpi-label { font-size: 11px; text-transform: uppercase; color: #6D28D9; font-weight: 700; }
    .kpi-val { font-size: 20px; font-weight: 800; color: #111827; margin-top: 4px; }
    .section { margin-bottom: 20px; }
    .section h2 { font-size: 15px; color: #5B21B6; border-bottom: 1px solid #E9E5F5; padding-bottom: 6px; margin-bottom: 10px; }
    .q-card { border: 1px solid #E5E0F5; border-radius: 10px; padding: 14px; margin-bottom: 12px; page-break-inside: avoid; }
    .q-title { font-weight: 700; font-size: 14px; margin-bottom: 6px; }
    .ans { background: #FAF8FF; padding: 8px 10px; border-radius: 6px; font-size: 13px; margin: 6px 0; }
    .fb { font-size: 12.5px; color: #334155; }
  </style>
</head>
<body>
  <h1>Future IT Industry — Topic Interview Result</h1>
  <div class="meta">
    <strong>Course:</strong> ${safe(result.courseName)} &nbsp;|&nbsp;
    <strong>Module:</strong> ${safe(result.sectionTitle)} &nbsp;|&nbsp;
    <strong>Topic:</strong> ${safe(result.topicTitle)} &nbsp;|&nbsp;
    <strong>Attempt #${result.attemptNumber}</strong> (${new Date(result.completedAt).toLocaleString()})
  </div>

  <div class="grid">
    <div class="kpi"><div class="kpi-label">Overall Score</div><div class="kpi-val">${result.overallScorePct !== null ? `${result.overallScorePct}%` : 'Pending'}</div></div>
    <div class="kpi"><div class="kpi-label">Answered</div><div class="kpi-val">${result.answeredCount} / ${result.totalQuestions}</div></div>
    <div class="kpi"><div class="kpi-label">Skipped</div><div class="kpi-val">${result.skippedCount}</div></div>
    <div class="kpi"><div class="kpi-label">Time Taken</div><div class="kpi-val">${formatDurationCompact(result.durationSeconds)}</div></div>
  </div>

  ${
    result.communicationFeedback
      ? `<div class="section">
          <h2>Communication &amp; Answer Quality</h2>
          <p><strong>Clarity:</strong> ${result.communicationFeedback.clarity}/10 &nbsp;|&nbsp;
          <strong>Relevance:</strong> ${result.communicationFeedback.relevance}/10 &nbsp;|&nbsp;
          <strong>Structure:</strong> ${result.communicationFeedback.structure}/10 &nbsp;|&nbsp;
          <strong>Technical Accuracy:</strong> ${result.communicationFeedback.technicalAccuracy}/10</p>
        </div>`
      : ''
  }

  <div class="section">
    <h2>Topic Performance Summary</h2>
    <p>${safe(result.performanceSummary)}</p>
    <p><strong>Strengths:</strong> ${result.strengths.map(safe).join(' • ')}</p>
    <p><strong>Areas for Improvement:</strong> ${result.improvements.map(safe).join(' • ')}</p>
    ${result.revisionConcepts.length > 0 ? `<p><strong>Recommended Revision:</strong> ${result.revisionConcepts.map(safe).join(', ')}</p>` : ''}
  </div>

  <div class="section">
    <h2>Question-Wise Feedback</h2>
    ${result.questionRecords
      .map(
        (qr, idx) => `
      <div class="q-card">
        <div class="q-title">Q${idx + 1}. ${safe(qr.questionText)} ${qr.evaluation ? `— ${qr.evaluation.scoreOutOf10}/10` : '(Skipped)'}</div>
        <div class="ans"><strong>Your Answer:</strong> ${qr.skipped ? '<em>Skipped</em>' : safe(qr.submittedAnswer)}</div>
        ${
          qr.evaluation
            ? `<div class="fb">
                <div><strong>Feedback:</strong> ${safe(qr.evaluation.feedback)}</div>
                ${qr.evaluation.missingConcepts.length > 0 ? `<div><strong>Missing Concepts:</strong> ${qr.evaluation.missingConcepts.map(safe).join(', ')}</div>` : ''}
                <div><strong>Suggested Improvement:</strong> ${safe(qr.evaluation.suggestedImprovement)}</div>
                <div><strong>Model Answer:</strong> ${safe(qr.evaluation.modelAnswer)}</div>
              </div>`
            : ''
        }
      </div>
    `
      )
      .join('')}
  </div>
</body>
</html>`);
  win.document.close();
  win.focus();
  setTimeout(() => win.print(), 400);
}
