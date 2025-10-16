import { NextPage } from "next";
import {
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import RegisterForm from "@/src/components/forms/RegisterForm";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async () => {
  const t = await getTranslations();

  return {
    title: `GoCuba | ${t('Navbar.register')}`,
    description: t('registerPageDesc')
  };
}

const Signup: NextPage = () => {
  const t = useTranslations('UserRegistration')
  return (
    <Container sx={{ my: 15 }}>
      <Paper elevation={10} sx={{p: 5}}>
        <Typography variant="h3" marginBottom={5}>{t('register')}</Typography>
        <RegisterForm />
      </Paper>
    </Container>
  );
};

export default Signup;
