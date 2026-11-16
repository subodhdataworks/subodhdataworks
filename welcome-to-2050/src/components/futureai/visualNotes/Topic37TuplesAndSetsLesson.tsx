import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic37VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic37TuplesAndSetsLesson: React.FC<Topic37VisualLessonProps> = ({
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
  const secTupleIntroRef = useRef<HTMLDivElement>(null);
  const secTupleUnpackRef = useRef<HTMLDivElement>(null);
  const secSetIntroRef = useRef<HTMLDivElement>(null);
  const secSetOpsRef = useRef<HTMLDivElement>(null);
  const secComparisonMatrixRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec37-title': secTitleRef,
      'sec37-tuple-intro': secTupleIntroRef,
      'sec37-tuple-unpack': secTupleUnpackRef,
      'sec37-set-intro': secSetIntroRef,
      'sec37-set-ops': secSetOpsRef,
      'sec37-comparison-matrix': secComparisonMatrixRef,
      'sec37-takeaway': secTakeawayRef,
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
      className="topic37-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={6}
        moduleName="Python Collections & Strings"
        topicNum={5}
        totalTopicsInModule={8}
        englishTitle="Tuples and Sets"
        hindiTitle="Tuples and Sets"
        subtitleEnglish="Introduction to tuples and sets."
        subtitleHindi="Tuples () aur Sets {} ka introduction."
        emoji="🔒"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec37-title'}
        sectionRef={secTitleRef}
        sectionId="sec37-title"
      />

      {/* PART A: TUPLES */}
      <div ref={secTupleIntroRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'भाग A: Tuple क्या है? (Immutable Parentheses ())' : 'Part A: What Is a Tuple?'}</h3>
        </div>

        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'Tuple गोल कोष्ठक `()` में लिखी जाने वाली क्रमबद्ध कतार है। यह <strong>Immutable</strong> होती है, यानी बनने के बाद इसके किसी आइटम को बदला नहीं जा सकता।'
            : 'Tuples are ordered collections wrapped in `()`. They are strictly <strong>immutable</strong>—items cannot be reassigned once created.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <pre className="bg-slate-900 text-purple-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
{`coordinates = (25.6, 85.1)
print(coordinates[0]) # 25.6

# coordinates[0] = 30.0
# ❌ TypeError: does not support assignment!`}
          </pre>

          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 space-y-2 text-xs">
            <span className="font-bold text-amber-900 block">⚠️ 1-Item Tuple का नियम</span>
            <p className="text-slate-600">
              एक आइटम वाले टपल में कॉमा लगाना अनिवार्य है:<br />
              <code>n = (10,)</code> ➔ <strong>tuple</strong><br />
              <code>n = (10)</code> ➔ <strong>int</strong> (साधारण ब्रैकेट)
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Tuple Unpacking */}
      <div ref={secTupleUnpackRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            02
          </div>
          <h3>{isHi ? 'Tuple Unpacking (पैकेट खोलना)' : 'Tuple Unpacking'}</h3>
        </div>
        <pre className="bg-slate-900 text-emerald-300 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`student = ("Rahul", 21)

name, age = student

print(name) # Output: Rahul
print(age)  # Output: 21`}
        </pre>
      </div>

      {/* PART B: SETS */}
      <div ref={secSetIntroRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            03
          </div>
          <h3>{isHi ? 'भाग B: Set क्या है? (यूनिक Values का भंडार {})' : 'Part B: What Is a Set?'}</h3>
        </div>

        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'Set `{}` केवल <strong>यूनिक (अद्वितीय)</strong> तत्वों को रखता है। Duplicate Value अपने आप गायब हो जाते हैं! Set में कोई Index नहीं होता।'
            : 'A set `{}` contains strictly unique elements. Duplicates are auto-discarded! Sets are unordered and unindexed.'}
        </p>

        <div className="bg-slate-900 text-indigo-200 p-4 rounded-xl font-mono text-xs md:text-sm">
          <span className="text-slate-400"># Customer IDs with duplicates:</span><br />
          customer_ids = [101, 102, 101, 103, 102]<br />
          unique_ids = set(customer_ids)<br />
          <span className="text-emerald-400 font-bold">print(sorted(unique_ids)) # Output: [101, 102, 103] 🎯</span>
        </div>
      </div>

      {/* Section 4: Set Operations (Union, Intersection, etc) */}
      <div ref={secSetOpsRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <h4 className="font-bold text-sm text-purple-900 flex items-center gap-2">
          <span>⚡</span> {isHi ? '4 प्रमुख Set ऑपरेशन्स (Venn Diagram Math)' : '4 Core Set Mathematical Operations'}
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono">
          <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
            <span className="font-sans font-bold text-purple-900 block">Union (`|`)</span>
            <span className="text-purple-700 font-bold">a | b</span>
            <p className="font-sans text-[11px] text-slate-600 mt-1">दोनों के सारे यूनिक तत्व</p>
          </div>
          <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-200">
            <span className="font-sans font-bold text-indigo-900 block">Intersection (`&`)</span>
            <span className="text-indigo-700 font-bold">a & b</span>
            <p className="font-sans text-[11px] text-slate-600 mt-1">दोनों में कॉमन तत्व</p>
          </div>
          <div className="p-3 bg-rose-50 rounded-xl border border-rose-200">
            <span className="font-sans font-bold text-rose-900 block">Difference (`-`)</span>
            <span className="text-rose-700 font-bold">a - b</span>
            <p className="font-sans text-[11px] text-slate-600 mt-1">सिर्फ A में मौजूद तत्व</p>
          </div>
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
            <span className="font-sans font-bold text-amber-900 block">Symm Diff (`^`)</span>
            <span className="text-amber-700 font-bold">a ^ b</span>
            <p className="font-sans text-[11px] text-slate-600 mt-1">किसी एक में, पर दोनों में नहीं</p>
          </div>
        </div>
      </div>

      {/* Section 5: List vs Tuple vs Set Comparison Matrix */}
      <div ref={secComparisonMatrixRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <h4 className="font-bold text-sm text-purple-900 flex items-center gap-2">
          <span>📊</span> {isHi ? 'List बनाम Tuple बनाम Set तुलना' : 'List vs Tuple vs Set Matrix'}
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-purple-100 text-purple-900 font-bold">
                <th className="p-2.5">Feature</th>
                <th className="p-2.5">List `[]`</th>
                <th className="p-2.5">Tuple `()`</th>
                <th className="p-2.5 text-right">Set `{}`</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50 text-slate-700">
              <tr>
                <td className="p-2 font-bold">Ordered</td>
                <td className="p-2 text-emerald-600 font-bold">Yes</td>
                <td className="p-2 text-emerald-600 font-bold">Yes</td>
                <td className="p-2 text-right text-rose-500 font-bold">No</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">Mutable</td>
                <td className="p-2 text-emerald-600 font-bold">Yes</td>
                <td className="p-2 text-rose-500 font-bold">No</td>
                <td className="p-2 text-right text-emerald-600 font-bold">Yes</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">Duplicates</td>
                <td className="p-2 text-emerald-600 font-bold">Allowed</td>
                <td className="p-2 text-emerald-600 font-bold">Allowed</td>
                <td className="p-2 text-right text-rose-500 font-bold">No (Auto-removed)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">Indexing [0]</td>
                <td className="p-2 text-emerald-600 font-bold">Yes</td>
                <td className="p-2 text-emerald-600 font-bold">Yes</td>
                <td className="p-2 text-right text-rose-500 font-bold">No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 6: Key Takeaway */}
      <div ref={secTakeawayRef} className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg space-y-2 text-center">
        <h4 className="font-bold text-base md:text-lg text-amber-300">
          💡 {isHi ? 'मुख्य सीख (Key Takeaway)' : 'Key Takeaway'}
        </h4>
        <p className="text-xs md:text-sm text-purple-200 max-w-2xl mx-auto">
          {isHi
            ? 'फिक्स्ड और सुरक्षित रिकॉर्ड्स के लिए Tuples का इस्तेमाल करें। Duplicates हटाने और इंटरसेक्शन/यूनियन जैसे ऑपरेशन्स के लिए Sets का इस्तेमाल करें।'
            : 'Deploy Tuples for immutable integrity (coordinates, dimensions). Deploy Sets to eliminate redundancies and perform instant Venn set mathematics.'}
        </p>
      </div>
    </div>
  );
};
export default Topic37TuplesAndSetsLesson;
