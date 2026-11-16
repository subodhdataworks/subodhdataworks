/**
 * FUTURE IT INDUSTRY — VISUAL CLASSROOM LANGUAGE STANDARDIZATION
 *
 * Universal Language Rules:
 * 1. UI controls, step tabs, playback buttons, and programming terminology
 *    are ALWAYS in English regardless of whether Hindi or English is selected.
 * 2. In Hindi mode, explanations and speech narrations are presented in natural
 *    Hindi/Hinglish with technical programming keywords kept in English.
 * 3. In English mode, all descriptions, instructions, and narrations are in professional English.
 * 4. Lesson titles dynamically reflect the selected language (clean Hindi vs clean English).
 */

import { languageEngine } from '../../../services/visualLearningLanguageEngine';

export const LEARNING_STEPS = {
  INTRODUCTION: 'Introduction',
  UNDERSTAND_CODE: 'Understand Code',
  EXECUTE: 'Execute',
  PRACTICE: 'Practice',
} as const;

export const STANDARD_STEP_TABS = [
  { num: 1, label: '1. Introduction', shortLabel: 'Introduction' },
  { num: 2, label: '2. Understand Code', shortLabel: 'Understand Code' },
  { num: 3, label: '3. Execute', shortLabel: 'Execute' },
  { num: 4, label: '4. Practice', shortLabel: 'Practice' },
];

export const PLAYBACK_LABELS = {
  PLAY: 'Play',
  PAUSE: 'Pause',
  REPLAY: 'Replay',
  BACK: 'Back',
  NEXT: 'Next',
  formatStep: (current: number, total: number) => `Step ${current} of ${total}`,
  formatSpeed: (speed: number) => `Speed: ${speed}x`,
} as const;

export const PROGRAMMING_LABELS = {
  PYTHON_LEARNING: 'Python Learning',
  CONSOLE_OUTPUT: 'Console Output',
  YOUR_CODE: 'Your Code',
  RUN: 'Run',
  WRITE_IN_EDITOR: 'Write in Editor',
  ENTER_YOUR_NAME: 'Enter Your Name',
  REMEMBER: 'Remember',
  INPUT: 'Input',
  OUTPUT: 'Output',
  VARIABLE: 'Variable',
  STRING: 'String',
  FUNCTION: 'Function',
  CODE: 'Code',
  TEST_CASE: 'Test Case',
  RESULT: 'Result',
} as const;

export interface LessonFlags {
  isQuestion1?: boolean;
  isQuestion2?: boolean;
  isQuestion3?: boolean;
  isQuestion4?: boolean;
  isQuestion5?: boolean;
  isQuestion6?: boolean;
  isTopic2Q1?: boolean;
  isTopic2Q2?: boolean;
  isTopic2Q3?: boolean;
  isTopic2Q4?: boolean;
  isTopic2Q5?: boolean;
  isTopic2Q6?: boolean;
  isTopic2Q7?: boolean;
  isTopic2Q8?: boolean;
  isTopic2Q9?: boolean;
  isTopic3Q1?: boolean;
  isTopic3Q2?: boolean;
  isTopic3Q3?: boolean;
  isTopic3Q4?: boolean;
  isTopic3Q5?: boolean;
  isTopic3Q6?: boolean;
  isTopic3Q7?: boolean;
  isTopic3Q8?: boolean;
  isTopic3Q9?: boolean;
  isTopic4Q1?: boolean;
  isTopic4Q2?: boolean;
  isTopic4Q3?: boolean;
  isTopic4Q4?: boolean;
  isTopic4Q5?: boolean;
  isTopic4Q6?: boolean;
  isTopic4Q7?: boolean;
  isTopic4Q8?: boolean;
  isTopic4Q9?: boolean;
  isTopic4Q10?: boolean;
  isTopic4Q11?: boolean;
  isTopic4Q12?: boolean;
  fallbackTitle?: string;
}

/**
 * Returns clean single-language lesson titles:
 * - Hindi mode returns natural Hindi titles (e.g. "Python: अपना नाम प्रिंट करें")
 * - English mode returns professional English titles (e.g. "Python: Print Your Name")
 */
