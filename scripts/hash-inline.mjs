import crypto from 'crypto';

const scripts = [
  "document.documentElement.classList.add('js-reveal')",
  "document.getElementById('app-css').media='all'",
  "addEventListener('load',function(){var l=document.createElement('link');l.rel='stylesheet';l.href='/fonts.css';document.head.appendChild(l)})",
];

for (const s of scripts) {
  console.log('sha256-' + crypto.createHash('sha256').update(s).digest('base64'));
  console.log('  ←', s);
}
