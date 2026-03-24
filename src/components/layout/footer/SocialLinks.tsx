"use client";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Stack, Typography } from "@mui/material";

interface ISocialLink {
  href: string;
  src: string;
  alt: string;
}

const socialLinks: ISocialLink[] = [
  {
    alt: "Facebook",
    href: "https://www.facebook.com",
    src: "/logo/facebook.png",
  },
  {
    alt: "TikTok",
    href: "https://www.tiktok.com",
    src: "/logo/tiktok.png",
  },
  {
    alt: "Instagram",
    href: "https://www.instagram.com",
    src: "/logo/instagram.png",
  },
];

const SocialLinks: FC = () => {
  const t = useTranslations("Footer");

  return (
    <Stack direction={"column"} gap={1} mt={1}>
      <Typography
        variant="subtitle2"
        letterSpacing={2}
        display={'flex'}
        justifyContent={'center'}
        sx={{ opacity: 0.55, textTransform: "uppercase", fontSize: "0.68rem" }}
      >
        {t("followUs")}
      </Typography>
      <Stack direction={"row"} gap={1.5}>
        {socialLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <Image
              src={link.src}
              alt={link.alt}
              width={28}
              height={28}
              style={{ opacity: 0.85, transition: "opacity 0.2s" }}
            />
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

export default SocialLinks;
