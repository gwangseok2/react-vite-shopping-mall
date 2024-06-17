import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import withReactRouter from "vite-plugin-next-react-router";

export default defineConfig({
  plugins: [
    react(),
    withReactRouter({
      pageDir: "src/pages",
      extensions: ["js", "jsx", "ts", "tsx"],
      // like '_app' in Next.js, `_document` is not supported since all rendering is done in client side
      layout: "_layout",
    }),
  ],
});
