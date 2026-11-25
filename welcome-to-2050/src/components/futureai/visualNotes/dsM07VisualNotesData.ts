import type { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

// ============================================================================
// MODULE 7 (DS-M07): Operators and Conditional Logic — Topics 54 to 65
// ============================================================================

export const DS_M07_VISUAL_NOTES: Record<number, StructuredVisualNoteTopic> = {
  // 54. Arithmetic Operators
  54: {
    module: 'DS-M07',
    moduleTitle: 'Operators and Conditional Logic',
    topic: 'Arithmetic Operators',
    pageCount: 3,
    sampleDataNotice: 'All arithmetic calculations below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 1',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Arithmetic Operators',
        subtitle: 'DOING EXACT MATH IN PYTHON — INCLUDING `/` VS `//` AND `%`',
        intro: {
          icon: 'database',
          titleEn: 'Operands & Operators',
          titleHi: 'Operands Aur Operators Kya Hote Hain?',
          bodyEn:
            'In `10 + 5`, the numbers `10` and `5` are called **Operands**, and `+` is the **Operator**. Python gives you **7 Arithmetic Operators** to add, subtract, multiply, divide, find remainders, and compute powers.',
          bodyHi:
            '`10 + 5` mein `10` aur `5` **Operands** hain, aur `+` **Operator** hai. Python mein **7 Arithmetic Operators** hote hain.',
        },
        sections: [
          {
            pill: 'All 7 Python Arithmetic Operators',
            blocks: [
              {
                type: 'table',
                headers: ['Operator', 'Name', 'Example', 'Exact Result', 'Important Note'],
                rows: [
                  ['`+`', 'Addition', '`10 + 3`', '`13`', 'Adds numbers'],
                  ['`-`', 'Subtraction', '`10 - 3`', '`7`', 'Subtracts right from left'],
                  ['`*`', 'Multiplication', '`10 * 3`', '`30`', 'Multiplies numbers'],
                  ['`/`', 'True Division', '`10 / 2`', '`5.0`', 'ALWAYS returns a `float`!'],
                  ['`//`', 'Floor Division', '`10 // 3`', '`3`', 'Divides and rounds DOWN to whole integer'],
                  ['`%`', 'Modulus (Remainder)', '`10 % 3`', '`1`', 'Gives leftover remainder (great for even/odd checks!)'],
                  ['`**`', 'Exponent (Power)', '`2 ** 3`', '`8`', '2 raised to the power 3 (`2 * 2 * 2`)'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 1',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Division (`/`) vs Floor Division (`//`) vs Modulus (`%`)',
        subtitle: 'A REAL PACKAGING EXAMPLE: PACKING 23 BOTTLES INTO BOXES OF 6',
        sections: [
          {
            pill: 'Verified Warehouse Calculation',
            blocks: [
              {
                type: 'sql',
                label: 'packing_math.py',
                code: `bottles = 23\nbox_size = 6\nexact_boxes = bottles / box_size\nfull_boxes = bottles // box_size\nleftover = bottles % box_size\nprint("Exact:", round(exact_boxes, 2))\nprint("Full boxes:", full_boxes)\nprint("Leftover bottles:", leftover)`,
                output: `Exact: 3.83\nFull boxes: 3\nLeftover bottles: 5`,
                captionEn: 'Notice how cleanly `//` gives `3` full boxes and `%` gives `5` leftover bottles (`3 * 6 + 5 = 23`)!',
                captionHi: '`//` ne `3` poore boxes diye aur `%` ne `5` bachi hui bottles (`3 * 6 + 5 = 23`)!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 1',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'EVERYDAY MATH FOR DATA SCIENCE',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'True division `/` **always returns a `float`** (even `10 / 2` → `5.0`).', hi: 'True division `/` **hamesha `float`** deta hai (`10 / 2` → `5.0`).' },
                  { en: 'Floor division `//` gives the whole quotient; `%` gives the remainder; `**` computes powers.', hi: '`//` whole quotient deta hai, `%` remainder deta hai, aur `**` power nikaalta hai.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 55. Comparison Operators
  55: {
    module: 'DS-M07',
    moduleTitle: 'Operators and Conditional Logic',
    topic: 'Comparison Operators',
    pageCount: 3,
    sampleDataNotice: 'All comparison outputs below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 2',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Comparison Operators',
        subtitle: 'ASKING PYTHON YES/NO QUESTIONS THAT RETURN TRUE OR FALSE',
        intro: {
          icon: 'table',
          titleEn: 'Every Comparison Produces a Boolean (`True` or `False`)',
          titleHi: 'Har Comparison Ka Result `True` Ya `False` Hota Hai',
          bodyEn:
            '**Comparison Operators** compare two values and always return a **Boolean** (`True` or `False`). They power every `if` condition and Data Science filter (like finding orders above ₹1,000).',
          bodyHi:
            '**Comparison Operators** do values ko compare karte hain aur hamesha **Boolean** (`True` ya `False`) return karte hain.',
        },
        sections: [
          {
            pill: 'All 6 Comparison Operators',
            blocks: [
              {
                type: 'table',
                headers: ['Operator', 'Meaning', 'Example', 'Result'],
                rows: [
                  ['`==`', 'Equal to', '`500 == 500`', '`True`'],
                  ['`!=`', 'Not equal to', '`500 != 400`', '`True`'],
                  ['`>`', 'Greater than', '`80 > 100`', '`False`'],
                  ['`<`', 'Less than', '`80 < 100`', '`True`'],
                  ['`>=`', 'Greater than or equal to', '`100 >= 100`', '`True`'],
                  ['`<=`', 'Less than or equal to', '`95 <= 100`', '`True`'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 2',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'CRITICAL Distinction: `=` vs `==`',
        subtitle: 'ASSIGNING A VALUE VS CHECKING EQUALITY',
        sections: [
          {
            pill: 'Compare Both Clearly',
            blocks: [
              {
                type: 'compare',
                items: [
                  { title: 'Single `=` (Assignment)', bodyEn: 'Stores a value into a variable: `age = 25` (*"Set age to 25"*).', bodyHi: 'Variable mein value store karta hai: `age = 25`.', tone: 'amber' },
                  { title: 'Double `==` (Equality Check)', bodyEn: 'Asks a question: `age == 25` (*"Is age equal to 25?"* → `True` or `False`).', bodyHi: 'Sawaal poochta hai: `age == 25` (*"Kya age 25 ke barabar hai?"* → `True`/`False`).', tone: 'sky' },
                ],
              },
            ],
          },
          {
            pill: 'Verified Comparison Example',
            blocks: [
              {
                type: 'sql',
                label: 'compare_demo.py',
                code: `order_value = 1000\nprint(order_value == 1000)\nprint(order_value > 1000)\nprint(order_value >= 1000)\nprint("Pune" != "Mumbai")`,
                output: `True\nFalse\nTrue\nTrue`,
                captionEn: 'Notice `1000 > 1000` is `False`, whereas `1000 >= 1000` is `True` — boundary values matter in business rules!',
                captionHi: '`1000 > 1000` `False` hai, lekin `1000 >= 1000` `True` hai — boundary cases par hamesha dhyan dein!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 2',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'CLEAN COMPARISONS',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Never confuse `=` (assign) with `==` (compare for equality).', hi: '`=` (assign) aur `==` (compare) ko kabhi mix mat karein.' },
                  { en: 'Pay close attention to `>` vs `>=` on exact boundary values.', hi: 'Exact boundary par `>` aur `>=` ka antar hamesha check karein.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 56. Assignment Operators
  56: {
    module: 'DS-M07',
    moduleTitle: 'Operators and Conditional Logic',
    topic: 'Assignment Operators',
    pageCount: 3,
    sampleDataNotice: 'All assignment operator outputs below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 3',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Assignment Operators',
        subtitle: 'CLEAN SHORTHANDS FOR UPDATING RUNNING TOTALS AND COUNTERS',
        intro: {
          icon: 'database',
          titleEn: 'Why Write `total = total + 50` When You Can Write `total += 50`?',
          titleHi: '`total = total + 50` Ka Smart Shorthand: `total += 50`',
          bodyEn:
            'In Data Science loops, you constantly update running sums, counts, and inventory balances. **Compound Assignment Operators** (`+=`, `-=`, `*=`, `/=`) update a variable in one clean step.',
          bodyHi:
            'Loops mein running total ya counter update karne ke liye **Compound Assignment Operators** (`+=`, `-=`, `*=`, `/=`) code ko chhota aur readable banate hain.',
        },
        sections: [
          {
            pill: 'Verified Running Total Example',
            blocks: [
              {
                type: 'sql',
                label: 'assignment_ops.py',
                code: `total_sales = 1000\ntotal_sales += 250   # Same as: total_sales = total_sales + 250\ntotal_sales -= 100   # Refund of 100\ntotal_sales *= 2     # Doubled on weekend promo\nprint("Final Sales:", total_sales)`,
                output: `Final Sales: 2300`,
                captionEn: 'Trace it step by step: `1000` → `+250` (`1250`) → `-100` (`1150`) → `*2` (`2300`).',
                captionHi: 'Step-by-step trace: `1000` → `1250` → `1150` → `2300`.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 3',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Conceptual Visual Memory Table',
        subtitle: 'WATCHING `total_sales` UPDATE LINE BY LINE',
        sections: [
          {
            pill: 'Memory State Progression',
            blocks: [
              {
                type: 'table',
                headers: ['Line Executed', 'Equivalent Meaning', 'Value of `total_sales`'],
                rows: [
                  ['`total_sales = 1000`', 'Initial value', '`1000`'],
                  ['`total_sales += 250`', '`1000 + 250`', '`1250`'],
                  ['`total_sales -= 100`', '`1250 - 100`', '`1150`'],
                  ['`total_sales *= 2`', '`1150 * 2`', '`2300`'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 3',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'SHORTHANDS YOU WILL USE IN EVERY LOOP',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: '`x += 1` adds 1 to `x` and stores the new value back into `x`.', hi: '`x += 1` `x` mein 1 jod kar nayi value wapas `x` mein store karta hai.' },
                  { en: 'The variable must already exist before using `+=` (otherwise Python raises `NameError`).', hi: '`+=` use karne se pehle variable defined hona zaroori hai (warna `NameError` aata hai).' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 57. Logical Operators
  57: {
    module: 'DS-M07',
    moduleTitle: 'Operators and Conditional Logic',
    topic: 'Logical Operators',
    pageCount: 3,
    sampleDataNotice: 'All logical operator outputs below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 4',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Logical Operators',
        subtitle: 'COMBINING MULTIPLE CONDITIONS WITH `and`, `or`, AND `not`',
        intro: {
          icon: 'database',
          titleEn: 'Real-World Rules Often Need More Than One Check',
          titleHi: 'Asli Business Rules Mein Ek Se Zyada Conditions Hoti Hain',
          bodyEn:
            'Suppose a store offers a special discount if **the bill is at least ₹1,000 `and` the buyer is a member**. **Logical Operators** (`and`, `or`, `not`) combine Boolean conditions into one final `True` or `False` decision.',
          bodyHi:
            '**Logical Operators** (`and`, `or`, `not`) multiple Boolean conditions ko jod kar ek final `True` ya `False` decision banate hain.',
        },
        sections: [
          {
            pill: 'The 3 Logical Operators Explained Simply',
            blocks: [
              {
                type: 'compare',
                items: [
                  { title: '`and` (BOTH Must Be True)', bodyEn: 'Returns `True` ONLY when **every** condition is `True`. If even one is `False`, result is `False`.', bodyHi: 'Tabhi `True` jab **DONO** conditions `True` hon. Ek bhi `False` toh result `False`.', tone: 'sky' },
                  { title: '`or` (AT LEAST ONE True)', bodyEn: 'Returns `True` if **either** condition is `True`. Only `False` when **both** are `False`.', bodyHi: '**Koi ek bhi** condition `True` ho toh result `True`. Dono `False` par hi `False`.', tone: 'green' },
                  { title: '`not` (Flips True ↔ False)', bodyEn: 'Reverses a Boolean: `not True` → `False`, `not False` → `True`.', bodyHi: 'Boolean ko ulta kar deta hai: `not True` → `False`, `not False` → `True`.', tone: 'amber' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 4',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Verified Business Eligibility Example',
        subtitle: 'COMBINING COMPARISON + LOGICAL OPERATORS',
        sections: [
          {
            pill: 'Checking Free Delivery & VIP Access',
            blocks: [
              {
                type: 'sql',
                label: 'logical_demo.py',
                code: `bill = 800\nis_member = True\nis_blocked = False\n\nfree_delivery = (bill >= 500) and (not is_blocked)\nvip_offer = (bill >= 1500) or is_member\nprint("Free Delivery:", free_delivery)\nprint("VIP Offer:", vip_offer)`,
                output: `Free Delivery: True\nVIP Offer: True`,
                captionEn: 'Notice the difference: Comparison operators (`>=`) produce Booleans, and Logical operators (`and`, `or`, `not`) combine those Booleans!',
                captionHi: 'Comparison operators (`>=`) Booleans banate hain, aur Logical operators (`and`, `or`, `not`) unhe combine karte hain!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 4',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'CLEAR MULTI-CONDITION LOGIC',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: '`and` = all true; `or` = at least one true; `not` = opposite.', hi: '`and` = sab true; `or` = kam se kam ek true; `not` = ulta.' },
                  { en: 'Wrap complex sub-conditions in parentheses `(...)` so teammates can read your logic effortlessly.', hi: 'Complex conditions mein parentheses `(...)` lagayein taaki logic ek nazar mein samajh aaye.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 58. Membership and Identity Operators
  58: {
    module: 'DS-M07',
    moduleTitle: 'Operators and Conditional Logic',
    topic: 'Membership and Identity Operators',
    pageCount: 3,
    sampleDataNotice: 'All membership and identity outputs below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 5',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Membership and Identity Operators',
        subtitle: 'CHECKING "IS IT INSIDE?" (`in`) VS "IS IT THE EXACT SAME OBJECT?" (`is`)',
        intro: {
          icon: 'database',
          titleEn: 'Two Very Different Jobs — Never Confuse `==` With `is`!',
          titleHi: 'Do Alag Kaam — `==` Aur `is` Ko Kabhi Mix Mat Kariye!',
          bodyEn:
            '**Membership Operators (`in`, `not in`)** check whether an item exists inside a String, List, Tuple, Set, or Dictionary. **Identity Operators (`is`, `is not`)** check whether two variables point to the **exact same object in memory** — most commonly used to check **`is None`**!',
          bodyHi:
            '**Membership Operators (`in`, `not in`)** check karte hain ki koi item collection ke andar hai ya nahi. **Identity Operators (`is`, `is not`)** check karte hain ki do variables **memory mein bilkul ek hi object** ko point kar rahe hain ya nahi — sabse zyada **`is None`** check karne mein use hota hai!',
        },
        sections: [
          {
            pill: 'Verified Membership (`in`) vs Identity (`is`) Demo',
            blocks: [
              {
                type: 'sql',
                label: 'member_identity.py',
                code: `cities = ["Pune", "Delhi", "Jaipur"]\nprint("Pune" in cities)\nprint("Goa" not in cities)\n\na = [1, 2, 3]\nb = [1, 2, 3]\nprint("a == b (same values):", a == b)\nprint("a is b (same object):", a is b)\n\nmissing_val = None\nprint("Is missing:", missing_val is None)`,
                output: `True\nTrue\na == b (same values): True\na is b (same object): False\nIs missing: True`,
                captionEn: 'Look at `a` and `b`: they hold the **same values** (`a == b` is `True`), yet they are **two separate lists in memory** (`a is b` is `False`)!',
                captionHi: '`a` aur `b` ki **values same** hain (`a == b` → `True`), par memory mein wo **do alag lists** hain (`a is b` → `False`)!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 5',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Best Practice Rule for Beginners',
        subtitle: 'WHEN TO USE `==` VS `is`',
        sections: [
          {
            pill: 'Simple Golden Rule',
            blocks: [
              {
                type: 'compare',
                items: [
                  { title: 'Use `==` for Value Equality', bodyEn: 'Compare numbers, strings, and lists with `==` (e.g., `city == "Pune"`, `total == 500`).', bodyHi: 'Numbers, strings aur lists ki values compare karne ke liye hamesha `==` use karein.', tone: 'sky' },
                  { title: 'Use `is` / `is not` for `None`', bodyEn: 'Checking missing values in Python: `if coupon is None:` or `if coupon is not None:`.', bodyHi: '`None` (missing value) check karne ke liye `is None` ya `is not None` use karein.', tone: 'green' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 5',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'ACCURATE PYTHON THINKING',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: '`in` / `not in` checks **membership** inside collections or strings.', hi: '`in` / `not in` collection ya string ke andar **membership** check karta hai.' },
                  { en: '`==` checks **equal values**; `is` checks **same object identity** (use `is None` for missing values).', hi: '`==` **equal values** check karta hai; `is` **same object identity** check karta hai (`is None`).' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 59. Operator Precedence
  59: {
    module: 'DS-M07',
    moduleTitle: 'Operators and Conditional Logic',
    topic: 'Operator Precedence',
    pageCount: 3,
    sampleDataNotice: 'All precedence calculations below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 6',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Operator Precedence',
        subtitle: 'WHICH OPERATION DOES PYTHON CALCULATE FIRST?',
        intro: {
          icon: 'table',
          titleEn: 'Why `2 + 3 * 4` Gives `14`, NOT `20`!',
          titleHi: '`2 + 3 * 4` Ka Answer `14` Kyun Aata Hai, `20` Kyun Nahi?',
          bodyEn:
            'When an expression has multiple operators, Python follows a strict priority order called **Operator Precedence** — just like BODMAS/PEMDAS in math. Multiplication (`*`) happens **before** addition (`+`), unless you use **parentheses `(...)`** to force what runs first.',
          bodyHi:
            'Jab ek hi line mein kayi operators hon, toh Python **Operator Precedence** (priority order) follow karta hai — multiplication (`*`) addition (`+`) se **pehle** hota hai, jab tak aap **parentheses `(...)`** na lagayein.',
        },
        sections: [
          {
            pill: 'Priority Order (Highest to Lowest)',
            blocks: [
              {
                type: 'table',
                headers: ['Priority', 'Operators', 'Meaning'],
                rows: [
                  ['1 (Highest)', '`(...)`', 'Parentheses — ALWAYS evaluated first!'],
                  ['2', '`**`', 'Exponent (Power)'],
                  ['3', '`*`, `/`, `//`, `%`', 'Multiplication & Divisions (left to right)'],
                  ['4', '`+`, `-`', 'Addition & Subtraction (left to right)'],
                  ['5', '`==`, `!=`, `<`, `>`, `<=`, `>=`, `in`, `is`', 'Comparisons, Membership, Identity'],
                  ['6', '`not` → `and` → `or`', 'Logical operators (`not` first, then `and`, then `or`)'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 6',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Parentheses Save You From Costly Billing Bugs',
        subtitle: 'COMPARE WITHOUT VS WITH PARENTHESES',
        sections: [
          {
            pill: 'Verified Precedence Demo',
            blocks: [
              {
                type: 'sql',
                label: 'precedence_demo.py',
                code: `print("Without ():", 100 + 200 * 0.10)\nprint("With ():   ", (100 + 200) * 0.10)`,
                output: `Without (): 120.0\nWith ():    30.0`,
                captionEn: 'Look at that huge difference: `100 + (200 * 0.10) = 120.0`, whereas `10%` of `(100 + 200)` is `30.0`! Always use parentheses when in doubt.',
                captionHi: 'Fark dekhiye: bina parentheses ke `120.0` aaya, aur `(100 + 200) * 0.10` ka sahi 10% `30.0` aaya!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 6',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'CLARITY OVER MEMORIZATION',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Parentheses `(...)` always win highest priority.', hi: 'Parentheses `(...)` hamesha sabse pehle evaluate hote hain.' },
                  { en: 'Do not rely on teammates memorizing precedence tables — use parentheses `(...)` to make your exact intent obvious!', hi: 'Code ko bug-free aur readable rakhne ke liye hamesha clear parentheses `(...)` use karein!' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 60. Introduction to Conditional Statements
  60: {
    module: 'DS-M07',
    moduleTitle: 'Operators and Conditional Logic',
    topic: 'Introduction to Conditional Statements',
    pageCount: 3,
    sampleDataNotice: 'All decision-flow diagrams below illustrate Python conditional branching.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 7',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Introduction to Conditional Statements',
        subtitle: 'TEACHING YOUR PROGRAM TO MAKE SMART DECISIONS',
        intro: {
          icon: 'database',
          titleEn: 'Breaking Out of Straight-Line Execution',
          titleHi: 'Jab Program Ko Situation Ke Hisaab Se Faisla Lena Ho',
          bodyEn:
            'Every day you make conditional decisions: *"If it is raining, take an umbrella; otherwise, wear sunglasses."* **Conditional Statements** (`if`, `elif`, `else`) let your Python program **test a condition** and choose **which branch of code to execute** while **skipping** the other branches.',
          bodyHi:
            'Roz hum aise faisle lete hain: *"Agar baarish ho rahi hai toh chhata lo, warna nahi."* **Conditional Statements** (`if`, `elif`, `else`) Python program ko condition check karke **sahi branch chalane** aur baaki branches **skip** karne ki taqat dete hain.',
        },
        sections: [
          {
            pill: 'How Decision Branching Works',
            blocks: [
              {
                type: 'flow',
                items: [
                  { title: '1. Evaluate Condition', bodyEn: 'Python checks a Boolean expression (e.g., `bill >= 500`).', bodyHi: 'Python Boolean condition check karta hai (`bill >= 500`).', tone: 'sky' },
                  { title: '2. If True → Run Branch', bodyEn: 'Executes the indented `if` block.', bodyHi: 'True hone par indented `if` block chalta hai.', tone: 'green' },
                  { title: '3. If False → Skip', bodyEn: 'Skips the `if` block (or runs `else` if present).', bodyHi: 'False hone par `if` block skip hota hai (ya `else` chalta hai).', tone: 'amber' },
                  { title: '4. Continue Below', bodyEn: 'Program continues normally with unindented lines below.', bodyHi: 'Aage ka normal unindented code chalta rehta hai.', tone: 'lavender' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 7',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Why Data Science Needs Conditional Logic',
        subtitle: 'TAGGING, FILTERING, AND VALIDATING RECORDS',
        sections: [
          {
            pill: 'Everyday Data Science Uses',
            blocks: [
              {
                type: 'compare',
                items: [
                  { title: 'Customer Tagging', bodyEn: 'Label orders as `"High Value"`, `"Medium"`, or `"Standard"` based on spend.', bodyHi: 'Spend ke hisaab se orders ko `"High Value"` ya `"Standard"` tag dena.', tone: 'sky' },
                  { title: 'Data Validation', bodyEn: 'Flag records where `age < 0` or `price <= 0` as invalid before analysis.', bodyHi: '`age < 0` ya `price <= 0` wale records ko invalid flag karna.', tone: 'pink' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 7',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'DECISIONS = INTELLIGENT PROGRAMS',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Conditional statements execute or skip indented code blocks based on whether a condition is `True` or `False`.', hi: 'Conditional statements condition ke `True` ya `False` hone par code blocks ko run ya skip karte hain.' },
                  { en: 'Next, we practice `if`, `if-else`, `elif`, and nested conditions with verified code!', hi: 'Ab aage hum `if`, `if-else`, `elif`, aur nested conditions ko code ke saath seekhenge!' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 61. The if Statement
  61: {
    module: 'DS-M07',
    moduleTitle: 'Operators and Conditional Logic',
    topic: 'The if Statement',
    pageCount: 3,
    sampleDataNotice: 'All Python examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 8',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'The if Statement',
        subtitle: 'RUNNING A CODE BLOCK ONLY WHEN A CONDITION IS TRUE',
        intro: {
          icon: 'database',
          titleEn: 'Syntax of a Simple `if` Statement',
          titleHi: 'Simple `if` Statement Ka Syntax',
          bodyEn:
            'An **`if` statement** runs its indented body **only if** its condition evaluates to `True`. If the condition is `False`, Python skips the indented block cleanly and moves straight to the next unindented line.',
          bodyHi:
            '**`if` statement** apna indented block **sirf tab** chalata hai jab condition `True` ho. `False` hone par Python use skip karke neeche chala jaata hai.',
        },
        sections: [
          {
            pill: 'Executed Branch vs Skipped Branch',
            blocks: [
              {
                type: 'sql',
                label: 'if_demo.py',
                code: `temperature = 39.1\nif temperature >= 38.0:\n    print("Alert: High fever detected!")\nprint("Checkup logged.")`,
                output: `Alert: High fever detected!\nCheckup logged.`,
                captionEn: 'Because `39.1 >= 38.0` is `True`, Line 3 runs. If `temperature` were `36.8`, Line 3 would be **skipped** and ONLY `"Checkup logged."` would print!',
                captionHi: 'Kyunki `39.1 >= 38.0` `True` hai, Line 3 chali. Agar `temperature` `36.8` hota, toh Line 3 skip hoti aur sirf `"Checkup logged."` print hota!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 8',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Token Breakdown of `if temperature >= 38.0:`',
        subtitle: 'EVERY PIECE HAS A SPECIFIC JOB',
        sections: [
          {
            pill: 'Syntax Map',
            blocks: [
              {
                type: 'table',
                headers: ['Part', 'Meaning'],
                rows: [
                  ['`if`', 'Keyword starting a conditional check (always lowercase).'],
                  ['`temperature >= 38.0`', 'Condition expression that evaluates to `True` or `False`.'],
                  ['`:` (colon)', 'Marks the start of the indented body (forgetting `:` causes `SyntaxError`).'],
                  ['4 spaces before `print(...)`', 'Shows this line belongs INSIDE the `if` block.'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 8',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'SINGLE-BRANCH DECISIONS',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Use standalone `if` when you want an optional action to happen only when a condition is `True`.', hi: 'Standalone `if` tab use karein jab koi action sirf condition `True` hone par karwana ho.' },
                  { en: 'Unindented lines after the `if` block **always** execute regardless of whether the condition was `True` or `False`.', hi: '`if` ke baad unindented lines **hamesha** chalti hain.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 62. The if-else Statement
  62: {
    module: 'DS-M07',
    moduleTitle: 'Operators and Conditional Logic',
    topic: 'The if-else Statement',
    pageCount: 3,
    sampleDataNotice: 'All Python examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 9',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'The if-else Statement',
        subtitle: 'CHOOSING EXACTLY ONE OF TWO MUTUALLY EXCLUSIVE PATHS',
        intro: {
          icon: 'database',
          titleEn: 'Either Path A OR Path B — Never Both!',
          titleHi: 'Ya Toh Path A Ya Path B — Dono Ek Saath Kabhi Nahi!',
          bodyEn:
            'When there are **two opposite outcomes** (Pass vs Fail, Free Delivery vs Paid Delivery, Valid vs Invalid), use **`if-else`**. If the condition is `True`, the `if` block runs; otherwise (`False`), the `else` block runs.',
          bodyHi:
            'Jab **do opposite outcomes** hon (Pass/Fail, Free/Paid Delivery), tab **`if-else`** use karte hain. Condition `True` par `if` block chalta hai, warna `else` block chalta hai.',
        },
        sections: [
          {
            pill: 'Verified Delivery Fee Calculator',
            blocks: [
              {
                type: 'sql',
                label: 'delivery_fee.py',
                code: `cart_total = 350\nif cart_total >= 500:\n    shipping = 0\n    print("Free Delivery unlocked!")\nelse:\n    shipping = 50\n    print("Delivery fee: INR 50")\nprint("Final Payable:", cart_total + shipping)`,
                output: `Delivery fee: INR 50\nFinal Payable: 400`,
                captionEn: 'Since `350 >= 500` is `False`, Python skips Lines 3–4, runs Lines 6–7 (`shipping = 50`), and then runs Line 8 (`350 + 50 = 400`).',
                captionHi: '`350 >= 500` `False` hai, isliye Python Lines 3–4 skip karke `else` (Lines 6–7) chalata hai, aur final payable `400` aata hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 9',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Common Mistake: Never Put a Condition on `else:`',
        subtitle: '`else:` CATCHES EVERYTHING THAT WAS FALSE',
        sections: [
          {
            pill: 'Remember This Syntax Rule',
            blocks: [
              {
                type: 'note',
                tone: 'amber',
                bodyEn:
                  'Writing `else cart_total < 500:` causes a `SyntaxError`! The `else:` keyword takes **no condition** — it simply means *"in all other cases"* and ends immediately with a colon `:`.',
                bodyHi:
                  '`else cart_total < 500:` likhne par `SyntaxError` aata hai! `else:` ke saath koi condition nahi likhte — bas seedha `else:` likhte hain.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 9',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'TWO-WAY BRANCHING',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'In `if-else`, **exactly one** of the two branches executes every time.', hi: '`if-else` mein hamesha dono mein se **exact ek** branch chalti hai.' },
                  { en: '`else:` never takes a condition and aligns vertically with its matching `if`.', hi: '`else:` mein koi condition nahi hoti aur yeh apne `if` ke bilkul neeche aligned hota hai.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 63. The elif Statement
  63: {
    module: 'DS-M07',
    moduleTitle: 'Operators and Conditional Logic',
    topic: 'The elif Statement',
    pageCount: 3,
    sampleDataNotice: 'All Python examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 10',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'The elif Statement',
        subtitle: 'HANDLING THREE OR MORE CATEGORIES CLEANLY IN ORDER',
        intro: {
          icon: 'database',
          titleEn: '`elif` Means "Else If"',
          titleHi: '`elif` Ka Matlab Hai "Warna Agar"',
          bodyEn:
            'When you have **3 or more categories** (like Platinum / Gold / Silver customers, or Grades A / B / C / F), chain **`if` → `elif` → `elif` → `else`**. Python checks from **top to bottom** and stops at the **very first condition that is `True`**!',
          bodyHi:
            'Jab **3 ya zyada categories** hon (jaise Platinum / Gold / Silver), tab **`if` → `elif` → `else`** use karte hain. Python **upar se neeche** check karta hai aur **pehli `True` condition** milte hi baaki sab skip kar deta hai!',
        },
        sections: [
          {
            pill: 'Verified Customer Tier Classifier',
            blocks: [
              {
                type: 'sql',
                label: 'customer_tier.py',
                code: `annual_spend = 18000\nif annual_spend >= 50000:\n    tier = "Platinum"\nelif annual_spend >= 15000:\n    tier = "Gold"\nelif annual_spend >= 5000:\n    tier = "Silver"\nelse:\n    tier = "Standard"\nprint("Customer Tier:", tier)`,
                output: `Customer Tier: Gold`,
                captionEn: 'Trace: `18000 >= 50000` is `False` → `18000 >= 15000` is `True` → sets `"Gold"` and **skips** `Silver` and `Standard` immediately!',
                captionHi: 'Trace: `18000 >= 50000` False → `18000 >= 15000` True → `"Gold"` set hua aur neeche ke `Silver`/`Standard` skip ho gaye!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 10',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Why Order Matters in an `elif` Ladder!',
        subtitle: 'ALWAYS CHECK STRICTEST / HIGHEST THRESHOLDS FIRST',
        sections: [
          {
            pill: 'Order Trap Explained',
            blocks: [
              {
                type: 'note',
                tone: 'pink',
                bodyEn:
                  'If you put `if annual_spend >= 5000:` at the TOP before `>= 50000:`, then a Platinum customer spending `₹60,000` would match `>= 5000` first and wrongly get `"Silver"`! Always order numeric thresholds from **highest to lowest** (or lowest to highest consistently).',
                bodyHi:
                  'Agar aapne `>= 5000` sabse upar rakh diya, toh `₹60,000` kharch karne wala customer bhi pehle `>= 5000` match karke galti se `"Silver"` ban jaayega! Hamesha thresholds ko **highest se lowest** sahi order mein rakhein.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 10',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'MULTI-WAY CLASSIFICATION',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'In an `if / elif / else` chain, at most **one** branch runs — the **first** `True` branch from top to bottom.', hi: '`if / elif / else` mein upar se neeche **pehli `True` branch** hi chalti hai.' },
                  { en: 'Double-check threshold ordering so higher categories are not accidentally swallowed by lower ones.', hi: 'Threshold order hamesha check karein taaki badi category chhoti condition mein na phans jaaye.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 64. Nested Conditions
  64: {
    module: 'DS-M07',
    moduleTitle: 'Operators and Conditional Logic',
    topic: 'Nested Conditions',
    pageCount: 3,
    sampleDataNotice: 'All Python examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 11',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Nested Conditions',
        subtitle: 'PLACING AN `if` INSIDE ANOTHER `if` FOR MULTI-STEP CHECKS',
        intro: {
          icon: 'database',
          titleEn: 'When the Second Question Only Makes Sense If the First Passes',
          titleHi: 'Jab Dusra Sawaal Sirf Pehle Ke Pass Hone Par Hi Poocha Jaaye',
          bodyEn:
            'Think of airport security: **first** check if the passenger has a valid ticket; **only if yes**, check if their baggage weight is within the limit. Placing an `if` inside another `if` is called a **Nested Condition** (using 4 spaces for the outer block, and **8 spaces** for the inner block).',
          bodyHi:
            'Airport security sochiye: **pehle** valid ticket check hoti hai; **sirf tab** bag ka weight check hota hai. Ek `if` ke andar dusra `if` likhne ko **Nested Condition** kehte hain (outer block 4 spaces, inner block **8 spaces**).',
        },
        sections: [
          {
            pill: 'Verified Loan Pre-Check With Nested Conditions',
            blocks: [
              {
                type: 'sql',
                label: 'nested_loan.py',
                code: `age = 28\ncredit_score = 740\n\nif age >= 21:\n    if credit_score >= 700:\n        print("Status: Pre-Approved")\n    else:\n        print("Status: Low Credit Score")\nelse:\n    print("Status: Minimum age is 21")`,
                output: `Status: Pre-Approved`,
                captionEn: 'Outer `if` (`age >= 21`) is `True` → enters inner `if` (`credit_score >= 700`), which is also `True` → prints `"Status: Pre-Approved"`.',
                captionHi: 'Outer `if` (`age >= 21`) True hua → andar gaya → `credit_score >= 700` bhi True → `"Status: Pre-Approved"` print hua!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 11',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Keep Nesting Shallow for Clean Code',
        subtitle: 'AVOID 4–5 LEVELS OF DEEP INDENTATION',
        sections: [
          {
            pill: 'When to Use `and` Instead of Deep Nesting',
            blocks: [
              {
                type: 'note',
                tone: 'sky',
                bodyEn:
                  'Nested conditions are great when you want **different failure messages** for each step (like above). If you only need one Pass/Fail result, `if age >= 21 and credit_score >= 700:` is even cleaner and avoids deep indentation!',
                bodyHi:
                  'Jab har step par **alag error message** chahiye toh nested `if` accha hai. Agar sirf ek Yes/No chahiye, toh `if age >= 21 and credit_score >= 700:` aur bhi clean hota hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 11',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'CLEAN INDENTATION LEVELS',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Each nested level adds **+4 spaces** of indentation (`4` → `8` spaces).', hi: 'Har nested level par **+4 spaces** indentation badhti hai (`4` → `8`).' },
                  { en: 'Prefer `and` / `elif` whenever possible so your code stays flat and easy to read.', hi: 'Jahan ho sake `and` / `elif` use karein taaki code flat aur readable rahe.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 65. Practical Decision-Making Programs
  65: {
    module: 'DS-M07',
    moduleTitle: 'Operators and Conditional Logic',
    topic: 'Practical Decision-Making Programs',
    pageCount: 3,
    sampleDataNotice: 'All business discount calculations below are illustrative rule-based logic verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 12',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Practical Decision-Making Programs',
        subtitle: 'COMBINING OPERATORS, VARIABLES, AND CONDITIONS IN ONE REAL SCRIPT',
        intro: {
          icon: 'database',
          titleEn: 'Building a Complete E-Commerce Checkout Rule Engine',
          titleHi: 'Ek Complete E-Commerce Checkout Rule Script Banana',
          bodyEn:
            'Let us combine everything from Module 7 — **Arithmetic**, **Comparisons**, **Logical Operators**, and **`if/elif/else`** — into a clean, realistic order-pricing program.',
          bodyHi:
            'Aaiye Module 7 ki saari skills (**Arithmetic**, **Comparisons**, **Logical Operators**, aur **`if/elif/else`**) ko mila kar ek real order-pricing program banate hain.',
        },
        sections: [
          {
            pill: 'Complete Verified Rule-Based Checkout Program',
            blocks: [
              {
                type: 'sql',
                label: 'checkout_engine.py',
                code: `order_amount = 2400\nis_prime = True\ncoupon_valid = True\n\nif order_amount <= 0:\n    print("Error: Invalid order amount")\nelse:\n    discount_pct = 0.0\n    if order_amount >= 2000 and is_prime:\n        discount_pct = 0.15\n    elif order_amount >= 1000 or coupon_valid:\n        discount_pct = 0.10\n\n    discount = order_amount * discount_pct\n    final_bill = order_amount - discount\n    print(f"Discount ({int(discount_pct * 100)}%): INR {discount}")\n    print(f"Final Bill: INR {final_bill}")`,
                output: `Discount (15%): INR 360.0\nFinal Bill: INR 2040.0`,
                captionEn: 'Trace: `order_amount` is valid (`2400 > 0`) → `2400 >= 2000 and True` triggers `15%` discount (`2400 * 0.15 = 360.0`) → `2400 - 360.0 = 2040.0`.',
                captionHi: 'Trace: `2400 > 0` valid hai → `15%` discount laga (`360.0`) → Final Bill `2040.0` aaya!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 12',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Testing Edge Cases Before Trusting Your Program',
        subtitle: 'WHAT IF `order_amount` IS `0` OR `-100`?',
        sections: [
          {
            pill: 'Why We Added `if order_amount <= 0:` First',
            blocks: [
              {
                type: 'table',
                headers: ['Test Case', 'order_amount', 'is_prime', 'Expected Outcome'],
                rows: [
                  ['Invalid input', '`-50`', '`True`', 'Catches error safely: `"Error: Invalid order amount"`'],
                  ['Prime high order', '`2400`', '`True`', '`15%` discount → `INR 2040.0`'],
                  ['Small non-prime, no coupon', '`600`', '`False`', '`0%` discount → `INR 600.0`'],
                ],
                noteEn: 'Testing boundary and invalid cases is a hallmark of professional Data Science coding.',
                noteHi: 'Boundary aur invalid cases ko test karna professional coding ki pehchaan hai.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M07 | TOPIC 12',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Module 7 Complete — Key Takeaways',
        subtitle: 'READY FOR MODULE 8: LOOPS & PROBLEM-SOLVING',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Validate bad inputs (`<= 0`, `None`) at the top before running calculations.', hi: 'Calculations se pehle upar invalid inputs (`<= 0`, `None`) zaroor check karein.' },
                  { en: 'Next in Module 8, we learn **Loops** so Python can apply these rules across **thousands of orders** automatically!', hi: 'Ab Module 8 mein hum **Loops** seekhenge taaki Python yahi rules **hazaaron orders** par automatically chala sake!' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
