"use client";
import { FC } from "react";
import Image from "next/image";
import { Box, Container, Divider, Grid, useTheme } from "@mui/material";

import brandImg from "@/public/logo/brand-dark.png";
import {
  FooterDescription,
  FooterLegal,
  FooterNavigation,
  SocialLinks,
} from ".";

const Footer: FC = () => {
  const theme = useTheme();

  return (
    <Box
      bgcolor={theme.palette.primary.main}
      color={theme.palette.background.default}
      pt={8}
      pb={1}
    >
      <Container>
      <Grid container spacing={4} alignItems={"center"}>
        <Grid
          size={{ xs: 12, md: 4 }}
          display={"flex"}
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          <Box position={"relative"} width={220} height={220}>
            <Image
              src={brandImg}
              alt="GoCuba Brand"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1500px) 50vw, 300px"
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
          <FooterDescription />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={{ xs: "center", md: "flex-end" }}>
          <FooterNavigation />
        </Grid>

        <Grid size={{ xs: 12 }} display={"flex"} justifyContent={"center"}>
          <SocialLinks />
        </Grid>
      </Grid>

      <Divider sx={{ mt: 6, borderColor: "rgba(255,250,255,0.15)" }} />
      <FooterLegal />
      </Container>
    </Box>
  );
};

export default Footer;
