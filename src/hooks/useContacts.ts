import { profile } from "../data/site";

import GmailIcon from "../icons/Gmail.astro";
import LinkedinIcon from "../icons/Linkedin.astro";
import GithubIcon from "../icons/Github.astro";
import FiverrIcon from "../icons/Fiverr.astro";

export interface Contact {
  label: string;
  value: string;
  href: string;
  Icon: typeof GmailIcon;
  external: boolean;
}

export function useContacts(): Contact[] {
  return [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      Icon: GmailIcon,
      external: false,
    },
    {
      label: "LinkedIn",
      value: "Daniel Aparisi Lozano",
      href: profile.linkedin,
      Icon: LinkedinIcon,
      external: true,
    },
    {
      label: "GitHub",
      value: "@" + profile.github.replace(/\/+$/, "").split("/").pop(),
      href: profile.github,
      Icon: GithubIcon,
      external: true,
    },
    {
      label: "Fiverr",
      value: "Contrátame en Fiverr",
      href: profile.fiverr,
      Icon: FiverrIcon,
      external: true,
    },
  ];
}
