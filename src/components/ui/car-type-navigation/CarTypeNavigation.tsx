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
      height={200}
      gap={2}
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
