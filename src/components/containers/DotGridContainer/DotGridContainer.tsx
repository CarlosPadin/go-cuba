import { FC, ReactNode } from "react";
import { Container } from "@mui/material";
import { DotGrid } from "../../ui/react-bits";

interface IProps {
  children: ReactNode;
}

const DotGridContainer: FC<IProps> = ({ children }) => {
  return (
    <>
      <DotGrid
        dotSize={3}
        gap={15}
        baseColor="#0A2463"
        activeColor="#fffaff"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
      <Container
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children}
      </Container>
    </>
  );
};

export default DotGridContainer;
