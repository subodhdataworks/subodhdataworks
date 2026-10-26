const fs = require('fs');
const path = require('path');

// 1. Clean LearnerDashboard.tsx
{
  const ldPath = path.join(__dirname, '../welcome-to-2050/src/components/futureai/LearnerDashboard.tsx');
  let content = fs.readFileSync(ldPath, 'utf8');

  // Remove lines 399-448 (isMobileSizeTesting to end of effect)
  const mobileVarsRegex = /\s*\/\/ Check if user specifically requested mobile size testing link[\s\S]*?\}, \[\]\);\r?\n?/;
  content = content.replace(mobileVarsRegex, '\n');

  // Remove MobileProfileSheet instances
  content = content.replace(/<MobileProfileSheet[\s\S]*?\/>\r?\n?/g, '');

  // Remove SQL md:hidden and hidden md:block
  const sqlRegex = /\{\/\* Mobile View \(< 768px\) \*\/\}\s*<div className="md:hidden min-h-screen bg-slate-50">[\s\S]*?<\/div>\s*\{\/\* Desktop View \(>= 768px\) \*\/\}\s*<div className="hidden md:block">\s*(<SqlChapterView[\s\S]*?\/>)\s*<\/div>/;
  content = content.replace(sqlRegex, '$1');

  fs.writeFileSync(ldPath, content, 'utf8');
  console.log('LearnerDashboard.tsx cleaned!');
}

// 2. Clean App.tsx
{
  const appPath = path.join(__dirname, '../welcome-to-2050/src/App.tsx');
  let content = fs.readFileSync(appPath, 'utf8');

  // Remove checkIsMobileDevice, isMobile, and handleResize effect
  const appMobileRegex = /\s*const checkIsMobileDevice = \(\): boolean => \{[\s\S]*?window\.removeEventListener\('orientationchange', handleResize\);\s*\};\s*\}, \[\]\);/;
  content = content.replace(appMobileRegex, '');

  // Remove mobile redirect effect
  const appRedirectRegex = /\s*\/\/ On mobile devices, ensure default route is #dashboard only if logged in or navigating to course\s*useEffect\(\(\) => \{[\s\S]*?\}, \[\]\);/;
  content = content.replace(appRedirectRegex, '');

  fs.writeFileSync(appPath, content, 'utf8');
  console.log('App.tsx cleaned!');
}
