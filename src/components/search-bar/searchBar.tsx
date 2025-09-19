"use client";
import { FC } from "react";
import {
  Autocomplete,
  Box,
  Container,
  IconButton,
  TextField,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import {
  DatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { cities } from "@/src/constants";

const SearchBar: FC = () => {
  const currentDate = dayjs(); //Debe ser la fecha que el usuario escoja mas uno en el segundo DatePicker

  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          position: "absolute",
          zIndex: 2,
          top: "70%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-around"
          border={"1px solid rgba(0, 0, 0, 0.1)"}
          borderRadius="50px"
          sx={{
            background: "rgba(255, 255, 255, 0.71)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            padding: "12px",
          }}
        >
          <Autocomplete
            disablePortal
            options={cities}
            sx={{
              width: 200,
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Ciudad"
                color="primary"
                variant="standard"
              />
            )}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Fecha inicial"
              format="DD/MM/YYYY"
              minDate={currentDate}
              slotProps={{
                field: { clearable: true },
                textField: {
                  color: "primary",
                  variant: "standard",
                },
              }}
            />

            <DatePicker
              label="Fecha final"
              format="DD/MM/YYYY"
              minDate={currentDate}
              slotProps={{
                field: { clearable: true },
                textField: {
                  color: "primary",
                  variant: "standard",
                },
              }}
            />
          </LocalizationProvider>
          <IconButton>
            <Search />
          </IconButton>
        </Box>
      </Container>
    </>
  );
};

export default SearchBar;
