import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic20VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic20DataTypesAndTypeLesson: React.FC<Topic20VisualLessonProps> = ({
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
  const secFourTypesRef = useRef<HTMLDivElement>(null);
  const secBoxesRef = useRef<HTMLDivElement>(null);
  const secTypeFuncRef = useRef<HTMLDivElement>(null);
  const secSameLookRef = useRef<HTMLDivElement>(null);
  const secStudentInfoRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec20-title': secTitleRef,
      'sec20-four-types': secFourTypesRef,
      'sec20-boxes': secBoxesRef,
      'sec20-type-func': secTypeFuncRef,
      'sec20-same-look': secSameLookRef,
      'sec20-student-info': secStudentInfoRef,
      'sec20-takeaway': secTakeawayRef,
    };

    const targetEl = refMap[activeSectionId]?.current;
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

      const timer = setTimeout(() => {
        if (onScrollSettled) onScrollSettled();
        if (onSectionRectChange) {
          const rect = targetEl.getBoundingClientRect();
          onSectionRectChange({
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
            width: rect.width,
            height: rect.height,
          });
        }
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [activeSectionId, onScrollSettled, onSectionRectChange]);

  const handleLanguageToggle = (lang: 'hindi' | 'english') => {
    setCurrentLang(lang);
    if (onLanguageChange) onLanguageChange(lang);
  };

    const isHi = currentLang === 'hindi';
  const isHindi = currentLang === 'hindi';

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily: "'Comic Neue', 'Fredoka', 'Quicksand', 'Chalkboard SE', 'Comic Sans MS', cursive, sans-serif",
      }}
      className="topic20-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={4}
        moduleName="Python Syntax & Core Basics"
        topicNum={4}
        totalTopicsInModule={8}
        englishTitle="Python Data Types and type()"
        hindiTitle="Python Data Types and type()"
        subtitleEnglish="4 core data types: str, int, float, bool, and type()."
        subtitleHindi="4 Data Types: str, int, float, bool aur type() function."
        emoji="🏷️"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec20-title'}
        sectionRef={secTitleRef}
        sectionId="sec20-title"
      />

      {/* ── 2. THE 4 BASIC DATA TYPES ── */}
      <div
        ref={secFourTypesRef}
        id="sec20-four-types"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec20-four-types'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-indigo-100 text-indigo-700 rounded-2xl text-xl">🧱</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? '4 मूल Data Types (4 Core Data Types)' : 'The 4 Fundamental Data Types'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi ? 'प्रत्येक Data Type की खास पहचान:' : 'Understand the distinct properties of each type:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
          {/* String */}
          <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 flex flex-col justify-between shadow-2xs">
            <div>
              <span className="px-2 py-0.5 bg-amber-200 text-amber-950 rounded font-sans font-bold text-[10px] uppercase">A. String (str)</span>
              <p className="font-sans font-extrabold text-sm text-amber-950 mt-2">{isHindi ? 'टेक्स्ट (शब्द/वाक्य)' : 'Text String'}</p>
              <div className="mt-2 bg-white p-2 rounded-lg border border-amber-200 text-amber-900 font-bold">
                name = "Rahul"
              </div>
            </div>
            <p className="font-sans text-[11px] text-amber-800 mt-2">
              {isHindi ? 'कोटेशन ("...") के अंदर लिखा जाता है।' : 'Enclosed inside quotation marks.'}
            </p>
          </div>

          {/* Integer */}
          <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300 flex flex-col justify-between shadow-2xs">
            <div>
              <span className="px-2 py-0.5 bg-emerald-200 text-emerald-950 rounded font-sans font-bold text-[10px] uppercase">B. Integer (int)</span>
              <p className="font-sans font-extrabold text-sm text-emerald-950 mt-2">{isHindi ? 'पूर्ण संख्या (Whole)' : 'Integer (Whole)'}</p>
              <div className="mt-2 bg-white p-2 rounded-lg border border-emerald-200 text-emerald-900 font-bold">
                age = 20
              </div>
            </div>
            <p className="font-sans text-[11px] text-emerald-800 mt-2">
              {isHindi ? 'बिना दशमलव की संख्या (10, -5, 0)।' : 'Whole numbers without decimal points.'}
            </p>
          </div>

          {/* Float */}
          <div className="p-4 rounded-2xl bg-sky-50 border-2 border-sky-300 flex flex-col justify-between shadow-2xs">
            <div>
              <span className="px-2 py-0.5 bg-sky-200 text-sky-950 rounded font-sans font-bold text-[10px] uppercase">C. Float (float)</span>
              <p className="font-sans font-extrabold text-sm text-sky-950 mt-2">{isHindi ? 'दशमलव संख्या (Decimal)' : 'Float (Decimal)'}</p>
              <div className="mt-2 bg-white p-2 rounded-lg border border-sky-200 text-sky-900 font-bold">
                price = 99.50
              </div>
            </div>
            <p className="font-sans text-[11px] text-sky-800 mt-2">
              {isHindi ? 'दशमलव बिंदु वाली संख्या (3.5, 0.25)।' : 'Numbers containing decimal points.'}
            </p>
          </div>

          {/* Boolean */}
          <div className="p-4 rounded-2xl bg-purple-50 border-2 border-purple-300 flex flex-col justify-between shadow-2xs">
            <div>
              <span className="px-2 py-0.5 bg-purple-200 text-purple-950 rounded font-sans font-bold text-[10px] uppercase">D. Boolean (bool)</span>
              <p className="font-sans font-extrabold text-sm text-purple-950 mt-2">{isHindi ? 'सत्य या असत्य' : 'Boolean (Flag)'}</p>
              <div className="mt-2 bg-white p-2 rounded-lg border border-purple-200 text-purple-900 font-bold">
                is_student = True
              </div>
            </div>
            <p className="font-sans text-[11px] text-purple-800 mt-2">
              {isHindi ? 'केवल True या False (Capital T & F)।' : 'Either True or False (Case sensitive).'}
            </p>
          </div>
        </div>
      </div>

      {/* ── 3. WHAT IS type() FUNCTION? ── */}
      <div
        ref={secTypeFuncRef}
        id="sec20-type-func"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec20-type-func'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-purple-100 text-purple-700 rounded-2xl text-xl">🔬</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'type() Function से प्रकार जांचना' : 'Inspecting Types with type()'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'type() एक अंतर्निहित टूल है जो किसी भी Value की Data Type श्रेणी बताता है:'
                : 'The type() function reveals the internal Python class of any value:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs space-y-1.5 shadow-inner">
            <p><span className="text-indigo-400">print</span>(<span className="text-sky-400">type</span>(<span className="text-amber-300">"Rahul"</span>))</p>
            <p><span className="text-indigo-400">print</span>(<span className="text-sky-400">type</span>(<span className="text-amber-300">20</span>))</p>
            <p><span className="text-indigo-400">print</span>(<span className="text-sky-400">type</span>(<span className="text-amber-300">99.50</span>))</p>
            <p><span className="text-indigo-400">print</span>(<span className="text-sky-400">type</span>(<span className="text-amber-300">True</span>))</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-white font-mono text-xs space-y-1.5 flex flex-col justify-center shadow-inner">
            <p className="text-amber-300 font-bold">&lt;class 'str'&gt;</p>
            <p className="text-emerald-400 font-bold">&lt;class 'int'&gt;</p>
            <p className="text-sky-400 font-bold">&lt;class 'float'&gt;</p>
            <p className="text-purple-400 font-bold">&lt;class 'bool'&gt;</p>
          </div>
        </div>
      </div>

      {/* ── 4. SAME LOOKING VALUES DIFFERENCE ── */}
      <div
        ref={secSameLookRef}
        id="sec20-same-look"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec20-same-look'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-amber-100 text-amber-700 rounded-2xl text-xl">⚖️</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'दिखने में समान, पर Data Type अलग: "100" vs 100' : 'Identical Appearance, Different Types: "100" vs 100'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'यह अंतर Calculation करते समय सबसे महत्वपूर्ण हो जाता है:'
                : 'This difference is critical when performing arithmetic in programs:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300">
            <p className="text-amber-950 font-bold">a = "100"</p>
            <p className="text-slate-600 mt-1">type(a) ➔ &lt;class 'str'&gt;</p>
            <p className="font-sans text-[11px] text-amber-900 mt-2">
              {isHindi ? 'यह केवल अक्षर हैं, इसमें संख्याएं नहीं जोड़ी जा सकतीं।' : 'Text characters. Arithmetic addition is forbidden.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300">
            <p className="text-emerald-950 font-bold">b = 100</p>
            <p className="text-slate-600 mt-1">type(b) ➔ &lt;class 'int'&gt;</p>
            <p className="font-sans text-[11px] text-emerald-900 mt-2">
              {isHindi ? 'यह वास्तविक नंबर है, इसमें b + 50 = 150 किया जा सकता है।' : 'Real numeric quantity. b + 50 yields 150 effortlessly.'}
            </p>
          </div>
        </div>
      </div>

      {/* ── 5. STUDENT INFO COMPLETE TABLE ── */}
      <div
        ref={secStudentInfoRef}
        id="sec20-student-info"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec20-student-info'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-emerald-100 text-emerald-700 rounded-2xl text-xl">🎓</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'केस स्टडी: विद्यार्थी का रिकॉर्ड (Student Record)' : 'Real-Life Case Study: Student Information Record'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi ? 'चारों Data Types का एक साथ वास्तविक उदाहरण:' : 'Complete demonstration of all 4 types working together:'}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-purple-100 overflow-hidden shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-purple-100/70 text-purple-950 font-bold">
              <tr>
                <th className="py-2.5 px-4">{isHindi ? 'Variable (Variable)' : 'Variable'}</th>
                <th className="py-2.5 px-4">{isHindi ? 'स्टोर किया गया Value' : 'Stored Value'}</th>
                <th className="py-2.5 px-4 text-right">{isHindi ? 'Data Type' : 'Python Type'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50 font-mono">
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-slate-800">student_name</td>
                <td className="py-2.5 px-4 text-amber-700 font-bold">"Priya"</td>
                <td className="py-2.5 px-4 text-right text-indigo-700 font-bold">str</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-slate-800">student_age</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">21</td>
                <td className="py-2.5 px-4 text-right text-indigo-700 font-bold">int</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-slate-800">percentage</td>
                <td className="py-2.5 px-4 text-sky-700 font-bold">85.5</td>
                <td className="py-2.5 px-4 text-right text-indigo-700 font-bold">float</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-slate-800">fees_paid</td>
                <td className="py-2.5 px-4 text-purple-700 font-bold">True</td>
                <td className="py-2.5 px-4 text-right text-indigo-700 font-bold">bool</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── 6. KEY TAKEAWAY BANNER ── */}
      <div
        ref={secTakeawayRef}
        id="sec20-takeaway"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec20-takeaway'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 border border-purple-200 shadow-2xs'
        }`}
      >
        <div className="flex items-start gap-4">
          <span className="text-3xl p-2 bg-purple-200/80 rounded-2xl">🌟</span>
          <div>
            <h4 className="font-extrabold text-purple-950 text-base sm:text-lg">
              {isHindi ? 'मुख्य सार (Key Takeaway)' : 'Key Takeaway'}
            </h4>
            <p className="text-xs sm:text-sm text-purple-900 mt-1 leading-relaxed">
              {isHindi
                ? 'Python में 4 बुनियादी Data Types होते हैं: str (टेक्स्ट), int (पूर्ण संख्या), float (दशमलव संख्या), और bool (True/False)। type() Function से किसी भी Value का प्रकार जांचा जा सकता है।'
                : 'Python classifies values into 4 essential types: str (text), int (whole number), float (decimal), and bool (True/False). Inspect any data type anytime using type().'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
