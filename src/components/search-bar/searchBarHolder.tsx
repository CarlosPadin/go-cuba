import { Box } from "@mui/material"
import ImageCarousel from "../image-carousel/ImageCarousel"
import SearchBar from "./searchBar"

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