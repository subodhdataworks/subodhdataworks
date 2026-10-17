const { chromium } = require('playwright');

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 950 } });

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

  console.log('Testing interactions on http://localhost:4173/#python...');
  await page.goto('http://localhost:4173/#python', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Click on Module 2
  console.log('Clicking Module 2 in carousel...');
  await page.locator('.pym2-module-card').nth(1).click();
  await page.waitForTimeout(500);

  // Click on Module 1 to go back
  console.log('Clicking Module 1 in carousel...');
  await page.locator('.pym2-module-card').nth(0).click();
  await page.waitForTimeout(500);

  console.log('Interactions test finished successfully!');
  await browser.close();
}

run().catch(console.error);
