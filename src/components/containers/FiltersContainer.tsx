import { FC } from "react";
import {
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import FiltersList from "@/src/components/ui/search/FiltersList";

const FiltersContainer: FC = () => {
  return (
    <Paper elevation={10} sx={{ p: 2, borderRadius: 4 }}>
      <Stack direction="column" spacing={2}>
        <Typography variant="h4" display={'flex'} justifyContent={'center'}>Filters</Typography>
        <Divider variant="middle" />
        <FiltersList />
      </Stack>
    </Paper>
  );
};

export default FiltersContainer;
