import type { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

// ============================================================================
// MODULE 6 (DS-M06): Python Syntax and Fundamentals — Topics 42 to 53
// ============================================================================

export const DS_M06_VISUAL_NOTES: Record<number, StructuredVisualNoteTopic> = {
  // 42. Python Syntax and Indentation
  42: {
    module: 'DS-M06',
    moduleTitle: 'Python Syntax and Fundamentals',
    topic: 'Python Syntax and Indentation',
    pageCount: 3,
    sampleDataNotice: 'All Python examples and intentional error outputs are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 1',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Python Syntax and Indentation',
        subtitle: 'THE GRAMMAR RULES AND SPACING THAT PYTHON REQUIRES',
        intro: {
          icon: 'database',
          titleEn: 'What Is Syntax & Why Does Indentation Matter?',
          titleHi: 'Syntax Aur Indentation Kya Hota Hai?',
          bodyEn:
            '**Syntax** is the set of grammar rules of a programming language. In Python, **Indentation** (the spaces at the beginning of a line — usually **4 spaces**) is NOT just for looks: it tells Python **which lines belong inside a code block** (like inside an `if` statement or a loop).',
          bodyHi:
            '**Syntax** programming language ki grammar hoti hai. Python mein **Indentation** (line ke shuru mein lagaye gaye **4 spaces**) sirf sundarta ke liye nahi hote — yeh Python ko batate hain ki **kaun si lines ek block ke andar hain**.',
        },
        sections: [
          {
            pill: 'Correct Indentation vs IndentationError',
            blocks: [
              {
                type: 'sql',
                label: 'indent_ok.py',
                code: `sales = 1200\nif sales > 1000:\n    print("Target achieved!")\n    print("Great work!")`,
                output: `Target achieved!\nGreat work!`,
                captionEn: 'Notice the colon `:` at the end of line 2, followed by **4 leading spaces** on lines 3 and 4. Both indented lines belong inside the `if` block.',
                captionHi: 'Line 2 ke end mein colon `:` hai, aur lines 3–4 mein shuru mein **4 spaces** hain — dono lines `if` block ke andar hain.',
              },
              {
                type: 'sql',
                label: 'indent_error.py (INTENTIONAL ERROR)',
                code: `sales = 1200\nif sales > 1000:\nprint("Target achieved!")`,
                output: `IndentationError: expected an indented block after 'if' statement on line 2`,
                isError: true,
                captionEn: 'Missing the 4 spaces after a colon `:` immediately triggers an `IndentationError`!',
                captionHi: 'Colon `:` ke baad spaces na dene par Python turant `IndentationError` deta hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 1',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Unexpected Indent Rule',
        subtitle: 'DO NOT ADD RANDOM SPACES AT THE START OF TOP-LEVEL LINES',
        sections: [
          {
            pill: 'Golden Indentation Rules',
            blocks: [
              {
                type: 'bullets',
                tone: 'amber',
                items: [
                  { en: 'Normal top-level lines start at **column 0** (zero leading spaces).', hi: 'Normal top-level lines bilkul **left edge (0 spaces)** se shuru hoti hain.' },
                  { en: 'After any line ending with a colon `:`, indent the inner block consistently with **4 spaces** (standard PEP 8 style).', hi: 'Colon `:` ke baad andar ki lines ko **4 spaces** se indent karein.' },
                  { en: 'Never mix Tabs and Spaces in the same file — VS Code converts Tab to 4 spaces automatically.', hi: 'Tabs aur Spaces ko mix mat karein — VS Code apne aap Tab ko 4 spaces bana deta hai.' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 1',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'CLEAN STRUCTURE = BUG-FREE PYTHON',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Python uses **4-space Indentation** after `:` to group code blocks cleanly.', hi: 'Python `:` ke baad code blocks group karne ke liye **4-space Indentation** use karta hai.' },
                  { en: 'Case sensitivity (`print` ≠ `Print`) and matching indentation are the top two syntax rules to remember.', hi: 'Case sensitivity (`print` ≠ `Print`) aur proper indentation sabse zaroori syntax rules hain.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 43. Comments and Readable Code
  43: {
    module: 'DS-M06',
    moduleTitle: 'Python Syntax and Fundamentals',
    topic: 'Comments and Readable Code',
    pageCount: 3,
    sampleDataNotice: 'All Python examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 2',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Comments and Readable Code',
        subtitle: 'WRITING HUMAN NOTES THAT PYTHON SAFELY IGNORES',
        intro: {
          icon: 'table',
          titleEn: 'What Is a Comment?',
          titleHi: 'Comment Kya Hota Hai?',
          bodyEn:
            'A **Comment** is a note written inside your code for **humans** (teammates or your future self). Any text starting with the hash symbol **`#`** is completely ignored by Python when the program runs.',
          bodyHi:
            '**Comment** code ke andar insaano ke liye likha gaya note hota hai. Hash symbol **`#`** ke baad jo bhi likha hota hai, Python use run karte waqt completely ignore kar deta hai.',
        },
        sections: [
          {
            pill: 'Single-Line & Inline Comments in Action',
            blocks: [
              {
                type: 'sql',
                label: 'gst_calc.py',
                code: `# Calculate final invoice price with 18% GST\nbase_price = 1000\ngst_rate = 0.18  # Standard GST rate for electronics\nfinal_price = base_price + (base_price * gst_rate)\nprint("Final Price:", final_price)`,
                output: `Final Price: 1180.0`,
                captionEn: 'Notice Line 1 (full-line comment) and Line 3 (inline comment). Neither appears in the Console Output!',
                captionHi: 'Line 1 (full-line comment) aur Line 3 (inline comment) sirf humans ke liye hain — Console Output mein nahi aate!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 2',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Good Comments vs Noisy Comments',
        subtitle: 'EXPLAIN "WHY", NOT OBVIOUS "WHAT"',
        sections: [
          {
            pill: 'Write Helpful Data Science Comments',
            blocks: [
              {
                type: 'compare',
                items: [
                  { title: 'Weak Comment (Repeats Code)', bodyEn: '`x = 18  # set x to 18` — Adds clutter without explaining business meaning.', bodyHi: '`x = 18  # x ko 18 set karo` — Yeh bekaar hai kyunki code khud dikh raha hai.', tone: 'pink' },
                  { title: 'Strong Comment (Explains Why)', bodyEn: '`min_age = 18  # Legal minimum age for opening an individual account` — Clear business context!', bodyHi: '`min_age = 18  # Account kholne ki legal minimum age` — Clear business reason!', tone: 'green' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 2',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'CODE IS READ MORE OFTEN THAN IT IS WRITTEN',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Use **`#`** to add comments; Python skips everything after `#` on that line.', hi: 'Comments ke liye **`#`** lagayein; Python us line par `#` ke baad sab skip kar deta hai.' },
                  { en: 'You can also temporarily comment out a line (`# print(debug)`) while testing your script.', hi: 'Testing ke waqt kisi line ko temporarily band karne ke liye bhi `#` laga sakte hain.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 44. The print() Function
  44: {
    module: 'DS-M06',
    moduleTitle: 'Python Syntax and Fundamentals',
    topic: 'The print() Function',
    pageCount: 3,
    sampleDataNotice: 'All print() outputs below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 3',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'The print() Function',
        subtitle: 'DISPLAYING TEXT, NUMBERS, AND FORMATTED RESULTS CLEANLY',
        intro: {
          icon: 'database',
          titleEn: 'More Than Just Simple Text',
          titleHi: 'Sirf Simple Text Se Kahin Zyada!',
          bodyEn:
            'The built-in **`print()`** function displays one or more values to the Console. By learning **multiple arguments**, **`sep`** (separator), **`end`** (line ending), and **f-strings** (`f"..."`), you can create crisp, professional Data Science reports right in your Terminal.',
          bodyHi:
            'Built-in **`print()`** function Console par ek ya zyada values dikhata hai. **Multiple arguments**, **`sep`**, **`end`**, aur **f-strings** (`f"..."`) seekh kar aap clean reports print kar sakte hain.',
        },
        sections: [
          {
            pill: 'Multiple Values, sep, and end',
            blocks: [
              {
                type: 'sql',
                label: 'print_options.py',
                code: `print("2026", "11", "24", sep="-")\nprint("Loading", end="...")\nprint("Done!")`,
                output: `2026-11-24\nLoading...Done!`,
                captionEn: '`sep="-"` replaces the default space with a dash `-`. `end="..."` replaces the default new line so `"Done!"` prints on the same line!',
                captionHi: '`sep="-"` space ke bajay dash `-` lagata hai. `end="..."` new line ke bajay `...` lagata hai jisse `"Done!"` usi line par aata hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 3',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Modern Formatting With f-strings',
        subtitle: 'THE CLEANEST WAY TO MIX TEXT AND VARIABLES IN PYTHON',
        sections: [
          {
            pill: 'Verified f-string Example',
            blocks: [
              {
                type: 'sql',
                label: 'fstring_demo.py',
                code: `city = "Jaipur"\norders = 125\nprint(f"City: {city} | Total Orders: {orders}")`,
                output: `City: Jaipur | Total Orders: 125`,
                captionEn: 'Put `f` right before the opening quote, then wrap any variable inside curly braces `{city}` — Python substitutes its value automatically!',
                captionHi: 'Opening quote se pehle `f` lagayein aur variable ko `{city}` curly braces mein rakhein — Python uski value khud bhar deta hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 3',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'MASTERING CONSOLE OUTPUT',
        sections: [
          {
            pill: 'Token Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: '`print(a, b)` separates items with a space by default; customize with `sep="..."`.', hi: '`print(a, b)` by default space deta hai; `sep="..."` se separator badal sakte hain.' },
                  { en: '`print()` ends with a newline by default; customize with `end="..."`.', hi: '`print()` by default nayi line par jaata hai; `end="..."` se ending badal sakte hain.' },
                  { en: '**f-strings** (`f"Total: {val}"`) are the cleanest way to format Data Science summaries.', hi: '**f-strings** (`f"Total: {val}"`) clean summaries print karne ka best tareeka hai.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 45. Variables and Storing Information
  45: {
    module: 'DS-M06',
    moduleTitle: 'Python Syntax and Fundamentals',
    topic: 'Variables and Storing Information',
    pageCount: 4,
    sampleDataNotice: 'Visual Memory tables below are conceptual models showing how Python names reference values in memory.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 4',
        pageTag: 'PAGE 1 OF 4',
        footerPage: '1 / 4',
        title: 'Variables and Storing Information',
        subtitle: 'GIVING MEANINGFUL NAMES TO DATA IN PYTHON MEMORY',
        intro: {
          icon: 'database',
          titleEn: 'What Is a Variable?',
          titleHi: 'Variable Kya Hota Hai?',
          bodyEn:
            'Think of labeled jars in a kitchen: one jar has the label **`sugar`**, another has **`tea`**. In Python, a **Variable** is a **name tag (reference)** that points to a value stored in computer memory so you can reuse and update it anytime.',
          bodyHi:
            'Kitchen ke labeled jars sochiye: ek par **`sugar`** likha hai, dusre par **`tea`**. Python mein **Variable** ek **name tag (reference)** hota hai jo memory mein rakhi value ki taraf ishara karta hai taaki aap use baar-baar use aur update kar sakein.',
        },
        sections: [
          {
            pill: 'Syntax Breakdown of Assignment',
            blocks: [
              {
                type: 'sql',
                label: 'variables_demo.py',
                code: `customer_name = "Riya"\norder_amount = 850\nprint(customer_name, order_amount)`,
                output: `Riya 850`,
                captionEn: 'Important: `=` in Python does NOT mean "is equal to" like in school math — it means **"assign the value on the right to the name on the left"**!',
                captionHi: 'Zaroori baat: Python mein `=` ka matlab barabar nahi hota — iska matlab hai **"right side ki value ko left side ke variable naam mein store karo"**!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 4',
        pageTag: 'PAGE 2 OF 4',
        footerPage: '2 / 4',
        title: 'Conceptual Visual Memory: How Python Stores & Reassigns',
        subtitle: 'WATCHING A VARIABLE POINT TO A NEW VALUE',
        sections: [
          {
            pill: 'Reassignment Example',
            blocks: [
              {
                type: 'sql',
                label: 'reassign.py',
                code: `stock = 50\nprint("Morning stock:", stock)\nstock = 35\nprint("Evening stock:", stock)`,
                output: `Morning stock: 50\nEvening stock: 35`,
                captionEn: 'When Line 3 runs (`stock = 35`), the name `stock` now points to the new integer object `35` instead of `50`.',
                captionHi: 'Line 3 (`stock = 35`) chalte hi `stock` ab purane `50` ko chhod kar naye value `35` ko point karne lagta hai.',
              },
            ],
          },
          {
            pill: 'Conceptual Visual Memory Map (Not Physical Hardware)',
            blocks: [
              {
                type: 'table',
                headers: ['Step', 'Variable Name', 'Points To (Value)', 'Data Type'],
                rows: [
                  ['After Line 1', '`stock`', '`50`', '`int`'],
                  ['After Line 3', '`stock`', '`35` (reassigned!)', '`int`'],
                ],
                noteEn: 'Conceptual Model: In Python, variables are labels referencing objects in memory, rather than fixed-size metal boxes.',
                noteHi: 'Conceptual Model: Python mein variables memory mein rakhe objects ke labels (references) hote hain.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 4',
        pageTag: 'PAGE 3 OF 4',
        footerPage: '3 / 4',
        title: 'Using Variables Inside Calculations',
        subtitle: 'CHANGE ONE NUMBER AND EVERYTHING UPDATES AUTOMATICALLY',
        sections: [
          {
            pill: 'Data Science Mini Example: Discounted Bill',
            blocks: [
              {
                type: 'sql',
                label: 'discount_bill.py',
                code: `unit_price = 400\nquantity = 3\ndiscount = 150\nnet_total = (unit_price * quantity) - discount\nprint("Net Total INR:", net_total)`,
                output: `Net Total INR: 1050`,
                captionEn: 'If `quantity` changes from `3` to `5`, you only edit Line 2 — `net_total` recalculates automatically!',
                captionHi: 'Agar `quantity` `3` se `5` ho jaaye, toh sirf Line 2 badalni hogi — `net_total` apne aap update ho jaayega!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 4',
        pageTag: 'PAGE 4 OF 4',
        footerPage: '4 / 4',
        title: 'Key Takeaways',
        subtitle: 'VARIABLES ARE THE BUILDING BLOCKS OF EVERY PROGRAM',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'A **Variable** assigns a readable name to a value using `=` (`name = value`).', hi: '**Variable** `=` ki madad se kisi value ko ek readable naam deta hai.' },
                  { en: 'Reassigning a variable updates what value the name points to from that line onward.', hi: 'Reassign karne par variable us line ke baad nayi value ko point karta hai.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 46. Naming Variables Correctly
  46: {
    module: 'DS-M06',
    moduleTitle: 'Python Syntax and Fundamentals',
    topic: 'Naming Variables Correctly',
    pageCount: 3,
    sampleDataNotice: 'Naming conventions follow official Python PEP 8 style guidelines.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 5',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Naming Variables Correctly',
        subtitle: 'STRICT PYTHON RULES + CLEAN SNAKE_CASE HABITS',
        intro: {
          icon: 'table',
          titleEn: 'Rules Python Enforces vs Good Style',
          titleHi: 'Python Ke Strict Rules Vs Acchi Naming Style',
          bodyEn:
            'Python has strict rules for legal variable names (breaking them causes a `SyntaxError`) AND professional habits (like **snake_case**) that make Data Science code easy for teams to read.',
          bodyHi:
            'Python ke kuch strict variable naming rules hain (jinhe todne par `SyntaxError` aata hai) aur kuch best practices (jaise **snake_case**) jo code ko clean banati hain.',
        },
        sections: [
          {
            pill: 'Valid vs Invalid Variable Names',
            blocks: [
              {
                type: 'table',
                headers: ['Variable Name', 'Valid?', 'Reason'],
                rows: [
                  ['`total_sales`', 'Yes (Best!)', 'Lowercase letters + underscore (`snake_case`). Clear meaning.'],
                  ['`order_2026`', 'Yes', 'Digits are allowed AFTER the first character.'],
                  ['`2nd_order`', 'No (SyntaxError)', 'Cannot START with a digit!'],
                  ['`total sales`', 'No (SyntaxError)', 'Spaces are NOT allowed — use `_` instead.'],
                  ['`order-price`', 'No (SyntaxError)', 'Hyphen `-` means subtraction in Python!'],
                  ['`for` / `if` / `class`', 'No (SyntaxError)', 'Reserved Python keywords cannot be variable names.'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 5',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Case Sensitivity & Descriptive Names',
        subtitle: 'TOTAL_SALES AND total_sales ARE TWO DIFFERENT VARIABLES',
        sections: [
          {
            pill: 'Case-Sensitivity Demo',
            blocks: [
              {
                type: 'sql',
                label: 'case_demo.py',
                code: `sales = 100\nSales = 250\nprint(sales, Sales)`,
                output: `100 250`,
                captionEn: 'Because Python is **case-sensitive**, `sales` and `Sales` are completely separate variables. Stick to lowercase `snake_case` everywhere to avoid confusion!',
                captionHi: 'Python **case-sensitive** hai, isliye `sales` aur `Sales` do alag variables hain. Confusion se bachne ke liye hamesha lowercase `snake_case` use karein!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 5',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'WRITE NAMES A TEAMMATE UNDERSTANDS IN 1 SECOND',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Start with a letter or `_`; use only letters, digits, and `_`; never use spaces, hyphens, or Python keywords.', hi: 'Naam letter ya `_` se shuru karein; spaces, hyphens ya keywords (`if`, `for`) kabhi use mat karein.' },
                  { en: 'Prefer clear `snake_case` names like `monthly_revenue` instead of cryptic letters like `x` or `a1`.', hi: '`x` ya `a1` ke bajay clear `snake_case` naam rakhein jaise `monthly_revenue`.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 47. Strings, Integers and Floats
  47: {
    module: 'DS-M06',
    moduleTitle: 'Python Syntax and Fundamentals',
    topic: 'Strings, Integers and Floats',
    pageCount: 3,
    sampleDataNotice: 'All Python examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 6',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Strings, Integers and Floats',
        subtitle: 'THE THREE EVERYDAY DATA TYPES IN PYTHON',
        intro: {
          icon: 'database',
          titleEn: 'Every Value in Python Has a Data Type',
          titleHi: 'Python Mein Har Value Ka Ek Data Type Hota Hai',
          bodyEn:
            'Just as a spreadsheet treats text, whole counts, and decimal prices differently, Python classifies basic values into **Strings (`str`)** for text, **Integers (`int`)** for whole numbers, and **Floats (`float`)** for decimal numbers.',
          bodyHi:
            'Python basic values ko teen main types mein rakhta hai: text ke liye **String (`str`)**, whole numbers ke liye **Integer (`int`)**, aur decimal numbers ke liye **Float (`float`)**.',
        },
        sections: [
          {
            pill: 'The 3 Core Types Side by Side',
            blocks: [
              {
                type: 'compare',
                items: [
                  { title: 'String (str) — Text', bodyEn: 'Wrapped in `"..."` or `\'...\'`. Examples: `"Mumbai"`, `"ORD-101"`, `"42"` (text, NOT a number!).', bodyHi: 'Quotes `"..."` ya `\'...\'` ke andar text. Examples: `"Mumbai"`, `"ORD-101"`, `"42"`.', tone: 'lavender' },
                  { title: 'Integer (int) — Whole Number', bodyEn: 'Positive, negative, or zero without a decimal point. Examples: `0`, `15`, `-4`, `2026`.', bodyHi: 'Bina decimal ke whole numbers (positive, negative ya zero). Examples: `0`, `15`, `-4`.', tone: 'sky' },
                  { title: 'Float (float) — Decimal Number', bodyEn: 'Any number with a decimal point. Examples: `99.5`, `3.14`, `0.0`, `-2.75`.', bodyHi: 'Decimal point wale numbers. Examples: `99.5`, `3.14`, `0.0`.', tone: 'green' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 6',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Why `"50" + "50"` Is NOT `100`!',
        subtitle: 'DATA TYPE CHANGES HOW `+` BEHAVES',
        sections: [
          {
            pill: 'Verified Comparison in Python',
            blocks: [
              {
                type: 'sql',
                label: 'types_plus.py',
                code: `print(50 + 50)        # int + int -> addition\nprint(50 + 2.5)       # int + float -> float\nprint("50" + "50")    # str + str -> text joining!`,
                output: `100\n52.5\n5050`,
                captionEn: 'Watch out! Adding two strings `"50" + "50"` joins them side-by-side (**Concatenation**) into `"5050"`, NOT `100`!',
                captionHi: 'Dhyan dijiye! Do strings `"50" + "50"` ko `+` karne par wo chipak kar `"5050"` ban jaati hain, `100` nahi!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 6',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'RECOGNIZING STR, INT, AND FLOAT INSTANTLY',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: '`str` = text in quotes; `int` = whole numbers; `float` = decimal numbers.', hi: '`str` = quotes mein text; `int` = whole numbers; `float` = decimal numbers.' },
                  { en: 'Even digits inside quotes (`"100"`) are Strings — you must convert them before doing math!', hi: 'Quotes ke andar ke digits (`"100"`) bhi Strings hote hain — math karne se pehle unhe convert karna padta hai!' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 48. Boolean Data Type
  48: {
    module: 'DS-M06',
    moduleTitle: 'Python Syntax and Fundamentals',
    topic: 'Boolean Data Type',
    pageCount: 3,
    sampleDataNotice: 'All Python Boolean examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 7',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Boolean Data Type',
        subtitle: 'THE YES / NO LOGIC SWITCH BEHIND EVERY DECISION IN PYTHON',
        intro: {
          icon: 'database',
          titleEn: 'Only Two Values: True or False',
          titleHi: 'Sirf Do Values: True Ya False',
          bodyEn:
            'A **Boolean (`bool`)** represents a simple **Yes/No** or **On/Off** state. In Python, there are only two Boolean values: **`True`** and **`False`** — always capitalized, with **no quotes** around them!',
          bodyHi:
            '**Boolean (`bool`)** ek simple **Yes/No** switch hota hai. Python mein sirf do Boolean values hoti hain: **`True`** aur **`False`** — hamesha pehla letter capital aur **bina quotes** ke!',
        },
        sections: [
          {
            pill: 'Booleans in Action (Including Comparison Results)',
            blocks: [
              {
                type: 'sql',
                label: 'boolean_demo.py',
                code: `is_premium = True\nhas_coupon = False\norder_total = 1200\nqualifies_free_shipping = order_total >= 500\nprint(is_premium, has_coupon, qualifies_free_shipping)`,
                output: `True False True`,
                captionEn: 'Every comparison like `order_total >= 500` automatically evaluates to a Boolean (`True` or `False`).',
                captionHi: '`order_total >= 500` jaisa har comparison apne aap Boolean (`True` ya `False`) return karta hai.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 7',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Common Mistake: `True` vs `"True"` vs `true`',
        subtitle: 'SPOT THE DIFFERENCE IMMEDIATELY',
        sections: [
          {
            pill: 'Comparison Table',
            blocks: [
              {
                type: 'table',
                headers: ['Code Written', 'What Python Sees', 'Correct Boolean?'],
                rows: [
                  ['`True` / `False`', '`bool` (Real Boolean)', 'Yes!'],
                  ['`"True"` / `"False"`', '`str` (Plain text word!)', 'No — quotes turn it into a String'],
                  ['`true` / `false`', '`NameError`!', 'No — Python requires capital `T` and `F`'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 7',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'BOOLEANS POWER CONDITIONS AND DATA FILTERING',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: '**Booleans** (`True`, `False`) drive every `if` condition, loop check, and Data Science row filter.', hi: '**Booleans** (`True`, `False`) har `if` condition, loop aur Data Science filter ki base hote hain.' },
                  { en: 'Never wrap `True` or `False` in quotes, and always capitalize the first letter.', hi: '`True` aur `False` mein quotes kabhi mat lagayein aur pehla letter capital rakhein.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 49. Checking Data Types with type()
  49: {
    module: 'DS-M06',
    moduleTitle: 'Python Syntax and Fundamentals',
    topic: 'Checking Data Types with type()',
    pageCount: 3,
    sampleDataNotice: 'All type() outputs below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 8',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Checking Data Types with type()',
        subtitle: 'YOUR X-RAY VISION FOR INSPECTING ANY VARIABLE',
        intro: {
          icon: 'table',
          titleEn: 'Never Guess a Variable’s Type — Ask Python!',
          titleHi: 'Variable Ka Type Guess Mat Kariye — Python Se Poochiye!',
          bodyEn:
            'When cleaning messy CSV or user-input data, a number like `"499"` might secretly be stored as text (`str`). The built-in **`type()`** function immediately tells you the exact Data Type of any value or variable.',
          bodyHi:
            'Messy data clean karte waqt `"499"` jaisa number chupke se text (`str`) ho sakta hai. Built-in **`type()`** function turant batata hai ki kisi variable ka exact Data Type kya hai.',
        },
        sections: [
          {
            pill: 'Inspecting All 4 Core Types',
            blocks: [
              {
                type: 'sql',
                label: 'check_types.py',
                code: `name = "Asha"\nage = 26\nrating = 4.8\nis_active = True\nprint(type(name))\nprint(type(age))\nprint(type(rating))\nprint(type(is_active))`,
                output: `<class 'str'>\n<class 'int'>\n<class 'float'>\n<class 'bool'>`,
                captionEn: '`<class \'int\'>` simply means this value belongs to Python’s integer (`int`) type.',
                captionHi: '`<class \'int\'>` ka matlab hai yeh value Python ke integer (`int`) type ki hai.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 8',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Catching Hidden String Numbers in Data Science',
        subtitle: 'WHY `type("250")` SAVES YOU FROM `TypeError`',
        sections: [
          {
            pill: 'Quick Detective Check',
            blocks: [
              {
                type: 'sql',
                label: 'detective_type.py',
                code: `price_from_csv = "250"\nprint(price_from_csv, "->", type(price_from_csv))`,
                output: `250 -> <class 'str'>`,
                captionEn: 'In the Console, `250` looks like a number, yet `type()` reveals it is `<class \'str\'>`! Now you know you must convert it before doing math.',
                captionHi: 'Console par `250` number jaisa dikhta hai, par `type()` bata deta hai ki yeh `<class \'str\'>` hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 8',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'INSPECT EARLY, DEBUG FASTER',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Call `print(type(variable))` whenever you are unsure whether a value is `str`, `int`, `float`, or `bool`.', hi: 'Jab bhi doubt ho, `print(type(variable))` chala kar exact type check karein.' },
                  { en: 'Checking types is a daily debugging habit in Data Science pipelines.', hi: 'Data Science pipelines mein types check karna roz ka essential habit hai.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 50. Type Conversion
  50: {
    module: 'DS-M06',
    moduleTitle: 'Python Syntax and Fundamentals',
    topic: 'Type Conversion',
    pageCount: 3,
    sampleDataNotice: 'All type conversion outputs and intentional ValueError demo are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 9',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Type Conversion',
        subtitle: 'CONVERTING VALUES SAFELY BETWEEN STR, INT, FLOAT, AND BOOL',
        intro: {
          icon: 'database',
          titleEn: 'What Is Type Conversion (Type Casting)?',
          titleHi: 'Type Conversion Kya Hota Hai?',
          bodyEn:
            '**Type Conversion** means explicitly converting a value from one Data Type to another using **`int()`**, **`float()`**, **`str()`**, or **`bool()`**. In Data Science, you use this constantly when numbers arrive as text from forms, CSVs, or APIs.',
          bodyHi:
            '**Type Conversion** ka matlab hai **`int()`**, **`float()`**, **`str()`**, ya **`bool()`** se kisi value ka type badalna — jaise CSV se aaye text `"450"` ko real number `450` mein badalna.',
        },
        sections: [
          {
            pill: 'Verified Type Conversion Examples',
            blocks: [
              {
                type: 'sql',
                label: 'convert_demo.py',
                code: `raw_qty = "4"\nraw_price = "199.50"\ntotal = int(raw_qty) * float(raw_price)\nprint("Total:", total)\nprint("As label: INR " + str(total))`,
                output: `Total: 798.0\nAs label: INR 798.0`,
                captionEn: '`int("4")` becomes `4`, `float("199.50")` becomes `199.5`, and `str(total)` lets us join it cleanly with text.',
                captionHi: '`int("4")` ban gaya `4`, `float("199.50")` ban gaya `199.5`, aur `str(total)` se humne use text ke saath jod diya.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 9',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Watch Out: Two Classic Conversion Traps',
        subtitle: 'TRUNCATION AND INVALID TEXT',
        sections: [
          {
            pill: 'Trap 1: `int(9.9)` Truncates (Does Not Round!) & Trap 2: Non-Numeric Text',
            blocks: [
              {
                type: 'sql',
                label: 'truncate_demo.py',
                code: `print(int(9.9))      # Drops decimal -> 9 (does NOT round to 10!)\nprint(round(9.9))    # Rounds properly -> 10`,
                output: `9\n10`,
                captionEn: '`int(9.9)` simply chops off `.9` and gives `9`. Use `round()` when you want mathematical rounding!',
                captionHi: '`int(9.9)` decimal kaat kar `9` deta hai — round nahi karta! Round karne ke liye `round()` use karein.',
              },
              {
                type: 'sql',
                label: 'invalid_cast.py (INTENTIONAL ERROR)',
                code: `int("hello")`,
                output: `ValueError: invalid literal for int() with base 10: 'hello'`,
                isError: true,
                captionEn: 'You can only convert text that actually looks like a valid number! `"hello"` or `"₹500"` (before stripping `₹`) causes a `ValueError`.',
                captionHi: 'Sirf valid number jaisa text hi convert hota hai — `"hello"` ya `"₹500"` (bina `₹` hataye) `ValueError` deta hai.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 9',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'CLEAN TYPES PREVENT CRASHES',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Use `int()`, `float()`, `str()`, and `bool()` to convert types cleanly.', hi: '`int()`, `float()`, `str()` aur `bool()` se types convert karein.' },
                  { en: 'Remember: `int(9.9)` gives `9` (truncation), and converting non-numeric text raises `ValueError`.', hi: '`int(9.9)` `9` deta hai, aur non-numeric text convert karne par `ValueError` aata hai.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 51. User Input with input()
  51: {
    module: 'DS-M06',
    moduleTitle: 'Python Syntax and Fundamentals',
    topic: 'User Input with input()',
    pageCount: 3,
    sampleDataNotice: 'Interactive input() examples show realistic user-typed entries alongside verified Python output.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 10',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'User Input with input()',
        subtitle: 'MAKING YOUR PYTHON PROGRAMS INTERACTIVE',
        intro: {
          icon: 'database',
          titleEn: 'How `input()` Works',
          titleHi: '`input()` Kaise Kaam Karta Hai?',
          bodyEn:
            'The **`input()`** function pauses your program, shows a prompt message in the Terminal, waits for the user to type something and press **Enter**, and returns what they typed. **CRITICAL RULE:** `input()` **ALWAYS** returns a **String (`str`)** — even if the user types `25`!',
          bodyHi:
            '**`input()`** program ko rok kar Terminal mein message dikhata hai aur user ke type karke **Enter** dabane ka wait karta hai. **SABSE ZAROORI RULE:** `input()` **HAMESHA String (`str`)** return karta hai — chahe user `25` hi kyun na type kare!',
        },
        sections: [
          {
            pill: 'Converting Numeric Input Immediately',
            blocks: [
              {
                type: 'sql',
                label: 'bill_input.py',
                code: `# Suppose user types: Riya, then 3\nname = input("Enter customer name: ")\nqty = int(input("Enter quantity: "))\ntotal = qty * 250\nprint(f"{name}'s total bill is INR {total}")`,
                output: `Enter customer name: Riya\nEnter quantity: 3\nRiya's total bill is INR 750`,
                captionEn: 'Wrapping `input()` inside `int(...)` converts the typed `"3"` into the integer `3` so `qty * 250` gives `750` instead of repeating `"3"` 250 times!',
                captionHi: '`int(input(...))` likhne se user ka type kiya hua `"3"` integer `3` ban jaata hai, jisse `qty * 250` sahi result `750` deta hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 10',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'What Happens If You Forget `int()` or `float()`?',
        subtitle: 'SEE THE SURPRISING STRING MULTIPLICATION BUG',
        sections: [
          {
            pill: 'Bug vs Fix',
            blocks: [
              {
                type: 'compare',
                items: [
                  { title: 'Without int() — Bug!', bodyEn: 'If `qty = "3"`, then `qty * 3` produces `"333"` (repeats the text 3 times) instead of `9`!', bodyHi: 'Agar `qty = "3"` raha, toh `qty * 3` ka result `9` nahi balki `"333"` aayega!', tone: 'pink' },
                  { title: 'With int() / float() — Clean!', bodyEn: 'Convert immediately: `qty = int(input("Qty: "))` or `price = float(input("Price: "))`.', bodyHi: 'Turant convert karein: `qty = int(input("Qty: "))` ya `price = float(input("Price: "))`.', tone: 'green' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 10',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'INTERACTIVE PROGRAMS DONE RIGHT',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: '`input()` **always returns a String (`str`)**.', hi: '`input()` **hamesha String (`str`)** return karta hai.' },
                  { en: 'Wrap numeric prompts in `int(...)` or `float(...)` before performing math.', hi: 'Math karne se pehle numeric input ko `int(...)` ya `float(...)` mein convert karein.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 52. Common Syntax Errors
  52: {
    module: 'DS-M06',
    moduleTitle: 'Python Syntax and Fundamentals',
    topic: 'Common Syntax Errors',
    pageCount: 3,
    sampleDataNotice: 'All error messages below are actual Python 3 error outputs from intentional demonstrations.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 11',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Common Syntax Errors',
        subtitle: 'DO NOT FEAR RED ERROR MESSAGES — THEY ARE HELPFUL CLUES!',
        intro: {
          icon: 'table',
          titleEn: 'Every Programmer Sees Syntax Errors Every Week',
          titleHi: 'Har Programmer Ko Syntax Errors Aate Hain — Ghabrana Nahi!',
          bodyEn:
            'A **SyntaxError** means Python could not understand your grammar before even starting to run the program — like missing a closing quote, parenthesis, or colon. The error message points right at the **line number** and uses a **`^`** arrow to show where Python got confused.',
          bodyHi:
            '**SyntaxError** ka matlab hai Python code start hone se pehle hi grammar nahi samajh paaya — jaise quote, bracket ya colon bhool jaana. Error message aapko exact **line number** batata hai!',
        },
        sections: [
          {
            pill: 'The Top 5 Beginner Syntax Errors Side by Side',
            blocks: [
              {
                type: 'table',
                headers: ['Incorrect Code', 'Actual Error', 'Reason', 'Corrected Code'],
                rows: [
                  ['`print("Hello)`', '`SyntaxError: unterminated string literal`', 'Missing closing double quote `"`', '`print("Hello")`'],
                  ['`print("Hi"`', '`SyntaxError: \'(\' was never closed`', 'Missing closing parenthesis `)`', '`print("Hi")`'],
                  ['`if x > 5`', '`SyntaxError: expected \':\'`', 'Missing colon `:` after `if` condition', '`if x > 5:`'],
                  ['`2total = 50`', '`SyntaxError: invalid decimal literal`', 'Variable name starts with a digit', '`total_2 = 50`'],
                  ['`if x = 5:`', '`SyntaxError: invalid syntax`', 'Used `=` (assignment) instead of `==`', '`if x == 5:`'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 11',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Syntax Error vs Runtime Error',
        subtitle: 'TWO DIFFERENT MOMENTS ERRORS HAPPEN',
        sections: [
          {
            pill: 'Compare Both Clearly',
            blocks: [
              {
                type: 'compare',
                items: [
                  { title: 'SyntaxError (Before Running)', bodyEn: 'Broken grammar (`print("hi"`). Python refuses to start the script at all until you fix it.', bodyHi: 'Grammar galti (`print("hi"`). Jab tak fix na ho, script start hi nahi hoti.', tone: 'pink' },
                  { title: 'Runtime Error (While Running)', bodyEn: 'Valid grammar, but an impossible action happens mid-run (e.g., `10 / 0` → `ZeroDivisionError`, or `Print()` → `NameError`).', bodyHi: 'Grammar sahi hai, par chalte waqt impossible kaam hua (jaise `10 / 0` → `ZeroDivisionError`).', tone: 'amber' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 11',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'READ THE LAST LINE OF THE ERROR FIRST',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Always check **matching quotes**, **matching parentheses**, **colons `:`**, and **indentation** first.', hi: 'Sabse pehle **quotes**, **parentheses**, **colon `:`**, aur **indentation** check karein.' },
                  { en: 'If the error points to Line 5, check Line 5 AND the end of Line 4 (an unclosed `)` on Line 4 often reports on Line 5!).', hi: 'Agar error Line 5 dikhaye, toh Line 5 ke saath Line 4 ka end bhi zaroor check karein!' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 53. Debugging Your First Programs
  53: {
    module: 'DS-M06',
    moduleTitle: 'Python Syntax and Fundamentals',
    topic: 'Debugging Your First Programs',
    pageCount: 3,
    sampleDataNotice: 'All debugging examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 12',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Debugging Your First Programs',
        subtitle: 'A CALM, SYSTEMATIC 4-STEP DETECTIVE METHOD',
        intro: {
          icon: 'database',
          titleEn: 'What Is Debugging?',
          titleHi: 'Debugging Kya Hoti Hai?',
          bodyEn:
            '**Debugging** is the process of finding and fixing bugs (errors or wrong outputs) in your code. Good programmers do not randomly change lines hoping it works — they **read the error**, **inspect variable values**, **find the root cause**, and **re-test**.',
          bodyHi:
            '**Debugging** ka matlab hai code mein bugs (errors ya galat output) ko dhoondh kar fix karna. Smart programmers tukke nahi maarte — wo **error padhte hain**, **variable values check karte hain**, **asli wajah pakadte hain**, aur **dubara test karte hain**.',
        },
        sections: [
          {
            pill: 'The 4-Step Beginner Debugging Loop',
            blocks: [
              {
                type: 'flow',
                items: [
                  { title: '1. Read Error', bodyEn: 'Note the exact error type (e.g., `TypeError`) and line number.', bodyHi: 'Exact error type aur line number padhein.', tone: 'sky' },
                  { title: '2. Inspect Values', bodyEn: 'Print variable values AND `type()` right before the failing line.', bodyHi: 'Failing line se pehle variable values aur `type()` print karein.', tone: 'amber' },
                  { title: '3. Fix One Thing', bodyEn: 'Apply a clean, targeted fix rather than rewriting everything.', bodyHi: 'Ek targeted fix lagayein, poora code blindly mat badlein.', tone: 'lavender' },
                  { title: '4. Re-Run & Verify', bodyEn: 'Run again and confirm Output matches your hand calculation.', bodyHi: 'Dubara run karke confirm karein ki Output sahi aaya.', tone: 'green' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 12',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Live Debugging Walkthrough: Fixing a Buggy Discount Script',
        subtitle: 'BUGGY CODE → ACTUAL ERROR → FIXED CODE',
        sections: [
          {
            pill: 'Before Debugging (Intentional TypeError)',
            blocks: [
              {
                type: 'sql',
                label: 'buggy_discount.py (INTENTIONAL ERROR)',
                code: `price = "500"\ndiscount = 50\nfinal = price - discount\nprint(final)`,
                output: `TypeError: unsupported operand type(s) for -: 'str' and 'int'`,
                isError: true,
                captionEn: 'The error tells us the exact problem: we tried subtracting an `int` (`50`) from a `str` (`"500"`).',
                captionHi: 'Error saaf bata raha hai: humne `str` (`"500"`) mein se `int` (`50`) subtract karne ki koshish ki!',
              },
              {
                type: 'sql',
                label: 'fixed_discount.py',
                code: `price = int("500")\ndiscount = 50\nfinal = price - discount\nprint("Final Price:", final)`,
                output: `Final Price: 450`,
                captionEn: 'Converting `price` to `int` solves the `TypeError` cleanly and prints `450`.',
                captionHi: '`price` ko `int` mein convert karte hi `TypeError` solve ho gaya aur sahi output `450` aa gaya!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M06 | TOPIC 12',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Module 6 Complete — Key Takeaways',
        subtitle: 'READY FOR MODULE 7: OPERATORS & CONDITIONAL LOGIC',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Use temporary `print("DEBUG:", var, type(var))` lines or VS Code **Breakpoints** to see what Python actually holds in memory.', hi: '`print("DEBUG:", var, type(var))` ya VS Code **Breakpoints** se dekhein ki Python ke paas memory mein kya value hai.' },
                  { en: 'Always verify your program’s Output against a quick manual calculation on a small test case!', hi: 'Chhote test case par manual calculation se apne program ka Output hamesha verify karein!' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
