import { FC } from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const HelpLinks: FC = () => {
  const t = useTranslations("UserRegistration");
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"end"}
    >
      <Link href={"#"}>
        <Typography
          variant="subtitle1"
          fontSize={11}
          color="primary"
        >
          {t("passwordForget")}
        </Typography>
      </Link>
      <Link href={"/register"}>
        <Typography
          variant="subtitle1"
          fontSize={11}
          color="primary"
        >
          {t("register")}
        </Typography>
      </Link>
    </Box>
  );
};

export default HelpLinks;
