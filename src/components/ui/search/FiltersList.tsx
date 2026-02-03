"use client";

import { FC } from "react";
import { List, ListItem } from "@mui/material";
import AutocompleteInput from "@/src/components/ui/forms/AutocompleteInput";
import {
  carTypes,
  cubanCities,
  powerTypes,
} from "@/src/constants";
import { CustomDateRangePicker, PriceRangePicker } from ".";
import { useCarFilters } from "@/src/hooks/useCarFilters";

const FiltersList: FC = () => {
  const {
    filters,
    setCity,
    setCarType,
    setPowerType,
    setDateRange,
    setPrice,
  } = useCarFilters();

  const initialDateChangeHandler = (date: string | null) => {
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
          handleChange={(e, citySelected) =>
            setCity(citySelected)
          }
        />
      </ListItem>
      <ListItem>
        <AutocompleteInput
          label="carType"
          options={carTypes}
          handleChange={(e, carTypeSelected) =>
            setCarType(carTypeSelected)
          }
        />
      </ListItem>
      <ListItem>
        <AutocompleteInput
          label="powerType"
          options={powerTypes}
          handleChange={(e, powerTypeSelected) =>
            setPowerType(powerTypeSelected)
          }
        />
      </ListItem>
      <ListItem>
        <CustomDateRangePicker
          handldeInitialDateChange={initialDateChangeHandler}
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
