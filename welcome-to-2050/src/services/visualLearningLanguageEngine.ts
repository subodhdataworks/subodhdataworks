/**
 * FUTURE IT INDUSTRY — GLOBAL VISUAL LEARNING LANGUAGE ENGINE
 * 
 * Production-grade universal language standardizer for all courses, modules, topics,
 * lessons, visual notes, and AI Mentor speech narrations.
 * 
 * Standard:
 * - English Mode: Professional, concise, beginner-friendly English.
 * - Hindi Mode: Natural Hindi sentences + English technical terminology (Hinglish).
 * 
 * Rules:
 * 1. Technical terms, software vocabulary, and programming concepts MUST remain in English script
 *    (e.g., Rows, Columns, Data, Formula, Variable, Value, Table, Calculate, Function, Loop,
 *    Code, Input, Output, Cell, Workbook, Worksheet, Report, Chart, Dashboard, Query, Database,
 *    List, Dictionary, VLOOKUP, Pivot Table, Power Query, Python, Excel, SQL, Power BI, etc.).
 * 2. Never translate technical English terms into archaic pure Hindi (e.g. NOT "सूत्र", "तालिका", "पंक्तियों", "स्तंभों", "चर", "फलन").
 * 3. Never write technical terms phonetically in Devanagari (e.g. NOT "डेटा", "कॉलम्स", "रोज़", "फॉर्मूला", "वेरिएबल").
 * 4. Code snippets, formula syntax (=SUM, =VLOOKUP), SQL clauses, and symbol names are 100% preserved.
 */

function hindiWordReg(phrase: string): RegExp {
  const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Matches the exact word/phrase delimited by non-Devanagari/non-alphanumeric boundaries
  return new RegExp(`(?<![\\u0900-\\u097Fa-zA-Z0-9])${escaped}(?![\\u0900-\\u097Fa-zA-Z0-9])`, 'gu');
}

