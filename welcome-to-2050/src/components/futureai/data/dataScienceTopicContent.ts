import type { TopicAssessmentData } from './module01TopicContent';
import { DS_M01_M11_PRACTICE_ASSESSMENTS } from './dsPracticeAssessmentsGenerated';
import { ALL_DS_TAB3_TO_8_BLUEPRINTS } from '../visualNotes/dataScienceVisualNotesData';
import {
  buildAssessmentFromBlueprint,
  type DsTopicBlueprint,
} from '../visualNotes/dsCurriculumBlueprintEngine';

const DS_TOPIC_1_ASSESSMENT: TopicAssessmentData = {
  topicId: 1,
  topicNumber: 1,
  topicTitle: 'What Is Data Science?',
  pdfPages: 'DS M01 • Pages 1–3',
  mcqs: [
    {
      id: 1,
      tag: 'Core Definition',
      difficulty: 'Beginner',
      question:
        'Which three core pillars come together to form Data Science?',
      options: [
        { key: 'A', text: 'Graphic Design, Video Editing, and Copywriting' },
        { key: 'B', text: 'Statistics & Math, Programming & ML, and Business Domain Knowledge' },
        { key: 'C', text: 'Only Excel Formulas and PowerPoint Slides' },
        { key: 'D', text: 'Hardware Networking, Routing, and BIOS Configuration' },
      ],
      correct: 1,
      hint: 'Think about the 3 circles: Numbers (Math), Code (Python/ML), and Real-World Industry Context.',
      explanation:
        'Data Science sits at the intersection of Statistics & Math, Programming & Machine Learning (Python/SQL), and Business Domain Knowledge.',
      realWorldContext:
        'At companies like Amazon and Swiggy, Data Scientists combine Python models with statistics and retail/logistics domain understanding.',
    },
    {
      id: 2,
      tag: 'DS vs DA',
      difficulty: 'Fundamental',
      question:
        'How is Data Science primarily different from traditional Data Analytics?',
      options: [
        { key: 'A', text: 'Data Science never uses SQL or Python' },
        { key: 'B', text: 'Data Analytics focuses on past/present insights, while Data Science also builds ML models to predict future outcomes' },
        { key: 'C', text: 'Data Science only creates static Excel charts' },
        { key: 'D', text: 'There is zero difference between the two roles' },
      ],
      correct: 1,
      hint: 'Analytics looks at "what happened & why"; Data Science goes further to ask "what will happen next?"',
      explanation:
        'Data Analytics explains historical & current performance (dashboards, KPIs), while Data Science uses statistical & ML models to forecast future behavior and automate decisions.',
      realWorldContext:
        'An Analyst reports last month’s customer drop; a Data Scientist builds a churn model to predict who will leave next month.',
    },
    {
      id: 3,
      tag: 'Lifecycle Order',
      difficulty: 'Fundamental',
      question:
        'In the 5-Stage Data Science Lifecycle, what MUST happen right after collecting raw data and BEFORE training a Machine Learning model?',
      options: [
        { key: 'A', text: 'Deploy the model directly to production' },
        { key: 'B', text: 'Clean & Prepare the data, then Explore patterns (EDA)' },
        { key: 'C', text: 'Delete all numerical columns' },
        { key: 'D', text: 'Skip directly to making predictions' },
      ],
      correct: 1,
      hint: 'Remember the golden rule: "Garbage In, Garbage Out!"',
      explanation:
        'Raw data almost always contains missing values, duplicates, and noise. Cleaning & Exploratory Data Analysis (EDA) ensure the ML model learns accurate patterns.',
      realWorldContext:
        'Data Scientists spend 60–70% of project time cleaning & understanding data because clean data beats complex algorithms every time.',
    },
    {
      id: 4,
      tag: 'Real-World Use Case',
      difficulty: 'Beginner',
      question:
        'Which of the following is a classic real-world Data Science application?',
      options: [
        { key: 'A', text: 'Netflix predicting which show you will watch next based on viewing history' },
        { key: 'B', text: 'Typing a letter in Notepad' },
        { key: 'C', text: 'Changing your laptop screen brightness manually' },
        { key: 'D', text: 'Renaming a folder on your desktop' },
      ],
      correct: 0,
      hint: 'Look for the option that uses historical user data + ML to make personalized predictions.',
      explanation:
        'Netflix recommendation engines use collaborative filtering and machine learning on viewing logs to predict what each user wants to watch next.',
      realWorldContext:
        'Over 75% of viewer engagement on Netflix comes directly from Data Science recommendation models.',
    },
    {
      id: 5,
      tag: 'Churn Prediction',
      difficulty: 'Core',
      question:
        'A subscription app notices Customer Meera logged in only 2 times this month and raised 5 support tickets. What does a Data Science churn model do?',
      codeSnippet: `if logins < 5 and tickets >= 3:\n    status = "HIGH CHURN RISK"`,
      options: [
        { key: 'A', text: 'Ignores the customer until they cancel' },
        { key: 'B', text: 'Flags Meera as High Churn Risk early so the retention team can proactively help her' },
        { key: 'C', text: 'Deletes Meera from the database' },
        { key: 'D', text: 'Marks Meera as the most loyal user' },
      ],
      correct: 1,
      hint: 'Prediction is valuable because it enables proactive action BEFORE the loss happens.',
      explanation:
        'Low engagement + high complaints strongly signal churn. Flagging Meera early lets the business resolve her issues and retain her subscription.',
      realWorldContext:
        'Telecom & SaaS companies save millions every year by intervening early on high-risk churn predictions.',
    },
  ],
  game: {
    l1: {
      title: 'Warm-Up Puzzle: Order the Data Science Lifecycle',
      question:
        'Arrange the 5 stages of a real Data Science project in the exact industry sequence from raw data to business impact!',
      blocks: [
        { id: 'b-eda', text: '3. Explore Data (EDA)' },
        { id: 'b-collect', text: '1. Collect Raw Data' },
        { id: 'b-predict', text: '5. Predict & Decide' },
        { id: 'b-clean', text: '2. Clean & Prep Data' },
        { id: 'b-model', text: '4. Build ML Model' },
      ],
      correctOrder: ['b-collect', 'b-clean', 'b-eda', 'b-model', 'b-predict'],
      explanation:
        'Every real Data Science project flows cleanly: Collect Raw Data → Clean & Prep → Explore (EDA) → Build ML Model → Predict & Decide!',
    },
    l2: {
      title: 'Think: Predict the Churn Risk Output',
      question:
        'Trace this real-world Data Science scoring logic carefully. What will Python print for Customer Meera?',
      snippetLines: [
        'logins = 2',
        'tickets = 5',
        'risk = "HIGH RISK" if logins < 5 and tickets >= 3 else "SAFE"',
        'print("Meera ->", risk)',
      ],
      options: [
        {
          id: 'opt-a',
          text: 'Meera -> SAFE',
          isCorrect: false,
          note: 'Check both conditions: 2 < 5 is True AND 5 >= 3 is True!',
        },
        {
          id: 'opt-b',
          text: 'Meera -> HIGH RISK',
          isCorrect: true,
          note: 'Spot on! Both logins < 5 (2 < 5) and tickets >= 3 (5 >= 3) are True, so Meera is flagged as HIGH RISK.',
        },
        {
          id: 'opt-c',
          text: 'Meera -> 7',
          isCorrect: false,
          note: 'We are not adding logins and tickets; we are evaluating a conditional rule.',
        },
        {
          id: 'opt-d',
          text: 'SyntaxError',
          isCorrect: false,
          note: 'Python inline if-else expressions are completely valid syntax!',
        },
      ],
    },
    l3: {
      title: 'Bug Hunter: Fix the Broken Churn Detector',
      question:
        'A junior Data Scientist wrote a rule to flag customers with LOW logins (< 5) and HIGH tickets (>= 3), but there is a bug! Click the buggy line and patch it.',
      lines: [
        { line: 1, text: 'logins = 2', isBug: false },
        { line: 2, text: 'tickets = 5', isBug: false },
        {
          line: 3,
          text: 'if logins > 5 and tickets >= 3:',
          isBug: true,
          bugMsg: 'Wrong comparison operator! Low logins should be < 5, not > 5.',
        },
        { line: 4, text: '    print("Alert: High Churn Risk")', isBug: false },
      ],
      bugLine: 3,
      patches: [
        {
          id: 'p1',
          code: 'if logins < 5 and tickets >= 3:',
          label: 'Use < 5 to catch low-engagement customers',
          isCorrect: true,
        },
        {
          id: 'p2',
          code: 'if logins == 50 and tickets == 0:',
          label: 'Flag only loyal customers',
          isCorrect: false,
        },
        {
          id: 'p3',
          code: 'if logins > 100:',
          label: 'Ignore support tickets completely',
          isCorrect: false,
        },
      ],
    },
    l4: {
      title: 'Build & Run: Complete the Data Science Pipeline',
      question:
        'Snap the right pipeline steps into Slot 1 and Slot 2 so raw customer data is cleaned BEFORE making churn predictions!',
      prefixCode: 'raw_df = load_customer_logs()\nclean_df = ',
      slot1Target: 'Step 1 (Data Cleaning)',
      midCode: '(raw_df)\npredictions = ',
      slot2Target: 'Step 2 (ML Prediction)',
      suffixCode: '(clean_df)\nprint("Ready:", len(predictions))',
      availableTokens: ['clean_data', 'predict_churn', 'delete_all', 'random_guess'],
      correctSlot1: 'clean_data',
      correctSlot2: 'predict_churn',
      expectedOutput: 'Ready: 1250',
    },
    l5: {
      bossName: 'E-Commerce Retention Boss',
      title: 'Real-World Challenge: Save At-Risk Customers',
      question:
        'An e-commerce company lost 18% of repeat buyers last quarter. Use Data Science thinking to identify at-risk buyers early!',
      scenario:
        'You have a dataset of 1,000 subscribers with their monthly logins and support tickets. Leadership wants to prevent churn BEFORE customers cancel.',
      phase1Prompt:
        'Phase 1 — Strategy: Which Data Science approach solves this problem best?',
      phase1Options: [
        {
          id: 'ds-opt-1',
          text: 'Clean user logs, engineer login & ticket features, train a Churn Prediction model, and trigger proactive support offers.',
          isCorrect: true,
        },
        {
          id: 'ds-opt-2',
          text: 'Guess randomly which customers might leave without looking at any data.',
          isCorrect: false,
        },
        {
          id: 'ds-opt-3',
          text: 'Wait until the end of the year and only count how many people already left.',
          isCorrect: false,
        },
      ],
      phase2Prompt:
        'Phase 2 — Build: Write Python code to count how many customers in `risk_scores = [0.12, 0.88, 0.19, 0.84]` have high churn risk (> 0.70) and print `High Risk: 2`.',
      phase2Starter: `risk_scores = [0.12, 0.88, 0.19, 0.84]\nhigh_risk = sum(1 for r in risk_scores if r > 0.70)\nprint("High Risk:", high_risk)`,
      phase2Solution: `risk_scores = [0.12, 0.88, 0.19, 0.84]\nhigh_risk = sum(1 for r in risk_scores if r > 0.70)\nprint("High Risk:", high_risk)`,
      phase2ExpectedOutput: 'High Risk: 2',
    },
  },
  codingChallenges: [
    {
      id: 1,
      title: 'Flag High-Risk Customers from Feature Data',
      prompt:
        'Given a list of customer dictionaries with `logins` and `tickets`, print the names of customers who have `logins < 5` and `tickets >= 3`.',
      expectedApproach:
        'Loop through each customer record, check both feature conditions, and output at-risk customer names.',
      starterCode: `customers = [\n    {"name": "Aarav", "logins": 24, "tickets": 0},\n    {"name": "Meera", "logins": 2, "tickets": 5},\n    {"name": "Sana", "logins": 1, "tickets": 4},\n]\n\nfor c in customers:\n    if c["logins"] < 5 and c["tickets"] >= 3:\n        print(c["name"])`,
      solutionCode: `customers = [\n    {"name": "Aarav", "logins": 24, "tickets": 0},\n    {"name": "Meera", "logins": 2, "tickets": 5},\n    {"name": "Sana", "logins": 1, "tickets": 4},\n]\n\nfor c in customers:\n    if c["logins"] < 5 and c["tickets"] >= 3:\n        print(c["name"])`,
      expectedOutput: 'Meera\nSana',
      hints: [
        {
          step: 1,
          title: 'Inspect the Features',
          desc: 'Each customer dictionary has `logins` and `tickets` keys.',
          code: 'if c["logins"] < 5 and c["tickets"] >= 3:',
        },
        {
          step: 2,
          title: 'Print At-Risk Names',
          desc: 'Print `c["name"]` whenever both risk conditions are satisfied.',
          code: 'print(c["name"])',
        },
      ],
    },
    {
      id: 2,
      title: 'Calculate Overall Churn Risk Rate (%)',
      prompt:
        'Given `risk_scores = [0.12, 0.88, 0.19, 0.84]`, compute what percentage of customers are above 0.70 risk and print `50.0%`.',
      expectedApproach:
        'Count scores > 0.70, divide by total customers, multiply by 100, and format with %.',
      starterCode: `risk_scores = [0.12, 0.88, 0.19, 0.84]\nhigh = sum(1 for r in risk_scores if r > 0.70)\npct = (high / len(risk_scores)) * 100\nprint(f"{pct:.1f}%")`,
      solutionCode: `risk_scores = [0.12, 0.88, 0.19, 0.84]\nhigh = sum(1 for r in risk_scores if r > 0.70)\npct = (high / len(risk_scores)) * 100\nprint(f"{pct:.1f}%")`,
      expectedOutput: '50.0%',
      hints: [
        {
          step: 1,
          title: 'Count High-Risk Users',
          desc: 'Use a generator expression with `sum()` to count values > 0.70.',
          code: 'high = sum(1 for r in risk_scores if r > 0.70)',
        },
      ],
    },
  ],
  interviewQuestions: [
    {
      id: 1,
      tag: 'Core Definition',
      question: 'Explain "What is Data Science?" in simple terms to a non-technical business manager.',
      modelAnswer:
        'Data Science is the practice of turning raw business records into future predictions and smarter decisions by combining Statistics, Programming (Python/SQL), and Business Knowledge. For example, instead of guessing which customers might stop buying, a Data Science model analyzes past logins and complaints to predict at-risk customers early so the team can retain them.',
    },
    {
      id: 2,
      tag: 'DS vs DA',
      question: 'What is the key difference between Data Analytics and Data Science?',
      modelAnswer:
        'Data Analytics primarily focuses on understanding the past and present — answering "What happened?" and "Why did it happen?" using tools like Excel, SQL, and Power BI. Data Science goes a step further into the future — answering "What will happen next?" and "How can we automate the best action?" using Python, Statistics, and Machine Learning models.',
    },
    {
      id: 3,
      tag: 'Lifecycle',
      question: 'Walk me through the 5 stages of a real-world Data Science project lifecycle.',
      modelAnswer:
        'A standard Data Science project follows 5 stages: (1) Collect raw data from databases, logs, or APIs; (2) Clean & Prepare the data by fixing missing values, duplicates, and formatting errors; (3) Explore Data (EDA) with charts and summary statistics to uncover patterns; (4) Build & Validate a Machine Learning model; and (5) Deploy Predictions to drive measurable business decisions.',
    },
    {
      id: 4,
      tag: 'Data Quality',
      question: 'Why do Data Scientists spend so much time cleaning data before building ML models?',
      modelAnswer:
        'Because of "Garbage In, Garbage Out." Machine Learning models learn directly from the data you feed them. If the input contains missing values, wrong units, or duplicate rows, even the most advanced algorithm will learn wrong patterns and make unreliable predictions in production.',
    },
    {
      id: 5,
      tag: 'Real-World Case',
      question: 'Give two real-life examples where Data Science creates massive business value.',
      modelAnswer:
        'First, Netflix & Amazon Recommendation Engines analyze viewing/purchase patterns to predict what users want next, driving over 75% of clicks. Second, Banking Fraud Detection models analyze transaction speed, location, and amount in milliseconds to block fraudulent credit card charges before money is stolen.',
    },
  ],
};

