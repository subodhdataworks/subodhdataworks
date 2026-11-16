import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic29VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic29WhileLoopsLesson: React.FC<Topic29VisualLessonProps> = ({
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
  const secFlowRef = useRef<HTMLDivElement>(null);
  const secInfiniteRef = useRef<HTMLDivElement>(null);
  const secSavingsRef = useRef<HTMLDivElement>(null);
  const secComparisonRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec29-title': secTitleRef,
      'sec29-concept': secConceptRef,
      'sec29-flow': secFlowRef,
      'sec29-infinite': secInfiniteRef,
      'sec29-savings': secSavingsRef,
      'sec29-comparison': secComparisonRef,
      'sec29-takeaway': secTakeawayRef,
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
      className="topic29-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={5}
        moduleName="Conditions, Loops & Problem-Solving"
        topicNum={5}
        totalTopicsInModule={8}
        englishTitle="while Loops"
        hindiTitle="while Loops"
        subtitleEnglish="Introduction to while loops and reservoir analogy."
        subtitleHindi="while loop ka introduction aur water tank analogy."
        emoji="🔄"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec29-title'}
        sectionRef={secTitleRef}
        sectionId="sec29-title"
      />

      {/* Section 1: Water Tank Concept & Basic Code */}
      <div ref={secConceptRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'while Loop क्या है? (टंकी भरने का उदाहरण)' : 'What Is a while Loop?'}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <p className="text-xs md:text-sm text-slate-600 mb-3">
              {isHi
                ? '`while` Loop हर चक्कर (Iteration) से पहले शर्त चेक करता है। अगर शर्त True है तो Code चलता है, False होते ही रुक जाता है।'
                : 'A `while` loop checks condition before every cycle. If True, body runs; if False, loop terminates immediately.'}
            </p>
            <pre className="bg-slate-900 text-emerald-300 p-4 rounded-xl font-mono text-xs overflow-x-auto">
{`number = 1

while number <= 5:
    print(number)
    number = number + 1

# Output: 1, 2, 3, 4, 5`}
            </pre>
          </div>

          <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 text-center space-y-2">
            <span className="text-xs font-bold text-purple-900 block">
              {isHi ? '3 जरूरी चीजें (3 Must-Haves)' : '3 Mandatory Components'}
            </span>
            <div className="text-xs space-y-2 text-left">
              <div className="p-2 bg-white rounded border border-purple-100">
                <span className="font-bold text-purple-700">1. Initial Value:</span> <code>number = 1</code>
              </div>
              <div className="p-2 bg-white rounded border border-purple-100">
                <span className="font-bold text-indigo-700">2. Stopping Condition:</span> <code>number &lt;= 5</code>
              </div>
              <div className="p-2 bg-white rounded border border-purple-100">
                <span className="font-bold text-emerald-700">3. Counter Increment:</span> <code>number += 1</code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Step-by-Step Table */}
      <div ref={secFlowRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <h4 className="font-bold text-sm text-purple-900 flex items-center gap-2">
          <span>📋</span> {isHi ? 'स्टेप-बाय-स्टेप निष्पादन Table (Execution Trace)' : 'Step-by-Step Execution Trace'}
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-purple-100 text-purple-900 font-bold">
                <th className="p-2">Iteration</th>
                <th className="p-2">number Value</th>
                <th className="p-2">Condition (number &lt;= 5)</th>
                <th className="p-2 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50 font-mono text-slate-700">
              <tr><td className="p-2">1</td><td className="p-2">1</td><td className="p-2 text-emerald-600 font-bold">True</td><td className="p-2 text-right">Print 1, number ➔ 2</td></tr>
              <tr><td className="p-2">2</td><td className="p-2">2</td><td className="p-2 text-emerald-600 font-bold">True</td><td className="p-2 text-right">Print 2, number ➔ 3</td></tr>
              <tr><td className="p-2">3</td><td className="p-2">3</td><td className="p-2 text-emerald-600 font-bold">True</td><td className="p-2 text-right">Print 3, number ➔ 4</td></tr>
              <tr><td className="p-2">4</td><td className="p-2">4</td><td className="p-2 text-emerald-600 font-bold">True</td><td className="p-2 text-right">Print 4, number ➔ 5</td></tr>
              <tr><td className="p-2">5</td><td className="p-2">5</td><td className="p-2 text-emerald-600 font-bold">True</td><td className="p-2 text-right">Print 5, number ➔ 6</td></tr>
              <tr className="bg-rose-50 text-rose-800 font-bold"><td className="p-2">Final</td><td className="p-2">6</td><td className="p-2 text-rose-600">False</td><td className="p-2 text-right">STOP 🛑</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 3: Infinite Loop Warning */}
      <div ref={secInfiniteRef} className="bg-rose-50 rounded-2xl p-6 border border-rose-200 shadow-sm space-y-4">
        <h4 className="font-bold text-rose-900 flex items-center gap-2">
          <span>🚨</span> {isHi ? 'अनंत Loop (Infinite Loop) का खतरा!' : 'The Danger of Infinite Loops!'}
        </h4>
        <p className="text-xs md:text-sm text-slate-700">
          {isHi
            ? 'अगर आप काउंटर को बढ़ाना (`number += 1`) भूल गए, तो `number` हमेशा 1 रहेगा और शर्त हमेशा True रहेगी! आपका Computer लगातार 1 प्रिंट करता रहेगा और हैंग हो सकता है।'
            : 'If you forget to increment the counter (`number += 1`), the condition remains True forever! The program will print indefinitely until manually killed.'}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="bg-white p-3 rounded-xl border border-rose-300">
            <span className="font-bold text-rose-700 block mb-1">❌ खतरनाक Code (Infinite Loop)</span>
            <code className="block bg-slate-900 text-rose-300 p-2 rounded">
              number = 1<br />
              while number &lt;= 5:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(number) # number कभी बदला ही नहीं!
            </code>
          </div>
          <div className="bg-white p-3 rounded-xl border border-emerald-300">
            <span className="font-bold text-emerald-700 block mb-1">✅ सुरक्षित Code (Safe Loop)</span>
            <code className="block bg-slate-900 text-emerald-300 p-2 rounded">
              number = 1<br />
              while number &lt;= 5:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(number)<br />
              &nbsp;&nbsp;&nbsp;&nbsp;number += 1 # 1 से बढ़कर 2, 3... 6 पर रुकेगा
            </code>
          </div>
        </div>
      </div>

      {/* Section 4: Savings Goal Tracker */}
      <div ref={secSavingsRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            02
          </div>
          <h3>{isHi ? 'रियल-लाइफ केस स्टडी: बचत लक्ष्य (Savings Goal)' : 'Real-Life: Savings Goal Tracker'}</h3>
        </div>
        <pre className="bg-slate-900 text-purple-200 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`savings = 0
goal = 500
week = 0

while savings < goal:
    savings += 100
    week += 1
    print("Week:", week, "Savings:", savings)

# Output:
# Week: 1 Savings: 100
# Week: 2 Savings: 200
# Week: 3 Savings: 300
# Week: 4 Savings: 400
# Week: 5 Savings: 500`}
        </pre>
      </div>

      {/* Section 5: for vs while Comparison */}
      <div ref={secComparisonRef} className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200 shadow-sm space-y-3">
        <h4 className="font-bold text-purple-900 text-sm md:text-base flex items-center gap-2">
          <span>⚖️</span> {isHi ? 'for Loop बनाम while Loop' : 'for Loop vs while Loop'}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="bg-white p-3.5 rounded-xl border border-purple-100">
            <span className="font-bold text-purple-800 block text-sm mb-1">for Loop</span>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>सीक्वेंस या List के आइटम्स पर घूमता है।</li>
              <li>जब पहले से पता हो कि कितनी बार Loop चलाना है (e.g. range(10))।</li>
              <li>काउंटर अपने आप आगे बढ़ता है।</li>
            </ul>
          </div>
          <div className="bg-white p-3.5 rounded-xl border border-indigo-100">
            <span className="font-bold text-indigo-800 block text-sm mb-1">while Loop</span>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>शर्त के True रहने तक चलता है।</li>
              <li>जब यह न पता हो कि कितनी बार में काम पूरा होगा (e.g. जब तक लक्ष्य न मिले)।</li>
              <li>काउंटर हमें खुद UPDATE करना पड़ता है।</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 6: Key Takeaway */}
      <div ref={secTakeawayRef} className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg space-y-2 text-center">
        <h4 className="font-bold text-base md:text-lg text-amber-300">
          💡 {isHi ? 'मुख्य सीख (Key Takeaway)' : 'Key Takeaway'}
        </h4>
        <p className="text-xs md:text-sm text-purple-200 max-w-2xl mx-auto">
          {isHi
            ? 'while Loop Condition-ड्रिवन होता है। हमेशा यह सुनिश्चित करें कि Loop के अंदर ऐसी स्थिति आए जिससे शर्त False हो जाए, ताकि अनंत Loop से बचा जा सके।'
            : 'A while loop is condition-driven. Always ensure the state changes inside the loop so the condition eventually turns False to avoid infinite loops.'}
        </p>
      </div>
    </div>
  );
};
export default Topic29WhileLoopsLesson;
