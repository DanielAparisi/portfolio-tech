// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://portfolio-techh.netlify.app',
	i18n: {
		locales: ['es', 'en'],
		defaultLocale: 'es',
		routing: {
			prefixDefaultLocale: false, // español en la raíz, inglés en /en/
		},
	},
	integrations: [
		sitemap({
			// Anota cada URL del sitemap con sus alternativas de idioma
			// (xhtml:link hreflang), reforzando los <link> del HTML.
			i18n: {
				defaultLocale: 'es',
				locales: { es: 'es-ES', en: 'en-US' },
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
		build: {
			// Nunca inlinear scripts/assets en el HTML: la CSP de netlify.toml
			// prohíbe 'unsafe-inline', así que todo JS debe ser archivo externo.
			assetsInlineLimit: 0,
		},
	},
});
