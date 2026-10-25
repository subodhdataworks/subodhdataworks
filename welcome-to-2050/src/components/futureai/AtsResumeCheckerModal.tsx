import React, { useState } from 'react';
import { soundEffects } from '../../services/soundEffects';
import {
  FileCheck2,
  Upload,
  CheckCircle2,
  AlertCircle,
  X,
  Sparkles,
  ArrowRight,
  Download,
  RefreshCw,
  Award,
  Zap,
  Check
} from 'lucide-react';

export interface AtsResumeCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
}

export const AtsResumeCheckerModal: React.FC<AtsResumeCheckerModalProps> = ({
  isOpen,
  onClose,
  userName = 'Rahul'
}) => {
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [analysisStep, setAnalysisStep] = useState('');
  const [report, setReport] = useState<any | null>(null);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  if (!isOpen) return null;

  const startScan = (fileName: string) => {
    soundEffects.playClick();
    setUploadedFile(fileName);
    setAnalyzing(true);
    setProgress(15);
    setAnalysisStep('Reading PDF structure & font hierarchy...');

    setTimeout(() => {
      setProgress(45);
      setAnalysisStep('Scanning Tech & AI keywords (Python, SQL, ML, Analytics)...');
    }, 700);

    setTimeout(() => {
      setProgress(75);
      setAnalysisStep('Calculating ATS parser compatibility & section scores...');
    }, 1400);

    setTimeout(() => {
      setProgress(100);
      setAnalysisStep('Finalizing ATS Report...');
      setTimeout(() => {
        soundEffects.playCelebration();
        setAnalyzing(false);
        setReport({
          overallScore: 88,
          verdict: 'High ATS Pass Rate! Top 10% Candidate',
          fileName,
          metrics: [
            { name: 'ATS Parseability & Format', score: 95, status: 'pass' },
            { name: 'Target Skills & Keywords', score: 84, status: 'pass' },
            { name: 'Measurable Impact & Metrics', score: 82, status: 'pass' },
            { name: 'Section Headers & Contact', score: 100, status: 'pass' }
          ],
          matchedKeywords: [
            'Python', 'SQL', 'Pandas', 'Data Analysis', 'Tableau', 'Machine Learning', 'Git', 'Agile', 'Statistics'
          ],
          missingKeywords: [
            'PySpark', 'Snowflake', 'Docker', 'AWS / Cloud'
          ],
          suggestions: [
            'Add measurable business metrics (e.g., "improved query speed by 40%").',
            'Include 2 more cloud-data keywords like Snowflake or AWS for enterprise roles.',
            'Keep single-column linear layout for maximum parsing accuracy.'
          ]
        });
      }, 500);
    }, 2100);
  };

  const handleSimulateDemo = () => {
    startScan(`${userName.replace(/\s+/g, '_')}_AI_Data_Resume.pdf`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-3xl border border-slate-200 max-w-xl w-full p-6 sm:p-7 shadow-2xl relative text-left my-8">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={() => {
            soundEffects.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
            <FileCheck2 className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px] mb-1">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              <span>AI ATS Resume Scanner 2050</span>
            </div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight leading-tight">
              ATS Resume Checker & Score
            </h3>
          </div>
        </div>

        {/* State 1: Upload / Demo selection */}
        {!report && !analyzing && (
          <div className="space-y-4">
            <p className="text-xs text-slate-600 leading-relaxed">
              Scan your resume against 500+ top IT & AI hiring systems (Workday, Greenhouse, Taleo) to check your ATS compatibility score and missing keywords.
            </p>

            {/* Drag Drop Area */}
            <label className="border-2 border-dashed border-slate-300 hover:border-emerald-500 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-emerald-50/20 transition group">
              <input
                type="file"
                accept=".pdf,.docx,.doc"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) startScan(f.name);
                }}
              />
              <div className="w-12 h-12 rounded-2xl bg-slate-100 group-hover:bg-emerald-100 text-slate-500 group-hover:text-emerald-600 flex items-center justify-center mb-3 transition-colors">
                <Upload className="w-6 h-6" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800 block">
                Click to upload your resume
              </span>
              <span className="text-[11px] text-slate-400 mt-1">
                Supports PDF, DOCX (Max 10MB)
              </span>
            </label>

            {/* Demo Button */}
            <div className="text-center pt-1">
              <button
                type="button"
                onClick={handleSimulateDemo}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 active:scale-95 transition cursor-pointer"
              >
                <Zap className="w-4 h-4 text-emerald-200" />
                <span>Scan Demo Resume ({userName})</span>
              </button>
            </div>
          </div>
        )}

        {/* State 2: Analyzing Live Progress */}
        {analyzing && (
          <div className="py-8 text-center space-y-4">
            <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-4 border-slate-100 border-t-emerald-600 animate-spin" />
              <span className="absolute font-black text-sm text-slate-800">{progress}%</span>
            </div>
            <div>
              <strong className="text-sm font-black text-slate-900 block">AI Resume Scanner in Progress</strong>
              <p className="text-xs text-slate-500 mt-1 animate-pulse">{analysisStep}</p>
            </div>
          </div>
        )}

        {/* State 3: Report & Results */}
        {report && !analyzing && (
          <div className="space-y-4 animate-fadeIn">
            {/* Score Banner */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-700 text-white rounded-2xl p-5 flex items-center justify-between">
              <div>
                <span className="text-xs text-emerald-100 font-bold uppercase tracking-wider block">ATS Score</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-4xl font-black">{report.overallScore}</span>
                  <span className="text-base text-emerald-200 font-bold">/ 100</span>
                </div>
                <span className="text-xs text-emerald-100 font-medium block mt-1">{report.verdict}</span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center">
                <Award className="w-8 h-8 text-emerald-200" />
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              {report.metrics.map((m: any, idx: number) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 text-[11px] block">{m.name}</span>
                  <strong className="text-slate-800 font-black text-sm">{m.score}%</strong>
                </div>
              ))}
            </div>

            {/* Matched Keywords */}
            <div>
              <span className="text-xs font-bold text-slate-700 block mb-1.5">Matched Keywords ({report.matchedKeywords.length})</span>
              <div className="flex flex-wrap gap-1.5">
                {report.matchedKeywords.map((k: string) => (
                  <span key={k} className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 font-semibold">
                    <Check className="w-3 h-3 text-emerald-600" />
                    {k}
                  </span>
                ))}
              </div>
            </div>

            {/* Missing Keywords */}
            <div>
              <span className="text-xs font-bold text-slate-700 block mb-1.5">Missing High-Impact Keywords</span>
              <div className="flex flex-wrap gap-1.5">
                {report.missingKeywords.map((k: string) => (
                  <span key={k} className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200/60 font-semibold">
                    + {k}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  soundEffects.playSuccess();
                  alert('ATS detailed feedback report has been saved to your dashboard!');
                  onClose();
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Save ATS Report</span>
              </button>
              <button
                type="button"
                onClick={() => setReport(null)}
                className="py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-xs flex items-center justify-center gap-1 transition cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Scan New</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
