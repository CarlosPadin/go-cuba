import { useState } from "react";
import { SnackbarCloseReason } from "@mui/material";

export const useCustomSnackbar = (initialOpen = false) => {
  const [open, setOpen] = useState(initialOpen);

  const openSnackbar = () => setOpen(true);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return { open, openSnackbar, handleClose, setOpen };
};
