import { FC } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@mui/material";
import CustomCaption from "@/src/components/ui/custom-components/CustomCaption";
import { CarsPreviewGrid } from ".";

const ExploreCars: FC = () => {
  const t = useTranslations();
  return (
    <>
    <CustomCaption text={t("Explore.caption")} />
      <Container>
        <CarsPreviewGrid carType="sports" limit={3} />
        <CarsPreviewGrid carType="sedan" limit={3} />
        <CarsPreviewGrid carType="suv" limit={3} />
      </Container>
    </>
  );
};

export default ExploreCars;
