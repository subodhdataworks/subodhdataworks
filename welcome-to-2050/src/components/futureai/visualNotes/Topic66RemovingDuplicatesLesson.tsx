import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic66VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic66RemovingDuplicatesLesson: React.FC<Topic66VisualLessonProps> = ({
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
  const secDetectSumRef = useRef<HTMLDivElement>(null);
  const secDropDuplicatesRef = useRef<HTMLDivElement>(null);
  const secSubsetKeepRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec66-title': secTitleRef,
      'sec66-concept': secConceptRef,
      'sec66-detect-sum': secDetectSumRef,
      'sec66-drop-duplicates': secDropDuplicatesRef,
      'sec66-subset-keep': secSubsetKeepRef,
      'sec66-takeaway': secTakeawayRef,
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
      className="topic66-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={9}
        moduleName="Pandas for Data Analysis"
        topicNum={9}
        totalTopicsInModule={13}
        englishTitle="Removing Duplicates"
        hindiTitle="Removing Duplicates"
        subtitleEnglish="Duplicate data elimination"
        subtitleHindi="Duplicate data elimination"
        emoji="🧹"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec66-title'}
        sectionRef={secTitleRef}
        sectionId="sec66-title"
      />

      {/* Concept: Why Duplicates Happen */}
      <div ref={secConceptRef} id="sec66-concept" className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>👥</span>
          {currentLang === 'english' ? 'Why Do Duplicates Occur in Real Datasets?' : 'Data में डुप्लिकेट क्यों आते हैं?'}
        </h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-600">
          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
            <span className="font-bold text-[#7045E8] block mb-1">1. User Submissions</span>
            Customer clicks "Submit" twice due to slow internet connection.
          </div>
          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
            <span className="font-bold text-[#7045E8] block mb-1">2. Data Pipeline Merges</span>
            Merging daily CSV logs without primary key deduplication.
          </div>
          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
            <span className="font-bold text-[#7045E8] block mb-1">3. System Retries</span>
            Automated webhook / API triggers sending repeat payload packets.
          </div>
        </div>
      </div>

      {/* Detect duplicates */}
      <div ref={secDetectSumRef} id="sec66-detect-sum" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>🔍</span>
          {currentLang === 'english' ? '1. Detecting Duplicates with duplicated()' : '1. duplicated() से डुप्लिकेट चेक करना'}
        </h2>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-sm leading-relaxed overflow-x-auto shadow-sm">
          <p className="text-emerald-400 font-semibold mb-2"># Step 1: Detect total count and preview repeating rows</p>
          <pre>{`import pandas as pd

data = {
    "OrderID": [101, 102, 103, 102, 104],
    "Customer": ["Aman", "Riya", "Karan", "Riya", "Pooja"],
    "Amount": [500, 1200, 800, 1200, 350]
}
df = pd.DataFrame(data)

# 1. Total count of duplicate rows
num_duplicates = df.duplicated().sum()
print("Total duplicate rows:", num_duplicates)  # Output: 1

# 2. View which rows are duplicated
print(df[df.duplicated(keep=False)])
# Output shows both original and repeated row for OrderID 102`}</pre>
        </div>
      </div>

      {/* drop_duplicates() */}
      <div ref={secDropDuplicatesRef} id="sec66-drop-duplicates" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>🧹</span>
          {currentLang === 'english' ? '2. Removing Exact Row Duplicates: drop_duplicates()' : '2. पूरी Row के डुप्लिकेट हटाना: drop_duplicates()'}
        </h2>
        <div className="border border-purple-200 rounded-2xl p-5 space-y-4 bg-white shadow-sm">
          <p className="text-sm text-slate-700">
            {currentLang === 'english'
              ? 'By default, drop_duplicates() checks every single column across the row and retains the first occurrence.'
              : 'डिफ़ॉल्ट रूप से drop_duplicates() सभी Columns की जाँच करता है और पहली Row को रखकर बाकी डुप्लिकेट्स को हटा देता है।'}
          </p>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-sm">
            <pre>{`# Remove duplicates and reset row index
df_clean = df.drop_duplicates().reset_index(drop=True)

print("Original rows:", len(df))        # 5
print("Clean rows:", len(df_clean))     # 4`}</pre>
          </div>
        </div>
      </div>

      {/* Subset and keep parameter */}
      <div ref={secSubsetKeepRef} id="sec66-subset-keep" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>⚙️</span>
          {currentLang === 'english' ? '3. Advanced: subset and keep Parameters' : '3. एडवांस: subset और keep Parameters'}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-purple-200 bg-purple-50/50 p-5 rounded-2xl space-y-3">
            <h3 className="font-bold text-[#4C2A9A] text-base">🎯 subset=['Column']</h3>
            <p className="text-xs text-slate-600">
              {currentLang === 'english'
                ? 'Check uniqueness on specific primary key column(s) even if other columns differ.'
                : 'किसी विशिष्ट Column (जैसे OrderID या Email) के आधार पर डुप्लिकेट चेक करें।'}
            </p>
            <div className="bg-slate-900 text-slate-100 p-3 rounded-xl font-mono text-xs">
              <pre>{`# Ensure each OrderID is unique
df.drop_duplicates(
    subset=["OrderID"], 
    inplace=True
)`}</pre>
            </div>
          </div>

          <div className="border border-purple-200 bg-purple-50/50 p-5 rounded-2xl space-y-3">
            <h3 className="font-bold text-[#4C2A9A] text-base">⏱️ keep='first' | 'last' | False</h3>
            <p className="text-xs text-slate-600">
              {currentLang === 'english'
                ? 'keep="first" keeps earliest, "last" keeps the latest update, False removes ALL matching rows.'
                : 'keep="first" पहला रिकॉर्ड रखता है, "last" सबसे नया, और False सभी डुप्लिकेट्स को DELETE कर देता है।'}
            </p>
            <div className="bg-slate-900 text-slate-100 p-3 rounded-xl font-mono text-xs">
              <pre>{`# Keep the most recently updated entry
df.drop_duplicates(
    subset=["OrderID"], 
    keep="last"
)`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div ref={secTakeawayRef} id="sec66-takeaway" className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-3">
        <h3 className="text-lg font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>💡</span>
          {currentLang === 'english' ? 'Production Tip' : 'इंडस्ट्री प्रोडक्शन टिप'}
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed">
          {currentLang === 'english'
            ? 'Always run .reset_index(drop=True) after dropping duplicates! Otherwise, your DataFrame will have missing index gaps (e.g. 0, 1, 3, 4), which can cause slicing and indexing bugs later.'
            : 'डुप्लिकेट्स हटाने के बाद हमेशा `.reset_index(drop=True)` लगाएँ! अन्यथा Index में गैप (जैसे 0, 1, 3, 4) रह जाता है, जिससे आगे चलकर Indexing में Error आ सकती है।'}
        </p>
      </div>
    </div>
  );
};
