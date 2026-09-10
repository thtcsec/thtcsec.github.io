import fs from 'fs';
import path from 'path';

const routes = [
  // Primary top-level routes
  'projects',
  'certificates',
  'services',
  'resume',
  'publications',
  'silentpipe',
  'pentestlab',
  'research',
  'about',
  'prisma',
  'immersive',
  'arcade',
  'game',

  // Project detail routes
  'projects/vetc-traffic-density',
  'projects/sdn-its-resilience-ai',
  'projects/securecoating-vision',
  'projects/foundry-platform',
  'projects/quasar-quantum-routing',
  'projects/enterpriserag',
  'projects/driftskills-ai',
  'projects/orangecloud-insights',
  'projects/ctsmartcam',
  'projects/multi-cloud-soar',
  'projects/pentest-lab',
  'projects/lingfilm',
  'projects/ai-lms',
  'projects/silentpipe',
  'projects/chaincampus',
  'projects/ai-sentinel',
  'projects/face-recognition',
  'projects/yodobashi',
  'projects/portfolio',

  // Legacy project IDs for backward compatibility (200 OK for old Googlebot links)
  'projects/ct-smartcam',
  'projects/foundry',
  'projects/quasar',
  'projects/securecoating',
  'projects/sdn_its',
  'projects/sdn-its',

  // Research article routes
  'research/soar-platform-aws-gcp',
  'research/llm-citation-verification',
  'research/pentest-lab-series',
  'research/ctsmartcam-edge-ai'
];

const distDir = path.resolve('dist');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run build first.');
  process.exit(1);
}

import sharp from 'sharp';

// Automatic optimization for academic portrait if raw source exists
const rawImgPath = path.resolve('scripts/raw/IMG_20260728_113729.jpg');
if (fs.existsSync(rawImgPath)) {
  try {
    const meta = await sharp(rawImgPath).metadata();
    console.log(`📸 Processing raw image: ${meta.width}x${meta.height}, format: ${meta.format}`);
    const { width, height } = meta;

    // Watermark line starts at around 0.875 of height
    const contentHeight = Math.round(height * 0.875);

    const outDir = path.resolve('public/images');

    // 1. TIGHT HEADSHOT & SHOULDERS CROP (Square 1:1) - True close-up portrait
    // Head top ≈ 1180, Chin ≈ 1520, Shoulders ≈ 1750, Chest ≈ 2000
    const tightSize = 1000;
    const tightLeft = Math.round((width - tightSize) / 2); // 1500
    const tightTop = 1020; // 160px headroom above hair, face prominently centered

    await sharp(rawImgPath)
      .extract({ left: tightLeft, top: tightTop, width: tightSize, height: tightSize })
      .resize(800, 800, { kernel: sharp.kernel.lanczos3 })
      .jpeg({ quality: 94, mozjpeg: true, chromaSubsampling: '4:4:4' })
      .toFile(path.join(outDir, 'academic_portrait.jpg'));

    await sharp(rawImgPath)
      .extract({ left: tightLeft, top: tightTop, width: tightSize, height: tightSize })
      .resize(800, 800, { kernel: sharp.kernel.lanczos3 })
      .webp({ quality: 92, effort: 6, smartSubsample: true })
      .toFile(path.join(outDir, 'academic_portrait.webp'));

    // 2. MEDIUM 4:5 PORTRAIT - Full event context from backdrop title to hips
    const pWidth = 2400;
    const pHeight = 3000;
    const pLeft = Math.round((width - pWidth) / 2); // 800
    const pTop = 0; // includes top banner text

    if (pTop + pHeight <= contentHeight) {
      await sharp(rawImgPath)
        .extract({ left: pLeft, top: pTop, width: pWidth, height: pHeight })
        .resize(800, 1000, { kernel: sharp.kernel.lanczos3 })
        .jpeg({ quality: 92, mozjpeg: true, chromaSubsampling: '4:4:4' })
        .toFile(path.join(outDir, 'academic_portrait_medium.jpg'));

      await sharp(rawImgPath)
        .extract({ left: pLeft, top: pTop, width: pWidth, height: pHeight })
        .resize(800, 1000, { kernel: sharp.kernel.lanczos3 })
        .webp({ quality: 90, effort: 6, smartSubsample: true })
        .toFile(path.join(outDir, 'academic_portrait_medium.webp'));
    }

    // 3. FULL LANDSCAPE EVENT BANNER (16:9 / 3:2 landscape without watermark bar)
    await sharp(rawImgPath)
      .extract({ left: 0, top: 0, width: width, height: contentHeight })
      .resize(1600, null, { kernel: sharp.kernel.lanczos3 })
      .jpeg({ quality: 90, mozjpeg: true, chromaSubsampling: '4:4:4' })
      .toFile(path.join(outDir, 'quantum_banner.jpg'));

    await sharp(rawImgPath)
      .extract({ left: 0, top: 0, width: width, height: contentHeight })
      .resize(1600, null, { kernel: sharp.kernel.lanczos3 })
      .webp({ quality: 88, effort: 6 })
      .toFile(path.join(outDir, 'quantum_banner.webp'));

    console.log('✅ Sharp: Academic portrait (square 1:1, medium 4:5, quantum banner) generated successfully with Lanczos3 & 4:4:4 subsampling!');
  } catch (err) {
    console.error('⚠️ Sharp image processing error:', err);
  }
}

routes.forEach(route => {
  const routeDir = path.join(distDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  fs.copyFileSync(
    path.join(distDir, 'index.html'),
    path.join(routeDir, 'index.html')
  );
});

console.log(`✅ SPA Prerender: Generated index.html for ${routes.length} routes successfully!`);
