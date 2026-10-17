const path = require('path');
const { chromium } = require('../welcome-to-2050/node_modules/playwright');

async function testPythonCourse() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  console.log('1. Navigating to Mentor AI...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  // Click on Python card in "Master In-Demand Skills"
  console.log('2. Clicking on Python skill card...');
  const pythonCard = await page.locator('text=Python').first();
  await pythonCard.click();
  await page.waitForTimeout(800);

  // Check for horizontal overflow
  const hasHorizontalOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  console.log(`Python course page horizontal overflow: ${hasHorizontalOverflow ? 'YES (ERROR)' : 'NO (PASSED)'}`);

  // Screenshot 1: Full Python Course page at 1440x900
  await page.screenshot({ path: path.join(__dirname, 'python-course-1440x900.png'), fullPage: false });
  console.log('Saved: python-course-1440x900.png');

  // Screenshot 2: Full page scroll
  await page.screenshot({ path: path.join(__dirname, 'python-course-fullpage.png'), fullPage: true });
  console.log('Saved: python-course-fullpage.png');

  // 3. Click on Lesson 5 (Functions - Locked) to open Upgrade Modal
  console.log('3. Clicking on locked Lesson 5 (Functions)...');
  const lesson5 = await page.locator('text=Functions').first();
  await lesson5.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(__dirname, 'python-upgrade-modal.png') });
  console.log('Saved: python-upgrade-modal.png');

  // 4. Click "1-Click Instant Demo Unlock"
  console.log('4. Unlocking course...');
  const unlockDemo = await page.locator('text=1-Click Instant Demo Unlock');
  await unlockDemo.click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(__dirname, 'python-course-unlocked.png') });
  console.log('Saved: python-course-unlocked.png');

  // 5. Click on Lesson 1 (Free) to open interactive code sandbox
  console.log('5. Clicking on Lesson 1 (Introduction to Python)...');
  const lesson1 = await page.locator('text=Introduction to Python').first();
  await lesson1.click();
  await page.waitForTimeout(500);

  // Click Run Code
  const runBtn = await page.locator('text=Run Code');
  await runBtn.click();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(__dirname, 'python-lesson-modal-running.png') });
  console.log('Saved: python-lesson-modal-running.png');

  await browser.close();
  console.log('All Python course tests and screenshots completed successfully!');
}

testPythonCourse().catch(err => {
  console.error(err);
  process.exit(1);
});
