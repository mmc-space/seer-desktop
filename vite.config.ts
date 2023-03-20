import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import electron from 'vite-plugin-electron'
import viteEslint from 'vite-plugin-eslint'
import UnoCSS from 'unocss/vite'
import unocssOptions from './unocss.config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(unocssOptions),
    viteEslint(),
    react(),
    electron({
      entry: {
        main: 'src/app/main.ts',
        preload: 'src/app/preload.ts',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
