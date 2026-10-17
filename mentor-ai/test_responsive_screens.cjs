const path = require('path');
const { chromium } = require('../welcome-to-2050/node_modules/playwright');

async function testScreens() {
  const browser = await chromium.launch({ headless: true });

  const viewports = [
    { name: 'screen-1366x768.png', width: 1366, height: 768, scale: 1 },
    { name: 'screen-1440x900.png', width: 1440, height: 900, scale: 1 },
    { name: 'screen-1536x864.png', width: 1536, height: 864, scale: 1 },
    { name: 'screen-1920x1080.png', width: 1920, height: 1080, scale: 1 },
    { name: 'screen-390x844.png', width: 390, height: 844, scale: 2, isMobile: true }
  ];

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: vp.scale,
      isMobile: !!vp.isMobile,
      hasTouch: !!vp.isMobile
    });
    const page = await context.newPage();
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);

    // Check for any horizontal overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    console.log(`[${vp.width}x${vp.height}] Horizontal overflow: ${hasHorizontalOverflow ? 'YES (ERROR)' : 'NO (PASSED)'}`);

    await page.screenshot({ path: path.join(__dirname, vp.name), fullPage: false });
    await context.close();
  }

  await browser.close();
  console.log('All responsive screens tested and captured successfully!');
}

testScreens().catch(err => {
  console.error(err);
  process.exit(1);
});
