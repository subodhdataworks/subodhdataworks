# -*- coding: utf-8 -*-
"""
Generates src/data/pythonVariablesGamesData.ts from scratch_level2_prompt.txt
with shuffled options, rich explanations, and full typing matching pythonIntroGamesData.ts.
"""
import re, json

with open('scratch_level2_prompt.txt', 'r', encoding='utf-8') as f:
    text = f.read()

games_raw = re.split(r'\n(?=Game \d+ [—\-–])', text)[1:]

# Rich explanations for all games where not fully present
EXPLANATIONS = {
    # Game 3
    (3, 1): "In Python, whole numbers without decimals like 99 are integers (int). Writing 'price = 99' assigns this int to the variable.",
    (3, 2): "Any text enclosed in single or double quotes such as 'Ravi' is a string (str) literal in Python.",
    (3, 3): "True and False are Python's Boolean (bool) literals, representing binary logic and truth values.",
    (3, 4): "The built-in function type(obj) checks and returns the runtime data type of any object (here float).",
    (3, 5): "int('45') performs type casting: it converts the numeric string '45' into an integer value 45.",
    (3, 6): "Tuple unpacking allows multiple assignments in a single statement: a gets 3 and b gets 7 simultaneously.",
    (3, 7): "Numbers containing a decimal point like 0.18 belong to Python's float (floating-point) type.",
    (3, 8): "By PEP 8 convention, identifiers written in ALL_CAPS communicate that the value should be treated as a constant.",
    (3, 9): "Python evaluates the right side 'total + 5' first using the existing value, then assigns the result back to total.",
    (3, 10): "None is a special singleton in Python representing the absence of a value or an unassigned state (NoneType).",

    # Game 4
    (4, 1): "Variables are dynamic references: assigning 20 to x replaces the previous value of 10 in memory.",
    (4, 2): "7 is a whole number without a decimal point, so type(7) reports <class 'int'>.",
    (4, 3): "7.0 contains a decimal point, which makes Python classify it as a floating-point number (float).",
    (4, 4): "The int() function parses the string '25' and converts it into the numeric integer 25.",
    (4, 5): "Because '25' is enclosed in quotes, its data type is str (string) before any conversion occurs.",
    (4, 6): "Chained assignment a = b = 6 binds both variable identifiers to the integer value 6.",
    (4, 7): "False is a Boolean literal in Python representing falsehood, belonging to type bool.",
    (4, 8): "The str(100) function converts the integer 100 into its string representation '100'.",
    (4, 9): "The arithmetic expression 1000 + 250 computes to 1250, which is then reassigned back to sales.",
    (4, 10): "None belongs to its own dedicated built-in type called NoneType.",

    # Game 5
    (5, 1): "Python identifier rules strictly forbid variable names from starting with digits (0-9).",
    (5, 2): "In Python, the hyphen '-' is treated as the subtraction operator, not a valid character in variable names. Use sales_total instead.",
    (5, 3): "Surrounding 99 with quotes makes it a string (str). Performing arithmetic like price + 10 will raise a TypeError.",
    (5, 4): "int() cannot convert English words like 'nine' into numbers; it raises a ValueError at runtime.",
    (5, 5): "'False' in quotes is a string literal (which is truthy!). The actual Boolean literal is unquoted False.",
    (5, 6): "Python does not have built-in constants. Uppercase naming is a convention for developers, not enforced by the interpreter.",
    (5, 7): "Quotation marks define string literals in Python. '3.5' is of type str until converted with float('3.5').",
    (5, 8): "Writing x = 8 reassigns x; it does not add to the previous value of 5. To accumulate, use x = x + 8 or x += 8.",
    (5, 9): "int() cannot directly parse strings with a decimal point like '12.5'. Use float('12.5') instead.",
    (5, 10): "'class' is a reserved Python keyword used to define classes and cannot be used as a variable name.",

    # Game 6
    (6, 1): "Customer names contain text characters, so the string (str) data type is the appropriate choice.",
    (6, 2): "Order quantities are discrete whole numbers, making int the natural and optimal data type.",
    (6, 3): "Discount percentages like 0.15 contain fractional decimal parts, requiring the float data type.",
    (6, 4): "Whether an invoice is paid has two logical states (yes/no), making bool (True/False) the ideal type.",
    (6, 5): "Raw text '120' must be converted with int('120') before it can be used in arithmetic operations.",
    (6, 6): "PEP 8 convention recommends lowercase words separated by underscores (snake_case), such as monthly_revenue.",
    (6, 7): "Configuration values intended as constants should use SCREAMING_SNAKE_CASE like MAX_RETRIES by convention.",
    (6, 8): "Chained assignment x = y = 10 cleanly assigns the value 10 to both variables in a single readable line.",
    (6, 9): "The built-in type(amount) function returns the exact data type of any variable or value.",
    (6, 10): "A name is text (str), an order count is an integer (int), and paid status is a Boolean (bool).",

    # Game 7
    (7, 1): "Before doing calculations, text representations of numbers must be inspected and converted with int() or float().",
    (7, 2): "Multiple assignment (e.g. x, y = 10, 20) lets developers assign several variables in one clean statement.",
    (7, 3): "None is Python's standard way to signify missing, absent, or uninitialized values without using arbitrary dummy numbers.",
    (7, 4): "Prices with decimal cents (like 149.99) are stored as floating-point numbers (float) in basic Python.",
    (7, 5): "Python is strictly case-sensitive: OrderCount, orderCount, and ordercount are completely different variables.",
    (7, 6): "Clear snake_case naming like total_sales communicates business intent directly and conforms to PEP 8 standards.",
    (7, 7): "Defensive code inspects variable types using type() or isinstance() before performing operations on user data.",
    (7, 8): "UPPERCASE identifiers like TAX_RATE signal to developers that this value represents an application constant.",
    (7, 9): "Python evaluates the right side first; if revenue is not defined beforehand, a NameError will be raised.",
    (7, 10): "Boolean values (True and False) represent binary conditional states without ambiguity.",

    # Game 8
    (8, 1): "Strings cannot be multiplied by floats; converting quantity with int('8') ensures correct math: 8 * 12.5 = 100.0.",
    (8, 2): "In Python, variables are labels referring to values in memory and can be dynamically reassigned to new values.",
    (8, 3): "customer_total follows PEP 8 snake_case, does not start with digits, and contains no invalid hyphens or spaces.",
    (8, 4): "True is bool, 45 is int, 6.75 is float, and 'Mira' is str, matching the sequence bool, int, float, str.",
    (8, 5): "int('45') parses the numeric digits and returns the integer 45.",
    (8, 6): "int() expects integer digit strings; encountering a decimal point '.' throws a ValueError.",
    (8, 7): "Python's design philosophy relies on conventions; uppercase variable names signal constant intent without enforcing immutability.",
    (8, 8): "Robust software handles missing or invalid inputs gracefully using validation and conversion error handling.",
    (8, 9): "customer_name is str, order_count is int, and is_returned is bool.",
    (8, 10): "True mastery comes from explaining why data types behave as they do and testing against real-world edge cases."
}

