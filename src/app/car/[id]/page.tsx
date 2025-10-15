import { NextPage } from "next";
import { Container, Divider, Grid } from "@mui/material";

import { getCarById } from "@/src/db/connection";
import { Car } from "@/src/interfaces/cars.interface";
import {
  RentDetails,
  CarHeader,
  CarMain,
  RelatedCars,
} from "@/src/components/ui/car-info";
import ImageSwiper from "@/src/components/ui/image-swiper/ImageSwiper";

interface MetadataProps { 
  params: Promise<{ id: string }>
}

export const generateMetadata = async ({ params }: MetadataProps) => {
  const {id} = await params;
  const {model, description}: Car = getCarById(id);

  return {
    title: `${model.carBrand.toUpperCase()} ${model.name}`,
    description: {description}
  };
}

const CarPage: NextPage = async ({ params }: any) => {
  const { id } = await params;
  const car: Car = getCarById(id);

  return (
    <Container sx={{ mt: 10, mb: 4 }}>
      <ImageSwiper images={car.carImage} />
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
          <RentDetails
            price={car.price}
            pickupLocation={car.pickupLocation}
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />
      <RelatedCars
        carType={car.carType}
        limit={3}
        excludeId={car.id}
      />
    </Container>
  );
};

export default CarPage;
