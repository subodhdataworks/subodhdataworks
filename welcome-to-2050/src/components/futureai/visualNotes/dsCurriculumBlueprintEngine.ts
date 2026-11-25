import type { StructuredVisualNoteTopic, VisualNoteBlock, PastelTone } from './StructuredVisualNotesRenderer';
import type { TopicAssessmentData } from '../data/module01TopicContent';
import type { TopicQuestionBank } from '../data/questionBankRegistry';

/**
 * Rich, zero-to-hero, topic-specific pedagogical blueprint for any Data Science & Agentic AI topic.
 * Produces BOTH:
 *   1. Multi-page bilingual (English + Natural Hinglish) Voice-Synced Visual Learning Notes
 *   2. Matching interactive Assessments (MCQs, Puzzle Challenge, Real-World Challenge, Topic Interview)
 */
export interface DsTopicBlueprint {
  id: number;
  modNum: number;
  modTitle: string;
  topicNumInMod: number;
  title: string;
  subtitle: string;
  /** Zero-to-hero plain-English & Hinglish definition */
  coreEn: string;
  coreHi: string;
  /** Everyday non-tech analogy (shopping, cricket, hospital, cooking, banking, etc.) */
  analogyTitle: string;
  analogyEn: string;
  analogyHi: string;
  /** 4 ordered conceptual/process steps (used for both Flow Diagram & Puzzle Challenge!) */
  steps: { title: string; en: string; hi: string; tone?: PastelTone }[];
  /** Optional realistic code snippet + verified output (Python/SQL/Shell) */
  codeLabel?: string;
  code?: string;
  codeOutput?: string;
  codeCaptionEn?: string;
  codeCaptionHi?: string;
  /** Concrete worked example table (before/after, dataset, comparison) */
  tableTitle: string;
  tableHeaders: string[];
  tableRows: string[][];
  tableNoteEn: string;
  tableNoteHi: string;
  /** Common beginner mistake vs job-ready pro habit */
  mistakeEn: string;
  mistakeHi: string;
  proHabitEn: string;
  proHabitHi: string;
  /** Job-ready Data Science application */
  jobUseEn: string;
  jobUseHi: string;
  /** Topic-specific MCQs (derived directly from the visual lesson) */
  mcq1Question: string;
  mcq1Correct: string;
  mcq1Wrongs: [string, string, string];
  mcq1Explain: string;
  mcq2Question: string;
  mcq2Correct: string;
  mcq2Wrongs: [string, string, string];
  mcq2Explain: string;
  /** Topic-specific Real-World Scenario & Interview Q&A */
  realWorldScenario: string;
  interviewQ1: string;
  interviewA1: string;
  interviewQ2: string;
  interviewA2: string;
}

const STEP_TONES: PastelTone[] = ['sky', 'amber', 'lavender', 'green', 'pink'];

