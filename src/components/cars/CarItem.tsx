import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Car } from "@/src/interfaces";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import classes from "./CarItem.module.css";
import { FadeContent, ShinyText } from "../react-bits";
import { powerTypeIcon } from "@/src/constants";

interface Props {
  car: Car;
}

const CarItem: FC<Props> = ({ car }) => {
  return (
    <>
      <FadeContent
        blur={true}
        duration={800}
        easing="ease-out"
        initialOpacity={0}
      >
        <Link href={"#"}>
          <Card
            elevation={10}
            sx={{
              maxWidth: 345,
              margin: 2,
              borderRadius: 5,
              paddingX: 3,
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
              {powerTypeIcon[car.powerType]}
            </Box>
            <CardContent>
              <Typography variant="h5">
                {car.brand.name.toLocaleUpperCase()}{" "}
                {car.model.name}
              </Typography>
              <Typography variant="caption">
                {car.year}
              </Typography>
              <Divider />
              <Typography
                variant="body2"
                marginY={3}
                sx={{
                  textAlign: "justify",
                  height: "100px",
                  overflow: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                {car.description}
              </Typography>
              <Box>
                <Typography
                  variant="h6"
                  display={"flex"}
                  justifyContent={"flex-end"}
                >
                  <ShinyText
                    text={`$${car.price} per day`}
                    disabled={false}
                    speed={3}
                  />
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Link>
      </FadeContent>
    </>
  );
};

export default CarItem;
