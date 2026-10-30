import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: "https://attimo-oil.com",
  output: "static",
  adapter: vercel(),
  // Old Shopify storefront product URLs (/products/<shopify-handle>) still get
  // traffic from ChatGPT and old links. Send them to the matching page here.
  // The specific oil/bundle entries win over the merch catch-all.
  redirects: {
    "/products/attimo-extra-virgin-olive-oil-coratina-500ml": "/product/coratina",
    "/products/attimo-extra-virgin-olive-oil-coratina-3l": "/product/coratina-3l",
    "/products/nocellara": "/product/nocellara",
    "/products/attimo-extra-virgin-olive-oil-picual-500ml": "/product/picual",
    "/products/attimo-early-harvest-25-italian-duo": "/product/duo",
    "/products/attimo-early-harvest-25-full-collection": "/product/trio",
    "/products/[handle]": "/merch/[handle]",
  },
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
