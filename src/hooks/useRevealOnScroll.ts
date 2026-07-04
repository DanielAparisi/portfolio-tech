// Revela elementos al entrar en el viewport con una cascada escalonada:
// los elementos que aparecen en la misma pasada del observer reciben un
// retardo incremental (--reveal-delay) para que la entrada se perciba mejor.
export function useRevealOnScroll(
  selector = ".reveal",
  threshold = 0.15,
  staggerMs = 90,
) {
  const items = document.querySelectorAll<HTMLElement>(selector);
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        let order = 0;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.setProperty("--reveal-delay", `${order * staggerMs}ms`);
            el.classList.add("is-visible");
            io.unobserve(el);
            order++;
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add("is-visible"));
  }
}
