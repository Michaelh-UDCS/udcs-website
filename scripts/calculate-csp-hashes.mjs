import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const distDir = path.resolve('dist');
const htmlFiles = [];

function findHtml(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory() && e.name !== 'assets') {
      findHtml(full);
    } else if (e.isFile() && e.name.endsWith('.html')) {
      htmlFiles.push(full);
    }
  }
}

findHtml(distDir);

const uniqueHashes = new Set();
const scriptMap = [];

for (const f of htmlFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const scripts = content.match(/<script(?![^>]*type=['"]application\/ld\+json['"])[^>]*>([\s\S]*?)<\/script>/gi) || [];

  for (const s of scripts) {
    const srcMatch = s.match(/src=['"]([^'"]+)['"]/i);
    if (srcMatch) continue; // External script tag

    const bodyMatch = s.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
    if (bodyMatch && bodyMatch[1].trim()) {
      const code = bodyMatch[1];
      const hash = 'sha256-' + crypto.createHash('sha256').update(code, 'utf8').digest('base64');
      uniqueHashes.add(hash);
      scriptMap.push({ file: path.relative(distDir, f), code: code.trim(), hash });
    }
  }
}

console.log(`Found ${scriptMap.length} inline scripts across ${htmlFiles.length} HTML files.`);
console.log('Unique Script Hashes:');
for (const h of uniqueHashes) {
  console.log(`  '${h}'`);
}

const hashString = Array.from(uniqueHashes).map(h => `'${h}'`).join(' ');
const csp = `default-src 'self'; script-src 'self' ${hashString}; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://*.googleapis.com https://*.firebaseio.com; form-action 'self' https://formsubmit.co; frame-ancestors 'none'; object-src 'none'; base-uri 'none';`;

console.log('\nGenerated Strict CSP:');
console.log(csp);

