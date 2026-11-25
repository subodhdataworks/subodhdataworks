// ═══════════════════════════════════════════════════════════════════════════════
// TAB 6: GENERATIVE AI FOR ANALYSTS — MODULES 29 TO 33 MASTER QUESTION BANK
// 33 Topics • 165 MCQs • 99 Puzzles • 33 Missions • 132 Mock Interview Q&As
// Authentic Curriculum for Future IT Industry Master Course
// ═══════════════════════════════════════════════════════════════════════════════

import { TopicQuestionBank } from './questionBankRegistry';

export const TAB6_GENAI_QUESTION_BANK: Record<string, TopicQuestionBank> = {
  "29.1": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 29,
    moduleName: "Module 29: Generative AI Foundations",
    topicKey: "29.1",
    id: 253,
    topicTitle: "What Is Artificial Intelligence?",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "Which statement best describes Artificial Intelligence?",
        options: [
          { key: "A", text: "A faster internet connection" },
          { key: "B", text: "A new spreadsheet file type" },
          { key: "C", text: "Only a physical robot" },
          { key: "D", text: "Computer systems performing tasks that usually need human intelligence" },
        ],
        correct: 3,
        explanation: "AI software patterns recognize, predict ya generate kar sakta hai; robot hona zaroori nahi.",
        hint: "Focus on Computer systems performing tasks that usually need human intelligence to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "Which is a common example of AI?",
        options: [
          { key: "A", text: "An email spam filter identifying suspicious messages" },
          { key: "B", text: "A chair" },
          { key: "C", text: "A blank notebook" },
          { key: "D", text: "A switched-off monitor" },
        ],
        correct: 0,
        explanation: "Spam filter messages ke patterns use karke classification karta hai.",
        hint: "Focus on An email spam filter identifying suspicious messages to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "Does every AI system have to look like a human?",
        options: [
          { key: "A", text: "Only if it uses Excel" },
          { key: "B", text: "No, AI can run inside ordinary software" },
          { key: "C", text: "Yes, it must have a face" },
          { key: "D", text: "Yes, it must walk" },
        ],
        correct: 1,
        explanation: "AI background software, apps aur services mein bhi kaam karta hai.",
        hint: "Focus on No, AI can run inside ordinary software to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "Why might a business use AI?",
        options: [
          { key: "A", text: "To remove all need for data" },
          { key: "B", text: "To avoid checking results" },
          { key: "C", text: "To assist with pattern detection and repetitive tasks" },
          { key: "D", text: "To guarantee every decision is correct" },
        ],
        correct: 2,
        explanation: "AI helpful ho sakta hai, lekin output verification important hai.",
        hint: "Focus on To assist with pattern detection and repetitive tasks to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "Who remains responsible for checking an important AI-assisted report?",
        options: [
          { key: "A", text: "The keyboard" },
          { key: "B", text: "The AI avatar alone" },
          { key: "C", text: "The file extension" },
          { key: "D", text: "The human analyst or responsible team" },
        ],
        correct: 3,
        explanation: "Important decision mein human review aur accountability zaroori hai.",
        hint: "Focus on The human analyst or responsible team to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 AI Workflow",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Identify a useful task", "Provide appropriate data or instructions", "Review the AI result", "Use the verified result"],
        shuffled: ["Use the verified result", "Review the AI result", "Provide appropriate data or instructions", "Identify a useful task"],
        expected: ["Identify a useful task", "Provide appropriate data or instructions", "Review the AI result", "Use the verified result"],
        hint: "Task se verification tak logical flow banta hai."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Recognize AI Use",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Incoming email arrives", "Spam filter analyzes message patterns", "Message is classified as spam or not spam"],
        shuffled: ["Message is classified as spam or not spam", "Spam filter analyzes message patterns", "Incoming email arrives"],
        expected: ["Incoming email arrives", "Spam filter analyzes message patterns", "Message is classified as spam or not spam"],
        hint: "AI input analyze karke classification output deta hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Safe AI Assistance",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Ask AI for a draft", "Compare draft with reliable information", "Correct any mistakes", "Share the reviewed version"],
        shuffled: ["Share the reviewed version", "Correct any mistakes", "Compare draft with reliable information", "Ask AI for a draft"],
        expected: ["Ask AI for a draft", "Compare draft with reliable information", "Correct any mistakes", "Share the reviewed version"],
        hint: "AI draft ko final truth nahi maana jaata."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "AI",
        meaning: "AI is technology that enables systems to perform t..."
      },
      {
        id: 2,
        snippet: "Give one everyday AI example.",
        meaning: "An email spam filter is a common AI example."
      },
      {
        id: 3,
        snippet: "Does AI always need a robot",
        meaning: "No. Many AI systems work inside software applicati..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Choose an AI Use Case",
        scenario: "Office mein daily emails ko spam aur non-spam mein classify karna hai.",
        prompt: "Kaunsa option AI use case hai?",
        expectedResponse: "B \u2014 Spam classification AI ka common practical example hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is AI?",
        sampleAnswer: "AI is technology that enables systems to perform tasks such as pattern recognition, prediction and language processing."
      },
      {
        id: 2,
        question: "Give one everyday AI example.",
        sampleAnswer: "An email spam filter is a common AI example."
      },
      {
        id: 3,
        question: "Does AI always need a robot?",
        sampleAnswer: "No. Many AI systems work inside software applications."
      },
      {
        id: 4,
        question: "Why should people review AI outputs?",
        sampleAnswer: "AI can make mistakes, so humans should verify important results."
      },
    ]
  },
  "29.2": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 29,
    moduleName: "Module 29: Generative AI Foundations",
    topicKey: "29.2",
    id: 254,
    topicTitle: "AI vs Machine Learning vs Generative AI",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "Which field is the broadest category?",
        options: [
          { key: "A", text: "Machine Learning only" },
          { key: "B", text: "Generative AI only" },
          { key: "C", text: "Text generation only" },
          { key: "D", text: "Artificial Intelligence" },
        ],
        correct: 3,
        explanation: "AI umbrella field hai; ML uska subset aur GenAI content generation se related hai.",
        hint: "Focus on Artificial Intelligence to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "What is Machine Learning mainly about?",
        options: [
          { key: "A", text: "Learning patterns from data" },
          { key: "B", text: "Manually coloring charts" },
          { key: "C", text: "Saving a workbook" },
          { key: "D", text: "Typing the same fixed response" },
        ],
        correct: 0,
        explanation: "ML data se patterns learn karta hai.",
        hint: "Focus on Learning patterns from data to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "What is a typical Generative AI task?",
        options: [
          { key: "A", text: "Measuring a desk" },
          { key: "B", text: "Drafting a new email from a prompt" },
          { key: "C", text: "Sorting paper documents by hand" },
          { key: "D", text: "Turning off a computer" },
        ],
        correct: 1,
        explanation: "GenAI new text, images ya code generate kar sakta hai.",
        hint: "Focus on Drafting a new email from a prompt to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "Is all AI Generative AI?",
        options: [
          { key: "A", text: "Yes, every AI makes images" },
          { key: "B", text: "Only AI in phones" },
          { key: "C", text: "No, many AI systems classify or predict instead" },
          { key: "D", text: "Yes, every AI writes poems" },
        ],
        correct: 2,
        explanation: "Prediction/classification AI aur generation AI ke alag tasks hain.",
        hint: "Focus on No, many AI systems classify or predict instead to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "Which task best fits predictive ML rather than GenAI?",
        options: [
          { key: "A", text: "Drafting a product description" },
          { key: "B", text: "Creating a poem" },
          { key: "C", text: "Summarizing meeting notes" },
          { key: "D", text: "Predicting customer churn probability" },
        ],
        correct: 3,
        explanation: "Churn probability prediction predictive ML ka example hai.",
        hint: "Focus on Predicting customer churn probability to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Understand the Categories",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Artificial Intelligence: broad field", "Machine Learning: learns patterns from data", "Generative AI: creates content"],
        shuffled: ["Generative AI: creates content", "Machine Learning: learns patterns from data", "Artificial Intelligence: broad field"],
        expected: ["Artificial Intelligence: broad field", "Machine Learning: learns patterns from data", "Generative AI: creates content"],
        hint: "Broad se specialized categories ko samjho."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Predictive ML Task",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Collect past customer data", "Train a prediction model", "Predict churn risk", "Evaluate predictions"],
        shuffled: ["Evaluate predictions", "Predict churn risk", "Train a prediction model", "Collect past customer data"],
        expected: ["Collect past customer data", "Train a prediction model", "Predict churn risk", "Evaluate predictions"],
        hint: "ML ka output prediction ho sakta hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 GenAI Writing Task",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Provide a writing prompt", "Model generates a draft", "Human checks factual claims", "Human edits and approves"],
        shuffled: ["Human edits and approves", "Human checks factual claims", "Model generates a draft", "Provide a writing prompt"],
        expected: ["Provide a writing prompt", "Model generates a draft", "Human checks factual claims", "Human edits and approves"],
        hint: "GenAI content banata hai; review important hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How is AI different from ML",
        meaning: "AI is the broader field; ML is a method where syst..."
      },
      {
        id: 2,
        snippet: "Generative AI",
        meaning: "Generative AI creates content such as text, images..."
      },
      {
        id: 3,
        snippet: "Is all AI generative",
        meaning: "No. Many AI systems classify, recommend or predict..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Select the Correct Technology",
        scenario: "Manager ko customer complaints ka polite summary draft chahiye.",
        prompt: "Kaunsa approach content generate karne ke liye suitable hai?",
        expectedResponse: "A \u2014 Summary draft GenAI use case hai; final review human karega."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How is AI different from ML?",
        sampleAnswer: "AI is the broader field; ML is a method where systems learn patterns from data."
      },
      {
        id: 2,
        question: "What is Generative AI?",
        sampleAnswer: "Generative AI creates content such as text, images or code from input prompts."
      },
      {
        id: 3,
        question: "Is all AI generative?",
        sampleAnswer: "No. Many AI systems classify, recommend or predict without generating new content."
      },
      {
        id: 4,
        question: "Give a predictive ML example.",
        sampleAnswer: "A model predicting which customers may stop using a service is predictive ML."
      },
    ]
  },
  "29.3": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 29,
    moduleName: "Module 29: Generative AI Foundations",
    topicKey: "29.3",
    id: 255,
    topicTitle: "What Is a Large Language Model?",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "What does LLM stand for?",
        options: [
          { key: "A", text: "Local Learning Machine" },
          { key: "B", text: "Long Logic Module" },
          { key: "C", text: "Linked List Manager" },
          { key: "D", text: "Large Language Model" },
        ],
        correct: 3,
        explanation: "LLM ka full form Large Language Model hai.",
        hint: "Focus on Large Language Model to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "What does an LLM mainly process and generate?",
        options: [
          { key: "A", text: "Language-like sequences such as text" },
          { key: "B", text: "Only paper receipts" },
          { key: "C", text: "Only keyboard signals" },
          { key: "D", text: "Only electric power" },
        ],
        correct: 0,
        explanation: "LLMs language patterns ke basis par text output generate karte hain.",
        hint: "Focus on Language-like sequences such as text to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "What is a token in an LLM context?",
        options: [
          { key: "A", text: "A hardware chip" },
          { key: "B", text: "A unit of text processed by the model" },
          { key: "C", text: "A password to unlock a bank" },
          { key: "D", text: "A type of spreadsheet chart" },
        ],
        correct: 1,
        explanation: "Text ko tokens mein process kiya ja sakta hai.",
        hint: "Focus on A unit of text processed by the model to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "Does an LLM always know whether a statement is true?",
        options: [
          { key: "A", text: "Yes, it can never invent sources" },
          { key: "B", text: "Only for numerical answers" },
          { key: "C", text: "No, its outputs can be incorrect" },
          { key: "D", text: "Yes, every answer is verified" },
        ],
        correct: 2,
        explanation: "LLM fluent text de sakta hai jo factually wrong bhi ho.",
        hint: "Focus on No, its outputs can be incorrect to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "Which prompt is suitable for an LLM?",
        options: [
          { key: "A", text: "Physically move the office table" },
          { key: "B", text: "Replace a broken keyboard" },
          { key: "C", text: "Charge a laptop battery" },
          { key: "D", text: "Summarize these approved meeting notes in three bullets" },
        ],
        correct: 3,
        explanation: "LLM supplied text ko summarize karne mein help kar sakta hai.",
        hint: "Focus on Summarize these approved meeting notes in three bullets to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 LLM Text Flow",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["User writes a prompt", "Prompt is processed as tokens", "Model generates a response", "Human checks the response"],
        shuffled: ["Human checks the response", "Model generates a response", "Prompt is processed as tokens", "User writes a prompt"],
        expected: ["User writes a prompt", "Prompt is processed as tokens", "Model generates a response", "Human checks the response"],
        hint: "Generated response ko verify karna zaroori hai."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Safe Summary",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Choose approved source text", "Ask for a short summary", "Compare summary with source", "Correct unsupported claims"],
        shuffled: ["Correct unsupported claims", "Compare summary with source", "Ask for a short summary", "Choose approved source text"],
        expected: ["Choose approved source text", "Ask for a short summary", "Compare summary with source", "Correct unsupported claims"],
        hint: "Source-based summarization better controlled hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Understand Limitations",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Notice a confident claim", "Look for supporting evidence", "Check trusted source", "Accept only verified information"],
        shuffled: ["Accept only verified information", "Check trusted source", "Look for supporting evidence", "Notice a confident claim"],
        expected: ["Notice a confident claim", "Look for supporting evidence", "Check trusted source", "Accept only verified information"],
        hint: "Confidence accuracy ki guarantee nahi hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "an LLM",
        meaning: "A Large Language Model is a model trained to proce..."
      },
      {
        id: 2,
        snippet: "a token",
        meaning: "A token is a unit of text that a language model pr..."
      },
      {
        id: 3,
        snippet: "Can LLMs make factual mistakes",
        meaning: "Yes. They can generate plausible but incorrect sta..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Choose an LLM Task",
        scenario: "Analyst ko approved meeting notes se short summary banana hai.",
        prompt: "Kaunsa task LLM ke liye suitable hai?",
        expectedResponse: "C \u2014 LLM notes ka draft summary bana sakta hai; facts source se check karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is an LLM?",
        sampleAnswer: "A Large Language Model is a model trained to process and generate language-like content."
      },
      {
        id: 2,
        question: "What is a token?",
        sampleAnswer: "A token is a unit of text that a language model processes."
      },
      {
        id: 3,
        question: "Can LLMs make factual mistakes?",
        sampleAnswer: "Yes. They can generate plausible but incorrect statements."
      },
      {
        id: 4,
        question: "How should an analyst use an LLM summary?",
        sampleAnswer: "Compare the summary against the original approved source before using it."
      },
    ]
  },
  "29.4": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 29,
    moduleName: "Module 29: Generative AI Foundations",
    topicKey: "29.4",
    id: 256,
    topicTitle: "How AI Generates Text and Code",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "What usually starts a text-generation interaction?",
        options: [
          { key: "A", text: "A printer cartridge" },
          { key: "B", text: "A mousepad color" },
          { key: "C", text: "A folder icon" },
          { key: "D", text: "A user prompt or instruction" },
        ],
        correct: 3,
        explanation: "Prompt model ko task aur context batata hai.",
        hint: "Focus on A user prompt or instruction to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "How does a language model generally produce output?",
        options: [
          { key: "A", text: "By generating a sequence of tokens based on learned patterns and context" },
          { key: "B", text: "By manually reading every website each time" },
          { key: "C", text: "By guaranteeing mathematically proved facts" },
          { key: "D", text: "By copying only one fixed sentence" },
        ],
        correct: 0,
        explanation: "Model context ke basis par tokens generate karta hai.",
        hint: "Focus on By generating a sequence of tokens based on learned patterns and context to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "Why can generated code fail?",
        options: [
          { key: "A", text: "Code cannot be tested" },
          { key: "B", text: "It may contain syntax, logic or assumption errors" },
          { key: "C", text: "Code from AI never fails" },
          { key: "D", text: "Every program needs a robot" },
        ],
        correct: 1,
        explanation: "Generated code ko run aur test karna chahiye.",
        hint: "Focus on It may contain syntax, logic or assumption errors to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "What should be done before using AI-generated SQL in a database?",
        options: [
          { key: "A", text: "Share database passwords" },
          { key: "B", text: "Assume all table names are real" },
          { key: "C", text: "Review and test it against the correct schema" },
          { key: "D", text: "Run DELETE statements immediately" },
        ],
        correct: 2,
        explanation: "Schema aur query logic verify karo.",
        hint: "Focus on Review and test it against the correct schema to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "Which statement about AI-generated explanations is correct?",
        options: [
          { key: "A", text: "They are always authoritative" },
          { key: "B", text: "They replace all documentation" },
          { key: "C", text: "They never omit important steps" },
          { key: "D", text: "They are useful drafts but need checking" },
        ],
        correct: 3,
        explanation: "Explanations mein missing ya invented details ho sakte hain.",
        hint: "Focus on They are useful drafts but need checking to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Text Generation Cycle",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Write a clear prompt", "AI generates a draft", "Compare draft with source", "Edit the final text"],
        shuffled: ["Edit the final text", "Compare draft with source", "AI generates a draft", "Write a clear prompt"],
        expected: ["Write a clear prompt", "AI generates a draft", "Compare draft with source", "Edit the final text"],
        hint: "Generation ke baad verification essential hai."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 AI Code Cycle",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Describe expected input and output", "Request a code draft", "Review and run in a safe environment", "Test with known cases"],
        shuffled: ["Test with known cases", "Review and run in a safe environment", "Request a code draft", "Describe expected input and output"],
        expected: ["Describe expected input and output", "Request a code draft", "Review and run in a safe environment", "Test with known cases"],
        hint: "Code test kiye bina production mein use mat karo."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Debug Generated Code",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Observe unexpected output", "Check input assumptions", "Inspect code logic", "Correct and retest"],
        shuffled: ["Correct and retest", "Inspect code logic", "Check input assumptions", "Observe unexpected output"],
        expected: ["Observe unexpected output", "Check input assumptions", "Inspect code logic", "Correct and retest"],
        hint: "Debugging mein expected aur actual result compare hota hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How does AI generate text",
        meaning: "A language model generates tokens using patterns l..."
      },
      {
        id: 2,
        snippet: "Can AI generate executable code",
        meaning: "Yes, but the code may contain errors and must be r..."
      },
      {
        id: 3,
        snippet: "Why is a clear prompt useful",
        meaning: "It gives the model relevant context, constraints a..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Review AI Code",
        scenario: "AI ne sales total calculate karne ke liye Python code diya hai.",
        prompt: "Production report mein use karne se pehle kya karoge?",
        expectedResponse: "B \u2014 AI-generated code ka result known sample se verify karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How does AI generate text?",
        sampleAnswer: "A language model generates tokens using patterns learned during training and the current context."
      },
      {
        id: 2,
        question: "Can AI generate executable code?",
        sampleAnswer: "Yes, but the code may contain errors and must be reviewed and tested."
      },
      {
        id: 3,
        question: "Why is a clear prompt useful?",
        sampleAnswer: "It gives the model relevant context, constraints and the desired output."
      },
      {
        id: 4,
        question: "What is a safe AI coding workflow?",
        sampleAnswer: "Generate a draft, inspect it, test with known cases, and revise before use."
      },
    ]
  },
  "29.5": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 29,
    moduleName: "Module 29: Generative AI Foundations",
    topicKey: "29.5",
    id: 257,
    topicTitle: "Common GenAI Tools for Analysts",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "Which task can a conversational GenAI assistant help draft?",
        options: [
          { key: "A", text: "A physical server repair" },
          { key: "B", text: "A replacement laptop battery" },
          { key: "C", text: "A secure password disclosure" },
          { key: "D", text: "A data-cleaning checklist" },
        ],
        correct: 3,
        explanation: "AI checklists draft kar sakta hai, but analyst review karega.",
        hint: "Focus on A data-cleaning checklist to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "What is a code assistant mainly useful for?",
        options: [
          { key: "A", text: "Suggesting and explaining code" },
          { key: "B", text: "Guaranteeing bug-free software" },
          { key: "C", text: "Replacing all testing" },
          { key: "D", text: "Managing confidential data without rules" },
        ],
        correct: 0,
        explanation: "Code assistant drafts aur explanations deta hai; testing zaroori hai.",
        hint: "Focus on Suggesting and explaining code to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "What can a document summarization tool assist with?",
        options: [
          { key: "A", text: "Accessing any private file without permission" },
          { key: "B", text: "Creating a draft summary from approved text" },
          { key: "C", text: "Inventing missing sales numbers" },
          { key: "D", text: "Proving every claim automatically" },
        ],
        correct: 1,
        explanation: "Approved text ka summary draft ban sakta hai.",
        hint: "Focus on Creating a draft summary from approved text to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "What matters when choosing an AI tool for work?",
        options: [
          { key: "A", text: "Only how many emojis it uses" },
          { key: "B", text: "Only the longest answer" },
          { key: "C", text: "Data policy, permissions and task suitability" },
          { key: "D", text: "Only the logo color" },
        ],
        correct: 2,
        explanation: "Tool selection mein company policy aur data handling important hai.",
        hint: "Focus on Data policy, permissions and task suitability to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "Which AI output still needs validation?",
        options: [
          { key: "A", text: "A checked physical label on a box" },
          { key: "B", text: "A keyboard cable" },
          { key: "C", text: "A blank page" },
          { key: "D", text: "An AI-suggested Excel formula" },
        ],
        correct: 3,
        explanation: "Formula ko sample cells par test karna chahiye.",
        hint: "Focus on An AI-suggested Excel formula to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Pick an Analyst Tool",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Identify the task", "Choose an approved tool category", "Provide non-sensitive context", "Review and validate output"],
        shuffled: ["Review and validate output", "Provide non-sensitive context", "Choose an approved tool category", "Identify the task"],
        expected: ["Identify the task", "Choose an approved tool category", "Provide non-sensitive context", "Review and validate output"],
        hint: "Tool task aur workplace policy ke according select karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 AI Formula Assistance",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Describe spreadsheet columns", "Ask for formula explanation", "Test on sample rows", "Confirm result before reuse"],
        shuffled: ["Confirm result before reuse", "Test on sample rows", "Ask for formula explanation", "Describe spreadsheet columns"],
        expected: ["Describe spreadsheet columns", "Ask for formula explanation", "Test on sample rows", "Confirm result before reuse"],
        hint: "Formula suggestions ko validate karo."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 AI Report Assistance",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Provide verified summary figures", "Ask for narrative draft", "Check every number against figures", "Publish reviewed summary"],
        shuffled: ["Publish reviewed summary", "Check every number against figures", "Ask for narrative draft", "Provide verified summary figures"],
        expected: ["Provide verified summary figures", "Ask for narrative draft", "Check every number against figures", "Publish reviewed summary"],
        hint: "Verified inputs se grounded narrative ban sakti hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "Name two GenAI tasks for analysts.",
        meaning: "Explaining formulas and drafting summaries from ve..."
      },
      {
        id: 2,
        snippet: "a code assistant",
        meaning: "A tool that suggests, explains or helps debug code..."
      },
      {
        id: 3,
        snippet: "How do you choose a workplace AI tool",
        meaning: "Check company approval, privacy rules, and whether..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Choose a Tool Category",
        scenario: "Analyst ko existing Excel formula ka meaning samajhna hai.",
        prompt: "Kaunsa AI assistance best fit hai?",
        expectedResponse: "A \u2014 Formula explanation assistant formula samjha sakta hai; result test karna chahiye."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "Name two GenAI tasks for analysts.",
        sampleAnswer: "Explaining formulas and drafting summaries from verified data are two common tasks."
      },
      {
        id: 2,
        question: "What is a code assistant?",
        sampleAnswer: "A tool that suggests, explains or helps debug code."
      },
      {
        id: 3,
        question: "How do you choose a workplace AI tool?",
        sampleAnswer: "Check company approval, privacy rules, and whether it fits the task."
      },
      {
        id: 4,
        question: "Can an AI tool replace validation?",
        sampleAnswer: "No. The analyst must check outputs against trusted data and tests."
      },
    ]
  },
  "29.6": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 29,
    moduleName: "Module 29: Generative AI Foundations",
    topicKey: "29.6",
    id: 258,
    topicTitle: "Strengths and Limitations of GenAI",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "Which is a realistic strength of GenAI?",
        options: [
          { key: "A", text: "Guaranteeing accurate facts without evidence" },
          { key: "B", text: "Replacing all approvals" },
          { key: "C", text: "Always knowing private company data" },
          { key: "D", text: "Quickly drafting alternative explanations" },
        ],
        correct: 3,
        explanation: "GenAI drafting aur brainstorming fast kar sakta hai.",
        hint: "Focus on Quickly drafting alternative explanations to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "Which is a known limitation?",
        options: [
          { key: "A", text: "It can generate convincing but false information" },
          { key: "B", text: "It never makes mistakes" },
          { key: "C", text: "It always cites real sources" },
          { key: "D", text: "It always knows latest internal data" },
        ],
        correct: 0,
        explanation: "Confident answer bhi hallucination ho sakta hai.",
        hint: "Focus on It can generate convincing but false information to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "What should you do with an AI-generated business number?",
        options: [
          { key: "A", text: "Treat it as an official record" },
          { key: "B", text: "Verify it against the actual data source" },
          { key: "C", text: "Use it because it sounds precise" },
          { key: "D", text: "Round it and publish" },
        ],
        correct: 1,
        explanation: "Business metrics source se match hone chahiye.",
        hint: "Focus on Verify it against the actual data source to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "Which task is unsuitable without extra safeguards?",
        options: [
          { key: "A", text: "Explaining a public concept" },
          { key: "B", text: "Drafting a non-sensitive checklist" },
          { key: "C", text: "Pasting confidential customer records into an unapproved AI tool" },
          { key: "D", text: "Asking for a generic email outline" },
        ],
        correct: 2,
        explanation: "Confidential records approved controls ke bina share nahi karne chahiye.",
        hint: "Focus on Pasting confidential customer records into an unapproved AI tool to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "How should GenAI best support a data analyst?",
        options: [
          { key: "A", text: "As the only decision maker" },
          { key: "B", text: "As a replacement for all source data" },
          { key: "C", text: "As a guaranteed compliance officer" },
          { key: "D", text: "As an assistant with human judgment and verification" },
        ],
        correct: 3,
        explanation: "AI helpful assistant hai, final accountability human ke paas hai.",
        hint: "Focus on As an assistant with human judgment and verification to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Use Strengths Wisely",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Choose a suitable drafting task", "Request a draft", "Review facts and assumptions", "Finalize with human judgment"],
        shuffled: ["Finalize with human judgment", "Review facts and assumptions", "Request a draft", "Choose a suitable drafting task"],
        expected: ["Choose a suitable drafting task", "Request a draft", "Review facts and assumptions", "Finalize with human judgment"],
        hint: "Speed aur verification dono important hain."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Handle a Suspect Claim",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Spot an unsupported number", "Locate authoritative source", "Compare exact figures", "Correct or remove claim"],
        shuffled: ["Correct or remove claim", "Compare exact figures", "Locate authoritative source", "Spot an unsupported number"],
        expected: ["Spot an unsupported number", "Locate authoritative source", "Compare exact figures", "Correct or remove claim"],
        hint: "Invented numbers publish mat karo."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Protect Sensitive Data",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Check data classification", "Use an approved tool", "Share only permitted minimum context", "Review output before distribution"],
        shuffled: ["Review output before distribution", "Share only permitted minimum context", "Use an approved tool", "Check data classification"],
        expected: ["Check data classification", "Use an approved tool", "Share only permitted minimum context", "Review output before distribution"],
        hint: "Data privacy ko workflow ka part banao."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "one strength of GenAI",
        meaning: "It can quickly draft explanations, summaries and c..."
      },
      {
        id: 2,
        snippet: "one limitation of GenAI",
        meaning: "It may generate inaccurate or unsupported informat..."
      },
      {
        id: 3,
        snippet: "Why is data privacy important",
        meaning: "Sensitive information should only be processed usi..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Spot the Limitation",
        scenario: "AI ne bina sales file dekhe kaha: \u201cRevenue 35% badha.\u201d",
        prompt: "Analyst ko kya karna chahiye?",
        expectedResponse: "C \u2014 AI ke unsupported claim ko data se verify karna zaroori hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is one strength of GenAI?",
        sampleAnswer: "It can quickly draft explanations, summaries and code suggestions."
      },
      {
        id: 2,
        question: "What is one limitation of GenAI?",
        sampleAnswer: "It may generate inaccurate or unsupported information."
      },
      {
        id: 3,
        question: "Why is data privacy important?",
        sampleAnswer: "Sensitive information should only be processed using authorized tools and controls."
      },
      {
        id: 4,
        question: "What is the analyst\u2019s responsibility?",
        sampleAnswer: "Validate important outputs and make accountable decisions."
      },
    ]
  },
  "30.1": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 30,
    moduleName: "Module 30: Responsible and Safe AI Use",
    topicKey: "30.1",
    id: 259,
    topicTitle: "Hallucinations and Why They Happen",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "What is an AI hallucination?",
        options: [
          { key: "A", text: "A verified fact" },
          { key: "B", text: "A normal Excel chart" },
          { key: "C", text: "A plausible-looking but incorrect or unsupported output" },
          { key: "D", text: "A computer monitor defect" },
        ],
        correct: 2,
        explanation: "AI invented facts ya citations produce kar sakta hai.",
        hint: "Focus on A plausible-looking but incorrect or unsupported output to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "Can a confident AI answer still be wrong?",
        options: [
          { key: "A", text: "No, confidence guarantees truth" },
          { key: "B", text: "Only if it is short" },
          { key: "C", text: "Only in spreadsheets" },
          { key: "D", text: "Yes, confidence in wording does not prove accuracy" },
        ],
        correct: 3,
        explanation: "Fluent language accuracy ka proof nahi.",
        hint: "Focus on Yes, confidence in wording does not prove accuracy to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "Which output is a hallucination warning sign?",
        options: [
          { key: "A", text: "A precise sales figure with no supplied data or source" },
          { key: "B", text: "A calculation checked against source rows" },
          { key: "C", text: "A quote matched to an original document" },
          { key: "D", text: "A labeled assumption" },
        ],
        correct: 0,
        explanation: "Unsupported exact figure red flag hai.",
        hint: "Focus on A precise sales figure with no supplied data or source to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "What should you do with a suspicious citation?",
        options: [
          { key: "A", text: "Delete all references" },
          { key: "B", text: "Open and verify the original source" },
          { key: "C", text: "Trust the citation formatting" },
          { key: "D", text: "Share it without checking" },
        ],
        correct: 1,
        explanation: "Source exist karta hai ya nahi aur claim support karta hai ya nahi check karo.",
        hint: "Focus on Open and verify the original source to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "What is the best prevention practice?",
        options: [
          { key: "A", text: "Avoid providing any context" },
          { key: "B", text: "Assume all examples are real" },
          { key: "C", text: "Ground the task in reliable sources and verify outputs" },
          { key: "D", text: "Ask the AI to sound more confident" },
        ],
        correct: 2,
        explanation: "Grounding + human verification risk kam karte hain.",
        hint: "Focus on Ground the task in reliable sources and verify outputs to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Detect a Hallucination",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Read the AI claim", "Find the referenced source", "Check whether source supports claim", "Correct or reject the claim"],
        shuffled: ["Correct or reject the claim", "Check whether source supports claim", "Find the referenced source", "Read the AI claim"],
        expected: ["Read the AI claim", "Find the referenced source", "Check whether source supports claim", "Correct or reject the claim"],
        hint: "Claim ko original evidence se compare karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Check an Invented Number",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Notice a number without source", "Open verified dataset", "Recalculate metric", "Use only confirmed result"],
        shuffled: ["Use only confirmed result", "Recalculate metric", "Open verified dataset", "Notice a number without source"],
        expected: ["Notice a number without source", "Open verified dataset", "Recalculate metric", "Use only confirmed result"],
        hint: "Precise number bina data ke reliable nahi."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Improve Grounding",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Provide approved source text", "Ask AI to cite source passages", "Inspect cited passages", "Remove unsupported statements"],
        shuffled: ["Remove unsupported statements", "Inspect cited passages", "Ask AI to cite source passages", "Provide approved source text"],
        expected: ["Provide approved source text", "Ask AI to cite source passages", "Inspect cited passages", "Remove unsupported statements"],
        hint: "Source passages verification ko easier banate hain."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "an AI hallucination",
        meaning: "An AI hallucination is a plausible but false or un..."
      },
      {
        id: 2,
        snippet: "Why do hallucinations matter in analytics",
        meaning: "They can introduce false figures, explanations or ..."
      },
      {
        id: 3,
        snippet: "How do you verify a suspicious claim",
        meaning: "Check it against the original trusted data or sour..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Check a Sales Claim",
        scenario: "AI ne bola ki Q2 sales 42% badhi, lekin koi data diya hi nahi gaya.",
        prompt: "Kya karna sahi hai?",
        expectedResponse: "A \u2014 Unsupported percentage ko data ke bina accept mat karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is an AI hallucination?",
        sampleAnswer: "An AI hallucination is a plausible but false or unsupported generated statement."
      },
      {
        id: 2,
        question: "Why do hallucinations matter in analytics?",
        sampleAnswer: "They can introduce false figures, explanations or sources into business reports."
      },
      {
        id: 3,
        question: "How do you verify a suspicious claim?",
        sampleAnswer: "Check it against the original trusted data or source."
      },
      {
        id: 4,
        question: "Can a source citation itself be hallucinated?",
        sampleAnswer: "Yes. The citation and its relevance must be checked."
      },
    ]
  },
  "30.2": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 30,
    moduleName: "Module 30: Responsible and Safe AI Use",
    topicKey: "30.2",
    id: 260,
    topicTitle: "Fact-Checking AI Outputs",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "What is the first step when AI gives a surprising statistic?",
        options: [
          { key: "A", text: "Ask AI to make it more dramatic" },
          { key: "B", text: "Round it to the nearest hundred" },
          { key: "C", text: "Locate the original trusted data source" },
          { key: "D", text: "Copy it into a report" },
        ],
        correct: 2,
        explanation: "Original source se verification shuru karo.",
        hint: "Focus on Locate the original trusted data source to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "How should an AI-generated percentage be verified?",
        options: [
          { key: "A", text: "Check only spelling" },
          { key: "B", text: "Use any convenient denominator" },
          { key: "C", text: "Trust the percentage sign" },
          { key: "D", text: "Recalculate using the correct numerator and denominator" },
        ],
        correct: 3,
        explanation: "Formula aur underlying values dono check karo.",
        hint: "Focus on Recalculate using the correct numerator and denominator to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "Which source is best for an internal sales total?",
        options: [
          { key: "A", text: "The authorized sales dataset or approved report" },
          { key: "B", text: "An unrelated social media comment" },
          { key: "C", text: "A random example in a prompt" },
          { key: "D", text: "An invented citation" },
        ],
        correct: 0,
        explanation: "Internal metric approved source se verify karo.",
        hint: "Focus on The authorized sales dataset or approved report to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "What if the source does not support a claim?",
        options: [
          { key: "A", text: "Add fake evidence" },
          { key: "B", text: "Remove or qualify the claim" },
          { key: "C", text: "Repeat it more confidently" },
          { key: "D", text: "Hide the source" },
        ],
        correct: 1,
        explanation: "Unsupported claim report mein nahi jana chahiye.",
        hint: "Focus on Remove or qualify the claim to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "What is traceability in AI-assisted reporting?",
        options: [
          { key: "A", text: "Making a report longer" },
          { key: "B", text: "Adding more charts without data" },
          { key: "C", text: "Being able to connect claims to supporting data or sources" },
          { key: "D", text: "Using a larger font" },
        ],
        correct: 2,
        explanation: "Traceability se reviewer figures ko audit kar sakta hai.",
        hint: "Focus on Being able to connect claims to supporting data or sources to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Fact-Check a Figure",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Identify the exact claim", "Open trusted dataset", "Recalculate or locate the value", "Record the verified result"],
        shuffled: ["Record the verified result", "Recalculate or locate the value", "Open trusted dataset", "Identify the exact claim"],
        expected: ["Identify the exact claim", "Open trusted dataset", "Recalculate or locate the value", "Record the verified result"],
        hint: "Fact-checking evidence-based hona chahiye."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Validate a Percentage",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Identify numerator", "Identify denominator", "Apply percentage formula", "Compare with AI answer"],
        shuffled: ["Compare with AI answer", "Apply percentage formula", "Identify denominator", "Identify numerator"],
        expected: ["Identify numerator", "Identify denominator", "Apply percentage formula", "Compare with AI answer"],
        hint: "Correct denominator bahut important hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Check a Source",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Open cited document", "Find supporting passage", "Compare claim and passage", "Correct any mismatch"],
        shuffled: ["Correct any mismatch", "Compare claim and passage", "Find supporting passage", "Open cited document"],
        expected: ["Open cited document", "Find supporting passage", "Compare claim and passage", "Correct any mismatch"],
        hint: "Citation hona alone enough nahi hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "What does fact-checking mean",
        meaning: "Verifying statements against trustworthy original ..."
      },
      {
        id: 2,
        snippet: "How do you check a percentage",
        meaning: "Recalculate it using the correct numerator, denomi..."
      },
      {
        id: 3,
        snippet: "What if a source contradicts the AI answer",
        meaning: "Correct the answer or remove the unsupported state..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Verify a Growth Rate",
        scenario: "AI ne growth 20% batayi. Verified sales last month 100 aur this month 120 hain.",
        prompt: "Kya karna chahiye?",
        expectedResponse: "C \u2014 Known data se 20% growth verify ho jaati hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What does fact-checking mean?",
        sampleAnswer: "Verifying statements against trustworthy original sources."
      },
      {
        id: 2,
        question: "How do you check a percentage?",
        sampleAnswer: "Recalculate it using the correct numerator, denominator and formula."
      },
      {
        id: 3,
        question: "What if a source contradicts the AI answer?",
        sampleAnswer: "Correct the answer or remove the unsupported statement."
      },
      {
        id: 4,
        question: "Why keep source references?",
        sampleAnswer: "They allow others to audit and reproduce important claims."
      },
    ]
  },
  "30.3": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 30,
    moduleName: "Module 30: Responsible and Safe AI Use",
    topicKey: "30.3",
    id: 261,
    topicTitle: "Data Privacy and Confidential Information",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "Which information is usually sensitive in a business context?",
        options: [
          { key: "A", text: "A generic math example" },
          { key: "B", text: "A published tutorial title" },
          { key: "C", text: "Customer personal details and private account records" },
          { key: "D", text: "A public definition of SQL" },
        ],
        correct: 2,
        explanation: "Personal records ko protect karna chahiye.",
        hint: "Focus on Customer personal details and private account records to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "What should you do before sharing work data with an AI tool?",
        options: [
          { key: "A", text: "Paste everything to save time" },
          { key: "B", text: "Remove all file names but keep secrets" },
          { key: "C", text: "Assume every tool is private" },
          { key: "D", text: "Check workplace approval and data-handling policy" },
        ],
        correct: 3,
        explanation: "Tool authorization aur data policy first.",
        hint: "Focus on Check workplace approval and data-handling policy to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "What is data minimization?",
        options: [
          { key: "A", text: "Sharing only the information necessary for the task" },
          { key: "B", text: "Sharing every available column" },
          { key: "C", text: "Making a file larger" },
          { key: "D", text: "Copying data to more apps" },
        ],
        correct: 0,
        explanation: "Minimum necessary data use karo.",
        hint: "Focus on Sharing only the information necessary for the task to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "Which is a safer prompt for generic SQL help?",
        options: [
          { key: "A", text: "Attach payroll passwords" },
          { key: "B", text: "Use a fictional schema with no real customer details" },
          { key: "C", text: "Paste a live customer export with phone numbers" },
          { key: "D", text: "Include API secrets" },
        ],
        correct: 1,
        explanation: "Synthetic schema se concept samajh sakte hain without sensitive data.",
        hint: "Focus on Use a fictional schema with no real customer details to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "If confidential data was shared with an unapproved tool, what is appropriate?",
        options: [
          { key: "A", text: "Share the same file again" },
          { key: "B", text: "Assume no risk exists" },
          { key: "C", text: "Follow the organization\u2019s incident-reporting procedure promptly" },
          { key: "D", text: "Hide the incident" },
        ],
        correct: 2,
        explanation: "Potential exposure ko policy ke according report karo.",
        hint: "Focus on Follow the organization\u2019s incident-reporting procedure promptly to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Safe Data Check",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Classify the information", "Check approved tools and policy", "Remove unnecessary sensitive fields", "Submit only permitted content"],
        shuffled: ["Submit only permitted content", "Remove unnecessary sensitive fields", "Check approved tools and policy", "Classify the information"],
        expected: ["Classify the information", "Check approved tools and policy", "Remove unnecessary sensitive fields", "Submit only permitted content"],
        hint: "Privacy task ke start mein check karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Prepare a Safe Example",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Replace real names with synthetic names", "Remove phone numbers and secrets", "Keep only required column structure", "Ask the generic technical question"],
        shuffled: ["Ask the generic technical question", "Keep only required column structure", "Remove phone numbers and secrets", "Replace real names with synthetic names"],
        expected: ["Replace real names with synthetic names", "Remove phone numbers and secrets", "Keep only required column structure", "Ask the generic technical question"],
        hint: "Synthetic example se privacy risk reduce hota hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Handle a Possible Exposure",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Stop further sharing", "Follow incident-response policy", "Notify authorized contact", "Document facts as required"],
        shuffled: ["Document facts as required", "Notify authorized contact", "Follow incident-response policy", "Stop further sharing"],
        expected: ["Stop further sharing", "Follow incident-response policy", "Notify authorized contact", "Document facts as required"],
        hint: "Unapproved sharing ko ignore mat karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "confidential information",
        meaning: "Information restricted by privacy, security or wor..."
      },
      {
        id: 2,
        snippet: "data minimization",
        meaning: "Using or sharing only the minimum data needed for ..."
      },
      {
        id: 3,
        snippet: "Can you paste customer data into any AI tool",
        meaning: "No. You must follow approval, privacy and data-han..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Protect Customer Data",
        scenario: "Analyst AI se SQL JOIN samajhna chahta hai; real customer file mein phone numbers hain.",
        prompt: "Sabse safe approach kya hai?",
        expectedResponse: "B \u2014 Sensitive data ke bina example query samjhi ja sakti hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is confidential information?",
        sampleAnswer: "Information restricted by privacy, security or workplace rules."
      },
      {
        id: 2,
        question: "What is data minimization?",
        sampleAnswer: "Using or sharing only the minimum data needed for a task."
      },
      {
        id: 3,
        question: "Can you paste customer data into any AI tool?",
        sampleAnswer: "No. You must follow approval, privacy and data-handling policies."
      },
      {
        id: 4,
        question: "What should you do after an accidental disclosure?",
        sampleAnswer: "Follow the organization\u2019s incident-reporting and response process promptly."
      },
    ]
  },
  "30.4": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 30,
    moduleName: "Module 30: Responsible and Safe AI Use",
    topicKey: "30.4",
    id: 262,
    topicTitle: "Bias, Fairness and Responsible Use",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "What is bias in an AI output?",
        options: [
          { key: "A", text: "A type of file extension" },
          { key: "B", text: "A guaranteed fair prediction" },
          { key: "C", text: "A systematic tendency that can lead to unfair or distorted results" },
          { key: "D", text: "A spreadsheet cell address" },
        ],
        correct: 2,
        explanation: "Bias outcomes ko unfair bana sakta hai.",
        hint: "Focus on A systematic tendency that can lead to unfair or distorted results to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "Why should analysts inspect training or input data quality?",
        options: [
          { key: "A", text: "More rows always guarantee fairness" },
          { key: "B", text: "Bias disappears with charts" },
          { key: "C", text: "Data quality does not matter" },
          { key: "D", text: "Unrepresentative data can distort outcomes" },
        ],
        correct: 3,
        explanation: "Unrepresentative data se unfair conclusions aa sakte hain.",
        hint: "Focus on Unrepresentative data can distort outcomes to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "Which action supports fairness?",
        options: [
          { key: "A", text: "Review results across relevant groups using approved methods" },
          { key: "B", text: "Assume one overall average proves fairness" },
          { key: "C", text: "Hide errors" },
          { key: "D", text: "Use personal stereotypes" },
        ],
        correct: 0,
        explanation: "Group-wise checks unfair patterns identify karne mein help kar sakte hain.",
        hint: "Focus on Review results across relevant groups using approved methods to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "What should an analyst do if an AI summary uses stereotypes?",
        options: [
          { key: "A", text: "Treat it as a verified fact" },
          { key: "B", text: "Remove the stereotype and examine evidence" },
          { key: "C", text: "Publish it unchanged" },
          { key: "D", text: "Add stronger language" },
        ],
        correct: 1,
        explanation: "Stereotypes evidence nahi hote.",
        hint: "Focus on Remove the stereotype and examine evidence to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "Is a high overall accuracy enough to guarantee fairness?",
        options: [
          { key: "A", text: "Only for text summaries" },
          { key: "B", text: "Only if the report is colorful" },
          { key: "C", text: "No, subgroup performance and context may still matter" },
          { key: "D", text: "Yes, always" },
        ],
        correct: 2,
        explanation: "Aggregate accuracy fairness ki guarantee nahi hai.",
        hint: "Focus on No, subgroup performance and context may still matter to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Fairness Review",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Identify the decision and affected groups", "Check data representation", "Review relevant group outcomes", "Document and address concerns"],
        shuffled: ["Document and address concerns", "Review relevant group outcomes", "Check data representation", "Identify the decision and affected groups"],
        expected: ["Identify the decision and affected groups", "Check data representation", "Review relevant group outcomes", "Document and address concerns"],
        hint: "Fairness evaluation context-dependent hai."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Handle Stereotyped Text",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Spot unsupported generalization", "Remove biased wording", "Check actual evidence", "Write neutral, evidence-based summary"],
        shuffled: ["Write neutral, evidence-based summary", "Check actual evidence", "Remove biased wording", "Spot unsupported generalization"],
        expected: ["Spot unsupported generalization", "Remove biased wording", "Check actual evidence", "Write neutral, evidence-based summary"],
        hint: "Neutral summary facts par based hoti hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Responsible Model Use",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Define intended use", "Check limitations", "Test for potential harm", "Escalate concerns when needed"],
        shuffled: ["Escalate concerns when needed", "Test for potential harm", "Check limitations", "Define intended use"],
        expected: ["Define intended use", "Check limitations", "Test for potential harm", "Escalate concerns when needed"],
        hint: "Responsible AI use mein risk review bhi hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "AI bias",
        meaning: "Bias is a systematic distortion that may produce u..."
      },
      {
        id: 2,
        snippet: "Why does data representation matter",
        meaning: "Missing or unbalanced data can distort analysis fo..."
      },
      {
        id: 3,
        snippet: "Does overall accuracy prove fairness",
        meaning: "No. Relevant subgroup outcomes and use context als..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Spot an Unfair Summary",
        scenario: "AI ne customer behavior ko bina evidence ek demographic group se generalize kiya.",
        prompt: "Best response kya hai?",
        expectedResponse: "A \u2014 Unsupported group claims ko avoid karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is AI bias?",
        sampleAnswer: "Bias is a systematic distortion that may produce unfair outcomes."
      },
      {
        id: 2,
        question: "Why does data representation matter?",
        sampleAnswer: "Missing or unbalanced data can distort analysis for some groups."
      },
      {
        id: 3,
        question: "Does overall accuracy prove fairness?",
        sampleAnswer: "No. Relevant subgroup outcomes and use context also matter."
      },
      {
        id: 4,
        question: "How do you respond to biased AI text?",
        sampleAnswer: "Remove unsupported stereotypes and use verified, neutral wording."
      },
    ]
  },
  "30.5": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 30,
    moduleName: "Module 30: Responsible and Safe AI Use",
    topicKey: "30.5",
    id: 263,
    topicTitle: "Human Review and Accountability",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "Who should approve an important AI-assisted business decision?",
        options: [
          { key: "A", text: "A spreadsheet theme" },
          { key: "B", text: "The printer" },
          { key: "C", text: "An authorized human decision-maker" },
          { key: "D", text: "The AI model by itself" },
        ],
        correct: 2,
        explanation: "AI assistance final accountability transfer nahi karti.",
        hint: "Focus on An authorized human decision-maker to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "What should a reviewer check in an AI-generated report?",
        options: [
          { key: "A", text: "Only the font size" },
          { key: "B", text: "Only the file name" },
          { key: "C", text: "Only the number of pages" },
          { key: "D", text: "Facts, calculations, assumptions and policy compliance" },
        ],
        correct: 3,
        explanation: "Reviewer ko content aur risk dono check karne hain.",
        hint: "Focus on Facts, calculations, assumptions and policy compliance to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "What should happen when an AI answer conflicts with verified data?",
        options: [
          { key: "A", text: "Investigate and correct before release" },
          { key: "B", text: "Publish both without explanation" },
          { key: "C", text: "Prefer the AI answer automatically" },
          { key: "D", text: "Delete the verified data" },
        ],
        correct: 0,
        explanation: "Verified data ko priority do.",
        hint: "Focus on Investigate and correct before release to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "When should a case be escalated?",
        options: [
          { key: "A", text: "Never" },
          { key: "B", text: "When it is high-risk or outside the reviewer\u2019s authority" },
          { key: "C", text: "Whenever a heading is bold" },
          { key: "D", text: "Only when the report is short" },
        ],
        correct: 1,
        explanation: "High-risk decisions authorized review maangte hain.",
        hint: "Focus on When it is high-risk or outside the reviewer\u2019s authority to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "What is an audit trail?",
        options: [
          { key: "A", text: "A password list" },
          { key: "B", text: "A hidden shortcut" },
          { key: "C", text: "A record of sources, checks and approvals" },
          { key: "D", text: "A decorative chart" },
        ],
        correct: 2,
        explanation: "Audit trail se decision process trace hota hai.",
        hint: "Focus on A record of sources, checks and approvals to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Human Approval Flow",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["AI prepares a draft", "Analyst verifies content", "Authorized reviewer approves", "Final output is released"],
        shuffled: ["Final output is released", "Authorized reviewer approves", "Analyst verifies content", "AI prepares a draft"],
        expected: ["AI prepares a draft", "Analyst verifies content", "Authorized reviewer approves", "Final output is released"],
        hint: "Final release se pehle review aur approval."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Resolve a Conflict",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Compare AI claim with source", "Investigate mismatch", "Correct the draft", "Document the correction"],
        shuffled: ["Document the correction", "Correct the draft", "Investigate mismatch", "Compare AI claim with source"],
        expected: ["Compare AI claim with source", "Investigate mismatch", "Correct the draft", "Document the correction"],
        hint: "Mismatches ignore nahi karne chahiye."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Create an Audit Trail",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Record input sources", "Record validation checks", "Record reviewer decision", "Store approved version"],
        shuffled: ["Store approved version", "Record reviewer decision", "Record validation checks", "Record input sources"],
        expected: ["Record input sources", "Record validation checks", "Record reviewer decision", "Store approved version"],
        hint: "Traceability accountability ko support karti hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "human-in-the-loop",
        meaning: "A workflow where people review or control importan..."
      },
      {
        id: 2,
        snippet: "Who is accountable for a business report",
        meaning: "The responsible people and organization, not the A..."
      },
      {
        id: 3,
        snippet: "What should be checked before approval",
        meaning: "Claims, calculations, sources, limitations and pol..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Approve an Executive Report",
        scenario: "AI ne quarterly performance summary draft kiya hai.",
        prompt: "Client ko bhejne se pehle kya hona chahiye?",
        expectedResponse: "C \u2014 Important report ko authorized human review chahiye."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is human-in-the-loop?",
        sampleAnswer: "A workflow where people review or control important AI-assisted steps."
      },
      {
        id: 2,
        question: "Who is accountable for a business report?",
        sampleAnswer: "The responsible people and organization, not the AI system alone."
      },
      {
        id: 3,
        question: "What should be checked before approval?",
        sampleAnswer: "Claims, calculations, sources, limitations and policy compliance."
      },
      {
        id: 4,
        question: "Why keep an audit trail?",
        sampleAnswer: "It records how an output was checked and approved."
      },
    ]
  },
  "30.6": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 30,
    moduleName: "Module 30: Responsible and Safe AI Use",
    topicKey: "30.6",
    id: 264,
    topicTitle: "Using AI Within Workplace Policies",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "What should guide AI use with company data?",
        options: [
          { key: "A", text: "An unverified online comment" },
          { key: "B", text: "A model\u2019s confidence" },
          { key: "C", text: "The organization\u2019s approved AI and data policies" },
          { key: "D", text: "Personal convenience alone" },
        ],
        correct: 2,
        explanation: "Workplace policy tool use aur data handling define karti hai.",
        hint: "Focus on The organization\u2019s approved AI and data policies to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "Can an employee use any AI tool for confidential files?",
        options: [
          { key: "A", text: "Yes, if the tool is popular" },
          { key: "B", text: "Yes, if the file is small" },
          { key: "C", text: "Yes, if the prompt is short" },
          { key: "D", text: "No, tool approval and permissions must be checked" },
        ],
        correct: 3,
        explanation: "Popularity approval nahi hai.",
        hint: "Focus on No, tool approval and permissions must be checked to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "What if a policy is unclear?",
        options: [
          { key: "A", text: "Ask the designated security, privacy or management contact" },
          { key: "B", text: "Guess and proceed" },
          { key: "C", text: "Ignore the policy" },
          { key: "D", text: "Publish the file publicly" },
        ],
        correct: 0,
        explanation: "Unclear policy mein clarification lo.",
        hint: "Focus on Ask the designated security, privacy or management contact to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "Why do access permissions matter?",
        options: [
          { key: "A", text: "They remove the need for consent" },
          { key: "B", text: "They limit who can view or process sensitive information" },
          { key: "C", text: "They change chart colors" },
          { key: "D", text: "They speed up typing" },
        ],
        correct: 1,
        explanation: "Least-privilege access sensitive data protect karta hai.",
        hint: "Focus on They limit who can view or process sensitive information to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "What is a sensible practice for AI-generated client content?",
        options: [
          { key: "A", text: "Skip legal or privacy review" },
          { key: "B", text: "Share internal drafts publicly" },
          { key: "C", text: "Follow review, disclosure and approval rules that apply" },
          { key: "D", text: "Hide use regardless of policy" },
        ],
        correct: 2,
        explanation: "Relevant workplace rules follow karna zaroori hai.",
        hint: "Focus on Follow review, disclosure and approval rules that apply to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Policy Check Before AI Use",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Identify data sensitivity", "Confirm approved tool and purpose", "Check sharing permissions", "Proceed only within policy"],
        shuffled: ["Proceed only within policy", "Check sharing permissions", "Confirm approved tool and purpose", "Identify data sensitivity"],
        expected: ["Identify data sensitivity", "Confirm approved tool and purpose", "Check sharing permissions", "Proceed only within policy"],
        hint: "Workplace rules first."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Ask for Clarification",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Notice unclear policy", "Contact authorized team", "Get documented guidance", "Follow approved process"],
        shuffled: ["Follow approved process", "Get documented guidance", "Contact authorized team", "Notice unclear policy"],
        expected: ["Notice unclear policy", "Contact authorized team", "Get documented guidance", "Follow approved process"],
        hint: "Guess karne se better clarification hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Prepare Client Deliverable",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Draft using permitted inputs", "Verify facts and privacy", "Obtain required approval", "Share through approved channel"],
        shuffled: ["Share through approved channel", "Obtain required approval", "Verify facts and privacy", "Draft using permitted inputs"],
        expected: ["Draft using permitted inputs", "Verify facts and privacy", "Obtain required approval", "Share through approved channel"],
        hint: "Client communication controlled workflow se bhejo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "Why do workplace AI policies matter",
        meaning: "They define acceptable tools, data use, permission..."
      },
      {
        id: 2,
        snippet: "What if an AI tool is not approved",
        meaning: "Do not use it for restricted work data; ask for an..."
      },
      {
        id: 3,
        snippet: "What do you do if policy is unclear",
        meaning: "Ask the authorized security, privacy or management..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Choose an Approved Workflow",
        scenario: "Employee ko confidential internal report AI se summarize karna hai.",
        prompt: "First step kya hona chahiye?",
        expectedResponse: "B \u2014 Policy aur permission confirm karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "Why do workplace AI policies matter?",
        sampleAnswer: "They define acceptable tools, data use, permissions and review requirements."
      },
      {
        id: 2,
        question: "What if an AI tool is not approved?",
        sampleAnswer: "Do not use it for restricted work data; ask for an approved alternative."
      },
      {
        id: 3,
        question: "What do you do if policy is unclear?",
        sampleAnswer: "Ask the authorized security, privacy or management contact."
      },
      {
        id: 4,
        question: "What should be checked before sharing AI content externally?",
        sampleAnswer: "Accuracy, confidentiality, required approvals and communication policy."
      },
    ]
  },
  "31.1": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 31,
    moduleName: "Module 31: Prompt Engineering Basics",
    topicKey: "31.1",
    id: 265,
    topicTitle: "What Is a Prompt?",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "What is a prompt in Generative AI?",
        options: [
          { key: "A", text: "A chart color" },
          { key: "B", text: "An input instruction or request given to the model" },
          { key: "C", text: "A computer power cable" },
          { key: "D", text: "A spreadsheet worksheet" },
        ],
        correct: 1,
        explanation: "Prompt AI ko task batata hai.",
        hint: "Focus on An input instruction or request given to the model to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "Which is an example of a prompt?",
        options: [
          { key: "A", text: "A mouse battery" },
          { key: "B", text: "A printed receipt" },
          { key: "C", text: "Explain this Excel formula in simple steps" },
          { key: "D", text: "A blank desktop" },
        ],
        correct: 2,
        explanation: "AI se request karna prompt hai.",
        hint: "Focus on Explain this Excel formula in simple steps to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "What can a prompt include?",
        options: [
          { key: "A", text: "Only one keyword" },
          { key: "B", text: "Only a file extension" },
          { key: "C", text: "Only an emoji" },
          { key: "D", text: "Task, context, constraints and desired format" },
        ],
        correct: 3,
        explanation: "Useful prompt mein task ke saath relevant details ho sakti hain.",
        hint: "Focus on Task, context, constraints and desired format to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "Why does a prompt matter?",
        options: [
          { key: "A", text: "It helps guide the response toward the intended task" },
          { key: "B", text: "It guarantees truth without checking" },
          { key: "C", text: "It repairs hardware" },
          { key: "D", text: "It removes all privacy rules" },
        ],
        correct: 0,
        explanation: "Clear instructions useful output ka chance improve karte hain.",
        hint: "Focus on It helps guide the response toward the intended task to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "Which is a safer beginner prompt?",
        options: [
          { key: "A", text: "Publish unverified private data" },
          { key: "B", text: "Explain SUM in Excel using fictional numbers" },
          { key: "C", text: "Reveal a customer password" },
          { key: "D", text: "Guess my company revenue" },
        ],
        correct: 1,
        explanation: "Generic example ke saath concept safely seekho.",
        hint: "Focus on Explain SUM in Excel using fictional numbers to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Basic Prompt Structure",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["State the task", "Add relevant context", "Specify desired output", "Review the result"],
        shuffled: ["Review the result", "Specify desired output", "Add relevant context", "State the task"],
        expected: ["State the task", "Add relevant context", "Specify desired output", "Review the result"],
        hint: "Task aur format clear rakho."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Prompt for Learning",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Name the concept", "Ask for a beginner explanation", "Request one example", "Check understanding"],
        shuffled: ["Check understanding", "Request one example", "Ask for a beginner explanation", "Name the concept"],
        expected: ["Name the concept", "Ask for a beginner explanation", "Request one example", "Check understanding"],
        hint: "Learning prompt ko simple rakho."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Use a Prompt Responsibly",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Check data sensitivity", "Write a permitted request", "Review the response", "Correct errors before use"],
        shuffled: ["Correct errors before use", "Review the response", "Write a permitted request", "Check data sensitivity"],
        expected: ["Check data sensitivity", "Write a permitted request", "Review the response", "Correct errors before use"],
        hint: "Prompt likhne se pehle privacy check karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "a prompt",
        meaning: "A prompt is an instruction or input that guides an..."
      },
      {
        id: 2,
        snippet: "What are common parts of a prompt",
        meaning: "Task, context, constraints and output format."
      },
      {
        id: 3,
        snippet: "Why are prompts useful",
        meaning: "They help specify what the user wants the model to..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Write a Beginner Prompt",
        scenario: "Student ko Excel SUM function samajhna hai.",
        prompt: "Best prompt kaunsa hai?",
        expectedResponse: "C \u2014 Specific learning request better guidance deta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is a prompt?",
        sampleAnswer: "A prompt is an instruction or input that guides an AI model\u2019s response."
      },
      {
        id: 2,
        question: "What are common parts of a prompt?",
        sampleAnswer: "Task, context, constraints and output format."
      },
      {
        id: 3,
        question: "Why are prompts useful?",
        sampleAnswer: "They help specify what the user wants the model to do."
      },
      {
        id: 4,
        question: "Does a good prompt guarantee a correct answer?",
        sampleAnswer: "No. Important outputs still need verification."
      },
    ]
  },
  "31.2": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 31,
    moduleName: "Module 31: Prompt Engineering Basics",
    topicKey: "31.2",
    id: 266,
    topicTitle: "Writing Clear and Specific Prompts",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "Which prompt is more specific?",
        options: [
          { key: "A", text: "Do something useful" },
          { key: "B", text: "Summarize these notes in three bullets for a manager" },
          { key: "C", text: "Summarize stuff" },
          { key: "D", text: "Make it good" },
        ],
        correct: 1,
        explanation: "Audience aur output length clear hai.",
        hint: "Focus on Summarize these notes in three bullets for a manager to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "Why specify the audience in a prompt?",
        options: [
          { key: "A", text: "It changes the dataset automatically" },
          { key: "B", text: "It removes privacy concerns" },
          { key: "C", text: "It helps tailor terminology and detail level" },
          { key: "D", text: "It guarantees factual accuracy" },
        ],
        correct: 2,
        explanation: "Manager aur beginner ke liye explanations alag ho sakti hain.",
        hint: "Focus on It helps tailor terminology and detail level to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "Which detail improves a SQL explanation request?",
        options: [
          { key: "A", text: "Adding unrelated emojis" },
          { key: "B", text: "Asking for any answer" },
          { key: "C", text: "Omitting all column names" },
          { key: "D", text: "Mentioning the query and expected business question" },
        ],
        correct: 3,
        explanation: "Relevant query context response improve karta hai.",
        hint: "Focus on Mentioning the query and expected business question to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "What is a vague prompt?",
        options: [
          { key: "A", text: "Analyze this without any goal or context" },
          { key: "B", text: "Find the top five products by units sold in this table" },
          { key: "C", text: "Explain this formula to a beginner" },
          { key: "D", text: "List assumptions before answering" },
        ],
        correct: 0,
        explanation: "Vague prompt mein task unclear hota hai.",
        hint: "Focus on Analyze this without any goal or context to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "What should you do if AI misunderstands the task?",
        options: [
          { key: "A", text: "Stop checking outputs" },
          { key: "B", text: "Rewrite the prompt with clearer requirements" },
          { key: "C", text: "Assume the wrong answer is correct" },
          { key: "D", text: "Remove all details" },
        ],
        correct: 1,
        explanation: "Clearer prompt se misunderstanding reduce hoti hai.",
        hint: "Focus on Rewrite the prompt with clearer requirements to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Improve a Vague Request",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Identify unclear goal", "Specify exact task", "Add audience and constraints", "State output format"],
        shuffled: ["State output format", "Add audience and constraints", "Specify exact task", "Identify unclear goal"],
        expected: ["Identify unclear goal", "Specify exact task", "Add audience and constraints", "State output format"],
        hint: "Vague request ko actionable banao."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Write a Summary Prompt",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Name source material", "Set target audience", "Set three-bullet limit", "Ask for source-grounded summary"],
        shuffled: ["Ask for source-grounded summary", "Set three-bullet limit", "Set target audience", "Name source material"],
        expected: ["Name source material", "Set target audience", "Set three-bullet limit", "Ask for source-grounded summary"],
        hint: "Summary scope aur length defined hain."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Refine After Feedback",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Read AI response", "Find missing requirement", "Update prompt precisely", "Recheck revised response"],
        shuffled: ["Recheck revised response", "Update prompt precisely", "Find missing requirement", "Read AI response"],
        expected: ["Read AI response", "Find missing requirement", "Update prompt precisely", "Recheck revised response"],
        hint: "Iteration se prompt improve hota hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "What makes a prompt clear",
        meaning: "A specific task, relevant context and a defined ou..."
      },
      {
        id: 2,
        snippet: "Why mention the audience",
        meaning: "It helps the model choose suitable language and de..."
      },
      {
        id: 3,
        snippet: "How do you fix an unclear prompt",
        meaning: "Add the missing goal, constraints and expected for..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Choose a Clear Prompt",
        scenario: "Manager ko monthly sales ka short summary chahiye.",
        prompt: "Kaunsa prompt best hai?",
        expectedResponse: "B \u2014 Source, task aur format clear hone chahiye."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What makes a prompt clear?",
        sampleAnswer: "A specific task, relevant context and a defined output."
      },
      {
        id: 2,
        question: "Why mention the audience?",
        sampleAnswer: "It helps the model choose suitable language and detail."
      },
      {
        id: 3,
        question: "How do you fix an unclear prompt?",
        sampleAnswer: "Add the missing goal, constraints and expected format."
      },
      {
        id: 4,
        question: "Can clear wording replace fact-checking?",
        sampleAnswer: "No. Clear prompts improve guidance but not guaranteed correctness."
      },
    ]
  },
  "31.3": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 31,
    moduleName: "Module 31: Prompt Engineering Basics",
    topicKey: "31.3",
    id: 267,
    topicTitle: "Adding Context and Constraints",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "What is context in a prompt?",
        options: [
          { key: "A", text: "An unrelated joke" },
          { key: "B", text: "Background information needed to complete the task" },
          { key: "C", text: "A monitor brand" },
          { key: "D", text: "A keyboard shortcut" },
        ],
        correct: 1,
        explanation: "Relevant background model ko task samajhne mein help karta hai.",
        hint: "Focus on Background information needed to complete the task to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "What is a constraint?",
        options: [
          { key: "A", text: "A new computer part" },
          { key: "B", text: "A chart legend" },
          { key: "C", text: "A requirement or limit such as length, scope or format" },
          { key: "D", text: "A hidden data leak" },
        ],
        correct: 2,
        explanation: "Constraints output boundaries define karte hain.",
        hint: "Focus on A requirement or limit such as length, scope or format to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "Which prompt includes a useful constraint?",
        options: [
          { key: "A", text: "Explain anything" },
          { key: "B", text: "Use every possible dataset" },
          { key: "C", text: "Ignore all sources" },
          { key: "D", text: "Explain this result in under 80 words without inventing numbers" },
        ],
        correct: 3,
        explanation: "Word limit aur no-invented-numbers useful constraints hain.",
        hint: "Focus on Explain this result in under 80 words without inventing numbers to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "What should you do when the dataset lacks a required field?",
        options: [
          { key: "A", text: "Ask AI to state the limitation instead of guessing" },
          { key: "B", text: "Ask it to invent values" },
          { key: "C", text: "Hide the missing field" },
          { key: "D", text: "Use a random field" },
        ],
        correct: 0,
        explanation: "Missing data ko explicitly acknowledge karna chahiye.",
        hint: "Focus on Ask AI to state the limitation instead of guessing to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "Which context is safer for public AI practice?",
        options: [
          { key: "A", text: "Private API tokens" },
          { key: "B", text: "Synthetic sales data with fictional customer names" },
          { key: "C", text: "Live customer passwords" },
          { key: "D", text: "Unapproved payroll records" },
        ],
        correct: 1,
        explanation: "Synthetic data se concepts safely practice ho sakte hain.",
        hint: "Focus on Synthetic sales data with fictional customer names to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Contextual Prompt",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Describe business question", "Provide permitted schema or data", "Set constraints", "Specify how to handle missing information"],
        shuffled: ["Specify how to handle missing information", "Set constraints", "Provide permitted schema or data", "Describe business question"],
        expected: ["Describe business question", "Provide permitted schema or data", "Set constraints", "Specify how to handle missing information"],
        hint: "Context aur limitations explicit rakho."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Set a Boundary",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Define intended audience", "Set word limit", "Require source-grounded facts", "Request a concise answer"],
        shuffled: ["Request a concise answer", "Require source-grounded facts", "Set word limit", "Define intended audience"],
        expected: ["Define intended audience", "Set word limit", "Require source-grounded facts", "Request a concise answer"],
        hint: "Constraints clarity badhate hain."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Handle Missing Data",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Identify absent information", "Ask AI to flag the gap", "Request clarification or safe assumptions", "Verify before proceeding"],
        shuffled: ["Verify before proceeding", "Request clarification or safe assumptions", "Ask AI to flag the gap", "Identify absent information"],
        expected: ["Identify absent information", "Ask AI to flag the gap", "Request clarification or safe assumptions", "Verify before proceeding"],
        hint: "Missing data invent nahi karna."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "prompt context",
        meaning: "Relevant background, data definitions or business ..."
      },
      {
        id: 2,
        snippet: "a prompt constraint",
        meaning: "A boundary such as output length, scope or allowed..."
      },
      {
        id: 3,
        snippet: "How should a prompt handle missing information",
        meaning: "Ask the model to identify missing information inst..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Add a Useful Constraint",
        scenario: "AI se sales summary chahiye, lekin table mein profit column nahi hai.",
        prompt: "Kaunsa instruction best hai?",
        expectedResponse: "A \u2014 Missing metric ko clearly note karna responsible approach hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is prompt context?",
        sampleAnswer: "Relevant background, data definitions or business information supplied with the task."
      },
      {
        id: 2,
        question: "What is a prompt constraint?",
        sampleAnswer: "A boundary such as output length, scope or allowed sources."
      },
      {
        id: 3,
        question: "How should a prompt handle missing information?",
        sampleAnswer: "Ask the model to identify missing information instead of inventing it."
      },
      {
        id: 4,
        question: "Why use synthetic data in examples?",
        sampleAnswer: "It allows learning without exposing real confidential information."
      },
    ]
  },
  "31.4": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 31,
    moduleName: "Module 31: Prompt Engineering Basics",
    topicKey: "31.4",
    id: 268,
    topicTitle: "Specifying Output Formats",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "Which instruction asks for a table?",
        options: [
          { key: "A", text: "Do not use any structure" },
          { key: "B", text: "Return a table with Metric and Value columns" },
          { key: "C", text: "Make it interesting" },
          { key: "D", text: "Write whatever you want" },
        ],
        correct: 1,
        explanation: "Column names desired structure batate hain.",
        hint: "Focus on Return a table with Metric and Value columns to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "What does an output format define?",
        options: [
          { key: "A", text: "The computer processor" },
          { key: "B", text: "The database password" },
          { key: "C", text: "How the answer should be organized" },
          { key: "D", text: "Whether every claim is true" },
        ],
        correct: 2,
        explanation: "Format structure batata hai, correctness nahi.",
        hint: "Focus on How the answer should be organized to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "Which format is suitable for a short executive overview?",
        options: [
          { key: "A", text: "An unstructured 50-page response" },
          { key: "B", text: "Raw machine logs only" },
          { key: "C", text: "A random word list" },
          { key: "D", text: "Three concise bullet points" },
        ],
        correct: 3,
        explanation: "Executive audience ke liye concise bullets useful hain.",
        hint: "Focus on Three concise bullet points to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "When requesting JSON, what is helpful?",
        options: [
          { key: "A", text: "Specify required keys and expected value types" },
          { key: "B", text: "Say only make JSON somehow" },
          { key: "C", text: "Hide the schema" },
          { key: "D", text: "Mix JSON with unexplained prose" },
        ],
        correct: 0,
        explanation: "Schema clear ho to output easier validate hota hai.",
        hint: "Focus on Specify required keys and expected value types to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "What must still be checked after requesting a strict format?",
        options: [
          { key: "A", text: "Nothing" },
          { key: "B", text: "Both the structure and factual content" },
          { key: "C", text: "Only the color" },
          { key: "D", text: "Only the title length" },
        ],
        correct: 1,
        explanation: "Correct format bhi wrong facts contain kar sakta hai.",
        hint: "Focus on Both the structure and factual content to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Table Output Prompt",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["State the task", "Name required columns", "Request table format", "Validate values and columns"],
        shuffled: ["Validate values and columns", "Request table format", "Name required columns", "State the task"],
        expected: ["State the task", "Name required columns", "Request table format", "Validate values and columns"],
        hint: "Table schema clear rakho."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Structured JSON Prompt",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Define required keys", "Define value types", "Request JSON-only response", "Parse and validate output"],
        shuffled: ["Parse and validate output", "Request JSON-only response", "Define value types", "Define required keys"],
        expected: ["Define required keys", "Define value types", "Request JSON-only response", "Parse and validate output"],
        hint: "JSON ko parser se validate karna useful hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Executive Summary Format",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Define audience", "Request three bullets", "Require verified figures", "Review final summary"],
        shuffled: ["Review final summary", "Require verified figures", "Request three bullets", "Define audience"],
        expected: ["Define audience", "Request three bullets", "Require verified figures", "Review final summary"],
        hint: "Format aur accuracy separate checks hain."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "Why specify output format",
        meaning: "It makes the response easier to read, reuse or val..."
      },
      {
        id: 2,
        snippet: "Give two output formats.",
        meaning: "A Markdown table and JSON are two possible formats..."
      },
      {
        id: 3,
        snippet: "What should a JSON prompt include",
        meaning: "Required keys, expected types and any structural c..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Request a Structured Result",
        scenario: "Analyst ko product aur sales ka simple two-column result chahiye.",
        prompt: "Best instruction kaunsa hai?",
        expectedResponse: "C \u2014 Required columns specify karne se structured output milega."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "Why specify output format?",
        sampleAnswer: "It makes the response easier to read, reuse or validate."
      },
      {
        id: 2,
        question: "Give two output formats.",
        sampleAnswer: "A Markdown table and JSON are two possible formats."
      },
      {
        id: 3,
        question: "What should a JSON prompt include?",
        sampleAnswer: "Required keys, expected types and any structural constraints."
      },
      {
        id: 4,
        question: "Does correct formatting prove accuracy?",
        sampleAnswer: "No. The data and claims still need verification."
      },
    ]
  },
  "31.5": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 31,
    moduleName: "Module 31: Prompt Engineering Basics",
    topicKey: "31.5",
    id: 269,
    topicTitle: "Few-Shot Examples",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "What is few-shot prompting?",
        options: [
          { key: "A", text: "Sharing private data by default" },
          { key: "B", text: "Providing a small number of examples of the desired task" },
          { key: "C", text: "Giving no instruction at all" },
          { key: "D", text: "Training a new model from scratch" },
        ],
        correct: 1,
        explanation: "Few-shot examples expected pattern demonstrate karte hain.",
        hint: "Focus on Providing a small number of examples of the desired task to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "Why include examples in a prompt?",
        options: [
          { key: "A", text: "They remove all bias" },
          { key: "B", text: "They automatically verify facts" },
          { key: "C", text: "They show the desired style or input-output mapping" },
          { key: "D", text: "They guarantee perfect reasoning" },
        ],
        correct: 2,
        explanation: "Examples model ko format aur style samjha sakte hain.",
        hint: "Focus on They show the desired style or input-output mapping to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "Which example is appropriate for a sentiment-label task?",
        options: [
          { key: "A", text: "Input: Great service \u2192 Output: 2027 revenue" },
          { key: "B", text: "Input: Great service \u2192 Output: SQL password" },
          { key: "C", text: "Input: Great service \u2192 Output: Chart type only" },
          { key: "D", text: "Input: Great service \u2192 Output: Positive" },
        ],
        correct: 3,
        explanation: "Labeling example task ke pattern ko demonstrate karta hai.",
        hint: "Focus on Input: Great service \u2192 Output: Positive to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "What is a risk of poor few-shot examples?",
        options: [
          { key: "A", text: "They can teach an inconsistent or wrong pattern" },
          { key: "B", text: "They always improve accuracy" },
          { key: "C", text: "They automatically correct missing facts" },
          { key: "D", text: "They replace validation" },
        ],
        correct: 0,
        explanation: "Wrong examples output quality ko harm kar sakte hain.",
        hint: "Focus on They can teach an inconsistent or wrong pattern to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "How should examples be chosen for workplace use?",
        options: [
          { key: "A", text: "Use only incorrect labels" },
          { key: "B", text: "Use representative, permitted, non-sensitive examples" },
          { key: "C", text: "Use confidential data without approval" },
          { key: "D", text: "Use random unrelated cases" },
        ],
        correct: 1,
        explanation: "Relevant aur privacy-safe examples choose karo.",
        hint: "Focus on Use representative, permitted, non-sensitive examples to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Few-Shot Prompt",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Define the task", "Give two correct examples", "Provide a new input", "Check model output"],
        shuffled: ["Check model output", "Provide a new input", "Give two correct examples", "Define the task"],
        expected: ["Define the task", "Give two correct examples", "Provide a new input", "Check model output"],
        hint: "Examples desired mapping demonstrate karte hain."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Check Example Quality",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Review example labels", "Ensure examples match task", "Remove sensitive details", "Use consistent formatting"],
        shuffled: ["Use consistent formatting", "Remove sensitive details", "Ensure examples match task", "Review example labels"],
        expected: ["Review example labels", "Ensure examples match task", "Remove sensitive details", "Use consistent formatting"],
        hint: "Bad examples bad guidance de sakte hain."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Improve a Classification Prompt",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Write label definitions", "Show labeled examples", "Ask for a new label", "Verify ambiguous cases"],
        shuffled: ["Verify ambiguous cases", "Ask for a new label", "Show labeled examples", "Write label definitions"],
        expected: ["Write label definitions", "Show labeled examples", "Ask for a new label", "Verify ambiguous cases"],
        hint: "Classification boundaries clear honi chahiye."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "few-shot prompting",
        meaning: "Providing a few examples to demonstrate the desire..."
      },
      {
        id: 2,
        snippet: "Why are examples useful",
        meaning: "They help clarify patterns that instructions alone..."
      },
      {
        id: 3,
        snippet: "Can bad examples harm output quality",
        meaning: "Yes. Inconsistent or incorrect examples can misgui..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Choose a Good Example",
        scenario: "AI ko customer comments Positive/Negative label karna hai.",
        prompt: "Kaunsa example useful hai?",
        expectedResponse: "B \u2014 Few-shot example input-output mapping dikhata hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is few-shot prompting?",
        sampleAnswer: "Providing a few examples to demonstrate the desired behavior or format."
      },
      {
        id: 2,
        question: "Why are examples useful?",
        sampleAnswer: "They help clarify patterns that instructions alone may leave ambiguous."
      },
      {
        id: 3,
        question: "Can bad examples harm output quality?",
        sampleAnswer: "Yes. Inconsistent or incorrect examples can misguide the response."
      },
      {
        id: 4,
        question: "How do you protect privacy in few-shot prompts?",
        sampleAnswer: "Use approved or synthetic examples without confidential information."
      },
    ]
  },
  "31.6": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 31,
    moduleName: "Module 31: Prompt Engineering Basics",
    topicKey: "31.6",
    id: 270,
    topicTitle: "Iterating and Improving Prompts",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "What does prompt iteration mean?",
        options: [
          { key: "A", text: "Changing only the text color" },
          { key: "B", text: "Revising a prompt based on observed results" },
          { key: "C", text: "Repeating an unchanged prompt forever" },
          { key: "D", text: "Skipping output review" },
        ],
        correct: 1,
        explanation: "Iteration feedback se prompt improve karta hai.",
        hint: "Focus on Revising a prompt based on observed results to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "What should you inspect after the first AI response?",
        options: [
          { key: "A", text: "Only whether it used emojis" },
          { key: "B", text: "Only whether it sounded confident" },
          { key: "C", text: "Whether it met the task, constraints and accuracy needs" },
          { key: "D", text: "Only whether it was long" },
        ],
        correct: 2,
        explanation: "Quality ko task ke against check karo.",
        hint: "Focus on Whether it met the task, constraints and accuracy needs to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "If an AI summary is too long, what is a useful revision?",
        options: [
          { key: "A", text: "Ask for more unrelated detail" },
          { key: "B", text: "Remove the source" },
          { key: "C", text: "Ask for random facts" },
          { key: "D", text: "Add a clear word or bullet limit" },
        ],
        correct: 3,
        explanation: "Length constraint explicit karo.",
        hint: "Focus on Add a clear word or bullet limit to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "If an AI answer invents missing numbers, what should you add?",
        options: [
          { key: "A", text: "Use only supplied figures; mark missing values as unavailable" },
          { key: "B", text: "Guess any missing number" },
          { key: "C", text: "Avoid citing the table" },
          { key: "D", text: "Make the tone stronger" },
        ],
        correct: 0,
        explanation: "No-invention instruction plus validation useful hai.",
        hint: "Focus on Use only supplied figures; mark missing values as unavailable to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "How do you know a revised prompt improved?",
        options: [
          { key: "A", text: "Ignore original requirements" },
          { key: "B", text: "Compare outputs against a consistent quality checklist" },
          { key: "C", text: "Assume later versions are always better" },
          { key: "D", text: "Count only characters" },
        ],
        correct: 1,
        explanation: "Same criteria se compare karna chahiye.",
        hint: "Focus on Compare outputs against a consistent quality checklist to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Prompt Iteration Loop",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Write initial prompt", "Review first output", "Identify one concrete issue", "Revise and retest"],
        shuffled: ["Revise and retest", "Identify one concrete issue", "Review first output", "Write initial prompt"],
        expected: ["Write initial prompt", "Review first output", "Identify one concrete issue", "Revise and retest"],
        hint: "Revision specific problem target kare."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Fix Excess Length",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Notice verbose answer", "Add concise output limit", "Generate revised answer", "Check completeness and length"],
        shuffled: ["Check completeness and length", "Generate revised answer", "Add concise output limit", "Notice verbose answer"],
        expected: ["Notice verbose answer", "Add concise output limit", "Generate revised answer", "Check completeness and length"],
        hint: "Shorter output mein important facts bhi preserve hone chahiye."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Fix Missing Evidence",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Spot unsupported claim", "Add source-only constraint", "Request revised response", "Verify each claim"],
        shuffled: ["Verify each claim", "Request revised response", "Add source-only constraint", "Spot unsupported claim"],
        expected: ["Spot unsupported claim", "Add source-only constraint", "Request revised response", "Verify each claim"],
        hint: "Source-only instruction verification ka substitute nahi hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "prompt iteration",
        meaning: "Improving a prompt through testing, feedback and r..."
      },
      {
        id: 2,
        snippet: "a good reason to revise a prompt",
        meaning: "The output misses a requirement, is unclear or con..."
      },
      {
        id: 3,
        snippet: "How can you reduce answer length",
        meaning: "Specify a clear word count or number of bullet poi..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Improve an Overlong Response",
        scenario: "AI ne manager ke liye 12 paragraphs ka summary diya.",
        prompt: "Best next step kya hai?",
        expectedResponse: "A \u2014 Output length ko explicitly constrain karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is prompt iteration?",
        sampleAnswer: "Improving a prompt through testing, feedback and revision."
      },
      {
        id: 2,
        question: "What is a good reason to revise a prompt?",
        sampleAnswer: "The output misses a requirement, is unclear or contains unsupported content."
      },
      {
        id: 3,
        question: "How can you reduce answer length?",
        sampleAnswer: "Specify a clear word count or number of bullet points."
      },
      {
        id: 4,
        question: "How do you evaluate a revision?",
        sampleAnswer: "Compare it with the original using the same quality criteria."
      },
    ]
  },
  "31.7": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 31,
    moduleName: "Module 31: Prompt Engineering Basics",
    topicKey: "31.7",
    id: 271,
    topicTitle: "Evaluating Prompt Quality",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "Which is a useful prompt-quality criterion?",
        options: [
          { key: "A", text: "Only model confidence" },
          { key: "B", text: "Task completion and factual accuracy" },
          { key: "C", text: "Only response length" },
          { key: "D", text: "Only number of adjectives" },
        ],
        correct: 1,
        explanation: "Quality ka main goal correct aur useful result hai.",
        hint: "Focus on Task completion and factual accuracy to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "What does completeness mean in prompt evaluation?",
        options: [
          { key: "A", text: "Every sentence is bold" },
          { key: "B", text: "All numbers are rounded" },
          { key: "C", text: "All required parts of the task are addressed" },
          { key: "D", text: "The answer has many pages" },
        ],
        correct: 2,
        explanation: "Completeness required items cover karna hai.",
        hint: "Focus on All required parts of the task are addressed to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "What should be checked for a JSON output?",
        options: [
          { key: "A", text: "Only font size" },
          { key: "B", text: "Only the title" },
          { key: "C", text: "Only number of emojis" },
          { key: "D", text: "Schema validity and correct content" },
        ],
        correct: 3,
        explanation: "Machine-readable format parse hona chahiye.",
        hint: "Focus on Schema validity and correct content to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "What is a fair way to compare two prompts?",
        options: [
          { key: "A", text: "Use the same test cases and evaluation criteria" },
          { key: "B", text: "Use unrelated questions" },
          { key: "C", text: "Change the source data each time" },
          { key: "D", text: "Judge only tone" },
        ],
        correct: 0,
        explanation: "Consistent test cases se comparison meaningful hai.",
        hint: "Focus on Use the same test cases and evaluation criteria to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "Why include privacy in prompt evaluation?",
        options: [
          { key: "A", text: "Formatting removes confidentiality risk" },
          { key: "B", text: "A useful output is not acceptable if it exposes restricted data" },
          { key: "C", text: "Privacy does not matter for prompts" },
          { key: "D", text: "More data sharing always improves quality" },
        ],
        correct: 1,
        explanation: "Safety bhi quality ka part hai.",
        hint: "Focus on A useful output is not acceptable if it exposes restricted data to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Prompt Quality Check",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Test task completion", "Check factual correctness", "Validate format and constraints", "Check privacy and safety"],
        shuffled: ["Check privacy and safety", "Validate format and constraints", "Check factual correctness", "Test task completion"],
        expected: ["Test task completion", "Check factual correctness", "Validate format and constraints", "Check privacy and safety"],
        hint: "Multiple criteria se prompt evaluate karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Compare Prompt Versions",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Choose same test inputs", "Run both prompts", "Score with same checklist", "Select and refine better version"],
        shuffled: ["Select and refine better version", "Score with same checklist", "Run both prompts", "Choose same test inputs"],
        expected: ["Choose same test inputs", "Run both prompts", "Score with same checklist", "Select and refine better version"],
        hint: "Fair comparison consistent criteria se hota hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Validate Structured Output",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Check required fields", "Parse structure", "Verify values", "Record failures for revision"],
        shuffled: ["Record failures for revision", "Verify values", "Parse structure", "Check required fields"],
        expected: ["Check required fields", "Parse structure", "Verify values", "Record failures for revision"],
        hint: "Schema + content dono validate karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "What makes a prompt high quality",
        meaning: "It reliably produces relevant, accurate, complete ..."
      },
      {
        id: 2,
        snippet: "How do you compare prompt versions",
        meaning: "Test them on the same cases using a consistent che..."
      },
      {
        id: 3,
        snippet: "Why check output structure",
        meaning: "Structured output must match the required schema o..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Evaluate Two Prompts",
        scenario: "Ek prompt 3 verified bullets deta hai; doosra 10 bullets mein invented revenue add karta hai.",
        prompt: "Kaunsa better hai?",
        expectedResponse: "C \u2014 Accuracy aur task fit priority hain."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What makes a prompt high quality?",
        sampleAnswer: "It reliably produces relevant, accurate, complete and safe outputs in the requested format."
      },
      {
        id: 2,
        question: "How do you compare prompt versions?",
        sampleAnswer: "Test them on the same cases using a consistent checklist."
      },
      {
        id: 3,
        question: "Why check output structure?",
        sampleAnswer: "Structured output must match the required schema or format."
      },
      {
        id: 4,
        question: "Can a polished response still fail evaluation?",
        sampleAnswer: "Yes. It may be inaccurate, incomplete or unsafe."
      },
    ]
  },
  "32.1": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 32,
    moduleName: "Module 32: AI for Excel, SQL and Python",
    topicKey: "32.1",
    id: 272,
    topicTitle: "Ask AI to Explain Excel Formulas",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "Which prompt best asks for a formula explanation?",
        options: [
          { key: "A", text: "Explain =SUM(B2:B6) step by step for a beginner" },
          { key: "B", text: "Write anything about Excel" },
          { key: "C", text: "Guess my workbook totals" },
          { key: "D", text: "Delete my spreadsheet" },
        ],
        correct: 0,
        explanation: "Exact formula dena useful hai.",
        hint: "Focus on Explain =SUM(B2:B6) step by step for a beginner to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "What does =SUM(B2:B6) calculate?",
        options: [
          { key: "A", text: "The largest value only" },
          { key: "B", text: "The sum of numeric values in cells B2 through B6" },
          { key: "C", text: "The average of B2 and B6 only" },
          { key: "D", text: "The count of blank cells" },
        ],
        correct: 1,
        explanation: "SUM range ke numeric values add karta hai.",
        hint: "Focus on The sum of numeric values in cells B2 through B6 to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "What should AI clarify when explaining a formula?",
        options: [
          { key: "A", text: "Only the user name" },
          { key: "B", text: "Only the file size" },
          { key: "C", text: "Function purpose and referenced cells" },
          { key: "D", text: "Only the workbook color" },
        ],
        correct: 2,
        explanation: "Cell references explain karna essential hai.",
        hint: "Focus on Function purpose and referenced cells to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "Can AI explain a formula correctly without seeing all workbook context?",
        options: [
          { key: "A", text: "It always knows every hidden sheet" },
          { key: "B", text: "It can see every private file automatically" },
          { key: "C", text: "It never needs any context" },
          { key: "D", text: "It can explain syntax, but workbook-specific meaning may need context" },
        ],
        correct: 3,
        explanation: "Formula meaning aur business interpretation alag hain.",
        hint: "Focus on It can explain syntax, but workbook-specific meaning may need context to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "What should a student do after an AI explanation?",
        options: [
          { key: "A", text: "Test the formula on known sample values" },
          { key: "B", text: "Assume all results are correct" },
          { key: "C", text: "Change random cells" },
          { key: "D", text: "Publish without checking" },
        ],
        correct: 0,
        explanation: "Sample calculation understanding verify karta hai.",
        hint: "Focus on Test the formula on known sample values to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Explain a Formula",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Share permitted formula text", "Ask for step-by-step meaning", "Identify referenced cells", "Check with sample values"],
        shuffled: ["Check with sample values", "Identify referenced cells", "Ask for step-by-step meaning", "Share permitted formula text"],
        expected: ["Share permitted formula text", "Ask for step-by-step meaning", "Identify referenced cells", "Check with sample values"],
        hint: "Explanation ko example se verify karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Read SUM Range",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Identify SUM function", "Identify B2:B6 range", "Add numeric values in range", "Compare expected result"],
        shuffled: ["Compare expected result", "Add numeric values in range", "Identify B2:B6 range", "Identify SUM function"],
        expected: ["Identify SUM function", "Identify B2:B6 range", "Add numeric values in range", "Compare expected result"],
        hint: "Range ke cells ka role samjho."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Improve a Formula Prompt",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Include exact formula", "Describe column meaning", "Request one worked example", "Verify example result"],
        shuffled: ["Verify example result", "Request one worked example", "Describe column meaning", "Include exact formula"],
        expected: ["Include exact formula", "Describe column meaning", "Request one worked example", "Verify example result"],
        hint: "Relevant context explanation ko practical banata hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How can AI help with Excel formulas",
        meaning: "It can explain functions, references and example c..."
      },
      {
        id: 2,
        snippet: "What does SUM do",
        meaning: "SUM adds numeric values in the specified cells or ..."
      },
      {
        id: 3,
        snippet: "What context improves a formula explanation",
        meaning: "The exact formula and the meaning of referenced co..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Explain a Sales Formula",
        scenario: "Analyst ko =SUM(C2:C5) samajhna hai.",
        prompt: "Best prompt kaunsa hai?",
        expectedResponse: "B \u2014 Exact formula aur example se concept clear hota hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How can AI help with Excel formulas?",
        sampleAnswer: "It can explain functions, references and example calculations."
      },
      {
        id: 2,
        question: "What does SUM do?",
        sampleAnswer: "SUM adds numeric values in the specified cells or range."
      },
      {
        id: 3,
        question: "What context improves a formula explanation?",
        sampleAnswer: "The exact formula and the meaning of referenced columns."
      },
      {
        id: 4,
        question: "Why test the explanation?",
        sampleAnswer: "To confirm that the described behavior matches Excel results."
      },
    ]
  },
  "32.2": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 32,
    moduleName: "Module 32: AI for Excel, SQL and Python",
    topicKey: "32.2",
    id: 273,
    topicTitle: "Generate and Validate Excel Formulas",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "Which formula adds B2 and C2 in Excel?",
        options: [
          { key: "A", text: "=B2+C2" },
          { key: "B", text: "=B2 C2" },
          { key: "C", text: "=SUM(B2,C2" },
          { key: "D", text: "=B2==C2" },
        ],
        correct: 0,
        explanation: "Excel formula = se start hota hai; + addition karta hai.",
        hint: "Focus on =B2+C2 to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "What should you provide when requesting an Excel formula?",
        options: [
          { key: "A", text: "Unrelated personal data" },
          { key: "B", text: "Column meanings and the required calculation" },
          { key: "C", text: "Only a greeting" },
          { key: "D", text: "Only the workbook theme" },
        ],
        correct: 1,
        explanation: "Column mapping clear hone se formula useful banta hai.",
        hint: "Focus on Column meanings and the required calculation to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "Why test an AI-generated Excel formula?",
        options: [
          { key: "A", text: "Testing is only for Python" },
          { key: "B", text: "Excel always fixes logic automatically" },
          { key: "C", text: "It may reference the wrong cells or calculate the wrong thing" },
          { key: "D", text: "AI formulas cannot fail" },
        ],
        correct: 2,
        explanation: "Wrong cell reference wrong business result de sakta hai.",
        hint: "Focus on It may reference the wrong cells or calculate the wrong thing to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "Which formula counts numeric values in A2:A10?",
        options: [
          { key: "A", text: "=SUMTEXT(A2:A10)" },
          { key: "B", text: "=NUMBER(A2:A10)" },
          { key: "C", text: "=COUNTBLANKS(A2:A10)" },
          { key: "D", text: "=COUNT(A2:A10)" },
        ],
        correct: 3,
        explanation: "COUNT numeric cells count karta hai.",
        hint: "Focus on =COUNT(A2:A10) to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "What is a good formula validation method?",
        options: [
          { key: "A", text: "Compare results with a manually calculated sample" },
          { key: "B", text: "Test only on an empty workbook" },
          { key: "C", text: "Check only spelling" },
          { key: "D", text: "Trust any output that has =" },
        ],
        correct: 0,
        explanation: "Known sample expected output compare karo.",
        hint: "Focus on Compare results with a manually calculated sample to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 AI Formula Workflow",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Describe input columns", "Specify required calculation", "Request a formula draft", "Test with known rows"],
        shuffled: ["Test with known rows", "Request a formula draft", "Specify required calculation", "Describe input columns"],
        expected: ["Describe input columns", "Specify required calculation", "Request a formula draft", "Test with known rows"],
        hint: "Formula test ke baad reuse karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Validate Addition",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Set B2 = 10", "Set C2 = 5", "Apply =B2+C2", "Confirm result equals 15"],
        shuffled: ["Confirm result equals 15", "Apply =B2+C2", "Set C2 = 5", "Set B2 = 10"],
        expected: ["Set B2 = 10", "Set C2 = 5", "Apply =B2+C2", "Confirm result equals 15"],
        hint: "Known result formula validate karta hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Handle a Wrong Formula",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Notice incorrect total", "Inspect referenced cells", "Correct formula", "Retest sample rows"],
        shuffled: ["Retest sample rows", "Correct formula", "Inspect referenced cells", "Notice incorrect total"],
        expected: ["Notice incorrect total", "Inspect referenced cells", "Correct formula", "Retest sample rows"],
        hint: "Wrong reference ko fix karke retest karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How can AI assist with Excel formula generation",
        meaning: "It can draft a formula based on column definitions..."
      },
      {
        id: 2,
        snippet: "Why do cell references matter",
        meaning: "Incorrect references can produce wrong calculation..."
      },
      {
        id: 3,
        snippet: "How do you validate a suggested formula",
        meaning: "Test it with sample values whose expected results ..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Validate a Discount Formula",
        scenario: "AI ne total =B2*C2 suggest kiya; B2 quantity 3 aur C2 price 20 hai.",
        prompt: "Correct expected result kya hai?",
        expectedResponse: "A \u2014 Quantity \u00d7 Price = 60; sample result se formula validate karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How can AI assist with Excel formula generation?",
        sampleAnswer: "It can draft a formula based on column definitions and calculation requirements."
      },
      {
        id: 2,
        question: "Why do cell references matter?",
        sampleAnswer: "Incorrect references can produce wrong calculations."
      },
      {
        id: 3,
        question: "How do you validate a suggested formula?",
        sampleAnswer: "Test it with sample values whose expected results are known."
      },
      {
        id: 4,
        question: "What do you do when a formula is wrong?",
        sampleAnswer: "Inspect assumptions and references, correct it and retest."
      },
    ]
  },
  "32.3": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 32,
    moduleName: "Module 32: AI for Excel, SQL and Python",
    topicKey: "32.3",
    id: 274,
    topicTitle: "Ask AI to Draft SQL Queries",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "What should a SQL-generation prompt include?",
        options: [
          { key: "A", text: "Table names, relevant columns and the business question" },
          { key: "B", text: "Only a chart color" },
          { key: "C", text: "Only the analyst name" },
          { key: "D", text: "An invented database password" },
        ],
        correct: 0,
        explanation: "Actual schema query drafting ke liye important hai.",
        hint: "Focus on Table names, relevant columns and the business question to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "Which query selects customer_name from customers?",
        options: [
          { key: "A", text: "SHOW customers customer_name;" },
          { key: "B", text: "SELECT customer_name FROM customers;" },
          { key: "C", text: "SELECT FROM customer_name customers;" },
          { key: "D", text: "DELETE customer_name FROM customers;" },
        ],
        correct: 1,
        explanation: "SELECT required column retrieve karta hai.",
        hint: "Focus on SELECT customer_name FROM customers; to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "Why should an AI-generated SQL query be reviewed?",
        options: [
          { key: "A", text: "SQL cannot change data" },
          { key: "B", text: "Every query is read-only" },
          { key: "C", text: "It may invent columns or misunderstand relationships" },
          { key: "D", text: "AI always knows the live schema" },
        ],
        correct: 2,
        explanation: "Schema aur query safety check karo.",
        hint: "Focus on It may invent columns or misunderstand relationships to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "What is a safe first test for a generated SELECT query?",
        options: [
          { key: "A", text: "Run destructive commands in production" },
          { key: "B", text: "Ignore permissions" },
          { key: "C", text: "Publish raw personal records" },
          { key: "D", text: "Run it on an approved test environment or sample dataset" },
        ],
        correct: 3,
        explanation: "Test environment aur access controls important hain.",
        hint: "Focus on Run it on an approved test environment or sample dataset to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "Which instruction helps reduce schema hallucinations?",
        options: [
          { key: "A", text: "Use only the tables and columns listed below" },
          { key: "B", text: "Guess missing columns" },
          { key: "C", text: "Assume every table exists" },
          { key: "D", text: "Add arbitrary fields" },
        ],
        correct: 0,
        explanation: "Schema-only constraint invented names kam kar sakta hai.",
        hint: "Focus on Use only the tables and columns listed below to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Draft SQL Safely",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Describe business question", "Provide approved schema", "Request a SELECT draft", "Review and test results"],
        shuffled: ["Review and test results", "Request a SELECT draft", "Provide approved schema", "Describe business question"],
        expected: ["Describe business question", "Provide approved schema", "Request a SELECT draft", "Review and test results"],
        hint: "Query run karne se pehle schema validate karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Select One Column",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Identify customers table", "Identify customer_name column", "Write SELECT customer_name FROM customers", "Test expected output"],
        shuffled: ["Test expected output", "Write SELECT customer_name FROM customers", "Identify customer_name column", "Identify customers table"],
        expected: ["Identify customers table", "Identify customer_name column", "Write SELECT customer_name FROM customers", "Test expected output"],
        hint: "SELECT syntax table aur column se banti hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Check Generated Query",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Inspect table names", "Inspect column names", "Check filters and joins", "Test on approved sample"],
        shuffled: ["Test on approved sample", "Check filters and joins", "Inspect column names", "Inspect table names"],
        expected: ["Inspect table names", "Inspect column names", "Check filters and joins", "Test on approved sample"],
        hint: "SQL correctness multi-step check hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "What details help AI draft SQL",
        meaning: "The business question, SQL dialect, table names an..."
      },
      {
        id: 2,
        snippet: "Why might generated SQL fail",
        meaning: "It may use incorrect schema names, joins or logic."
      },
      {
        id: 3,
        snippet: "How should SQL be tested",
        meaning: "Review it and run on approved sample data or a saf..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Draft a Customer Query",
        scenario: "Approved schema mein customers(customer_name, city) table hai.",
        prompt: "Kaunsa SQL draft names retrieve karega?",
        expectedResponse: "C \u2014 Schema ke correct table aur column use karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What details help AI draft SQL?",
        sampleAnswer: "The business question, SQL dialect, table names and column definitions."
      },
      {
        id: 2,
        question: "Why might generated SQL fail?",
        sampleAnswer: "It may use incorrect schema names, joins or logic."
      },
      {
        id: 3,
        question: "How should SQL be tested?",
        sampleAnswer: "Review it and run on approved sample data or a safe environment."
      },
      {
        id: 4,
        question: "Should AI-generated SQL run automatically in production?",
        sampleAnswer: "No. Apply review, access control and testing first."
      },
    ]
  },
  "32.4": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 32,
    moduleName: "Module 32: AI for Excel, SQL and Python",
    topicKey: "32.4",
    id: 275,
    topicTitle: "Debug and Explain SQL",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "What is the issue with SELECT name FORM customers;?",
        options: [
          { key: "A", text: "FORM should be FROM" },
          { key: "B", text: "SELECT should be PRINT" },
          { key: "C", text: "customers must be deleted" },
          { key: "D", text: "name must always be quoted" },
        ],
        correct: 0,
        explanation: "FROM keyword spelling correct hona chahiye.",
        hint: "Focus on FORM should be FROM to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "What should be checked if a query returns zero rows unexpectedly?",
        options: [
          { key: "A", text: "Only the database logo" },
          { key: "B", text: "Filters, join conditions and actual data" },
          { key: "C", text: "Only the screen brightness" },
          { key: "D", text: "Only the file icon" },
        ],
        correct: 1,
        explanation: "Overly restrictive WHERE filter zero rows de sakta hai.",
        hint: "Focus on Filters, join conditions and actual data to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "Why can a JOIN produce duplicate-looking rows?",
        options: [
          { key: "A", text: "ORDER BY creates duplicate records" },
          { key: "B", text: "SELECT deletes duplicates" },
          { key: "C", text: "One-to-many matches can multiply result rows" },
          { key: "D", text: "JOIN always returns one row" },
        ],
        correct: 2,
        explanation: "Join cardinality understand karna important hai.",
        hint: "Focus on One-to-many matches can multiply result rows to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "What is a useful debugging prompt?",
        options: [
          { key: "A", text: "Make this SQL magical" },
          { key: "B", text: "Guess my schema" },
          { key: "C", text: "Hide the error message" },
          { key: "D", text: "Explain this error and suggest a corrected PostgreSQL query" },
        ],
        correct: 3,
        explanation: "Exact error aur dialect context useful hain.",
        hint: "Focus on Explain this error and suggest a corrected PostgreSQL query to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "How should an AI-proposed SQL fix be checked?",
        options: [
          { key: "A", text: "Run test cases and compare expected row counts and totals" },
          { key: "B", text: "Assume no further checking is needed" },
          { key: "C", text: "Only rename the query" },
          { key: "D", text: "Ignore the database schema" },
        ],
        correct: 0,
        explanation: "Syntax fix ke baad logical result verify karo.",
        hint: "Focus on Run test cases and compare expected row counts and totals to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Debug SQL Error",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Read exact error message", "Locate relevant SQL clause", "Propose minimal correction", "Retest query"],
        shuffled: ["Retest query", "Propose minimal correction", "Locate relevant SQL clause", "Read exact error message"],
        expected: ["Read exact error message", "Locate relevant SQL clause", "Propose minimal correction", "Retest query"],
        hint: "Error message useful starting point hai."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Investigate Empty Results",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Check table contains rows", "Review WHERE filters", "Review JOIN conditions", "Test expected subset"],
        shuffled: ["Test expected subset", "Review JOIN conditions", "Review WHERE filters", "Check table contains rows"],
        expected: ["Check table contains rows", "Review WHERE filters", "Review JOIN conditions", "Test expected subset"],
        hint: "Empty result ka reason systematically dhoondo."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Validate a JOIN",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Inspect join keys", "Check relationship cardinality", "Compare expected row counts", "Investigate unexpected duplicates"],
        shuffled: ["Investigate unexpected duplicates", "Compare expected row counts", "Check relationship cardinality", "Inspect join keys"],
        expected: ["Inspect join keys", "Check relationship cardinality", "Compare expected row counts", "Investigate unexpected duplicates"],
        hint: "Join row multiplication ko check karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How can AI help debug SQL",
        meaning: "It can explain error messages and suggest possible..."
      },
      {
        id: 2,
        snippet: "Why might a SQL query return no rows",
        meaning: "Filters or joins may exclude all records, or the s..."
      },
      {
        id: 3,
        snippet: "Why do joins sometimes multiply rows",
        meaning: "Multiple matching records can produce multiple joi..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Fix a SQL Typo",
        scenario: "Query: SELECT name FORM employees;",
        prompt: "Correct fix kya hai?",
        expectedResponse: "B \u2014 FROM keyword spelling correct karni hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How can AI help debug SQL?",
        sampleAnswer: "It can explain error messages and suggest possible corrections."
      },
      {
        id: 2,
        question: "Why might a SQL query return no rows?",
        sampleAnswer: "Filters or joins may exclude all records, or the source may be empty."
      },
      {
        id: 3,
        question: "Why do joins sometimes multiply rows?",
        sampleAnswer: "Multiple matching records can produce multiple joined rows."
      },
      {
        id: 4,
        question: "How do you verify a SQL fix?",
        sampleAnswer: "Run test cases and compare results with expected counts or values."
      },
    ]
  },
  "32.5": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 32,
    moduleName: "Module 32: AI for Excel, SQL and Python",
    topicKey: "32.5",
    id: 276,
    topicTitle: "Generate Python Code Safely",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "What should a Python-code prompt include?",
        options: [
          { key: "A", text: "Expected inputs, outputs and constraints" },
          { key: "B", text: "Only a greeting" },
          { key: "C", text: "Only a preferred font" },
          { key: "D", text: "Only a random variable name" },
        ],
        correct: 0,
        explanation: "Clear I/O requirements code quality improve karte hain.",
        hint: "Focus on Expected inputs, outputs and constraints to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "Which code correctly prints Hello in Python?",
        options: [
          { key: "A", text: "print Hello" },
          { key: "B", text: "print(\"Hello\")" },
          { key: "C", text: "Print(\"Hello\")" },
          { key: "D", text: "echo(\"Hello\")" },
        ],
        correct: 1,
        explanation: "Python case-sensitive hai; print() correct hai.",
        hint: "Focus on print(\"Hello\") to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "Why inspect AI-generated code before running it?",
        options: [
          { key: "A", text: "Reading code is never useful" },
          { key: "B", text: "All code is read-only" },
          { key: "C", text: "It may contain errors or unsafe operations" },
          { key: "D", text: "AI code is always safe" },
        ],
        correct: 2,
        explanation: "Generated code ka behavior review karo.",
        hint: "Focus on It may contain errors or unsafe operations to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "What is safer for testing unfamiliar code?",
        options: [
          { key: "A", text: "Production data with full permissions" },
          { key: "B", text: "Sharing API keys in prompt" },
          { key: "C", text: "Running every command as administrator" },
          { key: "D", text: "An isolated environment with non-sensitive sample data" },
        ],
        correct: 3,
        explanation: "Isolated testing risk reduce karta hai.",
        hint: "Focus on An isolated environment with non-sensitive sample data to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "Which requirement improves a code-generation prompt?",
        options: [
          { key: "A", text: "Do not modify files; return a pure function for the calculation" },
          { key: "B", text: "Delete any file you find" },
          { key: "C", text: "Use unrestricted network access" },
          { key: "D", text: "Ignore error cases" },
        ],
        correct: 0,
        explanation: "Explicit safe constraints important hain.",
        hint: "Focus on Do not modify files; return a pure function for the calculation to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Safe Python Draft",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Define inputs and outputs", "Request code with constraints", "Inspect code for risky actions", "Run tests in isolated environment"],
        shuffled: ["Run tests in isolated environment", "Inspect code for risky actions", "Request code with constraints", "Define inputs and outputs"],
        expected: ["Define inputs and outputs", "Request code with constraints", "Inspect code for risky actions", "Run tests in isolated environment"],
        hint: "Generated code ko blindly execute mat karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Test a Sum Function",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Provide sample inputs 2 and 3", "Run proposed function", "Check expected output 5", "Review edge cases"],
        shuffled: ["Review edge cases", "Check expected output 5", "Run proposed function", "Provide sample inputs 2 and 3"],
        expected: ["Provide sample inputs 2 and 3", "Run proposed function", "Check expected output 5", "Review edge cases"],
        hint: "Expected output se validation hoti hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Review Code Safety",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Check file operations", "Check network and secret access", "Use least-privilege test setup", "Approve only after tests"],
        shuffled: ["Approve only after tests", "Use least-privilege test setup", "Check network and secret access", "Check file operations"],
        expected: ["Check file operations", "Check network and secret access", "Use least-privilege test setup", "Approve only after tests"],
        hint: "Unneeded privileges avoid karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "What should you specify when requesting Python code",
        meaning: "Input format, desired output, constraints and exam..."
      },
      {
        id: 2,
        snippet: "Why is generated code risky",
        meaning: "It can contain bugs, unsafe operations or wrong as..."
      },
      {
        id: 3,
        snippet: "an isolated test environment",
        meaning: "A restricted environment used to run code without ..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Run AI Code Safely",
        scenario: "AI ne unknown Python script generate ki hai.",
        prompt: "First safe action kya hai?",
        expectedResponse: "A \u2014 Safety review aur isolated test karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What should you specify when requesting Python code?",
        sampleAnswer: "Input format, desired output, constraints and example cases."
      },
      {
        id: 2,
        question: "Why is generated code risky?",
        sampleAnswer: "It can contain bugs, unsafe operations or wrong assumptions."
      },
      {
        id: 3,
        question: "What is an isolated test environment?",
        sampleAnswer: "A restricted environment used to run code without affecting important systems."
      },
      {
        id: 4,
        question: "How do you validate generated Python?",
        sampleAnswer: "Inspect the code and test it against known expected outputs."
      },
    ]
  },
  "32.6": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 32,
    moduleName: "Module 32: AI for Excel, SQL and Python",
    topicKey: "32.6",
    id: 277,
    topicTitle: "Debug Python with AI",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "What information is most useful for AI-assisted debugging?",
        options: [
          { key: "A", text: "The error message, relevant code and expected behavior" },
          { key: "B", text: "Only the program title" },
          { key: "C", text: "Only a screenshot of desktop wallpaper" },
          { key: "D", text: "Only the file size" },
        ],
        correct: 0,
        explanation: "Exact error aur context debug help improve karte hain.",
        hint: "Focus on The error message, relevant code and expected behavior to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "What does a Python traceback usually show?",
        options: [
          { key: "A", text: "A network password" },
          { key: "B", text: "Where an exception occurred and its call path" },
          { key: "C", text: "A chart legend" },
          { key: "D", text: "A database backup" },
        ],
        correct: 1,
        explanation: "Traceback error locate karne mein help karta hai.",
        hint: "Focus on Where an exception occurred and its call path to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "What is wrong with print(Hello) when Hello is not defined?",
        options: [
          { key: "A", text: "It converts Hello to integer" },
          { key: "B", text: "It is a comment" },
          { key: "C", text: "It raises NameError because Hello is treated as a variable" },
          { key: "D", text: "It always prints Hello" },
        ],
        correct: 2,
        explanation: "String text ko quotes chahiye.",
        hint: "Focus on It raises NameError because Hello is treated as a variable to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "What is a useful first debugging step?",
        options: [
          { key: "A", text: "Change random lines" },
          { key: "B", text: "Delete all tests" },
          { key: "C", text: "Assume the model is correct" },
          { key: "D", text: "Reproduce the issue with a small test case" },
        ],
        correct: 3,
        explanation: "Small reproducible example root cause isolate karta hai.",
        hint: "Focus on Reproduce the issue with a small test case to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "After an AI-suggested fix, what should you do?",
        options: [
          { key: "A", text: "Rerun failing and related tests" },
          { key: "B", text: "Trust the suggestion immediately" },
          { key: "C", text: "Ignore output differences" },
          { key: "D", text: "Remove all error handling" },
        ],
        correct: 0,
        explanation: "Regression tests check karo.",
        hint: "Focus on Rerun failing and related tests to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Debug a Traceback",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Reproduce error", "Read traceback and failing line", "Inspect likely cause", "Fix and rerun tests"],
        shuffled: ["Fix and rerun tests", "Inspect likely cause", "Read traceback and failing line", "Reproduce error"],
        expected: ["Reproduce error", "Read traceback and failing line", "Inspect likely cause", "Fix and rerun tests"],
        hint: "Traceback line se investigation start karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Fix Missing Quotes",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Notice undefined name", "Identify intended text literal", "Add quotation marks", "Run again and confirm output"],
        shuffled: ["Run again and confirm output", "Add quotation marks", "Identify intended text literal", "Notice undefined name"],
        expected: ["Notice undefined name", "Identify intended text literal", "Add quotation marks", "Run again and confirm output"],
        hint: "Literal string quotes mein likho."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Ask AI for Debug Help",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Share minimal non-sensitive code", "Include exact error", "State expected output", "Evaluate suggested fix"],
        shuffled: ["Evaluate suggested fix", "State expected output", "Include exact error", "Share minimal non-sensitive code"],
        expected: ["Share minimal non-sensitive code", "Include exact error", "State expected output", "Evaluate suggested fix"],
        hint: "Minimal reproducible example helpful hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "a traceback",
        meaning: "A Python error report showing where an exception o..."
      },
      {
        id: 2,
        snippet: "What context helps AI debug Python",
        meaning: "A minimal reproducible example, exact error and ex..."
      },
      {
        id: 3,
        snippet: "What causes NameError",
        meaning: "Using a name that is not defined in the current co..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Fix a NameError",
        scenario: "Python code: print(Welcome), lekin Welcome variable defined nahi hai.",
        prompt: "Correct fix kya hai agar text print karna hai?",
        expectedResponse: "C \u2014 Text literal ko quotes mein wrap karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is a traceback?",
        sampleAnswer: "A Python error report showing where an exception occurred."
      },
      {
        id: 2,
        question: "What context helps AI debug Python?",
        sampleAnswer: "A minimal reproducible example, exact error and expected behavior."
      },
      {
        id: 3,
        question: "What causes NameError?",
        sampleAnswer: "Using a name that is not defined in the current context."
      },
      {
        id: 4,
        question: "How do you confirm a fix?",
        sampleAnswer: "Rerun the failing test and check related cases for regressions."
      },
    ]
  },
  "32.7": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 32,
    moduleName: "Module 32: AI for Excel, SQL and Python",
    topicKey: "32.7",
    id: 278,
    topicTitle: "Test AI-Generated Code with Sample Data",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "Why use sample data when testing AI-generated code?",
        options: [
          { key: "A", text: "To compare actual results with known expected results" },
          { key: "B", text: "To guarantee all possible bugs are gone" },
          { key: "C", text: "To avoid running any code" },
          { key: "D", text: "To replace business rules" },
        ],
        correct: 0,
        explanation: "Known expected values logic validate karte hain.",
        hint: "Focus on To compare actual results with known expected results to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "What is an edge case?",
        options: [
          { key: "A", text: "A chart background" },
          { key: "B", text: "An unusual or boundary input that may expose errors" },
          { key: "C", text: "A normal heading" },
          { key: "D", text: "A database password" },
        ],
        correct: 1,
        explanation: "Empty list ya zero denominator edge case ho sakte hain.",
        hint: "Focus on An unusual or boundary input that may expose errors to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "What is the expected sum of [2, 3, 5]?",
        options: [
          { key: "A", text: "5" },
          { key: "B", text: "0" },
          { key: "C", text: "10" },
          { key: "D", text: "235" },
        ],
        correct: 2,
        explanation: "2+3+5=10.",
        hint: "Focus on 10 to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "What should a test record contain?",
        options: [
          { key: "A", text: "Only the model name" },
          { key: "B", text: "Only a decorative label" },
          { key: "C", text: "Only the run time" },
          { key: "D", text: "Input, expected output and actual output" },
        ],
        correct: 3,
        explanation: "Expected vs actual compare karna testing ka core hai.",
        hint: "Focus on Input, expected output and actual output to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "What if a test fails?",
        options: [
          { key: "A", text: "Investigate, fix the code and rerun the test" },
          { key: "B", text: "Ignore the mismatch" },
          { key: "C", text: "Publish the wrong result" },
          { key: "D", text: "Change expected output to match the bug" },
        ],
        correct: 0,
        explanation: "Failed test code issue signal karta hai.",
        hint: "Focus on Investigate, fix the code and rerun the test to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Build a Test Case",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Choose simple input", "Calculate expected output manually", "Run generated code", "Compare actual and expected"],
        shuffled: ["Compare actual and expected", "Run generated code", "Calculate expected output manually", "Choose simple input"],
        expected: ["Choose simple input", "Calculate expected output manually", "Run generated code", "Compare actual and expected"],
        hint: "Known answer se logic test karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Test an Edge Case",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Identify boundary condition", "Create edge-case input", "Run code safely", "Check error handling and output"],
        shuffled: ["Check error handling and output", "Run code safely", "Create edge-case input", "Identify boundary condition"],
        expected: ["Identify boundary condition", "Create edge-case input", "Run code safely", "Check error handling and output"],
        hint: "Edge cases hidden bugs reveal karte hain."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Retest a Fix",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Record failing case", "Apply targeted fix", "Rerun failing case", "Rerun related cases"],
        shuffled: ["Rerun related cases", "Rerun failing case", "Apply targeted fix", "Record failing case"],
        expected: ["Record failing case", "Apply targeted fix", "Rerun failing case", "Rerun related cases"],
        hint: "Regression testing important hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "Why test AI-generated code",
        meaning: "To confirm it meets requirements and handles input..."
      },
      {
        id: 2,
        snippet: "an expected result",
        meaning: "The correct output determined independently for a ..."
      },
      {
        id: 3,
        snippet: "Give an example of an edge case.",
        meaning: "An empty list or a zero denominator can be an edge..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Check an AI Sum Function",
        scenario: "AI function [2,3,5] ka sum 11 return kar raha hai.",
        prompt: "Correct response kya hai?",
        expectedResponse: "B \u2014 Expected output 10 hai, isliye fix aur retest chahiye."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "Why test AI-generated code?",
        sampleAnswer: "To confirm it meets requirements and handles inputs correctly."
      },
      {
        id: 2,
        question: "What is an expected result?",
        sampleAnswer: "The correct output determined independently for a test input."
      },
      {
        id: 3,
        question: "Give an example of an edge case.",
        sampleAnswer: "An empty list or a zero denominator can be an edge case."
      },
      {
        id: 4,
        question: "What should happen after a failed test?",
        sampleAnswer: "Investigate the cause, fix the code and rerun relevant tests."
      },
    ]
  },
  "33.1": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 33,
    moduleName: "Module 33: AI-Assisted Analytics Workflows",
    topicKey: "33.1",
    id: 279,
    topicTitle: "Use AI to Draft an Analysis Plan",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "What should an analytics plan begin with?",
        options: [
          { key: "A", text: "A random chart color" },
          { key: "B", text: "An invented conclusion" },
          { key: "C", text: "A final report title only" },
          { key: "D", text: "A clear business question" },
        ],
        correct: 3,
        explanation: "Business goal first define karo.",
        hint: "Focus on A clear business question to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "What can AI help draft in an analysis plan?",
        options: [
          { key: "A", text: "Questions, data needs, steps and checks" },
          { key: "B", text: "Guaranteed future revenue" },
          { key: "C", text: "Private data without access" },
          { key: "D", text: "Final conclusions without evidence" },
        ],
        correct: 0,
        explanation: "AI plan draft karta hai, evidence analyst provide karega.",
        hint: "Focus on Questions, data needs, steps and checks to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "Which step should come before analyzing sales trends?",
        options: [
          { key: "A", text: "Choose a random winner" },
          { key: "B", text: "Confirm the date range and required data" },
          { key: "C", text: "Publish a conclusion" },
          { key: "D", text: "Invent missing transactions" },
        ],
        correct: 1,
        explanation: "Scope aur data availability check karo.",
        hint: "Focus on Confirm the date range and required data to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "What should a plan say when data is missing?",
        options: [
          { key: "A", text: "Replace it with guesses" },
          { key: "B", text: "Delete the business question" },
          { key: "C", text: "Identify the gap and needed follow-up" },
          { key: "D", text: "Pretend the data exists" },
        ],
        correct: 2,
        explanation: "Data gap clearly document karo.",
        hint: "Focus on Identify the gap and needed follow-up to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "Who should review the AI-generated plan?",
        options: [
          { key: "A", text: "Only the model" },
          { key: "B", text: "A random website visitor" },
          { key: "C", text: "Nobody" },
          { key: "D", text: "The analyst or responsible team" },
        ],
        correct: 3,
        explanation: "Plan feasibility aur policy human validate karega.",
        hint: "Focus on The analyst or responsible team to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Draft an Analysis Plan",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Define business question", "Identify required data", "List analysis steps", "Define validation and deliverables"],
        shuffled: ["Define validation and deliverables", "List analysis steps", "Identify required data", "Define business question"],
        expected: ["Define business question", "Identify required data", "List analysis steps", "Define validation and deliverables"],
        hint: "Question se deliverable tak structured plan."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Plan a Sales Trend Study",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Choose time period", "Confirm sales date and amount fields", "Define trend calculation", "Plan checks for missing dates"],
        shuffled: ["Plan checks for missing dates", "Define trend calculation", "Confirm sales date and amount fields", "Choose time period"],
        expected: ["Choose time period", "Confirm sales date and amount fields", "Define trend calculation", "Plan checks for missing dates"],
        hint: "Required columns aur period confirm karo."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Review an AI Plan",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Check feasibility", "Check data availability", "Check privacy and assumptions", "Approve revised plan"],
        shuffled: ["Approve revised plan", "Check privacy and assumptions", "Check data availability", "Check feasibility"],
        expected: ["Check feasibility", "Check data availability", "Check privacy and assumptions", "Approve revised plan"],
        hint: "Plan ko reality se align karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How can AI assist with analysis planning",
        meaning: "It can draft steps, required data, checks and deli..."
      },
      {
        id: 2,
        snippet: "What should an analysis plan start with",
        meaning: "A clearly defined business question."
      },
      {
        id: 3,
        snippet: "What if required data is unavailable",
        meaning: "Document the gap and seek the missing data or adju..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Plan a Retail Analysis",
        scenario: "Manager poochta hai: \u201cMonthly sales ka trend kya hai?\u201d",
        prompt: "Plan ka first step kya hoga?",
        expectedResponse: "A \u2014 Analysis goal aur required fields define karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How can AI assist with analysis planning?",
        sampleAnswer: "It can draft steps, required data, checks and deliverables."
      },
      {
        id: 2,
        question: "What should an analysis plan start with?",
        sampleAnswer: "A clearly defined business question."
      },
      {
        id: 3,
        question: "What if required data is unavailable?",
        sampleAnswer: "Document the gap and seek the missing data or adjust scope."
      },
      {
        id: 4,
        question: "Why review an AI-generated plan?",
        sampleAnswer: "To ensure it is feasible, relevant, accurate and policy-compliant."
      },
    ]
  },
  "33.2": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 33,
    moduleName: "Module 33: AI-Assisted Analytics Workflows",
    topicKey: "33.2",
    id: 280,
    topicTitle: "Summarize Verified Tables and Trends",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "What should a trend summary be based on?",
        options: [
          { key: "A", text: "Guessed percentages" },
          { key: "B", text: "Unrelated internet comments" },
          { key: "C", text: "Invented transactions" },
          { key: "D", text: "Verified table values" },
        ],
        correct: 3,
        explanation: "Source-grounded summary accurate hoti hai.",
        hint: "Focus on Verified table values to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "Sales were 100 in January and 120 in February. What is the increase?",
        options: [
          { key: "A", text: "20 units" },
          { key: "B", text: "120 units" },
          { key: "C", text: "100 units" },
          { key: "D", text: "220 units" },
        ],
        correct: 0,
        explanation: "120 - 100 = 20 units.",
        hint: "Focus on 20 units to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "What is a safe AI instruction for trend summaries?",
        options: [
          { key: "A", text: "Ignore dates" },
          { key: "B", text: "Use only the supplied table and do not invent missing figures" },
          { key: "C", text: "Make up missing months" },
          { key: "D", text: "Assume every month grew" },
        ],
        correct: 1,
        explanation: "AI ko source-only constraint do aur output verify karo.",
        hint: "Focus on Use only the supplied table and do not invent missing figures to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "What should be included in a concise trend statement?",
        options: [
          { key: "A", text: "Only the chart title" },
          { key: "B", text: "An unsupported prediction" },
          { key: "C", text: "Metric, period and verified change" },
          { key: "D", text: "Only a positive adjective" },
        ],
        correct: 2,
        explanation: "Metric aur comparison period clear rakho.",
        hint: "Focus on Metric, period and verified change to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "What if the table contains missing months?",
        options: [
          { key: "A", text: "Fill all missing months with random sales" },
          { key: "B", text: "Report uninterrupted growth" },
          { key: "C", text: "Hide the missing data" },
          { key: "D", text: "Mention the gap rather than invent values" },
        ],
        correct: 3,
        explanation: "Incomplete periods ko note karo.",
        hint: "Focus on Mention the gap rather than invent values to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Verified Trend Summary",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Check source table", "Calculate period changes", "Draft concise narrative", "Compare each figure to source"],
        shuffled: ["Compare each figure to source", "Draft concise narrative", "Calculate period changes", "Check source table"],
        expected: ["Check source table", "Calculate period changes", "Draft concise narrative", "Compare each figure to source"],
        hint: "Numbers ko independently verify karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Compare Two Months",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Read January sales 100", "Read February sales 120", "Compute increase of 20", "Write verified trend statement"],
        shuffled: ["Write verified trend statement", "Compute increase of 20", "Read February sales 120", "Read January sales 100"],
        expected: ["Read January sales 100", "Read February sales 120", "Compute increase of 20", "Write verified trend statement"],
        hint: "Simple difference source values se nikalta hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Handle Missing Period",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Identify absent month", "Mark data gap", "Avoid unsupported trend claims", "Request missing data if needed"],
        shuffled: ["Request missing data if needed", "Avoid unsupported trend claims", "Mark data gap", "Identify absent month"],
        expected: ["Identify absent month", "Mark data gap", "Avoid unsupported trend claims", "Request missing data if needed"],
        hint: "Missing month ke liye guess mat karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How should AI summarize a table",
        meaning: "Using only verified values and clearly defined per..."
      },
      {
        id: 2,
        snippet: "a trend",
        meaning: "A pattern of change in a metric over time."
      },
      {
        id: 3,
        snippet: "Why verify a generated summary",
        meaning: "AI may misread figures or invent explanations."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Summarize a Verified Table",
        scenario: "Verified sales: Jan 100, Feb 120.",
        prompt: "Kaunsa summary correct hai?",
        expectedResponse: "C \u2014 Difference 20 units hai; double nahi hua."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How should AI summarize a table?",
        sampleAnswer: "Using only verified values and clearly defined periods."
      },
      {
        id: 2,
        question: "What is a trend?",
        sampleAnswer: "A pattern of change in a metric over time."
      },
      {
        id: 3,
        question: "Why verify a generated summary?",
        sampleAnswer: "AI may misread figures or invent explanations."
      },
      {
        id: 4,
        question: "How should missing periods be handled?",
        sampleAnswer: "Disclose the gap and avoid unsupported claims."
      },
    ]
  },
  "33.3": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 33,
    moduleName: "Module 33: AI-Assisted Analytics Workflows",
    topicKey: "33.3",
    id: 281,
    topicTitle: "Draft Insight Narratives",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "What is an insight narrative?",
        options: [
          { key: "A", text: "A fictional sales story" },
          { key: "B", text: "A list of invented numbers" },
          { key: "C", text: "Only a chart color choice" },
          { key: "D", text: "An evidence-based explanation of what data shows and why it matters" },
        ],
        correct: 3,
        explanation: "Insight narrative data ko business meaning se connect karti hai.",
        hint: "Focus on An evidence-based explanation of what data shows and why it matters to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "Which statement is an observation?",
        options: [
          { key: "A", text: "Product A sold 120 units in March" },
          { key: "B", text: "Product A is always best for every customer" },
          { key: "C", text: "All future sales will double" },
          { key: "D", text: "The manager is definitely wrong" },
        ],
        correct: 0,
        explanation: "Observation verified data fact batata hai.",
        hint: "Focus on Product A sold 120 units in March to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "Which claim needs extra evidence?",
        options: [
          { key: "A", text: "Orders totaled 20 last week" },
          { key: "B", text: "Sales fell because customers disliked the packaging" },
          { key: "C", text: "Sales were 90 in April" },
          { key: "D", text: "Revenue was 1000 in May" },
        ],
        correct: 1,
        explanation: "Causation claim ke liye additional evidence chahiye.",
        hint: "Focus on Sales fell because customers disliked the packaging to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "What makes a recommendation responsible?",
        options: [
          { key: "A", text: "It ignores costs and limitations" },
          { key: "B", text: "It invents customer intent" },
          { key: "C", text: "It is linked to evidence and states relevant uncertainty" },
          { key: "D", text: "It guarantees success" },
        ],
        correct: 2,
        explanation: "Recommendation evidence aur caveats se supported honi chahiye.",
        hint: "Focus on It is linked to evidence and states relevant uncertainty to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "How should AI treat an unknown cause?",
        options: [
          { key: "A", text: "State it as proven" },
          { key: "B", text: "Hide the uncertainty" },
          { key: "C", text: "Invent a customer survey" },
          { key: "D", text: "Label it as a hypothesis to investigate" },
        ],
        correct: 3,
        explanation: "Hypothesis ko fact mat banao.",
        hint: "Focus on Label it as a hypothesis to investigate to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Write an Insight Narrative",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["State verified observation", "Explain possible business significance", "Separate hypotheses from facts", "Propose a checkable next step"],
        shuffled: ["Propose a checkable next step", "Separate hypotheses from facts", "Explain possible business significance", "State verified observation"],
        expected: ["State verified observation", "Explain possible business significance", "Separate hypotheses from facts", "Propose a checkable next step"],
        hint: "Observation aur inference separate rakho."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Avoid False Causation",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Notice a decline", "List plausible causes as hypotheses", "Identify evidence needed", "Investigate before concluding"],
        shuffled: ["Investigate before concluding", "Identify evidence needed", "List plausible causes as hypotheses", "Notice a decline"],
        expected: ["Notice a decline", "List plausible causes as hypotheses", "Identify evidence needed", "Investigate before concluding"],
        hint: "Correlation se direct cause prove nahi hota."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Draft Actionable Insight",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Use verified metric", "Explain affected business area", "Suggest a proportionate action", "State limitation or follow-up"],
        shuffled: ["State limitation or follow-up", "Suggest a proportionate action", "Explain affected business area", "Use verified metric"],
        expected: ["Use verified metric", "Explain affected business area", "Suggest a proportionate action", "State limitation or follow-up"],
        hint: "Action data se linked ho."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "an insight narrative",
        meaning: "An evidence-based explanation connecting observati..."
      },
      {
        id: 2,
        snippet: "How is an observation different from an explanation",
        meaning: "An observation states what the data shows; an expl..."
      },
      {
        id: 3,
        snippet: "Why avoid unsupported causal claims",
        meaning: "A trend alone does not prove the reason behind it."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Avoid Unsupported Causes",
        scenario: "Sales March mein 120 aur April mein 90 thi; customer feedback available nahi hai.",
        prompt: "Kaunsa statement responsible hai?",
        expectedResponse: "B \u2014 Verified change batao; cause speculate karke fact mat banao."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is an insight narrative?",
        sampleAnswer: "An evidence-based explanation connecting observations to business implications."
      },
      {
        id: 2,
        question: "How is an observation different from an explanation?",
        sampleAnswer: "An observation states what the data shows; an explanation proposes why it happened."
      },
      {
        id: 3,
        question: "Why avoid unsupported causal claims?",
        sampleAnswer: "A trend alone does not prove the reason behind it."
      },
      {
        id: 4,
        question: "How do you write a responsible recommendation?",
        sampleAnswer: "Tie it to evidence, explain limitations and suggest a testable next step."
      },
    ]
  },
  "33.4": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 33,
    moduleName: "Module 33: AI-Assisted Analytics Workflows",
    topicKey: "33.4",
    id: 282,
    topicTitle: "Generate Documentation and Data Dictionaries",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "What is a data dictionary?",
        options: [
          { key: "A", text: "A list of secret passwords" },
          { key: "B", text: "A chart gallery" },
          { key: "C", text: "A set of random filenames" },
          { key: "D", text: "Documentation describing dataset fields and their meanings" },
        ],
        correct: 3,
        explanation: "Data dictionary columns ka meaning batata hai.",
        hint: "Focus on Documentation describing dataset fields and their meanings to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "Which detail belongs in a data dictionary?",
        options: [
          { key: "A", text: "Column name, data type and business definition" },
          { key: "B", text: "Only office seating plan" },
          { key: "C", text: "Only font family" },
          { key: "D", text: "Only laptop price" },
        ],
        correct: 0,
        explanation: "Field definitions analysis mein consistency laati hain.",
        hint: "Focus on Column name, data type and business definition to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "What is data lineage?",
        options: [
          { key: "A", text: "A list of keyboard keys" },
          { key: "B", text: "Information about where data came from and how it changed" },
          { key: "C", text: "A color palette" },
          { key: "D", text: "A network cable" },
        ],
        correct: 1,
        explanation: "Lineage source aur transformations trace karta hai.",
        hint: "Focus on Information about where data came from and how it changed to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "What should AI do if a column meaning is unclear?",
        options: [
          { key: "A", text: "Assume it means revenue" },
          { key: "B", text: "Delete the column" },
          { key: "C", text: "Mark it as unknown and request clarification" },
          { key: "D", text: "Invent a definition" },
        ],
        correct: 2,
        explanation: "Unknown meaning ko guess nahi karna.",
        hint: "Focus on Mark it as unknown and request clarification to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "Why review AI-generated documentation?",
        options: [
          { key: "A", text: "AI always knows internal schemas" },
          { key: "B", text: "Documentation never changes" },
          { key: "C", text: "Review is unnecessary" },
          { key: "D", text: "It may infer incorrect definitions or miss transformations" },
        ],
        correct: 3,
        explanation: "Schema owner se definitions verify karo.",
        hint: "Focus on It may infer incorrect definitions or miss transformations to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Create Data Dictionary",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["List dataset columns", "Record known data types", "Add verified business definitions", "Flag unknown definitions"],
        shuffled: ["Flag unknown definitions", "Add verified business definitions", "Record known data types", "List dataset columns"],
        expected: ["List dataset columns", "Record known data types", "Add verified business definitions", "Flag unknown definitions"],
        hint: "Data dictionary factual hona chahiye."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Document a Transformation",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Identify source field", "Describe cleaning rule", "Record resulting field", "Note validation check"],
        shuffled: ["Note validation check", "Record resulting field", "Describe cleaning rule", "Identify source field"],
        expected: ["Identify source field", "Describe cleaning rule", "Record resulting field", "Note validation check"],
        hint: "Transformation documentation reproducibility improve karti hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Review Generated Docs",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Compare with schema", "Check field definitions", "Check source and transformation notes", "Approve corrected version"],
        shuffled: ["Approve corrected version", "Check source and transformation notes", "Check field definitions", "Compare with schema"],
        expected: ["Compare with schema", "Check field definitions", "Check source and transformation notes", "Approve corrected version"],
        hint: "Documentation ko actual dataset se align karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "a data dictionary",
        meaning: "A reference describing dataset fields, types and b..."
      },
      {
        id: 2,
        snippet: "data lineage",
        meaning: "A record of data sources and transformations."
      },
      {
        id: 3,
        snippet: "How can AI help documentation",
        meaning: "It can draft field descriptions and transformation..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Document a Dataset",
        scenario: "AI ne `net_amt` ka meaning bina source ke \u201cNet Profit\u201d likh diya.",
        prompt: "Best action kya hai?",
        expectedResponse: "A \u2014 Column abbreviation se exact meaning assume nahi karna."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is a data dictionary?",
        sampleAnswer: "A reference describing dataset fields, types and business meanings."
      },
      {
        id: 2,
        question: "What is data lineage?",
        sampleAnswer: "A record of data sources and transformations."
      },
      {
        id: 3,
        question: "How can AI help documentation?",
        sampleAnswer: "It can draft field descriptions and transformation notes from verified metadata."
      },
      {
        id: 4,
        question: "What if a field meaning is unknown?",
        sampleAnswer: "Flag it and confirm with the data owner rather than guessing."
      },
    ]
  },
  "33.5": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 33,
    moduleName: "Module 33: AI-Assisted Analytics Workflows",
    topicKey: "33.5",
    id: 283,
    topicTitle: "Create Executive Report Summaries",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "What is the goal of an executive summary?",
        options: [
          { key: "A", text: "Include every raw data row" },
          { key: "B", text: "Invent a strong headline" },
          { key: "C", text: "Replace source evidence" },
          { key: "D", text: "Communicate key verified findings and decisions concisely" },
        ],
        correct: 3,
        explanation: "Executive summary key facts aur implications concise rakhti hai.",
        hint: "Focus on Communicate key verified findings and decisions concisely to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "Which information should be prioritized?",
        options: [
          { key: "A", text: "Verified KPIs, key changes, risks and actions" },
          { key: "B", text: "Unrelated code comments" },
          { key: "C", text: "Random customer names" },
          { key: "D", text: "Only decorative icons" },
        ],
        correct: 0,
        explanation: "Decision-relevant information highlight karo.",
        hint: "Focus on Verified KPIs, key changes, risks and actions to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "What is an appropriate prompt constraint?",
        options: [
          { key: "A", text: "Ignore missing information" },
          { key: "B", text: "Use three bullets and only the verified metrics supplied" },
          { key: "C", text: "Add invented revenue if needed" },
          { key: "D", text: "Assume all targets were met" },
        ],
        correct: 1,
        explanation: "Executive summary grounded aur concise honi chahiye.",
        hint: "Focus on Use three bullets and only the verified metrics supplied to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "What should a report do with an unknown KPI?",
        options: [
          { key: "A", text: "Replace it with a larger number" },
          { key: "B", text: "Hide the missing field" },
          { key: "C", text: "Mark it unavailable rather than fabricate it" },
          { key: "D", text: "Estimate without basis" },
        ],
        correct: 2,
        explanation: "Unknown KPI disclose karo.",
        hint: "Focus on Mark it unavailable rather than fabricate it to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "What is the final step before sharing with leadership?",
        options: [
          { key: "A", text: "Send automatically after generation" },
          { key: "B", text: "Remove source references" },
          { key: "C", text: "Ask AI to guarantee accuracy" },
          { key: "D", text: "Verify numbers and obtain required review or approval" },
        ],
        correct: 3,
        explanation: "Approval workflow follow karo.",
        hint: "Focus on Verify numbers and obtain required review or approval to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Executive Summary Flow",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Identify leadership question", "Select verified KPIs", "Draft concise findings and actions", "Validate and approve"],
        shuffled: ["Validate and approve", "Draft concise findings and actions", "Select verified KPIs", "Identify leadership question"],
        expected: ["Identify leadership question", "Select verified KPIs", "Draft concise findings and actions", "Validate and approve"],
        hint: "Summary audience aur evidence se aligned ho."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Prioritize Content",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Choose top metric", "Highlight important change", "State risk or limitation", "Suggest next action"],
        shuffled: ["Suggest next action", "State risk or limitation", "Highlight important change", "Choose top metric"],
        expected: ["Choose top metric", "Highlight important change", "State risk or limitation", "Suggest next action"],
        hint: "Leadership ko decision-relevant points do."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Check Final Report",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Compare KPI numbers to source", "Check period labels", "Remove unsupported claims", "Obtain required approval"],
        shuffled: ["Obtain required approval", "Remove unsupported claims", "Check period labels", "Compare KPI numbers to source"],
        expected: ["Compare KPI numbers to source", "Check period labels", "Remove unsupported claims", "Obtain required approval"],
        hint: "Publishing se pehle audit karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "an executive summary",
        meaning: "A concise overview of key findings, implications a..."
      },
      {
        id: 2,
        snippet: "Which metrics should it include",
        meaning: "The most relevant verified KPIs for the business q..."
      },
      {
        id: 3,
        snippet: "How do you handle missing KPIs",
        meaning: "Mark them unavailable and avoid inventing values."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Draft a Manager Summary",
        scenario: "Manager ko verified sales report ka short overview chahiye.",
        prompt: "Best format kya hai?",
        expectedResponse: "C \u2014 Executive summary short aur source-grounded ho."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is an executive summary?",
        sampleAnswer: "A concise overview of key findings, implications and actions for decision-makers."
      },
      {
        id: 2,
        question: "Which metrics should it include?",
        sampleAnswer: "The most relevant verified KPIs for the business question."
      },
      {
        id: 3,
        question: "How do you handle missing KPIs?",
        sampleAnswer: "Mark them unavailable and avoid inventing values."
      },
      {
        id: 4,
        question: "What checks are needed before sharing?",
        sampleAnswer: "Validate figures, wording, sources, privacy and required approvals."
      },
    ]
  },
  "33.6": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 33,
    moduleName: "Module 33: AI-Assisted Analytics Workflows",
    topicKey: "33.6",
    id: 284,
    topicTitle: "Verify Claims Against Data",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "What does claim verification require?",
        options: [
          { key: "A", text: "Trusting confident language" },
          { key: "B", text: "Only checking grammar" },
          { key: "C", text: "Choosing a colorful chart" },
          { key: "D", text: "Comparing each statement with supporting source data" },
        ],
        correct: 3,
        explanation: "Har claim ke liye evidence check karo.",
        hint: "Focus on Comparing each statement with supporting source data to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "Actual sales were 80 then 100. What is the increase in units?",
        options: [
          { key: "A", text: "20" },
          { key: "B", text: "180" },
          { key: "C", text: "80" },
          { key: "D", text: "100" },
        ],
        correct: 0,
        explanation: "100 - 80 = 20.",
        hint: "Focus on 20 to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "What should you do if AI reports a metric not present in the dataset?",
        options: [
          { key: "A", text: "Invent a formula without inputs" },
          { key: "B", text: "Mark it unsupported and request the correct source" },
          { key: "C", text: "Treat it as verified" },
          { key: "D", text: "Publish it in bold" },
        ],
        correct: 1,
        explanation: "Missing metric ko source ke bina confirm nahi kar sakte.",
        hint: "Focus on Mark it unsupported and request the correct source to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "What is a claim-evidence table useful for?",
        options: [
          { key: "A", text: "Hiding uncertain results" },
          { key: "B", text: "Automatically guaranteeing fairness" },
          { key: "C", text: "Tracking each claim, source and verification status" },
          { key: "D", text: "Replacing all analysis" },
        ],
        correct: 2,
        explanation: "Traceable verification record banta hai.",
        hint: "Focus on Tracking each claim, source and verification status to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "What if a percentage uses the wrong baseline?",
        options: [
          { key: "A", text: "Keep it for consistency" },
          { key: "B", text: "Round it to hide error" },
          { key: "C", text: "Ignore denominator" },
          { key: "D", text: "Recalculate with the correct denominator and correct the claim" },
        ],
        correct: 3,
        explanation: "Baseline galat ho to percentage misleading hota hai.",
        hint: "Focus on Recalculate with the correct denominator and correct the claim to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Claim Audit",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["List report claims", "Find supporting source rows", "Recalculate relevant metrics", "Approve or correct each claim"],
        shuffled: ["Approve or correct each claim", "Recalculate relevant metrics", "Find supporting source rows", "List report claims"],
        expected: ["List report claims", "Find supporting source rows", "Recalculate relevant metrics", "Approve or correct each claim"],
        hint: "Claim-by-claim verification karo."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Check a Change",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Read original value 80", "Read new value 100", "Calculate difference 20", "Check summary statement"],
        shuffled: ["Check summary statement", "Calculate difference 20", "Read new value 100", "Read original value 80"],
        expected: ["Read original value 80", "Read new value 100", "Calculate difference 20", "Check summary statement"],
        hint: "Absolute change 20 hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Track Verification",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Record claim", "Record data source", "Mark verified or unsupported", "Correct unsupported content"],
        shuffled: ["Correct unsupported content", "Mark verified or unsupported", "Record data source", "Record claim"],
        expected: ["Record claim", "Record data source", "Mark verified or unsupported", "Correct unsupported content"],
        hint: "Verification status explicit rakho."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How do you verify an AI claim",
        meaning: "Locate supporting data and independently check the..."
      },
      {
        id: 2,
        snippet: "a claim-evidence table",
        meaning: "A record linking report statements to sources and ..."
      },
      {
        id: 3,
        snippet: "How do you calculate percentage growth",
        meaning: "(New value minus old value) divided by old value, ..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Audit an AI Claim",
        scenario: "AI kehta hai sales 50% badhi; verified values 80 se 100 hain.",
        prompt: "Correct action kya hai?",
        expectedResponse: "B \u2014 (100 - 80) / 80 = 25%, not 50%."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How do you verify an AI claim?",
        sampleAnswer: "Locate supporting data and independently check the statement or calculation."
      },
      {
        id: 2,
        question: "What is a claim-evidence table?",
        sampleAnswer: "A record linking report statements to sources and verification results."
      },
      {
        id: 3,
        question: "How do you calculate percentage growth?",
        sampleAnswer: "(New value minus old value) divided by old value, multiplied by 100, when the old value is nonzero."
      },
      {
        id: 4,
        question: "What if a claim cannot be verified?",
        sampleAnswer: "Remove it, qualify it or request evidence before publishing."
      },
    ]
  },
  "33.7": {
    tabId: 6,
    tabName: "Generative AI for Analysts",
    moduleId: 33,
    moduleName: "Module 33: AI-Assisted Analytics Workflows",
    topicKey: "33.7",
    id: 285,
    topicTitle: "Build a Repeatable Human-in-the-Loop Workflow",
    mode: "AI & Prompt Engineering practice",
    game1Quiz: [
      {
        id: 1,
        question: "What does human-in-the-loop mean?",
        options: [
          { key: "A", text: "AI works with no oversight" },
          { key: "B", text: "Only humans may type prompts" },
          { key: "C", text: "Every output is published automatically" },
          { key: "D", text: "People review or control important stages of an AI-assisted process" },
        ],
        correct: 3,
        explanation: "Human review critical steps par present hota hai.",
        hint: "Focus on People review or control important stages of an AI-assisted process to answer this Generative AI concept."
      },
      {
        id: 2,
        question: "What makes an analytics workflow repeatable?",
        options: [
          { key: "A", text: "Documented inputs, steps, checks and outputs" },
          { key: "B", text: "Different random steps each time" },
          { key: "C", text: "Unrecorded manual guesses" },
          { key: "D", text: "No validation criteria" },
        ],
        correct: 0,
        explanation: "Repeatability ke liye documented process chahiye.",
        hint: "Focus on Documented inputs, steps, checks and outputs to answer this Generative AI concept."
      },
      {
        id: 3,
        question: "Where should an approval gate be placed?",
        options: [
          { key: "A", text: "Nowhere" },
          { key: "B", text: "Before releasing an important external report" },
          { key: "C", text: "After the report is already public" },
          { key: "D", text: "Only before writing the prompt" },
        ],
        correct: 1,
        explanation: "Release se pehle authorized approval hona chahiye.",
        hint: "Focus on Before releasing an important external report to answer this Generative AI concept."
      },
      {
        id: 4,
        question: "Why log validation failures?",
        options: [
          { key: "A", text: "To skip future testing" },
          { key: "B", text: "To replace source data" },
          { key: "C", text: "To improve prompts, code and checks over time" },
          { key: "D", text: "To hide mistakes" },
        ],
        correct: 2,
        explanation: "Failure records workflow improvement support karte hain.",
        hint: "Focus on To improve prompts, code and checks over time to answer this Generative AI concept."
      },
      {
        id: 5,
        question: "Which workflow is responsible?",
        options: [
          { key: "A", text: "Upload secrets \u2192 publish immediately" },
          { key: "B", text: "Generate \u2192 assume correct \u2192 send" },
          { key: "C", text: "Skip checks when in a hurry" },
          { key: "D", text: "Prepare approved data \u2192 AI draft \u2192 verify \u2192 human approve \u2192 publish" },
        ],
        correct: 3,
        explanation: "Safe workflow mein review aur approval explicit hain.",
        hint: "Focus on Prepare approved data \u2192 AI draft \u2192 verify \u2192 human approve \u2192 publish to answer this Generative AI concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 \u2014 Human-in-the-Loop Pipeline",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Prepare approved data", "Generate AI-assisted draft", "Validate facts and calculations", "Human approves before release"],
        shuffled: ["Human approves before release", "Validate facts and calculations", "Generate AI-assisted draft", "Prepare approved data"],
        expected: ["Prepare approved data", "Generate AI-assisted draft", "Validate facts and calculations", "Human approves before release"],
        hint: "Approval final release se pehle."
      },
      {
        id: 2,
        title: "Puzzle 2 \u2014 Make Workflow Repeatable",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Document inputs", "Document transformation steps", "Define validation tests", "Store approved outputs and logs"],
        shuffled: ["Store approved outputs and logs", "Define validation tests", "Document transformation steps", "Document inputs"],
        expected: ["Document inputs", "Document transformation steps", "Define validation tests", "Store approved outputs and logs"],
        hint: "Documented process future runs mein reuse hota hai."
      },
      {
        id: 3,
        title: "Puzzle 3 \u2014 Improve After Errors",
        prompt: "Cards ko sahi order mein tap karke arrange karo.",
        tokens: ["Record failed check", "Investigate root cause", "Update prompt or process", "Rerun validation"],
        shuffled: ["Rerun validation", "Update prompt or process", "Investigate root cause", "Record failed check"],
        expected: ["Record failed check", "Investigate root cause", "Update prompt or process", "Rerun validation"],
        hint: "Continuous improvement evidence-based ho."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "a human-in-the-loop workflow",
        meaning: "A process where people validate or approve importa..."
      },
      {
        id: 2,
        snippet: "What makes a workflow repeatable",
        meaning: "Consistent inputs, documented steps, validation ru..."
      },
      {
        id: 3,
        snippet: "Why include an approval gate",
        meaning: "It prevents unreviewed high-impact outputs from be..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Choose a Safe Workflow",
        scenario: "Company monthly AI-assisted report publish karti hai.",
        prompt: "Best process kaunsa hai?",
        expectedResponse: "A \u2014 Repeatable workflow mein checks aur approvals mandatory hain."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is a human-in-the-loop workflow?",
        sampleAnswer: "A process where people validate or approve important AI-assisted steps."
      },
      {
        id: 2,
        question: "What makes a workflow repeatable?",
        sampleAnswer: "Consistent inputs, documented steps, validation rules and saved results."
      },
      {
        id: 3,
        question: "Why include an approval gate?",
        sampleAnswer: "It prevents unreviewed high-impact outputs from being released."
      },
      {
        id: 4,
        question: "How can a team improve the workflow?",
        sampleAnswer: "Log failures, investigate causes, revise the process and retest."
      },
    ]
  },
};

