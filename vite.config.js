import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages serves this project from a subpath; Vercel serves it at the domain root.
  base: process.env.GITHUB_ACTIONS === 'true' ? '/boontech/' : '/',
  plugins: [react()],
});
