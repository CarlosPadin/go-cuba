"use client";

import { FC, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Grid,
  CircularProgress,
  Typography,
  Stack,
} from "@mui/material";
import { filterCars } from "@/src/actions/cars";
import { useCarFilters } from "@/src/hooks/useCarFilters";
import { ICar } from "@/src/interfaces";
import { CarItem } from "@/src/components/ui/car-info";

const FilteredCars: FC = () => {
  const t = useTranslations("Explore");
  const { filters } = useCarFilters();
  const [cars, setCars] = useState<ICar[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      setError(null);
      try {
        const filteredCars = await filterCars(filters);
        setCars(filteredCars);
      } catch (err) {
        setError("Error loading cars");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [filters]);

  if (loading) {
    return (
      <Grid
        container
        spacing={2}
        p={2}
        sx={{ width: "100%" }}
        justifyContent="center"
      >
        <CircularProgress />
      </Grid>
    );
  }

  if (error) {
    return (
      <Grid
        container
        spacing={2}
        p={2}
        sx={{ width: "100%" }}
        justifyContent="center"
      >
        <Typography color="error">{error}</Typography>{" "}
        {/* //TODO: Translate */}
      </Grid>
    );
  }

  if (cars.length === 0) {
    return (
      <Grid
        container
        spacing={2}
        p={2}
        sx={{ width: "100%" }}
        justifyContent="center"
      >
        <Typography>{t("noCarsFound")}</Typography>
      </Grid>
    );
  }

  return (
    <Stack direction={"column"} sx={{ width: '100%' }}>
      <Typography
        variant="h4"
        display={"flex"}
        justifyContent={"center"}
      >
        {t("search")}
      </Typography>
      <Grid container>
        {cars.map((car) => (
          <Grid key={car.id} size={{ xs: 6, md: 4, lg: 4 }}>
            <CarItem car={car} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default FilteredCars;
