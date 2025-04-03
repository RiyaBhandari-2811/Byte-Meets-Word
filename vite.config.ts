import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import Inspect from 'vite-plugin-inspect';
import path from 'path';

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
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
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path,
        },
      },
    },
  });
};
