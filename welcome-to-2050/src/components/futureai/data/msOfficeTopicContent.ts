import type { TopicAssessmentData } from './module01TopicContent';
import { buildAssessmentFromBlueprint } from '../visualNotes/dsCurriculumBlueprintEngine';
import { MS_OFFICE_BLUEPRINTS } from '../visualNotes/msOfficeVisualNotesData';

const MSO_ASSESSMENT_CACHE: Record<number, TopicAssessmentData> = {};

/**
 * Returns complete, topic-specific MCQs, 5-Level Office/Copilot Game, and
 * Topic Interview Q&A for all 301 Microsoft 365 with Copilot AI topics (ms-t-1..ms-t-301).
 */
export function getMsOfficeTopicData(topicId: number): TopicAssessmentData | null {
  if (MSO_ASSESSMENT_CACHE[topicId]) return MSO_ASSESSMENT_CACHE[topicId];
  const bp = MS_OFFICE_BLUEPRINTS[topicId];
  if (!bp) return null;

  const built = buildAssessmentFromBlueprint(bp);
  MSO_ASSESSMENT_CACHE[topicId] = built;
  return built;
}

export function hasMsOfficeTopicData(topicId: number): boolean {
  return Boolean(MS_OFFICE_BLUEPRINTS[topicId]);
}
