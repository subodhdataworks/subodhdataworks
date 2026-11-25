import type { VisualNoteBlock } from './StructuredVisualNotesRenderer';

const ALREADY_HINGLISH_RE =
  /[\u0900-\u097F]|\b(hai|hain|mein|karna|karta|karti|karte|hota|hoti|hote|aap|hum|samjhein|samjhte|samajhna|sudhārna|sudharna|bikhre|lena|nikalna|dekhiye|chaliye|seekhenge|zaroori|matlab|yaani|kyunki|taaki|isse|jaise|wala|wali|bhi|aur|nahi|kaun|kiske|kahan|kaise)\b/i;

export type SubjectDomain =
  | 'data_analytics'
  | 'data_science'
  | 'excel'
  | 'sql'
  | 'python'
  | 'power_bi'
  | 'machine_learning'
  | 'generative_ai'
  | 'agentic_ai';

/**
 * Automatically detects the exact subject domain from module, topic title, and section content
 * so the AI Mentor adapts her real-world analogies and technical explanations to the subject.
 */
export function detectSubjectDomain(
  topicTitle: string,
  sectionTitle: string = '',
  moduleCode: string = ''
): SubjectDomain {
  const combined = `${moduleCode} ${topicTitle} ${sectionTitle}`.toLowerCase();

  if (/\b(agentic|agent|multi-agent|tool calling|memory|planner|autonomy|crew|langgraph)\b/i.test(combined)) {
    return 'agentic_ai';
  }
  if (/\b(gen\s*ai|generative ai|prompt|token|embedding|llm|rag|hallucination|transformer|chatgpt|claude)\b/i.test(combined)) {
    return 'generative_ai';
  }
  if (/\b(machine learning|supervised|unsupervised|regression|classification|clustering|overfitting|underfitting|gradient descent|neural network|deep learning|decision tree|random forest|xgboost|feature engineering)\b/i.test(combined)) {
    return 'machine_learning';
  }
  if (/\b(power\s*bi|dax|power query|dashboard|data model|star schema|slicer|measure|calculated column|kpi card)\b/i.test(combined)) {
    return 'power_bi';
  }
  if (/\b(sql|select|where|group by|having|order by|inner join|left join|right join|join|primary key|foreign key|subquery|cte|window function|database table)\b/i.test(combined)) {
    return 'sql';
  }
  if (/\b(excel|vlookup|xlookup|hlookup|pivot table|workbook|worksheet|spreadsheet|cell address|name box|formula bar|conditional formatting|sumif|countif|index match)\b/i.test(combined)) {
    return 'excel';
  }
  if (/\b(python|programming|variable|data type|integer|float|string|boolean|if else|elif|for loop|while loop|function|def |list|dictionary|tuple|pandas|numpy|matplotlib|dataframe)\b/i.test(combined)) {
    return 'python';
  }
  if (/\b(data science|statistics|probability|hypothesis|variance|standard deviation|distribution|correlation|experiment|a\/b test|eta|prediction)\b/i.test(combined) || /^ds/i.test(moduleCode)) {
    return 'data_science';
  }
  return 'data_analytics';
}

const EXACT_PHRASE_MAP: [RegExp, string][] = [
  // Common Visual Notes section pills & headings
  [/^The five-stage analytics journey$/i, 'Data Analytics Ke 5 Zaroori Steps'],
  [/^How Does Data Science Work\?\s*\(5-Step Visual Flow\)$/i, 'Data Science Kaise Kaam Karta Hai? (5-Step Flow)'],
  [/^Real-Life Examples$/i, 'Real-Life Examples (Asli Duniya Ke Examples)'],
  [/^Real-Life Examples Across Major Industries$/i, 'Major Industries Mein Real-Life Examples'],
  [/^Why Is It Important\?$/i, 'Why Is It Important? (Ye Kyon Zaroori Hai?)'],
  [/^The 3 Core Pillars of Data Science$/i, 'Data Science Ke 3 Core Pillars'],
  [/^Before vs After:\s*What Happens Without Data Science\?$/i, 'Before vs After: Bina Data Science Ke Kya Hota Hai?'],
  [/^Sample Dataset:\s*(.+)$/i, 'Sample Dataset: $1 ( Example Table )'],
  [/^Two Different Ways to Flag At-Risk Students$/i, 'At-Risk Students Pehchanne Ke 2 Tareeke'],
  [/^Formula & Python Code Explanation\s*\(Input\s*→\s*Output\)$/i, 'Formula & Python Code Explanation (Input → Output)'],
  [/^Common Beginner Mistakes vs Pro Best Practices$/i, 'Common Beginner Mistakes vs Pro Best Practices'],
  [/^Key Takeaways From This Lesson$/i, 'Is Lesson Ke Key Takeaways'],
  [/^Think of an online shop$/i, 'Ek Online Shop Ka Real-Life Example'],
  [/^Example:\s*a small order dataset$/i, 'Example: Ek Chhota Order Dataset'],
  [/^What You Will Learn$/i, 'Is Topic Mein Aap Kya Seekhenge'],
  [/^Key Takeaways?$/i, 'Sabse Zaroori Points (Key Takeaways)'],
  [/^Common Mistakes?$/i, 'Aam Galtiyan Jinse Bachna Hai'],
  [/^Visual Process$/i, 'Visual Process (Step-by-Step Flow)'],
  [/^Step-by-Step\s+(.+)\s+Procedure$/i, 'Step-by-Step $1 Tareeka'],
  [/^Sample\s+(.+)$/i, 'Sample $1 (Real Example)'],
  [/^Real-?World Example$/i, 'Real-World Office Example'],
  [/^Practice Checklist$/i, 'Practice Checklist (Khud Try Karein)'],
  [/^How It Works$/i, 'Ye Kaise Kaam Karta Hai?'],
  [/^Why It Matters$/i, 'Ye Kyon Zaroori Hai?'],
  [/^Quick Summary$/i, 'Quick Summary (Ek Nazar Mein)'],
  [/^Core Concept$/i, 'Core Concept (Asli Matlab)'],
  [/^TURN RAW DATA INTO BETTER DECISIONS$/i, 'RAW DATA SE BETTER DECISIONS BANAYEIN'],
  [/^SEE HOW AN ANALYST FINDS AN ANSWER$/i, 'DEKHEIN EK ANALYST ANSWER KAISE DHOONDHTA HAI'],
  [/^BEHIND THE SCENES OF EVERYDAY APPS AND SERVICES$/i, 'ROZMARRA KE APPS KE PEECHE KA DATA SCIENCE SYSTEM'],
  [/^GIVING CLEAR,\s*STEP-BY-STEP INSTRUCTIONS TO A COMPUTER$/i, 'COMPUTER KO CLEAR STEP-BY-STEP INSTRUCTIONS DENA'],
];

