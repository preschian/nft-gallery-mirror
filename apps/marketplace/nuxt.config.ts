// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'KodaDot - Go To Polkadot NFT marketplace',
      meta: [
        {
          name: 'description',
          content: 'Multi-chain NFT marketplace across Polkadot parachains',
        },
      ],
    },
  },
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
})
