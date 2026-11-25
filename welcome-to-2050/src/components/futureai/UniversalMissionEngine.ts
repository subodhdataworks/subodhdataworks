// ═════════════════════════════════════════════════════════════════════════════
// UNIVERSAL INDUSTRIAL TRAINING ENGINE (M01 – M41)
// Dynamic 3-Step Connected Mission Architecture
// Step 1: Explore the Problem • Step 2: Discover Insights • Step 3: Make a Business Decision
// ═════════════════════════════════════════════════════════════════════════════

import { IndustrialMissionConfig, IndustrialOptionCard } from './data/industrialTrainingScenarios';
import { resolveOptionCategory, VisualizationCategory } from './UniversalOptionVisualRegistry';

export interface MissionStep {
  stepNumber: 1 | 2 | 3;
  stepTitle: string;
  stepTitleHi: string;
  question: string;
  questionHi: string;
  situation: string;
  situationHi: string;
  options: IndustrialOptionCard[];
  correctExplanation: string;
  correctExplanationHi: string;
  whyThisWorks: string;
  whyThisWorksHi: string;
  mentorHint: string;
  mentorHintHi: string;
  learningOutcomes: string[];
  learningOutcomesHi: string[];
}

export interface UniversalMissionRuntime {
  id: string;
  moduleName: string;
  topicTitle: string;
  topicTitleHi?: string;
  topicKey: string;
  persona: IndustrialMissionConfig['persona'];
  personaName: string;
  personaRole: string;
  chartType: IndustrialMissionConfig['chartType'];
  steps: [MissionStep, MissionStep, MissionStep];
}

/**
 * Strips any residual biased or revealing wording from subtitles to ensure 100% neutral pre-submission state.
 */
export function sanitizeOptionDescription(
  title: string,
  rawSubtitle: string = '',
  isHindi: boolean = false
): string {
  const t = title.toLowerCase();
  const s = rawSubtitle.toLowerCase();

  // If subtitle contains any biased words, generate a clean factual description
  if (
    s.includes('optimal') ||
    s.includes('standard') ||
    s.includes('sub-optimal') ||
    s.includes('misleading') ||
    s.includes('incorrect') ||
    s.includes('सटीक') ||
    s.includes('मानक') ||
    s.includes('अनुपयुक्त') ||
    s.includes('भ्रामक')
  ) {
    if (t.includes('wordart')) {
      return isHindi
        ? 'शीर्षक और हेडिंग को सुंदर बनाने के लिए सजावटी टेक्स्ट जोड़ता है।'
        : 'Adds styled, decorative text to make headings and titles look better.';
    }
    if (t.includes('page layout')) {
      return isHindi
        ? 'प्रिंटिंग और पेज मार्जिन, ओरिएंटेशन जैसी शीट सेटिंग्स नियंत्रित करता है।'
        : 'Controls sheet printing settings like margins, orientation and page size.';
    }
    if (t.includes('pivot')) {
      return isHindi
        ? 'स्प्रेडशीट डेटा से रिकॉर्ड्स को ग्रुप करके समरी और टोटल निकालता है।'
        : 'Quickly summarizes and groups large spreadsheet records automatically.';
    }
    if (t.includes('distinct')) {
      return isHindi
        ? 'कॉलम से डुप्लिकेट मान हटाकर केवल यूनिक रिकॉर्ड्स की गिनती करता है।'
        : 'Eliminates duplicate values and counts only unique record entries.';
    }
    if (t.includes('where') || t.includes('filter')) {
      return isHindi
        ? 'दी गई शर्त के आधार पर केवल प्रासंगिक रिकॉर्ड्स को फ़िल्टर करता है।'
        : 'Filters database records to include only rows matching the condition.';
    }
    if (t.includes('join')) {
      return isHindi
        ? 'दोनों तालिकाओं के बीच कॉमन कुंजी के आधार पर संबंधित रिकॉर्ड्स जोड़ता है।'
        : 'Combines corresponding records from two tables based on a shared key.';
    }
    if (t.includes('group by')) {
      return isHindi
        ? 'समान श्रेणियों के रिकॉर्ड्स को एक साथ इकट्ठा करके योग या औसत निकालता है।'
        : 'Aggregates matching category records into summary calculations.';
    }
    if (t.includes('power bi') || t.includes('dashboard')) {
      return isHindi
        ? 'इंटरएक्टिव विजुअल्स और केपीआई कार्ड्स के साथ रिपोर्ट तैयार करता है।'
        : 'Creates interactive visualizations, KPI cards and operational dashboards.';
    }
    if (t.includes('prompt')) {
      return isHindi
        ? 'मॉडल को स्पष्ट संदर्भ और वांछित आउटपुट संरचना के निर्देश प्रदान करता है।'
        : 'Provides structured instructions, context and output schema to the model.';
    }
    return isHindi
      ? `इस व्यावसायिक कार्य के लिए ${title} दृष्टिकोण लागू करता है।`
      : `Applies the ${title} technique for this operational data task.`;
  }

  return rawSubtitle;
}

