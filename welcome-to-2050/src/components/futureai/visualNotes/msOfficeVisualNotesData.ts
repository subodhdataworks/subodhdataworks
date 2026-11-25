import type { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';
import {
  buildVisualNoteFromBlueprint,
  type DsTopicBlueprint,
} from './dsCurriculumBlueprintEngine';
import { MS_OFFICE_TAB1_BLUEPRINTS } from './msOfficeTab1Data';
import { MS_OFFICE_TAB2_BLUEPRINTS } from './msOfficeTab2Data';
import { MS_OFFICE_TAB3_BLUEPRINTS } from './msOfficeTab3Data';
import { MS_OFFICE_TAB4_BLUEPRINTS } from './msOfficeTab4Data';
import { MS_OFFICE_TAB5_BLUEPRINTS } from './msOfficeTab5Data';
import { MS_OFFICE_TAB6_BLUEPRINTS } from './msOfficeTab6Data';
import { MS_OFFICE_TAB7_BLUEPRINTS } from './msOfficeTab7Data';
import { MS_OFFICE_TAB8_BLUEPRINTS } from './msOfficeTab8Data';

/**
 * Complete Handwritten Visual Learning Notes registry for the ENTIRE
 * Microsoft 365 with Copilot AI course (8 Tabs, 26 Modules, 301 Topics: ms-t-1 .. ms-t-301).
 */
export const MS_OFFICE_BLUEPRINTS: Record<number, DsTopicBlueprint> = {
  ...MS_OFFICE_TAB1_BLUEPRINTS,
  ...MS_OFFICE_TAB2_BLUEPRINTS,
  ...MS_OFFICE_TAB3_BLUEPRINTS,
  ...MS_OFFICE_TAB4_BLUEPRINTS,
  ...MS_OFFICE_TAB5_BLUEPRINTS,
  ...MS_OFFICE_TAB6_BLUEPRINTS,
  ...MS_OFFICE_TAB7_BLUEPRINTS,
  ...MS_OFFICE_TAB8_BLUEPRINTS,
};

const MSO_BUILT_NOTES_CACHE: Record<number, StructuredVisualNoteTopic> = {};

export const ALL_MS_OFFICE_TOPIC_IDS: number[] = Object.keys(MS_OFFICE_BLUEPRINTS)
  .map(Number)
  .sort((a, b) => a - b);

export function hasMsOfficeVisualNotes(topicId: number): boolean {
  return Boolean(MS_OFFICE_BLUEPRINTS[topicId]);
}

export function getMsOfficeVisualNote(topicId: number): StructuredVisualNoteTopic | null {
  if (MSO_BUILT_NOTES_CACHE[topicId]) return MSO_BUILT_NOTES_CACHE[topicId];
  const bp = MS_OFFICE_BLUEPRINTS[topicId];
  if (!bp) return null;

  const built = buildVisualNoteFromBlueprint(bp);
  const msoModCode = `M365-M${String(bp.modNum).padStart(2, '0')}`;
  const msoModTag = `FUTURE IT INDUSTRY | MICROSOFT 365 M${String(bp.modNum).padStart(2, '0')} | TOPIC ${bp.topicNumInMod}`;

  const customized: StructuredVisualNoteTopic = {
    ...built,
    module: msoModCode,
    pages: built.pages.map((pg, idx) => ({
      ...pg,
      moduleTag: msoModTag,
      subtitle:
        idx === built.pages.length - 1
          ? 'HOW PROFESSIONALS USE THIS IN MODERN OFFICES'
          : pg.subtitle,
    })),
  };

  MSO_BUILT_NOTES_CACHE[topicId] = customized;
  return customized;
}
