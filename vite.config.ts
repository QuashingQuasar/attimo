import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    sitemap({
      hostname: 'https://attimo-oil.com',
      dynamicRoutes: [
        '/',
        '/blog',
        '/blog/olive-color-ripeness-polyphenols',
        '/blog/polyphenols-olive-oil',
        '/blog/should-you-cook-with-olive-oil',
        '/product/coratina',
        '/product/nocellara',
        '/product/picual',
        '/quiz',
        '/contact',
      ],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
