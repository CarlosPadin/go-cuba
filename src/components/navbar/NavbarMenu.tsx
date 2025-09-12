import { FC } from "react";
import { Menu, MenuItem, Divider } from "@mui/material";

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
  return (
    <Menu
      open={open}
      onClose={handleClose}
      anchorEl={anchorEl}
    >
      <MenuItem>Entrar</MenuItem>
      <MenuItem>Registrarse</MenuItem>
      <Divider />
      <MenuItem>Soporte</MenuItem>
      <MenuItem>Acerca de</MenuItem>
      <Divider />
      <MenuItem>Salir</MenuItem>
      <MenuItem onClick={handleClose}>Cerrar</MenuItem>
    </Menu>
  );
};

export default NavbarMenu;
