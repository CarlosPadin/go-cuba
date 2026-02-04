import { FC } from "react";
import { Box } from "@mui/material";
import { LiquidEther } from "@/src/components/ui/react-bits";
import { SearchBar } from "@/src/components/ui/search";

const Banner: FC = () => {
  return (
    <Box width={'100%'} height={500} position={'relative'}>
      <LiquidEther
        colors={["#3E92CC", "#3E92CC", "#D8315B"]}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
      <SearchBar />
    </Box>
  );
};

export default Banner;