// ── Multi-word and compound phrases (processed first) ──
const COMPOUND_PHRASE_MAPPINGS: [RegExp, string][] = [
  [hindiWordReg('पंक्तियों और स्तंभों'), 'Rows और Columns'],
  [hindiWordReg('पंक्तियों व स्तंभों'), 'Rows व Columns'],
  [hindiWordReg('रोज़ और कॉलम्स'), 'Rows और Columns'],
  [hindiWordReg('रो और कॉलम'), 'Row और Column'],
  [hindiWordReg('रोज और कालम'), 'Rows और Columns'],
  [hindiWordReg('कच्चा डेटा'), 'Raw Data'],
  [hindiWordReg('कच्चे डेटा'), 'Raw Data'],
  [hindiWordReg('पिवट टेबल'), 'Pivot Table'],
  [hindiWordReg('पिवट टेबल्स'), 'Pivot Tables'],
  [hindiWordReg('पावर क्वेरी'), 'Power Query'],
  [hindiWordReg('पावर बीआई'), 'Power BI'],
  [hindiWordReg('मशीन लर्निंग'), 'Machine Learning'],
  [hindiWordReg('आर्टिफिशियल इंटेलिजेंस'), 'Artificial Intelligence (AI)'],
  [hindiWordReg('प्रॉम्प्ट इंजीनियरिंग'), 'Prompt Engineering'],
  [hindiWordReg('डेटा एनालिटिक्स'), 'Data Analytics'],
  [hindiWordReg('डेटा एनालिस्ट'), 'Data Analyst'],
  [hindiWordReg('डेटा साइंस'), 'Data Science'],
  [hindiWordReg('डेटा साइंटिस्ट'), 'Data Scientist'],
  [hindiWordReg('डेटा क्लीनिंग'), 'Data Cleaning'],
  [hindiWordReg('डेटा एनालिसिस'), 'Data Analysis'],
  [hindiWordReg('डेटा विज़ुअलाइज़ेशन'), 'Data Visualization'],
  [hindiWordReg('डेटा विजुअलाइजेशन'), 'Data Visualization'],
  [hindiWordReg('डेटा टाइप्स'), 'Data Types'],
  [hindiWordReg('डेटा टाइप'), 'Data Type'],
  [hindiWordReg('डेटा स्ट्रक्चर'), 'Data Structure'],
  [hindiWordReg('डेटा स्ट्रक्चर्स'), 'Data Structures'],
  [hindiWordReg('नेम बॉक्स'), 'Name Box'],
  [hindiWordReg('फॉर्मूला बार'), 'Formula Bar'],
  [hindiWordReg('फार्मूला बार'), 'Formula Bar'],
  [hindiWordReg('क्विक एक्सेस टूलबार'), 'Quick Access Toolbar'],
  [hindiWordReg('कंडीशनल फॉर्मेटिंग'), 'Conditional Formatting'],
  [hindiWordReg('ड्रॉप डाउन लिस्ट'), 'Dropdown List'],
  [hindiWordReg('ड्रॉप-डाउन लिस्ट'), 'Dropdown List'],
  [hindiWordReg('ड्रॉपडाउन लिस्ट'), 'Dropdown List'],
  [hindiWordReg('ड्रॉप-डाउन'), 'Dropdown'],
  [hindiWordReg('ड्रॉपडाउन'), 'Dropdown'],
  [hindiWordReg('डेटा वैलिडेशन'), 'Data Validation'],
  [hindiWordReg('रिमूव डुप्लीकेट्स'), 'Remove Duplicates'],
  [hindiWordReg('टेक्स्ट टू कॉलम्स'), 'Text to Columns'],
  [hindiWordReg('फ्लैश फिल'), 'Flash Fill'],
  [hindiWordReg('ऑटो सम'), 'AutoSum'],
  [hindiWordReg('ऑटोसम'), 'AutoSum'],
  [hindiWordReg('इंडेक्स और मैच'), 'INDEX and MATCH'],
  [hindiWordReg('इंडेक्स मैच'), 'INDEX MATCH'],
  [hindiWordReg('गोल सीक'), 'Goal Seek'],
  [hindiWordReg('व्हाट-इफ एनालिसिस'), 'What-If Analysis'],
  [hindiWordReg('सोर्स डेटा'), 'Source Data'],
  [hindiWordReg('मास्टर टेबल'), 'Master Table'],
  [hindiWordReg('टेबल एरे'), 'Table Array'],
  [hindiWordReg('कॉलम इंडेक्स'), 'Column Index'],
  [hindiWordReg('लुकअप वैल्यू'), 'Lookup Value'],
  [hindiWordReg('लुकअप एरे'), 'Lookup Array'],
  [hindiWordReg('बाइनरी सर्च'), 'Binary Search'],
  [hindiWordReg('लीनियर सर्च'), 'Linear Search'],
  [hindiWordReg('टाइम कॉम्प्लेक्सिटी'), 'Time Complexity'],
  [hindiWordReg('स्पेस कॉम्प्लेक्सिटी'), 'Space Complexity'],
  [hindiWordReg('लिंक्ड लिस्ट'), 'Linked List'],
  [hindiWordReg('बाइनरी ट्री'), 'Binary Tree'],
  [hindiWordReg('प्राइमरी की'), 'Primary Key'],
  [hindiWordReg('फॉरेन की'), 'Foreign Key'],
  [hindiWordReg('ग्रुप बाय'), 'GROUP BY'],
  [hindiWordReg('ऑर्डर बाय'), 'ORDER BY'],
  [hindiWordReg('कैलकुलेटेड कॉलम'), 'Calculated Column'],
  [hindiWordReg('सुपरवाइज्ड लर्निंग'), 'Supervised Learning'],
  [hindiWordReg('अनसुपरवाइज्ड लर्निंग'), 'Unsupervised Learning'],
  [hindiWordReg('न्यूरल नेटवर्क'), 'Neural Network'],
  [hindiWordReg('डीप लर्निंग'), 'Deep Learning'],
  [hindiWordReg('मॉडल ट्रेनिंग'), 'Model Training'],
  [hindiWordReg('नेस्टेड लूप्स'), 'Nested Loops'],
  [hindiWordReg('नेस्टेड लूप'), 'Nested Loop'],
  [hindiWordReg('नेस्टेड इफ'), 'Nested IF'],
  [hindiWordReg('फॉर लूप'), 'For Loop'],
  [hindiWordReg('व्हाइल लूप'), 'While Loop'],
  [hindiWordReg('लिस्ट कॉम्प्रिहेंशन'), 'List Comprehension'],
  [hindiWordReg('बिल्ट-इन फंक्शंस'), 'Built-in Functions'],
  [hindiWordReg('बिल्ट-इन फंक्शन'), 'Built-in Function'],
  [hindiWordReg('यूजर इनपुट'), 'User Input'],
  [hindiWordReg('कंसोल आउटपुट'), 'Console Output'],
  [hindiWordReg('टेस्ट केस'), 'Test Case'],
  [hindiWordReg('टेस्ट केसेस'), 'Test Cases'],
  [hindiWordReg('ग्राहक का डेटा'), 'Customer Data'],
  [hindiWordReg('ग्राहकों का डेटा'), 'Customers Data'],
  [hindiWordReg('ग्राहकों की जानकारी'), 'Customers Data'],
  [hindiWordReg('कुल बिक्री'), 'Total Sales'],
  [hindiWordReg('कुल योग'), 'Total Sum'],
  [hindiWordReg('परिणाम निकालें'), 'Result निकालें'],
  [hindiWordReg('गणना करें'), 'Calculate करें'],
  [hindiWordReg('उपयोग करके'), 'use करके'],
  [hindiWordReg('इस्तेमाल करके'), 'use करके'],
  [hindiWordReg('उपयोग करें'), 'use करें'],
  [hindiWordReg('इस्तेमाल करें'), 'use करें'],
  [hindiWordReg('प्राप्त करें'), 'fetch करें'],
  [hindiWordReg('व्यवस्थित करके'), 'organize करके'],
  [hindiWordReg('व्यवस्थित करें'), 'organize करें'],
];

