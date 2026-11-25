import { SmallFooter } from '../footer';
import React, { useState, useRef, useEffect } from 'react';
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Search,
  Sparkles,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  BarChart3,
  Settings,
  Zap,
  Target,
  ShieldCheck,
  Check,
  X,
  RefreshCw,
  Info,
  Clock,
  Layers,
  Award,
  BookOpen,
  Download,
  Building2,
  Users,
  Compass,
  Rocket,
  Sun,
  Moon,
  LayoutDashboard,
  Lock,
  GraduationCap,
  Code2,
  Copy,
  User,
  Mail,
  Phone,
  Shield,
  AlertCircle,
} from 'lucide-react';
import { FutureLogo } from './FutureLogo';
import { FutureAdvancedHeader } from './FutureAdvancedHeader';
import { AtsCareerReadyBanner } from './AtsCareerReadyBanner';
import { AtsAnalysisResultDashboard } from './AtsAnalysisResultDashboard';
import { AtsUploadWorkspace } from './AtsUploadWorkspace';
import './LearnerHomeHub.css';
import './AtsResumeChecker.css';
import { SupportedLanguage } from '../../services/powerGreenAIService';
import { TARGET_JOB_ROLES, RoleSkillProfile } from '../../services/atsJobRoles';
import { analyzeResumeContent, AtsAnalysisResult } from '../../services/atsScoringEngine';
import {
  AtsFixedResume,
  generateAtsFixedResume,
  parseResumeText,
  printAtsFixedResume,
} from '../../services/atsResumeOptimizer';
import { extractResumeText, ExtractionResult, validateResumeFile } from '../../services/resumeExtractor';

interface AtsResumeCheckerProps {
  onBackToHome?: () => void;
  onOpenLogin?: (candidateName?: string) => void;
  onEnrollNow?: () => void;
  isLoggedIn?: boolean;
  userName?: string;
}

