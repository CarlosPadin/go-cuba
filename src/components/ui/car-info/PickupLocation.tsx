import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const PickupLocation: FC<{ pickupLocation: string }> = ({
  pickupLocation,
}) => {
  const t = useTranslations("Car");
  return (
    <>
      <Typography variant="h5" my={2} display={"flex"} justifyContent={"center"}>
        {t("pickupLocation")}
      </Typography>
      <Typography variant="body2" mb={1}>
        {pickupLocation}
      </Typography>
      <Link href={"#"}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: 2,
            overflow: "hidden",
            border: "1px solid #ccc",
          }}
        >
          <Image
            src="/location.jpeg"
            alt={"location image"}
            width={160}
            height={90}
          />
        </Box>
      </Link>
    </>
  );
};

export default PickupLocation;
