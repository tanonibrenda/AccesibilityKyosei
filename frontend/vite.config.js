import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname), // Usa la raíz del proyecto
  build: {
    outDir: 'frontend/dist', // Archivos generados van en frontend/dist
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // Define index.html desde la raíz
    },
  },
});