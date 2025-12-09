import { ReactElement } from "react";

export interface navbarLink {
  link: string,
  page: string,
  icon: ReactElement,
}

export interface socialLink {
  href: string,
  src: string,
  alt: string,
}