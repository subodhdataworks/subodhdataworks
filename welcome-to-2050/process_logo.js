import { chromium } from 'playwright';
import fs from 'fs';

async function processLogo() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 500 } });

  const imgBuffer = fs.readFileSync('public/assets/reference/future_ai_official_logo.jpg');
  const base64Img = `data:image/jpeg;base64,${imgBuffer.toString('base64')}`;

  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head><style>body { margin: 0; background: transparent; }</style></head>
    <body>
      <canvas id="c"></canvas>
      <script>
        const img = new Image();
        img.src = "${base64Img}";
        img.onload = () => {
          const canvas = document.getElementById('c');
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);

          const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imgData.data;

          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            // Black background removal
            const maxVal = Math.max(r, g, b);
            if (maxVal < 15) {
              data[i + 3] = 0; // Completely transparent
            } else if (maxVal < 50) {
              data[i + 3] = Math.round(((maxVal - 15) / 35) * 255);
            }
          }
          ctx.putImageData(imgData, 0, 0);
          window.__DONE__ = true;
        };
      </script>
    </body>
    </html>
  `);

  await page.waitForFunction(() => window.__DONE__ === true, { timeout: 10000 });
  
  const canvasElem = await page.locator('#c');
  await canvasElem.screenshot({
    path: 'public/assets/reference/future_ai_logo_transparent.png',
    omitBackground: true
  });

  // Crop just the origami "F" emblem ribbon
  const box = await canvasElem.boundingBox();
  await page.screenshot({
    path: 'public/assets/reference/future_ai_emblem_transparent.png',
    clip: { x: box.x, y: box.y, width: box.width * 0.35, height: box.height },
    omitBackground: true
  });

  console.log('Processed transparent logo and emblem successfully!');
  await browser.close();
}

processLogo().catch(console.error);
