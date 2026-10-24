import { TopicQuestionBank } from './questionBankRegistry';

export const TAB2_DATA_SCIENCE_QUESTION_BANK: Record<string, TopicQuestionBank> = {
  '1.1': {
    tabId: 2,
    tabName: 'Data Science & Agentic AI',
    moduleId: 1,
    moduleName: 'Introduction to Data Science',
    topicKey: '1.1',
    id: 1,
    topicTitle: 'What Is Data Science?',
    mode: 'Non-coding',
    game1Quiz: [
      {
        id: 1,
        question: 'What is Data Science?',
        options: [
          { key: 'A', text: 'Only typing code' },
          { key: 'B', text: 'Using data and scientific methods to discover insights' },
          { key: 'C', text: 'Only creating charts' },
          { key: 'D', text: 'Repairing computers' }
        ],
        correct: 1,
        explanation: 'Data Science is the field that combines scientific methods, math, and data analysis to uncover hidden patterns and actionable insights.',
        hint: 'Think about using data and scientific techniques to uncover insights.'
      },
      {
        id: 2,
        question: 'A music app recommends songs you may like. Which field can help make this possible?',
        options: [
          { key: 'A', text: 'Computer hardware repair' },
          { key: 'B', text: 'Word processing' },
          { key: 'C', text: 'Graphic design only' },
          { key: 'D', text: 'Data Science' }
        ],
        correct: 3,
        explanation: 'Data Science algorithms analyze your listening preferences to recommend new music tailored to your taste.',
        hint: 'Algorithms study past listening data to predict what music you will enjoy.'
      },
      {
        id: 3,
        question: "Which information could help predict tomorrow's weather?",
        options: [
          { key: 'A', text: 'Past weather measurements' },
          { key: 'B', text: "A computer's wallpaper" },
          { key: 'C', text: 'A random password' },
          { key: 'D', text: 'The colour of a keyboard' }
        ],
        correct: 0,
        explanation: 'Historical atmospheric data like temperature, humidity, and pressure allow meteorologists to forecast future weather.',
        hint: 'Recorded observations and past weather measurements provide the clues for forecasting.'
      },
      {
        id: 4,
        question: 'What is a pattern in data?',
        options: [
          { key: 'A', text: 'A broken computer' },
          { key: 'B', text: 'A repeated trend or relationship' },
          { key: 'C', text: 'A random screen colour' },
          { key: 'D', text: 'A file name only' }
        ],
        correct: 1,
        explanation: 'A pattern is a recurring relationship or predictable trend observed across data points over time.',
        hint: 'Look for the option describing a repeated trend or relationship.'
      },
      {
        id: 5,
        question: 'Can Data Science help businesses make predictions?',
        options: [
          { key: 'A', text: 'No, it only stores files' },
          { key: 'B', text: 'Yes, it predicts everything perfectly' },
          { key: 'C', text: 'Yes, using data and suitable models' },
          { key: 'D', text: 'No, it only designs websites' }
        ],
        correct: 2,
        explanation: 'By training models on historical facts, Data Science assists businesses in forecasting demand and trends, though never guaranteeing 100% perfection.',
        hint: 'Data scientists build statistical models on data to predict probable outcomes.'
      }
    ],
    game2Puzzles: [
      {
        id: 1,
        title: '🛍️ Mystery 1: The Ice Cream Shop',
        prompt: 'The shop notices ice cream sales rise on hotter days. What could a Data Scientist investigate?',
        tokens: [
          "The shop's wall paint",
          'The relationship between temperature and sales',
          "The owner's favourite song"
        ],
        shuffled: [
          "The shop's wall paint",
          'The relationship between temperature and sales',
          "The owner's favourite song"
        ],
        expected: [
          'The relationship between temperature and sales'
        ],
        hint: 'Investigating how changes in temperature affect sales volume reveals consumer demand.'
      },
      {
        id: 2,
        title: '🎬 Mystery 2: Movie Recommendations',
        prompt: 'A streaming app wants to recommend films. Which information could help?',
        tokens: [
          "The phone's wallpaper only",
          'Viewing history and movie preferences',
          'The keyboard model only'
        ],
        shuffled: [
          "The phone's wallpaper only",
          'Viewing history and movie preferences',
          'The keyboard model only'
        ],
        expected: [
          'Viewing history and movie preferences'
        ],
        hint: 'Past movie choices and genre preferences tell recommendation algorithms what you enjoy.'
      },
      {
        id: 3,
        title: '🏥 Mystery 3: Hospital Planning',
        prompt: 'A hospital wants to estimate how many patients may visit next week. What could help?',
        tokens: [
          'The colour of the hospital sign',
          'Staff shoe sizes',
          'Past patient counts and relevant trends'
        ],
        shuffled: [
          'The colour of the hospital sign',
          'Staff shoe sizes',
          'Past patient counts and relevant trends'
        ],
        expected: [
          'Past patient counts and relevant trends'
        ],
        hint: 'Examining historical patient arrival counts and seasonal illness trends helps forecast hospital capacity.'
      }
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: 'Discover patterns in data',
        meaning: 'Find useful relationships',
        cls: 'c1'
      },
      {
        id: 2,
        snippet: 'Predict future demand',
        meaning: 'Estimate what may happen',
        cls: 'c2'
      },
      {
        id: 3,
        snippet: 'Recommend a song',
        meaning: 'Use listening preferences',
        cls: 'c3'
      },
      {
        id: 4,
        snippet: 'Analyze patient visits',
        meaning: 'Understand trends in demand',
        cls: 'c4'
      },
      {
        id: 5,
        snippet: 'Support a business decision',
        meaning: 'Use evidence from data',
        cls: 'c5'
      }
    ],
    game4Missions: [
      {
        id: 1,
        title: '🛒 Mission 1: Help the Online Store',
        scenario: 'An online store wants to understand why some products sell better than others.',
        prompt: 'Your task: Name two types of data the store could study and explain what it might learn.',
        expectedResponse: '1. Customer reviews and ratings data: To understand product satisfaction and common complaints.\n2. Page click-through rates and pricing data: To learn if price sensitivity or visibility drives sales differences.'
      },
      {
        id: 2,
        title: '🌦️ Mission 2: Predict the Weather',
        scenario: 'You are helping a weather team estimate whether tomorrow might be rainy.',
        prompt: 'Your task: What information should the team examine, and how could it use that information?',
        expectedResponse: '1. Humidity levels, atmospheric pressure, and cloud satellite imagery.\n2. How to use it: Feed historical weather patterns into predictive models to calculate rain probability.'
      }
    ],
    mockInterview: [
      {
        id: 1,
        question: 'What is Data Science?',
        sampleAnswer: 'Data Science is an interdisciplinary field that uses scientific methods, data analysis, and machine learning models to extract meaningful insights, identify patterns, and solve real-world problems from data.'
      },
      {
        id: 2,
        question: 'Give one real-life example of Data Science.',
        sampleAnswer: 'Music and video streaming platforms like Spotify and Netflix analyzing user watch history and preferences to recommend personalized content.'
      },
      {
        id: 3,
        question: 'How can Data Science help a business?',
        sampleAnswer: 'It helps businesses make smarter evidence-based decisions, predict upcoming customer demand, optimize supply chain operations, and automate repetitive tasks.'
      }
    ]
  },
  '1.2': {
    tabId: 2,
    tabName: 'Data Science & Agentic AI',
    moduleId: 1,
    moduleName: 'Introduction to Data Science',
    topicKey: '1.2',
    id: 2,
    topicTitle: 'How Data Science Works in Real Life',
    mode: 'Non-coding',
    game1Quiz: [
      {
        id: 1,
        question: 'A supermarket wants to know which product sells the most. What should it do first?',
        options: [
          { key: 'A', text: 'Choose a random product' },
          { key: 'B', text: 'Ask a clear question' },
          { key: 'C', text: 'Delete sales records' },
          { key: 'D', text: 'Change the store logo' }
        ],
        correct: 1,
        explanation: 'Every data science workflow begins with defining a clear, precise question (e.g., "Which SKU had highest units sold in Q3?").',
        hint: 'Start by defining exactly what you want to discover before gathering data.'
      },
      {
        id: 2,
        question: 'A team collects daily temperature readings. What is this step called?',
        options: [
          { key: 'A', text: 'Taking business action' },
          { key: 'B', text: 'Designing a logo' },
          { key: 'C', text: 'Collecting data' },
          { key: 'D', text: 'Making a final decision' }
        ],
        correct: 2,
        explanation: 'Systematically recording and storing observations is the data collection stage of the lifecycle.',
        hint: 'This step involves gathering raw facts and numbers from instruments.'
      },
      {
        id: 3,
        question: 'A scientist compares sales across several weeks. Why?',
        options: [
          { key: 'A', text: 'To look for patterns and changes' },
          { key: 'B', text: 'To make the numbers disappear' },
          { key: 'C', text: 'To avoid understanding the problem' },
          { key: 'D', text: 'To guarantee future sales' }
        ],
        correct: 0,
        explanation: 'Comparing metrics across time periods reveals seasonal trends, growth trajectories, and demand shifts.',
        hint: 'Analysts compare time intervals to discover recurring trends and shifts.'
      },
      {
        id: 4,
        question: 'After analyzing school attendance, a team finds that absences are often higher on Mondays. What should it do next?',
        options: [
          { key: 'A', text: 'Assume it knows the exact cause' },
          { key: 'B', text: 'Delete the attendance records' },
          { key: 'C', text: 'Ignore the result' },
          { key: 'D', text: 'Interpret the finding and investigate possible reasons' }
        ],
        correct: 3,
        explanation: 'Spotting an anomaly or pattern requires interpreting the finding and investigating the underlying root causes.',
        hint: 'Never jump to conclusions; investigate why the numbers behave this way.'
      },
      {
        id: 5,
        question: 'Can data science always predict the future perfectly?',
        options: [
          { key: 'A', text: 'Yes, every prediction is guaranteed' },
          { key: 'B', text: 'No, predictions can be uncertain' },
          { key: 'C', text: 'Yes, if there are charts' },
          { key: 'D', text: 'No, data can never help predict anything' }
        ],
        correct: 1,
        explanation: 'Data science models predict probabilities, but real-world market uncertainty means forecasts can never be 100% guaranteed.',
        hint: 'Data helps reduce uncertainty, but real-world predictions always carry a degree of uncertainty.'
      }
    ],
    game2Puzzles: [
      {
        id: 1,
        title: '🧩 Challenge: Arrange the Steps',
        prompt: 'Arrange the 5 core Data Science steps in the correct real-world sequence:',
        tokens: [
          'Collect relevant data',
          'Take informed action',
          'Define the question',
          'Interpret the results',
          'Analyze the data'
        ],
        shuffled: [
          'Collect relevant data',
          'Take informed action',
          'Define the question',
          'Interpret the results',
          'Analyze the data'
        ],
        expected: [
          'Define the question',
          'Collect relevant data',
          'Analyze the data',
          'Interpret the results',
          'Take informed action'
        ],
        hint: 'Ask question ➔ Collect data ➔ Analyze patterns ➔ Interpret results ➔ Take action.'
      }
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: 'A school asks, “Why are absences increasing?”',
        meaning: 'Define the question',
        cls: 'c1'
      },
      {
        id: 2,
        snippet: 'A shop downloads its daily sales records.',
        meaning: 'Collect data',
        cls: 'c2'
      },
      {
        id: 3,
        snippet: 'An analyst compares sales from different months.',
        meaning: 'Analyze the data',
        cls: 'c3'
      },
      {
        id: 4,
        snippet: 'A team finds that a delivery service is often late in certain areas.',
        meaning: 'Interpret the findings',
        cls: 'c4'
      },
      {
        id: 5,
        snippet: 'A business changes its delivery schedule after reviewing its findings.',
        meaning: 'Take informed action',
        cls: 'c5'
      }
    ],
    game4Missions: [
      {
        id: 1,
        title: '🚀 Mission 1: The Mystery of Falling Sales',
        scenario: 'A shop owner notices sales have dropped this month. You are the junior Data Scientist.',
        prompt: 'Your task: Describe three steps you would take to investigate the problem.',
        expectedResponse: '1. Define the question: Pinpoint which product categories or store hours experienced the decline.\n2. Collect & Analyze data: Pull historical transaction logs, customer receipt sizes, and footfall metrics.\n3. Interpret & Act: Determine if competition or price hikes caused the drop, and implement targeted weekend discounts.'
      },
      {
        id: 2,
        title: '🚀 Mission 2: Improve School Attendance',
        scenario: 'A school wants to understand why students are absent more often on some days.',
        prompt: 'Your task: What data would you collect, what pattern would you look for, and how might the school use the findings?',
        expectedResponse: '1. Collect daily attendance records, weather reports, and bus arrival logs.\n2. Look for patterns: Check if absences correlate with Mondays, test dates, or bad weather.\n3. Action: School can adjust transport timetables and schedule engaging morning activities to motivate attendance.'
      }
    ],
    mockInterview: [
      {
        id: 1,
        question: 'How does Data Science work in real life?',
        sampleAnswer: 'In real life, Data Science follows an iterative lifecycle: defining a business question, collecting relevant data, analyzing patterns, interpreting what the findings mean, and taking informed action.'
      },
      {
        id: 2,
        question: 'Give an example of Data Science solving a real-world problem.',
        sampleAnswer: 'An e-commerce company tracking logistics data to identify postal pin codes with recurrent shipping delays, then rerouting packages to faster regional couriers.'
      },
      {
        id: 3,
        question: 'Why should we investigate a pattern before taking action?',
        sampleAnswer: 'Because a surface-level correlation does not always reveal the underlying root cause. Investigating ensures decisions are backed by true cause-and-effect rather than misleading assumptions.'
      }
    ]
  },
  '1.3': {
    tabId: 2,
    tabName: 'Data Science & Agentic AI',
    moduleId: 1,
    moduleName: 'Introduction to Data Science',
    topicKey: '1.3',
    id: 3,
    topicTitle: 'Why Businesses Use Data Science',
    mode: 'Non-coding',
    game1Quiz: [
      {
        id: 1,
        question: 'Why do businesses use Data Science?',
        options: [
          { key: 'A', text: 'To decorate their offices' },
          { key: 'B', text: 'To understand data and make better-informed decisions' },
          { key: 'C', text: 'To guarantee profits every day' },
          { key: 'D', text: 'To avoid learning about customers' }
        ],
        correct: 1,
        explanation: 'Businesses use Data Science to transform raw figures and metrics into evidence-based insights, guiding better strategic and operational decisions.',
        hint: 'Think about using data to make better-informed choices instead of guessing.'
      },
      {
        id: 2,
        question: 'An online store wants to recommend products customers may like. What could help?',
        options: [
          { key: 'A', text: 'Changing the website background only' },
          { key: 'B', text: 'Ignoring customer activity' },
          { key: 'C', text: 'Choosing products randomly every time' },
          { key: 'D', text: 'Analyzing past purchases and customer preferences' }
        ],
        correct: 3,
        explanation: 'E-commerce recommendation engines analyze past purchase history and customer preferences to suggest products with high purchase probability.',
        hint: 'Look for the option that studies historical shopping transactions and customer preferences.'
      },
      {
        id: 3,
        question: 'A supermarket throws away lots of unsold food. How could Data Science help?',
        options: [
          { key: 'A', text: 'Analyze sales and inventory patterns' },
          { key: 'B', text: 'Order more of every product without checking' },
          { key: 'C', text: 'Delete stock records' },
          { key: 'D', text: 'Ignore expiry dates' }
        ],
        correct: 0,
        explanation: 'By analyzing daily sales velocities, perishability timelines, and inventory levels, supermarkets can forecast demand and avoid over-ordering.',
        hint: 'Look for analyzing sales trends and stock levels to prevent surplus waste.'
      },
      {
        id: 4,
        question: 'A business wants to understand why customers stop using its service. What should it study?',
        options: [
          { key: 'A', text: 'The office wall colour' },
          { key: 'B', text: "The manager's favourite movie" },
          { key: 'C', text: 'Customer feedback and usage patterns' },
          { key: 'D', text: 'The shape of its logo only' }
        ],
        correct: 2,
        explanation: 'Investigating customer churn requires examining feedback logs, complaint tickets, and drops in user activity patterns.',
        hint: 'Examine direct customer opinions, surveys, and app activity patterns.'
      },
      {
        id: 5,
        question: "A company uses past sales data to estimate next month's demand. What is it trying to do?",
        options: [
          { key: 'A', text: 'Guarantee the exact number of sales' },
          { key: 'B', text: 'Predict likely future demand' },
          { key: 'C', text: 'Repair its computers' },
          { key: 'D', text: 'Remove all business risks' }
        ],
        correct: 1,
        explanation: 'Predictive analytics uses historical time-series sales data to estimate likely future consumer demand, helping businesses prepare inventory.',
        hint: 'Forecasting uses past data to estimate probable demand.'
      }
    ],
    game2Puzzles: [
      {
        id: 1,
        title: '🛒 Puzzle 1: The Overstock Problem',
        prompt: 'A shop regularly has too many unsold T-shirts. What should the owner investigate?',
        tokens: [
          "The shop's logo colour",
          'Past sales and stock levels',
          "The owner's favourite sport"
        ],
        shuffled: [
          "The shop's logo colour",
          'Past sales and stock levels',
          "The owner's favourite sport"
        ],
        expected: [
          'Past sales and stock levels'
        ],
        hint: 'Investigating past sales volume alongside existing stock levels reveals how many shirts to order.'
      },
      {
        id: 2,
        title: '📦 Puzzle 2: The Delivery Problem',
        prompt: 'An online store receives complaints about late deliveries. Which data would be useful?',
        tokens: [
          'The office furniture prices',
          'Promised and actual delivery times',
          "The website's font size only"
        ],
        shuffled: [
          'The office furniture prices',
          'Promised and actual delivery times',
          "The website's font size only"
        ],
        expected: [
          'Promised and actual delivery times'
        ],
        hint: 'Comparing estimated vs actual delivery timestamps pinpoints shipping bottlenecks.'
      },
      {
        id: 3,
        title: '⭐ Puzzle 3: The Customer Problem',
        prompt: 'A subscription business notices many customers are leaving. What could it study?',
        tokens: [
          'The colour of staff uniforms',
          'The number of office chairs',
          'Cancellation patterns and customer feedback'
        ],
        shuffled: [
          'The colour of staff uniforms',
          'The number of office chairs',
          'Cancellation patterns and customer feedback'
        ],
        expected: [
          'Cancellation patterns and customer feedback'
        ],
        hint: 'Examine customer exit feedback and usage drops before cancellations.'
      }
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: 'A shop wants to reduce unsold products.',
        meaning: 'Improve inventory planning',
        cls: 'c1'
      },
      {
        id: 2,
        snippet: 'A streaming app wants to suggest relevant films.',
        meaning: 'Personalize recommendations',
        cls: 'c2'
      },
      {
        id: 3,
        snippet: 'A delivery company wants fewer late orders.',
        meaning: 'Understand delivery delay patterns',
        cls: 'c3'
      },
      {
        id: 4,
        snippet: 'A business wants to know why customers are unhappy.',
        meaning: 'Analyze feedback and complaints',
        cls: 'c4'
      },
      {
        id: 5,
        snippet: 'A retailer wants to prepare for busy seasons.',
        meaning: 'Use past demand patterns to plan ahead',
        cls: 'c5'
      }
    ],
    game4Missions: [
      {
        id: 1,
        title: '🚀 Mission 1: Save the Supermarket',
        scenario: 'A supermarket throws away fresh food every week because it orders more than customers buy.',
        prompt: 'Your task: Name two types of data the supermarket should study and explain how the findings could help.',
        expectedResponse: '1. Two types of data: Daily sales transaction velocity by perishable category, and historical waste/spoilage logs.\n2. How findings help: Supermarket can adjust daily procurement orders to match actual consumption velocity rather than ordering a fixed excess amount.'
      },
      {
        id: 2,
        title: '🚀 Mission 2: Understand Customer Churn',
        scenario: 'A subscription business notices that many customers cancel after their first month.',
        prompt: 'Your task: Suggest two things the business could investigate and one action it might consider after reviewing the evidence.',
        expectedResponse: '1. Two things to investigate: First-week onboarding engagement (feature usage) and exit survey feedback reasons.\n2. Action: Introduce guided interactive onboarding tutorials or offer targeted 30-day support check-ins to boost month-one retention.'
      }
    ],
    mockInterview: [
      {
        id: 1,
        question: 'Why do businesses use Data Science?',
        sampleAnswer: 'Businesses use Data Science to transform raw transactional and behavioural data into predictive insights, helping reduce operational costs, boost customer satisfaction, and guide strategic decisions.'
      },
      {
        id: 2,
        question: 'Give one example of how Data Science can help a business save money.',
        sampleAnswer: 'A retail chain using predictive inventory management to forecast perishable food demand, preventing overstocking and saving millions in unsold spoiled goods.'
      },
      {
        id: 3,
        question: 'Does Data Science guarantee business success?',
        sampleAnswer: 'No, Data Science does not eliminate every risk or guarantee 100% success. It provides high-probability evidence and minimizes guesswork, but business execution and market factors remain crucial.'
      }
    ]
  }
};

export const TAB2_DATA_SCIENCE_QUESTION_BANK_BY_ID: Record<number, TopicQuestionBank> = {
  1: TAB2_DATA_SCIENCE_QUESTION_BANK['1.1'],
  2: TAB2_DATA_SCIENCE_QUESTION_BANK['1.2'],
  3: TAB2_DATA_SCIENCE_QUESTION_BANK['1.3'],
};
