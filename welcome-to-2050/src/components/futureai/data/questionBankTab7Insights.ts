// ═══════════════════════════════════════════════════════════════════════════════
// TAB 7: BUSINESS INSIGHTS & COMMUNICATION — MODULES 34 TO 37 MASTER QUESTION BANK
// 31 Topics • 155 MCQs • 93 Puzzles • 31 Missions • 124 Mock Interview Q&As
// Authentic Curriculum for Future IT Industry Master Course
// ═══════════════════════════════════════════════════════════════════════════════

import { TopicQuestionBank } from './questionBankRegistry';

export const TAB7_INSIGHTS_QUESTION_BANK: Record<string, TopicQuestionBank> = {
  "34.1": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 34,
    moduleName: "Module 34: Exploratory Data Analysis",
    topicKey: "34.1",
    id: 286,
    topicTitle: "Define Questions Before Analysis",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What should an analyst clarify before opening a dataset?",
        options: [
          { key: "A", text: "The business question to answer" },
          { key: "B", text: "The chart color" },
          { key: "C", text: "The laptop brand" },
          { key: "D", text: "The report font" },
        ],
        correct: 0,
        explanation: "Pehle decision aur question clear karo; tabhi relevant analysis hoga.",
        hint: "Focus on The business question to answer to answer this concept."
      },
      {
        id: 2,
        question: "Which is a measurable analysis question?",
        options: [
          { key: "A", text: "Is our company nice?" },
          { key: "B", text: "How did weekly sales change over three months?" },
          { key: "C", text: "Can we make everything better?" },
          { key: "D", text: "Which color feels lucky?" },
        ],
        correct: 1,
        explanation: "Measurable question mein metric aur time period clear hota hai.",
        hint: "Focus on How did weekly sales change over three months? to answer this concept."
      },
      {
        id: 3,
        question: "A manager asks whether customer returns increased. Which metric fits?",
        options: [
          { key: "A", text: "Office electricity bill" },
          { key: "B", text: "Return rate by month" },
          { key: "C", text: "Employee birthdays" },
          { key: "D", text: "Number of dashboard pages" },
        ],
        correct: 1,
        explanation: "Return rate ko time ke saath compare karna useful hoga.",
        hint: "Focus on Return rate by month to answer this concept."
      },
      {
        id: 4,
        question: "Why define the time period before analysis?",
        options: [
          { key: "A", text: "It keeps comparisons within a clear scope" },
          { key: "B", text: "It automatically increases sales" },
          { key: "C", text: "It removes all missing values" },
          { key: "D", text: "It guarantees causation" },
        ],
        correct: 0,
        explanation: "Time window define karne se analysis focused aur comparable banta hai.",
        hint: "Focus on It keeps comparisons within a clear scope to answer this concept."
      },
      {
        id: 5,
        question: "What is a good final step when framing an analysis question?",
        options: [
          { key: "A", text: "Agree how the finding will support a decision" },
          { key: "B", text: "Hide the metric definition" },
          { key: "C", text: "Start with a random chart" },
          { key: "D", text: "Assume the answer in advance" },
        ],
        correct: 0,
        explanation: "Stakeholder se decision aur success criteria align karo.",
        hint: "Focus on Agree how the finding will support a decision to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Frame the Business Question",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Understand the decision", "Define the metric", "Set the time period", "Confirm the question"],
        shuffled: ["Confirm the question", "Set the time period", "Define the metric", "Understand the decision"],
        expected: ["Understand the decision", "Define the metric", "Set the time period", "Confirm the question"],
        hint: "Decision, metric aur scope ka order analysis ko focused rakhta hai."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Check a Sales Drop",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Ask what dropped", "Choose revenue as the metric", "Compare equivalent periods", "Investigate possible drivers"],
        shuffled: ["Investigate possible drivers", "Compare equivalent periods", "Choose revenue as the metric", "Ask what dropped"],
        expected: ["Ask what dropped", "Choose revenue as the metric", "Compare equivalent periods", "Investigate possible drivers"],
        hint: "Sales decline ko pehle accurately define karo, phir drivers dekho."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Plan an EDA Task",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["List required fields", "Check data availability", "Identify useful comparisons", "Start exploration"],
        shuffled: ["Start exploration", "Identify useful comparisons", "Check data availability", "List required fields"],
        expected: ["List required fields", "Check data availability", "Identify useful comparisons", "Start exploration"],
        hint: "Data available hai ya nahi, ye planning mein jaldi check karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "Why should an analyst define the business question first",
        meaning: "It ensures the analysis answers a real decision rather ..."
      },
      {
        id: 2,
        snippet: "What makes an analysis question measurable",
        meaning: "A clear metric, relevant group, and time period make it..."
      },
      {
        id: 3,
        snippet: "How do you choose a KPI for a business question",
        meaning: "I choose a metric that directly reflects the business o..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Choose a Useful Question",
        scenario: "Shop manager bolta hai sales kam ho rahi hain. Analyst ko pehla analysis question choose karna hai.",
        prompt: "Kaunsa question sabse useful hai?",
        expectedResponse: "A \u2014 Great! Daily sales trend se business problem ko measure kar sakte hain."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "Why should an analyst define the business question first?",
        sampleAnswer: "It ensures the analysis answers a real decision rather than producing unrelated charts."
      },
      {
        id: 2,
        question: "What makes an analysis question measurable?",
        sampleAnswer: "A clear metric, relevant group, and time period make it measurable."
      },
      {
        id: 3,
        question: "How do you choose a KPI for a business question?",
        sampleAnswer: "I choose a metric that directly reflects the business outcome being investigated."
      },
      {
        id: 4,
        question: "What would you ask a manager before analyzing falling sales?",
        sampleAnswer: "I would clarify which products, locations, dates, and sales metric matter."
      },
    ]
  },
  "34.2": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 34,
    moduleName: "Module 34: Exploratory Data Analysis",
    topicKey: "34.2",
    id: 287,
    topicTitle: "Inspect Data Shape and Distributions",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What does a dataset shape of (200, 5) usually mean?",
        options: [
          { key: "A", text: "200 charts and 5 reports" },
          { key: "B", text: "200 rows and 5 columns" },
          { key: "C", text: "200 files and 5 folders" },
          { key: "D", text: "5 rows and 200 columns" },
        ],
        correct: 1,
        explanation: "Shape data ke records aur fields ka count batata hai.",
        hint: "Focus on 200 rows and 5 columns to answer this concept."
      },
      {
        id: 2,
        question: "Which view helps you see the spread of numeric ages?",
        options: [
          { key: "A", text: "File name" },
          { key: "B", text: "Histogram" },
          { key: "C", text: "Email subject line" },
          { key: "D", text: "Company logo" },
        ],
        correct: 1,
        explanation: "Histogram numeric values ki frequency distribution dikhata hai.",
        hint: "Focus on Histogram to answer this concept."
      },
      {
        id: 3,
        question: "What should you check when first inspecting a dataset?",
        options: [
          { key: "A", text: "Column names, data types and missing values" },
          { key: "B", text: "Only the file icon" },
          { key: "C", text: "Only the author name" },
          { key: "D", text: "Only the first chart color" },
        ],
        correct: 0,
        explanation: "Initial inspection se structure aur quality issues milte hain.",
        hint: "Focus on Column names, data types and missing values to answer this concept."
      },
      {
        id: 4,
        question: "A salary distribution has a long right tail. What is this called?",
        options: [
          { key: "A", text: "A Boolean variable" },
          { key: "B", text: "Perfectly uniform distribution" },
          { key: "C", text: "A primary key" },
          { key: "D", text: "Right-skewed distribution" },
        ],
        correct: 3,
        explanation: "Right side par long tail positive skew indicate karti hai.",
        hint: "Focus on Right-skewed distribution to answer this concept."
      },
      {
        id: 5,
        question: "Why inspect missing values early?",
        options: [
          { key: "A", text: "They automatically become zero" },
          { key: "B", text: "They always mean fraud" },
          { key: "C", text: "They can affect calculations and comparisons" },
          { key: "D", text: "They prove a causal link" },
        ],
        correct: 2,
        explanation: "Missing values analysis ke results ko distort kar sakti hain.",
        hint: "Focus on They can affect calculations and comparisons to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 First Look at Data",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Load the dataset", "Check row and column counts", "Inspect types", "Check missing values"],
        shuffled: ["Check missing values", "Inspect types", "Check row and column counts", "Load the dataset"],
        expected: ["Load the dataset", "Check row and column counts", "Inspect types", "Check missing values"],
        hint: "Structure samajhne ke baad distribution explore karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Inspect a Numeric Column",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Select age column", "View summary statistics", "Plot histogram", "Note skew or unusual values"],
        shuffled: ["Note skew or unusual values", "Plot histogram", "View summary statistics", "Select age column"],
        expected: ["Select age column", "View summary statistics", "Plot histogram", "Note skew or unusual values"],
        hint: "Histogram se distribution ka shape samajh aata hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Check Data Quality",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify key columns", "Count missing cells", "Check unexpected categories", "Record issues"],
        shuffled: ["Record issues", "Check unexpected categories", "Count missing cells", "Identify key columns"],
        expected: ["Identify key columns", "Count missing cells", "Check unexpected categories", "Record issues"],
        hint: "Data quality issues ko analysis se pehle note karna chahiye."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "What does the shape of a dataset tell you",
        meaning: "It tells me the number of rows and columns."
      },
      {
        id: 2,
        snippet: "Why do analysts inspect data types",
        meaning: "To confirm numeric, text and date fields are represente..."
      },
      {
        id: 3,
        snippet: "When would you use a histogram",
        meaning: "To examine the frequency distribution of a numeric vari..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Understand Dataset Size",
        scenario: "Ek customer dataset mein 200 records aur 5 fields hain.",
        prompt: "Is dataset ka correct shape kya hoga?",
        expectedResponse: "A \u2014 Correct! Pehla number rows aur doosra columns batata hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What does the shape of a dataset tell you?",
        sampleAnswer: "It tells me the number of rows and columns."
      },
      {
        id: 2,
        question: "Why do analysts inspect data types?",
        sampleAnswer: "To confirm numeric, text and date fields are represented correctly before calculations."
      },
      {
        id: 3,
        question: "When would you use a histogram?",
        sampleAnswer: "To examine the frequency distribution of a numeric variable."
      },
      {
        id: 4,
        question: "What should you do after finding many missing values?",
        sampleAnswer: "Measure their extent, understand the cause and choose an appropriate handling strategy."
      },
    ]
  },
  "34.3": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 34,
    moduleName: "Module 34: Exploratory Data Analysis",
    topicKey: "34.3",
    id: 288,
    topicTitle: "Summary Statistics and Percentiles",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What is the mean of 10, 20 and 30?",
        options: [
          { key: "A", text: "30" },
          { key: "B", text: "60" },
          { key: "C", text: "10" },
          { key: "D", text: "20" },
        ],
        correct: 3,
        explanation: "Mean total ko count se divide karne par milta hai: 60/3 = 20.",
        hint: "Focus on 20 to answer this concept."
      },
      {
        id: 2,
        question: "What is the median of 5, 10 and 100?",
        options: [
          { key: "A", text: "38.33" },
          { key: "B", text: "100" },
          { key: "C", text: "10" },
          { key: "D", text: "5" },
        ],
        correct: 2,
        explanation: "Sorted values ka middle number median hota hai.",
        hint: "Focus on 10 to answer this concept."
      },
      {
        id: 3,
        question: "What does the 90th percentile approximately indicate?",
        options: [
          { key: "A", text: "About 90% of observations are at or below that value" },
          { key: "B", text: "90% of values are identical" },
          { key: "C", text: "The largest value is always 90" },
          { key: "D", text: "The average must be 90" },
        ],
        correct: 0,
        explanation: "P90 data distribution mein relative position batata hai.",
        hint: "Focus on About 90% of observations are at or below that value to answer this concept."
      },
      {
        id: 4,
        question: "Which measure is generally less sensitive to extreme values?",
        options: [
          { key: "A", text: "Mean" },
          { key: "B", text: "Median" },
          { key: "C", text: "Maximum" },
          { key: "D", text: "Sum" },
        ],
        correct: 1,
        explanation: "Extreme values median ko mean ke mukable kam affect karte hain.",
        hint: "Focus on Median to answer this concept."
      },
      {
        id: 5,
        question: "What is the interquartile range (IQR)?",
        options: [
          { key: "A", text: "Q3 minus Q1" },
          { key: "B", text: "Maximum plus minimum" },
          { key: "C", text: "Q1 plus Q3" },
          { key: "D", text: "Mean divided by count" },
        ],
        correct: 0,
        explanation: "IQR middle 50 percent data ka spread measure karta hai.",
        hint: "Focus on Q3 minus Q1 to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Compute the Mean",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Add all values", "Count observations", "Divide sum by count", "Interpret the average"],
        shuffled: ["Interpret the average", "Divide sum by count", "Count observations", "Add all values"],
        expected: ["Add all values", "Count observations", "Divide sum by count", "Interpret the average"],
        hint: "Mean calculate karne ke liye total aur count dono chahiye."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Find the Median",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Sort values", "Locate middle position", "Read middle value", "Report the median"],
        shuffled: ["Report the median", "Read middle value", "Locate middle position", "Sort values"],
        expected: ["Sort values", "Locate middle position", "Read middle value", "Report the median"],
        hint: "Median nikalne se pehle values sort karte hain."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Summarize a Distribution",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Calculate median", "Identify Q1 and Q3", "Compute IQR", "Describe typical value and spread"],
        shuffled: ["Describe typical value and spread", "Compute IQR", "Identify Q1 and Q3", "Calculate median"],
        expected: ["Calculate median", "Identify Q1 and Q3", "Compute IQR", "Describe typical value and spread"],
        hint: "Center aur spread ko saath report karna better hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "a summary statistic",
        meaning: "It is a number that describes a feature of data, such a..."
      },
      {
        id: 2,
        snippet: "the difference between mean and median",
        meaning: "Mean is the arithmetic average; median is the middle va..."
      },
      {
        id: 3,
        snippet: "How do you interpret the 75th percentile",
        meaning: "Approximately 75% of observations are at or below that ..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Choose a Robust Summary",
        scenario: "Ek shop ke order values \u20b9100, \u20b9120 aur \u20b95000 hain. Manager typical order size samajhna chahta hai.",
        prompt: "Extreme value ke effect ko kam karne ke liye kya use kare?",
        expectedResponse: "A \u2014 Correct! Median extreme order ki wajah se mean ki tarah bahut nahi badalta."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is a summary statistic?",
        sampleAnswer: "It is a number that describes a feature of data, such as its center or spread."
      },
      {
        id: 2,
        question: "What is the difference between mean and median?",
        sampleAnswer: "Mean is the arithmetic average; median is the middle value after sorting."
      },
      {
        id: 3,
        question: "How do you interpret the 75th percentile?",
        sampleAnswer: "Approximately 75% of observations are at or below that value."
      },
      {
        id: 4,
        question: "When is median preferable to mean?",
        sampleAnswer: "When the distribution is strongly skewed or contains extreme values."
      },
    ]
  },
  "34.4": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 34,
    moduleName: "Module 34: Exploratory Data Analysis",
    topicKey: "34.4",
    id: 289,
    topicTitle: "Analyze Trends Over Time",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "Which chart best shows monthly revenue over a year?",
        options: [
          { key: "A", text: "Single KPI card only" },
          { key: "B", text: "Pie chart with 12 unrelated colors" },
          { key: "C", text: "Scatter plot of unrelated variables" },
          { key: "D", text: "Line chart" },
        ],
        correct: 3,
        explanation: "Line chart time ke saath movement clear dikhata hai.",
        hint: "Focus on Line chart to answer this concept."
      },
      {
        id: 2,
        question: "Why should dates be sorted before plotting a trend?",
        options: [
          { key: "A", text: "To guarantee higher sales" },
          { key: "B", text: "To remove all outliers" },
          { key: "C", text: "To preserve chronological order" },
          { key: "D", text: "To turn dates into percentages" },
        ],
        correct: 2,
        explanation: "Time order galat ho to trend misleading lag sakta hai.",
        hint: "Focus on To preserve chronological order to answer this concept."
      },
      {
        id: 3,
        question: "Sales rise every December. What might this pattern represent?",
        options: [
          { key: "A", text: "A primary key" },
          { key: "B", text: "A data type error by definition" },
          { key: "C", text: "A guaranteed causal effect" },
          { key: "D", text: "Seasonality" },
        ],
        correct: 3,
        explanation: "Recurring calendar-based pattern seasonality ho sakta hai.",
        hint: "Focus on Seasonality to answer this concept."
      },
      {
        id: 4,
        question: "What is a fair comparison for monthly sales?",
        options: [
          { key: "A", text: "Compare equivalent periods with consistent definitions" },
          { key: "B", text: "Compare one full month with one day" },
          { key: "C", text: "Ignore missing dates" },
          { key: "D", text: "Change currency between months" },
        ],
        correct: 0,
        explanation: "Comparable time periods aur metric definitions zaroori hain.",
        hint: "Focus on Compare equivalent periods with consistent definitions to answer this concept."
      },
      {
        id: 5,
        question: "A line chart has a gap because one week is missing. What should you do?",
        options: [
          { key: "A", text: "Check whether the week has missing records" },
          { key: "B", text: "Delete the entire year" },
          { key: "C", text: "Draw a fake peak" },
          { key: "D", text: "Automatically set missing sales to zero" },
        ],
        correct: 0,
        explanation: "Missing period ko verify karo; zero assume mat karo.",
        hint: "Focus on Check whether the week has missing records to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Build a Trend View",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Confirm date field", "Aggregate sales by month", "Sort months chronologically", "Plot the trend"],
        shuffled: ["Plot the trend", "Sort months chronologically", "Aggregate sales by month", "Confirm date field"],
        expected: ["Confirm date field", "Aggregate sales by month", "Sort months chronologically", "Plot the trend"],
        hint: "Monthly grouping aur correct sorting trend ko readable banate hain."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Investigate a Sudden Drop",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Spot the drop", "Check missing records", "Compare prior periods", "Note plausible drivers"],
        shuffled: ["Note plausible drivers", "Compare prior periods", "Check missing records", "Spot the drop"],
        expected: ["Spot the drop", "Check missing records", "Compare prior periods", "Note plausible drivers"],
        hint: "Pehle data issue rule out karo, phir interpretation do."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Look for Seasonality",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Collect multiple periods", "Align calendar months", "Compare recurring peaks", "Report the pattern cautiously"],
        shuffled: ["Report the pattern cautiously", "Compare recurring peaks", "Align calendar months", "Collect multiple periods"],
        expected: ["Collect multiple periods", "Align calendar months", "Compare recurring peaks", "Report the pattern cautiously"],
        hint: "Seasonality identify karne ke liye repeated periods useful hain."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "time-series analysis",
        meaning: "It examines observations ordered over time to identify ..."
      },
      {
        id: 2,
        snippet: "Why are comparable time periods important",
        meaning: "They prevent misleading comparisons caused by different..."
      },
      {
        id: 3,
        snippet: "seasonality",
        meaning: "A recurring pattern associated with a calendar period, ..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Choose a Trend Chart",
        scenario: "Manager ko January se June tak monthly sales ka rise aur fall dekhna hai.",
        prompt: "Kaunsa chart best hai?",
        expectedResponse: "A \u2014 Great! Line chart chronological sales changes clearly show karta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is time-series analysis?",
        sampleAnswer: "It examines observations ordered over time to identify changes and patterns."
      },
      {
        id: 2,
        question: "Why are comparable time periods important?",
        sampleAnswer: "They prevent misleading comparisons caused by different durations or definitions."
      },
      {
        id: 3,
        question: "What is seasonality?",
        sampleAnswer: "A recurring pattern associated with a calendar period, such as months or weekdays."
      },
      {
        id: 4,
        question: "How do you handle missing dates in trend data?",
        sampleAnswer: "I identify gaps, investigate their causes and document any treatment."
      },
    ]
  },
  "34.5": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 34,
    moduleName: "Module 34: Exploratory Data Analysis",
    topicKey: "34.5",
    id: 290,
    topicTitle: "Compare Segments and Cohorts",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What is a customer segment?",
        options: [
          { key: "A", text: "A group sharing a characteristic such as region" },
          { key: "B", text: "A random cell color" },
          { key: "C", text: "A file extension" },
          { key: "D", text: "A single chart title" },
        ],
        correct: 0,
        explanation: "Region ya customer type se segments ban sakte hain.",
        hint: "Focus on A group sharing a characteristic such as region to answer this concept."
      },
      {
        id: 2,
        question: "What defines a cohort in analytics?",
        options: [
          { key: "A", text: "Any unrelated set of charts" },
          { key: "B", text: "Every person with the same first name" },
          { key: "C", text: "People grouped by a shared starting event or period" },
          { key: "D", text: "Only the highest spenders" },
        ],
        correct: 2,
        explanation: "Signup month jaisa shared starting event cohort define karta hai.",
        hint: "Focus on People grouped by a shared starting event or period to answer this concept."
      },
      {
        id: 3,
        question: "Why compare conversion rates instead of only converted counts?",
        options: [
          { key: "A", text: "Counts are always incorrect" },
          { key: "B", text: "All groups are identical" },
          { key: "C", text: "Groups may have different total sizes" },
          { key: "D", text: "Rates never need denominators" },
        ],
        correct: 2,
        explanation: "Denominator se fair comparison possible hota hai.",
        hint: "Focus on Groups may have different total sizes to answer this concept."
      },
      {
        id: 4,
        question: "Which comparison is most useful for two stores of very different sizes?",
        options: [
          { key: "A", text: "Logo color" },
          { key: "B", text: "Number of columns in a file" },
          { key: "C", text: "Returns as a percentage of orders" },
          { key: "D", text: "Only total returns without context" },
        ],
        correct: 2,
        explanation: "Rate different-size stores ko comparable banati hai.",
        hint: "Focus on Returns as a percentage of orders to answer this concept."
      },
      {
        id: 5,
        question: "A cohort has only three customers. What is the main concern?",
        options: [
          { key: "A", text: "The estimate may be unstable" },
          { key: "B", text: "The conversion rate is always zero" },
          { key: "C", text: "The cohort is necessarily biased" },
          { key: "D", text: "The data must be deleted" },
        ],
        correct: 0,
        explanation: "Small sample mein percentage bahut fluctuate kar sakta hai.",
        hint: "Focus on The estimate may be unstable to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Compare Segments Fairly",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Define segments", "Choose the same metric", "Calculate rates with denominators", "Compare results"],
        shuffled: ["Compare results", "Calculate rates with denominators", "Choose the same metric", "Define segments"],
        expected: ["Define segments", "Choose the same metric", "Calculate rates with denominators", "Compare results"],
        hint: "Har group mein metric ki definition same honi chahiye."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Create a Signup Cohort",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify signup date", "Assign signup month", "Track later activity", "Compare retention"],
        shuffled: ["Compare retention", "Track later activity", "Assign signup month", "Identify signup date"],
        expected: ["Identify signup date", "Assign signup month", "Track later activity", "Compare retention"],
        hint: "Cohort membership initial event par based hoti hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Validate a Segment Insight",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Check group sizes", "Review missing data", "Compare relevant periods", "Report limitations"],
        shuffled: ["Report limitations", "Compare relevant periods", "Review missing data", "Check group sizes"],
        expected: ["Check group sizes", "Review missing data", "Compare relevant periods", "Report limitations"],
        hint: "Segment insight mein sample size aur quality bhi mention karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "segmentation in analytics",
        meaning: "Dividing data into meaningful groups for comparison."
      },
      {
        id: 2,
        snippet: "How is a cohort different from a segment",
        meaning: "A cohort shares a starting event or time period, while ..."
      },
      {
        id: 3,
        snippet: "Why do denominators matter in group comparisons",
        meaning: "They let us compare rates fairly when group sizes diffe..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Compare Two Stores",
        scenario: "Store A mein 10 returns out of 100 orders; Store B mein 10 returns out of 500 orders.",
        prompt: "Fair comparison ke liye kya use kare?",
        expectedResponse: "C \u2014 Correct! Store A ka return rate 10% aur B ka 2% hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is segmentation in analytics?",
        sampleAnswer: "Dividing data into meaningful groups for comparison."
      },
      {
        id: 2,
        question: "How is a cohort different from a segment?",
        sampleAnswer: "A cohort shares a starting event or time period, while a segment shares a characteristic."
      },
      {
        id: 3,
        question: "Why do denominators matter in group comparisons?",
        sampleAnswer: "They let us compare rates fairly when group sizes differ."
      },
      {
        id: 4,
        question: "What caution would you mention for a very small cohort?",
        sampleAnswer: "Its estimate may be unstable and should not be overinterpreted."
      },
    ]
  },
  "34.6": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 34,
    moduleName: "Module 34: Exploratory Data Analysis",
    topicKey: "34.6",
    id: 291,
    topicTitle: "Identify Outliers",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What is an outlier?",
        options: [
          { key: "A", text: "Every zero value" },
          { key: "B", text: "Any missing column name" },
          { key: "C", text: "An observation unusually far from most values" },
          { key: "D", text: "A guaranteed data error" },
        ],
        correct: 2,
        explanation: "Outlier unusual hota hai, lekin hamesha galat nahi.",
        hint: "Focus on An observation unusually far from most values to answer this concept."
      },
      {
        id: 2,
        question: "Which plot can help identify unusual numeric values?",
        options: [
          { key: "A", text: "File browser icon" },
          { key: "B", text: "Box plot" },
          { key: "C", text: "Plain text heading" },
          { key: "D", text: "Company logo" },
        ],
        correct: 1,
        explanation: "Box plot distribution aur extreme observations show kar sakta hai.",
        hint: "Focus on Box plot to answer this concept."
      },
      {
        id: 3,
        question: "What is a sensible first step after finding a very high sale amount?",
        options: [
          { key: "A", text: "Hide it from reports" },
          { key: "B", text: "Delete it immediately" },
          { key: "C", text: "Replace it with zero automatically" },
          { key: "D", text: "Verify the original record and business context" },
        ],
        correct: 3,
        explanation: "Outlier genuine bhi ho sakta hai; pehle investigate karo.",
        hint: "Focus on Verify the original record and business context to answer this concept."
      },
      {
        id: 4,
        question: "A common IQR-based flag is above which threshold?",
        options: [
          { key: "A", text: "Mean + 100% always" },
          { key: "B", text: "Q1 \u2212 0.1" },
          { key: "C", text: "Q3 + 1.5 \u00d7 IQR" },
          { key: "D", text: "Exactly the median" },
        ],
        correct: 2,
        explanation: "IQR rule ek screening heuristic hai, final proof nahi.",
        hint: "Focus on Q3 + 1.5 \u00d7 IQR to answer this concept."
      },
      {
        id: 5,
        question: "Why can outliers affect the mean?",
        options: [
          { key: "A", text: "The mean always equals the median" },
          { key: "B", text: "Extreme values contribute strongly to the total" },
          { key: "C", text: "Outliers change column names" },
          { key: "D", text: "The mean ignores large numbers" },
        ],
        correct: 1,
        explanation: "Extreme value total ko kaafi badha sakti hai.",
        hint: "Focus on Extreme values contribute strongly to the total to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Review an Outlier",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Detect unusual value", "Check source record", "Ask for business context", "Decide and document treatment"],
        shuffled: ["Decide and document treatment", "Ask for business context", "Check source record", "Detect unusual value"],
        expected: ["Detect unusual value", "Check source record", "Ask for business context", "Decide and document treatment"],
        hint: "Delete karne se pehle source aur context check karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Use the IQR Rule",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Find Q1 and Q3", "Compute IQR", "Calculate screening bounds", "Flag values for review"],
        shuffled: ["Flag values for review", "Calculate screening bounds", "Compute IQR", "Find Q1 and Q3"],
        expected: ["Find Q1 and Q3", "Compute IQR", "Calculate screening bounds", "Flag values for review"],
        hint: "IQR rule suspicious values flag karta hai, automatically remove nahi."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Compare With and Without",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Calculate summary including outlier", "Review unusual record", "Calculate sensitivity excluding it", "Explain the difference"],
        shuffled: ["Explain the difference", "Calculate sensitivity excluding it", "Review unusual record", "Calculate summary including outlier"],
        expected: ["Calculate summary including outlier", "Review unusual record", "Calculate sensitivity excluding it", "Explain the difference"],
        hint: "Sensitivity check se impact transparent hota hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "an outlier",
        meaning: "An observation that is unusually distant from the bulk ..."
      },
      {
        id: 2,
        snippet: "Does every outlier indicate an error",
        meaning: "No. It may be a valid unusual event or a recording prob..."
      },
      {
        id: 3,
        snippet: "How does the IQR method help",
        meaning: "It flags values beyond bounds based on the middle 50% o..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Check a Large Order",
        scenario: "Daily orders usually \u20b9100\u2013\u20b9500 hain, ek order \u20b950,000 ka hai.",
        prompt: "Analyst ko pehle kya karna chahiye?",
        expectedResponse: "A \u2014 Correct! Ye genuine bulk order bhi ho sakta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is an outlier?",
        sampleAnswer: "An observation that is unusually distant from the bulk of the data."
      },
      {
        id: 2,
        question: "Does every outlier indicate an error?",
        sampleAnswer: "No. It may be a valid unusual event or a recording problem."
      },
      {
        id: 3,
        question: "How does the IQR method help?",
        sampleAnswer: "It flags values beyond bounds based on the middle 50% of data."
      },
      {
        id: 4,
        question: "How should you report outlier handling?",
        sampleAnswer: "Explain the detection rule, investigation and any inclusion or exclusion decisions."
      },
    ]
  },
  "34.7": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 34,
    moduleName: "Module 34: Exploratory Data Analysis",
    topicKey: "34.7",
    id: 292,
    topicTitle: "Explore Relationships Between Variables",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "Which chart is useful for two numeric variables?",
        options: [
          { key: "A", text: "Scatter plot" },
          { key: "B", text: "Pie chart of file names" },
          { key: "C", text: "Single text box" },
          { key: "D", text: "Calendar icon" },
        ],
        correct: 0,
        explanation: "Scatter plot pairs of numeric observations show karta hai.",
        hint: "Focus on Scatter plot to answer this concept."
      },
      {
        id: 2,
        question: "What does a positive correlation suggest?",
        options: [
          { key: "A", text: "Both variables must be equal" },
          { key: "B", text: "One variable always causes the other" },
          { key: "C", text: "Both variables tend to increase together" },
          { key: "D", text: "No relationship is possible" },
        ],
        correct: 2,
        explanation: "Positive association direction batata hai, causation nahi.",
        hint: "Focus on Both variables tend to increase together to answer this concept."
      },
      {
        id: 3,
        question: "What does a correlation near zero imply about a linear relationship?",
        options: [
          { key: "A", text: "Perfect positive association" },
          { key: "B", text: "Definitely no relationship of any kind" },
          { key: "C", text: "Guaranteed causation" },
          { key: "D", text: "Little or no linear association" },
        ],
        correct: 3,
        explanation: "Near-zero correlation nonlinear relationship ko rule out nahi karta.",
        hint: "Focus on Little or no linear association to answer this concept."
      },
      {
        id: 4,
        question: "Ice cream sales and swimming visits rise in summer. What may influence both?",
        options: [
          { key: "A", text: "Customer ID alone" },
          { key: "B", text: "File extension" },
          { key: "C", text: "Spreadsheet font" },
          { key: "D", text: "Season or temperature" },
        ],
        correct: 3,
        explanation: "Third variable confounder ho sakta hai.",
        hint: "Focus on Season or temperature to answer this concept."
      },
      {
        id: 5,
        question: "What can a scatter plot reveal besides direction?",
        options: [
          { key: "A", text: "Clusters, outliers and possible nonlinear patterns" },
          { key: "B", text: "Exact causal proof" },
          { key: "C", text: "Guaranteed predictions" },
          { key: "D", text: "Passwords" },
        ],
        correct: 0,
        explanation: "Visual inspection pattern aur anomalies detect karne mein help karti hai.",
        hint: "Focus on Clusters, outliers and possible nonlinear patterns to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Explore an Association",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Choose two numeric fields", "Plot paired points", "Inspect pattern and outliers", "Interpret cautiously"],
        shuffled: ["Interpret cautiously", "Inspect pattern and outliers", "Plot paired points", "Choose two numeric fields"],
        expected: ["Choose two numeric fields", "Plot paired points", "Inspect pattern and outliers", "Interpret cautiously"],
        hint: "Pattern association dikha sakta hai, cause nahi."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Check a Possible Confounder",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Observe a relationship", "Identify possible third factors", "Compare relevant subgroups", "Qualify conclusion"],
        shuffled: ["Qualify conclusion", "Compare relevant subgroups", "Identify possible third factors", "Observe a relationship"],
        expected: ["Observe a relationship", "Identify possible third factors", "Compare relevant subgroups", "Qualify conclusion"],
        hint: "Confounding se apparent relationship change ho sakta hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Validate a Correlation",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Check data quality", "Plot scatter", "Compute correlation if appropriate", "Avoid causal claims"],
        shuffled: ["Avoid causal claims", "Compute correlation if appropriate", "Plot scatter", "Check data quality"],
        expected: ["Check data quality", "Plot scatter", "Compute correlation if appropriate", "Avoid causal claims"],
        hint: "Number ke saath visual aur context bhi dekho."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "correlation",
        meaning: "A measure of association, often describing the directio..."
      },
      {
        id: 2,
        snippet: "Does correlation prove causation",
        meaning: "No. Other variables or alternative explanations may acc..."
      },
      {
        id: 3,
        snippet: "a confounding variable",
        meaning: "A third variable associated with both variables being c..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Select a Relationship Chart",
        scenario: "Analyst ko advertising spend aur weekly sales ke beech relationship explore karna hai.",
        prompt: "Kaunsa chart best hai?",
        expectedResponse: "C \u2014 Correct! Scatter plot do numeric variables ke pairs show karta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is correlation?",
        sampleAnswer: "A measure of association, often describing the direction and strength of a linear relationship."
      },
      {
        id: 2,
        question: "Does correlation prove causation?",
        sampleAnswer: "No. Other variables or alternative explanations may account for the association."
      },
      {
        id: 3,
        question: "What is a confounding variable?",
        sampleAnswer: "A third variable associated with both variables being compared that can distort their apparent relationship."
      },
      {
        id: 4,
        question: "Why inspect a scatter plot before relying on a correlation coefficient?",
        sampleAnswer: "It can reveal outliers, clusters and nonlinear patterns hidden by one number."
      },
    ]
  },
  "34.8": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 34,
    moduleName: "Module 34: Exploratory Data Analysis",
    topicKey: "34.8",
    id: 293,
    topicTitle: "Avoid Common Analytical Errors",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What is cherry-picking in analysis?",
        options: [
          { key: "A", text: "Comparing like-for-like metrics" },
          { key: "B", text: "Checking all available periods" },
          { key: "C", text: "Documenting assumptions" },
          { key: "D", text: "Selecting only data that supports a preferred story" },
        ],
        correct: 3,
        explanation: "Selective evidence misleading conclusion de sakta hai.",
        hint: "Focus on Selecting only data that supports a preferred story to answer this concept."
      },
      {
        id: 2,
        question: "A report compares one day of sales with a full month. What is wrong?",
        options: [
          { key: "A", text: "There are too many columns" },
          { key: "B", text: "The data must be normally distributed" },
          { key: "C", text: "The periods are not comparable" },
          { key: "D", text: "The font is too small" },
        ],
        correct: 2,
        explanation: "Different durations se comparison unfair ho jata hai.",
        hint: "Focus on The periods are not comparable to answer this concept."
      },
      {
        id: 3,
        question: "What is data leakage in predictive analysis?",
        options: [
          { key: "A", text: "Checking for duplicate rows" },
          { key: "B", text: "Using information that would not be available at prediction time" },
          { key: "C", text: "Writing a chart title" },
          { key: "D", text: "Sorting dates" },
        ],
        correct: 1,
        explanation: "Future information use karne se performance artificially high lag sakti hai.",
        hint: "Focus on Using information that would not be available at prediction time to answer this concept."
      },
      {
        id: 4,
        question: "Why check the denominator of a percentage?",
        options: [
          { key: "A", text: "A rate is always a count" },
          { key: "B", text: "Percentages never change" },
          { key: "C", text: "A percentage can mislead without its base" },
          { key: "D", text: "Denominators are optional in every rate" },
        ],
        correct: 2,
        explanation: "Base clear na ho to rate ka meaning misleading ho sakta hai.",
        hint: "Focus on A percentage can mislead without its base to answer this concept."
      },
      {
        id: 5,
        question: "Which claim is safest after observing a correlation?",
        options: [
          { key: "A", text: "The pattern will always continue" },
          { key: "B", text: "One variable definitely causes the other" },
          { key: "C", text: "The variables are associated in this dataset" },
          { key: "D", text: "No further checks are needed" },
        ],
        correct: 2,
        explanation: "Evidence jitna support kare, utna hi claim karo.",
        hint: "Focus on The variables are associated in this dataset to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Audit an Analysis",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Check metric definition", "Verify time period", "Inspect denominators", "Review conclusion against evidence"],
        shuffled: ["Review conclusion against evidence", "Inspect denominators", "Verify time period", "Check metric definition"],
        expected: ["Check metric definition", "Verify time period", "Inspect denominators", "Review conclusion against evidence"],
        hint: "Reporting se pehle core assumptions verify karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Prevent Data Leakage",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Define prediction time", "List available features then", "Exclude future information", "Re-evaluate performance"],
        shuffled: ["Re-evaluate performance", "Exclude future information", "List available features then", "Define prediction time"],
        expected: ["Define prediction time", "List available features then", "Exclude future information", "Re-evaluate performance"],
        hint: "Prediction ke time unavailable data use nahi karna."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Review a Bold Claim",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Read the claim", "Locate supporting data", "Check alternatives and limitations", "Rewrite cautiously"],
        shuffled: ["Rewrite cautiously", "Check alternatives and limitations", "Locate supporting data", "Read the claim"],
        expected: ["Read the claim", "Locate supporting data", "Check alternatives and limitations", "Rewrite cautiously"],
        hint: "Claim ko evidence ke level par calibrate karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "analytical bias",
        meaning: "A systematic distortion in data selection, methods or i..."
      },
      {
        id: 2,
        snippet: "the denominator important",
        meaning: "It defines the base used to calculate a rate or percent..."
      },
      {
        id: 3,
        snippet: "data leakage",
        meaning: "Including information in analysis or modeling that woul..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Fix a Misleading Comparison",
        scenario: "Analyst ne Monday ki sales ko poore February ki sales se compare kiya.",
        prompt: "Kya correction chahiye?",
        expectedResponse: "B \u2014 Correct! Same-duration ya properly normalized comparison karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is analytical bias?",
        sampleAnswer: "A systematic distortion in data selection, methods or interpretation that can mislead results."
      },
      {
        id: 2,
        question: "Why is the denominator important?",
        sampleAnswer: "It defines the base used to calculate a rate or percentage."
      },
      {
        id: 3,
        question: "What is data leakage?",
        sampleAnswer: "Including information in analysis or modeling that would not legitimately be available when used."
      },
      {
        id: 4,
        question: "How do you avoid overstating a finding?",
        sampleAnswer: "Verify the evidence, consider alternatives and describe uncertainty clearly."
      },
    ]
  },
  "35.1": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 35,
    moduleName: "Module 35: Statistics for Data Analysts",
    topicKey: "35.1",
    id: 302,
    topicTitle: "Population and Sample",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What is a population in statistics?",
        options: [
          { key: "A", text: "The entire group of interest" },
          { key: "B", text: "A chart title" },
          { key: "C", text: "A single observation always" },
          { key: "D", text: "Only the first ten records" },
        ],
        correct: 0,
        explanation: "Population poora target group hota hai.",
        hint: "Focus on The entire group of interest to answer this concept."
      },
      {
        id: 2,
        question: "What is a sample?",
        options: [
          { key: "A", text: "A subset selected from the population" },
          { key: "B", text: "Every possible observation" },
          { key: "C", text: "A file type" },
          { key: "D", text: "The total number of columns" },
        ],
        correct: 0,
        explanation: "Sample population ka selected part hota hai.",
        hint: "Focus on A subset selected from the population to answer this concept."
      },
      {
        id: 3,
        question: "A survey of 200 out of 5,000 customers uses which sample?",
        options: [
          { key: "A", text: "Only the store manager" },
          { key: "B", text: "All 5,000 customers" },
          { key: "C", text: "The 200 surveyed customers" },
          { key: "D", text: "Every future customer" },
        ],
        correct: 2,
        explanation: "Survey ke 200 participants sample hain.",
        hint: "Focus on The 200 surveyed customers to answer this concept."
      },
      {
        id: 4,
        question: "What is a population parameter?",
        options: [
          { key: "A", text: "A spreadsheet tab" },
          { key: "B", text: "A number computed only from a sample" },
          { key: "C", text: "A random file name" },
          { key: "D", text: "A numerical characteristic of the entire population" },
        ],
        correct: 3,
        explanation: "Population mean jaisi quantity parameter hoti hai.",
        hint: "Focus on A numerical characteristic of the entire population to answer this concept."
      },
      {
        id: 5,
        question: "Why use a representative sample?",
        options: [
          { key: "A", text: "To avoid defining a population" },
          { key: "B", text: "To estimate population characteristics with less bias" },
          { key: "C", text: "To remove all data cleaning" },
          { key: "D", text: "To guarantee zero uncertainty" },
        ],
        correct: 1,
        explanation: "Representative selection inference ko more reliable banata hai.",
        hint: "Focus on To estimate population characteristics with less bias to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Plan a Customer Survey",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Define all customers as population", "Select a sample", "Collect responses", "Interpret with uncertainty"],
        shuffled: ["Interpret with uncertainty", "Collect responses", "Select a sample", "Define all customers as population"],
        expected: ["Define all customers as population", "Select a sample", "Collect responses", "Interpret with uncertainty"],
        hint: "Sample se population par estimate lagate waqt uncertainty hoti hai."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Distinguish Groups",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify target population", "Mark surveyed customers", "Calculate sample statistic", "Discuss population estimate"],
        shuffled: ["Discuss population estimate", "Calculate sample statistic", "Mark surveyed customers", "Identify target population"],
        expected: ["Identify target population", "Mark surveyed customers", "Calculate sample statistic", "Discuss population estimate"],
        hint: "Sample statistic se population parameter estimate karte hain."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Improve Representation",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["List important customer groups", "Choose a suitable sampling plan", "Check participation", "Report limitations"],
        shuffled: ["Report limitations", "Check participation", "Choose a suitable sampling plan", "List important customer groups"],
        expected: ["List important customer groups", "Choose a suitable sampling plan", "Check participation", "Report limitations"],
        hint: "Sample coverage aur nonresponse ko consider karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "the difference between population and sample",
        meaning: "A population is the full group of interest; a sample is..."
      },
      {
        id: 2,
        snippet: "a parameter",
        meaning: "A numerical characteristic of a population, such as its..."
      },
      {
        id: 3,
        snippet: "a statistic",
        meaning: "A numerical summary calculated from sample observations..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Identify the Sample",
        scenario: "Ek company ke 5,000 customers hain. Analyst 200 customers ka survey karta hai.",
        prompt: "Sample kaun hai?",
        expectedResponse: "A \u2014 Correct! 200 surveyed customers selected sample hain."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is the difference between population and sample?",
        sampleAnswer: "A population is the full group of interest; a sample is a selected subset."
      },
      {
        id: 2,
        question: "What is a parameter?",
        sampleAnswer: "A numerical characteristic of a population, such as its true mean."
      },
      {
        id: 3,
        question: "What is a statistic?",
        sampleAnswer: "A numerical summary calculated from sample observations."
      },
      {
        id: 4,
        question: "Why does sample representativeness matter?",
        sampleAnswer: "It affects how well sample results can generalize to the population."
      },
    ]
  },
  "35.2": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 35,
    moduleName: "Module 35: Statistics for Data Analysts",
    topicKey: "35.2",
    id: 303,
    topicTitle: "Mean, Median and Mode",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What is the mean of 2, 4 and 6?",
        options: [
          { key: "A", text: "12" },
          { key: "B", text: "4" },
          { key: "C", text: "6" },
          { key: "D", text: "2" },
        ],
        correct: 1,
        explanation: "Total 12 ko 3 se divide karne par mean 4 aata hai.",
        hint: "Focus on 4 to answer this concept."
      },
      {
        id: 2,
        question: "What is the median of 3, 8 and 20?",
        options: [
          { key: "A", text: "10.33" },
          { key: "B", text: "3" },
          { key: "C", text: "20" },
          { key: "D", text: "8" },
        ],
        correct: 3,
        explanation: "Sorted list ka middle value 8 hai.",
        hint: "Focus on 8 to answer this concept."
      },
      {
        id: 3,
        question: "What is the mode of 2, 2, 5 and 7?",
        options: [
          { key: "A", text: "2" },
          { key: "B", text: "5" },
          { key: "C", text: "4" },
          { key: "D", text: "7" },
        ],
        correct: 0,
        explanation: "Mode sabse frequent value hoti hai.",
        hint: "Focus on 2 to answer this concept."
      },
      {
        id: 4,
        question: "Which measure is often best for skewed income data?",
        options: [
          { key: "A", text: "Range" },
          { key: "B", text: "Maximum" },
          { key: "C", text: "Sum" },
          { key: "D", text: "Median" },
        ],
        correct: 3,
        explanation: "Extreme incomes median ko mean se kam affect karte hain.",
        hint: "Focus on Median to answer this concept."
      },
      {
        id: 5,
        question: "What if every value occurs equally often and no value repeats?",
        options: [
          { key: "A", text: "The mean becomes zero" },
          { key: "B", text: "The largest value must be the mode" },
          { key: "C", text: "There is no unique mode" },
          { key: "D", text: "The median is undefined always" },
        ],
        correct: 2,
        explanation: "Koi value highest unique frequency se nahi aati.",
        hint: "Focus on There is no unique mode to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Calculate a Mean",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Add values", "Count values", "Divide total by count", "State the mean"],
        shuffled: ["State the mean", "Divide total by count", "Count values", "Add values"],
        expected: ["Add values", "Count values", "Divide total by count", "State the mean"],
        hint: "Mean arithmetic average hai."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Find a Median",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Sort values", "Find the center position", "Average two centers if count is even", "Report median"],
        shuffled: ["Report median", "Average two centers if count is even", "Find the center position", "Sort values"],
        expected: ["Sort values", "Find the center position", "Average two centers if count is even", "Report median"],
        hint: "Even count mein middle do values ka average lete hain."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Find the Mode",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Count each value", "Compare frequencies", "Identify most frequent value or ties"],
        shuffled: ["Identify most frequent value or ties", "Compare frequencies", "Count each value"],
        expected: ["Count each value", "Compare frequencies", "Identify most frequent value or ties"],
        hint: "Mode frequency par depend karta hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How do you calculate the mean",
        meaning: "Add all numeric observations and divide by their count."
      },
      {
        id: 2,
        snippet: "the median",
        meaning: "The middle value after sorting, or the average of two m..."
      },
      {
        id: 3,
        snippet: "the mode",
        meaning: "The most frequently occurring value or values."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Choose Typical Salary Measure",
        scenario: "Office salaries \u20b920,000, \u20b922,000 aur \u20b92,00,000 hain.",
        prompt: "Typical salary describe karne ke liye kaunsa measure robust hai?",
        expectedResponse: "C \u2014 Correct! High outlier ke saath median typical value better show karta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How do you calculate the mean?",
        sampleAnswer: "Add all numeric observations and divide by their count."
      },
      {
        id: 2,
        question: "What is the median?",
        sampleAnswer: "The middle value after sorting, or the average of two middle values for an even count."
      },
      {
        id: 3,
        question: "What is the mode?",
        sampleAnswer: "The most frequently occurring value or values."
      },
      {
        id: 4,
        question: "When might mean and median differ substantially?",
        sampleAnswer: "When the distribution is skewed or has extreme values."
      },
    ]
  },
  "35.3": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 35,
    moduleName: "Module 35: Statistics for Data Analysts",
    topicKey: "35.3",
    id: 304,
    topicTitle: "Range, Variance and Standard Deviation",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What is the range of 4, 8 and 12?",
        options: [
          { key: "A", text: "24" },
          { key: "B", text: "4" },
          { key: "C", text: "8" },
          { key: "D", text: "12" },
        ],
        correct: 2,
        explanation: "Range = maximum minus minimum = 12 - 4 = 8.",
        hint: "Focus on 8 to answer this concept."
      },
      {
        id: 2,
        question: "What does variance measure?",
        options: [
          { key: "A", text: "The most frequent value" },
          { key: "B", text: "Average squared deviation from the mean, with a population/sample convention" },
          { key: "C", text: "Only the largest value" },
          { key: "D", text: "Number of missing rows" },
        ],
        correct: 1,
        explanation: "Variance spread ko squared units mein express karti hai.",
        hint: "Focus on Average squared deviation from the mean, with a population/sample convention to answer this concept."
      },
      {
        id: 3,
        question: "What is standard deviation?",
        options: [
          { key: "A", text: "The difference between mode and median" },
          { key: "B", text: "The square of the mean" },
          { key: "C", text: "Always equal to range" },
          { key: "D", text: "The square root of variance" },
        ],
        correct: 3,
        explanation: "Standard deviation original units mein spread dikhati hai.",
        hint: "Focus on The square root of variance to answer this concept."
      },
      {
        id: 4,
        question: "Which dataset has greater spread?",
        options: [
          { key: "A", text: "4, 5, 6" },
          { key: "B", text: "1, 5, 9" },
          { key: "C", text: "5, 5, 5" },
          { key: "D", text: "5, 5, 6" },
        ],
        correct: 1,
        explanation: "1,5,9 mean se zyada distant hai, spread bada hai.",
        hint: "Focus on 1, 5, 9 to answer this concept."
      },
      {
        id: 5,
        question: "If all values in a population are identical, what is its standard deviation?",
        options: [
          { key: "A", text: "Undefined in all cases" },
          { key: "B", text: "0" },
          { key: "C", text: "1" },
          { key: "D", text: "The mean" },
        ],
        correct: 1,
        explanation: "Sab values mean ke equal hon to deviations zero hote hain.",
        hint: "Focus on 0 to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Calculate Range",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify minimum", "Identify maximum", "Subtract minimum from maximum", "Interpret spread"],
        shuffled: ["Interpret spread", "Subtract minimum from maximum", "Identify maximum", "Identify minimum"],
        expected: ["Identify minimum", "Identify maximum", "Subtract minimum from maximum", "Interpret spread"],
        hint: "Range extreme endpoints par based hota hai."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Calculate Population Variance",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Find mean", "Subtract mean from each value", "Square deviations", "Average squared deviations"],
        shuffled: ["Average squared deviations", "Square deviations", "Subtract mean from each value", "Find mean"],
        expected: ["Find mean", "Subtract mean from each value", "Square deviations", "Average squared deviations"],
        hint: "Population variance N se divide hoti hai; sample variance n-1 se."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Find Standard Deviation",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Calculate variance", "Take square root", "Compare with mean and units", "Explain variability"],
        shuffled: ["Explain variability", "Compare with mean and units", "Take square root", "Calculate variance"],
        expected: ["Calculate variance", "Take square root", "Compare with mean and units", "Explain variability"],
        hint: "SD original data units mein hoti hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "What does the range tell you",
        meaning: "The distance between the maximum and minimum observed v..."
      },
      {
        id: 2,
        snippet: "variance",
        meaning: "A measure of spread based on squared deviations from th..."
      },
      {
        id: 3,
        snippet: "How is standard deviation related to variance",
        meaning: "Standard deviation is the square root of variance and u..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Compare Consistency",
        scenario: "Team A daily output 10, 10, 10 hai; Team B 5, 10, 15 hai.",
        prompt: "Kis team ka output zyada consistent hai?",
        expectedResponse: "A \u2014 Correct! Team A ka standard deviation zero hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What does the range tell you?",
        sampleAnswer: "The distance between the maximum and minimum observed values."
      },
      {
        id: 2,
        question: "What is variance?",
        sampleAnswer: "A measure of spread based on squared deviations from the mean."
      },
      {
        id: 3,
        question: "How is standard deviation related to variance?",
        sampleAnswer: "Standard deviation is the square root of variance and uses the original units."
      },
      {
        id: 4,
        question: "What is the difference between population and sample variance?",
        sampleAnswer: "Population variance divides by N; the usual sample variance divides by n minus one."
      },
    ]
  },
  "35.4": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 35,
    moduleName: "Module 35: Statistics for Data Analysts",
    topicKey: "35.4",
    id: 305,
    topicTitle: "Percentiles and Quartiles",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What does the 25th percentile represent?",
        options: [
          { key: "A", text: "A value with about 25% of observations at or below it" },
          { key: "B", text: "Exactly 25 observations always" },
          { key: "C", text: "The largest observation" },
          { key: "D", text: "The arithmetic mean" },
        ],
        correct: 0,
        explanation: "P25 relative position describe karta hai.",
        hint: "Focus on A value with about 25% of observations at or below it to answer this concept."
      },
      {
        id: 2,
        question: "Which quartile is the median?",
        options: [
          { key: "A", text: "Q4 always" },
          { key: "B", text: "Q2" },
          { key: "C", text: "Q3" },
          { key: "D", text: "Q1" },
        ],
        correct: 1,
        explanation: "Q2 distribution ka middle, yani 50th percentile hai.",
        hint: "Focus on Q2 to answer this concept."
      },
      {
        id: 3,
        question: "What does Q3 represent?",
        options: [
          { key: "A", text: "The mode" },
          { key: "B", text: "The 75th percentile" },
          { key: "C", text: "The minimum" },
          { key: "D", text: "The mean" },
        ],
        correct: 1,
        explanation: "Q3 approx 75% observations ke at-or-below point ko indicate karta hai.",
        hint: "Focus on The 75th percentile to answer this concept."
      },
      {
        id: 4,
        question: "How is IQR calculated?",
        options: [
          { key: "A", text: "Q3 minus Q1" },
          { key: "B", text: "Mean minus mode" },
          { key: "C", text: "Q3 plus Q1" },
          { key: "D", text: "Maximum divided by minimum" },
        ],
        correct: 0,
        explanation: "IQR middle 50% observations ka spread hai.",
        hint: "Focus on Q3 minus Q1 to answer this concept."
      },
      {
        id: 5,
        question: "Which measure describes the middle half of a distribution?",
        options: [
          { key: "A", text: "Interquartile range" },
          { key: "B", text: "Total sum" },
          { key: "C", text: "Maximum only" },
          { key: "D", text: "Row count" },
        ],
        correct: 0,
        explanation: "IQR central 50 percent values ka range dikhata hai.",
        hint: "Focus on Interquartile range to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Read Quartiles",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Sort observations", "Identify Q1", "Identify median Q2", "Identify Q3"],
        shuffled: ["Identify Q3", "Identify median Q2", "Identify Q1", "Sort observations"],
        expected: ["Sort observations", "Identify Q1", "Identify median Q2", "Identify Q3"],
        hint: "Quartile definitions software method se slightly differ kar sakti hain."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Calculate IQR",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Find lower quartile Q1", "Find upper quartile Q3", "Subtract Q1 from Q3", "Interpret middle spread"],
        shuffled: ["Interpret middle spread", "Subtract Q1 from Q3", "Find upper quartile Q3", "Find lower quartile Q1"],
        expected: ["Find lower quartile Q1", "Find upper quartile Q3", "Subtract Q1 from Q3", "Interpret middle spread"],
        hint: "IQR robust spread measure hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Explain P90",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Locate 90th percentile", "Identify value at that point", "State about 90% are at or below", "Avoid saying all values equal it"],
        shuffled: ["Avoid saying all values equal it", "State about 90% are at or below", "Identify value at that point", "Locate 90th percentile"],
        expected: ["Locate 90th percentile", "Identify value at that point", "State about 90% are at or below", "Avoid saying all values equal it"],
        hint: "Percentile cutoff ko exact frequency count se confuse mat karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "a percentile",
        meaning: "A cutoff value describing the relative position of obse..."
      },
      {
        id: 2,
        snippet: "What are Q1, Q2 and Q3",
        meaning: "They are the 25th, 50th and 75th percentiles under a ch..."
      },
      {
        id: 3,
        snippet: "How do you calculate IQR",
        meaning: "Subtract the first quartile from the third quartile."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Interpret a Percentile",
        scenario: "Delivery time ka 90th percentile 40 minutes hai.",
        prompt: "Iska best meaning kya hai?",
        expectedResponse: "B \u2014 Correct! P90 upper-tail performance samajhne mein useful hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is a percentile?",
        sampleAnswer: "A cutoff value describing the relative position of observations in an ordered distribution."
      },
      {
        id: 2,
        question: "What are Q1, Q2 and Q3?",
        sampleAnswer: "They are the 25th, 50th and 75th percentiles under a chosen calculation convention."
      },
      {
        id: 3,
        question: "How do you calculate IQR?",
        sampleAnswer: "Subtract the first quartile from the third quartile."
      },
      {
        id: 4,
        question: "Why might analysts report percentiles instead of only the mean?",
        sampleAnswer: "Percentiles show the distribution and tail behavior beyond one average."
      },
    ]
  },
  "35.5": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 35,
    moduleName: "Module 35: Statistics for Data Analysts",
    topicKey: "35.5",
    id: 306,
    topicTitle: "Sampling Methods and Bias",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What is simple random sampling?",
        options: [
          { key: "A", text: "Picking only first ten entries" },
          { key: "B", text: "Selecting only nearby people" },
          { key: "C", text: "Choosing only positive reviews" },
          { key: "D", text: "Every member has an equal chance of selection" },
        ],
        correct: 3,
        explanation: "Random selection selection bias reduce karne mein help karti hai.",
        hint: "Focus on Every member has an equal chance of selection to answer this concept."
      },
      {
        id: 2,
        question: "What is stratified sampling?",
        options: [
          { key: "A", text: "Surveying only one friend" },
          { key: "B", text: "Deleting small groups" },
          { key: "C", text: "Sampling within predefined groups such as regions" },
          { key: "D", text: "Taking the first page of records" },
        ],
        correct: 2,
        explanation: "Strata se important subgroups cover kar sakte hain.",
        hint: "Focus on Sampling within predefined groups such as regions to answer this concept."
      },
      {
        id: 3,
        question: "Which is an example of convenience sampling?",
        options: [
          { key: "A", text: "Sampling proportionally within every region" },
          { key: "B", text: "Randomly selecting IDs from all customers" },
          { key: "C", text: "Drawing lots from a full list" },
          { key: "D", text: "Surveying only customers standing beside the analyst" },
        ],
        correct: 3,
        explanation: "Convenience sample easy hota hai, lekin biased ho sakta hai.",
        hint: "Focus on Surveying only customers standing beside the analyst to answer this concept."
      },
      {
        id: 4,
        question: "What is nonresponse bias?",
        options: [
          { key: "A", text: "All survey questions are short" },
          { key: "B", text: "Responders differ systematically from nonresponders" },
          { key: "C", text: "Every respondent chooses the same answer" },
          { key: "D", text: "The sample has exactly 100 people" },
        ],
        correct: 1,
        explanation: "Jo log respond nahi karte unka pattern results ko bias kar sakta hai.",
        hint: "Focus on Responders differ systematically from nonresponders to answer this concept."
      },
      {
        id: 5,
        question: "How can a survey reduce selection bias?",
        options: [
          { key: "A", text: "Use a sampling frame covering the target population" },
          { key: "B", text: "Remove unfavorable answers" },
          { key: "C", text: "Invite only loyal customers" },
          { key: "D", text: "Select only volunteers from one team" },
        ],
        correct: 0,
        explanation: "Target population ki proper coverage important hai.",
        hint: "Focus on Use a sampling frame covering the target population to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Design a Sample",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Define population", "Build sampling frame", "Select sampling method", "Collect responses"],
        shuffled: ["Collect responses", "Select sampling method", "Build sampling frame", "Define population"],
        expected: ["Define population", "Build sampling frame", "Select sampling method", "Collect responses"],
        hint: "Sampling plan pehle decide karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Stratify a Survey",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify regions", "Split customers by region", "Sample within each region", "Combine results appropriately"],
        shuffled: ["Combine results appropriately", "Sample within each region", "Split customers by region", "Identify regions"],
        expected: ["Identify regions", "Split customers by region", "Sample within each region", "Combine results appropriately"],
        hint: "Stratification se subgroups cover hote hain."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Check Bias",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Compare respondents with target population", "Review missing groups", "Assess nonresponse", "Report limitations"],
        shuffled: ["Report limitations", "Assess nonresponse", "Review missing groups", "Compare respondents with target population"],
        expected: ["Compare respondents with target population", "Review missing groups", "Assess nonresponse", "Report limitations"],
        hint: "Bias ka possibility transparently mention karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "sampling bias",
        meaning: "A systematic error caused by how observations are selec..."
      },
      {
        id: 2,
        snippet: "How does simple random sampling work",
        meaning: "Every population member has an equal selection probabil..."
      },
      {
        id: 3,
        snippet: "When would you use stratified sampling",
        meaning: "When important groups need planned representation in th..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Choose Fair Sampling",
        scenario: "Company ko 4 cities ke customers ka feedback chahiye.",
        prompt: "Kaunsa plan better representation de sakta hai?",
        expectedResponse: "C \u2014 Correct! Har city ko sampling plan mein include karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is sampling bias?",
        sampleAnswer: "A systematic error caused by how observations are selected or obtained."
      },
      {
        id: 2,
        question: "How does simple random sampling work?",
        sampleAnswer: "Every population member has an equal selection probability in the basic design."
      },
      {
        id: 3,
        question: "When would you use stratified sampling?",
        sampleAnswer: "When important groups need planned representation in the sample."
      },
      {
        id: 4,
        question: "What is nonresponse bias?",
        sampleAnswer: "Bias that occurs when respondents and nonrespondents differ on relevant characteristics."
      },
    ]
  },
  "35.6": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 35,
    moduleName: "Module 35: Statistics for Data Analysts",
    topicKey: "35.6",
    id: 307,
    topicTitle: "Probability Basics",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What is the probability of a fair coin landing heads?",
        options: [
          { key: "A", text: "0" },
          { key: "B", text: "0.5" },
          { key: "C", text: "1" },
          { key: "D", text: "2" },
        ],
        correct: 1,
        explanation: "Fair coin mein 2 equally likely outcomes hain, heads chance 1/2 hai.",
        hint: "Focus on 0.5 to answer this concept."
      },
      {
        id: 2,
        question: "What is the valid range of a probability?",
        options: [
          { key: "A", text: "-1 to 1" },
          { key: "B", text: "1 to 100 only" },
          { key: "C", text: "Any negative number" },
          { key: "D", text: "0 to 1 inclusive" },
        ],
        correct: 3,
        explanation: "Probability zero aur one ke beech hoti hai.",
        hint: "Focus on 0 to 1 inclusive to answer this concept."
      },
      {
        id: 3,
        question: "What is the probability of rolling a 6 on a fair six-sided die?",
        options: [
          { key: "A", text: "1/6" },
          { key: "B", text: "6" },
          { key: "C", text: "1/2" },
          { key: "D", text: "1/3" },
        ],
        correct: 0,
        explanation: "6 equally likely faces mein one favorable face hai.",
        hint: "Focus on 1/6 to answer this concept."
      },
      {
        id: 4,
        question: "If an event has probability 0.2, what is its complement?",
        options: [
          { key: "A", text: "0.8" },
          { key: "B", text: "1.2" },
          { key: "C", text: "0.02" },
          { key: "D", text: "0.2" },
        ],
        correct: 0,
        explanation: "Complement = 1 - 0.2 = 0.8.",
        hint: "Focus on 0.8 to answer this concept."
      },
      {
        id: 5,
        question: "For independent events A and B, how do you find P(A and B)?",
        options: [
          { key: "A", text: "Always add P(A) and P(B)" },
          { key: "B", text: "Always take the larger probability" },
          { key: "C", text: "Multiply P(A) by P(B)" },
          { key: "D", text: "Subtract both from 1" },
        ],
        correct: 2,
        explanation: "Independence mein joint probability product hoti hai.",
        hint: "Focus on Multiply P(A) by P(B) to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Calculate Simple Probability",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Count favorable outcomes", "Count equally likely total outcomes", "Divide favorable by total", "Check answer is 0 to 1"],
        shuffled: ["Check answer is 0 to 1", "Divide favorable by total", "Count equally likely total outcomes", "Count favorable outcomes"],
        expected: ["Count favorable outcomes", "Count equally likely total outcomes", "Divide favorable by total", "Check answer is 0 to 1"],
        hint: "Equally likely assumption zaroori hai."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Find Complement Probability",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify event", "Read its probability", "Subtract from 1", "Interpret opposite event"],
        shuffled: ["Interpret opposite event", "Subtract from 1", "Read its probability", "Identify event"],
        expected: ["Identify event", "Read its probability", "Subtract from 1", "Interpret opposite event"],
        hint: "Complement ka total probability one hota hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Check Independent Events",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Define two events", "Confirm independence assumption", "Multiply probabilities", "State joint chance"],
        shuffled: ["State joint chance", "Multiply probabilities", "Confirm independence assumption", "Define two events"],
        expected: ["Define two events", "Confirm independence assumption", "Multiply probabilities", "State joint chance"],
        hint: "Independence ko bina evidence assume nahi karna."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "probability",
        meaning: "A numerical measure of how likely an event is, between ..."
      },
      {
        id: 2,
        snippet: "How do you calculate probability with equally likely outcomes",
        meaning: "Divide favorable outcomes by total possible outcomes."
      },
      {
        id: 3,
        snippet: "a complementary event",
        meaning: "The event that the original event does not occur."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Calculate Coin Probability",
        scenario: "Fair coin ko ek baar toss karna hai.",
        prompt: "Heads aane ki probability kya hai?",
        expectedResponse: "C \u2014 Correct! Heads aur tails equally likely hain, chance 50% hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is probability?",
        sampleAnswer: "A numerical measure of how likely an event is, between zero and one."
      },
      {
        id: 2,
        question: "How do you calculate probability with equally likely outcomes?",
        sampleAnswer: "Divide favorable outcomes by total possible outcomes."
      },
      {
        id: 3,
        question: "What is a complementary event?",
        sampleAnswer: "The event that the original event does not occur."
      },
      {
        id: 4,
        question: "What does independence mean in probability?",
        sampleAnswer: "Knowing one event occurred does not change the probability of the other event."
      },
    ]
  },
  "35.7": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 35,
    moduleName: "Module 35: Statistics for Data Analysts",
    topicKey: "35.7",
    id: 308,
    topicTitle: "Correlation vs Causation",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What does correlation measure in a basic linear analysis?",
        options: [
          { key: "A", text: "Guaranteed cause and effect" },
          { key: "B", text: "Strength and direction of linear association" },
          { key: "C", text: "Average of all values" },
          { key: "D", text: "Percentage of missing rows" },
        ],
        correct: 1,
        explanation: "Correlation linear relationship describe karta hai.",
        hint: "Focus on Strength and direction of linear association to answer this concept."
      },
      {
        id: 2,
        question: "What does a correlation of -0.8 suggest?",
        options: [
          { key: "A", text: "A strong positive linear association" },
          { key: "B", text: "Proof of causation" },
          { key: "C", text: "No linear association" },
          { key: "D", text: "A strong negative linear association" },
        ],
        correct: 3,
        explanation: "Negative sign inverse direction dikhata hai.",
        hint: "Focus on A strong negative linear association to answer this concept."
      },
      {
        id: 3,
        question: "Which statement is correct?",
        options: [
          { key: "A", text: "A scatter plot proves causality" },
          { key: "B", text: "No confounders can exist" },
          { key: "C", text: "Correlation alone does not prove causation" },
          { key: "D", text: "Every correlation is causal" },
        ],
        correct: 2,
        explanation: "Association ke alternate explanations ho sakte hain.",
        hint: "Focus on Correlation alone does not prove causation to answer this concept."
      },
      {
        id: 4,
        question: "Hot weather raises both ice cream sales and pool visits. What is temperature?",
        options: [
          { key: "A", text: "A potential confounder or common driver" },
          { key: "B", text: "A missing value" },
          { key: "C", text: "The primary key" },
          { key: "D", text: "A data type" },
        ],
        correct: 0,
        explanation: "Temperature dono outcomes influence kar sakta hai.",
        hint: "Focus on A potential confounder or common driver to answer this concept."
      },
      {
        id: 5,
        question: "What design often provides stronger causal evidence when feasible?",
        options: [
          { key: "A", text: "Removing unfavorable rows" },
          { key: "B", text: "Selecting one extreme example" },
          { key: "C", text: "Only a colorful chart" },
          { key: "D", text: "Randomized controlled experiment" },
        ],
        correct: 3,
        explanation: "Randomization confounding reduce kar sakti hai.",
        hint: "Focus on Randomized controlled experiment to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Evaluate an Association",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Observe relationship", "Look for confounders", "Check temporal order", "Avoid unsupported causal claim"],
        shuffled: ["Avoid unsupported causal claim", "Check temporal order", "Look for confounders", "Observe relationship"],
        expected: ["Observe relationship", "Look for confounders", "Check temporal order", "Avoid unsupported causal claim"],
        hint: "Association ko causal conclusion se alag rakho."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Plan a Causal Test",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Define intervention", "Select comparison design", "Measure outcomes", "Assess alternative explanations"],
        shuffled: ["Assess alternative explanations", "Measure outcomes", "Select comparison design", "Define intervention"],
        expected: ["Define intervention", "Select comparison design", "Measure outcomes", "Assess alternative explanations"],
        hint: "Causal evidence ke liye appropriate design chahiye."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Explain Negative Correlation",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Plot paired values", "Observe downward pattern", "Describe inverse association", "Note causality is unproven"],
        shuffled: ["Note causality is unproven", "Describe inverse association", "Observe downward pattern", "Plot paired values"],
        expected: ["Plot paired values", "Observe downward pattern", "Describe inverse association", "Note causality is unproven"],
        hint: "Negative correlation sirf direction aur strength batata hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "correlation",
        meaning: "It measures the direction and strength of association, ..."
      },
      {
        id: 2,
        snippet: "causation",
        meaning: "A change in one factor produces a change in another, un..."
      },
      {
        id: 3,
        snippet: "Why can a confounder be misleading",
        meaning: "It may influence both variables and create or distort a..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Interpret Ad Spend",
        scenario: "Ad spending badhne ke saath sales bhi badhi, lekin promotion season bhi tha.",
        prompt: "Kaunsa conclusion safest hai?",
        expectedResponse: "C \u2014 Correct! Correlation ko direct causal proof mat samjho."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is correlation?",
        sampleAnswer: "It measures the direction and strength of association, commonly linear association."
      },
      {
        id: 2,
        question: "What is causation?",
        sampleAnswer: "A change in one factor produces a change in another, under a causal interpretation."
      },
      {
        id: 3,
        question: "Why can a confounder be misleading?",
        sampleAnswer: "It may influence both variables and create or distort an observed association."
      },
      {
        id: 4,
        question: "How can causal evidence be strengthened?",
        sampleAnswer: "Use a suitable study design, such as randomization when ethical and feasible, and assess alternatives."
      },
    ]
  },
  "35.8": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 35,
    moduleName: "Module 35: Statistics for Data Analysts",
    topicKey: "35.8",
    id: 309,
    topicTitle: "Hypothesis Testing Introduction",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What is the null hypothesis H0 usually used for?",
        options: [
          { key: "A", text: "A chart legend" },
          { key: "B", text: "The sample size itself" },
          { key: "C", text: "The final business recommendation" },
          { key: "D", text: "A baseline claim such as no difference or effect" },
        ],
        correct: 3,
        explanation: "H0 baseline assumption hai jiske against evidence evaluate hota hai.",
        hint: "Focus on A baseline claim such as no difference or effect to answer this concept."
      },
      {
        id: 2,
        question: "What does a p-value describe?",
        options: [
          { key: "A", text: "Probability the result will repeat" },
          { key: "B", text: "How unusual data at least this extreme would be if H0 and model assumptions held" },
          { key: "C", text: "Probability H0 is true" },
          { key: "D", text: "Size of the business impact" },
        ],
        correct: 1,
        explanation: "p-value P(H0 true) nahi hota.",
        hint: "Focus on How unusual data at least this extreme would be if H0 and model assumptions held to answer this concept."
      },
      {
        id: 3,
        question: "If p = 0.03 and alpha = 0.05, what is the usual decision?",
        options: [
          { key: "A", text: "Reject H0 at the 5% significance level" },
          { key: "B", text: "Ignore the test design" },
          { key: "C", text: "Prove H0 true" },
          { key: "D", text: "Guarantee a large effect" },
        ],
        correct: 0,
        explanation: "p alpha se kam hai, isliye chosen threshold par reject karte hain.",
        hint: "Focus on Reject H0 at the 5% significance level to answer this concept."
      },
      {
        id: 4,
        question: "What is a Type I error?",
        options: [
          { key: "A", text: "Entering text in a numeric column" },
          { key: "B", text: "Using a bar chart" },
          { key: "C", text: "Rejecting a true null hypothesis" },
          { key: "D", text: "Failing to reject a false null hypothesis" },
        ],
        correct: 2,
        explanation: "False positive conclusion Type I error hai.",
        hint: "Focus on Rejecting a true null hypothesis to answer this concept."
      },
      {
        id: 5,
        question: "What does failure to reject H0 mean?",
        options: [
          { key: "A", text: "The sample contains no errors" },
          { key: "B", text: "Insufficient evidence to reject H0 under the test" },
          { key: "C", text: "Proof of no possible effect" },
          { key: "D", text: "Proof that H0 is true" },
        ],
        correct: 1,
        explanation: "Non-significant result H0 ko prove nahi karta.",
        hint: "Focus on Insufficient evidence to reject H0 under the test to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Run a Basic Hypothesis Test",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["State H0 and H1", "Choose a suitable test and alpha", "Check assumptions and calculate p-value", "Interpret decision cautiously"],
        shuffled: ["Interpret decision cautiously", "Check assumptions and calculate p-value", "Choose a suitable test and alpha", "State H0 and H1"],
        expected: ["State H0 and H1", "Choose a suitable test and alpha", "Check assumptions and calculate p-value", "Interpret decision cautiously"],
        hint: "Test assumptions aur threshold pehle clear karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Explain a P-value",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Assume H0 and model", "Compare observed statistic to its null distribution", "Find tail probability", "Avoid interpreting it as P(H0 true)"],
        shuffled: ["Avoid interpreting it as P(H0 true)", "Find tail probability", "Compare observed statistic to its null distribution", "Assume H0 and model"],
        expected: ["Assume H0 and model", "Compare observed statistic to its null distribution", "Find tail probability", "Avoid interpreting it as P(H0 true)"],
        hint: "p-value null ke under extremeness batata hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Report a Test",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["State estimated effect", "Report uncertainty and p-value", "Note sample and assumptions", "Explain practical relevance"],
        shuffled: ["Explain practical relevance", "Note sample and assumptions", "Report uncertainty and p-value", "State estimated effect"],
        expected: ["State estimated effect", "Report uncertainty and p-value", "Note sample and assumptions", "Explain practical relevance"],
        hint: "Significance aur business importance alag concepts hain."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "a null hypothesis",
        meaning: "A baseline statistical claim, often no difference or no..."
      },
      {
        id: 2,
        snippet: "a p-value",
        meaning: "The probability under the null model of results at leas..."
      },
      {
        id: 3,
        snippet: "statistical significance",
        meaning: "A result crossing a prespecified decision threshold und..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Read a Test Result",
        scenario: "Ek appropriate test mein p-value 0.03 aur alpha 0.05 hai.",
        prompt: "Us threshold par standard decision kya hai?",
        expectedResponse: "C \u2014 Correct! p < alpha par H0 reject hota hai; effect size alag check karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is a null hypothesis?",
        sampleAnswer: "A baseline statistical claim, often no difference or no effect, evaluated against data."
      },
      {
        id: 2,
        question: "What is a p-value?",
        sampleAnswer: "The probability under the null model of results at least as extreme as those observed."
      },
      {
        id: 3,
        question: "What is statistical significance?",
        sampleAnswer: "A result crossing a prespecified decision threshold under a chosen statistical test."
      },
      {
        id: 4,
        question: "Does a small p-value guarantee practical importance?",
        sampleAnswer: "No. Effect size, uncertainty and business context must also be considered."
      },
    ]
  },
  "35.9": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 35,
    moduleName: "Module 35: Statistics for Data Analysts",
    topicKey: "35.9",
    id: 310,
    topicTitle: "Interpreting Statistical Results Carefully",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "Why report an effect size along with a p-value?",
        options: [
          { key: "A", text: "It replaces the need for data" },
          { key: "B", text: "It guarantees causation" },
          { key: "C", text: "It always equals the p-value" },
          { key: "D", text: "It shows the magnitude of the observed difference" },
        ],
        correct: 3,
        explanation: "Magnitude practical importance samajhne mein help karti hai.",
        hint: "Focus on It shows the magnitude of the observed difference to answer this concept."
      },
      {
        id: 2,
        question: "What does a wider confidence interval generally indicate?",
        options: [
          { key: "A", text: "A larger sample by definition" },
          { key: "B", text: "Greater estimation uncertainty" },
          { key: "C", text: "Zero missing values" },
          { key: "D", text: "A guaranteed larger true effect" },
        ],
        correct: 1,
        explanation: "Wider interval less precise estimate suggest karta hai.",
        hint: "Focus on Greater estimation uncertainty to answer this concept."
      },
      {
        id: 3,
        question: "A statistically significant difference is tiny. What should you check?",
        options: [
          { key: "A", text: "Whether p equals the mean" },
          { key: "B", text: "Whether it is practically meaningful" },
          { key: "C", text: "Only the chart color" },
          { key: "D", text: "Whether every value is identical" },
        ],
        correct: 1,
        explanation: "Statistical significance business impact guarantee nahi karti.",
        hint: "Focus on Whether it is practically meaningful to answer this concept."
      },
      {
        id: 4,
        question: "What should accompany a result from a small sample?",
        options: [
          { key: "A", text: "A note about limited precision and uncertainty" },
          { key: "B", text: "No mention of sample size" },
          { key: "C", text: "A claim of perfect certainty" },
          { key: "D", text: "A guaranteed forecast" },
        ],
        correct: 0,
        explanation: "Small sample se estimate uncertain ho sakta hai.",
        hint: "Focus on A note about limited precision and uncertainty to answer this concept."
      },
      {
        id: 5,
        question: "Which is the best way to communicate a finding?",
        options: [
          { key: "A", text: "Hide conflicting evidence" },
          { key: "B", text: "Claim the result applies everywhere" },
          { key: "C", text: "Report only the most impressive number" },
          { key: "D", text: "Give estimate, uncertainty, assumptions and limitations" },
        ],
        correct: 3,
        explanation: "Balanced reporting stakeholders ko better decision mein help karti hai.",
        hint: "Focus on Give estimate, uncertainty, assumptions and limitations to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Interpret a Result",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Read effect estimate", "Inspect confidence interval", "Review assumptions and sample", "State practical meaning"],
        shuffled: ["State practical meaning", "Review assumptions and sample", "Inspect confidence interval", "Read effect estimate"],
        expected: ["Read effect estimate", "Inspect confidence interval", "Review assumptions and sample", "State practical meaning"],
        hint: "Estimate aur uncertainty ko saath interpret karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Review Statistical Claims",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Check test design", "Confirm units and denominators", "Examine alternative explanations", "Qualify conclusion"],
        shuffled: ["Qualify conclusion", "Examine alternative explanations", "Confirm units and denominators", "Check test design"],
        expected: ["Check test design", "Confirm units and denominators", "Examine alternative explanations", "Qualify conclusion"],
        hint: "Strong claim ke liye strong evidence chahiye."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Write a Balanced Summary",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["State observed pattern", "Quantify magnitude", "Describe uncertainty", "Recommend next check"],
        shuffled: ["Recommend next check", "Describe uncertainty", "Quantify magnitude", "State observed pattern"],
        expected: ["State observed pattern", "Quantify magnitude", "Describe uncertainty", "Recommend next check"],
        hint: "Cautious conclusion useful aur trustworthy hota hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "an effect size",
        meaning: "A quantitative measure of the magnitude of a relationsh..."
      },
      {
        id: 2,
        snippet: "What does a confidence interval communicate",
        meaning: "A range produced by a procedure intended to capture the..."
      },
      {
        id: 3,
        snippet: "practical significance important",
        meaning: "A statistically detectable difference may still be too ..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Explain a Small Effect",
        scenario: "Large dataset mein new process se average time sirf 0.1 second kam hua, p < 0.05.",
        prompt: "Manager ko kya batana chahiye?",
        expectedResponse: "A \u2014 Correct! Practical value effect size aur business context se decide hoti hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is an effect size?",
        sampleAnswer: "A quantitative measure of the magnitude of a relationship or difference."
      },
      {
        id: 2,
        question: "What does a confidence interval communicate?",
        sampleAnswer: "A range produced by a procedure intended to capture the true parameter at a stated long-run coverage rate."
      },
      {
        id: 3,
        question: "Why is practical significance important?",
        sampleAnswer: "A statistically detectable difference may still be too small to matter for decisions."
      },
      {
        id: 4,
        question: "How do you communicate uncertainty responsibly?",
        sampleAnswer: "Report estimates, intervals, assumptions, limitations and what further evidence is needed."
      },
    ]
  },
  "36.1": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 36,
    moduleName: "Module 36: Data Visualization and Storytelling",
    topicKey: "36.1",
    id: 294,
    topicTitle: "Choose a Chart for the Question",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "Which chart is best for sales across product categories?",
        options: [
          { key: "A", text: "Scatter plot with no numeric pair" },
          { key: "B", text: "Line chart of unordered labels" },
          { key: "C", text: "A paragraph without numbers" },
          { key: "D", text: "Bar chart" },
        ],
        correct: 3,
        explanation: "Categories compare karne ke liye bar chart clear hota hai.",
        hint: "Focus on Bar chart to answer this concept."
      },
      {
        id: 2,
        question: "Which chart is best for weekly revenue trends?",
        options: [
          { key: "A", text: "Line chart" },
          { key: "B", text: "Pie chart for every week" },
          { key: "C", text: "Single number only" },
          { key: "D", text: "A map without location data" },
        ],
        correct: 0,
        explanation: "Time series mein line chart movement show karta hai.",
        hint: "Focus on Line chart to answer this concept."
      },
      {
        id: 3,
        question: "Which chart best shows the distribution of order values?",
        options: [
          { key: "A", text: "Single text label" },
          { key: "B", text: "Logo image" },
          { key: "C", text: "Map of employees" },
          { key: "D", text: "Histogram" },
        ],
        correct: 3,
        explanation: "Histogram numeric value ranges ki frequency dikhata hai.",
        hint: "Focus on Histogram to answer this concept."
      },
      {
        id: 4,
        question: "Which chart helps examine advertising spend versus sales?",
        options: [
          { key: "A", text: "Pie chart of regions only" },
          { key: "B", text: "Scatter plot" },
          { key: "C", text: "Stack of screenshots" },
          { key: "D", text: "Gauge with no target" },
        ],
        correct: 1,
        explanation: "Two numeric variables ka relationship scatter mein dikhta hai.",
        hint: "Focus on Scatter plot to answer this concept."
      },
      {
        id: 5,
        question: "What should guide chart choice first?",
        options: [
          { key: "A", text: "The number of available colors" },
          { key: "B", text: "The analytical question and data type" },
          { key: "C", text: "The most decorative effect" },
          { key: "D", text: "The manager's favorite icon" },
        ],
        correct: 1,
        explanation: "Chart question ko answer karne ke liye choose karo.",
        hint: "Focus on The analytical question and data type to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Pick a Chart",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify the question", "Determine data types", "Choose matching chart", "Verify readability"],
        shuffled: ["Verify readability", "Choose matching chart", "Determine data types", "Identify the question"],
        expected: ["Identify the question", "Determine data types", "Choose matching chart", "Verify readability"],
        hint: "Chart purpose aur data structure match hona chahiye."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Show Monthly Sales",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify month and revenue", "Sort months", "Create line chart", "Add clear labels"],
        shuffled: ["Add clear labels", "Create line chart", "Sort months", "Identify month and revenue"],
        expected: ["Identify month and revenue", "Sort months", "Create line chart", "Add clear labels"],
        hint: "Chronological trend ko line mein dikhana useful hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Show Product Ranking",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Aggregate by product", "Sort values", "Draw horizontal bars", "Label units"],
        shuffled: ["Label units", "Draw horizontal bars", "Sort values", "Aggregate by product"],
        expected: ["Aggregate by product", "Sort values", "Draw horizontal bars", "Label units"],
        hint: "Sorted bars se ranking easily samajh aati hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How do you choose a chart type",
        meaning: "Start with the question, then match the data structure ..."
      },
      {
        id: 2,
        snippet: "When is a bar chart useful",
        meaning: "For comparing magnitudes across categories."
      },
      {
        id: 3,
        snippet: "When is a line chart useful",
        meaning: "For showing change across an ordered time axis."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Choose a Sales Chart",
        scenario: "Manager ko 5 product categories ki sales compare karni hain.",
        prompt: "Kaunsa chart choose karoge?",
        expectedResponse: "A \u2014 Correct! Bar chart category comparison ke liye suitable hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How do you choose a chart type?",
        sampleAnswer: "Start with the question, then match the data structure to a suitable visual."
      },
      {
        id: 2,
        question: "When is a bar chart useful?",
        sampleAnswer: "For comparing magnitudes across categories."
      },
      {
        id: 3,
        question: "When is a line chart useful?",
        sampleAnswer: "For showing change across an ordered time axis."
      },
      {
        id: 4,
        question: "When is a scatter plot useful?",
        sampleAnswer: "For exploring relationships between two numeric variables."
      },
    ]
  },
  "36.2": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 36,
    moduleName: "Module 36: Data Visualization and Storytelling",
    topicKey: "36.2",
    id: 295,
    topicTitle: "Comparison and Ranking Charts",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "Which chart clearly ranks ten products by revenue?",
        options: [
          { key: "A", text: "Calendar view" },
          { key: "B", text: "Sorted horizontal bar chart" },
          { key: "C", text: "Random scatter plot" },
          { key: "D", text: "Unsorted pie chart with ten slices" },
        ],
        correct: 1,
        explanation: "Sorted bars ranking quickly show karte hain.",
        hint: "Focus on Sorted horizontal bar chart to answer this concept."
      },
      {
        id: 2,
        question: "Why do bar charts usually start their value axis at zero?",
        options: [
          { key: "A", text: "To remove the need for units" },
          { key: "B", text: "To make all bars equal" },
          { key: "C", text: "To avoid exaggerating differences in bar lengths" },
          { key: "D", text: "To hide small values" },
        ],
        correct: 2,
        explanation: "Truncated baseline bar differences ko misleading bana sakti hai.",
        hint: "Focus on To avoid exaggerating differences in bar lengths to answer this concept."
      },
      {
        id: 3,
        question: "Which is clearer for long category names?",
        options: [
          { key: "A", text: "Vertical bars with unreadable labels" },
          { key: "B", text: "Pie chart with tiny text" },
          { key: "C", text: "A line chart without dates" },
          { key: "D", text: "Horizontal bar chart" },
        ],
        correct: 3,
        explanation: "Horizontal bars mein long labels fit hote hain.",
        hint: "Focus on Horizontal bar chart to answer this concept."
      },
      {
        id: 4,
        question: "What should a ranking chart do with categories?",
        options: [
          { key: "A", text: "Mix currencies" },
          { key: "B", text: "Sort by the relevant metric" },
          { key: "C", text: "Sort randomly" },
          { key: "D", text: "Hide category names" },
        ],
        correct: 1,
        explanation: "Sorted order se top aur bottom easily visible hain.",
        hint: "Focus on Sort by the relevant metric to answer this concept."
      },
      {
        id: 5,
        question: "Why avoid a 3D bar chart for precise comparisons?",
        options: [
          { key: "A", text: "3D always improves accuracy" },
          { key: "B", text: "It eliminates axis labels" },
          { key: "C", text: "Perspective can distort perceived lengths" },
          { key: "D", text: "It changes the underlying data" },
        ],
        correct: 2,
        explanation: "3D effects reading ko harder bana sakte hain.",
        hint: "Focus on Perspective can distort perceived lengths to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Build a Ranking Chart",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Choose metric", "Aggregate by category", "Sort descending", "Display labeled bars"],
        shuffled: ["Display labeled bars", "Sort descending", "Aggregate by category", "Choose metric"],
        expected: ["Choose metric", "Aggregate by category", "Sort descending", "Display labeled bars"],
        hint: "Ranking ko highest-to-lowest order mein dikhana helpful hai."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Check Fair Bars",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Confirm common units", "Set appropriate baseline", "Label values", "Remove distracting 3D effects"],
        shuffled: ["Remove distracting 3D effects", "Label values", "Set appropriate baseline", "Confirm common units"],
        expected: ["Confirm common units", "Set appropriate baseline", "Label values", "Remove distracting 3D effects"],
        hint: "Fair visual scale comparison ko trustworthy banata hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Review Category Labels",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["List categories", "Shorten labels if needed", "Use horizontal layout", "Verify all labels are visible"],
        shuffled: ["Verify all labels are visible", "Use horizontal layout", "Shorten labels if needed", "List categories"],
        expected: ["List categories", "Shorten labels if needed", "Use horizontal layout", "Verify all labels are visible"],
        hint: "Readable labels ranking chart ke liye important hain."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "Why are sorted bars effective for ranking",
        meaning: "They make highest and lowest categories easy to identif..."
      },
      {
        id: 2,
        snippet: "Why does a zero baseline matter in bar charts",
        meaning: "Bar lengths encode magnitude, so a truncated baseline c..."
      },
      {
        id: 3,
        snippet: "When would you use horizontal instead of vertical bars",
        meaning: "When there are many categories or long labels."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Rank Products",
        scenario: "Shop ke 6 products ka revenue highest se lowest dikhana hai.",
        prompt: "Best visual kya hai?",
        expectedResponse: "A \u2014 Correct! Sorted bars ranking ko clear banate hain."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "Why are sorted bars effective for ranking?",
        sampleAnswer: "They make highest and lowest categories easy to identify."
      },
      {
        id: 2,
        question: "Why does a zero baseline matter in bar charts?",
        sampleAnswer: "Bar lengths encode magnitude, so a truncated baseline can exaggerate differences."
      },
      {
        id: 3,
        question: "When would you use horizontal instead of vertical bars?",
        sampleAnswer: "When there are many categories or long labels."
      },
      {
        id: 4,
        question: "What makes a category comparison fair?",
        sampleAnswer: "Consistent units, accurate scales, readable labels and appropriate aggregation."
      },
    ]
  },
  "36.3": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 36,
    moduleName: "Module 36: Data Visualization and Storytelling",
    topicKey: "36.3",
    id: 296,
    topicTitle: "Trend and Time-Series Charts",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "Which axis usually holds time in a line chart?",
        options: [
          { key: "A", text: "Only the legend" },
          { key: "B", text: "The chart title" },
          { key: "C", text: "Horizontal x-axis" },
          { key: "D", text: "A random color scale" },
        ],
        correct: 2,
        explanation: "Time ko chronological x-axis par rakhte hain.",
        hint: "Focus on Horizontal x-axis to answer this concept."
      },
      {
        id: 2,
        question: "What is a moving average useful for?",
        options: [
          { key: "A", text: "Smoothing short-term fluctuations" },
          { key: "B", text: "Proving causation" },
          { key: "C", text: "Changing units automatically" },
          { key: "D", text: "Deleting all seasonal patterns" },
        ],
        correct: 0,
        explanation: "Moving average overall trend ko easier to see bana sakta hai.",
        hint: "Focus on Smoothing short-term fluctuations to answer this concept."
      },
      {
        id: 3,
        question: "What can a sharp one-day spike represent?",
        options: [
          { key: "A", text: "Guaranteed seasonality" },
          { key: "B", text: "An unusual event or data issue requiring investigation" },
          { key: "C", text: "Proof of permanent growth" },
          { key: "D", text: "A missing column name" },
        ],
        correct: 1,
        explanation: "Spike ko context ke saath verify karo.",
        hint: "Focus on An unusual event or data issue requiring investigation to answer this concept."
      },
      {
        id: 4,
        question: "Why should missing dates be handled carefully?",
        options: [
          { key: "A", text: "All charts must be pies" },
          { key: "B", text: "Connecting across gaps may hide missing observations" },
          { key: "C", text: "Missing dates always mean zero sales" },
          { key: "D", text: "Dates do not matter" },
        ],
        correct: 1,
        explanation: "Missing periods ka treatment clear hona chahiye.",
        hint: "Focus on Connecting across gaps may hide missing observations to answer this concept."
      },
      {
        id: 5,
        question: "What helps explain a known promotion-related jump?",
        options: [
          { key: "A", text: "Hiding the date axis" },
          { key: "B", text: "Changing revenue to a random unit" },
          { key: "C", text: "Removing all labels" },
          { key: "D", text: "An annotation marking the promotion date" },
        ],
        correct: 3,
        explanation: "Annotation context deta hai without claiming sole cause.",
        hint: "Focus on An annotation marking the promotion date to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Create a Time Trend",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Choose date and metric", "Aggregate by consistent interval", "Sort chronologically", "Draw labeled line"],
        shuffled: ["Draw labeled line", "Sort chronologically", "Aggregate by consistent interval", "Choose date and metric"],
        expected: ["Choose date and metric", "Aggregate by consistent interval", "Sort chronologically", "Draw labeled line"],
        hint: "Time granularity consistent rakho."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Add a Moving Average",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Order time points", "Choose window size", "Calculate rolling average", "Compare with original series"],
        shuffled: ["Compare with original series", "Calculate rolling average", "Choose window size", "Order time points"],
        expected: ["Order time points", "Choose window size", "Calculate rolling average", "Compare with original series"],
        hint: "Smoothing short-term noise ko reduce karta hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Annotate an Event",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify relevant date", "Verify event details", "Mark date on chart", "Describe association cautiously"],
        shuffled: ["Describe association cautiously", "Mark date on chart", "Verify event details", "Identify relevant date"],
        expected: ["Identify relevant date", "Verify event details", "Mark date on chart", "Describe association cautiously"],
        hint: "Annotation event ka context dikhati hai, causality proof nahi."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "a time-series chart",
        meaning: "A visual showing how measurements change across time."
      },
      {
        id: 2,
        snippet: "chronological ordering important",
        meaning: "Incorrect order distorts the perceived pattern."
      },
      {
        id: 3,
        snippet: "a moving average",
        meaning: "An average calculated over a rolling window to smooth s..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Show Monthly Revenue",
        scenario: "Analyst ko January se December tak revenue aur festival spike dikhana hai.",
        prompt: "Best option kya hai?",
        expectedResponse: "A \u2014 Correct! Time trend aur festival context dono clear dikhenge."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is a time-series chart?",
        sampleAnswer: "A visual showing how measurements change across time."
      },
      {
        id: 2,
        question: "Why is chronological ordering important?",
        sampleAnswer: "Incorrect order distorts the perceived pattern."
      },
      {
        id: 3,
        question: "What is a moving average?",
        sampleAnswer: "An average calculated over a rolling window to smooth short-term fluctuations."
      },
      {
        id: 4,
        question: "How do you annotate an event without overstating causation?",
        sampleAnswer: "Mark the date and describe it as context, not proof of the cause."
      },
    ]
  },
  "36.4": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 36,
    moduleName: "Module 36: Data Visualization and Storytelling",
    topicKey: "36.4",
    id: 297,
    topicTitle: "Distribution and Relationship Charts",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "Which chart shows how often values fall into numeric bins?",
        options: [
          { key: "A", text: "Single KPI card" },
          { key: "B", text: "Gantt chart" },
          { key: "C", text: "Histogram" },
          { key: "D", text: "Bar chart of employee names" },
        ],
        correct: 2,
        explanation: "Histogram distribution ke intervals count karta hai.",
        hint: "Focus on Histogram to answer this concept."
      },
      {
        id: 2,
        question: "Which chart summarizes median and quartiles?",
        options: [
          { key: "A", text: "Map" },
          { key: "B", text: "Area icon" },
          { key: "C", text: "Box plot" },
          { key: "D", text: "Pie chart" },
        ],
        correct: 2,
        explanation: "Box plot quartiles, median aur possible outliers show karta hai.",
        hint: "Focus on Box plot to answer this concept."
      },
      {
        id: 3,
        question: "Which chart displays pairs of height and weight values?",
        options: [
          { key: "A", text: "Donut chart of departments" },
          { key: "B", text: "Scatter plot" },
          { key: "C", text: "Single bar" },
          { key: "D", text: "Text-only table heading" },
        ],
        correct: 1,
        explanation: "Scatter plot paired numeric variables dikhata hai.",
        hint: "Focus on Scatter plot to answer this concept."
      },
      {
        id: 4,
        question: "What might a U-shaped scatter pattern suggest?",
        options: [
          { key: "A", text: "Guaranteed no relationship" },
          { key: "B", text: "Perfect positive linear correlation" },
          { key: "C", text: "A nonlinear relationship" },
          { key: "D", text: "A primary key issue" },
        ],
        correct: 2,
        explanation: "Nonlinear pattern correlation coefficient se miss ho sakta hai.",
        hint: "Focus on A nonlinear relationship to answer this concept."
      },
      {
        id: 5,
        question: "Why choose meaningful histogram bin widths?",
        options: [
          { key: "A", text: "Bins determine data types" },
          { key: "B", text: "Bins never affect appearance" },
          { key: "C", text: "More bins always prove causation" },
          { key: "D", text: "Bin width changes how distribution patterns appear" },
        ],
        correct: 3,
        explanation: "Too wide ya narrow bins pattern distort kar sakte hain.",
        hint: "Focus on Bin width changes how distribution patterns appear to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Inspect a Distribution",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Choose numeric field", "Select reasonable bins", "Draw histogram", "Describe shape and unusual values"],
        shuffled: ["Describe shape and unusual values", "Draw histogram", "Select reasonable bins", "Choose numeric field"],
        expected: ["Choose numeric field", "Select reasonable bins", "Draw histogram", "Describe shape and unusual values"],
        hint: "Histogram ko interpret karne se pehle bin size check karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Review a Box Plot",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Find median", "Identify quartiles", "Check whiskers and flagged points", "Investigate extremes"],
        shuffled: ["Investigate extremes", "Check whiskers and flagged points", "Identify quartiles", "Find median"],
        expected: ["Find median", "Identify quartiles", "Check whiskers and flagged points", "Investigate extremes"],
        hint: "Flagged points ko automatically error mat samjho."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Explore a Relationship",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Select two numeric variables", "Plot paired points", "Look for trend and clusters", "Qualify interpretation"],
        shuffled: ["Qualify interpretation", "Look for trend and clusters", "Plot paired points", "Select two numeric variables"],
        expected: ["Select two numeric variables", "Plot paired points", "Look for trend and clusters", "Qualify interpretation"],
        hint: "Scatter plot association show karta hai, causation nahi."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "What does a histogram show",
        meaning: "The frequency distribution of a numeric variable across..."
      },
      {
        id: 2,
        snippet: "What does a box plot summarize",
        meaning: "Median, quartiles, spread and possible outlying observa..."
      },
      {
        id: 3,
        snippet: "When would you use a scatter plot",
        meaning: "To examine patterns between two numeric variables."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Choose a Distribution Chart",
        scenario: "HR ko 500 employees ki salary distribution samajhni hai.",
        prompt: "Kaunsa chart best hai?",
        expectedResponse: "C \u2014 Correct! Histogram salary ranges ki frequency show karta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What does a histogram show?",
        sampleAnswer: "The frequency distribution of a numeric variable across intervals."
      },
      {
        id: 2,
        question: "What does a box plot summarize?",
        sampleAnswer: "Median, quartiles, spread and possible outlying observations."
      },
      {
        id: 3,
        question: "When would you use a scatter plot?",
        sampleAnswer: "To examine patterns between two numeric variables."
      },
      {
        id: 4,
        question: "Why is bin size important in a histogram?",
        sampleAnswer: "It influences the visible detail and can change the perceived shape of a distribution."
      },
    ]
  },
  "36.5": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 36,
    moduleName: "Module 36: Data Visualization and Storytelling",
    topicKey: "36.5",
    id: 298,
    topicTitle: "Avoid Misleading Visuals",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What can make bar chart differences appear exaggerated?",
        options: [
          { key: "A", text: "Using a clear title" },
          { key: "B", text: "Labeling values accurately" },
          { key: "C", text: "Showing a source note" },
          { key: "D", text: "Starting the value axis far above zero" },
        ],
        correct: 3,
        explanation: "Truncated bar baseline visually inflate kar sakti hai.",
        hint: "Focus on Starting the value axis far above zero to answer this concept."
      },
      {
        id: 2,
        question: "Why can dual axes be misleading?",
        options: [
          { key: "A", text: "Different scales can make unrelated trends look aligned" },
          { key: "B", text: "They always improve accuracy" },
          { key: "C", text: "They remove uncertainty" },
          { key: "D", text: "They guarantee equal units" },
        ],
        correct: 0,
        explanation: "Dual axes ka scale carefully justify karna chahiye.",
        hint: "Focus on Different scales can make unrelated trends look aligned to answer this concept."
      },
      {
        id: 3,
        question: "What is wrong with a chart that hides its units?",
        options: [
          { key: "A", text: "It proves a trend" },
          { key: "B", text: "Readers cannot interpret magnitude correctly" },
          { key: "C", text: "It automatically becomes a histogram" },
          { key: "D", text: "It removes missing values" },
        ],
        correct: 1,
        explanation: "Units bina comparison unclear hota hai.",
        hint: "Focus on Readers cannot interpret magnitude correctly to answer this concept."
      },
      {
        id: 4,
        question: "What is cherry-picking a date range?",
        options: [
          { key: "A", text: "Sorting months" },
          { key: "B", text: "Showing only dates that support a preferred conclusion" },
          { key: "C", text: "Using all relevant dates" },
          { key: "D", text: "Annotating an event" },
        ],
        correct: 1,
        explanation: "Selective time range trend ko distort kar sakta hai.",
        hint: "Focus on Showing only dates that support a preferred conclusion to answer this concept."
      },
      {
        id: 5,
        question: "What should an honest visualization include?",
        options: [
          { key: "A", text: "No source information ever" },
          { key: "B", text: "Only decorative gradients" },
          { key: "C", text: "Guaranteed causal claims" },
          { key: "D", text: "Accurate scales, labels and relevant context" },
        ],
        correct: 3,
        explanation: "Clarity aur transparency chart trust improve karte hain.",
        hint: "Focus on Accurate scales, labels and relevant context to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Audit a Chart",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Check axis scale", "Verify units and labels", "Review date range", "Compare chart with source data"],
        shuffled: ["Compare chart with source data", "Review date range", "Verify units and labels", "Check axis scale"],
        expected: ["Check axis scale", "Verify units and labels", "Review date range", "Compare chart with source data"],
        hint: "Chart ko publish se pehle factual audit karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Fix a Misleading Bar",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Inspect baseline", "Set zero where bar length encodes magnitude", "Recheck labels", "Explain any remaining limits"],
        shuffled: ["Explain any remaining limits", "Recheck labels", "Set zero where bar length encodes magnitude", "Inspect baseline"],
        expected: ["Inspect baseline", "Set zero where bar length encodes magnitude", "Recheck labels", "Explain any remaining limits"],
        hint: "Bar lengths ko proportional dikhana zaroori hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Check a Trend Claim",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Read headline", "Inspect full time range", "Compare alternative periods", "Rewrite unsupported claim"],
        shuffled: ["Rewrite unsupported claim", "Compare alternative periods", "Inspect full time range", "Read headline"],
        expected: ["Read headline", "Inspect full time range", "Compare alternative periods", "Rewrite unsupported claim"],
        hint: "Selective chart framing ko challenge karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "What makes a visualization misleading",
        meaning: "Design or selection choices that distort the underlying..."
      },
      {
        id: 2,
        snippet: "a zero baseline usually recommended for bars",
        meaning: "Because bar length visually represents magnitude."
      },
      {
        id: 3,
        snippet: "a risk of dual-axis charts",
        meaning: "Separate scales can imply relationships that are not su..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Repair a Chart",
        scenario: "Sales bar chart ka y-axis 98 se start hota hai aur 100 vs 102 ko huge gap jaisa dikhata hai.",
        prompt: "Best correction kya hai?",
        expectedResponse: "B \u2014 Correct! Zero baseline se bar lengths ka magnitude fair dikhega."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What makes a visualization misleading?",
        sampleAnswer: "Design or selection choices that distort the underlying evidence."
      },
      {
        id: 2,
        question: "Why is a zero baseline usually recommended for bars?",
        sampleAnswer: "Because bar length visually represents magnitude."
      },
      {
        id: 3,
        question: "What is a risk of dual-axis charts?",
        sampleAnswer: "Separate scales can imply relationships that are not supported."
      },
      {
        id: 4,
        question: "How do you check a chart before sharing?",
        sampleAnswer: "Verify source values, units, scales, date ranges and headline claims."
      },
    ]
  },
  "36.6": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 36,
    moduleName: "Module 36: Data Visualization and Storytelling",
    topicKey: "36.6",
    id: 299,
    topicTitle: "Structure an Insight Story",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What should a strong insight story usually begin with?",
        options: [
          { key: "A", text: "The business question or decision" },
          { key: "B", text: "A random animation" },
          { key: "C", text: "The longest table first" },
          { key: "D", text: "Every available metric" },
        ],
        correct: 0,
        explanation: "Story audience ke decision se start karo.",
        hint: "Focus on The business question or decision to answer this concept."
      },
      {
        id: 2,
        question: "Which sequence is most useful for an insight story?",
        options: [
          { key: "A", text: "Guess, conclusion, hide evidence, action" },
          { key: "B", text: "Action, unrelated chart, question, guess" },
          { key: "C", text: "Color, font, icon, title" },
          { key: "D", text: "Question, evidence, insight, action" },
        ],
        correct: 3,
        explanation: "Evidence-backed flow audience ko clear message deta hai.",
        hint: "Focus on Question, evidence, insight, action to answer this concept."
      },
      {
        id: 3,
        question: "What is an insight rather than just a number?",
        options: [
          { key: "A", text: "Sales fell mainly in one region, suggesting a targeted review" },
          { key: "B", text: "The report has 3 pages" },
          { key: "C", text: "The table has 5 columns" },
          { key: "D", text: "Total sales were 100" },
        ],
        correct: 0,
        explanation: "Insight number ka business meaning explain karta hai.",
        hint: "Focus on Sales fell mainly in one region, suggesting a targeted review to answer this concept."
      },
      {
        id: 4,
        question: "Why keep one main takeaway per chart?",
        options: [
          { key: "A", text: "To guarantee causation" },
          { key: "B", text: "To reduce cognitive load and focus attention" },
          { key: "C", text: "To hide all supporting data" },
          { key: "D", text: "To remove source notes" },
        ],
        correct: 1,
        explanation: "Focused chart se message easy to understand hota hai.",
        hint: "Focus on To reduce cognitive load and focus attention to answer this concept."
      },
      {
        id: 5,
        question: "What makes a recommendation credible?",
        options: [
          { key: "A", text: "An untested guess" },
          { key: "B", text: "A clear link to verified evidence" },
          { key: "C", text: "Only a decorative icon" },
          { key: "D", text: "A dramatic headline without data" },
        ],
        correct: 1,
        explanation: "Recommendation evidence se connected honi chahiye.",
        hint: "Focus on A clear link to verified evidence to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Build an Insight Story",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["State business question", "Show key evidence", "Explain insight", "Recommend next action"],
        shuffled: ["Recommend next action", "Explain insight", "Show key evidence", "State business question"],
        expected: ["State business question", "Show key evidence", "Explain insight", "Recommend next action"],
        hint: "Story decision-oriented honi chahiye."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Explain a Sales Drop",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Show overall decline", "Break down by region", "Identify main contributor", "Propose investigation"],
        shuffled: ["Propose investigation", "Identify main contributor", "Break down by region", "Show overall decline"],
        expected: ["Show overall decline", "Break down by region", "Identify main contributor", "Propose investigation"],
        hint: "Drill-down se insight actionable ban sakti hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Edit a Report Slide",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Write one takeaway", "Keep only supporting visual", "Add metric and timeframe", "Note limitation"],
        shuffled: ["Note limitation", "Add metric and timeframe", "Keep only supporting visual", "Write one takeaway"],
        expected: ["Write one takeaway", "Keep only supporting visual", "Add metric and timeframe", "Note limitation"],
        hint: "Slide ko focused aur honest rakho."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "data storytelling",
        meaning: "Communicating data-based findings as a clear narrative ..."
      },
      {
        id: 2,
        snippet: "the difference between data and insight",
        meaning: "Data describes observations; insight explains what thos..."
      },
      {
        id: 3,
        snippet: "How do you structure an analytical story",
        meaning: "Start with the question, show evidence, explain the tak..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Choose an Insight Statement",
        scenario: "West region sales 15% giri aur baaki regions stable rahe.",
        prompt: "Best insight statement kaunsa hai?",
        expectedResponse: "A \u2014 Correct! Statement specific evidence aur next step connect karta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is data storytelling?",
        sampleAnswer: "Communicating data-based findings as a clear narrative supporting a decision."
      },
      {
        id: 2,
        question: "What is the difference between data and insight?",
        sampleAnswer: "Data describes observations; insight explains what those observations mean in context."
      },
      {
        id: 3,
        question: "How do you structure an analytical story?",
        sampleAnswer: "Start with the question, show evidence, explain the takeaway and propose action."
      },
      {
        id: 4,
        question: "Why should a chart have one clear takeaway?",
        sampleAnswer: "It helps the audience focus on the main message without unnecessary complexity."
      },
    ]
  },
  "36.7": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 36,
    moduleName: "Module 36: Data Visualization and Storytelling",
    topicKey: "36.7",
    id: 300,
    topicTitle: "Write Executive Summaries",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What belongs in a concise executive summary?",
        options: [
          { key: "A", text: "Main finding, business impact and recommended action" },
          { key: "B", text: "Every raw transaction" },
          { key: "C", text: "A long software installation guide" },
          { key: "D", text: "Only chart colors" },
        ],
        correct: 0,
        explanation: "Executive ko decision-ready information chahiye.",
        hint: "Focus on Main finding, business impact and recommended action to answer this concept."
      },
      {
        id: 2,
        question: "Which opening is strongest?",
        options: [
          { key: "A", text: "Data is data" },
          { key: "B", text: "Revenue fell 8% quarter over quarter, mainly in the North region" },
          { key: "C", text: "This report contains many interesting things" },
          { key: "D", text: "We created twelve charts" },
        ],
        correct: 1,
        explanation: "Specific quantified finding opening ko useful banata hai.",
        hint: "Focus on Revenue fell 8% quarter over quarter, mainly in the North region to answer this concept."
      },
      {
        id: 3,
        question: "What should an executive summary avoid?",
        options: [
          { key: "A", text: "Unsupported claims and unnecessary technical jargon" },
          { key: "B", text: "Known limitations" },
          { key: "C", text: "Decision relevance" },
          { key: "D", text: "Clear metrics" },
        ],
        correct: 0,
        explanation: "Simple language aur evidence summary ko effective banate hain.",
        hint: "Focus on Unsupported claims and unnecessary technical jargon to answer this concept."
      },
      {
        id: 4,
        question: "Why include a recommended next step?",
        options: [
          { key: "A", text: "It replaces verification" },
          { key: "B", text: "It hides uncertainty" },
          { key: "C", text: "It connects findings to a business decision" },
          { key: "D", text: "It guarantees profit" },
        ],
        correct: 2,
        explanation: "Actionable summary stakeholder ko next move batati hai.",
        hint: "Focus on It connects findings to a business decision to answer this concept."
      },
      {
        id: 5,
        question: "How should uncertainty be handled?",
        options: [
          { key: "A", text: "Mention important limitations briefly and clearly" },
          { key: "B", text: "Always hide it" },
          { key: "C", text: "Ignore missing data" },
          { key: "D", text: "Replace it with certainty" },
        ],
        correct: 0,
        explanation: "Important caveat decision ko affect kar sakta hai.",
        hint: "Focus on Mention important limitations briefly and clearly to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Draft an Executive Summary",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify main finding", "Quantify business impact", "State recommendation", "Note key limitation"],
        shuffled: ["Note key limitation", "State recommendation", "Quantify business impact", "Identify main finding"],
        expected: ["Identify main finding", "Quantify business impact", "State recommendation", "Note key limitation"],
        hint: "Summary concise aur action-oriented rakho."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Improve a Vague Summary",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Replace vague statement", "Add metric and timeframe", "Identify main driver", "Suggest next check"],
        shuffled: ["Suggest next check", "Identify main driver", "Add metric and timeframe", "Replace vague statement"],
        expected: ["Replace vague statement", "Add metric and timeframe", "Identify main driver", "Suggest next check"],
        hint: "Specific numbers aur scope message improve karte hain."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Review for Executives",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Remove jargon", "Check numbers", "Confirm action owner if known", "Read for clarity"],
        shuffled: ["Read for clarity", "Confirm action owner if known", "Check numbers", "Remove jargon"],
        expected: ["Remove jargon", "Check numbers", "Confirm action owner if known", "Read for clarity"],
        hint: "Reader ko quickly decision samajh aana chahiye."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "an executive summary",
        meaning: "A concise overview of the most important findings and d..."
      },
      {
        id: 2,
        snippet: "What information should it contain",
        meaning: "The key result, its business meaning, recommended actio..."
      },
      {
        id: 3,
        snippet: "How do you make a summary concise",
        meaning: "Prioritize decision-relevant facts and remove unnecessa..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Pick a Better Summary",
        scenario: "Quarterly sales 8% giri aur North region major contributor hai.",
        prompt: "Best opening kaunsa hai?",
        expectedResponse: "C \u2014 Correct! Clear metric, period aur main driver mention hua."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is an executive summary?",
        sampleAnswer: "A concise overview of the most important findings and decisions for leadership."
      },
      {
        id: 2,
        question: "What information should it contain?",
        sampleAnswer: "The key result, its business meaning, recommended action and material limitations."
      },
      {
        id: 3,
        question: "How do you make a summary concise?",
        sampleAnswer: "Prioritize decision-relevant facts and remove unnecessary detail or jargon."
      },
      {
        id: 4,
        question: "How do you present a recommendation in an executive summary?",
        sampleAnswer: "Connect it to evidence and state the proposed next step clearly."
      },
    ]
  },
  "36.8": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 36,
    moduleName: "Module 36: Data Visualization and Storytelling",
    topicKey: "36.8",
    id: 301,
    topicTitle: "Communicate Limitations and Uncertainty",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "Which statement communicates uncertainty responsibly?",
        options: [
          { key: "A", text: "All future periods will match" },
          { key: "B", text: "The estimate may change because only a small sample was available" },
          { key: "C", text: "There are no possible errors" },
          { key: "D", text: "This estimate is guaranteed exact" },
        ],
        correct: 1,
        explanation: "Uncertainty ka source clearly explain karo.",
        hint: "Focus on The estimate may change because only a small sample was available to answer this concept."
      },
      {
        id: 2,
        question: "Why disclose missing records?",
        options: [
          { key: "A", text: "Missing records prove fraud" },
          { key: "B", text: "They never matter" },
          { key: "C", text: "They may affect how representative the result is" },
          { key: "D", text: "Missing values always equal zero" },
        ],
        correct: 2,
        explanation: "Missingness conclusions ki reliability affect kar sakti hai.",
        hint: "Focus on They may affect how representative the result is to answer this concept."
      },
      {
        id: 3,
        question: "What does a confidence interval help communicate?",
        options: [
          { key: "A", text: "Proof of causation" },
          { key: "B", text: "A file permission" },
          { key: "C", text: "Uncertainty around an estimated quantity" },
          { key: "D", text: "Guaranteed future profit" },
        ],
        correct: 2,
        explanation: "Interval precision aur uncertainty communicate karta hai.",
        hint: "Focus on Uncertainty around an estimated quantity to answer this concept."
      },
      {
        id: 4,
        question: "What is an assumption in a report?",
        options: [
          { key: "A", text: "A chart color" },
          { key: "B", text: "A password" },
          { key: "C", text: "A guaranteed fact" },
          { key: "D", text: "A condition accepted for analysis that may affect interpretation" },
        ],
        correct: 3,
        explanation: "Assumptions ko explicit rakhna important hai.",
        hint: "Focus on A condition accepted for analysis that may affect interpretation to answer this concept."
      },
      {
        id: 5,
        question: "What should you say when data cannot support a claim?",
        options: [
          { key: "A", text: "Hide the missing evidence" },
          { key: "B", text: "The claim is definitely true" },
          { key: "C", text: "Invent a number" },
          { key: "D", text: "The available evidence is insufficient for that conclusion" },
        ],
        correct: 3,
        explanation: "Unsupported conclusion se better honest limitation hai.",
        hint: "Focus on The available evidence is insufficient for that conclusion to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Report a Limitation",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify issue", "Estimate possible impact", "State caveat clearly", "Suggest validation step"],
        shuffled: ["Suggest validation step", "State caveat clearly", "Estimate possible impact", "Identify issue"],
        expected: ["Identify issue", "Estimate possible impact", "State caveat clearly", "Suggest validation step"],
        hint: "Limitation ke saath next check bhi do."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Explain an Estimate",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["State central estimate", "Add uncertainty interval if available", "Describe assumptions", "Avoid false precision"],
        shuffled: ["Avoid false precision", "Describe assumptions", "Add uncertainty interval if available", "State central estimate"],
        expected: ["State central estimate", "Add uncertainty interval if available", "Describe assumptions", "Avoid false precision"],
        hint: "Uncertainty ko understandable terms mein batao."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Review a Claim",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Read conclusion", "Compare supporting data", "Identify gaps", "Rewrite to match evidence"],
        shuffled: ["Rewrite to match evidence", "Identify gaps", "Compare supporting data", "Read conclusion"],
        expected: ["Read conclusion", "Compare supporting data", "Identify gaps", "Rewrite to match evidence"],
        hint: "Evidence jitna support kare, claim utna hi strong rakho."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "Why communicate uncertainty",
        meaning: "It helps decision-makers understand how reliable an est..."
      },
      {
        id: 2,
        snippet: "What are common analytical limitations",
        meaning: "Small samples, missing data, measurement errors and unt..."
      },
      {
        id: 3,
        snippet: "How do you explain uncertainty to nontechnical stakeholders",
        meaning: "Use plain language, concrete ranges and the main source..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Flag Missing Data",
        scenario: "Customer survey mein sirf 30% invited customers ne reply diya.",
        prompt: "Report mein kya mention karna chahiye?",
        expectedResponse: "A \u2014 Correct! Nonresponse bias ka risk communicate karna chahiye."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "Why communicate uncertainty?",
        sampleAnswer: "It helps decision-makers understand how reliable an estimate or conclusion is."
      },
      {
        id: 2,
        question: "What are common analytical limitations?",
        sampleAnswer: "Small samples, missing data, measurement errors and untested assumptions."
      },
      {
        id: 3,
        question: "How do you explain uncertainty to nontechnical stakeholders?",
        sampleAnswer: "Use plain language, concrete ranges and the main sources of uncertainty."
      },
      {
        id: 4,
        question: "What do you do when evidence is insufficient?",
        sampleAnswer: "State the limitation and recommend the next data collection or validation step."
      },
    ]
  },
  "37.1": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 37,
    moduleName: "Module 37: Business Reporting and Stakeholders",
    topicKey: "37.1",
    id: 311,
    topicTitle: "Understand the Audience and Business Goal",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What should an analyst ask before creating a stakeholder report?",
        options: [
          { key: "A", text: "Can we omit the data source?" },
          { key: "B", text: "How many icons can we add?" },
          { key: "C", text: "What is the fanciest animation?" },
          { key: "D", text: "What decision will this report support?" },
        ],
        correct: 3,
        explanation: "Decision samajhne se relevant report banti hai.",
        hint: "Focus on What decision will this report support? to answer this concept."
      },
      {
        id: 2,
        question: "How should a CEO report usually differ from an analyst working file?",
        options: [
          { key: "A", text: "Focus on key outcomes and actions rather than every technical step" },
          { key: "B", text: "Include all raw code first" },
          { key: "C", text: "Hide all business metrics" },
          { key: "D", text: "Use no explanation" },
        ],
        correct: 0,
        explanation: "Executive audience ko concise decision-ready view chahiye.",
        hint: "Focus on Focus on key outcomes and actions rather than every technical step to answer this concept."
      },
      {
        id: 3,
        question: "What is a stakeholder in analytics?",
        options: [
          { key: "A", text: "A file extension" },
          { key: "B", text: "A person or group affected by or using the findings" },
          { key: "C", text: "A chart color" },
          { key: "D", text: "Only the database server" },
        ],
        correct: 1,
        explanation: "Stakeholder report se decision ya action le sakta hai.",
        hint: "Focus on A person or group affected by or using the findings to answer this concept."
      },
      {
        id: 4,
        question: "What makes a business KPI relevant?",
        options: [
          { key: "A", text: "It is easiest to color" },
          { key: "B", text: "It directly reflects the goal being evaluated" },
          { key: "C", text: "It has the longest name" },
          { key: "D", text: "It is the largest number in the table" },
        ],
        correct: 1,
        explanation: "Goal aur KPI ka link clear hona chahiye.",
        hint: "Focus on It directly reflects the goal being evaluated to answer this concept."
      },
      {
        id: 5,
        question: "When two stakeholders want different details, what helps?",
        options: [
          { key: "A", text: "Ignore one stakeholder" },
          { key: "B", text: "Create audience-appropriate views using consistent underlying definitions" },
          { key: "C", text: "Change the numbers for each person" },
          { key: "D", text: "Remove all caveats" },
        ],
        correct: 1,
        explanation: "Different views ho sakte hain, facts consistent hone chahiye.",
        hint: "Focus on Create audience-appropriate views using consistent underlying definitions to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Scope a Stakeholder Report",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify audience", "Ask for decision goal", "Agree KPI definitions", "Choose suitable detail level"],
        shuffled: ["Choose suitable detail level", "Agree KPI definitions", "Ask for decision goal", "Identify audience"],
        expected: ["Identify audience", "Ask for decision goal", "Agree KPI definitions", "Choose suitable detail level"],
        hint: "Audience aur decision define karke report banao."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Prepare a Leadership View",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Select main KPIs", "Show important change", "Explain driver", "Recommend action"],
        shuffled: ["Recommend action", "Explain driver", "Show important change", "Select main KPIs"],
        expected: ["Select main KPIs", "Show important change", "Explain driver", "Recommend action"],
        hint: "Leadership view concise aur actionable hona chahiye."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Check Stakeholder Alignment",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Share draft question", "Confirm success criteria", "Review required segments", "Agree reporting cadence"],
        shuffled: ["Agree reporting cadence", "Review required segments", "Confirm success criteria", "Share draft question"],
        expected: ["Share draft question", "Confirm success criteria", "Review required segments", "Agree reporting cadence"],
        hint: "Early alignment rework reduce karta hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "Who is a stakeholder in a data project",
        meaning: "Anyone who uses, influences or is affected by the analy..."
      },
      {
        id: 2,
        snippet: "audience analysis important",
        meaning: "Different audiences need different levels of detail and..."
      },
      {
        id: 3,
        snippet: "How do you define a useful KPI",
        meaning: "Link it directly to the business goal with a consistent..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Choose Report Content",
        scenario: "Sales director ko Monday meeting mein revenue performance samajhni hai.",
        prompt: "Report mein sabse pehle kya dikhana chahiye?",
        expectedResponse: "B \u2014 Correct! Report decision aur audience ke goal se match hona chahiye."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "Who is a stakeholder in a data project?",
        sampleAnswer: "Anyone who uses, influences or is affected by the analysis and decisions."
      },
      {
        id: 2,
        question: "Why is audience analysis important?",
        sampleAnswer: "Different audiences need different levels of detail and decision context."
      },
      {
        id: 3,
        question: "How do you define a useful KPI?",
        sampleAnswer: "Link it directly to the business goal with a consistent definition."
      },
      {
        id: 4,
        question: "What would you ask before building a management dashboard?",
        sampleAnswer: "Which decision it supports, which KPIs matter, and how often it will be used."
      },
    ]
  },
  "37.2": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 37,
    moduleName: "Module 37: Business Reporting and Stakeholders",
    topicKey: "37.2",
    id: 312,
    topicTitle: "Translate Analysis into Business Impact",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What turns an analytical finding into business impact?",
        options: [
          { key: "A", text: "Connecting the metric change to a business outcome" },
          { key: "B", text: "Adding more chart colors" },
          { key: "C", text: "Deleting the source data" },
          { key: "D", text: "Renaming every column" },
        ],
        correct: 0,
        explanation: "Finding ka decision aur outcome se relation explain karo.",
        hint: "Focus on Connecting the metric change to a business outcome to answer this concept."
      },
      {
        id: 2,
        question: "A process saves 2 minutes on each of 100 daily tasks. What is daily time saved?",
        options: [
          { key: "A", text: "2 minutes" },
          { key: "B", text: "102 minutes" },
          { key: "C", text: "20 minutes" },
          { key: "D", text: "200 minutes" },
        ],
        correct: 3,
        explanation: "2 \u00d7 100 = 200 minutes per day.",
        hint: "Focus on 200 minutes to answer this concept."
      },
      {
        id: 3,
        question: "What is an appropriate business impact measure for delivery delays?",
        options: [
          { key: "A", text: "Number of report tabs" },
          { key: "B", text: "Customer wait time or late-delivery rate" },
          { key: "C", text: "Keyboard size" },
          { key: "D", text: "Dashboard background color" },
        ],
        correct: 1,
        explanation: "Delay ka impact customer experience par measure kar sakte hain.",
        hint: "Focus on Customer wait time or late-delivery rate to answer this concept."
      },
      {
        id: 4,
        question: "Why distinguish estimated impact from realized impact?",
        options: [
          { key: "A", text: "Forecast benefits are not yet observed results" },
          { key: "B", text: "Realized results are always higher" },
          { key: "C", text: "They always have identical values" },
          { key: "D", text: "Estimates never require assumptions" },
        ],
        correct: 0,
        explanation: "Projected savings ko actual savings mat batao.",
        hint: "Focus on Forecast benefits are not yet observed results to answer this concept."
      },
      {
        id: 5,
        question: "What strengthens an impact statement?",
        options: [
          { key: "A", text: "A number without units" },
          { key: "B", text: "An invented causal claim" },
          { key: "C", text: "A baseline, observed change and transparent assumptions" },
          { key: "D", text: "Only a dramatic adjective" },
        ],
        correct: 2,
        explanation: "Baseline aur assumptions se impact credible hota hai.",
        hint: "Focus on A baseline, observed change and transparent assumptions to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Estimate Business Impact",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify observed change", "Select business outcome", "Calculate effect with units", "State assumptions"],
        shuffled: ["State assumptions", "Calculate effect with units", "Select business outcome", "Identify observed change"],
        expected: ["Identify observed change", "Select business outcome", "Calculate effect with units", "State assumptions"],
        hint: "Units aur assumptions ke saath estimate do."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Calculate Time Savings",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Measure minutes saved per task", "Count tasks", "Multiply", "Convert to useful reporting units"],
        shuffled: ["Convert to useful reporting units", "Multiply", "Count tasks", "Measure minutes saved per task"],
        expected: ["Measure minutes saved per task", "Count tasks", "Multiply", "Convert to useful reporting units"],
        hint: "Per-task saving ko task count se multiply karo."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Validate an Impact Claim",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Check baseline", "Verify data", "Separate observed from projected", "Report uncertainty"],
        shuffled: ["Report uncertainty", "Separate observed from projected", "Verify data", "Check baseline"],
        expected: ["Check baseline", "Verify data", "Separate observed from projected", "Report uncertainty"],
        hint: "Estimated impact aur realized impact ko mix mat karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "business impact in analytics",
        meaning: "The effect a finding or action has on outcomes such as ..."
      },
      {
        id: 2,
        snippet: "How do you quantify process savings",
        meaning: "Multiply verified time saved per task by the number of ..."
      },
      {
        id: 3,
        snippet: "the difference between projected and realized impact",
        meaning: "Projected impact is estimated; realized impact is measu..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Calculate Saved Time",
        scenario: "Automation se har invoice par 2 minutes bachte hain; 100 invoices daily process hote hain.",
        prompt: "Daily time saving kitni hai?",
        expectedResponse: "C \u2014 Correct! 2 minutes \u00d7 100 invoices = 200 minutes daily."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is business impact in analytics?",
        sampleAnswer: "The effect a finding or action has on outcomes such as revenue, cost, risk or experience."
      },
      {
        id: 2,
        question: "How do you quantify process savings?",
        sampleAnswer: "Multiply verified time saved per task by the number of relevant tasks, with assumptions."
      },
      {
        id: 3,
        question: "What is the difference between projected and realized impact?",
        sampleAnswer: "Projected impact is estimated; realized impact is measured after implementation."
      },
      {
        id: 4,
        question: "How do you communicate an impact estimate responsibly?",
        sampleAnswer: "Show the baseline, calculation, units, assumptions and uncertainty."
      },
    ]
  },
  "37.3": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 37,
    moduleName: "Module 37: Business Reporting and Stakeholders",
    topicKey: "37.3",
    id: 313,
    topicTitle: "Write Clear Recommendations",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What makes a recommendation actionable?",
        options: [
          { key: "A", text: "A vague instruction to improve everything" },
          { key: "B", text: "A specific next step tied to evidence" },
          { key: "C", text: "Only a colorful chart" },
          { key: "D", text: "A claim without owner or timing" },
        ],
        correct: 1,
        explanation: "Action clear ho aur evidence se linked ho.",
        hint: "Focus on A specific next step tied to evidence to answer this concept."
      },
      {
        id: 2,
        question: "Which recommendation is strongest?",
        options: [
          { key: "A", text: "Review North-region delivery delays with operations this week" },
          { key: "B", text: "Ignore the decline" },
          { key: "C", text: "Add more dashboard pages" },
          { key: "D", text: "Make the business better" },
        ],
        correct: 0,
        explanation: "Specific action, scope aur timing clear hain.",
        hint: "Focus on Review North-region delivery delays with operations this week to answer this concept."
      },
      {
        id: 3,
        question: "Why include an owner when appropriate?",
        options: [
          { key: "A", text: "It guarantees success" },
          { key: "B", text: "Someone can be accountable for the next step" },
          { key: "C", text: "It replaces data checks" },
          { key: "D", text: "It removes risk" },
        ],
        correct: 1,
        explanation: "Ownership follow-through improve karta hai.",
        hint: "Focus on Someone can be accountable for the next step to answer this concept."
      },
      {
        id: 4,
        question: "What should guide recommendation priority?",
        options: [
          { key: "A", text: "Alphabetical order only" },
          { key: "B", text: "Color preference" },
          { key: "C", text: "Number of slides" },
          { key: "D", text: "Expected impact, feasibility and risk" },
        ],
        correct: 3,
        explanation: "Impact aur effort ke basis par priority decide karo.",
        hint: "Focus on Expected impact, feasibility and risk to answer this concept."
      },
      {
        id: 5,
        question: "How should a recommendation address uncertainty?",
        options: [
          { key: "A", text: "Guarantee the outcome" },
          { key: "B", text: "Suggest a pilot or further validation when evidence is limited" },
          { key: "C", text: "Skip stakeholder review" },
          { key: "D", text: "Hide assumptions" },
        ],
        correct: 1,
        explanation: "Limited evidence mein pilot sensible next step ho sakta hai.",
        hint: "Focus on Suggest a pilot or further validation when evidence is limited to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Draft a Recommendation",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["State verified problem", "Suggest specific action", "Identify owner or team", "Define success measure"],
        shuffled: ["Define success measure", "Identify owner or team", "Suggest specific action", "State verified problem"],
        expected: ["State verified problem", "Suggest specific action", "Identify owner or team", "Define success measure"],
        hint: "Action aur measurement dono clear rakho."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Prioritize Actions",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["List possible actions", "Estimate impact", "Assess feasibility and risk", "Rank priorities"],
        shuffled: ["Rank priorities", "Assess feasibility and risk", "Estimate impact", "List possible actions"],
        expected: ["List possible actions", "Estimate impact", "Assess feasibility and risk", "Rank priorities"],
        hint: "Priority sirf dramatic language par based nahi honi chahiye."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Design a Pilot",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Choose limited scope", "Define success KPI", "Run pilot", "Evaluate results before rollout"],
        shuffled: ["Evaluate results before rollout", "Run pilot", "Define success KPI", "Choose limited scope"],
        expected: ["Choose limited scope", "Define success KPI", "Run pilot", "Evaluate results before rollout"],
        hint: "Pilot uncertainty reduce kar sakta hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "an actionable recommendation",
        meaning: "A concrete, feasible next step supported by evidence."
      },
      {
        id: 2,
        snippet: "How do you prioritize recommendations",
        meaning: "Consider expected impact, effort, feasibility and risk."
      },
      {
        id: 3,
        snippet: "Why include an owner and KPI",
        meaning: "They make follow-through and outcome measurement cleare..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Choose a Next Step",
        scenario: "North warehouse mein late deliveries badhi hain.",
        prompt: "Best recommendation kya hai?",
        expectedResponse: "A \u2014 Correct! Specific team, problem aur metric define hua."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is an actionable recommendation?",
        sampleAnswer: "A concrete, feasible next step supported by evidence."
      },
      {
        id: 2,
        question: "How do you prioritize recommendations?",
        sampleAnswer: "Consider expected impact, effort, feasibility and risk."
      },
      {
        id: 3,
        question: "Why include an owner and KPI?",
        sampleAnswer: "They make follow-through and outcome measurement clearer."
      },
      {
        id: 4,
        question: "What should you recommend when evidence is uncertain?",
        sampleAnswer: "A targeted pilot or additional validation rather than an unjustified full rollout."
      },
    ]
  },
  "37.4": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 37,
    moduleName: "Module 37: Business Reporting and Stakeholders",
    topicKey: "37.4",
    id: 314,
    topicTitle: "Present Findings in a Meeting",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What is a strong way to open an analytics meeting?",
        options: [
          { key: "A", text: "Start with a random chart" },
          { key: "B", text: "Read every raw row aloud" },
          { key: "C", text: "State the business question and key takeaway" },
          { key: "D", text: "Hide the conclusion until the end always" },
        ],
        correct: 2,
        explanation: "Meeting start mein main message clear karo.",
        hint: "Focus on State the business question and key takeaway to answer this concept."
      },
      {
        id: 2,
        question: "How many key messages should one presentation slide emphasize?",
        options: [
          { key: "A", text: "Every possible finding" },
          { key: "B", text: "Only the file name" },
          { key: "C", text: "One main takeaway when practical" },
          { key: "D", text: "None at all" },
        ],
        correct: 2,
        explanation: "Focused slide audience ko follow karne mein help karta hai.",
        hint: "Focus on One main takeaway when practical to answer this concept."
      },
      {
        id: 3,
        question: "What should you do when asked for a number you cannot verify?",
        options: [
          { key: "A", text: "Ignore the question" },
          { key: "B", text: "Invent a confident answer" },
          { key: "C", text: "Change the topic permanently" },
          { key: "D", text: "Say you will check the source and follow up" },
        ],
        correct: 3,
        explanation: "Unverified number guess nahi karna.",
        hint: "Focus on Say you will check the source and follow up to answer this concept."
      },
      {
        id: 4,
        question: "What should accompany a recommendation in a meeting?",
        options: [
          { key: "A", text: "Supporting evidence and proposed next action" },
          { key: "B", text: "A guaranteed outcome" },
          { key: "C", text: "A hidden dataset" },
          { key: "D", text: "Only a decorative animation" },
        ],
        correct: 0,
        explanation: "Recommendation ko evidence se connect karo.",
        hint: "Focus on Supporting evidence and proposed next action to answer this concept."
      },
      {
        id: 5,
        question: "How should a meeting conclude?",
        options: [
          { key: "A", text: "Delete the report" },
          { key: "B", text: "Confirm decisions, owners and follow-up actions" },
          { key: "C", text: "Assume everyone agrees" },
          { key: "D", text: "Close without clarifying anything" },
        ],
        correct: 1,
        explanation: "Clear action summary execution improve karta hai.",
        hint: "Focus on Confirm decisions, owners and follow-up actions to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Prepare a Meeting",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify audience", "Write key takeaway", "Select supporting visuals", "Rehearse concise explanation"],
        shuffled: ["Rehearse concise explanation", "Select supporting visuals", "Write key takeaway", "Identify audience"],
        expected: ["Identify audience", "Write key takeaway", "Select supporting visuals", "Rehearse concise explanation"],
        hint: "Main message pehle decide karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Present a Finding",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["State conclusion", "Show supporting evidence", "Explain business meaning", "Invite questions"],
        shuffled: ["Invite questions", "Explain business meaning", "Show supporting evidence", "State conclusion"],
        expected: ["State conclusion", "Show supporting evidence", "Explain business meaning", "Invite questions"],
        hint: "Conclusion aur evidence ko connected rakho."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Close With Actions",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Summarize decisions", "Assign owners", "Confirm timelines", "Record follow-ups"],
        shuffled: ["Record follow-ups", "Confirm timelines", "Assign owners", "Summarize decisions"],
        expected: ["Summarize decisions", "Assign owners", "Confirm timelines", "Record follow-ups"],
        hint: "Meeting ke end par next steps clear hon."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How do you structure an analytics presentation",
        meaning: "Open with the business question, state the takeaway, sh..."
      },
      {
        id: 2,
        snippet: "How do you explain a chart to a nontechnical audience",
        meaning: "Describe what it measures, the main pattern and why it ..."
      },
      {
        id: 3,
        snippet: "What should you do when you cannot answer a question",
        meaning: "Acknowledge it, verify the information and follow up wi..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Handle an Unknown Number",
        scenario: "Meeting mein manager ek aisa sales number poochta hai jo analyst ne verify nahi kiya.",
        prompt: "Best response kya hai?",
        expectedResponse: "C \u2014 Correct! Unknown number ko confidently guess karna unsafe hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How do you structure an analytics presentation?",
        sampleAnswer: "Open with the business question, state the takeaway, show evidence and propose action."
      },
      {
        id: 2,
        question: "How do you explain a chart to a nontechnical audience?",
        sampleAnswer: "Describe what it measures, the main pattern and why it matters."
      },
      {
        id: 3,
        question: "What should you do when you cannot answer a question?",
        sampleAnswer: "Acknowledge it, verify the information and follow up with the answer."
      },
      {
        id: 4,
        question: "What should you confirm at the end of a meeting?",
        sampleAnswer: "Decisions, responsible owners, deadlines and next steps."
      },
    ]
  },
  "37.5": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 37,
    moduleName: "Module 37: Business Reporting and Stakeholders",
    topicKey: "37.5",
    id: 315,
    topicTitle: "Answer Stakeholder Follow-Up Questions",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "What should you do before answering an ambiguous stakeholder question?",
        options: [
          { key: "A", text: "Ask a brief clarifying question" },
          { key: "B", text: "Dismiss the question" },
          { key: "C", text: "Guess the intended metric" },
          { key: "D", text: "Invent missing data" },
        ],
        correct: 0,
        explanation: "Clarification se relevant answer milta hai.",
        hint: "Focus on Ask a brief clarifying question to answer this concept."
      },
      {
        id: 2,
        question: "A stakeholder asks why sales fell. What should you avoid?",
        options: [
          { key: "A", text: "Mentioning limitations" },
          { key: "B", text: "Checking region and product trends" },
          { key: "C", text: "Reviewing data quality" },
          { key: "D", text: "Claiming a cause without evidence" },
        ],
        correct: 3,
        explanation: "Pattern se direct causal conclusion mat nikalo.",
        hint: "Focus on Claiming a cause without evidence to answer this concept."
      },
      {
        id: 3,
        question: "What is a good response to a disputed KPI?",
        options: [
          { key: "A", text: "Ignore the stakeholder" },
          { key: "B", text: "Insist the first number is always correct" },
          { key: "C", text: "Delete conflicting records" },
          { key: "D", text: "Confirm the definition, filters and source data" },
        ],
        correct: 3,
        explanation: "Definition mismatch se KPI differences aa sakte hain.",
        hint: "Focus on Confirm the definition, filters and source data to answer this concept."
      },
      {
        id: 4,
        question: "When asked for a new segment not in the report, what is best?",
        options: [
          { key: "A", text: "Check data availability and follow up with verified analysis" },
          { key: "B", text: "Say all segments are equal" },
          { key: "C", text: "Guess the result immediately" },
          { key: "D", text: "Copy another segment's numbers" },
        ],
        correct: 0,
        explanation: "New breakdown ke liye actual data chahiye.",
        hint: "Focus on Check data availability and follow up with verified analysis to answer this concept."
      },
      {
        id: 5,
        question: "What builds trust during difficult questions?",
        options: [
          { key: "A", text: "Transparency about evidence and uncertainty" },
          { key: "B", text: "Avoiding follow-up" },
          { key: "C", text: "Unfounded confidence" },
          { key: "D", text: "Hiding assumptions" },
        ],
        correct: 0,
        explanation: "Transparent communication stakeholder trust improve karti hai.",
        hint: "Focus on Transparency about evidence and uncertainty to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Answer a Follow-Up",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Listen fully", "Clarify metric or scope", "Check available evidence", "Answer or commit to verification"],
        shuffled: ["Answer or commit to verification", "Check available evidence", "Clarify metric or scope", "Listen fully"],
        expected: ["Listen fully", "Clarify metric or scope", "Check available evidence", "Answer or commit to verification"],
        hint: "Answer ko available evidence se ground karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Resolve a KPI Dispute",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Compare definitions", "Check filters and dates", "Reconcile source data", "Share corrected explanation"],
        shuffled: ["Share corrected explanation", "Reconcile source data", "Check filters and dates", "Compare definitions"],
        expected: ["Compare definitions", "Check filters and dates", "Reconcile source data", "Share corrected explanation"],
        hint: "Mismatch ka root cause systematically find karo."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Handle an Unknown",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["State what is known", "Identify missing evidence", "Agree verification step", "Share documented follow-up"],
        shuffled: ["Share documented follow-up", "Agree verification step", "Identify missing evidence", "State what is known"],
        expected: ["State what is known", "Identify missing evidence", "Agree verification step", "Share documented follow-up"],
        hint: "Unknown ko honestly acknowledge karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How do you handle a challenging stakeholder question",
        meaning: "Listen, clarify the question and respond using verified..."
      },
      {
        id: 2,
        snippet: "What do you do if a stakeholder disputes a number",
        meaning: "Reconcile definitions, filters, date ranges and source ..."
      },
      {
        id: 3,
        snippet: "How do you answer a question outside the current analysis",
        meaning: "Explain the scope, check feasibility and propose a veri..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Respond to a KPI Dispute",
        scenario: "Sales manager ka revenue number dashboard se different hai.",
        prompt: "Sabse pehle kya check karna chahiye?",
        expectedResponse: "C \u2014 Correct! Different filters ya dates se mismatch aa sakta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How do you handle a challenging stakeholder question?",
        sampleAnswer: "Listen, clarify the question and respond using verified evidence."
      },
      {
        id: 2,
        question: "What do you do if a stakeholder disputes a number?",
        sampleAnswer: "Reconcile definitions, filters, date ranges and source data."
      },
      {
        id: 3,
        question: "How do you answer a question outside the current analysis?",
        sampleAnswer: "Explain the scope, check feasibility and propose a verified follow-up."
      },
      {
        id: 4,
        question: "How can you communicate uncertainty without losing credibility?",
        sampleAnswer: "Be precise about what is known, unknown and how the unknown will be checked."
      },
    ]
  },
  "37.6": {
    tabId: 7,
    tabName: "Business Insights and Communication",
    moduleId: 37,
    moduleName: "Module 37: Business Reporting and Stakeholders",
    topicKey: "37.6",
    id: 316,
    topicTitle: "Document Assumptions and Decisions",
    mode: "Analytics, Statistics & Storytelling practice",
    game1Quiz: [
      {
        id: 1,
        question: "Why document analytical assumptions?",
        options: [
          { key: "A", text: "They are only decoration" },
          { key: "B", text: "They affect interpretation and reproducibility" },
          { key: "C", text: "They guarantee correctness" },
          { key: "D", text: "They replace source data" },
        ],
        correct: 1,
        explanation: "Assumptions future review ke liye record karo.",
        hint: "Focus on They affect interpretation and reproducibility to answer this concept."
      },
      {
        id: 2,
        question: "What should a metric definition include?",
        options: [
          { key: "A", text: "Only the report author" },
          { key: "B", text: "Only a nickname" },
          { key: "C", text: "Only the chart color" },
          { key: "D", text: "Formula, units, filters and relevant time window" },
        ],
        correct: 3,
        explanation: "Metric definition clear ho to teams consistent result nikal sakti hain.",
        hint: "Focus on Formula, units, filters and relevant time window to answer this concept."
      },
      {
        id: 3,
        question: "What is a decision log?",
        options: [
          { key: "A", text: "A software password" },
          { key: "B", text: "A list of random numbers" },
          { key: "C", text: "A record of choices, reasons, owners and dates" },
          { key: "D", text: "A pie chart" },
        ],
        correct: 2,
        explanation: "Decision log audit trail maintain karta hai.",
        hint: "Focus on A record of choices, reasons, owners and dates to answer this concept."
      },
      {
        id: 4,
        question: "Why record excluded rows or filters?",
        options: [
          { key: "A", text: "They automatically improve accuracy" },
          { key: "B", text: "They never matter" },
          { key: "C", text: "They can change reported results" },
          { key: "D", text: "They prove causation" },
        ],
        correct: 2,
        explanation: "Exclusions ka reason transparent hona chahiye.",
        hint: "Focus on They can change reported results to answer this concept."
      },
      {
        id: 5,
        question: "What helps another analyst reproduce a report?",
        options: [
          { key: "A", text: "Only the final chart color" },
          { key: "B", text: "Source references, transformation steps and metric definitions" },
          { key: "C", text: "An undocumented manual edit" },
          { key: "D", text: "Only a screenshot" },
        ],
        correct: 1,
        explanation: "Reproducibility ke liye steps aur sources documented hone chahiye.",
        hint: "Focus on Source references, transformation steps and metric definitions to answer this concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Document an Analysis",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["List data sources", "Define metrics and filters", "Record assumptions", "Save decisions and versions"],
        shuffled: ["Save decisions and versions", "Record assumptions", "Define metrics and filters", "List data sources"],
        expected: ["List data sources", "Define metrics and filters", "Record assumptions", "Save decisions and versions"],
        hint: "Documentation analysis ko repeatable banati hai."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Record a Decision",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Describe choice", "Explain evidence and reason", "Note owner and date", "Capture next review point"],
        shuffled: ["Capture next review point", "Note owner and date", "Explain evidence and reason", "Describe choice"],
        expected: ["Describe choice", "Explain evidence and reason", "Note owner and date", "Capture next review point"],
        hint: "Decision log accountability support karta hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Prepare a Handover",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Link source data", "Explain transformations", "List known limitations", "Provide refresh instructions"],
        shuffled: ["Provide refresh instructions", "List known limitations", "Explain transformations", "Link source data"],
        expected: ["Link source data", "Explain transformations", "List known limitations", "Provide refresh instructions"],
        hint: "Handover mein next analyst ko full context milna chahiye."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "documentation important in analytics",
        meaning: "It supports transparency, consistency, reproducibility ..."
      },
      {
        id: 2,
        snippet: "What should a metric definition document",
        meaning: "Calculation, units, filters, inclusions, exclusions and..."
      },
      {
        id: 3,
        snippet: "What belongs in a decision log",
        meaning: "The decision, supporting reason, responsible person, da..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Document a Revenue Metric",
        scenario: "Do analysts revenue ko alag-alag calculate kar rahe hain.",
        prompt: "Consistency ke liye kya document karna chahiye?",
        expectedResponse: "A \u2014 Correct! Shared metric definition se reporting mismatch kam hota hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "Why is documentation important in analytics?",
        sampleAnswer: "It supports transparency, consistency, reproducibility and future review."
      },
      {
        id: 2,
        question: "What should a metric definition document?",
        sampleAnswer: "Calculation, units, filters, inclusions, exclusions and time period."
      },
      {
        id: 3,
        question: "What belongs in a decision log?",
        sampleAnswer: "The decision, supporting reason, responsible person, date and follow-up."
      },
      {
        id: 4,
        question: "How do you make an analysis reproducible?",
        sampleAnswer: "Record data sources, cleaning steps, calculations, assumptions and versions."
      },
    ]
  },
};

