import type { DsTopicBlueprint } from './dsCurriculumBlueprintEngine';
import type { PastelTone } from './StructuredVisualNotesRenderer';

/**
 * Compact, high-signal specification for each AI Engineering topic (1..343).
 * Expands cleanly into the full DsTopicBlueprint schema powering both:
 *  - Multi-page Handwritten Visual Learning Notes (English + Hinglish)
 *  - Practice MCQs, 5-Level Coding Game, and AI Topic Interview Q&A
 */
export interface AiTopicSpec {
  id: number;
  mod: number;
  tInMod: number;
  title: string;
  sub: string;
  coreEn: string;
  coreHi: string;
  analogyTitle: string;
  analogyEn: string;
  analogyHi: string;
  steps: [
    [string, string],
    [string, string],
    [string, string],
    [string, string]
  ];
  jobUse: string;
  mistake: string;
  proHabit: string;
  rule: string;
  code: string;
  out: string;
  q1: [string, string];
  q2?: [string, string];
}

const AI_ENG_MODULE_TITLES: Record<number, string> = {
  1: 'Introduction to AI Engineering',
  2: 'Python Programming for AI',
  3: 'Software Engineering for AI Applications',
  4: 'APIs, Web and Database Fundamentals',
  5: 'Machine Learning Concepts for AI Engineers',
  6: 'Pretrained Models and Model Hubs',
  7: 'Model Serving and Integration',
  8: 'Generative AI Fundamentals',
  9: 'Prompt Engineering',
  10: 'Structured Outputs and LLM APIs',
  11: 'Building LLM-Powered Applications',
  12: 'Embeddings and Semantic Search',
  13: 'Document Ingestion and Knowledge Preparation',
  14: 'Retrieval-Augmented Generation',
  15: 'Advanced Retrieval and RAG Evaluation',
  16: 'AI Agent Fundamentals',
  17: 'Tool Calling and Function Integration',
  18: 'Agent Workflows and Orchestration',
  19: 'Multi-Agent Systems',
  20: 'Evaluating AI Applications',
  21: 'AI Security and Responsible AI',
  22: 'Observability and Reliability',
  23: 'Building Production-Ready AI Services',
  24: 'Docker and Cloud Deployment',
  25: 'CI/CD and AI Lifecycle Management',
  26: 'AI Knowledge Assistant Project',
  27: 'AI Agent Application Project',
  28: 'Production AI Capstone',
  29: 'Portfolio and Interview Preparation',
};

const TONES: PastelTone[] = ['sky', 'amber', 'lavender', 'green'];

function cleanPlain(s: string): string {
  return s.replace(/==/g, '').trim();
}

function toHighlightMarkup(s: string): string {
  return s.replace(/==([^=]+)==/g, '**$1**');
}

export function expandAiSpecs(specs: AiTopicSpec[]): Record<number, DsTopicBlueprint> {
  const out: Record<number, DsTopicBlueprint> = {};
  for (const s of specs) {
    const modTitle = AI_ENG_MODULE_TITLES[s.mod] || `AI Engineering Module ${s.mod}`;
    const corePlain = cleanPlain(s.coreEn);
    const analogyPlain = cleanPlain(s.analogyEn);

    out[s.id] = {
      id: s.id,
      modNum: s.mod,
      modTitle,
      topicNumInMod: s.tInMod,
      title: s.title,
      subtitle: s.sub,
      coreEn: toHighlightMarkup(s.coreEn),
      coreHi: toHighlightMarkup(s.coreHi),
      analogyTitle: s.analogyTitle,
      analogyEn: toHighlightMarkup(s.analogyEn),
      analogyHi: toHighlightMarkup(s.analogyHi),
      steps: s.steps.map(([title, desc], idx) => ({
        title,
        en: desc,
        hi: desc,
        tone: TONES[idx % TONES.length],
      })),
      codeLabel: `Hands-On Production Pattern: ${s.title}`,
      code: s.code,
      codeOutput: s.out,
      codeCaptionEn: `Key Rule: ${s.rule}`,
      codeCaptionHi: `Core Rule: ${s.rule}`,
      tableTitle: `Production Comparison & Engineering Cheat Sheet: ${s.title}`,
      tableHeaders: ['Dimension', 'Beginner Trap', 'Production AI Engineer Standard'],
      tableRows: [
        ['Core Approach', s.mistake, s.proHabit],
        ['Workflow Order', 'Ad-hoc unverified steps', s.steps.map(([t]) => t).join(' -> ')],
        ['Golden Rule', 'Guessing without metrics', s.rule],
        ['Real Job Impact', 'Fragile notebook demo', s.jobUse],
      ],
      tableNoteEn: `Production Takeaway: ${s.rule}`,
      tableNoteHi: `Production Takeaway: ${s.rule}`,
      mistakeEn: s.mistake,
      mistakeHi: `Common galti: ${s.mistake}`,
      proHabitEn: s.proHabit,
      proHabitHi: `Pro habit: ${s.proHabit}`,
      jobUseEn: `${s.jobUse} Core Rule: ${s.rule}`,
      jobUseHi: `${s.jobUse} Core Rule: ${s.rule}`,
      mcq1Question: `Which statement best describes ${s.title} in production AI Engineering?`,
      mcq1Correct: corePlain,
      mcq1Wrongs: [
        `Skipping validation, guardrails, and evaluation whenever applying ${s.title}.`,
        `Hardcoding secrets and deploying unverified notebooks straight to 100% of users.`,
        `Ignoring latency, token cost, and reliability goals in production systems.`,
      ],
      mcq1Explain: corePlain,
      mcq2Question: `What is the recommended senior AI Engineer habit for ${s.title}?`,
      mcq2Correct: s.proHabit,
      mcq2Wrongs: [
        s.mistake,
        'Rely only on 1 manual check without logging or automated regression tests.',
        'Bypass security and access controls to save development time.',
      ],
      mcq2Explain: `Industry Pro Habit: ${s.proHabit} (Rule: ${s.rule})`,
      realWorldScenario: `${s.jobUse} Think of it like ${s.analogyTitle}: ${analogyPlain}`,
      interviewQ1: s.q1[0],
      interviewA1: s.q1[1],
      interviewQ2:
        s.q2?.[0] ||
        `What is the biggest production mistake teams make with ${s.title}, and how do you prevent it?`,
      interviewA2:
        s.q2?.[1] ||
        `Common mistake: ${s.mistake} Production AI Engineers prevent this by following a disciplined rule: ${s.proHabit} (${s.rule}).`,
    };
  }
  return out;
}
