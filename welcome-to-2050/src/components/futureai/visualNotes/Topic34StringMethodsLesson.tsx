import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic34VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic34StringMethodsLesson: React.FC<Topic34VisualLessonProps> = ({
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
  const secCaseStripRef = useRef<HTMLDivElement>(null);
  const secReplaceSplitJoinRef = useRef<HTMLDivElement>(null);
  const secMethodsTableRef = useRef<HTMLDivElement>(null);
  const secCleanCustomersRef = useRef<HTMLDivElement>(null);
  const secNewStringTrapRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec34-title': secTitleRef,
      'sec34-concept': secConceptRef,
      'sec34-case-strip': secCaseStripRef,
      'sec34-replace-split-join': secReplaceSplitJoinRef,
      'sec34-methods-table': secMethodsTableRef,
      'sec34-clean-customers': secCleanCustomersRef,
      'sec34-new-string-trap': secNewStringTrapRef,
      'sec34-takeaway': secTakeawayRef,
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
      className="topic34-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={6}
        moduleName="Python Collections & Strings"
        topicNum={2}
        totalTopicsInModule={8}
        englishTitle="String Methods and Text Processing"
        hindiTitle="String Methods and Text Processing"
        subtitleEnglish="Introduction to string methods and cleaning."
        subtitleHindi="String methods aur text cleaning ka introduction."
        emoji="🧹"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec34-title'}
        sectionRef={secTitleRef}
        sectionId="sec34-title"
      />

      {/* Section 1: Messy Customer Names Analogy */}
      <div ref={secConceptRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'Data Cleaning की जरूरत क्यों है?' : 'Why Text Cleaning Matters in Analytics'}</h3>
        </div>
        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'एक ही Customer का नाम Dataset में अलग-अलग तरीकों से आ सकता है: `" rahul "`, `"RAHUL"`, `"Rahul"`. Computer के लिए ये 3 अलग लोग हैं! String methods इन्हें एक समान बनाते हैं।'
            : 'Datasets arrive messy: `" rahul "`, `"RAHUL"`, `"Rahul"`. Without standardization, computers treat them as 3 distinct entities!'}
        </p>
      </div>

      {/* Section 2: upper, lower, strip */}
      <div ref={secCaseStripRef} className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        <div className="bg-white p-4 rounded-xl border border-purple-200 shadow-sm space-y-2">
          <span className="font-bold text-purple-700 text-sm block">1. upper() & lower()</span>
          <code className="block bg-slate-900 text-purple-300 p-2 rounded font-mono">
            "Rahul".upper() ➔ "RAHUL"<br />
            "Rahul".lower() ➔ "rahul"
          </code>
          <p className="text-slate-600">केस एक समान करने के लिए।</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-purple-200 shadow-sm space-y-2">
          <span className="font-bold text-indigo-700 text-sm block">2. strip()</span>
          <code className="block bg-slate-900 text-indigo-300 p-2 rounded font-mono">
            "  Rahul  ".strip() ➔ "Rahul"
          </code>
          <p className="text-slate-600">आगे-पीछे के फालतू स्पेस हटाता है।</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-purple-200 shadow-sm space-y-2">
          <span className="font-bold text-emerald-700 text-sm block">3. replace()</span>
          <code className="block bg-slate-900 text-emerald-300 p-2 rounded font-mono">
            "I like Java".replace("Java", "Python")
          </code>
          <p className="text-slate-600">शब्दों को बदलकर नया शब्द डालता है।</p>
        </div>
      </div>

      {/* Section 3: split and join */}
      <div ref={secReplaceSplitJoinRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            02
          </div>
          <h3>{isHi ? 'split() और join() — String और List का पुल' : 'split() and join() — Bridge to Lists'}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 space-y-2">
            <span className="font-bold text-purple-900 text-xs uppercase block">split(",") — String से List बनाना</span>
            <pre className="bg-slate-900 text-purple-200 p-3 rounded-lg font-mono text-xs overflow-x-auto">
{`skills = "Python,SQL,Excel"
result = skills.split(",")
print(result)
# Output: ['Python', 'SQL', 'Excel']`}
            </pre>
          </div>

          <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-200 space-y-2">
            <span className="font-bold text-indigo-900 text-xs uppercase block">join() — List को जोड़कर String बनाना</span>
            <pre className="bg-slate-900 text-indigo-200 p-3 rounded-lg font-mono text-xs overflow-x-auto">
{`skills = ["Python", "SQL", "Excel"]
result = " | ".join(skills)
print(result)
# Output: Python | SQL | Excel`}
            </pre>
          </div>
        </div>
      </div>

      {/* Section 4: Other Useful Methods Table */}
      <div ref={secMethodsTableRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <h4 className="font-bold text-sm text-purple-900 flex items-center gap-2">
          <span>📋</span> {isHi ? 'अन्य जरूरी String Methods (Quick Reference)' : 'Other Essential String Methods'}
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-purple-100 text-purple-900 font-bold">
                <th className="p-2">Method</th>
                <th className="p-2">Purpose</th>
                <th className="p-2">Example</th>
                <th className="p-2 text-right">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50 font-mono text-slate-700">
              <tr><td className="p-2 text-purple-700 font-bold">title()</td><td className="p-2 font-sans">Capitalizes each word</td><td className="p-2">"data analyst".title()</td><td className="p-2 text-right font-bold">"Data Analyst"</td></tr>
              <tr><td className="p-2 text-purple-700 font-bold">capitalize()</td><td className="p-2 font-sans">Capitalizes first character</td><td className="p-2">"python".capitalize()</td><td className="p-2 text-right font-bold">"Python"</td></tr>
              <tr><td className="p-2 text-purple-700 font-bold">count()</td><td className="p-2 font-sans">Counts occurrences</td><td className="p-2">"banana".count("a")</td><td className="p-2 text-right font-bold text-indigo-600">3</td></tr>
              <tr><td className="p-2 text-purple-700 font-bold">startswith()</td><td className="p-2 font-sans">Checks beginning</td><td className="p-2">"Python".startswith("Py")</td><td className="p-2 text-right font-bold text-emerald-600">True</td></tr>
              <tr><td className="p-2 text-purple-700 font-bold">endswith()</td><td className="p-2 font-sans">Checks file extension</td><td className="p-2">"report.csv".endswith(".csv")</td><td className="p-2 text-right font-bold text-emerald-600">True</td></tr>
              <tr><td className="p-2 text-purple-700 font-bold">isdigit()</td><td className="p-2 font-sans">Checks all digits</td><td className="p-2">"123".isdigit()</td><td className="p-2 text-right font-bold text-emerald-600">True</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 5: Real Life Customer Name Cleaning */}
      <div ref={secCleanCustomersRef} className="bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 rounded-2xl p-6 border border-purple-200 shadow-sm space-y-3">
        <h4 className="font-bold text-purple-900 text-sm md:text-base flex items-center gap-2">
          <span>👥</span> {isHi ? 'रियल-लाइफ केस: Customer नामों को क्लीन करना' : 'Real-Life Case: Cleaning Customer Names Pipeline'}
        </h4>
        <pre className="bg-slate-900 text-purple-200 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`customer_names = ["  RAHUL ", "aman  ", "  PRIYA"]

for name in customer_names:
    clean_name = name.strip().title()
    print(clean_name)

# Output:
# Rahul
# Aman
# Priya`}
        </pre>
      </div>

      {/* Section 6: Important Return Value Trap */}
      <div ref={secNewStringTrapRef} className="bg-amber-50 rounded-2xl p-5 border border-amber-200 shadow-sm space-y-2">
        <h4 className="font-bold text-amber-900 text-sm flex items-center gap-2">
          <span>⚠️</span> {isHi ? 'सावधानी: String Methods नया String बनाते हैं!' : 'Crucial: Methods Return NEW Strings!'}
        </h4>
        <p className="text-xs text-slate-700">
          `name.upper()` लिखने से मूल `name` नहीं बदलता! परिणाम को सुरक्षित रखने के लिए री-Assign करें:
          <code className="mx-1 font-bold bg-white px-2 py-0.5 rounded border border-amber-300">name = name.upper()</code>
        </p>
      </div>

      {/* Section 7: Key Takeaway */}
      <div ref={secTakeawayRef} className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg space-y-2 text-center">
        <h4 className="font-bold text-base md:text-lg text-amber-300">
          💡 {isHi ? 'मुख्य सीख (Key Takeaway)' : 'Key Takeaway'}
        </h4>
        <p className="text-xs md:text-sm text-purple-200 max-w-2xl mx-auto">
          {isHi
            ? 'String methods टेक्स्ट क्लीनिंग और Data प्री-प्रोसेसिंग की रीढ़ हैं। .strip(), .title(), और .split() से किसी भी गंदे टेक्स्ट को सुव्यवस्थित किया जा सकता है।'
            : 'String methods form the foundation of text preprocessing in analytics. Combining .strip(), .title(), and .split() standardizes raw feeds instantly.'}
        </p>
      </div>
    </div>
  );
};
export default Topic34StringMethodsLesson;
