const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const imgPath = path.resolve('public/images/codequest_reference_original.jpg').replace(/\\/g, '/');
  
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; padding: 0; background: #000; overflow: hidden; }
        #canvas { display: block; }
      </style>
    </head>
    <body>
      <canvas id="canvas"></canvas>
      <script>
        const img = new Image();
        img.onload = () => {
          const canvas = document.getElementById('canvas');
          // In 1024x682 original:
          // The game area is:
          // X: 148, Y: 187, W: 645, h: 247 (or full viewport: x: 147, y: 126, w: 647, h: 308)
          canvas.width = 647;
          canvas.height = 308;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 147, 126, 647, 308, 0, 0, 647, 308);
          window.cropDone = true;
        };
        img.src = "file:///${imgPath}";
      </script>
    </body>
    </html>
  `);
  
  await page.waitForFunction(() => window.cropDone === true);
  
  const canvasEl = await page.$('#canvas');
  await canvasEl.screenshot({ path: 'public/images/codequest_arena_original_cropped.png' });
  console.log('Successfully cropped arena to public/images/codequest_arena_original_cropped.png');
  
  await browser.close();
}

main().catch(console.error);
