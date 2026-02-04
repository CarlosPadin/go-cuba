"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import { Autocomplete, TextField } from "@mui/material";

export interface Option {
  value: string;
  label: string;
}

interface AutocompleteInputProps {
  value?: string | null;
  options: Option[];
  label: string;

  handleChange: (event: any, valueSelected: any) => void;
}

const AutocompleteInput: FC<AutocompleteInputProps> = ({
  value,
  options,
  label,
  handleChange,
}) => {
  const t = useTranslations("Explore");

  const valueGetter = (e: any, option: Option | null) =>
    handleChange(e, option?.value);

  const selectedOption =
    options.find((opt) => opt.value === value) || null;

  return (
    <Autocomplete
      value={selectedOption}
      disablePortal
      options={options}
      getOptionLabel={(option) => option.label}
      onChange={valueGetter}
      sx={{
        width: "100%",
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
