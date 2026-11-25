import type { DsTopicBlueprint } from './dsCurriculumBlueprintEngine';
import type { PastelTone } from './StructuredVisualNotesRenderer';

/**
 * Compact, high-signal specification for each AI Tools & Prompt Engineering topic (1..332).
 * Expands cleanly into DsTopicBlueprint powering:
 *  - Handwritten Visual Learning Notes (English + Hinglish + Lavender Highlights)
 *  - Practice MCQs, 5-Level Prompt/Coding Game, and Topic Interview Q&A
 */
export interface PromptTopicSpec {
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
  prompt: string;
  out: string;
  q1: [string, string];
  q2?: [string, string];
}

const PROMPT_MODULE_TITLES: Record<number, string> = {
  1: 'Introduction to Artificial Intelligence',
  2: 'Generative AI and Language Models',
  3: 'Responsible and Safe AI Use',
  4: 'AI Chat Assistants',
  5: 'AI Writing, Research and Document Tools',
  6: 'AI Image, Audio and Video Tools',
  7: 'AI Tools for Productivity',
  8: 'Anatomy of an Effective Prompt',
  9: 'Core Prompting Techniques',
  10: 'Prompt Frameworks and Reusable Templates',
  11: 'Multi-Step Prompting and Complex Tasks',
  12: 'Reasoning and Structured Outputs',
  13: 'Prompt Testing and Optimization',
  14: 'Research, Fact-Checking and Source-Based Prompting',
  15: 'AI for Writing and Communication',
  16: 'AI for Analysis, Planning and Decision Support',
  17: 'AI for Coding and Technical Problem-Solving',
  18: 'AI for Learning and Career Development',
  19: 'Image Generation and Design Prompting',
  20: 'Video, Audio and Voice Prompting',
  21: 'AI Presentations and Marketing Content',
  22: 'Multi-Tool Creative Workflows',
  23: 'AI Workflow Design',
  24: 'No-Code Automation Fundamentals',
  25: 'Building Prompt-Powered Systems',
  26: 'AI Workflow Integration and Optimization',
  27: 'Practical AI Productivity Projects',
  28: 'AI Content Creation Project',
  29: 'Prompt Engineering Portfolio',
  30: 'Final Capstone and Assessment',
};

const TONES: PastelTone[] = ['sky', 'amber', 'lavender', 'green'];

function cleanPlain(s: string): string {
  return s.replace(/==/g, '').replace(/\*\*/g, '').trim();
}

function toHighlightMarkup(s: string): string {
  return s.replace(/==([^=]+)==/g, '**$1**');
}

export function expandPromptSpecs(specs: PromptTopicSpec[]): Record<number, DsTopicBlueprint> {
  const out: Record<number, DsTopicBlueprint> = {};
  for (const s of specs) {
    const modTitle = PROMPT_MODULE_TITLES[s.mod] || `AI Tools & Prompt Module ${s.mod}`;
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
      codeLabel: `Ready-to-Use Prompt / Workflow Pattern: ${s.title}`,
      code: s.prompt,
      codeOutput: s.out,
      codeCaptionEn: `Golden Rule: ${s.rule}`,
      codeCaptionHi: `Golden Rule: ${s.rule}`,
      tableTitle: `Weak vs Pro Prompting Comparison: ${s.title}`,
      tableHeaders: ['Dimension', 'Beginner Mistake', 'Pro Prompt Engineer Standard'],
      tableRows: [
        ['Core Habit', s.mistake, s.proHabit],
        ['Step Flow', 'Random one-line prompt', s.steps.map(([t]) => t).join(' -> ')],
        ['Key Formula', 'Guessing & hoping', s.rule],
        ['Workplace Impact', 'Generic unusable drafts', s.jobUse],
      ],
      tableNoteEn: `Key Takeaway: ${s.rule}`,
      tableNoteHi: `Key Takeaway: ${s.rule}`,
      mistakeEn: s.mistake,
      mistakeHi: `Common galti: ${s.mistake}`,
      proHabitEn: s.proHabit,
      proHabitHi: `Pro habit: ${s.proHabit}`,
      jobUseEn: `${s.jobUse} Core Rule: ${s.rule}`,
      jobUseHi: `${s.jobUse} Core Rule: ${s.rule}`,
      mcq1Question: `Which statement best describes ${s.title}?`,
      mcq1Correct: corePlain,
      mcq1Wrongs: [
        `Using vague one-line prompts and skipping human review for ${s.title}.`,
        `Sharing private passwords and customer data directly inside public AI chats.`,
        `Assuming AI outputs are 100% error-free without ever verifying facts.`,
      ],
      mcq1Explain: corePlain,
      mcq2Question: `What is the best professional habit when applying ${s.title}?`,
      mcq2Correct: s.proHabit,
      mcq2Wrongs: [
        s.mistake,
        'Copy-paste raw unedited AI output directly to clients without checking.',
        'Never test or refine prompts across different real-world inputs.',
      ],
      mcq2Explain: `Pro Habit: ${s.proHabit} (${s.rule})`,
      realWorldScenario: `${s.jobUse} Analogy (${s.analogyTitle}): ${analogyPlain}`,
      interviewQ1: s.q1[0],
      interviewA1: s.q1[1],
      interviewQ2:
        s.q2?.[0] ||
        `What is the most common mistake beginners make with ${s.title}, and how do you avoid it?`,
      interviewA2:
        s.q2?.[1] ||
        `Beginners often make this mistake: ${s.mistake} Professionals avoid it by following a clear habit: ${s.proHabit} (${s.rule}).`,
    };
  }
  return out;
}
