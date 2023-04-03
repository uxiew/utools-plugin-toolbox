import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteUtoolsPlugin } from '@ver5/vite-plugin-utools'
import { vitePluginForArco } from '@arco-plugins/vite-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginForArco(),
    viteUtoolsPlugin({
      configFile: 'utools/plugin.json',
      preload: { name: 'preload' }
    })
  ],
})
