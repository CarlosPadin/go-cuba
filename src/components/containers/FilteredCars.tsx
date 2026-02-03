import { FC } from "react";
import { Grid } from "@mui/material";

const FilteredCars: FC = () => {
  return (
    <Grid container spacing={2} p={2} sx={{ width: '100%', backgroundColor: 'red'}}>
      <Grid size={{ xs: 6, md: 4, lg: 3 }} display={'flex'} justifyContent={'center'} bgcolor={'blue'}>Carro 1</Grid>
      <Grid size={{ xs: 6, md: 4, lg: 3 }}>Carro 2</Grid>
      <Grid size={{ xs: 6, md: 4, lg: 3 }}>Carro 3</Grid>
      <Grid size={{ xs: 6, md: 4, lg: 3 }}>Carro 4</Grid>
      <Grid size={{ xs: 6, md: 4, lg: 3 }}>Carro 5</Grid>
      <Grid size={{ xs: 6, md: 4, lg: 3 }}>Carro 6</Grid>
      <Grid size={{ xs: 6, md: 4, lg: 3 }}>Carro 7</Grid>
      <Grid size={{ xs: 6, md: 4, lg: 3 }}>Carro 8</Grid>
    </Grid>
  );
};

export default FilteredCars;
