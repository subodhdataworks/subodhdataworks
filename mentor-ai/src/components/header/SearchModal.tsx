import React, { useState } from 'react';
import { Search, Sparkles, BookOpen, Terminal, Database } from 'lucide-react';
import { Modal } from '../common/Modal';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTopic: (topic: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectTopic
}) => {
  const [query, setQuery] = useState('');

  const suggestions = [
    { title: 'Pandas DataFrames Filtering', category: 'Python', icon: <Terminal className="w-4 h-4 text-sky-500" /> },
    { title: 'SQL Joins & Group By Clauses', category: 'SQL', icon: <Database className="w-4 h-4 text-teal-500" /> },
    { title: 'XLOOKUP & Nested Logic', category: 'Excel', icon: <BookOpen className="w-4 h-4 text-purple-500" /> },
    { title: 'DAX Measures & Context Transition', category: 'Power BI', icon: <Sparkles className="w-4 h-4 text-amber-500" /> },
  ];

  const filtered = suggestions.filter(s =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Search Curriculum & Doubts">
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search lessons, SQL queries, Python..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
            autoFocus
          />
        </div>

        {/* Suggested Topics */}
        <div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
            Recommended Topics
          </span>
          <div className="space-y-1.5">
            {filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSelectTopic(item.title);
                  onClose();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 leading-tight">
                      {item.title}
                    </p>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-indigo-600 font-medium">Explore ›</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};
