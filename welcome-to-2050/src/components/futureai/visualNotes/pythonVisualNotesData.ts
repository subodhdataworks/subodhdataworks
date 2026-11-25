import { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';
import { PYTHON_PART1_BY_ID } from './pythonPart1Data';
import { PYTHON_PART2_BY_ID } from './pythonPart2Data';

export const PYTHON_VISUAL_NOTES_BY_ID: Record<number, StructuredVisualNoteTopic> = {
  ...PYTHON_PART1_BY_ID,
  ...PYTHON_PART2_BY_ID,
};

export function getPythonVisualNote(topicId: number): StructuredVisualNoteTopic | null {
  return PYTHON_VISUAL_NOTES_BY_ID[topicId] || null;
}

export function hasPythonVisualNotes(topicId: number): boolean {
  return Boolean(PYTHON_VISUAL_NOTES_BY_ID[topicId]);
}
