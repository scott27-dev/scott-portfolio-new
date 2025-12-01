import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'scott-portfolio-new'; 

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,

  build: {
    outDir: 'dist',
  }
});