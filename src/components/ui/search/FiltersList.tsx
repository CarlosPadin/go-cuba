"use client";

import { FC, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { List, ListItem } from "@mui/material";
import AutocompleteInput from "@/src/components/ui/forms/AutocompleteInput";
import {
  carTypes,
  cubanCities,
  powerTypes,
} from "@/src/constants";
import { CustomDateRangePicker, PriceRangePicker } from ".";
import { useCarFilters } from "@/src/hooks/useCarFilters";
import { useFilterSync } from "@/src/hooks/useFilterSync";

const FiltersList: FC = () => {
  const searchParams = useSearchParams();
  const {
    filters,
    setCity,
    setCarType,
    setPowerType,
    setDateRange,
    setPrice,
  } = useCarFilters();

  useFilterSync(filters);

  // Read query params if exists and update filters
  useEffect(() => {
    const city = searchParams.get("city");
    const carType = searchParams.get("carType");
    const powerType = searchParams.get("powerType");
    const initialDate = searchParams.get("initialDate");
    const finalDate = searchParams.get("finalDate");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

// Just in case the filters are not in sync with the URL
  if (city && city !== filters.city) setCity(city);
  if (carType && carType !== filters.carType) setCarType(carType);
  if (powerType && powerType !== filters.powerType) setPowerType(powerType);
  
  if (initialDate && finalDate) {
    const urlDateRange: [string, string] = [initialDate, finalDate];
    if (JSON.stringify(urlDateRange) !== JSON.stringify(filters.dateRange)) {
      setDateRange(urlDateRange);
    }
  }
  
  if (minPrice && maxPrice) {
    const urlPriceRange = [Number(minPrice), Number(maxPrice)];
    if (JSON.stringify(urlPriceRange) !== JSON.stringify(filters.price)) {
      setPrice(urlPriceRange);
    }
  }
  }, [searchParams]);

  const initialDateChangeHandler = (
    date: string | null,
  ) => {
    setDateRange([date, filters.dateRange[1]]);
  };

  const finalDateChangeHandler = (date: string | null) => {
    setDateRange([filters.dateRange[0], date]);
  };

  return (
    <List>
      <ListItem>
        <AutocompleteInput
          label="city"
          options={cubanCities}
          value={filters.city}
          handleChange={(e, citySelected) =>
            setCity(citySelected)
          }
        />
      </ListItem>
      <ListItem>
        <AutocompleteInput
          label="carType"
          options={carTypes}
          value={filters.carType}
          handleChange={(e, carTypeSelected) =>
            setCarType(carTypeSelected)
          }
        />
      </ListItem>
      <ListItem>
        <AutocompleteInput
          label="powerType"
          options={powerTypes}
          value={filters.powerType}
          handleChange={(e, powerTypeSelected) =>
            setPowerType(powerTypeSelected)
          }
        />
      </ListItem>
      <ListItem>
        <CustomDateRangePicker
          initialDate={filters.dateRange[0]}
          finalDate={filters.dateRange[1]}
          handldeInitialDateChange={
            initialDateChangeHandler
          }
          handleFinalDateChange={finalDateChangeHandler}
        />
      </ListItem>
      <ListItem>
        <PriceRangePicker
          handleChange={(e, newValue) => setPrice(newValue)}
        />
      </ListItem>
    </List>
  );
};

export default FiltersList;
