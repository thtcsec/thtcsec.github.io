const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, '..', 'IMG_20260728_113729.jpg');
const outputDir = path.join(__dirname, '..', 'public', 'images');

async function main() {
  if (!fs.existsSync(inputPath)) {
    console.log('No raw input image found at:', inputPath);
    return;
  }

  const meta = await sharp(inputPath).metadata();
  console.log(`📸 Processing raw image: ${meta.width}x${meta.height}, format: ${meta.format}`);
  const { width, height } = meta;

  const contentHeight = Math.round(height * 0.875);

  // 1. TIGHT HEADSHOT & SHOULDERS CROP (Square 1:1) - True close-up portrait
  const tightSize = 1000;
  const tightLeft = Math.round((width - tightSize) / 2);
  const tightTop = 1020;

  await sharp(inputPath)
    .extract({ left: tightLeft, top: tightTop, width: tightSize, height: tightSize })
    .resize(800, 800, { kernel: sharp.kernel.lanczos3 })
    .jpeg({ quality: 94, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(path.join(outputDir, 'academic_portrait.jpg'));

  await sharp(inputPath)
    .extract({ left: tightLeft, top: tightTop, width: tightSize, height: tightSize })
    .resize(800, 800, { kernel: sharp.kernel.lanczos3 })
    .webp({ quality: 92, effort: 6, smartSubsample: true })
    .toFile(path.join(outputDir, 'academic_portrait.webp'));

  // 2. FULL LANDSCAPE QUANTUM BANNER
  await sharp(inputPath)
    .extract({ left: 0, top: 0, width: width, height: contentHeight })
    .resize(1600, null, { kernel: sharp.kernel.lanczos3 })
    .jpeg({ quality: 90, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(path.join(outputDir, 'quantum_banner.jpg'));

  await sharp(inputPath)
    .extract({ left: 0, top: 0, width: width, height: contentHeight })
    .resize(1600, null, { kernel: sharp.kernel.lanczos3 })
    .webp({ quality: 88, effort: 6 })
    .toFile(path.join(outputDir, 'quantum_banner.webp'));

  console.log('✅ Sharp: Academic portrait & Quantum banner generated successfully with Lanczos3 & 4:4:4 subsampling!');
}

main().catch(console.error);
