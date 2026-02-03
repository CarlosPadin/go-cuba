"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import { Autocomplete, TextField } from "@mui/material";
import { carTypes } from "@/src/constants";

interface AutocompleteInputProps {
  options: string[];
  label: string;

  handleChange: (event: any, valueSelected: any) => void;
}

const AutocompleteInput: FC<AutocompleteInputProps> = ({
  options,
  label,
  handleChange,
}) => {
  const t = useTranslations("Explore");

  return (
    <Autocomplete
      disablePortal
      options={options}
      onChange={handleChange}
      sx={{
        width: '100%',
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={t(label)}
          color="success"
          variant="outlined"
          size="small"
        />
      )}
    />
  );
};

export default AutocompleteInput;
