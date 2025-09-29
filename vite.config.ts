import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // This is for your GitHub Pages deployment
  base: '/Scenarios/',

  plugins: [react()],

  // 👇 Add this entire 'server' block to fix the WebSocket error
  server: {
    hmr: {
      // This tells Vite how to construct the WebSocket URL
      // in a Codespaces environment.
      clientPort: 443,
    },
  },
});