import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Site is served from a custom domain root. If you switch to project pages
  // (avdpunks.github.io/frontierpunks.github.io/), change base to
  // '/frontierpunks.github.io/'.
  base: '/',
});
