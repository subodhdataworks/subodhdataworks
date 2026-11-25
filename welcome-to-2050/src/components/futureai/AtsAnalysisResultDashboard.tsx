import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowLeft,
  Download,
  RefreshCw,
  FileText,
  Eye,
  Upload,
  Briefcase,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  ChevronDown,
  ChevronRight,
  Target,
  Layers,
  Code2,
  BookOpen,
  ShieldCheck,
  X,
  SlidersHorizontal,
  Info,
  Check,
  FileCheck2,
} from 'lucide-react';
import { AtsAnalysisResult } from '../../services/atsScoringEngine';
import { RoleSkillProfile } from '../../services/atsJobRoles';

export interface AtsAnalysisResultDashboardProps {
  analysisResult: AtsAnalysisResult;
  uploadedFile: File | null;
  extractedText: string;
  activeRoleData: RoleSkillProfile;
  onScanAnother: () => void;
  onDownloadReport: () => void;
  onOpenFixedResume?: () => void;
}

const formatFileSize = (bytes: number): string => {
  if (!bytes || bytes <= 0) return '—';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

const getFileExtensionLabel = (file: File | null): string => {
  if (!file?.name) return 'TEXT';
  const ext = file.name.split('.').pop()?.toUpperCase();
  return ext && ext.length <= 5 ? ext : 'FILE';
};

export const AtsAnalysisResultDashboard: React.FC<AtsAnalysisResultDashboardProps> = ({
  analysisResult,
  uploadedFile,
  extractedText,
  activeRoleData,
  onScanAnother,
  onDownloadReport,
  onOpenFixedResume,
}) => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [expandedCategoryKey, setExpandedCategoryKey] = useState<string | null>(null);
  const [expandedTipIdx, setExpandedTipIdx] = useState<number | null>(0);
  const [showAllMissing, setShowAllMissing] = useState(false);
  const [showAllMatched, setShowAllMatched] = useState(false);
  const [animatedScore, setAnimatedScore] = useState<number>(0);
  const [fileObjectUrl, setFileObjectUrl] = useState<string | null>(null);

  const isPdfFile = Boolean(
    uploadedFile &&
      (uploadedFile.type === 'application/pdf' ||
        uploadedFile.name.toLowerCase().endsWith('.pdf'))
  );

  // Create and cleanly revoke object URL for the actual uploaded PDF preview
  useEffect(() => {
    if (uploadedFile && isPdfFile) {
      const url = URL.createObjectURL(uploadedFile);
      setFileObjectUrl(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    }
    setFileObjectUrl(null);
  }, [uploadedFile, isPdfFile]);

  // Smooth score gauge animation (respects prefers-reduced-motion)
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setAnimatedScore(analysisResult.overallScore);
      return;
    }

    const timer = requestAnimationFrame(() => {
      setAnimatedScore(analysisResult.overallScore);
    });
    return () => cancelAnimationFrame(timer);
  }, [analysisResult.overallScore]);

  // Reset expand states when a new analysis result arrives
  useEffect(() => {
    setShowAllMissing(false);
    setShowAllMatched(false);
  }, [analysisResult.metadata.isoTimestamp, analysisResult.roleId]);

  // Deduplicated matched & missing lists (preserving exact counts from atsScoringEngine)
  const matchedKeywordsList = useMemo(() => {
    const seen = new Set<string>();
    const out: string[] = [];
    [...(analysisResult.skillsFound || []), ...(analysisResult.matchedKeywords || [])].forEach(
      (k) => {
        const clean = k?.trim();
        const key = clean?.toLowerCase();
        if (clean && key && !seen.has(key)) {
          seen.add(key);
          out.push(clean);
        }
      }
    );
    return out;
  }, [analysisResult.skillsFound, analysisResult.matchedKeywords]);

  // Prioritized & categorized missing items: Required Skills > Recommended Skills > Role/JD Keywords
  const prioritizedMissing = useMemo(() => {
    const matchedLower = new Set(matchedKeywordsList.map((m) => m.toLowerCase()));
    const seen = new Set<string>();

    const filterUnique = (items: string[]) => {
      const res: string[] = [];
      for (const raw of items || []) {
        const clean = raw?.trim();
        const key = clean?.toLowerCase();
        if (clean && key && !matchedLower.has(key) && !seen.has(key)) {
          seen.add(key);
          res.push(clean);
        }
      }
      return res;
    };

    const required = filterUnique(analysisResult.requiredSkillsMissing || []);
    const recommended = filterUnique(
      analysisResult.recommendedSkillsMissing ||
        (analysisResult.missingSkills || []).filter((s) => !required.includes(s))
    );
    const keywords = filterUnique(analysisResult.missingKeywords || []);

    const all = [
      ...required.map((label) => ({ label, tier: 'required' as const })),
      ...recommended.map((label) => ({ label, tier: 'recommended' as const })),
      ...keywords.map((label) => ({ label, tier: 'keyword' as const })),
    ];

    return { required, recommended, keywords, all };
  }, [
    analysisResult.requiredSkillsMissing,
    analysisResult.recommendedSkillsMissing,
    analysisResult.missingSkills,
    analysisResult.missingKeywords,
    matchedKeywordsList,
  ]);

  const missingKeywordsList = prioritizedMissing.all;
  const INITIAL_MISSING_LIMIT = 8;
  const INITIAL_MATCHED_LIMIT = 14;
  const visibleMissingItems = showAllMissing
    ? missingKeywordsList
    : missingKeywordsList.slice(0, INITIAL_MISSING_LIMIT);
  const visibleMatchedItems = showAllMatched
    ? matchedKeywordsList
    : matchedKeywordsList.slice(0, INITIAL_MATCHED_LIMIT);

  // Score color semantics (Green >= 75, Amber 55-74, Red < 55)
  const score = analysisResult.overallScore;
  const scoreTheme =
    score >= 75
      ? {
          stroke: '#16A34A',
          badgeBg: 'bg-emerald-50 border-emerald-200 text-emerald-700',
          text: 'text-emerald-700',
          bar: 'bg-emerald-600',
        }
      : score >= 55
      ? {
          stroke: '#D97706',
          badgeBg: 'bg-amber-50 border-amber-200 text-amber-700',
          text: 'text-amber-700',
          bar: 'bg-amber-500',
        }
      : {
          stroke: '#E11D48',
          badgeBg: 'bg-rose-50 border-rose-200 text-rose-700',
          text: 'text-rose-700',
          bar: 'bg-rose-500',
        };

  // Semicircle SVG gauge geometry (matches clean SaaS gauge aesthetic)
  const gaugeRadius = 64;
  const semiCircumference = Math.PI * gaugeRadius;
  const clampedScore = Math.max(0, Math.min(100, animatedScore));
  const gaugeOffset = semiCircumference - (clampedScore / 100) * semiCircumference;

  // Actual categories supported by atsScoringEngine.ts with exact transparent formulas
  const breakdownCategories = useMemo(() => {
    const cats = analysisResult.categories;
    const reqFound = analysisResult.requiredSkillsFound?.length ?? 0;
    const reqTotal = reqFound + (analysisResult.requiredSkillsMissing?.length ?? 0);
    const recFound = analysisResult.recommendedSkillsFound?.length ?? 0;
    const recTotal = recFound + (analysisResult.recommendedSkillsMissing?.length ?? 0);
    const kwMatched = analysisResult.matchedKeywords.length;
    const kwTotal = kwMatched + analysisResult.missingKeywords.length;
    const passedSections = analysisResult.sections.filter((s) => s.status === 'passed').length;

    return [
      {
        key: 'skillsMatch',
        name: cats.skillsMatch.name || 'Role-Specific Skills',
        score: cats.skillsMatch.score,
        weight: cats.skillsMatch.weightPercent,
        status: cats.skillsMatch.status,
        icon: <Code2 className="w-4 h-4 text-[#6D28D9]" />,
        detail: `${reqFound}/${reqTotal} required skills (70% weight) and ${recFound}/${recTotal} recommended skills (30% weight) matched for ${analysisResult.roleName}.`,
      },
      {
        key: 'keywordCoverage',
        name: cats.keywordCoverage.name || 'Job Keyword Coverage',
        score: cats.keywordCoverage.score,
        weight: cats.keywordCoverage.weightPercent,
        status: cats.keywordCoverage.status,
        icon: <Target className="w-4 h-4 text-[#6D28D9]" />,
        detail: `${kwMatched} of ${kwTotal} evaluated ${
          analysisResult.metadata.hasJobDescription
            ? 'role + custom job description'
            : `${analysisResult.roleName} role`
        } keywords matched (${cats.keywordCoverage.score}%).`,
      },
      {
        key: 'resumeStructure',
        name: cats.resumeStructure.name || 'Structure & Sections',
        score: cats.resumeStructure.score,
        weight: cats.resumeStructure.weightPercent,
        status: cats.resumeStructure.status,
        icon: <Layers className="w-4 h-4 text-[#6D28D9]" />,
        detail: `${passedSections} of ${analysisResult.sections.length} resume section checks passed based on heading and content evidence.`,
      },
      {
        key: 'readabilityAndImpact',
        name: cats.readabilityAndImpact.name || 'Impact & Readability',
        score: cats.readabilityAndImpact.score,
        weight: cats.readabilityAndImpact.weightPercent,
        status: cats.readabilityAndImpact.status,
        icon: <BookOpen className="w-4 h-4 text-[#6D28D9]" />,
        detail: `Parsed ${analysisResult.metadata.wordCount} words. Evaluates length, quantifiable metrics, action verbs, and scannable bullet formatting.`,
      },
    ];
  }, [analysisResult]);

  // Genuine File Format & Text Parsing status
  const fileParsingCheck = useMemo(() => {
    const wc = analysisResult.metadata.wordCount;
    if (!uploadedFile && !extractedText.trim()) {
      return {
        status: 'not_evaluated' as const,
        label: 'Not Evaluated',
        feedback: 'No uploaded document was available to verify file parsing.',
      };
    }
    const ext = uploadedFile ? getFileExtensionLabel(uploadedFile) : 'TEXT';
    if (wc >= 150 && wc <= 1500) {
      return {
        status: 'passed' as const,
        label: 'Passed',
        feedback: `Cleanly parsed ${wc} words from ${ext} document within ATS-recommended length.`,
      };
    }
    if (wc < 150) {
      return {
        status: 'needs_improvement' as const,
        label: 'Needs Improvement',
        feedback: `Only ${wc} words were extracted from ${ext}. The file may be too brief or partially image-based.`,
      };
    }
    return {
      status: 'needs_improvement' as const,
      label: 'Needs Improvement',
      feedback: `Parsed ${wc} words from ${ext}. Consider keeping your resume concise (1–2 pages) for ATS readability.`,
    };
  }, [analysisResult.metadata.wordCount, uploadedFile, extractedText]);

  const totalFormattingChecks = analysisResult.sections.length + 1;
  const passedFormattingChecks =
    analysisResult.sections.filter((s) => s.status === 'passed').length +
    (fileParsingCheck.status === 'passed' ? 1 : 0);

  // Sorted recommendations (High -> Medium -> Low)
  const sortedRecommendations = useMemo(() => {
    const order = { high: 0, medium: 1, low: 2 };
    return [...(analysisResult.detailedImprovementTips || [])].sort(
      (a, b) => order[a.priority] - order[b.priority]
    );
  }, [analysisResult.detailedImprovementTips]);

  // Actual preview lines from uploaded resume text (for non-PDF or text fallback)
  const previewLines = useMemo(() => {
    if (!extractedText) return [];
    return extractedText
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean)
      .slice(0, 18);
  }, [extractedText]);

  const totalKeywordsEvaluated = matchedKeywordsList.length + missingKeywordsList.length;

  return (
    <div className="w-full max-w-[1380px] mx-auto px-3 sm:px-6 py-3 space-y-3.5 bg-[#F8FAFF] text-[#111827] font-sans">
      {/* ── 1. BREADCRUMB ── */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-[#64748B]">
        <button
          type="button"
          onClick={onScanAnother}
          className="inline-flex items-center gap-1.5 text-[#111827] hover:text-[#6D28D9] font-semibold transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>ATS Resume Score</span>
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-[#6D28D9] font-semibold">Analysis Result</span>
      </nav>

      {/* ── 2. COMPACT RESULT PAGE HEADER ── */}
      <div className="bg-white rounded-2xl border border-[#E9E5F5] shadow-[0_2px_10px_rgba(109,40,217,0.04)] px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] border border-[#E9E5F5] text-[#6D28D9] flex items-center justify-center shrink-0">
            <FileCheck2 className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-[#111827] tracking-tight leading-tight m-0">
              ATS Resume Score
            </h1>
            <p className="text-xs sm:text-[13px] text-[#64748B] font-normal mt-0.5 m-0">
              See how well your resume matches your target job role and what you can improve.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            type="button"
            onClick={onScanAnother}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-[#111827] text-xs font-semibold border border-[#E9E5F5] shadow-2xs transition cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5 text-[#6D28D9]" />
            <span>Scan Another Resume</span>
          </button>

          <button
            type="button"
            onClick={onDownloadReport}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-semibold shadow-xs transition cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Report</span>
          </button>
        </div>
      </div>

      {/* ── 3. MAIN 3-COLUMN DASHBOARD LAYOUT ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* ══ LEFT SIDEBAR (~25% / col-span-3): ACTUAL RESUME PREVIEW & TARGET ROLE ══ */}
        <aside className="lg:col-span-3 flex flex-col gap-4 order-2 lg:order-1">
          {/* Card: Your Resume */}
          <div className="bg-white rounded-2xl border border-[#E9E5F5] shadow-[0_2px_10px_rgba(15,23,42,0.03)] p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#6D28D9]" />
                <h2 className="text-sm font-bold text-[#111827] m-0">Your Resume</h2>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-[#F5F3FF] border border-[#E9E5F5] text-[10.5px] font-semibold text-[#6D28D9]">
                {getFileExtensionLabel(uploadedFile)}
              </span>
            </div>

            {/* Real Document Preview Surface (No fake resume or stock photo) */}
            <div
              onClick={() => setResumeModalOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setResumeModalOpen(true);
              }}
              className="relative w-full h-[210px] rounded-xl border border-[#E9E5F5] bg-[#FAF9FF] overflow-hidden cursor-pointer group"
              title="Click to inspect full uploaded resume"
            >
              {fileObjectUrl && isPdfFile ? (
                <iframe
                  src={`${fileObjectUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  title={uploadedFile?.name || 'Uploaded Resume Preview'}
                  className="w-full h-full pointer-events-none border-0 bg-white"
                />
              ) : previewLines.length > 0 ? (
                <div className="p-3 h-full overflow-hidden bg-white text-[9.5px] leading-relaxed text-slate-600 font-mono space-y-1 select-none">
                  {previewLines.map((line, i) => (
                    <div
                      key={i}
                      className={`truncate ${
                        i === 0 ? 'font-bold text-slate-900 text-[10.5px]' : ''
                      }`}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center p-4 text-center text-[#64748B]">
                  <FileText className="w-8 h-8 text-purple-300 mb-2" />
                  <span className="text-xs font-medium">Uploaded Resume Ready</span>
                </div>
              )}

              {/* Subtle Hover Overlay */}
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors flex items-end justify-center p-2.5">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 rounded-full bg-white/95 text-[#111827] text-[11px] font-semibold shadow-sm border border-[#E9E5F5] flex items-center gap-1">
                  <Eye className="w-3 h-3 text-[#6D28D9]" />
                  <span>Open Full Preview</span>
                </span>
              </div>
            </div>

            {/* Actual File Metadata */}
            <div className="p-2.5 rounded-xl bg-[#F8FAFF] border border-[#E9E5F5] space-y-1">
              <div
                className="text-xs font-semibold text-[#111827] truncate"
                title={uploadedFile?.name || 'Pasted Resume Text'}
              >
                {uploadedFile?.name || 'Pasted Resume Content'}
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#64748B] flex-wrap">
                <span>{getFileExtensionLabel(uploadedFile)}</span>
                {uploadedFile?.size ? (
                  <>
                    <span>•</span>
                    <span className="tabular-nums">{formatFileSize(uploadedFile.size)}</span>
                  </>
                ) : null}
                <span>•</span>
                <span className="tabular-nums">{analysisResult.metadata.wordCount} words</span>
              </div>
            </div>

            {/* Resume Preview Actions */}
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setResumeModalOpen(true)}
                className="w-full py-2 px-3 rounded-xl bg-[#F5F3FF] hover:bg-purple-100/80 text-[#6D28D9] border border-[#E9E5F5] text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Resume</span>
              </button>

              <button
                type="button"
                onClick={onScanAnother}
                className="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-50 text-[#111827] border border-[#E9E5F5] text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5 text-[#64748B]" />
                <span>Replace Resume</span>
              </button>
            </div>
          </div>

          {/* Card: Target Job Role */}
          <div className="bg-white rounded-2xl border border-[#E9E5F5] shadow-[0_2px_10px_rgba(15,23,42,0.03)] p-4 space-y-2.5">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#6D28D9]" />
              <h2 className="text-sm font-bold text-[#111827] m-0">Target Job Role</h2>
            </div>

            <div className="p-3 rounded-xl bg-[#F8FAFF] border border-[#E9E5F5] space-y-2">
              <div className="text-sm font-bold text-[#111827]">
                {analysisResult.roleName || activeRoleData.name}
              </div>

              {activeRoleData.category && (
                <div className="text-[11px] font-medium text-[#64748B]">
                  Track: {activeRoleData.category}
                </div>
              )}

              <div className="pt-1">
                {analysisResult.metadata.hasJobDescription ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-[11px] font-semibold">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Custom Job Description Matched</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F5F3FF] border border-[#E9E5F5] text-[#6D28D9] text-[11px] font-semibold">
                    <Info className="w-3 h-3" />
                    <span>Role-Based Benchmark Analysis</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </aside>

        {/* ══ CENTER COLUMN (~42% / col-span-5): ATS SCORE & SCORE BREAKDOWN ══ */}
        <section className="lg:col-span-5 flex flex-col gap-4 order-1 lg:order-2">
          {/* Card 1: Prominent ATS Score Gauge */}
          <div className="bg-white rounded-2xl border border-[#E9E5F5] shadow-[0_2px_12px_rgba(109,40,217,0.05)] p-5 space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              {/* Animated Semicircular Score Gauge */}
              <div className="relative w-[168px] h-[108px] shrink-0 flex flex-col items-center justify-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 160 95">
                  <path
                    d="M 16 84 A 64 64 0 0 1 144 84"
                    fill="none"
                    stroke="#ECE9F7"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 16 84 A 64 64 0 0 1 144 84"
                    fill="none"
                    stroke={scoreTheme.stroke}
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={semiCircumference}
                    strokeDashoffset={gaugeOffset}
                    className="transition-all duration-700 ease-out"
                  />
                </svg>
                <div className="absolute bottom-1 flex flex-col items-center text-center">
                  <span className="text-[32px] font-extrabold text-[#111827] leading-none tabular-nums">
                    {score}
                    <span className="text-base font-semibold text-[#64748B]">/100</span>
                  </span>
                  <span className="text-[11px] font-semibold text-[#64748B] mt-1">
                    ATS Score
                  </span>
                </div>
              </div>

              {/* Match Quality Summary */}
              <div className="flex-1 text-center sm:text-left space-y-2">
                <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold ${scoreTheme.badgeBg}`}
                  >
                    {score >= 75 ? (
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    ) : score >= 55 ? (
                      <AlertTriangle className="w-3.5 h-3.5" />
                    ) : (
                      <AlertCircle className="w-3.5 h-3.5" />
                    )}
                    <span>{analysisResult.scoreLabel}</span>
                  </span>
                </div>

                <p className="text-[13px] text-[#475569] leading-relaxed m-0">
                  {analysisResult.summaryText}
                </p>

                <div className="text-[11px] text-[#64748B] pt-0.5">
                  Analyzed for{' '}
                  <span className="font-semibold text-[#111827]">
                    {analysisResult.roleName || activeRoleData.name}
                  </span>
                  {analysisResult.metadata.hasJobDescription ? ' with custom JD' : ''}
                </div>
              </div>
            </div>

            {/* Honest Estimation Disclaimer */}
            <div className="px-3 py-2 rounded-xl bg-[#F8FAFF] border border-[#E9E5F5] flex items-center gap-2 text-[11px] text-[#64748B]">
              <Info className="w-3.5 h-3.5 text-[#6D28D9] shrink-0" />
              <span>
                Estimated resume compatibility score based on detected keywords, skills, structure, and readability — not a guaranteed hiring decision.
              </span>
            </div>
          </div>

          {/* Card 2: ATS Score Breakdown (Only real engine categories) */}
          <div className="bg-white rounded-2xl border border-[#E9E5F5] shadow-[0_2px_10px_rgba(15,23,42,0.03)] p-5 space-y-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#6D28D9]" />
                <h2 className="text-sm font-bold text-[#111827] m-0">ATS Score Breakdown</h2>
              </div>
              <span className="text-[11px] font-medium text-[#64748B]">Click category for details</span>
            </div>

            <div className="space-y-2.5">
              {breakdownCategories.map((cat) => {
                const isExpanded = expandedCategoryKey === cat.key;
                const barColor =
                  cat.score >= 75
                    ? 'bg-emerald-500'
                    : cat.score >= 55
                    ? 'bg-amber-500'
                    : 'bg-rose-500';
                const numColor =
                  cat.score >= 75
                    ? 'text-emerald-700'
                    : cat.score >= 55
                    ? 'text-amber-700'
                    : 'text-rose-700';

                return (
                  <div
                    key={cat.key}
                    className="rounded-xl border border-[#E9E5F5] bg-[#FCFBFF] overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedCategoryKey((prev) => (prev === cat.key ? null : cat.key))
                      }
                      className="w-full px-3.5 py-2.5 flex flex-col gap-2 text-left hover:bg-[#F5F3FF]/60 transition cursor-pointer"
                    >
                      <div className="flex items-center justify-between gap-2 w-full">
                        <div className="flex items-center gap-2 min-w-0">
                          {cat.icon}
                          <span className="text-xs sm:text-[13px] font-semibold text-[#111827] truncate">
                            {cat.name}
                          </span>
                          <span className="text-[10.5px] font-medium text-[#64748B] shrink-0">
                            ({cat.weight}%)
                          </span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className={`text-xs font-bold tabular-nums ${numColor}`}>
                            {cat.score}%
                          </span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 text-[#64748B] transition-transform ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </div>

                      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ease-out ${barColor}`}
                          style={{ width: `${Math.min(100, Math.max(0, cat.score))}%` }}
                        />
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-3.5 pb-3 pt-1 text-xs text-[#64748B] border-t border-[#E9E5F5]/70 bg-white">
                        {cat.detail}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ RIGHT COLUMN (~33% / col-span-4): SKILL & KEYWORD MATCHING ══ */}
        <section className="lg:col-span-4 flex flex-col gap-3.5 order-3">
          {/* Card 1: Matched Keywords */}
          <div className="bg-white rounded-2xl border border-[#E9E5F5] shadow-[0_2px_10px_rgba(15,23,42,0.03)] p-4 sm:p-5 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <h2 className="text-sm font-bold text-[#111827] m-0 truncate">Matched Keywords</h2>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-[11px] font-semibold tabular-nums shrink-0">
                {totalKeywordsEvaluated > 0
                  ? `${matchedKeywordsList.length}/${totalKeywordsEvaluated} Matched`
                  : `${matchedKeywordsList.length} Found`}
              </span>
            </div>

            {/* Transparent breakdown linking right-column count to center category percentages */}
            <div className="flex items-center gap-2 text-[11px] text-[#64748B] flex-wrap">
              <span>
                Role Skills:{' '}
                <strong className="text-[#111827] tabular-nums">
                  {analysisResult.skillsFound.length}/{analysisResult.skillsFound.length + analysisResult.missingSkills.length}
                </strong>
              </span>
              <span>•</span>
              <span>
                Job Keywords:{' '}
                <strong className="text-[#111827] tabular-nums">
                  {analysisResult.matchedKeywords.length}/{analysisResult.matchedKeywords.length + analysisResult.missingKeywords.length}
                </strong>{' '}
                ({analysisResult.categories.keywordCoverage.score}%)
              </span>
            </div>

            {matchedKeywordsList.length > 0 ? (
              <div className="space-y-2.5">
                <div className="flex flex-wrap gap-1.5">
                  {visibleMatchedItems.map((kw) => (
                    <span
                      key={kw}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50/90 border border-emerald-200/70 text-emerald-800 text-xs font-medium"
                    >
                      <Check className="w-3 h-3 text-emerald-600 stroke-[2.5]" />
                      <span>{kw}</span>
                    </span>
                  ))}
                </div>

                {matchedKeywordsList.length > INITIAL_MATCHED_LIMIT && (
                  <button
                    type="button"
                    onClick={() => setShowAllMatched((prev) => !prev)}
                    className="text-xs font-semibold text-[#6D28D9] hover:text-[#5B21B6] hover:underline transition cursor-pointer"
                  >
                    {showAllMatched
                      ? 'Show Less'
                      : `View All (${matchedKeywordsList.length})`}
                  </button>
                )}
              </div>
            ) : (
              <p className="text-xs text-[#64748B] m-0">
                No role-specific skills or keywords were detected in the parsed text of this resume.
              </p>
            )}
          </div>

          {/* Card 2: Missing / Recommended Keywords (Prioritized + View All / Show Less) */}
          <div className="bg-white rounded-2xl border border-[#E9E5F5] shadow-[0_2px_10px_rgba(15,23,42,0.03)] p-4 sm:p-5 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                <h2 className="text-sm font-bold text-[#111827] m-0 truncate">
                  Missing / Recommended Keywords
                </h2>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-[11px] font-semibold tabular-nums shrink-0">
                {missingKeywordsList.length} Missing
              </span>
            </div>

            {missingKeywordsList.length > 0 ? (
              <>
                {prioritizedMissing.required.length > 0 && (
                  <div className="text-[11px] text-[#64748B] flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1 font-semibold text-amber-900">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      Core Required: {prioritizedMissing.required.length}
                    </span>
                    {prioritizedMissing.recommended.length + prioritizedMissing.keywords.length > 0 && (
                      <>
                        <span>•</span>
                        <span>
                          Recommended / Role Terms:{' '}
                          {prioritizedMissing.recommended.length + prioritizedMissing.keywords.length}
                        </span>
                      </>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {visibleMissingItems.map((item) => (
                    <span
                      key={item.label}
                      title={
                        item.tier === 'required'
                          ? `Core requirement for ${analysisResult.roleName}`
                          : item.tier === 'recommended'
                          ? `Recommended skill for ${analysisResult.roleName}`
                          : `Relevant keyword for ${analysisResult.roleName}`
                      }
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-xs font-medium ${
                        item.tier === 'required'
                          ? 'bg-amber-100/80 border-amber-300/80 text-amber-950 font-semibold'
                          : 'bg-amber-50/90 border-amber-200/70 text-amber-900'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.tier === 'required' && (
                        <span className="text-[9.5px] font-bold uppercase tracking-wide text-amber-700">
                          Core
                        </span>
                      )}
                    </span>
                  ))}
                </div>

                {missingKeywordsList.length > INITIAL_MISSING_LIMIT && (
                  <button
                    type="button"
                    onClick={() => setShowAllMissing((prev) => !prev)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#6D28D9] hover:text-[#5B21B6] hover:underline transition cursor-pointer"
                  >
                    <span>
                      {showAllMissing
                        ? 'Show Less'
                        : `View All (${missingKeywordsList.length})`}
                    </span>
                  </button>
                )}

                <p className="text-[11px] text-[#64748B] leading-relaxed m-0 pt-2 border-t border-slate-100">
                  Prioritized for{' '}
                  <span className="font-semibold text-[#111827]">
                    {analysisResult.roleName || activeRoleData.name}
                  </span>
                  . Add these only if you genuinely have experience with them—never list skills you do not possess.
                </p>
              </>
            ) : (
              <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/70 text-xs text-emerald-800 font-medium">
                All core evaluated skills and keywords for this role were detected in your resume.
              </div>
            )}
          </div>
        </section>
      </div>

      {/* ── 4. RECOMMENDATIONS & ATS FORMATTING CHECKS ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        {/* Wide Left: How to Improve Your ATS Score */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E9E5F5] shadow-[0_2px_10px_rgba(15,23,42,0.03)] p-4 sm:p-5 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div>
              <h2 className="text-base font-bold text-[#111827] m-0">
                How to Improve Your ATS Score
              </h2>
              <p className="text-xs text-[#64748B] mt-0.5 m-0">
                Prioritized actions derived directly from your resume analysis.
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#F5F3FF] border border-[#E9E5F5] text-[#6D28D9] text-[11px] font-semibold tabular-nums">
              {sortedRecommendations.length} Action Items
            </span>
          </div>

          {sortedRecommendations.length > 0 ? (
            <div className="space-y-2.5">
              {sortedRecommendations.map((tip, idx) => {
                const isOpen = expandedTipIdx === idx;
                const priorityStyle =
                  tip.priority === 'high'
                    ? 'bg-rose-50 text-rose-700 border-rose-200/80'
                    : tip.priority === 'medium'
                    ? 'bg-amber-50 text-amber-800 border-amber-200/80'
                    : 'bg-slate-100 text-slate-600 border-slate-200';
                const priorityLabel =
                  tip.priority === 'high'
                    ? 'High Priority'
                    : tip.priority === 'medium'
                    ? 'Medium Priority'
                    : 'Recommended';

                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#E9E5F5] bg-[#FCFBFF] overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedTipIdx((prev) => (prev === idx ? null : idx))}
                      className="w-full px-4 py-3 flex items-center justify-between gap-3 text-left hover:bg-[#F5F3FF]/60 transition cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={`px-2 py-0.5 rounded-md border text-[10.5px] font-semibold shrink-0 ${priorityStyle}`}
                        >
                          {priorityLabel}
                        </span>
                        <span className="text-xs sm:text-[13px] font-semibold text-[#111827] truncate">
                          {tip.title}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#64748B] shrink-0 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-3.5 pt-2 bg-white border-t border-[#E9E5F5]/70 space-y-2 text-xs">
                        <div>
                          <span className="font-semibold text-[#111827]">Why it matters: </span>
                          <span className="text-[#475569] leading-relaxed">{tip.description}</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#F5F3FF]/70 border border-[#E9E5F5] text-[#4C1D95]">
                          <span className="font-semibold">Recommended improvement: </span>
                          <span>{tip.action}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-xs text-[#64748B] m-0">
              No major structural or keyword gaps were detected in this scan.
            </p>
          )}
        </div>

        {/* Right: Genuine Evidence-Based ATS Formatting & Section Checks */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-[#E9E5F5] shadow-[0_2px_10px_rgba(15,23,42,0.03)] p-4 sm:p-5 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#6D28D9]" />
              <h2 className="text-base font-bold text-[#111827] m-0">ATS Formatting Checks</h2>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-[#F5F3FF] border border-[#E9E5F5] text-[11px] font-semibold text-[#6D28D9] tabular-nums">
              {passedFormattingChecks}/{totalFormattingChecks} Passed
            </span>
          </div>

          <div className="space-y-2">
            {/* Actual Section Checks from atsScoringEngine */}
            {analysisResult.sections.map((sec, idx) => {
              const status = sec.status || (sec.found && sec.score >= 80 ? 'passed' : 'needs_improvement');
              const badgeClass =
                status === 'passed'
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200/80'
                  : status === 'not_evaluated'
                  ? 'bg-slate-100 text-slate-600 border-slate-200'
                  : 'bg-amber-50 text-amber-800 border-amber-200/80';
              const badgeLabel =
                status === 'passed'
                  ? 'Passed'
                  : status === 'not_evaluated'
                  ? 'Not Evaluated'
                  : 'Needs Improvement';

              return (
                <div
                  key={idx}
                  className="p-2.5 sm:p-3 rounded-xl border border-[#E9E5F5] bg-[#FCFBFF] flex items-start justify-between gap-3"
                >
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-[#111827]">{sec.name}</div>
                    <div className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                      {sec.feedback}
                    </div>
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold shrink-0 border ${badgeClass}`}
                  >
                    {badgeLabel}
                  </span>
                </div>
              );
            })}

            {/* Genuine File Format & Text Parsing Check */}
            <div className="p-2.5 sm:p-3 rounded-xl border border-[#E9E5F5] bg-[#FCFBFF] flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-xs font-semibold text-[#111827]">
                  File Format &amp; Text Parsing
                </div>
                <div className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                  {fileParsingCheck.feedback}
                </div>
              </div>
              <span
                className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold shrink-0 border ${
                  fileParsingCheck.status === 'passed'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200/80'
                    : fileParsingCheck.status === 'not_evaluated'
                    ? 'bg-slate-100 text-slate-600 border-slate-200'
                    : 'bg-amber-50 text-amber-800 border-amber-200/80'
                }`}
              >
                {fileParsingCheck.label}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 5. BOTTOM ACTION BAR ── */}
      <div className="bg-white rounded-2xl border border-[#E9E5F5] shadow-[0_2px_10px_rgba(15,23,42,0.03)] p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 flex-wrap w-full sm:w-auto">
          <button
            type="button"
            onClick={onDownloadReport}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs sm:text-[13px] font-semibold shadow-xs transition cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Detailed Report</span>
          </button>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={() => setResumeModalOpen(true)}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#111827] border border-[#E9E5F5] text-xs sm:text-[13px] font-semibold transition cursor-pointer"
          >
            <Eye className="w-4 h-4 text-[#64748B]" />
            <span>View Resume</span>
          </button>

          <button
            type="button"
            onClick={onScanAnother}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-[#111827] border border-[#E9E5F5] text-xs sm:text-[13px] font-semibold transition cursor-pointer"
          >
            <RefreshCw className="w-4 h-4 text-[#6D28D9]" />
            <span>Scan Another Resume</span>
          </button>
        </div>
      </div>

      {/* ── 6. RESUME PREVIEW MODAL (Actual Uploaded File / Parsed Text) ── */}
      {resumeModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setResumeModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl border border-[#E9E5F5] shadow-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-3.5 border-b border-[#E9E5F5] flex items-center justify-between gap-3 bg-[#FAF9FF]">
              <div className="flex items-center gap-2.5 min-w-0">
                <FileText className="w-4 h-4 text-[#6D28D9] shrink-0" />
                <span className="text-sm font-bold text-[#111827] truncate">
                  {uploadedFile?.name || 'Uploaded Resume Preview'}
                </span>
                {uploadedFile?.size ? (
                  <span className="text-xs text-[#64748B] shrink-0">
                    ({formatFileSize(uploadedFile.size)})
                  </span>
                ) : null}
              </div>

              <button
                type="button"
                onClick={() => setResumeModalOpen(false)}
                className="p-1.5 rounded-lg text-[#64748B] hover:text-[#111827] hover:bg-slate-100 transition cursor-pointer"
                aria-label="Close resume preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-auto bg-[#F8FAFF] p-4">
              {fileObjectUrl && isPdfFile ? (
                <iframe
                  src={fileObjectUrl}
                  title={uploadedFile?.name || 'Resume PDF'}
                  className="w-full h-full rounded-xl border border-[#E9E5F5] bg-white"
                />
              ) : (
                <pre className="bg-white rounded-xl border border-[#E9E5F5] p-5 text-xs sm:text-[13px] text-slate-700 leading-relaxed whitespace-pre-wrap font-mono m-0">
                  {extractedText || 'No parsed text available for preview.'}
                </pre>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
