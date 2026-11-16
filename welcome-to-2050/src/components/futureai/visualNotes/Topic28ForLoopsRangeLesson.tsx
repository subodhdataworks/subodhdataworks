import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic28VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic28ForLoopsRangeLesson: React.FC<Topic28VisualLessonProps> = ({
  activeSectionId,
  onSectionRectChange,
  onScrollSettled,
  language: externalLanguage = 'english',
  onLanguageChange,
}) => {
  const [currentLang, setCurrentLang] = useState<'hindi' | 'english'>(externalLanguage);

  useEffect(() => {
    if (externalLanguage && externalLanguage !== currentLang) {
      setCurrentLang(externalLanguage);
    }
  }, [externalLanguage]);

  const containerRef = useRef<HTMLDivElement>(null);
  const secTitleRef = useRef<HTMLDivElement>(null);
  const secConceptRef = useRef<HTMLDivElement>(null);
  const secRangeRef = useRef<HTMLDivElement>(null);
  const secTableRef = useRef<HTMLDivElement>(null);
  const secAccumulatorRef = useRef<HTMLDivElement>(null);
  const secStringLoopRef = useRef<HTMLDivElement>(null);
  const secMistakesRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec28-title': secTitleRef,
      'sec28-concept': secConceptRef,
      'sec28-range': secRangeRef,
      'sec28-table': secTableRef,
      'sec28-accumulator': secAccumulatorRef,
      'sec28-string-loop': secStringLoopRef,
      'sec28-mistakes': secMistakesRef,
      'sec28-takeaway': secTakeawayRef,
    };

    const targetEl = refMap[activeSectionId]?.current;
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const timer = setTimeout(() => {
        if (containerRef.current) {
          const cRect = containerRef.current.getBoundingClientRect();
          const tRect = targetEl.getBoundingClientRect();
          onSectionRectChange?.({
            top: tRect.top - cRect.top,
            left: tRect.left - cRect.left,
            width: tRect.width,
            height: tRect.height,
          });
        }
        onScrollSettled?.();
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [activeSectionId, onScrollSettled, onSectionRectChange]);

  const handleLanguageToggle = (lang: 'hindi' | 'english') => {
    setCurrentLang(lang);
    if (onLanguageChange) onLanguageChange(lang);
  };

    const isHi = currentLang === 'hindi';

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily: "'Comic Neue', 'Fredoka', 'Quicksand', 'Chalkboard SE', 'Comic Sans MS', cursive, sans-serif",
      }}
      className="topic28-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={5}
        moduleName="Conditions, Loops & Problem-Solving"
        topicNum={4}
        totalTopicsInModule={8}
        englishTitle="for Loops and range()"
        hindiTitle="for Loops and range()"
        subtitleEnglish="Introduction to for loops and range()."
        subtitleHindi="for loop aur range() ka introduction."
        emoji="🔁"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec28-title'}
        sectionRef={secTitleRef}
        sectionId="sec28-title"
      />

      {/* Section 1: Concept & Syntax */}
      <div ref={secConceptRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'for Loop क्या है? (Sequence Iteration)' : 'What Is a for Loop?'}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <p className="text-xs md:text-sm text-slate-600 mb-3">
              {isHi
                ? '`for` Loop किसी List या सीक्वेंस की एक-एक Value उठाकर Variable में डालता है और Loop बॉडी को चलाता है।'
                : 'A `for` loop picks each item from a sequence, stores it in the loop variable, and executes the body.'}
            </p>
            <pre className="bg-slate-900 text-emerald-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">
{`for number in [1, 2, 3, 4, 5]:
    print(number)

# Output:
# 1
# 2
# 3
# 4
# 5`}
            </pre>
          </div>

          <div className="bg-purple-50/70 p-4 rounded-xl border border-purple-200 text-center space-y-2">
            <span className="text-xs font-bold text-purple-900 uppercase tracking-wide block">
              {isHi ? 'विज़ुअल फ्लो (Step by Step)' : 'Visual Loop Execution'}
            </span>
            <div className="font-mono text-xs space-y-1">
              <div className="p-1.5 bg-white rounded border border-purple-200">List: [1, 2, 3, 4, 5]</div>
              <div>↓ Iteration 1 ➔ Print 1</div>
              <div>↓ Iteration 2 ➔ Print 2</div>
              <div>↓ Iteration 3 ➔ Print 3</div>
              <div>↓ Iteration 4 ➔ Print 4</div>
              <div className="p-1.5 bg-emerald-100 text-emerald-800 rounded font-bold">Iteration 5 ➔ Print 5 (END)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Three Forms of range() */}
      <div ref={secRangeRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            02
          </div>
          <h3>{isHi ? 'range() के 3 रूप (Three Forms of range)' : 'Three Forms of range()'}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 space-y-2">
            <div className="font-bold text-purple-900 font-mono">1. range(stop)</div>
            <code className="block bg-slate-900 text-amber-300 p-2 rounded font-mono">range(5)</code>
            <p className="text-slate-600">0 से शुरू होगा और 5 से पहले रुकेगा:</p>
            <div className="font-bold font-mono text-purple-700 bg-white p-2 rounded border border-purple-100">
              0, 1, 2, 3, 4
            </div>
          </div>

          <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-200 space-y-2">
            <div className="font-bold text-indigo-900 font-mono">2. range(start, stop)</div>
            <code className="block bg-slate-900 text-cyan-300 p-2 rounded font-mono">range(1, 6)</code>
            <p className="text-slate-600">1 से शुरू होकर 6 से पहले रुकेगा:</p>
            <div className="font-bold font-mono text-indigo-700 bg-white p-2 rounded border border-indigo-100">
              1, 2, 3, 4, 5
            </div>
          </div>

          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-2">
            <div className="font-bold text-emerald-900 font-mono">3. range(start, stop, step)</div>
            <code className="block bg-slate-900 text-emerald-300 p-2 rounded font-mono">range(2, 11, 2)</code>
            <p className="text-slate-600">2 का कदम (Step) लेकर छलाँग मारेगा:</p>
            <div className="font-bold font-mono text-emerald-700 bg-white p-2 rounded border border-emerald-100">
              2, 4, 6, 8, 10
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Multiplication Table */}
      <div ref={secTableRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            03
          </div>
          <h3>{isHi ? 'प्रैक्टिकल उदाहरण: पहाड़ा (Multiplication Table)' : 'Multiplication Table Example'}</h3>
        </div>
        <pre className="bg-slate-900 text-purple-200 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`number = 5

for i in range(1, 11):
    print(number, "x", i, "=", number * i)

# Output:
# 5 x 1 = 5
# 5 x 2 = 10
# ...
# 5 x 10 = 50`}
        </pre>
      </div>

      {/* Section 4: Total Sales Accumulator */}
      <div ref={secAccumulatorRef} className="bg-gradient-to-br from-purple-50 to-indigo-50/50 rounded-2xl p-6 border border-purple-200 shadow-sm space-y-4">
        <h4 className="font-bold text-purple-900 text-sm md:text-base flex items-center gap-2">
          <span>💰</span> {isHi ? 'Data Analyst पैटर्न: Accumulator (Total Sales)' : 'Data Analyst Pattern: Accumulator (Total Sales)'}
        </h4>
        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'Loop से पहले `total = 0` रखना अनिवार्य है। Loop के अंदर हर बार `total += amount` करके नया कुल निकाला जाता है।'
            : 'Initializing `total = 0` provides the baseline accumulator. Inside loop, each amount is summed sequentially.'}
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-purple-100 text-purple-900 font-bold">
                <th className="p-2">Iteration</th>
                <th className="p-2">amount</th>
                <th className="p-2">Previous total</th>
                <th className="p-2 text-right">New total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 font-mono text-slate-700">
              <tr><td className="p-2">1</td><td className="p-2">100</td><td className="p-2">0</td><td className="p-2 text-right font-bold">100</td></tr>
              <tr><td className="p-2">2</td><td className="p-2">200</td><td className="p-2">100</td><td className="p-2 text-right font-bold">300</td></tr>
              <tr><td className="p-2">3</td><td className="p-2">150</td><td className="p-2">300</td><td className="p-2 text-right font-bold">450</td></tr>
              <tr className="bg-emerald-50 text-emerald-900 font-bold"><td className="p-2">4</td><td className="p-2">250</td><td className="p-2">450</td><td className="p-2 text-right text-emerald-600">700 (Final) 🎯</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 5: String Loop & Mistakes */}
      <div ref={secStringLoopRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-purple-100 shadow-sm space-y-2">
          <h4 className="font-bold text-sm text-purple-900">🔤 String पर Loop चलाना</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono text-xs">
{`for letter in "DATA":
    print(letter)

# D
# A
# T
# A`}
          </pre>
          <p className="text-xs text-slate-500">String का एक-एक अक्षर अलग-अलग प्रिंट होता है।</p>
        </div>

        <div ref={secMistakesRef} className="bg-rose-50/70 p-5 rounded-2xl border border-rose-200 shadow-sm space-y-2">
          <h4 className="font-bold text-sm text-rose-900">⚠️ range(5) की आम गलती</h4>
          <p className="text-xs text-slate-700">
            याद रखें! `range(5)` में 5 शामिल <strong>नहीं</strong> होता। यह हमेशा 0, 1, 2, 3, 4 तक ही चलता है। 1 से 5 चाहिए तो `range(1, 6)` लिखें!
          </p>
        </div>
      </div>

      {/* Section 6: Key Takeaway */}
      <div ref={secTakeawayRef} className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg space-y-2 text-center">
        <h4 className="font-bold text-base md:text-lg text-amber-300">
          💡 {isHi ? 'मुख्य सीख (Key Takeaway)' : 'Key Takeaway'}
        </h4>
        <p className="text-xs md:text-sm text-purple-200 max-w-2xl mx-auto">
          {isHi
            ? 'for Loop किसी भी सीक्वेंस (List, रेंज, String) के हर आइटम पर Code दोहराता है। range(start, stop, step) ऑटोमैटिक नंबर बनाने का सबसे तेज़ तरीका है।'
            : 'The for loop traverses sequences (lists, ranges, strings) element by element. range(start, stop, step) generates sequences efficiently without manual counters.'}
        </p>
      </div>
    </div>
  );
};
export default Topic28ForLoopsRangeLesson;
