import type { VisualNoteBlock, VisualNoteSection } from '../visualNotes/StructuredVisualNotesRenderer';

export type SyncHighlightPhase = 'title' | 'description' | 'full';

export interface SyncHighlightState {
  sectionId: string;
  /** 0..1 normalized progress through the current section's narration */
  progress: number;
  /** Active block index inside the section (-1 for intro) */
  activeBlockIndex: number;
  /** Active sub-item index (flow step, compare card, table row, bullet item, or code line) */
  activeItemIndex: number;
  /** Whether the mentor is currently highlighting the item's title/header or its internal description */
  phase: SyncHighlightPhase;
  /** Active sentence index within a multi-sentence paragraph/intro */
  activeSentenceIndex: number;
  /** Total sentences in the active paragraph/intro */
  totalSentences: number;
  /** Whether audio is actively speaking right now */
  isSpeaking: boolean;
}

export interface SyncTimelineCue {
  startRatio: number;
  endRatio: number;
  blockIndex: number;
  itemIndex: number;
  phase: SyncHighlightPhase;
  sentenceIndex: number;
  totalSentences: number;
}

/**
 * Splits a paragraph cleanly into individual sentences without mutating punctuation.
 */
export function splitIntoSentences(text: string): string[] {
  const trimmed = text.trim();
  if (!trimmed) return [];
  const matches = trimmed.match(/[^.!?]+[.!?]+(?:\s+|$)|[^.!?]+$/g);
  return (matches || [trimmed]).map((s) => s.trim()).filter(Boolean);
}

/**
 * Builds an automatic, zero-hardcoding semantic sync timeline for ANY structured section
 * (works for any number of flow steps, compare cards, tables, code blocks, bullets, or notes).
 */
export function buildSectionSyncCues(
  blocks: VisualNoteBlock[],
  introText?: string
): SyncTimelineCue[] {
  const cues: SyncTimelineCue[] = [];

  // Case 1: Intro card (sentence-by-sentence progression)
  if ((!blocks || blocks.length === 0) && introText) {
    const sentences = splitIntoSentences(introText);
    const total = Math.max(1, sentences.length);
    for (let i = 0; i < total; i++) {
      cues.push({
        startRatio: i / total,
        endRatio: (i + 1) / total,
        blockIndex: -1,
        itemIndex: i,
        phase: 'description',
        sentenceIndex: i,
        totalSentences: total,
      });
    }
    return cues;
  }

  // Case 2: Structured section blocks — generate semantic anchors automatically
  const rawAnchors: Array<{
    blockIndex: number;
    itemIndex: number;
    phase: SyncHighlightPhase;
    weight: number;
    sentenceIndex: number;
    totalSentences: number;
  }> = [];

  blocks.forEach((block, bIdx) => {
    if (block.type === 'flow' || block.type === 'compare') {
      block.items.forEach((_item, iIdx) => {
        // Phase A: Card number + Title highlights FIRST
        rawAnchors.push({
          blockIndex: bIdx,
          itemIndex: iIdx,
          phase: 'title',
          weight: 0.36,
          sentenceIndex: 0,
          totalSentences: 1,
        });
        // Phase B: Internal description highlights SECOND
        rawAnchors.push({
          blockIndex: bIdx,
          itemIndex: iIdx,
          phase: 'description',
          weight: 0.64,
          sentenceIndex: 0,
          totalSentences: 1,
        });
      });
    } else if (block.type === 'table') {
      const rowCount = Math.max(1, block.rows.length);
      for (let rIdx = 0; rIdx < rowCount; rIdx++) {
        rawAnchors.push({
          blockIndex: bIdx,
          itemIndex: rIdx,
          phase: 'full',
          weight: 1,
          sentenceIndex: rIdx,
          totalSentences: rowCount,
        });
      }
      if (block.noteEn || block.noteHi) {
        rawAnchors.push({
          blockIndex: bIdx,
          itemIndex: rowCount, // signals table note
          phase: 'description',
          weight: 1.2,
          sentenceIndex: 0,
          totalSentences: 1,
        });
      }
    } else if (block.type === 'sql') {
      const lines = block.code.split('\n').filter((l) => l.trim().length > 0);
      const lineCount = Math.max(1, lines.length);
      for (let lIdx = 0; lIdx < lineCount; lIdx++) {
        rawAnchors.push({
          blockIndex: bIdx,
          itemIndex: lIdx,
          phase: 'full',
          weight: 0.85,
          sentenceIndex: lIdx,
          totalSentences: lineCount,
        });
      }
      if (block.captionEn || block.captionHi) {
        rawAnchors.push({
          blockIndex: bIdx,
          itemIndex: lineCount, // signals code caption
          phase: 'description',
          weight: 1.3,
          sentenceIndex: 0,
          totalSentences: 1,
        });
      }
    } else if (block.type === 'bullets') {
      block.items.forEach((_item, iIdx) => {
        rawAnchors.push({
          blockIndex: bIdx,
          itemIndex: iIdx,
          phase: 'description',
          weight: 1,
          sentenceIndex: iIdx,
          totalSentences: block.items.length,
        });
      });
    } else if (block.type === 'note') {
      const sentences = splitIntoSentences(block.bodyEn);
      const total = Math.max(1, sentences.length);
      for (let sIdx = 0; sIdx < total; sIdx++) {
        rawAnchors.push({
          blockIndex: bIdx,
          itemIndex: sIdx,
          phase: 'description',
          weight: 1,
          sentenceIndex: sIdx,
          totalSentences: total,
        });
      }
    }
  });

  if (rawAnchors.length === 0) {
    return [
      {
        startRatio: 0,
        endRatio: 1,
        blockIndex: 0,
        itemIndex: 0,
        phase: 'full',
        sentenceIndex: 0,
        totalSentences: 1,
      },
    ];
  }

  const totalWeight = rawAnchors.reduce((sum, a) => sum + a.weight, 0);
  let cursor = 0;
  for (const a of rawAnchors) {
    const startRatio = cursor / totalWeight;
    cursor += a.weight;
    const endRatio = cursor / totalWeight;
    cues.push({
      startRatio,
      endRatio,
      blockIndex: a.blockIndex,
      itemIndex: a.itemIndex,
      phase: a.phase,
      sentenceIndex: a.sentenceIndex,
      totalSentences: a.totalSentences,
    });
  }

  return cues;
}

/**
 * Resolves the exact active visual highlight anchor for any normalized playback ratio (0..1).
 * Guaranteed deterministic: works identically on play, pause, resume, replay, speed change, and seek.
 */
export function resolveActiveSyncCue(
  cues: SyncTimelineCue[],
  progress: number
): SyncTimelineCue | null {
  if (!cues || cues.length === 0 || progress <= 0) return null;
  const clamped = Math.min(0.9999, Math.max(0, progress));
  for (const cue of cues) {
    if (clamped >= cue.startRatio && clamped < cue.endRatio) {
      return cue;
    }
  }
  return cues[cues.length - 1];
}

/**
 * Helper to resolve active cue directly for a VisualNoteSection.
 */
export function resolveSectionCue(
  section: VisualNoteSection,
  progress: number
): SyncTimelineCue | null {
  if (progress <= 0) return null;
  const cues = buildSectionSyncCues(section.blocks);
  return resolveActiveSyncCue(cues, progress);
}
