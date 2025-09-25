import { Box } from "@mui/material"

import SearchBar from "./SearchBar"
import ImageCarousel from "../../sections/image-carousel/ImageCarousel"

const SearchBarHolder = () => {
  return (
    <>
      <Box position='relative' zIndex={1}>
        <ImageCarousel />
        <SearchBar />
      </Box>
    </>
  )
}

export default SearchBarHolder