import { NextPage } from "next";
import { Box, Container, Paper, Typography } from "@mui/material";
import { DotGrid } from "@/src/components/ui/react-bits";
import { LogInForm } from "@/src/components/ui/forms";
import { useTranslations } from "next-intl";

const LogIn: NextPage = () => {
  const t = useTranslations('UserRegistration')
  return (
    <main>
      <Box
        position={"relative"}
        width={"100%"}
        height={"100vh"}
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
      </Box>
      <Container
        sx={{
          position: "absolute",
          top: { xs: "55%", lg: "50%"},
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            minWidth: 400,
          }}
        >
          <Typography variant="h3" mb={3}>{t('login')}</Typography>
          <LogInForm />
        </Paper>
      </Container>
    </main>
  );
};

export default LogIn;
