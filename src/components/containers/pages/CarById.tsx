"use client";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

import {
  RentDetails,
  CarHeader,
  CarMain,
  RelatedCars,
} from "@/src/components/ui/car-info";
import ImageSwiper from "@/src/components/ui/image-swiper/ImageSwiper";
import { ICar } from "@/src/interfaces/cars.interface";
import { getCarById } from "@/src/actions/cars";

interface ICarPage {
  carId: string;
}

const CarById: FC<ICarPage> = ({ carId: id }: any) => {
  const {
    data: car,
    isLoading,
    error,
  } = useQuery<ICar>({
    queryKey: ["CARS_BY_ID", id],
    queryFn: () => getCarById(id),
  });

  return (
    <>
      {car && (
        <>
          <ImageSwiper images={car.car_image} />
          <CarHeader
            brand={car.brand}
            model={car.model}
            year={car.year}
            features={car.caracteristics.features}
            powerType={car.power_type}
            transmissionType={car.transmission_type}
          />
          <Divider />
          <Grid container spacing={2} mt={2}>
            <Grid size={{ sm: 12, md: 7 }}>
              <CarMain
                caracteristics={car.caracteristics}
                description={car.description}
                kilometers={car.kilometers}
                ownerId={car.owner_id}
              />
            </Grid>
            <Grid size={{ sm: 12, md: 5 }}>
              <RentDetails
                price={car.price}
                pickupLocation={car.pickup_location}
              />
            </Grid>
          </Grid>
          <Divider sx={{ my: 4 }} />
          <RelatedCars
            carType={car.car_type}
            limit={3}
            excludeId={car.id}
          />
        </>
      )}
    </>
  );
};

export default CarById;
