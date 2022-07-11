import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    build: { transpile: ["@fawmi/vue-google-maps"] },
    runtimeConfig: {
        public: { GOOGLE_MAPS_API_KEY: 'AIzaSyBL1pP7Y8Xq8j9EhaHpWwqkI_bpYFE8NDs' }
    }
})
