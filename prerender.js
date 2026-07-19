import fs from 'fs';
import path from 'path';

const routes = [
  'projects',
  'certificates',
  'services',
  'resume',
  'silentpipe',
  'pentestlab',
  'research',
  'about',
  'prisma',
  'immersive'
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

console.log('✅ SPA Prerender: Generated index.html for all primary routes successfully!');
