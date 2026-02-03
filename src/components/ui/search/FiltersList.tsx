"use client";

import { FC, useState } from "react";
import { List, ListItem } from "@mui/material";
import AutocompleteInput from "@/src/components/ui/forms/AutocompleteInput";
import {
  carTypes,
  cubanCities,
  powerTypes,
} from "@/src/constants";
import { CustomDateRangePicker, PriceRangePicker } from ".";

const FiltersList: FC = () => {
  const [city, setCity] = useState<null | string>(null);
  const [carType, setCarType] = useState<null | string>(
    null,
  );
  const [powerType, setPowerType] = useState<null | string>(
    null,
  );
  const [initialDate, setInitialDate] =
    useState<null | Date>(null);
  const [finalDate, setFinalDate] = useState<null | Date>(
    null,
  );
  const [price, setPrice] = useState<number[]>([10, 50]);

  console.log("filters selected: ", {
    city,
    carType,
    powerType,
    initialDate,
    finalDate,
    price,
  });

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
          handldeInitialDateChange={(date) =>
            setInitialDate(date)
          }
          handleFinalDateChange={(date) =>
            setFinalDate(date)
          }
        />
      </ListItem>
      <ListItem>
        <PriceRangePicker
          handleChange={(e, newValue) =>
            setPrice(newValue)
          }
        />
      </ListItem>
    </List>
  );
};

export default FiltersList;
