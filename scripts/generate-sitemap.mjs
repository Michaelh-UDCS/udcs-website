import fs from 'fs';

const routes = [
  { loc: 'https://universal-dynamic.com/', priority: '1.0', changefreq: 'weekly' },
  { loc: 'https://universal-dynamic.com/about', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://universal-dynamic.com/contact', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://universal-dynamic.com/services/lake-jackson-tx', priority: '0.9', changefreq: 'weekly' },
  { loc: 'https://universal-dynamic.com/privacy-policy', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://universal-dynamic.com/terms-of-service', priority: '0.8', changefreq: 'monthly' },
];

const today = new Date().toISOString().split('T')[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${r.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
if (fs.existsSync('dist')) {
  fs.writeFileSync('dist/sitemap.xml', xml, 'utf8');
}

console.log(`✅ Build-time sitemap.xml generated successfully for ${routes.length} URLs.`);