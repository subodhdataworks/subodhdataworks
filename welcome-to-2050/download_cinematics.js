import fs from 'fs';
import path from 'path';

const videos = [
  { id: '1gtejXLcmIm2OxFKJACstpgOtwNjPbamX', name: 'cinematic_1.mp4' },
  { id: '1Iz0qqoQH3blRR2aylov9QmwhB-pe2Yqq', name: 'cinematic_2.mp4' },
  { id: '1m6pITkRWKo8-gDhS-iuTbDfN08CBFqAW', name: 'cinematic_3.mp4' }
];

const targetDir = './public/assets/videos';
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function downloadVideo({ id, name }) {
  const url = `https://drive.google.com/uc?export=download&id=${id}`;
  console.log(`Downloading ${name}...`);
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`Failed to fetch ${name}: ${res.statusText}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  const filePath = path.join(targetDir, name);
  fs.writeFileSync(filePath, buffer);
  console.log(`✓ Saved ${name} (${(buffer.length / (1024 * 1024)).toFixed(2)} MB)`);
}

async function run() {
  for (const v of videos) {
    try {
      await downloadVideo(v);
    } catch (e) {
      console.error(`Error downloading ${v.name}:`, e.message);
    }
  }
}

run();
