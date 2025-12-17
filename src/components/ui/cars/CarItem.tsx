"use client";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Box,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import classes from "./CarItem.module.css";
import { ICar } from "@/src/interfaces";
import {
  FadeContent,
  GradientText,
} from "@/src/components/ui/react-bits";

interface Props {
  car: ICar;
}

const CarItem: FC<Props> = ({ car }) => {
  const theme = useTheme();
  return (
    <>
      <FadeContent
        blur={true}
        duration={800}
        easing="ease-out"
        initialOpacity={0}
      >
        <Link href={"/car/" + car.id}>
          <Card
            elevation={10}
            sx={{
              maxWidth: 300,
              m: 1,
              mb: 2,
              borderRadius: {xs: 3, sm: 5},
              maxHeight: 500,
            }}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              width={"100%"}
              position={"relative"}
              sx={{ height: { xs: "170px", sm: "270px" } }}
            >
              <Image
                src={car.carImage.mainImage}
                alt={`${car.id} ${car.brand} ${car.model}`}
                fill
                className={classes.image}
              />
              <Typography
                variant="button"
                position={"absolute"}
                zIndex={2}
                top={"5%"}
                left={"70%"}
                color="primary"
              >
                <b>{car.year}</b>
              </Typography>
            </Box>
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "18px", md: "20px" },
                }}
              >
                <b>{car.brand.toUpperCase()}</b>{" "}
                {car.model.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: { xs: "12px", md: "18px" },
                }}
              >
                {`${car.powerType.toUpperCase()} (${car.kilometers.toString()} km)`}
              </Typography>
              <Box marginTop={3}>
                <GradientText
                  colors={[
                    theme.palette.text.primary,
                    theme.palette.success.main,
                    theme.palette.text.primary,
                    theme.palette.success.main,
                    theme.palette.text.primary,
                  ]}
                  animationSpeed={5}
                  showBorder={false}
                  // className="custom-class"
                >
                  <Typography
                    variant="h6"
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'center'}
                    sx={{
                      fontSize: { xs: "15px", md: "20px" },
                    }}
                  >
                    {`$${car.price} per day`}
                  </Typography>
                </GradientText>
              </Box>
            </CardContent>
          </Card>
        </Link>
      </FadeContent>
    </>
  );
};

export default CarItem;
