"use client";

import { FC, useState } from "react";

import {
  AccountCircle,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { NavbarMenu } from ".";

const NavbarMenuButton: FC = () => {
  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        color="primary"
        variant="contained"
        size="large"
        sx={{
          borderRadius: "12px",
        }}
        onClick={handleClick}
        startIcon={<MenuIcon />}
        endIcon={<AccountCircle />}
      />
      <NavbarMenu
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

export default NavbarMenuButton;
