import { FC } from "react";
import { useTranslations } from "next-intl";
import {
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import FiltersList from "@/src/components/ui/search/FiltersList";

interface FiltersContainerProps {
  isDesktop?: boolean;
}

const FiltersContainer: FC<FiltersContainerProps> = ({
  isDesktop = true,
}) => {
  const t = useTranslations("Explore");

  return (
    <Paper
      elevation={isDesktop ? 10 : 0}
      sx={{ p: 2, borderRadius: 4, height: "100%" }}
    >
      <Stack direction="column" spacing={2}>
        <Typography
          variant="h4"
          display={"flex"}
          justifyContent={"center"}
        >
          {t("filters")}
        </Typography>
        <Divider variant="middle" />
        <FiltersList />
      </Stack>
    </Paper>
  );
};

export default FiltersContainer;
