const { chromium } = require('playwright');
const path = require('path');

async function testCodeQuest() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  const artifactDir = 'C:/Users/trend/.gemini/antigravity/brain/cd51469a-fb95-4a84-a350-2c2fd8149ae9';

  console.log('Navigating to http://localhost:4173 ...');
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });

  // Set logged in and hash to #python
  await page.evaluate(() => {
    localStorage.setItem('futureai_logged_in', 'true');
    localStorage.setItem('futureai_user_name', 'Subodh Kumar');
    window.location.hash = '#python';
  });
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Look for topic 1 in PythonModuleDetail
  console.log('Looking for Topic 1: Python Introduction & Setup...');
  const topic1 = await page.$('text=Python Introduction & Setup');
  if (topic1) {
    console.log('Clicked Topic 1!');
    await topic1.click();
    await page.waitForTimeout(1200);
  } else {
    console.log('Could not find text=Python Introduction & Setup, trying buttons...');
    const anyTopicBtn = await page.$('.pmd-start-btn, .pmd-topic-card, .pmd-topic-row');
    if (anyTopicBtn) await anyTopicBtn.click();
    await page.waitForTimeout(1000);
  }

  // Inside PythonTopicWorkspace, click "Play – CodeQuest Game" card or Play stage in stepper
  console.log('Looking for CodeQuest Game trigger...');
  const nextStepCard = await page.$('.ptw-next-step-locked-card');
  if (nextStepCard) {
    console.log('Clicking Next Step (CodeQuest) card...');
    await nextStepCard.click();
    await page.waitForTimeout(1200);
  } else {
    const playStage = await page.$('.ptw-stage-card:has-text("Play")');
    if (playStage) {
      console.log('Clicking Play stage card...');
      await playStage.click();
      await page.waitForTimeout(1200);
    }
  }

  // 1. Initial State Snapshot (Matching media_1790599349668.jpg)
  console.log('Capturing desktop_codequest_initial.png ...');
  await page.screenshot({ path: path.join(artifactDir, 'desktop_codequest_initial.png') });
  console.log('Saved desktop_codequest_initial.png');

  // 2. Test typing code into the editor: name = "FutureAI"
  console.log('Testing Challenge 1 code entry...');
  const editorTextarea = await page.$('.cq-code-textarea');
  if (editorTextarea) {
    await editorTextarea.fill('name = "FutureAI"');
    await page.waitForTimeout(400);

    // Click Submit Answer
    const submitBtn = await page.$('.cq-submit-btn');
    if (submitBtn) {
      await submitBtn.click();
      await page.waitForTimeout(1500);
      console.log('Submitted correct answer for Challenge 1!');
      await page.screenshot({ path: path.join(artifactDir, 'desktop_codequest_challenge1_success.png') });
      console.log('Saved desktop_codequest_challenge1_success.png');
    }
  }

  // 3. Test wrong code error handling ("bip" buzzer & shake)
  console.log('Testing Challenge 2 wrong code error handling...');
  const editor2 = await page.$('.cq-code-textarea');
  if (editor2) {
    // Fill wrong value for age: age = 100 instead of 25
    await editor2.fill('age = 100');
    await page.waitForTimeout(300);

    const submitBtn = await page.$('.cq-submit-btn');
    if (submitBtn) {
      await submitBtn.click();
      await page.waitForTimeout(600);
      console.log('Submitted wrong answer to test error feedback!');
      await page.screenshot({ path: path.join(artifactDir, 'desktop_codequest_error_bip.png') });
      console.log('Saved desktop_codequest_error_bip.png');
    }
  }

  // 4. Test Mobile Responsive View
  console.log('Capturing mobile view...');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(artifactDir, 'mobile_codequest_responsive.png') });
  console.log('Saved mobile_codequest_responsive.png');

  await browser.close();
  console.log('All CodeQuest tests finished!');
}

testCodeQuest().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
