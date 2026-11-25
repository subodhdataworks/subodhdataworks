import type { TopicAssessmentData } from './module01TopicContent';
import { buildAssessmentFromBlueprint } from '../visualNotes/dsCurriculumBlueprintEngine';
import { AI_ENGINEERING_BLUEPRINTS } from '../visualNotes/aiEngineeringVisualNotesData';

const AI_ENG_ASSESSMENT_CACHE: Record<number, TopicAssessmentData> = {};

/**
 * Returns complete, topic-specific MCQs, 5-Level Coding Game, and
 * 4-question Topic Interview Q&A for all 343 AI Engineering topics (ai-t-1..ai-t-343).
 */
export function getAiEngineeringTopicData(topicId: number): TopicAssessmentData | null {
  if (AI_ENG_ASSESSMENT_CACHE[topicId]) return AI_ENG_ASSESSMENT_CACHE[topicId];
  const bp = AI_ENGINEERING_BLUEPRINTS[topicId];
  if (!bp) return null;

  const built = buildAssessmentFromBlueprint(bp);
  AI_ENG_ASSESSMENT_CACHE[topicId] = built;
  return built;
}

export function hasAiEngineeringTopicData(topicId: number): boolean {
  return Boolean(AI_ENGINEERING_BLUEPRINTS[topicId]);
}