export function buildVisualNoteFromBlueprint(bp: DsTopicBlueprint): StructuredVisualNoteTopic {
  const modCode = `DS-M${String(bp.modNum).padStart(2, '0')}`;
  const modTag = `FUTURE IT INDUSTRY | DS M${String(bp.modNum).padStart(2, '0')} | TOPIC ${bp.topicNumInMod}`;
  const hasCode = Boolean(bp.code && bp.code.trim().length > 0);
  const pageCount = hasCode ? 4 : 3;

  const pages: StructuredVisualNoteTopic['pages'] = [
    // PAGE 1: Zero-to-Hero Definition + Everyday Non-Tech Analogy + 4-Step Visual Flow
    {
      moduleTag: modTag,
      pageTag: `PAGE 1 OF ${pageCount}`,
      footerPage: `1 / ${pageCount}`,
      title: bp.title,
      subtitle: bp.subtitle,
      intro: {
        icon: 'database',
        titleEn: /^(what|how|why)\b/i.test(bp.title.trim())
          ? `Start From Zero: ${bp.title.replace(/\?+$/, '')}?`
          : `Start From Zero: What Is ${bp.title.replace(/\?+$/, '')}?`,
        titleHi: `Zero Se Samajhiye: ${bp.title.replace(/\?+$/, '')} Kya Hai?`,
        bodyEn: bp.coreEn,
        bodyHi: bp.coreHi,
      },
      sections: [
        {
          pill: `Everyday Non-Tech Analogy: ${bp.analogyTitle}`,
          blocks: [
            {
              type: 'note',
              tone: 'lavender',
              bodyEn: bp.analogyEn,
              bodyHi: bp.analogyHi,
            },
          ],
        },
        {
          pill: `How ${bp.title} Works — Step by Step`,
          blocks: [
            {
              type: 'flow',
              items: bp.steps.map((s, idx) => ({
                title: s.title,
                bodyEn: s.en,
                bodyHi: s.hi,
                tone: s.tone || STEP_TONES[idx % STEP_TONES.length],
              })),
            },
          ],
        },
      ],
    },
    // PAGE 2: Practical Worked Dataset / Table Example
    {
      moduleTag: modTag,
      pageTag: `PAGE 2 OF ${pageCount}`,
      footerPage: `2 / ${pageCount}`,
      title: bp.tableTitle,
      subtitle: 'SEEING THE CONCEPT ON A REALISTIC SAMPLE DATASET',
      sections: [
        {
          pill: bp.tableTitle,
          blocks: [
            {
              type: 'table',
              headers: bp.tableHeaders,
              rows: bp.tableRows,
              noteEn: bp.tableNoteEn,
              noteHi: bp.tableNoteHi,
            },
          ],
        },
      ],
    },
  ];

  // OPTIONAL PAGE 3: Hands-On Code + Verified Output (for coding/SQL/ML/AI topics)
  if (hasCode) {
    const codeBlock: VisualNoteBlock = {
      type: 'sql',
      label: bp.codeLabel || 'PRACTICAL EXAMPLE',
      code: bp.code!,
      output: bp.codeOutput,
      captionEn: bp.codeCaptionEn,
      captionHi: bp.codeCaptionHi,
    };
    pages.push({
      moduleTag: modTag,
      pageTag: `PAGE 3 OF ${pageCount}`,
      footerPage: `3 / ${pageCount}`,
      title: `Hands-On Practice: ${bp.title}`,
      subtitle: 'BEGINNER-FRIENDLY CODE WITH VERIFIED OUTPUT',
      sections: [
        {
          pill: `Step-by-Step Practical Example`,
          blocks: [codeBlock],
        },
      ],
    });
  }

  // FINAL PAGE: Common Mistake vs Pro Habit + Real Job Impact + Key Takeaways
  pages.push({
    moduleTag: modTag,
    pageTag: `PAGE ${pageCount} OF ${pageCount}`,
    footerPage: `${pageCount} / ${pageCount}`,
    title: `Mistakes to Avoid & Job-Ready Summary`,
    subtitle: 'HOW DATA SCIENTISTS APPLY THIS IN REAL COMPANIES',
    sections: [
      {
        pill: 'Beginner Mistake vs Industry Pro Habit',
        blocks: [
          {
            type: 'compare',
            items: [
              {
                title: 'Common Beginner Mistake',
                bodyEn: bp.mistakeEn,
                bodyHi: bp.mistakeHi,
                tone: 'pink',
              },
              {
                title: 'Job-Ready Pro Habit',
                bodyEn: bp.proHabitEn,
                bodyHi: bp.proHabitHi,
                tone: 'green',
              },
            ],
          },
        ],
      },
      {
        pill: 'How You Use This on the Job & Key Takeaways',
        blocks: [
          {
            type: 'bullets',
            tone: 'green',
            items: [
              { en: `**Real Job Use:** ${bp.jobUseEn}`, hi: `**Real Job Use:** ${bp.jobUseHi}` },
              { en: `**Core Formula / Idea:** ${bp.coreEn}`, hi: `**Asli Samajh:** ${bp.coreHi}` },
              { en: `**Always Remember:** ${bp.proHabitEn}`, hi: `**Yaad Rakhein:** ${bp.proHabitHi}` },
            ],
          },
        ],
      },
    ],
  });

  return {
    module: modCode,
    moduleTitle: bp.modTitle,
    topic: bp.title,
    pageCount,
    sampleDataNotice:
      'All sample numbers, datasets, and scenarios in this visual lesson are illustrative beginner examples designed for crystal-clear understanding.',
    pages,
  };
}

