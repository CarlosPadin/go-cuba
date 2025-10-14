import {
  AppRegistration,
  ExitToApp,
  Info,
  Login,
  SupportAgent,
} from "@mui/icons-material";
import { navbarLink, socialLink } from "../interfaces";

export const navLinks: navbarLink[] = [
  {
    link: "/login",
    page: "login",
    icon: <Login />,
    show: true,
  },
  {
    link: "/register",
    page: "register",
    icon: <AppRegistration />,
    show: true,
  },
  {
    link: "/about",
    page: "aboutUs",
    icon: <Info />,
    show: true,
  },
  {
    link: "/support",
    page: "support",
    icon: <SupportAgent />,
    show: true,
  },
  {
    link: "/logout",
    page: "logout",
    icon: <ExitToApp />,
    show: false,
  },
];

export const socialLinks: socialLink[] = [
  {
    alt: 'Facebook',
    href: 'https://www.facebook.com',
    src: '/logo/facebook.png'
  },
  {
    alt: 'TikTok',
    href: 'https://www.tiktok.com',
    src: '/logo/tiktok.png'
  },
  {
    alt: 'Instagram',
    href: 'https://www.instagram.com',
    src: '/logo/instagram.png'
  },
]