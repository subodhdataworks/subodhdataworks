// ═══════════════════════════════════════════════════════════════════════════════
// QUESTION BANK REGISTRY — ALL 8 TABS MASTER ARCHITECTURE
// Future IT Industry • Data Analyst with GenAI
// ═══════════════════════════════════════════════════════════════════════════════

export interface QuizOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  correct: number; // 0 for A, 1 for B, 2 for C, 3 for D
  explanation: string;
  hint: string;
  realWorldContext?: string;
  codeSnippet?: string;
}

export interface PuzzleChallenge {
  id: number;
  title: string;
  prompt: string;
  tokens: string[];
  shuffled: string[];
  expected: string[];
  hint: string;
}

export interface MatchPair {
  id: number;
  snippet: string;
  meaning: string;
  cls?: string;
}

export interface RealLifeMission {
  id: number;
  title: string;
  prompt: string;
  scenario: string;
  expectedResponse?: string;
  starterCode?: string;
  expectedOutput?: string;
}

export interface MockInterviewQA {
  id: number;
  question: string;
  sampleAnswer: string;
}

export interface TopicQuestionBank {
  tabId: number; // 1: Foundations, 2: Excel, 3: SQL, 4: Python, 5: Power BI, 6: GenAI, 7: Insights, 8: Projects
  tabName: string;
  moduleId: number;
  moduleName: string;
  topicKey: string; // e.g. '1.1', '1.2', etc.
  id?: number; // 1..26 for Tab 1
  topicTitle: string;
  mode: 'Non-coding' | 'Coding/tool practice';
  game1Quiz: QuizQuestion[];
  game2Puzzles: PuzzleChallenge[];
  game3MatchPairs: MatchPair[];
  game4Missions: RealLifeMission[];
  mockInterview: MockInterviewQA[];
}

import { TAB1_QUESTION_BANK, TAB1_QUESTION_BANK_BY_ID } from './questionBankTab1Foundations';

/**
 * Universal lookup function to fetch Question Bank for any topic across all 8 Tabs
 */
export function getTopicQuestionBank(
  tabId: number | string = 1,
  topicKeyOrId: string | number = 1
): TopicQuestionBank | null {
  const numericTab = Number(tabId) || 1;

  if (numericTab === 1) {
    if (typeof topicKeyOrId === 'number') {
      return TAB1_QUESTION_BANK_BY_ID[topicKeyOrId] || TAB1_QUESTION_BANK['1.1'] || null;
    }
    const key = String(topicKeyOrId);
    return TAB1_QUESTION_BANK[key] || TAB1_QUESTION_BANK_BY_ID[Number(key)] || null;
  }

  // Future tabs 2 through 8 will register here
  return null;
}

/**
 * Get all available topics for Tab 1 (Foundations)
 */
export function getTab1TopicList() {
  return Object.values(TAB1_QUESTION_BANK_BY_ID);
}
