import { getTopicQuestionBank } from './questionBankRegistry';
// ============================================================================
// FUTURE IT INDUSTRY — ZERO AI API COST LOCAL QUESTION BANK & RULE ENGINE
// 100% Local, Deterministic JavaScript Evaluation (No External LLM / AI APIs)
// Integrates with existing MODULE_01_TOPICS_CONTENT & HINDI_TOPICS_ACTIVITY_DATA
// ============================================================================

import { getModule01TopicData } from './module01TopicContent';
import { getHindiTopicActivity } from './hindiActivityContent';

export interface KeywordRule {
  id: string;
  labelEn: string;
  labelHi: string;
  weight: number;
  synonyms: string[]; // Lowercase English, Hindi Devanagari, and Hinglish equivalents
}

export interface ConceptRule {
  id: string;
  conceptEn: string;
  conceptHi: string;
  weight: number;
  patterns: string[]; // Phrase or token equivalents
}

export interface CommonMistakeRule {
  id: string;
  mistakeEn: string;
  mistakeHi: string;
  correctionEn: string;
  correctionHi: string;
  triggerPatterns: string[];
  penalty: number;
}

export interface ScoringRulesConfig {
  keywordWeight: number;   // e.g. 5.0 out of 10
  conceptWeight: number;   // e.g. 3.5 out of 10
  structureWeight: number; // e.g. 1.5 out of 10
  minWordCount: number;    // e.g. 8 words
  maxScore: number;        // 10
}

export interface PreloadedInterviewQuestion {
  id: number;
  topicId: number;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  questionEn: string;
  questionHi: string;
  hintEn: string;
  hintHi: string;
  idealAnswerEn: string;
  idealAnswerHi: string;
  exampleAnswerEn: string;
  exampleAnswerHi: string;
  requiredKeywords: KeywordRule[];
  importantConcepts: ConceptRule[];
  commonMistakes: CommonMistakeRule[];
  scoringRules: ScoringRulesConfig;
  published?: boolean;
  deleted?: boolean;
}

export interface DeterministicEvaluationResult {
  score: number; // 0 to 10 (e.g. 8.5)
  maxScore: number; // 10
  normalizedText: string;
  tokens: string[];
  wordCount: number;
  matchedKeywords: Array<{ id: string; labelEn: string; labelHi: string; matchedTerm: string }>;
  missingKeywords: Array<{ id: string; labelEn: string; labelHi: string }>;
  matchedConcepts: Array<{ id: string; conceptEn: string; conceptHi: string }>;
  missingConcepts: Array<{ id: string; conceptEn: string; conceptHi: string }>;
  detectedMistakes: Array<{
    id: string;
    mistakeEn: string;
    mistakeHi: string;
    correctionEn: string;
    correctionHi: string;
  }>;
  suggestionsEn: string[];
  suggestionsHi: string[];
  summaryEn: string;
  summaryHi: string;
  breakdown: {
    keywordPoints: number;
    conceptPoints: number;
    structurePoints: number;
    penaltyPoints: number;
  };
}

const DEFAULT_SCORING_RULES: ScoringRulesConfig = {
  keywordWeight: 5.0,
  conceptWeight: 3.5,
  structureWeight: 1.5,
  minWordCount: 8,
  maxScore: 10,
};

