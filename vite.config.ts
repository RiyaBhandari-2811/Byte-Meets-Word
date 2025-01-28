import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import Inspect from 'vite-plugin-inspect';
import path from 'path';

export default defineConfig({
  plugins: [react(), Inspect()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@routing': path.resolve(__dirname, 'src/routing'),
      '@scss': path.resolve(__dirname, 'src/scss'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
});
