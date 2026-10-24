// ═══════════════════════════════════════════════════════════════════════════════
// TAB 1: DATA ANALYTICS FOUNDATIONS — 26 TOPICS QUESTION BANK
// 100% Faithful to Future IT Industry Master Syllabus
// Randomly Distributed Quiz Answers (A, B, C, D) & Authentic Real-Life Missions
// ═══════════════════════════════════════════════════════════════════════════════

import { TopicQuestionBank } from './questionBankRegistry';

export const TAB1_QUESTION_BANK: Record<string, TopicQuestionBank> = {
  '1.1': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 1,
  "moduleName": "Understanding Data and Analytics",
  "topicKey": "1.1",
  "id": 1,
  "topicTitle": "What Is Data?",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of What Is Data??",
      "options": [
        {
          "key": "A",
          "text": "To replace all human decisions"
        },
        {
          "key": "B",
          "text": "To perform or understand What Is Data?"
        },
        {
          "key": "C",
          "text": "To make every result correct automatically"
        },
        {
          "key": "D",
          "text": "To skip understanding the problem"
        }
      ],
      "correct": 1,
      "explanation": "The primary objective of learning What Is Data? is to perform and understand its principles within business analytics.",
      "hint": "Think about what What Is Data? accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on What Is Data??",
      "options": [
        {
          "key": "A",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "B",
          "text": "Ignore the task requirements"
        },
        {
          "key": "C",
          "text": "Assume every result is correct"
        },
        {
          "key": "D",
          "text": "Apply What Is Data? to a relevant example"
        }
      ],
      "correct": 3,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding What Is Data?.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying What Is Data??",
      "options": [
        {
          "key": "A",
          "text": "Guess without reading"
        },
        {
          "key": "B",
          "text": "Skip checking the result"
        },
        {
          "key": "C",
          "text": "Understand the task and available information"
        },
        {
          "key": "D",
          "text": "Use an unintroduced feature"
        }
      ],
      "correct": 2,
      "explanation": "Before proceeding with What Is Data?, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning What Is Data??",
      "options": [
        {
          "key": "A",
          "text": "Check whether the result meets the task"
        },
        {
          "key": "B",
          "text": "Ignore errors"
        },
        {
          "key": "C",
          "text": "Use unrelated concepts"
        },
        {
          "key": "D",
          "text": "Never explain your choice"
        }
      ],
      "correct": 0,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of What Is Data??",
      "options": [
        {
          "key": "A",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "B",
          "text": "Explain or demonstrate it with a relevant example"
        },
        {
          "key": "C",
          "text": "Skip the example"
        },
        {
          "key": "D",
          "text": "Use a future lesson's concept"
        }
      ],
      "correct": 1,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of What Is Data?.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of What Is Data?",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of What Is Data?",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of What Is Data?"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of What Is Data?",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — SWIGGY DELIVERY LOGS AUDIT",
      "scenario": "Swiggy operations in Bangalore experienced a 24% increase in delivery delays during peak evening hours. The logistics VP requested an audit of incoming data streams.",
      "prompt": "Identify the raw operational data attributes (Order ID, GPS timestamp, rider assignment, weather flag) versus derived summary reports needed to diagnose the bottleneck.",
      "expectedResponse": "Collect raw timestamp logs, rider GPS pings, restaurant dispatch times, and weather status to analyze delay causes accurately."
    },
    {
      "id": 2,
      "title": "MISSION 2 — APOLLO HOSPITALS PATIENT REGISTRY",
      "scenario": "Apollo Hospitals admissions department is digitizing paper intake forms into an enterprise analytics database.",
      "prompt": "Distinguish between raw clinical observation data (heart rate 72 bpm, systolic BP 120 mmHg) and aggregate patient summary metrics.",
      "expectedResponse": "Store individual clinical measurements as raw atomic data points before calculating daily ward averages."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define What Is Data??",
      "sampleAnswer": "In simple terms, What Is Data? is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is What Is Data? useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of What Is Data??",
      "sampleAnswer": "A practical example is when an analytics team uses What Is Data? to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '1.2': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 1,
  "moduleName": "Understanding Data and Analytics",
  "topicKey": "1.2",
  "id": 2,
  "topicTitle": "What Is Data Analytics?",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of What Is Data Analytics??",
      "options": [
        {
          "key": "A",
          "text": "To perform or understand What Is Data Analytics?"
        },
        {
          "key": "B",
          "text": "To replace all human decisions"
        },
        {
          "key": "C",
          "text": "To make every result correct automatically"
        },
        {
          "key": "D",
          "text": "To skip understanding the problem"
        }
      ],
      "correct": 0,
      "explanation": "The primary objective of learning What Is Data Analytics? is to perform and understand its principles within business analytics.",
      "hint": "Think about what What Is Data Analytics? accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on What Is Data Analytics??",
      "options": [
        {
          "key": "A",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "B",
          "text": "Ignore the task requirements"
        },
        {
          "key": "C",
          "text": "Apply What Is Data Analytics? to a relevant example"
        },
        {
          "key": "D",
          "text": "Assume every result is correct"
        }
      ],
      "correct": 2,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding What Is Data Analytics?.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying What Is Data Analytics??",
      "options": [
        {
          "key": "A",
          "text": "Guess without reading"
        },
        {
          "key": "B",
          "text": "Understand the task and available information"
        },
        {
          "key": "C",
          "text": "Skip checking the result"
        },
        {
          "key": "D",
          "text": "Use an unintroduced feature"
        }
      ],
      "correct": 1,
      "explanation": "Before proceeding with What Is Data Analytics?, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning What Is Data Analytics??",
      "options": [
        {
          "key": "A",
          "text": "Ignore errors"
        },
        {
          "key": "B",
          "text": "Use unrelated concepts"
        },
        {
          "key": "C",
          "text": "Never explain your choice"
        },
        {
          "key": "D",
          "text": "Check whether the result meets the task"
        }
      ],
      "correct": 3,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of What Is Data Analytics??",
      "options": [
        {
          "key": "A",
          "text": "Explain or demonstrate it with a relevant example"
        },
        {
          "key": "B",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "C",
          "text": "Skip the example"
        },
        {
          "key": "D",
          "text": "Use a future lesson's concept"
        }
      ],
      "correct": 0,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of What Is Data Analytics?.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of What Is Data Analytics?",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of What Is Data Analytics?",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of What Is Data Analytics?"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of What Is Data Analytics?",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — FLIPKART CART ABANDONMENT ANALYSIS",
      "scenario": "Flipkart observed that 38% of mobile shoppers who add items to their shopping cart leave the application without completing payment.",
      "prompt": "Explain how the data analytics process (inspecting funnel drop-off, payment gateway latency, delivery fee visibility) identifies the root cause and boosts sales conversion.",
      "expectedResponse": "Analyze the checkout funnel drop-offs to pinpoint friction on the payment screen and recommend one-click checkout options."
    },
    {
      "id": 2,
      "title": "MISSION 2 — ZOMATO DELIVERY TIME OPTIMIZATION",
      "scenario": "Zomato wants to reduce average meal delivery times in South Delhi from 36 minutes to 28 minutes.",
      "prompt": "Describe how data analytics on kitchen preparation times and traffic congestion routes helps dispatch riders at optimal moments.",
      "expectedResponse": "Use predictive dispatch analytics based on real-time kitchen preparation signals and traffic data."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define What Is Data Analytics??",
      "sampleAnswer": "In simple terms, What Is Data Analytics? is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is What Is Data Analytics? useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of What Is Data Analytics??",
      "sampleAnswer": "A practical example is when an analytics team uses What Is Data Analytics? to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '1.3': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 1,
  "moduleName": "Understanding Data and Analytics",
  "topicKey": "1.3",
  "id": 3,
  "topicTitle": "Why Businesses Need Data Analytics",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Why Businesses Need Data Analytics?",
      "options": [
        {
          "key": "A",
          "text": "To replace all human decisions"
        },
        {
          "key": "B",
          "text": "To make every result correct automatically"
        },
        {
          "key": "C",
          "text": "To skip understanding the problem"
        },
        {
          "key": "D",
          "text": "To perform or understand Why Businesses Need Data Analytics"
        }
      ],
      "correct": 3,
      "explanation": "The primary objective of learning Why Businesses Need Data Analytics is to perform and understand its principles within business analytics.",
      "hint": "Think about what Why Businesses Need Data Analytics accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Why Businesses Need Data Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "B",
          "text": "Apply Why Businesses Need Data Analytics to a relevant example"
        },
        {
          "key": "C",
          "text": "Ignore the task requirements"
        },
        {
          "key": "D",
          "text": "Assume every result is correct"
        }
      ],
      "correct": 1,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Why Businesses Need Data Analytics.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Why Businesses Need Data Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Understand the task and available information"
        },
        {
          "key": "B",
          "text": "Guess without reading"
        },
        {
          "key": "C",
          "text": "Skip checking the result"
        },
        {
          "key": "D",
          "text": "Use an unintroduced feature"
        }
      ],
      "correct": 0,
      "explanation": "Before proceeding with Why Businesses Need Data Analytics, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Why Businesses Need Data Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Ignore errors"
        },
        {
          "key": "B",
          "text": "Use unrelated concepts"
        },
        {
          "key": "C",
          "text": "Check whether the result meets the task"
        },
        {
          "key": "D",
          "text": "Never explain your choice"
        }
      ],
      "correct": 2,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Why Businesses Need Data Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "B",
          "text": "Skip the example"
        },
        {
          "key": "C",
          "text": "Use a future lesson's concept"
        },
        {
          "key": "D",
          "text": "Explain or demonstrate it with a relevant example"
        }
      ],
      "correct": 3,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Why Businesses Need Data Analytics.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of Why Businesses Need Data Analytics",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of Why Businesses Need Data Analytics",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of Why Businesses Need Data Analytics"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of Why Businesses Need Data Analytics",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — NETFLIX CONTENT INVESTMENT DECISION",
      "scenario": "Netflix leadership must decide whether to invest $40 Million in producing Season 2 of an original thriller drama.",
      "prompt": "How does Netflix utilize viewer completion rates, episode drop-off minutes, and social sentiment data instead of executive gut feelings to fund successful shows?",
      "expectedResponse": "Evaluate user completion velocity and rewatch metrics to calculate projected subscriber retention value."
    },
    {
      "id": 2,
      "title": "MISSION 2 — ZARA FAST-FASHION INVENTORY RESTOCK",
      "scenario": "Zara physical stores in Mumbai notice an unexpected surge in demand for linen jackets.",
      "prompt": "Explain why real-time store sales analytics enables Zara to replenish fast-moving inventory within 48 hours instead of overproducing unsold stock.",
      "expectedResponse": "Real-time sales velocity feeds direct production orders, eliminating unsold stock markdowns."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Why Businesses Need Data Analytics?",
      "sampleAnswer": "In simple terms, Why Businesses Need Data Analytics is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Why Businesses Need Data Analytics useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Why Businesses Need Data Analytics?",
      "sampleAnswer": "A practical example is when an analytics team uses Why Businesses Need Data Analytics to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '1.4': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 1,
  "moduleName": "Understanding Data and Analytics",
  "topicKey": "1.4",
  "id": 4,
  "topicTitle": "Real-Life Examples of Data Analytics",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Real-Life Examples of Data Analytics?",
      "options": [
        {
          "key": "A",
          "text": "To replace all human decisions"
        },
        {
          "key": "B",
          "text": "To make every result correct automatically"
        },
        {
          "key": "C",
          "text": "To perform or understand Real-Life Examples of Data Analytics"
        },
        {
          "key": "D",
          "text": "To skip understanding the problem"
        }
      ],
      "correct": 2,
      "explanation": "The primary objective of learning Real-Life Examples of Data Analytics is to perform and understand its principles within business analytics.",
      "hint": "Think about what Real-Life Examples of Data Analytics accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Real-Life Examples of Data Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Apply Real-Life Examples of Data Analytics to a relevant example"
        },
        {
          "key": "B",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "C",
          "text": "Ignore the task requirements"
        },
        {
          "key": "D",
          "text": "Assume every result is correct"
        }
      ],
      "correct": 0,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Real-Life Examples of Data Analytics.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Real-Life Examples of Data Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Guess without reading"
        },
        {
          "key": "B",
          "text": "Skip checking the result"
        },
        {
          "key": "C",
          "text": "Use an unintroduced feature"
        },
        {
          "key": "D",
          "text": "Understand the task and available information"
        }
      ],
      "correct": 3,
      "explanation": "Before proceeding with Real-Life Examples of Data Analytics, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Real-Life Examples of Data Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Ignore errors"
        },
        {
          "key": "B",
          "text": "Check whether the result meets the task"
        },
        {
          "key": "C",
          "text": "Use unrelated concepts"
        },
        {
          "key": "D",
          "text": "Never explain your choice"
        }
      ],
      "correct": 1,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Real-Life Examples of Data Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "B",
          "text": "Skip the example"
        },
        {
          "key": "C",
          "text": "Explain or demonstrate it with a relevant example"
        },
        {
          "key": "D",
          "text": "Use a future lesson's concept"
        }
      ],
      "correct": 2,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Real-Life Examples of Data Analytics.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of Real-Life Examples of Data Analytics",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of Real-Life Examples of Data Analytics",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of Real-Life Examples of Data Analytics"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of Real-Life Examples of Data Analytics",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — PHONEPE & UPI FRAUD DETECTION",
      "scenario": "A payment gateway processes 12,000 transactions per second. An anomalous transaction of ₹95,000 occurs from a new device in a different state within 2 minutes of a local transfer.",
      "prompt": "Explain how real-time velocity checking and geolocation leap detection algorithms flag and block unauthorized fraudulent transactions.",
      "expectedResponse": "Flag transactions that violate impossible travel speeds and unverified device fingerprints."
    },
    {
      "id": 2,
      "title": "MISSION 2 — INDIGO AIRLINES DYNAMIC FARE PRICING",
      "scenario": "IndiGo flight 6E-205 from Delhi to Mumbai has 32 unsold seats 4 days before departure.",
      "prompt": "How does dynamic pricing analytics adjust ticket prices automatically based on competitor pricing, historical booking curves, and search queries?",
      "expectedResponse": "Dynamically adjust fares to maximize seat load factor and total flight revenue."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Real-Life Examples of Data Analytics?",
      "sampleAnswer": "In simple terms, Real-Life Examples of Data Analytics is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Real-Life Examples of Data Analytics useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Real-Life Examples of Data Analytics?",
      "sampleAnswer": "A practical example is when an analytics team uses Real-Life Examples of Data Analytics to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '1.5': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 1,
  "moduleName": "Understanding Data and Analytics",
  "topicKey": "1.5",
  "id": 5,
  "topicTitle": "Data vs Information vs Insight",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Data vs Information vs Insight?",
      "options": [
        {
          "key": "A",
          "text": "To replace all human decisions"
        },
        {
          "key": "B",
          "text": "To perform or understand Data vs Information vs Insight"
        },
        {
          "key": "C",
          "text": "To make every result correct automatically"
        },
        {
          "key": "D",
          "text": "To skip understanding the problem"
        }
      ],
      "correct": 1,
      "explanation": "The primary objective of learning Data vs Information vs Insight is to perform and understand its principles within business analytics.",
      "hint": "Think about what Data vs Information vs Insight accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Data vs Information vs Insight?",
      "options": [
        {
          "key": "A",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "B",
          "text": "Ignore the task requirements"
        },
        {
          "key": "C",
          "text": "Assume every result is correct"
        },
        {
          "key": "D",
          "text": "Apply Data vs Information vs Insight to a relevant example"
        }
      ],
      "correct": 3,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Data vs Information vs Insight.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Data vs Information vs Insight?",
      "options": [
        {
          "key": "A",
          "text": "Guess without reading"
        },
        {
          "key": "B",
          "text": "Skip checking the result"
        },
        {
          "key": "C",
          "text": "Understand the task and available information"
        },
        {
          "key": "D",
          "text": "Use an unintroduced feature"
        }
      ],
      "correct": 2,
      "explanation": "Before proceeding with Data vs Information vs Insight, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Data vs Information vs Insight?",
      "options": [
        {
          "key": "A",
          "text": "Check whether the result meets the task"
        },
        {
          "key": "B",
          "text": "Ignore errors"
        },
        {
          "key": "C",
          "text": "Use unrelated concepts"
        },
        {
          "key": "D",
          "text": "Never explain your choice"
        }
      ],
      "correct": 0,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Data vs Information vs Insight?",
      "options": [
        {
          "key": "A",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "B",
          "text": "Explain or demonstrate it with a relevant example"
        },
        {
          "key": "C",
          "text": "Skip the example"
        },
        {
          "key": "D",
          "text": "Use a future lesson's concept"
        }
      ],
      "correct": 1,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Data vs Information vs Insight.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of Data vs Information vs Insight",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of Data vs Information vs Insight",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of Data vs Information vs Insight"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of Data vs Information vs Insight",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — RETAIL CHAIN CLASSIFICATION AUDIT",
      "scenario": "A national supermarket chain generates 800,000 customer transaction receipts daily across 120 stores.",
      "prompt": "Categorize: (1) 800,000 raw receipt logs, (2) A chart showing $4.2M quarterly sales by city, and (3) The discovery that weekend shoppers using credit cards spend 45% more on organic groceries.",
      "expectedResponse": "Raw receipts = Data; Quarterly sales chart = Information; High-spending weekend organic shoppers = Actionable Insight."
    },
    {
      "id": 2,
      "title": "MISSION 2 — FINTECH APP USER RETENTION",
      "scenario": "A wealth management app measures user activity after a redesign.",
      "prompt": "Differentiate between raw user click logs, the Daily Active Users (DAU) metric, and the insight that adding a 1-minute portfolio onboarding walkthrough doubles month-1 retention.",
      "expectedResponse": "Clicks = Data, DAU = Information, Onboarding doubles retention = Actionable Insight."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Data vs Information vs Insight?",
      "sampleAnswer": "In simple terms, Data vs Information vs Insight is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Data vs Information vs Insight useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Data vs Information vs Insight?",
      "sampleAnswer": "A practical example is when an analytics team uses Data vs Information vs Insight to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '1.6': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 1,
  "moduleName": "Understanding Data and Analytics",
  "topicKey": "1.6",
  "id": 6,
  "topicTitle": "The Role of Data in Decision-Making",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of The Role of Data in Decision-Making?",
      "options": [
        {
          "key": "A",
          "text": "To perform or understand The Role of Data in Decision-Making"
        },
        {
          "key": "B",
          "text": "To replace all human decisions"
        },
        {
          "key": "C",
          "text": "To make every result correct automatically"
        },
        {
          "key": "D",
          "text": "To skip understanding the problem"
        }
      ],
      "correct": 0,
      "explanation": "The primary objective of learning The Role of Data in Decision-Making is to perform and understand its principles within business analytics.",
      "hint": "Think about what The Role of Data in Decision-Making accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on The Role of Data in Decision-Making?",
      "options": [
        {
          "key": "A",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "B",
          "text": "Ignore the task requirements"
        },
        {
          "key": "C",
          "text": "Apply The Role of Data in Decision-Making to a relevant example"
        },
        {
          "key": "D",
          "text": "Assume every result is correct"
        }
      ],
      "correct": 2,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding The Role of Data in Decision-Making.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying The Role of Data in Decision-Making?",
      "options": [
        {
          "key": "A",
          "text": "Guess without reading"
        },
        {
          "key": "B",
          "text": "Understand the task and available information"
        },
        {
          "key": "C",
          "text": "Skip checking the result"
        },
        {
          "key": "D",
          "text": "Use an unintroduced feature"
        }
      ],
      "correct": 1,
      "explanation": "Before proceeding with The Role of Data in Decision-Making, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning The Role of Data in Decision-Making?",
      "options": [
        {
          "key": "A",
          "text": "Ignore errors"
        },
        {
          "key": "B",
          "text": "Use unrelated concepts"
        },
        {
          "key": "C",
          "text": "Never explain your choice"
        },
        {
          "key": "D",
          "text": "Check whether the result meets the task"
        }
      ],
      "correct": 3,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of The Role of Data in Decision-Making?",
      "options": [
        {
          "key": "A",
          "text": "Explain or demonstrate it with a relevant example"
        },
        {
          "key": "B",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "C",
          "text": "Skip the example"
        },
        {
          "key": "D",
          "text": "Use a future lesson's concept"
        }
      ],
      "correct": 0,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of The Role of Data in Decision-Making.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of The Role of Data in Decision-Making",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of The Role of Data in Decision-Making",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of The Role of Data in Decision-Making"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of The Role of Data in Decision-Making",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — RELIANCE RETAIL STORE EXPANSION",
      "scenario": "Reliance Retail must choose between opening a new supermarket in Pune vs Nagpur with a ₹15 Crore capital budget.",
      "prompt": "Describe the data points (household disposable income, competitor store density, vehicular traffic flow) required to make an objective data-driven decision.",
      "expectedResponse": "Analyze demographic spending power and catchment area traffic to project 5-year store ROI."
    },
    {
      "id": 2,
      "title": "MISSION 2 — EDTECH MARKETING BUDGET REALLOCATION",
      "scenario": "An ed-tech firm spends ₹50 Lakhs monthly across print newspapers, Google Search, and Instagram influencer sponsorships.",
      "prompt": "How does Cost-Per-Lead (CPL) and Customer Lifetime Value (LTV) analytics guide leadership to reallocate 70% of spend to top-performing digital channels?",
      "expectedResponse": "Shift budget away from unmeasurable print ads to channels with proven high LTV-to-CAC ratios."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define The Role of Data in Decision-Making?",
      "sampleAnswer": "In simple terms, The Role of Data in Decision-Making is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is The Role of Data in Decision-Making useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of The Role of Data in Decision-Making?",
      "sampleAnswer": "A practical example is when an analytics team uses The Role of Data in Decision-Making to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '2.1': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 2,
  "moduleName": "Data Analyst Career and Workflow",
  "topicKey": "2.1",
  "id": 7,
  "topicTitle": "Data Analyst Roles and Responsibilities",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Data Analyst Roles and Responsibilities?",
      "options": [
        {
          "key": "A",
          "text": "To replace all human decisions"
        },
        {
          "key": "B",
          "text": "To make every result correct automatically"
        },
        {
          "key": "C",
          "text": "To skip understanding the problem"
        },
        {
          "key": "D",
          "text": "To perform or understand Data Analyst Roles and Responsibilities"
        }
      ],
      "correct": 3,
      "explanation": "The primary objective of learning Data Analyst Roles and Responsibilities is to perform and understand its principles within business analytics.",
      "hint": "Think about what Data Analyst Roles and Responsibilities accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Data Analyst Roles and Responsibilities?",
      "options": [
        {
          "key": "A",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "B",
          "text": "Apply Data Analyst Roles and Responsibilities to a relevant example"
        },
        {
          "key": "C",
          "text": "Ignore the task requirements"
        },
        {
          "key": "D",
          "text": "Assume every result is correct"
        }
      ],
      "correct": 1,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Data Analyst Roles and Responsibilities.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Data Analyst Roles and Responsibilities?",
      "options": [
        {
          "key": "A",
          "text": "Understand the task and available information"
        },
        {
          "key": "B",
          "text": "Guess without reading"
        },
        {
          "key": "C",
          "text": "Skip checking the result"
        },
        {
          "key": "D",
          "text": "Use an unintroduced feature"
        }
      ],
      "correct": 0,
      "explanation": "Before proceeding with Data Analyst Roles and Responsibilities, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Data Analyst Roles and Responsibilities?",
      "options": [
        {
          "key": "A",
          "text": "Ignore errors"
        },
        {
          "key": "B",
          "text": "Use unrelated concepts"
        },
        {
          "key": "C",
          "text": "Check whether the result meets the task"
        },
        {
          "key": "D",
          "text": "Never explain your choice"
        }
      ],
      "correct": 2,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Data Analyst Roles and Responsibilities?",
      "options": [
        {
          "key": "A",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "B",
          "text": "Skip the example"
        },
        {
          "key": "C",
          "text": "Use a future lesson's concept"
        },
        {
          "key": "D",
          "text": "Explain or demonstrate it with a relevant example"
        }
      ],
      "correct": 3,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Data Analyst Roles and Responsibilities.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of Data Analyst Roles and Responsibilities",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of Data Analyst Roles and Responsibilities",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of Data Analyst Roles and Responsibilities"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of Data Analyst Roles and Responsibilities",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — ONBOARDING AT ZOMATO AS JUNIOR ANALYST",
      "scenario": "You join Zomato analytics team. Your first assignment is to build a weekly restaurant delivery SLA dashboard.",
      "prompt": "Outline your primary responsibilities: extracting transactional data with SQL, cleaning missing timestamps, calculating on-time rates, and presenting findings to regional managers.",
      "expectedResponse": "Extract data using SQL, clean null values, compute SLA KPIs, and build intuitive visualizations for operations teams."
    },
    {
      "id": 2,
      "title": "MISSION 2 — RECONCILING CONFLICTING SALES REPORTS",
      "scenario": "Finance reports ₹12.5 Crore monthly sales while the Marketing dashboard shows ₹14.2 Crore.",
      "prompt": "Explain the analyst’s role in auditing data definitions (gross revenue vs net revenue after discounts) to reconcile the discrepancy.",
      "expectedResponse": "Audit SQL logic and verify whether refunds and promotional discount codes were excluded in the Finance definition."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Data Analyst Roles and Responsibilities?",
      "sampleAnswer": "In simple terms, Data Analyst Roles and Responsibilities is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Data Analyst Roles and Responsibilities useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Data Analyst Roles and Responsibilities?",
      "sampleAnswer": "A practical example is when an analytics team uses Data Analyst Roles and Responsibilities to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '2.2': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 2,
  "moduleName": "Data Analyst Career and Workflow",
  "topicKey": "2.2",
  "id": 8,
  "topicTitle": "Data Analyst vs Data Scientist vs Data Engineer",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Data Analyst vs Data Scientist vs Data Engineer?",
      "options": [
        {
          "key": "A",
          "text": "To replace all human decisions"
        },
        {
          "key": "B",
          "text": "To make every result correct automatically"
        },
        {
          "key": "C",
          "text": "To perform or understand Data Analyst vs Data Scientist vs Data Engineer"
        },
        {
          "key": "D",
          "text": "To skip understanding the problem"
        }
      ],
      "correct": 2,
      "explanation": "The primary objective of learning Data Analyst vs Data Scientist vs Data Engineer is to perform and understand its principles within business analytics.",
      "hint": "Think about what Data Analyst vs Data Scientist vs Data Engineer accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Data Analyst vs Data Scientist vs Data Engineer?",
      "options": [
        {
          "key": "A",
          "text": "Apply Data Analyst vs Data Scientist vs Data Engineer to a relevant example"
        },
        {
          "key": "B",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "C",
          "text": "Ignore the task requirements"
        },
        {
          "key": "D",
          "text": "Assume every result is correct"
        }
      ],
      "correct": 0,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Data Analyst vs Data Scientist vs Data Engineer.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Data Analyst vs Data Scientist vs Data Engineer?",
      "options": [
        {
          "key": "A",
          "text": "Guess without reading"
        },
        {
          "key": "B",
          "text": "Skip checking the result"
        },
        {
          "key": "C",
          "text": "Use an unintroduced feature"
        },
        {
          "key": "D",
          "text": "Understand the task and available information"
        }
      ],
      "correct": 3,
      "explanation": "Before proceeding with Data Analyst vs Data Scientist vs Data Engineer, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Data Analyst vs Data Scientist vs Data Engineer?",
      "options": [
        {
          "key": "A",
          "text": "Ignore errors"
        },
        {
          "key": "B",
          "text": "Check whether the result meets the task"
        },
        {
          "key": "C",
          "text": "Use unrelated concepts"
        },
        {
          "key": "D",
          "text": "Never explain your choice"
        }
      ],
      "correct": 1,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Data Analyst vs Data Scientist vs Data Engineer?",
      "options": [
        {
          "key": "A",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "B",
          "text": "Skip the example"
        },
        {
          "key": "C",
          "text": "Explain or demonstrate it with a relevant example"
        },
        {
          "key": "D",
          "text": "Use a future lesson's concept"
        }
      ],
      "correct": 2,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Data Analyst vs Data Scientist vs Data Engineer.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of Data Analyst vs Data Scientist vs Data Engineer",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of Data Analyst vs Data Scientist vs Data Engineer",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of Data Analyst vs Data Scientist vs Data Engineer"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of Data Analyst vs Data Scientist vs Data Engineer",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — FINTECH PLATFORM TEAM ROLE MAPPING",
      "scenario": "A fintech startup needs to build an enterprise analytics infrastructure from scratch.",
      "prompt": "Assign tasks to the correct role: (1) Build automated Apache Airflow data pipelines to Snowflake, (2) Create monthly customer acquisition dashboards in Power BI, (3) Train a machine learning model to predict loan default probabilities.",
      "expectedResponse": "Task 1 = Data Engineer; Task 2 = Data Analyst; Task 3 = Data Scientist."
    },
    {
      "id": 2,
      "title": "MISSION 2 — COLLABORATION DURING A CHURN REDUCTION SPRINT",
      "scenario": "A telecom company launches a cross-functional initiative to stop high-paying postpaid customers from switching carriers.",
      "prompt": "Describe how the Data Analyst works with Data Engineers (for reliable pipeline feeds) and Data Scientists (interpreting predictive churn scores for marketing campaigns).",
      "expectedResponse": "Analyst translates business requirements to Data Engineers and translates Data Scientist model outputs into business actions."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Data Analyst vs Data Scientist vs Data Engineer?",
      "sampleAnswer": "In simple terms, Data Analyst vs Data Scientist vs Data Engineer is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Data Analyst vs Data Scientist vs Data Engineer useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Data Analyst vs Data Scientist vs Data Engineer?",
      "sampleAnswer": "A practical example is when an analytics team uses Data Analyst vs Data Scientist vs Data Engineer to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '2.3': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 2,
  "moduleName": "Data Analyst Career and Workflow",
  "topicKey": "2.3",
  "id": 9,
  "topicTitle": "Common Tasks in a Data Analyst’s Day",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Common Tasks in a Data Analyst’s Day?",
      "options": [
        {
          "key": "A",
          "text": "To replace all human decisions"
        },
        {
          "key": "B",
          "text": "To perform or understand Common Tasks in a Data Analyst’s Day"
        },
        {
          "key": "C",
          "text": "To make every result correct automatically"
        },
        {
          "key": "D",
          "text": "To skip understanding the problem"
        }
      ],
      "correct": 1,
      "explanation": "The primary objective of learning Common Tasks in a Data Analyst’s Day is to perform and understand its principles within business analytics.",
      "hint": "Think about what Common Tasks in a Data Analyst’s Day accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Common Tasks in a Data Analyst’s Day?",
      "options": [
        {
          "key": "A",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "B",
          "text": "Ignore the task requirements"
        },
        {
          "key": "C",
          "text": "Assume every result is correct"
        },
        {
          "key": "D",
          "text": "Apply Common Tasks in a Data Analyst’s Day to a relevant example"
        }
      ],
      "correct": 3,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Common Tasks in a Data Analyst’s Day.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Common Tasks in a Data Analyst’s Day?",
      "options": [
        {
          "key": "A",
          "text": "Guess without reading"
        },
        {
          "key": "B",
          "text": "Skip checking the result"
        },
        {
          "key": "C",
          "text": "Understand the task and available information"
        },
        {
          "key": "D",
          "text": "Use an unintroduced feature"
        }
      ],
      "correct": 2,
      "explanation": "Before proceeding with Common Tasks in a Data Analyst’s Day, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Common Tasks in a Data Analyst’s Day?",
      "options": [
        {
          "key": "A",
          "text": "Check whether the result meets the task"
        },
        {
          "key": "B",
          "text": "Ignore errors"
        },
        {
          "key": "C",
          "text": "Use unrelated concepts"
        },
        {
          "key": "D",
          "text": "Never explain your choice"
        }
      ],
      "correct": 0,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Common Tasks in a Data Analyst’s Day?",
      "options": [
        {
          "key": "A",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "B",
          "text": "Explain or demonstrate it with a relevant example"
        },
        {
          "key": "C",
          "text": "Skip the example"
        },
        {
          "key": "D",
          "text": "Use a future lesson's concept"
        }
      ],
      "correct": 1,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Common Tasks in a Data Analyst’s Day.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of Common Tasks in a Data Analyst’s Day",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of Common Tasks in a Data Analyst’s Day",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of Common Tasks in a Data Analyst’s Day"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of Common Tasks in a Data Analyst’s Day",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — AN ANALYST’S DAILY ROUTINE",
      "scenario": "You are preparing for your first day at a fast-paced analytics consultancy.",
      "prompt": "Organize a standard daily schedule: morning data pipeline check, writing SQL queries for sales leads, building executive KPI charts, and attending an ad-hoc stakeholder briefing.",
      "expectedResponse": "Start with data pipeline integrity validation, execute scheduled queries, build visualizations, and conclude with stakeholder communication."
    },
    {
      "id": 2,
      "title": "MISSION 2 — TRIAGING AD-HOC DATA REQUESTS",
      "scenario": "Three different department heads request urgent reports at 11:00 AM before a board meeting.",
      "prompt": "How do you triage requests based on business impact, clarity of question, and estimated delivery timeline without creating reporting errors?",
      "expectedResponse": "Prioritize by business urgency, clarify ambiguous metrics immediately, and provide validated data snapshots."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Common Tasks in a Data Analyst’s Day?",
      "sampleAnswer": "In simple terms, Common Tasks in a Data Analyst’s Day is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Common Tasks in a Data Analyst’s Day useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Common Tasks in a Data Analyst’s Day?",
      "sampleAnswer": "A practical example is when an analytics team uses Common Tasks in a Data Analyst’s Day to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '2.4': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 2,
  "moduleName": "Data Analyst Career and Workflow",
  "topicKey": "2.4",
  "id": 10,
  "topicTitle": "Analytics Lifecycle: From Question to Action",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Analytics Lifecycle: From Question to Action?",
      "options": [
        {
          "key": "A",
          "text": "To perform or understand Analytics Lifecycle: From Question to Action"
        },
        {
          "key": "B",
          "text": "To replace all human decisions"
        },
        {
          "key": "C",
          "text": "To make every result correct automatically"
        },
        {
          "key": "D",
          "text": "To skip understanding the problem"
        }
      ],
      "correct": 0,
      "explanation": "The primary objective of learning Analytics Lifecycle: From Question to Action is to perform and understand its principles within business analytics.",
      "hint": "Think about what Analytics Lifecycle: From Question to Action accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Analytics Lifecycle: From Question to Action?",
      "options": [
        {
          "key": "A",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "B",
          "text": "Ignore the task requirements"
        },
        {
          "key": "C",
          "text": "Apply Analytics Lifecycle: From Question to Action to a relevant example"
        },
        {
          "key": "D",
          "text": "Assume every result is correct"
        }
      ],
      "correct": 2,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Analytics Lifecycle: From Question to Action.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Analytics Lifecycle: From Question to Action?",
      "options": [
        {
          "key": "A",
          "text": "Guess without reading"
        },
        {
          "key": "B",
          "text": "Understand the task and available information"
        },
        {
          "key": "C",
          "text": "Skip checking the result"
        },
        {
          "key": "D",
          "text": "Use an unintroduced feature"
        }
      ],
      "correct": 1,
      "explanation": "Before proceeding with Analytics Lifecycle: From Question to Action, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Analytics Lifecycle: From Question to Action?",
      "options": [
        {
          "key": "A",
          "text": "Ignore errors"
        },
        {
          "key": "B",
          "text": "Use unrelated concepts"
        },
        {
          "key": "C",
          "text": "Never explain your choice"
        },
        {
          "key": "D",
          "text": "Check whether the result meets the task"
        }
      ],
      "correct": 3,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Analytics Lifecycle: From Question to Action?",
      "options": [
        {
          "key": "A",
          "text": "Explain or demonstrate it with a relevant example"
        },
        {
          "key": "B",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "C",
          "text": "Skip the example"
        },
        {
          "key": "D",
          "text": "Use a future lesson's concept"
        }
      ],
      "correct": 0,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Analytics Lifecycle: From Question to Action.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of Analytics Lifecycle: From Question to Action",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of Analytics Lifecycle: From Question to Action",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of Analytics Lifecycle: From Question to Action"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of Analytics Lifecycle: From Question to Action",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — TELECOM CHURN REDUCTION LIFECYCLE",
      "scenario": "A telecom operator loses 8% of subscribers each quarter to competitors offering cheaper fiber plans.",
      "prompt": "Walk through the 6 stages of the analytics lifecycle: (1) Frame Question, (2) Data Extraction, (3) Data Cleaning, (4) Exploratory Analysis, (5) Dashboard Storytelling, (6) Business Action.",
      "expectedResponse": "Follow structured lifecycle from framing \"Why are users leaving?\" to implementing customized retention discounts."
    },
    {
      "id": 2,
      "title": "MISSION 2 — PRODUCT FEATURE ADOPTION LIFECYCLE",
      "scenario": "An app launches a new bill-split feature but initial adoption is below expectations.",
      "prompt": "Formulate an end-to-end plan to investigate user onboarding drop-off, analyze behavioral cohorts, and deliver recommendations to product managers.",
      "expectedResponse": "Track funnel conversion, segment by app version, and recommend prominent homepage placement."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Analytics Lifecycle: From Question to Action?",
      "sampleAnswer": "In simple terms, Analytics Lifecycle: From Question to Action is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Analytics Lifecycle: From Question to Action useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Analytics Lifecycle: From Question to Action?",
      "sampleAnswer": "A practical example is when an analytics team uses Analytics Lifecycle: From Question to Action to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '2.5': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 2,
  "moduleName": "Data Analyst Career and Workflow",
  "topicKey": "2.5",
  "id": 11,
  "topicTitle": "Working with Stakeholders",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Working with Stakeholders?",
      "options": [
        {
          "key": "A",
          "text": "To replace all human decisions"
        },
        {
          "key": "B",
          "text": "To make every result correct automatically"
        },
        {
          "key": "C",
          "text": "To skip understanding the problem"
        },
        {
          "key": "D",
          "text": "To perform or understand Working with Stakeholders"
        }
      ],
      "correct": 3,
      "explanation": "The primary objective of learning Working with Stakeholders is to perform and understand its principles within business analytics.",
      "hint": "Think about what Working with Stakeholders accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Working with Stakeholders?",
      "options": [
        {
          "key": "A",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "B",
          "text": "Apply Working with Stakeholders to a relevant example"
        },
        {
          "key": "C",
          "text": "Ignore the task requirements"
        },
        {
          "key": "D",
          "text": "Assume every result is correct"
        }
      ],
      "correct": 1,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Working with Stakeholders.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Working with Stakeholders?",
      "options": [
        {
          "key": "A",
          "text": "Understand the task and available information"
        },
        {
          "key": "B",
          "text": "Guess without reading"
        },
        {
          "key": "C",
          "text": "Skip checking the result"
        },
        {
          "key": "D",
          "text": "Use an unintroduced feature"
        }
      ],
      "correct": 0,
      "explanation": "Before proceeding with Working with Stakeholders, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Working with Stakeholders?",
      "options": [
        {
          "key": "A",
          "text": "Ignore errors"
        },
        {
          "key": "B",
          "text": "Use unrelated concepts"
        },
        {
          "key": "C",
          "text": "Check whether the result meets the task"
        },
        {
          "key": "D",
          "text": "Never explain your choice"
        }
      ],
      "correct": 2,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Working with Stakeholders?",
      "options": [
        {
          "key": "A",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "B",
          "text": "Skip the example"
        },
        {
          "key": "C",
          "text": "Use a future lesson's concept"
        },
        {
          "key": "D",
          "text": "Explain or demonstrate it with a relevant example"
        }
      ],
      "correct": 3,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Working with Stakeholders.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of Working with Stakeholders",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of Working with Stakeholders",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of Working with Stakeholders"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of Working with Stakeholders",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — NON-TECHNICAL EXECUTIVE BRIEFING",
      "scenario": "You discovered that 18% of delivery delays are caused by unoptimized driver dispatch radius. You must present this to the Non-Technical Operations VP.",
      "prompt": "Explain how to present findings using business impact (lost revenue, customer refund costs) without confusing mathematical jargon.",
      "expectedResponse": "Focus on business metrics like ₹45 Lakh monthly cost and customer satisfaction loss rather than algorithmic complexity."
    },
    {
      "id": 2,
      "title": "MISSION 2 — MANAGING CONFLICTING KPI REQUIREMENTS",
      "scenario": "The Sales team defines a \"Lead\" as anyone who downloads a PDF, while the Marketing team defines a \"Lead\" only as users who book a product demo.",
      "prompt": "How do you facilitate alignment between both teams and establish a single source of truth in the company reporting dashboard?",
      "expectedResponse": "Document distinct definitions: \"Marketing Qualified Lead (MQL)\" vs \"Sales Qualified Lead (SQL)\" in a shared data dictionary."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Working with Stakeholders?",
      "sampleAnswer": "In simple terms, Working with Stakeholders is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Working with Stakeholders useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Working with Stakeholders?",
      "sampleAnswer": "A practical example is when an analytics team uses Working with Stakeholders to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '2.6': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 2,
  "moduleName": "Data Analyst Career and Workflow",
  "topicKey": "2.6",
  "id": 12,
  "topicTitle": "Ethics and Professional Responsibility",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Ethics and Professional Responsibility?",
      "options": [
        {
          "key": "A",
          "text": "To replace all human decisions"
        },
        {
          "key": "B",
          "text": "To make every result correct automatically"
        },
        {
          "key": "C",
          "text": "To perform or understand Ethics and Professional Responsibility"
        },
        {
          "key": "D",
          "text": "To skip understanding the problem"
        }
      ],
      "correct": 2,
      "explanation": "The primary objective of learning Ethics and Professional Responsibility is to perform and understand its principles within business analytics.",
      "hint": "Think about what Ethics and Professional Responsibility accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Ethics and Professional Responsibility?",
      "options": [
        {
          "key": "A",
          "text": "Apply Ethics and Professional Responsibility to a relevant example"
        },
        {
          "key": "B",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "C",
          "text": "Ignore the task requirements"
        },
        {
          "key": "D",
          "text": "Assume every result is correct"
        }
      ],
      "correct": 0,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Ethics and Professional Responsibility.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Ethics and Professional Responsibility?",
      "options": [
        {
          "key": "A",
          "text": "Guess without reading"
        },
        {
          "key": "B",
          "text": "Skip checking the result"
        },
        {
          "key": "C",
          "text": "Use an unintroduced feature"
        },
        {
          "key": "D",
          "text": "Understand the task and available information"
        }
      ],
      "correct": 3,
      "explanation": "Before proceeding with Ethics and Professional Responsibility, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Ethics and Professional Responsibility?",
      "options": [
        {
          "key": "A",
          "text": "Ignore errors"
        },
        {
          "key": "B",
          "text": "Check whether the result meets the task"
        },
        {
          "key": "C",
          "text": "Use unrelated concepts"
        },
        {
          "key": "D",
          "text": "Never explain your choice"
        }
      ],
      "correct": 1,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Ethics and Professional Responsibility?",
      "options": [
        {
          "key": "A",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "B",
          "text": "Skip the example"
        },
        {
          "key": "C",
          "text": "Explain or demonstrate it with a relevant example"
        },
        {
          "key": "D",
          "text": "Use a future lesson's concept"
        }
      ],
      "correct": 2,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Ethics and Professional Responsibility.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of Ethics and Professional Responsibility",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of Ethics and Professional Responsibility",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of Ethics and Professional Responsibility"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of Ethics and Professional Responsibility",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — UNENCRYPTED PII DATA EXPOSURE AUDIT",
      "scenario": "While writing a SQL query on customer records, you notice plain-text credit card numbers and Aadhaar IDs stored in an unencrypted table accessible to all interns.",
      "prompt": "Outline your immediate ethical and compliance steps to safeguard customer privacy under data protection laws.",
      "expectedResponse": "Alert the data security officer immediately, recommend column-level masking, and ensure no PII is exported to local machines."
    },
    {
      "id": 2,
      "title": "MISSION 2 — RESISTING MISLEADING VISUALIZATIONS",
      "scenario": "A department manager asks you to truncate the Y-axis of a bar chart from 0 to 95 to make a 2% sales gain look like a massive 300% spike for investors.",
      "prompt": "Explain how to maintain analytical integrity and present honest, transparent visualizations while addressing stakeholder expectations.",
      "expectedResponse": "Refuse misleading scale truncations, explain compliance risks, and highlight genuine positive growth drivers instead."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Ethics and Professional Responsibility?",
      "sampleAnswer": "In simple terms, Ethics and Professional Responsibility is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Ethics and Professional Responsibility useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Ethics and Professional Responsibility?",
      "sampleAnswer": "A practical example is when an analytics team uses Ethics and Professional Responsibility to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '3.1': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 3,
  "moduleName": "Analytics Types and Business Metrics",
  "topicKey": "3.1",
  "id": 13,
  "topicTitle": "Descriptive Analytics",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Descriptive Analytics?",
      "options": [
        {
          "key": "A",
          "text": "To replace all human decisions"
        },
        {
          "key": "B",
          "text": "To perform or understand Descriptive Analytics"
        },
        {
          "key": "C",
          "text": "To make every result correct automatically"
        },
        {
          "key": "D",
          "text": "To skip understanding the problem"
        }
      ],
      "correct": 1,
      "explanation": "The primary objective of learning Descriptive Analytics is to perform and understand its principles within business analytics.",
      "hint": "Think about what Descriptive Analytics accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Descriptive Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "B",
          "text": "Ignore the task requirements"
        },
        {
          "key": "C",
          "text": "Assume every result is correct"
        },
        {
          "key": "D",
          "text": "Apply Descriptive Analytics to a relevant example"
        }
      ],
      "correct": 3,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Descriptive Analytics.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Descriptive Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Guess without reading"
        },
        {
          "key": "B",
          "text": "Skip checking the result"
        },
        {
          "key": "C",
          "text": "Understand the task and available information"
        },
        {
          "key": "D",
          "text": "Use an unintroduced feature"
        }
      ],
      "correct": 2,
      "explanation": "Before proceeding with Descriptive Analytics, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Descriptive Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Check whether the result meets the task"
        },
        {
          "key": "B",
          "text": "Ignore errors"
        },
        {
          "key": "C",
          "text": "Use unrelated concepts"
        },
        {
          "key": "D",
          "text": "Never explain your choice"
        }
      ],
      "correct": 0,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Descriptive Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "B",
          "text": "Explain or demonstrate it with a relevant example"
        },
        {
          "key": "C",
          "text": "Skip the example"
        },
        {
          "key": "D",
          "text": "Use a future lesson's concept"
        }
      ],
      "correct": 1,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Descriptive Analytics.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of Descriptive Analytics",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of Descriptive Analytics",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of Descriptive Analytics"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of Descriptive Analytics",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — QUARTERLY BUSINESS REVIEW (QBR) REPORT",
      "scenario": "The CEO of an e-commerce platform needs a retrospective performance report for Q3.",
      "prompt": "Identify the descriptive analytics metrics (Total Revenue, Average Order Value, Total Units Sold, Active Customers) that answer \"What happened in Q3?\".",
      "expectedResponse": "Calculate historical aggregates, regional breakdowns, and period-over-period percentage growth."
    },
    {
      "id": 2,
      "title": "MISSION 2 — HOSPITAL EMERGENCY ADMISSIONS AUDIT",
      "scenario": "A city hospital analyzes emergency patient intake over the past 12 months.",
      "prompt": "Describe how descriptive summaries (busiest days of week, average triage time, department intake volume) establish baseline operational facts.",
      "expectedResponse": "Summarize past admission trends by time of day and department to establish operational baselines."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Descriptive Analytics?",
      "sampleAnswer": "In simple terms, Descriptive Analytics is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Descriptive Analytics useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Descriptive Analytics?",
      "sampleAnswer": "A practical example is when an analytics team uses Descriptive Analytics to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '3.2': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 3,
  "moduleName": "Analytics Types and Business Metrics",
  "topicKey": "3.2",
  "id": 14,
  "topicTitle": "Diagnostic Analytics",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Diagnostic Analytics?",
      "options": [
        {
          "key": "A",
          "text": "To perform or understand Diagnostic Analytics"
        },
        {
          "key": "B",
          "text": "To replace all human decisions"
        },
        {
          "key": "C",
          "text": "To make every result correct automatically"
        },
        {
          "key": "D",
          "text": "To skip understanding the problem"
        }
      ],
      "correct": 0,
      "explanation": "The primary objective of learning Diagnostic Analytics is to perform and understand its principles within business analytics.",
      "hint": "Think about what Diagnostic Analytics accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Diagnostic Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "B",
          "text": "Ignore the task requirements"
        },
        {
          "key": "C",
          "text": "Apply Diagnostic Analytics to a relevant example"
        },
        {
          "key": "D",
          "text": "Assume every result is correct"
        }
      ],
      "correct": 2,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Diagnostic Analytics.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Diagnostic Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Guess without reading"
        },
        {
          "key": "B",
          "text": "Understand the task and available information"
        },
        {
          "key": "C",
          "text": "Skip checking the result"
        },
        {
          "key": "D",
          "text": "Use an unintroduced feature"
        }
      ],
      "correct": 1,
      "explanation": "Before proceeding with Diagnostic Analytics, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Diagnostic Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Ignore errors"
        },
        {
          "key": "B",
          "text": "Use unrelated concepts"
        },
        {
          "key": "C",
          "text": "Never explain your choice"
        },
        {
          "key": "D",
          "text": "Check whether the result meets the task"
        }
      ],
      "correct": 3,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Diagnostic Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Explain or demonstrate it with a relevant example"
        },
        {
          "key": "B",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "C",
          "text": "Skip the example"
        },
        {
          "key": "D",
          "text": "Use a future lesson's concept"
        }
      ],
      "correct": 0,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Diagnostic Analytics.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of Diagnostic Analytics",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of Diagnostic Analytics",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of Diagnostic Analytics"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of Diagnostic Analytics",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — ROOT CAUSE OF REVENUE DECLINE IN MARCH",
      "scenario": "North India electronics sales fell by 26% in March despite identical marketing spend.",
      "prompt": "How does diagnostic drill-down analysis (investigating regional stockouts, competitor flash sales, and delivery partner strikes) explain \"Why did it happen?\".",
      "expectedResponse": "Perform dimensional drill-down and correlation analysis to isolate stockout events as the primary driver."
    },
    {
      "id": 2,
      "title": "MISSION 2 — CUSTOMER SERVICE TICKET ESCALATIONS",
      "scenario": "Customer support escalation rates tripled within 48 hours of releasing a mobile app update.",
      "prompt": "Detail how analyzing crash logs, error frequency by Android version, and customer chat keywords diagnoses the software defect.",
      "expectedResponse": "Segment escalation tickets by app build version to isolate a crash on Android 14 devices."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Diagnostic Analytics?",
      "sampleAnswer": "In simple terms, Diagnostic Analytics is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Diagnostic Analytics useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Diagnostic Analytics?",
      "sampleAnswer": "A practical example is when an analytics team uses Diagnostic Analytics to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '3.3': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 3,
  "moduleName": "Analytics Types and Business Metrics",
  "topicKey": "3.3",
  "id": 15,
  "topicTitle": "Predictive Analytics",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Predictive Analytics?",
      "options": [
        {
          "key": "A",
          "text": "To replace all human decisions"
        },
        {
          "key": "B",
          "text": "To make every result correct automatically"
        },
        {
          "key": "C",
          "text": "To skip understanding the problem"
        },
        {
          "key": "D",
          "text": "To perform or understand Predictive Analytics"
        }
      ],
      "correct": 3,
      "explanation": "The primary objective of learning Predictive Analytics is to perform and understand its principles within business analytics.",
      "hint": "Think about what Predictive Analytics accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Predictive Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "B",
          "text": "Apply Predictive Analytics to a relevant example"
        },
        {
          "key": "C",
          "text": "Ignore the task requirements"
        },
        {
          "key": "D",
          "text": "Assume every result is correct"
        }
      ],
      "correct": 1,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Predictive Analytics.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Predictive Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Understand the task and available information"
        },
        {
          "key": "B",
          "text": "Guess without reading"
        },
        {
          "key": "C",
          "text": "Skip checking the result"
        },
        {
          "key": "D",
          "text": "Use an unintroduced feature"
        }
      ],
      "correct": 0,
      "explanation": "Before proceeding with Predictive Analytics, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Predictive Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Ignore errors"
        },
        {
          "key": "B",
          "text": "Use unrelated concepts"
        },
        {
          "key": "C",
          "text": "Check whether the result meets the task"
        },
        {
          "key": "D",
          "text": "Never explain your choice"
        }
      ],
      "correct": 2,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Predictive Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "B",
          "text": "Skip the example"
        },
        {
          "key": "C",
          "text": "Use a future lesson's concept"
        },
        {
          "key": "D",
          "text": "Explain or demonstrate it with a relevant example"
        }
      ],
      "correct": 3,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Predictive Analytics.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of Predictive Analytics",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of Predictive Analytics",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of Predictive Analytics"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of Predictive Analytics",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — DIWALI FESTIVAL DEMAND FORECASTING",
      "scenario": "An electronics retailer must order stock 60 days ahead of the Diwali shopping season.",
      "prompt": "Explain how predictive analytics combines historical seasonal sales, Google Search interest trends, and macroeconomic indicators to answer \"What is likely to happen?\".",
      "expectedResponse": "Apply time-series forecasting to project product demand and optimize procurement quantities."
    },
    {
      "id": 2,
      "title": "MISSION 2 — CREDIT CARD DEFAULT RISK ESTIMATION",
      "scenario": "A commercial bank receives 50,000 credit card applications monthly.",
      "prompt": "How do predictive statistical models evaluate applicant credit scores, debt-to-income ratios, and employment history to predict default probabilities?",
      "expectedResponse": "Compute credit risk scores to approve low-risk applicants and flag high-risk profiles for manual underwriting."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Predictive Analytics?",
      "sampleAnswer": "In simple terms, Predictive Analytics is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Predictive Analytics useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Predictive Analytics?",
      "sampleAnswer": "A practical example is when an analytics team uses Predictive Analytics to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '3.4': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 3,
  "moduleName": "Analytics Types and Business Metrics",
  "topicKey": "3.4",
  "id": 16,
  "topicTitle": "Prescriptive Analytics",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Prescriptive Analytics?",
      "options": [
        {
          "key": "A",
          "text": "To replace all human decisions"
        },
        {
          "key": "B",
          "text": "To make every result correct automatically"
        },
        {
          "key": "C",
          "text": "To perform or understand Prescriptive Analytics"
        },
        {
          "key": "D",
          "text": "To skip understanding the problem"
        }
      ],
      "correct": 2,
      "explanation": "The primary objective of learning Prescriptive Analytics is to perform and understand its principles within business analytics.",
      "hint": "Think about what Prescriptive Analytics accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Prescriptive Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Apply Prescriptive Analytics to a relevant example"
        },
        {
          "key": "B",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "C",
          "text": "Ignore the task requirements"
        },
        {
          "key": "D",
          "text": "Assume every result is correct"
        }
      ],
      "correct": 0,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Prescriptive Analytics.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Prescriptive Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Guess without reading"
        },
        {
          "key": "B",
          "text": "Skip checking the result"
        },
        {
          "key": "C",
          "text": "Use an unintroduced feature"
        },
        {
          "key": "D",
          "text": "Understand the task and available information"
        }
      ],
      "correct": 3,
      "explanation": "Before proceeding with Prescriptive Analytics, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Prescriptive Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Ignore errors"
        },
        {
          "key": "B",
          "text": "Check whether the result meets the task"
        },
        {
          "key": "C",
          "text": "Use unrelated concepts"
        },
        {
          "key": "D",
          "text": "Never explain your choice"
        }
      ],
      "correct": 1,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Prescriptive Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "B",
          "text": "Skip the example"
        },
        {
          "key": "C",
          "text": "Explain or demonstrate it with a relevant example"
        },
        {
          "key": "D",
          "text": "Use a future lesson's concept"
        }
      ],
      "correct": 2,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Prescriptive Analytics.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of Prescriptive Analytics",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of Prescriptive Analytics",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of Prescriptive Analytics"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of Prescriptive Analytics",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — REAL-TIME DELIVERY ROUTE OPTIMIZATION",
      "scenario": "A grocery delivery fleet operates 450 electric vans across Mumbai with a 30-minute delivery guarantee.",
      "prompt": "How does prescriptive analytics recommend specific actions: dynamic delivery route re-assignment and batching orders to minimize battery usage and prevent late deliveries?",
      "expectedResponse": "Prescribe optimal dispatch routes and order batching decisions that optimize cost and meet SLAs."
    },
    {
      "id": 2,
      "title": "MISSION 2 — DYNAMIC MARKDOWN RECOMMENDATION",
      "scenario": "A fashion retailer has 15,000 unsold winter coats with spring approaching in 3 weeks.",
      "prompt": "How does prescriptive optimization determine whether a 20% discount now or a 40% clearance sale later maximizes total gross margin recovery?",
      "expectedResponse": "Run optimization simulations to prescribe the exact markdown schedule maximizing margin recovery."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Prescriptive Analytics?",
      "sampleAnswer": "In simple terms, Prescriptive Analytics is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Prescriptive Analytics useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Prescriptive Analytics?",
      "sampleAnswer": "A practical example is when an analytics team uses Prescriptive Analytics to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '3.5': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 3,
  "moduleName": "Analytics Types and Business Metrics",
  "topicKey": "3.5",
  "id": 17,
  "topicTitle": "Metrics, Dimensions and Measures",
  "mode": "Coding/tool practice",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Metrics, Dimensions and Measures?",
      "options": [
        {
          "key": "A",
          "text": "To replace all human decisions"
        },
        {
          "key": "B",
          "text": "To perform or understand Metrics, Dimensions and Measures"
        },
        {
          "key": "C",
          "text": "To make every result correct automatically"
        },
        {
          "key": "D",
          "text": "To skip understanding the problem"
        }
      ],
      "correct": 1,
      "explanation": "The primary objective of learning Metrics, Dimensions and Measures is to perform and understand its principles within business analytics.",
      "hint": "Think about what Metrics, Dimensions and Measures accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Metrics, Dimensions and Measures?",
      "options": [
        {
          "key": "A",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "B",
          "text": "Ignore the task requirements"
        },
        {
          "key": "C",
          "text": "Assume every result is correct"
        },
        {
          "key": "D",
          "text": "Apply Metrics, Dimensions and Measures to a relevant example"
        }
      ],
      "correct": 3,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Metrics, Dimensions and Measures.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Metrics, Dimensions and Measures?",
      "options": [
        {
          "key": "A",
          "text": "Guess without reading"
        },
        {
          "key": "B",
          "text": "Skip checking the result"
        },
        {
          "key": "C",
          "text": "Understand the task and available information"
        },
        {
          "key": "D",
          "text": "Use an unintroduced feature"
        }
      ],
      "correct": 2,
      "explanation": "Before proceeding with Metrics, Dimensions and Measures, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Metrics, Dimensions and Measures?",
      "options": [
        {
          "key": "A",
          "text": "Check whether the result meets the task"
        },
        {
          "key": "B",
          "text": "Ignore errors"
        },
        {
          "key": "C",
          "text": "Use unrelated concepts"
        },
        {
          "key": "D",
          "text": "Never explain your choice"
        }
      ],
      "correct": 0,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Metrics, Dimensions and Measures?",
      "options": [
        {
          "key": "A",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "B",
          "text": "Explain or demonstrate it with a relevant example"
        },
        {
          "key": "C",
          "text": "Skip the example"
        },
        {
          "key": "D",
          "text": "Use a future lesson's concept"
        }
      ],
      "correct": 1,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Metrics, Dimensions and Measures.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — PRACTICE WORKFLOW",
      "prompt": "Order the practice workflow.",
      "tokens": [
        "Read the task",
        "Use the taught syntax/operation",
        "Check the result"
      ],
      "shuffled": [
        "Check the result",
        "Read the task",
        "Use the taught syntax/operation"
      ],
      "expected": [
        "Read the task",
        "Use the taught syntax/operation",
        "Check the result"
      ],
      "hint": "Read task -> apply taught operation -> check result."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — DEBUGGING",
      "prompt": "Debug a lesson-level example.",
      "tokens": [
        "Compare with task",
        "Inspect taught syntax",
        "Correct the specific issue"
      ],
      "shuffled": [
        "Correct the specific issue",
        "Compare with task",
        "Inspect taught syntax"
      ],
      "expected": [
        "Compare with task",
        "Inspect taught syntax",
        "Correct the specific issue"
      ],
      "hint": "Compare, inspect, then correct the identified issue."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — COMPLETE WORKFLOW",
      "prompt": "Complete the workflow.",
      "tokens": [
        "Identify input/source",
        "Apply the taught operation",
        "Validate output"
      ],
      "shuffled": [
        "Validate output",
        "Apply the taught operation",
        "Identify input/source"
      ],
      "expected": [
        "Identify input/source",
        "Apply the taught operation",
        "Validate output"
      ],
      "hint": "Identify source -> apply operation -> validate output."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Lesson concept",
      "meaning": "Syntax or operation taught for Metrics, Dimensions and Measures",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Input",
      "meaning": "Value or data used in the calculation",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Output",
      "meaning": "Result or metric produced by the operation",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Error check",
      "meaning": "Find an incorrect result or formula error",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Validation",
      "meaning": "Confirm the calculated result meets task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — CLASSIFYING E-COMMERCE DATA SCHEMA",
      "scenario": "You are inspecting a customer orders table containing: CustomerID, OrderDate, Country, ProductSubCategory, Quantity, UnitPrice, and TotalRevenue.",
      "prompt": "Correctly classify each field into Dimensions (qualitative slicers: Country, Date, Category) vs Measures (quantitative aggregations: Quantity, UnitPrice, Revenue).",
      "expectedResponse": "Dimensions = Country, OrderDate, ProductSubCategory; Measures = Quantity, UnitPrice, TotalRevenue."
    },
    {
      "id": 2,
      "title": "MISSION 2 — FORMULATING BUSINESS KPIs FROM MEASURES",
      "scenario": "Leadership wants to monitor Average Revenue Per User (ARPU) and Gross Margin Percentage.",
      "prompt": "Define the mathematical formula for these KPIs using base measures (Total Revenue, Unique Customer Count, Total Cost of Goods Sold).",
      "expectedResponse": "ARPU = Total Revenue / Total Unique Customers; Gross Margin % = (Total Revenue - Total Cost) / Total Revenue."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Metrics, Dimensions and Measures?",
      "sampleAnswer": "In simple terms, Metrics, Dimensions and Measures is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Metrics, Dimensions and Measures useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Metrics, Dimensions and Measures?",
      "sampleAnswer": "A practical example is when an analytics team uses Metrics, Dimensions and Measures to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '3.6': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 3,
  "moduleName": "Analytics Types and Business Metrics",
  "topicKey": "3.6",
  "id": 18,
  "topicTitle": "Business Questions and KPIs",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Business Questions and KPIs?",
      "options": [
        {
          "key": "A",
          "text": "To perform or understand Business Questions and KPIs"
        },
        {
          "key": "B",
          "text": "To replace all human decisions"
        },
        {
          "key": "C",
          "text": "To make every result correct automatically"
        },
        {
          "key": "D",
          "text": "To skip understanding the problem"
        }
      ],
      "correct": 0,
      "explanation": "The primary objective of learning Business Questions and KPIs is to perform and understand its principles within business analytics.",
      "hint": "Think about what Business Questions and KPIs accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Business Questions and KPIs?",
      "options": [
        {
          "key": "A",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "B",
          "text": "Ignore the task requirements"
        },
        {
          "key": "C",
          "text": "Apply Business Questions and KPIs to a relevant example"
        },
        {
          "key": "D",
          "text": "Assume every result is correct"
        }
      ],
      "correct": 2,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Business Questions and KPIs.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Business Questions and KPIs?",
      "options": [
        {
          "key": "A",
          "text": "Guess without reading"
        },
        {
          "key": "B",
          "text": "Understand the task and available information"
        },
        {
          "key": "C",
          "text": "Skip checking the result"
        },
        {
          "key": "D",
          "text": "Use an unintroduced feature"
        }
      ],
      "correct": 1,
      "explanation": "Before proceeding with Business Questions and KPIs, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Business Questions and KPIs?",
      "options": [
        {
          "key": "A",
          "text": "Ignore errors"
        },
        {
          "key": "B",
          "text": "Use unrelated concepts"
        },
        {
          "key": "C",
          "text": "Never explain your choice"
        },
        {
          "key": "D",
          "text": "Check whether the result meets the task"
        }
      ],
      "correct": 3,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Business Questions and KPIs?",
      "options": [
        {
          "key": "A",
          "text": "Explain or demonstrate it with a relevant example"
        },
        {
          "key": "B",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "C",
          "text": "Skip the example"
        },
        {
          "key": "D",
          "text": "Use a future lesson's concept"
        }
      ],
      "correct": 0,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Business Questions and KPIs.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of Business Questions and KPIs",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of Business Questions and KPIs",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of Business Questions and KPIs"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of Business Questions and KPIs",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — SAAS BUSINESS HEALTH DASHBOARD",
      "scenario": "The board of directors asks: \"Is our cloud subscription software business healthy and growing sustainably?\".",
      "prompt": "Translate this vague question into 4 concrete, measurable KPIs: Monthly Recurring Revenue (MRR), Customer Churn Rate, Customer Lifetime Value (LTV), and Customer Acquisition Cost (CAC).",
      "expectedResponse": "Track MRR growth rate, net customer churn %, LTV-to-CAC ratio (>3x), and Net Revenue Retention."
    },
    {
      "id": 2,
      "title": "MISSION 2 — MANUFACTURING PLANT EFFICIENCY METRICS",
      "scenario": "An automobile assembly factory wants to reduce vehicle production downtime.",
      "prompt": "Define 3 operational KPIs: Overall Equipment Effectiveness (OEE), Mean Time Between Failures (MTBF), and First-Pass Yield (FPY).",
      "expectedResponse": "Measure OEE for machine availability, MTBF for equipment reliability, and FPY for zero-defect quality."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Business Questions and KPIs?",
      "sampleAnswer": "In simple terms, Business Questions and KPIs is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Business Questions and KPIs useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Business Questions and KPIs?",
      "sampleAnswer": "A practical example is when an analytics team uses Business Questions and KPIs to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '3.7': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 3,
  "moduleName": "Analytics Types and Business Metrics",
  "topicKey": "3.7",
  "id": 19,
  "topicTitle": "Turning a Business Problem into an Analysis Plan",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Turning a Business Problem into an Analysis Plan?",
      "options": [
        {
          "key": "A",
          "text": "To replace all human decisions"
        },
        {
          "key": "B",
          "text": "To make every result correct automatically"
        },
        {
          "key": "C",
          "text": "To skip understanding the problem"
        },
        {
          "key": "D",
          "text": "To perform or understand Turning a Business Problem into an Analysis Plan"
        }
      ],
      "correct": 3,
      "explanation": "The primary objective of learning Turning a Business Problem into an Analysis Plan is to perform and understand its principles within business analytics.",
      "hint": "Think about what Turning a Business Problem into an Analysis Plan accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Turning a Business Problem into an Analysis Plan?",
      "options": [
        {
          "key": "A",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "B",
          "text": "Apply Turning a Business Problem into an Analysis Plan to a relevant example"
        },
        {
          "key": "C",
          "text": "Ignore the task requirements"
        },
        {
          "key": "D",
          "text": "Assume every result is correct"
        }
      ],
      "correct": 1,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Turning a Business Problem into an Analysis Plan.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Turning a Business Problem into an Analysis Plan?",
      "options": [
        {
          "key": "A",
          "text": "Understand the task and available information"
        },
        {
          "key": "B",
          "text": "Guess without reading"
        },
        {
          "key": "C",
          "text": "Skip checking the result"
        },
        {
          "key": "D",
          "text": "Use an unintroduced feature"
        }
      ],
      "correct": 0,
      "explanation": "Before proceeding with Turning a Business Problem into an Analysis Plan, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Turning a Business Problem into an Analysis Plan?",
      "options": [
        {
          "key": "A",
          "text": "Ignore errors"
        },
        {
          "key": "B",
          "text": "Use unrelated concepts"
        },
        {
          "key": "C",
          "text": "Check whether the result meets the task"
        },
        {
          "key": "D",
          "text": "Never explain your choice"
        }
      ],
      "correct": 2,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Turning a Business Problem into an Analysis Plan?",
      "options": [
        {
          "key": "A",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "B",
          "text": "Skip the example"
        },
        {
          "key": "C",
          "text": "Use a future lesson's concept"
        },
        {
          "key": "D",
          "text": "Explain or demonstrate it with a relevant example"
        }
      ],
      "correct": 3,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Turning a Business Problem into an Analysis Plan.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of Turning a Business Problem into an Analysis Plan",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of Turning a Business Problem into an Analysis Plan",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of Turning a Business Problem into an Analysis Plan"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of Turning a Business Problem into an Analysis Plan",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — SCOPING A RATING DROP INVESTIGATION",
      "scenario": "A major food delivery app experiences a drop in restaurant customer ratings from 4.7 to 4.1 over 60 days.",
      "prompt": "Structure a professional analysis plan: (1) Core Problem Statement, (2) Key Hypotheses (cold food, delayed delivery, missing items), (3) Required Data Sources, (4) Timeline & Deliverables.",
      "expectedResponse": "Formulate testable hypotheses on delivery transit time and packaging feedback, query order reviews, and deliver findings within 5 days."
    },
    {
      "id": 2,
      "title": "MISSION 2 — EMPLOYEE ATTRITION SCOPING DOCUMENT",
      "scenario": "A software company experiences 28% annual attrition among senior developers with 3-5 years tenure.",
      "prompt": "Draft an analysis scoping document detailing data tables needed (compensation, manager reviews, commute distance), stakeholder milestones, and confidentiality protocols.",
      "expectedResponse": "Establish project scope, gather anonymized HR records, compare market salary benchmarks, and present retention initiatives."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Turning a Business Problem into an Analysis Plan?",
      "sampleAnswer": "In simple terms, Turning a Business Problem into an Analysis Plan is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Turning a Business Problem into an Analysis Plan useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Turning a Business Problem into an Analysis Plan?",
      "sampleAnswer": "A practical example is when an analytics team uses Turning a Business Problem into an Analysis Plan to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '4.1': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 4,
  "moduleName": "Data Types, Sources and Quality",
  "topicKey": "4.1",
  "id": 20,
  "topicTitle": "Structured, Semi-Structured and Unstructured Data",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Structured, Semi-Structured and Unstructured Data?",
      "options": [
        {
          "key": "A",
          "text": "To replace all human decisions"
        },
        {
          "key": "B",
          "text": "To make every result correct automatically"
        },
        {
          "key": "C",
          "text": "To perform or understand Structured, Semi-Structured and Unstructured Data"
        },
        {
          "key": "D",
          "text": "To skip understanding the problem"
        }
      ],
      "correct": 2,
      "explanation": "The primary objective of learning Structured, Semi-Structured and Unstructured Data is to perform and understand its principles within business analytics.",
      "hint": "Think about what Structured, Semi-Structured and Unstructured Data accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Structured, Semi-Structured and Unstructured Data?",
      "options": [
        {
          "key": "A",
          "text": "Apply Structured, Semi-Structured and Unstructured Data to a relevant example"
        },
        {
          "key": "B",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "C",
          "text": "Ignore the task requirements"
        },
        {
          "key": "D",
          "text": "Assume every result is correct"
        }
      ],
      "correct": 0,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Structured, Semi-Structured and Unstructured Data.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Structured, Semi-Structured and Unstructured Data?",
      "options": [
        {
          "key": "A",
          "text": "Guess without reading"
        },
        {
          "key": "B",
          "text": "Skip checking the result"
        },
        {
          "key": "C",
          "text": "Use an unintroduced feature"
        },
        {
          "key": "D",
          "text": "Understand the task and available information"
        }
      ],
      "correct": 3,
      "explanation": "Before proceeding with Structured, Semi-Structured and Unstructured Data, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Structured, Semi-Structured and Unstructured Data?",
      "options": [
        {
          "key": "A",
          "text": "Ignore errors"
        },
        {
          "key": "B",
          "text": "Check whether the result meets the task"
        },
        {
          "key": "C",
          "text": "Use unrelated concepts"
        },
        {
          "key": "D",
          "text": "Never explain your choice"
        }
      ],
      "correct": 1,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Structured, Semi-Structured and Unstructured Data?",
      "options": [
        {
          "key": "A",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "B",
          "text": "Skip the example"
        },
        {
          "key": "C",
          "text": "Explain or demonstrate it with a relevant example"
        },
        {
          "key": "D",
          "text": "Use a future lesson's concept"
        }
      ],
      "correct": 2,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Structured, Semi-Structured and Unstructured Data.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of Structured, Semi-Structured and Unstructured Data",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of Structured, Semi-Structured and Unstructured Data",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of Structured, Semi-Structured and Unstructured Data"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of Structured, Semi-Structured and Unstructured Data",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — AIRLINE ENTERPRISE DATA CLASSIFICATION",
      "scenario": "An airline stores customer flight bookings, web server event logs, and customer support audio call recordings.",
      "prompt": "Categorize each data asset: Relational SQL booking table (Structured), Flight JSON API response (Semi-Structured), Customer call audio & complaint emails (Unstructured).",
      "expectedResponse": "SQL tables = Structured; JSON logs = Semi-Structured; Call audio/emails = Unstructured."
    },
    {
      "id": 2,
      "title": "MISSION 2 — SOCIAL MEDIA SENTIMENT PIPELINE",
      "scenario": "A marketing team wants to analyze customer sentiment on Instagram and Twitter regarding a new smartphone launch.",
      "prompt": "Explain how unstructured social media text, video reviews, and images are processed, tagged with sentiment labels, and stored into a structured tabular dashboard.",
      "expectedResponse": "Process unstructured comments with NLP sentiment models into structured positive/negative scores for reporting."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Structured, Semi-Structured and Unstructured Data?",
      "sampleAnswer": "In simple terms, Structured, Semi-Structured and Unstructured Data is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Structured, Semi-Structured and Unstructured Data useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Structured, Semi-Structured and Unstructured Data?",
      "sampleAnswer": "A practical example is when an analytics team uses Structured, Semi-Structured and Unstructured Data to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '4.2': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 4,
  "moduleName": "Data Types, Sources and Quality",
  "topicKey": "4.2",
  "id": 21,
  "topicTitle": "Common Data Sources: Files, Databases and Applications",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Common Data Sources: Files, Databases and Applications?",
      "options": [
        {
          "key": "A",
          "text": "To replace all human decisions"
        },
        {
          "key": "B",
          "text": "To perform or understand Common Data Sources: Files, Databases and Applications"
        },
        {
          "key": "C",
          "text": "To make every result correct automatically"
        },
        {
          "key": "D",
          "text": "To skip understanding the problem"
        }
      ],
      "correct": 1,
      "explanation": "The primary objective of learning Common Data Sources: Files, Databases and Applications is to perform and understand its principles within business analytics.",
      "hint": "Think about what Common Data Sources: Files, Databases and Applications accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Common Data Sources: Files, Databases and Applications?",
      "options": [
        {
          "key": "A",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "B",
          "text": "Ignore the task requirements"
        },
        {
          "key": "C",
          "text": "Assume every result is correct"
        },
        {
          "key": "D",
          "text": "Apply Common Data Sources: Files, Databases and Applications to a relevant example"
        }
      ],
      "correct": 3,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Common Data Sources: Files, Databases and Applications.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Common Data Sources: Files, Databases and Applications?",
      "options": [
        {
          "key": "A",
          "text": "Guess without reading"
        },
        {
          "key": "B",
          "text": "Skip checking the result"
        },
        {
          "key": "C",
          "text": "Understand the task and available information"
        },
        {
          "key": "D",
          "text": "Use an unintroduced feature"
        }
      ],
      "correct": 2,
      "explanation": "Before proceeding with Common Data Sources: Files, Databases and Applications, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Common Data Sources: Files, Databases and Applications?",
      "options": [
        {
          "key": "A",
          "text": "Check whether the result meets the task"
        },
        {
          "key": "B",
          "text": "Ignore errors"
        },
        {
          "key": "C",
          "text": "Use unrelated concepts"
        },
        {
          "key": "D",
          "text": "Never explain your choice"
        }
      ],
      "correct": 0,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Common Data Sources: Files, Databases and Applications?",
      "options": [
        {
          "key": "A",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "B",
          "text": "Explain or demonstrate it with a relevant example"
        },
        {
          "key": "C",
          "text": "Skip the example"
        },
        {
          "key": "D",
          "text": "Use a future lesson's concept"
        }
      ],
      "correct": 1,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Common Data Sources: Files, Databases and Applications.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of Common Data Sources: Files, Databases and Applications",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of Common Data Sources: Files, Databases and Applications",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of Common Data Sources: Files, Databases and Applications"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of Common Data Sources: Files, Databases and Applications",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — RETAIL CHAIN MULTI-SOURCE INTEGRATION",
      "scenario": "A retailer operates 60 physical stores using offline POS Excel sheets, an online e-commerce website on MySQL, and customer service tickets in Zendesk.",
      "prompt": "Describe how an analytics engineer extracts data from flat files, relational databases, and REST APIs into a centralized data warehouse for unified reporting.",
      "expectedResponse": "Establish automated ETL connectors from POS files, MySQL replica, and Zendesk API into a central Snowflake warehouse."
    },
    {
      "id": 2,
      "title": "MISSION 2 — REAL-TIME IOT SENSOR DATA INGESTION",
      "scenario": "A smart factory monitors 2,000 temperature and vibration sensors across manufacturing assembly lines.",
      "prompt": "How does streaming data from IoT message queues (MQTT/Kafka) differ from scheduled nightly batch database exports?",
      "expectedResponse": "IoT data requires low-latency streaming ingestion for immediate anomaly detection, whereas batch exports run on periodic schedules."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Common Data Sources: Files, Databases and Applications?",
      "sampleAnswer": "In simple terms, Common Data Sources: Files, Databases and Applications is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Common Data Sources: Files, Databases and Applications useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Common Data Sources: Files, Databases and Applications?",
      "sampleAnswer": "A practical example is when an analytics team uses Common Data Sources: Files, Databases and Applications to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '4.3': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 4,
  "moduleName": "Data Types, Sources and Quality",
  "topicKey": "4.3",
  "id": 22,
  "topicTitle": "CSV, Excel, JSON and Database Tables",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of CSV, Excel, JSON and Database Tables?",
      "options": [
        {
          "key": "A",
          "text": "To perform or understand CSV, Excel, JSON and Database Tables"
        },
        {
          "key": "B",
          "text": "To replace all human decisions"
        },
        {
          "key": "C",
          "text": "To make every result correct automatically"
        },
        {
          "key": "D",
          "text": "To skip understanding the problem"
        }
      ],
      "correct": 0,
      "explanation": "The primary objective of learning CSV, Excel, JSON and Database Tables is to perform and understand its principles within business analytics.",
      "hint": "Think about what CSV, Excel, JSON and Database Tables accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on CSV, Excel, JSON and Database Tables?",
      "options": [
        {
          "key": "A",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "B",
          "text": "Ignore the task requirements"
        },
        {
          "key": "C",
          "text": "Apply CSV, Excel, JSON and Database Tables to a relevant example"
        },
        {
          "key": "D",
          "text": "Assume every result is correct"
        }
      ],
      "correct": 2,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding CSV, Excel, JSON and Database Tables.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying CSV, Excel, JSON and Database Tables?",
      "options": [
        {
          "key": "A",
          "text": "Guess without reading"
        },
        {
          "key": "B",
          "text": "Understand the task and available information"
        },
        {
          "key": "C",
          "text": "Skip checking the result"
        },
        {
          "key": "D",
          "text": "Use an unintroduced feature"
        }
      ],
      "correct": 1,
      "explanation": "Before proceeding with CSV, Excel, JSON and Database Tables, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning CSV, Excel, JSON and Database Tables?",
      "options": [
        {
          "key": "A",
          "text": "Ignore errors"
        },
        {
          "key": "B",
          "text": "Use unrelated concepts"
        },
        {
          "key": "C",
          "text": "Never explain your choice"
        },
        {
          "key": "D",
          "text": "Check whether the result meets the task"
        }
      ],
      "correct": 3,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of CSV, Excel, JSON and Database Tables?",
      "options": [
        {
          "key": "A",
          "text": "Explain or demonstrate it with a relevant example"
        },
        {
          "key": "B",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "C",
          "text": "Skip the example"
        },
        {
          "key": "D",
          "text": "Use a future lesson's concept"
        }
      ],
      "correct": 0,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of CSV, Excel, JSON and Database Tables.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of CSV, Excel, JSON and Database Tables",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of CSV, Excel, JSON and Database Tables",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of CSV, Excel, JSON and Database Tables"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of CSV, Excel, JSON and Database Tables",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — SELECTING THE OPTIMAL DATA FORMAT",
      "scenario": "You are sharing a dataset of 8 Million customer transaction records with the machine learning team for automated training.",
      "prompt": "Explain why CSV or database tables are preferred over multi-tab Excel files (.xlsx) which fail due to the 1,048,576 row limit and heavy formatting overhead.",
      "expectedResponse": "Use CSV or database tables because Excel cannot exceed 1,048,576 rows and adds unneeded file bloat."
    },
    {
      "id": 2,
      "title": "MISSION 2 — FLATTENING NESTED JSON ORDERS",
      "scenario": "A weather API returns hierarchical JSON containing city coordinates, hourly forecasts, and arrays of weather alerts.",
      "prompt": "Detail how you parse and flatten nested JSON arrays into clean rectangular rows and columns for business intelligence analysis in Power BI or Excel.",
      "expectedResponse": "Use Power Query or Python json_normalize to expand nested arrays into relational rows with parent keys."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define CSV, Excel, JSON and Database Tables?",
      "sampleAnswer": "In simple terms, CSV, Excel, JSON and Database Tables is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is CSV, Excel, JSON and Database Tables useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of CSV, Excel, JSON and Database Tables?",
      "sampleAnswer": "A practical example is when an analytics team uses CSV, Excel, JSON and Database Tables to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '4.4': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 4,
  "moduleName": "Data Types, Sources and Quality",
  "topicKey": "4.4",
  "id": 23,
  "topicTitle": "Data Types and Schemas",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Data Types and Schemas?",
      "options": [
        {
          "key": "A",
          "text": "To replace all human decisions"
        },
        {
          "key": "B",
          "text": "To make every result correct automatically"
        },
        {
          "key": "C",
          "text": "To skip understanding the problem"
        },
        {
          "key": "D",
          "text": "To perform or understand Data Types and Schemas"
        }
      ],
      "correct": 3,
      "explanation": "The primary objective of learning Data Types and Schemas is to perform and understand its principles within business analytics.",
      "hint": "Think about what Data Types and Schemas accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Data Types and Schemas?",
      "options": [
        {
          "key": "A",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "B",
          "text": "Apply Data Types and Schemas to a relevant example"
        },
        {
          "key": "C",
          "text": "Ignore the task requirements"
        },
        {
          "key": "D",
          "text": "Assume every result is correct"
        }
      ],
      "correct": 1,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Data Types and Schemas.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Data Types and Schemas?",
      "options": [
        {
          "key": "A",
          "text": "Understand the task and available information"
        },
        {
          "key": "B",
          "text": "Guess without reading"
        },
        {
          "key": "C",
          "text": "Skip checking the result"
        },
        {
          "key": "D",
          "text": "Use an unintroduced feature"
        }
      ],
      "correct": 0,
      "explanation": "Before proceeding with Data Types and Schemas, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Data Types and Schemas?",
      "options": [
        {
          "key": "A",
          "text": "Ignore errors"
        },
        {
          "key": "B",
          "text": "Use unrelated concepts"
        },
        {
          "key": "C",
          "text": "Check whether the result meets the task"
        },
        {
          "key": "D",
          "text": "Never explain your choice"
        }
      ],
      "correct": 2,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Data Types and Schemas?",
      "options": [
        {
          "key": "A",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "B",
          "text": "Skip the example"
        },
        {
          "key": "C",
          "text": "Use a future lesson's concept"
        },
        {
          "key": "D",
          "text": "Explain or demonstrate it with a relevant example"
        }
      ],
      "correct": 3,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Data Types and Schemas.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of Data Types and Schemas",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of Data Types and Schemas",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of Data Types and Schemas"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of Data Types and Schemas",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — TROUBLESHOOTING SQL DATA TYPE CONVERSION ERROR",
      "scenario": "A financial calculation query fails with \"Operator does not exist: varchar + integer\" because order amounts were imported with currency symbols ($499.00).",
      "prompt": "Explain the importance of data types (VARCHAR vs NUMERIC/DECIMAL) and how removing non-numeric characters and casting allows arithmetic operations.",
      "expectedResponse": "Clean out currency symbols and cast text fields to DECIMAL(10,2) to enable accurate numerical aggregations."
    },
    {
      "id": 2,
      "title": "MISSION 2 — DESIGNING A CLEAN E-COMMERCE TABLE SCHEMA",
      "scenario": "You are designing the schema for an online bookstore order transactions table.",
      "prompt": "Specify the proper data types for: OrderID (INT/UUID), OrderTimestamp (TIMESTAMP), CustomerEmail (VARCHAR), IsDiscountApplied (BOOLEAN), and TotalPaid (DECIMAL).",
      "expectedResponse": "Use INT for primary key, TIMESTAMP for dates, VARCHAR for email, BOOLEAN for flags, and DECIMAL for money."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Data Types and Schemas?",
      "sampleAnswer": "In simple terms, Data Types and Schemas is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Data Types and Schemas useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Data Types and Schemas?",
      "sampleAnswer": "A practical example is when an analytics team uses Data Types and Schemas to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '4.5': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 4,
  "moduleName": "Data Types, Sources and Quality",
  "topicKey": "4.5",
  "id": 24,
  "topicTitle": "Missing Values and Duplicate Records",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Missing Values and Duplicate Records?",
      "options": [
        {
          "key": "A",
          "text": "To replace all human decisions"
        },
        {
          "key": "B",
          "text": "To make every result correct automatically"
        },
        {
          "key": "C",
          "text": "To perform or understand Missing Values and Duplicate Records"
        },
        {
          "key": "D",
          "text": "To skip understanding the problem"
        }
      ],
      "correct": 2,
      "explanation": "The primary objective of learning Missing Values and Duplicate Records is to perform and understand its principles within business analytics.",
      "hint": "Think about what Missing Values and Duplicate Records accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Missing Values and Duplicate Records?",
      "options": [
        {
          "key": "A",
          "text": "Apply Missing Values and Duplicate Records to a relevant example"
        },
        {
          "key": "B",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "C",
          "text": "Ignore the task requirements"
        },
        {
          "key": "D",
          "text": "Assume every result is correct"
        }
      ],
      "correct": 0,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Missing Values and Duplicate Records.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Missing Values and Duplicate Records?",
      "options": [
        {
          "key": "A",
          "text": "Guess without reading"
        },
        {
          "key": "B",
          "text": "Skip checking the result"
        },
        {
          "key": "C",
          "text": "Use an unintroduced feature"
        },
        {
          "key": "D",
          "text": "Understand the task and available information"
        }
      ],
      "correct": 3,
      "explanation": "Before proceeding with Missing Values and Duplicate Records, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Missing Values and Duplicate Records?",
      "options": [
        {
          "key": "A",
          "text": "Ignore errors"
        },
        {
          "key": "B",
          "text": "Check whether the result meets the task"
        },
        {
          "key": "C",
          "text": "Use unrelated concepts"
        },
        {
          "key": "D",
          "text": "Never explain your choice"
        }
      ],
      "correct": 1,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Missing Values and Duplicate Records?",
      "options": [
        {
          "key": "A",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "B",
          "text": "Skip the example"
        },
        {
          "key": "C",
          "text": "Explain or demonstrate it with a relevant example"
        },
        {
          "key": "D",
          "text": "Use a future lesson's concept"
        }
      ],
      "correct": 2,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Missing Values and Duplicate Records.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of Missing Values and Duplicate Records",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of Missing Values and Duplicate Records",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of Missing Values and Duplicate Records"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of Missing Values and Duplicate Records",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — HANDLING MISSING CUSTOMER INCOMES",
      "scenario": "In a bank loan dataset of 100,000 applicants, 7% of records have null values in the \"Annual Income\" field.",
      "prompt": "Evaluate strategies: (1) Deleting rows (loss of data), (2) Imputing with median income based on age and occupation, (3) Creating an \"Income Unknown\" indicator flag.",
      "expectedResponse": "Impute missing values using subgroup median (by profession) or create a missing indicator flag to preserve sample size."
    },
    {
      "id": 2,
      "title": "MISSION 2 — DEDUPLICATING CRM MARKETING LEADS",
      "scenario": "A promotional campaign generates duplicate lead records when impatient users click the \"Submit\" button multiple times within 30 seconds.",
      "prompt": "Formulate a deduplication rule using composite keys (Email Address + PhoneNumber) and timestamp ranking to retain only the earliest submission.",
      "expectedResponse": "Group by Email and Phone, then retain the record with the minimum timestamp to remove accidental double-clicks."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Missing Values and Duplicate Records?",
      "sampleAnswer": "In simple terms, Missing Values and Duplicate Records is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Missing Values and Duplicate Records useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Missing Values and Duplicate Records?",
      "sampleAnswer": "A practical example is when an analytics team uses Missing Values and Duplicate Records to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '4.6': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 4,
  "moduleName": "Data Types, Sources and Quality",
  "topicKey": "4.6",
  "id": 25,
  "topicTitle": "Accuracy, Completeness and Consistency",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Accuracy, Completeness and Consistency?",
      "options": [
        {
          "key": "A",
          "text": "To replace all human decisions"
        },
        {
          "key": "B",
          "text": "To perform or understand Accuracy, Completeness and Consistency"
        },
        {
          "key": "C",
          "text": "To make every result correct automatically"
        },
        {
          "key": "D",
          "text": "To skip understanding the problem"
        }
      ],
      "correct": 1,
      "explanation": "The primary objective of learning Accuracy, Completeness and Consistency is to perform and understand its principles within business analytics.",
      "hint": "Think about what Accuracy, Completeness and Consistency accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Accuracy, Completeness and Consistency?",
      "options": [
        {
          "key": "A",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "B",
          "text": "Ignore the task requirements"
        },
        {
          "key": "C",
          "text": "Assume every result is correct"
        },
        {
          "key": "D",
          "text": "Apply Accuracy, Completeness and Consistency to a relevant example"
        }
      ],
      "correct": 3,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Accuracy, Completeness and Consistency.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Accuracy, Completeness and Consistency?",
      "options": [
        {
          "key": "A",
          "text": "Guess without reading"
        },
        {
          "key": "B",
          "text": "Skip checking the result"
        },
        {
          "key": "C",
          "text": "Understand the task and available information"
        },
        {
          "key": "D",
          "text": "Use an unintroduced feature"
        }
      ],
      "correct": 2,
      "explanation": "Before proceeding with Accuracy, Completeness and Consistency, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Accuracy, Completeness and Consistency?",
      "options": [
        {
          "key": "A",
          "text": "Check whether the result meets the task"
        },
        {
          "key": "B",
          "text": "Ignore errors"
        },
        {
          "key": "C",
          "text": "Use unrelated concepts"
        },
        {
          "key": "D",
          "text": "Never explain your choice"
        }
      ],
      "correct": 0,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Accuracy, Completeness and Consistency?",
      "options": [
        {
          "key": "A",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "B",
          "text": "Explain or demonstrate it with a relevant example"
        },
        {
          "key": "C",
          "text": "Skip the example"
        },
        {
          "key": "D",
          "text": "Use a future lesson's concept"
        }
      ],
      "correct": 1,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Accuracy, Completeness and Consistency.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of Accuracy, Completeness and Consistency",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of Accuracy, Completeness and Consistency",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of Accuracy, Completeness and Consistency"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of Accuracy, Completeness and Consistency",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — DATA QUALITY AUDIT FOR EXECUTIVE BOARD",
      "scenario": "Before presenting annual sales to the board, you find inconsistent state abbreviations (\"MH\", \"Maharashtra\", \"Mah.\") and impossible order dates (\"1900-01-01\").",
      "prompt": "Explain how data standardization and domain boundary validation checks guarantee reporting accuracy and board-level credibility.",
      "expectedResponse": "Standardize state naming against an ISO lookup table and filter out default placeholder dates."
    },
    {
      "id": 2,
      "title": "MISSION 2 — HEALTHCARE PATIENT RECORD COMPLETENESS",
      "scenario": "A health insurance company audits hospital claim submissions before paying claims.",
      "prompt": "Describe completeness rules verifying that every patient admission has a matching doctor diagnostic code, discharge timestamp, and itemized billing ledger.",
      "expectedResponse": "Execute automated relational checks ensuring foreign key completeness between diagnosis codes and billing ledgers."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Accuracy, Completeness and Consistency?",
      "sampleAnswer": "In simple terms, Accuracy, Completeness and Consistency is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Accuracy, Completeness and Consistency useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Accuracy, Completeness and Consistency?",
      "sampleAnswer": "A practical example is when an analytics team uses Accuracy, Completeness and Consistency to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
  '4.7': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 4,
  "moduleName": "Data Types, Sources and Quality",
  "topicKey": "4.7",
  "id": 26,
  "topicTitle": "Data Quality Checks and Documentation",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the main purpose of Data Quality Checks and Documentation?",
      "options": [
        {
          "key": "A",
          "text": "To perform or understand Data Quality Checks and Documentation"
        },
        {
          "key": "B",
          "text": "To replace all human decisions"
        },
        {
          "key": "C",
          "text": "To make every result correct automatically"
        },
        {
          "key": "D",
          "text": "To skip understanding the problem"
        }
      ],
      "correct": 0,
      "explanation": "The primary objective of learning Data Quality Checks and Documentation is to perform and understand its principles within business analytics.",
      "hint": "Think about what Data Quality Checks and Documentation accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Data Quality Checks and Documentation?",
      "options": [
        {
          "key": "A",
          "text": "Use an unrelated advanced topic"
        },
        {
          "key": "B",
          "text": "Ignore the task requirements"
        },
        {
          "key": "C",
          "text": "Apply Data Quality Checks and Documentation to a relevant example"
        },
        {
          "key": "D",
          "text": "Assume every result is correct"
        }
      ],
      "correct": 2,
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Data Quality Checks and Documentation.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Data Quality Checks and Documentation?",
      "options": [
        {
          "key": "A",
          "text": "Guess without reading"
        },
        {
          "key": "B",
          "text": "Understand the task and available information"
        },
        {
          "key": "C",
          "text": "Skip checking the result"
        },
        {
          "key": "D",
          "text": "Use an unintroduced feature"
        }
      ],
      "correct": 1,
      "explanation": "Before proceeding with Data Quality Checks and Documentation, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Data Quality Checks and Documentation?",
      "options": [
        {
          "key": "A",
          "text": "Ignore errors"
        },
        {
          "key": "B",
          "text": "Use unrelated concepts"
        },
        {
          "key": "C",
          "text": "Never explain your choice"
        },
        {
          "key": "D",
          "text": "Check whether the result meets the task"
        }
      ],
      "correct": 3,
      "explanation": "Validating outcomes against requirements ensures high data quality and correct conclusions.",
      "hint": "Verify results to ensure accuracy."
    },
    {
      "id": 5,
      "question": "How can you show understanding of Data Quality Checks and Documentation?",
      "options": [
        {
          "key": "A",
          "text": "Explain or demonstrate it with a relevant example"
        },
        {
          "key": "B",
          "text": "Memorize an unrelated definition"
        },
        {
          "key": "C",
          "text": "Skip the example"
        },
        {
          "key": "D",
          "text": "Use a future lesson's concept"
        }
      ],
      "correct": 0,
      "explanation": "Demonstrating understanding requires clear explanation and concrete demonstration of Data Quality Checks and Documentation.",
      "hint": "Clear explanation and working examples prove mastery."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "CHALLENGE 1 — ARRANGE STEPS",
      "prompt": "Arrange the steps for a task about this topic.",
      "tokens": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "shuffled": [
        "Apply it to an example",
        "Understand the question",
        "Identify the lesson concept"
      ],
      "expected": [
        "Understand the question",
        "Identify the lesson concept",
        "Apply it to an example"
      ],
      "hint": "Understand -> identify -> apply."
    },
    {
      "id": 2,
      "title": "CHALLENGE 2 — SELECT BEST CARD",
      "prompt": "Pick the best card for this topic.",
      "tokens": [
        "A relevant example of Data Quality Checks and Documentation",
        "An unrelated advanced topic",
        "An unchecked guess"
      ],
      "shuffled": [
        "An unchecked guess",
        "A relevant example of Data Quality Checks and Documentation",
        "An unrelated advanced topic"
      ],
      "expected": [
        "A relevant example of Data Quality Checks and Documentation"
      ],
      "hint": "Choose the lesson-related example."
    },
    {
      "id": 3,
      "title": "CHALLENGE 3 — LEARNING SEQUENCE",
      "prompt": "Complete the learning sequence.",
      "tokens": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "shuffled": [
        "Explain why it fits",
        "Read the scenario",
        "Choose the taught concept"
      ],
      "expected": [
        "Read the scenario",
        "Choose the taught concept",
        "Explain why it fits"
      ],
      "hint": "Read -> choose -> explain."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Key idea",
      "meaning": "Central concept of Data Quality Checks and Documentation",
      "cls": "c1"
    },
    {
      "id": 2,
      "snippet": "Purpose",
      "meaning": "Why the concept/operation is useful",
      "cls": "c2"
    },
    {
      "id": 3,
      "snippet": "Example",
      "meaning": "A lesson-related real-world example",
      "cls": "c3"
    },
    {
      "id": 4,
      "snippet": "Input/source",
      "meaning": "Information or item the task starts with",
      "cls": "c4"
    },
    {
      "id": 5,
      "snippet": "Check",
      "meaning": "Confirm the answer fits the business task",
      "cls": "c5"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "MISSION 1 — AUTOMATED PRE-INGESTION QUALITY GATES",
      "scenario": "A data warehouse receives nightly batch files containing 2 Million sales rows from international subsidiaries.",
      "prompt": "Design automated validation tests (Null check, Primary key uniqueness check, Range check on prices > 0, Foreign key constraint check) that trigger alerts before ingestion.",
      "expectedResponse": "Set automated assertion tests that halt ingestion and notify engineers if price < 0 or duplicate IDs exceed threshold."
    },
    {
      "id": 2,
      "title": "MISSION 2 — AUTHORING AN ENTERPRISE DATA DICTIONARY",
      "scenario": "New analysts frequently misinterpret the \"Order_Status\" column, confusing \"Processing\" with \"Dispatched\".",
      "prompt": "Create a standardized data dictionary entry: Column Name, Business Definition, Source System, Data Type, Allowed Enum Values, and Update Frequency.",
      "expectedResponse": "Document clear definitions and allowed enum values in a searchable catalog to prevent cross-team metric confusion."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How would you define Data Quality Checks and Documentation?",
      "sampleAnswer": "In simple terms, Data Quality Checks and Documentation is an essential concept in data analytics used to understand and interpret business information accurately."
    },
    {
      "id": 2,
      "question": "Why is Data Quality Checks and Documentation useful in real-world business analytics?",
      "sampleAnswer": "It provides structured clarity, reduces errors in data interpretation, and directly enables data-driven decision making."
    },
    {
      "id": 3,
      "question": "Can you give an example of Data Quality Checks and Documentation?",
      "sampleAnswer": "A practical example is when an analytics team uses Data Quality Checks and Documentation to transform raw numbers into meaningful business indicators that guide operational strategy."
    }
  ]
},
};

