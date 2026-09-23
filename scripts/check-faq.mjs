import fs from 'fs';

const htmlFiles = [
  'dist/index.html',
  'dist/guides/google-workspace-for-startups.html',
];

function extractFaqSchema(html, label) {
  const jsonLdRegex = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  let faqSchema = null;

  while ((match = jsonLdRegex.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(match[1]);
      if (Array.isArray(parsed)) {
        const found = parsed.find((item) => item['@type'] === 'FAQPage');
        if (found) faqSchema = found;
      } else if (parsed['@type'] === 'FAQPage') {
        faqSchema = parsed;
      }
    } catch (e) {
      console.error(`Error parsing JSON-LD in ${label}:`, e);
    }
  }

  return faqSchema;
}

function checkFile(htmlFile) {
  if (!fs.existsSync(htmlFile)) {
    console.error(`❌ FAQ Check Error: ${htmlFile} does not exist. Run npm run build first.`);
    return false;
  }

  const html = fs.readFileSync(htmlFile, 'utf8');
  const faqSchema = extractFaqSchema(html, htmlFile);

  if (!faqSchema || !faqSchema.mainEntity || !Array.isArray(faqSchema.mainEntity)) {
    console.error(`❌ FAQ Check Error: No valid FAQPage schema found in ${htmlFile}`);
    return false;
  }

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
    console.error(`\n❌ FAQ Check FAILED for ${htmlFile}: schema Q&A missing from rendered HTML body.`);
    return false;
  }

  console.log(
    `\n✨ All ${faqSchema.mainEntity.length} FAQ Q&A pairs verified in ${htmlFile} outside JSON-LD.`,
  );
  return true;
}

let allPassed = true;
for (const file of htmlFiles) {
  if (!checkFile(file)) allPassed = false;
}

if (!allPassed) {
  process.exit(1);
}
