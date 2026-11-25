import type { TopicAssessmentData } from './module01TopicContent';
import { buildAssessmentFromBlueprint } from '../visualNotes/dsCurriculumBlueprintEngine';
import { FULL_STACK_MERN_BLUEPRINTS } from '../visualNotes/fullStackMernVisualNotesData';

const MERN_ASSESSMENT_CACHE: Record<number, TopicAssessmentData> = {};

/**
 * Returns complete, topic-specific MCQs, 5-Level Full-Stack Coding Game, and
 * Topic Interview Q&A for all 348 Full-Stack MERN with AI topics (fs-t-1..fs-t-348).
 */
export function getFullStackMernTopicData(topicId: number): TopicAssessmentData | null {
  if (MERN_ASSESSMENT_CACHE[topicId]) return MERN_ASSESSMENT_CACHE[topicId];
  const bp = FULL_STACK_MERN_BLUEPRINTS[topicId];
  if (!bp) return null;

  const built = buildAssessmentFromBlueprint(bp);
  MERN_ASSESSMENT_CACHE[topicId] = built;
  return built;
}

export function hasFullStackMernTopicData(topicId: number): boolean {
  return Boolean(FULL_STACK_MERN_BLUEPRINTS[topicId]);
}
