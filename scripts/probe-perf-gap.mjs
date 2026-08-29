import http from 'http';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import crypto from 'crypto';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

const mime = {
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
  '.txt': 'text/plain',
};

const server = http.createServer((req, res) => {
  let u = req.url.split('?')[0];
  if (u.endsWith('/')) u += 'index';
  let fp = path.join('dist', u);
  if (!path.extname(fp)) {
    if (fs.existsSync(fp + '.html')) fp += '.html';
    else if (fs.existsSync(path.join(fp, 'index.html'))) fp = path.join(fp, 'index.html');
  }
  if (!(fs.existsSync(fp) && fs.statSync(fp).isFile())) {
    res.writeHead(404);
    return res.end('nf');
  }
  let data = fs.readFileSync(fp);
  const ext = path.extname(fp);
  const headers = { 'Content-Type': mime[ext] || 'text/plain' };
  if (['.html', '.js', '.css', '.json', '.svg', '.xml', '.txt'].includes(ext)) {
    data = zlib.gzipSync(data);
    headers['Content-Encoding'] = 'gzip';
  }
  res.writeHead(200, headers);
  res.end(data);
});

await new Promise((r) => server.listen(5201, r));
const chrome = await chromeLauncher.launch({
  chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu'],
});
const result = await lighthouse('http://127.0.0.1:5201/', {
  port: chrome.port,
  output: 'json',
  formFactor: 'mobile',
  screenEmulation: {
    mobile: true,
    width: 412,
    height: 823,
    deviceScaleFactor: 1.75,
    disabled: false,
  },
  onlyCategories: ['performance'],
});
const lhr = result.lhr;
console.log('PERF', Math.round(lhr.categories.performance.score * 100));
console.log(
  JSON.stringify({
    FCP: lhr.audits['first-contentful-paint']?.displayValue,
    LCP: lhr.audits['largest-contentful-paint']?.displayValue,
    FCP_s: lhr.audits['first-contentful-paint']?.score,
    LCP_s: lhr.audits['largest-contentful-paint']?.score,
    SI: lhr.audits['speed-index']?.displayValue,
    TBT: lhr.audits['total-blocking-time']?.displayValue,
  }),
);
console.log(
  'render-blocking',
  lhr.audits['render-blocking-resources']?.score,
  lhr.audits['render-blocking-resources']?.displayValue,
  JSON.stringify(lhr.audits['render-blocking-resources']?.details?.items),
);
console.log(
  'fonts',
  (lhr.audits['network-requests']?.details?.items || [])
    .filter((i) => i.resourceType === 'Font')
    .map((i) => i.url.split('/').pop()),
);
await chrome.kill();
server.close();

const script = "document.getElementById('app-css').rel='stylesheet'";
console.log(
  'async css script hash',
  'sha256-' + crypto.createHash('sha256').update(script).digest('base64'),
);
