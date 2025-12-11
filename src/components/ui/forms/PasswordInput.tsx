"use client";
import { FC, useState } from "react";
import {
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

interface PasswordInputProps {
  error?: boolean;
  value?: string;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
}

const PasswordInput: FC<PasswordInputProps> = ({
  error = false,
  value,
  fullWidth,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () =>
    setShowPassword((show) => !show);

  return (
    <OutlinedInput
      value={value}
      error={error}
      onChange={(e) => onChange?.(e.target.value)}
      type={showPassword ? "text" : "password"}
      onPaste={(e) => e.preventDefault()}
      fullWidth={fullWidth}
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
  );
};

export default PasswordInput;
