import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { getPowerBiVisualNote } from './powerBiVisualNotesData';
import { StructuredVisualNotesSheet } from './StructuredVisualNotesRenderer';
import { VisualNotesTopBar } from './VisualNotesTopBar';
import type { SectionRectInfo } from './PdfVisualNotesViewer';
import './SqlVisualLessonViewer.css';

export interface PowerBiVisualLessonViewerProps {
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

export const PowerBiVisualLessonViewer: React.FC<PowerBiVisualLessonViewerProps> = ({
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

  const spec = getPowerBiVisualNote(topicId);
  if (!spec) {
    return (
      <div className="p-6 text-center text-slate-500 text-sm">
        Visual Learning Notes are being prepared for this Power BI topic.
      </div>
    );
  }

  return (
    <div className="sql-vn-root w-full space-y-4 pb-6 font-sans">
      <VisualNotesTopBar pageCount={spec.pageCount} lang={lang} onLangChange={setLang} />

      {/* Visual Notes Content */}
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

      {/* Sample Data Notice */}
      <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-[11.5px] text-slate-500 font-medium">
        <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span>{spec.sampleDataNotice}</span>
      </div>
    </div>
  );
};
