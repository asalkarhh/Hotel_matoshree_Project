import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

function seoAssets() {
  const assets = [
    ['seo-hotel-matoshree.png', './src/assets/new/Banner.png'],
    ['seo-matoshree-gym.png', './src/assets/gym/matoshree-gym-hero.png'],
    ['seo-hotel-matoshree-logo.png', './src/assets/new/fevicon_logo.png'],
  ]

  return {
    name: 'seo-assets',
    apply: 'build',
    buildStart() {
      assets.forEach(([fileName, source]) => {
        this.emitFile({
          type: 'asset',
          fileName,
          source: readFileSync(new URL(source, import.meta.url)),
        })
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), seoAssets()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        gym: fileURLToPath(new URL('./gym.html', import.meta.url)),
      },
    },
  },
})
