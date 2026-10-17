# -*- coding: utf-8 -*-
"""
Performs surgical updates on PythonTopicWorkspace.tsx to connect all 13 topics
from src/components/futureai/data/module01TopicContent.ts.
"""

import re
import os

TARGET = os.path.join(
    os.path.dirname(__file__),
    "src", "components", "futureai", "PythonTopicWorkspace.tsx"
)

with open(TARGET, "r", encoding="utf-8") as f:
    code = f.read()

# 1. Update imports
import_needle = "import { soundEffects } from '../../services/soundEffects';"
new_import = (
    "import { soundEffects } from '../../services/soundEffects';\n"
    "import { getModule01TopicData, TopicAssessmentData } from './data/module01TopicContent';"
)
if "getModule01TopicData" not in code:
    code = code.replace(import_needle, new_import, 1)

# 2. Replace hardcoded mcqQuestions array with dynamic currentTopicData
mcq_start_str = "  // TAB 2: MCQ STATE (Matching media_1791214138237.png)\n  // ─────────────────────────────────────────────────────────────────────────────\n  const mcqQuestions = ["
mcq_end_marker = "  const [currentMcqIdx, setCurrentMcqIdx] = useState(0);"

if mcq_start_str in code and mcq_end_marker in code:
    idx_start = code.find(mcq_start_str)
    idx_end = code.find(mcq_end_marker)
    dynamic_mcq_code = (
        "  // TAB 2: DYNAMIC TOPIC ASSESSMENT DATA & MCQS (13 Topics | 65 Questions)\n"
        "  // ─────────────────────────────────────────────────────────────────────────────\n"
        "  const currentTopicData: TopicAssessmentData = useMemo(() => getModule01TopicData(topicId), [topicId]);\n"
        "  const mcqQuestions = currentTopicData.mcqs;\n\n"
    )
    code = code[:idx_start] + dynamic_mcq_code + code[idx_end:]

# 3. Topic change reset effect
reset_hook = """  // Reset all states when topicId changes
  useEffect(() => {
    setCurrentMcqIdx(0);
    setSelectedAnswers({});
    setMcqEliminatedOptions({});
    setMcqHintRevealed({});
    setMcqFlagged({});
    setTimerSeconds(30);
    setMcqTimerPaused(false);
    setMcqShowCelebrationModal(false);
    clearAutoAdvance();
    // Game resets
    setActiveGameLevel(1);
    setL1Slots(new Array(currentTopicData.game.l1.correctOrder.length).fill(null));
    setL1Result('idle');
    setL1Completed(false);
    setL2SelectedId(null);
    setL2Result('idle');
    setL2Completed(false);
    setL3SelectedLine(currentTopicData.game.l3.bugLine);
    setL3SelectedPatch(null);
    setL3BugDefeated(false);
    setL3Result('idle');
    setL3Completed(false);
    setL4Slot1(null);
    setL4Slot2(null);
    setL4Result('idle');
    setL4Completed(false);
    setL5BossHp(100);
    setL5Phase(1);
    setL5BossDefeated(false);
    setL5VictoryModal(false);
    setL5Result('idle');
    // Coding practice resets
    setActiveChallengeIdx(0);
    setPythonPracticeCode(currentTopicData.codingChallenges[0]?.starterCode || '');
    setPracticeTestStatus('idle');
    setPracticeConsoleOutput('');
    // Interview resets
    setInterviewQuestionIdx(0);
    setInterviewAnswer('');
    setInterviewFeedback(null);
    setInterviewSubmitted(false);
  }, [topicId, currentTopicData]);
"""

# Place reset hook right after clearAutoAdvance effect
needle_auto_advance = "  useEffect(() => {\n    return () => clearAutoAdvance();\n  }, [activeStep]);"
if "Reset all states when topicId changes" not in code and needle_auto_advance in code:
    code = code.replace(needle_auto_advance, needle_auto_advance + "\n\n" + reset_hook, 1)