/**
 * Keeps technical terms in clean English inside Hindi questions (never pure/transliterated Hindi).
 */
export function normalizeTechnicalHindi(text: string): string {
  if (!text) return text;
  const techReplacements: Array<[RegExp, string]> = [
    [/पावर\s*बीआई/g, 'Power BI'],
    [/पावर\s*क्वेरी/g, 'Power Query'],
    [/पिवट\s*टेबल/g, 'PivotTable'],
    [/डेटा\s*एनालिटिक्स/g, 'Data Analytics'],
    [/डेटा\s*एनालिस्ट/g, 'Data Analyst'],
    [/डेटा\s*बेस|डेटाबेस/g, 'Database'],
    [/डेटासेट/g, 'Dataset'],
    [/डेटा/g, 'Data'],
    [/एसक्यूएल/g, 'SQL'],
    [/पायथन|पाइथन/g, 'Python'],
    [/एक्सेल/g, 'Excel'],
    [/स्प्रेडशीट/g, 'Spreadsheet'],
    [/वर्कबुक/g, 'Workbook'],
    [/वर्कशीट/g, 'Worksheet'],
    [/पंडास|पांडास/g, 'Pandas'],
    [/नमपाई|नम्पाई/g, 'NumPy'],
    [/डैक्स/g, 'DAX'],
    [/जेनएआई/g, 'GenAI'],
    [/एआई/g, 'AI'],
    [/प्रॉम्प्ट/g, 'Prompt'],
    [/मॉडल/g, 'Model'],
    [/क्वेरी/g, 'Query'],
    [/डैशबोर्ड/g, 'Dashboard'],
    [/रिपोर्टिंग/g, 'Reporting'],
    [/रिपोर्ट/g, 'Report'],
    [/चार्ट्स/g, 'Charts'],
    [/चार्ट/g, 'Chart'],
    [/ग्राफ/g, 'Graph'],
    [/टेबल/g, 'Table'],
    [/कॉलम्स/g, 'Columns'],
    [/कॉलम/g, 'Column'],
    [/रोज़|रोज़/g, 'Rows'],
    [/फ़िल्टर|फिल्टर/g, 'Filter'],
    [/फॉर्मूला|फ़ॉर्मूला/g, 'Formula'],
    [/फंक्शन|फ़ंक्शन/g, 'Function'],
    [/वेरिएबल/g, 'Variable'],
    [/स्ट्रिंग/g, 'String'],
    [/इंटीजर/g, 'Integer'],
    [/लूप/g, 'Loop'],
    [/लिस्ट/g, 'List'],
    [/डिक्शनरी/g, 'Dictionary'],
    [/कोड/g, 'Code'],
    [/प्रिंट/g, 'print'],
    [/कमेंट/g, 'Comment'],
    [/एक्सप्रेशन/g, 'Expression'],
    [/आउटपुट/g, 'Output'],
    [/इनपुट/g, 'Input'],
    [/टेक्स्ट/g, 'Text'],
    [/फाइल|फ़ाइल/g, 'File'],
    [/सॉफ्टवेयर/g, 'Software'],
    [/सिस्टम/g, 'System'],
    [/कंप्यूटर/g, 'Computer'],
    [/स्क्रीन/g, 'Screen'],
    [/प्रिंटर/g, 'Printer'],
    [/रिकॉर्ड्स/g, 'Records'],
    [/रिकॉर्ड/g, 'Record'],
    [/प्रोडक्ट्स/g, 'Products'],
    [/प्रोडक्ट/g, 'Product'],
    [/सेल्स/g, 'Sales'],
    [/बिजनेस/g, 'Business'],
    [/कस्टमर/g, 'Customer'],
    [/ग्राहकों/g, 'Customers'],
    [/स्टेकहोल्डर्स/g, 'Stakeholders'],
    [/इनसाइट्स/g, 'Insights'],
    [/इनसाइट/g, 'Insight'],
    [/एनालिटिकल/g, 'Analytical'],
    [/सेगमेंट/g, 'Segment'],
    [/पैटर्न/g, 'Pattern'],
    [/प्रोजेक्ट्स/g, 'Projects'],
    [/प्रोजेक्ट/g, 'Project'],
    [/कैपस्टोन/g, 'Capstone'],
    [/पोर्टफोलियो/g, 'Portfolio'],
    [/इंटरव्यू/g, 'Interview'],
    [/मैसेज/g, 'Message'],
    [/टास्क/g, 'Task'],
    [/ऑफिस/g, 'Office'],
    [/ट्रेनी/g, 'Trainee'],
    [/चेक/g, 'check'],
    [/मैनेजर/g, 'Manager'],
    [/स्टोर/g, 'Store'],
    [/लीडरशिप/g, 'Leadership'],
    [/एक्शन प्लान/g, 'Action Plan'],
  ];

  let out = text;
  for (const [pattern, replacement] of techReplacements) {
    out = out.replace(pattern, replacement);
  }
  return out;
}

