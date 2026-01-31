import styles from "./page.module.css";
import { Box } from "@mui/material";
import Banner from "@/src/components/ui/banner";
import { ExploreCars } from "../components/containers";
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
