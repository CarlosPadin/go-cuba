"use client";
import { FC } from "react";
import Link from "next/link";
import { Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const FooterNavigation: FC = () => {
  const t = useTranslations("Footer");

  const quickLinks = [
    { href: "/", label: t("linkHome") },
    { href: "/explore", label: t("linkExplore") },
    { href: "/about", label: t("linkAbout") },
    { href: "/support", label: t("linkSupport") },
  ];
  
  return (
    <Stack direction={"column"} gap={1.5} alignItems={{ xs: "center", md: "flex-end" }}>
      <Typography
        variant="subtitle2"
        letterSpacing={2}
        sx={{
          opacity: 0.55,
          textTransform: "uppercase",
          fontSize: "0.68rem",
        }}
      >
        {t("quickLinks")}
      </Typography>
      <Stack
        direction={{ xs: "row", md: "column" }}
        gap={{ xs: 2.5, md: 1.5 }}
        flexWrap={"wrap"}
        alignItems={{ xs: "center", md: "flex-end" }}
      >
        {quickLinks.map(({ href, label }) => (
          <Link key={href} href={href}>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.75,
                transition: "opacity 0.2s",
                "&:hover": { opacity: 1 },
              }}
            >
              {label}
            </Typography>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

export default FooterNavigation;
