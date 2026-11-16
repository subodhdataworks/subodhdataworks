import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic65VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic65HandlingMissingValuesLesson: React.FC<Topic65VisualLessonProps> = ({
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
  const secIsnaSumRef = useRef<HTMLDivElement>(null);
  const secDropnaFillnaRef = useRef<HTMLDivElement>(null);
  const secMedianImputationRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec65-title': secTitleRef,
      'sec65-concept': secConceptRef,
      'sec65-isna-sum': secIsnaSumRef,
      'sec65-dropna-fillna': secDropnaFillnaRef,
      'sec65-median-imputation': secMedianImputationRef,
      'sec65-takeaway': secTakeawayRef,
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
      className="topic65-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={9}
        moduleName="Pandas for Data Analysis"
        topicNum={8}
        totalTopicsInModule={13}
        englishTitle="Handling Missing Values (NaN & None)"
        hindiTitle="Handling Missing Values (NaN & None)"
        subtitleEnglish="Missing values overview"
        subtitleHindi="Missing values overview"
        emoji="🩹"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec65-title'}
        sectionRef={secTitleRef}
        sectionId="sec65-title"
      />

      {/* Concept: What is Missing Value */}
      <div ref={secConceptRef} id="sec65-concept" className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>🔍</span>
          {currentLang === 'english' ? 'What Are Missing Values in Pandas?' : 'Pandas में Missing Values क्या होते हैं?'}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
            <h3 className="font-bold text-[#7045E8] mb-2">NaN (Not a Number)</h3>
            <p className="text-sm text-slate-600">
              {currentLang === 'english'
                ? 'Standard floating-point representation for missing numerical values in Pandas (inherited from NumPy np.nan).'
                : 'न्यूमेरिकल Columns में खाली जगह को Pandas `NaN` (np.nan) के रूप में दिखाता है। इसका Data Type float होता है।'}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
            <h3 className="font-bold text-[#7045E8] mb-2">None &amp; NaT</h3>
            <p className="text-sm text-slate-600">
              {currentLang === 'english'
                ? 'None represents missing Python object/string values. NaT (Not a Time) represents missing dates and timestamps.'
                : 'None टेक्स्ट/Object Data के लिए होता है और NaT (Not a Time) छूटी हुई डेट और टाइम Values के लिए उपयोग होता है।'}
            </p>
          </div>
        </div>
      </div>

      {/* Detection with isna() and sum() */}
      <div ref={secIsnaSumRef} id="sec65-isna-sum" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>🔎</span>
          {currentLang === 'english' ? '1. Detecting Missing Values: isna() and isna().sum()' : '1. Missing Values ढूँढना: isna() और isna().sum()'}
        </h2>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-sm leading-relaxed overflow-x-auto shadow-sm">
          <p className="text-emerald-400 font-semibold mb-2"># Step 1: Detect True/False matrix &amp; count per column</p>
          <pre>{`import pandas as pd
import numpy as np

data = {
    "Name": ["Aman", "Riya", "Karan", "Pooja"],
    "Age": [24, np.nan, 28, np.nan],
    "City": ["Delhi", "Mumbai", None, "Bangalore"],
    "Salary": [50000, 62000, np.nan, 71000]
}
df = pd.DataFrame(data)

# 1. Total missing values in each column
print(df.isna().sum())
# Output:
# Name      0
# Age       2
# City      1
# Salary    1
# dtype: int64

# 2. Percentage of missing values
print((df.isna().sum() / len(df)) * 100)`}</pre>
        </div>
      </div>

      {/* dropna() vs fillna() */}
      <div ref={secDropnaFillnaRef} id="sec65-dropna-fillna" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>⚖️</span>
          {currentLang === 'english' ? '2. Removing vs Imputing: dropna() vs fillna()' : '2. हटाना या भरना: dropna() बनाम fillna()'}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-purple-200 bg-purple-50/50 p-5 rounded-2xl space-y-3">
            <h3 className="font-bold text-[#4C2A9A] text-base">🗑️ dropna() — Drop Missing Rows</h3>
            <p className="text-xs text-slate-600">
              {currentLang === 'english'
                ? 'Deletes entire rows containing nulls. Use only when missing data is tiny (< 2%) or when critical IDs are missing.'
                : 'पूरी Row को हटा देता है। केवल तभी use करें जब missing data 1-2% से कम हो या महत्वपूर्ण ID गायब हो।'}
            </p>
            <div className="bg-slate-900 text-slate-100 p-3 rounded-xl font-mono text-xs">
              <pre>{`# Drop rows with ANY missing value
df_clean = df.dropna()

# Drop only if specific column is NaN
df_clean = df.dropna(subset=["Age"])`}</pre>
            </div>
          </div>

          <div className="border border-purple-200 bg-purple-50/50 p-5 rounded-2xl space-y-3">
            <h3 className="font-bold text-[#4C2A9A] text-base">🩹 fillna() — Impute Values</h3>
            <p className="text-xs text-slate-600">
              {currentLang === 'english'
                ? 'Replaces missing values with a constant, mean, median, or placeholder. Prevents loss of other valid row columns.'
                : 'खाली जगहों को किसी संख्या या डिफ़ॉल्ट टेक्स्ट से भरता है। इससे बाकी सही Data सुरक्षित रहता है।'}
            </p>
            <div className="bg-slate-900 text-slate-100 p-3 rounded-xl font-mono text-xs">
              <pre>{`# Fill text with 'Unknown'
df["City"] = df["City"].fillna("Unknown")

# Fill constant number
df["Bonus"] = df["Bonus"].fillna(0)`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Median/Mean Imputation */}
      <div ref={secMedianImputationRef} id="sec65-median-imputation" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>📊</span>
          {currentLang === 'english' ? '3. Best Practice: Statistical Imputation (Mean vs Median vs Mode)' : '3. बेस्ट प्रैक्टिस: Mean vs Median vs Mode से भरना'}
        </h2>
        <div className="border border-purple-200 rounded-2xl p-5 space-y-4 bg-white shadow-sm">
          <p className="text-sm text-slate-700">
            {currentLang === 'english'
              ? 'Never blindly replace numbers with 0! If Age is replaced with 0, average age becomes distorted. Use median if outliers exist, mean if normally distributed, and mode for categories.'
              : 'कभी भी बिना सोचे समझे 0 से न भरें! अगर Age को 0 कर देंगे, तो औसत उम्र बिगड़ जाएगी। अगर Data में बड़े आउटलायर्स हों तो Median, सामान्य Data में Mean, और कैटेगरी/टेक्स्ट में Mode का प्रयोग करें।'}
          </p>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-sm">
            <pre>{`# 1. Fill numeric Age with MEDIAN (robust to outliers)
median_age = df["Age"].median()
df["Age"] = df["Age"].fillna(median_age)

# 2. Fill Salary with MEAN
mean_salary = df["Salary"].mean()
df["Salary"] = df["Salary"].fillna(mean_salary)

# 3. Fill Categorical City with MODE (most frequent)
mode_city = df["City"].mode()[0]
df["City"] = df["City"].fillna(mode_city)`}</pre>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div ref={secTakeawayRef} id="sec65-takeaway" className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-3">
        <h3 className="text-lg font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>💡</span>
          {currentLang === 'english' ? 'Summary & Best Practices' : 'सारांश और मुख्य नियम'}
        </h3>
        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1.5">
          <li>
            <strong>df.isna().sum()</strong>: Always your first diagnostic tool upon loading any new dataset.
          </li>
          <li>
            <strong>Drop vs Impute Rule</strong>: If missing column data is &gt; 50% and useless, drop column. If &lt; 5%, drop rows or impute.
          </li>
          <li>
            <strong>Avoid 0 for Age/Price</strong>: Impute numerical metrics using <code>median()</code> or <code>mean()</code> to preserve distribution.
          </li>
        </ul>
      </div>
    </div>
  );
};
