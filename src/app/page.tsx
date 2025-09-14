import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";
import ImageCarousel from "../components/image-carousel/ImageCarousel";

export default function Home() {
  const t = useTranslations();
  return (
    <div className={styles.page}>
      <main>
        <ImageCarousel />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Typography variant="h1">Hello YaVa Client!!!</Typography>
          <h3>{t('helloworld')}</h3>
        </Box>
      </main>
    </div>
  );
}
