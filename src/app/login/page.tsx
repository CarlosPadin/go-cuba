import { NextPage } from "next";
import {
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { LogInForm } from "@/src/components/ui/forms";
import DotGridContainer from "@/src/components/containers/DotGridContainer/DotGridContainer";

const LogIn: NextPage = () => {
  const t = useTranslations("UserRegistration");
  return (
    <main>
      <Box
        position={"relative"}
        width={"100%"}
        height={"700px"}
      >
        <DotGridContainer>
          <Paper
            sx={{
              p: 4,
              borderRadius: 2,
              boxShadow: 3,
              minWidth: 400,
            }}
          >
            <Typography variant="h3" mb={3}>
              {t("login")}
            </Typography>
            <LogInForm />
          </Paper>
        </DotGridContainer>
      </Box>
    </main>
  );
};

export default LogIn;
