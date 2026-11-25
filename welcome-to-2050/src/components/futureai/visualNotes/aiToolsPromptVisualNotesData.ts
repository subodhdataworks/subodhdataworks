import type { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';
import {
  buildVisualNoteFromBlueprint,
  type DsTopicBlueprint,
} from './dsCurriculumBlueprintEngine';
import { PROMPT_TAB1_BLUEPRINTS } from './promptTab1Data';
import { PROMPT_TAB2_BLUEPRINTS } from './promptTab2Data';
import { PROMPT_TAB3_BLUEPRINTS } from './promptTab3Data';
import { PROMPT_TAB4_BLUEPRINTS } from './promptTab4Data';
import { PROMPT_TAB5_BLUEPRINTS } from './promptTab5Data';
import { PROMPT_TAB6_BLUEPRINTS } from './promptTab6Data';
import { PROMPT_TAB7_BLUEPRINTS } from './promptTab7Data';
import { PROMPT_TAB8_BLUEPRINTS } from './promptTab8Data';

/**
 * Complete Handwritten Visual Learning Notes registry for the ENTIRE
 * AI Tools & Prompt Engineering course (8 Tabs, 30 Modules, 332 Topics: pt-t-1 .. pt-t-332).
 */
export const AI_TOOLS_PROMPT_BLUEPRINTS: Record<number, DsTopicBlueprint> = {
  ...PROMPT_TAB1_BLUEPRINTS,
  ...PROMPT_TAB2_BLUEPRINTS,
  ...PROMPT_TAB3_BLUEPRINTS,
  ...PROMPT_TAB4_BLUEPRINTS,
  ...PROMPT_TAB5_BLUEPRINTS,
  ...PROMPT_TAB6_BLUEPRINTS,
  ...PROMPT_TAB7_BLUEPRINTS,
  ...PROMPT_TAB8_BLUEPRINTS,
};

const ATP_BUILT_NOTES_CACHE: Record<number, StructuredVisualNoteTopic> = {};

export const ALL_AI_TOOLS_PROMPT_TOPIC_IDS: number[] = Object.keys(AI_TOOLS_PROMPT_BLUEPRINTS)
  .map(Number)
  .sort((a, b) => a - b);

export function hasAiToolsPromptVisualNotes(topicId: number): boolean {
  return Boolean(AI_TOOLS_PROMPT_BLUEPRINTS[topicId]);
}

export function getAiToolsPromptVisualNote(topicId: number): StructuredVisualNoteTopic | null {
  if (ATP_BUILT_NOTES_CACHE[topicId]) return ATP_BUILT_NOTES_CACHE[topicId];
  const bp = AI_TOOLS_PROMPT_BLUEPRINTS[topicId];
  if (!bp) return null;

  const built = buildVisualNoteFromBlueprint(bp);
  const atpModCode = `ATP-M${String(bp.modNum).padStart(2, '0')}`;
  const atpModTag = `FUTURE IT INDUSTRY | AI TOOLS & PROMPT M${String(bp.modNum).padStart(2, '0')} | TOPIC ${bp.topicNumInMod}`;

  const customized: StructuredVisualNoteTopic = {
    ...built,
    module: atpModCode,
    pages: built.pages.map((pg, idx) => ({
      ...pg,
      moduleTag: atpModTag,
      subtitle:
        idx === built.pages.length - 1
          ? 'HOW PROFESSIONALS APPLY THIS IN REAL WORKPLACES'
          : pg.subtitle,
    })),
  };

  ATP_BUILT_NOTES_CACHE[topicId] = customized;
  return customized;
}
