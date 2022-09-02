import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	css: ['~/assets/css/main.css'],
	hooks: {
		'vite:extendConfig'(config, { isClient }) {
			if (process.env.NODE_ENV !== 'development' && isClient) {
				config.build.rollupOptions.output.chunkFileNames = '[name]-[hash].js';
				config.build.rollupOptions.output.entryFileNames = '[name]-[hash].js';
			}
		},
	},
});
