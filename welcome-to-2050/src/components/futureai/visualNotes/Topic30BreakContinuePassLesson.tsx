import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic30VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic30BreakContinuePassLesson: React.FC<Topic30VisualLessonProps> = ({
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
  const secBreakRef = useRef<HTMLDivElement>(null);
  const secContinueRef = useRef<HTMLDivElement>(null);
  const secPassRef = useRef<HTMLDivElement>(null);
  const secTableRef = useRef<HTMLDivElement>(null);
  const secSearchRef = useRef<HTMLDivElement>(null);
  const secSkipSalesRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec30-title': secTitleRef,
      'sec30-break': secBreakRef,
      'sec30-continue': secContinueRef,
      'sec30-pass': secPassRef,
      'sec30-table': secTableRef,
      'sec30-search': secSearchRef,
      'sec30-skip-sales': secSkipSalesRef,
      'sec30-takeaway': secTakeawayRef,
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
      className="topic30-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={5}
        moduleName="Conditions, Loops & Problem-Solving"
        topicNum={6}
        totalTopicsInModule={8}
        englishTitle="break, continue and pass"
        hindiTitle="break, continue and pass"
        subtitleEnglish="Introduction to loop control statements."
        subtitleHindi="Loop control keywords ka introduction."
        emoji="🛑"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec30-title'}
        sectionRef={secTitleRef}
        sectionId="sec30-title"
      />

      {/* Section 1: Break, Continue, Pass Triad */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Break */}
        <div ref={secBreakRef} className="bg-white p-5 rounded-2xl border border-rose-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-sm text-rose-800">🛑 break</h4>
            <span className="text-xs px-2 py-0.5 rounded bg-rose-100 text-rose-700 font-bold">Loop रोको</span>
          </div>
          <p className="text-xs text-slate-600">
            {isHi ? 'Loop को तुरंत समाप्त करके बाहर फेंक देता है।' : 'Immediately terminates the nearest loop completely.'}
          </p>
          <pre className="bg-slate-900 text-rose-300 p-2.5 rounded font-mono text-xs">
{`for n in range(1, 6):
    if n == 3:
        break
    print(n)
# Output: 1, 2`}
          </pre>
        </div>

        {/* Continue */}
        <div ref={secContinueRef} className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-sm text-amber-800">⏭️ continue</h4>
            <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-bold">चक्कर छोड़ो</span>
          </div>
          <p className="text-xs text-slate-600">
            {isHi ? 'इस बार का काम छोड़कर अगले चक्कर पर कूद जाता है।' : 'Skips remainder of current step and jumps to next.'}
          </p>
          <pre className="bg-slate-900 text-amber-300 p-2.5 rounded font-mono text-xs">
{`for n in range(1, 6):
    if n == 3:
        continue
    print(n)
# Output: 1, 2, 4, 5`}
          </pre>
        </div>

        {/* Pass */}
        <div ref={secPassRef} className="bg-white p-5 rounded-2xl border border-indigo-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-sm text-indigo-800">💤 pass</h4>
            <span className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 font-bold">खाली जगह</span>
          </div>
          <p className="text-xs text-slate-600">
            {isHi ? 'कुछ नहीं करता! बस Syntax Error से बचाने वाला डमी है।' : 'Does absolutely nothing; syntax placeholder.'}
          </p>
          <pre className="bg-slate-900 text-indigo-300 p-2.5 rounded font-mono text-xs">
{`for n in range(1, 4):
    if n == 2:
        pass
    print(n)
# Output: 1, 2, 3`}
          </pre>
        </div>
      </div>

      {/* Section 2: Comparison Summary Table */}
      <div ref={secTableRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <h4 className="font-bold text-sm text-purple-900 flex items-center gap-2">
          <span>📊</span> {isHi ? 'तीनों का तुलनात्मक Chart (Quick Reference)' : 'Comparison Reference'}
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-purple-100 text-purple-900 font-bold">
                <th className="p-2.5">Keyword</th>
                <th className="p-2.5">What it does</th>
                <th className="p-2.5">Does Loop Stop?</th>
                <th className="p-2.5 text-right">Analogy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50 text-slate-700">
              <tr>
                <td className="p-2.5 font-mono font-bold text-rose-700">break</td>
                <td className="p-2.5">{isHi ? 'Loop तुरंत बंद कर देता है' : 'Stops loop immediately'}</td>
                <td className="p-2.5 font-bold text-rose-600">{isHi ? 'हाँ (स्थायी रूप से)' : 'Yes (Permanent)'}</td>
                <td className="p-2.5 text-right">{isHi ? 'इमरजेंसी ब्रेक लगाना' : 'Emergency brake'}</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-bold text-amber-700">continue</td>
                <td className="p-2.5">{isHi ? 'वर्तमान चक्कर छोड़कर आगे बढ़ता है' : 'Skips current iteration only'}</td>
                <td className="p-2.5 font-bold text-amber-600">{isHi ? 'नहीं (सिर्फ 1 स्टेप छूटा)' : 'No (1 step skipped)'}</td>
                <td className="p-2.5 text-right">{isHi ? 'गाना स्किप करना' : 'Skip a song'}</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-bold text-indigo-700">pass</td>
                <td className="p-2.5">{isHi ? 'कुछ नहीं करता' : 'Does nothing'}</td>
                <td className="p-2.5 font-bold text-emerald-600">{isHi ? 'नहीं (सामान्य चलता रहता है)' : 'No (Normal run)'}</td>
                <td className="p-2.5 text-right">{isHi ? 'खाली सीट पर रुमाल रखना' : 'Seat reservation'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 3: Real Life Product Search (break) */}
      <div ref={secSearchRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'रियल-लाइफ break: सामान मिलते ही खोज बंद करना' : 'Real-Life break: Early Search Exit'}</h3>
        </div>
        <pre className="bg-slate-900 text-purple-200 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`products = ["Pen", "Book", "Bag", "Bottle"]

for product in products:
    if product == "Bag":
        print("Product found!")
        break

# Bag मिलते ही Loop रुक गया, 'Bottle' को चेक करने का समय बर्बाद नहीं हुआ!`}
        </pre>
      </div>

      {/* Section 4: Real Life Skip Invalid Sales (continue) */}
      <div ref={secSkipSalesRef} className="bg-emerald-50/70 rounded-2xl p-6 border border-emerald-200 shadow-sm space-y-3">
        <h4 className="font-bold text-emerald-900 text-sm md:text-base flex items-center gap-2">
          <span>📈</span> {isHi ? 'Data Analyst केस: गलत (नेगेटिव) Cells को छोड़ना' : 'Data Analyst Case: Skip Negative Sales (continue)'}
        </h4>
        <pre className="bg-slate-900 text-emerald-300 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`sales = [100, -50, 200, 150]

total = 0

for amount in sales:
    if amount < 0:
        continue  # नेगेटिव Value को जोड़ना छोड़ो

    total += amount

print("Total Valid Sales:", total) # Output: 450`}
        </pre>
      </div>

      {/* Section 5: Key Takeaway */}
      <div ref={secTakeawayRef} className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg space-y-2 text-center">
        <h4 className="font-bold text-base md:text-lg text-amber-300">
          💡 {isHi ? 'मुख्य सीख (Key Takeaway)' : 'Key Takeaway'}
        </h4>
        <p className="text-xs md:text-sm text-purple-200 max-w-2xl mx-auto">
          {isHi
            ? 'break Loop को समाप्त करता है, continue वर्तमान चक्कर छोड़कर अगले पर जाता है, और pass कुछ नहीं करता। Data Cleaning और सर्चिंग में ये तीनों अत्यंत उपयोगी हैं।'
            : 'break terminates loops early, continue skips current iteration to advance to the next, and pass acts as a syntactic placeholder.'}
        </p>
      </div>
    </div>
  );
};
export default Topic30BreakContinuePassLesson;
