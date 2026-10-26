const fs = require('fs');
const path = require('path');

// 1. PythonTopic1ChallengeArena.tsx
{
  const filePath = path.join(__dirname, '../welcome-to-2050/src/components/futureai/PythonTopic1ChallengeArena.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  // Add import if not present
  if (!content.includes('IndianVoiceProblemStatement')) {
    content = `import { IndianVoiceProblemStatement } from './IndianVoiceProblemStatement';\n` + content;
  }

  // Replace Problem Statement section
  const targetRegex = /\{\/\* 1\. Problem Statement \*\/\}\s*<div>\s*<h2 className="text-sm font-bold text-slate-900 mb-2">Problem Statement<\/h2>\s*<p className="text-xs sm:text-sm text-slate-600 leading-relaxed">\s*\{task\.problemStatement\}[\s\S]*?to the output\.\s*<\/p>\s*<\/div>/;
  const replacement = `{/* 1. Problem Statement with Typewriter & Indian Boy/Girl Voice */}
                <IndianVoiceProblemStatement
                  title="Problem Statement"
                  problemStatement={task.problemStatement}
                  highlightedKeyword={task.highlightedKeyword}
                  suffix="to the output."
                  theme="blue"
                />`;

  content = content.replace(targetRegex, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('1. Updated PythonTopic1ChallengeArena.tsx');
}

// 2. SqlChallengeArena.tsx
{
  const filePath = path.join(__dirname, '../welcome-to-2050/src/components/futureai/SqlChallengeArena.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  // Add import if not present
  if (!content.includes('IndianVoiceProblemStatement')) {
    content = `import { IndianVoiceProblemStatement } from './IndianVoiceProblemStatement';\n` + content;
  }

  // Replace Problem Statement section
  const targetRegex = /\{\/\* 1\. Problem Statement \*\/\}\s*<div>\s*<h2 className="text-sm font-bold text-slate-900 mb-1\.5">\s*Problem Statement\s*<\/h2>\s*<p className="text-slate-600 text-xs sm:text-\[13px\] leading-relaxed">\s*\{task\.problemStatement\}[\s\S]*?table\.\s*<\/p>\s*<\/div>/;
  const replacement = `{/* 1. Problem Statement with Typewriter & Indian Boy/Girl Voice */}
                <IndianVoiceProblemStatement
                  title="Problem Statement"
                  problemStatement={task.problemStatement}
                  highlightedKeyword={task.tableName || task.highlightedKeyword || 'employees'}
                  suffix="table."
                  theme="blue"
                />`;

  content = content.replace(targetRegex, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('2. Updated SqlChallengeArena.tsx');
}

// 3. ExcelChallengeArena.tsx
{
  const filePath = path.join(__dirname, '../welcome-to-2050/src/components/futureai/ExcelChallengeArena.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  // Add import if not present
  if (!content.includes('IndianVoiceProblemStatement')) {
    content = `import { IndianVoiceProblemStatement } from './IndianVoiceProblemStatement';\n` + content;
  }

  // Replace Problem Statement section
  const targetRegex = /<div>\s*<h3 className="font-bold text-slate-900 mb-1\.5 flex items-center gap-1\.5 text-sm">\s*<FileText className="w-4 h-4 text-\[#107c41\]" \/>\s*Problem Statement\s*<\/h3>\s*<p className="leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100 text-slate-800 font-medium">\s*\{task\.problemStatement\}\s*<\/p>\s*<\/div>/;
  const replacement = `{/* 1. Problem Statement with Typewriter & Indian Boy/Girl Voice */}
                  <IndianVoiceProblemStatement
                    title="Problem Statement"
                    problemStatement={task.problemStatement}
                    theme="emerald"
                  />`;

  content = content.replace(targetRegex, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('3. Updated ExcelChallengeArena.tsx');
}
