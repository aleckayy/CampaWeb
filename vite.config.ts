import { defineConfig } from "vite";
import { lovableTanstackStart } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  plugins: [
    lovableTanstackStart({
      nitro: true,
    }),
  ],
});
