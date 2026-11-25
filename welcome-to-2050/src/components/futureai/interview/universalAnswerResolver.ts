/**
 * FUTURE IT INDUSTRY — Universal Interview Answer Resolver
 * 
 * Dynamically resolves, cleans, and structures human-sounding interview answers
 * for ANY question across ALL tracks (Data Analyst, Data Science, AI Engineering,
 * ML Engineering, Full Stack, and future tracks).
 * 
 * Rules enforced:
 * - Simple, professional, conversational English for freshers (0–1 year exp).
 * - No generic AI phrases ("In today's rapidly evolving...", "In conclusion...", etc.).
 * - Clean spoken structure: Main Answer + Memory Cue + Everyday Example + Follow-up.
 * - Dynamic resolution without hardcoding question IDs.
 */

export interface UniversalAnswerDetails {
  spokenAnswer: string;
  codeSnippet?: {
    language: string;
    code: string;
  };
  memoryCue: string[];
  memoryCueText: string;
  simpleExample?: {
    title: string;
    scenario: string;
  };
  followUp: {
    question: string;
    answer: string;
  };
  wordCount: number;
  difficulty: 'Basic' | 'Core' | 'Intermediate';
}

// Banned robotic clichés that must never appear in candidate spoken answers
const ROBOTIC_CLICHES = [
  /in today'?s rapidly evolving (?:technological )?landscape,?\s*/gi,
  /it is important to note that\s*/gi,
  /it is worth noting that\s*/gi,
  /in conclusion,?\s*/gi,
  /to sum up,?\s*/gi,
  /this plays a pivotal role in\s*/gi,
  /plays a pivotal role\s*/gi,
  /let'?s delve into\s*/gi,
  /as an ai,?\s*/gi,
  /furthermore, it should be mentioned that\s*/gi,
  /in a nutshell,?\s*/gi,
];

/**
 * Strips robotic phrases and normalizes answer into natural spoken English.
 */
function cleanSpokenAnswer(rawText: string): string {
  if (!rawText) return '';
  let cleaned = rawText.trim();

  for (const pattern of ROBOTIC_CLICHES) {
    cleaned = cleaned.replace(pattern, '');
  }

  // Capitalize first character if lowercase
  cleaned = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  return cleaned;
}

/**
 * Detects if an answer or question contains programming code (SQL, Python, JS/TS, DAX).
 */
