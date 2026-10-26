// ═══════════════════════════════════════════════════════════════════════════════
// QUESTION BANK REGISTRY — ALL 8 TABS MASTER ARCHITECTURE + LIVE SYNC ENGINE
// Future IT Industry • Desktop & Android Mobile PWA Shared Learning System
// ═══════════════════════════════════════════════════════════════════════════════

import { doc, getDoc, setDoc, collection, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../services/firebase';
import { awardLearnerTelemetry, markTopicComplete } from '../../../services/realAuthService';

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
  published?: boolean;
  deleted?: boolean;
}

export interface PuzzleChallenge {
  id: number;
  title: string;
  prompt: string;
  tokens: string[];
  shuffled: string[];
  expected: string[];
  hint: string;
  published?: boolean;
  deleted?: boolean;
}

export interface MatchPair {
  id: number;
  snippet: string;
  meaning: string;
  cls?: string;
  published?: boolean;
  deleted?: boolean;
}

export interface RealLifeMission {
  id: number;
  title: string;
  prompt: string;
  scenario: string;
  expectedResponse?: string;
  starterCode?: string;
  expectedOutput?: string;
  published?: boolean;
  deleted?: boolean;
}

export interface MockInterviewQA {
  id: number;
  question: string;
  sampleAnswer: string;
  published?: boolean;
  deleted?: boolean;
}

export interface TopicQuestionBank {
  tabId: number; // 1: Foundations, 2: Data Science, 3: ML Eng, 4: AI Eng, 5..8
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
  published?: boolean;
  deleted?: boolean;
  updatedAt?: string;
}

import { TAB1_QUESTION_BANK, TAB1_QUESTION_BANK_BY_ID } from './questionBankTab1Foundations';
import { TAB2_DATA_SCIENCE_QUESTION_BANK, TAB2_DATA_SCIENCE_QUESTION_BANK_BY_ID } from './questionBankTab2DataScience';
import { TAB3_ML_ENGINEERING_QUESTION_BANK, TAB3_ML_ENGINEERING_QUESTION_BANK_BY_ID } from './questionBankTab3MlEngineering';
import { TAB4_AI_ENGINEERING_QUESTION_BANK, TAB4_AI_ENGINEERING_QUESTION_BANK_BY_ID } from './questionBankTab4AiEngineering';

export const QUESTION_BANK_OVERRIDES_KEY = 'futureai_question_bank_overrides_v1';
export const QUESTION_BANK_REVISION_KEY = 'futureai_question_bank_revision_v1';
const LEARNING_SYNC_PREFIX = 'futureai_learning_sync_v1_';

function withTimeout<T>(promise: Promise<T>, ms: number = 2200): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error('Sync timeout')), ms)),
  ]);
}

function filterPublishedItems<T extends { published?: boolean; deleted?: boolean }>(items?: T[]): T[] {
  if (!Array.isArray(items)) return [];
  return items.filter((item) => item && item.published !== false && item.deleted !== true);
}

/**
 * Read any admin-published question bank overrides from shared storage
 */
