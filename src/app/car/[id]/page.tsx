import { NextPage } from "next";
import { Container, Divider, Grid } from "@mui/material";

import { getCarById } from "@/src/db/connection";
import { Car } from "@/src/interfaces/cars.interface";
import {
  CarAside,
  CarHeader,
  CarMain,
} from "@/src/components/ui/car-info";

const CarPage: NextPage = async ({ params }: any) => {
  const { id } = await params;
  const car: Car = getCarById(id);

  return (
    <Container sx={{ mt: 10, mb: 4 }}>
      <CarHeader
        brand={car.brand.name}
        model={car.model.name}
        year={car.year}
        features={car.caracteristics.features}
        powerType={car.powerType}
        transmissionType={car.transmissionType}

      />
      <Divider />
      <Grid container spacing={2} mt={2}>
        <Grid size={{ sm: 12, md: 7 }}>
          <CarMain
            caracteristics={car.caracteristics}
            description={car.description}
            kilometers={car.kilometers}
            ownerId={car.ownerId}
          />
        </Grid>
        <Grid size={{ sm: 12, md: 5 }}>
          <CarAside
            price={car.price}
            pickupLocation={car.pickupLocation}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarPage;
