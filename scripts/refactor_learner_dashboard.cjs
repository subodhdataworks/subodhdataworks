const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../welcome-to-2050/src/components/futureai/LearnerDashboard.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove mobile imports
content = content.replace(/import\s*\{\s*MobileProfileSheet\s*\}\s*from\s*['"]\.\/mobile\/MobileProfileSheet['"];?\r?\n?/, '');
content = content.replace(/import\s*\{\s*MobileDashboardHome\s*\}\s*from\s*['"]\.\/mobile\/MobileDashboardHome['"];?\r?\n?/, '');
content = content.replace(/import\s*\{\s*MobilePlacementHub\s*\}\s*from\s*['"]\.\/mobile\/MobilePlacementHub['"];?\r?\n?/, '');
content = content.replace(/import\s*\{\s*MobilePythonChapterView\s*\}\s*from\s*['"]\.\/mobile\/MobilePythonChapterView['"];?\r?\n?/, '');
content = content.replace(/import\s*\{\s*MobileTopicWorkspace\s*\}\s*from\s*['"]\.\/mobile\/MobileTopicWorkspace['"];?\r?\n?/, '');
content = content.replace(/import\s*\{\s*MobileSqlChapterView\s*\}\s*from\s*['"]\.\/mobile\/MobileSqlChapterView['"];?\r?\n?/, '');
content = content.replace(/import\s*\{\s*MobileGameArenaHub\s*\}\s*from\s*['"]\.\/mobile\/MobileGameArenaHub['"];?\r?\n?/, '');
content = content.replace(/import\s*\{\s*MobileDataAnalystHub\s*\}\s*from\s*['"]\.\/mobile\/MobileDataAnalystHub['"];?\r?\n?/, '');

// 2. Remove isMobileSizeTesting / mobileTestingFrame / isMobileViewport / isMobileScreen
const mobileStateRegex = /\s*\/\/ ── Responsive Testing Frame & Mobile Viewport Detection ──[\s\S]*?return \(\) => \{\s*window\.removeEventListener\('hashchange', handleCheckMobileParam\);\s*window\.removeEventListener\('popstate', handleCheckMobileParam\);\s*\};\s*\}, \[\]\);/;
content = content.replace(mobileStateRegex, '');

// Also remove setMobileProfileSheetOpen state
content = content.replace(/\s*const \[mobileProfileSheetOpen, setMobileProfileSheetOpen\] = useState\(false\);/, '');

// 3. Clean up python_intro_game return block
const introGameRegex = /\{\/\* Mobile \(< 768px\): Native Android Mobile Game Arena Hub \*\/\}\s*<div className="md:hidden min-h-screen bg-slate-50">[\s\S]*?<\/div>\s*\{\/\* Desktop \(>= 768px\): Full 2050 Game Workspace \*\/\}\s*<div className="hidden md:block py-intro-game-view-container">/;
content = content.replace(introGameRegex, '<div className="py-intro-game-view-container">');

// 4. Clean up python workspace block
const pythonWsRegex = /if \(selectedModuleView === 'python'\) \{\s*if \(mobileTestingFrame\) \{[\s\S]*?return \(\s*<div className="relative dock-dashboard-page">[\s\S]*?<PythonTopicWorkspace/;
const pythonWsReplacement = `if (selectedModuleView === 'python') {
    return (
      <div className="relative dock-dashboard-page">
        <PythonTopicWorkspace`;
content = content.replace(pythonWsRegex, pythonWsReplacement);

// 5. Clean up sql chapter view block
const sqlBlockRegex = /\{\/\* ─── TAB: SQL COURSE CHAPTER VIEW ─── \*\/\}\s*\{dockTab === 'home' && selectedModuleView === 'sql' && \(\s*<div className="col-span-full">\s*<div className="md:hidden min-h-screen bg-slate-50">[\s\S]*?<\/div>\s*<div className="hidden md:block">\s*(<SqlChapterView[\s\S]*?\/>)\s*<\/div>\s*<\/div>\s*\)\}/;
content = content.replace(sqlBlockRegex, `{/* ─── TAB: SQL COURSE CHAPTER VIEW ─── */}
        {dockTab === 'home' && selectedModuleView === 'sql' && (
          <div className="col-span-full">
            $1
          </div>
        )}`);

// 6. Clean up data analyst sub-hub block
const daBlockRegex = /\{\/\* ─── COURSE 01 SUB-HUB: DATA ANALYST WITH GENAI \(6 MODULES\) \(#data-analyst\) ─── \*\/\}\s*\{dockTab === 'home' && selectedModuleView === 'data_analyst' && \(\s*<div className="col-span-full">\s*\{\/\* Native Android Mobile Feed \(< 768px\): Data Analyst with GenAI 9-Module Hub \*\/\}\s*<div className="md:hidden">[\s\S]*?<\/div>\s*\{\/\* Desktop Experience \(>= 768px\) - 1:1 Reference Match Hub \*\/\}\s*<div className="hidden md:block">\s*(<DataAnalystGenAiHub[\s\S]*?\/>)\s*<\/div>\s*<\/div>\s*\)\}/;
content = content.replace(daBlockRegex, `{/* ─── COURSE 01 SUB-HUB: DATA ANALYST WITH GENAI (6 MODULES) (#data-analyst) ─── */}
        {dockTab === 'home' && selectedModuleView === 'data_analyst' && (
          <div className="col-span-full">
            $1
          </div>
        )}`);

// 7. Clean up home student courses dashboard block
const homeBlockRegex = /\{\/\* ─── TAB 1: TOP-LEVEL 4-COURSE STUDENT DASHBOARD \(#dashboard\) ─── \*\/\}\s*\{dockTab === 'home' && selectedModuleView === null && \(\s*<div className="col-span-full">\s*\{\/\* Native Android Mobile Dashboard Feed \(< 768px\) \*\/\}\s*<div className="md:hidden">[\s\S]*?<\/div>\s*\{\/\* Desktop Courses Dashboard \(>= 768px\) \*\/\}\s*<div className="hidden md:block">\s*(<StudentCoursesDashboard[\s\S]*?\/>)\s*<\/div>\s*<\/div>\s*\)\}/;
content = content.replace(homeBlockRegex, `{/* ─── TAB 1: TOP-LEVEL 4-COURSE STUDENT DASHBOARD (#dashboard) ─── */}
        {dockTab === 'home' && selectedModuleView === null && (
          <div className="col-span-full">
            $1
          </div>
        )}`);

// 8. Remove bottom MobileProfileSheet
const bottomSheetRegex = /\{\/\* Android Mobile Profile Bottom Sheet Dialog \*\/\}\s*<MobileProfileSheet[\s\S]*?\/>/;
content = content.replace(bottomSheetRegex, '');

fs.writeFileSync(filePath, content, 'utf8');
console.log('LearnerDashboard.tsx updated successfully!');
