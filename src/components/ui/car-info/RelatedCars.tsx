"use server";
import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { Car } from "@/src/interfaces";
import { getCarsByType } from "@/src/db/connection";
import { CarItem } from "../cars";

interface RelatedCarsProps {
  carType: string;
  limit?: number;
  excludeId: string;
}

const RelatedCars: FC<RelatedCarsProps> = ({
  carType,
  limit,
  excludeId,
}) => {
  const cars: Car[] = getCarsByType({
    carType,
    limit,
    excludeId,
  });
  const t = useTranslations("Car");

  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        my={2}
        display={"flex"}
        justifyContent={"center"}
        textAlign={'center'}
      >
        {t("relatedCars")}
      </Typography>
      <Grid container marginBottom={10}>
        {cars.map((car) => (
          <Grid size={{ xs: 6, md: 4 }} key={car.id}>
            <CarItem car={car} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RelatedCars;
