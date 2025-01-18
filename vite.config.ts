import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import stylelintPlugin from 'vite-plugin-stylelint';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), stylelintPlugin()],
});
