"use client";
import { FC, useState, MouseEvent } from "react";
import {
  Menu as MenuIcon,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { MenuAvatar, NavbarMenu } from ".";

const NavbarMenuButton: FC = () => {
  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (
    event: MouseEvent<HTMLButtonElement>
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
        endIcon={<MenuAvatar />}
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
