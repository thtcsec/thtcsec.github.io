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