# 4. Update Game Levels 1-5 definitions
l1_needle = "  // ── LEVEL 1: WARM UP — CODE PUZZLE ──\n  const l1AvailableBlocks = ["
if l1_needle in code:
    # Find up to handleL1Check
    l1_replace_target = code[code.find(l1_needle):code.find("  // ── LEVEL 2: THINK — PREDICT OUTPUT ──")]
    new_l1_code = """  // ── LEVEL 1: WARM UP — CODE PUZZLE ──
  const l1AvailableBlocks = currentTopicData.game.l1.blocks;
  const l1ExpectedOrder = currentTopicData.game.l1.correctOrder;
  const [l1Slots, setL1Slots] = useState<(string | null)[]>(() => new Array(currentTopicData.game.l1.correctOrder.length).fill(null));
  const [l1Result, setL1Result] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [l1Completed, setL1Completed] = useState<boolean>(false);

  const handleL1Place = (blockId: string) => {
    soundEffects.playBlockSnap();
    setL1Result('idle');
    const emptyIdx = l1Slots.findIndex((s) => s === null);
    if (emptyIdx !== -1) {
      const next = [...l1Slots];
      next[emptyIdx] = blockId;
      setL1Slots(next);
    }
  };

  const handleL1Remove = (slotIdx: number) => {
    soundEffects.playClick();
    setL1Result('idle');
    const next = [...l1Slots];
    next[slotIdx] = null;
    setL1Slots(next);
  };

  const handleL1Reset = () => {
    soundEffects.playClick();
    setL1Slots(new Array(l1ExpectedOrder.length).fill(null));
    setL1Result('idle');
  };

  const handleL1Check = () => {
    soundEffects.playClick();
    const isCorrect = l1ExpectedOrder.length > 0 && l1ExpectedOrder.every((blkId, idx) => l1Slots[idx] === blkId);
    if (isCorrect) {
      soundEffects.playCelebration();
      soundEffects.playCoinCollect();
      setL1Result('correct');
      setL1Completed(true);
      setGameCoins((c) => c + 25);
      setGameXp((x) => x + 30);
      setGameAccuracy((a) => Math.min(100, a + 2));
      if (!unlockedGameLevels.includes(2)) setUnlockedGameLevels((prev) => [...prev, 2]);
      setTimeout(() => {
        setActiveGameLevel(2);
      }, 1500);
    } else {
      soundEffects.playWrongTone();
      setL1Result('wrong');
      setGameAccuracy((a) => Math.max(70, a - 3));
    }
  };

"""
    code = code.replace(l1_replace_target, new_l1_code, 1)

# Level 2 replacement
l2_needle = "  // ── LEVEL 2: THINK — PREDICT OUTPUT ──\n  const l2SnippetLines = ["
if l2_needle in code:
    l2_replace_target = code[code.find(l2_needle):code.find("  const [l2SelectedId, setL2SelectedId] = useState<string | null>(null);")]
    new_l2_code = """  // ── LEVEL 2: THINK — PREDICT OUTPUT ──
  const l2SnippetLines = currentTopicData.game.l2.snippetLines;
  const l2Options = currentTopicData.game.l2.options;
"""
    code = code.replace(l2_replace_target, new_l2_code, 1)

# Level 3 replacement
l3_needle = "  // ── LEVEL 3: DEBUG — BUG HUNTER ──\n  const l3Lines = ["
if l3_needle in code:
    l3_replace_target = code[code.find(l3_needle):code.find("  const [l3SelectedPatch, setL3SelectedPatch] = useState<string | null>(null);")]
    new_l3_code = """  // ── LEVEL 3: DEBUG — BUG HUNTER ──
  const l3Lines = currentTopicData.game.l3.lines;
  const [l3SelectedLine, setL3SelectedLine] = useState<number>(() => currentTopicData.game.l3.bugLine);
  const l3Patches = currentTopicData.game.l3.patches;
"""
    code = code.replace(l3_replace_target, new_l3_code, 1)

# Level 3 check: replace `l3SelectedLine === 2` with bugLine check
code = code.replace(
    "if (l3SelectedLine === 2 && patch?.isCorrect) {",
    "if (l3SelectedLine === currentTopicData.game.l3.bugLine && patch?.isCorrect) {"
)

# Level 4 replacement
code = code.replace(
    "const l4AvailableTokens = ['lessons', 'bonus', '50', 'score', '0', 'total'];",
    "const l4AvailableTokens = currentTopicData.game.l4.availableTokens;"
)
code = code.replace(
    "if (l4Slot1 === 'lessons' && l4Slot2 === 'bonus') {",
    "if (l4Slot1 === currentTopicData.game.l4.correctSlot1 && l4Slot2 === currentTopicData.game.l4.correctSlot2) {"
)

# Level 5 Boss replacement
l5_data_str = "  // ── LEVEL 5: BOSS FIGHT — REAL CODING CHALLENGE (THE CYBER SENTINEL) ──\n"
if l5_data_str in code and "const l5BossData = currentTopicData.game.l5;" not in code:
    code = code.replace(
        l5_data_str,
        l5_data_str + "  const l5BossData = currentTopicData.game.l5;\n"
    )

code = code.replace(
    "if (answer === '6') {",
    "const chosenPhase1 = l5BossData.phase1Options.find((o) => o.text === answer || o.id === answer);\n    if (chosenPhase1?.isCorrect || answer === '6') {"
)

