import styles from "./page.module.css";
import { Box } from "@mui/material";
import ExploreCars from "../components/ui/explore-cars/ExploreCars";
import Banner from "../components/ui/banner";


export default function Home() {

  return (
    <div className={styles.page}>
      <main>
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
