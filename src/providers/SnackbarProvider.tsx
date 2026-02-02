"use client";
import { createContext, useState, ReactNode } from "react";
import { SnackbarCloseReason } from "@mui/material";
import { CustomSnackbar } from "@/src/components/ui/custom-components";
import { useTranslations } from "next-intl";

interface SnackbarContextType {
  showSnackbar: (
    text: string,
    severity: "error" | "info" | "warning" | "success",
  ) => void;
}

export const SnackbarContext = createContext<
  SnackbarContextType | undefined
>(undefined);

export const SnackbarProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  // const t = useTranslations("UserRegistration");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<
    "error" | "info" | "warning" | "success"
  >("info");

  const showSnackbar = (
    text: string,
    severity: "error" | "info" | "warning" | "success",
  ) => {
    setMessage(text);
    setSeverity(severity);
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <CustomSnackbar
        open={open}
        closeHandler={handleClose}
        severity={severity}
        text={message}
      />
    </SnackbarContext.Provider>
  );
};