// Also index by integer id (1..26) for easy numeric lookup
export const TAB1_QUESTION_BANK_BY_ID: Record<number, TopicQuestionBank> = {
  1: TAB1_QUESTION_BANK['1.1'],
  2: TAB1_QUESTION_BANK['1.2'],
  3: TAB1_QUESTION_BANK['1.3'],
  4: TAB1_QUESTION_BANK['1.4'],
  5: TAB1_QUESTION_BANK['1.5'],
  6: TAB1_QUESTION_BANK['1.6'],
  7: TAB1_QUESTION_BANK['2.1'],
  8: TAB1_QUESTION_BANK['2.2'],
  9: TAB1_QUESTION_BANK['2.3'],
  10: TAB1_QUESTION_BANK['2.4'],
  11: TAB1_QUESTION_BANK['2.5'],
  12: TAB1_QUESTION_BANK['2.6'],
  13: TAB1_QUESTION_BANK['3.1'],
  14: TAB1_QUESTION_BANK['3.2'],
  15: TAB1_QUESTION_BANK['3.3'],
  16: TAB1_QUESTION_BANK['3.4'],
  17: TAB1_QUESTION_BANK['3.5'],
  18: TAB1_QUESTION_BANK['3.6'],
  19: TAB1_QUESTION_BANK['3.7'],
  20: TAB1_QUESTION_BANK['4.1'],
  21: TAB1_QUESTION_BANK['4.2'],
  22: TAB1_QUESTION_BANK['4.3'],
  23: TAB1_QUESTION_BANK['4.4'],
  24: TAB1_QUESTION_BANK['4.5'],
  25: TAB1_QUESTION_BANK['4.6'],
  26: TAB1_QUESTION_BANK['4.7'],
};
