// ═══════════════════════════════════════════════════════════════════════════════
// TAB 1: DATA ANALYTICS FOUNDATIONS — 26 TOPICS QUESTION BANK
// 100% Faithful to Future IT Industry Master Syllabus
// Covers Modules 1, 2, 3, 4 with 4 Games + Mock Interview per topic
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
          "text": "To perform or understand What Is Data?"
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
      "explanation": "The primary objective of learning What Is Data? is to perform and understand its principles within business analytics.",
      "hint": "Think about what What Is Data? accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on What Is Data??",
      "options": [
        {
          "key": "A",
          "text": "Apply What Is Data? to a relevant example"
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
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding What Is Data?.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying What Is Data??",
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
      "title": "MISSION 1 — WHAT IS DATA? IN PRACTICE",
      "prompt": "A team faces a real situation related to \"What Is Data?\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around What Is Data?. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"What Is Data?\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply What Is Data? to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "Apply What Is Data Analytics? to a relevant example"
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
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding What Is Data Analytics?.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying What Is Data Analytics??",
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
      "explanation": "Before proceeding with What Is Data Analytics?, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning What Is Data Analytics??",
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
      "title": "MISSION 1 — WHAT IS DATA ANALYTICS? IN PRACTICE",
      "prompt": "A team faces a real situation related to \"What Is Data Analytics?\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around What Is Data Analytics?. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"What Is Data Analytics?\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply What Is Data Analytics? to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "To perform or understand Why Businesses Need Data Analytics"
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
      "explanation": "The primary objective of learning Why Businesses Need Data Analytics is to perform and understand its principles within business analytics.",
      "hint": "Think about what Why Businesses Need Data Analytics accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Why Businesses Need Data Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Apply Why Businesses Need Data Analytics to a relevant example"
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
      "question": "How can you show understanding of Why Businesses Need Data Analytics?",
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
      "title": "MISSION 1 — WHY BUSINESSES NEED DATA ANALYTICS IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Why Businesses Need Data Analytics\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Why Businesses Need Data Analytics. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Why Businesses Need Data Analytics\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Why Businesses Need Data Analytics to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "To perform or understand Real-Life Examples of Data Analytics"
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
      "explanation": "Before proceeding with Real-Life Examples of Data Analytics, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Real-Life Examples of Data Analytics?",
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
      "question": "How can you show understanding of Real-Life Examples of Data Analytics?",
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
      "title": "MISSION 1 — REAL-LIFE EXAMPLES OF DATA ANALYTICS IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Real-Life Examples of Data Analytics\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Real-Life Examples of Data Analytics. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Real-Life Examples of Data Analytics\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Real-Life Examples of Data Analytics to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "To perform or understand Data vs Information vs Insight"
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
      "explanation": "The primary objective of learning Data vs Information vs Insight is to perform and understand its principles within business analytics.",
      "hint": "Think about what Data vs Information vs Insight accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Data vs Information vs Insight?",
      "options": [
        {
          "key": "A",
          "text": "Apply Data vs Information vs Insight to a relevant example"
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
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Data vs Information vs Insight.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Data vs Information vs Insight?",
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
      "title": "MISSION 1 — DATA VS INFORMATION VS INSIGHT IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Data vs Information vs Insight\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Data vs Information vs Insight. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Data vs Information vs Insight\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Data vs Information vs Insight to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "Apply The Role of Data in Decision-Making to a relevant example"
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
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding The Role of Data in Decision-Making.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying The Role of Data in Decision-Making?",
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
      "explanation": "Before proceeding with The Role of Data in Decision-Making, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning The Role of Data in Decision-Making?",
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
      "title": "MISSION 1 — THE ROLE OF DATA IN DECISION-MAKING IN PRACTICE",
      "prompt": "A team faces a real situation related to \"The Role of Data in Decision-Making\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around The Role of Data in Decision-Making. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"The Role of Data in Decision-Making\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply The Role of Data in Decision-Making to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "To perform or understand Data Analyst Roles and Responsibilities"
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
      "explanation": "The primary objective of learning Data Analyst Roles and Responsibilities is to perform and understand its principles within business analytics.",
      "hint": "Think about what Data Analyst Roles and Responsibilities accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Data Analyst Roles and Responsibilities?",
      "options": [
        {
          "key": "A",
          "text": "Apply Data Analyst Roles and Responsibilities to a relevant example"
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
      "question": "How can you show understanding of Data Analyst Roles and Responsibilities?",
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
      "title": "MISSION 1 — DATA ANALYST ROLES AND RESPONSIBILITIES IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Data Analyst Roles and Responsibilities\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Data Analyst Roles and Responsibilities. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Data Analyst Roles and Responsibilities\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Data Analyst Roles and Responsibilities to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "To perform or understand Data Analyst vs Data Scientist vs Data Engineer"
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
      "explanation": "Before proceeding with Data Analyst vs Data Scientist vs Data Engineer, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Data Analyst vs Data Scientist vs Data Engineer?",
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
      "question": "How can you show understanding of Data Analyst vs Data Scientist vs Data Engineer?",
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
      "title": "MISSION 1 — DATA ANALYST VS DATA SCIENTIST VS DATA ENGINEER IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Data Analyst vs Data Scientist vs Data Engineer\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Data Analyst vs Data Scientist vs Data Engineer. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Data Analyst vs Data Scientist vs Data Engineer\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Data Analyst vs Data Scientist vs Data Engineer to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "To perform or understand Common Tasks in a Data Analyst’s Day"
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
      "explanation": "The primary objective of learning Common Tasks in a Data Analyst’s Day is to perform and understand its principles within business analytics.",
      "hint": "Think about what Common Tasks in a Data Analyst’s Day accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Common Tasks in a Data Analyst’s Day?",
      "options": [
        {
          "key": "A",
          "text": "Apply Common Tasks in a Data Analyst’s Day to a relevant example"
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
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Common Tasks in a Data Analyst’s Day.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Common Tasks in a Data Analyst’s Day?",
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
      "title": "MISSION 1 — COMMON TASKS IN A DATA ANALYST’S DAY IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Common Tasks in a Data Analyst’s Day\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Common Tasks in a Data Analyst’s Day. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Common Tasks in a Data Analyst’s Day\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Common Tasks in a Data Analyst’s Day to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "Apply Analytics Lifecycle: From Question to Action to a relevant example"
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
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Analytics Lifecycle: From Question to Action.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Analytics Lifecycle: From Question to Action?",
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
      "explanation": "Before proceeding with Analytics Lifecycle: From Question to Action, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Analytics Lifecycle: From Question to Action?",
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
      "title": "MISSION 1 — ANALYTICS LIFECYCLE: FROM QUESTION TO ACTION IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Analytics Lifecycle: From Question to Action\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Analytics Lifecycle: From Question to Action. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Analytics Lifecycle: From Question to Action\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Analytics Lifecycle: From Question to Action to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "To perform or understand Working with Stakeholders"
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
      "explanation": "The primary objective of learning Working with Stakeholders is to perform and understand its principles within business analytics.",
      "hint": "Think about what Working with Stakeholders accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Working with Stakeholders?",
      "options": [
        {
          "key": "A",
          "text": "Apply Working with Stakeholders to a relevant example"
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
      "question": "How can you show understanding of Working with Stakeholders?",
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
      "title": "MISSION 1 — WORKING WITH STAKEHOLDERS IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Working with Stakeholders\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Working with Stakeholders. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Working with Stakeholders\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Working with Stakeholders to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "To perform or understand Ethics and Professional Responsibility"
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
      "explanation": "Before proceeding with Ethics and Professional Responsibility, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Ethics and Professional Responsibility?",
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
      "question": "How can you show understanding of Ethics and Professional Responsibility?",
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
      "title": "MISSION 1 — ETHICS AND PROFESSIONAL RESPONSIBILITY IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Ethics and Professional Responsibility\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Ethics and Professional Responsibility. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Ethics and Professional Responsibility\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Ethics and Professional Responsibility to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "To perform or understand Descriptive Analytics"
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
      "explanation": "The primary objective of learning Descriptive Analytics is to perform and understand its principles within business analytics.",
      "hint": "Think about what Descriptive Analytics accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Descriptive Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Apply Descriptive Analytics to a relevant example"
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
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Descriptive Analytics.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Descriptive Analytics?",
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
      "title": "MISSION 1 — DESCRIPTIVE ANALYTICS IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Descriptive Analytics\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Descriptive Analytics. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Descriptive Analytics\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Descriptive Analytics to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "Apply Diagnostic Analytics to a relevant example"
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
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Diagnostic Analytics.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Diagnostic Analytics?",
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
      "explanation": "Before proceeding with Diagnostic Analytics, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Diagnostic Analytics?",
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
      "title": "MISSION 1 — DIAGNOSTIC ANALYTICS IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Diagnostic Analytics\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Diagnostic Analytics. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Diagnostic Analytics\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Diagnostic Analytics to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "To perform or understand Predictive Analytics"
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
      "explanation": "The primary objective of learning Predictive Analytics is to perform and understand its principles within business analytics.",
      "hint": "Think about what Predictive Analytics accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Predictive Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Apply Predictive Analytics to a relevant example"
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
      "question": "How can you show understanding of Predictive Analytics?",
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
      "title": "MISSION 1 — PREDICTIVE ANALYTICS IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Predictive Analytics\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Predictive Analytics. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Predictive Analytics\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Predictive Analytics to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "To perform or understand Prescriptive Analytics"
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
      "explanation": "Before proceeding with Prescriptive Analytics, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Prescriptive Analytics?",
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
      "question": "How can you show understanding of Prescriptive Analytics?",
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
      "title": "MISSION 1 — PRESCRIPTIVE ANALYTICS IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Prescriptive Analytics\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Prescriptive Analytics. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Prescriptive Analytics\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Prescriptive Analytics to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "To perform or understand Metrics, Dimensions and Measures"
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
      "explanation": "The primary objective of learning Metrics, Dimensions and Measures is to perform and understand its principles within business analytics.",
      "hint": "Think about what Metrics, Dimensions and Measures accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Metrics, Dimensions and Measures?",
      "options": [
        {
          "key": "A",
          "text": "Apply Metrics, Dimensions and Measures to a relevant example"
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
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Metrics, Dimensions and Measures.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Metrics, Dimensions and Measures?",
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
      "title": "MISSION 1 — METRICS, DIMENSIONS AND MEASURES IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Metrics, Dimensions and Measures\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Metrics, Dimensions and Measures. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Metrics, Dimensions and Measures\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Metrics, Dimensions and Measures to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "Apply Business Questions and KPIs to a relevant example"
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
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Business Questions and KPIs.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Business Questions and KPIs?",
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
      "explanation": "Before proceeding with Business Questions and KPIs, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Business Questions and KPIs?",
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
      "title": "MISSION 1 — BUSINESS QUESTIONS AND KPIS IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Business Questions and KPIs\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Business Questions and KPIs. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Business Questions and KPIs\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Business Questions and KPIs to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "To perform or understand Turning a Business Problem into an Analysis Plan"
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
      "explanation": "The primary objective of learning Turning a Business Problem into an Analysis Plan is to perform and understand its principles within business analytics.",
      "hint": "Think about what Turning a Business Problem into an Analysis Plan accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Turning a Business Problem into an Analysis Plan?",
      "options": [
        {
          "key": "A",
          "text": "Apply Turning a Business Problem into an Analysis Plan to a relevant example"
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
      "question": "How can you show understanding of Turning a Business Problem into an Analysis Plan?",
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
      "title": "MISSION 1 — TURNING A BUSINESS PROBLEM INTO AN ANALYSIS PLAN IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Turning a Business Problem into an Analysis Plan\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Turning a Business Problem into an Analysis Plan. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Turning a Business Problem into an Analysis Plan\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Turning a Business Problem into an Analysis Plan to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "To perform or understand Structured, Semi-Structured and Unstructured Data"
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
      "explanation": "Before proceeding with Structured, Semi-Structured and Unstructured Data, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Structured, Semi-Structured and Unstructured Data?",
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
      "question": "How can you show understanding of Structured, Semi-Structured and Unstructured Data?",
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
      "title": "MISSION 1 — STRUCTURED, SEMI-STRUCTURED AND UNSTRUCTURED DATA IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Structured, Semi-Structured and Unstructured Data\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Structured, Semi-Structured and Unstructured Data. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Structured, Semi-Structured and Unstructured Data\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Structured, Semi-Structured and Unstructured Data to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "To perform or understand Common Data Sources: Files, Databases and Applications"
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
      "explanation": "The primary objective of learning Common Data Sources: Files, Databases and Applications is to perform and understand its principles within business analytics.",
      "hint": "Think about what Common Data Sources: Files, Databases and Applications accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Common Data Sources: Files, Databases and Applications?",
      "options": [
        {
          "key": "A",
          "text": "Apply Common Data Sources: Files, Databases and Applications to a relevant example"
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
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Common Data Sources: Files, Databases and Applications.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Common Data Sources: Files, Databases and Applications?",
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
      "title": "MISSION 1 — COMMON DATA SOURCES: FILES, DATABASES AND APPLICATIONS IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Common Data Sources: Files, Databases and Applications\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Common Data Sources: Files, Databases and Applications. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Common Data Sources: Files, Databases and Applications\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Common Data Sources: Files, Databases and Applications to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "Apply CSV, Excel, JSON and Database Tables to a relevant example"
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
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding CSV, Excel, JSON and Database Tables.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying CSV, Excel, JSON and Database Tables?",
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
      "explanation": "Before proceeding with CSV, Excel, JSON and Database Tables, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning CSV, Excel, JSON and Database Tables?",
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
      "title": "MISSION 1 — CSV, EXCEL, JSON AND DATABASE TABLES IN PRACTICE",
      "prompt": "A team faces a real situation related to \"CSV, Excel, JSON and Database Tables\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around CSV, Excel, JSON and Database Tables. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"CSV, Excel, JSON and Database Tables\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply CSV, Excel, JSON and Database Tables to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "To perform or understand Data Types and Schemas"
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
      "explanation": "The primary objective of learning Data Types and Schemas is to perform and understand its principles within business analytics.",
      "hint": "Think about what Data Types and Schemas accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Data Types and Schemas?",
      "options": [
        {
          "key": "A",
          "text": "Apply Data Types and Schemas to a relevant example"
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
      "question": "How can you show understanding of Data Types and Schemas?",
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
      "title": "MISSION 1 — DATA TYPES AND SCHEMAS IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Data Types and Schemas\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Data Types and Schemas. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Data Types and Schemas\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Data Types and Schemas to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "To perform or understand Missing Values and Duplicate Records"
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
      "explanation": "Before proceeding with Missing Values and Duplicate Records, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Missing Values and Duplicate Records?",
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
      "question": "How can you show understanding of Missing Values and Duplicate Records?",
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
      "title": "MISSION 1 — MISSING VALUES AND DUPLICATE RECORDS IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Missing Values and Duplicate Records\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Missing Values and Duplicate Records. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Missing Values and Duplicate Records\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Missing Values and Duplicate Records to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "To perform or understand Accuracy, Completeness and Consistency"
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
      "explanation": "The primary objective of learning Accuracy, Completeness and Consistency is to perform and understand its principles within business analytics.",
      "hint": "Think about what Accuracy, Completeness and Consistency accomplishes in data analytics."
    },
    {
      "id": 2,
      "question": "Which action best fits a lesson on Accuracy, Completeness and Consistency?",
      "options": [
        {
          "key": "A",
          "text": "Apply Accuracy, Completeness and Consistency to a relevant example"
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
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Accuracy, Completeness and Consistency.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Accuracy, Completeness and Consistency?",
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
      "title": "MISSION 1 — ACCURACY, COMPLETENESS AND CONSISTENCY IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Accuracy, Completeness and Consistency\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Accuracy, Completeness and Consistency. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Accuracy, Completeness and Consistency\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Accuracy, Completeness and Consistency to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
          "text": "Apply Data Quality Checks and Documentation to a relevant example"
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
      "explanation": "Practical application to relevant real-world business examples is the cornerstone of understanding Data Quality Checks and Documentation.",
      "hint": "Best learning practice always involves practical application to relevant examples."
    },
    {
      "id": 3,
      "question": "What should you do before applying Data Quality Checks and Documentation?",
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
      "explanation": "Before proceeding with Data Quality Checks and Documentation, you must clearly understand the task objectives and the data available.",
      "hint": "Always comprehend requirements and inputs before taking action."
    },
    {
      "id": 4,
      "question": "Which is a good practice when learning Data Quality Checks and Documentation?",
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
      "title": "MISSION 1 — DATA QUALITY CHECKS AND DOCUMENTATION IN PRACTICE",
      "prompt": "A team faces a real situation related to \"Data Quality Checks and Documentation\". Identify the lesson concept that applies and explain why it fits.",
      "scenario": "You are consulting for an enterprise team addressing questions around Data Quality Checks and Documentation. Your task is to recommend the best practice based on this lesson.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
    },
    {
      "id": 2,
      "title": "MISSION 2 — STAKEHOLDER STRATEGY",
      "prompt": "A business stakeholder asks for an action plan regarding \"Data Quality Checks and Documentation\". Explain the key steps to implement.",
      "scenario": "Prepare a brief structured response explaining how to apply Data Quality Checks and Documentation to improve business outcomes.",
      "expectedResponse": "Apply only the current lesson's concept and explain the choice."
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
