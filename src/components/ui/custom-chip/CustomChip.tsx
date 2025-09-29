import { FC, ReactElement } from 'react'
import { Box } from '@mui/material'

const CustomChip: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={5}
      borderColor={"black"}
      border={1}
      minHeight={50}
      minWidth={100}
      padding={2}
>
      {children}
    </Box>
  )
}

export default CustomChip