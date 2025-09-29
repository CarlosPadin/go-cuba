import { NextPage } from "next";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

import { getCarsByType } from "@/src/db/connection";
import { Car } from "@/src/interfaces/cars.interface";
import CarItem from "@/src/components/sections/explore/cars/CarItem";
import CarTypeNavigation from "@/src/components/ui/car-type-navigation/CarTypeNavigation";

const CarTypePage: NextPage = async ({ params }: any) => {
  const { carType } = await params;
  const cars: Car[] = await getCarsByType({ carType });

  return (
    <Container sx={{ marginTop: 10, marginBottom: 10 }}>
      <CarTypeNavigation carType={carType} />
      <Grid container marginBottom={10}>
        {cars.map((car) => (
          <Grid size={{ xs: 6, md: 4, lg: 3 }} key={car.id}>
            <CarItem car={car} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CarTypePage;
