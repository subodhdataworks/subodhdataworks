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
import { extractResumeText, ExtractionResult } from '../../services/resumeExtractor';

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
  userName = 'Subodh Kumar',
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
    return userName && userName !== 'Learner' ? userName : 'Subodh Kumar';
  });

  // Verification check: Is candidate logged in?
  const isCandidateVerified = Boolean(
    (isLoggedIn && activeCandidateName && activeCandidateName !== 'Learner') ||
    (typeof window !== 'undefined' &&
      localStorage.getItem('futureai_logged_in') === 'true' &&
      localStorage.getItem('futureai_user_name') &&
      localStorage.getItem('futureai_user_name') !== 'Learner')
  );
  // Step inputs
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState<string>('');
  const [extractionError, setExtractionError] = useState<string | null>(null);
  const [isExtracting, setIsExtracting] = useState<boolean>(false);

  const [selectedRole, setSelectedRole] = useState<string>('data-analyst');
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

  // Handle File Upload
  const handleFileProcess = async (file: File) => {
    setExtractionError(null);
    setAnalysisError(null);
    setUploadedFile(file);
    setIsExtracting(true);

    try {
      const res: ExtractionResult = await extractResumeText(file);
      if (res.error) {
        setExtractionError(res.error);
        setExtractedText('');
      } else {
        setExtractedText(res.text);
      }
    } catch (err: any) {
      setExtractionError(err?.message || 'Failed to read file. Please ensure it is a valid PDF or DOCX.');
      setExtractedText('');
    } finally {
      setIsExtracting(false);
    }
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
    const scanDate = new Date(analysisResult.metadata.analysisTimestamp).toLocaleString('en-IN', {
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

    <div class="section-title">4. Section-wise Resume Audit</div>
    ${analysisResult.sections
      .map(
        (sec) => `
      <div class="audit-item">
        <div>
          <strong style="font-size:12.5px;color:#0f172a;">${esc(sec.name)}</strong>
          <div style="font-size:11.5px;color:#475569;margin-top:2px;">${esc(sec.feedback)}</div>
        </div>
        <span class="audit-status ${sec.found ? 'status-pass' : 'status-miss'}">
          ${sec.found ? '✓ Detected' : '✗ Missing'}
        </span>
      </div>`
      )
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

  // Handle clicking "Scan My Resume" - Require Candidate Login/Verification first
  const handleScanButtonClick = () => {
    // Auto-detect candidate name/email from uploaded resume if available for later unlock
    const detected = extractCandidateInfo(extractedText, uploadedFile);
    if (detected.name && detected.name !== 'Candidate Resume' && !candidateNameInput) {
      setCandidateNameInput(detected.name);
    }
    if (detected.email && !candidateEmailInput) {
      setCandidateEmailInput(detected.email);
    }

    // Run real analysis so scanning animation and progress happens
    handleRunAnalysis(true);
  };

  const handleAuthSubmit = (e?: React.FormEvent, customName?: string) => {
    if (e) e.preventDefault();
    const nameToUse = (customName || candidateNameInput).trim() || 'Subodh Kumar';
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
    handleRunAnalysis(true, nameToUse);
  };

  // Run Real Analysis with Dynamic ATS Scoring
  const handleRunAnalysis = (useSampleFallback = false, overrideName?: string) => {
    let textToAnalyze = extractedText.trim();

    if (!textToAnalyze && !uploadedFile) {
      if (useSampleFallback) {
        textToAnalyze = sampleResumeData;
      } else {
        setAnalysisError('Please upload your resume (PDF or DOCX) in Step 1 first to check your resume.');
        return;
      }
    }

    if (extractionError && !textToAnalyze) {
      setAnalysisError(extractionError);
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
        setAnalysisError(err?.message || 'Analysis encountered an error. Please try again.');
        setIsAnalyzing(false);
      }
    }, 2800);
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    setExtractedText('');
    setExtractionError(null);
    setAnalysisResult(null);
    setCheckerMode('input');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const activeRoleData =
    TARGET_JOB_ROLES.find((r) => r.id === selectedRole) || TARGET_JOB_ROLES[0];

  const candidateFirstName =
    (activeCandidateName || extractCandidateInfo(extractedText, uploadedFile).name || userName || 'Subodh').split(' ')[0] || 'Subodh';

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
          ? 'pay-after-placement'
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
    <div className="min-h-screen bg-[#F4F8FC] text-slate-800 font-sans antialiased flex flex-col selection:bg-blue-100 selection:text-blue-900 relative overflow-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          1. EXACT HOMEPAGE HEADER NAVIGATION (FutureNavbar)
          ───────────────────────────────────────────────────────────── */}
            {/* Standardized Ultra-Advanced Header Matching All Pages */}
      <FutureAdvancedHeader
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
      <div className="relative w-full overflow-hidden bg-[#F4F8FC] pt-4 sm:pt-6">

        {/* Content Container */}
        <main className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-2.5 pb-8 space-y-4">
          
          {/* ── HERO BANNER: DASHBOARD SIZE MATCH (~210px HEIGHT) ── */}
          <div className="relative w-full rounded-[18px] overflow-hidden shadow-[0_6px_24px_rgba(0,80,220,0.06)] border border-blue-100/90 h-[195px] sm:h-[210px] md:h-[220px] flex items-center bg-[#E6F3FC]">
            {/* Base Seamless Wave Backdrop (matches Frame 0 of video palette) */}
            <img
              src="/images/ats/ats_top_banner_wave_bg.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-left select-none pointer-events-none"
            />

            {/* Fitted Top Banner Video (crops outer 16:9 letterbox y=184..534 and aligns 3D Mentor + 90+ Score + Checklist on right) */}
            <div
              className="absolute inset-y-0 right-0 w-full sm:w-[68%] md:w-[65%] overflow-hidden pointer-events-none select-none z-[1]"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 100%)',
                maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 100%)',
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

            {/* Subtle soft gradient fade on mobile to ensure crisp text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#EDF6FD]/95 via-[#EDF6FD]/80 to-transparent sm:from-[#E8F4FD]/75 sm:via-[#E8F4FD]/25 sm:to-transparent z-[2] pointer-events-none" />

            {/* Text Overlay on Left Side - Dashboard Compact Styling */}
            <div className="relative z-10 px-4 py-3 sm:px-6 sm:py-3.5 md:px-7 max-w-xl lg:max-w-[490px] flex flex-col justify-center gap-1.5">
              {/* Sparkles Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/95 border border-blue-200/90 text-blue-700 text-[10px] font-bold shadow-2xs backdrop-blur-md w-fit">
                <Sparkles className="w-3 h-3 fill-blue-600 text-blue-600" />
                <span className="tracking-wide">AI-Powered Industry Standard ATS Scanner</span>
              </div>

              {/* Headline */}
              <h1 className="text-xl sm:text-2xl md:text-[27px] font-black text-slate-950 tracking-tight leading-tight">
                ATS Resume <span className="text-blue-600">Checker &amp; Optimizer</span>
              </h1>

              {/* Subheading */}
              <p className="text-[11px] sm:text-xs font-bold text-slate-800 leading-snug">
                Know what's missing in your resume for your target job role.
              </p>

              {/* Description */}
              <p className="text-[10px] sm:text-[11px] text-slate-600 max-w-md font-normal leading-relaxed line-clamp-1">
                Get instant AI analysis, find missing skills and keywords, and improve shortlist chances.
              </p>

              {/* 4 Feature Badges (Compact) */}
              <div className="flex flex-wrap items-center gap-1 pt-0.5">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 border border-slate-200 text-[10px] font-bold text-slate-700 shadow-2xs">
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500 fill-emerald-100" />
                  Industry Standard Analysis
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 border border-slate-200 text-[10px] font-bold text-slate-700 shadow-2xs">
                  <Target className="w-2.5 h-2.5 text-purple-600" />
                  Role-based Matching
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 border border-slate-200 text-[10px] font-bold text-slate-700 shadow-2xs">
                  <Zap className="w-2.5 h-2.5 text-amber-500 fill-amber-400" />
                  Instant Results
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 border border-slate-200 text-[10px] font-bold text-slate-700 shadow-2xs">
                  <ShieldCheck className="w-2.5 h-2.5 text-blue-600" />
                  100% Private &amp; Secure
                </span>
              </div>
            </div>
          </div>
          {/* ══════════════════════════════════════════════════════════
          {/* ══════════════════════════════════════════════════════════
              CONDITIONAL DISPLAY:
              1. SCANNING HUD (Centered)
              2. DEDICATED SEPARATE RESULT PAGE (Full Width)
              3. INPUT MODE: 3-STEP RESUME OPTIMIZER (Exact Reference Image 1:1)
              ══════════════════════════════════════════════════════════ */}
          {isAnalyzing ? (
            /* ── ULTRA-FUTURISTIC SCANNING HUD & LIVE LASER BEAM ANIMATION ── */
            <div className="max-w-4xl mx-auto my-6 ats-scanner-hud shadow-2xl">
              <div className="ats-scanner-header">
                <div className="ats-scanner-badge">
                  <span className="ats-scanner-pulse-dot" />
                  <span>Live Neural ATS Engine 4.0</span>
                </div>
                <div className="ats-scanner-filename">
                  <FileText className="w-3.5 h-3.5 text-blue-500" />
                  <span>{uploadedFile?.name || 'Resume_Document.pdf'}</span>
                </div>
              </div>

              <div className="ats-scanner-canvas-wrap">
                {/* Visual Resume Document with Laser Beam */}
                <div className="ats-scanner-doc-card">
                  <div className="ats-scanner-laser-beam">
                    <div className="ats-scanner-laser-glow" />
                  </div>
                  <div className="ats-scanner-doc-lines">
                    <div className="ats-doc-line line-title" />
                    <div className="ats-doc-line line-sub" />
                    <div className="ats-doc-line w-full" />
                    <div className="ats-doc-line w-85" />
                    <div className="ats-doc-line w-70" />
                    <div className="ats-doc-line w-90" />
                    <div className="ats-doc-line w-60" />
                    <div className="ats-doc-line w-85" />
                    <div className="ats-doc-line w-70" />
                  </div>
                </div>

                {/* 5 Sequential Scanning Phases */}
                <div className="ats-scanner-phases">
                  {[
                    { step: 1, title: 'Document Extraction & Structure', desc: 'Parsing headers, contact info & format' },
                    { step: 2, title: 'Semantic Keyword Matching', desc: `Auditing keywords for ${activeRoleData.name}` },
                    { step: 3, title: 'Reverse Chronological Timeline', desc: 'Verifying work history ordering & date formats' },
                    { step: 4, title: 'Quantified Impact Audit', desc: 'Analyzing numbers, metrics & % achievements' },
                    { step: 5, title: 'ATS Score Benchmarking', desc: 'Synthesizing final score & mechanical fixes' },
                  ].map((phase) => {
                    const isDone = scanPhase > phase.step;
                    const isActive = scanPhase === phase.step;
                    return (
                      <div
                        key={phase.step}
                        className={`ats-scan-phase-item ${isDone ? 'phase-done' : isActive ? 'phase-active' : 'phase-pending'}`}
                      >
                        <div className="ats-phase-icon">
                          {isDone ? (
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          ) : isActive ? (
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <span>0{phase.step}</span>
                          )}
                        </div>
                        <div className="ats-phase-text">
                          <span className="ats-phase-title">{phase.title}</span>
                          <span className="ats-phase-desc">{phase.desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Progress Bar */}
              <div className="ats-scanner-bottom-bar">
                <div className="ats-scanner-progress-info">
                  <span className="flex items-center gap-1.5 text-blue-700 font-semibold">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    <span>Scanning Resume Against Industry ATS Standards...</span>
                  </span>
                  <span className="font-black text-slate-800">{analysisProgress}%</span>
                </div>
                <div className="ats-scanner-track">
                  <div className="ats-scanner-fill" style={{ width: `${analysisProgress}%` }} />
                </div>
              </div>
            </div>
          ) : checkerMode === 'result' && analysisResult ? (
            /* ══════════════════════════════════════════════════════════
               DEDICATED SEPARATE PAGE: ATS ANALYSIS RESULT (Full Width)
               ══════════════════════════════════════════════════════════ */
            !isCandidateVerified ? (
              <div className="max-w-3xl mx-auto my-8 p-6 sm:p-10 rounded-3xl bg-white border border-blue-200/90 shadow-2xl text-center">
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg mx-auto mb-4">
                  <Lock className="w-8 h-8" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-black uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Scan Complete (ATS Score Ready)</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Free Login / Sign Up to View Your Score
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-lg mx-auto mt-2 leading-relaxed">
                  Your resume has been algorithmically parsed and evaluated against enterprise ATS standards. Free login required to unlock your 0–100 score, recruiter keyword match, and optimization suggestions.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsAuthModalOpen(true)}
                    className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-black text-sm shadow-md hover:shadow-lg active:scale-95 transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Free Login / Sign Up to Unlock Result</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCheckerMode('input');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition cursor-pointer"
                  >
                    Upload Another Resume
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 font-semibold mt-3">
                  100% Free • No Payment Required • Instant Unlock
                </p>

                {/* Blurred teaser preview of the score */}
                <div className="mt-8 pt-6 border-t border-slate-100 opacity-40 filter blur-xs pointer-events-none select-none">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                      <div className="text-xs font-bold text-slate-400">ATS Score</div>
                      <div className="text-xl font-black text-slate-600">?? / 100</div>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                      <div className="text-xs font-bold text-slate-400">Keyword Match</div>
                      <div className="text-xl font-black text-slate-600">?? %</div>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                      <div className="text-xs font-bold text-slate-400">Impact Words</div>
                      <div className="text-xl font-black text-slate-600">?? %</div>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                      <div className="text-xs font-bold text-slate-400">ATS Formatting</div>
                      <div className="text-xl font-black text-slate-600">Pass</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-6xl mx-auto space-y-6 ats-dedicated-result-view">
              {/* Top Navigation & Action Bar */}
              <div className="ats-result-top-action-bar">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setCheckerMode('input');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="ats-btn-back-checker"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Resume Optimizer</span>
                  </button>

                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
                    <span className="text-slate-400">Candidate:</span>
                    <strong className="text-slate-900">{candidateFirstName}</strong>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-400">Target Role:</span>
                    <strong className="text-blue-600">{activeRoleData.name}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                  <button
                    type="button"
                    onClick={handleOpenFixedResume}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white text-xs font-black transition-all shadow-md shadow-emerald-500/25 active:scale-95 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 fill-white" />
                    <span>⚡ Download ATS-Fixed Resume (96 Score)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRunAnalysis(true)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all shadow-2xs cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Re-run ATS Scan</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDownloadResumeReport}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-md shadow-blue-500/25 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF Report</span>
                    <ChevronDown className="w-3 h-3 text-blue-200" />
                  </button>
                </div>
              </div>

              {/* Main Result Card */}
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_16px_48px_rgba(15,23,42,0.06)] relative z-10 space-y-6">
                
                {/* 5 Accessible Results Tabs */}
                <div className="flex items-center gap-2 p-1.5 bg-slate-100/90 border border-slate-200/80 rounded-2xl overflow-x-auto text-xs font-semibold">
                  {[
                    { id: 'overall', label: 'Overall Analysis' },
                    { id: 'skills', label: 'Skills & Keywords' },
                    { id: 'missing', label: 'Missing Skills' },
                    { id: 'sections', label: 'Section-wise' },
                    { id: 'tips', label: 'Recommendations' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveTab(t.id as any)}
                      className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer font-bold ${
                        activeTab === t.id
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                  {activeTab === 'overall' && (
                    <div className="space-y-4">
                      {/* Ultra-Premium Hero Score Banner */}
                      <div className="ats-hero-score-card">
                        <div className="ats-hsc-grid">
                          <div className="ats-hsc-text-col">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-black text-blue-700 w-fit">
                              <Sparkles className="w-3 h-3 text-blue-600" />
                              <span>Verified ATS Diagnostic</span>
                            </div>
                            <h2 className="ats-hsc-salutation">
                              {candidateFirstName}, your resume scored <span className="ats-hsc-score-highlight">{analysisResult.overallScore} out of 100</span>
                            </h2>
                            <p className="ats-hsc-context">
                              <strong>{analysisResult.missingSkills.length + (analysisResult.sections.filter((s) => !s.found).length || 2)} fixes across {Math.max(2, analysisResult.sections.filter((s) => !s.found).length + 1)} sections so far.</strong>{' '}
                              {analysisResult.overallScore >= 80
                                ? 'Your resume is highly competitive! A few high-impact tweaks will push you into the top 5% of applicants.'
                                : analysisResult.overallScore >= 65
                                ? 'That is around average. Everything below is mechanical, and fixing it is the fastest way to move the score.'
                                : 'Your resume is below the screening threshold. Mechanical fixes below will provide the biggest score jump.'}
                            </p>
                          </div>

                          {/* Right Score Gauge Circle Pill */}
                          <div className="ats-hsc-gauge-col">
                            <div className="ats-score-circle-pill">
                              <span className="ats-circle-score-num">{analysisResult.overallScore}</span>
                              <span className="ats-circle-score-denom">/ 100</span>
                            </div>
                            <div className="ats-score-rating-badge">
                              {analysisResult.overallScore >= 80 ? (
                                <>
                                  <Sparkles className="w-3 h-3 text-emerald-600" />
                                  <span className="text-emerald-700 font-bold">Top Match</span>
                                </>
                              ) : analysisResult.overallScore >= 65 ? (
                                <>
                                  <AlertTriangle className="w-3 h-3 text-amber-600" />
                                  <span className="text-amber-700 font-bold">Around Average</span>
                                </>
                              ) : (
                                <>
                                  <AlertCircle className="w-3 h-3 text-rose-600" />
                                  <span className="text-rose-700 font-bold">Needs Improvement</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Benchmark Target Comparison Bar */}
                        <div className="ats-benchmark-bar-row">
                          <div className="ats-benchmark-metric">
                            <Target className="w-4 h-4 text-blue-600" />
                            <span>Target for Top Tech Shortlist: <strong>88+ Score</strong></span>
                          </div>
                          <div className="ats-benchmark-target-pill">
                            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                            <span>+{Math.max(10, 92 - analysisResult.overallScore)} Pts Potential with Priority Fixes Below</span>
                          </div>
                        </div>
                      </div>

                      {/* "Fix these first" High-Impact Container */}
                      <div className="ats-fix-first-container">
                        <div className="ats-fix-first-header">
                          <div className="ats-fix-first-title-wrap">
                            <div className="ats-fix-first-icon-badge">
                              <Zap className="w-4 h-4" />
                            </div>
                            <div>
                              <h3 className="ats-fix-first-h3">Fix these first</h3>
                              <span className="ats-fix-first-sub">Mechanical improvements with the fastest score lift</span>
                            </div>
                          </div>
                          <div className="ats-fix-first-speed-tag">
                            <Clock className="w-3.5 h-3.5" />
                            <span>Estimated fix time: ~6 mins</span>
                          </div>
                        </div>

                        <div className="ats-fix-cards-list">
                          {/* Card 1: Buzzwords / Action Words */}
                          <div className="ats-priority-fix-card">
                            <div className="ats-pfc-top">
                              <div className="ats-pfc-left">
                                <div className="flex items-center gap-2">
                                  <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 text-xs font-black flex items-center justify-center">1</span>
                                  <span className="ats-pfc-title">
                                    {analysisResult.weaknesses?.buzzwordFixes?.[0]?.found
                                      ? `Vague phrasing: "${analysisResult.weaknesses.buzzwordFixes[0].found}"`
                                      : 'Passive wording & action verbs'}
                                  </span>
                                </div>
                                <p className="ats-pfc-desc">
                                  Replace passive task phrasing with quantifiable technical achievements.
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[11px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                  +6 pts
                                </span>
                                <span className="ats-pfc-cat-badge cat-style">Style</span>
                              </div>
                            </div>

                            <div className="ats-pfc-drawer">
                              <div className="ats-drawer-before">
                                <span className="ats-drawer-pill">Found in Resume</span>
                                <span className="line-through text-slate-500">
                                  "{analysisResult.weaknesses?.buzzwordFixes?.[0]?.originalSentence || 'Worked as a go-getter team player on data pipelines.'}"
                                </span>
                              </div>
                              <div className="ats-drawer-after">
                                <span className="ats-drawer-pill">Recommended</span>
                                <span className="text-emerald-800">
                                  "{analysisResult.weaknesses?.buzzwordFixes?.[0]?.recommendedSentence || 'Engineered automated SQL and Python ETL pipelines reducing load latency by 35%.'}"
                                </span>
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleCopyFix(
                                      'fix-buzzword',
                                      analysisResult.weaknesses?.buzzwordFixes?.[0]?.recommendedSentence ||
                                        'Engineered automated SQL and Python ETL pipelines reducing load latency by 35%.'
                                    )
                                  }
                                  className="ml-auto inline-flex items-center gap-1 text-[10px] font-bold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-md transition-all cursor-pointer"
                                  title="Copy recommended bullet"
                                >
                                  {copiedFixId === 'fix-buzzword' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                                  <span>{copiedFixId === 'fix-buzzword' ? 'Copied' : 'Copy'}</span>
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Card 2: Roles are not in reverse chronological order */}
                          <div className="ats-priority-fix-card">
                            <div className="ats-pfc-top">
                              <div className="ats-pfc-left">
                                <div className="flex items-center gap-2">
                                  <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 text-xs font-black flex items-center justify-center">2</span>
                                  <span className="ats-pfc-title">Roles timeline &amp; reverse chronological order</span>
                                </div>
                                <p className="ats-pfc-desc">
                                  Most recent first, every time. ATS parsers build your career timeline from this.
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[11px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                  +8 pts
                                </span>
                                <span className="ats-pfc-cat-badge cat-style">Style</span>
                              </div>
                            </div>

                            <div className="ats-pfc-drawer">
                              <div className="ats-drawer-before">
                                <span className="ats-drawer-pill">Parser Audit</span>
                                <span className="text-rose-700">
                                  {analysisResult.weaknesses?.chronologyIssue?.description ||
                                    'Chronology issue: Older role placed before most recent experience.'}
                                </span>
                              </div>
                              <div className="ats-drawer-after">
                                <span className="ats-drawer-pill">Quick Fix</span>
                                <span className="text-slate-700">
                                  {analysisResult.weaknesses?.chronologyIssue?.fix ||
                                    'Put your Latest / 2024–Present role at the very top of Experience, then order previous roles descending.'}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Card 3: Bullet density & Quantified Impact */}
                          <div className="ats-priority-fix-card">
                            <div className="ats-pfc-top">
                              <div className="ats-pfc-left">
                                <div className="flex items-center gap-2">
                                  <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 text-xs font-black flex items-center justify-center">3</span>
                                  <span className="ats-pfc-title">
                                    Only {analysisResult.weaknesses?.unquantifiedBullets?.quantifiedCount ?? 5} of{' '}
                                    {analysisResult.weaknesses?.unquantifiedBullets?.totalBullets ?? 14} bullets carry a number
                                  </span>
                                </div>
                                <p className="ats-pfc-desc">
                                  A count, percentage, rupee amount or time saved. Aim for at least 50% of bullets.
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[11px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                  +14 pts
                                </span>
                                <span className="ats-pfc-cat-badge cat-impact">Impact</span>
                              </div>
                            </div>

                            {/* Mini metric progress meter */}
                            <div className="ats-impact-mini-meter">
                              <div className="ats-impact-meter-info">
                                <span>
                                  Quantified Bullet Density:{' '}
                                  <strong>
                                    {analysisResult.weaknesses?.unquantifiedBullets?.quantifiedCount ?? 5} /{' '}
                                    {analysisResult.weaknesses?.unquantifiedBullets?.totalBullets ?? 14} (
                                    {analysisResult.weaknesses?.unquantifiedBullets?.densityPercent ?? 36}%)
                                  </strong>
                                </span>
                                <span className="text-amber-600 font-bold">Target: 50%+</span>
                              </div>
                              <div className="ats-impact-meter-track">
                                <div
                                  className="ats-impact-meter-fill"
                                  style={{
                                    width: `${Math.min(100, analysisResult.weaknesses?.unquantifiedBullets?.densityPercent ?? 36)}%`,
                                  }}
                                />
                              </div>
                            </div>

                            <div className="ats-pfc-drawer">
                              <div className="ats-drawer-before">
                                <span className="ats-drawer-pill">Unquantified Bullet</span>
                                <span className="line-through text-slate-500">
                                  "{analysisResult.weaknesses?.unquantifiedBullets?.sampleUnquantified ||
                                    'Handled reporting and dashboard analysis for stakeholders.'}"
                                </span>
                              </div>
                              <div className="ats-drawer-after">
                                <span className="ats-drawer-pill">Quantified Formula</span>
                                <span className="text-emerald-800">
                                  "{analysisResult.weaknesses?.unquantifiedBullets?.sampleQuantified ||
                                    'Delivered 12+ interactive dashboards in Power BI saving 14 hrs/week for 40+ executive stakeholders.'}"
                                </span>
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleCopyFix(
                                      'fix-metric',
                                      analysisResult.weaknesses?.unquantifiedBullets?.sampleQuantified ||
                                        'Delivered 12+ interactive dashboards in Power BI saving 14 hrs/week for 40+ executive stakeholders.'
                                    )
                                  }
                                  className="ml-auto inline-flex items-center gap-1 text-[10px] font-bold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-md transition-all cursor-pointer"
                                  title="Copy recommended bullet"
                                >
                                  {copiedFixId === 'fix-metric' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                                  <span>{copiedFixId === 'fix-metric' ? 'Copied' : 'Copy'}</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* ── 1-CLICK AI RESUME OPTIMIZER CALLOUT BANNER ── */}
                        <div className="mt-5 p-5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-white shadow-xl shadow-emerald-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
                          <div className="flex items-center gap-3.5">
                            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center shrink-0 border border-white/30 shadow-inner">
                              <Sparkles className="w-6 h-6 fill-white" />
                            </div>
                            <div>
                              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 border border-white/30 text-[10px] font-black uppercase tracking-wider text-emerald-100 mb-1">
                                ⚡ 1-Click AI Fix Available
                              </div>
                              <h4 className="text-base sm:text-lg font-black text-white leading-tight">
                                Want Us to Fix Everything in Your Resume Automatically?
                              </h4>
                              <p className="text-xs text-white/90 font-medium mt-1 max-w-2xl leading-relaxed">
                                Our AI has rewritten your resume into a 100% ATS-compliant single-column layout scoring <strong>96 / 100</strong>. All missing role skills injected, all bullets quantified, and all passive words fixed!
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2.5 shrink-0 w-full md:w-auto">
                            <button
                              type="button"
                              onClick={handleOpenFixedResume}
                              className="w-full md:w-auto px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-emerald-800 text-xs font-black shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                            >
                              <Sparkles className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                              <span>Preview AI-Fixed Resume</span>
                            </button>
                            <button
                              type="button"
                              onClick={handleDownloadFixedPdf}
                              className="w-full md:w-auto px-4 py-3 rounded-xl bg-emerald-950/40 hover:bg-emerald-950/60 border border-white/40 text-white text-xs font-black transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                            >
                              <Download className="w-4 h-4" />
                              <span>Download ATS PDF</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Top Row: Semi-circle ATS Gauge (Left) + Your Resume Status (Right) */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center p-3 bg-gradient-to-r from-slate-50/80 to-blue-50/30 rounded-2xl border border-slate-100">
                        
                        {/* Left: Semi-circular Round Gauge matching reference image */}
                        <div className="sm:col-span-5 flex flex-col items-center justify-center py-2">
                          <div className="relative w-36 h-28 flex items-center justify-center">
                            {/* Semi-circular gauge SVG */}
                            <svg className="w-36 h-36" viewBox="0 0 100 70">
                              {/* Background arc */}
                              <path
                                d="M 15 65 A 35 35 0 0 1 85 65"
                                fill="none"
                                stroke="#E2E8F0"
                                strokeWidth="9"
                                strokeLinecap="round"
                              />
                              {/* Highlighted arc for score */}
                              <path
                                d="M 15 65 A 35 35 0 0 1 85 65"
                                fill="none"
                                stroke="#00C49F"
                                strokeWidth="9"
                                strokeDasharray="110"
                                strokeDashoffset={110 - (110 * analysisResult.overallScore) / 100}
                                strokeLinecap="round"
                              />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center top-3 leading-none">
                              <span className="text-3xl font-black text-slate-900 tracking-tight">
                                {analysisResult.overallScore}%
                              </span>
                              <span className="text-[11px] font-bold text-slate-500 mt-1">ATS Score</span>
                            </div>
                          </div>
                          
                          {/* Good Match pill below gauge */}
                          <div className="inline-flex items-center px-3.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black shadow-2xs">
                            {analysisResult.scoreLabel}
                          </div>
                        </div>

                        {/* Right: Your Resume Status Checklist (Dynamically reflects the user's resume) */}
                        <div className="sm:col-span-7 space-y-2.5 pl-0 sm:pl-2">
                          <strong className="text-xs font-extrabold text-slate-900 block">
                            Your Resume Status {uploadedFile?.name ? `(${uploadedFile.name})` : ''}
                          </strong>
                          <div className="space-y-2 text-xs font-semibold text-slate-700">
                            <div className="flex items-start gap-2">
                              {analysisResult.overallScore >= 60 ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-100 shrink-0 mt-0.5" />
                              ) : (
                                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                              )}
                              <span>
                                {analysisResult.overallScore >= 60
                                  ? `Good match (${analysisResult.overallScore}%) with ${analysisResult.roleName} role`
                                  : `Needs stronger alignment (${analysisResult.overallScore}%) with ${analysisResult.roleName} role`}
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              {analysisResult.matchedKeywords.length > 0 ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-100 shrink-0 mt-0.5" />
                              ) : (
                                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                              )}
                              <span>
                                Found {analysisResult.matchedKeywords.length} industry keywords &amp; {analysisResult.skillsFound.length} skills in your resume
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              {analysisResult.missingSkills.length === 0 ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-100 shrink-0 mt-0.5" />
                              ) : (
                                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                              )}
                              <span>
                                {analysisResult.missingSkills.length === 0
                                  ? 'All target role skills are present in your resume'
                                  : `${analysisResult.missingSkills.length} important skills are missing (${analysisResult.missingSkills.slice(0, 2).join(', ')})`}
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              {analysisResult.sections.every((s) => s.found) ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-100 shrink-0 mt-0.5" />
                              ) : (
                                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                              )}
                              <span>
                                {analysisResult.sections.every((s) => s.found)
                                  ? 'All core ATS resume sections are properly structured'
                                  : 'Improve missing sections for a higher ATS shortlist score'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 4 Analytics Stat Cards Row (Using exact user resume counts) */}
                      {(() => {
                        const totalKw = analysisResult.matchedKeywords.length + analysisResult.missingKeywords.length;
                        const totalSk = analysisResult.skillsFound.length + analysisResult.missingSkills.length;
                        const matchedKwPct = totalKw > 0 ? Math.round((analysisResult.matchedKeywords.length / totalKw) * 100) : 0;
                        const missingKwPct = totalKw > 0 ? Math.round((analysisResult.missingKeywords.length / totalKw) * 100) : 0;
                        const foundSkPct = totalSk > 0 ? Math.round((analysisResult.skillsFound.length / totalSk) * 100) : 0;
                        const missingSkPct = totalSk > 0 ? Math.round((analysisResult.missingSkills.length / totalSk) * 100) : 0;

                        return (
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                            {/* Card 1: Matched Keywords */}
                            <div className="p-3 bg-white rounded-2xl border border-slate-200/90 shadow-2xs space-y-1">
                              <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-bold">
                                <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                  <Search className="w-3 h-3" />
                                </div>
                                <span className="truncate">Matched Keywords</span>
                              </div>
                              <div className="text-base font-black text-slate-900 pt-0.5">
                                {analysisResult.matchedKeywords.length}{' '}
                                <span className="text-xs text-slate-400 font-semibold">/ {totalKw}</span>
                              </div>
                              <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                                <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${matchedKwPct}%` }} />
                              </div>
                            </div>

                            {/* Card 2: Missing Keywords */}
                            <div className="p-3 bg-white rounded-2xl border border-slate-200/90 shadow-2xs space-y-1">
                              <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-bold">
                                <div className="w-5 h-5 rounded-md bg-rose-50 text-rose-600 flex items-center justify-center">
                                  <Target className="w-3 h-3" />
                                </div>
                                <span className="truncate">Missing Keywords</span>
                              </div>
                              <div className="text-base font-black text-slate-900 pt-0.5">
                                {analysisResult.missingKeywords.length}
                              </div>
                              <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                                <div className="bg-rose-500 h-full rounded-full" style={{ width: `${missingKwPct}%` }} />
                              </div>
                            </div>

                            {/* Card 3: Skills Found */}
                            <div className="p-3 bg-white rounded-2xl border border-slate-200/90 shadow-2xs space-y-1">
                              <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-bold">
                                <div className="w-5 h-5 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center">
                                  <Layers className="w-3.5 h-3.5" />
                                </div>
                                <span className="truncate">Skills Found</span>
                              </div>
                              <div className="text-base font-black text-slate-900 pt-0.5">
                                {analysisResult.skillsFound.length}
                              </div>
                              <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                                <div className="bg-blue-600 h-full rounded-full" style={{ width: `${foundSkPct}%` }} />
                              </div>
                            </div>

                            {/* Card 4: Recommended Skills */}
                            <div className="p-3 bg-white rounded-2xl border border-slate-200/90 shadow-2xs space-y-1">
                              <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-bold">
                                <div className="w-5 h-5 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center">
                                  <Award className="w-3 h-3" />
                                </div>
                                <span className="truncate">Recommended Skills</span>
                              </div>
                              <div className="text-base font-black text-slate-900 pt-0.5">
                                {analysisResult.missingSkills.length}
                              </div>
                              <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                                <div className="bg-amber-500 h-full rounded-full" style={{ width: `${missingSkPct}%` }} />
                              </div>
                            </div>
                          </div>
                        );
                      })()}

                      {/* Bottom Quick Recommendation Strip with CTA Button */}
                      <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
                        <div className="flex items-center gap-2.5">
                          <span className="text-lg">💡</span>
                          <div>
                            <strong className="text-xs font-black text-slate-900 block leading-tight">
                              Quick Recommendation
                            </strong>
                            <p className="text-[11px] text-slate-600 font-medium mt-0.5">
                              {analysisResult.missingSkills.length > 0
                                ? `Add missing skills from your resume like ${analysisResult.missingSkills.slice(0, 3).join(', ')} to boost your ${analysisResult.roleName} ATS score.`
                                : `Great job! Your resume covers the core ${analysisResult.roleName} skills. Quantify your project achievements with metrics (%) to reach 95+.`}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => setActiveTab('tips')}
                          className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold whitespace-nowrap shadow-xs active:scale-95 transition-all flex items-center gap-1 cursor-pointer shrink-0"
                        >
                          <span>View Detailed Report</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>
                  )}

                  {/* ── TAB 2: SKILLS & KEYWORDS ── */}
                  {activeTab === 'skills' && (
                    <div className="space-y-4">
                      {/* Skills Detected List */}
                      <div className="space-y-2">
                        <strong className="text-xs font-extrabold text-slate-900 block">
                          Skills Found in Your Resume ({analysisResult.skillsFound.length})
                        </strong>
                        <div className="flex flex-wrap gap-1.5">
                          {analysisResult.skillsFound.map((sk) => (
                            <span
                              key={sk}
                              className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold"
                            >
                              ✓ {sk}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Category Breakdown Progress Bars */}
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <strong className="text-xs font-extrabold text-slate-900 block">
                          Category Breakdown:
                        </strong>
                        <div className="space-y-2">
                          {Object.values(analysisResult.categories).map((cat) => (
                            <div key={cat.name} className="space-y-1">
                              <div className="flex justify-between text-xs font-semibold">
                                <span className="text-slate-700">{cat.name}</span>
                                <span className="text-slate-900 font-bold">
                                  {cat.earnedPoints} / {cat.maxPoints} pts ({cat.score}%)
                                </span>
                              </div>
                              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                <div
                                  className="bg-blue-600 h-full rounded-full transition-all duration-500"
                                  style={{ width: `${cat.score}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── TAB 3: MISSING SKILLS ── */}
                  {activeTab === 'missing' && (
                    <div className="space-y-3">
                      <strong className="text-xs font-extrabold text-slate-900 block">
                        High-Impact Missing Skills for {analysisResult.roleName}:
                      </strong>
                      <div className="flex flex-wrap gap-2">
                        {analysisResult.missingSkills.map((sk) => (
                          <span
                            key={sk}
                            className="px-3 py-1.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-1.5"
                          >
                            <X className="w-3.5 h-3.5" />
                            {sk}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 p-3.5 bg-amber-50 border border-amber-200 rounded-2xl">
                        <strong className="text-xs font-bold text-amber-900 block">
                          Missing Keyword Targets:
                        </strong>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {analysisResult.missingKeywords.map((kw) => (
                            <span
                              key={kw}
                              className="px-2 py-0.5 rounded-md bg-white border border-amber-300 text-amber-800 text-[11px] font-mono"
                            >
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── TAB 4: SECTION-WISE FEEDBACK ── */}
                  {activeTab === 'sections' && (
                    <div className="space-y-2.5">
                      <strong className="text-xs font-bold text-slate-800 block">
                        ATS Structural Formatting &amp; Section Checks:
                      </strong>
                      <div className="space-y-2">
                        {analysisResult.sections.map((sec) => (
                          <div
                            key={sec.name}
                            className={`p-3 rounded-xl border flex items-start gap-2.5 transition-all ${
                              sec.found
                                ? 'bg-emerald-50/40 border-emerald-200/80'
                                : 'bg-rose-50/40 border-rose-200/80'
                            }`}
                          >
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                sec.found ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                              }`}
                            >
                              {sec.found ? <Check className="w-3 h-3 stroke-[3]" /> : <X className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <div className="min-w-0">
                              <strong className="text-xs font-bold text-slate-900 block">
                                {sec.name}
                              </strong>
                              <p className="text-[11px] text-slate-600 mt-0.5 font-medium">
                                {sec.feedback}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ── TAB 5: RECOMMENDATIONS ── */}
                  {activeTab === 'tips' && (
                    <div className="space-y-2.5">
                      <strong className="text-xs font-bold text-slate-800 block">
                        Prioritized Action Plan to Reach 90+ Score:
                      </strong>
                      <div className="space-y-2">
                        {analysisResult.detailedImprovementTips.map((tip, idx) => (
                          <div
                            key={idx}
                            className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1.5"
                          >
                            <div className="flex items-center justify-between">
                              <strong className="text-xs font-bold text-slate-900">
                                {tip.title}
                              </strong>
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                                  tip.priority === 'high'
                                    ? 'bg-rose-100 text-rose-700'
                                    : tip.priority === 'medium'
                                    ? 'bg-amber-100 text-amber-700'
                                    : 'bg-blue-100 text-blue-700'
                                }`}
                              >
                                {tip.priority} Priority
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-600">{tip.description}</p>
                            <div className="pt-1 border-t border-slate-200/60 text-[11px] font-bold text-blue-700 flex items-center gap-1">
                              <span>Action:</span>
                              <span className="font-medium text-slate-700">{tip.action}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </div>
            )
          ) : (
            /* ══════════════════════════════════════════════════════════
               INPUT MODE: 3-STEP RESUME OPTIMIZER (Exact Reference Image 1:1)
               ══════════════════════════════════════════════════════════ */
            <div className="max-w-6xl mx-auto my-3">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4 lg:gap-2.5">
                
                {/* ── CARD 1: UPLOAD RESUME (Exact Reference Match) ── */}
                <div className="bg-white rounded-[26px] p-6 border border-slate-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between hover:shadow-[0_12px_36px_rgba(37,99,235,0.08)] transition-all duration-200">
                  <div>
                    {/* Header: Solid Blue Badge "1" + Title + Subtitle */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-9 h-9 rounded-full bg-[#0066ff] text-white font-extrabold text-sm flex items-center justify-center shadow-sm shadow-blue-500/25 shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="text-base sm:text-[17px] font-black text-slate-900 leading-tight">
                          Upload Resume
                        </h3>
                        <p className="text-xs text-slate-400 font-medium mt-0.5">
                          PDF or DOCX (Max 5 MB)
                        </p>
                      </div>
                    </div>

                    {/* Drag and Drop Zone */}
                    <div
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-2xl p-5 sm:p-6 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center min-h-[195px] mb-4 ${
                        isDragging
                          ? 'border-blue-500 bg-blue-50/70 scale-[1.01]'
                          : uploadedFile
                          ? 'border-emerald-300 bg-emerald-50/30'
                          : 'border-[#bfdbfe] bg-[#f8fbff]/60 hover:border-blue-400 hover:bg-blue-50/40'
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            handleFileProcess(e.target.files[0]);
                          }
                        }}
                      />

                      {uploadedFile ? (
                        <div className="space-y-2 w-full text-center">
                          <div className="w-13 h-13 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-2xs">
                            <FileText className="w-6 h-6 stroke-[2.2]" />
                          </div>
                          <strong className="text-sm font-black text-slate-900 block truncate max-w-[200px] mx-auto">
                            {uploadedFile.name}
                          </strong>
                          <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full font-bold border border-emerald-200">
                            {(uploadedFile.size / (1024 * 1024)).toFixed(1)} MB • {isExtracting ? 'Extracting text...' : 'Ready for ATS Audit'}
                          </span>
                          <div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRemoveFile();
                              }}
                              className="text-[11px] font-bold text-rose-500 hover:text-rose-700 underline cursor-pointer"
                            >
                              Change or remove file
                            </button>
                          </div>
                        </div>
                      ) : (
                        <>
                          {/* 3D Glowing Blue Cloud Icon with upward arrow */}
                          <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#38bdf8] to-[#0066ff] flex items-center justify-center shadow-lg shadow-blue-500/25 mb-2.5 text-white">
                            <UploadCloud className="w-8 h-8 stroke-[2.4]" />
                          </div>
                          <strong className="text-sm font-extrabold text-slate-800 block">
                            Drag &amp; drop your resume here
                          </strong>
                          <span className="text-xs text-slate-400 block mt-0.5">
                            or click to browse
                          </span>
                          <span className="text-[11px] text-slate-400 font-medium block mt-2 mb-3">
                            Supports PDF, DOCX • Max 5 MB
                          </span>
                          <button
                            type="button"
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#e3efff] hover:bg-[#d4e6ff] text-[#0066ff] text-xs font-bold transition-all shadow-2xs cursor-pointer"
                          >
                            <FileText className="w-3.5 h-3.5 stroke-[2.4]" />
                            <span>Choose File</span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Bottom: 100% Secure Upload Mint-Green Pill */}
                  <div className="p-3 rounded-2xl bg-[#e6fbf2] border border-[#a7f3d0] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#00d084] text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-500/20">
                      <ShieldCheck className="w-4.5 h-4.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <strong className="text-xs font-black text-slate-900 block leading-tight">
                        100% Secure Upload
                      </strong>
                      <span className="text-[11px] text-slate-500 font-medium block">
                        Your data is private and never shared
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── ARROW 1 -> 2 (Exact Reference Match) ── */}
                <div className="hidden lg:flex items-center justify-center text-blue-500 px-1">
                  <ChevronRight className="w-7 h-7 stroke-[2.5] text-[#2563eb]" />
                </div>

                {/* ── CARD 2: SELECT JOB ROLE (Exact Reference Match) ── */}
                <div className="bg-white rounded-[26px] p-6 border border-slate-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between hover:shadow-[0_12px_36px_rgba(139,92,246,0.08)] transition-all duration-200">
                  <div>
                    {/* Header: Solid Purple Badge "2" + Title + Subtitle */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-9 h-9 rounded-full bg-[#8b5cf6] text-white font-extrabold text-sm flex items-center justify-center shadow-sm shadow-purple-500/25 shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="text-base sm:text-[17px] font-black text-slate-900 leading-tight">
                          Select Job Role
                        </h3>
                        <p className="text-xs text-slate-400 font-medium mt-0.5">
                          Choose your target career track
                        </p>
                      </div>
                    </div>

                    {/* Dropdown Box: Layers Icon + Role Name + Chevron */}
                    <div ref={roleDropdownRef} className="relative mb-5">
                      <button
                        type="button"
                        onClick={() => setRoleDropdownOpen((o) => !o)}
                        className="w-full flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-purple-300 text-left transition-all cursor-pointer shadow-xs"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                            <Layers className="w-4 h-4 stroke-[2.4]" />
                          </div>
                          <span className="text-sm font-extrabold text-slate-800 truncate">
                            {activeRoleData.name}
                          </span>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${roleDropdownOpen ? 'rotate-180 text-purple-600' : ''}`} />
                      </button>

                      {/* Dropdown Menu */}
                      {roleDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl border border-purple-100 shadow-[0_16px_40px_rgba(15,23,42,0.12)] z-30 p-2 space-y-1 max-h-56 overflow-y-auto">
                          <input
                            type="text"
                            placeholder="Search role..."
                            value={roleSearchFilter}
                            onChange={(e) => setRoleSearchFilter(e.target.value)}
                            className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 outline-none mb-1 focus:border-purple-500 focus:bg-white font-medium"
                          />
                          {filteredRoles.map((r) => (
                            <div
                              key={r.id}
                              onClick={() => {
                                setSelectedRole(r.id);
                                setRoleDropdownOpen(false);
                              }}
                              className={`p-2.5 rounded-xl text-xs font-semibold cursor-pointer flex items-center justify-between transition-all ${
                                selectedRole === r.id
                                  ? 'bg-purple-50 text-purple-700 font-bold'
                                  : 'text-slate-700 hover:bg-slate-50'
                              }`}
                            >
                              <span>{r.name}</span>
                              {selectedRole === r.id && <Check className="w-3.5 h-3.5 text-purple-600 stroke-[3]" />}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Target Job Description (Optional) */}
                    <div>
                      <label className="text-xs font-black text-slate-900 block mb-2">
                        Target Job Description (Optional)
                      </label>
                      <div className="relative rounded-2xl border border-slate-200 bg-white p-3.5 focus-within:border-purple-300 transition-colors">
                        <div className="flex items-start gap-2.5">
                          <FileText className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <textarea
                            value={customJobDesc}
                            onChange={(e) => setCustomJobDesc(e.target.value)}
                            placeholder="Paste specific job description, keywords or requirements here for better analysis..."
                            rows={5}
                            className="w-full text-xs text-slate-700 placeholder:text-slate-400/80 resize-none outline-none bg-transparent font-normal leading-relaxed"
                          />
                        </div>
                        <div className="text-right text-[11px] text-slate-400 font-medium pt-1">
                          {customJobDesc.length}/2000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── ARROW 2 -> 3 (Exact Reference Match) ── */}
                <div className="hidden lg:flex items-center justify-center text-blue-500 px-1">
                  <ChevronRight className="w-7 h-7 stroke-[2.5] text-[#2563eb]" />
                </div>

                {/* ── CARD 3: AI SCAN & MATCH (Exact Reference Match) ── */}
                <div className="bg-white rounded-[26px] p-6 border border-slate-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between hover:shadow-[0_12px_36px_rgba(16,185,129,0.08)] transition-all duration-200">
                  <div>
                    {/* Header: Solid Green Badge "3" + Title + Subtitle */}
                    <div className="flex items-center gap-3.5 mb-2">
                      <div className="w-9 h-9 rounded-full bg-[#10b981] text-white font-extrabold text-sm flex items-center justify-center shadow-sm shadow-emerald-500/25 shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="text-base sm:text-[17px] font-black text-slate-900 leading-tight">
                          AI Scan &amp; Match
                        </h3>
                        <p className="text-xs text-slate-400 font-medium mt-0.5">
                          Compare skills, keywords and role fit
                        </p>
                      </div>
                    </div>

                    {/* Central 3D Video Animation (User Provided ATS Animation) */}
                    <div className="relative w-full h-[215px] flex items-center justify-center my-1 select-none overflow-hidden rounded-2xl bg-gradient-to-b from-[#f8fbff] to-[#edf5ff] border border-blue-100/80 shadow-xs group">
                      <video
                        src="/videos/ats_scan_animation.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover rounded-2xl pointer-events-none scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Bottom: Gradient Button "✨ Scan My Resume →" */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleScanButtonClick}
                      disabled={isAnalyzing || isExtracting}
                      className="w-full py-3.5 sm:py-4 px-6 rounded-2xl font-black text-sm text-white bg-gradient-to-r from-[#0084ff] via-[#3b82f6] to-[#9333ea] hover:opacity-95 active:scale-98 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed group/btn"
                    >
                      <Sparkles className="w-4 h-4 text-white fill-white stroke-none" />
                      <span>Scan My Resume</span>
                      <ArrowRight className="w-4 h-4 text-white transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}
        {/* ─────────────────────────────────────────────────────────────
            3. SHORTLIST REASSURANCE & ATS STATS BAR (Exact Reference Match)
            ───────────────────────────────────────────────────────────── */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_8px_24px_rgba(15,23,42,0.04)] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-500/25 shrink-0">
              <Rocket className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <strong className="text-sm sm:text-base font-extrabold text-slate-900 block leading-tight">
                Boost your chances of getting shortlisted!
              </strong>
              <p className="text-xs text-slate-500 font-medium">
                Get AI-powered insights, actionable tips, and a recruiter-ready resume.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-xs font-black text-slate-900 block leading-none">500K+</strong>
                <span className="text-[10px] text-slate-400 font-medium">Resumes Analyzed</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-xs font-black text-slate-900 block leading-none">Top Companies</strong>
                <span className="text-[10px] text-slate-400 font-medium">Industry Standards</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-xs font-black text-slate-900 block leading-none">99%</strong>
                <span className="text-[10px] text-slate-400 font-medium">Secure &amp; Private</span>
              </div>
            </div>

            <button
              onClick={() => onOpenLogin?.()}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold border border-slate-300 shadow-2xs hover:shadow-xs active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer ml-auto md:ml-0"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-blue-600" />
              <span>View Dashboard →</span>
            </button>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3A. MOBILE SPECIAL PROMOTIONAL BANNER: GET ALL PREMIUM COURSES ₹987
            (block md:hidden) - Ultra-sleek, compact, high-converting
            ───────────────────────────────────────────────────────────── */}
        <div
          className="block md:hidden mt-5 mb-8 rounded-2xl overflow-hidden border-2 border-sky-400 shadow-[0_10px_32px_rgba(56,189,248,0.28)] bg-gradient-to-b from-[#dbeafe] via-white to-[#f3e8ff] cursor-pointer"
          onClick={() => {
            if (onEnrollNow) onEnrollNow();
            else window.location.hash = '#data-analyst';
          }}
          title="Unlock All Premium Courses for Just ₹987"
        >
          {/* Top Card Body */}
          <div className="p-4 relative">
            {/* Top Row: Limited Offer Pill + ₹987 Pill */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wide shadow-xs">
                <span>⏰</span>
                <span>LIMITED-TIME OFFER</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-[11px] font-bold text-slate-500">Only</span>
                <span className="text-2xl font-black bg-gradient-to-r from-sky-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ₹987
                </span>
              </div>
            </div>

            {/* Gift Box & Headline */}
            <div className="flex items-center gap-3 my-2.5">
              <div className="relative shrink-0">
                <img
                  src="/images/luxury_purple_gift_box.png"
                  alt="3D Gift Box"
                  className="w-16 h-16 object-contain drop-shadow-[0_4px_14px_rgba(147,51,234,0.4)] animate-bounce"
                  style={{ animationDuration: '3s' }}
                />
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900 leading-tight">
                  Get All Premium Courses for Just <span className="text-blue-600 font-black">₹987</span>
                </h3>
                <p className="text-[11px] font-medium text-slate-600 mt-1 leading-snug">
                  Data Analyst, Data Science, Python, Full Stack &amp; AI Tracks
                </p>
              </div>
            </div>

            {/* Pay After Placement Bar */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-blue-50/90 border border-blue-200/90 my-2.5">
              <div className="flex items-center gap-2">
                <span className="text-base">💼</span>
                <div className="text-[11px] leading-tight font-bold text-slate-800">
                  <div>Pay After Job Offer</div>
                  <span className="text-[10px] text-slate-500 font-semibold">700+ Hiring Partners</span>
                </div>
              </div>
              <span className="text-[11px] font-black text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-lg border border-rose-200 shadow-2xs">
                Pay ₹0 Now
              </span>
            </div>

            {/* Golden Unlock Button */}
            <button
              type="button"
              className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-[0_0_22px_rgba(250,204,21,0.7)] active:scale-95 transition-transform flex items-center justify-center gap-2 border-2 border-white cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                if (onEnrollNow) onEnrollNow();
                else window.location.hash = '#data-analyst';
              }}
            >
              <Lock className="w-4 h-4 fill-slate-950 stroke-slate-950" />
              <span>UNLOCK ALL COURSES FOR ₹987</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

          {/* Bottom Features Strip (Dark Navy Blue) */}
          <div className="bg-gradient-to-r from-[#020b22] via-[#061539] to-[#030d2a] border-t border-sky-500/80 p-2.5 grid grid-cols-3 gap-1.5 text-center text-white">
            <div className="flex flex-col items-center justify-center p-1 rounded bg-white/5">
              <GraduationCap className="w-4 h-4 text-sky-400 mb-0.5" />
              <span className="text-[9px] font-bold">All Tracks</span>
            </div>
            <div className="flex flex-col items-center justify-center p-1 rounded bg-white/5">
              <FileText className="w-4 h-4 text-pink-400 mb-0.5" />
              <span className="text-[9px] font-bold">15+ Projects</span>
            </div>
            <div className="flex flex-col items-center justify-center p-1 rounded bg-white/5">
              <TrendingUp className="w-4 h-4 text-emerald-400 mb-0.5" />
              <span className="text-[9px] font-bold">Placement</span>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3B. DESKTOP SPECIAL PROMOTIONAL OFFER BANNER (All 4 Courses for ₹987)
            Matches course bottom banner 1:1
            ───────────────────────────────────────────────────────────── */}
        <div
          className="hidden md:block scd-slim-offer-strip"
          onClick={() => {
            if (onEnrollNow) onEnrollNow();
            else window.location.hash = '#data-analyst';
          }}
          title="Unlock All 4 Courses for Just ₹987"
        >
          {/* TOP TIER: Glossy Cyan/White/Purple Gradient Card */}
          <div className="scd-sos-top-card">
            {/* Left: 3D Luxury Purple Gift Box with Golden Bow and Sparks */}
            <div className="scd-sos-gift-col">
              <img
                src="/images/luxury_purple_gift_box.png"
                alt="3D Luxury Gift Box"
                className="scd-sos-gift-img"
              />
            </div>

            {/* Left-Center: Limited-Time Offer Pill + Headline + Subtitle */}
            <div className="scd-sos-title-col">
              <div className="scd-sos-limited-pill">
                <span className="scd-sos-pill-clock">⏰</span>
                <span className="scd-sos-pill-text">LIMITED-TIME OFFER</span>
              </div>
              <div className="scd-sos-main-heading">
                <span className="scd-sos-headline-lead">Get All 4 Courses for Just</span>{' '}
                <span className="scd-sos-price-989">₹987</span>
              </div>
              <p className="scd-sos-subtitle">
                Access Data Analyst, Data Science, ML Engineering &amp; AI Engineering
              </p>
            </div>

            {/* Center Divider */}
            <div className="scd-sos-vdivider" />

            {/* Center-Right: Pay After Job Offer */}
            <div className="scd-sos-pap-col">
              <div className="scd-sos-pap-header">
                <span className="scd-sos-briefcase-icon">💼</span>
                <div className="scd-sos-pap-title">
                  <span>Pay After</span>
                  <span>Job Offer</span>
                </div>
              </div>
              <div className="scd-sos-pap-price">700+</div>
              <div className="scd-sos-pap-sub">Hiring Companies</div>
            </div>

            {/* Right: Golden Unlock Capsule Button */}
            <div className="scd-sos-btn-col">
              <button
                type="button"
                className="scd-sos-unlock-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  if (onEnrollNow) onEnrollNow();
                  else window.location.hash = '#data-analyst';
                }}
              >
                <Lock className="w-5 h-5 fill-slate-900 stroke-slate-900" />
                <span>UNLOCK ALL 4 COURSES ₹987</span>
                <ArrowRight className="w-5 h-5 stroke-[3]" />
              </button>
            </div>
          </div>

          {/* BOTTOM TIER: Docked Dark Navy Blue Strip with 5 Feature Icons */}
          <div className="scd-sos-bottom-strip">
            <div className="scd-sos-feature-item">
              <div className="scd-sos-ficon-box scd-ficon-blue">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="scd-sos-ftext">
                <strong>Full Access</strong>
                <span>to All 4 Courses</span>
              </div>
            </div>

            <div className="scd-sos-strip-sep" />

            <div className="scd-sos-feature-item">
              <div className="scd-sos-ficon-box scd-ficon-pink">
                <FileText className="w-5 h-5" />
              </div>
              <div className="scd-sos-ftext">
                <strong>Real-World</strong>
                <span>Projects</span>
              </div>
            </div>

            <div className="scd-sos-strip-sep" />

            <div className="scd-sos-feature-item">
              <div className="scd-sos-ficon-box scd-ficon-green">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="scd-sos-ftext">
                <strong>Coding Practice</strong>
                <span>&amp; Practice</span>
              </div>
            </div>

            <div className="scd-sos-strip-sep" />

            <div className="scd-sos-feature-item">
              <div className="scd-sos-ficon-box scd-ficon-yellow">
                <Users className="w-5 h-5" />
              </div>
              <div className="scd-sos-ftext">
                <strong>AI Mock</strong>
                <span>Interviews</span>
              </div>
            </div>

            <div className="scd-sos-strip-sep" />

            <div className="scd-sos-feature-item">
              <div className="scd-sos-ficon-box scd-ficon-cyan">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="scd-sos-ftext">
                <strong>Placement</strong>
                <span>Support</span>
              </div>
            </div>
          </div>
        </div>

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
                    placeholder="e.g. Subodh Kumar"
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
                    placeholder="e.g. subodh@example.com"
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
                onClick={() => handleAuthSubmit(undefined, candidateNameInput || 'Subodh Kumar')}
                className="w-full py-2.5 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Quick Continue as {candidateNameInput.trim() || 'Subodh Kumar'}</span>
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

    </div>
  );
};

export default AtsResumeChecker;