export function getQuestionBankOverrides(): Record<string, Partial<TopicQuestionBank>> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(QUESTION_BANK_OVERRIDES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/**
 * Get current revision number/timestamp for cache invalidation
 */
export function getQuestionBankRevision(): string {
  if (typeof window === 'undefined') return 'v1';
  return localStorage.getItem(QUESTION_BANK_REVISION_KEY) || 'v1';
}

/**
 * Admin helper: Save or publish/unpublish/delete a topic or question override in the shared backend + local cache
 */
export async function saveQuestionBankOverride(
  tabId: number | string,
  topicKeyOrId: string | number,
  overrideData: Partial<TopicQuestionBank>
): Promise<void> {
  if (typeof window === 'undefined') return;
  const numericTab = Number(tabId) || 1;
  const base = getBaseTopicQuestionBank(numericTab, topicKeyOrId);
  const canonicalKey = base?.topicKey || String(topicKeyOrId);
  const mapKey = `tab_${numericTab}_topic_${canonicalKey}`;
  const idKey = base?.id ? `tab_${numericTab}_id_${base.id}` : mapKey;

  const updatedAt = new Date().toISOString();
  const payload: Partial<TopicQuestionBank> = {
    ...overrideData,
    tabId: numericTab,
    topicKey: canonicalKey,
    updatedAt,
  };

  try {
    const current = getQuestionBankOverrides();
    current[mapKey] = { ...(current[mapKey] || {}), ...payload };
    current[idKey] = { ...(current[idKey] || {}), ...payload };
    localStorage.setItem(QUESTION_BANK_OVERRIDES_KEY, JSON.stringify(current));
    localStorage.setItem(QUESTION_BANK_REVISION_KEY, updatedAt);
    window.dispatchEvent(
      new CustomEvent('futureai_question_bank_updated', {
        detail: { tabId: numericTab, topicKey: canonicalKey, updatedAt },
      })
    );
  } catch (e) {
    console.warn('Local question bank override write warning:', e);
  }

  try {
    const docRef = doc(db, 'curriculum_question_banks', mapKey);
    await withTimeout(
      setDoc(
        docRef,
        {
          ...payload,
          updatedAtServer: serverTimestamp(),
        },
        { merge: true }
      ),
      2200
    );
  } catch {
    // Offline / local fallback preserved
  }
}

/**
 * Revalidate cached question bank from shared backend (Firestore + optional REST endpoint)
 * Called when opening or returning to a topic on Desktop or Android Mobile PWA.
 */
export async function revalidateQuestionBankFromBackend(
  tabId: number | string = 1,
  topicKeyOrId: string | number = 1
): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  const numericTab = Number(tabId) || 1;
  const base = getBaseTopicQuestionBank(numericTab, topicKeyOrId);
  const canonicalKey = base?.topicKey || String(topicKeyOrId);
  const mapKey = `tab_${numericTab}_topic_${canonicalKey}`;
  const idKey = base?.id ? `tab_${numericTab}_id_${base.id}` : mapKey;

  let hasChanges = false;

  try {
    const docRef = doc(db, 'curriculum_question_banks', mapKey);
    const snap = await withTimeout(getDoc(docRef), 2000);
    if (snap.exists()) {
      const remoteData = snap.data() as Partial<TopicQuestionBank>;
      const current = getQuestionBankOverrides();
      const prevUpdatedAt = current[mapKey]?.updatedAt;
      if (remoteData && (!prevUpdatedAt || remoteData.updatedAt !== prevUpdatedAt)) {
        current[mapKey] = { ...(current[mapKey] || {}), ...remoteData };
        current[idKey] = { ...(current[idKey] || {}), ...remoteData };
        const rev = remoteData.updatedAt || new Date().toISOString();
        localStorage.setItem(QUESTION_BANK_OVERRIDES_KEY, JSON.stringify(current));
        localStorage.setItem(QUESTION_BANK_REVISION_KEY, rev);
        hasChanges = true;
      }
    }
  } catch {
    // Graceful fallback to cached / bundled registry when offline
  }

  if (hasChanges) {
    window.dispatchEvent(
      new CustomEvent('futureai_question_bank_updated', {
        detail: { tabId: numericTab, topicKey: canonicalKey },
      })
    );
  }

  return hasChanges;
}

