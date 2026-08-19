import https from 'https';
import fs from 'fs';
import path from 'path';

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';

function fetchUrl(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location, headers).then(resolve, reject);
      }
      let data = [];
      res.on('data', chunk => data.push(chunk));
      res.on('end', () => resolve({ status: res.statusCode, data: Buffer.concat(data), text: Buffer.concat(data).toString('utf8') }));
    }).on('error', reject);
  });
}

async function run() {
  const fontDir = path.resolve('public/fonts');
  if (!fs.existsSync(fontDir)) fs.mkdirSync(fontDir, { recursive: true });

  const url = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap';
  const res = await fetchUrl(url, { 'User-Agent': UA });
  console.log('Fetched Google Fonts CSS length:', res.text.length);

  const blocks = res.text.match(/@font-face\s*\{[^}]+\}/g) || [];
  console.log('Total @font-face blocks found:', blocks.length);

  let localCss = '';
  let count = 0;

  for (const block of blocks) {
    const isLatin = block.includes('U+0000-00FF') || block.includes('U+0100-02AF') || block.includes('latin');
    if (!isLatin) continue;

    const familyMatch = block.match(/font-family:\s*['"]?([^'";]+)['"]?/i);
    const weightMatch = block.match(/font-weight:\s*([^;]+);/i);
    const styleMatch = block.match(/font-style:\s*([^;]+);/i);
    const srcMatch = block.match(/src:\s*url\((https:\/\/[^)]+)\)\s*format\(['"]?woff2['"]?\)/i);
    const unicodeMatch = block.match(/unicode-range:\s*([^;]+);/i);

    if (familyMatch && weightMatch && srcMatch) {
      const family = familyMatch[1].replace(/\s+/g, '');
      const weight = weightMatch[1].trim();
      const style = styleMatch ? styleMatch[1].trim() : 'normal';
      const remoteUrl = srcMatch[1];
      const filename = `${family}-${weight}-${style}-${count}.woff2`;
      const filePath = path.join(fontDir, filename);

      if (!fs.existsSync(filePath)) {
        const fontRes = await fetchUrl(remoteUrl);
        fs.writeFileSync(filePath, fontRes.data);
        console.log(`  Downloaded ${filename} (${(fontRes.data.length / 1024).toFixed(2)} KB)`);
      }

      localCss += `@font-face {
  font-family: '${familyMatch[1]}';
  font-style: ${style};
  font-weight: ${weight};
  font-display: swap;
  src: url('/fonts/${filename}') format('woff2');
  ${unicodeMatch ? `unicode-range: ${unicodeMatch[1]};` : ''}
}\n\n`;
      count++;
    }
  }

  // Fallback font metrics overrides for zero CLS
  localCss += `/* Fallback font metric overrides for 0.000 CLS */
@font-face {
  font-family: 'Inter-Fallback';
  src: local('Arial');
  ascent-override: 90%;
  descent-override: 22.5%;
  line-gap-override: 0%;
  size-adjust: 107.5%;
}

@font-face {
  font-family: 'CormorantGaramond-Fallback';
  src: local('Georgia'), local('Times New Roman');
  ascent-override: 88%;
  descent-override: 24%;
  line-gap-override: 0%;
  size-adjust: 102%;
}
`;

  fs.writeFileSync('src/fonts.css', localCss, 'utf8');
  console.log(`Generated src/fonts.css with ${count} local @font-face rules and fallback metric overrides.`);
}

run().catch(console.error);

