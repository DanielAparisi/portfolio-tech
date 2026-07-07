// Datos del portfolio. Edita aquí tus enlaces, stack y proyectos.
// Los textos visibles son bilingües: cada campo { es, en } mantiene
// juntas las dos versiones para que no se desincronicen.

export type Locale = 'es' | 'en';
export interface Localized {
	es: string;
	en: string;
}

export const profile = {
	name: 'Daniel Aparisi',
	role: {
		es: 'Estudiante de Ingeniería de Software · UPM',
		en: 'Software Engineering Student · UPM',
	},
	tagline: {
		es: 'Desarrollador junior en primer curso, aprendiendo construyendo cosas reales. Actualmente centrado en el desarrollo web — con muchas ganas de seguir creciendo.',
		en: 'Junior developer in my first year, learning by building real things. Currently focused on web development — eager to keep growing.',
	},
	email: 'daniel.aparisi.lozano@gmail.com',
	github: 'https://github.com/DanielAparisi',
	linkedin: 'https://www.linkedin.com/in/daniel-aparisi-lozano-600367276/',
	fiverr: 'https://es.fiverr.com/daniel_aparisi',
};

export const about: Localized[] = [
	{
		es: 'Estudiante de Ingeniería de Software en la Universidad Politécnica de Madrid (1er curso).',
		en: 'Software Engineering student at the Universidad Politécnica de Madrid (1st year).',
	},
	{
		es: 'He construido proyectos completos de principio a fin — webs para una ingeniería, un restaurante o un gimnasio — con demos desplegadas en Netlify.',
		en: 'I have built complete projects end to end — websites for an engineering firm, a restaurant and a gym — with live demos deployed on Netlify.',
	},
	{
		es: 'Me gustaría orientarme hacia el sector de la Inteligencia Artificial y el diseño UX.',
		en: 'I would like to move towards Artificial Intelligence and UX design.',
	},
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
	description: Localized;
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
		name: 'terciosapp',
		description: {
			es: 'Web para "Los Tercios", un equipo de fútbol 7 de liga local: plantilla con fichas de jugadores, historia y equipaciones.',
			en: 'Website for "Los Tercios", a local 7-a-side football league team: squad with player cards, history and kits.',
		},
		image: '/projects/terciosapp.webp',
		tech: ['Astro', 'TypeScript', 'CSS3'],
		url: 'https://github.com/DanielAparisi/terciosapp',
		demo: 'https://lostercios.netlify.app',
	},
	{
		name: 'SintracEngineering',
		description: {
			es: 'Sitio web para una empresa de ingeniería.',
			en: 'Website for an engineering company.',
		},
		image: '/projects/sintracengineering.webp',
		tech: ['Astro', 'CSS3', 'JavaScript'],
		url: 'https://github.com/DanielAparisi/SintracEngineering',
		demo: 'https://boisterous-bunny-4f3b0d.netlify.app',
	},
	{
		name: 'alphaGym',
		description: {
			es: 'Landing page para un gimnasio.',
			en: 'Landing page for a gym.',
		},
		image: '/projects/alphagym.webp',
		tech: ['Astro', 'JavaScript', 'CSS3'],
		url: 'https://github.com/DanielAparisi/alphaGym',
		demo: 'https://gimnasioalpha.netlify.app',
	},
	{
		name: 'demo-GooglePlaces-api',
		description: {
			es: 'Demo de integración con la API de Google Places, con frontend en Astro y backend en Python.',
			en: 'Google Places API integration demo, with an Astro frontend and a Python backend.',
		},
		image: '/projects/demo-googleplaces-api.webp',
		tech: ['Astro', 'Python', 'JavaScript', 'CSS3'],
		url: 'https://github.com/DanielAparisi/demo-GooglePlaces-api',
	},
	{
		name: 'restauranteYummy',
		description: {
			es: 'Sitio web para un restaurante, construido con Astro.',
			en: 'Restaurant website, built with Astro.',
		},
		image: '/projects/restauranteyummy.webp',
		tech: ['Astro', 'JavaScript'],
		url: 'https://github.com/DanielAparisi/stoic-chatterjee',
		demo: 'https://restauranteyummy2.netlify.app',
	},
	{
		name: '3-en-raya',
		description: {
			es: 'El clásico juego del tres en raya con JavaScript, HTML y CSS puros.',
			en: 'The classic tic-tac-toe game in plain JavaScript, HTML and CSS.',
		},
		image: '/projects/3-en-raya.webp',
		tech: ['JavaScript', 'HTML5', 'CSS3'],
		url: 'https://github.com/DanielAparisi/3-en-raya',
	},
];

