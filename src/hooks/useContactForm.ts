// Envío del formulario de contacto vía AJAX (FormSubmit.co)
export function useContactForm(
  formId = "contact-form",
  statusId = "form-status",
) {
  const form = document.getElementById(formId) as HTMLFormElement | null;
  const status = document.getElementById(statusId);
  if (!form || !status) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = form.querySelector<HTMLButtonElement>(
      'button[type="submit"]',
    );
    status.textContent = "Enviando…";
    status.className = "text-sm text-muted";
    if (button) button.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Respuesta no válida");
      form.reset();
      status.textContent = "✓ ¡Mensaje enviado! Te responderé pronto.";
      status.className = "text-sm text-prompt";
    } catch {
      status.textContent =
        "✗ No se pudo enviar. Escríbeme a " + form.action.split("/").pop();
      status.className = "text-sm text-lang-astro";
    } finally {
      if (button) button.disabled = false;
    }
  });
}