export const TAB7_INSIGHTS_QUESTION_BANK_BY_ID: Record<number, TopicQuestionBank> = {
  286: TAB7_INSIGHTS_QUESTION_BANK["34.1"],
  206: TAB7_INSIGHTS_QUESTION_BANK["34.1"],
  341: TAB7_INSIGHTS_QUESTION_BANK["34.1"],
  287: TAB7_INSIGHTS_QUESTION_BANK["34.2"],
  207: TAB7_INSIGHTS_QUESTION_BANK["34.2"],
  342: TAB7_INSIGHTS_QUESTION_BANK["34.2"],
  288: TAB7_INSIGHTS_QUESTION_BANK["34.3"],
  208: TAB7_INSIGHTS_QUESTION_BANK["34.3"],
  343: TAB7_INSIGHTS_QUESTION_BANK["34.3"],
  289: TAB7_INSIGHTS_QUESTION_BANK["34.4"],
  209: TAB7_INSIGHTS_QUESTION_BANK["34.4"],
  344: TAB7_INSIGHTS_QUESTION_BANK["34.4"],
  290: TAB7_INSIGHTS_QUESTION_BANK["34.5"],
  210: TAB7_INSIGHTS_QUESTION_BANK["34.5"],
  345: TAB7_INSIGHTS_QUESTION_BANK["34.5"],
  291: TAB7_INSIGHTS_QUESTION_BANK["34.6"],
  211: TAB7_INSIGHTS_QUESTION_BANK["34.6"],
  346: TAB7_INSIGHTS_QUESTION_BANK["34.6"],
  292: TAB7_INSIGHTS_QUESTION_BANK["34.7"],
  212: TAB7_INSIGHTS_QUESTION_BANK["34.7"],
  347: TAB7_INSIGHTS_QUESTION_BANK["34.7"],
  293: TAB7_INSIGHTS_QUESTION_BANK["34.8"],
  213: TAB7_INSIGHTS_QUESTION_BANK["34.8"],
  348: TAB7_INSIGHTS_QUESTION_BANK["34.8"],
  302: TAB7_INSIGHTS_QUESTION_BANK["35.1"],
  214: TAB7_INSIGHTS_QUESTION_BANK["35.1"],
  351: TAB7_INSIGHTS_QUESTION_BANK["35.1"],
  303: TAB7_INSIGHTS_QUESTION_BANK["35.2"],
  215: TAB7_INSIGHTS_QUESTION_BANK["35.2"],
  352: TAB7_INSIGHTS_QUESTION_BANK["35.2"],
  304: TAB7_INSIGHTS_QUESTION_BANK["35.3"],
  216: TAB7_INSIGHTS_QUESTION_BANK["35.3"],
  353: TAB7_INSIGHTS_QUESTION_BANK["35.3"],
  305: TAB7_INSIGHTS_QUESTION_BANK["35.4"],
  217: TAB7_INSIGHTS_QUESTION_BANK["35.4"],
  354: TAB7_INSIGHTS_QUESTION_BANK["35.4"],
  306: TAB7_INSIGHTS_QUESTION_BANK["35.5"],
  218: TAB7_INSIGHTS_QUESTION_BANK["35.5"],
  355: TAB7_INSIGHTS_QUESTION_BANK["35.5"],
  307: TAB7_INSIGHTS_QUESTION_BANK["35.6"],
  219: TAB7_INSIGHTS_QUESTION_BANK["35.6"],
  356: TAB7_INSIGHTS_QUESTION_BANK["35.6"],
  308: TAB7_INSIGHTS_QUESTION_BANK["35.7"],
  220: TAB7_INSIGHTS_QUESTION_BANK["35.7"],
  357: TAB7_INSIGHTS_QUESTION_BANK["35.7"],
  309: TAB7_INSIGHTS_QUESTION_BANK["35.8"],
  221: TAB7_INSIGHTS_QUESTION_BANK["35.8"],
  358: TAB7_INSIGHTS_QUESTION_BANK["35.8"],
  310: TAB7_INSIGHTS_QUESTION_BANK["35.9"],
  222: TAB7_INSIGHTS_QUESTION_BANK["35.9"],
  359: TAB7_INSIGHTS_QUESTION_BANK["35.9"],
  294: TAB7_INSIGHTS_QUESTION_BANK["36.1"],
  223: TAB7_INSIGHTS_QUESTION_BANK["36.1"],
  361: TAB7_INSIGHTS_QUESTION_BANK["36.1"],
  295: TAB7_INSIGHTS_QUESTION_BANK["36.2"],
  224: TAB7_INSIGHTS_QUESTION_BANK["36.2"],
  362: TAB7_INSIGHTS_QUESTION_BANK["36.2"],
  296: TAB7_INSIGHTS_QUESTION_BANK["36.3"],
  225: TAB7_INSIGHTS_QUESTION_BANK["36.3"],
  363: TAB7_INSIGHTS_QUESTION_BANK["36.3"],
  297: TAB7_INSIGHTS_QUESTION_BANK["36.4"],
  226: TAB7_INSIGHTS_QUESTION_BANK["36.4"],
  364: TAB7_INSIGHTS_QUESTION_BANK["36.4"],
  298: TAB7_INSIGHTS_QUESTION_BANK["36.5"],
  227: TAB7_INSIGHTS_QUESTION_BANK["36.5"],
  365: TAB7_INSIGHTS_QUESTION_BANK["36.5"],
  299: TAB7_INSIGHTS_QUESTION_BANK["36.6"],
  228: TAB7_INSIGHTS_QUESTION_BANK["36.6"],
  366: TAB7_INSIGHTS_QUESTION_BANK["36.6"],
  300: TAB7_INSIGHTS_QUESTION_BANK["36.7"],
  229: TAB7_INSIGHTS_QUESTION_BANK["36.7"],
  367: TAB7_INSIGHTS_QUESTION_BANK["36.7"],
  301: TAB7_INSIGHTS_QUESTION_BANK["36.8"],
  230: TAB7_INSIGHTS_QUESTION_BANK["36.8"],
  368: TAB7_INSIGHTS_QUESTION_BANK["36.8"],
  311: TAB7_INSIGHTS_QUESTION_BANK["37.1"],
  231: TAB7_INSIGHTS_QUESTION_BANK["37.1"],
  371: TAB7_INSIGHTS_QUESTION_BANK["37.1"],
  312: TAB7_INSIGHTS_QUESTION_BANK["37.2"],
  232: TAB7_INSIGHTS_QUESTION_BANK["37.2"],
  372: TAB7_INSIGHTS_QUESTION_BANK["37.2"],
  313: TAB7_INSIGHTS_QUESTION_BANK["37.3"],
  233: TAB7_INSIGHTS_QUESTION_BANK["37.3"],
  373: TAB7_INSIGHTS_QUESTION_BANK["37.3"],
  314: TAB7_INSIGHTS_QUESTION_BANK["37.4"],
  234: TAB7_INSIGHTS_QUESTION_BANK["37.4"],
  374: TAB7_INSIGHTS_QUESTION_BANK["37.4"],
  315: TAB7_INSIGHTS_QUESTION_BANK["37.5"],
  235: TAB7_INSIGHTS_QUESTION_BANK["37.5"],
  375: TAB7_INSIGHTS_QUESTION_BANK["37.5"],
  316: TAB7_INSIGHTS_QUESTION_BANK["37.6"],
  236: TAB7_INSIGHTS_QUESTION_BANK["37.6"],
  376: TAB7_INSIGHTS_QUESTION_BANK["37.6"],
};