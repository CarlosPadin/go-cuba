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
  handldeInitialDateChange: (date: Date | null) => void;
  handleFinalDateChange: (date: Date | null) => void;
}

const CustomDateRangePicker: FC<
  CustomDateRangePickerProps
> = ({
  handldeInitialDateChange,
  handleFinalDateChange,
}) => {
  const currentDate = dayjs();
  const t = useTranslations();

  const handleInitialChange = (value: Dayjs | null) => {
    handldeInitialDateChange(value ? value.toDate() : null);
  };

  const handleFinalChange = (value: Dayjs | null) => {
    handleFinalDateChange(value ? value.toDate() : null);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack direction={"column"} spacing={2}>
        <DatePicker
          label={t("initialDate")}
          format="DD/MM/YYYY"
          minDate={currentDate}
          onChange={handleInitialChange}
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