const BODY_PHRASE_REPLACEMENTS: [RegExp, string][] = [
  [/\bis a structured process where we collect and clean\b/gi, 'ek structured process hai jisme hum collect aur clean karte hain'],
  [/\banalyze patterns using\b/gi, 'patterns ko analyze karte hain using'],
  [/\bextract useful\b/gi, 'useful'],
  [/\band make better\b/gi, 'nikalte hain aur better'],
  [/\bis the process of studying\b/gi, 'ek aisa process hai jisme hum study karte hain'],
  [/\bis the process of\b/gi, 'ek aisa process hai jisme'],
  [/\bis the skill of writing clear,\s*step-by-step instructions that a computer can follow to solve a problem\b/gi, 'ek aisi skill hai jisme hum computer ke liye clear, step-by-step instructions likhte hain taaki woh kisi problem ko solve kar sake'],
  [/\bis an essential\b/gi, 'ek bahut zaroori'],
  [/\bto answer questions,\s*find useful patterns,\s*and support decisions\b/gi, 'taaki business questions ka answer mil sake, useful patterns dikhein, aur sahi decisions liye ja sakein'],
  [/\bturns those raw facts into information a person can use\b/gi, 'in raw facts ko aisi useful information mein badal deta hai jise koi bhi decision lene ke liye use kar sake'],
  [/\bCollect records from business activity\b/gi, 'Business activity se saare records collect karna'],
  [/\bFix errors and missing values\b/gi, 'Galtiyon aur missing values ko sudhārna'],
  [/\bCompare,\s*count,\s*and find patterns\b/gi, 'Compare aur count karke important patterns samajhna'],
  [/\bExplain what the results mean\b/gi, 'Simple bhasha mein samjhana ki results ka kya matlab hai'],
  [/\bChoose a useful next action\b/gi, 'Sahi aur useful next business action lena'],
  [/\bScattered raw facts & logs\b/gi, 'Bikhre hue raw data aur logs'],
  [/\bFixing missing values & errors\b/gi, 'Galtiyon aur missing values ko sudhārna'],
  [/\bUnderstanding patterns & trends\b/gi, 'Data ke patterns aur trends ko samajhna'],
  [/\bUseful actionable information\b/gi, 'Kaam ki useful information nikalna'],
  [/\bTaking better business action\b/gi, 'Better business action aur decision lena'],
  [/\bAn online shop receives hundreds of orders\b/gi, 'Ek online shop mein roz hundreds of orders aate hain'],
  [/\bA manager asks:\b/gi, 'Manager poochta hai:'],
  [/\bWhich product sells the most\?\b/gi, 'Kaun sa product sabse zyada bik raha hai?'],
  [/\bA Data Analyst collects\b/gi, 'Ek Data Analyst collect karta hai'],
  [/\bchecks that the\b/gi, 'check karta hai ki'],
  [/\bare correct,\s*adds sales by product,\s*and reports which products perform best\b/gi, 'bilkul sahi hain, product-wise sales add karta hai, aur report banata hai ki kaun se products best perform kar rahe hain'],
  [/\bThe manager can then plan stock more carefully\b/gi, 'Isse manager aage ke liye stock ko zyada smartly plan kar sakta hai'],
  [/\bInspect raw rows & headers\b/gi, 'Raw Rows aur Column Headers ko dhyan se check karein'],
  [/\bApply the exact (.+?) step\b/gi, 'Exact $1 step apply karein'],
  [/\bVerify totals & formatting\b/gi, 'Totals aur formatting ko verify karein'],
  [/\bOpen a blank workbook and identify the worksheet tabs\b/gi, 'Ek blank Workbook kholein aur neeche diye gaye Worksheet tabs ko pehchanein'],
  [/\bEnter four sample records with one item per row\b/gi, 'Har Row mein ek item ke hisaab se 4 sample records enter karein'],
  [/\bSelect a cell and inspect its address in the Name Box\b/gi, 'Kisi bhi Cell par click karein aur Name Box mein uska exact address dekhein'],
  [/\bSave the workbook and check the values for consistency\b/gi, 'Workbook ko save karein aur sabhi values ki consistency check karein'],
  [/\bIdentify where data is entered and managed\b/gi, 'Samjhein ki Data kahan enter aur manage kiya jata hai'],
  [/\bFollow the exact (.+?) steps for this topic\b/gi, 'Is topic ke exact $1 steps ko follow karein'],
  [/\bRead a real worksheet example and verify its result\b/gi, 'Real Worksheet example padhein aur uska Result verify karein'],
  [/\bAnalysts use it to make information accurate,\s*consistent,\s*and easy to interpret\b/gi, 'Analysts iska use information ko accurate, consistent aur samajhne mein aasaan banane ke liye karte hain'],
  [/\bfor preparing,\s*understanding,\s*or reporting data\b/gi, 'jo Data ko prepare, samajhne aur report karne ke kaam aati hai'],
  [/\bKey worksheet parts:\b/gi, 'Worksheet ke main parts:'],
  [/\bData can be numbers,\s*dates,\s*names,\s*transactions,\s*or customer feedback\b/gi, 'Data kuch bhi ho sakta hai — jaise numbers, dates, names, transactions ya customer feedback'],
  [/\bData can be\b/gi, 'Data kuch bhi ho sakta hai jaise'],
  [/\bAll values are fictional\.\s*Each row is one order line\.\s*Sales amount is Units multiplied by Price per unit\b/gi, 'Ye sab sample values hain. Har Row ek order line dikhati hai. Sales amount = Units × Price per unit hota hai'],
  [/\bBusinesses make decisions every day:\b/gi, 'Businesses har roz important decisions lete hain:'],
  [/\bhelps them make these decisions using recorded evidence rather than only personal guesses\b/gi, 'unhe sirf andaaze ke bajaye asli recorded Data (evidence) ke basis par sahi decisions lene mein madad karta hai'],
  [/\bHelps make\b/gi, 'Madad karta hai'],
  [/\bbacked by real data\b/gi, 'lene mein jo real Data par based hon'],
  [/\bIdentifies valuable\b/gi, 'Pehchanta hai zaroori'],
  [/\bReduces\b/gi, 'Kam karta hai'],
  [/\band increases operational\b/gi, 'aur badhata hai operational'],
  [/\bDelivers a better,\s*personalized\b/gi, 'Customers ko deta hai ek better aur personalized'],
  [/\bhelps analysts\b/gi, 'Analysts ki madad karta hai'],
  [/\bhelps you\b/gi, 'aapki madad karta hai'],
  [/\ballows you to\b/gi, 'aapko allow karta hai ki aap'],
  [/\bis used to\b/gi, 'ka use hota hai'],
  [/\bare used to\b/gi, 'ka use hota hai'],
  [/\bmeans that\b/gi, 'ka matlab hai ki'],
  [/\bfor example\b/gi, 'example ke liye'],
  [/\bin real-world\b/gi, 'real-world office mein'],
  [/\bstep by step\b/gi, 'step-by-step'],
  [/\bMake sure\b/gi, 'Dhyan rakhein ki'],
  [/\bAlways check\b/gi, 'Hamesha check karein'],
  [/\bAvoid\b/gi, 'Is galti se bachein:'],
  [/\binstead of\b/gi, 'ke bajaye'],
  [/\bEach row is one\b/gi, 'Har Row ek'],
  [/\bEach column is one\b/gi, 'Har Column ek'],
  [/\bThink of a\b/gi, 'Sochiye ek'],
  [/\bWithout\b/gi, 'Bina'],
  [/\bWith\b/gi, 'Ke saath'],
];

