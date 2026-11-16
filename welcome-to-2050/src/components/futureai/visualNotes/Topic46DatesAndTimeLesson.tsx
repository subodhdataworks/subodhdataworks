import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic46VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic46DatesAndTimeLesson: React.FC<Topic46VisualLessonProps> = ({
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
  const secTodayCreateRef = useRef<HTMLDivElement>(null);
  const secFormatParseRef = useRef<HTMLDivElement>(null);
  const secDateDiffTimedeltaRef = useRef<HTMLDivElement>(null);
  const secDeliveryDelayRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec46-title': secTitleRef,
      'sec46-concept': secConceptRef,
      'sec46-today-create': secTodayCreateRef,
      'sec46-format-parse': secFormatParseRef,
      'sec46-datediff-timedelta': secDateDiffTimedeltaRef,
      'sec46-delivery-delay': secDeliveryDelayRef,
      'sec46-takeaway': secTakeawayRef,
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
      className="topic46-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={7}
        moduleName="Functions, Modules & Files"
        topicNum={6}
        totalTopicsInModule={9}
        englishTitle="Working with Dates and Time"
        hindiTitle="Working with Dates and Time"
        subtitleEnglish="Working with Dates & Time in Python"
        subtitleHindi="Working with Dates & Time in Python"
        emoji="⏰"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec46-title'}
        sectionRef={secTitleRef}
        sectionId="sec46-title"
      />

      {/* Section 1: Concept */}
      <div ref={secConceptRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'तारीखें (Dates) Data Analytics में क्यों महत्वपूर्ण हैं?' : 'Why Dates Matter in Business Analytics'}</h3>
        </div>
        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'हर बिज़नेस Dataset में तारीखें होती हैं: Order डेट, पेमेंट डेट, जॉइनिंग डेट, और डिलीवरी डेट। दो तारीखों का अंतर निकाल कर डिले और टर्नअराउंड टाइम (TAT) मापा जाता है।'
            : 'Order dates, payment cycles, attendance, delivery SLAs. Subtracting timestamps evaluates business operational delays and performance.'}
        </p>
      </div>

      {/* Section 2: Getting Today & Creating Specific Date */}
      <div ref={secTodayCreateRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            02
          </div>
          <h3>{isHi ? 'आज की तारीख और कस्टम डेट बनाना' : 'Creating & Inspecting Dates'}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <pre className="bg-slate-900 text-purple-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
{`from datetime import date

# 1. Today's date:
today = date.today()
print("Today:", today)

# 2. Specific date: date(YYYY, MM, DD)
joining = date(2026, 1, 15)
print(joining.year)  # 2026
print(joining.month) # 1
print(joining.day)   # 15`}
          </pre>

          <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 space-y-2 text-xs">
            <span className="font-bold text-purple-900 block">date(year, month, day)</span>
            <p className="text-slate-600">
              क्रम याद रखें: पहले 4 अंकों का वर्ष, फिर महीना, फिर दिन। <code>joining.year</code> आदि से अलग-अलग हिस्से निकाले जा सकते हैं।
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: strftime (Format) vs strptime (Parse) */}
      <div ref={secFormatParseRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            03
          </div>
          <h3>{isHi ? 'strftime() (Format) बनाम strptime() (पार्स)' : 'strftime() vs strptime()'}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <div className="p-4 bg-indigo-50/70 rounded-xl border border-indigo-200 space-y-2">
            <span className="font-bold text-indigo-900 font-sans block text-sm">
              1. strftime() ➔ Date से String
            </span>
            <code className="block bg-slate-900 text-indigo-300 p-2.5 rounded">
              today = date(2026, 11, 9)<br />
              fmt = today.strftime("%d-%m-%Y")<br />
              print(fmt) # "09-11-2026"
            </code>
            <p className="font-sans text-[11px] text-slate-600">स्क्रीन पर सुंदर तारीख दिखाने के लिए।</p>
          </div>

          <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-2">
            <span className="font-bold text-emerald-900 font-sans block text-sm">
              2. strptime() ➔ String से Date
            </span>
            <code className="block bg-slate-900 text-emerald-300 p-2.5 rounded">
              text = "15-08-2026"<br />
              dt = datetime.strptime(text, "%d-%m-%Y")<br />
              print(dt.date()) # 2026-08-15
            </code>
            <p className="font-sans text-[11px] text-slate-600">Customer Input टेक्स्ट को असली तारीख बनाने के लिए।</p>
          </div>
        </div>
      </div>

      {/* Section 4: Date Differences & timedelta */}
      <div ref={secDateDiffTimedeltaRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            04
          </div>
          <h3>{isHi ? 'तारीखों का अंतर और timedelta' : 'Date Differences & timedelta Duration'}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <pre className="bg-slate-900 text-purple-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
{`from datetime import date

start = date(2026, 1, 1)
end = date(2026, 1, 11)

difference = end - start
print(difference.days) # 10 Days`}
          </pre>

          <pre className="bg-slate-900 text-indigo-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
{`from datetime import date, timedelta

order_date = date(2026, 11, 1)
# 5 दिन बाद की डिलीवरी तारीख:
delivery = order_date + timedelta(days=5)
print(delivery) # 2026-11-06`}
          </pre>
        </div>
      </div>

      {/* Section 5: Real-Life Delivery Delay Case Study */}
      <div ref={secDeliveryDelayRef} className="bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 rounded-2xl p-6 border border-purple-200 shadow-sm space-y-3">
        <h4 className="font-bold text-purple-900 text-sm md:text-base flex items-center gap-2">
          <span>🚚</span> {isHi ? 'रियल-लाइफ केस: Order डिलीवरी डिले Calculation' : 'Real-Life Case: Order Delivery Delay Metric'}
        </h4>
        <pre className="bg-slate-900 text-emerald-300 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`from datetime import date

expected = date(2026, 11, 5)
actual = date(2026, 11, 8)

delay = (actual - expected).days

if delay > 0:
    print("Delayed by", delay, "days") # Delayed by 3 days
else:
    print("Delivered on time or early")`}
        </pre>
      </div>

      {/* Section 6: Key Takeaway */}
      <div ref={secTakeawayRef} className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg space-y-2 text-center">
        <h4 className="font-bold text-base md:text-lg text-amber-300">
          💡 {isHi ? 'मुख्य सीख (Key Takeaway)' : 'Key Takeaway'}
        </h4>
        <p className="text-xs md:text-sm text-purple-200 max-w-2xl mx-auto">
          {isHi
            ? 'तारीखों को String के बजाय हमेशा date Object में रखें। दो तारीखों को सीधे घटाकर दिन निकाले जा सकते हैं और timedelta जोड़कर भविष्य की तारीखें पाई जा सकती हैं।'
            : 'Treat dates as native date objects rather than plain text. Subtracting dates extracts day spans directly, and timedelta projects future deadlines.'}
        </p>
      </div>
    </div>
  );
};
export default Topic46DatesAndTimeLesson;
