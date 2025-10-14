"use client";
import { FC } from "react";
import Image from "next/image";
import {
  Box,
  Grid,
  useTheme,
} from "@mui/material";

import brandImg from "@/public/logo/brand-dark.png";
import { FooterDescription, FooterLegal } from ".";

const Footer: FC = () => {
  const theme = useTheme();

  return (
    <Box
      bgcolor={theme.palette.primary.main}
      color={theme.palette.background.default}
      px={10}
      pt={8}
      pb={1}
    >
      <Grid container alignItems={"center"}>
        <Grid
          size={{ xs: 12, sm: 6 }}
        >
          <Box
            position={"relative"}
            width={250}
            height={250}
          >
            <Image src={brandImg} alt="GoCuba Brand" fill />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <FooterDescription />
        </Grid>
      </Grid>
      <FooterLegal />
    </Box>
  );
};

export default Footer;
