#!/usr/bin/env node
/**
 * Post-deploy IndexNow submission script.
 * Notifies Bing, Yandex, ChatGPT Search, and Microsoft Copilot
 * that site content has been updated.
 */

const API_KEY = 'udcs2026indexnow';
const DOMAIN = 'universal-dynamic.com';

const urls = [
  `https://${DOMAIN}/`,
  `https://${DOMAIN}/about`,
  `https://${DOMAIN}/contact`,
  `https://${DOMAIN}/privacy-policy`,
  `https://${DOMAIN}/terms-of-service`,
  `https://${DOMAIN}/services/lake-jackson-tx`,
];

async function submitIndexNow() {
  const payload = {
    host: DOMAIN,
    key: API_KEY,
    keyLocation: `https://${DOMAIN}/${API_KEY}.txt`,
    urlList: urls,
  };

  console.log(`\n🔔 IndexNow: Submitting ${urls.length} URLs to search engines...\n`);

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 202) {
      console.log(`✅ IndexNow: Successfully submitted! Status: ${response.status}`);
      console.log('   URLs will be indexed by Bing, Yandex, ChatGPT Search, and Copilot.\n');
    } else {
      console.warn(`⚠️  IndexNow: Received status ${response.status}`);
      const text = await response.text();
      if (text) console.warn(`   Response: ${text}`);
    }
  } catch (error) {
    console.error('❌ IndexNow: Submission failed:', error.message);
    console.error('   This is non-blocking — your site is still deployed.\n');
  }
}

submitIndexNow();
