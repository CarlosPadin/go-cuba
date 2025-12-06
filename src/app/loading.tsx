import Box from "@mui/material/Box";
import LoadingSpinner from "../components/layout/spinner/LoadingSpiner";

export default function Loading() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <LoadingSpinner />
    </Box>
  );
}
