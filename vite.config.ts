import path from 'path'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { figmaPlugin, figmaPluginInit, runAction } from 'vite-figma-plugin'

import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { config } from './figma.config'

const action = process.env.ACTION
const mode = process.env.MODE

if (action)
  runAction(
    {},
    // config,
    action
  )

figmaPluginInit()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile(), figmaPlugin(config, mode), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    assetsInlineLimit: Infinity,
    emptyOutDir: false,
    outDir: '.tmp',
  },
})