// Curated 10-question local bank with detailed bilingual rules
export const CORE_PRELOADED_QUESTIONS: PreloadedInterviewQuestion[] = [
  {
    id: 1,
    topicId: 1,
    topic: 'Technical',
    difficulty: 'Easy',
    questionEn: 'What is programming and can you give one real-life example?',
    questionHi: 'प्रोग्रामिंग क्या है और क्या आप इसका एक वास्तविक जीवन (Real-life) का उदाहरण दे सकते हैं?',
    hintEn: 'Keep your answer structured with a clear explanation and a practical example.',
    hintHi: 'अपने उत्तर को स्पष्ट परिभाषा और एक व्यावहारिक उदाहरण के साथ संरचित रखें।',
    idealAnswerEn:
      'Programming is the process of writing clear, step-by-step instructions for a computer to perform a specific task or solve a problem. For example, mobile apps like WhatsApp, ATM machines, or traffic signal timers run on programs written by developers.',
    idealAnswerHi:
      'प्रोग्रामिंग कंप्यूटर को किसी विशिष्ट कार्य को पूरा करने या समस्या को हल करने के लिए स्पष्ट और क्रमबद्ध निर्देश (Instructions) देने की प्रक्रिया है। उदाहरण के लिए, WhatsApp जैसा मोबाइल ऐप, ATM मशीन या ट्रैफिक सिग्नल प्रोग्रामिंग के निर्देशों पर काम करते हैं।',
    exampleAnswerEn:
      'Programming is a way to give instructions to a computer to perform a specific task. For example, when we use a mobile app like WhatsApp, it is made using programming.',
    exampleAnswerHi:
      'प्रोग्रामिंग कंप्यूटर को कोई काम करने के लिए निर्देश देने का तरीका है। उदाहरण के लिए, जब हम WhatsApp या ATM का उपयोग करते हैं, तो वह प्रोग्रामिंग से बना होता है।',
    requiredKeywords: [
      {
        id: 'kw_instructions',
        labelEn: 'Instructions / Commands',
        labelHi: 'निर्देश (Instructions)',
        weight: 2.0,
        synonyms: [
          'instruction',
          'instructions',
          'command',
          'commands',
          'steps',
          'rules',
          'directions',
          'code',
          'निर्देश',
          'निर्देशों',
          'कमांड',
          'स्टेप्स',
          'नियम',
          'कोड',
          'nirdesh',
        ],
      },
      {
        id: 'kw_computer',
        labelEn: 'Computer / Machine',
        labelHi: 'कंप्यूटर / मशीन',
        weight: 1.5,
        synonyms: [
          'computer',
          'computers',
          'machine',
          'system',
          'device',
          'software',
          'कंप्यूटर',
          'कम्प्यूटर',
          'मशीन',
          'सिस्टम',
          'सॉफ्टवेयर',
        ],
      },
      {
        id: 'kw_task',
        labelEn: 'Specific Task / Problem Solving',
        labelHi: 'विशिष्ट कार्य / समस्या समाधान',
        weight: 1.5,
        synonyms: [
          'task',
          'tasks',
          'problem',
          'problems',
          'solve',
          'work',
          'action',
          'execute',
          'perform',
          'output',
          'कार्य',
          'काम',
          'समस्या',
          'हल',
          'समाधान',
          'टास्क',
        ],
      },
      {
        id: 'kw_example',
        labelEn: 'Real-Life Example (App, ATM, Website, etc.)',
        labelHi: 'वास्तविक उदाहरण (App, ATM, Website आदि)',
        weight: 1.5,
        synonyms: [
          'example',
          'for example',
          'whatsapp',
          'app',
          'mobile',
          'atm',
          'website',
          'calculator',
          'traffic',
          'game',
          'recipe',
          'youtube',
          'उदाहरण',
          'जैसे',
          'व्हाट्सएप',
          'ऐप',
          'मोबाइल',
          'एटीएम',
          'वेबसाइट',
          'कैलकुलेटर',
        ],
      },
    ],
    importantConcepts: [
      {
        id: 'cp_give_instructions',
        conceptEn: 'Explained that programming gives instructions to a computer',
        conceptHi: 'स्पष्ट किया कि प्रोग्रामिंग कंप्यूटर को निर्देश देने की प्रक्रिया है',
        weight: 2.0,
        patterns: [
          'instructions to a computer',
          'instruct a computer',
          'set of instructions',
          'telling a computer',
          'computer instructions',
          'write code',
          'writing code',
          'कंप्यूटर को निर्देश',
          'निर्देश देना',
          'निर्देश देने',
          'कंप्यूटर को काम',
          'कोड लिखना',
        ],
      },
      {
        id: 'cp_real_example',
        conceptEn: 'Provided a concrete real-life application or analogy',
        conceptHi: 'एक वास्तविक जीवन का उदाहरण (जैसे ऐप, वेबसाइट या मशीन) दिया',
        weight: 1.5,
        patterns: [
          'for example',
          'example',
          'like whatsapp',
          'mobile app',
          'such as',
          'atm',
          'calculator',
          'website',
          'recipe',
          'उदाहरण',
          'जैसे',
          'मोबाइल ऐप',
          'व्हाट्सएप',
          'वेबसाइट',
        ],
      },
    ],
    commonMistakes: [
      {
        id: 'mk_hardware',
        mistakeEn: 'Confused programming with physical hardware repair',
        mistakeHi: 'प्रोग्रामिंग को हार्डवेयर की मरम्मत से जोड़ दिया',
        correctionEn: 'Programming creates software instructions, not physical hardware repairs.',
        correctionHi: 'प्रोग्रामिंग सॉफ्टवेयर निर्देश लिखने के लिए है, हार्डवेयर रिपेयर करने के लिए नहीं।',
        triggerPatterns: ['repair hardware', 'repairing hardware', 'fixing wires', 'हार्डवेयर की मरम्मत'],
        penalty: 2.0,
      },
      {
        id: 'mk_no_example',
        mistakeEn: 'Did not include a real-life example as asked in the second part of the question',
        mistakeHi: 'प्रश्न के दूसरे भाग के अनुसार वास्तविक जीवन का उदाहरण शामिल नहीं किया',
        correctionEn: 'Always answer all parts of the question—include an example like WhatsApp, an ATM, or a calculator.',
        correctionHi: 'हमेशा प्रश्न के सभी भागों का उत्तर दें—WhatsApp, ATM या कैलकुलेटर जैसा एक उदाहरण ज़रूर दें।',
        triggerPatterns: ['__MISSING_EXAMPLE__'],
        penalty: 1.0,
      },
    ],
    scoringRules: DEFAULT_SCORING_RULES,
  },
  {
    id: 2,
    topicId: 1,
    topic: 'Algorithms',
    difficulty: 'Easy',
    questionEn: 'What is an algorithm, and how is it different from a computer program?',
    questionHi: 'एल्गोरिदम (Algorithm) क्या है, और यह कंप्यूटर प्रोग्राम से कैसे अलग है?',
    hintEn: 'Define an algorithm as step-by-step logic, and a program as its implementation in a coding language.',
    hintHi: 'एल्गोरिदम को चरणबद्ध तर्क (Step-by-step logic) और प्रोग्राम को किसी कोडिंग भाषा में लिखे कोड के रूप में समझाएं।',
    idealAnswerEn:
      'An algorithm is a finite, ordered sequence of logical steps designed to solve a problem, independent of any programming language. A program is the actual implementation of that algorithm written in a specific language like Python so a computer can execute it.',
    idealAnswerHi:
      'एल्गोरिदम किसी समस्या को हल करने के लिए निश्चित और क्रमबद्ध चरणों (Step-by-step logic) की योजना है, जो किसी प्रोग्रामिंग भाषा पर निर्भर नहीं करती। जबकि प्रोग्राम उस एल्गोरिदम को Python जैसी भाषा में लिखा गया वास्तविक कोड है जिसे कंप्यूटर चला सकता है।',
    exampleAnswerEn:
      'An algorithm is the step-by-step logical plan to solve a problem, like a cooking recipe. A program is when we write those steps in a programming language like Python for the computer to run.',
    exampleAnswerHi:
      'एल्गोरिदम किसी समस्या को हल करने का स्टेप-बाय-स्टेप लॉजिक या प्लान है। जब हम उन्हीं स्टेप्स को Python जैसी भाषा में लिखते हैं तो उसे प्रोग्राम कहते हैं।',
    requiredKeywords: [
      {
        id: 'kw_steps',
        labelEn: 'Step-by-step / Ordered Sequence',
        labelHi: 'क्रमबद्ध चरण (Step-by-step)',
        weight: 2.0,
        synonyms: ['step', 'steps', 'sequence', 'ordered', 'logical', 'plan', 'चरण', 'क्रमबद्ध', 'स्टेप', 'लॉजिक', 'योजना'],
      },
      {
        id: 'kw_problem',
        labelEn: 'Solve a Problem',
        labelHi: 'समस्या का समाधान',
        weight: 1.5,
        synonyms: ['problem', 'solve', 'solution', 'task', 'समस्या', 'हल', 'समाधान', 'कार्य'],
      },
      {
        id: 'kw_language',
        labelEn: 'Programming Language / Code (Python, C++, etc.)',
        labelHi: 'प्रोग्रामिंग भाषा / कोड (Python आदि)',
        weight: 1.5,
        synonyms: ['language', 'code', 'python', 'syntax', 'implementation', 'execute', 'भाषा', 'कोड', 'पायथन', 'इंप्लीमेंट'],
      },
    ],
    importantConcepts: [
      {
        id: 'cp_algo_plan',
        conceptEn: 'Defined algorithm as logical steps or blueprint to solve a problem',
        conceptHi: 'एल्गोरिदम को समस्या सुलझाने के चरणबद्ध प्लान के रूप में परिभाषित किया',
        weight: 2.0,
        patterns: ['step by step', 'ordered steps', 'sequence of steps', 'logical steps', 'solve a problem', 'क्रमबद्ध चरण', 'स्टेप बाय स्टेप', 'समस्या को हल'],
      },
      {
        id: 'cp_prog_impl',
        conceptEn: 'Distinguished a program as code written in a specific language',
        conceptHi: 'प्रोग्राम को किसी कोडिंग भाषा में लिखे गए कोड के रूप में अलग बताया',
        weight: 1.5,
        patterns: ['programming language', 'written in', 'implementation', 'execute', 'python', 'कोड', 'भाषा में लिखा', 'कंप्यूटर चला'],
      },
    ],
    commonMistakes: [
      {
        id: 'mk_same_thing',
        mistakeEn: 'Stated that an algorithm and a program are the exact same thing',
        mistakeHi: 'एल्गोरिदम और प्रोग्राम को बिल्कुल एक ही चीज़ बता दिया',
        correctionEn: 'An algorithm is the language-independent logical plan; a program is the code written in a specific language.',
        correctionHi: 'एल्गोरिदम भाषा से स्वतंत्र लॉजिक है, जबकि प्रोग्राम किसी विशेष भाषा में लिखा गया कोड है।',
        triggerPatterns: ['both are same', 'exactly the same', 'no difference', 'दोनों एक ही हैं', 'कोई अंतर नहीं'],
        penalty: 1.5,
      },
    ],
    scoringRules: DEFAULT_SCORING_RULES,
  },
  {
    id: 3,
    topicId: 1,
    topic: 'Python Basics',
    difficulty: 'Easy',
    questionEn: 'What is Python and why is it so popular in Data Analytics and AI?',
    questionHi: 'Python क्या है और यह डेटा एनालिटिक्स (Data Analytics) तथा AI में इतना लोकप्रिय क्यों है?',
    hintEn: 'Mention that Python is a high-level, interpreted language with simple syntax and rich libraries like Pandas and NumPy.',
    hintHi: 'बताएं कि Python एक हाई-लेवल, इंटरप्रेटेड भाषा है जिसका सिंटैक्स सरल है और इसमें Pandas, NumPy जैसी लाइब्रेरीज़ हैं।',
    idealAnswerEn:
      'Python is a high-level, interpreted programming language known for its simple, readable English-like syntax. It is widely used in Data Analytics, AI, and Machine Learning because of its massive ecosystem of libraries such as Pandas, NumPy, Matplotlib, and Scikit-learn.',
    idealAnswerHi:
      'Python एक हाई-लेवल और इंटरप्रेटेड प्रोग्रामिंग भाषा है जो अपने सरल और पढ़ने में आसान सिंटैक्स के लिए जानी जाती है। यह Data Analytics और AI में बहुत लोकप्रिय है क्योंकि इसमें Pandas, NumPy, और Scikit-learn जैसी शक्तिशाली लाइब्रेरीज़ और बड़ा कम्युनिटी सपोर्ट उपलब्ध है।',
    exampleAnswerEn:
      'Python is a high-level, interpreted programming language with easy-to-read syntax. It is popular in Data Analytics and AI because it has powerful libraries like Pandas, NumPy, and TensorFlow.',
    exampleAnswerHi:
      'Python एक हाई-लेवल इंटरप्रेटेड प्रोग्रामिंग भाषा है जिसे सीखना और पढ़ना बहुत आसान है। डेटा एनालिटिक्स और AI में इसके लोकप्रिय होने का मुख्य कारण Pandas और NumPy जैसी लाइब्रेरीज़ हैं।',
    requiredKeywords: [
      {
        id: 'kw_highlevel',
        labelEn: 'High-Level / Interpreted',
        labelHi: 'हाई-लेवल / इंटरप्रेटेड',
        weight: 1.5,
        synonyms: ['high-level', 'high level', 'interpreted', 'interpreter', 'हाई-लेवल', 'हाई लेवल', 'इंटरप्रेटेड'],
      },
      {
        id: 'kw_simple',
        labelEn: 'Simple & Readable Syntax',
        labelHi: 'सरल और पठनीय सिंटैक्स',
        weight: 1.5,
        synonyms: ['simple', 'easy', 'readable', 'clean', 'syntax', 'beginner', 'सरल', 'आसान', 'सिंटैक्स'],
      },
      {
        id: 'kw_libraries',
        labelEn: 'Libraries (Pandas, NumPy, AI/ML)',
        labelHi: 'लाइब्रेरीज़ (Pandas, NumPy, AI/ML)',
        weight: 2.0,
        synonyms: ['library', 'libraries', 'pandas', 'numpy', 'matplotlib', 'scikit', 'tensorflow', 'ecosystem', 'लाइब्रेरी', 'पंडास', 'नमपाई'],
      },
    ],
    importantConcepts: [
      {
        id: 'cp_readability',
        conceptEn: 'Highlighted Python’s easy-to-read syntax and high-level nature',
        conceptHi: 'Python के सरल सिंटैक्स और हाई-लेवल प्रकृति का उल्लेख किया',
        weight: 2.0,
        patterns: ['easy to read', 'easy to learn', 'simple syntax', 'high level', 'interpreted', 'सीखना आसान', 'सरल सिंटैक्स', 'हाई लेवल'],
      },
      {
        id: 'cp_data_ecosystem',
        conceptEn: 'Connected popularity in Data/AI to rich libraries and community ecosystem',
        conceptHi: 'डेटा और AI में लोकप्रियता को लाइब्रेरीज़ (Pandas/NumPy) से जोड़ा',
        weight: 1.5,
        patterns: ['libraries', 'pandas', 'numpy', 'data analysis', 'machine learning', 'community', 'लाइब्रेरी', 'डेटा एनालिसिस'],
      },
    ],
    commonMistakes: [],
    scoringRules: DEFAULT_SCORING_RULES,
  },
  {
    id: 4,
    topicId: 1,
    topic: 'Execution',
    difficulty: 'Easy',
    questionEn: 'Why must computer instructions be clear and unambiguous?',
    questionHi: 'कंप्यूटर को दिए जाने वाले निर्देश स्पष्ट और बिना किसी भ्रम (Unambiguous) के क्यों होने चाहिए?',
    hintEn: 'Explain that computers follow instructions literally and cannot guess human intent if steps are vague.',
    hintHi: 'समझाएं कि कंप्यूटर निर्देशों का अक्षरशः पालन करते हैं और अपने आप मानव का इरादा अंदाज़ा नहीं लगा सकते।',
    idealAnswerEn:
      'Computer instructions must be clear and unambiguous because computers execute commands literally and cannot guess missing context or human intent. Vague or ambiguous instructions lead to bugs, unexpected output, or runtime errors.',
    idealAnswerHi:
      'कंप्यूटर के निर्देश स्पष्ट होने चाहिए क्योंकि कंप्यूटर के पास अपनी समझ नहीं होती और वह छूटे हुए निर्देशों का अंदाज़ा (Guess) नहीं लगा सकता। अस्पष्ट निर्देशों से प्रोग्राम में बग्स (Bugs) या गलत आउटपुट आ सकता है।',
    exampleAnswerEn:
      'Computers follow instructions literally and cannot guess what we mean. If instructions are vague or ambiguous, the program will produce errors or wrong results.',
    exampleAnswerHi:
      'कंप्यूटर दिए गए निर्देशों का बिल्कुल वैसा ही पालन करते हैं और खुद अंदाज़ा नहीं लगा सकते। यदि निर्देश अस्पष्ट होंगे तो एरर या गलत परिणाम मिलेगा।',
    requiredKeywords: [
      {
        id: 'kw_literal',
        labelEn: 'Literal Execution / Cannot Guess',
        labelHi: 'अंदाज़ा नहीं लगा सकता (Cannot Guess)',
        weight: 2.5,
        synonyms: ['guess', 'literally', 'exact', 'precisely', 'assume', 'common sense', 'अंदाज़ा', 'सोच', 'सटीक', 'स्पष्ट'],
      },
      {
        id: 'kw_error',
        labelEn: 'Prevents Errors / Bugs / Wrong Output',
        labelHi: 'एरर / बग्स और गलत आउटपुट से बचाव',
        weight: 2.5,
        synonyms: ['error', 'errors', 'bug', 'bugs', 'wrong', 'fail', 'crash', 'mistake', 'एरर', 'गलत', 'बग', 'त्रुटि'],
      },
    ],
    importantConcepts: [
      {
        id: 'cp_no_guessing',
        conceptEn: 'Explained that computers execute literally without guessing intent',
        conceptHi: 'बताया कि कंप्यूटर बिना अंदाज़ा लगाए निर्देशों का सटीक पालन करते हैं',
        weight: 2.0,
        patterns: ['cannot guess', 'literally', 'exact instructions', 'do not think', 'अंदाज़ा नहीं', 'केवल दिए गए निर्देश'],
      },
      {
        id: 'cp_avoid_bugs',
        conceptEn: 'Noted that ambiguity causes bugs or incorrect results',
        conceptHi: 'स्पष्ट किया कि अस्पष्टता से बग्स या गलत परिणाम आते हैं',
        weight: 1.5,
        patterns: ['error', 'bug', 'wrong output', 'unexpected', 'एरर', 'गलत परिणाम', 'गलतियाँ'],
      },
    ],
    commonMistakes: [],
    scoringRules: DEFAULT_SCORING_RULES,
  },
  {
    id: 5,
    topicId: 1,
    topic: 'Architecture',
    difficulty: 'Easy',
    questionEn: 'What are Input, Process, and Output (IPO) in a computer program? Give an example.',
    questionHi: 'कंप्यूटर प्रोग्राम में इनपुट, प्रोसेस और आउटपुट (IPO) क्या होते हैं? एक उदाहरण दीजिए।',
    hintEn: 'Describe Input as raw data entered, Process as calculation/logic, and Output as the final result displayed.',
    hintHi: 'इनपुट को दिया गया डेटा, प्रोसेस को गणना/लॉजिक और आउटपुट को अंतिम परिणाम के रूप में उदाहरण सहित बताएं।',
    idealAnswerEn:
      'In the IPO cycle, Input is the data given to the program, Process is the computation or logic performed on that data, and Output is the final result returned to the user. For example, in a calculator: entering 10 and 20 is Input, adding them (10 + 20) is Process, and displaying 30 on screen is Output.',
    idealAnswerHi:
      'IPO साइकिल में, इनपुट वह डेटा है जो यूज़र प्रोग्राम को देता है, प्रोसेस उस डेटा पर की जाने वाली गणना है, और आउटपुट स्क्रीन पर मिलने वाला अंतिम परिणाम है। उदाहरण के लिए कैलकुलेटर में 10 और 20 डालना इनपुट है, उन्हें जोड़ना प्रोसेस है, और 30 दिखना आउटपुट है।',
    exampleAnswerEn:
      'Input is the data we give to the computer, Process is the calculation done on it, and Output is the final result. For example, typing two numbers in a calculator is input, adding them is process, and showing the sum is output.',
    exampleAnswerHi:
      'इनपुट वह डेटा है जो हम कंप्यूटर को देते हैं, प्रोसेस उस पर होने वाली गणना है, और आउटपुट अंतिम परिणाम है। जैसे कैलकुलेटर में दो नंबर देना इनपुट, जोड़ना प्रोसेस और उत्तर दिखना आउटपुट है।',
    requiredKeywords: [
      {
        id: 'kw_input',
        labelEn: 'Input (Data Entered)',
        labelHi: 'इनपुट (दिया गया डेटा)',
        weight: 1.5,
        synonyms: ['input', 'data', 'enter', 'user', 'इनपुट', 'डेटा'],
      },
      {
        id: 'kw_process',
        labelEn: 'Process (Calculation / Logic)',
        labelHi: 'प्रोसेस (गणना / लॉजिक)',
        weight: 1.5,
        synonyms: ['process', 'processing', 'calculation', 'compute', 'add', 'logic', 'प्रोसेस', 'गणना', 'जोड़ना'],
      },
      {
        id: 'kw_output',
        labelEn: 'Output (Final Result)',
        labelHi: 'आउटपुट (अंतिम परिणाम)',
        weight: 2.0,
        synonyms: ['output', 'result', 'display', 'screen', 'आउटपुट', 'परिणाम', 'रिजल्ट'],
      },
    ],
    importantConcepts: [
      {
        id: 'cp_ipo_flow',
        conceptEn: 'Clearly defined all three stages: Input, Process, and Output',
        conceptHi: 'तीनों चरणों (इनपुट, प्रोसेस, आउटपुट) को स्पष्ट रूप से समझाया',
        weight: 2.0,
        patterns: ['input', 'process', 'output', 'इनपुट', 'प्रोसेस', 'आउटपुट'],
      },
      {
        id: 'cp_ipo_example',
        conceptEn: 'Illustrated IPO with a practical example like a calculator or ATM',
        conceptHi: 'कैलकुलेटर या ATM जैसे व्यावहारिक उदाहरण से समझाया',
        weight: 1.5,
        patterns: ['calculator', 'example', 'add', 'sum', 'atm', 'कैलकुलेटर', 'उदाहरण', 'जोड़'],
      },
    ],
    commonMistakes: [],
    scoringRules: DEFAULT_SCORING_RULES,
  },
  {
    id: 6,
    topicId: 1,
    topic: 'Execution',
    difficulty: 'Medium',
    questionEn: 'How does the Python interpreter execute code, and how does it differ from a compiler?',
    questionHi: 'Python इंटरप्रेटर (Interpreter) कोड को कैसे चलाता है, और यह कंपाइलर (Compiler) से कैसे अलग है?',
    hintEn: 'Mention that an interpreter executes code line by line, whereas a compiler translates the entire program at once.',
    hintHi: 'बताएं कि इंटरप्रेटर कोड को एक-एक लाइन (Line-by-line) करके चलाता है, जबकि कंपाइलर पूरे प्रोग्राम को एक साथ ट्रांसलेट करता है।',
    idealAnswerEn:
      'The Python interpreter reads and executes code line by line (converting it into bytecode and running it on the Python Virtual Machine). If an error occurs on a line, it stops immediately, making debugging easier. In contrast, a compiler translates the entire source code into machine code before execution.',
    idealAnswerHi:
      'Python का इंटरप्रेटर कोड को एक-एक लाइन (Line-by-line) पढ़कर चलाता है। यदि किसी लाइन में एरर हो तो वह वहीं रुक जाता है जिससे डीबगिंग आसान होती है। इसके विपरीत, कंपाइलर पूरे प्रोग्राम को चलाने से पहले एक साथ मशीन कोड में बदलता है।',
    exampleAnswerEn:
      'An interpreter executes Python code line by line and stops immediately if it finds an error. A compiler translates the whole program into machine code all at once before running.',
    exampleAnswerHi:
      'इंटरप्रेटर कोड को लाइन-बाय-लाइन चलाता है और एरर आने पर तुरंत रुक जाता है, जबकि कंपाइलर पूरे कोड को एक साथ मशीन भाषा में बदलता है।',
    requiredKeywords: [
      {
        id: 'kw_linebyline',
        labelEn: 'Line by Line Execution',
        labelHi: 'लाइन-बाय-लाइन निष्पादन',
        weight: 2.0,
        synonyms: ['line by line', 'line-by-line', 'one line', 'step by step', 'लाइन बाय लाइन', 'एक एक लाइन', 'लाइन-बाय-लाइन'],
      },
      {
        id: 'kw_interpreter',
        labelEn: 'Interpreter / Bytecode',
        labelHi: 'इंटरप्रेटर / बाइटकोड',
        weight: 1.5,
        synonyms: ['interpreter', 'interpreted', 'bytecode', 'pvm', 'इंटरप्रेटर', 'बाइटकोड'],
      },
      {
        id: 'kw_compiler',
        labelEn: 'Compiler (Translates Whole Program at Once)',
        labelHi: 'कंपाइलर (पूरे प्रोग्राम को एक साथ बदलता है)',
        weight: 1.5,
        synonyms: ['compiler', 'entire', 'whole', 'at once', 'machine code', 'कंपाइलर', 'पूरे', 'एक साथ', 'मशीन कोड'],
      },
    ],
    importantConcepts: [
      {
        id: 'cp_line_exec',
        conceptEn: 'Explained that Python interpreter runs code line by line',
        conceptHi: 'स्पष्ट किया कि इंटरप्रेटर कोड को लाइन-बाय-लाइन चलाता है',
        weight: 2.0,
        patterns: ['line by line', 'one line at a time', 'लाइन बाय लाइन', 'एक-एक लाइन'],
      },
      {
        id: 'cp_compiler_diff',
        conceptEn: 'Contrasted with compiler translating the whole program before execution',
        conceptHi: 'कंपाइलर से अंतर बताया कि वह पूरे प्रोग्राम को एक साथ ट्रांसलेट करता है',
        weight: 1.5,
        patterns: ['compiler', 'entire program', 'whole program', 'at once', 'कंपाइलर', 'पूरे प्रोग्राम', 'एक साथ'],
      },
    ],
    commonMistakes: [],
    scoringRules: DEFAULT_SCORING_RULES,
  },
  {
    id: 7,
    topicId: 1,
    topic: 'Variables & Data',
    difficulty: 'Easy',
    questionEn: 'What is a variable in Python, and why is Python called dynamically typed?',
    questionHi: 'Python में वेरिएबल (Variable) क्या होता है, और Python को Dynamically Typed क्यों कहा जाता है?',
    hintEn: 'Explain a variable as a named container for storing data, and dynamic typing as not needing to declare data types manually.',
    hintHi: 'वेरिएबल को डेटा स्टोर करने का कंटेनर बताएं, और डायनेमिक टाइपिंग का अर्थ है कि डेटा टाइप पहले से घोषित नहीं करना पड़ता।',
    idealAnswerEn:
      'A variable is a named memory location or container used to store data values (for example, x = 10). Python is called dynamically typed because we do not need to declare the data type of a variable in advance—Python automatically determines the type at runtime based on the assigned value.',
    idealAnswerHi:
      'वेरिएबल मेमोरी में डेटा स्टोर करने का एक नामित कंटेनर होता है (जैसे x = 10)। Python को Dynamically Typed इसलिए कहते हैं क्योंकि हमें वेरिएबल का डेटा टाइप (int, str आदि) पहले से लिखना नहीं पड़ता; Python वैल्यू के आधार पर रनटाइम पर खुद टाइप पहचान लेता है।',
    exampleAnswerEn:
      'A variable is a container that stores data values in memory, like name = "Rahul". Python is dynamically typed because it automatically detects the data type at runtime without manual declaration.',
    exampleAnswerHi:
      'वेरिएबल डेटा को मेमोरी में स्टोर करने का एक कंटेनर है। Python को डायनेमिकली टाइप्ड इसलिए कहते हैं क्योंकि यह वैल्यू देखकर खुद डेटा टाइप समझ लेता है।',
    requiredKeywords: [
      {
        id: 'kw_store',
        labelEn: 'Stores Data / Container / Memory',
        labelHi: 'डेटा स्टोर करना / मेमोरी कंटेनर',
        weight: 2.0,
        synonyms: ['store', 'stores', 'container', 'memory', 'value', 'hold', 'स्टोर', 'कंटेनर', 'मेमोरी', 'वैल्यू'],
      },
      {
        id: 'kw_dynamic',
        labelEn: 'Dynamic Typing / Auto Type Detection at Runtime',
        labelHi: 'डायनेमिक टाइपिंग / रनटाइम पर ऑटो टाइप पहचान',
        weight: 3.0,
        synonyms: ['dynamic', 'dynamically', 'runtime', 'declare', 'type', 'automatic', 'डायनेमिक', 'रनटाइम', 'डेटा टाइप', 'घोषित'],
      },
    ],
    importantConcepts: [
      {
        id: 'cp_var_def',
        conceptEn: 'Defined variable as a named reference/container for storing values',
        conceptHi: 'वेरिएबल को डेटा स्टोर करने वाले कंटेनर के रूप में समझाया',
        weight: 2.0,
        patterns: ['store data', 'stores value', 'container', 'memory', 'डेटा स्टोर', 'कंटेनर', 'मेमोरी'],
      },
      {
        id: 'cp_dyn_type',
        conceptEn: 'Explained dynamic typing as automatic type inference at runtime',
        conceptHi: 'डायनेमिक टाइपिंग को बिना डिक्लेरेशन के ऑटोमैटिक टाइप पहचान बताया',
        weight: 1.5,
        patterns: ['declare', 'data type', 'runtime', 'automatically', 'डेटा टाइप', 'रनटाइम', 'खुद पहचान'],
      },
    ],
    commonMistakes: [],
    scoringRules: DEFAULT_SCORING_RULES,
  },
  {
    id: 8,
    topicId: 1,
    topic: 'Data Structures',
    difficulty: 'Medium',
    questionEn: 'What is the difference between a List and a Tuple in Python?',
    questionHi: 'Python में List और Tuple के बीच मुख्य अंतर क्या है?',
    hintEn: 'Compare mutability (mutable vs immutable), bracket syntax ([] vs ()), and performance.',
    hintHi: 'म्यूटेबिलिटी (बदलाव संभव है या नहीं), ब्रैकेट सिंटैक्स ([] बनाम ()), और परफॉर्मेंस की तुलना करें।',
    idealAnswerEn:
      'Lists are mutable, meaning their elements can be modified, added, or removed after creation, and they use square brackets []. Tuples are immutable, meaning they cannot be changed once created, and they use parentheses (). Tuples are faster and consume less memory than lists.',
    idealAnswerHi:
      'List म्यूटेबल (Mutable) होती है, यानी बनने के बाद उसके तत्वों को बदला या हटाया जा सकता है और इसे [] ब्रैकेट से लिखते हैं। Tuple इम्यूटेबल (Immutable) होता है, यानी उसे बदला नहीं जा सकता और इसे () से लिखते हैं। Tuple लिस्ट की तुलना में तेज़ होता है।',
    exampleAnswerEn:
      'Lists are mutable and use square brackets [], so we can change their items. Tuples are immutable and use round parentheses (), making them faster and memory-efficient for fixed data.',
    exampleAnswerHi:
      'List म्यूटेबल होती है और [] का उपयोग करती है, इसमें बदलाव किया जा सकता है। Tuple इम्यूटेबल होता है और () का उपयोग करता है, इसमें बदलाव नहीं हो सकता।',
    requiredKeywords: [
      {
        id: 'kw_mutable',
        labelEn: 'Mutable vs Immutable (Changeable vs Fixed)',
        labelHi: 'Mutable बनाम Immutable (बदलाव संभव बनाम स्थिर)',
        weight: 2.5,
        synonyms: ['mutable', 'immutable', 'change', 'changed', 'modify', 'modified', 'म्यूटेबल', 'इम्यूटेबल', 'बदला', 'बदलाव'],
      },
      {
        id: 'kw_brackets',
        labelEn: 'Syntax: Square Brackets [] vs Parentheses ()',
        labelHi: 'सिंटैक्स: स्क्वायर ब्रैकेट [] बनाम पैरेंथेसिस ()',
        weight: 1.5,
        synonyms: ['square', 'bracket', 'brackets', 'parentheses', 'round', '[]', '()', 'ब्रैकेट', 'कोष्ठक'],
      },
      {
        id: 'kw_perf',
        labelEn: 'Performance / Memory Efficiency',
        labelHi: 'तेज़ स्पीड / कम मेमोरी',
        weight: 1.0,
        synonyms: ['faster', 'speed', 'memory', 'performance', 'hashable', 'तेज़', 'मेमोरी', 'फास्ट'],
      },
    ],
    importantConcepts: [
      {
        id: 'cp_mutability',
        conceptEn: 'Accurately contrasted List mutability with Tuple immutability',
        conceptHi: 'List में बदलाव होने और Tuple में बदलाव न होने का सही अंतर बताया',
        weight: 2.0,
        patterns: ['mutable', 'immutable', 'can be changed', 'cannot be changed', 'म्यूटेबल', 'इम्यूटेबल', 'बदला जा सकता', 'नहीं बदला'],
      },
      {
        id: 'cp_syntax_perf',
        conceptEn: 'Mentioned bracket syntax ([] vs ()) or speed/memory advantages',
        conceptHi: 'ब्रैकेट सिंटैक्स ([] बनाम ()) या परफॉर्मेंस का उल्लेख किया',
        weight: 1.5,
        patterns: ['square bracket', 'parentheses', 'faster', 'memory', '[]', '()', 'ब्रैकेट', 'तेज़', 'मेमोरी'],
      },
    ],
    commonMistakes: [],
    scoringRules: DEFAULT_SCORING_RULES,
  },
  {
    id: 9,
    topicId: 1,
    topic: 'Debugging',
    difficulty: 'Medium',
    questionEn: 'What is the difference between a Syntax Error and a Runtime Error in Python?',
    questionHi: 'Python में Syntax Error और Runtime Error में क्या अंतर होता है?',
    hintEn: 'Explain Syntax Error as a grammar rule violation before running, and Runtime Error as a crash during execution (like dividing by zero).',
    hintHi: 'Syntax Error को भाषा के नियम की गलती और Runtime Error को प्रोग्राम चलते समय आने वाली गलती (जैसे 0 से भाग देना) के रूप में समझाएं।',
    idealAnswerEn:
      'A Syntax Error occurs when code violates Python grammar rules (such as a missing colon or parenthesis) and prevents the program from starting. A Runtime Error (or Exception) occurs while the program is running, such as dividing a number by zero (ZeroDivisionError) or accessing a missing list index.',
    idealAnswerHi:
      'Syntax Error तब आती है जब कोड में Python के व्याकरण/सिंटैक्स के नियम टूटते हैं (जैसे कोष्ठक या कोलन छूटना) और प्रोग्राम शुरू ही नहीं हो पाता। Runtime Error प्रोग्राम के चलते समय आती है, जैसे किसी संख्या को शून्य से भाग देना (ZeroDivisionError)।',
    exampleAnswerEn:
      'A syntax error happens when we break Python grammar rules like forgetting a colon, stopping the code before it runs. A runtime error happens while the program is executing, like dividing a number by zero.',
    exampleAnswerHi:
      'Syntax Error कोडिंग के नियम तोड़ने पर प्रोग्राम चलने से पहले आती है। Runtime Error प्रोग्राम चलते समय आती है, जैसे किसी नंबर को 0 से भाग देना।',
    requiredKeywords: [
      {
        id: 'kw_syntax_err',
        labelEn: 'Syntax / Grammar Rule Violation',
        labelHi: 'सिंटैक्स / नियम की त्रुटि',
        weight: 2.0,
        synonyms: ['syntax', 'grammar', 'colon', 'bracket', 'indentation', 'rule', 'सिंटैक्स', 'नियम', 'कोलन', 'कोष्ठक'],
      },
      {
        id: 'kw_runtime_err',
        labelEn: 'Runtime Execution Crash / Exception',
        labelHi: 'रनटाइम (चलते समय) आने वाली एरर',
        weight: 2.0,
        synonyms: ['runtime', 'running', 'execution', 'exception', 'zero', 'zerodivisionerror', 'रनटाइम', 'चलते समय', 'शून्य', 'जीरो'],
      },
      {
        id: 'kw_err_example',
        labelEn: 'Concrete Error Example',
        labelHi: 'एरर का उदाहरण',
        weight: 1.0,
        synonyms: ['example', 'divide by zero', 'colon', 'parenthesis', 'index', 'उदाहरण', 'भाग', 'जैसे'],
      },
    ],
    importantConcepts: [
      {
        id: 'cp_syntax_time',
        conceptEn: 'Identified Syntax Error as detected before execution due to invalid code structure',
        conceptHi: 'बताया कि Syntax Error गलत सिंटैक्स के कारण कोड चलने से पहले पकड़ी जाती है',
        weight: 2.0,
        patterns: ['syntax', 'grammar', 'before running', 'missing colon', 'सिंटैक्स', 'नियम', 'चलने से पहले'],
      },
      {
        id: 'cp_runtime_time',
        conceptEn: 'Identified Runtime Error as occurring during execution on valid syntax',
        conceptHi: 'बताया कि Runtime Error प्रोग्राम चलते समय (जैसे 0 से भाग देने पर) आती है',
        weight: 1.5,
        patterns: ['runtime', 'while running', 'during execution', 'zero', 'रनटाइम', 'चलते समय', 'शून्य'],
      },
    ],
    commonMistakes: [],
    scoringRules: DEFAULT_SCORING_RULES,
  },
  {
    id: 10,
    topicId: 1,
    topic: 'Best Practices',
    difficulty: 'Easy',
    questionEn: 'Why do we write comments and use proper indentation in Python?',
    questionHi: 'हम Python में कमेंट्स (Comments) क्यों लिखते हैं और सही इंडेंटेशन (Indentation) क्यों ज़रूरी है?',
    hintEn: 'Note that comments (#) improve human readability, while indentation (spaces) is mandatory in Python to define code blocks.',
    hintHi: 'बताएं कि कमेंट्स (#) कोड को समझने में आसान बनाते हैं, जबकि इंडेंटेशन Python में कोड ब्लॉक बनाने के लिए अनिवार्य है।',
    idealAnswerEn:
      'Comments (starting with #) are written to explain code logic for human developers and are ignored by the Python interpreter. Indentation (leading whitespace) is mandatory in Python because it defines code blocks for loops, functions, and conditions instead of curly braces.',
    idealAnswerHi:
      'कमेंट्स (# के साथ) कोड को इंसानों के समझने और डॉक्यूमेंटेशन के लिए लिखे जाते हैं जिन्हें Python अनदेखा करता है। जबकि इंडेंटेशन (स्पेस) Python में अनिवार्य है क्योंकि यह लूप, फंक्शन और if-else के कोड ब्लॉक को तय करता है।',
    exampleAnswerEn:
      'Comments using # help developers understand and maintain the code. Proper indentation is mandatory in Python because it defines blocks of code inside functions, loops, and if statements.',
    exampleAnswerHi:
      'कमेंट्स (#) से कोड समझना आसान होता है। इंडेंटेशन Python में बहुत ज़रूरी है क्योंकि इसी से फंक्शन और इफ-एल्स के कोड ब्लॉक बनते हैं।',
    requiredKeywords: [
      {
        id: 'kw_comments',
        labelEn: 'Comments (#) for Readability / Ignored by Python',
        labelHi: 'कमेंट्स (#) पठनीयता के लिए',
        weight: 2.0,
        synonyms: ['comment', 'comments', '#', 'readability', 'understand', 'explain', 'ignored', 'कमेंट', 'कमेंट्स', 'समझने'],
      },
      {
        id: 'kw_indentation',
        labelEn: 'Indentation (Spaces / Code Blocks)',
        labelHi: 'इंडेंटेशन (स्पेस / कोड ब्लॉक)',
        weight: 3.0,
        synonyms: ['indentation', 'indent', 'space', 'spaces', 'block', 'blocks', 'indentationerror', 'इंडेंटेशन', 'स्पेस', 'ब्लॉक'],
      },
    ],
    importantConcepts: [
      {
        id: 'cp_comment_purpose',
        conceptEn: 'Explained that comments help humans understand code and are ignored at runtime',
        conceptHi: 'स्पष्ट किया कि कमेंट्स डेवलपर्स की सुविधा के लिए होते हैं',
        weight: 1.5,
        patterns: ['understand', 'readability', 'explain', 'ignored', 'समझने', 'आसान', 'अनदेखा'],
      },
      {
        id: 'cp_indent_block',
        conceptEn: 'Explained that indentation is syntactically required in Python to group code blocks',
        conceptHi: 'स्पष्ट किया कि Python में कोड ब्लॉक बनाने के लिए इंडेंटेशन अनिवार्य है',
        weight: 2.0,
        patterns: ['code block', 'blocks', 'mandatory', 'required', 'spaces', 'कोड ब्लॉक', 'अनिवार्य', 'ज़रूरी', 'स्पेस'],
      },
    ],
    commonMistakes: [
      {
        id: 'mk_indent_optional',
        mistakeEn: 'Claimed that indentation in Python is optional and only for style',
        mistakeHi: 'इंडेंटेशन को केवल स्टाइल के लिए वैकल्पिक (Optional) बता दिया',
        correctionEn: 'Unlike C++ or Java, indentation in Python is mandatory syntax; wrong indentation raises an IndentationError.',
        correctionHi: 'Python में इंडेंटेशन वैकल्पिक नहीं बल्कि अनिवार्य सिंटैक्स है; गलत स्पेस होने पर IndentationError आती है।',
        triggerPatterns: ['indentation is optional', 'only for style', 'not required', 'इंडेंटेशन ज़रूरी नहीं'],
        penalty: 2.0,
      },
    ],
    scoringRules: DEFAULT_SCORING_RULES,
  },
];

