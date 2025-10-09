import { FC } from "react";
import { Container, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { CarsPreviewGrid } from "../cars";

const ExploreCars: FC = () => {
  const t = useTranslations();
  return (
    <>
      <Typography
        variant="caption"
        marginTop={10}
        marginBottom={4}
        p={2}
        textAlign={'center'}
        sx={{ color: 'gray'}}
      >
        {t("Explore.caption")}
      </Typography>
      <Container>
        <CarsPreviewGrid carType="sports" limit={3} />
        <CarsPreviewGrid carType="sedan" limit={3} />
        <CarsPreviewGrid carType="suv" limit={3} />
      </Container>
    </>
  );
};

export default ExploreCars;