/**
 * Converts English visual notes body text into clean, readable Roman Hinglish
 * when hiText is missing or identical to enText.
 * Keeps all technical terms in English script.
 */
export function resolveVisualHinglish(enText: string, hiText?: string): string {
  const candidate = (hiText || '').trim();
  if (candidate && candidate !== enText.trim() && ALREADY_HINGLISH_RE.test(candidate)) {
    return candidate;
  }

  let out = enText.trim();
  for (const [pattern, replacement] of BODY_PHRASE_REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }
  return out;
}

/**
 * Converts section pills & subtitles into friendly Roman Hinglish when Hindi mode is active.
 */
export function resolveHinglishHeading(label: string): string {
  const trimmed = label.trim();
  for (const [pattern, replacement] of EXACT_PHRASE_MAP) {
    if (pattern.test(trimmed)) {
      return trimmed.replace(pattern, replacement);
    }
  }
  return trimmed
    .replace(/^Step\s+(\d+):\s*(.+)$/i, 'Step $1: $2')
    .replace(/\bUnderstand\b/gi, 'Samjhein:')
    .replace(/\bHow to\b/gi, 'Kaise Karein:')
    .replace(/\bWhy\b/gi, 'Kyon')
    .replace(/\bWhat Is\b/gi, 'Kya Hai:');
}

const cleanPlain = (s: string) =>
  s
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();

/**
 * Extracts technical terms wrapped in **bold** from text so the teacher can explicitly explain them.
 */
function extractHighlightedTerms(text: string): string[] {
  const matches = text.match(/\*\*([^*]+)\*\*/g) || [];
  const unique: string[] = [];
  for (const m of matches) {
    const clean = m.replace(/\*\*/g, '').trim();
    if (clean && !unique.includes(clean)) {
      unique.push(clean);
    }
  }
  return unique;
}

/**
 * Subject-specific relatable Indian classroom analogy generator for Hindi mode (Devanagari + English technical terms).
 * Ensures the AI Mentor teaches like a patient local Indian teacher using everyday examples, NOT reading notes verbatim.
 */
