const path = require('path');
const { chromium } = require('../welcome-to-2050/node_modules/playwright');

async function testLandingFlow() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  console.log('Navigating to landing page...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);

  // 1. Full page landing screenshot
  await page.screenshot({ path: path.join(__dirname, 'landing-full-page-1440.png'), fullPage: true });
  console.log('Full page landing captured: landing-full-page-1440.png');

  // 2. Open Login Modal by clicking "Start Learning Free"
  const startBtn = await page.locator('text=Start Learning Free').first();
  await startBtn.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(__dirname, 'landing-login-modal.png') });
  console.log('Login modal captured: landing-login-modal.png');

  // 3. Click "Instant 1-Click Demo Access"
  const demoBtn = await page.locator('text=Instant 1-Click Demo Access');
  await demoBtn.click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(__dirname, 'dashboard-after-login.png') });
  console.log('Dashboard after login captured: dashboard-after-login.png');

  // 4. Click "Back to Landing Page"
  const backBtn = await page.locator('text=Back to Landing Page');
  await backBtn.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(__dirname, 'landing-returned.png') });
  console.log('Returned to landing page successfully: landing-returned.png');

  await browser.close();
  console.log('All landing and auth flow tests completed successfully!');
}

testLandingFlow().catch(err => {
  console.error(err);
  process.exit(1);
});
