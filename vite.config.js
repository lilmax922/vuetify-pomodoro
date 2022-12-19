// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { VitePWA } from 'vite-plugin-pwa'
import ViteRadar from 'vite-plugin-radar'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true
    }),
    ViteRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-8C8T5HCKGL'
      }
    }),
    VitePWA({
      // 設定快取自動更新
      registerType: 'autoUpdate',
      workbox: {
        // 清除過期的快取
        cleanupOutdatedCaches: true,
        // 忽略網址參數
        ignoreURLParametersMatching: [/^[0-9a-zA-Z]*$/],
        // 快取檔案格式
        globPatterns: [
          '**/*.{js,css,html,mp3,woff,eot,ttf,woff2,ico,png,jpg,jpeg,svg,gif}**'
        ]
      },
      // PWA 的應用程式資料
      manifest: {
        name: 'Pomodoro',
        short_name: 'Pomodoro',
        description: 'Vuetify 3 Pomodoro',
        // 工具列顏色
        theme_color: '#1867C0',
        // 手機開啟時 icon 後面的背景色
        background_color: '#1867C0',
        // PWA 顯示的路徑範圍
        scope: './',
        // PWA 開啟的網址
        start_url: './',
        // 顯示模式，只顯示工具列
        display: 'standalone',
        // 應用程式 icon，./ 指向 public 資料夾
        icons: [
          {
            src: './img/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './img/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: './img/icons/android-chrome-maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: './img/icons/android-chrome-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: './img/icons/apple-touch-icon-60x60.png',
            sizes: '60x60',
            type: 'image/png'
          },
          {
            src: './img/icons/apple-touch-icon-76x76.png',
            sizes: '76x76',
            type: 'image/png'
          },
          {
            src: './img/icons/apple-touch-icon-120x120.png',
            sizes: '120x120',
            type: 'image/png'
          },
          {
            src: './img/icons/apple-touch-icon-152x152.png',
            sizes: '152x152',
            type: 'image/png'
          },
          {
            src: './img/icons/apple-touch-icon-180x180.png',
            sizes: '180x180',
            type: 'image/png'
          },
          {
            src: './img/icons/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png'
          },
          {
            src: './favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png'
          },
          {
            src: './favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png'
          },
          {
            src: './img/icons/msapplication-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: './img/icons/mstile-150x150.png',
            sizes: '150x150',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue'
    ]
  },
  server: {
    port: 3000
  }
})
