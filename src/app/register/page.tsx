import { NextPage } from "next";
import {
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import RegisterForm from "@/src/components/ui/forms/RegisterForm";
import { DotGridContainer } from "@/src/components/containers";

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
      sx={{ height: { xs: "1070px", sm: "800px" } }}
    >
      <DotGridContainer>
        <Paper elevation={10} sx={{ p: 5 }}>
          <Typography variant="h3" marginBottom={5}>
            {t("register")}
          </Typography>
          <RegisterForm />
        </Paper>
      </DotGridContainer>
    </Box>
  );
};

export default Signup;
