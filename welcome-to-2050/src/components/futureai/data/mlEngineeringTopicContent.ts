import type { TopicAssessmentData } from './module01TopicContent';
import { ALL_ML_ENG_BLUEPRINTS } from '../visualNotes/mlEngineeringVisualNotesData';
import {
  buildAssessmentFromBlueprint,
  type DsTopicBlueprint,
} from '../visualNotes/dsCurriculumBlueprintEngine';

const ML_ENG_BP_MAP: Record<number, DsTopicBlueprint> = {};
for (const bp of ALL_ML_ENG_BLUEPRINTS) {
  ML_ENG_BP_MAP[bp.id] = bp;
}

const ML_ENG_BUILT_ASSESSMENTS_CACHE: Record<number, TopicAssessmentData> = {};

export function hasMlEngineeringTopicData(topicId: number): boolean {
  return Boolean(ML_ENG_BP_MAP[topicId]);
}

/**
 * Returns complete, topic-matched MCQs, 5-level Coding Game (Puzzle, Concept Trace,
 * Bug Hunter, Build & Run, Real-World Boss), Coding Challenges, and Topic Interview Q&A
 * for all 120 Machine Learning Engineering topics.
 */
export function getMlEngineeringTopicData(topicId: number): TopicAssessmentData | null {
  if (ML_ENG_BUILT_ASSESSMENTS_CACHE[topicId]) {
    return ML_ENG_BUILT_ASSESSMENTS_CACHE[topicId];
  }
  const bp = ML_ENG_BP_MAP[topicId];
  if (!bp) return null;

  const built = buildAssessmentFromBlueprint(bp);
  const customized: TopicAssessmentData = {
    ...built,
    pdfPages: `MLE Ch${String(bp.modNum).padStart(2, '0')} • Visual Lesson Practice`,
    interviewQuestions: [
      ...built.interviewQuestions,
      {
        id: 3,
        tag: 'Production Mistake & Guardrail',
        question: `What is the most common beginner mistake in "${bp.title}", and what production habit prevents it?`,
        modelAnswer: `Common mistake: ${bp.mistakeEn} Production-ready ML Engineering habit: ${bp.proHabitEn}`,
      },
      {
        id: 4,
        tag: 'Real-World Scenario',
        question: bp.realWorldScenario,
        modelAnswer: `In production (${bp.jobUseEn}), I follow this structured workflow: ${bp.steps
          .map((s) => `${s.title} (${s.en})`)
          .join(' → ')}. Crucially, ${bp.proHabitEn}`,
      },
    ],
  };

  ML_ENG_BUILT_ASSESSMENTS_CACHE[topicId] = customized;
  return customized;
}