export interface TrayectoriaItem {
	title: Localized;
	place: Localized;
	status: Localized;
	current?: boolean;
}

export const trayectoria: TrayectoriaItem[] = [
	{
		title: {
			es: 'Grado en Ingeniería de Software',
			en: 'BSc in Software Engineering',
		},
		place: {
			es: 'Universidad Politécnica de Madrid (UPM)',
			en: 'Universidad Politécnica de Madrid (UPM)',
		},
		status: { es: '2025 – actualidad', en: '2025 – present' },
		current: true,
	},
	{
		title: {
			es: 'Miembro de la Asociación de Ciberseguridad',
			en: 'Member of the Cybersecurity Association',
		},
		place: {
			es: 'Universidad Politécnica de Madrid (UPM)',
			en: 'Universidad Politécnica de Madrid (UPM)',
		},
		status: { es: '2025 – actualidad', en: '2025 – present' },
		current: true,
	},
	{
		title: {
			es: 'Grado en Ingeniería en Telecomunicación',
			en: 'BSc in Telecommunications Engineering',
		},
		place: { es: 'Universidad de Alcalá', en: 'Universidad de Alcalá' },
		status: { es: '2024 – 2025', en: '2024 – 2025' },
	},
	{
		title: {
			es: 'Bachillerato Tecnológico',
			en: 'Technological Baccalaureate',
		},
		place: { es: 'Educación secundaria', en: 'Secondary education' },
		status: { es: '2022 – 2024', en: '2022 – 2024' },
	},
];

// Pestañas de la barra del "editor": ancla de la sección + nombre
// de archivo mostrado en cada idioma.
export const tabs: { anchor: string; label: Localized }[] = [
	{ anchor: '#hero', label: { es: 'hero.tsx', en: 'hero.tsx' } },
	{ anchor: '#sobre-mi', label: { es: 'sobre-mi.md', en: 'about-me.md' } },
	{ anchor: '#stack', label: { es: 'stack.json', en: 'stack.json' } },
	{ anchor: '#proyectos', label: { es: 'proyectos.ts', en: 'projects.ts' } },
	{ anchor: '#trayectoria', label: { es: 'trayectoria.log', en: 'career.log' } },
	{ anchor: '#contacto', label: { es: 'contactame.sh', en: 'contact-me.sh' } },
];

// Textos de interfaz (metadatos, comandos de sección, aria-labels…)
export const ui = {
	es: {
		metaTitle: 'Daniel Aparisi — Desarrollador junior',
		metaDescription:
			'Portfolio de Daniel Aparisi, estudiante de Ingeniería de Software en la UPM. Aprendiendo y construyendo con Astro, TypeScript y Java.',
		navLabel: 'Secciones',
		switchLocaleLabel: 'Switch to English',
		aboutCommand: '/* sobre-mi.md */',
		stackCommand: 'cat stack.json',
		projectsCommand: 'ls ./proyectos --github',
		trayectoriaCommand: 'cat trayectoria.log',
		contactCommand: './contactame.sh',
		projectPreviewAlt: 'Vista previa de',
		viewDemoOf: 'Ver demo de',
		viewOnGithub: 'en GitHub',
		viewCodeOf: 'Ver código de',
		viewRepo: 'Ver repositorio en GitHub',
		contactHeading: '¿Tienes un proyecto o una oportunidad?',
		contactSub: 'Escríbeme y hablamos.',
	},
	en: {
		metaTitle: 'Daniel Aparisi — Junior developer',
		metaDescription:
			'Portfolio of Daniel Aparisi, Software Engineering student at UPM. Learning and building with Astro, TypeScript and Java.',
		navLabel: 'Sections',
		switchLocaleLabel: 'Cambiar a español',
		aboutCommand: '/* about-me.md */',
		stackCommand: 'cat stack.json',
		projectsCommand: 'ls ./projects --github',
		trayectoriaCommand: 'cat career.log',
		contactCommand: './contact-me.sh',
		projectPreviewAlt: 'Preview of',
		viewDemoOf: 'View demo of',
		viewOnGithub: 'on GitHub',
		viewCodeOf: 'View source of',
		viewRepo: 'View repository on GitHub',
		contactHeading: 'Got a project or an opportunity?',
		contactSub: "Drop me a line and let's talk.",
	},
} satisfies Record<Locale, Record<string, string>>;
