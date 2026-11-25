import type { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';
import {
  buildVisualNoteFromBlueprint,
  type DsTopicBlueprint,
} from './dsCurriculumBlueprintEngine';
import { ML_ENG_TABS_1_2_BLUEPRINTS } from './mlEngTabs1To2Data';
import { ML_ENG_TABS_3_4_BLUEPRINTS } from './mlEngTabs3To4Data';
import { ML_ENG_TABS_5_6_BLUEPRINTS } from './mlEngTabs5To6Data';
import { ML_ENG_TABS_7_8_BLUEPRINTS } from './mlEngTabs7To8Data';

/**
 * Complete Handwritten Visual Learning Notes registry for the ENTIRE
 * Machine Learning Engineering course (8 Tabs, 24 Chapters, 120 Topics):
 *  - Tab 1: ML Engineering Foundations (Ch 1–3, Topics 1–15)
 *  - Tab 2: Data Preparation and Feature Engineering (Ch 4–6, Topics 16–30)
 *  - Tab 3: Core Machine Learning (Ch 7–9, Topics 31–45)
 *  - Tab 4: Deep Learning and Specialized Models (Ch 10–12, Topics 46–60)
 *  - Tab 5: ML Systems and MLOps (Ch 13–15, Topics 61–75)
 *  - Tab 6: Deployment, Monitoring and Reliability (Ch 16–18, Topics 76–90)
 *  - Tab 7: Generative AI and LLM Engineering (Ch 19–21, Topics 91–105)
 *  - Tab 8: Projects and Career Readiness (Ch 22–24, Topics 106–120)
 */
export const ALL_ML_ENG_BLUEPRINTS: DsTopicBlueprint[] = [
  ...ML_ENG_TABS_1_2_BLUEPRINTS,
  ...ML_ENG_TABS_3_4_BLUEPRINTS,
  ...ML_ENG_TABS_5_6_BLUEPRINTS,
  ...ML_ENG_TABS_7_8_BLUEPRINTS,
];

const ML_ENG_BP_BY_ID: Record<number, DsTopicBlueprint> = {};
for (const bp of ALL_ML_ENG_BLUEPRINTS) {
  ML_ENG_BP_BY_ID[bp.id] = bp;
}
export const ML_ENGINEERING_BLUEPRINTS: Record<number, DsTopicBlueprint> = ML_ENG_BP_BY_ID;

const ML_ENG_BUILT_NOTES_CACHE: Record<number, StructuredVisualNoteTopic> = {};

export const ALL_ML_ENG_TOPIC_IDS: number[] = Object.keys(ML_ENG_BP_BY_ID)
  .map(Number)
  .sort((a, b) => a - b);

export function hasMlEngineeringVisualNotes(topicId: number): boolean {
  return Boolean(ML_ENG_BP_BY_ID[topicId]);
}

export function getMlEngineeringVisualNote(topicId: number): StructuredVisualNoteTopic | null {
  if (ML_ENG_BUILT_NOTES_CACHE[topicId]) return ML_ENG_BUILT_NOTES_CACHE[topicId];
  const bp = ML_ENG_BP_BY_ID[topicId];
  if (!bp) return null;

  const built = buildVisualNoteFromBlueprint(bp);
  const mlModCode = `MLE-M${String(bp.modNum).padStart(2, '0')}`;
  const mlModTag = `FUTURE IT INDUSTRY | MLE CH${String(bp.modNum).padStart(2, '0')} | TOPIC ${bp.topicNumInMod}`;

  const customized: StructuredVisualNoteTopic = {
    ...built,
    module: mlModCode,
    pages: built.pages.map((pg, idx) => ({
      ...pg,
      moduleTag: mlModTag,
      subtitle:
        idx === built.pages.length - 1
          ? 'HOW ML ENGINEERS APPLY THIS IN REAL PRODUCTION COMPANIES'
          : pg.subtitle,
    })),
  };

  ML_ENG_BUILT_NOTES_CACHE[topicId] = customized;
  return customized;
}
