import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat tags with prefix profile- as custom elements
          isCustomElement: (tag) => tag.includes('profile-') || tag.includes('location-')
        }
      }
    }),
// vite.config.js
      federation({
        name: 'host-app',
        remotes: {
          remote_app: "http://localhost:4173/assets/remoteEntry.js",
        },
        shared: ['vue', 'pinia']
      })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build:{
    minify:false,
    target: ["chrome89", "edge89", "firefox89", "safari15"]
  }
})
