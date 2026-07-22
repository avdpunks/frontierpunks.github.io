import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Site is served from a custom domain root. If you switch to project pages
  // (avdpunks.github.io/frontierpunks.github.io/), change base to
  // '/frontierpunks.github.io/'.
  base: '/',
  define: {
    // gray-matter references `process` in the browser; stub it out.
    'process.env': {},
  },
  resolve: {
    alias: {
      // gray-matter -> buffer polyfill for the browser
      buffer: 'buffer',
    },
  },
  optimizeDeps: {
    include: ['buffer'],
  },
});
