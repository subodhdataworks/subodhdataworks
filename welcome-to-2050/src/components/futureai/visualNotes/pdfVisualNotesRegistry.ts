export type VisualNotesTrack =
  | 'foundations'
  | 'python'
  | 'excel'
  | 'sql'
  | 'powerbi'
  | 'genai'
  | 'data-science';

export function resolveVisualNotesPdfUrl(
  track: VisualNotesTrack,
  topicId: number
): string | null {
  if (track === 'data-science') {
    if (topicId >= 1 && topicId <= 111) return `/visual-notes/data-science/${topicId}.pdf`;
    return null;
  }
  if (track === 'foundations') {
    if (topicId >= 1 && topicId <= 10) return `/visual-notes/foundations/${topicId}.pdf`;
    return null;
  }

  if (track === 'python') {
    if (topicId >= 11 && topicId <= 80) return `/visual-notes/python/${topicId}.pdf`;
    return null;
  }

  if (track === 'excel') {
    if (topicId >= 27 && topicId <= 76) return `/visual-notes/excel/${topicId}.pdf`;
    if (topicId >= 81 && topicId <= 130) return `/visual-notes/excel/${topicId - 54}.pdf`;
    return null;
  }

  if (track === 'sql') {
    if (topicId >= 77 && topicId <= 126) return `/visual-notes/sql/${topicId}.pdf`;
    if (topicId >= 173 && topicId <= 222) return `/visual-notes/sql/${topicId - 96}.pdf`;
    return null;
  }

  if (track === 'powerbi') {
    if (topicId >= 207 && topicId <= 252) return `/visual-notes/powerbi/${topicId}.pdf`;
    if (topicId >= 127 && topicId <= 172) return `/visual-notes/powerbi/${topicId + 80}.pdf`;
    return null;
  }

  if (track === 'genai') {
    if (topicId >= 253 && topicId <= 285) return `/visual-notes/genai/${topicId}.pdf`;
    if (topicId >= 173 && topicId <= 205) return `/visual-notes/genai/${topicId + 80}.pdf`;
    return null;
  }

  return null;
}
