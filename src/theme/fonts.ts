// fonts.ts (o directamente en theme.ts si quieres)
import { Montserrat, Roboto_Mono, Bruno_Ace_SC } from "next/font/google";

// Branding
export const brunoAceSC = Bruno_Ace_SC({
  subsets: ["latin"],
  weight: ["400"], 
  variable: "--font-bruno-ace", 
});

// Párrafos
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

// Captions / monospace
export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto-mono",
});
