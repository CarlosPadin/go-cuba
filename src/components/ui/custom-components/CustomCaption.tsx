'use client'
import { FC } from "react"
import { Typography, useTheme } from "@mui/material"

const CustomCaption: FC<{text: string}> = ({text}) => {
  const theme = useTheme();
  return (
    <Typography
        variant="caption"
        marginTop={10}
        marginBottom={4}
        p={2}
        textAlign={'center'}
        sx={{ color: theme.palette.success.main}}
      >
        {text}
      </Typography>
  )
}

export default CustomCaption