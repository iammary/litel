/// <reference types="vitest" />

import { defineConfig, splitVendorChunkPlugin } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import fg from "fast-glob";

const entryPoints = [
  "src/components/**/!(*.stories|*.test).ts",
  "src/styles/**/!(*.stories|*.test).ts",
  "src/markup-autoloader.ts",
  "src/index.ts",
];

const files = fg.sync(entryPoints, { absolute: true });

const entities = files.map((file) => {
  const [key] = file.match(/(?<=src\/).*$/) || [];
  const keyWithoutExtension = key!.replace(/\.[^.]*$/, "");
  return [keyWithoutExtension, file];
});

const entries = Object.fromEntries(entities);

export default defineConfig({
  plugins: [tsconfigPaths(), splitVendorChunkPlugin()],
  build: {
    outDir: "dist",
    lib: {
      entry: entries,
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        chunkFileNames: "chunks/[hash].js",
      },
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    coverage: {
      all: true,
      include: ["src/**/*.ts"],
      exclude: ["src/**/*.stories.ts", "src/**/*.d.ts"],
      reporter: ["text", "json", "html"],
      lines: 95,
      functions: 95,
      branches: 95,
      statements: 95,
    },
  },
});
