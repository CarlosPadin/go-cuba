import {
  AppRegistration,
  ExitToApp,
  Info,
  Login,
  SupportAgent,
} from "@mui/icons-material";
import { navbarLink } from "../interfaces";

export const links: navbarLink[] = [
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
