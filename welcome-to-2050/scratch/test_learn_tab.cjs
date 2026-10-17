const { chromium } = require('playwright');
const path = require('path');

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  console.log('Navigating to http://localhost:4173/#learn...');
  await page.goto('http://localhost:4173/#learn', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  const outPath = path.resolve('C:/Users/trend/.gemini/antigravity/brain/cd51469a-fb95-4a84-a350-2c2fd8149ae9/learn_tab_verified.png');
  await page.screenshot({ path: outPath, fullPage: true });
  console.log('Screenshot saved to:', outPath);

  await browser.close();
}

run().catch(console.error);