function getBaseTopicQuestionBank(
  numericTab: number,
  topicKeyOrId: string | number
): TopicQuestionBank | null {
  if (numericTab === 1) {
    if (typeof topicKeyOrId === 'number') {
      return TAB1_QUESTION_BANK_BY_ID[topicKeyOrId] || TAB1_QUESTION_BANK['1.1'] || null;
    }
    const key = String(topicKeyOrId);
    return TAB1_QUESTION_BANK[key] || TAB1_QUESTION_BANK_BY_ID[Number(key)] || null;
  }

  if (numericTab === 2) {
    if (typeof topicKeyOrId === 'number') {
      return TAB2_DATA_SCIENCE_QUESTION_BANK_BY_ID[topicKeyOrId] || TAB2_DATA_SCIENCE_QUESTION_BANK['1.1'] || null;
    }
    const key = String(topicKeyOrId);
    return TAB2_DATA_SCIENCE_QUESTION_BANK[key] || TAB2_DATA_SCIENCE_QUESTION_BANK_BY_ID[Number(key)] || null;
  }

  if (numericTab === 3) {
    if (typeof topicKeyOrId === 'number') {
      return TAB3_ML_ENGINEERING_QUESTION_BANK_BY_ID[topicKeyOrId] || TAB3_ML_ENGINEERING_QUESTION_BANK['1.1'] || null;
    }
    const key = String(topicKeyOrId);
    return TAB3_ML_ENGINEERING_QUESTION_BANK[key] || TAB3_ML_ENGINEERING_QUESTION_BANK_BY_ID[Number(key)] || null;
  }

  if (numericTab === 4) {
    if (typeof topicKeyOrId === 'number') {
      return TAB4_AI_ENGINEERING_QUESTION_BANK_BY_ID[topicKeyOrId] || TAB4_AI_ENGINEERING_QUESTION_BANK['1.1'] || null;
    }
    const key = String(topicKeyOrId);
    return TAB4_AI_ENGINEERING_QUESTION_BANK[key] || TAB4_AI_ENGINEERING_QUESTION_BANK_BY_ID[Number(key)] || null;
  }

  // Fallback for Tabs 5..8 to Tab 1 structure unless overridden by admin
  if (typeof topicKeyOrId === 'number') {
    return TAB1_QUESTION_BANK_BY_ID[topicKeyOrId] || TAB1_QUESTION_BANK['1.1'] || null;
  }
  const key = String(topicKeyOrId);
  return TAB1_QUESTION_BANK[key] || TAB1_QUESTION_BANK_BY_ID[Number(key)] || null;
}

/**
 * Universal lookup function to fetch Question Bank for any topic across all 8 Tabs
 * Automatically merges live admin overrides and filters unpublished/deleted items.
 */
export function getTopicQuestionBank(
  tabId: number | string = 1,
  topicKeyOrId: string | number = 1
): TopicQuestionBank | null {
  const numericTab = Number(tabId) || 1;
  const base = getBaseTopicQuestionBank(numericTab, topicKeyOrId);
  const overrides = getQuestionBankOverrides();

  const canonicalKey = base?.topicKey || String(topicKeyOrId);
  const mapKey = `tab_${numericTab}_topic_${canonicalKey}`;
  const idKey = `tab_${numericTab}_id_${topicKeyOrId}`;
  const customOverride = overrides[mapKey] || overrides[idKey];

  if (!base && !customOverride) {
    return null;
  }

  const merged: TopicQuestionBank = {
    ...(base || ({} as TopicQuestionBank)),
    ...(customOverride || {}),
  };

  if (merged.published === false || merged.deleted === true) {
    return base || null;
  }

  const quizList = filterPublishedItems(merged.game1Quiz);
  const puzzleList = filterPublishedItems(merged.game2Puzzles);
  const matchList = filterPublishedItems(merged.game3MatchPairs);
  const missionList = filterPublishedItems(merged.game4Missions);
  const interviewList = filterPublishedItems(merged.mockInterview);

  return {
    ...merged,
    game1Quiz: quizList.length > 0 ? quizList : base?.game1Quiz || [],
    game2Puzzles: puzzleList.length > 0 ? puzzleList : base?.game2Puzzles || [],
    game3MatchPairs: matchList.length > 0 ? matchList : base?.game3MatchPairs || [],
    game4Missions: missionList.length > 0 ? missionList : base?.game4Missions || [],
    mockInterview: interviewList.length > 0 ? interviewList : base?.mockInterview || [],
  };
}

