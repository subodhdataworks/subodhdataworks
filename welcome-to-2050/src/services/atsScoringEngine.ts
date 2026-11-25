/**
 * Deterministic, Documented ATS Resume Scoring & Analysis Engine
 * Multi-dimensional analysis: Keywords, Skills, Structure, Readability, Actionable Tips.
 */

import { RoleSkillProfile, TARGET_JOB_ROLES } from './atsJobRoles';
import { auditResumeWeaknesses, parseResumeText, ResumeWeaknessAudit } from './atsResumeOptimizer';

export interface AtsSectionAnalysis {
  name: string;
  found: boolean;
  score: number; // 0 - 100
  status: 'passed' | 'needs_improvement' | 'not_evaluated';
  feedback: string;
  weight: number;
}

export interface AtsCategoryScore {
  name: string;
  score: number;
  maxPoints: number;
  earnedPoints: number;
  weightPercent: number;
  status: 'good' | 'average' | 'poor';
}

export interface AtsAnalysisResult {
  roleId: string;
  roleName: string;
  overallScore: number; // 0 - 100
  scoreLabel: 'Needs Improvement' | 'Average Match' | 'Good Match' | 'Strong Match' | 'Exceptional Match';
  scoreColor: string;
  summaryText: string;

  // Skills & Keywords Breakdown (Deduplicated, Normalized)
  skillsFound: string[];
  missingSkills: string[];
  requiredSkillsFound: string[];
  requiredSkillsMissing: string[];
  recommendedSkillsFound: string[];
  recommendedSkillsMissing: string[];
  matchedKeywords: string[];
  missingKeywords: string[];

  // Category Scores (Weights sum to 100%)
  categories: {
    skillsMatch: AtsCategoryScore;       // 40%
    keywordCoverage: AtsCategoryScore;   // 25%
    resumeStructure: AtsCategoryScore;   // 20%
    readabilityAndImpact: AtsCategoryScore; // 15%
  };

  // Section Checks
  sections: AtsSectionAnalysis[];

  // Actionable Suggestions (prioritized)
  quickSuggestions: string[];

  // Detailed tab feedback
  detailedImprovementTips: {
    priority: 'high' | 'medium' | 'low';
    title: string;
    description: string;
    action: string;
  }[];

  metadata: {
    wordCount: number;
    charCount: number;
    hasJobDescription: boolean;
    analysisTimestamp: string;
    isoTimestamp: string;
  };

  // Deep Semantic Resume Weaknesses Audit (Actual lines extracted from resume)
  weaknesses: ResumeWeaknessAudit;
}

/**
 * Verified industry skill aliases & standard abbreviations
 */
const SKILL_ALIASES: Record<string, string[]> = {
  'sql': ['mysql', 'postgresql', 'postgres', 't-sql', 'tsql', 'pl/sql', 'sqlite', 'mssql', 'sql server'],
  'excel': ['ms excel', 'microsoft excel', 'spreadsheets', 'google sheets'],
  'power bi': ['powerbi', 'power-bi'],
  'data visualization': ['data viz', 'visualizations', 'data visualizations'],
  'exploratory data analysis': ['eda'],
  'machine learning': ['ml'],
  'artificial intelligence': ['ai'],
  'deep learning': ['dl'],
  'natural language processing': ['nlp'],
  'javascript': ['js', 'es6', 'ecmascript'],
  'typescript': ['ts'],
  'react': ['reactjs', 'react.js'],
  'node.js': ['nodejs', 'node js'],
  'next.js': ['nextjs', 'next js'],
  'rest apis': ['rest api', 'restful api', 'restful apis', 'restful'],
  'oop': ['object oriented programming', 'object-oriented programming', 'oops'],
  'data structures': ['dsa', 'data structures and algorithms', 'data structures & algorithms'],
  'ci/cd': ['cicd', 'ci cd', 'continuous integration', 'continuous deployment'],
  'aws': ['amazon web services'],
  'gcp': ['google cloud', 'google cloud platform'],
  'kpi': ['kpis', 'key performance indicator', 'key performance indicators'],
  'uat': ['user acceptance testing'],
  'user acceptance testing': ['uat'],
  'brd': ['business requirements document'],
  'frd': ['functional requirements document'],
  'etl': ['extract transform load', 'data pipeline', 'data pipelines'],
  'a/b testing': ['ab testing', 'split testing', 'hypothesis testing'],
  'git': ['github', 'gitlab', 'version control'],
  'docker': ['containerization', 'containers'],
  'kubernetes': ['k8s'],
  'c++': ['cpp'],
  'c#': ['csharp'],
  'mongodb': ['mongo'],
  'html': ['html5'],
  'css': ['css3'],
  'tailwind css': ['tailwindcss', 'tailwind'],
  'scikit-learn': ['sklearn', 'scikit learn'],
  'tensorflow': ['tf'],
  'pivot table': ['pivot tables'],
  'vlookup': ['v-lookup'],
  'xlookup': ['x-lookup'],
};

