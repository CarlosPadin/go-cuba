import { FC } from "react";
import { Alert, Snackbar } from "@mui/material";

interface CustomSnackbarProps {
  open: boolean;
  text: string;
  severity: "error" | "info" | "warning" | "success";

  closeHandler: () => void;
}

const CustomSnackbar: FC<CustomSnackbarProps> = ({
  open,
  severity,
  text,
  closeHandler,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={closeHandler}
      anchorOrigin={{ vertical: "bottom", horizontal: 'right'}}
    >
      <Alert
        onClose={closeHandler}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
