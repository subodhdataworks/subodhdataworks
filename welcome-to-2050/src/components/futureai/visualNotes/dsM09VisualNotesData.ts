import type { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

// ============================================================================
// MODULE 9 (DS-M09): Python Data Structures — Topics 76 to 87
// ============================================================================

export const DS_M09_VISUAL_NOTES: Record<number, StructuredVisualNoteTopic> = {
  // 76. Introduction to Data Structures
  76: {
    module: 'DS-M09',
    moduleTitle: 'Python Data Structures',
    topic: 'Introduction to Data Structures',
    pageCount: 3,
    sampleDataNotice: 'All Python data structure examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 1',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Introduction to Data Structures',
        subtitle: 'ORGANIZING MULTIPLE VALUES CLEANLY INSIDE ONE CONTAINER',
        intro: {
          icon: 'database',
          titleEn: 'Why Single Variables Are Not Enough for Real Datasets',
          titleHi: 'Real Datasets Ke Liye Single Variables Kaafi Kyun Nahi Hote?',
          bodyEn:
            'If a store has 500 products, creating `price1`, `price2`, ..., `price500` would be a nightmare! A **Data Structure** is a smart container that holds **many values together** in a specific way — Python’s 4 core built-in containers are **List**, **Tuple**, **Set**, and **Dictionary**.',
          bodyHi:
            '500 products ke liye 500 alag variables banana impossible hai! **Data Structure** ek container hota hai jo **bahut saari values ko ek saath** organize karta hai — Python ke 4 main containers hain **List**, **Tuple**, **Set**, aur **Dictionary**.',
        },
        sections: [
          {
            pill: 'The 4 Built-in Python Containers at a Glance',
            blocks: [
              {
                type: 'table',
                headers: ['Structure', 'Brackets', 'Ordered?', 'Mutable (Editable)?', 'Allows Duplicates?'],
                rows: [
                  ['**List**', '`[10, 20, 10]`', 'Yes', 'Yes (Editable)', 'Yes'],
                  ['**Tuple**', '`(10, 20, 10)`', 'Yes', 'No (Immutable)', 'Yes'],
                  ['**Set**', '`{10, 20}`', 'No positional order', 'Yes (add/remove)', 'No (Unique only!)'],
                  ['**Dictionary**', '`{"a": 10, "b": 20}`', 'Yes (insertion order)', 'Yes (Editable)', 'Keys unique; values can repeat'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 1',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Understanding Mutable vs Immutable',
        subtitle: 'CAN YOU CHANGE IT IN PLACE AFTER CREATING IT?',
        sections: [
          {
            pill: 'Simple Everyday Analogy',
            blocks: [
              {
                type: 'compare',
                items: [
                  { title: 'Mutable (Whiteboard)', bodyEn: 'You can add, update, or erase items in place without replacing the container (**List**, **Dictionary**, **Set**).', bodyHi: 'Whiteboard ki tarah: bana kar bhi items add, edit ya delete kar sakte hain (**List**, **Dict**, **Set**).', tone: 'sky' },
                  { title: 'Immutable (Printed Receipt)', bodyEn: 'Once created, its contents cannot be edited in place (**Tuple**, **String**). Safe for fixed records!', bodyHi: 'Printed receipt ki tarah: banne ke baad andar se badal nahi sakte (**Tuple**, **String**).', tone: 'lavender' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 1',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'FOUR CONTAINERS FOR EVERY DATA TASK',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Memorize the bracket shapes: `[]` = List, `()` = Tuple, `{}` = Set (or `{k: v}` = Dictionary).', hi: 'Brackets yaad rakhein: `[]` List, `()` Tuple, `{}` Set aur `{k: v}` Dictionary.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 77. Lists and List Indexing
  77: {
    module: 'DS-M09',
    moduleTitle: 'Python Data Structures',
    topic: 'Lists and List Indexing',
    pageCount: 3,
    sampleDataNotice: 'All list indexing examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 2',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Lists and List Indexing',
        subtitle: 'ZERO-BASED POSITIVE INDEXING, NEGATIVE INDEXING, AND MUTABILITY',
        intro: {
          icon: 'table',
          titleEn: 'Python Starts Counting at `0`, NOT `1`!',
          titleHi: 'Python Mein Counting `0` Se Shuru Hoti Hai, `1` Se Nahi!',
          bodyEn:
            'A **List** (`[...]`) stores an ordered, editable collection of items. Every position has an **Index**: **Positive indices** start at `0` from the left, and **Negative indices** start at `-1` from the right (last element).',
          bodyHi:
            '**List** (`[...]`) ordered aur editable collection hai. **Positive index** left se `0` se shuru hota hai, aur **Negative index** right (last item) se `-1` se!',
        },
        sections: [
          {
            pill: 'Visual Index Diagram: `cities = ["Pune", "Delhi", "Goa", "Kochi"]`',
            blocks: [
              {
                type: 'table',
                headers: ['Element', '"Pune"', '"Delhi"', '"Goa"', '"Kochi"'],
                rows: [
                  ['Positive Index (Left → Right)', '`0`', '`1`', '`2`', '`3`'],
                  ['Negative Index (Right → Left)', '`-4`', '`-3`', '`-2`', '`-1`'],
                ],
                noteEn: 'Notice: `cities[0]` is ALWAYS the first item, and `cities[-1]` is ALWAYS the last item regardless of list length!',
                noteHi: '`cities[0]` hamesha pehla item aur `cities[-1]` hamesha aakhiri item deta hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 2',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Reading and Updating List Elements (Mutable Behavior)',
        subtitle: 'BEFORE-AND-AFTER STATE IN MEMORY',
        sections: [
          {
            pill: 'Verified Indexing & In-Place Update',
            blocks: [
              {
                type: 'sql',
                label: 'list_indexing.py',
                code: `prices = [250, 400, 150, 900]\nprint("First:", prices[0])\nprint("Last:", prices[-1])\n\n# Lists are mutable -> update index 1 in place!\nprices[1] = 450\nprint("Updated list:", prices)`,
                output: `First: 250\nLast: 900\nUpdated list: [250, 450, 150, 900]`,
                captionEn: 'Changing `prices[1] = 450` replaced `400` directly inside the same list! Accessing `prices[10]` would raise an `IndexError`.',
                captionHi: '`prices[1] = 450` ne list ke andar `400` ko seedhe `450` bana diya! Out-of-range index dene par `IndexError` aata hai.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 2',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'MASTERING LIST POSITIONS',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Lists use **0-based indexing** (`0` to `len(lst) - 1`) and **negative indexing** (`-1` for the last element).', hi: 'Lists mein **0-based indexing** aur **negative indexing (`-1`)** dono kaam karte hain.' },
                  { en: 'Lists are **mutable**: you can directly update `lst[i] = new_value`.', hi: 'Lists **mutable** hoti hain — `lst[i] = new_value` se seedha edit kar sakte hain.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 78. List Slicing and Methods
  78: {
    module: 'DS-M09',
    moduleTitle: 'Python Data Structures',
    topic: 'List Slicing and Methods',
    pageCount: 3,
    sampleDataNotice: 'All list slicing and method outputs below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 3',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'List Slicing and Methods',
        subtitle: 'EXTRACTING SUB-LISTS AND ADDING, REMOVING, OR SORTING ITEMS',
        intro: {
          icon: 'database',
          titleEn: 'Slicing Syntax: `my_list[start : stop : step]`',
          titleHi: 'Slicing Formula: `my_list[start : stop : step]`',
          bodyEn:
            'Just like `range()`, **List Slicing** includes `start` and **excludes `stop`**! Slicing always returns a **brand-new sub-list** without modifying the original list.',
          bodyHi:
            '`range()` ki tarah **List Slicing** mein `start` include aur `stop` **exclude** hota hai — aur yeh hamesha ek nayi sub-list deta hai.',
        },
        sections: [
          {
            pill: 'Verified Slicing Examples',
            blocks: [
              {
                type: 'sql',
                label: 'list_slicing.py',
                code: `sales = [100, 200, 300, 400, 500]\nprint("First 3:", sales[:3])\nprint("Middle (1 to 3):", sales[1:4])\nprint("Last 2:", sales[-2:])\nprint("Every 2nd:", sales[::2])`,
                output: `First 3: [100, 200, 300]\nMiddle (1 to 3): [200, 300, 400]\nLast 2: [400, 500]\nEvery 2nd: [100, 300, 500]`,
                captionEn: '`sales[1:4]` grabs indices `1, 2, 3` (stops before index `4`). Omitting `start` starts from `0`; omitting `stop` goes to the end.',
                captionHi: '`sales[1:4]` indices `1, 2, 3` leta hai (index `4` exclude).',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 3',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Essential List Methods (Before → After)',
        subtitle: 'APPEND, INSERT, REMOVE, POP, AND SORT',
        sections: [
          {
            pill: 'Verified List Methods Demo',
            blocks: [
              {
                type: 'sql',
                label: 'list_methods.py',
                code: `cart = ["Milk", "Bread"]\ncart.append("Eggs")         # Add at end\ncart.insert(1, "Butter")    # Add at index 1\nremoved = cart.pop()        # Remove & return last item\ncart.sort()                 # Sort alphabetically in place\nprint("Removed:", removed)\nprint("Final cart:", cart)`,
                output: `Removed: Eggs\nFinal cart: ['Bread', 'Butter', 'Milk']`,
                captionEn: 'Important: `.append()`, `.insert()`, and `.sort()` modify the list **in place** and return `None` — never write `cart = cart.sort()`!',
                captionHi: 'Zaroori: `.append()`, `.insert()`, `.sort()` list ko **in-place** badalte hain aur `None` return karte hain — kabhi `cart = cart.sort()` mat likhein!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 3',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'EVERYDAY LIST TOOLKIT',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Slicing `lst[start:stop]` excludes `stop` and returns a new list.', hi: 'Slicing `lst[start:stop]` `stop` ko exclude karke nayi list deta hai.' },
                  { en: 'Use `.append()` to add at end, `.pop()` to remove by index, `.remove(val)` to remove by value, and `sorted(lst)` when you want a sorted copy without altering the original.', hi: 'Original list safe rakh kar sort karne ke liye `sorted(lst)` use karein.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 79. Tuples and Tuple Operations
  79: {
    module: 'DS-M09',
    moduleTitle: 'Python Data Structures',
    topic: 'Tuples and Tuple Operations',
    pageCount: 3,
    sampleDataNotice: 'All tuple outputs and intentional TypeError demo below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 4',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Tuples and Tuple Operations',
        subtitle: 'ORDERED, IMMUTABLE COLLECTIONS FOR FIXED RECORDS',
        intro: {
          icon: 'database',
          titleEn: 'Why Use a Tuple When Lists Already Exist?',
          titleHi: 'List Hote Hue Tuple Kyun Use Karte Hain?',
          bodyEn:
            'A **Tuple** (`(...)`) is like a read-only List: it is **ordered** and supports **indexing/slicing**, yet it is **Immutable** — once created, nobody can accidentally alter or delete its items! Great for fixed GPS coordinates `(lat, lon)`, RGB colors, or database row records.',
          bodyHi:
            '**Tuple** (`(...)`) ek read-only List jaisa hota hai: yeh **ordered** aur **indexed** hai, par **Immutable** hai — banne ke baad koi galti se edit nahi kar sakta!',
        },
        sections: [
          {
            pill: 'Indexing, Unpacking, and Single-Item Tuple Rule',
            blocks: [
              {
                type: 'sql',
                label: 'tuple_demo.py',
                code: `store_location = (18.52, 73.85)\nlat, lon = store_location  # Tuple unpacking!\nprint("Latitude:", lat, "| Longitude:", lon)\n\nsingle_tuple = ("Pune",)   # Trailing comma makes it a tuple!\nprint(type(single_tuple))`,
                output: `Latitude: 18.52 | Longitude: 73.85\n<class 'tuple'>`,
                captionEn: 'Tuple **Unpacking** (`lat, lon = store_location`) assigns each element to its own variable cleanly in one line! Note the trailing comma in `("Pune",)`.',
                captionHi: 'Tuple **Unpacking** (`lat, lon = store_location`) ek line mein har item ko alag variable mein daal deta hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 4',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Proof of Immutability',
        subtitle: 'TRYING TO EDIT A TUPLE RAISES `TypeError`',
        sections: [
          {
            pill: 'Intentional Error Demo',
            blocks: [
              {
                type: 'sql',
                label: 'tuple_error.py (INTENTIONAL ERROR)',
                code: `coords = (18.52, 73.85)\ncoords[0] = 19.00`,
                output: `TypeError: 'tuple' object does not support item assignment`,
                isError: true,
                captionEn: 'Python protects your tuple from accidental edits by raising `TypeError`!',
                captionHi: 'Python tuple ko galti se edit hone se rokta hai aur `TypeError` deta hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 4',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'SAFE FIXED DATA',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Tuples are **ordered** and **immutable** — ideal for fixed coordinates, dimensions, and returning multiple values from functions.', hi: 'Tuples **ordered** aur **immutable** hote hain — fixed records aur function multiple returns ke liye best.' },
                  { en: 'A 1-element tuple MUST have a trailing comma: `(42,)`, otherwise `(42)` is just an integer!', hi: '1-item tuple mein trailing comma zaroori hai: `(42,)`.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 80. Sets and Set Operations
  80: {
    module: 'DS-M09',
    moduleTitle: 'Python Data Structures',
    topic: 'Sets and Set Operations',
    pageCount: 3,
    sampleDataNotice: 'All set operation examples below are verified in Python 3; sets do not support positional indexing.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 5',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Sets and Set Operations',
        subtitle: 'AUTOMATIC DUPLICATE REMOVAL AND FAST MEMBERSHIP & OVERLAP CHECKS',
        intro: {
          icon: 'database',
          titleEn: 'What Is a Set? (Unique Elements Only — No Indexing!)',
          titleHi: 'Set Kya Hota Hai? (Sirf Unique Items — Koi Index Nahi!)',
          bodyEn:
            'A **Set** (`{...}`) stores **unique elements only** — duplicates are automatically removed! **Important technical fact:** Sets have **NO positional indexing** (you cannot write `my_set[0]`) and **no guaranteed iteration order**. They are super fast for checking membership (`in`) and comparing two groups.',
          bodyHi:
            '**Set** (`{...}`) sirf **unique elements** rakhta hai — duplicates apne aap hat jaate hain! **Zaroori baat:** Sets mein **koi positional index (`my_set[0]`) nahi hota** aur order guaranteed nahi hota.',
        },
        sections: [
          {
            pill: 'Instant Deduplication + Union, Intersection, Difference',
            blocks: [
              {
                type: 'sql',
                label: 'set_ops.py',
                code: `jan_buyers = {"Asha", "Ravi", "Meera", "Asha"}\nfeb_buyers = {"Ravi", "Kabir", "Meera"}\n\nprint("Unique Jan count:", len(jan_buyers))\nprint("Both months (Intersection):", sorted(jan_buyers & feb_buyers))\nprint("All unique (Union):", sorted(jan_buyers | feb_buyers))\nprint("Only Jan (Difference):", sorted(jan_buyers - feb_buyers))`,
                output: `Unique Jan count: 3\nBoth months (Intersection): ['Meera', 'Ravi']\nAll unique (Union): ['Asha', 'Kabir', 'Meera', 'Ravi']\nOnly Jan (Difference): ['Asha']`,
                captionEn: 'Look how effortlessly Sets answer real Data Science questions: *"Which customers bought in BOTH January and February?"* (`jan_buyers & feb_buyers`)! We used `sorted(...)` only to print in deterministic alphabetical order.',
                captionHi: 'Sets se real Data Science sawaal 1 line mein solve hote hain: dono mahine kharidne wale customers (`&`), total unique (`|`), sirf Jan wale (`-`)!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 5',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Empty Set Trap: `{}` vs `set()`',
        subtitle: 'A CLASSIC PYTHON GOTCHA',
        sections: [
          {
            pill: 'Remember This Rule',
            blocks: [
              {
                type: 'note',
                tone: 'amber',
                bodyEn:
                  'In Python, empty curly braces `{}` create an **empty Dictionary**, NOT a Set! To create an empty Set, always write **`set()`**.',
                bodyHi:
                  'Python mein `{}` **empty Dictionary** banata hai, Set nahi! Empty Set banane ke liye hamesha **`set()`** likhein.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 5',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'UNIQUE VALUES & GROUP OVERLAP',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Sets automatically remove duplicates and give ultra-fast `x in my_set` membership checks.', hi: 'Sets duplicates hatate hain aur fast membership check (`in`) dete hain.' },
                  { en: 'Use `|` (Union), `&` (Intersection), and `-` (Difference) to compare customer or product groups.', hi: 'Groups compare karne ke liye `|` (Union), `&` (Intersection), aur `-` (Difference) use karein.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 81. Dictionaries and Key-Value Pairs
  81: {
    module: 'DS-M09',
    moduleTitle: 'Python Data Structures',
    topic: 'Dictionaries and Key-Value Pairs',
    pageCount: 3,
    sampleDataNotice: 'All dictionary examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 6',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Dictionaries and Key-Value Pairs',
        subtitle: 'LOOKING UP VALUES BY MEANINGFUL LABELS INSTEAD OF NUMBERS',
        intro: {
          icon: 'table',
          titleEn: 'Think of a Phonebook: Look Up by Name (Key) → Get Number (Value)',
          titleHi: 'Phonebook Sochiye: Naam (Key) Se Number (Value) Turant Mile!',
          bodyEn:
            'A **Dictionary (`dict`)** stores **`key: value`** pairs inside `{...}`. Instead of remembering that City is at index `2`, you simply write **`customer["city"]`**! Dictionaries mirror real-world **JSON records** and **table rows**.',
          bodyHi:
            '**Dictionary (`dict`)** `{...}` ke andar **`key: value`** pairs store karta hai. Index `2` yaad rakhne ke bajay aap seedha **`customer["city"]`** likhte hain!',
        },
        sections: [
          {
            pill: 'Creating, Accessing, Adding, and Updating a Dictionary',
            blocks: [
              {
                type: 'sql',
                label: 'dict_basics.py',
                code: `customer = {\n    "id": "C-101",\n    "name": "Priya",\n    "city": "Indore",\n    "orders": 4\n}\nprint("Name:", customer["name"])\ncustomer["orders"] = 5          # Update existing key\ncustomer["tier"] = "Silver"     # Add new key\nprint(customer)`,
                output: `Name: Priya\n{'id': 'C-101', 'name': 'Priya', 'city': 'Indore', 'orders': 5, 'tier': 'Silver'}`,
                captionEn: 'If the key exists (`"orders"`), assignment updates it; if the key is new (`"tier"`), Python adds it cleanly!',
                captionHi: 'Agar key pehle se hai toh update hoti hai, nayi key ho toh add ho jaati hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 6',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Conceptual Key → Value Memory Map',
        subtitle: 'KEYS MUST BE UNIQUE AND IMMUTABLE',
        sections: [
          {
            pill: 'Visual Dictionary Structure',
            blocks: [
              {
                type: 'table',
                headers: ['Key (Unique Label)', 'Arrow', 'Value (Any Data Type)'],
                rows: [
                  ['`"id"`', '→', '`"C-101"` (`str`)'],
                  ['`"name"`', '→', '`"Priya"` (`str`)'],
                  ['`"orders"`', '→', '`5` (`int`)'],
                  ['`"tier"`', '→', '`"Silver"` (`str`)'],
                ],
                noteEn: 'Dictionary keys must be unique and immutable (like strings, integers, or tuples — never lists). Values can be anything!',
                noteHi: 'Keys hamesha unique aur immutable (str, int, tuple) hoti hain; Values kuch bhi ho sakti hain!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 6',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'THE BACKBONE OF JSON & TABULAR RECORDS',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Dictionaries map unique **Keys** to **Values** for instant, readable lookups (`record["city"]`).', hi: 'Dictionaries unique **Keys** ko **Values** se map karte hain (`record["city"]`).' },
                  { en: 'Accessing a missing key with `d["missing"]` raises `KeyError` — next lesson shows `.get()` to handle it safely!', hi: 'Missing key par `d["missing"]` `KeyError` deta hai — agle lesson mein `.get()` se safe lookup seekhenge!' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 82. Dictionary Methods
  82: {
    module: 'DS-M09',
    moduleTitle: 'Python Data Structures',
    topic: 'Dictionary Methods',
    pageCount: 3,
    sampleDataNotice: 'All dictionary method outputs below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 7',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Dictionary Methods',
        subtitle: 'SAFE LOOKUPS WITH `.get()` AND CLEAN LOOPING WITH `.items()`',
        intro: {
          icon: 'database',
          titleEn: 'Avoid `KeyError` Crashes on Messy Data!',
          titleHi: 'Messy Data Par `KeyError` Crash Se Bachiye!',
          bodyEn:
            'In real JSON and API responses, optional fields (like `"coupon"`) are often missing. Calling **`record.get("coupon", "None")`** safely returns `"None"` instead of crashing your entire script!',
          bodyHi:
            'Real JSON ya API data mein optional fields aksar missing hote hain. **`record.get("coupon", "None")`** crash karne ke bajay safe default value deta hai!',
        },
        sections: [
          {
            pill: 'Verified `.get()`, `.items()`, `.keys()`, `.values()`, and `.pop()`',
            blocks: [
              {
                type: 'sql',
                label: 'dict_methods.py',
                code: `sales_by_city = {"Pune": 1200, "Delhi": 1800, "Goa": 900}\nprint("Jaipur sales:", sales_by_city.get("Jaipur", 0))\n\nfor city, amount in sales_by_city.items():\n    print(f"{city}: INR {amount}")\n\nremoved = sales_by_city.pop("Goa")\nprint("Removed Goa:", removed, "| Remaining keys:", list(sales_by_city.keys()))`,
                output: `Jaipur sales: 0\nPune: INR 1200\nDelhi: INR 1800\nGoa: INR 900\nRemoved Goa: 900 | Remaining keys: ['Pune', 'Delhi']`,
                captionEn: '`.items()` unpacks both `city` (key) and `amount` (value) cleanly inside a `for` loop!',
                captionHi: '`.items()` loop ke andar key aur value dono ek saath cleanly de deta hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 7',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Data Science Pattern: Frequency Counting With `.get()`',
        subtitle: 'COUNTING HOW MANY ORDERS CAME FROM EACH CITY',
        sections: [
          {
            pill: 'The Classic Counter Dictionary',
            blocks: [
              {
                type: 'sql',
                label: 'city_counts.py',
                code: `orders_city = ["Pune", "Delhi", "Pune", "Goa", "Pune"]\ncounts = {}\nfor c in orders_city:\n    counts[c] = counts.get(c, 0) + 1\nprint(counts)`,
                output: `{'Pune': 3, 'Delhi': 1, 'Goa': 1}`,
                captionEn: '`counts.get(c, 0) + 1` is one of the most useful idioms in all of Python Data Science!',
                captionHi: '`counts.get(c, 0) + 1` Python Data Science mein frequency count karne ka sabse famous pattern hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 7',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'SAFE & IDIOMATIC DICTIONARIES',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Use `.get(key, default)` for safe lookups without `KeyError`.', hi: 'Safe lookup ke liye `.get(key, default)` use karein.' },
                  { en: 'Use `.items()` to loop over keys and values together cleanly.', hi: 'Keys aur values saath loop karne ke liye `.items()` use karein.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 83. Strings and String Indexing
  83: {
    module: 'DS-M09',
    moduleTitle: 'Python Data Structures',
    topic: 'Strings and String Indexing',
    pageCount: 3,
    sampleDataNotice: 'All string indexing examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 8',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Strings and String Indexing',
        subtitle: 'CHARACTER POSITIONS AND STRING IMMUTABILITY',
        intro: {
          icon: 'table',
          titleEn: 'Every Character in a String Has an Index Position',
          titleHi: 'String Ke Har Character Ka Apna Index Hota Hai',
          bodyEn:
            'Just like Lists, **Strings** support **0-based positive indexing** and **negative indexing** (`-1` for the last character). Unlike Lists, Strings are **Immutable** — you cannot change one letter in place (`word[0] = "B"` raises `TypeError`).',
          bodyHi:
            'Lists ki tarah **Strings** mein bhi positive (`0` se) aur negative (`-1` se) indexing hoti hai, lekin Strings **Immutable** hoti hain — unhe in-place edit nahi kar sakte.',
        },
        sections: [
          {
            pill: 'Character Index Table for `code = "IND-9"`',
            blocks: [
              {
                type: 'table',
                headers: ['Character', "'I'", "'N'", "'D'", "'-'", "'9'"],
                rows: [
                  ['Positive Index', '`0`', '`1`', '`2`', '`3`', '`4`'],
                  ['Negative Index', '`-5`', '`-4`', '`-3`', '`-2`', '`-1`'],
                ],
              },
              {
                type: 'sql',
                label: 'string_index.py',
                code: `code = "IND-9"\nprint("First:", code[0], "| Last:", code[-1], "| Length:", len(code))`,
                output: `First: I | Last: 9 | Length: 5`,
                captionEn: '`len("IND-9")` is `5` (indices `0` through `4`).',
                captionHi: '`len("IND-9")` `5` hai (indices `0` se `4`).',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 8',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Strings Are Immutable',
        subtitle: 'BUILD A NEW STRING INSTEAD OF MODIFYING IN PLACE',
        sections: [
          {
            pill: 'Correct Way to Change a String',
            blocks: [
              {
                type: 'sql',
                label: 'string_immutable.py',
                code: `code = "IND-9"\nnew_code = code[:4] + "8"\nprint("Original:", code, "| New:", new_code)`,
                output: `Original: IND-9 | New: IND-8`,
                captionEn: 'Since strings are immutable, operations always create a **new string** while leaving the original untouched.',
                captionHi: 'Strings immutable hoti hain, isliye hum nayi string banate hain (`new_code`) aur original safe rehti hai.',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 8',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'CHARACTER-LEVEL ACCESS',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Strings use 0-based and `-1` negative indexing and are **immutable**.', hi: 'Strings 0-based aur `-1` indexing support karti hain aur **immutable** hoti hain.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 84. String Slicing and Methods
  84: {
    module: 'DS-M09',
    moduleTitle: 'Python Data Structures',
    topic: 'String Slicing and Methods',
    pageCount: 3,
    sampleDataNotice: 'All string cleaning examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 9',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'String Slicing and Methods',
        subtitle: 'THE TEXT-CLEANING TOOLKIT EVERY DATA SCIENTIST USES DAILY',
        intro: {
          icon: 'database',
          titleEn: 'Cleaning Messy Real-World Text in Seconds',
          titleHi: 'Messy Text Data Ko Seconds Mein Clean Karna',
          bodyEn:
            'Remember Module 4’s messy city names (`"  mumbai "`) and currency strings (`"₹1,200"`)? Python’s built-in **String Methods** (`.strip()`, `.title()`, `.lower()`, `.replace()`, `.split()`, `.join()`) clean them effortlessly!',
          bodyHi:
            'Python ke built-in **String Methods** (`.strip()`, `.title()`, `.lower()`, `.replace()`, `.split()`, `.join()`) messy names, currency text aur CSV lines ko turant clean kar dete hain!',
        },
        sections: [
          {
            pill: 'Verified Data Cleaning With String Methods',
            blocks: [
              {
                type: 'sql',
                label: 'string_clean.py',
                code: `raw_city = "  new delhi  "\nclean_city = raw_city.strip().title()\n\nraw_price = "INR 1,250"\nclean_price = int(raw_price.replace("INR ", "").replace(",", ""))\n\ncsv_row = "ORD-101,Pune,500"\nparts = csv_row.split(",")\n\nprint("City:", clean_city)\nprint("Price:", clean_price)\nprint("Split parts:", parts)\nprint("Prefix:", parts[0][:3])`,
                output: `City: New Delhi\nPrice: 1250\nSplit parts: ['ORD-101', 'Pune', '500']\nPrefix: ORD`,
                captionEn: 'Look at that pipeline: `.strip()` removes outer spaces, `.title()` fixes casing, `.replace()` cleans currency/commas, `.split(",")` splits CSV text into a list, and `[:3]` slices `"ORD"`!',
                captionHi: '`.strip()`, `.title()`, `.replace()`, `.split(",")` aur slicing `[:3]` milkar messy raw text ko clean structured data bana dete hain!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 9',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Remember: String Methods Return a NEW String!',
        subtitle: 'ASSIGN THE RESULT BACK TO A VARIABLE',
        sections: [
          {
            pill: 'Classic Beginner Bug vs Fix',
            blocks: [
              {
                type: 'compare',
                items: [
                  { title: 'Bug (Forgot Assignment)', bodyEn: '`city.strip()` alone does NOT change `city` because strings are immutable!', bodyHi: 'Sirf `city.strip()` likhne se `city` nahi badalta!', tone: 'pink' },
                  { title: 'Fix (Save Return Value)', bodyEn: '`city = city.strip()` saves the cleaned string back into `city`!', bodyHi: '`city = city.strip()` se cleaned string save hoti hai!', tone: 'green' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 9',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'ESSENTIAL TEXT METHODS',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Master `.strip()`, `.lower()`, `.upper()`, `.title()`, `.replace()`, `.split()`, and `" ".join(list)`.', hi: '`.strip()`, `.lower()`, `.title()`, `.replace()`, `.split()`, aur `.join()` har Data Scientist ke daily tools hain.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 85. Nested Lists and Dictionaries
  85: {
    module: 'DS-M09',
    moduleTitle: 'Python Data Structures',
    topic: 'Nested Lists and Dictionaries',
    pageCount: 3,
    sampleDataNotice: 'Illustrative order records below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 10',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Nested Lists and Dictionaries',
        subtitle: 'HOW REAL TABLES AND JSON APIS ARE REPRESENTED IN PYTHON',
        intro: {
          icon: 'table',
          titleEn: 'A List of Dictionaries = A Complete Mini Table!',
          titleHi: 'List of Dictionaries = Ek Poora Mini Dataset Table!',
          bodyEn:
            'When you put **Dictionaries inside a List** (`[{...}, {...}]`), each dictionary is one **Row** and its keys are the **Column names**! This is the exact structure returned by most web APIs and JSON files.',
          bodyHi:
            'Jab aap **List ke andar Dictionaries** rakhte hain (`[{...}, {...}]`), toh har dictionary ek **Row** aur uski keys **Columns** ban jaati hain — bilkul real JSON data ki tarah!',
        },
        sections: [
          {
            pill: 'Verified List-of-Dictionaries Traversal',
            blocks: [
              {
                type: 'sql',
                label: 'nested_orders.py',
                code: `orders = [\n    {"id": "O1", "city": "Pune", "amount": 600},\n    {"id": "O2", "city": "Delhi", "amount": 1200},\n    {"id": "O3", "city": "Pune", "amount": 400},\n]\n\npune_total = 0\nfor row in orders:\n    if row["city"] == "Pune":\n        pune_total += row["amount"]\n\nprint("First order city:", orders[0]["city"])\nprint("Pune Total Sales: INR", pune_total)`,
                output: `First order city: Pune\nPune Total Sales: INR 1000`,
                captionEn: 'Chain lookups step by step: `orders[0]` gets the first dictionary, then `["city"]` gets `"Pune"`. Looping over `orders` sums Pune sales (`600 + 400 = 1000`)!',
                captionHi: '`orders[0]["city"]` pehle row ka city nikaalta hai, aur loop ne Pune ka total `600 + 400 = 1000` calculate kiya!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 10',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Reading Chained Brackets From Left to Right',
        subtitle: 'UNPACKING NESTED STRUCTURES CALMLY',
        sections: [
          {
            pill: 'Step-by-Step Mental Model',
            blocks: [
              {
                type: 'flow',
                items: [
                  { title: '1. `orders`', bodyEn: 'The outer List containing 3 rows.', bodyHi: 'Outer List jisme 3 rows hain.', tone: 'sky' },
                  { title: '2. `orders[1]`', bodyEn: 'Picks the 2nd Dictionary (`O2`, Delhi, 1200).', bodyHi: '2nd Dictionary (`O2`) pick karta hai.', tone: 'amber' },
                  { title: '3. `orders[1]["amount"]`', bodyEn: 'Extracts the integer `1200`!', bodyHi: 'Uske andar se `1200` nikaal leta hai!', tone: 'green' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 10',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'WORKING WITH REAL-WORLD JSON DATA',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'A **List of Dictionaries** is the standard core-Python representation of tabular/JSON datasets.', hi: '**List of Dictionaries** core Python mein tables aur JSON data ko represent karne ka standard tareeka hai.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 86. Choosing the Right Data Structure
  86: {
    module: 'DS-M09',
    moduleTitle: 'Python Data Structures',
    topic: 'Choosing the Right Data Structure',
    pageCount: 3,
    sampleDataNotice: 'Decision matrix below summarizes best-practice Python container choices.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 11',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Choosing the Right Data Structure',
        subtitle: 'PICKING LIST, TUPLE, SET, OR DICTIONARY LIKE A PRO',
        intro: {
          icon: 'database',
          titleEn: 'The Right Container Makes Your Code Twice as Simple',
          titleHi: 'Sahi Container Chunne Se Code Aadha Aur Clean Ho Jaata Hai',
          bodyEn:
            'Every Data Structure shines at a specific job. Use this simple decision table whenever you start writing a new Python script.',
          bodyHi:
            'Har Data Structure ek khaas kaam ke liye best hota hai — naya program shuru karte waqt is table ko guide banayein.',
        },
        sections: [
          {
            pill: 'Data Structure Selection Guide',
            blocks: [
              {
                type: 'table',
                headers: ['What You Need', 'Best Choice', 'Real Data Science Example'],
                rows: [
                  ['Ordered list that grows/changes & allows duplicates', '**List (`[]`)**', 'Daily order amounts `[450, 1200, 450]`'],
                  ['Fixed ordered record that must NOT change', '**Tuple (`()`)**', 'Store coordinates `(18.52, 73.85)`'],
                  ['Unique items only + fast membership/overlap', '**Set (`set()`)**', 'Unique active customer IDs across months'],
                  ['Labeled fields or fast lookup by ID/Name', '**Dictionary (`{}`)**', 'Product price lookup `{"Milk": 60, "Bread": 40}`'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 11',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Key Takeaways',
        subtitle: 'THINK BEFORE YOU CODE',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Need **key → value**? Use **Dict**. Need **unique items**? Use **Set**. Need **fixed unchangeable tuple**? Use **Tuple**. Otherwise use **List**!', hi: '**Key → Value** ke liye **Dict**, **Unique** ke liye **Set**, **Fixed** ke liye **Tuple**, baaki sabke liye **List**!' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 11',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Performance Note for Large Datasets',
        subtitle: 'WHY `x in my_set` BEATS `x in my_list`',
        sections: [
          {
            pill: 'Simple Conceptual Reason',
            blocks: [
              {
                type: 'note',
                tone: 'sky',
                bodyEn:
                  'Checking if an ID exists in a 100,000-item **List** scans items one by one. Checking in a **Set** or **Dictionary** jumps straight to the answer in near-instant time!',
                bodyHi:
                  '1 lakh items ki **List** mein `in` check karne par ek-ek item scan hota hai, jabki **Set** ya **Dictionary** mein lookup turant (almost instant) hota hai!',
              },
            ],
          },
        ],
      },
    ],
  },

  // 87. Practical Data Structure Exercises
  87: {
    module: 'DS-M09',
    moduleTitle: 'Python Data Structures',
    topic: 'Practical Data Structure Exercises',
    pageCount: 3,
    sampleDataNotice: 'All retail summary calculations below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 12',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Practical Data Structure Exercises',
        subtitle: 'COMBINING LISTS, DICTIONARIES, SETS, AND STRINGS ON ONE DATASET',
        intro: {
          icon: 'table',
          titleEn: 'Guided Mini-Challenge: Category Sales & Unique Buyers',
          titleHi: 'Guided Practical: Category-Wise Sales Aur Unique Customers',
          bodyEn:
            'Given a list of raw retail transaction dictionaries (with messy category spacing), let us compute **Revenue per Category** (using a Dictionary) and **Unique Buyers** (using a Set)!',
          bodyHi:
            'Messy retail transactions ki list se hum **Category-wise Revenue** (Dictionary) aur **Unique Customers** (Set) dono ek saath nikaalenge!',
        },
        sections: [
          {
            pill: 'Complete Verified Solution',
            blocks: [
              {
                type: 'sql',
                label: 'ds_structures_lab.py',
                code: `transactions = [\n    {"buyer": "Asha", "cat": " books ", "amt": 400},\n    {"buyer": "Ravi", "cat": "Electronics", "amt": 1500},\n    {"buyer": "Asha", "cat": "BOOKS", "amt": 300},\n]\n\ncat_totals = {}\nunique_buyers = set()\n\nfor tx in transactions:\n    clean_cat = tx["cat"].strip().title()\n    cat_totals[clean_cat] = cat_totals.get(clean_cat, 0) + tx["amt"]\n    unique_buyers.add(tx["buyer"])\n\nprint("Category Revenue:", cat_totals)\nprint("Unique Buyers Count:", len(unique_buyers))`,
                output: `Category Revenue: {'Books': 700, 'Electronics': 1500}\nUnique Buyers Count: 2`,
                captionEn: 'Notice how every Module 9 skill clicked together: String `.strip().title()` unified `" books "` and `"BOOKS"` into `"Books"` (`400 + 300 = 700`), and `set` deduplicated `"Asha"` to give `2` unique buyers!',
                captionHi: 'Dekhiye kaise saari skills ek saath kaam aayin: String cleaning ne `"Books"` unify kiya (`700`), aur Set ne unique buyers `2` nikale!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 12',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Module 9 Complete — Key Takeaways',
        subtitle: 'READY FOR MODULE 10: FUNCTIONS, MODULES & ERROR HANDLING',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Combining **List of Dicts + String cleaning + Dict aggregation + Set deduplication** solves a huge share of everyday Data Science tasks in pure Python!', hi: '**List of Dicts + String cleaning + Dict aggregation + Set** pure Python mein adhiktar real data tasks solve kar dete hain!' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M09 | TOPIC 12',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'What Comes Next in Module 10?',
        subtitle: 'TURNING REPEATED LOGIC INTO REUSABLE FUNCTIONS',
        sections: [
          {
            pill: 'Looking Ahead',
            blocks: [
              {
                type: 'note',
                tone: 'lavender',
                bodyEn:
                  'In Module 10, you will package cleaning and summary logic into reusable **Functions**, import **Modules**, handle **Exceptions** safely, and read/write **real files**!',
                bodyHi:
                  'Module 10 mein hum is logic ko reusable **Functions** mein pack karenge, **Modules** import karenge, **Exceptions** handle karenge, aur **files read/write** karenge!',
              },
            ],
          },
        ],
      },
    ],
  },
};
