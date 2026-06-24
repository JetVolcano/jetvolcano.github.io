// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/eslint", "@nuxt/hints", "@nuxt/image", "@nuxt/ui", "@nuxt/fonts"],
  css: ["~/assets/css/main.css"],
  fonts: {
    provider: "google",
    families: [
      {
        name: "Maple Mono",
        src: "/fonts/maple-mono.woff2",
        weight: "400",
        style: "normal",
        global: true,
      },
    ],
  },
  app: {
    head: {
      title: "JetVolcano's Portfolio",
    },
  },
});
