// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ['~/assets/css/main.css'],
  app:{
    head:{
      title: 'Media Tools',
      meta: [
        { name: 'description', content: 'All about mobile phones, tablets and laptops.'}
      ],
      link: [
        { rel:'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  }
  
})