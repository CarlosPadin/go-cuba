import { FC } from "react";
import Link from "next/link";

import {
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useTranslations } from "next-intl";
import { links } from "@/src/constants";

interface Props {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
}

const NavbarMenu: FC<Props> = ({
  anchorEl,
  open,
  handleClose,
}) => {
  const t = useTranslations("Navbar");

  return (
    <Menu
      open={open}
      onClose={handleClose}
      anchorEl={anchorEl}
      transformOrigin={{
        horizontal: "right",
        vertical: "top",
      }}
      anchorOrigin={{
        horizontal: "right",
        vertical: "bottom",
      }}
      slotProps={{
        paper: {
          sx: {
            width: 200,
            bgcolor: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(10px)",
            borderRadius: 5,
            "& .MuiMenuItem-root:hover": {
              bgcolor: "black",
              color: "white",
            },
            "& .MuiMenuItem-root:hover .MuiListItemIcon-root":
              {
                color: "white",
              },
            "& .MuiMenuItem-root:hover .MuiListItemText-root":
              {
                color: "white",
              },
          },
        },
      }}
    >
      {links.map(
        (link) =>
          link.show && (
            <Link href={link.link} key={link.page}>
              <MenuItem>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText>{t(link.page)}</ListItemText>
              </MenuItem>
            </Link>
          )
      )}
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <Close />
        </ListItemIcon>
        <ListItemText onClick={handleClose}>
          {t("close")}
        </ListItemText>
      </MenuItem>
    </Menu>
  );
};

export default NavbarMenu;
