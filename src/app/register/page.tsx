import { NextPage } from "next";
import {
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import RegisterForm from "@/src/components/ui/forms/RegisterForm";
import { getTranslations } from "next-intl/server";
import { DotGrid } from "@/src/components/ui/react-bits";

export const generateMetadata = async () => {
  const t = await getTranslations();

  return {
    title: `GoCuba | ${t("Navbar.register")}`,
    description: t("registerPageDesc"),
  };
};

const Signup: NextPage = () => {
  const t = useTranslations("UserRegistration");
  return (
    <Box
      position={"relative"}
      width={"100%"}
      height={"120vh"}
    >
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
        <Paper elevation={10} sx={{ p: 5 }}>
          <Typography variant="h3" marginBottom={5}>
            {t("register")}
          </Typography>
          <RegisterForm />
        </Paper>
      </Container>
    </Box>
  );
};

export default Signup;
