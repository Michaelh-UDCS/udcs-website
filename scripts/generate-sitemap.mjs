import fs from 'fs';

const routes = [
  { loc: 'https://universal-dynamic.com/', priority: '1.0', changefreq: 'weekly' },
  { loc: 'https://universal-dynamic.com/about', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://universal-dynamic.com/contact', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://universal-dynamic.com/services/lake-jackson-tx', priority: '0.9', changefreq: 'weekly' },
  { loc: 'https://universal-dynamic.com/privacy-policy', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://universal-dynamic.com/terms-of-service', priority: '0.8', changefreq: 'monthly' },
];

/** Mirror siteConfig.updatedAt — single SoT in src/config/siteConfig.ts */
function readUpdatedAtFromSiteConfig() {
  const configPath = new URL('../src/config/siteConfig.ts', import.meta.url);
  const source = fs.readFileSync(configPath, 'utf8');
  const match = source.match(/updatedAt:\s*["'](\d{4}-\d{2}-\d{2})["']/);
  if (!match) {
    throw new Error('Could not parse updatedAt from src/config/siteConfig.ts');
  }
  return match[1];
}

const lastmod = readUpdatedAtFromSiteConfig();

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${r.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
if (fs.existsSync('dist')) {
  fs.writeFileSync('dist/sitemap.xml', xml, 'utf8');
}

console.log(`✅ Build-time sitemap.xml generated successfully for ${routes.length} URLs (lastmod=${lastmod}).`);
