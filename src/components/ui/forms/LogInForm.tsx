"use client";
import { FC, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { CustomSnackbar } from "../custom-components";
import { useCustomSnackbar } from "@/src/hooks";

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
  const router = useRouter();
  const {
    open: snackbar,
    openSnackbar,
    handleClose,
  } = useCustomSnackbar();
  const [userNotFoundError, setUserNotFoundError] =
    useState(false);
  const [wrongPasswordError, setWrongPasswordError] =
    useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitHandler = (data: any) => {
    setUserNotFoundError(false);
    setWrongPasswordError(false);
    loginUser.mutate(data, {
      onSuccess: (res) => {
        router.push("/");
      },
      onError: (error: any) => {
        if (error.message === "USER_NOT_FOUND") {
          setUserNotFoundError(true);
        } else if (error.message === "WRONG_PASSWORD") {
          setWrongPasswordError(true);
        } else {
          console.log("Server Error: ", error.message);
        }
        openSnackbar();
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
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"end"}
        >
          <Link href={"#"}>
            <Typography
              variant="subtitle1"
              fontSize={11}
              color="primary"
            >
              {t("passwordForget")}
            </Typography>
          </Link>
          <Link href={"/register"}>
            <Typography
              variant="subtitle1"
              fontSize={11}
              color="primary"
            >
              {t("register")}
            </Typography>
          </Link>
        </Box>
        <Button variant="contained" type="submit" fullWidth>
          {t("send")}
        </Button>
      </Stack>
      <CustomSnackbar
        open={snackbar}
        closeHandler={handleClose}
        severity="error"
        text={
          userNotFoundError
            ? t("userNotFound")
            : wrongPasswordError
            ? t("wrongPassword")
            : t("unexpectedError")
        }
      />
    </form>
  );
};

export default LogInForm;
