import { Theme } from "@mui/material/styles";

export const menuPaperStyles = (theme: Theme) => (
  {
  width: 200,
  overflow: "hidden",
  bgcolor: "rgba(255, 255, 255, 0.5)",
  backdropFilter: "blur(10px)",
  borderRadius: 3,
  color: theme.palette.text.primary,

  "& .MuiMenuItem-root:hover": {
    bgcolor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
});
