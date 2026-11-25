import { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';
import { EXCEL_PART1_BY_ID } from './excelPart1Data';
import { EXCEL_PART2_BY_ID } from './excelPart2Data';

export const EXCEL_VISUAL_NOTES_BY_ID: Record<number, StructuredVisualNoteTopic> = {
  ...EXCEL_PART1_BY_ID,
  ...EXCEL_PART2_BY_ID,
};

export function getExcelVisualNote(topicId: number): StructuredVisualNoteTopic | null {
  if (EXCEL_VISUAL_NOTES_BY_ID[topicId]) return EXCEL_VISUAL_NOTES_BY_ID[topicId];
  // Support legacy sequential IDs (81–130 -> 27–76)
  if (topicId >= 81 && topicId <= 130) {
    return EXCEL_VISUAL_NOTES_BY_ID[topicId - 54] || null;
  }
  return null;
}

export function hasExcelVisualNotes(topicId: number): boolean {
  return Boolean(getExcelVisualNote(topicId));
}