function getDesiHindiIntroAnalogy(
  domain: SubjectDomain,
  topicTitle: string,
  coreConcept: string
): string {
  const t = topicTitle.toLowerCase();

  // Specific high-impact introductory topics
  if (t.includes('what is data analytics')) {
    return (
      `देखिए, मान लीजिए आपकी एक किराने की दुकान है। आपकी दुकान पर रोज दूध, चावल और बिस्कुट बिकते हैं। ` +
      `अब आपको कैसे पता चलेगा कि सबसे ज्यादा कौन-सा सामान बिक रहा है और अगले हफ्ते क्या मंगवाना चाहिए? ` +
      `इसके लिए आपको अपनी दुकान की रोज की बिक्री का हिसाब देखना पड़ेगा। इसी बिखरे हुए हिसाब को हम Raw Data कहते हैं। ` +
      `जब हम इस Raw Data की गलतियाँ सुधारकर इसे ध्यान से समझते हैं, तो हमें काम की जानकारी यानी Insights मिलती हैं, और हम सही फैसला यानी Better Decisions ले पाते हैं। इसी पूरे काम को Data Analytics कहते हैं।`
    );
  }

  if (t.includes('what is data science')) {
    return (
      `देखिए, इसको बिल्कुल जीरो से एक आसान उदाहरण से समझते हैं। मान लीजिए आप अपने फोन से खाना या सामान ऑर्डर करते हैं, या कोई बड़ी दुकान चलाते हैं। ` +
      `वहाँ रोज हजारों Orders, ग्राहकों की पसंद और समय का हिसाब इकट्ठा होता है, जिसे हम Raw Data कहते हैं। ` +
      `अब सवाल यह है कि इतने बड़े Data से हम भविष्य का सही अंदाजा कैसे लगाएं? ` +
      `यहाँ Data Science काम आता है। Data Science में हम Raw Data को Clean करते हैं, Statistics और Coding की मदद से छुपे हुए Patterns को ढूँढते हैं, और ऐसे Insights निकालते हैं जिनसे कोई भी कंपनी सही Decisions ले सके।`
    );
  }

  if (t.includes('how data science works in real life')) {
    return (
      `सोचिए, जब आप Swiggy या Zomato पर खाना ऑर्डर करते हैं और स्क्रीन पर लिखकर आता है कि आपका ऑर्डर बत्तीस मिनट में पहुँचेगा, तो ऐप को यह कैसे पता चलता है? ` +
      `वह कोई तुक्का नहीं मारता! उसके पीछे एक लाइव Data Science System काम कर रहा होता है। ` +
      `वह तुरंत रेस्टोरेंट की भीड़, सड़क का ट्रैफिक, दूरी और मौसम के Signals लेता है, उन्हें पुराने हजारों Orders के Data से मिलाता है, और आपके लिए बिल्कुल सटीक Delivery ETA निकालता है।`
    );
  }

  if (t.includes('what is programming')) {
    return (
      `देखिए, अगर आपको किसी इंसान को चाय बनाना सिखाना हो और आप कहें कि "थोड़ी चीनी डाल देना", तो इंसान अपने अंदाजे से समझ जाएगा। ` +
      `लेकिन Computer के पास अपना दिमाग या अंदाजा नहीं होता! Computer सिर्फ वही करता है जो उसे बिल्कुल साफ, क्रम से यानी Step-by-Step बताया जाए। ` +
      `किसी काम को पूरा करने के लिए Computer को उसकी भाषा जैसे Python में साफ-साफ Step-by-Step Instructions लिखकर देना ही Programming कहलाता है।`
    );
  }

  if (t.includes('why businesses need data analytics') || t.includes('why do we need')) {
    return (
      `अक्सर नए स्टूडेंट्स पूछते हैं कि आखिर कंपनियों को Data की इतनी जरूरत क्यों पड़ती है? ` +
      `मान लीजिए एक कपड़ों का दुकानदार बिना पुराना रिकॉर्ड देखे गर्मी वाले शहर में सैकड़ों महँगी Winter Jackets मंगवा ले, तो क्या होगा? सारा माल गोदाम में फँस जाएगा और भारी नुकसान होगा! ` +
      `लेकिन जब वही दुकानदार पिछले साल की Sales और मौसम का Data देखकर ऑर्डर करता है, तो उसका एक रुपया भी बर्बाद नहीं होता। इसीलिए आज हर छोटा-बड़ा बिजनेस अंदाजे यानी Guesswork के बजाय Data पर भरोसा करता है।`
    );
  }

  // Domain-adapted teacher analogies for all other topics across the curriculum
  switch (domain) {
    case 'excel':
      return (
        `देखिए, आज हम Excel का एक बहुत ही काम का टॉपिक समझेंगे — ${topicTitle}। ` +
        `मान लीजिए आप किसी ऑफिस में काम कर रहे हैं और आपके सामने हजारों Rows और Columns वाली एक बड़ी Worksheet आती है। ` +
        `अगर हम एक-एक Cell को हाथ से गिनने या सुधारने बैठेंगे तो घंटों लग जाएंगे और गलती भी होगी। ` +
        `आसान शब्दों में समझें तो: ${coreConcept} चलिए देखते हैं कि असली ऑफिस के काम में इसे Step-by-Step कैसे इस्तेमाल करते हैं।`
      );
    case 'sql':
      return (
        `देखिए, जब किसी कंपनी के पास लाखों Customers या Orders का रिकॉर्ड होता है, तो वह किसी छोटी फाइल में नहीं बल्कि एक सुरक्षित Database के Tables में रहता है। ` +
        `आज के टॉपिक ${topicTitle} में हम सीखेंगे कि Database से बात करके ठीक वही Records कैसे निकाले जाएं जिनकी हमें जरूरत है। ` +
        `सीधे शब्दों में: ${coreConcept} चलिए इसे एक असली Table और Query के उदाहरण से समझते हैं।`
      );
    case 'python':
      return (
        `चलिए आज Python का एक बहुत ही जरूरी कॉन्सेप्ट बिल्कुल शुरुआत से समझते हैं — ${topicTitle}। ` +
        `चाहे आपने पहले कभी Coding न की हो, बिल्कुल चिंता मत कीजिए। Python में हर लाइन का एक साफ मतलब होता है। ` +
        `यहाँ मुख्य बात यह है कि: ${coreConcept} आइए देखते हैं कि यह Code अंदर से कैसे काम करता है और इसका Output कैसे आता है।`
      );
    case 'power_bi':
      return (
        `देखिए, किसी कंपनी के मैनेजर या CEO के पास इतना समय नहीं होता कि वे हजारों नंबरों वाली लंबी Tables पढ़ें। उन्हें एक नजर में साफ Chart और Dashboard चाहिए होता है। ` +
        `आज के टॉपिक ${topicTitle} में हम Power BI के इसी जादू को समझेंगे। ` +
        `आसान भाषा में: ${coreConcept} चलिए देखते हैं कि इससे बिजनेस रिपोर्टिंग कितनी आसान हो जाती है।`
      );
    case 'machine_learning':
      return (
        `अब यहाँ एक बहुत दिलचस्प बात ध्यान से समझिए। साधारण प्रोग्रामिंग में इंसान खुद नियम यानी Rules लिखता है, लेकिन Machine Learning में हम Computer को पुराना Training Data दिखाते हैं और Model खुद उसके अंदर से Patterns सीखता है! ` +
        `आज के टॉपिक ${topicTitle} में हम यही सीखेंगे। ` +
        `सरल शब्दों में: ${coreConcept} चलिए इसे बिल्कुल प्रैक्टिकल तरीके से समझते हैं।`
      );
    case 'generative_ai':
      return (
        `आजकल हर जगह Generative AI और LLMs की चर्चा है, लेकिन एक प्रोफेशनल की तरह इसका सही इस्तेमाल कैसे करें? ` +
        `आज के टॉपिक ${topicTitle} में हम समझेंगे कि Prompts, Tokens और AI Workflows असल में कैसे काम करते हैं। ` +
        `आसान शब्दों में: ${coreConcept} चलिए इसे एक रियल उदाहरण से देखते हैं।`
      );
    case 'agentic_ai':
      return (
        `देखिए, एक साधारण AI सिर्फ आपके सवाल का जवाब देता है, लेकिन एक AI Agent खुद योजना यानी Planning बनाता है, सही Tools चलाता है, Memory रखता है और काम पूरा करके दिखाता है! ` +
        `आज के टॉपिक ${topicTitle} में हम इसी Agentic AI सिस्टम को समझेंगे। ` +
        `सरल भाषा में: ${coreConcept} आइए इसे Step-by-Step देखते हैं।`
      );
    case 'data_science':
      return (
        `चलिए, आज Data Science के एक बहुत महत्वपूर्ण कॉन्सेप्ट — ${topicTitle} को बिल्कुल जीरो से समझते हैं। ` +
        `एक अच्छे Data Scientist की पहचान यही होती है कि वह किसी भी नंबर या फॉर्मूले के पीछे का असली कारण समझे। ` +
        `यहाँ सबसे जरूरी बात यह है कि: ${coreConcept} आइए इसे एक आसान रियल-लाइफ उदाहरण के साथ देखते हैं।`
      );
    default:
      return (
        `देखिए, आज हम ${topicTitle} को बिल्कुल आसान और प्रैक्टिकल तरीके से समझेंगे। ` +
        `चाहे आप बिल्कुल शुरुआत कर रहे हों, इसे एक रोजमर्रा के उदाहरण की तरह सोचिए। ` +
        `आसान शब्दों में समझें तो: ${coreConcept} चलिए देखते हैं कि असली प्रोजेक्ट्स में यह कैसे काम करता है।`
      );
  }
}

