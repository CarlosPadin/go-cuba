import { FC } from 'react'
import { Skeleton, Stack } from '@mui/material'

const CarsByTypeSkeleton: FC = () => {
  return (
    <Stack direction={'row'} spacing={4} sx={{ width: '100%' }}>
      <Skeleton animation='pulse' variant="rounded" width={220} height={270} />
      <Skeleton animation='pulse' variant="rounded" width={220} height={270} />
      <Skeleton animation='pulse' variant="rounded" width={220} height={270} />
    </Stack>
  )
}

export default CarsByTypeSkeleton