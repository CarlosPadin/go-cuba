"use client";
import { FC, useState } from "react";
import Link from "next/link";
import {
  Menu,
  MenuItem,
  Divider,
  useTheme,
} from "@mui/material";
import { Close } from "@mui/icons-material";

import { navOptions } from "@/src/constants";
import {
  useSession,
  useLogout,
} from "@/src/hooks/mutations";
import { useResponsive } from "@/src/hooks";
import { ConfirmationLogout, OptionItem } from ".";
import { menuPaperStyles } from "@/src/constants/styles";

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
  const theme = useTheme();
  const { isDesktop } = useResponsive();
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
        disableScrollLock
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
            sx: menuPaperStyles(theme),
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
              <OptionItem
                key={option.name}
                name={option.name}
                icon={option.icon}
              />
            </MenuItem>
          ) : (
            <Link
              href={option.link}
              key={option.name}
              onClick={handleClose}
            >
              <MenuItem>
                <OptionItem
                  name={option.name}
                  icon={option.icon}
                />
              </MenuItem>
            </Link>
          )
        )}
        {!isDesktop && <Divider />}  {/* Menu doesn't accept a fragment as a child, that's why it's separated*/}
        {!isDesktop && (
          <MenuItem onClick={handleClose}>
            <OptionItem name={"close"} icon={<Close />} />
          </MenuItem>
        )}
      </Menu>

      <ConfirmationLogout
        open={logoutModal}
        closeHandler={() => setLogoutModal(false)}
        confirm={confirmLogout}
      />
    </>
  );
};

export default NavbarMenu;
