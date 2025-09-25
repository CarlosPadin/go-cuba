import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  AppBar,
  Container,
  Toolbar,
} from "@mui/material";
import logoImg from "@/public/logo/Logo.png";
import { NavbarMenuButton } from ".";

const Navbar: FC = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "rgba(255, 255, 255, 0.51)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          paddingY: "10px",
        }}
      >
        <Container>
          <Toolbar
            variant="dense"
            sx={{ justifyContent: "space-between" }}
          >
            <Link href={"/"}>
              <Image src={logoImg} alt={"Yava Logo"} height={50}/>
            </Link>
            <NavbarMenuButton />
          </Toolbar>
          
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
