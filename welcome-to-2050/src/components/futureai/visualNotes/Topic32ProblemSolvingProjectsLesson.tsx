import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic32VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic32ProblemSolvingProjectsLesson: React.FC<Topic32VisualLessonProps> = ({
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
  const secProject1Ref = useRef<HTMLDivElement>(null);
  const secProject2Ref = useRef<HTMLDivElement>(null);
  const secProject3Ref = useRef<HTMLDivElement>(null);
  const secProject4Ref = useRef<HTMLDivElement>(null);
  const secLenConceptRef = useRef<HTMLDivElement>(null);
  const secRevisionTableRef = useRef<HTMLDivElement>(null);
  const secChallengeRef = useRef<HTMLDivElement>(null);
  const secCongratulationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec32-title': secTitleRef,
      'sec32-project1': secProject1Ref,
      'sec32-project2': secProject2Ref,
      'sec32-project3': secProject3Ref,
      'sec32-project4': secProject4Ref,
      'sec32-len-concept': secLenConceptRef,
      'sec32-revision-table': secRevisionTableRef,
      'sec32-challenge': secChallengeRef,
      'sec32-congratulations': secCongratulationsRef,
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
      className="topic32-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={5}
        moduleName="Conditions, Loops & Problem-Solving"
        topicNum={8}
        totalTopicsInModule={8}
        englishTitle="Practical Problem-Solving with Conditions and Loops"
        hindiTitle="Practical Problem-Solving with Conditions and Loops"
        subtitleEnglish="Introduction to Module 5 practical projects."
        subtitleHindi="Module 5 Capstone Projects ka introduction."
        emoji="🎯"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec32-title'}
        sectionRef={secTitleRef}
        sectionId="sec32-title"
      />

      {/* PROJECT 1: Student Pass/Fail Checker */}
      <div ref={secProject1Ref} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-purple-50 pb-2">
          <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
              P1
            </div>
            <h3>{isHi ? 'Project 1: स्टूडेंट पास/फेल चेकर' : 'Project 1: Student Pass/Fail Checker'}</h3>
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
            Validation + Logic
          </span>
        </div>

        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'यूजर से मार्क्स Input लेता है। 0 से 100 के बाहर होने पर अमान्य बताता है। 40 या उससे अधिक होने पर पास घोषित करता है।'
            : 'Accepts marks, rejects inputs outside 0–100, and evaluates passing benchmark at >= 40.'}
        </p>

        <pre className="bg-slate-900 text-emerald-300 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`marks = float(input("Enter your marks: "))

if marks < 0 or marks > 100:
    print("Invalid marks")
elif marks >= 40:
    print("Congratulations! You passed.")
else:
    print("You failed. Keep practicing.")`}
        </pre>
      </div>

      {/* PROJECT 2: Multiplication Table Generator */}
      <div ref={secProject2Ref} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-purple-50 pb-2">
          <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
              P2
            </div>
            <h3>{isHi ? 'Project 2: पहाड़ा जेनरेटर (Multiplication Table)' : 'Project 2: Multiplication Table'}</h3>
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-bold">
            for Loop + range()
          </span>
        </div>

        <pre className="bg-slate-900 text-indigo-200 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`number = int(input("Enter a number: "))

for i in range(1, 11):
    result = number * i
    print(number, "x", i, "=", result)`}
        </pre>
      </div>

      {/* PROJECT 3: Shopping Bill & Discount */}
      <div ref={secProject3Ref} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-purple-50 pb-2">
          <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
              P3
            </div>
            <h3>{isHi ? 'Project 3: शॉपिंग बिल और डिस्काउंट कैलकुलेटर' : 'Project 3: Shopping Bill Calculator'}</h3>
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">
            Math + Discount Branch
          </span>
        </div>

        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'अगर कुल बिल ₹1,000 या अधिक होता है तो 10% डिस्काउंट लागू करता है, अन्यथा कोई डिस्काउंट नहीं मिलता।'
            : 'Applies 10% discount if bill >= ₹1000, calculating discounted net payable.'}
        </p>

        <pre className="bg-slate-900 text-amber-200 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`price = float(input("Enter notebook price: "))
quantity = int(input("Enter quantity: "))

if price < 0 or quantity < 0:
    print("Invalid price or quantity")
else:
    total = price * quantity

    if total >= 1000:
        discount = total * 0.10
    else:
        discount = 0

    final_bill = total - discount

    print("Total:", total)
    print("Discount:", discount)
    print("Final Bill:", final_bill)`}
        </pre>
      </div>

      {/* PROJECT 4: Sales Data Analyzer (Data Analyst Core!) */}
      <div ref={secProject4Ref} className="bg-gradient-to-br from-purple-50 to-indigo-50/70 rounded-2xl p-6 border border-purple-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-purple-200 pb-2">
          <div className="flex items-center space-x-3 text-purple-900 font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-purple-200 flex items-center justify-center text-purple-800 font-mono text-sm">
              P4
            </div>
            <h3>{isHi ? 'Project 4: Cells Data एनालाइज़र (Core Data Analytics)' : 'Project 4: Sales Data Analyzer'}</h3>
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-200 text-purple-900 font-bold">
            Analytics Capstone ⭐
          </span>
        </div>

        <p className="text-xs md:text-sm text-slate-700">
          {isHi
            ? 'दुकान की 5 दिनों की बिक्री का विश्लेषण: Total Sales, ₹500 से अधिक बिक्री वाले दिन और औसत दैनिक बिक्री।'
            : 'Analyzes 5-day sales: accumulates total, counts high-performing days (>=500), and computes average using len().'}
        </p>

        <pre className="bg-slate-900 text-purple-200 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`sales = [450, 700, 300, 850, 600]

total = 0
high_sales_days = 0

for amount in sales:
    total += amount

    if amount >= 500:
        high_sales_days += 1

average = total / len(sales)

print("Total Sales:", total)          # 2900
print("High Sales Days:", high_sales_days) # 3
print("Average Sales:", average)      # 580.0`}
        </pre>

        {/* Step-by-Step Table */}
        <div className="overflow-x-auto bg-white rounded-xl p-3 border border-purple-100 shadow-sm">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-purple-100 text-purple-900 font-bold">
                <th className="p-2">Day</th>
                <th className="p-2">Sales</th>
                <th className="p-2">Running Total</th>
                <th className="p-2 text-right">High Sales Days</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50 font-mono text-slate-700">
              <tr><td className="p-2">1</td><td className="p-2">450</td><td className="p-2">450</td><td className="p-2 text-right">0</td></tr>
              <tr className="bg-emerald-50/50"><td className="p-2">2</td><td className="p-2 font-bold text-emerald-700">700</td><td className="p-2">1150</td><td className="p-2 text-right font-bold text-emerald-700">1</td></tr>
              <tr><td className="p-2">3</td><td className="p-2">300</td><td className="p-2">1450</td><td className="p-2 text-right">1</td></tr>
              <tr className="bg-emerald-50/50"><td className="p-2">4</td><td className="p-2 font-bold text-emerald-700">850</td><td className="p-2">2300</td><td className="p-2 text-right font-bold text-emerald-700">2</td></tr>
              <tr className="bg-emerald-50/50"><td className="p-2">5</td><td className="p-2 font-bold text-emerald-700">600</td><td className="p-2 font-bold text-purple-900">2900</td><td className="p-2 text-right font-bold text-emerald-700">3</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section: New Concept len() */}
      <div ref={secLenConceptRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <h4 className="font-bold text-sm text-purple-900 flex items-center gap-2">
          <span>📏</span> {isHi ? 'महत्वपूर्ण नया कॉन्सेप्ट: len() Function' : 'Crucial New Concept: len() Function'}
        </h4>
        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? '`len()` किसी भी List या कलेक्शन में कुल तत्वों (items) की संख्या गिनकर बताता है। औसत (Average) निकालने के लिए हमेशा `total / len(list)` का उपयोग किया जाता है।'
            : '`len()` counts total items in any sequence or collection. For averages, `total / len(list)` is standard across data analytics.'}
        </p>
      </div>

      {/* MODULE 5 FINAL REVISION TABLE */}
      <div ref={secRevisionTableRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <h4 className="font-bold text-purple-900 text-base flex items-center gap-2 border-b border-purple-50 pb-2">
          <span>📚</span> {isHi ? 'Module 5 — संपूर्ण रिवीजन Table' : 'Module 5 — Final Revision Table'}
        </h4>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-purple-100 text-purple-900 font-bold">
                <th className="p-2.5">Topic</th>
                <th className="p-2.5 text-right">Main Concept</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50 text-slate-700">
              <tr><td className="p-2 font-semibold">1. Comparison & Logical Operators</td><td className="p-2 text-right font-mono text-purple-700">==, !=, &gt;, &lt;, and, or, not</td></tr>
              <tr><td className="p-2 font-semibold">2. if Statements</td><td className="p-2 text-right text-slate-600">Make one-way decisions</td></tr>
              <tr><td className="p-2 font-semibold">3. if-else and elif</td><td className="p-2 text-right text-slate-600">Handle multiple branches</td></tr>
              <tr><td className="p-2 font-semibold">4. Nested Conditions</td><td className="p-2 text-right text-slate-600">Multi-stage decision making</td></tr>
              <tr><td className="p-2 font-semibold">5. for Loops and range()</td><td className="p-2 text-right text-slate-600">Repeat over sequences</td></tr>
              <tr><td className="p-2 font-semibold">6. while Loops</td><td className="p-2 text-right text-slate-600">Repeat while condition is True</td></tr>
              <tr><td className="p-2 font-semibold">7. break, continue, pass</td><td className="p-2 text-right text-slate-600">Precise loop flow control</td></tr>
              <tr><td className="p-2 font-semibold">8. Errors and Debugging</td><td className="p-2 text-right text-slate-600">Locate & fix bugs systematically</td></tr>
              <tr className="bg-purple-50/50 font-bold"><td className="p-2">9. Practical Problem-Solving</td><td className="p-2 text-right text-purple-800">Combine concepts into real projects</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* FINAL PRACTICE CHALLENGE */}
      <div ref={secChallengeRef} className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200 shadow-sm space-y-3">
        <h4 className="font-bold text-amber-900 text-base flex items-center gap-2">
          <span>🎯</span> {isHi ? 'फाइनल Challenge: 5 छात्रों का मार्क्स विश्लेषक' : 'Final Challenge: 5 Students Marks Analyzer'}
        </h4>
        <p className="text-xs md:text-sm text-slate-700">
          {isHi
            ? 'एक ऐसा Program बनाएं जो 5 छात्रों के मार्क्स Input ले, 0–100 के बाहर होने पर अस्वीकार करे, कुल व औसत निकाले, और गिने कि कितने छात्र पास हुए (>= 40)।'
            : 'Build a program prompting 5 student scores, rejecting values outside 0–100, calculating total/average, and counting passing students.'}
        </p>
      </div>

      {/* CONGRATULATIONS & NEXT MODULE PREVIEW */}
      <div ref={secCongratulationsRef} className="p-6 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-xl space-y-3 text-center">
        <div className="text-4xl animate-bounce">🎉</div>
        <h3 className="font-extrabold text-xl md:text-2xl text-amber-300">
          {isHi ? 'बधाई हो! Module 5 पूर्ण हुआ' : 'Congratulations! You Completed Module 5'}
        </h3>
        <p className="text-xs md:text-sm text-purple-200 max-w-xl mx-auto">
          {isHi
            ? 'अब आप Python में निर्णय लेना (Conditions), Code दोहराना (Loops) और Data का विश्लेषण करना सीख चुके हैं।'
            : 'You now master decision-making, looping constructs, and foundational data aggregation logic in Python.'}
        </p>
        <div className="pt-2">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-800/80 border border-purple-400 text-amber-300 font-semibold text-xs">
            {isHi ? 'अगला Module: Python Collections and Strings 📦' : 'Next Module: Python Collections and Strings 📦'}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Topic32ProblemSolvingProjectsLesson;
