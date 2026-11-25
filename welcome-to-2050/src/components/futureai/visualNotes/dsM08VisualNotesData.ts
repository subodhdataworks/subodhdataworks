import type { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

// ============================================================================
// MODULE 8 (DS-M08): Loops and Problem-Solving — Topics 66 to 75
// ============================================================================

export const DS_M08_VISUAL_NOTES: Record<number, StructuredVisualNoteTopic> = {
  // 66. Why Loops Are Needed
  66: {
    module: 'DS-M08',
    moduleTitle: 'Loops and Problem-Solving',
    topic: 'Why Loops Are Needed',
    pageCount: 3,
    sampleDataNotice: 'All Python loop examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 1',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Why Loops Are Needed',
        subtitle: 'STOP COPY-PASTING CODE — LET PYTHON REPEAT WORK AUTOMATICALLY',
        intro: {
          icon: 'database',
          titleEn: 'Imagine Scanning 10,000 Customer Bills One by One',
          titleHi: '10,000 Customer Bills Ko Ek-Ek Karke Check Karna!',
          bodyEn:
            'Without a **Loop**, printing or summing 1,000 sales records would require writing 1,000 separate lines of code! A **Loop** lets you write the instruction **once** and tell Python to **repeat it cleanly** for every item or until a condition is met.',
          bodyHi:
            'Bina **Loop** ke 1,000 sales records ko process karne ke liye 1,000 lines likhni padti! **Loop** aapko instruction **ek baar** likhne deta hai aur Python use har item ke liye **automatically repeat** karta hai.',
        },
        sections: [
          {
            pill: 'Manual Copy-Paste vs Clean Loop',
            blocks: [
              {
                type: 'compare',
                items: [
                  { title: 'Without a Loop (Messy)', bodyEn: 'Copy-pasting `print("Order processed")` 50 times — slow, ugly, and easy to break.', bodyHi: 'Ek hi line ko 50 baar copy-paste karna — slow aur galti se bhara.', tone: 'pink' },
                  { title: 'With a Loop (2 Lines!)', bodyEn: 'One `for` loop processes 5, 50, or 50,000 rows with the exact same 2 lines of code!', bodyHi: 'Sirf 2 line ka `for` loop 5, 50 ya 50,000 rows ko aasaani se process kar deta hai!', tone: 'green' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 1',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Python’s Two Loop Tools',
        subtitle: 'KNOWING WHICH LOOP TO PICK',
        sections: [
          {
            pill: '`for` Loop vs `while` Loop',
            blocks: [
              {
                type: 'compare',
                items: [
                  { title: 'The `for` Loop (Known Sequence)', bodyEn: 'Use when you want to step through every item in a list, string, file, or fixed `range()`.', bodyHi: 'Jab list, string, file ya fixed `range()` ke har item par chalna ho.', tone: 'sky' },
                  { title: 'The `while` Loop (Condition-Based)', bodyEn: 'Use when you want to keep repeating **as long as** a condition remains `True`.', bodyHi: 'Jab tak koi condition `True` rahe tab tak repeat karna ho.', tone: 'lavender' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 1',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'AUTOMATION STARTS WITH LOOPS',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: '**Loops** eliminate repetition and let Data Science scripts process datasets of any size.', hi: '**Loops** repetition khatam karte hain aur kisi bhi size ke dataset ko process kar sakte hain.' },
                  { en: 'Each single pass through a loop body is called one **Iteration**.', hi: 'Loop ke har ek round ko **Iteration** kehte hain.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 67. The for Loop
  67: {
    module: 'DS-M08',
    moduleTitle: 'Loops and Problem-Solving',
    topic: 'The for Loop',
    pageCount: 3,
    sampleDataNotice: 'All loop iteration traces and outputs below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 2',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'The for Loop',
        subtitle: 'VISITING EVERY ELEMENT ONE BY ONE — WITH FULL ITERATION TRACE',
        intro: {
          icon: 'database',
          titleEn: 'How a `for` Loop Works Step by Step',
          titleHi: '`for` Loop Step-by-Step Kaise Chalta Hai?',
          bodyEn:
            'A **`for` loop** takes each item from an **iterable** (like a list of daily sales) one at a time, assigns it to a loop variable, runs the indented body, and automatically stops after the last item.',
          bodyHi:
            '**`for` loop** kisi collection (jaise daily sales ki list) se ek-ek item uthata hai, loop variable mein rakhta hai, indented body chalata hai, aur aakhiri item ke baad khud ruk jaata hai.',
        },
        sections: [
          {
            pill: 'Complete Verified `for` Loop Example',
            blocks: [
              {
                type: 'sql',
                label: 'for_sales.py',
                code: `sales = [200, 350, 150]\ntotal = 0\nfor amount in sales:\n    total += amount\n    print(f"Added {amount} -> Running Total: {total}")\nprint("Final Total:", total)`,
                output: `Added 200 -> Running Total: 200\nAdded 350 -> Running Total: 550\nAdded 150 -> Running Total: 700\nFinal Total: 700`,
                captionEn: 'Notice `total = 0` starts BEFORE the loop, updates inside every iteration, and `Final Total: 700` prints ONCE after the loop finishes!',
                captionHi: '`total = 0` loop se PEHLE set hota hai, har iteration mein update hota hai, aur `Final Total: 700` loop ke BAAD ek baar print hota hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 2',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Iteration-by-Iteration Execution Table',
        subtitle: 'WATCHING MEMORY CHANGE AT EVERY SINGLE STEP',
        sections: [
          {
            pill: 'Exact Loop Execution Trace',
            blocks: [
              {
                type: 'table',
                headers: ['Iteration', 'Current `amount`', '`total` Before', 'Action (`total += amount`)', '`total` After'],
                rows: [
                  ['Start', '—', '`0`', 'Initialize `total = 0`', '`0`'],
                  ['Iteration 1', '`200`', '`0`', '`0 + 200`', '`200`'],
                  ['Iteration 2', '`350`', '`200`', '`200 + 350`', '`550`'],
                  ['Iteration 3', '`150`', '`550`', '`550 + 150`', '`700`'],
                  ['Terminate', 'No more items', '`700`', 'Exit loop → print Final Total', '`700`'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 2',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'THE ACCUMULATOR PATTERN',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Syntax: `for item in iterable:` followed by an indented 4-space body.', hi: 'Syntax: `for item in iterable:` aur uske neeche 4 spaces indented body.' },
                  { en: 'Initializing `total = 0` before the loop and updating `total += amount` inside is called the **Accumulator Pattern** — used everywhere in Data Science!', hi: 'Loop se pehle `total = 0` aur andar `total += amount` ko **Accumulator Pattern** kehte hain!' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 68. The while Loop
  68: {
    module: 'DS-M08',
    moduleTitle: 'Loops and Problem-Solving',
    topic: 'The while Loop',
    pageCount: 3,
    sampleDataNotice: 'All while loop traces and outputs below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 3',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'The while Loop',
        subtitle: 'REPEATING AS LONG AS A CONDITION REMAINS TRUE',
        intro: {
          icon: 'database',
          titleEn: 'How a `while` Loop Works',
          titleHi: '`while` Loop Kaise Kaam Karta Hai?',
          bodyEn:
            'A **`while` loop** checks a condition **before every iteration**. As long as the condition is `True`, Python runs the indented block. The moment the condition becomes `False`, the loop stops. You MUST update the condition variable inside the loop so it eventually ends!',
          bodyHi:
            '**`while` loop** har iteration se pehle condition check karta hai. Jab tak condition `True` hai, loop chalta rahega; `False` hote hi ruk jaayega. Loop ke andar variable ko update karna zaroori hai!',
        },
        sections: [
          {
            pill: 'Verified `while` Loop Countdown',
            blocks: [
              {
                type: 'sql',
                label: 'while_stock.py',
                code: `stock = 3\nwhile stock > 0:\n    print("Sold 1 item. Remaining before update:", stock)\n    stock -= 1\nprint("Out of stock! Final stock:", stock)`,
                output: `Sold 1 item. Remaining before update: 3\nSold 1 item. Remaining before update: 2\nSold 1 item. Remaining before update: 1\nOut of stock! Final stock: 0`,
                captionEn: 'Watch `stock -= 1` on Line 4: it reduces `stock` from `3 → 2 → 1 → 0`, making `stock > 0` turn `False` so the loop terminates cleanly!',
                captionHi: 'Line 4 (`stock -= 1`) `stock` ko `3 → 2 → 1 → 0` karta hai, jisse `stock > 0` False hokar loop safely ruk jaata hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 3',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Iteration-by-Iteration `while` Trace',
        subtitle: 'STARTING STATE → CONDITION CHECK → UPDATE → TERMINATION',
        sections: [
          {
            pill: 'Exact Trace Table',
            blocks: [
              {
                type: 'table',
                headers: ['Step', '`stock` Value', '`stock > 0`?', 'Action Taken', '`stock` After'],
                rows: [
                  ['Iteration 1', '`3`', '`True`', 'Print & subtract 1', '`2`'],
                  ['Iteration 2', '`2`', '`True`', 'Print & subtract 1', '`1`'],
                  ['Iteration 3', '`1`', '`True`', 'Print & subtract 1', '`0`'],
                  ['Termination', '`0`', '`False`', 'Exit loop → print Out of stock!', '`0`'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 3',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: '3 PARTS OF EVERY SAFE `while` LOOP',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Every safe `while` loop needs: **(1) Initial state**, **(2) Clear condition**, and **(3) State update** inside the loop.', hi: 'Har safe `while` loop mein 3 cheezein honi chahiye: **(1) Initial state**, **(2) Condition**, aur **(3) Update**.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 69. The range() Function
  69: {
    module: 'DS-M08',
    moduleTitle: 'Loops and Problem-Solving',
    topic: 'The range() Function',
    pageCount: 3,
    sampleDataNotice: 'All range() outputs below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 4',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'The range() Function',
        subtitle: 'GENERATING CLEAN NUMBER SEQUENCES FOR `for` LOOPS',
        intro: {
          icon: 'table',
          titleEn: 'Remember the Golden Rule: `stop` Is NEVER Included!',
          titleHi: 'Golden Rule Yaad Rakhiye: `stop` Number Kabhi Include Nahi Hota!',
          bodyEn:
            'The built-in **`range()`** function generates a sequence of integers cleanly without manually typing `[0, 1, 2, 3, 4]`. It accepts **1, 2, or 3 arguments**: `range(stop)`, `range(start, stop)`, or `range(start, stop, step)`.',
          bodyHi:
            '**`range()`** integers ki sequence generate karta hai: `range(stop)`, `range(start, stop)`, ya `range(start, stop, step)`. Yaad rakhein: **`stop` value hamesha exclude hoti hai!**',
        },
        sections: [
          {
            pill: 'All 3 Ways to Call `range()`',
            blocks: [
              {
                type: 'sql',
                label: 'range_demo.py',
                code: `print("range(5):", list(range(5)))\nprint("range(1, 6):", list(range(1, 6)))\nprint("range(0, 10, 2):", list(range(0, 10, 2)))\nprint("Countdown:", list(range(5, 0, -1)))`,
                output: `range(5): [0, 1, 2, 3, 4]\nrange(1, 6): [1, 2, 3, 4, 5]\nrange(0, 10, 2): [0, 2, 4, 6, 8]\nCountdown: [5, 4, 3, 2, 1]`,
                captionEn: 'Notice `range(1, 6)` starts at `1` and stops right before `6` (`1, 2, 3, 4, 5`). A negative step `-1` counts backward!',
                captionHi: '`range(1, 6)` `1` se shuru hokar `6` se pehle rukta hai (`1..5`). Negative step `-1` ulta count karta hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 4',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Using `range()` in a `for` Loop',
        subtitle: 'PRINTING DAY 1 TO DAY 4 SALES SLOTS',
        sections: [
          {
            pill: 'Verified Loop With `range()`',
            blocks: [
              {
                type: 'sql',
                label: 'range_loop.py',
                code: `for day in range(1, 5):\n    print(f"Day {day}: Report ready")`,
                output: `Day 1: Report ready\nDay 2: Report ready\nDay 3: Report ready\nDay 4: Report ready`,
                captionEn: '`range(1, 5)` runs 4 clean iterations for Day 1, 2, 3, and 4.',
                captionHi: '`range(1, 5)` Day 1 se Day 4 tak exact 4 iterations chalata hai.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 4',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'MASTERING START, STOP, STEP',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: '`range(n)` generates `0` through `n - 1` (exactly `n` numbers).', hi: '`range(n)` `0` se `n - 1` tak exact `n` numbers deta hai.' },
                  { en: '`range(start, stop, step)` includes `start` and excludes `stop`.', hi: '`range(start, stop, step)` mein `start` include aur `stop` exclude hota hai.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 70. Looping Through Strings
  70: {
    module: 'DS-M08',
    moduleTitle: 'Loops and Problem-Solving',
    topic: 'Looping Through Strings',
    pageCount: 3,
    sampleDataNotice: 'All string loop examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 5',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Looping Through Strings',
        subtitle: 'INSPECTING TEXT CHARACTER BY CHARACTER',
        intro: {
          icon: 'database',
          titleEn: 'A String Is a Sequence of Characters!',
          titleHi: 'String Characters Ki Ek Sequence Hoti Hai!',
          bodyEn:
            'Because a **String** is an ordered sequence of characters, a `for` loop can step through **one character at a time** — super handy for validating IDs, counting vowels, or checking digits inside phone numbers.',
          bodyHi:
            'Kyunki **String** characters ki ordered sequence hai, `for` loop ek-ek character par chal sakta hai — IDs validate karne ya digits count karne ke liye bahut useful!',
        },
        sections: [
          {
            pill: 'Data Cleaning Example: Counting Digits in an Order Code',
            blocks: [
              {
                type: 'sql',
                label: 'string_loop.py',
                code: `order_code = "ORD-2026"\ndigit_count = 0\nfor ch in order_code:\n    if ch.isdigit():\n        digit_count += 1\nprint("Code:", order_code)\nprint("Digits found:", digit_count)`,
                output: `Code: ORD-2026\nDigits found: 4`,
                captionEn: 'The loop checks `O, R, D, -, 2, 0, 2, 6` one by one and counts the 4 digits (`2, 0, 2, 6`)!',
                captionHi: 'Loop ek-ek character check karta hai aur 4 digits (`2, 0, 2, 6`) count kar leta hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 5',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Key Takeaways',
        subtitle: 'CHARACTER-LEVEL TEXT INSPECTION',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: '`for ch in text:` visits every character in `text`, including spaces and punctuation.', hi: '`for ch in text:` har character (spaces aur symbols samet) par chalta hai.' },
                  { en: 'Combine string loops with checks like `.isdigit()` or `.isalpha()` for quick data validation.', hi: 'Data validation ke liye `.isdigit()` ya `.isalpha()` ke saath string loops bahut kaam aate hain.' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 5',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Quick Practice Mental Check',
        subtitle: 'SPACES COUNT AS CHARACTERS TOO',
        sections: [
          {
            pill: 'Remember This Subtle Detail',
            blocks: [
              {
                type: 'note',
                tone: 'sky',
                bodyEn:
                  'In `"Hi 5"`, there are **4 characters**: `\'H\'`, `\'i\'`, `\' \'`, and `\'5\'`. The space between `Hi` and `5` is its own iteration!',
                bodyHi:
                  '`"Hi 5"` mein **4 characters** hote hain: `\'H\'`, `\'i\'`, `\' \'`, aur `\'5\'` — space bhi ek character hai!',
              },
            ],
          },
        ],
      },
    ],
  },

  // 71. Looping Through Lists
  71: {
    module: 'DS-M08',
    moduleTitle: 'Loops and Problem-Solving',
    topic: 'Looping Through Lists',
    pageCount: 3,
    sampleDataNotice: 'All list loop examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 6',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Looping Through Lists',
        subtitle: 'FILTERING, COUNTING, AND TRANSFORMING REAL DATASETS',
        intro: {
          icon: 'table',
          titleEn: 'The Bread and Butter of Data Processing',
          titleHi: 'Data Processing Ka Sabse Common Pattern',
          bodyEn:
            'Lists hold collections of numbers, names, or prices. Looping through a list lets you **filter** high-value orders, **count** records meeting a rule, or **build a new cleaned list**.',
          bodyHi:
            'List par loop chala kar aap high-value orders **filter**, records **count**, ya ek **nayi cleaned list** bana sakte hain.',
        },
        sections: [
          {
            pill: 'Filtering High-Value Orders (>= 1000 INR)',
            blocks: [
              {
                type: 'sql',
                label: 'filter_orders.py',
                code: `orders = [450, 1200, 800, 2500, 1000]\nhigh_value = []\nfor amt in orders:\n    if amt >= 1000:\n        high_value.append(amt)\nprint("High-value orders:", high_value)\nprint("Count:", len(high_value))`,
                output: `High-value orders: [1200, 2500, 1000]\nCount: 3`,
                captionEn: 'Each order is tested against `amt >= 1000`; matching orders are appended to `high_value` (`[1200, 2500, 1000]`).',
                captionHi: 'Har order `amt >= 1000` par check hota hai aur matching values `high_value` list mein add ho jaati hain.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 6',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Using `enumerate()` When You Need Both Position & Value',
        subtitle: 'CLEANER THAN MANUAL INDEX COUNTERS',
        sections: [
          {
            pill: 'Verified `enumerate()` Example',
            blocks: [
              {
                type: 'sql',
                label: 'enumerate_demo.py',
                code: `cities = ["Pune", "Delhi", "Kochi"]\nfor idx, city in enumerate(cities, start=1):\n    print(f"{idx}. {city}")`,
                output: `1. Pune\n2. Delhi\n3. Kochi`,
                captionEn: '`enumerate(cities, start=1)` gives both the rank number (`1, 2, 3`) and the city name cleanly in one loop!',
                captionHi: '`enumerate(cities, start=1)` ek hi loop mein serial number aur city name dono de deta hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 6',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'CORE LIST LOOP PATTERNS',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Combine `for item in my_list:` with `if` to **filter**, **count**, or **sum** matching records.', hi: '`for` + `if` se list mein filtering, counting aur summing aasaani se hoti hai.' },
                  { en: 'Never add or remove items from the same list while looping over it — build a **new result list** instead!', hi: 'Loop chalate waqt usi list ko modify mat karein — hamesha ek **nayi result list** banayein!' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 72. Nested Loops
  72: {
    module: 'DS-M08',
    moduleTitle: 'Loops and Problem-Solving',
    topic: 'Nested Loops',
    pageCount: 3,
    sampleDataNotice: 'All nested loop traces and outputs below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 7',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Nested Loops',
        subtitle: 'A LOOP INSIDE ANOTHER LOOP — OUTER VS INNER ITERATIONS',
        intro: {
          icon: 'database',
          titleEn: 'Think of a Clock: Hours (Outer) and Minutes (Inner)',
          titleHi: 'Ghadi Sochiye: Hours (Outer Loop) Aur Minutes (Inner Loop)',
          bodyEn:
            'In a **Nested Loop**, for **every single step** of the **Outer Loop**, the **Inner Loop** completes its **entire cycle** from start to finish. Used for tables (rows × columns), stores × days, and product pairs.',
          bodyHi:
            '**Nested Loop** mein **Outer Loop** ke har **ek step** ke liye **Inner Loop** apna **poora cycle** khatam karta hai — jaise har Store ke liye saare Days check karna.',
        },
        sections: [
          {
            pill: 'Verified Store × Day Schedule Example',
            blocks: [
              {
                type: 'sql',
                label: 'nested_stores.py',
                code: `stores = ["Store-A", "Store-B"]\ndays = ["Mon", "Tue"]\nfor store in stores:\n    for day in days:\n        print(f"{store} -> {day}")`,
                output: `Store-A -> Mon\nStore-A -> Tue\nStore-B -> Mon\nStore-B -> Tue`,
                captionEn: '2 outer stores × 2 inner days = **4 total iterations**! Notice `Store-A` finishes both `Mon` and `Tue` before the outer loop moves to `Store-B`.',
                captionHi: '2 stores × 2 days = **4 iterations**! Pehle `Store-A` ke dono days complete hue, phir `Store-B` chala.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 7',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Outer vs Inner Iteration Table',
        subtitle: 'EXACT EXECUTION ORDER',
        sections: [
          {
            pill: 'Step-by-Step Trace',
            blocks: [
              {
                type: 'table',
                headers: ['Step', 'Outer (`store`)', 'Inner (`day`)', 'Console Output'],
                rows: [
                  ['1', '`Store-A`', '`Mon`', '`Store-A -> Mon`'],
                  ['2', '`Store-A`', '`Tue`', '`Store-A -> Tue`'],
                  ['3', '`Store-B`', '`Mon`', '`Store-B -> Mon`'],
                  ['4', '`Store-B`', '`Tue`', '`Store-B -> Tue`'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 7',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'MULTIPLYING ITERATIONS',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Total inner executions = `(outer count) × (inner count)`.', hi: 'Total inner executions = `(outer count) × (inner count)`.' },
                  { en: 'Use clear, distinct variable names (`store` and `day`, or `row` and `col`) — never reuse the same variable name for both loops!', hi: 'Outer aur inner loops ke liye hamesha alag variable names rakhein!' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 73. break, continue and pass
  73: {
    module: 'DS-M08',
    moduleTitle: 'Loops and Problem-Solving',
    topic: 'break, continue and pass',
    pageCount: 3,
    sampleDataNotice: 'All loop control outputs below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 8',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'break, continue and pass',
        subtitle: 'EXACT CONTROL OVER LOOP EXECUTION — WITHOUT MISCONCEPTIONS',
        intro: {
          icon: 'database',
          titleEn: 'Three Keywords With Three Very Different Jobs',
          titleHi: 'Teen Keywords — Teeno Ka Bilkul Alag Kaam!',
          bodyEn:
            'Sometimes you want to **stop a loop early** (`break`), **skip just the current item** (`continue`), or leave a **valid empty placeholder** while designing code (`pass`). **Important technical fact:** `pass` performs **NO operation** and does **NOT** skip the rest of the current iteration!',
          bodyHi:
            'Loop ko **turant rokne** ke liye `break`, sirf **current item skip** karne ke liye `continue`, aur **empty placeholder** ke liye `pass` use hota hai. **Zaroori baat:** `pass` kuch nahi karta aur wo iteration skip **NAHI** karta!',
        },
        sections: [
          {
            pill: 'Side-by-Side Comparison',
            blocks: [
              {
                type: 'compare',
                items: [
                  { title: '`break` (Emergency Stop)', bodyEn: 'Immediately **exits the entire loop** — remaining items are never visited.', bodyHi: 'Poore loop ko **turant band** karke bahar nikal jaata hai.', tone: 'pink' },
                  { title: '`continue` (Skip This Item)', bodyEn: '**Skips the rest of the current iteration** and jumps straight to the next item.', bodyHi: '**Sirf current item ka baaki code skip** karke agle item par chala jaata hai.', tone: 'amber' },
                  { title: '`pass` (Do Nothing)', bodyEn: 'A **no-op placeholder** so Python does not raise an `IndentationError`. Execution continues normally to the next line!', bodyHi: 'Ek **empty placeholder** jo kuch nahi karta — code uske aage normally chalta rehta hai!', tone: 'sky' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 8',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Verified Code Comparing `continue`, `break`, and `pass`',
        subtitle: 'WATCH THE EXACT OUTPUT DIFFERENCE',
        sections: [
          {
            pill: 'Filtering Invalid Sales & Stopping on Sentinel',
            blocks: [
              {
                type: 'sql',
                label: 'loop_controls.py',
                code: `values = [100, -50, 200, 0, 300]\nfor v in values:\n    if v < 0:\n        continue   # Skip invalid negative value\n    if v == 0:\n        break      # Stop completely on 0\n    print("Valid:", v)`,
                output: `Valid: 100\nValid: 200`,
                captionEn: '`100` prints → `-50` hits `continue` (skipped!) → `200` prints → `0` hits `break` (loop ends, so `300` is never reached!).',
                captionHi: '`100` print hua → `-50` `continue` se skip hua → `200` print hua → `0` par `break` ne loop rok diya (`300` tak gaya hi nahi)!',
              },
              {
                type: 'sql',
                label: 'pass_demo.py',
                code: `for n in [1, 2]:\n    if n == 1:\n        pass  # Does nothing; does NOT skip print(n)!\n    print("Visited:", n)`,
                output: `Visited: 1\nVisited: 2`,
                captionEn: 'Proof: `pass` did NOT skip `print("Visited:", 1)` — both `1` and `2` printed!',
                captionHi: 'Proof: `pass` ne `1` ko skip NAHI kiya — `1` aur `2` dono print hue!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 8',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'PRECISE LOOP CONTROL',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: '`break` = exit loop immediately; `continue` = skip to next iteration; `pass` = do-nothing placeholder.', hi: '`break` = loop band; `continue` = next item par jao; `pass` = kuch mat karo (placeholder).' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 74. Avoiding Infinite Loops
  74: {
    module: 'DS-M08',
    moduleTitle: 'Loops and Problem-Solving',
    topic: 'Avoiding Infinite Loops',
    pageCount: 3,
    sampleDataNotice: 'Infinite loop example is clearly labeled as a conceptual bug and not executed unboundedly.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 9',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Avoiding Infinite Loops',
        subtitle: 'WHY A `while` LOOP SOMETIMES NEVER STOPS — AND HOW TO PREVENT IT',
        intro: {
          icon: 'database',
          titleEn: 'What Is an Infinite Loop?',
          titleHi: 'Infinite Loop Kya Hota Hai?',
          bodyEn:
            'An **Infinite Loop** happens when a `while` loop’s condition **never becomes `False`** — usually because you forgot to update the counter variable or updated it in the wrong direction. Your Terminal keeps printing forever until you press **`Ctrl + C`** to stop it!',
          bodyHi:
            '**Infinite Loop** tab hota hai jab `while` loop ki condition **kabhi `False` nahi hoti** — aksar counter update karna bhool jaane ki wajah se. Terminal mein ise rokne ke liye **`Ctrl + C`** dabate hain!',
        },
        sections: [
          {
            pill: 'Buggy Infinite Loop vs Safe Bounded Loop',
            blocks: [
              {
                type: 'sql',
                label: 'infinite_bug.py (DO NOT RUN — CONCEPTUAL BUG)',
                code: `# BUG: count stays 1 forever because count += 1 is missing!\ncount = 1\nwhile count <= 3:\n    print("Count:", count)`,
                output: `Count: 1\nCount: 1\nCount: 1 ... (runs forever until Ctrl+C!)`,
                isError: true,
                captionEn: 'Because `count` never changes, `1 <= 3` stays `True` forever!',
                captionHi: 'Kyunki `count` kabhi badhta nahi, `1 <= 3` hamesha `True` rehta hai!',
              },
              {
                type: 'sql',
                label: 'safe_loop.py',
                code: `count = 1\nwhile count <= 3:\n    print("Count:", count)\n    count += 1  # Moves count closer to stopping condition!`,
                output: `Count: 1\nCount: 2\nCount: 3`,
                captionEn: 'Adding `count += 1` guarantees `count` reaches `4`, making `4 <= 3` `False`!',
                captionHi: '`count += 1` lagane se loop exact 3 baar chalkar safely band ho jaata hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 9',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: '3-Point Safety Checklist Before Running Any `while` Loop',
        subtitle: 'STOP INFINITE LOOPS BEFORE THEY START',
        sections: [
          {
            pill: 'Pre-Run Check',
            blocks: [
              {
                type: 'bullets',
                tone: 'amber',
                items: [
                  { en: 'Does a variable in the `while` condition **change inside the loop**?', hi: 'Kya condition wala variable **loop ke andar change** ho raha hai?' },
                  { en: 'Does it move **toward** making the condition `False` (e.g., `+= 1` for `<= 10`, `-= 1` for `> 0`)?', hi: 'Kya wo condition ko `False` banane ki sahi disha mein badh raha hai?' },
                  { en: 'If a loop ever gets stuck in Terminal, press **`Ctrl + C`** (`KeyboardInterrupt`) to stop it safely.', hi: 'Agar kabhi loop atak jaaye, toh Terminal mein **`Ctrl + C`** dabakar safely rok dein.' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 9',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'SAFE LOOPING HABITS',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Prefer `for` loops whenever you already have a sequence or known count — `for` loops naturally terminate!', hi: 'Jahan possible ho `for` loop use karein — wo apne aap safely terminate hota hai!' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 75. Solving Problems with Loops
  75: {
    module: 'DS-M08',
    moduleTitle: 'Loops and Problem-Solving',
    topic: 'Solving Problems with Loops',
    pageCount: 3,
    sampleDataNotice: 'Illustrative daily sales dataset verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 10',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Solving Problems with Loops',
        subtitle: 'COMPUTING TOTAL, AVERAGE, MAX, AND VALID COUNT IN ONE PASS',
        intro: {
          icon: 'table',
          titleEn: 'Putting All Module 8 Skills Together',
          titleHi: 'Module 8 Ki Saari Skills Ek Real Problem Mein',
          bodyEn:
            'Let us solve a real Data Science task: given a messy list of daily store sales (including an invalid negative entry), compute the **Valid Count**, **Total Sales**, **Average Sales**, and **Highest Day Sales** in one clean loop!',
          bodyHi:
            'Ek real Data Science problem solve karte hain: messy daily sales list (jisme ek invalid negative value bhi hai) se **Valid Count**, **Total**, **Average**, aur **Maximum** ek clean loop mein nikaalna!',
        },
        sections: [
          {
            pill: 'Complete Verified Sales Summary Script',
            blocks: [
              {
                type: 'sql',
                label: 'sales_analyzer.py',
                code: `daily_sales = [1200, -50, 1800, 1500, 2500]\ntotal = 0\nvalid_count = 0\nhighest = 0\n\nfor sale in daily_sales:\n    if sale < 0:\n        continue  # Skip invalid negative entry\n    total += sale\n    valid_count += 1\n    if sale > highest:\n        highest = sale\n\naverage = total / valid_count\nprint(f"Valid Days: {valid_count}")\nprint(f"Total Sales: INR {total}")\nprint(f"Average Sale: INR {average}")\nprint(f"Best Day: INR {highest}")`,
                output: `Valid Days: 4\nTotal Sales: INR 7000\nAverage Sale: INR 1750.0\nBest Day: INR 2500`,
                captionEn: 'Verified Math: Valid sales are `1200 + 1800 + 1500 + 2500 = 7000`, `7000 / 4 = 1750.0`, and max is `2500`!',
                captionHi: 'Verified Math: Valid sales `1200 + 1800 + 1500 + 2500 = 7000`, Average `7000 / 4 = 1750.0`, aur Best Day `2500`!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 10',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Why Skipping `-50` Before Counting Was Critical',
        subtitle: 'CLEAN LOOP LOGIC = ACCURATE DATA SCIENCE',
        sections: [
          {
            pill: 'What Would Have Gone Wrong Without `continue`?',
            blocks: [
              {
                type: 'note',
                tone: 'amber',
                bodyEn:
                  'Without `if sale < 0: continue`, the invalid `-50` would have lowered Total to `6950` AND raised `valid_count` to `5`, giving a wrong Average of `1390.0` instead of `1750.0`!',
                bodyHi:
                  'Agar `-50` skip na hota, toh Total `6950` aur Count `5` hokar galat Average `1390.0` aata!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M08 | TOPIC 10',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Module 8 Complete — Key Takeaways',
        subtitle: 'READY FOR MODULE 9: PYTHON DATA STRUCTURES',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Loops + `if` + `continue` let you clean, count, sum, average, and find max values in one clean pass.', hi: 'Loops + `if` + `continue` se ek hi pass mein cleaning, sum, average aur max nikaal sakte hain.' },
                  { en: 'Next in Module 9, we master **Lists, Tuples, Sets, Dictionaries, and Strings**!', hi: 'Ab Module 9 mein hum **Lists, Tuples, Sets, Dictionaries aur Strings** ko detail mein seekhenge!' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
