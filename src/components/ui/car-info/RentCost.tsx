"use client";
import { FC } from "react";
import { useTranslations } from "next-intl";
import { Stack, Typography } from "@mui/material";

const RentCost: FC<{ price: number }> = ({ price }) => {
  const t = useTranslations("Car");
  const discounts = 0; // Placeholder for future discount logic
  const daysCount = 1; // Placeholder for future discount logic

  const totalPrice = (price * daysCount) - discounts;

  return (
    <>
      <Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Typography variant="body1">
            <b>{t("daysCount")}</b>:
          </Typography>
          <Typography variant="body2">{`${daysCount}`}</Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Typography variant="body1">
            <b>{t("discounts")}</b>:
          </Typography>
          <Typography variant="body2">{`$ ${discounts}`}</Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Typography variant="body1">
            <b>{t("perDay")}</b>:
          </Typography>
          <Typography variant="body2">{`$ ${price}`}</Typography>
        </Stack>
      </Stack>

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        my={2}
      >
        <Typography variant="h5">
          <b>{t("totalPrice")}</b>:
        </Typography>
        <Typography variant="h6">{`$ ${totalPrice}`}</Typography>
      </Stack>
    </>
  );
};

export default RentCost;
