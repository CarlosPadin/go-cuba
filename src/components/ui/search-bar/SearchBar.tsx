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
import { cubanCities } from "@/src/constants";
import { useResponsive } from "@/src/hooks";
import { useTranslations } from "next-intl";

const SearchBar: FC = () => {
  const currentDate = dayjs(); //Debe ser la fecha que el usuario escoja mas uno en el segundo DatePicker
  const { isDesktop } = useResponsive();
  const t = useTranslations();

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
          borderRadius="15px"
          sx={{
            background: "rgba(255, 255, 255, 1)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            padding: "12px",
          }}
        >
          {!isDesktop ? (
            <TextField
              label={t('Explore.search')}
              variant="outlined"
              color="success"
              size="small"
              fullWidth
            />
          ) : (
            <>
              <Autocomplete
                disablePortal
                options={cubanCities}
                sx={{
                  width: 200,
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={t('Explore.city')}
                    color="success"
                    variant="outlined"
                    size="small"
                  />
                )}
              />

              <LocalizationProvider
                dateAdapter={AdapterDayjs}
              >
                <DatePicker
                  label={t('initialDate')}
                  format="DD/MM/YYYY"
                  minDate={currentDate}
                  slotProps={{
                    field: { clearable: true },
                    textField: {
                      color: "success",
                      variant: "outlined",
                      size: "small",
                    },
                  }}
                />

                <DatePicker
                  label={t('finalDate')}
                  format="DD/MM/YYYY"
                  minDate={currentDate}
                  slotProps={{
                    field: { clearable: true },
                    textField: {
                      color: "success",
                      variant: "outlined",
                      size: "small",
                    },
                  }}
                />
              </LocalizationProvider>
            </>
          )}
          <IconButton color="primary">
            <Search />
          </IconButton>
        </Box>
      </Container>
    </>
  );
};

export default SearchBar;
