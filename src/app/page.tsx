import styles from "./page.module.css";
import { Box } from "@mui/material";
import SearchBarHolder from "../components/search-bar/searchBarHolder";
import ExploreCars from "../components/sections/explore/ExploreCars";


export default function Home() {

  return (
    <div className={styles.page}>
      <main>
        <SearchBarHolder />
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
