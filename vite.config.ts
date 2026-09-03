import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode, isSsrBuild }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/',
    server: {
      port: 5173,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      !isSsrBuild && visualizer({
        filename: 'stats-client.json',
        template: 'raw-data',
        gzipSize: true,
        brotliSize: true,
      }),
    ].filter(Boolean),
    build: {
      rollupOptions: {
        input: {
          reveal: path.resolve(__dirname, 'src/islands/reveal.ts'),
          'hero-glow': path.resolve(__dirname, 'src/islands/hero-glow.ts'),
          calculator: path.resolve(__dirname, 'src/islands/calculator.ts'),
          nav: path.resolve(__dirname, 'src/islands/nav.ts'),
          analytics: path.resolve(__dirname, 'src/islands/analytics.ts'),
        },
        output: {
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
        },
      },
    },
    ssgOptions: {
      formatting: 'none',
      beastiesOptions: {
        preload: 'media',
      },
      onPageRendered(route, html) {
        const manifestPath = path.resolve(__dirname, 'dist/.vite/manifest.json');
        let revealFile = 'assets/reveal.js';
        let heroGlowFile = 'assets/hero-glow.js';
        let calcFile = 'assets/calculator.js';
        let navFile = 'assets/nav.js';
        let analyticsFile = 'assets/analytics.js';
        if (fs.existsSync(manifestPath)) {
          try {
            const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
            if (manifest['src/islands/reveal.ts']) revealFile = manifest['src/islands/reveal.ts'].file;
            if (manifest['src/islands/hero-glow.ts']) heroGlowFile = manifest['src/islands/hero-glow.ts'].file;
            if (manifest['src/islands/calculator.ts']) calcFile = manifest['src/islands/calculator.ts'].file;
            if (manifest['src/islands/nav.ts']) navFile = manifest['src/islands/nav.ts'].file;
            if (manifest['src/islands/analytics.ts']) analyticsFile = manifest['src/islands/analytics.ts'].file;
          } catch (e) {
            console.error('Error reading manifest in onPageRendered', e);
          }
        }

        // 1. Strip React client bundle script tags
        let cleanHtml = html.replace(/<script[^>]*src="\/assets\/app-[^"]*\.js"[^>]*><\/script>/gi, '');
        // 2. Strip modulepreload links
        cleanHtml = cleanHtml.replace(/<link[^>]*rel="modulepreload"[^>]*>/gi, '');
        // 3. Strip static router hydration data script
        cleanHtml = cleanHtml.replace(/<script[^>]*>window\.__staticRouterHydrationData[\s\S]*?<\/script>/gi, '');
        // 4. Strip SSG hash script
        cleanHtml = cleanHtml.replace(/<script[^>]*>window\.__VITE_REACT_SSG_HASH__[\s\S]*?<\/script>/gi, '');

        // 5. Inject island scripts
        const isCalcRoute = route === '/' || route === '';
        const islandScripts = `<script type="module" defer src="/${revealFile}"></script><script type="module" defer src="/${heroGlowFile}"></script><script type="module" defer src="/${navFile}"></script><script type="module" defer src="/${analyticsFile}"></script>${isCalcRoute ? `<script type="module" defer src="/${calcFile}"></script>` : ''}</body>`;
        return cleanHtml.replace('</body>', islandScripts);
      },
      onFinished() {
        // Explicit Allowlist for client assets
        const assetsDir = path.resolve(__dirname, 'dist/assets');
        if (fs.existsSync(assetsDir)) {
          const files = fs.readdirSync(assetsDir);
          for (const file of files) {
            const isAllowed =
              file.startsWith('reveal-') ||
              file.startsWith('hero-glow-') ||
              file.startsWith('calculator-') ||
              file.startsWith('nav-') ||
              file.startsWith('analytics-') ||
              file.endsWith('.css') ||
              file.endsWith('.woff2') ||
              file.endsWith('.svg') ||
              file.endsWith('.jpg') ||
              file.endsWith('.png') ||
              file.endsWith('.webp') ||
              file.endsWith('.avif');

            if (!isAllowed) {
              fs.unlinkSync(path.join(assetsDir, file));
              console.log(`[Hydration Strip] Deleted unreferenced client chunk: ${file}`);
            }
          }
        }

        // Delete SSG loader json manifests
        const distDir = path.resolve(__dirname, 'dist');
        const distFiles = fs.readdirSync(distDir);
        for (const file of distFiles) {
          if (file.startsWith('static-loader-data-manifest-')) {
            fs.unlinkSync(path.join(distDir, file));
            console.log(`[Hydration Strip] Deleted hydration manifest: ${file}`);
          }
        }

        // Find app-*.css — keep as external stylesheet (smaller HTML = faster FCP/LCP).
        // Full CSS inlining bloated homepage HTML to ~140 kB and delayed paint under Slow 4G.
        let cssHref = '';
        if (fs.existsSync(assetsDir)) {
          const cssFiles = fs.readdirSync(assetsDir).filter(f => f.startsWith('app-') && f.endsWith('.css'));
          if (cssFiles.length > 0) {
            cssHref = `/assets/${cssFiles[0]}`;
            console.log(`[CSS Link] Keeping external stylesheet ${cssFiles[0]} (not fully inlined)`);
          }
        }

        // Clean every generated HTML file to ensure zero hydration scripts remain
        const stripHtmlFiles = (dir: string) => {
          const entries = fs.readdirSync(dir, { withFileTypes: true });
          for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory() && entry.name !== 'assets') {
              stripHtmlFiles(fullPath);
            } else if (entry.isFile() && entry.name.endsWith('.html')) {
              let content = fs.readFileSync(fullPath, 'utf8');
              content = content.replace(/<script[^>]*src="\/assets\/app-[^"]*\.js"[^>]*><\/script>/gi, '');
              content = content.replace(/<link[^>]*rel="modulepreload"[^>]*>/gi, '');
              content = content.replace(/<script[^>]*>window\.__staticRouterHydrationData[\s\S]*?<\/script>/gi, '');
              content = content.replace(/<script[^>]*>window\.__VITE_REACT_SSG_HASH__[\s\S]*?<\/script>/gi, '');

              // Async non-blocking CSS (CSP-hashed activator) — keeps FCP free of 48 kB stylesheet
              if (cssHref) {
                content = content.replace(
                  /<link[^>]*rel=["']stylesheet["'][^>]*href=["'](\/assets\/app-[^"']+\.css)["'][^>]*>/gi,
                  `<link id="app-css" rel="stylesheet" href="$1" media="print"><script>document.getElementById('app-css').media='all'</script><noscript><link rel="stylesheet" href="$1"></noscript>`,
                );
                if (!content.includes('id="app-css"')) {
                  content = content.replace(
                    /<\/head>/i,
                    `<link id="app-css" rel="stylesheet" href="${cssHref}" media="print"><script>document.getElementById('app-css').media='all'</script><noscript><link rel="stylesheet" href="${cssHref}"></noscript></head>`,
                  );
                }
              }

              // Ensure charset + viewport are the first children of <head> (before Head-injected JSON-LD)
              content = content.replace(/<meta\s+charset=["']utf-8["']\s*\/?>/gi, '');
              content = content.replace(/<meta\s+name=["']viewport["'][^>]*>/gi, '');
              content = content.replace(
                /<head>/i,
                '<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">',
              );

              fs.writeFileSync(fullPath, content, 'utf8');
            }
          }
        };
        stripHtmlFiles(distDir);
        console.log('[Hydration Strip] Cleaned dist HTML (external CSS, no full inline bloat).');
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