const DS_ASSESSMENTS_MAP: Record<number, TopicAssessmentData> = {
  ...DS_M01_M11_PRACTICE_ASSESSMENTS,
  1: DS_TOPIC_1_ASSESSMENT,
};

const DS_TAB3_8_BP_MAP: Record<number, DsTopicBlueprint> = {};
for (const bp of ALL_DS_TAB3_TO_8_BLUEPRINTS) {
  DS_TAB3_8_BP_MAP[bp.id] = bp;
}
const DS_BUILT_ASSESSMENTS_CACHE: Record<number, TopicAssessmentData> = {};

export function hasDataScienceTopicData(topicId: number): boolean {
  return Boolean(DS_ASSESSMENTS_MAP[topicId] || DS_TAB3_8_BP_MAP[topicId]);
}

export function getDataScienceTopicData(topicId: number): TopicAssessmentData | null {
  if (DS_ASSESSMENTS_MAP[topicId]) return DS_ASSESSMENTS_MAP[topicId];
  if (DS_BUILT_ASSESSMENTS_CACHE[topicId]) return DS_BUILT_ASSESSMENTS_CACHE[topicId];
  const bp = DS_TAB3_8_BP_MAP[topicId];
  if (!bp) return null;
  const built = buildAssessmentFromBlueprint(bp);
  DS_BUILT_ASSESSMENTS_CACHE[topicId] = built;
  return built;
}
