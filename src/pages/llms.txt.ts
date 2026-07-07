import type { APIRoute } from 'astro';
import { profile, about, stack, projects, trayectoria } from '../data/site';

// /llms.txt — resumen del sitio en markdown para agentes de IA
// (https://llmstxt.org). Se genera en build desde site.ts, igual que
// el resto del contenido, para que nunca quede desactualizado.
export const GET: APIRoute = ({ site }) => {
	const home = new URL('/', site).href;
	const homeEn = new URL('/en/', site).href;

	const md = `# ${profile.name}

> ${profile.role.es}. ${profile.tagline.es}

## Sobre mí

${about.map((line) => `- ${line.es}`).join('\n')}

## Stack

${stack.join(', ')}

## Proyectos

${projects
	.map((p) => {
		const demo = p.demo ? ` Demo: [${p.name} en producción](${p.demo}).` : '';
		return `- [${p.name}](${p.url}): ${p.description.es} Tecnologías: ${p.tech.join(', ')}.${demo}`;
	})
	.join('\n')}

## Trayectoria

${trayectoria.map((t) => `- ${t.title.es} — ${t.place.es} (${t.status.es})`).join('\n')}

## Enlaces

- [Portfolio (español)](${home})
- [Portfolio (English)](${homeEn})
- [GitHub](${profile.github})
- [LinkedIn](${profile.linkedin})
- [Email](mailto:${profile.email})
`;

	return new Response(md, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
