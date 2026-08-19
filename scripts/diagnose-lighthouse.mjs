import http from 'http';
import fs from 'fs';
import path from 'path';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain'
};

import zlib from 'zlib';

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  if (urlPath.endsWith('/')) urlPath += 'index';

  let filePath = path.join('dist', urlPath);
  if (!path.extname(filePath)) {
    if (fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    } else if (fs.existsSync(path.join(filePath, 'index.html'))) {
      filePath = path.join(filePath, 'index.html');
    }
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    let data = fs.readFileSync(filePath);
    const headers = {
      'Content-Type': mimeTypes[ext] || 'text/plain',
      'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'sha256-yQ+zr7xyVDCj1fSCp51D7X9oKchKd9aj2LsZToiQ54U='; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://*.googleapis.com https://*.firebaseio.com; frame-src 'self' https://www.openstreetmap.org; form-action 'self' https://formsubmit.co; frame-ancestors 'none'; object-src 'none'; base-uri 'none';"
    };

    if (['.html', '.js', '.css', '.json', '.svg', '.xml', '.txt'].includes(ext)) {
      data = zlib.gzipSync(data);
      headers['Content-Encoding'] = 'gzip';
    }

    res.writeHead(200, headers);
    res.end(data);
  } else {
    const notFoundPath = path.join('dist', '404.html');
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(fs.existsSync(notFoundPath) ? fs.readFileSync(notFoundPath) : 'Not Found');
  }
});

const PORT = 5193;

async function runDiagnosis() {
  server.listen(PORT);
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu'] });

  const routes = ['/', '/services/lake-jackson-tx', '/contact'];

  for (const route of routes) {
    console.log(`\n=================== DIAGNOSING ${route} ===================`);
    const runnerResult = await lighthouse(`http://localhost:${PORT}${route}`, {
      port: chrome.port,
      output: 'json',
      logLevel: 'error',
      formFactor: 'mobile',
      screenEmulation: { mobile: true, width: 390, height: 844, deviceScaleFactor: 3, disabled: false },
    });

    const audits = runnerResult.lhr.audits;
    const categories = runnerResult.lhr.categories;

    console.log(`Category Scores:`);
    console.log(`  Performance:    ${Math.round(categories.performance.score * 100)}`);
    console.log(`  Accessibility:  ${Math.round(categories.accessibility.score * 100)}`);
    console.log(`  Best Practices: ${Math.round(categories['best-practices'].score * 100)}`);
    console.log(`  SEO:            ${Math.round(categories.seo.score * 100)}`);

    console.log(`\nFailing / Deducted Audits:`);
    for (const [id, audit] of Object.entries(audits)) {
      if (audit.score !== null && audit.score < 1.0) {
        console.log(`  ❌ [${id}] (Score: ${audit.score}) - ${audit.title}`);
        if (audit.displayValue) console.log(`     Value: ${audit.displayValue}`);
        if (audit.explanation) console.log(`     Explanation: ${audit.explanation}`);
        if (audit.details && audit.details.items && audit.details.items.length > 0) {
          const sample = JSON.stringify(audit.details.items.slice(0, 3));
          console.log(`     Details: ${sample.slice(0, 200)}`);
        }
      }
    }
  }

  await chrome.kill();
  server.close();
}

runDiagnosis().catch(err => {
  console.error(err);
  server.close();
  process.exit(1);
});

