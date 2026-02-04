import type { Metadata } from "next";
import "./globals.css";
import { ThemeRegistry } from "../theme";
import { NextIntlClientProvider } from "next-intl";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import Box from "@mui/material/Box";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";
import { QueryProvider } from "@/src/providers/QueryProvider";
import { SnackbarProvider } from "@/src/providers/SnackbarProvider";

export const metadata: Metadata = {
  title: "GoCuba",
  description:
    "GoCuba is a web app used for renting cars to travel in Cuba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ key: "mui" }}>
          <ThemeRegistry>
            <NextIntlClientProvider>
              <QueryProvider>
                <SnackbarProvider>
                  <Box
                    minHeight={"200vh"}
                    display={"flex"}
                    flexDirection={"column"}
                  >
                    <Navbar />
                    <Box component="main" flex="1">
                      {children}
                    </Box>
                    <Footer />
                  </Box>
                </SnackbarProvider>
              </QueryProvider>
            </NextIntlClientProvider>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
