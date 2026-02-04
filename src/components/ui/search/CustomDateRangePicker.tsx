"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import {
  DatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { Stack } from "@mui/material";

interface CustomDateRangePickerProps {
  display?: "column" | "row";
  initialDate?: string | null;
  finalDate?: string | null;
  handldeInitialDateChange: (date: string | null) => void;
  handleFinalDateChange: (date: string | null) => void;
}

const CustomDateRangePicker: FC<
  CustomDateRangePickerProps
> = ({
  display = "column",
  initialDate,
  finalDate,
  handldeInitialDateChange,
  handleFinalDateChange,
}) => {
  const currentDate = dayjs();
  const t = useTranslations("Explore");

  const handleInitialChange = (value: Dayjs | null) => {
    handldeInitialDateChange(
      value ? value.format("DD-MM-YYYY") : null,
    );
  };

  const handleFinalChange = (value: Dayjs | null) => {
    handleFinalDateChange(
      value ? value.format("DD-MM-YYYY") : null,
    );
  };

  const initialValue = initialDate
    ? dayjs(initialDate, "DD-MM-YYYY")
    : null;
  const finalValue = finalDate
    ? dayjs(finalDate, "DD-MM-YYYY")
    : null;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack direction={display} spacing={2} sx={{ width: '100%' }}>
        <DatePicker
          label={t("initialDate")}
          format="DD/MM/YYYY"
          minDate={currentDate}
          onChange={handleInitialChange}
          value={initialValue}
          slotProps={{
            field: { clearable: true },
            textField: {
              color: "success",
              variant: "outlined",
              size: "small",
              sx: {
                width: "100%",
              },
            },
          }}
        />

        <DatePicker
          label={t("finalDate")}
          format="DD/MM/YYYY"
          minDate={currentDate}
          onChange={handleFinalChange}
          value={finalValue}
          slotProps={{
            field: { clearable: true },
            textField: {
              color: "success",
              variant: "outlined",
              size: "small",
              sx: {
                width: "100%",
              },
            },
          }}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default CustomDateRangePicker;
