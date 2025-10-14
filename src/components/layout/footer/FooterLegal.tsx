"use client";
import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";

const FooterLegal: FC = () => {
  const t = useTranslations("Footer");

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      mt={5}
    >
      <Typography variant="caption">
        {t("rights")}
      </Typography>
      <Stack direction={"row"} gap={2} mr={2}>
        <Link href={"#"}>
          <Typography variant="caption">
            Cancellation Policy
          </Typography>
        </Link>
        {" - "}
        <Link href={"#"}>
          <Typography variant="caption">Privacy</Typography>
        </Link>
      </Stack>
    </Stack>
  );
};

export default FooterLegal;
