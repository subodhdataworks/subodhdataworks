import React from 'react';

export interface VisualNotesTopBarProps {
  pageCount: number;
  lang: 'en' | 'hi';
  onLangChange: (lang: 'en' | 'hi') => void;
  leftExtra?: React.ReactNode;
}

/**
 * Removed per user request — Visual Notes (X Pages) | EN | Hinglish top bar is hidden everywhere.
 */
export const VisualNotesTopBar: React.FC<VisualNotesTopBarProps> = () => {
  return null;
};
