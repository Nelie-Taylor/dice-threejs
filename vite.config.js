import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";
// vite.config.js

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  root,
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "DiceBoxThreejs",
      formats: ["es", "umd"],
      fileName: (format) => `dice-box-threejs.${format}.js`,
    },
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      external: ["react", "react-dom", "three", "cannon-es"], // Added React externals
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          three: "THREE",
          "cannon-es": "CANNON",
        },
      },
    },
  },
});
