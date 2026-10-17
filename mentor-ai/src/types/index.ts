export interface UserProfile {
  name: string;
  avatar: string;
  level: number;
  levelTitle: string;
  currentXp: number;
  xpToNextLevel: number;
  streakDays: number;
  quote: string;
  roleTarget: string;
}

export interface Course {
  id: string;
  title: string;
  iconType: 'python' | 'sql' | 'excel' | 'powerbi';
  progress: number;
  color: string;
  gradientClass: string;
  accentBg: string;
  accentText: string;
  totalLessons: number;
  completedLessons: number;
  nextLessonTitle: string;
  description: string;
  tags: string[];
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  xpReward: number;
  topic: string;
  sqlProblem?: {
    tableSchema: string;
    sampleData: Array<Record<string, any>>;
    expectedQuerySnippet: string;
    explanation: string;
  };
}

export interface QuickActionItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'graduation-cap' | 'code' | 'folder' | 'users';
  bgColor: string;
  borderColor: string;
  iconColor: string;
  textColor: string;
  hasChevron?: boolean;
}

export type TabType = 'home' | 'learn' | 'ai' | 'progress' | 'profile';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  codeSnippet?: string;
  topicBadge?: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'streak' | 'lesson' | 'ai' | 'challenge';
}
