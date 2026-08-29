import http from 'http';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
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

await new Promise((r) => server.listen(5204, r));
const chrome = await chromeLauncher.launch({
  chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu'],
});
const result = await lighthouse('http://127.0.0.1:5204/', {
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
const a = result.lhr.audits;
const out = {
  perf: Math.round(result.lhr.categories.performance.score * 100),
  FCP: a['first-contentful-paint']?.displayValue,
  LCP: a['largest-contentful-paint']?.displayValue,
  LCP_ms: a['largest-contentful-paint']?.numericValue,
  LCP_s: a['largest-contentful-paint']?.score,
  TTI: a['interactive']?.displayValue,
  lcpElement: a['largest-contentful-paint-element'],
  priorLcp: a['prioritize-lcp-image'],
  network: (a['network-requests']?.details?.items || []).map((i) => ({
    url: i.url.replace('http://127.0.0.1:5204', ''),
    type: i.resourceType,
    transfer: i.transferSize,
    start: Math.round(i.networkRequestTime),
    end: Math.round(i.networkEndTime),
  })),
  mainthread: a['mainthread-work-breakdown']?.details?.items,
  metrics: a.metrics?.details?.items?.[0],
};
fs.writeFileSync('lighthouse-lcp-detail.json', JSON.stringify(out, null, 2));
console.log(JSON.stringify(out, null, 2).slice(0, 8000));
await chrome.kill();
server.close();
