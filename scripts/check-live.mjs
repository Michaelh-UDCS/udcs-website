import https from 'https';

function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', (err) => resolve({ error: err.message }));
  });
}

const page = await fetchUrl('https://universal-dynamic.com/services/lake-jackson-tx');
console.log('PAGE STATUS:', page.status);
console.log('CONTENT-TYPE:', page.headers['content-type']);

const cssMatches = page.body.match(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi) || [];
const jsMatches = page.body.match(/<script[^>]+src=["'][^"']+["'][^>]*>/gi) || [];

console.log('\nCSS LINKS:');
for (const m of cssMatches) {
  const href = m.match(/href=["']([^"']+)["']/i)?.[1];
  const assetUrl = href.startsWith('http') ? href : (href.startsWith('/') ? 'https://universal-dynamic.com' + href : 'https://universal-dynamic.com/services/' + href);
  const res = await fetchUrl(assetUrl);
  console.log('  Found href:', href);
  console.log('    Resolved URL:', assetUrl);
  console.log('    Status:', res.status, '| Content-Type:', res.headers?.['content-type'], '| Body length:', res.body?.length);
}

console.log('\nSCRIPT TAGS:');
for (const m of jsMatches) {
  const src = m.match(/src=["']([^"']+)["']/i)?.[1];
  const assetUrl = src.startsWith('http') ? src : (src.startsWith('/') ? 'https://universal-dynamic.com' + src : 'https://universal-dynamic.com/services/' + src);
  const res = await fetchUrl(assetUrl);
  console.log('  Found src:', src);
  console.log('    Resolved URL:', assetUrl);
  console.log('    Status:', res.status, '| Content-Type:', res.headers?.['content-type'], '| Body length:', res.body?.length);
}
