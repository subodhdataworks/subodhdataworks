/**
 * Future.AI Python Learning Game UI - 5 Screen Progression Data
 * Designed 1:1 with media_1790613114942.jpg Style Guide & Templates
 */

export interface DragDropOption {
  id: string;
  label: string;
  isCorrect: boolean;
}

export interface DragDropScreenData {
  badgeNum: number;
  badgeColor: string;
  title: string;
  subtitle: string;
  instruction: string;
  sentencePrefix: string;
  options: DragDropOption[];
  hint: string;
}

export interface SequenceScreenData {
  badgeNum: number;
  badgeColor: string;
  title: string;
  subtitle: string;
  instruction: string;
  terminalOutput: string;
  blocks: { id: string; label: string; correctPos: number }[];
  hint: string;
}

export interface MatchPairApp {
  id: string;
  label: string;
  iconName: 'BarChart3' | 'Bot' | 'Globe' | 'Cpu' | 'Gamepad2';
  isCorrect: boolean;
}

export interface MatchPairScreenData {
  badgeNum: number;
  badgeColor: string;
  title: string;
  subtitle: string;
  instruction: string;
  centerTitle: string;
  applications: MatchPairApp[];
  hint: string;
}

export interface PredictOption {
  id: string;
  lines: string[];
  isCorrect: boolean;
}

export interface PredictScreenData {
  badgeNum: number;
  badgeColor: string;
  title: string;
  subtitle: string;
  instruction: string;
  codeSnippet: string[];
  options: PredictOption[];
  hint: string;
}

export interface BuildRunScreenData {
  badgeNum: number;
  badgeColor: string;
  title: string;
  subtitle: string;
  instruction: string;
  taskQuestion: string;
  targetString: string;
  line1Default: string;
  codePreview: string[];
  line1Blocks: string[];
  line2Blocks: string[];
  expectedOutput: string[];
  hint: string;
}

// ----------------------------------------------------
// 1. DRAG & DROP (Game 1/5)
// ----------------------------------------------------
export const STYLEGUIDE_DRAG_DROP: DragDropScreenData = {
  badgeNum: 1,
  badgeColor: '#1677FF',
  title: 'Drag & Drop',
  subtitle: 'Identify what Python is',
  instruction: 'Drag the correct option to complete the sentence.',
  sentencePrefix: 'Python is a',
  options: [
    { id: 'opt_prog_lang', label: 'Programming\nLanguage', isCorrect: true },
    { id: 'opt_db', label: 'Database', isCorrect: false },
    { id: 'opt_os', label: 'Operating System', isCorrect: false },
    { id: 'opt_browser', label: 'Web Browser', isCorrect: false }
  ],
  hint: 'Python is a widely-used, high-level programming language known for its clear syntax and versatility in software, AI, and data analysis.'
};

// ----------------------------------------------------
// 2. SEQUENCE (Game 2/5)
// ----------------------------------------------------
export const STYLEGUIDE_SEQUENCE: SequenceScreenData = {
  badgeNum: 2,
  badgeColor: '#8B7CFF',
  title: 'Sequence',
  subtitle: 'Arrange the blocks to create a Python program',
  instruction: 'Arrange the blocks in the correct order to print "Hello Future.AI".',
  terminalOutput: 'Hello Future.AI ✦',
  blocks: [
    { id: 'blk_print', label: 'print', correctPos: 0 },
    { id: 'blk_open_paren', label: '(', correctPos: 1 },
    { id: 'blk_str', label: '"Hello Future.AI"', correctPos: 2 },
    { id: 'blk_close_paren', label: ')', correctPos: 3 }
  ],
  hint: 'In Python, printing text follows the structure: print("text"). Put print first, then the open parenthesis (, then the message string, and close it with )!'
};

// ----------------------------------------------------
// 3. MATCH THE PAIR (Game 3/5)
// ----------------------------------------------------
export const STYLEGUIDE_MATCH_PAIR: MatchPairScreenData = {
  badgeNum: 3,
  badgeColor: '#FF9F1C',
  title: 'Match the Pair',
  subtitle: 'Connect Python with its real-world applications',
  instruction: 'Connect Python to the correct uses. You can select multiple options.',
  centerTitle: 'Python',
  applications: [
    { id: 'app_data', label: 'Data Analytics', iconName: 'BarChart3', isCorrect: true },
    { id: 'app_ai', label: 'AI & Machine Learning', iconName: 'Bot', isCorrect: true },
    { id: 'app_web', label: 'Web Development', iconName: 'Globe', isCorrect: true },
    { id: 'app_auto', label: 'Automation', iconName: 'Cpu', isCorrect: true },
    { id: 'app_games', label: 'Game Development', iconName: 'Gamepad2', isCorrect: true }
  ],
  hint: 'Python is a general-purpose language! It powers Data Analytics, AI & Machine Learning, Web APIs, Automation scripts, and Game Development.'
};

