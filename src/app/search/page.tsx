import { NextPage } from 'next'
import { Container, Stack } from '@mui/material'

import FiltersContainer from '@/src/components/containers/FiltersContainer'
import FilteredCars from '@/src/components/containers/FilteredCars'
import { FiltersProvider } from '@/src/providers/FiltersProvider'

const SearchPage: NextPage = () => {
  return (
    <FiltersProvider>
      <Container sx={{ mt: 15, mb: 4 }}>
        <Stack direction={'row'} spacing={2}>
          <FiltersContainer />
          <FilteredCars />
        </Stack>
      </Container>
    </FiltersProvider>
  )
}

export default SearchPage