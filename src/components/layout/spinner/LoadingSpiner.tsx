"use client";
import { ThreeDots } from "react-loader-spinner";
import { useTheme } from "@mui/material";

const LoadingSpinner = () => {
  const theme = useTheme();
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color={theme.palette.primary.main}
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default LoadingSpinner;
