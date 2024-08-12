import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-test-task-HYSEnterprise/",
  build: {
    outDir: "dist",
  },
  plugins: [react()],
});
