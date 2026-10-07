import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const appRoot = fileURLToPath(new URL("./app", import.meta.url));
const outputDirectory = fileURLToPath(new URL("./dist", import.meta.url));

export default defineConfig({
  root: appRoot,
  base: "/Portfolio/",
  plugins: [react()],
  build: {
    outDir: outputDirectory,
    emptyOutDir: true,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test-setup.ts"],
  },
});
