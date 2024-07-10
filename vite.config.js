import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //The following codes are to fix routing issues on vercel also creates vercel.json file & done some changes.
  server: {
    historyApiFallback: true, //Ensure client-side routing works during development
  },
  build: {
    outDir: 'dist', //Default output directory, change if necessary
  },
})