function extractCodeSnippet(text: string, category: string, sectionTitle: string): { language: string; code: string } | undefined {
  if (!text) return undefined;

  // Check for markdown code blocks first
  const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/;
  const blockMatch = text.match(codeBlockRegex);
  if (blockMatch) {
    return {
      language: blockMatch[1] || 'python',
      code: blockMatch[2].trim(),
    };
  }

  // Check for SQL statements
  const isSql = /SELECT\s+[\s\S]+?\s+FROM\s+[\w\.]+/i.test(text);
  if (isSql && (sectionTitle.toLowerCase().includes('sql') || category.toLowerCase().includes('sql'))) {
    const sqlMatch = text.match(/(SELECT[\s\S]+?;)/i) || text.match(/(SELECT[\s\S]+?(?:WHERE|GROUP BY|ORDER BY|LIMIT)[\s\S]+?)(?:\.|$)/i);
    if (sqlMatch) {
      return { language: 'sql', code: sqlMatch[1].trim() };
    }
  }

  // Check for Python code
  const isPython = /(?:def\s+\w+\(|import\s+pandas|pd\.DataFrame|np\.array|for\s+\w+\s+in\s+)/.test(text);
  if (isPython && (sectionTitle.toLowerCase().includes('python') || sectionTitle.toLowerCase().includes('pandas'))) {
    const lines = text.split('\n');
    const codeLines = lines.filter((l) => /^\s*(def |import |from |for |if |return |pd\.|np\.|result =)/.test(l));
    if (codeLines.length >= 2) {
      return { language: 'python', code: codeLines.join('\n').trim() };
    }
  }

  return undefined;
}

/**
 * Generates a concise 3–5 milestone memory cue connected with "→".
 */
function generateMemoryCue(question: any): { cueArray: string[]; cueText: string } {
  // If the question already has structured keyPoints, polish them into punchy 2-4 word milestones
  if (Array.isArray(question.keyPoints) && question.keyPoints.length >= 2) {
    const points = question.keyPoints.slice(0, 4).map((p: string) => {
      // Shorten each point into 2-4 key words
      return p
        .replace(/^(understanding|identifying|implementing|building|applying|explaining)\s+/i, '')
        .split(/[,:;—\(\)]/)[0]
        .trim();
    }).filter(Boolean);

    if (points.length >= 2) {
      return {
        cueArray: points,
        cueText: points.join(' → '),
      };
    }
  }

  // Domain & concept-based intelligent fallback cues
  const qText = (question.questionEn || '').toLowerCase();
  const sec = (question.sectionTitle || '').toLowerCase();

  if (sec.includes('excel') || qText.includes('vlookup') || qText.includes('xlookup')) {
    return {
      cueArray: ['Lookup Value', 'Table Range', 'Column Index', 'Exact Match (0)'],
      cueText: 'Lookup Value → Table Range → Column Index → Exact Match (0)',
    };
  }
  if (sec.includes('sql') || qText.includes('join') || qText.includes('select')) {
    return {
      cueArray: ['SELECT Columns', 'FROM Source Table', 'JOIN Related Table', 'WHERE & GROUP BY'],
      cueText: 'SELECT Columns → FROM Source Table → JOIN Related Table → WHERE & GROUP BY',
    };
  }
  if (sec.includes('power bi') || qText.includes('dax') || qText.includes('dashboard')) {
    return {
      cueArray: ['Data Model (Star Schema)', 'DAX Measures', 'Visual Layout', 'Executive Insights'],
      cueText: 'Star Schema → DAX Measures → Visual Layout → Executive Insights',
    };
  }
  if (sec.includes('rag') || qText.includes('rag') || qText.includes('vector')) {
    return {
      cueArray: ['Chunk Documents', 'Embed into Vector DB', 'Retrieve Top-K Context', 'Augment LLM Prompt'],
      cueText: 'Chunk Docs → Vector Embeddings → Retrieve Top-K → Augment LLM Prompt',
    };
  }
  if (sec.includes('prompt') || qText.includes('prompt')) {
    return {
      cueArray: ['System Persona', 'Clear Context', 'Explicit Output Format', 'Few-Shot Examples'],
      cueText: 'System Persona → Clear Context → Output Format → Few-Shot Examples',
    };
  }
  if (sec.includes('machine learning') || qText.includes('model') || qText.includes('supervised')) {
    return {
      cueArray: ['Data Preprocessing', 'Feature Selection', 'Model Training', 'Evaluation & Tuning'],
      cueText: 'Data Preprocessing → Feature Selection → Model Training → Evaluation & Tuning',
    };
  }
  if (sec.includes('statistics') || qText.includes('p-value') || qText.includes('hypothesis')) {
    return {
      cueArray: ['Null Hypothesis (H0)', 'Sample Data', 'P-Value Calculation', 'Business Decision'],
      cueText: 'Null Hypothesis (H0) → Sample Data → P-Value vs Alpha → Business Decision',
    };
  }
  if (sec.includes('react') || sec.includes('frontend') || qText.includes('state')) {
    return {
      cueArray: ['Component Mount', 'State Change', 'Virtual DOM Diff', 'UI Re-render'],
      cueText: 'Component Mount → State Change → Virtual DOM Diff → UI Re-render',
    };
  }
  if (sec.includes('node') || sec.includes('backend') || qText.includes('api')) {
    return {
      cueArray: ['Client Request', 'Middleware Validation', 'Async Controller', 'JSON Response'],
      cueText: 'Client Request → Middleware Validation → Async Controller → JSON Response',
    };
  }
  if (sec.includes('hr') || qText.includes('yourself') || qText.includes('hire')) {
    return {
      cueArray: ['Education & Passion', 'Hands-on Projects', 'Key Technical Toolkit', 'Value to Company'],
      cueText: 'Education & Passion → Hands-on Projects → Key Technical Toolkit → Value to Company',
    };
  }

  // Universal Default Cue
  return {
    cueArray: ['Raw Input', 'Systematic Processing', 'Actionable Insights', 'Business Value'],
    cueText: 'Raw Input → Systematic Processing → Actionable Insights → Business Value',
  };
}

/**
 * Generates an everyday, practical real-world scenario/analogy for the concept.
 */
function generateSimpleExample(question: any): { title: string; scenario: string } | undefined {
  const qText = (question.questionEn || '').toLowerCase();
  const sec = (question.sectionTitle || '').toLowerCase();
  const cat = (question.category || '').toLowerCase();

  // If question is pure syntax or theoretical math where forced example feels awkward, skip
  if (qText.startsWith('practical: write') || qText.includes('syntax for')) {
    return undefined;
  }

  // Data Analytics Fundamentals
  if (qText.includes('data analytics') || qText.includes('data science') && qText.includes('difference')) {
    return {
      title: 'Retail Store Sales Analysis',
      scenario: 'Imagine an online shoe store: Data Analytics explains which sneaker had the highest return rate last month and why (e.g., wrong size chart), whereas Data Science predicts next season’s demand so the warehouse orders the right stock in advance.',
    };
  }
  if (qText.includes('structured') && qText.includes('unstructured')) {
    return {
      title: 'Spreadsheets vs Customer Video Reviews',
      scenario: 'A structured dataset is like an Excel table with Customer ID, Order Date, and Amount in strict columns. Unstructured data is like 500 video reviews and customer voice recordings that require AI processing to analyze.',
    };
  }
  if (qText.includes('kpi') || qText.includes('metric')) {
    return {
      title: 'E-commerce Checkout Funnel',
      scenario: 'A company tracks "Cart Abandonment Rate" as a core KPI. If 1,000 shoppers add items but only 300 complete payment, the 70% abandonment rate signals an urgent checkout friction or payment gateway bug.',
    };
  }

  // SQL & Databases
  if (sec.includes('sql') || cat.includes('sql')) {
    if (qText.includes('join')) {
      return {
        title: 'Customer Orders Table Matching',
        scenario: 'An INNER JOIN matches a Customers table with an Orders table, showing only users who made purchases. A LEFT JOIN shows every customer in the database, leaving the order columns empty for customers who haven’t bought anything yet.',
      };
    }
    if (qText.includes('group by') || qText.includes('having')) {
      return {
        title: 'Department Salary Aggregation',
        scenario: 'GROUP BY department calculates the average salary for Marketing, Sales, and IT. HAVING filters those groups to show only departments where the average salary exceeds $80,000.',
      };
    }
    return {
      title: 'Database Querying in Action',
      scenario: 'Think of querying a hospital database: instead of scanning 100,000 patient charts manually, a single SQL query instantly filters patients admitted in the last 24 hours needing urgent follow-up.',
    };
  }

  // Excel & Spreadsheets
  if (sec.includes('excel')) {
    if (qText.includes('vlookup') || qText.includes('xlookup')) {
      return {
        title: 'HR Employee Lookup',
        scenario: 'You type an Employee ID into cell A2, and XLOOKUP automatically pulls their exact Department and Salary from a master spreadsheet with 10,000 employees without manual scrolling.',
      };
    }
    if (qText.includes('pivot table')) {
      return {
        title: 'Monthly Revenue Summarization',
        scenario: 'You take a raw log of 50,000 daily sales transactions and, in 10 seconds, drag Region to Rows and Revenue to Values to immediately see which state generated the highest income.',
      };
    }
    return {
      title: 'Excel Business Automation',
      scenario: 'Combining dynamic formulas like SUMIFS and Conditional Formatting lets an inventory manager highlight out-of-stock items in bright red the moment quantity drops below 10.',
    };
  }

  // Power BI & DAX
  if (sec.includes('power bi') || qText.includes('dax')) {
    return {
      title: 'Executive Sales Dashboard',
      scenario: 'A DAX measure like `YoY Sales Growth = DIVIDE([Current Year] - [Last Year], [Last Year])` calculates live growth percentages dynamically across any country an executive clicks on the world map.',
    };
  }

  // Machine Learning & AI
  if (qText.includes('supervised') && qText.includes('unsupervised')) {
    return {
      title: 'Spam Filter vs Customer Grouping',
      scenario: 'Supervised learning is like teaching a spam filter with 10,000 emails already labeled "Spam" or "Not Spam". Unsupervised learning is giving the algorithm 10,000 customer profiles and letting it group them into shopping behavior clusters without pre-made labels.',
    };
  }
  if (qText.includes('overfitting') || qText.includes('underfitting')) {
    return {
      title: 'Exam Preparation Analogy',
      scenario: 'Overfitting is like memorizing the exact answers of past exam papers word-for-word: you get 100% on old practice tests, but fail when a new question appears. Underfitting is reading only the headlines and understanding neither past nor new questions.',
    };
  }
  if (sec.includes('rag') || qText.includes('rag')) {
    return {
      title: 'Company Policy HR Assistant',
      scenario: 'Instead of having ChatGPT guess company rules from general internet data, RAG retrieves the exact 2026 maternity leave clause from your company’s internal PDF and passes it to the LLM to write an accurate answer.',
    };
  }
  if (sec.includes('vector') || qText.includes('embedding')) {
    return {
      title: 'Semantic Search in a Library',
      scenario: 'Vector embeddings convert sentences into numerical coordinates. Searching for "puppy training tips" naturally finds books titled "How to Care for Young Dogs" because their mathematical coordinates sit right next to each other.',
    };
  }

  // Full Stack & Web Engineering
  if (sec.includes('react') || qText.includes('virtual dom')) {
    return {
      title: 'Social Media Like Button',
      scenario: 'When you tap "Like" on an Instagram post, React updates only that specific heart icon and count number in the Virtual DOM, rather than refreshing the entire feed.',
    };
  }
  if (sec.includes('jwt') || qText.includes('authentication') || qText.includes('token')) {
    return {
      title: 'Concert Wristband Access',
      scenario: 'A JWT token is like a VIP concert wristband: once the gate verifies your ticket, you wear the wristband and show it at the food counter and stage door without having to re-enter your password each time.',
    };
  }

  // HR & Behavioral
  if (sec.includes('hr') || cat.includes('behavioral') || qText.includes('yourself')) {
    return {
      title: 'Spoken Framing Tip',
      scenario: 'Structure your answer around the Present, Past, and Future: briefly share what you do today, mention a key project you built that taught you critical skills, and explain why this specific company is where you want to grow.',
    };
  }

  // General Fallback
  return {
    title: 'Practical Application',
    scenario: 'In production systems, applying this principle ensures clean data pipelines, predictable response times, and measurable business improvements that stakeholders can track on executive dashboards.',
  };
}

/**
 * Generates an authentic, likely follow-up question and model spoken response.
 */
function generateFollowUp(question: any): { question: string; answer: string } {
  const qText = (question.questionEn || '').toLowerCase();
  const sec = (question.sectionTitle || '').toLowerCase();
  const cat = (question.category || '').toLowerCase();

  if (qText.includes('data analytics') || qText.includes('data analyst')) {
    return {
      question: 'What is the most common reason data analytics projects fail to produce business impact?',
      answer: 'Most often, it is poor data quality or a misalignment between technical metrics and business goals. Spending time upfront to understand what decision the business actually needs to make solves this.',
    };
  }
  if (qText.includes('sql') || sec.includes('sql')) {
    return {
      question: 'How do you optimize a slow-running SQL query in production?',
      answer: 'I inspect the EXPLAIN execution plan to check for full table scans, verify indexing on columns used in WHERE and JOIN clauses, and eliminate unnecessary subqueries or SELECT * statements.',
    };
  }
  if (qText.includes('excel') || sec.includes('excel')) {
    return {
      question: 'Why would a company migrate from Excel to SQL or Power BI as their data grows?',
      answer: 'Excel hits performance and file-size limits around 1 million rows, lacks automated multi-source pipelines, and poses version-control risks when multiple team members edit files simultaneously.',
    };
  }
  if (qText.includes('supervised') || qText.includes('unsupervised') || sec.includes('machine learning')) {
    return {
      question: 'How do you decide whether a problem requires Machine Learning or a simple rule-based script?',
      answer: 'If the business rules are fixed, transparent, and manageable (like IF-ELSE tax calculations), rule-based logic is faster and safer. When patterns are too complex, non-linear, or constantly changing (like fraud detection), Machine Learning is necessary.',
    };
  }
  if (sec.includes('rag') || qText.includes('rag') || sec.includes('genai')) {
    return {
      question: 'What is "hallucination" in an LLM, and how does your architecture prevent it?',
      answer: 'Hallucination occurs when an LLM generates plausible-sounding but factually incorrect statements. We mitigate it using RAG with strict temperature settings, grounded system prompts, and source citation validation.',
    };
  }
  if (sec.includes('vector') || qText.includes('embedding')) {
    return {
      question: 'What is the difference between cosine similarity and Euclidean distance in vector search?',
      answer: 'Cosine similarity measures the angle between vectors, capturing direction and semantic meaning regardless of document length. Euclidean distance measures straight-line distance, which can be distorted by document size.',
    };
  }
  if (sec.includes('react') || sec.includes('full stack')) {
    return {
      question: 'What causes unnecessary re-renders in React, and how do you prevent them?',
      answer: 'Passing new object references or inline functions as props causes child components to re-render. We prevent this using React.memo, useMemo for expensive calculations, and useCallback for stable callback references.',
    };
  }
  if (sec.includes('hr') || cat.includes('behavioral')) {
    return {
      question: 'Where do you see yourself in the next 2 to 3 years within our engineering team?',
      answer: 'I aim to master our tech stack, independently own end-to-end features or analytical pipelines, and progressively mentor newer team members while contributing directly to core product metrics.',
    };
  }

  // Universal fallback follow-up
  return {
    question: 'How do you handle edge cases or unexpected missing values when applying this in production?',
    answer: 'I implement automated validation checks at the entry point of the pipeline, log discrepancies with alerts, and establish fallback defaults so downstream services never crash silently.',
  };
}

/**
 * Universal Answer Resolver:
 * Takes any question object from any question bank and produces a complete,
 * beautifully structured, fresher-ready interview answer card payload.
 */
export function resolveUniversalAnswer(question: any, roleKey?: string): UniversalAnswerDetails {
  if (!question) {
    return {
      spokenAnswer: 'Please select a question to view its natural interview answer.',
      memoryCue: ['Select Question', 'Review Concepts', 'Practice Speaking'],
      memoryCueText: 'Select Question → Review Concepts → Practice Speaking',
      followUp: {
        question: 'Ready to begin?',
        answer: 'Pick any question from the bank to start your interview preparation.',
      },
      wordCount: 0,
      difficulty: 'Basic',
    };
  }

  const rawAnswer = question.idealAnswerEn || question.exampleAnswerEn || question.hintEn || '';
  const spoken = cleanSpokenAnswer(rawAnswer);
  const code = extractCodeSnippet(rawAnswer, question.category || '', question.sectionTitle || '');
  const { cueArray, cueText } = generateMemoryCue(question);
  const example = generateSimpleExample(question);
  const followUp = generateFollowUp(question);

  const wordCount = spoken.split(/\s+/).filter(Boolean).length;

  return {
    spokenAnswer: spoken,
    codeSnippet: code,
    memoryCue: cueArray,
    memoryCueText: cueText,
    simpleExample: example,
    followUp,
    wordCount,
    difficulty: question.difficulty || 'Core',
  };
}
