import { FC } from "react";
import { useTranslations } from "next-intl";
import {
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import CustomChip from "../custom-chip/CustomChip";
import { CarHeaderProps } from "@/src/interfaces";

const CarHeader: FC<CarHeaderProps> = ({
  brand,
  model,
  year,
  features,
  powerType,
  transmissionType,
}) => {
  const t = useTranslations("Car");
  return (
    <>
      <Stack
        direction="column"
        alignItems="baseline"
        mb={2}
      >
        <Typography variant="h2" component="h1">
          {brand.toUpperCase()} {model}
        </Typography>
        <Typography
          variant="h3"
          color="textDisabled"
          component="h2"
        >
          {year}
        </Typography>
        
        <Grid container spacing={1} my={1}>
          <CustomChip color="lightblue">
            <Typography variant="body2">
              {t(`powerType.${powerType}`)}
            </Typography>
          </CustomChip>
          <CustomChip color="lightgreen">
            <Typography variant="body2">
              {t(`transmissionType.${transmissionType}`)}
            </Typography>
          </CustomChip>

          {features.map((feature) => (
            <CustomChip key={feature}>
              <Typography variant="body2">
                {feature}
              </Typography>
            </CustomChip>
          ))}
        </Grid>
      </Stack>
    </>
  );
};

export default CarHeader;
