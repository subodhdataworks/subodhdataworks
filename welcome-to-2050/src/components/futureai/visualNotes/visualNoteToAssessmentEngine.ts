import type { TopicAssessmentData } from '../data/module01TopicContent';
import type { StructuredVisualNoteTopic, VisualNoteBlock } from './StructuredVisualNotesRenderer';

const VISUAL_NOTE_ASSESSMENT_CACHE: Record<string, TopicAssessmentData> = {};

function cleanText(raw?: string): string {
  return (raw || '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/==(.+?)==/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function rotate<T>(items: T[], shift: number): { ordered: T[]; correctIndex: number } {
  const n = items.length;
  const s = ((shift % n) + n) % n;
  const ordered: T[] = [];
  for (let i = 0; i < n; i++) {
    ordered.push(items[(i - s + n) % n]);
  }
  return { ordered, correctIndex: s };
}

/**
 * Synthesizes 100% Visual-Notes-aligned Practice MCQs, 5-Level Puzzle/Game, and
 * Topic Interview Q&As directly from ANY StructuredVisualNoteTopic (Excel, SQL,
 * Power BI, GenAI, Foundations, Python) so students are always tested strictly on
 * what they just learned in Visual Learning Notes — never an unrelated Python fallback.
 */
export function buildAssessmentFromVisualNote(
  note: StructuredVisualNoteTopic,
  topicId: number,
  cacheKeyPrefix: string
): TopicAssessmentData {
  const cacheKey = `${cacheKeyPrefix}:${topicId}`;
  if (VISUAL_NOTE_ASSESSMENT_CACHE[cacheKey]) return VISUAL_NOTE_ASSESSMENT_CACHE[cacheKey];

  const allBlocks: VisualNoteBlock[] = (note.pages || []).flatMap((p) =>
    (p.sections || []).flatMap((s) => s.blocks || [])
  );

  // 1. Extract core definition from heroText or first callout/takeaways
  const coreDef =
    cleanText(note.pages?.[0]?.heroText) ||
    cleanText(note.pages?.[0]?.subtitle) ||
    `${note.topic} is a core skill in ${note.moduleTitle}.`;

  // 2. Extract workflow steps from flow / miniCards / cards / takeaways
  const extractedSteps: Array<{ title: string; desc: string }> = [];
  for (const blk of allBlocks) {
    if (blk.type === 'flow' && Array.isArray(blk.steps) && blk.steps.length >= 2) {
      for (const st of blk.steps.slice(0, 4)) {
        extractedSteps.push({ title: cleanText(st.title), desc: cleanText(st.desc) });
      }
      break;
    }
  }
  if (extractedSteps.length < 3) {
    for (const blk of allBlocks) {
      if (blk.type === 'miniCards' && Array.isArray(blk.cards) && blk.cards.length >= 3) {
        extractedSteps.length = 0;
        for (const c of blk.cards.slice(0, 4)) {
          extractedSteps.push({ title: cleanText(c.title), desc: cleanText(c.desc) });
        }
        break;
      }
      if (blk.type === 'cards' && Array.isArray(blk.cards) && blk.cards.length >= 3) {
        extractedSteps.length = 0;
        for (const c of blk.cards.slice(0, 4)) {
          extractedSteps.push({
            title: cleanText(c.title),
            desc: cleanText(c.subtitle || c.bullets?.[0] || c.title),
          });
        }
        break;
      }
    }
  }
  if (extractedSteps.length < 3) {
    const sectionTitles = (note.pages || []).flatMap((p) => (p.sections || []).map((s) => cleanText(s.pill))).filter(Boolean);
    const fallbackSteps = [
      { title: sectionTitles[0] || 'Understand Inputs', desc: `Inspect the raw data and requirements for ${note.topic}.` },
      { title: sectionTitles[1] || 'Apply Core Technique', desc: `Execute ${note.topic} cleanly using the rules from Visual Notes.` },
      { title: sectionTitles[2] || 'Validate Accuracy', desc: `Check edge cases, formatting, and expected output.` },
      { title: sectionTitles[3] || 'Deliver Insights', desc: `Share clean, decision-ready results with stakeholders.` },
    ];
    extractedSteps.length = 0;
    extractedSteps.push(...fallbackSteps);
  }
  while (extractedSteps.length < 4) {
    extractedSteps.push({
      title: 'Verify & Apply',
      desc: `Verify the final result of ${note.topic} before sharing.`,
    });
  }
  const steps4 = extractedSteps.slice(0, 4);

  // 3. Extract code/formula/query snippet if present
  let codeSnippet = '';
  let codeCaption = '';
  for (const blk of allBlocks) {
    if (blk.type === 'code' && blk.code) {
      codeSnippet = blk.code;
      codeCaption = cleanText(blk.caption);
      break;
    }
    if (blk.type === 'codeOutput' && blk.code) {
      codeSnippet = blk.code;
      codeCaption = cleanText(blk.output);
      break;
    }
  }

  // 4. Extract Beginner Mistake vs Pro Habit or Comparison or Takeaways
  let mistakeText = `Skipping validation and applying ${note.topic} blindly without checking the data.`;
  let proHabitText = `Always apply ${note.topic} step-by-step and verify the output against business logic.`;
  const takeaways: string[] = [];

  for (const blk of allBlocks) {
    if (blk.type === 'comparison' && Array.isArray(blk.rows) && blk.rows.length > 0) {
      const row = blk.rows[0];
      if (row?.left && row?.right) {
        mistakeText = cleanText(row.left);
        proHabitText = cleanText(row.right);
      }
    }
    if (blk.type === 'takeaways' && Array.isArray(blk.items) && blk.items.length > 0) {
      for (const it of blk.items) {
        const t = cleanText(it);
        if (t) takeaways.push(t);
      }
    }
    if (blk.type === 'callout' && blk.text && takeaways.length < 3) {
      takeaways.push(cleanText(blk.text));
    }
  }

  const keyRule = takeaways[0] || proHabitText;
  const secondTakeaway = takeaways[1] || coreDef;
  const keys: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];

  // Build 4 Visual-Notes-aligned MCQs
  const q1Rot = rotate(
    [
      coreDef,
      `${note.topic} is only used to delete files and has no role in ${note.moduleTitle}.`,
      `${note.topic} replaces all human verification and removes the need to check data accuracy.`,
      `${note.topic} cannot be used on real-world business datasets.`,
    ],
    topicId
  );

  const q2Rot = rotate(
    [
      proHabitText,
      mistakeText,
      `Guess the answer manually instead of applying ${note.topic}.`,
      `Skip reviewing results after running ${note.topic}.`,
    ],
    topicId + 2
  );

  const flowStr = steps4.map((s) => s.title).join(' → ');
  const q3Rot = rotate(
    [
      flowStr,
      `${steps4[3].title} → ${steps4[2].title} → ${steps4[0].title} → ${steps4[1].title}`,
      `${steps4[2].title} → ${steps4[0].title} → ${steps4[3].title} → ${steps4[1].title}`,
      `Skip ${steps4[0].title} and jump straight to ${steps4[3].title}.`,
    ],
    topicId + 1
  );

  const q4Rot = rotate(
    [
      keyRule,
      mistakeText,
      `Ignore ${note.moduleTitle} best practices when working under deadlines.`,
      `Hardcode random values instead of verifying ${note.topic}.`,
    ],
    topicId + 3
  );

  const palettes = [
    { bg: '#eef2ff', textCol: '#3730a3', borderCol: '#c7d2fe' },
    { bg: '#ecfdf5', textCol: '#065f46', borderCol: '#a7f3d0' },
    { bg: '#fffbeb', textCol: '#92400e', borderCol: '#fde68a' },
    { bg: '#fdf2f8', textCol: '#9d174d', borderCol: '#fbcfe8' },
  ];
  const stepBlocks = steps4.map((s, idx) => ({
    id: `step-${idx + 1}`,
    text: `${s.title}: ${s.desc}`,
    ...palettes[idx % palettes.length],
  }));
  const shuffledBlocks = [stepBlocks[2], stepBlocks[0], stepBlocks[3], stepBlocks[1]];

  const l3Patches = rotate(
    [
      {
        id: 'p1',
        code: `PRO HABIT: ${proHabitText}`,
        label: `Apply the Visual Notes best practice for ${note.topic}`,
        isCorrect: true,
      },
      {
        id: 'p2',
        code: `MISTAKE: ${mistakeText}`,
        label: 'Keep the common beginner mistake',
        isCorrect: false,
      },
      {
        id: 'p3',
        code: `SKIP: Bypass accuracy checks for ${note.topic}`,
        label: 'Skip validation completely',
        isCorrect: false,
      },
    ],
    topicId % 3
  ).ordered;

  const l4Tokens = rotate(
    [steps4[0].title, steps4[1].title, 'Skip Validation', 'Guess Output'],
    topicId + 1
  ).ordered;

  const p1Rot = rotate(
    [
      { id: 'rw-1', text: proHabitText, isCorrect: true },
      { id: 'rw-2', text: mistakeText, isCorrect: false },
      { id: 'rw-3', text: `Skip checking inputs and assume ${note.topic} always succeeds.`, isCorrect: false },
    ],
    topicId % 3
  );

  const p2Rot = rotate(
    [
      { id: 'p2-1', text: codeCaption || keyRule, isCorrect: true },
      { id: 'p2-2', text: mistakeText, isCorrect: false },
      { id: 'p2-3', text: `Ignore ${note.topic} verification checks.`, isCorrect: false },
    ],
    (topicId + 1) % 3
  );

  const built: TopicAssessmentData = {
    topicId,
    topicNumber: topicId,
    topicTitle: note.topic,
    pdfPages: `${note.module} • Visual Learning Notes Practice`,
    mcqs: [
      {
        id: 1,
        tag: `${note.module} Core Concept`,
        difficulty: 'Beginner',
        question: `According to the Visual Learning Notes, what best explains ${note.topic}?`,
        options: q1Rot.ordered.map((text, idx) => ({ key: keys[idx], text })),
        correct: q1Rot.correctIndex,
        hint: `Review the opening definition banner of ${note.topic} on Visual Learning Page 1.`,
        explanation: coreDef,
        realWorldContext: `${note.moduleTitle}: ${secondTakeaway}`,
      },
      {
        id: 2,
        tag: `${note.module} Best Practice`,
        difficulty: 'Fundamental',
        question: `Which habit from the Visual Learning Notes represents the right professional approach for ${note.topic}?`,
        options: q2Rot.ordered.map((text, idx) => ({ key: keys[idx], text })),
        correct: q2Rot.correctIndex,
        hint: `Compare the recommended approach vs common mistake in your Visual Learning Notes.`,
        explanation: proHabitText,
        realWorldContext: keyRule,
      },
      {
        id: 3,
        tag: `${note.module} Workflow`,
        difficulty: 'Core',
        question: `What is the correct step-by-step sequence for applying ${note.topic}?`,
        options: q3Rot.ordered.map((text, idx) => ({ key: keys[idx], text })),
        correct: q3Rot.correctIndex,
        hint: `Start with "${steps4[0].title}" from the Visual Notes workflow.`,
        explanation: `Follow the exact sequence: ${flowStr}.`,
        realWorldContext: secondTakeaway,
      },
      {
        id: 4,
        tag: `${note.module} Key Takeaway`,
        difficulty: 'Core',
        question: `Which key takeaway from the Visual Learning Notes should you apply on the job for ${note.topic}?`,
        options: q4Rot.ordered.map((text, idx) => ({ key: keys[idx], text })),
        correct: q4Rot.correctIndex,
        hint: `Check the Key Takeaways card at the end of ${note.topic}.`,
        explanation: keyRule,
        realWorldContext: coreDef,
      },
    ],
    game: {
      l1: {
        title: `Level 1 — Puzzle: Order ${note.topic} Steps`,
        question: `Arrange the 4 steps of ${note.topic} from your Visual Learning Notes in exact order!`,
        blocks: shuffledBlocks,
        correctOrder: stepBlocks.map((b) => b.id),
        explanation: flowStr,
      },
      l2: {
        title: `Level 2 — Concept Trace: ${note.topic}`,
        question: `Trace the ${note.topic} example from Visual Learning Notes and choose the accurate takeaway!`,
        snippetLines: codeSnippet
          ? codeSnippet.split('\n').slice(0, 6)
          : [
              `// ${note.module}: ${note.topic}`,
              `// Step 1: ${steps4[0].title}`,
              `// Step 2: ${steps4[1].title}`,
              `// Key Rule: ${keyRule}`,
            ],
        options: q2Rot.ordered.map((text, idx) => ({
          id: keys[idx].toLowerCase(),
          text,
          isCorrect: idx === q2Rot.correctIndex,
          note: idx === q2Rot.correctIndex ? proHabitText : `Review ${note.topic} in Visual Learning Notes.`,
        })),
      },
      l3: {
        title: `Level 3 — Bug Hunter: Fix the Mistake in ${note.topic}`,
        question: `Spot the common mistake on line 3 and apply the Visual Notes best-practice patch!`,
        lines: [
          { line: 1, text: `TOPIC: ${note.topic}`, isBug: false },
          { line: 2, text: `STEP 1: ${steps4[0].title} — ${steps4[0].desc}`, isBug: false },
          { line: 3, text: `BUGGY HABIT: ${mistakeText}`, isBug: true, bugMsg: `Best Practice: ${proHabitText}` },
          { line: 4, text: `KEY TAKEAWAY: ${keyRule}`, isBug: false },
        ],
        bugLine: 3,
        patches: l3Patches,
      },
      l4: {
        title: `Level 4 — Build & Run: Complete ${note.topic} Pipeline`,
        question: `Snap Stage 1 (${steps4[0].title}) and Stage 2 (${steps4[1].title}) from Visual Learning Notes!`,
        prefixCode: `// ${note.topic} (${note.moduleTitle})\nStage 1 -> `,
        slot1Target: `Step 1 (${steps4[0].title})`,
        midCode: `  ==>  Stage 2 -> `,
        slot2Target: `Step 2 (${steps4[1].title})`,
        suffixCode: `  ==>  Complete: ${steps4[2].title}`,
        availableTokens: l4Tokens,
        correctSlot1: steps4[0].title,
        correctSlot2: steps4[1].title,
        expectedOutput: codeCaption || `${steps4[0].title} → ${steps4[1].title} Verified!`,
      },
      l5: {
        bossName: `${note.module} Real-World Boss`,
        title: `Level 5 — Real-World Boss: ${note.topic}`,
        question: `Apply ${note.topic} like a job-ready professional in ${note.moduleTitle}!`,
        scenario: coreDef,
        phase1Prompt: `Strike 1 — Strategy: Pick the Visual Notes Pro Habit for ${note.topic}!`,
        phase1Options: p1Rot.ordered,
        phase2Prompt: `Final Strike — Verification: Confirm the key takeaway / result for ${note.topic}!`,
        phase2Options: p2Rot.ordered,
        phase2Starter: codeSnippet || `// ${note.topic}\n// ${keyRule}`,
        phase2Solution: codeSnippet || `// ${note.topic}\n// ${keyRule}`,
        phase2ExpectedOutput: codeCaption || `${note.topic} Verified`,
      },
    },
    codingChallenges: [
      {
        id: 1,
        title: `Applied Practice: ${note.topic}`,
        prompt: coreDef,
        expectedApproach: proHabitText,
        starterCode: codeSnippet || `// ${note.topic}\n// 1. ${steps4[0].title}\n// 2. ${steps4[1].title}`,
        solutionCode: codeSnippet || `// ${note.topic}\n// ${keyRule}`,
        expectedOutput: codeCaption || `${note.topic} Verified`,
        hints: [
          { step: 1, title: steps4[0].title, desc: steps4[0].desc, code: steps4[0].title },
          { step: 2, title: steps4[1].title, desc: steps4[1].desc, code: steps4[1].title },
        ],
      },
    ],
    interviewQuestions: [
      {
        id: 1,
        tag: 'Core Understanding',
        question: `What is ${note.topic} in ${note.moduleTitle}, and why does it matter in real projects?`,
        modelAnswer: `${coreDef} Key takeaway: ${keyRule}`,
      },
      {
        id: 2,
        tag: 'Step-by-Step Workflow',
        question: `Walk me through how you apply ${note.topic} step by step.`,
        modelAnswer: `Follow this structured flow: ${steps4.map((s, i) => `${i + 1}) ${s.title} (${s.desc})`).join(' ')}`,
      },
      {
        id: 3,
        tag: 'Best Practices & Pitfalls',
        question: `What is a common mistake beginners make with ${note.topic}, and how do you avoid it?`,
        modelAnswer: `Beginners often fall into this mistake: ${mistakeText} Instead, follow this pro habit: ${proHabitText}`,
      },
    ],
  };

  VISUAL_NOTE_ASSESSMENT_CACHE[cacheKey] = built;
  return built;
}