function stripNoteMarkup(s: string): string {
  return (s || '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/==(.+?)==/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function rotateOptions<T>(items: T[], shift: number): { ordered: T[]; correctIndex: number } {
  const n = items.length;
  const s = ((shift % n) + n) % n;
  const ordered: T[] = [];
  for (let i = 0; i < n; i++) {
    ordered.push(items[(i - s + n) % n]);
  }
  return { ordered, correctIndex: s };
}

export function buildAssessmentFromBlueprint(bp: DsTopicBlueprint): TopicAssessmentData {
  const keys: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];

  const cleanCore = stripNoteMarkup(bp.coreEn);
  const cleanMistake = stripNoteMarkup(bp.mistakeEn);
  const cleanProHabit = stripNoteMarkup(bp.proHabitEn);
  const cleanJobUse = stripNoteMarkup(bp.jobUseEn);
  const cleanRule = stripNoteMarkup(bp.keyTakeaways?.[0] || bp.proHabitEn);

  // Q1: Core Concept from Visual Learning Page 1
  const q1Rot = rotateOptions([stripNoteMarkup(bp.mcq1Correct), ...(bp.mcq1Wrongs || []).map(stripNoteMarkup)], bp.id);

  // Q2: Applied Best Practice / Pro Habit from Final Visual Learning Page
  const q2Rot = rotateOptions([stripNoteMarkup(bp.mcq2Correct), ...(bp.mcq2Wrongs || []).map(stripNoteMarkup)], bp.id + 2);

  // Q3: Step-by-Step Workflow from Visual Learning Page 2
  const safeSteps = bp.steps || [];
  const step0 = safeSteps[0] || { title: 'Understand Input', en: 'Inspect inputs cleanly.' };
  const step1 = safeSteps[1] || { title: 'Apply Core Logic', en: 'Apply the core method.' };
  const step2 = safeSteps[2] || { title: 'Verify Output', en: 'Validate outputs carefully.' };
  const step3 = safeSteps[3] || { title: 'Ship & Monitor', en: 'Deliver reliable results.' };
  const q3Correct = `${step0.title} → ${step1.title} → ${step2.title} → ${step3.title}`;
  const q3Rot = rotateOptions(
    [
      q3Correct,
      `${step3.title} → ${step2.title} → ${step0.title} → ${step1.title}`,
      `${step2.title} → ${step0.title} → ${step3.title} → ${step1.title}`,
      `Skip ${step0.title} and jump straight to ${step3.title} without checking.`,
    ],
    bp.id + 1
  );

  // Q4: Real-World Production Rule / Mistake Avoidance from Visual Learning Notes
  const q4Rot = rotateOptions(
    [
      cleanRule,
      cleanMistake,
      `Ignore ${bp.title} fundamentals and rely purely on guesswork in production.`,
      `Never verify results or edge cases when applying ${bp.title}.`,
    ],
    bp.id + 3
  );

  const blockPalettes = [
    { bg: '#eef2ff', textCol: '#3730a3', borderCol: '#c7d2fe' },
    { bg: '#ecfdf5', textCol: '#065f46', borderCol: '#a7f3d0' },
    { bg: '#fffbeb', textCol: '#92400e', borderCol: '#fde68a' },
    { bg: '#fdf2f8', textCol: '#9d174d', borderCol: '#fbcfe8' },
  ];
  const stepBlocks = bp.steps.slice(0, 4).map((s, idx) => ({
    id: `step-${idx + 1}`,
    text: `${s.title}: ${stripNoteMarkup(s.en)}`,
    ...blockPalettes[idx % blockPalettes.length],
  }));
  // Shuffle puzzle presentation deterministically so student actually rearranges it
  const shuffledBlocks =
    stepBlocks.length === 4
      ? [stepBlocks[2], stepBlocks[0], stepBlocks[3], stepBlocks[1]]
      : [...stepBlocks].reverse();

  // Level 3 Bug Hunter: Actual Beginner Mistake vs Pro Habit from Visual Learning Notes
  const l3PatchesRaw = [
    {
      id: 'p1',
      code: `PRO HABIT: ${cleanProHabit}`,
      label: `Apply the Visual Notes Pro Habit for ${bp.title}`,
      isCorrect: true,
    },
    {
      id: 'p2',
      code: `MISTAKE: ${cleanMistake}`,
      label: 'Keep the common beginner mistake unchanged',
      isCorrect: false,
    },
    {
      id: 'p3',
      code: `SKIP: Bypass validation & review for ${bp.title}`,
      label: 'Skip checks and ship blindly to production',
      isCorrect: false,
    },
  ];
  const l3Rot = rotateOptions(l3PatchesRaw, bp.id % 3);

  // Level 4 Build & Run: Actual Step 1 & Step 2 from Visual Learning Notes
  const slot1Token = step0.title;
  const slot2Token = step1.title;
  const l4Tokens = rotateOptions(
    [slot1Token, slot2Token, 'Skip Validation', 'Guess Without Testing'],
    bp.id + 1
  ).ordered;

  // Level 5 Boss Fight: Phase 1 (Pro Habit vs Mistake) + Phase 2 (Golden Rule / Core Mastery)
  const p1Rot = rotateOptions(
    [
      { id: 'rw-1', text: cleanProHabit, isCorrect: true },
      { id: 'rw-2', text: cleanMistake, isCorrect: false },
      {
        id: 'rw-3',
        text: `Ignore ${bp.title} guidelines and skip verification completely.`,
        isCorrect: false,
      },
    ],
    bp.id % 3
  );

  const p2CorrectText = bp.codeOutput
    ? `Expected Result: ${stripNoteMarkup(bp.codeOutput)}`
    : cleanRule;
  const p2Rot = rotateOptions(
    [
      { id: 'p2-1', text: p2CorrectText, isCorrect: true },
      { id: 'p2-2', text: `Leave ${bp.title} unverified and ignore edge cases.`, isCorrect: false },
      { id: 'p2-3', text: cleanMistake, isCorrect: false },
    ],
    (bp.id + 1) % 3
  );

  return {
    topicId: bp.id,
    topicNumber: bp.id,
    topicTitle: bp.title,
    pdfPages: `M${String(bp.modNum).padStart(2, '0')} • Visual Learning Notes Practice`,
    mcqs: [
      {
        id: 1,
        tag: `M${String(bp.modNum).padStart(2, '0')} Core Concept`,
        difficulty: 'Beginner',
        question: bp.mcq1Question,
        options: q1Rot.ordered.map((text, idx) => ({ key: keys[idx], text })),
        correct: q1Rot.correctIndex,
        hint: `Think back to the everyday analogy (${bp.analogyTitle}) on Visual Learning Page 1.`,
        explanation: stripNoteMarkup(bp.mcq1Explain),
        realWorldContext: cleanJobUse,
      },
      {
        id: 2,
        tag: `M${String(bp.modNum).padStart(2, '0')} Pro Habit Check`,
        difficulty: 'Fundamental',
        question: bp.mcq2Question,
        options: q2Rot.ordered.map((text, idx) => ({ key: keys[idx], text })),
        correct: q2Rot.correctIndex,
        hint: 'Check the Beginner Mistake vs Pro Habit box in your Visual Learning Notes.',
        explanation: stripNoteMarkup(bp.mcq2Explain),
        realWorldContext: stripNoteMarkup(bp.realWorldScenario),
      },
      {
        id: 3,
        tag: `M${String(bp.modNum).padStart(2, '0')} Step-by-Step Flow`,
        difficulty: 'Core',
        question: `According to the Visual Learning Notes, what is the right step-by-step workflow for ${bp.title}?`,
        options: q3Rot.ordered.map((text, idx) => ({ key: keys[idx], text })),
        correct: q3Rot.correctIndex,
        hint: `Recall the 4-step visual workflow starting with "${step0.title}".`,
        explanation: `The Visual Notes workflow moves cleanly in order: ${q3Correct}.`,
        realWorldContext: cleanJobUse,
      },
      {
        id: 4,
        tag: `M${String(bp.modNum).padStart(2, '0')} Production Rule`,
        difficulty: 'Core',
        question: `Which takeaway from the Visual Learning Notes should you remember on the job for ${bp.title}?`,
        options: q4Rot.ordered.map((text, idx) => ({ key: keys[idx], text })),
        correct: q4Rot.correctIndex,
        hint: `Check the Key Takeaways & Golden Rule section at the end of ${bp.title}.`,
        explanation: `${cleanRule} (${cleanJobUse})`,
        realWorldContext: cleanJobUse,
      },
    ],
    game: {
      l1: {
        title: `Level 1 — Puzzle: Order ${bp.title} Workflow`,
        question: `Arrange the 4 steps of ${bp.title} from Visual Learning Notes in the exact logical sequence!`,
        blocks: shuffledBlocks,
        correctOrder: stepBlocks.map((b) => b.id),
        explanation: bp.steps.slice(0, 4).map((s) => s.title).join(' → '),
      },
      l2: {
        title: `Level 2 — Concept Trace: ${bp.title}`,
        question: bp.mcq2Question,
        snippetLines: (bp.code ? bp.code.split('\n').slice(0, 6) : [
          `// Topic: ${bp.title}`,
          `// Analogy: ${bp.analogyTitle}`,
          `// Step 1: ${step0.title}`,
          `// Outcome: ${bp.codeOutput || cleanRule}`,
        ]),
        options: q2Rot.ordered.map((text, idx) => ({
          id: keys[idx].toLowerCase(),
          text,
          isCorrect: idx === q2Rot.correctIndex,
          note: idx === q2Rot.correctIndex
            ? stripNoteMarkup(bp.mcq2Explain)
            : `Re-check the worked example and Pro Habit for ${bp.title} in Visual Learning Notes.`,
        })),
      },
      l3: {
        title: `Level 3 — Bug Hunter: Fix the Beginner Mistake in ${bp.title}`,
        question: `Spot the Beginner Mistake from Visual Learning Notes on line 3 and deploy the Pro Habit patch!`,
        lines: [
          { line: 1, text: `TOPIC: ${bp.title}`, isBug: false },
          { line: 2, text: `STEP 1: ${step0.title} — ${stripNoteMarkup(step0.en)}`, isBug: false },
          {
            line: 3,
            text: `BUGGY HABIT: ${cleanMistake}`,
            isBug: true,
            bugMsg: `Visual Notes Pro Habit: ${cleanProHabit}`,
          },
          { line: 4, text: `GOAL: ${cleanJobUse}`, isBug: false },
        ],
        bugLine: 3,
        patches: l3Rot.ordered,
      },
      l4: {
        title: `Level 4 — Build & Run: Complete the ${bp.title} Blueprint`,
        question: `Snap Stage 1 (${slot1Token}) and Stage 2 (${slot2Token}) from Visual Learning Notes into the pipeline!`,
        prefixCode: `// ${bp.title} — Visual Notes Workflow\nStage 1 -> `,
        slot1Target: `Step 1 (${slot1Token})`,
        midCode: `  ==>  Stage 2 -> `,
        slot2Target: `Step 2 (${slot2Token})`,
        suffixCode: `  ==>  Final: ${step2.title} & ${step3.title}`,
        availableTokens: l4Tokens,
        correctSlot1: slot1Token,
        correctSlot2: slot2Token,
        expectedOutput: bp.codeOutput || `${slot1Token} → ${slot2Token} Verified!`,
      },
      l5: {
        bossName: `M${String(bp.modNum).padStart(2, '0')} Production Boss`,
        title: `Level 5 — Real-World Boss: ${bp.title}`,
        question: stripNoteMarkup(bp.realWorldScenario),
        scenario: cleanJobUse,
        phase1Prompt: `Strike 1 — Strategy: Choose the job-ready Pro Habit for ${bp.title} from your Visual Learning Notes!`,
        phase1Options: p1Rot.ordered,
        phase2Prompt: `Final Strike — Verification: Confirm the expected outcome / golden rule for ${bp.title}!`,
        phase2Options: p2Rot.ordered,
        phase2Starter: bp.code || `// ${bp.title}\n// Rule: ${cleanRule}`,
        phase2Solution: bp.code || `// ${bp.title}\n// Rule: ${cleanRule}`,
        phase2ExpectedOutput: bp.codeOutput || `${bp.title} Verified`,
      },
    },
    codingChallenges: [
      {
        id: 1,
        title: `Real-World Challenge: ${bp.title}`,
        prompt: stripNoteMarkup(bp.realWorldScenario),
        expectedApproach: cleanProHabit,
        starterCode: bp.code || `// ${bp.title}\n// Apply: ${step0.title} -> ${step1.title}`,
        solutionCode: bp.code || `// ${bp.title}\n// Apply: ${step0.title} -> ${step1.title}`,
        expectedOutput: bp.codeOutput || `Applied: ${bp.title}`,
        hints: [
          {
            step: 1,
            title: 'Apply Core Concept',
            desc: cleanCore,
            code: (bp.code ? bp.code.split('\n')[0] : step0.title),
          },
          {
            step: 2,
            title: 'Job-Ready Verification',
            desc: cleanProHabit,
            code: (bp.code ? bp.code.split('\n').slice(-1)[0] : step3.title),
          },
        ],
      },
    ],
    interviewQuestions: [
      {
        id: 1,
        tag: 'Core Understanding',
        question: bp.interviewQ1,
        modelAnswer: stripNoteMarkup(bp.interviewA1),
      },
      {
        id: 2,
        tag: 'Real-World Application',
        question: bp.interviewQ2,
        modelAnswer: stripNoteMarkup(bp.interviewA2),
      },
      {
        id: 3,
        tag: 'Workflow & Pitfalls',
        question: `Walk through your step-by-step approach for ${bp.title}, and what common beginner mistake do you avoid?`,
        modelAnswer: `Follow the 4-step flow: ${q3Correct}. Avoid this mistake: ${cleanMistake} Instead, follow the pro habit: ${cleanProHabit}`,
      },
    ],
  };
}

