import { FC } from "react";
import Link from "next/link";

import { useTranslations } from "next-intl";
import {
  Box,
  Divider,
  Grid,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import { getCarsByType } from "@/src/db/connection";
import { CarItem } from ".";
import { Car } from "@/src/interfaces";
import { CustomTooltip } from "@/src/components/ui/custom-components";

interface Props {
  carType: string;
  limit?: number;
}

const CarsPreviewGrid: FC<Props> = ({ carType, limit }) => {
  const t = useTranslations("Explore");
  const cars: Car[] = getCarsByType({
    carType: carType,
    limit: limit,
  });

  return (
    <>
      <Box position={"relative"}>
        <Typography
          variant="h3"
          display={"flex"}
          justifyContent={"center"}
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
                top: "40%",
              }}
            />
        </CustomTooltip>
        </Link>
      </Box>

      <Divider variant="middle" />
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