// ── Single technical term mappings ──
const SINGLE_TERM_MAPPINGS: [RegExp, string][] = [
  // Pure Hindi words to standard English technical terms
  [hindiWordReg('पंक्तियों'), 'Rows'],
  [hindiWordReg('पंक्तियां'), 'Rows'],
  [hindiWordReg('पंक्तियाँ'), 'Rows'],
  [hindiWordReg('पंक्ति'), 'Row'],
  [hindiWordReg('स्तंभों'), 'Columns'],
  [hindiWordReg('स्तंभ'), 'Column'],
  [hindiWordReg('सूत्रों'), 'Formulas'],
  [hindiWordReg('सूत्र'), 'Formula'],
  [hindiWordReg('तालिकाओं'), 'Tables'],
  [hindiWordReg('तालिका'), 'Table'],
  [hindiWordReg('चरों'), 'Variables'],
  [hindiWordReg('चर'), 'Variable'],
  [hindiWordReg('मानों'), 'Values'],
  [hindiWordReg('मान'), 'Value'],
  [hindiWordReg('फलनों'), 'Functions'],
  [hindiWordReg('फलन'), 'Function'],
  [hindiWordReg('पुनरावृत्ति'), 'Loop'],
  [hindiWordReg('सूचियों'), 'Lists'],
  [hindiWordReg('सूची'), 'List'],
  [hindiWordReg('शब्दकोशों'), 'Dictionaries'],
  [hindiWordReg('शब्दकोश'), 'Dictionary'],
  [hindiWordReg('त्रुटियों'), 'Errors'],
  [hindiWordReg('त्रुटि'), 'Error'],
  [hindiWordReg('अनुक्रमणिका'), 'Index'],
  [hindiWordReg('पूर्णांक'), 'Integer'],
  [hindiWordReg('तार्किक'), 'Logical'],
  [hindiWordReg('गणनाओं'), 'Calculations'],
  [hindiWordReg('गणना'), 'Calculation'],

  // Phonetic Devanagari to standard English technical terms
  [hindiWordReg('डेटा'), 'Data'],
  [hindiWordReg('डाटा'), 'Data'],
  [hindiWordReg('टेबल्स'), 'Tables'],
  [hindiWordReg('टेबल'), 'Table'],
  [hindiWordReg('डेटाबेस'), 'Database'],
  [hindiWordReg('डेटाबेसों'), 'Databases'],
  [hindiWordReg('डेटासेट'), 'Dataset'],
  [hindiWordReg('डेटासेट्स'), 'Datasets'],
  [hindiWordReg('क्वेरी'), 'Query'],
  [hindiWordReg('क्वेरीज'), 'Queries'],
  [hindiWordReg('क्वेरीज़'), 'Queries'],
  [hindiWordReg('रोज़'), 'Rows'],
  [hindiWordReg('रो'), 'Row'],
  [hindiWordReg('कॉलम्स'), 'Columns'],
  [hindiWordReg('कॉलम'), 'Column'],
  [hindiWordReg('सेल्स'), 'Cells'],
  [hindiWordReg('सेल'), 'Cell'],
  [hindiWordReg('ग्रिड'), 'Grid'],
  [hindiWordReg('स्प्रेडशीट'), 'Spreadsheet'],
  [hindiWordReg('स्प्रेडशीट्स'), 'Spreadsheets'],
  [hindiWordReg('वर्कबुक्स'), 'Workbooks'],
  [hindiWordReg('वर्कबुक'), 'Workbook'],
  [hindiWordReg('वर्कशीट्स'), 'Worksheets'],
  [hindiWordReg('वर्कशीट'), 'Worksheet'],
  [hindiWordReg('रिबन'), 'Ribbon'],
  [hindiWordReg('टूलबार'), 'Toolbar'],
  [hindiWordReg('हेडर्स'), 'Headers'],
  [hindiWordReg('हेडर'), 'Header'],
  [hindiWordReg('फूटर्स'), 'Footers'],
  [hindiWordReg('फूटर'), 'Footer'],

  // Formulas & Functions
  [hindiWordReg('फॉर्मूलों'), 'Formulas'],
  [hindiWordReg('फॉर्मूले'), 'Formulas'],
  [hindiWordReg('फॉर्मूला'), 'Formula'],
  [hindiWordReg('फार्मूला'), 'Formula'],
  [hindiWordReg('फार्मूलों'), 'Formulas'],
  [hindiWordReg('फ़ंक्शंस'), 'Functions'],
  [hindiWordReg('फंक्शंस'), 'Functions'],
  [hindiWordReg('फ़ंक्शन'), 'Function'],
  [hindiWordReg('फंक्शन'), 'Function'],
  [hindiWordReg('पैरामीटर्स'), 'Parameters'],
  [hindiWordReg('पैरामीटर'), 'Parameter'],
  [hindiWordReg('आर्ग्युमेंट्स'), 'Arguments'],
  [hindiWordReg('आर्ग्युमेंट'), 'Argument'],
  [hindiWordReg('सिंटैक्स'), 'Syntax'],
  [hindiWordReg('कैलकुलेशन'), 'Calculation'],
  [hindiWordReg('कैलकुलेट'), 'Calculate'],
  [hindiWordReg('सॉर्टिंग'), 'Sorting'],
  [hindiWordReg('सॉर्ट'), 'Sort'],
  [hindiWordReg('फ़िल्टरिंग'), 'Filtering'],
  [hindiWordReg('फिल्टरिंग'), 'Filtering'],
  [hindiWordReg('फ़िल्टर्स'), 'Filters'],
  [hindiWordReg('फिल्टर्स'), 'Filters'],
  [hindiWordReg('फ़िल्टर'), 'Filter'],
  [hindiWordReg('फिल्टर'), 'Filter'],
  [hindiWordReg('कंडीशन'), 'Condition'],
  [hindiWordReg('कंडीशन्स'), 'Conditions'],
  [hindiWordReg('कंडीशनल'), 'Conditional'],
  [hindiWordReg('फॉर्मेटिंग'), 'Formatting'],
  [hindiWordReg('फॉर्मेट'), 'Format'],

  // Lookups & Advanced Tools
  [hindiWordReg('वीलुकअप'), 'VLOOKUP'],
  [hindiWordReg('एक्सलुकअप'), 'XLOOKUP'],
  [hindiWordReg('एचलुकअप'), 'HLOOKUP'],
  [hindiWordReg('लुकअप'), 'Lookup'],
  [hindiWordReg('पिवट'), 'Pivot'],
  [hindiWordReg('स्लाइसर्स'), 'Slicers'],
  [hindiWordReg('स्लाइसर'), 'Slicer'],
  [hindiWordReg('वैलिडेशन'), 'Validation'],
  [hindiWordReg('डुप्लीकेट्स'), 'Duplicates'],
  [hindiWordReg('डुप्लीकेट'), 'Duplicate'],

  // Charts & Visualizations
  [hindiWordReg('चार्ट्स'), 'Charts'],
  [hindiWordReg('चार्ट'), 'Chart'],
  [hindiWordReg('ग्राफ्स'), 'Graphs'],
  [hindiWordReg('ग्राफ'), 'Graph'],
  [hindiWordReg('ग्राफ़'), 'Graph'],
  [hindiWordReg('डैशबोर्ड्स'), 'Dashboards'],
  [hindiWordReg('डैशबोर्ड'), 'Dashboard'],
  [hindiWordReg('विज़ुअलाइज़ेशन'), 'Visualization'],
  [hindiWordReg('विज़ुअलाइज़'), 'Visualize'],
  [hindiWordReg('विजुअलाइजेशन'), 'Visualization'],
  [hindiWordReg('विजुअल'), 'Visual'],
  [hindiWordReg('ट्रेंड्स'), 'Trends'],
  [hindiWordReg('ट्रेंड'), 'Trend'],
  [hindiWordReg('स्पार्कलाइन्स'), 'Sparklines'],

  // Programming & Python
  [hindiWordReg('पायथन'), 'Python'],
  [hindiWordReg('पाइथन'), 'Python'],
  [hindiWordReg('एक्सेल'), 'Excel'],
  [hindiWordReg('एसक्यूएल'), 'SQL'],
  [hindiWordReg('प्रोग्रामिंग'), 'Programming'],
  [hindiWordReg('प्रोग्राम्स'), 'Programs'],
  [hindiWordReg('प्रोग्राम'), 'Program'],
  [hindiWordReg('कोडिंग'), 'Coding'],
  [hindiWordReg('कोड'), 'Code'],
  [hindiWordReg('वेरिएबल्स'), 'Variables'],
  [hindiWordReg('वेरिएबल'), 'Variable'],
  [hindiWordReg('लूप्स'), 'Loops'],
  [hindiWordReg('लूप'), 'Loop'],
  [hindiWordReg('स्ट्रिंग्स'), 'Strings'],
  [hindiWordReg('स्ट्रिंग'), 'String'],
  [hindiWordReg('इंटीजर्स'), 'Integers'],
  [hindiWordReg('इंटीजर'), 'Integer'],
  [hindiWordReg('फ्लोट्स'), 'Floats'],
  [hindiWordReg('फ्लोट'), 'Float'],
  [hindiWordReg('बूलियन'), 'Boolean'],
  [hindiWordReg('लिस्ट्स'), 'Lists'],
  [hindiWordReg('लिस्ट'), 'List'],
  [hindiWordReg('डिक्शनरीज़'), 'Dictionaries'],
  [hindiWordReg('डिक्शनरी'), 'Dictionary'],
  [hindiWordReg('ट्यूपल्स'), 'Tuples'],
  [hindiWordReg('ट्यूपल'), 'Tuple'],
  [hindiWordReg('सेट्स'), 'Sets'],
  [hindiWordReg('सेट'), 'Set'],
  [hindiWordReg('एरेज़'), 'Arrays'],
  [hindiWordReg('एरे'), 'Array'],
  [hindiWordReg('ऐरे'), 'Array'],
  [hindiWordReg('ऑपरेटर्स'), 'Operators'],
  [hindiWordReg('ऑपरेटर'), 'Operator'],
  [hindiWordReg('स्टेटमेंट्स'), 'Statements'],
  [hindiWordReg('स्टेटमेंट'), 'Statement'],
  [hindiWordReg('इंडेक्सिंग'), 'Indexing'],
  [hindiWordReg('स्लाइसिंग'), 'Slicing'],
  [hindiWordReg('इंडेक्स'), 'Index'],
  [hindiWordReg('मॉड्यूल्स'), 'Modules'],
  [hindiWordReg('मॉड्यूल'), 'Module'],
  [hindiWordReg('पैकेजेस'), 'Packages'],
  [hindiWordReg('पैकेज'), 'Package'],
  [hindiWordReg('लाइब्रेरीज़'), 'Libraries'],
  [hindiWordReg('लाइब्रेरी'), 'Library'],
  [hindiWordReg('ऑब्जेक्ट्स'), 'Objects'],
  [hindiWordReg('ऑब्जेक्ट'), 'Object'],
  [hindiWordReg('क्लासेस'), 'Classes'],
  [hindiWordReg('क्लास'), 'Class'],
  [hindiWordReg('मेथड्स'), 'Methods'],
  [hindiWordReg('मेथड'), 'Method'],
  [hindiWordReg('एरर्स'), 'Errors'],
  [hindiWordReg('एरर'), 'Error'],
  [hindiWordReg('डीबगिंग'), 'Debugging'],
  [hindiWordReg('डीबग'), 'Debug'],
  [hindiWordReg('एक्सेप्शन'), 'Exception'],
  [hindiWordReg('कंपाइलर'), 'Compiler'],
  [hindiWordReg('इंटरप्रेटर'), 'Interpreter'],
  [hindiWordReg('कंसोल'), 'Console'],
  [hindiWordReg('टर्मिनल'), 'Terminal'],
  [hindiWordReg('कीवर्ड्स'), 'Keywords'],
  [hindiWordReg('कीवर्ड'), 'Keyword'],

  // Input, Output, Results, Execution
  [hindiWordReg('इनपुट'), 'Input'],
  [hindiWordReg('आउटपुट'), 'Output'],
  [hindiWordReg('रिजल्ट्स'), 'Results'],
  [hindiWordReg('रिजल्ट'), 'Result'],
  [hindiWordReg('वैल्यूज'), 'Values'],
  [hindiWordReg('वैल्यू'), 'Value'],
  [hindiWordReg('रिटर्न'), 'Return'],
  [hindiWordReg('एग्जीक्यूट'), 'Execute'],
  [hindiWordReg('एग्जीक्यूशन'), 'Execution'],
  [hindiWordReg('असाइन'), 'Assign'],
  [hindiWordReg('असाइनमेंट'), 'Assignment'],

  // Analytics, AI & Tools
  [hindiWordReg('एनालिटिक्स'), 'Analytics'],
  [hindiWordReg('एनालिस्ट्स'), 'Analysts'],
  [hindiWordReg('एनालिस्ट'), 'Analyst'],
  [hindiWordReg('एनालाइज़'), 'Analyze'],
  [hindiWordReg('एनालाइज'), 'Analyze'],
  [hindiWordReg('प्रॉम्प्ट'), 'Prompt'],
  [hindiWordReg('टोकन'), 'Token'],
  [hindiWordReg('एल्गोरिदम'), 'Algorithm'],
  [hindiWordReg('एल्गोरिदम्स'), 'Algorithms'],
  [hindiWordReg('मैट्रिक्स'), 'Matrix'],
  [hindiWordReg('वेक्टर'), 'Vector'],
  [hindiWordReg('मॉडल'), 'Model'],
  [hindiWordReg('मॉडल्स'), 'Models'],
  [hindiWordReg('मॉडलिंग'), 'Modeling'],
  [hindiWordReg('ट्रेनिंग'), 'Training'],
  [hindiWordReg('टेस्टिंग'), 'Testing'],
  [hindiWordReg('फीचर'), 'Feature'],
  [hindiWordReg('फीचर्स'), 'Features'],
  [hindiWordReg('एक्यूरेसी'), 'Accuracy'],
  [hindiWordReg('लॉस'), 'Loss'],

  // SQL & Databases
  [hindiWordReg('जॉइन्स'), 'Joins'],
  [hindiWordReg('जॉइन'), 'Join'],
  [hindiWordReg('क्लॉजेस'), 'Clauses'],
  [hindiWordReg('क्लॉज'), 'Clause'],
  [hindiWordReg('एग्रीगेशन'), 'Aggregation'],
  [hindiWordReg('एग्रीगेट'), 'Aggregate'],
  [hindiWordReg('सिलेक्ट'), 'SELECT'],
  [hindiWordReg('इंसर्ट'), 'INSERT'],
  [hindiWordReg('अपडेट'), 'UPDATE'],
  [hindiWordReg('डिलीट'), 'DELETE'],

  // Power BI & DAX
  [hindiWordReg('मेजर्स'), 'Measures'],
  [hindiWordReg('मेजर'), 'Measure'],
  [hindiWordReg('रिलेशनशिप्स'), 'Relationships'],
  [hindiWordReg('रिलेशनशिप'), 'Relationship'],
  [hindiWordReg('डैक्स'), 'DAX'],

  // DSA
  [hindiWordReg('स्टैक्स'), 'Stacks'],
  [hindiWordReg('स्टैक'), 'Stack'],
  [hindiWordReg('क्यूज'), 'Queues'],
  [hindiWordReg('क्यू'), 'Queue'],
  [hindiWordReg('नोड्स'), 'Nodes'],
  [hindiWordReg('नोड'), 'Node'],
  [hindiWordReg('रिकर्शन'), 'Recursion'],
  [hindiWordReg('नेस्टेड'), 'Nested'],
  [hindiWordReg('मॉड्यूलस'), 'Modulus'],
  [hindiWordReg('प्रिंटिंग'), 'Printing'],
  [hindiWordReg('प्रिंट'), 'Print'],
  [hindiWordReg('इटरेशन'), 'Iteration'],
  [hindiWordReg('इटरेट'), 'Iterate'],
  [hindiWordReg('इम्पोर्ट'), 'Import'],
  [hindiWordReg('इंपोर्ट'), 'Import'],
  [hindiWordReg('स्कोप'), 'Scope'],
  [hindiWordReg('ग्लोबल'), 'Global'],
  [hindiWordReg('लोकल'), 'Local'],
  [hindiWordReg('रिकर्सिव'), 'Recursive'],
  [hindiWordReg('बेस केस'), 'Base Case'],
  [hindiWordReg('टाइप हिंटिंग'), 'Type Hinting'],

  // General Software & Project Terms
  [hindiWordReg('प्रोजेक्ट्स'), 'Projects'],
  [hindiWordReg('प्रोजेक्ट'), 'Project'],
  [hindiWordReg('चैलेंजेस'), 'Challenges'],
  [hindiWordReg('चैलेंज'), 'Challenge'],
  [hindiWordReg('टास्क'), 'Task'],
  [hindiWordReg('टास्क्स'), 'Tasks'],
  [hindiWordReg('रिपोर्ट्स'), 'Reports'],
  [hindiWordReg('रिपोर्ट'), 'Report'],
  [hindiWordReg('कस्टमर्स'), 'Customers'],
  [hindiWordReg('कस्टमर'), 'Customer'],
  [hindiWordReg('क्लाइंट्स'), 'Clients'],
  [hindiWordReg('क्लाइंट'), 'Client'],
  [hindiWordReg('ऑर्डर्स'), 'Orders'],
  [hindiWordReg('ऑर्डर'), 'Order'],
  [hindiWordReg('इन्वेंटरी'), 'Inventory'],
  [hindiWordReg('रेवेन्यू'), 'Revenue'],
  [hindiWordReg('सेल्स'), 'Sales'],
  [hindiWordReg('कंप्यूटर'), 'Computer'],
  [hindiWordReg('सॉफ्टवेयर'), 'Software'],
  [hindiWordReg('हार्डवेयर'), 'Hardware'],
  [hindiWordReg('ब्राउज़र'), 'Browser'],
  [hindiWordReg('वेबसाइट'), 'Website'],
  [hindiWordReg('एप्लीकेशन'), 'Application'],
  [hindiWordReg('इंटरफेस'), 'Interface'],
  [hindiWordReg('बटन'), 'Button'],
  [hindiWordReg('आइकन'), 'Icon'],
  [hindiWordReg('मेनू'), 'Menu'],
  [hindiWordReg('मेन्यू'), 'Menu'],
  [hindiWordReg('फाइल्स'), 'Files'],
  [hindiWordReg('फ़ाइल्स'), 'Files'],
  [hindiWordReg('फाइल'), 'File'],
  [hindiWordReg('फ़ाइल'), 'File'],
  [hindiWordReg('फोल्डर्स'), 'Folders'],
  [hindiWordReg('फोल्डर'), 'Folder'],
  [hindiWordReg('रिफ्रेश'), 'Refresh'],
  [hindiWordReg('ऑडिट'), 'Audit'],
  [hindiWordReg('सत्यापन'), 'Verification'],
];

