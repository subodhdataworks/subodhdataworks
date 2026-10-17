export type LanguageMode = 'en' | 'hindi' | 'hinglish';

export type CareerGoal = 'data_analyst' | 'data_scientist' | 'ai_builder' | 'tech_creator';

export type ExperienceLevel = 'never' | 'little' | 'yes' | 'zero' | 'beginner' | 'curious';

export type CognitiveDiagnosisCategory = 
  | 'CORRECT'
  | 'PARTIALLY_CORRECT'
  | 'MISCONCEPTION'
  | 'GUESS'
  | 'UNCLEAR'
  | 'LANGUAGE_ISSUE';

export interface DiagnosisFeedback {
  category: CognitiveDiagnosisCategory;
  whatYouGotRight: string;
  whatIsMissing: string;
  howToImprove: string;
  tryAgainPrompt: string;
  encouragement: string;
  detectedLanguage?: LanguageMode;
  visualModelGuidance?: string;
}

export type ConfidenceLevel = 'not_sure' | 'maybe' | 'mostly' | 'confident';

export interface ConfidenceRecord {
  stepId: string;
  confidence: ConfidenceLevel;
  wasCorrect: boolean;
  timestamp: string;
  pedagogicalReaction: string;
}

export type AnalogyModel = 
  | 'storage_box'
  | 'school_register'
  | 'mobile_contact'
  | 'shop_inventory'
  | 'cricket_scoreboard';

export type PulseState = 
  | 'idle' 
  | 'ai-speaking' 
  | 'learner-speaking' 
  | 'learner-thinking' 
  | 'prediction-submitted' 
  | 'code-running' 
  | 'breakthrough' 
  | 'mission-completed';

export interface LearnerProfile {
  id: string;
  name: string;
  whatsappNumber?: string;
  isSubscribed?: boolean;
  subscribedAt?: string;
  city?: string;
  careerGoal?: CareerGoal;
  experience: ExperienceLevel;
  preferredLanguage: LanguageMode;
  goal?: string;
  completedDays: number[];
  completedMissions: string[];
  completedSteps: number[];
  completedCourseTopics?: Record<string, string[]>;
  currentDay: number;
  currentStepIndex: number;
  currentMissionId?: string;
  createdAt: string;
  devModeUnlocked: boolean;
  themePreference?: 'dark' | 'light';
  activeAnalogy?: AnalogyModel;
  confidenceRecords?: ConfidenceRecord[];
}

export interface ConceptContext {
  what: string;
  why: string;
  realLife: string;
  doNow?: string;
  hindiSummary?: string;
  hinglishSummary?: string;
}

export interface Day1Step {
  stepNumber: number;
  id: string;
  title: string;
  titleHindi?: string;
  titleHinglish?: string;
  conceptContext: ConceptContext;
  tagline: string;
  initialCode?: string;
  expectedOutput?: string;
  hints: string[];
  hinglishTip?: string;
  hindiTip?: string;
  teachingAnalogy?: AnalogyModel;
  realIndiaContext?: {
    domain: 'education' | 'cricket' | 'shopping' | 'food_delivery' | 'farming';
    scenario: string;
    sampleData?: string;
  };
}

export type MissionType = 
  | 'robot-grid'
  | 'sequence-order'
  | 'predict-code'
  | 'variable-transformation'
  | 'bug-detective'
  | 'block-builder'
  | 'explain-program'
  | 'placeholder-challenge';

export interface Mission {
  id: string;
  dayNumber: number;
  missionNumber: number;
  title: string;
  concept: string;
  tagline: string;
  description: string;
  keyTakeaway: string;
  type: MissionType;
  unlocked?: boolean;
  completed?: boolean;
  hints: string[];
  starterCode?: string;
  expectedOutput?: string;
  rubricCriteria?: string[];
  hinglishExplanation?: string;
  meta?: Record<string, any>;
}

export type MistakeCategory = 
  | 'syntax' 
  | 'logic' 
  | 'prediction' 
  | 'conceptual' 
  | 'sequence' 
  | 'variable' 
  | 'debugging' 
  | 'unknown';

export interface MistakeRecord {
  id: string;
  stepId: string;
  category: MistakeCategory;
  description: string;
  attemptValue: string;
  timestamp: string;
}

export interface MistakeSummary {
  prediction?: number;
  syntax?: number;
  variable?: number;
  debugging?: number;
  sequence?: number;
  logic?: number;
  total?: number;
  conceptual?: number;
  byCategory?: Record<string, number>;
  recentMistakes?: MistakeRecord[];
  [key: string]: any;
}

export interface BrainProfile {
  sequenceThinking: number;
  prediction: number;
  variables: number;
  debugging: number;
  problemSolving: number;
  learningStyle?: string;
  strength: string;
  recommendedPractice?: string;
  practiceNext?: string;
  tomorrowPreview?: string;
}

export type SkillCategory = 
  | 'core_logic' 
  | 'programming' 
  | 'data_foundations' 
  | 'advanced_intelligence';

export interface SkillNode {
  id: string;
  name: string;
  category: SkillCategory;
  unlocked?: boolean;
  description: string;
  level?: number;
  activeInDemo?: boolean;
  mastery?: number;
  prerequisites?: string[];
}

export interface AnalyticsEvent {
  id: string;
  eventName?: string;
  event?: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

export interface RetrievalItem {
  id: string;
  dayNumber?: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  concept?: string;
  hinglishExplanation?: string;
  schedule?: any;
  [key: string]: any;
}

export interface DayFeedback {
  dayNumber: number;
  rating: 'loved' | 'good' | 'okay' | 'confusing';
  difficulties?: string;
  timestamp: string;
}

export interface CourseTopic {
  id: string;
  topicNumber: number;
  title: string;
  titleHindi?: string;
  tagline: string;
  isFree: boolean;
  whatIsIt: string;
  whyDoWeUseIt: string;
  indianRealLifeMetaphor: string;
  syntax: string;
  starterCode: string;
  solutionCode?: string;
  expectedOutput?: string;
  lineByLineExplanation: { line: string; explanation: string }[];
  realDataAnalystUse: string;
  commonMistakes: string[];
  interviewAnswer: {
    question: string;
    answer20s: string;
    audioPrompt: string;
  };
  practiceQuestion: {
    prompt: string;
    initialCodeTemplate?: string;
    hints: string[];
  };
  simulationType?: 'python_memory' | 'sql_table' | 'excel_grid' | 'powerbi_visual';
  simulationData?: any;
}

export interface CourseModule {
  id: 'python' | 'sql' | 'excel' | 'powerbi';
  title: string;
  tagline: string;
  badge: string;
  iconName: string;
  themeColor: string;
  description: string;
  duration: string;
  totalTopics: number;
  freeTopicsCount: number;
  topics: CourseTopic[];
}

