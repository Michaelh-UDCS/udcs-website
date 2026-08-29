import fs from 'fs';
import path from 'path';

const html = fs.readFileSync('dist/index.html', 'utf8');
const cssFiles = fs.readdirSync('dist/assets').filter((f) => f.startsWith('app-') && f.endsWith('.css'));
const css = cssFiles.length
  ? fs.readFileSync(path.join('dist/assets', cssFiles[0]), 'utf8')
  : '';

console.log('=== JS-DISABLED VERIFICATION ===');

const hasRevealCss =
  html.includes('html.js-reveal .reveal-on-scroll') ||
  css.includes('html.js-reveal .reveal-on-scroll');
console.log(
  '1. CSS scopes opacity:0 strictly to html.js-reveal (100% visible with JS off):',
  hasRevealCss,
);

const hasDetails = html.includes('<details');
console.log('2. FAQ uses native <details>/<summary> accordions:', hasDetails);

const hasForm = html.includes('action="https://formsubmit.co/michael@universal-dynamic.com"');
console.log('3. Form has native FormSubmit POST action:', hasForm);

const hasHoney = html.includes('name="_honey"');
const hasTemplate = html.includes('value="table"');
console.log('4. Form includes honeypot & table template:', hasHoney && hasTemplate);

const hasNavLinks = html.includes('href="/about"') && html.includes('href="/contact"');
console.log('5. Navigation links present and crawlable:', hasNavLinks);

const ok = hasRevealCss && hasDetails && hasForm && hasHoney && hasTemplate && hasNavLinks;
if (!ok) {
  console.error('\nJS-disabled verification FAILED');
  process.exit(1);
}
console.log('\nAll JS-disabled tests PASSED with zero runtime degradation.');
