import { chromium } from 'playwright';

async function checkVideos() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  for (let i = 1; i <= 3; i++) {
    await page.goto(`http://localhost:4173/assets/videos/cinematic_${i}.mp4`, { waitUntil: 'load' });
    const info = await page.evaluate(async () => {
      const v = document.querySelector('video');
      if (!v) return null;
      await new Promise(r => {
        if (v.readyState >= 1) return r();
        v.onloadedmetadata = r;
      });
      v.currentTime = Math.min(2.5, v.duration / 2);
      await new Promise(r => v.onseeked = r);
      return { duration: v.duration, videoWidth: v.videoWidth, videoHeight: v.videoHeight };
    });
    console.log(`Video ${i} info:`, info);
    await page.screenshot({ path: `public/assets/videos/frame_${i}_mid.jpg` });
  }

  await browser.close();
}

checkVideos().catch(console.error);