/**
 * Get all available topics for Tab 1 (Foundations)
 */
export function getTab1TopicList(): TopicQuestionBank[] {
  return getTopicListForTab(1);
}

/**
 * Get all available topics for Tab 2 (Data Science & Agentic AI)
 */
export function getTab2TopicList(): TopicQuestionBank[] {
  return getTopicListForTab(2);
}

/**
 * Get all available topics for Tab 3 (Machine Learning Engineering)
 */
export function getTab3TopicList(): TopicQuestionBank[] {
  return getTopicListForTab(3);
}

/**
 * Get all available topics for Tab 4 (AI Engineering)
 */
export function getTab4TopicList(): TopicQuestionBank[] {
  return getTopicListForTab(4);
}

/**
 * Get available published topic list by tabId (automatically synchronized with admin overrides)
 */
export function getTopicListForTab(tabId: number = 1): TopicQuestionBank[] {
  let baseList: TopicQuestionBank[] = [];
  if (tabId === 2) {
    baseList = Object.values(TAB2_DATA_SCIENCE_QUESTION_BANK_BY_ID);
  } else if (tabId === 3) {
    baseList = Object.values(TAB3_ML_ENGINEERING_QUESTION_BANK_BY_ID);
  } else if (tabId === 4) {
    baseList = Object.values(TAB4_AI_ENGINEERING_QUESTION_BANK_BY_ID);
  } else {
    baseList = Object.values(TAB1_QUESTION_BANK_BY_ID);
  }

  const overrides = getQuestionBankOverrides();
  const mergedList = baseList
    .map((topic) => {
      const mapKey = `tab_${tabId}_topic_${topic.topicKey}`;
      const idKey = `tab_${tabId}_id_${topic.id || topic.topicKey}`;
      const ov = overrides[mapKey] || overrides[idKey];
      if (!ov) return topic;
      return {
        ...topic,
        ...ov,
        game1Quiz: filterPublishedItems(ov.game1Quiz || topic.game1Quiz),
        game2Puzzles: filterPublishedItems(ov.game2Puzzles || topic.game2Puzzles),
        game3MatchPairs: filterPublishedItems(ov.game3MatchPairs || topic.game3MatchPairs),
        game4Missions: filterPublishedItems(ov.game4Missions || topic.game4Missions),
        mockInterview: filterPublishedItems(ov.mockInterview || topic.mockInterview),
      };
    })
    .filter((t) => t.published !== false && t.deleted !== true);

  return mergedList;
}

// ═══════════════════════════════════════════════════════════════════════════════
// CROSS-DEVICE STUDENT PROGRESS, POINTS & STREAK SYNCHRONIZATION
// Saves to the same user account across Desktop & Android Mobile PWA
// ═══════════════════════════════════════════════════════════════════════════════

export interface SyncedTopicActivityState {
  unlockedGame: number;
  activeGame: number;
  quizIdx: number;
  puzzleIdx: number;
  missionIdx: number;
  missionDone: boolean;
  matchedPairs: Record<number, string>;
  interviewCurrentQIdx?: number;
  interviewSubmittedTextByQId?: Record<number, string>;
  interviewEvaluationsByQId?: Record<number, any>;
  interviewScorePct?: number;
  updatedAt: string;
}

export interface SyncedUserLearningAccountState {
  userKey: string;
  totalPoints: number;
  dayStreak: number;
  lastUpdatedAt: string;
  topics: Record<string, SyncedTopicActivityState>;
}

export function getActiveLearnerStorageKey(): string {
  if (typeof window === 'undefined') return 'guest';
  const email = (localStorage.getItem('futureai_user_email') || '').trim().toLowerCase();
  const phone = (localStorage.getItem('futureai_user_phone') || '').replace(/\D/g, '');
  const uid = (localStorage.getItem('futureai_user_uid') || '').trim();
  const name = (localStorage.getItem('futureai_user_name') || '').trim().toLowerCase();
  const raw = email || phone || uid || name || 'guest';
  return raw.replace(/[^a-zA-Z0-9_-]/g, '_');
}

