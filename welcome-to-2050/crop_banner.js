const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1024, height: 576 } });
  
  const refPath = 'file:///' + path.resolve('C:/Users/trend/.gemini/antigravity/brain/cd51469a-fb95-4a84-a350-2c2fd8149ae9/.user_uploaded/media_1790674740372.jpg').replace(/\\/g, '/');
  await page.goto(refPath);
  
  // Crop the exact hero banner
  await page.screenshot({
    path: 'public/images/python_hero_banner_exact.png',
    clip: { x: 153, y: 56, width: 638, height: 130 }
  });
  
  console.log('Saved exact banner clip');
  await browser.close();
})();