/**
 * Subject-specific relatable classroom analogy generator for English mode.
 * Teaches patiently in simple, beginner-friendly English without reading the notes verbatim.
 */
function getFriendlyEnglishIntroAnalogy(
  domain: SubjectDomain,
  topicTitle: string,
  coreConcept: string
): string {
  const t = topicTitle.toLowerCase();

  if (t.includes('what is data analytics')) {
    return (
      `Imagine you run a neighborhood grocery store. Every single day, customers buy milk, rice, and biscuits. ` +
      `Now, how do you know which items are selling the fastest and what you should restock next week? ` +
      `If you just guess, you might waste money on items nobody wants. Instead, you look at your daily sales bills. ` +
      `Those daily bills are what we call Raw Data. When we clean up errors in that Raw Data, study the numbers, find useful Insights, and make smarter Decisions, that entire journey is called Data Analytics.`
    );
  }

  if (t.includes('what is data science')) {
    return (
      `Let us start from absolute zero with an everyday example. Think about what happens when you order groceries on an app, stream a movie, or swipe your bank card. ` +
      `Behind the scenes, thousands of raw records are created every minute. That unorganized collection of facts is called Raw Data. ` +
      `Now, how does a company use all that data to solve problems and predict what customers will need tomorrow? ` +
      `That is where Data Science comes in. In Data Science, we collect and clean Raw Data, use Statistics and Coding tools like Python and SQL to uncover real patterns, turn those patterns into clear Insights, and guide smart business Decisions.`
    );
  }

  if (t.includes('how data science works in real life')) {
    return (
      `Have you ever wondered how a food delivery app knows your order will arrive in thirty-two minutes? ` +
      `It is not making a random guess! Behind that single number on your phone is a live Data Science workflow. ` +
      `It captures real-time signals like kitchen load, road distance, and rain, compares them against thousands of past deliveries, and continuously updates your estimated arrival time.`
    );
  }

  if (t.includes('what is programming')) {
    return (
      `Think about teaching a friend how to make a cup of tea. If you say "add a little sugar," a human friend understands what you mean. ` +
      `A computer, however, cannot guess what "a little" means! A computer needs exact, step-by-step instructions written in a language it understands, like Python. ` +
      `Writing those clear, logical instructions so a computer can solve a problem reliably is what we call Programming.`
    );
  }

  if (t.includes('why businesses need data analytics') || t.includes('why do we need')) {
    return (
      `You might wonder: why cannot a business owner simply rely on experience and gut feeling? ` +
      `Imagine a clothing store manager orders hundreds of heavy winter jackets for a warm city without checking past sales records. The jackets sit unsold on the racks, locking up cash! ` +
      `When a team uses real data instead of blind guesswork, they check past seasonal sales, weather trends, and customer demand before spending money. That is why every modern business relies on data.`
    );
  }

  switch (domain) {
    case 'excel':
      return (
        `Let us understand today's Excel topic, ${topicTitle}, from the ground up. ` +
        `Imagine sitting at your desk with a spreadsheet containing thousands of Rows and Columns. Doing the work manually cell by cell would take hours and invite mistakes. ` +
        `Here is the core idea behind this tool: ${coreConcept} Let us walk through how you will use this in real office work step by step.`
      );
    case 'sql':
      return (
        `In real companies, jutaan records of customers and orders are stored inside structured Database Tables rather than small files. ` +
        `In today's lesson on ${topicTitle}, you will learn how to ask the database for the exact records you need. ` +
        `Put simply: ${coreConcept} Let us see how each keyword and table row works together.`
      );
    case 'python':
      return (
        `Let us learn ${topicTitle} in Python starting from zero, even if you have never written code before. ` +
        `Every line of Python is simply a clear instruction that takes an Input, performs a logical step, and produces an Output. ` +
        `At its heart: ${coreConcept} Let us trace how this works step by step.`
      );
    case 'power_bi':
      return (
        `Business leaders rarely have time to read thousands of raw numbers in a table—they need visual Dashboards that answer questions at a glance. ` +
        `Today we are exploring ${topicTitle} in Power BI. ` +
        `Here is the key concept in plain English: ${coreConcept} Let us see how analysts build this in real projects.`
      );
    case 'machine_learning':
      return (
        `Here is an important distinction before we begin: in traditional programming, a human writes fixed rules, whereas in Machine Learning, an algorithm studies historical Training Data to discover patterns on its own. ` +
        `Today's topic is ${topicTitle}. ` +
        `In simple words: ${coreConcept} Let us break down the visual steps and see why each part matters.`
      );
    case 'generative_ai':
      return (
        `Let us look beneath the surface of Generative AI with today's topic: ${topicTitle}. ` +
        `Understanding how Prompts, Tokens, and AI models process information turns you from a casual user into a skilled builder. ` +
        `In simple terms: ${coreConcept} Let us explore the practical workflow together.`
      );
    case 'agentic_ai':
      return (
        `While a basic chatbot only replies to a single question, an AI Agent can plan steps, call external Tools, use Memory, and verify its own output. ` +
        `Today we are learning ${topicTitle}. ` +
        `Here is the main idea: ${coreConcept} Let us trace the architecture step by step.`
      );
    default:
      return (
        `Let us understand ${topicTitle} in a simple, practical way, starting from absolute zero. ` +
        `Instead of memorizing a textbook definition, think of how this works in everyday life: ${coreConcept} ` +
        `Now let us walk through each visual section together.`
      );
  }
}

