import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import dotenv from 'dotenv';


dotenv.config({ path: '.env' });


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  define: {
    'process.env': Object.keys(process.env).reduce((env, key) => {
      env[key] = process.env[key];
      return env;
    }, {})
  }
})
