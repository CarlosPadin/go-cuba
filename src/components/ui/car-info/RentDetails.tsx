"use client";
import { FC } from "react";
import { useTranslations } from "next-intl";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  DateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { PickupLocation, RentCost } from ".";

interface CarAsideProps {
  price: number;
  pickupLocation: string;
}

const RentDetails: FC<CarAsideProps> = ({
  price,
  pickupLocation,
}) => {
  const t = useTranslations();
  const currentDate = dayjs();

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography
        variant="h4"
        mb={2}
        display={"flex"}
        justifyContent={"center"}
      >
        {t("Car.rentalCost")}
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Stack direction={"column"} gap={2} my={5}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label={t("initialDate")}
            format="DD/MM/YYYY hh:mm A"
            minDate={currentDate}
            slotProps={{
              field: { clearable: true },
              textField: {
                color: "primary",
                variant: "outlined",
              },
            }}
          />
          <DateTimePicker
            label={t("finalDate")}
            format="DD/MM/YYYY hh:mm A"
            minDate={currentDate}
            slotProps={{
              field: { clearable: true },
              textField: {
                color: "primary",
                variant: "outlined",
              },
            }}
          />
        </LocalizationProvider>
      </Stack>

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        my={3}
      >
        <Typography variant="body1">
          <b>{t("Car.applyDiscount")}</b>:
        </Typography>
        <TextField
          variant="outlined"
          disabled
          size="small"
        />
      </Stack>

      <RentCost price={price} />
      <Divider />
      <PickupLocation pickupLocation={pickupLocation} />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        sx={{ mt: 5 }}
      >
        {t("pay")}
      </Button>
    </Paper>
  );
};

export default RentDetails;
