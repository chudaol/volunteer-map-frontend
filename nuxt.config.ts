import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	build: { transpile: ['@fawmi/vue-google-maps'] },
	runtimeConfig: {
		public: { GOOGLE_MAPS_API_KEY: 'AIzaSyBL1pP7Y8Xq8j9EhaHpWwqkI_bpYFE8NDs' },
	},
	head: {
		link: [{ rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css' }],
	},
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
