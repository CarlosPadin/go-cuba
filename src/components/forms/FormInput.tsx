"use client";
import { FC, useState } from "react";
import {
  Autocomplete,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  Help,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Control,
  Controller,
  FieldError,
  UseFormRegisterReturn,
} from "react-hook-form";
import { useTranslations } from "next-intl";

import { countries } from "@/src/constants";
import CustomDatePicker from "../ui/date-picker/CustomDatePicker";
import { CustomTooltip } from "../ui/custom-components";
import { ImageInput } from ".";

interface FormInputProps {
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  type?: string;
  name: string;
  control?: Control<any>;
}

const FormInput: FC<FormInputProps> = ({
  label,
  register,
  error,
  type,
  name,
  control,
}) => {
  const t = useTranslations("UserRegistration");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () =>
    setShowPassword((show) => !show);

  return (
    <Stack
      direction={"column"}
      height={"100%"}
      justifyContent={"space-between"}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <Typography variant="body1">
          {t(register.name)}
        </Typography>
        {(name == "ci" || name == "licence") && (
          <CustomTooltip
            title={
              name == "ci"
                ? t("Tooltips.ciHelp")
                : t("Tooltips.licenceHelp")
            }
          >
            <Help sx={{ height: 14 }} color="action" />
          </CustomTooltip>
        )}
      </Stack>

      {type == "text" ? (
        <TextField
          variant="outlined"
          {...register}
          fullWidth
          multiline
          error={!!error}
        />
      ) : type == "select" ? (
        <Autocomplete
          disablePortal
          options={countries}
          renderInput={(params) => (
            <TextField
              {...params}
              {...register}
              fullWidth
              error={!!error}
            />
          )}
        />
      ) : type == "date" ? (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <CustomDatePicker
              label={label}
              value={field.value || null}
              onChange={field.onChange}
              error={!!error}
            />
          )}
        />
      ) : type == "file" && control ? (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <ImageInput
              value={field.value || null}
              onChange={field.onChange}
            />
          )}
        />
      ) : type == "password" ? (
        <OutlinedInput
          type={showPassword ? "text" : "password"}
          {...register}
          onPaste={(e) => e.preventDefault()}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      ) : (
        <TextField
          variant="outlined"
          {...register}
          type={type}
          fullWidth
          multiline={type === "text"}
          error={!!error}
        />
      )}
      {error && (
        <Typography
          variant="caption"
          color="secondary"
          fontWeight={500}
        >
          {t(`Errors.${error.message}`)}
        </Typography>
      )}
    </Stack>
  );
};

export default FormInput;
