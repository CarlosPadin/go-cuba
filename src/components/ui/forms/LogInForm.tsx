"use client";
import { FC, useState } from "react";
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
import { HelpLinks, PasswordInput } from ".";
import { useLogin } from "@/src/hooks/mutations";
import { CustomSnackbar } from "../custom-components";
import { useCustomSnackbar } from "@/src/hooks";

const loginSchema = yup
  .object({
    username: yup
      .string()
      .required(),
    password: yup
      .string()
      .required(),
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
          <Typography variant="body1" color={!!errors.username ? 'secondary' : ''}>
            {t("username")}
          </Typography>
          <TextField
            fullWidth
            {...register("username")}
            error={!!errors.username}
          />
        </Box>
        <Box>
          <Typography variant="body1" color={!!errors.password ? 'secondary' : ''} >
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
                error={!!errors.password}
              />
            )}
          />
        </Box>
        <HelpLinks />
        {/* ---BUTTON--- */}
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
