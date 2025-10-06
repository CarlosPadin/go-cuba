'use client'
import { FC } from "react";
import Link from "next/link";

import {
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  ListItemText,
  useTheme,
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
  const theme = useTheme();

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
            overflow: "hidden",
            bgcolor: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(10px)",
            borderRadius: 5,
            "& .MuiMenuItem-root:hover": {
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            },
            "& .MuiMenuItem-root:hover .MuiListItemIcon-root":
              {
                color: theme.palette.background.default,
              },
            "& .MuiMenuItem-root:hover .MuiListItemText-root":
              {
                color: theme.palette.background.default,
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
                <ListItemIcon sx={{ color: theme.palette.text.primary}}>{link.icon}</ListItemIcon>
                <ListItemText sx={{ color: theme.palette.text.primary}}>{t(link.page)}</ListItemText>
              </MenuItem>
            </Link>
          )
      )}
      <Divider />
      <MenuItem>
        <ListItemIcon sx={{ color: theme.palette.text.primary }}>
          <Close />
        </ListItemIcon>
        <ListItemText onClick={handleClose} sx={{ color: theme.palette.text.primary }}>
          {t("close")}
        </ListItemText>
      </MenuItem>
    </Menu>
  );
};

export default NavbarMenu;
