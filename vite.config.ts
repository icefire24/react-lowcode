import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoImport from "unplugin-auto-import/vite";
import UnoCSS from "unocss/vite";
import { presetAttributify, presetUno } from "unocss";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [
    react(),
    autoImport({
      imports: ["react"],
      dts: "src/auto-imports.d.ts",
    }),
    UnoCSS({
      presets: [presetAttributify(), presetUno()],
    }),
  ],
});