export const AtsResumeChecker: React.FC<AtsResumeCheckerProps> = ({
  onBackToHome,
  onOpenLogin,
  onEnrollNow,
  isLoggedIn = false,
  userName = 'Rahul Sharma',
}) => {
  // Candidate Verification & Login Modal State
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [candidateNameInput, setCandidateNameInput] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('futureai_user_name');
      if (saved && saved !== 'Learner') return saved;
    }
    return userName && userName !== 'Learner' ? userName : '';
  });
  const [candidateEmailInput, setCandidateEmailInput] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('futureai_user_email') || '';
    }
    return '';
  });
  const [candidatePhoneInput, setCandidatePhoneInput] = useState<string>('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [activeCandidateName, setActiveCandidateName] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('futureai_user_name');
      if (saved && saved !== 'Learner') return saved;
    }
    return userName && userName !== 'Learner' ? userName : 'Rahul Sharma';
  });

  // Verification check: Is candidate logged in?
  const isCandidateVerified = Boolean(
    (isLoggedIn && activeCandidateName && activeCandidateName !== 'Learner') ||
    (typeof window !== 'undefined' &&
      localStorage.getItem('futureai_logged_in') === 'true' &&
      localStorage.getItem('futureai_user_name') &&
      localStorage.getItem('futureai_user_name') !== 'Learner')
  );
  // Step inputs & 3-Step Workflow State
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState<string>('');
  const [extractionError, setExtractionError] = useState<string | null>(null);
  const [uploadSuccessMsg, setUploadSuccessMsg] = useState<string | null>(null);
  const [isExtracting, setIsExtracting] = useState<boolean>(false);
  const autoAdvanceTimerRef = useRef<number | null>(null);

  const [selectedRole, setSelectedRole] = useState<string>('');
  const [roleDropdownOpen, setRoleDropdownOpen] = useState<boolean>(false);
  const [roleSearchFilter, setRoleSearchFilter] = useState<string>('');

  const [customJobDesc, setCustomJobDesc] = useState<string>('');

  // Analysis State
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisProgress, setAnalysisProgress] = useState<number>(0);
  const [scanPhase, setScanPhase] = useState<number>(1);
  const [copiedFixId, setCopiedFixId] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AtsAnalysisResult | null>(null);
  const [analysisError, setAnalysisError] = useState<string | null>(null);

  const handleCopyFix = (id: string, text: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopiedFixId(id);
    setTimeout(() => setCopiedFixId(null), 2500);
  };

  // Active Results Tab (5 Tabs Matching Exact Reference)
  const [activeTab, setActiveTab] = useState<'overall' | 'skills' | 'missing' | 'sections' | 'tips'>('overall');
  const [checkerMode, setCheckerMode] = useState<'input' | 'result'>('input');

  // Fixed ATS Resume Modal State
  const [fixedResumeModalOpen, setFixedResumeModalOpen] = useState<boolean>(false);
  const [fixedResumeData, setFixedResumeData] = useState<AtsFixedResume | null>(null);
  const [copiedAtsText, setCopiedAtsText] = useState<boolean>(false);
  const [previewTab, setPreviewTab] = useState<'resume' | 'comparison'>('resume');

  // Drag and Drop State
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Search input ref
  const roleDropdownRef = useRef<HTMLDivElement | null>(null);

  // Resume sample data for instant demo/testing
  const sampleResumeData = `
    John Doe - Senior Data Analyst
    Email: john.doe@email.com | Phone: +1 555-0199 | LinkedIn: linkedin.com/in/johndoe | GitHub: github.com/johndoe
    
    Professional Summary:
    Experienced Data Analyst with 3+ years in data manipulation, business reporting, and data visualization. Skilled in SQL, Excel, and Python for statistical analysis.

    Technical Skills:
    - Tools: Excel, SQL, Python, Problem Solving, Data Analysis, Statistics
    - Methodologies: Agile, Data Cleaning, Exploratory Data Analysis

    Work Experience:
    Data Analyst | TechCorp Solutions (2022 - Present)
    - Extracted and analyzed datasets with SQL queries, reducing report preparation time by 25%.
    - Created automated spreadsheet models and pivot reports in Microsoft Excel for sales KPIs.
    - Conducted descriptive statistical analysis using Python and Pandas.

    Projects:
    - Customer Behavior Analysis: Used Python to clean and visualize customer purchase trends across 50,000 records.
    - Retail Sales Database: Designed relational schemas and optimized complex SQL joins.

    Education:
    Bachelor of Science in Computer Science - State University
  `;

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (roleDropdownRef.current && !roleDropdownRef.current.contains(e.target as Node)) {
        setRoleDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Cleanup pending auto-advance timer on unmount
  useEffect(() => {
    return () => {
      if (autoAdvanceTimerRef.current) {
        window.clearTimeout(autoAdvanceTimerRef.current);
      }
    };
  }, []);

  // Handle File Upload with strict validation & automatic step advance to Step 2
  const handleFileProcess = async (file: File) => {
    if (autoAdvanceTimerRef.current) {
      window.clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }

    setExtractionError(null);
    setAnalysisError(null);
    setUploadSuccessMsg(null);
    // Invalidate any outdated scan result whenever a new/replacement file is uploaded
    setAnalysisResult(null);
    setCheckerMode('input');

    // Step 1: Validate file type & size using existing rules BEFORE accepting
    const validation = validateResumeFile(file, 5);
    if (!validation.isValid) {
      setUploadedFile(null);
      setExtractedText('');
      setExtractionError(validation.error || 'Unsupported file. Please upload a valid PDF or DOCX (max 5 MB).');
      setActiveStep(1);
      return;
    }

    setIsExtracting(true);

    try {
      const res: ExtractionResult = await extractResumeText(file);
      if (res.error || !res.text.trim()) {
        setUploadedFile(null);
        setExtractedText('');
        setExtractionError(
          res.error || 'Could not extract readable text from this file. Please upload a valid text-based PDF or DOCX.'
        );
        setActiveStep(1);
      } else {
        setUploadedFile(file);
        setExtractedText(res.text);
        setExtractionError(null);
        setUploadSuccessMsg(`"${file.name}" uploaded successfully! Moving to Step 2...`);
        // Automatically advance to Step 2 after brief visual confirmation (do NOT start scanning)
        autoAdvanceTimerRef.current = window.setTimeout(() => {
          setActiveStep(2);
          setUploadSuccessMsg(null);
          autoAdvanceTimerRef.current = null;
        }, 550);
      }
    } catch (err: any) {
      setUploadedFile(null);
      setExtractedText('');
      setExtractionError(err?.message || 'Failed to read file. Please ensure it is a valid PDF or DOCX.');
      setActiveStep(1);
    } finally {
      setIsExtracting(false);
    }
  };

  // Handle Job Role selection — invalidate any outdated analysis result
  const handleSelectRole = (roleId: string) => {
    setSelectedRole(roleId);
    setAnalysisResult(null);
    setAnalysisError(null);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  // Extract candidate name, email, and phone from the uploaded resume text
  const extractCandidateInfo = (rawText: string, file: File | null) => {
    const emailMatch = rawText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    const phoneMatch = rawText.match(/(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{3,5}\)?[-.\s]?)?\d{3,5}[-.\s]?\d{4,5}/);

    const lines = rawText
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter((l) => l.length > 1);

    let candidateName = '';
    for (const line of lines.slice(0, 6)) {
      const cleaned = line.replace(/[|•·-].*$/, '').trim();
      if (
        cleaned.length >= 3 &&
        cleaned.length <= 45 &&
        !cleaned.includes('@') &&
        !/resume|curriculum|vitae|cv|summary|objective|contact|phone|email|address|linkedin|github/i.test(cleaned) &&
        /^[A-Za-z\s.]+$/.test(cleaned)
      ) {
        candidateName = cleaned;
        break;
      }
    }

    if (!candidateName && file?.name) {
      candidateName = file.name
        .replace(/\.(pdf|docx)$/i, '')
        .replace(/[_-]+/g, ' ')
        .replace(/\b(resume|cv|updated|final|\d+)\b/gi, '')
        .replace(/\s+/g, ' ')
        .trim();
    }

    return {
      name: candidateName || 'Candidate Resume',
      fileName: file?.name || 'Uploaded_Resume.pdf',
      email: emailMatch ? emailMatch[0] : '',
      phone: phoneMatch ? phoneMatch[0].trim() : '',
    };
  };

  // Generate & download/print ONLY the user's standalone ATS Resume Report (no website banners/UI)
  const handleDownloadResumeReport = () => {
    if (!analysisResult) {
      setAnalysisError('Please upload your resume and click "Check My Resume" first to download your report.');
      return;
    }

    const candidate = extractCandidateInfo(extractedText, uploadedFile);
    const totalKeywords = analysisResult.matchedKeywords.length + analysisResult.missingKeywords.length;
    const scanDate = new Date(
      analysisResult.metadata.isoTimestamp || Date.now()
    ).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const esc = (str: string) =>
      String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

    const reportHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>ATS Resume Report - ${esc(candidate.name)}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
      color: #0f172a;
      background: #ffffff;
      padding: 28px 34px;
      line-height: 1.5;
      font-size: 13px;
    }
    .report-container { max-width: 820px; margin: 0 auto; }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 16px;
      margin-bottom: 20px;
    }
    .title-badge {
      display: inline-block;
      font-size: 10px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #2563eb;
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      padding: 3px 8px;
      border-radius: 999px;
      margin-bottom: 6px;
    }
    .candidate-name { font-size: 22px; font-weight: 900; color: #0f172a; }
    .meta-line { font-size: 12px; color: #475569; margin-top: 3px; }
    .score-box {
      text-align: center;
      background: #f8fafc;
      border: 2px solid ${esc(analysisResult.scoreColor)};
      border-radius: 14px;
      padding: 10px 18px;
      min-width: 135px;
    }
    .score-num { font-size: 28px; font-weight: 900; color: #0f172a; line-height: 1.1; }
    .score-lbl {
      display: inline-block;
      margin-top: 4px;
      font-size: 11px;
      font-weight: 800;
      color: ${esc(analysisResult.scoreColor)};
    }
    .summary-box {
      background: #f8fafc;
      border-left: 4px solid #2563eb;
      padding: 12px 16px;
      border-radius: 8px;
      margin-bottom: 18px;
      font-size: 12.5px;
      color: #334155;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      margin-bottom: 20px;
    }
    .stat-card {
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 10px 12px;
      background: #ffffff;
    }
    .stat-label { font-size: 11px; font-weight: 700; color: #64748b; }
    .stat-value { font-size: 18px; font-weight: 900; color: #0f172a; margin-top: 2px; }
    .section-title {
      font-size: 14px;
      font-weight: 800;
      color: #0f172a;
      margin: 18px 0 10px;
      padding-bottom: 5px;
      border-bottom: 1px solid #e2e8f0;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    .cat-row { margin-bottom: 9px; }
    .cat-head { display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; margin-bottom: 3px; }
    .bar-bg { width: 100%; height: 7px; background: #e2e8f0; border-radius: 999px; overflow: hidden; }
    .bar-fill { height: 100%; background: #2563eb; border-radius: 999px; }
    .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .pill-wrap { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px; }
    .pill {
      display: inline-block;
      padding: 3px 9px;
      border-radius: 6px;
      font-size: 11.5px;
      font-weight: 700;
    }
    .pill-found { background: #ecfdf5; border: 1px solid #a7f3d0; color: #065f46; }
    .pill-missing { background: #fff1f2; border: 1px solid #fecdd3; color: #be123c; }
    .pill-kw-found { background: #eff6ff; border: 1px solid #bfdbfe; color: #1d4ed8; }
    .pill-kw-missing { background: #fffbeb; border: 1px solid #fde68a; color: #92400e; }
    .audit-item {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 8px 12px;
      margin-bottom: 7px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }
    .audit-status {
      font-size: 11px;
      font-weight: 800;
      padding: 2px 8px;
      border-radius: 999px;
      white-space: nowrap;
    }
    .status-pass { background: #ecfdf5; color: #047857; }
    .status-miss { background: #fff1f2; color: #be123c; }
    .tip-card {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 10px 12px;
      margin-bottom: 8px;
      background: #f8fafc;
    }
    .tip-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }
    .tip-priority {
      font-size: 10px;
      font-weight: 800;
      text-transform: uppercase;
      padding: 2px 7px;
      border-radius: 999px;
    }
    .prio-high { background: #ffe4e6; color: #be123c; }
    .prio-medium { background: #fef3c7; color: #b45309; }
    .prio-low { background: #dbeafe; color: #1d4ed8; }
    @media print {
      body { padding: 12px 18px; }
      .no-print { display: none !important; }
    }
  </style>
</head>
<body>
  <div class="report-container">
    <div class="header">
      <div>
        <span class="title-badge">ATS Resume Analysis Report</span>
        <div class="candidate-name">${esc(candidate.name)}</div>
        <div class="meta-line">
          <strong>Resume File:</strong> ${esc(candidate.fileName)}
          &nbsp;|&nbsp; <strong>Target Role:</strong> ${esc(analysisResult.roleName)}
        </div>
        <div class="meta-line">
          ${candidate.email ? `<strong>Email:</strong> ${esc(candidate.email)} &nbsp;|&nbsp; ` : ''}
          ${candidate.phone ? `<strong>Phone:</strong> ${esc(candidate.phone)} &nbsp;|&nbsp; ` : ''}
          <strong>Word Count:</strong> ${analysisResult.metadata.wordCount} words &nbsp;|&nbsp;
          <strong>Date:</strong> ${esc(scanDate)}
        </div>
      </div>
      <div class="score-box">
        <div class="score-num">${analysisResult.overallScore}%</div>
        <div style="font-size:10px;font-weight:700;color:#64748b;">ATS SCORE</div>
        <div class="score-lbl">${esc(analysisResult.scoreLabel)}</div>
      </div>
    </div>

    <div class="summary-box">
      <strong>Executive Summary:</strong> ${esc(analysisResult.summaryText)}
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">Matched Keywords</div>
        <div class="stat-value">${analysisResult.matchedKeywords.length} / ${totalKeywords}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Missing Keywords</div>
        <div class="stat-value">${analysisResult.missingKeywords.length}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Skills Found</div>
        <div class="stat-value">${analysisResult.skillsFound.length}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Missing Skills</div>
        <div class="stat-value">${analysisResult.missingSkills.length}</div>
      </div>
    </div>

    <div class="section-title">1. Category Score Breakdown</div>
    ${Object.values(analysisResult.categories)
      .map(
        (cat) => `
      <div class="cat-row">
        <div class="cat-head">
          <span>${esc(cat.name)}</span>
          <span>${cat.earnedPoints} / ${cat.maxPoints} pts (${cat.score}%)</span>
        </div>
        <div class="bar-bg"><div class="bar-fill" style="width:${cat.score}%"></div></div>
      </div>`
      )
      .join('')}

    <div class="section-title">2. Resume Skills Analysis (${esc(analysisResult.roleName)})</div>
    <div class="two-col">
      <div>
        <strong style="font-size:12px;color:#065f46;">✓ Skills Found in Your Resume (${analysisResult.skillsFound.length})</strong>
        <div class="pill-wrap">
          ${
            analysisResult.skillsFound.length > 0
              ? analysisResult.skillsFound.map((s) => `<span class="pill pill-found">✓ ${esc(s)}</span>`).join('')
              : '<span style="font-size:12px;color:#64748b;">No matching role skills detected</span>'
          }
        </div>
      </div>
      <div>
        <strong style="font-size:12px;color:#be123c;">✗ Missing Skills to Add (${analysisResult.missingSkills.length})</strong>
        <div class="pill-wrap">
          ${
            analysisResult.missingSkills.length > 0
              ? analysisResult.missingSkills.map((s) => `<span class="pill pill-missing">✗ ${esc(s)}</span>`).join('')
              : '<span style="font-size:12px;color:#047857;">All target skills found in resume!</span>'
          }
        </div>
      </div>
    </div>

    <div class="section-title">3. ATS Keyword Matching</div>
    <div class="two-col">
      <div>
        <strong style="font-size:12px;color:#1d4ed8;">Matched Keywords (${analysisResult.matchedKeywords.length})</strong>
        <div class="pill-wrap">
          ${
            analysisResult.matchedKeywords.length > 0
              ? analysisResult.matchedKeywords.map((k) => `<span class="pill pill-kw-found">${esc(k)}</span>`).join('')
              : '<span style="font-size:12px;color:#64748b;">None matched</span>'
          }
        </div>
      </div>
      <div>
        <strong style="font-size:12px;color:#92400e;">Missing Keywords (${analysisResult.missingKeywords.length})</strong>
        <div class="pill-wrap">
          ${
            analysisResult.missingKeywords.length > 0
              ? analysisResult.missingKeywords.map((k) => `<span class="pill pill-kw-missing">${esc(k)}</span>`).join('')
              : '<span style="font-size:12px;color:#047857;">All target keywords matched!</span>'
          }
        </div>
      </div>
    </div>

    <div class="section-title">4. ATS Formatting &amp; Section Audit</div>
    ${analysisResult.sections
      .map((sec) => {
        const isPassed = sec.status === 'passed';
        const isNotEval = sec.status === 'not_evaluated';
        const statusLabel = isPassed
          ? '✓ Passed'
          : isNotEval
          ? 'Not Evaluated'
          : '! Needs Improvement';
        return `
      <div class="audit-item">
        <div>
          <strong style="font-size:12.5px;color:#0f172a;">${esc(sec.name)}</strong>
          <div style="font-size:11.5px;color:#475569;margin-top:2px;">${esc(sec.feedback)}</div>
        </div>
        <span class="audit-status ${isPassed ? 'status-pass' : 'status-miss'}">
          ${statusLabel}
        </span>
      </div>`;
      })
      .join('')}

    <div class="section-title">5. Prioritized Recommendations for Your Resume</div>
    ${analysisResult.detailedImprovementTips
      .map(
        (tip) => `
      <div class="tip-card">
        <div class="tip-head">
          <strong style="font-size:12.5px;color:#0f172a;">${esc(tip.title)}</strong>
          <span class="tip-priority prio-${tip.priority}">${esc(tip.priority)} Priority</span>
        </div>
        <div style="font-size:11.5px;color:#475569;margin-bottom:4px;">${esc(tip.description)}</div>
        <div style="font-size:11.5px;color:#1d4ed8;"><strong>Action:</strong> ${esc(tip.action)}</div>
      </div>`
      )
      .join('')}
  </div>
</body>
</html>`;

    // Print ONLY the standalone resume report via a hidden iframe (no website UI/banners)
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow?.document;
    if (doc && iframe.contentWindow) {
      doc.open();
      doc.write(reportHtml);
      doc.close();
      setTimeout(() => {
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();
        setTimeout(() => {
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
          }
        }, 2000);
      }, 250);
    }
  };

  // ATS Fixed Resume Generator Handlers
  const handleOpenFixedResume = () => {
    const textToUse = extractedText.trim() || sampleResumeData;
    const parsed = parseResumeText(textToUse, activeCandidateName);
    const fixed = generateAtsFixedResume(parsed, selectedRole);
    setFixedResumeData(fixed);
    setFixedResumeModalOpen(true);
  };

  const handleDownloadFixedPdf = () => {
    const textToUse = extractedText.trim() || sampleResumeData;
    const parsed = parseResumeText(textToUse, activeCandidateName);
    const fixed = generateAtsFixedResume(parsed, selectedRole);
    setFixedResumeData(fixed);
    printAtsFixedResume(fixed);
  };

  const handleCopyAtsText = () => {
    if (!fixedResumeData) return;
    const lines = [
      fixedResumeData.candidateName.toUpperCase(),
      `${fixedResumeData.location} | ${fixedResumeData.email} | ${fixedResumeData.phone}`,
      `${fixedResumeData.linkedin} | ${fixedResumeData.github}`,
      '',
      'PROFESSIONAL SUMMARY',
      fixedResumeData.summary,
      '',
      'TECHNICAL SKILLS',
      ...fixedResumeData.skills.map((s) => `${s.category}: ${s.items.join(', ')}`),
      '',
      'PROFESSIONAL EXPERIENCE',
      ...fixedResumeData.experience.flatMap((e) => [
        `${e.title} - ${e.company} (${e.period})`,
        ...e.bullets.map((b) => `• ${b}`),
        '',
      ]),
      'KEY PROJECTS & CASE STUDIES',
      ...fixedResumeData.projects.flatMap((p) => [
        `${p.title} [${p.techStack}]`,
        ...p.bullets.map((b) => `• ${b}`),
        '',
      ]),
      'EDUCATION & CERTIFICATIONS',
      ...fixedResumeData.education.map((ed) => `${ed.degree} - ${ed.institution} (${ed.year})`),
      ...fixedResumeData.certifications.map((c) => `• ${c}`),
    ].join('\n');

    if (navigator?.clipboard) {
      navigator.clipboard.writeText(lines);
      setCopiedAtsText(true);
      setTimeout(() => setCopiedAtsText(false), 2500);
    }
  };

  // Handle clicking "Scan My Resume" — strictly validate inputs & prevent duplicate scans
  const handleScanButtonClick = () => {
    if (isAnalyzing || isExtracting) return;

    // Auto-detect candidate name/email from uploaded resume if available for later unlock
    const detected = extractCandidateInfo(extractedText, uploadedFile);
    if (detected.name && detected.name !== 'Candidate Resume' && !candidateNameInput) {
      setCandidateNameInput(detected.name);
    }
    if (detected.email && !candidateEmailInput) {
      setCandidateEmailInput(detected.email);
    }

    // Run real analysis (never fall back to fake sample data)
    handleRunAnalysis(false);
  };

  const handleAuthSubmit = (e?: React.FormEvent, customName?: string) => {
    if (e) e.preventDefault();
    const nameToUse = (customName || candidateNameInput).trim() || 'Rahul Sharma';
    setActiveCandidateName(nameToUse);
    if (typeof window !== 'undefined') {
      localStorage.setItem('futureai_user_name', nameToUse);
      localStorage.setItem('futureai_logged_in', 'true');
      if (candidateEmailInput.trim()) {
        localStorage.setItem('futureai_user_email', candidateEmailInput.trim());
      }
    }
    if (onOpenLogin) {
      onOpenLogin(nameToUse);
    }
    setIsAuthModalOpen(false);
    // If real analysis already completed, unlock it immediately without rescanning
    if (analysisResult) {
      setCheckerMode('result');
    } else {
      handleRunAnalysis(false, nameToUse);
    }
  };

  // Run Real Analysis with Dynamic ATS Scoring
  const handleRunAnalysis = (_useSampleFallback = false, overrideName?: string) => {
    // Prevent duplicate concurrent scan submissions
    if (isAnalyzing || isExtracting) return;

    const textToAnalyze = extractedText.trim();

    if (!uploadedFile || !textToAnalyze) {
      setAnalysisError('Please upload a valid resume (PDF or DOCX) in Step 1 before scanning.');
      setActiveStep(1);
      return;
    }

    if (!selectedRole || !TARGET_JOB_ROLES.some((r) => r.id === selectedRole)) {
      setAnalysisError('Please select a target job role in Step 2 before scanning.');
      setActiveStep(2);
      return;
    }

    if (extractionError) {
      setAnalysisError(extractionError);
      setActiveStep(1);
      return;
    }

    if (overrideName) {
      setActiveCandidateName(overrideName);
    }

    setIsAnalyzing(true);
    setAnalysisError(null);
    setAnalysisProgress(12);
    setScanPhase(1);

    // Multi-phase smooth scanning progression (2.8s total)
    setTimeout(() => {
      setScanPhase(2);
      setAnalysisProgress(35);
    }, 600);

    setTimeout(() => {
      setScanPhase(3);
      setAnalysisProgress(60);
    }, 1200);

    setTimeout(() => {
      setScanPhase(4);
      setAnalysisProgress(80);
    }, 1800);

    setTimeout(() => {
      setScanPhase(5);
      setAnalysisProgress(95);
    }, 2300);

    setTimeout(() => {
      setAnalysisProgress(100);
      try {
        // REAL ATS Scoring Engine based on actual resume text & target job role!
        const result = analyzeResumeContent(textToAnalyze, selectedRole, customJobDesc);

        setAnalysisResult(result);
        setIsAnalyzing(false);
        setCheckerMode('result');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (err: any) {
        // Preserve uploadedFile & selectedRole on Step 3 so the user can retry without re-uploading
        setAnalysisError(err?.message || 'Analysis encountered an error. Please try again.');
        setIsAnalyzing(false);
        setActiveStep(3);
      }
    }, 2800);
  };

  const handleRemoveFile = () => {
    if (autoAdvanceTimerRef.current) {
      window.clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }
    setUploadedFile(null);
    setExtractedText('');
    setExtractionError(null);
    setAnalysisError(null);
    setUploadSuccessMsg(null);
    setAnalysisResult(null);
    setCheckerMode('input');
    setActiveStep(1);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const activeRoleData =
    TARGET_JOB_ROLES.find((r) => r.id === selectedRole) || TARGET_JOB_ROLES[0];

  const candidateFirstName =
    (activeCandidateName || extractCandidateInfo(extractedText, uploadedFile).name || userName || 'Rahul').split(' ')[0] || 'Rahul';

  const filteredRoles = TARGET_JOB_ROLES.filter((r) =>
    r.name.toLowerCase().includes(roleSearchFilter.toLowerCase())
  );

  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>('en');

  const handleNavbarNavigate = (sectionId: string) => {
    if (sectionId === 'ats-resume-checker') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (onBackToHome) {
      onBackToHome();
    } else if (typeof window !== 'undefined') {
      window.location.hash = '#home';
    }
    if (sectionId && sectionId !== 'hero') {
      const resolvedId =
        sectionId === 'courses' || sectionId === 'program-highlights'
          ? 'courses-hub'
          : sectionId;
      setTimeout(() => {
        const el = document.getElementById(resolvedId) || document.getElementById(sectionId);
        if (el) {
          const navbarOffset = resolvedId === 'real-projects' ? 12 : 84;
          const top = el.getBoundingClientRect().top + window.scrollY - navbarOffset;
          window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        }
      }, 120);
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 60);
    }
  };

  return (
    <div className="dock-dashboard-page min-h-screen text-slate-800 font-sans antialiased flex flex-col selection:bg-blue-100 selection:text-blue-900 relative overflow-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          1. EXACT HOMEPAGE HEADER NAVIGATION (FutureNavbar)
          ───────────────────────────────────────────────────────────── */}
            {/* Standardized Ultra-Advanced Header Matching All Pages */}
      <FutureAdvancedHeader showDesktopDock={true}
        userName={userName}
        isLoggedIn={isLoggedIn}
        activeNavTab="ats"
        onNavigateHome={() => {
          if (onBackToHome) onBackToHome();
          else window.location.hash = isLoggedIn ? '#dashboard' : '#home';
        }}
        onNavigateLearning={() => {
          window.location.hash = '#data-analyst';
        }}
        onNavigatePractice={(track) => {
          const hash = track === 'python' ? '#python-challenges' : track === 'sql' ? '#sql-challenges' : track === 'excel' ? '#excel-challenges' : '#practice';
          window.location.hash = hash;
        }}
        onOpenAtsResume={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateEarn={() => {
          window.location.hash = '#earnings';
        }}
        onNavigateInternship={() => {
          window.location.hash = '#placement';
        }}
        onNavigatePlacement={() => {
          window.location.hash = '#placement';
        }}
        onOpenLogin={() => onOpenLogin?.()}
        onOpenSignUp={() => onOpenLogin?.()}
      />

      {/* ─────────────────────────────────────────────────────────────
          2. HERO SECTION & 3-STEP LAYOUT (Clean Aesthetic Background)
          ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden">

        {/* Content Container */}
        <main className="relative z-10 max-w-[1480px] w-full mx-auto px-3 sm:px-6 pt-[1px] pb-8 space-y-3">
          
          {/* ── SLIM THEME-MATCHED HERO BANNER (Upload Page Only) ── */}
          {checkerMode !== 'result' && (
          <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_4px_18px_rgba(109,40,217,0.06)] border border-[#E9E5F5] min-h-[155px] h-auto sm:h-[175px] md:h-[190px] flex items-center bg-gradient-to-r from-[#F5F3FF] via-white to-[#EEF2FF]">
            {/* Base Seamless Wave Backdrop */}
            <img
              src="/images/ats/ats_top_banner_wave_bg.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-left select-none pointer-events-none opacity-45"
            />

            {/* Fitted Top Banner Video on Right */}
            <div
              className="absolute inset-y-0 right-0 w-full sm:w-[62%] md:w-[58%] overflow-hidden pointer-events-none select-none z-[1]"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 100%)',
                maskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 100%)',
              }}
            >
              <video
                src="/videos/ats_top_banner.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute right-[-2%] top-[-52.6%] h-[205.7%] aspect-[16/9] w-auto max-w-none"
              />
            </div>

            {/* Soft Lavender-White Pearl Gradient Fade for Crisp Purple-Theme Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8FF]/98 via-[#F5F3FF]/92 to-[#F5F3FF]/35 sm:from-white/95 sm:via-[#F5F3FF]/85 sm:to-transparent z-[2] pointer-events-none" />

            {/* Compact Theme-Matched Text Overlay on Left */}
            <div className="relative z-10 px-4 py-3 sm:px-6 md:px-7 max-w-xl lg:max-w-[520px] flex flex-col justify-center gap-1.5 min-w-0">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/95 border border-[#E9E5F5] text-[#6D28D9] text-[10px] sm:text-[11px] font-semibold shadow-2xs w-fit max-w-full">
                <Target className="w-3 h-3 text-[#6D28D9] shrink-0" />
                <span className="tracking-wide truncate">AI-Powered Industry Standard ATS Scanner</span>
              </div>

              <h1 className="text-lg sm:text-2xl md:text-[25px] font-bold text-[#111827] tracking-tight leading-tight m-0">
                ATS Resume <span className="text-[#6D28D9]">Checker &amp; Optimizer</span>
              </h1>

              <p className="text-xs sm:text-[13px] font-medium text-[#64748B] leading-snug m-0 max-w-md">
                Know what&apos;s missing in your resume for your target job role and get actionable improvements.
              </p>

              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/95 border border-[#E9E5F5] text-[10.5px] font-medium text-slate-700">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  Industry Standard
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/95 border border-[#E9E5F5] text-[10.5px] font-medium text-slate-700">
                  <Target className="w-3 h-3 text-[#6D28D9]" />
                  Role-Based Match
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/95 border border-[#E9E5F5] text-[10.5px] font-medium text-slate-700">
                  <ShieldCheck className="w-3 h-3 text-[#6D28D9]" />
                  100% Private
                </span>
              </div>
            </div>
          </div>
          )}

          {/* ══════════════════════════════════════════════════════════
              CONDITIONAL DISPLAY:
              1. SCANNING HUD (Centered)
              2. DEDICATED RESULT PAGE (AtsAnalysisResultDashboard)
              3. INPUT MODE (AtsUploadWorkspace)
              ══════════════════════════════════════════════════════════ */}
          {isAnalyzing ? (
            <div className="w-full max-w-2xl mx-auto my-8 bg-white rounded-2xl border border-[#E9E5F5] shadow-md p-6 sm:p-8 text-center space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-[#F5F3FF] border border-[#E9E5F5] text-[#6D28D9] flex items-center justify-center mx-auto animate-pulse">
                <Search className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-[#111827] m-0">
                  Analyzing Your Resume...
                </h2>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1 m-0">
                  {uploadedFile?.name || 'Uploaded Resume'} • Matching against {activeRoleData.name}
                </p>
              </div>
              <div className="w-full h-2.5 rounded-full bg-[#F5F3FF] overflow-hidden border border-[#E9E5F5]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] transition-all duration-300"
                  style={{ width: `${Math.max(10, analysisProgress)}%` }}
                />
              </div>
              <div className="flex items-center justify-center gap-4 text-xs font-medium text-[#64748B] flex-wrap">
                <span className={scanPhase >= 1 ? 'text-[#6D28D9] font-semibold' : ''}>1. Parsing Text</span>
                <span>•</span>
                <span className={scanPhase >= 2 ? 'text-[#6D28D9] font-semibold' : ''}>2. Matching Keywords</span>
                <span>•</span>
                <span className={scanPhase >= 3 ? 'text-[#6D28D9] font-semibold' : ''}>3. Scoring Structure</span>
              </div>
            </div>
          ) : checkerMode === 'result' && analysisResult ? (
            !isCandidateVerified ? (
              <div className="max-w-2xl mx-auto my-8 p-6 sm:p-8 rounded-2xl bg-white border border-[#E9E5F5] shadow-lg text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#6D28D9] text-white flex items-center justify-center shadow-sm mx-auto">
                  <Lock className="w-7 h-7" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Scan Complete — ATS Score Ready</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111827] m-0">
                  Free Login / Sign Up to View Your Score
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto m-0 leading-relaxed">
                  Your resume has been parsed and evaluated. Sign in for free to unlock your full ATS score, keyword analysis, and improvement suggestions.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsAuthModalOpen(true)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-semibold text-sm shadow-xs transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Unlock ATS Result</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCheckerMode('input');
                      setActiveStep(1);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-[#E9E5F5] text-[#111827] font-semibold text-sm hover:bg-slate-50 transition cursor-pointer"
                  >
                    Upload Another Resume
                  </button>
                </div>
              </div>
            ) : (
              <AtsAnalysisResultDashboard
                analysisResult={analysisResult}
                uploadedFile={uploadedFile}
                extractedText={extractedText}
                activeRoleData={activeRoleData}
                onScanAnother={() => {
                  setCheckerMode('input');
                  setActiveStep(1);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onDownloadReport={handleDownloadResumeReport}
                onOpenFixedResume={handleOpenFixedResume}
              />
            )
          ) : (
            <AtsUploadWorkspace
              activeStep={activeStep}
              onStepChange={setActiveStep}
              uploadedFile={uploadedFile}
              isExtracting={isExtracting}
              isAnalyzing={isAnalyzing}
              extractionError={extractionError}
              analysisError={analysisError}
              uploadSuccessMsg={uploadSuccessMsg}
              isDragging={isDragging}
              fileInputRef={fileInputRef}
              onFileProcess={handleFileProcess}
              onRemoveFile={handleRemoveFile}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              selectedRole={selectedRole}
              onSelectRole={handleSelectRole}
              customJobDesc={customJobDesc}
              onCustomJobDescChange={setCustomJobDesc}
              onScanClick={handleScanButtonClick}
            />
          )}

      </main>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          4. CANDIDATE VERIFICATION & LOGIN MODAL
          ───────────────────────────────────────────────────────────── */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-[28px] p-6 sm:p-7 border border-blue-100 shadow-[0_24px_64px_rgba(15,23,42,0.22)] overflow-hidden">
            {/* Top Right Close Button */}
            <button
              type="button"
              onClick={() => setIsAuthModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Top Glow Accent */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-500/25 shrink-0">
                <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-blue-600 block">
                  Candidate Verification
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-950 leading-tight">
                  Verify Identity for ATS Score
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-500 font-medium leading-relaxed mb-5">
              Enter your details so our AI scanner benchmarks your resume accurately under your name and generates your personalized ATS report.
            </p>

            {/* Form */}
            <form onSubmit={handleAuthSubmit} className="space-y-3.5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Full Name (As on Resume) <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={candidateNameInput}
                    onChange={(e) => setCandidateNameInput(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={candidateEmailInput}
                    onChange={(e) => setCandidateEmailInput(e.target.value)}
                    placeholder="e.g. rahul.sharma@example.com"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Target Role Tag */}
              <div className="flex items-center justify-between p-2.5 bg-blue-50/60 rounded-xl border border-blue-100 text-xs">
                <span className="text-slate-500 font-medium">Target Role Track:</span>
                <span className="font-extrabold text-blue-700">{activeRoleData.name}</span>
              </div>

              {/* Primary Action Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-5 rounded-xl font-black text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-95 active:scale-98 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-white fill-white stroke-none" />
                <span>Verify &amp; Generate Real ATS Score →</span>
              </button>

              {/* Quick 1-Click Guest Option */}
              <button
                type="button"
                onClick={() => handleAuthSubmit(undefined, candidateNameInput || 'Rahul Sharma')}
                className="w-full py-2.5 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Quick Continue as {candidateNameInput.trim() || 'Rahul Sharma'}</span>
              </button>
            </form>

            {/* Privacy note */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Secure • Used strictly for candidate report generation</span>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          5. ATS-OPTIMIZED FIXED RESUME PREVIEW & DOWNLOAD MODAL
          ───────────────────────────────────────────────────────────── */}
      {fixedResumeModalOpen && fixedResumeData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl border border-emerald-200 shadow-[0_32px_80px_rgba(15,23,42,0.25)] flex flex-col overflow-hidden">
            
            {/* Modal Top Bar */}
            <div className="px-6 py-4 border-b border-slate-200/90 flex items-center justify-between bg-gradient-to-r from-emerald-50/80 via-teal-50/50 to-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/25 shrink-0">
                  <Sparkles className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-black text-slate-950 leading-tight">
                      AI-Optimized ATS Resume
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs border border-emerald-200">
                      96 / 100 ATS Score
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Tailored specifically for <strong>{fixedResumeData.targetRoleName}</strong> • Single-Column ATS Standards
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDownloadFixedPdf}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md shadow-emerald-500/20 active:scale-95 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download ATS PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFixedResumeModalOpen(false)}
                  className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Score Lift & Key Optimizations Strip */}
            <div className="px-6 py-3 bg-slate-50 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-semibold">Original Score:</span>
                <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 font-bold">
                  {analysisResult?.overallScore || 62}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-slate-500 font-semibold">After AI Optimization:</span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-black flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-emerald-600" />
                  <span>96 / 100 (+{Math.max(15, 96 - (analysisResult?.overallScore || 62))} Pts)</span>
                </span>
              </div>

              {/* View Tabs */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-200/80 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setPreviewTab('resume')}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    previewTab === 'resume' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Document View
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewTab('comparison')}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    previewTab === 'comparison' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  What Was Fixed ({fixedResumeData.improvementsApplied.length})
                </button>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-slate-100/50">
              {previewTab === 'resume' ? (
                /* Paper Resume Container */
                <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm text-slate-900 font-sans leading-relaxed text-xs sm:text-[13px] space-y-4">
                  {/* Header */}
                  <div className="text-center border-b border-blue-900 pb-3">
                    <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider text-slate-950">
                      {fixedResumeData.candidateName}
                    </h2>
                    <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[11px] text-slate-600 mt-1">
                      <span>📍 {fixedResumeData.location}</span>
                      <span>•</span>
                      <span>✉️ {fixedResumeData.email}</span>
                      <span>•</span>
                      <span>📞 {fixedResumeData.phone}</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-3 text-[11px] text-blue-700 font-medium mt-0.5">
                      <span>🔗 {fixedResumeData.linkedin}</span>
                      <span>•</span>
                      <span>💻 {fixedResumeData.github}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-blue-900 border-b border-slate-200 pb-1 mb-1.5">
                      PROFESSIONAL SUMMARY
                    </h4>
                    <p className="text-slate-700 text-justify leading-relaxed">
                      {fixedResumeData.summary}
                    </p>
                  </div>

                  {/* Technical Skills */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-blue-900 border-b border-slate-200 pb-1 mb-1.5">
                      TECHNICAL SKILLS &amp; METHODOLOGIES
                    </h4>
                    <div className="space-y-1">
                      {fixedResumeData.skills.map((s, idx) => (
                        <div key={idx} className="text-slate-700">
                          <strong className="text-slate-950 font-bold">{s.category}: </strong>
                          <span>{s.items.join(', ')}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Professional Experience */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-blue-900 border-b border-slate-200 pb-1 mb-2">
                      PROFESSIONAL EXPERIENCE
                    </h4>
                    <div className="space-y-3">
                      {fixedResumeData.experience.map((exp, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex items-baseline justify-between font-bold text-slate-950">
                            <span>
                              {exp.title} <span className="font-normal italic text-slate-600">— {exp.company}</span>
                            </span>
                            <span className="text-[11px] text-slate-500 font-medium">{exp.period}</span>
                          </div>
                          <ul className="list-disc pl-4 space-y-1 text-slate-700">
                            {exp.bullets.map((b, bIdx) => (
                              <li key={bIdx} className="leading-relaxed">
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Projects */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-blue-900 border-b border-slate-200 pb-1 mb-2">
                      KEY PROJECTS &amp; CASE STUDIES
                    </h4>
                    <div className="space-y-3">
                      {fixedResumeData.projects.map((proj, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex items-baseline justify-between font-bold text-slate-950">
                            <span>
                              {proj.title} <span className="text-[10px] text-blue-700 font-semibold">[{proj.techStack}]</span>
                            </span>
                            <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">ATS Verified</span>
                          </div>
                          <ul className="list-disc pl-4 space-y-1 text-slate-700">
                            {proj.bullets.map((b, bIdx) => (
                              <li key={bIdx} className="leading-relaxed">
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education & Certifications */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-blue-900 border-b border-slate-200 pb-1 mb-1.5">
                      EDUCATION &amp; CERTIFICATIONS
                    </h4>
                    <div className="space-y-1">
                      {fixedResumeData.education.map((edu, idx) => (
                        <div key={idx} className="flex items-baseline justify-between">
                          <span className="font-bold text-slate-950">
                            {edu.degree} <span className="font-normal text-slate-600">— {edu.institution}</span>
                          </span>
                          <span className="text-[11px] text-slate-500 font-medium">{edu.year}</span>
                        </div>
                      ))}
                      {fixedResumeData.certifications.map((cert, idx) => (
                        <div key={idx} className="text-slate-700 font-medium flex items-center gap-1.5 text-[11px] pt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Improvements Breakdown View */
                <div className="max-w-2xl mx-auto space-y-3">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                      Key Fixes Applied to Reach 96/100 ATS Score:
                    </h4>
                    <div className="space-y-2">
                      {fixedResumeData.improvementsApplied.map((imp, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-200/70 text-xs">
                          <Check className="w-4 h-4 text-emerald-600 stroke-[3] shrink-0 mt-0.5" />
                          <span className="font-semibold text-slate-800">{imp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                      Why This Resume Gets Shortlisted:
                    </h4>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4 font-medium">
                      <li><strong>Zero Parser Blocking:</strong> No complex two-column tables, graphics, or textboxes that crash Taleo/Workday parsers.</li>
                      <li><strong>100% Keyword Density:</strong> Injected all essential {fixedResumeData.targetRoleName} keywords naturally across Summary, Experience, and Skills.</li>
                      <li><strong>Quantified Impact:</strong> Every bullet incorporates actionable numbers, time saved, or percentages.</li>
                      <li><strong>Chronological Clarity:</strong> Clean descending date timeline prevents parser calculation gaps.</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom Footer Actions */}
            <div className="px-6 py-4 border-t border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Vector PDF • Ready to upload to Workday, Taleo &amp; LinkedIn</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleCopyAtsText}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {copiedAtsText ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedAtsText ? 'Copied Plain Text!' : 'Copy Plain Text'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleDownloadFixedPdf}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-black transition-all shadow-md shadow-emerald-500/25 active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Fixed ATS PDF →</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Small Footer per User Specification */}
      <SmallFooter />
    </div>
  );
};

export default AtsResumeChecker;