/**
 * Builds warm, conversational, real-teacher Hindi narration in Devanagari script
 * while keeping all technical terms in English script!
 * Never reads the visual notes word-for-word; explains WHY and HOW like a local Indian teacher.
 */
export function buildRealTeacherHindiNarration(params: {
  topicTitle: string;
  sectionTitle: string;
  blocks: VisualNoteBlock[];
  isIntro?: boolean;
  introEn?: string;
  introHi?: string;
  isFirstSection: boolean;
  isLastSection: boolean;
  moduleCode?: string;
}): string {
  const {
    topicTitle,
    sectionTitle,
    blocks,
    isIntro,
    introEn,
    isFirstSection,
    isLastSection,
    moduleCode = '',
  } = params;

  const domain = detectSubjectDomain(topicTitle, sectionTitle, moduleCode);

  const closing = isLastSection
    ? ` अब देखिए, यहाँ हमारा ${topicTitle} का कॉन्सेप्ट बिल्कुल साफ हो गया है। एक बार मुख्य फॉर्मूले यानी Key Takeaway पर नजर डालिए, और फिर नीचे Coding Game में इसकी प्रैक्टिस जरूर कीजिए!`
    : '';

  if (isIntro) {
    const coreEn = cleanPlain(introEn || topicTitle);
    const keyTerms = extractHighlightedTerms(introEn || '');
    const termsCallout =
      keyTerms.length > 0
        ? ` यहाँ स्क्रीन पर हाइलाइट किए गए शब्दों — ${keyTerms.slice(0, 4).join(', ')} को ध्यान से देखिए, क्योंकि यही इस टॉपिक की असली नींव हैं।`
        : '';

    if (isFirstSection) {
      const analogy = getDesiHindiIntroAnalogy(domain, topicTitle, coreEn);
      return `${analogy}${termsCallout}${closing}`;
    }
    return `चलिए, अब इसके अगले महत्वपूर्ण हिस्से को समझते हैं — ${sectionTitle}। अब यहाँ एक बात ध्यान से समझिए: जब हम इसे असली प्रोजेक्ट या काम में लागू करते हैं, तो हर एक स्टेप का साफ मतलब होना चाहिए।${termsCallout}${closing}`;
  }

  const parts: string[] = [];

  for (const block of blocks) {
    if (block.type === 'flow') {
      const stepExplanations = block.items
        .map((it, idx) => {
          const rawTitle = cleanPlain(it.title);
          const desc = cleanPlain(resolveVisualHinglish(it.bodyEn, it.bodyHi));
          if (idx === 0) {
            return `सबसे पहले पहले बॉक्स यानी ${rawTitle} को देखिए। इसकी शुरुआत यहीं से होती है, जहाँ हम ${desc} का काम करते हैं। अगर यह पहला स्टेप अधूरा होगा, तो आगे का पूरा रिजल्ट गलत हो जाएगा।`;
          }
          if (idx === block.items.length - 1) {
            return `और सबसे आखिर में आता है ${rawTitle}। यहाँ पहुँचकर हमें असली फायदा मिलता है, यानी ${desc}।`;
          }
          return `इसके बाद तीर के निशान के साथ अगले स्टेप ${rawTitle} पर आइए। यहाँ हम ${desc} करते हैं ताकि Data और ज्यादा साफ और काम के लायक बन सके।`;
        })
        .join(' ');
      parts.push(
        `चलिए, अब इस डायग्राम के फ्लो को एक-एक करके practically समझते हैं। मेरे साथ हर बॉक्स और तीर के निशान को फॉलो कीजिए। ${stepExplanations}`
      );
    } else if (block.type === 'table') {
      const cols = block.headers.slice(0, 5).join(', ');
      const firstRow = block.rows[0] ? block.rows[0].slice(0, 4).join(' | ') : '';
      const secondRow = block.rows[1] ? block.rows[1].slice(0, 4).join(' | ') : '';
      parts.push(
        `अब इस Sample Table को एक असली ऑफिस Dataset की तरह ध्यान से देखिए। यहाँ हर एक आड़ी लाइन को हम Row यानी एक पूरा Record कहते हैं, और हर खड़ी लाइन को Column यानी एक Feature कहते हैं। ` +
          `ऊपर देखिए, हमारे पास ${cols} के Columns दिए गए हैं। ` +
          (firstRow
            ? `उदाहरण के लिए पहली Row में देखिए: ${firstRow} दर्ज है${secondRow ? `, और दूसरी Row में ${secondRow} है` : ''}। `
            : '') +
          `जब आप इन Rows की आपस में तुलना करते हैं, तो आपको साफ दिखने लगता है कि नंबर हमें क्या कहानी बता रहे हैं!`
      );
    } else if (block.type === 'sql') {
      const codeLines = block.code
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l.length > 0 && !l.startsWith('#') && !l.startsWith('--'));
      const firstLine = codeLines[0] || '';
      const hasOutput = Boolean(block.output && block.output.trim());
      parts.push(
        `अब बहुत से स्टूडेंट्स सोचते हैं कि इसे कंप्यूटर पर कोड या फॉर्मूले में कैसे लिखेंगे? तो इस Code Box को बिल्कुल आराम से देखिए। ` +
          (firstLine
            ? `यहाँ हम सबसे पहले ${firstLine} लिखकर कंप्यूटर को साफ निर्देश दे रहे हैं कि कौन-सा Data या फॉर्मूला लगाना है। `
            : '') +
          `कंप्यूटर हर लाइन को ऊपर से नीचे क्रम में चलाता है। ` +
          (hasOutput
            ? `और नीचे Verified Output बॉक्स में देखिए — जैसे ही यह कोड चलता है, हमें बिना किसी मानवीय गलती के तुरंत सटीक Output मिल जाता है! असली जॉब्स में यही तरीका घंटों का काम सेकंड्स में कर देता है।`
            : `असली प्रोजेक्ट्स और टेक्निकल इंटरव्यू में यही लॉजिक आपके सबसे ज्यादा काम आएगा।`)
      );
    } else if (block.type === 'compare') {
      const isExampleSection = /example|real-life|industry|pillar/i.test(sectionTitle);
      if (isExampleSection) {
        const exSpeech = block.items
          .map((it, idx) => {
            const title = cleanPlain(it.title);
            const terms = extractHighlightedTerms(it.bodyEn);
            const termFocus = terms.length > 0 ? terms.join(' और ') : title;
            const meaning = cleanPlain(resolveVisualHinglish(it.bodyEn, it.bodyHi));
            if (idx === 0) {
              return `सबसे पहले ${title} का उदाहरण देखिए। यहाँ ${termFocus} पर ध्यान दिया जाता है — यानी ${meaning}`;
            }
            return `इसी तरह ${title} में देखिए, वहाँ मुख्य फोकस ${termFocus} पर होता है — यानी ${meaning}`;
          })
          .join(' ');
        parts.push(
          `आप सोच रहे होंगे कि असली कंपनियों में इसका इस्तेमाल कहाँ होता है? चलिए इन उदाहरणों से समझते हैं। ${exSpeech}`
        );
      } else {
        const cmpSpeech = block.items
          .map((it, idx) => {
            const title = cleanPlain(it.title);
            const meaning = cleanPlain(resolveVisualHinglish(it.bodyEn, it.bodyHi));
            if (idx === 0) {
              return `पहली तरफ है ${title}। इसमें क्या होता है? ${meaning}`;
            }
            return `जबकि दूसरी तरफ है ${title}, जो इससे बिल्कुल अलग तरीके से काम करता है: ${meaning}`;
          })
          .join(' ');
        parts.push(
          `अब यहाँ एक बात ध्यान से समझिए जहाँ अक्सर नए स्टूडेंट्स कन्फ्यूज हो जाते हैं। इन दोनों के बीच का अंतर साफ समझ लेते हैं। ${cmpSpeech}`
        );
      }
    } else if (block.type === 'bullets') {
      const isWhySection = /why|important|benefit|need/i.test(sectionTitle);
      const pts = block.items
        .slice(0, 4)
        .map((it, i) => {
          const terms = extractHighlightedTerms(it.en);
          const body = cleanPlain(resolveVisualHinglish(it.en, it.hi));
          if (i === 0) return `सबसे पहला फायदा यह है कि यह ${body}`;
          if (i === block.items.length - 1) return `और सबसे जरूरी बात, यह ${body}`;
          return `दूसरा, ${terms[0] ? `${terms[0]} के मामले में ` : ''}यह ${body}`;
        })
        .join(' ');
      parts.push(
        isWhySection
          ? `अब सवाल आता है कि आखिर यह इतना जरूरी क्यों है? हरे टिक मार्क वाले इन पॉइंट्स को देखिए: ${pts}`
          : `अब इस टॉपिक के ये सबसे महत्वपूर्ण पॉइंट्स हमेशा याद रखिए: ${pts}`
      );
    } else if (block.type === 'note') {
      const terms = extractHighlightedTerms(block.bodyEn);
      const body = cleanPlain(resolveVisualHinglish(block.bodyEn, block.bodyHi));
      const termCallout =
        terms.length > 0
          ? `यहाँ खास तौर पर ${terms.slice(0, 3).join(', ')} पर गौर कीजिए। `
          : '';
      parts.push(
        `चलिए, अब इस नोट बॉक्स के पीछे का असली मतलब समझते हैं। ${termCallout}आसान भाषा में बात यह है कि ${body}`
      );
    }
    if (parts.join(' ').length > 520) break;
  }

  const finalSpeech =
    parts.join(' ').trim() ||
    `चलिए अब ${sectionTitle} को ध्यान से समझते हैं। असली प्रोजेक्ट्स में यह कॉन्सेप्ट आपको सही फैसले लेने और गलतियों से बचने में बहुत मदद करता है।`;

  return `${finalSpeech}${closing}`;
}

