import { ReactElement } from "react";
import {
  AppRegistration,
  ExitToApp,
  Info,
  Login,
  SupportAgent,
} from "@mui/icons-material";

export interface INavbarOption {
  link: string;
  name: string;
  icon: ReactElement;
}

export const navOptions: INavbarOption[] = [
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


