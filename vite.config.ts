import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    imagetools(),
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (/react-router-dom/.test(id)) return "vendor-router";
            if (/[\\/]react[\\/]|[\\/]react-dom[\\/]|scheduler/.test(id)) return "vendor-react";
            if (/@radix-ui/.test(id)) return "vendor-radix";
            if (/recharts|d3-/.test(id)) return "vendor-charts";
            if (/i18next/.test(id)) return "vendor-i18n";
            if (/@tanstack/.test(id)) return "vendor-query";
            return "vendor";
          }
        },
      },
    },
  },
}));
