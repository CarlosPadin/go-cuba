"use client";
import { Grid as SpinnerGrid } from "react-loader-spinner";
import { useTheme } from "@mui/material";

const LoadingSpinner = () => {
  const theme = useTheme();
  return (
    <SpinnerGrid
      visible={true}
      height="70"
      width="70"
      color={theme.palette.primary.main}
      ariaLabel="grid-loading"
      radius="10"
      wrapperStyle={{}}
      wrapperClass="grid-wrapper"
    />
  );
};

export default LoadingSpinner;
