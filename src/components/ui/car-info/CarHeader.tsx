'use client'
import { FC } from "react";
import { useTranslations } from "next-intl";
import {
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { CustomChip } from "../custom-components";
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
  const theme = useTheme()
  return (
    <>
      <Stack
        direction="column"
        alignItems="baseline"
        mb={2}
      >
        <Typography variant="h2" component="h1" letterSpacing={2}>
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
          <CustomChip color={theme.palette.primary.main}>
            <Typography variant="body2" sx={{ color: 'white'}}>
              {t(`powerType.${powerType}`)}
            </Typography>
          </CustomChip>
          <CustomChip color={theme.palette.success.main}>
            <Typography variant="body2" sx={{ color: 'white'}}>
              {t(`transmissionType.${transmissionType}`)}
            </Typography>
          </CustomChip>

          {features.map((feature) => (
            <CustomChip key={feature} color={theme.palette.primary.main} outlined >
              <Typography variant="body2" sx={{ color: theme.palette.primary.main}}>
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