GAME_METAS = [
    {
        "id": 1,
        "gameType": "code_puzzle",
        "title": "Game 1 — Puzzle Quest: Variable Vault",
        "shortTitle": "Variable Vault",
        "subtitle": "10 Questions • Master variables, naming rules, reassignment, and types.",
        "badge": "1",
        "description": "Unlock the fundamentals of variables, assignments, naming conventions, and data types.",
        "icon": "📦",
        "themeColor": "from-amber-500 to-orange-600",
        "activeColor": "#f59e0b",
        "mascotImg": "/images/python_mascot_3d.png",
        "bgGradient": "radial-gradient(circle at 50% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 70%)"
    },
    {
        "id": 2,
        "gameType": "fill_blank",
        "title": "Game 2 — Fill in the Blank",
        "shortTitle": "Blank Solver",
        "subtitle": "10 Questions • Complete core definitions of Python data types & syntax.",
        "badge": "2",
        "description": "Fill the blanks: variables, case sensitivity, int, float, str, bool, and type().",
        "icon": "✍️",
        "themeColor": "from-blue-500 to-indigo-600",
        "activeColor": "#3b82f6",
        "mascotImg": "/images/python_mascot_3d.png",
        "bgGradient": "radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)"
    },
    {
        "id": 3,
        "gameType": "match_code",
        "title": "Game 3 — Match the Code",
        "shortTitle": "Milan Matcher",
        "subtitle": "10 Questions • Connect code snippets with their accurate data types and operations.",
        "badge": "3",
        "description": "Match code lines with their operations and data representations.",
        "icon": "⚡",
        "themeColor": "from-emerald-500 to-teal-600",
        "activeColor": "#10b981",
        "mascotImg": "/images/python_mascot_3d.png",
        "bgGradient": "radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 70%)"
    },
    {
        "id": 4,
        "gameType": "output_predictor",
        "title": "Game 4 — Think: Quantum Output Predictor",
        "shortTitle": "Quantum Predictor",
        "subtitle": "10 Questions • Predict the exact runtime values and types of Python statements.",
        "badge": "4",
        "description": "Predict outputs for reassignments, type casting, chained assignment, and None.",
        "icon": "🔮",
        "themeColor": "from-purple-500 to-pink-600",
        "activeColor": "#8b5cf6",
        "mascotImg": "/images/python_mascot_3d.png",
        "bgGradient": "radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)"
    },
    {
        "id": 5,
        "gameType": "bug_hunter",
        "title": "Game 5 — Debug: Cyber Bug Hunter",
        "shortTitle": "Bug Hunter",
        "subtitle": "10 Questions • Hunt down variable naming violations and type mismatches.",
        "badge": "5",
        "description": "Fix illegal identifier names, ValueError on int('nine'), and string/bool confusion.",
        "icon": "🐞",
        "themeColor": "from-rose-500 to-red-600",
        "activeColor": "#f43f5e",
        "mascotImg": "/images/python_mascot_3d.png",
        "bgGradient": "radial-gradient(circle at 50% 20%, rgba(244, 63, 94, 0.15) 0%, transparent 70%)"
    },
    {
        "id": 6,
        "gameType": "blueprint_builder",
        "title": "Game 6 — Build: Component Blueprint Machine",
        "shortTitle": "Blueprint Architect",
        "subtitle": "10 Questions • Design optimal data architectures for real business applications.",
        "badge": "6",
        "description": "Select the optimal types (str, int, float, bool) for sales, revenue, and customer entities.",
        "icon": "🏗️",
        "themeColor": "from-cyan-500 to-blue-600",
        "activeColor": "#06b6d4",
        "mascotImg": "/images/python_mascot_3d.png",
        "bgGradient": "radial-gradient(circle at 50% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 70%)"
    },
    {
        "id": 7,
        "gameType": "logic_builder",
        "title": "Game 7 — Logic Builder",
        "shortTitle": "Logic Builder",
        "subtitle": "10 Questions • Formulate real-world data handling and type safety logic.",
        "badge": "7",
        "description": "Reason about variable lifetimes, case sensitivity, type casting, and state representation.",
        "icon": "🧩",
        "themeColor": "from-violet-500 to-indigo-600",
        "activeColor": "#6366f1",
        "mascotImg": "/images/python_mascot_3d.png",
        "bgGradient": "radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 70%)"
    },
    {
        "id": 8,
        "gameType": "boss_fight",
        "title": "Game 8 — BOSS FIGHT: Data Type Guardian",
        "shortTitle": "Boss: Data Guardian",
        "subtitle": "10 Boss Challenges • Defeat the Cyber Guardian with mastery of variables and types!",
        "badge": "8",
        "description": "Face the ultimate 10-phase boss battle testing all core Chapter 2 concepts.",
        "icon": "⚔️",
        "themeColor": "from-red-600 to-orange-600",
        "activeColor": "#dc2626",
        "mascotImg": "/images/python_mascot_3d.png",
        "bgGradient": "radial-gradient(circle at 50% 20%, rgba(220, 38, 38, 0.18) 0%, transparent 70%)"
    }
]