// ----------------------------------------------------
// 4. PREDICT THE OUTPUT (Game 4/5)
// ----------------------------------------------------
export const STYLEGUIDE_PREDICT: PredictScreenData = {
  badgeNum: 4,
  badgeColor: '#1677FF',
  title: 'Predict the Output',
  subtitle: 'Look at the code and choose the correct output',
  instruction: 'Look at the code and choose the correct output',
  codeSnippet: [
    'print("Hello")',
    'print("Python")',
    'print("Future.AI")'
  ],
  options: [
    {
      id: 'opt_multiline',
      lines: ['Hello', 'Python', 'Future.AI'],
      isCorrect: true
    },
    {
      id: 'opt_singleline',
      lines: ['Hello Python Future.AI'],
      isCorrect: false
    },
    {
      id: 'opt_reverse',
      lines: ['Future.AI', 'Python', 'Hello'],
      isCorrect: false
    },
    {
      id: 'opt_permute',
      lines: ['Python', 'Hello', 'Future.AI'],
      isCorrect: false
    }
  ],
  hint: 'By default, Python’s print() function prints the item followed by a newline (\\n). Since there are 3 separate print statements, each outputs on a new line.'
};

// ----------------------------------------------------
// 5. BUILD & RUN (Game 5/5)
// ----------------------------------------------------
export const STYLEGUIDE_BUILD_RUN: BuildRunScreenData = {
  badgeNum: 5,
  badgeColor: '#FF4D8D',
  title: 'Build & Run',
  subtitle: 'Create and run your first Python program',
  instruction: 'Complete the code in main.py to display "Let\'s learn with Future.AI!" and run your program.',
  taskQuestion: 'Complete the code to display: "Let\'s learn with Future.AI!"',
  targetString: "Let's learn with Future.AI!",
  line1Default: '"Welcome to Python!"',
  codePreview: [
    'print("Welcome to Python!")',
    'print("Let\'s learn with Future.AI!")'
  ],
  line1Blocks: ['print', '(', '"Welcome to Python!"', ')'],
  line2Blocks: ['print', '(', '"Let\'s learn with Future.AI!"', ')'],
  expectedOutput: [
    'Welcome to Python!',
    "Let's learn with Future.AI!"
  ],
  hint: 'In Python, display text by passing the string inside print("..."). Type "Let\'s learn with Future.AI!" after print( on line 2, then tap Run Code!'
};

// ==========================================
// COMPATIBILITY EXPORTS FOR PREVIOUS / CANVAS IMPORTS
// ==========================================
export type GameModeId = 'drag_drop' | 'sequence' | 'match_pair' | 'predict' | 'build_run';

export interface GameModeMeta {
  id: GameModeId;
  title: string;
  shortName: string;
  icon: string;
  badge: string;
  description: string;
}

export const GAME_MODES: GameModeMeta[] = [
  { id: 'drag_drop', title: 'Drag & Drop', shortName: 'Drag & Drop', icon: '🎯', badge: '1', description: 'Identify what Python is' },
  { id: 'sequence', title: 'Sequence', shortName: 'Sequence', icon: '🔢', badge: '2', description: 'Arrange blocks to create a Python program' },
  { id: 'match_pair', title: 'Match the Pair', shortName: 'Match the Pair', icon: '🧩', badge: '3', description: 'Connect Python with real-world applications' },
  { id: 'predict', title: 'Predict the Output', shortName: 'Predict the Output', icon: '🔮', badge: '4', description: 'Choose the correct terminal output' },
  { id: 'build_run', title: 'Build & Run', shortName: 'Build & Run', icon: '👨‍💻', badge: '5', description: 'Create and run your first Python program' }
];

export interface ChallengeItem {
  id: string;
  varName: string;
  expectedType?: string;
  valueDisplay?: string;
  question?: string;
  hint?: string;
  instruction?: string;
  points?: number;
  [key: string]: any;
}

export interface GameLevel {
  id: string;
  title: string;
  [key: string]: any;
}

export interface TopicMission {
  id: string;
  topicTitle: string;
  challenges: ChallengeItem[];
  [key: string]: any;
}

export const TOPIC_MISSIONS: Record<string, TopicMission> = {
  variables: {
    id: 'variables',
    topicTitle: 'Python Variables & Data Types',
    challenges: [
      { id: 'c1', varName: 'name', expectedType: 'str', valueDisplay: '"FutureAI"' },
      { id: 'c2', varName: 'age', expectedType: 'int', valueDisplay: '25' },
      { id: 'c3', varName: 'is_student', expectedType: 'bool', valueDisplay: 'True' },
      { id: 'c4', varName: 'pi', expectedType: 'float', valueDisplay: '3.14' }
    ]
  }
};
