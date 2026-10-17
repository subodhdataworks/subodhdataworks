import React from 'react';
import { X, CheckCircle2, Download, BookOpen, Layers, Bot, Database, BarChart3, Code2 } from 'lucide-react';

interface CurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnroll: () => void;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({ isOpen, onClose, onEnroll }) => {
  if (!isOpen) return null;

  const modules = [
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider">
              FLAGSHIP 9-MODULE SYLLABUS
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
              Data Analyst with GenAI Curriculum
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Zero coding background required · Fully hands-on · Production portfolio
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Curriculum Modules */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3.5 pr-2">
          {modules.map((m) => (
            <div
              key={m.num}
              className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/60 hover:bg-white hover:border-sky-300 transition-all"
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
          ))}
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
          <div className="text-xs text-slate-500">
            Backed by <strong className="text-slate-800">Power Green Industries</strong>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                alert('Curriculum Brochure PDF generated and download triggered!');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Syllabus PDF</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onEnroll();
              }}
              className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-teal-400 to-sky-600 hover:from-teal-500 hover:to-sky-700 shadow-md shadow-sky-500/20 active:scale-95"
            >
              Enroll in Program
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
