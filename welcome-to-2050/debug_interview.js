import { chromium } from 'playwright';

async function testInterview() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  const loc = page.locator('h2:has-text("Meet Your AI Interviewer")');
  console.log('locator count:', await loc.count());
  console.log('isVisible:', await loc.isVisible());

  const box = await loc.boundingBox();
  console.log('boundingBox:', box);

  const sampleBtn = page.locator('button:has-text("Fill Model Answer")');
  console.log('sampleBtn count:', await sampleBtn.count());
  console.log('sampleBtn isVisible:', await sampleBtn.isVisible());

  await sampleBtn.click();
  console.log('Clicked Fill Model Answer successfully!');

  await page.waitForTimeout(1000);
  const score = page.locator('text=AI Rubric Evaluation: 93 / 100');
  console.log('Score isVisible:', await score.isVisible());

  await browser.close();
}

testInterview();
