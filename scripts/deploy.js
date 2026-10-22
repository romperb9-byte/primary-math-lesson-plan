import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

console.log('Building project...');
execSync('npm run build', { stdio: 'inherit' });

console.log('Deploying to gh-pages branch...');
const commands = [
  'git init',
  'git checkout -b gh-pages',
  'git add -A',
  'git commit -m "deploy: update GitHub Pages build"',
  'git remote add origin https://github.com/romperb9-byte/primary-math-lesson-plan.git',
  'git push -f origin gh-pages',
];

for (const cmd of commands) {
  try {
    execSync(cmd, { cwd: distDir, stdio: 'inherit' });
  } catch (err) {
    // If remote already exists, set url
    if (cmd.includes('remote add')) {
      execSync('git remote set-url origin https://github.com/romperb9-byte/primary-math-lesson-plan.git', {
        cwd: distDir,
        stdio: 'inherit',
      });
    } else {
      throw err;
    }
  }
}

// Clean up .git inside dist
const dotGitInDist = path.join(distDir, '.git');
if (fs.existsSync(dotGitInDist)) {
  fs.rmSync(dotGitInDist, { recursive: true, force: true });
}

console.log('Successfully deployed to GitHub Pages!');
console.log('Live URL: https://romperb9-byte.github.io/primary-math-lesson-plan/');
