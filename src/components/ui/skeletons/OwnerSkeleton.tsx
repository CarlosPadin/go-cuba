import { FC } from 'react'
import { Skeleton, Stack } from '@mui/material'

const OwnerSkeleton: FC = () => {
  return (
    <Stack direction={'row'} spacing={2} sx={{ width: '100%' }}>
      <Skeleton animation="pulse" variant="circular" width={40} height={40} />
      <Skeleton animation='pulse' variant="rounded" width={40} height={270} />
    </Stack>
  )
}

export default OwnerSkeleton