/**
 * Clean & normalize text for regex / token matching
 */
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s\+\#\.\-\/]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

/**
 * Deduplicate an array of terms case-insensitively while preserving order & canonical casing
 */
const dedupeTerms = (terms: string[], excludeLower?: Set<string>): string[] => {
  const seen = new Set<string>(excludeLower ? Array.from(excludeLower) : []);
  const out: string[] = [];
  for (const t of terms) {
    const clean = t.trim();
    const key = clean.toLowerCase();
    if (clean && !seen.has(key)) {
      seen.add(key);
      out.push(clean);
    }
  }
  return out;
};

/**
 * Test a single normalized term with boundary awareness (handles C++, C#, .NET, Node.js, CI/CD)
 */
const matchSingleTerm = (normalizedDoc: string, rawTerm: string): boolean => {
  const normTerm = rawTerm.toLowerCase().trim();
  if (!normTerm) return false;

  const escaped = normTerm.replace(/[-[\]{}()*+?.,\\^$|#\s/]/g, '\\$&');
  const suffix = /^[a-z0-9\s-]+$/.test(normTerm) && normTerm.length >= 4 ? '(?:s|es|ed|ing)?' : '';
  const regex = new RegExp(`(?:^|[\\s,;/|()])${escaped}${suffix}(?:$|[\\s,;/|().])`, 'i');
  return regex.test(normalizedDoc);
};

/**
 * Check if a term or any of its verified industry aliases exists in the resume
 */
const containsTerm = (normalizedDoc: string, rawTerm: string): boolean => {
  const key = rawTerm.toLowerCase().trim();
  if (!key) return false;
  if (matchSingleTerm(normalizedDoc, key)) return true;

  const aliases = SKILL_ALIASES[key];
  if (aliases && aliases.length > 0) {
    return aliases.some((alias) => matchSingleTerm(normalizedDoc, alias));
  }
  return false;
};

/**
 * Extract meaningful, non-generic keywords from an optional supplied job description
 */
const extractKeywordsFromJobDescription = (jdText: string): string[] => {
  if (!jdText || jdText.trim().length < 20) return [];
  const normalized = normalizeText(jdText);
  const words = normalized.split(/\s+/);

  const stopWords = new Set([
    'and', 'the', 'for', 'with', 'you', 'will', 'are', 'our', 'this', 'that',
    'have', 'from', 'your', 'about', 'team', 'work', 'working', 'must', 'able',
    'years', 'experience', 'candidate', 'responsibilities', 'qualifications',
    'role', 'job', 'skills', 'good', 'strong', 'knowledge', 'plus', 'preferred',
    'looking', 'seeking', 'company', 'business', 'using', 'used', 'build', 'building',
    'based', 'daily', 'across', 'within', 'including', 'required', 'requirements',
    'opportunity', 'position', 'apply', 'salary', 'benefits', 'location', 'remote',
    'hybrid', 'onsite', 'full', 'time', 'part', 'level', 'senior', 'junior', 'entry',
    'excellent', 'great', 'high', 'quality', 'ability', 'ensure', 'support', 'help',
    'collaborate', 'communication', 'written', 'verbal', 'detail', 'oriented', 'also',
    'such', 'well', 'both', 'other', 'into', 'over', 'more', 'most', 'some', 'many',
    'their', 'they', 'them', 'what', 'when', 'where', 'which', 'who', 'should', 'would',
    'could', 'need', 'needs', 'make', 'making', 'take', 'taking', 'give', 'given',
  ]);

  const freq = new Map<string, number>();
  for (const w of words) {
    const clean = w.replace(/^\.+|\.+$/g, '');
    if (clean.length >= 3 && !stopWords.has(clean) && !/^\d+$/.test(clean)) {
      freq.set(clean, (freq.get(clean) || 0) + 1);
    }
  }

  return Array.from(freq.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([word]) => word)
    .slice(0, 12);
};

/**
 * Inspect whether a resume has a genuine section heading and extract its body text
 */
const extractSectionSlice = (
  lines: string[],
  headingRegex: RegExp,
  allHeadingRegex: RegExp
): { hasHeading: boolean; bodyLines: string[]; bodyWordCount: number } => {
  let startIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].replace(/[:\-–—|•]+$/g, '').trim();
    if (line.length > 0 && line.length <= 55 && headingRegex.test(line)) {
      startIdx = i;
      break;
    }
  }

  if (startIdx === -1) {
    return { hasHeading: false, bodyLines: [], bodyWordCount: 0 };
  }

  const bodyLines: string[] = [];
  for (let j = startIdx + 1; j < lines.length; j++) {
    const candidate = lines[j].replace(/[:\-–—|•]+$/g, '').trim();
    if (candidate.length > 0 && candidate.length <= 55 && allHeadingRegex.test(candidate)) {
      break;
    }
    bodyLines.push(lines[j]);
    if (bodyLines.length >= 30) break;
  }

  const bodyWordCount = bodyLines
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;

  return { hasHeading: true, bodyLines, bodyWordCount };
};

