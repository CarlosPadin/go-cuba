import { ReactElement } from "react";
import {
  BatteryChargingFull,
  EnergySavingsLeaf,
  LocalGasStation,
  OilBarrel,
} from "@mui/icons-material";
import "../components/ui/react-bits/ShinyText.css";

const style = {
  position: "absolute",
  zIndex: 2,
  left: "75%",
  top: "5%",
  color: "rgba(116, 115, 115, 0.47)",
  backgrundFilter: "blur(20px)",
};

export const powerTypeIcon: Record<string, ReactElement> = {
  diesel: <OilBarrel sx={style} />,
  electric: <BatteryChargingFull sx={style} />,
  gasoline: <LocalGasStation sx={style} />,
  hybrid: <EnergySavingsLeaf sx={style} />,
};

export const carTypes = [
  { name: "sports", label: "Sport" },
  { name: "sedan", label: "Sedan" },
  { name: "suv", label: "SUV" },
];