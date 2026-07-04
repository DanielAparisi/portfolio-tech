// Datos del portfolio. Edita aquí tus enlaces, stack y proyectos.

export const profile = {
	name: 'Daniel Aparisi',
	role: 'Estudiante de Ingeniería de Software · UPM',
	tagline:
		'Desarrollador junior en primer curso, aprendiendo construyendo cosas reales. Actualmente centrado en Astro, TypeScript y Java — con muchas ganas de seguir creciendo.',
	// TODO: ajusta estos enlaces con tus perfiles reales
	email: 'daniel.aparisi.lozano@gmail.com',
	github: 'https://github.com/DanielAparisi',
	linkedin: 'https://www.linkedin.com/in/daniel-aparisi-lozano-600367276/',
};

export const about = [
	'Estudiante de Ingeniería de Software en la Universidad Politécnica de Madrid (1er curso).',
	'Aprendiendo y construyendo con Astro, TypeScript y Java — con base también en JavaScript, C, HTML y CSS.',
	'Me gusta aprender haciendo: cada proyecto en mi GitHub es una excusa para probar algo nuevo.',
];

export const stack = [
	'Astro',
	'TypeScript',
	'JavaScript',
	'Java',
	'C',
	'HTML5',
	'CSS3',
	'Git',
];

export type Lang = 'Astro' | 'TypeScript' | 'JavaScript';

export interface Project {
	name: string;
	lang: Lang;
	description: string;
	url: string;
}

export const projects: Project[] = [
	{
		name: 'portfolio-dev',
		lang: 'Astro',
		description: 'Mi propio portfolio personal de desarrollo, construido con Astro.',
		url: 'https://github.com/danielaparisi/portfolio-dev',
	},
	{
		name: 'terciosapp',
		lang: 'Astro',
		description: 'Aplicación web moderna construida como proyecto personal.',
		url: 'https://github.com/danielaparisi/terciosapp',
	},
	{
		name: 'SintracEngineering',
		lang: 'Astro',
		description: 'Sitio web para una empresa de ingeniería.',
		url: 'https://github.com/danielaparisi/SintracEngineering',
	},
	{
		name: 'alphaGym',
		lang: 'Astro',
		description: 'Landing page para un gimnasio.',
		url: 'https://github.com/danielaparisi/alphaGym',
	},
	{
		name: 'LigaApp',
		lang: 'TypeScript',
		description: 'App de gestión de una liga deportiva.',
		url: 'https://github.com/danielaparisi/LigaApp',
	},
	{
		name: 'Craft-Pizza-Menu',
		lang: 'JavaScript',
		description: 'Menú interactivo para una pizzería.',
		url: 'https://github.com/danielaparisi/Craft-Pizza-Menu',
	},
];

export interface Education {
	title: string;
	place: string;
	status: string;
	current?: boolean;
}

export const education: Education[] = [
	{
		title: 'Grado en Ingeniería de Software',
		place: 'Universidad Politécnica de Madrid (UPM)',
		status: '2025 – actualidad',
		current: true,
	},
	{
		title: 'Grado en Ingeniería en Telecomunicación',
		place: 'Universidad de Alcalá',
		status: '2024 – 2025',
	},
	{
		title: 'Bachillerato Tecnológico',
		place: 'Educación secundaria',
		status: '2022 – 2024',
	},
];

// Pestañas de la barra del "editor"
export const tabs = [
	'hero.tsx',
	'sobre-mi.md',
	'stack.json',
	'proyectos.ts',
	'educacion.log',
	'contacto.sh',
];