/**
 * Builds warm, easy-to-understand, real-teacher English narration.
 * Never reads the visual notes word-for-word; explains concepts from zero with practical examples.
 */
export function buildRealTeacherEnglishNarration(params: {
  topicTitle: string;
  sectionTitle: string;
  blocks: VisualNoteBlock[];
  isIntro?: boolean;
  introEn?: string;
  isFirstSection: boolean;
  isLastSection: boolean;
  moduleCode?: string;
}): string {
  const {
    topicTitle,
    sectionTitle,
    blocks,
    isIntro,
    introEn,
    isFirstSection,
    isLastSection,
    moduleCode = '',
  } = params;

  const domain = detectSubjectDomain(topicTitle, sectionTitle, moduleCode);

  const closing = isLastSection
    ? ` That brings all the pieces of ${topicTitle} together! Take a quick look at the Key Takeaway formula bar at the bottom, and then jump into the Coding Game to test it hands-on!`
    : '';

  if (isIntro) {
    const core = cleanPlain(introEn || topicTitle);
    const keyTerms = extractHighlightedTerms(introEn || '');
    const termsCallout =
      keyTerms.length > 0
        ? ` Pay special attention to the highlighted terms on your screen—${keyTerms.slice(0, 4).join(', ')}—because they are the building blocks of this entire lesson.`
        : '';

    if (isFirstSection) {
      const analogy = getFriendlyEnglishIntroAnalogy(domain, topicTitle, core);
      return `${analogy}${termsCallout}${closing}`;
    }
    return `Now let us move to the next part of our lesson: ${sectionTitle}. Think of this stage as connecting the theory to real-world execution.${termsCallout}${closing}`;
  }

  const parts: string[] = [];

  for (const block of blocks) {
    if (block.type === 'flow') {
      const stepsSpeech = block.items
        .map((it, idx) => {
          const title = cleanPlain(it.title);
          const desc = cleanPlain(it.bodyEn);
          if (idx === 0) {
            return `We always begin at the first box, ${title}—this represents ${desc.charAt(0).toLowerCase()}${desc.slice(1)}. Without solid input here, nothing downstream can be trusted.`;
          }
          if (idx === block.items.length - 1) {
            return `Finally, follow the last arrow to ${title}, where everything pays off by ${desc.charAt(0).toLowerCase()}${desc.slice(1)}.`;
          }
          return `Follow the arrow to ${title}, where we focus on ${desc.charAt(0).toLowerCase()}${desc.slice(1)} so the data becomes clean and reliable.`;
        })
        .join(' ');
      parts.push(
        `Let us trace this visual flow diagram together from left to right. Watch how each stage feeds into the next: ${stepsSpeech}`
      );
    } else if (block.type === 'table') {
      const cols = block.headers.slice(0, 5).join(', ');
      const firstRow = block.rows[0] ? block.rows[0].slice(0, 4).join(', ') : '';
      parts.push(
        `Now let us read this sample dataset table the way a professional analyst does. Every horizontal Row represents one complete record, and every vertical Column represents one measured feature: ${cols}. ` +
          (firstRow ? `For instance, look at the first row where we have ${firstRow}. ` : '') +
          `By comparing values across these rows and columns rather than looking at a single number in isolation, the underlying pattern becomes crystal clear.`
      );
    } else if (block.type === 'sql') {
      const codeLines = block.code
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l.length > 0 && !l.startsWith('#') && !l.startsWith('--'));
      const firstLine = codeLines[0] || '';
      const hasOutput = Boolean(block.output && block.output.trim());
      parts.push(
        `Now let us see how we actually write this in code and formulas. Look inside the notebook block for ${sectionTitle}. ` +
          (firstLine
            ? `We start with ${firstLine}, which tells the computer exactly what values or columns to work with. `
            : '') +
          `Each line executes in order from top to bottom. ` +
          (hasOutput
            ? `And look at the Verified Output box right below—instead of calculating by hand and risking mistakes, the code produces the exact verified answer in milliseconds!`
            : `This exact pattern is something you will use constantly in real projects and technical interviews.`)
      );
    } else if (block.type === 'compare') {
      const isExampleSection = /example|real-life|industry|pillar/i.test(sectionTitle);
      if (isExampleSection) {
        const exSpeech = block.items
          .map((it, idx) => {
            const title = cleanPlain(it.title);
            const terms = extractHighlightedTerms(it.bodyEn);
            const termHint = terms.length > 0 ? `focusing on ${terms.slice(0, 2).join(' and ')}` : '';
            const desc = cleanPlain(it.bodyEn);
            if (idx === 0) {
              return `First, look at ${title}${termHint ? `, ${termHint}` : ''}—in practice, teams use this to answer: ${desc}`;
            }
            return `Next, in ${title}, notice how the same core principle helps teams handle: ${desc}`;
          })
          .join(' ');
        parts.push(
          `Where do you actually see this in the real world? Let us look at each illustrated example on your screen: ${exSpeech}`
        );
      } else {
        const cmpSpeech = block.items
          .map((it, idx) => {
            const title = cleanPlain(it.title);
            const desc = cleanPlain(it.bodyEn);
            if (idx === 0) {
              return `On one side, we have ${title}, which works like this: ${desc}`;
            }
            return `In contrast, look at ${title}: ${desc}`;
          })
          .join(' ');
        parts.push(
          `Here is a comparison that beginners often ask about. Let us contrast them side by side so you never mix them up: ${cmpSpeech}`
        );
      }
    } else if (block.type === 'bullets') {
      const isWhySection = /why|important|benefit|need/i.test(sectionTitle);
      const pts = block.items
        .slice(0, 4)
        .map((it, i) => {
          const clean = cleanPlain(it.en);
          if (i === 0) return `First, it ${clean.charAt(0).toLowerCase()}${clean.slice(1)}`;
          if (i === block.items.length - 1) return `And finally, it ${clean.charAt(0).toLowerCase()}${clean.slice(1)}`;
          return `Next, it ${clean.charAt(0).toLowerCase()}${clean.slice(1)}`;
        })
        .join(' ');
      parts.push(
        isWhySection
          ? `Why does this matter so much in real companies? Look at the green checkmarks in this box: ${pts}`
          : `Let us lock in the key points from ${sectionTitle}: ${pts}`
      );
    } else if (block.type === 'note') {
      const terms = extractHighlightedTerms(block.bodyEn);
      const body = cleanPlain(block.bodyEn);
      const termCallout =
        terms.length > 0
          ? `Notice the highlighted terms ${terms.slice(0, 3).join(', ')}. `
          : '';
      parts.push(
        `Let us pause on this important concept note. ${termCallout}What this really means in practice is: ${body}`
      );
    }
    if (parts.join(' ').length > 520) break;
  }

  const finalSpeech =
    parts.join(' ').trim() ||
    `Let us examine ${sectionTitle} closely. Understanding how this works in practice helps you avoid common beginner mistakes and build reliable solutions.`;

  return `${finalSpeech}${closing}`;
}
