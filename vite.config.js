import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import path from 'path';

//{ autoCodeSplitting: true } do not use this option, it will break the router in github pages
export default defineConfig({
  plugins: [TanStackRouterVite(), viteReact(), tailwindcss()],
  base: '/',
  test: {
    globals: true,
    environment: 'jsdom'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
