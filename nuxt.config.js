// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/tailwindcss'],
  
  typescript: {
    typeCheck: true
  },

  css: [
    '@/assets/css/tailwind.css',
  ],
})
