import type { DsTopicBlueprint } from './dsCurriculumBlueprintEngine';
import type { PastelTone } from './StructuredVisualNotesRenderer';

/**
 * Compact, high-signal specification for each Full-Stack MERN Development with AI topic (1..348).
 * Expands cleanly into DsTopicBlueprint powering:
 *  - Handwritten Visual Learning Notes (English + Hinglish + Lavender Highlights)
 *  - Practice MCQs, 5-Level Full-Stack Coding Game, and Topic Interview Q&A
 */
export interface MernTopicSpec {
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

const MERN_MODULE_TITLES: Record<number, string> = {
  1: 'Introduction to Web Development',
  2: 'Introduction to AI in Web Development',
  3: 'Computer & Internet Fundamentals',
  4: 'VS Code & Developer Tools',
  5: 'Introduction to HTML5',
  6: 'Forms & Multimedia in HTML',
  7: 'Advanced HTML5 Concepts',
  8: 'Introduction to CSS3',
  9: 'Layout Design with CSS',
  10: 'Responsive Web Design',
  11: 'Animations & Advanced CSS',
  12: 'Tailwind CSS Framework',
  13: 'Bootstrap Framework',
  14: 'Introduction to JavaScript',
  15: 'DOM Manipulation',
  16: 'Advanced JavaScript',
  17: 'Asynchronous JavaScript',
  18: 'JavaScript Mini Projects',
  19: 'Introduction to React.js',
  20: 'React Components & Props',
  21: 'State Management in React',
  22: 'React Hooks',
  23: 'React Routing',
  24: 'React Forms & Validation',
  25: 'API Integration in React',
  26: 'Advanced React Concepts',
  27: 'Figma for Frontend Developers',
  28: 'Introduction to Node.js',
  29: 'Core Concepts of Node.js',
  30: 'Introduction to Express.js',
  31: 'Building APIs with Express.js',
  32: 'Advanced Express.js Concepts',
  33: 'Introduction to MongoDB and NoSQL Databases',
  34: 'MongoDB Database Fundamentals',
  35: 'MongoDB with MERN Stack Integration',
  36: 'Authentication and Authorization',
  37: 'GitHub Copilot and AI Coding Tools',
  38: 'Git and GitHub',
  39: 'Frontend Deployment',
  40: 'Real-Time MERN Applications',
};

const TONES: PastelTone[] = ['sky', 'amber', 'lavender', 'green'];

function cleanPlain(s: string): string {
  return s.replace(/==/g, '').replace(/\*\*/g, '').trim();
}

function toHighlightMarkup(s: string): string {
  return s.replace(/==(.+?)==/g, '**$1**');
}

export function expandMernSpecs(specs: MernTopicSpec[]): Record<number, DsTopicBlueprint> {
  const out: Record<number, DsTopicBlueprint> = {};
  for (const s of specs) {
    const modTitle = MERN_MODULE_TITLES[s.mod] || `Full-Stack MERN Chapter ${s.mod}`;
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
      codeLabel: `Production Code Pattern: ${s.title}`,
      code: s.code,
      codeOutput: s.out,
      codeCaptionEn: `Golden Rule: ${s.rule}`,
      codeCaptionHi: `Golden Rule: ${s.rule}`,
      tableTitle: `Beginner vs Senior Full-Stack Standard: ${s.title}`,
      tableHeaders: ['Dimension', 'Beginner Mistake', 'Senior MERN Engineer Standard'],
      tableRows: [
        ['Core Habit', s.mistake, s.proHabit],
        ['Execution Flow', 'Ad-hoc trial & error', s.steps.map(([t]) => t).join(' -> ')],
        ['Golden Rule', 'Unstructured fragile code', s.rule],
        ['Production Impact', 'Bugs, slow UI, security leaks', s.jobUse],
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
        `Skipping proper structure, testing, and error handling when using ${s.title}.`,
        `Hardcoding secrets and passwords directly inside frontend JavaScript files.`,
        `Copying random unverified code snippets into production without reading them.`,
      ],
      mcq1Explain: corePlain,
      mcq2Question: `What is the best engineering practice when working with ${s.title}?`,
      mcq2Correct: s.proHabit,
      mcq2Wrongs: [
        s.mistake,
        'Push broken untested code directly to main without Git commits or DevTools checks.',
        'Ignore responsive design, accessibility, and backend validation completely.',
      ],
      mcq2Explain: `Pro Habit: ${s.proHabit} (${s.rule})`,
      realWorldScenario: `${s.jobUse} Analogy (${s.analogyTitle}): ${analogyPlain}`,
      interviewQ1: s.q1[0],
      interviewA1: s.q1[1],
      interviewQ2:
        s.q2?.[0] ||
        `What common mistake do beginners make in ${s.title}, and how do senior MERN developers prevent it?`,
      interviewA2:
        s.q2?.[1] ||
        `Beginners often run into this issue: ${s.mistake} Senior developers avoid it by following this habit: ${s.proHabit} (${s.rule}).`,
    };
  }
  return out;
}
