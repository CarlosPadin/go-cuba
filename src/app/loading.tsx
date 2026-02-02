import Box from "@mui/material/Box";
import LoadingSpinner from "@/src/components/ui/custom-components/LoadingSpiner";

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
