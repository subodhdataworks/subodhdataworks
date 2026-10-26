import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const srcRoot = path.join(projectRoot, 'src');

let passed = 0;
function check(label, condition, detail = '') {
  assert.ok(condition, `${label}${detail ? ` — ${detail}` : ''}`);
  passed++;
  console.log(`  ✓ ${label}`);
}

console.log('\n=== 1. Verify Old Android/Mobile Implementation Removed ===');

const deletedPaths = [
  'src/components/futureai/mobile',
  'src/components/futureai/mobile/MobileAffiliateEarningsHub.tsx',
  'src/components/futureai/mobile/MobileAppInstallPrompt.tsx',
  'src/components/futureai/mobile/MobileBottomNav.tsx',
  'src/components/futureai/mobile/MobileDashboardHome.tsx',
  'src/components/futureai/mobile/MobileDataAnalystHub.tsx',
  'src/components/futureai/mobile/MobileExcelChapterView.tsx',
  'src/components/futureai/mobile/MobileGameArenaHub.tsx',
  'src/components/futureai/mobile/MobileHomeCoursesGrid.tsx',
  'src/components/futureai/mobile/MobilePlacementHub.tsx',
  'src/components/futureai/mobile/MobileProfileSheet.tsx',
  'src/components/futureai/mobile/MobilePythonChapterView.tsx',
  'src/components/futureai/mobile/MobileSqlChapterView.tsx',
  'src/components/futureai/mobile/MobileTopBar.tsx',
  'src/components/futureai/mobile/MobileTopicWorkspace.tsx',
  'src/components/navigation/MobileBottomNav.tsx',
  'src/services/pwaInstallService.ts',
];

for (const rel of deletedPaths) {
  check(
    `Removed obsolete file/dir: ${rel}`,
    !fs.existsSync(path.join(projectRoot, rel))
  );
}

console.log('\n=== 2. Verify Zero References to Legacy Mobile Components Across Codebase ===');

function getAllSourceFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllSourceFiles(full, acc);
    } else if (/\.(tsx?|css|mjs|js)$/.test(entry.name)) {
      acc.push(full);
    }
  }
  return acc;
}

const allSrcFiles = getAllSourceFiles(srcRoot);
const forbiddenTokens = [
  './mobile/',
  'MobileDashboardHome',
  'MobileDataAnalystHub',
  'MobileTopicWorkspace',
  'MobileAffiliateEarningsHub',
  'MobileGameArenaHub',
  'MobilePythonChapterView',
  'MobileSqlChapterView',
  'MobileExcelChapterView',
  'MobileAppInstallPrompt',
  'MobileProfileSheet',
  'MobilePlacementHub',
  'pwaInstallService',
  'Test in Mobile View (390px)',
];

for (const token of forbiddenTokens) {
  const offending = allSrcFiles.filter((f) => fs.readFileSync(f, 'utf8').includes(token));
  check(
    `Zero occurrences of "${token}" in src/`,
    offending.length === 0,
    offending.map((f) => path.relative(projectRoot, f)).join(', ')
  );
}

console.log('\n=== 3. Verify Live Desktop Website Is Single Source of Truth ===');

const learnerDashboard = fs.readFileSync(
  path.join(srcRoot, 'components/futureai/LearnerDashboard.tsx'),
  'utf8'
);
check(
  'LearnerDashboard renders StudentCoursesDashboard for all viewports',
  learnerDashboard.includes('<StudentCoursesDashboard') &&
    !learnerDashboard.includes('MobileDashboardHome')
);
check(
  'LearnerDashboard renders DataAnalystGenAiHub for all viewports',
  learnerDashboard.includes('<DataAnalystGenAiHub') &&
    !learnerDashboard.includes('MobileDataAnalystHub')
);
check(
  'LearnerDashboard renders PythonTopicWorkspace for all viewports',
  learnerDashboard.includes('<PythonTopicWorkspace') &&
    !learnerDashboard.includes('MobileTopicWorkspace')
);
check(
  'LearnerDashboard renders AffiliateEarningsHub for all viewports',
  learnerDashboard.includes('<AffiliateEarningsHub') &&
    !learnerDashboard.includes('MobileAffiliateEarningsHub')
);

