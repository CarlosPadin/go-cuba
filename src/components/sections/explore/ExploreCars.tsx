import { FC } from "react";
import { Container, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { CarsPreviewGrid } from "./cars";

const ExploreCars: FC = () => {
  const t = useTranslations();
  return (
    <>
      <Typography
        variant="subtitle1"
        marginTop={10}
        marginBottom={4}
        sx={{ color: 'gray'}}
      >
        {t("Explore.caption")}
      </Typography>
      <Container>
        <CarsPreviewGrid carType="sports" />
        <CarsPreviewGrid carType="sedan" />
        <CarsPreviewGrid carType="suv" />
      </Container>
    </>
  );
};

export default ExploreCars;
