"use client";
import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const FooterDescription: FC = () => {
  const t = useTranslations("Footer");

  return (
    <Stack direction={"column"} gap={2.5} alignItems={"center"} textAlign={"center"}>
      <Typography variant="h6" fontWeight={700} letterSpacing={0.5}>
        {t("tagline")}
      </Typography>
      <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.8 }}>
        {t("description")}
      </Typography>
    </Stack>
  );
};

export default FooterDescription;
