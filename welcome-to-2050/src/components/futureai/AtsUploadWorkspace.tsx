import React, { useState } from 'react';
import {
  UploadCloud,
  Upload,
  Check,
  ShieldCheck,
  Zap,
  Target,
  BarChart3,
  FileText,
  Briefcase,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Search,
  CheckCircle2,
  AlertCircle,
  X,
  Star,
} from 'lucide-react';
import { TARGET_JOB_ROLES } from '../../services/atsJobRoles';

export interface AtsUploadWorkspaceProps {
  activeStep: 1 | 2 | 3;
  onStepChange: (step: 1 | 2 | 3) => void;
  uploadedFile: File | null;
  isExtracting: boolean;
  isAnalyzing: boolean;
  extractionError: string | null;
  analysisError: string | null;
  uploadSuccessMsg: string | null;
  isDragging: boolean;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onFileProcess: (file: File) => void;
  onRemoveFile: () => void;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  selectedRole: string;
  onSelectRole: (roleId: string) => void;
  customJobDesc: string;
  onCustomJobDescChange: (val: string) => void;
  onScanClick: () => void;
}

export const AtsUploadWorkspace: React.FC<AtsUploadWorkspaceProps> = ({
  activeStep,
  onStepChange,
  uploadedFile,
  isExtracting,
  isAnalyzing,
  extractionError,
  analysisError,
  uploadSuccessMsg,
  isDragging,
  fileInputRef,
  onFileProcess,
  onRemoveFile,
  onDragOver,
  onDragLeave,
  onDrop,
  selectedRole,
  onSelectRole,
  customJobDesc,
  onCustomJobDescChange,
  onScanClick,
}) => {
  const [roleSearch, setRoleSearch] = useState('');
  const [stepValidationHint, setStepValidationHint] = useState<string | null>(null);

  const activeRoleObj = TARGET_JOB_ROLES.find((r) => r.id === selectedRole) || null;
  const isStep1Complete = Boolean(uploadedFile && !isExtracting && !extractionError);
  const isStep2Complete = Boolean(isStep1Complete && activeRoleObj);

  const filteredRoles = TARGET_JOB_ROLES.filter((r) =>
    r.name.toLowerCase().includes(roleSearch.toLowerCase().trim())
  );

  const handleNavigateStep = (targetStep: 1 | 2 | 3) => {
    setStepValidationHint(null);
    if (targetStep === 1) {
      onStepChange(1);
      return;
    }
    if (targetStep === 2) {
      if (!isStep1Complete) {
        setStepValidationHint('Please upload a valid PDF or DOCX resume in Step 1 first.');
        onStepChange(1);
        return;
      }
      onStepChange(2);
      return;
    }
    if (targetStep === 3) {
      if (!isStep1Complete) {
        setStepValidationHint('Please upload a valid PDF or DOCX resume in Step 1 first.');
        onStepChange(1);
        return;
      }
      if (!isStep2Complete) {
        setStepValidationHint('Please select a target job role before continuing to scan.');
        onStepChange(2);
        return;
      }
      onStepChange(3);
    }
  };

  const errorMsg = extractionError || analysisError || stepValidationHint;
  const jdWordCount = customJobDesc.trim() ? customJobDesc.trim().split(/\s+/).length : 0;

  return (
    <div className="w-full space-y-4 my-2">
      {/* ══════════════════════════════════════════════════════════════
          1. MAIN 2-COLUMN WORKSPACE (Left Intro Card + Right 3-Step Upload Card)
          ══════════════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* ── LEFT CARD (col-span-4): Soft Lavender Intro Card ── */}
        <div className="lg:col-span-4 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F7F4FF] via-[#FBF9FF] to-[#F1EBFF] border border-[#E9E5F5] shadow-[0_2px_12px_rgba(109,40,217,0.05)] p-5 sm:p-6 flex flex-col justify-between min-h-[340px]">
          {/* Subtle decorative wave glow */}
          <div className="absolute -bottom-16 -right-12 w-56 h-56 rounded-full bg-purple-200/40 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-3">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-[#E9E5F5] shadow-2xs text-xs font-semibold text-[#6D28D9]">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>AI-Powered Career Tool</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-[28px] font-black tracking-tight text-[#1E1B4B] leading-tight m-0">
              ATS Resume <span className="text-[#7C3AED]">Score</span>
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-[13.5px] text-slate-600 font-medium leading-relaxed m-0">
              Check how well your resume matches a job role and get AI-powered improvement suggestions.
            </p>

            {/* 4 Checkmark Features */}
            <ul className="space-y-2.5 pt-2 m-0 p-0 list-none">
              {[
                'ATS Compatibility Check',
                'Keyword & Skill Matching',
                'Role Fit Analysis',
                'Actionable Improvement Tips',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold text-slate-800"
                >
                  <Check className="w-4 h-4 text-emerald-500 stroke-[3] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom-Right Clean Vector Resume + ATS Magnifier Illustration */}
          <div className="relative z-10 mt-4 flex justify-end pointer-events-none select-none">
            <svg
              viewBox="0 0 180 135"
              className="w-[155px] sm:w-[170px] h-auto drop-shadow-[0_8px_18px_rgba(109,40,217,0.14)]"
              aria-hidden="true"
            >
              {/* Back Shadow Paper */}
              <rect x="26" y="18" width="88" height="106" rx="10" fill="#DDD6FE" transform="rotate(-6 70 71)" />
              {/* Main White Resume Sheet */}
              <rect x="40" y="10" width="90" height="110" rx="10" fill="#FFFFFF" stroke="#E9E5F5" strokeWidth="2" />
              {/* RESUME header */}
              <text x="52" y="27" fill="#6D28D9" fontSize="9.5" fontWeight="800" fontFamily="sans-serif">
                RESUME
              </text>
              {/* Profile box + lines */}
              <rect x="52" y="34" width="22" height="24" rx="4" fill="#EDE9FE" />
              <circle cx="63" cy="43" r="4.5" fill="#7C3AED" />
              <path d="M56 54c1.5-3.5 12.5-3.5 14 0" fill="#7C3AED" />
              <rect x="80" y="36" width="38" height="4" rx="2" fill="#C4B5FD" />
              <rect x="80" y="44" width="30" height="3.5" rx="1.75" fill="#E2E8F0" />
              <rect x="80" y="51" width="34" height="3.5" rx="1.75" fill="#E2E8F0" />
              {/* Body lines */}
              <rect x="52" y="66" width="66" height="4" rx="2" fill="#E2E8F0" />
              <rect x="52" y="75" width="54" height="4" rx="2" fill="#E2E8F0" />
              <rect x="52" y="84" width="62" height="4" rx="2" fill="#E2E8F0" />
              <rect x="52" y="93" width="46" height="4" rx="2" fill="#E2E8F0" />
              <rect x="52" y="102" width="56" height="4" rx="2" fill="#E2E8F0" />
              {/* Magnifying Glass with ATS */}
              <line x1="138" y1="95" x2="156" y2="113" stroke="#4C1D95" strokeWidth="7" strokeLinecap="round" />
              <circle cx="122" cy="79" r="24" fill="#F5F3FF" stroke="#6D28D9" strokeWidth="5" />
              <text x="122" y="83" fill="#4C1D95" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                ATS
              </text>
              {/* Green Verified Badge */}
              <circle cx="106" cy="100" r="11" fill="#16A34A" stroke="#FFFFFF" strokeWidth="2.5" />
              <path d="M101.5 100l3 3 6-6" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* ── RIGHT CARD (col-span-8): Interactive 3-Step Upload & Scan Card ── */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-[#E9E5F5] shadow-[0_2px_12px_rgba(15,23,42,0.04)] p-4 sm:p-5 flex flex-col justify-between gap-4">
          {/* Top 3-Step Progress Stepper */}
          <div className="rounded-xl border border-[#E9E5F5] bg-[#FCFBFF] px-3 sm:px-4 py-3 flex items-center justify-between gap-2 overflow-x-auto">
            {/* Step 1: Upload Resume */}
            <button
              type="button"
              onClick={() => handleNavigateStep(1)}
              className="flex items-center gap-2.5 text-left shrink-0 cursor-pointer group"
            >
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors shrink-0 ${
                  activeStep === 1
                    ? 'bg-[#6D28D9] text-white shadow-xs ring-2 ring-[#6D28D9]/20'
                    : isStep1Complete
                    ? 'bg-emerald-500 text-white'
                    : 'bg-slate-100 text-slate-400'
                }`}
              >
                {isStep1Complete && activeStep !== 1 ? <Check className="w-4 h-4 stroke-[2.5]" /> : '1'}
              </span>
              <div className="leading-tight">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`text-xs sm:text-[13px] font-bold ${
                      activeStep === 1
                        ? 'text-[#6D28D9]'
                        : isStep1Complete
                        ? 'text-[#111827] group-hover:text-[#6D28D9]'
                        : 'text-slate-500'
                    }`}
                  >
                    Upload Resume
                  </span>
                  {isStep1Complete && activeStep > 1 && (
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                      Completed
                    </span>
                  )}
                </div>
                <div className="text-[10.5px] text-slate-400 font-medium">PDF or DOCX (Max 5 MB)</div>
              </div>
            </button>

            <div
              className={`hidden sm:block h-px flex-1 mx-1 transition-colors ${
                isStep1Complete ? 'bg-emerald-300' : 'bg-purple-200/70'
              }`}
            />

            {/* Step 2: Select Job Role */}
            <button
              type="button"
              onClick={() => handleNavigateStep(2)}
              aria-disabled={!isStep1Complete}
              className={`flex items-center gap-2.5 text-left shrink-0 group ${
                isStep1Complete ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'
              }`}
            >
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors shrink-0 ${
                  activeStep === 2
                    ? 'bg-[#6D28D9] text-white shadow-xs ring-2 ring-[#6D28D9]/20'
                    : isStep2Complete && activeStep > 2
                    ? 'bg-emerald-500 text-white'
                    : 'bg-[#EDE9FE]/80 text-slate-400'
                }`}
              >
                {isStep2Complete && activeStep > 2 ? <Check className="w-4 h-4 stroke-[2.5]" /> : '2'}
              </span>
              <div className="leading-tight">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`text-xs sm:text-[13px] font-bold ${
                      activeStep === 2
                        ? 'text-[#6D28D9]'
                        : isStep2Complete && activeStep > 2
                        ? 'text-[#111827] group-hover:text-[#6D28D9]'
                        : 'text-slate-400'
                    }`}
                  >
                    Select Job Role
                  </span>
                  {isStep2Complete && activeStep > 2 && (
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                      Completed
                    </span>
                  )}
                </div>
                <div className="text-[10.5px] text-slate-400 font-medium">Choose your target role</div>
              </div>
            </button>

            <div
              className={`hidden sm:block h-px flex-1 mx-1 transition-colors ${
                isStep2Complete && activeStep > 2 ? 'bg-emerald-300' : 'bg-purple-200/70'
              }`}
            />

            {/* Step 3: AI Scan & Match */}
            <button
              type="button"
              onClick={() => handleNavigateStep(3)}
              aria-disabled={!isStep2Complete}
              className={`flex items-center gap-2.5 text-left shrink-0 group ${
                isStep2Complete ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'
              }`}
            >
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors shrink-0 ${
                  activeStep === 3
                    ? 'bg-[#6D28D9] text-white shadow-xs ring-2 ring-[#6D28D9]/20'
                    : 'bg-[#EDE9FE]/80 text-slate-400'
                }`}
              >
                3
              </span>
              <div className="leading-tight">
                <div
                  className={`text-xs sm:text-[13px] font-bold ${
                    activeStep === 3
                      ? 'text-[#6D28D9]'
                      : isStep2Complete
                      ? 'text-slate-600 group-hover:text-[#6D28D9]'
                      : 'text-slate-400'
                  }`}
                >
                  AI Scan &amp; Match
                </div>
                <div className="text-[10.5px] text-slate-400 font-medium">Analyze and get your ATS score</div>
              </div>
            </button>
          </div>

          {/* Accessible Native File Input (sr-only for 100% browser compatibility) */}
          <input
            id="ats-resume-upload-input"
            ref={fileInputRef}
            type="file"
            accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="sr-only"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setStepValidationHint(null);
                onFileProcess(file);
              }
              // Reset input so re-selecting the same file always triggers onChange
              e.target.value = '';
            }}
          />

          {/* Brief Upload Confirmation Banner */}
          {uploadSuccessMsg && (
            <div className="px-3.5 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{uploadSuccessMsg}</span>
            </div>
          )}

          {/* Error / Validation Banner if Any */}
          {errorMsg && (
            <div className="px-3.5 py-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* ── ACTIVE STEP CONTENT (ONLY ONE STEP VISIBLE AT A TIME) ── */}
          {activeStep === 1 && (
            <div
              onDrop={(e) => {
                setStepValidationHint(null);
                onDrop(e);
              }}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onClick={() => {
                if (!uploadedFile && !isExtracting) {
                  fileInputRef.current?.click();
                }
              }}
              className={`flex-1 min-h-[215px] rounded-2xl border-2 border-dashed p-6 flex flex-col items-center justify-center text-center transition-colors ${
                isDragging
                  ? 'border-[#6D28D9] bg-[#F5F3FF]'
                  : uploadedFile
                  ? 'border-emerald-300 bg-emerald-50/30'
                  : 'border-purple-200 bg-[#FAF9FF] hover:border-[#7C3AED] hover:bg-[#F5F3FF]/60 cursor-pointer'
              }`}
            >
              {isExtracting ? (
                <div className="space-y-2.5 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center animate-pulse">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#111827]">
                    Validating &amp; reading your resume...
                  </div>
                  <div className="text-xs text-slate-500">
                    Checking file format, size, and extractable text
                  </div>
                </div>
              ) : uploadedFile ? (
                <div className="space-y-3 max-w-md w-full">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 truncate">
                      {uploadedFile.name}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {(uploadedFile.size / 1024).toFixed(0)} KB •{' '}
                      {uploadSuccessMsg ? 'Uploaded successfully — opening Step 2...' : 'Resume verified & ready'}
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2.5 flex-wrap pt-1">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigateStep(2);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white text-xs sm:text-sm font-semibold shadow-xs transition cursor-pointer inline-flex items-center gap-1.5"
                    >
                      <span>Continue to Job Role</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <label
                      htmlFor="ats-resume-upload-input"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition cursor-pointer"
                    >
                      Replace File
                    </label>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveFile();
                      }}
                      className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-rose-50 text-slate-500 hover:text-rose-600 transition cursor-pointer"
                      title="Remove file"
                      aria-label="Remove file"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center mb-1">
                    <UploadCloud className="w-7 h-7" />
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#111827]">
                    Drag &amp; drop your resume here
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium">
                    or click to browse
                  </div>
                  <div className="text-xs text-slate-400 font-normal">
                    Supports PDF, DOCX &nbsp;•&nbsp; Max file size: 5 MB
                  </div>
                  <label
                    htmlFor="ats-resume-upload-input"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-3 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white text-xs sm:text-sm font-semibold shadow-sm transition cursor-pointer inline-flex items-center gap-2"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Choose File</span>
                  </label>
                </div>
              )}
            </div>
          )}

          {activeStep === 2 && (
            <div className="flex-1 min-h-[215px] rounded-2xl border border-[#E9E5F5] bg-[#FAF9FF] p-4 sm:p-5 flex flex-col justify-between gap-3">
              <div className="space-y-3">
                {/* Compact Uploaded Resume Confirmation Strip */}
                {uploadedFile && (
                  <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-white border border-emerald-200/80 text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-semibold text-slate-800 truncate">{uploadedFile.name}</span>
                      <span className="text-[11px] text-slate-400 shrink-0">
                        ({(uploadedFile.size / 1024).toFixed(0)} KB)
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleNavigateStep(1)}
                      className="text-[11px] font-semibold text-[#6D28D9] hover:underline shrink-0 cursor-pointer"
                    >
                      Replace
                    </button>
                  </div>
                )}

                {/* Select Job Role Dropdown + Search */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label
                      htmlFor="ats-target-role-select"
                      className="block text-xs font-bold text-slate-900 mb-1"
                    >
                      Select Job Role <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="ats-target-role-select"
                      value={selectedRole}
                      onChange={(e) => {
                        setStepValidationHint(null);
                        onSelectRole(e.target.value);
                      }}
                      className="w-full px-3 py-2 rounded-xl border border-[#E9E5F5] bg-white text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#6D28D9] cursor-pointer"
                    >
                      <option value="">-- Choose your target job role --</option>
                      {TARGET_JOB_ROLES.map((role) => (
                        <option key={role.id} value={role.id}>
                          {role.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="ats-role-search-input"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Quick Filter ({TARGET_JOB_ROLES.length} roles)
                    </label>
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        id="ats-role-search-input"
                        type="text"
                        value={roleSearch}
                        onChange={(e) => setRoleSearch(e.target.value)}
                        placeholder="Search job role..."
                        className="w-full pl-8 pr-3 py-2 rounded-xl border border-[#E9E5F5] bg-white text-xs text-slate-800 focus:outline-none focus:border-[#6D28D9]"
                      />
                    </div>
                  </div>
                </div>

                {/* Quick-Select Role Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[88px] overflow-y-auto pr-1">
                  {filteredRoles.map((role) => {
                    const isSelected = role.id === selectedRole;
                    return (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => {
                          setStepValidationHint(null);
                          onSelectRole(role.id);
                        }}
                        className={`px-3 py-1.5 rounded-xl border text-left text-xs font-semibold transition cursor-pointer truncate ${
                          isSelected
                            ? 'bg-[#6D28D9] text-white border-[#6D28D9] shadow-2xs'
                            : 'bg-white text-slate-700 border-[#E9E5F5] hover:border-purple-300 hover:bg-purple-50/50'
                        }`}
                      >
                        {role.name}
                      </button>
                    );
                  })}
                </div>

                {/* Target Job Description (Optional) */}
                <div>
                  <label
                    htmlFor="ats-custom-jd-textarea"
                    className="block text-xs font-bold text-slate-700 mb-1"
                  >
                    Target Job Description <span className="font-normal text-slate-400">(Optional)</span>
                  </label>
                  <textarea
                    id="ats-custom-jd-textarea"
                    value={customJobDesc}
                    onChange={(e) => onCustomJobDescChange(e.target.value)}
                    placeholder="Optional: Paste a specific Job Description for tailored keyword matching..."
                    className="w-full h-14 p-2.5 rounded-xl border border-[#E9E5F5] bg-white text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#6D28D9] resize-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => handleNavigateStep(1)}
                  className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleNavigateStep(3)}
                  disabled={!isStep2Complete}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition cursor-pointer disabled:opacity-45 disabled:cursor-not-allowed"
                >
                  <span>Continue to Scan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="flex-1 min-h-[215px] rounded-2xl border border-[#E9E5F5] bg-[#FAF9FF] p-5 flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="text-center">
                  <h3 className="text-sm sm:text-base font-bold text-[#111827] m-0">
                    Ready to Analyze Your Resume
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 m-0">
                    Review your details below and click <strong>Scan My Resume</strong> to run the ATS check.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full text-left">
                  <div className="p-3 rounded-xl bg-white border border-[#E9E5F5]">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Uploaded Resume
                    </div>
                    <div className="text-xs font-bold text-slate-900 truncate mt-1" title={uploadedFile?.name}>
                      {uploadedFile ? uploadedFile.name : 'No file uploaded'}
                    </div>
                    {uploadedFile && (
                      <div className="text-[10.5px] text-slate-400 mt-0.5">
                        {(uploadedFile.size / 1024).toFixed(0)} KB
                      </div>
                    )}
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-[#E9E5F5]">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Selected Job Role
                    </div>
                    <div className="text-xs font-bold text-[#6D28D9] truncate mt-1">
                      {activeRoleObj ? activeRoleObj.name : 'Not selected'}
                    </div>
                    <div className="text-[10.5px] text-slate-400 mt-0.5">
                      Role benchmark active
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-[#E9E5F5]">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Job Description
                    </div>
                    <div className="text-xs font-bold text-slate-800 truncate mt-1">
                      {jdWordCount > 0 ? `Provided (${jdWordCount} words)` : 'Optional — Not provided'}
                    </div>
                    <div className="text-[10.5px] text-slate-400 mt-0.5">
                      {jdWordCount > 0 ? 'Tailored JD matching' : 'Standard role matching'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 flex-wrap pt-1">
                <button
                  type="button"
                  onClick={() => handleNavigateStep(2)}
                  disabled={isAnalyzing}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Job Role</span>
                </button>

                <button
                  type="button"
                  onClick={onScanClick}
                  disabled={isAnalyzing || isExtracting || !isStep2Complete}
                  className="px-7 py-2.5 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white text-xs sm:text-sm font-semibold shadow-sm transition cursor-pointer inline-flex items-center gap-2 disabled:opacity-45 disabled:cursor-not-allowed"
                >
                  <span>{isAnalyzing ? 'Scanning Resume...' : 'Scan My Resume'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Bottom Mint-Green Security Bar */}
          <div className="rounded-xl bg-[#ECFDF5] border border-emerald-200/80 px-4 py-2.5 flex items-center justify-center gap-2 text-xs font-medium text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Your data is 100% secure and private. We never share your resume.</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          2. 4-FEATURE HIGHLIGHTS STRIP (Colorful Pastel Cards)
          ══════════════════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-r from-[#FAF8FF] via-white to-[#F5F3FF] rounded-2xl border border-[#E9E5F5] shadow-[0_2px_10px_rgba(109,40,217,0.04)] p-3.5 sm:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          {
            icon: <Zap className="w-5 h-5 text-amber-600" />,
            cardBg: 'bg-gradient-to-br from-[#FFFBEB] via-[#FEF9E7] to-white border-amber-200/80 hover:border-amber-300',
            iconBg: 'bg-amber-100/90 border-amber-200/70',
            titleColor: 'text-amber-950',
            title: 'Fast & Accurate',
            desc: 'Get results in seconds',
          },
          {
            icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
            cardBg: 'bg-gradient-to-br from-[#ECFDF5] via-[#F2FDF9] to-white border-emerald-200/80 hover:border-emerald-300',
            iconBg: 'bg-emerald-100/90 border-emerald-200/70',
            titleColor: 'text-emerald-950',
            title: 'Secure & Private',
            desc: 'Your data is encrypted',
          },
          {
            icon: <Target className="w-5 h-5 text-blue-600" />,
            cardBg: 'bg-gradient-to-br from-[#EFF6FF] via-[#F5F9FF] to-white border-blue-200/80 hover:border-blue-300',
            iconBg: 'bg-blue-100/90 border-blue-200/70',
            titleColor: 'text-blue-950',
            title: 'Role-Based Analysis',
            desc: 'Match with your target job',
          },
          {
            icon: <BarChart3 className="w-5 h-5 text-[#6D28D9]" />,
            cardBg: 'bg-gradient-to-br from-[#F5F3FF] via-[#FAF8FF] to-white border-purple-200/80 hover:border-purple-300',
            iconBg: 'bg-purple-100/90 border-purple-200/70',
            titleColor: 'text-purple-950',
            title: 'AI-Powered Insights',
            desc: 'Clear and actionable tips',
          },
        ].map((item) => (
          <div
            key={item.title}
            className={`flex items-center gap-3 rounded-xl border px-3.5 py-3 transition-all hover:shadow-xs ${item.cardBg}`}
          >
            <div className={`w-10 h-10 rounded-xl border ${item.iconBg} flex items-center justify-center shrink-0`}>
              {item.icon}
            </div>
            <div className="min-w-0">
              <div className={`text-xs sm:text-sm font-bold leading-tight ${item.titleColor}`}>
                {item.title}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-600 font-normal mt-0.5 truncate">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════════════════════════════════
          3. HOW IT WORKS? — 3 SIMPLE STEPS CARD (Exact Reference Match)
          ══════════════════════════════════════════════════════════════ */}
      <div className="bg-white rounded-2xl border border-[#E9E5F5] shadow-[0_2px_10px_rgba(15,23,42,0.03)] p-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
        <div className="lg:w-[210px] shrink-0">
          <h3 className="text-base sm:text-lg font-bold text-[#111827] m-0">How It Works?</h3>
          <p className="text-xs text-slate-500 font-normal mt-1 leading-relaxed m-0">
            Get your ATS resume score in just 3 simple steps.
          </p>
        </div>

        <div className="flex-1 w-full flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {[
            {
              num: 1 as const,
              icon: <FileText className="w-5 h-5 text-blue-600" />,
              title: 'Upload Your Resume',
              desc: 'Add your latest resume (PDF or DOCX).',
              cardBg: 'bg-gradient-to-br from-[#EFF6FF] via-[#F5F9FF] to-white border-blue-200/80 hover:border-blue-300',
              badgeBg: 'bg-gradient-to-r from-blue-600 to-indigo-600',
              iconBg: 'bg-blue-100/80 border-blue-200/70',
              titleColor: 'text-blue-950',
              arrowColor: 'text-blue-500',
            },
            {
              num: 2 as const,
              icon: <Briefcase className="w-5 h-5 text-[#6D28D9]" />,
              title: 'Select Job Role',
              desc: 'Choose the role you are targeting.',
              cardBg: 'bg-gradient-to-br from-[#F5F3FF] via-[#FAF8FF] to-white border-purple-200/80 hover:border-purple-300',
              badgeBg: 'bg-gradient-to-r from-[#6D28D9] to-[#7C3AED]',
              iconBg: 'bg-purple-100/80 border-purple-200/70',
              titleColor: 'text-purple-950',
              arrowColor: 'text-[#7C3AED]',
            },
            {
              num: 3 as const,
              icon: <Sparkles className="w-5 h-5 text-emerald-600" />,
              title: 'Get ATS Score & Tips',
              desc: 'See your score, matched skills and improvement suggestions.',
              cardBg: 'bg-gradient-to-br from-[#ECFDF5] via-[#F2FDF9] to-white border-emerald-200/80 hover:border-emerald-300',
              badgeBg: 'bg-gradient-to-r from-emerald-600 to-teal-600',
              iconBg: 'bg-emerald-100/80 border-emerald-200/70',
              titleColor: 'text-emerald-950',
              arrowColor: 'text-emerald-500',
            },
          ].map((step, i) => (
            <React.Fragment key={step.num}>
              <button
                type="button"
                onClick={() => handleNavigateStep(step.num)}
                className={`relative flex-1 rounded-xl border px-4 py-3.5 flex items-center gap-3 text-left transition-all hover:-translate-y-0.5 hover:shadow-sm cursor-pointer ${step.cardBg}`}
              >
                <span
                  className={`absolute -top-2.5 left-10 w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center shadow-xs ${step.badgeBg}`}
                >
                  {step.num}
                </span>
                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${step.iconBg}`}
                >
                  {step.icon}
                </div>
                <div className="min-w-0">
                  <div className={`text-xs sm:text-[13px] font-bold leading-tight ${step.titleColor}`}>
                    {step.title}
                  </div>
                  <div className="text-[11px] text-slate-600 font-normal mt-0.5 leading-snug">
                    {step.desc}
                  </div>
                </div>
              </button>

              {i < 2 && (
                <ArrowRight className={`hidden md:block w-4 h-4 shrink-0 ${step.arrowColor}`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
