import styles from "./page.module.css";
import { Box } from "@mui/material";
import ExploreCars from "../components/sections/explore/ExploreCars";
import SearchBarHolder from "../components/ui/search-bar/searchBarHolder";
import Banner from "../components/sections/banner";


export default function Home() {

  return (
    <div className={styles.page}>
      <main>
        {/* <SearchBarHolder /> */}
        <Banner /> 
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <ExploreCars />

        </Box>
      </main>
    </div>
  );
}