export function getSyncedAccountLearningState(): SyncedUserLearningAccountState {
  const userKey = getActiveLearnerStorageKey();
  const fallback: SyncedUserLearningAccountState = {
    userKey,
    totalPoints: 0,
    dayStreak: 0,
    lastUpdatedAt: new Date(0).toISOString(),
    topics: {},
  };
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(`${LEARNING_SYNC_PREFIX}${userKey}`);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return {
      ...fallback,
      ...parsed,
      userKey,
      topics: parsed?.topics || {},
    };
  } catch {
    return fallback;
  }
}

export function getSyncedTopicProgress(
  tabId: number | string,
  topicId: number | string
): {
  totalPoints: number;
  dayStreak: number;
  topicState: SyncedTopicActivityState | null;
} {
  const state = getSyncedAccountLearningState();
  const tKey = `tab_${Number(tabId) || 1}_topic_${topicId}`;
  return {
    totalPoints: state.totalPoints || 0,
    dayStreak: state.dayStreak || 0,
    topicState: state.topics[tKey] || null,
  };
}

export async function saveSyncedTopicProgress(
  tabId: number | string,
  topicId: number | string,
  update: {
    totalPoints?: number;
    dayStreak?: number;
    pointsDelta?: number;
    unlockedGame?: number;
    activeGame?: number;
    quizIdx?: number;
    puzzleIdx?: number;
    missionIdx?: number;
    missionDone?: boolean;
    matchedPairs?: Record<number, string>;
    interviewCurrentQIdx?: number;
    interviewSubmittedTextByQId?: Record<number, string>;
    interviewEvaluationsByQId?: Record<number, any>;
    interviewScorePct?: number;
  }
): Promise<void> {
  if (typeof window === 'undefined') return;
  const userKey = getActiveLearnerStorageKey();
  const current = getSyncedAccountLearningState();
  const tKey = `tab_${Number(tabId) || 1}_topic_${topicId}`;
  const prevTopic: SyncedTopicActivityState = current.topics[tKey] || {
    unlockedGame: 1,
    activeGame: 1,
    quizIdx: 0,
    puzzleIdx: 0,
    missionIdx: 0,
    missionDone: false,
    matchedPairs: {},
    updatedAt: new Date().toISOString(),
  };

  const nowIso = new Date().toISOString();
  const nextTopic: SyncedTopicActivityState = {
    unlockedGame: Math.max(prevTopic.unlockedGame || 1, update.unlockedGame ?? prevTopic.unlockedGame ?? 1),
    activeGame: update.activeGame ?? prevTopic.activeGame ?? 1,
    quizIdx: update.quizIdx ?? prevTopic.quizIdx ?? 0,
    puzzleIdx: update.puzzleIdx ?? prevTopic.puzzleIdx ?? 0,
    missionIdx: update.missionIdx ?? prevTopic.missionIdx ?? 0,
    missionDone: update.missionDone ?? prevTopic.missionDone ?? false,
    matchedPairs: update.matchedPairs ?? prevTopic.matchedPairs ?? {},
    interviewCurrentQIdx: update.interviewCurrentQIdx ?? prevTopic.interviewCurrentQIdx ?? 0,
    interviewSubmittedTextByQId: update.interviewSubmittedTextByQId ?? prevTopic.interviewSubmittedTextByQId ?? {},
    interviewEvaluationsByQId: update.interviewEvaluationsByQId ?? prevTopic.interviewEvaluationsByQId ?? {},
    interviewScorePct: update.interviewScorePct ?? prevTopic.interviewScorePct,
    updatedAt: nowIso,
  };

  const nextTotalPoints =
    typeof update.totalPoints === 'number'
      ? Math.max(current.totalPoints, update.totalPoints)
      : current.totalPoints + (update.pointsDelta || 0);

  const nextStreak =
    typeof update.dayStreak === 'number' ? update.dayStreak : current.dayStreak;

  const nextState: SyncedUserLearningAccountState = {
    userKey,
    totalPoints: nextTotalPoints,
    dayStreak: nextStreak,
    lastUpdatedAt: nowIso,
    topics: {
      ...current.topics,
      [tKey]: nextTopic,
    },
  };

  try {
    localStorage.setItem(`${LEARNING_SYNC_PREFIX}${userKey}`, JSON.stringify(nextState));
    if (update.pointsDelta && update.pointsDelta > 0) {
      awardLearnerTelemetry(update.pointsDelta, Math.max(1, Math.round(update.pointsDelta / 5)));
    }
    if (nextTopic.missionDone && typeof topicId === 'number') {
      markTopicComplete(topicId);
    }
    window.dispatchEvent(
      new CustomEvent('futureai_learning_progress_updated', {
        detail: { userKey, tabId, topicId, state: nextState },
      })
    );
  } catch (e) {
    console.warn('Local learning progress sync error:', e);
  }

  if (userKey !== 'guest') {
    try {
      const docRef = doc(db, 'learner_progress', userKey);
      await withTimeout(
        setDoc(
          docRef,
          {
            ...nextState,
            updatedAtServer: serverTimestamp(),
          },
          { merge: true }
        ),
        2000
      );
    } catch {
      // Offline resilient fallback
    }
  }
}