export function getLessonTitle(flags: LessonFlags, lang: 'hi' | 'en'): string {
  const isHi = lang === 'hi';
  const resolve = (hi: string, en: string) => (isHi ? languageEngine.standardizeHinglish(hi) : en);

  if (flags.isQuestion1) {
    return resolve('Python: पहला प्रोग्राम – Hello, World!', 'Python: Hello, World!');
  }
  if (flags.isQuestion2) {
    return resolve('Python: अपना नाम प्रिंट करें', 'Python: Print Your Name');
  }
  if (flags.isQuestion3) {
    return resolve('Python: दो संदेश प्रिंट करें', 'Python: Multiple Lines');
  }
  if (flags.isQuestion4) {
    return resolve('Python: टेक्स्ट और नंबर', 'Python: Text & Numbers');
  }
  if (flags.isQuestion5) {
    return resolve('Python: न्यू लाइन', 'Python: Print Using \\n');
  }
  if (flags.isQuestion6) {
    return resolve('Python: परिचय प्रिंट करें', 'Python: Mini Introduction');
  }

  // Topic 2: Variables & Data Types
  if (flags.isTopic2Q1) {
    return resolve('Python: Variable बनाएं और प्रिंट करें', 'Python: Variables');
  }
  if (flags.isTopic2Q2) {
    return resolve('Python: Variable की Value बदलें', 'Python: Reassignment');
  }
  if (flags.isTopic2Q3) {
    return resolve('Python: Data Types समझें', 'Python: Basic Data Types');
  }
  if (flags.isTopic2Q4) {
    return resolve('Python: type() से Data Type पहचानें', 'Python: type()');
  }
  if (flags.isTopic2Q5) {
    return resolve('Python: String को Integer में बदलें', 'Python: int()');
  }
  if (flags.isTopic2Q6) {
    return resolve('Python: स्टूडेंट प्रोफाइल बनाएं', 'Python: Profile');
  }
  if (flags.isTopic2Q7) {
    return resolve('Python: Variable Naming Rules', 'Python: Naming Rules');
  }
  if (flags.isTopic2Q8) {
    return resolve('Python: Data Type Conversion', 'Python: Type Conversion');
  }
  if (flags.isTopic2Q9) {
    return resolve('Python: None Data Type समझें', 'Python: NoneType');
  }

  // Topic 3: Inputs & Formatting
  if (flags.isTopic3Q1) {
    return resolve('Python: User से नाम Input लें', 'Python: Take Name Input');
  }
  if (flags.isTopic3Q2) {
    return resolve('Python: User को greet करें', 'Python: Greet the User');
  }
  if (flags.isTopic3Q3) {
    return resolve('Python: उम्र Input लें और Type जांचें', 'Python: Input Data Type');
  }
  if (flags.isTopic3Q4) {
    return resolve('Python: दो संख्याओं का Total Sum', 'Python: Add Two Numbers');
  }
  if (flags.isTopic3Q5) {
    return resolve('Python: Total Bill Calculate करें', 'Python: Calculate Total Price');
  }
  if (flags.isTopic3Q6) {
    return resolve('Python: स्टूडेंट डिटेल्स', 'Python: Student Details');
  }
  if (flags.isTopic3Q7) {
    return resolve('Python: f-String से Output Formatting', 'Python: Format Output Using f-Strings');
  }
  if (flags.isTopic3Q8) {
    return resolve('Python: दो डेसीमल स्थानों तक Formatting', 'Python: Format Numbers to Two Decimals');
  }
  if (flags.isTopic3Q9) {
    return resolve('Python: Interactive Student Profile बनाएं', 'Python: Build an Interactive Student Profile');
  }

  // Topic 4: Operators
  if (flags.isTopic4Q1) {
    return resolve('Python: दो संख्याओं का योग (+)', 'Python: Add Two Numbers (+)');
  }
  if (flags.isTopic4Q2) {
    return resolve('Python: Arithmetic Operators (+, -, *, /)', 'Python: Arithmetic Operators (+, -, *, /)');
  }
  if (flags.isTopic4Q3) {
    return resolve('Python: Division, Floor Division व Modulus (/, //, %)', 'Python: Division, Floor Division & Modulus (/, //, %)');
  }
  if (flags.isTopic4Q4) {
    return resolve('Python: Power Operator (**)', 'Python: Power Operator (**)');
  }
  if (flags.isTopic4Q5) {
    return resolve('Python: Operator Precedence (PEMDAS)', 'Python: Operator Precedence (PEMDAS)');
  }
  if (flags.isTopic4Q6) {
    return resolve('Python: Comparison Operators (==, !=, >, <, >=, <=)', 'Python: Comparison Operators (==, !=, >, <, >=, <=)');
  }
  if (flags.isTopic4Q7) {
    return resolve('Python: Logical AND Operator (and)', 'Python: Logical AND Operator (and)');
  }
  if (flags.isTopic4Q8) {
    return resolve('Python: Logical OR व NOT Operator (or, not)', 'Python: Logical OR & NOT (or, not)');
  }
  if (flags.isTopic4Q9) {
    return resolve('Python: Assignment Operators (+=, -=, *=, /=)', 'Python: Assignment Operators (+=, -=, *=, /=)');
  }
  if (flags.isTopic4Q10) {
    return resolve('Python: Membership Operators (in, not in)', 'Python: Membership Operators (in, not in)');
  }
  if (flags.isTopic4Q11) {
    return resolve('Python: Identity Operators (is, is not)', 'Python: Identity Operators (is, is not)');
  }
  if (flags.isTopic4Q12) {
    return resolve('Python: Operators Master Challenge', 'Python: Operators Master Challenge');
  }

  return flags.fallbackTitle ? (isHi ? languageEngine.standardizeHinglish(flags.fallbackTitle) : flags.fallbackTitle) : 'Python Practice';
}
