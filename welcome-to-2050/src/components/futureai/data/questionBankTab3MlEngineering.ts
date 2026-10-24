import { TopicQuestionBank } from './questionBankRegistry';

export const TAB3_ML_ENGINEERING_QUESTION_BANK: Record<string, TopicQuestionBank> = {
  '1.1': {
    tabId: 3,
    tabName: 'Machine Learning Engineering',
    moduleId: 1,
    moduleName: 'Introduction to Machine Learning Engineering',
    topicKey: '1.1',
    id: 1,
    topicTitle: 'What Is Machine Learning Engineering?',
    mode: 'Non-coding',
    game1Quiz: [
      {
        id: 1,
        question: 'What is Machine Learning?',
        options: [
          { key: 'A', text: 'Repairing computer hardware' },
          { key: 'B', text: 'Teaching computers to learn patterns from data' },
          { key: 'C', text: 'Creating only website designs' },
          { key: 'D', text: 'Typing instructions manually' }
        ],
        correct: 1,
        explanation: 'Machine Learning is the science of training algorithms to discover recurring patterns from data and examples rather than manually hardcoding every rule.',
        hint: 'Think about enabling computers to automatically detect patterns from data.'
      },
      {
        id: 2,
        question: 'What does an ML model learn from?',
        options: [
          { key: 'A', text: 'Monitor brightness' },
          { key: 'B', text: 'Keyboard buttons' },
          { key: 'C', text: 'Random guesses only' },
          { key: 'D', text: 'Data and examples' }
        ],
        correct: 3,
        explanation: 'Machine Learning models learn underlying statistical structures by iteratively analyzing historical data, features, and labeled examples.',
        hint: 'Models require data and examples to learn relationships.'
      },
      {
        id: 3,
        question: 'Which is a Machine Learning example?',
        options: [
          { key: 'A', text: 'Email spam detection' },
          { key: 'B', text: 'A fixed light switch' },
          { key: 'C', text: 'A chair' },
          { key: 'D', text: 'A printed notebook' }
        ],
        correct: 0,
        explanation: 'Spam filters continuously classify emails into spam vs inbox based on learned characteristics from past classified messages.',
        hint: 'Look for an intelligent software system that classifies incoming messages.'
      },
      {
        id: 4,
        question: 'What is a prediction in Machine Learning?',
        options: [
          { key: 'A', text: 'A computer shutdown' },
          { key: 'B', text: 'A file deletion' },
          { key: 'C', text: 'A guess based on learned patterns' },
          { key: 'D', text: 'A keyboard shortcut' }
        ],
        correct: 2,
        explanation: 'An ML prediction is an output produced by a trained model estimating unknown values or classifications based on patterns learned during training.',
        hint: 'An informed inference or guess derived from learned patterns.'
      },
      {
        id: 5,
        question: 'What is the main goal of ML engineering?',
        options: [
          { key: 'A', text: 'Only collect random files' },
          { key: 'B', text: 'Build and deploy useful ML systems' },
          { key: 'C', text: 'Replace every computer' },
          { key: 'D', text: 'Avoid testing models' }
        ],
        correct: 1,
        explanation: 'Machine Learning Engineering bridges data science and software engineering to construct, test, deploy, and maintain reliable ML applications in production.',
        hint: 'Focus on building and deploying scalable, reliable ML systems for end users.'
      }
    ],
    game2Puzzles: [
      {
        id: 1,
        title: '🤖 Challenge 1: ML or Traditional?',
        prompt: 'Which task commonly uses Machine Learning?',
        tokens: [
          'A basic fixed calculator operation',
          'Predicting house prices from past data',
          'Switching on a manual lamp',
          'Opening a physical door'
        ],
        shuffled: [
          'A basic fixed calculator operation',
          'Predicting house prices from past data',
          'Switching on a manual lamp',
          'Opening a physical door'
        ],
        expected: ['Predicting house prices from past data'],
        hint: 'Predicting real estate prices requires analyzing historical property sales, location, and features.'
      },
      {
        id: 2,
        title: '🎵 Challenge 2: Music Recommendation',
        prompt: 'A music app learns your preferences and recommends songs. Is this ML?',
        tokens: [
          'No',
          'Yes'
        ],
        shuffled: [
          'No',
          'Yes'
        ],
        expected: ['Yes'],
        hint: 'Personalized recommendations use algorithms trained on past streaming history to predict songs you will enjoy.'
      },
      {
        id: 3,
        title: '📷 Challenge 3: Computer Vision',
        prompt: 'Which task can use image classification?',
        tokens: [
          'Charging a laptop',
          'Cleaning a keyboard',
          'Identifying cats in photos',
          'Printing paper'
        ],
        shuffled: [
          'Charging a laptop',
          'Cleaning a keyboard',
          'Identifying cats in photos',
          'Printing paper'
        ],
        expected: ['Identifying cats in photos'],
        hint: 'Recognizing visual subjects like cats in photos is a core Computer Vision image classification task.'
      },
      {
        id: 4,
        title: '⚙️ Challenge 4: ML vs Deterministic Logic',
        prompt: 'Does every computer program need Machine Learning?',
        tokens: [
          'Yes, every program needs ML',
          'No, many programs use fixed rules'
        ],
        shuffled: [
          'Yes, every program needs ML',
          'No, many programs use fixed rules'
        ],
        expected: ['No, many programs use fixed rules'],
        hint: 'Calculators, operating systems, and file explorers run efficiently using deterministic rule-based algorithms.'
      },
      {
        id: 5,
        title: '🛡️ Challenge 5: Anomaly Detection',
        prompt: 'Which task is a good example of anomaly detection?',
        tokens: [
          'Changing wallpaper manually',
          'Finding unusual bank transactions',
          'Renaming a folder',
          'Turning up volume'
        ],
        shuffled: [
          'Changing wallpaper manually',
          'Finding unusual bank transactions',
          'Renaming a folder',
          'Turning up volume'
        ],
        expected: ['Finding unusual bank transactions'],
        hint: 'Anomaly detection spots rare, suspicious spending patterns that deviate sharply from regular user behavior.'
      }
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: 'Before deploying a model',
        meaning: 'Test and evaluate the model',
        cls: 'c1'
      },
      {
        id: 2,
        snippet: 'Training data',
        meaning: 'Examples used to help a model learn',
        cls: 'c2'
      },
      {
        id: 3,
        snippet: 'Model monitoring',
        meaning: 'Detect performance changes and problems',
        cls: 'c3'
      },
      {
        id: 4,
        snippet: 'Model deployment',
        meaning: 'Make model available for use in systems',
        cls: 'c4'
      },
      {
        id: 5,
        snippet: 'Essential ML quality',
        meaning: 'Reliability and appropriate performance',
        cls: 'c5'
      }
    ],
    game4Missions: [
      {
        id: 1,
        title: '🛒 Mission 1: E-Commerce Product Recommendations',
        scenario: 'An online shop wants to recommend products based on customer behaviour.',
        prompt: 'What could help the online store build personalized recommendations?',
        expectedResponse: 'A recommendation model trained on relevant past purchases, browsing clicks, and cart interactions.'
      },
      {
        id: 2,
        title: '🏥 Mission 2: Medical Imaging Diagnostics',
        scenario: 'A hospital wants help identifying possible disease patterns from medical images.',
        prompt: 'What is a responsible and ethical first step for the engineering team?',
        expectedResponse: 'Use suitable, ethically authorised data and carefully evaluate the model on holdout test sets with clinical oversight.'
      },
      {
        id: 3,
        title: '💳 Mission 3: Financial Fraud Detection',
        scenario: 'A bank wants to flag potentially fraudulent transactions in real time.',
        prompt: 'How does a machine learning classification model assist the fraud investigation team?',
        expectedResponse: 'It identifies unusual transactional velocity and anomalous patterns for human investigator review.'
      },
      {
        id: 4,
        title: '📉 Mission 4: Production Model Drift Resolution',
        scenario: 'A model performs well during testing in staging but performs poorly after launch in production.',
        prompt: 'What should the engineering team do immediately to address this disparity?',
        expectedResponse: 'Monitor production inferences, investigate distribution drift between training vs live data, and retrain the model.'
      },
      {
        id: 5,
        title: '🚚 Mission 5: ETA Logistics Delivery Predictor',
        scenario: 'A delivery logistics team wants to build an AI model that predicts package arrival times accurately.',
        prompt: 'What is a sensible engineering approach to train this forecasting model?',
        expectedResponse: 'Gather relevant historical delivery timestamps, route conditions, and weather factors, then evaluate prediction error metrics.'
      }
    ],
    mockInterview: [
      {
        id: 1,
        question: 'What is Machine Learning Engineering?',
        sampleAnswer: 'Machine Learning Engineering is the branch of engineering focused on designing, building, validating, deploying, and maintaining machine learning models within reliable, scalable production systems.'
      },
      {
        id: 2,
        question: 'How is Machine Learning different from traditional programming?',
        sampleAnswer: 'In traditional programming, human software developers handcraft explicit rules and logic that operate on input data to produce outputs. In Machine Learning, algorithms infer the rules automatically by examining large sets of inputs and corresponding outcomes.'
      },
      {
        id: 3,
        question: 'Give one real-world example of Machine Learning.',
        sampleAnswer: 'Email spam detection is an everyday example: algorithms analyze past emails to identify recurring characteristics of spam, automatically routing deceptive messages away from the user’s primary inbox.'
      }
    ]
  },
  '1.2': {
    tabId: 3,
    tabName: 'Machine Learning Engineering',
    moduleId: 1,
    moduleName: 'Introduction to Machine Learning Engineering',
    topicKey: '1.2',
    id: 2,
    topicTitle: 'Data Science vs. ML Engineering',
    mode: 'Non-coding',
    game1Quiz: [
      {
        id: 1,
        question: 'What is a common responsibility of a data scientist?',
        options: [
          { key: 'A', text: 'Repairing computer hardware' },
          { key: 'B', text: 'Analyzing data to discover insights' },
          { key: 'C', text: 'Installing office furniture' },
          { key: 'D', text: 'Manufacturing keyboards' }
        ],
        correct: 1,
        explanation: 'Data scientists explore datasets, run statistical tests, and uncover actionable insights to answer key business hypotheses.',
        hint: 'Focus on examining and interpreting data to find business insights.'
      },
      {
        id: 2,
        question: 'What is a common responsibility of an ML engineer?',
        options: [
          { key: 'A', text: 'Only creating presentation slides' },
          { key: 'B', text: 'Building and deploying ML systems' },
          { key: 'C', text: 'Repairing printers' },
          { key: 'D', text: 'Manually entering every prediction' }
        ],
        correct: 1,
        explanation: 'ML engineers turn prototype models into scalable, production-ready systems deployed via REST APIs, microservices, or edge devices.',
        hint: 'Look for designing, deploying, and maintaining production ML systems.'
      },
      {
        id: 3,
        question: 'A company wants to understand why sales decreased last month. Who may help investigate the data?',
        options: [
          { key: 'A', text: 'A data scientist or data analyst' },
          { key: 'B', text: 'Only a hardware technician' },
          { key: 'C', text: 'A graphic designer in every case' },
          { key: 'D', text: 'A delivery driver in every case' }
        ],
        correct: 0,
        explanation: 'Investigating historical sales decline is an analytical diagnostic task suited for data scientists and analysts.',
        hint: 'Diagnostic business data analysis is led by data analysts and scientists.'
      },
      {
        id: 4,
        question: 'A trained model needs to serve predictions reliably in a mobile application. Which role commonly focuses on this?',
        options: [
          { key: 'A', text: 'Photographer' },
          { key: 'B', text: 'Receptionist' },
          { key: 'C', text: 'ML engineer' },
          { key: 'D', text: 'Copywriter' }
        ],
        correct: 2,
        explanation: 'Deploying models to serve live inference latency and uptime requirements in mobile apps is a core ML engineering responsibility.',
        hint: 'Engineering reliable prediction serving and APIs is done by an ML engineer.'
      },
      {
        id: 5,
        question: 'Do data scientists and ML engineers have exactly the same responsibilities in every company?',
        options: [
          { key: 'A', text: 'Yes, always' },
          { key: 'B', text: 'No, responsibilities can overlap and vary by team' },
          { key: 'C', text: 'Yes, there is no difference' },
          { key: 'D', text: 'Neither works with data' }
        ],
        correct: 1,
        explanation: 'Job boundaries vary widely: at startups roles often overlap heavily, while enterprise teams maintain specialized divisions.',
        hint: 'Roles often overlap in practical business environments.'
      }
    ],
    game2Puzzles: [
      {
        id: 1,
        title: '🔍 Challenge 1: Explaining Customer Trends',
        prompt: 'The team needs to explore customer data and explain purchasing trends. Which role is a strong fit?',
        tokens: [
          'ML engineer only',
          'Network technician',
          'Data scientist',
          'Hardware designer'
        ],
        shuffled: [
          'ML engineer only',
          'Network technician',
          'Data scientist',
          'Hardware designer'
        ],
        expected: ['Data scientist'],
        hint: 'Exploratory data analysis (EDA) and trend explanation are signature data science strengths.'
      },
      {
        id: 2,
        title: '⚡ Challenge 2: Model Prediction API',
        prompt: 'A model is ready, but the company needs an API to deliver predictions to its application. Who commonly helps?',
        tokens: [
          'Video editor',
          'ML engineer',
          'Accountant only',
          'Photographer'
        ],
        shuffled: [
          'Video editor',
          'ML engineer',
          'Accountant only',
          'Photographer'
        ],
        expected: ['ML engineer'],
        hint: 'Wrapping models into high-performance REST/gRPC endpoints is standard ML engineering.'
      },
      {
        id: 3,
        title: '📊 Challenge 3: Campaign Impact Testing',
        prompt: 'A business wants to test whether a new marketing campaign improved sales. Which activity is central?',
        tokens: [
          'Replacing all computers',
          'Statistical analysis and experimentation',
          'Designing a new keyboard',
          'Changing server wallpaper'
        ],
        shuffled: [
          'Replacing all computers',
          'Statistical analysis and experimentation',
          'Designing a new keyboard',
          'Changing server wallpaper'
        ],
        expected: ['Statistical analysis and experimentation'],
        hint: 'A/B testing and statistical significance testing measure marketing lift.'
      },
      {
        id: 4,
        title: '📉 Challenge 4: Post-Launch Model Drift',
        prompt: "The model's accuracy has fallen after launch. Who may investigate deployment and monitoring issues?",
        tokens: [
          'Only the graphic designer',
          'ML engineer, working with the data team as needed',
          'Only the receptionist',
          'No one should investigate'
        ],
        shuffled: [
          'Only the graphic designer',
          'ML engineer, working with the data team as needed',
          'Only the receptionist',
          'No one should investigate'
        ],
        expected: ['ML engineer, working with the data team as needed'],
        hint: 'Production performance degradation triggers MLOps telemetry investigation.'
      },
      {
        id: 5,
        title: '🤝 Challenge 5: Integrated Delivery',
        prompt: 'A team needs both business insights and a reliable prediction service. What is often the best approach?',
        tokens: [
          'Let one team work without sharing information',
          'Skip evaluation',
          'Collaborate across data science and ML engineering',
          'Deploy without testing'
        ],
        shuffled: [
          'Let one team work without sharing information',
          'Skip evaluation',
          'Collaborate across data science and ML engineering',
          'Deploy without testing'
        ],
        expected: ['Collaborate across data science and ML engineering'],
        hint: 'Cross-functional synergy between DS analytics and MLE infrastructure yields the best results.'
      }
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: 'Exploring customer behavior in dataset',
        meaning: 'Data science',
        cls: 'c1'
      },
      {
        id: 2,
        snippet: 'Creating low-latency model prediction service',
        meaning: 'ML engineering',
        cls: 'c2'
      },
      {
        id: 3,
        snippet: 'Investigating customer churn factors',
        meaning: 'Data science',
        cls: 'c3'
      },
      {
        id: 4,
        snippet: 'Monitoring model for latency & failure drift',
        meaning: 'ML engineering',
        cls: 'c4'
      },
      {
        id: 5,
        snippet: 'Communicating business insights to stakeholders',
        meaning: 'Data science',
        cls: 'c5'
      }
    ],
    game4Missions: [
      {
        id: 1,
        title: '🛍️ Mission 1: Churn Diagnostic',
        scenario: 'A retailer wants to understand why customers stop buying.',
        prompt: 'What is a useful and evidence-based first step?',
        expectedResponse: 'Analyse customer purchase records, frequency declines, and customer feedback to diagnose root causes.'
      },
      {
        id: 2,
        title: '🎯 Mission 2: Churn Propensity Scoring',
        scenario: 'The retailer then wants to score which customers may be at risk of leaving.',
        prompt: 'What should the team build to identify at-risk customers in advance?',
        expectedResponse: 'A predictive customer churn classification model trained on behavioral telemetry and order history.'
      },
      {
        id: 3,
        title: '🔌 Mission 3: Production API Integration',
        scenario: "The model needs to return predictions to the retailer's web and mobile applications.",
        prompt: 'What engineering work is needed to enable real-time predictions?',
        expectedResponse: 'Integrate and deploy the model as part of a reliable, high-availability microservice with authentication.'
      },
      {
        id: 4,
        title: '📡 Mission 4: Continuous Telemetry & Drift Audit',
        scenario: 'The team wants to know whether its predictions remain accurate and useful over time.',
        prompt: 'What strategy ensures the model retains its predictive power in production?',
        expectedResponse: 'Set up real-time telemetry dashboards to monitor accuracy, feature drift, inference latency, and error rates.'
      },
      {
        id: 5,
        title: '🤝 Mission 5: DS & MLE Collaboration',
        scenario: 'Building an enterprise AI capability requires both scientific exploration and robust software architecture.',
        prompt: 'Which statement best describes the operational relationship between data scientists and ML engineers?',
        expectedResponse: 'They collaborate harmoniously across lifecycle stages: DS develops algorithms, and MLE scales and deploys them.'
      }
    ],
    mockInterview: [
      {
        id: 1,
        question: 'What is the difference between Data Science and ML Engineering?',
        sampleAnswer: 'Data Science primarily focuses on exploring data, extracting actionable insights, formulating hypotheses, and experimenting with models to answer business questions. ML Engineering focuses on operationalizing, deploying, scaling, and maintaining these machine learning models in robust production software.'
      },
      {
        id: 2,
        question: 'Can a data scientist also build machine learning models?',
        sampleAnswer: 'Yes, data scientists frequently build, train, and validate machine learning prototypes during research and experimentation. In many organizations, their prototypes are then handed off to or co-developed with ML engineers for production deployment.'
      },
      {
        id: 3,
        question: 'Why do ML engineers monitor deployed models?',
        sampleAnswer: 'Deployed models face concept drift, data drift, and latency spikes over time as real-world consumer behavior evolves. Continuous monitoring allows engineers to detect performance degradation early and trigger automated retraining pipelines.'
      }
    ]
  },
  '1.3': {
    tabId: 3,
    tabName: 'Machine Learning Engineering',
    moduleId: 1,
    moduleName: 'Introduction to Machine Learning Engineering',
    topicKey: '1.3',
    id: 3,
    topicTitle: 'ML Product Lifecycle',
    mode: 'Non-coding',
    game1Quiz: [
      {
        id: 1,
        question: 'What is usually an early step in an ML product project?',
        options: [
          { key: 'A', text: 'Choose a random model without a goal' },
          { key: 'B', text: 'Define the problem and its goals' },
          { key: 'C', text: 'Deploy before understanding the problem' },
          { key: 'D', text: 'Delete the requirements' }
        ],
        correct: 1,
        explanation: 'Before writing code or training models, engineers and stakeholders must clearly define the business problem, target metric, and product goals.',
        hint: 'Start by articulating the core business problem and objectives.'
      },
      {
        id: 2,
        question: 'Why does an ML project need data collection?',
        options: [
          { key: 'A', text: 'To fill storage with unrelated files' },
          { key: 'B', text: 'To avoid defining a problem' },
          { key: 'C', text: 'To obtain relevant examples for analysis and modelling' },
          { key: 'D', text: 'To guarantee perfect predictions' }
        ],
        correct: 2,
        explanation: 'Machine learning models rely on representative data samples and domain examples to discover accurate relationships and trends.',
        hint: 'Data provides the essential training examples for mathematical modeling.'
      },
      {
        id: 3,
        question: 'What happens during model training?',
        options: [
          { key: 'A', text: 'The model learns patterns from training data' },
          { key: 'B', text: 'The product is automatically guaranteed to succeed' },
          { key: 'C', text: 'The team stops measuring performance' },
          { key: 'D', text: 'The computer is physically repaired' }
        ],
        correct: 0,
        explanation: 'During training, model weights and parameters iteratively adjust to recognize predictive relationships in the dataset.',
        hint: 'Algorithms optimize mathematical patterns using training data.'
      },
      {
        id: 4,
        question: 'Why evaluate a model before deployment?',
        options: [
          { key: 'A', text: 'To avoid checking results' },
          { key: 'B', text: 'To guarantee it will never make mistakes' },
          { key: 'C', text: 'To remove every data record' },
          { key: 'D', text: 'To assess how well it performs on suitable test data' }
        ],
        correct: 3,
        explanation: 'Validation and testing on held-out data prove whether the model generalizes to new real-world inputs without overfitting.',
        hint: 'Evaluation verifies model accuracy on unseen test data.'
      },
      {
        id: 5,
        question: 'What is model monitoring?',
        options: [
          { key: 'A', text: 'Choosing a computer wallpaper' },
          { key: 'B', text: "Checking a deployed model's behaviour and performance over time" },
          { key: 'C', text: 'Deleting application logs without review' },
          { key: 'D', text: 'Training once and never checking again' }
        ],
        correct: 1,
        explanation: 'Monitoring tracks live inference speed, error distributions, data drift, and accuracy to keep production AI reliable.',
        hint: 'Continuously tracking operational health and accuracy in production.'
      }
    ],
    game2Puzzles: [
      {
        id: 1,
        title: '🔄 Challenge: Put the ML Process in Order',
        prompt: 'Arrange these stages in a sensible order for a typical ML project:',
        tokens: [
          'Deploy the model',
          'Define the problem',
          'Monitor and improve',
          'Train the model',
          'Collect and prepare data',
          'Evaluate the model'
        ],
        shuffled: [
          'Deploy the model',
          'Monitor and improve',
          'Train the model',
          'Define the problem',
          'Evaluate the model',
          'Collect and prepare data'
        ],
        expected: [
          'Define the problem',
          'Collect and prepare data',
          'Train the model',
          'Evaluate the model',
          'Deploy the model',
          'Monitor and improve'
        ],
        hint: 'Define problem ➔ Prepare data ➔ Train model ➔ Evaluate ➔ Deploy ➔ Monitor & improve.'
      }
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: 'Agreeing on what the AI product should predict',
        meaning: 'Problem definition',
        cls: 'c1'
      },
      {
        id: 2,
        snippet: 'Removing duplicates and handling missing values',
        meaning: 'Data preparation',
        cls: 'c2'
      },
      {
        id: 3,
        snippet: 'Using training examples to fit model parameters',
        meaning: 'Training',
        cls: 'c3'
      },
      {
        id: 4,
        snippet: 'Measuring precision, recall & error on test data',
        meaning: 'Evaluation',
        cls: 'c4'
      },
      {
        id: 5,
        snippet: 'Making model predictions available to applications',
        meaning: 'Deployment',
        cls: 'c5'
      }
    ],
    game4Missions: [
      {
        id: 1,
        title: '🎯 Mission 1: Defining the North Star Metric',
        scenario: 'Your team has a business problem but no agreed success metric.',
        prompt: 'What must happen first before writing code or gathering data?',
        expectedResponse: 'Define the core objective, establish target KPIs (e.g. latency, precision), and determine how business ROI will be measured.'
      },
      {
        id: 2,
        title: '🧹 Mission 2: Data Cleaning & Deduplication',
        scenario: 'Your dataset contains many duplicate records and unhandled nulls.',
        prompt: 'What is a sensible engineering action to protect model quality?',
        expectedResponse: 'Inspect, deduplicate, normalize features, and impute or drop missing values before training begins.'
      },
      {
        id: 3,
        title: '🧪 Mission 3: Test Set Failure Investigation',
        scenario: 'A model performs poorly on held-out test data during validation.',
        prompt: 'What should the engineering team do to rectify the poor test performance?',
        expectedResponse: 'Investigate feature engineering, model hyper-parameters, data distribution skew, and potential label leakage.'
      },
      {
        id: 4,
        title: '⚡ Mission 4: Production Latency Spike Troubleshooting',
        scenario: 'A deployed model starts responding very slowly under high request concurrency.',
        prompt: 'What telemetry and infrastructure components should the team inspect?',
        expectedResponse: 'Inspect API request latency, container CPU/RAM resource limits, database query delays, and batching configurations.'
      },
      {
        id: 5,
        title: '🔄 Mission 5: Handling Customer Behavior Drift',
        scenario: 'Customer behaviour shifts seasonally and deployed model accuracy declines.',
        prompt: 'What is a sensible MLOps response to restore high performance?',
        expectedResponse: 'Audit live data drift, trigger an automated retraining pipeline on recent data, and validate before rolling deployment.'
      }
    ],
    mockInterview: [
      {
        id: 1,
        question: 'What are the main stages of the ML product lifecycle?',
        sampleAnswer: 'The ML product lifecycle consists of 6 primary stages: 1) Problem definition and business goal alignment, 2) Data collection and preparation, 3) Model training and tuning, 4) Rigorous evaluation on validation/test sets, 5) Production deployment (APIs/microservices), and 6) Continuous monitoring for data drift and automated retraining.'
      },
      {
        id: 2,
        question: 'Why is model evaluation important before deployment?',
        sampleAnswer: 'Model evaluation on held-out test sets ensures the model generalizes well to unseen real-world data and satisfies baseline accuracy, fairness, and latency requirements, preventing costly business errors or customer-facing failures.'
      },
      {
        id: 3,
        question: 'What happens after an ML model is deployed?',
        sampleAnswer: 'Post-deployment, ML engineers establish continuous telemetry to monitor inference latency, error rates, data drift, and concept drift. If consumer habits change or model accuracy drops, engineers trigger automated retraining pipelines to restore performance.'
      }
    ]
  }
};

export const TAB3_ML_ENGINEERING_QUESTION_BANK_BY_ID: Record<number, TopicQuestionBank> = {
  1: TAB3_ML_ENGINEERING_QUESTION_BANK['1.1'],
  2: TAB3_ML_ENGINEERING_QUESTION_BANK['1.2'],
  3: TAB3_ML_ENGINEERING_QUESTION_BANK['1.3'],
};
