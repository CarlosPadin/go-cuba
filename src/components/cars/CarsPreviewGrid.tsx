import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { getCarsByType } from "@/src/db/connection";
import CarItem from "./CarItem";
import { Car } from "@/src/interfaces";

interface Props {
  carType: string,
}

const CarsPreviewGrid: FC<Props> = ({carType}) => {
  const cars: Car[] = getCarsByType({
    carType: carType,
    limit: 3,
  });


  return (
    <>
      <Typography variant="h3">
        Get a {carType} car
      </Typography>
      <Box display={"flex"} flexDirection={'row'}>
    {
      cars.map((car) => (
        <CarItem key={car.id} car={car}/>
      ))
    }
      </Box>
    </>
  );
};

export default CarsPreviewGrid;
