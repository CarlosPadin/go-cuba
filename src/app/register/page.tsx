"use client";
import { NextPage } from "next";
import {
  Container,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import RegisterForm from "@/src/components/forms/RegisterForm";

const Signup: NextPage = () => {
  const theme = useTheme();
  return (
    <Container sx={{ my: 15 }}>
      <Paper sx={{p: 5}}>
        <Typography variant="h3" marginBottom={5}>Register</Typography>
        <RegisterForm />
      </Paper>
    </Container>
  );
};

export default Signup;
