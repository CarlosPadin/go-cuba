"use client";
import { createTheme } from "@mui/material/styles";
import { brunoAceSC, montserrat, robotoMono } from ".";

// // Extender la interfaz de MUI para aceptar un nuevo color
// declare module "@mui/material/styles" {
//   interface TypeBackground {
//     contrast?: string; // 👈 añadimos la propiedad contrast
//   }
// }

const theme = createTheme({
  palette: {
    primary: {
      main: "#0A2463",
      contrastText: "#fffaff",
    },
    secondary: {
      main: "#D8315B",
      contrastText: "#fffaff",
    },
    success: {
      main: "#3E92CC",
      contrastText: "#fffaff",
    },
    info: {
      main: "#ec6d19",
      contrastText: "#fffaff",
    },
    background: {
      default: "#fffaff",
      paper: "#ffffff",
    },
    text: {
      primary: "#1E1B18",
      secondary: "#757575",
    },
  },

  typography: {
    fontFamily: montserrat.style.fontFamily,
    h1: {
      fontFamily: brunoAceSC.style.fontFamily,
      fontWeight: 700,
    },
    h2: {
      fontFamily: brunoAceSC.style.fontFamily,
      fontWeight: 600,
    },
    h3: {
      fontFamily: brunoAceSC.style.fontFamily,
      fontWeight: 400,
    },
    h4: {
      fontFamily: brunoAceSC.style.fontFamily,
      fontWeight: 400,
    },
    h5: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 400,
    },
    h6: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 400,
    },
    caption: {
      fontFamily: robotoMono.style.fontFamily,
      fontWeight: 300,
      fontSize: "2vh",
    },
  },
});

export default theme;
