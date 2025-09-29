import { NextPage } from "next";
import { Container, Divider } from "@mui/material";

import { getCarById } from "@/src/db/connection";
import { Car } from "@/src/interfaces/cars.interface";
import { CarMainInfo } from "@/src/components/ui/car-main-info";
  
const CarPage: NextPage = async ({params}: any) => {
  const {id} = await params;
  const car: Car = getCarById(id);

  return (
    <Container sx={{ mt: 10, mb: 4 }}>
      <CarMainInfo
        brand={car.brand.name}
        model={car.model.name}
        year={car.year}
        features={car.caracteristics.included}
      />
      <Divider />
    </Container>
  )
}

export default CarPage