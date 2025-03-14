import react from "@vitejs/plugin-react"
import type { UserConfig } from "vite"
import path from "path"

export default {
  plugins: [react()],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
} satisfies UserConfig
