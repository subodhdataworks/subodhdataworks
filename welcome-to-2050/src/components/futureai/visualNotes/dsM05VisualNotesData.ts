import type { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

// ============================================================================
// MODULE 5 (DS-M05): Introduction to Programming and Python — Topics 32 to 41
// ============================================================================

export const DS_M05_VISUAL_NOTES: Record<number, StructuredVisualNoteTopic> = {
  // 32. What Is Programming?
  32: {
    module: 'DS-M05',
    moduleTitle: 'Introduction to Programming and Python',
    topic: 'What Is Programming?',
    pageCount: 3,
    sampleDataNotice: 'All cooking recipe and billing examples are illustrative beginner learning scenarios.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 1',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'What Is Programming?',
        subtitle: 'GIVING CLEAR, STEP-BY-STEP INSTRUCTIONS TO A COMPUTER',
        intro: {
          icon: 'database',
          titleEn: 'Start From Zero: What Is a Program?',
          titleHi: 'Zero Se Samajhiye: Program Kya Hota Hai?',
          bodyEn:
            '**Programming** is the skill of writing clear, step-by-step instructions that a computer can follow to solve a problem. Think of a **cooking recipe**: if you want tea, you write exact ordered steps — boil water, add tea leaves, add milk and sugar, strain into a cup. A **Program** is simply a recipe written in a language a computer understands.',
          bodyHi:
            '**Programming** ka matlab hai computer ko clear, step-by-step instructions likh kar dena taaki wo koi kaam kar sake. Ek **chai ki recipe** sochiye — paani ubalo, patti dalo, doodh-cheeni dalo, chhaan kar cup mein dalo. **Program** bilkul aisi hi recipe hai jo computer ki bhasha mein likhi hoti hai.',
        },
        sections: [
          {
            pill: 'Everyday Recipe vs Computer Program',
            blocks: [
              {
                type: 'compare',
                items: [
                  {
                    title: 'Human Recipe (Making Tea)',
                    bodyEn: 'Written in English/Hindi. Humans can guess missing details like *"a pinch of sugar"*.',
                    bodyHi: 'English/Hindi mein likhi hoti hai. Insaan *"thodi si cheeni"* jaisi vague baat khud samajh leta hai.',
                    tone: 'amber',
                  },
                  {
                    title: 'Computer Program (Billing Total)',
                    bodyEn: 'Written in a programming language like **Python**. Every step must be exact — computers follow instructions literally!',
                    bodyHi: '**Python** jaisi programming language mein likha hota hai. Har step exact hona chahiye kyunki computer har instruction ko literally follow karta hai!',
                    tone: 'sky',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 1',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Why Do We Need Programming in Data Science?',
        subtitle: 'AUTOMATING WORK THAT TAKES HUMANS HOURS',
        sections: [
          {
            pill: 'Input → Process → Output (The Core Model of Every Program)',
            blocks: [
              {
                type: 'flow',
                items: [
                  { title: '1. Input', bodyEn: 'Raw data enters the program (e.g., item prices).', bodyHi: 'Program mein raw data aata hai (jaise item prices).', tone: 'sky' },
                  { title: '2. Process', bodyEn: 'The program follows your rules (add prices, apply discount).', bodyHi: 'Program aapke rules chalata hai (sum karo, discount lagao).', tone: 'lavender' },
                  { title: '3. Output', bodyEn: 'Final verified result appears on screen or in a file.', bodyHi: 'Final result screen par ya file mein mil jaata hai.', tone: 'green' },
                ],
              },
            ],
          },
          {
            pill: 'Your Very First Glimpse of a Tiny Python Program',
            blocks: [
              {
                type: 'sql',
                label: 'bill_demo.py',
                code: `price = 250\nquantity = 4\ntotal = price * quantity\nprint(total)`,
                output: `1000`,
                captionEn: 'Look how readable Python is! Even on Day 1, you can read this program: price is 250, quantity is 4, multiply them, and print 1000.',
                captionHi: 'Dekhiye Python kitna readable hai! Pehle din hi samajh aa jaata hai: price 250, quantity 4, dono ko multiply karo aur 1000 print karo.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 1',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'ANYONE CAN LEARN TO PROGRAM STEP BY STEP',
        sections: [
          {
            pill: 'Remember From Lesson 1',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: '**Programming** = writing exact, ordered instructions for a computer to execute.', hi: '**Programming** = computer ke liye exact aur ordered instructions likhna.' },
                  { en: 'Every program follows **Input → Process → Output**.', hi: 'Har program **Input → Process → Output** pattern follow karta hai.' },
                  { en: 'You do not need an IT degree or advanced math to start programming — clear logical thinking is what matters most.', hi: 'Programming shuru karne ke liye IT degree ki zaroorat nahi — clear logical thinking sabse zaroori hai.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 33. How Do Computers Follow Instructions?
  33: {
    module: 'DS-M05',
    moduleTitle: 'Introduction to Programming and Python',
    topic: 'How Do Computers Follow Instructions?',
    pageCount: 3,
    sampleDataNotice: 'Conceptual diagrams below simplify computer execution for absolute beginners.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 2',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'How Do Computers Follow Instructions?',
        subtitle: 'FROM HUMAN-READABLE PYTHON CODE TO COMPUTER EXECUTION',
        intro: {
          icon: 'database',
          titleEn: 'Computers Only Understand 0s and 1s — So How Do They Run Python?',
          titleHi: 'Computer Sirf 0 Aur 1 Samajhta Hai — Phir Python Kaise Chalta Hai?',
          bodyEn:
            'Deep inside, a computer processor (CPU) only understands electrical signals represented as **0s and 1s (Binary / Machine Code)**. Humans would go crazy writing 0s and 1s! So we write readable code in **Python**, and a translator program called the **Python Interpreter** reads our code and runs it step by step on the computer.',
          bodyHi:
            'Andar se computer ka processor (CPU) sirf **0 aur 1 (Binary / Machine Code)** samajhta hai. Insaan ke liye 0 aur 1 likhna mushkil hai, isliye hum **Python** mein simple code likhte hain, aur **Python Interpreter** naam ka translator use computer ke liye step-by-step chalata hai.',
        },
        sections: [
          {
            pill: 'Step-by-Step Execution Flow',
            blocks: [
              {
                type: 'flow',
                items: [
                  { title: '1. You Write Code', bodyEn: 'Human-readable Python statements in a `.py` file.', bodyHi: '`.py` file mein human-readable Python code likhte hain.', tone: 'sky' },
                  { title: '2. Interpreter Reads', bodyEn: 'Python checks syntax and translates code line by line.', bodyHi: 'Python syntax check karke code ko translate karta hai.', tone: 'amber' },
                  { title: '3. CPU & Memory Run', bodyEn: 'Values are stored in Memory (RAM) and calculated by CPU.', bodyHi: 'Values Memory (RAM) mein store hoti hain aur CPU calculate karta hai.', tone: 'lavender' },
                  { title: '4. Console Output', bodyEn: 'Results appear cleanly in your Terminal / Output panel.', bodyHi: 'Final result Terminal / Output panel mein dikhta hai.', tone: 'green' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 2',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Sequential Execution: Top to Bottom!',
        subtitle: 'ORDER MATTERS — PYTHON EXECUTES LINE 1, THEN LINE 2, THEN LINE 3',
        sections: [
          {
            pill: 'Watching Line-by-Line Order',
            blocks: [
              {
                type: 'sql',
                label: 'order_demo.py',
                code: `print("Step 1: Open store")\nprint("Step 2: Scan items")\nprint("Step 3: Print receipt")`,
                output: `Step 1: Open store\nStep 2: Scan items\nStep 3: Print receipt`,
                captionEn: 'By default, Python executes strictly from **top to bottom**, one line at a time. Line 2 never runs before Line 1 finishes.',
                captionHi: 'By default, Python strictly **upar se neeche (top to bottom)** ek-ek line chalata hai.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 2',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'THE MENTAL MODEL OF CODE EXECUTION',
        sections: [
          {
            pill: 'What to Remember',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'The **Python Interpreter** bridges human-readable Python code and the computer’s CPU/Memory.', hi: '**Python Interpreter** aapke readable Python code aur computer ke CPU/Memory ke beech translator ka kaam karta hai.' },
                  { en: 'Python executes instructions **literally and sequentially (top to bottom)** unless conditions, loops, or functions redirect the flow.', hi: 'Python instructions ko **literally aur top-to-bottom** chalata hai.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 34. What Is Python?
  34: {
    module: 'DS-M05',
    moduleTitle: 'Introduction to Programming and Python',
    topic: 'What Is Python?',
    pageCount: 3,
    sampleDataNotice: 'Historical facts about Python’s creation by Guido van Rossum (first released in 1991) are verified public history.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 3',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'What Is Python?',
        subtitle: 'A CLEAN, BEGINNER-FRIENDLY, POWERFUL PROGRAMMING LANGUAGE',
        intro: {
          icon: 'database',
          titleEn: 'Meet Python — Designed for Human Readability',
          titleHi: 'Python Se Miliye — Insaan Ke Padhne Ke Liye Banayi Gayi Language',
          bodyEn:
            '**Python** is a high-level, general-purpose programming language created by **Guido van Rossum** and first released in **1991**. Its superpower is **clean, English-like readability** — you spend less time fighting confusing punctuation and more time solving real problems.',
          bodyHi:
            '**Python** ek high-level, general-purpose programming language hai jise **Guido van Rossum** ne banaya aur **1991** mein release kiya. Iski sabse badi taqat iski **clean, English-like readability** hai — aapko confusing symbols se ladne ke bajay asli problem solve karne par focus karne milta hai.',
        },
        sections: [
          {
            pill: 'Why Beginners Love Python',
            blocks: [
              {
                type: 'compare',
                items: [
                  { title: 'Simple & Readable', bodyEn: 'Looks close to plain English — no semicolons or heavy boilerplate needed for simple tasks.', bodyHi: 'Plain English ke kaafi kareeb — simple kaam ke liye extra boilerplate nahi likhna padta.', tone: 'sky' },
                  { title: 'Free & Open-Source', bodyEn: 'Anyone can download and use Python for free on Windows, macOS, and Linux.', bodyHi: 'Windows, macOS aur Linux par bilkul free aur open-source hai.', tone: 'green' },
                  { title: 'Huge Ecosystem', bodyEn: 'Thousands of ready-made libraries for Data Science, web apps, automation, and AI.', bodyHi: 'Data Science, web apps, automation aur AI ke liye hazaaron ready-made libraries available hain.', tone: 'lavender' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 3',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Seeing Python’s Simplicity in Action',
        subtitle: 'THREE LINES TO CALCULATE AN AVERAGE ORDER VALUE',
        sections: [
          {
            pill: 'Clean Python Example',
            blocks: [
              {
                type: 'sql',
                label: 'average_order.py',
                code: `total_sales = 4500\norder_count = 9\naverage_order = total_sales / order_count\nprint("Average Order Value:", average_order)`,
                output: `Average Order Value: 500.0`,
                captionEn: 'Every line reads almost like a math note in your notebook! `4500 / 9` produces `500.0`.',
                captionHi: 'Har line bilkul notebook ke math note jaisi lagti hai! `4500 / 9` ka output `500.0` aata hai.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 3',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'WHY PYTHON IS YOUR BEST FIRST LANGUAGE',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: '**Python** is free, cross-platform, beginner-friendly, and widely used across industry and academia.', hi: '**Python** free, cross-platform, beginner-friendly aur industry mein sabse zyada use hone wali language hai.' },
                  { en: 'Its clean syntax lets Non-IT and career-switch learners focus on **logic and Data Science** right away.', hi: 'Iska clean syntax Non-IT learners ko seedhe **logic aur Data Science** par focus karne deta hai.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 35. Why Python Is Used in Data Science
  35: {
    module: 'DS-M05',
    moduleTitle: 'Introduction to Programming and Python',
    topic: 'Why Python Is Used in Data Science',
    pageCount: 3,
    sampleDataNotice: 'Library names mentioned (NumPy, Pandas, Matplotlib, Scikit-learn) are standard open-source Python packages taught in later modules.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 4',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Why Python Is Used in Data Science',
        subtitle: 'ONE LANGUAGE FOR THE ENTIRE DATA SCIENCE LIFECYCLE',
        intro: {
          icon: 'database',
          titleEn: 'From Messy CSV Files to Production AI Models — All in Python',
          titleHi: 'Messy CSV Files Se Production AI Models Tak — Sab Ek Hi Language Mein',
          bodyEn:
            'Data Scientists need to clean messy data, run statistical checks, draw charts, build predictive models, and connect to web APIs. **Python** became the leading language for Data Science because it handles **every single stage** cleanly and has a massive, helpful community.',
          bodyHi:
            'Data Scientists ko data clean karna, statistics nikaalna, charts banana, models train karna aur APIs se data lena padta hai. **Python** Data Science ki #1 choice isliye bana kyunki yeh **har stage** ko smoothly handle karta hai.',
        },
        sections: [
          {
            pill: '5 Big Reasons Data Teams Pick Python',
            blocks: [
              {
                type: 'table',
                headers: ['Reason', 'How It Helps a Data Scientist'],
                rows: [
                  ['1. Fast to Learn & Read', 'Teams spend time on insights and business logic instead of complex syntax.'],
                  ['2. Specialized Ecosystem', 'Ready-made tools for tables, math, charts, and ML (you will learn these in later modules!).'],
                  ['3. Works With Files, DBs & APIs', 'Easily reads CSV, Excel, JSON, SQL databases, and live web APIs.'],
                  ['4. Interactive Notebooks', 'Jupyter Notebook lets you combine code, charts, and notes on one page.'],
                  ['5. Production Ready', 'The same Python language used for exploration can also power live company apps.'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 4',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Core Python Comes First!',
        subtitle: 'WHY WE MASTER PURE PYTHON BEFORE DATA LIBRARIES',
        sections: [
          {
            pill: 'Build a Strong Foundation Before Shortcuts',
            blocks: [
              {
                type: 'note',
                tone: 'lavender',
                bodyEn:
                  'Later in this course, you will use powerful libraries like **NumPy** and **Pandas**. Every one of those tools is built on top of **Core Python** — Variables, Loops, Lists, Dictionaries, Functions, and Error Handling. Mastering Core Python in Modules M05–M11 makes every future Data Science library feel easy!',
                bodyHi:
                  'Aage chal kar aap **NumPy** aur **Pandas** jaise tools seekhenge. Wo sab **Core Python** (Variables, Loops, Lists, Dictionaries, Functions) ke upar bane hain. M05–M11 mein Core Python strong kar lene se aage ka safar bahut aasaan ho jaata hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 4',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'YOUR DATA SCIENCE TOOLKIT STARTS HERE',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Python unifies data cleaning, analysis, visualization, modeling, and automation in one readable language.', hi: 'Python ek hi readable language mein cleaning, analysis, visualization, modeling aur automation sab deta hai.' },
                  { en: 'Strong Core Python fundamentals make advanced Data Science libraries effortless to learn later.', hi: 'Strong Core Python fundamentals se aage ki Data Science libraries bahut jaldi samajh aati hain.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 36. Python Applications in Everyday Life
  36: {
    module: 'DS-M05',
    moduleTitle: 'Introduction to Programming and Python',
    topic: 'Python Applications in Everyday Life',
    pageCount: 3,
    sampleDataNotice: 'All application categories represent standard real-world uses of Python.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 5',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Python Applications in Everyday Life',
        subtitle: 'WHERE PYTHON QUIETLY WORKS BEHIND THE APPS YOU USE',
        intro: {
          icon: 'database',
          titleEn: 'Far Beyond Just Data Science',
          titleHi: 'Sirf Data Science Hi Nahi — Har Jagah Python!',
          bodyEn:
            'Because Python is a **general-purpose** language, learning it opens doors across many tech domains: **Data Science & AI**, **Web Backends**, **Everyday Task Automation**, **Finance**, and **Scientific Research**.',
          bodyHi:
            'Kyunki Python ek **general-purpose** language hai, ise seekhne se kayi raste khulte hain: **Data Science & AI**, **Web Backends**, **Daily Task Automation**, **Finance**, aur **Scientific Research**.',
        },
        sections: [
          {
            pill: '6 Everyday Uses of Python',
            blocks: [
              {
                type: 'compare',
                items: [
                  { title: 'Data & Analytics', bodyEn: 'Cleaning sales sheets, building charts, and analyzing customer trends.', bodyHi: 'Sales sheets clean karna, charts banana aur customer trends analyze karna.', tone: 'sky' },
                  { title: 'Office Automation', bodyEn: 'Renaming 500 files, merging daily Excel reports, or sending reminder emails automatically.', bodyHi: '500 files rename karna, daily Excel reports merge karna ya automatic reminders bhejna.', tone: 'amber' },
                  { title: 'Web & APIs', bodyEn: 'Powering backend servers for online stores, booking portals, and learning apps.', bodyHi: 'Online stores, booking portals aur learning apps ke backend servers chalana.', tone: 'lavender' },
                  { title: 'AI & Machine Learning', bodyEn: 'Training recommendation engines, fraud detectors, and language assistants.', bodyHi: 'Recommendation engines, fraud detectors aur AI assistants train karna.', tone: 'green' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 5',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Mini Everyday Automation Example',
        subtitle: 'CLEANING A MESSY CUSTOMER NAME IN ONE LINE',
        sections: [
          {
            pill: 'Practical Python Snippet',
            blocks: [
              {
                type: 'sql',
                label: 'clean_name.py',
                code: `raw_name = "   priya sharma   "\nclean_name = raw_name.strip().title()\nprint(clean_name)`,
                output: `Priya Sharma`,
                captionEn: 'Imagine doing this for 10,000 customer rows manually in a spreadsheet vs running 2 lines of Python in under a second!',
                captionHi: 'Sochiye 10,000 customer rows ko manually theek karna vs 2 line ke Python code se 1 second mein clean karna!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 5',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'ONE SKILL, MANY REAL-WORLD APPLICATIONS',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Python is used across **Data Science, Automation, Web Development, Finance, Healthcare, and AI**.', hi: 'Python **Data Science, Automation, Web Development, Finance, Healthcare aur AI** sab jagah use hota hai.' },
                  { en: 'Even tiny 3-line Python scripts can save hours of repetitive office and data-cleaning work.', hi: 'Chhote 3-line Python scripts bhi ghanton ka repetitive data-cleaning kaam bacha sakte hain.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 37. Installing Python
  37: {
    module: 'DS-M05',
    moduleTitle: 'Introduction to Programming and Python',
    topic: 'Installing Python',
    pageCount: 4,
    sampleDataNotice: 'Installation instructions follow official python.org guidelines for Windows, macOS, and Linux.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 6',
        pageTag: 'PAGE 1 OF 4',
        footerPage: '1 / 4',
        title: 'Installing Python',
        subtitle: 'STEP-BY-STEP OFFICIAL SETUP FOR WINDOWS, MACOS, AND LINUX',
        intro: {
          icon: 'database',
          titleEn: 'Always Download From the Official Python Website',
          titleHi: 'Hamesha Official Website (python.org) Se Hi Download Kariye',
          bodyEn:
            'To run Python on your own computer, you install the official **Python 3** interpreter from **python.org/downloads**. Notice that setup steps differ slightly between **Windows**, **macOS**, and **Linux** — let us walk through each OS cleanly.',
          bodyHi:
            'Apne computer par Python chalane ke liye official **Python 3** interpreter **python.org/downloads** se install karte hain. **Windows**, **macOS**, aur **Linux** ke steps thode alag hote hain — aaiye sabko step-by-step dekhte hain.',
        },
        sections: [
          {
            pill: 'Windows Installation Flow (Most Important Step: Add to PATH!)',
            blocks: [
              {
                type: 'flow',
                items: [
                  { title: '1. Visit python.org', bodyEn: 'Open python.org/downloads and download the latest Python 3 installer.', bodyHi: 'python.org/downloads khol kar latest Python 3 installer download karein.', tone: 'sky' },
                  { title: '2. Check Add to PATH', bodyEn: 'CRITICAL: Tick "Add python.exe to PATH" at the bottom before clicking Install Now!', bodyHi: 'ZAROORI: Install Now dabane se pehle neeche "Add python.exe to PATH" zaroor tick karein!', tone: 'pink' },
                  { title: '3. Install Now', bodyEn: 'Click Install Now and wait for "Setup was successful".', bodyHi: 'Install Now par click karein aur "Setup was successful" ka wait karein.', tone: 'amber' },
                  { title: '4. Verify in Terminal', bodyEn: 'Open Command Prompt or PowerShell and run `python --version`.', bodyHi: 'Command Prompt ya PowerShell khol kar `python --version` chalayein.', tone: 'green' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 6',
        pageTag: 'PAGE 2 OF 4',
        footerPage: '2 / 4',
        title: 'What Is PATH and Why Does It Matter?',
        subtitle: 'UNDERSTANDING THE #1 BEGINNER SETUP ERROR',
        sections: [
          {
            pill: 'Simple Explanation of PATH',
            blocks: [
              {
                type: 'note',
                tone: 'amber',
                bodyEn:
                  '**PATH** is a list of folders where your computer automatically looks when you type a command like `python` in the Terminal. If you forget to tick **Add python.exe to PATH** on Windows, typing `python` shows *"python is not recognized"* even though Python is installed!',
                bodyHi:
                  '**PATH** un folders ki list hai jahan aapka computer command dhoondhta hai jab aap Terminal mein `python` likhte hain. Agar Windows par **Add python.exe to PATH** tick karna bhool gaye, toh Python install hone ke baad bhi *"python is not recognized"* error aata hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 6',
        pageTag: 'PAGE 3 OF 4',
        footerPage: '3 / 4',
        title: 'OS-Specific Commands to Verify Python',
        subtitle: 'WINDOWS VS MACOS VS LINUX',
        sections: [
          {
            pill: 'Official Verification Commands by Operating System',
            blocks: [
              {
                type: 'table',
                headers: ['Operating System', 'Install Source', 'Terminal Command to Verify', 'Expected Style of Output'],
                rows: [
                  ['Windows', 'python.org `.exe` installer (tick Add to PATH)', '`python --version` (or `py --version`)', '`Python 3.x.x`'],
                  ['macOS', 'python.org `.pkg` installer or Homebrew (`brew install python`)', '`python3 --version`', '`Python 3.x.x`'],
                  ['Ubuntu / Debian Linux', 'Often pre-installed, or `sudo apt install python3 python3-pip`', '`python3 --version`', '`Python 3.x.x`'],
                ],
                noteEn:
                  'Notice: On macOS and Linux, the command is usually `python3` (and `pip3`), whereas on Windows it is `python` or `py`.',
                noteHi:
                  'Dhyan dijiye: macOS aur Linux par command aksar `python3` hoti hai, jabki Windows par `python` ya `py` chalti hai.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 6',
        pageTag: 'PAGE 4 OF 4',
        footerPage: '4 / 4',
        title: 'Key Takeaways',
        subtitle: 'READY TO SET UP YOUR CODE EDITOR NEXT',
        sections: [
          {
            pill: 'Verification Checklist',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Download Python 3 only from the official **python.org** website.', hi: 'Python 3 hamesha official **python.org** se hi download kariye.' },
                  { en: 'On Windows, always tick **Add python.exe to PATH** during installation.', hi: 'Windows par install karte waqt **Add python.exe to PATH** tick karna mat bhooliye.' },
                  { en: 'Confirm your setup by running `python --version` (Windows) or `python3 --version` (macOS/Linux).', hi: 'Terminal mein `python --version` (Windows) ya `python3 --version` (macOS/Linux) chala kar confirm kariye.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 38. Setting Up VS Code and Jupyter Notebook
  38: {
    module: 'DS-M05',
    moduleTitle: 'Introduction to Programming and Python',
    topic: 'Setting Up VS Code and Jupyter Notebook',
    pageCount: 4,
    sampleDataNotice: 'Setup commands follow official Visual Studio Code and Project Jupyter documentation.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 7',
        pageTag: 'PAGE 1 OF 4',
        footerPage: '1 / 4',
        title: 'Setting Up VS Code and Jupyter Notebook',
        subtitle: 'THE TWO FAVORITE WORKSPACES OF DATA SCIENTISTS',
        intro: {
          icon: 'database',
          titleEn: 'VS Code vs Jupyter Notebook — Why Learn Both?',
          titleHi: 'VS Code Aur Jupyter Notebook — Dono Kyun Seekhein?',
          bodyEn:
            '**Visual Studio Code (VS Code)** is a lightweight, professional code editor used to write `.py` scripts and full projects. **Jupyter Notebook** (`.ipynb` files) is an interactive notebook where you run small code blocks (**Cells**) one by one and see tables, charts, and notes right below each cell. Data Scientists use **both** every week!',
          bodyHi:
            '**VS Code** ek professional code editor hai jahan `.py` scripts aur bade projects likhe jaate hain. **Jupyter Notebook** (`.ipynb`) ek interactive notebook hai jahan aap code ko chhote **Cells** mein chala kar turant output, charts aur notes dekh sakte hain. Data Scientists dono use karte hain!',
        },
        sections: [
          {
            pill: 'Setting Up Visual Studio Code in 4 Steps',
            blocks: [
              {
                type: 'flow',
                items: [
                  { title: '1. Install VS Code', bodyEn: 'Download from code.visualstudio.com and install.', bodyHi: 'code.visualstudio.com se VS Code download aur install karein.', tone: 'sky' },
                  { title: '2. Python Extension', bodyEn: 'Open Extensions (Ctrl+Shift+X / Cmd+Shift+X) and install Microsoft "Python".', bodyHi: 'Extensions mein jaakar Microsoft ka "Python" extension install karein.', tone: 'amber' },
                  { title: '3. Select Interpreter', bodyEn: 'Press Ctrl+Shift+P → "Python: Select Interpreter" → pick Python 3.', bodyHi: 'Ctrl+Shift+P → "Python: Select Interpreter" se apna Python 3 chunein.', tone: 'lavender' },
                  { title: '4. Open Folder', bodyEn: 'Use File → Open Folder to keep all your `.py` files neatly organized.', bodyHi: 'File → Open Folder se apna project folder open karein.', tone: 'green' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 7',
        pageTag: 'PAGE 2 OF 4',
        footerPage: '2 / 4',
        title: 'Installing & Launching Jupyter Notebook',
        subtitle: 'CODE CELLS + MARKDOWN NOTES ON ONE PAGE',
        sections: [
          {
            pill: 'Official Terminal Commands for Jupyter',
            blocks: [
              {
                type: 'sql',
                label: 'TERMINAL COMMANDS (WINDOWS / MACOS / LINUX)',
                code: `# Step 1: Install Jupyter Notebook using pip\npip install notebook\n\n# Step 2: Launch Jupyter Notebook in your browser\njupyter notebook`,
                captionEn: 'On macOS/Linux you may use `pip3 install notebook` or `python3 -m pip install notebook`. Running `jupyter notebook` opens a local browser tab at `http://localhost:8888`.',
                captionHi: 'macOS/Linux par `pip3 install notebook` use kar sakte hain. `jupyter notebook` chalate hi browser mein local tab khul jaata hai.',
              },
            ],
          },
          {
            pill: 'Inside a Jupyter Notebook: Code Cell vs Markdown Cell',
            blocks: [
              {
                type: 'compare',
                items: [
                  { title: 'Code Cell', bodyEn: 'Contains executable Python code. Press **Shift + Enter** to run the cell and display Output right underneath.', bodyHi: 'Isme Python code hota hai. **Shift + Enter** dabane par cell run hota hai aur neeche Output dikhta hai.', tone: 'sky' },
                  { title: 'Markdown Cell', bodyEn: 'Contains formatted headings, bullet notes, and explanations — great for documenting your analysis!', bodyHi: 'Isme headings, notes aur explanations likhe jaate hain — analysis document karne ke liye best!', tone: 'green' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 7',
        pageTag: 'PAGE 3 OF 4',
        footerPage: '3 / 4',
        title: 'When Should You Use VS Code vs Jupyter?',
        subtitle: 'CHOOSING THE RIGHT TOOL FOR THE JOB',
        sections: [
          {
            pill: 'Quick Decision Guide',
            blocks: [
              {
                type: 'table',
                headers: ['Task', 'Best Choice', 'Why?'],
                rows: [
                  ['Exploring a new dataset & plotting charts', 'Jupyter Notebook', 'Immediate visual feedback cell-by-cell with notes'],
                  ['Building reusable `.py` scripts, modules & apps', 'VS Code', 'Better file explorer, debugger, Git integration, and testing'],
                  ['Running notebooks inside one app', 'VS Code + Jupyter Extension', 'You can even open `.ipynb` notebooks directly inside VS Code!'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 7',
        pageTag: 'PAGE 4 OF 4',
        footerPage: '4 / 4',
        title: 'Key Takeaways',
        subtitle: 'YOUR PYTHON WORKSPACE IS READY',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'In **VS Code**, always install the official Microsoft **Python** extension and select the right **Python Interpreter**.', hi: '**VS Code** mein Microsoft **Python** extension install karein aur sahi **Python Interpreter** select karein.' },
                  { en: 'In **Jupyter Notebook**, use **Code Cells** for Python and **Markdown Cells** for explanations, and press **Shift + Enter** to run.', hi: '**Jupyter Notebook** mein Python ke liye **Code Cell** aur notes ke liye **Markdown Cell** use karein (**Shift + Enter** se run).' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 39. Understanding the Python Editor
  39: {
    module: 'DS-M05',
    moduleTitle: 'Introduction to Programming and Python',
    topic: 'Understanding the Python Editor',
    pageCount: 3,
    sampleDataNotice: 'All editor panels described correspond to standard Visual Studio Code layout.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 8',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Understanding the Python Editor',
        subtitle: 'A FRIENDLY TOUR OF EVERY PANEL INSIDE VS CODE',
        intro: {
          icon: 'table',
          titleEn: 'Stop Feeling Overwhelmed by Editor Buttons',
          titleHi: 'Editor Ke Buttons Dekh Kar Ghabraiye Mat!',
          bodyEn:
            'Opening **VS Code** for the first time can look like an airplane cockpit! Good news: you only need **5 simple panels** to write, run, and debug Python code comfortably.',
          bodyHi:
            'Pehli baar **VS Code** kholne par bahut saare buttons dekh kar confusion ho sakta hai. Good news: aapko sirf **5 simple parts** samajhne hain!',
        },
        sections: [
          {
            pill: 'The 5 Essential Areas of the Python Editor',
            blocks: [
              {
                type: 'table',
                headers: ['Editor Area', 'Where It Is', 'What It Does for You'],
                rows: [
                  ['1. File Explorer', 'Left Sidebar', 'Shows your project folder and `.py` / `.csv` files. Click any file to open it.'],
                  ['2. Code Editor', 'Center Main Area', 'Where you type Python code with **Line Numbers** and **Syntax Highlighting** colors.'],
                  ['3. Run Button (▶)', 'Top-Right Corner', 'Runs the currently open Python file with one click.'],
                  ['4. Integrated Terminal', 'Bottom Panel', 'Shows your program’s Console Output, error messages, and lets you type commands.'],
                  ['5. Status Bar', 'Very Bottom Strip', 'Shows the active **Python Interpreter** version (e.g., `Python 3.12`) and error counts.'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 8',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Why Syntax Highlighting & Line Numbers Are Your Best Friends',
        subtitle: 'COLORS HELP YOU SPOT MISTAKES BEFORE YOU EVEN RUN CODE',
        sections: [
          {
            pill: 'What Editor Colors Tell You',
            blocks: [
              {
                type: 'compare',
                items: [
                  { title: 'Syntax Highlighting', bodyEn: 'Keywords (`if`, `for`, `def`), strings (`"hello"`), numbers (`42`), and comments (`# note`) get different colors so typos stand out immediately.', bodyHi: 'Keywords, strings, numbers aur comments alag colors mein dikhte hain taaki galti turant dikh jaaye.', tone: 'sky' },
                  { title: 'Line Numbers & Squiggles', bodyEn: 'If Python reports `Error on line 4`, line numbers take you straight there! Red squiggly underlines warn you even before running.', bodyHi: 'Error message line number batata hai (jaise `line 4`), aur red underline run karne se pehle hi galti dikha deti hai.', tone: 'amber' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 8',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'NAVIGATING LIKE A CONFIDENT DEVELOPER',
        sections: [
          {
            pill: 'Helpful Everyday Shortcuts',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: '**Save before running:** Always press `Ctrl + S` (Windows/Linux) or `Cmd + S` (macOS) — a white dot on the file tab means unsaved changes!', hi: '**Run karne se pehle Save karein:** `Ctrl + S` / `Cmd + S` — file tab par white dot ka matlab hai file abhi save nahi hui!' },
                  { en: '**Toggle Terminal:** Press `` Ctrl + ` `` (backtick) to open or hide the Integrated Terminal anytime.', hi: '**Terminal kholna/band karna:** `` Ctrl + ` `` dabakar kabhi bhi Integrated Terminal khol sakte hain.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 40. Writing and Running Your First Python Program
  40: {
    module: 'DS-M05',
    moduleTitle: 'Introduction to Programming and Python',
    topic: 'Writing and Running Your First Python Program',
    pageCount: 3,
    sampleDataNotice: 'All Python code examples are executed and verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 9',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Writing and Running Your First Python Program',
        subtitle: 'FROM EMPTY FILE TO WORKING PYTHON OUTPUT IN 4 STEPS',
        intro: {
          icon: 'database',
          titleEn: 'Your First Real `.py` File!',
          titleHi: 'Aapki Pehli Real `.py` File!',
          bodyEn:
            'Every Python script is a plain text file whose name ends with **`.py`** (for example, `first_program.py`). The `.py` extension tells VS Code and your computer: *"This file contains Python code!"*',
          bodyHi:
            'Har Python script ek plain text file hoti hai jiska naam **`.py`** par khatam hota hai (jaise `first_program.py`). `.py` extension computer ko batata hai ki isme Python code likha hai.',
        },
        sections: [
          {
            pill: 'Step-by-Step: Create, Save, Run, Read Output',
            blocks: [
              {
                type: 'flow',
                items: [
                  { title: '1. Create File', bodyEn: 'Click New File in VS Code and name it `first_program.py`.', bodyHi: 'VS Code mein New File banakar naam dein `first_program.py`.', tone: 'sky' },
                  { title: '2. Type Code', bodyEn: 'Write `print("Hello, Data Science!")` inside the editor.', bodyHi: 'Editor mein `print("Hello, Data Science!")` type karein.', tone: 'amber' },
                  { title: '3. Save File', bodyEn: 'Press `Ctrl + S` / `Cmd + S` to save your code.', bodyHi: '`Ctrl + S` / `Cmd + S` dabakar file save karein.', tone: 'lavender' },
                  { title: '4. Run in Terminal', bodyEn: 'Click ▶ Run or type `python first_program.py` in Terminal.', bodyHi: '▶ Run button dabayein ya Terminal mein `python first_program.py` chalayein.', tone: 'green' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 9',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Complete First Program & Token Breakdown',
        subtitle: 'UNDERSTANDING EVERY SINGLE SYMBOL ON THE LINE',
        sections: [
          {
            pill: 'Complete Verified Python Program',
            blocks: [
              {
                type: 'sql',
                label: 'first_program.py',
                code: `print("Hello, Data Science!")\nprint("Welcome to Future IT Industry")`,
                output: `Hello, Data Science!\nWelcome to Future IT Industry`,
                captionEn: 'Line 1 prints the first greeting, then Python automatically moves to a new line and runs Line 2.',
                captionHi: 'Line 1 pehla message print karti hai, phir Python apne aap nayi line par jaakar Line 2 chalata hai.',
              },
            ],
          },
          {
            pill: 'Every Token Explained',
            blocks: [
              {
                type: 'table',
                headers: ['Token / Symbol', 'Name', 'Job It Performs'],
                rows: [
                  ['`print`', 'Function name', 'Tells Python to display something on the Console (must be all lowercase!).'],
                  ['`(` and `)`', 'Parentheses', 'Hold the input (Argument) you are giving to the `print` function.'],
                  ['`"..."`', 'Quotation marks', 'Mark the start and end of text (**String**). Single `\'...\'` also works!'],
                  ['`Hello, Data Science!`', 'String value', 'The exact text that appears in the Console Output (without the quotes).'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 9',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Common First-Time Mistakes',
        subtitle: 'SPOT THEM IMMEDIATELY AND FIX WITH CONFIDENCE',
        sections: [
          {
            pill: 'Intentional Error Demo: Capital "P" in Print',
            blocks: [
              {
                type: 'sql',
                label: 'error_demo.py (INTENTIONAL ERROR)',
                code: `Print("Hello")`,
                output: `NameError: name 'Print' is not defined`,
                isError: true,
                captionEn: 'Python is **case-sensitive**! `Print` with a capital `P` is NOT the same as `print`. Always write `print` in lowercase.',
                captionHi: 'Python **case-sensitive** hai! Capital `P` wala `Print` galat hai — hamesha small letters mein `print` likhein.',
              },
            ],
          },
        ],
      },
    ],
  },

  // 41. Understanding Program Output
  41: {
    module: 'DS-M05',
    moduleTitle: 'Introduction to Programming and Python',
    topic: 'Understanding Program Output',
    pageCount: 3,
    sampleDataNotice: 'All Python code outputs below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 10',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Understanding Program Output',
        subtitle: 'READING WHAT PYTHON TELLS YOU IN THE CONSOLE',
        intro: {
          icon: 'table',
          titleEn: 'What Is Console Output?',
          titleHi: 'Console Output Kya Hota Hai?',
          bodyEn:
            'When Python runs your program, it does calculations silently inside Memory. You only see a result on your screen when your program **outputs** it (usually with `print()`). Reading Output carefully is how you confirm your logic works correctly.',
          bodyHi:
            'Jab Python aapka program chalata hai, toh calculations Memory ke andar chupchaap hoti hain. Screen par result tabhi dikhta hai jab aap `print()` se **Output** dikhate hain.',
        },
        sections: [
          {
            pill: 'Text vs Calculation Output — Look Closely!',
            blocks: [
              {
                type: 'sql',
                label: 'output_compare.py',
                code: `print("10 + 5")\nprint(10 + 5)`,
                output: `10 + 5\n15`,
                captionEn: 'CRITICAL DIFFERENCE: Inside quotes `"10 + 5"`, Python treats it as literal text and prints `10 + 5`. Without quotes `10 + 5`, Python calculates the math and prints `15`!',
                captionHi: 'BADA ANTAR: Quotes ke andar `"10 + 5"` ko Python plain text maanta hai (`10 + 5`). Bina quotes ke `10 + 5` ka math calculate karke `15` print karta hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 10',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Mixing Labels and Calculated Values Clearly',
        subtitle: 'WRITING CLEAN, READABLE DATA SCIENCE OUTPUTS',
        sections: [
          {
            pill: 'Illustrative Store Summary Output',
            blocks: [
              {
                type: 'sql',
                label: 'store_summary.py',
                code: `print("Store:", "Pune Central")\nprint("Orders Today:", 42)\nprint("Total Revenue INR:", 42 * 300)`,
                output: `Store: Pune Central\nOrders Today: 42\nTotal Revenue INR: 12600`,
                captionEn: 'Putting a comma `,` between items inside `print()` automatically adds a clean space between the label and the number.',
                captionHi: '`print()` ke andar comma `,` lagane se label aur number ke beech apne aap ek clean space aa jaata hai.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M05 | TOPIC 10',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Module 5 Complete — Key Takeaways',
        subtitle: 'READY FOR MODULE 6: PYTHON SYNTAX & FUNDAMENTALS',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Quotes (`"10 + 5"`) output literal text; unquoted expressions (`10 + 5`) are evaluated first and then printed (`15`).', hi: 'Quotes (`"10 + 5"`) literal text print karte hain; bina quotes ke (`10 + 5`) pehle calculate hokar `15` print hota hai.' },
                  { en: 'Silent execution without `print()` does not mean your program failed — it simply did not display anything to the Console.', hi: 'Agar `print()` nahi likha toh Console khaali rahega — iska matlab error nahi hota.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
