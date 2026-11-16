import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic25VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic25IfStatementsLesson: React.FC<Topic25VisualLessonProps> = ({
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
  const secSyntaxRef = useRef<HTMLDivElement>(null);
  const secExamRef = useRef<HTMLDivElement>(null);
  const secIndentRef = useRef<HTMLDivElement>(null);
  const secBankRef = useRef<HTMLDivElement>(null);
  const secMistakesRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec25-title': secTitleRef,
      'sec25-concept': secConceptRef,
      'sec25-syntax': secSyntaxRef,
      'sec25-exam': secExamRef,
      'sec25-indent': secIndentRef,
      'sec25-bank': secBankRef,
      'sec25-mistakes': secMistakesRef,
      'sec25-takeaway': secTakeawayRef,
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
      className="topic25-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={5}
        moduleName="Conditions, Loops & Problem-Solving"
        topicNum={1}
        totalTopicsInModule={8}
        englishTitle="if Statements and Decision-Making"
        hindiTitle="if Statements and Decision-Making"
        subtitleEnglish="Introduction to conditional branching with if."
        subtitleHindi="if statement se faisla lene ki shuruat."
        emoji="🔀"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec25-title'}
        sectionRef={secTitleRef}
        sectionId="sec25-title"
      />

      {/* Section 1: Real-Life Concept */}
      <div ref={secConceptRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-purple-100 shadow-sm text-center space-y-2">
          <div className="text-3xl">☔</div>
          <h4 className="font-bold text-sm text-purple-900">{isHi ? 'बारिश हो तो?' : 'If it rains?'}</h4>
          <p className="text-xs text-slate-600">{isHi ? 'अगर बारिश हो रही है, तो छाता लो।' : 'If it rains, take an umbrella.'}</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-purple-100 shadow-sm text-center space-y-2">
          <div className="text-3xl">🍕</div>
          <h4 className="font-bold text-sm text-purple-900">{isHi ? 'भूख लगे तो?' : 'If hungry?'}</h4>
          <p className="text-xs text-slate-600">{isHi ? 'अगर भूख लगी है, तो खाना खाओ।' : 'If you are hungry, eat food.'}</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-purple-100 shadow-sm text-center space-y-2">
          <div className="text-3xl">🔋</div>
          <h4 className="font-bold text-sm text-purple-900">{isHi ? 'बैटरी कम हो तो?' : 'If battery low?'}</h4>
          <p className="text-xs text-slate-600">{isHi ? 'अगर फोन की बैटरी कम है, तो चार्ज करो।' : 'If phone battery is low, charge it.'}</p>
        </div>
      </div>

      {/* Section 2: Anatomy of if Statement */}
      <div ref={secSyntaxRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'if Statement की पूरी रचना (Syntax Anatomy)' : 'Syntax Anatomy of if Statement'}</h3>
        </div>

        <div className="bg-slate-900 rounded-xl p-5 text-slate-100 font-mono text-sm relative overflow-hidden">
          <div className="space-y-1">
            <span className="text-amber-400 font-bold">if</span> <span className="text-cyan-300">condition</span><span className="text-rose-400 font-bold">:</span>
            <div className="pl-8 text-emerald-300 flex items-center gap-2">
              <span className="text-slate-500">└── 4 spaces ──►</span> statement
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
            <span className="font-bold text-purple-900 block">1. `if`</span>
            <span className="text-slate-600">Python का Keyword</span>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
            <span className="font-bold text-purple-900 block">2. Condition</span>
            <span className="text-slate-600">जो True या False बने</span>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
            <span className="font-bold text-purple-900 block">3. Colon `:`</span>
            <span className="text-slate-600">ब्लॉक शुरू करने का संकेत</span>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
            <span className="font-bold text-purple-900 block">4. 4 Spaces</span>
            <span className="text-slate-600">अंदर होने का प्रमाण (Indent)</span>
          </div>
        </div>
      </div>

      {/* Section 3: Exam Passing Flow */}
      <div ref={secExamRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            02
          </div>
          <h3>{isHi ? 'प्रैक्टिकल उदाहरण: परीक्षा पास या फेल?' : 'Practical Example: Exam Pass Check'}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 space-y-2">
            <span className="font-bold text-emerald-900 text-xs uppercase tracking-wide">
              {isHi ? 'Condition सच होने पर (True)' : 'When Condition is True'}
            </span>
            <pre className="bg-slate-900 text-slate-100 p-3 rounded-lg text-xs font-mono">
{`marks = 75

if marks >= 40:
    print("You passed the exam")

# Output: You passed the exam`}
            </pre>
            <p className="text-xs text-emerald-700">75 &gt;= 40 सच है, इसलिए अंदर का Code रन हुआ।</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <span className="font-bold text-slate-700 text-xs uppercase tracking-wide">
              {isHi ? 'Condition गलत होने पर (False)' : 'When Condition is False'}
            </span>
            <pre className="bg-slate-900 text-slate-100 p-3 rounded-lg text-xs font-mono">
{`marks = 25

if marks >= 40:
    print("You passed the exam")

# Output: (No output - कुछ नहीं छपेगा)`}
            </pre>
            <p className="text-xs text-slate-600">25 &gt;= 40 झूठ है, Python ने अंदर का Code छोड़ दिया।</p>
          </div>
        </div>
      </div>

      {/* Section 4: Bank Balance Case Study */}
      <div ref={secBankRef} className="bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 rounded-2xl p-6 border border-purple-200 shadow-sm space-y-4">
        <h4 className="font-bold text-purple-900 text-base flex items-center gap-2">
          <span>🏦</span> {isHi ? 'रियल-लाइफ केस स्टडी: एटीएम बैंक विथड्रॉल' : 'Real-Life Case Study: ATM Bank Withdrawal'}
        </h4>
        <pre className="bg-slate-900 text-purple-200 p-4 rounded-xl text-xs md:text-sm font-mono overflow-x-auto">
{`balance = 5000
withdrawal = 2000

if withdrawal <= balance:
    balance = balance - withdrawal
    print("Withdrawal successful")
    print("Remaining balance:", balance)

# Output:
# Withdrawal successful
# Remaining balance: 3000`}
        </pre>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
          <div className="bg-white p-2.5 rounded-lg border border-purple-100 text-center">
            <span className="text-slate-500 block">Balance:</span>
            <span className="font-bold text-purple-700">₹5,000</span>
          </div>
          <div className="bg-white p-2.5 rounded-lg border border-purple-100 text-center">
            <span className="text-slate-500 block">Withdrawal Request:</span>
            <span className="font-bold text-indigo-700">₹2,000</span>
          </div>
          <div className="bg-white p-2.5 rounded-lg border border-purple-100 text-center">
            <span className="text-slate-500 block">Remaining:</span>
            <span className="font-bold text-emerald-600">₹3,000</span>
          </div>
        </div>
      </div>

      {/* Section 5: Indentation Alert */}
      <div ref={secIndentRef} className="bg-amber-50 rounded-2xl p-5 border border-amber-200 shadow-sm space-y-3">
        <h4 className="font-bold text-amber-900 flex items-center gap-2 text-sm">
          <span>⚠️</span> {isHi ? 'इंडेंटेशन का खास नियम' : 'Crucial Indentation Rule'}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="bg-white p-3 rounded-xl border border-emerald-300">
            <span className="font-bold text-emerald-700 block mb-1">✅ सही (Correct)</span>
            <code className="block bg-slate-900 text-slate-100 p-2 rounded">
              if age &gt;= 18:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;print("Adult")
            </code>
          </div>
          <div className="bg-white p-3 rounded-xl border border-rose-300">
            <span className="font-bold text-rose-700 block mb-1">❌ गलत (IndentationError)</span>
            <code className="block bg-slate-900 text-slate-100 p-2 rounded">
              if age &gt;= 18:<br />
              print("Adult")
            </code>
          </div>
        </div>
      </div>

      {/* Section 6: Key Takeaways */}
      <div ref={secTakeawayRef} className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg space-y-2 text-center">
        <h4 className="font-bold text-base md:text-lg text-amber-300">
          💡 {isHi ? 'मुख्य सीख (Key Takeaway)' : 'Key Takeaway'}
        </h4>
        <p className="text-xs md:text-sm text-purple-200 max-w-2xl mx-auto">
          {isHi
            ? 'एक `if` Statement अपने अंदर के इंडेंटेड Code को केवल तभी रन करता है जब उसकी शर्त True होती है। कोलन (:) और 4 स्पेसेस का इंडेंटेशन अनिवार्य है।'
            : 'An `if` statement runs its indented block strictly when the condition is true. The colon (:) and 4-space indentation are mandatory.'}
        </p>
      </div>
    </div>
  );
};
export default Topic25IfStatementsLesson;
