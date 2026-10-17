import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Code2, 
  Play, 
  Volume2, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  Layers, 
  HelpCircle,
  Lightbulb,
  ArrowRight,
  Database,
  Hash,
  Terminal,
  Brain
} from 'lucide-react';
import { SafePythonSandbox } from '../../services/pythonSandbox';
import { SoundEffects } from '../../services/soundEffects';
import { Voice } from '../../services/voiceService';
import { LanguageMode } from '../../types';

interface Python2050MasteryHubProps {
  isOpen: boolean;
  onClose: () => void;
  preferredLanguage?: LanguageMode;
}

export const Python2050MasteryHub: React.FC<Python2050MasteryHubProps> = ({
  isOpen,
  onClose,
  preferredLanguage = 'hinglish',
}) => {
  const [activeTab, setActiveTab] = useState<'intro' | 'datatypes' | 'interview' | 'challenge'>('intro');
  const [lang, setLang] = useState<LanguageMode>(preferredLanguage);

  // Playground sandbox state
  const [activeCodeSnippet, setActiveCodeSnippet] = useState<string>('x = "10" + "20"\ny = 10 + 20\nprint("x:", x)\nprint("y:", y)');
  const [sandboxOutput, setSandboxOutput] = useState<string[]>([]);
  const [isSandboxRunning, setIsSandboxRunning] = useState<boolean>(false);

  // Live Type Inspector State
  const [inspectorInput, setInspectorInput] = useState<string>('["Laptop", "Mouse", "Keyboard"]');
  const [inspectorResult, setInspectorResult] = useState<{
    type: string;
    category: string;
    mutability: 'Mutable (Can Change)' | 'Immutable (Locked)';
    metaphor: string;
    analystUse: string;
    sampleOutput: string;
  } | null>(null);

  // Brain Teaser State
  const [selectedChallengeAnswer, setSelectedChallengeAnswer] = useState<string | null>(null);
  const [challengeFeedback, setChallengeFeedback] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleRunSandbox = (codeToRun: string) => {
    setIsSandboxRunning(true);
    SoundEffects.playDiscovery();
    const res = SafePythonSandbox.run(codeToRun);
    if (res.success) {
      setSandboxOutput(res.output);
      SoundEffects.playSuccess();
    } else {
      setSandboxOutput([res.error || 'Execution Error']);
      SoundEffects.playError();
    }
    setIsSandboxRunning(false);
  };

  const handleSpeak = (text: string) => {
    SoundEffects.playDiscovery();
    Voice.speak(text, lang);
  };

  // Inspect expression for Tab 2
  const handleInspectType = () => {
    SoundEffects.playDiscovery();
    const trimmed = inspectorInput.trim();

    if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
      setInspectorResult({
        type: "<class 'list'>",
        category: 'Sequence (List)',
        mutability: 'Mutable (Can Change)',
        metaphor: '🛒 Kirana Shopping Bag: Add, remove, update items freely.',
        analystUse: 'Storing column lists, selected filter values, and iterating rows in Pandas.',
        sampleOutput: `List with ${trimmed.split(',').length} elements`
      });
    } else if (trimmed.startsWith('(') && trimmed.endsWith(')')) {
      setInspectorResult({
        type: "<class 'tuple'>",
        category: 'Sequence (Tuple)',
        mutability: 'Immutable (Locked)',
        metaphor: '🔒 Aadhaar / GPS Coordinates: Locked forever once recorded.',
        analystUse: 'Returning multiple values from a function; fixed database connection coordinates.',
        sampleOutput: `Tuple (read-only)`
      });
    } else if (trimmed.startsWith('{') && trimmed.endsWith('}') && trimmed.includes(':')) {
      setInspectorResult({
        type: "<class 'dict'>",
        category: 'Mapping (Dictionary)',
        mutability: 'Mutable (Can Change)',
        metaphor: '📖 Mobile Phonebook: Find Phone Number instantly by Name (Key:Value).',
        analystUse: 'Parsing JSON API responses; mapping column renames in Pandas (df.rename(columns={...})).',
        sampleOutput: `Dictionary of Key-Value pairs`
      });
    } else if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
      setInspectorResult({
        type: "<class 'set'>",
        category: 'Set (Unique)',
        mutability: 'Mutable (Can Change)',
        metaphor: '✨ Duplicate Filter: Automatically removes repeat entries.',
        analystUse: 'Finding distinct customer IDs; performing set unions & intersections between two datasets.',
        sampleOutput: `Set of unique values`
      });
    } else if (trimmed === 'True' || trimmed === 'False') {
      setInspectorResult({
        type: "<class 'bool'>",
        category: 'Boolean',
        mutability: 'Immutable (Locked)',
        metaphor: '💡 Light Switch: Only True or False. UPI payment success or fail.',
        analystUse: 'Boolean filtering in Pandas: df[df["revenue"] > 50000].',
        sampleOutput: `Boolean: ${trimmed}`
      });
    } else if (trimmed === 'None') {
      setInspectorResult({
        type: "<class 'NoneType'>",
        category: 'Null / Missing Value',
        mutability: 'Immutable (Locked)',
        metaphor: '📦 Empty Box: Nothing stored inside (Missing field in customer form).',
        analystUse: 'Foundation of missing data handling in Pandas (df.isna() / df.dropna()).',
        sampleOutput: `NoneType object`
      });
    } else if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
      setInspectorResult({
        type: "<class 'str'>",
        category: 'Text (String)',
        mutability: 'Immutable (Locked)',
        metaphor: '🧵 Text Thread: Words, names, addresses wrapped in quotes.',
        analystUse: 'Cleaning text columns with .str.strip(), .str.lower(), .str.split().',
        sampleOutput: `Text string of length ${trimmed.length - 2}`
      });
    } else if (!isNaN(Number(trimmed))) {
      if (trimmed.includes('.')) {
        setInspectorResult({
          type: "<class 'float'>",
          category: 'Decimal Number (Float)',
          mutability: 'Immutable (Locked)',
          metaphor: '⛽ Petrol Pump Display: ₹96.72 with exact decimal precision.',
          analystUse: 'Revenues, averages, conversion rates, and financial metrics in analytics.',
          sampleOutput: `Float numeric: ${trimmed}`
        });
      } else {
        setInspectorResult({
          type: "<class 'int'>",
          category: 'Whole Number (Integer)',
          mutability: 'Immutable (Locked)',
          metaphor: '📦 Maggi Packets: 5 exact packets. No fractions.',
          analystUse: 'Counting orders, inventory units, customer age, and index positions.',
          sampleOutput: `Integer value: ${trimmed}`
        });
      }
    } else {
      setInspectorResult({
        type: "<class 'custom_expression'>",
        category: 'Python Expression',
        mutability: 'Mutable (Can Change)',
        metaphor: '⚡ Dynamic Code: Evaluated dynamically by Python runtime.',
        analystUse: 'Custom lambda functions and data transformation pipelines.',
        sampleOutput: `Evaluated expression: ${trimmed}`
      });
    }
  };

  const handleChallengeSelect = (answer: string) => {
    setSelectedChallengeAnswer(answer);
    if (answer === 'x: 1020, y: 30') {
      SoundEffects.playBreakthrough();
      setChallengeFeedback(
        '🎉 100% CORRECT! In Python, + between strings "glues" them together (Concatenation: "10" + "20" = "1020"). But + between numbers performs real arithmetic (10 + 20 = 30). Real Analyst Context: If sales numbers are loaded from CSV as text, adding them concatenates instead of summing—a classic 1-crore rupee analytics bug!'
      );
    } else {
      SoundEffects.playError();
      setChallengeFeedback(
        '🤔 Almost! Notice the quotes " ". In Python, quotes make anything a text string. When you use + on strings, it doesn\'t do math; it glues them: "10" + "20" becomes "1020". Try selecting the correct option!'
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-deep-space/60 backdrop-blur-md overflow-y-auto">
      <div className="max-w-4xl w-full bg-white border border-lab-900/10 rounded-3xl p-6 sm:p-8 text-left relative shadow-elevated space-y-6 max-h-[94vh] overflow-y-auto animate-fadeIn">
        
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-lab-900/10 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-lab-100 text-deep-space border border-lab-900/10 text-xs font-mono font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-quantum-teal" />
                WELCOME TO 2050 • PYTHON MASTERY HUB
              </span>
              <span className="px-2 py-0.5 rounded-full bg-quantum-teal/10 text-quantum-teal border border-quantum-teal/30 text-[10px] font-mono font-bold">
                DATA ANALYST EDITION
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-deep-space tracking-tight">
              Fast, Visual & Interview-Ready Python
            </h2>
            <p className="text-xs sm:text-sm text-lab-500 mt-1 max-w-xl">
              Zero boring 1990s textbook fluff. 30-second logic, Indian real-life metaphors, and instant Data Analyst interview clarity.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <div className="flex items-center bg-lab-100 p-0.5 rounded-full border border-lab-900/10 text-[10px] font-mono">
              {[
                { id: 'hinglish' as LanguageMode, label: 'Hinglish' },
                { id: 'hindi' as LanguageMode, label: 'हिंदी' },
                { id: 'en' as LanguageMode, label: 'English' },
              ].map((l) => (
                <button
                  key={l.id}
                  onClick={() => setLang(l.id)}
                  className={`px-2 py-0.5 rounded-full transition-all ${
                    lang === l.id ? 'bg-deep-space text-white font-semibold' : 'text-lab-500 hover:text-deep-space'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <button
              onClick={onClose}
              aria-label="Close Mastery Hub"
              className="p-2 rounded-full text-lab-400 hover:text-deep-space hover:bg-lab-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-lab-100 rounded-2xl border border-lab-900/5 text-xs font-mono overflow-x-auto">
          {[
            { id: 'intro' as const, label: '🚀 1. Python Intro (30s Logic)' },
            { id: 'datatypes' as const, label: '📦 2. Data Types Matrix' },
            { id: 'interview' as const, label: '🎙️ 3. 20s Interview Flashcards' },
            { id: 'challenge' as const, label: '🧠 4. Brain-Teaser Lab' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                SoundEffects.playDiscovery();
              }}
              className={`px-3.5 py-2 rounded-xl transition-all font-semibold whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-deep-space text-future-white shadow-subtle'
                  : 'text-lab-500 hover:text-deep-space'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: PYTHON INTRO (30-SECOND MICRO LESSONS) */}
        {activeTab === 'intro' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="p-3.5 rounded-2xl bg-quantum-teal/10 border border-quantum-teal/20 text-xs text-deep-space flex items-center justify-between">
              <div>
                <strong>The 2050 Principle:</strong> Python is just exact instructions in plain English. No memorization needed.
              </div>
              <button
                onClick={() => handleSpeak("Python lets us give exact step-by-step instructions to any computer.")}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-deep-space text-white text-[11px] font-mono shrink-0 ml-3"
              >
                <Volume2 className="w-3 h-3 text-quantum-teal" />
                <span>Listen</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* Card 1: What is Python */}
              <div className="p-4 rounded-2xl bg-lab-50 border border-lab-900/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-quantum-teal uppercase">1. What is Python?</span>
                  <button 
                    onClick={() => handleSpeak("Python is an interpreted high level language. It reads code line by line.")}
                    className="text-lab-400 hover:text-quantum-teal"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs text-deep-space leading-relaxed">
                  <strong>30s Logic:</strong> High-level, interpreted language. Reads code line-by-line like reading a book.
                </p>
                <p className="text-[11px] text-lab-500">
                  <strong>🇮🇳 Real Life:</strong> Jaise kisi dost ko exact steps bolte ho: "Table par jao, book uthao".
                </p>
                <div className="p-2 rounded-xl bg-white border border-lab-200 text-[11px] font-mono text-emerald-700">
                  print("Hello Data World")
                </div>
              </div>

              {/* Card 2: Indentation */}
              <div className="p-4 rounded-2xl bg-lab-50 border border-lab-900/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-quantum-teal uppercase">2. Indentation (4 Spaces)</span>
                  <button 
                    onClick={() => handleSpeak("Python uses four spaces for code blocks instead of curly brackets.")}
                    className="text-lab-400 hover:text-quantum-teal"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs text-deep-space leading-relaxed">
                  <strong>30s Logic:</strong> No curly braces or semicolons. 4 spaces inside a colon (:) tell Python what belongs together.
                </p>
                <p className="text-[11px] text-lab-500">
                  <strong>🎯 Interview Trap:</strong> Mixing tabs and spaces throws an <code>IndentationError</code>.
                </p>
                <div className="p-2 rounded-xl bg-white border border-lab-200 text-[11px] font-mono text-emerald-700">
                  if sales &gt; 1000:<br />&nbsp;&nbsp;&nbsp;&nbsp;print("Target Achieved")
                </div>
              </div>

              {/* Card 3: Comments */}
              <div className="p-4 rounded-2xl bg-lab-50 border border-lab-900/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-quantum-teal uppercase">3. Comments (#)</span>
                  <button 
                    onClick={() => handleSpeak("Comments start with hash. Python interpreter skips them completely.")}
                    className="text-lab-400 hover:text-quantum-teal"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs text-deep-space leading-relaxed">
                  <strong>30s Logic:</strong> Code notes Python ignores. Starts with `#`.
                </p>
                <p className="text-[11px] text-lab-500">
                  <strong>📊 Analyst Use:</strong> Explaining WHY you dropped outliers or filtered age &lt; 18.
                </p>
                <div className="p-2 rounded-xl bg-white border border-lab-200 text-[11px] font-mono text-emerald-700">
                  # 18% GST calculation<br />net = gross * 0.82
                </div>
              </div>

              {/* Card 4: print() & f-strings */}
              <div className="p-4 rounded-2xl bg-lab-50 border border-lab-900/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-quantum-teal uppercase">4. Output print() & f-string</span>
                  <button 
                    onClick={() => handleSpeak("print displays output on screen. f-strings let you embed variables cleanly.")}
                    className="text-lab-400 hover:text-quantum-teal"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs text-deep-space leading-relaxed">
                  <strong>30s Logic:</strong> Shows variables on screen. Use f-strings to embed values cleanly.
                </p>
                <p className="text-[11px] text-lab-500">
                  <strong>📊 Analyst Use:</strong> Printing sanity check logs while merging large CSV datasets.
                </p>
                <div className="p-2 rounded-xl bg-white border border-lab-200 text-[11px] font-mono text-emerald-700">
                  {'name = "Aarav"\nprint(f"Welcome {name}")'}
                </div>
              </div>

              {/* Card 5: input() Typecast */}
              <div className="p-4 rounded-2xl bg-lab-50 border border-lab-900/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-quantum-teal uppercase">5. input() Always = String</span>
                  <button 
                    onClick={() => handleSpeak("input always returns string. Wrap with int or float for numbers.")}
                    className="text-lab-400 hover:text-quantum-teal"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs text-deep-space leading-relaxed">
                  <strong>30s Logic:</strong> User input is ALWAYS text. Wrap with `int()` or `float()` to do math.
                </p>
                <p className="text-[11px] text-lab-500">
                  <strong>🎯 Interview Trap:</strong> `age = input()` gives `"20"`. `"20" + 1` throws a `TypeError`!
                </p>
                <div className="p-2 rounded-xl bg-white border border-lab-200 text-[11px] font-mono text-emerald-700">
                  salary = int(input("Enter salary: "))
                </div>
              </div>

              {/* Card 6: Variables */}
              <div className="p-4 rounded-2xl bg-lab-50 border border-lab-900/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-quantum-teal uppercase">6. Variables (Memory Box)</span>
                  <button 
                    onClick={() => handleSpeak("Variables are labelled storage containers in computer RAM.")}
                    className="text-lab-400 hover:text-quantum-teal"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs text-deep-space leading-relaxed">
                  <strong>30s Logic:</strong> Labelled memory storage box. Python automatically detects the type.
                </p>
                <p className="text-[11px] text-lab-500">
                  <strong>🇮🇳 Real Life:</strong> Kirana rack label = "Basmati Rice", box holds the current price ₹120.
                </p>
                <div className="p-2 rounded-xl bg-white border border-lab-200 text-[11px] font-mono text-emerald-700">
                  price = 120<br />price = price - 20 # Updated in RAM
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DATA TYPES MATRIX & LIVE INSPECTOR */}
        {activeTab === 'datatypes' && (
          <div className="space-y-5 animate-fadeIn">
            {/* Interactive Inspector Box */}
            <div className="p-5 rounded-3xl bg-deep-space text-future-white shadow-elevated space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-quantum-teal font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-4 h-4" />
                  2050 LIVE TYPE INSPECTOR
                </span>
                <span className="text-[10px] font-mono text-lab-400">
                  Test any value or data structure
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={inspectorInput}
                  onChange={(e) => setInspectorInput(e.target.value)}
                  placeholder='e.g. ["Laptop", "Mouse"], 96.72, {"city": "Patna"}, True'
                  className="flex-1 bg-lab-950 text-emerald-400 font-mono text-xs px-3.5 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-quantum-teal"
                />
                <button
                  onClick={handleInspectType}
                  className="px-5 py-2.5 rounded-xl bg-quantum-teal text-white hover:bg-quantum-teal/90 text-xs font-semibold font-mono flex items-center justify-center gap-1.5 transition-transform active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Inspect Type</span>
                </button>
              </div>

              {/* Inspector Result Card */}
              {inspectorResult && (
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 font-mono text-xs animate-fadeIn">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
                    <span className="text-quantum-teal font-bold text-sm">
                      {inspectorResult.type} ({inspectorResult.category})
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      inspectorResult.mutability.includes('Mutable') 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    }`}>
                      {inspectorResult.mutability}
                    </span>
                  </div>

                  <div className="text-lab-200">
                    <strong>🇮🇳 2050 Metaphor:</strong> {inspectorResult.metaphor}
                  </div>

                  <div className="text-lab-300 text-[11px]">
                    <strong>📊 Real Data Analyst / Pandas Use:</strong> {inspectorResult.analystUse}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Reference Grid of All Data Types */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: 'Integer (int)', example: '5', metaphor: 'Maggi Packets (Whole numbers)', mut: 'Immutable' },
                { name: 'Float (float)', example: '96.72', metaphor: 'Petrol Price (Decimals)', mut: 'Immutable' },
                { name: 'String (str)', example: '"Aarav"', metaphor: 'Text in Quotes (Aadhaar/Name)', mut: 'Immutable' },
                { name: 'Boolean (bool)', example: 'True', metaphor: 'UPI Payment Success / Fail', mut: 'Immutable' },
                { name: 'List (list)', example: '["Aalu", "Pyaz"]', metaphor: 'Kirana Shopping Bag (Changeable)', mut: 'Mutable' },
                { name: 'Tuple (tuple)', example: '(25.59, 85.13)', metaphor: 'GPS / DOB (Locked forever)', mut: 'Immutable' },
                { name: 'Dictionary (dict)', example: '{"name": "Aarav"}', metaphor: 'Phonebook (Key:Value lookup)', mut: 'Mutable' },
                { name: 'Set (set)', example: '{"Delhi", "Patna"}', metaphor: 'Duplicate Remover (Unique values)', mut: 'Mutable' },
                { name: 'None (NoneType)', example: 'None', metaphor: 'Empty Box (Missing data / NaN)', mut: 'Immutable' },
              ].map((dt) => (
                <div 
                  key={dt.name} 
                  onClick={() => {
                    setInspectorInput(dt.example);
                    SoundEffects.playDiscovery();
                  }}
                  className="p-3.5 rounded-2xl bg-lab-50 border border-lab-900/5 hover:border-quantum-teal/50 cursor-pointer transition-all space-y-1 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-deep-space group-hover:text-quantum-teal transition-colors">
                      {dt.name}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-lab-200 text-lab-600">
                      {dt.mut}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-emerald-700 font-semibold">
                    {dt.example}
                  </div>
                  <div className="text-[10px] text-lab-500">
                    {dt.metaphor}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: 20-SECOND INTERVIEW FLASHCARDS */}
        {activeTab === 'interview' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="p-3.5 rounded-2xl bg-solar-gold/15 border border-solar-gold/30 text-xs text-deep-space flex items-center justify-between">
              <div>
                <strong>Interview Prep Rule:</strong> Never answer with robotic definitions. Answer with <strong>Concept + Why + Real Data Example</strong>.
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: "1. What is the fundamental difference between a List and a Tuple in Python?",
                  answer: "Lists are mutable and defined with square brackets [], meaning elements can be added, updated, or removed in-place. Tuples are immutable and defined with round parentheses (), meaning they cannot be modified once created. In Data Analytics, lists are used for dynamic column names, while tuples protect fixed configuration settings and function coordinates.",
                  audioText: "Lists are mutable and defined with square brackets, while tuples are immutable and defined with round parentheses. Lists can be updated in-place, but tuples are write-protected."
                },
                {
                  q: "2. Why does input() always return a string and why does it matter in data analysis?",
                  answer: "The input() function reads raw keyboard characters from standard input as a string data type. If an analyst enters '50' and forgets to typecast using int() or float(), operations like '50' + 10 will throw a TypeError. In data analytics pipelines, automated typecasting ensures numerical calculations don't break.",
                  audioText: "input always returns a string. If we don't typecast numeric inputs using int or float, arithmetic operations will throw a TypeError."
                },
                {
                  q: "3. What is a Set and when do you use it over a List in Data Analytics?",
                  answer: "A set is an unordered collection of unique elements with zero duplicates. In data analytics, sets are ideal for extracting distinct customer IDs, dropping repeat logs, or computing mathematical set operations like common customers between two campaigns in O(1) constant time.",
                  audioText: "A set is an unordered collection that automatically eliminates duplicate elements. We use sets to extract distinct IDs and perform fast unions and intersections."
                },
                {
                  q: "4. What is the difference between None in Python and NaN in Pandas?",
                  answer: "None is Python's native single singleton object representing an empty reference or absent value (of type NoneType). NaN (Not a Number) is a floating-point numeric standard used in NumPy and Pandas. When Pandas encounters None in numeric columns, it automatically converts it to float NaN for fast vectorized arithmetic.",
                  audioText: "None is Python's built-in empty object. NaN is a numeric floating-point standard used by Pandas to handle missing data without crashing calculations."
                },
                {
                  q: "5. What happens when you do '10' + '20' versus 10 + 20?",
                  answer: "In Python, the plus operator is polymorphic. When applied to strings, it performs string concatenation, gluing '10' and '20' into '1020'. When applied to integers, it performs mathematical addition, yielding 30. In data cleaning, failing to convert string columns to numeric leads to silent concatenation bugs in total revenue reporting.",
                  audioText: "Adding strings performs concatenation, giving 1020. Adding numbers performs mathematical addition, giving 30. In data cleaning, failing to typecast leads to huge reporting errors."
                }
              ].map((card, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-lab-50 border border-lab-900/5 space-y-2 text-left">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-xs font-bold text-deep-space font-mono">
                      {card.q}
                    </h4>
                    <button
                      onClick={() => handleSpeak(card.audioText)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-deep-space text-future-white text-[10px] font-mono shrink-0 hover:bg-deep-space/90"
                      title="Speak interview answer"
                    >
                      <Volume2 className="w-3 h-3 text-quantum-teal" />
                      <span>Speak (20s)</span>
                    </button>
                  </div>
                  <p className="text-xs text-lab-600 leading-relaxed font-sans">
                    {card.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: BRAIN-TEASER LAB */}
        {activeTab === 'challenge' && (
          <div className="space-y-5 animate-fadeIn">
            <div className="p-5 rounded-3xl bg-white border border-lab-900/10 shadow-subtle space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-quantum-teal font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Brain className="w-4 h-4" />
                  COGNITIVE BRAIN-TEASER #01
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-lab-100 text-deep-space">
                  Data Analyst Trap
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-deep-space text-emerald-400 font-mono text-xs leading-relaxed">
                x = "10" + "20"<br />
                y = 10 + 20<br />
                print("x:", x)<br />
                print("y:", y)
              </div>

              <p className="text-xs text-deep-space font-medium">
                Without running the code, predict what will appear on the screen:
              </p>

              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                {[
                  'x: 30, y: 30',
                  'x: 1020, y: 30',
                  'x: Error, y: 30',
                  'x: 1020, y: 1020',
                ].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleChallengeSelect(opt)}
                    className={`p-3 rounded-xl border text-left font-bold transition-all ${
                      selectedChallengeAnswer === opt
                        ? opt === 'x: 1020, y: 30'
                          ? 'bg-emerald-500 text-white border-emerald-500 shadow-subtle'
                          : 'bg-signal-coral text-white border-signal-coral'
                        : 'bg-lab-50 text-deep-space border-lab-200 hover:border-quantum-teal'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {challengeFeedback && (
                <div className={`p-4 rounded-2xl text-xs font-medium leading-relaxed animate-fadeIn ${
                  selectedChallengeAnswer === 'x: 1020, y: 30'
                    ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                    : 'bg-signal-coral/10 text-signal-coral border border-signal-coral/20'
                }`}>
                  {challengeFeedback}
                </div>
              )}
            </div>

            {/* Live Interactive Sandbox for this challenge */}
            <div className="p-5 rounded-3xl bg-lab-50 border border-lab-900/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-deep-space flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-quantum-teal" />
                  Live Code Sandbox (Verify Yourself)
                </span>
                <button
                  onClick={() => handleRunSandbox(activeCodeSnippet)}
                  className="px-4 py-1.5 rounded-lg bg-deep-space text-future-white hover:bg-deep-space/90 text-xs font-mono font-semibold flex items-center gap-1 shadow-subtle transition-all active:scale-95"
                >
                  <Play className="w-3 h-3 text-quantum-teal fill-quantum-teal" />
                  <span>RUN CODE</span>
                </button>
              </div>

              <textarea
                value={activeCodeSnippet}
                onChange={(e) => setActiveCodeSnippet(e.target.value)}
                rows={4}
                className="w-full p-3 bg-white text-deep-space font-mono text-xs rounded-xl border border-lab-200 focus:outline-none focus:border-quantum-teal resize-none"
              />

              {sandboxOutput.length > 0 && (
                <div className="p-3 bg-deep-space text-emerald-400 font-mono text-xs rounded-xl space-y-0.5 animate-fadeIn">
                  <div className="text-[10px] text-lab-400 uppercase tracking-widest pb-1 border-b border-white/10">
                    Console Output:
                  </div>
                  {sandboxOutput.map((l, i) => (
                    <div key={i}>{l}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
