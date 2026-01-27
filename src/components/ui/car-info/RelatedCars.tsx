"use client";
import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";

import { ICar } from "@/src/interfaces";
import { getCarsByType } from "@/src/db/connection";
import { CarItem } from "@/src/components/ui/cars";
import { CarsByTypeSkeleton } from "@/src/components/ui/skeletons";

interface IRelatedCarsProps {
  carType: string;
  limit?: number;
  excludeId: string;
}

const RelatedCars: FC<IRelatedCarsProps> = ({
  carType,
  limit,
  excludeId,
}) => {
  const { data: cars, isLoading } = useQuery<ICar[]>({
    queryKey: ["CARS_BY_TYPE", carType, limit],
    queryFn: () =>
      getCarsByType({ carType, limit, excludeId }),
  });
  const t = useTranslations("Car");

  return (
    <Box mt={4}>
      <Typography
        variant="h4"
        my={2}
        display={"flex"}
        justifyContent={"center"}
        textAlign={"center"}
      >
        {t("relatedCars")}
      </Typography>

      {isLoading && <CarsByTypeSkeleton />}

      <Grid container marginBottom={10}>
        {cars &&
          cars.map((car) => (
            <Grid size={{ xs: 6, md: 4 }} key={car.id}>
              <CarItem car={car} />
            </Grid>
          ))}
        {cars && !cars.length && (
          <Box display="flex" justifyContent="center" p={4}>
            <Typography color="error">
              No related cars found
            </Typography>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default RelatedCars;
