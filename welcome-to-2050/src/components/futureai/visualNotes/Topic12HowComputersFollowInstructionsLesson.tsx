import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic12VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic12HowComputersFollowInstructionsLesson: React.FC<Topic12VisualLessonProps> = ({
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
  const secRobotRef = useRef<HTMLDivElement>(null);
  const secIpoRef = useRef<HTMLDivElement>(null);
  const secCalculatorRef = useRef<HTMLDivElement>(null);
  const secOrderRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec12-title': secTitleRef,
      'sec12-robot': secRobotRef,
      'sec12-ipo': secIpoRef,
      'sec12-calculator': secCalculatorRef,
      'sec12-order': secOrderRef,
      'sec12-takeaway': secTakeawayRef,
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

  const isHindi = currentLang === 'hindi';

    const isHi = currentLang === 'hindi';

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily: "'Comic Neue', 'Fredoka', 'Quicksand', 'Chalkboard SE', 'Comic Sans MS', cursive, sans-serif",
      }}
      className="topic12-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Identical to Module 1 Topic 1) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={3}
        moduleName="Introduction to Programming & Python"
        topicNum={2}
        totalTopicsInModule={6}
        englishTitle="How Computers Follow Instructions"
        hindiTitle="Computer निर्देश कैसे फॉलो करता है? (How Computers Follow Instructions)"
        subtitleEnglish="Computers cannot guess what you want; they sequentially execute instructions with absolute mechanical precision."
        subtitleHindi="Computer खुद से कोई फैसला नहीं लेता। वह केवल एक निश्चित क्रम में दिए गए निर्देशों को तेजी से पूरा करता है।"
        emoji="🤖"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec12-title'}
        sectionRef={secTitleRef}
        sectionId="sec12-title"
      />

      {/* ── 2. ROBOT COMMAND ANALOGY ── */}
      <div
        ref={secRobotRef}
        id="sec12-robot"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec12-robot'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-indigo-100 text-indigo-700 rounded-2xl text-xl">🕹️</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'रोबोट कमांड का सरल उदाहरण (Robot Example)' : 'Simple Analogy: Commanding a Robot'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'यदि आप रोबोट को बॉक्स उठाने को कहें, तो उसे 3 क्रमबद्ध कमांड देने होंगे:'
                : 'Imagine commanding a helper robot to pick up a package in 3 exact steps:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
          <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-indigo-600 text-white font-extrabold flex items-center justify-center shrink-0">1</span>
            <div>
              <p className="font-bold text-sm text-indigo-950">{isHindi ? 'आगे बढ़ो' : 'Move Forward'}</p>
              <p className="text-xs text-indigo-700 mt-0.5">{isHindi ? 'बॉक्स के पास जाओ' : 'Walk toward the box'}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-indigo-600 text-white font-extrabold flex items-center justify-center shrink-0">2</span>
            <div>
              <p className="font-bold text-sm text-indigo-950">{isHindi ? 'दाएं मुड़ो' : 'Turn Right'}</p>
              <p className="text-xs text-indigo-700 mt-0.5">{isHindi ? 'बॉक्स की तरफ फेस करो' : 'Align face with package'}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-indigo-600 text-white font-extrabold flex items-center justify-center shrink-0">3</span>
            <div>
              <p className="font-bold text-sm text-indigo-950">{isHindi ? 'बॉक्स उठाओ' : 'Pick Up Box'}</p>
              <p className="text-xs text-indigo-700 mt-0.5">{isHindi ? 'हाथ आगे करके उठा लो' : 'Lift box off the ground'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. INPUT - PROCESSING - OUTPUT EXPLAINED ── */}
      <div
        ref={secIpoRef}
        id="sec12-ipo"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec12-ipo'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-purple-100 text-purple-700 rounded-2xl text-xl">🔁</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'Input, प्रोसेसिंग और Output क्या हैं?' : 'What Are Input, Processing & Output?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'दुनिया का हर Software और Program इन्हीं तीन चरणों पर काम करता है:'
                : 'Every piece of software in the world operates through this exact three-stage cycle:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {/* Input Card */}
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-200 text-blue-900 text-[11px] font-extrabold uppercase">Step 1</span>
                <span className="text-2xl">📥</span>
              </div>
              <h4 className="font-extrabold text-blue-950 text-base mt-2">{isHindi ? 'Input (Input)' : 'Input'}</h4>
              <p className="text-xs text-blue-800 mt-1">
                {isHindi ? 'Computer को दी जाने वाली जानकारी।' : 'Data or information given to the computer.'}
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-blue-200 text-[11px] text-blue-700 space-y-1">
              <p>• {isHindi ? 'नाम टाइप करना' : 'Typing your name'}</p>
              <p>• {isHindi ? 'संख्याएं दर्ज करना' : 'Entering numbers'}</p>
              <p>• {isHindi ? 'Button पर क्लिक करना' : 'Clicking a button'}</p>
            </div>
          </div>

          {/* Processing Card */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 text-[11px] font-extrabold uppercase">Step 2</span>
                <span className="text-2xl">⚙️</span>
              </div>
              <h4 className="font-extrabold text-amber-950 text-base mt-2">{isHindi ? 'Processing (प्रोसेसिंग)' : 'Processing'}</h4>
              <p className="text-xs text-amber-800 mt-1">
                {isHindi ? 'Input पर Calculation या जांच करना।' : 'Working on data to generate an answer.'}
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-amber-200 text-[11px] text-amber-700 space-y-1">
              <p>• {isHindi ? 'संख्याओं को जोड़ना' : 'Adding two numbers'}</p>
              <p>• {isHindi ? 'पासवर्ड मैच करना' : 'Checking passwords'}</p>
              <p>• {isHindi ? 'कुल प्रतिशत निकालना' : 'Calculating total %'}</p>
            </div>
          </div>

          {/* Output Card */}
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-200 text-emerald-900 text-[11px] font-extrabold uppercase">Step 3</span>
                <span className="text-2xl">📤</span>
              </div>
              <h4 className="font-extrabold text-emerald-950 text-base mt-2">{isHindi ? 'Output (Output)' : 'Output'}</h4>
              <p className="text-xs text-emerald-800 mt-1">
                {isHindi ? 'स्क्रीन पर मिलने वाला परिणाम।' : 'Final result produced by the program.'}
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-emerald-200 text-[11px] text-emerald-700 space-y-1">
              <p>• {isHindi ? 'स्क्रीन पर कुल बिल' : 'Total bill on screen'}</p>
              <p>• {isHindi ? 'छात्र का Report कार्ड' : 'Student grade card'}</p>
              <p>• {isHindi ? 'Chart या Graph' : 'Interactive chart'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. CALCULATOR EXAMPLE WITH PYTHON CODE ── */}
      <div
        ref={secCalculatorRef}
        id="sec12-calculator"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec12-calculator'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-emerald-100 text-emerald-700 rounded-2xl text-xl">🧮</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'कैलकुलेटर का लाइव उदाहरण (Calculator in Python)' : 'Calculator Example in Python'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'Input: 10 और 20 | Processing: जोड़ना (+) | Output: 30'
                : 'Input: 10 & 20 | Processing: Addition (+) | Output: 30'}
            </p>
          </div>
        </div>

        {/* Visual Pipeline */}
        <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs sm:text-sm shadow-inner space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-700 text-slate-400 text-xs">
            <span>calculator.py</span>
            <span className="text-emerald-400">Python 3.12 ✓</span>
          </div>

          <div className="space-y-1">
            <p className="text-slate-400"># Input: 10 and 20 | Processing: + | Output: print()</p>
            <p className="text-white font-bold text-base">
              <span className="text-indigo-400">print</span>(<span className="text-amber-300">10</span> + <span className="text-amber-300">20</span>)
            </p>
          </div>

          <div className="mt-3 p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <span className="text-slate-400 text-xs font-sans">TERMINAL OUTPUT:</span>
            <span className="text-emerald-400 font-extrabold text-lg">30</span>
          </div>
        </div>
      </div>

      {/* ── 5. WHY ORDER MATTERS (SOCKS & SHOES ANALOGY) ── */}
      <div
        ref={secOrderRef}
        id="sec12-order"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec12-order'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-rose-100 text-rose-700 rounded-2xl text-xl">👟</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'निर्देशों का क्रम क्यों महत्वपूर्ण है? (Why Order Matters)' : 'Why Is Instruction Order Important?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'सोचिए अगर आप जूते पहनने के बाद मोज़े पहनने की कोशिश करें? असंभव!'
                : 'Imagine putting on shoes before socks. The sequence breaks everything!'}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start gap-3">
          <span className="text-2xl">⚠️</span>
          <div>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
              {isHindi
                ? 'Computer हमेशा ऊपर से नीचे (Top to Bottom) एक-एक लाइन क्रम से चलाता है। यदि आप गलत क्रम में Code लिखेंगे, तो Program सही काम नहीं करेगा।'
                : 'Computers execute code from top to bottom in strict sequence. Logical ordering is essential for bug-free programs.'}
            </p>
          </div>
        </div>
      </div>

      {/* ── 6. KEY TAKEAWAY BANNER ── */}
      <div
        ref={secTakeawayRef}
        id="sec12-takeaway"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec12-takeaway'
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
                ? 'Computer कार्य करने का मूल चक्र है: Input ➔ Processing ➔ Output। Computer केवल दिए गए Code को सही क्रम में निष्पादित करता है।'
                : 'A computer operates on the simple cycle: Input ➔ Processing ➔ Output. It strictly executes given instructions in sequential order.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
