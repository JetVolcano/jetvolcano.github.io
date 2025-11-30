// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/hints",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/fonts",
  ],
  css: ["~/assets/css/main.css"],
  fonts: {
    provider: "google",
    families: [{ name: "JetBrains Mono", provider: "google", global: true }],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "JetVolcano's Portfolio",
    },
  },
});
