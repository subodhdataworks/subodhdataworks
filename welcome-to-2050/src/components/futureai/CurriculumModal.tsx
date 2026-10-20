import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Download, 
  Code2,
  Search,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Unlock
} from 'lucide-react';
import { REACT_FRONTEND_AI_CURRICULUM } from '../../data/reactFrontEndCurriculum';

interface CurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnroll: () => void;
  initialTab?: string;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({ 
  isOpen, 
  onClose, 
  onEnroll,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

  if (!isOpen) return null;

  // Filter 36 React Chapters based on search
  const filteredReactChapters = REACT_FRONTEND_AI_CURRICULUM.filter(ch => 
    ch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ch.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleDownloadPdf = () => {
    alert('React Front-End Development with AI (36 Chapters) Syllabus Brochure PDF download started!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl p-5 sm:p-7 shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-black text-blue-700 uppercase tracking-wide mb-1">
              <Sparkles className="w-3 h-3 text-blue-600" />
              <span>OFFICIAL REACT FRONT-END CURRICULUM</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              React Front-End Development with AI
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              36 Chapters • Web Fundamentals, HTML, CSS, JavaScript, React 19, Tailwind, UI/UX, AI-Assisted Dev &amp; Deployment
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar & Chapter Count */}
        <div className="py-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 font-bold text-xs border border-blue-200/80">
              <Code2 className="w-3.5 h-3.5" />
              <span>36 Full Chapters ({filteredReactChapters.length} visible)</span>
            </span>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chapters or topics (e.g. Hooks, Vite, CSS)..."
              className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 bg-slate-50/50"
            />
          </div>
        </div>

        {/* Scrollable Curriculum Chapters */}
        <div className="flex-1 overflow-y-auto py-4 space-y-2.5 pr-1.5">
          {filteredReactChapters.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-xs">
              No chapters found matching "{searchQuery}"
            </div>
          ) : (
            filteredReactChapters.map((ch) => {
              const isExpanded = expandedChapter === ch.num || searchQuery.length > 0;
              return (
                <div
                  key={ch.num}
                  className="rounded-2xl border border-slate-200/90 bg-white hover:border-blue-300 transition-all overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedChapter(expandedChapter === ch.num ? null : ch.num)}
                    className="w-full p-3.5 flex items-center justify-between gap-3 text-left hover:bg-slate-50/60 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-mono text-xs font-black flex items-center justify-center shrink-0 shadow-2xs">
                        {ch.num}
                      </span>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                          Chapter {ch.num}: {ch.title}
                        </h4>
                        <span className="text-[10px] text-slate-500 font-medium">
                          {ch.topics.length} Key Subtopics
                        </span>
                      </div>
                    </div>

                    <div className="p-1 rounded-lg text-slate-400 hover:text-slate-700 shrink-0">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-3.5 pt-1 border-t border-slate-100 bg-slate-50/40">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {ch.topics.map((t, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span className="leading-tight">{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
          <div className="text-xs text-slate-500">
            Backed by <strong className="text-slate-800">FUTURE IT INDUSTRY</strong> • 100% Industry Verified
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleDownloadPdf}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Syllabus PDF</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onEnroll();
              }}
              className="px-5 py-2 rounded-xl text-xs font-black text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/25 active:scale-95 transition-transform cursor-pointer flex items-center gap-1.5"
            >
              <Unlock className="w-3.5 h-3.5" />
              <span>Unlock Now</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
