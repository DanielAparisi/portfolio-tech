// Datos del portfolio. Edita aquí tus enlaces, stack y proyectos.

export const profile = {
	name: 'Daniel Aparisi',
	role: 'Estudiante de Ingeniería de Software · UPM',
	tagline:
		'Desarrollador junior en primer curso, aprendiendo construyendo cosas reales. Actualmente centrado en el desarrollo web — con muchas ganas de seguir creciendo.',
	// TODO: ajusta estos enlaces con tus perfiles reales
	email: 'daniel.aparisi.lozano@gmail.com',
	github: 'https://github.com/DanielAparisi',
	linkedin: 'https://www.linkedin.com/in/daniel-aparisi-lozano-600367276/',
	fiverr: 'https://es.fiverr.com/daniel_aparisi',
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
	'React',
	'Java',
	'HTML5',
	'CSS3',
	'Git',
];

export interface Project {
	name: string;
	description: string;
	/** Ruta de la portada dentro de /public. Reemplaza los SVG por capturas reales. */
	image: string;
	/** Tecnologías usadas (deben coincidir con las claves de `stackIcons`). */
	tech: string[];
	url: string;
}

export const projects: Project[] = [
	{
		name: 'portfolio-dev',
		description: 'Mi propio portfolio personal de desarrollo, construido con Astro.',
		image: '/projects/portfolio-dev.svg',
		tech: ['Astro', 'JavaScript'],
		url: 'https://github.com/DanielAparisi/portfolio-dev',
	},
	{
		name: 'terciosapp',
		description: 'Aplicación web moderna construida como proyecto personal.',
		image: '/projects/terciosapp.svg',
		tech: ['Astro', 'React', 'TypeScript', 'Python', 'CSS3', 'JavaScript'],
		url: 'https://github.com/DanielAparisi/terciosapp',
	},
	{
		name: 'SintracEngineering',
		description: 'Sitio web para una empresa de ingeniería.',
		image: '/projects/sintracengineering.svg',
		tech: ['Astro', 'CSS3', 'JavaScript'],
		url: 'https://github.com/DanielAparisi/SintracEngineering',
	},
	{
		name: 'alphaGym',
		description: 'Landing page para un gimnasio.',
		image: '/projects/alphagym.svg',
		tech: ['Astro', 'JavaScript', 'CSS3'],
		url: 'https://github.com/DanielAparisi/alphaGym',
	},
	{
		name: 'LigaApp',
		description: 'App de gestión de una liga deportiva.',
		image: '/projects/ligaapp.svg',
		tech: ['TypeScript', 'React', 'JavaScript'],
		url: 'https://github.com/DanielAparisi/LigaApp',
	},
	{
		name: 'Craft-Pizza-Menu',
		description: 'Menú interactivo para una pizzería.',
		image: '/projects/craft-pizza-menu.svg',
		tech: ['JavaScript', 'React', 'CSS3', 'HTML5'],
		url: 'https://github.com/DanielAparisi/Craft-Pizza-Menu',
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
