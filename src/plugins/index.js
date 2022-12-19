/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from './router'
import pinia from './pinia'

export function registerPlugins (app) {
  loadFonts()
  app.use(router)
  app.use(pinia)
  app.use(vuetify)
}
