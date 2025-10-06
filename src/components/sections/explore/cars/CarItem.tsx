"use client";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { Car } from "@/src/interfaces";
import {
  Box,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import classes from "./CarItem.module.css";
import {
  FadeContent,
  GradientText,
} from "@/src/components/ui/react-bits";

interface Props {
  car: Car;
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
              margin: 2,
              borderRadius: 5,
              paddingX: 1,
              maxHeight: 500,
            }}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <Image
                src={car.carImage.mainImage}
                alt={`${car.id} ${car.brand} ${car.model}`}
                width={230}
                height={230}
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
              <Typography variant="h6">
                <b>{car.brand.name.toUpperCase()}</b>{" "}
                {car.model.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
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
                  className="custom-class"
                >
                  <Typography variant="h6">
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
