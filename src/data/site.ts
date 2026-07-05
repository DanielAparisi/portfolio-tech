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
	'He construido proyectos completos de principio a fin — webs para una ingeniería, un restaurante o un gimnasio — con demos desplegadas en Netlify.',
	'Me gustaría orientarme hacia el sector de la Inteligencia Artificial y el diseño UX.',
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
	/** URL del repositorio en GitHub. */
	url: string;
	/** Demo desplegada en Netlify. Si falta, la tarjeta enlaza al repositorio. */
	demo?: string;
}

export const projects: Project[] = [
	{
		name: 'portfolio-tech',
		description:
			'Este mismo portfolio: estética de terminal construida con Astro, TypeScript y Tailwind.',
		image: '/projects/portfolio-tech.svg',
		tech: ['Astro', 'TypeScript', 'CSS3'],
		url: 'https://github.com/DanielAparisi/portfolio-tech',
		demo: 'https://portfolio-techh.netlify.app',
	},
	{
		name: 'SintracEngineering',
		description: 'Sitio web para una empresa de ingeniería.',
		image: '/projects/sintracengineering.svg',
		tech: ['Astro', 'CSS3', 'JavaScript'],
		url: 'https://github.com/DanielAparisi/SintracEngineering',
		demo: 'https://boisterous-bunny-4f3b0d.netlify.app',
	},
	{
		name: 'alphaGym',
		description: 'Landing page para un gimnasio.',
		image: '/projects/alphagym.svg',
		tech: ['Astro', 'JavaScript', 'CSS3'],
		url: 'https://github.com/DanielAparisi/alphaGym',
		demo: 'https://gimnasio-alpha.netlify.app',
	},
	{
		name: 'demo-GooglePlaces-api',
		description:
			'Demo de integración con la API de Google Places, con frontend en Astro y backend en Python.',
		image: '/projects/demo-googleplaces-api.svg',
		tech: ['Astro', 'Python', 'JavaScript', 'CSS3'],
		url: 'https://github.com/DanielAparisi/demo-GooglePlaces-api',
	},
	{
		name: 'restauranteYummy',
		description: 'Sitio web para un restaurante, construido con Astro.',
		image: '/projects/restauranteyummy.svg',
		tech: ['Astro', 'JavaScript'],
		url: 'https://github.com/DanielAparisi/stoic-chatterjee',
		demo: 'https://restauranteyummy2.netlify.app',
	},
	{
		name: '3-en-raya',
		description: 'El clásico juego del tres en raya con JavaScript, HTML y CSS puros.',
		image: '/projects/3-en-raya.svg',
		tech: ['JavaScript', 'HTML5', 'CSS3'],
		url: 'https://github.com/DanielAparisi/3-en-raya',
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
];