const CUSTOM_QUESTIONS_STORAGE_KEY = 'futureai_custom_interview_questions_v1';

export function getCustomInterviewQuestions(): Record<number, PreloadedInterviewQuestion[]> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(CUSTOM_QUESTIONS_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {};
}

export function saveCustomInterviewQuestionsForTopic(topicId: number, questions: PreloadedInterviewQuestion[]): void {
  if (typeof window === 'undefined') return;
  const current = getCustomInterviewQuestions();
  current[topicId] = questions;
  localStorage.setItem(CUSTOM_QUESTIONS_STORAGE_KEY, JSON.stringify(current));
  window.dispatchEvent(new CustomEvent('futureai_question_bank_updated', { detail: { topicId } }));
}

export function resetCustomInterviewQuestionsForTopic(topicId: number): void {
  if (typeof window === 'undefined') return;
  const current = getCustomInterviewQuestions();
  delete current[topicId];
  localStorage.setItem(CUSTOM_QUESTIONS_STORAGE_KEY, JSON.stringify(current));
  window.dispatchEvent(new CustomEvent('futureai_question_bank_updated', { detail: { topicId } }));
}

// Build a complete question list for any Topic ID, merging topic-specific questions from shared registry & module01TopicContent
export function getPreloadedInterviewQuestionsForTopic(topicId: number = 1, tabId: number = 1): PreloadedInterviewQuestion[] {
  // Check for admin custom configured questions first
  const custom = getCustomInterviewQuestions();
  if (custom[topicId] && Array.isArray(custom[topicId]) && custom[topicId].length > 0) {
    const publishedCustom = custom[topicId].filter((q) => q && q.published !== false && q.deleted !== true);
    if (publishedCustom.length > 0) {
      return publishedCustom;
    }
  }

  // Check Master Question Bank (Tab 1: Foundations, Tab 2: Data Science, etc.)
  const qb = getTopicQuestionBank(tabId, topicId);
  if (qb && qb.mockInterview && qb.mockInterview.length > 0) {
    const publishedBankQs = qb.mockInterview.filter((item) => item && item.published !== false && item.deleted !== true);
    if (publishedBankQs.length > 0) {
      return publishedBankQs.map((item, idx) => ({
        id: item.id || idx + 1,
        topicId: topicId,
        topic: qb.topicTitle,
        difficulty: (item as any).difficulty || ('Medium' as const),
        questionEn: item.question,
        questionHi: (item as any).questionHi || item.question,
        hintEn: (item as any).hintEn || `Focus on explaining ${qb.topicTitle} with business examples.`,
        hintHi: (item as any).hintHi || `${qb.topicTitle} ko aasan shabdon me samjhayein.`,
        idealAnswerEn: item.sampleAnswer,
        idealAnswerHi: (item as any).sampleAnswerHi || item.sampleAnswer,
        exampleAnswerEn: item.sampleAnswer,
        exampleAnswerHi: (item as any).sampleAnswerHi || item.sampleAnswer,
        requiredKeywords: [
          { id: 'k1', labelEn: qb.topicTitle, labelHi: qb.topicTitle, weight: 3.5, synonyms: [qb.topicTitle.toLowerCase(), 'data', 'analytics'] },
          { id: 'k2', labelEn: 'business', labelHi: 'business', weight: 2.5, synonyms: ['business', 'decision', 'analysis'] },
        ],
        importantConcepts: [
          { id: 'c1', conceptEn: 'Core Definition', conceptHi: 'Mukhya Paribhasha', weight: 2.5, patterns: ['concept', 'information', 'process'] },
        ],
        commonMistakes: [],
        scoringRules: {
          keywordWeight: 5.0,
          conceptWeight: 3.5,
          structureWeight: 1.5,
          minWordCount: 6,
          maxScore: 10,
        },
      }));
    }
  }

  if (topicId === 1) {
    return CORE_PRELOADED_QUESTIONS.slice(0, 5);
  }

  const topicData = getModule01TopicData(topicId);
  const hindiData = getHindiTopicActivity(topicId);
  const dynamicQuestions: PreloadedInterviewQuestion[] = [];

  if (topicData && Array.isArray(topicData.interviewQuestions)) {
    topicData.interviewQuestions.forEach((tq, index) => {
      const hiItem = hindiData?.interviews?.[tq.id];
      const qEn = tq.question;
      const qHi = hiItem?.question || tq.question;
      const idealEn = tq.modelAnswer;
      const idealHi = hiItem?.modelAnswer || tq.modelAnswer;

      // Extract significant words (> 4 chars) from English & Hindi model answers to build deterministic keyword rules
      const rawEnWords = Array.from(
        new Set(
          idealEn
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, ' ')
            .split(/\s+/)
            .filter((w) => w.length >= 4 && !['that', 'this', 'with', 'from', 'into', 'when', 'what', 'your', 'they', 'have', 'more', 'used', 'make'].includes(w))
        )
      ).slice(0, 4);

      const kwRules: KeywordRule[] = rawEnWords.map((w, kwIdx) => ({
        id: `t${topicId}_q${tq.id}_kw${kwIdx}`,
        labelEn: w.charAt(0).toUpperCase() + w.slice(1),
        labelHi: w.charAt(0).toUpperCase() + w.slice(1),
        weight: 1.25,
        synonyms: [w],
      }));

      dynamicQuestions.push({
        id: index + 1,
        topicId,
        topic: (tq.tag || 'Technical').replace(/^#/, ''),
        difficulty: index < 2 ? 'Easy' : index < 4 ? 'Medium' : 'Hard',
        questionEn: qEn,
        questionHi: qHi,
        hintEn: 'Keep your answer structured with a clear explanation and a practical example.',
        hintHi: 'अपने उत्तर को स्पष्ट परिभाषा और एक व्यावहारिक उदाहरण के साथ संरचित रखें।',
        idealAnswerEn: idealEn,
        idealAnswerHi: idealHi,
        exampleAnswerEn: idealEn,
        exampleAnswerHi: idealHi,
        requiredKeywords: kwRules.length > 0 ? kwRules : CORE_PRELOADED_QUESTIONS[0].requiredKeywords,
        importantConcepts: [
          {
            id: `t${topicId}_q${tq.id}_cp1`,
            conceptEn: `Clearly explained the core concept of ${(tq.tag || 'the topic').replace(/^#/, '')}`,
            conceptHi: `${(tq.tag || 'मुख्य विषय').replace(/^#/, '')} की अवधारणा को स्पष्ट रूप से समझाया`,
            weight: 2.0,
            patterns: rawEnWords.length > 0 ? rawEnWords : ['python', 'code', 'data'],
          },
          {
            id: `t${topicId}_q${tq.id}_cp2`,
            conceptEn: 'Provided structured explanation or practical usage',
            conceptHi: 'व्यावहारिक उपयोग या उदाहरण प्रस्तुत किया',
            weight: 1.5,
            patterns: ['example', 'for example', 'like', 'used', 'because', 'उदाहरण', 'जैसे', 'क्योंकि', 'उपयोग'],
          },
        ],
        commonMistakes: [],
        scoringRules: DEFAULT_SCORING_RULES,
      });
    });
  }

  // Pad up to 5 questions using CORE_PRELOADED_QUESTIONS so the 1..5 navigator is always full
  const combined = [...dynamicQuestions];
  let nextId = combined.length + 1;
  for (const coreQ of CORE_PRELOADED_QUESTIONS) {
    if (combined.length >= 5) break;
    if (!combined.some((q) => q.questionEn.toLowerCase() === coreQ.questionEn.toLowerCase())) {
      combined.push({
        ...coreQ,
        id: nextId++,
      });
    }
  }

  return combined.slice(0, 5);
}

