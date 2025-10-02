import { FC, ReactNode } from "react";
import { Box } from "@mui/material";

const CustomChip: FC<{
  children: ReactNode;
  color?: string;
}> = ({ children, color }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={5}
      minHeight={50}
      minWidth={100}
      padding={2}
      bgcolor={color}
      sx={{
        border: "1px solid",
        borderColor: color || "black",
      }}
    >
      {children}
    </Box>
  );
};

export default CustomChip;