export class VisualLearningLanguageEngine {
  /**
   * Standardizes any Hindi educational text into professional, natural Hinglish:
   * Hindi grammar + English technical terminology.
   */
  public standardizeHinglish(text: string): string {
    if (!text || typeof text !== 'string') return text;

    let result = text;

    // 1. Process compound and multi-word phrases first
    for (const [pattern, replacement] of COMPOUND_PHRASE_MAPPINGS) {
      result = result.replace(pattern, replacement);
    }

    // 2. Process single technical terms
    for (const [pattern, replacement] of SINGLE_TERM_MAPPINGS) {
      result = result.replace(pattern, replacement);
    }

    // 3. Normalization of common educational patterns
    result = result
      .replace(/\(\s*([A-Za-z0-9_\s]+)\s*\)\s*का\s+use/g, '$1 का use')
      .replace(/[ ]{2,}/g, ' ')
      .trim();

    return result;
  }

  /**
   * Universal Content Formatter:
   * - If English: preserves clean professional English.
   * - If Hindi: converts to natural Hinglish with preserved English technical terms.
   */
  public formatEducationalContent(content: string, language: 'hindi' | 'english'): string {
    if (!content) return '';
    if (language === 'english') {
      return content.trim();
    }
    return this.standardizeHinglish(content);
  }

