// Marca la pestaña de la sección visible con aria-current="location"
// (el CSS de las pestañas estiliza ese atributo). En vez de un
// IntersectionObserver se usa una línea imaginaria al 35% del viewport:
// la última sección cuyo inicio la ha cruzado es la activa. Así las
// secciones cortas del final también tienen su momento activo, y al
// llegar al fondo de la página se activa siempre la última.
export function useScrollSpy(
  selector = 'nav[aria-label="Secciones"] a[href^="#"]',
) {
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>(selector),
  );
  const sections = links.flatMap((link) => {
    const target = document.getElementById(
      decodeURIComponent(link.hash.slice(1)),
    );
    // El id puede estar en el h2 de la sección; observamos la sección entera.
    return target ? [{ link, el: target.closest("section") ?? target }] : [];
  });
  if (sections.length === 0) return;

  let ticking = false;

  const update = () => {
    ticking = false;
    const line = window.innerHeight * 0.35;
    let current = sections[0];
    for (const s of sections) {
      if (s.el.getBoundingClientRect().top <= line) current = s;
    }
    const scrollBottom = window.innerHeight + window.scrollY;
    if (scrollBottom >= document.documentElement.scrollHeight - 2) {
      current = sections[sections.length - 1];
    }
    for (const s of sections) {
      if (s === current) s.link.setAttribute("aria-current", "location");
      else s.link.removeAttribute("aria-current");
    }
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  update();
}
