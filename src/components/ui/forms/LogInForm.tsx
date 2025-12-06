"use client";
import { FC } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordInput } from ".";
import { useLogin } from "@/src/hooks/mutations";

const loginSchema = yup
  .object({
    username: yup
      .string()
      .required("Introduzca un nombre de usuario"),
    password: yup
      .string()
      .required("Introduzca una contrasena valida"),
  })
  .required();

const LogInForm: FC = () => {
  const t = useTranslations("UserRegistration");
  const loginUser = useLogin();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitHandler = (data: any) => {
    loginUser.mutate(data, {
      onSuccess: (user) => {
        console.log("Usuario logeado:", user);
        // Aquí puedes redirigir o guardar token
      },
      onError: (error: any) => {
        alert(error.message);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Stack direction={"column"} gap={2}>
        
        <Box>
          <Typography variant="body1">
            {t("username")}
          </Typography>
          <TextField
            fullWidth
            {...register("username")}
            error={!!errors.username}
          />
        </Box>
        <Box>
          <Typography variant="body1">
            {t("password")}
          </Typography>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <PasswordInput
                fullWidth
                value={field.value || ""}
                onChange={field.onChange}
              />
            )}
          />
        </Box>
        <Box display={'flex'} flexDirection={'column'} alignItems={'end'}>
          <Link href={"#"}>
            <Typography variant="subtitle1" fontSize={11} color="primary" >Olvidaste tu contrasena?</Typography>
          </Link>
          <Link href={"/register"}>
            <Typography variant="subtitle1" fontSize={11} color="primary" >No te has registrado?</Typography>
          </Link>
        </Box>
        <Button variant="contained" type="submit" fullWidth>
          {t("send")}
        </Button>
      </Stack>
    </form>
  );
};

export default LogInForm;
