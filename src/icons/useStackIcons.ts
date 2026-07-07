import AstroIcon from './Astro.astro';
import TypeScriptIcon from './TypeScript.astro';
import JavaScriptIcon from './JavaScript.astro';
import JavaIcon from './Java.astro';
import CIcon from './C.astro';
import Html5Icon from './Html5.astro';
import Css3Icon from './Css3.astro';
import GitIcon from './Git.astro';
import ReactIcon from './React.astro';
import PythonIcon from './Python.astro';

export function useStackIcons(): Record<string, typeof AstroIcon> {
	return {
		Astro: AstroIcon,
		TypeScript: TypeScriptIcon,
		JavaScript: JavaScriptIcon,
		Java: JavaIcon,
		C: CIcon,
		HTML5: Html5Icon,
		CSS3: Css3Icon,
		Git: GitIcon,
		React: ReactIcon,
		Python: PythonIcon,
	};
}
