import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

const targets = ["target1", "target2"];
const myObject = { targets }; // Valid shorthand

export default defineConfig({
  base: '/',
  plugins: [react(), legacy({ targets })],
  server: {
    port: 3000, 
    host: '0.0.0.0',
  },
});
