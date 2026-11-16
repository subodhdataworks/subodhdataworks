/**
 * Shared types + helper for Human Female Teacher scripts (DSA / Python Visual Classroom only).
 * Rule: no question IDs inside narration, natural Hinglish, English technical terms.
 */
export interface LineScript {
  lineTitle: string;
  explanation: string;
  narration: string;
}

export interface QuestionScript {
  title: string;
  lines: Record<number, LineScript>;
}

export type ScriptMap = Record<string, QuestionScript>;

/** Build one line script. If narration is omitted, the explanation is spoken as-is. */
export const L = (lineTitle: string, explanation: string, narration?: string): LineScript => ({
  lineTitle,
  explanation,
  narration: narration ?? explanation.replace(/\s*\n+\s*/g, ' '),
});