/**
 * Dynamically builds a connected 3-step mission from the base mission configuration.
 */
export function buildUniversalMissionRuntime(
  config: IndustrialMissionConfig
): UniversalMissionRuntime {
  const correctOpt = config.options.find((o) => o.isCorrect) || config.options[0];
  const correctName = correctOpt.title;

  // Step 1: Explore the Problem
  const step1: MissionStep = {
    stepNumber: 1,
    stepTitle: 'Step 1: Choose the Right Solution',
    stepTitleHi: 'Step 1: Choose the Right Solution',
    situation: config.situation,
    situationHi: normalizeTechnicalHindi(config.situationHi || config.situation),
    question: config.task,
    questionHi: normalizeTechnicalHindi(config.taskHi || config.task),
    options: config.options.map((opt) => ({
      ...opt,
      subtitle: sanitizeOptionDescription(opt.title, opt.subtitle, false),
      subtitleHi: sanitizeOptionDescription(opt.title, opt.subtitleHi || opt.subtitle, true),
    })),
    correctExplanation: config.correctExplanation,
    correctExplanationHi: config.correctExplanationHi || config.correctExplanation,
    whyThisWorks: config.whyThisWorks,
    whyThisWorksHi: config.whyThisWorksHi || config.whyThisWorks,
    mentorHint: config.mentorHint,
    mentorHintHi: config.mentorHintHi || config.mentorHint,
    learningOutcomes: config.learningOutcomes.slice(0, 3),
    learningOutcomesHi: (config.learningOutcomesHi || config.learningOutcomes).slice(0, 3),
  };

  // Step 2: Discover Insights (Connected data observation based on Step 1)
  const step2Options: IndustrialOptionCard[] = [
    {
      id: `${config.id}-s2-a`,
      letter: 'A',
      title: 'Top Category Outperformed by +45%',
      titleHi: 'प्रमुख श्रेणी में 45% की उल्लेखनीय वृद्धि देखी गई',
      subtitle: 'The primary segment generated the highest volume compared to other units.',
      subtitleHi: 'मुख्य सेगमेंट ने अन्य सभी श्रेणियों की तुलना में सबसे अधिक वॉल्यूम उत्पन्न किया।',
      iconType: 'bar-chart',
      isCorrect: true,
    },
    {
      id: `${config.id}-s2-b`,
      letter: 'B',
      title: 'Uniform Distribution Across All Units',
      titleHi: 'सभी यूनिट्स में बिल्कुल समान और अपरिवर्तित परिणाम',
      subtitle: 'All tracked segments produced identical numbers with zero deviation.',
      subtitleHi: 'सभी ट्रैक किए गए सेगमेंट में बिना किसी भिन्नता के समान संख्याएं दिखाई दीं।',
      iconType: 'calendar',
      isCorrect: false,
    },
    {
      id: `${config.id}-s2-c`,
      letter: 'C',
      title: 'Complete Data Loss Across Segments',
      titleHi: 'सिस्टम में सभी सेगमेंट का डेटा गायब या अमान्य हो गया',
      subtitle: 'The analytical output shows null or corrupt records requiring re-collection.',
      subtitleHi: 'एनालिटिकल आउटपुट में डेटा गायब या दूषित दिखाई देता है।',
      iconType: 'alert-circle',
      isCorrect: false,
    },
  ];

  const step2: MissionStep = {
    stepNumber: 2,
    stepTitle: 'Step 2: Discover Insights',
    stepTitleHi: 'Step 2: Discover Insights',
    situation: `After executing ${correctName}, the analytical summary reveals variance across the segments.`,
    situationHi: `${correctName} apply करने के बाद, analytical output में अलग-अलग segments के बीच साफ अंतर दिख रहा है।`,
    question: `Examine the generated summary. Which pattern accurately reflects the operational result?`,
    questionHi: `Generated summary को देखें — कौन सा pattern actual result को सही दिखाता है?`,
    options: step2Options,
    correctExplanation: `The data clearly highlights that the primary category outperformed other segments by +45%.`,
    correctExplanationHi: `डेटा से स्पष्ट पता चलता है कि प्रमुख श्रेणी ने अन्य श्रेणियों की तुलना में 45% बेहतर प्रदर्शन किया है।`,
    whyThisWorks: `Accurate interpretation of aggregated figures prevents equal-resource allocation to lagging units.`,
    whyThisWorksHi: `डेटा आउटपुट की सही व्याख्या करने से कमजोर और मजबूत क्षेत्रों की पहचान आसानी से हो जाती है।`,
    mentorHint: `Look at the numerical distribution to identify which category holds the highest contribution.`,
    mentorHintHi: `संख्यात्मक वितरण को देखें और पहचानें कि किस श्रेणी का योगदान सबसे अधिक है।`,
    learningOutcomes: [
      'Interpret aggregated analytical metrics',
      'Identify variance between top and bottom segments',
      'Validate data consistency before reporting',
    ],
    learningOutcomesHi: [
      'एग्रीगेटेड एनालिटिकल मेट्रिक्स की व्याख्या करना',
      'उच्च और निम्न सेगमेंट के बीच अंतर पहचानना',
      'रिपोर्टिंग से पहले डेटा की प्रामाणिकता जांचना',
    ],
  };

  // Step 3: Make a Business Decision (Actionable strategic recommendation)
  const step3Options: IndustrialOptionCard[] = [
    {
      id: `${config.id}-s3-a`,
      letter: 'A',
      title: 'Scale Top Segment & Optimize Lagging Areas',
      titleHi: 'सर्वश्रेष्ठ सेगमेंट को बढ़ावा दें और कमजोर क्षेत्रों में सुधार करें',
      subtitle: 'Allocate resources toward high-growth drivers while addressing root causes in lagging units.',
      subtitleHi: 'उच्च वृद्धि वाले क्षेत्रों में संसाधन लगाएं और कमजोर यूनिट्स के कारणों को ठीक करें।',
      iconType: 'target',
      isCorrect: true,
    },
    {
      id: `${config.id}-s3-b`,
      letter: 'B',
      title: 'Shut Down Entire Operations Immediately',
      titleHi: 'तुरंत सभी ऑपरेशन्स और व्यावसायिक गतिविधियों को बंद कर दें',
      subtitle: 'Terminate all active processes without further investigation into the variance.',
      subtitleHi: 'अंतर की जांच किए बिना सभी सक्रिय प्रक्रियाओं को अचानक समाप्त कर दें।',
      iconType: 'trash',
      isCorrect: false,
    },
    {
      id: `${config.id}-s3-c`,
      letter: 'C',
      title: 'Ignore Findings & Maintain Status Quo',
      titleHi: 'डेटा इनसाइट को नजरअंदाज करें और पुराने तरीके से चलते रहें',
      subtitle: 'Disregard the evidence and make arbitrary gut-feeling business decisions.',
      subtitleHi: 'तथ्यों की अनदेखी करें और बिना डेटा के मनमाने फैसले लेते रहें।',
      iconType: 'compass',
      isCorrect: false,
    },
  ];

  const step3: MissionStep = {
    stepNumber: 3,
    stepTitle: 'Step 3: Make a Business Decision',
    stepTitleHi: 'Step 3: Make a Business Decision',
    situation: `Leadership requires an evidence-backed action plan based on the observed data insights.`,
    situationHi: `Leadership को इन data insights के basis पर एक practical action plan चाहिए।`,
    question: `What strategic business decision should you recommend to the stakeholders?`,
    questionHi: `Stakeholders को आप कौन सा strategic business decision recommend करेंगे?`,
    options: step3Options,
    correctExplanation: `Scaling high-growth drivers while systematically diagnosing lagging units maximizes business ROI.`,
    correctExplanationHi: `उच्च विकास वाले क्षेत्रों को बढ़ावा देने और कमजोर क्षेत्रों को ठीक करने से बिजनेस का आरओआई अधिकतम होता है।`,
    whyThisWorks: `Data-driven decisions align operational capital with proven customer demand.`,
    whyThisWorksHi: `डेटा-आधारित निर्णय परिचालन पूंजी को वास्तविक ग्राहक मांग के साथ संरेखित करते हैं।`,
    mentorHint: `Choose the action that leverages the proven insight while responsibly addressing risk.`,
    mentorHintHi: `उस निर्णय को चुनें जो डेटा से मिले सबूतों का लाभ उठाकर बिजनेस को आगे बढ़ाता है।`,
    learningOutcomes: [
      'Translate data findings into executive recommendations',
      'Balance growth opportunities with risk mitigation',
      'Deliver measurable business value to stakeholders',
    ],
    learningOutcomesHi: [
      'डेटा निष्कर्षों को व्यावसायिक सिफारिशों में बदलना',
      'विकास के अवसरों और जोखिमों में संतुलन बनाना',
      'स्टेकहोल्डर्स को मापने योग्य बिजनेस वैल्यू प्रदान करना',
    ],
  };

  return {
    id: config.id,
    moduleName: config.moduleName,
    topicTitle: config.topicTitle,
    topicTitleHi: config.topicTitleHi,
    topicKey: config.topicKey,
    persona: config.persona,
    personaName: config.personaName,
    personaRole: config.personaRole,
    chartType: config.chartType,
    steps: [step1, step2, step3],
  };
}
