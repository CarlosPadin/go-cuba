import { FC } from "react";
import { useTranslations } from "next-intl";
import {
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { OwnerInfo } from ".";
import { Caracteristics } from "@/src/interfaces";
import { CountUp, PixelCard } from "../react-bits";

interface CarMainProps {
  caracteristics: Caracteristics;
  description: string;
  kilometers: number;
  ownerId: string;
}

const CarMain: FC<CarMainProps> = ({
  caracteristics,
  description,
  kilometers,
  ownerId,
}) => {
  const t = useTranslations("Car");

  return (
    <>
      <OwnerInfo ownerId={ownerId} />
      <Divider sx={{ my: 2 }} />
      <Typography variant="body1">{description}</Typography>

      <PixelCard variant="blue">
        <Typography
          variant="h6"
          mt={2}
          mb={1}
          position={"absolute"}
        >
          <CountUp
            from={0}
            to={kilometers}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
          />
          {` km`}
        </Typography>
      </PixelCard>

      <Typography variant="h6" mt={2} mb={1}>
        {t("generalCaracteristics")}
      </Typography>
      <Grid container spacing={1} mb={2}>
        {caracteristics.general.map((item) => (
          <Chip
            key={item}
            // variant="outlined"
            label={item}
            color="success"
          />
        ))}
      </Grid>

      <Typography variant="h6" mt={2}>
        {t("rules")}
      </Typography>
      <List dense>
        {caracteristics.rules.map((item) => (
          <ListItem key={item}>
            <Typography variant="body2">
              - {item}
            </Typography>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default CarMain;
