import type { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

// ============================================================================
// MODULE 11 (DS-M11): OOP and Development Tools — Topics 102 to 111
// ============================================================================

export const DS_M11_VISUAL_NOTES: Record<number, StructuredVisualNoteTopic> = {
  // 102. Introduction to Object-Oriented Programming
  102: {
    module: 'DS-M11',
    moduleTitle: 'Object-Oriented Programming and Development Tools',
    topic: 'Introduction to Object-Oriented Programming',
    pageCount: 2,
    sampleDataNotice: 'All analogies and Data Science connections below are illustrative educational explanations.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 1',
        pageTag: 'PAGE 1 OF 2',
        footerPage: '1 / 2',
        title: 'Introduction to Object-Oriented Programming',
        subtitle: 'BUNDLING DATA AND BEHAVIOR TOGETHER LIKE REAL-WORLD OBJECTS',
        intro: {
          icon: 'database',
          titleEn: 'Start With a Familiar Real-Life Analogy',
          titleHi: 'Asli Zindagi Ke Example Se OOP Samajhiye',
          bodyEn:
            'Think of a **House Blueprint** vs **Real Houses** built from it. One blueprint defines what every house has (rooms, color, area) and what it can do (open door, turn on lights). From that single blueprint (**Class**), you can build many independent houses (**Objects**), each with its own color and owner! **Object-Oriented Programming (OOP)** organizes code the exact same way — keeping related data (**Attributes**) and actions (**Methods**) neatly bundled together.',
          bodyHi:
            'Ek **Ghar ka Naksha (Blueprint)** aur usse bane **Asli Ghar** sochiye! Ek naksha (**Class**) batata hai ghar mein kya hoga, aur usse kayi alag-alag ghar (**Objects**) ban sakte hain — har ek ka apna color aur owner! **OOP** data (**Attributes**) aur actions (**Methods**) ko ek saath neatly bundle karta hai.',
        },
        sections: [
          {
            pill: 'Why Data Scientists Care About OOP',
            blocks: [
              {
                type: 'compare',
                items: [
                  { title: 'You Already Use Objects!', bodyEn: 'In Python, `"hello".upper()` and `my_list.append(5)` are calling **Methods** on String and List **Objects**!', bodyHi: '`"hello".upper()` aur `my_list.append(5)` mein aap pehle se **Objects** ke **Methods** use kar rahe hain!', tone: 'sky' },
                  { title: 'Future Data Science Tools', bodyEn: 'Pandas DataFrames and Scikit-learn ML models are all **Classes & Objects** (`model.fit()`, `model.predict()`).', bodyHi: 'Aage Pandas DataFrames aur ML models sab **Classes & Objects** par hi bane hote hain!', tone: 'lavender' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 1',
        pageTag: 'PAGE 2 OF 2',
        footerPage: '2 / 2',
        title: 'Key Takeaways',
        subtitle: 'BLUEPRINT VS INSTANCE',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: '**Class** = blueprint; **Object** = an individual instance created from that blueprint; **Attributes** = data; **Methods** = actions.', hi: '**Class** = blueprint; **Object** = usse bana asli instance; **Attributes** = data; **Methods** = actions.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 103. Classes and Objects
  103: {
    module: 'DS-M11',
    moduleTitle: 'Object-Oriented Programming and Development Tools',
    topic: 'Classes and Objects',
    pageCount: 2,
    sampleDataNotice: 'All OOP examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 2',
        pageTag: 'PAGE 1 OF 2',
        footerPage: '1 / 2',
        title: 'Classes and Objects',
        subtitle: 'CREATING MULTIPLE INDEPENDENT OBJECTS FROM ONE CLASS BLUEPRINT',
        intro: {
          icon: 'database',
          titleEn: 'One Class Blueprint → Many Independent Objects',
          titleHi: 'Ek Class Blueprint Se Kayi Alag-Alag Objects',
          bodyEn:
            'Use the **`class`** keyword (with **PascalCase** naming like `Customer` or `SalesRecord`) to define a blueprint. Calling `Customer(...)` creates a brand-new **Object (Instance)** with its own independent values in memory!',
          bodyHi:
            '**`class`** keyword aur **PascalCase** naam (jaise `Customer`) se blueprint banta hai, aur `Customer(...)` call karne par naya **Object** ban jaata hai!',
        },
        sections: [
          {
            pill: 'Verified Two-Object Independence Demo',
            blocks: [
              {
                type: 'sql',
                label: 'classes_objects.py',
                code: `class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\np1 = Product("Notebook", 80)\np2 = Product("Backpack", 1200)\nprint(p1.name, "-> INR", p1.price)\nprint(p2.name, "-> INR", p2.price)`,
                output: `Notebook -> INR 80\nBackpack -> INR 1200`,
                captionEn: '`p1` and `p2` are built from the exact same `Product` class, yet each object holds its own separate `name` and `price`!',
                captionHi: '`p1` aur `p2` dono ek hi `Product` class se bane hain, par dono ka apna alag `name` aur `price` hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 2',
        pageTag: 'PAGE 2 OF 2',
        footerPage: '2 / 2',
        title: 'Conceptual Visual Memory: Two Objects From One Class',
        subtitle: 'CHANGING `p1.price` NEVER AFFECTS `p2.price`',
        sections: [
          {
            pill: 'Memory Instance Comparison',
            blocks: [
              {
                type: 'table',
                headers: ['Object Variable', 'Class Type', 'Instance Attributes'],
                rows: [
                  ['`p1`', '`Product`', '`name = "Notebook"`, `price = 80`'],
                  ['`p2`', '`Product`', '`name = "Backpack"`, `price = 1200`'],
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 104. Attributes and Methods
  104: {
    module: 'DS-M11',
    moduleTitle: 'Object-Oriented Programming and Development Tools',
    topic: 'Attributes and Methods',
    pageCount: 2,
    sampleDataNotice: 'All Python OOP method outputs below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 3',
        pageTag: 'PAGE 1 OF 2',
        footerPage: '1 / 2',
        title: 'Attributes and Methods',
        subtitle: 'WHAT AN OBJECT KNOWS (ATTRIBUTES) AND WHAT IT CAN DO (METHODS)',
        intro: {
          icon: 'database',
          titleEn: 'Understanding `self` Simply',
          titleHi: '`self` Ko Aasaan Bhasha Mein Samajhiye',
          bodyEn:
            '**Attributes** are variables stored inside an object (`self.balance`). **Methods** are functions defined inside a class that operate on that object. The first parameter **`self`** simply refers to **"this specific object calling the method right now"** — Python passes `self` automatically!',
          bodyHi:
            '**Attributes** object ka data hote hain (`self.balance`) aur **Methods** object ke actions (functions). **`self`** ka matlab hai **"abhi jo specific object is method ko call kar raha hai"**!',
        },
        sections: [
          {
            pill: 'Verified BankAccount Class With Attributes & Methods',
            blocks: [
              {
                type: 'sql',
                label: 'attributes_methods.py',
                code: `class Wallet:\n    def __init__(self, owner, balance):\n        self.owner = owner\n        self.balance = balance\n\n    def add_money(self, amount):\n        self.balance += amount\n\n    def summary(self):\n        return f"{self.owner}: INR {self.balance}"\n\nw = Wallet("Asha", 500)\nw.add_money(300)\nprint(w.summary())`,
                output: `Asha: INR 800`,
                captionEn: 'When you call `w.add_money(300)`, Python automatically passes `w` as `self`, updating `w.balance` from `500` to `800`!',
                captionHi: '`w.add_money(300)` call karne par Python khud `w` ko `self` bana kar bhejta hai aur `balance` `800` ho jaata hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 3',
        pageTag: 'PAGE 2 OF 2',
        footerPage: '2 / 2',
        title: 'Key Takeaways',
        subtitle: 'DOT NOTATION FOR BOTH DATA & ACTIONS',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Access attributes without `()` (`w.balance`); call methods with `()` (`w.summary()`).', hi: 'Attributes bina `()` ke (`w.balance`) aur methods `()` ke saath (`w.summary()`) call hote hain.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 105. Constructors and __init__()
  105: {
    module: 'DS-M11',
    moduleTitle: 'Object-Oriented Programming and Development Tools',
    topic: 'Constructors and __init__()',
    pageCount: 2,
    sampleDataNotice: 'Terminology accurately explains __init__() as Python’s object initializer invoked during construction.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 4',
        pageTag: 'PAGE 1 OF 2',
        footerPage: '1 / 2',
        title: 'Constructors and __init__()',
        subtitle: 'AUTOMATICALLY SETTING UP EVERY NEW OBJECT THE MOMENT IT IS CREATED',
        intro: {
          icon: 'database',
          titleEn: 'What Does `__init__()` Do?',
          titleHi: '`__init__()` Kya Karta Hai?',
          bodyEn:
            'When you create a new object like `DatasetSummary("Orders", [100, 200])`, Python creates the new object and immediately calls **`__init__()`** (technically Python’s **initializer**, commonly taught as part of object construction) to set its starting attributes cleanly — with **double underscores** on both sides (`__init__`)!',
          bodyHi:
            'Jab bhi aap naya object banate hain, Python turant **`__init__()`** (**initializer**) ko khud call karta hai taaki object ke starting attributes setup ho jaayein — dhyan dein dono taraf **double underscore** (`__`) hota hai!',
        },
        sections: [
          {
            pill: 'Verified Initializer Example With Default Parameter',
            blocks: [
              {
                type: 'sql',
                label: 'init_demo.py',
                code: `class DatasetInfo:\n    def __init__(self, name, rows, source="CSV"):\n        self.name = name\n        self.rows = rows\n        self.source = source\n\nd1 = DatasetInfo("Sales_Oct", 1500)\nd2 = DatasetInfo("Weather_API", 365, source="API")\nprint(d1.name, d1.rows, d1.source)\nprint(d2.name, d2.rows, d2.source)`,
                output: `Sales_Oct 1500 CSV\nWeather_API 365 API`,
                captionEn: 'Just like regular functions, `__init__()` supports default parameters (`source="CSV"`) and must NOT return a value (it implicitly returns `None`).',
                captionHi: 'Normal functions ki tarah `__init__()` bhi default parameters support karta hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 4',
        pageTag: 'PAGE 2 OF 2',
        footerPage: '2 / 2',
        title: 'Key Takeaways',
        subtitle: 'CLEAN OBJECT INITIALIZATION',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: '`__init__(self, ...)` initializes each new object’s starting attributes automatically when the class is called.', hi: '`__init__(self, ...)` har naye object ke starting attributes ko automatically initialize karta hai.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 106. Inheritance Basics
  106: {
    module: 'DS-M11',
    moduleTitle: 'Object-Oriented Programming and Development Tools',
    topic: 'Inheritance Basics',
    pageCount: 2,
    sampleDataNotice: 'All inheritance examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 5',
        pageTag: 'PAGE 1 OF 2',
        footerPage: '1 / 2',
        title: 'Inheritance Basics',
        subtitle: 'REUSING AND EXTENDING A PARENT CLASS IN A CHILD CLASS',
        intro: {
          icon: 'database',
          titleEn: 'Parent Class → Child Class ("Is-A" Relationship)',
          titleHi: 'Parent Class → Child Class ("Is-A" Rishta)',
          bodyEn:
            'Suppose every `User` has a `name` and `email`, and a **`PremiumUser`** IS-A `User` who ALSO gets a `discount_pct`. Instead of copy-pasting the whole `User` class, **Inheritance** lets `class PremiumUser(User):` reuse everything from `User` via **`super().__init__(...)`** and add its own extra features!',
          bodyHi:
            'Agar `PremiumUser` ek `User` hi hai jisme bas extra `discount_pct` hai, toh code copy-paste karne ke bajay **Inheritance** (`class PremiumUser(User):`) se parent ke saare attributes aur methods reuse kar sakte hain!',
        },
        sections: [
          {
            pill: 'Verified Inheritance Example Using `super()`',
            blocks: [
              {
                type: 'sql',
                label: 'inheritance_demo.py',
                code: `class User:\n    def __init__(self, name):\n        self.name = name\n\n    def greet(self):\n        return f"Welcome, {self.name}"\n\nclass PremiumUser(User):\n    def __init__(self, name, discount_pct):\n        super().__init__(name)\n        self.discount_pct = discount_pct\n\np = PremiumUser("Meera", 15)\nprint(p.greet(), "| Discount:", p.discount_pct, "%")`,
                output: `Welcome, Meera | Discount: 15 %`,
                captionEn: '`PremiumUser` inherited `.greet()` from `User` without rewriting a single line of it!',
                captionHi: '`PremiumUser` ne bina dubara likhe `User` ka `.greet()` method reuse kar liya!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 5',
        pageTag: 'PAGE 2 OF 2',
        footerPage: '2 / 2',
        title: 'Key Takeaways',
        subtitle: 'EXTEND CLEANLY WITHOUT DUPLICATING CODE',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Write `class Child(Parent):` and call `super().__init__(...)` to reuse parent initialization cleanly.', hi: '`class Child(Parent):` aur `super().__init__(...)` se parent ka code cleanly reuse hota hai.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 107. Organizing Code into Modules
  107: {
    module: 'DS-M11',
    moduleTitle: 'Object-Oriented Programming and Development Tools',
    topic: 'Organizing Code into Modules',
    pageCount: 2,
    sampleDataNotice: 'Project folder structure below illustrates standard beginner Python project layout.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 6',
        pageTag: 'PAGE 1 OF 2',
        footerPage: '1 / 2',
        title: 'Organizing Code into Modules',
        subtitle: 'SPLITTING GROWING PROJECTS INTO CLEAN, FOCUSED `.py` FILES',
        intro: {
          icon: 'table',
          titleEn: 'Stop Putting 500 Lines Inside One Giant File!',
          titleHi: '500 Lines Ek Hi File Mein Mat Bhariye!',
          bodyEn:
            'Real Python projects split code by responsibility — for example, `cleaning.py` for cleaning helpers, `metrics.py` for calculations, and `main.py` to run the pipeline. Any `.py` file in your folder can be imported cleanly by another!',
          bodyHi:
            'Real projects mein code ko role ke hisaab se alag `.py` files mein rakhte hain — jaise `cleaning.py`, `metrics.py`, aur `main.py`!',
        },
        sections: [
          {
            pill: 'Clean Project Folder Structure & `if __name__ == "__main__":`',
            blocks: [
              {
                type: 'sql',
                label: 'PROJECT STRUCTURE & ENTRYPOINT',
                code: `retail_project/\n├── data/\n│   └── sales.csv\n├── cleaning.py      # clean_city(), parse_price()\n├── metrics.py       # calc_total(), calc_avg()\n└── main.py          # imports cleaning & metrics\n\n# Inside main.py:\nif __name__ == "__main__":\n    print("Running retail pipeline...")`,
                captionEn: '`if __name__ == "__main__":` ensures the main runner executes ONLY when you run `main.py` directly — NOT when another file imports a helper from it!',
                captionHi: '`if __name__ == "__main__":` ensure karta hai ki runner code sirf direct run karne par chale, import karne par nahi!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 6',
        pageTag: 'PAGE 2 OF 2',
        footerPage: '2 / 2',
        title: 'Key Takeaways',
        subtitle: 'MODULAR PROJECTS SCALE EFFORTLESSLY',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Group related functions into small `.py` modules and import them into `main.py`.', hi: 'Related functions ko chhote `.py` modules mein baantein aur `main.py` mein import karein.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 108. Virtual Environments and Package Installation
  108: {
    module: 'DS-M11',
    moduleTitle: 'Object-Oriented Programming and Development Tools',
    topic: 'Virtual Environments and Package Installation',
    pageCount: 3,
    sampleDataNotice: 'All venv and pip commands follow official Python 3 documentation for Windows, macOS, and Linux.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 7',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Virtual Environments and Package Installation',
        subtitle: 'GIVING EVERY PYTHON PROJECT ITS OWN ISOLATED PACKAGE SANDBOX',
        intro: {
          icon: 'database',
          titleEn: 'Why Do We Need Virtual Environments (`venv`)?',
          titleHi: 'Virtual Environment (`venv`) Ki Zaroorat Kyun Hoti Hai?',
          bodyEn:
            'Suppose Project A needs an older version of a package (`pandas==1.5`) while Project B needs the newest version (`pandas==2.2`). Installing everything globally breaks Project A! A **Virtual Environment (`venv`)** creates a private, isolated Python folder inside each project so versions never collide.',
          bodyHi:
            'Agar Project A ko kisi package ka purana version chahiye aur Project B ko naya, toh globally install karne se conflict hota hai! **Virtual Environment (`venv`)** har project ko uska apna isolated folder deta hai.',
        },
        sections: [
          {
            pill: 'Step-by-Step `venv` Workflow (OS-Specific Activation)',
            blocks: [
              {
                type: 'sql',
                label: 'TERMINAL COMMANDS (venv + pip)',
                code: `# 1. Create a virtual environment named .venv\npython -m venv .venv\n\n# 2a. Activate on Windows (PowerShell)\n.venv\\Scripts\\Activate.ps1\n\n# 2b. Activate on macOS / Linux\nsource .venv/bin/activate\n\n# 3. Install packages inside the active (.venv)\npip install requests\npip freeze > requirements.txt`,
                captionEn: 'Once activated, you see `(.venv)` at the start of your Terminal prompt — every `pip install` now stays cleanly inside this project!',
                captionHi: 'Activate hote hi Terminal mein `(.venv)` dikhne lagta hai — ab jo bhi install hoga wo sirf is project ke andar rahega!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 7',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Reproducing a Teammate’s Setup With `requirements.txt`',
        subtitle: 'ONE COMMAND TO INSTALL EVERY NEEDED PACKAGE',
        sections: [
          {
            pill: 'Sharing Without Uploading `.venv/`',
            blocks: [
              {
                type: 'note',
                tone: 'amber',
                bodyEn:
                  'Never upload the huge `.venv/` folder to GitHub! Instead, share the lightweight **`requirements.txt`** file so teammates run **`pip install -r requirements.txt`** to recreate the exact same environment in seconds.',
                bodyHi:
                  'Bade `.venv/` folder ko kabhi GitHub par upload mat karein — sirf **`requirements.txt`** share karein taaki teammates **`pip install -r requirements.txt`** chala sakein!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 7',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'PROFESSIONAL PYTHON HYGIENE',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Create a `.venv`, activate it, install packages, and save `requirements.txt` for every serious Python project.', hi: 'Har serious project ke liye `.venv` banayein, activate karein, aur `requirements.txt` maintain karein.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 109. Introduction to Git and GitHub
  109: {
    module: 'DS-M11',
    moduleTitle: 'Object-Oriented Programming and Development Tools',
    topic: 'Introduction to Git and GitHub',
    pageCount: 3,
    sampleDataNotice: 'All Git commands below use safe sample local/remote workflows without exposing credentials.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 8',
        pageTag: 'PAGE 1 OF 3',
        footerPage: '1 / 3',
        title: 'Introduction to Git and GitHub',
        subtitle: 'VERSION CONTROL TIME-MACHINE FOR YOUR CODE & DATA SCIENCE PORTFOLIO',
        intro: {
          icon: 'database',
          titleEn: 'Git vs GitHub — Know the Exact Difference',
          titleHi: 'Git Aur GitHub — Dono Alag Cheezein Hain!',
          bodyEn:
            '**Git** is a free **version-control tool installed on your computer** that saves snapshots (**Commits**) of your code so you never have `final_v2_REAL_final.py` chaos! **GitHub** is a **cloud website** that hosts your Git repositories online so you can back up projects, collaborate with teams, and showcase your portfolio.',
          bodyHi:
            '**Git** aapke computer par chalne wala **version-control tool** hai jo code ke snapshots (**Commits**) save karta hai. **GitHub** ek **online cloud platform** hai jahan aap apne Git repositories backup aur showcase karte hain!',
        },
        sections: [
          {
            pill: 'The 4-Stage Git Workflow',
            blocks: [
              {
                type: 'flow',
                items: [
                  { title: '1. Working Dir', bodyEn: 'Edit your `.py` files locally on your laptop.', bodyHi: 'Laptop par apni `.py` files edit karein.', tone: 'sky' },
                  { title: '2. `git add`', bodyEn: 'Place selected changes into the **Staging Area**.', bodyHi: 'Chune hue changes ko **Staging Area** mein rakhein.', tone: 'amber' },
                  { title: '3. `git commit`', bodyEn: 'Save a permanent labeled snapshot in local history.', bodyHi: 'Local history mein ek clear message ke saath snapshot save karein.', tone: 'lavender' },
                  { title: '4. `git push`', bodyEn: 'Upload commits safely to your **GitHub Remote**.', bodyHi: 'Commits ko online **GitHub Remote** par push karein.', tone: 'green' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 8',
        pageTag: 'PAGE 2 OF 3',
        footerPage: '2 / 3',
        title: 'Essential Everyday Git Commands',
        subtitle: 'SAFE COMMANDS YOU WILL USE IN EVERY PROJECT',
        sections: [
          {
            pill: 'Core Local + Remote Commands',
            blocks: [
              {
                type: 'sql',
                label: 'SAFE SAMPLE GIT WORKFLOW',
                code: `git init                                      # Turn folder into a Git repo\ngit status                                    # Check modified/untracked files\ngit add main.py                               # Stage main.py\ngit commit -m "Add sales summary script"      # Save clean snapshot\ngit push -u origin main                       # Push to GitHub remote`,
                captionEn: 'Always add a `.gitignore` file containing `.venv/`, `__pycache__/`, and any `.env` secret files so you NEVER commit passwords or API keys!',
                captionHi: 'Hamesha `.gitignore` mein `.venv/`, `__pycache__/`, aur `.env` secrets dalein taaki passwords ya API keys kabhi GitHub par na jaayein!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 8',
        pageTag: 'PAGE 3 OF 3',
        footerPage: '3 / 3',
        title: 'Key Takeaways',
        subtitle: 'NEVER LOSE WORKING CODE AGAIN',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Remember the 3-step rhythm: **`git status`** → **`git add`** → **`git commit -m "..."`** → **`git push`**.', hi: 'Daily rhythm yaad rakhein: **`git status`** → **`git add`** → **`git commit`** → **`git push`**.' },
                  { en: 'Never commit `.venv/`, raw private PII datasets, or API keys to GitHub.', hi: '`.venv/`, private PII data, ya API keys kabhi GitHub par commit mat karein.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 110. Debugging and Testing Python Programs
  110: {
    module: 'DS-M11',
    moduleTitle: 'Object-Oriented Programming and Development Tools',
    topic: 'Debugging and Testing Python Programs',
    pageCount: 2,
    sampleDataNotice: 'All assertion test examples below are verified in Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 9',
        pageTag: 'PAGE 1 OF 2',
        footerPage: '1 / 2',
        title: 'Debugging and Testing Python Programs',
        subtitle: 'VS CODE BREAKPOINTS + AUTOMATED `assert` TESTS FOR CONFIDENT CODE',
        intro: {
          icon: 'table',
          titleEn: 'Testing Proves Your Code Works — Even After Future Edits!',
          titleHi: 'Testing Proof Deti Hai Ki Aapka Code Sach Mein Sahi Hai!',
          bodyEn:
            'In **VS Code**, clicking the left margin adds a red **Breakpoint** dot so Python pauses on that exact line and lets you inspect every variable live! Even better, writing simple **`assert`** tests automatically checks your functions on normal and edge cases in milliseconds.',
          bodyHi:
            '**VS Code** mein left margin par click karne se red **Breakpoint** lagta hai jahan program ruk kar saare variables dikhata hai! Aur **`assert`** tests automatically verify karte hain ki aapka function har case par sahi output de raha hai.',
        },
        sections: [
          {
            pill: 'Verified `assert` Unit Testing Example',
            blocks: [
              {
                type: 'sql',
                label: 'test_discount.py',
                code: `def apply_discount(price, pct):\n    if price < 0:\n        return 0.0\n    return round(price * (1 - pct / 100), 2)\n\nassert apply_discount(1000, 10) == 900.0\nassert apply_discount(500, 0) == 500.0\nassert apply_discount(-50, 10) == 0.0\nprint("All 3 tests passed!")`,
                output: `All 3 tests passed!`,
                captionEn: 'If any `assert` condition ever turns `False`, Python immediately raises `AssertionError` — catching bugs before they reach a report!',
                captionHi: 'Agar koi `assert` fail ho toh Python turant `AssertionError` dekar bug pakad leta hai!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 9',
        pageTag: 'PAGE 2 OF 2',
        footerPage: '2 / 2',
        title: 'Key Takeaways',
        subtitle: 'DEBUG WITH BREAKPOINTS, PROTECT WITH TESTS',
        sections: [
          {
            pill: 'Summary',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'Use VS Code **Breakpoints (F5)** to step line-by-line through tricky bugs, and write `assert` tests for normal + edge cases (`0`, empty list, negative values).', hi: 'Tricky bugs ke liye VS Code **Breakpoints** use karein, aur normal + edge cases par `assert` tests likhein.' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // 111. Python Programming Mini Project
  111: {
    module: 'DS-M11',
    moduleTitle: 'Object-Oriented Programming and Development Tools',
    topic: 'Python Programming Mini Project',
    pageCount: 4,
    sampleDataNotice: 'Illustrative retail sales CSV dataset executed and verified completely in Core Python 3.',
    pages: [
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 10',
        pageTag: 'PAGE 1 OF 4',
        footerPage: '1 / 4',
        title: 'Python Programming Mini Project',
        subtitle: 'END-TO-END RETAIL SALES ANALYZER IN CORE PYTHON (M05–M11 CAPSTONE)',
        intro: {
          icon: 'database',
          titleEn: 'Business Problem & Project Architecture',
          titleHi: 'Asli Business Problem Aur Project Structure',
          bodyEn:
            'A retail chain exports a messy daily sales CSV containing extra spaces in city names, one `"N/A"` price, and one negative invalid amount. Using ONLY **Core Python** concepts from M05–M11 (Strings, Lists, Dicts, Sets, Loops, Conditions, Functions, `csv`, `try/except`, and `assert` tests), let us build a complete **Retail Sales Analyzer**!',
          bodyHi:
            'Ek retail chain ke messy CSV data (extra spaces, `"N/A"` price, negative amount) ko sirf **Core Python (M05–M11)** use karke clean aur analyze karte hain — complete functions, error handling aur tests ke saath!',
        },
        sections: [
          {
            pill: 'Step-by-Step Pipeline Architecture',
            blocks: [
              {
                type: 'flow',
                items: [
                  { title: '1. Read CSV', bodyEn: 'Parse rows with built-in `csv.DictReader`.', bodyHi: '`csv.DictReader` se rows read karein.', tone: 'sky' },
                  { title: '2. Clean & Validate', bodyEn: 'Standardize city names; safely skip `"N/A"` & negative prices.', bodyHi: 'City standardize karein; `"N/A"` aur negative amounts safely skip karein.', tone: 'amber' },
                  { title: '3. Aggregate', bodyEn: 'Compute Total, Average, City Revenue Dict, and Unique Customers Set.', bodyHi: 'Total, Average, City Revenue Dict aur Unique Customers Set nikaalein.', tone: 'lavender' },
                  { title: '4. Test & Report', bodyEn: 'Run `assert` tests and print clean executive summary!', bodyHi: '`assert` tests chalayein aur clean summary print karein!', tone: 'green' },
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 10',
        pageTag: 'PAGE 2 OF 4',
        footerPage: '2 / 4',
        title: 'Complete Working Code (Verified in Python 3)',
        subtitle: 'CLEANING + AGGREGATION + ERROR HANDLING + TESTS',
        sections: [
          {
            pill: 'Complete Executable Retail Sales Analyzer',
            blocks: [
              {
                type: 'sql',
                label: 'retail_sales_project.py',
                code: `import csv\nimport io\n\nRAW_CSV = """order_id,customer,city,amount\nO1,Asha, pune ,600\nO2,Ravi,Delhi,1200\nO3,Asha,PUNE,400\nO4,Meera,Delhi,N/A\nO5,Kabir,Goa,-150\n"""\n\ndef clean_city(name):\n    return name.strip().title() if name and name.strip() else "Unknown"\n\ndef parse_valid_amount(raw):\n    try:\n        val = float(raw)\n    except ValueError:\n        return None\n    return val if val > 0 else None\n\ndef analyze_sales(csv_text):\n    reader = csv.DictReader(io.StringIO(csv_text))\n    city_totals = {}\n    unique_customers = set()\n    valid_amounts = []\n    skipped = 0\n\n    for row in reader:\n        amt = parse_valid_amount(row["amount"])\n        if amt is None:\n            skipped += 1\n            continue\n        city = clean_city(row["city"])\n        city_totals[city] = city_totals.get(city, 0.0) + amt\n        unique_customers.add(row["customer"].strip())\n        valid_amounts.append(amt)\n\n    total = sum(valid_amounts)\n    avg = round(total / len(valid_amounts), 2) if valid_amounts else 0.0\n    return {\n        "valid_orders": len(valid_amounts),\n        "skipped_rows": skipped,\n        "total_revenue": total,\n        "avg_order": avg,\n        "unique_customers": len(unique_customers),\n        "city_totals": city_totals,\n    }\n\nreport = analyze_sales(RAW_CSV)\nassert report["valid_orders"] == 3\nassert report["skipped_rows"] == 2\nassert report["total_revenue"] == 2200.0\nassert report["city_totals"]["Pune"] == 1000.0\nprint("Valid Orders:", report["valid_orders"], "| Skipped:", report["skipped_rows"])\nprint("Total Revenue: INR", report["total_revenue"], "| Avg: INR", report["avg_order"])\nprint("Unique Customers:", report["unique_customers"])\nprint("City Revenue:", report["city_totals"])`,
                output: `Valid Orders: 3 | Skipped: 2\nTotal Revenue: INR 2200.0 | Avg: INR 733.33\nUnique Customers: 2\nCity Revenue: {'Pune': 1000.0, 'Delhi': 1200.0}`,
                captionEn: 'Verified Math: Valid rows are O1 (`600`), O2 (`1200`), O3 (`400`) → Total = `2200.0`, Avg = `2200 / 3 = 733.33`, Pune = `600 + 400 = 1000.0`, Delhi = `1200.0`, Skipped = `2` (`N/A` and `-150`), and all 4 `assert` tests passed!',
                captionHi: 'Verified Math: Valid orders 3 (`600 + 1200 + 400 = 2200.0`), Avg `733.33`, Pune `1000.0`, Delhi `1200.0`, Skipped 2 (`N/A` aur `-150`), aur chaaron `assert` tests pass ho gaye!',
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 10',
        pageTag: 'PAGE 3 OF 4',
        footerPage: '3 / 4',
        title: 'How Every Module M05–M11 Appeared in This Project',
        subtitle: 'CONNECTING ALL 80 LESSONS TOGETHER',
        sections: [
          {
            pill: 'Skills Used Map',
            blocks: [
              {
                type: 'table',
                headers: ['Module', 'Concept Used in Our Mini Project'],
                rows: [
                  ['M05–M06', 'Variables, `float()`, `round()`, f-strings, clean `snake_case` naming'],
                  ['M07', 'Comparison (`val > 0`), Identity (`amt is None`), `if/else` validation'],
                  ['M08', '`for row in reader:` loop + `continue` to skip invalid records safely'],
                  ['M09', 'Lists (`valid_amounts`), Dicts (`city_totals.get()`), Sets (`unique_customers`), Strings (`.strip().title()`)'],
                  ['M10', 'Reusable functions (`clean_city`, `parse_valid_amount`), `csv` module, `try/except ValueError`'],
                  ['M11', 'Modular architecture + automated `assert` unit tests!'],
                ],
              },
            ],
          },
        ],
      },
      {
        moduleTag: 'FUTURE IT INDUSTRY | DS M11 | TOPIC 10',
        pageTag: 'PAGE 4 OF 4',
        footerPage: '4 / 4',
        title: 'Congratulations — Python for Data Science Complete!',
        subtitle: 'YOU ARE NOW READY FOR NUMPY, PANDAS, VISUALIZATION & MACHINE LEARNING',
        sections: [
          {
            pill: 'Your Achievement',
            blocks: [
              {
                type: 'bullets',
                tone: 'green',
                items: [
                  { en: 'You went from **zero lines of code** to building a tested, error-safe, modular **Python Data Analysis application**!', hi: 'Aapne **zero coding** se shuru karke ek tested, error-safe, modular **Python Data Analysis application** bana liya hai!' },
                  { en: 'Keep this exact project in your GitHub repository with a `README.md` and `requirements.txt` as your first Python portfolio piece.', hi: 'Is project ko `README.md` ke saath apne GitHub repository mein showcase karein!' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
