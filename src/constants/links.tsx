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
  },
  {
    link: "/register",
    page: "register",
    icon: <AppRegistration />,
  },
  {
    link: "/about",
    page: "aboutUs",
    icon: <Info />,
  },
  {
    link: "/support",
    page: "support",
    icon: <SupportAgent />,
  },
  {
    link: "/logout",
    page: "logout",
    icon: <ExitToApp />,
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