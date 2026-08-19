import http from 'http';
import fs from 'fs';
import path from 'path';

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
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

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
    res.end(fs.readFileSync(filePath));
  } else {
    const notFoundPath = path.join('dist', '404.html');
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(fs.existsSync(notFoundPath) ? fs.readFileSync(notFoundPath) : 'Not Found');
  }
});

server.listen(5189, async () => {
  const routes = [
    '/',
    '/about',
    '/contact',
    '/services/lake-jackson-tx',
    '/privacy-policy',
    '/terms-of-service',
    '/thank-you',
    '/sitemap.xml',
    '/this-does-not-exist'
  ];

  console.log('Testing static routes against cleanUrls resolution:');
  for (const r of routes) {
    const res = await fetch('http://localhost:5189' + r);
    const body = await res.text();
    const is404Content = body.includes('Page Not Found') || body.includes('404');
    console.log(`  ${r.padEnd(30)} -> HTTP ${res.status} (${res.headers.get('content-type')}) | Content 404: ${is404Content}`);
  }
  server.close();
});

