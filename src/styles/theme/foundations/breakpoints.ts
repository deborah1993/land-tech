"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // para pantallas pequeñas como móviles
      sm: 600, // para pantallas medianas pequeñas
      md: 960, // para pantallas medianas
      lg: 1024, // para pantallas grandes
      xl: 1280, // para pantallas extra grandes
      //   "2xl": 1440,
      //   "3xl": 1920,
    },
  },
});

export default theme;
