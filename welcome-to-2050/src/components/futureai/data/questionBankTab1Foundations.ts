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
  "moduleName": "Understanding Data Analytics",
  "topicKey": "1.1",
  "id": 1,
  "topicTitle": "What Is Data Analytics?",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is Data Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Designing websites"
        },
        {
          "key": "B",
          "text": "Examining data to discover useful insights"
        },
        {
          "key": "C",
          "text": "Installing computer software"
        },
        {
          "key": "D",
          "text": "Storing files without examining them"
        }
      ],
      "correct": 1,
      "explanation": "Data Analytics helps discover patterns and insights from data.",
      "hint": "Think about examining data to find insights and make better decisions."
    },
    {
      "id": 2,
      "question": "What is the main purpose of Data Analytics?",
      "options": [
        {
          "key": "A",
          "text": "To make every business decision automatically"
        },
        {
          "key": "B",
          "text": "To create more files"
        },
        {
          "key": "C",
          "text": "To support better decisions using evidence"
        },
        {
          "key": "D",
          "text": "To replace all employees"
        }
      ],
      "correct": 2,
      "explanation": "Analytics provides evidence for decision-making.",
      "hint": "Analytics supports human decision-makers with evidence."
    },
    {
      "id": 3,
      "question": "Which activity is an example of Data Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Changing a laptop wallpaper"
        },
        {
          "key": "B",
          "text": "Examining monthly sales to identify popular products"
        },
        {
          "key": "C",
          "text": "Printing a blank form"
        },
        {
          "key": "D",
          "text": "Installing a keyboard"
        }
      ],
      "correct": 1,
      "explanation": "Sales records are examined to identify useful patterns.",
      "hint": "Look for the activity analyzing numbers and records."
    },
    {
      "id": 4,
      "question": "Which statement about Data Analytics is correct?",
      "options": [
        {
          "key": "A",
          "text": "It guarantees future results"
        },
        {
          "key": "B",
          "text": "It is useful only for large companies"
        },
        {
          "key": "C",
          "text": "It can help understand past performance"
        },
        {
          "key": "D",
          "text": "It works without any data"
        }
      ],
      "correct": 2,
      "explanation": "Analytics can help explain what has happened.",
      "hint": "Analytics describes and explains historical performance."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Identify the Analytics Activity",
      "prompt": "Select the activities that involve Data Analytics.",
      "tokens": [
        "Analyzing sales records",
        "Changing wallpaper",
        "Finding customer trends",
        "Installing a printer"
      ],
      "shuffled": [
        "Changing wallpaper",
        "Analyzing sales records",
        "Installing a printer",
        "Finding customer trends"
      ],
      "expected": [
        "Analyzing sales records",
        "Finding customer trends"
      ],
      "hint": "Look for activities that examine records to uncover insights."
    },
    {
      "id": 2,
      "title": "Puzzle 2 — Complete the Analytics Journey",
      "prompt": "Arrange the stages in the correct order from raw inputs to value.",
      "tokens": [
        "Raw Data",
        "Examine Data",
        "Useful Insights"
      ],
      "shuffled": [
        "Useful Insights",
        "Raw Data",
        "Examine Data"
      ],
      "expected": [
        "Raw Data",
        "Examine Data",
        "Useful Insights"
      ],
      "hint": "Raw Data comes first, followed by Examination, leading to Insights."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Examine sales records",
      "meaning": "Uncover purchase patterns"
    },
    {
      "id": 2,
      "snippet": "Customer trend analysis",
      "meaning": "Understand buyer preferences"
    },
    {
      "id": 3,
      "snippet": "Raw data log",
      "meaning": "Unprocessed transactional entries"
    },
    {
      "id": 4,
      "snippet": "Useful insight",
      "meaning": "Actionable guidance for decisions"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Mission: Find the Busiest Library Day",
      "scenario": "You are helping a school library understand daily visitors.\n• Monday: 20\n• Tuesday: 35\n• Wednesday: 25",
      "prompt": "Identify the busiest day and explain how the data supports your answer.",
      "expectedResponse": "Tuesday is the busiest day with 35 visitors compared to Monday (20) and Wednesday (25). Use visitor count data as evidence before adjusting library schedules."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "What is Data Analytics?",
      "sampleAnswer": "Data Analytics is the process of examining data to identify patterns, trends, and useful insights that support decision-making."
    },
    {
      "id": 2,
      "question": "Why is Data Analytics useful?",
      "sampleAnswer": "It helps people understand information, identify problems, and make decisions based on evidence rather than guesses."
    },
    {
      "id": 3,
      "question": "Can you give a simple example of Data Analytics?",
      "sampleAnswer": "A shop can analyze its daily sales records to find which products sell the most."
    }
  ]
},

  '1.2': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 1,
  "moduleName": "Understanding Data Analytics",
  "topicKey": "1.2",
  "id": 2,
  "topicTitle": "Why Businesses Need Data Analytics",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "Why do businesses use Data Analytics?",
      "options": [
        {
          "key": "A",
          "text": "To eliminate all risks"
        },
        {
          "key": "B",
          "text": "To make informed business decisions"
        },
        {
          "key": "C",
          "text": "To avoid collecting information"
        },
        {
          "key": "D",
          "text": "To guarantee profit"
        }
      ],
      "correct": 1,
      "explanation": "Analytics supports informed decisions but cannot guarantee results.",
      "hint": "Analytics empowers informed choices without guaranteeing outcomes."
    },
    {
      "id": 2,
      "question": "How can Data Analytics help reduce business costs?",
      "options": [
        {
          "key": "A",
          "text": "By identifying unnecessary expenses"
        },
        {
          "key": "B",
          "text": "By automatically removing all employees"
        },
        {
          "key": "C",
          "text": "By increasing every product's price"
        },
        {
          "key": "D",
          "text": "By ignoring operational records"
        }
      ],
      "correct": 0,
      "explanation": "Analyzing expense patterns highlights cost-reduction opportunities.",
      "hint": "Look for finding waste and unnecessary expenses."
    },
    {
      "id": 3,
      "question": "How can a business use customer data?",
      "options": [
        {
          "key": "A",
          "text": "To guarantee every customer will purchase"
        },
        {
          "key": "B",
          "text": "To understand customer preferences"
        },
        {
          "key": "C",
          "text": "To eliminate competitors"
        },
        {
          "key": "D",
          "text": "To stop measuring customer satisfaction"
        }
      ],
      "correct": 1,
      "explanation": "Understanding customer preferences enables personalized, better services.",
      "hint": "Analyzing buying trends reveals customer preferences."
    },
    {
      "id": 4,
      "question": "Which is a realistic benefit of Data Analytics?",
      "options": [
        {
          "key": "A",
          "text": "Perfect predictions"
        },
        {
          "key": "B",
          "text": "Zero business risk"
        },
        {
          "key": "C",
          "text": "Better understanding of business performance"
        },
        {
          "key": "D",
          "text": "Guaranteed sales growth"
        }
      ],
      "correct": 2,
      "explanation": "Analytics provides clarity on how a business is performing.",
      "hint": "Analytics offers objective visibility into performance."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Match Business Problems to Analytics Benefits",
      "prompt": "Match each business problem to its corresponding analytics benefit.",
      "tokens": [
        "Too much unsold stock: Better inventory planning",
        "Customers stop returning: Understanding customer retention",
        "Operating expenses are rising: Identifying cost patterns"
      ],
      "shuffled": [
        "Operating expenses are rising: Identifying cost patterns",
        "Too much unsold stock: Better inventory planning",
        "Customers stop returning: Understanding customer retention"
      ],
      "expected": [
        "Too much unsold stock: Better inventory planning",
        "Customers stop returning: Understanding customer retention",
        "Operating expenses are rising: Identifying cost patterns"
      ],
      "hint": "Stock relates to inventory; churn relates to retention; expenses relate to cost patterns."
    },
    {
      "id": 2,
      "title": "Puzzle 2 — Business Decision or Guesswork?",
      "prompt": "Select the statements that represent Evidence-Based Decisions.",
      "tokens": [
        "We increased stock because last month demand was higher",
        "We increased stock because I had a feeling",
        "We reviewed complaints before improving customer service",
        "We changed the price without checking any information"
      ],
      "shuffled": [
        "We increased stock because I had a feeling",
        "We reviewed complaints before improving customer service",
        "We changed the price without checking any information",
        "We increased stock because last month demand was higher"
      ],
      "expected": [
        "We increased stock because last month demand was higher",
        "We reviewed complaints before improving customer service"
      ],
      "hint": "Evidence-based decisions cite past demand or complaint reviews."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Excess unsold inventory",
      "meaning": "Better inventory planning"
    },
    {
      "id": 2,
      "snippet": "Customer churn rate",
      "meaning": "Retention pattern analysis"
    },
    {
      "id": 3,
      "snippet": "Rising operational cost",
      "meaning": "Expense trend detection"
    },
    {
      "id": 4,
      "snippet": "Customer service feedback",
      "meaning": "Service satisfaction insights"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Mission: Reduce Restaurant Food Waste",
      "scenario": "A restaurant records the following daily meals prepared vs wasted:\n• Monday: 40 Prepared, 12 Wasted\n• Tuesday: 40 Prepared, 3 Wasted\n• Wednesday: 40 Prepared, 5 Wasted",
      "prompt": "Identify which day needs attention and recommend one data-driven next step.",
      "expectedResponse": "Monday has the highest food waste (12 meals). Review Monday's demand and preparation patterns before adjusting quantities."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "Why do businesses need Data Analytics?",
      "sampleAnswer": "Businesses use Data Analytics to understand performance, identify opportunities, reduce inefficiencies, and make evidence-based decisions."
    },
    {
      "id": 2,
      "question": "How can Data Analytics improve customer satisfaction?",
      "sampleAnswer": "Businesses can examine feedback, complaints, and buying patterns to identify customer needs and improve services."
    },
    {
      "id": 3,
      "question": "Can Data Analytics guarantee business success?",
      "sampleAnswer": "No. It supports better decisions, but outcomes also depend on market conditions, execution, and other factors."
    }
  ]
},

  '1.3': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 1,
  "moduleName": "Understanding Data Analytics",
  "topicKey": "1.3",
  "id": 3,
  "topicTitle": "Real-Life Examples of Data Analytics",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "How can a hospital use Data Analytics?",
      "options": [
        {
          "key": "A",
          "text": "To guarantee every patient recovers"
        },
        {
          "key": "B",
          "text": "To identify busy appointment hours"
        },
        {
          "key": "C",
          "text": "To eliminate the need for doctors"
        },
        {
          "key": "D",
          "text": "To avoid keeping patient records"
        }
      ],
      "correct": 1,
      "explanation": "Analyzing patient appointment schedules prevents overcrowding and helps manage resources.",
      "hint": "Hospitals analyze patient influx to optimize staffing."
    },
    {
      "id": 2,
      "question": "How can a school use Data Analytics?",
      "options": [
        {
          "key": "A",
          "text": "To identify attendance patterns"
        },
        {
          "key": "B",
          "text": "To guarantee every student passes"
        },
        {
          "key": "C",
          "text": "To replace all teachers"
        },
        {
          "key": "D",
          "text": "To remove every examination"
        }
      ],
      "correct": 0,
      "explanation": "Schools track attendance and test scores to spot patterns and offer academic help.",
      "hint": "Attendance logs reveal absence trends."
    },
    {
      "id": 3,
      "question": "Which is a retail Data Analytics example?",
      "options": [
        {
          "key": "A",
          "text": "Changing the shop's logo"
        },
        {
          "key": "B",
          "text": "Examining product sales to plan stock"
        },
        {
          "key": "C",
          "text": "Painting the store entrance"
        },
        {
          "key": "D",
          "text": "Buying new chairs without checking needs"
        }
      ],
      "correct": 1,
      "explanation": "Tracking product sales trends helps managers reorder top sellers and reduce excess inventory.",
      "hint": "Analyzing product sales is retail analytics."
    },
    {
      "id": 4,
      "question": "How can a transport company use Data Analytics?",
      "options": [
        {
          "key": "A",
          "text": "To guarantee no traffic delays"
        },
        {
          "key": "B",
          "text": "To eliminate all vehicles"
        },
        {
          "key": "C",
          "text": "To identify frequently delayed routes"
        },
        {
          "key": "D",
          "text": "To avoid tracking delivery times"
        }
      ],
      "correct": 2,
      "explanation": "Analyzing transit logs isolates route bottlenecks and improves delivery schedules.",
      "hint": "Tracking trip durations isolates delayed routes."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Match the Industry",
      "prompt": "Match each industry to its primary analytics application.",
      "tokens": [
        "Hospital: Patient waiting-time analysis",
        "School: Attendance analysis",
        "Retail Store: Product sales analysis",
        "Transport Company: Delivery delay analysis"
      ],
      "shuffled": [
        "Transport Company: Delivery delay analysis",
        "Hospital: Patient waiting-time analysis",
        "School: Attendance analysis",
        "Retail Store: Product sales analysis"
      ],
      "expected": [
        "Hospital: Patient waiting-time analysis",
        "School: Attendance analysis",
        "Retail Store: Product sales analysis",
        "Transport Company: Delivery delay analysis"
      ],
      "hint": "Hospitals track queues; schools track attendance; retail tracks sales; transport tracks delivery delays."
    },
    {
      "id": 2,
      "title": "Puzzle 2 — Find the Real Analytics Examples",
      "prompt": "Select all valid examples that involve Data Analytics.",
      "tokens": [
        "A school compares attendance across weekdays",
        "A shop analyzes its best-selling products",
        "A person changes their phone wallpaper",
        "A delivery company reviews late deliveries"
      ],
      "shuffled": [
        "A person changes their phone wallpaper",
        "A school compares attendance across weekdays",
        "A delivery company reviews late deliveries",
        "A shop analyzes its best-selling products"
      ],
      "expected": [
        "A school compares attendance across weekdays",
        "A shop analyzes its best-selling products",
        "A delivery company reviews late deliveries"
      ],
      "hint": "Changing wallpaper does not analyze records or data."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Hospital appointments",
      "meaning": "Peak waiting time analysis"
    },
    {
      "id": 2,
      "snippet": "Classroom attendance",
      "meaning": "Absence trend detection"
    },
    {
      "id": 3,
      "snippet": "Retail billing records",
      "meaning": "Fast-selling inventory planning"
    },
    {
      "id": 4,
      "snippet": "GPS route timestamps",
      "meaning": "Delivery transit delay optimization"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Mission: School Attendance Investigation",
      "scenario": "A school wants to identify which weekday had the highest absences:\n• Monday: 8 absences\n• Tuesday: 15 absences\n• Wednesday: 5 absences",
      "prompt": "Identify the day with the most absences and suggest one practical follow-up.",
      "expectedResponse": "Tuesday had the highest absences (15). The school should examine attendance across more Tuesdays and investigate possible reasons such as transit delays or schedule conflicts."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "Give a real-life example of Data Analytics in retail.",
      "sampleAnswer": "A retail store can analyze sales records to identify popular products and plan inventory."
    },
    {
      "id": 2,
      "question": "How is Data Analytics used in education?",
      "sampleAnswer": "Schools can analyze attendance and assessment records to identify patterns and areas needing attention."
    },
    {
      "id": 3,
      "question": "How can Data Analytics help transportation services?",
      "sampleAnswer": "Transport companies can analyze delivery times and delays to identify routes that may need improvement."
    }
  ]
},

  '1.4': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 1,
  "moduleName": "Understanding Data Analytics",
  "topicKey": "1.4",
  "id": 4,
  "topicTitle": "Data vs Information vs Insight",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is raw data?",
      "options": [
        {
          "key": "A",
          "text": "Unprocessed facts or observations"
        },
        {
          "key": "B",
          "text": "A final business recommendation"
        },
        {
          "key": "C",
          "text": "A completed decision"
        },
        {
          "key": "D",
          "text": "An explanation of why something happened"
        }
      ],
      "correct": 0,
      "explanation": "Raw data consists of unorganized numbers, facts, and logs before processing.",
      "hint": "Raw data consists of unprocessed facts."
    },
    {
      "id": 2,
      "question": "Which example represents information?",
      "options": [
        {
          "key": "A",
          "text": "Individual sales entries without a summary"
        },
        {
          "key": "B",
          "text": "“The store sold 150 items this week.”"
        },
        {
          "key": "C",
          "text": "An empty spreadsheet"
        },
        {
          "key": "D",
          "text": "A guess about future demand"
        }
      ],
      "correct": 1,
      "explanation": "Individual records aggregated into a summary represent structured information.",
      "hint": "Information is processed and summarized data."
    },
    {
      "id": 3,
      "question": "Which example best represents an insight?",
      "options": [
        {
          "key": "A",
          "text": "“10, 20, 30”"
        },
        {
          "key": "B",
          "text": "“There are three records.”"
        },
        {
          "key": "C",
          "text": "“Weekend sales consistently exceed weekday sales, suggesting higher weekend demand.”"
        },
        {
          "key": "D",
          "text": "“The file contains five columns.”"
        }
      ],
      "correct": 2,
      "explanation": "An insight provides deeper understanding of patterns and actionable implications.",
      "hint": "An insight explains trends and underlying customer behavior."
    },
    {
      "id": 4,
      "question": "What is the correct relationship?",
      "options": [
        {
          "key": "A",
          "text": "Insight → Data → Information"
        },
        {
          "key": "B",
          "text": "Information → Insight → Data"
        },
        {
          "key": "C",
          "text": "Data → Information → Insight"
        },
        {
          "key": "D",
          "text": "Data → Insight → Information is always required"
        }
      ],
      "correct": 2,
      "explanation": "Raw Data is processed into Information, which is analyzed to produce actionable Insights.",
      "hint": "The hierarchy progresses from Data to Information to Insight."
    },
    {
      "id": 5,
      "question": "Which statement is an actionable recommendation rather than raw data?",
      "options": [
        {
          "key": "A",
          "text": "“12, 15, 20”"
        },
        {
          "key": "B",
          "text": "“Sales were 20 units on Wednesday.”"
        },
        {
          "key": "C",
          "text": "“Wednesday had the highest sales.”"
        },
        {
          "key": "D",
          "text": "“Consider increasing Wednesday staffing after checking whether this pattern repeats.”"
        }
      ],
      "correct": 3,
      "explanation": "Recommending staffing increases based on verified patterns is an actionable next step.",
      "hint": "Recommendations propose specific business actions based on evidence."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Sort into Three Categories",
      "prompt": "Match each statement to its correct level of analytics understanding.",
      "tokens": [
        "Monday: 10, Tuesday: 15, Wednesday: 30: Raw Data",
        "Total sales were 55 units: Information",
        "Wednesday contributed the largest share of sales: Insight"
      ],
      "shuffled": [
        "Wednesday contributed the largest share of sales: Insight",
        "Monday: 10, Tuesday: 15, Wednesday: 30: Raw Data",
        "Total sales were 55 units: Information"
      ],
      "expected": [
        "Monday: 10, Tuesday: 15, Wednesday: 30: Raw Data",
        "Total sales were 55 units: Information",
        "Wednesday contributed the largest share of sales: Insight"
      ],
      "hint": "Daily entries are Data; totals are Information; share comparisons are Insights."
    },
    {
      "id": 2,
      "title": "Puzzle 2 — Build the Meaning",
      "prompt": "Arrange the statements in logical order from observation to insight.",
      "tokens": [
        "Saturday: 40 orders; Sunday: 50 orders",
        "Weekend total: 90 orders",
        "Weekend demand appears stronger"
      ],
      "shuffled": [
        "Weekend demand appears stronger",
        "Saturday: 40 orders; Sunday: 50 orders",
        "Weekend total: 90 orders"
      ],
      "expected": [
        "Saturday: 40 orders; Sunday: 50 orders",
        "Weekend total: 90 orders",
        "Weekend demand appears stronger"
      ],
      "hint": "Start with individual daily counts, then the sum total, then the demand insight."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "10, 20, 30",
      "meaning": "Raw Data points"
    },
    {
      "id": 2,
      "snippet": "Total weekly revenue: ₹45,000",
      "meaning": "Summarized Information"
    },
    {
      "id": 3,
      "snippet": "Evening orders peak due to commuters",
      "meaning": "Actionable Insight"
    },
    {
      "id": 4,
      "snippet": "Schedule extra baristas at 6 PM",
      "meaning": "Data-driven Recommendation"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Mission: Turn Sales Data into Insight",
      "scenario": "A small shop records daily orders:\n• Monday: 10 orders\n• Tuesday: 15 orders\n• Wednesday: 30 orders",
      "prompt": "Provide one example each of Data, Information, and Insight.",
      "expectedResponse": "Data: The three daily order numbers (10, 15, 30). Information: Total orders = 55. Insight: Wednesday generated the highest volume (30 of 55), indicating peak mid-week demand."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "What is the difference between Data and Information?",
      "sampleAnswer": "Data consists of raw facts, while Information is data that has been organized or processed to provide meaning."
    },
    {
      "id": 2,
      "question": "What is an Insight?",
      "sampleAnswer": "An Insight is a useful understanding derived from information that can help guide a decision."
    },
    {
      "id": 3,
      "question": "Give an example of Data, Information, and Insight.",
      "sampleAnswer": "Daily sales numbers are Data. Total weekly sales are Information. Identifying that weekends have higher sales across several weeks is an Insight."
    },
    {
      "id": 4,
      "question": "Can information exist without a useful insight?",
      "sampleAnswer": "Yes. A summary can be meaningful information even if it does not reveal a clear pattern or support a particular action."
    }
  ]
},

  '1.5': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 1,
  "moduleName": "Understanding Data Analytics",
  "topicKey": "1.5",
  "id": 5,
  "topicTitle": "The Role of Data in Decision-Making",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is a data-driven decision?",
      "options": [
        {
          "key": "A",
          "text": "A decision based only on personal opinion"
        },
        {
          "key": "B",
          "text": "A decision supported by relevant evidence"
        },
        {
          "key": "C",
          "text": "A random choice"
        },
        {
          "key": "D",
          "text": "A decision made without checking results"
        }
      ],
      "correct": 1,
      "explanation": "Data-driven decisions rely on objective records and facts rather than intuition.",
      "hint": "Look for decisions supported by evidence."
    },
    {
      "id": 2,
      "question": "Why should decision-makers check data quality?",
      "options": [
        {
          "key": "A",
          "text": "Poor-quality data can lead to misleading conclusions"
        },
        {
          "key": "B",
          "text": "It makes every decision perfect"
        },
        {
          "key": "C",
          "text": "It eliminates all uncertainty"
        },
        {
          "key": "D",
          "text": "It guarantees future performance"
        }
      ],
      "correct": 0,
      "explanation": "Flawed or duplicate records result in misleading analysis and poor choices.",
      "hint": "Low-quality data leads to misleading conclusions."
    },
    {
      "id": 3,
      "question": "Two events happen together. What should a decision-maker avoid assuming?",
      "options": [
        {
          "key": "A",
          "text": "That the events occurred"
        },
        {
          "key": "B",
          "text": "That the events may be related"
        },
        {
          "key": "C",
          "text": "That one event definitely caused the other"
        },
        {
          "key": "D",
          "text": "That more investigation may help"
        }
      ],
      "correct": 2,
      "explanation": "Correlation between two variables does not automatically establish direct causation.",
      "hint": "Never assume one event caused the other without proof."
    },
    {
      "id": 4,
      "question": "What should a business do after implementing a data-informed decision?",
      "options": [
        {
          "key": "A",
          "text": "Stop collecting data"
        },
        {
          "key": "B",
          "text": "Assume the decision succeeded"
        },
        {
          "key": "C",
          "text": "Monitor outcomes and adjust when necessary"
        },
        {
          "key": "D",
          "text": "Delete previous records"
        }
      ],
      "correct": 2,
      "explanation": "Tracking outcomes validates whether the decision achieved the desired outcome.",
      "hint": "Continuous monitoring ensures decisions remain effective."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Arrange the Decision Process",
      "prompt": "Arrange the decision process steps in the correct order.",
      "tokens": [
        "Define the Decision",
        "Review Evidence",
        "Choose an Action",
        "Monitor Results"
      ],
      "shuffled": [
        "Review Evidence",
        "Choose an Action",
        "Define the Decision",
        "Monitor Results"
      ],
      "expected": [
        "Define the Decision",
        "Review Evidence",
        "Choose an Action",
        "Monitor Results"
      ],
      "hint": "First define the question, review evidence, choose an action, and monitor outcomes."
    },
    {
      "id": 2,
      "title": "Puzzle 2 — Evidence or Unsupported Conclusion?",
      "prompt": "Select the conclusions that are directly supported by the records.",
      "tokens": [
        "Product A sold 50 units and Product B sold 30",
        "Product A is more popular with every customer",
        "Product A sold more units in this observed period",
        "Product A will definitely sell more next year"
      ],
      "shuffled": [
        "Product A is more popular with every customer",
        "Product A sold 50 units and Product B sold 30",
        "Product A will definitely sell more next year",
        "Product A sold more units in this observed period"
      ],
      "expected": [
        "Product A sold 50 units and Product B sold 30",
        "Product A sold more units in this observed period"
      ],
      "hint": "Observed period counts support comparisons, not universal or future certainty."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Define business goal",
      "meaning": "Step 1 of Decision Cycle"
    },
    {
      "id": 2,
      "snippet": "Audit transaction records",
      "meaning": "Review relevant evidence"
    },
    {
      "id": 3,
      "snippet": "Execute targeted inventory buy",
      "meaning": "Choose data-informed action"
    },
    {
      "id": 4,
      "snippet": "Track monthly post-launch KPI",
      "meaning": "Monitor and adjust outcomes"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Mission: Choose a Marketing Campaign",
      "scenario": "A business tests two digital marketing campaigns:\n• Campaign A: 100 Visitors, 10 Sign-ups (10% rate)\n• Campaign B: 100 Visitors, 18 Sign-ups (18% rate)",
      "prompt": "Which campaign performed better in this test? What should the manager consider before a larger rollout?",
      "expectedResponse": "Campaign B achieved an 18% sign-up rate versus Campaign A's 10%. Campaign B performed better in the test, but the manager should evaluate sample size, acquisition cost, and retention before full rollout."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "What is data-driven decision-making?",
      "sampleAnswer": "It means using relevant data and analysis to support decisions instead of relying only on assumptions."
    },
    {
      "id": 2,
      "question": "Why is data quality important for decision-making?",
      "sampleAnswer": "Inaccurate or incomplete data can produce misleading conclusions and lead to poor decisions."
    },
    {
      "id": 3,
      "question": "Should businesses rely only on data when making decisions?",
      "sampleAnswer": "No. Data is important, but businesses should also consider context, practical constraints, and professional judgment."
    }
  ]
},

  '2.1': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 2,
  "moduleName": "Data Analyst Essentials",
  "topicKey": "2.1",
  "id": 6,
  "topicTitle": "Data Analyst Roles and Responsibilities",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is a primary responsibility of a Data Analyst?",
      "options": [
        {
          "key": "A",
          "text": "Designing computer hardware"
        },
        {
          "key": "B",
          "text": "Analyzing data to answer business questions"
        },
        {
          "key": "C",
          "text": "Repairing office equipment"
        },
        {
          "key": "D",
          "text": "Managing building security"
        }
      ],
      "correct": 1,
      "explanation": "Analysts explore data and calculate metrics to answer key business problems.",
      "hint": "Analysts answer business questions through data."
    },
    {
      "id": 2,
      "question": "Why does a Data Analyst clean data?",
      "options": [
        {
          "key": "A",
          "text": "To make it more reliable for analysis"
        },
        {
          "key": "B",
          "text": "To remove every record"
        },
        {
          "key": "C",
          "text": "To change the company's branding"
        },
        {
          "key": "D",
          "text": "To guarantee a particular result"
        }
      ],
      "correct": 0,
      "explanation": "Cleaning removes errors, handles blanks, and ensures reliable analytical models.",
      "hint": "Cleaning makes data accurate and reliable."
    },
    {
      "id": 3,
      "question": "Why does a Data Analyst create charts and dashboards?",
      "options": [
        {
          "key": "A",
          "text": "To hide important information"
        },
        {
          "key": "B",
          "text": "To communicate findings clearly"
        },
        {
          "key": "C",
          "text": "To replace the original data permanently"
        },
        {
          "key": "D",
          "text": "To guarantee business growth"
        }
      ],
      "correct": 1,
      "explanation": "Visual charts translate complex rows into easily understandable trends for stakeholders.",
      "hint": "Dashboards communicate findings clearly."
    },
    {
      "id": 4,
      "question": "What should a Data Analyst do before presenting findings?",
      "options": [
        {
          "key": "A",
          "text": "Ignore unusual results"
        },
        {
          "key": "B",
          "text": "Verify calculations and conclusions"
        },
        {
          "key": "C",
          "text": "Delete the source records"
        },
        {
          "key": "D",
          "text": "Change the numbers to match expectations"
        }
      ],
      "correct": 1,
      "explanation": "Verifying numbers and assumptions prevents communicating inaccurate takeaways.",
      "hint": "Always verify calculations and conclusions."
    },
    {
      "id": 5,
      "question": "How should a Data Analyst handle sensitive customer information?",
      "options": [
        {
          "key": "A",
          "text": "Share it publicly"
        },
        {
          "key": "B",
          "text": "Copy it to personal accounts"
        },
        {
          "key": "C",
          "text": "Follow privacy and access-control requirements"
        },
        {
          "key": "D",
          "text": "Include all personal details in every report"
        }
      ],
      "correct": 2,
      "explanation": "Analysts must strictly follow governance and security protocols to safeguard user data.",
      "hint": "Comply with privacy and access controls."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Match Responsibilities to Deliverables",
      "prompt": "Match each responsibility to its core deliverable.",
      "tokens": [
        "Data Cleaning: Corrected dataset",
        "Data Analysis: Findings and comparisons",
        "Data Visualization: Chart or dashboard",
        "Stakeholder Communication: Explanation of insights"
      ],
      "shuffled": [
        "Stakeholder Communication: Explanation of insights",
        "Data Cleaning: Corrected dataset",
        "Data Visualization: Chart or dashboard",
        "Data Analysis: Findings and comparisons"
      ],
      "expected": [
        "Data Cleaning: Corrected dataset",
        "Data Analysis: Findings and comparisons",
        "Data Visualization: Chart or dashboard",
        "Stakeholder Communication: Explanation of insights"
      ],
      "hint": "Cleaning yields clean datasets; analysis yields comparisons; visualization yields dashboards."
    },
    {
      "id": 2,
      "title": "Puzzle 2 — A Data Analyst's Job or Not?",
      "prompt": "Select the tasks that belong to typical Data Analyst responsibilities.",
      "tokens": [
        "Verify sales totals",
        "Discuss reporting requirements",
        "Explain performance trends",
        "Repair a damaged office chair",
        "Prepare a monthly dashboard"
      ],
      "shuffled": [
        "Repair a damaged office chair",
        "Discuss reporting requirements",
        "Verify sales totals",
        "Prepare a monthly dashboard",
        "Explain performance trends"
      ],
      "expected": [
        "Verify sales totals",
        "Discuss reporting requirements",
        "Explain performance trends",
        "Prepare a monthly dashboard"
      ],
      "hint": "Repairing chairs is facility repair, not analytical work."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Data cleaning",
      "meaning": "Produces corrected dataset"
    },
    {
      "id": 2,
      "snippet": "Data exploration",
      "meaning": "Identifies patterns and variance"
    },
    {
      "id": 3,
      "snippet": "Data visualization",
      "meaning": "Generates charts and dashboards"
    },
    {
      "id": 4,
      "snippet": "Executive summary",
      "meaning": "Communicates key takeaways"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Mission: Prepare a Weekly Sales Report",
      "scenario": "Your manager wants a simple sales performance update:\n• Week 1: ₹10,000\n• Week 2: ₹13,000\n• Week 3: ₹12,000",
      "prompt": "Identify the highest-sales week, describe the latest change, and recommend a suitable chart.",
      "expectedResponse": "Week 2 had the highest sales at ₹13,000. Sales decreased by ₹1,000 from Week 2 to Week 3. A line chart would help communicate the weekly trend."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "What does a Data Analyst do?",
      "sampleAnswer": "A Data Analyst collects, cleans, analyzes, and presents data to help organizations answer business questions."
    },
    {
      "id": 2,
      "question": "What are the main responsibilities of a Data Analyst?",
      "sampleAnswer": "Understanding business requirements, preparing data, analyzing trends, validating findings, and communicating insights."
    },
    {
      "id": 3,
      "question": "Why are communication skills important for a Data Analyst?",
      "sampleAnswer": "Analysts must explain their findings clearly so stakeholders can understand the results and make informed decisions."
    },
    {
      "id": 4,
      "question": "How does a Data Analyst ensure reliable results?",
      "sampleAnswer": "By checking data quality, verifying calculations, investigating unusual results, and documenting assumptions."
    }
  ]
},

  '2.2': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 2,
  "moduleName": "Data Analyst Essentials",
  "topicKey": "2.2",
  "id": 7,
  "topicTitle": "Data Analyst vs Data Scientist vs Data Engineer",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "Which role typically focuses on reports, dashboards, and business insights?",
      "options": [
        {
          "key": "A",
          "text": "Data Analyst"
        },
        {
          "key": "B",
          "text": "Network Technician"
        },
        {
          "key": "C",
          "text": "Graphic Designer"
        },
        {
          "key": "D",
          "text": "Hardware Engineer"
        }
      ],
      "correct": 0,
      "explanation": "Data Analysts specialize in turning business data into dashboards and operational insights.",
      "hint": "Analysts build dashboards and analyze performance."
    },
    {
      "id": 2,
      "question": "Which role typically develops predictive models?",
      "options": [
        {
          "key": "A",
          "text": "Office Administrator"
        },
        {
          "key": "B",
          "text": "Data Scientist"
        },
        {
          "key": "C",
          "text": "Sales Executive"
        },
        {
          "key": "D",
          "text": "Graphic Designer"
        }
      ],
      "correct": 1,
      "explanation": "Data Scientists leverage advanced statistical and machine learning algorithms to build predictive models.",
      "hint": "Data Scientists create predictive models."
    },
    {
      "id": 3,
      "question": "Which role primarily builds and maintains data pipelines?",
      "options": [
        {
          "key": "A",
          "text": "HR Executive"
        },
        {
          "key": "B",
          "text": "Marketing Designer"
        },
        {
          "key": "C",
          "text": "Data Engineer"
        },
        {
          "key": "D",
          "text": "Content Writer"
        }
      ],
      "correct": 2,
      "explanation": "Data Engineers design robust ETL architectures to move and store enterprise data.",
      "hint": "Data Engineers maintain data pipelines."
    },
    {
      "id": 4,
      "question": "A company needs a reliable system to move data from several applications into a central database. Which role is most directly responsible?",
      "options": [
        {
          "key": "A",
          "text": "Data Engineer"
        },
        {
          "key": "B",
          "text": "Data Analyst"
        },
        {
          "key": "C",
          "text": "Customer Support Agent"
        },
        {
          "key": "D",
          "text": "UI Designer"
        }
      ],
      "correct": 0,
      "explanation": "Building data pipelines and centralized warehouse ingestion is data engineering.",
      "hint": "System architecture and data movement is owned by Data Engineers."
    },
    {
      "id": 5,
      "question": "Which statement is correct?",
      "options": [
        {
          "key": "A",
          "text": "The three roles have no overlapping skills"
        },
        {
          "key": "B",
          "text": "Only Data Scientists work with data"
        },
        {
          "key": "C",
          "text": "Their responsibilities differ, but they often collaborate"
        },
        {
          "key": "D",
          "text": "Data Analysts never use programming"
        }
      ],
      "correct": 2,
      "explanation": "The roles have specialized focus areas but collaborate closely across data projects.",
      "hint": "Data roles collaborate closely together."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Match the Professional",
      "prompt": "Match each data professional to their core deliverable.",
      "tokens": [
        "Data Analyst: Monthly Sales Dashboard",
        "Data Scientist: Customer Churn Prediction Model",
        "Data Engineer: Automated Data Pipeline"
      ],
      "shuffled": [
        "Data Engineer: Automated Data Pipeline",
        "Data Analyst: Monthly Sales Dashboard",
        "Data Scientist: Customer Churn Prediction Model"
      ],
      "expected": [
        "Data Analyst: Monthly Sales Dashboard",
        "Data Scientist: Customer Churn Prediction Model",
        "Data Engineer: Automated Data Pipeline"
      ],
      "hint": "Dashboards = Analyst; Prediction Models = Scientist; Data Pipelines = Engineer."
    },
    {
      "id": 2,
      "title": "Puzzle 2 — Assign the Team Tasks",
      "prompt": "Match the project deliverables to the right specialist.",
      "tokens": [
        "Create weekly revenue report: Data Analyst",
        "Explain sales changes: Data Analyst",
        "Build customer churn model: Data Scientist",
        "Maintain data ingestion pipeline: Data Engineer"
      ],
      "shuffled": [
        "Build customer churn model: Data Scientist",
        "Create weekly revenue report: Data Analyst",
        "Maintain data ingestion pipeline: Data Engineer",
        "Explain sales changes: Data Analyst"
      ],
      "expected": [
        "Create weekly revenue report: Data Analyst",
        "Explain sales changes: Data Analyst",
        "Build customer churn model: Data Scientist",
        "Maintain data ingestion pipeline: Data Engineer"
      ],
      "hint": "Reports and trend analysis belong to Analysts; predictive models to Scientists; ingestion to Engineers."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Business metric dashboard",
      "meaning": "Data Analyst"
    },
    {
      "id": 2,
      "snippet": "Predictive churn algorithm",
      "meaning": "Data Scientist"
    },
    {
      "id": 3,
      "snippet": "ETL ingestion architecture",
      "meaning": "Data Engineer"
    },
    {
      "id": 4,
      "snippet": "SQL queries for KPI reporting",
      "meaning": "Data Analyst"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Mission: Build the Right Data Team",
      "scenario": "An e-commerce company needs three things:\n1. Reliable daily collection of website transaction data.\n2. A dashboard showing weekly sales performance.\n3. A model estimating which customers may stop purchasing.",
      "prompt": "Assign each responsibility to the most suitable data role.",
      "expectedResponse": "• Data Engineer → Reliable transaction data pipeline\n• Data Analyst → Weekly sales dashboard\n• Data Scientist → Customer churn prediction model"
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "What is the difference between a Data Analyst and a Data Scientist?",
      "sampleAnswer": "A Data Analyst mainly focuses on understanding and explaining data, while a Data Scientist often builds statistical and predictive models."
    },
    {
      "id": 2,
      "question": "What does a Data Engineer do?",
      "sampleAnswer": "A Data Engineer builds and maintains systems that collect, transform, store, and deliver data reliably."
    },
    {
      "id": 3,
      "question": "Can Data Analysts use Python and SQL?",
      "sampleAnswer": "Yes. Data Analysts commonly use SQL, Python, spreadsheets, and visualization tools, depending on their responsibilities."
    },
    {
      "id": 4,
      "question": "How do these three roles work together?",
      "sampleAnswer": "Data Engineers make data available, Data Analysts turn it into business insights, and Data Scientists may develop models for prediction and optimization."
    }
  ]
},

  '2.3': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 2,
  "moduleName": "Data Analyst Essentials",
  "topicKey": "2.3",
  "id": 8,
  "topicTitle": "Types of Data Analytics",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "Which type of analytics answers “What happened?”",
      "options": [
        {
          "key": "A",
          "text": "Predictive"
        },
        {
          "key": "B",
          "text": "Descriptive"
        },
        {
          "key": "C",
          "text": "Prescriptive"
        },
        {
          "key": "D",
          "text": "Diagnostic"
        }
      ],
      "correct": 1,
      "explanation": "Descriptive analytics summarizes past metrics to describe historical events.",
      "hint": "Descriptive analytics explains what happened."
    },
    {
      "id": 2,
      "question": "Which type of analytics investigates “Why did it happen?”",
      "options": [
        {
          "key": "A",
          "text": "Diagnostic"
        },
        {
          "key": "B",
          "text": "Predictive"
        },
        {
          "key": "C",
          "text": "Descriptive"
        },
        {
          "key": "D",
          "text": "Prescriptive"
        }
      ],
      "correct": 0,
      "explanation": "Diagnostic analytics investigates root causes and anomalies.",
      "hint": "Diagnostic analytics explains the 'why'."
    },
    {
      "id": 3,
      "question": "Which type of analytics estimates what may happen in the future?",
      "options": [
        {
          "key": "A",
          "text": "Descriptive"
        },
        {
          "key": "B",
          "text": "Diagnostic"
        },
        {
          "key": "C",
          "text": "Predictive"
        },
        {
          "key": "D",
          "text": "Prescriptive"
        }
      ],
      "correct": 2,
      "explanation": "Predictive analytics forecasts future patterns from historical trends.",
      "hint": "Predictive analytics forecasts future outcomes."
    },
    {
      "id": 4,
      "question": "Which type of analytics recommends actions to achieve an objective?",
      "options": [
        {
          "key": "A",
          "text": "Descriptive"
        },
        {
          "key": "B",
          "text": "Diagnostic"
        },
        {
          "key": "C",
          "text": "Predictive"
        },
        {
          "key": "D",
          "text": "Prescriptive"
        }
      ],
      "correct": 3,
      "explanation": "Prescriptive analytics suggests the best course of action.",
      "hint": "Prescriptive analytics recommends actions."
    },
    {
      "id": 5,
      "question": "A company examines the reasons behind a sudden rise in customer complaints. Which type is this?",
      "options": [
        {
          "key": "A",
          "text": "Descriptive"
        },
        {
          "key": "B",
          "text": "Diagnostic"
        },
        {
          "key": "C",
          "text": "Predictive"
        },
        {
          "key": "D",
          "text": "Prescriptive"
        }
      ],
      "correct": 1,
      "explanation": "Investigating the root causes behind a complaint surge is diagnostic analytics.",
      "hint": "Finding causes is diagnostic."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Match the Four Analytics Types",
      "prompt": "Match each analytics type to the question it answers.",
      "tokens": [
        "Descriptive: What happened?",
        "Diagnostic: Why did it happen?",
        "Predictive: What is likely to happen?",
        "Prescriptive: What should we do?"
      ],
      "shuffled": [
        "Predictive: What is likely to happen?",
        "Descriptive: What happened?",
        "Prescriptive: What should we do?",
        "Diagnostic: Why did it happen?"
      ],
      "expected": [
        "Descriptive: What happened?",
        "Diagnostic: Why did it happen?",
        "Predictive: What is likely to happen?",
        "Prescriptive: What should we do?"
      ],
      "hint": "Descriptive = past; Diagnostic = why; Predictive = future; Prescriptive = actions."
    },
    {
      "id": 2,
      "title": "Puzzle 2 — Classify the Business Questions",
      "prompt": "Arrange the business questions in order: Descriptive, Diagnostic, Predictive, Prescriptive.",
      "tokens": [
        "How many orders did we receive yesterday? (Descriptive)",
        "Why did cancellations increase? (Diagnostic)",
        "How many orders might we receive next month? (Predictive)",
        "Which staffing plan should we choose? (Prescriptive)"
      ],
      "shuffled": [
        "Why did cancellations increase? (Diagnostic)",
        "Which staffing plan should we choose? (Prescriptive)",
        "How many orders did we receive yesterday? (Descriptive)",
        "How many orders might we receive next month? (Predictive)"
      ],
      "expected": [
        "How many orders did we receive yesterday? (Descriptive)",
        "Why did cancellations increase? (Diagnostic)",
        "How many orders might we receive next month? (Predictive)",
        "Which staffing plan should we choose? (Prescriptive)"
      ],
      "hint": "Yesterday's orders = Descriptive; Why = Diagnostic; Next month = Predictive; Plan choice = Prescriptive."
    },
    {
      "id": 3,
      "title": "Puzzle 3 — Identify Diagnostic Questions",
      "prompt": "Select all valid questions that belong to Diagnostic Analytics.",
      "tokens": [
        "What caused the delivery delays?",
        "Which factors contributed to declining sales?",
        "What were yesterday total orders?",
        "What might next month revenue be?"
      ],
      "shuffled": [
        "What were yesterday total orders?",
        "What caused the delivery delays?",
        "What might next month revenue be?",
        "Which factors contributed to declining sales?"
      ],
      "expected": [
        "What caused the delivery delays?",
        "Which factors contributed to declining sales?"
      ],
      "hint": "Questions investigating causes or contributing factors are Diagnostic."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Historical summary report",
      "meaning": "Descriptive Analytics"
    },
    {
      "id": 2,
      "snippet": "Root-cause delay investigation",
      "meaning": "Diagnostic Analytics"
    },
    {
      "id": 3,
      "snippet": "Next quarter revenue forecast",
      "meaning": "Predictive Analytics"
    },
    {
      "id": 4,
      "snippet": "Automated discount optimization",
      "meaning": "Prescriptive Analytics"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Mission: Understand Rising Support Tickets",
      "scenario": "A company reports:\n• January: 100 Support Tickets\n• February: 140 Support Tickets",
      "prompt": "Provide one appropriate question for each of the four analytics types.",
      "expectedResponse": "• Descriptive: How much did ticket volume increase? 40%.\n• Diagnostic: What factors caused the increase? Further investigation required.\n• Predictive: How many tickets might arrive next month? Requires historical forecasting.\n• Prescriptive: What changes could reduce waiting times? Evaluate staffing or process improvements."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "What are the four main types of Data Analytics?",
      "sampleAnswer": "Descriptive, Diagnostic, Predictive, and Prescriptive Analytics."
    },
    {
      "id": 2,
      "question": "What is Descriptive Analytics?",
      "sampleAnswer": "Descriptive Analytics summarizes historical data to explain what happened."
    },
    {
      "id": 3,
      "question": "What is the difference between Diagnostic and Predictive Analytics?",
      "sampleAnswer": "Diagnostic Analytics investigates why something happened, while Predictive Analytics estimates what may happen in the future."
    },
    {
      "id": 4,
      "question": "What is Prescriptive Analytics?",
      "sampleAnswer": "Prescriptive Analytics uses data, models, and business constraints to recommend suitable actions."
    }
  ]
},

  '2.4': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 2,
  "moduleName": "Data Analyst Essentials",
  "topicKey": "2.4",
  "id": 9,
  "topicTitle": "Understanding Data Types, Sources and Quality",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "Which is an example of numerical data?",
      "options": [
        {
          "key": "A",
          "text": "Customer name"
        },
        {
          "key": "B",
          "text": "Product category"
        },
        {
          "key": "C",
          "text": "Number of orders"
        },
        {
          "key": "D",
          "text": "City name"
        }
      ],
      "correct": 2,
      "explanation": "Order count is quantitative and numeric.",
      "hint": "Look for countable or measurable numbers."
    },
    {
      "id": 2,
      "question": "Which is an example of categorical data?",
      "options": [
        {
          "key": "A",
          "text": "Product category"
        },
        {
          "key": "B",
          "text": "Total revenue"
        },
        {
          "key": "C",
          "text": "Number of employees"
        },
        {
          "key": "D",
          "text": "Delivery duration"
        }
      ],
      "correct": 0,
      "explanation": "Product category groups items into distinct qualitative classes.",
      "hint": "Categories and labels are categorical."
    },
    {
      "id": 3,
      "question": "Which is an example of structured data?",
      "options": [
        {
          "key": "A",
          "text": "A spreadsheet with defined rows and columns"
        },
        {
          "key": "B",
          "text": "A random collection of photographs"
        },
        {
          "key": "C",
          "text": "An audio recording"
        },
        {
          "key": "D",
          "text": "An unformatted video"
        }
      ],
      "correct": 0,
      "explanation": "Tables with predefined columns, rows, and data types are structured data.",
      "hint": "Spreadsheets and SQL tables are structured."
    },
    {
      "id": 4,
      "question": "A company collects responses directly through its own customer survey. This is generally an example of:",
      "options": [
        {
          "key": "A",
          "text": "Secondary data"
        },
        {
          "key": "B",
          "text": "Primary data"
        },
        {
          "key": "C",
          "text": "Duplicate data"
        },
        {
          "key": "D",
          "text": "Invalid data"
        }
      ],
      "correct": 1,
      "explanation": "Data gathered directly by the researcher/organization for a specific purpose is primary data.",
      "hint": "Directly collected survey responses are primary data."
    },
    {
      "id": 5,
      "question": "A researcher uses a previously published government dataset. This is generally:",
      "options": [
        {
          "key": "A",
          "text": "Primary data"
        },
        {
          "key": "B",
          "text": "Missing data"
        },
        {
          "key": "C",
          "text": "Secondary data"
        },
        {
          "key": "D",
          "text": "Duplicate data"
        }
      ],
      "correct": 2,
      "explanation": "Data collected and published by an outside entity is secondary data.",
      "hint": "Existing published reports are secondary data."
    },
    {
      "id": 6,
      "question": "Which situation indicates a data quality problem?",
      "options": [
        {
          "key": "A",
          "text": "A table has column headings"
        },
        {
          "key": "B",
          "text": "A customer record is duplicated unexpectedly"
        },
        {
          "key": "C",
          "text": "A dataset contains dates"
        },
        {
          "key": "D",
          "text": "A file is stored in a database"
        }
      ],
      "correct": 1,
      "explanation": "Unexpected duplicate records inflate counts and distort calculations.",
      "hint": "Duplicates and missing entries indicate quality issues."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Numerical or Categorical?",
      "prompt": "Classify the attributes into Numerical and Categorical types.",
      "tokens": [
        "Age: Numerical",
        "Monthly Income: Numerical",
        "Number of Orders: Numerical",
        "City: Categorical",
        "Product Category: Categorical"
      ],
      "shuffled": [
        "City: Categorical",
        "Age: Numerical",
        "Product Category: Categorical",
        "Monthly Income: Numerical",
        "Number of Orders: Numerical"
      ],
      "expected": [
        "Age: Numerical",
        "Monthly Income: Numerical",
        "Number of Orders: Numerical",
        "City: Categorical",
        "Product Category: Categorical"
      ],
      "hint": "Age, income, and order counts are Numerical; cities and categories are Categorical."
    },
    {
      "id": 2,
      "title": "Puzzle 2 — Primary or Secondary Data?",
      "prompt": "Select the data collection examples that represent Primary Data.",
      "tokens": [
        "Survey conducted directly by the company",
        "Interview conducted for the current study",
        "Previously published government report",
        "Publicly available historical industry dataset"
      ],
      "shuffled": [
        "Previously published government report",
        "Survey conducted directly by the company",
        "Publicly available historical industry dataset",
        "Interview conducted for the current study"
      ],
      "expected": [
        "Survey conducted directly by the company",
        "Interview conducted for the current study"
      ],
      "hint": "Direct surveys and interviews for the current study are Primary."
    },
    {
      "id": 3,
      "title": "Puzzle 3 — Spot the Data Quality Issues",
      "prompt": "Assume this is an inventory master table where each SKU must appear once and stock cannot be negative. Select problematic records for table (P01: 10, P02: —, P02: 7, P03: -5).",
      "tokens": [
        "Missing stock for SKU P02",
        "Duplicate SKU record P02",
        "Invalid negative stock (-5) for SKU P03",
        "Valid stock for P01"
      ],
      "shuffled": [
        "Valid stock for P01",
        "Missing stock for SKU P02",
        "Invalid negative stock (-5) for SKU P03",
        "Duplicate SKU record P02"
      ],
      "expected": [
        "Missing stock for SKU P02",
        "Duplicate SKU record P02",
        "Invalid negative stock (-5) for SKU P03"
      ],
      "hint": "Look for missing values, duplicate SKUs, and negative inventory."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Age, Salary, Units sold",
      "meaning": "Numerical Data"
    },
    {
      "id": 2,
      "snippet": "City, Department, Gender",
      "meaning": "Categorical Data"
    },
    {
      "id": 3,
      "snippet": "Customer satisfaction survey",
      "meaning": "Primary Data source"
    },
    {
      "id": 4,
      "snippet": "Census bureau statistics",
      "meaning": "Secondary Data source"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Mission: Inspect Inventory Data",
      "scenario": "You are a junior Data Analyst checking an inventory master table before a stock report:\n• P01: 10 in stock\n• P02: — (Missing value)\n• P02: 7 (Duplicate SKU)\n• P03: -5 (Invalid negative stock)",
      "prompt": "Identify three data quality problems and explain what should happen before the data is used.",
      "expectedResponse": "Flag the missing value for P02, investigate the duplicate SKU entry for P02, and verify the negative quantity (-5) for P03 against inventory rules. Resolve or document these issues before reporting."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "What is the difference between numerical and categorical data?",
      "sampleAnswer": "Numerical data represents quantities or measurements, while categorical data represents groups or labels."
    },
    {
      "id": 2,
      "question": "What is the difference between Primary and Secondary Data?",
      "sampleAnswer": "Primary Data is collected directly for a specific purpose. Secondary Data is data that was previously collected by another source or for another purpose."
    },
    {
      "id": 3,
      "question": "What is Data Quality?",
      "sampleAnswer": "Data Quality describes how well data meets requirements such as accuracy, completeness, consistency, validity, and timeliness."
    },
    {
      "id": 4,
      "question": "How would you handle missing values?",
      "sampleAnswer": "I would first investigate why the values are missing, then choose an appropriate treatment based on the data and business requirements."
    }
  ]
},

  '2.5': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 2,
  "moduleName": "Data Analyst Essentials",
  "topicKey": "2.5",
  "id": 10,
  "topicTitle": "Data Analytics Workflow: From Question to Action",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What should be the first step in an analytics project?",
      "options": [
        {
          "key": "A",
          "text": "Create a dashboard immediately"
        },
        {
          "key": "B",
          "text": "Clearly define the business question"
        },
        {
          "key": "C",
          "text": "Delete unnecessary files"
        },
        {
          "key": "D",
          "text": "Present recommendations without analysis"
        }
      ],
      "correct": 1,
      "explanation": "Defining the problem statement sets clear scope and guides relevant data collection.",
      "hint": "The workflow begins by defining the business question."
    },
    {
      "id": 2,
      "question": "Why is data preparation important?",
      "options": [
        {
          "key": "A",
          "text": "It improves the reliability and usability of data"
        },
        {
          "key": "B",
          "text": "It guarantees that every hypothesis is correct"
        },
        {
          "key": "C",
          "text": "It eliminates the need for analysis"
        },
        {
          "key": "D",
          "text": "It replaces business requirements"
        }
      ],
      "correct": 0,
      "explanation": "Preparing data resolves missing values, formatting anomalies, and structural errors.",
      "hint": "Preparation improves data reliability."
    },
    {
      "id": 3,
      "question": "What is the main purpose of the analysis stage?",
      "options": [
        {
          "key": "A",
          "text": "To change the company logo"
        },
        {
          "key": "B",
          "text": "To examine data and answer the defined question"
        },
        {
          "key": "C",
          "text": "To collect unrelated information"
        },
        {
          "key": "D",
          "text": "To hide unexpected results"
        }
      ],
      "correct": 1,
      "explanation": "The analysis phase evaluates trends and relationships to address the business question.",
      "hint": "Analysis answers the defined business question."
    },
    {
      "id": 4,
      "question": "What should an analyst do before recommending an action?",
      "options": [
        {
          "key": "A",
          "text": "Check whether the findings support the recommendation"
        },
        {
          "key": "B",
          "text": "Assume every correlation is causal"
        },
        {
          "key": "C",
          "text": "Ignore missing information"
        },
        {
          "key": "D",
          "text": "Select the most attractive chart"
        }
      ],
      "correct": 0,
      "explanation": "Every recommendation must be backed by validated findings from the analysis.",
      "hint": "Verify that findings support the recommendation."
    },
    {
      "id": 5,
      "question": "Why should outcomes be monitored after taking action?",
      "options": [
        {
          "key": "A",
          "text": "To confirm the decision was perfect"
        },
        {
          "key": "B",
          "text": "To avoid further analysis"
        },
        {
          "key": "C",
          "text": "To evaluate results and make improvements"
        },
        {
          "key": "D",
          "text": "To guarantee future profits"
        }
      ],
      "correct": 2,
      "explanation": "Monitoring measures business impact and reveals if adjustments are needed.",
      "hint": "Monitoring evaluates results to guide ongoing improvements."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Arrange the Analytics Workflow",
      "prompt": "Arrange the analytics workflow stages in chronological order.",
      "tokens": [
        "Define Business Question",
        "Collect Data",
        "Prepare Data",
        "Analyze Data",
        "Communicate Findings",
        "Take Action and Monitor"
      ],
      "shuffled": [
        "Analyze Data",
        "Define Business Question",
        "Take Action and Monitor",
        "Collect Data",
        "Communicate Findings",
        "Prepare Data"
      ],
      "expected": [
        "Define Business Question",
        "Collect Data",
        "Prepare Data",
        "Analyze Data",
        "Communicate Findings",
        "Take Action and Monitor"
      ],
      "hint": "Define Question → Collect Data → Prepare Data → Analyze Data → Communicate Findings → Take Action and Monitor."
    },
    {
      "id": 2,
      "title": "Puzzle 2 — Match Workflow Stages to Outputs",
      "prompt": "Match each workflow stage to its deliverable.",
      "tokens": [
        "Define Question: Clear business objective",
        "Collect Data: Relevant source records",
        "Prepare Data: Analysis-ready dataset",
        "Analyze Data: Evidence-based findings",
        "Communicate Findings: Report and recommendations"
      ],
      "shuffled": [
        "Analyze Data: Evidence-based findings",
        "Define Question: Clear business objective",
        "Communicate Findings: Report and recommendations",
        "Collect Data: Relevant source records",
        "Prepare Data: Analysis-ready dataset"
      ],
      "expected": [
        "Define Question: Clear business objective",
        "Collect Data: Relevant source records",
        "Prepare Data: Analysis-ready dataset",
        "Analyze Data: Evidence-based findings",
        "Communicate Findings: Report and recommendations"
      ],
      "hint": "Define = objective; Collect = records; Prepare = clean dataset; Analyze = findings; Communicate = report."
    },
    {
      "id": 3,
      "title": "Puzzle 3 — Find the Missing Step",
      "prompt": "Complete the sequence: Define Question → Collect Data → ? → Analyze Data → Communicate Findings.",
      "tokens": [
        "Prepare Data",
        "Change Logo",
        "Hire Staff"
      ],
      "shuffled": [
        "Change Logo",
        "Prepare Data",
        "Hire Staff"
      ],
      "expected": [
        "Prepare Data"
      ],
      "hint": "Data must be prepared and cleaned before analysis."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Define business question",
      "meaning": "Establish project scope"
    },
    {
      "id": 2,
      "snippet": "Extract and clean records",
      "meaning": "Data preparation phase"
    },
    {
      "id": 3,
      "snippet": "Evaluate metrics and trends",
      "meaning": "Data analysis phase"
    },
    {
      "id": 4,
      "snippet": "Executive report presentation",
      "meaning": "Communicate findings"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Mission: Investigate Falling Café Revenue",
      "scenario": "A café owner asks: “Why did our revenue fall?”\n• Week 1: ₹12,000 revenue\n• Week 2: ₹9,000 revenue (-25% decline)",
      "prompt": "Apply the Data Analytics Workflow to this business problem.",
      "expectedResponse": "1. Define Question: What factors contributed to the revenue decline?\n2. Collect Data: Obtain orders, customer visits, prices, opening hours, and relevant records.\n3. Prepare Data: Check missing, duplicate, and inconsistent records.\n4. Analyze Data: Compare sales patterns and investigate possible contributing factors.\n5. Communicate Findings: Present the supported conclusions and limitations.\n6. Take Action and Monitor: Test a suitable improvement and measure the outcome."
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "What are the main steps in a Data Analytics Workflow?",
      "sampleAnswer": "Define the business question, collect data, prepare data, analyze it, communicate findings, and monitor the results of actions."
    },
    {
      "id": 2,
      "question": "Why is defining the business question important?",
      "sampleAnswer": "It ensures that the analysis focuses on the right problem and uses relevant data."
    },
    {
      "id": 3,
      "question": "Why should analysts validate their findings?",
      "sampleAnswer": "Validation helps identify calculation errors, unsupported assumptions, and misleading conclusions."
    },
    {
      "id": 4,
      "question": "What should happen after presenting an analytics report?",
      "sampleAnswer": "Stakeholders can use the findings to take action, and the outcomes should be monitored to assess whether the action worked."
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
  "moduleName": "Introduction to Programming and Python",
  "topicKey": "3.1",
  "id": 11,
  "topicTitle": "What Is Programming?",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is programming?",
      "options": [
        {
          "key": "A",
          "text": "Drawing pictures on a computer"
        },
        {
          "key": "B",
          "text": "Giving instructions to a computer"
        },
        {
          "key": "C",
          "text": "Cleaning computer hardware"
        },
        {
          "key": "D",
          "text": "Connecting to the internet"
        }
      ],
      "correct": 1,
      "explanation": "Option B is the correct industry best-practice answer.",
      "hint": "Think about core concepts of what is programming?."
    },
    {
      "id": 2,
      "question": "What is a computer program?",
      "options": [
        {
          "key": "A",
          "text": "A set of instructions"
        },
        {
          "key": "B",
          "text": "A computer screen"
        },
        {
          "key": "C",
          "text": "A keyboard"
        },
        {
          "key": "D",
          "text": "An internet connection"
        }
      ],
      "correct": 0,
      "explanation": "Option A is the correct industry best-practice answer.",
      "hint": "Think about core concepts of what is programming?."
    },
    {
      "id": 3,
      "question": "Why do people write programs?",
      "options": [
        {
          "key": "A",
          "text": "Only to play music"
        },
        {
          "key": "B",
          "text": "Only to change wallpaper"
        },
        {
          "key": "C",
          "text": "To solve problems and automate tasks"
        },
        {
          "key": "D",
          "text": "To increase screen size"
        }
      ],
      "correct": 2,
      "explanation": "Option C is the correct industry best-practice answer.",
      "hint": "Think about core concepts of what is programming?."
    },
    {
      "id": 4,
      "question": "Who writes computer programs?",
      "options": [
        {
          "key": "A",
          "text": "A printer"
        },
        {
          "key": "B",
          "text": "A programmer"
        },
        {
          "key": "C",
          "text": "A monitor"
        },
        {
          "key": "D",
          "text": "A mouse"
        }
      ],
      "correct": 1,
      "explanation": "Option B is the correct industry best-practice answer.",
      "hint": "Think about core concepts of what is programming?."
    },
    {
      "id": 5,
      "question": "Which is an example of programming in daily life?",
      "options": [
        {
          "key": "A",
          "text": "Cleaning a table"
        },
        {
          "key": "B",
          "text": "Charging a phone"
        },
        {
          "key": "C",
          "text": "Opening a notebook"
        },
        {
          "key": "D",
          "text": "Creating an app that calculates bills automatically"
        }
      ],
      "correct": 3,
      "explanation": "Option D is the correct industry best-practice answer.",
      "hint": "Think about core concepts of what is programming?."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Create a simple program",
      "prompt": "Arrange the steps in the correct order for: Create a simple program",
      "tokens": [
        "Choose Task",
        "Write Instructions",
        "Run Program"
      ],
      "shuffled": [
        "Write Instructions",
        "Choose Task",
        "Run Program"
      ],
      "expected": [
        "Choose Task",
        "Write Instructions",
        "Run Program"
      ],
      "hint": "Think about what step comes first in create a simple program."
    },
    {
      "id": 2,
      "title": "Puzzle 2 — How a program works",
      "prompt": "Arrange the steps in the correct order for: How a program works",
      "tokens": [
        "Programmer Writes Code",
        "Computer Runs Code",
        "Result Appears"
      ],
      "shuffled": [
        "Result Appears",
        "Computer Runs Code",
        "Programmer Writes Code"
      ],
      "expected": [
        "Programmer Writes Code",
        "Computer Runs Code",
        "Result Appears"
      ],
      "hint": "Think about what step comes first in how a program works."
    },
    {
      "id": 3,
      "title": "Puzzle 3 — Solve a problem using programming",
      "prompt": "Arrange the steps in the correct order for: Solve a problem using programming",
      "tokens": [
        "Identify Problem",
        "Plan Steps",
        "Write Program"
      ],
      "shuffled": [
        "Identify Problem",
        "Write Program",
        "Plan Steps"
      ],
      "expected": [
        "Identify Problem",
        "Plan Steps",
        "Write Program"
      ],
      "hint": "Think about what step comes first in solve a problem using programming."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Instruction",
      "meaning": "A command given to a computer to perform a task"
    },
    {
      "id": 2,
      "snippet": "Program",
      "meaning": "An ordered set of instructions executed by a computer"
    },
    {
      "id": 3,
      "snippet": "Output",
      "meaning": "The resulting data or action produced by a program"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Help the School Office",
      "prompt": "Identify how computer programming automates daily school attendance calculation.",
      "scenario": "School mein daily attendance manually count hoti hai. Staff chahta hai ki computer ye kaam automatically kare.",
      "expectedResponse": "Attendance records se present students count karna"
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "What is programming?",
      "sampleAnswer": "Programming is the process of writing instructions that tell a computer what to do."
    },
    {
      "id": 2,
      "question": "Why is programming useful?",
      "sampleAnswer": "It helps us solve problems, automate repetitive tasks, and build applications."
    },
    {
      "id": 3,
      "question": "Give one real-life example of programming.",
      "sampleAnswer": "A billing application automatically calculates the total amount of purchased products."
    }
  ]
},
  '3.2': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 3,
  "moduleName": "Introduction to Programming and Python",
  "topicKey": "3.2",
  "id": 12,
  "topicTitle": "How Computers Follow Instructions",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "How does a computer perform a task?",
      "options": [
        {
          "key": "A",
          "text": "By guessing what the user wants"
        },
        {
          "key": "B",
          "text": "By making random decisions"
        },
        {
          "key": "C",
          "text": "By following instructions"
        },
        {
          "key": "D",
          "text": "By ignoring commands"
        }
      ],
      "correct": 2,
      "explanation": "Option C is the correct industry best-practice answer.",
      "hint": "Think about core concepts of how computers follow instructions."
    },
    {
      "id": 2,
      "question": "Why is the order of instructions important?",
      "options": [
        {
          "key": "A",
          "text": "It changes the screen color"
        },
        {
          "key": "B",
          "text": "Incorrect order can produce incorrect results"
        },
        {
          "key": "C",
          "text": "It makes the keyboard faster"
        },
        {
          "key": "D",
          "text": "It increases storage"
        }
      ],
      "correct": 1,
      "explanation": "Option B is the correct industry best-practice answer.",
      "hint": "Think about core concepts of how computers follow instructions."
    },
    {
      "id": 3,
      "question": "What is input?",
      "options": [
        {
          "key": "A",
          "text": "Data or instructions given to a computer"
        },
        {
          "key": "B",
          "text": "The final result displayed"
        },
        {
          "key": "C",
          "text": "The computer's power cable"
        },
        {
          "key": "D",
          "text": "A printed report only"
        }
      ],
      "correct": 0,
      "explanation": "Option A is the correct industry best-practice answer.",
      "hint": "Think about core concepts of how computers follow instructions."
    },
    {
      "id": 4,
      "question": "What is output?",
      "options": [
        {
          "key": "A",
          "text": "A mouse click"
        },
        {
          "key": "B",
          "text": "Data entered by the user"
        },
        {
          "key": "C",
          "text": "A keyboard shortcut"
        },
        {
          "key": "D",
          "text": "The result produced by the computer"
        }
      ],
      "correct": 3,
      "explanation": "Option D is the correct industry best-practice answer.",
      "hint": "Think about core concepts of how computers follow instructions."
    },
    {
      "id": 5,
      "question": "What should computer instructions be?",
      "options": [
        {
          "key": "A",
          "text": "Random and incomplete"
        },
        {
          "key": "B",
          "text": "Clear and correctly ordered"
        },
        {
          "key": "C",
          "text": "Different every second"
        },
        {
          "key": "D",
          "text": "Written without a purpose"
        }
      ],
      "correct": 1,
      "explanation": "Option B is the correct industry best-practice answer.",
      "hint": "Think about core concepts of how computers follow instructions."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Use a calculator",
      "prompt": "Arrange the steps in the correct order for: Use a calculator",
      "tokens": [
        "Enter Numbers",
        "Choose Operation",
        "Calculate",
        "Display Result"
      ],
      "shuffled": [
        "Enter Numbers",
        "Display Result",
        "Calculate",
        "Choose Operation"
      ],
      "expected": [
        "Enter Numbers",
        "Choose Operation",
        "Calculate",
        "Display Result"
      ],
      "hint": "Think about what step comes first in use a calculator."
    },
    {
      "id": 2,
      "title": "Puzzle 2 — Login process",
      "prompt": "Arrange the steps in the correct order for: Login process",
      "tokens": [
        "Enter PIN",
        "Computer Checks PIN",
        "Show Login Result"
      ],
      "shuffled": [
        "Enter PIN",
        "Show Login Result",
        "Computer Checks PIN"
      ],
      "expected": [
        "Enter PIN",
        "Computer Checks PIN",
        "Show Login Result"
      ],
      "hint": "Think about what step comes first in login process."
    },
    {
      "id": 3,
      "title": "Puzzle 3 — Print a document",
      "prompt": "Arrange the steps in the correct order for: Print a document",
      "tokens": [
        "Click Print",
        "Computer Sends Print Job",
        "Printer Prints Document"
      ],
      "shuffled": [
        "Click Print",
        "Computer Sends Print Job",
        "Printer Prints Document"
      ],
      "expected": [
        "Click Print",
        "Computer Sends Print Job",
        "Printer Prints Document"
      ],
      "hint": "Think about what step comes first in print a document."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Instruction",
      "meaning": "A command given to a computer to perform a task"
    },
    {
      "id": 2,
      "snippet": "Program",
      "meaning": "An ordered set of instructions executed by a computer"
    },
    {
      "id": 3,
      "snippet": "Output",
      "meaning": "The resulting data or action produced by a program"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Fix the Office Printer",
      "prompt": "Determine what the computer instruction pipeline does after clicking the Print button.",
      "scenario": "Office mein employee computer se document print karna chahta hai.",
      "expectedResponse": "Print job printer ko send karna"
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How does a computer follow instructions?",
      "sampleAnswer": "A computer executes instructions given by a program to perform a task."
    },
    {
      "id": 2,
      "question": "Why must instructions be clear?",
      "sampleAnswer": "Clear instructions help the computer perform the correct operation."
    },
    {
      "id": 3,
      "question": "Explain input and output with an example.",
      "sampleAnswer": "When I enter two numbers in a calculator, those numbers are input. The calculated result is output."
    }
  ]
},
  '3.3': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 3,
  "moduleName": "Introduction to Programming and Python",
  "topicKey": "3.3",
  "id": 13,
  "topicTitle": "What Is Python and Why Use It?",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is Python?",
      "options": [
        {
          "key": "A",
          "text": "A web browser"
        },
        {
          "key": "B",
          "text": "A programming language"
        },
        {
          "key": "C",
          "text": "An operating system"
        },
        {
          "key": "D",
          "text": "A computer brand"
        }
      ],
      "correct": 1,
      "explanation": "Option B is the correct industry best-practice answer.",
      "hint": "Think about core concepts of what is python and why use it?."
    },
    {
      "id": 2,
      "question": "Why is Python popular among beginners?",
      "options": [
        {
          "key": "A",
          "text": "Its syntax is relatively easy to read"
        },
        {
          "key": "B",
          "text": "It works only on mobile phones"
        },
        {
          "key": "C",
          "text": "It does not require instructions"
        },
        {
          "key": "D",
          "text": "It is used only for games"
        }
      ],
      "correct": 0,
      "explanation": "Option A is the correct industry best-practice answer.",
      "hint": "Think about core concepts of what is python and why use it?."
    },
    {
      "id": 3,
      "question": "Which task can Python perform?",
      "options": [
        {
          "key": "A",
          "text": "Only change wallpapers"
        },
        {
          "key": "B",
          "text": "Only open websites"
        },
        {
          "key": "C",
          "text": "Only play videos"
        },
        {
          "key": "D",
          "text": "Automate tasks and analyze data"
        }
      ],
      "correct": 3,
      "explanation": "Option D is the correct industry best-practice answer.",
      "hint": "Think about core concepts of what is python and why use it?."
    },
    {
      "id": 4,
      "question": "Which statement about Python is correct?",
      "options": [
        {
          "key": "A",
          "text": "Python is only a spreadsheet application"
        },
        {
          "key": "B",
          "text": "Python cannot process numbers"
        },
        {
          "key": "C",
          "text": "Python is a general-purpose programming language"
        },
        {
          "key": "D",
          "text": "Python is a computer component"
        }
      ],
      "correct": 2,
      "explanation": "Option C is the correct industry best-practice answer.",
      "hint": "Think about core concepts of what is python and why use it?."
    },
    {
      "id": 5,
      "question": "Can Python be used in Data Analytics?",
      "options": [
        {
          "key": "A",
          "text": "No, never"
        },
        {
          "key": "B",
          "text": "Yes, to process and analyze data"
        },
        {
          "key": "C",
          "text": "Only for graphic design"
        },
        {
          "key": "D",
          "text": "Only for sending emails"
        }
      ],
      "correct": 1,
      "explanation": "Option B is the correct industry best-practice answer.",
      "hint": "Think about core concepts of what is python and why use it?."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Start learning Python",
      "prompt": "Arrange the steps in the correct order for: Start learning Python",
      "tokens": [
        "Learn Python Basics",
        "Write Simple Code",
        "Run Code"
      ],
      "shuffled": [
        "Learn Python Basics",
        "Write Simple Code",
        "Run Code"
      ],
      "expected": [
        "Learn Python Basics",
        "Write Simple Code",
        "Run Code"
      ],
      "hint": "Think about what step comes first in start learning python."
    },
    {
      "id": 2,
      "title": "Puzzle 2 — How Python produces a result",
      "prompt": "Arrange the steps in the correct order for: How Python produces a result",
      "tokens": [
        "Python Code",
        "Python Interpreter Executes",
        "Output"
      ],
      "shuffled": [
        "Python Interpreter Executes",
        "Output",
        "Python Code"
      ],
      "expected": [
        "Python Code",
        "Python Interpreter Executes",
        "Output"
      ],
      "hint": "Think about what step comes first in how python produces a result."
    },
    {
      "id": 3,
      "title": "Puzzle 3 — Use Python for a small task",
      "prompt": "Arrange the steps in the correct order for: Use Python for a small task",
      "tokens": [
        "Choose Task",
        "Write Python Instructions",
        "Execute Program",
        "See Result"
      ],
      "shuffled": [
        "Write Python Instructions",
        "Execute Program",
        "See Result",
        "Choose Task"
      ],
      "expected": [
        "Choose Task",
        "Write Python Instructions",
        "Execute Program",
        "See Result"
      ],
      "hint": "Think about what step comes first in use python for a small task."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Instruction",
      "meaning": "A command given to a computer to perform a task"
    },
    {
      "id": 2,
      "snippet": "Program",
      "meaning": "An ordered set of instructions executed by a computer"
    },
    {
      "id": 3,
      "snippet": "Output",
      "meaning": "The resulting data or action produced by a program"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Choose a Programming Language",
      "prompt": "Select the best general-purpose programming language for beginner automation and Data Analytics.",
      "scenario": "Ek student beginner hai. Woh programming seekhkar simple automation aur Data Analytics karna chahta hai.",
      "expectedResponse": "Python Programming Language"
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "What is Python?",
      "sampleAnswer": "Python is a high-level, general-purpose programming language used to build applications, automate tasks, and analyze data."
    },
    {
      "id": 2,
      "question": "Why is Python beginner-friendly?",
      "sampleAnswer": "Python has readable syntax, which makes basic programs easier to understand and write."
    },
    {
      "id": 3,
      "question": "What are some common uses of Python?",
      "sampleAnswer": "Python is used in Data Analytics, automation, web development, and AI applications."
    }
  ]
},
  '3.4': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 3,
  "moduleName": "Introduction to Programming and Python",
  "topicKey": "3.4",
  "id": 14,
  "topicTitle": "Python in Data Analytics and Real Life",
  "mode": "Non-coding",
  "game1Quiz": [
    {
      "id": 1,
      "question": "How can Python help a Data Analyst?",
      "options": [
        {
          "key": "A",
          "text": "By cleaning and analyzing data"
        },
        {
          "key": "B",
          "text": "By repairing computer hardware"
        },
        {
          "key": "C",
          "text": "By changing office furniture"
        },
        {
          "key": "D",
          "text": "By increasing monitor size"
        }
      ],
      "correct": 0,
      "explanation": "Option A is the correct industry best-practice answer.",
      "hint": "Think about core concepts of python in data analytics and real life."
    },
    {
      "id": 2,
      "question": "A shop has 1,000 sales records. What can Python help calculate?",
      "options": [
        {
          "key": "A",
          "text": "The color of the shop"
        },
        {
          "key": "B",
          "text": "The shop's address without any location data"
        },
        {
          "key": "C",
          "text": "Total sales from those records"
        },
        {
          "key": "D",
          "text": "The owner's favorite product without any information"
        }
      ],
      "correct": 2,
      "explanation": "Option C is the correct industry best-practice answer.",
      "hint": "Think about core concepts of python in data analytics and real life."
    },
    {
      "id": 3,
      "question": "What is Data Cleaning?",
      "options": [
        {
          "key": "A",
          "text": "Deleting every file"
        },
        {
          "key": "B",
          "text": "Finding and correcting data problems"
        },
        {
          "key": "C",
          "text": "Washing a computer"
        },
        {
          "key": "D",
          "text": "Changing a keyboard"
        }
      ],
      "correct": 1,
      "explanation": "Option B is the correct industry best-practice answer.",
      "hint": "Think about core concepts of python in data analytics and real life."
    },
    {
      "id": 4,
      "question": "How can Python help with repetitive work?",
      "options": [
        {
          "key": "A",
          "text": "By requiring every step to be repeated manually"
        },
        {
          "key": "B",
          "text": "By turning off the computer"
        },
        {
          "key": "C",
          "text": "By hiding all data"
        },
        {
          "key": "D",
          "text": "By automating repeated operations"
        }
      ],
      "correct": 3,
      "explanation": "Option D is the correct industry best-practice answer.",
      "hint": "Think about core concepts of python in data analytics and real life."
    },
    {
      "id": 5,
      "question": "Which is a real-life Python use case?",
      "options": [
        {
          "key": "A",
          "text": "Analyzing monthly sales records"
        },
        {
          "key": "B",
          "text": "Painting an office wall"
        },
        {
          "key": "C",
          "text": "Replacing a broken chair"
        },
        {
          "key": "D",
          "text": "Cleaning a window"
        }
      ],
      "correct": 0,
      "explanation": "Option A is the correct industry best-practice answer.",
      "hint": "Think about core concepts of python in data analytics and real life."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Analyze shop sales",
      "prompt": "Arrange the steps in the correct order for: Analyze shop sales",
      "tokens": [
        "Collect Sales Data",
        "Process with Python",
        "View Sales Summary"
      ],
      "shuffled": [
        "Process with Python",
        "View Sales Summary",
        "Collect Sales Data"
      ],
      "expected": [
        "Collect Sales Data",
        "Process with Python",
        "View Sales Summary"
      ],
      "hint": "Think about what step comes first in analyze shop sales."
    },
    {
      "id": 2,
      "title": "Puzzle 2 — Analyze student marks",
      "prompt": "Arrange the steps in the correct order for: Analyze student marks",
      "tokens": [
        "Collect Marks",
        "Calculate Results with Python",
        "Prepare Report"
      ],
      "shuffled": [
        "Prepare Report",
        "Collect Marks",
        "Calculate Results with Python"
      ],
      "expected": [
        "Collect Marks",
        "Calculate Results with Python",
        "Prepare Report"
      ],
      "hint": "Think about what step comes first in analyze student marks."
    },
    {
      "id": 3,
      "title": "Puzzle 3 — Analyze weather data",
      "prompt": "Arrange the steps in the correct order for: Analyze weather data",
      "tokens": [
        "Collect Temperature Readings",
        "Calculate Average with Python",
        "Display Result"
      ],
      "shuffled": [
        "Calculate Average with Python",
        "Display Result",
        "Collect Temperature Readings"
      ],
      "expected": [
        "Collect Temperature Readings",
        "Calculate Average with Python",
        "Display Result"
      ],
      "hint": "Think about what step comes first in analyze weather data."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Instruction",
      "meaning": "A command given to a computer to perform a task"
    },
    {
      "id": 2,
      "snippet": "Program",
      "meaning": "An ordered set of instructions executed by a computer"
    },
    {
      "id": 3,
      "snippet": "Output",
      "meaning": "The resulting data or action produced by a program"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Help a Grocery Store",
      "prompt": "Choose how Python automates retail billing and daily revenue calculations.",
      "scenario": "Ek grocery shop mein daily bahut saare bills bante hain. Owner ko din ki total sales calculate karni hain.",
      "expectedResponse": "Sales Records se total amount calculate karna"
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How is Python used in Data Analytics?",
      "sampleAnswer": "Python helps us clean, process, analyze, and visualize data."
    },
    {
      "id": 2,
      "question": "Give a real-life example of Python in business.",
      "sampleAnswer": "A shop can use Python to calculate daily sales and identify best-selling products."
    },
    {
      "id": 3,
      "question": "Can Python automate repetitive tasks?",
      "sampleAnswer": "Yes. Python can automate repeated tasks such as processing files and generating reports."
    },
    {
      "id": 4,
      "question": "Why is Python useful for working with large datasets?",
      "sampleAnswer": "Python provides tools and libraries that make data processing and analysis easier."
    }
  ]
},
  '3.5': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 3,
  "moduleName": "Introduction to Programming and Python",
  "topicKey": "3.5",
  "id": 15,
  "topicTitle": "Setting Up Python and Your Coding Environment",
  "mode": "Coding/tool practice",
  "game1Quiz": [
    {
      "id": 1,
      "question": "Where can you download the official Python installer?",
      "options": [
        {
          "key": "A",
          "text": "Any unknown popup"
        },
        {
          "key": "B",
          "text": "A random advertisement"
        },
        {
          "key": "C",
          "text": "python.org"
        },
        {
          "key": "D",
          "text": "A photo editing website"
        }
      ],
      "correct": 2,
      "explanation": "Option C is the correct industry best-practice answer.",
      "hint": "Think about core concepts of setting up python and your coding environment."
    },
    {
      "id": 2,
      "question": "What is a code editor used for?",
      "options": [
        {
          "key": "A",
          "text": "Writing and editing code"
        },
        {
          "key": "B",
          "text": "Repairing a computer screen"
        },
        {
          "key": "C",
          "text": "Cleaning data cables"
        },
        {
          "key": "D",
          "text": "Charging a laptop"
        }
      ],
      "correct": 0,
      "explanation": "Option A is the correct industry best-practice answer.",
      "hint": "Think about core concepts of setting up python and your coding environment."
    },
    {
      "id": 3,
      "question": "What is the common file extension for Python source files?",
      "options": [
        {
          "key": "A",
          "text": ".jpg"
        },
        {
          "key": "B",
          "text": ".py"
        },
        {
          "key": "C",
          "text": ".mp3"
        },
        {
          "key": "D",
          "text": ".pdf"
        }
      ],
      "correct": 1,
      "explanation": "Option B is the correct industry best-practice answer.",
      "hint": "Think about core concepts of setting up python and your coding environment."
    },
    {
      "id": 4,
      "question": "Which command can check the installed Python version?",
      "options": [
        {
          "key": "A",
          "text": "open python"
        },
        {
          "key": "B",
          "text": "start coding"
        },
        {
          "key": "C",
          "text": "show laptop"
        },
        {
          "key": "D",
          "text": "python --version"
        }
      ],
      "correct": 3,
      "explanation": "Option D is the correct industry best-practice answer.",
      "hint": "Think about core concepts of setting up python and your coding environment."
    },
    {
      "id": 5,
      "question": "What is a terminal commonly used for in Python development?",
      "options": [
        {
          "key": "A",
          "text": "Changing screen brightness"
        },
        {
          "key": "B",
          "text": "Drawing pictures"
        },
        {
          "key": "C",
          "text": "Running commands and Python programs"
        },
        {
          "key": "D",
          "text": "Repairing the keyboard"
        }
      ],
      "correct": 2,
      "explanation": "Option C is the correct industry best-practice answer.",
      "hint": "Think about core concepts of setting up python and your coding environment."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Install Python",
      "prompt": "Arrange the steps in the correct order for: Install Python",
      "tokens": [
        "Download Python",
        "Run Installer",
        "Complete Installation",
        "Verify Version"
      ],
      "shuffled": [
        "Run Installer",
        "Download Python",
        "Verify Version",
        "Complete Installation"
      ],
      "expected": [
        "Download Python",
        "Run Installer",
        "Complete Installation",
        "Verify Version"
      ],
      "hint": "Think about what step comes first in install python."
    },
    {
      "id": 2,
      "title": "Puzzle 2 — Create a Python file",
      "prompt": "Arrange the steps in the correct order for: Create a Python file",
      "tokens": [
        "Open Code Editor",
        "Create New File",
        "Write Code",
        "Save as .py"
      ],
      "shuffled": [
        "Write Code",
        "Open Code Editor",
        "Create New File",
        "Save as .py"
      ],
      "expected": [
        "Open Code Editor",
        "Create New File",
        "Write Code",
        "Save as .py"
      ],
      "hint": "Think about what step comes first in create a python file."
    },
    {
      "id": 3,
      "title": "Puzzle 3 — Check Python installation",
      "prompt": "Arrange the steps in the correct order for: Check Python installation",
      "tokens": [
        "Open Terminal",
        "Type python --version",
        "Press Enter",
        "View Version"
      ],
      "shuffled": [
        "Open Terminal",
        "View Version",
        "Press Enter",
        "Type python --version"
      ],
      "expected": [
        "Open Terminal",
        "Type python --version",
        "Press Enter",
        "View Version"
      ],
      "hint": "Think about what step comes first in check python installation."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Instruction",
      "meaning": "A command given to a computer to perform a task"
    },
    {
      "id": 2,
      "snippet": "Program",
      "meaning": "An ordered set of instructions executed by a computer"
    },
    {
      "id": 3,
      "snippet": "Output",
      "meaning": "The resulting data or action produced by a program"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Set Up a New Office Laptop",
      "prompt": "Determine the crucial first step to set up a new Python programming environment.",
      "scenario": "Ek new employee Python seekhna chahta hai. Uske laptop par Python installed nahi hai.",
      "expectedResponse": "Python ka official installer download aur install karna"
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How do you install Python?",
      "sampleAnswer": "I download Python from its official website, run the installer, and verify the installation."
    },
    {
      "id": 2,
      "question": "What is a code editor?",
      "sampleAnswer": "A code editor is software used to write and edit source code."
    },
    {
      "id": 3,
      "question": "What is the extension of a Python file?",
      "sampleAnswer": "A Python source file normally uses the .py extension."
    },
    {
      "id": 4,
      "question": "How can you check whether Python is installed?",
      "sampleAnswer": "I can open a terminal and run python --version, or python3 --version on systems that use that command."
    }
  ]
},
  '3.6': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 3,
  "moduleName": "Introduction to Programming and Python",
  "topicKey": "3.6",
  "id": 16,
  "topicTitle": "Writing and Running Your First Python Program",
  "mode": "Coding/tool practice",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the output of this Python code?",
      "options": [
        {
          "key": "A",
          "text": "print"
        },
        {
          "key": "B",
          "text": "Hello"
        },
        {
          "key": "C",
          "text": "\"print Hello\""
        },
        {
          "key": "D",
          "text": "Error"
        }
      ],
      "correct": 1,
      "explanation": "Option B is the correct industry best-practice answer.",
      "hint": "Think about core concepts of writing and running your first python program."
    },
    {
      "id": 2,
      "question": "Which is the correct Python statement?",
      "options": [
        {
          "key": "A",
          "text": "print(\"Welcome\")"
        },
        {
          "key": "B",
          "text": "Print(Welcome)"
        },
        {
          "key": "C",
          "text": "print Welcome"
        },
        {
          "key": "D",
          "text": "show Welcome"
        }
      ],
      "correct": 0,
      "explanation": "Option A is the correct industry best-practice answer.",
      "hint": "Think about core concepts of writing and running your first python program."
    },
    {
      "id": 3,
      "question": "What does print(10) display?",
      "options": [
        {
          "key": "A",
          "text": "print"
        },
        {
          "key": "B",
          "text": "\"10\""
        },
        {
          "key": "C",
          "text": "10"
        },
        {
          "key": "D",
          "text": "Error"
        }
      ],
      "correct": 2,
      "explanation": "Option C is the correct industry best-practice answer.",
      "hint": "Think about core concepts of writing and running your first python program."
    },
    {
      "id": 4,
      "question": "Which statement about Python is correct?",
      "options": [
        {
          "key": "A",
          "text": "Print and print are always identical"
        },
        {
          "key": "B",
          "text": "Python ignores all spelling differences"
        },
        {
          "key": "C",
          "text": "Parentheses are never needed for print"
        },
        {
          "key": "D",
          "text": "Python is case-sensitive"
        }
      ],
      "correct": 3,
      "explanation": "Option D is the correct industry best-practice answer.",
      "hint": "Think about core concepts of writing and running your first python program."
    },
    {
      "id": 5,
      "question": "What is missing in this code?",
      "options": [
        {
          "key": "A",
          "text": "A number"
        },
        {
          "key": "B",
          "text": "A closing parenthesis )"
        },
        {
          "key": "C",
          "text": "A new file"
        },
        {
          "key": "D",
          "text": "A keyboard"
        }
      ],
      "correct": 1,
      "explanation": "Option B is the correct industry best-practice answer.",
      "hint": "Think about core concepts of writing and running your first python program."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Arrange the tokens to display Hello.",
      "prompt": "Arrange the tokens/steps for: Arrange the tokens to display Hello.",
      "tokens": [
        "print",
        "(",
        "\"Hello\"",
        ")"
      ],
      "shuffled": [
        "\"Hello\"",
        "(",
        "print",
        ")"
      ],
      "expected": [
        "print",
        "(",
        "\"Hello\"",
        ")"
      ],
      "hint": "Think about the proper sequence for arrange the tokens to display hello.."
    },
    {
      "id": 2,
      "title": "Puzzle 2 — Arrange the tokens to display the number 10.",
      "prompt": "Arrange the tokens/steps for: Arrange the tokens to display the number 10.",
      "tokens": [
        "print",
        "(",
        "10",
        ")"
      ],
      "shuffled": [
        "10",
        "(",
        ")",
        "print"
      ],
      "expected": [
        "print",
        "(",
        "10",
        ")"
      ],
      "hint": "Think about the proper sequence for arrange the tokens to display the number 10.."
    },
    {
      "id": 3,
      "title": "Puzzle 3 — Arrange the steps to run a Python program.",
      "prompt": "Arrange the tokens/steps for: Arrange the steps to run a Python program.",
      "tokens": [
        "Open Code Editor",
        "Type print(\"Welcome\")",
        "Save Python File",
        "Run Program",
        "See Welcome in Output"
      ],
      "shuffled": [
        "Save Python File",
        "Open Code Editor",
        "See Welcome in Output",
        "Type print(\"Welcome\")",
        "Run Program"
      ],
      "expected": [
        "Open Code Editor",
        "Type print(\"Welcome\")",
        "Save Python File",
        "Run Program",
        "See Welcome in Output"
      ],
      "hint": "Think about the proper sequence for arrange the steps to run a python program.."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Instruction",
      "meaning": "A command given to a computer to perform a task"
    },
    {
      "id": 2,
      "snippet": "Program",
      "meaning": "An ordered set of instructions executed by a computer"
    },
    {
      "id": 3,
      "snippet": "Output",
      "meaning": "The resulting data or action produced by a program"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Create a Welcome Message",
      "prompt": "Write the exact syntax to display Welcome to Future IT on the terminal screen.",
      "scenario": "Future IT Industry mein ek new employee ko task mila hai: computer screen par Welcome to Future IT display karna hai.",
      "expectedResponse": "print(\"Welcome to Future IT\")"
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "How do you display text in Python?",
      "sampleAnswer": "I use the print() function to display text."
    },
    {
      "id": 2,
      "question": "What is the output of print(\"Hello World\")?",
      "sampleAnswer": "The output is Hello World."
    },
    {
      "id": 3,
      "question": "How do you run a Python program?",
      "sampleAnswer": "I save my code in a Python file and run it using a Python interpreter, such as from a terminal or code editor."
    },
    {
      "id": 4,
      "question": "What happens if you forget a closing parenthesis?",
      "sampleAnswer": "Python reports a syntax error because the statement is incomplete."
    }
  ]
},
  '4.1': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 4,
  "moduleName": "Python Syntax and Core Basics",
  "topicKey": "4.1",
  "id": 17,
  "topicTitle": "Python Syntax, Indentation and Comments",
  "mode": "Coding/tool practice",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is Python syntax?",
      "options": [
        {
          "key": "A",
          "text": "Rules for writing Python code"
        },
        {
          "key": "B",
          "text": "Computer screen settings"
        },
        {
          "key": "C",
          "text": "Internet connection speed"
        },
        {
          "key": "D",
          "text": "Computer hardware"
        }
      ],
      "correct": 0,
      "explanation": "Syntax Python code likhne ke rules hain jinko follow karna zaroori hota hai.",
      "hint": "Think about grammar rules used to write valid instructions."
    },
    {
      "id": 2,
      "question": "What does indentation mean in Python?",
      "options": [
        {
          "key": "A",
          "text": "Adding colors to code"
        },
        {
          "key": "B",
          "text": "Adding spaces at the beginning of a code line"
        },
        {
          "key": "C",
          "text": "Deleting a file"
        },
        {
          "key": "D",
          "text": "Printing output"
        }
      ],
      "correct": 1,
      "explanation": "Indentation code blocks identify karne aur structure maintain karne mein help karta hai.",
      "hint": "Think of leading spaces at the start of a line."
    },
    {
      "id": 3,
      "question": "Which symbol starts a single-line comment in Python?",
      "options": [
        {
          "key": "A",
          "text": "@"
        },
        {
          "key": "B",
          "text": "$"
        },
        {
          "key": "C",
          "text": "#"
        },
        {
          "key": "D",
          "text": "&"
        }
      ],
      "correct": 2,
      "explanation": "Python mein # symbol se single-line comment start hota hai.",
      "hint": "The hash/pound symbol is used for comments."
    },
    {
      "id": 4,
      "question": "What happens to comments when a Python program runs?",
      "options": [
        {
          "key": "A",
          "text": "They always appear in output"
        },
        {
          "key": "B",
          "text": "They automatically become variables"
        },
        {
          "key": "C",
          "text": "They stop the computer"
        },
        {
          "key": "D",
          "text": "Python ignores them during execution"
        }
      ],
      "correct": 3,
      "explanation": "Python comments ko execution ke time completely ignore karta hai.",
      "hint": "Comments are notes for humans, not instructions for the computer."
    },
    {
      "id": 5,
      "question": "Which statement is written with correct Python syntax?",
      "options": [
        {
          "key": "A",
          "text": "Print(\"Hello\")"
        },
        {
          "key": "B",
          "text": "print(\"Hello\")"
        },
        {
          "key": "C",
          "text": "print \"Hello\""
        },
        {
          "key": "D",
          "text": "PRINT(\"Hello\")"
        }
      ],
      "correct": 1,
      "explanation": "print(\"Hello\") lowercase mein quotation marks ke sath correct syntax hai.",
      "hint": "Python is case-sensitive, so functions are written in lowercase."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Arrange Correct Python Syntax",
      "prompt": "Arrange the shuffled tokens to display Hello.",
      "tokens": [
        "print",
        "(",
        "\"Hello\"",
        ")"
      ],
      "shuffled": [
        ")",
        "\"Hello\"",
        "print",
        "("
      ],
      "expected": [
        "print",
        "(",
        "\"Hello\"",
        ")"
      ],
      "hint": "Start with function name print, open parenthesis, string, and close parenthesis."
    },
    {
      "id": 2,
      "title": "Puzzle 2 — Fix the Indentation",
      "prompt": "Place the indented line under the given block header.",
      "tokens": [
        "if True:",
        "    print(\"Ready\")"
      ],
      "shuffled": [
        "    print(\"Ready\")",
        "if True:"
      ],
      "expected": [
        "if True:",
        "    print(\"Ready\")"
      ],
      "hint": "Header line ends with a colon, followed by indented code line."
    },
    {
      "id": 3,
      "title": "Puzzle 3 — Create a Python Comment",
      "prompt": "Arrange tokens to write a comment.",
      "tokens": [
        "#",
        "This is my first program"
      ],
      "shuffled": [
        "This is my first program",
        "#"
      ],
      "expected": [
        "#",
        "This is my first program"
      ],
      "hint": "Comments in Python begin with the # character."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Syntax",
      "meaning": "Rules governing structure of valid code statements"
    },
    {
      "id": 2,
      "snippet": "Variable",
      "meaning": "Named reference to store and retrieve data values"
    },
    {
      "id": 3,
      "snippet": "Data Type",
      "meaning": "Classification specifying what kind of value data represents"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Add a Note to Office Code",
      "prompt": "Correct Python comment select karo.",
      "scenario": "Office mein ek Python file hai. Employee code mein Daily Sales Report ka note add karna chahta hai, lekin note screen par print nahi hona chahiye.",
      "expectedResponse": "# Daily Sales Report"
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "What is Python syntax?",
      "sampleAnswer": "Python syntax is the set of rules used to write valid Python code."
    },
    {
      "id": 2,
      "question": "What is indentation in Python?",
      "sampleAnswer": "Indentation means spaces at the beginning of a line. Python uses indentation to define code blocks."
    },
    {
      "id": 3,
      "question": "What is a comment in Python?",
      "sampleAnswer": "A comment is a note in the code that Python ignores during execution."
    },
    {
      "id": 4,
      "question": "What happens if indentation is incorrect?",
      "sampleAnswer": "Incorrect indentation can cause an IndentationError or change the program's behavior."
    }
  ]
},
  '4.2': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 4,
  "moduleName": "Python Syntax and Core Basics",
  "topicKey": "4.2",
  "id": 18,
  "topicTitle": "print() and Displaying Output",
  "mode": "Coding/tool practice",
  "game1Quiz": [
    {
      "id": 1,
      "question": "Which function displays output in Python?",
      "options": [
        {
          "key": "A",
          "text": "input()"
        },
        {
          "key": "B",
          "text": "print()"
        },
        {
          "key": "C",
          "text": "type()"
        },
        {
          "key": "D",
          "text": "int()"
        }
      ],
      "correct": 1,
      "explanation": "print() built-in function screen par output display karta hai.",
      "hint": "Think about the function that prints text to the console."
    },
    {
      "id": 2,
      "question": "What is the output of this code?\nprint(\"Hello\")",
      "options": [
        {
          "key": "A",
          "text": "print"
        },
        {
          "key": "B",
          "text": "Error"
        },
        {
          "key": "C",
          "text": "Hello"
        },
        {
          "key": "D",
          "text": "Nothing"
        }
      ],
      "correct": 2,
      "explanation": "print(\"Hello\") screen par Hello display karta hai.",
      "hint": "Text inside quotes is printed as-is without the quotes."
    },
    {
      "id": 3,
      "question": "What is the output of print(5 + 3)?",
      "options": [
        {
          "key": "A",
          "text": "8"
        },
        {
          "key": "B",
          "text": "53"
        },
        {
          "key": "C",
          "text": "5 + 3"
        },
        {
          "key": "D",
          "text": "Error"
        }
      ],
      "correct": 0,
      "explanation": "Numbers without quotes evaluate arithmetic calculations, so 5 + 3 = 8.",
      "hint": "Python evaluates expressions before printing the result."
    },
    {
      "id": 4,
      "question": "What is the output of print(\"5 + 3\")?",
      "options": [
        {
          "key": "A",
          "text": "8"
        },
        {
          "key": "B",
          "text": "53"
        },
        {
          "key": "C",
          "text": "Error"
        },
        {
          "key": "D",
          "text": "5 + 3"
        }
      ],
      "correct": 3,
      "explanation": "Quotes ke andar ka text string literal hota hai aur as-it-is display hota hai.",
      "hint": "Quotation marks preserve the literal characters."
    },
    {
      "id": 5,
      "question": "What is the output of print(\"Hi\", \"Python\")?",
      "options": [
        {
          "key": "A",
          "text": "HiPython"
        },
        {
          "key": "B",
          "text": "Hi Python"
        },
        {
          "key": "C",
          "text": "Hi,Python"
        },
        {
          "key": "D",
          "text": "Error"
        }
      ],
      "correct": 1,
      "explanation": "Comma separated arguments print karte time Python automatically single space add karta hai.",
      "hint": "print() separates multiple items with a space by default."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Display Welcome",
      "prompt": "Arrange the tokens to display Welcome: \"Welcome\", ), print, (",
      "tokens": [
        "print",
        "(",
        "\"Welcome\"",
        ")"
      ],
      "shuffled": [
        "\"Welcome\"",
        ")",
        "print",
        "("
      ],
      "expected": [
        "print",
        "(",
        "\"Welcome\"",
        ")"
      ],
      "hint": "Structure: print(\"Welcome\")"
    },
    {
      "id": 2,
      "title": "Puzzle 2 — Display a Number",
      "prompt": "Arrange tokens to print the number 25.",
      "tokens": [
        "print",
        "(",
        "25",
        ")"
      ],
      "shuffled": [
        "25",
        "(",
        "print",
        ")"
      ],
      "expected": [
        "print",
        "(",
        "25",
        ")"
      ],
      "hint": "Numbers do not need quotation marks."
    },
    {
      "id": 3,
      "title": "Puzzle 3 — Display Calculation",
      "prompt": "Arrange tokens to calculate and print 10 + 5.",
      "tokens": [
        "print",
        "(",
        "10",
        "+",
        "5",
        ")"
      ],
      "shuffled": [
        "10",
        "+",
        "5",
        ")",
        "print",
        "("
      ],
      "expected": [
        "print",
        "(",
        "10",
        "+",
        "5",
        ")"
      ],
      "hint": "Place numbers and plus operator inside print parentheses."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Syntax",
      "meaning": "Rules governing structure of valid code statements"
    },
    {
      "id": 2,
      "snippet": "Variable",
      "meaning": "Named reference to store and retrieve data values"
    },
    {
      "id": 3,
      "snippet": "Data Type",
      "meaning": "Classification specifying what kind of value data represents"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Display a Welcome Message",
      "prompt": "Correct Python code select karo.",
      "scenario": "Ek office reception computer par Welcome to Future IT display karna hai.",
      "expectedResponse": "print(\"Welcome to Future IT\")"
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "What is the use of print() in Python?",
      "sampleAnswer": "The print() function displays output on the screen."
    },
    {
      "id": 2,
      "question": "How do you print text in Python?",
      "sampleAnswer": "I write the text inside quotation marks, such as print(\"Hello\")."
    },
    {
      "id": 3,
      "question": "What is the difference between print(10) and print(\"10\")?",
      "sampleAnswer": "Both display 10, but the first uses an integer and the second uses a string."
    },
    {
      "id": 4,
      "question": "Can print() display a calculation result?",
      "sampleAnswer": "Yes. For example, print(5 + 3) displays 8."
    }
  ]
},
  '4.3': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 4,
  "moduleName": "Python Syntax and Core Basics",
  "topicKey": "4.3",
  "id": 19,
  "topicTitle": "Variables and Storing Information",
  "mode": "Coding/tool practice",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is a variable in Python?",
      "options": [
        {
          "key": "A",
          "text": "A computer screen"
        },
        {
          "key": "B",
          "text": "A named reference used to store and access a value"
        },
        {
          "key": "C",
          "text": "A keyboard shortcut"
        },
        {
          "key": "D",
          "text": "A Python error"
        }
      ],
      "correct": 1,
      "explanation": "Variable ek named reference hota hai jisme value store ki ja sakti hai.",
      "hint": "Think of a labeled storage box that holds information."
    },
    {
      "id": 2,
      "question": "What does this statement do?\nage = 20",
      "options": [
        {
          "key": "A",
          "text": "Prints 20 automatically"
        },
        {
          "key": "B",
          "text": "Deletes age"
        },
        {
          "key": "C",
          "text": "Assigns the value 20 to age"
        },
        {
          "key": "D",
          "text": "Creates an error"
        }
      ],
      "correct": 2,
      "explanation": "= assignment operator age variable ko 20 value assign karta hai.",
      "hint": "The single equals sign assigns the right-hand value to the left-hand variable."
    },
    {
      "id": 3,
      "question": "Which statement correctly stores a name?",
      "options": [
        {
          "key": "A",
          "text": "name = \"Riya\""
        },
        {
          "key": "B",
          "text": "name = Riya"
        },
        {
          "key": "C",
          "text": "name == \"Riya\""
        },
        {
          "key": "D",
          "text": "name \"Riya\""
        }
      ],
      "correct": 0,
      "explanation": "String values ko quotation marks ke andar single = sign ke sath assign karte hain.",
      "hint": "Text strings must be in quotes and assignment uses a single equals sign."
    },
    {
      "id": 4,
      "question": "Which is a valid Python variable name?",
      "options": [
        {
          "key": "A",
          "text": "2name"
        },
        {
          "key": "B",
          "text": "student name"
        },
        {
          "key": "C",
          "text": "student-name"
        },
        {
          "key": "D",
          "text": "student_name"
        }
      ],
      "correct": 3,
      "explanation": "Variable names letters aur underscores se start ho sakte hain aur unme spaces ya hyphens allow nahi hote.",
      "hint": "Use underscore _ instead of spaces or hyphens."
    },
    {
      "id": 5,
      "question": "What is the output?\nx = 5\nx = 8\nprint(x)",
      "options": [
        {
          "key": "A",
          "text": "5"
        },
        {
          "key": "B",
          "text": "8"
        },
        {
          "key": "C",
          "text": "58"
        },
        {
          "key": "D",
          "text": "Error"
        }
      ],
      "correct": 1,
      "explanation": "Variable ko nayi value assign karne par latest value 8 use hoti hai.",
      "hint": "The most recent assignment overwrites the previous value."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Store a Student Name",
      "prompt": "Arrange tokens to assign student name: \"Riya\", =, student_name",
      "tokens": [
        "student_name",
        "=",
        "\"Riya\""
      ],
      "shuffled": [
        "\"Riya\"",
        "=",
        "student_name"
      ],
      "expected": [
        "student_name",
        "=",
        "\"Riya\""
      ],
      "hint": "Variable name goes on the left, value on the right."
    },
    {
      "id": 2,
      "title": "Puzzle 2 — Store a Product Price",
      "prompt": "Arrange tokens to store product price: 100, price, =",
      "tokens": [
        "price",
        "=",
        "100"
      ],
      "shuffled": [
        "100",
        "price",
        "="
      ],
      "expected": [
        "price",
        "=",
        "100"
      ],
      "hint": "Structure: variable = value."
    },
    {
      "id": 3,
      "title": "Puzzle 3 — Store and Display a Value",
      "prompt": "Arrange the lines in execution order to store score and print it.",
      "tokens": [
        "score = 50",
        "print(score)"
      ],
      "shuffled": [
        "print(score)",
        "score = 50"
      ],
      "expected": [
        "score = 50",
        "print(score)"
      ],
      "hint": "A variable must be assigned before it can be printed."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Syntax",
      "meaning": "Rules governing structure of valid code statements"
    },
    {
      "id": 2,
      "snippet": "Variable",
      "meaning": "Named reference to store and retrieve data values"
    },
    {
      "id": 3,
      "snippet": "Data Type",
      "meaning": "Classification specifying what kind of value data represents"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Save Product Stock",
      "prompt": "Correct code select karo.",
      "scenario": "Ek shop mein 25 notebooks available hain. Employee Python variable mein stock quantity save karna chahta hai.",
      "expectedResponse": "stock = 25"
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "What is a variable in Python?",
      "sampleAnswer": "A variable is a name that refers to a value in a Python program."
    },
    {
      "id": 2,
      "question": "How do you create a variable?",
      "sampleAnswer": "I assign a value using the equals sign, such as age = 20."
    },
    {
      "id": 3,
      "question": "Can the value of a variable change?",
      "sampleAnswer": "Yes. I can assign a new value to an existing variable."
    },
    {
      "id": 4,
      "question": "What are the basic rules for naming variables?",
      "sampleAnswer": "Variable names cannot start with a number, cannot contain spaces, and are case-sensitive."
    }
  ]
},
  '4.4': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 4,
  "moduleName": "Python Syntax and Core Basics",
  "topicKey": "4.4",
  "id": 20,
  "topicTitle": "Python Data Types and type()",
  "mode": "Coding/tool practice",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the data type of 25 in Python?",
      "options": [
        {
          "key": "A",
          "text": "str"
        },
        {
          "key": "B",
          "text": "float"
        },
        {
          "key": "C",
          "text": "int"
        },
        {
          "key": "D",
          "text": "bool"
        }
      ],
      "correct": 2,
      "explanation": "Whole numbers bina decimal ke int (integer) data type hote hain.",
      "hint": "Integers represent whole numbers without decimals."
    },
    {
      "id": 2,
      "question": "What is the data type of 3.5?",
      "options": [
        {
          "key": "A",
          "text": "float"
        },
        {
          "key": "B",
          "text": "int"
        },
        {
          "key": "C",
          "text": "str"
        },
        {
          "key": "D",
          "text": "bool"
        }
      ],
      "correct": 0,
      "explanation": "Decimal point wale numbers float data type hote hain.",
      "hint": "Numbers containing decimal points are floating-point values."
    },
    {
      "id": 3,
      "question": "What is the data type of \"Hello\"?",
      "options": [
        {
          "key": "A",
          "text": "int"
        },
        {
          "key": "B",
          "text": "bool"
        },
        {
          "key": "C",
          "text": "float"
        },
        {
          "key": "D",
          "text": "str"
        }
      ],
      "correct": 3,
      "explanation": "Quotation marks ke andar text str (string) data type hota hai.",
      "hint": "Text enclosed in quotes is of string type."
    },
    {
      "id": 4,
      "question": "What is the data type of True?",
      "options": [
        {
          "key": "A",
          "text": "str"
        },
        {
          "key": "B",
          "text": "bool"
        },
        {
          "key": "C",
          "text": "int"
        },
        {
          "key": "D",
          "text": "float"
        }
      ],
      "correct": 1,
      "explanation": "True aur False values bool (boolean) data type hoti hain.",
      "hint": "Truth values True and False belong to the boolean type."
    },
    {
      "id": 5,
      "question": "What does type(10) return?",
      "options": [
        {
          "key": "A",
          "text": "<class 'str'>"
        },
        {
          "key": "B",
          "text": "<class 'float'>"
        },
        {
          "key": "C",
          "text": "<class 'int'>"
        },
        {
          "key": "D",
          "text": "<class 'bool'>"
        }
      ],
      "correct": 2,
      "explanation": "type() value ka underlying data type return karta hai, so 10 is <class 'int'>.",
      "hint": "10 is an integer, so type() returns class int."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Check Number Type",
      "prompt": "Arrange tokens to print the type of 10: 10, type, print, (, (, ), )",
      "tokens": [
        "print",
        "(",
        "type",
        "(",
        "10",
        ")",
        ")"
      ],
      "shuffled": [
        "10",
        "type",
        "print",
        "(",
        "(",
        ")",
        ")"
      ],
      "expected": [
        "print",
        "(",
        "type",
        "(",
        "10",
        ")",
        ")"
      ],
      "hint": "Nest type(10) inside print()."
    },
    {
      "id": 2,
      "title": "Puzzle 2 — Check Text Type",
      "prompt": "Arrange tokens to print the type of \"Hello\".",
      "tokens": [
        "print",
        "(",
        "type",
        "(",
        "\"Hello\"",
        ")",
        ")"
      ],
      "shuffled": [
        "\"Hello\"",
        "print",
        "type",
        "(",
        ")",
        "(",
        ")"
      ],
      "expected": [
        "print",
        "(",
        "type",
        "(",
        "\"Hello\"",
        ")",
        ")"
      ],
      "hint": "Wrap \"Hello\" in type(), then wrap in print()."
    },
    {
      "id": 3,
      "title": "Puzzle 3 — Check Boolean Type",
      "prompt": "Arrange code lines to set active = True and print its type.",
      "tokens": [
        "active = True",
        "print(type(active))"
      ],
      "shuffled": [
        "print(type(active))",
        "active = True"
      ],
      "expected": [
        "active = True",
        "print(type(active))"
      ],
      "hint": "First create variable with boolean, then inspect its type."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Syntax",
      "meaning": "Rules governing structure of valid code statements"
    },
    {
      "id": 2,
      "snippet": "Variable",
      "meaning": "Named reference to store and retrieve data values"
    },
    {
      "id": 3,
      "snippet": "Data Type",
      "meaning": "Classification specifying what kind of value data represents"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Identify Employee Data",
      "prompt": "Employee age ka correct Python data type select karo.",
      "scenario": "HR department mein employee ki age 25 save ki gayi hai.",
      "expectedResponse": "int"
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "What is a data type in Python?",
      "sampleAnswer": "A data type defines the kind of value used in a program."
    },
    {
      "id": 2,
      "question": "What are four basic Python data types?",
      "sampleAnswer": "They are int, float, str, and bool."
    },
    {
      "id": 3,
      "question": "What is the difference between int and float?",
      "sampleAnswer": "int represents whole numbers, while float represents numbers with decimal values."
    },
    {
      "id": 4,
      "question": "What is the use of type()?",
      "sampleAnswer": "The type() function tells us the data type of a value or variable."
    }
  ]
},
  '4.5': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 4,
  "moduleName": "Python Syntax and Core Basics",
  "topicKey": "4.5",
  "id": 21,
  "topicTitle": "Type Conversion",
  "mode": "Coding/tool practice",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the result of int(\"25\")?",
      "options": [
        {
          "key": "A",
          "text": "Integer 25"
        },
        {
          "key": "B",
          "text": "String \"25\""
        },
        {
          "key": "C",
          "text": "Float 25.5"
        },
        {
          "key": "D",
          "text": "Error"
        }
      ],
      "correct": 0,
      "explanation": "int(\"25\") numeric string ko integer 25 mein convert karta hai.",
      "hint": "int() turns a numeric string into a whole number."
    },
    {
      "id": 2,
      "question": "What is the result of float(\"3.5\")?",
      "options": [
        {
          "key": "A",
          "text": "Integer 3"
        },
        {
          "key": "B",
          "text": "String \"3.5\""
        },
        {
          "key": "C",
          "text": "Float 3.5"
        },
        {
          "key": "D",
          "text": "Error"
        }
      ],
      "correct": 2,
      "explanation": "float(\"3.5\") decimal string ko float 3.5 mein convert karta hai.",
      "hint": "float() turns text into a decimal number."
    },
    {
      "id": 3,
      "question": "What does str(100) return?",
      "options": [
        {
          "key": "A",
          "text": "Integer 100"
        },
        {
          "key": "B",
          "text": "String \"100\""
        },
        {
          "key": "C",
          "text": "Boolean True"
        },
        {
          "key": "D",
          "text": "Error"
        }
      ],
      "correct": 1,
      "explanation": "str(100) integer ko string representation \"100\" mein convert karta hai.",
      "hint": "str() wraps values into textual quotation strings."
    },
    {
      "id": 4,
      "question": "What happens when you execute int(\"hello\")?",
      "options": [
        {
          "key": "A",
          "text": "Returns 0"
        },
        {
          "key": "B",
          "text": "Returns 1"
        },
        {
          "key": "C",
          "text": "Returns \"hello\""
        },
        {
          "key": "D",
          "text": "Raises a ValueError"
        }
      ],
      "correct": 3,
      "explanation": "Non-numeric characters ko integer mein convert nahi kiya ja sakta, isliye ValueError raise hota hai.",
      "hint": "Python cannot convert non-digit text to a number."
    },
    {
      "id": 5,
      "question": "What is the result of int(4.9)?",
      "options": [
        {
          "key": "A",
          "text": "5"
        },
        {
          "key": "B",
          "text": "4.9"
        },
        {
          "key": "C",
          "text": "4"
        },
        {
          "key": "D",
          "text": "Error"
        }
      ],
      "correct": 2,
      "explanation": "int() fractional part ko remove karta hai; yeh round nahi karta, so 4.9 becomes 4.",
      "hint": "int() truncates the decimal portion completely."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Convert Text into Number",
      "prompt": "Arrange tokens to convert \"20\" into an integer: ), \"20\", int, (",
      "tokens": [
        "int",
        "(",
        "\"20\"",
        ")"
      ],
      "shuffled": [
        ")",
        "\"20\"",
        "int",
        "("
      ],
      "expected": [
        "int",
        "(",
        "\"20\"",
        ")"
      ],
      "hint": "Structure: int(\"20\")"
    },
    {
      "id": 2,
      "title": "Puzzle 2 — Convert Text into Decimal",
      "prompt": "Arrange tokens to convert \"2.5\" into a float.",
      "tokens": [
        "float",
        "(",
        "\"2.5\"",
        ")"
      ],
      "shuffled": [
        "\"2.5\"",
        ")",
        "float",
        "("
      ],
      "expected": [
        "float",
        "(",
        "\"2.5\"",
        ")"
      ],
      "hint": "Structure: float(\"2.5\")"
    },
    {
      "id": 3,
      "title": "Puzzle 3 — Convert and Calculate",
      "prompt": "Arrange tokens to print the sum of int(\"10\") and 5.",
      "tokens": [
        "print",
        "(",
        "int",
        "(",
        "\"10\"",
        ")",
        "+",
        "5",
        ")"
      ],
      "shuffled": [
        "5",
        "+",
        "\"10\"",
        "int",
        "print",
        "(",
        "(",
        ")",
        ")"
      ],
      "expected": [
        "print",
        "(",
        "int",
        "(",
        "\"10\"",
        ")",
        "+",
        "5",
        ")"
      ],
      "hint": "First convert \"10\" using int, then add 5 inside print."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Syntax",
      "meaning": "Rules governing structure of valid code statements"
    },
    {
      "id": 2,
      "snippet": "Variable",
      "meaning": "Named reference to store and retrieve data values"
    },
    {
      "id": 3,
      "snippet": "Data Type",
      "meaning": "Classification specifying what kind of value data represents"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Fix a Shop Billing Calculation",
      "prompt": "Correct expression select karo.",
      "scenario": "Billing software mein two prices text format mein saved hain: \"100\" and \"50\". Shopkeeper ko total amount calculate karna hai.",
      "expectedResponse": "int(\"100\") + int(\"50\")"
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "What is type conversion in Python?",
      "sampleAnswer": "Type conversion means changing a value from one data type to another."
    },
    {
      "id": 2,
      "question": "How do you convert a string into an integer?",
      "sampleAnswer": "I use int(), for example int(\"25\")."
    },
    {
      "id": 3,
      "question": "What is the difference between int() and float()?",
      "sampleAnswer": "int() converts compatible values to integers, while float() converts compatible values to floating-point numbers."
    },
    {
      "id": 4,
      "question": "What happens if a string cannot be converted into an integer?",
      "sampleAnswer": "Python raises a ValueError."
    }
  ]
},
  '4.6': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 4,
  "moduleName": "Python Syntax and Core Basics",
  "topicKey": "4.6",
  "id": 22,
  "topicTitle": "input() and User Input",
  "mode": "Coding/tool practice",
  "game1Quiz": [
    {
      "id": 1,
      "question": "Which function is used to take user input in Python?",
      "options": [
        {
          "key": "A",
          "text": "print()"
        },
        {
          "key": "B",
          "text": "type()"
        },
        {
          "key": "C",
          "text": "input()"
        },
        {
          "key": "D",
          "text": "float()"
        }
      ],
      "correct": 2,
      "explanation": "input() function user se keyboard input receive karta hai.",
      "hint": "Think about getting input from the user."
    },
    {
      "id": 2,
      "question": "What data type does input() return?",
      "options": [
        {
          "key": "A",
          "text": "str"
        },
        {
          "key": "B",
          "text": "int"
        },
        {
          "key": "C",
          "text": "float"
        },
        {
          "key": "D",
          "text": "bool"
        }
      ],
      "correct": 0,
      "explanation": "User digits type kare tab bhi input() normally string (str) return karta hai.",
      "hint": "The input() function always returns a string."
    },
    {
      "id": 3,
      "question": "What does this code do?\nname = input(\"Enter your name: \")",
      "options": [
        {
          "key": "A",
          "text": "Automatically generates a name"
        },
        {
          "key": "B",
          "text": "Displays a prompt and reads user input"
        },
        {
          "key": "C",
          "text": "Deletes the variable"
        },
        {
          "key": "D",
          "text": "Displays a Python error"
        }
      ],
      "correct": 1,
      "explanation": "Prompt screen par dikhata hai aur user ka input name variable mein store karta hai.",
      "hint": "It prompts the user and saves their typed response."
    },
    {
      "id": 4,
      "question": "A user types Riya when prompted. What is the output?\nname = input(\"Name: \")\nprint(name)",
      "options": [
        {
          "key": "A",
          "text": "Name"
        },
        {
          "key": "B",
          "text": "input"
        },
        {
          "key": "C",
          "text": "Error"
        },
        {
          "key": "D",
          "text": "Riya"
        }
      ],
      "correct": 3,
      "explanation": "print(name) user dwara input ki gayi value Riya print karta hai.",
      "hint": "The variable name contains what the user typed."
    },
    {
      "id": 5,
      "question": "Which code takes age as an integer?",
      "options": [
        {
          "key": "A",
          "text": "age = print(\"Age: \")"
        },
        {
          "key": "B",
          "text": "age = str(input(\"Age: \"))"
        },
        {
          "key": "C",
          "text": "age = int(input(\"Age: \"))"
        },
        {
          "key": "D",
          "text": "age = \"Age\""
        }
      ],
      "correct": 2,
      "explanation": "int(input()) string input ko integer mein wrap karke convert karta hai.",
      "hint": "Wrap input() inside int() to convert numeric text."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Ask for a Student Name",
      "prompt": "Arrange tokens to receive student name: \"Name: \", name, input, =, (, )",
      "tokens": [
        "name",
        "=",
        "input",
        "(",
        "\"Name: \"",
        ")"
      ],
      "shuffled": [
        "\"Name: \"",
        "name",
        "input",
        "=",
        "(",
        ")"
      ],
      "expected": [
        "name",
        "=",
        "input",
        "(",
        "\"Name: \"",
        ")"
      ],
      "hint": "Structure: name = input(\"Name: \")"
    },
    {
      "id": 2,
      "title": "Puzzle 2 — Ask for Student Age",
      "prompt": "Arrange tokens to take age as an integer: age, =, int, input, \"Age: \", (, (, ), )",
      "tokens": [
        "age",
        "=",
        "int",
        "(",
        "input",
        "(",
        "\"Age: \"",
        ")",
        ")"
      ],
      "shuffled": [
        "age",
        "=",
        "int",
        "input",
        "\"Age: \"",
        "(",
        "(",
        ")",
        ")"
      ],
      "expected": [
        "age",
        "=",
        "int",
        "(",
        "input",
        "(",
        "\"Age: \"",
        ")",
        ")"
      ],
      "hint": "Structure: age = int(input(\"Age: \"))"
    },
    {
      "id": 3,
      "title": "Puzzle 3 — Complete the User Input Flow",
      "prompt": "Arrange these steps in the correct order for taking user input.",
      "tokens": [
        "Show Input Prompt",
        "User Enters Name",
        "Store Name",
        "Display Result"
      ],
      "shuffled": [
        "Display Result",
        "User Enters Name",
        "Show Input Prompt",
        "Store Name"
      ],
      "expected": [
        "Show Input Prompt",
        "User Enters Name",
        "Store Name",
        "Display Result"
      ],
      "hint": "Prompt comes first, user enters response, program stores it, and finally shows result."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Syntax",
      "meaning": "Rules governing structure of valid code statements"
    },
    {
      "id": 2,
      "snippet": "Variable",
      "meaning": "Named reference to store and retrieve data values"
    },
    {
      "id": 3,
      "snippet": "Data Type",
      "meaning": "Classification specifying what kind of value data represents"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Create a Visitor Entry System",
      "prompt": "Kaunsa code visitor ka name receive karega?",
      "scenario": "Office reception par ek simple Python program visitor ka name poochna chahta hai.",
      "expectedResponse": "visitor = input(\"Enter name: \")"
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "What is input() in Python?",
      "sampleAnswer": "The input() function reads information entered by a user."
    },
    {
      "id": 2,
      "question": "What data type does input() return?",
      "sampleAnswer": "It returns a string."
    },
    {
      "id": 3,
      "question": "How do you take numeric input?",
      "sampleAnswer": "I can use int(input(\"Enter number: \")) for valid integer input."
    },
    {
      "id": 4,
      "question": "What is the difference between input() and print()?",
      "sampleAnswer": "input() receives information from the user, while print() displays output."
    }
  ]
},
  '4.7': {
  "tabId": 1,
  "tabName": "Data Analytics Foundations",
  "moduleId": 4,
  "moduleName": "Python Syntax and Core Basics",
  "topicKey": "4.7",
  "id": 23,
  "topicTitle": "Operators and Expressions",
  "mode": "Coding/tool practice",
  "game1Quiz": [
    {
      "id": 1,
      "question": "What is the output of print(7 + 3)?",
      "options": [
        {
          "key": "A",
          "text": "10"
        },
        {
          "key": "B",
          "text": "73"
        },
        {
          "key": "C",
          "text": "4"
        },
        {
          "key": "D",
          "text": "21"
        }
      ],
      "correct": 0,
      "explanation": "+ addition operator hai, so 7 + 3 = 10.",
      "hint": "Add the two numbers together."
    },
    {
      "id": 2,
      "question": "What is the output of print(6 * 2)?",
      "options": [
        {
          "key": "A",
          "text": "8"
        },
        {
          "key": "B",
          "text": "12"
        },
        {
          "key": "C",
          "text": "62"
        },
        {
          "key": "D",
          "text": "3"
        }
      ],
      "correct": 1,
      "explanation": "* multiplication operator hai, so 6 * 2 = 12.",
      "hint": "Multiply 6 by 2."
    },
    {
      "id": 3,
      "question": "What is the output of print(7 / 2)?",
      "options": [
        {
          "key": "A",
          "text": "3"
        },
        {
          "key": "B",
          "text": "4"
        },
        {
          "key": "C",
          "text": "3.5"
        },
        {
          "key": "D",
          "text": "1"
        }
      ],
      "correct": 2,
      "explanation": "/ division operator float result return karta hai, so 7 / 2 = 3.5.",
      "hint": "Standard division always yields a floating-point number in Python."
    },
    {
      "id": 4,
      "question": "What is the output of print(7 // 2)?",
      "options": [
        {
          "key": "A",
          "text": "3.5"
        },
        {
          "key": "B",
          "text": "4"
        },
        {
          "key": "C",
          "text": "1"
        },
        {
          "key": "D",
          "text": "3"
        }
      ],
      "correct": 3,
      "explanation": "// floor division operator hai jo quotient ka integer part return karta hai, so 7 // 2 = 3.",
      "hint": "// rounds down to the nearest integer."
    },
    {
      "id": 5,
      "question": "What is the output of print(7 % 2)?",
      "options": [
        {
          "key": "A",
          "text": "1"
        },
        {
          "key": "B",
          "text": "3"
        },
        {
          "key": "C",
          "text": "3.5"
        },
        {
          "key": "D",
          "text": "0"
        }
      ],
      "correct": 0,
      "explanation": "% modulo operator division ka remainder return karta hai (7 = 2*3 + 1), so remainder is 1.",
      "hint": "Modulo returns the remainder after division."
    },
    {
      "id": 6,
      "question": "What is the output of print(2 ** 3)?",
      "options": [
        {
          "key": "A",
          "text": "6"
        },
        {
          "key": "B",
          "text": "8"
        },
        {
          "key": "C",
          "text": "5"
        },
        {
          "key": "D",
          "text": "9"
        }
      ],
      "correct": 1,
      "explanation": "** exponentiation operator hai (2^3 = 2 * 2 * 2 = 8).",
      "hint": "Calculate 2 raised to the power of 3."
    },
    {
      "id": 7,
      "question": "What is the result of 5 == 5?",
      "options": [
        {
          "key": "A",
          "text": "5"
        },
        {
          "key": "B",
          "text": "False"
        },
        {
          "key": "C",
          "text": "True"
        },
        {
          "key": "D",
          "text": "Error"
        }
      ],
      "correct": 2,
      "explanation": "== equality comparison operator hai. Dono values equal hone par True return karta hai.",
      "hint": "== checks if both sides are equal."
    },
    {
      "id": 8,
      "question": "What is the output of print(2 + 3 * 4)?",
      "options": [
        {
          "key": "A",
          "text": "20"
        },
        {
          "key": "B",
          "text": "24"
        },
        {
          "key": "C",
          "text": "9"
        },
        {
          "key": "D",
          "text": "14"
        }
      ],
      "correct": 3,
      "explanation": "Operator precedence ke mutabik multiplication (*) pehle evaluate hota hai (3 * 4 = 12), phir 2 + 12 = 14.",
      "hint": "Multiplication has higher precedence than addition."
    },
    {
      "id": 9,
      "question": "What is the result of True and False?",
      "options": [
        {
          "key": "A",
          "text": "False"
        },
        {
          "key": "B",
          "text": "True"
        },
        {
          "key": "C",
          "text": "0.5"
        },
        {
          "key": "D",
          "text": "Error"
        }
      ],
      "correct": 0,
      "explanation": "Logical and operator ke liye dono operands True hone chahiye, isliye result False hota hai.",
      "hint": "Both sides must be True for 'and' to evaluate to True."
    },
    {
      "id": 10,
      "question": "What does x = 5 mean?",
      "options": [
        {
          "key": "A",
          "text": "Compare x with 5"
        },
        {
          "key": "B",
          "text": "Assign 5 to x"
        },
        {
          "key": "C",
          "text": "Multiply x by 5"
        },
        {
          "key": "D",
          "text": "Delete x"
        }
      ],
      "correct": 1,
      "explanation": "= single equals assignment operator hota hai jo right value ko left variable mein assign karta hai.",
      "hint": "Single equals is assignment, double equals is comparison."
    }
  ],
  "game2Puzzles": [
    {
      "id": 1,
      "title": "Puzzle 1 — Add Two Prices",
      "prompt": "Arrange tokens to compute total price: total, =, 20, +, 10",
      "tokens": [
        "total",
        "=",
        "20",
        "+",
        "10"
      ],
      "shuffled": [
        "10",
        "total",
        "+",
        "20",
        "="
      ],
      "expected": [
        "total",
        "=",
        "20",
        "+",
        "10"
      ],
      "hint": "Assign the sum of 20 and 10 to variable total."
    },
    {
      "id": 2,
      "title": "Puzzle 2 — Find the Remainder",
      "prompt": "Arrange tokens to compute and print remainder of 10 divided by 3: print, (, 10, %, 3, )",
      "tokens": [
        "print",
        "(",
        "10",
        "%",
        "3",
        ")"
      ],
      "shuffled": [
        "10",
        "%",
        "3",
        ")",
        "print",
        "("
      ],
      "expected": [
        "print",
        "(",
        "10",
        "%",
        "3",
        ")"
      ],
      "hint": "Modulo % operator goes between 10 and 3."
    },
    {
      "id": 3,
      "title": "Puzzle 3 — Compare Numbers",
      "prompt": "Arrange tokens to compare if 5 is greater than 3: print, (, 5, >, 3, )",
      "tokens": [
        "print",
        "(",
        "5",
        ">",
        "3",
        ")"
      ],
      "shuffled": [
        "5",
        ">",
        "3",
        ")",
        "print",
        "("
      ],
      "expected": [
        "print",
        "(",
        "5",
        ">",
        "3",
        ")"
      ],
      "hint": "Greater-than operator > compares 5 and 3."
    },
    {
      "id": 4,
      "title": "Puzzle 4 — Apply Operator Precedence",
      "prompt": "Arrange tokens to evaluate arithmetic precedence: print, (, 2, +, 3, *, 4, )",
      "tokens": [
        "print",
        "(",
        "2",
        "+",
        "3",
        "*",
        "4",
        ")"
      ],
      "shuffled": [
        "2",
        "+",
        "3",
        "*",
        "4",
        ")",
        "print",
        "("
      ],
      "expected": [
        "print",
        "(",
        "2",
        "+",
        "3",
        "*",
        "4",
        ")"
      ],
      "hint": "Expression 2 + 3 * 4 inside print()."
    }
  ],
  "game3MatchPairs": [
    {
      "id": 1,
      "snippet": "Syntax",
      "meaning": "Rules governing structure of valid code statements"
    },
    {
      "id": 2,
      "snippet": "Variable",
      "meaning": "Named reference to store and retrieve data values"
    },
    {
      "id": 3,
      "snippet": "Data Type",
      "meaning": "Classification specifying what kind of value data represents"
    }
  ],
  "game4Missions": [
    {
      "id": 1,
      "title": "Calculate a Customer Bill",
      "prompt": "Total bill calculate karne ke liye correct Python expression select karo.",
      "scenario": "Ek stationery shop mein customer ne 3 pens kharide hain. Har pen ki price ₹20 hai.",
      "expectedResponse": "3 * 20"
    }
  ],
  "mockInterview": [
    {
      "id": 1,
      "question": "What are operators in Python?",
      "sampleAnswer": "Operators are symbols or keywords used to perform operations on values."
    },
    {
      "id": 2,
      "question": "What is the difference between = and ==?",
      "sampleAnswer": "= assigns a value, while == compares two values for equality."
    },
    {
      "id": 3,
      "question": "What is the difference between / and //?",
      "sampleAnswer": "/ performs division and returns a float. // performs floor division."
    },
    {
      "id": 4,
      "question": "What is the use of the % operator?",
      "sampleAnswer": "It returns the remainder after division."
    },
    {
      "id": 5,
      "question": "What is operator precedence?",
      "sampleAnswer": "Operator precedence determines the order in which operations are evaluated in an expression."
    }
  ]
},


  // ═══════════════════════════════════════════════════════════════════════════════
  // MODULES 5 TO 10 (M05–M10) — 57 TOPICS COMPLETE QUESTION BANK
  // ═══════════════════════════════════════════════════════════════════════════════

  '5.1': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 5,
    moduleName: "Conditions, Loops and Problem-Solving",
    topicKey: "5.1",
    id: 24,
    topicTitle: "Comparison and Logical Operators",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What does 5 > 3 evaluate to?",
      options: [
        {
          key: "A",
          text: "5"
        },
        {
          key: "B",
          text: "True"
        },
        {
          key: "C",
          text: "False"
        },
        {
          key: "D",
          text: "3"
        }
      ],
      correct: 1,
      explanation: "Five is greater than three.",
      hint: "Review core principles of Comparison and Logical Operators."
    },
    {
      id: 2,
      question: "Which operator checks equality?",
      options: [
        {
          key: "A",
          text: "="
        },
        {
          key: "B",
          text: "!="
        },
        {
          key: "C",
          text: "=="
        },
        {
          key: "D",
          text: ">="
        }
      ],
      correct: 2,
      explanation: "== compares values; = assigns.",
      hint: "Review core principles of Comparison and Logical Operators."
    },
    {
      id: 3,
      question: "What is 7 != 7?",
      options: [
        {
          key: "A",
          text: "True"
        },
        {
          key: "B",
          text: "7"
        },
        {
          key: "C",
          text: "0"
        },
        {
          key: "D",
          text: "False"
        }
      ],
      correct: 3,
      explanation: "The values are equal, so “not equal” is false.",
      hint: "Review core principles of Comparison and Logical Operators."
    },
    {
      id: 4,
      question: "What is True and False?",
      options: [
        {
          key: "A",
          text: "False"
        },
        {
          key: "B",
          text: "True"
        },
        {
          key: "C",
          text: "None"
        },
        {
          key: "D",
          text: "Error"
        }
      ],
      correct: 0,
      explanation: "and requires both operands to be true.",
      hint: "Review core principles of Comparison and Logical Operators."
    },
    {
      id: 5,
      question: "What is not (4 < 2)?",
      options: [
        {
          key: "A",
          text: "False"
        },
        {
          key: "B",
          text: "2"
        },
        {
          key: "C",
          text: "True"
        },
        {
          key: "D",
          text: "4"
        }
      ],
      correct: 2,
      explanation: "4 < 2 is false, and not reverses it.",
      hint: "Review core principles of Comparison and Logical Operators."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Build the comparison (Arrange tokens)",
      prompt: "5, >, 3, print, (, ).",
      tokens: ["5", ">", "3", "print", "(", ")"],
      shuffled: [")", "(", "print", "3", ">", "5"],
      expected: ["5", ">", "3", "print", "(", ")"],
      hint: "Arrange into correct logical sequence: print(5 > 3) → True."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match operators to meaning",
      prompt: "==, !=, >=, and ↔ equal, not equal, greater than or equal, both conditions true.",
      tokens: ["==", "!=", ">=", "and"],
      shuffled: ["and", ">=", "!=", "=="],
      expected: ["==", "!=", ">=", "and"],
      hint: "Arrange into correct logical sequence: Match in the listed order."
    },
    {
      id: 3,
      title: "Puzzle 3 — Complete the logical expression (Fill token)",
      prompt: "print(True ___ False); tokens or, and, not; target output True.",
      tokens: ["print(True ___ False)", "or", "and", "not", "True"],
      shuffled: ["True", "not", "and", "or", "print(True ___ False)"],
      expected: ["print(True ___ False)", "or", "and", "not", "True"],
      hint: "Arrange into correct logical sequence: or."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "comparison operators",
      meaning: "They compare values and produce Boolean results such as True or False."
    },
    {
      id: 2,
      snippet: "the difference between =",
      meaning: "= assigns a value; == checks whether two values are equal."
    },
    {
      id: 3,
      snippet: "What do and and or do",
      meaning: "and requires both conditions to be true; or needs at least one true conditi"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Check the Entry Age",
      prompt: "Which expression correctly checks eligibility?",
      scenario: "A training centre allows registration at age 18 or above. An applicant is 20.",
      expectedResponse: "20 >= 18"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What are comparison operators?",
      sampleAnswer: "They compare values and produce Boolean results such as True or False."
    },
    {
      id: 2,
      question: "What is the difference between = and ==?",
      sampleAnswer: "= assigns a value; == checks whether two values are equal."
    },
    {
      id: 3,
      question: "What do and and or do?",
      sampleAnswer: "and requires both conditions to be true; or needs at least one true condition."
    },
    {
      id: 4,
      question: "What does not do?",
      sampleAnswer: "It reverses the truth value of a condition."
    }
    ]
  },
  '5.2': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 5,
    moduleName: "Conditions, Loops and Problem-Solving",
    topicKey: "5.2",
    id: 25,
    topicTitle: "if Statements and Decision-Making",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What does an if statement do?",
      options: [
        {
          key: "A",
          text: "Repeats code forever"
        },
        {
          key: "B",
          text: "Runs a block when a condition is true"
        },
        {
          key: "C",
          text: "Always prints a number"
        },
        {
          key: "D",
          text: "Imports a module"
        }
      ],
      correct: 1,
      explanation: "It makes a conditional decision.",
      hint: "Review core principles of if Statements and Decision-Making."
    },
    {
      id: 2,
      question: "Which line starts a valid Python if block?",
      options: [
        {
          key: "A",
          text: "if age >= 18:"
        },
        {
          key: "B",
          text: "if age >= 18"
        },
        {
          key: "C",
          text: "if (age >= 18) then"
        },
        {
          key: "D",
          text: "If age >= 18:"
        }
      ],
      correct: 0,
      explanation: "Python uses lowercase if and a colon.",
      hint: "Review core principles of if Statements and Decision-Making."
    },
    {
      id: 3,
      question: "What is printed? if 4 > 2: print(\"Yes\") (with print indented).",
      options: [
        {
          key: "A",
          text: "No output"
        },
        {
          key: "B",
          text: "False"
        },
        {
          key: "C",
          text: "Yes"
        },
        {
          key: "D",
          text: "Error"
        }
      ],
      correct: 2,
      explanation: "The condition is true.",
      hint: "Review core principles of if Statements and Decision-Making."
    },
    {
      id: 4,
      question: "What happens when an if condition is false and there is no else?",
      options: [
        {
          key: "A",
          text: "The block is skipped"
        },
        {
          key: "B",
          text: "The block runs twice"
        },
        {
          key: "C",
          text: "Python stops permanently"
        },
        {
          key: "D",
          text: "The condition becomes true"
        }
      ],
      correct: 0,
      explanation: "Execution continues after the block.",
      hint: "Review core principles of if Statements and Decision-Making."
    },
    {
      id: 5,
      question: "What identifies statements inside an if block?",
      options: [
        {
          key: "A",
          text: "Quotes"
        },
        {
          key: "B",
          text: "Indentation"
        },
        {
          key: "C",
          text: "Commas"
        },
        {
          key: "D",
          text: "Semicolons"
        }
      ],
      correct: 1,
      explanation: "Indentation defines the block.",
      hint: "Review core principles of if Statements and Decision-Making."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange lines",
      prompt: "print(\"Adult\"), age = 20, if age >= 18:.",
      tokens: ["print(\"Adult\")", "age = 20", "if age >= 18:"],
      shuffled: ["if age >= 18:", "age = 20", "print(\"Adult\")"],
      expected: ["print(\"Adult\")", "age = 20", "if age >= 18:"],
      hint: "Arrange into correct logical sequence: age = 20 → if age >= 18: → indented print(\"Adult\")."
    },
    {
      id: 2,
      title: "Puzzle 2 — Fix indentation (Select correct block)",
      prompt: "if True: followed by print(\"Ready\").",
      tokens: ["if True:", "print(\"Ready\")"],
      shuffled: ["print(\"Ready\")", "if True:"],
      expected: ["if True:", "print(\"Ready\")"],
      hint: "Arrange into correct logical sequence: Indent print(\"Ready\") under the if line."
    },
    {
      id: 3,
      title: "Puzzle 3 — Predict execution (Tap active lines)",
      prompt: "a correctly indented program with marks = 30, an if marks >= 40: block printing Pass, and a final print(\"Done\") outside the block.",
      tokens: ["marks = 30", "if marks >= 40:", "Pass", "print(\"Done\")"],
      shuffled: ["print(\"Done\")", "Pass", "if marks >= 40:", "marks = 30"],
      expected: ["marks = 30", "if marks >= 40:", "Pass", "print(\"Done\")"],
      hint: "Arrange into correct logical sequence: Only print(\"Done\") executes; output Done."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "an if statement",
      meaning: "It executes a block of code only when a condition is true."
    },
    {
      id: 2,
      snippet: "Why do we use a colon af",
      meaning: "The colon starts the indented conditional block."
    },
    {
      id: 3,
      snippet: "What happens if the cond",
      meaning: "Python skips the if block when no other branch applies."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Check Library Membership",
      prompt: "Which line checks the card before showing entry?",
      scenario: "A library member has a valid card (card_valid = True).",
      expectedResponse: "if card_valid:"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is an if statement?",
      sampleAnswer: "It executes a block of code only when a condition is true."
    },
    {
      id: 2,
      question: "Why do we use a colon after if?",
      sampleAnswer: "The colon starts the indented conditional block."
    },
    {
      id: 3,
      question: "What happens if the condition is false?",
      sampleAnswer: "Python skips the if block when no other branch applies."
    },
    {
      id: 4,
      question: "Give an example of an if statement.",
      sampleAnswer: "if age >= 18: print(\"Adult\"), with the print statement indented."
    }
    ]
  },
  '5.3': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 5,
    moduleName: "Conditions, Loops and Problem-Solving",
    topicKey: "5.3",
    id: 26,
    topicTitle: "if-else and elif Statements",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "When does else run?",
      options: [
        {
          key: "A",
          text: "Always"
        },
        {
          key: "B",
          text: "When the preceding if condition is false"
        },
        {
          key: "C",
          text: "Only when if is true"
        },
        {
          key: "D",
          text: "Before if"
        }
      ],
      correct: 1,
      explanation: "else is the alternative branch.",
      hint: "Review core principles of if-else and elif Statements."
    },
    {
      id: 2,
      question: "What is elif used for?",
      options: [
        {
          key: "A",
          text: "Ending a file"
        },
        {
          key: "B",
          text: "Repeating code"
        },
        {
          key: "C",
          text: "Checking another condition"
        },
        {
          key: "D",
          text: "Printing comments"
        }
      ],
      correct: 2,
      explanation: "It adds a conditional branch.",
      hint: "Review core principles of if-else and elif Statements."
    },
    {
      id: 3,
      question: "Which order is valid?",
      options: [
        {
          key: "A",
          text: "else → if → elif"
        },
        {
          key: "B",
          text: "elif → if → else"
        },
        {
          key: "C",
          text: "if → else → elif"
        },
        {
          key: "D",
          text: "if → elif → else"
        }
      ],
      correct: 3,
      explanation: "This is the normal branch order.",
      hint: "Review core principles of if-else and elif Statements."
    },
    {
      id: 4,
      question: "What prints for a correctly indented if score >= 80 / elif score >= 60 / else chain for score = 75 that prints A, B, or C?",
      options: [
        {
          key: "A",
          text: "A"
        },
        {
          key: "B",
          text: "B"
        },
        {
          key: "C",
          text: "C"
        },
        {
          key: "D",
          text: "AB"
        }
      ],
      correct: 1,
      explanation: "The second condition is the first true branch.",
      hint: "Review core principles of if-else and elif Statements."
    },
    {
      id: 5,
      question: "How many branches run in one if/elif/else chain?",
      options: [
        {
          key: "A",
          text: "At most one"
        },
        {
          key: "B",
          text: "Always two"
        },
        {
          key: "C",
          text: "Every true branch"
        },
        {
          key: "D",
          text: "All branches"
        }
      ],
      correct: 0,
      explanation: "Python selects the first matching branch.",
      hint: "Review core principles of if-else and elif Statements."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange branches",
      prompt: "else:, if marks >= 50:, print(\"Pass\"), print(\"Try again\").",
      tokens: ["else:", "if marks >= 50:", "print(\"Pass\")", "print(\"Try again\")"],
      shuffled: ["print(\"Try again\")", "print(\"Pass\")", "if marks >= 50:", "else:"],
      expected: ["else:", "if marks >= 50:", "print(\"Pass\")", "print(\"Try again\")"],
      hint: "Arrange into correct logical sequence: if → indented Pass → else → indented Try again."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match score to branch",
      prompt: "85, 65, 30 ↔ if score >= 80, elif score >= 60, else.",
      tokens: ["if score >= 80", "elif score >= 60", "else"],
      shuffled: ["else", "elif score >= 60", "if score >= 80"],
      expected: ["if score >= 80", "elif score >= 60", "else"],
      hint: "Arrange into correct logical sequence: 85→if; 65→elif; 30→else."
    },
    {
      id: 3,
      title: "Puzzle 3 — Find output",
      prompt: "a correctly indented if / elif / else chain for temperature = 20 that prints Hot if above 30, Mild if at least 15, or Cold otherwise.",
      tokens: ["if", "elif", "else", "temperature = 20", "Hot", "Mild", "Cold"],
      shuffled: ["Cold", "Mild", "Hot", "temperature = 20", "else", "elif", "if"],
      expected: ["if", "elif", "else", "temperature = 20", "Hot", "Mild", "Cold"],
      hint: "Arrange into correct logical sequence: Mild."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "the difference between i",
      meaning: "if runs when its condition is true; else runs when it is false."
    },
    {
      id: 2,
      snippet: "elif",
      meaning: "To check another condition when earlier conditions did not match."
    },
    {
      id: 3,
      snippet: "Can an if statement have",
      meaning: "Yes, it can check multiple alternatives in order."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Classify an Order",
      prompt: "Which label should the program show?",
      scenario: "A shop has an order worth ₹700. Rules: ₹1,000+ = Gold, ₹500–999 = Silver, below ₹500 = Basic.",
      expectedResponse: "Silver"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is the difference between if and else?",
      sampleAnswer: "if runs when its condition is true; else runs when it is false."
    },
    {
      id: 2,
      question: "Why use elif?",
      sampleAnswer: "To check another condition when earlier conditions did not match."
    },
    {
      id: 3,
      question: "Can an if statement have several elif branches?",
      sampleAnswer: "Yes, it can check multiple alternatives in order."
    },
    {
      id: 4,
      question: "What happens when two elif conditions could be true?",
      sampleAnswer: "Only the first matching branch runs."
    }
    ]
  },
  '5.4': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 5,
    moduleName: "Conditions, Loops and Problem-Solving",
    topicKey: "5.4",
    id: 27,
    topicTitle: "Nested Conditions",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What is a nested if statement?",
      options: [
        {
          key: "A",
          text: "An if inside another if"
        },
        {
          key: "B",
          text: "Two print statements"
        },
        {
          key: "C",
          text: "A repeated loop"
        },
        {
          key: "D",
          text: "A Python module"
        }
      ],
      correct: 0,
      explanation: "One decision is placed inside another.",
      hint: "Review core principles of Nested Conditions."
    },
    {
      id: 2,
      question: "When is an inner if evaluated?",
      options: [
        {
          key: "A",
          text: "Always"
        },
        {
          key: "B",
          text: "Before the outer if"
        },
        {
          key: "C",
          text: "Only when execution reaches its enclosing block"
        },
        {
          key: "D",
          text: "Never"
        }
      ],
      correct: 2,
      explanation: "The outer branch controls access.",
      hint: "Review core principles of Nested Conditions."
    },
    {
      id: 3,
      question: "What helps show the nesting level?",
      options: [
        {
          key: "A",
          text: "Comments only"
        },
        {
          key: "B",
          text: "Indentation"
        },
        {
          key: "C",
          text: "File extension"
        },
        {
          key: "D",
          text: "Variable names"
        }
      ],
      correct: 1,
      explanation: "Each nested block is indented further.",
      hint: "Review core principles of Nested Conditions."
    },
    {
      id: 4,
      question: "What prints? a correctly indented nested check with age=20, has_id=False, outer condition age>=18, and inner condition has_id, which prints Enter only when both pass",
      options: [
        {
          key: "A",
          text: "Enter"
        },
        {
          key: "B",
          text: "False"
        },
        {
          key: "C",
          text: "20"
        },
        {
          key: "D",
          text: "Nothing"
        }
      ],
      correct: 3,
      explanation: "The inner condition is false.",
      hint: "Review core principles of Nested Conditions."
    },
    {
      id: 5,
      question: "Which is a sensible nested decision?",
      options: [
        {
          key: "A",
          text: "Check payment after checking whether an order exists"
        },
        {
          key: "B",
          text: "Always delete all orders"
        },
        {
          key: "C",
          text: "Print every result"
        },
        {
          key: "D",
          text: "Ignore the outer condition"
        }
      ],
      correct: 0,
      explanation: "The second decision depends on the first.",
      hint: "Review core principles of Nested Conditions."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange nested blocks",
      prompt: "if logged_in:, if is_admin:, print(\"Admin panel\").",
      tokens: ["if logged_in:", "if is_admin:", "print(\"Admin panel\")"],
      shuffled: ["print(\"Admin panel\")", "if is_admin:", "if logged_in:"],
      expected: ["if logged_in:", "if is_admin:", "print(\"Admin panel\")"],
      hint: "Arrange into correct logical sequence: Outer if → indented inner if → doubly indented print."
    },
    {
      id: 2,
      title: "Puzzle 2 — Trace path",
      prompt: "member=True, paid=False, nested checks for member then paid.",
      tokens: ["member=True", "paid=False"],
      shuffled: ["paid=False", "member=True"],
      expected: ["member=True", "paid=False"],
      hint: "Arrange into correct logical sequence: Outer true, inner false; member-only branch may run if confi"
    },
    {
      id: 3,
      title: "Puzzle 3 — Match nesting",
      prompt: "Outer stock > 0; inner payment_done; result Ship.",
      tokens: ["stock > 0", "payment_done", "Ship"],
      shuffled: ["Ship", "payment_done", "stock > 0"],
      expected: ["stock > 0", "payment_done", "Ship"],
      hint: "Arrange into correct logical sequence: Ship only if both checks pass."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "nested conditions",
      meaning: "They are conditional statements placed inside other conditional blocks."
    },
    {
      id: 2,
      snippet: "nested if statements",
      meaning: "To make a second decision only after a first condition is satisfied."
    },
    {
      id: 3,
      snippet: "How does indentation wor",
      meaning: "Each inner block has an additional indentation level."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Release a Parcel",
      prompt: "Should the system release it?",
      scenario: "A parcel may be released only if the customer has an order **and** shows a valid pickup code. Here order_exists=True, code_valid=False.",
      expectedResponse: "No"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What are nested conditions?",
      sampleAnswer: "They are conditional statements placed inside other conditional blocks."
    },
    {
      id: 2,
      question: "Why use nested if statements?",
      sampleAnswer: "To make a second decision only after a first condition is satisfied."
    },
    {
      id: 3,
      question: "How does indentation work in nested conditions?",
      sampleAnswer: "Each inner block has an additional indentation level."
    },
    {
      id: 4,
      question: "Can nested conditions be replaced by logical operators?",
      sampleAnswer: "Sometimes; and can combine simple checks, but nesting may be clearer for dependent actions."
    }
    ]
  },
  '5.5': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 5,
    moduleName: "Conditions, Loops and Problem-Solving",
    topicKey: "5.5",
    id: 28,
    topicTitle: "for Loops and range()",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What is a for loop used for?",
      options: [
        {
          key: "A",
          text: "Repeating actions over items"
        },
        {
          key: "B",
          text: "Closing Python"
        },
        {
          key: "C",
          text: "Changing file types"
        },
        {
          key: "D",
          text: "Making comments"
        }
      ],
      correct: 0,
      explanation: "It iterates through a sequence or iterable.",
      hint: "Review core principles of for Loops and range()."
    },
    {
      id: 2,
      question: "What values does range(3) produce?",
      options: [
        {
          key: "A",
          text: "1,2,3"
        },
        {
          key: "B",
          text: "0,1,2"
        },
        {
          key: "C",
          text: "0,1,2,3"
        },
        {
          key: "D",
          text: "3 only"
        }
      ],
      correct: 1,
      explanation: "The stop value is excluded.",
      hint: "Review core principles of for Loops and range()."
    },
    {
      id: 3,
      question: "How many times does for i in range(4) run?",
      options: [
        {
          key: "A",
          text: "3"
        },
        {
          key: "B",
          text: "5"
        },
        {
          key: "C",
          text: "4"
        },
        {
          key: "D",
          text: "1"
        }
      ],
      correct: 2,
      explanation: "Four iterations.",
      hint: "Review core principles of for Loops and range()."
    },
    {
      id: 4,
      question: "What is printed by for n in range(1,4): print(n)?",
      options: [
        {
          key: "A",
          text: "0,1,2"
        },
        {
          key: "B",
          text: "1,2,3,4"
        },
        {
          key: "C",
          text: "4"
        },
        {
          key: "D",
          text: "1,2,3"
        }
      ],
      correct: 3,
      explanation: "Range stops before 4.",
      hint: "Review core principles of for Loops and range()."
    },
    {
      id: 5,
      question: "What does range(2, 7, 2) produce?",
      options: [
        {
          key: "A",
          text: "2,4,6"
        },
        {
          key: "B",
          text: "2,3,4"
        },
        {
          key: "C",
          text: "2,4,6,8"
        },
        {
          key: "D",
          text: "7,5,3"
        }
      ],
      correct: 0,
      explanation: "Step size is 2.",
      hint: "Review core principles of for Loops and range()."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange code tokens",
      prompt: "for, n, in, range(3), :, indented print(n).",
      tokens: ["for", "n", "in", "range(3)", ":", "print(n)"],
      shuffled: ["print(n)", ":", "range(3)", "in", "n", "for"],
      expected: ["for", "n", "in", "range(3)", ":", "print(n)"],
      hint: "Arrange into correct logical sequence: for n in range(3): then print(n) indented; output 0,1,2."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match range to values",
      prompt: "range(2), range(1,4), range(2,6,2) ↔ 0,1; 1,2,3; 2,4.",
      tokens: ["range(2)", "range(1,4)", "range(2,6,2)"],
      shuffled: ["range(2,6,2)", "range(1,4)", "range(2)"],
      expected: ["range(2)", "range(1,4)", "range(2,6,2)"],
      hint: "Arrange into correct logical sequence: Listed order."
    },
    {
      id: 3,
      title: "Puzzle 3 — Fill missing stop",
      prompt: "for n in range(1, __): print(n) to print 1,2,3.",
      tokens: ["for", "in", "range(1", "__"],
      shuffled: ["__", "range(1", "in", "for"],
      expected: ["for", "in", "range(1", "__"],
      hint: "Arrange into correct logical sequence: 4."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "a for loop",
      meaning: "A for loop repeats a block for each item in an iterable."
    },
    {
      id: 2,
      snippet: "What does range() do",
      meaning: "It produces a sequence of integers that can be used for iteration."
    },
    {
      id: 3,
      snippet: "Does range include the s",
      meaning: "No, the stop value is excluded."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Print Queue Numbers",
      prompt: "Which loop creates these numbers?",
      scenario: "A service desk needs ticket numbers 1, 2, 3.",
      expectedResponse: "for n in range(1, 4):"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a for loop?",
      sampleAnswer: "A for loop repeats a block for each item in an iterable."
    },
    {
      id: 2,
      question: "What does range() do?",
      sampleAnswer: "It produces a sequence of integers that can be used for iteration."
    },
    {
      id: 3,
      question: "Does range include the stop value?",
      sampleAnswer: "No, the stop value is excluded."
    },
    {
      id: 4,
      question: "What does the step argument in range mean?",
      sampleAnswer: "It controls the difference between consecutive numbers."
    }
    ]
  },
  '5.6': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 5,
    moduleName: "Conditions, Loops and Problem-Solving",
    topicKey: "5.6",
    id: 29,
    topicTitle: "while Loops",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "When does a while loop continue?",
      options: [
        {
          key: "A",
          text: "While its condition is true"
        },
        {
          key: "B",
          text: "Only once"
        },
        {
          key: "C",
          text: "When condition is false"
        },
        {
          key: "D",
          text: "Never"
        }
      ],
      correct: 0,
      explanation: "The condition is checked before each iteration.",
      hint: "Review core principles of while Loops."
    },
    {
      id: 2,
      question: "What can cause an infinite while loop?",
      options: [
        {
          key: "A",
          text: "A comment"
        },
        {
          key: "B",
          text: "A condition that never becomes false"
        },
        {
          key: "C",
          text: "A string"
        },
        {
          key: "D",
          text: "A print call"
        }
      ],
      correct: 1,
      explanation: "No exit condition is reached.",
      hint: "Review core principles of while Loops."
    },
    {
      id: 3,
      question: "What is printed? a correctly indented while loop starting with x=1, printing x while x<3, and incrementing x after each print",
      options: [
        {
          key: "A",
          text: "0,1"
        },
        {
          key: "B",
          text: "1,2,3"
        },
        {
          key: "C",
          text: "1,2"
        },
        {
          key: "D",
          text: "3 only"
        }
      ],
      correct: 2,
      explanation: "x changes from 1 to 3.",
      hint: "Review core principles of while Loops."
    },
    {
      id: 4,
      question: "What happens if the initial while condition is false?",
      options: [
        {
          key: "A",
          text: "Loop runs twice"
        },
        {
          key: "B",
          text: "Error always"
        },
        {
          key: "C",
          text: "Runs once"
        },
        {
          key: "D",
          text: "Body is skipped"
        }
      ],
      correct: 3,
      explanation: "A while loop may run zero times.",
      hint: "Review core principles of while Loops."
    },
    {
      id: 5,
      question: "Which update helps a counter loop finish?",
      options: [
        {
          key: "A",
          text: "count += 1"
        },
        {
          key: "B",
          text: "count = count"
        },
        {
          key: "C",
          text: "print(count) alone"
        },
        {
          key: "D",
          text: "# count"
        }
      ],
      correct: 0,
      explanation: "Incrementing can reach the stop condition.",
      hint: "Review core principles of while Loops."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange lines",
      prompt: "count=1, while count<=3:, print(count), count+=1.",
      tokens: ["count=1", "while count<=3:", "print(count)", "count+=1"],
      shuffled: ["count+=1", "print(count)", "while count<=3:", "count=1"],
      expected: ["count=1", "while count<=3:", "print(count)", "count+=1"],
      hint: "Arrange into correct logical sequence: Initial assignment → while → indented print → indented incre"
    },
    {
      id: 2,
      title: "Puzzle 2 — Trace counter",
      prompt: "Start 2, while <5, increment 1.",
      tokens: ["Start", "while", "<5`", "increment"],
      shuffled: ["increment", "<5`", "while", "Start"],
      expected: ["Start", "while", "<5`", "increment"],
      hint: "Arrange into correct logical sequence: Printed values 2,3,4; stops at 5."
    },
    {
      id: 3,
      title: "Puzzle 3 — Fix infinite loop",
      prompt: "a while loop starting with n=1, checking n<=3, and printing n without updating it; choose missing line.",
      tokens: ["n=1", "n<=3"],
      shuffled: ["n<=3", "n=1"],
      expected: ["n=1", "n<=3"],
      hint: "Arrange into correct logical sequence: Add indented n += 1."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "a while loop",
      meaning: "It repeats code while a condition remains true."
    },
    {
      id: 2,
      snippet: "How is a while loop diff",
      meaning: "A while loop is condition-driven; a for loop iterates over an iterable."
    },
    {
      id: 3,
      snippet: "an infinite loop",
      meaning: "A loop that never reaches a stopping condition."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Count Customers",
      prompt: "Which update should happen each round?",
      scenario: "A shop counter starts at 1 and must display numbers until 3.",
      expectedResponse: "count += 1"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a while loop?",
      sampleAnswer: "It repeats code while a condition remains true."
    },
    {
      id: 2,
      question: "How is a while loop different from a for loop?",
      sampleAnswer: "A while loop is condition-driven; a for loop iterates over an iterable."
    },
    {
      id: 3,
      question: "What is an infinite loop?",
      sampleAnswer: "A loop that never reaches a stopping condition."
    },
    {
      id: 4,
      question: "How can you prevent an accidental infinite loop?",
      sampleAnswer: "Update the loop state and ensure the condition can become false."
    }
    ]
  },
  '5.7': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 5,
    moduleName: "Conditions, Loops and Problem-Solving",
    topicKey: "5.7",
    id: 30,
    topicTitle: "break, continue and pass",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What does break do inside a loop?",
      options: [
        {
          key: "A",
          text: "Ends the loop immediately"
        },
        {
          key: "B",
          text: "Skips one iteration only"
        },
        {
          key: "C",
          text: "Does nothing"
        },
        {
          key: "D",
          text: "Restarts Python"
        }
      ],
      correct: 0,
      explanation: "Control exits the loop.",
      hint: "Review core principles of break, continue and pass."
    },
    {
      id: 2,
      question: "What does continue do?",
      options: [
        {
          key: "A",
          text: "Ends the program"
        },
        {
          key: "B",
          text: "Skips the rest of the current iteration"
        },
        {
          key: "C",
          text: "Deletes a variable"
        },
        {
          key: "D",
          text: "Creates a function"
        }
      ],
      correct: 1,
      explanation: "The next iteration begins.",
      hint: "Review core principles of break, continue and pass."
    },
    {
      id: 3,
      question: "What does pass do?",
      options: [
        {
          key: "A",
          text: "Prints a value"
        },
        {
          key: "B",
          text: "Stops a loop"
        },
        {
          key: "C",
          text: "Acts as a no-operation placeholder"
        },
        {
          key: "D",
          text: "Imports a package"
        }
      ],
      correct: 2,
      explanation: "It is syntactically valid but does nothing.",
      hint: "Review core principles of break, continue and pass."
    },
    {
      id: 4,
      question: "What prints? a correctly indented loop over range(4) that executes break when n==2 before printing n",
      options: [
        {
          key: "A",
          text: "0,1,2,3"
        },
        {
          key: "B",
          text: "2,3"
        },
        {
          key: "C",
          text: "0,1,2"
        },
        {
          key: "D",
          text: "0,1"
        }
      ],
      correct: 3,
      explanation: "Loop stops before printing 2.",
      hint: "Review core principles of break, continue and pass."
    },
    {
      id: 5,
      question: "What prints? a correctly indented loop over range(3) that executes continue when n==1 before printing n",
      options: [
        {
          key: "A",
          text: "0,2"
        },
        {
          key: "B",
          text: "0,1,2"
        },
        {
          key: "C",
          text: "1 only"
        },
        {
          key: "D",
          text: "Nothing"
        }
      ],
      correct: 0,
      explanation: "The iteration for 1 is skipped.",
      hint: "Review core principles of break, continue and pass."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match keyword to action",
      prompt: "break, continue, pass ↔ exit loop, skip iteration, placeholder.",
      tokens: ["break", "continue", "pass"],
      shuffled: ["pass", "continue", "break"],
      expected: ["break", "continue", "pass"],
      hint: "Arrange into correct logical sequence: Listed order."
    },
    {
      id: 2,
      title: "Puzzle 2 — Trace break",
      prompt: "Loop over 1,2,3,4; break at 3 before printing.",
      tokens: ["Loop over 1,2,3,4", "break at 3 before printing."],
      shuffled: ["break at 3 before printing.", "Loop over 1,2,3,4"],
      expected: ["Loop over 1,2,3,4", "break at 3 before printing."],
      hint: "Arrange into correct logical sequence: Output 1,2."
    },
    {
      id: 3,
      title: "Puzzle 3 — Trace continue",
      prompt: "Loop over 1,2,3,4; continue at 2 before printing.",
      tokens: ["Loop over 1,2,3,4", "continue at 2 before printing."],
      shuffled: ["continue at 2 before printing.", "Loop over 1,2,3,4"],
      expected: ["Loop over 1,2,3,4", "continue at 2 before printing."],
      hint: "Arrange into correct logical sequence: Output 1,3,4."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "What does break do",
      meaning: "It exits the nearest enclosing loop."
    },
    {
      id: 2,
      snippet: "What does continue do",
      meaning: "It skips the remaining code in the current iteration."
    },
    {
      id: 3,
      snippet: "pass used for",
      meaning: "It is a placeholder where Python requires a statement."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Skip an Unavailable Seat",
      prompt: "Which keyword fits?",
      scenario: "A booking system checks seats 1, 2, 3; seat 2 is unavailable and should be skipped without stopping the check.",
      expectedResponse: "continue"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does break do?",
      sampleAnswer: "It exits the nearest enclosing loop."
    },
    {
      id: 2,
      question: "What does continue do?",
      sampleAnswer: "It skips the remaining code in the current iteration."
    },
    {
      id: 3,
      question: "What is pass used for?",
      sampleAnswer: "It is a placeholder where Python requires a statement."
    },
    {
      id: 4,
      question: "How do break and continue differ?",
      sampleAnswer: "break stops the loop; continue moves to the next iteration."
    }
    ]
  },
  '5.8': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 5,
    moduleName: "Conditions, Loops and Problem-Solving",
    topicKey: "5.8",
    id: 31,
    topicTitle: "Common Python Errors and Debugging",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "Which error can occur when a colon is missing after if?",
      options: [
        {
          key: "A",
          text: "SyntaxError"
        },
        {
          key: "B",
          text: "FileNotFoundError"
        },
        {
          key: "C",
          text: "KeyError"
        },
        {
          key: "D",
          text: "ImportError"
        }
      ],
      correct: 0,
      explanation: "The statement violates syntax rules.",
      hint: "Review core principles of Common Python Errors and Debugging."
    },
    {
      id: 2,
      question: "What does NameError commonly mean?",
      options: [
        {
          key: "A",
          text: "A number is too large"
        },
        {
          key: "B",
          text: "A referenced name is not defined"
        },
        {
          key: "C",
          text: "A file is empty"
        },
        {
          key: "D",
          text: "A comment is missing"
        }
      ],
      correct: 1,
      explanation: "Python cannot resolve the name.",
      hint: "Review core principles of Common Python Errors and Debugging."
    },
    {
      id: 3,
      question: "What happens with 10 / 0?",
      options: [
        {
          key: "A",
          text: "Returns 0"
        },
        {
          key: "B",
          text: "Returns 10"
        },
        {
          key: "C",
          text: "ZeroDivisionError"
        },
        {
          key: "D",
          text: "NameError"
        }
      ],
      correct: 2,
      explanation: "Division by zero is invalid.",
      hint: "Review core principles of Common Python Errors and Debugging."
    },
    {
      id: 4,
      question: "What is debugging?",
      options: [
        {
          key: "A",
          text: "Removing all code"
        },
        {
          key: "B",
          text: "Changing fonts"
        },
        {
          key: "C",
          text: "Printing only"
        },
        {
          key: "D",
          text: "Finding and fixing program errors"
        }
      ],
      correct: 3,
      explanation: "Debugging identifies causes of incorrect behavior.",
      hint: "Review core principles of Common Python Errors and Debugging."
    },
    {
      id: 5,
      question: "What is a good first step after an error appears?",
      options: [
        {
          key: "A",
          text: "Read the traceback and error message"
        },
        {
          key: "B",
          text: "Delete the project"
        },
        {
          key: "C",
          text: "Ignore it"
        },
        {
          key: "D",
          text: "Guess randomly"
        }
      ],
      correct: 0,
      explanation: "Error details guide investigation.",
      hint: "Review core principles of Common Python Errors and Debugging."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match error to cause",
      prompt: "SyntaxError, NameError, ZeroDivisionError ↔ invalid code syntax, undefined name, divide by zero.",
      tokens: ["SyntaxError", "NameError", "ZeroDivisionError"],
      shuffled: ["ZeroDivisionError", "NameError", "SyntaxError"],
      expected: ["SyntaxError", "NameError", "ZeroDivisionError"],
      hint: "Arrange into correct logical sequence: Listed order."
    },
    {
      id: 2,
      title: "Puzzle 2 — Fix code (Select correction)",
      prompt: "print(\"Hi\" →",
      tokens: ["Code Step 1", "Code Step 2", "Code Step 3"],
      shuffled: ["Code Step 3", "Code Step 1", "Code Step 2"],
      expected: ["Code Step 1", "Code Step 2", "Code Step 3"],
      hint: "Arrange into correct logical sequence: print(\"Hi\")."
    },
    {
      id: 3,
      title: "Puzzle 3 — Order debugging steps",
      prompt: "Reproduce issue, read error, inspect affected line, fix, rerun.",
      tokens: ["Reproduce", "issue", "read", "error"],
      shuffled: ["error", "read", "issue", "Reproduce"],
      expected: ["Reproduce", "issue", "read", "error"],
      hint: "Arrange into correct logical sequence: This order."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "a syntax error",
      meaning: "An error caused by code that does not follow Python's grammar."
    },
    {
      id: 2,
      snippet: "a runtime error",
      meaning: "An error that occurs while a program executes."
    },
    {
      id: 3,
      snippet: "debugging",
      meaning: "The process of locating, understanding, and fixing problems in code."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Fix a Receipt Error",
      prompt: "What is missing?",
      scenario: "An office script contains print(\"Paid\" and shows an error.",
      expectedResponse: "Closing )"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a syntax error?",
      sampleAnswer: "An error caused by code that does not follow Python's grammar."
    },
    {
      id: 2,
      question: "What is a runtime error?",
      sampleAnswer: "An error that occurs while a program executes."
    },
    {
      id: 3,
      question: "What is debugging?",
      sampleAnswer: "The process of locating, understanding, and fixing problems in code."
    },
    {
      id: 4,
      question: "How do you begin debugging?",
      sampleAnswer: "I reproduce the issue, read the error message, and inspect the relevant code."
    }
    ]
  },
  '5.9': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 5,
    moduleName: "Conditions, Loops and Problem-Solving",
    topicKey: "5.9",
    id: 32,
    topicTitle: "Practical Problem-Solving with Conditions and Loops",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "Which feature checks whether a score is a pass?",
      options: [
        {
          key: "A",
          text: "if"
        },
        {
          key: "B",
          text: "import"
        },
        {
          key: "C",
          text: "#"
        },
        {
          key: "D",
          text: "print alone"
        }
      ],
      correct: 0,
      explanation: "A condition makes the decision.",
      hint: "Review core principles of Practical Problem-Solving with Conditions and Loops."
    },
    {
      id: 2,
      question: "Which feature processes five orders one after another?",
      options: [
        {
          key: "A",
          text: "A comment"
        },
        {
          key: "B",
          text: "A loop"
        },
        {
          key: "C",
          text: "A string literal"
        },
        {
          key: "D",
          text: "A colon alone"
        }
      ],
      correct: 1,
      explanation: "A loop repeats the task.",
      hint: "Review core principles of Practical Problem-Solving with Conditions and Loops."
    },
    {
      id: 3,
      question: "What should you do before writing a solution?",
      options: [
        {
          key: "A",
          text: "Guess output"
        },
        {
          key: "B",
          text: "Delete input"
        },
        {
          key: "C",
          text: "Define the problem and expected result"
        },
        {
          key: "D",
          text: "Ignore edge cases"
        }
      ],
      correct: 2,
      explanation: "Clear requirements come first.",
      hint: "Review core principles of Practical Problem-Solving with Conditions and Loops."
    },
    {
      id: 4,
      question: "What prints? a program that starts with total=0, adds each n from [2,3] to total inside a loop, and prints total after the loop",
      options: [
        {
          key: "A",
          text: "2"
        },
        {
          key: "B",
          text: "3"
        },
        {
          key: "C",
          text: "23"
        },
        {
          key: "D",
          text: "5"
        }
      ],
      correct: 3,
      explanation: "The loop sums both values.",
      hint: "Review core principles of Practical Problem-Solving with Conditions and Loops."
    },
    {
      id: 5,
      question: "Why test a program with different inputs?",
      options: [
        {
          key: "A",
          text: "To catch edge cases and mistakes"
        },
        {
          key: "B",
          text: "To make code longer"
        },
        {
          key: "C",
          text: "To hide errors"
        },
        {
          key: "D",
          text: "To avoid running code"
        }
      ],
      correct: 0,
      explanation: "Tests verify behavior.",
      hint: "Review core principles of Practical Problem-Solving with Conditions and Loops."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange solution workflow",
      prompt: "Understand task → Identify inputs → Write steps → Run tests → Check output.",
      tokens: ["Understand task", "Identify inputs", "Write steps", "Run tests", "Check output."],
      shuffled: ["Check output.", "Run tests", "Write steps", "Identify inputs", "Understand task"],
      expected: ["Understand task", "Identify inputs", "Write steps", "Run tests", "Check output."],
      hint: "Arrange into correct logical sequence: This order."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build even-number check",
      prompt: "Tokens if, n % 2 == 0, :, print(\"Even\").",
      tokens: ["if", "n % 2 == 0", ":", "print(\"Even\")"],
      shuffled: ["print(\"Even\")", ":", "n % 2 == 0", "if"],
      expected: ["if", "n % 2 == 0", ":", "print(\"Even\")"],
      hint: "Arrange into correct logical sequence: if n % 2 == 0: then indented print."
    },
    {
      id: 3,
      title: "Puzzle 3 — Trace total",
      prompt: "Start total=0; add 2, 4, 6 in a for loop.",
      tokens: ["Start total=0", "add 2, 4, 6 in a for loop."],
      shuffled: ["add 2, 4, 6 in a for loop.", "Start total=0"],
      expected: ["Start total=0", "add 2, 4, 6 in a for loop."],
      hint: "Arrange into correct logical sequence: Totals 2 → 6 → 12; final total 12."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "How do conditions and lo",
      meaning: "A loop processes repeated items while conditions decide what happens for ea"
    },
    {
      id: 2,
      snippet: "How would you count pass",
      meaning: "Loop through scores, check the pass condition, and increase a counter for e"
    },
    {
      id: 3,
      snippet: "Why are edge cases impor",
      meaning: "They help verify behavior for unusual inputs and boundaries."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Count Passing Scores",
      prompt: "How many students passed?",
      scenario: "A class has scores 30, 60, 80; pass mark is 50.",
      expectedResponse: "2"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "How do conditions and loops work together?",
      sampleAnswer: "A loop processes repeated items while conditions decide what happens for each item."
    },
    {
      id: 2,
      question: "How would you count passing students?",
      sampleAnswer: "Loop through scores, check the pass condition, and increase a counter for each pass."
    },
    {
      id: 3,
      question: "Why are edge cases important?",
      sampleAnswer: "They help verify behavior for unusual inputs and boundaries."
    },
    {
      id: 4,
      question: "What steps do you follow to solve a coding problem?",
      sampleAnswer: "Understand the task, plan the logic, write code, test it, and improve it."
    }
    ]
  },
  '6.1': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 6,
    moduleName: "Python Collections and Strings",
    topicKey: "6.1",
    id: 33,
    topicTitle: "Strings, Indexing and Slicing",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What is a string?",
      options: [
        {
          key: "A",
          text: "Text stored as characters"
        },
        {
          key: "B",
          text: "Only a whole number"
        },
        {
          key: "C",
          text: "A Python error"
        },
        {
          key: "D",
          text: "A loop"
        }
      ],
      correct: 0,
      explanation: "Strings represent text.",
      hint: "Review core principles of Strings, Indexing and Slicing."
    },
    {
      id: 2,
      question: "What is the first index in a Python string?",
      options: [
        {
          key: "A",
          text: "1"
        },
        {
          key: "B",
          text: "0"
        },
        {
          key: "C",
          text: "-2"
        },
        {
          key: "D",
          text: "10"
        }
      ],
      correct: 1,
      explanation: "Python uses zero-based indexing.",
      hint: "Review core principles of Strings, Indexing and Slicing."
    },
    {
      id: 3,
      question: "What does \"Python\"[0] return?",
      options: [
        {
          key: "A",
          text: "y"
        },
        {
          key: "B",
          text: "n"
        },
        {
          key: "C",
          text: "P"
        },
        {
          key: "D",
          text: "Python"
        }
      ],
      correct: 2,
      explanation: "Index 0 is the first character.",
      hint: "Review core principles of Strings, Indexing and Slicing."
    },
    {
      id: 4,
      question: "What does \"Python\"[-1] return?",
      options: [
        {
          key: "A",
          text: "P"
        },
        {
          key: "B",
          text: "o"
        },
        {
          key: "C",
          text: "h"
        },
        {
          key: "D",
          text: "n"
        }
      ],
      correct: 3,
      explanation: "Index -1 is the last character.",
      hint: "Review core principles of Strings, Indexing and Slicing."
    },
    {
      id: 5,
      question: "What does \"Python\"[1:4] return?",
      options: [
        {
          key: "A",
          text: "yth"
        },
        {
          key: "B",
          text: "Pyt"
        },
        {
          key: "C",
          text: "ython"
        },
        {
          key: "D",
          text: "tho"
        }
      ],
      correct: 0,
      explanation: "The end index 4 is excluded.",
      hint: "Review core principles of Strings, Indexing and Slicing."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Tap the indexed character",
      prompt: "word = \"DATA\"; choose character at index 2.",
      tokens: ["word = \"DATA\"", "choose character at index 2."],
      shuffled: ["choose character at index 2.", "word = \"DATA\""],
      expected: ["word = \"DATA\"", "choose character at index 2."],
      hint: "Arrange into correct logical sequence: T."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match slice to result",
      prompt: "\"ABCDE\"[:2], \"ABCDE\"[2:], \"ABCDE\"[-1] ↔ AB, CDE, E.",
      tokens: ["\"ABCDE\"[:2]", "\"ABCDE\"[2:]", "\"ABCDE\"[-1]", "AB", "CDE", "E"],
      shuffled: ["E", "CDE", "AB", "\"ABCDE\"[-1]", "\"ABCDE\"[2:]", "\"ABCDE\"[:2]"],
      expected: ["\"ABCDE\"[:2]", "\"ABCDE\"[2:]", "\"ABCDE\"[-1]", "AB", "CDE", "E"],
      hint: "Arrange into correct logical sequence: Listed order."
    },
    {
      id: 3,
      title: "Puzzle 3 — Build a slice (Arrange tokens)",
      prompt: "word, [, 1, :, 3, ]; target \"DATA\" → AT.",
      tokens: ["word", "[", "1", ":", "3", "]", "\"DATA\"", "AT"],
      shuffled: ["AT", "\"DATA\"", "]", "3", ":", "1", "[", "word"],
      expected: ["word", "[", "1", ":", "3", "]", "\"DATA\"", "AT"],
      hint: "Arrange into correct logical sequence: word[1:3]."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "a string in Python",
      meaning: "A string is a sequence of characters used to represent text."
    },
    {
      id: 2,
      snippet: "string indexing",
      meaning: "Accessing an individual character using its position."
    },
    {
      id: 3,
      snippet: "slicing",
      meaning: "Extracting a portion of a string with start and stop indices."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Read the Last Letter",
      prompt: "Which expression gets the last letter?",
      scenario: "A product code is \"BOX\".",
      expectedResponse: "code[-1]"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a string in Python?",
      sampleAnswer: "A string is a sequence of characters used to represent text."
    },
    {
      id: 2,
      question: "What is string indexing?",
      sampleAnswer: "Accessing an individual character using its position."
    },
    {
      id: 3,
      question: "What is slicing?",
      sampleAnswer: "Extracting a portion of a string with start and stop indices."
    },
    {
      id: 4,
      question: "What does a negative index mean?",
      sampleAnswer: "It counts positions backward from the end of a sequence."
    }
    ]
  },
  '6.2': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 6,
    moduleName: "Python Collections and Strings",
    topicKey: "6.2",
    id: 34,
    topicTitle: "String Methods and Text Processing",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What does \"hello\".upper() return?",
      options: [
        {
          key: "A",
          text: "HELLO"
        },
        {
          key: "B",
          text: "Hello"
        },
        {
          key: "C",
          text: "hello"
        },
        {
          key: "D",
          text: "Error"
        }
      ],
      correct: 0,
      explanation: "It converts letters to uppercase.",
      hint: "Review core principles of String Methods and Text Processing."
    },
    {
      id: 2,
      question: "What does \"  Hi  \".strip() return?",
      options: [
        {
          key: "A",
          text: "  Hi  "
        },
        {
          key: "B",
          text: "Hi"
        },
        {
          key: "C",
          text: "HI"
        },
        {
          key: "D",
          text: "Empty text"
        }
      ],
      correct: 1,
      explanation: "It removes leading and trailing whitespace.",
      hint: "Review core principles of String Methods and Text Processing."
    },
    {
      id: 3,
      question: "What does \"Python\".lower() return?",
      options: [
        {
          key: "A",
          text: "PYTHON"
        },
        {
          key: "B",
          text: "Python"
        },
        {
          key: "C",
          text: "python"
        },
        {
          key: "D",
          text: "P"
        }
      ],
      correct: 2,
      explanation: "It converts letters to lowercase.",
      hint: "Review core principles of String Methods and Text Processing."
    },
    {
      id: 4,
      question: "What does \"red,blue\".split(\",\") return?",
      options: [
        {
          key: "A",
          text: "redblue"
        },
        {
          key: "B",
          text: "red"
        },
        {
          key: "C",
          text: "blue"
        },
        {
          key: "D",
          text: "['red', 'blue']"
        }
      ],
      correct: 3,
      explanation: "Split creates a list of parts.",
      hint: "Review core principles of String Methods and Text Processing."
    },
    {
      id: 5,
      question: "What does \"cat\".replace(\"c\", \"b\") return?",
      options: [
        {
          key: "A",
          text: "bat"
        },
        {
          key: "B",
          text: "cat"
        },
        {
          key: "C",
          text: "cab"
        },
        {
          key: "D",
          text: "b"
        }
      ],
      correct: 0,
      explanation: "Matching text is replaced.",
      hint: "Review core principles of String Methods and Text Processing."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match method to task",
      prompt: ".upper(), .strip(), .replace() ↔ uppercase, remove edge spaces, substitute text.",
      tokens: [".upper()", ".strip()", ".replace()"],
      shuffled: [".replace()", ".strip()", ".upper()"],
      expected: [".upper()", ".strip()", ".replace()"],
      hint: "Arrange into correct logical sequence: Listed order."
    },
    {
      id: 2,
      title: "Puzzle 2 — Clean a name (Arrange operations)",
      prompt: "Start \"  riya  \"; apply .strip() then .title().",
      tokens: ["\"  riya  \"", ".strip()", ".title()"],
      shuffled: [".title()", ".strip()", "\"  riya  \""],
      expected: ["\"  riya  \"", ".strip()", ".title()"],
      hint: "Arrange into correct logical sequence: \"Riya\"."
    },
    {
      id: 3,
      title: "Puzzle 3 — Complete code",
      prompt: "\"HELLO\".___() should return \"hello\"; choices lower, upper, strip.",
      tokens: ["\"HELLO\".___()", "\"hello\"", "lower", "upper", "strip"],
      shuffled: ["strip", "upper", "lower", "\"hello\"", "\"HELLO\".___()"],
      expected: ["\"HELLO\".___()", "\"hello\"", "lower", "upper", "strip"],
      hint: "Arrange into correct logical sequence: lower."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "string methods",
      meaning: "Built-in operations that return processed versions of strings or informatio"
    },
    {
      id: 2,
      snippet: "What does strip() do",
      meaning: "It removes leading and trailing whitespace by default."
    },
    {
      id: 3,
      snippet: "the difference between u",
      meaning: "They convert letters to uppercase and lowercase respectively."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Clean a Customer Name",
      prompt: "Which method removes spaces at both ends?",
      scenario: "A form stores a name as \"  Riya  \".",
      expectedResponse: ".strip()"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What are string methods?",
      sampleAnswer: "Built-in operations that return processed versions of strings or information about them."
    },
    {
      id: 2,
      question: "What does strip() do?",
      sampleAnswer: "It removes leading and trailing whitespace by default."
    },
    {
      id: 3,
      question: "What is the difference between upper() and lower()?",
      sampleAnswer: "They convert letters to uppercase and lowercase respectively."
    },
    {
      id: 4,
      question: "What does split() return?",
      sampleAnswer: "It returns a list of substrings based on a separator."
    }
    ]
  },
  '6.3': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 6,
    moduleName: "Python Collections and Strings",
    topicKey: "6.3",
    id: 35,
    topicTitle: "Lists, Indexing and Slicing",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What is a Python list?",
      options: [
        {
          key: "A",
          text: "An ordered, changeable collection"
        },
        {
          key: "B",
          text: "A single character"
        },
        {
          key: "C",
          text: "A loop keyword"
        },
        {
          key: "D",
          text: "A comment"
        }
      ],
      correct: 0,
      explanation: "Lists store multiple items.",
      hint: "Review core principles of Lists, Indexing and Slicing."
    },
    {
      id: 2,
      question: "Which creates a list?",
      options: [
        {
          key: "A",
          text: "1,2,3 only"
        },
        {
          key: "B",
          text: "[1, 2, 3]"
        },
        {
          key: "C",
          text: "{1: 2}"
        },
        {
          key: "D",
          text: "\"123\""
        }
      ],
      correct: 1,
      explanation: "Square brackets define a list literal.",
      hint: "Review core principles of Lists, Indexing and Slicing."
    },
    {
      id: 3,
      question: "What does [10, 20, 30][1] return?",
      options: [
        {
          key: "A",
          text: "10"
        },
        {
          key: "B",
          text: "30"
        },
        {
          key: "C",
          text: "20"
        },
        {
          key: "D",
          text: "Error"
        }
      ],
      correct: 2,
      explanation: "Index 1 is the second item.",
      hint: "Review core principles of Lists, Indexing and Slicing."
    },
    {
      id: 4,
      question: "What does [5, 6, 7][-1] return?",
      options: [
        {
          key: "A",
          text: "5"
        },
        {
          key: "B",
          text: "6"
        },
        {
          key: "C",
          text: "-1"
        },
        {
          key: "D",
          text: "7"
        }
      ],
      correct: 3,
      explanation: "Negative one selects the last item.",
      hint: "Review core principles of Lists, Indexing and Slicing."
    },
    {
      id: 5,
      question: "What does [1, 2, 3, 4][1:3] return?",
      options: [
        {
          key: "A",
          text: "[2, 3]"
        },
        {
          key: "B",
          text: "[1, 2, 3]"
        },
        {
          key: "C",
          text: "[3, 4]"
        },
        {
          key: "D",
          text: "[2, 3, 4]"
        }
      ],
      correct: 0,
      explanation: "Stop index is excluded.",
      hint: "Review core principles of Lists, Indexing and Slicing."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Select list item",
      prompt: "items = [\"Pen\", \"Book\", \"Bag\"]; index 1.",
      tokens: ["items = [\"Pen\", \"Book\", \"Bag\"]", "index 1."],
      shuffled: ["index 1.", "items = [\"Pen\", \"Book\", \"Bag\"]"],
      expected: ["items = [\"Pen\", \"Book\", \"Bag\"]", "index 1."],
      hint: "Arrange into correct logical sequence: Book."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build list slice",
      prompt: "Tokens items, [, 0, :, 2, ].",
      tokens: ["items", "[", "0", ":", "2", "]"],
      shuffled: ["]", "2", ":", "0", "[", "items"],
      expected: ["items", "[", "0", ":", "2", "]"],
      hint: "Arrange into correct logical sequence: items[0:2] returns the first two items."
    },
    {
      id: 3,
      title: "Puzzle 3 — Match indices",
      prompt: "For [10,20,30], 0, 1, -1 ↔ 10, 20, 30.",
      tokens: ["For `[10", "20", "30]", "0", "1", "-1"],
      shuffled: ["-1", "1", "0", "30]", "20", "For `[10"],
      expected: ["For `[10", "20", "30]", "0", "1", "-1"],
      hint: "Arrange into correct logical sequence: Listed order."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "a list in Python",
      meaning: "An ordered, mutable collection that can hold multiple values."
    },
    {
      id: 2,
      snippet: "How do you access a list",
      meaning: "By using its index inside square brackets."
    },
    {
      id: 3,
      snippet: "list slicing",
      meaning: "Selecting a range of list elements."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Pick a Product",
      prompt: "Which code selects Book?",
      scenario: "A shop stores products = [\"Pen\", \"Book\", \"Bag\"].",
      expectedResponse: "products[1]"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a list in Python?",
      sampleAnswer: "An ordered, mutable collection that can hold multiple values."
    },
    {
      id: 2,
      question: "How do you access a list item?",
      sampleAnswer: "By using its index inside square brackets."
    },
    {
      id: 3,
      question: "What is list slicing?",
      sampleAnswer: "Selecting a range of list elements."
    },
    {
      id: 4,
      question: "Can you change items in a list?",
      sampleAnswer: "Yes, lists are mutable."
    }
    ]
  },
  '6.4': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 6,
    moduleName: "Python Collections and Strings",
    topicKey: "6.4",
    id: 36,
    topicTitle: "List Methods and Operations",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What does .append() do?",
      options: [
        {
          key: "A",
          text: "Adds one item to the end"
        },
        {
          key: "B",
          text: "Deletes the list"
        },
        {
          key: "C",
          text: "Sorts automatically"
        },
        {
          key: "D",
          text: "Returns the first item"
        }
      ],
      correct: 0,
      explanation: "It appends one item.",
      hint: "Review core principles of List Methods and Operations."
    },
    {
      id: 2,
      question: "What does len([2, 4, 6]) return?",
      options: [
        {
          key: "A",
          text: "6"
        },
        {
          key: "B",
          text: "3"
        },
        {
          key: "C",
          text: "12"
        },
        {
          key: "D",
          text: "2"
        }
      ],
      correct: 1,
      explanation: "The list has three items.",
      hint: "Review core principles of List Methods and Operations."
    },
    {
      id: 3,
      question: "What does [1, 2] + [3] return?",
      options: [
        {
          key: "A",
          text: "[6]"
        },
        {
          key: "B",
          text: "[1,2]"
        },
        {
          key: "C",
          text: "[1,2,3]"
        },
        {
          key: "D",
          text: "Error"
        }
      ],
      correct: 2,
      explanation: "+ concatenates lists.",
      hint: "Review core principles of List Methods and Operations."
    },
    {
      id: 4,
      question: "What does .pop() do with no argument on a nonempty list?",
      options: [
        {
          key: "A",
          text: "Adds an item"
        },
        {
          key: "B",
          text: "Sorts items"
        },
        {
          key: "C",
          text: "Copies list"
        },
        {
          key: "D",
          text: "Removes and returns the last item"
        }
      ],
      correct: 3,
      explanation: "Default pop removes the final element.",
      hint: "Review core principles of List Methods and Operations."
    },
    {
      id: 5,
      question: "Which method sorts a list in place?",
      options: [
        {
          key: "A",
          text: ".sort()"
        },
        {
          key: "B",
          text: ".strip()"
        },
        {
          key: "C",
          text: ".split()"
        },
        {
          key: "D",
          text: ".lower()"
        }
      ],
      correct: 0,
      explanation: ".sort() changes the list itself.",
      hint: "Review core principles of List Methods and Operations."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange list updates",
      prompt: "Start [\"Pen\"], .append(\"Book\"), .append(\"Bag\").",
      tokens: ["[\"Pen\"]", ".append(\"Book\")", ".append(\"Bag\")"],
      shuffled: [".append(\"Bag\")", ".append(\"Book\")", "[\"Pen\"]"],
      expected: ["[\"Pen\"]", ".append(\"Book\")", ".append(\"Bag\")"],
      hint: "Arrange into correct logical sequence: [\"Pen\", \"Book\", \"Bag\"]."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match method to effect",
      prompt: ".append(), .remove(), .sort() ↔ add, remove matching item, sort in place.",
      tokens: [".append()", ".remove()", ".sort()"],
      shuffled: [".sort()", ".remove()", ".append()"],
      expected: [".append()", ".remove()", ".sort()"],
      hint: "Arrange into correct logical sequence: Listed order."
    },
    {
      id: 3,
      title: "Puzzle 3 — Trace pop",
      prompt: "items=[\"A\",\"B\",\"C\"]; items.pop();",
      tokens: ["items=[\"A\",\"B\",\"C\"]", "items.pop()"],
      shuffled: ["items.pop()", "items=[\"A\",\"B\",\"C\"]"],
      expected: ["items=[\"A\",\"B\",\"C\"]", "items.pop()"],
      hint: "Arrange into correct logical sequence: Remaining list [\"A\", \"B\"], returned item \"C\"."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "What does append() do",
      meaning: "It adds one item to the end of a list."
    },
    {
      id: 2,
      snippet: "the difference between a",
      meaning: "append adds one object; extend adds elements from an iterable."
    },
    {
      id: 3,
      snippet: "What does pop() return",
      meaning: "The removed item."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Add a New Product",
      prompt: "Which method adds it to the end?",
      scenario: "A shop has items = [\"Pen\", \"Book\"]. A new \"Bag\" arrives.",
      expectedResponse: "items.append(\"Bag\")"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does append() do?",
      sampleAnswer: "It adds one item to the end of a list."
    },
    {
      id: 2,
      question: "What is the difference between append() and extend()?",
      sampleAnswer: "append adds one object; extend adds elements from an iterable."
    },
    {
      id: 3,
      question: "What does pop() return?",
      sampleAnswer: "The removed item."
    },
    {
      id: 4,
      question: "What is the difference between sort() and sorted()?",
      sampleAnswer: "sort changes a list in place; sorted returns a new sorted list."
    }
    ]
  },
  '6.5': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 6,
    moduleName: "Python Collections and Strings",
    topicKey: "6.5",
    id: 37,
    topicTitle: "Tuples and Sets",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "Which is a tuple literal?",
      options: [
        {
          key: "A",
          text: "(1, 2)"
        },
        {
          key: "B",
          text: "[1, 2]"
        },
        {
          key: "C",
          text: "{1: 2}"
        },
        {
          key: "D",
          text: "\"1,2\""
        }
      ],
      correct: 0,
      explanation: "Parentheses commonly represent tuples.",
      hint: "Review core principles of Tuples and Sets."
    },
    {
      id: 2,
      question: "Can you replace a tuple item by index?",
      options: [
        {
          key: "A",
          text: "Always"
        },
        {
          key: "B",
          text: "No, tuples are immutable"
        },
        {
          key: "C",
          text: "Only with append"
        },
        {
          key: "D",
          text: "Only with sort"
        }
      ],
      correct: 1,
      explanation: "Tuple items cannot be reassigned.",
      hint: "Review core principles of Tuples and Sets."
    },
    {
      id: 3,
      question: "What is a main feature of a set?",
      options: [
        {
          key: "A",
          text: "It stores duplicate entries separately"
        },
        {
          key: "B",
          text: "It is indexed by position"
        },
        {
          key: "C",
          text: "It contains unique elements"
        },
        {
          key: "D",
          text: "It always preserves insertion order"
        }
      ],
      correct: 2,
      explanation: "Duplicate values are removed.",
      hint: "Review core principles of Tuples and Sets."
    },
    {
      id: 4,
      question: "What is len({1, 1, 2})?",
      options: [
        {
          key: "A",
          text: "3"
        },
        {
          key: "B",
          text: "1"
        },
        {
          key: "C",
          text: "0"
        },
        {
          key: "D",
          text: "2"
        }
      ],
      correct: 3,
      explanation: "Only two unique values remain.",
      hint: "Review core principles of Tuples and Sets."
    },
    {
      id: 5,
      question: "Which expression finds common elements in two sets?",
      options: [
        {
          key: "A",
          text: "a & b"
        },
        {
          key: "B",
          text: "a + b"
        },
        {
          key: "C",
          text: "a[0]"
        },
        {
          key: "D",
          text: "a.append(b)"
        }
      ],
      correct: 0,
      explanation: "& is set intersection.",
      hint: "Review core principles of Tuples and Sets."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Classify collections",
      prompt: "(10,20), {10,20}, [10,20] ↔ tuple, set, list.",
      tokens: ["(10,20)", "{10,20}", "[10,20]"],
      shuffled: ["[10,20]", "{10,20}", "(10,20)"],
      expected: ["(10,20)", "{10,20}", "[10,20]"],
      hint: "Arrange into correct logical sequence: Listed order."
    },
    {
      id: 2,
      title: "Puzzle 2 — Remove duplicates visually",
      prompt: "Input [\"A\",\"B\",\"A\",\"C\"]; select unique items.",
      tokens: ["Input `[\"A\",\"B\",\"A\",\"C\"]", "select unique items."],
      shuffled: ["select unique items.", "Input `[\"A\",\"B\",\"A\",\"C\"]"],
      expected: ["Input `[\"A\",\"B\",\"A\",\"C\"]", "select unique items."],
      hint: "Arrange into correct logical sequence: A, B, C."
    },
    {
      id: 3,
      title: "Puzzle 3 — Find common elements",
      prompt: "{1,2,3} and {2,3,4}.",
      tokens: ["{1,2,3}", "{2,3,4}"],
      shuffled: ["{2,3,4}", "{1,2,3}"],
      expected: ["{1,2,3}", "{2,3,4}"],
      hint: "Arrange into correct logical sequence: {2,3}."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "a tuple",
      meaning: "An ordered, immutable collection."
    },
    {
      id: 2,
      snippet: "a set",
      meaning: "An unordered collection of unique hashable elements."
    },
    {
      id: 3,
      snippet: "How are lists and tuples",
      meaning: "Lists are mutable; tuples are immutable."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Unique Visitor Cities",
      prompt: "Which collection is useful for unique city names?",
      scenario: "An event has visitors from Delhi, Patna, Delhi.",
      expectedResponse: "Set"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a tuple?",
      sampleAnswer: "An ordered, immutable collection."
    },
    {
      id: 2,
      question: "What is a set?",
      sampleAnswer: "An unordered collection of unique hashable elements."
    },
    {
      id: 3,
      question: "How are lists and tuples different?",
      sampleAnswer: "Lists are mutable; tuples are immutable."
    },
    {
      id: 4,
      question: "When is a set useful?",
      sampleAnswer: "When I need unique values or set operations such as intersection."
    }
    ]
  },
  '6.6': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 6,
    moduleName: "Python Collections and Strings",
    topicKey: "6.6",
    id: 38,
    topicTitle: "Dictionaries and Key-Value Pairs",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What does a dictionary store?",
      options: [
        {
          key: "A",
          text: "Key-value pairs"
        },
        {
          key: "B",
          text: "Only numbers"
        },
        {
          key: "C",
          text: "Only comments"
        },
        {
          key: "D",
          text: "Only loops"
        }
      ],
      correct: 0,
      explanation: "Each key maps to a value.",
      hint: "Review core principles of Dictionaries and Key-Value Pairs."
    },
    {
      id: 2,
      question: "Which is a dictionary?",
      options: [
        {
          key: "A",
          text: "[\"name\", \"Riya\"]"
        },
        {
          key: "B",
          text: "{\"name\": \"Riya\"}"
        },
        {
          key: "C",
          text: "(1,2)"
        },
        {
          key: "D",
          text: "\"name\""
        }
      ],
      correct: 1,
      explanation: "Curly braces with key: value.",
      hint: "Review core principles of Dictionaries and Key-Value Pairs."
    },
    {
      id: 3,
      question: "What does {\"age\": 20}[\"age\"] return?",
      options: [
        {
          key: "A",
          text: "age"
        },
        {
          key: "B",
          text: "0"
        },
        {
          key: "C",
          text: "20"
        },
        {
          key: "D",
          text: "Error"
        }
      ],
      correct: 2,
      explanation: "Access by key.",
      hint: "Review core principles of Dictionaries and Key-Value Pairs."
    },
    {
      id: 4,
      question: "Which method lists dictionary keys?",
      options: [
        {
          key: "A",
          text: ".append()"
        },
        {
          key: "B",
          text: ".sort()"
        },
        {
          key: "C",
          text: ".split()"
        },
        {
          key: "D",
          text: ".keys()"
        }
      ],
      correct: 3,
      explanation: "keys() returns a keys view.",
      hint: "Review core principles of Dictionaries and Key-Value Pairs."
    },
    {
      id: 5,
      question: "What does .get(\"city\") return when the key is absent and no default is provided?",
      options: [
        {
          key: "A",
          text: "None"
        },
        {
          key: "B",
          text: "0"
        },
        {
          key: "C",
          text: "An empty dictionary"
        },
        {
          key: "D",
          text: "Always KeyError"
        }
      ],
      correct: 0,
      explanation: "get() safely returns None by default.",
      hint: "Review core principles of Dictionaries and Key-Value Pairs."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Build a record",
      prompt: "Tokens {, \"name\", :, \"Riya\", }.",
      tokens: ["{", "\"name\"", ":", "\"Riya\"", "}"],
      shuffled: ["}", "\"Riya\"", ":", "\"name\"", "{"],
      expected: ["{", "\"name\"", ":", "\"Riya\"", "}"],
      hint: "Arrange into correct logical sequence: {\"name\": \"Riya\"}."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match key to value",
      prompt: "{\"name\":\"Riya\", \"age\":20, \"city\":\"Patna\"}.",
      tokens: ["{\"name\":\"Riya\"", "\"age\":20", "\"city\":\"Patna\"}`"],
      shuffled: ["\"city\":\"Patna\"}`", "\"age\":20", "{\"name\":\"Riya\""],
      expected: ["{\"name\":\"Riya\"", "\"age\":20", "\"city\":\"Patna\"}`"],
      hint: "Arrange into correct logical sequence: name→Riya, age→20, city→Patna."
    },
    {
      id: 3,
      title: "Puzzle 3 — Choose correct lookup",
      prompt: "Need employee age from employee.",
      tokens: ["Need", "employee", "age", "from"],
      shuffled: ["from", "age", "employee", "Need"],
      expected: ["Need", "employee", "age", "from"],
      hint: "Arrange into correct logical sequence: employee[\"age\"] (assuming key exists)."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "a dictionary",
      meaning: "A mutable mapping of unique keys to values."
    },
    {
      id: 2,
      snippet: "How do you access a dict",
      meaning: "By its key, for example employee[\"name\"]."
    },
    {
      id: 3,
      snippet: "the difference between k",
      meaning: "keys() returns keys; values() returns values."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Find an Employee Name",
      prompt: "Which code gets the name?",
      scenario: "Office data: employee = {\"name\": \"Riya\", \"age\": 24}.",
      expectedResponse: "employee[\"name\"]"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a dictionary?",
      sampleAnswer: "A mutable mapping of unique keys to values."
    },
    {
      id: 2,
      question: "How do you access a dictionary value?",
      sampleAnswer: "By its key, for example employee[\"name\"]."
    },
    {
      id: 3,
      question: "What is the difference between keys() and values()?",
      sampleAnswer: "keys() returns keys; values() returns values."
    },
    {
      id: 4,
      question: "What is the benefit of get()?",
      sampleAnswer: "It can return a default value instead of raising KeyError for a missing key."
    }
    ]
  },
  '6.7': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 6,
    moduleName: "Python Collections and Strings",
    topicKey: "6.7",
    id: 39,
    topicTitle: "Looping Through Collections",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "Which loop iterates over list items?",
      options: [
        {
          key: "A",
          text: "for item in items:"
        },
        {
          key: "B",
          text: "for items = item:"
        },
        {
          key: "C",
          text: "repeat items"
        },
        {
          key: "D",
          text: "print for items"
        }
      ],
      correct: 0,
      explanation: "It visits each element.",
      hint: "Review core principles of Looping Through Collections."
    },
    {
      id: 2,
      question: "What prints for for x in [2,4]: print(x)?",
      options: [
        {
          key: "A",
          text: "6"
        },
        {
          key: "B",
          text: "2 then 4"
        },
        {
          key: "C",
          text: "4 then 2 always"
        },
        {
          key: "D",
          text: "Nothing"
        }
      ],
      correct: 1,
      explanation: "Items are visited in list order.",
      hint: "Review core principles of Looping Through Collections."
    },
    {
      id: 3,
      question: "Which method helps loop through dictionary key-value pairs?",
      options: [
        {
          key: "A",
          text: ".append()"
        },
        {
          key: "B",
          text: ".upper()"
        },
        {
          key: "C",
          text: ".items()"
        },
        {
          key: "D",
          text: ".pop(0)"
        }
      ],
      correct: 2,
      explanation: "items() yields pairs.",
      hint: "Review core principles of Looping Through Collections."
    },
    {
      id: 4,
      question: "What does for ch in \"Hi\": iterate over?",
      options: [
        {
          key: "A",
          text: "Words only"
        },
        {
          key: "B",
          text: "Files"
        },
        {
          key: "C",
          text: "Numbers"
        },
        {
          key: "D",
          text: "Characters H, i"
        }
      ],
      correct: 3,
      explanation: "Strings are iterable.",
      hint: "Review core principles of Looping Through Collections."
    },
    {
      id: 5,
      question: "What is a common way to count list elements satisfying a condition?",
      options: [
        {
          key: "A",
          text: "Loop and increment a counter"
        },
        {
          key: "B",
          text: "Rename the list"
        },
        {
          key: "C",
          text: "Delete the list"
        },
        {
          key: "D",
          text: "Print only the heading"
        }
      ],
      correct: 0,
      explanation: "Count matches as you iterate.",
      hint: "Review core principles of Looping Through Collections."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange loop",
      prompt: "for, product, in, products, :, indented print(product).",
      tokens: ["for", "product", "in", "products", ":", "print(product)"],
      shuffled: ["print(product)", ":", "products", "in", "product", "for"],
      expected: ["for", "product", "in", "products", ":", "print(product)"],
      hint: "Arrange into correct logical sequence: for product in products: then indented print."
    },
    {
      id: 2,
      title: "Puzzle 2 — Trace list loop",
      prompt: "[\"Pen\",\"Book\"]; print each item.",
      tokens: ["[\"Pen\",\"Book\"]", "print each item."],
      shuffled: ["print each item.", "[\"Pen\",\"Book\"]"],
      expected: ["[\"Pen\",\"Book\"]", "print each item."],
      hint: "Arrange into correct logical sequence: Pen, then Book."
    },
    {
      id: 3,
      title: "Puzzle 3 — Match dictionary iteration",
      prompt: ".keys(), .values(), .items() ↔ keys, values, pairs.",
      tokens: [".keys()", ".values()", ".items()"],
      shuffled: [".items()", ".values()", ".keys()"],
      expected: [".keys()", ".values()", ".items()"],
      hint: "Arrange into correct logical sequence: Listed order."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "How do you loop through ",
      meaning: "I use for item in my_list:."
    },
    {
      id: 2,
      snippet: "How do you loop through ",
      meaning: "I use for key, value in my_dict.items():."
    },
    {
      id: 3,
      snippet: "Can a for loop iterate o",
      meaning: "Yes, it visits characters one by one."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Count Sold Items",
      prompt: "How many items will for item in sales: visit?",
      scenario: "A shop stores sales = [\"Pen\", \"Book\", \"Pen\"].",
      expectedResponse: "3"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "How do you loop through a list?",
      sampleAnswer: "I use for item in my_list:."
    },
    {
      id: 2,
      question: "How do you loop through a dictionary's pairs?",
      sampleAnswer: "I use for key, value in my_dict.items():."
    },
    {
      id: 3,
      question: "Can a for loop iterate over a string?",
      sampleAnswer: "Yes, it visits characters one by one."
    },
    {
      id: 4,
      question: "Why loop through collections?",
      sampleAnswer: "To process multiple items without repeating code manually."
    }
    ]
  },
  '6.8': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 6,
    moduleName: "Python Collections and Strings",
    topicKey: "6.8",
    id: 40,
    topicTitle: "Nested Collections and Real-Life Data",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What is a nested collection?",
      options: [
        {
          key: "A",
          text: "A collection containing other collections"
        },
        {
          key: "B",
          text: "A single integer"
        },
        {
          key: "C",
          text: "A comment"
        },
        {
          key: "D",
          text: "A syntax error"
        }
      ],
      correct: 0,
      explanation: "Data structures can contain others.",
      hint: "Review core principles of Nested Collections and Real-Life Data."
    },
    {
      id: 2,
      question: "Which represents two student records?",
      options: [
        {
          key: "A",
          text: "\"Riya,Aman\""
        },
        {
          key: "B",
          text: "[{\"name\":\"Riya\"}, {\"name\":\"Aman\"}]"
        },
        {
          key: "C",
          text: "5"
        },
        {
          key: "D",
          text: "True"
        }
      ],
      correct: 1,
      explanation: "A list of dictionaries holds multiple records.",
      hint: "Review core principles of Nested Collections and Real-Life Data."
    },
    {
      id: 3,
      question: "How do you get the first record from records?",
      options: [
        {
          key: "A",
          text: "records[1]"
        },
        {
          key: "B",
          text: "records[\"first\"]"
        },
        {
          key: "C",
          text: "records[0]"
        },
        {
          key: "D",
          text: "records[-2]"
        }
      ],
      correct: 2,
      explanation: "First list index is zero.",
      hint: "Review core principles of Nested Collections and Real-Life Data."
    },
    {
      id: 4,
      question: "Given records=[{\"name\":\"Riya\"}], what is records[0][\"name\"]?",
      options: [
        {
          key: "A",
          text: "0"
        },
        {
          key: "B",
          text: "name"
        },
        {
          key: "C",
          text: "The whole list"
        },
        {
          key: "D",
          text: "Riya"
        }
      ],
      correct: 3,
      explanation: "First select record, then key.",
      hint: "Review core principles of Nested Collections and Real-Life Data."
    },
    {
      id: 5,
      question: "Why use a list of dictionaries for sales records?",
      options: [
        {
          key: "A",
          text: "Each item can store named fields"
        },
        {
          key: "B",
          text: "It removes all duplicates automatically"
        },
        {
          key: "C",
          text: "It prevents errors completely"
        },
        {
          key: "D",
          text: "It guarantees sorted data"
        }
      ],
      correct: 0,
      explanation: "Named fields make records readable.",
      hint: "Review core principles of Nested Collections and Real-Life Data."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match structure to purpose",
      prompt: "list of dictionaries, dictionary of lists, list of lists ↔ records, named columns, grid.",
      tokens: ["list of dictionaries", "dictionary of lists", "list of lists"],
      shuffled: ["list of lists", "dictionary of lists", "list of dictionaries"],
      expected: ["list of dictionaries", "dictionary of lists", "list of lists"],
      hint: "Arrange into correct logical sequence: Listed order."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build nested lookup",
      prompt: "Tokens orders, [, 0, ], [, \"amount\", ].",
      tokens: ["orders", "[", "0", "]", "[", "\"amount\"", "]"],
      shuffled: ["]", "\"amount\"", "[", "]", "0", "[", "orders"],
      expected: ["orders", "[", "0", "]", "[", "\"amount\"", "]"],
      hint: "Arrange into correct logical sequence: orders[0][\"amount\"]."
    },
    {
      id: 3,
      title: "Puzzle 3 — Find record value",
      prompt: "students=[{\"name\":\"Riya\",\"score\":80},{\"name\":\"Aman\",\"score\":70}]; retrieve Aman's score.",
      tokens: ["students=[{\"name\":\"Riya\",\"score\":80},{\"name\":\"Aman\",\"score\":70}]", "retrieve Aman's score."],
      shuffled: ["retrieve Aman's score.", "students=[{\"name\":\"Riya\",\"score\":80},{\"name\":\"Aman\",\"score\":70}]"],
      expected: ["students=[{\"name\":\"Riya\",\"score\":80},{\"name\":\"Aman\",\"score\":70}]", "retrieve Aman's score."],
      hint: "Arrange into correct logical sequence: students[1][\"score\"] → 70."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "nested collections",
      meaning: "Collections that contain other collections, such as lists of dictionaries."
    },
    {
      id: 2,
      snippet: "a list of dictionaries",
      meaning: "To represent multiple records with named fields."
    },
    {
      id: 3,
      snippet: "How do you access a valu",
      meaning: "Select the list item by index, then the dictionary value by key."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Find a Customer's City",
      prompt: "What is the second customer's city?",
      scenario: "Customer records: [{'name':'Riya','city':'Patna'}, {'name':'Aman','city':'Delhi'}].",
      expectedResponse: "Delhi"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What are nested collections?",
      sampleAnswer: "Collections that contain other collections, such as lists of dictionaries."
    },
    {
      id: 2,
      question: "Why use a list of dictionaries?",
      sampleAnswer: "To represent multiple records with named fields."
    },
    {
      id: 3,
      question: "How do you access a value in a list of dictionaries?",
      sampleAnswer: "Select the list item by index, then the dictionary value by key."
    },
    {
      id: 4,
      question: "Give a practical example.",
      sampleAnswer: "A list of sales records, where each record has a product name, quantity, and price."
    }
    ]
  },
  '7.1': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 7,
    moduleName: "Functions, Modules and Files",
    topicKey: "7.1",
    id: 41,
    topicTitle: "Introduction to Functions",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What is a function?",
      options: [
        {
          key: "A",
          text: "A reusable block of code"
        },
        {
          key: "B",
          text: "A file extension"
        },
        {
          key: "C",
          text: "A comment"
        },
        {
          key: "D",
          text: "A variable type only"
        }
      ],
      correct: 0,
      explanation: "Functions group reusable actions.",
      hint: "Review core principles of Introduction to Functions."
    },
    {
      id: 2,
      question: "Which keyword defines a function?",
      options: [
        {
          key: "A",
          text: "make"
        },
        {
          key: "B",
          text: "def"
        },
        {
          key: "C",
          text: "func"
        },
        {
          key: "D",
          text: "new"
        }
      ],
      correct: 1,
      explanation: "Python uses def.",
      hint: "Review core principles of Introduction to Functions."
    },
    {
      id: 3,
      question: "Which is a valid function header?",
      options: [
        {
          key: "A",
          text: "def greet"
        },
        {
          key: "B",
          text: "greet():"
        },
        {
          key: "C",
          text: "def greet():"
        },
        {
          key: "D",
          text: "function greet()"
        }
      ],
      correct: 2,
      explanation: "Header needs parentheses and colon.",
      hint: "Review core principles of Introduction to Functions."
    },
    {
      id: 4,
      question: "What happens when a function is defined but not called?",
      options: [
        {
          key: "A",
          text: "Its body always runs"
        },
        {
          key: "B",
          text: "It prints automatically"
        },
        {
          key: "C",
          text: "It is deleted"
        },
        {
          key: "D",
          text: "Its body does not execute just because of the definition"
        }
      ],
      correct: 3,
      explanation: "A call invokes it.",
      hint: "Review core principles of Introduction to Functions."
    },
    {
      id: 5,
      question: "How do you call a function named greet?",
      options: [
        {
          key: "A",
          text: "greet()"
        },
        {
          key: "B",
          text: "def greet"
        },
        {
          key: "C",
          text: "call greet"
        },
        {
          key: "D",
          text: "greet:"
        }
      ],
      correct: 0,
      explanation: "Parentheses make the call.",
      hint: "Review core principles of Introduction to Functions."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange function code",
      prompt: "def greet():, indented print(\"Hi\"), greet().",
      tokens: ["def greet():", "print(\"Hi\")", "greet()"],
      shuffled: ["greet()", "print(\"Hi\")", "def greet():"],
      expected: ["def greet():", "print(\"Hi\")", "greet()"],
      hint: "Arrange into correct logical sequence: Define function with body, then call it."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match terms",
      prompt: "def, function body, function call ↔ define, instructions inside, execute.",
      tokens: ["def", "function body", "function call"],
      shuffled: ["function call", "function body", "def"],
      expected: ["def", "function body", "function call"],
      hint: "Arrange into correct logical sequence: Listed order."
    },
    {
      id: 3,
      title: "Puzzle 3 — Trace call",
      prompt: "def hello(): print(\"Hello\"); call hello() twice.",
      tokens: ["def hello(): print(\"Hello\")", "hello()"],
      shuffled: ["hello()", "def hello(): print(\"Hello\")"],
      expected: ["def hello(): print(\"Hello\")", "hello()"],
      hint: "Arrange into correct logical sequence: Hello appears twice."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "a function in Python",
      meaning: "A reusable block of code that performs a task."
    },
    {
      id: 2,
      snippet: "How do you define a func",
      meaning: "With def, a name, parentheses, a colon, and an indented body."
    },
    {
      id: 3,
      snippet: "How do you call a functi",
      meaning: "By writing its name followed by parentheses."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Reuse a Greeting",
      prompt: "Which approach avoids rewriting the same code?",
      scenario: "An office program needs the same welcome message many times.",
      expectedResponse: "Write a reusable function"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a function in Python?",
      sampleAnswer: "A reusable block of code that performs a task."
    },
    {
      id: 2,
      question: "How do you define a function?",
      sampleAnswer: "With def, a name, parentheses, a colon, and an indented body."
    },
    {
      id: 3,
      question: "How do you call a function?",
      sampleAnswer: "By writing its name followed by parentheses."
    },
    {
      id: 4,
      question: "Why are functions useful?",
      sampleAnswer: "They reduce repetition and make code easier to organize and test."
    }
    ]
  },
  '7.2': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 7,
    moduleName: "Functions, Modules and Files",
    topicKey: "7.2",
    id: 42,
    topicTitle: "Function Parameters and Return Values",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What is a parameter?",
      options: [
        {
          key: "A",
          text: "A named input in a function definition"
        },
        {
          key: "B",
          text: "A file"
        },
        {
          key: "C",
          text: "A module"
        },
        {
          key: "D",
          text: "A loop keyword"
        }
      ],
      correct: 0,
      explanation: "Parameters receive arguments.",
      hint: "Review core principles of Function Parameters and Return Values."
    },
    {
      id: 2,
      question: "What is an argument?",
      options: [
        {
          key: "A",
          text: "An error message"
        },
        {
          key: "B",
          text: "A value passed when calling a function"
        },
        {
          key: "C",
          text: "A comment"
        },
        {
          key: "D",
          text: "A Python package"
        }
      ],
      correct: 1,
      explanation: "Arguments supply input values.",
      hint: "Review core principles of Function Parameters and Return Values."
    },
    {
      id: 3,
      question: "What does return do?",
      options: [
        {
          key: "A",
          text: "Prints automatically"
        },
        {
          key: "B",
          text: "Creates a loop"
        },
        {
          key: "C",
          text: "Sends a result back to the caller"
        },
        {
          key: "D",
          text: "Imports a module"
        }
      ],
      correct: 2,
      explanation: "It ends the function call with a result.",
      hint: "Review core principles of Function Parameters and Return Values."
    },
    {
      id: 4,
      question: "What is returned by def add(a,b): return a+b called with add(2,3)?",
      options: [
        {
          key: "A",
          text: "2"
        },
        {
          key: "B",
          text: "3"
        },
        {
          key: "C",
          text: "23"
        },
        {
          key: "D",
          text: "5"
        }
      ],
      correct: 3,
      explanation: "The sum is returned.",
      hint: "Review core principles of Function Parameters and Return Values."
    },
    {
      id: 5,
      question: "What does a function return if it finishes without an explicit return?",
      options: [
        {
          key: "A",
          text: "None"
        },
        {
          key: "B",
          text: "0"
        },
        {
          key: "C",
          text: "False always"
        },
        {
          key: "D",
          text: "An error always"
        }
      ],
      correct: 0,
      explanation: "Python returns None implicitly.",
      hint: "Review core principles of Function Parameters and Return Values."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange function",
      prompt: "def add(a, b):, indented return a + b, add(2, 3).",
      tokens: ["def add(a, b):", "return a + b", "add(2, 3)"],
      shuffled: ["add(2, 3)", "return a + b", "def add(a, b):"],
      expected: ["def add(a, b):", "return a + b", "add(2, 3)"],
      hint: "Arrange into correct logical sequence: Define then call; result 5."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match terms",
      prompt: "parameters a,b, arguments 2,3, return value 5.",
      tokens: ["a,b", "2,3", "5"],
      shuffled: ["5", "2,3", "a,b"],
      expected: ["a,b", "2,3", "5"],
      hint: "Arrange into correct logical sequence: Inputs in definition, values at call, result."
    },
    {
      id: 3,
      title: "Puzzle 3 — Trace output",
      prompt: "def double(n): return n*2; print(double(4)).",
      tokens: ["def double(n): return n*2", "print(double(4))"],
      shuffled: ["print(double(4))", "def double(n): return n*2"],
      expected: ["def double(n): return n*2", "print(double(4))"],
      hint: "Arrange into correct logical sequence: 8."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "a parameter",
      meaning: "A variable listed in a function definition that receives an argument."
    },
    {
      id: 2,
      snippet: "an argument",
      meaning: "The actual value supplied when calling a function."
    },
    {
      id: 3,
      snippet: "a return value",
      meaning: "A result sent back by a function to its caller."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Calculate Two Prices",
      prompt: "Which return statement works?",
      scenario: "A shop function add_prices(a, b) should return the total. Prices are 20 and 30.",
      expectedResponse: "return a + b"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a parameter?",
      sampleAnswer: "A variable listed in a function definition that receives an argument."
    },
    {
      id: 2,
      question: "What is an argument?",
      sampleAnswer: "The actual value supplied when calling a function."
    },
    {
      id: 3,
      question: "What is a return value?",
      sampleAnswer: "A result sent back by a function to its caller."
    },
    {
      id: 4,
      question: "How is return different from print?",
      sampleAnswer: "return provides a value for further use; print displays text or values."
    }
    ]
  },
  '7.3': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 7,
    moduleName: "Functions, Modules and Files",
    topicKey: "7.3",
    id: 43,
    topicTitle: "Default Arguments and Keyword Arguments",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What is a default parameter value?",
      options: [
        {
          key: "A",
          text: "A value used when the caller omits that argument"
        },
        {
          key: "B",
          text: "A syntax error"
        },
        {
          key: "C",
          text: "A comment"
        },
        {
          key: "D",
          text: "A loop counter"
        }
      ],
      correct: 0,
      explanation: "It makes an argument optional.",
      hint: "Review core principles of Default Arguments and Keyword Arguments."
    },
    {
      id: 2,
      question: "What is printed by def greet(name=\"Guest\"): print(name) followed by greet()?",
      options: [
        {
          key: "A",
          text: "name"
        },
        {
          key: "B",
          text: "Guest"
        },
        {
          key: "C",
          text: "None"
        },
        {
          key: "D",
          text: "Error"
        }
      ],
      correct: 1,
      explanation: "Default is used.",
      hint: "Review core principles of Default Arguments and Keyword Arguments."
    },
    {
      id: 3,
      question: "What is a keyword argument?",
      options: [
        {
          key: "A",
          text: "An argument supplied by position only"
        },
        {
          key: "B",
          text: "A reserved word only"
        },
        {
          key: "C",
          text: "An argument passed using parameter=value"
        },
        {
          key: "D",
          text: "A file name"
        }
      ],
      correct: 2,
      explanation: "It identifies the parameter by name.",
      hint: "Review core principles of Default Arguments and Keyword Arguments."
    },
    {
      id: 4,
      question: "Given def area(w,h): return w*h, what is area(h=3,w=4)?",
      options: [
        {
          key: "A",
          text: "7"
        },
        {
          key: "B",
          text: "3"
        },
        {
          key: "C",
          text: "Error"
        },
        {
          key: "D",
          text: "12"
        }
      ],
      correct: 3,
      explanation: "Keyword order does not change matching.",
      hint: "Review core principles of Default Arguments and Keyword Arguments."
    },
    {
      id: 5,
      question: "Which call overrides a default currency=\"INR\"?",
      options: [
        {
          key: "A",
          text: "show(currency=\"USD\")"
        },
        {
          key: "B",
          text: "show(currency) with undefined variable"
        },
        {
          key: "C",
          text: "show = \"USD\""
        },
        {
          key: "D",
          text: "def show"
        }
      ],
      correct: 0,
      explanation: "Explicit argument replaces default.",
      hint: "Review core principles of Default Arguments and Keyword Arguments."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match call to result",
      prompt: "greet(), greet(\"Riya\") for default Guest ↔ Guest, Riya.",
      tokens: ["greet()", "greet(\"Riya\")"],
      shuffled: ["greet(\"Riya\")", "greet()"],
      expected: ["greet()", "greet(\"Riya\")"],
      hint: "Arrange into correct logical sequence: Listed order."
    },
    {
      id: 2,
      title: "Puzzle 2 — Arrange keyword call",
      prompt: "show, (, name, =, \"Aman\", ).",
      tokens: ["show", "(", "name", "=", "\"Aman\"", ")"],
      shuffled: [")", "\"Aman\"", "=", "name", "(", "show"],
      expected: ["show", "(", "name", "=", "\"Aman\"", ")"],
      hint: "Arrange into correct logical sequence: show(name=\"Aman\")."
    },
    {
      id: 3,
      title: "Puzzle 3 — Fix parameter order",
      prompt: "def f(a=1, b): is invalid;",
      tokens: ["def", "f(a=1", "is", "invalid"],
      shuffled: ["invalid", "is", "f(a=1", "def"],
      expected: ["def", "f(a=1", "is", "invalid"],
      hint: "Arrange into correct logical sequence: def f(b, a=1): (or give b a default)."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "a default argument",
      meaning: "A parameter value used when the caller does not supply an argument."
    },
    {
      id: 2,
      snippet: "a keyword argument",
      meaning: "An argument passed by naming its parameter."
    },
    {
      id: 3,
      snippet: "Can a caller override a ",
      meaning: "Yes, by passing another argument."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Set a Default City",
      prompt: "What happens when the user calls delivery() without a city?",
      scenario: "A delivery function uses city=\"Patna\" when no city is supplied.",
      expectedResponse: "Patna is used"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a default argument?",
      sampleAnswer: "A parameter value used when the caller does not supply an argument."
    },
    {
      id: 2,
      question: "What is a keyword argument?",
      sampleAnswer: "An argument passed by naming its parameter."
    },
    {
      id: 3,
      question: "Can a caller override a default value?",
      sampleAnswer: "Yes, by passing another argument."
    },
    {
      id: 4,
      question: "Why are keyword arguments helpful?",
      sampleAnswer: "They make calls clearer and can avoid confusion about argument order."
    }
    ]
  },
  '7.4': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 7,
    moduleName: "Functions, Modules and Files",
    topicKey: "7.4",
    id: 44,
    topicTitle: "Variable Scope and Built-in Functions",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What is a local variable?",
      options: [
        {
          key: "A",
          text: "A variable defined inside a function and normally used there"
        },
        {
          key: "B",
          text: "A file path"
        },
        {
          key: "C",
          text: "A Python module"
        },
        {
          key: "D",
          text: "A string method"
        }
      ],
      correct: 0,
      explanation: "Local scope is function-specific.",
      hint: "Review core principles of Variable Scope and Built-in Functions."
    },
    {
      id: 2,
      question: "What is a global variable?",
      options: [
        {
          key: "A",
          text: "A variable created in a loop only"
        },
        {
          key: "B",
          text: "A name defined at module level"
        },
        {
          key: "C",
          text: "A parameter only"
        },
        {
          key: "D",
          text: "A constant keyword"
        }
      ],
      correct: 1,
      explanation: "It is accessible from the module's global namespace.",
      hint: "Review core principles of Variable Scope and Built-in Functions."
    },
    {
      id: 3,
      question: "What does len(\"Python\") return?",
      options: [
        {
          key: "A",
          text: "5"
        },
        {
          key: "B",
          text: "7"
        },
        {
          key: "C",
          text: "6"
        },
        {
          key: "D",
          text: "0"
        }
      ],
      correct: 2,
      explanation: "There are six characters.",
      hint: "Review core principles of Variable Scope and Built-in Functions."
    },
    {
      id: 4,
      question: "What does max([2, 9, 4]) return?",
      options: [
        {
          key: "A",
          text: "2"
        },
        {
          key: "B",
          text: "4"
        },
        {
          key: "C",
          text: "3"
        },
        {
          key: "D",
          text: "9"
        }
      ],
      correct: 3,
      explanation: "max finds the greatest value.",
      hint: "Review core principles of Variable Scope and Built-in Functions."
    },
    {
      id: 5,
      question: "What does sum([1,2,3]) return?",
      options: [
        {
          key: "A",
          text: "6"
        },
        {
          key: "B",
          text: "3"
        },
        {
          key: "C",
          text: "123"
        },
        {
          key: "D",
          text: "Error"
        }
      ],
      correct: 0,
      explanation: "sum adds numbers.",
      hint: "Review core principles of Variable Scope and Built-in Functions."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Classify names",
      prompt: "x=10 at module level vs y=5 inside def f().",
      tokens: ["x=10", "y=5", "def f()"],
      shuffled: ["def f()", "y=5", "x=10"],
      expected: ["x=10", "y=5", "def f()"],
      hint: "Arrange into correct logical sequence: x global; y local."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match built-ins",
      prompt: "len, min, sum ↔ count items, smallest value, total.",
      tokens: ["len", "min", "sum"],
      shuffled: ["sum", "min", "len"],
      expected: ["len", "min", "sum"],
      hint: "Arrange into correct logical sequence: Listed order."
    },
    {
      id: 3,
      title: "Puzzle 3 — Trace function scope",
      prompt: "a module-level x=10; inside f(), local x=3 is printed; after calling f(), the module-level x is printed.",
      tokens: ["x=10", "f()", "x=3", "f()", "x"],
      shuffled: ["x", "f()", "x=3", "f()", "x=10"],
      expected: ["x=10", "f()", "x=3", "f()", "x"],
      hint: "Arrange into correct logical sequence: Prints 3, then 10."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "variable scope",
      meaning: "The part of a program where a name can be accessed."
    },
    {
      id: 2,
      snippet: "a local variable",
      meaning: "A variable defined within a function, normally accessible there."
    },
    {
      id: 3,
      snippet: "Name three built-in func",
      meaning: "len(), sum(), and max()."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Find the Largest Sale",
      prompt: "Which built-in finds the highest amount?",
      scenario: "A shop stores daily sales [100, 250, 150].",
      expectedResponse: "max(sales)"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is variable scope?",
      sampleAnswer: "The part of a program where a name can be accessed."
    },
    {
      id: 2,
      question: "What is a local variable?",
      sampleAnswer: "A variable defined within a function, normally accessible there."
    },
    {
      id: 3,
      question: "Name three built-in functions.",
      sampleAnswer: "len(), sum(), and max()."
    },
    {
      id: 4,
      question: "What does len() do?",
      sampleAnswer: "It returns the number of items in a collection or characters in a string."
    }
    ]
  },
  '7.5': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 7,
    moduleName: "Functions, Modules and Files",
    topicKey: "7.5",
    id: 45,
    topicTitle: "Python Modules and Imports",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What is a Python module?",
      options: [
        {
          key: "A",
          text: "A file containing reusable Python code"
        },
        {
          key: "B",
          text: "A keyboard"
        },
        {
          key: "C",
          text: "A comment only"
        },
        {
          key: "D",
          text: "A data type"
        }
      ],
      correct: 0,
      explanation: "Modules organize code.",
      hint: "Review core principles of Python Modules and Imports."
    },
    {
      id: 2,
      question: "Which keyword loads a module?",
      options: [
        {
          key: "A",
          text: "def"
        },
        {
          key: "B",
          text: "import"
        },
        {
          key: "C",
          text: "while"
        },
        {
          key: "D",
          text: "pass"
        }
      ],
      correct: 1,
      explanation: "import makes a module available.",
      hint: "Review core principles of Python Modules and Imports."
    },
    {
      id: 3,
      question: "Which imports the standard math module?",
      options: [
        {
          key: "A",
          text: "load math"
        },
        {
          key: "B",
          text: "math import"
        },
        {
          key: "C",
          text: "import math"
        },
        {
          key: "D",
          text: "use math"
        }
      ],
      correct: 2,
      explanation: "This is Python syntax.",
      hint: "Review core principles of Python Modules and Imports."
    },
    {
      id: 4,
      question: "How do you call square root after import math?",
      options: [
        {
          key: "A",
          text: "sqrt.math(9)"
        },
        {
          key: "B",
          text: "math(9)"
        },
        {
          key: "C",
          text: "sqrt(9) without importing the name"
        },
        {
          key: "D",
          text: "math.sqrt(9)"
        }
      ],
      correct: 3,
      explanation: "Module-qualified function.",
      hint: "Review core principles of Python Modules and Imports."
    },
    {
      id: 5,
      question: "What is the result of math.sqrt(9)?",
      options: [
        {
          key: "A",
          text: "3.0"
        },
        {
          key: "B",
          text: "9"
        },
        {
          key: "C",
          text: "81"
        },
        {
          key: "D",
          text: "0"
        }
      ],
      correct: 0,
      explanation: "The square root is three.",
      hint: "Review core principles of Python Modules and Imports."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange import and call",
      prompt: "import math, print(math.sqrt(16)).",
      tokens: ["import math", "print(math.sqrt(16))"],
      shuffled: ["print(math.sqrt(16))", "import math"],
      expected: ["import math", "print(math.sqrt(16))"],
      hint: "Arrange into correct logical sequence: Import first, then print; output 4.0."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match modules",
      prompt: "math, random, datetime ↔ mathematical functions, pseudo-random utilities, dates and times.",
      tokens: ["math", "random", "datetime"],
      shuffled: ["datetime", "random", "math"],
      expected: ["math", "random", "datetime"],
      hint: "Arrange into correct logical sequence: Listed order."
    },
    {
      id: 3,
      title: "Puzzle 3 — Complete import",
      prompt: "from math import ___ to call sqrt(25).",
      tokens: ["from math import ___", "sqrt(25)"],
      shuffled: ["sqrt(25)", "from math import ___"],
      expected: ["from math import ___", "sqrt(25)"],
      hint: "Arrange into correct logical sequence: sqrt."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "a module in Python",
      meaning: "A file containing Python definitions and statements that can be imported."
    },
    {
      id: 2,
      snippet: "Why do we import modules",
      meaning: "To reuse existing functions and organize programs."
    },
    {
      id: 3,
      snippet: "How do you import math",
      meaning: "With import math."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Calculate Square Root",
      prompt: "Which expression works after import math?",
      scenario: "An employee wants the square root of 25 using Python's standard library.",
      expectedResponse: "math.sqrt(25)"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a module in Python?",
      sampleAnswer: "A file containing Python definitions and statements that can be imported."
    },
    {
      id: 2,
      question: "Why do we import modules?",
      sampleAnswer: "To reuse existing functions and organize programs."
    },
    {
      id: 3,
      question: "How do you import math?",
      sampleAnswer: "With import math."
    },
    {
      id: 4,
      question: "What is the difference between import math and from math import sqrt?",
      sampleAnswer: "The first uses math.sqrt; the second makes sqrt directly available."
    }
    ]
  },
  '7.6': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 7,
    moduleName: "Functions, Modules and Files",
    topicKey: "7.6",
    id: 46,
    topicTitle: "Working with Dates and Time",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "Which standard library module handles dates and times?",
      options: [
        {
          key: "A",
          text: "datetime"
        },
        {
          key: "B",
          text: "math"
        },
        {
          key: "C",
          text: "csv"
        },
        {
          key: "D",
          text: "json only"
        }
      ],
      correct: 0,
      explanation: "datetime provides date and time types.",
      hint: "Review core principles of Working with Dates and Time."
    },
    {
      id: 2,
      question: "Which represents a date without a time?",
      options: [
        {
          key: "A",
          text: "timedelta"
        },
        {
          key: "B",
          text: "date"
        },
        {
          key: "C",
          text: "float"
        },
        {
          key: "D",
          text: "list"
        }
      ],
      correct: 1,
      explanation: "date stores year, month, day.",
      hint: "Review core principles of Working with Dates and Time."
    },
    {
      id: 3,
      question: "What does date(2026, 1, 5).year return?",
      options: [
        {
          key: "A",
          text: "1"
        },
        {
          key: "B",
          text: "5"
        },
        {
          key: "C",
          text: "2026"
        },
        {
          key: "D",
          text: "Error"
        }
      ],
      correct: 2,
      explanation: "year is an attribute.",
      hint: "Review core principles of Working with Dates and Time."
    },
    {
      id: 4,
      question: "What does a timedelta represent?",
      options: [
        {
          key: "A",
          text: "A file"
        },
        {
          key: "B",
          text: "A chart"
        },
        {
          key: "C",
          text: "A Python comment"
        },
        {
          key: "D",
          text: "A duration between dates/times"
        }
      ],
      correct: 3,
      explanation: "It stores time differences.",
      hint: "Review core principles of Working with Dates and Time."
    },
    {
      id: 5,
      question: "Which method formats a date using a format string?",
      options: [
        {
          key: "A",
          text: "strftime()"
        },
        {
          key: "B",
          text: "append()"
        },
        {
          key: "C",
          text: "splitlines()"
        },
        {
          key: "D",
          text: "sqrt()"
        }
      ],
      correct: 0,
      explanation: "It formats dates/times as text.",
      hint: "Review core principles of Working with Dates and Time."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange date code",
      prompt: "from datetime import date, today = date.today(), print(today.year).",
      tokens: ["from datetime import date", "today = date.today()", "print(today.year)"],
      shuffled: ["print(today.year)", "today = date.today()", "from datetime import date"],
      expected: ["from datetime import date", "today = date.today()", "print(today.year)"],
      hint: "Arrange into correct logical sequence: Import → create date → access year."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match attributes",
      prompt: ".year, .month, .day ↔ year number, month number, day number.",
      tokens: [".year", ".month", ".day"],
      shuffled: [".day", ".month", ".year"],
      expected: [".year", ".month", ".day"],
      hint: "Arrange into correct logical sequence: Listed order."
    },
    {
      id: 3,
      title: "Puzzle 3 — Calculate a duration",
      prompt: "date(2026,1,3) - date(2026,1,1);",
      tokens: ["date(2026,1,3", "date(2026,1,1)`"],
      shuffled: ["date(2026,1,1)`", "date(2026,1,3"],
      expected: ["date(2026,1,3", "date(2026,1,1)`"],
      hint: "Arrange into correct logical sequence: timedelta(days=2)."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "the datetime module",
      meaning: "Python's standard library module for working with dates and times."
    },
    {
      id: 2,
      snippet: "a date object",
      meaning: "An object that represents a calendar date."
    },
    {
      id: 3,
      snippet: "timedelta",
      meaning: "A duration used for date and time calculations."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Read an Invoice Date",
      prompt: "Which attribute gives the month number?",
      scenario: "Invoice date is date(2026, 5, 12).",
      expectedResponse: ".month"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is the datetime module?",
      sampleAnswer: "Python's standard library module for working with dates and times."
    },
    {
      id: 2,
      question: "What is a date object?",
      sampleAnswer: "An object that represents a calendar date."
    },
    {
      id: 3,
      question: "What is timedelta?",
      sampleAnswer: "A duration used for date and time calculations."
    },
    {
      id: 4,
      question: "What does strftime() do?",
      sampleAnswer: "It formats a date or time as a string."
    }
    ]
  },
  '7.7': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 7,
    moduleName: "Functions, Modules and Files",
    topicKey: "7.7",
    id: 47,
    topicTitle: "Reading and Writing Files and CSV",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What does open(\"notes.txt\", \"r\") do?",
      options: [
        {
          key: "A",
          text: "Opens an existing file for reading"
        },
        {
          key: "B",
          text: "Always creates a new file"
        },
        {
          key: "C",
          text: "Deletes it"
        },
        {
          key: "D",
          text: "Renames it"
        }
      ],
      correct: 0,
      explanation: "r is read mode.",
      hint: "Review core principles of Reading and Writing Files and CSV."
    },
    {
      id: 2,
      question: "What does mode \"w\" do?",
      options: [
        {
          key: "A",
          text: "Only reads"
        },
        {
          key: "B",
          text: "Opens for writing and truncates an existing file"
        },
        {
          key: "C",
          text: "Appends only"
        },
        {
          key: "D",
          text: "Imports a module"
        }
      ],
      correct: 1,
      explanation: "Existing contents are overwritten.",
      hint: "Review core principles of Reading and Writing Files and CSV."
    },
    {
      id: 3,
      question: "Why use with open(...) as f:?",
      options: [
        {
          key: "A",
          text: "It creates a chart"
        },
        {
          key: "B",
          text: "It sorts data"
        },
        {
          key: "C",
          text: "It closes the file automatically on block exit"
        },
        {
          key: "D",
          text: "It removes errors always"
        }
      ],
      correct: 2,
      explanation: "Context management handles closing.",
      hint: "Review core principles of Reading and Writing Files and CSV."
    },
    {
      id: 4,
      question: "What does CSV commonly stand for?",
      options: [
        {
          key: "A",
          text: "Computer Source Values"
        },
        {
          key: "B",
          text: "Common Script Variables"
        },
        {
          key: "C",
          text: "Code Storage Version"
        },
        {
          key: "D",
          text: "Comma-Separated Values"
        }
      ],
      correct: 3,
      explanation: "It is a tabular text format.",
      hint: "Review core principles of Reading and Writing Files and CSV."
    },
    {
      id: 5,
      question: "Which module helps read CSV files?",
      options: [
        {
          key: "A",
          text: "csv"
        },
        {
          key: "B",
          text: "math"
        },
        {
          key: "C",
          text: "random"
        },
        {
          key: "D",
          text: "time only"
        }
      ],
      correct: 0,
      explanation: "csv.reader and DictReader are available.",
      hint: "Review core principles of Reading and Writing Files and CSV."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange file-read steps",
      prompt: "Open file in read mode → read contents → close file.",
      tokens: ["Open file in read mode", "read contents", "close file."],
      shuffled: ["close file.", "read contents", "Open file in read mode"],
      expected: ["Open file in read mode", "read contents", "close file."],
      hint: "Arrange into correct logical sequence: This order; with can close automatically."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match modes",
      prompt: "r, w, a ↔ read, write/truncate, append.",
      tokens: ["r", "w", "a"],
      shuffled: ["a", "w", "r"],
      expected: ["r", "w", "a"],
      hint: "Arrange into correct logical sequence: Listed order."
    },
    {
      id: 3,
      title: "Puzzle 3 — Arrange CSV reader code",
      prompt: "import csv → with open(\"sales.csv\", newline=\"\") as f: → indented reader = csv.reader(f) → iterate rows.",
      tokens: ["import csv", "with open(\"sales.csv\", newline=\"\") as f:", "reader = csv.reader(f)"],
      shuffled: ["reader = csv.reader(f)", "with open(\"sales.csv\", newline=\"\") as f:", "import csv"],
      expected: ["import csv", "with open(\"sales.csv\", newline=\"\") as f:", "reader = csv.reader(f)"],
      hint: "Arrange into correct logical sequence: This order."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "How do you read a text f",
      meaning: "I open it in read mode and use methods such as read()."
    },
    {
      id: 2,
      snippet: "the with statement for f",
      meaning: "It automatically closes the file when the block ends."
    },
    {
      id: 3,
      snippet: "a CSV file",
      meaning: "A text file that stores tabular data, often separated by commas."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Read a Sales CSV",
      prompt: "Which mode should it use?",
      scenario: "A shop already has sales.csv and wants to read its contents without changing the file.",
      expectedResponse: "\"r\""
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "How do you read a text file in Python?",
      sampleAnswer: "I open it in read mode and use methods such as read()."
    },
    {
      id: 2,
      question: "Why use the with statement for files?",
      sampleAnswer: "It automatically closes the file when the block ends."
    },
    {
      id: 3,
      question: "What is a CSV file?",
      sampleAnswer: "A text file that stores tabular data, often separated by commas."
    },
    {
      id: 4,
      question: "How do you read a CSV file?",
      sampleAnswer: "I can use the built-in csv module with csv.reader or csv.DictReader."
    }
    ]
  },
  '7.8': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 7,
    moduleName: "Functions, Modules and Files",
    topicKey: "7.8",
    id: 48,
    topicTitle: "Exception Handling and Debugging",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What is an exception?",
      options: [
        {
          key: "A",
          text: "An error condition that interrupts normal execution unless handled"
        },
        {
          key: "B",
          text: "A string method"
        },
        {
          key: "C",
          text: "A loop counter"
        },
        {
          key: "D",
          text: "A Python comment"
        }
      ],
      correct: 0,
      explanation: "Exceptions can be caught.",
      hint: "Review core principles of Exception Handling and Debugging."
    },
    {
      id: 2,
      question: "Which block handles a matching exception?",
      options: [
        {
          key: "A",
          text: "def"
        },
        {
          key: "B",
          text: "except"
        },
        {
          key: "C",
          text: "for"
        },
        {
          key: "D",
          text: "import"
        }
      ],
      correct: 1,
      explanation: "except catches errors from try.",
      hint: "Review core principles of Exception Handling and Debugging."
    },
    {
      id: 3,
      question: "Which exception can int(\"abc\") raise?",
      options: [
        {
          key: "A",
          text: "NameError"
        },
        {
          key: "B",
          text: "IndexError"
        },
        {
          key: "C",
          text: "ValueError"
        },
        {
          key: "D",
          text: "KeyError"
        }
      ],
      correct: 2,
      explanation: "The text is not a valid integer.",
      hint: "Review core principles of Exception Handling and Debugging."
    },
    {
      id: 4,
      question: "When does a finally block run?",
      options: [
        {
          key: "A",
          text: "Only on success"
        },
        {
          key: "B",
          text: "Never"
        },
        {
          key: "C",
          text: "Only for ValueError"
        },
        {
          key: "D",
          text: "When leaving the try statement, whether an exception occurred or not"
        }
      ],
      correct: 3,
      explanation: "It is used for cleanup.",
      hint: "Review core principles of Exception Handling and Debugging."
    },
    {
      id: 5,
      question: "Why avoid a bare except: for normal application logic?",
      options: [
        {
          key: "A",
          text: "It can hide unexpected errors"
        },
        {
          key: "B",
          text: "It speeds up code"
        },
        {
          key: "C",
          text: "It prevents all errors"
        },
        {
          key: "D",
          text: "It changes data types"
        }
      ],
      correct: 0,
      explanation: "Catch specific exceptions where possible.",
      hint: "Review core principles of Exception Handling and Debugging."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange exception structure",
      prompt: "try: → indented risky code → except ValueError: → indented handling code.",
      tokens: ["try:", "except ValueError:"],
      shuffled: ["except ValueError:", "try:"],
      expected: ["try:", "except ValueError:"],
      hint: "Arrange into correct logical sequence: This order."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match errors",
      prompt: "ValueError, FileNotFoundError, ZeroDivisionError ↔ invalid conversion, missing file, division by zero.",
      tokens: ["ValueError", "FileNotFoundError", "ZeroDivisionError"],
      shuffled: ["ZeroDivisionError", "FileNotFoundError", "ValueError"],
      expected: ["ValueError", "FileNotFoundError", "ZeroDivisionError"],
      hint: "Arrange into correct logical sequence: Listed order."
    },
    {
      id: 3,
      title: "Puzzle 3 — Choose safe conversion",
      prompt: "For text input that might be invalid, select try/except around int(text).",
      tokens: ["For", "text", "input", "that"],
      shuffled: ["that", "input", "text", "For"],
      expected: ["For", "text", "input", "that"],
      hint: "Arrange into correct logical sequence: Catch ValueError and ask again or show a message."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "exception handling",
      meaning: "Managing runtime errors so a program can respond safely."
    },
    {
      id: 2,
      snippet: "the purpose of try and e",
      meaning: "try contains risky code; except handles specified errors."
    },
    {
      id: 3,
      snippet: "What does finally do",
      meaning: "It runs cleanup code when the try statement is exited."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Handle Invalid Age",
      prompt: "Which exception should a safe integer conversion handle?",
      scenario: "A registration form receives age text \"abc\".",
      expectedResponse: "ValueError"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is exception handling?",
      sampleAnswer: "Managing runtime errors so a program can respond safely."
    },
    {
      id: 2,
      question: "What is the purpose of try and except?",
      sampleAnswer: "try contains risky code; except handles specified errors."
    },
    {
      id: 3,
      question: "What does finally do?",
      sampleAnswer: "It runs cleanup code when the try statement is exited."
    },
    {
      id: 4,
      question: "How do you debug an exception?",
      sampleAnswer: "Read the traceback, reproduce the problem, identify the cause, and test a fix."
    }
    ]
  },
  '7.9': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 7,
    moduleName: "Functions, Modules and Files",
    topicKey: "7.9",
    id: 49,
    topicTitle: "Writing Reusable Code and Practical Projects",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "Why split a project into functions?",
      options: [
        {
          key: "A",
          text: "To reuse and test small pieces"
        },
        {
          key: "B",
          text: "To guarantee zero bugs"
        },
        {
          key: "C",
          text: "To hide all inputs"
        },
        {
          key: "D",
          text: "To remove all comments"
        }
      ],
      correct: 0,
      explanation: "Small functions improve structure.",
      hint: "Review core principles of Writing Reusable Code and Practical Projects."
    },
    {
      id: 2,
      question: "Which function name is clearer?",
      options: [
        {
          key: "A",
          text: "x()"
        },
        {
          key: "B",
          text: "calculate_total()"
        },
        {
          key: "C",
          text: "abc()"
        },
        {
          key: "D",
          text: "doit() without context"
        }
      ],
      correct: 1,
      explanation: "Descriptive names improve readability.",
      hint: "Review core principles of Writing Reusable Code and Practical Projects."
    },
    {
      id: 3,
      question: "What should a reusable function normally receive?",
      options: [
        {
          key: "A",
          text: "Only global variables"
        },
        {
          key: "B",
          text: "No values ever"
        },
        {
          key: "C",
          text: "Necessary inputs as parameters"
        },
        {
          key: "D",
          text: "A random string"
        }
      ],
      correct: 2,
      explanation: "Explicit inputs reduce coupling.",
      hint: "Review core principles of Writing Reusable Code and Practical Projects."
    },
    {
      id: 4,
      question: "What should a calculation function usually return?",
      options: [
        {
          key: "A",
          text: "Only a greeting"
        },
        {
          key: "B",
          text: "A filename always"
        },
        {
          key: "C",
          text: "Nothing ever"
        },
        {
          key: "D",
          text: "The calculated result"
        }
      ],
      correct: 3,
      explanation: "Return values are reusable.",
      hint: "Review core principles of Writing Reusable Code and Practical Projects."
    },
    {
      id: 5,
      question: "What is a useful final project check?",
      options: [
        {
          key: "A",
          text: "Test with typical and edge-case inputs"
        },
        {
          key: "B",
          text: "Assume every input is valid"
        },
        {
          key: "C",
          text: "Remove error handling"
        },
        {
          key: "D",
          text: "Skip verification"
        }
      ],
      correct: 0,
      explanation: "Testing catches mistakes.",
      hint: "Review core principles of Writing Reusable Code and Practical Projects."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange project steps",
      prompt: "Define requirement → Write small functions → Test functions → Combine workflow → Verify output.",
      tokens: ["Define requirement", "Write small functions", "Test functions", "Combine workflow", "Verify output."],
      shuffled: ["Verify output.", "Combine workflow", "Test functions", "Write small functions", "Define requirement"],
      expected: ["Define requirement", "Write small functions", "Test functions", "Combine workflow", "Verify output."],
      hint: "Arrange into correct logical sequence: This order."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match component to role",
      prompt: "input function, calculation function, output function ↔ collect data, process data, present result.",
      tokens: ["input function", "calculation function", "output function"],
      shuffled: ["output function", "calculation function", "input function"],
      expected: ["input function", "calculation function", "output function"],
      hint: "Arrange into correct logical sequence: Listed order."
    },
    {
      id: 3,
      title: "Puzzle 3 — Build reusable calculation",
      prompt: "def total(a,b): return a+b; call with 10,20.",
      tokens: ["def total(a,b): return a+b", "call with 10,20."],
      shuffled: ["call with 10,20.", "def total(a,b): return a+b"],
      expected: ["def total(a,b): return a+b", "call with 10,20."],
      hint: "Arrange into correct logical sequence: total(10,20) returns 30."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "reusable code",
      meaning: "Code designed to work in multiple places without unnecessary duplication."
    },
    {
      id: 2,
      snippet: "Why are small functions ",
      meaning: "They are easier to understand, test, and maintain."
    },
    {
      id: 3,
      snippet: "How would you organize a",
      meaning: "Separate input, calculation, validation, and output into clear functions."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Reuse an Invoice Calculation",
      prompt: "Which design is best for calculating each invoice total?",
      scenario: "An office generates many invoices.",
      expectedResponse: "One reusable calculate_total() function"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is reusable code?",
      sampleAnswer: "Code designed to work in multiple places without unnecessary duplication."
    },
    {
      id: 2,
      question: "Why are small functions useful?",
      sampleAnswer: "They are easier to understand, test, and maintain."
    },
    {
      id: 3,
      question: "How would you organize a simple invoice project?",
      sampleAnswer: "Separate input, calculation, validation, and output into clear functions."
    },
    {
      id: 4,
      question: "How do you test a practical Python project?",
      sampleAnswer: "I try normal, boundary, and invalid inputs and verify the results."
    }
    ]
  },
  '8.1': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 8,
    moduleName: "NumPy for Numerical Analysis",
    topicKey: "8.1",
    id: 50,
    topicTitle: "What Is NumPy?",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What is NumPy mainly used for?",
      options: [
        {
          key: "A",
          text: "Efficient numerical computing in Python"
        },
        {
          key: "B",
          text: "Editing videos only"
        },
        {
          key: "C",
          text: "Browsing the internet"
        },
        {
          key: "D",
          text: "Creating PDF files only"
        }
      ],
      correct: 0,
      explanation: "NumPy provides numerical arrays and operations.",
      hint: "Review core principles of What Is NumPy?."
    },
    {
      id: 2,
      question: "What is NumPy's main array object called?",
      options: [
        {
          key: "A",
          text: "DataFrame"
        },
        {
          key: "B",
          text: "ndarray"
        },
        {
          key: "C",
          text: "Workbook"
        },
        {
          key: "D",
          text: "Document"
        }
      ],
      correct: 1,
      explanation: "ndarray is an N-dimensional array.",
      hint: "Review core principles of What Is NumPy?."
    },
    {
      id: 3,
      question: "What is a common NumPy import alias?",
      options: [
        {
          key: "A",
          text: "pd"
        },
        {
          key: "B",
          text: "plt"
        },
        {
          key: "C",
          text: "np"
        },
        {
          key: "D",
          text: "csv"
        }
      ],
      correct: 2,
      explanation: "import numpy as np.",
      hint: "Review core principles of What Is NumPy?."
    },
    {
      id: 4,
      question: "Why is NumPy useful for numerical data?",
      options: [
        {
          key: "A",
          text: "It always replaces SQL"
        },
        {
          key: "B",
          text: "It guarantees correct data"
        },
        {
          key: "C",
          text: "It cannot handle arrays"
        },
        {
          key: "D",
          text: "It supports efficient array operations"
        }
      ],
      correct: 3,
      explanation: "Many operations run over arrays efficiently.",
      hint: "Review core principles of What Is NumPy?."
    },
    {
      id: 5,
      question: "Which statement is correct?",
      options: [
        {
          key: "A",
          text: "NumPy arrays generally store elements of a common data type"
        },
        {
          key: "B",
          text: "NumPy only stores text documents"
        },
        {
          key: "C",
          text: "NumPy cannot calculate totals"
        },
        {
          key: "D",
          text: "NumPy is a programming language"
        }
      ],
      correct: 0,
      explanation: "ndarray has a dtype.",
      hint: "Review core principles of What Is NumPy?."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange import",
      prompt: "import, numpy, as, np.",
      tokens: ["import", "numpy", "as", "np"],
      shuffled: ["np", "as", "numpy", "import"],
      expected: ["import", "numpy", "as", "np"],
      hint: "Arrange into correct logical sequence: import numpy as np."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match tools",
      prompt: "NumPy, Pandas, Matplotlib ↔ numerical arrays, tabular data analysis, plotting.",
      tokens: ["NumPy", "Pandas", "Matplotlib"],
      shuffled: ["Matplotlib", "Pandas", "NumPy"],
      expected: ["NumPy", "Pandas", "Matplotlib"],
      hint: "Arrange into correct logical sequence: Listed order."
    },
    {
      id: 3,
      title: "Puzzle 3 — Choose the array object",
      prompt: "np.array([1,2,3]) vs \"1,2,3\" vs print(1).",
      tokens: ["np.array([1,2,3])", "\"1,2,3\"", "print(1)"],
      shuffled: ["print(1)", "\"1,2,3\"", "np.array([1,2,3])"],
      expected: ["np.array([1,2,3])", "\"1,2,3\"", "print(1)"],
      hint: "Arrange into correct logical sequence: np.array([1,2,3]) creates an ndarray."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "NumPy",
      meaning: "A Python library for efficient numerical computing with multidimensional ar"
    },
    {
      id: 2,
      snippet: "an ndarray",
      meaning: "NumPy's N-dimensional array object."
    },
    {
      id: 3,
      snippet: "How do you import NumPy",
      meaning: "With import numpy as np."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Choose the Right Tool",
      prompt: "Which Python library is designed for efficient numerical arrays?",
      scenario: "An analyst needs to calculate with thousands of numeric measurements.",
      expectedResponse: "NumPy"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is NumPy?",
      sampleAnswer: "A Python library for efficient numerical computing with multidimensional arrays."
    },
    {
      id: 2,
      question: "What is an ndarray?",
      sampleAnswer: "NumPy's N-dimensional array object."
    },
    {
      id: 3,
      question: "How do you import NumPy?",
      sampleAnswer: "With import numpy as np."
    },
    {
      id: 4,
      question: "Why use NumPy instead of plain Python lists for many numerical tasks?",
      sampleAnswer: "NumPy supports efficient, vectorized operations on numerical arrays."
    }
    ]
  },
  '8.2': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 8,
    moduleName: "NumPy for Numerical Analysis",
    topicKey: "8.2",
    id: 51,
    topicTitle: "Creating NumPy Arrays",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "Which creates a NumPy array?",
      options: [
        {
          key: "A",
          text: "np.array([1,2,3])"
        },
        {
          key: "B",
          text: "np.list(1,2,3)"
        },
        {
          key: "C",
          text: "np.data(1,2,3)"
        },
        {
          key: "D",
          text: "np.row(1,2,3)"
        }
      ],
      correct: 0,
      explanation: "array() converts compatible input to ndarray.",
      hint: "Review core principles of Creating NumPy Arrays."
    },
    {
      id: 2,
      question: "What does np.zeros(3) create?",
      options: [
        {
          key: "A",
          text: "Three ones"
        },
        {
          key: "B",
          text: "Three zeros"
        },
        {
          key: "C",
          text: "An empty string"
        },
        {
          key: "D",
          text: "A DataFrame"
        }
      ],
      correct: 1,
      explanation: "It creates a length-3 array of zeros.",
      hint: "Review core principles of Creating NumPy Arrays."
    },
    {
      id: 3,
      question: "What does np.ones(2) create?",
      options: [
        {
          key: "A",
          text: "[0,0]"
        },
        {
          key: "B",
          text: "[2,2]"
        },
        {
          key: "C",
          text: "[1.,1.]"
        },
        {
          key: "D",
          text: "[1,2]"
        }
      ],
      correct: 2,
      explanation: "Default dtype is float.",
      hint: "Review core principles of Creating NumPy Arrays."
    },
    {
      id: 4,
      question: "What values does np.arange(1,4) produce?",
      options: [
        {
          key: "A",
          text: "0,1,2,3"
        },
        {
          key: "B",
          text: "1,2,3,4"
        },
        {
          key: "C",
          text: "4 only"
        },
        {
          key: "D",
          text: "1,2,3"
        }
      ],
      correct: 3,
      explanation: "Stop is excluded.",
      hint: "Review core principles of Creating NumPy Arrays."
    },
    {
      id: 5,
      question: "What does np.array([2,4,6]).size return?",
      options: [
        {
          key: "A",
          text: "3"
        },
        {
          key: "B",
          text: "6"
        },
        {
          key: "C",
          text: "12"
        },
        {
          key: "D",
          text: "1"
        }
      ],
      correct: 0,
      explanation: "size counts elements.",
      hint: "Review core principles of Creating NumPy Arrays."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange array creation",
      prompt: "np, ., array, (, [1,2,3], ).",
      tokens: ["np", ".", "array", "(", "[1,2,3]", ")"],
      shuffled: [")", "[1,2,3]", "(", "array", ".", "np"],
      expected: ["np", ".", "array", "(", "[1,2,3]", ")"],
      hint: "Arrange into correct logical sequence: np.array([1,2,3])."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match constructors",
      prompt: "zeros(3), ones(2), arange(1,4) ↔ 0,0,0; 1,1; 1,2,3.",
      tokens: ["zeros(3)", "ones(2)", "arange(1,4)"],
      shuffled: ["arange(1,4)", "ones(2)", "zeros(3)"],
      expected: ["zeros(3)", "ones(2)", "arange(1,4)"],
      hint: "Arrange into correct logical sequence: Listed order."
    },
    {
      id: 3,
      title: "Puzzle 3 — Choose shape-ready data",
      prompt: "Need 2 rows of 2 numbers.",
      tokens: ["Need", "rows", "of", "numbers"],
      shuffled: ["numbers", "of", "rows", "Need"],
      expected: ["Need", "rows", "of", "numbers"],
      hint: "Arrange into correct logical sequence: np.array([[1,2],[3,4]])."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "How do you create a NumP",
      meaning: "I use np.array() with a list or other array-like input."
    },
    {
      id: 2,
      snippet: "What does np.zeros() do",
      meaning: "It creates an array filled with zeros."
    },
    {
      id: 3,
      snippet: "What does np.ones() do",
      meaning: "It creates an array filled with ones."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Create a Sales Array",
      prompt: "Which expression creates a NumPy array?",
      scenario: "A shop has three daily sales counts: 5, 8, 6.",
      expectedResponse: "np.array([5,8,6])"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "How do you create a NumPy array?",
      sampleAnswer: "I use np.array() with a list or other array-like input."
    },
    {
      id: 2,
      question: "What does np.zeros() do?",
      sampleAnswer: "It creates an array filled with zeros."
    },
    {
      id: 3,
      question: "What does np.ones() do?",
      sampleAnswer: "It creates an array filled with ones."
    },
    {
      id: 4,
      question: "What does np.arange() do?",
      sampleAnswer: "It creates evenly spaced values in a specified range."
    }
    ]
  },
  '8.3': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 8,
    moduleName: "NumPy for Numerical Analysis",
    topicKey: "8.3",
    id: 52,
    topicTitle: "Array Shapes and Dimensions",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What does an array's shape describe?",
      options: [
        {
          key: "A",
          text: "Its size along each axis"
        },
        {
          key: "B",
          text: "Its color"
        },
        {
          key: "C",
          text: "Its filename"
        },
        {
          key: "D",
          text: "Its sorting order"
        }
      ],
      correct: 0,
      explanation: "shape is a tuple of axis lengths.",
      hint: "Review core principles of Array Shapes and Dimensions."
    },
    {
      id: 2,
      question: "What is the shape of np.array([1,2,3])?",
      options: [
        {
          key: "A",
          text: "(3,1)"
        },
        {
          key: "B",
          text: "(3,)"
        },
        {
          key: "C",
          text: "(1,3,1)"
        },
        {
          key: "D",
          text: "(2,)"
        }
      ],
      correct: 1,
      explanation: "It is one-dimensional with three elements.",
      hint: "Review core principles of Array Shapes and Dimensions."
    },
    {
      id: 3,
      question: "What is the shape of np.array([[1,2],[3,4]])?",
      options: [
        {
          key: "A",
          text: "(4,)"
        },
        {
          key: "B",
          text: "(1,4)"
        },
        {
          key: "C",
          text: "(2,2)"
        },
        {
          key: "D",
          text: "(2,)"
        }
      ],
      correct: 2,
      explanation: "Two rows and two columns.",
      hint: "Review core principles of Array Shapes and Dimensions."
    },
    {
      id: 4,
      question: "What is np.array([[1,2],[3,4]]).ndim?",
      options: [
        {
          key: "A",
          text: "1"
        },
        {
          key: "B",
          text: "4"
        },
        {
          key: "C",
          text: "0"
        },
        {
          key: "D",
          text: "2"
        }
      ],
      correct: 3,
      explanation: "There are two axes.",
      hint: "Review core principles of Array Shapes and Dimensions."
    },
    {
      id: 5,
      question: "What does .size count?",
      options: [
        {
          key: "A",
          text: "Total number of elements"
        },
        {
          key: "B",
          text: "Number of dimensions"
        },
        {
          key: "C",
          text: "Only columns"
        },
        {
          key: "D",
          text: "Memory size in bytes"
        }
      ],
      correct: 0,
      explanation: "size is element count.",
      hint: "Review core principles of Array Shapes and Dimensions."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match array to shape",
      prompt: "[1,2,3] → (3,); [[1,2],[3,4]] → (2,2); [[1,2,3]] → (1,3).",
      tokens: ["[1,2,3]", "(3,)", "[[1,2],[3,4]]", "(2,2)", "[[1,2,3]]", "(1,3)"],
      shuffled: ["(1,3)", "[[1,2,3]]", "(2,2)", "[[1,2],[3,4]]", "(3,)", "[1,2,3]"],
      expected: ["[1,2,3]", "(3,)", "[[1,2],[3,4]]", "(2,2)", "[[1,2,3]]", "(1,3)"],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 2,
      title: "Puzzle 2 — Count dimensions",
      prompt: "Scalar np.array(5), vector [1,2], matrix [[1,2],[3,4]].",
      tokens: ["np.array(5)", "[1,2]", "[[1,2],[3,4]]"],
      shuffled: ["[[1,2],[3,4]]", "[1,2]", "np.array(5)"],
      expected: ["np.array(5)", "[1,2]", "[[1,2],[3,4]]"],
      hint: "Arrange into correct logical sequence: ndim 0,1,2."
    },
    {
      id: 3,
      title: "Puzzle 3 — Build shape",
      prompt: "3 rows × 2 columns.",
      tokens: ["rows", "columns"],
      shuffled: ["columns", "rows"],
      expected: ["rows", "columns"],
      hint: "Arrange into correct logical sequence: (3,2) and total elements 6."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "array shape",
      meaning: "A tuple giving the length of an array along each axis."
    },
    {
      id: 2,
      snippet: "What does ndim mean",
      meaning: "The number of dimensions or axes."
    },
    {
      id: 3,
      snippet: "the shape of a 2-by-3 ma",
      meaning: "(2, 3)."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Read a Marks Table",
      prompt: "What is its shape?",
      scenario: "A NumPy table has 2 students (rows) and 3 subjects (columns).",
      expectedResponse: "(2,3)"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is array shape?",
      sampleAnswer: "A tuple giving the length of an array along each axis."
    },
    {
      id: 2,
      question: "What does ndim mean?",
      sampleAnswer: "The number of dimensions or axes."
    },
    {
      id: 3,
      question: "What is the shape of a 2-by-3 matrix?",
      sampleAnswer: "(2, 3)."
    },
    {
      id: 4,
      question: "How is size different from shape?",
      sampleAnswer: "size counts all elements; shape describes dimensions."
    }
    ]
  },
  '8.4': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 8,
    moduleName: "NumPy for Numerical Analysis",
    topicKey: "8.4",
    id: 53,
    topicTitle: "Indexing and Slicing Arrays",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What does np.array([5,10,15])[0] return?",
      options: [
        {
          key: "A",
          text: "5"
        },
        {
          key: "B",
          text: "10"
        },
        {
          key: "C",
          text: "15"
        },
        {
          key: "D",
          text: "0"
        }
      ],
      correct: 0,
      explanation: "First index is zero.",
      hint: "Review core principles of Indexing and Slicing Arrays."
    },
    {
      id: 2,
      question: "What does arr[-1] select in a one-dimensional array?",
      options: [
        {
          key: "A",
          text: "First element"
        },
        {
          key: "B",
          text: "Last element"
        },
        {
          key: "C",
          text: "Every element"
        },
        {
          key: "D",
          text: "No element"
        }
      ],
      correct: 1,
      explanation: "-1 indexes from the end.",
      hint: "Review core principles of Indexing and Slicing Arrays."
    },
    {
      id: 3,
      question: "What does np.array([1,2,3,4])[1:3] select?",
      options: [
        {
          key: "A",
          text: "1,2"
        },
        {
          key: "B",
          text: "3,4"
        },
        {
          key: "C",
          text: "2,3"
        },
        {
          key: "D",
          text: "2,3,4"
        }
      ],
      correct: 2,
      explanation: "End index excluded.",
      hint: "Review core principles of Indexing and Slicing Arrays."
    },
    {
      id: 4,
      question: "How do you select row 0, column 1 from a 2D NumPy array?",
      options: [
        {
          key: "A",
          text: "arr[1,0]"
        },
        {
          key: "B",
          text: "arr[0]"
        },
        {
          key: "C",
          text: "arr[1]"
        },
        {
          key: "D",
          text: "arr[0,1]"
        }
      ],
      correct: 3,
      explanation: "First axis is row.",
      hint: "Review core principles of Indexing and Slicing Arrays."
    },
    {
      id: 5,
      question: "What does arr[:, 0] select from a 2D array?",
      options: [
        {
          key: "A",
          text: "First column, all rows"
        },
        {
          key: "B",
          text: "First row"
        },
        {
          key: "C",
          text: "Last row"
        },
        {
          key: "D",
          text: "All columns of one row"
        }
      ],
      correct: 0,
      explanation: "Colon selects all rows.",
      hint: "Review core principles of Indexing and Slicing Arrays."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Tap indexed cell",
      prompt: "[[10,20],[30,40]]; choose arr[1,0].",
      tokens: ["[[10,20],[30,40]]", "arr[1,0]"],
      shuffled: ["arr[1,0]", "[[10,20],[30,40]]"],
      expected: ["[[10,20],[30,40]]", "arr[1,0]"],
      hint: "Arrange into correct logical sequence: 30."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match slices",
      prompt: "[5,6,7,8][:2] → 5,6; [5,6,7,8][2:] → 7,8; [5,6,7,8][-1] → 8.",
      tokens: ["[5,6,7,8][:2]", "[5,6,7,8][2:]", "[5,6,7,8][-1]"],
      shuffled: ["[5,6,7,8][-1]", "[5,6,7,8][2:]", "[5,6,7,8][:2]"],
      expected: ["[5,6,7,8][:2]", "[5,6,7,8][2:]", "[5,6,7,8][-1]"],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 3,
      title: "Puzzle 3 — Build column selection",
      prompt: "Tokens arr, [, :, ,, 1, ].",
      tokens: ["arr", "[", ":", ",", "1", "]"],
      shuffled: ["]", "1", ",", ":", "[", "arr"],
      expected: ["arr", "[", ":", ",", "1", "]"],
      hint: "Arrange into correct logical sequence: arr[:,1] selects second column."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "indexing in NumPy",
      meaning: "Accessing an element by its position along each axis."
    },
    {
      id: 2,
      snippet: "slicing",
      meaning: "Selecting a range of elements from an array."
    },
    {
      id: 3,
      snippet: "How do you access a 2D a",
      meaning: "With row and column indices, such as arr[1, 0]."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Find a Table Value",
      prompt: "What is day 2, product 1?",
      scenario: "A shop records [[10,20],[30,40]] (two days × two products).",
      expectedResponse: "30"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is indexing in NumPy?",
      sampleAnswer: "Accessing an element by its position along each axis."
    },
    {
      id: 2,
      question: "What is slicing?",
      sampleAnswer: "Selecting a range of elements from an array."
    },
    {
      id: 3,
      question: "How do you access a 2D array element?",
      sampleAnswer: "With row and column indices, such as arr[1, 0]."
    },
    {
      id: 4,
      question: "What does arr[:, 0] mean?",
      sampleAnswer: "All rows from the first column."
    }
    ]
  },
  '8.5': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 8,
    moduleName: "NumPy for Numerical Analysis",
    topicKey: "8.5",
    id: 54,
    topicTitle: "Vectorized Operations and Broadcasting",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What is vectorization?",
      options: [
        {
          key: "A",
          text: "Applying operations to whole arrays without writing an explicit Python loop"
        },
        {
          key: "B",
          text: "Drawing a vector picture"
        },
        {
          key: "C",
          text: "Saving a PDF"
        },
        {
          key: "D",
          text: "Sorting strings only"
        }
      ],
      correct: 0,
      explanation: "NumPy performs elementwise operations.",
      hint: "Review core principles of Vectorized Operations and Broadcasting."
    },
    {
      id: 2,
      question: "What is np.array([1,2]) + 10?",
      options: [
        {
          key: "A",
          text: "[1,2,10]"
        },
        {
          key: "B",
          text: "[11,12]"
        },
        {
          key: "C",
          text: "[10,20]"
        },
        {
          key: "D",
          text: "Error"
        }
      ],
      correct: 1,
      explanation: "Scalar is added to each element.",
      hint: "Review core principles of Vectorized Operations and Broadcasting."
    },
    {
      id: 3,
      question: "What is [1,2] * 2 for a NumPy array?",
      options: [
        {
          key: "A",
          text: "[1,2,1,2]"
        },
        {
          key: "B",
          text: "[3,4]"
        },
        {
          key: "C",
          text: "[2,4]"
        },
        {
          key: "D",
          text: "[1,4]"
        }
      ],
      correct: 2,
      explanation: "ndarray multiplication is elementwise.",
      hint: "Review core principles of Vectorized Operations and Broadcasting."
    },
    {
      id: 4,
      question: "What is broadcasting?",
      options: [
        {
          key: "A",
          text: "Sending data to a television"
        },
        {
          key: "B",
          text: "Combining text files"
        },
        {
          key: "C",
          text: "Creating a loop"
        },
        {
          key: "D",
          text: "Applying compatible operations across different array shapes"
        }
      ],
      correct: 3,
      explanation: "Dimensions are aligned under broadcasting rules.",
      hint: "Review core principles of Vectorized Operations and Broadcasting."
    },
    {
      id: 5,
      question: "Can arrays with shapes (2,3) and (3,) be added?",
      options: [
        {
          key: "A",
          text: "Yes, by broadcasting"
        },
        {
          key: "B",
          text: "Never"
        },
        {
          key: "C",
          text: "Only after sorting"
        },
        {
          key: "D",
          text: "Only as strings"
        }
      ],
      correct: 0,
      explanation: "Trailing dimensions match.",
      hint: "Review core principles of Vectorized Operations and Broadcasting."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match operation to output",
      prompt: "[1,2]+5 → [6,7]; [1,2]*3 → [3,6]; [1,2]+[3,4] → [4,6].",
      tokens: ["[1,2]+5", "[6,7]", "[1,2]*3", "[3,6]", "[1,2]+[3,4]", "[4,6]"],
      shuffled: ["[4,6]", "[1,2]+[3,4]", "[3,6]", "[1,2]*3", "[6,7]", "[1,2]+5"],
      expected: ["[1,2]+5", "[6,7]", "[1,2]*3", "[3,6]", "[1,2]+[3,4]", "[4,6]"],
      hint: "Arrange into correct logical sequence: All are NumPy array operations."
    },
    {
      id: 2,
      title: "Puzzle 2 — Apply discount visually",
      prompt: "Prices [100,200] minus 10 each.",
      tokens: ["Prices", "100,200", "minus", "10"],
      shuffled: ["10", "minus", "100,200", "Prices"],
      expected: ["Prices", "100,200", "minus", "10"],
      hint: "Arrange into correct logical sequence: [90,190]."
    },
    {
      id: 3,
      title: "Puzzle 3 — Match compatible shapes",
      prompt: "(2,3) + (3,) → compatible; (2,3) + (2,) → incompatible.",
      tokens: ["(2,3)", "(3,)", "(2,3)", "(2,)"],
      shuffled: ["(2,)", "(2,3)", "(3,)", "(2,3)"],
      expected: ["(2,3)", "(3,)", "(2,3)", "(2,)"],
      hint: "Arrange into correct logical sequence: Trailing dimension 3 matches 3, not 2."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "vectorization",
      meaning: "Applying operations to arrays directly instead of writing explicit Python l"
    },
    {
      id: 2,
      snippet: "broadcasting",
      meaning: "NumPy's way of applying operations to arrays with compatible shapes."
    },
    {
      id: 3,
      snippet: "Give a vectorized operat",
      meaning: "prices * 2 doubles every element in a NumPy array."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Increase Product Prices",
      prompt: "Which expression works?",
      scenario: "A store has NumPy prices [10,20,30] and wants to add ₹5 to each.",
      expectedResponse: "prices + 5"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is vectorization?",
      sampleAnswer: "Applying operations to arrays directly instead of writing explicit Python loops for each element."
    },
    {
      id: 2,
      question: "What is broadcasting?",
      sampleAnswer: "NumPy's way of applying operations to arrays with compatible shapes."
    },
    {
      id: 3,
      question: "Give a vectorized operation example.",
      sampleAnswer: "prices * 2 doubles every element in a NumPy array."
    },
    {
      id: 4,
      question: "Does adding a scalar change the original array automatically?",
      sampleAnswer: "No, an expression like arr + 5 creates a result unless it is assigned or performed in place."
    }
    ]
  },
  '8.6': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 8,
    moduleName: "NumPy for Numerical Analysis",
    topicKey: "8.6",
    id: 55,
    topicTitle: "Aggregation and Summary Statistics",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What does np.sum([2,3,5]) return?",
      options: [
        {
          key: "A",
          text: "10"
        },
        {
          key: "B",
          text: "5"
        },
        {
          key: "C",
          text: "3"
        },
        {
          key: "D",
          text: "2"
        }
      ],
      correct: 0,
      explanation: "It adds all elements.",
      hint: "Review core principles of Aggregation and Summary Statistics."
    },
    {
      id: 2,
      question: "What does np.mean([2,4,6]) return?",
      options: [
        {
          key: "A",
          text: "6"
        },
        {
          key: "B",
          text: "4.0"
        },
        {
          key: "C",
          text: "12"
        },
        {
          key: "D",
          text: "2"
        }
      ],
      correct: 1,
      explanation: "Mean is total divided by count.",
      hint: "Review core principles of Aggregation and Summary Statistics."
    },
    {
      id: 3,
      question: "What does np.max([3,8,5]) return?",
      options: [
        {
          key: "A",
          text: "3"
        },
        {
          key: "B",
          text: "5"
        },
        {
          key: "C",
          text: "8"
        },
        {
          key: "D",
          text: "16"
        }
      ],
      correct: 2,
      explanation: "Maximum is eight.",
      hint: "Review core principles of Aggregation and Summary Statistics."
    },
    {
      id: 4,
      question: "What does np.min([3,8,5]) return?",
      options: [
        {
          key: "A",
          text: "8"
        },
        {
          key: "B",
          text: "5"
        },
        {
          key: "C",
          text: "16"
        },
        {
          key: "D",
          text: "3"
        }
      ],
      correct: 3,
      explanation: "Minimum is three.",
      hint: "Review core principles of Aggregation and Summary Statistics."
    },
    {
      id: 5,
      question: "What does np.sum(arr, axis=0) do for a 2D array?",
      options: [
        {
          key: "A",
          text: "Sums down rows to produce column totals"
        },
        {
          key: "B",
          text: "Sums each row"
        },
        {
          key: "C",
          text: "Deletes axis 0"
        },
        {
          key: "D",
          text: "Sorts columns"
        }
      ],
      correct: 0,
      explanation: "Axis 0 collapses the row dimension.",
      hint: "Review core principles of Aggregation and Summary Statistics."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match statistics",
      prompt: "[2,4,6] → sum 12, mean 4, max 6.",
      tokens: ["[2,4,6]", "sum 12, mean 4, max 6."],
      shuffled: ["sum 12, mean 4, max 6.", "[2,4,6]"],
      expected: ["[2,4,6]", "sum 12, mean 4, max 6."],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 2,
      title: "Puzzle 2 — Compute column totals",
      prompt: "[[1,2],[3,4]], sum axis=0.",
      tokens: ["1,2],[3,4]]`", "sum", "axis=0"],
      shuffled: ["axis=0", "sum", "1,2],[3,4]]`"],
      expected: ["1,2],[3,4]]`", "sum", "axis=0"],
      hint: "Arrange into correct logical sequence: [4,6]."
    },
    {
      id: 3,
      title: "Puzzle 3 — Choose statistic",
      prompt: "Need highest daily sales from [10,20,15].",
      tokens: ["Need", "highest", "daily", "sales"],
      shuffled: ["sales", "daily", "highest", "Need"],
      expected: ["Need", "highest", "daily", "sales"],
      hint: "Arrange into correct logical sequence: np.max() → 20."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "aggregation in NumPy",
      meaning: "Combining array values into summary results."
    },
    {
      id: 2,
      snippet: "What does np.mean() calc",
      meaning: "The arithmetic average of numeric values."
    },
    {
      id: 3,
      snippet: "the difference between s",
      meaning: "sum returns the total; mean returns the average."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Average Daily Sales",
      prompt: "What is the average?",
      scenario: "A shop sold 10, 20, 30 items across three days.",
      expectedResponse: "20"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is aggregation in NumPy?",
      sampleAnswer: "Combining array values into summary results."
    },
    {
      id: 2,
      question: "What does np.mean() calculate?",
      sampleAnswer: "The arithmetic average of numeric values."
    },
    {
      id: 3,
      question: "What is the difference between sum() and mean()?",
      sampleAnswer: "sum returns the total; mean returns the average."
    },
    {
      id: 4,
      question: "What does axis mean in a 2D aggregation?",
      sampleAnswer: "It identifies which dimension is reduced during the calculation."
    }
    ]
  },
  '8.7': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 8,
    moduleName: "NumPy for Numerical Analysis",
    topicKey: "8.7",
    id: 56,
    topicTitle: "Boolean Masks and Filtering",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What is a Boolean mask?",
      options: [
        {
          key: "A",
          text: "An array of True/False values used to select elements"
        },
        {
          key: "B",
          text: "A chart title"
        },
        {
          key: "C",
          text: "A file type"
        },
        {
          key: "D",
          text: "A comment"
        }
      ],
      correct: 0,
      explanation: "It supports conditional filtering.",
      hint: "Review core principles of Boolean Masks and Filtering."
    },
    {
      id: 2,
      question: "What is np.array([2,5,8]) > 4?",
      options: [
        {
          key: "A",
          text: "[2,5,8]"
        },
        {
          key: "B",
          text: "[False, True, True]"
        },
        {
          key: "C",
          text: "[True,False,False]"
        },
        {
          key: "D",
          text: "4"
        }
      ],
      correct: 1,
      explanation: "Compare each element to 4.",
      hint: "Review core principles of Boolean Masks and Filtering."
    },
    {
      id: 3,
      question: "What does arr[arr > 5] do?",
      options: [
        {
          key: "A",
          text: "Adds 5"
        },
        {
          key: "B",
          text: "Sorts the array"
        },
        {
          key: "C",
          text: "Selects elements greater than 5"
        },
        {
          key: "D",
          text: "Deletes the array"
        }
      ],
      correct: 2,
      explanation: "Mask-based selection.",
      hint: "Review core principles of Boolean Masks and Filtering."
    },
    {
      id: 4,
      question: "Which operator combines two NumPy Boolean masks elementwise with AND?",
      options: [
        {
          key: "A",
          text: "and"
        },
        {
          key: "B",
          text: "+"
        },
        {
          key: "C",
          text: "not"
        },
        {
          key: "D",
          text: "&"
        }
      ],
      correct: 3,
      explanation: "Use parentheses around comparisons.",
      hint: "Review core principles of Boolean Masks and Filtering."
    },
    {
      id: 5,
      question: "For arr=np.array([3,6,9]), what is arr[arr >= 6]?",
      options: [
        {
          key: "A",
          text: "[6,9]"
        },
        {
          key: "B",
          text: "[3,6]"
        },
        {
          key: "C",
          text: "[9]"
        },
        {
          key: "D",
          text: "[3]"
        }
      ],
      correct: 0,
      explanation: "Keep values at least 6.",
      hint: "Review core principles of Boolean Masks and Filtering."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Select passing marks",
      prompt: "[30,50,80] with condition >=50.",
      tokens: ["[30,50,80]", ">=50"],
      shuffled: [">=50", "[30,50,80]"],
      expected: ["[30,50,80]", ">=50"],
      hint: "Arrange into correct logical sequence: 50 and 80."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match masks",
      prompt: ">5, <5, ==5 applied to [3,5,7] ↔ [7], [3], [5].",
      tokens: [">5", "<5", "==5", "[3,5,7]"],
      shuffled: ["[3,5,7]", "==5", "<5", ">5"],
      expected: [">5", "<5", "==5", "[3,5,7]"],
      hint: "Arrange into correct logical sequence: Listed order."
    },
    {
      id: 3,
      title: "Puzzle 3 — Build filter",
      prompt: "Tokens arr, [, arr, >, 10, ].",
      tokens: ["arr", "[", "arr", ">", "10", "]"],
      shuffled: ["]", "10", ">", "arr", "[", "arr"],
      expected: ["arr", "[", "arr", ">", "10", "]"],
      hint: "Arrange into correct logical sequence: arr[arr > 10]."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "a Boolean mask",
      meaning: "A True/False array used to filter data."
    },
    {
      id: 2,
      snippet: "How do you filter a NumP",
      meaning: "I create a condition and index the array with the resulting mask."
    },
    {
      id: 3,
      snippet: "What does arr[arr > 10] ",
      meaning: "Elements whose values are greater than ten."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Filter High Sales",
      prompt: "Which condition selects values greater than 10?",
      scenario: "Daily sales counts are [5,12,8].",
      expectedResponse: "sales > 10"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a Boolean mask?",
      sampleAnswer: "A True/False array used to filter data."
    },
    {
      id: 2,
      question: "How do you filter a NumPy array?",
      sampleAnswer: "I create a condition and index the array with the resulting mask."
    },
    {
      id: 3,
      question: "What does arr[arr > 10] return?",
      sampleAnswer: "Elements whose values are greater than ten."
    },
    {
      id: 4,
      question: "How do you combine NumPy conditions?",
      sampleAnswer: "Use elementwise operators such as & and |, with each comparison in parentheses."
    }
    ]
  },
  '8.8': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 8,
    moduleName: "NumPy for Numerical Analysis",
    topicKey: "8.8",
    id: 57,
    topicTitle: "Reshaping, Combining Arrays & Sales Analytics Dashboard",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What does reshape() do?",
      options: [
        {
          key: "A",
          text: "Changes an array's shape without changing its element count"
        },
        {
          key: "B",
          text: "Deletes values"
        },
        {
          key: "C",
          text: "Sorts strings"
        },
        {
          key: "D",
          text: "Converts to CSV automatically"
        }
      ],
      correct: 0,
      explanation: "New shape must be compatible.",
      hint: "Review core principles of Reshaping, Combining Arrays & Sales Analytics Dashboard."
    },
    {
      id: 2,
      question: "What is the shape of np.arange(6).reshape(2,3)?",
      options: [
        {
          key: "A",
          text: "(6,)"
        },
        {
          key: "B",
          text: "(2,3)"
        },
        {
          key: "C",
          text: "(3,3)"
        },
        {
          key: "D",
          text: "(2,2)"
        }
      ],
      correct: 1,
      explanation: "Six values fit 2×3.",
      hint: "Review core principles of Reshaping, Combining Arrays & Sales Analytics Dashboard."
    },
    {
      id: 3,
      question: "What does np.concatenate([a,b]) do by default for 1D arrays?",
      options: [
        {
          key: "A",
          text: "Multiplies arrays"
        },
        {
          key: "B",
          text: "Sorts arrays"
        },
        {
          key: "C",
          text: "Joins their elements into one array"
        },
        {
          key: "D",
          text: "Computes mean"
        }
      ],
      correct: 2,
      explanation: "Concatenates along axis 0.",
      hint: "Review core principles of Reshaping, Combining Arrays & Sales Analytics Dashboard."
    },
    {
      id: 4,
      question: "Can a 6-element array be reshaped into (2,4)?",
      options: [
        {
          key: "A",
          text: "Yes always"
        },
        {
          key: "B",
          text: "Only if sorted"
        },
        {
          key: "C",
          text: "Only after adding labels"
        },
        {
          key: "D",
          text: "No, because 2×4 needs 8 elements"
        }
      ],
      correct: 3,
      explanation: "Element counts must match.",
      hint: "Review core principles of Reshaping, Combining Arrays & Sales Analytics Dashboard."
    },
    {
      id: 5,
      question: "Which statistic helps a sales dashboard show total units?",
      options: [
        {
          key: "A",
          text: "np.sum()"
        },
        {
          key: "B",
          text: "np.sqrt()"
        },
        {
          key: "C",
          text: "np.flip() only"
        },
        {
          key: "D",
          text: "np.zeros()"
        }
      ],
      correct: 0,
      explanation: "Sum gives total units.",
      hint: "Review core principles of Reshaping, Combining Arrays & Sales Analytics Dashboard."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange reshape",
      prompt: "np.arange(6) → .reshape(2,3) → 2 rows of 3.",
      tokens: ["np.arange(6)", ".reshape(2,3)"],
      shuffled: [".reshape(2,3)", "np.arange(6)"],
      expected: ["np.arange(6)", ".reshape(2,3)"],
      hint: "Arrange into correct logical sequence: [[0,1,2],[3,4,5]]."
    },
    {
      id: 2,
      title: "Puzzle 2 — Combine sales",
      prompt: "[10,20] and [30,40] using concatenate.",
      tokens: ["[10,20]", "[30,40]"],
      shuffled: ["[30,40]", "[10,20]"],
      expected: ["[10,20]", "[30,40]"],
      hint: "Arrange into correct logical sequence: [10,20,30,40]."
    },
    {
      id: 3,
      title: "Puzzle 3 — Match dashboard metrics",
      prompt: "total units, average units, peak units ↔ sum, mean, max.",
      tokens: ["total units", "average units", "peak units"],
      shuffled: ["peak units", "average units", "total units"],
      expected: ["total units", "average units", "peak units"],
      hint: "Arrange into correct logical sequence: Listed order."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "What does reshape() do",
      meaning: "It changes the dimensions of an array while keeping the same number of elem"
    },
    {
      id: 2,
      snippet: "array concatenation",
      meaning: "Joining arrays together along an axis."
    },
    {
      id: 3,
      snippet: "How can NumPy support a ",
      meaning: "By calculating totals, averages, maximums, and filtered summaries."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Arrange Weekly Sales",
      prompt: "Which shape should it choose?",
      scenario: "A shop has six daily counts and wants to display them in a 2-row × 3-column table.",
      expectedResponse: "(2,3)"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does reshape() do?",
      sampleAnswer: "It changes the dimensions of an array while keeping the same number of elements."
    },
    {
      id: 2,
      question: "What is array concatenation?",
      sampleAnswer: "Joining arrays together along an axis."
    },
    {
      id: 3,
      question: "How can NumPy support a sales dashboard?",
      sampleAnswer: "By calculating totals, averages, maximums, and filtered summaries."
    },
    {
      id: 4,
      question: "What must be true for a reshape to work?",
      sampleAnswer: "The requested shape must be compatible with the number of elements."
    }
    ]
  },
  '9.1': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 9,
    moduleName: "Pandas for Data Analysis",
    topicKey: "9.1",
    id: 58,
    topicTitle: "What Is Pandas?",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What is Pandas?",
      options: [
        {
          key: "A",
          text: "A Python library for working with tabular and labeled data"
        },
        {
          key: "B",
          text: "A browser"
        },
        {
          key: "C",
          text: "An operating system"
        },
        {
          key: "D",
          text: "A programming language"
        }
      ],
      correct: 0,
      explanation: "Pandas supports data analysis.",
      hint: "Review core principles of What Is Pandas?."
    },
    {
      id: 2,
      question: "What is the common Pandas alias?",
      options: [
        {
          key: "A",
          text: "np"
        },
        {
          key: "B",
          text: "pd"
        },
        {
          key: "C",
          text: "plt"
        },
        {
          key: "D",
          text: "csv"
        }
      ],
      correct: 1,
      explanation: "import pandas as pd.",
      hint: "Review core principles of What Is Pandas?."
    },
    {
      id: 3,
      question: "Which object represents a two-dimensional labeled table?",
      options: [
        {
          key: "A",
          text: "String"
        },
        {
          key: "B",
          text: "Integer"
        },
        {
          key: "C",
          text: "DataFrame"
        },
        {
          key: "D",
          text: "Boolean"
        }
      ],
      correct: 2,
      explanation: "DataFrame has rows and columns.",
      hint: "Review core principles of What Is Pandas?."
    },
    {
      id: 4,
      question: "Which task is Pandas commonly used for?",
      options: [
        {
          key: "A",
          text: "Repairing hardware"
        },
        {
          key: "B",
          text: "Editing audio only"
        },
        {
          key: "C",
          text: "Designing posters only"
        },
        {
          key: "D",
          text: "Cleaning and analyzing datasets"
        }
      ],
      correct: 3,
      explanation: "Pandas has rich data operations.",
      hint: "Review core principles of What Is Pandas?."
    },
    {
      id: 5,
      question: "Which statement is correct?",
      options: [
        {
          key: "A",
          text: "Pandas can read CSV files"
        },
        {
          key: "B",
          text: "Pandas cannot handle missing values"
        },
        {
          key: "C",
          text: "Pandas only stores images"
        },
        {
          key: "D",
          text: "Pandas replaces Python syntax"
        }
      ],
      correct: 0,
      explanation: "read_csv loads CSV data.",
      hint: "Review core principles of What Is Pandas?."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange import tokens",
      prompt: "import, pandas, as, pd.",
      tokens: ["import", "pandas", "as", "pd"],
      shuffled: ["pd", "as", "pandas", "import"],
      expected: ["import", "pandas", "as", "pd"],
      hint: "Arrange into correct logical sequence: import pandas as pd."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match tools",
      prompt: "Pandas, NumPy, Matplotlib ↔ tables, numerical arrays, charts.",
      tokens: ["Pandas", "NumPy", "Matplotlib"],
      shuffled: ["Matplotlib", "NumPy", "Pandas"],
      expected: ["Pandas", "NumPy", "Matplotlib"],
      hint: "Arrange into correct logical sequence: Listed order."
    },
    {
      id: 3,
      title: "Puzzle 3 — Select Pandas use cases",
      prompt: "Clean missing sales values; summarize orders; paint office wall.",
      tokens: ["Clean missing sales values", "summarize orders", "paint office wall."],
      shuffled: ["paint office wall.", "summarize orders", "Clean missing sales values"],
      expected: ["Clean missing sales values", "summarize orders", "paint office wall."],
      hint: "Arrange into correct logical sequence: First two."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Pandas",
      meaning: "A Python library for data manipulation and analysis."
    },
    {
      id: 2,
      snippet: "a DataFrame",
      meaning: "A two-dimensional labeled table with rows and columns."
    },
    {
      id: 3,
      snippet: "Why is Pandas useful for",
      meaning: "It helps load, clean, filter, summarize, and combine data."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Choose a Data Tool",
      prompt: "Which Python library is well suited to inspect and clean the table?",
      scenario: "A junior analyst has a CSV table of customer orders.",
      expectedResponse: "Pandas"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is Pandas?",
      sampleAnswer: "A Python library for data manipulation and analysis."
    },
    {
      id: 2,
      question: "What is a DataFrame?",
      sampleAnswer: "A two-dimensional labeled table with rows and columns."
    },
    {
      id: 3,
      question: "Why is Pandas useful for Data Analysts?",
      sampleAnswer: "It helps load, clean, filter, summarize, and combine data."
    },
    {
      id: 4,
      question: "How do you import Pandas?",
      sampleAnswer: "With import pandas as pd."
    }
    ]
  },
  '9.2': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 9,
    moduleName: "Pandas for Data Analysis",
    topicKey: "9.2",
    id: 59,
    topicTitle: "Series and DataFrames",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What is a Pandas Series?",
      options: [
        {
          key: "A",
          text: "A one-dimensional labeled array"
        },
        {
          key: "B",
          text: "A chart"
        },
        {
          key: "C",
          text: "A CSV filename"
        },
        {
          key: "D",
          text: "A loop"
        }
      ],
      correct: 0,
      explanation: "Series has values and an index.",
      hint: "Review core principles of Series and DataFrames."
    },
    {
      id: 2,
      question: "What is a DataFrame?",
      options: [
        {
          key: "A",
          text: "A single integer"
        },
        {
          key: "B",
          text: "A two-dimensional labeled table"
        },
        {
          key: "C",
          text: "A string method"
        },
        {
          key: "D",
          text: "A file handle"
        }
      ],
      correct: 1,
      explanation: "It holds rows and columns.",
      hint: "Review core principles of Series and DataFrames."
    },
    {
      id: 3,
      question: "Which creates a Series?",
      options: [
        {
          key: "A",
          text: "pd.DataFrame(5) only"
        },
        {
          key: "B",
          text: "pd.Table([1,2])"
        },
        {
          key: "C",
          text: "pd.Series([10,20])"
        },
        {
          key: "D",
          text: "pd.list([1,2])"
        }
      ],
      correct: 2,
      explanation: "Series is a Pandas type.",
      hint: "Review core principles of Series and DataFrames."
    },
    {
      id: 4,
      question: "Which creates a DataFrame with an age column?",
      options: [
        {
          key: "A",
          text: "pd.Series(\"age\")"
        },
        {
          key: "B",
          text: "pd.Array(\"age\")"
        },
        {
          key: "C",
          text: "pd.read()"
        },
        {
          key: "D",
          text: "pd.DataFrame({\"age\":[20,25]})"
        }
      ],
      correct: 3,
      explanation: "A dictionary of lists defines columns.",
      hint: "Review core principles of Series and DataFrames."
    },
    {
      id: 5,
      question: "What does a Series index do?",
      options: [
        {
          key: "A",
          text: "Labels values"
        },
        {
          key: "B",
          text: "Always sorts values"
        },
        {
          key: "C",
          text: "Deletes duplicates"
        },
        {
          key: "D",
          text: "Creates a chart"
        }
      ],
      correct: 0,
      explanation: "Index identifies entries.",
      hint: "Review core principles of Series and DataFrames."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match structure",
      prompt: "Series ↔ one-dimensional; DataFrame ↔ two-dimensional.",
      tokens: ["Series ↔ one-dimensional", "DataFrame ↔ two-dimensional."],
      shuffled: ["DataFrame ↔ two-dimensional.", "Series ↔ one-dimensional"],
      expected: ["Series ↔ one-dimensional", "DataFrame ↔ two-dimensional."],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build table",
      prompt: "{\"name\":[\"Riya\",\"Aman\"], \"age\":[20,22]} → pd.DataFrame(...).",
      tokens: ["{\"name\":[\"Riya\",\"Aman\"], \"age\":[20,22]}", "pd.DataFrame(...)"],
      shuffled: ["pd.DataFrame(...)", "{\"name\":[\"Riya\",\"Aman\"], \"age\":[20,22]}"],
      expected: ["{\"name\":[\"Riya\",\"Aman\"], \"age\":[20,22]}", "pd.DataFrame(...)"],
      hint: "Arrange into correct logical sequence: Two rows, two columns."
    },
    {
      id: 3,
      title: "Puzzle 3 — Match labels to values",
      prompt: "Series pd.Series([5,8], index=[\"Mon\",\"Tue\"]).",
      tokens: ["Series", "pd.Series([5,8", "index=[\"Mon\",\"Tue\"])`"],
      shuffled: ["index=[\"Mon\",\"Tue\"])`", "pd.Series([5,8", "Series"],
      expected: ["Series", "pd.Series([5,8", "index=[\"Mon\",\"Tue\"])`"],
      hint: "Arrange into correct logical sequence: Mon→5, Tue→8."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "a Series",
      meaning: "A one-dimensional labeled array in Pandas."
    },
    {
      id: 2,
      snippet: "a DataFrame",
      meaning: "A two-dimensional labeled table."
    },
    {
      id: 3,
      snippet: "How are Series and DataF",
      meaning: "A Series has one axis; a DataFrame has rows and columns."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Store Two Students",
      prompt: "Which Pandas object fits?",
      scenario: "A teacher wants a table with Name and Marks columns for several students.",
      expectedResponse: "DataFrame"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a Series?",
      sampleAnswer: "A one-dimensional labeled array in Pandas."
    },
    {
      id: 2,
      question: "What is a DataFrame?",
      sampleAnswer: "A two-dimensional labeled table."
    },
    {
      id: 3,
      question: "How are Series and DataFrames different?",
      sampleAnswer: "A Series has one axis; a DataFrame has rows and columns."
    },
    {
      id: 4,
      question: "What is an index in Pandas?",
      sampleAnswer: "Labels used to identify rows or Series values."
    }
    ]
  },
  '9.3': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 9,
    moduleName: "Pandas for Data Analysis",
    topicKey: "9.3",
    id: 60,
    topicTitle: "Reading CSV and Excel Files",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "Which function reads a CSV file?",
      options: [
        {
          key: "A",
          text: "pd.read_csv()"
        },
        {
          key: "B",
          text: "pd.open_csv()"
        },
        {
          key: "C",
          text: "pd.csv()"
        },
        {
          key: "D",
          text: "pd.load_text() only"
        }
      ],
      correct: 0,
      explanation: "read_csv loads CSV data.",
      hint: "Review core principles of Reading CSV and Excel Files."
    },
    {
      id: 2,
      question: "Which function reads an Excel workbook?",
      options: [
        {
          key: "A",
          text: "pd.read_csv()"
        },
        {
          key: "B",
          text: "pd.read_excel()"
        },
        {
          key: "C",
          text: "pd.excel()"
        },
        {
          key: "D",
          text: "pd.import_xlsx()"
        }
      ],
      correct: 1,
      explanation: "read_excel supports spreadsheet files.",
      hint: "Review core principles of Reading CSV and Excel Files."
    },
    {
      id: 3,
      question: "What does pd.read_csv(\"sales.csv\") usually return?",
      options: [
        {
          key: "A",
          text: "A plot"
        },
        {
          key: "B",
          text: "A Python comment"
        },
        {
          key: "C",
          text: "A DataFrame"
        },
        {
          key: "D",
          text: "An image"
        }
      ],
      correct: 2,
      explanation: "Rows and columns are loaded.",
      hint: "Review core principles of Reading CSV and Excel Files."
    },
    {
      id: 4,
      question: "Which argument can select an Excel worksheet?",
      options: [
        {
          key: "A",
          text: "plot="
        },
        {
          key: "B",
          text: "group="
        },
        {
          key: "C",
          text: "axis="
        },
        {
          key: "D",
          text: "sheet_name="
        }
      ],
      correct: 3,
      explanation: "It chooses a sheet.",
      hint: "Review core principles of Reading CSV and Excel Files."
    },
    {
      id: 5,
      question: "What should you verify after loading a file?",
      options: [
        {
          key: "A",
          text: "Columns and sample rows"
        },
        {
          key: "B",
          text: "Screen brightness"
        },
        {
          key: "C",
          text: "Wallpaper"
        },
        {
          key: "D",
          text: "Keyboard color"
        }
      ],
      correct: 0,
      explanation: "Confirm the file was parsed as expected.",
      hint: "Review core principles of Reading CSV and Excel Files."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match file to function",
      prompt: "sales.csv → read_csv; sales.xlsx → read_excel.",
      tokens: ["sales.csv", "sales.xlsx"],
      shuffled: ["sales.xlsx", "sales.csv"],
      expected: ["sales.csv", "sales.xlsx"],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 2,
      title: "Puzzle 2 — Arrange workflow",
      prompt: "Choose file → Read with Pandas → Inspect first rows.",
      tokens: ["Choose file", "Read with Pandas", "Inspect first rows."],
      shuffled: ["Inspect first rows.", "Read with Pandas", "Choose file"],
      expected: ["Choose file", "Read with Pandas", "Inspect first rows."],
      hint: "Arrange into correct logical sequence: This order."
    },
    {
      id: 3,
      title: "Puzzle 3 — Complete code",
      prompt: "df = pd.____(\"orders.csv\").",
      tokens: ["df", "pd.____(\"orders.csv\")`"],
      shuffled: ["pd.____(\"orders.csv\")`", "df"],
      expected: ["df", "pd.____(\"orders.csv\")`"],
      hint: "Arrange into correct logical sequence: read_csv."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "How do you load a CSV in",
      meaning: "With pd.read_csv(\"file.csv\")."
    },
    {
      id: 2,
      snippet: "How do you load Excel da",
      meaning: "With pd.read_excel(\"file.xlsx\")."
    },
    {
      id: 3,
      snippet: "What does read_csv retur",
      meaning: "Usually a DataFrame."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Open a Sales File",
      prompt: "Which Pandas function should be used?",
      scenario: "A shop sends orders.xlsx to an analyst.",
      expectedResponse: "pd.read_excel()"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "How do you load a CSV in Pandas?",
      sampleAnswer: "With pd.read_csv(\"file.csv\")."
    },
    {
      id: 2,
      question: "How do you load Excel data?",
      sampleAnswer: "With pd.read_excel(\"file.xlsx\")."
    },
    {
      id: 3,
      question: "What does read_csv return?",
      sampleAnswer: "Usually a DataFrame."
    },
    {
      id: 4,
      question: "What should you check after importing data?",
      sampleAnswer: "Column names, row samples, data types, and missing values."
    }
    ]
  },
  '9.4': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 9,
    moduleName: "Pandas for Data Analysis",
    topicKey: "9.4",
    id: 61,
    topicTitle: "Inspecting Data with head(), info() and describe()",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What does df.head() show by default?",
      options: [
        {
          key: "A",
          text: "First five rows"
        },
        {
          key: "B",
          text: "Last five rows"
        },
        {
          key: "C",
          text: "Five columns only"
        },
        {
          key: "D",
          text: "All missing values"
        }
      ],
      correct: 0,
      explanation: "It previews the beginning.",
      hint: "Review core principles of Inspecting Data with head(), info() and describe()."
    },
    {
      id: 2,
      question: "What does df.tail(2) show?",
      options: [
        {
          key: "A",
          text: "First two rows"
        },
        {
          key: "B",
          text: "Last two rows"
        },
        {
          key: "C",
          text: "Two random rows"
        },
        {
          key: "D",
          text: "Two columns"
        }
      ],
      correct: 1,
      explanation: "tail previews the end.",
      hint: "Review core principles of Inspecting Data with head(), info() and describe()."
    },
    {
      id: 3,
      question: "What does df.info() provide?",
      options: [
        {
          key: "A",
          text: "A histogram"
        },
        {
          key: "B",
          text: "Only the total sales"
        },
        {
          key: "C",
          text: "Column types and non-null counts"
        },
        {
          key: "D",
          text: "A saved CSV"
        }
      ],
      correct: 2,
      explanation: "It summarizes DataFrame structure.",
      hint: "Review core principles of Inspecting Data with head(), info() and describe()."
    },
    {
      id: 4,
      question: "What does df.describe() summarize by default for numeric columns?",
      options: [
        {
          key: "A",
          text: "File permissions"
        },
        {
          key: "B",
          text: "Customer addresses"
        },
        {
          key: "C",
          text: "Python imports"
        },
        {
          key: "D",
          text: "Count, mean, spread, and percentiles"
        }
      ],
      correct: 3,
      explanation: "It gives descriptive statistics.",
      hint: "Review core principles of Inspecting Data with head(), info() and describe()."
    },
    {
      id: 5,
      question: "Which property gives DataFrame rows and columns?",
      options: [
        {
          key: "A",
          text: "df.shape"
        },
        {
          key: "B",
          text: "df.name"
        },
        {
          key: "C",
          text: "df.plot"
        },
        {
          key: "D",
          text: "df.count_rows()"
        }
      ],
      correct: 0,
      explanation: "shape is (rows, columns).",
      hint: "Review core principles of Inspecting Data with head(), info() and describe()."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match tools",
      prompt: "head() → first rows; info() → structure/types; describe() → statistics.",
      tokens: ["head()", "first rows; info()", "structure/types; describe()", "statistics."],
      shuffled: ["statistics.", "structure/types; describe()", "first rows; info()", "head()"],
      expected: ["head()", "first rows; info()", "structure/types; describe()", "statistics."],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 2,
      title: "Puzzle 2 — Choose method",
      prompt: "Need last three records.",
      tokens: ["Need", "last", "three", "records"],
      shuffled: ["records", "three", "last", "Need"],
      expected: ["Need", "last", "three", "records"],
      hint: "Arrange into correct logical sequence: df.tail(3)."
    },
    {
      id: 3,
      title: "Puzzle 3 — Interpret shape",
      prompt: "df.shape == (100, 4).",
      tokens: ["df.shape", "==", "100", "4)`"],
      shuffled: ["4)`", "100", "==", "df.shape"],
      expected: ["df.shape", "==", "100", "4)`"],
      hint: "Arrange into correct logical sequence: 100 rows, 4 columns."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "What does head() do",
      meaning: "It displays the first rows of a DataFrame."
    },
    {
      id: 2,
      snippet: "What does info() show",
      meaning: "Column names, data types, non-null counts, and memory information."
    },
    {
      id: 3,
      snippet: "What does describe() do",
      meaning: "It summarizes statistics for selected data types."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Preview a Large Table",
      prompt: "Which command quickly shows the first five?",
      scenario: "A manager sends a DataFrame with 1,000 rows.",
      expectedResponse: "df.head()"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does head() do?",
      sampleAnswer: "It displays the first rows of a DataFrame."
    },
    {
      id: 2,
      question: "What does info() show?",
      sampleAnswer: "Column names, data types, non-null counts, and memory information."
    },
    {
      id: 3,
      question: "What does describe() do?",
      sampleAnswer: "It summarizes statistics for selected data types."
    },
    {
      id: 4,
      question: "What does shape mean?",
      sampleAnswer: "A tuple containing the number of rows and columns."
    }
    ]
  },
  '9.5': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 9,
    moduleName: "Pandas for Data Analysis",
    topicKey: "9.5",
    id: 62,
    topicTitle: "Selecting Columns and Rows (loc & iloc)",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "How do you select a column named Sales?",
      options: [
        {
          key: "A",
          text: "df[\"Sales\"]"
        },
        {
          key: "B",
          text: "df[Sales] with undefined variable"
        },
        {
          key: "C",
          text: "df.row(\"Sales\")"
        },
        {
          key: "D",
          text: "df.getrow(0)"
        }
      ],
      correct: 0,
      explanation: "Bracket notation selects by column label.",
      hint: "Review core principles of Selecting Columns and Rows (loc & iloc)."
    },
    {
      id: 2,
      question: "What does .loc primarily use?",
      options: [
        {
          key: "A",
          text: "Integer positions only"
        },
        {
          key: "B",
          text: "Labels"
        },
        {
          key: "C",
          text: "Random indices"
        },
        {
          key: "D",
          text: "Column data types"
        }
      ],
      correct: 1,
      explanation: "loc is label-based.",
      hint: "Review core principles of Selecting Columns and Rows (loc & iloc)."
    },
    {
      id: 3,
      question: "What does .iloc primarily use?",
      options: [
        {
          key: "A",
          text: "Text labels"
        },
        {
          key: "B",
          text: "Column values"
        },
        {
          key: "C",
          text: "Integer positions"
        },
        {
          key: "D",
          text: "Boolean names only"
        }
      ],
      correct: 2,
      explanation: "iloc is position-based.",
      hint: "Review core principles of Selecting Columns and Rows (loc & iloc)."
    },
    {
      id: 4,
      question: "Which selects the first row by position?",
      options: [
        {
          key: "A",
          text: "df.loc[1] always"
        },
        {
          key: "B",
          text: "df.iloc[1]"
        },
        {
          key: "C",
          text: "df[1] always"
        },
        {
          key: "D",
          text: "df.iloc[0]"
        }
      ],
      correct: 3,
      explanation: "Zero is the first position.",
      hint: "Review core principles of Selecting Columns and Rows (loc & iloc)."
    },
    {
      id: 5,
      question: "Which selects the first two rows by position?",
      options: [
        {
          key: "A",
          text: "df.iloc[:2]"
        },
        {
          key: "B",
          text: "df.iloc[2:]"
        },
        {
          key: "C",
          text: "df.iloc[2]"
        },
        {
          key: "D",
          text: "df.iloc[-2]"
        }
      ],
      correct: 0,
      explanation: "Stop position excluded.",
      hint: "Review core principles of Selecting Columns and Rows (loc & iloc)."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match selection",
      prompt: "df[\"Price\"] → column; df.iloc[0] → first row; df.loc[\"A\"] → row labeled A.",
      tokens: ["df[\"Price\"]", "df.iloc[0]", "df.loc[\"A\"]"],
      shuffled: ["df.loc[\"A\"]", "df.iloc[0]", "df[\"Price\"]"],
      expected: ["df[\"Price\"]", "df.iloc[0]", "df.loc[\"A\"]"],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build row/column selection",
      prompt: "Tokens df, .iloc, [, 0, ,, 1, ].",
      tokens: ["df", ".iloc", "[", "0", ",", "1", "]"],
      shuffled: ["]", "1", ",", "0", "[", ".iloc", "df"],
      expected: ["df", ".iloc", "[", "0", ",", "1", "]"],
      hint: "Arrange into correct logical sequence: df.iloc[0,1] selects first row, second column."
    },
    {
      id: 3,
      title: "Puzzle 3 — Choose first three rows",
      prompt: "Select the first three rows using iloc: df, ., iloc, [, :3, ]",
      tokens: ["df", ".", "iloc", "[", ":3", "]"],
      shuffled: ["]", ":3", "[", "iloc", ".", "df"],
      expected: ["df", ".", "iloc", "[", ":3", "]"],
      hint: "Arrange into correct logical sequence: df.iloc[:3]."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "the difference between l",
      meaning: "loc selects by labels; iloc selects by integer positions."
    },
    {
      id: 2,
      snippet: "How do you select one co",
      meaning: "With df[\"column_name\"]."
    },
    {
      id: 3,
      snippet: "How do you select the fi",
      meaning: "With df.iloc[0]."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "View the First Order",
      prompt: "Which code selects the first row by position?",
      scenario: "An orders table has many rows.",
      expectedResponse: "df.iloc[0]"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is the difference between loc and iloc?",
      sampleAnswer: "loc selects by labels; iloc selects by integer positions."
    },
    {
      id: 2,
      question: "How do you select one column?",
      sampleAnswer: "With df[\"column_name\"]."
    },
    {
      id: 3,
      question: "How do you select the first row?",
      sampleAnswer: "With df.iloc[0]."
    },
    {
      id: 4,
      question: "How do you select multiple rows by position?",
      sampleAnswer: "With iloc slicing, such as df.iloc[:3]."
    }
    ]
  },
  '9.6': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 9,
    moduleName: "Pandas for Data Analysis",
    topicKey: "9.6",
    id: 63,
    topicTitle: "Filtering and Sorting DataFrames",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "Which filters rows with Sales above 100?",
      options: [
        {
          key: "A",
          text: "df[df[\"Sales\"] > 100]"
        },
        {
          key: "B",
          text: "df[\"Sales\" > 100]"
        },
        {
          key: "C",
          text: "df.sort_values(100)"
        },
        {
          key: "D",
          text: "df.head(100) only"
        }
      ],
      correct: 0,
      explanation: "Boolean indexing keeps matching rows.",
      hint: "Review core principles of Filtering and Sorting DataFrames."
    },
    {
      id: 2,
      question: "Which method sorts rows by a column?",
      options: [
        {
          key: "A",
          text: "df.filter_rows()"
        },
        {
          key: "B",
          text: "df.sort_values()"
        },
        {
          key: "C",
          text: "df.upper()"
        },
        {
          key: "D",
          text: "df.order() always"
        }
      ],
      correct: 1,
      explanation: "sort_values orders rows.",
      hint: "Review core principles of Filtering and Sorting DataFrames."
    },
    {
      id: 3,
      question: "How do you sort Price from highest to lowest?",
      options: [
        {
          key: "A",
          text: "df.sort_values(\"Price\") only"
        },
        {
          key: "B",
          text: "df.sort_values(\"Price\", ascending=True)"
        },
        {
          key: "C",
          text: "df.sort_values(\"Price\", ascending=False)"
        },
        {
          key: "D",
          text: "df.reverse(\"Price\")"
        }
      ],
      correct: 2,
      explanation: "Descending order uses False.",
      hint: "Review core principles of Filtering and Sorting DataFrames."
    },
    {
      id: 4,
      question: "What does df[df[\"Qty\"] == 0] show?",
      options: [
        {
          key: "A",
          text: "All positive quantities"
        },
        {
          key: "B",
          text: "Every row"
        },
        {
          key: "C",
          text: "Only missing quantities"
        },
        {
          key: "D",
          text: "Rows with Qty equal to zero"
        }
      ],
      correct: 3,
      explanation: "It is an equality filter.",
      hint: "Review core principles of Filtering and Sorting DataFrames."
    },
    {
      id: 5,
      question: "Which combines two Pandas row conditions with elementwise AND?",
      options: [
        {
          key: "A",
          text: "& with parentheses"
        },
        {
          key: "B",
          text: "Python and directly on Series"
        },
        {
          key: "C",
          text: "+ only"
        },
        {
          key: "D",
          text: "not directly on Series"
        }
      ],
      correct: 0,
      explanation: "Use (condition1) & (condition2).",
      hint: "Review core principles of Filtering and Sorting DataFrames."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Select matching rows",
      prompt: "Sales 50,150,200; filter >100.",
      tokens: ["Sales 50,150,200", "filter `>100`."],
      shuffled: ["filter `>100`.", "Sales 50,150,200"],
      expected: ["Sales 50,150,200", "filter `>100`."],
      hint: "Arrange into correct logical sequence: 150 and 200."
    },
    {
      id: 2,
      title: "Puzzle 2 — Arrange descending sort",
      prompt: "df.sort_values(\"Sales\", ascending=False).",
      tokens: ["df.sort_values(\"Sales\"", "ascending=False)`"],
      shuffled: ["ascending=False)`", "df.sort_values(\"Sales\""],
      expected: ["df.sort_values(\"Sales\"", "ascending=False)`"],
      hint: "Arrange into correct logical sequence: Highest sales first."
    },
    {
      id: 3,
      title: "Puzzle 3 — Match filters",
      prompt: "==\"East\" → East only; >10 → above 10; <=5 → at most 5.",
      tokens: ["==\"East\"", ">10", "<=5"],
      shuffled: ["<=5", ">10", "==\"East\""],
      expected: ["==\"East\"", ">10", "<=5"],
      hint: "Arrange into correct logical sequence: Listed matches."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "How do you filter a Data",
      meaning: "By applying a Boolean condition to select matching rows."
    },
    {
      id: 2,
      snippet: "How do you sort a DataFr",
      meaning: "With sort_values()."
    },
    {
      id: 3,
      snippet: "How do you sort descendi",
      meaning: "Set ascending=False."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Find Expensive Products",
      prompt: "Which condition shows prices above ₹100?",
      scenario: "Products cost ₹50, ₹150, ₹200.",
      expectedResponse: "Price > 100"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "How do you filter a DataFrame?",
      sampleAnswer: "By applying a Boolean condition to select matching rows."
    },
    {
      id: 2,
      question: "How do you sort a DataFrame?",
      sampleAnswer: "With sort_values()."
    },
    {
      id: 3,
      question: "How do you sort descending?",
      sampleAnswer: "Set ascending=False."
    },
    {
      id: 4,
      question: "How do you combine two conditions?",
      sampleAnswer: "Use parentheses around each condition and combine with & or |."
    }
    ]
  },
  '9.7': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 9,
    moduleName: "Pandas for Data Analysis",
    topicKey: "9.7",
    id: 64,
    topicTitle: "Creating and Renaming Columns",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "How do you create a Total column from Price × Qty?",
      options: [
        {
          key: "A",
          text: "df[\"Total\"] = df[\"Price\"] * df[\"Qty\"]"
        },
        {
          key: "B",
          text: "df.Total()"
        },
        {
          key: "C",
          text: "df.create(\"Total\")"
        },
        {
          key: "D",
          text: "df[\"Total\"] == 0"
        }
      ],
      correct: 0,
      explanation: "Assignment creates or updates the column.",
      hint: "Review core principles of Creating and Renaming Columns."
    },
    {
      id: 2,
      question: "Which method can rename columns?",
      options: [
        {
          key: "A",
          text: "df.relabel()"
        },
        {
          key: "B",
          text: "df.rename()"
        },
        {
          key: "C",
          text: "df.sort()"
        },
        {
          key: "D",
          text: "df.replace_index() only"
        }
      ],
      correct: 1,
      explanation: "rename supports column mappings.",
      hint: "Review core principles of Creating and Renaming Columns."
    },
    {
      id: 3,
      question: "Which renames Qty to Quantity?",
      options: [
        {
          key: "A",
          text: "df.rename(\"Qty\", \"Quantity\")"
        },
        {
          key: "B",
          text: "df.rename(rows={\"Qty\":\"Quantity\"})"
        },
        {
          key: "C",
          text: "df.rename(columns={\"Qty\":\"Quantity\"})"
        },
        {
          key: "D",
          text: "df.rename(index=0)"
        }
      ],
      correct: 2,
      explanation: "columns mapping changes the label.",
      hint: "Review core principles of Creating and Renaming Columns."
    },
    {
      id: 4,
      question: "What is created by df[\"Tax\"] = 0?",
      options: [
        {
          key: "A",
          text: "A new row only"
        },
        {
          key: "B",
          text: "A plot"
        },
        {
          key: "C",
          text: "A deleted column"
        },
        {
          key: "D",
          text: "A column with 0 for each row"
        }
      ],
      correct: 3,
      explanation: "Scalar assignment broadcasts.",
      hint: "Review core principles of Creating and Renaming Columns."
    },
    {
      id: 5,
      question: "What should you check after creating a calculated column?",
      options: [
        {
          key: "A",
          text: "Whether the formula and values are correct"
        },
        {
          key: "B",
          text: "Only the file name"
        },
        {
          key: "C",
          text: "Screen color"
        },
        {
          key: "D",
          text: "Printer status"
        }
      ],
      correct: 0,
      explanation: "Validate calculations.",
      hint: "Review core principles of Creating and Renaming Columns."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Build a formula",
      prompt: "Tokens df[\"Total\"], =, df[\"Price\"], *, df[\"Qty\"].",
      tokens: ["df[\"Total\"]", "=", "df[\"Price\"]", "*", "df[\"Qty\"]"],
      shuffled: ["df[\"Qty\"]", "*", "df[\"Price\"]", "=", "df[\"Total\"]"],
      expected: ["df[\"Total\"]", "=", "df[\"Price\"]", "*", "df[\"Qty\"]"],
      hint: "Arrange into correct logical sequence: df[\"Total\"] = df[\"Price\"] * df[\"Qty\"]."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match old and new labels",
      prompt: "Qty→Quantity, Amt→Amount, Cust→Customer.",
      tokens: ["Qty", "Quantity, Amt", "Amount, Cust", "Customer."],
      shuffled: ["Customer.", "Amount, Cust", "Quantity, Amt", "Qty"],
      expected: ["Qty", "Quantity, Amt", "Amount, Cust", "Customer."],
      hint: "Arrange into correct logical sequence: df.rename(columns={\"Qty\":\"Quantity\", \"Amt\":\"Amount\", \"Cust\""
    },
    {
      id: 3,
      title: "Puzzle 3 — Calculate a row",
      prompt: "Price 20, Qty 3.",
      tokens: ["Price", "20", "Qty"],
      shuffled: ["Qty", "20", "Price"],
      expected: ["Price", "20", "Qty"],
      hint: "Arrange into correct logical sequence: Total 60."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "How do you create a new ",
      meaning: "Assign values to a new column name, such as df[\"Total\"] = ...."
    },
    {
      id: 2,
      snippet: "How do you rename a colu",
      meaning: "Use df.rename(columns={\"old\":\"new\"})."
    },
    {
      id: 3,
      snippet: "Can a new column be calc",
      meaning: "Yes, using vectorized expressions."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Add Bill Total",
      prompt: "Which formula creates Total?",
      scenario: "A shop DataFrame has Price=20 and Qty=3.",
      expectedResponse: "Price * Qty"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "How do you create a new DataFrame column?",
      sampleAnswer: "Assign values to a new column name, such as df[\"Total\"] = ...."
    },
    {
      id: 2,
      question: "How do you rename a column?",
      sampleAnswer: "Use df.rename(columns={\"old\":\"new\"})."
    },
    {
      id: 3,
      question: "Can a new column be calculated from existing columns?",
      sampleAnswer: "Yes, using vectorized expressions."
    },
    {
      id: 4,
      question: "Why validate calculated columns?",
      sampleAnswer: "To ensure formulas and data types produce correct results."
    }
    ]
  },
  '9.8': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 9,
    moduleName: "Pandas for Data Analysis",
    topicKey: "9.8",
    id: 65,
    topicTitle: "Handling Missing Values (NaN & None)",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What does a missing value represent?",
      options: [
        {
          key: "A",
          text: "Data that is absent or unavailable"
        },
        {
          key: "B",
          text: "Always zero"
        },
        {
          key: "C",
          text: "Always False"
        },
        {
          key: "D",
          text: "A duplicate row"
        }
      ],
      correct: 0,
      explanation: "Missing is not the same as zero.",
      hint: "Review core principles of Handling Missing Values (NaN & None)."
    },
    {
      id: 2,
      question: "Which method detects missing entries?",
      options: [
        {
          key: "A",
          text: "df.isfull()"
        },
        {
          key: "B",
          text: "df.isna()"
        },
        {
          key: "C",
          text: "df.head()"
        },
        {
          key: "D",
          text: "df.rename()"
        }
      ],
      correct: 1,
      explanation: "isna identifies missing values.",
      hint: "Review core principles of Handling Missing Values (NaN & None)."
    },
    {
      id: 3,
      question: "What does df.dropna() do by default?",
      options: [
        {
          key: "A",
          text: "Replaces all zeros"
        },
        {
          key: "B",
          text: "Deletes every column"
        },
        {
          key: "C",
          text: "Drops rows containing missing values"
        },
        {
          key: "D",
          text: "Sorts data"
        }
      ],
      correct: 2,
      explanation: "Default axis is rows.",
      hint: "Review core principles of Handling Missing Values (NaN & None)."
    },
    {
      id: 4,
      question: "Which method fills missing values?",
      options: [
        {
          key: "A",
          text: "df.sort_values()"
        },
        {
          key: "B",
          text: "df.tail()"
        },
        {
          key: "C",
          text: "df.rename()"
        },
        {
          key: "D",
          text: "df.fillna()"
        }
      ],
      correct: 3,
      explanation: "fillna substitutes chosen values.",
      hint: "Review core principles of Handling Missing Values (NaN & None)."
    },
    {
      id: 5,
      question: "What is a safe first step when a field is missing?",
      options: [
        {
          key: "A",
          text: "Investigate why it is missing"
        },
        {
          key: "B",
          text: "Always replace with zero"
        },
        {
          key: "C",
          text: "Invent a number"
        },
        {
          key: "D",
          text: "Delete the whole dataset"
        }
      ],
      correct: 0,
      explanation: "Treatment depends on meaning.",
      hint: "Review core principles of Handling Missing Values (NaN & None)."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Identify missing cells",
      prompt: "[10, NaN, 20].",
      tokens: ["10", "NaN", "20]`"],
      shuffled: ["20]`", "NaN", "10"],
      expected: ["10", "NaN", "20]`"],
      hint: "Arrange into correct logical sequence: Middle value is missing."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match methods",
      prompt: "isna() → detect; fillna() → replace; dropna() → remove affected entries.",
      tokens: ["isna()", "detect; fillna()", "replace; dropna()", "remove affected entries."],
      shuffled: ["remove affected entries.", "replace; dropna()", "detect; fillna()", "isna()"],
      expected: ["isna()", "detect; fillna()", "replace; dropna()", "remove affected entries."],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 3,
      title: "Puzzle 3 — Choose responsible treatment",
      prompt: "Missing salary with no evidence; options invent salary, flag/investigate, set to 99999.",
      tokens: ["Missing salary with no evidence", "options invent salary, flag/investigate, set to 99999."],
      shuffled: ["options invent salary, flag/investigate, set to 99999.", "Missing salary with no evidence"],
      expected: ["Missing salary with no evidence", "options invent salary, flag/investigate, set to 99999."],
      hint: "Arrange into correct logical sequence: Flag and investigate."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "a missing value in Panda",
      meaning: "An absent or unavailable value represented by markers such as NaN or None."
    },
    {
      id: 2,
      snippet: "How do you detect missin",
      meaning: "With isna() or isnull()."
    },
    {
      id: 3,
      snippet: "What does fillna() do",
      meaning: "It fills missing values using a specified value or method."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Find Missing Customer Ages",
      prompt: "Which method finds the missing entry?",
      scenario: "A table contains ages 20, missing, 30.",
      expectedResponse: "df.isna()"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a missing value in Pandas?",
      sampleAnswer: "An absent or unavailable value represented by markers such as NaN or None."
    },
    {
      id: 2,
      question: "How do you detect missing values?",
      sampleAnswer: "With isna() or isnull()."
    },
    {
      id: 3,
      question: "What does fillna() do?",
      sampleAnswer: "It fills missing values using a specified value or method."
    },
    {
      id: 4,
      question: "Should you always replace missing values with zero?",
      sampleAnswer: "No. The correct treatment depends on the field and business meaning."
    }
    ]
  },
  '9.9': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 9,
    moduleName: "Pandas for Data Analysis",
    topicKey: "9.9",
    id: 66,
    topicTitle: "Removing Duplicates",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What is a duplicate record?",
      options: [
        {
          key: "A",
          text: "A repeated record under the defined matching rules"
        },
        {
          key: "B",
          text: "A missing value"
        },
        {
          key: "C",
          text: "A chart"
        },
        {
          key: "D",
          text: "A new column"
        }
      ],
      correct: 0,
      explanation: "Duplicate criteria depend on the dataset.",
      hint: "Review core principles of Removing Duplicates."
    },
    {
      id: 2,
      question: "Which method identifies duplicate rows?",
      options: [
        {
          key: "A",
          text: "df.isna()"
        },
        {
          key: "B",
          text: "df.duplicated()"
        },
        {
          key: "C",
          text: "df.sort_values()"
        },
        {
          key: "D",
          text: "df.tail()"
        }
      ],
      correct: 1,
      explanation: "It returns Boolean indicators.",
      hint: "Review core principles of Removing Duplicates."
    },
    {
      id: 3,
      question: "Which method removes duplicate rows?",
      options: [
        {
          key: "A",
          text: "df.dropna()"
        },
        {
          key: "B",
          text: "df.fillna()"
        },
        {
          key: "C",
          text: "df.drop_duplicates()"
        },
        {
          key: "D",
          text: "df.head()"
        }
      ],
      correct: 2,
      explanation: "It drops duplicates based on selected columns.",
      hint: "Review core principles of Removing Duplicates."
    },
    {
      id: 4,
      question: "What does subset=[\"OrderID\"] mean in drop_duplicates()?",
      options: [
        {
          key: "A",
          text: "Ignore OrderID"
        },
        {
          key: "B",
          text: "Sort by OrderID"
        },
        {
          key: "C",
          text: "Replace OrderID"
        },
        {
          key: "D",
          text: "Use OrderID to determine duplicates"
        }
      ],
      correct: 3,
      explanation: "It defines the comparison key.",
      hint: "Review core principles of Removing Duplicates."
    },
    {
      id: 5,
      question: "Why should analysts check duplicate criteria before deletion?",
      options: [
        {
          key: "A",
          text: "Two similar-looking rows may be legitimate separate events"
        },
        {
          key: "B",
          text: "Every duplicate is harmless"
        },
        {
          key: "C",
          text: "It guarantees faster internet"
        },
        {
          key: "D",
          text: "Duplicates never affect results"
        }
      ],
      correct: 0,
      explanation: "Business keys matter.",
      hint: "Review core principles of Removing Duplicates."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Spot duplicate IDs",
      prompt: "A01, A02, A01, A03.",
      tokens: ["A01", "A02", "A01", "A03"],
      shuffled: ["A03", "A01", "A02", "A01"],
      expected: ["A01", "A02", "A01", "A03"],
      hint: "Arrange into correct logical sequence: A01 appears twice."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match methods",
      prompt: "duplicated() → flag; drop_duplicates() → remove.",
      tokens: ["duplicated()", "flag; drop_duplicates()", "remove."],
      shuffled: ["remove.", "flag; drop_duplicates()", "duplicated()"],
      expected: ["duplicated()", "flag; drop_duplicates()", "remove."],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 3,
      title: "Puzzle 3 — Choose subset",
      prompt: "Need unique customer IDs while allowing repeat customer names.",
      tokens: ["Need", "unique", "customer", "IDs"],
      shuffled: ["IDs", "customer", "unique", "Need"],
      expected: ["Need", "unique", "customer", "IDs"],
      hint: "Arrange into correct logical sequence: drop_duplicates(subset=[\"CustomerID\"]) if CustomerID is tr"
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "duplicate rows",
      meaning: "Rows repeated according to the dataset's chosen matching fields."
    },
    {
      id: 2,
      snippet: "How do you detect duplic",
      meaning: "With df.duplicated()."
    },
    {
      id: 3,
      snippet: "How do you remove duplic",
      meaning: "With df.drop_duplicates()."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Remove a Repeated Order",
      prompt: "After confirming OrderID should be unique, which Pandas code removes repeated OrderIDs?",
      scenario: "A report accidentally includes OrderID A01 twice.",
      expectedResponse: "df.drop_duplicates(subset=[\"OrderID\"])"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What are duplicate rows?",
      sampleAnswer: "Rows repeated according to the dataset's chosen matching fields."
    },
    {
      id: 2,
      question: "How do you detect duplicates?",
      sampleAnswer: "With df.duplicated()."
    },
    {
      id: 3,
      question: "How do you remove duplicates?",
      sampleAnswer: "With df.drop_duplicates()."
    },
    {
      id: 4,
      question: "Why check business keys before removing duplicates?",
      sampleAnswer: "Similar rows can represent different valid transactions."
    }
    ]
  },
  '9.10': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 9,
    moduleName: "Pandas for Data Analysis",
    topicKey: "9.10",
    id: 67,
    topicTitle: "GroupBy and Aggregation",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What does groupby() do?",
      options: [
        {
          key: "A",
          text: "Groups rows by values for separate calculations"
        },
        {
          key: "B",
          text: "Deletes all groups"
        },
        {
          key: "C",
          text: "Always sorts strings"
        },
        {
          key: "D",
          text: "Reads files"
        }
      ],
      correct: 0,
      explanation: "It supports grouped summaries.",
      hint: "Review core principles of GroupBy and Aggregation."
    },
    {
      id: 2,
      question: "Which calculates total sales by city?",
      options: [
        {
          key: "A",
          text: "df[\"City\"].sum()"
        },
        {
          key: "B",
          text: "df.groupby(\"City\")[\"Sales\"].sum()"
        },
        {
          key: "C",
          text: "df.sort_values(\"City\")"
        },
        {
          key: "D",
          text: "df.head(\"City\")"
        }
      ],
      correct: 1,
      explanation: "Group then sum.",
      hint: "Review core principles of GroupBy and Aggregation."
    },
    {
      id: 3,
      question: "What does .mean() calculate within a group?",
      options: [
        {
          key: "A",
          text: "Number of columns"
        },
        {
          key: "B",
          text: "Maximum"
        },
        {
          key: "C",
          text: "Average"
        },
        {
          key: "D",
          text: "Minimum"
        }
      ],
      correct: 2,
      explanation: "Mean is group average.",
      hint: "Review core principles of GroupBy and Aggregation."
    },
    {
      id: 4,
      question: "Which aggregation counts nonmissing values?",
      options: [
        {
          key: "A",
          text: ".max()"
        },
        {
          key: "B",
          text: ".sum()"
        },
        {
          key: "C",
          text: ".mean()"
        },
        {
          key: "D",
          text: ".count()"
        }
      ],
      correct: 3,
      explanation: "count excludes missing values.",
      hint: "Review core principles of GroupBy and Aggregation."
    },
    {
      id: 5,
      question: "Which statement is correct?",
      options: [
        {
          key: "A",
          text: "GroupBy can summarize each product category separately"
        },
        {
          key: "B",
          text: "GroupBy can only work on strings"
        },
        {
          key: "C",
          text: "GroupBy always removes duplicates"
        },
        {
          key: "D",
          text: "GroupBy is only for charts"
        }
      ],
      correct: 0,
      explanation: "It creates group-level summaries.",
      hint: "Review core principles of GroupBy and Aggregation."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Group totals",
      prompt: "East sales 10 and 20, West sales 15.",
      tokens: ["East", "sales", "10", "and"],
      shuffled: ["and", "10", "sales", "East"],
      expected: ["East", "sales", "10", "and"],
      hint: "Arrange into correct logical sequence: East 30; West 15."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match aggregation",
      prompt: "sum→total, mean→average, max→highest.",
      tokens: ["sum", "total, mean", "average, max", "highest."],
      shuffled: ["highest.", "average, max", "total, mean", "sum"],
      expected: ["sum", "total, mean", "average, max", "highest."],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 3,
      title: "Puzzle 3 — Arrange expression",
      prompt: "df, .groupby(\"City\"), [\"Sales\"], .sum().",
      tokens: ["df", ".groupby(\"City\")", "[\"Sales\"]", ".sum()"],
      shuffled: [".sum()", "[\"Sales\"]", ".groupby(\"City\")", "df"],
      expected: ["df", ".groupby(\"City\")", "[\"Sales\"]", ".sum()"],
      hint: "Arrange into correct logical sequence: df.groupby(\"City\")[\"Sales\"].sum()."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "GroupBy in Pandas",
      meaning: "A way to split data into groups and calculate summaries for each group."
    },
    {
      id: 2,
      snippet: "How do you calculate gro",
      meaning: "Use groupby() followed by sum()."
    },
    {
      id: 3,
      snippet: "aggregation",
      meaning: "Combining several values into a summary such as total or average."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Total Sales by City",
      prompt: "What is East's total?",
      scenario: "A store has East sales 10 and 20, West sales 15.",
      expectedResponse: "30"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is GroupBy in Pandas?",
      sampleAnswer: "A way to split data into groups and calculate summaries for each group."
    },
    {
      id: 2,
      question: "How do you calculate group totals?",
      sampleAnswer: "Use groupby() followed by sum()."
    },
    {
      id: 3,
      question: "What is aggregation?",
      sampleAnswer: "Combining several values into a summary such as total or average."
    },
    {
      id: 4,
      question: "Give a GroupBy use case.",
      sampleAnswer: "Calculating total revenue for each product category."
    }
    ]
  },
  '9.11': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 9,
    moduleName: "Pandas for Data Analysis",
    topicKey: "9.11",
    id: 68,
    topicTitle: "Merge, Join and Concatenate",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What does merge() do?",
      options: [
        {
          key: "A",
          text: "Combines tables using matching keys"
        },
        {
          key: "B",
          text: "Removes missing values only"
        },
        {
          key: "C",
          text: "Draws charts"
        },
        {
          key: "D",
          text: "Sorts text"
        }
      ],
      correct: 0,
      explanation: "Merge is a relational join.",
      hint: "Review core principles of Merge, Join and Concatenate."
    },
    {
      id: 2,
      question: "What does an inner merge keep?",
      options: [
        {
          key: "A",
          text: "All left rows regardless of match"
        },
        {
          key: "B",
          text: "Rows with matching keys in both tables"
        },
        {
          key: "C",
          text: "All rows from both tables"
        },
        {
          key: "D",
          text: "No rows"
        }
      ],
      correct: 1,
      explanation: "Inner joins retain matches.",
      hint: "Review core principles of Merge, Join and Concatenate."
    },
    {
      id: 3,
      question: "What does a left merge keep?",
      options: [
        {
          key: "A",
          text: "Only right table rows"
        },
        {
          key: "B",
          text: "Only matching right rows"
        },
        {
          key: "C",
          text: "All left rows and matching right data"
        },
        {
          key: "D",
          text: "Nothing"
        }
      ],
      correct: 2,
      explanation: "Unmatched right fields become missing.",
      hint: "Review core principles of Merge, Join and Concatenate."
    },
    {
      id: 4,
      question: "What does pd.concat([df1, df2]) do by default?",
      options: [
        {
          key: "A",
          text: "Joins by key"
        },
        {
          key: "B",
          text: "Divides tables"
        },
        {
          key: "C",
          text: "Renames columns"
        },
        {
          key: "D",
          text: "Stacks rows along axis 0"
        }
      ],
      correct: 3,
      explanation: "concat appends along the row axis by default.",
      hint: "Review core principles of Merge, Join and Concatenate."
    },
    {
      id: 5,
      question: "Which field is a good join key when correctly defined as unique?",
      options: [
        {
          key: "A",
          text: "CustomerID"
        },
        {
          key: "B",
          text: "Favorite color"
        },
        {
          key: "C",
          text: "A random comment"
        },
        {
          key: "D",
          text: "Row color"
        }
      ],
      correct: 0,
      explanation: "Stable IDs reduce accidental mismatches.",
      hint: "Review core principles of Merge, Join and Concatenate."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match join types",
      prompt: "inner→matching keys; left→all left rows; outer→keys from either table.",
      tokens: ["inner", "matching keys; left", "all left rows; outer", "keys from either table."],
      shuffled: ["keys from either table.", "all left rows; outer", "matching keys; left", "inner"],
      expected: ["inner", "matching keys; left", "all left rows; outer", "keys from either table."],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 2,
      title: "Puzzle 2 — Connect records",
      prompt: "Orders CustomerID 1,2; Customers IDs 1,3.",
      tokens: ["Orders CustomerID 1,2", "Customers IDs 1,3."],
      shuffled: ["Customers IDs 1,3.", "Orders CustomerID 1,2"],
      expected: ["Orders CustomerID 1,2", "Customers IDs 1,3."],
      hint: "Arrange into correct logical sequence: Inner merge on CustomerID keeps ID 1."
    },
    {
      id: 3,
      title: "Puzzle 3 — Choose operation",
      prompt: "Stack January and February tables with identical columns.",
      tokens: ["Stack", "January", "and", "February"],
      shuffled: ["February", "and", "January", "Stack"],
      expected: ["Stack", "January", "and", "February"],
      hint: "Arrange into correct logical sequence: pd.concat([jan, feb], ignore_index=True)."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "a merge in Pandas",
      meaning: "Combining DataFrames based on matching keys."
    },
    {
      id: 2,
      snippet: "an inner join",
      meaning: "It keeps rows with matching keys in both inputs."
    },
    {
      id: 3,
      snippet: "a left join",
      meaning: "It keeps all left-side rows and matching right-side data."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Add Customer Names",
      prompt: "Which operation combines them using CustomerID?",
      scenario: "Orders table contains CustomerID; Customers table contains CustomerID and Name.",
      expectedResponse: "merge()"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a merge in Pandas?",
      sampleAnswer: "Combining DataFrames based on matching keys."
    },
    {
      id: 2,
      question: "What is an inner join?",
      sampleAnswer: "It keeps rows with matching keys in both inputs."
    },
    {
      id: 3,
      question: "What is a left join?",
      sampleAnswer: "It keeps all left-side rows and matching right-side data."
    },
    {
      id: 4,
      question: "How is concat different from merge?",
      sampleAnswer: "concat stacks or aligns objects along an axis; merge joins based on keys."
    }
    ]
  },
  '9.12': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 9,
    moduleName: "Pandas for Data Analysis",
    topicKey: "9.12",
    id: 69,
    topicTitle: "Dates and Text in Pandas",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "Which function converts values to datetime?",
      options: [
        {
          key: "A",
          text: "pd.to_datetime()"
        },
        {
          key: "B",
          text: "pd.to_number()"
        },
        {
          key: "C",
          text: "pd.date()"
        },
        {
          key: "D",
          text: "pd.time_only()"
        }
      ],
      correct: 0,
      explanation: "It parses date-like values.",
      hint: "Review core principles of Dates and Text in Pandas."
    },
    {
      id: 2,
      question: "How do you access the year from a datetime Series?",
      options: [
        {
          key: "A",
          text: ".year on Series directly"
        },
        {
          key: "B",
          text: ".dt.year"
        },
        {
          key: "C",
          text: ".str.year"
        },
        {
          key: "D",
          text: ".iloc.year"
        }
      ],
      correct: 1,
      explanation: ".dt provides datetime accessors.",
      hint: "Review core principles of Dates and Text in Pandas."
    },
    {
      id: 3,
      question: "Which expression uppercases text in a Series?",
      options: [
        {
          key: "A",
          text: "df[\"Name\"].upper()"
        },
        {
          key: "B",
          text: "df[\"Name\"].dt.upper()"
        },
        {
          key: "C",
          text: "df[\"Name\"].str.upper()"
        },
        {
          key: "D",
          text: "df[\"Name\"].to_upper()"
        }
      ],
      correct: 2,
      explanation: ".str exposes string methods.",
      hint: "Review core principles of Dates and Text in Pandas."
    },
    {
      id: 4,
      question: "Which expression trims edge spaces in a text column?",
      options: [
        {
          key: "A",
          text: ".dt.strip()"
        },
        {
          key: "B",
          text: ".strip() directly on Series"
        },
        {
          key: "C",
          text: ".loc.strip()"
        },
        {
          key: "D",
          text: ".str.strip()"
        }
      ],
      correct: 3,
      explanation: "Use the Series string accessor.",
      hint: "Review core principles of Dates and Text in Pandas."
    },
    {
      id: 5,
      question: "Why parse date text into datetime?",
      options: [
        {
          key: "A",
          text: "To enable date calculations and extraction"
        },
        {
          key: "B",
          text: "To guarantee no missing values"
        },
        {
          key: "C",
          text: "To sort only alphabetically"
        },
        {
          key: "D",
          text: "To convert all dates to integers"
        }
      ],
      correct: 0,
      explanation: "Datetime enables calendar operations.",
      hint: "Review core principles of Dates and Text in Pandas."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match accessors",
      prompt: ".dt.year→year, .dt.month→month, .str.lower()→lowercase text.",
      tokens: [".dt.year", ".dt.month", ".str.lower()"],
      shuffled: [".str.lower()", ".dt.month", ".dt.year"],
      expected: [".dt.year", ".dt.month", ".str.lower()"],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 2,
      title: "Puzzle 2 — Arrange conversion",
      prompt: "df[\"Date\"] = pd.to_datetime(df[\"Date\"]).",
      tokens: ["df[\"Date\"", "pd.to_datetime(df[\"Date\"])`"],
      shuffled: ["pd.to_datetime(df[\"Date\"])`", "df[\"Date\""],
      expected: ["df[\"Date\"", "pd.to_datetime(df[\"Date\"])`"],
      hint: "Arrange into correct logical sequence: Assign parsed datetime values back to column."
    },
    {
      id: 3,
      title: "Puzzle 3 — Clean text",
      prompt: "Series values \"  RIYA  \"; .str.strip().str.title() → \"Riya\".",
      tokens: ["\"  RIYA  \"", ".str.strip().str.title()", "\"Riya\""],
      shuffled: ["\"Riya\"", ".str.strip().str.title()", "\"  RIYA  \""],
      expected: ["\"  RIYA  \"", ".str.strip().str.title()", "\"Riya\""],
      hint: "Arrange into correct logical sequence: Remove spaces, then title case."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "How do you convert a col",
      meaning: "With pd.to_datetime()."
    },
    {
      id: 2,
      snippet: "What does the dt accesso",
      meaning: "It exposes datetime components and operations for Series."
    },
    {
      id: 3,
      snippet: "What does the str access",
      meaning: "It applies string operations to text values in a Series."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Find the Order Month",
      prompt: "Which expression extracts its month?",
      scenario: "An order date column is already datetime.",
      expectedResponse: "df[\"Date\"].dt.month"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "How do you convert a column to datetime?",
      sampleAnswer: "With pd.to_datetime()."
    },
    {
      id: 2,
      question: "What does the dt accessor do?",
      sampleAnswer: "It exposes datetime components and operations for Series."
    },
    {
      id: 3,
      question: "What does the str accessor do?",
      sampleAnswer: "It applies string operations to text values in a Series."
    },
    {
      id: 4,
      question: "Why clean text before analysis?",
      sampleAnswer: "To reduce inconsistent spelling, casing, and whitespace issues."
    }
    ]
  },
  '9.13': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 9,
    moduleName: "Pandas for Data Analysis",
    topicKey: "9.13",
    id: 70,
    topicTitle: "Exporting Clean Data & Final Project",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "Which method exports a DataFrame to CSV?",
      options: [
        {
          key: "A",
          text: "df.to_csv()"
        },
        {
          key: "B",
          text: "df.read_csv()"
        },
        {
          key: "C",
          text: "df.write_excel_only()"
        },
        {
          key: "D",
          text: "df.plot()"
        }
      ],
      correct: 0,
      explanation: "to_csv writes CSV output.",
      hint: "Review core principles of Exporting Clean Data & Final Project."
    },
    {
      id: 2,
      question: "Which method exports to Excel?",
      options: [
        {
          key: "A",
          text: "df.read_excel()"
        },
        {
          key: "B",
          text: "df.to_excel()"
        },
        {
          key: "C",
          text: "df.to_csv() only"
        },
        {
          key: "D",
          text: "df.describe()"
        }
      ],
      correct: 1,
      explanation: "to_excel writes an Excel file.",
      hint: "Review core principles of Exporting Clean Data & Final Project."
    },
    {
      id: 3,
      question: "Why use index=False during a simple CSV export?",
      options: [
        {
          key: "A",
          text: "It removes every row"
        },
        {
          key: "B",
          text: "It sorts columns"
        },
        {
          key: "C",
          text: "It avoids writing the DataFrame index as a separate column"
        },
        {
          key: "D",
          text: "It deletes duplicates"
        }
      ],
      correct: 2,
      explanation: "Often useful for clean deliverables.",
      hint: "Review core principles of Exporting Clean Data & Final Project."
    },
    {
      id: 4,
      question: "What should happen before exporting cleaned data?",
      options: [
        {
          key: "A",
          text: "Assume the results are correct"
        },
        {
          key: "B",
          text: "Ignore missing values"
        },
        {
          key: "C",
          text: "Delete source files"
        },
        {
          key: "D",
          text: "Validate cleaning and output schema"
        }
      ],
      correct: 3,
      explanation: "Quality checks matter.",
      hint: "Review core principles of Exporting Clean Data & Final Project."
    },
    {
      id: 5,
      question: "What is a good final-project deliverable?",
      options: [
        {
          key: "A",
          text: "Clean dataset plus documented findings"
        },
        {
          key: "B",
          text: "Unverified random numbers"
        },
        {
          key: "C",
          text: "A blank CSV"
        },
        {
          key: "D",
          text: "A screenshot without explanation"
        }
      ],
      correct: 0,
      explanation: "Results should be reproducible.",
      hint: "Review core principles of Exporting Clean Data & Final Project."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange project pipeline",
      prompt: "Load → Inspect → Clean → Analyze → Validate → Export.",
      tokens: ["Load", "Inspect", "Clean", "Analyze", "Validate", "Export."],
      shuffled: ["Export.", "Validate", "Analyze", "Clean", "Inspect", "Load"],
      expected: ["Load", "Inspect", "Clean", "Analyze", "Validate", "Export."],
      hint: "Arrange into correct logical sequence: This order."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match output",
      prompt: "to_csv()→CSV; to_excel()→Excel; index=False→omit index column.",
      tokens: ["to_csv()", "to_excel()", "index=False"],
      shuffled: ["index=False", "to_excel()", "to_csv()"],
      expected: ["to_csv()", "to_excel()", "index=False"],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 3,
      title: "Puzzle 3 — Choose correct export",
      prompt: "df.to_csv(\"clean_sales.csv\", index=False).",
      tokens: ["df.to_csv(\"clean_sales.csv\"", "index=False)`"],
      shuffled: ["index=False)`", "df.to_csv(\"clean_sales.csv\""],
      expected: ["df.to_csv(\"clean_sales.csv\"", "index=False)`"],
      hint: "Arrange into correct logical sequence: Writes CSV without an extra index column."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "How do you export a Data",
      meaning: "With df.to_csv(\"file.csv\", index=False)."
    },
    {
      id: 2,
      snippet: "How do you export to Exc",
      meaning: "With df.to_excel(\"file.xlsx\", index=False)."
    },
    {
      id: 3,
      snippet: "What should you verify b",
      meaning: "Data quality, column names, data types, row counts, and key calculations."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Save the Clean Report",
      prompt: "Which method should be used?",
      scenario: "A junior analyst has finished cleaning a sales DataFrame and needs to send a CSV file.",
      expectedResponse: "df.to_csv(\"clean_sales.csv\", index=False)"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "How do you export a DataFrame to CSV?",
      sampleAnswer: "With df.to_csv(\"file.csv\", index=False)."
    },
    {
      id: 2,
      question: "How do you export to Excel?",
      sampleAnswer: "With df.to_excel(\"file.xlsx\", index=False)."
    },
    {
      id: 3,
      question: "What should you verify before exporting?",
      sampleAnswer: "Data quality, column names, data types, row counts, and key calculations."
    },
    {
      id: 4,
      question: "What would a basic Pandas project include?",
      sampleAnswer: "Data loading, inspection, cleaning, analysis, validation, and export."
    }
    ]
  },
  '10.1': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 10,
    moduleName: "Python Data Visualization and Analytics",
    topicKey: "10.1",
    id: 71,
    topicTitle: "Why Data Visualization Matters",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What is Data Visualization?",
      options: [
        {
          key: "A",
          text: "Presenting data through visual forms such as charts"
        },
        {
          key: "B",
          text: "Deleting records"
        },
        {
          key: "C",
          text: "Writing only text reports"
        },
        {
          key: "D",
          text: "Repairing hardware"
        }
      ],
      correct: 0,
      explanation: "Visuals help communicate patterns.",
      hint: "Review core principles of Why Data Visualization Matters."
    },
    {
      id: 2,
      question: "Why do analysts use charts?",
      options: [
        {
          key: "A",
          text: "To guarantee profits"
        },
        {
          key: "B",
          text: "To make patterns and comparisons easier to understand"
        },
        {
          key: "C",
          text: "To hide data quality issues"
        },
        {
          key: "D",
          text: "To replace every calculation"
        }
      ],
      correct: 1,
      explanation: "Charts communicate insights.",
      hint: "Review core principles of Why Data Visualization Matters."
    },
    {
      id: 3,
      question: "Which visual best shows a change across months?",
      options: [
        {
          key: "A",
          text: "A random image"
        },
        {
          key: "B",
          text: "A company logo"
        },
        {
          key: "C",
          text: "A line chart"
        },
        {
          key: "D",
          text: "A blank page"
        }
      ],
      correct: 2,
      explanation: "Time trends suit line charts.",
      hint: "Review core principles of Why Data Visualization Matters."
    },
    {
      id: 4,
      question: "What is a risk of a misleading chart?",
      options: [
        {
          key: "A",
          text: "Better data quality"
        },
        {
          key: "B",
          text: "Automatic validation"
        },
        {
          key: "C",
          text: "More accurate labels"
        },
        {
          key: "D",
          text: "Incorrect interpretation of results"
        }
      ],
      correct: 3,
      explanation: "Poor scales can distort comparisons.",
      hint: "Review core principles of Why Data Visualization Matters."
    },
    {
      id: 5,
      question: "What should every chart communicate clearly?",
      options: [
        {
          key: "A",
          text: "What the data represents"
        },
        {
          key: "B",
          text: "The analyst's favorite color"
        },
        {
          key: "C",
          text: "A random number"
        },
        {
          key: "D",
          text: "Unrelated advertising"
        }
      ],
      correct: 0,
      explanation: "Labels and context matter.",
      hint: "Review core principles of Why Data Visualization Matters."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match goal to visual",
      prompt: "Compare categories→bar; show trend→line; show distribution→histogram.",
      tokens: ["Compare categories", "bar; show trend", "line; show distribution", "histogram."],
      shuffled: ["histogram.", "line; show distribution", "bar; show trend", "Compare categories"],
      expected: ["Compare categories", "bar; show trend", "line; show distribution", "histogram."],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 2,
      title: "Puzzle 2 — Spot misleading design",
      prompt: "Two bars with a truncated y-axis but no indication.",
      tokens: ["Two", "bars", "with", "truncated"],
      shuffled: ["truncated", "with", "bars", "Two"],
      expected: ["Two", "bars", "with", "truncated"],
      hint: "Arrange into correct logical sequence: Flag potentially exaggerated differences; inspect the scale."
    },
    {
      id: 3,
      title: "Puzzle 3 — Arrange communication flow",
      prompt: "Understand question → Choose visual → Label accurately → Explain finding.",
      tokens: ["Understand question", "Choose visual", "Label accurately", "Explain finding."],
      shuffled: ["Explain finding.", "Label accurately", "Choose visual", "Understand question"],
      expected: ["Understand question", "Choose visual", "Label accurately", "Explain finding."],
      hint: "Arrange into correct logical sequence: This order."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Data Visualization",
      meaning: "Using charts and other visuals to communicate data and insights."
    },
    {
      id: 2,
      snippet: "Why is Data Visualizatio",
      meaning: "It makes patterns, comparisons, and trends easier to understand."
    },
    {
      id: 3,
      snippet: "What makes a chart misle",
      meaning: "Inappropriate scales, missing context, or incorrect labels can distort mean"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Show Monthly Sales",
      prompt: "Which visual is most suitable?",
      scenario: "A manager wants to see whether sales rose or fell across six months.",
      expectedResponse: "Line chart"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is Data Visualization?",
      sampleAnswer: "Using charts and other visuals to communicate data and insights."
    },
    {
      id: 2,
      question: "Why is Data Visualization important?",
      sampleAnswer: "It makes patterns, comparisons, and trends easier to understand."
    },
    {
      id: 3,
      question: "What makes a chart misleading?",
      sampleAnswer: "Inappropriate scales, missing context, or incorrect labels can distort meaning."
    },
    {
      id: 4,
      question: "How do you choose a visualization?",
      sampleAnswer: "I consider the question, data type, and message I need to communicate."
    }
    ]
  },
  '10.2': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 10,
    moduleName: "Python Data Visualization and Analytics",
    topicKey: "10.2",
    id: 72,
    topicTitle: "Matplotlib Basics",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What is Matplotlib?",
      options: [
        {
          key: "A",
          text: "A Python plotting library"
        },
        {
          key: "B",
          text: "A database"
        },
        {
          key: "C",
          text: "A file format"
        },
        {
          key: "D",
          text: "An operating system"
        }
      ],
      correct: 0,
      explanation: "It creates charts.",
      hint: "Review core principles of Matplotlib Basics."
    },
    {
      id: 2,
      question: "What is the common pyplot alias?",
      options: [
        {
          key: "A",
          text: "np"
        },
        {
          key: "B",
          text: "plt"
        },
        {
          key: "C",
          text: "pd"
        },
        {
          key: "D",
          text: "csv"
        }
      ],
      correct: 1,
      explanation: "import matplotlib.pyplot as plt.",
      hint: "Review core principles of Matplotlib Basics."
    },
    {
      id: 3,
      question: "Which creates a basic line plot?",
      options: [
        {
          key: "A",
          text: "plt.table_only()"
        },
        {
          key: "B",
          text: "plt.read_csv()"
        },
        {
          key: "C",
          text: "plt.plot(x, y)"
        },
        {
          key: "D",
          text: "plt.merge(x, y)"
        }
      ],
      correct: 2,
      explanation: "plot draws lines/markers.",
      hint: "Review core principles of Matplotlib Basics."
    },
    {
      id: 4,
      question: "Which command displays a plot in many Python script environments?",
      options: [
        {
          key: "A",
          text: "plt.open()"
        },
        {
          key: "B",
          text: "plt.start()"
        },
        {
          key: "C",
          text: "plt.read()"
        },
        {
          key: "D",
          text: "plt.show()"
        }
      ],
      correct: 3,
      explanation: "show displays figures.",
      hint: "Review core principles of Matplotlib Basics."
    },
    {
      id: 5,
      question: "Which command saves a figure to an image file?",
      options: [
        {
          key: "A",
          text: "plt.savefig(\"chart.png\")"
        },
        {
          key: "B",
          text: "plt.to_csv()"
        },
        {
          key: "C",
          text: "plt.export_excel()"
        },
        {
          key: "D",
          text: "plt.info()"
        }
      ],
      correct: 0,
      explanation: "savefig writes the plot.",
      hint: "Review core principles of Matplotlib Basics."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange plotting steps",
      prompt: "Import pyplot → Create plot → Add labels → Show plot.",
      tokens: ["Import pyplot", "Create plot", "Add labels", "Show plot."],
      shuffled: ["Show plot.", "Add labels", "Create plot", "Import pyplot"],
      expected: ["Import pyplot", "Create plot", "Add labels", "Show plot."],
      hint: "Arrange into correct logical sequence: This order."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match functions",
      prompt: "plot()→line, bar()→bar chart, show()→display.",
      tokens: ["plot()", "line, bar()", "bar chart, show()", "display."],
      shuffled: ["display.", "bar chart, show()", "line, bar()", "plot()"],
      expected: ["plot()", "line, bar()", "bar chart, show()", "display."],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 3,
      title: "Puzzle 3 — Complete import",
      prompt: "import matplotlib.pyplot as ___.",
      tokens: ["import", "matplotlib.pyplot", "as", "___`"],
      shuffled: ["___`", "as", "matplotlib.pyplot", "import"],
      expected: ["import", "matplotlib.pyplot", "as", "___`"],
      hint: "Arrange into correct logical sequence: plt."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Matplotlib",
      meaning: "A Python library for creating plots and charts."
    },
    {
      id: 2,
      snippet: "How do you import pyplot",
      meaning: "With import matplotlib.pyplot as plt."
    },
    {
      id: 3,
      snippet: "What does plt.plot() do",
      meaning: "It creates a line plot from data points."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Display a Chart",
      prompt: "Which command is commonly used?",
      scenario: "An analyst has written plt.plot(x, y) in a Python script and wants to display it.",
      expectedResponse: "plt.show()"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is Matplotlib?",
      sampleAnswer: "A Python library for creating plots and charts."
    },
    {
      id: 2,
      question: "How do you import pyplot?",
      sampleAnswer: "With import matplotlib.pyplot as plt."
    },
    {
      id: 3,
      question: "What does plt.plot() do?",
      sampleAnswer: "It creates a line plot from data points."
    },
    {
      id: 4,
      question: "How do you save a chart?",
      sampleAnswer: "With plt.savefig(\"filename.png\")."
    }
    ]
  },
  '10.3': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 10,
    moduleName: "Python Data Visualization and Analytics",
    topicKey: "10.3",
    id: 73,
    topicTitle: "Bar and Column Charts",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What is a bar chart useful for?",
      options: [
        {
          key: "A",
          text: "Comparing values across categories"
        },
        {
          key: "B",
          text: "Showing only dates"
        },
        {
          key: "C",
          text: "Storing passwords"
        },
        {
          key: "D",
          text: "Reading CSV files"
        }
      ],
      correct: 0,
      explanation: "Bars compare categories.",
      hint: "Review core principles of Bar and Column Charts."
    },
    {
      id: 2,
      question: "Which Matplotlib function makes vertical bars?",
      options: [
        {
          key: "A",
          text: "plt.line()"
        },
        {
          key: "B",
          text: "plt.bar()"
        },
        {
          key: "C",
          text: "plt.scatter()"
        },
        {
          key: "D",
          text: "plt.hist() only"
        }
      ],
      correct: 1,
      explanation: "bar draws vertical columns.",
      hint: "Review core principles of Bar and Column Charts."
    },
    {
      id: 3,
      question: "Which function makes horizontal bars?",
      options: [
        {
          key: "A",
          text: "plt.plot()"
        },
        {
          key: "B",
          text: "plt.box()"
        },
        {
          key: "C",
          text: "plt.barh()"
        },
        {
          key: "D",
          text: "plt.circle()"
        }
      ],
      correct: 2,
      explanation: "barh draws horizontal bars.",
      hint: "Review core principles of Bar and Column Charts."
    },
    {
      id: 4,
      question: "For a standard bar chart comparing quantities, where should the value axis usually start?",
      options: [
        {
          key: "A",
          text: "At the largest value"
        },
        {
          key: "B",
          text: "At a random value"
        },
        {
          key: "C",
          text: "At the average"
        },
        {
          key: "D",
          text: "At zero"
        }
      ],
      correct: 3,
      explanation: "Bar lengths encode magnitude.",
      hint: "Review core principles of Bar and Column Charts."
    },
    {
      id: 5,
      question: "Which data fits a bar chart?",
      options: [
        {
          key: "A",
          text: "Sales by product category"
        },
        {
          key: "B",
          text: "An unstructured paragraph only"
        },
        {
          key: "C",
          text: "A Python error message only"
        },
        {
          key: "D",
          text: "One photo"
        }
      ],
      correct: 0,
      explanation: "Categories with values are appropriate.",
      hint: "Review core principles of Bar and Column Charts."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match categories to heights",
      prompt: "Pen 10, Book 20, Bag 5.",
      tokens: ["Pen", "10", "Book", "20"],
      shuffled: ["20", "Book", "10", "Pen"],
      expected: ["Pen", "10", "Book", "20"],
      hint: "Arrange into correct logical sequence: Book tallest; Pen middle; Bag shortest."
    },
    {
      id: 2,
      title: "Puzzle 2 — Arrange bar code",
      prompt: "plt.bar([\"Pen\",\"Book\"], [10,20]) then plt.show().",
      tokens: ["plt.bar([\"Pen\",\"Book\"], [10,20])", "plt.show()"],
      shuffled: ["plt.show()", "plt.bar([\"Pen\",\"Book\"], [10,20])"],
      expected: ["plt.bar([\"Pen\",\"Book\"], [10,20])", "plt.show()"],
      hint: "Arrange into correct logical sequence: Create then display."
    },
    {
      id: 3,
      title: "Puzzle 3 — Choose orientation",
      prompt: "Long category labels.",
      tokens: ["Long", "category", "labels"],
      shuffled: ["labels", "category", "Long"],
      expected: ["Long", "category", "labels"],
      hint: "Arrange into correct logical sequence: Horizontal barh() is often easier to read."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "a bar chart",
      meaning: "A chart that compares values across discrete categories using bar lengths."
    },
    {
      id: 2,
      snippet: "How do you create vertic",
      meaning: "With plt.bar(categories, values)."
    },
    {
      id: 3,
      snippet: "When are horizontal bars",
      meaning: "When category labels are long or numerous."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Compare Product Sales",
      prompt: "Which bar should be tallest?",
      scenario: "A shop sold Pens=10, Books=20, Bags=5.",
      expectedResponse: "Book"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a bar chart?",
      sampleAnswer: "A chart that compares values across discrete categories using bar lengths."
    },
    {
      id: 2,
      question: "How do you create vertical bars in Matplotlib?",
      sampleAnswer: "With plt.bar(categories, values)."
    },
    {
      id: 3,
      question: "When are horizontal bars helpful?",
      sampleAnswer: "When category labels are long or numerous."
    },
    {
      id: 4,
      question: "Why should bar chart value axes usually start at zero?",
      sampleAnswer: "To avoid exaggerating differences in bar lengths."
    }
    ]
  },
  '10.4': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 10,
    moduleName: "Python Data Visualization and Analytics",
    topicKey: "10.4",
    id: 74,
    topicTitle: "Line Charts and Trends",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What does a line chart commonly show?",
      options: [
        {
          key: "A",
          text: "Changes across an ordered sequence, often time"
        },
        {
          key: "B",
          text: "Only categories without order"
        },
        {
          key: "C",
          text: "A file directory"
        },
        {
          key: "D",
          text: "An image filter"
        }
      ],
      correct: 0,
      explanation: "Lines reveal trends.",
      hint: "Review core principles of Line Charts and Trends."
    },
    {
      id: 2,
      question: "Which Matplotlib function creates a line plot?",
      options: [
        {
          key: "A",
          text: "plt.bar()"
        },
        {
          key: "B",
          text: "plt.plot()"
        },
        {
          key: "C",
          text: "plt.hist()"
        },
        {
          key: "D",
          text: "plt.pie() only"
        }
      ],
      correct: 1,
      explanation: "plot connects points.",
      hint: "Review core principles of Line Charts and Trends."
    },
    {
      id: 3,
      question: "Sales are 10, 15, 20 across three months. What is the trend?",
      options: [
        {
          key: "A",
          text: "Falling"
        },
        {
          key: "B",
          text: "Flat"
        },
        {
          key: "C",
          text: "Increasing"
        },
        {
          key: "D",
          text: "Unknown values"
        }
      ],
      correct: 2,
      explanation: "Each month is higher.",
      hint: "Review core principles of Line Charts and Trends."
    },
    {
      id: 4,
      question: "What belongs on the x-axis for monthly sales?",
      options: [
        {
          key: "A",
          text: "Product logo"
        },
        {
          key: "B",
          text: "Random colors"
        },
        {
          key: "C",
          text: "Only revenue"
        },
        {
          key: "D",
          text: "Months"
        }
      ],
      correct: 3,
      explanation: "Time is the horizontal sequence.",
      hint: "Review core principles of Line Charts and Trends."
    },
    {
      id: 5,
      question: "Why should points be ordered by time?",
      options: [
        {
          key: "A",
          text: "To show the true chronological trend"
        },
        {
          key: "B",
          text: "To make all values equal"
        },
        {
          key: "C",
          text: "To remove missing data"
        },
        {
          key: "D",
          text: "To guarantee growth"
        }
      ],
      correct: 0,
      explanation: "Order matters for time series.",
      hint: "Review core principles of Line Charts and Trends."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Order months",
      prompt: "March, January, February → January, February, March.",
      tokens: ["March, January, February", "January, February, March."],
      shuffled: ["January, February, March.", "March, January, February"],
      expected: ["March, January, February", "January, February, March."],
      hint: "Arrange into correct logical sequence: Chronological order."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match trend",
      prompt: "5→8→12 rising; 12→8→5 falling; 7→7→7 flat.",
      tokens: ["5", "8", "12 rising; 12", "8", "5 falling; 7", "7", "7 flat."],
      shuffled: ["7 flat.", "7", "5 falling; 7", "8", "12 rising; 12", "8", "5"],
      expected: ["5", "8", "12 rising; 12", "8", "5 falling; 7", "7", "7 flat."],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 3,
      title: "Puzzle 3 — Choose axes",
      prompt: "Monthly revenue line chart.",
      tokens: ["Monthly", "revenue", "line", "chart"],
      shuffled: ["chart", "line", "revenue", "Monthly"],
      expected: ["Monthly", "revenue", "line", "chart"],
      hint: "Arrange into correct logical sequence: x=Month; y=Revenue."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "a line chart",
      meaning: "A chart connecting data points to show changes across an ordered variable."
    },
    {
      id: 2,
      snippet: "When is a line chart use",
      meaning: "For showing trends over time."
    },
    {
      id: 3,
      snippet: "a trend",
      meaning: "A general direction of change in data."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Read a Sales Trend",
      prompt: "What does the line chart show?",
      scenario: "A shop's weekly sales are 10, 15, 20.",
      expectedResponse: "Increasing sales"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a line chart?",
      sampleAnswer: "A chart connecting data points to show changes across an ordered variable."
    },
    {
      id: 2,
      question: "When is a line chart useful?",
      sampleAnswer: "For showing trends over time."
    },
    {
      id: 3,
      question: "What is a trend?",
      sampleAnswer: "A general direction of change in data."
    },
    {
      id: 4,
      question: "How do you plot a line in Matplotlib?",
      sampleAnswer: "With plt.plot(x, y)."
    }
    ]
  },
  '10.5': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 10,
    moduleName: "Python Data Visualization and Analytics",
    topicKey: "10.5",
    id: 75,
    topicTitle: "Histograms and Distributions",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What does a histogram show?",
      options: [
        {
          key: "A",
          text: "Distribution of numerical values across intervals"
        },
        {
          key: "B",
          text: "Only names"
        },
        {
          key: "C",
          text: "A calendar"
        },
        {
          key: "D",
          text: "A network diagram"
        }
      ],
      correct: 0,
      explanation: "It groups values into bins.",
      hint: "Review core principles of Histograms and Distributions."
    },
    {
      id: 2,
      question: "What is a bin in a histogram?",
      options: [
        {
          key: "A",
          text: "A CSV file"
        },
        {
          key: "B",
          text: "An interval of values"
        },
        {
          key: "C",
          text: "A legend"
        },
        {
          key: "D",
          text: "A Python loop"
        }
      ],
      correct: 1,
      explanation: "Counts are grouped by interval.",
      hint: "Review core principles of Histograms and Distributions."
    },
    {
      id: 3,
      question: "Which function creates a histogram?",
      options: [
        {
          key: "A",
          text: "plt.barh()"
        },
        {
          key: "B",
          text: "plt.scatter()"
        },
        {
          key: "C",
          text: "plt.hist()"
        },
        {
          key: "D",
          text: "plt.merge()"
        }
      ],
      correct: 2,
      explanation: "hist bins numeric observations.",
      hint: "Review core principles of Histograms and Distributions."
    },
    {
      id: 4,
      question: "What does a taller histogram bar usually indicate when plotting counts?",
      options: [
        {
          key: "A",
          text: "Lower values always"
        },
        {
          key: "B",
          text: "More missing data"
        },
        {
          key: "C",
          text: "A higher category name"
        },
        {
          key: "D",
          text: "More observations in that interval"
        }
      ],
      correct: 3,
      explanation: "Bar height represents frequency.",
      hint: "Review core principles of Histograms and Distributions."
    },
    {
      id: 5,
      question: "Which dataset fits a histogram?",
      options: [
        {
          key: "A",
          text: "Student test scores"
        },
        {
          key: "B",
          text: "Product category labels only"
        },
        {
          key: "C",
          text: "City names only"
        },
        {
          key: "D",
          text: "File extensions only"
        }
      ],
      correct: 0,
      explanation: "Scores are numerical measurements.",
      hint: "Review core principles of Histograms and Distributions."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Sort scores into bins",
      prompt: "Scores 12,18,24; bins 10–19 and 20–29.",
      tokens: ["Scores 12,18,24", "bins 10–19 and 20–29."],
      shuffled: ["bins 10–19 and 20–29.", "Scores 12,18,24"],
      expected: ["Scores 12,18,24", "bins 10–19 and 20–29."],
      hint: "Arrange into correct logical sequence: First bin 12,18 (2); second 24 (1)."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match chart to question",
      prompt: "Histogram→score distribution; bar chart→sales by product.",
      tokens: ["Histogram", "score distribution; bar chart", "sales by product."],
      shuffled: ["sales by product.", "score distribution; bar chart", "Histogram"],
      expected: ["Histogram", "score distribution; bar chart", "sales by product."],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 3,
      title: "Puzzle 3 — Choose function",
      prompt: "Plot numeric ages as frequency distribution.",
      tokens: ["Plot", "numeric", "ages", "as"],
      shuffled: ["as", "ages", "numeric", "Plot"],
      expected: ["Plot", "numeric", "ages", "as"],
      hint: "Arrange into correct logical sequence: plt.hist(ages)."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "a histogram",
      meaning: "A chart showing the frequency distribution of numerical values across bins."
    },
    {
      id: 2,
      snippet: "a bin",
      meaning: "A range of numerical values grouped together."
    },
    {
      id: 3,
      snippet: "How is a histogram diffe",
      meaning: "Histograms show numeric intervals; bar charts compare categories."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Count Scores in a Range",
      prompt: "How many scores fall between 10 and 19 inclusive?",
      scenario: "Student scores are 12, 18, 24.",
      expectedResponse: "2"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a histogram?",
      sampleAnswer: "A chart showing the frequency distribution of numerical values across bins."
    },
    {
      id: 2,
      question: "What is a bin?",
      sampleAnswer: "A range of numerical values grouped together."
    },
    {
      id: 3,
      question: "How is a histogram different from a bar chart?",
      sampleAnswer: "Histograms show numeric intervals; bar charts compare categories."
    },
    {
      id: 4,
      question: "How do you create a histogram in Matplotlib?",
      sampleAnswer: "With plt.hist(values, bins=...)."
    }
    ]
  },
  '10.6': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 10,
    moduleName: "Python Data Visualization and Analytics",
    topicKey: "10.6",
    id: 76,
    topicTitle: "Scatter Plots and Relationships",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What does a scatter plot display?",
      options: [
        {
          key: "A",
          text: "Paired numerical observations as points"
        },
        {
          key: "B",
          text: "Only words"
        },
        {
          key: "C",
          text: "A file tree"
        },
        {
          key: "D",
          text: "A single category total"
        }
      ],
      correct: 0,
      explanation: "It shows relationships between two variables.",
      hint: "Review core principles of Scatter Plots and Relationships."
    },
    {
      id: 2,
      question: "Which function creates a scatter plot?",
      options: [
        {
          key: "A",
          text: "plt.hist()"
        },
        {
          key: "B",
          text: "plt.scatter()"
        },
        {
          key: "C",
          text: "plt.barh()"
        },
        {
          key: "D",
          text: "plt.read_csv()"
        }
      ],
      correct: 1,
      explanation: "scatter plots points.",
      hint: "Review core principles of Scatter Plots and Relationships."
    },
    {
      id: 3,
      question: "If points tend to rise from left to right, what relationship may be present?",
      options: [
        {
          key: "A",
          text: "No variables"
        },
        {
          key: "B",
          text: "Negative association"
        },
        {
          key: "C",
          text: "Positive association"
        },
        {
          key: "D",
          text: "Guaranteed causation"
        }
      ],
      correct: 2,
      explanation: "Both variables tend to increase together.",
      hint: "Review core principles of Scatter Plots and Relationships."
    },
    {
      id: 4,
      question: "What should you avoid concluding from correlation alone?",
      options: [
        {
          key: "A",
          text: "That values are associated"
        },
        {
          key: "B",
          text: "That points have coordinates"
        },
        {
          key: "C",
          text: "That a pattern exists"
        },
        {
          key: "D",
          text: "That one variable definitely causes the other"
        }
      ],
      correct: 3,
      explanation: "Association does not prove causation.",
      hint: "Review core principles of Scatter Plots and Relationships."
    },
    {
      id: 5,
      question: "Which data is suitable for a scatter plot?",
      options: [
        {
          key: "A",
          text: "Advertising spend and sales for multiple observations"
        },
        {
          key: "B",
          text: "Product names only"
        },
        {
          key: "C",
          text: "One company logo"
        },
        {
          key: "D",
          text: "A list of text comments only"
        }
      ],
      correct: 0,
      explanation: "Both variables are numeric.",
      hint: "Review core principles of Scatter Plots and Relationships."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match point trends",
      prompt: "Rising pattern→positive association; falling pattern→negative; random cloud→no clear linear association.",
      tokens: ["Rising pattern", "positive association; falling pattern", "negative; random cloud", "no clear linear association."],
      shuffled: ["no clear linear association.", "negative; random cloud", "positive association; falling pattern", "Rising pattern"],
      expected: ["Rising pattern", "positive association; falling pattern", "negative; random cloud", "no clear linear association."],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 2,
      title: "Puzzle 2 — Choose axes",
      prompt: "Compare study hours and exam scores.",
      tokens: ["Compare", "study", "hours", "and"],
      shuffled: ["and", "hours", "study", "Compare"],
      expected: ["Compare", "study", "hours", "and"],
      hint: "Arrange into correct logical sequence: x=Study Hours; y=Exam Score."
    },
    {
      id: 3,
      title: "Puzzle 3 — Identify safe conclusion",
      prompt: "Points rise together; choose association vs proven causation.",
      tokens: ["Points rise together", "choose association vs proven causation."],
      shuffled: ["choose association vs proven causation.", "Points rise together"],
      expected: ["Points rise together", "choose association vs proven causation."],
      hint: "Arrange into correct logical sequence: Positive association, not proven causation."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "a scatter plot",
      meaning: "A chart showing pairs of numerical values as points."
    },
    {
      id: 2,
      snippet: "When do you use a scatte",
      meaning: "To explore a relationship between two numerical variables."
    },
    {
      id: 3,
      snippet: "positive correlation",
      meaning: "A tendency for two variables to increase together."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Compare Study Time and Marks",
      prompt: "What pattern appears in these observations?",
      scenario: "Three students studied 1, 2, 3 hours and scored 40, 50, 60.",
      expectedResponse: "Positive association"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a scatter plot?",
      sampleAnswer: "A chart showing pairs of numerical values as points."
    },
    {
      id: 2,
      question: "When do you use a scatter plot?",
      sampleAnswer: "To explore a relationship between two numerical variables."
    },
    {
      id: 3,
      question: "What is positive correlation?",
      sampleAnswer: "A tendency for two variables to increase together."
    },
    {
      id: 4,
      question: "Does correlation prove causation?",
      sampleAnswer: "No. Other factors may explain the relationship."
    }
    ]
  },
  '10.7': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 10,
    moduleName: "Python Data Visualization and Analytics",
    topicKey: "10.7",
    id: 77,
    topicTitle: "Labels, Legends and Titles",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What does a chart title explain?",
      options: [
        {
          key: "A",
          text: "What the chart is about"
        },
        {
          key: "B",
          text: "The Python version only"
        },
        {
          key: "C",
          text: "The file size"
        },
        {
          key: "D",
          text: "A hidden password"
        }
      ],
      correct: 0,
      explanation: "Titles provide context.",
      hint: "Review core principles of Labels, Legends and Titles."
    },
    {
      id: 2,
      question: "Which function labels the x-axis?",
      options: [
        {
          key: "A",
          text: "plt.title()"
        },
        {
          key: "B",
          text: "plt.xlabel()"
        },
        {
          key: "C",
          text: "plt.ylabel()"
        },
        {
          key: "D",
          text: "plt.legend() only"
        }
      ],
      correct: 1,
      explanation: "xlabel sets horizontal axis label.",
      hint: "Review core principles of Labels, Legends and Titles."
    },
    {
      id: 3,
      question: "Which function labels the y-axis?",
      options: [
        {
          key: "A",
          text: "plt.xlabel()"
        },
        {
          key: "B",
          text: "plt.show()"
        },
        {
          key: "C",
          text: "plt.ylabel()"
        },
        {
          key: "D",
          text: "plt.bar()"
        }
      ],
      correct: 2,
      explanation: "ylabel sets vertical axis label.",
      hint: "Review core principles of Labels, Legends and Titles."
    },
    {
      id: 4,
      question: "What is a legend useful for?",
      options: [
        {
          key: "A",
          text: "Saving data"
        },
        {
          key: "B",
          text: "Deleting plots"
        },
        {
          key: "C",
          text: "Changing data values"
        },
        {
          key: "D",
          text: "Identifying multiple plotted series"
        }
      ],
      correct: 3,
      explanation: "Legends map labels to marks.",
      hint: "Review core principles of Labels, Legends and Titles."
    },
    {
      id: 5,
      question: "Which function sets a chart title?",
      options: [
        {
          key: "A",
          text: "plt.title()"
        },
        {
          key: "B",
          text: "plt.legend()"
        },
        {
          key: "C",
          text: "plt.grid() only"
        },
        {
          key: "D",
          text: "plt.plot() only"
        }
      ],
      correct: 0,
      explanation: "title provides heading.",
      hint: "Review core principles of Labels, Legends and Titles."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match function to purpose",
      prompt: "title()→heading, xlabel()→x label, ylabel()→y label.",
      tokens: ["title()", "heading, xlabel()", "x label, ylabel()", "y label."],
      shuffled: ["y label.", "x label, ylabel()", "heading, xlabel()", "title()"],
      expected: ["title()", "heading, xlabel()", "x label, ylabel()", "y label."],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 2,
      title: "Puzzle 2 — Label a sales chart",
      prompt: "x=Month, y=Sales (₹), title=Monthly Sales.",
      tokens: ["x=Month", "y=Sales", "title=Monthly", "Sales"],
      shuffled: ["Sales", "title=Monthly", "y=Sales", "x=Month"],
      expected: ["x=Month", "y=Sales", "title=Monthly", "Sales"],
      hint: "Arrange into correct logical sequence: Apply those labels to respective elements."
    },
    {
      id: 3,
      title: "Puzzle 3 — Choose legend need",
      prompt: "Two lines for Store A and Store B.",
      tokens: ["Two", "lines", "for", "Store"],
      shuffled: ["Store", "for", "lines", "Two"],
      expected: ["Two", "lines", "for", "Store"],
      hint: "Arrange into correct logical sequence: Add a legend identifying both lines."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Why are chart titles imp",
      meaning: "They explain the subject and purpose of the chart."
    },
    {
      id: 2,
      snippet: "How do you label axes in",
      meaning: "With plt.xlabel() and plt.ylabel()."
    },
    {
      id: 3,
      snippet: "a legend",
      meaning: "A guide identifying plotted series or categories."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Fix a Confusing Chart",
      prompt: "Which label should be added?",
      scenario: "A chart shows monthly revenue but the y-axis has no label.",
      expectedResponse: "Revenue (₹)"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Why are chart titles important?",
      sampleAnswer: "They explain the subject and purpose of the chart."
    },
    {
      id: 2,
      question: "How do you label axes in Matplotlib?",
      sampleAnswer: "With plt.xlabel() and plt.ylabel()."
    },
    {
      id: 3,
      question: "What is a legend?",
      sampleAnswer: "A guide identifying plotted series or categories."
    },
    {
      id: 4,
      question: "What should good labels include?",
      sampleAnswer: "Clear variable names and units where relevant."
    }
    ]
  },
  '10.8': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 10,
    moduleName: "Python Data Visualization and Analytics",
    topicKey: "10.8",
    id: 78,
    topicTitle: "Choosing the Right Chart",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "Which chart is best for comparing sales across product categories?",
      options: [
        {
          key: "A",
          text: "Bar chart"
        },
        {
          key: "B",
          text: "Histogram"
        },
        {
          key: "C",
          text: "Scatter plot"
        },
        {
          key: "D",
          text: "A random picture"
        }
      ],
      correct: 0,
      explanation: "Categories suit bars.",
      hint: "Review core principles of Choosing the Right Chart."
    },
    {
      id: 2,
      question: "Which chart is best for monthly revenue trends?",
      options: [
        {
          key: "A",
          text: "Histogram"
        },
        {
          key: "B",
          text: "Line chart"
        },
        {
          key: "C",
          text: "Scatter plot only"
        },
        {
          key: "D",
          text: "A blank table"
        }
      ],
      correct: 1,
      explanation: "Time trends suit lines.",
      hint: "Review core principles of Choosing the Right Chart."
    },
    {
      id: 3,
      question: "Which chart is best for the distribution of employee ages?",
      options: [
        {
          key: "A",
          text: "Line chart by random order"
        },
        {
          key: "B",
          text: "Logo"
        },
        {
          key: "C",
          text: "Histogram"
        },
        {
          key: "D",
          text: "Pie chart only"
        }
      ],
      correct: 2,
      explanation: "Numeric distributions suit histograms.",
      hint: "Review core principles of Choosing the Right Chart."
    },
    {
      id: 4,
      question: "Which chart explores the relationship between price and demand across observations?",
      options: [
        {
          key: "A",
          text: "Bar chart only"
        },
        {
          key: "B",
          text: "Histogram only"
        },
        {
          key: "C",
          text: "Line chart of unrelated categories"
        },
        {
          key: "D",
          text: "Scatter plot"
        }
      ],
      correct: 3,
      explanation: "Paired numeric variables suit scatter.",
      hint: "Review core principles of Choosing the Right Chart."
    },
    {
      id: 5,
      question: "What should determine chart choice?",
      options: [
        {
          key: "A",
          text: "Analytical question and data type"
        },
        {
          key: "B",
          text: "Random colors"
        },
        {
          key: "C",
          text: "The longest chart title"
        },
        {
          key: "D",
          text: "The file name"
        }
      ],
      correct: 0,
      explanation: "Purpose comes first.",
      hint: "Review core principles of Choosing the Right Chart."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match question to chart",
      prompt: "Compare products→bar; trend over months→line; distribution of ages→histogram; association of two numbers→scatter.",
      tokens: ["Compare products", "bar; trend over months", "line; distribution of ages", "histogram; association of two numbers", "scatter."],
      shuffled: ["scatter.", "histogram; association of two numbers", "line; distribution of ages", "bar; trend over months", "Compare products"],
      expected: ["Compare products", "bar; trend over months", "line; distribution of ages", "histogram; association of two numbers", "scatter."],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 2,
      title: "Puzzle 2 — Sort chart mistakes",
      prompt: "Using a histogram for city names; using line chart for monthly trend; using scatter for two numeric variables.",
      tokens: ["Using a histogram for city names", "using line chart for monthly trend", "using scatter for two numeric variables."],
      shuffled: ["using scatter for two numeric variables.", "using line chart for monthly trend", "Using a histogram for city names"],
      expected: ["Using a histogram for city names", "using line chart for monthly trend", "using scatter for two numeric variables."],
      hint: "Arrange into correct logical sequence: First unsuitable, latter two suitable."
    },
    {
      id: 3,
      title: "Puzzle 3 — Select best chart",
      prompt: "Show sales by five stores.",
      tokens: ["Show", "sales", "by", "five"],
      shuffled: ["five", "by", "sales", "Show"],
      expected: ["Show", "sales", "by", "five"],
      hint: "Arrange into correct logical sequence: Bar chart."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "How do you choose the ri",
      meaning: "Based on the data type and the question being answered."
    },
    {
      id: 2,
      snippet: "When should you use a ba",
      meaning: "To compare values across categories."
    },
    {
      id: 3,
      snippet: "When should you use a hi",
      meaning: "To show the distribution of numerical observations."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Pick a Chart for Stores",
      prompt: "Which chart should the analyst choose?",
      scenario: "A company wants to compare total sales of four stores.",
      expectedResponse: "Bar chart"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "How do you choose the right chart?",
      sampleAnswer: "Based on the data type and the question being answered."
    },
    {
      id: 2,
      question: "When should you use a bar chart?",
      sampleAnswer: "To compare values across categories."
    },
    {
      id: 3,
      question: "When should you use a histogram?",
      sampleAnswer: "To show the distribution of numerical observations."
    },
    {
      id: 4,
      question: "When should you use a scatter plot?",
      sampleAnswer: "To explore relationships between two numeric variables."
    }
    ]
  },
  '10.9': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 10,
    moduleName: "Python Data Visualization and Analytics",
    topicKey: "10.9",
    id: 79,
    topicTitle: "Exploratory Data Analysis with Pandas",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What is EDA?",
      options: [
        {
          key: "A",
          text: "Exploring a dataset to understand patterns and potential issues"
        },
        {
          key: "B",
          text: "Exporting without checking"
        },
        {
          key: "C",
          text: "A file format"
        },
        {
          key: "D",
          text: "A Python error"
        }
      ],
      correct: 0,
      explanation: "EDA is exploratory.",
      hint: "Review core principles of Exploratory Data Analysis with Pandas."
    },
    {
      id: 2,
      question: "Which method previews the first rows?",
      options: [
        {
          key: "A",
          text: "df.tail() only"
        },
        {
          key: "B",
          text: "df.head()"
        },
        {
          key: "C",
          text: "df.merge()"
        },
        {
          key: "D",
          text: "df.to_csv() only"
        }
      ],
      correct: 1,
      explanation: "head gives a quick look.",
      hint: "Review core principles of Exploratory Data Analysis with Pandas."
    },
    {
      id: 3,
      question: "Which method summarizes numerical columns?",
      options: [
        {
          key: "A",
          text: "df.rename()"
        },
        {
          key: "B",
          text: "df.drop()"
        },
        {
          key: "C",
          text: "df.describe()"
        },
        {
          key: "D",
          text: "df.sample() only"
        }
      ],
      correct: 2,
      explanation: "It provides summary statistics.",
      hint: "Review core principles of Exploratory Data Analysis with Pandas."
    },
    {
      id: 4,
      question: "Which method counts missing values by column?",
      options: [
        {
          key: "A",
          text: "df.plot()"
        },
        {
          key: "B",
          text: "df.sort_values()"
        },
        {
          key: "C",
          text: "df.head()"
        },
        {
          key: "D",
          text: "df.isna().sum()"
        }
      ],
      correct: 3,
      explanation: "Boolean missing indicators are summed.",
      hint: "Review core principles of Exploratory Data Analysis with Pandas."
    },
    {
      id: 5,
      question: "Why visualize data during EDA?",
      options: [
        {
          key: "A",
          text: "To spot trends, distributions, and unusual observations"
        },
        {
          key: "B",
          text: "To guarantee causation"
        },
        {
          key: "C",
          text: "To remove every missing value automatically"
        },
        {
          key: "D",
          text: "To skip data validation"
        }
      ],
      correct: 0,
      explanation: "Visual inspection helps exploration.",
      hint: "Review core principles of Exploratory Data Analysis with Pandas."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange EDA workflow",
      prompt: "Load → Preview → Check types/missing → Summarize → Visualize → Note findings.",
      tokens: ["Load", "Preview", "Check types/missing", "Summarize", "Visualize", "Note findings."],
      shuffled: ["Note findings.", "Visualize", "Summarize", "Check types/missing", "Preview", "Load"],
      expected: ["Load", "Preview", "Check types/missing", "Summarize", "Visualize", "Note findings."],
      hint: "Arrange into correct logical sequence: This order."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match question to tool",
      prompt: "First rows→head; data types→info; numeric summary→describe.",
      tokens: ["First rows", "head; data types", "info; numeric summary", "describe."],
      shuffled: ["describe.", "info; numeric summary", "head; data types", "First rows"],
      expected: ["First rows", "head; data types", "info; numeric summary", "describe."],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 3,
      title: "Puzzle 3 — Interpret basic summary",
      prompt: "Sales 10,20,30.",
      tokens: ["Sales", "10,20,30"],
      shuffled: ["10,20,30", "Sales"],
      expected: ["Sales", "10,20,30"],
      hint: "Arrange into correct logical sequence: Mean 20; maximum 30."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Exploratory Data Analysi",
      meaning: "The process of examining data to understand its structure, patterns, and po"
    },
    {
      id: 2,
      snippet: "common EDA steps",
      meaning: "Inspect rows, check data types and missing values, calculate summaries, and"
    },
    {
      id: 3,
      snippet: "Which Pandas methods hel",
      meaning: "head(), info(), describe(), and isna()."
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Find Missing Values Before Plotting",
      prompt: "Which command helps count missing values by column?",
      scenario: "A DataFrame has missing sales values.",
      expectedResponse: "df.isna().sum()"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is Exploratory Data Analysis?",
      sampleAnswer: "The process of examining data to understand its structure, patterns, and potential problems."
    },
    {
      id: 2,
      question: "What are common EDA steps?",
      sampleAnswer: "Inspect rows, check data types and missing values, calculate summaries, and visualize distributions."
    },
    {
      id: 3,
      question: "Which Pandas methods help with EDA?",
      sampleAnswer: "head(), info(), describe(), and isna()."
    },
    {
      id: 4,
      question: "Why is EDA important before reporting?",
      sampleAnswer: "It helps detect errors and understand what the data can support."
    }
    ]
  },
  '10.10': {
    tabId: 1,
    tabName: "Data Analytics Foundations",
    moduleId: 10,
    moduleName: "Python Data Visualization and Analytics",
    topicKey: "10.10",
    id: 80,
    topicTitle: "Python Data Analysis Mini Project",
    mode: "Coding/tool practice",
    game1Quiz: [
    {
      id: 1,
      question: "What should a data analysis project start with?",
      options: [
        {
          key: "A",
          text: "A clear business question"
        },
        {
          key: "B",
          text: "A random chart"
        },
        {
          key: "C",
          text: "A final conclusion"
        },
        {
          key: "D",
          text: "A blank export"
        }
      ],
      correct: 0,
      explanation: "The question guides the work.",
      hint: "Review core principles of Python Data Analysis Mini Project."
    },
    {
      id: 2,
      question: "What should happen after loading a dataset?",
      options: [
        {
          key: "A",
          text: "Assume every value is valid"
        },
        {
          key: "B",
          text: "Inspect and validate the data"
        },
        {
          key: "C",
          text: "Delete all rows"
        },
        {
          key: "D",
          text: "Publish immediately"
        }
      ],
      correct: 1,
      explanation: "Quality checks come early.",
      hint: "Review core principles of Python Data Analysis Mini Project."
    },
    {
      id: 3,
      question: "Which chart is suitable for comparing revenue across stores?",
      options: [
        {
          key: "A",
          text: "Histogram only"
        },
        {
          key: "B",
          text: "Scatter plot only"
        },
        {
          key: "C",
          text: "Bar chart"
        },
        {
          key: "D",
          text: "A random photo"
        }
      ],
      correct: 2,
      explanation: "Stores are categories.",
      hint: "Review core principles of Python Data Analysis Mini Project."
    },
    {
      id: 4,
      question: "What is a responsible project conclusion?",
      options: [
        {
          key: "A",
          text: "An unsupported guess"
        },
        {
          key: "B",
          text: "A claim of guaranteed growth"
        },
        {
          key: "C",
          text: "A copied chart title"
        },
        {
          key: "D",
          text: "A finding supported by the analyzed data"
        }
      ],
      correct: 3,
      explanation: "Evidence matters.",
      hint: "Review core principles of Python Data Analysis Mini Project."
    },
    {
      id: 5,
      question: "What should a final report include?",
      options: [
        {
          key: "A",
          text: "Key findings, appropriate charts, and limitations"
        },
        {
          key: "B",
          text: "Only decorative images"
        },
        {
          key: "C",
          text: "No labels"
        },
        {
          key: "D",
          text: "No explanation"
        }
      ],
      correct: 0,
      explanation: "Results need context.",
      hint: "Review core principles of Python Data Analysis Mini Project."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange project flow",
      prompt: "Define question → Load data → Clean/check → Analyze → Visualize → Explain findings.",
      tokens: ["Define question", "Load data", "Clean/check", "Analyze", "Visualize", "Explain findings."],
      shuffled: ["Explain findings.", "Visualize", "Analyze", "Clean/check", "Load data", "Define question"],
      expected: ["Define question", "Load data", "Clean/check", "Analyze", "Visualize", "Explain findings."],
      hint: "Arrange into correct logical sequence: This order."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match output to task",
      prompt: "Total revenue→sum; top product→group/sort; monthly trend→line chart.",
      tokens: ["Total revenue", "sum; top product", "group/sort; monthly trend", "line chart."],
      shuffled: ["line chart.", "group/sort; monthly trend", "sum; top product", "Total revenue"],
      expected: ["Total revenue", "sum; top product", "group/sort; monthly trend", "line chart."],
      hint: "Arrange into correct logical sequence: Listed matches."
    },
    {
      id: 3,
      title: "Puzzle 3 — Choose evidence-based statement",
      prompt: "Revenue Week 1=100, Week 2=120.",
      tokens: ["Revenue", "Week", "1=100", "Week"],
      shuffled: ["Week", "1=100", "Week", "Revenue"],
      expected: ["Revenue", "Week", "1=100", "Week"],
      hint: "Arrange into correct logical sequence: Observed revenue increased by 20%, but cause is unknown."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "the steps of a basic Pyt",
      meaning: "Define the question, load and clean data, analyze it, visualize results, an"
    },
    {
      id: 2,
      snippet: "How do Pandas and Matplo",
      meaning: "Pandas prepares and summarizes data; Matplotlib visualizes the results."
    },
    {
      id: 3,
      snippet: "What makes a finding tru",
      meaning: "Correct calculations, checked data quality, and evidence that supports the"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Report the Top Product",
      prompt: "Which product should the analyst identify as highest revenue?",
      scenario: "A shop's product revenue is Pen ₹100, Book ₹250, Bag ₹150.",
      expectedResponse: "Book"
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What are the steps of a basic Python Data Analysis project?",
      sampleAnswer: "Define the question, load and clean data, analyze it, visualize results, and communicate findings."
    },
    {
      id: 2,
      question: "How do Pandas and Matplotlib work together?",
      sampleAnswer: "Pandas prepares and summarizes data; Matplotlib visualizes the results."
    },
    {
      id: 3,
      question: "What makes a finding trustworthy?",
      sampleAnswer: "Correct calculations, checked data quality, and evidence that supports the conclusion."
    },
    {
      id: 4,
      question: "How would you present your mini project?",
      sampleAnswer: "I would explain the problem, dataset, methods, key charts, findings, and limitations."
    }
    ]
  },
};

// Also index by integer id for easy numeric lookup matching TAB1_QUESTION_BANK
export const TAB1_QUESTION_BANK_BY_ID: Record<number, TopicQuestionBank> = {
  1: TAB1_QUESTION_BANK['1.1'],
  2: TAB1_QUESTION_BANK['1.2'],
  3: TAB1_QUESTION_BANK['1.3'],
  4: TAB1_QUESTION_BANK['1.4'],
  5: TAB1_QUESTION_BANK['1.5'],
  6: TAB1_QUESTION_BANK['2.1'],
  7: TAB1_QUESTION_BANK['2.2'],
  8: TAB1_QUESTION_BANK['2.3'],
  9: TAB1_QUESTION_BANK['2.4'],
  10: TAB1_QUESTION_BANK['2.5'],
  11: TAB1_QUESTION_BANK['3.1'],
  12: TAB1_QUESTION_BANK['3.2'],
  13: TAB1_QUESTION_BANK['3.3'],
  14: TAB1_QUESTION_BANK['3.4'],
  15: TAB1_QUESTION_BANK['3.5'],
  16: TAB1_QUESTION_BANK['3.6'],
  17: TAB1_QUESTION_BANK['4.1'],
  18: TAB1_QUESTION_BANK['4.2'],
  19: TAB1_QUESTION_BANK['4.3'],
  20: TAB1_QUESTION_BANK['4.4'],
  21: TAB1_QUESTION_BANK['4.5'],
  22: TAB1_QUESTION_BANK['4.6'],
  23: TAB1_QUESTION_BANK['4.7'],
  31: TAB1_QUESTION_BANK['3.1'],
  32: TAB1_QUESTION_BANK['3.2'],
  33: TAB1_QUESTION_BANK['3.3'],
  34: TAB1_QUESTION_BANK['3.4'],
  35: TAB1_QUESTION_BANK['3.5'],
  36: TAB1_QUESTION_BANK['3.6'],
  41: TAB1_QUESTION_BANK['4.1'],
  42: TAB1_QUESTION_BANK['4.2'],
  43: TAB1_QUESTION_BANK['4.3'],
  44: TAB1_QUESTION_BANK['4.4'],
  45: TAB1_QUESTION_BANK['4.5'],
  46: TAB1_QUESTION_BANK['4.6'],
  47: TAB1_QUESTION_BANK['4.7'],

  // Modules 5 to 10 numeric & alias IDs
  24: TAB1_QUESTION_BANK['5.1'],
  51: TAB1_QUESTION_BANK['5.1'],
  25: TAB1_QUESTION_BANK['5.2'],
  52: TAB1_QUESTION_BANK['5.2'],
  26: TAB1_QUESTION_BANK['5.3'],
  53: TAB1_QUESTION_BANK['5.3'],
  27: TAB1_QUESTION_BANK['5.4'],
  54: TAB1_QUESTION_BANK['5.4'],
  28: TAB1_QUESTION_BANK['5.5'],
  55: TAB1_QUESTION_BANK['5.5'],
  29: TAB1_QUESTION_BANK['5.6'],
  56: TAB1_QUESTION_BANK['5.6'],
  30: TAB1_QUESTION_BANK['5.7'],
  57: TAB1_QUESTION_BANK['5.7'],
  31: TAB1_QUESTION_BANK['5.8'],
  58: TAB1_QUESTION_BANK['5.8'],
  32: TAB1_QUESTION_BANK['5.9'],
  59: TAB1_QUESTION_BANK['5.9'],
  33: TAB1_QUESTION_BANK['6.1'],
  61: TAB1_QUESTION_BANK['6.1'],
  34: TAB1_QUESTION_BANK['6.2'],
  62: TAB1_QUESTION_BANK['6.2'],
  35: TAB1_QUESTION_BANK['6.3'],
  63: TAB1_QUESTION_BANK['6.3'],
  36: TAB1_QUESTION_BANK['6.4'],
  64: TAB1_QUESTION_BANK['6.4'],
  37: TAB1_QUESTION_BANK['6.5'],
  65: TAB1_QUESTION_BANK['6.5'],
  38: TAB1_QUESTION_BANK['6.6'],
  66: TAB1_QUESTION_BANK['6.6'],
  39: TAB1_QUESTION_BANK['6.7'],
  67: TAB1_QUESTION_BANK['6.7'],
  40: TAB1_QUESTION_BANK['6.8'],
  68: TAB1_QUESTION_BANK['6.8'],
  41: TAB1_QUESTION_BANK['7.1'],
  71: TAB1_QUESTION_BANK['7.1'],
  42: TAB1_QUESTION_BANK['7.2'],
  72: TAB1_QUESTION_BANK['7.2'],
  43: TAB1_QUESTION_BANK['7.3'],
  73: TAB1_QUESTION_BANK['7.3'],
  44: TAB1_QUESTION_BANK['7.4'],
  74: TAB1_QUESTION_BANK['7.4'],
  45: TAB1_QUESTION_BANK['7.5'],
  75: TAB1_QUESTION_BANK['7.5'],
  46: TAB1_QUESTION_BANK['7.6'],
  76: TAB1_QUESTION_BANK['7.6'],
  47: TAB1_QUESTION_BANK['7.7'],
  77: TAB1_QUESTION_BANK['7.7'],
  48: TAB1_QUESTION_BANK['7.8'],
  78: TAB1_QUESTION_BANK['7.8'],
  49: TAB1_QUESTION_BANK['7.9'],
  79: TAB1_QUESTION_BANK['7.9'],
  50: TAB1_QUESTION_BANK['8.1'],
  81: TAB1_QUESTION_BANK['8.1'],
  51: TAB1_QUESTION_BANK['8.2'],
  82: TAB1_QUESTION_BANK['8.2'],
  52: TAB1_QUESTION_BANK['8.3'],
  83: TAB1_QUESTION_BANK['8.3'],
  53: TAB1_QUESTION_BANK['8.4'],
  84: TAB1_QUESTION_BANK['8.4'],
  54: TAB1_QUESTION_BANK['8.5'],
  85: TAB1_QUESTION_BANK['8.5'],
  55: TAB1_QUESTION_BANK['8.6'],
  86: TAB1_QUESTION_BANK['8.6'],
  56: TAB1_QUESTION_BANK['8.7'],
  87: TAB1_QUESTION_BANK['8.7'],
  57: TAB1_QUESTION_BANK['8.8'],
  88: TAB1_QUESTION_BANK['8.8'],
  58: TAB1_QUESTION_BANK['9.1'],
  91: TAB1_QUESTION_BANK['9.1'],
  59: TAB1_QUESTION_BANK['9.2'],
  92: TAB1_QUESTION_BANK['9.2'],
  60: TAB1_QUESTION_BANK['9.3'],
  93: TAB1_QUESTION_BANK['9.3'],
  61: TAB1_QUESTION_BANK['9.4'],
  94: TAB1_QUESTION_BANK['9.4'],
  62: TAB1_QUESTION_BANK['9.5'],
  95: TAB1_QUESTION_BANK['9.5'],
  63: TAB1_QUESTION_BANK['9.6'],
  96: TAB1_QUESTION_BANK['9.6'],
  64: TAB1_QUESTION_BANK['9.7'],
  97: TAB1_QUESTION_BANK['9.7'],
  65: TAB1_QUESTION_BANK['9.8'],
  98: TAB1_QUESTION_BANK['9.8'],
  66: TAB1_QUESTION_BANK['9.9'],
  99: TAB1_QUESTION_BANK['9.9'],
  67: TAB1_QUESTION_BANK['9.10'],
  910: TAB1_QUESTION_BANK['9.10'],
  68: TAB1_QUESTION_BANK['9.11'],
  911: TAB1_QUESTION_BANK['9.11'],
  69: TAB1_QUESTION_BANK['9.12'],
  912: TAB1_QUESTION_BANK['9.12'],
  70: TAB1_QUESTION_BANK['9.13'],
  913: TAB1_QUESTION_BANK['9.13'],
  71: TAB1_QUESTION_BANK['10.1'],
  101: TAB1_QUESTION_BANK['10.1'],
  72: TAB1_QUESTION_BANK['10.2'],
  102: TAB1_QUESTION_BANK['10.2'],
  73: TAB1_QUESTION_BANK['10.3'],
  103: TAB1_QUESTION_BANK['10.3'],
  74: TAB1_QUESTION_BANK['10.4'],
  104: TAB1_QUESTION_BANK['10.4'],
  75: TAB1_QUESTION_BANK['10.5'],
  105: TAB1_QUESTION_BANK['10.5'],
  76: TAB1_QUESTION_BANK['10.6'],
  106: TAB1_QUESTION_BANK['10.6'],
  77: TAB1_QUESTION_BANK['10.7'],
  107: TAB1_QUESTION_BANK['10.7'],
  78: TAB1_QUESTION_BANK['10.8'],
  108: TAB1_QUESTION_BANK['10.8'],
  79: TAB1_QUESTION_BANK['10.9'],
  109: TAB1_QUESTION_BANK['10.9'],
  80: TAB1_QUESTION_BANK['10.10'],
  1010: TAB1_QUESTION_BANK['10.10'],
};
