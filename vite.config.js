import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 500000,
  },
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  resolve: {
    alias: [
      // 절대경로로 접근하기
      { find: "~/components", replacement: "/src/components" },
      { find: "~/lib", replacement: "/src/lib" },
      { find: "~/routers", replacement: "/src/routers" },
      { find: "~/routes", replacement: "/src/routes" },
      { find: "~/assets", replacement: "/src/assets" },
      { find: "~/utiles", replacement: "/src/utiles" },
      { find: "~/components", replacement: "/src/components" },
      { find: "~/constants", replacement: "/src/constants" },
      { find: "~/apis", replacement: "/src/apis" },
    ],
  },
});
