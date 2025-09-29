import { FC } from "react";
import { Box } from "@mui/material";
import CarTypeCard from "./CarTypeCard";
import { carTypes } from "@/src/constants/car-props";

interface CarTypeNavigationProps {
  carType: string;
}

const CarTypeNavigation: FC<CarTypeNavigationProps> = ({
  carType,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      gap={2}
      marginY={4}
    >
      {carTypes.map((type) => (
        <CarTypeCard
          key={type.name}
          name={type.name}
          label={type.label}
          carType={carType}
        />
      ))}
    </Box>
  );
};

export default CarTypeNavigation;
