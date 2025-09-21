import { FC } from "react";
import CarsPreviewGrid from "./CarsPreviewGrid";
import { Container } from "@mui/material";

const MainCars: FC = () => {

  return (
    <Container>
      <CarsPreviewGrid carType="sports" />
      <CarsPreviewGrid carType="sedan" />
      <CarsPreviewGrid carType="suv" />
    </Container>
  );
};

export default MainCars;
