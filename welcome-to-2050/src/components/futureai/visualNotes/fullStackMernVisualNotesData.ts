import type { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';
import {
  buildVisualNoteFromBlueprint,
  type DsTopicBlueprint,
} from './dsCurriculumBlueprintEngine';
import { MERN_TAB1_BLUEPRINTS } from './mernTab1Data';
import { MERN_TAB2_BLUEPRINTS } from './mernTab2Data';
import { MERN_TAB3_BLUEPRINTS } from './mernTab3Data';
import { MERN_TAB4_BLUEPRINTS } from './mernTab4Data';
import { MERN_TAB5_BLUEPRINTS } from './mernTab5Data';
import { MERN_TAB6_BLUEPRINTS } from './mernTab6Data';
import { MERN_TAB7_BLUEPRINTS } from './mernTab7Data';
import { MERN_TAB8A_BLUEPRINTS } from './mernTab8aData';
import { MERN_TAB8B_BLUEPRINTS } from './mernTab8bData';

/**
 * Complete Handwritten Visual Learning Notes registry for the ENTIRE
 * Full-Stack MERN Development with AI course (8 Tabs, 40 Chapters, 348 Topics: fs-t-1 .. fs-t-348).
 */
export const FULL_STACK_MERN_BLUEPRINTS: Record<number, DsTopicBlueprint> = {
  ...MERN_TAB1_BLUEPRINTS,
  ...MERN_TAB2_BLUEPRINTS,
  ...MERN_TAB3_BLUEPRINTS,
  ...MERN_TAB4_BLUEPRINTS,
  ...MERN_TAB5_BLUEPRINTS,
  ...MERN_TAB6_BLUEPRINTS,
  ...MERN_TAB7_BLUEPRINTS,
  ...MERN_TAB8A_BLUEPRINTS,
  ...MERN_TAB8B_BLUEPRINTS,
};

const MERN_BUILT_NOTES_CACHE: Record<number, StructuredVisualNoteTopic> = {};

export const ALL_FULL_STACK_MERN_TOPIC_IDS: number[] = Object.keys(FULL_STACK_MERN_BLUEPRINTS)
  .map(Number)
  .sort((a, b) => a - b);

export function hasFullStackMernVisualNotes(topicId: number): boolean {
  return Boolean(FULL_STACK_MERN_BLUEPRINTS[topicId]);
}

export function getFullStackMernVisualNote(topicId: number): StructuredVisualNoteTopic | null {
  if (MERN_BUILT_NOTES_CACHE[topicId]) return MERN_BUILT_NOTES_CACHE[topicId];
  const bp = FULL_STACK_MERN_BLUEPRINTS[topicId];
  if (!bp) return null;

  const built = buildVisualNoteFromBlueprint(bp);
  const mernModCode = `MERN-M${String(bp.modNum).padStart(2, '0')}`;
  const mernModTag = `FUTURE IT INDUSTRY | FULL-STACK MERN M${String(bp.modNum).padStart(2, '0')} | TOPIC ${bp.topicNumInMod}`;

  const customized: StructuredVisualNoteTopic = {
    ...built,
    module: mernModCode,
    pages: built.pages.map((pg, idx) => ({
      ...pg,
      moduleTag: mernModTag,
      subtitle:
        idx === built.pages.length - 1
          ? 'HOW FULL-STACK ENGINEERS APPLY THIS IN PRODUCTION'
          : pg.subtitle,
    })),
  };

  MERN_BUILT_NOTES_CACHE[topicId] = customized;
  return customized;
}
