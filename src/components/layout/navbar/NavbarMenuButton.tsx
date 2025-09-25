'use client'

import { FC, useState } from "react";

import { AccountCircle, Menu as MenuIcon } from "@mui/icons-material";
import { Button} from "@mui/material";
import { NavbarMenu } from ".";


const NavbarMenuButton: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        color="inherit"
        sx={{
          border: "1px solid #000",
          borderRadius: "15px",
          backdropFilter: "blur(4px)",
          color: "#000",
        }}
        onClick={handleClick}
      >
        <MenuIcon />
        <AccountCircle />
      </Button>
      <NavbarMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
    </>
  );
};

export default NavbarMenuButton;
