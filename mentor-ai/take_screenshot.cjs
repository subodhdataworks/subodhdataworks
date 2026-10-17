const path = require('path');
const { chromium } = require('../welcome-to-2050/node_modules/playwright');

async function capture() {
  const browser = await chromium.launch({ headless: true });

  // 1. Laptop full screen (1440 x 900)
  const laptopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.5
  });
  const laptopPage = await laptopContext.newPage();
  await laptopPage.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await laptopPage.waitForTimeout(800);
  await laptopPage.screenshot({ path: path.join(__dirname, 'shot-laptop-fullscreen.png'), fullPage: false });
  await laptopPage.screenshot({ path: path.join(__dirname, 'shot-laptop-fullpage.png'), fullPage: true });
  await laptopContext.close();

  // 2. Mobile viewport (390 x 844)
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(800);
  await mobilePage.screenshot({ path: path.join(__dirname, 'shot-mobile-current.png'), fullPage: false });
  await mobileContext.close();

  await browser.close();
  console.log('Laptop and mobile screenshots captured successfully!');
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
