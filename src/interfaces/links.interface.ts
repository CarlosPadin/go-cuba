import { ReactElement } from "react";

export interface navbarLink {
  link: string,
  page: string,
  icon: ReactElement,
  show: boolean,
}

export interface socialLink {
  href: string,
  src: string,
  alt: string,
}