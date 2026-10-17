const puppeteer = require('puppeteer-core');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\trend\\.gemini\\antigravity\\brain\\cfc5fb21-35ad-4973-af14-08dada2801ef';

async function run() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    defaultViewport: { width: 1440, height: 900 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  console.log('Navigating to http://localhost:5173/ ...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });

  // 1. PYTHON COURSE VIEW
  console.log('Checking Python Course View...');
  await page.waitForSelector('[data-testid="topic-card-1"]', { timeout: 10000 });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(artifactDir, 'python_course_main_view.png'), fullPage: false });
  console.log('Saved python_course_main_view.png');

  // Scroll down to capture the 3 modules and 20 topics
  await page.evaluate(() => window.scrollBy(0, 500));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(artifactDir, 'python_course_modules_view.png'), fullPage: false });
  console.log('Saved python_course_modules_view.png');

  // 2. OPEN TOPIC 1 (Introduction to Python)
  console.log('Opening Topic 1 (Introduction to Python)...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 500));
  
  await page.click('[data-testid="topic-card-1"]');
  await page.waitForSelector('[data-testid="stepper-tab-video"]', { timeout: 8000 });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(artifactDir, 'python_topic_detail_video.png'), fullPage: false });
  console.log('Saved python_topic_detail_video.png');

  // Click "Mark Watched" to proceed to MCQ
  console.log('Marking video watched...');
  await page.click('[data-testid="mark-watched-btn"]');
  await page.waitForSelector('[data-testid="mcq-opt-1"]', { timeout: 5000 });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(artifactDir, 'python_topic_detail_mcq.png'), fullPage: false });
  console.log('Saved python_topic_detail_mcq.png');

  // Answer question 1 and click Next
  await page.click('[data-testid="mcq-opt-1"]');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(artifactDir, 'python_topic_mcq_answered.png'), fullPage: false });
  console.log('Saved python_topic_mcq_answered.png');

  // 3. RETURN TO COURSE AND OPEN ASSESSMENT 8
  console.log('Returning to Course Syllabus...');
  await page.evaluate(() => {
    const backBtn = Array.from(document.querySelectorAll('button, span')).find(el => el.textContent && el.textContent.includes('Back to Curriculum'));
    if (backBtn) backBtn.click();
  });
  await page.waitForSelector('[data-testid="topic-card-8"]', { timeout: 8000 });
  await new Promise(r => setTimeout(r, 1000));

  // Click Topic 8 Assessment Card
  console.log('Launching Skill Mastery Assessment (Topic 8)...');
  await page.click('[data-testid="topic-card-8"]');
  await page.waitForSelector('[data-testid="assessment-opt-0"]', { timeout: 8000 });
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(artifactDir, 'python_assessment_exam_view.png'), fullPage: false });
  console.log('Saved python_assessment_exam_view.png');

  // Select an option, mark for review, jump to question 8
  console.log('Interacting with assessment options & palette...');
  await page.click('[data-testid="assessment-opt-1"]'); // Option B
  await new Promise(r => setTimeout(r, 400));

  // Click Mark for Review
  await page.evaluate(() => {
    const reviewBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Mark for Review'));
    if (reviewBtn) reviewBtn.click();
  });
  await new Promise(r => setTimeout(r, 400));

  // Click Question 8 in the palette grid
  await page.evaluate(() => {
    const qPaletteButtons = Array.from(document.querySelectorAll('div.grid-cols-8 button'));
    if (qPaletteButtons[7]) qPaletteButtons[7].click();
  });
  await new Promise(r => setTimeout(r, 600));

  // Answer question 8
  await page.click('[data-testid="assessment-opt-2"]');
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(artifactDir, 'python_assessment_palette_interaction.png'), fullPage: false });
  console.log('Saved python_assessment_palette_interaction.png');

  // Submit Assessment
  console.log('Submitting Assessment...');
  await page.evaluate(() => {
    const submitBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Finalize & Submit Exam'));
    if (submitBtn) submitBtn.click();
  });
  await new Promise(r => setTimeout(r, 800));

  // Confirm submit in modal
  await page.evaluate(() => {
    const confirmBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Confirm & Submit'));
    if (confirmBtn) confirmBtn.click();
  });
  await new Promise(r => setTimeout(r, 2000));

  await page.screenshot({ path: path.join(artifactDir, 'python_assessment_results_analytics.png'), fullPage: false });
  console.log('Saved python_assessment_results_analytics.png');

  await browser.close();
  console.log('Automation complete! All screenshots successfully captured.');
}

run().catch(err => {
  console.error('Error during test:', err);
  process.exit(1);
});
