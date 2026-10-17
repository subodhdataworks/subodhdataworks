import { chromium } from 'playwright';

async function testGame() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  await page.evaluate(() => document.getElementById('practice-game')?.scrollIntoView());
  await page.waitForTimeout(400);

  const autoFixCount = await page.locator('button:has-text("Auto-Fix Code")').count();
  console.log('autoFixCount:', autoFixCount);

  if (autoFixCount > 0) {
    await page.locator('button:has-text("Auto-Fix Code")').first().click();
    console.log('Clicked Auto-Fix Code!');
  }

  await page.waitForTimeout(300);
  await page.locator('#practice-game button:has-text("Run Code")').click();
  await page.waitForTimeout(500);

  const text = await page.locator('#practice-game').textContent();
  console.log('Execution result verified:', text.includes('Total Amount: ₹177.0'));

  await browser.close();
}

testGame();
