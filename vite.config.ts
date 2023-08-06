import { resolve } from 'path'
import type { ConfigEnv } from 'vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteEslint from 'vite-plugin-eslint'
import UnoCSS from 'unocss/vite'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv) => defineConfig({
  plugins: [UnoCSS(), react(), viteEslint(), viteMockServe({
    mockPath: 'mock',
    localEnabled: command === 'serve',
  })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
