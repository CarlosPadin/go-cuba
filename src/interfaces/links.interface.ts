import { ReactElement } from "react";

export interface navbarOption {
  link: string,
  name: string,
  icon: ReactElement,
}

export interface socialLink {
  href: string,
  src: string,
  alt: string,
}