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

  // Skills Breakdown
  skillsFound: string[];
  missingSkills: string[];
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
  };

  // Deep Semantic Resume Weaknesses Audit (Actual lines extracted from resume)
  weaknesses: ResumeWeaknessAudit;
}

/**
 * Clean & normalize text for regex / token matching
 */
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s\+\#\.\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

/**
 * Check if a term exists in text with word boundary awareness
 */
const containsTerm = (normalizedDoc: string, rawTerm: string): boolean => {
  const normTerm = rawTerm.toLowerCase().trim();
  if (!normTerm) return false;

  // Handle special characters like C++, C#, .NET
  const escaped = normTerm.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  const regex = new RegExp(`(?:^|\\b|\\s)${escaped}(?:s|es|ed|ing)?(?:$|\\b|\\s)`, 'i');
  return regex.test(normalizedDoc);
};

/**
 * Extract extra custom keywords from an uploaded job description
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
  ]);

  const candidateKeywords = new Set<string>();
  for (const w of words) {
    if (w.length >= 3 && !stopWords.has(w) && !/^\d+$/.test(w)) {
      candidateKeywords.add(w);
    }
  }

  return Array.from(candidateKeywords).slice(0, 15);
};

/**
 * Core ATS Scoring and Analysis Function
 */
export const analyzeResumeContent = (
  resumeText: string,
  targetRoleId: string,
  customJobDescription?: string
): AtsAnalysisResult => {
  const role =
    TARGET_JOB_ROLES.find((r) => r.id === targetRoleId) || TARGET_JOB_ROLES[0];

  const normResume = normalizeText(resumeText);
  const rawLower = resumeText.toLowerCase();

  // 1. SKILLS ANALYSIS
  const allTargetSkills = [...role.requiredSkills, ...role.recommendedSkills];
  const skillsFound: string[] = [];
  const missingSkills: string[] = [];

  for (const skill of allTargetSkills) {
    if (containsTerm(normResume, skill)) {
      skillsFound.push(skill);
    } else {
      missingSkills.push(skill);
    }
  }

  // Weight required skills heavier
  const reqFoundCount = role.requiredSkills.filter((s) => containsTerm(normResume, s)).length;
  const reqTotal = role.requiredSkills.length;
  const recFoundCount = role.recommendedSkills.filter((s) => containsTerm(normResume, s)).length;
  const recTotal = role.recommendedSkills.length;

  const reqRatio = reqTotal > 0 ? reqFoundCount / reqTotal : 0;
  const recRatio = recTotal > 0 ? recFoundCount / recTotal : 0;
  const skillsScore = Math.round((reqRatio * 0.7 + recRatio * 0.3) * 100);

  // 2. KEYWORD MATCH ANALYSIS
  let targetKeywords = [...role.keywords];
  let customJdKeywords: string[] = [];

  if (customJobDescription && customJobDescription.trim().length > 20) {
    customJdKeywords = extractKeywordsFromJobDescription(customJobDescription);
    targetKeywords = Array.from(new Set([...targetKeywords, ...customJdKeywords]));
  }

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
  const kwScore = kwTotal > 0 ? Math.round((matchedKeywords.length / kwTotal) * 100) : 75;

  // 3. RESUME SECTION COMPLETENESS
  const sectionsToCheck = [
    {
      name: 'Contact Information',
      patterns: [/@/, /\b(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/, /linkedin\.com|github\.com/],
      weight: 20,
    },
    {
      name: 'Professional Summary / Objective',
      patterns: [/summary|objective|profile|about me|professional summary/i],
      weight: 15,
    },
    {
      name: 'Skills Section',
      patterns: [/skills|technical skills|technologies|core competencies|tools/i],
      weight: 25,
    },
    {
      name: 'Work Experience / Internships',
      patterns: [/experience|work experience|employment|internship|professional experience/i],
      weight: 20,
    },
    {
      name: 'Projects & Case Studies',
      patterns: [/projects|academic projects|key projects|personal projects/i],
      weight: 15,
    },
    {
      name: 'Education & Certifications',
      patterns: [/education|degree|university|college|b\.tech|bachelor|master|certification/i],
      weight: 15,
    },
  ];

  let structureEarned = 0;
  let structureTotalWeight = 0;
  const sectionResults: AtsSectionAnalysis[] = [];

  for (const s of sectionsToCheck) {
    const isFound = s.patterns.some((pattern) => pattern.test(rawLower));
    const score = isFound ? 100 : 0;
    structureEarned += (score * s.weight) / 100;
    structureTotalWeight += s.weight;

    let feedback = '';
    if (s.name === 'Contact Information') {
      feedback = isFound
        ? 'Contact information (email, phone, or profiles) detected.'
        : 'Missing clear email, phone number, or LinkedIn / GitHub profile link.';
    } else if (s.name === 'Skills Section') {
      feedback = isFound
        ? 'Dedicated technical skills section detected.'
        : 'Missing an organized Skills section. ATS parsers look for explicit skill groupings.';
    } else if (s.name === 'Projects & Case Studies') {
      feedback = isFound
        ? 'Projects section found with relevant experience details.'
        : 'No clear Projects section found. Adding 2-3 real-world projects significantly boosts match score.';
    } else {
      feedback = isFound
        ? `${s.name} is clearly identified.`
        : `${s.name} section is missing or lacks standard heading keywords.`;
    }

    sectionResults.push({
      name: s.name,
      found: isFound,
      score,
      feedback,
      weight: s.weight,
    });
  }

  const structureScore = Math.round((structureEarned / structureTotalWeight) * 100);

  // 4. READABILITY & IMPACT METRICS
  const words = resumeText.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  // Measurable metrics (e.g. 20%, $50K, 3x, 500+ users)
  const metricMatches = resumeText.match(/\b(?:\d+[%xX+]|\$\d+|\d+\s*(?:lpa|users|k|m|million|records))\b/gi) || [];
  const actionVerbMatches = resumeText.match(/\b(?:built|developed|designed|implemented|optimized|analyzed|created|led|reduced|increased|automated|deployed|launched)\b/gi) || [];

  let readabilityScore = 70;
  if (wordCount >= 250 && wordCount <= 1200) {
    readabilityScore += 15;
  } else if (wordCount < 150) {
    readabilityScore -= 25;
  }

  if (metricMatches.length >= 3) {
    readabilityScore += 10;
  } else if (metricMatches.length === 0) {
    readabilityScore -= 10;
  }

  if (actionVerbMatches.length >= 4) {
    readabilityScore += 5;
  }

  readabilityScore = Math.max(20, Math.min(100, readabilityScore));

  // 5. DETERMINISTIC WEIGHTED OVERALL SCORE
  // Weights: Skills (40%), Keywords (25%), Structure (20%), Readability (15%)
  const rawWeightedScore =
    skillsScore * 0.4 +
    kwScore * 0.25 +
    structureScore * 0.2 +
    readabilityScore * 0.15;

  const overallScore = Math.max(15, Math.min(98, Math.round(rawWeightedScore)));

  // Score label & color matching reference
  let scoreLabel: AtsAnalysisResult['scoreLabel'] = 'Good Match';
  let scoreColor = '#10b981'; // green

  if (overallScore >= 85) {
    scoreLabel = 'Exceptional Match';
    scoreColor = '#059669';
  } else if (overallScore >= 75) {
    scoreLabel = 'Good Match';
    scoreColor = '#10b981';
  } else if (overallScore >= 60) {
    scoreLabel = 'Average Match';
    scoreColor = '#f59e0b';
  } else {
    scoreLabel = 'Needs Improvement';
    scoreColor = '#ef4444';
  }

  // Summary Text matching Reference design
  const summaryText =
    overallScore >= 75
      ? `Your resume is a good match for the ${role.name} role, but some important skills and keywords are missing.`
      : overallScore >= 60
      ? `Your resume has fundamental matches for the ${role.name} role, but adding key skills will significantly improve ATS shortlisting.`
      : `Your resume currently lacks critical keywords and formatting needed for the ${role.name} role. Follow the suggestions below to improve.`;

  // 6. GENERATE QUICK SUGGESTIONS (matching reference image style)
  const quickSuggestions: string[] = [];

  if (missingSkills.length > 0) {
    const topMissing = missingSkills.slice(0, 2).join(' or ');
    quickSuggestions.push(`Add ${topMissing} projects or certifications to strengthen your profile.`);
  }

  if (missingKeywords.length > 0) {
    quickSuggestions.push('Include relevant keywords from the job description.');
  }

  if (role.sampleProjectSuggestions.length > 0) {
    quickSuggestions.push(role.sampleProjectSuggestions[0]);
  }

  if (metricMatches.length < 2) {
    quickSuggestions.push('Highlight achievements with numbers (e.g., improved reporting speed by 30%).');
  }

  const skillsSection = sectionResults.find((s) => s.name === 'Skills Section');
  if (skillsSection && !skillsSection.found) {
    quickSuggestions.push('Add a dedicated Technical Skills section organized by Tools, Languages, and Databases.');
  }

  // 7. DETAILED IMPROVEMENT TIPS FOR TAB 4
  const detailedImprovementTips: AtsAnalysisResult['detailedImprovementTips'] = [];

  if (missingSkills.length > 0) {
    detailedImprovementTips.push({
      priority: 'high',
      title: `Incorporate Not-Detected Technical Skills (${missingSkills.slice(0, 3).join(', ')})`,
      description: `ATS parsers specifically screen for core tools like ${missingSkills.slice(0, 4).join(', ')}. If you have practical experience or have completed courses with these tools, explicitly list them.`,
      action: 'Add a bullet point in your Experience or Projects section demonstrating hands-on usage.',
    });
  }

  if (metricMatches.length < 3) {
    detailedImprovementTips.push({
      priority: 'high',
      title: 'Quantify Accomplishments with Tangible Metrics',
      description: 'Hiring managers and modern resume algorithms favor evidence-backed impact over passive task descriptions.',
      action: 'Rewrite project bullets using the formula: "Accomplished [X] as measured by [Y] by doing [Z]".',
    });
  }

  if (structureScore < 80) {
    const missingSects = sectionResults.filter((s) => !s.found).map((s) => s.name);
    detailedImprovementTips.push({
      priority: 'medium',
      title: `Include Standard Headings for Missing Sections (${missingSects.join(', ')})`,
      description: 'ATS parsers rely on standard section headings to index your career history. Unusual labels can result in missed information.',
      action: 'Use standard headings such as "Technical Skills", "Work Experience", and "Projects".',
    });
  }

  if (wordCount < 300) {
    detailedImprovementTips.push({
      priority: 'medium',
      title: 'Expand Project Descriptions for Depth',
      description: `Your resume contains ${wordCount} words, which may be too concise to provide sufficient technical context.`,
      action: 'Describe at least 2 in-depth capstone projects with datasets, tools used, and business outcomes.',
    });
  }

  detailedImprovementTips.push({
    priority: 'low',
    title: 'Tailor Resume Specifically to Target Job Description',
    description: 'Each job posting has unique terminology. Paste your target job description into the ATS Checker for customized keyword alignment.',
    action: 'Align your resume bullet points with the exact terminology used by your target employer.',
  });

  return {
    roleId: role.id,
    roleName: role.name,
    overallScore,
    scoreLabel,
    scoreColor,
    summaryText,
    skillsFound,
    missingSkills,
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
      hasJobDescription: !!(customJobDescription && customJobDescription.trim().length > 20),
      analysisTimestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
    weaknesses: auditResumeWeaknesses(parseResumeText(resumeText), role.id),
  };
};