// ============================================================================
// DETERMINISTIC RULE-BASED ANSWER EVALUATOR (ZERO EXTERNAL AI API CALLS)
// ============================================================================

export function normalizeAnswerText(rawText: string): string {
  if (!rawText) return '';
  return rawText
    .toLowerCase()
    .replace(/[.,!?;:"'“”‘’`~@#$%^&*_+=<>|\\/()\[\]{}\-–—।॥]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function tokenizeAnswerText(normalizedText: string): string[] {
  if (!normalizedText) return [];
  return normalizedText.split(' ').filter(Boolean);
}

export function evaluateInterviewAnswerDeterministically(
  rawStudentAnswer: string,
  question: PreloadedInterviewQuestion
): DeterministicEvaluationResult {
  const normalizedText = normalizeAnswerText(rawStudentAnswer);
  const tokens = tokenizeAnswerText(normalizedText);
  const tokenSet = new Set(tokens);
  const wordCount = tokens.length;

  if (wordCount === 0) {
    return {
      score: 0,
      maxScore: question.scoringRules.maxScore,
      normalizedText: '',
      tokens: [],
      wordCount: 0,
      matchedKeywords: [],
      missingKeywords: question.requiredKeywords.map((k) => ({
        id: k.id,
        labelEn: k.labelEn,
        labelHi: k.labelHi,
      })),
      matchedConcepts: [],
      missingConcepts: question.importantConcepts.map((c) => ({
        id: c.id,
        conceptEn: c.conceptEn,
        conceptHi: c.conceptHi,
      })),
      detectedMistakes: [],
      suggestionsEn: ['Please speak or type your answer before submitting.'],
      suggestionsHi: ['कृपया सबमिट करने से पहले अपना उत्तर बोलें या टाइप करें।'],
      summaryEn: 'No answer was provided.',
      summaryHi: 'कोई उत्तर प्रदान नहीं किया गया।',
      breakdown: {
        keywordPoints: 0,
        conceptPoints: 0,
        structurePoints: 0,
        penaltyPoints: 0,
      },
    };
  }

  // 1. Match Required Keywords
  const matchedKeywords: Array<{ id: string; labelEn: string; labelHi: string; matchedTerm: string }> = [];
  const missingKeywords: Array<{ id: string; labelEn: string; labelHi: string }> = [];
  let totalKeywordWeight = 0;
  let earnedKeywordWeight = 0;

  for (const kw of question.requiredKeywords) {
    totalKeywordWeight += kw.weight;
    let foundTerm: string | null = null;

    for (const syn of kw.synonyms) {
      const normSyn = normalizeAnswerText(syn);
      if (!normSyn) continue;
      if (normSyn.includes(' ')) {
        if (normalizedText.includes(normSyn)) {
          foundTerm = syn;
          break;
        }
      } else {
        if (tokenSet.has(normSyn) || normalizedText.includes(normSyn)) {
          foundTerm = syn;
          break;
        }
      }
    }

    if (foundTerm) {
      earnedKeywordWeight += kw.weight;
      matchedKeywords.push({
        id: kw.id,
        labelEn: kw.labelEn,
        labelHi: kw.labelHi,
        matchedTerm: foundTerm,
      });
    } else {
      missingKeywords.push({
        id: kw.id,
        labelEn: kw.labelEn,
        labelHi: kw.labelHi,
      });
    }
  }

  // 2. Match Important Concepts
  const matchedConcepts: Array<{ id: string; conceptEn: string; conceptHi: string }> = [];
  const missingConcepts: Array<{ id: string; conceptEn: string; conceptHi: string }> = [];
  let totalConceptWeight = 0;
  let earnedConceptWeight = 0;

  for (const cp of question.importantConcepts) {
    totalConceptWeight += cp.weight;
    const isMatched = cp.patterns.some((pat) => {
      const normPat = normalizeAnswerText(pat);
      return normPat && normalizedText.includes(normPat);
    });

    if (isMatched) {
      earnedConceptWeight += cp.weight;
      matchedConcepts.push({
        id: cp.id,
        conceptEn: cp.conceptEn,
        conceptHi: cp.conceptHi,
      });
    } else {
      missingConcepts.push({
        id: cp.id,
        conceptEn: cp.conceptEn,
        conceptHi: cp.conceptHi,
      });
    }
  }

  // 3. Detect Common Mistakes
  const detectedMistakes: Array<{
    id: string;
    mistakeEn: string;
    mistakeHi: string;
    correctionEn: string;
    correctionHi: string;
  }> = [];
  let penaltyPoints = 0;

  for (const mk of question.commonMistakes) {
    if (mk.triggerPatterns.includes('__MISSING_EXAMPLE__')) {
      // Trigger if question asks for an example and student missed the example keyword
      const missedExampleKw = missingKeywords.some((k) => k.id === 'kw_example');
      if (missedExampleKw) {
        detectedMistakes.push({
          id: mk.id,
          mistakeEn: mk.mistakeEn,
          mistakeHi: mk.mistakeHi,
          correctionEn: mk.correctionEn,
          correctionHi: mk.correctionHi,
        });
        penaltyPoints += mk.penalty;
      }
      continue;
    }

    const triggered = mk.triggerPatterns.some((pat) => {
      const normPat = normalizeAnswerText(pat);
      return normPat && normalizedText.includes(normPat);
    });

    if (triggered) {
      detectedMistakes.push({
        id: mk.id,
        mistakeEn: mk.mistakeEn,
        mistakeHi: mk.mistakeHi,
        correctionEn: mk.correctionEn,
        correctionHi: mk.correctionHi,
      });
      penaltyPoints += mk.penalty;
    }
  }

  // Check if answer is too brief (< minWordCount)
  if (wordCount < question.scoringRules.minWordCount) {
    detectedMistakes.push({
      id: 'mk_too_brief',
      mistakeEn: `Answer is very brief (${wordCount} words). Technical interviews require a full explanation.`,
      mistakeHi: `उत्तर बहुत छोटा है (${wordCount} शब्द)। इंटरव्यू में पूरा स्पष्टीकरण और उदाहरण दें।`,
      correctionEn: `Aim for at least ${question.scoringRules.minWordCount}–25 words covering both the definition and an example.`,
      correctionHi: `कम से कम ${question.scoringRules.minWordCount}–25 शब्दों में परिभाषा और उदाहरण दोनों शामिल करें।`,
    });
  }

  // 4. Calculate Transparent Weighted Score out of 10
  const kwRatio = totalKeywordWeight > 0 ? earnedKeywordWeight / totalKeywordWeight : 0;
  const cpRatio = totalConceptWeight > 0 ? earnedConceptWeight / totalConceptWeight : 0;

  const keywordPoints = Number((kwRatio * question.scoringRules.keywordWeight).toFixed(2));
  const conceptPoints = Number((cpRatio * question.scoringRules.conceptWeight).toFixed(2));

  // Structure points: based on sufficient length + sentence completeness
  const lengthRatio = Math.min(1, wordCount / Math.max(1, question.scoringRules.minWordCount * 1.5));
  const structurePoints = Number((lengthRatio * question.scoringRules.structureWeight).toFixed(2));

  const rawScore = keywordPoints + conceptPoints + structurePoints - penaltyPoints;
  const clampedScore = Math.max(0, Math.min(question.scoringRules.maxScore, Number(rawScore.toFixed(1))));

  // 5. Build Deterministic Suggestions from Prewritten Templates
  const suggestionsEn: string[] = [];
  const suggestionsHi: string[] = [];

  if (missingKeywords.length > 0) {
    const missingNamesEn = missingKeywords.map((k) => k.labelEn).join(', ');
    const missingNamesHi = missingKeywords.map((k) => k.labelHi).join(', ');
    suggestionsEn.push(`Include these missing key terms: ${missingNamesEn}.`);
    suggestionsHi.push(`अपने उत्तर में इन छूटे हुए मुख्य शब्दों को शामिल करें: ${missingNamesHi}।`);
  }

  if (missingConcepts.length > 0) {
    missingConcepts.forEach((mc) => {
      suggestionsEn.push(`Make sure to cover: ${mc.conceptEn}.`);
      suggestionsHi.push(`इस बिंदु को स्पष्ट करें: ${mc.conceptHi}।`);
    });
  }

  if (detectedMistakes.length > 0) {
    detectedMistakes.forEach((dm) => {
      suggestionsEn.push(dm.correctionEn);
      suggestionsHi.push(dm.correctionHi);
    });
  }

  if (suggestionsEn.length === 0) {
    suggestionsEn.push('Excellent job! Your answer covered all required keywords and concepts clearly.');
    suggestionsHi.push('शानदार! आपके उत्तर में सभी आवश्यक कीवर्ड्स और मुख्य बिंदु स्पष्ट रूप से शामिल हैं।');
  }

  const summaryEn =
    clampedScore >= 8.5
      ? `Strong Answer (${clampedScore}/10): You covered ${matchedKeywords.length} of ${question.requiredKeywords.length} key points and ${matchedConcepts.length} of ${question.importantConcepts.length} core concepts.`
      : clampedScore >= 5.5
      ? `Good Effort (${clampedScore}/10): You matched ${matchedKeywords.length} of ${question.requiredKeywords.length} keywords. Review the missing points below to improve your score.`
      : `Needs Improvement (${clampedScore}/10): Only ${matchedKeywords.length} of ${question.requiredKeywords.length} required keywords were detected. Compare your answer with the Ideal Answer below.`;

  const summaryHi =
    clampedScore >= 8.5
      ? `शानदार उत्तर (${clampedScore}/10): आपने ${question.requiredKeywords.length} में से ${matchedKeywords.length} कीवर्ड्स और ${question.importantConcepts.length} में से ${matchedConcepts.length} मुख्य अवधारणाओं को कवर किया।`
      : clampedScore >= 5.5
      ? `अच्छा प्रयास (${clampedScore}/10): आपने ${question.requiredKeywords.length} में से ${matchedKeywords.length} कीवर्ड्स शामिल किए। बेहतर स्कोर के लिए छूटे हुए बिंदु देखें।`
      : `सुधार की आवश्यकता (${clampedScore}/10): केवल ${matchedKeywords.length}/${question.requiredKeywords.length} आवश्यक कीवर्ड्स मिले। नीचे दिए गए आदर्श उत्तर से तुलना करें।`;

  return {
    score: clampedScore,
    maxScore: question.scoringRules.maxScore,
    normalizedText,
    tokens,
    wordCount,
    matchedKeywords,
    missingKeywords,
    matchedConcepts,
    missingConcepts,
    detectedMistakes,
    suggestionsEn,
    suggestionsHi,
    summaryEn,
    summaryHi,
    breakdown: {
      keywordPoints,
      conceptPoints,
      structurePoints,
      penaltyPoints,
    },
  };
}
