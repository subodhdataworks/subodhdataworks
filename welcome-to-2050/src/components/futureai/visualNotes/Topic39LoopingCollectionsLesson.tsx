import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic39VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic39LoopingCollectionsLesson: React.FC<Topic39VisualLessonProps> = ({
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
  const secTypesRef = useRef<HTMLDivElement>(null);
  const secEnumerateRef = useRef<HTMLDivElement>(null);
  const secPassedCounterRef = useRef<HTMLDivElement>(null);
  const secHighestSaleRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec39-title': secTitleRef,
      'sec39-concept': secConceptRef,
      'sec39-types': secTypesRef,
      'sec39-enumerate': secEnumerateRef,
      'sec39-passed-counter': secPassedCounterRef,
      'sec39-highest-sale': secHighestSaleRef,
      'sec39-takeaway': secTakeawayRef,
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
      className="topic39-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={6}
        moduleName="Python Collections & Strings"
        topicNum={7}
        totalTopicsInModule={8}
        englishTitle="Looping Through Collections"
        hindiTitle="Looping Through Collections"
        subtitleEnglish="Introduction to collection loops."
        subtitleHindi="Collections par loop chalane ka introduction."
        emoji="🔄"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec39-title'}
        sectionRef={secTitleRef}
        sectionId="sec39-title"
      />

      {/* Section 1: Concept */}
      <div ref={secConceptRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'कलेक्शन पर Loop क्यों चलाते हैं?' : 'Why Loop Through Collections?'}</h3>
        </div>
        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'रियल-वर्ल्ड Dataset में हजारों रिकॉर्ड्स होते हैं। Loops हर आइटम पर स्वचालित रूप से Calculation करने और Filter लगाने के लिए जरूरी हैं।'
            : 'Enterprise datasets contain thousands of records. Loops automate aggregation, condition filtering, and metric derivations.'}
        </p>
      </div>

      {/* Section 2: Iterating Across Types */}
      <div ref={secTypesRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
        <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm space-y-2">
          <span className="font-bold text-purple-900 font-sans block text-sm">1. Strings & Lists</span>
          <pre className="bg-slate-900 text-purple-200 p-2.5 rounded overflow-x-auto">
{`for char in "DATA":
    print(char) # D, A, T, A

for fruit in ["Apple", "Mango"]:
    print(fruit)`}
          </pre>
        </div>

        <div className="bg-white p-4 rounded-xl border border-indigo-100 shadow-sm space-y-2">
          <span className="font-bold text-indigo-900 font-sans block text-sm">2. Dictionaries (.items())</span>
          <pre className="bg-slate-900 text-indigo-200 p-2.5 rounded overflow-x-auto">
{`student = {"name": "Aman", "age": 20}

for key, value in student.items():
    print(key, "➔", value)`}
          </pre>
        </div>
      </div>

      {/* Section 3: enumerate() */}
      <div ref={secEnumerateRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            02
          </div>
          <h3>{isHi ? 'enumerate() — नंबर और आइटम एक साथ' : 'enumerate() — Index and Value Together'}</h3>
        </div>
        <p className="text-xs md:text-sm text-slate-600">
          काउंटर अलग से बनाने की जरूरत नहीं! <code>enumerate(skills, start=1)</code> अपने आप नंबर और आइटम दोनों साथ देता है:
        </p>
        <pre className="bg-slate-900 text-emerald-300 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`skills = ["Python", "SQL", "Excel"]

for number, skill in enumerate(skills, start=1):
    print(number, skill)

# Output:
# 1 Python
# 2 SQL
# 3 Excel`}
        </pre>
      </div>

      {/* Section 4: Real Life Case 1 — Count Passed Students */}
      <div ref={secPassedCounterRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <h4 className="font-bold text-purple-900 text-sm md:text-base flex items-center gap-2">
          <span>🎓</span> {isHi ? 'केस 1: पास हुए छात्रों की गिनती (Counter Pattern)' : 'Case 1: Count Passed Students'}
        </h4>
        <pre className="bg-slate-900 text-purple-200 p-3 rounded-xl font-mono text-xs overflow-x-auto">
{`marks = [35, 70, 85, 30, 60]
passed = 0

for mark in marks:
    if mark >= 40:
        passed += 1

print("Passed Students:", passed) # Output: 3`}
        </pre>

        {/* Trace Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-purple-100 text-purple-900 font-bold">
                <th className="p-2">Mark</th>
                <th className="p-2">Passed? (&gt;=40)</th>
                <th className="p-2 text-right">Running Count</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50 font-mono text-slate-700">
              <tr><td className="p-2">35</td><td className="p-2 text-rose-500 font-bold">No</td><td className="p-2 text-right">0</td></tr>
              <tr className="bg-emerald-50/50"><td className="p-2">70</td><td className="p-2 text-emerald-600 font-bold">Yes</td><td className="p-2 text-right font-bold">1</td></tr>
              <tr className="bg-emerald-50/50"><td className="p-2">85</td><td className="p-2 text-emerald-600 font-bold">Yes</td><td className="p-2 text-right font-bold">2</td></tr>
              <tr><td className="p-2">30</td><td className="p-2 text-rose-500 font-bold">No</td><td className="p-2 text-right">2</td></tr>
              <tr className="bg-emerald-50/50"><td className="p-2">60</td><td className="p-2 text-emerald-600 font-bold">Yes</td><td className="p-2 text-right font-bold text-purple-900">3 (Final) 🎯</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 5: Real Life Case 2 — Highest Sale Algorithm */}
      <div ref={secHighestSaleRef} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200 shadow-sm space-y-3">
        <h4 className="font-bold text-purple-900 text-sm md:text-base flex items-center gap-2">
          <span>🏆</span> {isHi ? 'केस 2: सबसे बड़ी बिक्री खोजना (Max Finder Algorithm)' : 'Case 2: Find Highest Sale'}
        </h4>
        <pre className="bg-slate-900 text-emerald-300 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`sales = [200, 500, 300, 800, 450]
highest = sales[0]

for amount in sales:
    if amount > highest:
        highest = amount

print("Highest Sale:", highest) # Output: 800`}
        </pre>
      </div>

      {/* Section 6: Key Takeaway */}
      <div ref={secTakeawayRef} className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg space-y-2 text-center">
        <h4 className="font-bold text-base md:text-lg text-amber-300">
          💡 {isHi ? 'मुख्य सीख (Key Takeaway)' : 'Key Takeaway'}
        </h4>
        <p className="text-xs md:text-sm text-purple-200 max-w-2xl mx-auto">
          {isHi
            ? 'कलेक्शन्स पर Loop चलाने से हम काउंटिंग, समिंग और मैक्सिमम खोजने जैसी एनालिटिकल समस्याएं हल करते हैं। enumerate() क्रम और Value दोनों एक साथ देता है।'
            : 'Iterating over collections powers counting, aggregations, and extreme-value algorithms. Use enumerate() for clean zero-overhead numbered outputs.'}
        </p>
      </div>
    </div>
  );
};
export default Topic39LoopingCollectionsLesson;
