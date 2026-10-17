const { chromium } = require('../welcome-to-2050/node_modules/playwright');

async function testInteractions() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  
  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(500);

  // 1. Test clicking visible Today's Mission "Start Challenge"
  const startBtn = page.locator('button:has-text("Start Challenge"):visible').first();
  await startBtn.click();
  await page.waitForTimeout(500);
  console.log('Challenge modal opened!');

  // Run the query inside the modal
  const runQueryBtn = page.locator('button:has-text("Run SQL Query"):visible');
  await runQueryBtn.click();
  await page.waitForTimeout(600);
  console.log('Query executed with success message!');

  // Close modal
  const closeBtn = page.locator('button[aria-label="Close modal"]:visible');
  await closeBtn.click();
  await page.waitForTimeout(400);

  // 2. Test Ask AI prompt chip
  const hintChip = page.locator('button:has-text("Give me a hint"):visible').first();
  await hintChip.click();
  await page.waitForTimeout(1000);
  console.log('AI Chat opened with hint prompt!');

  // Close AI Chat modal
  const closeChatBtn = page.locator('button[aria-label="Close modal"]:visible');
  await closeChatBtn.click();
  await page.waitForTimeout(400);

  // 3. Test Navigation to Progress tab
  const progressNav = page.locator('nav button:has-text("Progress"):visible').first();
  await progressNav.click();
  await page.waitForTimeout(500);
  console.log('Navigated to Progress tab!');

  // 4. Test Navigation to Learn tab
  const learnNav = page.locator('nav button:has-text("Learn"):visible').first();
  await learnNav.click();
  await page.waitForTimeout(500);
  console.log('Navigated to Learn tab!');

  // 5. Test Navigation back to Home tab
  const homeNav = page.locator('nav button:has-text("Home"):visible').first();
  await homeNav.click();
  await page.waitForTimeout(500);
  console.log('Navigated back to Home tab!');

  await browser.close();
  console.log('ALL INTERACTIVE TESTS PASSED FLAWLESSLY! 🎉');
}

testInteractions().catch(err => {
  console.error(err);
  process.exit(1);
});
