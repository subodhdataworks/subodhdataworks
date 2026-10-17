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
    totalQuestions: 80,
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
    totalQuestions: 80,
    icon: '📦',
  },
};

/**
 * Returns the 8 interactive games for the specified Python Level (1 or 2).
 * Defaults to Level 1 if unspecified or out of range.
 */
export function getPythonLevelGames(levelId: number = 1): PythonGame[] {
  if (levelId === 2) {
    return PYTHON_VARIABLES_GAMES;
  }
  return PYTHON_INTRO_GAMES;
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
    totalQuestions: 80,
    icon: '⚡',
  };
}
