import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 1. Set the base path for GitHub Pages deployment.
  // This must match your repository name.
  base: '/TrainingModule/',

  // 2. Configure the local development server (optional but good to have).
  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  // 3. Include the essential plugin for React.
  plugins: [react()],

  // 4. Set up path aliases.
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }

  // 5. The insecure 'define' block for the API key has been REMOVED.
  // You should handle your API key using Vite's built-in environment variables.
});1