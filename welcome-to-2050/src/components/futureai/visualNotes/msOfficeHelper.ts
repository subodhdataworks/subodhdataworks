import type { DsTopicBlueprint } from './dsCurriculumBlueprintEngine';
import type { PastelTone } from './StructuredVisualNotesRenderer';

/**
 * Compact, high-signal specification for each Microsoft 365 & Copilot AI topic (1..301).
 * Expands cleanly into DsTopicBlueprint powering:
 *  - Handwritten Visual Learning Notes (English + Hinglish + Lavender Highlights)
 *  - Practice MCQs, 5-Level Office/Copilot Workflow Game, and Topic Interview Q&A
 */
export interface MsOfficeTopicSpec {
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

const MS_OFFICE_MODULE_TITLES: Record<number, string> = {
  1: 'Introduction to Microsoft 365',
  2: 'Introduction to Microsoft Copilot AI',
  3: 'OneDrive, SharePoint and File Management',
  4: 'AI Productivity, Privacy and Security',
  5: 'Microsoft Word Fundamentals',
  6: 'Copilot in Word',
  7: 'Professional Documents with Word and Copilot',
  8: 'Microsoft Excel Fundamentals',
  9: 'Intermediate and Advanced Excel',
  10: 'Copilot in Excel',
  11: 'Excel Reporting and Business Analysis',
  12: 'Microsoft PowerPoint Fundamentals',
  13: 'Copilot in PowerPoint',
  14: 'Professional Business Presentations',
  15: 'Microsoft Outlook Fundamentals',
  16: 'Copilot in Outlook',
  17: 'Email and Calendar Productivity',
  18: 'Microsoft Teams Fundamentals',
  19: 'Copilot in Microsoft Teams',
  20: 'Microsoft Forms and Response Analysis',
  21: 'Power Automate Fundamentals',
  22: 'Business Process Automation',
  23: 'Integrated Microsoft 365 with Copilot',
  24: 'Professional Office Projects',
  25: 'Security, Privacy and Responsible Copilot Use',
  26: 'Final Capstone and Assessment',
};

const TONES: PastelTone[] = ['sky', 'amber', 'lavender', 'green'];

function cleanPlain(s: string): string {
  return s.replace(/==/g, '').replace(/\*\*/g, '').trim();
}

function toHighlightMarkup(s: string): string {
  return s.replace(/==(.+?)==/g, '**$1**');
}

export function expandMsOfficeSpecs(specs: MsOfficeTopicSpec[]): Record<number, DsTopicBlueprint> {
  const out: Record<number, DsTopicBlueprint> = {};
  for (const s of specs) {
    const modTitle = MS_OFFICE_MODULE_TITLES[s.mod] || `Microsoft 365 Module ${s.mod}`;
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
      codeLabel: `Office Shortcut / Copilot Prompt Pattern: ${s.title}`,
      code: s.prompt,
      codeOutput: s.out,
      codeCaptionEn: `Golden Rule: ${s.rule}`,
      codeCaptionHi: `Golden Rule: ${s.rule}`,
      tableTitle: `Manual vs Microsoft 365 + Copilot Pro Standard: ${s.title}`,
      tableHeaders: ['Dimension', 'Beginner Mistake', 'Microsoft 365 Pro Standard'],
      tableRows: [
        ['Core Habit', s.mistake, s.proHabit],
        ['Step Flow', 'Slow manual trial-and-error', s.steps.map(([t]) => t).join(' -> ')],
        ['Golden Rule', 'Unstructured file / prompt', s.rule],
        ['Office Impact', 'Wasted hours & formatting errors', s.jobUse],
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
        `Doing everything manually without cloud sync, styles, or Copilot verification for ${s.title}.`,
        `Emailing unformatted local attachments like Final_v9.docx instead of sharing cloud links.`,
        `Trusting Copilot output blindly without checking numbers, sources, or permissions.`,
      ],
      mcq1Explain: corePlain,
      mcq2Question: `What is the best workplace habit when using ${s.title}?`,
      mcq2Correct: s.proHabit,
      mcq2Wrongs: [
        s.mistake,
        'Skip cloud AutoSave and store sensitive company files on unsecured personal drives.',
        'Ignore formatting consistency and send raw drafts straight to leadership.',
      ],
      mcq2Explain: `Pro Habit: ${s.proHabit} (${s.rule})`,
      realWorldScenario: `${s.jobUse} Analogy (${s.analogyTitle}): ${analogyPlain}`,
      interviewQ1: s.q1[0],
      interviewA1: s.q1[1],
      interviewQ2:
        s.q2?.[0] ||
        `What common mistake do beginners make in ${s.title}, and how do Microsoft 365 professionals avoid it?`,
      interviewA2:
        s.q2?.[1] ||
        `Beginners often fall into this trap: ${s.mistake} Professionals prevent it by following this habit: ${s.proHabit} (${s.rule}).`,
    };
  }
  return out;
}
