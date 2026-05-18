import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: "https://attimo-oil.com",
  output: "static",
  adapter: vercel(),
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
  vite: {
    // Expose `VITE_*` env vars to the client bundle (Astro's default is
    // `PUBLIC_*` only). The React tree uses `VITE_SUPABASE_URL`,
    // `VITE_SUPABASE_PUBLISHABLE_KEY`, etc. — without this, those resolve
    // to `undefined` in the browser and the Supabase client throws on
    // import, killing all React hydration.
    envPrefix: ["PUBLIC_", "VITE_"],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@astro": path.resolve(__dirname, "src/astro"),
      },
    },
    ssr: {
      noExternal: ["lucide-react", "@radix-ui/*", "embla-carousel-react", "sonner", "vaul", "cmdk"],
    },
  },
  build: {
    inlineStylesheets: "auto",
  },
});
