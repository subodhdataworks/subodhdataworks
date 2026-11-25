import type { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';
import { DS_M01_VISUAL_NOTES } from './dsM01VisualNotesData';
import { DS_M02_VISUAL_NOTES } from './dsM02VisualNotesData';
import { DS_M03_VISUAL_NOTES } from './dsM03VisualNotesData';
import { DS_M04_VISUAL_NOTES } from './dsM04VisualNotesData';
import { DS_M05_VISUAL_NOTES } from './dsM05VisualNotesData';
import { DS_M06_VISUAL_NOTES } from './dsM06VisualNotesData';
import { DS_M07_VISUAL_NOTES } from './dsM07VisualNotesData';
import { DS_M08_VISUAL_NOTES } from './dsM08VisualNotesData';
import { DS_M09_VISUAL_NOTES } from './dsM09VisualNotesData';
import { DS_M10_VISUAL_NOTES } from './dsM10VisualNotesData';
import { DS_M11_VISUAL_NOTES } from './dsM11VisualNotesData';
import {
  buildVisualNoteFromBlueprint,
  type DsTopicBlueprint,
} from './dsCurriculumBlueprintEngine';
import { DS_TAB3_BLUEPRINTS } from './dsTab3VisualData';
import { DS_TAB4_BLUEPRINTS } from './dsTab4VisualData';
import { DS_TAB5_BLUEPRINTS } from './dsTab5VisualData';
import { DS_TAB6_BLUEPRINTS } from './dsTab6VisualData';
import { DS_TAB7_BLUEPRINTS } from './dsTab7VisualData';
import { DS_TAB8_BLUEPRINTS } from './dsTab8VisualData';

/**
 * Complete Visual Learning Notes registry for the ENTIRE Data Science & Agentic AI course:
 * - Tab 1: Data Science Foundations (M01–M04, Topics 1–31)
 * - Tab 2: Python Programming for Data Science (M05–M11, Topics 32–111)
 * - Tab 3: Mathematics, Statistics and Data Preparation (M12–M15, Topics 112–156)
 * - Tab 4: NumPy, Pandas, SQL and Data Engineering (M16–M20, Topics 157–221)
 * - Tab 5: Machine Learning (M21–M25, Topics 222–275)
 * - Tab 6: Deep Learning and Generative AI (M26–M29, Topics 276–320)
 * - Tab 7: Agentic AI and Reliable AI Systems (M30–M35, Topics 321–384)
 * - Tab 8: Deployment, Projects and Career Readiness (M36–M39, Topics 385–427)
 * Total: 427 complete bilingual Visual Learning lessons!
 */
const DS_M01_M11_MAP: Record<number, StructuredVisualNoteTopic> = {
  ...DS_M01_VISUAL_NOTES,
  ...DS_M02_VISUAL_NOTES,
  ...DS_M03_VISUAL_NOTES,
  ...DS_M04_VISUAL_NOTES,
  ...DS_M05_VISUAL_NOTES,
  ...DS_M06_VISUAL_NOTES,
  ...DS_M07_VISUAL_NOTES,
  ...DS_M08_VISUAL_NOTES,
  ...DS_M09_VISUAL_NOTES,
  ...DS_M10_VISUAL_NOTES,
  ...DS_M11_VISUAL_NOTES,
};

export const ALL_DS_TAB3_TO_8_BLUEPRINTS: DsTopicBlueprint[] = [
  ...DS_TAB3_BLUEPRINTS,
  ...DS_TAB4_BLUEPRINTS,
  ...DS_TAB5_BLUEPRINTS,
  ...DS_TAB6_BLUEPRINTS,
  ...DS_TAB7_BLUEPRINTS,
  ...DS_TAB8_BLUEPRINTS,
];

const DS_BLUEPRINT_BY_ID: Record<number, DsTopicBlueprint> = {};
for (const bp of ALL_DS_TAB3_TO_8_BLUEPRINTS) {
  DS_BLUEPRINT_BY_ID[bp.id] = bp;
}
export const DATA_SCIENCE_BLUEPRINTS: Record<number, DsTopicBlueprint> = DS_BLUEPRINT_BY_ID;

const BUILT_NOTES_CACHE: Record<number, StructuredVisualNoteTopic> = {};

export const ALL_DS_VISUAL_NOTE_TOPIC_IDS: number[] = Array.from(
  new Set([
    ...Object.keys(DS_M01_M11_MAP).map(Number),
    ...Object.keys(DS_BLUEPRINT_BY_ID).map(Number),
  ])
).sort((a, b) => a - b);

export function hasDataScienceVisualNotes(topicId: number): boolean {
  return Boolean(DS_M01_M11_MAP[topicId] || DS_BLUEPRINT_BY_ID[topicId]);
}

export function getDataScienceVisualNote(topicId: number): StructuredVisualNoteTopic | null {
  if (DS_M01_M11_MAP[topicId]) return DS_M01_M11_MAP[topicId];
  if (BUILT_NOTES_CACHE[topicId]) return BUILT_NOTES_CACHE[topicId];
  const bp = DS_BLUEPRINT_BY_ID[topicId];
  if (!bp) return null;
  const built = buildVisualNoteFromBlueprint(bp);
  BUILT_NOTES_CACHE[topicId] = built;
  return built;
}