/**
 * Core ATS Scoring and Analysis Function
 */
export const analyzeResumeContent = (
  resumeText: string,
  targetRoleId: string,
  customJobDescription?: string
): AtsAnalysisResult => {
  // Always respect the exact job role selected by the student
  const role =
    TARGET_JOB_ROLES.find((r) => r.id === targetRoleId) || TARGET_JOB_ROLES[0];

  const normResume = normalizeText(resumeText);
  const lines = resumeText
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  // 1. SKILLS ANALYSIS (Deduplicated & Alias-Aware)
  const requiredSkillsList = dedupeTerms(role.requiredSkills);
  const reqLowerSet = new Set(requiredSkillsList.map((s) => s.toLowerCase()));
  const recommendedSkillsList = dedupeTerms(role.recommendedSkills, reqLowerSet);

  const requiredSkillsFound: string[] = [];
  const requiredSkillsMissing: string[] = [];
  for (const skill of requiredSkillsList) {
    if (containsTerm(normResume, skill)) {
      requiredSkillsFound.push(skill);
    } else {
      requiredSkillsMissing.push(skill);
    }
  }

  const recommendedSkillsFound: string[] = [];
  const recommendedSkillsMissing: string[] = [];
  for (const skill of recommendedSkillsList) {
    if (containsTerm(normResume, skill)) {
      recommendedSkillsFound.push(skill);
    } else {
      recommendedSkillsMissing.push(skill);
    }
  }

  const skillsFound = [...requiredSkillsFound, ...recommendedSkillsFound];
  const missingSkills = [...requiredSkillsMissing, ...recommendedSkillsMissing];

  // Weight required skills heavier (70% required, 30% recommended)
  const reqRatio = requiredSkillsList.length > 0 ? requiredSkillsFound.length / requiredSkillsList.length : 0;
  const recRatio = recommendedSkillsList.length > 0 ? recommendedSkillsFound.length / recommendedSkillsList.length : 0;
  const skillsScore = Math.round((reqRatio * 0.7 + recRatio * 0.3) * 100);

  // 2. JOB KEYWORD COVERAGE ANALYSIS (Deduplicated against Skills & Case-Insensitive)
  const allSkillsLower = new Set([...requiredSkillsList, ...recommendedSkillsList].map((s) => s.toLowerCase()));
  const hasJobDescription = Boolean(customJobDescription && customJobDescription.trim().length > 20);
  const customJdKeywords = hasJobDescription
    ? extractKeywordsFromJobDescription(customJobDescription || '')
    : [];

  // Deduplicate role keywords & custom JD keywords so no skill/keyword is counted twice
  const targetKeywords = dedupeTerms([...role.keywords, ...customJdKeywords], allSkillsLower);

  const matchedKeywords: string[] = [];
  const missingKeywords: string[] = [];

  for (const kw of targetKeywords) {
    if (containsTerm(normResume, kw)) {
      matchedKeywords.push(kw);
    } else {
      missingKeywords.push(kw);
    }
  }

  const kwTotal = targetKeywords.length;
  const kwScore = kwTotal > 0 ? Math.round((matchedKeywords.length / kwTotal) * 100) : 0;

  // 3. GENUINE EVIDENCE-BASED ATS FORMATTING & SECTION CHECKS
  const allHeadingRegex =
    /^(?:contact|summary|professional summary|career objective|objective|profile|about me|skills|technical skills|core competencies|technologies|tools(?: & technologies)?|key skills|experience|work experience|professional experience|employment(?: history)?|work history|internships?|projects|key projects|academic projects|personal projects|case studies|selected projects|education|academic background|qualifications|certifications?|awards|achievements|publications|languages)\b/i;

  const sectionResults: AtsSectionAnalysis[] = [];

  // 3a. Contact Information (weight 20)
  const hasEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(resumeText);
  const hasPhone = /(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{3,5}\)?[-.\s]?)?\d{3,5}[-.\s]?\d{4,5}/.test(resumeText);
  const hasProfileLink = /(?:linkedin\.com|github\.com|gitlab\.com|portfolio|behance\.net|kaggle\.com|medium\.com)/i.test(resumeText);
  let contactScore = 0;
  let contactFeedback = '';
  if (hasEmail && hasPhone && hasProfileLink) {
    contactScore = 100;
    contactFeedback = 'Email address, phone number, and a professional profile link (LinkedIn/GitHub) were detected.';
  } else if (hasEmail && hasPhone) {
    contactScore = 80;
    contactFeedback = 'Email and phone number detected. Adding a LinkedIn or GitHub profile link improves recruiter verification.';
  } else if (hasEmail || hasPhone) {
    contactScore = 50;
    contactFeedback = hasEmail
      ? 'Email address detected, but no phone number was found in the parsed text.'
      : 'Phone number detected, but no email address was found in the parsed text.';
  } else {
    contactScore = 0;
    contactFeedback = 'Neither an email address nor a phone number was detected in the resume.';
  }
  sectionResults.push({
    name: 'Contact Information',
    found: hasEmail || hasPhone,
    score: contactScore,
    status: contactScore >= 80 ? 'passed' : 'needs_improvement',
    feedback: contactFeedback,
    weight: 20,
  });

  // 3b. Professional Summary / Objective (weight 15)
  const summarySlice = extractSectionSlice(
    lines,
    /^(?:professional summary|summary|career objective|objective|profile summary|about me)\b/i,
    allHeadingRegex
  );
  let summaryScore = 0;
  let summaryFeedback = '';
  if (summarySlice.hasHeading && summarySlice.bodyWordCount >= 18 && summarySlice.bodyWordCount <= 130) {
    summaryScore = 100;
    summaryFeedback = `Dedicated summary section detected (${summarySlice.bodyWordCount} words) with concise role context.`;
  } else if (summarySlice.hasHeading && summarySlice.bodyWordCount > 130) {
    summaryScore = 70;
    summaryFeedback = `Summary section detected (${summarySlice.bodyWordCount} words), but it is longer than recommended (keep to 2–4 concise lines).`;
  } else if (summarySlice.hasHeading) {
    summaryScore = 50;
    summaryFeedback = 'Summary heading detected, but the description is too brief to clearly state your target role and strengths.';
  } else {
    summaryScore = 0;
    summaryFeedback = 'No dedicated Professional Summary or Objective heading was detected.';
  }
  sectionResults.push({
    name: 'Professional Summary / Objective',
    found: summarySlice.hasHeading,
    score: summaryScore,
    status: summaryScore >= 80 ? 'passed' : 'needs_improvement',
    feedback: summaryFeedback,
    weight: 15,
  });

  // 3c. Skills Section (weight 25)
  const skillsSlice = extractSectionSlice(
    lines,
    /^(?:technical skills|skills|core competencies|technologies|tools(?: & technologies)?|key skills)\b/i,
    allHeadingRegex
  );
  const skillsBodyText = skillsSlice.bodyLines.join(' ');
  const skillItemCount = skillsBodyText
    ? skillsBodyText.split(/[,|•·;\n]+/).map((s) => s.trim()).filter((s) => s.length >= 2).length
    : 0;
  let skillsSecScore = 0;
  let skillsSecFeedback = '';
  if (skillsSlice.hasHeading && (skillItemCount >= 5 || skillsSlice.bodyWordCount >= 12)) {
    skillsSecScore = 100;
    skillsSecFeedback = 'Dedicated Skills section detected with clearly listed technical tools and competencies.';
  } else if (skillsSlice.hasHeading) {
    skillsSecScore = 55;
    skillsSecFeedback = 'Skills heading detected, but very few skills are listed under it. Group relevant tools clearly.';
  } else if (skillsFound.length >= 3) {
    skillsSecScore = 40;
    skillsSecFeedback = 'Skills appear in body text, but no dedicated "Technical Skills" section heading was detected.';
  } else {
    skillsSecScore = 0;
    skillsSecFeedback = 'No dedicated Skills section detected. ATS parsers rely on an explicit Skills heading.';
  }
  sectionResults.push({
    name: 'Skills Section',
    found: skillsSlice.hasHeading,
    score: skillsSecScore,
    status: skillsSecScore >= 80 ? 'passed' : 'needs_improvement',
    feedback: skillsSecFeedback,
    weight: 25,
  });

  // 3d. Work Experience / Internships (weight 20)
  const expSlice = extractSectionSlice(
    lines,
    /^(?:work experience|professional experience|experience|employment(?: history)?|work history|internships?)\b/i,
    allHeadingRegex
  );
  const expText = expSlice.bodyLines.join(' ');
  const expHasDates = /(?:19|20)\d{2}|present|current|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/i.test(expText);
  let expScore = 0;
  let expFeedback = '';
  if (expSlice.hasHeading && expSlice.bodyWordCount >= 25 && expHasDates) {
    expScore = 100;
    expFeedback = 'Work Experience / Internship section detected with dates and descriptive role details.';
  } else if (expSlice.hasHeading && expSlice.bodyWordCount >= 12) {
    expScore = 65;
    expFeedback = expHasDates
      ? 'Experience section detected, but bullet descriptions are brief. Add more specific responsibilities and outcomes.'
      : 'Experience heading detected, but clear employment dates (e.g., Jan 2023 – Present) were not detected.';
  } else if (expSlice.hasHeading) {
    expScore = 40;
    expFeedback = 'Experience heading detected, but very little supporting detail was parsed underneath it.';
  } else {
    expScore = 0;
    expFeedback = 'No dedicated Work Experience or Internships heading detected.';
  }
  sectionResults.push({
    name: 'Work Experience / Internships',
    found: expSlice.hasHeading,
    score: expScore,
    status: expScore >= 80 ? 'passed' : 'needs_improvement',
    feedback: expFeedback,
    weight: 20,
  });

  // 3e. Projects & Case Studies (weight 15)
  const projSlice = extractSectionSlice(
    lines,
    /^(?:projects|key projects|academic projects|personal projects|case studies|selected projects)\b/i,
    allHeadingRegex
  );
  let projScore = 0;
  let projFeedback = '';
  if (projSlice.hasHeading && projSlice.bodyWordCount >= 22) {
    projScore = 100;
    projFeedback = 'Dedicated Projects section detected with substantive project descriptions.';
  } else if (projSlice.hasHeading) {
    projScore = 55;
    projFeedback = 'Projects heading detected, but descriptions are brief. Explain tools used and measurable results.';
  } else {
    projScore = 0;
    projFeedback = 'No dedicated Projects section heading detected. Adding 2–3 relevant projects improves role alignment.';
  }
  sectionResults.push({
    name: 'Projects & Case Studies',
    found: projSlice.hasHeading,
    score: projScore,
    status: projScore >= 80 ? 'passed' : 'needs_improvement',
    feedback: projFeedback,
    weight: 15,
  });

  // 3f. Education & Certifications (weight 15)
  const eduSlice = extractSectionSlice(
    lines,
    /^(?:education|academic background|qualifications|certifications?)\b/i,
    allHeadingRegex
  );
  const degreeEvidence = /\b(?:b\.?tech|b\.?e\.?|b\.?sc|bca|mca|mba|m\.?tech|bachelor|master|ph\.?d|diploma|university|college|institute)\b/i.test(
    eduSlice.hasHeading ? eduSlice.bodyLines.join(' ') : resumeText
  );
  let eduScore = 0;
  let eduFeedback = '';
  if (eduSlice.hasHeading && degreeEvidence) {
    eduScore = 100;
    eduFeedback = 'Education section detected with degree or institution details.';
  } else if (eduSlice.hasHeading) {
    eduScore = 60;
    eduFeedback = 'Education heading detected, but degree name or institution details were unclear.';
  } else if (degreeEvidence) {
    eduScore = 55;
    eduFeedback = 'Degree or institution keywords detected, but use a standard "Education" heading for reliable ATS parsing.';
  } else {
    eduScore = 0;
    eduFeedback = 'No Education or Certifications section detected.';
  }
  sectionResults.push({
    name: 'Education & Certifications',
    found: eduSlice.hasHeading || degreeEvidence,
    score: eduScore,
    status: eduScore >= 80 ? 'passed' : 'needs_improvement',
    feedback: eduFeedback,
    weight: 15,
  });

  const structureTotalWeight = sectionResults.reduce((sum, s) => sum + s.weight, 0);
  const structureEarned = sectionResults.reduce((sum, s) => sum + (s.score * s.weight) / 100, 0);
  const structureScore = structureTotalWeight > 0 ? Math.round((structureEarned / structureTotalWeight) * 100) : 0;

  // 4. READABILITY & IMPACT METRICS (Evidence-based, 0–100)
  const words = resumeText.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  const metricMatches =
    resumeText.match(/\b(?:\d+(?:\.\d+)?[%xX+]|\$\d[\d,.]*|\d+\s*(?:lpa|users|k|m|million|records|clients|hours|days))\b/gi) || [];
  const actionVerbMatches =
    resumeText.match(/\b(?:built|developed|designed|implemented|optimized|analyzed|created|led|reduced|increased|automated|deployed|launched|engineered|streamlined|delivered|managed|collaborated|improved)\b/gi) || [];
  const bulletLines = lines.filter((l) => /^[-•*▪‣]/.test(l)).length;

  let readabilityScore = 0;
  if (wordCount === 0) {
    readabilityScore = 0;
  } else {
    // Word count appropriateness (up to 35 pts)
    if (wordCount >= 250 && wordCount <= 1100) readabilityScore += 35;
    else if (wordCount >= 150 && wordCount <= 1400) readabilityScore += 25;
    else if (wordCount >= 80) readabilityScore += 12;
    else readabilityScore += 5;

    // Quantifiable impact metrics (up to 30 pts)
    if (metricMatches.length >= 4) readabilityScore += 30;
    else if (metricMatches.length >= 2) readabilityScore += 20;
    else if (metricMatches.length === 1) readabilityScore += 10;

    // Action verbs (up to 20 pts)
    if (actionVerbMatches.length >= 5) readabilityScore += 20;
    else if (actionVerbMatches.length >= 2) readabilityScore += 12;
    else if (actionVerbMatches.length >= 1) readabilityScore += 6;

    // Scannable bullet structure (up to 15 pts)
    if (bulletLines >= 4) readabilityScore += 15;
    else if (bulletLines >= 1) readabilityScore += 8;
  }
  readabilityScore = Math.max(0, Math.min(100, readabilityScore));

  // 5. DETERMINISTIC WEIGHTED OVERALL SCORE (Exact match with documented category weights)
  // Weights: Skills (40%), Keywords (25%), Structure (20%), Readability (15%) = 100%
  const rawWeightedScore =
    skillsScore * 0.4 +
    kwScore * 0.25 +
    structureScore * 0.2 +
    readabilityScore * 0.15;

  const overallScore = Math.max(0, Math.min(100, Math.round(rawWeightedScore)));

  // Score label & color
  let scoreLabel: AtsAnalysisResult['scoreLabel'] = 'Good Match';
  let scoreColor = '#10b981';

  if (overallScore >= 85) {
    scoreLabel = 'Exceptional Match';
    scoreColor = '#059669';
  } else if (overallScore >= 75) {
    scoreLabel = 'Good Match';
    scoreColor = '#10b981';
  } else if (overallScore >= 55) {
    scoreLabel = 'Average Match';
    scoreColor = '#f59e0b';
  } else {
    scoreLabel = 'Needs Improvement';
    scoreColor = '#ef4444';
  }

  // Transparent summary text
  const summaryText =
    overallScore >= 75
      ? `Your resume shows strong alignment with the ${role.name} role${hasJobDescription ? ' and supplied job description' : ''}. Review the remaining gaps below to refine it further.`
      : overallScore >= 55
      ? `Your resume covers core fundamentals for ${role.name}, but strengthening missing role skills and measurable impact can improve ATS compatibility.`
      : `Your resume currently has notable keyword, skill, or section gaps for the ${role.name} role. Address the high-priority items below first.`;

  // 6. GENERATE QUICK SUGGESTIONS (Based on actual findings)
  const quickSuggestions: string[] = [];

  if (requiredSkillsMissing.length > 0) {
    const topMissing = requiredSkillsMissing.slice(0, 2).join(' and ');
    quickSuggestions.push(`If you have experience with ${topMissing}, highlight them explicitly in your Skills and Projects sections.`);
  }

  if (missingKeywords.length > 0) {
    quickSuggestions.push(
      hasJobDescription
        ? 'Align your bullet points with relevant terminology from your target job description.'
        : `Incorporate relevant ${role.name} terminology where it accurately reflects your work.`
    );
  }

  if (metricMatches.length < 2) {
    quickSuggestions.push('Add measurable outcomes where possible (e.g., time saved, accuracy gained, or dataset scale).');
  }

  const weakSections = sectionResults.filter((s) => s.status !== 'passed');
  if (weakSections.length > 0) {
    quickSuggestions.push(`Strengthen resume formatting for: ${weakSections.slice(0, 2).map((s) => s.name).join(', ')}.`);
  }

  // 7. DETAILED IMPROVEMENT TIPS (Derived directly from actual findings, never fabricated)
  const detailedImprovementTips: AtsAnalysisResult['detailedImprovementTips'] = [];

  if (requiredSkillsMissing.length > 0) {
    detailedImprovementTips.push({
      priority: 'high',
      title: `Core ${role.name} Skills Not Detected (${requiredSkillsMissing.slice(0, 3).join(', ')})`,
      description: `These required skills for ${role.name} were not found in your parsed resume text. ATS filters prioritize core role skills heavily.`,
      action: 'If you genuinely have hands-on experience or completed coursework with these tools, add them to your Skills section and reference them in a project bullet.',
    });
  }

  if (metricMatches.length < 3) {
    detailedImprovementTips.push({
      priority: 'high',
      title: 'Quantify Accomplishments with Measurable Results',
      description: `Only ${metricMatches.length} measurable metric${metricMatches.length === 1 ? '' : 's'} ${metricMatches.length === 1 ? 'was' : 'were'} detected. Quantified impact helps recruiters evaluate scope and outcomes.`,
      action: 'Where supported by your actual work, include concrete figures (e.g., percentage improvements, records processed, or time saved).',
    });
  }

  if (weakSections.length > 0) {
    detailedImprovementTips.push({
      priority: structureScore < 70 ? 'high' : 'medium',
      title: `Improve Resume Section Structure (${weakSections.slice(0, 3).map((s) => s.name).join(', ')})`,
      description: 'ATS parsers look for standard headings and clear supporting details (such as dates, contact info, and organized skills) to index your resume accurately.',
      action: weakSections[0].feedback,
    });
  }

  if (wordCount < 220) {
    detailedImprovementTips.push({
      priority: 'medium',
      title: 'Add Depth to Project & Experience Descriptions',
      description: `Only ${wordCount} words were parsed from your resume, which may leave out important technical context.`,
      action: 'Expand your project or internship bullets to explain the problem solved, tools used, and your specific contribution.',
    });
  }

  if (!hasJobDescription) {
    detailedImprovementTips.push({
      priority: 'low',
      title: 'Match Against a Specific Job Description',
      description: `This analysis used the standard ${role.name} benchmark because no custom job description was provided.`,
      action: 'Paste the exact job posting in Step 2 to check alignment against a specific employer’s requirements.',
    });
  }

  const now = new Date();

  return {
    roleId: role.id,
    roleName: role.name,
    overallScore,
    scoreLabel,
    scoreColor,
    summaryText,
    skillsFound,
    missingSkills,
    requiredSkillsFound,
    requiredSkillsMissing,
    recommendedSkillsFound,
    recommendedSkillsMissing,
    matchedKeywords,
    missingKeywords,
    categories: {
      skillsMatch: {
        name: 'Role-Specific Skills',
        score: skillsScore,
        maxPoints: 40,
        earnedPoints: Math.round((skillsScore * 40) / 100),
        weightPercent: 40,
        status: skillsScore >= 75 ? 'good' : skillsScore >= 50 ? 'average' : 'poor',
      },
      keywordCoverage: {
        name: 'Job Keyword Coverage',
        score: kwScore,
        maxPoints: 25,
        earnedPoints: Math.round((kwScore * 25) / 100),
        weightPercent: 25,
        status: kwScore >= 75 ? 'good' : kwScore >= 50 ? 'average' : 'poor',
      },
      resumeStructure: {
        name: 'Structure & Sections',
        score: structureScore,
        maxPoints: 20,
        earnedPoints: Math.round((structureScore * 20) / 100),
        weightPercent: 20,
        status: structureScore >= 80 ? 'good' : structureScore >= 60 ? 'average' : 'poor',
      },
      readabilityAndImpact: {
        name: 'Impact & Readability',
        score: readabilityScore,
        maxPoints: 15,
        earnedPoints: Math.round((readabilityScore * 15) / 100),
        weightPercent: 15,
        status: readabilityScore >= 70 ? 'good' : readabilityScore >= 50 ? 'average' : 'poor',
      },
    },
    sections: sectionResults,
    quickSuggestions,
    detailedImprovementTips,
    metadata: {
      wordCount,
      charCount: resumeText.length,
      hasJobDescription,
      analysisTimestamp: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isoTimestamp: now.toISOString(),
    },
    weaknesses: auditResumeWeaknesses(parseResumeText(resumeText), role.id),
  };
};
