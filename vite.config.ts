import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   // 👇 Insert these lines
   build: {
    lib: {
      entry: "./src/main.tsx",
      name: "mytest",
      fileName: (format) => `mytest.${format}.js`,
    },
    target: "esnext",
  },
})
