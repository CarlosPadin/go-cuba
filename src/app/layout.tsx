import type { Metadata } from "next";
import "./globals.css";
import { ThemeRegistry } from "../theme";
import { NextIntlClientProvider } from "next-intl";

import Box from "@mui/material/Box";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";
import { QueryProvider } from "../providers/QueryProvider";

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
        <ThemeRegistry>
          <NextIntlClientProvider>
            <QueryProvider>
              <Box
                minHeight={"100vh"}
                display={"flex"}
                flexDirection={"column"}
              >
                <Navbar />
                <Box component="main" flex="1">
                  {children}
                </Box>
                <Footer />
              </Box>
            </QueryProvider>
          </NextIntlClientProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
