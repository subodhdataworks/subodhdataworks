import { chromium } from 'playwright';
import path from 'path';

async function extract() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1024, height: 682 } });
  
  const imgPath = 'file:///C:/Users/trend/.gemini/antigravity/brain/cd51469a-fb95-4a84-a350-2c2fd8149ae9/.user_uploaded/media_1790483306835.jpg';
  await page.goto(imgPath, { waitUntil: 'load' });

  // Get image bounding box
  const img = await page.locator('img');
  const box = await img.boundingBox();
  console.log('Image location:', box);

  // 1. Robot alone
  await page.screenshot({
    path: './public/assets/reference/robot_perfect_clean.png',
    clip: { x: 902, y: 268, width: 74, height: 140 }
  });

  // 2. Student desk + panoramic monitor
  await page.screenshot({
    path: './public/assets/reference/panoramic_monitor_perfect.png',
    clip: { x: 422, y: 44, width: 528, height: 188 }
  });

  // 3. Indian student celebrating with laptop
  await page.screenshot({
    path: './public/assets/reference/student_laptop_perfect.png',
    clip: { x: 224, y: 248, width: 231, height: 160 }
  });

  console.log('Successfully clipped perfect assets from reference!');
  await browser.close();
}

extract().catch(console.error);
