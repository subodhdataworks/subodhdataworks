import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic19VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic19VariablesAndStorageLesson: React.FC<Topic19VisualLessonProps> = ({
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
  const secBoxesRef = useRef<HTMLDivElement>(null);
  const secEqualRef = useRef<HTMLDivElement>(null);
  const secDisplayRef = useRef<HTMLDivElement>(null);
  const secUpdateRef = useRef<HTMLDivElement>(null);
  const secRulesRef = useRef<HTMLDivElement>(null);
  const secSavingsRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec19-title': secTitleRef,
      'sec19-boxes': secBoxesRef,
      'sec19-equal': secEqualRef,
      'sec19-display': secDisplayRef,
      'sec19-update': secUpdateRef,
      'sec19-rules': secRulesRef,
      'sec19-savings': secSavingsRef,
      'sec19-takeaway': secTakeawayRef,
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
      className="topic19-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={4}
        moduleName="Python Syntax & Core Basics"
        topicNum={3}
        totalTopicsInModule={8}
        englishTitle="Variables and Storing Information"
        hindiTitle="Variables and Storing Information"
        subtitleEnglish="A variable is a labeled memory container holding values."
        subtitleHindi="Variable: Memory me labeled box jo value store karta hai."
        emoji="📦"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec19-title'}
        sectionRef={secTitleRef}
        sectionId="sec19-title"
      />

      {/* ── 2. LABELED BOXES ANALOGY ── */}
      <div
        ref={secBoxesRef}
        id="sec19-boxes"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec19-boxes'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-amber-100 text-amber-700 rounded-2xl text-xl">📦</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'लेबल लगे डिब्बों का उदाहरण (3 Labeled Boxes)' : 'Real-Life Analogy: 3 Labeled Boxes'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'सोचिए आपके पास 3 अलग-अलग डिब्बे हैं जिनपर नाम, उम्र और शहर लिखा है:'
                : 'Imagine 3 memory containers labeled Name, Age, and City:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-2xl bg-indigo-50 border-2 border-indigo-300 text-center shadow-2xs">
            <span className="px-2 py-0.5 bg-indigo-200 text-indigo-900 text-xs font-bold rounded-md">Label: name</span>
            <p className="font-mono font-black text-xl text-indigo-700 my-2">"Rahul"</p>
            <span className="text-[11px] text-indigo-800 font-sans">name = "Rahul"</span>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-center shadow-2xs">
            <span className="px-2 py-0.5 bg-emerald-200 text-emerald-900 text-xs font-bold rounded-md">Label: age</span>
            <p className="font-mono font-black text-xl text-emerald-700 my-2">20</p>
            <span className="text-[11px] text-emerald-800 font-sans">age = 20</span>
          </div>

          <div className="p-4 rounded-2xl bg-purple-50 border-2 border-purple-300 text-center shadow-2xs">
            <span className="px-2 py-0.5 bg-purple-200 text-purple-900 text-xs font-bold rounded-md">Label: city</span>
            <p className="font-mono font-black text-xl text-purple-700 my-2">"Patna"</p>
            <span className="text-[11px] text-purple-800 font-sans">city = "Patna"</span>
          </div>
        </div>
      </div>

      {/* ── 3. ASSIGNMENT OPERATOR (=) ── */}
      <div
        ref={secEqualRef}
        id="sec19-equal"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec19-equal'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-blue-100 text-blue-700 rounded-2xl text-xl">🟰</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? '= चिन्ह का सही अर्थ (Assignment Operator)' : 'Understanding the Assignment Operator (=)'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'Python में = का मतलब बराबरी जांचना नहीं, बल्कि दाईं तरफ का Value बाईं तरफ के Variable में डालना है!'
                : 'In Python, = assigns the value on the right into the container on the left:'}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-center shadow-inner">
          <div className="text-xl sm:text-2xl font-bold">
            <span className="text-indigo-400">age</span>
            <span className="text-slate-400 mx-3">=</span>
            <span className="text-amber-300">20</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4 text-xs font-sans text-left">
            <div className="p-2.5 rounded-xl bg-slate-800 text-slate-300">
              <span className="text-indigo-400 font-mono font-bold">age</span>
              <p className="mt-0.5">{isHindi ? 'Variable का नाम' : 'Variable Name'}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-800 text-slate-300">
              <span className="text-slate-300 font-mono font-bold">=</span>
              <p className="mt-0.5">{isHindi ? 'Assignment Operator' : 'Assignment Operator'}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-800 text-slate-300">
              <span className="text-amber-300 font-mono font-bold">20</span>
              <p className="mt-0.5">{isHindi ? 'स्टोर किया गया Value' : 'Stored Value'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. DISPLAYING VARIABLES: print(age) VS print("age") ── */}
      <div
        ref={secDisplayRef}
        id="sec19-display"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec19-display'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-rose-100 text-rose-700 rounded-2xl text-xl">⚠️</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'print(age) बनाम print("age")' : 'Crucial Difference: print(age) vs print("age")'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi ? 'कोटेशन लगाने और न लगाने का बहुत बड़ा अंतर:' : 'Never confuse a variable reference with a string literal:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300">
            <span className="font-sans font-bold text-emerald-900 uppercase">print(age) — No Quotes</span>
            <div className="mt-2 bg-slate-900 text-white p-3 rounded-xl">
              print(age)
            </div>
            <p className="font-sans text-xs text-emerald-950 font-bold mt-2">Output: 20</p>
            <p className="font-sans text-[11px] text-emerald-800 mt-0.5">
              {isHindi ? '👉 Variable के अंदर का Value (20) स्क्रीन पर दिखता है।' : '👉 Displays the actual value stored inside the variable.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300">
            <span className="font-sans font-bold text-amber-900 uppercase">print("age") — With Quotes</span>
            <div className="mt-2 bg-slate-900 text-white p-3 rounded-xl">
              print("age")
            </div>
            <p className="font-sans text-xs text-amber-950 font-bold mt-2">Output: age</p>
            <p className="font-sans text-[11px] text-amber-800 mt-0.5">
              {isHindi ? '👉 केवल "age" शब्द प्रिंट होता है, Variable नहीं।' : '👉 Prints the literal word "age", ignoring the variable entirely.'}
            </p>
          </div>
        </div>
      </div>

      {/* ── 5. UPDATING A VARIABLE ── */}
      <div
        ref={secUpdateRef}
        id="sec19-update"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec19-update'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-purple-100 text-purple-700 rounded-2xl text-xl">🔄</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'Variable का Value बदलना (Updating Values)' : 'Updating Stored Values'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'Variable का Value कभी भी बदला जा सकता है। नया Value पुराने Value की जगह ले लेता है:'
                : 'Variables can be updated dynamically. The latest assignment overwrites older values:'}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs sm:text-sm space-y-2 shadow-inner">
          <p className="text-slate-400"># Step 1: Initialize score</p>
          <p>score = <span className="text-amber-300">50</span></p>
          <p className="text-slate-400 pt-1"># Step 2: Update with new score</p>
          <p>score = <span className="text-amber-300">80</span></p>
          <p className="text-indigo-400 pt-1">print(score)</p>

          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between font-sans text-xs mt-3">
            <span className="text-slate-400">FINAL OUTPUT:</span>
            <span className="text-emerald-400 font-bold font-mono text-sm">80</span>
          </div>
        </div>
      </div>

      {/* ── 6. VARIABLE NAMING RULES ── */}
      <div
        ref={secRulesRef}
        id="sec19-rules"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec19-rules'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-emerald-100 text-emerald-700 rounded-2xl text-xl">📜</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'Variable नामकरण के नियम (Naming Rules)' : 'Python Variable Naming Rules'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi ? 'वैध (Valid) और अवैध (Invalid) नामों की List:' : 'Rules for creating valid Python identifiers:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300 space-y-1.5">
            <span className="font-sans font-bold text-emerald-950 text-xs">✅ Valid Names</span>
            <p className="text-emerald-800">student_name = "Aman"</p>
            <p className="text-emerald-800">student_age = 18</p>
            <p className="text-emerald-800">total_marks = 450</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-300 space-y-1.5">
            <span className="font-sans font-bold text-rose-950 text-xs">❌ Invalid Names</span>
            <p className="text-rose-800">2name = "Aman" <span className="font-sans text-[10px]">(starts with number)</span></p>
            <p className="text-rose-800">student age = 18 <span className="font-sans text-[10px]">(contains space)</span></p>
            <p className="text-rose-800">class = "10th" <span className="font-sans text-[10px]">(Python keyword)</span></p>
          </div>
        </div>
      </div>

      {/* ── 7. MONTHLY SAVINGS CASE STUDY ── */}
      <div
        ref={secSavingsRef}
        id="sec19-savings"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec19-savings'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-amber-100 text-amber-700 rounded-2xl text-xl">💰</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'केस स्टडी: मासिक बचत (Monthly Savings)' : 'Real-Life Case Study: Monthly Savings'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'आय (Income) और खर्च (Expenses) से बचत (Savings) Calculate करें:'
                : 'Calculate savings using descriptive variable names:'}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs sm:text-sm space-y-1.5 shadow-inner">
          <p>income = <span className="text-amber-300">15000</span></p>
          <p>expenses = <span className="text-amber-300">10000</span></p>
          <p className="pt-1 text-emerald-400">savings = income - expenses</p>
          <p className="pt-1 text-indigo-400">print(<span className="text-amber-300">"Monthly Savings:"</span>, savings)</p>

          <div className="mt-3 p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between font-sans text-xs">
            <span className="text-slate-400">OUTPUT:</span>
            <span className="text-emerald-400 font-bold font-mono text-sm">Monthly Savings: 5000</span>
          </div>
        </div>
      </div>

      {/* ── 8. KEY TAKEAWAY BANNER ── */}
      <div
        ref={secTakeawayRef}
        id="sec19-takeaway"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec19-takeaway'
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
                ? 'Variable किसी Value को एक नाम देता है। = से Value Assign होता है। Variables Program में Data को स्टोर करने और बार-बार उपयोग करने की रीढ़ की हड्डी हैं।'
                : 'A variable gives a name to a value. The = symbol assigns data into memory. Variables are the backbone of storing and updating information in software.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
