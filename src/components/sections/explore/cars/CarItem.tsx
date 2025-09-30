import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { Car } from "@/src/interfaces";
import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import classes from "./CarItem.module.css";
import {
  FadeContent,
  ShinyText,
} from "@/src/components/ui/react-bits";

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
                left={"75%"}
              >
                <b>{car.year}</b>
              </Typography>
            </Box>
            <CardContent>
              <Typography variant="h6">
                <b>{car.brand.name.toLocaleUpperCase()}</b>{" "}
                {car.model.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "gray" }}
              >
                {`${car.powerType.toUpperCase()} (${car.kilometers.toLocaleString()} km)`}
              </Typography>
              <Box marginTop={3}>
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
