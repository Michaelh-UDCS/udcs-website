import fs from 'fs';
import path from 'path';

const htmlFile = 'dist/index.html';
if (!fs.existsSync(htmlFile)) {
  console.error(`❌ FAQ Check Error: ${htmlFile} does not exist. Run npm run build first.`);
  process.exit(1);
}

const html = fs.readFileSync(htmlFile, 'utf8');

// 1. Extract all application/ld+json blocks
const jsonLdRegex = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
let match;
let faqSchema = null;

while ((match = jsonLdRegex.exec(html)) !== null) {
  try {
    const parsed = JSON.parse(match[1]);
    if (Array.isArray(parsed)) {
      const found = parsed.find(item => item['@type'] === 'FAQPage');
      if (found) faqSchema = found;
    } else if (parsed['@type'] === 'FAQPage') {
      faqSchema = parsed;
    }
  } catch (e) {
    console.error('Error parsing JSON-LD in dist/index.html:', e);
  }
}

if (!faqSchema || !faqSchema.mainEntity || !Array.isArray(faqSchema.mainEntity)) {
  console.error('❌ FAQ Check Error: No valid FAQPage schema found in dist/index.html');
  process.exit(1);
}

// 2. Strip all script tags to get the pure rendered body
const bodyWithoutScripts = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');

console.log(`\n🔍 Checking FAQ Schema Parity in ${htmlFile}...`);
console.log(`Found ${faqSchema.mainEntity.length} questions in FAQPage schema.\n`);

let failed = false;
faqSchema.mainEntity.forEach((item, index) => {
  const q = item.name;
  const a = item.acceptedAnswer?.text;

  const qFound = bodyWithoutScripts.includes(q);
  const aFound = bodyWithoutScripts.includes(a);

  if (qFound && aFound) {
    console.log(`  ✅ [Pair ${index + 1}] Matched Question & Answer: "${q.slice(0, 50)}..."`);
  } else {
    failed = true;
    console.error(`  ❌ [Pair ${index + 1}] MISMATCH:`);
    console.error(`     Question: "${q}" (In Body: ${qFound})`);
    console.error(`     Answer:   "${a}" (In Body: ${aFound})`);
  }
});

if (failed) {
  console.error('\n❌ FAQ Check FAILED: Some FAQ questions or answers in schema are missing from rendered HTML body.');
  process.exit(1);
} else {
  console.log(`\n✨ All ${faqSchema.mainEntity.length} FAQ Q&A pairs verified in rendered HTML body outside JSON-LD.`);
}
