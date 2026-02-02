"use client";
import { FC } from "react";
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
import { useSnackbar } from "@/src/hooks";

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
  const { showSnackbar } = useSnackbar();
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
      onSuccess: (res) => {
        router.push("/");
      },
      onError: (error: any) => {
        if (error.message === "INVALID_USERNAME_OR_PASSWORD") {
          showSnackbar(t("userOrPassword"), "error");
        } else {
          showSnackbar(t("unexpectedError"), "error");
          console.log("Server Error: ", error);
        }
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
        <Button variant="contained" type="submit" fullWidth>
          {t("send")}
        </Button>
      </Stack>
    </form>
  );
};

export default LogInForm;
