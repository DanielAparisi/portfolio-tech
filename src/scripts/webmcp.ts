// WebMCP: expone el portfolio como herramientas invocables por agentes
// de IA (API experimental `document.modelContext`, origin trial de
// Chrome 149-156). En navegadores sin soporte este módulo no hace nada.
//
// Probar en local: activa chrome://flags/#enable-webmcp-testing y en la
// consola de DevTools ejecuta `await document.modelContext.getTools()`.
// En producción hace falta además el token Origin-Trial (netlify.toml).

import { profile, about, stack, projects, trayectoria } from '../data/site';
import type { Locale } from '../data/site';

// El API aún no está en los tipos de TypeScript: declaración mínima
// de lo que usamos, según la doc del origin trial de Chrome.
interface ModelContextTool {
	name: string;
	description: string;
	inputSchema: {
		type: 'object';
		properties: Record<string, unknown>;
		required?: string[];
	};
	execute: (input: Record<string, unknown>) => Promise<string> | string;
	annotations?: { readOnlyHint?: boolean; untrustedContentHint?: boolean };
}
interface ModelContext {
	registerTool(tool: ModelContextTool): Promise<void> | void;
}
declare global {
	interface Document {
		modelContext?: ModelContext;
	}
	interface Navigator {
		modelContext?: ModelContext;
	}
}

// Chrome 150+ lo expone en document; las builds anteriores del origin
// trial usaban navigator (hoy deprecado).
const modelContext = document.modelContext ?? navigator.modelContext;

// Todas las herramientas aceptan un `locale` opcional; si el agente no
// lo indica, se responde en el idioma de la página actual.
const pageLocale: Locale =
	document.documentElement.lang === 'en' ? 'en' : 'es';

const localeInput = {
	locale: {
		type: 'string',
		enum: ['es', 'en'],
		description: 'Idioma de la respuesta / response language',
	},
};

function resolveLocale(input: Record<string, unknown>): Locale {
	return input.locale === 'en' || input.locale === 'es'
		? input.locale
		: pageLocale;
}

if (modelContext) {
	modelContext.registerTool({
		name: 'get_profile',
		description:
			'Perfil de Daniel Aparisi: quién es, rol, sobre mí, stack tecnológico y trayectoria académica. / Daniel Aparisi profile: who he is, role, about, tech stack and academic background.',
		inputSchema: { type: 'object', properties: localeInput },
		annotations: { readOnlyHint: true },
		execute: (input) => {
			const locale = resolveLocale(input);
			return JSON.stringify({
				name: profile.name,
				role: profile.role[locale],
				tagline: profile.tagline[locale],
				about: about.map((line) => line[locale]),
				stack,
				trayectoria: trayectoria.map((item) => ({
					title: item.title[locale],
					place: item.place[locale],
					status: item.status[locale],
					current: item.current ?? false,
				})),
			});
		},
	});

	modelContext.registerTool({
		name: 'list_projects',
		description:
			'Lista los proyectos del portfolio con descripción, tecnologías, repositorio en GitHub y demo desplegada. / Lists portfolio projects with description, tech, GitHub repo and live demo.',
		inputSchema: { type: 'object', properties: localeInput },
		annotations: { readOnlyHint: true },
		execute: (input) => {
			const locale = resolveLocale(input);
			return JSON.stringify(
				projects.map((project) => ({
					name: project.name,
					description: project.description[locale],
					tech: project.tech,
					repo: project.url,
					demo: project.demo ?? null,
					image: new URL(project.image.src, location.origin).href,
				})),
			);
		},
	});

	modelContext.registerTool({
		name: 'get_contact_info',
		description:
			'Datos de contacto de Daniel Aparisi: email, GitHub, LinkedIn y Fiverr. / Daniel Aparisi contact details: email, GitHub, LinkedIn and Fiverr.',
		inputSchema: { type: 'object', properties: {} },
		annotations: { readOnlyHint: true },
		execute: () =>
			JSON.stringify({
				email: profile.email,
				github: profile.github,
				linkedin: profile.linkedin,
				fiverr: profile.fiverr,
			}),
	});
}
