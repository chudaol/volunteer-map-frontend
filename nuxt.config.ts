import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    hooks: {
        'vite:extendConfig'(config, { isClient }) {
            if (process.env.NODE_ENV !== 'development' && isClient) {
                // rc6
                config.build.rollupOptions.output.chunkFileNames = '[hash].js'
                // rc7
                config.build.rollupOptions.output.chunkFileNames = '_nuxt/[hash].js'
            }
        }
    },
});
