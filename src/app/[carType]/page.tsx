import { NextPage } from "next";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

import { getCarsByType } from "@/src/db/connection";
import { ICar } from "@/src/interfaces/cars.interface";
import CarItem from "@/src/components/ui/cars/CarItem";
import CarTypeNavigation from "@/src/components/ui/car-type-navigation/CarTypeNavigation";
import { metadata } from "../layout";


interface MetadataProps { 
  params: Promise<{ carType: string }>
}

export const generateMetadata = async ({ params }: MetadataProps) => {
  const {carType} = await params;

  return {
    title: `${metadata.title} | ${carType.toUpperCase()}`,
    description: `${carType} cars for use`
  };
}

const CarTypePage: NextPage = async ({ params }: any) => {
  const { carType } = await params;
  const cars: ICar[] = await getCarsByType({ carType });

  return (
    <Container sx={{ marginTop: 15, marginBottom: 10 }}>
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