  /**
   * Speech Synthesis Optimizer:
   * Ensures natural inflection and prevents speech engines from choking on
   * mixed Devanagari and English words by ensuring clean whitespace and proper phrasing.
   */
  public getSpeechText(text: string, language: 'hindi' | 'english'): string {
    if (!text) return '';
    if (language === 'english') return text.trim();

    const hinglish = this.standardizeHinglish(text);

    // Ensure English keywords have clean spacing so Hindi TTS engines articulate them cleanly
    return hinglish
      .replace(/([a-zA-Z0-9_]+)\s*([।,;:?!])/g, '$1 $2')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }

  /**
   * Validates educational text against the Universal Language Standard
   */
  public auditText(text: string): { compliant: boolean; issues: string[]; corrected: string } {
    if (!text) return { compliant: true, issues: [], corrected: '' };

    const issues: string[] = [];
    const forbiddenPatterns = [
      { pattern: hindiWordReg('पंक्तियों'), label: 'Pure Hindi rows ("पंक्तियों") instead of English "Rows"' },
      { pattern: hindiWordReg('स्तंभों'), label: 'Pure Hindi columns ("स्तंभों") instead of English "Columns"' },
      { pattern: hindiWordReg('पंक्ति'), label: 'Pure Hindi row ("पंक्ति") instead of English "Row"' },
      { pattern: hindiWordReg('स्तंभ'), label: 'Pure Hindi column ("स्तंभ") instead of English "Column"' },
      { pattern: hindiWordReg('सूत्र'), label: 'Pure Hindi formula ("सूत्र") instead of English "Formula"' },
      { pattern: hindiWordReg('तालिका'), label: 'Pure Hindi table ("तालिका") instead of English "Table"' },
      { pattern: hindiWordReg('चर'), label: 'Pure Hindi variable ("चर") instead of English "Variable"' },
      { pattern: hindiWordReg('फलन'), label: 'Pure Hindi function ("फलन") instead of English "Function"' },
      { pattern: hindiWordReg('डेटा'), label: 'Devanagari phonetic "डेटा" instead of English "Data"' },
      { pattern: hindiWordReg('कॉलम'), label: 'Devanagari phonetic "कॉलम" instead of English "Columns"' },
      { pattern: hindiWordReg('कॉलम्स'), label: 'Devanagari phonetic "कॉलम्स" instead of English "Columns"' },
      { pattern: hindiWordReg('रोज़'), label: 'Devanagari phonetic "रोज़" instead of English "Rows"' },
      { pattern: hindiWordReg('फॉर्मूला'), label: 'Devanagari phonetic "फॉर्मूला" instead of English "Formula"' },
      { pattern: hindiWordReg('फॉर्मूलों'), label: 'Devanagari phonetic "फॉर्मूलों" instead of English "Formulas"' },
      { pattern: hindiWordReg('फंक्शन'), label: 'Devanagari phonetic "फंक्शन" instead of English "Function"' },
      { pattern: hindiWordReg('फ़ंक्शन'), label: 'Devanagari phonetic "फ़ंक्शन" instead of English "Function"' },
      { pattern: hindiWordReg('वेरिएबल'), label: 'Devanagari phonetic "वेरिएबल" instead of English "Variable"' },
      { pattern: hindiWordReg('लूप'), label: 'Devanagari phonetic "लूप" instead of English "Loop"' },
    ];

    for (const item of forbiddenPatterns) {
      if (item.pattern.test(text)) {
        issues.push(item.label);
      }
    }

    const corrected = this.standardizeHinglish(text);
    return {
      compliant: issues.length === 0,
      issues,
      corrected,
    };
  }
}

export const languageEngine = new VisualLearningLanguageEngine();
