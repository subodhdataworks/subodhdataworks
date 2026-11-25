import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { getFullStackMernVisualNote } from './fullStackMernVisualNotesData';
import { StructuredVisualNotesSheet } from './StructuredVisualNotesRenderer';
import { VisualNotesTopBar } from './VisualNotesTopBar';
import type { SectionRectInfo } from './PdfVisualNotesViewer';
import './SqlVisualLessonViewer.css';

export interface FullStackMernVisualLessonViewerProps {
  topicId: number;
  language?: 'en' | 'hi';
  onLanguageChange?: (lang: 'en' | 'hi') => void;
  activeSectionId?: string | null;
  speechProgress?: number;
  liveTypedText?: string;
  isMentorSpeaking?: boolean;
  onSectionRectChange?: (rect: SectionRectInfo) => void;
  onScrollSettled?: () => void;
}

export const FullStackMernVisualLessonViewer: React.FC<FullStackMernVisualLessonViewerProps> = ({
  topicId,
  language: externalLang,
  onLanguageChange,
  activeSectionId,
  speechProgress,
  liveTypedText,
  isMentorSpeaking,
  onSectionRectChange,
  onScrollSettled,
}) => {
  const [internalLang, setInternalLang] = useState<'en' | 'hi'>(externalLang || 'en');
  const lang = externalLang ?? internalLang;
  const setLang = (next: 'en' | 'hi') => {
    setInternalLang(next);
    onLanguageChange?.(next);
  };

  const spec = getFullStackMernVisualNote(topicId);
  if (!spec) {
    return (
      <div className="p-6 text-center text-slate-500 text-sm">
        Visual Learning Notes are being prepared for this Full-Stack MERN topic.
      </div>
    );
  }

  return (
    <div className="sql-vn-root w-full space-y-4 pb-6 font-sans">
      <VisualNotesTopBar pageCount={spec.pageCount} lang={lang} onLangChange={setLang} />

      <StructuredVisualNotesSheet
        spec={spec}
        lang={lang}
        activeSectionId={activeSectionId}
        speechProgress={speechProgress}
        liveTypedText={liveTypedText}
        isMentorSpeaking={isMentorSpeaking}
        onSectionRectChange={onSectionRectChange}
        onScrollSettled={onScrollSettled}
      />

      <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
        <Info className="w-3.5 h-3.5 text-purple-500" />
        <span>
          Tap the AI Mentor on the left for live English or Hindi teaching synced to these Handwritten Visual Notes.
        </span>
      </div>
    </div>
  );
};
