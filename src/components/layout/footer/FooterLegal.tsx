"use client";
import { FC } from "react";
import Link from "next/link";
import { Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const FooterLegal: FC = () => {
  const t = useTranslations("Footer");

  return (
    <Stack
      direction={{ xs: "column-reverse", sm: "row" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      mt={5}
    >
      <Typography
        variant="caption"
        mt={2}
        textAlign={{ xs: "center", sm: "initial" }}
      >
        {t("rights")}
      </Typography>
      <Stack direction={"row"} mt={2} gap={2} mr={2}>
        <Link href={"#"}>
          <Typography variant="subtitle2">
            {t("cancellationPolicy")}
          </Typography>
        </Link>
        <Link href={"#"}>
          <Typography variant="subtitle2">
            {t("privacy")}
          </Typography>
        </Link>
      </Stack>
    </Stack>
  );
};

export default FooterLegal;
