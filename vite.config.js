import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// vite.config.js

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  root,
  plugins: [react()],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
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
      external: [
        'react',
        'react-dom',
        'three',
        'cannon-es',
        'react-native-web',
        'react-native-canvas',
      ], // Added React Native Web external
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          three: 'THREE',
          'cannon-es': 'CANNON',
          'react-native-web': 'ReactNativeWeb',
          'react-native-canvas': 'ReactNativeCanvas',
        },
      },
    },
  },
});
