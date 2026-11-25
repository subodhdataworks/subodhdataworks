import { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';
import { POWER_BI_PART1_BY_ID } from './powerBiPart1Data';
import { POWER_BI_PART2_BY_ID } from './powerBiPart2Data';

export const POWER_BI_VISUAL_NOTES_BY_ID: Record<number, StructuredVisualNoteTopic> = {
  ...POWER_BI_PART1_BY_ID,
  ...POWER_BI_PART2_BY_ID,
};

export function getPowerBiVisualNote(topicId: number): StructuredVisualNoteTopic | null {
  if (POWER_BI_VISUAL_NOTES_BY_ID[topicId]) return POWER_BI_VISUAL_NOTES_BY_ID[topicId];
  // Support legacy sequential IDs (127–172 -> 207–252)
  if (topicId >= 127 && topicId <= 172) {
    return POWER_BI_VISUAL_NOTES_BY_ID[topicId + 80] || null;
  }
  return null;
}

export function hasPowerBiVisualNotes(topicId: number): boolean {
  return Boolean(getPowerBiVisualNote(topicId));
}
