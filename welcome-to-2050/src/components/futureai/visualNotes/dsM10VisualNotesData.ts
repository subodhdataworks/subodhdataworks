import type { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

// ============================================================================
// MODULE 10 (DS-M10): Functions, Modules and Error Handling — Topics 88 to 101
// ============================================================================

export const DS_M10_VISUAL_NOTES: Record<number, StructuredVisualNoteTopic> = {
  // 88. Why Functions Are Useful
  88: {
    module: 'DS-M10',
    moduleTitle: 'Functions, Modules and Error Handling',
    topic: 'Why Functions Are Useful',
    pageCount: 2,
    sampleDataNotice: 'All Python examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 1',
        pageTag: 'PAGE 1 OF 2',
        footerPage: '1 / 2',
        title: 'Why Functions Are Useful',
        subtitle: 'WRITE LOGIC ONCE, REUSE IT ANYWHERE (DRY PRINCIPLE)',
        intro: {
          icon: 'database',
          titleEn: 'Think of a Coffee Machine Button',
          titleHi: 'Coffee Machine Ke Ek Button Ki Tarah!',
          bodyEn:
            'Instead of manually grinding beans, boiling water, and pouring milk every single time, you press **one button** (`make_coffee()`). A **Function** is a named, reusable block of code that follows the **DRY principle** (*"Don’t Repeat Yourself"*).',
          bodyHi:
            'Har baar wahi 5 lines dubara likhne ke bajay aap ek **Function** banate hain aur jab zaroorat ho sirf uska naam call karte hain — ise **DRY (Don’t Repeat Yourself)** principle kehte hain!',
        },
        sections: [
          {
            pill: '3 Big Benefits of Functions',
            blocks: [
              {
                type: 'compare',
                items: [
                  { title: '1. Zero Repetition', bodyEn: 'Write GST or cleaning logic once and reuse it on 10 different datasets.', bodyHi: 'Cleaning ya GST logic ek baar likho aur 10 jagah reuse karo.', tone: 'sky' },
                  { title: '2. Fix Once, Fixed Everywhere', bodyEn: 'If tax rate changes from 18% to 12%, update ONE function instead of hunting 20 copy-pasted lines!', bodyHi: 'Rule badalne par sirf ek function edit karna padta hai.', tone: 'green' },
                  { title: '3. Easy to Read & Test', bodyEn: 'Breaks a 200-line script into clear, testable pieces like `clean_city()` and `calc_total()`.', bodyHi: 'Bade program ko chhote, readable aur testable pieces mein baant deta hai.', tone: 'lavender' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 1',
        pageTag: 'PAGE 2 OF 2',
        footerPage: '2 / 2',
        title: 'Key Takeaways',
        subtitle: 'MODULAR THINKING',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Whenever you copy-paste the same logic twice, turn it into a **Function**!', hi: 'Jab bhi same logic 2 baar likhni pade, use **Function** bana dein!' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 89. Defining and Calling Functions
  89: {
    module: 'DS-M10',
    moduleTitle: 'Functions, Modules and Error Handling',
    topic: 'Defining and Calling Functions',
    pageCount: 3,
    sampleDataNotice: 'All Python function outputs below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 2',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Defining and Calling Functions',
        subtitle: 'USING `def` TO CREATE A FUNCTION AND `()` TO RUN IT',
        intro: {
          icon: 'database',
          titleEn: 'Defining a Function Does NOT Run It Yet!',
          titleHi: 'Function Define Karne Se Wo Apne Aap Run Nahi Hota!',
          bodyEn:
            'Writing `def greet():` only **teaches** Python what the function does (like writing down a recipe). The code inside only executes when you **call** it using `greet()`!',
          bodyHi:
            '`def greet():` likhne se Python sirf recipe yaad rakhta hai — andar ka code tabhi chalta hai jab aap `greet()` **call** karte hain!',
        },
        sections: [
          {
            pill: 'Step-by-Step Function Execution Flow',
            blocks: [
              {
                type: 'flow',
                items: [
                  { title: '1. Define (`def`)', bodyEn: 'Python registers the function name and body in memory.', bodyHi: 'Python function ko memory mein save karta hai.', tone: 'sky' },
                  { title: '2. Call (`fn()`)', bodyEn: 'Execution jumps into the function body.', bodyHi: 'Call milte hi execution function body ke andar jump karta hai.', tone: 'amber' },
                  { title: '3. Run Body', bodyEn: 'Indented lines execute top to bottom.', bodyHi: 'Indented lines top-to-bottom chalti hain.', tone: 'lavender' },
                  { title: '4. Jump Back', bodyEn: 'Returns right to the line after the call!', bodyHi: 'Kaam khatam hote hi caller ke next line par wapas aata hai!', tone: 'green' },
                ],
              },
              {
                type: 'sql',
                label: 'define_call.py',
                code: `def show_banner():\n    print("=== Daily Sales Report ===")\n\nshow_banner()\nprint("Processing orders...")\nshow_banner()`,
                output: `=== Daily Sales Report ===\nProcessing orders...\n=== Daily Sales Report ===`,
                captionEn: 'We defined `show_banner` once and called it twice cleanly!',
                captionHi: 'Humne `show_banner` ek baar define kiya aur do baar call kiya!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 2',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Token Breakdown of `def show_banner():`',
        subtitle: 'EVERY SYMBOL MATTERS',
        sections: [
          {
            pill: 'Syntax Map',
            blocks: [
              {
                type: 'table',
                headers: ['Token', 'Meaning'],
                rows: [
                  ['`def`', 'Keyword meaning "define a function".'],
                  ['`show_banner`', 'Function name (uses `snake_case`, same rules as variables).'],
                  ['`()`', 'Parentheses hold optional inputs (Parameters).'],
                  ['`:` + 4 spaces', 'Colon starts the indented function body.'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 2',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'DEFINE FIRST, CALL AFTER',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Always define a function **above** the line where you call it.', hi: 'Function ko call karne se **pehle (upar)** define karein.' },
                  { en: 'Forgetting `()` when calling (`show_banner` instead of `show_banner()`) does NOT run the function!', hi: 'Call karte waqt `()` lagana mat bhooliye (`show_banner()`).' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 90. Parameters and Arguments
  90: {
    module: 'DS-M10',
    moduleTitle: 'Functions, Modules and Error Handling',
    topic: 'Parameters and Arguments',
    pageCount: 2,
    sampleDataNotice: 'All Python examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 3',
        pageTag: 'PAGE 1 OF 2',
        footerPage: '1 / 2',
        title: 'Parameters and Arguments',
        subtitle: 'PASSING DYNAMIC INPUT DATA INTO A FUNCTION',
        intro: {
          icon: 'database',
          titleEn: 'Parameter (Placeholder) vs Argument (Actual Value)',
          titleHi: 'Parameter (Placeholder) Vs Argument (Asli Value)',
          bodyEn:
            'In `def greet(name):`, `name` is the **Parameter** (the placeholder variable listed in the definition). When you call `greet("Asha")`, `"Asha"` is the **Argument** (the real value passed into the function)!',
          bodyHi:
            '`def greet(name):` mein `name` **Parameter** (placeholder) hai, aur `greet("Asha")` mein `"Asha"` **Argument** (asli value) hai!',
        },
        sections: [
          {
            pill: 'Verified Multi-Parameter Example',
            blocks: [
              {
                type: 'sql',
                label: 'params_args.py',
                code: `def print_bill(customer, price, qty):\n    total = price * qty\n    print(f"{customer}: {qty} x INR {price} = INR {total}")\n\nprint_bill("Asha", 300, 2)\nprint_bill("Ravi", 150, 4)`,
                output: `Asha: 2 x INR 300 = INR 600\nRavi: 4 x INR 150 = INR 600`,
                captionEn: 'Positional arguments match parameters left to right: `"Asha" → customer`, `300 → price`, `2 → qty`.',
                captionHi: 'Positional arguments left-to-right match hote hain: `"Asha" → customer`, `300 → price`, `2 → qty`.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 3',
        pageTag: 'PAGE 2 OF 2',
        footerPage: '2 / 2',
        title: 'Key Takeaways',
        subtitle: 'CLEAN INPUTS INTO FUNCTIONS',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: '**Parameters** live in `def fn(a, b):`; **Arguments** are the real values passed in `fn(10, 20)`.', hi: '**Parameters** `def` mein hote hain; **Arguments** function call mein pass kiye jaate hain.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 91. Return Values
  91: {
    module: 'DS-M10',
    moduleTitle: 'Functions, Modules and Error Handling',
    topic: 'Return Values',
    pageCount: 3,
    sampleDataNotice: 'All return vs print outputs below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 4',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Return Values',
        subtitle: 'THE CRITICAL DIFFERENCE BETWEEN `print()` AND `return`',
        intro: {
          icon: 'database',
          titleEn: 'Why `print()` Alone Cannot Hand Back a Result!',
          titleHi: '`print()` Aur `return` Ka Sabse Bada Antar',
          bodyEn:
            '`print()` only shows text on the screen for human eyes — it hands back **`None`** to your program! **`return`** sends an actual value **back to the caller** so you can store it in a variable, add tax to it, or pass it to another function!',
          bodyHi:
            '`print()` sirf screen par dikhata hai aur program ko **`None`** deta hai. **`return`** asli value **caller ko wapas bhejta hai** taaki aap use variable mein save karke aage calculate kar sakein!',
        },
        sections: [
          {
            pill: 'Verified `return` Example (Including Returning Multiple Values!)',
            blocks: [
              {
                type: 'sql',
                label: 'return_demo.py',
                code: `def calc_stats(nums):\n    total = sum(nums)\n    avg = total / len(nums)\n    return total, avg\n\nsum_val, avg_val = calc_stats([100, 200, 300])\nprint("Sum:", sum_val, "| Avg:", avg_val)\nprint("With 10% bonus:", sum_val * 1.10)`,
                output: `Sum: 600 | Avg: 200.0\nWith 10% bonus: 660.0`,
                captionEn: 'Because `calc_stats` uses **`return`**, we captured `sum_val` (`600`) and immediately computed `sum_val * 1.10` (`660.0`)!',
                captionHi: 'Kyunki `calc_stats` ne **`return`** kiya, humne `sum_val` (`600`) ko save karke aage `660.0` calculate kar liya!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 4',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: '`print()` vs `return` Side by Side',
        subtitle: 'NEVER CONFUSE SCREEN DISPLAY WITH DATA OUTPUT',
        sections: [
          {
            pill: 'Direct Comparison',
            blocks: [
              {
                type: 'compare',
                items: [
                  { title: 'Using `print()` Only', bodyEn: 'Shows output on Console, returns **`None`** — trying `result + 50` crashes with `TypeError`!', bodyHi: 'Console par dikhata hai par return **`None`** karta hai — aage math karne par `TypeError` aata hai!', tone: 'pink' },
                  { title: 'Using `return`', bodyEn: 'Immediately exits the function and hands the value back to the caller for reuse.', bodyHi: 'Function se turant bahar aakar value caller ko reuse ke liye de deta hai.', tone: 'green' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 4',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'DATA SCIENCE FUNCTIONS ALWAYS RETURN VALUES',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'In Data Science, write functions that **`return`** cleaned data or computed numbers — let the caller decide whether to `print()` them.', hi: 'Data Science functions ko hamesha value **`return`** karni chahiye.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 92. Default and Keyword Arguments
  92: {
    module: 'DS-M10',
    moduleTitle: 'Functions, Modules and Error Handling',
    topic: 'Default and Keyword Arguments',
    pageCount: 2,
    sampleDataNotice: 'All Python examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 5',
        pageTag: 'PAGE 1 OF 2',
        footerPage: '1 / 2',
        title: 'Default and Keyword Arguments',
        subtitle: 'MAKING FUNCTIONS FLEXIBLE AND SELF-DOCUMENTING',
        intro: {
          icon: 'database',
          titleEn: 'Optional Defaults + Named Arguments',
          titleHi: 'Optional Default Values Aur Named Arguments',
          bodyEn:
            'A **Default Argument** (`tax_rate=0.18`) gives a sensible fallback when the caller omits it. A **Keyword Argument** (`calc_total(tax_rate=0.05, amount=1000)`) passes values by **name**, making calls super clear in any order!',
          bodyHi:
            '**Default Argument** (`tax_rate=0.18`) tab kaam aata hai jab caller value na de. **Keyword Argument** naam ke saath value pass karta hai jisse order ki tension khatam hoti hai!',
        },
        sections: [
          {
            pill: 'Verified Default & Keyword Arguments Demo',
            blocks: [
              {
                type: 'sql',
                label: 'default_kwargs.py',
                code: `def calc_total(amount, tax_rate=0.18):\n    return amount * (1 + tax_rate)\n\nprint("Default 18% GST:", round(calc_total(1000), 2))\nprint("5% Food GST:    ", round(calc_total(tax_rate=0.05, amount=1000), 2))`,
                output: `Default 18% GST: 1180.0\n5% Food GST:     1050.0`,
                captionEn: 'Rule: In `def`, parameters WITH defaults (`tax_rate=0.18`) must always come **after** parameters without defaults (`amount`).',
                captionHi: 'Rule: `def` mein default parameters hamesha normal parameters ke **baad** aate hain.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 5',
        pageTag: 'PAGE 2 OF 2',
        footerPage: '2 / 2',
        title: 'Key Takeaways',
        subtitle: 'CLEAN FUNCTION CALLS',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Default values make common calls short; keyword arguments make multi-parameter calls crystal clear.', hi: 'Defaults common calls ko chhota aur keyword arguments calls ko crystal clear banate hain.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 93. Variable Scope
  93: {
    module: 'DS-M10',
    moduleTitle: 'Functions, Modules and Error Handling',
    topic: 'Variable Scope',
    pageCount: 2,
    sampleDataNotice: 'All scope examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 6',
        pageTag: 'PAGE 1 OF 2',
        footerPage: '1 / 2',
        title: 'Variable Scope',
        subtitle: 'LOCAL VARIABLES (INSIDE A FUNCTION) VS GLOBAL VARIABLES (OUTSIDE)',
        intro: {
          icon: 'table',
          titleEn: 'Where Can a Variable Be Seen?',
          titleHi: 'Kaun Sa Variable Kahan Dikhai Deta Hai?',
          bodyEn:
            '**Scope** defines where a variable exists. A **Local Variable** created inside a function lives **only inside that function** and disappears when the function finishes. A **Global Variable** created at the top level can be read anywhere — though modifying globals inside functions is discouraged; prefer **parameters and `return`**!',
          bodyHi:
            'Function ke andar bana **Local Variable** sirf usi function ke andar zinda rehta hai. Bahar bana **Global Variable** har jagah read ho sakta hai — best practice hai values ko **parameters aur `return`** se pass karna!',
        },
        sections: [
          {
            pill: 'Verified Local vs Global Scope Demo',
            blocks: [
              {
                type: 'sql',
                label: 'scope_demo.py',
                code: `store_name = "Pune Hub"  # Global variable\n\ndef apply_discount(price):\n    discount = 50        # Local variable (only exists here!)\n    print("Store inside fn:", store_name)\n    return price - discount\n\nfinal = apply_discount(500)\nprint("Final Price:", final)`,
                output: `Store inside fn: Pune Hub\nFinal Price: 450`,
                captionEn: 'Trying to `print(discount)` outside `apply_discount` raises `NameError: name \'discount\' is not defined` because `discount` is strictly **local**!',
                captionHi: 'Function ke bahar `print(discount)` karne par `NameError` aayega kyunki `discount` sirf **local** hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 6',
        pageTag: 'PAGE 2 OF 2',
        footerPage: '2 / 2',
        title: 'Key Takeaways',
        subtitle: 'AVOID GLOBAL SIDE EFFECTS',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Keep functions self-contained: take data in via **parameters** and send results out via **`return`** instead of mutating global variables.', hi: 'Functions ko self-contained rakhein: **parameters** se input lein aur **`return`** se output dein.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 94. Lambda Functions
  94: {
    module: 'DS-M10',
    moduleTitle: 'Functions, Modules and Error Handling',
    topic: 'Lambda Functions',
    pageCount: 2,
    sampleDataNotice: 'All lambda examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 7',
        pageTag: 'PAGE 1 OF 2',
        footerPage: '1 / 2',
        title: 'Lambda Functions',
        subtitle: 'TINY ONE-LINE ANONYMOUS FUNCTIONS FOR QUICK SORTING & TRANSFORMS',
        intro: {
          icon: 'database',
          titleEn: 'When a Full `def` Feels Like Overkill',
          titleHi: 'Chhote One-Line Kaam Ke Liye `lambda`',
          bodyEn:
            'A **Lambda Function** is a tiny one-line function written as **`lambda arguments: expression`** — it automatically returns the expression result without needing `return`. Its #1 real-world Data Science use is sorting lists of dictionaries by a specific key!',
          bodyHi:
            '**Lambda Function** ek chhota one-line function hota hai: **`lambda args: expression`**. Data Science mein iska sabse zyada use dictionaries ya tuples ko kisi specific key par sort karne mein hota hai!',
        },
        sections: [
          {
            pill: 'Sorting Products by Price Using `lambda`',
            blocks: [
              {
                type: 'sql',
                label: 'lambda_sort.py',
                code: `products = [\n    {"name": "Bottle", "price": 450},\n    {"name": "Pen", "price": 50},\n    {"name": "Bag", "price": 1200},\n]\nsorted_items = sorted(products, key=lambda p: p["price"])\nfor item in sorted_items:\n    print(item["name"], "-> INR", item["price"])`,
                output: `Pen -> INR 50\nBottle -> INR 450\nBag -> INR 1200`,
                captionEn: '`key=lambda p: p["price"]` tells `sorted()` to compare each product dictionary by its `"price"` value!',
                captionHi: '`key=lambda p: p["price"]` `sorted()` ko batata hai ki har product ko uski `"price"` par sort karo!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 7',
        pageTag: 'PAGE 2 OF 2',
        footerPage: '2 / 2',
        title: 'Key Takeaways',
        subtitle: 'USE LAMBDA ONLY FOR SIMPLE ONE-LINERS',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Use `lambda` for short throwaway expressions (like `sorted(..., key=lambda ...)`). For anything multi-step or reused, always use a named `def` function!', hi: 'Sirf chhote one-liners ke liye `lambda` use karein; reusable logic ke liye hamesha `def` likhein!' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 95. Built-in Functions
  95: {
    module: 'DS-M10',
    moduleTitle: 'Functions, Modules and Error Handling',
    topic: 'Built-in Functions',
    pageCount: 2,
    sampleDataNotice: 'All built-in function outputs below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 8',
        pageTag: 'PAGE 1 OF 2',
        footerPage: '1 / 2',
        title: 'Built-in Functions',
        subtitle: 'READY-MADE PYTHON POWER TOOLS AVAILABLE WITHOUT ANY IMPORT',
        intro: {
          icon: 'table',
          titleEn: 'Do Not Reinvent the Wheel!',
          titleHi: 'Jo Pehle Se Bana Hai Use Smartly Use Karein!',
          bodyEn:
            'Python ships with dozens of super-fast **Built-in Functions** ready on Line 1: **`len()`**, **`sum()`**, **`min()`**, **`max()`**, **`sorted()`**, **`round()`**, **`abs()`**, **`enumerate()`**, and **`zip()`**.',
          bodyHi:
            'Python mein **`len()`**, **`sum()`**, **`min()`**, **`max()`**, **`sorted()`**, **`round()`**, **`abs()`**, aur **`zip()`** pehle se built-in aate hain!',
        },
        sections: [
          {
            pill: 'Verified Built-in Data Science Toolkit',
            blocks: [
              {
                type: 'sql',
                label: 'builtins_demo.py',
                code: `sales = [450, 1200, 800, 950]\nprint("Count:", len(sales))\nprint("Total:", sum(sales))\nprint("Min / Max:", min(sales), "/", max(sales))\nprint("Average:", round(sum(sales) / len(sales), 1))\nprint("Absolute diff:", abs(800 - 1200))\n\ndays = ["Mon", "Tue"]\nrev = [500, 700]\nprint("Zipped:", list(zip(days, rev)))`,
                output: `Count: 4\nTotal: 3400\nMin / Max: 450 / 1200\nAverage: 850.0\nAbsolute diff: 400\nZipped: [('Mon', 500), ('Tue', 700)]`,
                captionEn: 'Never name a variable `sum`, `list`, `min`, or `max` — doing so hides Python’s built-in function!',
                captionHi: 'Kabhi apne variable ka naam `sum`, `list`, `min`, ya `max` mat rakhein — warna built-in function chhup jaata hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 8',
        pageTag: 'PAGE 2 OF 2',
        footerPage: '2 / 2',
        title: 'Key Takeaways',
        subtitle: 'FAST, READABLE ONE-LINERS',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: '`len`, `sum`, `min`, `max`, `round`, `sorted`, `abs`, `zip`, and `enumerate` cover 80% of basic numeric summaries.', hi: '`len`, `sum`, `min`, `max`, `round`, `sorted`, `abs`, `zip` aur `enumerate` roz ke summaries ko super fast banate hain.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 96. Importing Python Modules
  96: {
    module: 'DS-M10',
    moduleTitle: 'Functions, Modules and Error Handling',
    topic: 'Importing Python Modules',
    pageCount: 2,
    sampleDataNotice: 'All standard library module outputs below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 9',
        pageTag: 'PAGE 1 OF 2',
        footerPage: '1 / 2',
        title: 'Importing Python Modules',
        subtitle: 'UNLOCKING PYTHON’S BUILT-IN STANDARD LIBRARY WITH `import`',
        intro: {
          icon: 'database',
          titleEn: 'What Is a Module?',
          titleHi: 'Module Kya Hota Hai?',
          bodyEn:
            'A **Module** is simply a `.py` file containing ready-made functions and tools. Python comes with a rich **Standard Library** (`math`, `statistics`, `datetime`, `csv`, `json`, `random`) — just **`import`** what you need!',
          bodyHi:
            '**Module** ek `.py` file hoti hai jisme ready-made functions rakhe hote hain. Python ki **Standard Library** (`math`, `statistics`, `datetime`, `csv`) ko aap seedhe **`import`** kar sakte hain!',
        },
        sections: [
          {
            pill: 'Verified `import` and `from ... import ...` Examples',
            blocks: [
              {
                type: 'sql',
                label: 'modules_demo.py',
                code: `import math\nimport statistics as stats\nfrom datetime import date\n\nscores = [72, 85, 90, 85, 98]\nprint("Square root of 144:", math.sqrt(144))\nprint("Mean:", stats.mean(scores), "| Median:", stats.median(scores))\nprint("Fixed date:", date(2026, 11, 24))`,
                output: `Square root of 144: 12.0\nMean: 86 | Median: 85\nFixed date: 2026-11-24`,
                captionEn: 'Notice 3 clean styles: `import math`, alias `import statistics as stats`, and targeted `from datetime import date`. Avoid `from math import *`!',
                captionHi: '3 clean styles: `import math`, alias `import statistics as stats`, aur `from datetime import date`.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 9',
        pageTag: 'PAGE 2 OF 2',
        footerPage: '2 / 2',
        title: 'Key Takeaways',
        subtitle: 'CLEAN IMPORTS AT THE TOP OF EVERY FILE',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Place all `import` statements neatly at the very top of your Python file.', hi: 'Saare `import` statements hamesha file ke bilkul top par likhein.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 97. Working with Python Packages
  97: {
    module: 'DS-M10',
    moduleTitle: 'Functions, Modules and Error Handling',
    topic: 'Working with Python Packages',
    pageCount: 2,
    sampleDataNotice: 'Package management commands follow official Python Packaging Authority (PyPA) pip documentation.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 10',
        pageTag: 'PAGE 1 OF 2',
        footerPage: '1 / 2',
        title: 'Working with Python Packages',
        subtitle: 'MODULE VS PACKAGE VS THIRD-PARTY LIBRARIES VIA `pip`',
        intro: {
          icon: 'database',
          titleEn: 'How Modules, Packages, and `pip` Fit Together',
          titleHi: 'Module, Package Aur `pip` Kaise Jude Hain?',
          bodyEn:
            'A **Module** is one `.py` file; a **Package** is a **folder of organized modules** working together. Beyond Python’s built-in Standard Library, developers install community **Third-Party Packages** from **PyPI** (Python Package Index) using **`pip`**.',
          bodyHi:
            '**Module** ek `.py` file hai; **Package** kayi modules ka folder hai. Community ke **Third-Party Packages** (jaise `requests`, `numpy`, `pandas`) ko **`pip`** se install karte hain!',
        },
        sections: [
          {
            pill: 'Essential `pip` Terminal Commands',
            blocks: [
              {
                type: 'sql',
                label: 'TERMINAL COMMANDS (pip)',
                code: `# Install a third-party package\npip install requests\n\n# Check installed packages in your environment\npip list\n\n# Save project dependencies for teammates\npip freeze > requirements.txt`,
                captionEn: 'In Module 11 we will pair `pip` with **Virtual Environments (`venv`)** so each project keeps its own clean package versions!',
                captionHi: 'Module 11 mein hum `pip` ko **Virtual Environment (`venv`)** ke saath use karna seekhenge!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 10',
        pageTag: 'PAGE 2 OF 2',
        footerPage: '2 / 2',
        title: 'Key Takeaways',
        subtitle: 'STANDARD LIBRARY VS THIRD-PARTY PACKAGES',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: '**Standard Library** modules (`math`, `csv`, `json`) need NO installation; **Third-Party Packages** are installed via `pip install <name>`.', hi: '**Standard Library** bina install ke chalti hai; **Third-Party Packages** `pip install` se aate hain.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 98. Exceptions and Error Messages
  98: {
    module: 'DS-M10',
    moduleTitle: 'Functions, Modules and Error Handling',
    topic: 'Exceptions and Error Messages',
    pageCount: 2,
    sampleDataNotice: 'All exception names and causes below match official Python 3 built-in exceptions.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 11',
        pageTag: 'PAGE 1 OF 2',
        footerPage: '1 / 2',
        title: 'Exceptions and Error Messages',
        subtitle: 'READING PYTHON TRACEBACKS LIKE A DETECTIVE',
        intro: {
          icon: 'table',
          titleEn: 'What Is an Exception?',
          titleHi: 'Exception Kya Hoti Hai?',
          bodyEn:
            'An **Exception** is an error that happens **while a syntactically valid program is running** — such as dividing by zero, converting `"abc"` to an integer, or opening a missing CSV file. Always read the **very last line of the Traceback first**!',
          bodyHi:
            '**Exception** wo runtime error hai jo sahi syntax wale program ke chalte waqt aati hai (jaise zero se divide karna ya missing file kholna). Traceback ki **aakhiri line** sabse pehle padhein!',
        },
        sections: [
          {
            pill: 'The 7 Most Common Python Exceptions',
            blocks: [
              {
                type: 'table',
                headers: ['Exception Type', 'Example That Triggers It', 'Plain-English Cause'],
                rows: [
                  ['`ZeroDivisionError`', '`100 / 0`', 'Divided a number by zero (e.g., empty list average!)'],
                  ['`ValueError`', '`int("N/A")`', 'Right type (`str`), but invalid value for conversion'],
                  ['`TypeError`', '`"500" + 50`', 'Incompatible types used together'],
                  ['`NameError`', '`print(totl)`', 'Variable or function name is misspelled or not defined'],
                  ['`IndexError`', '`[10, 20][5]`', 'List/string index is out of range'],
                  ['`KeyError`', '`{"a": 1}["b"]`', 'Dictionary key does not exist'],
                  ['`FileNotFoundError`', '`open("missing.csv")`', 'File path does not exist on disk'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 11',
        pageTag: 'PAGE 2 OF 2',
        footerPage: '2 / 2',
        title: 'Key Takeaways',
        subtitle: 'EVERY EXCEPTION TELLS YOU EXACTLY WHAT TO FIX',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Read the **Exception name**, **reason message**, and **line number** — never panic at red text!', hi: '**Exception name**, **message** aur **line number** padhein — red text aapka helper hai!' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 99. try, except, else and finally
  99: {
    module: 'DS-M10',
    moduleTitle: 'Functions, Modules and Error Handling',
    topic: 'try, except, else and finally',
    pageCount: 3,
    sampleDataNotice: 'All exception handling outputs below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 12',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'try, except, else and finally',
        subtitle: 'HANDLING BAD DATA GRACEFULLY WITHOUT CRASHING YOUR PIPELINE',
        intro: {
          icon: 'database',
          titleEn: 'Catch Specific Errors — Never Silently Hide Everything!',
          titleHi: 'Specific Errors Pakdein — Sab Chupchaap Chhupayein Nahi!',
          bodyEn:
            'When processing 10,000 CSV rows, one bad cell like `"N/A"` should NOT crash the entire script! **`try / except / else / finally`** lets you catch **specific expected exceptions** (like `ValueError` or `ZeroDivisionError`), log them cleanly, and keep running safely.',
          bodyHi:
            '10,000 CSV rows mein ek `"N/A"` cell ki wajah se poora program crash nahi hona chahiye! **`try / except / else / finally`** specific errors ko safely handle karta hai.',
        },
        sections: [
          {
            pill: 'Execution Path of All 4 Clauses',
            blocks: [
              {
                type: 'flow',
                items: [
                  { title: '1. `try:`', bodyEn: 'Run the risky code (e.g., `int(raw)` or division).', bodyHi: 'Risky code yahan chalta hai.', tone: 'sky' },
                  { title: '2. `except ValueError:`', bodyEn: 'Runs ONLY if that specific error occurred.', bodyHi: 'Sirf tab chalta hai jab wahi specific error aaye.', tone: 'pink' },
                  { title: '3. `else:`', bodyEn: 'Runs ONLY if `try:` succeeded with ZERO errors.', bodyHi: 'Sirf tab chalta hai jab `try:` bina error pass ho.', tone: 'green' },
                  { title: '4. `finally:`', bodyEn: 'ALWAYS runs (error or not) — ideal for cleanup!', bodyHi: 'HAMESHA chalta hai — cleanup/closing ke liye best!', tone: 'lavender' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 12',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Verified Safe Average Calculator',
        subtitle: 'CATCHING `ValueError` AND `ZeroDivisionError` SPECIFICALLY',
        sections: [
          {
            pill: 'Complete Verified Example',
            blocks: [
              {
                type: 'sql',
                label: 'safe_parse.py',
                code: `def parse_price(raw_text):\n    try:\n        value = float(raw_text)\n    except ValueError:\n        print(f"Warning: Skipping invalid price '{raw_text}'")\n        return None\n    else:\n        return value\n    finally:\n        print("Checked:", raw_text)\n\nprint("Result 1:", parse_price("499.5"))\nprint("Result 2:", parse_price("N/A"))`,
                output: `Checked: 499.5\nResult 1: 499.5\nWarning: Skipping invalid price 'N/A'\nChecked: N/A\nResult 2: None`,
                captionEn: 'Notice `finally:` ran on BOTH calls — even though `return` happened inside `else:` and `except:`!',
                captionHi: '`finally:` dono calls mein chala — chahe `try` pass hua ho ya `ValueError` aaya ho!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 12',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'GOOD ERROR HANDLING PRACTICE',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'amber',
                items: [
                  { en: 'Always catch **specific exceptions** (`except ValueError:`) — NEVER write a bare `except: pass` that silently hides real bugs!', hi: 'Hamesha **specific exceptions** pakdein — kabhi `except: pass` likh kar bugs ko chhupayein nahi!' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 100. File Reading and Writing
  100: {
    module: 'DS-M10',
    moduleTitle: 'Functions, Modules and Error Handling',
    topic: 'File Reading and Writing',
    pageCount: 3,
    sampleDataNotice: 'File I/O example below uses Python’s standard `with open(...)` context manager and `csv` module.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 13',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'File Reading and Writing',
        subtitle: 'SAVING AND LOADING REAL DATA FILES SAFELY WITH `with open()`',
        intro: {
          icon: 'table',
          titleEn: 'Why `with open(...)` Is the Gold Standard',
          titleHi: '`with open(...)` Hamesha Kyun Use Karte Hain?',
          bodyEn:
            'Variables disappear when a Python program ends, whereas **files** stay saved on disk! Using **`with open(filename, mode, encoding="utf-8") as f:`** automatically closes the file safely when the block finishes — even if an error occurs.',
          bodyHi:
            'Program band hone par variables mit jaate hain, par **files** disk par safe rehti hain! **`with open(...) as f:`** kaam khatam hote hi file ko automatically safely close kar deta hai.',
        },
        sections: [
          {
            pill: 'The 3 Essential File Modes',
            blocks: [
              {
                type: 'table',
                headers: ['Mode', 'Meaning', 'Caution'],
                rows: [
                  ['`"r"`', 'Read existing file', 'Raises `FileNotFoundError` if file does not exist'],
                  ['`"w"`', 'Write (creates new OR overwrites!)', 'Careful: `"w"` erases previous content of an existing file!'],
                  ['`"a"`', 'Append to end of file', 'Safely adds new lines without deleting old ones'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 13',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Reading & Writing a Sample CSV in Core Python',
        subtitle: 'USING BUILT-IN `csv.DictReader` (NO EXTERNAL LIBRARY NEEDED)',
        sections: [
          {
            pill: 'Verified In-Memory CSV Reading Example (`io.StringIO` + `csv.DictReader`)',
            blocks: [
              {
                type: 'sql',
                label: 'read_csv_demo.py',
                code: `import csv\nimport io\n\nsample_csv = "city,sales\\nPune,1200\\nDelhi,1800\\n"\nreader = csv.DictReader(io.StringIO(sample_csv))\ntotal = 0\nfor row in reader:\n    total += int(row["sales"])\n    print(row["city"], "->", row["sales"])\nprint("Total CSV Sales:", total)`,
                output: `Pune -> 1200\nDelhi -> 1800\nTotal CSV Sales: 3000`,
                captionEn: 'With a real file on disk, simply replace `io.StringIO(sample_csv)` with `with open("sales.csv", "r", encoding="utf-8") as f: reader = csv.DictReader(f)`!',
                captionHi: 'Disk ki real file ke liye bas `with open("sales.csv", "r", encoding="utf-8") as f:` ke andar `csv.DictReader(f)` use kariye!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 13',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'SAFE FILE HANDLING',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Always use `with open(..., encoding="utf-8") as f:` so files close automatically.', hi: 'Hamesha `with open(..., encoding="utf-8") as f:` use karein.' },
                  { en: 'Use Python’s built-in `csv.DictReader` to read CSV rows directly as clean dictionaries!', hi: 'CSV ko clean dictionaries ke roop mein padhne ke liye built-in `csv.DictReader` best hai!' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 101. Writing Reusable Python Code
  101: {
    module: 'DS-M10',
    moduleTitle: 'Functions, Modules and Error Handling',
    topic: 'Writing Reusable Python Code',
    pageCount: 2,
    sampleDataNotice: 'All reusable helper functions below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 14',
        pageTag: 'PAGE 1 OF 2',
        footerPage: '1 / 2',
        title: 'Writing Reusable Python Code',
        subtitle: 'SMALL SINGLE-PURPOSE FUNCTIONS + CLEAR DOCSTRINGS',
        intro: {
          icon: 'database',
          titleEn: 'What Makes Code "Reusable" in Real Data Teams?',
          titleHi: 'Real Data Teams Mein "Reusable Code" Kaisa Hota Hai?',
          bodyEn:
            'Reusable code has **one clear job per function**, **descriptive names**, **no hardcoded file paths or magic numbers**, safe **edge-case handling**, and a short **Docstring (`"""..."""`)** explaining what goes in and what comes out.',
          bodyHi:
            'Reusable code mein har function ka **ek clear kaam** hota hai, **descriptive naam**, **edge-case safety**, aur ek short **Docstring (`"""..."""`)** hoti hai!',
        },
        sections: [
          {
            pill: 'Verified Reusable Data Cleaning Helper',
            blocks: [
              {
                type: 'sql',
                label: 'reusable_helpers.py',
                code: `def clean_city_name(raw_city):\n    """Trim spaces and standardize city capitalization."""\n    if not raw_city or not raw_city.strip():\n        return "Unknown"\n    return raw_city.strip().title()\n\nprint(clean_city_name("  pune  "))\nprint(clean_city_name("   "))`,
                output: `Pune\nUnknown`,
                captionEn: 'Clean, documented, handles blank strings safely, and reusable across every future project!',
                captionHi: 'Clean, documented, blank strings ko safely handle karta hai, aur har naye project mein reuse ho sakta hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M10 | TOPIC 14',
        pageTag: 'PAGE 2 OF 2',
        footerPage: '2 / 2',
        title: 'Module 10 Complete — Key Takeaways',
        subtitle: 'READY FOR MODULE 11: OOP, DEV TOOLS & MINI PROJECT',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Keep functions small, add a 1-line Docstring, handle edge cases, and return clean values.', hi: 'Functions chhote rakhein, Docstring likhein, edge cases handle karein, aur clean values return karein.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
