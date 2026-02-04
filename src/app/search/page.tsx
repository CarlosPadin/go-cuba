"use client";

import { useState } from "react";
import { NextPage } from "next";
import {
  Container,
  Stack,
  Drawer,
  Box,
  Button,
  Paper,
} from "@mui/material";

import FiltersContainer from "@/src/components/containers/FiltersContainer";
import FilteredCars from "@/src/components/containers/FilteredCars";
import { FiltersProvider } from "@/src/providers/FiltersProvider";
import { useResponsive } from "@/src/hooks/useResponsive";
import { TuneRounded } from "@mui/icons-material";

const SearchPage: NextPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isDesktop } = useResponsive();

  return (
    <FiltersProvider>
      <Container sx={{ mt: 15, mb: 4, height: '100%' }}>
        {/* Filters button for mobile/tablet */}
        {!isDesktop && (
          <Paper
            elevation={10}
            sx={{
              mb: 2,
              width: 50,
              height: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
            }}
          >
            <Button
              variant="text"
              onClick={() => setDrawerOpen(true)}
              size="large"
            >
              <TuneRounded />
            </Button>
          </Paper>
        )}

        {/* Drawer for mobile/tablet */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              width: { xs: "85%", sm: 350 },
              maxWidth: "100%",
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            <FiltersContainer isDesktop={isDesktop} />
          </Box>
        </Drawer>

        <Stack direction="row">
          {isDesktop && <FiltersContainer />}
          <FilteredCars />
        </Stack>
      </Container>
    </FiltersProvider>
  );
};

export default SearchPage;
