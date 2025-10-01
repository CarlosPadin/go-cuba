import { FC } from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { SpotlightCard } from "../react-bits";

interface CarTypeCardProps {
  name: string;
  label: string;
  carType: string
}

const CarTypeCard: FC<CarTypeCardProps> = ({
  name,
  label,
  carType,
}) => {
  const isActive = carType === name;

  return (
    <Link
      href={`/${name}`}
      style={{ textDecoration: "none" }}
    >
      <SpotlightCard
        className={`custom-spotlight-card ${
          isActive ? "active" : ""
        }`}
        spotlightColor="rgba(0, 229, 255, 0.99)"
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
              color: isActive ? "white" : "black",
              fontWeight: "bold",
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
