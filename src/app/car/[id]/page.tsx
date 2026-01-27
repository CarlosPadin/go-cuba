import { NextPage } from "next";
import { Container } from "@mui/material";
import { ICar } from "@/src/interfaces/cars.interface";
import { getCarById } from "@/src/db/connection";
import { CarById } from "@/src/components/containers/pages";

interface MetadataProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({
  params,
}: MetadataProps) => {
  const { id } = await params;
  const { brand, model, description }: ICar =
    await getCarById(id);

  return {
    title: `${brand.toUpperCase()} ${model}`,
    description: description,
  };
};

const CarPage: NextPage = async ({ params }: any) => {
  const { id } = await params;

  return (
    <Container sx={{ mt: 10, mb: 4 }}>
      <CarById carId={id} />
    </Container>
  );
};

export default CarPage;
