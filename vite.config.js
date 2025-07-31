import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // shorter to avoid the name clash

export default defineConfig({
  plugins: [react()], // ← keep this comma
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
