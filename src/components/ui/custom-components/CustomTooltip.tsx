"use client";
import { FC, ReactElement } from "react";
import { Tooltip, useTheme } from "@mui/material";

const CustomTooltip: FC<{
  title: string;
  children: ReactElement;
}> = ({ title, children }) => {
  const theme = useTheme();

  return (
    <Tooltip
      title={title}
      placement="top"
      slotProps={{
        popper: {
          sx: {
            "& .MuiTooltip-tooltip": {
              backgroundColor: theme.palette.secondary.main,
            },
          },
        },
      }}
    >
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
