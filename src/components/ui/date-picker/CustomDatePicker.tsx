import { FC } from "react";
import {
  DatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

interface CustomDatePickerProps {
  label?: string;
  value?: Dayjs | null;
  minDate?: Dayjs;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "error"
    | "warning";
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
  error?: boolean;

  onChange?: (date: Dayjs | null) => void;
}

const CustomDatePicker: FC<CustomDatePickerProps> = ({
  label,
  value,
  onChange,
  minDate,
  error,
  color = "primary",
  variant = "outlined",
  size = "medium",
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        // label={label}
        value={value}
        onChange={onChange}
        format="DD/MM/YYYY"
        minDate={minDate ?? dayjs("1900-01-01")}
        
        slotProps={{
          field: { clearable: true },
          textField: {
            color,
            variant,
            size,
            fullWidth: true,
            error
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
