import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Box, Button, Stack } from "@mui/material";
import { Collections } from "@mui/icons-material";
import { CarImage } from "@/src/interfaces";

const CarImages: FC<{ images: CarImage }> = ({
  images,
}) => {
  const t = useTranslations("Car");

  return (
    <>
      <Stack
        mt={10}
        mb={5}
        direction={"row"}
        justifyContent={"space-between"}
        position={"relative"}
      >
        <Box
          borderRadius={2}
          height={500}
          display={"flex"}
          alignItems={"center"}
          overflow={"hidden"}
        >
          <Image
            src={images.mainImage}
            alt="main image of the car"
            width={850}
            height={850}
          />
        </Box>
        <Stack
          direction={"column"}
          justifyContent={"space-between"}
        >
          <Box
            borderRadius={2}
            height={240}
            overflow={"hidden"}
          >
            <Image
              src={images.images[0]}
              alt="front image of the car"
              width={280}
              height={240}
            />
          </Box>
          <Box
            borderRadius={2}
            height={240}
            overflow={"hidden"}
          >
            <Image
              src={images.images[2]}
              alt="back image of the car"
              width={280}
              height={240}
            />
          </Box>
        </Stack>
      </Stack>
      <Button
        variant="contained"
        size="large"
        startIcon={
            <Collections />
        }
        sx={{
          position: "absolute",
          bottom: "30%",
          right: "20%",
          backgroundColor: "white",
          color: 'black',
          textTransform: 'none'
        }}
      >
        {t('seeMoreImages')}
      </Button>
    </>
  );
};

export default CarImages;
