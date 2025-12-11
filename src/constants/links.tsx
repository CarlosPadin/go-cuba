import {
  AppRegistration,
  ExitToApp,
  Info,
  Login,
  SupportAgent,
} from "@mui/icons-material";
import { navbarOption, socialLink } from "../interfaces";

export const navOptions: navbarOption[] = [
  {
    link: "/login",
    name: "login",
    icon: <Login />,
  },
  {
    link: "/register",
    name: "register",
    icon: <AppRegistration />,
  },
  {
    link: "/about",
    name: "aboutUs",
    icon: <Info />,
  },
  {
    link: "/support",
    name: "support",
    icon: <SupportAgent />,
  },
  {
    link: "/logout",
    name: "logout",
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