const studentDashboard = fs.readFileSync(
  path.join(srcRoot, 'components/futureai/StudentCoursesDashboard.tsx'),
  'utf8'
);
const careerSection = fs.readFileSync(
  path.join(srcRoot, 'components/futureai/CareerFocusedCoursesSection.tsx'),
  'utf8'
);
const allPlatformCourses = fs.readFileSync(
  path.join(srcRoot, 'data/allPlatformCourses.ts'),
  'utf8'
);
const careerCourses12 = fs.readFileSync(
  path.join(srcRoot, 'data/careerCourses12.ts'),
  'utf8'
);

check(
  'StudentCoursesDashboard uses shared CAREER_COURSES_12 & ALL_PLATFORM_COURSES',
  studentDashboard.includes('CAREER_COURSES_12') &&
    studentDashboard.includes('ALL_PLATFORM_COURSES')
);
check(
  'CareerFocusedCoursesSection uses shared CAREER_COURSES_12 & ALL_PLATFORM_COURSES without duplicate mobile block',
  careerSection.includes('CAREER_COURSES_12') &&
    careerSection.includes('ALL_PLATFORM_COURSES') &&
    !careerSection.includes('block md:hidden')
);
check(
  'All 7 flagship courses are defined in shared ALL_PLATFORM_COURSES',
  allPlatformCourses.includes('Data Analyst') &&
    allPlatformCourses.includes('Data Science') &&
    allPlatformCourses.includes('Machine Learning') &&
    allPlatformCourses.includes('AI Engineering') &&
    allPlatformCourses.includes('AI Tools') &&
    allPlatformCourses.includes('Microsoft Office 365') &&
    allPlatformCourses.includes('Full Stack') &&
    careerCourses12.length > 100
);

console.log('\n=== 4. Verify Responsive Viewport & Breakpoints (320px, 375px, 390px, 430px, 768px, Desktop) ===');

const indexHtml = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf8');
check(
  'index.html has responsive viewport meta tag',
  indexHtml.includes('width=device-width, initial-scale=1.0')
);
check(
  'index.html body prevents horizontal overflow (overflow-x-hidden)',
  indexHtml.includes('overflow-x-hidden')
);

const affiliateCss = fs.readFileSync(
  path.join(srcRoot, 'components/futureai/AffiliateEarningsHub.css'),
  'utf8'
);
check(
  'AffiliateEarningsHub.css does NOT hide .affiliate-hub-container on mobile (<768px)',
  !/@media\s*\(max-width:\s*767px\)\s*\{\s*\.affiliate-hub-container\s*\{\s*display:\s*none/i.test(affiliateCss)
);

const learnerHomeHubCss = fs.readFileSync(
  path.join(srcRoot, 'components/futureai/LearnerHomeHub.css'),
  'utf8'
);
check(
  'LearnerHomeHub.css includes responsive rules for <=1080px, <=768px, <=640px, and <=480px (320px-430px phones)',
  learnerHomeHubCss.includes('@media (max-width: 1080px)') &&
    learnerHomeHubCss.includes('@media (max-width: 768px)') &&
    learnerHomeHubCss.includes('@media (max-width: 640px)') &&
    learnerHomeHubCss.includes('@media (max-width: 480px)')
);

const headerTsx = fs.readFileSync(
  path.join(srcRoot, 'components/futureai/FutureAdvancedHeader.tsx'),
  'utf8'
);
check(
  'FutureAdvancedHeader includes both desktop navigation and responsive mobile drawer menu from single component',
  headerTsx.includes('mobileMenuOpen') && headerTsx.includes('setMobileMenuOpen')
);

console.log(`\n✅ All ${passed} responsive & single-source-of-truth checks passed!\n`);
