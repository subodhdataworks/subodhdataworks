import React, { useState } from 'react';
import {
  Copy,
  Check,
  CheckCircle2,
  Sparkles,
  Gamepad2,
  Terminal,
  HelpCircle,
} from 'lucide-react';
import { soundEffects } from '../../../services/soundEffects';

interface PythonTypeVisualLessonProps {
  onOpenCodingGame?: () => void;
}

export const PythonTypeVisualLesson: React.FC<PythonTypeVisualLessonProps> = ({
  onOpenCodingGame,
}) => {
  const [copiedCode, setCopiedCode] = useState(false);

  const pythonSnippet = `print(type(3))       # Integer (Number)
print(type(3.0))     # Float (Decimal)
print(type('3'))     # String (Text)
print(type(True))    # Boolean (True/False)
print(type(None))    # NoneType (Empty)`;

  const handleCopy = () => {
    soundEffects.playClick();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(pythonSnippet);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="space-y-6 text-slate-800 font-sans">
      {/* ── 1. HEADER BANNER: GENTLE PASTEL BANNER (Inspired by Ref Image 5) ── */}
      <div className="text-center space-y-2.5 pt-1 pb-2">
        {/* Soft Ribbon Style Header */}
        <div className="inline-flex items-center justify-center relative">
          <div className="px-8 py-2.5 rounded-2xl bg-gradient-to-r from-purple-100/90 via-purple-50 to-indigo-100/90 border border-purple-200/80 shadow-2xs">
            <h1 className="text-2xl sm:text-3xl font-black text-purple-950 tracking-tight font-mono">
              type( )
            </h1>
          </div>
        </div>

        <h2 className="text-sm sm:text-base font-bold text-purple-900">
          Python mein <code className="font-mono text-purple-700 bg-purple-100/70 px-1.5 py-0.5 rounded">type()</code> Function
        </h2>

        {/* Short, Simple Hinglish Definition */}
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-medium">
          Python mein <strong className="text-purple-900">type()</strong> function batata hai ki koi value <strong>kis data type (nature)</strong> ki hai. Bahar se do values ek jaisi lag sakti hain, lekin unka data type alag ho sakta hai!
        </p>
      </div>

      {/* ── 2. MAIN EDUCATIONAL ILLUSTRATION: Value → type() → Data Type ── */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-purple-100 shadow-2xs">
        <div className="text-center mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200/60">
            How type() works
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 items-center gap-2.5 max-w-lg mx-auto py-2">
          {/* Box 1: Input Value */}
          <div className="sm:col-span-1 p-3 rounded-xl bg-blue-50/80 border border-blue-200/70 text-center shadow-2xs">
            <span className="text-[10px] font-bold text-blue-600 block uppercase">Value</span>
            <code className="text-xs sm:text-sm font-black font-mono text-blue-900 block mt-0.5">"123"</code>
          </div>

          {/* Arrow 1 */}
          <div className="hidden sm:flex justify-center text-purple-400 font-black text-lg select-none">
            ➔
          </div>

          {/* Box 2: type() Scanner */}
          <div className="sm:col-span-1 p-3 rounded-xl bg-purple-50 border border-purple-200 text-center shadow-2xs">
            <span className="text-[10px] font-bold text-purple-600 block uppercase">Function</span>
            <code className="text-xs sm:text-sm font-black font-mono text-purple-900 block mt-0.5">type()</code>
          </div>

          {/* Arrow 2 */}
          <div className="hidden sm:flex justify-center text-purple-400 font-black text-lg select-none">
            ➔
          </div>

          {/* Box 3: Result Data Type */}
          <div className="sm:col-span-1 p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/70 text-center shadow-2xs">
            <span className="text-[10px] font-bold text-emerald-700 block uppercase">Data Type</span>
            <code className="text-xs sm:text-sm font-black font-mono text-emerald-900 block mt-0.5">&lt;class 'str'&gt;</code>
          </div>
        </div>
      </div>

      {/* ── 3. COMPARISON BOXES: EXACTLY LIKE REFERENCE IMAGE 5 ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Example 1: Strings vs Numbers */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-purple-200/80 shadow-2xs space-y-3">
          {/* Header pill */}
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-bold bg-purple-50 text-purple-800 border border-purple-200/60 flex items-center gap-1">
              <Check className="w-3 h-3 text-purple-600" />
              <span>Example 1: Strings vs Numbers</span>
            </span>
          </div>

          {/* Code comparison lines */}
          <div className="space-y-1.5 font-mono text-xs sm:text-[13px] bg-slate-50/70 p-3 rounded-xl border border-slate-200/60">
            <div className="flex items-center justify-between">
              <span className="text-purple-700 font-bold">type("123")</span>
              <span className="text-slate-500 font-sans text-xs"># → &lt;class 'str'&gt;</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-purple-700 font-bold">type(123)</span>
              <span className="text-slate-500 font-sans text-xs"># → &lt;class 'int'&gt;</span>
            </div>
          </div>

          {/* Badge */}
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Different types!</span>
          </div>

          {/* Simple Explanation */}
          <div className="space-y-1 text-xs text-slate-600 leading-relaxed font-medium pt-1 border-t border-slate-100">
            <p>
              • <code className="font-mono text-purple-700 bg-purple-50 px-1 rounded font-bold">"123"</code> quotes ke andar hai, isliye Python ise <strong>string (text)</strong> samajhta hai.
            </p>
            <p>
              • <code className="font-mono text-purple-700 bg-purple-50 px-1 rounded font-bold">123</code> bina quotes ke hai, isliye ye <strong>integer (number)</strong> hai.
            </p>
          </div>
        </div>

        {/* Example 2: Lists vs Tuples */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-purple-200/80 shadow-2xs space-y-3">
          {/* Header pill */}
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-bold bg-purple-50 text-purple-800 border border-purple-200/60 flex items-center gap-1">
              <Check className="w-3 h-3 text-purple-600" />
              <span>Example 2: Lists vs Tuples</span>
            </span>
          </div>

          {/* Code comparison lines */}
          <div className="space-y-1.5 font-mono text-xs sm:text-[13px] bg-slate-50/70 p-3 rounded-xl border border-slate-200/60">
            <div className="flex items-center justify-between">
              <span className="text-purple-700 font-bold">type([1, 2, 3])</span>
              <span className="text-slate-500 font-sans text-xs"># → &lt;class 'list'&gt;</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-purple-700 font-bold">type((1, 2, 3))</span>
              <span className="text-slate-500 font-sans text-xs"># → &lt;class 'tuple'&gt;</span>
            </div>
          </div>

          {/* Badge */}
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Different types!</span>
          </div>

          {/* Simple Explanation */}
          <div className="space-y-1 text-xs text-slate-600 leading-relaxed font-medium pt-1 border-t border-slate-100">
            <p>
              • <code className="font-mono text-purple-700 bg-purple-50 px-1 rounded font-bold">[ ... ]</code> Square brackets <strong>List</strong> banate hain (jise badal sakte hain).
            </p>
            <p>
              • <code className="font-mono text-purple-700 bg-purple-50 px-1 rounded font-bold">( ... )</code> Round brackets <strong>Tuple</strong> banate hain (jo locked/fix rehta hai).
            </p>
          </div>
        </div>
      </div>

      {/* ── 4. WHY type()? (Soft Lavender Card matching Reference Image 5) ── */}
      <div className="p-4 sm:p-5 rounded-2xl bg-purple-50/60 border border-purple-200/80 shadow-2xs space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="text-sm">💜</span>
          <h3 className="text-xs sm:text-sm font-bold text-purple-950">
            Why type( )?
          </h3>
        </div>

        <ul className="space-y-1.5 text-xs text-purple-900 font-medium">
          <li className="flex items-center gap-2">
            <span className="text-emerald-600 font-bold">✔</span>
            <span><strong>Confirms what kind of value you're working with:</strong> Pakka pata chal jata hai ki value number hai ya text.</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-emerald-600 font-bold">✔</span>
            <span><strong>Helps explain why two values act differently:</strong> Samajh aata hai ki do values alag result kyun de rahi hain.</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-emerald-600 font-bold">✔</span>
            <span><strong>Simple, fast, and super helpful:</strong> Likhna aasan hai aur beginner errors se bachata hai.</span>
          </li>
        </ul>
      </div>

      {/* ── 5. REMEMBER THIS / GOLDEN RULE BANNER ── */}
      <div className="rounded-2xl bg-amber-50/70 border border-amber-200/80 p-3 sm:p-4 flex items-center justify-center text-center gap-2 shadow-2xs">
        <span className="text-sm">📌</span>
        <p className="text-xs sm:text-[13px] text-amber-950 font-bold leading-relaxed">
          <strong>Golden Rule:</strong> Quotes <code className="font-mono bg-white/80 px-1.5 py-0.5 rounded text-amber-900">""</code> ke andar number bhi text (string) ban jata hai!
        </p>
      </div>

      {/* ── 6. COMPACT DARK PYTHON CODE BLOCK & EXPECTED OUTPUT ── */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-slate-700 px-1">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-purple-600" />
            <span>Python Code Example & Output</span>
          </div>
          <span className="text-[11px] text-slate-400 font-normal">Try running in console</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          {/* Left: Dark Python Code */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xs flex flex-col">
            <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60 uppercase">
                Python
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer transition"
                title="Copy Code"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-3.5 font-mono text-xs text-slate-200 leading-relaxed overflow-x-auto flex-1">
              <code>{pythonSnippet}</code>
            </pre>
          </div>

          {/* Right: Clean Expected Output */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xs flex flex-col">
            <div className="px-4 py-2 bg-slate-800/80 border-b border-slate-700/60 flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-sky-300 uppercase">
                Expected Output
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="p-3.5 font-mono text-xs text-sky-200/90 leading-relaxed space-y-1 flex-1">
              <div>&lt;class 'int'&gt;</div>
              <div>&lt;class 'float'&gt;</div>
              <div>&lt;class 'str'&gt;</div>
              <div>&lt;class 'bool'&gt;</div>
              <div>&lt;class 'NoneType'&gt;</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 7. BOTTOM SOFT CALL-TO-ACTION (Optional Coding Game) ── */}
      {onOpenCodingGame && (
        <div className="rounded-2xl bg-gradient-to-r from-purple-50 via-indigo-50/60 to-purple-50 border border-purple-200/80 p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
          <div className="text-center sm:text-left space-y-0.5">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">
              Concept samajh aa gaya? Ab practice karein!
            </h4>
            <p className="text-[11px] text-slate-600 font-medium">
              Coding Game me type() ke easy questions solve karein.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenCodingGame}
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs transition cursor-pointer shrink-0"
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Practice Game →</span>
          </button>
        </div>
      )}
    </div>
  );
};
