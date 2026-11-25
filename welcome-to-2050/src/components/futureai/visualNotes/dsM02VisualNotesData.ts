import type { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

// ============================================================================
// MODULE 2 (DS-M02): Problem-Solving and Business Understanding — Topics 9 to 15
// ============================================================================

export const DS_M02_VISUAL_NOTES: Record<number, StructuredVisualNoteTopic> = {
  // --------------------------------------------------------------------------
  // TOPIC 9: Identifying a Business Problem
  // --------------------------------------------------------------------------
  9: {
    module: 'DS-M02',
    moduleTitle: 'Problem-Solving and Business Understanding',
    topic: 'Identifying a Business Problem',
    pageCount: 3,
    sampleDataNotice:
      'All cafe, online bookstore, and clinic appointment scenarios are illustrative examples created for learning.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 1',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Identifying a Business Problem',
        subtitle: 'SOLVING THE RIGHT PROBLEM MATTERS MORE THAN FANCY TOOLS',
        intro: {
          icon: 'database',
          titleEn: 'What Is a Business Problem?',
          titleHi: 'Business Problem Kya Hoti Hai?',
          bodyEn:
            'A **Business Problem** is a clear gap between **where an organization is today** and **where it wants to be** — such as losing repeat customers, spending too much on deliveries, or facing long hospital waiting times. A good Data Scientist never starts by saying *"Let us run an algorithm!"* — they start by asking *"What real problem are we trying to fix, and for whom?"*',
          bodyHi:
            '**Business Problem** ka matlab hai **aaj business jahan hai** aur **jahan pahunchna chahta hai**, unke beech ka gap — jaise repeat customers kam hona, delivery cost zyada aana ya hospital mein lamba waiting time. Ek accha Data Scientist kabhi *"Chalo algorithm lagate hain"* se shuru nahi karta — wo poochta hai *"Asli problem kya hai aur kisko isse nuksaan ho raha hai?"*',
        },
        sections: [
          {
            pill: 'Symptom vs Root Business Problem',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'Surface Symptom (Vague)',
                    bodyEn:
                      '*"Our app sales feel low this month."* — Too broad! You cannot tell where to look or what decision to make.',
                    bodyHi:
                      '*"Is mahine app ki sales kam lag rahi hain."* — Yeh bahut vague hai! Pata hi nahi chalega kahan check karein.',
                    tone: 'pink',
                  },
                  {
                    title: 'Clear Business Problem (Specific)',
                    bodyEn:
                      '*"First-time mobile buyers are abandoning their cart on the payment page, reducing completed orders in Q2."* — Clear, focused, and solvable!',
                    bodyHi:
                      '*"First-time mobile buyers payment page par cart chhod rahe hain, jisse Q2 ke completed orders ghat rahe hain."* — Clear, focused aur solvable!',
                    tone: 'green',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 1',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'The 5 Questions to Clarify Any Business Problem',
        subtitle: 'A SIMPLE CHECKLIST BEFORE TOUCHING ANY DATASET',
        sections: [
          {
            pill: 'Step-by-Step Problem Framing',
            blocks: [
              {
                type: 'flow',
                items: [
                  {
                    title: '1. Who Is Affected?',
                    bodyEn: 'Customers, store managers, doctors, or delivery drivers?',
                    bodyHi: 'Customers, store managers, doctors ya delivery partners?',
                    tone: 'sky',
                  },
                  {
                    title: '2. What Is Going Wrong?',
                    bodyEn: 'State the exact pain point without guessing the cause yet.',
                    bodyHi: 'Exact problem likhiye, bina pehle se cause assume kiye.',
                    tone: 'amber',
                  },
                  {
                    title: '3. Why Does It Matter?',
                    bodyEn: 'Lost revenue, wasted hours, safety risk, or unhappy users?',
                    bodyHi: 'Paisa nuksaan ho raha hai, samay waste ho raha hai ya users naraz hain?',
                    tone: 'lavender',
                  },
                  {
                    title: '4. What Decision Follows?',
                    bodyEn: 'If we learn the answer, what action will the team actually take?',
                    bodyHi: 'Agar sahi answer mil jaaye, toh team kaun sa concrete action legi?',
                    tone: 'green',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 1',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Everyday Practice: Turning Vague Complaints into Clear Problems',
        subtitle: 'COMPARE WEAK VS STRONG PROBLEM STATEMENTS',
        sections: [
          {
            pill: 'Real-World Examples',
            blocks: [
              {
                type: 'table',
                headers: ['Domain', 'Vague Request', 'Well-Defined Business Problem'],
                rows: [
                  [
                    'Clinic',
                    'Patients are unhappy.',
                    'Morning appointment delays exceed 40 minutes on Mondays, causing missed follow-ups.',
                  ],
                  [
                    'Supermarket',
                    'Vegetables get wasted.',
                    'Perishable greens unsold at closing time create high weekly spoilage cost across 3 branches.',
                  ],
                  [
                    'EdTech App',
                    'Students stop watching.',
                    'Many enrolled learners drop off before completing Module 2, lowering course completion.',
                  ],
                ],
                noteEn:
                  'A well-defined Business Problem tells everyone WHERE the pain is, WHO is affected, and WHY fixing it matters.',
                noteHi:
                  'Ek acchi Business Problem sabko saaf batati hai ki dikkat KAHAN hai, KISKO asar ho raha hai, aur isse theek karna KYUN zaroori hai.',
              },
            ],
          },
          {
            pill: 'Key Takeaways',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: 'Never jump into data or modeling before agreeing on a **specific Business Problem**.',
                    hi: '**Specific Business Problem** samjhe bina kabhi seedhe data ya modeling par mat koodiye.',
                  },
                  {
                    en: 'Always ask: *"If we solve this, what real decision will change?"* — if no action changes, the problem is not framed well yet.',
                    hi: 'Hamesha poochiye: *"Agar hum yeh solve kar lein, toh kaun sa real decision badlega?"*',
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
  // TOPIC 10: Converting Business Problems into Data Questions
  // --------------------------------------------------------------------------
  10: {
    module: 'DS-M02',
    moduleTitle: 'Problem-Solving and Business Understanding',
    topic: 'Converting Business Problems into Data Questions',
    pageCount: 3,
    sampleDataNotice:
      'All retail store, gym membership, and delivery delay examples are illustrative learning scenarios.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 2',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Converting Business Problems into Data Questions',
        subtitle: 'TRANSLATING HUMAN GOALS INTO MEASURABLE QUESTIONS DATA CAN ANSWER',
        intro: {
          icon: 'table',
          titleEn: 'Why Data Cannot Answer Vague Human Wishes',
          titleHi: 'Data Vague Wishes Ka Jawaab Kyun Nahi De Sakta?',
          bodyEn:
            'A store owner speaks in business language: *"How do we stop losing customers?"* A database or spreadsheet cannot directly answer that broad wish. A **Data Question** translates the business problem into **specific, measurable questions** that can be answered by checking rows, columns, and patterns in data.',
          bodyHi:
            'Business owner apni bhasha mein kehta hai: *"Customers ko jaane se kaise rokein?"* Koi bhi database ya table is broad wish ka seedha jawaab nahi de sakta. **Data Question** usi business problem ko **specific aur measurable sawaalon** mein badalta hai jinka jawaab data ke rows aur columns se mil sake.',
        },
        sections: [
          {
            pill: 'The 4 Types of Data Questions',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: '1. Descriptive (What happened?)',
                    bodyEn: 'Example: *"How many gym members canceled in each month of the last year?"*',
                    bodyHi: 'Example: *"Pichle saal har mahine kitne gym members ne membership cancel ki?"*',
                    tone: 'sky',
                  },
                  {
                    title: '2. Diagnostic (Why did it happen?)',
                    bodyEn: 'Example: *"Do cancellations happen more among members who stopped visiting for 3+ weeks?"*',
                    bodyHi: 'Example: *"Kya cancellations un members mein zyada hain jo 3+ hafton se gym nahi aaye?"*',
                    tone: 'amber',
                  },
                  {
                    title: '3. Predictive (What is likely next?)',
                    bodyEn: 'Example: *"Which active members are most likely to cancel before next month’s renewal?"*',
                    bodyHi: 'Example: *"Kaun se active members agle mahine renewal se pehle cancel kar sakte hain?"*',
                    tone: 'lavender',
                  },
                  {
                    title: '4. Prescriptive (What action works?)',
                    bodyEn: 'Example: *"Does a free trainer check-in call reduce cancellations compared to a discount coupon?"*',
                    bodyHi: 'Example: *"Kya free trainer check-in call discount coupon se zyada cancellations rokta hai?"*',
                    tone: 'green',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 2',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Translation Table: Business Problem → Data Questions',
        subtitle: 'SEEING HOW ONE BUSINESS PROBLEM BREAKS INTO CLEAR DATA QUESTIONS',
        sections: [
          {
            pill: 'Practical Business-to-Data Translation',
            blocks: [
              {
                type: 'table',
                headers: ['Business Problem', 'Measurable Data Questions'],
                rows: [
                  [
                    'Late food deliveries are causing bad ratings.',
                    '1) Which neighborhoods and hours have the longest average delay? 2) Is the delay mostly at the restaurant kitchen or on the road?',
                  ],
                  [
                    'Clothing returns are hurting profit.',
                    '1) Which brands and sizes have the highest return rate? 2) What return reason appears most often ("too small", "damaged", "color mismatch")?',
                  ],
                  [
                    'Hospital emergency room feels overcrowded.',
                    '1) How many patients arrive by hour and day of week? 2) What is the average wait time before triage during peak evenings?',
                  ],
                ],
                noteEn:
                  'Notice that every Data Question specifies WHAT to count/compare, WHICH group to inspect, and WHAT timeframe matters.',
                noteHi:
                  'Dhyan dijiye: har Data Question mein saaf likha hai ki KYA count/compare karna hai, KIS group ko dekhna hai, aur KAUN sa time period check karna hai.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 2',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Checking If Your Data Question Is Ready',
        subtitle: 'THREE SIMPLE QUALITY CHECKS',
        sections: [
          {
            pill: 'Good Data Question Checklist',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: '**Measurable:** Can you answer it with numbers, rates, categories, or probabilities from a dataset?',
                    hi: '**Measurable:** Kya iska jawaab dataset ke numbers, rates, categories ya probabilities se nikal sakta hai?',
                  },
                  {
                    en: '**Bounded in Scope:** Does it clearly state the time window, product, or customer group?',
                    hi: '**Bounded in Scope:** Kya isme time window, product ya customer group clearly defined hai?',
                  },
                  {
                    en: '**Connected to Action:** Will answering this question directly help the team make a better business decision?',
                    hi: '**Connected to Action:** Kya is sawaal ka jawaab team ko koi behtar decision lene mein seedhi madad karega?',
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
  // TOPIC 11: Defining Objectives and Success Metrics
  // --------------------------------------------------------------------------
  11: {
    module: 'DS-M02',
    moduleTitle: 'Problem-Solving and Business Understanding',
    topic: 'Defining Objectives and Success Metrics',
    pageCount: 3,
    sampleDataNotice:
      'All call-center wait times, return rates, and delivery metrics below are illustrative sample calculations.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 3',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Defining Objectives and Success Metrics',
        subtitle: 'HOW DO YOU PROVE YOUR DATA SCIENCE WORK ACTUALLY SUCCEEDED?',
        intro: {
          icon: 'database',
          titleEn: 'Objective vs Metric — Know Both Clearly',
          titleHi: 'Objective Aur Metric — Dono Ko Alag Samajhiye',
          bodyEn:
            'An **Objective** is the clear goal you want to achieve (e.g., *"Reduce late deliveries"*). A **Success Metric** is the exact number that measures progress toward that goal (e.g., *"Percentage of orders delivered within 35 minutes"*). Without a **Success Metric**, nobody can tell whether a project helped, did nothing, or secretly made things worse!',
          bodyHi:
            '**Objective** wo clear goal hai jo aap haasil karna chahte hain (jaise *"Late deliveries kam karna"*). **Success Metric** wo exact number hai jo batata hai ki aap goal ke kitne kareeb pahunche (jaise *"35 minutes ke andar deliver hone wale orders ka percentage"*). Bina **Success Metric** ke koi nahi bata sakta ki project se fayda hua ya nahi!',
        },
        sections: [
          {
            pill: 'Primary Metric vs Guardrail Metric',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'Primary Success Metric',
                    bodyEn:
                      'The main scoreboard number you want to improve. Example: **Average Support Call Resolution Time** (in minutes).',
                    bodyHi:
                      'Main scoreboard number jise aap behtar karna chahte hain. Example: **Average Support Call Resolution Time** (minutes mein).',
                    tone: 'green',
                  },
                  {
                    title: 'Guardrail Metric (Safety Check)',
                    bodyEn:
                      'A second metric that prevents harmful shortcuts. Example: **Customer Satisfaction Score** — so agents do not rush and hang up early just to cut call time!',
                    bodyHi:
                      'Ek safety metric jo galat shortcuts rokta hai. Example: **Customer Satisfaction Score** — taaki agents sirf call time kam karne ke chakkar mein jaldi phone na kaat dein!',
                    tone: 'amber',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 3',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Verified Sample Calculation: Measuring On-Time Delivery',
        subtitle: 'ALWAYS COMPARE AGAINST A CLEAR BASELINE',
        sections: [
          {
            pill: 'Illustrative Sample Dataset: Delivery Performance Before vs After',
            blocks: [
              {
                type: 'table',
                headers: ['Period', 'Total_Orders', 'Delivered_On_Time', 'On_Time_Rate', 'Damaged_Packages (Guardrail)'],
                rows: [
                  ['Baseline (Month 1)', '200', '160', '80.0% (160 / 200)', '4 (2.0%)'],
                  ['After Route Update (Month 2)', '200', '180', '90.0% (180 / 200)', '4 (2.0%)'],
                ],
                noteEn:
                  'Sample Calculation: On-Time Rate improved from 80.0% (160/200) to 90.0% (180/200) — a +10.0 percentage-point gain — while the Guardrail Metric (Damaged Packages) stayed steady at 2.0%!',
                noteHi:
                  'Sample Calculation: On-Time Rate 80.0% (160/200) se badhkar 90.0% (180/200) ho gaya (+10.0 percentage points), aur Guardrail Metric (Damaged Packages) 2.0% par safe raha!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 3',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Business Metrics vs Technical Model Metrics',
        subtitle: 'CONNECTING MODEL SCORES TO REAL-WORLD OUTCOMES',
        sections: [
          {
            pill: 'Both Matter — Here Is Why',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'Technical Metric (For Data Scientists)',
                    bodyEn:
                      'Measures how well a model predicts on test data — such as **Average Prediction Error (in minutes)** for an ETA model.',
                    bodyHi:
                      'Measure karta hai ki test data par model kitna accurate hai — jaise ETA model ka **Average Prediction Error (minutes mein)**.',
                    tone: 'sky',
                  },
                  {
                    title: 'Business Metric (For Leaders & Customers)',
                    bodyEn:
                      'Measures real-world value — such as **fewer late-order refunds** or **higher repeat orders**.',
                    bodyHi:
                      'Real-world impact measure karta hai — jaise **late-order refunds mein kami** ya **repeat orders mein badhotri**.',
                    tone: 'lavender',
                  },
                ],
              },
            ],
          },
          {
            pill: 'Key Takeaways',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: 'Always record a **Baseline** before making changes so you can measure genuine improvement.',
                    hi: 'Badlaav karne se pehle hamesha **Baseline** note kariye taaki asli improvement measure ho sake.',
                  },
                  {
                    en: 'Pair every **Primary Success Metric** with at least one **Guardrail Metric** to avoid unintended side effects.',
                    hi: 'Har **Primary Success Metric** ke saath ek **Guardrail Metric** rakhiye taaki galat shortcuts ya side effects na hon.',
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
  // TOPIC 12: Understanding Features and Targets
  // --------------------------------------------------------------------------
  12: {
    module: 'DS-M02',
    moduleTitle: 'Problem-Solving and Business Understanding',
    topic: 'Understanding Features and Targets',
    pageCount: 4,
    sampleDataNotice:
      'All house rent, exam result, and loan application tables below are illustrative sample datasets.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 4',
        pageTag: 'PAGE 1 OF 4',
        footerPage: '1 / 4',
        title: 'Understanding Features and Targets',
        subtitle: 'THE INPUT CLUES AND THE OUTPUT ANSWER IN EVERY DATASET',
        intro: {
          icon: 'table',
          titleEn: 'The Simplest Way to Understand Features & Target',
          titleHi: 'Features Aur Target Ko Sabse Aasaan Bhasha Mein Samajhiye',
          bodyEn:
            'Think of a **house rent listing**. To estimate a flat’s monthly rent, you look at clues: how many bedrooms it has, its area in square feet, and how close it is to the metro station. In Data Science, those **input clues** are called **Features** (also called **Input Variables** or **X**), and the **final answer** you want to understand or predict — Monthly Rent — is called the **Target** (also called **Label**, **Outcome**, or **y**).',
          bodyHi:
            'Ek **house rent listing** ke baare mein sochiye. Flat ka monthly rent estimate karne ke liye aap kuch clues dekhte hain: kitne bedrooms hain, area kitna square feet hai, aur metro station kitni door hai. Data Science mein in **input clues** ko **Features** (ya **X**) kehte hain, aur jis **final answer** ko aap predict ya samajhna chahte hain — Monthly Rent — use **Target** (ya **y**) kehte hain.',
        },
        sections: [
          {
            pill: 'Illustrative Sample Dataset: Apartment Rent Table',
            blocks: [
              {
                type: 'table',
                headers: [
                  'Flat_ID (Identifier)',
                  'Bedrooms [Feature]',
                  'Area_SqFt [Feature]',
                  'Near_Metro [Feature]',
                  'Monthly_Rent_INR [TARGET]',
                ],
                rows: [
                  ['F-01', '1', '550', 'Yes', '14,000'],
                  ['F-02', '2', '900', 'Yes', '22,000'],
                  ['F-03', '2', '880', 'No', '18,000'],
                  ['F-04', '3', '1,350', 'Yes', '32,000'],
                ],
                noteEn:
                  'Sample Dataset: Notice 3 roles of columns — Flat_ID is just a unique ID (not a predictive feature), Bedrooms/Area/Near_Metro are Features (inputs), and Monthly_Rent_INR is the Target (output)!',
                noteHi:
                  'Sample Dataset: Yahan columns ke 3 roles dekhiye — Flat_ID sirf ek pehchaan (ID) hai, Bedrooms/Area/Near_Metro **Features** (inputs) hain, aur Monthly_Rent_INR **Target** (output) hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 4',
        pageTag: 'PAGE 2 OF 4',
        footerPage: '2 / 4',
        title: 'Two Main Kinds of Targets',
        subtitle: 'PREDICTING A NUMBER VS PREDICTING A CATEGORY',
        sections: [
          {
            pill: 'Numerical Target vs Categorical Target',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'Numerical Target (Regression)',
                    bodyEn:
                      'The Target is a **number** you measure. Examples: Monthly Rent (`22,000`), Delivery Time (`32 minutes`), Tomorrow’s Bakery Sales (`140 loaves`).',
                    bodyHi:
                      'Target ek **number** hota hai. Examples: Monthly Rent (`22,000`), Delivery Time (`32 minutes`), Kal ki Bakery Sales (`140 loaves`).',
                    tone: 'sky',
                  },
                  {
                    title: 'Categorical Target (Classification)',
                    bodyEn:
                      'The Target is a **category or label**. Examples: Email is `Spam` vs `Not Spam`, Student Renewed (`Yes` vs `No`), Order Risk (`Low / Medium / High`).',
                    bodyHi:
                      'Target ek **category ya label** hota hai. Examples: Email `Spam` hai ya `Not Spam`, Renewal (`Yes` vs `No`), Risk (`Low / Medium / High`).',
                    tone: 'lavender',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 4',
        pageTag: 'PAGE 3 OF 4',
        footerPage: '3 / 4',
        title: 'What Makes a Good Feature — and Beware of Data Leakage!',
        subtitle: 'ONLY USE CLUES AVAILABLE BEFORE THE OUTCOME HAPPENS',
        sections: [
          {
            pill: 'Beginner Introduction to Data Leakage',
            blocks: [
              {
                type: 'note',
                tone: 'pink',
                bodyEn:
                  'Suppose you want to predict whether a student will **pass an exam next week**. You can use Features like *attendance rate* and *homework scores* because you know them **before** the exam. You must **NEVER** include *Exam_Certificate_Printed = Yes* as a Feature — because that only exists **after** the student already passed! Including future information that secretly gives away the answer is called **Data Leakage**.',
                bodyHi:
                  'Maan lijiye aap predict karna chahte hain ki student **agle hafte ka exam pass karega ya nahi**. Aap *attendance rate* aur *homework scores* ko Features bana sakte hain kyunki wo exam se **pehle** pata hote hain. Lekin *Exam_Certificate_Printed = Yes* ko kabhi Feature mat banaiye — kyunki wo toh pass hone ke **baad** banta hai! Aisi future information jo chupke se answer bata de, use **Data Leakage** kehte hain.',
              },
            ],
          },
          {
            pill: 'Good vs Bad Features',
            blocks: [
              {
                type: 'table',
                headers: ['Goal (Target)', 'Good Features (Known Before)', 'Bad / Leaking Feature (Avoid!)'],
                rows: [
                  [
                    'Predict if an order will be returned',
                    'Product category, size ordered, customer past return rate',
                    'Refund_Processed_Date (only exists AFTER a return!)',
                  ],
                  [
                    'Predict monthly flat rent',
                    'Bedrooms, Area_SqFt, City, Near_Metro',
                    'Flat_ID (random row number has no real-world meaning)',
                  ],
                ],
                noteEn:
                  'Always ask: "Will I genuinely have this Feature column available at the exact moment I need to make a prediction?"',
                noteHi:
                  'Hamesha poochiye: "Kya yeh Feature column mujhe prediction karne ke exact samay par sach mein available hoga?"',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 4',
        pageTag: 'PAGE 4 OF 4',
        footerPage: '4 / 4',
        title: 'Summary: Features → Model/Analysis → Target',
        subtitle: 'KEY TAKEAWAYS',
        sections: [
          {
            pill: 'How Everything Connects',
            blocks: [
              {
                type: 'flow',
                items: [
                  {
                    title: 'Features (X)',
                    bodyEn: 'Relevant input clues known before the decision.',
                    bodyHi: 'Decision se pehle available relevant input clues.',
                    tone: 'sky',
                  },
                  {
                    title: 'Pattern / Model',
                    bodyEn: 'Learns how input clues relate to the outcome.',
                    bodyHi: 'Seekhta hai ki input clues outcome se kaise jude hain.',
                    tone: 'lavender',
                  },
                  {
                    title: 'Target (y)',
                    bodyEn: 'The number or category you want to estimate.',
                    bodyHi: 'Wo number ya category jise aap estimate karna chahte hain.',
                    tone: 'green',
                  },
                ],
              },
            ],
          },
          {
            pill: 'Key Takeaways',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: '**Features** are the input columns (clues); the **Target** is the output column (answer).',
                    hi: '**Features** input columns (clues) hote hain; **Target** output column (answer) hota hai.',
                  },
                  {
                    en: 'IDs like `Flat_ID` or `Student_ID` identify rows but are **not** useful predictive features.',
                    hi: '`Flat_ID` ya `Student_ID` sirf row identify karte hain — yeh useful predictive features **nahi** hote.',
                  },
                  {
                    en: 'Guard against **Data Leakage**: never use information recorded after the Target event already occurred.',
                    hi: '**Data Leakage** se bachiye: kabhi aisi column mat use kariye jo Target event hone ke baad record hoti ho.',
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
  // TOPIC 13: Selecting the Right Data for a Problem
  // --------------------------------------------------------------------------
  13: {
    module: 'DS-M02',
    moduleTitle: 'Problem-Solving and Business Understanding',
    topic: 'Selecting the Right Data for a Problem',
    pageCount: 3,
    sampleDataNotice:
      'All retail pharmacy, school attendance, and customer survey examples are illustrative learning scenarios.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 5',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Selecting the Right Data for a Problem',
        subtitle: 'MORE DATA IS NOT AUTOMATICALLY BETTER DATA',
        intro: {
          icon: 'database',
          titleEn: 'Relevance Beats Volume Every Time',
          titleHi: 'Sirf Zyada Data Nahi — Sahi Data Zaroori Hai!',
          bodyEn:
            'Imagine trying to find out why patients miss dental appointments, and someone hands you 10 million rows of parking-lot license plates. That is huge data, yet almost useless for your question! **Selecting the Right Data** means choosing records that are **relevant**, **representative (unbiased)**, **timely**, and **permitted to use**.',
          bodyHi:
            'Sochiye aapko pata lagana hai ki patients dental appointments kyun miss karte hain, aur koi aapko parking lot ki 1 crore car numbers de de. Data bahut bada hai, par aapke sawaal ke liye bekaar hai! **Selecting the Right Data** ka matlab hai aisa data chunna jo **relevant**, **representative (unbiased)**, **up-to-date**, aur **ethically allowed** ho.',
        },
        sections: [
          {
            pill: 'The 5-Criteria Data Selection Filter',
            blocks: [
              {
                type: 'flow',
                items: [
                  {
                    title: '1. Relevance',
                    bodyEn: 'Does this data actually relate to the business question?',
                    bodyHi: 'Kya yeh data asli business question se juda hai?',
                    tone: 'sky',
                  },
                  {
                    title: '2. Coverage',
                    bodyEn: 'Does it represent all groups fairly (no missing segments)?',
                    bodyHi: 'Kya isme sabhi groups barabar cover hain (koi group chhoota toh nahi)?',
                    tone: 'amber',
                  },
                  {
                    title: '3. Timeliness',
                    bodyEn: 'Is it recent enough to reflect today’s reality?',
                    bodyHi: 'Kya yeh itna recent hai ki aaj ki situation dikha sake?',
                    tone: 'lavender',
                  },
                  {
                    title: '4. Granularity',
                    bodyEn: 'Right level of detail (daily vs yearly, store vs city)?',
                    bodyHi: 'Kya detail level sahi hai (daily vs yearly, store vs city)?',
                    tone: 'green',
                  },
                  {
                    title: '5. Permission',
                    bodyEn: 'Are we legally and ethically allowed to use it?',
                    bodyHi: 'Kya humein is data ko use karne ki legal aur ethical permission hai?',
                    tone: 'pink',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 5',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Understanding Sampling Bias at a Beginner Level',
        subtitle: 'WHEN YOUR DATASET SILENTLY LEAVES PEOPLE OUT',
        sections: [
          {
            pill: 'Simple Real-Life Example of Bias',
            blocks: [
              {
                type: 'note',
                tone: 'amber',
                bodyEn:
                  'Suppose a supermarket wants to know what **all shoppers** think about its billing counters, so it only surveys people who use the **mobile app**. Senior citizens who shop in-store and pay with cash are completely missing from the dataset! Conclusions drawn from that dataset will suffer from **Selection Bias** — they look scientific, yet miss a huge group of real customers.',
                bodyHi:
                  'Maan lijiye ek supermarket jaanna chahta hai ki **sabhi shoppers** billing counters ke baare mein kya sochte hain, lekin wo sirf **mobile app** users ka survey karta hai. Jo senior citizens store aakar cash dete hain, wo dataset mein hain hi nahi! Aise dataset se nikle conclusions mein **Selection Bias** hota hai — wo asli customers ke ek bade hisse ko chhod dete hain.',
              },
            ],
          },
          {
            pill: 'Matching Granularity to the Question',
            blocks: [
              {
                type: 'table',
                headers: ['Question', 'Too Coarse (Not Useful)', 'Right Granularity (Useful)'],
                rows: [
                  [
                    'When should we schedule extra cashiers?',
                    'Total yearly sales per city',
                    'Hourly checkout count per store and day of week',
                  ],
                  [
                    'Which medicine runs out fastest?',
                    'Monthly total pharmacy revenue',
                    'Daily stock level per medicine SKU',
                  ],
                ],
                noteEn:
                  'Granularity simply means "how zoomed-in" each row is — yearly totals cannot answer hourly staffing questions.',
                noteHi:
                  'Granularity ka matlab hai har row kitni zoomed-in hai — yearly totals se aap hourly staffing ka decision nahi le sakte.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 5',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways for Data Selection',
        subtitle: 'QUALITY AND REPRESENTATIVENESS FIRST',
        sections: [
          {
            pill: 'Checklist Before Collecting or Merging Datasets',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: 'A smaller, **relevant, unbiased dataset** beats a massive, irrelevant dataset every time.',
                    hi: 'Chhota lekin **relevant aur unbiased dataset** hamesha bade aur irrelevant dataset se behtar hota hai.',
                  },
                  {
                    en: 'Always ask **who might be missing** from your data to catch **Selection Bias** early.',
                    hi: 'Hamesha poochiye ki aapke data se **kaun chhoot raha hai** taaki **Selection Bias** jaldi pakda ja sake.',
                  },
                  {
                    en: 'Check **Granularity** (hourly, daily, per-customer) and **Privacy permissions** before starting analysis.',
                    hi: 'Analysis shuru karne se pehle **Granularity** (hourly, daily, per-customer) aur **Privacy permissions** zaroor check kariye.',
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
  // TOPIC 14: Building an Analysis Plan
  // --------------------------------------------------------------------------
  14: {
    module: 'DS-M02',
    moduleTitle: 'Problem-Solving and Business Understanding',
    topic: 'Building an Analysis Plan',
    pageCount: 3,
    sampleDataNotice:
      'The online bookstore analysis plan is an illustrative beginner template.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 6',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Building an Analysis Plan',
        subtitle: 'A ONE-PAGE BLUEPRINT THAT KEEPS YOUR PROJECT FOCUSED',
        intro: {
          icon: 'table',
          titleEn: 'What Is an Analysis Plan?',
          titleHi: 'Analysis Plan Kya Hota Hai?',
          bodyEn:
            'An **Analysis Plan** is a short written roadmap created **before** you open charts or write code. Just like a travel itinerary tells you where you are going, what to pack, and when you will arrive, an Analysis Plan lists your **problem**, **data sources**, **metrics**, **steps**, **assumptions**, and **how results will be shared**.',
          bodyHi:
            '**Analysis Plan** ek chhota written roadmap hota hai jo charts banane ya code likhne se **pehle** tayar kiya jaata hai. Jaise travel plan batata hai kahan jaana hai aur kya le jaana hai, waise hi Analysis Plan mein aapki **problem**, **data sources**, **metrics**, **steps**, **assumptions**, aur **delivery format** likhe hote hain.',
        },
        sections: [
          {
            pill: 'The 6 Core Parts of a Clear Analysis Plan',
            blocks: [
              {
                type: 'flow',
                items: [
                  {
                    title: '1. Problem & Goal',
                    bodyEn: 'One clear sentence stating the decision we want to support.',
                    bodyHi: 'Ek clear sentence jo bataye ki hum kaun sa decision support kar rahe hain.',
                    tone: 'sky',
                  },
                  {
                    title: '2. Data Sources',
                    bodyEn: 'Which exact tables, files, and date ranges we will use.',
                    bodyHi: 'Kaun si exact tables, files aur date ranges use hongi.',
                    tone: 'amber',
                  },
                  {
                    title: '3. Metrics & Checks',
                    bodyEn: 'Primary metric, guardrail metric, and data quality checks.',
                    bodyHi: 'Primary metric, guardrail metric aur data quality checks.',
                    tone: 'lavender',
                  },
                  {
                    title: '4. Method & Visuals',
                    bodyEn: 'Which comparisons, charts, or models will answer each question.',
                    bodyHi: 'Kaun se comparisons, charts ya models har sawaal ka jawaab denge.',
                    tone: 'green',
                  },
                  {
                    title: '5. Risks & Output',
                    bodyEn: 'Known limitations and the final deliverable (summary doc or dashboard).',
                    bodyHi: 'Known limitations aur final output (summary report ya dashboard).',
                    tone: 'pink',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 6',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Sample Analysis Plan: Reducing Book Shipping Delays',
        subtitle: 'A REALISTIC ONE-PAGE TEMPLATE YOU CAN REUSE',
        sections: [
          {
            pill: 'Illustrative Analysis Plan Table',
            blocks: [
              {
                type: 'table',
                headers: ['Plan Section', 'Filled Example (Online Bookstore)'],
                rows: [
                  ['Business Problem', 'Orders shipped to Tier-2 cities arrive late more often than promised, increasing support tickets.'],
                  ['Key Data Questions', '1) Which courier partners have the highest delay rate? 2) Does delay happen at warehouse packing or in transit?'],
                  ['Data Sources Needed', 'Orders table (last 6 months), Warehouse_Dispatch_Log, Courier_Delivery_Events.'],
                  ['Success & Guardrail Metrics', 'Primary: % orders delivered by promised date. Guardrail: Average shipping cost per order.'],
                  ['Planned Cleaning Checks', 'Check missing delivery timestamps, remove canceled orders, standardize city spellings.'],
                  ['Known Assumptions & Risks', 'Festival peak weeks may skew transit times; analyze festival vs normal weeks separately.'],
                ],
                noteEn:
                  'Notice how reading this 6-row plan takes 60 seconds, yet prevents days of confusion and misaligned expectations!',
                noteHi:
                  'Dekhiye: is 6-row plan ko padhne mein sirf 1 minute lagta hai, par yeh kayi dino ki confusion aur galat direction se bacha leta hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 6',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'What Happens Without an Analysis Plan?',
        subtitle: 'PREVENTING SCOPE CREEP AND WASTED EFFORT',
        sections: [
          {
            pill: 'Why Professionals Write the Plan First',
            blocks: [
              {
                type: 'bullets',
                tone: 'amber',
                items: [
                  {
                    en: 'Prevents **aimless digging** — you know exactly which questions you are answering first.',
                    hi: '**Aimless digging** se bachata hai — aapko pehle se pata hota hai ki kaun se sawaal solve karne hain.',
                  },
                  {
                    en: 'Aligns business stakeholders early so nobody says *"Wait, that is not what I meant!"* two weeks later.',
                    hi: 'Stakeholders ko shuru mein hi align kar deta hai taaki do hafte baad koi na bole *"Arre, mujhe toh kuch aur chahiye tha!"*',
                  },
                  {
                    en: 'Makes your work **transparent and repeatable** when a teammate reviews or extends your analysis.',
                    hi: 'Aapke kaam ko **transparent aur repeatable** banata hai jab koi teammate usse review kare.',
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
  // TOPIC 15: Common Data Science Mistakes
  // --------------------------------------------------------------------------
  15: {
    module: 'DS-M02',
    moduleTitle: 'Problem-Solving and Business Understanding',
    topic: 'Common Data Science Mistakes',
    pageCount: 4,
    sampleDataNotice:
      'All ice-cream sales, hospital, and marketing examples below are illustrative educational scenarios.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 7',
        pageTag: 'PAGE 1 OF 4',
        footerPage: '1 / 4',
        title: 'Common Data Science Mistakes',
        subtitle: 'SPOTTING THE TRAPS THAT FOOL EVEN EXPERIENCED TEAMS',
        intro: {
          icon: 'database',
          titleEn: 'Why Learning Mistakes Early Makes You Faster',
          titleHi: 'Galtiyon Ko Pehle Samajhna Kyun Zaroori Hai?',
          bodyEn:
            'Even with clean code and beautiful charts, a Data Science project can still give the **wrong answer** if you fall into common reasoning traps. Learning these classic mistakes right at the foundation stage protects your decisions and builds real analytical maturity.',
          bodyHi:
            'Clean code aur sundar charts hone ke baad bhi koi Data Science project **galat answer** de sakta hai agar aap kuch common reasoning traps mein phans jaayein. Foundation stage par hi in galtiyon ko pehchan lena aapko ek smart aur reliable Data Scientist banata hai.',
        },
        sections: [
          {
            pill: 'Mistake #1: Confusing Correlation With Causation',
            blocks: [
              {
                type: 'note',
                tone: 'pink',
                bodyEn:
                  '**Correlation** means two things tend to move together. **Causation** means one thing actually **causes** the other. Famous example: In summer, **ice cream sales** go up AND **sunburn cases** go up at the exact same time! They are strongly correlated — yet eating ice cream does **NOT** cause sunburn. A hidden third factor (**hot sunny weather**) drives both!',
                bodyHi:
                  '**Correlation** ka matlab hai do cheezein saath-saath badhti ya ghatti hain. **Causation** ka matlab hai ek cheez dusri ko **sach mein cause** karti hai. Famous example: Garmiyon mein **ice cream sales** bhi badhti hain aur **sunburn cases** bhi! Dono strongly correlated hain — par ice cream khane se sunburn **NAHI** hota. Ek teesra factor (**tez dhoop aur garmi**) dono ko badhata hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 7',
        pageTag: 'PAGE 2 OF 4',
        footerPage: '2 / 4',
        title: 'Mistakes #2, #3, and #4: Data Traps',
        subtitle: 'DATA LEAKAGE, SELECTION BIAS, AND SKIPPING DATA CLEANING',
        sections: [
          {
            pill: 'Three Silent Errors Inside Datasets',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'Mistake #2: Data Leakage',
                    bodyEn:
                      'Accidentally letting future outcome information sneak into input **Features**. The model looks almost perfect in testing, then fails completely in real life.',
                    bodyHi:
                      'Galti se future outcome ki jaankari input **Features** mein aa jaana. Testing mein model perfect dikhta hai, par real life mein fail ho jaata hai.',
                    tone: 'pink',
                  },
                  {
                    title: 'Mistake #3: Ignoring Bias',
                    bodyEn:
                      'Using data that leaves out key groups (like surveying only online shoppers) and assuming the result applies to everyone.',
                    bodyHi:
                      'Aisa data use karna jisme bade groups missing hon (jaise sirf online shoppers ka survey) aur use sab par apply maan lena.',
                    tone: 'amber',
                  },
                  {
                    title: 'Mistake #4: Garbage In, Garbage Out',
                    bodyEn:
                      'Running charts or models before fixing duplicate rows, missing values, or wrong units — producing confident-looking wrong numbers.',
                    bodyHi:
                      'Duplicates, missing values ya galat units theek kiye bina charts ya models chalana — jisse confident dikhne wale galat numbers aate hain.',
                    tone: 'lavender',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 7',
        pageTag: 'PAGE 3 OF 4',
        footerPage: '3 / 4',
        title: 'Mistakes #5 and #6: Problem & Complexity Traps',
        subtitle: 'AVOIDING OVER-ENGINEERING AND SOLVING THE WRONG QUESTION',
        sections: [
          {
            pill: 'Side-by-Side Mistake vs Smart Habit',
            blocks: [
              {
                type: 'table',
                headers: ['Common Mistake', 'What Goes Wrong', 'Smart Data Scientist Habit'],
                rows: [
                  [
                    'Solving the wrong problem',
                    'Building a complex model nobody in the business asked for or can use.',
                    'Confirm the business decision and success metric before starting.',
                  ],
                  [
                    'Using ML when simple analysis is enough',
                    'Spending weeks training a heavy model when a clear summary table answers the question in 1 hour.',
                    'Start simple; use Machine Learning only when the problem genuinely needs learned predictions.',
                  ],
                  [
                    'Cherry-picking results',
                    'Showing only the one week that looks good while hiding the rest of the year.',
                    'Report full, honest evidence — including limitations and uncertainty.',
                  ],
                ],
                noteEn:
                  'Great Data Scientists are valued for honest, clear thinking — not for making simple problems look complicated.',
                noteHi:
                  'Acche Data Scientists ki value unki honest aur clear thinking se hoti hai — simple problems ko complicated banane se nahi.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M02 | TOPIC 7',
        pageTag: 'PAGE 4 OF 4',
        footerPage: '4 / 4',
        title: 'Module 2 Wrap-Up: Your Mistake-Prevention Shield',
        subtitle: 'KEY TAKEAWAYS',
        sections: [
          {
            pill: 'Five Rules to Remember Always',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: '**Correlation does NOT automatically prove Causation** — always check for hidden third factors.',
                    hi: '**Correlation apne aap Causation prove NAHI karta** — hamesha hidden third factors check kariye.',
                  },
                  {
                    en: 'Watch out for **Data Leakage** (future info in features) and **Selection Bias** (missing groups).',
                    hi: '**Data Leakage** (features mein future info) aur **Selection Bias** (chhoote hue groups) se hamesha savdhaan rahiye.',
                  },
                  {
                    en: 'Clean your data first, start with the simplest useful method, and stay tied to the real **Business Problem**.',
                    hi: 'Pehle data clean kariye, sabse simple useful method se shuru kariye, aur asli **Business Problem** se jude rahiye.',
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
