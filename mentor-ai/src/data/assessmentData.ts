export interface AssessmentItem {
  id: number;
  question: string;
  options: string[];
  correct: number;
  topic: string;
  explanation: string;
}

export interface AssessmentConfig {
  id: number;
  moduleNumber: number;
  title: string;
  subtitle: string;
  durationMinutes: number;
  totalQuestions: number;
  passingScore: number;
  badge: string;
  questions: AssessmentItem[];
}

export const assessmentsData: Record<number, AssessmentConfig> = {
  "8": {
    "id": 8,
    "moduleNumber": 1,
    "title": "Skill Mastery Challenge — Python Fundamentals",
    "subtitle": "Module 1 Capstone: 40 MCQs testing Variables, Types, Operators, Slicing, Strings, Lists, Tuples, Dictionaries & Sets.",
    "durationMinutes": 45,
    "totalQuestions": 40,
    "passingScore": 28,
    "badge": "Module 1 Mastery",
    "questions": [
      {
        "id": 1,
        "question": "What is the primary role of Python's interpreter in executing source code?",
        "options": [
          "It compiles Python directly into x86 machine assembly code before execution",
          "It parses source code, compiles it into bytecode (.pyc), and executes it on the Python Virtual Machine (PVM)",
          "It converts Python source code into C++ files before running",
          "It executes Python source code in a browser V8 sandbox directly"
        ],
        "correct": 1,
        "topic": "Python Architecture",
        "explanation": "Python is an interpreted language that compiles source code (.py) into intermediate bytecode (.pyc) which is then executed line-by-line by the Python Virtual Machine (PVM)."
      },
      {
        "id": 2,
        "question": "Which of the following is a valid Python variable identifier according to PEP 8 standards?",
        "options": [
          "2nd_user_metric",
          "user_metric_2",
          "user-metric-2",
          "class"
        ],
        "correct": 1,
        "topic": "Variables & Syntax",
        "explanation": "Identifiers cannot start with a digit, cannot contain hyphens, and cannot use reserved keywords like 'class'. 'user_metric_2' follows snake_case conventions."
      },
      {
        "id": 3,
        "question": "What will be the output of `type(3.14)` in Python 3?",
        "options": [
          "<class 'double'>",
          "<class 'float'>",
          "<class 'decimal'>",
          "<class 'number'>"
        ],
        "correct": 1,
        "topic": "Data Types",
        "explanation": "Python represents standard floating-point numbers with double precision under the built-in type `<class 'float'>`."
      },
      {
        "id": 4,
        "question": "What is the result of evaluating `bool(0)` and `bool([])` in Python?",
        "options": [
          "True, True",
          "True, False",
          "False, True",
          "False, False"
        ],
        "correct": 3,
        "topic": "Data Types",
        "explanation": "In Python, numerical zero (0, 0.0) and empty collections ([], {}, set(), '') evaluate to falsy values (False)."
      },
      {
        "id": 5,
        "question": "What is the output of `int('101', 2)` in Python?",
        "options": [
          "101",
          "5",
          "Error",
          "2"
        ],
        "correct": 1,
        "topic": "Type Conversion",
        "explanation": "The `int(string, base)` built-in converts a string representation of a number in base 2 (binary) to base 10 integer. '101' in binary is 1*4 + 0*2 + 1*1 = 5."
      },
      {
        "id": 6,
        "question": "What is the result of `17 // 4` versus `17 % 4`?",
        "options": [
          "4.25 and 1",
          "4 and 1",
          "4 and 0.25",
          "4.0 and 1"
        ],
        "correct": 1,
        "topic": "Operators",
        "explanation": "The `//` operator performs floor integer division (17 // 4 = 4), while `%` returns the remainder (17 % 4 = 1)."
      },
      {
        "id": 7,
        "question": "What does the expression `2 ** 3 ** 2` evaluate to in Python?",
        "options": [
          "64",
          "512",
          "128",
          "256"
        ],
        "correct": 1,
        "topic": "Operators",
        "explanation": "The exponentiation operator `**` has right-to-left associativity in Python. Thus, `3 ** 2` is evaluated first (9), followed by `2 ** 9 = 512`."
      },
      {
        "id": 8,
        "question": "Which comparison operator checks whether two variables reference the exact same memory location?",
        "options": [
          "==",
          "equals()",
          "is",
          "==="
        ],
        "correct": 2,
        "topic": "Operators",
        "explanation": "The `==` operator checks value equality, whereas the `is` operator tests object identity (i.e. whether id(a) == id(b))."
      },
      {
        "id": 9,
        "question": "What will `s[1:5]` return if `s = 'DataAnalyst'`?",
        "options": [
          "'Data'",
          "'ataA'",
          "'ata'",
          "'DataA'"
        ],
        "correct": 1,
        "topic": "Strings & Slicing",
        "explanation": "Python slices are start-inclusive and stop-exclusive. Index 1 is 'a', 2 is 't', 3 is 'a', 4 is 'A'. Result: 'ataA'."
      },
      {
        "id": 10,
        "question": "What does the slice `'Python'[::-1]` produce?",
        "options": [
          "'P'",
          "'nohtyP'",
          "'Python'",
          "IndexError"
        ],
        "correct": 1,
        "topic": "Strings & Slicing",
        "explanation": "A step of -1 traverses the string backwards from the end to the start, reversing the sequence to `'nohtyP'`."
      },
      {
        "id": 11,
        "question": "Which string method removes both leading and trailing whitespace characters?",
        "options": [
          "clean()",
          "strip()",
          "trim()",
          "lstrip()"
        ],
        "correct": 1,
        "topic": "Strings & Methods",
        "explanation": "In Python, `.strip()` trims leading and trailing whitespaces. `.rstrip()` trims the right side, and `.lstrip()` trims the left side."
      },
      {
        "id": 12,
        "question": "What is the output of `f'{1234567:,}'`?",
        "options": [
          "'1234567'",
          "'1,234,567'",
          "'12,34,567'",
          "'1.234.567'"
        ],
        "correct": 1,
        "topic": "Strings & Methods",
        "explanation": "In Python f-strings, the `,` format specifier adds commas as thousands separators, yielding `'1,234,567'`."
      },
      {
        "id": 13,
        "question": "What happens when you execute `'hello'.replace('l', 'w')`?",
        "options": [
          "The original string becomes 'hewwo'",
          "A new string 'hewwo' is returned because strings are immutable",
          "An AttributeError is raised",
          "Only the first 'l' is replaced with 'w'"
        ],
        "correct": 1,
        "topic": "Strings & Methods",
        "explanation": "Strings are immutable in Python. Methods like `.replace()` return a newly created string without modifying the original in-place."
      },
      {
        "id": 14,
        "question": "Which of the following creates an empty tuple?",
        "options": [
          "()",
          "tuple()",
          "Both () and tuple()",
          "None of the above"
        ],
        "correct": 2,
        "topic": "Lists & Tuples",
        "explanation": "Both the literal `()` and the constructor `tuple()` create an empty immutable tuple."
      },
      {
        "id": 15,
        "question": "How do you define a tuple with a single integer element 5?",
        "options": [
          "(5)",
          "(5,)",
          "tuple[5]",
          "[5]"
        ],
        "correct": 1,
        "topic": "Lists & Tuples",
        "explanation": "A trailing comma `(5,)` is required to distinguish a single-element tuple from parenthesized integer expression `(5)`."
      },
      {
        "id": 16,
        "question": "What will `nums.append([4, 5])` do if `nums = [1, 2, 3]`?",
        "options": [
          "nums becomes [1, 2, 3, 4, 5]",
          "nums becomes [1, 2, 3, [4, 5]]",
          "Raises a TypeError",
          "nums becomes [[1, 2, 3], 4, 5]"
        ],
        "correct": 1,
        "topic": "Lists & Tuples",
        "explanation": "`append()` adds its argument as a single element. To flatten and add individual elements, use `nums.extend([4, 5])`."
      },
      {
        "id": 17,
        "question": "What is the time complexity of looking up a key in a Python dictionary on average?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n^2)"
        ],
        "correct": 2,
        "topic": "Dictionaries & Sets",
        "explanation": "Python dictionaries use hash tables under the hood, providing average O(1) time complexity for key lookups, insertions, and deletions."
      },
      {
        "id": 18,
        "question": "What is the return value of `{'a': 1, 'b': 2}.get('c', 0)`?",
        "options": [
          "None",
          "KeyError",
          "0",
          "False"
        ],
        "correct": 2,
        "topic": "Dictionaries & Sets",
        "explanation": "The `.get(key, default)` method returns the specified default value (`0`) if the key is not present in the dictionary, avoiding a `KeyError`."
      },
      {
        "id": 19,
        "question": "What is the result of `{1, 2, 3} & {2, 3, 4}` in Python?",
        "options": [
          "{1, 2, 3, 4}",
          "{2, 3}",
          "{1, 4}",
          "{}"
        ],
        "correct": 1,
        "topic": "Dictionaries & Sets",
        "explanation": "The `&` operator computes the set intersection, containing only elements common to both sets ({2, 3})."
      },
      {
        "id": 20,
        "question": "Can a Python set contain a list as one of its elements, e.g. `{1, [2, 3]}`?",
        "options": [
          "Yes, sets can store any Python object",
          "No, because lists are mutable and unhashable, causing a TypeError",
          "Yes, but only if the list has fewer than 10 elements",
          "No, only integers can be stored in sets"
        ],
        "correct": 1,
        "topic": "Dictionaries & Sets",
        "explanation": "Set elements must be hashable and immutable. Since lists are mutable, they do not have a constant hash value, resulting in `TypeError: unhashable type: 'list'`."
      },
      {
        "id": 21,
        "question": "What is the output of `len({'a': 1, 'a': 2, 'b': 3})`?",
        "options": [
          "3",
          "2",
          "Error",
          "1"
        ],
        "correct": 1,
        "topic": "Dictionaries & Sets",
        "explanation": "Dictionary keys must be unique. The second `'a': 2` overwrites the first `'a': 1`, leaving keys `'a'` and `'b'`, so length is 2."
      },
      {
        "id": 22,
        "question": "Which built-in function returns a new sorted list from an iterable without altering the original list?",
        "options": [
          ".sort()",
          "sorted()",
          "order()",
          "arrange()"
        ],
        "correct": 1,
        "topic": "Lists & Tuples",
        "explanation": "`sorted(iterable)` returns a new list sorted in ascending order. In contrast, `list.sort()` sorts the list in-place and returns `None`."
      },
      {
        "id": 23,
        "question": "What is the value of `x` after `x = (1, 2, 3); x[0] = 99`?",
        "options": [
          "(99, 2, 3)",
          "None",
          "TypeError is raised",
          "[99, 2, 3]"
        ],
        "correct": 2,
        "topic": "Lists & Tuples",
        "explanation": "Tuples are immutable; item assignment triggers a `TypeError: 'tuple' object does not support item assignment`."
      },
      {
        "id": 24,
        "question": "What does `' '.join(['Data', 'Science', 'Rocks'])` evaluate to?",
        "options": [
          "['Data Science Rocks']",
          "'Data Science Rocks'",
          "'Data, Science, Rocks'",
          "'DataScienceRocks'"
        ],
        "correct": 1,
        "topic": "Strings & Methods",
        "explanation": "The `.join()` method concatenates iterable items using the separator string (`' '`), yielding `'Data Science Rocks'`."
      },
      {
        "id": 25,
        "question": "What will `list(range(2, 10, 3))` return?",
        "options": [
          "[2, 5, 8]",
          "[2, 5, 8, 10]",
          "[3, 6, 9]",
          "[2, 4, 6, 8]"
        ],
        "correct": 0,
        "topic": "Data Types",
        "explanation": "`range(start, stop, step)` starts at 2, increments by 3 up to 10 (exclusive): 2, 5, 8."
      },
      {
        "id": 26,
        "question": "What is the output of `bool('')` and `bool('False')`?",
        "options": [
          "False and False",
          "False and True",
          "True and True",
          "True and False"
        ],
        "correct": 1,
        "topic": "Data Types",
        "explanation": "An empty string `''` is falsy (`False`), but any non-empty string including `'False'` or `'0'` has length > 0 and is truthy (`True`)."
      },
      {
        "id": 27,
        "question": "Which statement deletes a key `'score'` from dictionary `d` and returns its value?",
        "options": [
          "delete d['score']",
          "d.remove('score')",
          "d.pop('score')",
          "d.drop('score')"
        ],
        "correct": 2,
        "topic": "Dictionaries & Sets",
        "explanation": "`d.pop(key)` removes the key from the dictionary and returns its corresponding value. `del d['score']` removes it without returning the value."
      },
      {
        "id": 28,
        "question": "What is the output of `'python'.capitalize()`?",
        "options": [
          "'PYTHON'",
          "'Python'",
          "'PyThOn'",
          "'python'"
        ],
        "correct": 1,
        "topic": "Strings & Methods",
        "explanation": "The `.capitalize()` method converts the first character to uppercase and the rest to lowercase, returning `'Python'`."
      },
      {
        "id": 29,
        "question": "What is the result of `set([1, 2, 2, 3, 4, 4, 5])`?",
        "options": [
          "[1, 2, 3, 4, 5]",
          "{1, 2, 3, 4, 5}",
          "(1, 2, 3, 4, 5)",
          "{1, 2, 2, 3, 4, 4, 5}"
        ],
        "correct": 1,
        "topic": "Dictionaries & Sets",
        "explanation": "Passing a list to `set()` eliminates all duplicates, yielding the unique set `{1, 2, 3, 4, 5}`."
      },
      {
        "id": 30,
        "question": "What does `a, *b, c = [1, 2, 3, 4, 5]` assign to `b`?",
        "options": [
          "[2, 3, 4]",
          "(2, 3, 4)",
          "2",
          "[1, 2, 3, 4, 5]"
        ],
        "correct": 0,
        "topic": "Lists & Tuples",
        "explanation": "Extended iterable unpacking assigns the first element to `a` (1), the last element to `c` (5), and all remaining middle elements as a list to `*b` (`[2, 3, 4]`)."
      },
      {
        "id": 31,
        "question": "What is the difference between `list.copy()` and `copy.deepcopy()`?",
        "options": [
          "There is no difference; both create brand new independent copies of nested objects",
          "list.copy() is a shallow copy copying only top-level references; deepcopy copies nested compound objects recursively",
          "deepcopy only works on tuples and sets, not lists",
          "list.copy() mutates the original list"
        ],
        "correct": 1,
        "topic": "Lists & Tuples",
        "explanation": "Shallow copying creates a new list with references to existing child objects. Deep copying duplicates the entire hierarchy recursively."
      },
      {
        "id": 32,
        "question": "What will `all([True, 1, 'yes', [0]])` evaluate to?",
        "options": [
          "True",
          "False",
          "None",
          "Error"
        ],
        "correct": 0,
        "topic": "Operators",
        "explanation": "The `all()` function returns `True` if every element in the iterable evaluates to a truthy value. `[0]` is a non-empty list, which is truthy."
      },
      {
        "id": 33,
        "question": "What does `any([False, 0, '', None])` evaluate to?",
        "options": [
          "True",
          "False",
          "None",
          "0"
        ],
        "correct": 1,
        "topic": "Operators",
        "explanation": "`any()` returns `True` if at least one item is truthy. Since all items in this iterable are falsy, it returns `False`."
      },
      {
        "id": 34,
        "question": "What is the output of `'abc' * 3`?",
        "options": [
          "'abc3'",
          "'abcabcabc'",
          "['abc', 'abc', 'abc']",
          "TypeError"
        ],
        "correct": 1,
        "topic": "Operators",
        "explanation": "In Python, sequence repetition with the `*` operator duplicates string `'abc'` 3 times: `'abcabcabc'`."
      },
      {
        "id": 35,
        "question": "Which of the following creates a dictionary with keys 'x', 'y' and default value 0?",
        "options": [
          "dict.fromkeys(['x', 'y'], 0)",
          "{'x', 'y'}: 0",
          "dict(['x', 'y'], 0)",
          "dict.init(['x', 'y'], 0)"
        ],
        "correct": 0,
        "topic": "Dictionaries & Sets",
        "explanation": "`dict.fromkeys(keys, value)` creates a new dictionary with keys from the iterable and values initialized to the given default value."
      },
      {
        "id": 36,
        "question": "What does `chr(65)` return in Python?",
        "options": [
          "'a'",
          "'A'",
          "65",
          "TypeError"
        ],
        "correct": 1,
        "topic": "Data Types",
        "explanation": "The `chr()` built-in converts an integer Unicode code point to its corresponding character (65 corresponds to ASCII uppercase 'A')."
      },
      {
        "id": 37,
        "question": "What does `ord('a')` return in Python?",
        "options": [
          "65",
          "97",
          "'a'",
          "1"
        ],
        "correct": 1,
        "topic": "Data Types",
        "explanation": "The `ord()` function returns the integer Unicode code point of a single character; for lowercase 'a', that is 97."
      },
      {
        "id": 38,
        "question": "What happens if you look up a nonexistent key using square bracket syntax, e.g. `d['missing']`?",
        "options": [
          "Returns None",
          "Returns 0",
          "Raises KeyError",
          "Raises IndexError"
        ],
        "correct": 2,
        "topic": "Dictionaries & Sets",
        "explanation": "Direct subscription lookup with `[]` raises a `KeyError` if the key is not in the dictionary. Use `.get()` for graceful default handling."
      },
      {
        "id": 39,
        "question": "What is the output of `'{:.2f}'.format(10.5678)`?",
        "options": [
          "'10.56'",
          "'10.57'",
          "'10.5678'",
          "'10'"
        ],
        "correct": 1,
        "topic": "Strings & Methods",
        "explanation": "The format specification `:.2f` rounds the floating-point number to two decimal places with standard half-up rounding, producing `'10.57'`."
      },
      {
        "id": 40,
        "question": "Which built-in function returns both the index and value when iterating over a sequence?",
        "options": [
          "zip()",
          "enumerate()",
          "iter()",
          "range()"
        ],
        "correct": 1,
        "topic": "Lists & Tuples",
        "explanation": "`enumerate(iterable, start=0)` yields tuples containing a running count/index along with each value yielded by iterable."
      }
    ]
  },
  "12": {
    "id": 12,
    "moduleNumber": 2,
    "title": "Skill Mastery Challenge — Python Control Flow",
    "subtitle": "Module 2 Capstone: 40 MCQs testing If-Else, For Loops, While Loops, Range, Enumerate, Zip, Break & Continue.",
    "durationMinutes": 45,
    "totalQuestions": 40,
    "passingScore": 28,
    "badge": "Control Flow Mastery",
    "questions": [
      {
        "id": 1,
        "question": "What will be printed by the following code?\nx = 15\nif x > 20:\n    print('A')\nelif x > 10:\n    print('B')\nelse:\n    print('C')",
        "options": [
          "A",
          "B",
          "C",
          "B and C"
        ],
        "correct": 1,
        "topic": "Conditionals",
        "explanation": "The condition `x > 20` is False, but `x > 10` is True. Once a branch matches in an if-elif chain, its block executes and the rest is skipped."
      },
      {
        "id": 2,
        "question": "What is the output of `result = 'Pass' if 75 >= 50 else 'Fail'`?",
        "options": [
          "'Pass'",
          "'Fail'",
          "True",
          "SyntaxError"
        ],
        "correct": 0,
        "topic": "Ternary Operator",
        "explanation": "Python's conditional expression `true_val if condition else false_val` evaluates the condition; 75 >= 50 is True, so result is `'Pass'`."
      },
      {
        "id": 3,
        "question": "How many times does this loop iterate?\nfor i in range(1, 10, 2):\n    pass",
        "options": [
          "10 times",
          "9 times",
          "5 times",
          "4 times"
        ],
        "correct": 2,
        "topic": "For Loops",
        "explanation": "The sequence generated by `range(1, 10, 2)` contains values 1, 3, 5, 7, 9, which comprises exactly 5 iterations."
      },
      {
        "id": 4,
        "question": "What will be the output?\ncount = 0\nwhile count < 3:\n    count += 1\nelse:\n    print('Done')",
        "options": [
          "Nothing",
          "Done",
          "0 1 2 Done",
          "Infinite loop"
        ],
        "correct": 1,
        "topic": "While Loops",
        "explanation": "The `else` block of a while loop executes when the loop condition becomes False naturally (not terminated by a break statement)."
      },
      {
        "id": 5,
        "question": "What will be printed?\nfor x in [1, 2, 3, 4, 5]:\n    if x == 3:\n        break\n    print(x, end=' ')",
        "options": [
          "1 2 3",
          "1 2",
          "1 2 4 5",
          "3 4 5"
        ],
        "correct": 1,
        "topic": "Break & Continue",
        "explanation": "When `x == 3`, the `break` statement immediately terminates the loop before `print(3)` can run. Output: 1 2."
      },
      {
        "id": 6,
        "question": "What will be printed?\nfor x in range(5):\n    if x % 2 == 0:\n        continue\n    print(x, end=' ')",
        "options": [
          "0 2 4",
          "1 3",
          "1 2 3 4",
          "0 1 2 3 4"
        ],
        "correct": 1,
        "topic": "Break & Continue",
        "explanation": "`continue` skips the remainder of the current iteration for even numbers (0, 2, 4), printing only the odd numbers: 1 3."
      },
      {
        "id": 7,
        "question": "What does the `pass` statement do in Python?",
        "options": [
          "Terminates the program immediately",
          "Skips to the next iteration like continue",
          "Acts as a syntactic placeholder that performs no operation",
          "Breaks out of the innermost enclosing loop"
        ],
        "correct": 2,
        "topic": "Pass Statement",
        "explanation": "`pass` is a null statement; it is executed as a no-op, typically used as a placeholder in empty loop bodies, classes, or functions."
      },
      {
        "id": 8,
        "question": "What will be the output?\nnames = ['Alice', 'Bob']\nfor idx, name in enumerate(names, start=1):\n    print(f'{idx}:{name}', end=' ')",
        "options": [
          "0:Alice 1:Bob",
          "1:Alice 2:Bob",
          "Alice:1 Bob:2",
          "IndexError"
        ],
        "correct": 1,
        "topic": "Enumerate",
        "explanation": "`enumerate(names, start=1)` counts starting at 1, yielding (1, 'Alice') and (2, 'Bob')."
      },
      {
        "id": 9,
        "question": "What will `list(zip(['a', 'b', 'c'], [1, 2]))` return in Python?",
        "options": [
          "[('a', 1), ('b', 2), ('c', None)]",
          "[('a', 1), ('b', 2)]",
          "Raises ValueError",
          "[('a', 1), ('b', 2), ('c', 0)]"
        ],
        "correct": 1,
        "topic": "Zip Function",
        "explanation": "By default, `zip()` stops pairing elements as soon as the shortest input iterable is exhausted."
      },
      {
        "id": 10,
        "question": "What will be the output?\nfor i in range(2):\n    for j in range(2):\n        if i == j:\n            break\n        print(f'{i}{j}', end=' ')",
        "options": [
          "00 11",
          "10",
          "01 10",
          "Nothing"
        ],
        "correct": 1,
        "topic": "Nested Loops",
        "explanation": "When i=0, j=0: 0==0 triggers break immediately. When i=1, j=0: 1!=0, prints '10'; then j=1: 1==1 breaks. Output: 10."
      },
      {
        "id": 11,
        "question": "In Python, which values are considered Falsy in a conditional check?",
        "options": [
          "Only the boolean value False",
          "None, False, 0, 0.0, '', [], (), {}, set()",
          "Any negative number",
          "Strings containing 'false' or '0'"
        ],
        "correct": 1,
        "topic": "Conditionals",
        "explanation": "Python evaluates `None`, `False`, numeric zeros (`0`, `0.0`), and empty collection containers as falsy."
      },
      {
        "id": 12,
        "question": "What does short-circuit evaluation mean for the `or` operator in `A or B`?",
        "options": [
          "Both A and B are always evaluated simultaneously",
          "If A is truthy, B is never evaluated and A is returned immediately",
          "If A is falsy, the expression immediately returns False without evaluating B",
          "It raises a ShortCircuitError"
        ],
        "correct": 1,
        "topic": "Conditionals",
        "explanation": "Logical `or` short-circuits: if the first operand is truthy, Python immediately returns it without evaluating the second operand."
      },
      {
        "id": 13,
        "question": "What is the output of `5 > 3 > 1` in Python?",
        "options": [
          "True",
          "False",
          "TypeError",
          "1"
        ],
        "correct": 0,
        "topic": "Conditionals",
        "explanation": "Python supports chained comparisons: `5 > 3 > 1` is evaluated equivalent to `(5 > 3) and (3 > 1)`, which evaluates to `True`."
      },
      {
        "id": 14,
        "question": "What is the output of `'cat' and 'dog'` in Python?",
        "options": [
          "True",
          "'cat'",
          "'dog'",
          "False"
        ],
        "correct": 2,
        "topic": "Conditionals",
        "explanation": "In Python, `and` returns the first falsy operand, or the last operand if all are truthy. Both are non-empty strings, so it returns `'dog'`."
      },
      {
        "id": 15,
        "question": "What is the output of `[] or 'default'`?",
        "options": [
          "[]",
          "'default'",
          "True",
          "False"
        ],
        "correct": 1,
        "topic": "Conditionals",
        "explanation": "`[]` is falsy, so `or` continues and returns the next operand `'default'`."
      },
      {
        "id": 16,
        "question": "What happens if a `while` condition never evaluates to False and has no break?",
        "options": [
          "Python stops automatically after 1000 iterations",
          "The program enters an infinite loop, freezing execution until interrupted",
          "Python raises an OutOfMemoryError immediately",
          "The loop skips to the else block"
        ],
        "correct": 1,
        "topic": "While Loops",
        "explanation": "A loop without a terminating condition or break executes indefinitely (infinite loop) until interrupted by the OS or user (Ctrl+C)."
      },
      {
        "id": 17,
        "question": "What will be printed?\nfor x in range(3):\n    if x == 1:\n        break\nelse:\n    print('Completed')",
        "options": [
          "Completed",
          "0 Completed",
          "Nothing",
          "1 Completed"
        ],
        "correct": 2,
        "topic": "Break & Continue",
        "explanation": "If a loop is exited via a `break` statement, the associated `else` clause is not executed."
      },
      {
        "id": 18,
        "question": "What is the output of this code?\ntotal = 0\nfor i in range(1, 4):\n    for j in range(1, 3):\n        total += 1\nprint(total)",
        "options": [
          "5",
          "6",
          "12",
          "4"
        ],
        "correct": 1,
        "topic": "Nested Loops",
        "explanation": "The outer loop runs 3 times (1, 2, 3) and the inner loop runs 2 times (1, 2) for each outer iteration: 3 * 2 = 6."
      },
      {
        "id": 19,
        "question": "Which of the following is equivalent to `not (A and B)` according to De Morgan's Laws?",
        "options": [
          "not A and not B",
          "(not A) or (not B)",
          "A or B",
          "not A == not B"
        ],
        "correct": 1,
        "topic": "Conditionals",
        "explanation": "De Morgan's first law states that the negation of a conjunction is the disjunction of the negations: `not (A and B) == (not A) or (not B)`."
      },
      {
        "id": 20,
        "question": "How do you iterate over both keys and values of a dictionary `d` simultaneously in a loop?",
        "options": [
          "for k, v in d.all():",
          "for k, v in d.items():",
          "for k, v in d.pairs():",
          "for k, v in d.entries():"
        ],
        "correct": 1,
        "topic": "For Loops",
        "explanation": "`dict.items()` returns a dynamic view yielding `(key, value)` tuples suitable for unpacking in a for loop."
      },
      {
        "id": 21,
        "question": "What will `range(5, 0, -1)` produce when converted to a list?",
        "options": [
          "[5, 4, 3, 2, 1]",
          "[5, 4, 3, 2, 1, 0]",
          "[0, 1, 2, 3, 4, 5]",
          "[]"
        ],
        "correct": 0,
        "topic": "For Loops",
        "explanation": "Starting at 5, stepping by -1, and ending before 0 produces: [5, 4, 3, 2, 1]."
      },
      {
        "id": 22,
        "question": "What will be the output?\na = [1, 2]\nwhile a:\n    print(a.pop(), end=' ')",
        "options": [
          "1 2",
          "2 1",
          "2",
          "Infinite loop"
        ],
        "correct": 1,
        "topic": "While Loops",
        "explanation": "In each iteration, `a.pop()` removes and returns the last element. First 2, then 1. Then `a` becomes `[]` which is falsy, terminating the loop."
      },
      {
        "id": 23,
        "question": "Can an `if` statement exist without an `else` block in Python?",
        "options": [
          "No, every if statement requires an else block",
          "Yes, the else block is optional",
          "Only in Python 2, not in Python 3",
          "Only if wrapped in a try block"
        ],
        "correct": 1,
        "topic": "Conditionals",
        "explanation": "An `if` statement can exist on its own, or with one or more `elif` blocks, without requiring a final `else`."
      },
      {
        "id": 24,
        "question": "What does the `zip_longest` function from `itertools` do differently from built-in `zip`?",
        "options": [
          "It sorts the elements before zipping",
          "It fills missing values with a placeholder (default None) until the longest iterable ends",
          "It raises an error if iterables have different lengths",
          "It zips iterables in reverse order"
        ],
        "correct": 1,
        "topic": "Zip Function",
        "explanation": "`itertools.zip_longest(*iterables, fillvalue=None)` pads shorter iterables with `fillvalue` until the longest iterable is consumed."
      },
      {
        "id": 25,
        "question": "What will be printed?\ns = 'analytics'\nfound = False\nfor char in s:\n    if char == 'z':\n        found = True\n        break\nprint(found)",
        "options": [
          "True",
          "False",
          "None",
          "Error"
        ],
        "correct": 1,
        "topic": "For Loops",
        "explanation": "The character 'z' is not present in 'analytics', so the if block never executes and `found` remains `False`."
      },
      {
        "id": 26,
        "question": "What will be the output of `1 in [1, 2, 3]` and `4 not in [1, 2, 3]`?",
        "options": [
          "True and True",
          "True and False",
          "False and True",
          "False and False"
        ],
        "correct": 0,
        "topic": "Conditionals",
        "explanation": "The membership operator `in` checks if 1 is in the list (True), and `not in` checks that 4 is absent (True)."
      },
      {
        "id": 27,
        "question": "What will `[x for x in range(5) if x % 2 == 0]` produce?",
        "options": [
          "[0, 1, 2, 3, 4]",
          "[0, 2, 4]",
          "[1, 3]",
          "[2, 4]"
        ],
        "correct": 1,
        "topic": "For Loops",
        "explanation": "This list comprehension filters numbers from 0 to 4 where `x % 2 == 0`, yielding `[0, 2, 4]`."
      },
      {
        "id": 28,
        "question": "What is the output?\nx = 10\nif x == 10:\n    print('Ten')\nif x > 5:\n    print('Greater than 5')",
        "options": [
          "Ten",
          "Greater than 5",
          "Ten\nGreater than 5",
          "SyntaxError"
        ],
        "correct": 2,
        "topic": "Conditionals",
        "explanation": "These are two separate independent `if` statements, not an if-elif chain. Both conditions evaluate to True, so both messages print."
      },
      {
        "id": 29,
        "question": "What is the primary difference between a `for` loop and a `while` loop?",
        "options": [
          "for loops iterate over a known collection or sequence; while loops repeat as long as a condition is True",
          "while loops are always faster than for loops in Python",
          "for loops cannot use break statements",
          "while loops can only iterate through integers"
        ],
        "correct": 0,
        "topic": "While Loops",
        "explanation": "`for` loops are definite iteration over iterables; `while` loops are indefinite iteration controlled by a boolean expression."
      },
      {
        "id": 30,
        "question": "What will be printed?\ni = 0\nwhile i < 5:\n    i += 1\n    if i == 3:\n        continue\n    print(i, end=' ')",
        "options": [
          "1 2 4 5",
          "0 1 2 4 5",
          "1 2 3 4 5",
          "1 2"
        ],
        "correct": 0,
        "topic": "Break & Continue",
        "explanation": "When `i` increments to 3, `continue` skips the `print` call. For all other increments (1, 2, 4, 5), it prints the value."
      },
      {
        "id": 31,
        "question": "What will be the output?\nmatrix = [[1, 2], [3, 4]]\nfor row in matrix:\n    for val in row:\n        if val == 3:\n            break\n        print(val, end=' ')",
        "options": [
          "1 2 4",
          "1 2",
          "1 2 3 4",
          "1 3"
        ],
        "correct": 0,
        "topic": "Nested Loops",
        "explanation": "Row 1: prints 1 and 2. Row 2: val == 3 triggers break on inner loop, skipping 3; outer loop moves to next row (none). Output: 1 2."
      },
      {
        "id": 32,
        "question": "Which keyword is used in Python 3.10+ for pattern matching similar to switch-case statements?",
        "options": [
          "switch / case",
          "match / case",
          "select / when",
          "choose / case"
        ],
        "correct": 1,
        "topic": "Conditionals",
        "explanation": "Python 3.10 introduced structural pattern matching using the `match` and `case` statements."
      },
      {
        "id": 33,
        "question": "What will `any(x > 10 for x in [2, 4, 6, 12, 8])` return?",
        "options": [
          "True",
          "False",
          "12",
          "[12]"
        ],
        "correct": 0,
        "topic": "Conditionals",
        "explanation": "12 is greater than 10, so the generator expression yields a True value, and `any()` immediately evaluates to `True`."
      },
      {
        "id": 34,
        "question": "What will `all(x > 0 for x in [1, 2, -3, 4])` return?",
        "options": [
          "True",
          "False",
          "-3",
          "None"
        ],
        "correct": 1,
        "topic": "Conditionals",
        "explanation": "Because `-3 > 0` is False, not all elements satisfy the predicate; `all()` short-circuits and returns `False`."
      },
      {
        "id": 35,
        "question": "What will be printed?\nfor char in 'Mentor':\n    if char.isupper():\n        print(char, end='')",
        "options": [
          "'Mentor'",
          "'M'",
          "'entor'",
          "''"
        ],
        "correct": 1,
        "topic": "For Loops",
        "explanation": "Only the first letter 'M' is an uppercase character in 'Mentor'."
      },
      {
        "id": 36,
        "question": "How do you cleanly exit a deeply nested loop structure across multiple levels?",
        "options": [
          "Use `break 2` like in PHP or Bash",
          "Set a boolean flag variable, wrap in a function and use `return`, or raise a custom exception",
          "Use `exit()`",
          "Use `continue all`"
        ],
        "correct": 1,
        "topic": "Nested Loops",
        "explanation": "Python does not support labeled breaks or `break N`. Best practice is refactoring into a function and returning, or using a status flag."
      },
      {
        "id": 37,
        "question": "What is the output of `x = 5; print('Positive' if x > 0 else 'Zero' if x == 0 else 'Negative')`?",
        "options": [
          "Positive",
          "Zero",
          "Negative",
          "SyntaxError"
        ],
        "correct": 0,
        "topic": "Ternary Operator",
        "explanation": "Nested ternary expressions evaluate left-to-right: since `x > 0` is True, it returns `'Positive'`."
      },
      {
        "id": 38,
        "question": "What will be printed?\ni = 1\nwhile i < 1:\n    print(i)\nelse:\n    print('Loop did not run')",
        "options": [
          "1",
          "Loop did not run",
          "Nothing",
          "Infinite loop"
        ],
        "correct": 1,
        "topic": "While Loops",
        "explanation": "Because `i < 1` is initially False, the while loop body never executes, but the `else` block executes immediately."
      },
      {
        "id": 39,
        "question": "What will `len(range(10, 100, 5))` return in Python?",
        "options": [
          "18",
          "19",
          "20",
          "90"
        ],
        "correct": 0,
        "topic": "For Loops",
        "explanation": "Numbers are 10, 15, 20, ..., 95. The count is `(95 - 10) // 5 + 1 = 85 // 5 + 1 = 17 + 1 = 18`."
      },
      {
        "id": 40,
        "question": "Which of the following creates a reversed iterator over a list `lst = [10, 20, 30]` without copying?",
        "options": [
          "lst.reverse()",
          "reversed(lst)",
          "lst[::-1]",
          "lst.backward()"
        ],
        "correct": 1,
        "topic": "For Loops",
        "explanation": "`reversed(lst)` returns a reverse iterator object in O(1) space, avoiding creating a full duplicate copy in memory."
      }
    ]
  },
  "13": {
    "id": 13,
    "moduleNumber": 2,
    "title": "Mid Course Quiz — Python Fundamentals & Flow",
    "subtitle": "Mid-Term Comprehensive Exam: 40 MCQs benchmarking your analytical problem solving across Modules 1 & 2.",
    "durationMinutes": 45,
    "totalQuestions": 40,
    "passingScore": 28,
    "badge": "Mid-Course Scholar",
    "questions": [
      {
        "id": 1,
        "question": "In Python data analytics, why is integer division `//` preferred when calculating array bin indexes?",
        "options": [
          "Because float indexes raise a `TypeError: list indices must be integers or slices, not float`",
          "Because it runs 10x faster than float division",
          "Because it rounds to the nearest even number",
          "Because floats cannot represent numbers greater than 1000"
        ],
        "correct": 0,
        "topic": "Analytics Fundamentals",
        "explanation": "List/sequence indexing requires an exact integer type; using float division `/` returns float `4.0`, triggering a TypeError."
      },
      {
        "id": 2,
        "question": "What is the output of `[i for i in range(10) if i % 2 != 0]`?",
        "options": [
          "[0, 2, 4, 6, 8]",
          "[1, 3, 5, 7, 9]",
          "[1, 2, 3, 4, 5]",
          "[2, 4, 6, 8, 10]"
        ],
        "correct": 1,
        "topic": "List Comprehension",
        "explanation": "The condition `i % 2 != 0` tests for odd numbers from 0 to 9: 1, 3, 5, 7, 9."
      },
      {
        "id": 3,
        "question": "What does the expression `{'id': 1, 'name': 'Subodh', **{'role': 'Analyst', 'level': 7}}` do?",
        "options": [
          "Raises SyntaxError",
          "Merges the two dictionaries into a single combined dictionary using dictionary unpacking",
          "Creates a nested dictionary",
          "Returns a tuple of keys"
        ],
        "correct": 1,
        "topic": "Dictionaries & Unpacking",
        "explanation": "The `**` operator unpacks dictionary key-value pairs into the outer dictionary literal, merging them cleanly."
      },
      {
        "id": 4,
        "question": "What is the output of `bool(float('nan'))` in Python?",
        "options": [
          "False",
          "True",
          "Raises ValueError",
          "None"
        ],
        "correct": 1,
        "topic": "Data Types",
        "explanation": "In IEEE 754 floating-point standards and Python, `nan` (Not a Number) is a valid float object and evaluates to `True` in boolean context."
      },
      {
        "id": 5,
        "question": "What will be the output of `list(map(lambda x: x * 2, [1, 2, 3]))`?",
        "options": [
          "[1, 2, 3, 1, 2, 3]",
          "[2, 4, 6]",
          "[1, 4, 9]",
          "[2, 2, 2]"
        ],
        "correct": 1,
        "topic": "Functional Concepts",
        "explanation": "`map()` applies the lambda function `x * 2` to each item in the list, producing 2, 4, 6."
      },
      {
        "id": 6,
        "question": "What will `a = [1, 2]; b = a; b.append(3); print(a)` output?",
        "options": [
          "[1, 2]",
          "[1, 2, 3]",
          "[3]",
          "AttributeError"
        ],
        "correct": 1,
        "topic": "Variables & Mutability",
        "explanation": "`b = a` assigns an additional reference pointing to the same underlying list object in heap memory. Mutating `b` mutates `a`."
      },
      {
        "id": 7,
        "question": "What is the output of `sorted(['banana', 'pie', 'apple', 'kiwi'], key=len)`?",
        "options": [
          "['apple', 'banana', 'kiwi', 'pie']",
          "['pie', 'kiwi', 'apple', 'banana']",
          "['banana', 'apple', 'kiwi', 'pie']",
          "['pie', 'apple', 'kiwi', 'banana']"
        ],
        "correct": 1,
        "topic": "Sorting & Collections",
        "explanation": "The `key=len` argument sorts strings by their length ascending: 3 ('pie'), 4 ('kiwi'), 5 ('apple'), 6 ('banana')."
      },
      {
        "id": 8,
        "question": "What will be printed?\nrecords = [{'val': 10}, {'val': 25}, {'val': 5}]\ntotal = sum(r['val'] for r in records if r['val'] > 8)\nprint(total)",
        "options": [
          "40",
          "35",
          "25",
          "10"
        ],
        "correct": 1,
        "topic": "Analytics Workflows",
        "explanation": "Elements with val > 8 are 10 and 25. The sum of 10 + 25 = 35."
      },
      {
        "id": 9,
        "question": "What is the result of `10 > 5 and not 3 > 4 or 0` in Python?",
        "options": [
          "True",
          "False",
          "0",
          "None"
        ],
        "correct": 0,
        "topic": "Operator Precedence",
        "explanation": "Precedence: comparisons first (`10 > 5` is True, `3 > 4` is False), then `not False` is True. `True and True` is True; `True or 0` is True."
      },
      {
        "id": 10,
        "question": "What does `dict(zip(['x', 'y'], [100, 200]))` produce?",
        "options": [
          "{'x': 100, 'y': 200}",
          "[('x', 100), ('y', 200)]",
          "{'x', 'y': 100, 200}",
          "TypeError"
        ],
        "correct": 0,
        "topic": "Dictionaries & Sets",
        "explanation": "Passing pairs of tuples from `zip` to the `dict()` constructor creates key-value mapping `{'x': 100, 'y': 200}`."
      },
      {
        "id": 11,
        "question": "What will be printed?\nx = 0\nfor i in range(5):\n    if i == 2:\n        continue\n    x += i\nprint(x)",
        "options": [
          "10",
          "8",
          "7",
          "6"
        ],
        "correct": 1,
        "topic": "Control Flow",
        "explanation": "Values added to x are 0, 1, 3, 4 (skipping 2). Sum: 0 + 1 + 3 + 4 = 8."
      },
      {
        "id": 12,
        "question": "What is the output of `'python'[10:]`?",
        "options": [
          "IndexError",
          "''",
          "None",
          "'n'"
        ],
        "correct": 1,
        "topic": "Strings & Slicing",
        "explanation": "Unlike single index subscription `s[10]` (which raises IndexError), slice syntax gracefully handles out-of-range bounds, returning `''`."
      },
      {
        "id": 13,
        "question": "What is the return type of `{x: x**2 for x in (1, 2, 3)}`?",
        "options": [
          "set",
          "list",
          "dict",
          "tuple"
        ],
        "correct": 2,
        "topic": "Comprehensions",
        "explanation": "The `{key: value ...}` syntax defines a dictionary comprehension, returning `{1: 1, 2: 4, 3: 9}`."
      },
      {
        "id": 14,
        "question": "What will `a = {1, 2, 3}; a.add(2); print(len(a))` output?",
        "options": [
          "4",
          "3",
          "2",
          "Error"
        ],
        "correct": 1,
        "topic": "Sets",
        "explanation": "Sets enforce unique elements. Adding element 2 when 2 is already present has no effect; length remains 3."
      },
      {
        "id": 15,
        "question": "Which of the following checks whether all characters in string `code` are numeric digits?",
        "options": [
          "code.isnumeric() or code.isdigit()",
          "code.isnumber()",
          "code.isint()",
          "isinstance(code, int)"
        ],
        "correct": 0,
        "topic": "Strings & Methods",
        "explanation": "`.isdigit()` and `.isnumeric()` check if all characters in the string are digits. `code.isnumber()` does not exist."
      },
      {
        "id": 16,
        "question": "What will be printed?\nval = 5\nmsg = 'High' if val > 10 else 'Medium' if val > 3 else 'Low'\nprint(msg)",
        "options": [
          "High",
          "Medium",
          "Low",
          "SyntaxError"
        ],
        "correct": 1,
        "topic": "Ternary Operator",
        "explanation": "`val > 10` is False, so it evaluates the else expression: `val > 3` is True, returning `'Medium'`."
      },
      {
        "id": 17,
        "question": "What is the value of `x` after `x = [1, 2, 3]; x *= 2`?",
        "options": [
          "[2, 4, 6]",
          "[1, 2, 3, 1, 2, 3]",
          "[[1, 2, 3], [1, 2, 3]]",
          "TypeError"
        ],
        "correct": 1,
        "topic": "Lists & Operators",
        "explanation": "Multiplying a list by an integer replicates its elements in sequence rather than multiplying element values arithmetically."
      },
      {
        "id": 18,
        "question": "What will `sum([True, True, False, True])` evaluate to?",
        "options": [
          "TypeError",
          "3",
          "True",
          "False"
        ],
        "correct": 1,
        "topic": "Data Types",
        "explanation": "In Python, `bool` is a subclass of `int` where `True == 1` and `False == 0`. Summing them computes 1 + 1 + 0 + 1 = 3."
      },
      {
        "id": 19,
        "question": "What will be the output?\nchars = []\nfor c in 'AI':\n    for n in (1, 2):\n        chars.append(f'{c}{n}')\nprint(chars)",
        "options": [
          "['A1', 'A2', 'I1', 'I2']",
          "['A1', 'I2']",
          "['A1', 'I1', 'A2', 'I2']",
          "['AI12']"
        ],
        "correct": 0,
        "topic": "Nested Iteration",
        "explanation": "The nested loops combine each character 'A' and 'I' with numbers 1 and 2 in order: ['A1', 'A2', 'I1', 'I2']."
      },
      {
        "id": 20,
        "question": "What does the statement `del my_list[1:3]` do?",
        "options": [
          "Removes elements at indexes 1 and 2 in-place",
          "Deletes the entire list from memory",
          "Replaces elements at indexes 1 and 2 with None",
          "Raises a SyntaxError"
        ],
        "correct": 0,
        "topic": "Lists & Slicing",
        "explanation": "The `del` statement applied to a slice removes those elements from the list in-place and shrinks the list length."
      },
      {
        "id": 21,
        "question": "What will `min(['apple', 'banana', 'cat'])` return by default?",
        "options": [
          "'cat'",
          "'apple'",
          "3",
          "'banana'"
        ],
        "correct": 1,
        "topic": "Built-in Functions",
        "explanation": "By default, strings are compared lexicographically by character code. 'apple' begins with 'a', which is smaller than 'b' and 'c'."
      },
      {
        "id": 22,
        "question": "What does `filter(lambda x: x > 0, [-1, 2, -3, 4])` return?",
        "options": [
          "A list `[2, 4]`",
          "A filter iterator object that yields elements where the predicate is True",
          "`[True, False]`",
          "A set `{2, 4}`"
        ],
        "correct": 1,
        "topic": "Functional Concepts",
        "explanation": "`filter()` returns a lazy iterator in Python 3. To obtain a list, wrap it with `list(filter(...))`."
      },
      {
        "id": 23,
        "question": "What is the output of `f'Pi is {3.14159:.3f}'`?",
        "options": [
          "'Pi is 3.14'",
          "'Pi is 3.142'",
          "'Pi is 3.141'",
          "'Pi is 3.14159'"
        ],
        "correct": 1,
        "topic": "String Formatting",
        "explanation": "`:.3f` formats the float to 3 decimal digits, rounding the 5 up to round 3.14159 to 3.142."
      },
      {
        "id": 24,
        "question": "How do you count the number of occurrences of an element `'apple'` in a list `items`?",
        "options": [
          "items.count('apple')",
          "items.find('apple')",
          "count(items, 'apple')",
          "items.occurrences('apple')"
        ],
        "correct": 0,
        "topic": "Lists & Methods",
        "explanation": "The `list.count(x)` method returns the total number of times `x` appears in the list."
      },
      {
        "id": 25,
        "question": "What will `{'a', 'b', 'c'} - {'b', 'd'}` evaluate to?",
        "options": [
          "{'a', 'c'}",
          "{'a', 'c', 'd'}",
          "{'d'}",
          "{}"
        ],
        "correct": 0,
        "topic": "Set Operations",
        "explanation": "The difference operator `-` removes elements of the right set from the left set: {'a', 'b', 'c'} without 'b' is `{'a', 'c'}`."
      },
      {
        "id": 26,
        "question": "What will be printed?\nnums = [10, 20, 30]\nfor i in range(len(nums)):\n    nums[i] += 5\nprint(nums)",
        "options": [
          "[15, 25, 35]",
          "[10, 20, 30, 5]",
          "[5, 5, 5]",
          "TypeError"
        ],
        "correct": 0,
        "topic": "Lists & Mutation",
        "explanation": "Iterating by index allows direct mutation of each element in-place, adding 5 to each: [15, 25, 35]."
      },
      {
        "id": 27,
        "question": "What will `bool(None)` evaluate to?",
        "options": [
          "None",
          "False",
          "True",
          "TypeError"
        ],
        "correct": 1,
        "topic": "Data Types",
        "explanation": "`None` represents the absence of a value and always evaluates to `False` in boolean logic."
      },
      {
        "id": 28,
        "question": "What does `str.find('sub')` return if the substring `'sub'` is NOT found?",
        "options": [
          "Raises ValueError",
          "-1",
          "False",
          "None"
        ],
        "correct": 1,
        "topic": "Strings & Methods",
        "explanation": "`.find()` returns `-1` if the target is not found. In contrast, `.index()` raises a `ValueError`."
      },
      {
        "id": 29,
        "question": "What is the output of `(1, 2) + (3, 4)`?",
        "options": [
          "(4, 6)",
          "(1, 2, 3, 4)",
          "[1, 2, 3, 4]",
          "TypeError"
        ],
        "correct": 1,
        "topic": "Tuples & Concatenation",
        "explanation": "The `+` operator concatenates two tuples into a new combined tuple `(1, 2, 3, 4)`."
      },
      {
        "id": 30,
        "question": "What will `sorted({'c': 1, 'a': 3, 'b': 2})` return?",
        "options": [
          "['a', 'b', 'c']",
          "[1, 2, 3]",
          "{'a': 3, 'b': 2, 'c': 1}",
          "['c', 'a', 'b']"
        ],
        "correct": 0,
        "topic": "Dictionaries & Sorting",
        "explanation": "Iterating or sorting a dictionary operates on its keys by default. Sorting produces `['a', 'b', 'c']`."
      },
      {
        "id": 31,
        "question": "What will be printed?\nx = 1\nwhile x < 4:\n    x *= 2\nprint(x)",
        "options": [
          "2",
          "4",
          "8",
          "3"
        ],
        "correct": 1,
        "topic": "While Loops",
        "explanation": "Iteration 1: x becomes 2 (2 < 4 is True). Iteration 2: x becomes 4 (4 < 4 is False). Loop finishes; prints 4."
      },
      {
        "id": 32,
        "question": "What will `list('abc')` return?",
        "options": [
          "['abc']",
          "['a', 'b', 'c']",
          "('a', 'b', 'c')",
          "TypeError"
        ],
        "correct": 1,
        "topic": "Type Conversion",
        "explanation": "Passing a string to the `list()` constructor unpacks its individual characters into a list: `['a', 'b', 'c']`."
      },
      {
        "id": 33,
        "question": "What does `tuple([1, 2, 3])` return?",
        "options": [
          "[1, 2, 3]",
          "(1, 2, 3)",
          "(1)",
          "TypeError"
        ],
        "correct": 1,
        "topic": "Type Conversion",
        "explanation": "`tuple()` converts the list iterable into an immutable tuple `(1, 2, 3)`."
      },
      {
        "id": 34,
        "question": "What will be the output of `5 in range(1, 10, 2)`?",
        "options": [
          "True",
          "False",
          "TypeError",
          "5"
        ],
        "correct": 0,
        "topic": "Operators & Range",
        "explanation": "Values generated by `range(1, 10, 2)` are 1, 3, 5, 7, 9. 5 is an exact element, so membership evaluates to `True`."
      },
      {
        "id": 35,
        "question": "What will be the output?\nitems = ['A', 'B', 'C']\nitems.insert(1, 'X')\nprint(items)",
        "options": [
          "['X', 'A', 'B', 'C']",
          "['A', 'X', 'B', 'C']",
          "['A', 'B', 'X', 'C']",
          "['A', 'X', 'C']"
        ],
        "correct": 1,
        "topic": "Lists & Insertion",
        "explanation": "`insert(index, obj)` places 'X' at index 1, shifting existing elements at index 1 and above to the right."
      },
      {
        "id": 36,
        "question": "What is the return value of `list.pop()` when called without arguments on `[10, 20, 30]`?",
        "options": [
          "10",
          "30",
          "[10, 20]",
          "None"
        ],
        "correct": 1,
        "topic": "Lists & Methods",
        "explanation": "When called without arguments, `pop()` removes and returns the last element of the list (`30`)."
      },
      {
        "id": 37,
        "question": "What will `'hello world'.title()` return?",
        "options": [
          "'Hello World'",
          "'HELLO WORLD'",
          "'Hello world'",
          "'hello world'"
        ],
        "correct": 0,
        "topic": "Strings & Methods",
        "explanation": "The `.title()` method capitalizes the first character of each word: `'Hello World'`."
      },
      {
        "id": 38,
        "question": "What will be printed?\ntotal = 0\nfor x in [1, 2, 3]:\n    for y in [10, 20]:\n        total += x\nprint(total)",
        "options": [
          "12",
          "18",
          "6",
          "36"
        ],
        "correct": 0,
        "topic": "Nested Loops",
        "explanation": "Outer loop runs for x = 1, 2, 3. For each x, inner loop runs 2 times adding x each time. Total = 2*1 + 2*2 + 2*3 = 2 + 4 + 6 = 12."
      },
      {
        "id": 39,
        "question": "What is the output of `isinstance(True, int)`?",
        "options": [
          "True",
          "False",
          "TypeError",
          "None"
        ],
        "correct": 0,
        "topic": "Data Types",
        "explanation": "In Python, `bool` inherits directly from `int`, so `isinstance(True, int)` evaluates to `True`."
      },
      {
        "id": 40,
        "question": "What is the primary benefit of using a dictionary over a list of key-value tuples for frequent search operations?",
        "options": [
          "Dictionaries require less memory than tuples",
          "Dictionary key lookup is O(1) average time compared to O(n) linear search in a list",
          "Dictionaries preserve alphabetized order automatically",
          "Lists cannot store strings"
        ],
        "correct": 1,
        "topic": "Complexity & Data Structures",
        "explanation": "Dictionaries utilize hash tables, yielding instantaneous O(1) key lookups instead of scanning through all n elements."
      }
    ]
  },
  "20": {
    "id": 20,
    "moduleNumber": 3,
    "title": "Skill Mastery Challenge — Python Advanced",
    "subtitle": "Module 3 Final Capstone: 40 MCQs covering Scopes, Lambdas, Comprehensions, Exception Handling, File I/O & OOP.",
    "durationMinutes": 45,
    "totalQuestions": 40,
    "passingScore": 28,
    "badge": "Python Grandmaster",
    "questions": [
      {
        "id": 1,
        "question": "What is the LEGB rule for variable resolution scope in Python?",
        "options": [
          "Linear, Extended, Global, Base",
          "Local, Enclosing, Global, Built-in",
          "Lexical, Environment, Garbage, Block",
          "List, Element, Group, Bytecode"
        ],
        "correct": 1,
        "topic": "Scopes & Namespaces",
        "explanation": "LEGB defines Python's namespace search order: Local scope first, then Enclosing (outer functions), then Global module scope, and finally Built-in names."
      },
      {
        "id": 2,
        "question": "What is the dangerous side effect of using a mutable default argument like `def add_item(item, items=[]):`?",
        "options": [
          "It triggers a SyntaxError at compile time",
          "The default list is instantiated only once when the function is defined, causing it to persist and accumulate state across subsequent calls",
          "The list gets deleted by the garbage collector after the first function call",
          "It converts the list to a read-only tuple"
        ],
        "correct": 1,
        "topic": "Functions & Arguments",
        "explanation": "Default parameter values are evaluated once at function definition time, not at invocation. Re-using mutable defaults creates shared state bugs."
      },
      {
        "id": 3,
        "question": "What do `*args` and `**kwargs` capture in a function signature?",
        "options": [
          "*args captures positional arguments as a tuple; **kwargs captures keyword arguments as a dictionary",
          "*args captures keyword arguments as a list; **kwargs captures numbers as a dict",
          "*args captures pointers; **kwargs captures reference addresses",
          "Both capture arguments as lists"
        ],
        "correct": 0,
        "topic": "Functions & Arguments",
        "explanation": "`*args` collects arbitrary extra positional arguments into a tuple, while `**kwargs` collects arbitrary keyword arguments into a dictionary."
      },
      {
        "id": 4,
        "question": "What will `(lambda x, y: x * y + 2)(3, 4)` evaluate to?",
        "options": [
          "14",
          "18",
          "24",
          "12"
        ],
        "correct": 0,
        "topic": "Lambda Functions",
        "explanation": "Evaluating the anonymous lambda with x=3 and y=4: 3 * 4 + 2 = 12 + 2 = 14."
      },
      {
        "id": 5,
        "question": "What is the output of `[x**2 for x in range(5) if x % 2 == 0]`?",
        "options": [
          "[0, 4, 16]",
          "[0, 1, 4, 9, 16]",
          "[4, 16]",
          "[1, 9]"
        ],
        "correct": 0,
        "topic": "List Comprehension",
        "explanation": "Even numbers in range(5) are 0, 2, 4. Their squares are 0**2=0, 2**2=4, and 4**2=16: `[0, 4, 16]`."
      },
      {
        "id": 6,
        "question": "What is the difference between a generator expression `(x*2 for x in data)` and a list comprehension `[x*2 for x in data]`?",
        "options": [
          "There is no difference; parentheses create an immutable list",
          "A generator evaluates values lazily one-by-one on demand with O(1) memory, while a list comprehension materializes all values in memory upfront",
          "Generators are always slower and consume more RAM",
          "Generators cannot be iterated with a for loop"
        ],
        "correct": 1,
        "topic": "Generators & Memory",
        "explanation": "Generators use lazy evaluation, yielding items on demand using the iterator protocol, conserving RAM for large datasets."
      },
      {
        "id": 7,
        "question": "What is the role of the `self` parameter in a Python class method?",
        "options": [
          "It is a keyword that refers to the parent class",
          "It is an explicit reference to the current instance of the class on which the method is called",
          "It represents a global static pointer",
          "It is optional and can be omitted in instance methods"
        ],
        "correct": 1,
        "topic": "OOP Basics",
        "explanation": "`self` references the instance of the class, allowing access to instance attributes and methods."
      },
      {
        "id": 8,
        "question": "What is the special method `__init__` commonly known as in Python classes?",
        "options": [
          "The destructor",
          "The instance constructor / initializer",
          "The copy method",
          "The serializer"
        ],
        "correct": 1,
        "topic": "OOP Basics",
        "explanation": "`__init__` is the initializer method called automatically when creating a new instance of a class."
      },
      {
        "id": 9,
        "question": "What is the purpose of the `super()` function in Python class inheritance?",
        "options": [
          "It terminates the child class",
          "It grants access to methods and attributes of the parent/super class, following the Method Resolution Order (MRO)",
          "It converts an instance into a superuser object",
          "It defines static global properties"
        ],
        "correct": 1,
        "topic": "OOP Basics",
        "explanation": "`super()` returns a proxy object delegating method calls to the parent or sibling class according to Python's MRO."
      },
      {
        "id": 10,
        "question": "In Python error handling, when does the `else` block execute in `try-except-else-finally`?",
        "options": [
          "Whenever an exception is caught",
          "Only when NO exception was raised in the `try` block",
          "Unconditionally every time",
          "Only if the program runs out of memory"
        ],
        "correct": 1,
        "topic": "Exception Handling",
        "explanation": "The `else` block runs only if the code in the `try` block executes successfully without raising any exceptions."
      },
      {
        "id": 11,
        "question": "What is guaranteed about the `finally` block in a `try-except` structure?",
        "options": [
          "It runs only if an error occurred",
          "It always executes regardless of whether an exception was raised, handled, or unhandled (even if return statements exist)",
          "It runs only if no exception occurred",
          "It terminates the Python process"
        ],
        "correct": 1,
        "topic": "Exception Handling",
        "explanation": "The `finally` block is executed unconditionally for deterministic resource clean-up (closing files, releasing locks, terminating connections)."
      },
      {
        "id": 12,
        "question": "How do you explicitly trigger an exception in Python?",
        "options": [
          "throw ValueError('Invalid')",
          "raise ValueError('Invalid')",
          "trigger ValueError('Invalid')",
          "emit ValueError('Invalid')"
        ],
        "correct": 1,
        "topic": "Exception Handling",
        "explanation": "In Python, the `raise` keyword is used to trigger exceptions explicitly."
      },
      {
        "id": 13,
        "question": "Why is using `with open('data.csv', 'r') as f:` preferred over manual `f = open(...); f.close()`?",
        "options": [
          "Because the `with` statement utilizes the Context Manager protocol, guaranteeing that the file is closed even if an exception occurs inside the block",
          "Because it reads the file in binary mode automatically",
          "Because it compresses the file on disk",
          "Because it is required by the operating system"
        ],
        "correct": 0,
        "topic": "File Handling",
        "explanation": "Context managers implement `__enter__` and `__exit__`, ensuring deterministic resource cleanup even on crashes or unexpected returns."
      },
      {
        "id": 14,
        "question": "What is the difference between file modes `'w'` and `'a'` in Python `open()`?",
        "options": [
          "'w' opens for reading; 'a' opens for writing",
          "'w' truncates (overwrites) existing content; 'a' appends new content to the end of the file",
          "'w' only writes words; 'a' only writes ASCII",
          "'w' is asynchronous; 'a' is synchronous"
        ],
        "correct": 1,
        "topic": "File Handling",
        "explanation": "Mode `'w'` overwrites and truncates the target file to 0 bytes upon opening, whereas mode `'a'` preserves existing content and writes at the file end."
      },
      {
        "id": 15,
        "question": "What does `f.readlines()` return when invoked on an open file object?",
        "options": [
          "A single concatenated string containing the whole file",
          "A list of strings, where each element is a line of the file including the newline character `\\n`",
          "An integer indicating line count",
          "A dictionary of line numbers"
        ],
        "correct": 1,
        "topic": "File Handling",
        "explanation": "`.readlines()` reads all remaining lines from the file and returns them as a list of strings."
      },
      {
        "id": 16,
        "question": "What is the output of `list(map(str.upper, ['data', 'analytics']))`?",
        "options": [
          "['DATA', 'ANALYTICS']",
          "['data', 'analytics']",
          "'DATA ANALYTICS'",
          "TypeError"
        ],
        "correct": 0,
        "topic": "Functional Concepts",
        "explanation": "`map()` applies the method `str.upper` to each element, producing `['DATA', 'ANALYTICS']`."
      },
      {
        "id": 17,
        "question": "What is a closure in Python?",
        "options": [
          "A method that deletes private variables",
          "A nested function that retains access to variables in its enclosing lexical scope even after the outer function has finished executing",
          "A syntax error in indentation",
          "The final line of a Python script"
        ],
        "correct": 1,
        "topic": "Functions & Closures",
        "explanation": "A closure occurs when an inner function remembers and has access to variables in the local scope in which it was created, even after the outer function finishes."
      },
      {
        "id": 18,
        "question": "What does the `@property` decorator do when applied to a method in a Python class?",
        "options": [
          "Makes the method execute in a separate background thread",
          "Allows the method to be accessed like an attribute without using function call parentheses `()`",
          "Turns the method into a class method",
          "Prevents the method from being inherited"
        ],
        "correct": 1,
        "topic": "OOP Basics",
        "explanation": "The `@property` decorator defines a getter for a managed attribute, allowing `obj.prop` syntax while executing method logic under the hood."
      },
      {
        "id": 19,
        "question": "What is the purpose of `__str__` vs `__repr__` in Python classes?",
        "options": [
          "`__str__` is for an informal, human-readable display; `__repr__` is for an unambiguous, developer-focused representation",
          "`__str__` converts numbers to strings; `__repr__` deletes objects",
          "They are identical and interchangeable aliases",
          "`__repr__` only works with integers"
        ],
        "correct": 0,
        "topic": "OOP Basics",
        "explanation": "PEP standard: `__str__` is intended for end users (e.g. `print()`); `__repr__` is intended for developers and debugging (ideally evaluable code)."
      },
      {
        "id": 20,
        "question": "What will `issubclass(bool, int)` return in Python?",
        "options": [
          "True",
          "False",
          "TypeError",
          "None"
        ],
        "correct": 0,
        "topic": "OOP Basics",
        "explanation": "In Python's type hierarchy, `bool` is indeed a direct subclass of `int`."
      },
      {
        "id": 21,
        "question": "What is the output of `{x: x**3 for x in range(3)}`?",
        "options": [
          "{0: 0, 1: 1, 2: 8}",
          "[0, 1, 8]",
          "{0, 1, 8}",
          "{1: 1, 2: 8, 3: 27}"
        ],
        "correct": 0,
        "topic": "Comprehensions",
        "explanation": "For x = 0, 1, 2: 0**3=0, 1**3=1, 2**3=8. Produces `{0: 0, 1: 1, 2: 8}`."
      },
      {
        "id": 22,
        "question": "How do you define a function that accepts ONLY keyword-only arguments?",
        "options": [
          "Place an asterisk `*` by itself as an argument prior to the keyword arguments, e.g. `def func(*, key1, key2):`",
          "Prefix the function name with `@keyword`",
          "Wrap parameter names in double quotes",
          "Keyword-only arguments are not supported in Python"
        ],
        "correct": 0,
        "topic": "Functions & Arguments",
        "explanation": "A bare `*` in the parameter list signals that all subsequent parameters must be specified as keyword arguments."
      },
      {
        "id": 23,
        "question": "What will be printed?\ndef test():\n    global x\n    x = 50\ntest()\nprint(x)",
        "options": [
          "50",
          "NameError: name 'x' is not defined",
          "None",
          "0"
        ],
        "correct": 0,
        "topic": "Scopes & Namespaces",
        "explanation": "The `global x` statement binds assignments to `x` within the function to the module-level global namespace, so `x` becomes 50 globally."
      },
      {
        "id": 24,
        "question": "What does the `nonlocal` keyword do in a nested Python function?",
        "options": [
          "Accesses built-in system variables",
          "Declares that a variable refers to the nearest enclosing scope (excluding global scope)",
          "Exports the variable to other modules",
          "Destroys local variables"
        ],
        "correct": 1,
        "topic": "Scopes & Namespaces",
        "explanation": "`nonlocal` causes the variable identifier to refer to previously bound variables in the nearest enclosing function scope."
      },
      {
        "id": 25,
        "question": "What is the output of `(lambda *nums: sum(nums))(10, 20, 30)`?",
        "options": [
          "60",
          "[10, 20, 30]",
          "(10, 20, 30)",
          "TypeError"
        ],
        "correct": 0,
        "topic": "Lambda Functions",
        "explanation": "`*nums` packs the arguments into tuple `(10, 20, 30)`. `sum()` adds them to 60."
      },
      {
        "id": 26,
        "question": "What does `isinstance(obj, (int, float))` verify?",
        "options": [
          "Checks whether obj is simultaneously an int and a float",
          "Checks whether obj is an instance of either int OR float",
          "Raises a TypeError because tuples cannot be passed to isinstance",
          "Converts obj to an int or float"
        ],
        "correct": 1,
        "topic": "Type Checking",
        "explanation": "Passing a tuple of types to `isinstance()` checks if the object is an instance of any class in the tuple."
      },
      {
        "id": 27,
        "question": "What is an abstract base class (ABC) in Python and which module provides it?",
        "options": [
          "A class that cannot be instantiated directly and defines an interface for subclasses; provided by the `abc` module",
          "A class that contains only numbers; provided by `math`",
          "A class used for sorting algorithms; provided by `sys`",
          "A deprecated Python 2 feature"
        ],
        "correct": 0,
        "topic": "OOP Basics",
        "explanation": "The `abc` module provides `ABC` and `@abstractmethod` to enforce that derived subclasses implement specific method interfaces."
      },
      {
        "id": 28,
        "question": "What will `try: 1/0 \nexcept Exception as e: print(type(e).__name__)` output?",
        "options": [
          "ZeroDivisionError",
          "Exception",
          "MathError",
          "ArithmeticError"
        ],
        "correct": 0,
        "topic": "Exception Handling",
        "explanation": "`ZeroDivisionError` is the concrete exception raised. `type(e).__name__` prints `'ZeroDivisionError'`."
      },
      {
        "id": 29,
        "question": "How do you properly create a custom user-defined exception class in Python?",
        "options": [
          "class CustomError(Exception): pass",
          "def CustomError(): raise Error",
          "custom_exception = new Exception()",
          "error CustomError: inherit Exception"
        ],
        "correct": 0,
        "topic": "Exception Handling",
        "explanation": "Custom exceptions inherit directly or indirectly from Python's built-in `Exception` base class."
      },
      {
        "id": 30,
        "question": "What will happen if you attempt to open a nonexistent file with `open('ghost.txt', 'r')`?",
        "options": [
          "Python creates an empty file ghost.txt",
          "Raises `FileNotFoundError`",
          "Returns None",
          "Prompts the user to create the file"
        ],
        "correct": 1,
        "topic": "File Handling",
        "explanation": "Opening a nonexistent file in read mode `'r'` raises `FileNotFoundError` (a subclass of `OSError`)."
      },
      {
        "id": 31,
        "question": "What will `list(filter(None, [0, 1, False, 2, '', 'Data', None]))` return?",
        "options": [
          "[1, 2, 'Data']",
          "[0, False, '', None]",
          "[0, 1, 2]",
          "TypeError"
        ],
        "correct": 0,
        "topic": "Functional Concepts",
        "explanation": "If `None` is passed as the first argument to `filter()`, it defaults to the identity function, removing all falsy elements."
      },
      {
        "id": 32,
        "question": "What is Method Resolution Order (MRO) in Python?",
        "options": [
          "The order in which methods are written inside a source file",
          "The deterministic order in which Python searches base classes when resolving a method or attribute in multiple inheritance",
          "The speed benchmark of method execution",
          "The syntax order of def statements"
        ],
        "correct": 1,
        "topic": "OOP Basics",
        "explanation": "MRO (computed via the C3 linearization algorithm) determines the search path Python follows to resolve attributes and methods across class inheritance hierarchies."
      },
      {
        "id": 33,
        "question": "What does `json.loads(s)` do versus `json.load(f)`?",
        "options": [
          "`json.loads` parses a JSON string; `json.load` reads and parses JSON from a file-like stream object",
          "`json.loads` writes JSON; `json.load` reads JSON",
          "They are identical aliases",
          "`json.loads` only parses numbers"
        ],
        "correct": 0,
        "topic": "File & Data Serialization",
        "explanation": "The trailing 's' in `loads` stands for 'string'. `json.loads(str)` deserializes a JSON string, while `json.load(fp)` reads from a file pointer."
      },
      {
        "id": 34,
        "question": "What will `class Dog: species = 'Canine'` define `species` as?",
        "options": [
          "An instance variable unique to each dog object",
          "A class attribute shared across all instances of Dog",
          "A private method",
          "A constant that cannot be reassigned"
        ],
        "correct": 1,
        "topic": "OOP Basics",
        "explanation": "Attributes defined directly in the class body outside `__init__` are class attributes shared across all instances of the class."
      },
      {
        "id": 35,
        "question": "What is duck typing in Python?",
        "options": [
          "A typing system where types are strictly checked at compile time",
          "\"If it walks like a duck and quacks like a duck, it's a duck\" — checking for the presence of methods/attributes rather than strict inheritance type",
          "A library for mocking data",
          "A debugging mode in VS Code"
        ],
        "correct": 1,
        "topic": "Python Philosophy",
        "explanation": "Duck typing is dynamic typing where an object's suitability is determined by the presence of certain methods and properties rather than its explicit class hierarchy."
      },
      {
        "id": 36,
        "question": "What will `f = lambda x: [i**2 for i in x]; f([1, 2, 3])` return?",
        "options": [
          "[1, 4, 9]",
          "[1, 2, 3]",
          "14",
          "Error"
        ],
        "correct": 0,
        "topic": "Lambda & Comprehensions",
        "explanation": "The lambda receives the list `[1, 2, 3]` and executes a list comprehension squaring each item: `[1, 4, 9]`."
      },
      {
        "id": 37,
        "question": "What does the `@classmethod` decorator do to a method?",
        "options": [
          "Makes the method private",
          "Passes the class (`cls`) itself as the first argument instead of an instance (`self`)",
          "Prevents the method from modifying class attributes",
          "Runs the method before `__init__`"
        ],
        "correct": 1,
        "topic": "OOP Basics",
        "explanation": "A `@classmethod` receives the class object `cls` as its implicit first parameter, commonly used for factory constructors."
      },
      {
        "id": 38,
        "question": "What does the `@staticmethod` decorator do to a method?",
        "options": [
          "Passes neither the instance `self` nor the class `cls` implicitly as first argument",
          "Caches the return value of the method",
          "Locks the method against concurrent threads",
          "Converts the method to a global function"
        ],
        "correct": 0,
        "topic": "OOP Basics",
        "explanation": "A `@staticmethod` behaves like a regular function housed inside a class namespace without receiving implicit `self` or `cls` arguments."
      },
      {
        "id": 39,
        "question": "What is the output of `try:\n    raise KeyError('missing')\nexcept (ValueError, KeyError) as e:\n    print('Caught')`?",
        "options": [
          "'Caught'",
          "KeyError: missing",
          "ValueError: missing",
          "SyntaxError"
        ],
        "correct": 0,
        "topic": "Exception Handling",
        "explanation": "An except clause can catch multiple exceptions by specifying a tuple of exception classes `(ValueError, KeyError)`."
      },
      {
        "id": 40,
        "question": "What will `with open('test.txt', 'w') as f: f.write('Line 1\\nLine 2\\n')` return from `f.write()` in Python 3?",
        "options": [
          "None",
          "The total number of characters written as an integer (14)",
          "True",
          "The file path"
        ],
        "correct": 1,
        "topic": "File Handling",
        "explanation": "In Python 3, `file.write()` returns the number of characters written to the file (14 characters in this string)."
      }
    ]
  }
};
