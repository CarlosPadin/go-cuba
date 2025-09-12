import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";

export default function Home() {
  const t = useTranslations();
  return (
    <div className={styles.page}>
      <main>
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
