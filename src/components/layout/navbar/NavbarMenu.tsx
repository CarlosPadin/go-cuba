"use client";
import { FC, useState } from "react";
import Link from "next/link";

import {
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  ListItemText,
  useTheme,
  Modal,
  Box,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useTranslations } from "next-intl";
import { navOptions } from "@/src/constants";
import {
  useSession,
  useLogout,
} from "@/src/hooks/mutations";
import { useResponsive } from "@/src/hooks";

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
  const [logoutModal, setLogoutModal] = useState(false);
  const t = useTranslations("Navbar");
  const theme = useTheme();
  const { isMobile } = useResponsive();
  const { user } = useSession();
  const logout = useLogout();

  // hide login and register when the user is logged
  const filteredOptions = navOptions.filter((link) => {
    if (!user && link.name === "logout") return false;
    if (
      user &&
      (link.name === "login" || link.name === "register")
    )
      return false;
    return true;
  });

  const confirmLogout = () => {
    setLogoutModal(false);
    logout();
  };

  return (
    <>
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
        {filteredOptions.map((option) =>
          option.name === "logout" ? (
            <MenuItem
              key={option.name}
              onClick={() => {
                handleClose();
                setLogoutModal(true);
              }}
            >
              <ListItemIcon
                sx={{ color: theme.palette.text.primary }}
              >
                {option.icon}
              </ListItemIcon>
              <ListItemText
                sx={{ color: theme.palette.text.primary }}
              >
                {t(option.name)}
              </ListItemText>
            </MenuItem>
          ) : (
            <Link
              href={option.link}
              key={option.name}
              onClick={handleClose}
            >
              <MenuItem>
                <ListItemIcon
                  sx={{ color: theme.palette.text.primary }}
                >
                  {option.icon}
                </ListItemIcon>
                <ListItemText
                  sx={{ color: theme.palette.text.primary }}
                >
                  {t(option.name)}
                </ListItemText>
              </MenuItem>
            </Link>
          )
        )}
        {isMobile && (
          <>
            <Divider />
            <MenuItem>
              <ListItemIcon
                sx={{ color: theme.palette.text.primary }}
              >
                <Close />
              </ListItemIcon>
              <ListItemText
                onClick={handleClose}
                sx={{ color: theme.palette.text.primary }}
              >
                {t("close")}
              </ListItemText>
            </MenuItem>
          </>
        )}
      </Menu>

      <Modal
        open={logoutModal}
        onClose={() => setLogoutModal(false)}
      >
        <Box
          sx={{
            bgcolor: "white",
            color: "black",
            maxWidth: "350px",
            maxHeight: "300px",
            borderRadius: "12px",
            p: 3,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography variant="h6" mb={5} textAlign={'center'}>
            Seguro que desea cerrar la sesion??
          </Typography>
          <Stack direction={"row"} gap={1}>
            <Button
              onClick={() => setLogoutModal(false)}
              fullWidth
            >
              Cancelar
            </Button>
            <Button
              onClick={confirmLogout}
              variant="contained"
              fullWidth
            >
              Confirmar
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default NavbarMenu;
