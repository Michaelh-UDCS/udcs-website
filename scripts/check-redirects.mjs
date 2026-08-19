import https from 'https';
import http from 'http';

function checkHeaders(urlStr) {
  return new Promise((resolve) => {
    const mod = urlStr.startsWith('https:') ? https : http;
    const req = mod.request(urlStr, { method: 'HEAD' }, (res) => {
      resolve({
        url: urlStr,
        status: res.statusCode,
        location: res.headers.location,
        headers: res.headers
      });
    });
    req.on('error', err => resolve({ url: urlStr, error: err.message }));
    req.end();
  });
}

const testUrls = [
  'http://universal-dynamic.com/',
  'http://www.universal-dynamic.com/',
  'https://www.universal-dynamic.com/',
  'https://universal-dynamic.com/index.html',
  'https://universal-dynamic.com/about.html',
  'https://universal-dynamic.com/services/lake-jackson-tx/',
  'https://universal-dynamic.com/services/lake-jackson-tx.html',
  'https://universal-dynamic.com/family-worship-assistant/',
  'https://universal-dynamic-website.web.app/'
];

for (const u of testUrls) {
  const res = await checkHeaders(u);
  console.log('URL:', res.url);
  console.log('  Status:', res.status, '| Location:', res.location || '(none)');
}
