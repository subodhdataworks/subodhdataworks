const { chromium } = require('playwright');
const fs = require('fs');

async function crop() {
  const b64 = fs.readFileSync('public/images/codequest_reference_original.jpg').toString('base64');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head><style>body { margin:0; padding:0; background:#000; overflow:hidden; }</style></head>
    <body>
      <canvas id="c"></canvas>
      <script>
        const img = new Image();
        img.onload = () => {
          const c = document.getElementById('c');
          // In 1024x682 original:
          // The game area is between X: 147, Y: 187, W: 647, H: 247
          c.width = 647;
          c.height = 247;
          const ctx = c.getContext('2d');
          ctx.drawImage(img, 147, 187, 647, 247, 0, 0, 647, 247);
          window.done = true;
        };
        img.src = 'data:image/jpeg;base64,` + b64 + `';
      </script>
    </body>
    </html>
  `;
  
  await page.setContent(html);
  await page.waitForFunction(() => window.done === true);
  const el = await page.$('#c');
  await el.screenshot({ path: 'public/images/codequest_arena_original_cropped.png' });
  await browser.close();
  console.log('Successfully cropped arena using base64 to public/images/codequest_arena_original_cropped.png');
}

crop().catch(err => {
  console.error(err);
  process.exit(1);
});
