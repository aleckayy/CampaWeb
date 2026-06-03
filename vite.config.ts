import { defineConfig } from "vite";
import viteTanstackConfig from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  plugins: [
    viteTanstackConfig({
      nitro: true,
    }),
  ],
});