# Shuffling helper:
# To shuffle deterministically so correct answers are well distributed across A, B, C, D:
# We shift the 4 options by (game_id * 3 + q_num * 2) % 4
def shuffle_options(opts, correct_orig_key, game_id, q_num):
    # opts: list of (orig_key, label)
    shift = (game_id * 3 + q_num * 2 + 1) % 4
    # reorder
    reordered = opts[shift:] + opts[:shift]
    result = []
    letters = ['A', 'B', 'C', 'D']
    for idx, (orig_k, label) in enumerate(reordered):
        is_corr = (orig_k == correct_orig_key)
        result.append({
            'key': letters[idx],
            'label': label,
            'isCorrect': is_corr
        })
    return result

parsed_games = []

for g_idx, g in enumerate(games_raw):
    game_id = g_idx + 1
    meta = GAME_METAS[g_idx]
    
    q_blocks = re.split(r'\n(?=\d+\.\s)', g)
    if not re.match(r'^\d+\.', q_blocks[0].strip()):
        q_blocks = q_blocks[1:]
    
    challenges = []
    
    for q_i, q_b in enumerate(q_blocks):
        q_num = q_i + 1
        m_q = re.search(r'^\d+\.\s+(.*?)(?=\n[-\s]*[A-D]\.|\n\s*Answer:|\Z)', q_b, re.DOTALL)
        q_text = m_q.group(1).strip() if m_q else ''
        opts_raw = re.findall(r'[-\s]*([A-D])\.\s+([^\n]+)', q_b)
        m_ans = re.search(r'Answer:\s*([A-D])(?:\s*[—\-–]\s*(.*))?', q_b)
        ans_key = m_ans.group(1) if m_ans else 'A'
        ans_expl_prompt = m_ans.group(2).strip() if (m_ans and m_ans.group(2)) else ''
        
        explanation = ans_expl_prompt if ans_expl_prompt else EXPLANATIONS.get((game_id, q_num), "Understanding Python variable and data type fundamentals.")
        
        # Shuffle options
        shuffled_choices = shuffle_options(opts_raw, ans_key, game_id, q_num)
        
        # Find correct choice
        correct_choice = next(c for c in shuffled_choices if c['isCorrect'])
        
        chal_id = f"v2_g{game_id}_q{q_num}"
        chal_title = f"{meta['shortTitle']} #{q_num}"
        
        challenge = {
            "id": chal_id,
            "gameId": game_id,
            "challengeNum": q_num,
            "title": chal_title,
            "task": q_text,
            "expectedOutput": correct_choice['label'],
            "starterCode": f"# Level 2 - {meta['shortTitle']} Q{q_num}\n",
            "hint": f"Think about: {explanation[:60]}...",
            "solution": correct_choice['label'],
            "explanation": explanation,
            "xp": 10,
            "choiceOptions": shuffled_choices
        }
        
        # Add mode-specific attributes
        if meta['gameType'] == 'code_puzzle':
            challenge["starterCode"] = f"# Variable Vault Challenge #{q_num}\n# {q_text}"
            challenge["puzzleTokens"] = [c['label'] for c in shuffled_choices]
            challenge["expectedPuzzleTokens"] = [correct_choice['label']]
            
        elif meta['gameType'] == 'fill_blank':
            challenge["blankSnippet"] = q_text
            challenge["blankAnswer"] = correct_choice['label']
            
        elif meta['gameType'] == 'match_code':
            # q_text is snippet, e.g. "price = 99"
            challenge["matchPairs"] = [{"left": q_text, "right": correct_choice['label']}]
            distractors = [c['label'] for c in shuffled_choices if not c['isCorrect']]
            challenge["matchDistractors"] = distractors
            challenge["blankSnippet"] = f"{q_text}  # Match the purpose"
            
        elif meta['gameType'] == 'output_predictor':
            challenge["starterCode"] = f"# Predict output for:\n{q_text}"
            challenge["predictorChoices"] = [c['label'] for c in shuffled_choices]
            
        elif meta['gameType'] == 'bug_hunter':
            challenge["bugCode"] = q_text
            challenge["bugLine"] = 1
            challenge["bugType"] = "Variable / Type Syntax Bug"
            
        elif meta['gameType'] == 'blueprint_builder':
            challenge["blueprintSpec"] = [q_text]
            challenge["blueprintComponents"] = [c['label'] for c in shuffled_choices]
            challenge["blueprintExpectedSlots"] = [correct_choice['label']]
            challenge["blueprintSlotsCount"] = 1
            
        elif meta['gameType'] == 'logic_builder':
            challenge["logicLines"] = [
                {"id": f"line-{idx}", "text": c['label'], "correctIndex": 0 if c['isCorrect'] else idx + 1}
                for idx, c in enumerate(shuffled_choices)
            ]
            
        elif meta['gameType'] == 'boss_fight':
            challenge["bossHpDamage"] = 10
            challenge["bossStrikeName"] = f"Type Strike: {correct_choice['label'][:24]}"
            
        challenges.append(challenge)
        
    meta_copy = dict(meta)
    meta_copy["challenges"] = challenges
    parsed_games.append(meta_copy)

# Verify shuffled distribution
counts = {'A': 0, 'B': 0, 'C': 0, 'D': 0}
for g in parsed_games:
    for c in g['challenges']:
        for opt in c['choiceOptions']:
            if opt['isCorrect']:
                counts[opt['key']] += 1
print('Correct option key distribution across all 80 questions:', counts)

# Generate TypeScript code
ts_code = '''/**
 * Complete Data for Python Variables & Data Types Module (Level 2 / Chapter 2).
 * 8 Interactive Games × 10 Questions per Game = 80 Total Challenges.
 * Shuffled option positions, rich explanations, and practical business data examples.
 */

import { PythonGame } from './pythonIntroGamesData';

export const PYTHON_VARIABLES_GAMES: PythonGame[] = ''' + json.dumps(parsed_games, indent=2, ensure_ascii=False) + ';\n'

with open('src/data/pythonVariablesGamesData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_code)

print('Successfully written src/data/pythonVariablesGamesData.ts!')
