import http from 'http';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
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

  const is404 = !(fs.existsSync(filePath) && fs.statSync(filePath).isFile());
  const actualPath = is404 ? path.join('dist', '404.html') : filePath;
  const ext = path.extname(actualPath);
  const status = is404 ? 404 : 200;

  if (fs.existsSync(actualPath) && fs.statSync(actualPath).isFile()) {
    let data = fs.readFileSync(actualPath);
    const headers = {
      'Content-Type': mimeTypes[ext] || 'text/plain',
      'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'sha256-yQ+zr7xyVDCj1fSCp51D7X9oKchKd9aj2LsZToiQ54U=' 'sha256-nOHfe+QrS86Ci+MG38WTch0z7Ti6ZS1QaFSnfKs9NiQ=' 'sha256-v4SbjLYJOxbb/ejuluaA0wlrcpnXoCyGBgry/pwXUbE='; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://*.googleapis.com https://*.firebaseio.com; frame-src 'self' https://www.openstreetmap.org; form-action 'self' https://formsubmit.co; frame-ancestors 'none'; object-src 'none'; base-uri 'none';"
    };

    if (['.html', '.js', '.css', '.json', '.svg', '.xml', '.txt'].includes(ext)) {
      data = zlib.gzipSync(data);
      headers['Content-Encoding'] = 'gzip';
    }

    res.writeHead(status, headers);
    res.end(data);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 5195;

async function runAudits() {
  server.listen(PORT);
  console.log(`Verification Server listening on port ${PORT}`);

  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu'] });
  const routes = [
    '/',
    '/about',
    '/contact',
    '/services/lake-jackson-tx',
    '/privacy-policy',
    '/terms-of-service',
    '/thank-you',
    '/404',
  ];

  const results = {};

  for (const route of routes) {
    const targetUrl = `http://localhost:${PORT}${route}`;
    console.log(`\nAuditing ${route} (Mobile)...`);

    const runnerResult = await lighthouse(targetUrl, {
      port: chrome.port,
      output: 'json',
      logLevel: 'error',
      formFactor: 'mobile',
      screenEmulation: {
        mobile: true,
        width: 390,
        height: 844,
        deviceScaleFactor: 3,
        disabled: false,
      },
    });

    const categories = runnerResult.lhr.categories;
    const scores = {
      performance: Math.round(categories.performance.score * 100),
      accessibility: Math.round(categories.accessibility.score * 100),
      bestPractices: Math.round(categories['best-practices'].score * 100),
      seo: Math.round(categories.seo.score * 100),
    };

    results[route] = scores;
    console.log(`  Results for ${route}:`);
    console.log(`    Performance:    ${scores.performance}/100`);
    console.log(`    Accessibility:  ${scores.accessibility}/100`);
    console.log(`    Best Practices: ${scores.bestPractices}/100`);
    console.log(`    SEO:            ${scores.seo}/100`);
  }

  try {
    await chrome.kill();
  } catch (e) {
    // Ignore cleanup file locks on Windows
  }
  server.close();

  fs.writeFileSync('lighthouse-100-verified.json', JSON.stringify(results, null, 2), 'utf8');
  console.log('\nSaved audit summary to lighthouse-100-verified.json');
}

runAudits().catch(err => {
  console.error(err);
  server.close();
  process.exit(1);
});


