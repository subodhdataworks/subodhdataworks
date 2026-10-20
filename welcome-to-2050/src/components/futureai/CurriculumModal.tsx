import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Download, 
  BookOpen, 
  Layers, 
  Bot, 
  Database, 
  BarChart3, 
  Code2,
  Search,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Laptop
} from 'lucide-react';
import { REACT_FRONTEND_AI_CURRICULUM } from '../../data/reactFrontEndCurriculum';

interface CurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnroll: () => void;
  initialTab?: 'data-analyst' | 'react-frontend';
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({ 
  isOpen, 
  onClose, 
  onEnroll,
  initialTab = 'react-frontend'
}) => {
  const [activeTab, setActiveTab] = useState<'data-analyst' | 'react-frontend'>(initialTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

  if (!isOpen) return null;

  const dataAnalystModules = [
    { num: '01', title: 'Python for Data Analysis', topics: ['Variables, Loops, Data Structures', 'NumPy Arrays & Pandas DataFrames', 'Data Cleaning & Transformation', 'Interactive Scripting'] },
    { num: '02', title: 'Relational Databases & SQL', topics: ['SELECT, WHERE, GROUP BY, HAVING', 'Multi-table INNER/LEFT/FULL JOINs', 'Window Functions & Aggregations', 'Database Indexing & Query Plans'] },
    { num: '03', title: 'Advanced Microsoft Excel', topics: ['VLOOKUP, XLOOKUP, INDEX/MATCH', 'Pivot Tables & Dynamic Slicers', 'Financial & Statistical Modeling', 'Power Query Automation'] },
    { num: '04', title: 'Business Intelligence with Power BI', topics: ['Data Modeling & Star Schemas', 'DAX Measures & Calculated Columns', 'Executive C-Suite KPI Dashboards', 'Power BI Service Publishing'] },
    { num: '05', title: 'Applied Statistics & Probability', topics: ['Descriptive & Inferential Statistics', 'Hypothesis Testing (A/B Testing)', 'Confidence Intervals & P-values', 'Regression & Trend Modeling'] },
    { num: '06', title: 'Generative AI & LLM Automation', topics: ['Prompt Engineering for Analytics', 'Automated SQL & Python Generation', 'Synthesizing Unstructured Text & Docs', 'Building Custom AI Analytics Agents'] },
    { num: '07', title: 'Real-World Industry Capstone', topics: ['End-to-End Enterprise Datasets', 'Data Ingestion to Visual Insights', 'GitHub Portfolio Publishing', 'Executive Deck Presentation'] },
    { num: '08', title: 'Verified Internship Experience', topics: ['Agile 2-week Sprint Workflow', 'Weekly Standups & Code Reviews', 'Verified Industry Credentials', 'Mentored Production Deliverables'] },
    { num: '09', title: 'Career & Placement Support', topics: ['1-on-1 AI Mock Interviews', 'Resume & LinkedIn Optimization', 'Direct Partner Job Board Referrals', 'Salary Negotiation Framework'] },
  ];

  // Filter modules based on search
  const filteredReactChapters = REACT_FRONTEND_AI_CURRICULUM.filter(ch => 
    ch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ch.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredDataAnalyst = dataAnalystModules.filter(m =>
    m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleDownloadPdf = () => {
    alert(
      activeTab === 'react-frontend'
        ? 'React Front-End Development with AI (36 Chapters) Syllabus Brochure PDF download started!'
        : 'Data Analyst with GenAI (9 Modules) Syllabus Brochure PDF download started!'
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl p-5 sm:p-7 shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-black text-blue-700 uppercase tracking-wide mb-1">
              <Sparkles className="w-3 h-3 text-blue-600" />
              <span>OFFICIAL INDUSTRY CURRICULUM</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {activeTab === 'react-frontend' 
                ? 'React Front-End Development with AI' 
                : 'Data Analyst with GenAI Flagship'}
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {activeTab === 'react-frontend'
                ? '36 Chapters • Web Fundamentals to React, Tailwind, Next.js, Figma, TypeScript & AI-Assisted Dev'
                : '9 Core Industry Modules • Python, SQL, Excel, Power BI, Statistics & GenAI'}
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

        {/* Tab Switcher & Search Bar */}
        <div className="py-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-slate-100">
          {/* Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 w-full sm:w-auto">
            <button
              onClick={() => {
                setActiveTab('react-frontend');
                setSearchQuery('');
              }}
              className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'react-frontend'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>React Front-End (36 Chapters)</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('data-analyst');
                setSearchQuery('');
              }}
              className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'data-analyst'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>Data Analyst (9 Modules)</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chapters or skills..."
              className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 bg-slate-50/50"
            />
          </div>
        </div>

        {/* Scrollable Curriculum Modules / Chapters */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3 pr-1.5">
          {activeTab === 'react-frontend' ? (
            filteredReactChapters.length === 0 ? (
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
            )
          ) : (
            filteredDataAnalyst.map((m) => (
              <div
                key={m.num}
                className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/60 hover:bg-white hover:border-sky-300 transition-all shadow-2xs"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 font-mono text-xs font-bold flex items-center justify-center">
                    {m.num}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    {m.title}
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-10">
                  {m.topics.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
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
              className="px-5 py-2 rounded-xl text-xs font-black text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/25 active:scale-95 transition-transform cursor-pointer"
            >
              Enroll Now for ₹987
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