const BLUEPRINT_QBANK_CACHE: Record<string, TopicQuestionBank> = {};

/**
 * Converts any DsTopicBlueprint (Data Science, ML Engineering, AI Engineering,
 * AI Tools & Prompt, Microsoft 365 & Copilot, Full-Stack MERN) into the exact
 * TopicQuestionBank schema consumed by the Data Analyst unified UI
 * (PythonPracticeArena4Games: 1. MCQ (5/5) -> 2. Puzzle Challenge (3 Puzzles) -> 3. Real-World Challenge (1/1)).
 */
export function buildTopicQuestionBankFromBlueprint(
  bp: DsTopicBlueprint,
  courseKey: string,
  courseTitle: string
): TopicQuestionBank {
  const cacheKey = `${courseKey}:${bp.id}`;
  if (BLUEPRINT_QBANK_CACHE[cacheKey]) return BLUEPRINT_QBANK_CACHE[cacheKey];

  const assessment = buildAssessmentFromBlueprint(bp);
  const keys: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];
  const cleanCore = stripNoteMarkup(bp.coreEn);
  const cleanMistake = stripNoteMarkup(bp.mistakeEn);
  const cleanProHabit = stripNoteMarkup(bp.proHabitEn);
  const cleanJobUse = stripNoteMarkup(bp.jobUseEn);
  const cleanAnalogy = stripNoteMarkup(bp.analogyEn);
  const safeSteps = bp.steps || [];
  const step0 = safeSteps[0] || { title: 'Understand Input', en: 'Inspect inputs cleanly.' };
  const step1 = safeSteps[1] || { title: 'Apply Core Logic', en: 'Apply the core method.' };
  const step2 = safeSteps[2] || { title: 'Verify Output', en: 'Validate outputs carefully.' };
  const step3 = safeSteps[3] || { title: 'Ship & Monitor', en: 'Deliver reliable results.' };

  // 5th MCQ directly from Visual Learning Analogy & Real-World Job Use (so every topic has 5/5 MCQs like Data Analyst!)
  const q5Rot = rotateOptions(
    [
      cleanJobUse,
      `Only memorize syntax without applying ${bp.title} to real projects.`,
      `Avoid using ${bp.title} in team or production environments.`,
      cleanMistake,
    ],
    bp.id + 1
  );

  const game1Quiz = [
    ...assessment.mcqs.map((m) => ({
      id: m.id,
      question: m.question,
      options: m.options,
      correct: m.correct,
      explanation: m.explanation,
      hint: m.hint,
      realWorldContext: m.realWorldContext,
    })),
    {
      id: 5,
      question: `How do professionals use ${bp.title} on the job (as explained via "${bp.analogyTitle}" in Visual Learning Notes)?`,
      options: q5Rot.ordered.map((text, idx) => ({ key: keys[idx], text })),
      correct: q5Rot.correctIndex,
      explanation: `${cleanJobUse} (${cleanAnalogy})`,
      hint: `Recall the "${bp.analogyTitle}" analogy and Real-World Job Use card in Visual Learning Notes.`,
      realWorldContext: cleanJobUse,
    },
  ];

  // 3 Interactive Puzzles directly from Visual Learning Notes
  const stepTokens = [step0.title, step1.title, step2.title, step3.title];
  const codeLines = (bp.code || '')
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 0 && !l.startsWith('//') && !l.startsWith('#'))
    .slice(0, 4);
  const p2Expected =
    codeLines.length >= 3
      ? codeLines
      : [
          `1. ${step0.title}`,
          `2. ${step1.title}`,
          `3. ${step2.title}`,
          `4. ${step3.title}`,
        ];
  const p2Shuffled =
    p2Expected.length === 4
      ? [p2Expected[2], p2Expected[0], p2Expected[3], p2Expected[1]]
      : [...p2Expected].reverse();

  const p3Expected = [
    `Identify: ${bp.title}`,
    `Follow: ${step0.title}`,
    `Avoid: Beginner Mistake`,
    `Verify: Pro Habit`,
  ];
  const p3Shuffled = [p3Expected[1], p3Expected[3], p3Expected[0], p3Expected[2]];

  const game2Puzzles = [
    {
      id: 1,
      title: `Puzzle 1: Order ${bp.title} Workflow`,
      prompt: `Arrange the 4 steps of ${bp.title} from Visual Learning Notes in exact sequence.`,
      tokens: stepTokens,
      shuffled: [stepTokens[2], stepTokens[0], stepTokens[3], stepTokens[1]],
      expected: stepTokens,
      hint: `Start with "${step0.title}" and finish with "${step3.title}".`,
    },
    {
      id: 2,
      title: `Puzzle 2: Assemble ${bp.title} Implementation`,
      prompt: `Put the ${bp.title} implementation lines from Visual Learning Notes in the right order.`,
      tokens: p2Expected,
      shuffled: p2Shuffled,
      expected: p2Expected,
      hint: `Check the worked example in your Visual Learning Notes for ${bp.title}.`,
    },
    {
      id: 3,
      title: `Puzzle 3: Production Readiness Flow`,
      prompt: `Order the professional engineering checklist for ${bp.title}.`,
      tokens: p3Expected,
      shuffled: p3Shuffled,
      expected: p3Expected,
      hint: `Always identify the goal first, apply Step 1, avoid beginner mistakes, and verify with the Pro Habit.`,
    },
  ];

  const game3MatchPairs = [step0, step1, step2, step3].map((st, idx) => ({
    id: idx + 1,
    snippet: st.title,
    meaning: stripNoteMarkup(st.en),
  }));

  const game4Missions = [
    {
      id: 1,
      title: `${bp.title} — Real-World Production Challenge`,
      prompt: stripNoteMarkup(bp.realWorldScenario),
      scenario: `${cleanJobUse} Which approach solves this cleanly without falling into beginner mistakes?`,
      expectedResponse: cleanProHabit,
      starterCode: bp.code || `// ${bp.title}\n// Apply: ${step0.title} -> ${step1.title}`,
      expectedOutput: bp.codeOutput || `${bp.title} verified in production`,
    },
  ];

  const bank: TopicQuestionBank = {
    tabId: 1,
    tabName: courseTitle,
    moduleId: bp.modNum,
    moduleName: bp.modTitle,
    topicKey: `${courseKey}-${bp.modNum}.${bp.topicNumInMod}`,
    id: bp.id,
    topicTitle: bp.title,
    mode: bp.code ? 'Coding/tool practice' : 'Non-coding',
    game1Quiz,
    game2Puzzles,
    game3MatchPairs,
    game4Missions,
    mockInterview: assessment.interviewQuestions.map((q) => ({
      id: q.id,
      question: q.question,
      sampleAnswer: q.modelAnswer,
    })),
    published: true,
    deleted: false,
  };

  BLUEPRINT_QBANK_CACHE[cacheKey] = bank;
  return bank;
}
