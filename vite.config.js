import { resolve } from 'path';
import { defineConfig } from 'vite';
// vite.config.js

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  root,
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'DiceBoxThreejs',
      formats: ['es', 'umd'],
      fileName: (format) => `dice-box-threejs.${format}.js`,
    },
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      external: ['three', 'cannon-es'],
      output: {
        globals: {
          three: 'THREE',
          'cannon-es': 'CANNON',
        },
      },
    },
  },
});
