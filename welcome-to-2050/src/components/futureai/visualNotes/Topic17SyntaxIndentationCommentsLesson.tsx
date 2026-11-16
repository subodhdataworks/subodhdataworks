import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic17VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic17SyntaxIndentationCommentsLesson: React.FC<Topic17VisualLessonProps> = ({
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
  const secSyntaxRef = useRef<HTMLDivElement>(null);
  const secIndentationRef = useRef<HTMLDivElement>(null);
  const secCommentsRef = useRef<HTMLDivElement>(null);
  const secReadableRef = useRef<HTMLDivElement>(null);
  const secMistakesRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec17-title': secTitleRef,
      'sec17-syntax': secSyntaxRef,
      'sec17-indentation': secIndentationRef,
      'sec17-comments': secCommentsRef,
      'sec17-readable': secReadableRef,
      'sec17-mistakes': secMistakesRef,
      'sec17-takeaway': secTakeawayRef,
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
      className="topic17-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={4}
        moduleName="Python Syntax & Core Basics"
        topicNum={1}
        totalTopicsInModule={8}
        englishTitle="Python Syntax, Indentation and Comments"
        hindiTitle="Python Syntax, Indentation and Comments"
        subtitleEnglish="Syntax rules, Indentation blocks, and Comments."
        subtitleHindi="Syntax = Rules, Indentation = Grouping, Comments = Notes."
        emoji="📝"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec17-title'}
        sectionRef={secTitleRef}
        sectionId="sec17-title"
      />

      {/* ── 2. WHAT IS SYNTAX? (VISUAL ANATOMY) ── */}
      <div
        ref={secSyntaxRef}
        id="sec17-syntax"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec17-syntax'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-indigo-100 text-indigo-700 rounded-2xl text-xl">🔍</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'Syntax क्या है? (Visual Anatomy of Code)' : 'What Is Syntax? (Visual Anatomy of Code)'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'Syntax का मतलब Code लिखने के सख्त व्याकरण नियम:'
                : 'Syntax represents the grammar rules. Missing even one symbol stops execution:'}
            </p>
          </div>
        </div>

        {/* Visual Anatomy Card */}
        <div className="p-5 rounded-2xl bg-slate-900 text-white font-mono text-center shadow-inner">
          <div className="text-lg sm:text-2xl font-bold tracking-wider">
            <span className="text-indigo-400">print</span>
            <span className="text-slate-300">(</span>
            <span className="text-emerald-400">"</span>
            <span className="text-amber-300">Hello</span>
            <span className="text-emerald-400">"</span>
            <span className="text-slate-300">)</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 text-xs font-sans text-left">
            <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
              <span className="text-indigo-400 font-mono font-bold">print</span>
              <p className="text-slate-300 mt-0.5">{isHindi ? 'Function नाम' : 'Function Name'}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
              <span className="text-slate-300 font-mono font-bold">( )</span>
              <p className="text-slate-300 mt-0.5">{isHindi ? 'ब्रैकेट्स' : 'Parentheses'}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
              <span className="text-emerald-400 font-mono font-bold">" "</span>
              <p className="text-slate-300 mt-0.5">{isHindi ? 'कोटेशन मार्क्स' : 'Quotes'}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
              <span className="text-amber-300 font-mono font-bold">Hello</span>
              <p className="text-slate-300 mt-0.5">{isHindi ? 'टेक्स्ट (String)' : 'String Text'}</p>
            </div>
          </div>
        </div>

        {/* Correct vs Incorrect Comparison */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs font-mono">
          <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950">
            <span className="font-bold font-sans text-emerald-700 uppercase tracking-wider">✅ Correct Syntax</span>
            <p className="mt-1 font-bold">print("Hello")</p>
            <p className="font-sans text-[11px] text-emerald-800 mt-1">Output: Hello ✓</p>
          </div>
          <div className="p-3 rounded-2xl bg-rose-50 border border-rose-300 text-rose-950">
            <span className="font-bold font-sans text-rose-700 uppercase tracking-wider">❌ SyntaxError</span>
            <p className="mt-1 font-bold">print("Hello"</p>
            <p className="font-sans text-[11px] text-rose-800 mt-1">{isHindi ? 'ब्रैकेट बंद नहीं किया!' : 'Missing closing parenthesis )'}</p>
          </div>
        </div>
      </div>

      {/* ── 3. INDENTATION & TIMETABLE ANALOGY ── */}
      <div
        ref={secIndentationRef}
        id="sec17-indentation"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec17-indentation'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-amber-100 text-amber-700 rounded-2xl text-xl">📐</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'इंडेंटेशन क्या है? (School Timetable Analogy)' : 'What Is Indentation? (School Timetable Analogy)'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'इंडेंटेशन का अर्थ है लाइन की शुरुआत में खाली स्पेस छोड़ना। Python इससे Code ब्लॉक्स बनाता है:'
                : 'Indentation means leading spaces. Python uses spaces to identify which lines belong inside a block:'}
            </p>
          </div>
        </div>

        {/* Timetable visual box */}
        <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 text-xs sm:text-sm">
          <p className="font-bold text-purple-950">🏫 School Day Timetable:</p>
          <div className="ml-4 mt-2 space-y-1 text-slate-700">
            <p>• Morning Assembly</p>
            <p className="font-semibold text-purple-900">• Classroom Activities</p>
            <div className="ml-6 pl-3 border-l-2 border-purple-400 text-purple-800 space-y-0.5">
              <p>└─ Mathematics (Indented inside)</p>
              <p>└─ English (Indented inside)</p>
            </div>
            <p>• Lunch Break</p>
          </div>
        </div>

        {/* Python Code Example */}
        <div className="mt-4 p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs sm:text-sm">
          <p className="text-indigo-400">if <span className="text-amber-300">10 &gt; 5</span>:</p>
          <p className="text-emerald-400 pl-8 border-l-2 border-emerald-500 my-1">
            print(<span className="text-amber-300">"10 is greater"</span>)
          </p>
          <span className="text-slate-400 text-[11px] font-sans">
            👈 {isHindi ? 'यह 4 स्पेस (इंडेंट) बताते हैं कि print केवल तभी चलेगा जब 10 > 5 सही होगा।' : 'The 4 leading spaces tell Python this print statement belongs inside the if condition.'}
          </span>
        </div>
      </div>

      {/* ── 4. WHAT ARE COMMENTS? (#) ── */}
      <div
        ref={secCommentsRef}
        id="sec17-comments"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec17-comments'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-emerald-100 text-emerald-700 rounded-2xl text-xl">💬</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'कमेंट्स क्या होते हैं? (Comments with #)' : 'What Are Comments? (Using # Symbol)'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'कमेंट्स Code में लिखे गए नोट्स होते हैं, जिन्हें Python रन करते समय अनदेखा (Ignore) कर देता है:'
                : 'Comments are human explanatory notes. Python completely ignores them during execution:'}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs sm:text-sm shadow-inner">
          <p className="text-slate-500"># This program displays a warm morning greeting</p>
          <p className="text-white mt-1">
            <span className="text-indigo-400">print</span>(<span className="text-amber-300">"Good Morning"</span>)
          </p>
          <div className="mt-3 p-2 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between font-sans text-xs">
            <span className="text-slate-400">OUTPUT:</span>
            <span className="text-emerald-400 font-bold">Good Morning</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
            <span className="font-bold text-slate-900">💡 {isHindi ? 'Code समझाना' : 'Explain Logic'}</span>
            <p className="text-slate-600 text-[11px] mt-0.5">{isHindi ? 'जटिल लॉजिक का सरल विवरण।' : 'Clarify complex algorithms.'}</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
            <span className="font-bold text-slate-900">👥 {isHindi ? 'टीम वर्क' : 'Teamwork'}</span>
            <p className="text-slate-600 text-[11px] mt-0.5">{isHindi ? 'अन्य डेवलपर्स को Code समझ आता है।' : 'Helps other devs read your code.'}</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
            <span className="font-bold text-slate-900">🛠️ {isHindi ? 'मेंटेनेंस' : 'Easy Maintenance'}</span>
            <p className="text-slate-600 text-[11px] mt-0.5">{isHindi ? 'महीनों बाद भी Code याद रहता है।' : 'Revisit code months later easily.'}</p>
          </div>
        </div>
      </div>

      {/* ── 5. READABLE CODE COMPARISON ── */}
      <div
        ref={secReadableRef}
        id="sec17-readable"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec17-readable'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-purple-100 text-purple-700 rounded-2xl text-xl">📖</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'साफ और पठनीय Code (Readable Code Practices)' : 'Writing Clean & Readable Code'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'अच्छा Code वह है जिसे कोई भी इंसान आसानी से समझ सके:'
                : 'Good code is written for humans to read, not just machines to run:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
            <span className="font-sans font-bold text-rose-900 text-xs uppercase">❌ Less Readable (Unclear)</span>
            <div className="mt-2 text-slate-800 space-y-1">
              <p>a=10</p>
              <p>b=20</p>
              <p>print(a+b)</p>
            </div>
            <p className="font-sans text-[11px] text-rose-800 mt-2">{isHindi ? 'a और b का क्या मतलब है, पता नहीं चलता।' : 'Cryptic variable names hide meaning.'}</p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
            <span className="font-sans font-bold text-emerald-900 text-xs uppercase">✅ Highly Readable (Clear)</span>
            <div className="mt-2 text-slate-800 space-y-1">
              <p>first_number = 10</p>
              <p>second_number = 20</p>
              <p>print(first_number + second_number)</p>
            </div>
            <p className="font-sans text-[11px] text-emerald-800 mt-2">{isHindi ? 'नाम पढ़ते ही पूरा Code समझ आ जाता है।' : 'Self-explanatory descriptive names.'}</p>
          </div>
        </div>
      </div>

      {/* ── 6. COMMON MISTAKES ── */}
      <div
        ref={secMistakesRef}
        id="sec17-mistakes"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec17-mistakes'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-rose-100 text-rose-700 rounded-2xl text-xl">⚠️</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'शुरुआती गलतियां (Common Syntax Traps)' : 'Common Beginner Traps'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi ? 'इन 4 बातों का हमेशा ध्यान रखें:' : 'Remember these 4 strict grammar guidelines:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2">
            <span className="text-rose-600 font-bold">1.</span>
            <p className="text-slate-700">{isHindi ? 'ब्रैकेट्स या कोट्स बंद करना भूलना।' : 'Forgetting closing parentheses or quotes.'}</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2">
            <span className="text-rose-600 font-bold">2.</span>
            <p className="text-slate-700">{isHindi ? 'गलत इंडेंटेशन (IndentationError)।' : 'Inconsistent indentation or mixing tabs with spaces.'}</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2">
            <span className="text-rose-600 font-bold">3.</span>
            <p className="text-slate-700">{isHindi ? 'इफ/फॉर Statement के बाद कोलन (:) भूलना।' : 'Forgetting the colon : after if/for statements.'}</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2">
            <span className="text-rose-600 font-bold">4.</span>
            <p className="text-slate-700">{isHindi ? 'अस्पष्ट Variable नाम (जैसे x1, aa)।' : 'Using cryptic names instead of meaningful ones.'}</p>
          </div>
        </div>
      </div>

      {/* ── 7. KEY TAKEAWAY BANNER ── */}
      <div
        ref={secTakeawayRef}
        id="sec17-takeaway"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec17-takeaway'
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
                ? 'Syntax = भाषा के नियम। Indentation = Code को ब्लॉक में जोड़ना। Comments = Code को समझाने वाले नोट्स। इन तीनों से Code साफ और त्रुटिहीन बनता है।'
                : 'Syntax = Writing Rules. Indentation = Code Grouping. Comments = Explanatory Notes. Mastering these creates clean, readable, error-free programs.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
