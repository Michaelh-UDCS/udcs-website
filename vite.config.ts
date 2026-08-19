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
      onPageRendered(route, html) {
        const manifestPath = path.resolve(__dirname, 'dist/.vite/manifest.json');
        let revealFile = 'assets/reveal.js';
        let heroGlowFile = 'assets/hero-glow.js';
        let calcFile = 'assets/calculator.js';
        let navFile = 'assets/nav.js';
        if (fs.existsSync(manifestPath)) {
          try {
            const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
            if (manifest['src/islands/reveal.ts']) revealFile = manifest['src/islands/reveal.ts'].file;
            if (manifest['src/islands/hero-glow.ts']) heroGlowFile = manifest['src/islands/hero-glow.ts'].file;
            if (manifest['src/islands/calculator.ts']) calcFile = manifest['src/islands/calculator.ts'].file;
            if (manifest['src/islands/nav.ts']) navFile = manifest['src/islands/nav.ts'].file;
          } catch (e) {
            console.error('Error reading manifest in onPageRendered', e);
          }
        }

        const isCalcRoute = route === '/' || route === '';
        const islandScripts = `<script type="module" defer src="/${revealFile}"></script><script type="module" defer src="/${heroGlowFile}"></script><script type="module" defer src="/${navFile}"></script>${isCalcRoute ? `<script type="module" defer src="/${calcFile}"></script>` : ''}</body>`;
        return html.replace('</body>', islandScripts);
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
