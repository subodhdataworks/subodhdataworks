import type { DsTopicBlueprint } from './dsCurriculumBlueprintEngine';

/**
 * Machine Learning Engineering — Tab 1 & Tab 2 (Chapters 1–6, Topics 1–30)
 * Hand-crafted zero-to-hero production ML blueprints:
 *  - Chapter 1: Introduction to Machine Learning Engineering (1–5)
 *  - Chapter 2: Python and Software Engineering Basics (6–10)
 *  - Chapter 3: Mathematics and Statistics for ML (11–15)
 *  - Chapter 4: Data Collection and Validation (16–20)
 *  - Chapter 5: Data Processing Pipelines (21–25)
 *  - Chapter 6: Feature Engineering (26–30)
 */
export const ML_ENG_TABS_1_2_BLUEPRINTS: DsTopicBlueprint[] = [
  {
    id: 1,
    modNum: 1,
    modTitle: 'Introduction to Machine Learning Engineering',
    topicNumInMod: 1,
    title: 'What Is Machine Learning Engineering?',
    subtitle: 'TURNING ML MODELS INTO RELIABLE PRODUCTION SYSTEMS',
    coreEn:
      '**Machine Learning Engineering (MLE)** is the discipline of designing, building, deploying, and maintaining **production ML systems** so that trained models serve **fast, accurate, and reliable predictions** to real users 24/7.',
    coreHi:
      '**Machine Learning Engineering (MLE)** ek engineering discipline hai jisme hum trained ML models ko **fast, accurate aur reliable production systems** mein badalte hain taaki woh real users ko 24/7 predictions de sakein.',
    analogyTitle: 'Car Prototype vs Mass-Production Factory Car',
    analogyEn:
      'A scientist building a model in a Jupyter Notebook is like inventing a prototype race car in a garage. An **ML Engineer** builds the **assembly line, safety brakes, fuel gauge, and service alerts** so millions of people can drive that car safely every day.',
    analogyHi:
      'Jupyter Notebook mein model banana garage mein ek prototype car banane jaisa hai. **ML Engineer** us car ke liye **assembly line, safety brakes, fuel gauge aur service alerts** banata hai taaki laakhon log use roz safely chala sakein.',
    steps: [
      { title: 'Data Pipeline', en: 'Automate clean data ingestion & schema validation', hi: 'Clean data ingestion aur schema validation automate karna', tone: 'sky' },
      { title: 'Model Training', en: 'Train, version, and benchmark candidate models', hi: 'Models train, version aur benchmark karna', tone: 'amber' },
      { title: 'API Deployment', en: 'Package model into Docker + low-latency REST API', hi: 'Model ko Docker aur fast REST API mein deploy karna', tone: 'lavender' },
      { title: 'Live Monitoring', en: 'Track latency, drift, and trigger safe retraining', hi: 'Latency, drift track karna aur safe retraining chalana', tone: 'green' },
    ],
    codeLabel: 'PYTHON — PRODUCTION INFERENCE WRAPPER',
    code: `def predict_fraud_risk(amount: float, txn_hour: int) -> dict:
    if amount < 0 or not (0 <= txn_hour <= 23):
        raise ValueError("Invalid input payload")
    score = 0.88 if (amount > 50000 and txn_hour < 5) else 0.12
    return {"fraud_probability": score, "action": "BLOCK" if score > 0.7 else "ALLOW"}

print(predict_fraud_risk(75000, 2))`,
    codeOutput: `{'fraud_probability': 0.88, 'action': 'BLOCK'}`,
    codeCaptionEn: 'Production ML code validates every **input**, runs inference safely, and returns a structured **API response**.',
    codeCaptionHi: 'Production ML code har **input** ko validate karta hai, safely inference chalata hai aur structured **API response** return karta hai.',
    tableTitle: 'Notebook Experiment vs Production ML System',
    tableHeaders: ['Dimension', 'Notebook Prototype', 'Production ML System (MLE)'],
    tableRows: [
      ['Data Source', 'Static local CSV file', 'Automated live data pipeline with validation'],
      ['Execution', 'Run manually cell-by-cell', 'Versioned Python modules + CI/CD'],
      ['Serving', 'Printed on laptop screen', 'Dockerized FastAPI serving <50ms latency'],
      ['Reliability', 'Breaks silently when data shifts', 'Monitored 24/7 with drift alerts & fallback'],
    ],
    tableNoteEn: 'A model only generates business value after it is **deployed, monitored, and trusted** in production.',
    tableNoteHi: 'Model tabhi asli business value deta hai jab woh production mein **deploy, monitor aur reliable** ho.',
    mistakeEn: 'Stopping after getting 94% accuracy in a messy Jupyter Notebook without testing latency, input validation, or deployment.',
    mistakeHi: 'Messy Jupyter Notebook mein 94% accuracy aane par ruk jana aur latency, validation ya deployment check na karna.',
    proHabitEn: 'Treat every ML model as **production software**: validate inputs, version data & weights, write automated tests, and monitor drift.',
    proHabitHi: 'Har ML model ko **production software** ki tarah treat karein: inputs validate karein, data/weights version karein, tests likhein aur drift monitor karein.',
    jobUseEn: 'Building real-time UPI fraud detection, Swiggy ETA engines, Amazon recommendations, and scalable LLM APIs at top tech companies.',
    jobUseHi: 'Top tech companies mein real-time UPI fraud detection, Swiggy ETA engines, Amazon recommendations aur scalable LLM APIs banana.',
    mcq1Question: 'What is the primary responsibility of a Machine Learning Engineer?',
    mcq1Correct: 'Designing, deploying, scaling, and monitoring reliable ML systems in production.',
    mcq1Wrongs: [
      'Only creating static PowerPoint charts from Excel sheets.',
      'Writing one-time Jupyter Notebooks that are never deployed.',
      'Manually labeling every single customer request by hand.',
    ],
    mcq1Explain: 'ML Engineers bridge ML science and software engineering so models run reliably at scale for real users.',
    mcq2Question: 'Why does a 95% accurate notebook model often fail when moved directly into a live product?',
    mcq2Correct: 'Because production requires input validation, low latency, versioning, error handling, and drift monitoring.',
    mcq2Wrongs: [
      'Because Python cannot run on cloud servers.',
      'Because accuracy automatically becomes 0% after saving a file.',
      'Because live users never send real data.',
    ],
    mcq2Explain: 'Without engineering safeguards like schema checks, Docker packaging, and monitoring, notebook code breaks under real-world traffic.',
    realWorldScenario:
      'Your team built a great loan-default model in a notebook, but the mobile app needs predictions in under 60 milliseconds for 10,000 users per minute. What engineering steps do you take?',
    interviewQ1: 'What is Machine Learning Engineering and why do companies hire dedicated ML Engineers?',
    interviewA1:
      'Machine Learning Engineering combines ML algorithms with production software engineering and MLOps. Companies hire ML Engineers because turning an experimental model into a fast, reproducible, monitored, and fault-tolerant service requires specialized systems skills.',
    interviewQ2: 'What are the four core pillars of a production ML system?',
    interviewA2:
      'Automated data validation & feature pipelines, reproducible versioned model training, low-latency containerized serving APIs, and continuous drift & performance monitoring with safe fallbacks.',
  },
  {
    id: 2,
    modNum: 1,
    modTitle: 'Introduction to Machine Learning Engineering',
    topicNumInMod: 2,
    title: 'Data Science vs ML Engineering',
    subtitle: 'HOW DATA SCIENTISTS AND ML ENGINEERS COLLABORATE',
    coreEn:
      '**Data Scientists** focus on exploring data, running experiments, and discovering insights or prototype models, whereas **ML Engineers** focus on **software architecture, scalable pipelines, API serving, and MLOps reliability**.',
    coreHi:
      '**Data Scientists** data explore karne, experiments chalane aur insights/prototype models banane par focus karte hain, jabki **ML Engineers** **software architecture, scalable pipelines, API serving aur MLOps reliability** par focus karte hain.',
    analogyTitle: 'Master Chef vs Restaurant Chain Operations Engineer',
    analogyEn:
      'A **Data Scientist** invents the winning recipe in a test kitchen. An **ML Engineer** designs the automated kitchen workflow so 500 outlets serve that exact dish hot in 5 minutes without a single food-safety failure.',
    analogyHi:
      '**Data Scientist** test kitchen mein best recipe invent karta hai. **ML Engineer** aisa automated kitchen system banata hai jisse 500 outlets par wahi dish 5 minute mein bina kisi galti ke serve ho sake.',
    steps: [
      { title: 'Explore & Analyze', en: 'Data Scientist explores data & tests hypotheses', hi: 'Data Scientist data explore aur hypothesis test karta hai', tone: 'sky' },
      { title: 'Prototype Model', en: 'Validate baseline metrics on historical data', hi: 'Historical data par baseline metrics verify karna', tone: 'amber' },
      { title: 'Productionize', en: 'ML Engineer refactors into modular pipelines & API', hi: 'ML Engineer modular pipelines aur API mein convert karta hai', tone: 'lavender' },
      { title: 'Scale & Monitor', en: 'Deploy with CI/CD, latency SLAs, and drift alerts', hi: 'CI/CD, latency SLAs aur drift alerts ke saath scale karna', tone: 'green' },
    ],
    tableTitle: 'Data Scientist vs Machine Learning Engineer',
    tableHeaders: ['Aspect', 'Data Scientist', 'Machine Learning Engineer'],
    tableRows: [
      ['Primary Goal', 'Insights, experiments & model discovery', 'Scalable, reliable ML systems in production'],
      ['Daily Tools', 'Jupyter, Pandas, SQL, Stats, Matplotlib', 'Python packages, FastAPI, Docker, Git, CI/CD, MLflow'],
      ['Key Metrics', 'AUC, F1-score, p-value, business lift', 'Latency (p95 ms), throughput (QPS), uptime, drift'],
      ['Deliverable', 'Analysis report & validated model', 'Automated training pipeline + live inference service'],
    ],
    tableNoteEn: 'Top ML Engineers understand **modeling fundamentals** AND write **clean, testable production code**.',
    tableNoteHi: 'Top ML Engineers ko **modeling fundamentals** bhi aate hain aur **clean, testable production code** bhi likhna aata hai.',
    mistakeEn: 'Thinking ML Engineers only do DevOps and never need to understand feature engineering, bias-variance, or evaluation metrics.',
    mistakeHi: 'Yeh sochna ki ML Engineers sirf DevOps karte hain aur unhe feature engineering, bias-variance ya metrics ki zaroorat nahi.',
    proHabitEn: 'Build **T-shaped skills**: strong ML fundamentals + deep software engineering, APIs, Docker, and monitoring.',
    proHabitHi: '**T-shaped skills** banayein: strong ML fundamentals + deep software engineering, APIs, Docker aur monitoring.',
    jobUseEn: 'Collaborating seamlessly with Data Scientists, Backend Engineers, and Product Managers to ship ML features fast.',
    jobUseHi: 'Data Scientists, Backend Engineers aur Product Managers ke saath milkar fast ML features launch karna.',
    mcq1Question: 'Which metric is MOST critical specifically for an ML Engineer managing a live serving API?',
    mcq1Correct: 'p95 inference latency, API uptime, and prediction drift.',
    mcq1Wrongs: [
      'Font color of the presentation deck.',
      'Number of cells inside an unversioned notebook.',
      'How many CSV files are saved on a personal desktop.',
    ],
    mcq1Explain: 'While both roles care about model accuracy, ML Engineers are directly accountable for production latency, uptime, and system reliability.',
    mcq2Question: 'How do Data Scientists and ML Engineers work best together in a tech company?',
    mcq2Correct: 'Data Scientists explore problems and validate modeling ideas, while ML Engineers productionize, scale, and automate them.',
    mcq2Wrongs: [
      'They never communicate or share datasets.',
      'ML Engineers delete all evaluation metrics before deployment.',
      'Data Scientists manage Kubernetes clusters manually.',
    ],
    mcq2Explain: 'Clear handoff and shared standards (versioned data, clean feature definitions) let both roles ship high-impact ML products.',
    realWorldScenario:
      'A Data Scientist hands you a 900-line notebook for customer churn prediction. How do you refactor it into a maintainable production service?',
    interviewQ1: 'How does an ML Engineer role differ from a Data Scientist role?',
    interviewA1:
      'Data Scientists focus primarily on exploratory analysis, experimentation, and proving whether a model can solve a business problem. ML Engineers focus on turning that solution into a reproducible, low-latency, tested, and monitored production software system.',
    interviewQ2: 'Why is software engineering skill mandatory for an ML Engineer?',
    interviewA2:
      'Because production ML requires modular code, Git workflows, unit/integration tests, API design, containerization, and CI/CD—otherwise models break or become impossible to maintain.',
  },
  {
    id: 3,
    modNum: 1,
    modTitle: 'Introduction to Machine Learning Engineering',
    topicNumInMod: 3,
    title: 'ML Product Lifecycle',
    subtitle: 'END-TO-END JOURNEY FROM BUSINESS PROBLEM TO CONTINUOUS RETRAINING',
    coreEn:
      'The **ML Product Lifecycle** is a continuous loop: **Problem Framing → Data & Features → Training & Evaluation → Deployment → Live Monitoring → Retraining**. Launching a model is the beginning, not the end.',
    coreHi:
      '**ML Product Lifecycle** ek continuous loop hai: **Problem Framing → Data & Features → Training & Evaluation → Deployment → Live Monitoring → Retraining**. Model launch karna sirf shuruaat hai, end nahi.',
    analogyTitle: 'Launching a Commercial Airline Route',
    analogyEn:
      'You do not just build an airplane and walk away. You plan the route, test every engine part, launch flights, monitor radar and weather continuously, and schedule regular maintenance.',
    analogyHi:
      'Aap sirf airplane bana kar chhod nahi dete. Aap route plan karte hain, har engine part test karte hain, flights chalate hain, radar aur weather monitor karte hain aur regular maintenance karte hain.',
    steps: [
      { title: 'Frame Problem', en: 'Define business KPI, latency budget & fallback', hi: 'Business KPI, latency budget aur fallback define karna', tone: 'sky' },
      { title: 'Data & Train', en: 'Build validated features, baseline & tuned models', hi: 'Validated features, baseline aur tuned models banana', tone: 'amber' },
      { title: 'Deploy Safely', en: 'Roll out via shadow mode or canary release', hi: 'Shadow mode ya canary release se safely deploy karna', tone: 'lavender' },
      { title: 'Monitor & Retrain', en: 'Detect drift, collect ground truth & retrain', hi: 'Drift detect karna, ground truth lena aur retrain karna', tone: 'green' },
    ],
    tableTitle: 'Stages of the Production ML Lifecycle',
    tableHeaders: ['Stage', 'Core Question Answered', 'Key Artifact Produced'],
    tableRows: [
      ['1. Problem Framing', 'Do we even need ML? What KPI defines success?', 'ML Design Doc & Success Metrics'],
      ['2. Data & Features', 'Is data clean, leak-free, and reproducible?', 'Validated Feature Pipeline'],
      ['3. Train & Evaluate', 'Does model beat simple baseline on unseen data?', 'Versioned Model + Eval Report'],
      ['4. Deploy & Monitor', 'Is latency fast and accuracy holding in production?', 'Live API + Drift Dashboard'],
    ],
    tableNoteEn: 'Real-world data changes over time (festivals, pricing, user habits), so the lifecycle is a **closed feedback loop**.',
    tableNoteHi: 'Real-world data time ke saath badalta hai (festivals, pricing, habits), isliye lifecycle ek **closed feedback loop** hai.',
    mistakeEn: 'Treating ML deployment as a one-time waterfall project and never checking model accuracy after launch.',
    mistakeHi: 'ML deployment ko one-time project samajhna aur launch ke baad model ki accuracy kabhi check na karna.',
    proHabitEn: 'Design the **feedback loop and rollback plan** before writing the first line of training code.',
    proHabitHi: 'Training code ki pehli line likhne se pehle hi **feedback loop aur rollback plan** design karein.',
    jobUseEn: 'Leading end-to-end ML feature launches in product companies with predictable timelines and zero production outages.',
    jobUseHi: 'Product companies mein zero outage ke saath end-to-end ML features launch aur maintain karna.',
    mcq1Question: 'Why is the ML Product Lifecycle represented as a continuous loop rather than a straight line?',
    mcq1Correct: 'Because real-world data drifts over time, requiring ongoing monitoring, feedback collection, and retraining.',
    mcq1Wrongs: [
      'Because models cannot be saved to disk.',
      'Because Python loops are required in every file.',
      'Because business problems never need evaluation.',
    ],
    mcq1Explain: 'User behavior and market conditions evolve, causing model quality to decay unless monitored and retrained.',
    mcq2Question: 'What is the safest way to roll out a brand-new ML model to millions of live users?',
    mcq2Correct: 'Use shadow mode or a gradual canary rollout while monitoring latency and business metrics.',
    mcq2Wrongs: [
      'Switch 100% of traffic instantly on Friday night with no alerts.',
      'Delete the old model before testing the new one.',
      'Skip evaluation on unseen test data.',
    ],
    mcq2Explain: 'Shadow and canary deployments verify real-traffic behavior with minimal risk before full rollout.',
    realWorldScenario:
      'Your e-commerce recommendation model worked great in August, but conversion dropped 18% during Diwali sales. Which lifecycle stage failed and how do you fix it?',
    interviewQ1: 'Walk me through the end-to-end ML Product Lifecycle.',
    interviewA1:
      'It starts with problem framing and KPI alignment, moves to data collection, validation, and feature engineering, then baseline and iterative model training with offline evaluation, followed by containerized deployment (shadow/canary), and finally continuous monitoring for drift and automated retraining.',
    interviewQ2: 'What is Shadow Deployment and why do ML Engineers use it?',
    interviewA2:
      'In shadow deployment, live production traffic is mirrored to the new model without showing its predictions to users. Engineers measure real latency, error rates, and prediction distribution safely before switching traffic.',
  },
  {
    id: 4,
    modNum: 1,
    modTitle: 'Introduction to Machine Learning Engineering',
    topicNumInMod: 4,
    title: 'ML Engineer Roles and Responsibilities',
    subtitle: 'WHAT COMPANIES EXPECT FROM A JOB-READY ML ENGINEER',
    coreEn:
      'An **ML Engineer** owns four core areas: **Data & Feature Pipelines**, **Reproducible Model Training**, **Production Serving APIs**, and **Observability, Cost & Governance**.',
    coreHi:
      'Ek **ML Engineer** 4 core areas own karta hai: **Data & Feature Pipelines**, **Reproducible Model Training**, **Production Serving APIs**, aur **Observability, Cost & Governance**.',
    analogyTitle: 'Bridge Architect & Structural Inspector',
    analogyEn:
      'Just like a bridge engineer ensures the bridge carries heavy trucks safely in rain and heat, an ML Engineer ensures ML models handle peak traffic, malformed requests, and changing data without crashing.',
    analogyHi:
      'Jaise bridge engineer ensure karta hai ki bridge baarish aur heavy trucks mein safe rahe, waise hi ML Engineer ensure karta hai ki ML model peak traffic aur badalte data mein crash na ho.',
    steps: [
      { title: 'Data Readiness', en: 'Build automated ingestion, schema checks & feature parity', hi: 'Automated ingestion, schema checks aur feature parity banana', tone: 'sky' },
      { title: 'Experiment Ops', en: 'Track runs, code commits, seeds & model registry', hi: 'Runs, code commits, seeds aur model registry track karna', tone: 'amber' },
      { title: 'Serving & Scale', en: 'Optimize inference speed, Dockerize & autoscale APIs', hi: 'Inference speed optimize, Dockerize aur APIs autoscale karna', tone: 'lavender' },
      { title: 'Reliability Ops', en: 'Set alerts, privacy guardrails & incident fallbacks', hi: 'Alerts, privacy guardrails aur incident fallbacks set karna', tone: 'green' },
    ],
    tableTitle: 'Core ML Engineer Responsibilities & Interview Signals',
    tableHeaders: ['Responsibility', 'Daily Engineering Work', 'What Interviewers Test'],
    tableRows: [
      ['Feature Parity', 'Same feature logic in training & serving', 'How do you prevent training-serving skew?'],
      ['API Serving', 'FastAPI + Pydantic validation + Docker', 'How do you cut inference latency under 50ms?'],
      ['MLOps & CI/CD', 'Automated tests for data, model & code', 'How do you prevent bad models from deploying?'],
      ['Monitoring', 'Track p95 latency, drift & business KPIs', 'How do you detect silent model degradation?'],
    ],
    tableNoteEn: 'Notice that **preventing silent failures** (training-serving skew, data leakage, drift) is what separates senior ML Engineers.',
    tableNoteHi: 'Dhyan dein ki **silent failures rokna** (training-serving skew, data leakage, drift) hi ek strong ML Engineer ki pehchan hai.',
    mistakeEn: 'Focusing 100% on memorizing algorithm equations while ignoring Git, Docker, APIs, testing, and system design.',
    mistakeHi: 'Sirf algorithm equations ratna aur Git, Docker, APIs, testing aur system design ko ignore kar dena.',
    proHabitEn: 'For every portfolio project, include a **clean GitHub repo, FastAPI endpoint, Dockerfile, unit tests, and architecture README**.',
    proHabitHi: 'Har portfolio project mein **clean GitHub repo, FastAPI endpoint, Dockerfile, unit tests aur architecture README** zaroor shamil karein.',
    jobUseEn: 'Standing out in ML Engineer interviews at startups and FAANG/product companies by demonstrating full-stack ML ownership.',
    jobUseHi: 'Startups aur top product companies ke ML Engineer interviews mein full-stack ML ownership dikha kar easily select hona.',
    mcq1Question: 'What is "training-serving skew" that ML Engineers work hard to prevent?',
    mcq1Correct: 'When feature computation or data distribution differs between offline training and live online serving.',
    mcq1Wrongs: [
      'When a laptop screen is tilted during training.',
      'When a model trains faster on a GPU than a CPU.',
      'When two engineers use different code editors.',
    ],
    mcq1Explain: 'If a feature is computed differently in production than during training, model predictions degrade silently.',
    mcq2Question: 'Which artifact makes an ML Engineer portfolio stand out most to hiring managers?',
    mcq2Correct: 'An end-to-end versioned pipeline with tests, a containerized FastAPI inference service, and documented trade-offs.',
    mcq2Wrongs: [
      'A single unnamed notebook with no README or requirements file.',
      'A screenshot of an accuracy number without code.',
      'Copy-pasting Titanic dataset code with no evaluation.',
    ],
    mcq2Explain: 'Hiring managers look for proof that you can ship, test, and maintain real ML systems.',
    realWorldScenario:
      'You are the first ML Engineer hired at a fintech startup. What 3 foundational systems do you set up in your first 30 days?',
    interviewQ1: 'What does a typical week look like for an ML Engineer?',
    interviewA1:
      'It balances data/feature pipeline engineering, running tracked experiments to improve model metrics, building and optimizing inference APIs, writing automated tests, reviewing PRs, and monitoring live dashboards for drift or latency spikes.',
    interviewQ2: 'What is training-serving skew and how do you eliminate it?',
    interviewA2:
      'Training-serving skew occurs when features are transformed differently during training versus live inference. We prevent it by sharing a single versioned transformation module or Feature Store between both paths and writing parity tests.',
  },
  {
    id: 5,
    modNum: 1,
    modTitle: 'Introduction to Machine Learning Engineering',
    topicNumInMod: 5,
    title: 'Defining Business and Model Success Metrics',
    subtitle: 'ALIGNING OFFLINE ML METRICS WITH REAL REVENUE AND USER IMPACT',
    coreEn:
      'Every ML system needs **two aligned metric layers**: **Offline Model Metrics** (Precision, Recall, RMSE, AUC) to guide training, and **Online Business Metrics** (Conversion, Fraud Loss Saved, Latency) to prove real product value.',
    coreHi:
      'Har ML system mein **2 aligned metric layers** hoti hain: **Offline Model Metrics** (Precision, Recall, RMSE, AUC) training ke liye, aur **Online Business Metrics** (Conversion, Fraud Saved, Latency) real business impact prove karne ke liye.',
    analogyTitle: 'Mock Test Score vs Real Job Offer',
    analogyEn:
      'Scoring 98% on a mock test (offline metric) is encouraging, but the real goal is landing a great job offer (business metric). If the mock test has easy unrelated questions, a high score will not translate to real success.',
    analogyHi:
      'Mock test mein 98% laana (offline metric) achha hai, par asli goal job offer paana (business metric) hai. Agar mock test real exam se match nahi karta, toh high score ka koi fayda nahi.',
    steps: [
      { title: 'Business KPI', en: 'Pick primary outcome: fraud loss saved, CTR, or churn', hi: 'Primary outcome chunein: fraud saved, CTR ya churn', tone: 'sky' },
      { title: 'Offline Metric', en: 'Choose ML metric aligned to error costs (e.g., Recall)', hi: 'Error cost ke hisaab se ML metric chunein (jaise Recall)', tone: 'amber' },
      { title: 'Guardrail SLAs', en: 'Set hard limits: p95 latency < 100ms, false blocks < 1%', hi: 'Hard limits set karein: latency < 100ms, false blocks < 1%', tone: 'lavender' },
      { title: 'Online A/B Test', en: 'Measure real lift against control before 100% rollout', hi: '100% rollout se pehle control ke saath A/B test karein', tone: 'green' },
    ],
    codeLabel: 'PYTHON — COST-AWARE METRIC CHECK',
    code: `# Fraud detection: Missing 1 fraud costs Rs 25,000; 1 false alert costs Rs 200
false_negatives, false_positives = 2, 15
business_cost = (false_negatives * 25000) + (false_positives * 200)
print(f"Estimated Business Cost: Rs {business_cost:,}")`,
    codeOutput: `Estimated Business Cost: Rs 53,000`,
    codeCaptionEn: 'Translating **False Negatives** and **False Positives** into rupees helps stakeholders choose the optimal threshold.',
    codeCaptionHi: '**False Negatives** aur **False Positives** ko rupees mein convert karne se sahi decision threshold choose karna aasaan hota hai.',
    tableTitle: 'Mapping Business Goals to Offline & Guardrail Metrics',
    tableHeaders: ['Use Case', 'Offline ML Metric', 'Business KPI', 'Guardrail Metric'],
    tableRows: [
      ['UPI Fraud Detection', 'PR-AUC & Recall @ 1% FPR', 'Fraud Rupees Prevented', 'False-block rate < 0.5%'],
      ['E-commerce Search', 'NDCG@10 / MAP', 'Add-to-Cart & Revenue', 'Search p95 latency < 80ms'],
      ['Delivery ETA Model', 'MAE (Minutes)', 'On-Time Delivery Trust', 'Under-estimation rate < 10%'],
      ['Customer Churn', 'ROC-AUC & Lift@Top10%', 'Retained Monthly Revenue', 'Campaign budget cap'],
    ],
    tableNoteEn: 'Never optimize raw **Accuracy** on imbalanced datasets (e.g., 99.8% non-fraud makes a dummy "always allow" model look 99.8% accurate!).',
    tableNoteHi: 'Imbalanced data par kabhi sirf **Accuracy** mat dekhein (99.8% normal transactions mein ek dummy model bhi 99.8% accurate dikhega!).',
    mistakeEn: 'Celebrating 99.5% Accuracy on a fraud dataset where only 0.5% of transactions are actually fraudulent.',
    mistakeHi: '0.5% fraud wale dataset par 99.5% Accuracy dekh kar khush ho jana jabki model ne ek bhi fraud nahi pakda.',
    proHabitEn: 'Always pair a **primary offline metric** with a **business KPI** and a **latency/fairness guardrail**.',
    proHabitHi: 'Hamesha **primary offline metric** ke saath **business KPI** aur **latency/fairness guardrail** define karein.',
    jobUseEn: 'Proving ROI to leadership and winning ML System Design rounds in senior interviews.',
    jobUseHi: 'Leadership ko ROI prove karna aur ML System Design interviews crack karna.',
    mcq1Question: 'Why is plain Accuracy misleading for a medical cancer screening or UPI fraud model?',
    mcq1Correct: 'Because positive cases are rare, so predicting "negative" for everyone yields high accuracy while missing every critical case.',
    mcq1Wrongs: [
      'Because Accuracy cannot be calculated in Python.',
      'Because Accuracy always equals zero on large datasets.',
      'Because Precision and Recall are unrelated to classification.',
    ],
    mcq1Explain: 'Class imbalance makes Accuracy deceptive; Precision, Recall, F1, and PR-AUC reveal true detection quality.',
    mcq2Question: 'What is a "guardrail metric" in production ML?',
    mcq2Correct: 'A safety boundary (like max latency or max false-positive rate) that must not degrade even if the primary metric improves.',
    mcq2Wrongs: [
      'A metric that is deleted before deployment.',
      'The number of comments inside a Python script.',
      'A random number used to seed a model.',
    ],
    mcq2Explain: 'Guardrail metrics protect user experience—e.g., a slightly smarter model that takes 5 seconds to respond would hurt users.',
    realWorldScenario:
      'Your new recommendation model increases offline AUC by 2%, but increases API latency from 40ms to 420ms. Should you ship it?',
    interviewQ1: 'How do you connect offline ML metrics to online business metrics?',
    interviewA1:
      'I start from the business cost of each error type (False Positive vs False Negative), choose a matching offline proxy like PR-AUC or weighted MAE, set hard latency/fairness guardrails, and validate real business lift via an online A/B test.',
    interviewQ2: 'When would you prioritize Recall over Precision, and vice versa?',
    interviewA2:
      'Prioritize Recall when missing a positive case is catastrophic (cancer screening, high-value fraud). Prioritize Precision when false alarms ruin user trust (spam blocking important bank emails, auto-banning genuine accounts).',
  },
  {
    id: 6,
    modNum: 2,
    modTitle: 'Python and Software Engineering Basics',
    topicNumInMod: 1,
    title: 'Python Refresher for ML',
    subtitle: 'CLEAN PYTHON PATTERNS, TYPE HINTS, AND VECTORIZED DATA STRUCTURES',
    coreEn:
      'Production **Python for ML** goes beyond basic syntax: it uses **type hints**, **list/dict comprehensions**, **virtual environments**, and **clean error handling** so ML pipelines never crash unpredictably.',
    coreHi:
      'Production **Python for ML** basic syntax se aage hota hai: isme **type hints**, **comprehensions**, **virtual environments** aur **clean error handling** use hota hai taaki ML pipelines kabhi crash na hon.',
    analogyTitle: 'Labeled Kitchen Jars vs Unlabeled Bags',
    analogyEn:
      'Writing untyped messy Python is like keeping salt, sugar, and baking soda in unlabeled plastic bags. Adding **type hints and clean functions** is like putting clear labels on every jar so nobody ruins the dish.',
    analogyHi:
      'Bina type hints ke messy Python likhna bina label ke dibbon mein namak aur cheeni rakhne jaisa hai. **Type hints aur clean functions** har dibbe par saaf label lagane jaisa hai.',
    steps: [
      { title: 'Type Hints', en: 'Declare input & return types for every function', hi: 'Har function mein input aur return types declare karna', tone: 'sky' },
      { title: 'Clean Structures', en: 'Use dicts, sets & comprehensions for fast lookups', hi: 'Fast lookups ke liye dicts, sets aur comprehensions use karna', tone: 'amber' },
      { title: 'Safe Errors', en: 'Validate inputs and raise clear exceptions early', hi: 'Inputs validate karke clear exceptions raise karna', tone: 'lavender' },
      { title: 'Isolated Env', en: 'Pin exact library versions in requirements.txt / venv', hi: 'requirements.txt aur venv mein exact versions pin karna', tone: 'green' },
    ],
    codeLabel: 'PYTHON — CLEAN TYPED FEATURE HELPER',
    code: `from typing import List

def normalize_scores(scores: List[float]) -> List[float]:
    if not scores:
        return []
    hi = max(scores)
    return [round(s / hi, 2) if hi > 0 else 0.0 for s in scores]

print(normalize_scores([25.0, 50.0, 100.0]))`,
    codeOutput: `[0.25, 0.5, 1.0]`,
    codeCaptionEn: 'Notice the **type hints** (`List[float]`), **empty-list guard**, and **zero-division check**—three habits of production ML engineers.',
    codeCaptionHi: '**Type hints** (`List[float]`), **empty-list guard** aur **zero-division check** dekhein—yahi production ML engineers ki pehchan hai.',
    tableTitle: 'Beginner Script vs Production ML Python',
    tableHeaders: ['Pattern', 'Beginner Notebook Code', 'Production ML Python'],
    tableRows: [
      ['Edge Cases', 'Crashes on empty list or ZeroDivision', 'Explicit guards & clear ValueError'],
      ['Readability', 'Variables named x1, df2, temp', 'Descriptive names + Python type hints'],
      ['Lookup Speed', 'Checking membership in a huge list O(n)', 'Using a set or dict for O(1) lookup'],
      ['Dependencies', 'Global pip install (version conflicts)', 'Isolated venv + pinned requirements.txt'],
    ],
    tableNoteEn: 'Clean Python prevents 80% of deployment bugs before a model even reaches Docker.',
    tableNoteHi: 'Clean Python deployment se pehle hi 80% bugs ko rok deta hai.',
    mistakeEn: 'Ignoring edge cases like `None`, empty lists, or division by zero in feature preprocessing functions.',
    mistakeHi: 'Feature preprocessing functions mein `None`, empty lists ya zero-division edge cases ko ignore karna.',
    proHabitEn: 'Always add **type hints**, handle empty/null inputs gracefully, and pin package versions in `requirements.txt`.',
    proHabitHi: 'Hamesha **type hints** lagayein, empty/null inputs handle karein aur `requirements.txt` mein package versions pin karein.',
    jobUseEn: 'Passing Python coding rounds and writing maintainable feature engineering libraries in production repositories.',
    jobUseHi: 'Python coding rounds pass karna aur production repos mein maintainable feature libraries likhna.',
    mcq1Question: 'Why do ML Engineers use Python `set` instead of `list` when checking if 100,000 user IDs belong to a blocklist?',
    mcq1Correct: 'Because set membership lookup runs in O(1) average time, whereas list lookup takes O(n) linear time.',
    mcq1Wrongs: [
      'Because sets automatically train neural networks.',
      'Because lists cannot store integers in Python.',
      'Because sets do not use any memory.',
    ],
    mcq1Explain: 'Hash-based sets make membership checks nearly instantaneous even for millions of IDs, keeping API latency low.',
    mcq2Question: 'Why are virtual environments (venv/conda) and pinned `requirements.txt` critical in ML projects?',
    mcq2Correct: 'They ensure identical library versions across laptop, CI/CD, and cloud servers so code does not break.',
    mcq2Wrongs: [
      'They make Python run without a CPU.',
      'They hide bugs from unit tests.',
      'They replace the need for Git.',
    ],
    mcq2Explain: 'A silent minor upgrade in scikit-learn or pandas can change serialized model loading or feature outputs.',
    realWorldScenario:
      'Your model works on your laptop with scikit-learn 1.5, but fails to load on the production server running 1.2. How do you permanently prevent this?',
    interviewQ1: 'Why do production ML teams enforce Python type hints and virtual environments?',
    interviewA1:
      'Type hints catch shape and type bugs early during code review and IDE checks, while pinned virtual environments guarantee reproducible training and serving across machines.',
    interviewQ2: 'When would you use a generator instead of a list in an ML data pipeline?',
    interviewA2:
      'When streaming large datasets (like millions of text lines or image paths) so we process one batch at a time in memory instead of crashing RAM by loading everything at once.',
  },
  {
    id: 7,
    modNum: 2,
    modTitle: 'Python and Software Engineering Basics',
    topicNumInMod: 2,
    title: 'Functions, Modules and Packages',
    subtitle: 'REFACTORING MONOLITHIC NOTEBOOKS INTO REUSABLE PYTHON PACKAGES',
    coreEn:
      'Instead of keeping 1,000 lines in one notebook, ML Engineers split code into **pure functions**, **focused `.py` modules** (`data.py`, `features.py`, `train.py`), and **installable packages** so training and serving share identical logic.',
    coreHi:
      '1,000 lines ek hi notebook mein rakhne ke bajaye ML Engineers code ko **pure functions**, **focused `.py` modules** (`data.py`, `features.py`, `train.py`) aur **packages** mein baantte hain taaki training aur serving same logic share karein.',
    analogyTitle: 'Organized Toolbox vs Cluttered Junk Drawer',
    analogyEn:
      'Putting all ML code in one giant script is like throwing every screw, hammer, and wire into one messy drawer. Modules give every tool its own labeled compartment so anyone on the team can find and fix it in seconds.',
    analogyHi:
      'Saara code ek script mein rakhna saare tools ek messy drawer mein fekne jaisa hai. Modules har tool ko alag labeled compartment dete hain jisse team mein koi bhi use seconds mein samajh aur fix kar sake.',
    steps: [
      { title: 'Single Purpose', en: 'Each function does one clear job with explicit inputs', hi: 'Har function ek clear kaam kare explicit inputs ke saath', tone: 'sky' },
      { title: 'Group Modules', en: 'Separate data_loader.py, features.py, model.py', hi: 'data_loader.py, features.py aur model.py alag karein', tone: 'amber' },
      { title: 'Package Init', en: 'Organize inside src/ml_app/ with clean imports', hi: 'src/ml_app/ mein clean imports ke saath organize karein', tone: 'lavender' },
      { title: 'Reuse Everywhere', en: 'Import exact same feature module in train & API', hi: 'Train aur API dono mein exact same feature module import karein', tone: 'green' },
    ],
    codeLabel: 'PYTHON — MODULAR PACKAGE STRUCTURE',
    code: `# src/churn_ml/features.py
def compute_engagement_ratio(active_days: int, total_days: int = 30) -> float:
    return round(active_days / max(1, total_days), 3)

# Reused identically in train.py AND serve_api.py!
print("Engagement ratio:", compute_engagement_ratio(18))`,
    codeOutput: `Engagement ratio: 0.6`,
    codeCaptionEn: 'Sharing one `features.py` module across **training** and **API serving** eliminates copy-paste bugs.',
    codeCaptionHi: '**Training** aur **API serving** mein ek hi `features.py` module share karne se copy-paste bugs khatam ho jaate hain.',
    tableTitle: 'Recommended Modular Layout for ML Projects',
    tableHeaders: ['Module File', 'Responsibility', 'Who Imports It'],
    tableRows: [
      ['src/data.py', 'Load & validate raw datasets', 'train.py, eval.py'],
      ['src/features.py', 'Deterministic feature transforms', 'train.py, serve.py'],
      ['src/train.py', 'Fit model & log metrics/artifacts', 'CI/CD training job'],
      ['src/serve.py', 'FastAPI inference endpoint', 'Docker production container'],
    ],
    tableNoteEn: 'A **pure function** (same input → always same output, no hidden global state) is the easiest code to unit-test.',
    tableNoteHi: '**Pure function** (same input → hamesha same output, no hidden global state) ko unit-test karna sabse aasaan hota hai.',
    mistakeEn: 'Copy-pasting feature preprocessing code from a training notebook into the API file—causing silent drift when one copy is updated.',
    mistakeHi: 'Training notebook se feature code API file mein copy-paste karna—jisse ek jagah update karne par dusri jagah silent bug aa jata hai.',
    proHabitEn: 'Extract reusable logic into `src/` modules early and import them cleanly in both training scripts and serving APIs.',
    proHabitHi: 'Reusable logic ko shuru se hi `src/` modules mein rakhein aur training + serving dono mein import karein.',
    jobUseEn: 'Building clean, reviewable pull requests in production ML repositories.',
    jobUseHi: 'Production ML repositories mein clean aur reviewable pull requests submit karna.',
    mcq1Question: 'What is the biggest benefit of placing feature engineering inside a shared `features.py` module?',
    mcq1Correct: 'Both training pipelines and live inference APIs execute the exact same transformation logic.',
    mcq1Wrongs: [
      'It automatically doubles the size of the dataset.',
      'It removes the need to evaluate models.',
      'It makes Python skip syntax checks.',
    ],
    mcq1Explain: 'A single source of truth for feature logic prevents training-serving skew.',
    mcq2Question: 'What makes a Python function a "pure function"?',
    mcq2Correct: 'It always returns the same output for the same inputs and does not mutate external global state.',
    mcq2Wrongs: [
      'It uses global variables for every calculation.',
      'It has no parameters and prints random numbers.',
      'It can only be called once per program.',
    ],
    mcq2Explain: 'Pure functions are predictable, reproducible, and trivial to unit-test.',
    realWorldScenario:
      'Two engineers keep overwriting each other’s changes in a single 1,500-line `main.py` ML script. How do you refactor it?',
    interviewQ1: 'How do you structure a production Python ML repository?',
    interviewA1:
      'I separate source code under `src/` into data loading, validation, feature engineering, training, evaluation, and serving modules, alongside `tests/`, `configs/`, `Dockerfile`, and pinned dependencies.',
    interviewQ2: 'Why is `if __name__ == "__main__":` important in Python ML modules?',
    interviewA2:
      'It ensures training or script execution code only runs when the file is executed directly, not when another module imports helper functions from it.',
  },
  {
    id: 8,
    modNum: 2,
    modTitle: 'Python and Software Engineering Basics',
    topicNumInMod: 3,
    title: 'Object-Oriented Programming Basics',
    subtitle: 'CLASSES, FIT/TRANSFORM INTERFACES, AND CLEAN ML ABSTRACTIONS',
    coreEn:
      '**Object-Oriented Programming (OOP)** bundles **data (state)** and **behavior (methods)** inside **Classes**. Almost every ML library—scikit-learn estimators, PyTorch `nn.Module`, and custom preprocessors—is built on OOP.',
    coreHi:
      '**Object-Oriented Programming (OOP)** **data (state)** aur **behavior (methods)** ko **Classes** mein bundle karta hai. Lagbhag har ML library—scikit-learn estimators, PyTorch `nn.Module` aur custom preprocessors—OOP par based hai.',
    analogyTitle: 'Blueprint vs Actual Houses',
    analogyEn:
      'A **Class** is an architectural blueprint for a house. Each **Object (instance)** is a real house built from that blueprint—one can be painted blue and another white, each storing its own state independently.',
    analogyHi:
      '**Class** ek ghar ka blueprint (naksha) hai. Har **Object (instance)** us blueprint se bana asli ghar hai—har ghar ka apna alag paint aur state hota hai.',
    steps: [
      { title: 'Define Class', en: 'Store learned parameters inside self in __init__', hi: '__init__ mein self ke andar learned parameters store karna', tone: 'sky' },
      { title: 'Fit Method', en: 'Learn statistics (mean/std) only from training data', hi: 'Sirf training data se statistics (mean/std) seekhna', tone: 'amber' },
      { title: 'Transform / Predict', en: 'Apply saved state identically to test & live inputs', hi: 'Saved state ko test aur live inputs par apply karna', tone: 'lavender' },
      { title: 'Swap Cleanly', en: 'Common interface lets pipelines swap models easily', hi: 'Common interface se pipelines mein models swap karna aasaan', tone: 'green' },
    ],
    codeLabel: 'PYTHON — CUSTOM SKLEARN-STYLE SCALER CLASS',
    code: `class SimpleMinMaxScaler:
    def __init__(self):
        self.min_val = 0.0
        self.max_val = 1.0

    def fit(self, values):
        self.min_val, self.max_val = min(values), max(values)
        return self

    def transform(self, values):
        span = max(1e-9, self.max_val - self.min_val)
        return [round((v - self.min_val) / span, 2) for v in values]

scaler = SimpleMinMaxScaler().fit([10, 20, 30])
print(scaler.transform([15, 30]))`,
    codeOutput: `[0.25, 1.0]`,
    codeCaptionEn: 'Notice how `fit()` saves `min_val` and `max_val` on `self`, so `transform()` reuses training statistics on unseen data without **data leakage**.',
    codeCaptionHi: 'Dekhein kaise `fit()` `min_val` aur `max_val` ko `self` par save karta hai, taaki `transform()` bina **data leakage** ke unseen data par chale.',
    tableTitle: 'Where OOP Appears Every Day in ML Engineering',
    tableHeaders: ['ML Library', 'Core Base Class', 'Standard Methods You Implement'],
    tableRows: [
      ['scikit-learn', 'BaseEstimator / TransformerMixin', 'fit(X, y), transform(X), predict(X)'],
      ['PyTorch', 'torch.nn.Module', '__init__() layers, forward(x)'],
      ['PyTorch Data', 'torch.utils.data.Dataset', '__len__(), __getitem__(idx)'],
      ['FastAPI / Pydantic', 'pydantic.BaseModel', 'Typed request/response payload schemas'],
    ],
    tableNoteEn: 'Separating `fit()` from `transform()` in a class is the cleanest way to prevent **data leakage**.',
    tableNoteHi: 'Ek class mein `fit()` aur `transform()` ko alag rakhna **data leakage** rokne ka sabse clean tareeka hai.',
    mistakeEn: 'Calling `.fit()` again on validation or live production data, which overwrites training statistics and corrupts predictions.',
    mistakeHi: 'Validation ya live production data par dobara `.fit()` call kar dena, jisse training statistics overwrite ho jaati hain.',
    proHabitEn: 'Follow scikit-learn’s `fit()` / `transform()` / `predict()` contract in all custom preprocessors and model wrappers.',
    proHabitHi: 'Apne sabhi custom preprocessors aur model wrappers mein scikit-learn ka `fit()` / `transform()` / `predict()` pattern follow karein.',
    jobUseEn: 'Building custom PyTorch models, scikit-learn Pipeline transformers, and Pydantic API schemas.',
    jobUseHi: 'Custom PyTorch models, scikit-learn Pipeline transformers aur Pydantic API schemas banana.',
    mcq1Question: 'Why does scikit-learn separate `.fit()` and `.transform()` into two methods on a Transformer class?',
    mcq1Correct: 'So statistics are learned once on training data and reused unchanged on validation, test, and live serving data.',
    mcq1Wrongs: [
      'Because Python classes cannot have more than one method.',
      'To force engineers to compute different scales for test data.',
      'Because `.transform()` deletes the model weights.',
    ],
    mcq1Explain: 'Fitting on train and transforming on test prevents test data information from leaking into preprocessing.',
    mcq2Question: 'What does `self` refer to inside a Python class method?',
    mcq2Correct: 'The specific object instance on which the method is currently being called.',
    mcq2Wrongs: [
      'The operating system kernel.',
      'A global dictionary shared by all Python files.',
      'The name of the CSV file being loaded.',
    ],
    mcq2Explain: '`self` lets each instance store its own independent attributes like learned weights or scaling bounds.',
    realWorldScenario:
      'You need to build a custom text cleaner that plugs directly into a scikit-learn `Pipeline`. Which two methods must your class implement?',
    interviewQ1: 'How is Object-Oriented Programming used in PyTorch and scikit-learn?',
    interviewA1:
      'Both frameworks rely on consistent base interfaces: scikit-learn uses Estimator/Transformer classes with `fit`, `transform`, and `predict`, while PyTorch uses `nn.Module` with `__init__` and `forward` plus `Dataset` with `__len__` and `__getitem__`.',
    interviewQ2: 'Why is composition often preferred over deep inheritance in ML systems?',
    interviewA2:
      'Composition (combining small interchangeable components like preprocessor + model + postprocessor) keeps pipelines flexible and easy to test compared to brittle multi-level inheritance hierarchies.',
  },
  {
    id: 9,
    modNum: 2,
    modTitle: 'Python and Software Engineering Basics',
    topicNumInMod: 4,
    title: 'Git and Version Control',
    subtitle: 'BRANCHES, PULL REQUESTS, AND REPRODUCIBLE ML COLLABORATION',
    coreEn:
      '**Git** tracks every line change in your codebase with **commits, branches, and Pull Requests (PRs)**. In ML Engineering, Git links every deployed model back to the **exact commit hash** that trained it.',
    coreHi:
      '**Git** aapke codebase ke har change ko **commits, branches aur Pull Requests (PRs)** ke zariye track karta hai. ML Engineering mein Git har deployed model ko us **exact commit hash** se jodta hai jisne use train kiya.',
    analogyTitle: 'Video Game Save Checkpoints',
    analogyEn:
      'Working without Git is like playing a 50-hour game with zero save points—one bad edit wipes everything. **Git commits** are named checkpoints, and **branches** let you try risky ideas without breaking the main game.',
    analogyHi:
      'Bina Git ke kaam karna bina save points ke game khelne jaisa hai—ek galti aur sab kharab. **Git commits** named checkpoints hain aur **branches** aapko main code tode bina naye ideas test karne deti hain.',
    steps: [
      { title: 'Create Branch', en: 'git checkout -b feat/add-scaler (never edit main directly)', hi: 'Nayi feature branch banayein, main par seedhe edit na karein', tone: 'sky' },
      { title: 'Atomic Commits', en: 'Commit small, logical changes with clear messages', hi: 'Chhote aur logical changes clear messages ke saath commit karein', tone: 'amber' },
      { title: 'Ignore Big Files', en: 'Add .csv, .pt, .env to .gitignore (use DVC/S3 for data)', hi: '.csv, .pt, .env ko .gitignore mein rakhein', tone: 'lavender' },
      { title: 'PR & Review', en: 'Open Pull Request, pass CI tests, then merge to main', hi: 'Pull Request kholein, CI tests pass karein aur main mein merge karein', tone: 'green' },
    ],
    codeLabel: 'SHELL — CLEAN ML GIT WORKFLOW',
    code: `git checkout -b feat/fraud-threshold-tuning
git add src/features.py tests/test_features.py
git commit -m "Add velocity feature and unit tests for fraud model"
git push -u origin feat/fraud-threshold-tuning`,
    codeOutput: `[feat/fraud-threshold-tuning 8a4f2c1] Add velocity feature and unit tests for fraud model`,
    codeCaptionEn: 'Always commit **source code and tests** to Git, while keeping large datasets, model weights, and API secrets out of Git.',
    codeCaptionHi: 'Git mein hamesha **source code aur tests** commit karein; bade datasets, model weights aur API secrets ko `.gitignore` mein rakhein.',
    tableTitle: 'What Belongs in Git vs What Does NOT',
    tableHeaders: ['Artifact Type', 'Commit to Git?', 'Where It Belongs'],
    tableRows: [
      ['Python code, tests, YAML configs', 'YES', 'Git repository (GitHub / GitLab)'],
      ['Large datasets (.csv, .parquet)', 'NO', 'Cloud storage (S3/GCS) + DVC metadata'],
      ['Trained model weights (.pt, .pkl)', 'NO', 'Model Registry (MLflow / S3)'],
      ['API keys & DB passwords (.env)', 'NO (NEVER!)', 'Secret Manager / Environment Variables'],
    ],
    tableNoteEn: 'Committing a `.env` file with an API key to Git is a critical **security incident**.',
    tableNoteHi: 'API key wali `.env` file Git par push karna ek serious **security incident** mana jata hai.',
    mistakeEn: 'Pushing 500MB datasets, trained `.pkl` models, or secret API keys directly into a Git repository.',
    mistakeHi: '500MB ke datasets, trained `.pkl` models ya secret API keys ko seedhe Git repo mein push kar dena.',
    proHabitEn: 'Configure `.gitignore` on day 1, work on feature branches, and tag every production release commit.',
    proHabitHi: 'Day 1 par `.gitignore` set karein, feature branches use karein aur har production release commit ko tag karein.',
    jobUseEn: 'Collaborating safely in engineering teams and reproducing any past production model from its Git SHA.',
    jobUseHi: 'Engineering teams mein safely collaborate karna aur Git SHA se kisi bhi purane production model ko reproduce karna.',
    mcq1Question: 'Why should large `.parquet` datasets and `.pt` model checkpoints NOT be committed directly into Git?',
    mcq1Correct: 'Git is optimized for text diffs; huge binary files bloat repository history and slow down cloning and CI/CD.',
    mcq1Wrongs: [
      'Because Git only works on Windows computers.',
      'Because `.pt` files cannot be read by PyTorch after cloning.',
      'Because datasets never change in ML projects.',
    ],
    mcq1Explain: 'Store large data and models in object storage/registries (S3, DVC, MLflow) and commit only lightweight code and metadata pointers to Git.',
    mcq2Question: 'Why do teams require Pull Requests (PRs) before merging into `main`?',
    mcq2Correct: 'PRs enable peer code review and automated CI checks to catch bugs before they hit production.',
    mcq2Wrongs: [
      'To delete commit history after every merge.',
      'To prevent more than one engineer from working on a repo.',
      'To avoid writing unit tests.',
    ],
    mcq2Explain: 'Code review + CI checks on PRs dramatically reduce production regressions.',
    realWorldScenario:
      'A junior teammate accidentally committed an OpenAI API key to a public GitHub repo. What are the two immediate steps you must take?',
    interviewQ1: 'How do you version both code and large datasets in an ML project?',
    interviewA1:
      'I version code, configs, and tests in Git, while versioning large datasets and model artifacts in object storage (S3/GCS) tracked via lightweight pointer files or metadata using DVC or MLflow.',
    interviewQ2: 'What is the difference between `git merge` and `git rebase`?',
    interviewA2:
      'Merge combines branch histories while preserving a merge commit; rebase replays your feature commits cleanly on top of the latest main branch for a linear history (never rebase shared public branches).',
  },
  {
    id: 10,
    modNum: 2,
    modTitle: 'Python and Software Engineering Basics',
    topicNumInMod: 5,
    title: 'Code Style, Documentation and Project Structure',
    subtitle: 'WRITING SELF-DOCUMENTING, CONFIG-DRIVEN ML PROJECTS',
    coreEn:
      'Great ML Engineering code is **readable, config-driven, linted, and well-documented**. A clear folder layout (`src/`, `configs/`, `tests/`, `notebooks/`) lets any teammate understand and run your project in 5 minutes.',
    coreHi:
      'Achha ML Engineering code **readable, config-driven, linted aur well-documented** hota hai. Clear folder layout (`src/`, `configs/`, `tests/`, `notebooks/`) se koi bhi teammate 5 minute mein project samajh aur chala sakta hai.',
    analogyTitle: 'Well-Organized Library vs Pile of Books',
    analogyEn:
      'Even if a library owns the best books in the world, nobody can use them if they are dumped in one giant pile. Clear shelves, labels, and a catalog make knowledge instantly accessible.',
    analogyHi:
      'Agar library mein duniya ki sabse achhi kitabein ek dher mein padi hon toh koi unhe use nahi kar sakta. Clear shelves, labels aur catalog sab kuch turant accessible bana dete hain.',
    steps: [
      { title: 'Standard Layout', en: 'Separate src/, configs/, tests/, notebooks/, README.md', hi: 'src/, configs/, tests/, notebooks/ aur README.md alag rakhein', tone: 'sky' },
      { title: 'External Configs', en: 'Move paths & hyperparameters to YAML (no hardcoding)', hi: 'Paths aur hyperparameters YAML mein rakhein (no hardcoding)', tone: 'amber' },
      { title: 'Lint & Format', en: 'Use Ruff / Black so formatting is 100% consistent', hi: 'Consistent formatting ke liye Ruff / Black use karein', tone: 'lavender' },
      { title: 'Clear Docs', en: 'Write docstrings + README with exact setup & run commands', hi: 'Docstrings aur exact run commands wala README likhein', tone: 'green' },
    ],
    tableTitle: 'Industry-Standard ML Project Directory Layout',
    tableHeaders: ['Folder / File', 'Purpose', 'Best Practice'],
    tableRows: [
      ['configs/train.yaml', 'Hyperparameters, file paths, thresholds', 'Never hardcode C:\\Users\\... paths in code'],
      ['src/ml_pkg/', 'Modular Python code for data, train, serve', 'Keep functions small, typed, and linted'],
      ['tests/', 'Pytest unit & data schema tests', 'Run automatically on every GitHub PR'],
      ['README.md', 'Architecture, setup steps, metrics & limits', 'Anyone can run locally in 3 commands'],
    ],
    tableNoteEn: 'Config-driven code lets you change a learning rate or dataset path **without editing Python source files**.',
    tableNoteHi: 'Config-driven code se aap Python files edit kiye bina learning rate ya dataset path badal sakte hain.',
    mistakeEn: 'Hardcoding local paths like `"C:/Users/Rahul/Desktop/data.csv"` inside training scripts so the code crashes on every teammate’s machine.',
    mistakeHi: 'Training scripts mein `"C:/Users/Rahul/Desktop/data.csv"` jaise local paths hardcode karna jisse code dusre machines par crash ho jata hai.',
    proHabitEn: 'Use relative paths or YAML/environment configs, format with Ruff/Black, and keep a crisp `README.md`.',
    proHabitHi: 'Relative paths ya YAML/env configs use karein, Ruff/Black se format karein aur crisp `README.md` likhein.',
    jobUseEn: 'Passing take-home ML assignments and onboarding smoothly into production engineering teams.',
    jobUseHi: 'Take-home ML assignments pass karna aur production engineering teams mein smoothly kaam karna.',
    mcq1Question: 'Why should hyperparameters and file paths be stored in a config file (YAML/JSON) instead of hardcoded in Python?',
    mcq1Correct: 'It makes experiments reproducible, easy to compare, and runnable across different machines without editing code.',
    mcq1Wrongs: [
      'Because Python does not support string variables.',
      'Because YAML files automatically train deep neural networks.',
      'Because config files cannot be tracked in Git.',
    ],
    mcq1Explain: 'Separating configuration from code makes experimentation clean and prevents accidental code regressions.',
    mcq2Question: 'What should a strong `README.md` in an ML Engineer’s GitHub portfolio project include?',
    mcq2Correct: 'Problem statement, architecture overview, setup/run commands, evaluation metrics, and known limitations.',
    mcq2Wrongs: [
      'Only the title of the repository.',
      'Raw pasted CSV rows.',
      'Personal passwords for cloud accounts.',
    ],
    mcq2Explain: 'A clear README shows communication maturity and lets recruiters verify your work immediately.',
    realWorldScenario:
      'You received a take-home ML assignment from a top company. How do you structure your submission so reviewers rate it in the top 5%?',
    interviewQ1: 'What makes an ML codebase "production-ready" compared to a hobby script?',
    interviewA1:
      'Modular package structure, zero hardcoded local paths, pinned dependencies, type hints, linting, automated tests for data and inference, structured logging, and a reproducible Docker/README setup.',
    interviewQ2: 'Why is structured logging better than `print()` statements in production ML services?',
    interviewA2:
      'Structured logs include timestamps, severity levels (INFO/WARNING/ERROR), and JSON metadata that cloud monitoring tools can search, filter, and alert on automatically.',
  },
  {
    id: 11,
    modNum: 3,
    modTitle: 'Mathematics and Statistics for ML',
    topicNumInMod: 1,
    title: 'Linear Algebra Essentials',
    subtitle: 'VECTORS, MATRICES, AND DOT PRODUCTS BEHIND EVERY ML MODEL',
    coreEn:
      '**Linear Algebra** is the language of ML data and models: a single data point is a **Vector**, an entire dataset or neural layer is a **Matrix**, and predictions are powered by **Dot Products** and **Matrix Multiplication**.',
    coreHi:
      '**Linear Algebra** ML data aur models ki language hai: ek single data point ek **Vector** hai, poora dataset ya neural layer ek **Matrix** hai, aur predictions **Dot Products** aur **Matrix Multiplication** se chalte hain.',
    analogyTitle: 'Supermarket Bill Calculation',
    analogyEn:
      'Suppose your cart has `[2, 3, 1]` units of Milk, Bread, and Eggs, and their prices are `[60, 40, 80]`. Multiplying each quantity by its price and summing (`2×60 + 3×40 + 1×80 = 320`) is literally a **Dot Product**!',
    analogyHi:
      'Maan lijiye aapke cart mein Milk, Bread, Eggs ki quantity `[2, 3, 1]` hai aur prices `[60, 40, 80]` hain. Har quantity ko uske price se multiply karke jodna (`2×60 + 3×40 + 1×80 = 320`) hi literally ek **Dot Product** hai!',
    steps: [
      { title: 'Feature Vector', en: 'Represent one customer/item as a 1D array of numbers', hi: 'Ek customer/item ko numbers ke 1D array mein dikhana', tone: 'sky' },
      { title: 'Weight Vector', en: 'Model learns importance weights for each feature', hi: 'Model har feature ke liye importance weights seekhta hai', tone: 'amber' },
      { title: 'Dot Product', en: 'Multiply features × weights and sum to score prediction', hi: 'Features × weights ko multiply aur sum karke score nikalna', tone: 'lavender' },
      { title: 'Batch Matrix', en: 'Stack 1,000 rows into a Matrix for ultra-fast GPU math', hi: '1,000 rows ko Matrix mein stack karke fast GPU math chalana', tone: 'green' },
    ],
    codeLabel: 'PYTHON — NUMPY DOT PRODUCT FOR ML SCORING',
    code: `import numpy as np

# Features: [study_hours, mock_score, projects]
student_x = np.array([4.0, 0.85, 3.0])
weights   = np.array([10.0, 50.0, 5.0])
bias      = 2.5

readiness_score = float(np.dot(student_x, weights) + bias)
print(f"Predicted Readiness Score: {readiness_score:.1f}")`,
    codeOutput: `Predicted Readiness Score: 100.0`,
    codeCaptionEn: 'Every linear model and every neuron in a Transformer computes `np.dot(x, w) + b`—vectorized in C/GPU for speed.',
    codeCaptionHi: 'Har linear model aur har Transformer neuron `np.dot(x, w) + b` compute karta hai—jo C/GPU par super fast chalta hai.',
    tableTitle: 'Linear Algebra Objects in Real ML Systems',
    tableHeaders: ['Math Object', 'Shape Example', 'Real ML Meaning'],
    tableRows: [
      ['Scalar', '()', 'Single loss value or learning rate (e.g., 0.01)'],
      ['Vector (1D)', '(128,)', 'One user feature vector or text embedding'],
      ['Matrix (2D)', '(10000, 20)', 'Dataset of 10,000 rows × 20 features'],
      ['Tensor (3D/4D)', '(32, 3, 224, 224)', 'Batch of 32 RGB images for a Vision CNN'],
    ],
    tableNoteEn: 'Always check `.shape` when debugging ML math—90% of matrix bugs are **dimension mismatches**.',
    tableNoteHi: 'ML math debug karte waqt hamesha `.shape` check karein—90% bugs **dimension mismatch** ke hote hain.',
    mistakeEn: 'Writing slow nested Python `for` loops over rows instead of vectorized NumPy/PyTorch matrix operations.',
    mistakeHi: 'Vectorized NumPy/PyTorch matrix operations ke bajaye slow nested Python `for` loops likhna.',
    proHabitEn: 'Print and assert tensor/array `.shape` at every pipeline boundary and vectorize math with NumPy.',
    proHabitHi: 'Har pipeline boundary par `.shape` check/assert karein aur math ko NumPy se vectorize karein.',
    jobUseEn: 'Implementing embeddings similarity search, neural layers, PCA, and fast batch inference.',
    jobUseHi: 'Embeddings similarity search, neural layers, PCA aur fast batch inference implement karna.',
    mcq1Question: 'In a matrix `X` of shape `(5000, 12)` representing a tabular ML dataset, what do `5000` and `12` represent?',
    mcq1Correct: '5,000 sample records (rows) and 12 input features (columns).',
    mcq1Wrongs: [
      '12 sample records and 5,000 target classes.',
      '5,000 epochs and 12 GPUs.',
      '12 Python files and 5,000 lines of code.',
    ],
    mcq1Explain: 'By convention, rows are observations/samples and columns are input features.',
    mcq2Question: 'Why is `np.dot(X, W)` dramatically faster than nested Python `for` loops?',
    mcq2Correct: 'NumPy delegates vectorized matrix math to compiled C/BLAS instructions that use CPU SIMD registers.',
    mcq2Wrongs: [
      'NumPy skips multiplying half of the numbers.',
      'Python loops cannot multiply floating-point numbers.',
      'NumPy stores all numbers as strings.',
    ],
    mcq2Explain: 'Vectorization removes Python interpreter overhead per element, often giving 50x–200x speedups.',
    realWorldScenario:
      'You get `ValueError: shapes (100, 8) and (10, 1) not aligned` during model inference. What caused this and how do you fix it?',
    interviewQ1: 'What is the geometric meaning of the dot product and cosine similarity in ML?',
    interviewA1:
      'The dot product measures how strongly two vectors align scaled by their magnitudes; normalizing by their lengths gives cosine similarity (-1 to +1), which is widely used to measure semantic similarity between text embeddings.',
    interviewQ2: 'What is the difference between a vector, matrix, and tensor?',
    interviewA2:
      'A vector is a 1D array, a matrix is a 2D grid of numbers, and a tensor generalizes this to N dimensions (such as a 4D batch of RGB images).',
  },
  {
    id: 12,
    modNum: 3,
    modTitle: 'Mathematics and Statistics for ML',
    topicNumInMod: 2,
    title: 'Probability and Distributions',
    subtitle: 'UNCERTAINTY, BAYES INTUITION, AND NORMAL VS SKEWED DISTRIBUTIONS',
    coreEn:
      'ML models rarely know the future with 100% certainty—they output **probabilities** (like `P(fraud) = 0.87`). Understanding **probability distributions** (Normal, Skewed, Binomial) helps you choose the right loss function, scaling, and thresholds.',
    coreHi:
      'ML models future ko 100% certainty se nahi jaante—woh **probabilities** output karte hain (jaise `P(fraud) = 0.87`). **Distributions** (Normal, Skewed, Binomial) samajhne se aap sahi loss function, scaling aur threshold choose kar paate hain.',
    analogyTitle: 'Weather Forecast: 80% Chance of Rain',
    analogyEn:
      'When the weather app says "80% chance of rain," it does not promise rain—it gives you a calibrated probability so you can decide whether to carry an umbrella.',
    analogyHi:
      'Jab weather app "80% chance of rain" kehta hai, toh woh guarantee nahi deta—balki calibrated probability deta hai jisse aap chhata le jaane ka sahi faisla le sakein.',
    steps: [
      { title: 'Inspect Shape', en: 'Check if feature is bell-shaped (Normal) or Skewed', hi: 'Check karein feature Normal (bell-shaped) hai ya Skewed', tone: 'sky' },
      { title: 'Handle Skew', en: 'Apply log1p transform to heavy-tailed money features', hi: 'Heavy-tailed money features par log1p transform lagayein', tone: 'amber' },
      { title: 'Predict Prob', en: 'Use predict_proba() instead of hard 0/1 guesses', hi: 'Hard 0/1 ke bajaye predict_proba() use karein', tone: 'lavender' },
      { title: 'Calibrate', en: 'Verify that 80% predicted scores occur ~80% of the time', hi: 'Verify karein ki 80% predicted scores sach mein ~80% baar hote hain', tone: 'green' },
    ],
    tableTitle: 'Common Probability Distributions in ML Engineering',
    tableHeaders: ['Distribution', 'Real-World Example', 'ML Engineering Action'],
    tableRows: [
      ['Normal (Gaussian)', 'Human height, sensor measurement noise', 'StandardScaler (z-score) works cleanly'],
      ['Right-Skewed', 'House prices, UPI transaction amounts', 'Use log(1 + x) transform & Median/IQR'],
      ['Bernoulli / Binomial', 'Ad click (0/1), fraud (Yes/No)', 'Use Binary Cross-Entropy (Log Loss)'],
      ['Poisson', 'Support tickets or orders per hour', 'Use Poisson regression for count data'],
    ],
    tableNoteEn: 'Real-world revenue and income data is almost always **right-skewed**, never perfectly normal!',
    tableNoteHi: 'Real-world revenue aur income data lagbhag hamesha **right-skewed** hota hai, perfectly normal nahi!',
    mistakeEn: 'Assuming all real-world features follow a bell curve and using Mean + Standard Deviation on heavily skewed salary data.',
    mistakeHi: 'Har real-world feature ko bell curve maan lena aur skewed salary data par blindly Mean use karna.',
    proHabitEn: 'Plot histograms/percentiles (p50, p95, p99) before modeling and calibrate output probabilities before setting business thresholds.',
    proHabitHi: 'Modeling se pehle histograms aur percentiles (p50, p95, p99) dekhein aur probabilities ko calibrate karein.',
    jobUseEn: 'Setting risk thresholds in credit scoring, anomaly detection, and calibrated ad-click prediction.',
    jobUseHi: 'Credit scoring, anomaly detection aur ad-click prediction mein sahi risk thresholds set karna.',
    mcq1Question: 'Why do ML Engineers apply `np.log1p(x)` to heavily right-skewed features like transaction amount?',
    mcq1Correct: 'To compress extreme outliers and make the feature distribution more symmetric for linear and neural models.',
    mcq1Wrongs: [
      'To delete all values above 100.',
      'To convert numbers into text labels.',
      'To increase data leakage.',
    ],
    mcq1Explain: 'Log transformation tames huge right-tail spikes so models do not over-react to a few extreme values.',
    mcq2Question: 'What does it mean for a classifier’s probabilities to be "well-calibrated"?',
    mcq2Correct: 'Among all predictions scored at 0.70, roughly 70% actually belong to the positive class.',
    mcq2Wrongs: [
      'Every prediction equals exactly 1.0.',
      'The model never makes any mistakes.',
      'The model runs only on GPUs.',
    ],
    mcq2Explain: 'Calibration ensures predicted probabilities can be trusted directly for expected-value business decisions.',
    realWorldScenario:
      'Your latency dashboard shows average API latency is 45ms, yet 5% of users complain the app freezes for 2 seconds. Why did the average hide this?',
    interviewQ1: 'Why do ML Engineers track p95 and p99 latency instead of just mean latency?',
    interviewA1:
      'Latency distributions are heavily right-skewed. A fast median can hide severe tail spikes affecting thousands of users, whereas p95 and p99 expose worst-case user experience.',
    interviewQ2: 'Explain Bayes’ Theorem in one practical ML example.',
    interviewA2:
      'Bayes’ Theorem updates our belief after seeing new evidence—for example, starting with a 0.2% base rate of fraud and updating the probability upward when a transaction happens at 3 AM from an unusual device.',
  },
  {
    id: 13,
    modNum: 3,
    modTitle: 'Mathematics and Statistics for ML',
    topicNumInMod: 3,
    title: 'Descriptive and Inferential Statistics',
    subtitle: 'SUMMARIZING DATASETS AND TESTING WHETHER IMPROVEMENTS ARE REAL',
    coreEn:
      '**Descriptive Statistics** summarize what is inside your dataset (Mean, Median, IQR, Correlation), while **Inferential Statistics** (Confidence Intervals, Hypothesis Tests, A/B Tests) tell you if a pattern generalizes to the whole population.',
    coreHi:
      '**Descriptive Statistics** aapke dataset ko summarize karta hai (Mean, Median, IQR, Correlation), jabki **Inferential Statistics** (Confidence Intervals, A/B Tests) batata hai ki kya result poore population par sach mein apply hota hai.',
    analogyTitle: 'Tasting One Spoon of Soup',
    analogyEn:
      'Stirring a pot and tasting one spoonful is a **sample**. Describing how salty that spoon is = **Descriptive Statistics**. Concluding the entire pot needs more salt = **Inferential Statistics**.',
    analogyHi:
      'Poore bartan mein se ek chammach soup taste karna **sample** hai. Us chammach ka taste batana = **Descriptive Statistics**. Poore bartan ke baare mein faisla lena = **Inferential Statistics**.',
    steps: [
      { title: 'Center & Spread', en: 'Compare Mean vs Median and Std vs IQR for outliers', hi: 'Outliers pakadne ke liye Mean vs Median aur Std vs IQR dekhein', tone: 'sky' },
      { title: 'Correlations', en: 'Check feature relationships & target leakage clues', hi: 'Feature relationships aur target leakage check karein', tone: 'amber' },
      { title: 'Hypothesis Test', en: 'Test if new model lift is statistically significant', hi: 'Test karein ki naye model ka lift statistically significant hai', tone: 'lavender' },
      { title: 'Confidence Band', en: 'Report metric with confidence interval, not 1 number', hi: 'Sirf 1 number nahi, confidence interval ke saath metric report karein', tone: 'green' },
    ],
    tableTitle: 'Descriptive vs Inferential Tools for ML Engineers',
    tableHeaders: ['Tool', 'Category', 'When ML Engineers Use It'],
    tableRows: [
      ['Median & IQR', 'Descriptive', 'Robust summary when extreme outliers exist'],
      ['Correlation Matrix', 'Descriptive', 'Spot redundant features & suspicious target leaks'],
      ['Confidence Interval', 'Inferential', 'Check if +0.8% AUC gain is real or random noise'],
      ['A/B Test (p-value)', 'Inferential', 'Decide whether Model B beats Model A on live users'],
    ],
    tableNoteEn: 'Remember: **Correlation does not imply Causation** (ice cream sales and sunburns rise together because of summer heat!).',
    tableNoteHi: 'Yaad rakhein: **Correlation ka matlab Causation nahi hota** (ice cream sales aur sunburn dono garmi ki wajah se badhte hain!).',
    mistakeEn: 'Shipping Model B because it beat Model A by 0.2% on 100 test rows without checking statistical significance.',
    mistakeHi: 'Sirf 100 test rows par 0.2% zyada score dekh kar Model B ship kar dena bina significance check kiye.',
    proHabitEn: 'Always check **sample size and confidence intervals** before claiming one model beats another.',
    proHabitHi: 'Ek model ko dusre se behtar declare karne se pehle hamesha **sample size aur confidence intervals** check karein.',
    jobUseEn: 'Running rigorous online A/B tests and detecting data quality anomalies before training.',
    jobUseHi: 'Rigorous online A/B tests chalana aur training se pehle data anomalies pakadna.',
    mcq1Question: 'When a dataset contains extreme outlier salaries, which measure of center is MORE reliable?',
    mcq1Correct: 'The Median, because it is unaffected by a few extreme high or low values.',
    mcq1Wrongs: [
      'The Mean, because outliers never affect averages.',
      'The Maximum value alone.',
      'A randomly picked row.',
    ],
    mcq1Explain: 'A single billionaire in a room of 50 people skews the Mean dramatically, while the Median stays representative.',
    mcq2Question: 'What does a statistically significant A/B test result tell an ML team?',
    mcq2Correct: 'The observed improvement is unlikely to have happened purely by random chance.',
    mcq2Wrongs: [
      'The model will never experience data drift.',
      'The training code has zero syntax bugs.',
      'The sample size was 1 user.',
    ],
    mcq2Explain: 'Significance testing guards against rolling out complex models based on lucky noise.',
    realWorldScenario:
      'Your new ranking model shows +1.5% CTR after just 2 hours of live traffic. Why should you wait before declaring victory?',
    interviewQ1: 'What is the difference between Descriptive and Inferential statistics in ML?',
    interviewA1:
      'Descriptive statistics summarize observed data (mean, median, variance, quantiles), while inferential statistics use sample data to make probabilistic conclusions about unseen populations (confidence intervals, A/B hypothesis tests).',
    interviewQ2: 'Why is peeking early at A/B test p-values dangerous?',
    interviewA2:
      'Repeatedly checking and stopping as soon as p < 0.05 inflates the false-positive rate; you should pre-calculate required sample size and run for full weekly cycles to avoid novelty and day-of-week bias.',
  },
  {
    id: 14,
    modNum: 3,
    modTitle: 'Mathematics and Statistics for ML',
    topicNumInMod: 4,
    title: 'Gradients and Optimization Intuition',
    subtitle: 'HOW GRADIENT DESCENT AND LEARNING RATE TRAIN MODELS AUTOMATICALLY',
    coreEn:
      '**Optimization** is how an ML model learns: it measures how wrong its predictions are using a **Loss Function**, computes the **Gradient** (direction of steepest error increase), and takes a step in the **opposite direction** scaled by the **Learning Rate**.',
    coreHi:
      '**Optimization** woh process hai jisse ML model seekhta hai: woh **Loss Function** se apni galti napta hai, **Gradient** (dhalan ki disha) nikalta hai, aur **Learning Rate** ke hisaab se error kam karne ki disha mein step leta hai.',
    analogyTitle: 'Walking Down a Foggy Hill to the Lowest Valley',
    analogyEn:
      'Imagine standing on a foggy mountain trying to reach the lowest valley. You feel the slope under your feet (**Gradient**) and step downhill. Steps too tiny (**small learning rate**) take forever; huge leaps (**large learning rate**) jump right over the valley!',
    analogyHi:
      'Maan lijiye aap kohre (fog) mein pahad se neeche ghati mein utar rahe hain. Pairon ke neeche ki dhalan mehsoos karna **Gradient** hai. Bahut chhote kadam (**small learning rate**) bahut slow honge; bahut bade kadam (**large learning rate**) ghati se bahar kood jaayenge!',
    steps: [
      { title: 'Forward Pass', en: 'Predict output using current model weights', hi: 'Current weights se output predict karna', tone: 'sky' },
      { title: 'Compute Loss', en: 'Measure error between prediction and actual truth', hi: 'Prediction aur actual truth ke beech error napna', tone: 'amber' },
      { title: 'Calc Gradient', en: 'Find slope of loss with respect to each weight', hi: 'Har weight ke hisaab se loss ka slope (gradient) nikalna', tone: 'lavender' },
      { title: 'Update Weights', en: 'w = w - learning_rate * gradient (repeat)', hi: 'w = w - learning_rate * gradient (step repeat karein)', tone: 'green' },
    ],
    codeLabel: 'PYTHON — 1D GRADIENT DESCENT IN 6 LINES',
    code: `# Minimize Loss(w) = (w - 5)^2  --> true minimum at w = 5.0
w, lr = 0.0, 0.2
for step in range(1, 6):
    grad = 2 * (w - 5)          # derivative of (w - 5)^2
    w = w - lr * grad           # move downhill
    print(f"Step {step}: w={w:.2f}, loss={(w-5)**2:.3f}")`,
    codeOutput: `Step 1: w=2.00, loss=9.000
Step 2: w=3.20, loss=3.240
Step 3: w=3.92, loss=1.166
Step 4: w=4.35, loss=0.420
Step 5: w=4.61, loss=0.151`,
    codeCaptionEn: 'Watch `w` smoothly converge toward `5.0` while `loss` drops from `9.0` to `0.151` in just 5 gradient steps!',
    codeCaptionHi: 'Dekhein kaise `w` smoothly `5.0` ki taraf badh raha hai aur sirf 5 steps mein `loss` `9.0` se `0.151` par aa gaya!',
    tableTitle: 'Effect of Learning Rate on Model Training',
    tableHeaders: ['Learning Rate', 'Loss Curve Behavior', 'Engineering Fix'],
    tableRows: [
      ['Too Small (e.g., 1e-6)', 'Loss barely moves; training takes hours', 'Increase LR or use Adam optimizer'],
      ['Just Right (e.g., 1e-3)', 'Smooth, steady drop to low validation loss', 'Add cosine decay schedule for polish'],
      ['Too Large (e.g., 1.0)', 'Loss bounces wildly or explodes to NaN', 'Lower LR & add gradient clipping'],
    ],
    tableNoteEn: 'Modern optimizers like **AdamW** adapt the step size per parameter automatically.',
    tableNoteHi: 'Modern optimizers jaise **AdamW** har parameter ke liye step size automatically adjust kar lete hain.',
    mistakeEn: 'Training a neural network blindly without watching the loss curve, missing an exploding `NaN` loss.',
    mistakeHi: 'Loss curve dekhe bina neural network train karte rehna aur exploding `NaN` loss miss kar dena.',
    proHabitEn: 'Always log training & validation loss every epoch and start with a standard optimizer like **AdamW** + learning-rate warmup/decay.',
    proHabitHi: 'Har epoch par training aur validation loss log karein aur **AdamW** + LR schedule se start karein.',
    jobUseEn: 'Debugging slow convergence, exploding gradients, and fine-tuning deep learning & LLM models.',
    jobUseHi: 'Slow convergence, exploding gradients debug karna aur deep learning/LLM models fine-tune karna.',
    mcq1Question: 'What happens if the learning rate in Gradient Descent is set much too high?',
    mcq1Correct: 'Weight updates overshoot the minimum, causing the loss to oscillate or diverge to NaN.',
    mcq1Wrongs: [
      'The model instantly achieves 100% test accuracy.',
      'The gradient becomes permanently zero on step 1.',
      'The dataset size shrinks by half.',
    ],
    mcq1Explain: 'Oversized steps bounce back and forth across the valley walls instead of settling at the bottom.',
    mcq2Question: 'Why do we subtract `lr * gradient` instead of adding it during Gradient Descent?',
    mcq2Correct: 'Because the gradient points uphill (increasing loss), so subtracting it moves weights downhill to reduce loss.',
    mcq2Wrongs: [
      'Because we want to maximize prediction error.',
      'Because gradients are always negative.',
      'Because Python does not allow addition on floats.',
    ],
    mcq2Explain: 'Moving opposite the gradient is the direction of steepest descent.',
    realWorldScenario:
      'Your PyTorch model’s loss jumps from 0.8 to `NaN` on epoch 2. Name two immediate engineering checks you perform.',
    interviewQ1: 'Explain Gradient Descent and Learning Rate to someone with zero math background.',
    interviewA1:
      'Gradient Descent is like walking down a foggy hill by feeling which way the ground slopes downward and stepping that way. The learning rate is your stride length—too small is painfully slow, too big makes you overshoot the valley.',
    interviewQ2: 'Why is Mini-Batch SGD preferred over full-batch Gradient Descent for large datasets?',
    interviewA2:
      'Full-batch requires computing gradients over millions of rows for a single weight update, which is slow and exceeds GPU memory. Mini-batches (e.g., 32–256 samples) update weights rapidly, fit on GPU, and add helpful regularization noise.',
  },
  {
    id: 15,
    modNum: 3,
    modTitle: 'Mathematics and Statistics for ML',
    topicNumInMod: 5,
    title: 'Metrics, Uncertainty and Experimentation',
    subtitle: 'DESIGNING FAIR EXPERIMENTS AND MEASURING REAL MODEL LIFT',
    coreEn:
      'Disciplined **Experimentation** means changing **one controlled variable at a time**, evaluating on a **locked holdout split**, and quantifying **uncertainty** across multiple folds or seeds so you never fool yourself.',
    coreHi:
      'Disciplined **Experimentation** ka matlab hai ek baar mein **ek controlled variable** badalna, **locked holdout split** par evaluate karna, aur multiple folds/seeds par **uncertainty** check karna taaki galat conclusion na nikle.',
    analogyTitle: 'Fair Science Fair Experiment',
    analogyEn:
      'If you change the soil, fertilizer, AND sunlight on a plant all at once, you will never know which change made it grow faster. Changing one factor against a control plant gives real proof.',
    analogyHi:
      'Agar aap paudhe ki mitti, khad AUR dhoop ek saath badal dein, toh pata nahi chalega ki growth kis wajah se hui. Control ke against ek factor badalna hi asli proof deta hai.',
    steps: [
      { title: 'Lock Holdout', en: 'Freeze test set once—never tune hyperparameters on it', hi: 'Test set freeze karein—us par tuning kabhi na karein', tone: 'sky' },
      { title: 'Baseline First', en: 'Record simple baseline score as your benchmark', hi: 'Benchmark ke liye pehle simple baseline score record karein', tone: 'amber' },
      { title: 'Single Change', en: 'Test one hypothesis per run (feature, model, or LR)', hi: 'Har run mein ek hypothesis test karein (feature, model ya LR)', tone: 'lavender' },
      { title: 'Check Variance', en: 'Compare mean ± std across CV folds before promoting', hi: 'Promote karne se pehle CV folds ka mean ± std compare karein', tone: 'green' },
    ],
    tableTitle: 'Experiment Log Example (Controlled Iteration)',
    tableHeaders: ['Run ID', 'Single Change Made', 'CV F1 (Mean ± Std)', 'Decision'],
    tableRows: [
      ['exp-01', 'Baseline Logistic Regression', '0.742 ± 0.014', 'Baseline established'],
      ['exp-02', 'Added 7-day rolling velocity feature', '0.798 ± 0.011', 'Keep! (+0.056 real lift)'],
      ['exp-03', 'Switched to LightGBM default', '0.824 ± 0.009', 'Keep! (+0.026 real lift)'],
      ['exp-04', 'Increased max_depth to 20', '0.801 ± 0.028', 'Reject (overfitting + noisy)'],
    ],
    tableNoteEn: 'Look at `exp-04`: higher variance (`±0.028`) and lower mean immediately reveal overfitting.',
    tableNoteHi: '`exp-04` dekhein: zyada variance (`±0.028`) aur kam mean turant overfitting dikha dete hain.',
    mistakeEn: 'Changing 5 hyperparameters, 3 features, and the model family in one run—then having no idea what helped or hurt.',
    mistakeHi: 'Ek hi run mein 5 hyperparameters, 3 features aur model sab badal dena—fir samajh na aana ki kya kaam aaya.',
    proHabitEn: 'Log every experiment with its **single hypothesis, config, mean ± std score, and keep/reject decision**.',
    proHabitHi: 'Har experiment ko uski **single hypothesis, config, mean ± std score aur keep/reject decision** ke saath log karein.',
    jobUseEn: 'Running disciplined ML R&D sprints that consistently beat production baselines.',
    jobUseHi: 'Disciplined ML R&D sprints chalana jo consistently production baselines ko beat karein.',
    mcq1Question: 'Why should an ML Engineer report `0.824 ± 0.009` across 5 folds instead of a single split score `0.831`?',
    mcq1Correct: 'Reporting mean and standard deviation reveals stability and whether a gain is larger than random split noise.',
    mcq1Wrongs: [
      'Because single split scores are illegal in Python.',
      'Because standard deviation always equals zero.',
      'Because 5 folds delete 80% of the model weights.',
    ],
    mcq1Explain: 'Uncertainty bands prevent chasing meaningless 0.1% fluctuations caused by lucky train/val splits.',
    mcq2Question: 'What happens if you repeatedly tune hyperparameters directly on the final test set?',
    mcq2Correct: 'You overfit to the test set, making your reported offline accuracy overly optimistic compared to production.',
    mcq2Wrongs: [
      'The test set automatically becomes larger.',
      'The model generalizes better to unseen users.',
      'Training time drops to zero.',
    ],
    mcq2Explain: 'The test set must stay untouched until final model selection so it gives an unbiased estimate of real-world performance.',
    realWorldScenario:
      'Model A scores 0.810 ± 0.004 and Model B scores 0.812 ± 0.025 (and is 4x slower). Which model do you deploy and why?',
    interviewQ1: 'How do you design a reliable ML experimentation workflow?',
    interviewA1:
      'Lock a representative test split, build a fast baseline, change one controlled variable per experiment, track configs and CV mean/std in an experiment tracker like MLflow, and promote only statistically meaningful, latency-safe improvements.',
    interviewQ2: 'Why is a simple baseline model mandatory before trying deep learning?',
    interviewA2:
      'A baseline verifies the end-to-end data pipeline, reveals data bugs early, sets a concrete score to beat, and sometimes solves 90% of the business problem at 10% of the latency and cost.',
  },
  {
    id: 16,
    modNum: 4,
    modTitle: 'Data Collection and Validation',
    topicNumInMod: 1,
    title: 'Structured and Unstructured Data',
    subtitle: 'TABLES, JSON LOGS, TEXT, IMAGES, AND AUDIO IN ML SYSTEMS',
    coreEn:
      'ML systems consume **Structured Data** (clean rows & columns in SQL/Parquet), **Semi-Structured Data** (JSON events, API logs), and **Unstructured Data** (text reviews, images, audio, PDFs) which must be converted into numeric tensors.',
    coreHi:
      'ML systems **Structured Data** (SQL/Parquet tables), **Semi-Structured Data** (JSON events, API logs) aur **Unstructured Data** (text, images, audio, PDFs) use karte hain, jinhe numeric tensors mein convert karna padta hai.',
    analogyTitle: 'Excel Attendance Sheet vs CCTV Video',
    analogyEn:
      'A school attendance register with fixed columns (Roll No, Name, Present) is **Structured**. A student’s handwritten essay or a CCTV camera feed is **Unstructured**—rich in information, but requiring specialized models to read.',
    analogyHi:
      'Fixed columns wala attendance register **Structured** hai. Student ka essay ya CCTV video **Unstructured** hai—isme bahut info hoti hai par ise samajhne ke liye specialized models chahiye.',
    steps: [
      { title: 'Identify Type', en: 'Classify source: Tabular, JSON, Text, Image, or Audio', hi: 'Source pehchanein: Tabular, JSON, Text, Image ya Audio', tone: 'sky' },
      { title: 'Pick Storage', en: 'Parquet/SQL for tables; S3/Blob storage for media', hi: 'Tables ke liye Parquet/SQL; media ke liye S3/Blob storage', tone: 'amber' },
      { title: 'Vectorize', en: 'Encode tables, tokenize text, resize image pixels', hi: 'Tables encode, text tokenize, images resize karein', tone: 'lavender' },
      { title: 'Match Model', en: 'Trees (XGBoost) for tabular; Deep Learning for media', hi: 'Tabular par Trees (XGBoost); media par Deep Learning', tone: 'green' },
    ],
    tableTitle: 'Structured vs Semi-Structured vs Unstructured Data',
    tableHeaders: ['Data Type', 'Examples', 'Best Model Family'],
    tableRows: [
      ['Structured', 'SQL orders, bank transactions, sensor CSV', 'Gradient Boosted Trees (LightGBM, XGBoost)'],
      ['Semi-Structured', 'Clickstream JSON logs, API webhook payloads', 'Flatten to tabular features or sequence models'],
      ['Unstructured Text', 'Support tickets, reviews, PDF contracts', 'Transformers, Embeddings, LLMs'],
      ['Unstructured Vision/Audio', 'Product photos, X-rays, call recordings', 'CNNs, Vision Transformers, Whisper'],
    ],
    tableNoteEn: 'Choosing the **right model family for your data modality** saves months of wasted tuning.',
    tableNoteHi: 'Apne **data type ke hisaab se sahi model family** chunna mahino ka time bachata hai.',
    mistakeEn: 'Storing gigabytes of raw images inside a relational SQL database instead of object storage (S3) with URL pointers.',
    mistakeHi: 'Object storage (S3) ke bajaye gigabytes ki raw images ko seedhe relational SQL database mein store karna.',
    proHabitEn: 'Store unstructured media in cloud object storage with metadata/paths in a structured table or Parquet manifest.',
    proHabitHi: 'Unstructured media ko cloud object storage mein rakhein aur unke paths/metadata ko structured table ya Parquet mein.',
    jobUseEn: 'Architecting multimodal ML pipelines that combine tabular customer profiles with text and image signals.',
    jobUseHi: 'Multimodal ML pipelines design karna jo tabular profiles ko text aur image signals ke saath combine karein.',
    mcq1Question: 'Which model family typically performs best and fastest on structured tabular business data?',
    mcq1Correct: 'Gradient Boosted Decision Trees such as XGBoost, LightGBM, or CatBoost.',
    mcq1Wrongs: [
      'Audio speech-to-text models.',
      'Convolutional Neural Networks designed for 2D pixels.',
      'Unsupervised K-Means with 1 cluster.',
    ],
    mcq1Explain: 'Tree-based ensembles naturally handle mixed numerical/categorical columns and missing values on tabular data.',
    mcq2Question: 'How should an ML Engineer store 2 million training images efficiently?',
    mcq2Correct: 'Store image files in cloud object storage (S3/GCS) and keep labels & file paths in a Parquet/SQL metadata table.',
    mcq2Wrongs: [
      'Paste all 2 million images into a single Excel sheet.',
      'Commit every JPG directly into GitHub.',
      'Convert images into base64 strings inside a Python list literal.',
    ],
    mcq2Explain: 'Object storage scales cheaply for large binary files while Parquet/SQL enables fast metadata filtering.',
    realWorldScenario:
      'Your e-commerce fraud model currently uses only tabular transaction columns, and you want to add product description text. How do you combine both?',
    interviewQ1: 'How do preprocessing pipelines differ between structured and unstructured data?',
    interviewA1:
      'Structured data focuses on schema validation, missing-value imputation, scaling, and encoding. Unstructured data requires modality-specific conversion—such as tokenization/embeddings for text or resizing/normalization for images.',
    interviewQ2: 'Why is JSON clickstream data called semi-structured?',
    interviewA2:
      'Because it has self-describing keys and hierarchy, but fields can be optional or nested differently across events, requiring parsing and schema normalization before modeling.',
  },
  {
    id: 17,
    modNum: 4,
    modTitle: 'Data Collection and Validation',
    topicNumInMod: 2,
    title: 'Data Sources and Formats',
    subtitle: 'CSV VS PARQUET, SQL WAREHOUSES, AND STREAMING EVENTS',
    coreEn:
      'Production ML data arrives from **SQL databases**, **event streams (Kafka)**, and **cloud data lakes**. Choosing columnar formats like **Parquet** over plain **CSV** cuts storage by 5x–10x and loads data dramatically faster while preserving data types.',
    coreHi:
      'Production ML data **SQL databases**, **event streams (Kafka)** aur **data lakes** se aata hai. Plain **CSV** ke bajaye columnar **Parquet** format use karne se storage 5x–10x kam hota hai aur data types safe rehte hain.',
    analogyTitle: 'Loose Paper Pages vs Indexed Filing Cabinet',
    analogyEn:
      'A **CSV** is a stack of loose text pages where you must read every column just to check one number. **Parquet** is an indexed columnar cabinet that compresses each column and lets you pull only the 3 columns you need instantly.',
    analogyHi:
      '**CSV** loose text pages ka dher hai jisme ek number ke liye poori file padhni padti hai. **Parquet** indexed columnar cabinet hai jo data compress karta hai aur sirf zaroori columns turant nikal deta hai.',
    steps: [
      { title: 'Connect Source', en: 'Extract from SQL warehouse, REST API, or event log', hi: 'SQL warehouse, REST API ya event log se data extract karein', tone: 'sky' },
      { title: 'Preserve Types', en: 'Keep strict int64, float32, datetime types (no string drift)', hi: 'Strict int64, float32, datetime types maintain karein', tone: 'amber' },
      { title: 'Save Parquet', en: 'Write compressed columnar .parquet partitioned by date', hi: 'Date-partitioned compressed .parquet files mein save karein', tone: 'lavender' },
      { title: 'Read Selectively', en: 'Load only needed columns to save RAM & training time', hi: 'RAM bachane ke liye sirf zaroori columns load karein', tone: 'green' },
    ],
    tableTitle: 'CSV vs JSON vs Parquet for ML Pipelines',
    tableHeaders: ['Format', 'Schema Preserved?', 'File Size & Speed', 'Best Use Case'],
    tableRows: [
      ['CSV', 'No (all text; dates break)', 'Large & slow to parse', 'Tiny human-readable exports'],
      ['JSON / JSONL', 'Partial (flexible nested)', 'Verbose, medium speed', 'REST APIs & streaming event logs'],
      ['Parquet', 'Yes (strict typed columns)', '5x–10x smaller & super fast', 'Production ML training & feature tables'],
    ],
    tableNoteEn: 'In Pandas, `pd.read_parquet("data.parquet", columns=["user_id", "amount"])` skips reading unused columns completely!',
    tableNoteHi: 'Pandas mein `pd.read_parquet(..., columns=[...])` bina use wale columns ko read hi nahi karta!',
    mistakeEn: 'Saving 10GB intermediate training datasets as uncompressed CSV files where zip codes lose leading zeros and dates become strings.',
    mistakeHi: '10GB ke training datasets ko CSV mein save karna jisse leading zeros ud jaate hain aur dates string ban jaati hain.',
    proHabitEn: 'Standardize on **date-partitioned Parquet** for offline training snapshots and **JSONL/Avro** for streaming logs.',
    proHabitHi: 'Offline training snapshots ke liye **date-partitioned Parquet** aur streaming logs ke liye **JSONL/Avro** use karein.',
    jobUseEn: 'Speeding up data loading by 10x and cutting cloud storage/compute bills in production ML teams.',
    jobUseHi: 'Production ML teams mein data loading 10x fast karna aur cloud storage/compute cost kam karna.',
    mcq1Question: 'Why is Apache Parquet strongly preferred over CSV for large ML training datasets?',
    mcq1Correct: 'Parquet is columnar, compressed, preserves exact data types, and allows reading only selected columns.',
    mcq1Wrongs: [
      'Parquet files can be edited directly in Notepad.',
      'CSV files cannot be opened by Pandas.',
      'Parquet automatically removes model overfitting.',
    ],
    mcq1Explain: 'Columnar compression and strict schema metadata make Parquet faster, smaller, and safer than CSV.',
    mcq2Question: 'What is a practical benefit of partitioning Parquet datasets by `date=YYYY-MM-DD`?',
    mcq2Correct: 'Pipelines can load only the recent 30 days of data without scanning years of historical files.',
    mcq2Wrongs: [
      'It encrypts the dataset with a password.',
      'It prevents Python from reading the file.',
      'It forces every row to have the same timestamp.',
    ],
    mcq2Explain: 'Date partitioning enables fast incremental training and point-in-time backfills.',
    realWorldScenario:
      'Your daily training job spends 22 minutes just loading a 15GB CSV file before training starts. How do you cut data loading under 2 minutes?',
    interviewQ1: 'Compare CSV, JSONL, and Parquet in an ML data pipeline.',
    interviewA1:
      'CSV is human-readable but untyped and bulky. JSONL handles nested API/event payloads well for ingestion. Parquet is columnar, typed, and compressed—making it the gold standard for ML training and feature storage.',
    interviewQ2: 'Why is point-in-time timestamping critical when collecting ML training data from databases?',
    interviewA2:
      'Because live tables get updated in place; without point-in-time snapshots, training rows accidentally include future values (data leakage) that were unavailable at prediction time.',
  },
  {
    id: 18,
    modNum: 4,
    modTitle: 'Data Collection and Validation',
    topicNumInMod: 3,
    title: 'Data Schemas and Data Contracts',
    subtitle: 'PREVENTING UPSTREAM ENGINEERING CHANGES FROM BREAKING ML MODELS',
    coreEn:
      'A **Data Schema** defines expected columns, data types, nullability, and valid ranges. A **Data Contract** is an enforced agreement between upstream data producers and the ML team so silent schema changes never crash production models.',
    coreHi:
      '**Data Schema** expected columns, data types, nullability aur valid ranges define karta hai. **Data Contract** upstream producers aur ML team ke beech ek enforced agreement hai taaki silent schema changes model ko crash na karein.',
    analogyTitle: 'Electrical Plug & Voltage Standard',
    analogyEn:
      'Your laptop charger expects a 230V plug with exact pin shapes. If someone secretly changes the wall socket voltage to 600V without warning, the laptop fries. A **Data Contract** is that safety standard for your ML pipeline.',
    analogyHi:
      'Aapka laptop charger 230V aur exact pin shape expect karta hai. Agar koi bina bataye socket 600V kar de toh laptop jal jayega. **Data Contract** aapke ML pipeline ka wahi safety standard hai.',
    steps: [
      { title: 'Define Schema', en: 'Specify column names, dtypes, min/max & allowed categories', hi: 'Column names, dtypes, min/max aur allowed categories define karein', tone: 'sky' },
      { title: 'Validate Early', en: 'Run Pydantic / Pandera checks at pipeline entry', hi: 'Pipeline entry par Pydantic / Pandera checks chalayein', tone: 'amber' },
      { title: 'Fail Fast / Alert', en: 'Block bad batches & notify owners before training', hi: 'Training se pehle bad batches block aur alert karein', tone: 'lavender' },
      { title: 'Version Contract', en: 'Coordinate schema evolution via versioned PRs', hi: 'Versioned PRs se schema changes coordinate karein', tone: 'green' },
    ],
    codeLabel: 'PYTHON — PYDANTIC DATA CONTRACT VALIDATION',
    code: `from pydantic import BaseModel, Field

class LoanRequest(BaseModel):
    customer_age: int = Field(ge=18, le=100)
    monthly_income: float = Field(gt=0)
    city_tier: str = Field(pattern="^(tier1|tier2|tier3)$")

req = LoanRequest(customer_age=28, monthly_income=65000, city_tier="tier1")
print("Contract passed:", req.model_dump())`,
    codeOutput: `Contract passed: {'customer_age': 28, 'monthly_income': 65000.0, 'city_tier': 'tier1'}`,
    codeCaptionEn: 'If upstream sends `customer_age=-5` or `city_tier="unknown"`, Pydantic rejects it immediately with a clear error instead of feeding garbage to the model.',
    codeCaptionHi: 'Agar upstream `customer_age=-5` ya galat `city_tier` bheje, toh model mein garbage jaane se pehle hi Pydantic use pakad leta hai.',
    tableTitle: 'Common Silent Upstream Breakages Caught by Data Contracts',
    tableHeaders: ['Upstream Change', 'What Breaks Without Contract', 'How Contract Catches It'],
    tableRows: [
      ['Price switched Rupees → Paise', 'Predictions silently 100x wrong!', 'Max range / distribution check fails'],
      ['Column `user_age` renamed `age`', 'Serving API crashes with KeyError', 'Required column check fails in CI'],
      ['Null rate jumps 1% → 45%', 'Model degrades silently for weeks', 'Null-fraction threshold alert triggers'],
    ],
    tableNoteEn: 'Catching bad data at the gate is 100x cheaper than debugging wrong predictions in production.',
    tableNoteHi: 'Gate par hi galat data pakadna production mein galat predictions debug karne se 100x sasta hota hai.',
    mistakeEn: 'Trusting upstream backend tables blindly and discovering weeks later that a backend update changed units from km to meters.',
    mistakeHi: 'Upstream tables par blindly bharosa karna aur hafton baad pata chalna ki units km se meters mein badal gaye.',
    proHabitEn: 'Enforce **Pydantic** on serving APIs and **Pandera / Great Expectations** on batch training tables.',
    proHabitHi: 'Serving APIs par **Pydantic** aur batch training tables par **Pandera / Great Expectations** enforce karein.',
    jobUseEn: 'Eliminating the #1 cause of production ML outages: unexpected upstream data changes.',
    jobUseHi: 'Production ML outages ke #1 reason (unexpected upstream data changes) ko jad se khatam karna.',
    mcq1Question: 'What is the primary purpose of a Data Contract in an ML system?',
    mcq1Correct: 'To formally enforce expected schema, types, and quality rules between data producers and ML consumers.',
    mcq1Wrongs: [
      'To increase the number of hidden layers in a neural network.',
      'To allow backend teams to rename columns without telling anyone.',
      'To replace model evaluation metrics.',
    ],
    mcq1Explain: 'Data contracts prevent silent breaking changes from corrupting training or live inference.',
    mcq2Question: 'Which Python library is widely used to enforce strict request schemas in FastAPI ML endpoints?',
    mcq2Correct: 'Pydantic.',
    mcq2Wrongs: [
      'Matplotlib.',
      'Seaborn.',
      'BeautifulSoup.',
    ],
    mcq2Explain: 'FastAPI integrates natively with Pydantic `BaseModel` to validate incoming JSON payloads automatically.',
    realWorldScenario:
      'A mobile app update starts sending `amount` as a string `"₹499"` instead of float `499.0`, breaking your inference service. How would a data contract have prevented this outage?',
    interviewQ1: 'What is a Data Contract and why is it critical for MLOps?',
    interviewA1:
      'A Data Contract is a versioned schema and quality specification agreed between upstream producers and ML consumers, enforced via automated CI/pipeline checks so silent unit, null, or column changes never corrupt models.',
    interviewQ2: 'What checks should a batch data validation gate include before triggering model retraining?',
    interviewA2:
      'Schema presence and exact dtypes, null-rate ceilings, numeric min/max bounds, allowed categorical sets, duplicate primary-key checks, and distribution drift checks against the previous window.',
  },
  {
    id: 19,
    modNum: 4,
    modTitle: 'Data Collection and Validation',
    topicNumInMod: 4,
    title: 'Missing Values and Duplicate Records',
    subtitle: 'HANDLING NULLS WITHOUT BIAS AND DEDUPLICATING BEFORE SPLITTING',
    coreEn:
      'Real-world datasets always contain **Missing Values (`NaN`/`None`)** and **Duplicate Records**. Blindly dropping rows biases the model, and leaving duplicates across train and test splits causes severe **data leakage**.',
    coreHi:
      'Real-world datasets mein hamesha **Missing Values (`NaN`)** aur **Duplicate Records** hote hain. Blindly rows drop karne se bias aata hai, aur train/test dono mein duplicates rehne se **data leakage** hota hai.',
    analogyTitle: 'Exam Paper With Repeated Questions',
    analogyEn:
      'If duplicate customer records appear in both your training set and test set, it is like giving a student the exact final exam questions in their practice sheet—their score looks 99%, but they fail on truly new questions.',
    analogyHi:
      'Agar duplicate records training aur test dono mein aa jayein, toh yeh practice sheet mein hi asli exam ke exact questions dene jaisa hai—score 99% dikhega par real world mein model fail ho jayega.',
    steps: [
      { title: 'Deduplicate First', en: 'Remove exact & key-based duplicates BEFORE train/test split', hi: 'Train/test split se PEHLE duplicates hatayein', tone: 'sky' },
      { title: 'Ask Why Null', en: 'Check if missingness itself is a signal (e.g., no credit history)', hi: 'Samjhein null kyon hai (kabhi-kabhi null khud signal hota hai)', tone: 'amber' },
      { title: 'Fit Imputer', en: 'Fit Median/Mode imputer ONLY on training split', hi: 'Median/Mode imputer SIRF training split par fit karein', tone: 'lavender' },
      { title: 'Add Null Flag', en: 'Optional binary indicator column `col_is_missing`', hi: 'Zaroori hone par `col_is_missing` flag column add karein', tone: 'green' },
    ],
    tableTitle: 'Missing Value Strategies & When to Use Each',
    tableHeaders: ['Strategy', 'Best Used When', 'Watch Out For'],
    tableRows: [
      ['Median Imputation', 'Numeric skewed features (income, price)', 'Must compute median on TRAIN only'],
      ['"Unknown" Category', 'Missing categorical tags (city, device)', 'Preserves missingness pattern cleanly'],
      ['Missing Indicator Flag', 'Missingness carries signal (no prior loans)', 'Adds extra column; great with median'],
      ['Drop Rows', 'Target label `y` itself is missing', 'Never drop features blindly if >5% null'],
    ],
    tableNoteEn: 'Always deduplicate **before** splitting data so identical records never leak across train and test.',
    tableNoteHi: 'Hamesha data split karne se **pehle** deduplicate karein taaki same records train aur test mein leak na hon.',
    mistakeEn: 'Filling missing values with the mean of the entire dataset BEFORE splitting into train and test.',
    mistakeHi: 'Train/test split karne se PEHLE poore dataset ka mean nikal kar missing values bharna (data leakage!).',
    proHabitEn: 'Deduplicate first, split train/val/test second, and fit `SimpleImputer` inside a scikit-learn `Pipeline` on train only.',
    proHabitHi: 'Pehle deduplicate karein, fir train/val/test split karein, aur `SimpleImputer` ko Pipeline ke andar sirf train par fit karein.',
    jobUseEn: 'Building leak-free, resilient preprocessing pipelines that handle incomplete real-world user profiles.',
    jobUseHi: 'Leak-free preprocessing pipelines banana jo incomplete real-world user profiles ko cleanly handle karein.',
    mcq1Question: 'Why must duplicate records be removed BEFORE splitting into train and test sets?',
    mcq1Correct: 'Otherwise identical rows appear in both train and test, artificially inflating test accuracy via leakage.',
    mcq1Wrongs: [
      'Because Pandas cannot split datasets that have more than 10 rows.',
      'Because duplicates make the training set smaller.',
      'Because test sets are supposed to contain only duplicates.',
    ],
    mcq1Explain: 'Memorizing a row in training and being tested on the exact same copy gives a fake sense of generalization.',
    mcq2Question: 'When can adding a binary `is_missing` indicator column actually IMPROVE model accuracy?',
    mcq2Correct: 'When the fact that a value is missing is itself informative (e.g., a borrower having no previous credit history).',
    mcq2Wrongs: [
      'When there are zero missing values in the dataset.',
      'When you want to delete the target column.',
      'When using a constant dummy model.',
    ],
    mcq2Explain: 'Missing-Not-At-Random (MNAR) patterns often carry strong predictive signal.',
    realWorldScenario:
      'Your customer dataset has 18% missing values in `credit_score` because new-to-credit users have no score yet. Should you drop those rows or impute them? Why?',
    interviewQ1: 'How do you handle missing values differently in tree-based models versus linear/neural models?',
    interviewA1:
      'Linear and neural models require explicit imputation (median/mode + optional missing flag) and scaling, whereas modern gradient boosted trees like LightGBM and XGBoost can learn optimal split directions for missing values natively—though explicit imputation is still good for clarity and serving parity.',
    interviewQ2: 'Why is fitting an imputer on the full dataset before splitting considered data leakage?',
    interviewA2:
      'Because the imputed mean/median borrows statistical information from the future test set, leaking test distribution knowledge into training.',
  },
  {
    id: 20,
    modNum: 4,
    modTitle: 'Data Collection and Validation',
    topicNumInMod: 5,
    title: 'Data Quality Checks and Validation',
    subtitle: 'AUTOMATED QUALITY GATES BEFORE TRAINING AND INFERENCE',
    coreEn:
      '**Data Quality Validation** runs automated checks on every incoming dataset—verifying **completeness (nulls)**, **validity (ranges)**, **uniqueness (keys)**, and **freshness (timestamps)**—before a model trains or serves.',
    coreHi:
      '**Data Quality Validation** har incoming dataset par automated checks chalata hai—**completeness (nulls)**, **validity (ranges)**, **uniqueness (keys)** aur **freshness (timestamps)**—taaki kharab data se model kabhi train ya serve na ho.',
    analogyTitle: 'Airport Security Scanner Before Boarding',
    analogyEn:
      'Airports do not wait until the plane is in the air to check luggage. Every bag passes through an automated X-ray gate first. **Data Validation** is that security gate for your ML pipeline.',
    analogyHi:
      'Airport par flight udne ke baad luggage check nahi hota—boarding se pehle hi X-ray gate par check hota hai. **Data Validation** aapke ML pipeline ka wahi security gate hai.',
    steps: [
      { title: 'Completeness', en: 'Assert required columns exist & null % is within bounds', hi: 'Required columns aur null % limit ke andar check karein', tone: 'sky' },
      { title: 'Validity', en: 'Verify ages, prices, dates & categories are legal', hi: 'Ages, prices, dates aur categories valid range mein check karein', tone: 'amber' },
      { title: 'Freshness', en: 'Ensure latest timestamp is recent (pipeline did not stall)', hi: 'Ensure karein latest timestamp fresh hai (pipeline ruka nahi)', tone: 'lavender' },
      { title: 'Quarantine', en: 'Route invalid rows to dead-letter log & alert team', hi: 'Invalid rows ko log/quarantine karein aur team ko alert bhejein', tone: 'green' },
    ],
    codeLabel: 'PYTHON — AUTOMATED DATA QUALITY GATE',
    code: `def validate_batch(rows: list[dict]) -> list[str]:
    errors = []
    if not rows:
        return ["Empty batch"]
    for i, r in enumerate(rows):
        if r.get("amount", -1) <= 0:
            errors.append(f"Row {i}: non-positive amount")
    return errors

print(validate_batch([{"amount": 500}, {"amount": -20}]))`,
    codeOutput: `['Row 1: non-positive amount']`,
    codeCaptionEn: 'Automated quality gates return exact failing row details so engineers fix upstream bugs in minutes.',
    codeCaptionHi: 'Automated quality gates exact failing rows dikhate hain jisse engineers upstream bugs minutes mein fix kar sakte hain.',
    tableTitle: 'The 4 Dimensions of ML Data Quality',
    tableHeaders: ['Dimension', 'Example Automated Check', 'Risk Prevented'],
    tableRows: [
      ['Completeness', 'Null % in `income` < 5%', 'Broken ETL join wiping a column'],
      ['Validity', '`price > 0` and `discount <= 100`', 'Negative prices poisoning regression'],
      ['Uniqueness', 'Zero duplicate `transaction_id`', 'Train/test leakage & double counting'],
      ['Freshness', 'Latest event age < 24 hours', 'Training silently on stale data'],
    ],
    tableNoteEn: 'In production MLOps, **Data Validation** is as mandatory as unit testing code.',
    tableNoteHi: 'Production MLOps mein **Data Validation** utna hi mandatory hai jitna code ki unit testing.',
    mistakeEn: 'Running scheduled weekly retraining with zero data quality gates—allowing an empty or corrupted upstream table to overwrite a healthy production model.',
    mistakeHi: 'Bina data quality gate ke weekly retraining chalana—jisse corrupted table ek healthy production model ko overwrite kar de.',
    proHabitEn: 'Gate every training pipeline with automated schema, null, range, and freshness assertions that halt deployment on failure.',
    proHabitHi: 'Har training pipeline mein automated schema, null, range aur freshness gates lagayein jo failure par deployment rok dein.',
    jobUseEn: 'Keeping automated retraining pipelines safe in production using Pandera, Great Expectations, or TFDV.',
    jobUseHi: 'Pandera, Great Expectations ya TFDV se automated retraining pipelines ko safe rakhna.',
    mcq1Question: 'What should an automated retraining pipeline do if the incoming dataset fails a critical data quality check?',
    mcq1Correct: 'Halt retraining, keep the current healthy model serving, log the failing checks, and alert the team.',
    mcq1Wrongs: [
      'Deploy the broken model anyway to stay on schedule.',
      'Delete all historical backups.',
      'Silently replace all missing columns with 999999.',
    ],
    mcq1Explain: 'Failing safely preserves live service quality until the upstream data issue is resolved.',
    mcq2Question: 'Which data quality dimension catches a stalled ETL job that stopped sending new records three days ago?',
    mcq2Correct: 'Data Freshness (checking the max event timestamp).',
    mcq2Wrongs: [
      'Column alphabetical order.',
      'File extension casing.',
      'Python indentation style.',
    ],
    mcq2Explain: 'Freshness checks guarantee your model is not retraining on stale snapshots.',
    realWorldScenario:
      'Your automated daily retraining pipeline accidentally trained on a day where 70% of `city` values were NULL due to a backend bug. What check would have blocked this?',
    interviewQ1: 'What are the key dimensions of Data Quality in production ML?',
    interviewA1:
      'Completeness (missing rates), Validity (types, ranges, regex/enum rules), Uniqueness (no duplicate primary keys), Consistency (cross-column logic like end_date >= start_date), and Freshness (timely arrival).',
    interviewQ2: 'Why is "fail fast" a best practice in ML data pipelines?',
    interviewA2:
      'Stopping immediately when bad data enters saves expensive GPU training time and prevents degraded models from ever reaching users.',
  },
  {
    id: 21,
    modNum: 5,
    modTitle: 'Data Processing Pipelines',
    topicNumInMod: 1,
    title: 'NumPy and Pandas for ML',
    subtitle: 'FAST VECTORIZED TRANSFORMS AND MEMORY-EFFICIENT DATAFRAMES',
    coreEn:
      '**NumPy** powers fast numeric array math, while **Pandas** powers tabular cleaning, grouping, joins, and feature creation. ML Engineers write **vectorized** operations (never slow `.iterrows()` loops) to process millions of rows smoothly.',
    coreHi:
      '**NumPy** fast numeric array math chalata hai, jabki **Pandas** tabular cleaning, grouping, joins aur feature creation ke liye use hota hai. ML Engineers hamesha **vectorized** operations likhte hain (kabhi slow `.iterrows()` loops nahi).',
    analogyTitle: 'Stamp Machine vs Writing 10,000 Signatures by Hand',
    analogyEn:
      'Looping row-by-row with `.iterrows()` is like signing 10,000 forms one by one with a pen. **Vectorized NumPy/Pandas** is like stamping the entire batch at once in a split second.',
    analogyHi:
      '`.iterrows()` se row-by-row loop chalana 10,000 forms haath se sign karne jaisa hai. **Vectorized NumPy/Pandas** poora batch ek saath split second mein stamp karne jaisa hai.',
    steps: [
      { title: 'Inspect Dtypes', en: 'Check df.info(), nulls & downcast float64 → float32', hi: 'df.info(), nulls check karein aur float64 → float32 downcast karein', tone: 'sky' },
      { title: 'Vectorize Math', en: 'Use column ops & np.where() instead of Python loops', hi: 'Python loops ke bajaye column ops aur np.where() use karein', tone: 'amber' },
      { title: 'Group & Merge', en: 'Aggregate user stats with groupby() & safe left joins', hi: 'groupby() se user stats aur safe left joins banayein', tone: 'lavender' },
      { title: 'Verify Output', en: 'Assert expected row count after every merge', hi: 'Har merge ke baad expected row count assert karein', tone: 'green' },
    ],
    codeLabel: 'PYTHON — VECTORIZED PANDAS & NUMPY FEATURE',
    code: `import numpy as np, pandas as pd

df = pd.DataFrame({"orders": [1, 12, 5], "spend": [400, 18000, 2500]})
df["avg_order_val"] = (df["spend"] / df["orders"]).round(1)
df["is_vip"] = np.where(df["spend"] >= 10000, 1, 0)
print(df.to_dict(orient="records"))`,
    codeOutput: `[{'orders': 1, 'spend': 400, 'avg_order_val': 400.0, 'is_vip': 0}, {'orders': 12, 'spend': 18000, 'avg_order_val': 1500.0, 'is_vip': 1}, {'orders': 5, 'spend': 2500, 'avg_order_val': 500.0, 'is_vip': 0}]`,
    codeCaptionEn: '`np.where()` and column division run across the entire column in C speed—zero Python loops needed.',
    codeCaptionHi: '`np.where()` aur column division poore column par C speed se chalte hain—koi slow Python loop nahi chahiye.',
    tableTitle: 'Slow Pandas Anti-Pattern vs Fast ML Engineering Pattern',
    tableHeaders: ['Task', 'Slow Anti-Pattern', 'Fast Vectorized Pattern'],
    tableRows: [
      ['Conditional Flag', 'for idx, row in df.iterrows(): ...', 'np.where(df["x"] > 0, 1, 0)'],
      ['Memory Reduction', 'Keep default float64 & object strings', 'Use float32 & category dtype'],
      ['Safe Merging', 'Blind pd.merge() (row explosion risk)', 'pd.merge(..., validate="many_to_one")'],
    ],
    tableNoteEn: 'Using `validate="many_to_one"` in `pd.merge()` instantly catches accidental duplicate-key row explosions!',
    tableNoteHi: '`pd.merge()` mein `validate="many_to_one"` use karne se duplicate-key row explosion turant pakda jata hai!',
    mistakeEn: 'Using `df.iterrows()` on 1 million rows or doing a `pd.merge()` without checking if duplicate keys doubled the row count.',
    mistakeHi: '10 lakh rows par `df.iterrows()` chalana ya `pd.merge()` ke baad row count check na karna.',
    proHabitEn: 'Vectorize with NumPy/Pandas, downcast dtypes to save RAM, and always pass `validate=` to `pd.merge()`.',
    proHabitHi: 'NumPy/Pandas se vectorize karein, RAM bachane ke liye dtypes downcast karein aur `pd.merge()` mein `validate=` use karein.',
    jobUseEn: 'Building high-throughput data preprocessing jobs that run cleanly on modest cloud VMs.',
    jobUseHi: 'High-throughput preprocessing jobs banana jo kam RAM wale cloud VMs par bhi smoothly chalein.',
    mcq1Question: 'Why should you avoid `df.iterrows()` in production Pandas pipelines?',
    mcq1Correct: 'It converts every row into a Python Series inside a slow Python loop, running 50x–100x slower than vectorized operations.',
    mcq1Wrongs: [
      'It permanently deletes the DataFrame.',
      'It only works on 3 rows.',
      'It converts all integers into images.',
    ],
    mcq1Explain: 'Vectorized column operations execute in compiled C/NumPy code instead of Python bytecode per row.',
    mcq2Question: 'What bug does `pd.merge(orders, users, on="user_id", validate="many_to_one")` catch automatically?',
    mcq2Correct: 'Duplicate `user_id` rows in the `users` table that would silently multiply and duplicate your order rows.',
    mcq2Wrongs: [
      'Syntax errors in SQL queries.',
      'GPU memory leaks in PyTorch.',
      'Slow internet download speeds.',
    ],
    mcq2Explain: 'A many-to-many join caused by dirty keys silently inflates datasets and corrupts training metrics.',
    realWorldScenario:
      'Your Pandas preprocessing script takes 18 minutes and crashes with Out-Of-Memory (OOM) on an 8GB RAM server. Name 3 optimizations you apply.',
    interviewQ1: 'How do you reduce memory usage of a large Pandas DataFrame?',
    interviewA1:
      'Read only required Parquet columns, downcast `float64`/`int64` to `float32`/`int32`, convert low-cardinality strings to `category` dtype, or process in chunks/Polars/DuckDB.',
    interviewQ2: 'What is broadcasting in NumPy?',
    interviewA2:
      'Broadcasting lets NumPy perform arithmetic between arrays of different compatible shapes (like subtracting a 1D column-mean vector from every row of a 2D matrix) without copying data unnecessarily.',
  },
  {
    id: 22,
    modNum: 5,
    modTitle: 'Data Processing Pipelines',
    topicNumInMod: 2,
    title: 'Transformations and Data Cleaning',
    subtitle: 'DETERMINISTIC CLEANING PIPELINES WITH SCIKIT-LEARN COLUMNTRANSFORMER',
    coreEn:
      'Raw data contains messy strings, outliers, mixed units, and unscaled numbers. Wrapping all cleaning steps inside a **scikit-learn `Pipeline` + `ColumnTransformer`** guarantees deterministic, leak-free execution in both training and serving.',
    coreHi:
      'Raw data mein messy strings, outliers, mixed units aur unscaled numbers hote hain. Saare cleaning steps ko **scikit-learn `Pipeline` + `ColumnTransformer`** mein wrap karne se training aur serving dono mein leak-free execution guarantee hota hai.',
    analogyTitle: 'Automated Car Wash Conveyor Belt',
    analogyEn:
      'Every car enters the conveyor belt and passes through the exact same sequence—rinse, soap, scrub, dry—in the exact same order. A **scikit-learn Pipeline** is that automated conveyor belt for your data.',
    analogyHi:
      'Har car conveyor belt par exact same sequence—rinse, soap, scrub, dry—se guzarti hai. **scikit-learn Pipeline** aapke data ka wahi automated conveyor belt hai.',
    steps: [
      { title: 'Standardize Text', en: 'Trim whitespace, fix casing & normalize units', hi: 'Whitespace trim, casing aur units normalize karein', tone: 'sky' },
      { title: 'Cap Outliers', en: 'Clip impossible values or winsorize extreme tails', hi: 'Impossible values clip ya extreme tails cap karein', tone: 'amber' },
      { title: 'ColumnTransformer', en: 'Route numeric & categorical columns to tailored steps', hi: 'Numeric aur categorical columns ko alag steps par route karein', tone: 'lavender' },
      { title: 'Single Artifact', en: 'Save preprocessor + model together as one pipeline file', hi: 'Preprocessor + model ko ek hi pipeline file mein save karein', tone: 'green' },
    ],
    codeLabel: 'PYTHON — LEAK-FREE COLUMNTRANSFORMER PIPELINE',
    code: `from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.pipeline import Pipeline

num_pipe = Pipeline([("impute", SimpleImputer(strategy="median")), ("scale", StandardScaler())])
cat_pipe = Pipeline([("impute", SimpleImputer(strategy="most_frequent")),
                     ("ohe", OneHotEncoder(handle_unknown="ignore"))])
preprocessor = ColumnTransformer([("num", num_pipe, ["age", "income"]), ("cat", cat_pipe, ["city"])])
print("Pipeline steps ready:", [name for name, _, _ in preprocessor.transformers])`,
    codeOutput: `Pipeline steps ready: ['num', 'cat']`,
    codeCaptionEn: 'Notice `handle_unknown="ignore"` on `OneHotEncoder`—without it, a brand-new city in live production would crash your API!',
    codeCaptionHi: '`OneHotEncoder` par `handle_unknown="ignore"` dekhein—iske bina live production mein koi naya city aate hi API crash ho jayega!',
    tableTitle: 'Why Wrapping Cleaning in a Pipeline Matters',
    tableHeaders: ['Feature', 'Manual Loose Steps', 'Scikit-Learn Pipeline'],
    tableRows: [
      ['Data Leakage Risk', 'High (easy to fit on full data)', 'Zero (CV fits only on train folds)'],
      ['New Category in Prod', 'Crashes API with ValueError', 'Handled safely via handle_unknown="ignore"'],
      ['Deployment', 'Must save 5 separate pickle files', '1 single unified pipeline artifact'],
    ],
    tableNoteEn: 'Saving **preprocessing + model inside one Pipeline** is one of the highest-ROI MLOps habits.',
    tableNoteHi: '**Preprocessing + model ko ek hi Pipeline mein save karna** sabse best MLOps habit hai.',
    mistakeEn: 'Leaving `OneHotEncoder(handle_unknown="error")` default so the first unseen category in production causes a 500 Internal Server Error.',
    mistakeHi: '`OneHotEncoder` mein `handle_unknown="ignore"` na lagana jisse production mein pehli nayi category aate hi 500 error aa jaye.',
    proHabitEn: 'Always bundle preprocessing inside `ColumnTransformer` + `Pipeline` with `handle_unknown="ignore"`.',
    proHabitHi: 'Hamesha `ColumnTransformer` + `Pipeline` aur `handle_unknown="ignore"` use karein.',
    jobUseEn: 'Shipping rock-solid tabular ML pipelines that never suffer from preprocessing mismatch in production.',
    jobUseHi: 'Aise solid tabular ML pipelines ship karna jinme production mein kabhi preprocessing mismatch na ho.',
    mcq1Question: 'What happens in production if `OneHotEncoder` encounters a brand-new city name and `handle_unknown="ignore"` was NOT set?',
    mcq1Correct: 'The inference request throws a `ValueError` and crashes the API call.',
    mcq1Wrongs: [
      'It automatically retrains the model on the fly.',
      'It deletes all other columns.',
      'It increases API throughput.',
    ],
    mcq1Explain: 'Setting `handle_unknown="ignore"` encodes unseen categories as all zeros so serving stays resilient.',
    mcq2Question: 'What is the main advantage of bundling `ColumnTransformer` and the estimator inside a single `Pipeline`?',
    mcq2Correct: 'Cross-validation stays leak-free and training + serving share one identical saved artifact.',
    mcq2Wrongs: [
      'It eliminates the need for a test split.',
      'It forces all columns to be strings.',
      'It removes all outliers automatically.',
    ],
    mcq2Explain: 'A unified Pipeline guarantees every fold and every live request runs the exact same transformations.',
    realWorldScenario:
      'Your model trained cleanly on 5 Indian cities, but fails on launch day when a user registers from a 6th city. How do you fix this permanently?',
    interviewQ1: 'How does scikit-learn `Pipeline` prevent data leakage during cross-validation?',
    interviewA1:
      'Inside `cross_val_score`, the Pipeline calls `fit_transform` strictly on each fold’s training subset and only `transform` on the validation subset, so validation statistics never leak into scalers or imputers.',
    interviewQ2: 'Why should you save the preprocessor and model together?',
    interviewA2:
      'It eliminates version mismatch between feature scaling/encoding parameters and model weights during deployment and rollback.',
  },
  {
    id: 23,
    modNum: 5,
    modTitle: 'Data Processing Pipelines',
    topicNumInMod: 3,
    title: 'Train, Validation and Test Splits',
    subtitle: 'SIMULATING REAL UNSEEN FUTURE DATA HONESTLY',
    coreEn:
      'Never evaluate a model on data it already saw! Split data into **Train** (fit weights), **Validation** (tune hyperparameters & pick models), and **Test** (final unbiased score). Use **Stratified** splits for imbalanced classes and **Time-Based** splits for temporal data.',
    coreHi:
      'Model ko kabhi us data par evaluate mat karein jo woh pehle dekh chuka hai! Data ko **Train** (weights seekhna), **Validation** (tuning) aur **Test** (final unbiased check) mein baantein. Imbalanced data par **Stratified** aur time data par **Time-Based** split use karein.',
    analogyTitle: 'Practice Problems vs Mock Exam vs Final Board Exam',
    analogyEn:
      '**Train** is your daily homework, **Validation** is your mock exams where you adjust your study plan, and **Test** is the sealed final board exam you see only once at the very end.',
    analogyHi:
      '**Train** aapka daily homework hai, **Validation** mock exams hain jahan aap strategy sudharte hain, aur **Test** final board exam hai jo aap aakhir mein sirf ek baar dekhte hain.',
    steps: [
      { title: 'Check Structure', en: 'Is data IID, imbalanced, grouped by user, or time-series?', hi: 'Check karein data imbalanced, user-grouped ya time-series hai?', tone: 'sky' },
      { title: 'Choose Split', en: 'Random, Stratified, GroupKFold, or Chronological split', hi: 'Sahi split chunein: Stratified, Group ya Chronological', tone: 'amber' },
      { title: 'Tune on Val', en: 'Compare features & models strictly on Validation set', hi: 'Features aur models ko sirf Validation par compare karein', tone: 'lavender' },
      { title: 'Final Test', en: 'Evaluate winning model ONCE on sealed Test set', hi: 'Winning model ko sealed Test set par SIRF EK BAAR check karein', tone: 'green' },
    ],
    tableTitle: 'Choosing the Right Data Split Strategy',
    tableHeaders: ['Dataset Type', 'Correct Split Strategy', 'What Goes Wrong With Random Split'],
    tableRows: [
      ['Imbalanced Fraud (0.5% pos)', 'Stratified Split', 'Test set might accidentally get 0 fraud cases'],
      ['Sales / Stock Forecasting', 'Chronological (Past → Future)', 'Model peeks into future dates (massive leak!)'],
      ['Medical Patients / Users', 'Group Split (by patient_id)', 'Same patient in train & test inflates accuracy'],
    ],
    tableNoteEn: 'Your split strategy must mirror **how the model will be used in production** (usually predicting future users or future dates).',
    tableNoteHi: 'Aapki split strategy bilkul waisi honi chahiye **jaise model production mein chalega** (future users ya future dates predict karna).',
    mistakeEn: 'Using a random 80/20 split on time-series sales data so the model trains on December data to "predict" November.',
    mistakeHi: 'Time-series sales data par random 80/20 split lagana jisse model December ke data se November "predict" karne lage.',
    proHabitEn: 'Always ask: *"Could the same user or future timestamp leak across my split?"* before calling `train_test_split`.',
    proHabitHi: '`train_test_split` chalane se pehle hamesha poochein: *"Kya same user ya future timestamp mere split mein leak ho raha hai?"*',
    jobUseEn: 'Ensuring offline metrics honestly predict real-world production performance.',
    jobUseHi: 'Ensure karna ki offline metrics sach mein production performance ko accurately predict karein.',
    mcq1Question: 'You are building a demand forecasting model using 2 years of daily orders. Which split strategy is correct?',
    mcq1Correct: 'Chronological split (train on earlier months, validate/test on later future months).',
    mcq1Wrongs: [
      'Randomly shuffling all dates before splitting.',
      'Putting all weekends in train and weekdays in test.',
      'Testing on the exact same rows used for training.',
    ],
    mcq1Explain: 'Random shuffling leaks future seasonal patterns into training; chronological splits mirror real forecasting.',
    mcq2Question: 'Why use `GroupKFold` when a medical dataset has 5 X-ray images per patient?',
    mcq2Correct: 'To ensure all images of a given patient stay strictly in either train or test, preventing patient memorization.',
    mcq2Wrongs: [
      'To make images higher resolution.',
      'To delete 4 images from every patient.',
      'To double the number of classes.',
    ],
    mcq2Explain: 'Without grouping by patient ID, a model can memorize patient-specific artifacts instead of learning the disease.',
    realWorldScenario:
      'A candidate built a churn model using random split on monthly customer snapshots and got 96% AUC, but in production it got 62% AUC. What caused the huge drop?',
    interviewQ1: 'What are the distinct roles of Train, Validation, and Test sets?',
    interviewA1:
      'Train fits model parameters, Validation guides hyperparameter tuning and model selection, and the sealed Test set provides one final unbiased estimate of generalization error.',
    interviewQ2: 'When would you use Stratified vs Group vs Time-Based splitting?',
    interviewA2:
      'Stratified preserves rare class ratios; Group keeps all records of the same entity (user/patient) together; Time-Based trains strictly on the past and evaluates on the future to prevent temporal leakage.',
  },
  {
    id: 24,
    modNum: 5,
    modTitle: 'Data Processing Pipelines',
    topicNumInMod: 4,
    title: 'Reproducible Data Preparation',
    subtitle: 'DETERMINISTIC SNAPSHOTS, VERSIONED TRANSFORMS, AND ZERO SURPRISES',
    coreEn:
      '**Reproducible Data Preparation** guarantees that running your pipeline today or 6 months later on the same raw snapshot produces the **exact same training dataset**—bit for bit—through versioned code, immutable raw data, and fixed seeds.',
    coreHi:
      '**Reproducible Data Preparation** guarantee karta hai ki aaj ya 6 mahine baad same raw snapshot par pipeline chalane se **exact same training dataset** bane—versioned code, immutable raw data aur fixed seeds ke saath.',
    analogyTitle: 'Sealed Recipe & Exact Measuring Cups',
    analogyEn:
      'If a bakery changes flour brands silently without writing it down, they can never recreate yesterday’s best cake. Immutable raw snapshots + versioned scripts let you recreate any model on demand.',
    analogyHi:
      'Agar bakery bina likhe chupke se aata badal de, toh kal jaisa perfect cake dobara nahi ban sakta. Immutable raw snapshots + versioned scripts se aap koi bhi model dobara exact recreate kar sakte hain.',
    steps: [
      { title: 'Immutable Raw', en: 'Never overwrite raw files; write cleaned data to new path', hi: 'Raw files kabhi overwrite na karein; cleaned data naye path par likhein', tone: 'sky' },
      { title: 'Pin Snapshot', en: 'Tag dataset version / hash (e.g., data_v2026_11.parquet)', hi: 'Dataset version ya hash tag karein (e.g., data_v2026_11.parquet)', tone: 'amber' },
      { title: 'Deterministic Code', en: 'Fix random seeds & sort keys before sampling/splitting', hi: 'Sampling/splitting se pehle random seeds aur sorting fix karein', tone: 'lavender' },
      { title: 'Audit Lineage', en: 'Record raw_version + git_sha inside output metadata', hi: 'Output metadata mein raw_version + git_sha save karein', tone: 'green' },
    ],
    tableTitle: 'Checklist for 100% Reproducible Data Pipelines',
    tableHeaders: ['Principle', 'How to Implement', 'Bug Prevented'],
    tableRows: [
      ['Immutable Raw Layer', 'Keep `data/raw/` read-only; output to `data/processed/`', 'Accidental destruction of original truth'],
      ['Deterministic Ordering', 'Sort by primary key before sampling or splitting', 'Different train/test splits on every run'],
      ['Lineage Metadata', 'Save JSON manifest with dataset hash & Git commit', 'Forgetting which data trained prod model'],
    ],
    tableNoteEn: 'In regulated industries (Banking, Healthcare), **data lineage** is legally required for model audits.',
    tableNoteHi: 'Banking aur Healthcare jaise industries mein **data lineage** model audits ke liye legally mandatory hota hai.',
    mistakeEn: 'Editing raw CSV files manually in Excel and overwriting them, making it impossible for teammates to reproduce your results.',
    mistakeHi: 'Excel mein raw CSV manually edit karke overwrite kar dena, jisse teammates aapke results kabhi reproduce nahi kar paate.',
    proHabitEn: 'Treat `data/raw/` as strictly read-only and automate every single cleaning step in versioned Python/SQL code.',
    proHabitHi: '`data/raw/` ko strictly read-only rakhein aur har cleaning step ko versioned Python/SQL code mein automate karein.',
    jobUseEn: 'Passing financial/healthcare compliance audits and debugging production regressions quickly.',
    jobUseHi: 'Compliance audits pass karna aur production regressions ko turant debug karna.',
    mcq1Question: 'Why should an ML pipeline NEVER overwrite files inside the `raw/` data directory?',
    mcq1Correct: 'Because raw data is the immutable source of truth needed to audit, debug, or re-run pipelines cleanly.',
    mcq1Wrongs: [
      'Because Python cannot write to disk.',
      'Because raw files are always empty.',
      'Because overwriting files improves accuracy.',
    ],
    mcq1Explain: 'Keeping raw data immutable ensures every downstream transformation can always be replayed from scratch.',
    mcq2Question: 'What is "Data Lineage" in ML Engineering?',
    mcq2Correct: 'Tracking the exact origin, version, and transformation steps that produced a training dataset and model.',
    mcq2Wrongs: [
      'Drawing lines on a scatter plot.',
      'Sorting columns alphabetically.',
      'Deleting old training logs.',
    ],
    mcq2Explain: 'Lineage lets engineers trace any production prediction issue back to its exact source snapshot and code commit.',
    realWorldScenario:
      'A bank auditor asks you to prove which exact dataset snapshot and preprocessing script produced last quarter’s credit model. How does your pipeline answer this in 10 seconds?',
    interviewQ1: 'How do you make an ML data preparation pipeline fully reproducible?',
    interviewA1:
      'Keep raw data immutable with versioned snapshots, automate all transformations in Git-versioned scripts, fix random seeds and deterministic sort orders, pin library versions, and log dataset hashes alongside model artifacts.',
    interviewQ2: 'Why can two runs of `df.sample()` produce different datasets even with the same random seed?',
    interviewA2:
      'If the input rows arrived in a different order (for example, from an unsorted SQL query or parallel Spark read), sampling picks different records unless you sort by a deterministic key first.',
  },
  {
    id: 25,
    modNum: 5,
    modTitle: 'Data Processing Pipelines',
    topicNumInMod: 5,
    title: 'Batch Processing Basics',
    subtitle: 'PROCESSING MILLIONS OF RECORDS ON A SCHEDULE WITHOUT CRASHING RAM',
    coreEn:
      '**Batch Processing** runs scheduled jobs (hourly/nightly) to transform large volumes of data or pre-compute predictions in **chunks**, writing results to a database or cache for instant lookup.',
    coreHi:
      '**Batch Processing** scheduled jobs (hourly/nightly) chalata hai jo bade volumes ke data ko **chunks** mein process karte hain aur results ko database ya cache mein save karte hain taaki app unhe turant padh sake.',
    analogyTitle: 'Overnight Newspaper Printing vs Custom On-Demand Letter',
    analogyEn:
      'Printing 100,000 newspapers overnight so they are ready at 6 AM is **Batch Processing**. Writing a brand-new personalized reply in 20ms while a user waits is **Real-Time Processing**.',
    analogyHi:
      'Raat bhar mein 1 lakh akhbar chhap kar subah 6 baje ready rakhna **Batch Processing** hai. User ke saamne 20ms mein live reply banana **Real-Time Processing** hai.',
    steps: [
      { title: 'Schedule Job', en: 'Trigger nightly/hourly via Airflow, Prefect, or Cron', hi: 'Airflow, Prefect ya Cron se job schedule karein', tone: 'sky' },
      { title: 'Chunk & Process', en: 'Read & transform in memory-safe batches (e.g., 50k rows)', hi: 'Memory-safe chunks (50k rows) mein data process karein', tone: 'amber' },
      { title: 'Idempotent Write', en: 'Write cleanly by date partition so retries never duplicate', hi: 'Date partition par safely write karein taaki retry par duplicate na ho', tone: 'lavender' },
      { title: 'Serve Fast', en: 'App reads pre-computed scores from Redis/DB in <5ms', hi: 'App pre-computed scores ko Redis/DB se <5ms mein padhta hai', tone: 'green' },
    ],
    tableTitle: 'When Batch Processing Beats Real-Time APIs',
    tableHeaders: ['Use Case', 'Batch Processing Fit?', 'Why'],
    tableRows: [
      ['Weekly Churn Email List', 'YES (Ideal!)', 'Scores needed once a week; simple & super cheap'],
      ['Homepage "Top Picks For You"', 'YES (Pre-computed)', 'Compute nightly → serve from cache in 2ms'],
      ['Live UPI Fraud Blocking', 'NO (Needs Real-Time)', 'Must score current transaction within 50ms'],
    ],
    tableNoteEn: 'An **idempotent** batch job produces the exact same result even if retried twice after a network hiccup.',
    tableNoteHi: 'Ek **idempotent** batch job network error ke baad dobara chalne par bhi duplicate rows nahi banata.',
    mistakeEn: 'Building an expensive real-time GPU microservice for a marketing campaign that only sends emails once a week.',
    mistakeHi: 'Hafte mein ek baar chalne wale marketing campaign ke liye mehenga real-time GPU microservice bana dena.',
    proHabitEn: 'Default to **simple, idempotent batch pipelines** whenever sub-second live inference is not strictly required.',
    proHabitHi: 'Jahan sub-second live inference zaroori na ho, wahan hamesha **simple aur idempotent batch pipelines** prefer karein.',
    jobUseEn: 'Designing cost-effective recommendation, churn, and forecasting pipelines at scale.',
    jobUseHi: 'Cost-effective recommendation, churn aur forecasting pipelines scale par design karna.',
    mcq1Question: 'What does it mean for a batch ML pipeline to be "idempotent"?',
    mcq1Correct: 'Re-running the job for the same date overwrites or produces the exact same output without creating duplicate rows.',
    mcq1Wrongs: [
      'The job can only ever run once in history.',
      'The job skips validation checks.',
      'The job runs only on mobile phones.',
    ],
    mcq1Explain: 'Idempotency makes retries and backfills safe during operational failures.',
    mcq2Question: 'Which scenario is the BEST candidate for Batch Inference rather than Real-Time API inference?',
    mcq2Correct: 'Scoring all 2 million subscribers every Sunday night to send retention discount emails on Monday morning.',
    mcq2Wrongs: [
      'Blocking a stolen credit card swipe at a store terminal.',
      'Real-time voice transcription during a phone call.',
      'Autocompleting search queries as a user types.',
    ],
    mcq2Explain: 'Sunday-night scoring has no live-latency requirement, so batch processing is simpler, cheaper, and faster to serve.',
    realWorldScenario:
      'Your nightly batch job crashed halfway through writing predictions for 2026-11-24. How do you ensure re-running it does not create duplicate predictions?',
    interviewQ1: 'How do you decide between Batch and Real-Time processing in an ML system design interview?',
    interviewA1:
      'Check freshness and latency requirements: if predictions depend on live session state and must respond in milliseconds (fraud, search), use real-time serving; if predictions can be refreshed hourly/daily (churn, email recommendations), batch processing is cheaper, simpler, and ultra-fast via caching.',
    interviewQ2: 'How do you process a 50GB Parquet file on a machine with only 8GB of RAM?',
    interviewA2:
      'Stream it in row-group chunks using PyArrow/Pandas `chunksize`, or use out-of-core engines like DuckDB, Polars streaming, or Spark.',
  },
  {
    id: 26,
    modNum: 6,
    modTitle: 'Feature Engineering',
    topicNumInMod: 1,
    title: 'Numerical and Categorical Features',
    subtitle: 'TURNING RAW COLUMNS INTO HIGH-SIGNAL MODEL INPUTS',
    coreEn:
      '**Feature Engineering** is crafting informative numeric inputs from raw data. **Numerical features** (age, spend, ratios) measure quantities, while **Categorical features** (city, device, plan) represent discrete groups that must be encoded into numbers.',
    coreHi:
      '**Feature Engineering** raw data se high-signal numeric inputs banana hai. **Numerical features** (age, spend, ratios) quantities napte hain, jabki **Categorical features** (city, device, plan) groups dikhate hain jinhe numbers mein encode karna padta hai.',
    analogyTitle: 'Chopping Vegetables Before Cooking',
    analogyEn:
      'Even the world’s best oven cannot cook a whole unpeeled pumpkin properly. Good **Feature Engineering** prepares raw ingredients—creating ratios like `spend_per_order`—so even a simple model learns brilliantly.',
    analogyHi:
      'Duniya ka best oven bhi bina chhile aur kaate kaddu ko theek se nahi paka sakta. Achhi **Feature Engineering** raw data ko `spend_per_order` jaise smart features mein badal deti hai jisse simple model bhi kamaal ka result deta hai.',
    steps: [
      { title: 'Classify Columns', en: 'Separate continuous, discrete, ordinal & nominal columns', hi: 'Continuous, ordinal aur nominal columns ko alag karein', tone: 'sky' },
      { title: 'Domain Ratios', en: 'Create ratios like debt_to_income or clicks_per_day', hi: 'debt_to_income ya clicks_per_day jaise domain ratios banayein', tone: 'amber' },
      { title: 'Group Rare Cats', en: 'Bucket ultra-rare categories (<1%) into "OTHER"', hi: 'Bahut rare categories (<1%) ko "OTHER" mein group karein', tone: 'lavender' },
      { title: 'Check Parity', en: 'Verify every engineered feature is available at serving time', hi: 'Verify karein har feature serving time par available ho', tone: 'green' },
    ],
    tableTitle: 'Feature Types & Recommended Engineering Patterns',
    tableHeaders: ['Feature Type', 'Example', 'Smart Engineering Technique'],
    tableRows: [
      ['Continuous Numeric', 'Monthly income, distance_km', 'Log transform if skewed; create domain ratios'],
      ['Nominal Categorical', 'City, payment_method (no order)', 'One-Hot Encoding or Frequency/Target Encoding'],
      ['Ordinal Categorical', 'Plan: Free < Pro < Enterprise', 'Ordinal Encoding preserving rank (0, 1, 2)'],
      ['High-Cardinality ID', '50,000 pin codes or merchant IDs', 'Target/Frequency encoding or learned Embeddings'],
    ],
    tableNoteEn: 'Better **domain features** almost always beat spending days tuning hyperparameters on weak raw columns.',
    tableNoteHi: 'Weak columns par dino tak hyperparameter tuning karne se kahin behtar hai **strong domain features** banana.',
    mistakeEn: 'One-Hot Encoding a column with 50,000 unique pin codes—exploding the dataset into 50,000 sparse columns and crashing RAM.',
    mistakeHi: '50,000 unique pin codes wale column par One-Hot Encoding lagana—jisse 50,000 columns ban kar RAM crash ho jaye.',
    proHabitEn: 'Check cardinality first: One-Hot for low cardinality (<15), Frequency/Target/Embedding encoding for high cardinality.',
    proHabitHi: 'Pehle cardinality check karein: low (<15) par One-Hot aur high cardinality par Frequency/Target/Embedding encoding use karein.',
    jobUseEn: 'Driving the biggest accuracy jumps in Kaggle competitions and real-world fintech/e-commerce models.',
    jobUseHi: 'Real-world fintech aur e-commerce models mein sabse bada accuracy boost laana.',
    mcq1Question: 'Why is `debt_to_income = total_debt / monthly_income` often a much stronger feature than `total_debt` alone?',
    mcq1Correct: 'Because a Rs 2,00,000 loan is low-risk for a high earner but high-risk for a low earner—the ratio captures true financial burden.',
    mcq1Wrongs: [
      'Because models cannot read two separate columns.',
      'Because division removes all missing values.',
      'Because ratios are always integers.',
    ],
    mcq1Explain: 'Domain ratios encode business intuition directly so models learn cleaner decision boundaries.',
    mcq2Question: 'Which encoding is WRONG for nominal categories like `City = {Delhi, Mumbai, Pune}` in Linear Regression?',
    mcq2Correct: 'Assigning arbitrary integers Delhi=1, Mumbai=2, Pune=3, because it falsely implies Pune is 3x bigger than Delhi.',
    mcq2Wrongs: [
      'One-Hot Encoding with `handle_unknown="ignore"`.',
      'Grouping rare cities into `"OTHER"`.',
      'Out-of-fold Target Encoding.',
    ],
    mcq2Explain: 'Linear models interpret arbitrary integers as ordered numeric magnitudes; use One-Hot or Target Encoding instead.',
    realWorldScenario:
      'You have a `merchant_id` column with 40,000 unique stores in a UPI fraud dataset. How do you encode it without exploding memory or leaking target labels?',
    interviewQ1: 'How do you handle high-cardinality categorical features in production ML?',
    interviewA1:
      'I group rare tail values into "OTHER" and use frequency encoding, out-of-fold target encoding with smoothing (to prevent leakage), hashing, or learned dense embeddings in neural networks.',
    interviewQ2: 'Why is feature engineering often more impactful than switching algorithms?',
    interviewA2:
      'Algorithms can only learn from the signal present in their inputs; encoding domain interactions (ratios, rolling windows, time-since-last-event) makes complex patterns linearly separable and easy to generalize.',
  },
  {
    id: 27,
    modNum: 6,
    modTitle: 'Feature Engineering',
    topicNumInMod: 2,
    title: 'Encoding and Scaling',
    subtitle: 'STANDARDIZATION, MIN-MAX SCALING, AND SAFE CATEGORICAL ENCODING',
    coreEn:
      '**Scaling** puts numeric features on comparable ranges (`StandardScaler`, `MinMaxScaler`, `RobustScaler`), which is **mandatory** for distance-based models (KNN, K-Means), Linear/Logistic Regression, and Neural Networks—while **Tree models** are scale-invariant.',
    coreHi:
      '**Scaling** numeric features ko comparable range par lata hai (`StandardScaler`, `MinMaxScaler`, `RobustScaler`), jo KNN, K-Means, Linear Regression aur Neural Networks ke liye **mandatory** hai—jabki **Tree models** ko scaling ki zaroorat nahi hoti.',
    analogyTitle: 'Comparing Rupees and Kilometers Fairly',
    analogyEn:
      'If Age ranges from `20–60` and Salary ranges from `20,000–2,00,000`, a distance model thinks Salary is 3,000x more important just because its numbers are bigger! **Scaling** puts both on a fair playing field.',
    analogyHi:
      'Agar Age `20–60` hai aur Salary `20,000–2,00,000`, toh distance model ko lagega Salary 3,000x zyada important hai! **Scaling** dono ko barabar scale par le aata hai.',
    steps: [
      { title: 'Check Model', en: 'Distance/Linear/NN need scaling; Trees do not', hi: 'Distance/Linear/NN ko scaling chahiye; Trees ko nahi', tone: 'sky' },
      { title: 'Pick Scaler', en: 'StandardScaler (normal), RobustScaler (outliers), MinMax [0,1]', hi: 'StandardScaler, RobustScaler (outliers) ya MinMax chunein', tone: 'amber' },
      { title: 'Fit on Train', en: 'Call scaler.fit(X_train), then transform(X_val/X_test)', hi: 'scaler.fit(X_train) karein, fir X_val/X_test par transform', tone: 'lavender' },
      { title: 'Encode Safely', en: 'One-Hot low-card cats; out-of-fold Target Encode high-card', hi: 'Low-card par One-Hot; high-card par out-of-fold Target Encode', tone: 'green' },
    ],
    tableTitle: 'Which Scaler Should You Choose?',
    tableHeaders: ['Scaler', 'Formula Intuition', 'Best Used When'],
    tableRows: [
      ['StandardScaler', '(x - mean) / std → mean 0, std 1', 'Default for Logistic Regression, SVM, Neural Nets'],
      ['RobustScaler', '(x - median) / IQR', 'Dataset has extreme outliers (salary, house price)'],
      ['MinMaxScaler', '(x - min) / (max - min) → [0, 1]', 'Image pixels (0–255 → 0–1) or bounded inputs'],
    ],
    tableNoteEn: 'Tree models (Decision Tree, Random Forest, XGBoost) split on rank order (`x > threshold`), so monotonic scaling does not change their splits.',
    tableNoteHi: 'Tree models (Random Forest, XGBoost) rank order par split karte hain, isliye scaling se unke splits par farq nahi padta.',
    mistakeEn: 'Using `StandardScaler` on a dataset with massive outliers without checking—allowing one outlier to crush normal values near 0.',
    mistakeHi: 'Extreme outliers wale data par bina check kiye `StandardScaler` lagana—jisse normal values 0 ke paas dab jaati hain.',
    proHabitEn: 'Use `RobustScaler` (or `log1p` + `StandardScaler`) for skewed financial features, always inside a `Pipeline`.',
    proHabitHi: 'Skewed financial features par `RobustScaler` ya `log1p + StandardScaler` hamesha `Pipeline` ke andar use karein.',
    jobUseEn: 'Getting fast, stable convergence in neural networks, KNN retrieval, and regularized linear models.',
    jobUseHi: 'Neural networks, KNN retrieval aur linear models mein fast aur stable convergence laana.',
    mcq1Question: 'Which model family is LEAST sensitive to unscaled numerical features?',
    mcq1Correct: 'Decision Trees and Gradient Boosted Trees (Random Forest, XGBoost, LightGBM).',
    mcq1Wrongs: [
      'K-Nearest Neighbors (KNN).',
      'K-Means Clustering.',
      'Neural Networks trained with Gradient Descent.',
    ],
    mcq1Explain: 'Trees split based on threshold ordering, whereas KNN, K-Means, and gradient-based models depend directly on feature magnitudes.',
    mcq2Question: 'Which scaler handles extreme outliers best without letting them distort the rest of the feature values?',
    mcq2Correct: 'RobustScaler (uses Median and Interquartile Range).',
    mcq2Wrongs: [
      'MinMaxScaler.',
      'Multiplying every column by 1,000.',
      'Deleting the column header.',
    ],
    mcq2Explain: 'Median and IQR are resistant to extreme tail values, unlike Mean, Std, Min, and Max.',
    realWorldScenario:
      'Your K-Means customer segmentation groups people purely by annual income and ignores age and visit count completely. What preprocessing step did you miss?',
    interviewQ1: 'Why do Linear Regression with L2 regularization (Ridge) and Neural Networks require feature scaling?',
    interviewA1:
      'In Ridge, unscaled features with tiny values need huge weights and get unfairly penalized by L2; in Neural Networks, unscaled inputs create elongated loss surfaces that make Gradient Descent oscillate and converge slowly.',
    interviewQ2: 'Why must Target Encoding be computed out-of-fold?',
    interviewA2:
      'If you encode a category using the target mean including the row itself, the feature leaks the row’s own label, causing severe overfitting on rare categories.',
  },
  {
    id: 28,
    modNum: 6,
    modTitle: 'Feature Engineering',
    topicNumInMod: 3,
    title: 'Date and Text Features',
    subtitle: 'EXTRACTING CYCLICAL TIME SIGNALS AND TF-IDF / EMBEDDINGS FROM TEXT',
    coreEn:
      'Raw timestamps (`"2026-11-25 22:15:00"`) and free text (`"Late delivery, cold food"`) cannot be fed directly to tabular models. ML Engineers extract **calendar/cyclical features** (`day_of_week`, `is_weekend`, `sin/cos hour`) and **text features** (`TF-IDF`, `length`, or `Embeddings`).',
    coreHi:
      'Raw timestamps aur free text seedhe tabular models mein nahi jaate. ML Engineers **calendar/cyclical features** (`day_of_week`, `is_weekend`, `sin/cos hour`) aur **text features** (`TF-IDF`, `length` ya `Embeddings`) nikalte hain.',
    analogyTitle: 'Reading a Clock Properly',
    analogyEn:
      'On a 24-hour clock, 11 PM (`23`) and 1 AM (`1`) are only 2 hours apart, not 22 hours apart! Encoding hour with **sin/cos cyclical features** teaches the model that midnight wraps around smoothly.',
    analogyHi:
      'Ghadi mein raat 11 baje (`23`) aur 1 baje (`1`) ke beech 2 ghante ka farq hai, 22 ghante ka nahi! **sin/cos cyclical features** model ko batate hain ki midnight par ghadi ghoom kar wapas judti hai.',
    steps: [
      { title: 'Parse Dates', en: 'Extract hour, day_of_week, is_weekend & days_since_last_event', hi: 'hour, day_of_week, is_weekend aur recency features nikalein', tone: 'sky' },
      { title: 'Cyclical Encode', en: 'Map hour/month onto sin() & cos() circle for continuity', hi: 'Continuity ke liye hour/month ko sin()/cos() par map karein', tone: 'amber' },
      { title: 'Clean Text', en: 'Lowercase, strip noise & compute word/char counts', hi: 'Text clean karein aur word/char counts nikalein', tone: 'lavender' },
      { title: 'Vectorize Text', en: 'Use TF-IDF for fast baselines or Embeddings for semantics', hi: 'Fast baseline ke liye TF-IDF ya semantics ke liye Embeddings', tone: 'green' },
    ],
    codeLabel: 'PYTHON — CYCLICAL HOUR & TIME FEATURE EXTRACTION',
    code: `import math, pandas as pd

ts = pd.Timestamp("2026-11-25 23:00:00")
hour = ts.hour
hour_sin = round(math.sin(2 * math.pi * hour / 24), 3)
hour_cos = round(math.cos(2 * math.pi * hour / 24), 3)
print({"hour": hour, "is_weekend": int(ts.dayofweek >= 5), "sin": hour_sin, "cos": hour_cos})`,
    codeOutput: `{'hour': 23, 'is_weekend': 0, 'sin': -0.259, 'cos': 0.966}`,
    codeCaptionEn: 'Notice `hour=23` has `cos = 0.966`—right next to `hour=0` (`cos = 1.0`), preserving true midnight proximity!',
    codeCaptionHi: 'Dekhein `hour=23` ka `cos = 0.966` hai—bilkul `hour=0` (`cos = 1.0`) ke paas!',
    tableTitle: 'High-Impact Date & Text Features in Real Products',
    tableHeaders: ['Raw Column', 'Engineered Features', 'Business Signal Captured'],
    tableRows: [
      ['order_timestamp', 'is_weekend, hour_sin/cos, days_since_last_order', 'Payday spikes, late-night fraud, churn recency'],
      ['customer_review', 'TF-IDF n-grams, review_length, sentiment_score', 'Complaint urgency & refund risk'],
      ['support_ticket', 'Dense sentence embedding (384-dim)', 'Semantic routing even with synonyms'],
    ],
    tableNoteEn: 'Always fit `TfidfVectorizer` **strictly on training text** so vocabulary and IDF weights never leak from test data.',
    tableNoteHi: '`TfidfVectorizer` ko hamesha **sirf training text par fit** karein taaki test vocabulary leak na ho.',
    mistakeEn: 'Feeding raw timestamp integers (Unix epoch seconds) into a model so it memorizes the date instead of learning reusable time patterns.',
    mistakeHi: 'Raw Unix timestamp seconds seedhe model ko dena jisse model date rat le aur future dates par fail ho jaye.',
    proHabitEn: 'Convert timestamps into **relative recency** (`days_since_signup`) and **cyclical calendar features**; fit text vectorizers inside the Pipeline.',
    proHabitHi: 'Timestamps ko **recency** (`days_since_signup`) aur **cyclical features** mein badlein; text vectorizers Pipeline mein fit karein.',
    jobUseEn: 'Boosting delivery ETA, fraud detection, and customer support routing models with rich temporal and text signals.',
    jobUseHi: 'Delivery ETA, fraud detection aur customer support models ko temporal aur text signals se supercharge karna.',
    mcq1Question: 'Why is `days_since_last_purchase` a better ML feature than the raw date `"2026-11-25"`?',
    mcq1Correct: 'Relative recency generalizes to future dates, whereas raw calendar dates shift out of range after deployment.',
    mcq1Wrongs: [
      'Because Pandas cannot parse dates.',
      'Because models only accept negative numbers.',
      'Because raw dates always cause syntax errors.',
    ],
    mcq1Explain: 'Future dates after deployment will always be larger than every date seen in training; relative durations stay stable.',
    mcq2Question: 'When is TF-IDF a strong choice compared to heavy LLM embeddings?',
    mcq2Correct: 'When you need a fast, low-cost, interpretable baseline where exact keywords matter (e.g., spam or ticket tagging).',
    mcq2Wrongs: [
      'When you want to generate photorealistic images.',
      'When your dataset has zero text columns.',
      'When you need 100GB of GPU VRAM.',
    ],
    mcq2Explain: 'TF-IDF + Logistic Regression runs in milliseconds on CPU and is a classic production baseline.',
    realWorldScenario:
      'Your food delivery ETA model performs poorly every Friday evening between 7 PM and 10 PM. What date/time features should you engineer?',
    interviewQ1: 'How do you represent cyclical time features like hour-of-day or month-of-year for neural networks?',
    interviewA1:
      'Project them onto a unit circle using `sin(2π·x/period)` and `cos(2π·x/period)` so the end of the cycle (23:00) sits right next to the start (00:00).',
    interviewQ2: 'What is the limitation of Bag-of-Words / TF-IDF that dense Embeddings solve?',
    interviewA2:
      'TF-IDF treats words as independent tokens so "cheap" and "affordable" have zero overlap, whereas dense embeddings place semantically similar words and sentences close together in vector space.',
  },
  {
    id: 29,
    modNum: 6,
    modTitle: 'Feature Engineering',
    topicNumInMod: 4,
    title: 'Feature Selection Basics',
    subtitle: 'KEEPING HIGH-SIGNAL FEATURES TO CUT LATENCY, COST, AND OVERFITTING',
    coreEn:
      'More features do NOT always mean a better model! **Feature Selection** removes noisy, redundant, and zero-variance columns to **reduce overfitting, speed up inference latency, and lower feature-store cost**.',
    coreHi:
      'Zyada features ka matlab hamesha better model nahi hota! **Feature Selection** noisy aur redundant columns hatata hai taaki **overfitting kam ho, inference latency fast ho aur cost bache**.',
    analogyTitle: 'Packing a Trekking Backpack',
    analogyEn:
      'Carrying 10 extra bricks on a mountain trek slows you down and adds zero value. Removing useless weight lets you climb faster and safer—just like pruning noisy features in ML.',
    analogyHi:
      'Pahad par chadhte waqt bag mein 10 extra eentein rakhne se sirf thakan hoti hai, koi fayda nahi. Faltu features hatane se model fast, light aur zyada accurate banta hai.',
    steps: [
      { title: 'Filter Noise', en: 'Drop constant columns, IDs & >95% duplicate/correlated cols', hi: 'Constant columns, raw IDs aur highly correlated cols hatayein', tone: 'sky' },
      { title: 'Measure Signal', en: 'Check Permutation Importance or SHAP on validation set', hi: 'Validation set par Permutation Importance ya SHAP dekhein', tone: 'amber' },
      { title: 'Prune & Retest', en: 'Remove bottom features & confirm CV score stays strong', hi: 'Weak features hatayein aur check karein CV score strong rahe', tone: 'lavender' },
      { title: 'Audit Cost', en: 'Drop slow/expensive features that add <0.1% lift', hi: 'Slow/mehenge features jo <0.1% lift dein unhe drop karein', tone: 'green' },
    ],
    tableTitle: 'Three Families of Feature Selection Methods',
    tableHeaders: ['Method Type', 'Examples', 'Speed & Accuracy Trade-Off'],
    tableRows: [
      ['Filter Methods', 'Variance threshold, Correlation, Mutual Info', 'Very fast; ignores feature interactions'],
      ['Embedded Methods', 'L1 (Lasso) penalty, Tree Feature Importance', 'Built directly into training; fast & practical'],
      ['Wrapper / Permutation', 'Permutation Importance on Validation, RFE', 'Most trustworthy for true predictive impact'],
    ],
    tableNoteEn: 'Prefer **Permutation Importance on the validation set** over raw tree split counts (which can favor high-cardinality noise).',
    tableNoteHi: 'Raw tree split counts ke bajaye **validation set par Permutation Importance** par zyada bharosa karein.',
    mistakeEn: 'Keeping 300 features in production when the top 25 features deliver 99.7% of the accuracy at 1/10th the API latency.',
    mistakeHi: 'Production mein 300 features rakhna jabki top 25 features 1/10th latency mein 99.7% accuracy de dete hain.',
    proHabitEn: 'Run **ablation / permutation importance** before deployment and ship the smallest feature set that hits your KPI.',
    proHabitHi: 'Deployment se pehle **permutation importance** chalayein aur sabse compact high-signal feature set ship karein.',
    jobUseEn: 'Slashing inference latency, cloud database queries, and maintenance overhead in production ML services.',
    jobUseHi: 'Production ML services mein inference latency, DB queries aur maintenance overhead kam karna.',
    mcq1Question: 'Why is Permutation Importance on a validation set often more reliable than default impurity-based tree importance?',
    mcq1Correct: 'Impurity importance can be biased toward high-cardinality numeric/ID columns, whereas permutation directly measures validation score drop.',
    mcq1Wrongs: [
      'Because tree models do not have features.',
      'Because permutation importance does not need a validation set.',
      'Because impurity importance only works on text.',
    ],
    mcq1Explain: 'Shuffling one feature on validation data directly tests how much the model genuinely relies on it for unseen predictions.',
    mcq2Question: 'How does L1 (Lasso) regularization perform automatic feature selection?',
    mcq2Correct: 'It shrinks weights of unhelpful features all the way to exact zero.',
    mcq2Wrongs: [
      'It doubles every feature value.',
      'It randomly deletes half the rows.',
      'It converts all features to strings.',
    ],
    mcq2Explain: 'L1 penalty produces sparse weight vectors, zeroing out weak predictors automatically.',
    realWorldScenario:
      'Your fraud model uses 180 features and takes 210ms per request, missing your 80ms SLA. How do you safely prune features?',
    interviewQ1: 'Why can too many features hurt a machine learning model?',
    interviewA1:
      'Irrelevant features add noise causing overfitting (curse of dimensionality), increase training and serving latency, raise feature-pipeline maintenance costs, and create more points of failure for data drift.',
    interviewQ2: 'What happens if you perform feature selection on the entire dataset BEFORE splitting into train and test?',
    interviewA2:
      'It causes selection bias / data leakage because the test set labels influenced which features were kept, inflating offline validation metrics.',
  },
  {
    id: 30,
    modNum: 6,
    modTitle: 'Feature Engineering',
    topicNumInMod: 5,
    title: 'Preventing Data Leakage',
    subtitle: 'THE #1 SILENT KILLER OF PRODUCTION MACHINE LEARNING MODELS',
    coreEn:
      '**Data Leakage** happens when information from the **future** or the **test set** sneaks into your training features or preprocessing. It produces a fake 99% offline score and a catastrophic crash in real production.',
    coreHi:
      '**Data Leakage** tab hota hai jab **future** ya **test set** ki jaankari galti se training features ya preprocessing mein ghus jaati hai. Isse offline score 99% dikhta hai par live production mein model buri tarah fail ho jata hai.',
    analogyTitle: 'Accidentally Printing the Answer Key on the Exam Sheet',
    analogyEn:
      'Imagine predicting whether a bank loan will default, and accidentally including a column called `late_fee_charged_after_default`. Of course the model gets 99.8% offline—it is reading the future answer key that does not exist when the customer applies!',
    analogyHi:
      'Sochiye aap predict kar rahe hain loan default hoga ya nahi, aur galti se `late_fee_charged_after_default` column daal dein. Offline 99.8% aayega kyunki model future ka answer key padh raha hai jo application ke waqt exist hi nahi karta!',
    steps: [
      { title: 'Time Audit', en: 'Verify every feature was known BEFORE prediction timestamp', hi: 'Verify karein har feature prediction time se PEHLE available tha', tone: 'sky' },
      { title: 'Split First', en: 'Split train/val/test BEFORE scaling, imputing, or SMOTE', hi: 'Scaling, imputing ya SMOTE se PEHLE train/val/test split karein', tone: 'amber' },
      { title: 'Pipeline Lock', en: 'Fit all transformers strictly on train folds inside Pipeline', hi: 'Pipeline mein saare transformers sirf train folds par fit karein', tone: 'lavender' },
      { title: 'Too-Good Check', en: 'If offline AUC > 0.98 on hard problem, suspect leakage!', hi: 'Hard problem par offline AUC > 0.98 aaye toh turant leakage check karein!', tone: 'green' },
    ],
    tableTitle: 'Two Major Types of Data Leakage & How to Stop Them',
    tableHeaders: ['Leakage Type', 'Real-World Mistake Example', 'Bulletproof Prevention'],
    tableRows: [
      ['Target Leakage', 'Using `refund_issued` to predict `will_return_order`', 'Point-in-time feature audit before training'],
      ['Train-Test Contamination', 'Fitting StandardScaler / SMOTE on full dataset before split', 'Split first; wrap all steps in sklearn Pipeline'],
      ['Temporal Leakage', 'Random split on time-series; using future monthly average', 'Chronological split + strictly backward rolling windows'],
    ],
    tableNoteEn: 'Golden ML Engineer rule: **Whenever a model looks too good to be true, hunt for data leakage first!**',
    tableNoteHi: 'Golden ML Engineer rule: **Jab bhi model "too good to be true" lage, sabse pehle data leakage dhoondhein!**',
    mistakeEn: 'Applying SMOTE oversampling to the entire dataset before `train_test_split`, putting synthetic copies of test samples into training.',
    mistakeHi: '`train_test_split` se pehle poore dataset par SMOTE lagana, jisse test samples ki synthetic copies training mein chali jaati hain.',
    proHabitEn: 'Perform a **timestamp availability check** on every feature and put every preprocessing/sampling step inside a Pipeline.',
    proHabitHi: 'Har feature ka **timestamp availability check** karein aur har preprocessing/sampling step ko Pipeline ke andar rakhein.',
    jobUseEn: 'Saving companies from launching broken models and acing the #1 favorite ML Engineer interview question.',
    jobUseHi: 'Companies ko broken models launch karne se bachana aur ML Engineer interviews ka #1 favorite question crack karna.',
    mcq1Question: 'You are predicting if a patient will be readmitted to a hospital within 30 days. Which feature is a Target Leak?',
    mcq1Correct: '`discharge_follow_up_readmission_code` recorded when the patient returned on day 12.',
    mcq1Wrongs: [
      'Patient age at admission.',
      'Number of prior hospital visits in the past year.',
      'Blood pressure measured on admission day.',
    ],
    mcq1Explain: 'Any column recorded after the prediction moment leaks the future outcome into training.',
    mcq2Question: 'Which sequence is 100% leak-free?',
    mcq2Correct: 'Deduplicate → Split Train/Val/Test → Fit Imputer/Scaler on Train → Transform Val & Test.',
    mcq2Wrongs: [
      'Fit Scaler on All Data → Split Train/Test → Train.',
      'Apply SMOTE on All Data → Split Train/Test → Evaluate.',
      'Select top features using All Data labels → Split Train/Test.',
    ],
    mcq2Explain: 'Splitting before any data-dependent transformation keeps test data completely unseen.',
    realWorldScenario:
      'Your customer churn model suddenly jumped from 0.78 AUC to 0.994 AUC after you joined the billing table. What is the very first thing you inspect?',
    interviewQ1: 'What is Data Leakage and what are its two most common forms?',
    interviewA1:
      'Data leakage is when information unavailable at prediction time enters training. The two main forms are Target Leakage (including post-outcome features) and Train-Test Contamination (fitting scalers, imputers, encoders, or oversamplers before splitting).',
    interviewQ2: 'Why is applying SMOTE before cross-validation a classic leakage bug?',
    interviewA2:
      'SMOTE interpolates between minority samples; doing it before splitting creates near-identical synthetic points in both train and validation folds, artificially inflating validation Recall.',
  },
];
