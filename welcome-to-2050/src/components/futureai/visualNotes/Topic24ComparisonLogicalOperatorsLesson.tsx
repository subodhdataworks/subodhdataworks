import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic24VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic24ComparisonLogicalOperatorsLesson: React.FC<Topic24VisualLessonProps> = ({
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
  const secComparisonRef = useRef<HTMLDivElement>(null);
  const secEqualVsAssignRef = useRef<HTMLDivElement>(null);
  const secLogicalRef = useRef<HTMLDivElement>(null);
  const secTruthTablesRef = useRef<HTMLDivElement>(null);
  const secNotOpRef = useRef<HTMLDivElement>(null);
  const secMistakesRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec24-title': secTitleRef,
      'sec24-comparison': secComparisonRef,
      'sec24-equal-vs-assign': secEqualVsAssignRef,
      'sec24-logical': secLogicalRef,
      'sec24-truth-tables': secTruthTablesRef,
      'sec24-not-op': secNotOpRef,
      'sec24-mistakes': secMistakesRef,
      'sec24-takeaway': secTakeawayRef,
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
      className="topic24-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={4}
        moduleName="Python Syntax & Core Basics"
        topicNum={8}
        totalTopicsInModule={8}
        englishTitle="Comparison and Logical Operators"
        hindiTitle="Comparison and Logical Operators"
        subtitleEnglish="Introduction to comparison and logical operators."
        subtitleHindi="Comparison aur Logical operators ka introduction."
        emoji="⚖️"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec24-title'}
        sectionRef={secTitleRef}
        sectionId="sec24-title"
      />

      {/* Section 1: Comparison Operators Table & Real Life Story */}
      <div ref={secComparisonRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'Comparison Operators क्या होते हैं?' : 'Understanding Comparison Operators'}</h3>
        </div>

        <p className="text-sm text-slate-600">
          {isHi
            ? 'कल्पना कीजिए दो छात्रों के मार्क्स: राहुल = 80, अमन = 65. क्या राहुल के मार्क्स अमन से ज्यादा हैं? Python में: rahul_marks > aman_marks ➔ True!'
            : 'Imagine two students: Rahul scored 80, Aman scored 65. Did Rahul score more? In Python: rahul_marks > aman_marks ➔ True!'}
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs md:text-sm text-left border-collapse">
            <thead>
              <tr className="bg-purple-50/80 text-purple-900 font-semibold border-b border-purple-200">
                <th className="py-2.5 px-3">Operator</th>
                <th className="py-2.5 px-3">Meaning</th>
                <th className="py-2.5 px-3">Example</th>
                <th className="py-2.5 px-3 text-right">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50">
              <tr className="hover:bg-purple-50/40">
                <td className="py-2 px-3 font-mono font-bold text-purple-700">==</td>
                <td className="py-2 px-3">{isHi ? 'बराबर है (Equal to)' : 'Equal to'}</td>
                <td className="py-2 px-3 font-mono">10 == 10</td>
                <td className="py-2 px-3 text-right font-mono font-bold text-emerald-600">True</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2 px-3 font-mono font-bold text-purple-700">!=</td>
                <td className="py-2 px-3">{isHi ? 'बराबर नहीं है (Not equal)' : 'Not equal to'}</td>
                <td className="py-2 px-3 font-mono">10 != 5</td>
                <td className="py-2 px-3 text-right font-mono font-bold text-emerald-600">True</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2 px-3 font-mono font-bold text-purple-700">&gt;</td>
                <td className="py-2 px-3">{isHi ? 'बड़ा है (Greater than)' : 'Greater than'}</td>
                <td className="py-2 px-3 font-mono">10 &gt; 5</td>
                <td className="py-2 px-3 text-right font-mono font-bold text-emerald-600">True</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2 px-3 font-mono font-bold text-purple-700">&lt;</td>
                <td className="py-2 px-3">{isHi ? 'छोटा है (Less than)' : 'Less than'}</td>
                <td className="py-2 px-3 font-mono">10 &lt; 5</td>
                <td className="py-2 px-3 text-right font-mono font-bold text-rose-500">False</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2 px-3 font-mono font-bold text-purple-700">&gt;=</td>
                <td className="py-2 px-3">{isHi ? 'बड़ा या बराबर (Greater or equal)' : 'Greater than or equal to'}</td>
                <td className="py-2 px-3 font-mono">10 &gt;= 10</td>
                <td className="py-2 px-3 text-right font-mono font-bold text-emerald-600">True</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2 px-3 font-mono font-bold text-purple-700">&lt;=</td>
                <td className="py-2 px-3">{isHi ? 'छोटा या बराबर (Less or equal)' : 'Less than or equal to'}</td>
                <td className="py-2 px-3 font-mono">5 &lt;= 10</td>
                <td className="py-2 px-3 text-right font-mono font-bold text-emerald-600">True</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 2: Equal (==) vs Assignment (=) */}
      <div ref={secEqualVsAssignRef} className="bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-2xl p-6 border border-amber-200 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-amber-900 font-bold text-lg border-b border-amber-200 pb-2">
          <div className="w-8 h-8 rounded-lg bg-amber-200 text-amber-800 flex items-center justify-center font-bold text-sm">
            ⚠️
          </div>
          <h3>{isHi ? 'सावधानी: = और == का अंतर' : 'Crucial: Difference between = and =='}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-sm">
            <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
              {isHi ? 'Single = (Assignment)' : 'Single = (Assignment)'}
            </div>
            <code className="block bg-slate-900 text-amber-300 font-mono text-sm px-3 py-2 rounded-lg">
              age = 18
            </code>
            <p className="text-xs text-slate-600 mt-2">
              {isHi
                ? 'यह Variable "age" में Value 18 स्टोर करता है। यह तुलना नहीं करता!'
                : 'Stores the value 18 inside variable "age". It puts value in memory!'}
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-sm">
            <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
              {isHi ? 'Double == (तुलना/Equality)' : 'Double == (Comparison)'}
            </div>
            <code className="block bg-slate-900 text-emerald-300 font-mono text-sm px-3 py-2 rounded-lg">
              age == 18 # ➔ True
            </code>
            <p className="text-xs text-slate-600 mt-2">
              {isHi
                ? 'यह चेक करता है कि क्या "age" की Value 18 के बराबर है। इसका Result True या False आता है।'
                : 'Checks if "age" equals 18. It answers a question with True or False!'}
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Logical Operators (AND, OR, NOT) */}
      <div ref={secLogicalRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-6">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            02
          </div>
          <h3>{isHi ? 'Logical Operators (and, or, not)' : 'Logical Operators (and, or, not)'}</h3>
        </div>

        {/* AND Operator Flow */}
        <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-purple-900 text-sm">
              1. AND Operator — {isHi ? 'दोनों शर्तें सही होनी चाहिए' : 'Both conditions must be True'}
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-200 text-purple-800 font-mono font-bold">and</span>
          </div>
          <p className="text-xs text-slate-600">
            {isHi
              ? 'परीक्षा देने के लिए: अटेंडेंस कम से कम 75% होनी चाहिए AND फीस भरी होनी चाहिए।'
              : 'Exam eligibility: Attendance must be at least 75% AND exam fees must be paid.'}
          </p>
          <pre className="bg-slate-900 text-purple-200 p-3 rounded-lg text-xs font-mono overflow-x-auto">
{`attendance = 85
fees_paid = True

eligible = attendance >= 75 and fees_paid
print(eligible) # Output: True`}
          </pre>
        </div>

        {/* OR Operator Flow */}
        <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-indigo-900 text-sm">
              2. OR Operator — {isHi ? 'कम से कम एक शर्त सही होनी चाहिए' : 'At least one condition must be True'}
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-200 text-indigo-800 font-mono font-bold">or</span>
          </div>
          <p className="text-xs text-slate-600">
            {isHi
              ? 'छूट (Discount) के लिए: ग्राहक छात्र हो OR सीनियर सिटीज़न हो, दोनों में से कोई एक भी सच हुआ तो छूट मिलेगी।'
              : 'Discount eligibility: Customer is a student OR senior citizen. Any one True qualifies.'}
          </p>
          <pre className="bg-slate-900 text-indigo-200 p-3 rounded-lg text-xs font-mono overflow-x-auto">
{`is_student = True
is_senior = False

discount = is_student or is_senior
print(discount) # Output: True`}
          </pre>
        </div>
      </div>

      {/* Section 4: Truth Tables */}
      <div ref={secTruthTablesRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* AND Table */}
        <div className="bg-white p-5 rounded-2xl border border-purple-100 shadow-sm space-y-3">
          <h4 className="font-bold text-sm text-purple-900 flex items-center gap-2">
            <span>📊</span> {isHi ? 'AND Truth Table' : 'AND Truth Table'}
          </h4>
          <table className="w-full text-xs text-left border-collapse font-mono">
            <thead>
              <tr className="bg-purple-100 text-purple-800">
                <th className="p-2">A</th>
                <th className="p-2">B</th>
                <th className="p-2 text-right">A and B</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50">
              <tr className="bg-emerald-50/50 font-bold text-emerald-800">
                <td className="p-2">True</td>
                <td className="p-2">True</td>
                <td className="p-2 text-right">True 🎯</td>
              </tr>
              <tr className="text-slate-600">
                <td className="p-2">True</td>
                <td className="p-2">False</td>
                <td className="p-2 text-right text-rose-600">False</td>
              </tr>
              <tr className="text-slate-600">
                <td className="p-2">False</td>
                <td className="p-2">True</td>
                <td className="p-2 text-right text-rose-600">False</td>
              </tr>
              <tr className="text-slate-600">
                <td className="p-2">False</td>
                <td className="p-2">False</td>
                <td className="p-2 text-right text-rose-600">False</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* OR Table */}
        <div className="bg-white p-5 rounded-2xl border border-indigo-100 shadow-sm space-y-3">
          <h4 className="font-bold text-sm text-indigo-900 flex items-center gap-2">
            <span>📊</span> {isHi ? 'OR Truth Table' : 'OR Truth Table'}
          </h4>
          <table className="w-full text-xs text-left border-collapse font-mono">
            <thead>
              <tr className="bg-indigo-100 text-indigo-800">
                <th className="p-2">A</th>
                <th className="p-2">B</th>
                <th className="p-2 text-right">A or B</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-indigo-50">
              <tr className="bg-emerald-50/50 text-emerald-800 font-bold">
                <td className="p-2">True</td>
                <td className="p-2">True</td>
                <td className="p-2 text-right">True 🎯</td>
              </tr>
              <tr className="bg-emerald-50/30 text-emerald-700">
                <td className="p-2">True</td>
                <td className="p-2">False</td>
                <td className="p-2 text-right font-bold">True 🎯</td>
              </tr>
              <tr className="bg-emerald-50/30 text-emerald-700">
                <td className="p-2">False</td>
                <td className="p-2">True</td>
                <td className="p-2 text-right font-bold">True 🎯</td>
              </tr>
              <tr className="text-slate-600">
                <td className="p-2">False</td>
                <td className="p-2">False</td>
                <td className="p-2 text-right text-rose-600 font-bold">False</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 5: NOT Operator */}
      <div ref={secNotOpRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            03
          </div>
          <h3>{isHi ? 'NOT Operator — उल्टा करने वाला (Inverter)' : 'NOT Operator — Inverting Boolean'}</h3>
        </div>
        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'not Operator किसी भी शर्त को उल्टा कर देता है। True को False और False को True बना देता है।'
            : 'The not operator inverts any condition. It turns True into False, and False into True.'}
        </p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs md:text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-slate-400"># Example:</span><br />
            <span className="text-purple-300">is_closed</span> = <span className="text-rose-400">False</span><br />
            <span className="text-emerald-400">print</span>(<span className="text-amber-400">not</span> is_closed)
          </div>
          <div className="px-4 py-2 bg-emerald-950/80 border border-emerald-500 rounded-lg text-emerald-300 font-bold">
            Output: True ✨
          </div>
        </div>
      </div>

      {/* Section 6: Common Mistakes */}
      <div ref={secMistakesRef} className="bg-rose-50/70 rounded-2xl p-6 border border-rose-200 shadow-sm space-y-4">
        <h4 className="font-bold text-rose-900 flex items-center gap-2">
          <span>❌</span> {isHi ? 'शुरुआती गलतियाँ जो न करें' : 'Common Beginner Traps'}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="bg-white p-3 rounded-xl border border-rose-100">
            <span className="font-bold text-rose-700">Mistake 1: = vs ==</span>
            <p className="text-slate-600 mt-1">
              `if age = 18:` गलत है! Condition चेक करने के लिए हमेशा `==` का इस्तेमाल करें।
            </p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-rose-100">
            <span className="font-bold text-rose-700">Mistake 2: AND vs and</span>
            <p className="text-slate-600 mt-1">
              Python केस-सेंसिटिव है। `AND` या `OR` लिखने पर NameError आएगा, हमेशा छोटे अक्षरों में `and`, `or`, `not` लिखें।
            </p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-rose-100">
            <span className="font-bold text-rose-700">Mistake 3: Range Check</span>
            <p className="text-slate-600 mt-1">
              `18 &lt;= age &lt;= 60` या `age &gt;= 18 and age &lt;= 60` लिखें। `or` लगाने से रेंज चेक फेल हो जाएगा।
            </p>
          </div>
        </div>
      </div>

      {/* Section 7: Key Takeaway Banner */}
      <div ref={secTakeawayRef} className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg space-y-2 text-center">
        <h4 className="font-bold text-base md:text-lg text-amber-300">
          💡 {isHi ? 'मुख्य सीख (Key Takeaway)' : 'Key Takeaway'}
        </h4>
        <p className="text-xs md:text-sm text-purple-200 max-w-2xl mx-auto">
          {isHi
            ? 'Comparison Operators हमेशा Boolean (True/False) Output देते हैं। Logical Operators (and, or, not) जटिल परिस्थितियों में सही निर्णय लेने के लिए Conditions को आपस में जोड़ते हैं।'
            : 'Comparison operators yield Boolean results (True/False). Logical operators (and, or, not) connect or invert multiple criteria to build smart real-world decisions.'}
        </p>
      </div>
    </div>
  );
};
export default Topic24ComparisonLogicalOperatorsLesson;
