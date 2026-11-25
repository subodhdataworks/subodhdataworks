import type { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

// ============================================================================
// MODULE 4 (DS-M04): Data Quality and Preparation — Topics 24 to 31
// ============================================================================

export const DS_M04_VISUAL_NOTES: Record<number, StructuredVisualNoteTopic> = {
  // --------------------------------------------------------------------------
  // TOPIC 24: Understanding Data Quality
  // --------------------------------------------------------------------------
  24: {
    module: 'DS-M04',
    moduleTitle: 'Data Quality and Preparation',
    topic: 'Understanding Data Quality',
    pageCount: 3,
    sampleDataNotice:
      'All hospital, retail order, and employee records below are illustrative sample datasets.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 1',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Understanding Data Quality',
        subtitle: 'WHY CLEAN, TRUSTWORTHY DATA IS THE HEART OF EVERY GOOD DECISION',
        intro: {
          icon: 'database',
          titleEn: 'What Does High-Quality Data Mean?',
          titleHi: 'High-Quality Data Ka Asli Matlab Kya Hai?',
          bodyEn:
            'Think of cooking a healthy meal: even the best chef cannot make a great dish with spoiled ingredients. **Data Quality** measures how **fit for purpose** your dataset is — whether the records are accurate, complete, consistent, valid, unique, and up to date enough to support real decisions.',
          bodyHi:
            'Khana pakane ke baare mein sochiye: sabse bada chef bhi kharab ingredients se accha khana nahi bana sakta. **Data Quality** batata hai ki aapka dataset kitna **bharosemand aur fit-for-purpose** hai — kya uske records accurate, complete, consistent, valid, unique aur up-to-date hain.',
        },
        sections: [
          {
            pill: 'The 6 Core Dimensions of Data Quality',
            blocks: [
              {
                type: 'table',
                headers: ['Dimension', 'Simple Meaning', 'Example of a Quality Problem'],
                rows: [
                  ['1. Accuracy', 'Does the value match real life?', 'Customer paid ₹850, but table recorded ₹8,500 by mistake.'],
                  ['2. Completeness', 'Are required fields filled in?', '30% of delivery rows have a blank City column.'],
                  ['3. Consistency', 'Is the same thing written one way?', '"Mumbai", "mumbai", and "MUM" all in the same column.'],
                  ['4. Validity', 'Does it follow allowed rules/formats?', 'Customer age recorded as -12 or email missing "@".'],
                  ['5. Uniqueness', 'Is each real event recorded once?', 'Same order ORD-501 appears twice, doubling revenue!'],
                  ['6. Timeliness', 'Is the data fresh enough?', 'Using 2021 fuel prices to plan 2026 delivery budgets.'],
                ],
                noteEn:
                  'A dataset can be 100% Complete (zero blanks) yet still fail Accuracy or Consistency — always check all 6 dimensions!',
                noteHi:
                  'Koi dataset 100% Complete (zero blanks) ho sakta hai, phir bhi Accuracy ya Consistency mein fail ho sakta hai — isliye sabhi 6 dimensions check kariye!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 1',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'The Real Cost of Poor Data Quality',
        subtitle: 'WHAT HAPPENS WHEN TEAMS SKIP QUALITY CHECKS?',
        sections: [
          {
            pill: 'Business Consequences of Dirty Data',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'Wrong Financial Totals',
                    bodyEn:
                      'Duplicate invoice rows make sales look artificially high, causing managers to over-hire or miscalculate taxes.',
                    bodyHi:
                      'Duplicate invoice rows sales ko nakli roop se zyada dikhati hain, jisse budget aur tax dono galat ho sakte hain.',
                    tone: 'pink',
                  },
                  {
                    title: 'Broken Customer Trust',
                    bodyEn:
                      'Wrong phone numbers or outdated addresses cause failed deliveries and frustrated shoppers.',
                    bodyHi:
                      'Galat phone numbers ya purane addresses ki wajah se deliveries fail hoti hain aur customers naraz hote hain.',
                    tone: 'amber',
                  },
                  {
                    title: 'Unreliable ML Models',
                    bodyEn:
                      'A model trained on messy labels learns the errors instead of real patterns (**Garbage In, Garbage Out**).',
                    bodyHi:
                      'Messy data par train hua model asli patterns ke bajay galtiyan seekh leta hai (**Garbage In, Garbage Out**).',
                    tone: 'lavender',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 1',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'MAKING QUALITY YOUR FIRST HABIT',
        sections: [
          {
            pill: 'Remember Before Any Analysis',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: 'Evaluate every dataset across the **6 Quality Dimensions**: Accuracy, Completeness, Consistency, Validity, Uniqueness, and Timeliness.',
                    hi: 'Har dataset ko **6 Quality Dimensions** par check kariye: Accuracy, Completeness, Consistency, Validity, Uniqueness, aur Timeliness.',
                  },
                  {
                    en: 'Data Quality is not a one-time chore — catching bad data early at entry prevents expensive fixes later.',
                    hi: 'Data Quality ek baar ka kaam nahi hai — entry ke samay hi bad data rokna aage ke bade nuksaan se bachata hai.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TOPIC 25: Missing Values and Duplicate Records
  // --------------------------------------------------------------------------
  25: {
    module: 'DS-M04',
    moduleTitle: 'Data Quality and Preparation',
    topic: 'Missing Values and Duplicate Records',
    pageCount: 4,
    sampleDataNotice:
      'All retail order tables and before-and-after calculations below are illustrative sample datasets.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 2',
        pageTag: 'PAGE 1 OF 4',
        footerPage: '1 / 4',
        title: 'Missing Values and Duplicate Records',
        subtitle: 'SPOTTING BLANKS AND REPEATED ROWS — AND FIXING THEM SMARTLY',
        intro: {
          icon: 'table',
          titleEn: 'Two of the Most Common Problems in Real Datasets',
          titleHi: 'Real Datasets Ki Do Sabse Common Dikkatein',
          bodyEn:
            'A **Missing Value** (`NULL`, `NaN`, blank cell, or `"N/A"`) means a piece of information was not recorded. A **Duplicate Record** means the same real-world item or event was accidentally saved more than once. Both can silently distort totals, averages, and predictions if ignored.',
          bodyHi:
            '**Missing Value** (`NULL`, `NaN`, blank cell ya `"N/A"`) ka matlab hai koi jaankari record nahi hui. **Duplicate Record** ka matlab hai ek hi asli event ya customer galti se do ya zyada baar save ho gaya. Dono hi totals, averages aur predictions ko chupke se bigaad dete hain.',
        },
        sections: [
          {
            pill: 'Illustrative Dirty Dataset: Online Orders (Before Cleaning)',
            blocks: [
              {
                type: 'table',
                headers: ['Order_ID', 'Customer', 'City', 'Amount_INR', 'Coupon_Code', 'Problem Identified'],
                rows: [
                  ['ORD-101', 'Aarav', 'Pune', '500', 'NULL', 'Blank Coupon_Code is NORMAL (no coupon used!)'],
                  ['ORD-102', 'Meera', 'Delhi', '700', 'SAVE10', 'Clean row'],
                  ['ORD-102', 'Meera', 'Delhi', '700', 'SAVE10', 'EXACT DUPLICATE of ORD-102!'],
                  ['ORD-103', 'Kabir', 'NULL', '600', 'NULL', 'Missing City — needs investigation'],
                  ['ORD-104', 'Zoya', 'Jaipur', 'NULL', 'SAVE10', 'Missing Amount_INR — critical field!'],
                ],
                noteEn:
                  'Sample Dataset: Look closely at total revenue BEFORE cleaning! Including the duplicate ORD-102 adds ₹700 of fake revenue (500 + 700 + 700 + 600 = ₹2,500 instead of true ₹1,800 from the 3 known orders)!',
                noteHi:
                  'Sample Dataset: Cleaning se pehle revenue dekhiye! Duplicate ORD-102 ki wajah se ₹700 fake revenue jud gaya (₹2,500 jabki 3 known orders ka asli total ₹1,800 hai)!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 2',
        pageTag: 'PAGE 2 OF 4',
        footerPage: '2 / 4',
        title: 'Do NOT Automatically Delete All Missing Values!',
        subtitle: 'UNDERSTAND WHY A VALUE IS MISSING BEFORE DECIDING HOW TO HANDLE IT',
        sections: [
          {
            pill: '4 Smart Ways to Handle Missing Values',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: '1. Keep / Label "None"',
                    bodyEn:
                      'When blank has real meaning! For `Coupon_Code = NULL`, the customer simply did not use a coupon — label it `"No_Coupon"`, do **NOT** delete the order!',
                    bodyHi:
                      'Jab blank ka khud ek matlab ho! `Coupon_Code = NULL` matlab coupon use nahi hua — ise `"No_Coupon"` likhein, order delete **MAT** karein!',
                    tone: 'green',
                  },
                  {
                    title: '2. Recover From Source',
                    bodyEn:
                      'Check another table (e.g., look up Kabir’s City in the `Customers` table or Zoya’s Amount in the payment gateway log).',
                    bodyHi:
                      'Kisi dusri table se asli value wapas laayein (jaise `Customers` table se Kabir ka City ya payment log se Zoya ka Amount).',
                    tone: 'sky',
                  },
                  {
                    title: '3. Impute (Fill Reasonably) + Flag',
                    bodyEn:
                      'For numerical fields in modeling, fill with **Median** or group average (or `"Unknown"` for categories) AND optionally add a flag column `was_missing = True`.',
                    bodyHi:
                      'Numerical fields ko **Median** ya group average se fill karein (categories ko `"Unknown"`), aur zaroorat ho toh `was_missing = True` flag rakhein.',
                    tone: 'amber',
                  },
                  {
                    title: '4. Drop Rows (Last Resort)',
                    bodyEn:
                      'Only drop when very few rows are affected, the missing field is essential (like missing Target), and dropping will not bias the dataset.',
                    bodyHi:
                      'Sirf tab drop karein jab bahut kam rows affected hon, zaroori field (jaise Target) missing ho, aur drop karne se bias na aaye.',
                    tone: 'pink',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 2',
        pageTag: 'PAGE 3 OF 4',
        footerPage: '3 / 4',
        title: 'Exact Duplicates vs Near-Duplicates',
        subtitle: 'SPOTTING BOTH TYPES SAFELY',
        sections: [
          {
            pill: 'Cleaned Dataset (After Fixing Duplicates & Missing Values)',
            blocks: [
              {
                type: 'table',
                headers: ['Order_ID', 'Customer', 'City', 'Amount_INR', 'Coupon_Code', 'Action Taken'],
                rows: [
                  ['ORD-101', 'Aarav', 'Pune', '500', 'No_Coupon', 'Filled meaningful blank as No_Coupon'],
                  ['ORD-102', 'Meera', 'Delhi', '700', 'SAVE10', 'Kept 1 copy; removed 1 exact duplicate'],
                  ['ORD-103', 'Kabir', 'Unknown', '600', 'No_Coupon', 'Labeled missing City as Unknown (kept ₹600 sale!)'],
                  ['ORD-104', 'Zoya', 'Jaipur', '450', 'SAVE10', 'Recovered true ₹450 from payment receipt log'],
                ],
                noteEn:
                  'Verified Clean Total: 500 + 700 + 600 + 450 = ₹2,250 across 4 true unique orders. Zero valid sales were blindly deleted!',
                noteHi:
                  'Verified Clean Total: 500 + 700 + 600 + 450 = ₹2,250 (4 unique orders). Ek bhi valid sale galti se delete nahi hui!',
              },
            ],
          },
          {
            pill: 'Watch Out for Near-Duplicates Too!',
            blocks: [
              {
                type: 'note',
                tone: 'lavender',
                bodyEn:
                  'Sometimes a duplicate is **not 100% identical** — for example, `"Rohan Sharma | 9876543210"` and `"R. Sharma | 9876543210"`. That is a **Near-Duplicate** (same customer entered twice with slightly different spelling). Always check unique keys like `Order_ID`, `Email`, or `Phone`, not just full-row exact matches.',
                bodyHi:
                  'Kayi baar duplicate **100% identical nahi** hota — jaise `"Rohan Sharma | 9876543210"` aur `"R. Sharma | 9876543210"`. Ise **Near-Duplicate** kehte hain. Hamesha `Order_ID`, `Email` ya `Phone` jaise unique keys par bhi duplicates check kariye.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 2',
        pageTag: 'PAGE 4 OF 4',
        footerPage: '4 / 4',
        title: 'Key Takeaways',
        subtitle: 'THINK BEFORE YOU DELETE',
        sections: [
          {
            pill: 'Golden Rules for Missing Values & Duplicates',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: 'Never blindly delete all rows with missing values — first ask **why** the value is missing.',
                    hi: 'Missing values wali saari rows kabhi blindly delete mat kariye — pehle samajhiye ki value missing **kyun** hai.',
                  },
                  {
                    en: 'Check for both **Exact Duplicates** (identical rows) and **Near-Duplicates** (same ID/person with slight text variations).',
                    hi: '**Exact Duplicates** aur **Near-Duplicates** dono ko check kariye.',
                  },
                  {
                    en: 'Always verify totals and row counts before and after cleaning to measure the exact business impact.',
                    hi: 'Cleaning se pehle aur baad mein row counts aur totals zaroor verify kariye.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TOPIC 26: Inconsistent Values and Data Types
  // --------------------------------------------------------------------------
  26: {
    module: 'DS-M04',
    moduleTitle: 'Data Quality and Preparation',
    topic: 'Inconsistent Values and Data Types',
    pageCount: 3,
    sampleDataNotice:
      'All sample sales rows below are illustrative datasets demonstrating standardization and type conversion.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 3',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Inconsistent Values and Data Types',
        subtitle: 'WHY COMPUTERS THINK "MUMBAI" AND "mumbai " ARE TWO DIFFERENT CITIES',
        intro: {
          icon: 'table',
          titleEn: 'Humans Read Meaning — Computers Read Exact Characters',
          titleHi: 'Insaan Matlab Samajhta Hai — Computer Exact Characters Dekhta Hai',
          bodyEn:
            'If a human sees `"Mumbai"`, `"mumbai"`, `"MUM"`, and `" Mumbai "` (with extra spaces), they immediately know all four mean the same city. A computer treats them as **four completely separate cities**! Similarly, if a price is stored as text (`"₹500"`) instead of a number (`500`), the computer cannot add or average it.',
          bodyHi:
            'Agar insaan `"Mumbai"`, `"mumbai"`, `"MUM"`, aur `" Mumbai "` dekhe, toh wo turant samajh jaata hai ki yeh ek hi shehar hai. Par computer inhe **4 alag cities** maan leta hai! Isi tarah agar price text (`"₹500"`) ke roop mein stored ho, toh computer uska sum ya average nahi nikaal sakta.',
        },
        sections: [
          {
            pill: 'Illustrative Dirty Table: Inconsistent Text, Dates, and Types',
            blocks: [
              {
                type: 'table',
                headers: ['Row', 'City (Messy)', 'Order_Date (Mixed)', 'Price (Wrong Type)', 'Problem'],
                rows: [
                  ['1', '"mumbai"', '05/11/2026', '"₹500"', 'Lowercase city + currency symbol makes Price text'],
                  ['2', '"Mumbai "', '2026-11-05', '700', 'Hidden trailing space in city'],
                  ['3', '"MUM"', 'Nov 5, 2026', '"700.00"', 'Abbreviation + text number + different date style'],
                  ['4', '"MUMBAI"', '05-11-26', '"1,200"', 'ALL CAPS + comma inside number string'],
                ],
                noteEn:
                  'If you group sales by City BEFORE cleaning, Mumbai splits into 4 tiny bars instead of 1 combined total, and SUM(Price) crashes or ignores the text rows!',
                noteHi:
                  'Agar cleaning se pehle City-wise total nikaalein, toh Mumbai 4 alag bars mein toot jaayega aur SUM(Price) text rows ko add nahi kar paayega!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 3',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Standardizing to One Clean Format',
        subtitle: 'AFTER CLEANING: READY FOR ACCURATE SUMS AND CHARTS',
        sections: [
          {
            pill: 'Cleaned Table (After Standardization & Type Conversion)',
            blocks: [
              {
                type: 'table',
                headers: ['Row', 'City (Clean Text)', 'Order_Date (ISO Date)', 'Price_INR (Numeric)', 'Fix Applied'],
                rows: [
                  ['1', 'Mumbai', '2026-11-05', '500', 'Title-cased city, stripped "₹", converted to number'],
                  ['2', 'Mumbai', '2026-11-05', '700', 'Trimmed trailing whitespace'],
                  ['3', 'Mumbai', '2026-11-05', '700', 'Mapped "MUM" → "Mumbai", parsed date & decimal'],
                  ['4', 'Mumbai', '2026-11-05', '1200', 'Standardized case, removed comma, converted to number'],
                ],
                noteEn:
                  'Verified Clean Result: All 4 rows now group cleanly under "Mumbai" on 2026-11-05 with an exact total of 500 + 700 + 700 + 1200 = ₹3,100!',
                noteHi:
                  'Verified Clean Result: Ab chaaron rows cleanly "Mumbai" (2026-11-05) mein group hoti hain aur exact total aata hai 500 + 700 + 700 + 1200 = ₹3,100!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 3',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: '4 Standardization Habits to Use on Every Dataset',
        subtitle: 'KEY TAKEAWAYS',
        sections: [
          {
            pill: 'Standardization Checklist',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: '**Trim & Normalize Text:** Remove leading/trailing spaces and apply consistent capitalization (e.g., `"Mumbai"`).',
                    hi: '**Trim & Normalize Text:** Extra spaces hatayein aur ek hi capitalization rule use karein.',
                  },
                  {
                    en: '**Map Synonyms & Abbreviations:** Standardize `"MUM"` → `"Mumbai"`, `"Y"/"Yes"/"1"` → `True`.',
                    hi: '**Map Synonyms:** `"MUM"` → `"Mumbai"`, `"Y"/"Yes"/"1"` → `True` jaise ek uniform code rakhein.',
                  },
                  {
                    en: '**Use ISO Dates (`YYYY-MM-DD`):** Eliminates confusion between `05/06/2026` (May 6 vs June 5)!',
                    hi: '**ISO Dates (`YYYY-MM-DD`) use karein:** Isse `05/06/2026` (5 June ya 6 May) ki confusion khatam hoti hai!',
                  },
                  {
                    en: '**Enforce True Data Types:** Strip currency symbols (`₹`, `$`) and commas before converting price columns to numeric.',
                    hi: '**True Data Types:** Price columns se `₹`, `$` aur commas hatakar unhe proper numeric type mein badlein.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TOPIC 27: Outliers and Invalid Records
  // --------------------------------------------------------------------------
  27: {
    module: 'DS-M04',
    moduleTitle: 'Data Quality and Preparation',
    topic: 'Outliers and Invalid Records',
    pageCount: 4,
    sampleDataNotice:
      'All customer age, stationery store order, and average calculations below are illustrative sample datasets.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 4',
        pageTag: 'PAGE 1 OF 4',
        footerPage: '1 / 4',
        title: 'Outliers and Invalid Records',
        subtitle: 'THE CRUCIAL DIFFERENCE BETWEEN AN UNUSUAL REAL VALUE AND AN IMPOSSIBLE ERROR',
        intro: {
          icon: 'database',
          titleEn: 'Not Every Extreme Number Is a Mistake!',
          titleHi: 'Har Bada Ya Chhota Number Galti Nahi Hota!',
          bodyEn:
            'Beginners often delete every extreme number they see in a dataset. That can be a huge mistake! You must always separate **Invalid Records** (data that is **impossible** in real life, like `Age = -5` or `Delivery_Minutes = -20`) from **Legitimate Outliers** (values that are **unusual, yet genuinely happened**, like a school placing a ₹50,000 bulk order at a stationery shop).',
          bodyHi:
            'Beginners aksar har extreme number ko delete kar dete hain — yeh badi galti ho sakti hai! Hamesha antar samajhiye: **Invalid Records** wo hote hain jo real life mein **impossible** hain (jaise `Age = -5` ya `Delivery_Minutes = -20`), jabki **Legitimate Outliers** wo values hain jo **unusual hain par sach mein hui hain** (jaise stationery shop par kisi school ka ₹50,000 ka bulk order).',
        },
        sections: [
          {
            pill: 'Invalid Record vs Legitimate Outlier',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'Invalid Record (Error — Must Fix/Remove)',
                    bodyEn:
                      'Breaks physical or business reality. Examples: `Customer_Age = -8`, `Customer_Age = 245`, `Order_Date = 2099-01-01`, `Discount = 150%`.',
                    bodyHi:
                      'Real-world rules todta hai. Examples: `Customer_Age = -8`, `Customer_Age = 245`, `Order_Date = 2099-01-01`, `Discount = 150%`.',
                    tone: 'pink',
                  },
                  {
                    title: 'Legitimate Outlier (Rare Truth — Investigate!)',
                    bodyEn:
                      'Far from typical values, yet completely real. Examples: A VIP corporate bulk purchase, a festival-day traffic spike, or a genuine fraud attempt.',
                    bodyHi:
                      'Normal range se bahut alag, par bilkul sach! Examples: VIP corporate bulk order, festival spike, ya asli fraud transaction.',
                    tone: 'sky',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 4',
        pageTag: 'PAGE 2 OF 4',
        footerPage: '2 / 4',
        title: 'Illustrative Example: Stationery Store Daily Orders',
        subtitle: 'SEEING HOW ONE EXTREME VALUE AFFECTS THE AVERAGE (MEAN) VS MEDIAN',
        sections: [
          {
            pill: 'Sample Dataset: 6 Orders at a Stationery Shop',
            blocks: [
              {
                type: 'table',
                headers: ['Order_ID', 'Customer_Type', 'Customer_Age', 'Order_INR', 'Classification'],
                rows: [
                  ['S-01', 'Retail Student', '19', '200', 'Normal retail order'],
                  ['S-02', 'Retail Student', '21', '300', 'Normal retail order'],
                  ['S-03', 'Retail Parent', '38', '400', 'Normal retail order'],
                  ['S-04', 'Retail Teacher', '32', '500', 'Normal retail order'],
                  ['S-05', 'Local School (Bulk)', '45', '10,600', 'LEGITIMATE OUTLIER (Real VIP bulk sale!)'],
                  ['S-06', 'Retail Student', '-15', '350', 'INVALID RECORD (Age = -15 is impossible!)'],
                ],
                noteEn:
                  'Verified Math on S-01 to S-05: Without S-05, average retail order = (200+300+400+500)/4 = ₹350. With S-05 included, Mean jumps to (200+300+400+500+10600)/5 = ₹2,400 — while the Median stays ₹400!',
                noteHi:
                  'Verified Math (S-01 se S-05): S-05 ke bina average = ₹350. S-05 jodte hi Mean seedha ₹2,400 ho jaata hai — jabki Median sirf ₹400 rehta hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 4',
        pageTag: 'PAGE 3 OF 4',
        footerPage: '3 / 4',
        title: 'How to Treat Outliers and Invalid Records Properly',
        subtitle: 'NEVER BLINDLY DELETE — CHOOSE THE RIGHT STRATEGY',
        sections: [
          {
            pill: 'Decision Guide',
            blocks: [
              {
                type: 'table',
                headers: ['Case', 'Correct Action', 'Why?'],
                rows: [
                  ['Invalid Age = -15 (S-06)', 'Verify original form; if unrecoverable, set Age to NULL (keep valid ₹350 order!).', 'Fixes the impossible age without losing real sales revenue.'],
                  ['Legitimate Bulk Order ₹10,600 (S-05)', 'Keep it! Analyze Retail vs Bulk segments separately, or report Median alongside Mean.', 'Deleting real VIP sales hides your biggest customer!'],
                  ['Fraud Detection Project', 'Keep and study outliers closely — outliers ARE the exact events you want to catch!', 'Fraudulent transactions naturally look like extreme outliers.'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 4',
        pageTag: 'PAGE 4 OF 4',
        footerPage: '4 / 4',
        title: 'Key Takeaways',
        subtitle: 'INVESTIGATE BEFORE YOU ACT',
        sections: [
          {
            pill: 'Remember About Outliers & Invalid Data',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: '**Invalid Records** violate reality (negative age, impossible dates) and must be corrected or nulled.',
                    hi: '**Invalid Records** reality ke khilaaf hote hain (negative age, impossible date) — inhe fix ya null karna zaroori hai.',
                  },
                  {
                    en: '**Legitimate Outliers** are real, unusual events (VIP bulk orders, fraud spikes) — **never blindly delete them**!',
                    hi: '**Legitimate Outliers** asli unusual events hote hain (VIP orders, fraud spikes) — **inhe blindly delete mat kariye**!',
                  },
                  {
                    en: 'When real outliers exist, report the **Median** alongside the **Mean**, or separate customer segments cleanly.',
                    hi: 'Jab real outliers hon, toh **Mean** ke saath **Median** zaroor dikhayein ya segments ko alag analyze karein.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TOPIC 28: Data Validation Rules
  // --------------------------------------------------------------------------
  28: {
    module: 'DS-M04',
    moduleTitle: 'Data Quality and Preparation',
    topic: 'Data Validation Rules',
    pageCount: 3,
    sampleDataNotice:
      'All sample validation rules and employee/order records below are illustrative learning examples.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 5',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Data Validation Rules',
        subtitle: 'AUTOMATIC SAFETY GATES THAT CATCH BAD DATA BEFORE IT ENTERS YOUR ANALYSIS',
        intro: {
          icon: 'table',
          titleEn: 'What Are Data Validation Rules?',
          titleHi: 'Data Validation Rules Kya Hote Hain?',
          bodyEn:
            'Have you ever filled out an online form, typed an invalid email without `@`, and immediately seen a red warning message? That is a **Data Validation Rule**! In Data Science, Validation Rules are **explicit, automated checks** applied to datasets so errors are caught automatically instead of manually eyeballing thousands of rows.',
          bodyHi:
            'Kya kabhi online form bharte waqt bina `@` ke email dalne par red warning aayi hai? Wahi **Data Validation Rule** hai! Data Science mein Validation Rules **automatic safety checks** hote hain jo hazaaron rows mein galtiyon ko khud pakad lete hain.',
        },
        sections: [
          {
            pill: 'The 6 Essential Types of Validation Rules',
            blocks: [
              {
                type: 'table',
                headers: ['Rule Type', 'What It Checks', 'Clear Example'],
                rows: [
                  ['1. Not-Null (Mandatory)', 'Required fields must not be blank.', '`order_id` and `order_date` cannot be NULL.'],
                  ['2. Data Type Check', 'Values match the expected type.', '`amount_inr` must be a valid number, not text.'],
                  ['3. Range Check', 'Numbers/dates stay inside valid bounds.', '`age` between 0 and 120; `discount_pct` between 0 and 100.'],
                  ['4. Format / Pattern Check', 'Text follows an expected structure.', '`pin_code` = 6 digits; `order_date` = `YYYY-MM-DD`.'],
                  ['5. Allowed List (Domain)', 'Category belongs to approved values.', '`status` must be in `{Pending, Shipped, Delivered, Canceled}`.'],
                  ['6. Cross-Field & Key Check', 'Columns agree with each other & other tables.', '`delivery_date >= order_date`; `customer_id` exists in `Customers`.'],
                ],
                noteEn:
                  'Notice Cross-Field validation (#6): both `2026-11-10` and `2026-11-05` are valid dates alone, yet a package cannot be delivered BEFORE it was ordered!',
                noteHi:
                  'Cross-Field check (#6) dekhiye: dono dates akele valid hain, par koi package order hone se PEHLE deliver nahi ho sakta!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 5',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Seeing Validation Rules Catch Errors Automatically',
        subtitle: 'PASS VS QUARANTINE WORKFLOW',
        sections: [
          {
            pill: 'How a Validation Gate Protects Your Dataset',
            blocks: [
              {
                type: 'flow',
                items: [
                  {
                    title: 'Incoming Batch',
                    bodyEn: 'New daily CSV or database rows arrive.',
                    bodyHi: 'Roz ki nayi CSV ya database rows aati hain.',
                    tone: 'sky',
                  },
                  {
                    title: 'Run Rule Checks',
                    bodyEn: 'Test Not-Null, Range, Format, Allowed List, and Cross-Field rules.',
                    bodyHi: 'Not-Null, Range, Format, Allowed List aur Cross-Field rules check hote hain.',
                    tone: 'amber',
                  },
                  {
                    title: 'Pass → Clean Table',
                    bodyEn: 'Valid rows move safely into analytics & dashboards.',
                    bodyHi: 'Valid rows safely analytics aur dashboards mein jaati hain.',
                    tone: 'green',
                  },
                  {
                    title: 'Fail → Error Log',
                    bodyEn: 'Failed rows go to a quarantine log with the exact rule broken.',
                    bodyHi: 'Failed rows quarantine log mein jaati hain exact reason ke saath.',
                    tone: 'pink',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 5',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'PREVENTION BEATS MANUAL CLEANUP',
        sections: [
          {
            pill: 'Why Validation Rules Save Hours Every Week',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: 'Write **Data Validation Rules** once and run them automatically on every fresh batch of data.',
                    hi: '**Data Validation Rules** ek baar banaiye aur har naye data batch par automatically chalaiye.',
                  },
                  {
                    en: 'Always include **Cross-Field rules** (like `delivery_date >= order_date` and `net_amount <= gross_amount`) — single-column checks miss logical contradictions.',
                    hi: '**Cross-Field rules** (jaise `delivery_date >= order_date`) zaroor shamil kariye — sirf single-column checks logical galtiyan nahi pakad paate.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TOPIC 29: Data Cleaning Workflow
  // --------------------------------------------------------------------------
  29: {
    module: 'DS-M04',
    moduleTitle: 'Data Quality and Preparation',
    topic: 'Data Cleaning Workflow',
    pageCount: 4,
    sampleDataNotice:
      'The clinic billing dataset below is an illustrative end-to-end sample demonstrating before-and-after cleaning.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 6',
        pageTag: 'PAGE 1 OF 4',
        footerPage: '1 / 4',
        title: 'Data Cleaning Workflow',
        subtitle: 'PUTTING EVERY CLEANING SKILL INTO ONE SAFE, REPEATABLE ORDER',
        intro: {
          icon: 'database',
          titleEn: 'Why Order Matters When Cleaning Data',
          titleHi: 'Data Clean Karte Waqt Sahi Order Kyun Zaroori Hai?',
          bodyEn:
            'If you calculate averages before removing duplicates, or check duplicates before standardizing `"mumbai"` vs `"Mumbai"`, you will miss hidden errors! A **Data Cleaning Workflow** gives you a safe, step-by-step sequence — starting with **always backing up the raw data** so nothing original is ever lost.',
          bodyHi:
            'Agar aap duplicates hatane se pehle average nikaal lein, ya `"mumbai"` aur `"Mumbai"` ko ek jaisa kiye bina duplicates check karein, toh galtiyan chhoot jaayengi! **Data Cleaning Workflow** aapko ek safe step-by-step order deta hai — jiski shuruat hamesha **raw data ke backup** se hoti hai.',
        },
        sections: [
          {
            pill: 'The 6-Step End-to-End Cleaning Sequence',
            blocks: [
              {
                type: 'flow',
                items: [
                  {
                    title: '1. Preserve Raw Copy',
                    bodyEn: 'Never overwrite the original raw file — work on a copy.',
                    bodyHi: 'Original raw file ko kabhi overwrite mat karein — hamesha copy par kaam karein.',
                    tone: 'sky',
                  },
                  {
                    title: '2. Inspect & Audit',
                    bodyEn: 'Profile row count, schema, nulls, duplicates, and min/max values.',
                    bodyHi: 'Row count, schema, nulls, duplicates aur min/max values audit karein.',
                    tone: 'amber',
                  },
                  {
                    title: '3. Standardize & Types',
                    bodyEn: 'Fix text casing, trim spaces, ISO dates, and numeric types.',
                    bodyHi: 'Text casing, extra spaces, ISO dates aur numeric types theek karein.',
                    tone: 'lavender',
                  },
                  {
                    title: '4. Deduplicate & Fix',
                    bodyEn: 'Remove duplicates, handle missing values & invalid records.',
                    bodyHi: 'Duplicates hatayein, missing values aur invalid records handle karein.',
                    tone: 'green',
                  },
                  {
                    title: '5. Validate & Export',
                    bodyEn: 'Re-run validation rules, verify totals, and save cleaned dataset + log.',
                    bodyHi: 'Validation rules dubara chalayein, totals verify karein aur clean file + log save karein.',
                    tone: 'pink',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 6',
        pageTag: 'PAGE 2 OF 4',
        footerPage: '2 / 4',
        title: 'End-to-End Walkthrough: Dirty Clinic Billing Table',
        subtitle: 'STEP 1: IDENTIFYING ALL 4 ISSUES IN THE RAW DATA',
        sections: [
          {
            pill: 'Before Cleaning (Illustrative Raw Dataset — 5 Rows)',
            blocks: [
              {
                type: 'table',
                headers: ['Visit_ID', 'Department', 'Visit_Date', 'Fee_INR', 'Issue Found'],
                rows: [
                  ['V-01', 'Dental', '2026-10-01', '500', 'Clean'],
                  ['V-02', 'dental ', '01/10/2026', '"₹500"', 'Lowercase + space + mixed date + text fee'],
                  ['V-02', 'Dental', '2026-10-01', '500', 'Duplicate Visit_ID V-02 (revealed after standardizing!)'],
                  ['V-03', 'Eye Care', '2026-10-02', '-300', 'Invalid negative fee (-300)'],
                  ['V-04', 'Eye Care', '2026-10-02', '600', 'Clean'],
                ],
                noteEn:
                  'Look at why Step 3 comes before Step 4: until you standardize `"dental "` and `"₹500"` on Row 2, a computer does not even realize Row 2 and Row 3 are the exact same visit `V-02`!',
                noteHi:
                  'Dekhiye Step 3 ko Step 4 se pehle kyun rakhte hain: jab tak `"dental "` aur `"₹500"` standardize nahi honge, computer ko pata hi nahi chalega ki Row 2 aur Row 3 dono ek hi visit `V-02` hain!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 6',
        pageTag: 'PAGE 3 OF 4',
        footerPage: '3 / 4',
        title: 'After Cleaning & Measured Business Impact',
        subtitle: 'VERIFIED CLEAN DATASET',
        sections: [
          {
            pill: 'After Cleaning (Verified Clean Dataset — 4 True Visits)',
            blocks: [
              {
                type: 'table',
                headers: ['Visit_ID', 'Department', 'Visit_Date', 'Fee_INR', 'Cleaning Note'],
                rows: [
                  ['V-01', 'Dental', '2026-10-01', '500', 'Unchanged'],
                  ['V-02', 'Dental', '2026-10-01', '500', 'Standardized & deduplicated (removed 1 duplicate row)'],
                  ['V-03', 'Eye Care', '2026-10-02', '300', 'Confirmed with clinic receipt: minus sign was a typo'],
                  ['V-04', 'Eye Care', '2026-10-02', '600', 'Unchanged'],
                ],
                noteEn:
                  'Verified Business Impact: Raw numeric sum looked messy (500 + 500 - 300 + 600 = ₹1,300 while ignoring text "₹500"). True clean clinic revenue = 500 + 500 + 300 + 600 = ₹1,900 across 4 unique visits!',
                noteHi:
                  'Verified Business Impact: Raw data mein revenue ₹1,300 (galat) dikh raha tha. Cleaning ke baad asli verified revenue = 500 + 500 + 300 + 600 = ₹1,900 (4 unique visits)!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 6',
        pageTag: 'PAGE 4 OF 4',
        footerPage: '4 / 4',
        title: 'Key Takeaways',
        subtitle: 'CLEANING SAFELY AND SYSTEMATICALLY',
        sections: [
          {
            pill: 'Core Rules of a Professional Cleaning Workflow',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: 'Always keep an untouched **raw backup** so you can audit or undo any step.',
                    hi: 'Hamesha ek untouched **raw backup** rakhiye taaki zaroorat padne par audit ya undo kiya ja sake.',
                  },
                  {
                    en: '**Standardize formats and types BEFORE deduplicating** — otherwise near-duplicates slip through.',
                    hi: '**Deduplicating se PEHLE formats aur types standardize kariye** — warna near-duplicates pakad mein nahi aate.',
                  },
                  {
                    en: 'Finish every workflow by re-running validation checks and comparing **before-vs-after row counts and totals**.',
                    hi: 'Har workflow ke end mein validation checks aur **before-vs-after row counts wa totals** zaroor verify kariye.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TOPIC 30: Documenting Data Preparation
  // --------------------------------------------------------------------------
  30: {
    module: 'DS-M04',
    moduleTitle: 'Data Quality and Preparation',
    topic: 'Documenting Data Preparation',
    pageCount: 3,
    sampleDataNotice:
      'The Data Dictionary and Cleaning Log examples below are illustrative beginner documentation templates.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 7',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Documenting Data Preparation',
        subtitle: 'IF YOU CANNOT EXPLAIN HOW YOU CLEANED THE DATA, NOBODY CAN TRUST THE RESULT',
        intro: {
          icon: 'table',
          titleEn: 'Why Documentation Is a Core Data Science Skill',
          titleHi: 'Documentation Ek Core Data Science Skill Kyun Hai?',
          bodyEn:
            'Imagine cleaning a dataset on Monday, and two months later your manager asks: *"Why did 42 rows disappear from the Q3 report, and how did you fill the missing prices?"* If you relied only on memory, you will be stuck! **Documenting Data Preparation** records every rule, assumption, and transformation so your work is **transparent, auditable, and reproducible**.',
          bodyHi:
            'Sochiye aapne Monday ko data clean kiya, aur 2 mahine baad manager pooche: *"Q3 report se 42 rows kahan gayi aur missing prices kaise fill kiye?"* Agar aap sirf yaaddasht par nirbhar the, toh aap phans jaayenge! **Documenting Data Preparation** har rule, assumption aur change ko record karta hai taaki aapka kaam **transparent aur reproducible** rahe.',
        },
        sections: [
          {
            pill: 'The 2 Essential Documents Every Project Needs',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: '1. Data Dictionary',
                    bodyEn:
                      'Explains every column’s **name, meaning, units (INR, kg, minutes), data type, and allowed values** — so teammates never misread `amount` as dollars instead of rupees.',
                    bodyHi:
                      'Har column ka **naam, matlab, unit (INR, kg, minutes), data type aur allowed values** likhta hai — taaki koi bhi column ko galat na samjhe.',
                    tone: 'sky',
                  },
                  {
                    title: '2. Data Cleaning Log',
                    bodyEn:
                      'Records **what issue was found, how many rows were affected, what rule fixed it, and why** — creating a clear audit trail from raw file to clean file.',
                    bodyHi:
                      'Record karta hai ki **kaun sa issue mila, kitni rows affected thin, kis rule se fix kiya aur kyun** — raw se clean file tak ka poora audit trail.',
                    tone: 'lavender',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 7',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Sample Data Cleaning Log Template',
        subtitle: 'SIMPLE, CLEAR, AND EASY TO MAINTAIN',
        sections: [
          {
            pill: 'Illustrative Cleaning Log (Clinic Billing Dataset)',
            blocks: [
              {
                type: 'table',
                headers: ['Step', 'Issue Found', 'Rows Affected', 'Action Taken & Reason'],
                rows: [
                  ['1', 'Inconsistent Department casing ("dental ")', '1 row', 'Trimmed spaces and applied Title Case ("Dental").'],
                  ['2', 'Currency symbol in Fee_INR ("₹500")', '1 row', 'Stripped "₹" and converted column to numeric integer.'],
                  ['3', 'Duplicate Visit_ID V-02', '1 row removed', 'Removed exact duplicate after standardization to prevent double counting.'],
                  ['4', 'Negative fee (-300) on V-03', '1 row corrected', 'Verified with clinic receipt log; updated to 300.'],
                ],
                noteEn:
                  'Notice how clearly this 4-row log answers every question a teammate, auditor, or future version of yourself could ever ask!',
                noteHi:
                  'Dekhiye: yeh chhota sa 4-row log har us sawaal ka saaf jawaab de deta hai jo koi teammate, auditor ya 6 mahine baad aap khud pooch sakte hain!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 7',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'BUILD TRUST THROUGH REPRODUCIBILITY',
        sections: [
          {
            pill: 'Good Documentation Habits',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: 'Always pair your cleaned dataset with a **Data Dictionary** (column definitions & units) and a **Cleaning Log** (what changed & why).',
                    hi: 'Har cleaned dataset ke saath ek **Data Dictionary** aur ek **Cleaning Log** zaroor rakhiye.',
                  },
                  {
                    en: 'Use clear file version names (e.g., `clinic_billing_raw_2026-10.csv` → `clinic_billing_clean_v1.csv`) so raw and clean files never get mixed up.',
                    hi: 'Clear file names (jaise `raw` vs `clean_v1`) use kariye taaki raw aur clean files kabhi mix na hon.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TOPIC 31: Creating a Reusable Cleaning Checklist
  // --------------------------------------------------------------------------
  31: {
    module: 'DS-M04',
    moduleTitle: 'Data Quality and Preparation',
    topic: 'Creating a Reusable Cleaning Checklist',
    pageCount: 3,
    sampleDataNotice:
      'This checklist synthesizes all Data Science Foundations (M01–M04) preparation practices into a reusable project blueprint.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 8',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Creating a Reusable Cleaning Checklist',
        subtitle: 'YOUR PILOT PRE-FLIGHT CHECKLIST FOR EVERY FUTURE DATASET',
        intro: {
          icon: 'database',
          titleEn: 'Why Experienced Data Scientists Still Use Checklists',
          titleHi: 'Experienced Data Scientists Bhi Checklist Kyun Use Karte Hain?',
          bodyEn:
            'Even veteran airline pilots with thousands of flight hours use a **pre-flight checklist** before every takeoff — not because they forgot how to fly, but because checklists prevent small oversights from turning into major failures. A **Reusable Data Cleaning Checklist** ensures you inspect every new dataset with the same high standard every single time.',
          bodyHi:
            'Hazaaron ghante udaan bharne wale expert pilots bhi har flight se pehle **pre-flight checklist** use karte hain — taaki koi chhoti si galti bada nuksaan na kar de. **Reusable Data Cleaning Checklist** ensure karti hai ki aap har naye dataset ko har baar usi high quality standard se check karein.',
        },
        sections: [
          {
            pill: 'Master 6-Stage Reusable Cleaning Checklist',
            blocks: [
              {
                type: 'table',
                headers: ['Stage', 'Mandatory Checks to Complete'],
                rows: [
                  ['1. Backup & Privacy', 'Save untouched raw copy; confirm consent & mask/remove unnecessary PII before sharing.'],
                  ['2. Structure & Schema', 'Verify row/column counts, column names, units, and expected data types (Numerical vs Categorical vs Date).'],
                  ['3. Standardization', 'Trim extra spaces, unify text casing & synonyms ("MUM" → "Mumbai"), convert all dates to ISO `YYYY-MM-DD`, strip currency symbols.'],
                  ['4. Duplicates & Missing', 'Check exact & key-based duplicates; investigate WHY values are missing before keeping, recovering, imputing, or dropping.'],
                  ['5. Outliers & Validity', 'Run range, format, allowed-list, and cross-field rules; separate IMPOSSIBLE invalid records from REAL unusual outliers.'],
                  ['6. Verify & Document', 'Compare before/after row counts & key totals; update Data Dictionary and Cleaning Log; save versioned clean output.'],
                ],
                noteEn:
                  'Bookmark this 6-stage table! Whether you work in Excel, SQL, or Python in later modules, these exact 6 stages apply to every tabular dataset.',
                noteHi:
                  'Is 6-stage table ko yaad rakhiye! Aage chahe aap Excel, SQL ya Python use karein, har tabular dataset par yahi 6 stages kaam aati hain.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 8',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Adapting Your Checklist to Different Projects',
        subtitle: 'ONE CORE CHECKLIST + DOMAIN-SPECIFIC ADDITIONS',
        sections: [
          {
            pill: 'Adding Domain Checks On Top of Your Core Checklist',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'E-Commerce / Retail Add-Ons',
                    bodyEn:
                      'Check `order_total == quantity * unit_price - discount`, separate canceled/returned orders, verify currency units.',
                    bodyHi:
                      '`order_total == quantity * unit_price - discount` check karein, canceled/returned orders alag karein, aur currency verify karein.',
                    tone: 'sky',
                  },
                  {
                    title: 'Healthcare / Clinic Add-Ons',
                    bodyEn:
                      'Verify strict PII masking, check physiological ranges (e.g., body temperature, heart rate), confirm `discharge_date >= admission_date`.',
                    bodyHi:
                      'Strict PII masking check karein, valid medical ranges (temperature, heart rate) aur `discharge_date >= admission_date` verify karein.',
                    tone: 'green',
                  },
                  {
                    title: 'Time-Series / Forecast Add-Ons',
                    bodyEn:
                      'Check for missing dates/gaps, consistent time zones, and separate holiday/festival spikes cleanly.',
                    bodyHi:
                      'Missing dates ya gaps check karein, ek hi time zone rakhein, aur festival spikes ko alag mark karein.',
                    tone: 'lavender',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M04 | TOPIC 8',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Congratulations — Foundations Complete!',
        subtitle: 'YOU ARE READY FOR HANDS-ON DATA SCIENCE TOOLS',
        sections: [
          {
            pill: 'What You Have Mastered Across Modules M01 to M04',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: '**M01:** What Data Science truly is, how it works in real life, how it overlaps with Analytics/ML/AI, and the full iterative Lifecycle.',
                    hi: '**M01:** Data Science kya hai, real life mein kaise kaam karta hai, Analytics/ML/AI se kaise juda hai, aur poora Lifecycle.',
                  },
                  {
                    en: '**M02:** Framing Business Problems, Data Questions, Success & Guardrail Metrics, Features vs Targets, Analysis Plans, and avoiding classic mistakes.',
                    hi: '**M02:** Business Problems, Data Questions, Metrics, Features vs Targets, Analysis Plan, aur common mistakes se bachna.',
                  },
                  {
                    en: '**M03:** Structured/Semi-Structured/Unstructured data, Numerical vs Categorical types, Files/Databases/APIs, CSV/Excel/JSON/Parquet, Schemas, and Privacy.',
                    hi: '**M03:** Data shapes, Numerical/Categorical types, Files/Databases/APIs, CSV/Excel/JSON/Parquet, Schemas, aur Privacy.',
                  },
                  {
                    en: '**M04:** The 6 Data Quality dimensions, Missing/Duplicate handling, Standardization, Outliers vs Invalid records, Validation Rules, Documentation, and your Reusable Checklist!',
                    hi: '**M04:** Data Quality ke 6 dimensions, Missing/Duplicates, Standardization, Outliers vs Invalid records, Validation Rules, Documentation, aur Reusable Checklist!',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
