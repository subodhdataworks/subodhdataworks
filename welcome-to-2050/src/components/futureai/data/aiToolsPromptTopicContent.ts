import type { TopicAssessmentData } from './module01TopicContent';
import { buildAssessmentFromBlueprint } from '../visualNotes/dsCurriculumBlueprintEngine';
import { AI_TOOLS_PROMPT_BLUEPRINTS } from '../visualNotes/aiToolsPromptVisualNotesData';

const ATP_ASSESSMENT_CACHE: Record<number, TopicAssessmentData> = {};

/**
 * Returns complete, topic-specific MCQs, 5-Level Prompt/Workflow Coding Game, and
 * 4-question Topic Interview Q&A for all 332 AI Tools & Prompt Engineering topics (pt-t-1..pt-t-332).
 */
export function getAiToolsPromptTopicData(topicId: number): TopicAssessmentData | null {
  if (ATP_ASSESSMENT_CACHE[topicId]) return ATP_ASSESSMENT_CACHE[topicId];
  const bp = AI_TOOLS_PROMPT_BLUEPRINTS[topicId];
  if (!bp) return null;

  const built = buildAssessmentFromBlueprint(bp);
  ATP_ASSESSMENT_CACHE[topicId] = built;
  return built;
}

export function hasAiToolsPromptTopicData(topicId: number): boolean {
  return Boolean(AI_TOOLS_PROMPT_BLUEPRINTS[topicId]);
}