export async function pullSyncedLearningProgressFromCloud(): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  const userKey = getActiveLearnerStorageKey();
  if (!userKey || userKey === 'guest') return false;

  try {
    const docRef = doc(db, 'learner_progress', userKey);
    const snap = await withTimeout(getDoc(docRef), 2000);
    if (!snap.exists()) return false;

    const remote = snap.data() as SyncedUserLearningAccountState;
    const local = getSyncedAccountLearningState();

    const mergedTopics: Record<string, SyncedTopicActivityState> = { ...local.topics };
    let changed = false;

    if (remote.topics && typeof remote.topics === 'object') {
      for (const [k, rTopic] of Object.entries(remote.topics)) {
        const lTopic = mergedTopics[k];
        if (
          !lTopic ||
          (rTopic.unlockedGame || 1) > (lTopic.unlockedGame || 1) ||
          (rTopic.missionDone && !lTopic.missionDone) ||
          (rTopic.updatedAt && (!lTopic.updatedAt || rTopic.updatedAt > lTopic.updatedAt))
        ) {
          mergedTopics[k] = {
            ...(lTopic || {}),
            ...rTopic,
            unlockedGame: Math.max(lTopic?.unlockedGame || 1, rTopic?.unlockedGame || 1),
            missionDone: Boolean(lTopic?.missionDone || rTopic?.missionDone),
          };
          changed = true;
        }
      }
    }

    const mergedPoints = Math.max(local.totalPoints || 0, remote.totalPoints || 0);
    const mergedStreak = Math.max(local.dayStreak || 0, remote.dayStreak || 0);

    if (mergedPoints !== local.totalPoints || mergedStreak !== local.dayStreak || changed) {
      const nextState: SyncedUserLearningAccountState = {
        userKey,
        totalPoints: mergedPoints,
        dayStreak: mergedStreak,
        lastUpdatedAt: new Date().toISOString(),
        topics: mergedTopics,
      };
      localStorage.setItem(`${LEARNING_SYNC_PREFIX}${userKey}`, JSON.stringify(nextState));
      window.dispatchEvent(
        new CustomEvent('futureai_learning_progress_updated', {
          detail: { userKey, state: nextState },
        })
      );
      return true;
    }
  } catch {
    // Graceful fallback when offline
  }
  return false;
}