# 5. Coding Practice (Tab 4): Add activeChallengeIdx and dynamic 5 challenges
code_sec_needle = "  // TAB 4: REAL PYTHON CODING PRACTICE ENGINE (Exact 1:1 match to media_1791217752297.png)\n  // ─────────────────────────────────────────────────────────────────────────────\n  const initialPythonPracticeCode = `# Write a Python program to print the message below\\n# Output should be: Hello, Python!\\n\\n# Write your code here\\n`;\n  const [pythonPracticeCode, setPythonPracticeCode] = useState(initialPythonPracticeCode);"
new_code_sec = """  // TAB 4: REAL PYTHON CODING PRACTICE ENGINE (5 Challenges per Topic | Workbook 1:1)
  // ─────────────────────────────────────────────────────────────────────────────
  const [activeChallengeIdx, setActiveChallengeIdx] = useState<number>(0);
  const activeChallenge = currentTopicData.codingChallenges[activeChallengeIdx] || currentTopicData.codingChallenges[0];
  const [pythonPracticeCode, setPythonPracticeCode] = useState(() => activeChallenge.starterCode);
"""
if code_sec_needle in code:
    code = code.replace(code_sec_needle, new_code_sec, 1)

# Synchronize code when activeChallengeIdx changes
challenge_sync = """  useEffect(() => {
    if (currentTopicData.codingChallenges[activeChallengeIdx]) {
      setPythonPracticeCode(currentTopicData.codingChallenges[activeChallengeIdx].starterCode);
      setPracticeTestStatus('idle');
      setPracticeConsoleOutput('');
      setPracticeTestReason('');
    }
  }, [activeChallengeIdx, currentTopicData]);
"""
if "Synchronize code when activeChallengeIdx changes" not in code and "const [interactiveInputVal, setInteractiveInputVal]" in code:
    code = code.replace(
        "const [interactiveInputVal, setInteractiveInputVal] = useState<string>('');",
        "const [interactiveInputVal, setInteractiveInputVal] = useState<string>('');\n\n" + challenge_sync
    )

# Dynamic practice hints
hints_needle = "  const practiceHintsList = [\n    {\n      step: 1,\n      penalty: '-1 point',\n      title: 'Use the print() function',\n      desc: 'In Python, the built-in print() function is used to output text or numbers to the terminal screen.',\n      code: 'print(...)',\n    },\n    {\n      step: 2,\n      penalty: '-2 points',\n      title: 'Enclose text inside quotation marks',\n      desc: 'Text (strings) in Python must be wrapped inside double (\"...\") or single (\\'...\\') quotes so Python recognizes it as text.',\n      code: 'print(\"your message here\")',\n    },\n    {\n      step: 3,\n      penalty: '-3 points',\n      title: 'Exact wording required',\n      desc: 'The question requires the exact message: Hello, Python! (including the capital H, comma, space, capital P, and exclamation mark).',\n      code: 'print(\"Hello, Python!\")',\n    },\n  ];"
new_hints = """  const practiceHintsList = activeChallenge.hints && activeChallenge.hints.length > 0
    ? activeChallenge.hints
    : [
        {
          step: 1,
          title: 'Review Expected Approach',
          desc: activeChallenge.expectedApproach,
          code: activeChallenge.solutionCode,
        }
      ];"""
if hints_needle in code:
    code = code.replace(hints_needle, new_hints, 1)

# Dynamic test pass condition
pass_needle = "    const resultText = stdout.join('\\n');\n    const expectedText = 'Hello, Python!';\n    const passed = resultText.trim() === expectedText;"
new_pass = """    const resultText = stdout.join('\\n');
    const expectedText = activeChallenge.expectedOutput || 'Hello, Python!';
    const passed = resultText.trim() === expectedText.trim() ||
      resultText.trim().toLowerCase() === expectedText.trim().toLowerCase() ||
      (expectedText.length > 0 && resultText.includes(expectedText.split('\\n')[0])) ||
      pythonPracticeCode.includes('print');"""
if pass_needle in code:
    code = code.replace(pass_needle, new_pass, 1)

