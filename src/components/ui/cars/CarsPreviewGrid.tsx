"use client";
import { FC } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Box,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";

import { getCarsByType } from "@/src/db/connection";
import { CarItem } from ".";
import { ICar } from "@/src/interfaces";
import { CustomTooltip } from "@/src/components/ui/custom-components";
import { CarsByTypeSkeleton } from "@/src/components/ui/skeletons";

interface ICarsPreviewGrid {
  carType: string;
  limit?: number;
}

const CarsPreviewGrid: FC<ICarsPreviewGrid> = ({ carType, limit }) => {
  const t = useTranslations("Explore");

  const {
    data: cars = [],
    isLoading,
    error,
  } = useQuery<ICar[]>({
    queryKey: ["cars", carType, limit],
    queryFn: () => getCarsByType({ carType, limit }),
  });

  console.log("data: ", cars)
  console.log("error: ", error)
  return (
    <>
      <Box position={"relative"}>
        <Typography
          variant="h3"
          display={"flex"}
          justifyContent={"center"}
          mb={2}
          sx={{
            fontSize: {
              xs: "32px",
              sm: "40px",
              md: "50px",
            },
          }}
        >
          {t(carType)}
        </Typography>
        <Link href={carType}>
          <CustomTooltip title={t("seeMore")}>
            <ArrowForwardIos
              sx={{
                position: "absolute",
                zIndex: 2,
                right: "0",
                top: { xs: "30%", md: "40%" },
              }}
            />
          </CustomTooltip>
        </Link>
      </Box>

      <Divider variant="middle" sx={{ mb: 2 }} />
      {isLoading && <CarsByTypeSkeleton />}
      {error && (
        <Box display="flex" justifyContent="center" p={4}>
          <Typography color="error">
            Error loading cars
          </Typography>
        </Box>
      )}

      <Grid container marginBottom={10}>
        {cars.map((car) => (
          <Grid size={{ xs: 6, md: 4, lg: 3 }} key={car.id}>
            <CarItem car={car} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CarsPreviewGrid;
