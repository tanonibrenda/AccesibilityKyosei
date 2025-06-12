import { defineConfig } from 'vite';

export default defineConfig({
  root: 'frontend', // Define el directorio raíz correctamente
  build: {
    outDir: 'dist', // Directorio de salida dentro de frontend/
    emptyOutDir: true, // Limpia la carpeta antes de construir
    rollupOptions: {
      input: 'public/index.html', // Entrada válida para la compilación
    },
  },
});