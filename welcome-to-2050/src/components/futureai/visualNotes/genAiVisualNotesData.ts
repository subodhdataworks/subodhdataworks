import { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';
import { GENAI_PART1_BY_ID } from './genAiPart1Data';
import { GENAI_PART2_BY_ID } from './genAiPart2Data';

export const GENAI_VISUAL_NOTES_BY_ID: Record<number, StructuredVisualNoteTopic> = {
  ...GENAI_PART1_BY_ID,
  ...GENAI_PART2_BY_ID,
};

export function getGenAiVisualNote(topicId: number): StructuredVisualNoteTopic | null {
  if (GENAI_VISUAL_NOTES_BY_ID[topicId]) return GENAI_VISUAL_NOTES_BY_ID[topicId];
  // Support legacy sequential IDs (173–205 -> 253–285)
  if (topicId >= 173 && topicId <= 205) {
    return GENAI_VISUAL_NOTES_BY_ID[topicId + 80] || null;
  }
  return null;
}

export function hasGenAiVisualNotes(topicId: number): boolean {
  return Boolean(getGenAiVisualNote(topicId));
}
