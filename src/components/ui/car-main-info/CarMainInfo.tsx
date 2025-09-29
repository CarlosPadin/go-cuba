import { FC } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import CustomChip from "../custom-chip/CustomChip";

interface CarMainInfoProps {
  brand: string;
  model: string;
  year: number;
  evaluation?: number;
  features: string[]; 
}

const CarMainInfo: FC<CarMainInfoProps> = ({
  brand,
  model,
  year,
  features,
}) => {
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
          {features.map((feature) => (
              <CustomChip key={feature}>
                <Typography
                  variant="body2"
                  component="span"
                >
                  {feature}
                </Typography>
              </CustomChip>
          ))}
        </Grid>
      </Stack>
    </>
  );
};

export default CarMainInfo;