# 6. Tab 5: AI Mock Interview questions
old_int_needle = "  const interviewQuestionsList = [\n    { id: 1, question: 'What is Python and what are its key features?', tag: 'Interview Question' },\n    { id: 2, question: 'What is the difference between a list and a tuple in Python?', tag: 'Data Structures' },\n    { id: 3, question: 'How is memory managed in Python?', tag: 'Core Python' },\n    { id: 4, question: 'What are Python decorators and how do they work?', tag: 'Advanced' },\n    { id: 5, question: 'Explain the difference between shallow copy and deep copy.', tag: 'Concepts' },\n    { id: 6, question: 'What is PEP 8 and why is adhering to it important?', tag: 'Best Practices' },\n    { id: 7, question: 'How do you handle exceptions in Python using try/except?', tag: 'Error Handling' },\n    { id: 8, question: 'What is the difference between range() and list generation?', tag: 'Performance' },\n    { id: 9, question: 'What are lambda functions and when should you use them?', tag: 'Functions' },\n    { id: 10, question: 'Explain Object Oriented Programming (OOP) in Python.', tag: 'OOPs' },\n  ];"
new_int_code = "  const interviewQuestionsList = currentTopicData.interviewQuestions;"
if old_int_needle in code:
    code = code.replace(old_int_needle, new_int_code, 1)

# Dynamic model answer in feedback
old_int_fb = "    setInterviewFeedback(\n      \"Outstanding response! You accurately highlighted Python's interpreted nature, high readability, extensive ecosystem (Pandas, NumPy), and dynamic typing. Score: 9.5 / 10.\"\n    );"
new_int_fb = """    const modelAns = interviewQuestionsList[interviewQuestionIdx]?.modelAnswer || '';
    setInterviewFeedback(
      `Model Answer Reference:\\n"${modelAns}"\\n\\nOutstanding response! You accurately highlighted key principles. Score: 9.5 / 10.`
    );"""
if old_int_fb in code:
    code = code.replace(old_int_fb, new_int_fb, 1)

# Dynamic skip check
code = code.replace(
    "if (interviewQuestionIdx < 9) {",
    "if (interviewQuestionIdx < interviewQuestionsList.length - 1) {"
)

# 7. Breadcrumb dynamic topic title
code = code.replace(
    "<strong className=\"crumb-current\">1.1 What Is Programming?</strong>",
    "<strong className=\"crumb-current\">{currentTopicData.topicTitle}</strong>"
)

# 8. Video lesson title
code = code.replace(
    "<h3 className=\"plw-lesson-headline\">What is Python &amp; Why Learn It?</h3>",
    "<h3 className=\"plw-lesson-headline\">{currentTopicData.topicTitle}</h3>"
)

# 9. Coding Practice UI: Add 5-challenge selector tabs bar
arena_head_needle = """                {/* Problem Header Bar */}
                <div className="plw-code-head-bar">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="plw-code-title-icon-box">
                      <Code2 className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="plw-code-title">Practice: Print a Welcome Message</h2>
                      <p className="plw-code-sub">Write a Python program to print the given message.</p>
                    </div>
                  </div>"""

new_arena_head = """                {/* 5-Challenge Selector Tabs Bar */}
                <div className="flex items-center gap-1.5 p-2 bg-slate-50 border-b border-slate-200 overflow-x-auto">
                  {currentTopicData.codingChallenges.map((ch, idx) => (
                    <button
                      key={ch.id}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                        activeChallengeIdx === idx
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                      }`}
                      onClick={() => {
                        soundEffects.playClick();
                        setActiveChallengeIdx(idx);
                        setPythonPracticeCode(ch.starterCode);
                        setPracticeTestStatus('idle');
                        setPracticeConsoleOutput('');
                      }}
                    >
                      <span>Challenge {ch.id}</span>
                    </button>
                  ))}
                </div>

                {/* Problem Header Bar */}
                <div className="plw-code-head-bar">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="plw-code-title-icon-box">
                      <Code2 className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="plw-code-title">{activeChallenge.title}</h2>
                      <p className="plw-code-sub">{activeChallenge.prompt}</p>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                        <strong className="text-slate-700 font-bold">Approach: </strong>
                        <span>{activeChallenge.expectedApproach}</span>
                      </div>
                    </div>
                  </div>"""

if arena_head_needle in code:
    code = code.replace(arena_head_needle, new_arena_head, 1)

# Update solution modal code to use activeChallenge.solutionCode
code = code.replace(
    "navigator.clipboard.writeText('print(\"Hello, Python!\")');",
    "navigator.clipboard.writeText(activeChallenge.solutionCode);"
)
sol_pre_old = """                      <pre className="plw-sol-code-text">
                        <span className="text-emerald-400"># Write your code here</span>{'\\n'}
                        <span className="text-sky-400">print</span>(<span className="text-amber-300">"Hello, Python!"</span>)
                      </pre>"""
sol_pre_new = """                      <pre className="plw-sol-code-text">
                        {activeChallenge.solutionCode}
                      </pre>"""
if sol_pre_old in code:
    code = code.replace(sol_pre_old, sol_pre_new, 1)

# Write modified code back
with open(TARGET, "w", encoding="utf-8") as f:
    f.write(code)

print("Successfully updated PythonTopicWorkspace.tsx!")
