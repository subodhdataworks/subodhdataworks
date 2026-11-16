import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic16VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic16FirstPythonProgramLesson: React.FC<Topic16VisualLessonProps> = ({
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
  const secFirstCodeRef = useRef<HTMLDivElement>(null);
  const secAnatomyRef = useRef<HTMLDivElement>(null);
  const secNameRef = useRef<HTMLDivElement>(null);
  const secMultilineRef = useRef<HTMLDivElement>(null);
  const secTypesRef = useRef<HTMLDivElement>(null);
  const secMathRef = useRef<HTMLDivElement>(null);
  const secMistakesRef = useRef<HTMLDivElement>(null);
  const secChallengesRef = useRef<HTMLDivElement>(null);
  const secRevisionRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec16-title': secTitleRef,
      'sec16-first-code': secFirstCodeRef,
      'sec16-anatomy': secAnatomyRef,
      'sec16-name': secNameRef,
      'sec16-multiline': secMultilineRef,
      'sec16-types': secTypesRef,
      'sec16-math': secMathRef,
      'sec16-mistakes': secMistakesRef,
      'sec16-challenges': secChallengesRef,
      'sec16-revision': secRevisionRef,
      'sec16-takeaway': secTakeawayRef,
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
      className="topic16-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={3}
        moduleName="Introduction to Programming & Python"
        topicNum={6}
        totalTopicsInModule={6}
        englishTitle="Writing and Running Your First Python Program"
        hindiTitle="Writing and Running Your First Python Program"
        subtitleEnglish="Hands-on execution of your first Python program."
        subtitleHindi="Writing and running your first real Python program."
        emoji="🚀"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec16-title'}
        sectionRef={secTitleRef}
        sectionId="sec16-title"
      />

      {/* ── 2. FIRST CODE RUN: HELLO, WORLD! ── */}
      <div
        ref={secFirstCodeRef}
        id="sec16-first-code"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec16-first-code'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-emerald-100 text-emerald-700 rounded-2xl text-xl">🌍</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'Code #1: "Hello, World!"' : 'Code #1: "Hello, World!"'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'Programming की दुनिया की सबसे पुरानी परंपरा — Computer को बोलना सिखाना:'
                : 'The timeless programming rite of passage — greeting the digital world:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs sm:text-sm shadow-inner flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 pb-2 border-b border-slate-700 text-slate-400 text-xs mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="ml-2">app.py</span>
              </div>
              <p className="text-white font-bold text-base">
                <span className="text-indigo-400">print</span>(<span className="text-amber-300">"Hello, World!"</span>)
              </p>
            </div>
            <p className="text-[11px] text-slate-400 mt-4">
              {isHindi ? 'यह 1 लाइन Python को स्क्रीन पर Hello, World! लिखने को कहती है।' : 'Tells Python to print the string to standard output.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-white font-mono text-xs sm:text-sm flex flex-col justify-between shadow-inner">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400 text-xs">
              <span>OUTPUT TERMINAL</span>
              <span className="text-emerald-400">Executed ✓</span>
            </div>
            <p className="text-emerald-400 font-extrabold text-lg my-3">
              Hello, World!
            </p>
            <p className="text-[11px] text-slate-500 font-sans">
              {isHindi ? '✅ बधाई! आपका पहला Program सफलतापूर्वक चल चुका है।' : '✅ Success! Your first program ran with zero errors.'}
            </p>
          </div>
        </div>
      </div>

      {/* ── 3. ANATOMY OF CODE ── */}
      <div
        ref={secAnatomyRef}
        id="sec16-anatomy"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec16-anatomy'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-indigo-100 text-indigo-700 rounded-2xl text-xl">🔍</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'Code के 4 महत्वपूर्ण अंग' : 'The 4 Essential Parts of the Command'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi ? 'हर हिस्से का अपना एक महत्वपूर्ण कार्य है:' : 'Every symbol has a strict grammatical purpose:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-center">
            <span className="font-mono font-black text-indigo-700 text-sm">print</span>
            <p className="font-bold text-xs text-indigo-950 mt-1">{isHindi ? 'Function' : 'Function'}</p>
            <p className="text-[11px] text-indigo-800 mt-0.5">{isHindi ? 'Data डिस्प्ले करता है' : 'Displays output'}</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <span className="font-mono font-black text-slate-800 text-sm">(</span>
            <p className="font-bold text-xs text-slate-900 mt-1">{isHindi ? 'शुरुआती ब्रैकेट' : 'Open Parenthesis'}</p>
            <p className="text-[11px] text-slate-600 mt-0.5">{isHindi ? 'Data की शुरुआत' : 'Starts arguments'}</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-center">
            <span className="font-mono font-black text-amber-700 text-xs">"Hello, World!"</span>
            <p className="font-bold text-xs text-amber-950 mt-1">{isHindi ? 'String (टेक्स्ट)' : 'String Text'}</p>
            <p className="text-[11px] text-amber-800 mt-0.5">{isHindi ? 'कोटेशन के अंदर' : 'Inside quotes'}</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <span className="font-mono font-black text-slate-800 text-sm">)</span>
            <p className="font-bold text-xs text-slate-900 mt-1">{isHindi ? 'अंतिम ब्रैकेट' : 'Close Parenthesis'}</p>
            <p className="text-[11px] text-slate-600 mt-0.5">{isHindi ? 'Data की समाप्ति' : 'Ends arguments'}</p>
          </div>
        </div>
      </div>

      {/* ── 4. DISPLAY YOUR NAME & MULTIPLE LINES ── */}
      <div
        ref={secMultilineRef}
        id="sec16-multiline"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec16-multiline'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-purple-100 text-purple-700 rounded-2xl text-xl">📜</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'नाम और कई लाइनें डिस्प्ले करना (Multiline Outputs)' : 'Displaying Name & Multiple Lines'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'हर print() डिफ़ॉल्ट रूप से नई लाइन (New line) पर प्रिंट करता है:'
                : 'Each print() statement outputs on a fresh line automatically:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs space-y-1.5 shadow-inner">
            <p className="text-slate-400"># Multiple print statements</p>
            <p><span className="text-indigo-400">print</span>(<span className="text-amber-300">"Welcome to Future IT Industry"</span>)</p>
            <p><span className="text-indigo-400">print</span>(<span className="text-amber-300">"I am learning Python"</span>)</p>
            <p><span className="text-indigo-400">print</span>(<span className="text-amber-300">"Python is fun"</span>)</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-white font-mono text-xs space-y-1 flex flex-col justify-center shadow-inner">
            <p className="text-emerald-400 font-bold">Welcome to Future IT Industry</p>
            <p className="text-emerald-400 font-bold">I am learning Python</p>
            <p className="text-emerald-400 font-bold">Python is fun</p>
          </div>
        </div>
      </div>

      {/* ── 5. NUMBERS VS TEXT (STRING VS INTEGER) ── */}
      <div
        ref={secTypesRef}
        id="sec16-types"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec16-types'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-blue-100 text-blue-700 rounded-2xl text-xl">🔢</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'संख्याएं बनाम टेक्स्ट: print("100") vs print(100)' : 'Numbers vs Text: print("100") vs print(100)'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'दोनों स्क्रीन पर 100 दिखाते हैं, पर Python की नज़र में दोनों बहुत अलग हैं!'
                : 'Both render as 100, but Python treats them with completely different logic:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
            <span className="px-2 py-0.5 bg-amber-200 text-amber-900 rounded font-mono text-xs font-bold">"100" (Quotes)</span>
            <h5 className="font-extrabold text-sm text-amber-950 mt-2">{isHindi ? 'टेक्स्ट (String)' : 'Text String'}</h5>
            <p className="text-xs text-amber-800 mt-1">
              {isHindi ? 'कोटेशन के अंदर होने के कारण यह केवल एक शब्द है। इस पर जोड़-घटाव नहीं हो सकता।' : 'Inside quotes, treated as literal characters. Mathematical arithmetic is not possible.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
            <span className="px-2 py-0.5 bg-emerald-200 text-emerald-900 rounded font-mono text-xs font-bold">100 (No Quotes)</span>
            <h5 className="font-extrabold text-sm text-emerald-950 mt-2">{isHindi ? 'संख्या (Integer Number)' : 'Integer Number'}</h5>
            <p className="text-xs text-emerald-800 mt-1">
              {isHindi ? 'बिना कोटेशन का वास्तविक नंबर। इस पर Calculation (+, -, *, /) संभव है।' : 'Real numeric quantity without quotes. Ready for mathematical operations.'}
            </p>
          </div>
        </div>
      </div>

      {/* ── 6. SIMPLE CALCULATIONS ── */}
      <div
        ref={secMathRef}
        id="sec16-math"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec16-math'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-emerald-100 text-emerald-700 rounded-2xl text-xl">➗</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'सरल गणनाएं (Arithmetic Calculations)' : 'Basic Math Operations (+, -, *, /)'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi ? 'Python को सुपरफास्ट कैलकुलेटर की तरह use करें:' : 'Use Python as an instant high-precision calculator:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
          <div className="p-3.5 rounded-2xl bg-slate-900 text-white shadow-inner">
            <p className="text-indigo-400">print(10 + 5)</p>
            <p className="mt-2 text-emerald-400 font-bold text-sm">Output: 15</p>
            <span className="text-[10px] text-slate-400 font-sans">{isHindi ? 'जोड़ (Addition)' : 'Addition (+)'}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900 text-white shadow-inner">
            <p className="text-indigo-400">print(10 - 5)</p>
            <p className="mt-2 text-emerald-400 font-bold text-sm">Output: 5</p>
            <span className="text-[10px] text-slate-400 font-sans">{isHindi ? 'घटाव (Subtraction)' : 'Subtraction (-)'}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900 text-white shadow-inner">
            <p className="text-indigo-400">print(10 * 5)</p>
            <p className="mt-2 text-emerald-400 font-bold text-sm">Output: 50</p>
            <span className="text-[10px] text-slate-400 font-sans">{isHindi ? 'गुणा (Multiplication)' : 'Multiplication (*)'}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900 text-white shadow-inner">
            <p className="text-indigo-400">print(10 / 5)</p>
            <p className="mt-2 text-emerald-400 font-bold text-sm">Output: 2.0</p>
            <span className="text-[10px] text-slate-400 font-sans">{isHindi ? 'भाग (Division Float)' : 'Division (/)'}</span>
          </div>
        </div>
      </div>

      {/* ── 7. COMMON BEGINNER MISTAKES ── */}
      <div
        ref={secMistakesRef}
        id="sec16-mistakes"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec16-mistakes'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-rose-100 text-rose-700 rounded-2xl text-xl">⚠️</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'शुरुआती लोगों की 3 सबसे आम गलतियां (Common Mistakes)' : '3 Common Beginner Mistakes & Fixes'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'इन छोटी गलतियों से बचें और तुरंत सही Code लिखें:'
                : 'Avoid these classic syntactic traps to write error-free code:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
          {/* Mistake 1 */}
          <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200">
            <span className="px-2 py-0.5 bg-rose-200 text-rose-900 rounded font-sans font-bold text-[10px]">Mistake 1</span>
            <p className="font-sans font-bold text-rose-950 mt-1.5">{isHindi ? 'अधूरा कोटेशन मार्क' : 'Missing Quote'}</p>
            <div className="mt-2 p-2 bg-white rounded-lg border border-rose-200 text-rose-700">
              ❌ print("Hello)
            </div>
            <div className="mt-1.5 p-2 bg-emerald-50 rounded-lg border border-emerald-300 text-emerald-800">
              ✅ print("Hello")
            </div>
          </div>

          {/* Mistake 2 */}
          <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200">
            <span className="px-2 py-0.5 bg-rose-200 text-rose-900 rounded font-sans font-bold text-[10px]">Mistake 2</span>
            <p className="font-sans font-bold text-rose-950 mt-1.5">{isHindi ? 'अधूरा ब्रैकेट' : 'Missing Parenthesis'}</p>
            <div className="mt-2 p-2 bg-white rounded-lg border border-rose-200 text-rose-700">
              ❌ print("Hello"
            </div>
            <div className="mt-1.5 p-2 bg-emerald-50 rounded-lg border border-emerald-300 text-emerald-800">
              ✅ print("Hello")
            </div>
          </div>

          {/* Mistake 3 */}
          <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200">
            <span className="px-2 py-0.5 bg-rose-200 text-rose-900 rounded font-sans font-bold text-[10px]">Mistake 3</span>
            <p className="font-sans font-bold text-rose-950 mt-1.5">{isHindi ? 'कैपिटल लेटर (Case sensitive)' : 'Capital P in Print'}</p>
            <div className="mt-2 p-2 bg-white rounded-lg border border-rose-200 text-rose-700">
              ❌ Print("Hello")
            </div>
            <div className="mt-1.5 p-2 bg-emerald-50 rounded-lg border border-emerald-300 text-emerald-800">
              ✅ print("Hello")
            </div>
          </div>
        </div>
      </div>

      {/* ── 8. PRACTICE CHALLENGES CARDS ── */}
      <div
        ref={secChallengesRef}
        id="sec16-challenges"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec16-challenges'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-amber-100 text-amber-700 rounded-2xl text-xl">🏆</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? '6 प्रैक्टिस Challenge (Practice Challenges)' : '6 Interactive Practice Challenges'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi ? 'खुद Code लिखकर आजमाने की कोशिश करें:' : 'Try writing and executing these commands yourself:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { num: '1', title: isHindi ? 'अपना नाम प्रिंट करें' : 'Display Your Name', code: 'print("My name is...")' },
            { num: '2', title: isHindi ? 'अपने शहर का नाम' : 'Display Your City', code: 'print("Delhi")' },
            { num: '3', title: isHindi ? '"I love Python" संदेश' : 'Display Message', code: 'print("I love Python")' },
            { num: '4', title: isHindi ? '20 + 30 का जोड़' : 'Calculate 20 + 30', code: 'print(20 + 30)' },
            { num: '5', title: isHindi ? '3 अलग-अलग लाइनें' : 'Three Separate Lines', code: 'print("1") ...' },
            { num: '6', title: isHindi ? '100 / 4 का भाग' : 'Calculate 100 / 4', code: 'print(100 / 4)' },
          ].map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-purple-50/50 border border-purple-100 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                {item.num}
              </span>
              <div>
                <p className="font-bold text-xs text-purple-950">{item.title}</p>
                <code className="text-[11px] font-mono text-purple-700 mt-1 block">{item.code}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 9. MODULE 3 QUICK REVISION TABLE ── */}
      <div
        ref={secRevisionRef}
        id="sec16-revision"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec16-revision'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-emerald-100 text-emerald-700 rounded-2xl text-xl">📋</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'Module 3 का त्वरित रिवीजन (Module 3 Quick Revision)' : 'Module 3 Quick Revision Table'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi ? 'इस Module में आपने क्या-क्या सीखा:' : 'Everything you mastered in Module 3:'}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-purple-100 overflow-hidden shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-purple-100/70 text-purple-950 font-bold">
              <tr>
                <th className="py-2.5 px-4">{isHindi ? 'टॉपिक' : 'Topic'}</th>
                <th className="py-2.5 px-4">{isHindi ? 'आपने क्या सीखा' : 'What You Learned'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50">
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-purple-900">1. What Is Programming?</td>
                <td className="py-2.5 px-4">{isHindi ? 'Computer को कार्य कराने के लिए क्रमवार निर्देश देना।' : 'Giving step-by-step instructions to a computer.'}</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-purple-900">2. How Computers Follow Instructions</td>
                <td className="py-2.5 px-4">{isHindi ? 'Input ➔ प्रोसेसिंग ➔ Output का चक्र।' : 'The sequential Input ➔ Processing ➔ Output cycle.'}</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-purple-900">3. What Is Python and Why Use It?</td>
                <td className="py-2.5 px-4">{isHindi ? 'सरल, अंग्रेजी जैसी और शुरुआती लोगों के लिए श्रेष्ठ भाषा।' : 'Beginner-friendly language with clean English-like syntax.'}</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-purple-900">4. Python in Data Analytics & Real Life</td>
                <td className="py-2.5 px-4">{isHindi ? 'Data विश्लेषण, Calculation और ऑटोमेशन में उपयोग (Pandas, NumPy)।' : 'Calculations, data analysis, and workflow automation.'}</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-purple-900">5. Setting Up Python</td>
                <td className="py-2.5 px-4">{isHindi ? 'VS Code, Jupyter Notebook और Google Colab एनवायरनमेंट।' : 'Preparing local and cloud coding environments.'}</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-purple-900">6. First Python Program</td>
                <td className="py-2.5 px-4">{isHindi ? 'print() से टेक्स्ट, नंबर और बेसिक मैथ चलाना।' : 'Using print() to display text, numbers, and arithmetic.'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── 10. KEY TAKEAWAY & NEXT MODULE PREVIEW ── */}
      <div
        ref={secTakeawayRef}
        id="sec16-takeaway"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec16-takeaway'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 border border-purple-200 shadow-2xs'
        }`}
      >
        <div className="flex items-start gap-4">
          <span className="text-3xl p-2 bg-purple-200/80 rounded-2xl">🎓</span>
          <div>
            <h4 className="font-extrabold text-purple-950 text-base sm:text-lg">
              {isHindi ? 'हार्दिक बधाई! Module 3 पूरा हुआ' : 'Congratulations! Module 3 Completed!'}
            </h4>
            <p className="text-xs sm:text-sm text-purple-900 mt-1 leading-relaxed">
              {isHindi
                ? 'आपने सफलतापूर्वक समझ लिया है कि Programming क्या है, Python क्यों इतना लोकप्रिय है, और अपना पहला Program भी चला लिया है!'
                : 'You have mastered the foundational concepts of programming, why Python is essential, and how to execute basic code.'}
            </p>
            <div className="mt-3 inline-flex items-center gap-2 bg-purple-200/70 text-purple-950 px-3 py-1.5 rounded-xl text-xs font-bold">
              <span>⏩</span>
              <span>
                {isHindi
                  ? 'अगला Module: Python Syntax and Core Basics (Variables, Data Types, Operators)'
                  : 'Next Module: Python Syntax and Core Basics (Variables, Data Types, Operators)'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
