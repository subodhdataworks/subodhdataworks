import type { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';
import {
  buildVisualNoteFromBlueprint,
  type DsTopicBlueprint,
} from './dsCurriculumBlueprintEngine';
import { AI_ENG_TAB1_BLUEPRINTS } from './aiEngTab1Data';
import { AI_ENG_TAB2_BLUEPRINTS } from './aiEngTab2Data';
import { AI_ENG_TAB3_BLUEPRINTS } from './aiEngTab3Data';
import { AI_ENG_TAB4_BLUEPRINTS } from './aiEngTab4Data';
import { AI_ENG_TAB5_BLUEPRINTS } from './aiEngTab5Data';
import { AI_ENG_TAB6_BLUEPRINTS } from './aiEngTab6Data';
import { AI_ENG_TAB7_BLUEPRINTS } from './aiEngTab7Data';
import { AI_ENG_TAB8_BLUEPRINTS } from './aiEngTab8Data';

/**
 * Complete Handwritten Visual Learning Notes registry for the ENTIRE
 * AI Engineering course (8 Tabs, 29 Modules, 343 Topics: ai-t-1 .. ai-t-343).
 */
export const AI_ENGINEERING_BLUEPRINTS: Record<number, DsTopicBlueprint> = {
  ...AI_ENG_TAB1_BLUEPRINTS,
  ...AI_ENG_TAB2_BLUEPRINTS,
  ...AI_ENG_TAB3_BLUEPRINTS,
  ...AI_ENG_TAB4_BLUEPRINTS,
  ...AI_ENG_TAB5_BLUEPRINTS,
  ...AI_ENG_TAB6_BLUEPRINTS,
  ...AI_ENG_TAB7_BLUEPRINTS,
  ...AI_ENG_TAB8_BLUEPRINTS,
};

const AI_ENG_BUILT_NOTES_CACHE: Record<number, StructuredVisualNoteTopic> = {};

export const ALL_AI_ENG_TOPIC_IDS: number[] = Object.keys(AI_ENGINEERING_BLUEPRINTS)
  .map(Number)
  .sort((a, b) => a - b);

export function hasAiEngineeringVisualNotes(topicId: number): boolean {
  return Boolean(AI_ENGINEERING_BLUEPRINTS[topicId]);
}

export function getAiEngineeringVisualNote(topicId: number): StructuredVisualNoteTopic | null {
  if (AI_ENG_BUILT_NOTES_CACHE[topicId]) return AI_ENG_BUILT_NOTES_CACHE[topicId];
  const bp = AI_ENGINEERING_BLUEPRINTS[topicId];
  if (!bp) return null;

  const built = buildVisualNoteFromBlueprint(bp);
  const aiModCode = `AIE-M${String(bp.modNum).padStart(2, '0')}`;
  const aiModTag = `FUTURE IT INDUSTRY | AI ENG M${String(bp.modNum).padStart(2, '0')} | TOPIC ${bp.topicNumInMod}`;

  const customized: StructuredVisualNoteTopic = {
    ...built,
    module: aiModCode,
    pages: built.pages.map((pg, idx) => ({
      ...pg,
      moduleTag: aiModTag,
      subtitle:
        idx === built.pages.length - 1
          ? 'HOW AI ENGINEERS APPLY THIS IN REAL PRODUCTION COMPANIES'
          : pg.subtitle,
    })),
  };

  AI_ENG_BUILT_NOTES_CACHE[topicId] = customized;
  return customized;
}
