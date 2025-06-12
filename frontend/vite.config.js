import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname), // Usamos la raíz del proyecto como base
  build: {
    outDir: 'frontend/dist', // Los archivos generados van en frontend/dist
    emptyOutDir: true, // Limpia antes de compilar
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // Definimos el nuevo archivo de entrada
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'frontend/src'), // Alias para facilitar la importación de archivos
    },
  },
});