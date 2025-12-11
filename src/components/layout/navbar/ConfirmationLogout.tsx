import { FC } from "react";
import {
  Modal,
  Box,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { useTranslations } from "next-intl";

interface IConfirmationModalProps {
  open: boolean;
  closeHandler: () => void;
  confirm: () => void;
}

const ConfirmationLogout: FC<IConfirmationModalProps> = ({
  open,
  closeHandler,
  confirm,
}) => {
  const t = useTranslations("Navbar");
  return (
    <Modal open={open} onClose={closeHandler}>
      <Box
        sx={{
          bgcolor: "white",
          color: "black",
          maxWidth: "350px",
          maxHeight: "300px",
          borderRadius: "12px",
          p: 3,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          variant="h6"
          mb={5}
          textAlign={"center"}
        >
          {t("confirmQuestion")}
        </Typography>
        <Stack direction={"row"} gap={1}>
          <Button onClick={closeHandler} fullWidth>
            {t("cancel")}
          </Button>
          <Button
            onClick={confirm}
            variant="contained"
            fullWidth
          >
            {t("confirm")}
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ConfirmationLogout;
