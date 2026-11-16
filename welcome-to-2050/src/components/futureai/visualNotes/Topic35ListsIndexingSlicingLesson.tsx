import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic35VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic35ListsIndexingSlicingLesson: React.FC<Topic35VisualLessonProps> = ({
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
  const secAccessRef = useRef<HTMLDivElement>(null);
  const secMutableRef = useRef<HTMLDivElement>(null);
  const secSlicingRef = useRef<HTMLDivElement>(null);
  const secMembershipRef = useRef<HTMLDivElement>(null);
  const secMarksAnalyticsRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec35-title': secTitleRef,
      'sec35-concept': secConceptRef,
      'sec35-access': secAccessRef,
      'sec35-mutable': secMutableRef,
      'sec35-slicing': secSlicingRef,
      'sec35-membership': secMembershipRef,
      'sec35-marks-analytics': secMarksAnalyticsRef,
      'sec35-takeaway': secTakeawayRef,
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
      className="topic35-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={6}
        moduleName="Python Collections & Strings"
        topicNum={3}
        totalTopicsInModule={8}
        englishTitle="Lists, Indexing and Slicing"
        hindiTitle="Lists, Indexing and Slicing"
        subtitleEnglish="Introduction to ordered mutable lists."
        subtitleHindi="Lists ka introduction aur square brackets []."
        emoji="📋"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec35-title'}
        sectionRef={secTitleRef}
        sectionId="sec35-title"
      />

      {/* Section 1: What is a List? Visual Compartments */}
      <div ref={secConceptRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'List क्या है? (Square Brackets [])' : 'What Is a List? (Visual Compartments)'}</h3>
        </div>

        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'तीन अलग-अलग Variable बनाने के बजाय हम फलों को एक ही List में रख सकते हैं: `fruits = ["Apple", "Mango", "Banana"]`'
            : 'Instead of separate variables, combine multiple items inside square brackets: `fruits = ["Apple", "Mango", "Banana"]`'}
        </p>

        {/* Visual Box Diagram */}
        <div className="grid grid-cols-3 gap-2 text-center font-mono">
          <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
            <span className="text-[10px] text-purple-700 block font-bold">Index 0</span>
            <span className="text-sm md:text-base font-bold text-purple-900">"Apple"</span>
          </div>
          <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-200">
            <span className="text-[10px] text-indigo-700 block font-bold">Index 1</span>
            <span className="text-sm md:text-base font-bold text-indigo-900">"Mango"</span>
          </div>
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
            <span className="text-[10px] text-emerald-700 block font-bold">Index 2</span>
            <span className="text-sm md:text-base font-bold text-emerald-900">"Banana"</span>
          </div>
        </div>
      </div>

      {/* Section 2: Access & Mixed Types */}
      <div ref={secAccessRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            02
          </div>
          <h3>{isHi ? 'एक्सेस करना और मिक्स्ड Data Types' : 'Accessing Items & Mixed Data Types'}</h3>
        </div>
        <p className="text-xs md:text-sm text-slate-600">
          List में किसी भी प्रकार का Data (String, Int, Float, Bool) एक साथ रखा जा सकता है:
        </p>
        <pre className="bg-slate-900 text-purple-200 p-3 rounded-xl font-mono text-xs overflow-x-auto">
{`student = ["Rahul", 21, 85.5, True]

print(student[0])  # "Rahul" (String)
print(student[1])  # 21 (Integer)
print(student[-1]) # True (Boolean)`}
        </pre>
      </div>

      {/* Section 3: Lists Are Mutable */}
      <div ref={secMutableRef} className="bg-emerald-50/70 rounded-2xl p-6 border border-emerald-200 shadow-sm space-y-3">
        <h4 className="font-bold text-emerald-900 text-sm md:text-base flex items-center gap-2">
          <span>🔄</span> {isHi ? 'Lists Are Mutable (परिवर्तनीय)' : 'Lists Are Mutable (In-Place Modifications)'}
        </h4>
        <p className="text-xs md:text-sm text-slate-700">
          Strings के विपरीत, List के किसी भी आइटम को कभी भी सीधे बदला जा सकता है:
        </p>
        <div className="bg-slate-900 text-emerald-300 p-4 rounded-xl font-mono text-xs md:text-sm">
          <span className="text-slate-400"># Before: ['Apple', 'Mango', 'Banana']</span><br />
          fruits[1] = "Orange"<br />
          <span className="text-emerald-400 font-bold"># After: ['Apple', 'Orange', 'Banana'] ✅</span>
        </div>
      </div>

      {/* Section 4: Slicing and Membership */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div ref={secSlicingRef} className="bg-white p-5 rounded-2xl border border-purple-100 shadow-sm space-y-2">
          <h4 className="font-bold text-sm text-purple-900">✂️ List Slicing</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono text-xs">
{`numbers = [10, 20, 30, 40, 50]

print(numbers[1:4]) # [20, 30, 40]
print(numbers[::-1]) # Reverse list`}
          </pre>
          <p className="text-xs text-slate-500">Stop Index 4 शामिल नहीं होता।</p>
        </div>

        <div ref={secMembershipRef} className="bg-white p-5 rounded-2xl border border-purple-100 shadow-sm space-y-2">
          <h4 className="font-bold text-sm text-purple-900">🔍 Membership (`in` Operator)</h4>
          <pre className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono text-xs">
{`skills = ["Python", "SQL", "Excel"]

print("Python" in skills) # True
print("Java" in skills)   # False`}
          </pre>
          <p className="text-xs text-slate-500">चेक करता है कि तत्व List में मौजूद है या नहीं।</p>
        </div>
      </div>

      {/* Section 5: Real-Life Student Marks Case Study */}
      <div ref={secMarksAnalyticsRef} className="bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 rounded-2xl p-6 border border-purple-200 shadow-sm space-y-3">
        <h4 className="font-bold text-purple-900 text-sm md:text-base flex items-center gap-2">
          <span>🎓</span> {isHi ? 'Data Analyst केस: sum() और औसत निकालना' : 'Data Analytics: Total & Average using sum()'}
        </h4>
        <pre className="bg-slate-900 text-purple-200 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`marks = [80, 90, 70, 85]

total = sum(marks)
average = total / len(marks)

print("Total:", total)       # 325
print("Average:", average)   # 81.25`}
        </pre>
      </div>

      {/* Section 6: Key Takeaway */}
      <div ref={secTakeawayRef} className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg space-y-2 text-center">
        <h4 className="font-bold text-base md:text-lg text-amber-300">
          💡 {isHi ? 'मुख्य सीख (Key Takeaway)' : 'Key Takeaway'}
        </h4>
        <p className="text-xs md:text-sm text-purple-200 max-w-2xl mx-auto">
          {isHi
            ? 'Lists क्रमबद्ध (Ordered) और बदलने योग्य (Mutable) होती हैं। [0] से एक्सेस, [start:stop] से Slicing, और sum()/len() से Analytics मेट्रिक्स निकलते हैं।'
            : 'Lists store ordered, mutable items inside square brackets. Indexing starts at 0, slicing carves sub-lists, and sum()/len() yield rapid metrics.'}
        </p>
      </div>
    </div>
  );
};
export default Topic35ListsIndexingSlicingLesson;
