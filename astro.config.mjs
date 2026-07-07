// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://portfolio-techh.netlify.app',
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
		build: {
			// Nunca inlinear scripts/assets en el HTML: la CSP de netlify.toml
			// prohíbe 'unsafe-inline', así que todo JS debe ser archivo externo.
			assetsInlineLimit: 0,
		},
	},
});
