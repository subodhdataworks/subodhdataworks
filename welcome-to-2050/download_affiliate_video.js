import fs from 'fs';
import path from 'path';

const fileId = '1VCUZda3OR6d5IRUsHU1ty_jRTt894B-C';
const outputDir = './public/assets/videos';
const outputPath = path.join(outputDir, 'affiliate_banner_bg.mp4');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function downloadDriveFile(id, destPath) {
  console.log(`Fetching Google Drive file ${id}...`);
  // Try direct download URL
  let downloadUrl = `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t`;
  
  let res = await fetch(downloadUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    },
    redirect: 'follow'
  });

  // If redirected or need confirm
  let contentType = res.headers.get('content-type') || '';
  if (contentType.includes('text/html')) {
    const html = await res.text();
    // Search for confirm token or download form
    const confirmMatch = html.match(/confirm=([0-9A-Za-z_-]+)/) || html.match(/name="confirm" value="([^"]+)"/);
    if (confirmMatch) {
      const confirmToken = confirmMatch[1];
      console.log(`Found confirm token: ${confirmToken}, retrying...`);
      downloadUrl = `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=${confirmToken}`;
      res = await fetch(downloadUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
        redirect: 'follow'
      });
    } else {
      // Also check for action form in html
      const formMatch = html.match(/action="([^"]+)"/);
      if (formMatch) {
        console.log(`Submitting form action: ${formMatch[1]}`);
        res = await fetch(formMatch[1], {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          },
          redirect: 'follow'
        });
      }
    }
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  if (buffer.length < 10000) {
    const text = buffer.toString('utf-8');
    console.log('Result appears to be HTML or small text:', text.substring(0, 500));
    throw new Error('Downloaded file is too small or HTML');
  }

  fs.writeFileSync(destPath, buffer);
  console.log(`✓ Downloaded successfully! Size: ${(buffer.length / (1024 * 1024)).toFixed(2)} MB`);
}

downloadDriveFile(fileId, outputPath).catch(err => {
  console.error('Download error:', err);
  process.exit(1);
});
