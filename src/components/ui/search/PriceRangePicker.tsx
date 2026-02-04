'use client';

import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import { Slider, Stack, Typography } from "@mui/material";

interface PriceRangePickerProps {
  handleChange: (e: any, newValue: number[]) => void;
}

const PriceRangePicker: FC<PriceRangePickerProps> = ({
  handleChange,
}) => {
  const [value, setValue] = useState<number[]>([10, 150]);
  const t = useTranslations("Explore");

  return (
    <Stack direction={"column"} spacing={2} sx={{ width: "100%" }}>
      <Typography variant="body1" display={'flex'} justifyContent={'center'}>{t("priceRange")}:</Typography>
      <Slider
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        onChangeCommitted={handleChange}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => `$${value}`}
        min={0}
        max={200}
        step={1}
      />
    </Stack>
  );
};

export default PriceRangePicker;
