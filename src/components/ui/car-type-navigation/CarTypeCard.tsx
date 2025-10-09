"use client";
import { FC } from "react";
import Link from "next/link";
import { Box, Typography, useTheme } from "@mui/material";
import { SpotlightCard } from "../react-bits";

interface CarTypeCardProps {
  name: string;
  label: string;
  carType: string;
}

const CarTypeCard: FC<CarTypeCardProps> = ({
  name,
  label,
  carType,
}) => {
  const isActive = carType === name;
  const theme = useTheme();

  return (
    <Link href={`/${name}`}>
      <SpotlightCard
        className={`custom-spotlight-card ${
          isActive ? "active" : ""
        }`}
        spotlightColor={theme.palette.background.default}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: {xs: '22px', sm: '40px' }
            }}
          >
            {label}
          </Typography>
        </Box>
      </SpotlightCard>
    </Link>
  );
};

export default CarTypeCard;
