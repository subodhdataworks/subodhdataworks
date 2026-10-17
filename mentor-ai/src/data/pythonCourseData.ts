export interface PythonTopic {
  id: number;
  module: 1 | 2 | 3;
  moduleTitle: string;
  title: string;
  subtitle: string;
  duration: string;
  isAssessment: boolean;
  objectives: string[];
  gameTitle?: string;
  gameType?: string;
  mcqs?: {
    id: number;
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  }[];
  codingChallenges?: {
    id: number;
    title: string;
    instruction: string;
    starterCode: string;
    expectedKeywords: string[];
    expectedOutputText: string;
    hint: string;
  }[];
  interviewQuestions?: {
    id: number;
    question: string;
    context: string;
    defaultAnswer: string;
    suggestedPoints: string[];
  }[];
}

export interface AssessmentQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  topic: string;
  explanation: string;
}

export interface PythonModule {
  id: number;
  title: string;
  description: string;
  topicCount: number;
  topics: PythonTopic[];
}

export const pythonModulesData: PythonModule[] = [
  {
    id: 1,
    title: 'MODULE 1 — PYTHON FUNDAMENTALS',
    description: 'Master core syntax, data types, string manipulation, data structures, operators, and built-in functions.',
    topicCount: 8,
    topics: [
      {
        id: 1,
        module: 1,
        moduleTitle: 'Python Fundamentals',
        title: 'Introduction to Python',
        subtitle: 'What is Python? Setup, IDE, and your first program.',
        duration: '15 min',
        isAssessment: false,
        objectives: [
          'What is Python?',
          'Why Python is popular',
          'Python use cases',
          'Installing Python',
          'VS Code setup',
          'First Python program',
          'print()',
          'Comments',
          'Python syntax'
        ],
        gameTitle: 'Python Command Challenge',
        gameType: 'command_challenge',
        mcqs: [
          {
            id: 1,
            question: 'What is Python?',
            options: ['Database', 'Programming Language', 'Operating System', 'Web Browser'],
            correct: 1,
            explanation: 'Python is a high-level interpreted programming language renowned for its simple, readable syntax.'
          },
          {
            id: 2,
            question: 'Which function is commonly used to display output in Python?',
            options: ['show()', 'display()', 'print()', 'output()'],
            correct: 2,
            explanation: 'The built-in print() function outputs strings and variables to standard console output.'
          },
          {
            id: 3,
            question: 'Which of these is a valid Python variable name?',
            options: ['1name', 'user-name', 'user_name', 'user name'],
            correct: 2,
            explanation: 'Variables cannot start with digits and cannot contain hyphens or spaces; underscores are valid.'
          },
          {
            id: 4,
            question: 'Which tool is commonly used to write and run Python code?',
            options: ['VS Code', 'Excel', 'PowerPoint', 'Photoshop'],
            correct: 0,
            explanation: 'VS Code is an industry-standard modern integrated development environment for Python.'
          },
          {
            id: 5,
            question: 'Which symbol is used to start a comment in Python?',
            options: ['//', '#', '<!--', '**'],
            correct: 1,
            explanation: 'In Python, any text after the hash symbol (#) is treated as a comment and ignored at runtime.'
          }
        ],
        codingChallenges: [
          {
            id: 1,
            title: 'Challenge 1: Print Hello, Python!',
            instruction: 'Print the message Hello, Python!',
            starterCode: `# Challenge 1: Print the message Hello, Python!\nprint("Hello, Python!")`,
            expectedKeywords: ['print', 'Hello, Python'],
            expectedOutputText: 'Hello, Python!',
            hint: 'Use print("Hello, Python!") to display the greeting.'
          },
          {
            id: 2,
            title: 'Challenge 2: Variable Assignment',
            instruction: 'Create a variable called name and store your name in it. Print the variable.',
            starterCode: `# Challenge 2: Store your name in a variable and print it\nname = "Subodh"\nprint(name)`,
            expectedKeywords: ['name', 'print'],
            expectedOutputText: 'Subodh',
            hint: 'Assign a string to name and call print(name).'
          },
          {
            id: 3,
            title: 'Challenge 3: Variable Addition',
            instruction: 'Create two variables a = 10 and b = 20 and print their sum.',
            starterCode: `# Challenge 3: Create a = 10, b = 20 and print their sum\na = 10\nb = 20\nprint(a + b)`,
            expectedKeywords: ['a', 'b', 'print'],
            expectedOutputText: '30',
            hint: 'Use the + operator inside print(a + b).'
          },
          {
            id: 4,
            title: 'Challenge 4: Integer Variable',
            instruction: 'Create a variable age = 25 and print the value of age.',
            starterCode: `# Challenge 4: Create age = 25 and print it\nage = 25\nprint(age)`,
            expectedKeywords: ['age', 'print'],
            expectedOutputText: '25',
            hint: 'Define age = 25 without quotes and call print(age).'
          },
          {
            id: 5,
            title: 'Challenge 5: Formatted Output',
            instruction: 'Create a variable city containing your city name and print: I live in <city>',
            starterCode: `# Challenge 5: Create a variable city and print: I live in <city>\ncity = "Delhi"\nprint("I live in", city)`,
            expectedKeywords: ['city', 'print', 'I live in'],
            expectedOutputText: 'I live in Delhi',
            hint: 'Use print("I live in", city) or an f-string.'
          }
        ],
        interviewQuestions: [
          {
            id: 1,
            question: 'What is Python and why is it popular for modern data analytics?',
            context: 'Language Characteristics',
            defaultAnswer: 'Python is a high-level, interpreted programming language with simple syntax, high developer productivity, and vast data libraries.',
            suggestedPoints: ['High-level & interpreted', 'Readable clean syntax', 'Data science ecosystem', 'Fast prototyping']
          },
          {
            id: 2,
            question: 'Where is Python used in real-world applications?',
            context: 'Practical Applications',
            defaultAnswer: 'Python is used in automated data pipelines, machine learning, web backends, financial modeling, and cloud scripting.',
            suggestedPoints: ['Data pipelines', 'Machine learning', 'Web backend APIs', 'Automation']
          },
          {
            id: 3,
            question: 'What is a variable in Python and how is it created?',
            context: 'Variables & Memory',
            defaultAnswer: 'A variable is a labeled reference pointing to an object in computer memory, created using the assignment operator (=).',
            suggestedPoints: ['Pointer to memory object', 'Dynamic typing', 'Assignment operator', 'No declaration keyword needed']
          },
          {
            id: 4,
            question: 'What does the print() function do?',
            context: 'Standard Output',
            defaultAnswer: 'The print() function converts objects to text representations and writes them to the standard output console stream.',
            suggestedPoints: ['Standard output', 'Converts to string', 'Supports multiple arguments', 'Debugging output']
          },
          {
            id: 5,
            question: 'How do you create and execute your first Python file?',
            context: 'Execution Workflow',
            defaultAnswer: 'Create a text file with a .py extension, write Python statements, and execute it via the terminal using the command `python filename.py`.',
            suggestedPoints: ['.py extension', 'VS Code editor', 'python CLI command', 'Interpreted execution']
          }
        ]
      },
      {
        id: 2,
        module: 1,
        moduleTitle: 'Python Fundamentals',
        title: 'Variables & Data Types',
        subtitle: 'Strings, Integers, Floats, Booleans and type conversions.',
        duration: '20 min',
        isAssessment: false,
        objectives: [
          'Variables',
          'Variable naming',
          'int',
          'float',
          'string',
          'boolean',
          'type()',
          'Type conversion',
          'User input'
        ],
        gameTitle: 'Python Type Sorter',
        gameType: 'type_sorter',
        mcqs: [
          {
            id: 1,
            question: 'Which of the following represents a floating-point number in Python?',
            options: ['"3.14"', '3.14', '3', 'True'],
            correct: 1,
            explanation: 'Numbers containing a decimal point are float data types in Python.'
          },
          {
            id: 2,
            question: 'What does the function type(100) return?',
            options: ['<class "int">', '<class "float">', '<class "str">', '<class "number">'],
            correct: 0,
            explanation: '100 is a whole integer without decimals, so its type is <class "int">.'
          },
          {
            id: 3,
            question: 'How do you convert the string "42" into an integer in Python?',
            options: ['int("42")', 'str(42)', 'float("42")', 'cast(42)'],
            correct: 0,
            explanation: 'The built-in int() constructor parses a valid numeric string into an integer.'
          },
          {
            id: 4,
            question: 'What is the boolean evaluation of bool("") (an empty string)?',
            options: ['True', 'False', 'None', 'Error'],
            correct: 1,
            explanation: 'Empty strings, zeros, and empty collections evaluate to False (falsy) in Python.'
          },
          {
            id: 5,
            question: 'Which function is used to take text input from the user in console Python?',
            options: ['read()', 'scan()', 'input()', 'get()'],
            correct: 2,
            explanation: 'The input() function pauses program execution and returns the line typed by the user as a string.'
          }
        ],
        codingChallenges: [
          {
            id: 1,
            title: 'Challenge 1: Declare Types',
            instruction: 'Create an integer variable count = 10 and a float variable price = 19.99. Print both.',
            starterCode: `count = 10\nprice = 19.99\nprint(count, price)`,
            expectedKeywords: ['count', 'price', 'print'],
            expectedOutputText: '10 19.99',
            hint: 'Assign count = 10 and price = 19.99, then print(count, price).'
          },
          {
            id: 2,
            title: 'Challenge 2: Type Inspection',
            instruction: 'Inspect the type of a boolean variable is_active = True and print it using type().',
            starterCode: `is_active = True\nprint(type(is_active))`,
            expectedKeywords: ['is_active', 'type', 'print'],
            expectedOutputText: "<class 'bool'>",
            hint: 'Call print(type(is_active)).'
          },
          {
            id: 3,
            title: 'Challenge 3: Type Casting',
            instruction: 'Convert the string s = "250" to an integer and multiply it by 2. Print the result.',
            starterCode: `s = "250"\nnum = int(s)\nprint(num * 2)`,
            expectedKeywords: ['s', 'int', 'print'],
            expectedOutputText: '500',
            hint: 'Use num = int(s) and print(num * 2).'
          },
          {
            id: 4,
            title: 'Challenge 4: Float Conversion',
            instruction: 'Convert the integer x = 7 to a float and print it.',
            starterCode: `x = 7\nprint(float(x))`,
            expectedKeywords: ['x', 'float', 'print'],
            expectedOutputText: '7.0',
            hint: 'Call print(float(x)).'
          },
          {
            id: 5,
            title: 'Challenge 5: String & Number Concatenation',
            instruction: 'Given age = 22, print: I am 22 years old using str(age) or an f-string.',
            starterCode: `age = 22\nprint(f"I am {age} years old")`,
            expectedKeywords: ['age', 'print', 'years old'],
            expectedOutputText: 'I am 22 years old',
            hint: 'Use print(f"I am {age} years old").'
          }
        ],
        interviewQuestions: [
          {
            id: 1,
            question: 'What are the main primitive data types in Python?',
            context: 'Core Types',
            defaultAnswer: 'Python has four primary primitive scalar data types: int (integers), float (decimals), str (strings/text), and bool (True or False).',
            suggestedPoints: ['int for whole numbers', 'float for decimals', 'str for text', 'bool for logic']
          },
          {
            id: 2,
            question: 'How does dynamic typing work in Python compared to static languages?',
            context: 'Type System',
            defaultAnswer: 'In Python, types belong to values, not variables. You do not declare variable types explicitly, and a variable can point to different types over time.',
            suggestedPoints: ['Variables are object references', 'No explicit type declarations', 'Runtime type checking', 'Flexible development']
          },
          {
            id: 3,
            question: 'What is the purpose of type conversion (casting) in data analysis?',
            context: 'Data Processing',
            defaultAnswer: 'Data loaded from CSV files or APIs often comes as strings. Casting to int or float is essential before performing mathematical operations or aggregations.',
            suggestedPoints: ['Cleaning raw string data', 'Preventing TypeError', 'Mathematical computation', 'Schema enforcement']
          },
          {
            id: 4,
            question: 'What is the difference between mutable and immutable data types in Python?',
            context: 'Memory Model',
            defaultAnswer: 'Immutable objects (like int, float, str, tuple) cannot be modified in place after creation, while mutable objects (like lists, dicts) can be changed.',
            suggestedPoints: ['Immutable cannot change in place', 'Strings and numbers are immutable', 'Lists are mutable', 'Memory safety']
          },
          {
            id: 5,
            question: 'What does the input() function return and how do you read a numeric input?',
            context: 'User Input',
            defaultAnswer: 'input() always returns a string. To read a number, you must explicitly wrap it in int(input()) or float(input()).',
            suggestedPoints: ['Always returns str', 'Explicit int() wrapper', 'Handling user errors', 'Prompt parameter']
          }
        ]
      },
      {
        id: 3,
        module: 1,
        moduleTitle: 'Python Fundamentals',
        title: 'Strings in Python',
        subtitle: 'Creating strings, indexing, slicing, concatenation and f-strings.',
        duration: '20 min',
        isAssessment: false,
        objectives: [
          'Creating strings',
          'String indexing',
          'String slicing',
          'String concatenation',
          'f-strings',
          'String methods'
        ],
        gameTitle: 'String Builder',
        gameType: 'string_builder',
        mcqs: [
          {
            id: 1,
            question: 'What does text[0] return if text = "Python"?',
            options: ['"P"', '"y"', '"Python"', 'Error'],
            correct: 0,
            explanation: 'Python uses zero-based indexing; index 0 accesses the first character ("P").'
          },
          {
            id: 2,
            question: 'How do you convert a string to uppercase in Python?',
            options: ['text.toUpper()', 'text.upper()', 'upper(text)', 'text.uppercase()'],
            correct: 1,
            explanation: 'The .upper() string method returns a new copy of the string in all capital letters.'
          },
          {
            id: 3,
            question: 'What is the modern, recommended way to format variables inside strings in Python 3.6+?',
            options: ['% formatting', '.format()', 'f-strings (f"...")', 'String concatenation with +'],
            correct: 2,
            explanation: 'f-strings (formatted string literals) provide concise, readable, and fast interpolation.'
          },
          {
            id: 4,
            question: 'What does the expression "Data" * 3 produce?',
            options: ['"DataDataData"', 'Error', '"Data 3"', '["Data", "Data", "Data"]'],
            correct: 0,
            explanation: 'The * operator repeats strings by the specified integer count.'
          },
          {
            id: 5,
            question: 'Which method removes leading and trailing whitespace from a string?',
            options: ['trim()', 'clean()', 'strip()', 'remove_spaces()'],
            correct: 2,
            explanation: 'The .strip() method removes all whitespace characters from both ends of the string.'
          }
        ],
        codingChallenges: [
          {
            id: 1,
            title: 'Challenge 1: String Length',
            instruction: 'Create a string lang = "Python" and print its length using len().',
            starterCode: `lang = "Python"\nprint(len(lang))`,
            expectedKeywords: ['lang', 'len', 'print'],
            expectedOutputText: '6',
            hint: 'Use len(lang) to get character count.'
          },
          {
            id: 2,
            title: 'Challenge 2: Upper and Lower',
            instruction: 'Given title = "mentor ai", print it in uppercase using .upper().',
            starterCode: `title = "mentor ai"\nprint(title.upper())`,
            expectedKeywords: ['title', 'upper', 'print'],
            expectedOutputText: 'MENTOR AI',
            hint: 'Call print(title.upper()).'
          },
          {
            id: 3,
            title: 'Challenge 3: f-string Interpolation',
            instruction: 'Given role = "Analyst" and score = 95, print: Role: Analyst | Score: 95 using an f-string.',
            starterCode: `role = "Analyst"\nscore = 95\nprint(f"Role: {role} | Score: {score}")`,
            expectedKeywords: ['role', 'score', 'print', 'Role: Analyst | Score: 95'],
            expectedOutputText: 'Role: Analyst | Score: 95',
            hint: 'Use f"Role: {role} | Score: {score}".'
          },
          {
            id: 4,
            title: 'Challenge 4: String Stripping',
            instruction: 'Given raw_text = "  clean me  ", print the cleaned string using .strip().',
            starterCode: `raw_text = "  clean me  "\nprint(raw_text.strip())`,
            expectedKeywords: ['raw_text', 'strip', 'print'],
            expectedOutputText: 'clean me',
            hint: 'Use print(raw_text.strip()).'
          },
          {
            id: 5,
            title: 'Challenge 5: String Replacement',
            instruction: 'Given s = "Hello World", replace "World" with "Python" using .replace() and print it.',
            starterCode: `s = "Hello World"\nprint(s.replace("World", "Python"))`,
            expectedKeywords: ['s', 'replace', 'print'],
            expectedOutputText: 'Hello Python',
            hint: 'Use s.replace("World", "Python").'
          }
        ],
        interviewQuestions: [
          {
            id: 1,
            question: 'Why are strings in Python immutable, and what does that mean?',
            context: 'String Immutability',
            defaultAnswer: 'Strings cannot be modified in place. Any operation like .upper() or .replace() returns a new string in memory rather than altering the original.',
            suggestedPoints: ['Cannot change individual characters', 'Thread safety & memory caching', 'Methods return new string', 'Hashable as dict keys']
          },
          {
            id: 2,
            question: 'What are f-strings and why are they preferred over .format() or %?',
            context: 'String Formatting',
            defaultAnswer: 'f-strings evaluate expressions directly inline at runtime, making code significantly more readable, less error-prone, and faster than legacy formatters.',
            suggestedPoints: ['Introduced in Python 3.6', 'Inline expression evaluation', 'Clean concise syntax', 'Faster execution speed']
          },
          {
            id: 3,
            question: 'How do you check if a substring exists within a string in Python?',
            context: 'Membership Operators',
            defaultAnswer: 'You use the `in` membership operator, for example: `if "AI" in text:`, which returns True or False efficiently.',
            suggestedPoints: ['The `in` keyword', 'Case sensitivity', 'Returns boolean', 'Clean readable check']
          },
          {
            id: 4,
            question: 'What common string methods are crucial for data cleaning in analytics?',
            context: 'Data Cleaning',
            defaultAnswer: '.strip() to trim whitespace, .lower()/.upper() for standardization, .replace() for character substitutions, and .split() to tokenize values.',
            suggestedPoints: ['.strip() for whitespace', '.split() for delimiter parsing', '.lower() for casing', '.replace() for cleaning']
          },
          {
            id: 5,
            question: 'What is the difference between single, double, and triple quotes in Python?',
            context: 'Syntax Standards',
            defaultAnswer: 'Single and double quotes are interchangeable for single-line strings. Triple quotes (or ) allow multi-line strings and docstrings.',
            suggestedPoints: ['Single and double are equivalent', 'Escaping quotes', 'Triple quotes for multi-line', 'Docstrings for functions']
          }
        ]
      },
      {
        id: 4,
        module: 1,
        moduleTitle: 'Python Fundamentals',
        title: 'Lists, Tuples, Sets & Dictionaries',
        subtitle: 'Lists, Tuples, Sets, Dictionaries, differences and use cases.',
        duration: '25 min',
        isAssessment: false,
        objectives: [
          'Lists',
          'Tuples',
          'Sets',
          'Dictionaries',
          'Differences between them',
          'When to use each data structure'
        ],
        gameTitle: 'Data Structure Sorter',
        gameType: 'data_structure_sorter',
        mcqs: [
          {
            id: 1,
            question: 'Which of the following is defined using square brackets []?',
            options: ['Tuple', 'List', 'Set', 'Dictionary'],
            correct: 1,
            explanation: 'Lists are created using square brackets [] and are ordered, mutable collections.'
          },
          {
            id: 2,
            question: 'What is the primary difference between a list and a tuple?',
            options: [
              'Lists are mutable; tuples are immutable',
              'Tuples are mutable; lists are immutable',
              'Lists can only hold integers',
              'Tuples cannot be indexed'
            ],
            correct: 0,
            explanation: 'Lists can be modified (appended, popped), whereas tuples cannot be altered after creation.'
          },
          {
            id: 3,
            question: 'What happens when you add duplicate elements to a set in Python?',
            options: [
              'It throws an error',
              'Duplicates are automatically removed',
              'Duplicates are counted twice',
              'The set converts to a list'
            ],
            correct: 1,
            explanation: 'Sets only store unique items; any duplicate added is discarded.'
          },
          {
            id: 4,
            question: 'How do you access the value associated with key "name" in dictionary student = {"name": "Subodh"}?',
            options: ['student[0]', 'student{"name"}', 'student["name"]', 'student.name()'],
            correct: 2,
            explanation: 'Dictionary values are accessed using square bracket key lookup: student["name"].'
          },
          {
            id: 5,
            question: 'Which data structure is best suited for fast O(1) membership lookup of unique items?',
            options: ['List', 'Tuple', 'Set', 'OrderedList'],
            correct: 2,
            explanation: 'Sets are implemented as hash tables in Python, giving them average O(1) lookup times.'
          }
        ],
        codingChallenges: [
          {
            id: 1,
            title: 'Challenge 1: List Append',
            instruction: 'Create a list skills = ["Python", "SQL"]. Add "Excel" using .append() and print skills.',
            starterCode: `skills = ["Python", "SQL"]\nskills.append("Excel")\nprint(skills)`,
            expectedKeywords: ['skills', 'append', 'print'],
            expectedOutputText: "['Python', 'SQL', 'Excel']",
            hint: 'Use skills.append("Excel") and print(skills).'
          },
          {
            id: 2,
            title: 'Challenge 2: Tuple Coordinates',
            instruction: 'Create a tuple point = (10, 20) and print the first element point[0].',
            starterCode: `point = (10, 20)\nprint(point[0])`,
            expectedKeywords: ['point', 'print'],
            expectedOutputText: '10',
            hint: 'Tuples are indexed with [0].'
          },
          {
            id: 3,
            title: 'Challenge 3: Set Uniqueness',
            instruction: 'Given nums = [1, 2, 2, 3, 4, 4], convert it to a set using set() and print the length using len().',
            starterCode: `nums = [1, 2, 2, 3, 4, 4]\nunique_nums = set(nums)\nprint(len(unique_nums))`,
            expectedKeywords: ['nums', 'set', 'len', 'print'],
            expectedOutputText: '4',
            hint: 'set(nums) removes duplicates [1, 2, 3, 4].'
          },
          {
            id: 4,
            title: 'Challenge 4: Dictionary Mapping',
            instruction: 'Create a dictionary user = {"name": "Subodh", "score": 90}. Print the value of "score".',
            starterCode: `user = {"name": "Subodh", "score": 90}\nprint(user["score"])`,
            expectedKeywords: ['user', 'score', 'print'],
            expectedOutputText: '90',
            hint: 'Access user["score"].'
          },
          {
            id: 5,
            title: 'Challenge 5: Add Dict Key',
            instruction: 'Given user = {"name": "Subodh"}, add a key "level" with value 7 and print the dictionary.',
            starterCode: `user = {"name": "Subodh"}\nuser["level"] = 7\nprint(user)`,
            expectedKeywords: ['user', 'level', 'print'],
            expectedOutputText: "{'name': 'Subodh', 'level': 7}",
            hint: 'Assign user["level"] = 7.'
          }
        ],
        interviewQuestions: [
          {
            id: 1,
            question: 'When should you use a list versus a tuple in Python?',
            context: 'Data Structure Selection',
            defaultAnswer: 'Use lists when data needs to change (appending, sorting, modifying). Use tuples for fixed, heterogeneous data (like coordinates or database records) where immutability prevents accidental bugs.',
            suggestedPoints: ['List is mutable, tuple is immutable', 'Tuples consume less memory', 'Tuples can be dictionary keys', 'Lists for homogeneous collections']
          },
          {
            id: 2,
            question: 'What makes Python dictionaries so fast for key-value lookups?',
            context: 'Hash Tables',
            defaultAnswer: 'Dictionaries use an underlying hash table with a hash function that maps keys directly to memory buckets, providing average O(1) constant time complexity.',
            suggestedPoints: ['Hash table implementation', 'Average O(1) lookup', 'Keys must be hashable', 'Python 3.7+ preserves insertion order']
          },
          {
            id: 3,
            question: 'What is a Set in Python and where is it useful in data analysis?',
            context: 'Set Operations',
            defaultAnswer: 'A Set is an unordered collection of unique hashable elements. It is ideal for deduplication and mathematical set operations like union, intersection, and difference.',
            suggestedPoints: ['Removes duplicate records', 'Set operations: union, intersection', 'O(1) membership testing', 'Unordered collection']
          },
          {
            id: 4,
            question: 'What happens if you try to access a non-existent key in a dictionary, and how do you prevent an error?',
            context: 'Defensive Coding',
            defaultAnswer: 'Accessing dict[missing] raises a KeyError. You can prevent this by using dict.get(key, default) or checking with `if key in dict`.',
            suggestedPoints: ['KeyError exception', 'dict.get(key, default)', 'collections.defaultdict', 'in membership check']
          },
          {
            id: 5,
            question: 'Can a list be used as a key in a Python dictionary? Why or why not?',
            context: 'Hashability',
            defaultAnswer: 'No, lists cannot be dictionary keys because lists are mutable and therefore unhashable. Only immutable types like tuples, strings, or numbers can be keys.',
            suggestedPoints: ['Lists are unhashable', 'TypeError: unhashable type list', 'Dict keys must be immutable', 'Use tuples instead']
          }
        ]
      },
      {
        id: 5,
        module: 1,
        moduleTitle: 'Python Fundamentals',
        title: 'Indexing & Slicing',
        subtitle: 'Positive, negative indexing, list/string slicing, step and reverse.',
        duration: '20 min',
        isAssessment: false,
        objectives: [
          'Positive indexing',
          'Negative indexing',
          'String slicing',
          'List slicing',
          'Step',
          'Reverse',
          'Practical examples'
        ],
        gameTitle: 'Slice the Data',
        gameType: 'slice_the_data',
        mcqs: [
          {
            id: 1,
            question: 'What does negative index -1 access in a Python sequence?',
            options: ['First element', 'Last element', 'Second element', 'Raises an error'],
            correct: 1,
            explanation: 'Negative indexing starts from the end of the sequence, with -1 representing the final element.'
          },
          {
            id: 2,
            question: 'What does the slice nums[1:4] return for nums = [10, 20, 30, 40, 50]?',
            options: ['[10, 20, 30]', '[20, 30, 40]', '[20, 30, 40, 50]', '[10, 20, 30, 40]'],
            correct: 1,
            explanation: 'Slicing syntax [start:stop] includes the start index (1) and excludes the stop index (4), yielding elements at indices 1, 2, 3.'
          },
          {
            id: 3,
            question: 'What is the Python idiom to reverse a sequence using slicing?',
            options: ['seq[reverse]', 'seq[::-1]', 'seq[-1:0]', 'seq[1:-1]'],
            correct: 1,
            explanation: 'The slice [::-1] sets the step parameter to -1, which traverses and returns the sequence in reverse order.'
          },
          {
            id: 4,
            question: 'What is the step parameter in seq[0:6:2]?',
            options: ['0', '6', '2', 'None'],
            correct: 2,
            explanation: 'The third parameter after the colon is the step size; 2 means take every second element.'
          },
          {
            id: 5,
            question: 'What does text[:3] return for text = "Python"?',
            options: ['"Pyt"', '"yth"', '"Python"', '"on"'],
            correct: 0,
            explanation: 'Omitting the start index defaults to index 0, returning characters from 0 up to 3 ("Pyt").'
          }
        ],
        codingChallenges: [
          {
            id: 1,
            title: 'Challenge 1: Last Element',
            instruction: 'Given data = [100, 200, 300, 400], print the last element using negative indexing.',
            starterCode: `data = [100, 200, 300, 400]\nprint(data[-1])`,
            expectedKeywords: ['data', '-1', 'print'],
            expectedOutputText: '400',
            hint: 'Use data[-1].'
          },
          {
            id: 2,
            title: 'Challenge 2: Sub-slice',
            instruction: 'Given nums = [0, 1, 2, 3, 4, 5], extract and print the middle elements [2, 3, 4] using slicing.',
            starterCode: `nums = [0, 1, 2, 3, 4, 5]\nprint(nums[2:5])`,
            expectedKeywords: ['nums', '2:5', 'print'],
            expectedOutputText: '[2, 3, 4]',
            hint: 'Use nums[2:5].'
          },
          {
            id: 3,
            title: 'Challenge 3: Reverse Sequence',
            instruction: 'Reverse the string word = "Analytics" using slicing and print it.',
            starterCode: `word = "Analytics"\nprint(word[::-1])`,
            expectedKeywords: ['word', '::-1', 'print'],
            expectedOutputText: 'scitylanA',
            hint: 'Use word[::-1].'
          },
          {
            id: 4,
            title: 'Challenge 4: Step Slicing',
            instruction: 'Given digits = [0, 1, 2, 3, 4, 5, 6], select every second number and print it.',
            starterCode: `digits = [0, 1, 2, 3, 4, 5, 6]\nprint(digits[::2])`,
            expectedKeywords: ['digits', '::2', 'print'],
            expectedOutputText: '[0, 2, 4, 6]',
            hint: 'Use digits[::2].'
          },
          {
            id: 5,
            title: 'Challenge 5: First Three Items',
            instruction: 'Given list items = ["a", "b", "c", "d", "e"], print the first three items.',
            starterCode: `items = ["a", "b", "c", "d", "e"]\nprint(items[:3])`,
            expectedKeywords: ['items', ':3', 'print'],
            expectedOutputText: "['a', 'b', 'c']",
            hint: 'Use items[:3].'
          }
        ],
        interviewQuestions: [
          {
            id: 1,
            question: 'How does slicing syntax [start:stop:step] behave when parameters are omitted?',
            context: 'Slicing Defaults',
            defaultAnswer: 'Omitting start defaults to 0 (or end if step is negative), omitting stop defaults to the sequence length, and omitting step defaults to 1.',
            suggestedPoints: ['start defaults to 0', 'stop defaults to end', 'step defaults to 1', 'Exclusive upper bound']
          },
          {
            id: 2,
            question: 'Does slicing a list create a shallow copy or modify the original list in Python?',
            context: 'Memory Allocation',
            defaultAnswer: 'Slicing creates a new shallow copy of the sublist. Modifying elements in the slice does not alter the original list structure.',
            suggestedPoints: ['Shallow copy creation', 'Original list is unaffected', 'O(k) where k is slice length', 'Memory overhead']
          },
          {
            id: 3,
            question: 'What is the practical use of negative indexing in data processing?',
            context: 'Practical Applications',
            defaultAnswer: 'Negative indexing lets you access elements from the end of a series or list without needing to calculate its length with len() - 1.',
            suggestedPoints: ['Access last element with -1', 'Clean readable code', 'Tail processing', 'Extracting file extensions']
          },
          {
            id: 4,
            question: 'What happens if a slice index is out of bounds in Python?',
            context: 'Edge Cases',
            defaultAnswer: 'Unlike single index lookups (which throw an IndexError), slicing handles out-of-range indices gracefully by clamping them to valid bounds without raising an error.',
            suggestedPoints: ['No IndexError raised', 'Clamps to boundaries', 'Safe subsetting', 'Empty list if beyond length']
          },
          {
            id: 5,
            question: 'How do you reverse a string in Python without using slicing?',
            context: 'Alternative Algorithms',
            defaultAnswer: 'You can use `"".join(reversed(text))` or a traditional loop appending characters in reverse order.',
            suggestedPoints: ['reversed() iterator', 'str.join() method', 'Two-pointer approach', 'Slicing [::-1] is most Pythonic']
          }
        ]
      },
      {
        id: 6,
        module: 1,
        moduleTitle: 'Python Fundamentals',
        title: 'Operators in Python',
        subtitle: 'Arithmetic, comparison, logical, assignment, membership and identity operators.',
        duration: '20 min',
        isAssessment: false,
        objectives: [
          'Arithmetic operators',
          'Comparison operators',
          'Logical operators',
          'Assignment operators',
          'Membership operators',
          'Identity operators',
          'Operator precedence'
        ],
        gameTitle: 'Operator Mission',
        gameType: 'operator_mission',
        mcqs: [
          {
            id: 1,
            question: 'What is the result of 17 // 5 (floor division) in Python?',
            options: ['3.4', '3', '2', '3.0'],
            correct: 1,
            explanation: 'The // operator performs floor division, rounding down to the nearest integer (3).'
          },
          {
            id: 2,
            question: 'Which operator is used to calculate the remainder of division?',
            options: ['%', '//', '/', '**'],
            correct: 0,
            explanation: 'The modulo operator % returns the remainder of division (e.g. 10 % 3 is 1).'
          },
          {
            id: 3,
            question: 'What is the difference between == and is in Python?',
            options: [
              '== compares values; is compares memory identity',
              'is compares values; == compares memory identity',
              'They are completely identical',
              'is is only for numbers'
            ],
            correct: 0,
            explanation: '== checks equality of content, while `is` tests whether both variables refer to the exact same object in memory.'
          },
          {
            id: 4,
            question: 'What does not (5 > 3) evaluate to?',
            options: ['True', 'False', 'None', 'Error'],
            correct: 1,
            explanation: '5 > 3 is True; the logical `not` inverts it to False.'
          },
          {
            id: 5,
            question: 'What operator is used for exponentiation (power) in Python?',
            options: ['^', '**', '^^', 'pow'],
            correct: 1,
            explanation: '2 ** 3 evaluates 2 to the power of 3, resulting in 8.'
          }
        ],
        codingChallenges: [
          {
            id: 1,
            title: 'Challenge 1: Modulo Operator',
            instruction: 'Find the remainder of 29 divided by 5 using the % operator and print it.',
            starterCode: `remainder = 29 % 5\nprint(remainder)`,
            expectedKeywords: ['29', '%', '5', 'print'],
            expectedOutputText: '4',
            hint: 'Use 29 % 5.'
          },
          {
            id: 2,
            title: 'Challenge 2: Exponentiation',
            instruction: 'Calculate 2 to the power of 8 using ** and print the result.',
            starterCode: `res = 2 ** 8\nprint(res)`,
            expectedKeywords: ['2', '**', '8', 'print'],
            expectedOutputText: '256',
            hint: 'Use 2 ** 8.'
          },
          {
            id: 3,
            title: 'Challenge 3: Comparison Expression',
            instruction: 'Create two variables x = 15, y = 20. Print the boolean result of x < y.',
            starterCode: `x = 15\ny = 20\nprint(x < y)`,
            expectedKeywords: ['x', 'y', '<', 'print'],
            expectedOutputText: 'True',
            hint: 'Use print(x < y).'
          },
          {
            id: 4,
            title: 'Challenge 4: Logical AND',
            instruction: 'Evaluate whether a = 10 is greater than 5 AND less than 20. Print the boolean result.',
            starterCode: `a = 10\nprint(a > 5 and a < 20)`,
            expectedKeywords: ['a', 'and', 'print'],
            expectedOutputText: 'True',
            hint: 'Use a > 5 and a < 20.'
          },
          {
            id: 5,
            title: 'Challenge 5: Membership Check',
            instruction: 'Given skills = ["SQL", "Python"], check if "Python" is in skills and print the result.',
            starterCode: `skills = ["SQL", "Python"]\nprint("Python" in skills)`,
            expectedKeywords: ['skills', 'in', 'print'],
            expectedOutputText: 'True',
            hint: 'Use "Python" in skills.'
          }
        ],
        interviewQuestions: [
          {
            id: 1,
            question: 'Explain the difference between == and `is` with a practical example.',
            context: 'Equality vs Identity',
            defaultAnswer: '`==` compares value equality. `is` checks memory address identity. Two separate lists `a = [1, 2]` and `b = [1, 2]` have `a == b` as True, but `a is b` as False.',
            suggestedPoints: ['== checks values', 'is checks id() in memory', 'Singleton checks like `is None`', 'List equality example']
          },
          {
            id: 2,
            question: 'What is short-circuit evaluation in Python logical operators?',
            context: 'Boolean Logic',
            defaultAnswer: 'In `and` / `or` expressions, Python stops evaluating as soon as the outcome is determined. If the first operand of `or` is True, the second operand is never evaluated.',
            suggestedPoints: ['Short-circuit optimization', 'and stops at first False', 'or stops at first True', 'Prevents null pointer or division by zero errors']
          },
          {
            id: 3,
            question: 'What is the order of operator precedence in Python?',
            context: 'Precedence Rules',
            defaultAnswer: 'Parentheses () have highest priority, followed by exponentiation (**), multiplication/division (*, /, //, %), addition/subtraction (+, -), comparisons, and logical operators (not, and, or).',
            suggestedPoints: ['Parentheses first', 'Exponentiation before multiply', 'Arithmetic before comparison', 'not, and, or last']
          },
          {
            id: 4,
            question: 'How does the modulo operator % help in identifying even and odd numbers?',
            context: 'Practical Math',
            defaultAnswer: 'Any number n % 2 == 0 is even, while n % 2 != 0 is odd. It is also used for cyclic indexing and wrapping operations.',
            suggestedPoints: ['n % 2 == 0 for even', 'Cyclic indexing', 'Clock arithmetic', 'Batching operations']
          },
          {
            id: 5,
            question: 'Why should you always compare with `None` using `is None` instead of `== None`?',
            context: 'Best Practices & PEP 8',
            defaultAnswer: 'PEP 8 mandates `is None` because `None` is a unique singleton in Python memory, and `is` is faster and cannot be overridden by class `__eq__` methods.',
            suggestedPoints: ['None is a singleton', 'PEP 8 guideline', 'Cannot be overridden by __eq__', 'Faster reference comparison']
          }
        ]
      },
      {
        id: 7,
        module: 1,
        moduleTitle: 'Python Fundamentals',
        title: 'Built-in Functions & Methods',
        subtitle: 'len(), type(), sum(), min(), max(), sorted(), range(), enumerate() and methods.',
        duration: '25 min',
        isAssessment: false,
        objectives: [
          'len()',
          'type()',
          'sum()',
          'min()',
          'max()',
          'sorted()',
          'range()',
          'enumerate()',
          'Common Python methods'
        ],
        gameTitle: 'Function Detective',
        gameType: 'function_detective',
        mcqs: [
          {
            id: 1,
            question: 'What does sum([10, 20, 30]) return in Python?',
            options: ['60', '30', 'Error', '50'],
            correct: 0,
            explanation: 'The built-in sum() function sums all numbers in an iterable, resulting in 60.'
          },
          {
            id: 2,
            question: 'What is the return type of range(5)?',
            options: ['list', 'range object', 'generator', 'tuple'],
            correct: 1,
            explanation: 'In Python 3, range() returns a lazy, memory-efficient range sequence object.'
          },
          {
            id: 3,
            question: 'What does enumerate(["a", "b"]) provide during iteration?',
            options: [
              'Only indices',
              'Only elements',
              'Tuples containing (index, element)',
              'Reversed list'
            ],
            correct: 2,
            explanation: 'enumerate() yields pairs of (count, value), allowing direct access to loop index and item.'
          },
          {
            id: 4,
            question: 'What is the difference between list.sort() and sorted(list)?',
            options: [
              'list.sort() sorts in place; sorted() returns a new sorted list',
              'sorted() modifies in place; list.sort() returns a copy',
              'They are identical',
              'sorted() only works on numbers'
            ],
            correct: 0,
            explanation: 'list.sort() modifies the original list and returns None; sorted() returns a brand new sorted list.'
          },
          {
            id: 5,
            question: 'Which function finds the highest value in a sequence?',
            options: ['highest()', 'top()', 'max()', 'peak()'],
            correct: 2,
            explanation: 'The built-in max() function returns the largest item in an iterable.'
          }
        ],
        codingChallenges: [
          {
            id: 1,
            title: 'Challenge 1: Sum and Length',
            instruction: 'Given scores = [80, 90, 70], calculate the average score using sum() and len(). Print the average.',
            starterCode: `scores = [80, 90, 70]\navg = sum(scores) / len(scores)\nprint(avg)`,
            expectedKeywords: ['scores', 'sum', 'len', 'print'],
            expectedOutputText: '80.0',
            hint: 'Divide sum(scores) by len(scores).'
          },
          {
            id: 2,
            title: 'Challenge 2: Min and Max',
            instruction: 'Given prices = [45, 12, 89, 23], find the minimum and maximum using min() and max(). Print both.',
            starterCode: `prices = [45, 12, 89, 23]\nprint(min(prices), max(prices))`,
            expectedKeywords: ['prices', 'min', 'max', 'print'],
            expectedOutputText: '12 89',
            hint: 'Call print(min(prices), max(prices)).'
          },
          {
            id: 3,
            title: 'Challenge 3: Sorted List',
            instruction: 'Given vals = [5, 2, 8, 1], create a sorted copy in ascending order using sorted() and print it.',
            starterCode: `vals = [5, 2, 8, 1]\nprint(sorted(vals))`,
            expectedKeywords: ['vals', 'sorted', 'print'],
            expectedOutputText: '[1, 2, 5, 8]',
            hint: 'Use sorted(vals).'
          },
          {
            id: 4,
            title: 'Challenge 4: Range to List',
            instruction: 'Generate numbers from 1 to 5 using range(1, 6) and convert to a list using list(). Print the list.',
            starterCode: `nums = list(range(1, 6))\nprint(nums)`,
            expectedKeywords: ['range', 'list', 'print'],
            expectedOutputText: '[1, 2, 3, 4, 5]',
            hint: 'Use list(range(1, 6)).'
          },
          {
            id: 5,
            title: 'Challenge 5: Enumerate Indexing',
            instruction: 'Loop through animals = ["dog", "cat"] using enumerate() and print each index and animal.',
            starterCode: `animals = ["dog", "cat"]\nfor idx, animal in enumerate(animals):\n    print(idx, animal)`,
            expectedKeywords: ['animals', 'enumerate', 'for', 'print'],
            expectedOutputText: '0 dog\n1 cat',
            hint: 'Use for idx, animal in enumerate(animals): print(idx, animal).'
          }
        ],
        interviewQuestions: [
          {
            id: 1,
            question: 'Why does range() in Python 3 return a range object instead of a full list?',
            context: 'Memory Optimization',
            defaultAnswer: 'range() generates numbers lazily on-demand. It consumes the same small amount of memory whether the range is 10 or 10,000,000, preventing out-of-memory errors.',
            suggestedPoints: ['Lazy evaluation', 'Constant memory footprint O(1)', 'Performance advantage in loops', 'Can be converted to list if needed']
          },
          {
            id: 2,
            question: 'Explain the difference between list.sort() and sorted(iterable).',
            context: 'Sorting In-Place vs Copy',
            defaultAnswer: '`list.sort()` is a list method that modifies the list in place and returns None. `sorted()` is a built-in function that accepts any iterable and returns a brand-new sorted list.',
            suggestedPoints: ['list.sort() is in-place mutation', 'sorted() returns new list', 'sorted() accepts any iterable', 'list.sort() saves memory']
          },
          {
            id: 3,
            question: 'How does enumerate() improve code readability compared to using range(len(seq))?',
            context: 'Pythonic Code',
            defaultAnswer: '`enumerate()` yields (index, item) tuples directly, avoiding cumbersome index lookups like `seq[i]`, reducing off-by-one bugs and writing cleaner Pythonic code.',
            suggestedPoints: ['Direct access to index and value', 'Avoids seq[i] indexing', 'Eliminates off-by-one errors', 'Configurable start index']
          },
          {
            id: 4,
            question: 'How do you find both the index and value of the maximum item in a list?',
            context: 'Combined Functions',
            defaultAnswer: 'You can use `max_val = max(lst)` followed by `lst.index(max_val)`, or use `max(enumerate(lst), key=lambda x: x[1])`.',
            suggestedPoints: ['max() with key parameter', 'lst.index(max(lst))', 'enumerate() pairing', 'Time complexity O(N)']
          },
          {
            id: 5,
            question: 'What is the role of the zip() built-in function in Python?',
            context: 'Iteration Helpers',
            defaultAnswer: '`zip()` combines multiple iterables element-by-element into tuples, stopping at the shortest iterable (or using itertools.zip_longest).',
            suggestedPoints: ['Parallel iteration', 'Combines into tuples', 'Stops at shortest iterable', 'Creating dictionaries via dict(zip(k, v))']
          }
        ]
      },
      {
        id: 8,
        module: 1,
        moduleTitle: 'Python Fundamentals',
        title: 'Skill Mastery Challenge — Python Fundamentals',
        subtitle: 'Comprehensive 40-MCQ assessment testing all Python Fundamentals concepts.',
        duration: '45 min',
        isAssessment: true,
        objectives: [
          'Core Python Syntax & Execution',
          'Variables & Primitive Types',
          'String Methods & Formatting',
          'Collections: Lists, Tuples, Sets, Dictionaries',
          'Indexing, Slicing & Steps',
          'Operators & Precedence',
          'Built-in Functions & Methods'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'MODULE 2 — PYTHON CONTROL FLOW',
    description: 'Master statements, indentation, decision-making, loops, control keywords, and conditional logic.',
    topicCount: 5,
    topics: [
      {
        id: 9,
        module: 2,
        moduleTitle: 'Python Control Flow',
        title: 'Statements, Indentation & Conditionals',
        subtitle: 'Python statements, Indentation, if, elif, else, nested conditions.',
        duration: '20 min',
        isAssessment: false,
        objectives: [
          'Python statements',
          'Indentation',
          'if',
          'elif',
          'else',
          'Nested conditions',
          'Practical decision-making'
        ],
        gameTitle: 'Decision Maker',
        gameType: 'decision_maker',
        mcqs: [
          {
            id: 1,
            question: 'How does Python define code blocks instead of using curly braces {}?',
            options: ['Indentation (whitespace)', 'Semicolons', 'Parentheses', 'Keywords begin/end'],
            correct: 0,
            explanation: 'Python uses consistent indentation (typically 4 spaces) to delimit code blocks.'
          },
          {
            id: 2,
            question: 'Which keyword represents "else if" in Python?',
            options: ['elseif', 'else if', 'elif', 'case'],
            correct: 2,
            explanation: 'The `elif` keyword is Python’s shorthand for else if conditional chaining.'
          },
          {
            id: 3,
            question: 'What is the standard indentation recommended by PEP 8?',
            options: ['2 spaces', '4 spaces', '1 tab', '8 spaces'],
            correct: 1,
            explanation: 'PEP 8 strongly specifies 4 spaces per indentation level.'
          },
          {
            id: 4,
            question: 'What is executed if none of the if or elif conditions evaluate to True?',
            options: ['The else block (if present)', 'A runtime exception is raised', 'The first condition', 'The program crashes'],
            correct: 0,
            explanation: 'The optional else block acts as the fallback when all prior conditions evaluate to False.'
          },
          {
            id: 5,
            question: 'What is the ternary conditional expression syntax in Python?',
            options: [
              'condition ? val1 : val2',
              'val1 if condition else val2',
              'if condition then val1 else val2',
              'condition(val1, val2)'
            ],
            correct: 1,
            explanation: 'Python uses `x = val1 if condition else val2` for inline conditional assignment.'
          }
        ],
        codingChallenges: [
          {
            id: 1,
            title: 'Challenge 1: Positive Number Check',
            instruction: 'Given num = 15, write an if-else statement to print "Positive" if num > 0, else "Non-positive".',
            starterCode: `num = 15\nif num > 0:\n    print("Positive")\nelse:\n    print("Non-positive")`,
            expectedKeywords: ['num', 'if', 'else', 'print'],
            expectedOutputText: 'Positive',
            hint: 'Use if num > 0: print("Positive") else: print("Non-positive").'
          },
          {
            id: 2,
            title: 'Challenge 2: Grade Classifier',
            instruction: 'Given score = 85, write an if-elif-else block: if >= 90 print "A", elif >= 80 print "B", else print "C".',
            starterCode: `score = 85\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelse:\n    print("C")`,
            expectedKeywords: ['score', 'if', 'elif', 'print'],
            expectedOutputText: 'B',
            hint: 'Use elif score >= 80: print("B").'
          },
          {
            id: 3,
            title: 'Challenge 3: Even or Odd',
            instruction: 'Given n = 42, check if n % 2 == 0. Print "Even" if true, else "Odd".',
            starterCode: `n = 42\nif n % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")`,
            expectedKeywords: ['n', '%', 'if', 'print'],
            expectedOutputText: 'Even',
            hint: 'Use n % 2 == 0.'
          },
          {
            id: 4,
            title: 'Challenge 4: Nested Conditionals',
            instruction: 'Given age = 20 and has_license = True, print "Can Drive" only if age >= 18 and has_license is True.',
            starterCode: `age = 20\nhas_license = True\nif age >= 18 and has_license:\n    print("Can Drive")`,
            expectedKeywords: ['age', 'has_license', 'if', 'print'],
            expectedOutputText: 'Can Drive',
            hint: 'Use if age >= 18 and has_license: print("Can Drive").'
          },
          {
            id: 5,
            title: 'Challenge 5: Inline Ternary',
            instruction: 'Given status_code = 200, assign msg = "OK" if status_code == 200 else "Error". Print msg.',
            starterCode: `status_code = 200\nmsg = "OK" if status_code == 200 else "Error"\nprint(msg)`,
            expectedKeywords: ['status_code', 'msg', 'if', 'else', 'print'],
            expectedOutputText: 'OK',
            hint: 'Use msg = "OK" if status_code == 200 else "Error".'
          }
        ],
        interviewQuestions: [
          {
            id: 1,
            question: 'Why does Python rely on indentation rather than curly braces?',
            context: 'Language Philosophy',
            defaultAnswer: 'Guido van Rossum chose whitespace indentation to enforce visual readability and eliminate discrepancy between how code looks and how it executes.',
            suggestedPoints: ['Readability is paramount (Zen of Python)', 'No redundant braces', 'Clean consistent formatting', 'IndentationError at compile time']
          },
          {
            id: 2,
            question: 'What is truthiness in Python and what values evaluate to False?',
            context: 'Conditional Evaluation',
            defaultAnswer: 'Values in Python have boolean truth value. Falsey values include: False, None, 0, 0.0, empty strings `""`, empty lists `[]`, empty tuples `()`, and empty dicts `{}`.',
            suggestedPoints: ['Truthy vs Falsy', 'None, 0, False are falsy', 'Empty collections are falsy', 'Simplifies checks like `if not my_list:`']
          },
          {
            id: 3,
            question: 'When should you use elif chains instead of multiple independent if statements?',
            context: 'Control Flow Architecture',
            defaultAnswer: 'Use elif when conditions are mutually exclusive, so evaluation halts as soon as one condition matches. Multiple if statements evaluate all conditions regardless of prior matches.',
            suggestedPoints: ['Mutual exclusivity', 'Performance optimization', 'Prevents multiple branches firing', 'Fallback else logic']
          },
          {
            id: 4,
            question: 'What is the match-case statement in Python 3.10+ and how does it compare to if-elif?',
            context: 'Modern Features',
            defaultAnswer: 'Structural pattern matching (match/case) allows pattern extraction and destructuring of complex data structures (tuples, dicts) more cleanly than long if-elif chains.',
            suggestedPoints: ['Introduced in Python 3.10', 'Structural pattern matching', 'Destructuring capabilities', 'Clean alternative to nested if-elif']
          },
          {
            id: 5,
            question: 'How do nested conditionals impact code maintainability and how can they be refactored?',
            context: 'Clean Architecture',
            defaultAnswer: 'Deep nesting creates "arrow anti-pattern" code. It can be refactored using guard clauses, early returns, compound boolean expressions, or dictionary mapping.',
            suggestedPoints: ['Guard clauses with early return', 'Compound boolean logic', 'Refactoring into functions', 'Improves cyclomatic complexity']
          }
        ]
      },
      {
        id: 10,
        module: 2,
        moduleTitle: 'Python Control Flow',
        title: 'Loops & Iterations',
        subtitle: 'for loop, while loop, range(), nested loops and sequence traversal.',
        duration: '25 min',
        isAssessment: false,
        objectives: [
          'for loop',
          'while loop',
          'range()',
          'Nested loops',
          'Iterating through lists and strings'
        ],
        gameTitle: 'Loop Runner',
        gameType: 'loop_runner',
        mcqs: [
          {
            id: 1,
            question: 'Which loop in Python is typically used when the number of iterations is known beforehand?',
            options: ['for loop', 'while loop', 'do-while loop', 'repeat loop'],
            correct: 0,
            explanation: 'The for loop in Python is designed for iterating over known sequences or ranges.'
          },
          {
            id: 2,
            question: 'How many times will while count < 3 run if count starts at 0 and increments by 1?',
            options: ['2 times', '3 times', '4 times', 'Infinite'],
            correct: 1,
            explanation: 'It will run for count = 0, 1, and 2, which is exactly 3 times before count reaches 3.'
          },
          {
            id: 3,
            question: 'Does Python have a built-in do-while loop construct?',
            options: ['Yes', 'No', 'Only in Python 2', 'Only with decorators'],
            correct: 1,
            explanation: 'Python does not feature a do-while loop; developers use `while True:` with an internal conditional break.'
          },
          {
            id: 4,
            question: 'What does the optional else clause on a for loop do?',
            options: [
              'Runs if the loop terminates normally without encountering a break',
              'Runs if the loop crashes',
              'Runs before the loop starts',
              'Runs only when the loop is broken'
            ],
            correct: 0,
            explanation: 'The loop else block executes only if the loop completes all iterations without hitting a break statement.'
          },
          {
            id: 5,
            question: 'What is generated by range(2, 8, 2)?',
            options: ['2, 4, 6', '2, 4, 6, 8', '2, 3, 4', '4, 6, 8'],
            correct: 0,
            explanation: 'range(2, 8, 2) starts at 2, stops before 8, stepping by 2: values 2, 4, and 6.'
          }
        ],
        codingChallenges: [
          {
            id: 1,
            title: 'Challenge 1: Iterating a List',
            instruction: 'Given tools = ["SQL", "Python"], print each tool on a new line using a for loop.',
            starterCode: `tools = ["SQL", "Python"]\nfor tool in tools:\n    print(tool)`,
            expectedKeywords: ['tools', 'for', 'in', 'print'],
            expectedOutputText: 'SQL\nPython',
            hint: 'Use for tool in tools: print(tool).'
          },
          {
            id: 2,
            title: 'Challenge 2: Sum with For Loop',
            instruction: 'Calculate the sum of numbers 1 to 5 using a for loop with range(1, 6) and print the total.',
            starterCode: `total = 0\nfor i in range(1, 6):\n    total += i\nprint(total)`,
            expectedKeywords: ['total', 'for', 'range', 'print'],
            expectedOutputText: '15',
            hint: 'Initialize total = 0 and add i inside the loop.'
          },
          {
            id: 3,
            title: 'Challenge 3: Basic While Loop',
            instruction: 'Use a while loop to print numbers from 1 up to 3.',
            starterCode: `count = 1\nwhile count <= 3:\n    print(count)\n    count += 1`,
            expectedKeywords: ['count', 'while', 'print'],
            expectedOutputText: '1\n2\n3',
            hint: 'Increment count by 1 each iteration.'
          },
          {
            id: 4,
            title: 'Challenge 4: Nested Loops Grid',
            instruction: 'Print coordinates (r, c) for r in range(2) and c in range(2).',
            starterCode: `for r in range(2):\n    for c in range(2):\n        print(r, c)`,
            expectedKeywords: ['for', 'range', 'print'],
            expectedOutputText: '0 0\n0 1\n1 0\n1 1',
            hint: 'Nest one for loop inside the other.'
          },
          {
            id: 5,
            title: 'Challenge 5: Character Traversal',
            instruction: 'Traverse the string word = "AI" and print each character.',
            starterCode: `word = "AI"\nfor ch in word:\n    print(ch)`,
            expectedKeywords: ['word', 'for', 'in', 'print'],
            expectedOutputText: 'A\nI',
            hint: 'Strings are iterable sequences.'
          }
        ],
        interviewQuestions: [
          {
            id: 1,
            question: 'How does the iterator protocol work under the hood in a Python for loop?',
            context: 'Python Internals',
            defaultAnswer: 'Python calls `iter()` on the sequence to get an iterator object, then repeatedly calls `next()` on it until a `StopIteration` exception is caught.',
            suggestedPoints: ['__iter__() method', '__next__() method', 'StopIteration exception handling', 'Works on any iterable']
          },
          {
            id: 2,
            question: 'What is the risk of a while loop and how do you safeguard against it?',
            context: 'Defensive Programming',
            defaultAnswer: 'If the loop condition never changes to False, an infinite loop occurs that locks the thread. Safeguards include guaranteed state incrementation and safety timeout counters.',
            suggestedPoints: ['Infinite loop condition', 'Incrementing state variables', 'Loop iteration limit guard', 'Graceful break conditions']
          },
          {
            id: 3,
            question: 'Explain the unique behavior of the else clause attached to a for or while loop.',
            context: 'Python Specifics',
            defaultAnswer: 'The else block executes only if the loop finishes all iterations naturally without encountering a `break`. If terminated by `break`, the else block is bypassed.',
            suggestedPoints: ['Executes on natural completion', 'Bypassed if break occurs', 'Useful for search loops', 'Alternative to boolean flag variables']
          },
          {
            id: 4,
            question: 'What is the computational complexity of nested loops and how do you optimize them?',
            context: 'Algorithmic Efficiency',
            defaultAnswer: 'Two nested loops over N items run in O(N^2) quadratic time. They can be optimized by using hash sets or dictionaries for O(1) lookups instead of repeated inner searches.',
            suggestedPoints: ['O(N^2) complexity', 'Using sets or dicts for O(1) lookups', 'Vectorization with NumPy/Pandas', 'Avoiding unnecessary inner passes']
          },
          {
            id: 5,
            question: 'How does iterating over a dictionary keys vs values vs items differ?',
            context: 'Dictionary Traversal',
            defaultAnswer: 'Iterating over dict directly yields keys (`for k in d:`). `d.values()` yields values only, and `d.items()` yields key-value tuples (`for k, v in d.items():`).',
            suggestedPoints: ['Default iteration gives keys', '.values() gives values', '.items() gives (key, value) pairs', 'Tuple unpacking in loop']
          }
        ]
      },
      {
        id: 11,
        module: 2,
        moduleTitle: 'Python Control Flow',
        title: 'Loop Control & Conditional Looping',
        subtitle: 'break, continue, pass, infinite loops and conditional flow.',
        duration: '20 min',
        isAssessment: false,
        objectives: [
          'break',
          'continue',
          'pass',
          'Infinite loops',
          'Nested loops',
          'Conditional loops'
        ],
        gameTitle: 'Loop Rescue',
        gameType: 'loop_rescue',
        mcqs: [
          {
            id: 1,
            question: 'Which statement immediately terminates the loop and moves control to the code following it?',
            options: ['continue', 'break', 'pass', 'stop'],
            correct: 1,
            explanation: 'The `break` statement instantly exits the innermost loop enclosing it.'
          },
          {
            id: 2,
            question: 'Which statement skips the remaining code of the current iteration and jumps to the next iteration?',
            options: ['skip', 'next', 'continue', 'pass'],
            correct: 2,
            explanation: 'The `continue` statement skips to the evaluation of the next iteration of the loop.'
          },
          {
            id: 3,
            question: 'What is the purpose of the pass statement in Python?',
            options: [
              'It acts as a placeholder doing nothing (null operation)',
              'It breaks the loop',
              'It skips to the next function',
              'It raises an error'
            ],
            correct: 0,
            explanation: 'The `pass` statement is a syntactic placeholder where code is required but no action is needed.'
          },
          {
            id: 4,
            question: 'What happens when break is executed inside an inner loop of a nested loop structure?',
            options: [
              'Both loops are terminated',
              'Only the innermost loop is terminated',
              'The entire program exits',
              'The outer loop restarts'
            ],
            correct: 1,
            explanation: 'A break statement exits ONLY the immediate innermost loop enclosing it.'
          },
          {
            id: 5,
            question: 'How do you create an intentional infinite loop in Python?',
            options: ['while True:', 'for forever:', 'loop():', 'while 0:'],
            correct: 0,
            explanation: '`while True:` creates a loop whose condition never becomes False unless an explicit break or return occurs.'
          }
        ],
        codingChallenges: [
          {
            id: 1,
            title: 'Challenge 1: Break on Target',
            instruction: 'Loop through numbers 1 to 10. When the number reaches 4, break out of the loop and print "Stopped".',
            starterCode: `for n in range(1, 11):\n    if n == 4:\n        print("Stopped")\n        break`,
            expectedKeywords: ['for', 'break', 'Stopped', 'print'],
            expectedOutputText: 'Stopped',
            hint: 'Use if n == 4: print("Stopped"); break.'
          },
          {
            id: 2,
            title: 'Challenge 2: Skip Even Numbers',
            instruction: 'Loop through range(1, 6). Use continue to skip even numbers and print only odd numbers.',
            starterCode: `for i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    print(i)`,
            expectedKeywords: ['for', 'continue', '%', 'print'],
            expectedOutputText: '1\n3\n5',
            hint: 'Use if i % 2 == 0: continue.'
          },
          {
            id: 3,
            title: 'Challenge 3: Pass Placeholder',
            instruction: 'Write a loop over range(3) that does pass for i == 1, but prints all numbers.',
            starterCode: `for i in range(3):\n    if i == 1:\n        pass\n    print(i)`,
            expectedKeywords: ['pass', 'print'],
            expectedOutputText: '0\n1\n2',
            hint: 'pass is a no-op.'
          },
          {
            id: 4,
            title: 'Challenge 4: Search with Loop Else',
            instruction: 'Search for target = 99 in nums = [1, 2, 3]. If not found in the loop, print "Not Found" using else.',
            starterCode: `nums = [1, 2, 3]\nfor x in nums:\n    if x == 99:\n        print("Found")\n        break\nelse:\n    print("Not Found")`,
            expectedKeywords: ['nums', 'for', 'else:', 'Not Found', 'print'],
            expectedOutputText: 'Not Found',
            hint: 'Place else: print("Not Found") at the same indentation level as for.'
          },
          {
            id: 5,
            title: 'Challenge 5: While Loop Break',
            instruction: 'Use while True with x starting at 0, incrementing each time. Break when x reaches 3. Print x.',
            starterCode: `x = 0\nwhile True:\n    x += 1\n    if x == 3:\n        break\nprint(x)`,
            expectedKeywords: ['while True', 'break', 'print'],
            expectedOutputText: '3',
            hint: 'Use while True: x += 1 if x == 3: break.'
          }
        ],
        interviewQuestions: [
          {
            id: 1,
            question: 'What is the architectural difference between break, continue, and pass?',
            context: 'Control Flow Keywords',
            defaultAnswer: '`break` halts loop execution entirely. `continue` terminates the current iteration and jumps to the next cycle. `pass` is a syntactic placeholder that does nothing.',
            suggestedPoints: ['break exits loop', 'continue skips to next cycle', 'pass is a no-op placeholder', 'Scope of execution']
          },
          {
            id: 2,
            question: 'How do you break out of multiple nested loops simultaneously in Python?',
            context: 'Nested Loops',
            defaultAnswer: 'Since `break` only exits the innermost loop, breaking multiple levels is achieved by refactoring into a function and using `return`, or using a boolean flag variable.',
            suggestedPoints: ['Refactoring into a function with return', 'Boolean flag variable', 'Exception raising (rare)', 'break only affects one level']
          },
          {
            id: 3,
            question: 'Where is pass commonly used in production code?',
            context: 'Idiomatic Python',
            defaultAnswer: '`pass` is used when defining stub functions/classes during architecture drafting, empty subclasses, or empty exception handling blocks (e.g. `except KeyError: pass`).',
            suggestedPoints: ['Stub functions and interfaces', 'Empty exception handling', 'Abstract base classes', 'Syntactic requirement']
          },
          {
            id: 4,
            question: 'What are common anti-patterns involving while True loops in microservices?',
            context: 'Production Reliability',
            defaultAnswer: 'Polling without sleep causes 100% CPU spikes. Failing to handle network exceptions inside the loop can crash the worker service prematurely.',
            suggestedPoints: ['Busy-waiting CPU spikes (need time.sleep)', 'Unhandled worker exceptions', 'Missing graceful termination signals', 'Memory leaks in accumulated state']
          },
          {
            id: 5,
            question: 'How does continue affect performance in large data filtering loops?',
            context: 'Performance Optimization',
            defaultAnswer: '`continue` avoids running expensive downstream computation for irrelevant records, but vectorization with boolean indexing in Pandas/NumPy is much faster for large datasets.',
            suggestedPoints: ['Avoids expensive calculations', 'Cleaner than deeply nested if', 'Vectorization preferred for large datasets', 'Short-circuits iteration overhead']
          }
        ]
      },
      {
        id: 12,
        module: 2,
        moduleTitle: 'Python Control Flow',
        title: 'Skill Mastery Challenge — Python Control Flow',
        subtitle: 'Comprehensive 40-MCQ assessment testing all Python Control Flow concepts.',
        duration: '45 min',
        isAssessment: true,
        objectives: [
          'Indentation Rules & PEP 8 Standards',
          'if-elif-else Conditional Branching',
          'Ternary Conditional Expressions',
          'for and while Loop Semantics',
          'range() and Nested Iterations',
          'break, continue and pass Mechanics',
          'Loop else Clauses'
        ]
      },
      {
        id: 13,
        module: 2,
        moduleTitle: 'Python Control Flow',
        title: 'Mid Course Quiz',
        subtitle: 'Comprehensive 40-MCQ mid-course exam spanning Fundamentals & Control Flow.',
        duration: '45 min',
        isAssessment: true,
        objectives: [
          'Fundamentals: Types, Strings, Collections, Operators',
          'Control Flow: Conditionals, Loops, Control Keywords',
          'Integration: Algorithm Traversal & Sequence Logic'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'MODULE 3 — FUNCTIONS & ADVANCED PYTHON',
    description: 'Master custom functions, *args/**kwargs, lambdas, comprehensions, OOP principles, and exception handling.',
    topicCount: 7,
    topics: [
      {
        id: 14,
        module: 3,
        moduleTitle: 'Functions & Advanced Python',
        title: 'Custom Functions in Python',
        subtitle: 'Creating functions, parameters, arguments, return values, default parameters, scope.',
        duration: '25 min',
        isAssessment: false,
        objectives: [
          'Creating functions',
          'Parameters',
          'Arguments',
          'Return values',
          'Default parameters',
          'Scope'
        ],
        gameTitle: 'Function Builder',
        gameType: 'function_builder',
        mcqs: [
          {
            id: 1,
            question: 'Which keyword is used to define a function in Python?',
            options: ['func', 'def', 'function', 'define'],
            correct: 1,
            explanation: 'Functions are defined using the `def` keyword followed by the function name and parentheses.'
          },
          {
            id: 2,
            question: 'What does a Python function return if it contains no explicit return statement?',
            options: ['0', 'False', 'None', 'Error'],
            correct: 2,
            explanation: 'Functions that execute to the end without reaching a return statement implicitly return `None`.'
          },
          {
            id: 3,
            question: 'What is a default parameter in a function definition?',
            options: [
              'A parameter that takes a pre-assigned value if no argument is passed',
              'A parameter that cannot be changed',
              'A parameter that must be passed first',
              'A keyword-only argument'
            ],
            correct: 0,
            explanation: 'Default parameters allow arguments to be omitted during function calls, using the fallback default.'
          },
          {
            id: 4,
            question: 'What rule dictates the order of default and non-default parameters?',
            options: [
              'Non-default parameters must precede default parameters',
              'Default parameters must precede non-default parameters',
              'The order does not matter',
              'Default parameters are not allowed'
            ],
            correct: 0,
            explanation: 'In Python, non-default parameters must always be declared before default parameters in the parameter list.'
          },
          {
            id: 5,
            question: 'What is the scope of a variable defined inside a function?',
            options: ['Global scope', 'Local scope', 'Module scope', 'Universal scope'],
            correct: 1,
            explanation: 'Variables initialized within a function have local scope and cannot be directly accessed from outside.'
          }
        ],
        codingChallenges: [
          {
            id: 1,
            title: 'Challenge 1: Basic Function',
            instruction: 'Define a function greet(name) that returns "Hello, " + name. Call it with "Python" and print.',
            starterCode: `def greet(name):\n    return "Hello, " + name\n\nprint(greet("Python"))`,
            expectedKeywords: ['def', 'greet', 'return', 'print'],
            expectedOutputText: 'Hello, Python',
            hint: 'Use def greet(name): return f"Hello, {name}".'
          },
          {
            id: 2,
            title: 'Challenge 2: Multiplier Function',
            instruction: 'Write a function multiply(x, y=2) with default parameter y=2. Call multiply(5) and print the result.',
            starterCode: `def multiply(x, y=2):\n    return x * y\n\nprint(multiply(5))`,
            expectedKeywords: ['def', 'multiply', 'y=2', 'print'],
            expectedOutputText: '10',
            hint: 'Use def multiply(x, y=2): return x * y.'
          },
          {
            id: 3,
            title: 'Challenge 3: Return Multiple Values',
            instruction: 'Write a function min_max(nums) that returns both min(nums) and max(nums) as a tuple. Call with [1, 9] and print.',
            starterCode: `def min_max(nums):\n    return min(nums), max(nums)\n\nprint(min_max([1, 9]))`,
            expectedKeywords: ['def', 'min_max', 'return', 'print'],
            expectedOutputText: '(1, 9)',
            hint: 'Return min(nums), max(nums).'
          },
          {
            id: 4,
            title: 'Challenge 4: Even Checker',
            instruction: 'Write a function is_even(n) returning True if n is even, else False. Print is_even(8).',
            starterCode: `def is_even(n):\n    return n % 2 == 0\n\nprint(is_even(8))`,
            expectedKeywords: ['def', 'is_even', 'return', 'print'],
            expectedOutputText: 'True',
            hint: 'Return n % 2 == 0.'
          },
          {
            id: 5,
            title: 'Challenge 5: Variable Scope',
            instruction: 'Create a global variable val = 50. Write a function get_val() that returns val. Print get_val().',
            starterCode: `val = 50\ndef get_val():\n    return val\n\nprint(get_val())`,
            expectedKeywords: ['val = 50', 'def', 'return val', 'print'],
            expectedOutputText: '50',
            hint: 'Functions can read global variables in outer scope.'
          }
        ],
        interviewQuestions: [
          {
            id: 1,
            question: 'How does Python handle argument passing: by value or by reference?',
            context: 'Parameter Passing Semantics',
            defaultAnswer: 'Python uses "pass-by-object-reference" (or call-by-sharing). If an argument is mutable (like a list), modifying it in-place affects the caller; if immutable, reassignment creates a local reference.',
            suggestedPoints: ['Pass-by-object-reference', 'Mutable vs immutable behavior', 'In-place modifications mutate original', 'Reassignment changes local pointer only']
          },
          {
            id: 2,
            question: 'Why is using a mutable default argument (like `def add_item(item, lst=[])`) dangerous?',
            context: 'Common Python Pitfall',
            defaultAnswer: 'Default argument expressions are evaluated once when the function is defined, not per call. A shared mutable list retains modifications across subsequent invocations. Use `lst=None` instead.',
            suggestedPoints: ['Default evaluated once at definition', 'Shared across all function calls', 'Accumulated state bug', 'Idiomatic fix: `lst=None`']
          },
          {
            id: 3,
            question: 'What is the LEGB rule for variable resolution in Python?',
            context: 'Variable Scope',
            defaultAnswer: 'LEGB stands for Local, Enclosing (nested functions), Global (module level), and Built-in namespaces. Python searches these scopes in order from innermost to outermost.',
            suggestedPoints: ['Local scope', 'Enclosing function scope', 'Global module scope', 'Built-in namespace']
          },
          {
            id: 4,
            question: 'What does the `global` and `nonlocal` keyword do in Python functions?',
            context: 'Scope Mutation',
            defaultAnswer: '`global` allows modifying a module-level variable inside a function. `nonlocal` allows modifying a variable in an outer enclosing function scope in closures.',
            suggestedPoints: ['global binds to module namespace', 'nonlocal binds to outer closure', 'Avoid overusing global for clean state', 'Reassignment vs mutation']
          },
          {
            id: 5,
            question: 'What are docstrings and how are they accessed at runtime?',
            context: 'Documentation Standards',
            defaultAnswer: 'A docstring is a string literal placed as the first statement in a function or class. It is stored in the object’s `__doc__` attribute and accessed via `help(fn)`.',
            suggestedPoints: ['First statement in function', 'Triple quotes syntax', 'Accessible via fn.__doc__', 'Used by Sphinx and IDEs']
          }
        ]
      },
      {
        id: 15,
        module: 3,
        moduleTitle: 'Functions & Advanced Python',
        title: 'Advanced Functions',
        subtitle: '*args, **kwargs, Lambda functions, map(), filter(), reduce() and higher-order functions.',
        duration: '25 min',
        isAssessment: false,
        objectives: [
          '*args',
          '**kwargs',
          'Lambda functions',
          'map()',
          'filter()',
          'reduce()',
          'Higher-order functions'
        ],
        gameTitle: 'Function Master',
        gameType: 'function_master',
        mcqs: [
          {
            id: 1,
            question: 'What does *args allow a function to accept?',
            options: [
              'Any arbitrary number of positional arguments as a tuple',
              'Any arbitrary number of keyword arguments as a dict',
              'Only string arguments',
              'A pointer to an array'
            ],
            correct: 0,
            explanation: '*args packs variable positional arguments into an immutable tuple.'
          },
          {
            id: 2,
            question: 'What data structure collects parameters passed to **kwargs?',
            options: ['list', 'tuple', 'dict', 'set'],
            correct: 2,
            explanation: '**kwargs captures arbitrary keyword arguments as a dictionary of key-value pairs.'
          },
          {
            id: 3,
            question: 'What is a lambda function in Python?',
            options: [
              'An anonymous inline function containing a single expression',
              'A built-in data type',
              'A database query function',
              'A multi-line procedure'
            ],
            correct: 0,
            explanation: 'Lambdas are anonymous, single-line functions created with the syntax `lambda args: expression`.'
          },
          {
            id: 4,
            question: 'What does map(lambda x: x * 2, [1, 2, 3]) produce when converted to a list?',
            options: ['[2, 4, 6]', '[1, 2, 3]', '[2, 2, 2]', '[1, 4, 9]'],
            correct: 0,
            explanation: 'map() applies the function to each element, producing [2, 4, 6].'
          },
          {
            id: 5,
            question: 'From which module must reduce() be imported in Python 3?',
            options: ['math', 'functools', 'itertools', 'operator'],
            correct: 1,
            explanation: 'In Python 3, reduce() is part of the `functools` standard library module.'
          }
        ],
        codingChallenges: [
          {
            id: 1,
            title: 'Challenge 1: Arbitrary Args Sum',
            instruction: 'Write a function sum_all(*args) that returns sum(args). Call sum_all(1, 2, 3, 4) and print.',
            starterCode: `def sum_all(*args):\n    return sum(args)\n\nprint(sum_all(1, 2, 3, 4))`,
            expectedKeywords: ['*args', 'sum(args)', 'print'],
            expectedOutputText: '10',
            hint: 'args is a tuple; use sum(args).'
          },
          {
            id: 2,
            title: 'Challenge 2: Keyword Arguments',
            instruction: 'Write a function describe(**kwargs) that prints kwargs. Call describe(role="Analyst", level=7).',
            starterCode: `def describe(**kwargs):\n    print(kwargs)\n\ndescribe(role="Analyst", level=7)`,
            expectedKeywords: ['**kwargs', 'print(kwargs)', 'describe'],
            expectedOutputText: "{'role': 'Analyst', 'level': 7}",
            hint: 'kwargs is received as a dictionary.'
          },
          {
            id: 3,
            title: 'Challenge 3: Lambda Square',
            instruction: 'Create a lambda function square = lambda x: x ** 2. Print square(6).',
            starterCode: `square = lambda x: x ** 2\nprint(square(6))`,
            expectedKeywords: ['lambda', 'square', 'print'],
            expectedOutputText: '36',
            hint: 'Use square = lambda x: x ** 2.'
          },
          {
            id: 4,
            title: 'Challenge 4: Map Transformation',
            instruction: 'Use map() and a lambda to double [10, 20, 30]. Convert to list and print.',
            starterCode: `nums = [10, 20, 30]\ndoubled = list(map(lambda x: x * 2, nums))\nprint(doubled)`,
            expectedKeywords: ['map', 'lambda', 'list', 'print'],
            expectedOutputText: '[20, 40, 60]',
            hint: 'Use list(map(lambda x: x * 2, nums)).'
          },
          {
            id: 5,
            title: 'Challenge 5: Filter Predicate',
            instruction: 'Use filter() and a lambda to keep only numbers greater than 15 from [10, 18, 5, 25]. Print as list.',
            starterCode: `nums = [10, 18, 5, 25]\nfiltered = list(filter(lambda x: x > 15, nums))\nprint(filtered)`,
            expectedKeywords: ['filter', 'lambda', 'list', 'print'],
            expectedOutputText: '[18, 25]',
            hint: 'Use list(filter(lambda x: x > 15, nums)).'
          }
        ],
        interviewQuestions: [
          {
            id: 1,
            question: 'What is a higher-order function in Python, and can you provide examples?',
            context: 'Functional Programming',
            defaultAnswer: 'A higher-order function is a function that takes one or more functions as arguments, or returns a function. Examples include `map()`, `filter()`, `sorted(key=...)`, and decorators.',
            suggestedPoints: ['Functions as first-class citizens', 'Takes function as argument', 'Returns function', 'Decorators and map/filter']
          },
          {
            id: 2,
            question: 'When should you use a lambda function versus a standard def statement?',
            context: 'Code Style & PEP 8',
            defaultAnswer: 'Use lambdas for short, throwaway inline operations (like custom sorting keys in `sorted(data, key=lambda x: x[1])`). If logic exceeds one line or requires reusability, use `def`.',
            suggestedPoints: ['Anonymous one-line functions', 'Sorting key functions', 'PEP 8 advises against assigning lambdas to names', 'Use def for readable multi-line logic']
          },
          {
            id: 3,
            question: 'How do *args and **kwargs enable flexible API and decorator design?',
            context: 'Decorator & API Architecture',
            defaultAnswer: 'They allow wrapper functions to accept any arguments without knowing signatures in advance, forwarding them cleanly to wrapped targets: `func(*args, **kwargs)`.',
            suggestedPoints: ['Transparent argument forwarding', 'Essential for decorators', 'Extensible base classes', 'Unpacking operators * and **']
          },
          {
            id: 4,
            question: 'What is a closure in Python and how does it retain state?',
            context: 'Advanced Scopes',
            defaultAnswer: 'A closure is an inner function that retains access to variables from its enclosing lexical scope even after the outer function has finished executing.',
            suggestedPoints: ['Nested inner function', 'Enclosing scope retention', '__closure__ attribute', 'Factory function patterns']
          },
          {
            id: 5,
            question: 'What are decorators and how are they implemented in Python?',
            context: 'Metaprogramming',
            defaultAnswer: 'Decorators are callable higher-order functions that modify or extend the behavior of another function without altering its source code, applied using the `@decorator` syntax.',
            suggestedPoints: ['@decorator syntax sugar', 'Takes func, returns wrapper', 'functools.wraps preservation', 'Used for logging, auth, timing']
          }
        ]
      },
      {
        id: 16,
        module: 3,
        moduleTitle: 'Functions & Advanced Python',
        title: 'Advanced Looping & Comprehensions',
        subtitle: 'List, dictionary, set comprehensions, nested comprehensions and examples.',
        duration: '20 min',
        isAssessment: false,
        objectives: [
          'List comprehension',
          'Dictionary comprehension',
          'Set comprehension',
          'Nested comprehensions',
          'Practical examples'
        ],
        gameTitle: 'Comprehension Builder',
        gameType: 'comprehension_builder',
        mcqs: [
          {
            id: 1,
            question: 'What is the syntax for a basic list comprehension?',
            options: [
              '[expression for item in iterable]',
              '{item : expression for item in iterable}',
              '(expression for item in iterable)',
              '[for item in iterable: expression]'
            ],
            correct: 0,
            explanation: '[expression for item in iterable] is the standard syntax for list comprehension.'
          },
          {
            id: 2,
            question: 'What does [x ** 2 for x in [1, 2, 3]] evaluate to?',
            options: ['[1, 4, 9]', '[1, 2, 3]', '[2, 4, 6]', 'Error'],
            correct: 0,
            explanation: 'Each element is squared, resulting in [1, 4, 9].'
          },
          {
            id: 3,
            question: 'Where is the filtering condition placed in a list comprehension?',
            options: [
              'At the end: [x for x in iterable if condition]',
              'At the beginning: [if condition: x for x in iterable]',
              'Inside the brackets: [if condition]',
              'Conditionals are not supported'
            ],
            correct: 0,
            explanation: 'Filtering `if condition` is placed at the end of the comprehension clause.'
          },
          {
            id: 4,
            question: 'How do you create a dictionary comprehension mapping name -> length?',
            options: [
              '{name: len(name) for name in names}',
              '[name: len(name) for name in names]',
              '{len(name) -> name for name in names}',
              'dict(name, len(name))'
            ],
            correct: 0,
            explanation: 'Curly braces with key: value syntax `{k: v for k in iterable}` define a dictionary comprehension.'
          },
          {
            id: 5,
            question: 'What is generated if you use parentheses instead of square brackets: (x for x in data)?',
            options: ['A tuple', 'A generator expression', 'A set', 'A list'],
            correct: 1,
            explanation: 'Parentheses around a comprehension syntax create a lazy generator expression, not a tuple.'
          }
        ],
        codingChallenges: [
          {
            id: 1,
            title: 'Challenge 1: Square Comprehension',
            instruction: 'Create a list of squares for numbers 1 to 4 using a list comprehension. Print the list.',
            starterCode: `squares = [x ** 2 for x in range(1, 5)]\nprint(squares)`,
            expectedKeywords: ['for', 'in', 'range', 'print'],
            expectedOutputText: '[1, 4, 9, 16]',
            hint: 'Use [x ** 2 for x in range(1, 5)].'
          },
          {
            id: 2,
            title: 'Challenge 2: Filtered Comprehension',
            instruction: 'Extract only even numbers from [1, 2, 3, 4, 5, 6] using list comprehension with if. Print it.',
            starterCode: `nums = [1, 2, 3, 4, 5, 6]\nevens = [x for x in nums if x % 2 == 0]\nprint(evens)`,
            expectedKeywords: ['for', 'if', '%', 'print'],
            expectedOutputText: '[2, 4, 6]',
            hint: 'Use [x for x in nums if x % 2 == 0].'
          },
          {
            id: 3,
            title: 'Challenge 3: Uppercase Strings',
            instruction: 'Convert words = ["python", "sql"] to uppercase using list comprehension. Print the list.',
            starterCode: `words = ["python", "sql"]\nupper_words = [w.upper() for w in words]\nprint(upper_words)`,
            expectedKeywords: ['upper()', 'for', 'in', 'print'],
            expectedOutputText: "['PYTHON', 'SQL']",
            hint: 'Use [w.upper() for w in words].'
          },
          {
            id: 4,
            title: 'Challenge 4: Dict Comprehension',
            instruction: 'Create a dict mapping numbers 1, 2, 3 to their cubes (x: x**3). Print the dict.',
            starterCode: `cubes = {x: x ** 3 for x in [1, 2, 3]}\nprint(cubes)`,
            expectedKeywords: ['for', 'in', 'print'],
            expectedOutputText: '{1: 1, 2: 8, 3: 27}',
            hint: 'Use {x: x ** 3 for x in [1, 2, 3]}.'
          },
          {
            id: 5,
            title: 'Challenge 5: Set Comprehension',
            instruction: 'Create a set of absolute values from [-2, -1, 1, 2] using {abs(x) for x in ...}. Print it.',
            starterCode: `vals = [-2, -1, 1, 2]\nabs_set = {abs(x) for x in vals}\nprint(sorted(list(abs_set)))`,
            expectedKeywords: ['abs', 'for', 'in', 'print'],
            expectedOutputText: '[1, 2]',
            hint: 'Sets eliminate duplicate values automatically.'
          }
        ],
        interviewQuestions: [
          {
            id: 1,
            question: 'Why are list comprehensions generally faster than traditional for loops with .append()?',
            context: 'Bytecode & C-Level Loops',
            defaultAnswer: 'List comprehensions run in optimized C-level bytecode, avoiding the overhead of repeated attribute lookups and method call frames associated with `list.append()`.',
            suggestedPoints: ['C-level optimization in CPython', 'Avoids append() attribute lookup', 'More concise and expressive', 'Pre-allocated list size']
          },
          {
            id: 2,
            question: 'When does a list comprehension become an anti-pattern?',
            context: 'Clean Code & Readability',
            defaultAnswer: 'When it contains complex nested loops, multiple ternary conditionals, or side effects. If readability suffers or the line exceeds PEP 8 guidelines, use a standard for loop.',
            suggestedPoints: ['Nested comprehensions are hard to read', 'Avoid side effects in comprehensions', 'PEP 8 readability rule', 'Refactoring into helper functions']
          },
          {
            id: 3,
            question: 'What is the key difference between a list comprehension and a generator expression?',
            context: 'Memory & Lazy Evaluation',
            defaultAnswer: 'A list comprehension builds the entire list in memory immediately. A generator expression `(x for x in ...)` generates values lazily one-by-one, using constant O(1) memory.',
            suggestedPoints: ['List comprehension is eager', 'Generator expression is lazy', 'Memory conservation for millions of rows', 'Use with sum(), max(), any()']
          },
          {
            id: 4,
            question: 'How do you implement an if-else (ternary) condition inside a list comprehension?',
            context: 'Syntax Structure',
            defaultAnswer: 'Place the if-else before the `for` clause: `[val1 if cond else val2 for x in iter]`. This transforms elements, unlike filtering `if` placed at the end.',
            suggestedPoints: ['Ternary placed before for', 'Filtering if placed after for', 'Transformation vs selection', 'Syntax distinction']
          },
          {
            id: 5,
            question: 'Can you flatten a 2D matrix using a list comprehension?',
            context: 'Practical Data Transformations',
            defaultAnswer: 'Yes: `[item for row in matrix for item in row]`. The order of `for` clauses matches the order of nested for loops in standard syntax.',
            suggestedPoints: ['Matrix flattening', 'for row in matrix for item in row', 'Maintains left-to-right nesting order', 'Useful in ETL pipelines']
          }
        ]
      },
      {
        id: 17,
        module: 3,
        moduleTitle: 'Functions & Advanced Python',
        title: 'OOP Fundamentals',
        subtitle: 'Classes, objects, attributes, methods, __init__(), self, creating objects.',
        duration: '25 min',
        isAssessment: false,
        objectives: [
          'Classes',
          'Objects',
          'Attributes',
          'Methods',
          '__init__()',
          'self',
          'Creating objects'
        ],
        gameTitle: 'Object Factory',
        gameType: 'object_factory',
        mcqs: [
          {
            id: 1,
            question: 'Which keyword is used to create a class in Python?',
            options: ['class', 'struct', 'object', 'type'],
            correct: 0,
            explanation: 'The `class` keyword defines a new user-defined object type.'
          },
          {
            id: 2,
            question: 'What is the role of the __init__() method in a Python class?',
            options: [
              'It acts as the constructor initializing instance attributes',
              'It destroys the object',
              'It imports modules',
              'It converts the class to string'
            ],
            correct: 0,
            explanation: '__init__ is the initializer constructor called automatically when a new instance is created.'
          },
          {
            id: 3,
            question: 'What does the parameter self represent in class methods?',
            options: [
              'The current instance of the class',
              'The global module',
              'A reserved word for static methods',
              'The parent class'
            ],
            correct: 0,
            explanation: '`self` refers to the specific instance of the class upon which the method is called.'
          },
          {
            id: 4,
            question: 'What is an attribute belonging to the class itself rather than a specific instance called?',
            options: ['Class attribute', 'Instance attribute', 'Local variable', 'Global variable'],
            correct: 0,
            explanation: 'Class attributes are shared across all instances of the class.'
          },
          {
            id: 5,
            question: 'How do you instantiate an object of class Student?',
            options: ['s = new Student()', 's = Student()', 's = create Student', 's = Student.new()'],
            correct: 1,
            explanation: 'In Python, instances are created by calling the class name as a function: `s = Student()`.'
          }
        ],
        codingChallenges: [
          {
            id: 1,
            title: 'Challenge 1: Define a Class',
            instruction: 'Define a class User with __init__(self, name). Create u = User("Subodh") and print u.name.',
            starterCode: `class User:\n    def __init__(self, name):\n        self.name = name\n\nu = User("Subodh")\nprint(u.name)`,
            expectedKeywords: ['class', '__init__', 'self.name', 'print'],
            expectedOutputText: 'Subodh',
            hint: 'Use class User: def __init__(self, name): self.name = name.'
          },
          {
            id: 2,
            title: 'Challenge 2: Instance Method',
            instruction: 'Add a method get_role(self) to class Analyst returning "Data Analyst". Call and print it.',
            starterCode: `class Analyst:\n    def get_role(self):\n        return "Data Analyst"\n\na = Analyst()\nprint(a.get_role())`,
            expectedKeywords: ['class', 'def get_role', 'self', 'print'],
            expectedOutputText: 'Data Analyst',
            hint: 'Define get_role(self): return "Data Analyst".'
          },
          {
            id: 3,
            title: 'Challenge 3: Class Attribute',
            instruction: 'Create a class App with class attribute platform = "MentorAI". Print App.platform.',
            starterCode: `class App:\n    platform = "MentorAI"\n\nprint(App.platform)`,
            expectedKeywords: ['class', 'platform =', 'print'],
            expectedOutputText: 'MentorAI',
            hint: 'Class attributes are defined inside class body outside any method.'
          },
          {
            id: 4,
            title: 'Challenge 4: Counter Method',
            instruction: 'Create class Counter with count = 0 in __init__. Add increment(self) that adds 1. Increment once and print count.',
            starterCode: `class Counter:\n    def __init__(self):\n        self.count = 0\n    def increment(self):\n        self.count += 1\n\nc = Counter()\nc.increment()\nprint(c.count)`,
            expectedKeywords: ['class', 'count', 'increment', 'print'],
            expectedOutputText: '1',
            hint: 'self.count += 1 inside increment.'
          },
          {
            id: 5,
            title: 'Challenge 5: String Representation',
            instruction: 'Implement __str__(self) on class Bot returning "MentorBot". Create b = Bot() and print(b).',
            starterCode: `class Bot:\n    def __str__(self):\n        return "MentorBot"\n\nb = Bot()\nprint(b)`,
            expectedKeywords: ['class', '__str__', 'return', 'print'],
            expectedOutputText: 'MentorBot',
            hint: 'def __str__(self): return "MentorBot".'
          }
        ],
        interviewQuestions: [
          {
            id: 1,
            question: 'What is the purpose of the self parameter and why is it explicitly written in Python?',
            context: 'Python Design Philosophy',
            defaultAnswer: '`self` explicitly passes the instance reference to instance methods. Guido van Rossum adhered to "Explicit is better than implicit" from the Zen of Python.',
            suggestedPoints: ['Refers to current instance', 'Explicit is better than implicit', 'First parameter in instance methods', 'Differentiates instance from class scope']
          },
          {
            id: 2,
            question: 'What is the difference between an instance attribute and a class attribute?',
            context: 'Object State',
            defaultAnswer: 'Instance attributes are defined on `self` inside `__init__` and are unique to each object. Class attributes are defined at the class level and shared across all instances.',
            suggestedPoints: ['Instance attribute belongs to self', 'Class attribute shared across instances', 'Modifying class attribute affects all', 'Shadowing class attributes with self']
          },
          {
            id: 3,
            question: 'What is the difference between __str__ and __repr__ in Python?',
            context: 'Dunder Methods',
            defaultAnswer: '`__str__` is intended to provide an informal, human-readable string for end-users (`print(obj)`). `__repr__` aims to provide an unambiguous string representation for developers and debugging.',
            suggestedPoints: ['__str__ for human readability', '__repr__ for unambiguous debugging', 'Fallback to __repr__ if __str__ missing', 'eval(repr(obj)) round-trip concept']
          },
          {
            id: 4,
            question: 'How do @classmethod and @staticmethod differ from regular instance methods?',
            context: 'Method Types',
            defaultAnswer: 'Instance methods take `self`. `@classmethod` takes `cls` pointing to the class (useful for alternative constructors). `@staticmethod` takes neither and behaves like a plain function scoped in the class.',
            suggestedPoints: ['Instance methods take self', '@classmethod takes cls', '@staticmethod has no implicit first argument', 'Factory constructor patterns']
          },
          {
            id: 5,
            question: 'What are dunder (magic) methods in Python?',
            context: 'Data Model',
            defaultAnswer: 'Dunder (double underscore) methods like `__len__`, `__getitem__`, and `__add__` allow custom classes to hook into Python syntax protocols (like `len()`, `[]`, `+`).',
            suggestedPoints: ['Operator overloading', 'Python data model protocols', '__len__, __iter__, __getitem__', 'Custom class integration']
          }
        ]
      },
      {
        id: 18,
        module: 3,
        moduleTitle: 'Functions & Advanced Python',
        title: 'OOP Advanced',
        subtitle: 'Inheritance, Encapsulation, Polymorphism, Abstraction.',
        duration: '25 min',
        isAssessment: false,
        objectives: [
          'Inheritance',
          'Encapsulation',
          'Polymorphism',
          'Abstraction'
        ],
        gameTitle: 'Inheritance Tree',
        gameType: 'inheritance_tree',
        mcqs: [
          {
            id: 1,
            question: 'How do you indicate that class Dog inherits from class Animal?',
            options: ['class Dog extends Animal:', 'class Dog(Animal):', 'class Dog implements Animal:', 'class Dog -> Animal:'],
            correct: 1,
            explanation: 'Inheritance syntax places the parent class in parentheses after the child class name: `class Dog(Animal):`.'
          },
          {
            id: 2,
            question: 'Which built-in function allows calling a method from the parent superclass?',
            options: ['parent()', 'super()', 'base()', 'superClass()'],
            correct: 1,
            explanation: 'The super() function proxies method calls to the parent or superclass in the Method Resolution Order (MRO).'
          },
          {
            id: 3,
            question: 'How is private attribute naming convention specified in Python (name mangling)?',
            options: ['private x', 'Two leading underscores (__x)', 'Single underscore (_x)', 'protected x'],
            correct: 1,
            explanation: 'Prefixing an attribute with two leading underscores (`__x`) triggers name mangling to prevent accidental overriding.'
          },
          {
            id: 4,
            question: 'What is polymorphism in Python OOP?',
            options: [
              'The ability for different classes to provide different implementations of the same method name',
              'Creating multiple constructors',
              'Multiple inheritance only',
              'Converting classes to functions'
            ],
            correct: 0,
            explanation: 'Polymorphism allows different object types to respond to the same interface or method call appropriately.'
          },
          {
            id: 5,
            question: 'Which module in the Python standard library provides Abstract Base Classes?',
            options: ['abstract', 'abc', 'interfaces', 'types'],
            correct: 1,
            explanation: 'The `abc` module provides the `ABC` class and `@abstractmethod` decorator.'
          }
        ],
        codingChallenges: [
          {
            id: 1,
            title: 'Challenge 1: Basic Inheritance',
            instruction: 'Create parent class Animal with speak() returning "Sound". Create Dog(Animal) overriding speak() to return "Woof". Print Dog().speak().',
            starterCode: `class Animal:\n    def speak(self):\n        return "Sound"\n\nclass Dog(Animal):\n    def speak(self):\n        return "Woof"\n\nprint(Dog().speak())`,
            expectedKeywords: ['class Animal', 'class Dog(Animal)', 'speak', 'print'],
            expectedOutputText: 'Woof',
            hint: 'Subclass overrides the parent method.'
          },
          {
            id: 2,
            title: 'Challenge 2: Super Initializer',
            instruction: 'Create Employee(User) calling super().__init__(name) and setting self.role = "Analyst". Print e.role.',
            starterCode: `class User:\n    def __init__(self, name):\n        self.name = name\n\nclass Employee(User):\n    def __init__(self, name, role):\n        super().__init__(name)\n        self.role = role\n\ne = Employee("Subodh", "Analyst")\nprint(e.role)`,
            expectedKeywords: ['super().__init__', 'self.role', 'print'],
            expectedOutputText: 'Analyst',
            hint: 'Call super().__init__(name).'
          },
          {
            id: 3,
            title: 'Challenge 3: Encapsulation Getter',
            instruction: 'Create class Account with private __balance = 1000. Add get_balance(self) returning __balance. Print it.',
            starterCode: `class Account:\n    def __init__(self):\n        self.__balance = 1000\n    def get_balance(self):\n        return self.__balance\n\nacc = Account()\nprint(acc.get_balance())`,
            expectedKeywords: ['__balance', 'get_balance', 'print'],
            expectedOutputText: '1000',
            hint: 'Private attribute __balance accessed via getter.'
          },
          {
            id: 4,
            title: 'Challenge 4: Polymorphism Loop',
            instruction: 'Create classes Cat and Duck each with speak() returning "Meow" and "Quack". Loop over [Cat(), Duck()] and print speak().',
            starterCode: `class Cat:\n    def speak(self):\n        return "Meow"\nclass Duck:\n    def speak(self):\n        return "Quack"\n\nfor a in [Cat(), Duck()]:\n    print(a.speak())`,
            expectedKeywords: ['speak', 'for', 'print'],
            expectedOutputText: 'Meow\nQuack',
            hint: 'Call a.speak() in the loop.'
          },
          {
            id: 5,
            title: 'Challenge 5: isinstance Check',
            instruction: 'Verify if Dog() is an instance of Animal using isinstance(). Print the boolean result.',
            starterCode: `class Animal: pass\nclass Dog(Animal): pass\n\nprint(isinstance(Dog(), Animal))`,
            expectedKeywords: ['isinstance', 'Dog()', 'Animal', 'print'],
            expectedOutputText: 'True',
            hint: 'isinstance(instance, Class) returns True.'
          }
        ],
        interviewQuestions: [
          {
            id: 1,
            question: 'What is Duck Typing in Python and how does it relate to polymorphism?',
            context: 'Python Typing Philosophy',
            defaultAnswer: '"If it walks like a duck and quacks like a duck, it is a duck." Python does not require rigid interfaces; if an object implements the required method, it can be used interchangeably.',
            suggestedPoints: ['Dynamic polymorphism', 'No need for explicit interface inheritance', 'Focus on object behavior not type', 'EAFP (Easier to ask for forgiveness than permission)']
          },
          {
            id: 2,
            question: 'What is Method Resolution Order (MRO) in Python multiple inheritance?',
            context: 'Multiple Inheritance',
            defaultAnswer: 'MRO is the order in which Python searches parent classes for attributes/methods, determined using the C3 Linearization algorithm. You inspect it via `Class.__mro__`.',
            suggestedPoints: ['C3 Linearization algorithm', 'Solves the Diamond Problem', 'Accessible via Class.__mro__', 'super() follows MRO path']
          },
          {
            id: 3,
            question: 'How does name mangling work for private attributes in Python?',
            context: 'Encapsulation Mechanism',
            defaultAnswer: 'Attributes with double leading underscores `__var` are internally renamed by the compiler to `_ClassName__var`. It is not strict privacy, but prevents subclass naming collisions.',
            suggestedPoints: ['_ClassName__var renaming', 'Not true private memory security', 'Prevents accidental subclass collision', 'Single underscore convention for protected']
          },
          {
            id: 4,
            question: 'What is an Abstract Base Class (ABC) and when should you define one?',
            context: 'Architecture Design',
            defaultAnswer: 'An ABC defines a blueprint interface with `@abstractmethod` decorators that subclasses must implement. Python prevents instantiating subclasses that fail to implement them.',
            suggestedPoints: ['from abc import ABC, abstractmethod', 'Cannot instantiate incomplete subclass', 'Enforces API contracts in teams', 'Component plugin systems']
          },
          {
            id: 5,
            question: 'Why is composition often preferred over deep inheritance hierarchy?',
            context: 'Design Patterns',
            defaultAnswer: '"Favor composition over inheritance." Deep inheritance hierarchies lead to brittle, tightly-coupled code. Composition ("has-a" instead of "is-a") provides greater flexibility and testability.',
            suggestedPoints: ['"Has-a" vs "Is-a" relationship', 'Reduces tight coupling', 'Easier unit testing with mock objects', 'Prevents fragile base class syndrome']
          }
        ]
      },
      {
        id: 19,
        module: 3,
        moduleTitle: 'Functions & Advanced Python',
        title: 'Exception Handling & Logging',
        subtitle: 'Errors vs exceptions, try, except, else, finally, raise, basic logging.',
        duration: '25 min',
        isAssessment: false,
        objectives: [
          'Errors vs exceptions',
          'try',
          'except',
          'else',
          'finally',
          'raise',
          'Basic logging'
        ],
        gameTitle: 'Debug Rescue',
        gameType: 'debug_rescue',
        mcqs: [
          {
            id: 1,
            question: 'Which block in a try-except structure ALWAYS executes, regardless of whether an exception occurred?',
            options: ['finally', 'else', 'except', 'catch'],
            correct: 0,
            explanation: 'The `finally` block is guaranteed to execute, making it ideal for cleanup like closing files or database connections.'
          },
          {
            id: 2,
            question: 'What happens in a try-except-else block when no exception is raised?',
            options: [
              'The else block executes',
              'The except block executes',
              'The finally block is skipped',
              'An error is raised'
            ],
            correct: 0,
            explanation: 'The `else` block executes only if the try block completes successfully with zero exceptions.'
          },
          {
            id: 3,
            question: 'Which keyword is used to trigger an intentional exception in Python?',
            options: ['throw', 'raise', 'trigger', 'fire'],
            correct: 1,
            explanation: 'Python uses the `raise` keyword to throw exceptions explicitly.'
          },
          {
            id: 4,
            question: 'Why is catching bare `except:` generally considered a bad practice?',
            options: [
              'It intercepts system interrupts like KeyboardInterrupt and SystemExit',
              'It is slower',
              'It causes a memory leak',
              'Python 3 forbids it'
            ],
            correct: 0,
            explanation: 'A bare `except:` catches BaseException, unintentionally swallowing signals like Ctrl+C (KeyboardInterrupt).'
          },
          {
            id: 5,
            question: 'Which built-in module is used for production application logging in Python?',
            options: ['logger', 'logging', 'log', 'syslog'],
            correct: 1,
            explanation: 'The `logging` module is Python’s standard library framework for formatted log messages across severity levels.'
          }
        ],
        codingChallenges: [
          {
            id: 1,
            title: 'Challenge 1: Zero Division Catch',
            instruction: 'Write a try-except block catching ZeroDivisionError when dividing 10 by 0. Print "Cannot divide by zero".',
            starterCode: `try:\n    res = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero")`,
            expectedKeywords: ['try:', 'except ZeroDivisionError:', 'print'],
            expectedOutputText: 'Cannot divide by zero',
            hint: 'Wrap division in try, handle ZeroDivisionError in except.'
          },
          {
            id: 2,
            title: 'Challenge 2: Value Error Handling',
            instruction: 'Try converting "abc" to int(). Catch ValueError and print "Invalid integer".',
            starterCode: `try:\n    num = int("abc")\nexcept ValueError:\n    print("Invalid integer")`,
            expectedKeywords: ['try:', 'except ValueError:', 'print'],
            expectedOutputText: 'Invalid integer',
            hint: 'Catch ValueError.'
          },
          {
            id: 3,
            title: 'Challenge 3: Finally Clean Up',
            instruction: 'Write a try-except-finally block. Even when an error occurs, print "Cleanup finished" inside finally.',
            starterCode: `try:\n    x = 1 / 0\nexcept:\n    pass\nfinally:\n    print("Cleanup finished")`,
            expectedKeywords: ['try:', 'finally:', 'print("Cleanup finished")'],
            expectedOutputText: 'Cleanup finished',
            hint: 'Code inside finally always runs.'
          },
          {
            id: 4,
            title: 'Challenge 4: Raise Exception',
            instruction: 'Define function check_age(age). If age < 18, raise ValueError("Underage"). Catch and print error message.',
            starterCode: `def check_age(age):\n    if age < 18:\n        raise ValueError("Underage")\n\ntry:\n    check_age(15)\nexcept ValueError as e:\n    print(e)`,
            expectedKeywords: ['raise ValueError', 'except ValueError', 'print'],
            expectedOutputText: 'Underage',
            hint: 'Use raise ValueError("Underage").'
          },
          {
            id: 5,
            title: 'Challenge 5: Try-Else Success',
            instruction: 'In a try block perform 10 / 2. In the else block print "Calculation successful".',
            starterCode: `try:\n    ans = 10 / 2\nexcept ZeroDivisionError:\n    print("Error")\nelse:\n    print("Calculation successful")`,
            expectedKeywords: ['try:', 'else:', 'print("Calculation successful")'],
            expectedOutputText: 'Calculation successful',
            hint: 'The else block runs on success.'
          }
        ],
        interviewQuestions: [
          {
            id: 1,
            question: 'What is the distinction between a syntax error and an exception in Python?',
            context: 'Error Types',
            defaultAnswer: 'Syntax errors occur during parsing before execution starts, caused by invalid code structure. Exceptions occur at runtime during execution when a statement encounters an error condition.',
            suggestedPoints: ['Syntax error at parse time', 'Exceptions at runtime', 'Syntax errors cannot be caught with try-except', 'Exceptions can be caught and handled']
          },
          {
            id: 2,
            question: 'Explain the full try-except-else-finally structure and when to use each block.',
            context: 'Exception Control Flow',
            defaultAnswer: '`try` wraps risky code; `except` catches specific errors; `else` runs only when no exception was raised; `finally` runs unconditionally for resource cleanup.',
            suggestedPoints: ['try: risky operations', 'except: error handling and logging', 'else: code that runs on success', 'finally: deterministic resource cleanup']
          },
          {
            id: 3,
            question: 'Why should you prefer logging over print statements in production Python services?',
            context: 'Production Operations',
            defaultAnswer: '`logging` supports configurable log levels (DEBUG, INFO, WARNING, ERROR, CRITICAL), timestamps, structured JSON formats, file rotation, and directing logs to sinks without touching code.',
            suggestedPoints: ['Log levels for filtering', 'Timestamps and thread IDs', 'Log rotation and handlers', 'Configurable without code changes']
          },
          {
            id: 4,
            question: 'What is EAFP vs LBYL and which one is preferred in Python?',
            context: 'Python Philosophy',
            defaultAnswer: 'EAFP stands for "Easier to Ask for Forgiveness than Permission" (try/except). LBYL is "Look Before You Leap" (if checks). EAFP is more Pythonic and avoids race conditions.',
            suggestedPoints: ['EAFP: try-except pattern', 'LBYL: pre-check with if conditions', 'EAFP avoids race conditions (TOCTOU)', 'EAFP is faster when exceptions are rare']
          },
          {
            id: 5,
            question: 'How do you define a custom exception class in Python and when is it useful?',
            context: 'Domain Exceptions',
            defaultAnswer: 'Subclass Python’s built-in `Exception`: `class DataValidationError(Exception): pass`. It provides clear domain-specific error handling for API callers.',
            suggestedPoints: ['Inherit from built-in Exception', 'Domain-specific error classification', 'Custom error attributes and messages', 'Enables precise upstream catch blocks']
          }
        ]
      },
      {
        id: 20,
        module: 3,
        moduleTitle: 'Functions & Advanced Python',
        title: 'Skill Mastery Challenge — Python Advanced',
        subtitle: 'Comprehensive 40-MCQ assessment testing all Advanced Python concepts.',
        duration: '45 min',
        isAssessment: true,
        objectives: [
          'Custom Functions, Scopes & LEGB',
          '*args, **kwargs & Variable Arguments',
          'Lambda Functions & Functional Programming',
          'Comprehensions & Generator Expressions',
          'Object-Oriented Programming (Classes, Methods, self)',
          'Inheritance, Polymorphism & Abstraction',
          'Exception Handling (try-except-else-finally, raise)'
        ]
      }
    ]
  }
];
