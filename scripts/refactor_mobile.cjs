const fs = require('fs');
const path = require('path');

// 1. Update AffiliateEarningsHub.css
{
  const cssPath = path.join(__dirname, '../welcome-to-2050/src/components/futureai/AffiliateEarningsHub.css');
  let content = fs.readFileSync(cssPath, 'utf8');
  content = content.replace(/@media\s*\(max-width:\s*767px\)\s*\{\s*\.affiliate-hub-container\s*\{\s*display:\s*none\s*!important;\s*\}\s*\}/g, '/* Responsive Affiliate Container across all screen sizes */');
  fs.writeFileSync(cssPath, content, 'utf8');
  console.log('1. Updated AffiliateEarningsHub.css');
}

// 2. Update AffiliateEarningsHub.tsx
{
  const tsxPath = path.join(__dirname, '../welcome-to-2050/src/components/futureai/AffiliateEarningsHub.tsx');
  let content = fs.readFileSync(tsxPath, 'utf8');
  // Remove import
  content = content.replace(/import\s*\{\s*MobileAffiliateEarningsHub\s*\}\s*from\s*['"]\.\/mobile\/MobileAffiliateEarningsHub['"];?\r?\n?/, '');
  
  // Replace the mobile block and hidden md:block wrapper
  const targetRegex = /\{\/\* ── Native Android Mobile App Experience \(< 768px\) ── \*\/\}\s*<div className="md:hidden">[\s\S]*?<\/div>\s*\{\/\* ── Desktop Experience \(>= 768px\) ── \*\/\}\s*<div className="hidden md:block affiliate-hub-container">/;
  content = content.replace(targetRegex, '<div className="affiliate-hub-container">');
  fs.writeFileSync(tsxPath, content, 'utf8');
  console.log('2. Updated AffiliateEarningsHub.tsx');
}

// 3. Update ExcelChapterView.tsx
{
  const tsxPath = path.join(__dirname, '../welcome-to-2050/src/components/futureai/ExcelChapterView.tsx');
  let content = fs.readFileSync(tsxPath, 'utf8');
  content = content.replace(/import\s*\{\s*MobileExcelChapterView\s*\}\s*from\s*['"]\.\/mobile\/MobileExcelChapterView['"];?\r?\n?/, '');
  
  const targetRegex = /\{\/\* ── Native Android Mobile Experience \(< 768px\) ── \*\/\}\s*<div className="md:hidden">[\s\S]*?<\/div>\s*\{\/\* ── Desktop Experience \(>= 768px\) ── \*\/\}\s*<div className="hidden md:block">/;
  content = content.replace(targetRegex, '<div>');
  fs.writeFileSync(tsxPath, content, 'utf8');
  console.log('3. Updated ExcelChapterView.tsx');
}

// 4. Update GameArenaHub.tsx
{
  const tsxPath = path.join(__dirname, '../welcome-to-2050/src/components/futureai/GameArenaHub.tsx');
  let content = fs.readFileSync(tsxPath, 'utf8');
  content = content.replace(/import\s*\{\s*MobileGameArenaHub\s*\}\s*from\s*['"]\.\/mobile\/MobileGameArenaHub['"];?\r?\n?/, '');
  
  const targetRegex = /\{\/\* ── Native Android Mobile App View \(< 768px\) ── \*\/\}\s*<div className="md:hidden">[\s\S]*?<\/div>\s*\{\/\* ── Desktop Experience \(>= 768px\) ── \*\/\}\s*<div className="hidden md:block">/;
  content = content.replace(targetRegex, '<div>');
  fs.writeFileSync(tsxPath, content, 'utf8');
  console.log('4. Updated GameArenaHub.tsx');
}

// 5. Update PythonChapterView.tsx
{
  const tsxPath = path.join(__dirname, '../welcome-to-2050/src/components/futureai/PythonChapterView.tsx');
  let content = fs.readFileSync(tsxPath, 'utf8');
  content = content.replace(/import\s*\{\s*MobilePythonChapterView\s*\}\s*from\s*['"]\.\/mobile\/MobilePythonChapterView['"];?\r?\n?/, '');
  
  const targetRegex = /\{\/\* ── Native Android Mobile App View \(< 768px\) ── \*\/\}\s*<div className="md:hidden">[\s\S]*?<\/div>\s*\{\/\* ── Desktop Experience \(>= 768px\) ── \*\/\}\s*<div className="hidden md:block">/;
  content = content.replace(targetRegex, '<div>');
  fs.writeFileSync(tsxPath, content, 'utf8');
  console.log('5. Updated PythonChapterView.tsx');
}

// 6. Update SqlChapterView.tsx
{
  const tsxPath = path.join(__dirname, '../welcome-to-2050/src/components/futureai/SqlChapterView.tsx');
  let content = fs.readFileSync(tsxPath, 'utf8');
  content = content.replace(/import\s*\{\s*MobileSqlChapterView\s*\}\s*from\s*['"]\.\/mobile\/MobileSqlChapterView['"];?\r?\n?/, '');
  
  const targetRegex = /\{\/\* ── Native Android Mobile App View \(< 768px\) ── \*\/\}\s*<div className="md:hidden">[\s\S]*?<\/div>\s*\{\/\* ── Desktop Experience \(>= 768px\) ── \*\/\}\s*<div className="hidden md:block">/;
  content = content.replace(targetRegex, '<div>');
  fs.writeFileSync(tsxPath, content, 'utf8');
  console.log('6. Updated SqlChapterView.tsx');
}

// 7. Update App.tsx
{
  const appPath = path.join(__dirname, '../welcome-to-2050/src/App.tsx');
  let content = fs.readFileSync(appPath, 'utf8');
  content = content.replace(/import\s*\{\s*MobileAppInstallPrompt\s*\}\s*from\s*['"]\.\/components\/futureai\/mobile\/MobileAppInstallPrompt['"];?\r?\n?/, '');
  content = content.replace(/\{\/\* Global PWA Android App Installation Banner \/ Modal for Mobile \(< 768px\) \*\/\}\s*<MobileAppInstallPrompt \/>\r?\n?/, '');
  
  // Remove mobile redirecting to dashboard over home
  content = content.replace(/window\.location\.hash = isMobile \? '#dashboard' : '#home';/g, "window.location.hash = '#home';");
  
  fs.writeFileSync(appPath, content, 'utf8');
  console.log('7. Updated App.tsx');
}
