import { TopicQuestionBank } from './questionBankRegistry';

export const TAB4_AI_ENGINEERING_QUESTION_BANK: Record<string, TopicQuestionBank> = {
  '1.1': {
    tabId: 4,
    tabName: 'AI Engineering',
    moduleId: 1,
    moduleName: 'Introduction to AI Engineering',
    topicKey: '1.1',
    id: 1,
    topicTitle: 'What Is Artificial Intelligence?',
    mode: 'Non-coding',
    game1Quiz: [
      {
        id: 1,
        question: 'Which statement best describes Artificial Intelligence?',
        options: [
          { key: 'A', text: 'Any electronic device that uses electricity' },
          { key: 'B', text: 'Computer systems performing tasks associated with human intelligence' },
          { key: 'C', text: 'A program that only stores files' },
          { key: 'D', text: 'A machine that must look like a human' }
        ],
        correct: 1,
        explanation: 'Artificial Intelligence encompasses computer programs and systems designed to execute cognitive tasks associated with human intelligence—such as understanding speech, recognizing images, and solving complex problems.',
        hint: 'Think about computer systems performing cognitive tasks like reasoning, vision, and language.'
      },
      {
        id: 2,
        question: 'A phone assistant converts spoken requests into words. Which technology is relevant?',
        options: [
          { key: 'A', text: 'Battery manufacturing' },
          { key: 'B', text: 'Screen brightness control' },
          { key: 'C', text: 'Speech and language processing' },
          { key: 'D', text: 'Mechanical printing' }
        ],
        correct: 2,
        explanation: 'Voice assistants rely on Automatic Speech Recognition (ASR) and Natural Language Processing (NLP) to convert auditory sound waves into structured text.',
        hint: 'Look for the field dealing with audio speech and natural language.'
      },
      {
        id: 3,
        question: 'Which are genuine examples of AI applications?',
        options: [
          { key: 'A', text: 'A simple manual light switch' },
          { key: 'B', text: 'Object detection in images, film recommendations & speech-to-text' },
          { key: 'C', text: 'A blank notebook paper' },
          { key: 'D', text: 'A wooden table' }
        ],
        correct: 1,
        explanation: 'Computer vision (object recognition), recommendation algorithms (Netflix/Spotify), and speech recognition (Siri/Alexa) are flagship real-world applications of AI.',
        hint: 'Select the option containing cognitive tasks like vision, recommendation, and speech.'
      },
      {
        id: 4,
        question: 'Every AI system must have a physical robot body.',
        options: [
          { key: 'A', text: 'True' },
          { key: 'B', text: 'False' },
          { key: 'C', text: 'Only when in a factory' },
          { key: 'D', text: 'Only on mobile devices' }
        ],
        correct: 1,
        explanation: 'The vast majority of modern AI systems—such as ChatGPT, search algorithms, spam filters, and fraud detectors—are cloud software services without any physical body.',
        hint: 'AI can exist purely as software algorithms without any mechanical hardware.'
      },
      {
        id: 5,
        question: 'An online shop suggests products based on browsing history. What is it producing?',
        options: [
          { key: 'A', text: 'Personalised recommendations' },
          { key: 'B', text: 'Hardware repairs' },
          { key: 'C', text: 'Guaranteed future outcomes' },
          { key: 'D', text: 'Physical deliveries by itself' }
        ],
        correct: 0,
        explanation: 'E-commerce recommendation engines infer customer purchase intent from browsing history to generate tailored product suggestions.',
        hint: 'Think about tailored product suggestions derived from historical user browsing data.'
      }
    ],
    game2Puzzles: [
      {
        id: 1,
        title: '🤖 Challenge 1: AI vs Machine Learning',
        prompt: 'What is the relationship between AI and Machine Learning?',
        tokens: [
          'AI and Machine Learning always mean exactly the same thing',
          'Machine Learning is one approach within AI',
          'AI is a computer monitor'
        ],
        shuffled: [
          'AI and Machine Learning always mean exactly the same thing',
          'Machine Learning is one approach within AI',
          'AI is a computer monitor'
        ],
        expected: ['Machine Learning is one approach within AI'],
        hint: 'Machine Learning is a subset technique underneath the broad umbrella of Artificial Intelligence.'
      },
      {
        id: 2,
        title: '🖼️ Challenge 2: Labeled Training Data',
        prompt: 'Why are labelled cat and dog images useful for training a classifier?',
        tokens: [
          'They increase monitor resolution',
          'They guarantee every future prediction is correct',
          'They provide examples of the categories to learn'
        ],
        shuffled: [
          'They increase monitor resolution',
          'They guarantee every future prediction is correct',
          'They provide examples of the categories to learn'
        ],
        expected: ['They provide examples of the categories to learn'],
        hint: 'Supervised machine learning algorithms learn feature distinctions by analyzing known ground-truth examples.'
      },
      {
        id: 3,
        title: '📜 Challenge 3: Rule-Based AI Systems',
        prompt: 'A rule-based AI system can use rules explicitly written by a developer without learning them from training data.',
        tokens: [
          'False',
          'True'
        ],
        shuffled: [
          'False',
          'True'
        ],
        expected: ['True'],
        hint: 'Expert systems and heuristic rule engines operate using explicit conditional logic written by engineers.'
      },
      {
        id: 4,
        title: '🏠 Challenge 4: Real Estate Valuation Output',
        prompt: 'A model estimates the selling price of a house. What is the estimated price called?',
        tokens: [
          'A hardware component',
          'The training dataset',
          'A prediction'
        ],
        shuffled: [
          'A hardware component',
          'The training dataset',
          'A prediction'
        ],
        expected: ['A prediction'],
        hint: 'The numerical output inferred by a trained regression model is a prediction.'
      },
      {
        id: 5,
        title: '✅ Challenge 5: Assessing AI Systems Before Use',
        prompt: 'Which practices help responsibly assess an AI system before production use?',
        tokens: [
          'Assume it is correct because it uses AI',
          'Test on unseen data, check errors & evaluate suitability',
          'Never evaluate performance metrics'
        ],
        shuffled: [
          'Assume it is correct because it uses AI',
          'Test on unseen data, check errors & evaluate suitability',
          'Never evaluate performance metrics'
        ],
        expected: ['Test on unseen data, check errors & evaluate suitability'],
        hint: 'Responsible AI engineers validate performance on held-out test data and verify real-world fitness.'
      }
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: 'Confident AI assistant answer',
        meaning: 'Verify using reliable evidence',
        cls: 'c1'
      },
      {
        id: 2,
        snippet: 'Hiring model disparity',
        meaning: 'Investigate and evaluate fairness',
        cls: 'c2'
      },
      {
        id: 3,
        snippet: 'Identifying objects in photos',
        meaning: 'Computer vision',
        cls: 'c3'
      },
      {
        id: 4,
        snippet: 'Model trained on big dataset',
        meaning: 'Not guaranteed to be 100% correct',
        cls: 'c4'
      },
      {
        id: 5,
        snippet: 'Protecting personal data',
        meaning: 'Responsible AI practice',
        cls: 'c5'
      }
    ],
    game4Missions: [
      {
        id: 1,
        title: '🎙️ Mission 1: Classroom Audio Transcription',
        scenario: 'A school wants to turn recorded teacher speech into written notes for students.',
        prompt: 'Which core AI engineering capability is required to execute this task?',
        expectedResponse: 'Automatic Speech Recognition (ASR) combined with natural language post-processing to generate accurate text transcripts.'
      },
      {
        id: 2,
        title: '📐 Mission 2: Rule-Based vs Deep Neural Models',
        scenario: 'A stable business task can be solved accurately with a few clear, deterministic rules.',
        prompt: 'What architectural decision should the engineering team prioritize?',
        expectedResponse: 'Assess whether a simpler rule-based solution is sufficient before committing to complex, costly neural network models.'
      },
      {
        id: 3,
        title: '💬 Mission 3: Enterprise Customer Support Chatbot',
        scenario: 'A company is engineering an AI-powered conversational support agent for banking customers.',
        prompt: 'What critical aspects must the engineering team incorporate into the product roadmap?',
        expectedResponse: 'Curate expected customer FAQs, design automated evaluation rubrics, implement guardrails for sensitive data, and provide human escalation.'
      },
      {
        id: 4,
        title: '🛑 Mission 4: Autonomous Vision Perception',
        scenario: 'An autonomous navigation system processes live video feeds to identify street objects.',
        prompt: 'What output should the computer vision detector generate when analyzing a street sign?',
        expectedResponse: 'A predicted categorical label (e.g. "Stop Sign") with a bounding box location and confidence probability score.'
      },
      {
        id: 5,
        title: '⚖️ Mission 5: Responsible AI Governance',
        scenario: 'A financial institution plans to use an AI model to pre-screen credit card applications.',
        prompt: 'What governance steps must be verified prior to launching this automated decision model?',
        expectedResponse: 'Rigorously audit validation metrics, test for demographic bias and disparate impact, ensure regulatory compliance, and mandate human-in-the-loop review.'
      }
    ],
    mockInterview: [
      {
        id: 1,
        question: 'What is Artificial Intelligence?',
        sampleAnswer: 'Artificial Intelligence (AI) refers to the computational discipline of creating systems and algorithms that perform tasks traditionally requiring human cognitive intelligence—including visual interpretation, natural language comprehension, logical reasoning, and automated decision-making.'
      },
      {
        id: 2,
        question: 'What is the difference between AI and Machine Learning?',
        sampleAnswer: 'Artificial Intelligence is the broad umbrella discipline focused on building intelligent machines. Machine Learning is a specific, core sub-field of AI where computer models automatically learn patterns, features, and mathematical decision boundaries directly from data examples rather than relying solely on manually programmed static rules.'
      },
      {
        id: 3,
        question: 'Can AI systems make mistakes? Give one reason.',
        sampleAnswer: 'Yes, AI systems frequently make mistakes because they operate probabilistically based on historical statistical correlations rather than absolute facts. Errors can stem from unrepresentative training datasets, data drift in real-world operating environments, or encountering unprecedented edge cases not covered during model training.'
      }
    ]
  },
  '1.2': {
    tabId: 4,
    tabName: 'AI Engineering',
    moduleId: 1,
    moduleName: 'Introduction to AI Engineering',
    topicKey: '1.2',
    id: 2,
    topicTitle: 'What Is AI Engineering?',
    mode: 'Non-coding',
    game1Quiz: [
      {
        id: 1,
        question: 'What is the main focus of AI Engineering?',
        options: [
          { key: 'A', text: 'Making every AI model from scratch' },
          { key: 'B', text: 'Building and operating useful software systems that use AI' },
          { key: 'C', text: 'Writing documents without software' },
          { key: 'D', text: 'Repairing computer hardware only' }
        ],
        correct: 1,
        explanation: 'AI Engineering is the practice of designing, building, integrating, testing, deploying, and maintaining software applications that incorporate artificial intelligence.',
        hint: 'Focus on building and operating production software systems powered by AI.'
      },
      {
        id: 2,
        question: 'Does an AI engineer always need to train a model from scratch?',
        options: [
          { key: 'A', text: 'No, they often use existing models and focus on integration and evaluation' },
          { key: 'B', text: 'Yes, every model must be built from scratch' },
          { key: 'C', text: 'They only design hardware chips' },
          { key: 'D', text: 'They never write code' }
        ],
        correct: 0,
        explanation: 'AI engineers frequently leverage pre-trained foundation models via APIs or fine-tuning, concentrating effort on pipelines, safety, latency, and integration.',
        hint: 'Pre-trained foundation models can be integrated without training from zero.'
      },
      {
        id: 3,
        question: 'In an AI customer-support assistant, what is the role of an AI engineer?',
        options: [
          { key: 'A', text: 'Manually answering every call themselves' },
          { key: 'B', text: 'Connecting a language model to applications and company data with safeguards' },
          { key: 'C', text: 'Deleting previous order records' },
          { key: 'D', text: 'Replacing customer phones' }
        ],
        correct: 1,
        explanation: 'The engineer designs the RAG pipeline connecting the language model to company databases, applies safety filters, and handles human escalation.',
        hint: 'Connecting the model to business data and applications safely.'
      },
      {
        id: 4,
        question: 'What is the first step in the AI engineering lifecycle?',
        options: [
          { key: 'A', text: 'Understand the user problem and requirements' },
          { key: 'B', text: 'Deploy untested code immediately' },
          { key: 'C', text: 'Choose the most expensive GPU server' },
          { key: 'D', text: 'Delete previous logs' }
        ],
        correct: 0,
        explanation: 'Every engineering project starts by identifying what the user needs the system to do and defining measurable success criteria.',
        hint: 'First understand what the user needs the AI system to solve.'
      },
      {
        id: 5,
        question: 'Why are testing and evaluation essential before deployment?',
        options: [
          { key: 'A', text: 'To check output quality, reliability, privacy, and safety' },
          { key: 'B', text: 'To guarantee the model never needs future updates' },
          { key: 'C', text: 'To delete application code' },
          { key: 'D', text: 'To avoid talking to stakeholders' }
        ],
        correct: 0,
        explanation: 'Evaluation verifies output accuracy, adherence to ethical safety guardrails, low latency, and robustness before end users interact with the AI.',
        hint: 'Testing guarantees safety, reliability, and output quality.'
      }
    ],
    game2Puzzles: [
      {
        id: 1,
        title: '🔌 Challenge 1: APIs & Tooling',
        prompt: 'What is an API commonly used for in an AI application?',
        tokens: [
          'Increasing the physical size of a monitor',
          'Allowing software systems to communicate with each other',
          'Replacing all application testing'
        ],
        shuffled: [
          'Increasing the physical size of a monitor',
          'Allowing software systems to communicate with each other',
          'Replacing all application testing'
        ],
        expected: ['Allowing software systems to communicate with each other'],
        hint: 'APIs enable seamless data exchange between user interfaces, backend servers, and AI model providers.'
      },
      {
        id: 2,
        title: '📚 Challenge 2: Context Retrieval',
        prompt: 'Why connect an AI model to an enterprise database or knowledge base?',
        tokens: [
          'To supply grounded company information and eliminate hallucinations',
          'To delete internal documents',
          'To increase server temperature'
        ],
        shuffled: [
          'To supply grounded company information and eliminate hallucinations',
          'To delete internal documents',
          'To increase server temperature'
        ],
        expected: ['To supply grounded company information and eliminate hallucinations'],
        hint: 'Retrieval Augmented Generation (RAG) grounds model answers in verified company documents.'
      },
      {
        id: 3,
        title: '🛡️ Challenge 3: Safety Guardrails',
        prompt: 'What happens when an AI model encounters an ambiguous or out-of-domain query?',
        tokens: [
          'Invent a falsehood with total confidence',
          'Escalate gracefully to human support or trigger a safe fallback',
          'Crash the whole web server'
        ],
        shuffled: [
          'Invent a falsehood with total confidence',
          'Escalate gracefully to human support or trigger a safe fallback',
          'Crash the whole web server'
        ],
        expected: ['Escalate gracefully to human support or trigger a safe fallback'],
        hint: 'Responsible AI systems provide fallback responses or hand off to human agents.'
      },
      {
        id: 4,
        title: '💻 Challenge 4: User Interface Integration',
        prompt: 'Which component enables customers to interact with the underlying AI models?',
        tokens: [
          'A web or mobile user interface (UI)',
          'Power cables only',
          'The CPU fan directly'
        ],
        shuffled: [
          'A web or mobile user interface (UI)',
          'Power cables only',
          'The CPU fan directly'
        ],
        expected: ['A web or mobile user interface (UI)'],
        hint: 'Front-end applications and chat widgets let users send prompts and view AI responses.'
      },
      {
        id: 5,
        title: '📊 Challenge 5: Model Monitoring',
        prompt: 'What does continuous monitoring track in a deployed AI application?',
        tokens: [
          'Monitor wallpaper colors',
          'Latency, error rates, model drift, and user feedback',
          'Nothing once deployed'
        ],
        shuffled: [
          'Monitor wallpaper colors',
          'Latency, error rates, model drift, and user feedback',
          'Nothing once deployed'
        ],
        expected: ['Latency, error rates, model drift, and user feedback'],
        hint: 'Telemetry keeps track of system health, token usage, and answer quality over time.'
      }
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: 'Step 1: Understand problem',
        meaning: 'Identify what the user needs',
        cls: 'c1'
      },
      {
        id: 2,
        snippet: 'Step 2: Choose data & models',
        meaning: 'Select suitable tools & models',
        cls: 'c2'
      },
      {
        id: 3,
        snippet: 'Step 3: Build application',
        meaning: 'Connect model to software & APIs',
        cls: 'c3'
      },
      {
        id: 4,
        snippet: 'Step 4: Test & evaluate',
        meaning: 'Check quality, safety & privacy',
        cls: 'c4'
      },
      {
        id: 5,
        snippet: 'Step 5: Deploy & monitor',
        meaning: 'Release and maintain over time',
        cls: 'c5'
      }
    ],
    game4Missions: [
      {
        id: 1,
        title: '❓ Mission 1: Problem Scoping & User Needs',
        scenario: 'A business asks for an AI assistant but has not explained what customers need it to do.',
        prompt: 'What is the best and most disciplined first step for the AI engineering team?',
        expectedResponse: 'Clarify the exact problem, map primary user journeys, define success KPIs, and identify necessary knowledge sources.'
      },
      {
        id: 2,
        title: '🔗 Mission 2: API & Microservice Integration',
        scenario: 'A customer-support assistant needs to fetch real-time shipping tracking numbers.',
        prompt: 'How should the AI engineer architect this real-time lookup?',
        expectedResponse: 'Configure function calling / tool use so the language model queries internal logistics REST APIs securely.'
      },
      {
        id: 3,
        title: '🛡️ Mission 3: Guardrail & Safety Implementation',
        scenario: 'A customer asks an AI assistant for confidential company executive salaries.',
        prompt: 'What guardrail mechanism should be enforced in the application pipeline?',
        expectedResponse: 'Implement input/output safety filters and role-based access control (RBAC) to redact or politely refuse unauthorized queries.'
      },
      {
        id: 4,
        title: '🧪 Mission 4: Rigorous Pre-Release Evaluation',
        scenario: 'The AI prototype generates plausible-sounding answers, but occasionally invents return policy deadlines.',
        prompt: 'What evaluation technique should be applied to eliminate these hallucinations?',
        expectedResponse: 'Run automated evaluation benchmark suites testing faithfulness, factual consistency, and context grounding against test sets.'
      },
      {
        id: 5,
        title: '🚀 Mission 5: Production Deployment & Observability',
        scenario: 'The assistant is ready for launch to 500,000 retail banking mobile users.',
        prompt: 'What observability strategy ensures uninterrupted high availability?',
        expectedResponse: 'Deploy across auto-scaling cloud clusters with telemetry monitoring P99 latency, cost per query, and automated human escalation.'
      }
    ],
    mockInterview: [
      {
        id: 1,
        question: 'What is AI Engineering?',
        sampleAnswer: 'AI Engineering is the engineering discipline that bridges cutting-edge AI models with enterprise software systems. It focuses on integrating, testing, deploying, securing, and maintaining scalable applications powered by AI rather than just training raw models in isolation.'
      },
      {
        id: 2,
        question: 'Does an AI engineer always need to train a model from scratch?',
        sampleAnswer: 'No, AI engineers frequently leverage pre-trained foundation models (such as GPT-4, Claude, or open-source Hugging Face models) via APIs, fine-tuning, or Retrieval-Augmented Generation (RAG), focusing their efforts on pipeline architecture, latency, cost optimization, and application reliability.'
      },
      {
        id: 3,
        question: 'Why are testing and monitoring important in AI applications?',
        sampleAnswer: 'Testing ensures that outputs adhere to safety, accuracy, and latency benchmarks prior to launch. Production monitoring is vital because real-world user queries and environments continuously evolve, causing hallucinations, latency spikes, or model drift that require rapid detection and intervention.'
      }
    ]
  },
  '1.3': {
    tabId: 4,
    tabName: 'AI Engineering',
    moduleId: 1,
    moduleName: 'Introduction to AI Engineering',
    topicKey: '1.3',
    id: 3,
    topicTitle: 'AI vs Machine Learning vs Deep Learning',
    mode: 'Non-coding',
    game1Quiz: [
      {
        id: 1,
        question: 'Which technology is the broadest field?',
        options: [
          { key: 'A', text: 'Artificial Intelligence' },
          { key: 'B', text: 'Deep Learning' },
          { key: 'C', text: 'Machine Learning' },
          { key: 'D', text: 'Neural Networks only' }
        ],
        correct: 0,
        explanation: 'Artificial Intelligence is the overarching umbrella discipline encompassing any technique that enables computers to mimic human intelligence, including rule-based systems, ML, and DL.',
        hint: 'Look for the overarching field that contains all subfields.'
      },
      {
        id: 2,
        question: 'Which technology uses multi-layer neural networks?',
        options: [
          { key: 'A', text: 'Rule-based calculators' },
          { key: 'B', text: 'Deep Learning' },
          { key: 'C', text: 'Mechanical clocks' },
          { key: 'D', text: 'Manual filing systems' }
        ],
        correct: 1,
        explanation: 'Deep Learning is defined by the use of artificial neural networks with multiple stacked hidden layers capable of learning high-level abstract representations.',
        hint: 'Look for the field characterized by deep multi-layered neural networks.'
      },
      {
        id: 3,
        question: 'What makes Machine Learning different from traditional AI?',
        options: [
          { key: 'A', text: 'It learns patterns from data instead of relying only on hardcoded rules' },
          { key: 'B', text: 'It never uses computers' },
          { key: 'C', text: 'It only works on printers' },
          { key: 'D', text: 'It requires no data at all' }
        ],
        correct: 0,
        explanation: 'Traditional AI often relies on hand-crafted heuristic rules (like expert systems). Machine Learning systems automatically deduce rules from empirical data.',
        hint: 'ML systems deduce relationships automatically from training data.'
      },
      {
        id: 4,
        question: 'Can a system be considered AI without using Machine Learning?',
        options: [
          { key: 'A', text: 'Yes, such as rule-based expert systems or chess algorithms' },
          { key: 'B', text: 'No, AI and ML are strictly identical' },
          { key: 'C', text: 'Only if it has physical wheels' },
          { key: 'D', text: 'Never' }
        ],
        correct: 0,
        explanation: 'Yes! Early chess programs, tax calculators, and expert systems follow explicit deterministic rules written by human developers without learning from training datasets.',
        hint: 'Classic rule-based systems and search algorithms demonstrate AI without ML.'
      },
      {
        id: 5,
        question: 'Which is the correct hierarchical relationship between the three technologies?',
        options: [
          { key: 'A', text: 'Deep Learning is inside ML, which is inside AI' },
          { key: 'B', text: 'AI is inside Deep Learning' },
          { key: 'C', text: 'Machine Learning is broader than AI' },
          { key: 'D', text: 'There is no relationship between them' }
        ],
        correct: 0,
        explanation: 'Deep Learning is a subset of Machine Learning, and Machine Learning is a subset of Artificial Intelligence (DL ⊂ ML ⊂ AI).',
        hint: 'DL is part of ML, and ML is part of AI.'
      }
    ],
    game2Puzzles: [
      {
        id: 1,
        title: '♟️ Challenge 1: Rule-Based Chess Program',
        prompt: 'A program uses manually written rules to play chess. Which statement is most accurate?',
        tokens: [
          'It cannot be AI',
          'It must be Deep Learning',
          'It can be AI without Machine Learning',
          'It must use a neural network'
        ],
        shuffled: [
          'It cannot be AI',
          'It must be Deep Learning',
          'It can be AI without Machine Learning',
          'It must use a neural network'
        ],
        expected: ['It can be AI without Machine Learning'],
        hint: 'Heuristic tree search and rule-based logic demonstrate artificial intelligence without learning from data.'
      },
      {
        id: 2,
        title: '🏡 Challenge 2: Tabular House Price Estimation',
        prompt: 'A model learns from historical house data (size, location) to predict prices. Which category does this fit best?',
        tokens: [
          'Manual rule writing only',
          'Machine Learning',
          'Deep Learning only',
          'Battery technology'
        ],
        shuffled: [
          'Manual rule writing only',
          'Machine Learning',
          'Deep Learning only',
          'Battery technology'
        ],
        expected: ['Machine Learning'],
        hint: 'Tabular regression models (e.g. Linear Regression, Random Forests) are standard Machine Learning.'
      },
      {
        id: 3,
        title: '🧬 Challenge 3: Medical Image Feature Learning',
        prompt: 'A convolutional neural network with 50 layers classifies tissue abnormalities in biopsy scans. What is this?',
        tokens: [
          'Spreadsheet formula',
          'Simple rule-based lookup',
          'Deep Learning',
          'Word processor'
        ],
        shuffled: [
          'Spreadsheet formula',
          'Simple rule-based lookup',
          'Deep Learning',
          'Word processor'
        ],
        expected: ['Deep Learning'],
        hint: 'Complex visual perception with multi-layer neural architectures is Deep Learning.'
      },
      {
        id: 4,
        title: '🚨 Challenge 4: Simple Safety Thresholds',
        prompt: 'A lift alarm activates whenever a sensor reading exceeds a fixed safety threshold. Which approach is sufficient?',
        tokens: [
          'Deep Learning in every case',
          'A clearly defined rule-based system',
          'A model trained on millions of pictures',
          'No software logic at all'
        ],
        shuffled: [
          'Deep Learning in every case',
          'A clearly defined rule-based system',
          'A model trained on millions of pictures',
          'No software logic at all'
        ],
        expected: ['A clearly defined rule-based system'],
        hint: 'Fixed deterministic limits do not require neural networks or empirical training.'
      },
      {
        id: 5,
        title: '📱 Challenge 5: Biometric Face Unlock',
        prompt: 'Face unlock on modern smartphones maps facial landmarks with neural networks. What technology is this?',
        tokens: [
          'Hardware printing only',
          'Deep Learning (and Machine Learning & AI)',
          'Pure manual spreadsheet',
          'Battery management only'
        ],
        shuffled: [
          'Hardware printing only',
          'Deep Learning (and Machine Learning & AI)',
          'Pure manual spreadsheet',
          'Battery management only'
        ],
        expected: ['Deep Learning (and Machine Learning & AI)'],
        hint: 'Biometric facial embedding uses deep neural vision networks, which sit inside ML and AI.'
      }
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: 'Artificial Intelligence (AI)',
        meaning: 'Broad field of intelligent behaviour',
        cls: 'c1'
      },
      {
        id: 2,
        snippet: 'Machine Learning (ML)',
        meaning: 'Learning patterns from training data',
        cls: 'c2'
      },
      {
        id: 3,
        snippet: 'Deep Learning (DL)',
        meaning: 'Multi-layer neural networks',
        cls: 'c3'
      },
      {
        id: 4,
        snippet: 'Rule-based chess program',
        meaning: 'AI without Machine Learning',
        cls: 'c4'
      },
      {
        id: 5,
        snippet: 'Threshold lift alarm',
        meaning: 'Fixed rule-based system sufficient',
        cls: 'c5'
      }
    ],
    game4Missions: [
      {
        id: 1,
        title: '🎯 Mission 1: Choosing Between Rules and ML',
        scenario: 'A company wants to apply discounts: "If cart > ₹1000, apply 10% off".',
        prompt: 'Which technical approach should the AI engineer recommend for this business rule?',
        expectedResponse: 'A simple deterministic if-else rule is 100% sufficient; training a machine learning model would add unnecessary complexity and cost.'
      },
      {
        id: 2,
        title: '📊 Mission 2: Tabular Customer Churn Prediction',
        scenario: 'A telecommunications firm wants to predict which subscribers will cancel next month based on billing logs.',
        prompt: 'Which paradigm is optimal for structured tabular data?',
        expectedResponse: 'Classical Machine Learning (such as XGBoost, LightGBM, or Logistic Regression) trained on historical customer tabular features.'
      },
      {
        id: 3,
        title: '📷 Mission 3: Autonomous Vehicle Object Recognition',
        scenario: 'An autonomous driving team needs real-time segmentation of pedestrians, vehicles, and lanes in 4K camera feeds.',
        prompt: 'Why is Deep Learning mandatory for this real-time perception requirement?',
        expectedResponse: 'Deep convolutional and transformer neural networks can automatically learn spatial hierarchies from raw pixel tensors where hand-crafted rules fail.'
      },
      {
        id: 4,
        title: '⚡ Mission 4: Compute Cost & Latency Trade-Offs',
        scenario: 'A team considers using an expensive 70B parameter LLM to extract dates from standard invoices.',
        prompt: 'What engineering trade-off should the team evaluate?',
        expectedResponse: 'Evaluate whether regex or lightweight named-entity models (NER) can achieve 99% accuracy at a fraction of the inference latency and cloud compute bill.'
      },
      {
        id: 5,
        title: '🧩 Mission 5: Hybrid AI Architecture Design',
        scenario: 'An enterprise healthcare assistant must combine clinical expert guidelines with semantic document search.',
        prompt: 'How should the AI engineer architect this hybrid system?',
        expectedResponse: 'Build a hybrid architecture: combine deterministic rule-based medical guardrails with deep learning embeddings and vector search (RAG).'
      }
    ],
    mockInterview: [
      {
        id: 1,
        question: 'What is the difference between AI, Machine Learning, and Deep Learning?',
        sampleAnswer: 'AI is the broad overarching field of creating intelligent computer systems. Machine Learning is a subset of AI where algorithms learn predictive patterns directly from historical data. Deep Learning is a specialized branch of Machine Learning that uses multi-layered artificial neural networks to automatically discover intricate representations from complex, unstructured data like images, audio, and text.'
      },
      {
        id: 2,
        question: 'Can an AI system work without Machine Learning?',
        sampleAnswer: 'Yes, early and classical AI systems—such as expert systems, heuristic search algorithms (like A* in chess programs), and rule engines—operate on explicitly programmed logic and decision trees without learning from empirical datasets.'
      },
      {
        id: 3,
        question: 'When might Deep Learning be useful?',
        sampleAnswer: 'Deep Learning is most effective when dealing with vast volumes of high-dimensional, unstructured data (such as computer vision, speech recognition, and natural language processing) where manual feature engineering is infeasible and multi-layer neural representations excel.'
      }
    ]
  }
};

export const TAB4_AI_ENGINEERING_QUESTION_BANK_BY_ID: Record<number, TopicQuestionBank> = {
  1: TAB4_AI_ENGINEERING_QUESTION_BANK['1.1'],
  2: TAB4_AI_ENGINEERING_QUESTION_BANK['1.2'],
  3: TAB4_AI_ENGINEERING_QUESTION_BANK['1.3'],
};
