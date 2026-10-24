/**
 * Python Games Arena Level Registry
 * Supports Level 1 (Introduction & Setup) and Level 2 (Variables & Data Types),
 * with extensible metadata for all 29 levels.
 */

import { PYTHON_INTRO_GAMES, PythonGame } from './pythonIntroGamesData';
import { PYTHON_VARIABLES_GAMES } from './pythonVariablesGamesData';

export interface PythonLevelMeta {
  id: number;
  title: string;
  shortTitle: string;
  headline: string;
  chapterBadge: string;
  category: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  totalGames: number;
  totalQuestions: number;
  icon: string;
}

export const PYTHON_LEVELS_META: Record<number, PythonLevelMeta> = {
  1: {
    id: 1,
    title: 'Level 1: Introduction to Python',
    shortTitle: 'Intro & Setup',
    headline: 'Python Introduction & Setup',
    chapterBadge: 'Chapter 1',
    category: 'Beginner',
    description: 'Learn computing foundations, instructions, algorithms, and setting up Python.',
    totalGames: 8,
    totalQuestions: 40,
    icon: '🐍',
  },
  2: {
    id: 2,
    title: 'Level 2: Variables and Data Types',
    shortTitle: 'Variables & Types',
    headline: 'Variables and Data Types',
    chapterBadge: 'Chapter 2',
    category: 'Beginner',
    description: 'Master variables, data types (int, float, str, bool), type casting, and naming conventions.',
    totalGames: 8,
    totalQuestions: 40,
    icon: '📦',
  },
};

/**
 * Returns the 8 interactive games for the specified Python Level (1 or 2).
 * Defaults to Level 1 if unspecified or out of range.
 * Each game contains strictly 5 curated challenges as requested ("saare question 5 , 5 karo").
 */
export function getPythonLevelGames(levelId: number = 1): PythonGame[] {
  const games = levelId === 2 ? PYTHON_VARIABLES_GAMES : PYTHON_INTRO_GAMES;
  return games.map((g) => ({
    ...g,
    challenges: g.challenges.slice(0, 5),
  }));
}

/**
 * Returns metadata for the given Python level.
 */
export function getPythonLevelMeta(levelId: number = 1): PythonLevelMeta {
  return PYTHON_LEVELS_META[levelId] || {
    id: levelId,
    title: `Level ${levelId}: Python Mastery`,
    shortTitle: `Level ${levelId}`,
    headline: `Python Level ${levelId}`,
    chapterBadge: `Chapter ${levelId}`,
    category: levelId <= 7 ? 'Beginner' : levelId <= 15 ? 'Intermediate' : 'Advanced',
    description: 'Interactive Python coding challenge arena.',
    totalGames: 8,
    totalQuestions: 40,
    icon: '⚡',
  };
}
