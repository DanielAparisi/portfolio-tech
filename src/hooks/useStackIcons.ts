import AstroIcon from "../icons/Astro.astro";
import TypeScriptIcon from "../icons/TypeScript.astro";
import JavaScriptIcon from "../icons/JavaScript.astro";
import JavaIcon from "../icons/Java.astro";
import CIcon from "../icons/C.astro";
import Html5Icon from "../icons/Html5.astro";
import Css3Icon from "../icons/Css3.astro";
import GitIcon from "../icons/Git.astro";
import ReactIcon from "../icons/React.astro";
import PythonIcon from "../icons/Python.astro";

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
