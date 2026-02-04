"use client";

import { FC, useState } from "react";
import { useTranslations } from "next-intl";
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
import dayjs, { Dayjs } from "dayjs";
import { cubanCities } from "@/src/constants";
import { useResponsive } from "@/src/hooks";
import AutocompleteInput, {
  Option,
} from "../forms/AutocompleteInput";
import { useRouter } from "next/navigation";
import CustomDateRangePicker from "./CustomDateRangePicker";
import SearchBarButton from "./SearchBarButton";
import Link from "next/link";

const SearchBar: FC = () => {
  const t = useTranslations("Explore");
  const currentDate = dayjs();
  const { isDesktop } = useResponsive();
  const router = useRouter();

  const [city, setCity] = useState<string | null>(null);
  const [initialDate, setInitialDate] = useState<
    string | null
  >(null);
  const [finalDate, setFinalDate] = useState<string | null>(
    null,
  );

  const handleSearch = () => {
    const params = new URLSearchParams();

    // Add params to the query string if they exist
    if (city) {
      params.set("city", city);
    }

    if (initialDate) {
      params.set("initialDate", initialDate);
    }

    if (finalDate) {
      params.set("finalDate", finalDate);
    }

    const queryString = params.toString();
    const searchUrl = queryString
      ? `/search?${queryString}`
      : "/search";

    router.push(searchUrl);
  };

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
          display: "flex",
          justifyContent: "center",
        }}
      >
        {!isDesktop ? (
          <Link href={'/search'}>
            <SearchBarButton text={t("customSearch")} />
          </Link>
        ) : (
          <Box
            display="flex"
            justifyContent="space-around"
            border={"1px solid rgba(0, 0, 0, 0.1)"}
            borderRadius="15px"
            sx={{
              background: "rgba(255, 255, 255, 1)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              padding: "12px",
              gap: 2,
            }}
          >
            <Box sx={{ minWidth: 200 }}>
              <AutocompleteInput
                label="city"
                options={cubanCities}
                value={city}
                handleChange={(e, citySelected) =>
                  setCity(citySelected)
                }
              />
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <CustomDateRangePicker
                display="row"
                initialDate={initialDate}
                finalDate={finalDate}
                handldeInitialDateChange={setInitialDate}
                handleFinalDateChange={setFinalDate}
              />
            </Box>
            <IconButton
              color="primary"
              onClick={handleSearch}
            >
              <Search />
            </IconButton>
          </Box>
        )}
      </Container>
    </>
  );
};

export default SearchBar;
