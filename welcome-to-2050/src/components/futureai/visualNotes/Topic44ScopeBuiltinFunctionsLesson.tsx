import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic44VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic44ScopeBuiltinFunctionsLesson: React.FC<Topic44VisualLessonProps> = ({
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
  const secScopeIntroRef = useRef<HTMLDivElement>(null);
  const secLocalGlobalRef = useRef<HTMLDivElement>(null);
  const secGlobalKeywordRef = useRef<HTMLDivElement>(null);
  const secBuiltinTableRef = useRef<HTMLDivElement>(null);
  const secMarksAnalyticsRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec44-title': secTitleRef,
      'sec44-scope-intro': secScopeIntroRef,
      'sec44-local-global': secLocalGlobalRef,
      'sec44-global-keyword': secGlobalKeywordRef,
      'sec44-builtin-table': secBuiltinTableRef,
      'sec44-marks-analytics': secMarksAnalyticsRef,
      'sec44-takeaway': secTakeawayRef,
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
      className="topic44-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={7}
        moduleName="Functions, Modules & Files"
        topicNum={4}
        totalTopicsInModule={9}
        englishTitle="Variable Scope and Built-in Functions"
        hindiTitle="Variable Scope and Built-in Functions"
        subtitleEnglish="Scope & Built-in functions"
        subtitleHindi="Scope & Built-in functions"
        emoji="🌐"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec44-title'}
        sectionRef={secTitleRef}
        sectionId="sec44-title"
      />

      {/* PART A: SCOPE */}
      <div ref={secScopeIntroRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'भाग A: Scope क्या है? (Local vs Global)' : 'Part A: What Is Variable Scope?'}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 space-y-2">
            <span className="font-bold text-purple-900 text-xs block">Local Variable (स्थानीय Variable)</span>
            <p className="text-xs text-slate-600">
              Function के अंदर बना Variable सिर्फ उस Function के भीतर ही जाना जाता है। बाहर कॉल करने पर <strong>NameError</strong> आता है!
            </p>
          </div>

          <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-200 space-y-2">
            <span className="font-bold text-indigo-900 text-xs block">Global Variable (सार्वभौमिक Variable)</span>
            <p className="text-xs text-slate-600">
              Function के बाहर Module लेवल पर बना Variable पूरे Program में कहीं से भी पढ़ा जा सकता है।
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Same Name Shadowing */}
      <div ref={secLocalGlobalRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            02
          </div>
          <h3>{isHi ? 'एक ही नाम के Local और Global Variable' : 'Same Name Shadowing'}</h3>
        </div>
        <pre className="bg-slate-900 text-purple-200 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`value = 100 # Global variable

def display():
    value = 50 # Local variable created (does not alter global!)
    print("Inside:", value)

display()               # Inside: 50
print("Outside:", value) # Outside: 100 ✅ Safe & untouched!`}
        </pre>
      </div>

      {/* Section 3: global keyword vs Pure Functions */}
      <div ref={secGlobalKeywordRef} className="bg-amber-50 rounded-2xl p-5 border border-amber-200 shadow-sm space-y-2">
        <h4 className="font-bold text-amber-900 text-sm flex items-center gap-2">
          <span>💡</span> {isHi ? 'बेस्ट प्रैक्टिस: global Keyword से बचें' : 'Best Practice: Prefer Pure Return over global'}
        </h4>
        <p className="text-xs text-slate-700">
          <code>global count</code> का इस्तेमाल करने से बड़े Programs में बग्स ढूंढना मुश्किल हो जाता है। बेहतर यह है कि Function को Value Parameter से दें और नया Value <code>return</code> करवाएं:
          <code className="block mt-1 font-bold bg-white p-2 rounded border border-amber-300">
            count = increase_count(count)
          </code>
        </p>
      </div>

      {/* PART B: BUILT-IN FUNCTIONS */}
      <div ref={secBuiltinTableRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            03
          </div>
          <h3>{isHi ? 'भाग B: Built-in Analytics Functions' : 'Part B: Built-in Functions Reference'}</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-purple-100 text-purple-900 font-bold">
                <th className="p-2">Function</th>
                <th className="p-2">Purpose</th>
                <th className="p-2 text-right">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50 font-mono text-slate-700">
              <tr><td className="p-2 font-bold text-purple-700">sum(list)</td><td className="p-2 font-sans">Add numeric items</td><td className="p-2 text-right">sum([10, 20]) ➔ 30</td></tr>
              <tr><td className="p-2 font-bold text-purple-700">max(list)</td><td className="p-2 font-sans">Find maximum</td><td className="p-2 text-right">max([10, 50]) ➔ 50</td></tr>
              <tr><td className="p-2 font-bold text-purple-700">min(list)</td><td className="p-2 font-sans">Find minimum</td><td className="p-2 text-right">min([10, 50]) ➔ 10</td></tr>
              <tr><td className="p-2 font-bold text-purple-700">len(x)</td><td className="p-2 font-sans">Count items</td><td className="p-2 text-right">len("Data") ➔ 4</td></tr>
              <tr><td className="p-2 font-bold text-indigo-700">round(x, n)</td><td className="p-2 font-sans">Round decimals</td><td className="p-2 text-right">round(12.3456, 2) ➔ 12.35</td></tr>
              <tr><td className="p-2 font-bold text-indigo-700">sorted(list)</td><td className="p-2 font-sans">Return new sorted list</td><td className="p-2 text-right">sorted([3,1,2]) ➔ [1,2,3]</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 5: Real-Life Marks Analytics Case */}
      <div ref={secMarksAnalyticsRef} className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200 shadow-sm space-y-3">
        <h4 className="font-bold text-purple-900 text-sm md:text-base flex items-center gap-2">
          <span>🎓</span> {isHi ? 'Data केस: Built-in टूल्स से Result निकालना' : 'Data Case: Aggregations with Built-in Tools'}
        </h4>
        <pre className="bg-slate-900 text-emerald-300 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`marks = [75, 90, 60, 85]

total = sum(marks)
highest = max(marks)
lowest = min(marks)
average = total / len(marks)

print("Total:", total)      # 310
print("Highest:", highest)  # 90
print("Lowest:", lowest)    # 60
print("Average:", average)  # 77.5`}
        </pre>
      </div>

      {/* Section 6: Key Takeaway */}
      <div ref={secTakeawayRef} className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg space-y-2 text-center">
        <h4 className="font-bold text-base md:text-lg text-amber-300">
          💡 {isHi ? 'मुख्य सीख (Key Takeaway)' : 'Key Takeaway'}
        </h4>
        <p className="text-xs md:text-sm text-purple-200 max-w-2xl mx-auto">
          {isHi
            ? 'Scope नियंत्रित करता है कि Variable कहाँ उपलब्ध है। Built-in फंक्शन्स (sum, len, max, round) बिना किसी Library Import किए त्वरित Data Aggregation प्रदान करते हैं।'
            : 'Scope limits variable visibility and prevents side-effects. Built-in functions (sum, len, max, sorted) deliver instant data aggregation out-of-the-box.'}
        </p>
      </div>
    </div>
  );
};
export default Topic44ScopeBuiltinFunctionsLesson;
