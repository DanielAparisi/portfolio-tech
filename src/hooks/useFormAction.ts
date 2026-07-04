import { profile } from "../data/site";

// Endpoint de FormSubmit.co (gratis, sin backend). El primer envío
// llega a tu correo con un enlace de confirmación que debes aceptar una vez.
export function useFormAction(): string {
  return `https://formsubmit.co/ajax/${profile.email}`;
}
