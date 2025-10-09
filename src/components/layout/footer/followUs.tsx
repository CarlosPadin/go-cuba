import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Box, Typography } from "@mui/material";
import facebook from "@/public/logo/facebook.png";
import instagram from "@/public/logo/instagram.png";
import tiktok from "@/public/logo/tiktok.png";

const FollowUs: FC = () => {
  const t = useTranslations("Footer");

  return (
    <Box padding={2}>
      <Typography
        variant="h6"
        gutterBottom
        display={"flex"}
        justifyContent={"center"}
      >
        {t("followUs")}
      </Typography>
      
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Link href="https://www.facebook.com">
          <Image
            src={facebook}
            alt="Facebook"
            width={30}
            height={30}
          />
        </Link>
        <Link href="https://www.tiktok.com">
          <Image
            src={tiktok}
            alt="TikTok"
            width={30}
            height={30}
          />
        </Link>
        <Link href="https://www.instagram.com">
          <Image
            src={instagram}
            alt="Instagram"
            width={30}
            height={30}
          />
        </Link>
      </Box>
    </Box>
  );
};

export default FollowUs;
