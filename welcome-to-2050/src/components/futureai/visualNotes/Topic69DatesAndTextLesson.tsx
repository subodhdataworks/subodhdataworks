import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic69VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic69DatesAndTextLesson: React.FC<Topic69VisualLessonProps> = ({
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
  const secDatetimeDtRef = useRef<HTMLDivElement>(null);
  const secTimedeltaDiffRef = useRef<HTMLDivElement>(null);
  const secStrCleaningRef = useRef<HTMLDivElement>(null);
  const secStrContainsReplaceRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec69-title': secTitleRef,
      'sec69-datetime-dt': secDatetimeDtRef,
      'sec69-timedelta-diff': secTimedeltaDiffRef,
      'sec69-str-cleaning': secStrCleaningRef,
      'sec69-str-contains-replace': secStrContainsReplaceRef,
      'sec69-takeaway': secTakeawayRef,
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
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [activeSectionId, onScrollSettled, onSectionRectChange]);

  const handleLanguageToggle = (lang: 'hindi' | 'english') => {
    setCurrentLang(lang);
    if (onLanguageChange) onLanguageChange(lang);
  };

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily: "'Comic Neue', 'Fredoka', 'Quicksand', 'Chalkboard SE', 'Comic Sans MS', cursive, sans-serif",
      }}
      className="topic69-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={9}
        moduleName="Pandas for Data Analysis"
        topicNum={12}
        totalTopicsInModule={13}
        englishTitle="Dates and Text in Pandas"
        hindiTitle="Dates and Text in Pandas"
        subtitleEnglish="Datetime and string manipulation"
        subtitleHindi="Datetime and string manipulation"
        emoji="🗓️"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec69-title'}
        sectionRef={secTitleRef}
        sectionId="sec69-title"
      />

      {/* Datetime Conversion & .dt accessor */}
      <div ref={secDatetimeDtRef} id="sec69-datetime-dt" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>📅</span>
          {currentLang === 'english' ? '1. Converting to Datetime & the .dt Accessor' : '1. Datetime में बदलना और .dt Accessor'}
        </h2>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-sm leading-relaxed overflow-x-auto shadow-sm">
          <p className="text-emerald-400 font-semibold mb-2"># Convert text dates into true datetime objects</p>
          <pre>{`import pandas as pd

df = pd.DataFrame({
    "OrderID": [101, 102, 103],
    "OrderDate": ["2026-01-15", "2026-02-20", "2026-03-08"]
})

# Convert string column to Datetime
df["OrderDate"] = pd.to_datetime(df["OrderDate"])

# Extract Year, Month, Day, and Day Name using .dt
df["Year"] = df["OrderDate"].dt.year
df["Month"] = df["OrderDate"].dt.month_name()
df["DayOfWeek"] = df["OrderDate"].dt.day_name()

print(df)`}</pre>
        </div>
      </div>

      {/* Timedelta & Date Differences */}
      <div ref={secTimedeltaDiffRef} id="sec69-timedelta-diff" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>⏳</span>
          {currentLang === 'english' ? '2. Date Arithmetic & Delivery Duration' : '2. तारीखों का घटाव और डिलीवरी समय'}
        </h2>
        <div className="border border-purple-200 rounded-2xl p-5 space-y-4 bg-white shadow-sm">
          <p className="text-sm text-slate-700">
            {currentLang === 'english'
              ? 'Subtracting two datetime columns produces a Timedelta Series. You can extract days, hours, or minutes directly using .dt.days.'
              : 'दो तारीखों को घटाने पर Timedelta मिलता है। `.dt.days` से आप डिलीवरी में लगे कुल दिन निकाल सकते हैं।'}
          </p>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-sm">
            <pre>{`df["ShippedDate"] = pd.to_datetime(["2026-01-18", "2026-02-25", "2026-03-09"])

# Calculate delivery turnaround time in days
df["DaysToDeliver"] = (df["ShippedDate"] - df["OrderDate"]).dt.days
print(df[["OrderID", "DaysToDeliver"]])`}</pre>
          </div>
        </div>
      </div>

      {/* Text Cleaning with .str */}
      <div ref={secStrCleaningRef} id="sec69-str-cleaning" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>🔤</span>
          {currentLang === 'english' ? '3. Text Normalization with .str Accessor' : '3. .str से टेक्स्ट को क्लीन और नॉर्मलाइज़ करना'}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-purple-200 bg-purple-50/50 p-4 rounded-xl space-y-2">
            <h4 className="font-bold text-[#4C2A9A] text-sm">strip() &amp; title()</h4>
            <p className="text-xs text-slate-600">Remove spaces and standardize capitalization (e.g., "  mumbai " → "Mumbai").</p>
            <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono text-xs">
              <pre>{`df["City"] = df["City"].str.strip().str.title()`}</pre>
            </div>
          </div>
          <div className="border border-purple-200 bg-purple-50/50 p-4 rounded-xl space-y-2">
            <h4 className="font-bold text-[#4C2A9A] text-sm">lower() &amp; replace()</h4>
            <p className="text-xs text-slate-600">Clean emails or strip currency symbols (e.g., "$120" → "120").</p>
            <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono text-xs">
              <pre>{`df["Price"] = df["Price"].str.replace("$", "").astype(float)`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* str.contains() */}
      <div ref={secStrContainsReplaceRef} id="sec69-str-contains-replace" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>🔍</span>
          {currentLang === 'english' ? '4. Pattern Searching with .str.contains()' : '4. .str.contains() से Keyword Filter करना'}
        </h2>
        <div className="border border-purple-200 rounded-2xl p-5 space-y-4 bg-[#FAF8FF]">
          <p className="text-sm text-slate-700">
            {currentLang === 'english'
              ? 'Find all rows where a string contains a specific word or keyword, ignoring case sensitivity.'
              : 'किसी Column में विशेष शब्द ढूँढने के लिए `.str.contains("word", case=False, na=False)` का उपयोग करें।'}
          </p>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-sm">
            <pre>{`# Find all products containing "pro" (e.g. "MacBook Pro", "iPad Pro")
pro_devices = df[df["Product"].str.contains("pro", case=False, na=False)]
print(pro_devices)`}</pre>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div ref={secTakeawayRef} id="sec69-takeaway" className="bg-purple-50 border border-purple-200 rounded-2xl p-6 space-y-3">
        <h3 className="text-lg font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>💡</span>
          {currentLang === 'english' ? 'Analyst Rules of Thumb' : 'Analysts के लिए मुख्य नियम'}
        </h3>
        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1.5">
          <li>
            Always convert date columns on import or use <code>parse_dates=["OrderDate"]</code> in <code>pd.read_csv()</code>.
          </li>
          <li>
            Use <code>errors="coerce"</code> with <code>pd.to_datetime()</code> to turn invalid dates into <code>NaT</code> rather than crashing your script.
          </li>
          <li>
            Always chain <code>.str.strip()</code> on categorical text columns before running <code>groupby()</code> or joins to avoid phantom categories due to whitespace.
          </li>
        </ul>
      </div>
    </div>
  );
};
