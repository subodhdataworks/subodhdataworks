import type { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

// ============================================================================
// MODULE 3 (DS-M03): Data Types, Sources and Collection — Topics 16 to 23
// ============================================================================

export const DS_M03_VISUAL_NOTES: Record<number, StructuredVisualNoteTopic> = {
  // --------------------------------------------------------------------------
  // TOPIC 16: Structured, Semi-Structured and Unstructured Data
  // --------------------------------------------------------------------------
  16: {
    module: 'DS-M03',
    moduleTitle: 'Data Types, Sources and Collection',
    topic: 'Structured, Semi-Structured and Unstructured Data',
    pageCount: 3,
    sampleDataNotice:
      'All order tables, JSON event snippets, and review examples below are illustrative sample datasets.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 1',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Structured, Semi-Structured and Unstructured Data',
        subtitle: 'THE THREE SHAPES DATA TAKES IN THE REAL WORLD',
        intro: {
          icon: 'database',
          titleEn: 'Not All Data Lives in Neat Rows and Columns',
          titleHi: 'Saara Data Neat Rows Aur Columns Mein Nahi Hota',
          bodyEn:
            'When beginners picture **Data**, they usually imagine an Excel spreadsheet. That is only one shape! Real-world organizations also store flexible web messages, customer reviews, voice calls, CCTV videos, and medical X-rays. Data Science groups all of these into **three core categories**: **Structured**, **Semi-Structured**, and **Unstructured Data**.',
          bodyHi:
            'Jab beginners **Data** sochte hain, toh unhe sirf Excel sheet yaad aati hai. Par wo sirf ek roop hai! Real-world mein companies web logs, customer reviews, voice calls, photos aur X-rays bhi store karti hain. Data Science in sabko **teen main categories** mein baantta hai: **Structured**, **Semi-Structured**, aur **Unstructured Data**.',
        },
        sections: [
          {
            pill: 'The 3 Data Shapes Compared',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: '1. Structured Data',
                    bodyEn:
                      'Lives in fixed **Rows and Columns** with a strict table layout. Easy to search, filter, and sum. Examples: bank statements, school mark sheets, SQL tables.',
                    bodyHi:
                      'Fixed **Rows aur Columns** mein hota hai (strict table layout). Search aur calculate karna aasaan hota hai. Examples: bank statements, mark sheets, SQL tables.',
                    tone: 'sky',
                  },
                  {
                    title: '2. Semi-Structured Data',
                    bodyEn:
                      'Does not fit one rigid table, yet has **tags or key-value labels** that organize it. Examples: **JSON** API responses, XML files, email headers.',
                    bodyHi:
                      'Rigid table mein nahi hota, par isme **tags ya key-value labels** hote hain jo structure dete hain. Examples: **JSON** files, API responses, email headers.',
                    tone: 'amber',
                  },
                  {
                    title: '3. Unstructured Data',
                    bodyEn:
                      'Has **no predefined row-column format** at all. Needs special processing (NLP, Computer Vision, Audio AI) to analyze. Examples: photos, PDFs, voice notes, free-text reviews.',
                    bodyHi:
                      'Isme koi fixed row-column format nahi hota. Analyze karne ke liye special tools (NLP, Computer Vision) lagte hain. Examples: photos, videos, voice notes, text reviews.',
                    tone: 'lavender',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 1',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Seeing All Three Shapes From One Online Order',
        subtitle: 'ONE SHOPPING TRIP CREATES ALL THREE TYPES OF DATA',
        sections: [
          {
            pill: 'Illustrative Example: Same Order in 3 Formats',
            blocks: [
              {
                type: 'table',
                headers: ['Data Shape', 'What Gets Stored for Order #509', 'How Easily Can a Spreadsheet Read It?'],
                rows: [
                  [
                    'Structured',
                    'Order_ID: 509 | Customer: Asha | Amount: 1200 | Status: Delivered',
                    'Directly ready for tables, averages, and SQL queries.',
                  ],
                  [
                    'Semi-Structured (JSON)',
                    '{ "order_id": 509, "items": ["Shoes", "Socks"], "coupon": "SAVE10" }',
                    'Needs simple parsing (flattening keys into columns) first.',
                  ],
                  [
                    'Unstructured',
                    'Customer photo of torn shoebox + text: "Box was damaged, shoes are fine!"',
                    'Cannot be summed directly; needs text/image analysis or human tagging.',
                  ],
                ],
                noteEn:
                  'Notice how Semi-Structured data is flexible: one order can have a "coupon" field while another order has no coupon field at all!',
                noteHi:
                  'Dhyan dijiye: Semi-Structured data flexible hota hai — ek order mein "coupon" field ho sakta hai aur dusre mein nahi!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 1',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Why Knowing the Data Shape Matters',
        subtitle: 'CHOOSING THE RIGHT STORAGE AND ANALYSIS METHOD',
        sections: [
          {
            pill: 'Key Takeaways',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: '**Structured Data** = strict rows & columns (easiest for spreadsheets, SQL, and classic tabular analysis).',
                    hi: '**Structured Data** = strict rows & columns (spreadsheets, SQL aur tabular analysis ke liye sabse aasaan).',
                  },
                  {
                    en: '**Semi-Structured Data** = flexible labeled records like **JSON** (very common in apps and web APIs).',
                    hi: '**Semi-Structured Data** = flexible labeled records jaise **JSON** (apps aur web APIs mein bahut common).',
                  },
                  {
                    en: '**Unstructured Data** = raw text, images, audio, and video (rich in meaning, requires specialized processing before modeling).',
                    hi: '**Unstructured Data** = raw text, images, audio aur video (bahut useful, par modeling se pehle special processing chahiye).',
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
  // TOPIC 17: Numerical and Categorical Data
  // --------------------------------------------------------------------------
  17: {
    module: 'DS-M03',
    moduleTitle: 'Data Types, Sources and Collection',
    topic: 'Numerical and Categorical Data',
    pageCount: 4,
    sampleDataNotice:
      'All student profile, product rating, and hospital patient records below are illustrative sample datasets.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 2',
        pageTag: 'PAGE 1 OF 4',
        footerPage: '1 / 4',
        title: 'Numerical and Categorical Data',
        subtitle: 'UNDERSTANDING WHAT EACH COLUMN ACTUALLY MEASURES',
        intro: {
          icon: 'table',
          titleEn: 'Why Column Types Decide Every Chart and Calculation',
          titleHi: 'Column Type Har Chart Aur Calculation Ko Decide Karta Hai',
          bodyEn:
            'Inside any structured table, every column holds a specific kind of information. You can calculate the average of **Height** or **Price**, but calculating the average of **City Name** or **Pin Code** makes zero sense! Separating **Numerical Data** from **Categorical Data** is the foundation of Statistics, Charts, and Machine Learning.',
          bodyHi:
            'Kisi bhi structured table mein har column ek khaas tarah ki jaankari rakhta hai. Aap **Height** ya **Price** ka average nikaal sakte hain, par **City Name** ya **Pin Code** ka average nikaalna bilkul bekaar hai! **Numerical Data** aur **Categorical Data** ko pehchanna Statistics, Charts aur Machine Learning ki neev hai.',
        },
        sections: [
          {
            pill: 'The 2 Main Families & Their 4 Subtypes',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'Numerical — Discrete (Counted)',
                    bodyEn:
                      'Whole countable numbers with no in-between fractions. Examples: **Number of items in cart** (`1, 2, 3`), **Number of siblings** (`0, 1, 2`).',
                    bodyHi:
                      'Gine ja sakne wale whole numbers. Examples: **Cart mein items ki ginti** (`1, 2, 3`), **Siblings ki ginti** (`0, 1, 2`).',
                    tone: 'sky',
                  },
                  {
                    title: 'Numerical — Continuous (Measured)',
                    bodyEn:
                      'Measured values that can take decimals. Examples: **Body temperature** (`36.8°C`), **Delivery distance** (`4.25 km`), **Price** (`₹499.50`).',
                    bodyHi:
                      'Naapi jaane wali values jinme decimals aa sakte hain. Examples: **Temperature** (`36.8°C`), **Distance** (`4.25 km`), **Price** (`₹499.50`).',
                    tone: 'lavender',
                  },
                  {
                    title: 'Categorical — Nominal (No Order)',
                    bodyEn:
                      'Named groups with **no natural ranking**. Examples: **City** (`Delhi, Pune, Kochi`), **Payment Mode** (`UPI, Card, Cash`), **Blood Group** (`A+, O-`).',
                    bodyHi:
                      'Aise labels jinka **koi natural order nahi** hota. Examples: **City** (`Delhi, Pune, Kochi`), **Payment Mode** (`UPI, Card, Cash`).',
                    tone: 'amber',
                  },
                  {
                    title: 'Categorical — Ordinal (Ordered)',
                    bodyEn:
                      'Named groups with a **clear rank or order**. Examples: **T-Shirt Size** (`S < M < L < XL`), **Satisfaction** (`Low < Medium < High`).',
                    bodyHi:
                      'Aise labels jinka **clear rank ya order** hota hai. Examples: **T-Shirt Size** (`S < M < L < XL`), **Satisfaction** (`Low < Medium < High`).',
                    tone: 'green',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 2',
        pageTag: 'PAGE 2 OF 4',
        footerPage: '2 / 4',
        title: 'Spot the Data Type in a Real Sample Table',
        subtitle: 'CLASSIFYING EVERY COLUMN STEP BY STEP',
        sections: [
          {
            pill: 'Illustrative Sample Dataset: Customer Delivery Feedback',
            blocks: [
              {
                type: 'table',
                headers: ['Column Name', 'Sample Values', 'Data Type', 'Why?'],
                rows: [
                  ['Items_Count', '1, 3, 5', 'Numerical (Discrete)', 'Whole countable quantity of products.'],
                  ['Weight_KG', '0.45, 1.80, 3.25', 'Numerical (Continuous)', 'Measured weight with decimal precision.'],
                  ['City', 'Jaipur, Surat, Bhopal', 'Categorical (Nominal)', 'Distinct names with no rank order.'],
                  ['Service_Rating', 'Poor, Fair, Good, Excellent', 'Categorical (Ordinal)', 'Categories have a clear best-to-worst order.'],
                  ['Pin_Code', '302001, 395003, 462001', 'Categorical (Nominal!)', 'Looks like digits, but it is a location label — never average pin codes!'],
                ],
                noteEn:
                  'Watch out for the Pin_Code trick! Phone numbers, Pin Codes, and Employee IDs use digits (0–9), yet mathematically they are Categorical identifiers, NOT Numerical measurements.',
                noteHi:
                  'Pin_Code trick yaad rakhiye! Phone numbers, Pin Codes aur Employee IDs mein digits hote hain, par yeh Categorical labels hain — inka average ya sum kabhi nahi nikaalte!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 2',
        pageTag: 'PAGE 3 OF 4',
        footerPage: '3 / 4',
        title: 'How Data Type Guides Your Charts and Summaries',
        subtitle: 'USING THE RIGHT TOOL FOR THE RIGHT COLUMN',
        sections: [
          {
            pill: 'Matching Summary & Visuals to Data Type',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'For Numerical Columns',
                    bodyEn:
                      'Use **Average (Mean)**, **Median**, **Min/Max**, **Histograms**, and **Line/Scatter Charts** to see spread and trends.',
                    bodyHi:
                      '**Average (Mean)**, **Median**, **Min/Max**, **Histograms**, aur **Line/Scatter Charts** se spread aur trends dekhte hain.',
                    tone: 'sky',
                  },
                  {
                    title: 'For Categorical Columns',
                    bodyEn:
                      'Use **Counts**, **Percentages**, **Mode (most frequent)**, and **Bar Charts** to compare groups clearly.',
                    bodyHi:
                      '**Counts**, **Percentages**, **Mode (sabse zyada aane wala)**, aur **Bar Charts** se groups ko compare karte hain.',
                    tone: 'green',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 2',
        pageTag: 'PAGE 4 OF 4',
        footerPage: '4 / 4',
        title: 'Key Takeaways',
        subtitle: 'MASTERING COLUMN TYPES',
        sections: [
          {
            pill: 'What to Check First on Every New Dataset',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: '**Numerical Data** = numbers you can meaningfully add or average (**Discrete** counts vs **Continuous** measurements).',
                    hi: '**Numerical Data** = aise numbers jinhe add ya average kar sakte hain (**Discrete** counts vs **Continuous** measurements).',
                  },
                  {
                    en: '**Categorical Data** = group labels (**Nominal** unordered vs **Ordinal** ranked).',
                    hi: '**Categorical Data** = group labels (**Nominal** bina order ke vs **Ordinal** ranked order mein).',
                  },
                  {
                    en: 'Always test digit columns (like `Pin_Code`, `Roll_No`, `Phone`): *"Does adding two values make real-world sense?"* If not, treat it as Categorical!',
                    hi: 'Digit columns (jaise `Pin_Code`, `Roll_No`) par hamesha test kariye: *"Kya inhe jodne ka koi matlab hai?"* Nahi, toh wo Categorical hai!',
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
  // TOPIC 18: Data Sources: Files, Databases and APIs
  // --------------------------------------------------------------------------
  18: {
    module: 'DS-M03',
    moduleTitle: 'Data Types, Sources and Collection',
    topic: 'Data Sources: Files, Databases and APIs',
    pageCount: 4,
    sampleDataNotice:
      'The weather API request/response and retail database table examples are illustrative educational examples.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 3',
        pageTag: 'PAGE 1 OF 4',
        footerPage: '1 / 4',
        title: 'Data Sources: Files, Databases and APIs',
        subtitle: 'WHERE REAL-WORLD DATA LIVES AND HOW DATA SCIENTISTS FETCH IT',
        intro: {
          icon: 'database',
          titleEn: 'Where Does Data Actually Come From?',
          titleHi: 'Asli Duniya Mein Data Kahan Se Aata Hai?',
          bodyEn:
            'Before you can analyze anything, you need to know **where the data lives**. In real companies, data comes from three primary places: **Flat Files** (saved on a computer or cloud folder), **Databases** (organized multi-table storage systems), and **APIs** (live bridges that deliver fresh data on request over the internet).',
          bodyHi:
            'Analysis shuru karne se pehle jaanna zaroori hai ki **data rakha kahan hai**. Companies mein data mainly teen jagahon se aata hai: **Flat Files** (computer ya cloud folder mein saved), **Databases** (organized multi-table systems), aur **APIs** (internet ke zariye live data mangwane ka bridge).',
        },
        sections: [
          {
            pill: 'The 3 Main Data Sources Explained With Everyday Analogies',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: '1. Flat Files (Like a Paper Notebook)',
                    bodyEn:
                      'Saved files such as `.csv`, `.xlsx`, or `.json`. Simple to share and open, great for small-to-medium snapshots, but hard for 100 people to edit simultaneously.',
                    bodyHi:
                      'Saved files jaise `.csv`, `.xlsx`, ya `.json`. Share karna aasaan hai, small-to-medium data ke liye badhiya, par 100 log ek saath edit nahi kar sakte.',
                    tone: 'sky',
                  },
                  {
                    title: '2. Databases (Like a Giant Organized Library)',
                    bodyEn:
                      'Systems like **PostgreSQL**, **MySQL**, or **Snowflake** storing millions of linked rows safely with strict permissions and fast **SQL** queries.',
                    bodyHi:
                      '**PostgreSQL**, **MySQL**, ya **Snowflake** jaise systems jo croreon rows ko safely store karte hain aur **SQL** se turant search karne dete hain.',
                    tone: 'lavender',
                  },
                  {
                    title: '3. APIs (Like a Restaurant Waiter)',
                    bodyEn:
                      'An **Application Programming Interface (API)** takes your request to another service (e.g., weather, maps, or payments) and brings back fresh structured data (usually **JSON**).',
                    bodyHi:
                      '**API** ek restaurant waiter ki tarah hai: aap request bhejte hain (jaise live weather ya map distance) aur wo server se fresh data (aksar **JSON**) laakar deta hai.',
                    tone: 'green',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 3',
        pageTag: 'PAGE 2 OF 4',
        footerPage: '2 / 4',
        title: 'How a Relational Database Connects Tables',
        subtitle: 'WHY DATABASES SPLIT DATA INTO CLEAN LINKED TABLES',
        sections: [
          {
            pill: 'Illustrative Database Example: Customers + Orders Linked by Customer_ID',
            blocks: [
              {
                type: 'table',
                headers: ['Table Name', 'Columns Stored', 'Shared Key Used to Link'],
                rows: [
                  ['Customers', 'Customer_ID, Full_Name, City, Signup_Date', 'Customer_ID (Primary Key)'],
                  ['Orders', 'Order_ID, Customer_ID, Order_Date, Total_INR', 'Customer_ID (Foreign Key)'],
                ],
                noteEn:
                  'Instead of repeating a customer’s name and city on 50 order rows, a Database stores customer details once and links Orders using Customer_ID!',
                noteHi:
                  'Customer ka naam aur city 50 orders mein baar-baar likhne ke bajay, Database use ek baar Customers table mein rakhta hai aur Customer_ID se Orders table ko jod deta hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 3',
        pageTag: 'PAGE 3 OF 4',
        footerPage: '3 / 4',
        title: 'How an API Request & Response Works',
        subtitle: 'FETCHING LIVE DATA IN 4 SIMPLE STEPS',
        sections: [
          {
            pill: 'Visual API Request → Response Flow',
            blocks: [
              {
                type: 'flow',
                items: [
                  {
                    title: '1. Send Request',
                    bodyEn: 'Your app asks: GET /weather?city=Pune',
                    bodyHi: 'Aapka app request bhejta hai: GET /weather?city=Pune',
                    tone: 'sky',
                  },
                  {
                    title: '2. Check Access',
                    bodyEn: 'Server verifies your API Key & rate limits.',
                    bodyHi: 'Server aapki API Key aur access limit check karta hai.',
                    tone: 'amber',
                  },
                  {
                    title: '3. Package Data',
                    bodyEn: 'Server fetches live weather and formats it as JSON.',
                    bodyHi: 'Server live weather nikaal kar JSON format mein pack karta hai.',
                    tone: 'lavender',
                  },
                  {
                    title: '4. Receive Response',
                    bodyEn: 'Status 200 OK + clean temperature & rain data arrives!',
                    bodyHi: 'Status 200 OK ke saath clean temperature aur rain data mil jaata hai!',
                    tone: 'green',
                  },
                ],
              },
            ],
          },
          {
            pill: 'Sample API Response (Illustrative JSON)',
            blocks: [
              {
                type: 'sql',
                label: 'ILLUSTRATIVE API JSON RESPONSE',
                code: `{\n  "city": "Pune",\n  "temperature_c": 29.4,\n  "rain_mm": 0.0,\n  "status": "Clear"\n}`,
                captionEn:
                  'Notice how clean and readable an API response is: simple "key": value pairs that any program can convert into table columns.',
                captionHi:
                  'Dekhiye API response kitna clean hota hai: simple "key": value pairs jinhe koi bhi program aasaani se table columns mein badal sakta hai.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 3',
        pageTag: 'PAGE 4 OF 4',
        footerPage: '4 / 4',
        title: 'Choosing the Right Data Source',
        subtitle: 'QUICK COMPARISON & KEY TAKEAWAYS',
        sections: [
          {
            pill: 'Files vs Databases vs APIs',
            blocks: [
              {
                type: 'table',
                headers: ['Source', 'Best Used For', 'Main Limitation'],
                rows: [
                  ['Files (CSV/Excel)', 'Small exports, quick sharing, offline practice datasets', 'Gets slow on huge files; easy to create mismatched copies'],
                  ['Databases (SQL/NoSQL)', 'Large company records updated constantly by many users', 'Requires access permissions and query language (like SQL)'],
                  ['APIs', 'Live external data (weather, maps, exchange rates, app events)', 'Often has rate limits and requires internet/authentication'],
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TOPIC 19: CSV, Excel, JSON and Parquet Formats
  // --------------------------------------------------------------------------
  19: {
    module: 'DS-M03',
    moduleTitle: 'Data Types, Sources and Collection',
    topic: 'CSV, Excel, JSON and Parquet Formats',
    pageCount: 4,
    sampleDataNotice:
      'All sample product records shown in CSV, Excel, JSON, and Parquet representations below are illustrative learning examples.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 4',
        pageTag: 'PAGE 1 OF 4',
        footerPage: '1 / 4',
        title: 'CSV, Excel, JSON and Parquet Formats',
        subtitle: 'HOW THE EXACT SAME DATA LOOKS IN FOUR INDUSTRY FILE FORMATS',
        intro: {
          icon: 'table',
          titleEn: 'Why Are There So Many File Formats?',
          titleHi: 'Data Ke Itne Saare File Formats Kyun Hote Hain?',
          bodyEn:
            'Just as you pack water in a bottle, clothes in a suitcase, and fragile glass in bubble wrap, Data teams choose different **file formats** depending on whether **humans need to read it**, **web apps need to send it**, or **analytics engines need to scan millions of rows super fast**.',
          bodyHi:
            'Jaise paani bottle mein, kapde suitcase mein aur kaanch bubble wrap mein pack hota hai, waise hi Data teams alag **file formats** chunti hain — is baat par depend karta hai ki **insaan ko padhna hai**, **web app ko bhejna hai**, ya **croreon rows ko super fast scan karna hai**.',
        },
        sections: [
          {
            pill: '1. CSV (Comma-Separated Values) — Plain Text Table',
            blocks: [
              {
                type: 'sql',
                label: 'SAMPLE FILE: products.csv',
                code: `product_id,name,category,price_inr\nP101,Cotton Shirt,Clothing,799\nP102,Steel Bottle,Kitchen,450`,
                captionEn:
                  'CSV is pure plain text where commas separate columns and each line is a row. Almost every tool on Earth can open it — but it stores NO formatting, NO formulas, and NO strict data types.',
                captionHi:
                  'CSV pure plain text hota hai jahan comma columns ko alag karta hai aur har line ek row hoti hai. Har tool isse khol sakta hai — par isme colors, formulas ya strict data types save nahi hote.',
              },
            ],
          },
          {
            pill: '2. JSON (JavaScript Object Notation) — Flexible Nested Records',
            blocks: [
              {
                type: 'sql',
                label: 'SAMPLE FILE: products.json',
                code: `[\n  { "product_id": "P101", "name": "Cotton Shirt", "sizes": ["M", "L"], "price_inr": 799 },\n  { "product_id": "P102", "name": "Steel Bottle", "sizes": ["750ml"], "price_inr": 450 }\n]`,
                captionEn:
                  'JSON uses key-value pairs and supports nested lists (like multiple "sizes" inside one product!). Ideal for web APIs and app logs.',
                captionHi:
                  'JSON key-value pairs use karta hai aur nested lists (jaise ek product ke andar multiple "sizes") support karta hai! Web APIs aur app logs ke liye best hai.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 4',
        pageTag: 'PAGE 2 OF 4',
        footerPage: '2 / 4',
        title: 'Excel (.xlsx) vs Parquet (.parquet)',
        subtitle: 'HUMAN-FRIENDLY WORKBOOKS VS HIGH-SPEED COLUMNAR STORAGE',
        sections: [
          {
            pill: 'Understanding Excel and Parquet Simply',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: '3. Excel (.xlsx) — Human Workbook',
                    bodyEn:
                      'Supports **multiple sheets**, formulas (`=SUM()`), colors, charts, and bold headers. Loved by business managers — but slow on very large datasets (Excel caps at ~1.04 million rows per sheet).',
                    bodyHi:
                      '**Multiple sheets**, formulas (`=SUM()`), colors aur charts support karta hai. Business managers ka favorite — par bahut bade data (10 lakh+ rows) par slow ho jaata hai.',
                    tone: 'green',
                  },
                  {
                    title: '4. Parquet (.parquet) — Analytics Powerhouse',
                    bodyEn:
                      'A compressed **binary, column-oriented** format. Instead of reading every column of every row, Parquet stores each column together (all `price_inr` values side-by-side) WITH its exact data type! Tiny file size and blazing fast for big data.',
                    bodyHi:
                      'Ek compressed **binary, column-oriented** format. Har row ke saare columns padhne ke bajay yeh har column ko ek saath store karta hai (exact data type ke saath)! File size chhota aur speed super fast hoti hai.',
                    tone: 'lavender',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 4',
        pageTag: 'PAGE 3 OF 4',
        footerPage: '3 / 4',
        title: 'Row-Oriented vs Column-Oriented: Why Parquet Is So Fast',
        subtitle: 'A SIMPLE VISUAL MENTAL MODEL',
        sections: [
          {
            pill: 'Imagine Computing Average Price Across 50 Columns',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'Row Storage (CSV / JSON)',
                    bodyEn:
                      'To average `price_inr`, the computer must scan through `product_id`, `name`, `description`, `color`, and 46 other columns on **every single row**.',
                    bodyHi:
                      '`price_inr` ka average nikaalne ke liye computer ko **har row** ke baaki 49 columns bhi scan karne padte hain.',
                    tone: 'amber',
                  },
                  {
                    title: 'Columnar Storage (Parquet)',
                    bodyEn:
                      'The computer jumps **straight to the `price_inr` column block** and skips the other 49 columns completely — saving massive time and disk reads!',
                    bodyHi:
                      'Computer seedhe **`price_inr` column block** padhta hai aur baaki 49 columns ko bilkul skip kar deta hai — massive speed boost!',
                    tone: 'sky',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 4',
        pageTag: 'PAGE 4 OF 4',
        footerPage: '4 / 4',
        title: 'Side-by-Side Format Cheat Sheet',
        subtitle: 'WHICH FORMAT SHOULD YOU PICK?',
        sections: [
          {
            pill: 'Practical Comparison Table',
            blocks: [
              {
                type: 'table',
                headers: ['Format', 'Human Readable?', 'Keeps Data Types?', 'Best Real-World Use'],
                rows: [
                  ['CSV (.csv)', 'Yes (Plain text)', 'No (Everything is text)', 'Universal sharing of small-to-medium flat tables'],
                  ['Excel (.xlsx)', 'Yes (Spreadsheet app)', 'Partial (Formatting + formulas)', 'Business reports, finance sheets, stakeholder handoffs'],
                  ['JSON (.json)', 'Yes (Structured text)', 'Basic (string/number/bool/list)', 'Web APIs, mobile app events, nested configurations'],
                  ['Parquet (.parquet)', 'No (Binary file)', 'Yes (Strict schema preserved)', 'Large-scale Data Science pipelines & cloud data lakes'],
                ],
                noteEn:
                  'Rule of thumb: Use Excel for business stakeholders, CSV for simple universal sharing, JSON for nested web/API data, and Parquet for large analytical datasets!',
                noteHi:
                  'Simple rule: Business stakeholders ke liye Excel, universal sharing ke liye CSV, web/API nested data ke liye JSON, aur bade analytics datasets ke liye Parquet!',
              },
            ],
          },
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // TOPIC 20: Introduction to Public Datasets
  // --------------------------------------------------------------------------
  20: {
    module: 'DS-M03',
    moduleTitle: 'Data Types, Sources and Collection',
    topic: 'Introduction to Public Datasets',
    pageCount: 3,
    sampleDataNotice:
      'Platform names mentioned below are widely known public open-data repositories used for education and research.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 5',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Introduction to Public Datasets',
        subtitle: 'PRACTICING REAL DATA SCIENCE WITH OPEN, LEGAL DATASETS',
        intro: {
          icon: 'database',
          titleEn: 'What Are Public Datasets?',
          titleHi: 'Public Datasets Kya Hote Hain?',
          bodyEn:
            'You do not need to work at a giant company to practice on real data! **Public Datasets** are collections of data openly shared by governments, universities, researchers, and communities so anyone can learn, build portfolio projects, and verify findings.',
          bodyHi:
            'Real data par practice karne ke liye aapko kisi badi company mein job karne ka intezaar nahi karna padta! **Public Datasets** aise open datasets hote hain jo governments, universities aur research communities sabke liye share karti hain taaki koi bhi seekh sake aur projects bana sake.',
        },
        sections: [
          {
            pill: 'Trusted Places to Find Public Datasets',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'Government Open Portals',
                    bodyEn:
                      'Examples: **data.gov.in**, **data.gov**, **World Bank Open Data**, **WHO**. Great for census, health, weather, education, and agriculture.',
                    bodyHi:
                      'Examples: **data.gov.in**, **data.gov**, **World Bank**, **WHO**. Census, health, weather, education aur agriculture ke liye best.',
                    tone: 'sky',
                  },
                  {
                    title: 'Data Science Communities',
                    bodyEn:
                      'Examples: **Kaggle Datasets**, **UCI Machine Learning Repository**, **Hugging Face Datasets**. Great for beginner-to-advanced practice.',
                    bodyHi:
                      'Examples: **Kaggle Datasets**, **UCI ML Repository**, **Hugging Face**. Beginner se advanced practice ke liye badhiya.',
                    tone: 'lavender',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 5',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: '5 Things to Check Before Using Any Public Dataset',
        subtitle: 'PUBLIC DOES NOT ALWAYS MEAN CLEAN OR FREE FOR COMMERCIAL USE',
        sections: [
          {
            pill: 'Smart Evaluation Checklist',
            blocks: [
              {
                type: 'table',
                headers: ['Check', 'Question to Ask'],
                rows: [
                  ['1. License & Terms', 'Is it allowed for learning only, or also commercial use? Do I need to credit the creator?'],
                  ['2. Source Credibility', 'Was it collected by a trusted agency/researcher, or uploaded anonymously with unknown origin?'],
                  ['3. Date & Freshness', 'Is this data from 2025 or from 2009? Old prices or trends may not match today.'],
                  ['4. Documentation', 'Does it include a Data Dictionary explaining what each column and unit means?'],
                  ['5. Real vs Synthetic', 'Is it real recorded data or computer-generated synthetic data for practice?'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 5',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'USING OPEN DATA RESPONSIBLY',
        sections: [
          {
            pill: 'Remember Before Downloading',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: 'Public datasets are a goldmine for building skills and authentic portfolio projects without waiting for corporate access.',
                    hi: 'Public datasets bina corporate access ke real skills aur portfolio projects banane ka sabse accha zariya hain.',
                  },
                  {
                    en: 'Always check **License**, **Freshness**, **Documentation**, and **Source Credibility** before trusting any public file.',
                    hi: 'Kisi bhi public file par bharosa karne se pehle **License**, **Freshness**, **Documentation**, aur **Source Credibility** zaroor check kariye.',
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
  // TOPIC 21: Collecting Data from Different Sources
  // --------------------------------------------------------------------------
  21: {
    module: 'DS-M03',
    moduleTitle: 'Data Types, Sources and Collection',
    topic: 'Collecting Data from Different Sources',
    pageCount: 3,
    sampleDataNotice:
      'All store sales, weather feed, and festival calendar examples below are illustrative sample datasets.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 6',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Collecting Data from Different Sources',
        subtitle: 'BRINGING SCATTERED PIECES TOGETHER INTO ONE UNIFIED VIEW',
        intro: {
          icon: 'database',
          titleEn: 'Why One Single Table Is Rarely Enough',
          titleHi: 'Sirf Ek Table Aksar Kaafi Kyun Nahi Hoti?',
          bodyEn:
            'In real businesses, useful clues live in different places! A store’s **billing software** records what sold, the **website** records what shoppers searched, and a **weather API** records whether it rained. **Multi-Source Data Collection** brings these separate pieces together cleanly using **shared keys** (like `Date`, `Store_ID`, or `Customer_ID`).',
          bodyHi:
            'Real businesses mein zaroori clues alag-alag jagahon par bikhre hote hain! **Billing software** batata hai kya bika, **website** batati hai kya search hua, aur **weather API** batata hai baarish hui ya nahi. **Multi-Source Data Collection** in alag-alag pieces ko **shared keys** (jaise `Date`, `Store_ID`, ya `Customer_ID`) se ek clean view mein jodta hai.',
        },
        sections: [
          {
            pill: 'How Three Separate Sources Merge Together',
            blocks: [
              {
                type: 'flow',
                items: [
                  {
                    title: 'POS Database',
                    bodyEn: 'Daily store sales (Date, Store_ID, Revenue).',
                    bodyHi: 'Roz ki store sales (Date, Store_ID, Revenue).',
                    tone: 'sky',
                  },
                  {
                    title: 'Weather API',
                    bodyEn: 'City rainfall & temperature (Date, City, Rain_MM).',
                    bodyHi: 'City ka mausam (Date, City, Rain_MM).',
                    tone: 'amber',
                  },
                  {
                    title: 'Marketing CSV',
                    bodyEn: 'Promo campaigns run (Date, Store_ID, Discount_Flag).',
                    bodyHi: 'Discount campaigns (Date, Store_ID, Discount_Flag).',
                    tone: 'lavender',
                  },
                  {
                    title: 'Unified Table',
                    bodyEn: 'One clean dataset matched by Date + Store_ID / City!',
                    bodyHi: 'Date + Store_ID / City par match hua ek unified dataset!',
                    tone: 'green',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 6',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Common Headaches When Combining Sources',
        subtitle: 'WHAT BREAKS IF YOU DO NOT ALIGN KEYS FIRST',
        sections: [
          {
            pill: '4 Classic Integration Mismatches',
            blocks: [
              {
                type: 'table',
                headers: ['Mismatch Type', 'Source A Says', 'Source B Says', 'Fix Before Joining'],
                rows: [
                  ['Date Format', '05-11-2026 (DD-MM-YYYY)', '2026/11/05 (YYYY/MM/DD)', 'Convert both to ISO standard: 2026-11-05'],
                  ['Naming Difference', 'Bengaluru', 'Bangalore', 'Standardize to one official city spelling'],
                  ['ID Formatting', 'CUST0042', '42', 'Normalize IDs to the exact same format'],
                  ['Time Zone', 'IST (UTC+5:30)', 'UTC', 'Convert all timestamps to one consistent time zone'],
                ],
                noteEn:
                  'If Source A says "Bengaluru" and Source B says "Bangalore", a computer treats them as two completely different cities and fails to match the rows!',
                noteHi:
                  'Agar Source A mein "Bengaluru" likha ho aur Source B mein "Bangalore", toh computer unhe do alag shehar maan leta hai aur rows match nahi hoti!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 6',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'SAFE MULTI-SOURCE COLLECTION',
        sections: [
          {
            pill: 'Golden Rules for Merging Data',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: 'Always identify the **shared join key** (like `Date`, `Customer_ID`, `Product_ID`) before combining sources.',
                    hi: 'Sources ko jodne se pehle hamesha **shared join key** (jaise `Date`, `Customer_ID`) confirm kariye.',
                  },
                  {
                    en: 'Standardize **date formats, spellings, IDs, and time zones** first so valid matches are not silently dropped.',
                    hi: 'Pehle **date formats, spellings, IDs aur time zones** ko standardize kariye taaki sahi records miss na hon.',
                  },
                  {
                    en: 'Check **row counts before and after merging** to make sure you did not accidentally multiply or lose rows!',
                    hi: 'Merge karne se **pehle aur baad mein row count** zaroor check kariye taaki galti se rows double ya gayab na ho jaayein!',
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
  // TOPIC 22: Understanding Data Schemas
  // --------------------------------------------------------------------------
  22: {
    module: 'DS-M03',
    moduleTitle: 'Data Types, Sources and Collection',
    topic: 'Understanding Data Schemas',
    pageCount: 3,
    sampleDataNotice:
      'The Orders table schema below is an illustrative beginner schema definition.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 7',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Understanding Data Schemas',
        subtitle: 'THE ARCHITECTURAL BLUEPRINT OF EVERY CLEAN DATASET',
        intro: {
          icon: 'table',
          titleEn: 'What Is a Data Schema?',
          titleHi: 'Data Schema Kya Hota Hai?',
          bodyEn:
            'A **Data Schema** is the official blueprint of a dataset or database table. It specifies **each column’s exact name**, **its allowed data type** (Integer, Decimal, Text, Date, Boolean), **whether blanks (NULLs) are allowed**, and **which columns uniquely identify or link rows** (Primary & Foreign Keys).',
          bodyHi:
            '**Data Schema** kisi dataset ya database table ka official blueprint hota hai. Yeh batata hai ki **har column ka exact naam kya hai**, **usme kis type ka data aa sakta hai** (Integer, Decimal, Text, Date, Boolean), **kya blank (NULL) allowed hai**, aur **kaun sa column row ko uniquely identify ya link karta hai** (Primary & Foreign Keys).',
        },
        sections: [
          {
            pill: 'Illustrative Schema Blueprint: Orders Table',
            blocks: [
              {
                type: 'table',
                headers: ['Column Name', 'Data Type', 'Nullable?', 'Key / Constraint', 'Meaning'],
                rows: [
                  ['order_id', 'INTEGER', 'NOT NULL', 'PRIMARY KEY (Unique)', 'Unique number identifying each order'],
                  ['customer_id', 'INTEGER', 'NOT NULL', 'FOREIGN KEY', 'Links to Customers.customer_id'],
                  ['order_date', 'DATE', 'NOT NULL', 'YYYY-MM-DD', 'Date when the order was placed'],
                  ['amount_inr', 'DECIMAL(10,2)', 'NOT NULL', 'CHECK >= 0', 'Order total in Indian Rupees'],
                  ['coupon_code', 'VARCHAR(20)', 'NULL allowed', 'Optional', 'Discount code if used; blank otherwise'],
                ],
                noteEn:
                  'Notice how clean this blueprint is: anyone reading the schema immediately knows `amount_inr` cannot be negative or text, and `coupon_code` is allowed to be blank!',
                noteHi:
                  'Dekhiye blueprint kitna clear hai: schema padhte hi pata chal jaata hai ki `amount_inr` negative ya text nahi ho sakta, aur `coupon_code` blank reh sakta hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 7',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Why Schemas Protect Data Pipelines',
        subtitle: 'WHAT HAPPENS WHEN A SCHEMA CHANGES UNEXPECTEDLY?',
        sections: [
          {
            pill: 'Schema Enforcement vs Schema Drift',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'With a Clear Schema',
                    bodyEn:
                      'If a buggy app tries to write `"five hundred"` into `amount_inr` (which expects a DECIMAL), the system **catches and rejects it immediately** before it corrupts reports.',
                    bodyHi:
                      'Agar koi buggy app `amount_inr` (jo DECIMAL expect karta hai) mein `"five hundred"` likhne ki koshish kare, toh system **turant error pakad kar rok deta hai**.',
                    tone: 'green',
                  },
                  {
                    title: 'Without a Schema (Schema Drift)',
                    bodyEn:
                      'One day a developer renames `amount_inr` to `total_price` without telling anyone. Downstream dashboards and models suddenly crash or output zeros!',
                    bodyHi:
                      'Ek din koi developer bina bataye `amount_inr` ka naam `total_price` kar de, toh saare dashboards aur models achanak crash ya galat output dene lagte hain!',
                    tone: 'pink',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 7',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'READING SCHEMAS LIKE A PRO',
        sections: [
          {
            pill: 'Remember About Data Schemas',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: 'A **Schema** defines column names, **data types**, **nullability**, **constraints**, and **Primary/Foreign Keys**.',
                    hi: '**Schema** column names, **data types**, **nullability**, **constraints**, aur **Primary/Foreign Keys** ko define karta hai.',
                  },
                  {
                    en: '**Primary Key** uniquely identifies each row; **Foreign Key** links one table cleanly to another.',
                    hi: '**Primary Key** har row ko uniquely identify karti hai; **Foreign Key** ek table ko dusri table se jodti hai.',
                  },
                  {
                    en: 'Always inspect a dataset’s schema first — it saves hours of debugging mismatched types later.',
                    hi: 'Kisi bhi naye dataset ka schema sabse pehle check kariye — isse aage ke ghanton ki debugging bachti hai.',
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
  // TOPIC 23: Data Privacy and Responsible Collection
  // --------------------------------------------------------------------------
  23: {
    module: 'DS-M03',
    moduleTitle: 'Data Types, Sources and Collection',
    topic: 'Data Privacy and Responsible Collection',
    pageCount: 3,
    sampleDataNotice:
      'All customer record masking and anonymization examples below are synthetic illustrative examples.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 8',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Data Privacy and Responsible Collection',
        subtitle: 'JUST BECAUSE YOU CAN COLLECT DATA DOES NOT MEAN YOU SHOULD',
        intro: {
          icon: 'database',
          titleEn: 'Every Row Represents a Real Human Being',
          titleHi: 'Har Row Ke Peeche Ek Asli Insaan Hota Hai',
          bodyEn:
            'Behind customer tables, hospital logs, and student profiles are real people who trust organizations with their personal details. **Data Privacy and Responsible Collection** means collecting only what is needed, getting clear **consent**, protecting sensitive **Personal Identifiable Information (PII)**, and following privacy laws and ethics.',
          bodyHi:
            'Customer tables, hospital logs aur student profiles ke peeche asli log hote hain jo apni personal details par bharosa karke share karte hain. **Data Privacy aur Responsible Collection** ka matlab hai sirf zaroori data collect karna, saaf **consent** lena, sensitive **PII** ko protect karna, aur privacy laws wa ethics ka paalan karna.',
        },
        sections: [
          {
            pill: 'What Is PII (Personally Identifiable Information)?',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'Direct PII (Identifies You Immediately)',
                    bodyEn:
                      'Full name, phone number, email address, home street address, Aadhaar/PAN/SSN, bank account number.',
                    bodyHi:
                      'Poora naam, phone number, email, ghar ka pata, Aadhaar/PAN/ID number, bank account number.',
                    tone: 'pink',
                  },
                  {
                    title: 'Sensitive / Indirect Identifiers',
                    bodyEn:
                      'Medical diagnosis, financial salary, exact GPS home location, or a combination of Date of Birth + Pin Code + Gender that can still identify someone.',
                    bodyHi:
                      'Medical reports, salary, exact GPS location, ya Date of Birth + Pin Code + Gender ka combination jo kisi insaan ki pehchaan khol sakta hai.',
                    tone: 'amber',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 8',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Practical Privacy Protection: Before & After Anonymization',
        subtitle: 'YOU CAN ANALYZE PATTERNS WITHOUT EXPOSING IDENTITIES',
        sections: [
          {
            pill: 'Illustrative Sample Dataset: Raw PII vs Privacy-Safe Analytics Table',
            blocks: [
              {
                type: 'table',
                headers: ['Raw Record (Do NOT Share Broadly)', 'Privacy-Safe Version for Analysis'],
                rows: [
                  ['Name: Priya Verma | Phone: 98XXXX1234', 'User_Token: U_94821 (Phone & Name removed)'],
                  ['DOB: 14-08-1996 | Address: 42 MG Road, Indore', 'Age_Group: 25–34 | City: Indore'],
                  ['Email: priya.v@example.com | Spend: ₹2,400', 'Email removed | Spend: ₹2,400'],
                ],
                noteEn:
                  'Notice that a Data Scientist studying spending by Age_Group and City does NOT need Priya’s name, phone number, or street address at all!',
                noteHi:
                  'Dhyan dijiye: Age_Group aur City ke hisaab se spending analyze karne ke liye Data Scientist ko Priya ke naam, phone number ya ghar ke pate ki koi zaroorat nahi hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M03 | TOPIC 8',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'The 5 Pillars of Responsible Data Collection',
        subtitle: 'ETHICAL HABITS EVERY DATA PROFESSIONAL MUST FOLLOW',
        sections: [
          {
            pill: 'Core Principles',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  {
                    en: '**Informed Consent:** Tell users clearly what data is collected and why, in plain language.',
                    hi: '**Informed Consent:** Users ko seedhi bhasha mein batayein ki kaun sa data kis kaam ke liye liya ja raha hai.',
                  },
                  {
                    en: '**Data Minimization:** Collect only the columns strictly needed for the stated purpose — never hoard extra personal details.',
                    hi: '**Data Minimization:** Sirf wahi columns collect kariye jo kaam ke liye zaroori hain — faltu personal details mat jama kariye.',
                  },
                  {
                    en: '**Security & Access Control:** Encrypt sensitive data, mask PII, and restrict access to authorized team members only.',
                    hi: '**Security & Access Control:** Sensitive data ko encrypt rakhiye, PII mask kariye, aur sirf authorized logo ko access dijiye.',
                  },
                  {
                    en: '**Fairness & Legal Compliance:** Follow local privacy regulations (such as India’s DPDP Act or Europe’s GDPR) and avoid discriminatory use.',
                    hi: '**Fairness & Legal Compliance:** Privacy laws (jaise India ka DPDP Act ya GDPR) ka paalan kariye aur bhedbhaav wale use se bachiye.',
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
