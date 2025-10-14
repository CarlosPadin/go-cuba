import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { AppBar, Container, Toolbar } from "@mui/material";
import logotypeImg from "@/public/logo/logotype.png";
import isotypeImg from "@/public/logo/isotype.png";
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
              <Image
                src={isotypeImg}
                alt={"GoCuba isotype"}
                height={60}
              />
            </Link>
            <Image
              src={logotypeImg}
              alt={"GoCuba logotype"}
              height={50}
            />
            <NavbarMenuButton />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
