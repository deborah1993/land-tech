// RootLayout.js
import { Inter } from "next/font/google";
import "./globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles"; // Asegúrate de importar desde @mui/material/styles
import theme from "../styles/theme/foundations/breakpoints"; // Asegúrate de que la ruta es correcta

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Land Tech",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
