'use client'
import { FC } from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import classes from "./footer.module.css";
import logotype from "@/public/logo/Logotype.png";
import FollowUs from "./FollowUs";
import { useTranslations } from "next-intl";

const Footer: FC = () => {
  const t = useTranslations("Footer");
  const theme = useTheme();

  return (
    <Box
      bgcolor={theme.palette.primary.main}
      color={theme.palette.background.default}
      paddingTop={10}
      paddingBottom={5}
    >
      <Container>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 2, md: 0 } }}
        >
          <Image
            src={logotype}
            alt="Logo"
            className={classes.logo}
          />
          <Box maxWidth={"400px"} padding={3}>
            <Typography variant="body2" align="justify">
              Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Delectus ab consequuntur
              saepe facere, blanditiis vitae ullam! Totam
              saepe officia culpa! Lorem ipsum dolor sit
              amet consectetur, adipisicing elit.
              Voluptatum, dolore.
            </Typography>
          </Box>

          <FollowUs />
        </Box>
        <Typography
          display={"flex"}
          justifyContent={"center"}
          marginTop={5}
          variant="subtitle2"
        >
          {t("rights")}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