export const TAB6_GENAI_QUESTION_BANK_BY_ID: Record<number, TopicQuestionBank> = {
  253: TAB6_GENAI_QUESTION_BANK["29.1"],
  173: TAB6_GENAI_QUESTION_BANK["29.1"],
  291: TAB6_GENAI_QUESTION_BANK["29.1"],
  254: TAB6_GENAI_QUESTION_BANK["29.2"],
  174: TAB6_GENAI_QUESTION_BANK["29.2"],
  292: TAB6_GENAI_QUESTION_BANK["29.2"],
  255: TAB6_GENAI_QUESTION_BANK["29.3"],
  175: TAB6_GENAI_QUESTION_BANK["29.3"],
  293: TAB6_GENAI_QUESTION_BANK["29.3"],
  256: TAB6_GENAI_QUESTION_BANK["29.4"],
  176: TAB6_GENAI_QUESTION_BANK["29.4"],
  294: TAB6_GENAI_QUESTION_BANK["29.4"],
  257: TAB6_GENAI_QUESTION_BANK["29.5"],
  177: TAB6_GENAI_QUESTION_BANK["29.5"],
  295: TAB6_GENAI_QUESTION_BANK["29.5"],
  258: TAB6_GENAI_QUESTION_BANK["29.6"],
  178: TAB6_GENAI_QUESTION_BANK["29.6"],
  296: TAB6_GENAI_QUESTION_BANK["29.6"],
  259: TAB6_GENAI_QUESTION_BANK["30.1"],
  179: TAB6_GENAI_QUESTION_BANK["30.1"],
  301: TAB6_GENAI_QUESTION_BANK["30.1"],
  260: TAB6_GENAI_QUESTION_BANK["30.2"],
  180: TAB6_GENAI_QUESTION_BANK["30.2"],
  302: TAB6_GENAI_QUESTION_BANK["30.2"],
  261: TAB6_GENAI_QUESTION_BANK["30.3"],
  181: TAB6_GENAI_QUESTION_BANK["30.3"],
  303: TAB6_GENAI_QUESTION_BANK["30.3"],
  262: TAB6_GENAI_QUESTION_BANK["30.4"],
  182: TAB6_GENAI_QUESTION_BANK["30.4"],
  304: TAB6_GENAI_QUESTION_BANK["30.4"],
  263: TAB6_GENAI_QUESTION_BANK["30.5"],
  183: TAB6_GENAI_QUESTION_BANK["30.5"],
  305: TAB6_GENAI_QUESTION_BANK["30.5"],
  264: TAB6_GENAI_QUESTION_BANK["30.6"],
  184: TAB6_GENAI_QUESTION_BANK["30.6"],
  306: TAB6_GENAI_QUESTION_BANK["30.6"],
  265: TAB6_GENAI_QUESTION_BANK["31.1"],
  185: TAB6_GENAI_QUESTION_BANK["31.1"],
  311: TAB6_GENAI_QUESTION_BANK["31.1"],
  266: TAB6_GENAI_QUESTION_BANK["31.2"],
  186: TAB6_GENAI_QUESTION_BANK["31.2"],
  312: TAB6_GENAI_QUESTION_BANK["31.2"],
  267: TAB6_GENAI_QUESTION_BANK["31.3"],
  187: TAB6_GENAI_QUESTION_BANK["31.3"],
  313: TAB6_GENAI_QUESTION_BANK["31.3"],
  268: TAB6_GENAI_QUESTION_BANK["31.4"],
  188: TAB6_GENAI_QUESTION_BANK["31.4"],
  314: TAB6_GENAI_QUESTION_BANK["31.4"],
  269: TAB6_GENAI_QUESTION_BANK["31.5"],
  189: TAB6_GENAI_QUESTION_BANK["31.5"],
  315: TAB6_GENAI_QUESTION_BANK["31.5"],
  270: TAB6_GENAI_QUESTION_BANK["31.6"],
  190: TAB6_GENAI_QUESTION_BANK["31.6"],
  316: TAB6_GENAI_QUESTION_BANK["31.6"],
  271: TAB6_GENAI_QUESTION_BANK["31.7"],
  191: TAB6_GENAI_QUESTION_BANK["31.7"],
  317: TAB6_GENAI_QUESTION_BANK["31.7"],
  272: TAB6_GENAI_QUESTION_BANK["32.1"],
  192: TAB6_GENAI_QUESTION_BANK["32.1"],
  321: TAB6_GENAI_QUESTION_BANK["32.1"],
  273: TAB6_GENAI_QUESTION_BANK["32.2"],
  193: TAB6_GENAI_QUESTION_BANK["32.2"],
  322: TAB6_GENAI_QUESTION_BANK["32.2"],
  274: TAB6_GENAI_QUESTION_BANK["32.3"],
  194: TAB6_GENAI_QUESTION_BANK["32.3"],
  323: TAB6_GENAI_QUESTION_BANK["32.3"],
  275: TAB6_GENAI_QUESTION_BANK["32.4"],
  195: TAB6_GENAI_QUESTION_BANK["32.4"],
  324: TAB6_GENAI_QUESTION_BANK["32.4"],
  276: TAB6_GENAI_QUESTION_BANK["32.5"],
  196: TAB6_GENAI_QUESTION_BANK["32.5"],
  325: TAB6_GENAI_QUESTION_BANK["32.5"],
  277: TAB6_GENAI_QUESTION_BANK["32.6"],
  197: TAB6_GENAI_QUESTION_BANK["32.6"],
  326: TAB6_GENAI_QUESTION_BANK["32.6"],
  278: TAB6_GENAI_QUESTION_BANK["32.7"],
  198: TAB6_GENAI_QUESTION_BANK["32.7"],
  327: TAB6_GENAI_QUESTION_BANK["32.7"],
  279: TAB6_GENAI_QUESTION_BANK["33.1"],
  199: TAB6_GENAI_QUESTION_BANK["33.1"],
  331: TAB6_GENAI_QUESTION_BANK["33.1"],
  280: TAB6_GENAI_QUESTION_BANK["33.2"],
  200: TAB6_GENAI_QUESTION_BANK["33.2"],
  332: TAB6_GENAI_QUESTION_BANK["33.2"],
  281: TAB6_GENAI_QUESTION_BANK["33.3"],
  201: TAB6_GENAI_QUESTION_BANK["33.3"],
  333: TAB6_GENAI_QUESTION_BANK["33.3"],
  282: TAB6_GENAI_QUESTION_BANK["33.4"],
  202: TAB6_GENAI_QUESTION_BANK["33.4"],
  334: TAB6_GENAI_QUESTION_BANK["33.4"],
  283: TAB6_GENAI_QUESTION_BANK["33.5"],
  203: TAB6_GENAI_QUESTION_BANK["33.5"],
  335: TAB6_GENAI_QUESTION_BANK["33.5"],
  284: TAB6_GENAI_QUESTION_BANK["33.6"],
  204: TAB6_GENAI_QUESTION_BANK["33.6"],
  336: TAB6_GENAI_QUESTION_BANK["33.6"],
  285: TAB6_GENAI_QUESTION_BANK["33.7"],
  205: TAB6_GENAI_QUESTION_BANK["33.7"],
  337: TAB6_GENAI_QUESTION_BANK["33.7"],
};