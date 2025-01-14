import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@constants', replacement: path.resolve(__dirname, './src/constants') },
      { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },
      { find: '@page', replacement: path.resolve(__dirname, './src/page') },
      { find: '@stores', replacement: path.resolve(__dirname, './src/stores') },
      { find: '@types', replacement: path.resolve(__dirname, './src/types') },
      { find: '@utils', replacement: path.resolve(__dirname, './src/utils') },
    ],
  },
});
