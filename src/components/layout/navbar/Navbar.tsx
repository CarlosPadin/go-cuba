"use client";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { AppBar, Container, Toolbar } from "@mui/material";
import logotypeImg from "@/public/logo/Logotype.png";
import isotypeImg from "@/public/logo/isotype.png";
import { NavbarMenuButton } from ".";
import { useResponsive } from "@/src/hooks";

const Navbar: FC = () => {
  const { isMobile } = useResponsive();
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
            {!isMobile && (
              <Link href={"/"}>
                <Image
                  src={isotypeImg}
                  alt={"GoCuba isotype"}
                  height={60}
                />
              </Link>
            )}
            <Link href={"/"}>
              <Image
                src={logotypeImg}
                alt={"GoCuba logotype"}
                height={50}
                priority
              />
            </Link>
            <NavbarMenuButton />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
